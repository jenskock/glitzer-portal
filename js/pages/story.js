export function renderStoryPage(pageData, container, side) {
  container.className = 'page story-page';
  
  const content = side === 'left' ? pageData.left : pageData.right;
  if (!content) return;
  
  // Each spread has ONE 16:9 image spanning both pages
  // We show the left half on left page, right half on right page
  const storyDiv = document.createElement('div');
  storyDiv.className = 'story-scene';
  
  const illustration = document.createElement('div');
  illustration.className = 'scene-illustration';
  
  if (pageData.spreadImage) {
    const img = document.createElement('img');
    img.src = pageData.spreadImage;
    img.alt = 'Story illustration';
    img.className = 'spread-image';
    img.style.width = '200%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    // Position image to show left or right half
    img.style.objectPosition = side === 'left' ? '0% center' : '100% center';
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
