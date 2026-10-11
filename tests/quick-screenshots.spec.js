import { test } from '@playwright/test';

test('capture screenshots', async ({ page }) => {
  test.setTimeout(120000);
  
  await page.goto('http://localhost:8080/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  
  await page.screenshot({ path: 'artifacts/screenshots/01-bookshelf.png' });
  console.log('✓ Bookshelf');
  
  // Click the book cover properly
  await page.locator('.book-cover').first().click();
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'artifacts/screenshots/02-cover.png' });
  console.log('✓ Cover');
  
  // Navigate through all pages
  for (let i = 1; i <= 20; i++) {
    await page.locator('.next-button').click();
    await page.waitForTimeout(1500);
    const filename = `artifacts/screenshots/${String(i + 2).padStart(2, '0')}-page-${i}.png`;
    await page.screenshot({ path: filename });
    console.log(`✓ Page ${i}`);
  }
  
  console.log('All screenshots captured!');
});
