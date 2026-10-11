import { bindArtRatio } from './art-frame.js';

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
    puzzleDiv.className = 'search-puzzle art-frame';
    puzzleDiv.style.zIndex = '10';
    
    const img = document.createElement('img');
    img.src = this.data.image;
    img.alt = 'Suchbild';
    puzzleDiv.appendChild(img);
    bindArtRatio(puzzleDiv, img);
    
    // Add hotspots
    this.data.hotspots.forEach(hotspot => {
      const spot = document.createElement('div');
      spot.className = 'search-item';
      const radius = hotspot.r ?? hotspot.radius;
      spot.style.position = 'absolute';
      spot.style.left = `${hotspot.x}%`;
      spot.style.top = `${hotspot.y}%`;
      spot.style.width = `${radius * 2}%`;
      spot.style.aspectRatio = '1';
      spot.style.height = 'auto';
      spot.style.transform = 'translate(-50%, -50%)';
      spot.style.borderRadius = '50%';
      spot.style.cursor = 'pointer';
      spot.style.zIndex = '20';
      spot.style.pointerEvents = 'auto';
      spot.setAttribute('data-item-id', hotspot.id);
      
      spot.addEventListener('click', () => {
        if (!this.found.has(hotspot.id)) {
          this.found.add(hotspot.id);
          spot.classList.add('found');
          
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
      const radius = this.data.bonus.r ?? this.data.bonus.radius;
      bonusSpot.style.position = 'absolute';
      bonusSpot.style.left = `${this.data.bonus.x}%`;
      bonusSpot.style.top = `${this.data.bonus.y}%`;
      bonusSpot.style.width = `${radius * 2}%`;
      bonusSpot.style.aspectRatio = '1';
      bonusSpot.style.height = 'auto';
      bonusSpot.style.transform = 'translate(-50%, -50%)';
      bonusSpot.style.borderRadius = '50%';
      bonusSpot.style.cursor = 'pointer';
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
