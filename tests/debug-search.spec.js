import { test } from '@playwright/test';

test('debug search puzzle', async ({ page }) => {
  page.on('console', msg => console.log('BROWSER:', msg.text()));
  
  await page.goto('/');
  await page.locator('.book-cover').first().click();
  await page.waitForTimeout(500);
  await page.locator('#next-page').click();
  await page.waitForTimeout(1000);
  
  const searchItems = page.locator('.search-item');
  const count = await searchItems.count();
  console.log('Search items found:', count);
  
  for (let i = 0; i < count; i++) {
    console.log(`Clicking item ${i}`);
    const elem = searchItems.nth(i);
    const itemId = await elem.getAttribute('data-item-id');
    console.log(`  Item ID: ${itemId}`);
    
    // Try dispatching event manually
    await elem.evaluate(el => {
      console.log('Manually dispatching click on', el);
      el.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    
    await page.waitForTimeout(300);
    const hasFound = await elem.evaluate(el => el.classList.contains('found'));
    console.log(`  Has 'found' class: ${hasFound}`);
  }
  
  await page.waitForTimeout(2000);
  
  const praise = page.locator('.praise-message');
  const praiseCount = await praise.count();
  console.log('Praise elements:', praiseCount);
  
  await page.screenshot({ path: '/tmp/search-debug.png' });
});
