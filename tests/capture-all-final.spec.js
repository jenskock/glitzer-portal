import { test } from '@playwright/test';

test('capture all pages', async ({ page }) => {
  test.setTimeout(180000);
  
  await page.goto('http://localhost:8080/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);
  
  // Bookshelf
  await page.screenshot({ path: 'artifacts/screenshots/01-bookshelf.png' });
  console.log('✓ 01-bookshelf');
  
  // Open book
  await page.evaluate(() => document.querySelector('.book-cover').click());
  await page.waitForTimeout(1500);
  
  // Cover
  await page.screenshot({ path: 'artifacts/screenshots/02-cover.png' });
  console.log('✓ 02-cover');
  
  // Navigate and capture all pages
  const pages = [
    '03-story-01', '04-puzzle-01-suchbild',
    '05-story-02', '06-puzzle-02-fehlerbild',
    '07-story-03', '08-puzzle-03-anlaut',
    '09-story-04', '10-puzzle-04-steckbrief',
    '11-story-05', '12-puzzle-05-labyrinth',
    '13-story-06', '14-puzzle-06-quiz',
    '15-story-07', '16-puzzle-07-memory',
    '17-story-08', '18-puzzle-08-ausmalbild',
    '19-story-09', '20-puzzle-09-wort',
    '21-story-10', '22-puzzle-10-steckbrief'
  ];
  
  for (const name of pages) {
    await page.evaluate(() => document.querySelector('.next-button').click());
    await page.waitForTimeout(1200);
    await page.screenshot({ path: `artifacts/screenshots/${name}.png` });
    console.log(`✓ ${name}`);
  }
  
  console.log('All 22 screenshots captured!');
});
