import { test } from '@playwright/test';

test('force click test', async ({ page }) => {
  await page.goto('http://localhost:8080/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000);
  
  await page.screenshot({ path: 'artifacts/screenshots/before-click.png' });
  
  // Try multiple click strategies
  console.log('Trying click...');
  const cover = await page.locator('.book-cover').first();
  
  // Check if visible
  const isVisible = await cover.isVisible();
  console.log('Cover visible:', isVisible);
  
  // Get bounding box
  const box = await cover.boundingBox();
  console.log('Cover bounding box:', box);
  
  // Click with force
  await cover.click({ force: true });
  console.log('Clicked!');
  
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'artifacts/screenshots/after-click.png' });
  
  // Check if book view is active
  const bookView = await page.locator('#book-view').first();
  const hasActive = await bookView.evaluate(el => el.classList.contains('active'));
  console.log('Book view active:', hasActive);
});
