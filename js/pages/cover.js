export function renderCoverPage(pageData, container, book) {
  container.style.setProperty('--book-color', book.coverColor);
  container.style.setProperty('--book-color-light', lightenColor(book.coverColor, 15));
  
  container.className = 'page cover-page';
  container.innerHTML = `
    <div class="cover-series">${pageData.series}</div>
    <div class="cover-title">${pageData.title}</div>
    <div class="cover-subtitle">${pageData.subtitle}</div>
  `;
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
