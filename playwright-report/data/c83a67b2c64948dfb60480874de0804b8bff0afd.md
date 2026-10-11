# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: glitzer-portal.spec.js >> Das Glitzer-Portal >> works with subpath (Pages deployment)
- Location: tests/glitzer-portal.spec.js:380:3

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('h1')
Expected substring: "Das Glitzer-Portal"
Received string:    "Error response"
Timeout: 5000ms

Call log:
  - Expect "toContainText" locator('h1') with timeout 5000ms
  - waiting for locator('h1')
    14 × locator resolved to <h1>Error response</h1>
       - unexpected value "Error response"

```

```yaml
- heading "Error response" [level=1]
```

# Test source

```ts
  283 |     
  284 |     for (let i = 0; i < 8; i++) {
  285 |       await page.locator('#next-page').click();
  286 |       await page.waitForTimeout(300);
  287 |     }
  288 |     
  289 |     await page.screenshot({ path: 'artifacts/screenshots/18-puzzle-ausmalbild-before.png', fullPage: true });
  290 |     
  291 |     const colorButtons = page.locator('.color-button');
  292 |     const canvas = page.locator('.coloring-canvas');
  293 |     
  294 |     for (let i = 0; i < Math.min(await colorButtons.count(), 5); i++) {
  295 |       await colorButtons.nth(i).click();
  296 |       await page.waitForTimeout(200);
  297 |       
  298 |       const box = await canvas.boundingBox();
  299 |       const x = box.x + box.width / 2 + (Math.random() - 0.5) * 200;
  300 |       const y = box.y + box.height / 2 + (Math.random() - 0.5) * 200;
  301 |       await canvas.click({ position: { x: x - box.x, y: y - box.y } });
  302 |       await page.waitForTimeout(200);
  303 |     }
  304 |     
  305 |     await page.locator('.done-button').click();
  306 |     await page.waitForTimeout(1000);
  307 |     await expect(page.locator('.praise-message')).toBeVisible();
  308 |     
  309 |     await page.screenshot({ path: 'artifacts/screenshots/19-puzzle-ausmalbild-solved.png', fullPage: true });
  310 |   });
  311 | 
  312 |   test('Puzzle 9: Wort-zu-Bild can be matched', async ({ page }) => {
  313 |     await page.locator('.book-spine').first().click();
  314 |     await page.waitForTimeout(500);
  315 |     
  316 |     for (let i = 0; i < 9; i++) {
  317 |       await page.locator('#next-page').click();
  318 |       await page.waitForTimeout(300);
  319 |     }
  320 |     
  321 |     await page.screenshot({ path: 'artifacts/screenshots/20-puzzle-wort-bild-before.png', fullPage: true });
  322 |     
  323 |     for (let round = 0; round < 4; round++) {
  324 |       const options = page.locator('.word-option:not(.disabled)');
  325 |       if (await options.count() > 0) {
  326 |         await options.first().click();
  327 |         await page.waitForTimeout(1500);
  328 |       }
  329 |     }
  330 |     
  331 |     await page.waitForTimeout(1000);
  332 |     await expect(page.locator('.praise-message')).toBeVisible();
  333 |     
  334 |     await page.screenshot({ path: 'artifacts/screenshots/21-puzzle-wort-bild-solved.png', fullPage: true });
  335 |   });
  336 | 
  337 |   test('Puzzle 10: Axolotl Steckbrief can be completed', async ({ page }) => {
  338 |     await page.locator('.book-spine').first().click();
  339 |     await page.waitForTimeout(500);
  340 |     
  341 |     for (let i = 0; i < 10; i++) {
  342 |       await page.locator('#next-page').click();
  343 |       await page.waitForTimeout(300);
  344 |     }
  345 |     
  346 |     await page.screenshot({ path: 'artifacts/screenshots/22-puzzle-steckbrief-lotti-before.png', fullPage: true });
  347 |     
  348 |     const cards = page.locator('.fact-card');
  349 |     const count = await cards.count();
  350 |     
  351 |     for (let i = 0; i < count; i++) {
  352 |       await cards.nth(i).click();
  353 |       await page.waitForTimeout(300);
  354 |     }
  355 |     
  356 |     await page.waitForTimeout(1000);
  357 |     
  358 |     const quizOptions = page.locator('.fact-quiz-option');
  359 |     if (await quizOptions.count() > 0) {
  360 |       await quizOptions.first().click();
  361 |       await page.waitForTimeout(1000);
  362 |     }
  363 |     
  364 |     await expect(page.locator('.praise-message')).toBeVisible();
  365 |     
  366 |     await page.screenshot({ path: 'artifacts/screenshots/23-puzzle-steckbrief-lotti-solved.png', fullPage: true });
  367 |   });
  368 | 
  369 |   test('close button returns to bookshelf', async ({ page }) => {
  370 |     await page.locator('.book-spine').first().click();
  371 |     await page.waitForTimeout(500);
  372 |     
  373 |     await page.locator('#close-book').click();
  374 |     await page.waitForTimeout(500);
  375 |     
  376 |     await expect(page.locator('h1')).toContainText('Das Glitzer-Portal');
  377 |     await expect(page.locator('.book-spine')).toBeVisible();
  378 |   });
  379 | 
  380 |   test('works with subpath (Pages deployment)', async ({ page }) => {
  381 |     await page.goto('/glitzer-portal/');
  382 |     
> 383 |     await expect(page.locator('h1')).toContainText('Das Glitzer-Portal');
      |                                      ^ Error: expect(locator).toContainText(expected) failed
  384 |   });
  385 | 
  386 |   test('portrait mode check', async ({ page }) => {
  387 |     await expect(page.locator('h1')).toContainText('Das Glitzer-Portal');
  388 |     await expect(page.locator('.book-spine')).toBeVisible();
  389 |   });
  390 | });
  391 | 
```