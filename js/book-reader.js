import { renderPage } from './page-renderer.js';
import { loadReadingProgress, markPageRead, saveReadingProgress } from './reading-progress.js';

export class BookReader {
  constructor(book) {
    this.book = book;
    this.progress = loadReadingProgress(book.id, book.pages.length);
    this.currentSpreadIndex = this.progress.page;
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.suppressPageSwipe = false;
    
    this.leftPageEl = document.getElementById('left-page');
    this.rightPageEl = document.getElementById('right-page');
    this.prevButton = document.getElementById('prev-page');
    this.nextButton = document.getElementById('next-page');
    this.bookSpread = document.querySelector('.book-spread');
    
    this.setupEventListeners();
  }

  setupEventListeners() {
    this.onPrevClick = () => this.previousSpread();
    this.onNextClick = () => this.nextSpread();
    this.onTouchStart = (e) => this.handleTouchStart(e);
    this.onTouchEnd = (e) => this.handleTouchEnd(e);
    this.onMouseDown = (e) => this.handleMouseDown(e);
    this.onMouseUp = (e) => this.handleMouseUp(e);

    this.prevButton.addEventListener('click', this.onPrevClick);
    this.nextButton.addEventListener('click', this.onNextClick);
    
    this.bookSpread.addEventListener('touchstart', this.onTouchStart, { passive: true });
    this.bookSpread.addEventListener('touchend', this.onTouchEnd, { passive: true });
    
    this.bookSpread.addEventListener('mousedown', this.onMouseDown);
    this.bookSpread.addEventListener('mouseup', this.onMouseUp);
  }

  handleTouchStart(e) {
    this.suppressPageSwipe = isDrawingSurface(e.target);
    this.touchStartX = e.touches[0].clientX;
    this.touchStartY = e.touches[0].clientY;
  }

  handleTouchEnd(e) {
    if (this.consumeDrawingGesture()) return;
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
    this.suppressPageSwipe = isDrawingSurface(e.target);
    this.touchStartX = e.clientX;
    this.touchStartY = e.clientY;
  }

  handleMouseUp(e) {
    if (this.consumeDrawingGesture()) return;
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
    this.currentSpreadIndex = this.progress.page;
    this.renderCurrentSpread();
  }

  rememberPage() {
    this.progress = markPageRead(this.progress, this.currentSpreadIndex, this.book.pages.length);
    saveReadingProgress(this.book.id, this.progress);
  }

  nextSpread() {
    if (this.currentSpreadIndex < this.book.pages.length - 1) {
      this.currentSpreadIndex++;
      this.renderCurrentSpread();
    }
  }

  previousSpread() {
    if (this.currentSpreadIndex > 0) {
      this.currentSpreadIndex--;
      this.renderCurrentSpread();
    }
  }

  renderCurrentSpread() {
    const currentPage = this.book.pages[this.currentSpreadIndex];
    this.rememberPage();
    
    this.bookSpread.classList.remove('book-spread--puzzle');
    this.bookSpread.querySelector('.puzzle-spread-wrapper')?.remove();

    this.leftPageEl.innerHTML = '';
    this.rightPageEl.innerHTML = '';
    this.rightPageEl.style.opacity = '1';
    
    this.bookSpread.classList.toggle('is-cover', currentPage?.type === 'cover');

    if (!currentPage) return;
    
    if (currentPage.type === 'cover') {
      renderPage(currentPage, this.leftPageEl, this.book, 'left');
      this.rightPageEl.style.opacity = '0';
    } else if (currentPage.type === 'story') {
      // Story spreads show left half on left page, right half on right page
      renderPage(currentPage, this.leftPageEl, this.book, 'left');
      renderPage(currentPage, this.rightPageEl, this.book, 'right');
    } else if (currentPage.type === 'puzzle') {
      // Puzzle spreads use both pages as one playfield
      this.bookSpread.classList.add('book-spread--puzzle');
      renderPage(currentPage, this.leftPageEl, this.book, 'left', this.rightPageEl);
      this.rightPageEl.style.opacity = '1';
    }
    
    this.updateButtons();
  }

  updateButtons() {
    this.prevButton.disabled = this.currentSpreadIndex === 0;
    this.nextButton.disabled = this.currentSpreadIndex >= this.book.pages.length - 1;
  }

  consumeDrawingGesture() {
    if (!this.suppressPageSwipe) return false;
    this.suppressPageSwipe = false;
    this.touchStartX = 0;
    this.touchStartY = 0;
    return true;
  }

  cleanup() {
    this.prevButton.removeEventListener('click', this.onPrevClick);
    this.nextButton.removeEventListener('click', this.onNextClick);
    this.bookSpread.removeEventListener('touchstart', this.onTouchStart);
    this.bookSpread.removeEventListener('touchend', this.onTouchEnd);
    this.bookSpread.removeEventListener('mousedown', this.onMouseDown);
    this.bookSpread.removeEventListener('mouseup', this.onMouseUp);
  }
}

function isDrawingSurface(target) {
  return target instanceof Element && target.closest('.maze-canvas') !== null;
}
