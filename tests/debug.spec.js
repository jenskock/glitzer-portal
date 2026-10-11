import { test, expect } from '@playwright/test';

test('debug page load', async ({ page }) => {
  const errors = [];
  const logs = [];
  
  page.on('console', msg => {
    const text = msg.text();
    logs.push(`${msg.type()}: ${text}`);
    console.log(`CONSOLE ${msg.type()}: ${text}`);
  });
  
  page.on('pageerror', err => {
    errors.push({ message: err.message, stack: err.stack });
    console.log(`PAGE ERROR: ${err.message}`);
    console.log(`STACK: ${err.stack}`);
  });
  
  await page.goto('/');
  await page.waitForTimeout(3000);
  
  const html = await page.content();
  console.log('Books container HTML:', await page.locator('#books-container').innerHTML());
  
  console.log('\n=== All console logs ===');
  logs.forEach(l => console.log(l));
  
  console.log('\n=== All errors ===');
  errors.forEach(e => console.log(JSON.stringify(e, null, 2)));
  
  await page.screenshot({ path: 'debug-screenshot.png', fullPage: true });
});
