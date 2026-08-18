'use strict';

/**
 * Deterministic option arrangement for exam items.
 *
 * One implementation, two callers: scripts/build-exam.js renders from it and
 * scripts/check-exam-cues.js audits what it produces. If the builder and the
 * auditor arranged options separately they would eventually disagree, and the
 * gate would be checking an exam no student ever sits. That is the same reason
 * canvas-parse-core.js is inlined into the Skills Lens rather than copied.
 *
 * ── Why arrangement is not left to the author ────────────────────────────────
 *
 * Writing an item means writing the correct answer first and the distractors
 * afterwards, so an authored file drifts toward the key sitting at A. The first
 * draft of the version 3 content module put the key at A in 37 of 40 items
 * without anybody intending it. Position is a cue exactly like length is a cue,
 * and the fix belongs in the machine rather than in the author's memory.
 *
 * ── Why not simply randomize ─────────────────────────────────────────────────
 *
 * A random shuffle gives an uneven distribution often enough to matter, and it
 * would make the generated package differ on every build, which would break the
 * reproducibility check the offline suite runs. The arrangement here is a pure
 * function of the item ids, so it is stable across builds and machines and can
 * still be reasoned about.
 *
 * Balance is exact rather than probabilistic: items are ordered by a hash of
 * their id and then dealt letters round robin, so with 40 items each letter is
 * the key exactly 10 times. The hash ordering is what stops that from producing
 * a visible A, B, C, D, A, B, C, D cycle down the page.
 *
 * Canvas can also shuffle answers at delivery time. That is a good setting and
 * it does not replace this: a shuffle set in Canvas can be switched off, is not
 * applied to a printed copy, and does nothing for the answer key a teacher
 * reads out of the repository.
 */

const LETTERS = ['A', 'B', 'C', 'D'];

/** FNV-1a, 32 bit. Chosen because it is short, has no dependencies, and gives
 *  the same answer on every machine and every Node version, which a hash used
 *  for reproducible output has to do. */
function hash(str) {
  let h = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h >>> 0;
}

/**
 * Arrange every item in an exam.
 *
 * Returns a new array of items, each with `choices`, `key` and `why` rewritten
 * into the delivered order. Input items are not modified, because the content
 * module is required once and shared by both callers.
 */
function arrangeExam(exam) {
  const items = [];
  for (const set of exam.sets || []) {
    for (const item of set.items || []) items.push({ item, set });
  }

  // Deal target letters round robin over a hash ordering. Ties on the hash fall
  // back to the id so the order is total and therefore reproducible.
  const order = items
    .map((entry, index) => ({ index, h: hash(entry.item.id || String(index)), id: entry.item.id || '' }))
    .sort((a, b) => (a.h - b.h) || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));

  const target = new Map();
  order.forEach((row, i) => target.set(row.index, LETTERS[i % LETTERS.length]));

  return items.map((entry, index) => {
    const { item } = entry;
    const targetLetter = target.get(index);
    const letters = Object.keys(item.choices || {}).sort();

    // An item that is structurally broken is passed through untouched so the
    // structure check in check-exam-cues.js is what reports it, rather than this
    // throwing an unrelated error first.
    if (letters.join('') !== 'ABCD' || !letters.includes(item.key)) {
      return { ...item, set: entry.set };
    }

    const distractors = letters.filter(l => l !== item.key);

    // Rotate the distractors by the item's own hash so the same three do not
    // always land in the same relative order once the key is placed.
    const rot = hash(`${item.id}:d`) % distractors.length;
    const rotated = distractors.slice(rot).concat(distractors.slice(0, rot));

    const slots = LETTERS.filter(l => l !== targetLetter);
    const mapping = new Map();          // delivered letter -> authored letter
    mapping.set(targetLetter, item.key);
    slots.forEach((slot, i) => mapping.set(slot, rotated[i]));

    const choices = {};
    const why = {};
    for (const slot of LETTERS) {
      const from = mapping.get(slot);
      choices[slot] = item.choices[from];
      if (item.why && item.why[from] !== undefined) why[slot] = item.why[from];
    }

    return {
      ...item,
      set: entry.set,
      choices,
      why: Object.keys(why).length ? why : undefined,
      key: targetLetter,
      authoredKey: item.key
    };
  });
}

module.exports = { arrangeExam, hash };
