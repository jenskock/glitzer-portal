export class ColoringPuzzle {
  constructor(data, container) {
    this.data = data;
    this.container = container;
    this.selectedColor = this.data.colors[0];
    this.onComplete = null;
    
    this.render();
  }

  render() {
    const puzzleDiv = document.createElement('div');
    puzzleDiv.className = 'coloring-puzzle';
    puzzleDiv.style.display = 'flex';
    puzzleDiv.style.flexDirection = 'column';
    puzzleDiv.style.height = '100%';
    puzzleDiv.style.gap = '20px';
    
    const canvasContainer = document.createElement('div');
    canvasContainer.className = 'coloring-canvas-container';
    canvasContainer.style.flex = '1';
    canvasContainer.style.position = 'relative';
    canvasContainer.style.display = 'flex';
    canvasContainer.style.justifyContent = 'center';
    canvasContainer.style.alignItems = 'center';
    
    // Create canvas for line art and coloring
    const canvas = document.createElement('canvas');
    canvas.className = 'coloring-canvas';
    canvas.width = 1200;
    canvas.height = 800;
    canvas.style.maxWidth = '100%';
    canvas.style.maxHeight = '100%';
    canvas.style.cursor = 'crosshair';
    canvas.style.borderRadius = '15px';
    canvas.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d', { willReadFrequently: true });
    
    // Load line art image
    const img = new Image();
    img.onload = () => {
      this.ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      this.originalImageData = this.ctx.getImageData(0, 0, canvas.width, canvas.height);
    };
    img.src = this.data.image;
    
    canvas.addEventListener('click', (e) => this.handleClick(e));
    canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      const touch = e.changedTouches[0];
      this.handleClick(touch);
    });
    
    canvasContainer.appendChild(canvas);
    puzzleDiv.appendChild(canvasContainer);
    
    // Color palette
    const palette = document.createElement('div');
    palette.className = 'color-palette';
    palette.style.display = 'flex';
    palette.style.gap = '12px';
    palette.style.justifyContent = 'center';
    palette.style.flexWrap = 'wrap';
    palette.style.padding = '0 20px';
    
    this.data.colors.forEach(color => {
      const btn = document.createElement('button');
      btn.className = 'color-button';
      btn.style.width = '50px';
      btn.style.height = '50px';
      btn.style.borderRadius = '50%';
      btn.style.backgroundColor = color;
      btn.style.border = '3px solid #fff';
      btn.style.cursor = 'pointer';
      btn.style.transition = 'all 0.2s';
      btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.2)';
      
      if (color === this.selectedColor) {
        btn.style.border = '4px solid #333';
        btn.style.transform = 'scale(1.1)';
      }
      
      btn.addEventListener('click', () => {
        this.selectedColor = color;
        palette.querySelectorAll('.color-button').forEach(b => {
          b.style.border = '3px solid #fff';
          b.style.transform = 'scale(1)';
        });
        btn.style.border = '4px solid #333';
        btn.style.transform = 'scale(1.1)';
      });
      
      palette.appendChild(btn);
    });
    
    // "Fertig" button
    const doneBtn = document.createElement('button');
    doneBtn.className = 'done-button';
    doneBtn.textContent = 'Fertig';
    doneBtn.style.padding = '12px 30px';
    doneBtn.style.fontSize = '1.2rem';
    doneBtn.style.fontFamily = 'Baloo2, cursive';
    doneBtn.style.backgroundColor = '#4ECDC4';
    doneBtn.style.color = 'white';
    doneBtn.style.border = 'none';
    doneBtn.style.borderRadius = '25px';
    doneBtn.style.cursor = 'pointer';
    doneBtn.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    doneBtn.style.transition = 'all 0.2s';
    
    doneBtn.addEventListener('mouseover', () => {
      doneBtn.style.backgroundColor = '#45b8ad';
      doneBtn.style.transform = 'scale(1.05)';
    });
    doneBtn.addEventListener('mouseout', () => {
      doneBtn.style.backgroundColor = '#4ECDC4';
      doneBtn.style.transform = 'scale(1)';
    });
    
    doneBtn.addEventListener('click', () => {
      if (this.onComplete) this.onComplete();
    });
    
    palette.appendChild(doneBtn);
    puzzleDiv.appendChild(palette);
    this.container.appendChild(puzzleDiv);
  }

  handleClick(e) {
    if (!this.originalImageData) return;
    
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;
    const x = Math.floor(((e.clientX || e.pageX) - rect.left) * scaleX);
    const y = Math.floor(((e.clientY || e.pageY) - rect.top) * scaleY);
    
    this.floodFill(x, y, this.selectedColor);
  }

  floodFill(startX, startY, fillColor) {
    const imageData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const pixels = imageData.data;
    const width = this.canvas.width;
    const height = this.canvas.height;
    
    // Get start pixel color
    const startIdx = (startY * width + startX) * 4;
    const startR = pixels[startIdx];
    const startG = pixels[startIdx + 1];
    const startB = pixels[startIdx + 2];
    const startA = pixels[startIdx + 3];
    
    // Convert fill color hex to RGB
    const fillRgb = this.hexToRgb(fillColor);
    
    // Don't fill if clicking same color
    if (startR === fillRgb.r && startG === fillRgb.g && startB === fillRgb.b) return;
    
    // Don't fill black lines (line art)
    if (startR < 50 && startG < 50 && startB < 50) return;
    
    const stack = [[startX, startY]];
    const visited = new Set();
    
    while (stack.length > 0) {
      const [x, y] = stack.pop();
      
      if (x < 0 || x >= width || y < 0 || y >= height) continue;
      
      const key = `${x},${y}`;
      if (visited.has(key)) continue;
      visited.add(key);
      
      const idx = (y * width + x) * 4;
      const r = pixels[idx];
      const g = pixels[idx + 1];
      const b = pixels[idx + 2];
      const a = pixels[idx + 3];
      
      // Check if this pixel matches start color
      if (Math.abs(r - startR) > 10 || Math.abs(g - startG) > 10 || Math.abs(b - startB) > 10) continue;
      
      // Don't cross black lines
      if (r < 50 && g < 50 && b < 50) continue;
      
      // Fill this pixel
      pixels[idx] = fillRgb.r;
      pixels[idx + 1] = fillRgb.g;
      pixels[idx + 2] = fillRgb.b;
      pixels[idx + 3] = 255;
      
      // Add neighbors (limit to prevent stack overflow)
      if (visited.size < 50000) {
        stack.push([x + 1, y]);
        stack.push([x - 1, y]);
        stack.push([x, y + 1]);
        stack.push([x, y - 1]);
      }
    }
    
    this.ctx.putImageData(imageData, 0, 0);
  }

  hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  }
}
