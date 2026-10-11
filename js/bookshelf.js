export function renderBookshelf(books, onBookClick) {
  const container = document.getElementById('books-container');
  container.innerHTML = '';

  books.forEach(book => {
    const cover = document.createElement('div');
    cover.className = 'book-cover';
    cover.style.setProperty('--book-color', book.coverColor);
    cover.style.setProperty('--book-color-light', lightenColor(book.coverColor, 15));
    
    cover.innerHTML = `
      <div class="book-cover-series">${book.series}</div>
      <div class="book-cover-illustration">
        <svg viewBox="0 0 180 180" width="180" height="180">
          <circle cx="90" cy="90" r="70" fill="none" stroke="#fff" stroke-width="6" opacity="0.3"/>
          <circle cx="60" cy="80" r="4" fill="#fff"/>
          <circle cx="90" cy="50" r="4" fill="#fff"/>
          <circle cx="120" cy="80" r="4" fill="#fff"/>
          <circle cx="130" cy="110" r="4" fill="#fff"/>
          <circle cx="50" cy="110" r="4" fill="#fff"/>
          
          <g transform="translate(40, 100) scale(0.2)">
            <ellipse cx="50" cy="50" rx="30" ry="35" fill="#FFB6D9" stroke="#2d1e17" stroke-width="3"/>
            <circle cx="45" cy="45" r="4" fill="#2d1e17"/>
            <circle cx="55" cy="45" r="4" fill="#2d1e17"/>
          </g>
          
          <g transform="translate(90, 95) scale(0.18)">
            <ellipse cx="50" cy="60" rx="40" ry="45" fill="#b8794a" stroke="#2d1e17" stroke-width="3"/>
            <circle cx="42" cy="50" r="5" fill="#2d1e17"/>
            <circle cx="58" cy="50" r="5" fill="#2d1e17"/>
          </g>
        </svg>
      </div>
      <div class="book-cover-title">${book.title}</div>
      <div class="book-cover-band">Band ${book.id.replace('band', '')}</div>
    `;
    
    cover.addEventListener('click', () => onBookClick(book));
    
    container.appendChild(cover);
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
