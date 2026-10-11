import { test } from '@playwright/test';

async function click(page, selector) {
  await page.evaluate((sel) => {
    document.querySelector(sel).click();
  }, selector);
  await page.waitForTimeout(500);
}

test('capture all 22 screenshots for verification', async ({ page }) => {
  await page.setViewportSize({ width: 1180, height: 820 });
  await page.goto('http://localhost:8000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  
  // 1. Bookshelf
  await page.screenshot({ path: 'artifacts/screenshots/01-bookshelf.png' });
  console.log('✓ 01-bookshelf');
  
  // Open book
  await click(page, '.book-cover');
  await page.waitForTimeout(1500);
  
  // 2. Cover
  await page.screenshot({ path: 'artifacts/screenshots/02-cover.png' });
  console.log('✓ 02-cover');
  
  const pages = [
    '03-story-spread-1',
    '04-puzzle-1-suchbild',
    '05-story-spread-2',
    '06-puzzle-2-fehlerbild',
    '07-story-spread-3',
    '08-puzzle-3-anlaut',
    '09-story-spread-4',
    '10-puzzle-4-steckbrief-capybara',
    '11-story-spread-5',
    '12-puzzle-5-labyrinth',
    '13-story-spread-6',
    '14-puzzle-6-quiz',
    '15-story-spread-7',
    '16-puzzle-7-memory',
    '17-story-spread-8',
    '18-puzzle-8-ausmalbild',
    '19-story-spread-9',
    '20-puzzle-9-wort-zu-bild',
    '21-story-spread-10',
    '22-puzzle-10-steckbrief-axolotl'
  ];
  
  for (const pageName of pages) {
    await click(page, '#next-page');
    await page.waitForTimeout(800);
    
    await page.screenshot({ path: `artifacts/screenshots/${pageName}.png` });
    console.log(`✓ ${pageName}`);
  }
  
  console.log('\n✅ All 22 screenshots captured!');
});
