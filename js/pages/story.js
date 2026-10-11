import { renderScene } from '../scenes/scene-renderer-v2.js';

export function renderStoryPage(pageData, container, side) {
  container.className = 'page';
  
  const content = side === 'left' ? pageData.left : pageData.right;
  if (!content) return;
  
  const storyDiv = document.createElement('div');
  storyDiv.className = 'story-scene';
  
  const illustration = document.createElement('div');
  illustration.className = 'scene-illustration';
  renderScene(content.scene, illustration);
  
  const text = document.createElement('div');
  text.className = 'page-text';
  text.textContent = content.text;
  
  storyDiv.appendChild(illustration);
  storyDiv.appendChild(text);
  container.appendChild(storyDiv);
}
