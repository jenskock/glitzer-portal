import { bindArtRatio } from './art-frame.js';

export class MazePuzzle {
  constructor(data, container) {
    this.data = data;
    this.container = container;
    this.drawing = false;
    this.path = [];
    this.onComplete = null;
    
    this.render();
  }

  render() {
    const puzzleDiv = document.createElement('div');
    puzzleDiv.className = 'maze-puzzle art-frame';
    
    // Background image (jungle frame with empty meadow)
    const bg = document.createElement('img');
    bg.src = this.data.image;
    bg.alt = 'Labyrinth';
    puzzleDiv.appendChild(bg);
    bindArtRatio(puzzleDiv, bg);
    
    // Canvas for maze paths and tracing
    const canvas = document.createElement('canvas');
    canvas.className = 'maze-canvas';
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.width = 1600;
    canvas.height = 900;
    
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    
    bg.onload = () => {
      this.drawMaze();
    };
    
    // If image is cached, draw immediately
    if (bg.complete) {
      this.drawMaze();
    }
    
    canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
    canvas.addEventListener('mousemove', (e) => this.draw(e));
    canvas.addEventListener('mouseup', () => this.stopDrawing());
    
    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.startDrawing(e.touches[0]);
    });
    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      this.draw(e.touches[0]);
    });
    canvas.addEventListener('touchend', () => this.stopDrawing());
    
    puzzleDiv.appendChild(canvas);
    this.container.appendChild(puzzleDiv);
  }

  drawMaze() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    
    // Get meadow area from data
    const meadow = this.data.meadow;
    const cx = w * meadow.cx / 100;
    const cy = h * meadow.cy / 100;
    const rx = w * meadow.rx / 100;
    const ry = h * meadow.ry / 100;
    
    // Draw correct path (from path_start_anchor to path_goal_anchor)
    // Path crosses stream on stepping stones
    const startX = w * this.data.pathStart.x / 100;
    const startY = h * this.data.pathStart.y / 100;
    const goalX = w * this.data.pathGoal.x / 100;
    const goalY = h * this.data.pathGoal.y / 100;
    
    ctx.strokeStyle = 'rgba(152, 206, 180, 0.4)';
    ctx.lineWidth = 60;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Main correct path with stream crossing
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    // Wind through meadow, crossing a small stream
    const midX = (startX + goalX) / 2 - 50;
    const midY = (startY + goalY) / 2;
    ctx.quadraticCurveTo(midX, startY - 50, midX, midY);
    // Stream crossing with stepping stones
    ctx.lineTo(midX + 80, midY);
    ctx.quadraticCurveTo(goalX - 50, midY, goalX, goalY);
    ctx.stroke();
    
    // Draw stepping stones on the stream
    ctx.fillStyle = '#8B7355';
    const stoneY = midY;
    for (let i = 0; i < 5; i++) {
      const stoneX = midX + i * 20 + 10;
      ctx.beginPath();
      ctx.arc(stoneX, stoneY + (i % 2 ? -10 : 10), 25, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Draw 3 dead ends
    ctx.strokeStyle = 'rgba(152, 206, 180, 0.3)';
    ctx.lineWidth = 55;
    
    // Dead end 1: Mud puddle (bottom left)
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(startX - 80, startY + 100);
    ctx.stroke();
    this.drawObstacle(startX - 80, startY + 100, 'puddle');
    
    // Dead end 2: Thorn bush (right side)
    ctx.beginPath();
    ctx.moveTo(midX + 80, midY);
    ctx.lineTo(goalX + 60, midY + 80);
    ctx.stroke();
    this.drawObstacle(goalX + 60, midY + 80, 'thorns');
    
    // Dead end 3: Sleeping caiman (top)
    ctx.beginPath();
    ctx.moveTo(midX, midY);
    ctx.lineTo(midX, midY - 120);
    ctx.stroke();
    this.drawObstacle(midX, midY - 120, 'caiman');
    
    // Draw start marker
    ctx.fillStyle = '#4ECDC4';
    ctx.beginPath();
    ctx.arc(w * this.data.start.x / 100, h * this.data.start.y / 100, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 50px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('▶', w * this.data.start.x / 100, h * this.data.start.y / 100);
    
    // Draw goal marker
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(w * this.data.goal.x / 100, h * this.data.goal.y / 100, 40, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.fillText('★', w * this.data.goal.x / 100, h * this.data.goal.y / 100);
  }

  drawObstacle(x, y, type) {
    const ctx = this.ctx;
    
    if (type === 'puddle') {
      // Brown mud puddle
      ctx.fillStyle = '#654321';
      ctx.beginPath();
      ctx.ellipse(x, y, 50, 35, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#8B4513';
      ctx.font = '30px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('💧', x, y + 10);
    } else if (type === 'thorns') {
      // Green thorn bush
      ctx.fillStyle = '#228B22';
      ctx.beginPath();
      ctx.arc(x, y, 45, 0, Math.PI * 2);
      ctx.fill();
      // Draw simple thorns
      ctx.strokeStyle = '#654321';
      ctx.lineWidth = 3;
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(x + Math.cos(angle) * 30, y + Math.sin(angle) * 30);
        ctx.lineTo(x + Math.cos(angle) * 55, y + Math.sin(angle) * 55);
        ctx.stroke();
      }
    } else if (type === 'caiman') {
      // Friendly sleeping caiman
      ctx.fillStyle = '#4a7c59';
      ctx.beginPath();
      ctx.ellipse(x, y, 80, 35, 0, 0, Math.PI * 2);
      ctx.fill();
      // Head
      ctx.fillStyle = '#5a8c69';
      ctx.beginPath();
      ctx.ellipse(x + 60, y, 30, 25, 0, 0, Math.PI * 2);
      ctx.fill();
      // Closed eyes (sleeping)
      ctx.strokeStyle = '#333';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(x + 55, y - 5, 8, 0.2 * Math.PI, 0.8 * Math.PI);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(x + 70, y - 5, 8, 0.2 * Math.PI, 0.8 * Math.PI);
      ctx.stroke();
      // Zzz
      ctx.fillStyle = '#333';
      ctx.font = '20px Arial';
      ctx.fillText('Z', x + 85, y - 20);
      ctx.font = '16px Arial';
      ctx.fillText('z', x + 95, y - 30);
      ctx.font = '12px Arial';
      ctx.fillText('z', x + 102, y - 38);
    }
  }

  startDrawing(e) {
    this.drawing = true;
    this.path = [];
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    const x = ((e.clientX || e.pageX) - rect.left) * scaleX;
    const y = ((e.clientY || e.pageY) - rect.top) * scaleY;
    this.path.push({ x, y });
  }

  draw(e) {
    if (!this.drawing) return;
    
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    const x = ((e.clientX || e.pageX) - rect.left) * scaleX;
    const y = ((e.clientY || e.pageY) - rect.top) * scaleY;
    
    this.ctx.strokeStyle = '#FF6B9D';
    this.ctx.lineWidth = 12;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    
    if (this.path.length > 0) {
      const last = this.path[this.path.length - 1];
      this.ctx.beginPath();
      this.ctx.moveTo(last.x, last.y);
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }
    
    this.path.push({ x, y });
  }

  stopDrawing() {
    if (!this.drawing) return;
    this.drawing = false;
    
    if (this.checkSolution()) {
      setTimeout(() => {
        if (this.onComplete) this.onComplete();
      }, 500);
    }
  }

  checkSolution() {
    if (this.path.length < 10) return false;
    
    const w = this.canvas.width;
    const h = this.canvas.height;
    const goalX = w * this.data.goal.x / 100;
    const goalY = h * this.data.goal.y / 100;
    
    // Check if path reaches near the goal (forgiving)
    const lastPoint = this.path[this.path.length - 1];
    const distance = Math.sqrt(
      Math.pow(lastPoint.x - goalX, 2) + 
      Math.pow(lastPoint.y - goalY, 2)
    );
    
    return distance < 100; // Very forgiving radius
  }
}
