import { loadReadingProgress } from './reading-progress.js';

export function renderBookshelf(books, onBookClick) {
  const container = document.getElementById('books-container');
  container.innerHTML = '';

  books.forEach(book => {
    const cover = document.createElement('div');
    cover.className = 'book-cover';
    const progress = loadReadingProgress(book.id, book.pages.length);
    const readCount = progress.read.length;
    const pageCount = book.pages.length;

    cover.innerHTML = `
      <img class="book-cover-art" src="${book.coverImage}" alt="">
      <div class="book-cover-copy">
        <div class="book-cover-series">${book.series}</div>
        <div class="book-cover-title">${book.title}</div>
        <div class="book-cover-band">Band ${book.id.replace('band', '')}</div>
      </div>
    `;

    if (readCount > 0) {
      const progressEl = document.createElement('div');
      progressEl.className = 'book-progress';
      progressEl.setAttribute('role', 'progressbar');
      progressEl.setAttribute('aria-valuemin', '0');
      progressEl.setAttribute('aria-valuemax', String(pageCount));
      progressEl.setAttribute('aria-valuenow', String(readCount));
      progressEl.setAttribute('aria-label', `${readCount} von ${pageCount} Seiten gelesen`);

      const fill = document.createElement('div');
      fill.className = 'book-progress-fill';
      fill.style.width = `${(readCount / pageCount) * 100}%`;
      progressEl.appendChild(fill);

      const label = document.createElement('div');
      label.className = 'book-progress-label';
      label.textContent = `${readCount} von ${pageCount}`;
      cover.append(progressEl, label);
    }
    
    cover.addEventListener('click', () => onBookClick(book));
    
    container.appendChild(cover);
  });
}
