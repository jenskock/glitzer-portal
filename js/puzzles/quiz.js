export class QuizPuzzle {
  constructor(data, container) {
    this.data = data;
    this.container = container;
    this.currentQuestion = 0;
    this.onComplete = null;
    
    this.render();
  }

  render() {
    const puzzleDiv = document.createElement('div');
    puzzleDiv.className = 'quiz-puzzle';
    this.puzzleDiv = puzzleDiv;
    
    this.renderQuestion();
    
    this.container.appendChild(puzzleDiv);
  }

  renderQuestion() {
    this.puzzleDiv.innerHTML = '';
    
    if (this.currentQuestion >= this.data.questions.length) {
      if (this.onComplete) this.onComplete();
      return;
    }
    
    const progress = document.createElement('div');
    progress.className = 'quiz-progress';
    progress.textContent = `Frage ${this.currentQuestion + 1} von ${this.data.questions.length}`;
    this.puzzleDiv.appendChild(progress);
    
    const question = this.data.questions[this.currentQuestion];
    
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question';
    
    const questionText = document.createElement('div');
    questionText.className = 'quiz-question-text';
    questionText.textContent = question.question;
    questionDiv.appendChild(questionText);
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'quiz-options';
    
    question.options.forEach(option => {
      const optionEl = document.createElement('button');
      optionEl.className = 'quiz-option';
      
      if (option.image) {
        const emoji = this.getEmoji(option.image);
        optionEl.innerHTML = `<span style="font-size: 2rem;">${emoji}</span> ${option.text}`;
      } else {
        optionEl.textContent = option.text;
      }
      
      optionEl.addEventListener('click', () => {
        if (option.correct) {
          optionEl.classList.add('correct');
          
          question.options.forEach(opt => {
            const btn = optionsDiv.children[question.options.indexOf(opt)];
            if (!opt.correct) btn.classList.add('disabled');
          });
          
          setTimeout(() => {
            this.currentQuestion++;
            this.renderQuestion();
          }, 1500);
        }
      });
      
      optionsDiv.appendChild(optionEl);
    });
    
    questionDiv.appendChild(optionsDiv);
    this.puzzleDiv.appendChild(questionDiv);
  }

  getEmoji(type) {
    const emojis = {
      slow: '🐢',
      fast: '🐆',
      hop: '🦘',
      fruit: '🍎',
      grass: '🌱',
      stone: '🪨'
    };
    return emojis[type] || '❓';
  }
}
