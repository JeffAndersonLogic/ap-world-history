#!/usr/bin/env node
/**
 * sync-page.test.js
 *
 * The student response backup on the REAL lesson pages, in Chromium: the real
 * renderer, the real inlined engine, the real on-page controls, and the real
 * glue that tells the engine which slots a lesson has and puts an answer back
 * where that page keeps it. Only Google is replaced, by a stand-in transport
 * that behaves like a server (revisions, create-on-existing refused) and whose
 * contents the test can seed and read.
 *
 * WHY THIS NEEDS A BROWSER
 *
 * sync-engine.test.js proves the decisions against fake pages, and
 * sync-transport.test.js proves the requests against the real rules. Neither
 * can see whether a restored First & 10 answer lands in the key the reading
 * actually reads, whether a typed answer in a module is noticed by the engine
 * at all, or whether the page stays silent and makes no request when the backup
 * is off. Those are the failures that would leave every structural check green.
 *
 * What it cannot see: Google sign-in, and a real Chromebook losing real site
 * data. That is what a pretend student is for.
 *
 *   npm i playwright-core        # once, not committed
 *   node scripts/test/sync-page.test.js
 *
 * The last section mutates the renderer's glue and asserts these checks go red.
 */

'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');

let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) {
  console.error('This test needs playwright-core. Install it first:\n  npm i playwright-core');
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

// ── The stand-in for Google ──────────────────────────────────────────────────
//
// Served in place of assets/js/behistorical-sync-transport.js. It holds a tiny
// server in the page (window.__fake) so the test can seed what the "cloud" has
// and read what the page wrote to it, and it implements the same contract the
// real transport does, including the two refusals the conflict rule leans on.
const STUB_TRANSPORT = `
window.BHSyncTransport = { create: function (cfg) {
  var F = window.__fake;
  var listener = null;
  function gate() {
    if (F.offline) { var e = new Error('offline'); e.code = 'offline'; throw e; }
  }
  return {
    ready: function () { return Promise.resolve(); },
    user: function () { return F.user; },
    onAuthChange: function (cb) { listener = cb; },
    signIn: function () { F.user = { uid: 'student1' }; if (listener) listener(F.user); return Promise.resolve(); },
    fetch: function () {
      return Promise.resolve().then(function () {
        gate();
        var out = {};
        Object.keys(F.docs).forEach(function (k) { out[k] = { text: F.docs[k].text, confidence: F.docs[k].confidence, rev: F.docs[k].rev }; });
        return out;
      });
    },
    create: function (topic, slot, value) {
      return Promise.resolve().then(function () {
        gate();
        if (F.docs[slot]) { var e = new Error('exists'); e.code = 'exists'; throw e; }
        F.rev += 1;
        F.docs[slot] = { text: value.text, confidence: value.confidence, rev: 'r' + F.rev };
        F.writes.push({ op: 'create', slot: slot, text: value.text, confidence: value.confidence });
        return { rev: F.docs[slot].rev };
      });
    },
    update: function (topic, slot, value, client, rev) {
      return Promise.resolve().then(function () {
        gate();
        var cur = F.docs[slot];
        if (!cur || cur.rev !== rev) { var e = new Error('conflict'); e.code = 'conflict'; throw e; }
        F.rev += 1;
        F.docs[slot] = { text: value.text, confidence: value.confidence, rev: 'r' + F.rev };
        F.writes.push({ op: 'update', slot: slot, text: value.text, confidence: value.confidence });
        return { rev: F.docs[slot].rev };
      });
    }
  };
} };`;

const UNIT_PAGE = '/unit-1/lesson-1-3-south-southeast-asia.html';
const FOUNDATIONS_PAGE = '/foundations/foundations-3-states-power.html';

// Opens a page against the stand-in transport and a seeded cloud and device.
// `on: true` (the default) is the config exactly as shipped, which is on for
// every student since 2026-10-07. `on: false` rewrites the inlined config to the
// pre-launch posture, off with the pilot switch available, so the code that
// honours "off" and "pilot" stays under test for the day it is needed again.
let open = async function (browser, page, opts) {
  const o = Object.assign({ on: true, docs: {}, user: { uid: 'student1' }, local: {}, patch: null }, opts || {});
  const context = await browser.newContext();
  const p = await context.newPage();
  const requests = [];
  p.on('request', r => requests.push(r.url()));
  await p.addInitScript(({ docs, user, local }) => {
    window.__fake = { docs: {}, user: user, rev: 0, writes: [], offline: false };
    Object.keys(docs).forEach(k => { window.__fake.rev += 1; window.__fake.docs[k] = { text: docs[k].text, confidence: docs[k].confidence || '', rev: 'r' + window.__fake.rev }; });
    // Seed the device once, never on a reload, or a reload would put back what
    // the student had since changed.
    if (!sessionStorage.getItem('__seeded')) {
      Object.keys(local).forEach(k => localStorage.setItem(k, local[k]));
      sessionStorage.setItem('__seeded', '1');
    }
  }, { docs: o.docs, user: o.user, local: o.local });

  const rewrite = async route => {
    const res = await route.fetch();
    let body = await res.text();
    if (o.on) {
      body = body.replace('"windowMs": 30000', '"windowMs": 400');
    } else {
      body = body
        .replace('"enabled": true', '"enabled": false')
        .replace('"pilot": false', '"pilot": true');
    }
    if (o.patch) body = o.patch(body);
    await route.fulfill({ response: res, body });
  };
  await p.route('**/behistorical-topic-renderer-v1.js*', rewrite);
  await p.route('**/foundations-topic-renderer.js*', rewrite);
  await p.route('**/behistorical-sync-transport.js*', route => route.fulfill({ contentType: 'text/javascript', body: STUB_TRANSPORT }));
  await p.goto(`http://127.0.0.1:${server.address().port}${page}`, { waitUntil: 'load' });
  return { context, p, requests };
};

async function statusText(p) {
  return p.evaluate(() => { const el = document.getElementById('bh-sync'); return el ? el.textContent : null; });
}
async function waitFor(p, fn, arg, ms) {
  try { await p.waitForFunction(fn, arg, { timeout: ms || 4000 }); return true; } catch (e) { return false; }
}
const fake = p => p.evaluate(() => window.__fake);
const ls = (p, key) => p.evaluate(k => localStorage.getItem(k), key);

async function suite(browser) {
  // ── Off by default ─────────────────────────────────────────────────────────
  section('On as shipped, and silent when the config says off');
  {
    const s = await open(browser, UNIT_PAGE, {});
    const shown = await waitFor(s.p, () => !!document.getElementById('bh-sync'));
    check('the shipped switch is on for every student', await s.p.evaluate(() => window.BH_SYNC_CONFIG && window.BH_SYNC_CONFIG.enabled === true && window.BH_SYNC_CONFIG.pilot === false));
    check('a student with no parameter sees the backup', shown);
    await s.context.close();
    const f = await open(browser, FOUNDATIONS_PAGE, {});
    check('and so does a Foundations student', await waitFor(f.p, () => !!document.getElementById('bh-sync')));
    await f.context.close();
  }
  {
    const s = await open(browser, UNIT_PAGE, { on: false });
    await s.p.waitForTimeout(1500);
    check('the backup engine is present and silent', await s.p.evaluate(() => !!window.BHSync && !document.getElementById('bh-sync')));
    check('the page makes no request to Google or to the transport', !s.requests.some(u => /gstatic\.com\/firebasejs|firestore\.googleapis\.com|identitytoolkit|securetoken|behistorical-sync-transport/.test(u)), s.requests.filter(u => /sync|firebase|firestore|identitytoolkit/.test(u)).join(' '));
    check('and leaves nothing of its own in storage', await s.p.evaluate(() => Object.keys(localStorage).every(k => k.indexOf('behistorical-sync-') !== 0)));
    check('the config in that browser says off', await s.p.evaluate(() => window.BH_SYNC_CONFIG && window.BH_SYNC_CONFIG.enabled === false));
    await s.context.close();
  }
  {
    // With the project details removed the engine cannot connect, so ?sync=on
    // alone must not turn anything on. The shipped config has them, so this
    // blanks the key to keep that guard under test.
    const s = await open(browser, UNIT_PAGE + '?sync=on', { on: false, patch: b => b.replace(/"apiKey": "[^"]*"/, '"apiKey": null') });
    await s.p.waitForTimeout(1200);
    check('?sync=on does nothing without the project details', await s.p.evaluate(() => !document.getElementById('bh-sync')));
    await s.context.close();
  }

  // ── The pilot switch: one browser, by ?sync=on ─────────────────────────────
  section('The pilot switch');
  {
    const s = await open(browser, UNIT_PAGE + '?sync=on', { on: false });
    const on = await waitFor(s.p, () => !!document.getElementById('bh-sync'));
    check('with the config off and pilot on', await s.p.evaluate(() => window.BH_SYNC_CONFIG.enabled === false && window.BH_SYNC_CONFIG.pilot === true));
    check('?sync=on turns the backup on in that browser', on);
    check('and it is remembered for the next page, with no parameter', await (async () => {
      await s.p.goto(`http://127.0.0.1:${server.address().port}${UNIT_PAGE}`, { waitUntil: 'load' });
      return waitFor(s.p, () => !!document.getElementById('bh-sync'));
    })());
    await s.p.goto(`http://127.0.0.1:${server.address().port}${UNIT_PAGE}?sync=off`, { waitUntil: 'load' });
    await s.p.waitForTimeout(1200);
    check('?sync=off turns it off again', await s.p.evaluate(() => !document.getElementById('bh-sync')));
    await s.context.close();
    const other = await open(browser, UNIT_PAGE, { on: false });
    await other.p.waitForTimeout(1200);
    check('a browser that never used ?sync=on is untouched', await other.p.evaluate(() => !document.getElementById('bh-sync')));
    await other.context.close();
  }

  // ── A wiped device gets its work back ──────────────────────────────────────
  section('A wiped device gets its work back, in the places the page reads');
  {
    const s = await open(browser, UNIT_PAGE, { docs: {
      'checkpoint-two-response': { text: 'Restored checkpoint answer.', confidence: '3' },
      'first10-q1': { text: 'Restored reading answer.', confidence: '4' },
      'beintheroom-response': { text: 'Restored reflection.', confidence: '' }
    } });
    const settled = await waitFor(s.p, () => { const el = document.getElementById('bh-sync'); return el && /Saved\./.test(el.textContent); });
    check('the status settles to saved', settled, await statusText(s.p));
    check('a checkpoint answer is back in the draft the page reads', await ls(s.p, 'behistorical-draft-topic-1.3-checkpoint-two-response') === 'Restored checkpoint answer.');
    check('and its confidence rating', await ls(s.p, 'behistorical-conf-topic-1.3-checkpoint-two-response') === '3');
    const f10 = JSON.parse(await ls(s.p, 'behistorical-first10-1.3') || 'null');
    check('a First & 10 answer is in the payload the reading restores from', f10 && f10[0] && f10[0].a === 'Restored reading answer.' && f10[0].c === '4', JSON.stringify(f10));
    const bitr = JSON.parse(await ls(s.p, 'behistorical-beintheroom-1.3') || 'null');
    check('a BeInTheRoom reflection is in the key the scenario restores from', bitr && bitr.a === 'Restored reflection.', JSON.stringify(bitr));
    const gathered = await s.p.evaluate(() => collectLessonWork().map(w => w.id + '=' + w.text).join('|'));
    check('and Gather All My Work now carries all three', /checkpoint-two-response=Restored checkpoint answer\./.test(gathered) && /first10-q1=Restored reading answer\./.test(gathered) && /beintheroom-response=Restored reflection\./.test(gathered), gathered);
    check('nothing was written back to the cloud', (await fake(s.p)).writes.length === 0);
    await s.p.evaluate(() => openModule('checkpoint2'));
    check('and the answer is in the box when the module opens', await s.p.evaluate(() => (document.getElementById('checkpoint-two-response') || {}).value) === 'Restored checkpoint answer.');
    await s.context.close();
  }

  // ── Typing is noticed and backed up ────────────────────────────────────────
  section('Typing is backed up');
  {
    const s = await open(browser, UNIT_PAGE, {});
    await waitFor(s.p, () => { const el = document.getElementById('bh-sync'); return el && /Saved\./.test(el.textContent); });
    await s.p.evaluate(() => openModule('checkpoint2'));
    await s.p.fill('#checkpoint-two-response', 'The Khmer Empire used water management to feed Angkor.');
    const wrote = await waitFor(s.p, () => window.__fake.writes.length >= 1, null, 6000);
    const w = (await fake(s.p)).writes;
    check('the typed answer reaches the cloud', wrote && w[0].slot === 'checkpoint-two-response' && /Khmer Empire/.test(w[0].text), JSON.stringify(w));
    check('and the status says it is saved', await waitFor(s.p, () => /Saved\./.test((document.getElementById('bh-sync') || {}).textContent || '')), await statusText(s.p));
    const before = (await fake(s.p)).writes.length;
    await s.p.waitForTimeout(2500);
    check('and then it is quiet', (await fake(s.p)).writes.length === before);
    await s.context.close();
  }

  // ── Two versions ───────────────────────────────────────────────────────────
  section('Two versions of an answer');
  for (const choice of ['saved', 'mine']) {
    const s = await open(browser, UNIT_PAGE, {
      docs: { 'checkpoint-two-response': { text: 'Written at home.' } },
      local: { 'behistorical-draft-topic-1.3-checkpoint-two-response': 'Written at school.' }
    });
    const asked = await waitFor(s.p, () => { const d = document.getElementById('bh-sync-dialog'); return d && d.open; });
    check(`[${choice}] a disagreement opens a dialog instead of overwriting`, asked, await statusText(s.p));
    const shown = await s.p.evaluate(() => (document.getElementById('bh-sync-dialog') || {}).textContent || '');
    check(`[${choice}] and shows both versions`, /Written at home\./.test(shown) && /Written at school\./.test(shown));
    check(`[${choice}] the dialog has an accessible name and focus is inside it`, await s.p.evaluate(() => {
      const d = document.getElementById('bh-sync-dialog');
      const t = d && document.getElementById(d.getAttribute('aria-labelledby'));
      return !!t && t.textContent.length > 0 && d.contains(document.activeElement);
    }));
    check(`[${choice}] nothing is written while it is open`, (await fake(s.p)).writes.length === 0);
    await s.p.click(choice === 'saved' ? 'text=Use the version in my backup' : 'text=Keep the version on this device');
    await waitFor(s.p, () => /Saved\./.test((document.getElementById('bh-sync') || {}).textContent || ''));
    if (choice === 'saved') {
      check('[saved] the page takes the backed-up version', await ls(s.p, 'behistorical-draft-topic-1.3-checkpoint-two-response') === 'Written at home.');
      check('[saved] and the cloud is untouched', (await fake(s.p)).writes.length === 0);
    } else {
      const ok = await waitFor(s.p, () => window.__fake.docs['checkpoint-two-response'].text === 'Written at school.', null, 4000);
      check('[mine] the cloud takes this device\'s version', ok);
      check('[mine] and the page keeps it', await ls(s.p, 'behistorical-draft-topic-1.3-checkpoint-two-response') === 'Written at school.');
    }
    await s.context.close();
  }

  // ── Signed out, offline ────────────────────────────────────────────────────
  section('Signed out, and offline');
  {
    const s = await open(browser, UNIT_PAGE, { user: null, docs: { 'checkpoint-two-response': { text: 'Waiting in the backup.' } } });
    await waitFor(s.p, () => !!document.getElementById('bh-sync'));
    const t = await statusText(s.p);
    check('signed out says the work is only on this device and offers a way in', /this device only/i.test(t) && /Back up my work/.test(t), t);
    check('nothing is restored before signing in', await ls(s.p, 'behistorical-draft-topic-1.3-checkpoint-two-response') === null);
    await s.p.click('text=Back up my work');
    await waitFor(s.p, () => /Saved\./.test((document.getElementById('bh-sync') || {}).textContent || ''));
    check('signing in brings the saved work back', await ls(s.p, 'behistorical-draft-topic-1.3-checkpoint-two-response') === 'Waiting in the backup.');
    check('the status is a live region and its button is a real button', await s.p.evaluate(() => {
      const el = document.getElementById('bh-sync');
      return el.getAttribute('role') === 'status' && el.getAttribute('aria-live') === 'polite';
    }));
    await s.context.close();
  }
  {
    const s = await open(browser, UNIT_PAGE, {});
    await waitFor(s.p, () => /Saved\./.test((document.getElementById('bh-sync') || {}).textContent || ''));
    await s.p.evaluate(() => { window.__fake.offline = true; openModule('checkpoint2'); });
    await s.p.fill('#checkpoint-two-response', 'Typed with no wifi.');
    await waitFor(s.p, () => /this device only/i.test((document.getElementById('bh-sync') || {}).textContent || ''), null, 6000);
    check('offline says the work is on this device only', /this device only/i.test(await statusText(s.p) || ''), await statusText(s.p));
    // The page's own autosave runs 600ms after the last keystroke, so wait for
    // it rather than reading the moment the status changes.
    const kept = await waitFor(s.p, () => localStorage.getItem('behistorical-draft-topic-1.3-checkpoint-two-response') === 'Typed with no wifi.', null, 4000);
    check('and the typing is still in the box and in storage', kept);
    await s.p.evaluate(() => { window.__fake.offline = false; window.dispatchEvent(new Event('online')); });
    check('back online it is sent', await waitFor(s.p, () => window.__fake.docs['checkpoint-two-response'] && window.__fake.docs['checkpoint-two-response'].text === 'Typed with no wifi.', null, 8000));
    await s.context.close();
  }

  // ── Foundations ────────────────────────────────────────────────────────────
  section('Foundations pages');
  {
    const s = await open(browser, FOUNDATIONS_PAGE, { docs: {
      'checkpoint': { text: 'Restored Foundations checkpoint.', confidence: '2' },
      'first10-q2': { text: 'Restored second reading answer.', confidence: '' }
    } });
    const settled = await waitFor(s.p, () => { const el = document.getElementById('bh-sync'); return el && /Saved\./.test(el.textContent); });
    check('the status settles to saved', settled, await statusText(s.p));
    check('a checkpoint answer is back in the draft the page reads', await ls(s.p, 'foundations-topic-foundations-3-checkpoint') === 'Restored Foundations checkpoint.');
    check('and its rating', await ls(s.p, 'foundations-conf-foundations-3-checkpoint') === '2');
    const f10 = JSON.parse(await ls(s.p, 'behistorical-first10-f3') || 'null');
    check('a reading answer is at its own position in the payload', f10 && f10.length >= 2 && f10[1].a === 'Restored second reading answer.' && f10[0].a === '', JSON.stringify(f10));
    check('Gather All My Work carries them', await s.p.evaluate(() => collectLessonWork().map(w => w.slot + '=' + w.text).join('|')).then(g => /checkpoint=Restored Foundations checkpoint\./.test(g) && /first10-q2=Restored second reading answer\./.test(g)));
    await s.context.close();
  }
}

(async () => {
  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  console.log('\x1b[1mBackup on the real lesson pages\x1b[0m');
  await suite(browser);

  // ── Negative controls ──────────────────────────────────────────────────────
  console.log('\n\x1b[1mNegative controls\x1b[0m  \x1b[2meach mutation must turn a check above red\x1b[0m');
  // Each control re-runs a slice by wrapping open() with a renderer patch.
  const controls = [
    {
      name: 'a restored First & 10 answer is not written to the reading\'s payload',
      patch: b => b.replace("  if (first10) {\n    // The reading rebuilds", "  if (false) {\n    // The reading rebuilds"),
      expect: /First & 10 answer is in the payload/
    },
    {
      name: 'the backup is told the lesson has no slots',
      patch: b => b.replace("slots: () => collectLessonWork().map(w => ({ id: w.id, text: w.text, confidence: w.confidence })),", "slots: () => [],"),
      expect: /typed answer reaches the cloud/
    },
    {
      name: 'the pilot switch is ignored',
      patch: b => b.replace("if (!cfg || cfg.pilot !== true) return false;", "return false;"),
      expect: /turns the backup on in that browser/
    },
    {
      name: 'the backup is switched off in the shipped config',
      patch: b => b.replace('"enabled": true', '"enabled": false'),
      expect: /the shipped switch is on for every student|a student with no parameter sees the backup/
    }
  ];

  let controlFailures = 0;
  for (const c of controls) {
    const before = failures;
    quiet = true;
    failed.length = 0;
    const realOpen = open;
    // eslint-disable-next-line no-global-assign
    open = (b, pg, o) => realOpen(b, pg, Object.assign({}, o, {
      patch: body => c.patch(body)
    }));
    try { await suite(browser); } catch (e) { failed.push('crashed: ' + e.message); }
    // eslint-disable-next-line no-global-assign
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
  console.log(failures ? `\n\x1b[31m${failures} failed\x1b[0m` : '\n\x1b[32mAll backup page checks passed.\x1b[0m');
  process.exit(failures ? 1 : 0);
})();
