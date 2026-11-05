#!/usr/bin/env node
'use strict';

/**
 * Class Pulse by copy and paste: the text a teacher copies into Claude for Teachers,
 * and the check on the reply that comes back.
 *
 * What it proves:
 *   - real student writing cannot be copied out as shipped: APPROVAL is off, and
 *     turning it on needs a named reference;
 *   - the copied text carries the engine's instructions and the topic's contract
 *     word for word, and every answer, but no student name, response key, class,
 *     confidence or timestamp, and an answer's number says nothing about who wrote it;
 *   - unfinished or empty work is never copied;
 *   - a reply is checked answer by answer with the engine's own validation: an
 *     invented quote, a rating given twice or an answer left out never shows as a
 *     level, a reply for another batch is refused, and what a chat app's copy
 *     button adds around the JSON is tolerated;
 *   - through the engine, a pasted rating shows as a model's proposal, and a failed
 *     one as Can't tell;
 *   - the check before copying flags what a student may write about themselves (a
 *     name the course never uses, a family detail, a teacher, contact details, the
 *     school, a signature) and not the history (Akbar, Zheng He, Malacca), and a
 *     removed word never reaches the copied text while the reading still lands on
 *     the student's own answer.
 *
 * Negative controls at the end load deliberately broken copies of the module and
 * prove the assertions that guard each promise go red.
 */

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..', '..');
const SOURCE = path.join(ROOT, 'teacher', 'class-pulse-handoff.js');
const E = require(path.join(ROOT, 'teacher', 'class-pulse-engine.js'));
const H = require(SOURCE);
const R = require(path.join(ROOT, 'teacher', 'data', 'class-pulse-rubrics.js'));
const U3 = require(path.join(ROOT, 'teacher', 'data', 'class-pulse-calibration-u3.js'));
const T23 = require(path.join(ROOT, 'teacher', 'data', 'class-pulse-calibration.js'));
const WORDS = new Set(require(path.join(ROOT, 'teacher', 'data', 'class-pulse-course-words.js')).words);

const box = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'assets', 'data', 'skills-map.js'), 'utf8'), box);
const MAP = box.window.BEHISTORICAL_SKILLS_MAP;
const contract = E.contractFor(MAP, '3.1', 'cp1', R);

// Rows as the page holds them, with identifying details that must never be copied.
const SECRET = { student: 'Zelda Quarrington', key: 'S2-7-cp1-ROWKEY', confidence: 'CONF-SENTINEL', updatedAt: '2031-01-02T03:04:05Z', section: 'SECTION-SENTINEL' };
const cases = U3.rows.filter(r => r.topic === '3.1' && r.checkpoint === 'cp1');
const rows = cases.map((c, i) => ({
  key: i === 0 ? SECRET.key : 'S2-' + i + '-cp1', student: i === 0 ? SECRET.student : 'Student ' + i, sectionId: SECRET.section,
  text: c.text, completionState: 'synthetic-complete', confidence: i === 0 ? SECRET.confidence : 3, updatedAt: SECRET.updatedAt
}));

function load(source) {
  const sandbox = { module: { exports: {} }, require: p => (/class-pulse-engine/.test(p) ? E : require(p)) };
  vm.runInNewContext(source, sandbox);
  return sandbox.module.exports;
}

// A reply that rates every answer Demonstrating, quoting its first words.
function reply(batch, k, change) {
  const out = {
    batch: batch.id,
    answers: batch.answers.map(a => ({
      key: a.key,
      criteria: k.criteria.map(c => ({ criterionId: c.id, category: 'D', evidence: [a.text.slice(0, 20)], reason: 'Quoted evidence meets it.', misconceptions: [], uncertainty: [], reviewRequired: false }))
    }))
  };
  if (change) change(out);
  return JSON.stringify(out);
}

const checks = [];
const check = (name, fn) => checks.push({ name, fn });

check('real student writing cannot be copied out as shipped', async (M) => {
  assert.equal(M.APPROVAL.realWork, false, 'APPROVAL.realWork must stay false until ZCS approves in writing');
  const real = [{ text: 'A real answer.', completionState: 'verified-submission' }];
  assert.equal(M.gate(real).ok, false);
  assert.equal(M.gate(real, { realWork: true, reference: '', services: ['claude-for-teachers'] }).ok, false, 'approval needs a named reference');
  const claudeOnly = { realWork: true, reference: 'Dan Layton, email of 2026-11-02', services: ['claude-for-teachers'] };
  assert.equal(M.gate(real, claudeOnly, 'claude-for-teachers').ok, true);
  assert.equal(M.gate(real, claudeOnly, 'chatgpt-for-teachers').ok, false, 'approving one service must not open the other');
  assert.equal(M.gate(real, { realWork: true, reference: 'Dan Layton, email of 2026-11-02' }, 'claude-for-teachers').ok, false, 'an approval must name its service');
  assert.equal(M.gate(rows).ok, true, 'invented answers need no approval');
});

check('the shipped approval names who approved it whenever it is on', async (M) => {
  const a = H.APPROVAL;
  assert.ok(a.realWork === false || (typeof a.reference === 'string' && a.reference.trim().length >= 8 && Array.isArray(a.services) && a.services.length > 0));
  assert.ok((a.services || []).every(id => M.SERVICES.some(x => x.id === id)), 'every approved service is one the page knows');
});

check('the copied text carries the instructions, the contract and every answer, word for word', async (M) => {
  const [b] = await M.batches(contract, rows, { size: 13 });
  const text = M.promptFor(contract, b);
  assert.ok(text.includes(E.INSTRUCTIONS), 'the engine instructions verbatim');
  assert.ok(text.includes(JSON.stringify(contract)), 'the contract, rubric included, verbatim');
  for (const c of cases) assert.ok(text.includes(c.text), 'every answer verbatim');
  assert.ok(text.includes(b.id), 'the batch id, so the reply can be matched');
});

check('no name, response key, class, confidence or timestamp is copied', async (M) => {
  const all = await M.batches(contract, rows, { size: 5 });
  const text = all.map(b => M.promptFor(contract, b) + JSON.stringify(b)).join('\n');
  for (const [what, v] of Object.entries(SECRET)) assert.ok(!text.includes(v), what + ' leaked into the copied text');
});

check('answer numbers follow fingerprints, not the roster', async (M) => {
  const a = await M.batches(contract, rows, { size: 13 });
  const b = await M.batches(contract, rows.slice().reverse(), { size: 13 });
  assert.deepEqual(a[0].answers.map(x => x.text), b[0].answers.map(x => x.text), 'reordering the class must not renumber the answers');
  assert.notDeepEqual(a[0].answers.map(x => x.text), cases.map(c => c.text), 'numbering must not be roster order');
});

check('batches stay within their size, and the same words are one answer', async (M) => {
  const twice = rows.concat(rows.map(r => ({ ...r, key: r.key + '-again' })));
  const all = await M.batches(contract, twice, { size: 5 });
  assert.ok(all.every(b => b.answers.length <= 5));
  assert.equal(all.reduce((n, b) => n + b.answers.length, 0), cases.length);
  const keys = all.flatMap(b => b.answers.map(a => a.key));
  assert.equal(new Set(keys).size, keys.length, 'keys are unique across a checkpoint');
});

check('unfinished and empty work is never copied', async (M) => {
  const extra = [{ text: 'DRAFT-SENTINEL half an', completionState: 'backup-snapshot' }, { text: '   ', completionState: 'synthetic-complete' }];
  const all = await M.batches(contract, rows.concat(extra), { size: 50 });
  const text = all.map(b => M.promptFor(contract, b)).join('');
  assert.ok(!text.includes('DRAFT-SENTINEL'));
  assert.equal(all[0].answers.length, cases.length);
});

check('a good reply reads every answer, even wrapped in a fence and a sentence', async (M) => {
  const [b] = await M.batches(contract, rows, { size: 13 });
  const r = M.readReply(contract, b, 'Here are the ratings:\n```json\n' + reply(b, contract) + '\n```\nLet me know!');
  assert.equal(r.passed, b.answers.length);
  assert.equal(r.failed + r.missing, 0);
});

check('an invented quote, a double rating or a missing answer never passes', async (M) => {
  const [b] = await M.batches(contract, rows, { size: 13 });
  const r = M.readReply(contract, b, reply(b, contract, o => {
    o.answers[0].criteria[0].evidence = ['words this student never wrote'];
    o.answers.push(JSON.parse(JSON.stringify(o.answers[1])));
    o.answers.splice(2, 1);
  }));
  const by = Object.fromEntries(r.results.map(x => [x.key, x.status]));
  assert.equal(by[b.answers[0].key], 'failed', 'invented quote');
  assert.equal(by[b.answers[1].key], 'failed', 'rated twice');
  assert.equal(by[b.answers[2].key], 'missing', 'left out');
  assert.equal(r.passed, b.answers.length - 3);
});

check('a reply for another batch, or not JSON at all, is refused', async (M) => {
  const [b] = await M.batches(contract, rows, { size: 13 });
  assert.throws(() => M.readReply(contract, b, reply(b, contract, o => { o.batch = 'cp-3-1-cp1-0000000000'; })), /different batch/);
  assert.throws(() => M.readReply(contract, b, 'Sorry, I cannot help with that.'), /does not look like/);
});

check('through the engine, a pasted rating is a proposal and a failed one is Can\'t tell', async (M) => {
  const [b] = await M.batches(contract, rows, { size: 13 });
  const read = M.readReply(contract, b, reply(b, contract, o => { o.answers[0].criteria[0].evidence = ['not in the answer']; }));
  const engine = E.createEngine({ provider: M.provider([{ checkpoint: 'cp1', read }]) });
  const out = await engine.analyzeMany(rows, contract);
  const bad = out[rows.findIndex(r => r.text === b.answers[0].text)];
  const good = out[rows.findIndex(r => r.text === b.answers[1].text)];
  assert.equal(good.source, 'model-proposed');
  assert.ok(good.criteria.every(c => c.category === 'D'));
  assert.equal(bad.status, 'error');
  assert.ok(bad.criteria.every(c => c.category === 'U'));
});

// An invented answer with everything the check should catch, and history it should not.
const PERSONAL_ANSWER = 'Akbar used the mansabdar system and Zheng He sailed to Malacca. My grandpa told me about the Mughals when we visited Agra. ' +
  'Mr. Anderson said the jagirs moved. Jayden Smith helped me with this. Email me at jayden.s@zcs.k12.in.us\n- Jayden';

check('the check flags what could identify a student, by kind', async (M) => {
  const kinds = M.flagsFor(PERSONAL_ANSWER, WORDS).map(f => f.kind + ':' + f.span);
  for (const want of ['personal:My grandpa told me about the Mughals when we visited Agra.', 'staff:Mr. Anderson', 'name:Jayden Smith', 'contact:jayden.s@zcs.k12.in.us', 'signature:Jayden']) {
    assert.ok(kinds.includes(want), 'missing ' + want + ' in ' + JSON.stringify(kinds));
  }
});

check('the check leaves the history alone', async (M) => {
  const spans = M.flagsFor(PERSONAL_ANSWER, WORDS).map(f => f.span).join(' | ');
  for (const h of ['Akbar', 'Zheng He', 'Malacca']) assert.ok(!spans.split(' | ').some(sp => sp === h || sp.startsWith(h + ' ')), h + ' was flagged');
  const all = U3.rows.concat(T23.rows).map(r => r.text);
  const noisy = all.filter(t => M.flagsFor(t, WORDS).length);
  assert.ok(noisy.length <= 6, noisy.length + ' of ' + all.length + ' invented history answers were flagged; the check would cry wolf');
});

check('the course word list holds history names, not common first names', async () => {
  for (const w of ['akbar', 'malacca', 'zheng', 'tokugawa', 'byzantine']) assert.ok(WORDS.has(w), w + ' missing');
  for (const w of ['jayden', 'emma', 'olivia', 'liam', 'noah', 'aiden', 'grace', 'will']) assert.ok(!WORDS.has(w), w + ' would hide a student name');
});

check('a removed word never reaches the copied text, and the reading still lands on the answer', async (M) => {
  const rows2 = rows.slice(0, 4).concat([{ key: 'X', text: PERSONAL_ANSWER, completionState: 'synthetic-complete' }]);
  const [b] = await M.batches(contract, rows2, { size: 13 });
  const a = b.answers.find(x => x.text === PERSONAL_ANSWER);
  const copied = M.redact(b, new Map([[a.key, M.flagsFor(PERSONAL_ANSWER, WORDS).map(f => f.span)]]));
  const text = M.promptFor(contract, copied);
  for (const gone of ['grandpa', 'Anderson', 'Jayden', 'zcs.k12']) assert.ok(!text.includes(gone), gone + ' reached the copied text');
  assert.ok(text.includes('Akbar used the mansabdar system'), 'the history stays');
  const read = M.readReply(contract, copied, reply(copied, contract));
  assert.equal(read.passed, copied.answers.length);
  const engine = E.createEngine({ provider: M.provider([{ checkpoint: 'cp1', read }]) });
  const out = await engine.analyzeMany(rows2, contract);
  assert.equal(out[4].source, 'model-proposed', 'the reading of the trimmed copy lands on the student\'s original answer');
});

async function run(M, quiet) {
  const failed = [];
  for (const c of checks) {
    try { await c.fn(M); if (!quiet) console.log('  \x1b[32m✓\x1b[0m ' + c.name); }
    catch (e) { failed.push(c.name); if (!quiet) console.log('  \x1b[31m✗\x1b[0m ' + c.name + '\n      ' + e.message); }
  }
  return failed;
}

(async () => {
  console.log('\x1b[1mClass Pulse by copy and paste\x1b[0m');
  let failures = (await run(H, false)).length;

  console.log('\n\x1b[1mNegative controls\x1b[0m');
  const src = fs.readFileSync(SOURCE, 'utf8');
  const controls = [
    { name: 'approval switched on with no reference', from: 'const APPROVAL = { realWork: false', to: 'const APPROVAL = { realWork: true', expect: /cannot be copied out as shipped/ },
    { name: 'approving one service opens the other', from: '&& Array.isArray(a.services) && a.services.includes(sid))', to: ')', expect: /cannot be copied out as shipped/ },
    { name: 'the gate waves real writing through', from: "if (rows.every(r => r.completionState === 'synthetic-complete'))", to: 'if (true)', expect: /cannot be copied out as shipped/ },
    { name: 'the response key travels with the answer', from: "({ key: 'A' + String(i + j + 1).padStart(2, '0'), fp, text })", to: "({ key: 'A' + String(i + j + 1).padStart(2, '0'), fp, text, row: rowKeys.get(fp) })", extra: ['const seen = new Map();', 'const seen = new Map(), rowKeys = new Map();\n    for (const r of rows) rowKeys.set(await E.digest(r.text), r.key);'], expect: /no name, response key/ },
    { name: 'answers numbered in roster order', from: '.sort((a, b) => a[0].localeCompare(b[0]))', to: '', expect: /fingerprints, not the roster/ },
    { name: 'drafts are copied too', from: 'if (E.eligibility(r)) continue;', to: 'if (!r.text.trim()) continue;', expect: /unfinished and empty/ },
    { name: 'replies skip the engine\'s validation', from: "try { return { ...base, status: 'passed', entry, output: E.validateOutput(entry, contract, a.text) }; }", to: "try { return { ...base, status: 'passed', entry, output: entry }; }", expect: /invented quote/ },
    { name: 'family details go unflagged', from: 're: /\\b(?:my|our) (?:mom', to: 're: /\\b(?:zzqq) (?:mom', expect: /flags what could identify/ },
    { name: 'every capitalized word counts as course vocabulary', from: 'const isKnown = (w, known) => {', to: 'const isKnown = (w, known) => { return true; ', expect: /flags what could identify/ },
    { name: 'the first word of every run is skipped', from: 'judged = start && ws.length === 1 ? [] : ws;', to: 'judged = ws.slice(1);', expect: /flags what could identify/ },
    { name: 'removing changes nothing in the copy', from: ".reduce((t, sp) => t.split(sp).join('[removed]'), a.text);", to: ';', extra: ['const text = spans.slice()', 'const text = a.text; void spans.slice()'], expect: /removed word never reaches/ },
    { name: 'the reading is matched on the trimmed copy', from: "const base = { key: a.key, text: a.original || a.text, copied: a.text };", to: "const base = { key: a.key, text: a.text, copied: a.text };", expect: /lands on the answer/ },
    { name: 'a reply for another batch is accepted', from: "if (reply.batch != null && reply.batch !== batch.id) throw", to: 'if (false) throw', expect: /another batch/ },
    { name: 'the contract is left out of the copied text', from: "'\\n\\nCONTRACT (JSON):\\n' + JSON.stringify(contract) +", to: '', expect: /word for word/ }
  ];
  for (const c of controls) {
    if (!src.includes(c.from) || (c.extra && !src.includes(c.extra[0]))) { console.log('  \x1b[31m✗\x1b[0m "' + c.name + '" no longer matches the module'); failures++; continue; }
    let broken = src.replace(c.from, c.to);
    if (c.extra) broken = broken.replace(c.extra[0], c.extra[1]);
    let M;
    try { M = load(broken); } catch (e) { console.log('  \x1b[31m✗\x1b[0m "' + c.name + '" did not load: ' + e.message); failures++; continue; }
    const caught = (await run(M, true)).filter(n => c.expect.test(n));
    if (caught.length) console.log('  \x1b[32m✓\x1b[0m "' + c.name + '" turns the checks red');
    else { console.log('  \x1b[31m✗\x1b[0m "' + c.name + '" went unnoticed'); failures++; }
  }

  console.log(failures ? '\n\x1b[31m' + failures + ' failed\x1b[0m' : '\n\x1b[32mAll copy-and-paste checks passed.\x1b[0m');
  process.exit(failures ? 1 : 0);
})();
