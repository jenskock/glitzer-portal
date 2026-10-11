import { test } from '@playwright/test';

test.describe('Final Screenshots at 1180x820', () => {
  test('capture all required screenshots', async ({ page }) => {
    test.setTimeout(180000); // 3 minutes for all screenshots
    
    // Bookshelf
    await page.goto('/');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'artifacts/screenshots/01-bookshelf.png', fullPage: false });
    
    // Open book
    await page.locator('.book-cover').first().click();
    await page.waitForTimeout(1500);
    
    // Cover
    await page.screenshot({ path: 'artifacts/screenshots/02-cover.png', fullPage: false });
    
    // Navigate through first 10 spreads (key representative samples)
    for (let i = 1; i <= 10; i++) {
      const nextBtn = page.locator('#next-page');
      if (await nextBtn.isEnabled()) {
        await nextBtn.click();
        await page.waitForTimeout(800);
        const pageNum = (i + 2).toString().padStart(2, '0');
        await page.screenshot({ path: `artifacts/screenshots/${pageNum}-spread-${i}.png`, fullPage: false });
      }
    }
  });
});
