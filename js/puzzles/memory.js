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
    puzzleDiv.style.display = 'grid';
    puzzleDiv.style.gridTemplateColumns = 'repeat(4, 1fr)';
    puzzleDiv.style.gap = '20px';
    puzzleDiv.style.padding = '40px';
    puzzleDiv.style.maxWidth = '1000px';
    puzzleDiv.style.margin = '0 auto';
    
    // Create pairs
    const cards = [];
    this.data.pairs.forEach(pair => {
      cards.push({ ...pair, pairId: pair.id, cardId: `${pair.id}-1` });
      cards.push({ ...pair, pairId: pair.id, cardId: `${pair.id}-2` });
    });
    
    // Shuffle
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    
    cards.forEach(card => {
      const cardEl = document.createElement('div');
      cardEl.className = 'memory-card';
      cardEl.style.aspectRatio = '1';
      cardEl.style.cursor = 'pointer';
      cardEl.style.borderRadius = '15px';
      cardEl.style.overflow = 'hidden';
      cardEl.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      cardEl.style.transition = 'transform 0.3s';
      cardEl.style.position = 'relative';
      cardEl.style.transformStyle = 'preserve-3d';
      
      // Back side
      const back = document.createElement('img');
      back.src = this.data.cardBack;
      back.alt = 'Card back';
      back.style.width = '100%';
      back.style.height = '100%';
      back.style.objectFit = 'cover';
      back.style.position = 'absolute';
      back.style.backfaceVisibility = 'hidden';
      cardEl.appendChild(back);
      
      // Front side
      const front = document.createElement('img');
      front.src = card.image;
      front.alt = card.name;
      front.style.width = '100%';
      front.style.height = '100%';
      front.style.objectFit = 'cover';
      front.style.position = 'absolute';
      front.style.backfaceVisibility = 'hidden';
      front.style.transform = 'rotateY(180deg)';
      cardEl.appendChild(front);
      
      cardEl._data = card;
      cardEl._flipped = false;
      
      cardEl.addEventListener('click', () => {
        if (cardEl._flipped || this.flipped.length >= 2 || this.matched.has(card.pairId)) {
          return;
        }
        
        // Flip card
        cardEl._flipped = true;
        cardEl.style.transform = 'rotateY(180deg)';
        this.flipped.push(cardEl);
        
        if (this.flipped.length === 2) {
          const [card1, card2] = this.flipped;
          
          if (card1._data.pairId === card2._data.pairId) {
            // Match!
            this.matched.add(card1._data.pairId);
            card1.style.opacity = '0.7';
            card2.style.opacity = '0.7';
            this.flipped = [];
            
            if (this.matched.size === this.data.pairs.length) {
              setTimeout(() => {
                if (this.onComplete) this.onComplete();
              }, 500);
            }
          } else {
            // No match - flip back after delay
            setTimeout(() => {
              card1.style.transform = 'rotateY(0deg)';
              card2.style.transform = 'rotateY(0deg)';
              card1._flipped = false;
              card2._flipped = false;
              this.flipped = [];
            }, 1000);
          }
        }
      });
      
      puzzleDiv.appendChild(cardEl);
    });
    
    this.container.appendChild(puzzleDiv);
  }
}
