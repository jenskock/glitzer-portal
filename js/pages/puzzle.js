import { SearchPuzzle } from '../puzzles/search.js';
import { DifferencesPuzzle } from '../puzzles/differences.js';
import { InitialSoundsPuzzle } from '../puzzles/initial-sounds.js';
import { FactCardsPuzzle } from '../puzzles/fact-cards.js';
import { MazePuzzle } from '../puzzles/maze.js';
import { QuizPuzzle } from '../puzzles/quiz.js';
import { MemoryPuzzle } from '../puzzles/memory.js';
import { ColoringPuzzle } from '../puzzles/coloring.js';
import { WordImagePuzzle } from '../puzzles/word-image.js';

export function renderPuzzlePage(pageData, container) {
  container.className = 'page';
  
  const puzzleDiv = document.createElement('div');
  puzzleDiv.className = 'puzzle-page';
  
  const header = document.createElement('div');
  header.className = 'puzzle-header';
  header.innerHTML = `
    <div class="puzzle-title">${pageData.title}</div>
    <div class="puzzle-instruction">${pageData.instruction}</div>
  `;
  
  const content = document.createElement('div');
  content.className = 'puzzle-content';
  
  puzzleDiv.appendChild(header);
  puzzleDiv.appendChild(content);
  container.appendChild(puzzleDiv);
  
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
    puzzle.onComplete = () => showPraise(pageData.praise, puzzleDiv);
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
