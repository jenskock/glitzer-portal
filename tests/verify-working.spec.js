import { test, expect } from '@playwright/test';

test('verify app works', async ({ page }) => {
  test.setTimeout(60000);
  
  // Load page
  await page.goto('http://localhost:8080/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  
  // Check bookshelf
  const bookCover = await page.locator('.book-cover').first();
  await expect(bookCover).toBeVisible();
  console.log('✓ Bookshelf loads');
  
  // Open book
  await page.evaluate(() => document.querySelector('.book-cover').click());
  await page.waitForTimeout(1500);
  
  const bookView = await page.locator('#book-view');
  await expect(bookView).toHaveClass(/active/);
  console.log('✓ Book opens');
  
  // Check cover page
  const coverTitle = await page.locator('.cover-title');
  await expect(coverTitle).toContainText('leuchtenden Steins');
  console.log('✓ Cover displays');
  
  // Navigate to story 1
  await page.evaluate(() => document.querySelector('.next-button').click());
  await page.waitForTimeout(1500);
  
  const storyPage = await page.locator('.story-page');
  await expect(storyPage.first()).toBeVisible();
  console.log('✓ Story page displays');
  
  // Check image is split correctly
  const spreadImage = await page.locator('.spread-image').first();
  await expect(spreadImage).toBeVisible();
  const width = await spreadImage.evaluate(el => el.style.width);
  expect(width).toBe('200%');
  console.log('✓ Story image spans both pages');
  
  // Navigate to puzzle 1
  await page.evaluate(() => document.querySelector('.next-button').click());
  await page.waitForTimeout(1500);
  
  const puzzleTitle = await page.locator('.puzzle-title');
  await expect(puzzleTitle).toContainText('Suchbild');
  console.log('✓ Puzzle page displays');
  
  // Check German quotes render correctly
  await page.evaluate(() => document.querySelector('.next-button').click());
  await page.waitForTimeout(1500);
  
  const pageText = await page.locator('.page-text').first().textContent();
  const hasGermanQuotes = pageText.includes('„') && pageText.includes('"');
  expect(hasGermanQuotes).toBe(true);
  console.log('✓ German quotes render correctly');
  
  console.log('\nAll checks passed!');
});
