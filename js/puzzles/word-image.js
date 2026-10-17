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
    
    if (this.currentRound >= this.data.rounds.length) {
      if (this.onComplete) this.onComplete();
      return;
    }
    
    const round = this.data.rounds[this.currentRound];
    
    const wordDiv = document.createElement('div');
    wordDiv.className = 'word-to-match';
    wordDiv.textContent = round.word;
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
    
    round.options.forEach(option => {
      const optionDiv = document.createElement('div');
      optionDiv.className = 'word-image-option';
      optionDiv.style.cursor = 'pointer';
      optionDiv.style.borderRadius = '15px';
      optionDiv.style.overflow = 'hidden';
      optionDiv.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      optionDiv.style.transition = 'transform 0.2s';
      optionDiv.style.flex = '1 1 0';
      optionDiv.style.maxWidth = '360px';
      optionDiv.style.width = 'auto';
      optionDiv.style.background = 'white';
      
      const img = document.createElement('img');
      img.src = option.image;
      img.alt = option.name;
      img.style.width = '100%';
      img.style.height = '220px';
      img.style.objectFit = 'contain';
      img.style.background = '#f7f7f7';
      img.style.display = 'block';
      optionDiv.appendChild(img);
      
      const label = document.createElement('div');
      label.textContent = option.name;
      label.style.padding = '15px';
      label.style.textAlign = 'center';
      label.style.fontFamily = 'Andika, sans-serif';
      label.style.fontSize = '1.2rem';
      label.style.fontWeight = 'bold';
      label.style.color = '#333';
      label.style.display = 'none'; // Hidden until clicked
      optionDiv.appendChild(label);
      
      optionDiv.addEventListener('mouseenter', () => {
        optionDiv.style.transform = 'scale(1.05)';
      });
      
      optionDiv.addEventListener('mouseleave', () => {
        optionDiv.style.transform = 'scale(1)';
      });
      
      optionDiv.addEventListener('click', () => {
        label.style.display = 'block';
        
        if (option.correct) {
          optionDiv.style.border = '4px solid #4ECDC4';
          optionDiv.style.background = 'rgba(78, 205, 196, 0.1)';
          
          setTimeout(() => {
            this.currentRound++;
            this.showRound();
          }, 1200);
        } else {
          optionDiv.style.border = '4px solid #FF6B6B';
          optionDiv.style.background = 'rgba(255, 107, 107, 0.1)';
          
          setTimeout(() => {
            optionDiv.style.border = 'none';
            optionDiv.style.background = 'white';
            label.style.display = 'none';
          }, 1200);
        }
      });
      
      optionsDiv.appendChild(optionDiv);
    });
    
    this.puzzleDiv.appendChild(optionsDiv);
  }
}
