import { test } from '@playwright/test';

test('detailed debug', async ({ page }) => {
  const logs = [];
  
  page.on('console', msg => {
    const text = msg.text();
    logs.push(`[${msg.type()}] ${text}`);
    console.log(`[${msg.type()}] ${text}`);
  });
  
  page.on('pageerror', error => {
    logs.push(`[ERROR] ${error.message}\n${error.stack}`);
    console.log(`[ERROR] ${error.message}\n${error.stack}`);
  });
  
  await page.setViewportSize({ width: 1180, height: 820 });
  await page.goto('http://localhost:8000/');
  await page.waitForTimeout(1000);
  
  console.log('\n=== Step 1: Bookshelf loaded ===');
  await page.screenshot({ path: 'debug-1-bookshelf.png' });
  
  console.log('\n=== Step 2: Clicking book cover ===');
  await page.click('.book-cover');
  await page.waitForTimeout(2000);
  
  const state1 = await page.evaluate(() => ({
    bookshelfActive: document.getElementById('bookshelf-view').classList.contains('active'),
    bookViewActive: document.getElementById('book-view').classList.contains('active'),
    leftPageContent: document.getElementById('left-page').innerHTML.substring(0, 100),
    rightPageContent: document.getElementById('right-page').innerHTML.substring(0, 100)
  }));
  
  console.log('\n=== After clicking book ===');
  console.log(JSON.stringify(state1, null, 2));
  await page.screenshot({ path: 'debug-2-after-click.png' });
  
  console.log('\n=== Step 3: Clicking next button ===');
  const nextButton = await page.locator('#next-page');
  const isEnabled = await nextButton.isEnabled();
  console.log('Next button enabled:', isEnabled);
  
  if (isEnabled) {
    await nextButton.click();
    await page.waitForTimeout(2000);
    
    const state2 = await page.evaluate(() => ({
      leftPageContent: document.getElementById('left-page').innerHTML.substring(0, 100),
      rightPageContent: document.getElementById('right-page').innerHTML.substring(0, 100)
    }));
    
    console.log('\n=== After clicking next ===');
    console.log(JSON.stringify(state2, null, 2));
    await page.screenshot({ path: 'debug-3-after-next.png' });
  }
  
  console.log('\n=== All console logs ===');
  logs.forEach(log => console.log(log));
});
