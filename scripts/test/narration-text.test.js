#!/usr/bin/env node
'use strict';
// Recorded narration says a historian's numbers and names the way a historian
// would. Offline and in the push gate.
//
// scripts/lib/narration-text.js turns "the 1490s" into "the fourteen nineties"
// and "Abbas I" into "Abbas the First" before a speech model ever sees the text.
// This proves the rules, and it proves the one thing no rule can do on its own:
// that every name followed by a Roman numeral in the eBook has been reviewed by
// a person, because "Abbas I" and "Am I" look the same to a regular expression.
//
// Every assertion that guards the eBook has a negative control beside it, so a
// green run means the check looked, not that it could not see.

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { forSpeech, spokenYear, spokenDecade, numeralPairs, NUMERALS } = require('../lib/narration-text');

const ROOT = path.resolve(__dirname, '..', '..');
let passed = 0;
function check(name, fn) {
  try { fn(); passed++; } catch (e) {
    console.error(`FAIL ${name}\n  ${e.message}`);
    process.exitCode = 1;
  }
}

// ── The spoken forms ────────────────────────────────────────────────────────
check('years are said the way a historian says them', () => {
  const cases = {
    1453: 'fourteen fifty three', 1900: 'nineteen hundred', 1905: 'nineteen oh five',
    1066: 'ten sixty six', 830: 'eight thirty', 500: 'five hundred', 3500: 'thirty five hundred',
    9600: 'ninety six hundred', 2000: 'two thousand', 2008: 'two thousand eight', 2010: 'twenty ten',
    1000: 'one thousand', 45: 'forty five'
  };
  for (const [n, want] of Object.entries(cases)) assert.strictEqual(spokenYear(Number(n)), want, n);
  assert.throws(() => spokenYear(12000));
});

check('decades are plural years, never "seconds"', () => {
  assert.strictEqual(spokenDecade(1490), 'fourteen nineties');
  assert.strictEqual(spokenDecade(1900), 'nineteen hundreds');
  assert.strictEqual(spokenDecade(830), 'eight thirties');
  assert.strictEqual(forSpeech('In the 1490s and the 1500s.'), 'In the fourteen nineties and the fifteen hundreds.');
});

check('the 2026-11-07 history test reads as it was approved', () => {
  const input = 'In the 1490s, Portuguese ships reached India. Mehmed II took Constantinople in 1453, and Louis XIV built Versailles. ' +
    'Farming began around 9600 BCE, and Zhu Xi wrote around 1130 CE. Chapter VII ends with World War II, a war of the 1940s. ' +
    'Abbas I rebuilt Isfahan c. 1598. Confucius lived c. 551 to 479 BCE. Am I right? The Double V campaign.';
  const want = 'In the fourteen nineties, Portuguese ships reached India. Mehmed the Second took Constantinople in 1453, and Louis the Fourteenth built Versailles. ' +
    'Farming began around ninety six hundred B C E, and Zhu Xi wrote around eleven thirty C E. Chapter Seven ends with World War Two, a war of the nineteen forties. ' +
    'Abbas the First rebuilt Isfahan around 1598. Confucius lived around five fifty one to four seventy nine B C E. Am I right? The Double V campaign.';
  assert.strictEqual(forSpeech(input), want);
});

check('the fixer is idempotent, so the word check can run it on a transcript too', () => {
  const once = forSpeech('In the 1490s Mehmed II, c. 3500 BCE, and 20,000 BCE.');
  assert.strictEqual(forSpeech(once), once);
  assert.strictEqual(once, 'In the fourteen nineties Mehmed the Second, around thirty five hundred B C E, and 20,000 B C E.');
});

check('a name that is not on the reviewed list is left alone, not guessed', () => {
  assert.strictEqual(forSpeech('Tiglath-Pileser III and Ramesses II.'), 'Tiglath-Pileser III and Ramesses II.');
});

// ── The eBook ───────────────────────────────────────────────────────────────
// The narratable text of every volume: what is inside a data-listenable section,
// with tags removed. Close enough to the browser's extractor for these two
// questions, which are about words, not about chunking.
function narratableText() {
  const dir = path.join(ROOT, 'ebook');
  let text = '';
  for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.html'))) {
    const src = fs.readFileSync(path.join(dir, file), 'utf8');
    const sections = src.match(/<section[^>]*data-listenable="true"[\s\S]*?<\/section>/g) || [];
    for (const s of sections) {
      text += s.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&nbsp;|&#160;/g, ' ').replace(/\s+/g, ' ') + '\n';
    }
  }
  return text;
}
const EBOOK = narratableText();

function unreviewed(text) {
  return [...new Set(numeralPairs(text).filter(([word]) => !NUMERALS[word]).map(p => p.join(' ')))];
}

check('the eBook has narratable text to check (a vacuous pass is a fail)', () => {
  assert.ok(EBOOK.length > 100000, `only ${EBOOK.length} characters of narratable text found`);
  assert.ok(numeralPairs(EBOOK).length > 50, 'the eBook should contain dozens of regnal numerals');
});

check('every name followed by a Roman numeral in the eBook has been reviewed', () => {
  const missing = unreviewed(EBOOK);
  assert.deepStrictEqual(missing, [],
    `add these to NUMERALS in scripts/lib/narration-text.js, saying how each is spoken: ${missing.join(', ')}`);
});

check('negative control: an unreviewed ruler is caught', () => {
  assert.deepStrictEqual(unreviewed(EBOOK + ' Tiglath III ruled Assyria.'), ['Tiglath III']);
});

check('no decade in the eBook reaches the speech model as digits', () => {
  const left = forSpeech(EBOOK).match(/\b\d{3,4}'?s\b/g) || [];
  assert.deepStrictEqual(left, [], `still digits: ${[...new Set(left)].slice(0, 10).join(', ')}`);
});

check('negative control: the decade check sees an unconverted decade', () => {
  assert.ok(/\b\d{3,4}'?s\b/.test(EBOOK), 'the raw eBook text should contain decades');
});

check('no era marker in the eBook reaches the speech model attached to digits', () => {
  const left = forSpeech(EBOOK).match(/\b\d{1,4} (?:BCE|CE)\b/g) || [];
  assert.deepStrictEqual(left, [], `still digits: ${[...new Set(left)].slice(0, 10).join(', ')}`);
});

check('negative control: the era check sees an unconverted era date', () => {
  assert.ok(/\b\d{1,4} (?:BCE|CE)\b/.test(EBOOK), 'the raw eBook text should contain BCE or CE dates');
});

if (!process.exitCode) console.log(`narration-text: ${passed} checks passed`);
