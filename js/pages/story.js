export function renderStoryPage(pageData, container, side) {
  container.className = 'page';
  
  const content = side === 'left' ? pageData.left : pageData.right;
  if (!content) return;
  
  const storyDiv = document.createElement('div');
  storyDiv.className = 'story-scene';
  
  const illustration = document.createElement('div');
  illustration.className = 'scene-illustration';
  
  if (content.image) {
    const img = document.createElement('img');
    img.src = content.image;
    img.alt = 'Story illustration';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'contain';
    illustration.appendChild(img);
  }
  
  const textContainer = document.createElement('div');
  textContainer.className = 'page-text-container';
  
  const text = document.createElement('div');
  text.className = 'page-text';
  text.textContent = content.text;
  
  textContainer.appendChild(text);
  storyDiv.appendChild(illustration);
  storyDiv.appendChild(textContainer);
  container.appendChild(storyDiv);
}
