export class SearchPuzzle {
  constructor(data, container) {
    this.data = data;
    this.container = container;
    this.found = new Set();
    this.onComplete = null;
    
    this.render();
  }

  render() {
    const puzzleDiv = document.createElement('div');
    puzzleDiv.className = 'search-puzzle';
    puzzleDiv.style.width = '100%';
    puzzleDiv.style.height = '100%';
    puzzleDiv.style.position = 'relative';
    puzzleDiv.style.zIndex = '10';
    
    const img = document.createElement('img');
    img.src = this.data.image;
    img.alt = 'Suchbild';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    img.style.pointerEvents = 'none';
    puzzleDiv.appendChild(img);
    
    // Add hotspots
    this.data.hotspots.forEach(hotspot => {
      const spot = document.createElement('div');
      spot.className = 'search-item';
      spot.style.position = 'absolute';
      spot.style.left = `${hotspot.x}%`;
      spot.style.top = `${hotspot.y}%`;
      spot.style.width = `${hotspot.radius * 2}%`;
      spot.style.height = `${hotspot.radius * 2}%`;
      spot.style.transform = 'translate(-50%, -50%)';
      spot.style.borderRadius = '50%';
      spot.style.cursor = 'pointer';
      spot.style.border = '2px dashed rgba(255, 255, 255, 0.5)';
      spot.style.background = 'rgba(255, 255, 255, 0.1)';
      spot.style.transition = 'all 0.2s ease';
      spot.style.zIndex = '20';
      spot.style.pointerEvents = 'auto';
      spot.setAttribute('data-item-id', hotspot.id);
      
      spot.addEventListener('click', () => {
        if (!this.found.has(hotspot.id)) {
          this.found.add(hotspot.id);
          spot.classList.add('found');
          spot.style.border = '3px solid #4ECDC4';
          spot.style.background = 'rgba(78, 205, 196, 0.6)';
          
          if (this.found.size === this.data.hotspots.length) {
            setTimeout(() => {
              if (this.onComplete) this.onComplete();
            }, 500);
          }
        }
      });
      
      puzzleDiv.appendChild(spot);
    });
    
    // Add bonus if exists
    if (this.data.bonus) {
      const bonusSpot = document.createElement('div');
      bonusSpot.className = 'search-bonus';
      bonusSpot.style.position = 'absolute';
      bonusSpot.style.left = `${this.data.bonus.x}%`;
      bonusSpot.style.top = `${this.data.bonus.y}%`;
      bonusSpot.style.width = `${this.data.bonus.radius * 2}%`;
      bonusSpot.style.height = `${this.data.bonus.radius * 2}%`;
      bonusSpot.style.transform = 'translate(-50%, -50%)';
      bonusSpot.style.borderRadius = '50%';
      bonusSpot.style.cursor = 'pointer';
      bonusSpot.style.border = '2px dashed rgba(255, 215, 0, 0.7)';
      bonusSpot.style.background = 'rgba(255, 215, 0, 0.1)';
      bonusSpot.style.zIndex = '20';
      bonusSpot.style.pointerEvents = 'auto';
      bonusSpot.addEventListener('click', () => {
        alert(this.data.bonus.text);
      });
      puzzleDiv.appendChild(bonusSpot);
    }
    
    this.container.appendChild(puzzleDiv);
  }
}
