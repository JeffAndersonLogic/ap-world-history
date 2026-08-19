'use strict';
/**
 * Proves every stimulus passage is real chapter text.
 *
 * Each stimulus is condensed only by cutting, so every sentence in it must appear
 * verbatim in the deep-reading content module it cites. If a sentence has been
 * reworded, this fails. That is the check that stops a plausible-sounding passage
 * from being quietly invented, which on a course about evidence would be the worst
 * possible defect.
 */
const stimuli = require('./stimuli.js');

const norm = s => String(s)
  .replace(/<[^>]+>/g, '')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
  .replace(/&rsquo;|&#39;|’/g, "'").replace(/&ldquo;|&rdquo;/g, '"')
  .replace(/\s+/g, ' ').trim();

// Flatten a whole chapter module into one normalized string.
function chapterText(n) {
  const m = require(`../../scripts/lib/deep-reading-content/foundations-${n}.js`);
  const out = [];
  const walk = v => {
    if (typeof v === 'string') out.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === 'object') Object.values(v).forEach(walk);
  };
  walk(m.empires);
  return norm(out.join(' '));
}

const chapters = { 1: chapterText(1), 2: chapterText(2), 3: chapterText(3), 4: chapterText(4), 5: chapterText(5) };
let fails = 0, checked = 0;

for (const [id, s] of Object.entries(stimuli)) {
  const n = /Foundations (\d)/.exec(s.cite)[1];
  const hay = chapters[n];
  // Every excerpt must appear verbatim; cuts between excerpts render as an ellipsis.
  const sentences = s.parts;
  for (const sent of sentences.map(norm)) {
    checked++;
    if (!hay.includes(sent)) {
      fails++;
      console.log(`FAIL  ${id} (Foundations ${n}): not found verbatim in the chapter`);
      console.log(`      "${sent.slice(0, 110)}..."`);
    }
  }
}

console.log(`\nChecked ${checked} excerpts across ${Object.keys(stimuli).length} stimuli.`);
if (fails) { console.log(`${fails} excerpt(s) are not verbatim chapter text.`); process.exit(1); }
console.log('OK. Every stimulus excerpt appears verbatim in the chapter it cites.');
