import { renderPage } from './page-renderer.js';

export class BookReader {
  constructor(book) {
    this.book = book;
    this.currentSpreadIndex = 0;
    this.touchStartX = 0;
    this.touchStartY = 0;
    
    this.leftPageEl = document.getElementById('left-page');
    this.rightPageEl = document.getElementById('right-page');
    this.prevButton = document.getElementById('prev-page');
    this.nextButton = document.getElementById('next-page');
    this.bookSpread = document.querySelector('.book-spread');
    
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.prevButton.addEventListener('click', () => this.previousSpread());
    this.nextButton.addEventListener('click', () => this.nextSpread());
    
    this.bookSpread.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
    this.bookSpread.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
    
    this.bookSpread.addEventListener('mousedown', (e) => this.handleMouseDown(e));
    this.bookSpread.addEventListener('mouseup', (e) => this.handleMouseUp(e));
  }

  handleTouchStart(e) {
    this.touchStartX = e.touches[0].clientX;
    this.touchStartY = e.touches[0].clientY;
  }

  handleTouchEnd(e) {
    if (!this.touchStartX) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = this.touchStartX - touchEndX;
    const diffY = this.touchStartY - touchEndY;
    
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        this.nextSpread();
      } else {
        this.previousSpread();
      }
    }
    
    this.touchStartX = 0;
    this.touchStartY = 0;
  }

  handleMouseDown(e) {
    this.touchStartX = e.clientX;
    this.touchStartY = e.clientY;
  }

  handleMouseUp(e) {
    if (!this.touchStartX) return;
    
    const diffX = this.touchStartX - e.clientX;
    const diffY = this.touchStartY - e.clientY;
    
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        this.nextSpread();
      } else {
        this.previousSpread();
      }
    }
    
    this.touchStartX = 0;
    this.touchStartY = 0;
  }

  start() {
    const saved = this.getSavedPage();
    this.currentSpreadIndex = saved !== null ? saved : 0;
    this.renderCurrentSpread();
  }

  getSavedPage() {
    const saved = localStorage.getItem(`glitzer-portal-${this.book.id}-page`);
    return saved !== null ? parseInt(saved, 10) : null;
  }

  savePage() {
    localStorage.setItem(`glitzer-portal-${this.book.id}-page`, this.currentSpreadIndex);
  }

  nextSpread() {
    if (this.currentSpreadIndex < Math.ceil(this.book.pages.length / 2) - 1) {
      this.currentSpreadIndex++;
      this.renderCurrentSpread();
      this.savePage();
    }
  }

  previousSpread() {
    if (this.currentSpreadIndex > 0) {
      this.currentSpreadIndex--;
      this.renderCurrentSpread();
      this.savePage();
    }
  }

  renderCurrentSpread() {
    const leftPageIndex = this.currentSpreadIndex * 2;
    const rightPageIndex = leftPageIndex + 1;
    
    const leftPage = this.book.pages[leftPageIndex];
    const rightPage = rightPageIndex < this.book.pages.length ? this.book.pages[rightPageIndex] : null;
    
    this.leftPageEl.innerHTML = '';
    this.rightPageEl.innerHTML = '';
    
    if (leftPage) {
      renderPage(leftPage, this.leftPageEl, this.book, 'left');
    }
    
    if (rightPage) {
      renderPage(rightPage, this.rightPageEl, this.book, 'right');
    } else {
      this.rightPageEl.style.opacity = '0';
    }
    
    this.updateButtons();
  }

  updateButtons() {
    this.prevButton.disabled = this.currentSpreadIndex === 0;
    this.nextButton.disabled = this.currentSpreadIndex >= Math.ceil(this.book.pages.length / 2) - 1;
  }

  cleanup() {
    // Clean up any running puzzles or timers
  }
}
