const { test } = require('@playwright/test');

test('capture screenshots', async ({ page }) => {
  // Set viewport
  await page.setViewportSize({ width: 1180, height: 820 });
  
  // Go to page
  await page.goto('http://localhost:8080/');
  await page.waitForTimeout(2000);
  
  // Bookshelf
  await page.screenshot({ path: '/workspace/artifacts/screenshots/01-bookshelf.png' });
  console.log('✓ Bookshelf captured');
  
  // Click book
  await page.click('.book-cover');
  await page.waitForTimeout(1500);
  
  // Cover
  await page.screenshot({ path: '/workspace/artifacts/screenshots/02-cover.png' });
  console.log('✓ Cover captured');
  
  // Next button
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/workspace/artifacts/screenshots/03-story-01.png' });
  console.log('✓ Story 1 captured');
  
  // Puzzle 1
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/workspace/artifacts/screenshots/04-puzzle-01-suchbild.png' });
  console.log('✓ Puzzle 1 captured');
  
  // Story 2
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/workspace/artifacts/screenshots/05-story-02.png' });
  console.log('✓ Story 2 captured');
});
