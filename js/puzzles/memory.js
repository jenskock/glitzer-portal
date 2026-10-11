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

    const cards = this.data.pairs.flatMap((pair) => [
      { ...pair, pairId: pair.id },
      { ...pair, pairId: pair.id },
    ]);

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    cards.forEach((card) => {
      const cardEl = document.createElement('button');
      cardEl.type = 'button';
      cardEl.className = 'memory-card';
      cardEl.dataset.pairId = card.pairId;
      cardEl.setAttribute('aria-label', 'Verdeckte Karte');

      const back = document.createElement('span');
      back.className = 'memory-card-face memory-card-back';
      const backImg = document.createElement('img');
      backImg.src = this.data.cardBack;
      backImg.alt = '';
      back.appendChild(backImg);

      const front = document.createElement('span');
      front.className = 'memory-card-face memory-card-front';
      const frontImg = document.createElement('img');
      frontImg.src = card.image;
      frontImg.alt = card.name;
      front.appendChild(frontImg);

      cardEl.append(back, front);
      cardEl.addEventListener('click', () => this.flip(cardEl, card));
      puzzleDiv.appendChild(cardEl);
    });

    this.container.appendChild(puzzleDiv);
  }

  flip(cardEl, card) {
    if (
      cardEl.classList.contains('flipped') ||
      cardEl.classList.contains('matched') ||
      this.flipped.length >= 2
    ) {
      return;
    }

    cardEl.classList.add('flipped');
    cardEl.setAttribute('aria-label', card.name);
    this.flipped.push(cardEl);

    if (this.flipped.length < 2) return;

    const [first, second] = this.flipped;
    if (first.dataset.pairId === second.dataset.pairId) {
      this.matched.add(first.dataset.pairId);
      first.classList.add('matched');
      second.classList.add('matched');
      this.flipped = [];

      if (this.matched.size === this.data.pairs.length && this.onComplete) {
        setTimeout(() => this.onComplete(), 500);
      }
      return;
    }

    setTimeout(() => {
      first.classList.remove('flipped');
      second.classList.remove('flipped');
      first.setAttribute('aria-label', 'Verdeckte Karte');
      second.setAttribute('aria-label', 'Verdeckte Karte');
      this.flipped = [];
    }, 1000);
  }
}
