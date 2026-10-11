export function renderCoverPage(pageData, container, book) {
  const image = pageData.image || book.coverImage;

  container.className = 'page cover-page';
  container.innerHTML = `
    <img class="cover-art" src="${image}" alt="Lotti auf einem Seerosenblatt im See">
    <div class="cover-copy">
      <div class="cover-series">${pageData.series}</div>
      <div class="cover-title">${pageData.title}</div>
      <div class="cover-subtitle">${pageData.subtitle}</div>
    </div>
  `;
}
