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
    puzzleDiv.style.display = 'flex';
    puzzleDiv.style.flexDirection = 'column';
    puzzleDiv.style.alignItems = 'center';
    puzzleDiv.style.justifyContent = 'center';
    puzzleDiv.style.height = '100%';
    puzzleDiv.style.padding = '40px';
    
    this.puzzleDiv = puzzleDiv;
    this.showQuestion();
    
    this.container.appendChild(puzzleDiv);
  }

  showQuestion() {
    this.puzzleDiv.innerHTML = '';
    
    if (this.currentQuestion >= this.data.questions.length) {
      if (this.onComplete) this.onComplete();
      return;
    }
    
    const q = this.data.questions[this.currentQuestion];
    
    const questionDiv = document.createElement('div');
    questionDiv.className = 'quiz-question';
    questionDiv.textContent = q.question;
    questionDiv.style.fontFamily = 'Source Sans 3, sans-serif';
    questionDiv.style.fontSize = '1.8rem';
    questionDiv.style.marginBottom = '30px';
    questionDiv.style.textAlign = 'center';
    questionDiv.style.color = '#333';
    questionDiv.style.width = '100%';
    this.puzzleDiv.appendChild(questionDiv);
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'quiz-options';
    optionsDiv.style.display = 'flex';
    optionsDiv.style.flexDirection = 'row';
    optionsDiv.style.gap = '20px';
    optionsDiv.style.flexWrap = 'wrap';
    optionsDiv.style.justifyContent = 'center';
    optionsDiv.style.width = '100%';
    
    q.options.forEach((option, index) => {
      const optionDiv = document.createElement('div');
      optionDiv.className = 'quiz-option';
      optionDiv.style.cursor = 'pointer';
      optionDiv.style.borderRadius = '15px';
      optionDiv.style.overflow = 'hidden';
      optionDiv.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      optionDiv.style.transition = 'transform 0.2s';
      optionDiv.style.flex = '1 1 220px';
      optionDiv.style.maxWidth = '340px';
      optionDiv.style.width = 'auto';
      optionDiv.style.background = 'white';
      optionDiv.style.display = 'flex';
      optionDiv.style.flexDirection = 'column';
      
      if (option.image) {
        const img = document.createElement('img');
        img.src = option.image;
        img.alt = option.text;
        img.style.width = '100%';
        img.style.height = '200px';
        img.style.objectFit = 'cover';
        img.style.display = 'block';
        optionDiv.appendChild(img);
      }
      
      const text = document.createElement('div');
      text.textContent = option.text;
      text.style.padding = '15px';
      text.style.textAlign = 'center';
      text.style.fontFamily = 'Andika, sans-serif';
      text.style.fontSize = '1.1rem';
      text.style.fontWeight = 'bold';
      text.style.color = '#333';
      optionDiv.appendChild(text);
      
      optionDiv.addEventListener('mouseenter', () => {
        optionDiv.style.transform = 'scale(1.05)';
      });
      
      optionDiv.addEventListener('mouseleave', () => {
        optionDiv.style.transform = 'scale(1)';
      });
      
      optionDiv.addEventListener('click', () => {
        if (option.correct) {
          optionDiv.style.border = '4px solid #4ECDC4';
          optionDiv.style.background = 'rgba(78, 205, 196, 0.1)';
          
          setTimeout(() => {
            this.currentQuestion++;
            this.showQuestion();
          }, 1000);
        } else {
          optionDiv.style.border = '4px solid #FF6B6B';
          optionDiv.style.background = 'rgba(255, 107, 107, 0.1)';
          
          setTimeout(() => {
            optionDiv.style.border = 'none';
            optionDiv.style.background = 'white';
          }, 1000);
        }
      });
      
      optionsDiv.appendChild(optionDiv);
    });
    
    this.puzzleDiv.appendChild(optionsDiv);
  }
}
