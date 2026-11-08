import { SearchPuzzle } from '../puzzles/search.js';
import { DifferencesPuzzle } from '../puzzles/differences.js';
import { InitialSoundsPuzzle } from '../puzzles/initial-sounds.js';
import { FactCardsPuzzle } from '../puzzles/fact-cards.js';
import { MazePuzzle } from '../puzzles/maze.js';
import { QuizPuzzle } from '../puzzles/quiz.js';
import { MemoryPuzzle } from '../puzzles/memory.js';
import { ColoringPuzzle } from '../puzzles/coloring.js';
import { WordImagePuzzle } from '../puzzles/word-image.js';
import { createChoiceSession } from '../choice-order.js';
import { clearHint, mountFeedback, mountRetry, showWrongHint } from '../choice-controls.js';

export function renderPuzzlePage(pageData, leftContainer, rightContainer, book = null, pageIndex = 0) {
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
  
  const context = {
    bookId: book?.id || 'book',
    puzzleKey: `${book?.id || 'book'}:page:${pageIndex}:${pageData.puzzleType}`,
  };

  let puzzle;
  switch (pageData.puzzleType) {
    case 'search':
      puzzle = new SearchPuzzle(pageData, content, context);
      break;
    case 'differences':
      puzzle = new DifferencesPuzzle(pageData, content, context);
      break;
    case 'initial-sounds':
      puzzle = new InitialSoundsPuzzle(pageData, content, context);
      break;
    case 'fact-cards':
      puzzle = new FactCardsPuzzle(pageData, content, context);
      break;
    case 'maze':
      puzzle = new MazePuzzle(pageData, content, context);
      break;
    case 'quiz':
      puzzle = new QuizPuzzle(pageData, content, context);
      break;
    case 'memory':
      puzzle = new MemoryPuzzle(pageData, content, context);
      break;
    case 'coloring':
      puzzle = new ColoringPuzzle(pageData, content, context);
      break;
    case 'word-image':
      puzzle = new WordImagePuzzle(pageData, content, context);
      break;
    default: {
      const unknown = pageData.puzzleType;
      throw new Error(`Unbekanntes Spiel: ${unknown}`);
    }
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
        }, context);
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

function showComprehension(questions, wrapper, content, onDone, context) {
  const session = createChoiceSession({
    bookId: context.bookId,
    puzzleKey: `${context.puzzleKey}:comprehension`,
    rawQuestions: questions,
    scope: `${context.puzzleKey}:comprehension`,
  });

  wrapper.querySelectorAll('.comprehension-overlay').forEach((el) => el.remove());

  const overlay = document.createElement('div');
  overlay.className = 'comprehension-overlay';

  const panel = document.createElement('div');
  panel.className = 'fact-quiz comprehension-quiz';
  overlay.appendChild(panel);
  wrapper.appendChild(overlay);

  function renderQuestion() {
    panel.innerHTML = '';

    if (session.done) {
      overlay.remove();
      onDone();
      return;
    }

    const q = session.current();

    const label = document.createElement('div');
    label.className = 'comprehension-label';
    label.textContent = 'Was hast du gelesen?';
    panel.appendChild(label);

    const question = document.createElement('div');
    question.className = 'fact-quiz-question';
    question.textContent = q.prompt;
    panel.appendChild(question);

    const options = document.createElement('div');
    options.className = 'fact-quiz-options';
    let locked = false;

    session.display().forEach((option) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'fact-quiz-option';
      btn.dataset.answerId = option.answerId;
      btn.textContent = option.label;
      btn.addEventListener('click', () => {
        if (locked || btn.disabled) return;
        const result = session.answer(option.answerId);
        btn.classList.add(result.correct ? 'correct' : 'incorrect');
        if (result.correct) {
          locked = true;
          clearHint(feedback);
          options.querySelectorAll('button').forEach((b) => { b.disabled = true; });
          setTimeout(() => {
            session.advance();
            renderQuestion();
          }, 700);
        } else {
          showWrongHint(feedback);
          setTimeout(() => {
            btn.classList.remove('incorrect');
          }, 700);
        }
      });
      options.appendChild(btn);
    });

    panel.appendChild(options);
    const feedback = mountFeedback(panel);
    mountRetry(panel, () => {
      session.retry();
      renderQuestion();
    });
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
