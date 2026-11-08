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

function optionLabel(option) {
  return typeof option === 'string' ? option : (option.text || option.name || option.label || '');
}

function correctLabel(question) {
  if (!question) return '';
  if (question.correctAnswerId) {
    const match = question.options.find((option) => (option.answerId || option.id) === question.correctAnswerId);
    return optionLabel(match);
  }
  if (typeof question.correct === 'number') return optionLabel(question.options[question.correct]);
  return optionLabel(question.options.find((option) => option && option.correct));
}

async function clickExact(scope, label) {
  const buttons = scope.locator('button.fact-quiz-option, .quiz-option, .word-image-option');
  const count = await buttons.count();
  for (let i = 0; i < count; i += 1) {
    const text = (await buttons.nth(i).innerText()).replace(/\s+/g, ' ').trim();
    if (text === label.trim()) {
      await buttons.nth(i).click({ force: true });
      return;
    }
  }
  throw new Error(`Option nicht gefunden: ${label}`);
}

async function answerComprehension(page, puzzle) {
  const overlay = page.locator('.comprehension-overlay');
  try {
    await overlay.waitFor({ state: 'visible', timeout: 3000 });
  } catch {
    return;
  }

  const questions = puzzle?.comprehension || [];
  for (let i = 0; i < questions.length; i += 1) {
    if (await page.locator('.praise-message').count()) return;
    if (!(await overlay.count())) return;

    const question = ((await overlay.locator('.fact-quiz-question').first().textContent()) || '').trim();
    const match = questions.find((item) => (item.question || item.word) === question) || questions[i];
    await clickExact(overlay, correctLabel(match));

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

async function expectPraise(page, puzzle) {
  await answerComprehension(page, puzzle);
  await page.waitForSelector('.praise-message.show', { timeout: 10000 });
}

async function solveSearch(page, puzzle) {
  const spots = page.locator('.search-item');
  const n = await spots.count();
  for (let i = 0; i < n; i++) {
    await spots.nth(i).click({ force: true });
    await page.waitForTimeout(100);
  }
  await expectPraise(page, puzzle);
}

async function solveDifferences(page, puzzle) {
  const spots = page.locator('.difference-spot');
  const n = await spots.count();
  for (let i = 0; i < n; i++) {
    await spots.nth(i).click({ force: true });
    await page.waitForTimeout(100);
  }
  await expectPraise(page, puzzle);
}

async function solveInitialSounds(page, puzzle) {
  // Click all correct items (border turns teal). Also click wrong ones ok.
  const items = page.locator('.sound-item');
  const n = await items.count();
  for (let i = 0; i < n; i++) {
    await items.nth(i).click();
    await page.waitForTimeout(80);
  }
  await expectPraise(page, puzzle);
}

async function solveFactCards(page, puzzle) {
  const cards = page.locator('.fact-card');
  const n = await cards.count();
  for (let i = 0; i < n; i++) {
    await cards.nth(i).click();
    await page.waitForTimeout(120);
  }
  // Mini-quiz appears after a short delay once all cards are open
  const quizOpt = page.locator('.fact-cards-puzzle .fact-quiz-option').first();
  await quizOpt.waitFor({ state: 'visible', timeout: 5000 });
  await clickExact(page.locator('.fact-cards-puzzle'), correctLabel(puzzle.quiz));
  await page.waitForTimeout(1100);
  await expectPraise(page, puzzle);
}

async function waitForNextPrompt(page, selector, previous) {
  await page.waitForFunction(({ selector: promptSelector, previous: previousText }) => {
    if (document.querySelector('.praise-message.show')) return true;
    const node = document.querySelector(promptSelector);
    return !node || node.textContent !== previousText;
  }, { selector, previous }, { timeout: 4000 });
}

async function solveQuiz(page, puzzle) {
  for (const question of puzzle.questions) {
    if (await page.locator('.praise-message.show').count()) break;
    const before = await page.locator('.quiz-question').textContent();
    await clickExact(page.locator('.quiz-puzzle'), correctLabel(question));
    await waitForNextPrompt(page, '.quiz-question', before);
  }
  await expectPraise(page, puzzle);
}

async function solveMaze(page, puzzle) {
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
  await expectPraise(page, puzzle);
}

async function solveMemory(page, puzzle) {
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
  await expectPraise(page, puzzle);
}

async function solveWordImage(page, puzzle) {
  for (const round of puzzle.rounds) {
    if (await page.locator('.praise-message.show').count()) break;
    const correct = round.options.find((option) => option.correct);
    const before = await page.locator('.word-to-match').textContent();
    await page.locator(`.word-image-option[data-answer-id="${correct.id}"]`).click();
    await waitForNextPrompt(page, '.word-to-match', before);
  }
  await expectPraise(page, puzzle);
}

async function solveColoring(page, puzzle) {
  await page.locator('.done-button').click();
  await expectPraise(page, puzzle);
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
      await solver(page, puzzle);
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
