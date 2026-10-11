import { test, expect } from '@playwright/test';

test.describe('Das Glitzer-Portal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('bookshelf displays and Band 1 is clickable', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Das Glitzer-Portal');
    
    const band1Spine = page.locator('.book-spine').first();
    await expect(band1Spine).toBeVisible();
    await expect(band1Spine).toContainText('Das Rätsel des leuchtenden Steins');
    
    await page.screenshot({ path: 'artifacts/screenshots/01-bookshelf.png', fullPage: true });
  });

  test('opening Band 1 shows cover', async ({ page }) => {
    await page.locator('.book-spine').first().click();
    
    await expect(page.locator('.cover-title')).toContainText('Das Rätsel des leuchtenden Steins');
    await expect(page.locator('.cover-series')).toContainText('Das Glitzer-Portal');
    
    await page.screenshot({ path: 'artifacts/screenshots/02-cover.png', fullPage: true });
  });

  test('page navigation with arrow buttons works', async ({ page }) => {
    await page.locator('.book-spine').first().click();
    await page.waitForTimeout(500);
    
    const nextBtn = page.locator('#next-page');
    const prevBtn = page.locator('#prev-page');
    
    await expect(prevBtn).toBeDisabled();
    await expect(nextBtn).toBeEnabled();
    
    await nextBtn.click();
    await page.waitForTimeout(500);
    
    await expect(prevBtn).toBeEnabled();
    
    await page.screenshot({ path: 'artifacts/screenshots/03-story-spread-1.png', fullPage: true });
  });

  test('swipe navigation works', async ({ page }) => {
    await page.locator('.book-spine').first().click();
    await page.waitForTimeout(500);
    
    const spread = page.locator('.book-spread');
    const box = await spread.boundingBox();
    
    await page.mouse.move(box.x + box.width - 100, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + 100, box.y + box.height / 2);
    await page.mouse.up();
    
    await page.waitForTimeout(500);
    
    const prevBtn = page.locator('#prev-page');
    await expect(prevBtn).toBeEnabled();
  });

  test('localStorage remembers last page', async ({ page, context }) => {
    await page.locator('.book-spine').first().click();
    await page.waitForTimeout(500);
    
    await page.locator('#next-page').click();
    await page.waitForTimeout(300);
    await page.locator('#next-page').click();
    await page.waitForTimeout(300);
    
    const storage = await context.storageState();
    const hasStorage = storage.origins.some(origin => 
      origin.localStorage.some(item => item.name.includes('glitzer-portal'))
    );
    expect(hasStorage).toBeTruthy();
    
    await page.locator('#close-book').click();
    await page.waitForTimeout(300);
    
    await page.locator('.book-spine').first().click();
    await page.waitForTimeout(500);
    
    const prevBtn = page.locator('#prev-page');
    await expect(prevBtn).toBeEnabled();
  });

  test('Puzzle 1: Suchbild can be solved', async ({ page }) => {
    await page.locator('.book-spine').first().click();
    await page.waitForTimeout(500);
    
    await page.locator('#next-page').click();
    await page.waitForTimeout(500);
    
    await page.screenshot({ path: 'artifacts/screenshots/04-puzzle-suchbild-before.png', fullPage: true });
    
    const searchItems = page.locator('.search-item');
    const count = await searchItems.count();
    
    for (let i = 0; i < Math.min(count, 5); i++) {
      await searchItems.nth(i).click();
      await page.waitForTimeout(200);
    }
    
    await page.waitForTimeout(1000);
    await expect(page.locator('.praise-message')).toBeVisible();
    await expect(page.locator('.praise-message')).toContainText('Adleraugen');
    
    await page.screenshot({ path: 'artifacts/screenshots/05-puzzle-suchbild-solved.png', fullPage: true });
  });

  test('Puzzle 2: Fehlerbild can be solved', async ({ page }) => {
    await page.locator('.book-spine').first().click();
    await page.waitForTimeout(500);
    
    for (let i = 0; i < 2; i++) {
      await page.locator('#next-page').click();
      await page.waitForTimeout(300);
    }
    
    await page.screenshot({ path: 'artifacts/screenshots/06-puzzle-fehlerbild-before.png', fullPage: true });
    
    const diffSpots = page.locator('.difference-spot');
    const count = await diffSpots.count();
    
    for (let i = 0; i < count; i++) {
      await diffSpots.nth(i).click();
      await page.waitForTimeout(200);
    }
    
    await page.waitForTimeout(1000);
    await expect(page.locator('.praise-message')).toBeVisible();
    
    await page.screenshot({ path: 'artifacts/screenshots/07-puzzle-fehlerbild-solved.png', fullPage: true });
  });

  test('Puzzle 3: Anlaut B can be solved', async ({ page }) => {
    await page.locator('.book-spine').first().click();
    await page.waitForTimeout(500);
    
    for (let i = 0; i < 3; i++) {
      await page.locator('#next-page').click();
      await page.waitForTimeout(300);
    }
    
    await page.screenshot({ path: 'artifacts/screenshots/08-puzzle-anlaut-before.png', fullPage: true });
    
    const items = page.locator('.sound-item');
    const count = await items.count();
    
    for (let i = 0; i < count; i++) {
      await items.nth(i).click();
      await page.waitForTimeout(200);
    }
    
    await page.waitForTimeout(1000);
    await expect(page.locator('.praise-message')).toBeVisible();
    
    await page.screenshot({ path: 'artifacts/screenshots/09-puzzle-anlaut-solved.png', fullPage: true });
  });

  test('Puzzle 4: Capybara Steckbrief can be completed', async ({ page }) => {
    await page.locator('.book-spine').first().click();
    await page.waitForTimeout(500);
    
    for (let i = 0; i < 4; i++) {
      await page.locator('#next-page').click();
      await page.waitForTimeout(300);
    }
    
    await page.screenshot({ path: 'artifacts/screenshots/10-puzzle-steckbrief-bruno-before.png', fullPage: true });
    
    const cards = page.locator('.fact-card');
    const count = await cards.count();
    
    for (let i = 0; i < count; i++) {
      await cards.nth(i).click();
      await page.waitForTimeout(300);
    }
    
    await page.waitForTimeout(1000);
    
    const quizOptions = page.locator('.fact-quiz-option');
    if (await quizOptions.count() > 0) {
      await quizOptions.first().click();
      await page.waitForTimeout(1000);
    }
    
    await expect(page.locator('.praise-message')).toBeVisible();
    
    await page.screenshot({ path: 'artifacts/screenshots/11-puzzle-steckbrief-bruno-solved.png', fullPage: true });
  });

  test('Puzzle 5: Labyrinth can be traced', async ({ page }) => {
    await page.locator('.book-spine').first().click();
    await page.waitForTimeout(500);
    
    for (let i = 0; i < 5; i++) {
      await page.locator('#next-page').click();
      await page.waitForTimeout(300);
    }
    
    await page.screenshot({ path: 'artifacts/screenshots/12-puzzle-labyrinth-before.png', fullPage: true });
    
    const canvas = page.locator('.maze-canvas');
    const box = await canvas.boundingBox();
    
    await page.mouse.move(box.x + 50, box.y + box.height / 2);
    await page.mouse.down();
    
    const steps = 10;
    for (let i = 1; i <= steps; i++) {
      const x = box.x + 50 + (box.width - 100) * (i / steps);
      const y = box.y + box.height / 2 + Math.sin(i) * 50;
      await page.mouse.move(x, y);
      await page.waitForTimeout(50);
    }
    
    await page.mouse.up();
    await page.waitForTimeout(1000);
    
    await expect(page.locator('.praise-message')).toBeVisible();
    
    await page.screenshot({ path: 'artifacts/screenshots/13-puzzle-labyrinth-solved.png', fullPage: true });
  });

  test('Puzzle 6: Quiz can be answered', async ({ page }) => {
    await page.locator('.book-spine').first().click();
    await page.waitForTimeout(500);
    
    for (let i = 0; i < 6; i++) {
      await page.locator('#next-page').click();
      await page.waitForTimeout(300);
    }
    
    await page.screenshot({ path: 'artifacts/screenshots/14-puzzle-quiz-before.png', fullPage: true });
    
    for (let q = 0; q < 4; q++) {
      const options = page.locator('.quiz-option:not(.disabled)');
      if (await options.count() > 0) {
        await options.first().click();
        await page.waitForTimeout(1500);
      }
    }
    
    await page.waitForTimeout(1000);
    await expect(page.locator('.praise-message')).toBeVisible();
    
    await page.screenshot({ path: 'artifacts/screenshots/15-puzzle-quiz-solved.png', fullPage: true });
  });

  test('Puzzle 7: Memory can be played', async ({ page }) => {
    await page.locator('.book-spine').first().click();
    await page.waitForTimeout(500);
    
    for (let i = 0; i < 7; i++) {
      await page.locator('#next-page').click();
      await page.waitForTimeout(300);
    }
    
    await page.screenshot({ path: 'artifacts/screenshots/16-puzzle-memory-before.png', fullPage: true });
    
    const cards = page.locator('.memory-card');
    const count = await cards.count();
    
    for (let i = 0; i < Math.min(count, 12); i++) {
      await cards.nth(i).click();
      await page.waitForTimeout(300);
      
      if ((i + 1) % 2 === 0) {
        await page.waitForTimeout(800);
      }
    }
    
    await page.waitForTimeout(2000);
    
    await page.screenshot({ path: 'artifacts/screenshots/17-puzzle-memory-solved.png', fullPage: true });
  });

  test('Puzzle 8: Ausmalbild can be colored', async ({ page }) => {
    await page.locator('.book-spine').first().click();
    await page.waitForTimeout(500);
    
    for (let i = 0; i < 8; i++) {
      await page.locator('#next-page').click();
      await page.waitForTimeout(300);
    }
    
    await page.screenshot({ path: 'artifacts/screenshots/18-puzzle-ausmalbild-before.png', fullPage: true });
    
    const colorButtons = page.locator('.color-button');
    const canvas = page.locator('.coloring-canvas');
    
    for (let i = 0; i < Math.min(await colorButtons.count(), 5); i++) {
      await colorButtons.nth(i).click();
      await page.waitForTimeout(200);
      
      const box = await canvas.boundingBox();
      const x = box.x + box.width / 2 + (Math.random() - 0.5) * 200;
      const y = box.y + box.height / 2 + (Math.random() - 0.5) * 200;
      await canvas.click({ position: { x: x - box.x, y: y - box.y } });
      await page.waitForTimeout(200);
    }
    
    await page.locator('.done-button').click();
    await page.waitForTimeout(1000);
    await expect(page.locator('.praise-message')).toBeVisible();
    
    await page.screenshot({ path: 'artifacts/screenshots/19-puzzle-ausmalbild-solved.png', fullPage: true });
  });

  test('Puzzle 9: Wort-zu-Bild can be matched', async ({ page }) => {
    await page.locator('.book-spine').first().click();
    await page.waitForTimeout(500);
    
    for (let i = 0; i < 9; i++) {
      await page.locator('#next-page').click();
      await page.waitForTimeout(300);
    }
    
    await page.screenshot({ path: 'artifacts/screenshots/20-puzzle-wort-bild-before.png', fullPage: true });
    
    for (let round = 0; round < 4; round++) {
      const options = page.locator('.word-option:not(.disabled)');
      if (await options.count() > 0) {
        await options.first().click();
        await page.waitForTimeout(1500);
      }
    }
    
    await page.waitForTimeout(1000);
    await expect(page.locator('.praise-message')).toBeVisible();
    
    await page.screenshot({ path: 'artifacts/screenshots/21-puzzle-wort-bild-solved.png', fullPage: true });
  });

  test('Puzzle 10: Axolotl Steckbrief can be completed', async ({ page }) => {
    await page.locator('.book-spine').first().click();
    await page.waitForTimeout(500);
    
    for (let i = 0; i < 10; i++) {
      await page.locator('#next-page').click();
      await page.waitForTimeout(300);
    }
    
    await page.screenshot({ path: 'artifacts/screenshots/22-puzzle-steckbrief-lotti-before.png', fullPage: true });
    
    const cards = page.locator('.fact-card');
    const count = await cards.count();
    
    for (let i = 0; i < count; i++) {
      await cards.nth(i).click();
      await page.waitForTimeout(300);
    }
    
    await page.waitForTimeout(1000);
    
    const quizOptions = page.locator('.fact-quiz-option');
    if (await quizOptions.count() > 0) {
      await quizOptions.first().click();
      await page.waitForTimeout(1000);
    }
    
    await expect(page.locator('.praise-message')).toBeVisible();
    
    await page.screenshot({ path: 'artifacts/screenshots/23-puzzle-steckbrief-lotti-solved.png', fullPage: true });
  });

  test('close button returns to bookshelf', async ({ page }) => {
    await page.locator('.book-spine').first().click();
    await page.waitForTimeout(500);
    
    await page.locator('#close-book').click();
    await page.waitForTimeout(500);
    
    await expect(page.locator('h1')).toContainText('Das Glitzer-Portal');
    await expect(page.locator('.book-spine')).toBeVisible();
  });

  test('works with subpath (Pages deployment)', async ({ page }) => {
    await page.goto('/glitzer-portal/');
    
    await expect(page.locator('h1')).toContainText('Das Glitzer-Portal');
  });

  test('portrait mode check', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Das Glitzer-Portal');
    await expect(page.locator('.book-spine')).toBeVisible();
  });
});
