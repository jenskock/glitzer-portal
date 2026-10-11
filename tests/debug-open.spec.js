import { test } from '@playwright/test';

test('debug book opening', async ({ page }) => {
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
      errors.push(msg.text());
    }
  });
  
  page.on('pageerror', error => {
    console.log('PAGE ERROR:', error.message);
    errors.push(error.message);
  });
  
  await page.goto('http://localhost:8000/');
  await page.waitForTimeout(1000);
  
  console.log('Checking for bookshelf...');
  const bookshelfView = await page.locator('#bookshelf-view').isVisible();
  console.log('Bookshelf visible:', bookshelfView);
  
  const bookCover = await page.locator('.book-cover').count();
  console.log('Book covers found:', bookCover);
  
  if (bookCover > 0) {
    console.log('Clicking book cover...');
    await page.locator('.book-cover').first().click();
    await page.waitForTimeout(1000);
    
    const bookView = await page.locator('#book-view').isVisible();
    const hasActiveClass = await page.locator('#book-view.active').count();
    console.log('Book view visible:', bookView);
    console.log('Book view has active class:', hasActiveClass);
    
    const coverVisible = await page.locator('.cover-title').isVisible().catch(() => false);
    console.log('Cover title visible:', coverVisible);
  }
  
  if (errors.length > 0) {
    console.log('\n=== ERRORS FOUND ===');
    errors.forEach(err => console.log(err));
    throw new Error('JavaScript errors detected');
  }
});
