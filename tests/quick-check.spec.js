import { test } from '@playwright/test';

test('quick check', async ({ page }) => {
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
      console.log('ERROR:', msg.text());
    }
  });
  
  page.on('pageerror', err => {
    errors.push(err.message);
    console.log('PAGE ERROR:', err.message);
  });
  
  await page.goto('/');
  await page.waitForTimeout(3000);
  
  console.log('Total errors:', errors.length);
  errors.forEach(e => console.log('  -', e));
  
  await page.screenshot({ path: '/tmp/quick-check.png' });
});
