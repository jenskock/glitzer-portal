# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: glitzer-portal.spec.js >> Das Glitzer-Portal >> swipe navigation works
- Location: tests/glitzer-portal.spec.js:45:3

# Error details

```
Error: expect(locator).toBeEnabled() failed

Locator:  locator('#prev-page')
Expected: enabled
Received: disabled
Timeout:  5000ms

Call log:
  - Expect "toBeEnabled" locator('#prev-page') with timeout 5000ms
  - waiting for locator('#prev-page')
    14 × locator resolved to <button disabled id="prev-page" aria-label="Vorherige Seite" class="nav-button prev-button">…</button>
       - unexpected value "disabled"

```

```yaml
- button "Vorherige Seite" [disabled]:
  - img
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test.describe('Das Glitzer-Portal', () => {
  4   |   test.beforeEach(async ({ page }) => {
  5   |     await page.goto('/');
  6   |   });
  7   | 
  8   |   test('bookshelf displays and Band 1 is clickable', async ({ page }) => {
  9   |     await expect(page.locator('h1')).toContainText('Das Glitzer-Portal');
  10  |     
  11  |     const band1Spine = page.locator('.book-cover').first();
  12  |     await expect(band1Spine).toBeVisible();
  13  |     await expect(band1Spine).toContainText('Das Rätsel des leuchtenden Steins');
  14  |     
  15  |     await page.screenshot({ path: 'artifacts/screenshots/01-bookshelf.png', fullPage: true });
  16  |   });
  17  | 
  18  |   test('opening Band 1 shows cover', async ({ page }) => {
  19  |     await page.locator('.book-cover').first().click();
  20  |     
  21  |     await expect(page.locator('.cover-title')).toContainText('Das Rätsel des leuchtenden Steins');
  22  |     await expect(page.locator('.cover-series')).toContainText('Das Glitzer-Portal');
  23  |     
  24  |     await page.screenshot({ path: 'artifacts/screenshots/02-cover.png', fullPage: true });
  25  |   });
  26  | 
  27  |   test('page navigation with arrow buttons works', async ({ page }) => {
  28  |     await page.locator('.book-cover').first().click();
  29  |     await page.waitForTimeout(500);
  30  |     
  31  |     const nextBtn = page.locator('#next-page');
  32  |     const prevBtn = page.locator('#prev-page');
  33  |     
  34  |     await expect(prevBtn).toBeDisabled();
  35  |     await expect(nextBtn).toBeEnabled();
  36  |     
  37  |     await nextBtn.click();
  38  |     await page.waitForTimeout(500);
  39  |     
  40  |     await expect(prevBtn).toBeEnabled();
  41  |     
  42  |     await page.screenshot({ path: 'artifacts/screenshots/03-story-spread-1.png', fullPage: true });
  43  |   });
  44  | 
  45  |   test('swipe navigation works', async ({ page }) => {
  46  |     await page.locator('.book-cover').first().click();
  47  |     await page.waitForTimeout(500);
  48  |     
  49  |     const spread = page.locator('.book-spread');
  50  |     const box = await spread.boundingBox();
  51  |     
  52  |     await page.mouse.move(box.x + box.width - 100, box.y + box.height / 2);
  53  |     await page.mouse.down();
  54  |     await page.mouse.move(box.x + 100, box.y + box.height / 2);
  55  |     await page.mouse.up();
  56  |     
  57  |     await page.waitForTimeout(500);
  58  |     
  59  |     const prevBtn = page.locator('#prev-page');
> 60  |     await expect(prevBtn).toBeEnabled();
      |                           ^ Error: expect(locator).toBeEnabled() failed
  61  |   });
  62  | 
  63  |   test('localStorage remembers last page', async ({ page, context }) => {
  64  |     await page.locator('.book-cover').first().click();
  65  |     await page.waitForTimeout(500);
  66  |     
  67  |     await page.locator('#next-page').click();
  68  |     await page.waitForTimeout(300);
  69  |     await page.locator('#next-page').click();
  70  |     await page.waitForTimeout(300);
  71  |     
  72  |     const storage = await context.storageState();
  73  |     const hasStorage = storage.origins.some(origin => 
  74  |       origin.localStorage.some(item => item.name.includes('glitzer-portal'))
  75  |     );
  76  |     expect(hasStorage).toBeTruthy();
  77  |     
  78  |     await page.locator('#close-book').click();
  79  |     await page.waitForTimeout(300);
  80  |     
  81  |     await page.locator('.book-cover').first().click();
  82  |     await page.waitForTimeout(500);
  83  |     
  84  |     const prevBtn = page.locator('#prev-page');
  85  |     await expect(prevBtn).toBeEnabled();
  86  |   });
  87  | 
  88  |   test('Puzzle 1: Suchbild can be solved', async ({ page }) => {
  89  |     await page.locator('.book-cover').first().click();
  90  |     await page.waitForTimeout(500);
  91  |     
  92  |     await page.locator('#next-page').click();
  93  |     await page.waitForTimeout(500);
  94  |     
  95  |     await page.screenshot({ path: 'artifacts/screenshots/04-puzzle-suchbild-before.png', fullPage: true });
  96  |     
  97  |     const searchItems = page.locator('.search-item');
  98  |     const count = await searchItems.count();
  99  |     
  100 |     for (let i = 0; i < Math.min(count, 5); i++) {
  101 |       await searchItems.nth(i).evaluate(el => el.dispatchEvent(new MouseEvent('click', { bubbles: true })));
  102 |       await page.waitForTimeout(200);
  103 |     }
  104 |     
  105 |     await page.waitForTimeout(1000);
  106 |     await expect(page.locator('.praise-message')).toBeVisible();
  107 |     await expect(page.locator('.praise-message')).toContainText('Adleraugen');
  108 |     
  109 |     await page.screenshot({ path: 'artifacts/screenshots/05-puzzle-suchbild-solved.png', fullPage: true });
  110 |   });
  111 | 
  112 |   test('Puzzle 2: Fehlerbild can be solved', async ({ page }) => {
  113 |     await page.locator('.book-cover').first().click();
  114 |     await page.waitForTimeout(500);
  115 |     
  116 |     for (let i = 0; i < 2; i++) {
  117 |       await page.locator('#next-page').click();
  118 |       await page.waitForTimeout(300);
  119 |     }
  120 |     
  121 |     await page.screenshot({ path: 'artifacts/screenshots/06-puzzle-fehlerbild-before.png', fullPage: true });
  122 |     
  123 |     const diffSpots = page.locator('.difference-spot');
  124 |     const count = await diffSpots.count();
  125 |     
  126 |     for (let i = 0; i < count; i++) {
  127 |       await diffSpots.nth(i).evaluate(el => el.dispatchEvent(new MouseEvent('click', { bubbles: true })));
  128 |       await page.waitForTimeout(200);
  129 |     }
  130 |     
  131 |     await page.waitForTimeout(1000);
  132 |     await expect(page.locator('.praise-message')).toBeVisible();
  133 |     
  134 |     await page.screenshot({ path: 'artifacts/screenshots/07-puzzle-fehlerbild-solved.png', fullPage: true });
  135 |   });
  136 | 
  137 |   test('Puzzle 3: Anlaut B can be solved', async ({ page }) => {
  138 |     await page.locator('.book-cover').first().click();
  139 |     await page.waitForTimeout(500);
  140 |     
  141 |     for (let i = 0; i < 3; i++) {
  142 |       await page.locator('#next-page').click();
  143 |       await page.waitForTimeout(300);
  144 |     }
  145 |     
  146 |     await page.screenshot({ path: 'artifacts/screenshots/08-puzzle-anlaut-before.png', fullPage: true });
  147 |     
  148 |     const items = page.locator('.sound-item');
  149 |     const count = await items.count();
  150 |     
  151 |     for (let i = 0; i < count; i++) {
  152 |       await items.nth(i).click();
  153 |       await page.waitForTimeout(200);
  154 |     }
  155 |     
  156 |     await page.waitForTimeout(1000);
  157 |     await expect(page.locator('.praise-message')).toBeVisible();
  158 |     
  159 |     await page.screenshot({ path: 'artifacts/screenshots/09-puzzle-anlaut-solved.png', fullPage: true });
  160 |   });
```