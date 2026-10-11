import { test } from '@playwright/test';

test('quick visual check', async ({ page }) => {
  await page.setViewportSize({ width: 1180, height: 820 });
  await page.goto('http://localhost:8000/');
  await page.waitForTimeout(500);
  
  // Take bookshelf screenshot
  await page.screenshot({ path: 'quick-bookshelf.png' });
  
  // Click book
  await page.evaluate(() => {
    document.querySelector('.book-cover').click();
  });
  await page.waitForTimeout(1000);
  
  // Take book view screenshot
  await page.screenshot({ path: 'quick-book-view.png' });
  
  // Check if book view is visible
  const bookViewStyle = await page.evaluate(() => {
    const bookView = document.getElementById('book-view');
    const bookshelfView = document.getElementById('bookshelf-view');
    return {
      bookView: {
        classList: Array.from(bookView.classList),
        display: window.getComputedStyle(bookView).display,
        opacity: window.getComputedStyle(bookView).opacity
      },
      bookshelfView: {
        classList: Array.from(bookshelfView.classList),
        opacity: window.getComputedStyle(bookshelfView).opacity
      }
    };
  });
  
  console.log('View states:', JSON.stringify(bookViewStyle, null, 2));
});
