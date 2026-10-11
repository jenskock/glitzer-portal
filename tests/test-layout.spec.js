import { test } from '@playwright/test';

test('check layout at story spread 5', async ({ page }) => {
  await page.setViewportSize({ width: 1180, height: 820 });
  await page.goto('http://localhost:8000/');
  
  await page.waitForSelector('.book-cover', { timeout: 10000 });
  await page.click('.book-cover');
  
  await page.waitForSelector('.book-spread', { timeout: 5000 });
  
  // Navigate to story spread 5 (page 9: cover=0, s1=1, p1=2, s2=3, p2=4, s3=5, p3=6, s4=7, p4=8, s5=9)
  for (let i = 0; i < 9; i++) {
    await page.click('.next-button');
    await page.waitForTimeout(300);
  }
  
  await page.screenshot({ path: 'test-story-5.png', fullPage: false });
  
  // Navigate to labyrinth puzzle (next page after s5)
  await page.click('.next-button');
  await page.waitForTimeout(300);
  
  await page.screenshot({ path: 'test-labyrinth.png', fullPage: false });
});
