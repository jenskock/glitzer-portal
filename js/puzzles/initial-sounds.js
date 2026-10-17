export class InitialSoundsPuzzle {
  constructor(data, container) {
    this.data = data;
    this.container = container;
    this.completed = new Set();
    this.finished = false;
    this.onComplete = null;
    
    this.render();
  }

  render() {
    const puzzleDiv = document.createElement('div');
    puzzleDiv.className = 'initial-sounds-puzzle';
    puzzleDiv.style.display = 'grid';
    puzzleDiv.style.gap = '1rem';
    puzzleDiv.style.width = '100%';
    puzzleDiv.style.height = '100%';
    puzzleDiv.style.minHeight = '0';
    
    this.data.items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'sound-item';
      itemEl.style.cursor = 'pointer';
      itemEl.style.borderRadius = '15px';
      itemEl.style.overflow = 'hidden';
      itemEl.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      itemEl.style.transition = 'transform 0.2s, box-shadow 0.2s';
      itemEl.style.background = 'white';
      
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.word;
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';
      img.style.display = 'block';
      
      const label = document.createElement('div');
      label.className = 'sound-item-word';
      label.textContent = item.word;
      label.style.padding = '10px';
      label.style.textAlign = 'center';
      label.style.fontFamily = 'Source Sans 3, sans-serif';
      label.style.fontSize = '1.2rem';
      label.style.fontWeight = 'bold';
      label.style.color = '#333';
      label.style.display = 'none'; // Hidden until clicked
      
      itemEl.appendChild(img);
      itemEl.appendChild(label);
      
      itemEl.addEventListener('mouseenter', () => {
        if (!this.completed.has(item.id)) {
          itemEl.style.transform = 'scale(1.05)';
          itemEl.style.boxShadow = '0 6px 16px rgba(0,0,0,0.25)';
        }
      });
      
      itemEl.addEventListener('mouseleave', () => {
        if (!this.completed.has(item.id)) {
          itemEl.style.transform = 'scale(1)';
          itemEl.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        }
      });
      
      itemEl.addEventListener('click', () => {
        if (!this.completed.has(item.id)) {
          this.completed.add(item.id);
          label.style.display = 'block';
          
          if (item.correct) {
            itemEl.style.border = '4px solid #4ECDC4';
            itemEl.style.background = 'rgba(78, 205, 196, 0.1)';
          } else {
            itemEl.style.opacity = '0.5';
          }
          
          const correctCount = this.data.items.filter(i => i.correct).length;
          const foundCorrect = this.data.items.filter(i => 
            i.correct && this.completed.has(i.id)
          ).length;
          
          if (foundCorrect === correctCount && !this.finished) {
            this.finished = true;
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
}
