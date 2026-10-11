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
    const canvas = document.createElement('canvas');
    canvas.className = 'maze-canvas';
    canvas.width = 800;
    canvas.height = 600;
    
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    
    this.drawMaze();
    
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
    
    this.container.appendChild(canvas);
  }

  drawMaze() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    
    ctx.fillStyle = '#f0f0f0';
    ctx.fillRect(0, 0, w, h);
    
    ctx.strokeStyle = '#654321';
    ctx.lineWidth = 15;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    ctx.beginPath();
    ctx.moveTo(w * 0.1, h * 0.3);
    ctx.lineTo(w * 0.1, h * 0.7);
    ctx.lineTo(w * 0.3, h * 0.7);
    ctx.lineTo(w * 0.3, h * 0.2);
    ctx.lineTo(w * 0.5, h * 0.2);
    ctx.lineTo(w * 0.5, h * 0.75);
    ctx.lineTo(w * 0.7, h * 0.75);
    ctx.lineTo(w * 0.7, h * 0.3);
    ctx.lineTo(w * 0.85, h * 0.3);
    ctx.stroke();
    
    ctx.fillStyle = '#4ECDC4';
    ctx.beginPath();
    ctx.arc(w * this.data.start.x / 100, h * this.data.start.y / 100, 25, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#FFD700';
    ctx.beginPath();
    ctx.arc(w * this.data.goal.x / 100, h * this.data.goal.y / 100, 25, 0, Math.PI * 2);
    ctx.fill();
    
    this.data.obstacles.forEach(obs => {
      const emoji = { puddle: '💧', thorns: '🌵', caiman: '🐊' }[obs.type];
      ctx.font = '40px Arial';
      ctx.fillText(emoji, w * obs.x / 100 - 20, h * obs.y / 100 + 15);
    });
  }

  startDrawing(e) {
    this.drawing = true;
    this.path = [];
    const rect = this.canvas.getBoundingClientRect();
    const x = (e.clientX || e.pageX) - rect.left;
    const y = (e.clientY || e.pageY) - rect.top;
    this.path.push({ x, y });
  }

  draw(e) {
    if (!this.drawing) return;
    
    const rect = this.canvas.getBoundingClientRect();
    const x = (e.clientX || e.pageX) - rect.left;
    const y = (e.clientY || e.pageY) - rect.top;
    
    this.ctx.strokeStyle = '#FF6B6B';
    this.ctx.lineWidth = 8;
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
    
    const lastPoint = this.path[this.path.length - 1];
    const distance = Math.sqrt(
      Math.pow(lastPoint.x - goalX, 2) + 
      Math.pow(lastPoint.y - goalY, 2)
    );
    
    return distance < 50;
  }
}
