export class InitialSoundsPuzzle {
  constructor(data, container) {
    this.data = data;
    this.container = container;
    this.completed = new Set();
    this.onComplete = null;
    
    this.render();
  }

  render() {
    const puzzleDiv = document.createElement('div');
    puzzleDiv.className = 'initial-sounds-puzzle';
    
    this.data.items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'sound-item';
      itemEl.innerHTML = `
        <div class="sound-item-icon">${this.getIcon(item.id)}</div>
        <div class="sound-item-word">${item.word}</div>
      `;
      
      itemEl.addEventListener('click', () => {
        if (!this.completed.has(item.id)) {
          this.completed.add(item.id);
          itemEl.classList.add('revealed');
          
          if (item.startsWithB) {
            itemEl.classList.add('correct');
          } else {
            itemEl.classList.add('incorrect');
          }
          
          const correctCount = this.data.items.filter(i => i.startsWithB).length;
          const foundCorrect = this.data.items.filter(i => 
            i.startsWithB && this.completed.has(i.id)
          ).length;
          
          if (foundCorrect === correctCount) {
            setTimeout(() => {
              if (this.onComplete) this.onComplete();
            }, 500);
          }
        }
      });
      
      puzzleDiv.appendChild(itemEl);
    });
    
    this.container.appendChild(puzzleDiv);
  }

  getIcon(id) {
    const icons = {
      baum: '🌳',
      blume: '🌸',
      banane: '🍌',
      boot: '⛵',
      fisch: '🐠',
      sonne: '☀️',
      nest: '🪺',
      affe: '🐵'
    };
    return icons[id] || '❓';
  }
}
