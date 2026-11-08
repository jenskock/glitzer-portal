import { anlautCorrectIds, anlautSolved, ensureIdOrder } from '../choice-order.js';
import { clearHint, mountFeedback, mountRetry, showWrongHint } from '../choice-controls.js';

export class InitialSoundsPuzzle {
  constructor(data, container, context = {}) {
    this.data = data;
    this.container = container;
    this.bookId = context.bookId || 'book';
    this.puzzleKey = context.puzzleKey || 'initial-sounds';
    this.completed = new Set();
    this.finished = false;
    this.onComplete = null;
    this.correctIds = anlautCorrectIds(data.items);
    this.render();
  }

  render() {
    const shell = document.createElement('div');
    shell.className = 'sounds-shell';

    const puzzleDiv = document.createElement('div');
    puzzleDiv.className = 'initial-sounds-puzzle';
    puzzleDiv.style.display = 'grid';
    puzzleDiv.style.gap = '1rem';
    puzzleDiv.style.width = '100%';
    puzzleDiv.style.height = '100%';
    puzzleDiv.style.minHeight = '0';
    
    const items = ensureIdOrder({
      bookId: this.bookId,
      puzzleKey: this.puzzleKey,
      listKey: 'anlaut',
      items: this.data.items,
      idOf: (item) => item.id,
    });

    items.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'sound-item';
      itemEl.dataset.objectId = item.id;
      itemEl.setAttribute('role', 'button');
      itemEl.tabIndex = 0;
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
          
          if (item.correct) {
            clearHint(this.feedback);
          } else {
            showWrongHint(this.feedback);
          }

          if (anlautSolved(this.correctIds, [...this.completed]) && !this.finished) {
            this.finished = true;
            setTimeout(() => {
              if (this.onComplete) this.onComplete();
            }, 500);
          }
        }
      });
      
      puzzleDiv.appendChild(itemEl);
    });

    shell.appendChild(puzzleDiv);
    this.feedback = mountFeedback(shell);
    mountRetry(shell, () => {
      this.completed = new Set();
      this.finished = false;
      ensureIdOrder({
        bookId: this.bookId,
        puzzleKey: this.puzzleKey,
        listKey: 'anlaut',
        items: this.data.items,
        idOf: (item) => item.id,
        fresh: true,
      });
      this.container.innerHTML = '';
      this.render();
    });

    this.container.appendChild(shell);
  }
}
