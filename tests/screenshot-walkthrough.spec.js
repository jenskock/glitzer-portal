import { test } from '@playwright/test';

test('capture walkthrough screenshots', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(1000);
  
  // 1. Bookshelf
  await page.screenshot({ path: 'artifacts/screenshots/walkthrough-01-bookshelf.png', fullPage: true });
  
  // 2. Open book - cover
  await page.locator('.book-spine').first().click();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'artifacts/screenshots/walkthrough-02-cover.png', fullPage: true });
  
  // 3. First story spread
  await page.locator('#next-page').click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'artifacts/screenshots/walkthrough-03-story-1.png', fullPage: true });
  
  // 4. First puzzle (Suchbild)
  await page.locator('#next-page').click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'artifacts/screenshots/walkthrough-04-puzzle-suchbild.png', fullPage: true });
  
  // 5. Story spread 2
  await page.locator('#next-page').click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'artifacts/screenshots/walkthrough-05-story-2.png', fullPage: true });
  
  // 6. Fehlerbild puzzle
  await page.locator('#next-page').click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'artifacts/screenshots/walkthrough-06-puzzle-fehlerbild.png', fullPage: true });
  
  // Navigate to memory puzzle
  for (let i = 0; i < 8; i++) {
    await page.locator('#next-page').click();
    await page.waitForTimeout(300);
  }
  await page.screenshot({ path: 'artifacts/screenshots/walkthrough-07-puzzle-memory.png', fullPage: true });
});
