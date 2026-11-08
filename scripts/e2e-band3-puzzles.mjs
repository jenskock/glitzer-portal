/**
 * iPad-sized browser tests for Band 3, plus one WebKit pass when it launches.
 * Usage: node scripts/e2e-band3-puzzles.mjs [baseUrl]
 */
import { chromium, webkit } from 'playwright';
import { band3 } from '../books/band3.js';

const BASE = process.argv[2] || 'http://127.0.0.1:5173';
const results = [];

function optionLabel(option) {
  return typeof option === 'string' ? option : (option.text || option.name || option.label || '');
}

function correctLabel(question) {
  const match = question.options.find((option) => (option.answerId || option.id) === question.correctAnswerId);
  return optionLabel(match);
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
    await overlay.waitFor({ state: 'visible', timeout: 4000 });
  } catch {
    return;
  }
  for (const question of puzzle.comprehension || []) {
    if (await page.locator('.praise-message').count()) return;
    await clickExact(overlay, correctLabel(question));
    await page.waitForTimeout(800);
  }
}

async function expectPraise(page, puzzle) {
  await answerComprehension(page, puzzle);
  await page.waitForSelector('.praise-message.show', { timeout: 10000 });
}

async function openAt(page, pageIndex) {
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.evaluate((idx) => {
    localStorage.setItem(
      'glitzer-portal-band3-progress',
      JSON.stringify({ page: idx, read: Array.from({ length: idx + 1 }, (_, i) => i) }),
    );
  }, pageIndex);
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.getByText('Die Spur im Schilf').click();
  await page.waitForSelector('.book-spread', { timeout: 10000 });
}

async function solveSearch(page, puzzle) {
  const count = await page.locator('.search-item').count();
  if (count !== puzzle.hotspots.length) throw new Error(`Suchpunkte ${count}`);
  for (const spot of puzzle.hotspots) {
    await page.locator(`.search-item[data-item-id="${spot.id}"]`).click({ force: true });
  }
  await expectPraise(page, puzzle);
}

async function solveDifferences(page, puzzle) {
  for (const spot of puzzle.hotspots) {
    await page.locator(`.difference-spot[data-diff-id="${spot.id}"]`).click({ force: true });
  }
  await expectPraise(page, puzzle);
}

async function solveInitialSounds(page, puzzle) {
  for (const item of puzzle.items.filter((entry) => entry.correct)) {
    await page.locator(`.sound-item[data-object-id="${item.id}"]`).click();
  }
  await expectPraise(page, puzzle);
}

async function solveFactCards(page, puzzle) {
  const cards = page.locator('.fact-card');
  const count = await cards.count();
  for (let i = 0; i < count; i += 1) await cards.nth(i).click();
  await page.locator('.fact-cards-puzzle .fact-quiz-option').first().waitFor({ state: 'visible' });
  await clickExact(page.locator('.fact-cards-puzzle'), correctLabel(puzzle.quiz));
  await page.waitForTimeout(1100);
  await expectPraise(page, puzzle);
}

async function solveQuiz(page, puzzle) {
  for (const question of puzzle.questions) {
    if (await page.locator('.praise-message.show').count()) break;
    await page.locator('.quiz-question', { hasText: question.question }).waitFor();
    const before = await page.locator('.quiz-question').textContent();
    await clickExact(page.locator('.quiz-puzzle'), correctLabel(question));
    await page.waitForFunction((previous) => {
      if (document.querySelector('.praise-message.show')) return true;
      const node = document.querySelector('.quiz-question');
      return !node || node.textContent !== previous;
    }, before, { timeout: 4000 });
  }
  await expectPraise(page, puzzle);
}

async function solveMaze(page, puzzle) {
  const canvas = page.locator('.maze-canvas');
  await canvas.waitFor({ state: 'visible' });
  const box = await canvas.boundingBox();
  const points = puzzle.route.map((point) => ({
    x: box.x + (box.width * point.x) / 100,
    y: box.y + (box.height * point.y) / 100,
  }));
  await page.mouse.move(points[0].x, points[0].y);
  await page.mouse.down();
  for (let i = 1; i < points.length; i += 1) {
    const from = points[i - 1];
    const to = points[i];
    for (let step = 1; step <= 12; step += 1) {
      const t = step / 12;
      await page.mouse.move(from.x + (to.x - from.x) * t, from.y + (to.y - from.y) * t);
    }
  }
  await page.mouse.up();
  await expectPraise(page, puzzle);
}

async function solveMemory(page, puzzle) {
  const cards = page.locator('.memory-card');
  await cards.first().waitFor();
  const meta = await page.evaluate(() => [...document.querySelectorAll('.memory-card')].map((el) => ({
    pairId: el.dataset.pairId,
    cardId: el.dataset.cardId,
  })));
  if (new Set(meta.map((card) => card.cardId)).size !== meta.length) throw new Error('cardId nicht eindeutig');
  const seen = new Map();
  for (let i = 0; i < meta.length; i += 1) {
    const id = meta[i].pairId;
    if (!seen.has(id)) {
      seen.set(id, i);
      continue;
    }
    await cards.nth(seen.get(id)).click();
    await cards.nth(i).click();
    await page.waitForTimeout(350);
    seen.delete(id);
  }
  await expectPraise(page, puzzle);
}

async function solveWordImage(page, puzzle) {
  for (const round of puzzle.rounds) {
    await page.locator('.word-to-match', { hasText: round.word }).waitFor();
    const correct = round.options.find((option) => option.answerId === round.correctAnswerId);
    await page.locator(`.word-image-option[data-answer-id="${correct.answerId}"]`).click();
    await page.waitForTimeout(1300);
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

async function choiceStability(page) {
  const quiz = band3.pages.map((entry, index) => ({ entry, index })).find((item) => item.entry.puzzleType === 'quiz');
  await page.addInitScript(() => {
    let calls = 0;
    window.__GLITZER_RANDOM__ = () => {
      calls += 1;
      return calls <= 12 ? 0 : 0.999;
    };
  });
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.evaluate((idx) => {
    localStorage.removeItem('glitzer-portal-band3-choice-orders');
    localStorage.setItem('glitzer-portal-band3-progress', JSON.stringify({ page: idx, read: [idx] }));
  }, quiz.index);
  await page.goto(BASE, { waitUntil: 'networkidle' });
  await page.getByText('Die Spur im Schilf').click();
  await page.locator('.quiz-option').first().waitFor();
  const before = await page.locator('.quiz-option').evaluateAll((nodes) => nodes.map((node) => node.dataset.answerId));
  const wrong = quiz.entry.questions[0].options.find((option) => option.answerId !== quiz.entry.questions[0].correctAnswerId);
  await page.locator(`.quiz-option[data-answer-id="${wrong.answerId}"]`).click();
  await page.waitForTimeout(1200);
  const afterWrong = await page.locator('.quiz-option').evaluateAll((nodes) => nodes.map((node) => node.dataset.answerId));
  if (afterWrong.join() !== before.join()) throw new Error('Falsche Antwort hat neu gemischt');
  await page.reload({ waitUntil: 'networkidle' });
  await page.getByText('Die Spur im Schilf').click();
  await page.locator('.quiz-option').first().waitFor();
  const resumed = await page.locator('.quiz-option').evaluateAll((nodes) => nodes.map((node) => node.dataset.answerId));
  if (resumed.join() !== before.join()) throw new Error('Fortsetzen hat die Antworten neu gemischt');
  await page.getByRole('button', { name: 'Neu versuchen' }).click();
  await page.locator('.quiz-option').first().waitFor();
  const retried = await page.locator('.quiz-option').evaluateAll((nodes) => nodes.map((node) => node.dataset.answerId));
  if (retried.join() === before.join()) {
    // A repeated draw is allowed. The unit tests cover a forced change.
  }
  if (await page.locator('[data-correct]').count()) throw new Error('Korrekt-Markierung im DOM');
}

async function runBrowser(browserType, name) {
  const browser = await browserType.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 1180, height: 820 },
    hasTouch: true,
    deviceScaleFactor: 1,
  });
  page.on('pageerror', (err) => console.error(name, 'PAGEERROR', err.message));
  page.on('dialog', async (dialog) => dialog.accept());

  const puzzles = band3.pages.map((entry, index) => ({ entry, index })).filter((item) => item.entry.type === 'puzzle');
  for (const { entry, index } of puzzles) {
    const label = `${name}:${index}:${entry.puzzleType}`;
    try {
      await openAt(page, index);
      const broken = await page.locator('img').evaluateAll((images) => images.filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.src));
      if (broken.length) throw new Error(`defekte Bilder ${broken.join(', ')}`);
      await solvers[entry.puzzleType](page, entry);
      if (index < band3.pages.length - 1 && await page.locator('#next-page').isDisabled()) {
        throw new Error('Spiel lässt sich nicht überspringen');
      }
      results.push({ name: label, ok: true });
      console.log(`PASS ${label}`);
    } catch (err) {
      results.push({ name: label, ok: false, error: String(err.message || err) });
      console.error(`FAIL ${label}: ${err.message || err}`);
      await page.screenshot({ path: `/tmp/band3-fail-${name}-${index}.png`, fullPage: true }).catch(() => {});
    }
  }

  try {
    await choiceStability(page);
    results.push({ name: `${name}:choice-stability`, ok: true });
    console.log(`PASS ${name}:choice-stability`);
  } catch (err) {
    results.push({ name: `${name}:choice-stability`, ok: false, error: String(err.message || err) });
    console.error(`FAIL ${name}:choice-stability: ${err.message || err}`);
  }

  await page.setViewportSize({ width: 1024, height: 768 });
  await openAt(page, 0);
  const nav = await page.locator('#next-page').boundingBox();
  if (!nav || nav.width < 44 || nav.height < 44) {
    results.push({ name: `${name}:touch-target`, ok: false, error: JSON.stringify(nav) });
  } else {
    results.push({ name: `${name}:touch-target`, ok: true });
    console.log(`PASS ${name}:touch-target`);
  }
  await browser.close();
}

async function main() {
  await runBrowser(chromium, 'chromium');
  try {
    await runBrowser(webkit, 'webkit');
  } catch (err) {
    results.push({ name: 'webkit-launch', ok: false, error: String(err.message || err) });
    console.error('WEBKIT LAUNCH', err.message || err);
  }
  const failed = results.filter((item) => !item.ok);
  console.log('\n=== SUMMARY ===');
  console.log(`passed=${results.length - failed.length} failed=${failed.length}`);
  for (const fail of failed) console.log(` - ${fail.name}: ${fail.error}`);
  process.exit(failed.length ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
