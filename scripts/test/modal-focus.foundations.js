#!/usr/bin/env node
/**
 * modal-focus.foundations.js
 *
 * Drives a real lesson page in Chromium and asserts the modal focus contract:
 * focus moves into the dialog, Tab and Shift+Tab are trapped, Escape closes only
 * the topmost dialog, and focus returns to the element that opened it.
 *
 * This needs a browser. A DOM stub cannot tell you where focus went, and focus
 * is the entire behavior under test, so the assertions here are the only thing
 * standing between a screen-reader user and being locked out of the lesson
 * content: the map, the reading and the primary source all live in these modals.
 *
 * Not part of `node scripts/validate.js`, which is offline and dependency-free
 * on purpose. Run it directly when touching openModule, closeModule, the lecture
 * modal, the lightbox, or anything in the BHModal* helpers:
 *
 *   npm i playwright-core        # once, not committed
 *   node scripts/test/modal-focus.foundations.js
 *
 * Chromium comes from PLAYWRIGHT_BROWSERS_PATH; adjust EXE if yours differs.
 */

'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');

// Required lazily so the failure is a sentence rather than a stack trace. This
// is the one script in the repo with a dependency, and it is not installed by
// default on purpose: validate.js must stay runnable on a bare checkout.
let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) {
  console.error('This test needs playwright-core. Install it first:\n  npm i playwright-core');
  process.exit(2);
}

const ROOT = path.resolve(__dirname, '..', '..');
// Chromium ships with the environment. PW_CHROME overrides it if yours differs.
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
  results.push({ name, pass, detail });
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  (' + detail + ')' : ''}`);
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));

  const url = `http://127.0.0.1:${port}/foundations/foundations-1-geography.html`;
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#module-grid .module-card');

  // ── Open a module by keyboard, the way a screen-reader user would ──────────
  const card = page.locator('#module-grid .module-card').nth(4); // AP Skill Builder
  await card.focus();
  const cardTitle = await card.locator('h3').textContent();
  await page.keyboard.press('Enter');
  await page.waitForSelector('#pop-modal.show');
  await page.waitForTimeout(60);

  check('focus moves into the dialog on open',
    await page.evaluate(() => document.activeElement && document.activeElement.id === 'pop-modal'),
    'activeElement=' + await page.evaluate(() => document.activeElement && (document.activeElement.id || document.activeElement.tagName)));

  check('dialog is labelled by its heading',
    await page.evaluate(() => document.getElementById('pop-modal').getAttribute('aria-labelledby') === 'pop-title'));

  check('aria-modal is set while open',
    await page.evaluate(() => document.getElementById('pop-modal').getAttribute('aria-modal') === 'true'));

  check('background scroll is locked',
    await page.evaluate(() => document.body.style.overflow === 'hidden'));

  // ── Tab must stay inside ───────────────────────────────────────────────────
  let escaped = false;
  for (let i = 0; i < 25; i++) {
    await page.keyboard.press('Tab');
    const inside = await page.evaluate(() =>
      document.getElementById('pop-modal').contains(document.activeElement));
    if (!inside) { escaped = true; break; }
  }
  check('Tab is trapped inside the dialog (25 presses)', !escaped);

  let escapedBack = false;
  for (let i = 0; i < 25; i++) {
    await page.keyboard.press('Shift+Tab');
    const inside = await page.evaluate(() =>
      document.getElementById('pop-modal').contains(document.activeElement));
    if (!inside) { escapedBack = true; break; }
  }
  check('Shift+Tab is trapped too', !escapedBack);

  // ── Escape closes and returns focus ────────────────────────────────────────
  await page.keyboard.press('Escape');
  await page.waitForTimeout(60);
  check('Escape closes the dialog',
    !await page.evaluate(() => document.getElementById('pop-modal').classList.contains('show')));

  const returned = await page.evaluate(() => {
    const a = document.activeElement;
    const h3 = a && a.querySelector ? a.querySelector('h3') : null;
    return { isCard: !!(a && a.classList && a.classList.contains('module-card')), title: h3 ? h3.textContent : '' };
  });
  check('focus returns to the launching card', returned.isCard && returned.title === cardTitle,
    'landed on: ' + (returned.title || 'not a card'));

  check('scroll lock released', await page.evaluate(() => document.body.style.overflow === ''));

  // The Foundations renderer never opens a lightbox, so there is no nested
  // dialog on these pages. The shells do carry an unused #lightbox element.
  console.log('  SKIP  nested lightbox (Foundations has no lightbox behavior)');
  await page.evaluate(() => closeModule());
  await page.waitForTimeout(40);

  // ── Lecture modal, the other launcher ──────────────────────────────────────
  const lectureCard = page.locator('#main-lecture-grid .lecture-topic-card, #lecture-grid .lecture-topic-card').first();
  if (await lectureCard.count()) {
    await lectureCard.focus();
    await page.keyboard.press('Enter');
    await page.waitForSelector('#lecture-modal.show');
    await page.waitForTimeout(60);
    check('lecture modal takes focus',
      await page.evaluate(() => document.activeElement && document.activeElement.id === 'lecture-modal'));
    await page.keyboard.press('Escape');
    await page.waitForTimeout(60);
    check('lecture modal returns focus to its card',
      await page.evaluate(() => document.activeElement &&
        document.activeElement.classList.contains('lecture-topic-card')));
  }

  // ── The capture pipeline must still work after all this ────────────────────
  await page.evaluate(() => {
    openModule('map');
    const t = document.getElementById('foundations-1-map');
    t.value = 'The canal linked the two river systems.';
    t.dispatchEvent(new Event('input', { bubbles: true }));
  });
  await page.waitForTimeout(800);
  await page.evaluate(() => closeModule());
  const doc = await page.evaluate(() => { const d = gatherAllWork(); return d ? d.plain : null; });
  check('Gather still produces a manifest after modal use',
    !!doc && /#BHV\|v=1\|topic=f1\|/.test(doc) && /#BHR\|i=01\|slot=map/.test(doc));

  check('no page errors', errors.length === 0, errors.join(' | ') || 'none');

  await browser.close();
  server.close();

  const failed = results.filter(r => !r.pass);
  console.log(`\n  ${results.length - failed.length}/${results.length} passed`);
  process.exit(failed.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
