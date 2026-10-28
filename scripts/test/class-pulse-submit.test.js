#!/usr/bin/env node
/**
 * class-pulse-submit.test.js
 *
 * The Class Pulse Submit button on a REAL unit lesson page, in Chromium: the real
 * renderer, the real inlined backup engine and config, and a stand-in for Google
 * that the test can seed and read (the same stand-in sync-page.test.js uses).
 *
 * What it proves:
 *   - as shipped, with `submit` false in sync-config, no student sees a button;
 *   - switched on, a finished answer gets a receipt whose fingerprint is the
 *     backup engine's own valueHash of the text and confidence, so a teacher
 *     reading the backed-up record can tell it was submitted and not changed;
 *   - the receipt travels to the backup as its own slot and never into the
 *     Canvas paste;
 *   - editing the answer or its rating afterwards reads as "changed", locally
 *     and to the teacher;
 *   - a wiped device gets the receipt back with the answer.
 *
 *   npm i --no-save playwright-core
 *   node scripts/test/class-pulse-submit.test.js
 *
 * The last section mutates the renderer and asserts these checks go red.
 */

'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');

let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) {
  console.error('This test needs playwright-core. Install it first:\n  npm i --no-save playwright-core');
  process.exit(2);
}

const ROOT = path.resolve(__dirname, '..', '..');
const EXE = process.env.PW_CHROME || (function () {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  const dir = (fs.existsSync(base) ? fs.readdirSync(base) : [])
    .filter(d => /^chromium-\d+$/.test(d)).sort().pop();
  return dir ? path.join(base, dir, 'chrome-linux', 'chrome') : 'chromium';
})();

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.png': 'image/png',
  '.gif': 'image/gif', '.json': 'application/json' };

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); res.end('nope'); return;
  }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  res.end(fs.readFileSync(file));
});

let failures = 0;
let quiet = false;
const failed = [];
function check(label, condition, detail) {
  if (!condition) { failures++; failed.push(label); }
  if (quiet) return !!condition;
  if (condition) console.log(`  \x1b[32m✓\x1b[0m ${label}`);
  else console.log(`  \x1b[31m✗\x1b[0m ${label}${detail ? `\n      ${detail}` : ''}`);
  return !!condition;
}
function section(title) { if (!quiet) console.log(`\n\x1b[1m${title}\x1b[0m`); }

// The same stand-in for Google as sync-page.test.js: a tiny server in the page.
const STUB_TRANSPORT = `
window.BHSyncTransport = { create: function () {
  var F = window.__fake, listener = null, restored = false;
  return {
    ready: function () { return new Promise(function (r) { setTimeout(function () { restored = true; r(); }, 0); }); },
    user: function () { return restored ? F.user : null; },
    onAuthChange: function (cb) { listener = cb; },
    signIn: function () { restored = true; if (listener) listener(F.user); return Promise.resolve(); },
    fetch: function () {
      return Promise.resolve().then(function () {
        var out = {};
        Object.keys(F.docs).forEach(function (k) { out[k] = { text: F.docs[k].text, confidence: F.docs[k].confidence, rev: F.docs[k].rev }; });
        return out;
      });
    },
    create: function (topic, slot, value) {
      return Promise.resolve().then(function () {
        if (F.docs[slot]) { var e = new Error('exists'); e.code = 'exists'; throw e; }
        F.rev += 1; F.docs[slot] = { text: value.text, confidence: value.confidence, rev: 'r' + F.rev };
        return { rev: F.docs[slot].rev };
      });
    },
    update: function (topic, slot, value, client, rev) {
      return Promise.resolve().then(function () {
        var cur = F.docs[slot];
        if (!cur || cur.rev !== rev) { var e = new Error('conflict'); e.code = 'conflict'; throw e; }
        F.rev += 1; F.docs[slot] = { text: value.text, confidence: value.confidence, rev: 'r' + F.rev };
        return { rev: F.docs[slot].rev };
      });
    }
  };
} };`;

const PAGE = '/unit-1/lesson-1-3-south-southeast-asia.html';
const CP1 = 'checkpoint-one-response';
const RECEIPT_KEY = 'behistorical-submit-topic-1.3-' + CP1;
const ANSWER = 'Hindu and Buddhist ideas spread along Indian Ocean trade routes, and rulers in Southeast Asia used them to legitimize their power.';

let open = async function (browser, opts) {
  const o = Object.assign({ submit: true, docs: {}, patch: null }, opts || {});
  const context = await browser.newContext();
  const p = await context.newPage();
  await p.addInitScript(({ docs }) => {
    window.__fake = { docs: {}, user: { uid: 'student1' }, rev: 0 };
    Object.keys(docs).forEach(k => { window.__fake.rev += 1; window.__fake.docs[k] = { text: docs[k].text, confidence: docs[k].confidence || '', rev: 'r' + window.__fake.rev }; });
  }, { docs: o.docs });
  await p.route('**/behistorical-topic-renderer-v1.js*', async route => {
    const res = await route.fetch();
    let body = (await res.text()).replace('"windowMs": 30000', '"windowMs": 400');
    if (o.submit) body = body.replace('"submit": false', '"submit": true');
    if (o.patch) body = o.patch(body);
    await route.fulfill({ response: res, body });
  });
  await p.route('**/behistorical-sync-transport.js*', route => route.fulfill({ contentType: 'text/javascript', body: STUB_TRANSPORT }));
  await p.goto(`http://127.0.0.1:${server.address().port}${PAGE}`, { waitUntil: 'load' });
  return { context, p };
};

async function waitFor(p, fn, arg, ms) {
  try { await p.waitForFunction(fn, arg, { timeout: ms || 5000 }); return true; } catch (e) { return false; }
}
const saved = p => waitFor(p, () => /Saved\./.test((document.getElementById('bh-sync') || {}).textContent || ''));
const status = p => p.evaluate(id => { const el = document.getElementById(id + '-submit-status'); return el ? { text: el.textContent, state: el.dataset.state } : null; }, CP1);
const pressSubmit = p => p.evaluate(id => document.getElementById(id + '-submit-btn').click(), CP1);
const rate = (p, n) => p.evaluate(([id, v]) => document.querySelector(`input[name="conf-${id}"][value="${v}"]`).click(), [CP1, n]);

// What a teacher reading the backup would conclude, using only the two records.
const teacherSees = p => p.evaluate(id => {
  const docs = window.__fake.docs, ans = docs[id], rec = docs[id + '-submitted'];
  if (!rec) return 'not submitted';
  const m = /fingerprint ([0-9a-z]+)\s*$/.exec(rec.text);
  if (!m || !ans) return 'not submitted';
  return window.BHSync.valueHash(ans.text, ans.confidence) === m[1] ? 'submitted' : 'changed since submitted';
}, CP1);

async function suite(browser) {
  section('Off as shipped');
  {
    const s = await open(browser, { submit: false });
    await s.p.evaluate(() => openModule('checkpoint1'));
    check('no Submit button as shipped', await s.p.evaluate(id => !document.getElementById(id + '-submit-btn'), CP1));
    check('and the shipped config says submit is off', await s.p.evaluate(() => window.BH_SYNC_CONFIG && window.BH_SYNC_CONFIG.submit === false));
    await s.context.close();
  }

  section('Submitting a finished answer');
  let receiptDocs = null;
  {
    const s = await open(browser);
    await saved(s.p);
    await s.p.evaluate(() => openModule('checkpoint1'));
    check('Checkpoint 1 shows Submit', await s.p.evaluate(id => !!document.getElementById(id + '-submit-btn'), CP1));
    check('and says it is not submitted yet', ((await status(s.p)) || {}).state === 'none', JSON.stringify(await status(s.p)));
    await pressSubmit(s.p);
    check('an empty answer cannot be submitted', /Write your answer first/.test(((await status(s.p)) || {}).text) && !(await s.p.evaluate(k => localStorage.getItem(k), RECEIPT_KEY)));
    await s.p.fill('#' + CP1, '  ' + ANSWER + '  ');
    await rate(s.p, 4);
    await pressSubmit(s.p);
    const st = await status(s.p);
    check('a written answer is submitted', st && st.state === 'submitted' && /^Submitted /.test(st.text), JSON.stringify(st));
    check('and the button says so and rests', await s.p.evaluate(id => { const b = document.getElementById(id + '-submit-btn'); return b.disabled && b.textContent === 'Submitted'; }, CP1));
    const receipt = await s.p.evaluate(k => localStorage.getItem(k), RECEIPT_KEY);
    const expected = await s.p.evaluate(t => window.BHSync.valueHash(t, '4'), ANSWER);
    check('the receipt fingerprints the trimmed answer and its rating', !!receipt && receipt.endsWith('fingerprint ' + expected), receipt);
    check('the receipt stays out of Gather All My Work', await s.p.evaluate(() => !collectLessonWork().some(w => /submitted|fingerprint/.test(w.id + ' ' + w.text))));
    const arrived = await waitFor(s.p, id => !!window.__fake.docs[id + '-submitted'] && !!window.__fake.docs[id], CP1, 6000);
    check('the receipt reaches the backup as its own slot', arrived);
    check('a teacher reading the backup sees it as submitted', (await teacherSees(s.p)) === 'submitted', await teacherSees(s.p));
    receiptDocs = await s.p.evaluate(() => JSON.parse(JSON.stringify(window.__fake.docs)));

    await s.p.fill('#' + CP1, ANSWER + ' The Khmer built Angkor Wat.');
    check('editing afterwards asks the student to submit again', ((await status(s.p)) || {}).state === 'changed' && await s.p.evaluate(id => { const b = document.getElementById(id + '-submit-btn'); return !b.disabled && b.textContent === 'Submit again'; }, CP1));
    await waitFor(s.p, ([id, t]) => window.__fake.docs[id] && window.__fake.docs[id].text === t, [CP1, ANSWER + ' The Khmer built Angkor Wat.'], 6000);
    check('and the teacher sees it as changed since submitted', (await teacherSees(s.p)) === 'changed since submitted', await teacherSees(s.p));
    await pressSubmit(s.p);
    await waitFor(s.p, id => { const r = window.__fake.docs[id + '-submitted']; const a = window.__fake.docs[id]; return r && a && r.text.endsWith(window.BHSync.valueHash(a.text, a.confidence)); }, CP1, 6000);
    check('submitting again makes it current for the teacher', (await teacherSees(s.p)) === 'submitted', await teacherSees(s.p));
    await rate(s.p, 2);
    check('changing only the rating also reads as changed', ((await status(s.p)) || {}).state === 'changed');

    await s.p.evaluate(() => { closeModule(); openModule('checkpoint2'); });
    check('Checkpoint 2 has its own Submit', await s.p.evaluate(() => !!document.getElementById('checkpoint-two-response-submit-btn')));
    await s.p.evaluate(() => { closeModule(); openModule('source'); });
    check('a module that is not a checkpoint has none', await s.p.evaluate(() => !document.querySelector('.submit-row')));
    await s.context.close();
  }

  section('A wiped device');
  {
    const s = await open(browser, { docs: receiptDocs || {} });
    await saved(s.p);
    await s.p.evaluate(() => openModule('checkpoint1'));
    const back = await waitFor(s.p, id => (document.getElementById(id + '-submit-status') || {}).dataset && document.getElementById(id + '-submit-status').dataset.state === 'submitted', CP1);
    check('a restored device shows it submitted', back, JSON.stringify(await status(s.p)));
    check('with the answer back in its box', (await s.p.inputValue('#' + CP1)).trim() === ANSWER);
    await s.context.close();
  }
}

(async () => {
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const browser = await chromium.launch({ executablePath: fs.existsSync(EXE) ? EXE : undefined });
  console.log('\x1b[1mClass Pulse Submit on a real unit lesson page\x1b[0m');
  await suite(browser);

  section('Negative controls');
  if (!quiet) console.log('  \x1b[2meach mutation must turn a check above red\x1b[0m');
  const controls = [
    { name: 'the switch is ignored', patch: b => b.replace('window.BH_SYNC_CONFIG.submit === true', 'true'), expect: /no Submit button as shipped/ },
    { name: 'receipts are not handed to the backup', patch: b => b.replace('.concat(submitSlots())', ''), expect: /reaches the backup as its own slot/ },
    { name: 'receipts are stored under the draft prefix', patch: b => b.replace('return `behistorical-submit-${topic}-${id}`;', 'return `behistorical-draft-${topic}-${id}-submitted`;'), expect: /stays out of Gather All My Work/ },
    { name: 'the fingerprint leaves out the rating', patch: b => b.replace('fingerprint ${window.BHSync.valueHash(answer.text, answer.confidence)}', "fingerprint ${window.BHSync.valueHash(answer.text, '')}"), expect: /fingerprints the trimmed answer|teacher reading the backup sees it as submitted/ },
    { name: 'a restored receipt is dropped', patch: b => b.replace('  if (id.slice(-SUBMIT_SUFFIX.length) === SUBMIT_SUFFIX) {', '  if (false) {'), expect: /restored device shows it submitted/ }
  ];
  const source = fs.readFileSync(path.join(ROOT, 'assets/js/behistorical-topic-renderer-v1.js'), 'utf8')
    .replace('"submit": false', '"submit": true');
  let controlFailures = 0;
  for (const c of controls) {
    if (c.patch(source) === source) { console.log(`  \x1b[31m✗\x1b[0m "${c.name}" no longer matches the renderer`); controlFailures++; continue; }
    const before = failures;
    quiet = true; failed.length = 0;
    const realOpen = open;
    open = (b, o) => realOpen(b, Object.assign({}, o, { patch: c.patch }));
    try { await suite(browser); } catch (e) { failed.push('crashed: ' + e.message); }
    open = realOpen;
    quiet = false;
    const caught = failed.filter(l => c.expect.test(l));
    failures = before;
    if (caught.length) console.log(`  \x1b[32m✓\x1b[0m "${c.name}" turns the checks red`);
    else { console.log(`  \x1b[31m✗\x1b[0m "${c.name}" went unnoticed`); controlFailures++; }
  }
  failures += controlFailures;

  await browser.close();
  server.close();
  console.log(failures ? `\n\x1b[31m${failures} failed\x1b[0m` : '\n\x1b[32mAll Class Pulse Submit checks passed.\x1b[0m');
  process.exit(failures ? 1 : 0);
})();
