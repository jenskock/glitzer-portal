import { test, expect } from '@playwright/test';

test('debug bookshelf', async ({ page }) => {
  const errors = [];
  page.on('console', msg => console.log('CONSOLE:', msg.text()));
  page.on('pageerror', err => {
    console.log('PAGE ERROR:', err.message);
    errors.push(err.message);
  });
  
  await page.goto('http://localhost:8080/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  
  const html = await page.content();
  console.log('Page loaded, length:', html.length);
  
  // Check if books-container exists
  const container = await page.$('#books-container');
  console.log('Container exists:', !!container);
  
  // Check if book cover exists
  const covers = await page.$$('.book-cover');
  console.log('Number of book covers:', covers.length);
  
  if (covers.length > 0) {
    const html = await covers[0].innerHTML();
    console.log('First cover HTML:', html.substring(0, 200));
  }
  
  // Check for JavaScript errors
  console.log('JavaScript errors:', errors);
  
  await page.screenshot({ path: 'artifacts/screenshots/debug-bookshelf.png' });
  
  expect(errors.length).toBe(0);
});
