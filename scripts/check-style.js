#!/usr/bin/env node
'use strict';

/**
 * The mechanical half of the BeHistorical house style.
 *
 *   node scripts/check-style.js            check, print every violation
 *   node scripts/check-style.js --list     print the rules and exit
 *
 * Why this exists rather than a checklist. Style rules kept in a document are
 * rediscovered on every proofreading pass and applied unevenly, which is how a
 * chapter ends up with 23 "centre" and 51 "c.1200" while every structural check
 * stays green. The rules below are the subset a machine can decide without
 * judgment, so they belong here. Everything a machine cannot decide, which is
 * most of what matters, is in docs/STYLE.md and is a human's job.
 *
 * What it checks, and only what it checks:
 *
 *   1. American English spelling. British forms in student-facing prose.
 *   2. Date form. `c.` takes a space: `c. 1200`, never `c.1200`.
 *   3. No em or en dashes in prose. The one exception is the `dates` field,
 *      which is a metadata line rather than a sentence.
 *   4. Note labels. A student should recognize a recurring feature instantly,
 *      so a misconception note is always "Common mistake to avoid" and a
 *      sourcing note always begins "How we know". The prefix rule leaves room
 *      for a specific tail, such as "How we know: a wreck is a sealed sample".
 *
 * Scope, deliberately narrow. It reads the deep-reading content modules, which
 * are the source of both the standalone deep readings and the eBook. It does
 * NOT touch the 77 First & 10 readings, and that is not an oversight:
 * readings-golden.js and foundations-golden.js pin those word for word against
 * committed fixtures of the hand-authored originals, so changing a spelling
 * there fails a test whose entire purpose is to prove no words were lost. That
 * sweep is a separate, deliberate decision about re-baselining fixtures, and it
 * is written up in docs/STYLE.md rather than smuggled in here.
 *
 * FIRST & 10 SCOPE, added 2026-09-22, under a ratchet. The reading content
 * modules are checked too, but about 150 violations already sat in readings
 * that are published and pinned by golden fixtures, and rewriting them all at
 * once was ruled out. So the violations present on that date are recorded in
 * scripts/lib/style-baseline-first10.json and tolerated. Anything NOT in that
 * list fails, so no new dash or British spelling can enter a First & 10. And a
 * baseline entry that no longer occurs also fails, so the list can only
 * shrink: when a reading is revised, its old violations have to be fixed in
 * the same edit rather than carried along. `--write-baseline` exists for the
 * record, not for convenience; adding an entry to it is re-approving a defect.
 * Titles, headings, labels and vocabulary chips are not prose, so the dash rule
 * skips them, which is the global writing rule's own exception.
 *
 * EXCEPTIONS are real and principled: proper nouns, titles of works and direct
 * quotations keep the spelling their source used. "Report on the Sanitary
 * Condition of the Labouring Population" is a title, and "the British Labour
 * government" is a name. Add such a string to ALLOWED_STRINGS with a reason
 * rather than weakening a rule.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIRS = [path.join(ROOT, 'scripts', 'lib', 'deep-reading-content')];
const FIRST10_MODULES = [
  ...fs.readdirSync(path.join(ROOT, 'scripts', 'lib', 'reading-content')).filter(f => f.endsWith('.js')).sort()
    .map(f => path.join(ROOT, 'scripts', 'lib', 'reading-content', f)),
  path.join(ROOT, 'scripts', 'lib', 'foundations-f10-content.js'),
  path.join(ROOT, 'scripts', 'lib', 'f10-content.js')
];
const FIRST10_BASELINE = path.join(ROOT, 'scripts', 'lib', 'style-baseline-first10.json');
// Keys that are paths or identifiers, never read by a student as text.
const FIRST10_SKIP = new Set(['sourceFile', 'lessonPage', 'lessonFile', 'unitDir', 'topicKey', 'embedUrl']);
// Keys that are titles, headings or labels: spelling applies, the dash rule does not.
const FIRST10_NOT_PROSE = new Set(['docTitle', 'headerSubtitle', 'titleHtml', 'heading', 'label', 'topicLabel', 'moduleBadge', 'moduleName', 'readingEyebrow', 'checkBadge', 'checkTitle']);

/** British form -> American form, matched as a stem so that one entry covers
 *  centre/centres/centred and labour/labourer/labouring.
 *
 *  A stem is a regular expression, and one entry needs to be, because a stem
 *  can be too greedy: `organis` catches organise and organisation and also
 *  catches `organism`, which is correct in American English and is a word any
 *  chapter about ecology, disease or evolution will use repeatedly. The fix is
 *  a lookahead on that entry rather than exemptions in ALLOWED_STRINGS, because
 *  the exemption list is for proper nouns and titles, and burying a rule's own
 *  false positives in it is how a rule stops meaning anything. */
const SPELLINGS = [
  ['favour', 'favor'], ['colour', 'color'], ['behaviour', 'behavior'],
  ['neighbour', 'neighbor'], ['labour', 'labor'], ['centre', 'center'],
  ['metre', 'meter'], ['organis(?!m)', 'organiz'], ['recognis', 'recogniz'],
  ['civilis', 'civiliz'], ['defence', 'defense'], ['offence', 'offense'],
  ['licence', 'license'], ['practise', 'practice'], ['travelling', 'traveling'],
  ['travelled', 'traveled'], ['labelled', 'labeled'], ['modelling', 'modeling'],
  ['fuelled', 'fueled'], ['cancelled', 'canceled'], ['programme', 'program'],
  ['plough', 'plow'], ['mould', 'mold'], ['whilst', 'while'],
  ['amongst', 'among'], ['grey', 'gray']
];

/**
 * Substrings that legitimately contain a flagged form. A proper noun, a title,
 * or a quotation keeps its source's spelling; nothing else belongs here.
 * Every entry carries the reason it is exempt.
 */
const ALLOWED_STRINGS = [
  'Statute of Labourers',  // title of the English statute of 1351
  'Labouring Population',  // title of Chadwick's 1842 sanitary report
  'Labour Representation Committee',  // name of the 1900 body
  'Labour Party',  // name of a political party
  'civilisatrice',  // French: the doctrine's name is mission civilisatrice, not an English word
  'Chinese Labour Corps',  // name of the British labor corps raised in China, 1916
  'International Labour Organization',  // name of the United Nations agency, founded 1919
];

/** A misconception note always carries this exact label. */
const MISCONCEPTION_LABEL = 'Common mistake to avoid';
/** A sourcing note's label always starts here, and may carry a specific tail. */
const HOWKNOW_PREFIX = 'How we know';

const violations = [];

function report(file, where, rule, detail) {
  violations.push({ file: path.relative(ROOT, file), where, rule, detail });
}

/** A short window around a match, so the reader can see what to change. */
function context(text, index, span) {
  const start = Math.max(0, index - 45);
  const end = Math.min(text.length, index + span + 45);
  return (start ? '...' : '') + text.slice(start, end).replace(/\s+/g, ' ') + (end < text.length ? '...' : '');
}

/**
 * Is this match inside an allowed proper noun or title?
 *
 * Every occurrence is checked, not only the first. Testing `indexOf` alone
 * exempts a phrase the first time a paragraph names it and flags it the
 * second, which reads as a spelling error in a sentence identical to one that
 * just passed, and the fix a writer reaches for is to stop naming the thing.
 */
function exempt(text, index, span) {
  return ALLOWED_STRINGS.some(allowed => {
    for (let at = text.indexOf(allowed); at !== -1; at = text.indexOf(allowed, at + 1)) {
      if (index >= at && index + span <= at + allowed.length) return true;
    }
    return false;
  });
}

/** Every rule that applies to one student-facing string. */
function checkString(file, where, text, opts = {}) {
  for (const [british, american] of SPELLINGS) {
    const re = new RegExp(british, 'gi');
    let m;
    while ((m = re.exec(text)) !== null) {
      if (exempt(text, m.index, m[0].length)) continue;
      report(file, where, 'spelling', `"${m[0]}" -> "${american}${''}": ${context(text, m.index, m[0].length)}`);
    }
  }

  const dateRe = /c\.\d/g;
  let d;
  while ((d = dateRe.exec(text)) !== null) {
    report(file, where, 'date form', `"c." needs a space before the year: ${context(text, d.index, 4)}`);
  }

  // The dates field is a metadata line, not a sentence, so a dash is fine there.
  if (!/\.dates$/.test(where) && !opts.notProse) {
    const dashRe = /[–—]/g;
    let x;
    while ((x = dashRe.exec(text)) !== null) {
      report(file, where, 'dash', `no em or en dashes in prose: ${context(text, x.index, 1)}`);
    }
  }
}

/** Walk every string in a loaded content module, tracking where it came from. */
function walk(file, node, where) {
  if (typeof node === 'string') return checkString(file, where, node);
  if (Array.isArray(node)) return node.forEach((v, i) => walk(file, v, `${where}[${i}]`));
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) walk(file, v, where ? `${where}.${k}` : k);
  }
}

function checkNoteLabels(file, topic) {
  (topic.empires || []).forEach((empire, ei) => {
    (empire.parts || []).forEach((part, pi) => {
      (part.blocks || []).forEach((block, bi) => {
        if (!block.note) return;
        const where = `empires[${ei}].parts[${pi}].blocks[${bi}].note.label`;
        const { kind, label } = block.note;
        if (kind === 'misconception') {
          if (label !== MISCONCEPTION_LABEL) {
            report(file, where, 'note label', `a misconception note is always "${MISCONCEPTION_LABEL}", found "${label}"`);
          }
        } else if (!String(label).startsWith(HOWKNOW_PREFIX)) {
          report(file, where, 'note label', `a sourcing note's label starts "${HOWKNOW_PREFIX}", found "${label}"`);
        }
      });
    });
  });
}

if (process.argv.includes('--list')) {
  console.log('BeHistorical enforced style rules (docs/STYLE.md carries the rest):\n');
  console.log('  1. American English spelling in student-facing prose');
  console.log('  2. "c. 1200", never "c.1200"');
  console.log('  3. No em or en dashes in prose; the dates field is exempt');
  console.log(`  4. Misconception notes are "${MISCONCEPTION_LABEL}"; sourcing notes start "${HOWKNOW_PREFIX}"`);
  process.exit(0);
}

let files = 0;
for (const dir of CONTENT_DIRS) {
  if (!fs.existsSync(dir)) continue;
  for (const name of fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort()) {
    const file = path.join(dir, name);
    const topic = require(file);
    files++;
    walk(file, topic, '');
    checkNoteLabels(file, topic);
  }
}

// First & 10 content, under the ratchet described at the top of this file.
const deepViolations = violations.splice(0);
function walkFirst10(file, node, where) {
  if (typeof node === 'string') {
    const leaf = where.replace(/\[\d+\]$/, '').split('.').pop();
    if (FIRST10_SKIP.has(leaf)) return;
    return checkString(file, where, node, { notProse: FIRST10_NOT_PROSE.has(leaf) || /\.vocabulary\[\d+\]$|\.skillTags\[\d+\]$/.test(where) });
  }
  if (Array.isArray(node)) return node.forEach((v, i) => walkFirst10(file, v, `${where}[${i}]`));
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) {
      if (!FIRST10_SKIP.has(k)) walkFirst10(file, v, where ? `${where}.${k}` : k);
    }
  }
}
for (const file of FIRST10_MODULES) {
  const mod = require(file);
  for (const [key, topic] of Object.entries(mod)) walkFirst10(file, topic, `[${key}]`);
}
const first10Found = violations.splice(0);
const identity = v => `${v.file} ${v.where} ${v.rule} ${v.detail}`;
if (process.argv.includes('--write-baseline')) {
  fs.writeFileSync(FIRST10_BASELINE, JSON.stringify(first10Found.map(identity).sort(), null, 1) + '\n');
  console.log(`Wrote ${first10Found.length} First & 10 baseline entr${first10Found.length === 1 ? 'y' : 'ies'}.`);
  process.exit(0);
}
const baseline = new Set(fs.existsSync(FIRST10_BASELINE) ? JSON.parse(fs.readFileSync(FIRST10_BASELINE, 'utf8')) : []);
const foundIds = new Set(first10Found.map(identity));
violations.push(...deepViolations, ...first10Found.filter(v => !baseline.has(identity(v))));
const stale = [...baseline].filter(id => !foundIds.has(id));
for (const id of stale) {
  violations.push({ file: 'scripts/lib/style-baseline-first10.json', where: 'baseline', rule: 'stale baseline',
    detail: `no longer occurs; the passage was edited, so fix any remaining dash or spelling in it and delete this entry: ${id.slice(0, 160)}` });
}

if (!files) {
  console.error('check-style found no content modules to check, which is itself a failure.');
  process.exit(1);
}

if (violations.length) {
  const byFile = new Map();
  for (const v of violations) {
    if (!byFile.has(v.file)) byFile.set(v.file, []);
    byFile.get(v.file).push(v);
  }
  for (const [file, list] of byFile) {
    console.error(`\n${file}  (${list.length})`);
    for (const v of list) console.error(`  [${v.rule}] ${v.where}\n      ${v.detail}`);
  }
  console.error(`\nStyle: ${violations.length} violation${violations.length === 1 ? '' : 's'} in ${byFile.size} file${byFile.size === 1 ? '' : 's'}.`);
  console.error('Fix the content module, never the generated page, then run: npm run build:deep-readings && npm run build:ebook');
  process.exit(1);
}

console.log(`  ok   American English, date form, no prose dashes, note labels`);
console.log(`  ok   First & 10: no new violations; ${baseline.size} older one${baseline.size === 1 ? '' : 's'} still in the baseline to fix when those readings are revised`);
console.log(`\nStyle: ${files} content module${files === 1 ? '' : 's'} match the house style.`);
