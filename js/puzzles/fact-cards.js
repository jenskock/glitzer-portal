export class FactCardsPuzzle {
  constructor(data, container) {
    this.data = data;
    this.container = container;
    this.revealed = new Set();
    this.quizAnswered = false;
    this.onComplete = null;
    
    this.render();
  }

  render() {
    const puzzleDiv = document.createElement('div');
    puzzleDiv.className = 'fact-cards-puzzle';
    
    const character = document.createElement('div');
    character.className = 'fact-character';
    character.innerHTML = `<img src="./assets/characters/${this.data.character}_transparent.svg" alt="${this.data.character}">`;
    puzzleDiv.appendChild(character);
    
    const grid = document.createElement('div');
    grid.className = 'fact-cards-grid';
    
    this.data.cards.forEach((text, index) => {
      const card = document.createElement('div');
      card.className = 'fact-card';
      card.innerHTML = `<div class="fact-card-text">${text}</div>`;
      
      card.addEventListener('click', () => {
        if (!this.revealed.has(index)) {
          this.revealed.add(index);
          card.classList.add('revealed');
          
          if (this.revealed.size === this.data.cards.length) {
            setTimeout(() => this.showQuiz(puzzleDiv), 1000);
          }
        }
      });
      
      grid.appendChild(card);
    });
    
    puzzleDiv.appendChild(grid);
    this.container.appendChild(puzzleDiv);
  }

  showQuiz(puzzleDiv) {
    const quiz = document.createElement('div');
    quiz.className = 'fact-quiz';
    
    const question = document.createElement('div');
    question.className = 'fact-quiz-question';
    question.textContent = this.data.quiz.question;
    quiz.appendChild(question);
    
    const options = document.createElement('div');
    options.className = 'fact-quiz-options';
    
    this.data.quiz.options.forEach(option => {
      const optionEl = document.createElement('button');
      optionEl.className = 'fact-quiz-option';
      optionEl.textContent = option.text;
      
      optionEl.addEventListener('click', () => {
        if (!this.quizAnswered) {
          this.quizAnswered = true;
          
          if (option.correct) {
            optionEl.classList.add('correct');
            setTimeout(() => {
              if (this.onComplete) this.onComplete();
            }, 1000);
          } else {
            optionEl.classList.add('incorrect');
          }
        }
      });
      
      options.appendChild(optionEl);
    });
    
    quiz.appendChild(options);
    puzzleDiv.appendChild(quiz);
  }
}
