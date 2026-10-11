import { test } from '@playwright/test';

test('check multiple spreads', async ({ page }) => {
  await page.setViewportSize({ width: 1180, height: 820 });
  await page.goto('http://localhost:8000/');
  await page.waitForTimeout(500);
  
  // Open book
  await page.click('.book-cover');
  await page.waitForTimeout(1000);
  
  // Cover page
  await page.screenshot({ path: 'spread-0-cover.png' });
  
  // Navigate through pages
  for (let i = 1; i <= 11; i++) {
    await page.click('.next-button');
    await page.waitForTimeout(500);
    await page.screenshot({ path: `spread-${i}.png` });
  }
});
