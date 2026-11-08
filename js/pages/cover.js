export function renderCoverPage(pageData, container, book) {
  const image = pageData.image || book.coverImage;
  const alt = pageData.alt || 'Lotti auf einem Seerosenblatt im See';

  container.className = 'page cover-page';
  container.innerHTML = `
    <img class="cover-art" src="${image}" alt="${alt}">
    <div class="cover-copy">
      <div class="cover-series">${pageData.series}</div>
      <div class="cover-title">${pageData.title}</div>
      <div class="cover-subtitle">${pageData.subtitle}</div>
    </div>
  `;
}
