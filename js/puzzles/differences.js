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
    
    const leftImg = document.createElement('div');
    leftImg.className = 'diff-image';
    leftImg.style.backgroundImage = `url('./assets/scenes/${this.data.scene}-left.jpg')`;
    leftImg.style.backgroundSize = 'cover';
    leftImg.style.backgroundPosition = 'center';
    leftImg.style.borderRadius = '15px';
    
    const rightImg = document.createElement('div');
    rightImg.className = 'diff-image';
    rightImg.style.backgroundImage = `url('./assets/scenes/${this.data.scene}-right.jpg')`;
    rightImg.style.backgroundSize = 'cover';
    rightImg.style.backgroundPosition = 'center';
    rightImg.style.borderRadius = '15px';
    rightImg.style.position = 'relative';
    
    this.data.differences.forEach(diff => {
      const spot = document.createElement('div');
      spot.className = 'difference-spot';
      spot.style.left = `${diff.x}%`;
      spot.style.top = `${diff.y}%`;
      spot.style.width = `${diff.radius * 2}%`;
      spot.style.height = `${diff.radius * 2}%`;
      spot.style.transform = 'translate(-50%, -50%)';
      
      spot.addEventListener('click', () => {
        if (!this.found.has(diff.id)) {
          this.found.add(diff.id);
          spot.classList.add('found');
          
          if (this.found.size === this.data.differences.length) {
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
