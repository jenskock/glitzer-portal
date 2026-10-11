export function renderBookshelf(books, onBookClick) {
  const container = document.getElementById('books-container');
  container.innerHTML = '';

  books.forEach(book => {
    const spine = document.createElement('div');
    spine.className = 'book-spine';
    spine.style.setProperty('--book-color', book.coverColor);
    spine.style.setProperty('--book-color-light', lightenColor(book.coverColor, 20));
    
    spine.innerHTML = `
      <div class="book-spine-series">${book.series}</div>
      <div class="book-spine-title">${book.title}</div>
      <div class="book-spine-band">${book.id.replace('band', '')}</div>
    `;
    
    spine.addEventListener('click', () => onBookClick(book));
    
    container.appendChild(spine);
  });
}

function lightenColor(color, percent) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8 & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255))
    .toString(16).slice(1);
}
