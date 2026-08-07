#!/usr/bin/env node
/**
 * confidence.test.js
 *
 * Drives a real lesson page in Chromium and asserts the confidence scale
 * contract end to end: it renders under every response box, it is operable by
 * keyboard alone, it survives closing and reopening a module, a blank stays
 * blank, and the value reaches the Canvas record manifest as `cf=`.
 *
 * The scale is the first real source for a metric the old Teacher Hub averaged
 * for months without ever receiving. If it silently stops reaching the manifest,
 * the Skills Lens goes back to charting nothing, which is the failure this whole
 * pipeline exists to make impossible. Hence a browser test rather than a unit
 * test: persistence and keyboard operation are the behavior, and a DOM stub
 * cannot observe either.
 *
 * The three First & 10 questions are covered too. Their control is built at
 * runtime by scripts/lib/first10-capture-block.js inside the reading's iframe,
 * which is a different document from the lesson page, so it needs its own
 * assertions.
 *
 *   npm i playwright-core
 *   node scripts/test/confidence.test.js
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
  '.svg': 'image/svg+xml', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.png': 'image/png' };

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); res.end('nope'); return;
  }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  res.end(fs.readFileSync(file));
});

const results = [];
function check(name, pass, detail) {
  results.push(pass);
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  (' + detail + ')' : ''}`);
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));

  // Abort anything not served by the local fixture server. The readings link
  // Google Fonts and Wikimedia images, which in a sandbox hang rather than fail
  // fast, leaving the document in readyState "loading" so the inline capture
  // block at the foot of the page never executes. That is a test artefact, not a
  // site defect: both renderers already degrade to local artwork on a dead image.
  await page.route('**/*', route => {
    const url = route.request().url();
    return url.startsWith(`http://127.0.0.1:${port}/`) ? route.continue() : route.abort();
  });

  await page.goto(`http://127.0.0.1:${port}/unit-1/lesson-1-1-song-china.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#module-grid .module-card');

  // ── The scale renders under a response box ─────────────────────────────────
  await page.evaluate(() => openModule('checkpoint1'));
  await page.waitForSelector('#pop-modal.show');
  await page.waitForTimeout(80);

  const ID = 'checkpoint-one-response';
  check('confidence fieldset renders',
    await page.evaluate(id => !!document.getElementById(id + '-confidence'), ID));
  check('it is a fieldset with a legend, not a bare div',
    await page.evaluate(id => {
      const el = document.getElementById(id + '-confidence');
      return el && el.tagName === 'FIELDSET' && !!el.querySelector('legend');
    }, ID));
  check('five real radio inputs',
    await page.evaluate(id =>
      document.querySelectorAll('#' + id + '-confidence input[type="radio"]').length === 5, ID));
  check('nothing is preselected, a blank is a real answer',
    await page.evaluate(id =>
      !document.querySelector('#' + id + '-confidence input:checked'), ID));

  // ── Keyboard alone ─────────────────────────────────────────────────────────
  // A radiogroup moves selection with arrow keys. If this needed a mouse, the
  // metric would quietly under-report exactly the students who need it noticed.
  await page.evaluate(id => document.querySelector('#' + id + '-confidence input').focus(), ID);
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(60);
  const picked = await page.evaluate(id => {
    const c = document.querySelector('#' + id + '-confidence input:checked');
    return c ? c.value : '';
  }, ID);
  check('arrow keys select a rating', picked === '3', 'landed on ' + (picked || 'nothing'));

  check('the modal focus trap still holds with the radios present',
    await (async () => {
      for (let i = 0; i < 20; i++) {
        await page.keyboard.press('Tab');
        if (!await page.evaluate(() => document.getElementById('pop-modal').contains(document.activeElement))) return false;
      }
      return true;
    })());

  // ── Persistence ────────────────────────────────────────────────────────────
  await page.evaluate(() => closeModule());
  await page.waitForTimeout(60);
  await page.evaluate(() => openModule('checkpoint1'));
  await page.waitForTimeout(80);
  check('rating survives closing and reopening the module',
    await page.evaluate(id => {
      const c = document.querySelector('#' + id + '-confidence input:checked');
      return c && c.value === '3';
    }, ID));

  // ── Clear ──────────────────────────────────────────────────────────────────
  await page.evaluate(id => document.querySelector('#' + id + '-confidence .confidence-clear').click(), ID);
  await page.waitForTimeout(60);
  check('Clear returns it to blank',
    await page.evaluate(id => !document.querySelector('#' + id + '-confidence input:checked'), ID));

  // Put it back so the manifest assertion below has something to find.
  await page.evaluate(id => {
    const input = document.querySelector('#' + id + '-confidence input[value="4"]');
    input.checked = true;
    input.dispatchEvent(new Event('change', { bubbles: true }));
  }, ID);
  await page.evaluate(id => {
    const t = document.getElementById(id);
    t.value = 'The exam system staffed a bureaucracy loyal to the emperor.';
    t.dispatchEvent(new Event('input', { bubbles: true }));
  }, ID);
  await page.waitForTimeout(800);
  await page.evaluate(() => closeModule());

  // ── It reaches the manifest ────────────────────────────────────────────────
  const doc = await page.evaluate(() => { const d = gatherAllWork(); return d ? d.plain : ''; });
  check('rating reaches the record manifest as cf=',
    /#BHR\|i=06\|slot=checkpoint-one-response\|[^#]*\|cf=4\|#/.test(doc),
    (doc.match(/#BHR\|i=06[^#]*\|#/) || ['not found'])[0].slice(-40));

  // An unrated slot must emit an empty cf, not a zero and not a missing field:
  // the parser distinguishes "skipped" from "rated 0", and so must the Lens.
  await page.evaluate(() => {
    openModule('map');
    const t = document.getElementById('map-check-response');
    t.value = 'The canal linked the two river systems.';
    t.dispatchEvent(new Event('input', { bubbles: true }));
  });
  await page.waitForTimeout(800);
  await page.evaluate(() => closeModule());
  const doc2 = await page.evaluate(() => { const d = gatherAllWork(); return d ? d.plain : ''; });
  check('an unrated slot emits an empty cf, not a zero',
    /#BHR\|i=01\|slot=map-check-response\|[^#]*\|cf=\|#/.test(doc2));

  // ── The First & 10 questions, inside the reading iframe ────────────────────
  // Two frames deep, not one: the lesson embeds the capture wrapper, and the
  // wrapper embeds the reading. The wrapper is what intercepts MagicSchool.
  await page.evaluate(() => openModule('first10'));
  await page.waitForSelector('#pop-body iframe');
  const wrapper = await (await page.$('#pop-body iframe')).contentFrame();
  await wrapper.waitForSelector('#first10-frame', { timeout: 15000 });
  const frame = await (await wrapper.$('#first10-frame')).contentFrame();
  await frame.waitForSelector('.q-textarea, .qta', { timeout: 15000 });
  // Wait for the control itself rather than a fixed delay. The block builds it
  // after the textareas exist, so a timeout here races the reading's own load.
  await frame.waitForSelector('[id^="bh-conf-row-"]', { timeout: 15000 });

  check('reading injects a confidence row per question',
    await frame.evaluate(() => document.querySelectorAll('[id^="bh-conf-row-"]').length >= 3),
    'rows: ' + await frame.evaluate(() => document.querySelectorAll('[id^="bh-conf-row-"]').length));

  await frame.evaluate(() => {
    const t = document.querySelectorAll('.q-textarea, .qta')[0];
    t.value = 'Champa rice allowed two harvests a year.';
    t.dispatchEvent(new Event('input', { bubbles: true }));
    const r = document.querySelector('input[name="bh-conf-0"][value="5"]');
    r.checked = true;
    r.dispatchEvent(new Event('change', { bubbles: true }));
  });
  await page.waitForTimeout(700);

  const payload = await frame.evaluate(() => localStorage.getItem('behistorical-first10-1.1'));
  check('reading stores the rating alongside the answer',
    !!payload && JSON.parse(payload)[0].c === '5',
    payload ? JSON.stringify(JSON.parse(payload)[0]).slice(0, 70) : 'no payload');

  await page.evaluate(() => closeModule());
  const doc3 = await page.evaluate(() => { const d = gatherAllWork(); return d ? d.plain : ''; });
  check('First & 10 rating reaches the lesson manifest',
    /#BHR\|i=02\|slot=first10-q1\|[^#]*\|cf=5\|#/.test(doc3),
    (doc3.match(/#BHR\|i=02\|slot=first10-q1[^#]*\|#/) || ['not found'])[0].slice(-30));

  check('no page errors', errors.length === 0, errors.join(' | ') || 'none');

  await browser.close();
  server.close();

  const failed = results.filter(r => !r).length;
  console.log(`\n  ${results.length - failed}/${results.length} passed`);
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
