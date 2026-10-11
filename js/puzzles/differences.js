import { bindArtRatio } from './art-frame.js';

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

    const leftFrame = document.createElement('div');
    leftFrame.className = 'art-frame';
    
    const leftImgEl = document.createElement('img');
    leftImgEl.src = this.data.imageLeft;
    leftImgEl.alt = 'Bild links';
    leftFrame.appendChild(leftImgEl);
    bindArtRatio(leftFrame, leftImgEl);
    leftImg.appendChild(leftFrame);
    
    const rightImg = document.createElement('div');
    rightImg.className = 'diff-image';

    const rightFrame = document.createElement('div');
    rightFrame.className = 'art-frame';
    
    const rightImgEl = document.createElement('img');
    rightImgEl.src = this.data.imageRight;
    rightImgEl.alt = 'Bild rechts';
    rightFrame.appendChild(rightImgEl);
    bindArtRatio(rightFrame, rightImgEl);
    rightImg.appendChild(rightFrame);
    
    this.data.hotspots.forEach(diff => {
      const spot = document.createElement('div');
      spot.className = 'difference-spot';
      const radius = diff.r ?? diff.radius;
      spot.style.position = 'absolute';
      spot.style.left = `${diff.x}%`;
      spot.style.top = `${diff.y}%`;
      spot.style.width = `${radius * 2}%`;
      spot.style.aspectRatio = '1';
      spot.style.height = 'auto';
      spot.style.transform = 'translate(-50%, -50%)';
      spot.style.borderRadius = '50%';
      spot.style.cursor = 'pointer';
      spot.style.zIndex = '20';
      spot.style.pointerEvents = 'auto';
      spot.setAttribute('data-diff-id', diff.id);
      
      spot.addEventListener('click', () => {
        if (!this.found.has(diff.id)) {
          this.found.add(diff.id);
          spot.classList.add('found');
          
          if (this.found.size === this.data.hotspots.length) {
            setTimeout(() => {
              if (this.onComplete) this.onComplete();
            }, 500);
          }
        }
      });
      
      rightFrame.appendChild(spot);
    });
    
    puzzleDiv.appendChild(leftImg);
    puzzleDiv.appendChild(rightImg);
    this.container.appendChild(puzzleDiv);
  }
}
