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

/** British form -> American form, matched as a stem so that one entry covers
 *  centre/centres/centred and labour/labourer/labouring. */
const SPELLINGS = [
  ['favour', 'favor'], ['colour', 'color'], ['behaviour', 'behavior'],
  ['neighbour', 'neighbor'], ['labour', 'labor'], ['centre', 'center'],
  ['metre', 'meter'], ['organis', 'organiz'], ['recognis', 'recogniz'],
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
  // 'Labouring Population',  // title of Chadwick's 1842 report
  // 'British Labour government',  // name of a political party
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

function exempt(text, index, span) {
  return ALLOWED_STRINGS.some(allowed => {
    const at = text.indexOf(allowed);
    return at !== -1 && index >= at && index + span <= at + allowed.length;
  });
}

/** Every rule that applies to one student-facing string. */
function checkString(file, where, text) {
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
  if (!/\.dates$/.test(where)) {
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
console.log(`\nStyle: ${files} content module${files === 1 ? '' : 's'} match the house style.`);
