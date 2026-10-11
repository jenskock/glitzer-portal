export class WordImagePuzzle {
  constructor(data, container) {
    this.data = data;
    this.container = container;
    this.currentRound = 0;
    this.onComplete = null;
    
    this.render();
  }

  render() {
    const puzzleDiv = document.createElement('div');
    puzzleDiv.className = 'word-image-puzzle';
    this.puzzleDiv = puzzleDiv;
    
    this.renderRound();
    
    this.container.appendChild(puzzleDiv);
  }

  renderRound() {
    this.puzzleDiv.innerHTML = '';
    
    if (this.currentRound >= this.data.rounds.length) {
      if (this.onComplete) this.onComplete();
      return;
    }
    
    const progress = document.createElement('div');
    progress.className = 'word-progress';
    progress.textContent = `Wort ${this.currentRound + 1} von ${this.data.rounds.length}`;
    this.puzzleDiv.appendChild(progress);
    
    const round = this.data.rounds[this.currentRound];
    
    const roundDiv = document.createElement('div');
    roundDiv.className = 'word-image-round';
    
    const wordDisplay = document.createElement('div');
    wordDisplay.className = 'word-display';
    wordDisplay.textContent = round.word;
    roundDiv.appendChild(wordDisplay);
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'word-options';
    
    round.options.forEach(option => {
      const optionEl = document.createElement('button');
      optionEl.className = 'word-option';
      
      const icon = document.createElement('div');
      icon.className = 'word-option-icon';
      icon.textContent = this.getEmoji(option);
      
      const label = document.createElement('div');
      label.className = 'word-option-label';
      label.textContent = option.toUpperCase();
      
      optionEl.appendChild(icon);
      optionEl.appendChild(label);
      
      optionEl.addEventListener('click', () => {
        if (option === round.options[0]) {
          optionEl.classList.add('correct');
          
          round.options.forEach(opt => {
            const btn = optionsDiv.children[round.options.indexOf(opt)];
            if (opt !== round.options[0]) btn.classList.add('disabled');
          });
          
          setTimeout(() => {
            this.currentRound++;
            this.renderRound();
          }, 1500);
        }
      });
      
      optionsDiv.appendChild(optionEl);
    });
    
    roundDiv.appendChild(optionsDiv);
    this.puzzleDiv.appendChild(roundDiv);
  }

  getEmoji(word) {
    const emojis = {
      seil: '🪢',
      eis: '🍦',
      seife: '🧼',
      ast: '🌿',
      hase: '🐰',
      nest: '🪺',
      mango: '🥭',
      mond: '🌙',
      mantel: '🧥',
      band: '🎀',
      hand: '✋',
      bank: '🏦'
    };
    return emojis[word.toLowerCase()] || '❓';
  }
}
