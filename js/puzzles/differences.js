export class DifferencesPuzzle {
  constructor(data, container) {
    this.data = data;
    this.container = container;
    this.found = new Set();
    this.onComplete = null;
    
    this.render();
  }

  render() {
    const puzzleDiv = document.createElement('div');
    puzzleDiv.className = 'differences-puzzle';
    puzzleDiv.style.zIndex = '10';
    
    const leftImg = document.createElement('div');
    leftImg.className = 'diff-image';
    leftImg.style.position = 'relative';
    
    const leftImgEl = document.createElement('img');
    leftImgEl.src = this.data.imageLeft;
    leftImgEl.alt = 'Bild links';
    leftImgEl.style.width = '100%';
    leftImgEl.style.height = '100%';
    leftImgEl.style.objectFit = 'contain';
    leftImgEl.style.borderRadius = '15px';
    leftImgEl.style.pointerEvents = 'none';
    leftImg.appendChild(leftImgEl);
    
    const rightImg = document.createElement('div');
    rightImg.className = 'diff-image';
    rightImg.style.position = 'relative';
    
    const rightImgEl = document.createElement('img');
    rightImgEl.src = this.data.imageRight;
    rightImgEl.alt = 'Bild rechts';
    rightImgEl.style.width = '100%';
    rightImgEl.style.height = '100%';
    rightImgEl.style.objectFit = 'contain';
    rightImgEl.style.borderRadius = '15px';
    rightImgEl.style.pointerEvents = 'none';
    rightImg.appendChild(rightImgEl);
    
    this.data.hotspots.forEach(diff => {
      const spot = document.createElement('div');
      spot.className = 'difference-spot';
      spot.style.position = 'absolute';
      spot.style.left = `${diff.x}%`;
      spot.style.top = `${diff.y}%`;
      spot.style.width = `${diff.radius * 2}%`;
      spot.style.height = `${diff.radius * 2}%`;
      spot.style.transform = 'translate(-50%, -50%)';
      spot.style.borderRadius = '50%';
      spot.style.cursor = 'pointer';
      spot.style.border = '2px dashed rgba(255, 255, 255, 0.5)';
      spot.style.background = 'rgba(255, 255, 255, 0.1)';
      spot.style.transition = 'all 0.2s ease';
      spot.style.zIndex = '20';
      spot.style.pointerEvents = 'auto';
      spot.setAttribute('data-diff-id', diff.id);
      
      spot.addEventListener('click', () => {
        if (!this.found.has(diff.id)) {
          this.found.add(diff.id);
          spot.classList.add('found');
          spot.style.border = '3px solid #FF6B9D';
          spot.style.background = 'rgba(255, 107, 157, 0.6)';
          
          if (this.found.size === this.data.hotspots.length) {
            setTimeout(() => {
              if (this.onComplete) this.onComplete();
            }, 500);
          }
        }
      });
      
      rightImg.appendChild(spot);
    });
    
    puzzleDiv.appendChild(leftImg);
    puzzleDiv.appendChild(rightImg);
    this.container.appendChild(puzzleDiv);
  }
}
