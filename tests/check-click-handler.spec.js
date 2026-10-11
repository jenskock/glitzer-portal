import { test } from '@playwright/test';

test('check click handler', async ({ page }) => {
  page.on('console', msg => console.log('BROWSER:', msg.text()));
  
  await page.goto('http://localhost:8080/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  
  // Add debugging to the click handler
  await page.evaluate(() => {
    console.log('App object:', typeof window.app);
    const cover = document.querySelector('.book-cover');
    console.log('Cover element:', !!cover);
    if (cover) {
      const listeners = getEventListeners(cover);
      console.log('Event listeners:', Object.keys(listeners || {}));
    }
  });
  
  // Try clicking
  await page.locator('.book-cover').first().click({ force: true });
  await page.waitForTimeout(2000);
  
  const bookViewActive = await page.evaluate(() => {
    return document.getElementById('book-view').classList.contains('active');
  });
  console.log('Book view active:', bookViewActive);
});
