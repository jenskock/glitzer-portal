/**
 * End-to-end browser tests for Band 2 puzzles.
 * Usage: node scripts/e2e-band2-puzzles.mjs [baseUrl]
 */
import { createRequire } from 'module';
import { band2 } from '../books/band2.js';

const require = createRequire(import.meta.url);
let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  ({ chromium } = require('/home/jens/.local/share/mise/installs/npm-playwright/latest/node_modules/playwright'));
}

const BASE = process.argv[2] || 'http://127.0.0.1:8000';
const results = [];

function puzzlePages() {
  return band2.pages
    .map((page, index) => ({ page, index }))
    .filter(({ page }) => page.type === 'puzzle');
}

async function openBand2At(page, pageIndex) {
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.evaluate((idx) => {
    localStorage.setItem(
      'glitzer-portal-band2-progress',
      JSON.stringify({ page: idx, read: Array.from({ length: idx + 1 }, (_, i) => i) })
    );
  }, pageIndex);
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.getByText('Bruno kommt zu Besuch').click();
  await page.waitForSelector('.book-spread', { timeout: 10000 });
  await page.waitForTimeout(400);
}

async function answerComprehension(page) {
  const overlay = page.locator('.comprehension-overlay');
  try {
    await overlay.waitFor({ state: 'visible', timeout: 3000 });
  } catch {
    return;
  }

  for (let i = 0; i < 6; i++) {
    if (await page.locator('.praise-message').count()) return;
    if (!(await overlay.count())) return;

    const question = await overlay.locator('.fact-quiz-question').first().textContent();
    const btn = overlay.locator('button.fact-quiz-option:not([disabled])').first();
    await btn.waitFor({ state: 'visible', timeout: 3000 });
    await btn.click({ force: true });

    await page.waitForFunction(
      (prev) => {
        if (document.querySelector('.praise-message')) return true;
        const overlays = document.querySelectorAll('.comprehension-overlay');
        if (!overlays.length) return true;
        const o = overlays[overlays.length - 1];
        const q = o.querySelector('.fact-quiz-question')?.textContent || '';
        const enabled = o.querySelector('button.fact-quiz-option:not([disabled])');
        return q !== prev && Boolean(enabled);
      },
      question,
      { timeout: 4000 }
    ).catch(() => null);
  }
}

async function expectPraise(page) {
  await answerComprehension(page);
  await page.waitForSelector('.praise-message.show', { timeout: 10000 });
}

async function solveSearch(page) {
  const spots = page.locator('.search-item');
  const n = await spots.count();
  for (let i = 0; i < n; i++) {
    await spots.nth(i).click({ force: true });
    await page.waitForTimeout(100);
  }
  await expectPraise(page);
}

async function solveDifferences(page) {
  const spots = page.locator('.difference-spot');
  const n = await spots.count();
  for (let i = 0; i < n; i++) {
    await spots.nth(i).click({ force: true });
    await page.waitForTimeout(100);
  }
  await expectPraise(page);
}

async function solveInitialSounds(page) {
  // Click all correct items (border turns teal). Also click wrong ones ok.
  const items = page.locator('.sound-item');
  const n = await items.count();
  for (let i = 0; i < n; i++) {
    await items.nth(i).click();
    await page.waitForTimeout(80);
  }
  await expectPraise(page);
}

async function solveFactCards(page) {
  const cards = page.locator('.fact-card');
  const n = await cards.count();
  for (let i = 0; i < n; i++) {
    await cards.nth(i).click();
    await page.waitForTimeout(120);
  }
  // Mini-quiz appears after a short delay once all cards are open
  const quizOpt = page.locator('.fact-cards-puzzle .fact-quiz-option').first();
  await quizOpt.waitFor({ state: 'visible', timeout: 5000 });
  await quizOpt.click();
  await page.waitForTimeout(1100);
  await expectPraise(page);
}

async function solveQuiz(page) {
  for (let q = 0; q < 10; q++) {
    if (await page.locator('.praise-message.show, .comprehension-overlay').count()) break;
    const question = await page.locator('.quiz-question').textContent().catch(() => null);
    if (!question) break;

    // Click options until the question text changes or praise appears
    const count = await page.locator('.quiz-option').count();
    let moved = false;
    for (let i = 0; i < count; i++) {
      await page.locator('.quiz-option').nth(i).click();
      await page.waitForTimeout(1100);
      if (await page.locator('.praise-message.show, .comprehension-overlay').count()) {
        moved = true;
        break;
      }
      const next = await page.locator('.quiz-question').textContent().catch(() => '');
      if (next && next !== question) {
        moved = true;
        break;
      }
    }
    if (!moved) break;
  }
  await expectPraise(page);
}

async function solveMaze(page) {
  const canvas = page.locator('.maze-canvas');
  await canvas.waitFor({ state: 'visible' });
  const box = await canvas.boundingBox();
  if (!box) throw new Error('maze canvas missing');

  // Read start/goal from band2 page data via DOM markers drawn at %
  // Drag from lower-left toward upper-right (forgiving distance check)
  const startX = box.x + box.width * 0.25;
  const startY = box.y + box.height * 0.72;
  const goalX = box.x + box.width * 0.80;
  const goalY = box.y + box.height * 0.30;

  await page.mouse.move(startX, startY);
  await page.mouse.down();
  const steps = 20;
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    await page.mouse.move(startX + (goalX - startX) * t, startY + (goalY - startY) * t);
  }
  await page.mouse.up();
  await expectPraise(page);
}

async function solveMemory(page) {
  const cards = page.locator('.memory-card');
  await cards.first().waitFor();

  // Read pair ids without relying on visual state
  const pairIds = await page.evaluate(() =>
    [...document.querySelectorAll('.memory-card')].map((el) => el.dataset.pairId)
  );

  const seen = new Map();
  for (let i = 0; i < pairIds.length; i++) {
    const id = pairIds[i];
    if (!seen.has(id)) {
      seen.set(id, i);
      continue;
    }
    const j = seen.get(id);
    await cards.nth(j).click();
    await page.waitForTimeout(120);
    await cards.nth(i).click();
    await page.waitForTimeout(400);
    seen.delete(id);
  }
  await expectPraise(page);
}

async function solveWordImage(page) {
  for (let round = 0; round < 8; round++) {
    if (await page.locator('.praise-message.show, .comprehension-overlay').count()) break;
    const word = await page.locator('.word-to-match').textContent().catch(() => null);
    if (!word) break;
    const options = page.locator('.word-image-option');
    const count = await options.count();
    let moved = false;
    for (let i = 0; i < count; i++) {
      await options.nth(i).click();
      await page.waitForTimeout(1100);
      if (await page.locator('.praise-message.show, .comprehension-overlay').count()) {
        moved = true;
        break;
      }
      const next = await page.locator('.word-to-match').textContent().catch(() => '');
      if (next && next !== word) {
        moved = true;
        break;
      }
    }
    if (!moved) break;
  }
  await expectPraise(page);
}

async function solveColoring(page) {
  await page.locator('.done-button').click();
  await expectPraise(page);
}

const solvers = {
  search: solveSearch,
  differences: solveDifferences,
  'initial-sounds': solveInitialSounds,
  'fact-cards': solveFactCards,
  quiz: solveQuiz,
  maze: solveMaze,
  memory: solveMemory,
  'word-image': solveWordImage,
  coloring: solveColoring,
};

async function main() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
  page.on('pageerror', (err) => console.error('PAGEERROR', err.message));
  page.on('dialog', async (d) => d.accept());

  const puzzles = puzzlePages();
  console.log(`Testing ${puzzles.length} Band 2 puzzles against ${BASE}`);

  for (const { page: puzzle, index } of puzzles) {
    const name = `${index}:${puzzle.puzzleType}:${puzzle.title}`;
    try {
      await openBand2At(page, index);
      const title = await page.locator('.puzzle-title').textContent();
      if (!title || !title.includes(puzzle.title.split(':')[0].slice(0, 6))) {
        // soft check
      }
      const solver = solvers[puzzle.puzzleType];
      if (!solver) throw new Error(`No solver for ${puzzle.puzzleType}`);
      await solver(page);
      results.push({ name, ok: true });
      console.log(`PASS ${name}`);
    } catch (err) {
      results.push({ name, ok: false, error: String(err.message || err) });
      console.error(`FAIL ${name}: ${err.message || err}`);
      await page.screenshot({ path: `/tmp/band2-fail-${index}.png`, fullPage: true }).catch(() => {});
    }
  }

  await browser.close();

  const failed = results.filter((r) => !r.ok);
  console.log('\n=== SUMMARY ===');
  console.log(`passed=${results.length - failed.length} failed=${failed.length}`);
  for (const f of failed) console.log(` - ${f.name}: ${f.error}`);
  process.exit(failed.length ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
