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
    if (this.currentSpreadIndex < this.book.pages.length - 1) {
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
    const currentPage = this.book.pages[this.currentSpreadIndex];
    
    this.leftPageEl.innerHTML = '';
    this.rightPageEl.innerHTML = '';
    this.rightPageEl.style.opacity = '1';
    
    if (!currentPage) return;
    
    if (currentPage.type === 'cover') {
      // Cover spans both pages
      renderPage(currentPage, this.leftPageEl, this.book, 'left');
      this.rightPageEl.style.opacity = '0';
    } else if (currentPage.type === 'story') {
      // Story spreads show left half on left page, right half on right page
      renderPage(currentPage, this.leftPageEl, this.book, 'left');
      renderPage(currentPage, this.rightPageEl, this.book, 'right');
    } else if (currentPage.type === 'puzzle') {
      // Puzzle spreads use both pages
      renderPage(currentPage, this.leftPageEl, this.book, 'left', this.rightPageEl);
      this.rightPageEl.style.opacity = '1';
    }
    
    this.updateButtons();
  }

  updateButtons() {
    this.prevButton.disabled = this.currentSpreadIndex === 0;
    this.nextButton.disabled = this.currentSpreadIndex >= this.book.pages.length - 1;
  }

  cleanup() {
    // Clean up any running puzzles or timers
  }
}
