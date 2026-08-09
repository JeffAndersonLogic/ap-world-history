#!/usr/bin/env node
'use strict';

/**
 * Does the migrated Foundations reading still look like the one it replaced?
 *
 *   node scripts/test/foundations-visual.js [--shots]
 *
 * foundations-golden.js proves no words were lost. It cannot prove the page
 * still looks right, because the migration swapped an 80-line inline stylesheet
 * for the shared assets/css/behistorical-first10.css. Every class the readings
 * use is defined in that file, but "defined" is not "identical", and only a
 * browser can settle it.
 *
 * So this renders the pre-migration page and the generated one side by side and
 * compares the computed style of the elements a reader actually looks at. Fonts,
 * sizes, colours, and the reading measure have to match. --shots also writes
 * full-page PNGs for a human to compare.
 *
 * Needs playwright-core, so it is not part of validate.js. Exits 2 when the
 * browser is missing, like every other browser test here.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) {
  console.error('This check needs playwright-core. Install it first:\n  npm i playwright-core');
  process.exit(2);
}

const ROOT = path.resolve(__dirname, '..', '..');
const CONTENT = require('../lib/foundations-f10-content');
// Pinned for the same reason as foundations-golden.js: a HEAD baseline would
// compare the generated page against itself.
const BASE = process.env.BASE || '4bcd126e898a77841d2b706c2b2fe1ed9f546b8c';
const SHOTS = process.argv.includes('--shots');

const R = '\x1b[31m', G = '\x1b[32m', Y = '\x1b[33m', W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';

const EXE = process.env.PW_CHROME || (function () {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  const builds = (fs.existsSync(base) ? fs.readdirSync(base) : [])
    .filter(d => /^chromium-\d+$/.test(d)).sort();
  for (const b of builds.reverse()) {
    for (const layout of ['chrome-linux64', 'chrome-linux']) {
      const exe = path.join(base, b, layout, 'chrome');
      if (fs.existsSync(exe)) return exe;
    }
  }
  return 'chromium';
})();

// Properties that decide whether a page reads the same. Layout box plus type.
const PROPS = ['font-family', 'font-size', 'font-weight', 'font-style', 'line-height',
  'color', 'background-color', 'text-transform', 'letter-spacing', 'padding-top', 'margin-bottom'];

// One representative element per region, by class.
const TARGETS = ['module-header', 'module-badge', 'module-subtitle', 'reading-title-band',
  'reading-title', 'reading-deck', 'skill-tag', 'reading-body', 'support-card', 'term-chip',
  'section-number', 'section-label', 'section-heading', 'reading-text', 'ap-callout',
  'ap-callout-label', 'kt', 'be-ready', 'check-section', 'check-badge', 'q-num', 'q-skill',
  'q-text', 'q-textarea', 'builder-section', 'builder-heading', 'page-footer-note', 'nav-btn'];

/**
 * Differences reviewed on 2026-08-09 and accepted, with the reason.
 *
 * These are not exceptions to the check, they are its findings. The six
 * Foundations readings each carried their own copy of the stylesheet and had
 * drifted slightly off the values the other 71 readings use; adopting the shared
 * sheet is what closes that gap. Listing them here keeps the check strict about
 * everything else, so the next unreviewed change still fails.
 *
 * Anything not listed is a regression until a human says otherwise.
 */
const ACCEPTED = new Map([
  ['section-label|font-size', 'converges to the shared .58rem/.6rem label scale'],
  ['section-label|letter-spacing', 'tracks the font-size change above'],
  ['ap-callout-label|letter-spacing', 'converges to the shared .2em callout tracking'],
  ['check-badge|font-size', 'converges to the shared badge scale'],
  ['check-badge|letter-spacing', 'tracks the font-size change above'],
  ['check-badge|padding-top', 'tracks the font-size change above'],
  ['check-badge|_width', 'consequence of the badge font-size, not an independent change'],
  ['q-num|padding-top', '1px of optical nudge the shared sheet does not carry'],
  // The one that is a fix rather than a convergence. On --charcoal-steel the old
  // #5a5f5c gave 2.08:1, under the 4.5:1 WCAG AA needs for body text. The shared
  // #9da19f gives 5.17:1. The submission instruction is now legible.
  ['page-footer-note|color', 'contrast fix: 2.08:1 failed WCAG AA, shared value is 5.17:1']
]);

const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp' };

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); res.end('not found'); return;
  }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  res.end(fs.readFileSync(file));
});

async function styles(page, url) {
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  return page.evaluate((args) => {
    const [targets, props] = args;
    const out = {};
    for (const cls of targets) {
      const el = document.querySelector('.' + cls);
      if (!el) { out[cls] = null; continue; }
      const cs = getComputedStyle(el);
      const rec = {};
      for (const p of props) rec[p] = cs.getPropertyValue(p);
      rec['_width'] = Math.round(el.getBoundingClientRect().width);
      out[cls] = rec;
    }
    return out;
  }, [TARGETS, PROPS]);
}

(async () => {
  const temps = [];
  // Write the pre-migration pages beside the new ones so their relative paths
  // resolve the same way.
  for (const key of Object.keys(CONTENT)) {
    const rel = `foundations/${CONTENT[key].sourceFile}`;
    const orig = execFileSync('git', ['show', `${BASE}:${rel}`], { cwd: ROOT, maxBuffer: 32 * 1024 * 1024 });
    const tmp = path.join(ROOT, 'foundations', `__before-${CONTENT[key].sourceFile}`);
    fs.writeFileSync(tmp, orig);
    temps.push({ key, tmp, rel });
  }

  await new Promise(r => server.listen(0, '127.0.0.1', r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: EXE });
  const page = await browser.newPage({ viewport: { width: 1100, height: 900 } });

  const shotDir = path.join(ROOT, '.visual-check');
  if (SHOTS && !fs.existsSync(shotDir)) fs.mkdirSync(shotDir);

  let failed = 0;
  const allAccepted = [];
  console.log(`\n${W}Foundations readings, appearance preserved${X} ${D}(baseline: ${BASE})${X}\n`);

  for (const { key, tmp, rel } of temps) {
    const beforeUrl = `http://127.0.0.1:${port}/foundations/${path.basename(tmp)}`;
    const afterUrl = `http://127.0.0.1:${port}/${rel}`;

    const before = await styles(page, beforeUrl);
    if (SHOTS) await page.screenshot({ path: path.join(shotDir, `${key}-before.png`), fullPage: true });
    const after = await styles(page, afterUrl);
    if (SHOTS) await page.screenshot({ path: path.join(shotDir, `${key}-after.png`), fullPage: true });

    const diffs = [];
    const accepted = [];
    for (const cls of TARGETS) {
      const b = before[cls], a = after[cls];
      if (!b && !a) continue;
      if (!b || !a) { diffs.push(`.${cls} present in only one version`); continue; }
      for (const p of Object.keys(b)) {
        if (b[p] === a[p]) continue;
        const line = `.${cls} ${p}: ${b[p]} → ${a[p]}`;
        if (ACCEPTED.has(`${cls}|${p}`)) accepted.push({ line, why: ACCEPTED.get(`${cls}|${p}`) });
        else diffs.push(line);
      }
    }
    allAccepted.push(...accepted.map(a => a.line));

    if (diffs.length === 0) {
      const note = accepted.length ? `, ${accepted.length} reviewed delta(s)` : '';
      console.log(`  ${G}✓${X} ${key}  ${D}${TARGETS.length} regions, no unreviewed style change${note}${X}`);
    } else {
      failed++;
      console.log(`  ${R}✗${X} ${W}${key}${X}  ${diffs.length} style difference(s)`);
      for (const d of diffs.slice(0, 14)) console.log(`      ${Y}${d}${X}`);
      if (diffs.length > 14) console.log(`      ${D}...and ${diffs.length - 14} more${X}`);
    }
  }

  await browser.close();
  server.close();
  for (const { tmp } of temps) fs.unlinkSync(tmp);

  console.log(`\n${'─'.repeat(60)}`);
  if (allAccepted.length) {
    console.log(`${Y}Reviewed and accepted, applies to all six readings:${X}`);
    for (const [k, why] of ACCEPTED) console.log(`  ${D}.${k.replace('|', ' ')} — ${why}${X}`);
    console.log('');
  }
  if (SHOTS) console.log(`${D}screenshots in .visual-check/${X}`);
  if (failed) {
    console.log(`${R}${W}${failed} reading(s) render differently.${X}`);
    process.exit(1);
  }
  console.log(`${G}${W}All 6 readings render with no unreviewed style change.${X}`);
})().catch(e => { console.error(e); server.close(); process.exit(1); });
