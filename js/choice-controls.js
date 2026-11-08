import { WRONG_HINT } from './choice-order.js';

export { WRONG_HINT };

export function mountRetry(parent, onRetry) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'choice-retry';
  button.textContent = 'Neu versuchen';
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    onRetry();
  });
  parent.appendChild(button);
  return button;
}

export function mountFeedback(parent) {
  const feedback = document.createElement('div');
  feedback.className = 'choice-feedback';
  feedback.setAttribute('role', 'status');
  feedback.setAttribute('aria-live', 'polite');
  parent.appendChild(feedback);
  return feedback;
}

export function showWrongHint(feedback) {
  feedback.textContent = WRONG_HINT;
}

export function clearHint(feedback) {
  feedback.textContent = '';
}
