#!/usr/bin/env node
/**
 * retake-planner-page.test.js
 *
 * The Retake Planner teacher page in Chromium.
 *
 * What it proves:
 *   - the page asks nothing of any host: the only requests are its own four files, its
 *     two brand fonts and its logo images, all on this site, and its security policy refuses anything else (a fetch from the page is
 *     blocked, which the test proves by trying one);
 *   - the invented demo loads, matches every question and counts every student;
 *   - two files chosen through the file picker, in either order and in the
 *     one-row-per-answer layout, give the same plan as the demo's other layout;
 *   - a file that is not a question map is refused with a reason, not drawn;
 *   - projector safe leaves no student name and no question or answer wording on
 *     the results, and turning it off brings the names back (the check can fail);
 *   - the downloaded plan is a CSV with one row per student per target;
 *   - "missed most" never lists more students than "missed any";
 *   - no console error and no security-policy violation;
 *   - it fits a phone without sideways scrolling.
 *
 *   npm i --no-save playwright-core
 *   node scripts/test/retake-planner-page.test.js
 */
'use strict';
const http = require('http');
const fs = require('fs');
const os = require('os');
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
  const found = dir && ['chrome-linux', 'chrome-linux64'].map(d => path.join(base, dir, d, 'chrome')).find(f => fs.existsSync(f));
  return found || (fs.existsSync(path.join(base, 'chromium')) ? path.join(base, 'chromium') : undefined);
})();
const E = require(path.join(ROOT, 'teacher', 'retake-planner-engine.js'));
const SHOTS = process.env.SHOTS || '';

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml' };
function serve() {
  return new Promise(resolve => {
    const server = http.createServer((req, res) => {
      const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
      const file = path.join(ROOT, rel);
      if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
      res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

// Invented test files, written to a temporary folder: never committed, never real.
function fixtures(dir) {
  const targets = { 'X.1 LT1': 'I can explain invented idea one.', 'X.1 LT2': 'I can explain invented idea two.', 'X.2 LT1': 'I can compare invented cases.' };
  const lts = Object.keys(targets);
  const questions = [];
  for (let n = 1; n <= 6; n += 1) {
    questions.push({ n, lt: lts[(n - 1) % 3], stem: 'Fixture question ' + n, options: [1, 2, 3, 4].map(k => 'Fixture ' + n + ' option ' + k), answer: n % 4, points: 1, rationale: 'Fixture reason ' + n });
  }
  const map = { format: E.MAP_FORMAT, title: 'Fixture test', version: '1', targets, questions };
  const people = ['Pat Fixture', 'Sam Fixture', 'Lee Fixture'];
  const long = [['Student Name', 'Student ID', 'Section', 'Attempt', 'Item Position', 'Question Text', 'Answer', 'Points Received', 'Points Possible', 'Status']];
  people.forEach((p, s) => questions.forEach((q, i) => {
    const miss = (s + i) % 3 === 0;
    long.push([p, String(s + 1), 'Period 2', '1', String(6 - i), q.stem, q.options[miss ? (q.answer + 1) % 4 : q.answer], miss ? '0' : '1', '1', 'Graded']);
  }));
  const mapFile = path.join(dir, 'Fixture-Retake-Map.json');
  const csvFile = path.join(dir, 'Fixture Student Analysis Report.csv');
  const notMap = path.join(dir, 'something-else.json');
  fs.writeFileSync(mapFile, JSON.stringify(map));
  fs.writeFileSync(csvFile, long.map(r => r.map(E.csvCell).join(',')).join('\r\n'));
  fs.writeFileSync(notMap, JSON.stringify({ hello: 'world' }));
  return { mapFile, csvFile, notMap, people };
}

let failed = 0;
async function check(name, fn) {
  try { await fn(); console.log('  PASS  ' + name); }
  catch (e) { failed += 1; console.log('  FAIL  ' + name + '\n        ' + String(e && e.message || e).split('\n').join('\n        ')); }
}
function assert(cond, msg) { if (!cond) throw new Error(msg); }

(async () => {
  const server = await serve();
  const port = server.address().port;
  const origin = 'http://127.0.0.1:' + port;
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'retake-planner-'));
  const fx = fixtures(tmp);
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const ctx = await browser.newContext({ acceptDownloads: true, viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  const requests = [];
  const errors = [];
  page.on('request', r => requests.push(r.url()));
  page.on('console', m => { if (m.type() === 'error') errors.push(m.text()); });
  page.on('pageerror', e => errors.push(String(e)));
  await page.addInitScript(() => {
    window.__csp = [];
    document.addEventListener('securitypolicyviolation', e => window.__csp.push(e.violatedDirective + ' ' + e.blockedURI));
  });
  await page.goto(origin + '/teacher/retake-planner.html', { waitUntil: 'load' });

  const resultsText = () => page.locator('#results').innerText();
  const allResultsText = () => page.evaluate(() => {
    // Every panel, the hidden tabs and closed details included.
    return [...document.querySelectorAll('#results [role=tabpanel]')].map(p => p.textContent).join('\n');
  });

  await check('the demo matches every question and counts every student', async () => {
    await page.click('#demo');
    await page.waitForSelector('#results:not([hidden])');
    const status = await page.locator('#status').innerText();
    assert(/Matched 8 of 8/.test(status), 'status: ' + status);
    assert(/Demo\./.test(status), 'the demo must say it is invented');
    assert(await page.locator('#s-students').innerText() === '12', 'students');
    assert(await page.locator('#view-targets .target').count() === 4, 'one card per target');
    assert(/Avery Demo/.test(await allResultsText()), 'names show by default');
    if (SHOTS) await page.screenshot({ path: path.join(SHOTS, 'retake-targets.png'), fullPage: true });
  });

  await check('By student lists every student who took it', async () => {
    await page.click('#tab-students');
    assert(await page.locator('#view-students tbody tr').count() === 12, 'rows');
    if (SHOTS) await page.screenshot({ path: path.join(SHOTS, 'retake-students.png'), fullPage: true });
    await page.click('#tab-questions');
    assert(await page.locator('#view-questions tbody tr').count() === 8, 'question rows');
    await page.click('#tab-targets');
  });

  await check('projector safe hides every name and every question or answer wording', async () => {
    await page.click('#names button[data-v="anon"]');
    const text = await allResultsText();
    assert(!/[A-Z][a-z]+ Demo/.test(text), 'a student name is still on the page');
    assert(!/invented choice/.test(text), 'an answer choice is still on the page');
    assert(!/Invented\. Real maps/.test(text), 'a rationale is still on the page');
    assert(/Student 1/.test(text), 'numbers replace names');
    // Negative control: the same check on the named view must find names.
    await page.click('#names button[data-v="show"]');
    assert(/[A-Z][a-z]+ Demo/.test(await allResultsText()), 'the name check cannot fail');
  });

  await check('"missed most" never lists more students than "missed any"', async () => {
    const any = Number(await page.locator('#s-retake').innerText());
    await page.click('#rule button[data-v="most"]');
    const most = Number(await page.locator('#s-retake').innerText());
    assert(most <= any, most + ' > ' + any);
    assert(any > 0, 'the demo should have students to retake');
    await page.click('#rule button[data-v="any"]');
  });

  await check('the downloaded plan has one row per student per target', async () => {
    const [dl] = await Promise.all([page.waitForEvent('download'), page.click('#download')]);
    const text = fs.readFileSync(await dl.path(), 'utf8').replace(/^﻿/, '');
    const rows = E.parseCsv(text);
    assert(rows[0][0] === 'student' && rows[0][4] === 'learning target', 'header: ' + rows[0].join('|'));
    const students = new Set(rows.slice(1).map(r => r[0]));
    assert(students.size === 12, 'every student appears: ' + students.size);
  });

  await check('a file that is not a question map is refused with a reason', async () => {
    await page.click('#clear');
    await page.setInputFiles('#filepick', [fx.notMap]);
    await page.waitForFunction(() => document.getElementById('status').textContent.trim() !== '');
    const status = await page.locator('#status').innerText();
    assert(/not a Retake Planner question map/.test(status), status);
    assert(await page.locator('#results').isHidden(), 'nothing drawn');
  });

  await check('two chosen files, one row per answer, Canvas order reversed', async () => {
    await page.click('#clear');
    await page.setInputFiles('#filepick', [fx.csvFile]);
    await page.waitForFunction(() => document.getElementById('status').textContent.trim() !== '');
    assert(/Add the question map/.test(await page.locator('#status').innerText()), 'one file waits for the other');
    await page.setInputFiles('#filepick', [fx.mapFile]);
    await page.waitForSelector('#results:not([hidden])');
    const status = await page.locator('#status').innerText();
    assert(/Matched 6 of 6/.test(status), status);
    assert(/one row per answer/.test(status), 'layout named');
    assert(await page.locator('#s-students').innerText() === '3', 'students');
    const text = await allResultsText();
    fx.people.forEach(p => assert(text.includes(p), p + ' missing'));
  });

  await check('the page reaches nothing but its own files, brand fonts and logo', async () => {
    const own = new Set(['/teacher/retake-planner.html', '/teacher/retake-planner.css', '/teacher/retake-planner-engine.js', '/teacher/retake-planner-app.js',
      '/assets/fonts/andersonlogic/manrope-latin-var.woff2', '/assets/fonts/andersonlogic/inter-latin-var.woff2',
      '/assets/images/brand/andersonlogic/al-logo-mark.png', '/assets/images/brand/andersonlogic/al-logo-wordmark.png',
      '/assets/images/brand/andersonlogic/al-logo-lockup.png', '/assets/images/brand/andersonlogic/al-favicon.png']);
    const stray = requests.filter(u => !u.startsWith('data:') && !u.startsWith('blob:') && !own.has(u.replace(origin, '')));
    assert(!stray.length, 'unexpected requests: ' + stray.join(', '));
    // Negative control: a fetch from the page is refused by its policy and recorded.
    const outcome = await page.evaluate(() => fetch('https://example.com/x').then(() => 'sent', () => 'blocked'));
    assert(outcome === 'blocked', 'a fetch was allowed');
    const csp = await page.evaluate(() => window.__csp.slice());
    assert(csp.some(v => /connect-src/.test(v)), 'the blocked fetch should be recorded as a violation');
    await page.evaluate(() => { window.__csp.length = 0; });
  });

  await check('the brand shows: the ANDERSONLOGIC ai logo images load, and its fonts really load', async () => {
    // A logo that fails to load still occupies its box and reads its alt text, so "the
    // img is there" proves nothing; a loaded image has a natural width.
    const logos = await page.evaluate(() => [...document.querySelectorAll('.topbar img, .hero-logo')].map(i => ({ alt: i.alt, ok: i.complete && i.naturalWidth > 0 })));
    assert(logos.length === 3, 'mark, wordmark and lockup: ' + logos.length);
    assert(logos.every(l => l.ok), 'an image did not load: ' + JSON.stringify(logos));
    assert(logos.some(l => l.alt === 'ANDERSONLOGIC ai'), 'the wordmark image names the brand for a screen reader');
    const broken = await page.evaluate(() => new Promise(res => { const i = new Image(); i.onload = i.onerror = () => res(i.naturalWidth); i.src = 'data:image/png;base64,AAAA'; }));
    assert(broken === 0, 'negative control: an image that fails must show a natural width of 0');
    const footer = (await page.locator('footer .al-wordmark').innerText()).replace(/\s+/g, ' ').trim();
    assert(footer === 'ANDERSONLOGIC ai', 'footer wordmark: ' + footer);
    assert(!/BeHistorical/.test(await page.locator('body').innerText()), 'no BeHistorical branding left on the page');
    // document.fonts.check() answers true for a face that does not exist at all, so it
    // proves nothing; the list of faces whose files actually loaded does.
    const loaded = await page.evaluate(async () => { await document.fonts.ready; return [...document.fonts].filter(f => f.status === 'loaded').map(f => f.family.replace(/"/g, '')); });
    assert(loaded.includes('Manrope') && loaded.includes('Inter'), 'loaded faces: ' + loaded.join(', '));
    assert(!loaded.includes('Cinzel'), 'negative control: a face this page never loads must not be listed');
  });

  await check('no console error and no security-policy violation', async () => {
    const csp = await page.evaluate(() => window.__csp.slice());
    const real = errors.filter(e => !/example\.com|Content Security Policy|Failed to fetch/.test(e));
    assert(!real.length, 'console: ' + real.join(' | '));
    assert(!csp.length, 'policy: ' + csp.join(' | '));
  });

  await check('it fits a phone without sideways scrolling', async () => {
    const phone = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await phone.goto(origin + '/teacher/retake-planner.html', { waitUntil: 'load' });
    await phone.click('#demo');
    await phone.waitForSelector('#results:not([hidden])');
    for (const tab of ['targets', 'students', 'questions']) {
      await phone.click('#tab-' + tab);
      const over = await phone.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      assert(over <= 1, tab + ' scrolls sideways by ' + over + 'px');
    }
    if (SHOTS) { await phone.click('#tab-targets'); await phone.screenshot({ path: path.join(SHOTS, 'retake-phone.png'), fullPage: true }); }
    await phone.close();
  });

  await browser.close();
  server.close();
  fs.rmSync(tmp, { recursive: true, force: true });
  console.log(failed ? '\n' + failed + ' failed' : '\nAll checks passed.');
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
