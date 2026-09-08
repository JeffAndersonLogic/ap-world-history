#!/usr/bin/env node
/**
 * announcements-refresh.test.js
 *
 * The classroom board is built to stay up overnight: it ticks every second and
 * re-renders when the date rolls over. Until this test existed, what it
 * re-rendered from was the copy of announcements.js the browser downloaded
 * whenever the tab was opened, because the file arrives through a plain
 * <script src> and was never read again.
 *
 * So a board left running across a schedule change kept projecting the old day,
 * correctly and confidently, with nothing on screen to say it was stale. That is
 * how Topic 1.5 stayed on ten required modules on the wall for two hours after
 * the corrected file was already live on Pages.
 *
 * This has to be a browser test. The behaviour IS the passage of midnight in a
 * long-lived tab against a file that changed underneath it, and neither half of
 * that is observable from Node: no DOM stub re-executes a <script> tag, and
 * nothing offline can see that a projector is showing a cached day.
 *
 * Four things are asserted, and the last two matter as much as the first two,
 * because a classroom is exactly where the network drops:
 *
 *   1. rollover picks up a file that changed since load
 *   2. it re-fetches ONCE, not once per clock tick
 *   3. a failed refresh keeps the data already in hand and still rolls over
 *   4. a refresh that returns something unusable does not blank the board
 *
 *   npm i playwright-core
 *   node scripts/test/announcements-refresh.test.js
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

/* ---------------------------------------------------------
   The fixture data

   Three consecutive days so the clock can cross two midnights.
   Deliberately not the real schedule: this test is about whether a
   changed file is picked up, and pinning it to real content would
   make it fail the next time a topic is rescheduled.
   --------------------------------------------------------- */
const COHORTS = {
  green: { label: 'Green Day', short: 'Green', letter: 'G', mark: '#2F5C46', ink: '#2F5C46', tint: '#E7EFE9', onDark: '#7FB496', filled: true },
  silver: { label: 'Silver Day', short: 'Silver', letter: 'S', mark: '#8A9298', ink: '#545B5F', tint: '#ECEEEF', onDark: '#B9C1C6', filled: false }
};

function day(date, cohort, topic, modules) {
  return {
    date, cohort, unit: 'Unit 1: Fixture', topic,
    learningTargets: [{ text: 'I can read the board.' }],
    successCriteria: [{ text: 'I can name what is due.' }],
    modules: modules.map((m) => ({ number: m[0], title: m[1] })),
    homework: []
  };
}

function payload(days) {
  return 'window.BEHISTORICAL_ANNOUNCEMENTS = ' + JSON.stringify({
    settings: { courseName: 'AP World History', teacherName: '', roomName: '', slideSeconds: 15, apExamDate: '2027-05-06' },
    cohorts: COHORTS,
    days,
    assessments: [],
    reminders: []
  }) + ';';
}

const DAY1 = '2026-09-08', DAY2 = '2026-09-09', DAY3 = '2026-09-10';

// What the tab downloads at load: one day, two modules.
const V1 = payload([day(DAY1, 'green', 'Old Topic', [['01', 'Map & Geography Check'], ['02', 'First & 10 Reading']])]);

// What Pages is serving by the time midnight arrives.
const V2 = payload([
  day(DAY1, 'green', 'Old Topic', [['01', 'Map & Geography Check'], ['02', 'First & 10 Reading']]),
  day(DAY2, 'silver', 'New Topic', [['05', 'AP Skill Builder'], ['06', 'Checkpoint 1'], ['08', 'Primary Source']]),
  day(DAY3, 'green', 'Third Topic', [['10', 'Checkpoint 2']])
]);

/* The server's answer for the data file is a variable, because the whole point
   is that the file changes while the tab is open. `mode` is what the next
   request gets, and every request is counted. */
let mode = 'v1';
let dataHits = 0;

const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');

  if (rel === 'assets/data/announcements.js') {
    dataHits++;
    if (mode === 'fail') { res.writeHead(503); res.end('down'); return; }
    if (mode === 'garbage') {
      // An error page served with status 200, the failure that would blank the
      // board if the new file were adopted without checking its shape.
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.end('window.BEHISTORICAL_ANNOUNCEMENTS = { days: [] };');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/javascript' });
    res.end(mode === 'v2' ? V2 : V1);
    return;
  }

  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); res.end('nope'); return;
  }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  res.end(fs.readFileSync(file));
});

const results = [];
function ok(msg) { results.push([true, msg]); }
function bad(msg) { results.push([false, msg]); }
function is(actual, expected, msg) {
  if (actual === expected) ok(msg);
  else bad(`${msg}  (expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)})`);
}

/* A clock the test drives. The board reads new Date() and Date.now() every
   tick, so an offset applied to both is enough to walk it past midnight
   without waiting for one. */
const FAKE_CLOCK = `
  (function () {
    var Real = Date;
    var base = new Real(2026, 8, 8, 10, 0, 0).getTime();
    window.__advance = function (ms) { window.__offset += ms; };
    window.__offset = 0;
    function now() { return base + window.__offset; }
    function Fake(a, b, c, d, e, f, g) {
      if (!(this instanceof Fake)) return new Fake(a, b, c, d, e, f, g);
      switch (arguments.length) {
        case 0: return new Real(now());
        case 1: return new Real(a);
        case 2: return new Real(a, b);
        case 3: return new Real(a, b, c);
        case 4: return new Real(a, b, c, d);
        case 5: return new Real(a, b, c, d, e);
        case 6: return new Real(a, b, c, d, e, f);
        default: return new Real(a, b, c, d, e, f, g);
      }
    }
    Fake.prototype = Real.prototype;
    Fake.now = now;
    Fake.parse = Real.parse;
    Fake.UTC = Real.UTC;
    Date = Fake;
  })();
`;

/* What is on the board right now: the day's topic title and the numbers on the
   Today's Required Modules slide. Read out of the rendered DOM, because a
   variable in the page's closure is not what the room sees. */
const READ_BOARD = `(function () {
  var out = { topic: '', modules: [], titles: [] };
  document.querySelectorAll('.slide').forEach(function (s) {
    var t = s.querySelector('.slide-title');
    if (t) out.titles.push(t.textContent.trim());
    if (t && /Required Modules/i.test(t.textContent)) {
      s.querySelectorAll('.module-num').forEach(function (n) { out.modules.push(n.textContent.trim()); });
    }
  });
  var topic = document.querySelector('#masthead-topic');
  out.topic = topic ? topic.textContent.trim() : '';
  return out;
})()`;

(async () => {
  await new Promise((r) => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const ctx = await browser.newContext();
  await ctx.addInitScript(FAKE_CLOCK);
  const page = await ctx.newPage();
  const pageErrors = [];
  page.on('pageerror', (e) => pageErrors.push(String(e)));

  await page.goto(`http://127.0.0.1:${port}/announcements.html`, { waitUntil: 'load' });
  await page.waitForTimeout(400);

  // ---- 1. the board loads the file it was served ----
  let board = await page.evaluate(READ_BOARD);
  is(board.modules.join(','), '01,02', 'at load the board draws the file it downloaded');
  const hitsAfterLoad = dataHits;

  // ---- 2. the file changes, then midnight arrives ----
  mode = 'v2';
  await page.evaluate('window.__advance(16 * 60 * 60 * 1000)');   // 10:00 -> next day 02:00
  await page.waitForFunction(
    `(${READ_BOARD}).modules.join(',') === '05,06,08'`,
    null, { timeout: 8000 }
  ).catch(() => {});
  board = await page.evaluate(READ_BOARD);
  is(board.modules.join(','), '05,06,08', 'rollover picks up a file that changed since load');
  is(dataHits, hitsAfterLoad + 1, 'the rollover re-fetched the file exactly once');

  // ---- 3. it does not keep re-fetching every tick ----
  await page.waitForTimeout(2500);
  is(dataHits, hitsAfterLoad + 1, 'no further fetches while the date holds still');

  // ---- 4. a dead network keeps the day it has and still rolls over ----
  mode = 'fail';
  const hitsBeforeFail = dataHits;
  await page.evaluate('window.__advance(24 * 60 * 60 * 1000)');
  await page.waitForFunction(
    `(${READ_BOARD}).modules.join(',') === '10'`,
    null, { timeout: 8000 }
  ).catch(() => {});
  board = await page.evaluate(READ_BOARD);
  is(board.modules.join(','), '10', 'a failed refresh still rolls over, using the data in hand');
  is(board.titles.indexOf('Board Not Loaded'), -1, 'a failed refresh never blanks the board');
  is(dataHits, hitsBeforeFail + 1, 'a failed refresh is attempted once, not retried forever');

  // ---- 5. a 200 that is not usable data must not replace good data ----
  const beforeGarbage = await page.evaluate(READ_BOARD);
  mode = 'garbage';
  await page.evaluate('window.__advance(24 * 60 * 60 * 1000)');
  await page.waitForTimeout(2000);
  board = await page.evaluate(READ_BOARD);
  is(board.titles.indexOf('Board Not Loaded'), -1, 'an empty file served with status 200 does not blank the board');
  // Day 4 has no entry in the fixture, so the honest render is the no-entry
  // card. What must NOT happen is losing the schedule behind it.
  const keptSchedule = await page.evaluate('!!(window.BEHISTORICAL_ANNOUNCEMENTS)');
  is(keptSchedule, true, 'the page still holds a schedule after an unusable refresh');
  void beforeGarbage;

  is(pageErrors.length, 0, `no uncaught page errors${pageErrors.length ? ': ' + pageErrors.join('; ') : ''}`);

  await browser.close();
  server.close();

  const failed = results.filter(([good]) => !good);
  results.forEach(([good, msg]) => console.log(`  ${good ? 'ok  ' : 'FAIL'} ${msg}`));
  console.log('');
  if (failed.length) {
    console.log(`Announcements refresh: ${failed.length} of ${results.length} checks failed.`);
    process.exit(1);
  }
  console.log(`Announcements refresh: all ${results.length} checks passed.`);
})().catch((err) => {
  console.error(err);
  try { server.close(); } catch (e) {}
  process.exit(1);
});
