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
    canvasContainer.style.position = 'relative';
    
    const img = document.createElement('img');
    img.src = this.data.image;
    img.alt = 'Ausmalbild';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    img.style.borderRadius = '20px';
    canvasContainer.appendChild(img);
    
    // Add hotspot overlays for coloring
    this.data.hotspots.forEach(region => {
      const spot = document.createElement('div');
      spot.className = 'coloring-region';
      spot.style.position = 'absolute';
      spot.style.left = `${region.x}%`;
      spot.style.top = `${region.y}%`;
      spot.style.width = `${region.radius * 2}%`;
      spot.style.height = `${region.radius * 2}%`;
      spot.style.transform = 'translate(-50%, -50%)';
      spot.style.borderRadius = '50%';
      spot.style.cursor = 'pointer';
      spot.style.transition = 'all 0.2s ease';
      
      spot.addEventListener('click', () => {
        spot.style.background = this.selectedColor;
        spot.style.opacity = '0.6';
        this.colored[region.id] = this.selectedColor;
      });
      
      canvasContainer.appendChild(spot);
    });
    
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
}
