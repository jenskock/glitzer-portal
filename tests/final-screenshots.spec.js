import { test } from '@playwright/test';

test.describe('Final Screenshots at 1180x820', () => {
  test('capture all required screenshots', async ({ page }) => {
    // Bookshelf
    await page.goto('/');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'artifacts/screenshots/01-bookshelf.png', fullPage: false });
    
    // Open book
    await page.locator('.book-cover').first().click();
    await page.waitForTimeout(1500);
    
    // Cover
    await page.screenshot({ path: 'artifacts/screenshots/02-cover.png', fullPage: false });
    
    // Navigate through all pages
    for (let i = 1; i <= 20; i++) {
      await page.locator('#next-page').click();
      await page.waitForTimeout(800);
      const pageNum = (i + 2).toString().padStart(2, '0');
      await page.screenshot({ path: `artifacts/screenshots/${pageNum}-page-${i}.png`, fullPage: false });
    }
  });
});
