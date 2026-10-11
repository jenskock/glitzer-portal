# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: glitzer-portal.spec.js >> Das Glitzer-Portal >> Puzzle 5: Labyrinth can be traced
- Location: tests/glitzer-portal.spec.js:194:3

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
- text: Das Glitzer-Portal Das Raetsel des leuchtenden Steins 1
- button "Zurück zum Bücherregal": ×
- text: "Tier-Steckbrief: Capybara Das ist Bruno. Tippe auf die Karten und lerne ihn kennen!"
- img "bruno"
- text: "? Ich bin das größte Nagetier der Welt. ? Ich lebe in Südamerika. ? Ich habe Schwimmhäute an den Füßen. ? Ich kann bis zu fünf Minuten tauchen. ? Ich fresse Gras und Wasserpflanzen. ? Ich lebe gern mit vielen anderen zusammen."
- img
- text: Oben fliegt Tuko, der Tukan. "Ich hab's gesehen!", ruft er. "Rudi ist beim großen Baum."
- button "Vorherige Seite":
  - img
- button "Nächste Seite":
  - img
```

# Test source

```ts
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
  157 |     await expect(page.locator('.praise-message')).toBeVisible();
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
> 222 |     await expect(page.locator('.praise-message')).toBeVisible();
      |                                                   ^ Error: expect(locator).toBeVisible() failed
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
  281 |     await page.locator('.book-spine').first().click();
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
```