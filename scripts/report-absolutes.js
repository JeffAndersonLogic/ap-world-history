#!/usr/bin/env node
'use strict';

/**
 * report-absolutes.js, a review tool for overclaims in the deep readings.
 *
 * WHY THIS IS NOT IN THE GATE, AND MUST NOT BE PUT THERE.
 *
 * `npm test` is hard on plumbing and silent on pedagogy. A missing capture
 * block loses a student's work with every other check green, so a machine
 * decides it. Whether "the only complete writing system in the pre-Columbian
 * Americas" is a defensible claim is a judgment about evidence, and a machine
 * that fails a push over it would teach one thing only: add a qualifier until
 * the grep stops matching. That is the opposite of the goal. Hedged prose is
 * not more accurate prose, it is prose that has stopped saying anything.
 *
 * So this prints a list and exits 0 no matter what it finds. A person reads it.
 *
 * WHAT TO DO WITH A HIT. Three outcomes, and the middle one is the common one:
 *
 *   KEEP     The absolute is exactly right and load-bearing. "The only path by
 *            which the three reading answers reach Canvas" is a true statement
 *            about a system with one path, and softening it would hide the
 *            thing the sentence exists to warn about.
 *   NARROW   The claim is too wide, and the repair is a smaller CONCRETE claim
 *            rather than a qualifier. "The richest society on earth" becomes
 *            the largest cities, the deepest commercial economy, the widest
 *            print culture. Narrower and sharper at once, which is the move
 *            this whole tool exists to prompt.
 *   HEDGE    Genuinely contested, so name the dispute: "one influential
 *            interpretation holds that...". Use this least. It is the right
 *            answer for a scholarly argument and the lazy answer for everything
 *            else.
 *
 * Usage:
 *   node scripts/report-absolutes.js              every volume, grouped
 *   node scripts/report-absolutes.js topic-1      one unit
 *   node scripts/report-absolutes.js --counts     totals per file only
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'scripts', 'lib', 'deep-reading-content');

/**
 * Patterns worth a human's attention, most dangerous first.
 *
 * These deliberately do NOT match every "only". A bare "only" is usually doing
 * honest work ("only 27 of 71 topics have a clip"), and a report that fires on
 * every one of them is a report nobody reads twice. What is listed here are the
 * shapes that turn a claim into a ranking, a universal, or a sole cause, which
 * are the three ways a sentence in these chapters actually goes wrong.
 */
const PATTERNS = [
  { id: 'superlative-global',
    why: 'a world ranking, which needs evidence nobody has',
    re: /\b(?:the\s+)?(?:only|first|largest|richest|greatest|most\s+\w+)\b[^.]{0,60}\b(?:on earth|in the world|in history|anywhere|of all)\b/gi },
  { id: 'sole-instance',
    why: 'claims a unique case, so one counterexample sinks it',
    re: /\bthe only\b(?!\s+(?:path|way|place|copy|implementation|thing that)\b)/gi },
  { id: 'alone-among',
    why: 'a comparative uniqueness claim across regions',
    re: /\balone among\b|\bunlike (?:any|every) other\b|\bno other \w+ (?:had|did|could)\b/gi },
  { id: 'universal-people',
    why: 'a universal about people, which is almost never true',
    re: /\b(?:every|all|nearly all|almost all|no)\s+(?:one|body|person|people|peasant|worker|woman|women|men|ruler|rulers|state|states|society|societies)\b/gi },
  { id: 'never-always',
    why: 'an exceptionless rule; make it probabilistic or name the exception',
    re: /\b(?:never|always|cannot ever|can never|nothing (?:but|else|could|can))\b/gi },
  { id: 'sole-cause',
    why: 'a single cause for a large outcome',
    re: /\b(?:the (?:one|single) (?:thing|reason|cause|factor)|entirely because|purely because|solely)\b/gi },
];

const TARGET = process.argv.slice(2).find(a => !a.startsWith('--'));
const COUNTS_ONLY = process.argv.includes('--counts');

/** A readable window around a match. */
function context(text, index, span) {
  const start = Math.max(0, index - 70);
  const end = Math.min(text.length, index + span + 90);
  return (start ? '...' : '') +
    text.slice(start, end).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() +
    (end < text.length ? '...' : '');
}

const findings = [];

function scanString(file, where, text) {
  // The module's own header comment and the how-to steps are scaffolding for
  // the writer, not claims made to a student, but they are not walked anyway:
  // walk() only sees exported strings. `dates` is a metadata line.
  if (/\.dates$/.test(where)) return;
  for (const pat of PATTERNS) {
    pat.re.lastIndex = 0;
    let m;
    while ((m = pat.re.exec(text)) !== null) {
      findings.push({ file, where, pattern: pat, match: m[0], ctx: context(text, m.index, m[0].length) });
    }
  }
}

function walk(file, node, where) {
  if (typeof node === 'string') return scanString(file, where, node);
  if (Array.isArray(node)) return node.forEach((v, i) => walk(file, v, `${where}[${i}]`));
  if (node && typeof node === 'object') {
    for (const [k, v] of Object.entries(node)) walk(file, v, where ? `${where}.${k}` : k);
  }
}

const files = fs.readdirSync(CONTENT_DIR)
  .filter(f => f.endsWith('.js'))
  .filter(f => !TARGET || f.startsWith(TARGET))
  .sort();

if (!files.length) {
  console.error(`No content modules match "${TARGET}".`);
  process.exit(1);
}

for (const f of files) {
  const mod = require(path.join(CONTENT_DIR, f));
  walk(f, mod, '');
}

const BOLD = '\x1b[1m', DIM = '\x1b[2m', RESET = '\x1b[0m', CYAN = '\x1b[36m';

if (COUNTS_ONLY) {
  const byFile = new Map();
  findings.forEach(f => byFile.set(f.file, (byFile.get(f.file) || 0) + 1));
  console.log(`\n${BOLD}Absolutes by chapter${RESET}\n`);
  [...byFile.entries()].sort((a, b) => b[1] - a[1])
    .forEach(([file, n]) => console.log(`  ${String(n).padStart(3)}  ${file}`));
  console.log(`\n  ${findings.length} total across ${files.length} chapters.\n`);
  process.exit(0);
}

console.log(`\n${BOLD}Absolutes review${RESET}  ${DIM}${findings.length} to look at across ${files.length} chapters${RESET}`);
console.log(`${DIM}Nothing here is a failure. Decide KEEP, NARROW or HEDGE on each; see the header.${RESET}`);

for (const pat of PATTERNS) {
  const hits = findings.filter(f => f.pattern.id === pat.id);
  if (!hits.length) continue;
  console.log(`\n${BOLD}${CYAN}── ${pat.id}${RESET}  ${DIM}${hits.length} hits, ${pat.why}${RESET}`);
  for (const h of hits) {
    console.log(`  ${DIM}${h.file} ${h.where}${RESET}`);
    console.log(`    ${BOLD}${h.match}${RESET}  ${h.ctx}`);
  }
}

console.log(`\n${DIM}Report only. Exit 0 regardless, by design.${RESET}\n`);
