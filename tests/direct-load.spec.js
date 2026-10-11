import { test } from '@playwright/test';

test('direct load', async ({ page }) => {
  page.on('console', msg => console.log('BROWSER:', msg.text()));
  
  await page.goto('http://localhost:8000/test-direct-load.html');
  await page.waitForTimeout(3000);
  
  const text = await page.locator('#output').textContent();
  console.log('\n=== OUTPUT ===\n', text);
});
