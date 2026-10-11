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
  leftContainer.appendChild(puzzleWrapper);
  
  // Clear right page for puzzle spreads
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
    puzzle.onComplete = () => showPraise(pageData.praise, puzzleWrapper);
  }
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
