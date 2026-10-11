const KEY_PREFIX = 'glitzer-portal-';

function progressKey(bookId) {
  return `${KEY_PREFIX}${bookId}-progress`;
}

function legacyPageKey(bookId) {
  return `${KEY_PREFIX}${bookId}-page`;
}

function emptyProgress() {
  return { page: 0, read: [] };
}

function isPageIndex(value, pageCount) {
  return Number.isInteger(value) && value >= 0 && value < pageCount;
}

function normalize(value, pageCount) {
  const read = Array.isArray(value?.read)
    ? [...new Set(value.read.filter((index) => isPageIndex(index, pageCount)))].sort((a, b) => a - b)
    : [];
  const page = isPageIndex(value?.page, pageCount) ? value.page : 0;
  return { page, read };
}

export function loadReadingProgress(bookId, pageCount, storage = localStorage) {
  if (pageCount < 1) return emptyProgress();

  try {
    const stored = storage.getItem(progressKey(bookId));
    if (stored) return normalize(JSON.parse(stored), pageCount);

    const legacy = storage.getItem(legacyPageKey(bookId));
    if (legacy === null) return emptyProgress();

    const page = parseInt(legacy, 10);
    if (!isPageIndex(page, pageCount)) return emptyProgress();

    const read = [];
    for (let index = 0; index <= page; index += 1) read.push(index);
    return { page, read };
  } catch {
    return emptyProgress();
  }
}

export function markPageRead(progress, pageIndex, pageCount) {
  const current = normalize(progress, pageCount);
  if (!isPageIndex(pageIndex, pageCount)) return current;

  const read = current.read.includes(pageIndex)
    ? current.read
    : [...current.read, pageIndex].sort((a, b) => a - b);

  return { page: pageIndex, read };
}

export function saveReadingProgress(bookId, progress, storage = localStorage) {
  try {
    storage.setItem(progressKey(bookId), JSON.stringify(progress));
    storage.removeItem(legacyPageKey(bookId));
  } catch {
    // Private mode and full storage still leave the book readable.
  }
}
