import { band1 } from '../books/band1.js';
import { renderBookshelf } from './bookshelf.js';
import { BookReader } from './book-reader.js';

const books = [band1];

class App {
  constructor() {
    this.currentBook = null;
    this.bookReader = null;
    
    this.init();
  }

  init() {
    renderBookshelf(books, (book) => this.openBook(book));
    
    document.getElementById('close-book').addEventListener('click', () => {
      this.closeBook();
    });
  }

  openBook(book) {
    this.currentBook = book;
    this.bookReader = new BookReader(book);
    
    document.getElementById('bookshelf-view').classList.remove('active');
    document.getElementById('book-view').classList.add('active');
    
    this.bookReader.start();
  }

  closeBook() {
    if (this.bookReader) {
      this.bookReader.cleanup();
    }
    
    document.getElementById('book-view').classList.remove('active');
    document.getElementById('bookshelf-view').classList.add('active');
    
    this.currentBook = null;
    this.bookReader = null;
  }
}

new App();
