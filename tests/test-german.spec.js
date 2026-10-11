import { test } from '@playwright/test';

test('test german', async ({ page }) => {
  await page.goto('http://localhost:8000/test-german.html');
  await page.waitForTimeout(2000);
  
  const text = await page.locator('#out').textContent();
  console.log('RESULT:', text);
});
