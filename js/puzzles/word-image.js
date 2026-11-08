import { createChoiceSession } from '../choice-order.js';
import { clearHint, mountFeedback, mountRetry, showWrongHint } from '../choice-controls.js';

export class WordImagePuzzle {
  constructor(data, container, context = {}) {
    this.data = data;
    this.container = container;
    this.onComplete = null;
    this.session = createChoiceSession({
      bookId: context.bookId || 'book',
      puzzleKey: context.puzzleKey || 'word-image',
      rawQuestions: data.rounds,
      scope: context.puzzleKey || 'word-image',
    });
    this.render();
  }

  render() {
    const puzzleDiv = document.createElement('div');
    puzzleDiv.className = 'word-image-puzzle';
    puzzleDiv.style.display = 'flex';
    puzzleDiv.style.flexDirection = 'column';
    puzzleDiv.style.alignItems = 'center';
    puzzleDiv.style.justifyContent = 'center';
    puzzleDiv.style.height = '100%';
    puzzleDiv.style.padding = '40px';
    this.puzzleDiv = puzzleDiv;
    this.showRound();
    this.container.appendChild(puzzleDiv);
  }

  showRound() {
    this.puzzleDiv.innerHTML = '';

    if (this.session.done) {
      if (this.onComplete) this.onComplete();
      return;
    }

    const round = this.session.current();
    const options = this.session.display();

    const wordDiv = document.createElement('div');
    wordDiv.className = 'word-to-match';
    wordDiv.textContent = round.word || round.prompt;
    wordDiv.style.fontFamily = 'Source Sans 3, sans-serif';
    wordDiv.style.fontSize = '3rem';
    wordDiv.style.fontWeight = 'bold';
    wordDiv.style.marginBottom = '40px';
    wordDiv.style.color = '#4ECDC4';
    wordDiv.style.letterSpacing = '0.1em';
    this.puzzleDiv.appendChild(wordDiv);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'word-image-options';
    optionsDiv.style.display = 'flex';
    optionsDiv.style.gap = '30px';
    optionsDiv.style.justifyContent = 'center';
    optionsDiv.style.width = '100%';

    let locked = false;
    options.forEach((option) => {
      const optionDiv = document.createElement('div');
      optionDiv.className = 'word-image-option';
      optionDiv.dataset.answerId = option.answerId;
      optionDiv.setAttribute('role', 'button');
      optionDiv.tabIndex = 0;
      optionDiv.style.cursor = 'pointer';
      optionDiv.style.borderRadius = '15px';
      optionDiv.style.overflow = 'hidden';
      optionDiv.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      optionDiv.style.transition = 'transform 0.2s';
      optionDiv.style.flex = '1 1 0';
      optionDiv.style.maxWidth = '360px';
      optionDiv.style.width = 'auto';
      optionDiv.style.background = 'white';
      optionDiv.style.minHeight = '44px';

      const img = document.createElement('img');
      img.src = option.image;
      img.alt = option.alt || option.label;
      img.style.width = '100%';
      img.style.height = '220px';
      img.style.objectFit = 'contain';
      img.style.background = '#f7f7f7';
      img.style.display = 'block';
      optionDiv.appendChild(img);

      const label = document.createElement('div');
      label.textContent = option.label;
      label.style.padding = '15px';
      label.style.textAlign = 'center';
      label.style.fontFamily = 'Andika, sans-serif';
      label.style.fontSize = '1.2rem';
      label.style.fontWeight = 'bold';
      label.style.color = '#333';
      label.style.display = 'none';
      optionDiv.appendChild(label);

      const choose = () => {
        if (locked) return;
        label.style.display = 'block';
        const result = this.session.answer(option.answerId);
        if (result.correct) {
          locked = true;
          optionDiv.classList.add('correct');
          optionDiv.style.border = '4px solid #4ECDC4';
          optionDiv.style.background = 'rgba(78, 205, 196, 0.1)';
          clearHint(feedback);
          setTimeout(() => {
            this.session.advance();
            this.showRound();
          }, 1200);
          return;
        }
        optionDiv.classList.add('incorrect');
        optionDiv.style.border = '4px solid #FF6B6B';
        optionDiv.style.background = 'rgba(255, 107, 107, 0.1)';
        showWrongHint(feedback);
        setTimeout(() => {
          optionDiv.classList.remove('incorrect');
          optionDiv.style.border = 'none';
          optionDiv.style.background = 'white';
          label.style.display = 'none';
        }, 1200);
      };

      optionDiv.addEventListener('click', choose);
      optionDiv.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          choose();
        }
      });
      optionsDiv.appendChild(optionDiv);
    });

    this.puzzleDiv.appendChild(optionsDiv);
    const feedback = mountFeedback(this.puzzleDiv);
    mountRetry(this.puzzleDiv, () => {
      this.session.retry();
      this.showRound();
    });
  }
}
