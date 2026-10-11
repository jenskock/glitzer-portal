import { renderCoverPage } from './pages/cover.js';
import { renderStoryPage } from './pages/story.js';
import { renderPuzzlePage } from './pages/puzzle.js';

export function renderPage(pageData, container, book, side) {
  container.innerHTML = '';
  
  switch (pageData.type) {
    case 'cover':
      renderCoverPage(pageData, container, book);
      break;
    case 'story':
      renderStoryPage(pageData, container, side);
      break;
    case 'puzzle':
      renderPuzzlePage(pageData, container);
      break;
    default:
      container.innerHTML = '<p>Unknown page type</p>';
  }
}
