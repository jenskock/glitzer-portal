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
    puzzleDiv.style.display = 'flex';
    puzzleDiv.style.flexDirection = 'column';
    puzzleDiv.style.height = '100%';
    puzzleDiv.style.position = 'relative';
    
    // Background image (Steckbrief illustration)
    if (this.data.image) {
      const bg = document.createElement('img');
      bg.src = this.data.image;
      bg.alt = 'Steckbrief';
      bg.style.position = 'absolute';
      bg.style.top = '0';
      bg.style.left = '0';
      bg.style.width = '100%';
      bg.style.height = '100%';
      bg.style.objectFit = 'contain';
      bg.style.opacity = '0.3';
      bg.style.pointerEvents = 'none';
      puzzleDiv.appendChild(bg);
    }
    
    const grid = document.createElement('div');
    grid.className = 'fact-cards-grid';
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    grid.style.gap = '20px';
    grid.style.padding = '40px';
    grid.style.maxWidth = '1000px';
    grid.style.margin = 'auto';
    grid.style.position = 'relative';
    grid.style.zIndex = '1';
    
    this.data.facts.forEach((text, index) => {
      const card = document.createElement('div');
      card.className = 'fact-card';
      card.style.background = 'white';
      card.style.borderRadius = '15px';
      card.style.padding = '20px';
      card.style.cursor = 'pointer';
      card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
      card.style.transition = 'all 0.2s';
      card.style.minHeight = '100px';
      card.style.display = 'flex';
      card.style.alignItems = 'center';
      card.style.justifyContent = 'center';
      card.style.textAlign = 'center';
      
      const textDiv = document.createElement('div');
      textDiv.className = 'fact-card-text';
      textDiv.textContent = text;
      textDiv.style.fontFamily = 'Andika, sans-serif';
      textDiv.style.fontSize = '1.1rem';
      textDiv.style.lineHeight = '1.6';
      textDiv.style.color = '#333';
      textDiv.style.display = 'none';
      
      const numberDiv = document.createElement('div');
      numberDiv.textContent = (index + 1).toString();
      numberDiv.style.fontFamily = 'Baloo2, cursive';
      numberDiv.style.fontSize = '3rem';
      numberDiv.style.fontWeight = 'bold';
      numberDiv.style.color = '#4ECDC4';
      
      card.appendChild(numberDiv);
      card.appendChild(textDiv);
      
      card.addEventListener('click', () => {
        if (!this.revealed.has(index)) {
          this.revealed.add(index);
          numberDiv.style.display = 'none';
          textDiv.style.display = 'block';
          card.style.background = 'rgba(78, 205, 196, 0.1)';
          card.style.border = '2px solid #4ECDC4';
          
          if (this.revealed.size === this.data.facts.length) {
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
    quiz.style.position = 'absolute';
    quiz.style.top = '50%';
    quiz.style.left = '50%';
    quiz.style.transform = 'translate(-50%, -50%)';
    quiz.style.background = 'white';
    quiz.style.borderRadius = '20px';
    quiz.style.padding = '30px';
    quiz.style.boxShadow = '0 8px 24px rgba(0,0,0,0.3)';
    quiz.style.zIndex = '10';
    quiz.style.maxWidth = '600px';
    
    const question = document.createElement('div');
    question.className = 'fact-quiz-question';
    question.textContent = this.data.quiz.question;
    question.style.fontFamily = 'Baloo2, cursive';
    question.style.fontSize = '1.5rem';
    question.style.marginBottom = '20px';
    question.style.textAlign = 'center';
    question.style.color = '#333';
    quiz.appendChild(question);
    
    const options = document.createElement('div');
    options.className = 'fact-quiz-options';
    options.style.display = 'flex';
    options.style.flexDirection = 'column';
    options.style.gap = '10px';
    
    this.data.quiz.options.forEach((option, index) => {
      const btn = document.createElement('button');
      btn.className = 'fact-quiz-option';
      btn.textContent = option;
      btn.style.padding = '15px 25px';
      btn.style.fontSize = '1.2rem';
      btn.style.fontFamily = 'Andika, sans-serif';
      btn.style.borderRadius = '10px';
      btn.style.border = '2px solid #ddd';
      btn.style.background = 'white';
      btn.style.cursor = 'pointer';
      btn.style.transition = 'all 0.2s';
      
      btn.addEventListener('mouseenter', () => {
        btn.style.background = '#f0f0f0';
      });
      
      btn.addEventListener('mouseleave', () => {
        btn.style.background = 'white';
      });
      
      btn.addEventListener('click', () => {
        if (!this.quizAnswered) {
          this.quizAnswered = true;
          
          if (index === this.data.quiz.correct) {
            btn.style.background = '#4ECDC4';
            btn.style.color = 'white';
            btn.style.border = '2px solid #4ECDC4';
            
            setTimeout(() => {
              if (this.onComplete) this.onComplete();
            }, 1000);
          } else {
            btn.style.background = '#FF6B6B';
            btn.style.color = 'white';
            
            setTimeout(() => {
              btn.style.background = 'white';
              btn.style.color = '#333';
              this.quizAnswered = false;
            }, 1000);
          }
        }
      });
      
      options.appendChild(btn);
    });
    
    quiz.appendChild(options);
    puzzleDiv.appendChild(quiz);
  }
}
