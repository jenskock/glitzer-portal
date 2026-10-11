export class MemoryPuzzle {
  constructor(data, container) {
    this.data = data;
    this.container = container;
    this.flipped = [];
    this.matched = new Set();
    this.onComplete = null;
    
    this.render();
  }

  render() {
    const puzzleDiv = document.createElement('div');
    puzzleDiv.className = 'memory-puzzle';
    
    const cards = [];
    this.data.pairs.forEach(char => {
      cards.push({ id: char, match: char });
      cards.push({ id: char, match: char });
    });
    
    this.shuffle(cards);
    
    cards.forEach((card, index) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'memory-card';
      cardEl.dataset.index = index;
      cardEl.dataset.match = card.match;
      
      cardEl.innerHTML = `
        <div class="memory-card-face memory-card-back">
          <img src="./assets/characters/portal.svg" alt="Portal">
        </div>
        <div class="memory-card-face memory-card-front">
          <img src="./assets/characters/${card.id}_transparent.svg" alt="${card.id}">
        </div>
      `;
      
      cardEl.addEventListener('click', () => this.handleCardClick(cardEl, index));
      
      puzzleDiv.appendChild(cardEl);
    });
    
    this.container.appendChild(puzzleDiv);
  }

  handleCardClick(cardEl, index) {
    if (this.flipped.length >= 2) return;
    if (this.flipped.includes(index)) return;
    if (this.matched.has(cardEl.dataset.match) && 
        this.matched.size < this.data.pairs.length) return;
    
    cardEl.classList.add('flipped');
    this.flipped.push(index);
    
    if (this.flipped.length === 2) {
      const cards = this.container.querySelectorAll('.memory-card');
      const card1 = cards[this.flipped[0]];
      const card2 = cards[this.flipped[1]];
      
      if (card1.dataset.match === card2.dataset.match) {
        setTimeout(() => {
          card1.classList.add('matched');
          card2.classList.add('matched');
          this.matched.add(card1.dataset.match);
          this.flipped = [];
          
          if (this.matched.size === this.data.pairs.length) {
            setTimeout(() => {
              if (this.onComplete) this.onComplete();
            }, 1000);
          }
        }, 800);
      } else {
        setTimeout(() => {
          card1.classList.remove('flipped');
          card2.classList.remove('flipped');
          this.flipped = [];
        }, 1200);
      }
    }
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
}
