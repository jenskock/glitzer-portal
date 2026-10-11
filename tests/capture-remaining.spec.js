import { test } from '@playwright/test';

test('capture spread 10 and all puzzles', async ({ page }) => {
  test.setTimeout(180000);
  
  await page.goto('/');
  await page.waitForTimeout(1000);
  await page.locator('.book-cover').first().click();
  await page.waitForTimeout(1000);
  
  // Navigate to spread 10 (cover + 9 story spreads + 9 puzzles = 19 clicks from cover)
  for (let i = 0; i < 19; i++) {
    await page.locator('#next-page').click();
    await page.waitForTimeout(300);
  }
  
  await page.screenshot({ path: 'artifacts/screenshots/07-story-spread-10.png' });
  
  // Now capture all 10 puzzle spreads
  await page.locator('#close-book').click();
  await page.waitForTimeout(500);
  await page.locator('.book-cover').first().click();
  await page.waitForTimeout(1000);
  
  const puzzles = [
    { name: 'Suchbild', file: '08-puzzle-1-suchbild.png', pages: 2 },
    { name: 'Fehlerbild', file: '09-puzzle-2-fehlerbild.png', pages: 2 },
    { name: 'Anlaut', file: '10-puzzle-3-anlaut.png', pages: 2 },
    { name: 'Steckbrief Capybara', file: '11-puzzle-4-steckbrief-capybara.png', pages: 2 },
    { name: 'Labyrinth', file: '12-puzzle-5-labyrinth.png', pages: 2 },
    { name: 'Quiz', file: '13-puzzle-6-quiz.png', pages: 2 },
    { name: 'Memory', file: '14-puzzle-7-memory.png', pages: 2 },
    { name: 'Ausmalbild', file: '15-puzzle-8-ausmalbild.png', pages: 2 },
    { name: 'Wort zu Bild', file: '16-puzzle-9-wort-bild.png', pages: 2 },
    { name: 'Steckbrief Axolotl', file: '17-puzzle-10-steckbrief-axolotl.png', pages: 2 }
  ];
  
  for (const puzzle of puzzles) {
    for (let i = 0; i < puzzle.pages; i++) {
      await page.locator('#next-page').click();
      await page.waitForTimeout(400);
    }
    await page.screenshot({ path: `artifacts/screenshots/${puzzle.file}` });
  }
});
