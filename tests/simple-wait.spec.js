import { test } from '@playwright/test';

test('simple wait test', async ({ page }) => {
  await page.setViewportSize({ width: 1180, height: 820 });
  
  console.log('Loading page...');
  await page.goto('http://localhost:8000/');
  await page.waitForTimeout(2000);
  
  console.log('Clicking book...');
  await page.click('.book-cover');
  
  console.log('Waiting 5 seconds for book to open...');
  await page.waitForTimeout(5000);
  
  const viewState = await page.evaluate(() => {
    return {
      bookViewActive: document.getElementById('book-view').classList.contains('active'),
      hasPages: document.querySelector('.page') !== null
    };
  });
  
  console.log('View state:', viewState);
  await page.screenshot({ path: 'simple-wait-result.png' });
});
