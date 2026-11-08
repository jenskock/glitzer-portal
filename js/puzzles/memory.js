import { ensureIdOrder, isMemoryMatch, memoryDeck } from '../choice-order.js';
import { mountRetry } from '../choice-controls.js';

export class MemoryPuzzle {
  constructor(data, container, context = {}) {
    this.data = data;
    this.container = container;
    this.bookId = context.bookId || 'book';
    this.puzzleKey = context.puzzleKey || 'memory';
    this.flipped = [];
    this.matched = new Set();
    this.onComplete = null;

    this.render();
  }

  render() {
    const shell = document.createElement('div');
    shell.className = 'memory-shell';

    const puzzleDiv = document.createElement('div');
    puzzleDiv.className = 'memory-puzzle';

    const cards = ensureIdOrder({
      bookId: this.bookId,
      puzzleKey: this.puzzleKey,
      listKey: 'memory-deck',
      items: memoryDeck(this.data.pairs),
      idOf: (card) => card.cardId,
    });

    cards.forEach((card) => {
      const cardEl = document.createElement('button');
      cardEl.type = 'button';
      cardEl.className = 'memory-card';
      cardEl.dataset.pairId = card.pairId;
      cardEl.dataset.cardId = card.cardId;
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

    shell.appendChild(puzzleDiv);
    mountRetry(shell, () => {
      this.flipped = [];
      this.matched = new Set();
      ensureIdOrder({
        bookId: this.bookId,
        puzzleKey: this.puzzleKey,
        listKey: 'memory-deck',
        items: memoryDeck(this.data.pairs),
        idOf: (card) => card.cardId,
        fresh: true,
      });
      this.container.innerHTML = '';
      this.render();
    });

    this.container.appendChild(shell);
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
    const firstCard = { pairId: first.dataset.pairId, cardId: first.dataset.cardId };
    const secondCard = { pairId: second.dataset.pairId, cardId: second.dataset.cardId };
    if (isMemoryMatch(firstCard, secondCard)) {
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
