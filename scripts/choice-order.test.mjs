import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import { band1 } from '../books/band1.js';
import { band2 } from '../books/band2.js';
import { band3 } from '../books/band3.js';
import {
  anlautCorrectIds,
  anlautSolved,
  applyIndexPermutation,
  createChoiceSession,
  ensureIdOrder,
  fixedHotspots,
  indexPermutations,
  isCorrectChoice,
  isMemoryMatch,
  memoryDeck,
  memoryStorage,
  normalizeChoiceQuestion,
  shuffleItems,
} from '../js/choice-order.js';
import { traceFollowsRoute } from '../js/maze-route.js';

const FAMILIES = ['quiz', 'comprehension', 'profile', 'word-image'];

function sequence(values) {
  let index = 0;
  return () => {
    const value = values[Math.min(index, values.length - 1)];
    index += 1;
    return value;
  };
}

function choiceSets(book) {
  const sets = [];
  book.pages.forEach((page, pageIndex) => {
    if (page.type !== 'puzzle') return;
    const key = `${book.id}:page:${pageIndex}:${page.puzzleType}`;
    if (page.puzzleType === 'quiz') {
      sets.push({ family: 'quiz', key, questions: page.questions });
    }
    if (page.puzzleType === 'word-image') {
      sets.push({ family: 'word-image', key, questions: page.rounds });
    }
    if (page.puzzleType === 'fact-cards') {
      sets.push({ family: 'profile', key: `${key}:profile`, questions: [page.quiz] });
    }
    if (page.comprehension) {
      sets.push({ family: 'comprehension', key: `${key}:comprehension`, questions: page.comprehension });
    }
  });
  return sets;
}

function gradePermutation(question, permutation) {
  const displayed = applyIndexPermutation(question.options, permutation);
  displayed.forEach((option, position) => {
    const source = question.options.find((item) => item.answerId === option.answerId);
    assert.equal(source, option);
    assert.equal(option.image, source.image);
    assert.equal(option.label, source.label);
    const correct = isCorrectChoice(question, option.answerId);
    assert.equal(correct, option.answerId === question.correctAnswerId);
    if (position !== question.options.findIndex((item) => item.answerId === question.correctAnswerId)) {
      assert.equal(correct, option.answerId === question.correctAnswerId);
    }
  });
  const wrong = displayed.filter((option) => option.answerId !== question.correctAnswerId);
  wrong.forEach((option) => {
    assert.equal(isCorrectChoice(question, option.answerId), false);
  });
  return displayed.findIndex((option) => option.answerId === question.correctAnswerId);
}

test('three-option questions have all six permutations', () => {
  assert.equal(indexPermutations(3).length, 6);
  assert.equal(indexPermutations(2).length, 2);
});

test('correctAnswerId beats a misleading first-option flag and array index', () => {
  const question = normalizeChoiceQuestion({
    questionId: 'q-stable',
    question: 'Wie heißt der Hund?',
    correctAnswerId: 'milo',
    correct: 0,
    options: [
      { answerId: 'rudi', text: 'Rudi', correct: true, image: 'rudi.webp' },
      { answerId: 'tuko', text: 'Tuko', image: 'tuko.webp' },
      { answerId: 'milo', text: 'Milo', image: 'milo.webp' },
    ],
  });
  assert.equal(question.correctAnswerId, 'milo');
  assert.equal(isCorrectChoice(question, 'rudi'), false);
  assert.equal(isCorrectChoice(question, 'milo'), true);
  const reversed = applyIndexPermutation(question.options, [2, 1, 0]);
  assert.equal(reversed[0].answerId, 'milo');
  assert.equal(reversed[0].image, 'milo.webp');
  assert.equal(reversed[0].label, 'Milo');
});

for (const family of FAMILIES) {
  test(`${family}: every position can be correct and wrong answers stay wrong`, () => {
    const raw = family === 'word-image'
      ? {
        questionId: `${family}-1`,
        word: 'HUND',
        correctAnswerId: 'hund',
        options: [
          { answerId: 'hut', name: 'Hut', image: 'hut.webp' },
          { answerId: 'haus', name: 'Haus', image: 'haus.webp' },
          { answerId: 'hund', name: 'Hund', image: 'hund.webp' },
        ],
      }
      : family === 'quiz'
        ? {
          questionId: `${family}-1`,
          question: 'Wie heißt der Hund?',
          options: [
            { text: 'Rudi', image: 'rudi.webp', correct: true },
            { text: 'Tuko', image: 'tuko.webp', correct: false },
            { text: 'Milo', image: 'milo.webp', correct: false },
          ],
        }
        : {
          questionId: `${family}-1`,
          question: 'Was bringt Bruno mit?',
          options: ['Kuchen', 'Gras', 'Fisch'],
          correct: 1,
        };
    const question = normalizeChoiceQuestion(raw, family);
    const seen = new Set();
    for (const permutation of indexPermutations(question.options.length)) {
      seen.add(gradePermutation(question, permutation));
    }
    assert.equal(question.options.length, 3);
    assert.deepEqual([...seen].sort(), [0, 1, 2]);
  });
}

test('every real choice question in all three books grades by id for every permutation', () => {
  const counts = { quiz: 0, comprehension: 0, profile: 0, 'word-image': 0 };
  for (const book of [band1, band2, band3]) {
    for (const set of choiceSets(book)) {
      for (const raw of set.questions) {
        const question = normalizeChoiceQuestion(raw, set.key);
        counts[set.family] += 1;
        const seen = new Set();
        for (const permutation of indexPermutations(question.options.length)) {
          seen.add(gradePermutation(question, permutation));
        }
        if (question.options.length === 3) {
          assert.deepEqual([...seen].sort(), [0, 1, 2]);
        }
      }
    }
  }
  for (const family of FAMILIES) assert.ok(counts[family] > 0, family);
  assert.equal(choiceSets(band3).reduce((sum, set) => sum + set.questions.length, 0), 45);
});

test('a saved order survives resume and a wrong answer, and a new attempt may repeat', () => {
  const storage = memoryStorage();
  const raw = [{
    questionId: 'resume-1',
    question: 'Wie heißt der Hund?',
    correctAnswerId: 'milo',
    options: [
      { answerId: 'rudi', text: 'Rudi' },
      { answerId: 'tuko', text: 'Tuko' },
      { answerId: 'milo', text: 'Milo' },
    ],
  }];
  let calls = 0;
  const random = () => {
    calls += 1;
    return calls <= 2 ? 0 : 0.999;
  };
  const first = createChoiceSession({
    bookId: 'band3', puzzleKey: 'resume', rawQuestions: raw, scope: 'resume', storage, random,
  });
  const order = first.display().map((option) => option.answerId);
  assert.deepEqual(order, ['tuko', 'milo', 'rudi']);
  const callsAfterDisplay = calls;
  const wrong = first.answer('rudi');
  assert.equal(wrong.correct, false);
  assert.deepEqual(wrong.order, order);
  assert.equal(calls, callsAfterDisplay);

  let allowRetry = false;
  const resumed = createChoiceSession({
    bookId: 'band3',
    puzzleKey: 'resume',
    rawQuestions: raw,
    scope: 'resume',
    storage,
    random: () => {
      if (!allowRetry) throw new Error('resume must not reshuffle');
      return 0.999;
    },
  });
  assert.deepEqual(resumed.display().map((option) => option.answerId), order);
  assert.equal(resumed.answer('milo').correct, true);

  allowRetry = true;
  const retried = resumed.retry();
  assert.deepEqual(retried[0].map((option) => option.answerId), ['rudi', 'tuko', 'milo']);
  assert.equal(resumed.questions[0].correctAnswerId, 'milo');
  const repeated = resumed.retry();
  assert.deepEqual(
    repeated[0].map((option) => option.answerId),
    retried[0].map((option) => option.answerId),
  );
});

test('anlaut uses object ids, and the first cards are not the answer key', () => {
  const page = band3.pages.find((item) => item.puzzleType === 'initial-sounds');
  const correct = anlautCorrectIds(page.items);
  assert.deepEqual(correct, ['hund', 'hut', 'hase', 'haus']);
  assert.equal(anlautSolved(correct, page.items.slice(0, 4).map((item) => item.id)), false);
  assert.equal(anlautSolved(correct, ['haus', 'hase', 'hut', 'hund']), true);
  const storage = memoryStorage();
  const shuffled = ensureIdOrder({
    bookId: 'band3',
    puzzleKey: 'anlaut',
    listKey: 'anlaut',
    items: page.items,
    idOf: (item) => item.id,
    storage,
    random: () => 0,
  });
  assert.notDeepEqual(shuffled.map((item) => item.id), page.items.map((item) => item.id));
  assert.deepEqual(anlautCorrectIds(shuffled), correct);
  const again = ensureIdOrder({
    bookId: 'band3',
    puzzleKey: 'anlaut',
    listKey: 'anlaut',
    items: page.items,
    idOf: (item) => item.id,
    storage,
    random: () => 0.2,
  });
  assert.deepEqual(again.map((item) => item.id), shuffled.map((item) => item.id));
});

test('memory matches pairId and cardId, then a new attempt shuffles', () => {
  const page = band3.pages.find((item) => item.puzzleType === 'memory');
  const deck = memoryDeck(page.pairs);
  assert.equal(deck.length, 12);
  assert.equal(new Set(deck.map((card) => card.cardId)).size, 12);
  const miloA = deck.find((card) => card.cardId === 'milo:a');
  const miloB = deck.find((card) => card.cardId === 'milo:b');
  assert.equal(isMemoryMatch(miloA, miloB), true);
  assert.equal(isMemoryMatch(miloA, miloA), false);
  assert.equal(isMemoryMatch(miloA, deck.find((card) => card.pairId === 'lotti')), false);
  const storage = memoryStorage();
  const first = ensureIdOrder({
    bookId: 'band3', puzzleKey: 'memory', listKey: 'memory-deck', items: deck,
    idOf: (card) => card.cardId, storage, random: () => 0,
  });
  const fresh = ensureIdOrder({
    bookId: 'band3', puzzleKey: 'memory', listKey: 'memory-deck', items: deck,
    idOf: (card) => card.cardId, storage, random: () => 0.999, fresh: true,
  });
  assert.notDeepEqual(first.map((card) => card.cardId), fresh.map((card) => card.cardId));
  assert.equal(isMemoryMatch(fresh.find((card) => card.cardId === 'tuch:a'), fresh.find((card) => card.cardId === 'tuch:b')), true);
});

test('painted hotspots stay in source order', () => {
  const hotspots = band3.pages.find((item) => item.puzzleType === 'search').hotspots;
  assert.deepEqual(fixedHotspots(hotspots).map((spot) => spot.id), hotspots.map((spot) => spot.id));
  for (const file of ['js/puzzles/search.js', 'js/puzzles/differences.js']) {
    const source = fs.readFileSync(file, 'utf8');
    assert.match(source, /fixedHotspots/);
    assert.equal(source.includes('shuffleItems'), false);
  }
  const differences = band3.pages.find((item) => item.puzzleType === 'differences');
  assert.deepEqual(
    fixedHotspots(differences.hotspots).map((spot) => spot.id),
    ['halstuch', 'brille', 'loeffel', 'blume', 'rad'],
  );
});

test('maze route accepts only the single through-path', () => {
  const maze = band3.pages.find((item) => item.puzzleType === 'maze');
  assert.equal(traceFollowsRoute(maze.route, maze.route, maze.deadEnds), true);
  assert.equal(traceFollowsRoute([maze.route[0], maze.route.at(-1)], maze.route, maze.deadEnds), false);
  assert.equal(traceFollowsRoute([...maze.route, maze.deadEnds[0]], maze.route, maze.deadEnds), false);
  const straight = [maze.route[0], { x: 50, y: 50 }, maze.route.at(-1)];
  assert.equal(traceFollowsRoute(straight, maze.route, maze.deadEnds, { waypointRadius: 2 }), false);
});

test('Band 3 keeps Band 2 game order and does not rename Milo', () => {
  const types = (book) => book.pages.filter((page) => page.type === 'puzzle').map((page) => page.puzzleType);
  assert.deepEqual(types(band3), types(band2));
  assert.equal(band3.pages.filter((page) => page.type === 'story').length, 16);
  assert.equal(band3.pages.filter((page) => page.type === 'puzzle').length, 16);
  assert.equal(band3.pages.filter((page) => page.type === 'cover').length, 1);
  const text = band3.pages.filter((page) => page.type === 'story')
    .flatMap((page) => [page.left.text, page.right.text]).join('\n');
  assert.equal(text.includes('Nilo'), false);
  assert.equal(text.includes('Milo'), true);
  assert.equal(band2.pages.find((page) => page.type === 'story').left.text.startsWith('Das ist Bruno, das Capybara.'), true);
  assert.equal(band1.pages.some((page) => page.type === 'story' && page.left.text.includes('Lotti')), true);
  const positions = new Set();
  for (const set of choiceSets(band3)) {
    if (set.family === 'quiz' || set.family === 'comprehension' || set.family === 'profile' || set.family === 'word-image') {
      for (const raw of set.questions) {
        const index = raw.options.findIndex((option) => (option.answerId || option.id) === raw.correctAnswerId);
        positions.add(index);
      }
    }
  }
  assert.deepEqual([...positions].sort(), [0, 1, 2]);
});

test('Band 3 illustration files exist and use repo-relative paths', () => {
  const text = fs.readFileSync(new URL('../books/band3.js', import.meta.url), 'utf8');
  assert.equal(text.includes('"/'), false);
  const paths = [...text.matchAll(/images\/(?:band2|band3)\/[^"]+/g)].map((match) => match[0]);
  assert.ok(paths.length > 40);
  for (const rel of new Set(paths)) {
    assert.equal(fs.existsSync(new URL(`../${rel}`, import.meta.url)), true, rel);
  }
});

test('shuffle moves whole objects and may repeat an order', () => {
  const items = [
    { answerId: 'a', label: 'A', image: 'a.webp' },
    { answerId: 'b', label: 'B', image: 'b.webp' },
    { answerId: 'c', label: 'C', image: 'c.webp' },
  ];
  const once = shuffleItems(items, sequence([0.999, 0.999]));
  const twice = shuffleItems(items, sequence([0.999, 0.999]));
  assert.deepEqual(once.map((item) => item.answerId), ['a', 'b', 'c']);
  assert.deepEqual(twice, once);
  assert.equal(once[0], items[0]);
});
