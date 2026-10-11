import { test } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

test('capture all spreads and puzzles', async ({ page }) => {
  await page.setViewportSize({ width: 1180, height: 820 });
  await page.goto('http://localhost:8000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  
  // Capture bookshelf
  await page.screenshot({ path: 'artifacts/screenshots/01-bookshelf.png' });
  console.log('✓ Captured bookshelf');
  
  // Open book via evaluate to avoid Playwright click blocking
  await page.evaluate(() => {
    document.querySelector('.book-cover').click();
  });
  await page.waitForTimeout(1500);
  
  // Capture cover + first story (spread 0)
  await page.screenshot({ path: 'artifacts/screenshots/02-cover-and-story-1.png' });
  console.log('✓ Captured cover + story 1');
  
  // Navigate through all pages
  const pages = [
    { name: '03-puzzle-1-suchbild', desc: 'Puzzle 1: Suchbild' },
    { name: '04-story-spread-2', desc: 'Story Spread 2' },
    { name: '05-puzzle-2-fehlerbild', desc: 'Puzzle 2: Fehlerbild' },
    { name: '06-story-spread-3', desc: 'Story Spread 3' },
    { name: '07-puzzle-3-anlaut', desc: 'Puzzle 3: Anlaut B' },
    { name: '08-story-spread-4', desc: 'Story Spread 4' },
    { name: '09-puzzle-4-steckbrief-capybara', desc: 'Puzzle 4: Capybara Steckbrief' },
    { name: '10-story-spread-5', desc: 'Story Spread 5' },
    { name: '11-puzzle-5-labyrinth', desc: 'Puzzle 5: Labyrinth' },
    { name: '12-story-spread-6', desc: 'Story Spread 6' },
    { name: '13-puzzle-6-quiz', desc: 'Puzzle 6: Quiz' },
    { name: '14-story-spread-7', desc: 'Story Spread 7' },
    { name: '15-puzzle-7-memory', desc: 'Puzzle 7: Memory' },
    { name: '16-story-spread-8', desc: 'Story Spread 8' },
    { name: '17-puzzle-8-ausmalbild', desc: 'Puzzle 8: Ausmalbild' },
    { name: '18-story-spread-9', desc: 'Story Spread 9' },
    { name: '19-puzzle-9-wort-zu-bild', desc: 'Puzzle 9: Wort zu Bild' },
    { name: '20-story-spread-10', desc: 'Story Spread 10' },
    { name: '21-puzzle-10-steckbrief-axolotl', desc: 'Puzzle 10: Axolotl Steckbrief' }
  ];
  
  for (const pageInfo of pages) {
    await page.evaluate(() => {
      document.querySelector('#next-page').click();
    });
    await page.waitForTimeout(800);
    
    await page.screenshot({ path: `artifacts/screenshots/${pageInfo.name}.png` });
    console.log(`✓ Captured ${pageInfo.desc}`);
  }
  
  console.log('\n✓ All screenshots captured!');
});
