export class ColoringPuzzle {
  constructor(data, container) {
    this.data = data;
    this.container = container;
    this.selectedColor = this.data.colors[0];
    this.colored = {};
    this.onComplete = null;
    
    this.render();
  }

  render() {
    const puzzleDiv = document.createElement('div');
    puzzleDiv.className = 'coloring-puzzle';
    
    const canvasContainer = document.createElement('div');
    canvasContainer.className = 'coloring-canvas-container';
    
    const canvas = document.createElement('canvas');
    canvas.className = 'coloring-canvas';
    canvas.width = 800;
    canvas.height = 600;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    
    this.drawOutline();
    
    canvas.addEventListener('click', (e) => this.handleCanvasClick(e));
    canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      const touch = e.changedTouches[0];
      this.handleCanvasClick(touch);
    });
    
    canvasContainer.appendChild(canvas);
    puzzleDiv.appendChild(canvasContainer);
    
    const palette = document.createElement('div');
    palette.className = 'color-palette';
    
    this.data.colors.forEach(color => {
      const btn = document.createElement('button');
      btn.className = 'color-button';
      btn.style.backgroundColor = color;
      if (color === this.selectedColor) btn.classList.add('selected');
      
      btn.addEventListener('click', () => {
        this.selectedColor = color;
        palette.querySelectorAll('.color-button').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
      
      palette.appendChild(btn);
    });
    
    const doneBtn = document.createElement('button');
    doneBtn.className = 'done-button';
    doneBtn.textContent = 'Fertig';
    doneBtn.addEventListener('click', () => {
      if (this.onComplete) this.onComplete();
    });
    palette.appendChild(doneBtn);
    
    puzzleDiv.appendChild(palette);
    this.container.appendChild(puzzleDiv);
  }

  drawOutline() {
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;
    
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, w, h);
    
    ctx.strokeStyle = '#2d1e17';
    ctx.lineWidth = 4;
    
    ctx.beginPath();
    ctx.ellipse(w * 0.4, h * 0.4, 80, 90, 0, 0, Math.PI * 2);
    ctx.stroke();
    this.regions = { bruno: { x: w * 0.4, y: h * 0.4, r: 80 } };
    
    ctx.beginPath();
    ctx.arc(w * 0.7, h * 0.3, 30, 0, Math.PI * 2);
    ctx.stroke();
    this.regions.fips = { x: w * 0.7, y: h * 0.3, r: 30 };
    
    ctx.beginPath();
    ctx.ellipse(w * 0.25, h * 0.7, 60, 20, 0, 0, Math.PI * 2);
    ctx.stroke();
    this.regions.lily1 = { x: w * 0.25, y: h * 0.7, r: 60 };
    
    ctx.beginPath();
    ctx.ellipse(w * 0.6, h * 0.75, 55, 18, 0, 0, Math.PI * 2);
    ctx.stroke();
    this.regions.lily2 = { x: w * 0.6, y: h * 0.75, r: 55 };
    
    ctx.beginPath();
    ctx.moveTo(w * 0.5, h * 0.6);
    ctx.lineTo(w * 0.55, h * 0.55);
    ctx.lineTo(w * 0.52, h * 0.65);
    ctx.closePath();
    ctx.stroke();
    this.regions.fish1 = { x: w * 0.52, y: h * 0.6, r: 25 };
    
    ctx.beginPath();
    ctx.arc(w * 0.15, h * 0.5, 20, 0, Math.PI * 2);
    ctx.stroke();
    this.regions.fish2 = { x: w * 0.15, y: h * 0.5, r: 20 };
    
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(w * (0.85 + i * 0.03), h * 0.9);
      ctx.lineTo(w * (0.85 + i * 0.03), h * 0.6);
      ctx.stroke();
    }
    this.regions.reeds = { x: w * 0.9, y: h * 0.75, r: 60 };
  }

  handleCanvasClick(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = ((e.clientX || e.pageX) - rect.left) * (this.canvas.width / rect.width);
    const y = ((e.clientY || e.pageY) - rect.top) * (this.canvas.height / rect.height);
    
    for (const [name, region] of Object.entries(this.regions)) {
      const dist = Math.sqrt(
        Math.pow(x - region.x, 2) + 
        Math.pow(y - region.y, 2)
      );
      
      if (dist < region.r) {
        this.colored[name] = this.selectedColor;
        this.redraw();
        break;
      }
    }
  }

  redraw() {
    this.drawOutline();
    
    const ctx = this.ctx;
    ctx.globalAlpha = 0.7;
    
    for (const [name, color] of Object.entries(this.colored)) {
      const region = this.regions[name];
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(region.x, region.y, region.r * 0.8, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.globalAlpha = 1.0;
  }
}
