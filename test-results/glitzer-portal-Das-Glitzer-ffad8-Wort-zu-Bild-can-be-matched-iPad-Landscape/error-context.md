# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: glitzer-portal.spec.js >> Das Glitzer-Portal >> Puzzle 9: Wort-zu-Bild can be matched
- Location: tests/glitzer-portal.spec.js:312:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.praise-message')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.praise-message') with timeout 5000ms
  - waiting for locator('.praise-message')

```

```yaml
- heading "Das Glitzer-Portal" [level=1]
- text: Das Glitzer-Portal
- img
- text: Das Rätsel des leuchtenden Steins Band 1
- button "Zurück zum Bücherregal": ×
- text: Wort zu Bild Lies das Wort. Tippe auf das passende Bild. SEIL
- img "Seil"
- img "Eis"
- img "Seife"
- button "Vorherige Seite":
  - img
- button "Nächste Seite":
  - img
```

# Test source

```ts
  232 |       await page.locator('#next-page').click();
  233 |       await page.waitForTimeout(300);
  234 |     }
  235 |     
  236 |     await page.screenshot({ path: 'artifacts/screenshots/14-puzzle-quiz-before.png', fullPage: true });
  237 |     
  238 |     for (let q = 0; q < 4; q++) {
  239 |       const options = page.locator('.quiz-option:not(.disabled)');
  240 |       if (await options.count() > 0) {
  241 |         await options.first().click();
  242 |         await page.waitForTimeout(1500);
  243 |       }
  244 |     }
  245 |     
  246 |     await page.waitForTimeout(1000);
  247 |     await expect(page.locator('.praise-message')).toBeVisible();
  248 |     
  249 |     await page.screenshot({ path: 'artifacts/screenshots/15-puzzle-quiz-solved.png', fullPage: true });
  250 |   });
  251 | 
  252 |   test('Puzzle 7: Memory can be played', async ({ page }) => {
  253 |     await page.locator('.book-cover').first().click();
  254 |     await page.waitForTimeout(500);
  255 |     
  256 |     for (let i = 0; i < 7; i++) {
  257 |       await page.locator('#next-page').click();
  258 |       await page.waitForTimeout(300);
  259 |     }
  260 |     
  261 |     await page.screenshot({ path: 'artifacts/screenshots/16-puzzle-memory-before.png', fullPage: true });
  262 |     
  263 |     const cards = page.locator('.memory-card');
  264 |     const count = await cards.count();
  265 |     
  266 |     for (let i = 0; i < Math.min(count, 12); i++) {
  267 |       await cards.nth(i).click();
  268 |       await page.waitForTimeout(300);
  269 |       
  270 |       if ((i + 1) % 2 === 0) {
  271 |         await page.waitForTimeout(800);
  272 |       }
  273 |     }
  274 |     
  275 |     await page.waitForTimeout(2000);
  276 |     
  277 |     await page.screenshot({ path: 'artifacts/screenshots/17-puzzle-memory-solved.png', fullPage: true });
  278 |   });
  279 | 
  280 |   test('Puzzle 8: Ausmalbild can be colored', async ({ page }) => {
  281 |     await page.locator('.book-cover').first().click();
  282 |     await page.waitForTimeout(500);
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
  313 |     await page.locator('.book-cover').first().click();
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
> 332 |     await expect(page.locator('.praise-message')).toBeVisible();
      |                                                   ^ Error: expect(locator).toBeVisible() failed
  333 |     
  334 |     await page.screenshot({ path: 'artifacts/screenshots/21-puzzle-wort-bild-solved.png', fullPage: true });
  335 |   });
  336 | 
  337 |   test('Puzzle 10: Axolotl Steckbrief can be completed', async ({ page }) => {
  338 |     await page.locator('.book-cover').first().click();
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
  370 |     await page.locator('.book-cover').first().click();
  371 |     await page.waitForTimeout(500);
  372 |     
  373 |     await page.locator('#close-book').click();
  374 |     await page.waitForTimeout(500);
  375 |     
  376 |     await expect(page.locator('h1')).toContainText('Das Glitzer-Portal');
  377 |     await expect(page.locator('.book-cover')).toBeVisible();
  378 |   });
  379 | 
  380 |   test('works with subpath (Pages deployment)', async ({ page }) => {
  381 |     await page.goto('/glitzer-portal/');
  382 |     
  383 |     await expect(page.locator('h1')).toContainText('Das Glitzer-Portal');
  384 |   });
  385 | 
  386 |   test('portrait mode check', async ({ page }) => {
  387 |     await expect(page.locator('h1')).toContainText('Das Glitzer-Portal');
  388 |     await expect(page.locator('.book-cover')).toBeVisible();
  389 |   });
  390 | });
  391 | 
```