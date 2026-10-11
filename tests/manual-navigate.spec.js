import { test } from '@playwright/test';

test('manual navigation', async ({ page }) => {
  page.on('console', msg => console.log('>', msg.text()));
  
  await page.goto('http://localhost:8080/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  
  // Bookshelf
  await page.screenshot({ path: 'artifacts/screenshots/01-bookshelf.png' });
  console.log('✓ Bookshelf captured');
  
  // Trigger click via JavaScript
  await page.evaluate(() => {
    const cover = document.querySelector('.book-cover');
    cover.click();
  });
  await page.waitForTimeout(2000);
  
  // Check if book opened
  const bookActive = await page.evaluate(() => {
    return document.getElementById('book-view').classList.contains('active');
  });
  console.log('Book view active:', bookActive);
  
  if (bookActive) {
    await page.screenshot({ path: 'artifacts/screenshots/02-cover.png' });
    console.log('✓ Cover captured');
    
    // Navigate through pages
    for (let i = 1; i <= 20; i++) {
      await page.evaluate(() => {
        document.querySelector('.next-button').click();
      });
      await page.waitForTimeout(1500);
      
      const filename = `artifacts/screenshots/${String(i + 2).padStart(2, '0')}-page-${String(i).padStart(2, '0')}.png`;
      await page.screenshot({ path: filename });
      console.log(`✓ Page ${i} captured`);
    }
  }
});
