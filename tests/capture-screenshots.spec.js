import { test } from '@playwright/test';

test.describe('Capture Screenshots at 1180x820', () => {
  test('capture required screenshots', async ({ page }) => {
    test.setTimeout(300000); // 5 minutes
    
    await page.goto('/');
    await page.waitForTimeout(2000);
    
    // 1. Bookshelf
    await page.screenshot({ path: 'artifacts/screenshots/01-bookshelf.png' });
    
    // Open book
    await page.locator('.book-cover').first().click();
    await page.waitForTimeout(1500);
    
    // 2. Cover
    await page.screenshot({ path: 'artifacts/screenshots/02-cover.png' });
    
    // 3. Story spread 1
    await page.locator('#next-page').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'artifacts/screenshots/03-story-spread-1.png' });
    
    // 4. Puzzle 1 - Suchbild
    await page.locator('#next-page').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'artifacts/screenshots/04-puzzle-1-suchbild.png' });
    
    // Navigate to spread 5 (click 6 more times: spread 2, puzzle 2, spread 3, puzzle 3, spread 4, puzzle 4, then we're at spread 5)
    for (let i = 0; i < 6; i++) {
      await page.locator('#next-page').click();
      await page.waitForTimeout(500);
    }
    
    // 5. Story spread 5
    await page.screenshot({ path: 'artifacts/screenshots/05-story-spread-5.png' });
    
    // 6. Puzzle 5 - Labyrinth
    await page.locator('#next-page').click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'artifacts/screenshots/06-puzzle-5-labyrinth.png' });
    
    // Navigate to spread 10 (click 8 more times: spread 6, puzzle 6, spread 7, puzzle 7, spread 8, puzzle 8, spread 9, puzzle 9, then spread 10)
    for (let i = 0; i < 8; i++) {
      await page.locator('#next-page').click();
      await page.waitForTimeout(500);
    }
    
    // 7. Story spread 10
    await page.screenshot({ path: 'artifacts/screenshots/07-story-spread-10.png' });
    
    // Go back to get all puzzle spreads from the beginning
    await page.locator('#close-book').click();
    await page.waitForTimeout(500);
    await page.locator('.book-cover').first().click();
    await page.waitForTimeout(1000);
    
    // Capture all puzzle spreads
    const puzzles = [
      { clicks: 2, name: '08-puzzle-1-suchbild' },
      { clicks: 2, name: '09-puzzle-2-fehlerbild' },
      { clicks: 2, name: '10-puzzle-3-anlaut' },
      { clicks: 2, name: '11-puzzle-4-steckbrief-capybara' },
      { clicks: 2, name: '12-puzzle-5-labyrinth' },
      { clicks: 2, name: '13-puzzle-6-quiz' },
      { clicks: 2, name: '14-puzzle-7-memory' },
      { clicks: 2, name: '15-puzzle-8-ausmalbild' },
      { clicks: 2, name: '16-puzzle-9-wort-bild' },
      { clicks: 2, name: '17-puzzle-10-steckbrief-axolotl' }
    ];
    
    for (const puzzle of puzzles) {
      for (let i = 0; i < puzzle.clicks; i++) {
        await page.locator('#next-page').click();
        await page.waitForTimeout(500);
      }
      await page.screenshot({ path: `artifacts/screenshots/${puzzle.name}.png` });
    }
  });
});
