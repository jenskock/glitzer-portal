import { test } from '@playwright/test';

test('evaluate click', async ({ page }) => {
  await page.setViewportSize({ width: 1180, height: 820 });
  await page.goto('http://localhost:8000/', { waitUntil: 'networkidle' });
  
  console.log('Page loaded');
  await page.screenshot({ path: 'eval-1-loaded.png' });
  
  // Inject a debug wrapper
  await page.evaluate(() => {
    const originalOpenBook = window.app.openBook;
    window.app.openBook = function(book) {
      console.log('openBook called');
      try {
        originalOpenBook.call(this, book);
        console.log('openBook completed');
      } catch (e) {
        console.error('openBook error:', e);
      }
    };
  });
  
  console.log('Clicking via evaluate...');
  const result = await page.evaluate(() => {
    const cover = document.querySelector('.book-cover');
    if (!cover) return { error: 'No cover found' };
    cover.click();
    return { clicked: true };
  });
  
  console.log('Click result:', result);
  await page.waitForTimeout(2000);
  
  await page.screenshot({ path: 'eval-2-after-click.png' });
});
