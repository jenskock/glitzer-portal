import { test } from '@playwright/test';

test('capture key screenshots', async ({ page }) => {
  console.log('Loading page...');
  await page.goto('http://localhost:8080/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  
  console.log('Capturing bookshelf...');
  await page.screenshot({ path: 'artifacts/screenshots/01-bookshelf.png' });
  
  console.log('Opening book...');
  await page.click('.book-cover');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/02-cover.png' });
  
  console.log('Story 1...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/03-story-01.png' });
  
  console.log('Puzzle 1 - Suchbild...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/04-puzzle-01-suchbild.png' });
  
  console.log('Story 2...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/05-story-02.png' });
  
  console.log('Puzzle 2 - Fehlerbild...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/06-puzzle-02-fehlerbild.png' });
  
  console.log('Story 3...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/07-story-03.png' });
  
  console.log('Puzzle 3 - Anlaut...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/08-puzzle-03-anlaut.png' });
  
  console.log('Story 4...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/09-story-04.png' });
  
  console.log('Puzzle 4 - Steckbrief Capybara...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/10-puzzle-04-steckbrief-capybara.png' });
  
  console.log('Story 5...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/11-story-05.png' });
  
  console.log('Puzzle 5 - Labyrinth...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/12-puzzle-05-labyrinth.png' });
  
  console.log('Story 6...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/13-story-06.png' });
  
  console.log('Puzzle 6 - Quiz...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/14-puzzle-06-quiz.png' });
  
  console.log('Story 7...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/15-story-07.png' });
  
  console.log('Puzzle 7 - Memory...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/16-puzzle-07-memory.png' });
  
  console.log('Story 8...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/17-story-08.png' });
  
  console.log('Puzzle 8 - Ausmalbild...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/18-puzzle-08-ausmalbild.png' });
  
  console.log('Story 9...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/19-story-09.png' });
  
  console.log('Puzzle 9 - Wort zu Bild...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/20-puzzle-09-wort-zu-bild.png' });
  
  console.log('Story 10...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/21-story-10.png' });
  
  console.log('Puzzle 10 - Steckbrief Axolotl...');
  await page.click('.next-button');
  await page.waitForTimeout(1500);
  await page.screenshot({ path: 'artifacts/screenshots/22-puzzle-10-steckbrief-axolotl.png' });
  
  console.log('All screenshots captured!');
});
