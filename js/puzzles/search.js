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
    puzzleDiv.style.backgroundImage = `url('./assets/scenes/${this.data.background}.jpg')`;
    puzzleDiv.style.backgroundSize = 'cover';
    puzzleDiv.style.backgroundPosition = 'center';
    puzzleDiv.style.width = '100%';
    puzzleDiv.style.height = '100%';
    puzzleDiv.style.position = 'relative';
    
    this.data.items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'search-item';
      itemEl.style.left = `${item.x}%`;
      itemEl.style.top = `${item.y}%`;
      itemEl.innerHTML = this.getItemIcon(item.id);
      
      itemEl.addEventListener('click', () => {
        if (!this.found.has(item.id)) {
          this.found.add(item.id);
          itemEl.classList.add('found');
          
          if (this.found.size === this.data.items.length) {
            setTimeout(() => {
              if (this.onComplete) this.onComplete();
            }, 500);
          }
        }
      });
      
      puzzleDiv.appendChild(itemEl);
    });
    
    if (this.data.bonus) {
      const bonusEl = document.createElement('div');
      bonusEl.className = 'search-item';
      bonusEl.style.left = '5%';
      bonusEl.style.top = '60%';
      bonusEl.innerHTML = '👀';
      bonusEl.style.fontSize = '2rem';
      bonusEl.addEventListener('click', () => {
        alert(this.data.bonus.text);
      });
      puzzleDiv.appendChild(bonusEl);
    }
    
    this.container.appendChild(puzzleDiv);
  }

  getItemIcon(id) {
    const icons = {
      screw: '🔩',
      gear: '⚙️',
      wrench: '🔧',
      magnifier: '🔍',
      bulb: '💡'
    };
    return `<span style="font-size: 2.5rem;">${icons[id] || '❓'}</span>`;
  }
}
