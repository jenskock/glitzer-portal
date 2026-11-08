const STORAGE_SUFFIX = '-choice-orders';

export const WRONG_HINT = 'Schau noch einmal genau.';

function defaultStorage() {
  try {
    if (typeof localStorage !== 'undefined') return localStorage;
  } catch {
    // Private mode still leaves the book playable for this page view.
  }
  return memoryStorage();
}

export function memoryStorage() {
  const map = new Map();
  return {
    getItem(key) {
      return map.has(key) ? map.get(key) : null;
    },
    setItem(key, value) {
      map.set(key, String(value));
    },
    removeItem(key) {
      map.delete(key);
    },
  };
}

export function randomSource() {
  const custom = globalThis.__GLITZER_RANDOM__;
  return typeof custom === 'function' ? custom : Math.random;
}

export function choiceStorageKey(bookId) {
  return `glitzer-portal-${bookId}${STORAGE_SUFFIX}`;
}

function slug(text) {
  return String(text)
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80);
}

function optionLabel(option) {
  if (typeof option === 'string') return option;
  return option.text || option.name || option.label || '';
}

function readOrders(storage, bookId) {
  try {
    const raw = storage.getItem(choiceStorageKey(bookId));
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function writeOrders(storage, bookId, orders) {
  storage.setItem(choiceStorageKey(bookId), JSON.stringify(orders));
}

export function normalizeChoiceQuestion(raw, scope = 'question') {
  const prompt = raw.question || raw.word || '';
  const questionId = raw.questionId || `${scope}:${slug(prompt) || 'frage'}`;
  const used = new Set();
  const options = (raw.options || []).map((option, index) => {
    const label = optionLabel(option);
    const base = typeof option === 'string'
      ? (slug(label) || `option-${index + 1}`)
      : (option.answerId || option.id || slug(label) || `option-${index + 1}`);
    let answerId = base;
    let n = 2;
    while (used.has(answerId)) {
      answerId = `${base}-${n}`;
      n += 1;
    }
    used.add(answerId);
    const image = typeof option === 'string' ? null : (option.image || null);
    return {
      answerId,
      label,
      image,
      alt: typeof option === 'string' ? label : (option.alt || label),
    };
  });

  let correctAnswerId = raw.correctAnswerId || null;
  if (!correctAnswerId) {
    const flagged = (raw.options || []).findIndex((option) => (
      option && typeof option === 'object' && option.correct === true
    ));
    if (flagged >= 0) {
      correctAnswerId = options[flagged].answerId;
    } else if (typeof raw.correct === 'number') {
      correctAnswerId = options[raw.correct]?.answerId || null;
    } else if (typeof raw.correct === 'string') {
      correctAnswerId = raw.correct;
    }
  }

  if (!options.some((option) => option.answerId === correctAnswerId)) {
    throw new Error(`Frage „${prompt}“ hat keine gültige correctAnswerId`);
  }

  return {
    questionId,
    prompt,
    word: raw.word || null,
    options,
    correctAnswerId,
  };
}

export function isCorrectChoice(question, answerId) {
  return answerId === question.correctAnswerId;
}

export function shuffleItems(items, random = Math.random) {
  const next = items.slice();
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    const current = next[i];
    next[i] = next[j];
    next[j] = current;
  }
  return next;
}

export function indexPermutations(length) {
  const result = [];
  const used = new Array(length).fill(false);
  const current = [];

  function walk() {
    if (current.length === length) {
      result.push(current.slice());
      return;
    }
    for (let index = 0; index < length; index += 1) {
      if (used[index]) continue;
      used[index] = true;
      current.push(index);
      walk();
      current.pop();
      used[index] = false;
    }
  }

  walk();
  return result;
}

export function applyIndexPermutation(items, indexes) {
  return indexes.map((index) => items[index]);
}

function sameIdSet(saved, ids) {
  if (!Array.isArray(saved) || saved.length !== ids.length) return false;
  if (new Set(saved).size !== saved.length) return false;
  const expected = new Set(ids);
  return saved.every((id) => expected.has(id));
}

function orderByIds(items, ids, idOf) {
  if (!sameIdSet(ids, items.map(idOf))) return null;
  const byId = new Map(items.map((item) => [idOf(item), item]));
  return ids.map((id) => byId.get(id));
}

export function ensureQuestionOrder({
  bookId,
  puzzleKey,
  question,
  storage = defaultStorage(),
  random = randomSource(),
  fresh = false,
}) {
  const all = readOrders(storage, bookId);
  const bucket = { ...(all[puzzleKey] || {}) };
  if (!fresh) {
    const existing = orderByIds(question.options, bucket[question.questionId], (option) => option.answerId);
    if (existing) return existing;
  }
  const shuffled = shuffleItems(question.options, random);
  bucket[question.questionId] = shuffled.map((option) => option.answerId);
  all[puzzleKey] = bucket;
  writeOrders(storage, bookId, all);
  return shuffled;
}

export function retryQuestions({
  bookId,
  puzzleKey,
  questions,
  storage = defaultStorage(),
  random = randomSource(),
}) {
  const all = readOrders(storage, bookId);
  const bucket = {};
  const displays = questions.map((question) => {
    const shuffled = shuffleItems(question.options, random);
    bucket[question.questionId] = shuffled.map((option) => option.answerId);
    return shuffled;
  });
  all[puzzleKey] = bucket;
  writeOrders(storage, bookId, all);
  return displays;
}

export function createChoiceSession({
  bookId,
  puzzleKey,
  rawQuestions,
  scope,
  storage = defaultStorage(),
  random = randomSource(),
}) {
  const questions = rawQuestions.map((raw, index) => (
    normalizeChoiceQuestion(raw, `${scope || puzzleKey}:${index}`)
  ));
  const state = { index: 0 };
  questions.forEach((question) => {
    ensureQuestionOrder({ bookId, puzzleKey, question, storage, random, fresh: false });
  });

  return {
    questions,
    get index() {
      return state.index;
    },
    get done() {
      return state.index >= questions.length;
    },
    current() {
      return questions[state.index];
    },
    display() {
      return ensureQuestionOrder({
        bookId,
        puzzleKey,
        question: questions[state.index],
        storage,
        random,
        fresh: false,
      });
    },
    answer(answerId) {
      const question = questions[state.index];
      const order = this.display().map((option) => option.answerId);
      return {
        correct: isCorrectChoice(question, answerId),
        order,
        correctAnswerId: question.correctAnswerId,
      };
    },
    advance() {
      state.index += 1;
    },
    retry() {
      state.index = 0;
      return retryQuestions({ bookId, puzzleKey, questions, storage, random });
    },
  };
}

export function ensureIdOrder({
  bookId,
  puzzleKey,
  listKey,
  items,
  idOf,
  storage = defaultStorage(),
  random = randomSource(),
  fresh = false,
}) {
  const all = readOrders(storage, bookId);
  const bucket = { ...(all[puzzleKey] || {}) };
  if (!fresh) {
    const existing = orderByIds(items, bucket[listKey], idOf);
    if (existing) return existing;
  }
  const shuffled = shuffleItems(items, random);
  bucket[listKey] = shuffled.map(idOf);
  all[puzzleKey] = bucket;
  writeOrders(storage, bookId, all);
  return shuffled;
}

export function fixedHotspots(hotspots) {
  return hotspots.map((hotspot) => ({ ...hotspot }));
}

export function memoryDeck(pairs) {
  return pairs.flatMap((pair) => ([
    { pairId: pair.id, cardId: `${pair.id}:a`, name: pair.name, image: pair.image },
    { pairId: pair.id, cardId: `${pair.id}:b`, name: pair.name, image: pair.image },
  ]));
}

export function isMemoryMatch(first, second) {
  return Boolean(first && second && first.cardId !== second.cardId && first.pairId === second.pairId);
}

export function anlautCorrectIds(items) {
  return items.filter((item) => item.correct).map((item) => item.id);
}

export function anlautSolved(correctIds, tappedIds) {
  const tapped = new Set(tappedIds);
  return correctIds.length > 0 && correctIds.every((id) => tapped.has(id));
}
