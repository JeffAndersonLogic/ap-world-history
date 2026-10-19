#!/usr/bin/env node
/**
 * module-grid.unit.browser.test.js
 *
 * The 10-module standard (CLAUDE.md) for unit lesson pages, checked on the page
 * a student actually sees: exactly ten module cards, labeled Module 01 to Module
 * 10 in order, with Module 09 BeInTheRoom and Module 10 Checkpoint 2.
 *
 * Why it exists. Until 2026-10-18 the shared renderer dropped the BeInTheRoom
 * card when a topic had no scenario URL, so Topics 4.8 and 9.9 showed nine
 * modules and numbered Checkpoint 2 "Module 10" after a gap. validate.js checks
 * the Foundations renderer's module list by reading its source; the unit
 * renderer builds its list at run time, so only a browser can see the count.
 *
 * Pages: a topic with no scenario (4.8 and 9.9, where the card must open a
 * "coming soon" dialog) and one with a scenario (4.7, where the card must link
 * out, not open a dialog). A negative control serves the renderer with the old
 * conditional card restored and requires the count check to fail.
 *
 * Needs playwright-core; exits 2 without it.
 */
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');

let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) { console.error('This test needs playwright-core: npm i playwright-core'); process.exit(2); }

const ROOT = path.resolve(__dirname, '..', '..');
const EXE = process.env.PW_CHROME || (function () {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  const dir = (fs.existsSync(base) ? fs.readdirSync(base) : []).filter(d => /^chromium-\d+$/.test(d)).sort().pop();
  return dir ? path.join(base, dir, 'chrome-linux', 'chrome') : 'chromium';
})();
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.png': 'image/png' };
const RENDERER = 'assets/js/behistorical-topic-renderer-v1.js';

// The renderer exactly as it shipped before the fix: no card without a URL, and
// Checkpoint 2's label depending on it.
function oldRenderer(src) {
  const start = src.indexOf("    // Module 09 is always on the grid");
  const end = src.indexOf("    { id: 'checkpoint2', label: 'Module 10',");
  if (start < 0 || end < 0) throw new Error('negative control: could not find the Module 09 block to revert');
  return src.slice(0, start)
    + "    ...(L.beInTheRoom && L.beInTheRoom.url ? [{ id: 'beintheroom', label: 'Module 09', title: 'BeInTheRoom', desc: L.beInTheRoom.desc, img: moduleCardImg('beintheroom', L.map.url), link: L.beInTheRoom.url }] : []),\n"
    + "    { id: 'checkpoint2', label: L.beInTheRoom ? 'Module 10' : 'Module 09',"
    + src.slice(end + "    { id: 'checkpoint2', label: 'Module 10',".length);
}

let mutate = false;
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('nope'); return; }
  let body = fs.readFileSync(file);
  if (mutate && rel === RENDERER) body = oldRenderer(body.toString('utf8'));
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  res.end(body);
});

const results = [];
function check(name, pass, detail) {
  results.push({ name, pass });
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  (' + detail + ')' : ''}`);
}

const PAGES = [
  { file: 'unit-4/lesson-4-8-continuity-and-change.html', room: false },
  { file: 'unit-9/lesson-9-9-continuity-change-globalized-world.html', room: false },
  { file: 'unit-4/lesson-4-7-changing-social-hierarchies.html', room: true }
];
const EXPECT = Array.from({ length: 10 }, (_, i) => `Module ${String(i + 1).padStart(2, '0')}`);

async function grid(page, port, file) {
  await page.goto(`http://127.0.0.1:${port}/${file}`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#module-grid .module-card');
  return page.$$eval('#module-grid .module-card', cards => cards.map(c => ({
    label: c.querySelector('.module-label').textContent.trim(),
    title: c.querySelector('h3').textContent.trim(),
    onclick: c.getAttribute('onclick') || ''
  })));
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.route('**/*', route => route.request().url().startsWith(`http://127.0.0.1:${port}/`) ? route.continue() : route.abort());

  console.log('\nUnit lesson module grid: the 10-module standard\n');
  for (const p of PAGES) {
    const cards = await grid(page, port, p.file);
    const name = path.basename(p.file, '.html');
    check(`${name}: exactly ten module cards`, cards.length === 10, `${cards.length}`);
    check(`${name}: labeled Module 01 to Module 10 in order`, JSON.stringify(cards.map(c => c.label)) === JSON.stringify(EXPECT), cards.map(c => c.label).join(', '));
    const m9 = cards[8] || {};
    const m10 = cards[9] || {};
    check(`${name}: Module 09 is BeInTheRoom`, m9.title === 'BeInTheRoom', m9.title);
    check(`${name}: Module 10 is Checkpoint 2`, m10.title === 'Checkpoint 2', m10.title);
    if (p.room) {
      check(`${name}: BeInTheRoom links out to its scenario`, /openLinkedModule\('[^']*beintheroom\//.test(m9.onclick), m9.onclick.slice(0, 60));
    } else {
      check(`${name}: BeInTheRoom opens a dialog, not a link`, /openModule\('beintheroom'\)/.test(m9.onclick), m9.onclick.slice(0, 60));
      await page.locator('#module-grid .module-card').nth(8).click();
      await page.waitForSelector('#pop-modal.show', { timeout: 5000 }).catch(() => {});
      const body = await page.evaluate(() => { const m = document.getElementById('pop-modal'); return m && m.classList.contains('show') ? document.getElementById('pop-body').textContent : ''; });
      check(`${name}: the dialog says the scenario is coming soon`, /coming soon/i.test(body), body.trim().slice(0, 60));
      await page.keyboard.press('Escape');
    }
  }
  check('no page errors', errors.length === 0, errors.slice(0, 2).join(' | '));

  // Negative control: the old renderer must fail the count on a topic with no scenario.
  mutate = true;
  const before = results.length;
  const old = await grid(page, port, PAGES[0].file);
  mutate = false;
  const caught = old.length !== 10 || JSON.stringify(old.map(c => c.label)) !== JSON.stringify(EXPECT);
  results.length = before;
  check('negative control: the pre-fix renderer is caught (nine cards, a gap at Module 09)', caught, `${old.length} cards: ${old.map(c => c.label).join(', ')}`);

  await browser.close();
  server.close();
  const failed = results.filter(r => !r.pass).length;
  console.log(failed ? `\n  FAIL  ${failed} of ${results.length} checks failed` : `\nModule grid: all ${results.length} checks passed.`);
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
