#!/usr/bin/env node
'use strict';
// node scripts/source-evidence-images.js [topic] [--apply] [--search-all]
//
// Turns a staged image candidate into a Module 07 evidence card, but only after
// Commons has confirmed the file exists AND the URL a student's browser will hit
// has actually returned image bytes on this run.
//
// WHY THIS EXISTS
//
// Sourcing pictures is the one job in this repo that cannot be done from
// knowledge. A Commons filename written from memory looks identical to a correct
// one: validate.js confirms the name is well formed, every structural check
// passes, and the student gets local fallback artwork and no evidence at all.
// Topic 1.5 was graded A on 2026-09-05 with two dead links in its pool and fixed
// twice the same afternoon. An authentic image that 404s is worse than a text
// card.
//
// So nothing here is applied on an argument. A candidate reaches a lesson page
// only by way of a live answer from commons.wikimedia.org in this run.
//
// **This does not decide whether a picture is the right picture.** It decides
// whether it exists. A file can resolve perfectly and show the wrong thing, and
// the Image Contract is explicit that an empty url beats a picture that does not
// match its caption. That judgment stays with a person, which is why a dead
// candidate prints real search results to look at rather than silently picking
// the top hit.
//
// EXIT CODES, and the middle one is the point:
//   0  every candidate was resolved, one way or the other, and the run is done.
//   1  something was applied and then failed its own re-read, or a candidate is
//      malformed. A real failure.
//   2  nothing could be verified, because Commons could not be reached. Not a
//      pass. The same convention as the browser suite: exit 2 means the check
//      did not run, and a run that applied nothing must never look like a run
//      that found nothing to do.

const fs = require('fs');
const path = require('path');
const { ROOT, unitTopics, resolveUnitPool } = require('./lib/evidence-pools');
const { askCommons, searchFiles } = require('./lib/commons-api');
const { checkWithRetries, isDecline } = require('./check-image-urls');

const CANDIDATES = require(process.env.EVIDENCE_IMAGE_CANDIDATES || './lib/evidence-image-candidates');
const MAX_CARDS = 6;
// Overridable only so scripts/test/evidence-image-surgery.test.js can point the
// whole verify-then-apply path at a local server. There is no production reason
// to set it, and the URLs written into a lesson come from here, so a stray value
// would be visible in the diff as a card whose url is not on Commons.
const HOST = process.env.EVIDENCE_IMAGE_HOST || 'https://commons.wikimedia.org';
const FILEPATH = file => `${HOST}/wiki/Special:FilePath/${encodeURIComponent(file).replace(/%2F/g, '/')}?width=1200`;
const PAGE = file => `${HOST}/wiki/File:${encodeURIComponent(file.replace(/ /g, '_'))}`;

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const SEARCH_ALL = args.includes('--search-all');
const onlyTopic = args.find(a => /^\d+\.\d+$/.test(a));

const G = '\x1b[32m', Y = '\x1b[33m', R = '\x1b[31m', D = '\x1b[2m', W = '\x1b[1m', X = '\x1b[0m';

// ── Which topics own their own config, and which have it written for them ────
// A generator's MODULE07_EVIDENCE map is the pool for every topic it lists, so
// editing that topic's renderer config would survive exactly until the next
// rebuild. Derived from the generators rather than typed here, so a topic added
// to one of them is covered without editing this file.
function generatedTopics() {
  const owned = new Map();
  for (const name of fs.readdirSync(path.join(ROOT, 'scripts')).filter(n => /^build-unit\d+\.js$/.test(n))) {
    const src = fs.readFileSync(path.join(ROOT, 'scripts', name), 'utf8');
    const start = src.indexOf('const MODULE07_EVIDENCE = {');
    if (start < 0) continue;
    const block = src.slice(start, src.indexOf('\n};', start));
    for (const hit of block.matchAll(/^\s*'(\d+\.\d+)'\s*:/gm)) owned.set(hit[1], `scripts/${name}`);
  }
  return owned;
}

// ── What counts as verified ──────────────────────────────────────────────────
// Three outcomes, and the split between the last two is the whole point, the
// same distinction check-image-urls.js draws between a broken picture and an
// unverified one:
//
//   verified    the host answered and returned image bytes. Only this may be
//               applied to a lesson.
//   missing     the host answered and the answer was that the picture is not
//               there. The candidate is wrong; go and look at what Commons has.
//   unverified  the host declined to answer: a 403 from a filtering proxy, a
//               429, a timeout, a network that cannot reach Commons at all.
//
// **A decline must never be reported as missing.** A blocked network would then
// read as "all twelve of these pictures do not exist", which is a confident
// answer to a question nobody asked, and it is exactly how a nightly report
// became worthless before it was fixed. And when the API itself never answered,
// a failed fetch cannot be called missing either, because nothing in the run
// established that the file is absent rather than unreachable.
function verdict(exists, fetched, apiAnswered) {
  if (exists === false) return { state: 'missing', detail: 'Commons has no such file' };
  if (!fetched) return { state: 'unverified', detail: 'not fetched' };
  if (fetched.ok) return { state: 'verified', detail: `HTTP ${fetched.status}` };
  if (isDecline(fetched) || !apiAnswered) {
    return { state: 'unverified', detail: String(fetched.reason || fetched.status) };
  }
  return { state: 'missing', detail: `HTTP ${fetched.status}` };
}

// ── Card surgery ─────────────────────────────────────────────────────────────
const q = s => `'${String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;

function renderCard(candidate) {
  return `    {
      title: ${q(candidate.title)},
      url: ${q(FILEPATH(candidate.file))},
      sourceUrl: ${q(PAGE(candidate.file))},
      caption: ${q(candidate.caption)},
      prompt: ${q(candidate.prompt)}
    }`;
}

// The bounds of `lesson.images = [ ... ]`, scanned rather than matched with a
// regex: a card body contains brackets of its own, and a greedy or lazy pattern
// picks the wrong closing one. Also keeps the search inside the images array, so
// a title that also appears in stableImages or a checkpoint cannot be hit. That
// is not hypothetical: an earlier matcher for this conversion spliced a map-key
// entry on Topics 3.1 and 3.4 because it matched stableImages first.
function imagesRegion(src) {
  const at = src.indexOf('lesson.images');
  if (at < 0) return null;
  const open = src.indexOf('[', at);
  if (open < 0) return null;
  let depth = 0;
  for (let i = open; i < src.length; i += 1) {
    const c = src[i];
    if (c === '[') depth += 1;
    else if (c === ']') { depth -= 1; if (depth === 0) return { open, close: i }; }
    else if (c === "'" || c === '"') { // skip a string literal whole
      const quote = c;
      i += 1;
      while (i < src.length && src[i] !== quote) i += (src[i] === '\\' ? 2 : 1);
    }
  }
  return null;
}

// The `{ ... }` of the card whose title is `title`, plus any trailing comma and
// the newline and indentation in front of it, so a removal leaves no blank line.
function cardSpan(src, region, title) {
  const needle = `title: ${q(title)}`;
  const at = src.indexOf(needle, region.open);
  if (at < 0 || at > region.close) return null;
  if (src.indexOf(needle, at + 1) !== -1 && src.indexOf(needle, at + 1) < region.close) {
    return { ambiguous: true };
  }
  let start = src.lastIndexOf('{', at);
  let depth = 0;
  let end = -1;
  for (let i = start; i <= region.close; i += 1) {
    const c = src[i];
    if (c === '{') depth += 1;
    else if (c === '}') { depth -= 1; if (depth === 0) { end = i; break; } }
    else if (c === "'" || c === '"') {
      const quote = c;
      i += 1;
      while (i <= region.close && src[i] !== quote) i += (src[i] === '\\' ? 2 : 1);
    }
  }
  if (end < 0) return null;
  const lineStart = src.lastIndexOf('\n', start) + 1;
  return { start: lineStart, end: end + 1 };
}

function applyCandidate(configPath, candidate) {
  let src = fs.readFileSync(configPath, 'utf8');
  const region = imagesRegion(src);
  if (!region) throw new Error(`${path.relative(ROOT, configPath)}: no lesson.images array found`);

  const card = renderCard(candidate);
  if (candidate.replaces) {
    const span = cardSpan(src, region, candidate.replaces);
    if (!span) throw new Error(`${candidate.topic}: no card titled ${JSON.stringify(candidate.replaces)} in lesson.images`);
    if (span.ambiguous) throw new Error(`${candidate.topic}: two cards titled ${JSON.stringify(candidate.replaces)}; rename one before replacing`);
    src = src.slice(0, span.start) + card + src.slice(span.end);
  } else {
    const lastBrace = src.lastIndexOf('}', region.close);
    src = src.slice(0, lastBrace + 1) + ',\n' + card + src.slice(lastBrace + 1);
  }
  fs.writeFileSync(configPath, src);
}

// Exported so scripts/test/evidence-image-surgery.test.js can drive the real
// splice rather than a copy of it. Text surgery on a renderer config is the
// dangerous half of this tool: an earlier matcher written for this same
// conversion replaced a map-key entry on Topics 3.1 and 3.4 because it matched
// stableImages before it reached lesson.images, and the corruption was silent.
// The guard is the same one build-ebook.js has: without it, a require of this
// file would start a network sweep as a side effect.
module.exports = { imagesRegion, cardSpan, renderCard, applyCandidate, generatedTopics, verdict, FILEPATH, PAGE };

if (require.main !== module) return;

// ── Verify, then act ─────────────────────────────────────────────────────────
(async () => {
  const wanted = CANDIDATES.filter(c => !onlyTopic || c.topic === onlyTopic);
  if (!wanted.length) {
    console.log(`\nNo staged candidates${onlyTopic ? ` for topic ${onlyTopic}` : ''}. scripts/lib/evidence-image-candidates.js is where they go.\n`);
    return process.exit(0);
  }

  const topics = new Map(unitTopics().map(t => [t.key, t]));
  const generated = generatedTopics();

  // Pre-flight, before any network. A candidate naming a card that is not in the
  // pool, or one that would push the pool past the contract's ceiling, is a
  // staging mistake, and finding it after a network run is finding it late.
  const staging = [];
  const appends = new Map();
  for (const c of wanted) {
    for (const field of ['topic', 'file', 'search', 'title', 'caption', 'prompt']) {
      if (!c[field]) staging.push(`${c.topic || '?'}: candidate is missing ${field}`);
    }
    const topic = topics.get(c.topic);
    if (!topic) { staging.push(`${c.topic}: no such topic`); continue; }
    const cards = resolveUnitPool(topic).cards;
    if (c.replaces) {
      const hits = cards.filter(card => card.title === c.replaces).length;
      if (hits !== 1) staging.push(`${c.topic}: "${c.replaces}" matches ${hits} cards in lesson.images, expected exactly 1`);
    } else {
      appends.set(c.topic, (appends.get(c.topic) || 0) + 1);
    }
  }
  for (const [key, n] of appends) {
    const size = resolveUnitPool(topics.get(key)).cards.length + n;
    if (size > MAX_CARDS) staging.push(`${key}: ${n} append(s) would reach ${size} cards, over the ceiling of ${MAX_CARDS}. Name a card to replace.`);
  }
  if (staging.length) {
    console.error(`\n${R}${W}Staging errors, nothing was checked or applied:${X}`);
    staging.forEach(line => console.error(`  ${R}${line}${X}`));
    console.error('');
    return process.exit(1);
  }

  console.log(`\n${W}Sourcing Module 07 images${X}  ${D}${wanted.length} staged candidate(s)${X}`);
  console.log(`${D}Nothing is applied on an argument. Commons has to answer in this run.${X}\n`);

  // One batched existence call, the same way the nightly sweep does it, then a
  // real fetch of every file the API vouched for. The API answers "does this
  // file exist", which is not "does this URL return image bytes"; only the fetch
  // answers the second, and that is the one a student's browser asks.
  const files = [...new Set(wanted.map(c => c.file.replace(/_/g, ' ')))];
  const known = await askCommons(files, process.env.IMAGE_CHECK_API);
  const apiAnswered = known.size > 0;

  const results = [];
  for (const candidate of wanted) {
    const title = candidate.file.replace(/_/g, ' ');
    const exists = known.get(title);
    let state, detail;

    const fetched = exists === false ? null : await checkWithRetries(FILEPATH(candidate.file), true);
    ({ state, detail } = verdict(exists, fetched, apiAnswered));
    results.push({ candidate, state, detail });
  }

  const verified = results.filter(r => r.state === 'verified');
  const missing = results.filter(r => r.state === 'missing');
  const unverified = results.filter(r => r.state === 'unverified');

  for (const { candidate, state, detail } of results) {
    const colour = state === 'verified' ? G : state === 'missing' ? R : Y;
    console.log(`  ${colour}${state.padEnd(10)}${X} ${candidate.topic.padEnd(5)} ${candidate.file}  ${D}${detail}${X}`);
  }

  // A dead guess is a query, not a dead end.
  const toSearch = SEARCH_ALL ? results : missing;
  if (toSearch.length && apiAnswered) {
    console.log(`\n${W}What Commons actually has${X}  ${D}for the ${toSearch.length} candidate(s) below. Look at these, pick one, and put its filename in the candidates file. Nothing here is applied.${X}`);
    for (const { candidate } of toSearch) {
      const hits = await searchFiles(candidate.search, 6, process.env.IMAGE_CHECK_API);
      console.log(`\n  ${W}${candidate.topic}${X} ${candidate.title}  ${D}(searched: ${candidate.search})${X}`);
      if (!hits.length) console.log(`    ${Y}no results; try different search terms${X}`);
      hits.forEach(hit => console.log(`    ${hit.file}\n      ${D}${hit.page}${X}`));
    }
  }

  if (!apiAnswered && !verified.length) {
    console.log(`\n${R}${W}Verified nothing.${X} commons.wikimedia.org did not answer, so no candidate could be`);
    console.log(`checked and none was applied. This is not a pass: run it again from a network`);
    console.log(`that can reach Commons. ${D}(Same reason check-image-urls.js is nightly, and the${X}`);
    console.log(`${D}same reason a skipped browser test exits 2 rather than green.)${X}\n`);
    return process.exit(2);
  }

  if (!APPLY) {
    console.log(`\n${W}Dry run.${X} ${verified.length} candidate(s) would be applied. Re-run with ${W}--apply${X} to write them.\n`);
    return process.exit(0);
  }

  let applied = 0;
  let failures = 0;
  console.log(`\n${W}Applying${X}`);
  for (const { candidate } of verified) {
    const topic = topics.get(candidate.topic);
    if (!topic) { console.error(`  ${R}FAIL${X} ${candidate.topic}: no such topic`); failures += 1; continue; }
    if (generated.has(candidate.topic)) {
      console.error(`  ${R}FAIL${X} ${candidate.topic}: its pool is written by ${generated.get(candidate.topic)}.`);
      console.error(`         Put this card in that file's MODULE07_EVIDENCE map and rebuild; editing the`);
      console.error(`         renderer config would survive exactly until the next build.`);
      failures += 1;
      continue;
    }
    const configPath = (topic.dataScripts || []).find(f => f.endsWith('-renderer-config.js'));
    if (!configPath) { console.error(`  ${R}FAIL${X} ${candidate.topic}: no renderer config`); failures += 1; continue; }

    const before = resolveUnitPool(topic).cards.length;
    if (!candidate.replaces && before >= MAX_CARDS) {
      console.error(`  ${R}FAIL${X} ${candidate.topic}: pool already holds ${before} cards, the contract's ceiling. Name a card to replace.`);
      failures += 1;
      continue;
    }
    try {
      applyCandidate(configPath, candidate);
    } catch (error) {
      console.error(`  ${R}FAIL${X} ${error.message}`);
      failures += 1;
      continue;
    }

    // Read the pool back the way the renderer resolves it, so a syntactically
    // plausible edit that produced the wrong array fails here rather than on a
    // lesson page.
    const fresh = unitTopics().find(t => t.key === candidate.topic);
    const after = resolveUnitPool(fresh);
    const landed = after.cards.find(c => c.title === candidate.title);
    if (!landed || landed.url !== FILEPATH(candidate.file)) {
      console.error(`  ${R}FAIL${X} ${candidate.topic}: the card did not read back correctly after writing. Revert this file.`);
      failures += 1;
      continue;
    }
    console.log(`  ${G}ok${X}   ${candidate.topic}  ${candidate.replaces ? `replaced ${JSON.stringify(candidate.replaces)}` : 'appended'} with ${JSON.stringify(candidate.title)}  ${D}(${before} -> ${after.cards.length} cards)${X}`);
    applied += 1;
  }

  console.log(`\n${applied} applied, ${failures} failed, ${missing.length} missing, ${unverified.length} unverified.`);
  if (applied) {
    console.log(`${W}Now:${X} delete the applied entries from scripts/lib/evidence-image-candidates.js,`);
    console.log(`then run ${W}npm test${X} and ${W}node scripts/report-evidence-authenticity.js${X}.\n`);
  } else {
    console.log('');
  }
  process.exit(failures ? 1 : 0);
})().catch(error => { console.error(error); process.exit(1); });
