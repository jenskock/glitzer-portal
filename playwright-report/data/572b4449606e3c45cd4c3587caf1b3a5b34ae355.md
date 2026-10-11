# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: glitzer-portal.spec.js >> Das Glitzer-Portal >> Puzzle 3: Anlaut B can be solved
- Location: tests/glitzer-portal.spec.js:137:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.praise-message')
Expected: visible
Error: strict mode violation: locator('.praise-message') resolved to 5 elements:
    1) <div class="praise-message show">…</div> aka locator('.praise-message').first()
    2) <div class="praise-message show">…</div> aka locator('.puzzle-page > div:nth-child(4)')
    3) <div class="praise-message show">…</div> aka locator('.puzzle-page > div:nth-child(5)')
    4) <div class="praise-message show">…</div> aka locator('.puzzle-page > div:nth-child(6)')
    5) <div class="praise-message show">…</div> aka locator('.puzzle-page > div:nth-child(7)')

Call log:
  - Expect "toBeVisible" locator('.praise-message') with timeout 5000ms
  - waiting for locator('.praise-message')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic:
    - generic:
      - heading "Das Glitzer-Portal" [level=1]
      - generic:
        - generic:
          - generic:
            - generic: Das Glitzer-Portal
            - generic: Das Raetsel des leuchtenden Steins
            - generic: "1"
  - generic [ref=e4]:
    - button "Zurück zum Bücherregal" [ref=e5] [cursor=pointer]: ×
    - generic [ref=e6]:
      - generic [ref=e9]:
        - generic [ref=e10]:
          - generic [ref=e11]: Leserätsel
          - generic [ref=e12]: B wie Baum! Tippe alle Bilder, die mit B anfangen.
        - generic [ref=e14]:
          - generic [ref=e15] [cursor=pointer]:
            - generic [ref=e16]: 🌳
            - generic [ref=e17]: Baum
          - generic [ref=e18] [cursor=pointer]:
            - generic [ref=e19]: 🌸
            - generic [ref=e20]: Blume
          - generic [ref=e21] [cursor=pointer]:
            - generic [ref=e22]: 🍌
            - generic [ref=e23]: Banane
          - generic [ref=e24] [cursor=pointer]:
            - generic [ref=e25]: ⛵
            - generic [ref=e26]: Boot
          - generic [ref=e27] [cursor=pointer]:
            - generic [ref=e28]: 🐠
            - generic [ref=e29]: Fisch
          - generic [ref=e30] [cursor=pointer]:
            - generic [ref=e31]: ☀️
            - generic [ref=e32]: Sonne
          - generic [ref=e33] [cursor=pointer]:
            - generic [ref=e34]: 🪺
            - generic [ref=e35]: Nest
          - generic [ref=e36] [cursor=pointer]:
            - generic [ref=e37]: 🐵
            - generic [ref=e38]: Affe
        - generic:
          - generic:
            - img "lotti"
          - generic: Bravo! Du hörst ganz genau hin.
        - generic:
          - generic:
            - img "lotti"
          - generic: Bravo! Du hörst ganz genau hin.
        - generic:
          - generic:
            - img "lotti"
          - generic: Bravo! Du hörst ganz genau hin.
        - generic:
          - generic:
            - img "lotti"
          - generic: Bravo! Du hörst ganz genau hin.
        - generic:
          - generic:
            - img "lotti"
          - generic: Bravo! Du hörst ganz genau hin.
      - generic [ref=e39]: Das ist Bruno, das Capybara. "Keine Angst", sagt er. "Ich bin ja da!"
    - button "Vorherige Seite" [ref=e63] [cursor=pointer]
    - button "Nächste Seite" [ref=e66] [cursor=pointer]
```

# Test source

```ts
  57  |     await page.waitForTimeout(500);
  58  |     
  59  |     const prevBtn = page.locator('#prev-page');
  60  |     await expect(prevBtn).toBeEnabled();
  61  |   });
  62  | 
  63  |   test('localStorage remembers last page', async ({ page, context }) => {
  64  |     await page.locator('.book-spine').first().click();
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
  81  |     await page.locator('.book-spine').first().click();
  82  |     await page.waitForTimeout(500);
  83  |     
  84  |     const prevBtn = page.locator('#prev-page');
  85  |     await expect(prevBtn).toBeEnabled();
  86  |   });
  87  | 
  88  |   test('Puzzle 1: Suchbild can be solved', async ({ page }) => {
  89  |     await page.locator('.book-spine').first().click();
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
  101 |       await searchItems.nth(i).click();
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
  113 |     await page.locator('.book-spine').first().click();
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
  127 |       await diffSpots.nth(i).click();
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
  138 |     await page.locator('.book-spine').first().click();
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
> 157 |     await expect(page.locator('.praise-message')).toBeVisible();
      |                                                   ^ Error: expect(locator).toBeVisible() failed
  158 |     
  159 |     await page.screenshot({ path: 'artifacts/screenshots/09-puzzle-anlaut-solved.png', fullPage: true });
  160 |   });
  161 | 
  162 |   test('Puzzle 4: Capybara Steckbrief can be completed', async ({ page }) => {
  163 |     await page.locator('.book-spine').first().click();
  164 |     await page.waitForTimeout(500);
  165 |     
  166 |     for (let i = 0; i < 4; i++) {
  167 |       await page.locator('#next-page').click();
  168 |       await page.waitForTimeout(300);
  169 |     }
  170 |     
  171 |     await page.screenshot({ path: 'artifacts/screenshots/10-puzzle-steckbrief-bruno-before.png', fullPage: true });
  172 |     
  173 |     const cards = page.locator('.fact-card');
  174 |     const count = await cards.count();
  175 |     
  176 |     for (let i = 0; i < count; i++) {
  177 |       await cards.nth(i).click();
  178 |       await page.waitForTimeout(300);
  179 |     }
  180 |     
  181 |     await page.waitForTimeout(1000);
  182 |     
  183 |     const quizOptions = page.locator('.fact-quiz-option');
  184 |     if (await quizOptions.count() > 0) {
  185 |       await quizOptions.first().click();
  186 |       await page.waitForTimeout(1000);
  187 |     }
  188 |     
  189 |     await expect(page.locator('.praise-message')).toBeVisible();
  190 |     
  191 |     await page.screenshot({ path: 'artifacts/screenshots/11-puzzle-steckbrief-bruno-solved.png', fullPage: true });
  192 |   });
  193 | 
  194 |   test('Puzzle 5: Labyrinth can be traced', async ({ page }) => {
  195 |     await page.locator('.book-spine').first().click();
  196 |     await page.waitForTimeout(500);
  197 |     
  198 |     for (let i = 0; i < 5; i++) {
  199 |       await page.locator('#next-page').click();
  200 |       await page.waitForTimeout(300);
  201 |     }
  202 |     
  203 |     await page.screenshot({ path: 'artifacts/screenshots/12-puzzle-labyrinth-before.png', fullPage: true });
  204 |     
  205 |     const canvas = page.locator('.maze-canvas');
  206 |     const box = await canvas.boundingBox();
  207 |     
  208 |     await page.mouse.move(box.x + 50, box.y + box.height / 2);
  209 |     await page.mouse.down();
  210 |     
  211 |     const steps = 10;
  212 |     for (let i = 1; i <= steps; i++) {
  213 |       const x = box.x + 50 + (box.width - 100) * (i / steps);
  214 |       const y = box.y + box.height / 2 + Math.sin(i) * 50;
  215 |       await page.mouse.move(x, y);
  216 |       await page.waitForTimeout(50);
  217 |     }
  218 |     
  219 |     await page.mouse.up();
  220 |     await page.waitForTimeout(1000);
  221 |     
  222 |     await expect(page.locator('.praise-message')).toBeVisible();
  223 |     
  224 |     await page.screenshot({ path: 'artifacts/screenshots/13-puzzle-labyrinth-solved.png', fullPage: true });
  225 |   });
  226 | 
  227 |   test('Puzzle 6: Quiz can be answered', async ({ page }) => {
  228 |     await page.locator('.book-spine').first().click();
  229 |     await page.waitForTimeout(500);
  230 |     
  231 |     for (let i = 0; i < 6; i++) {
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
  253 |     await page.locator('.book-spine').first().click();
  254 |     await page.waitForTimeout(500);
  255 |     
  256 |     for (let i = 0; i < 7; i++) {
  257 |       await page.locator('#next-page').click();
```