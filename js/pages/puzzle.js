import { SearchPuzzle } from '../puzzles/search.js';
import { DifferencesPuzzle } from '../puzzles/differences.js';
import { InitialSoundsPuzzle } from '../puzzles/initial-sounds.js';
import { FactCardsPuzzle } from '../puzzles/fact-cards.js';
import { MazePuzzle } from '../puzzles/maze.js';
import { QuizPuzzle } from '../puzzles/quiz.js';
import { MemoryPuzzle } from '../puzzles/memory.js';
import { ColoringPuzzle } from '../puzzles/coloring.js';
import { WordImagePuzzle } from '../puzzles/word-image.js';

export function renderPuzzlePage(pageData, leftContainer, rightContainer) {
  // Puzzle spans both pages
  leftContainer.className = 'page puzzle-page-left';
  if (rightContainer) {
    rightContainer.className = 'page puzzle-page-right';
  }
  
  // Create wrapper that spans both pages
  const puzzleWrapper = document.createElement('div');
  puzzleWrapper.className = 'puzzle-spread-wrapper';
  
  const header = document.createElement('div');
  header.className = 'puzzle-header';
  header.innerHTML = `
    <div class="puzzle-title">${pageData.title}</div>
    <div class="puzzle-instruction">${pageData.instruction}</div>
  `;
  
  const content = document.createElement('div');
  content.className = 'puzzle-content';
  
  puzzleWrapper.appendChild(header);
  puzzleWrapper.appendChild(content);

  if (pageData.puzzleType === 'search' || pageData.puzzleType === 'differences') {
    header.appendChild(createHintToggle(content));
  }

  const spread = leftContainer.closest('.book-spread');
  if (spread) {
    spread.appendChild(puzzleWrapper);
  } else {
    leftContainer.appendChild(puzzleWrapper);
  }

  if (rightContainer) {
    rightContainer.innerHTML = '';
  }
  
  let puzzle;
  switch (pageData.puzzleType) {
    case 'search':
      puzzle = new SearchPuzzle(pageData, content);
      break;
    case 'differences':
      puzzle = new DifferencesPuzzle(pageData, content);
      break;
    case 'initial-sounds':
      puzzle = new InitialSoundsPuzzle(pageData, content);
      break;
    case 'fact-cards':
      puzzle = new FactCardsPuzzle(pageData, content);
      break;
    case 'maze':
      puzzle = new MazePuzzle(pageData, content);
      break;
    case 'quiz':
      puzzle = new QuizPuzzle(pageData, content);
      break;
    case 'memory':
      puzzle = new MemoryPuzzle(pageData, content);
      break;
    case 'coloring':
      puzzle = new ColoringPuzzle(pageData, content);
      break;
    case 'word-image':
      puzzle = new WordImagePuzzle(pageData, content);
      break;
  }
  
  if (puzzle) {
    let settled = false;
    puzzle.onComplete = () => {
      if (settled) return;
      settled = true;
      const questions = pageData.comprehension;
      if (questions && questions.length > 0) {
        showComprehension(questions, puzzleWrapper, content, () => {
          showPraise(pageData.praise, puzzleWrapper);
        });
      } else {
        showPraise(pageData.praise, puzzleWrapper);
      }
    };
  }
}

function createHintToggle(content) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'hint-toggle';
  button.textContent = 'Tipp zeigen';
  button.setAttribute('aria-pressed', 'false');
  button.addEventListener('click', () => {
    const visible = content.classList.toggle('hints-visible');
    button.setAttribute('aria-pressed', String(visible));
    button.textContent = visible ? 'Tipp verstecken' : 'Tipp zeigen';
  });
  return button;
}

function showComprehension(questions, wrapper, content, onDone) {
  let index = 0;

  wrapper.querySelectorAll('.comprehension-overlay').forEach((el) => el.remove());

  const overlay = document.createElement('div');
  overlay.className = 'comprehension-overlay';

  const panel = document.createElement('div');
  panel.className = 'fact-quiz comprehension-quiz';
  overlay.appendChild(panel);
  wrapper.appendChild(overlay);

  function renderQuestion() {
    panel.innerHTML = '';

    if (index >= questions.length) {
      overlay.remove();
      onDone();
      return;
    }

    const q = questions[index];

    const label = document.createElement('div');
    label.className = 'comprehension-label';
    label.textContent = 'Was hast du gelesen?';
    panel.appendChild(label);

    const question = document.createElement('div');
    question.className = 'fact-quiz-question';
    question.textContent = q.question;
    panel.appendChild(question);

    const options = document.createElement('div');
    options.className = 'fact-quiz-options';

    q.options.forEach((optionText, optionIndex) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'fact-quiz-option';
      btn.textContent = optionText;
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        const correct = optionIndex === q.correct;
        btn.classList.add(correct ? 'correct' : 'incorrect');
        if (correct) {
          options.querySelectorAll('button').forEach((b) => { b.disabled = true; });
          setTimeout(() => {
            index += 1;
            renderQuestion();
          }, 700);
        } else {
          setTimeout(() => {
            btn.classList.remove('incorrect');
          }, 700);
        }
      });
      options.appendChild(btn);
    });

    panel.appendChild(options);
  }

  // Hide finished puzzle visuals while answering
  content.style.visibility = 'hidden';
  renderQuestion();
}

function showPraise(praise, container) {
  const praiseEl = document.createElement('div');
  praiseEl.className = 'praise-message';
  praiseEl.innerHTML = `
    <div class="praise-character">
      <img src="./assets/characters/${praise.character}_transparent.svg" alt="${praise.character}">
    </div>
    <div>${praise.text}</div>
  `;
  
  container.appendChild(praiseEl);
  
  setTimeout(() => {
    praiseEl.classList.add('show');
  }, 100);
}
