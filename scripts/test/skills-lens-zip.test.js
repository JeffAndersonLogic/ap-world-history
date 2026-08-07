#!/usr/bin/env node
/**
 * skills-lens-zip.test.js
 *
 * Drops a real Canvas zip onto the real Skills Lens page in a real browser and
 * asserts the panels come up populated.
 *
 * This is the test that matters for the feature. canvas-zip.test.js proves the
 * reader is correct in Node; it cannot prove the page wires it up, that the
 * inlined libraries actually load under the Lens's own Content-Security-Policy,
 * or that the numbers reach the screen. Those are exactly the three things that
 * would break, and all three look like an empty page rather than an error.
 *
 * The CSP is the interesting one. This file ships `default-src 'none'` with
 * `connect-src 'none'`, which is the guarantee that a page holding an entire
 * class's writing cannot send it anywhere. That guarantee is only worth
 * anything if it is still in force after adding a zip reader, and a reader that
 * needed `fetch` or a Worker would have quietly required loosening it.
 *
 *   npm i playwright-core
 *   node scripts/test/skills-lens-zip.test.js
 */

'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');
const http = require('http');
const { execFileSync } = require('child_process');

let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) {
  console.error('This test needs playwright-core. Install it first:\n  npm i playwright-core');
  process.exit(2);
}

const ROOT = path.resolve(__dirname, '..', '..');
const CORE = require('../lib/canvas-parse-core');

const EXE = process.env.PW_CHROME || (function () {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  const dir = (fs.existsSync(base) ? fs.readdirSync(base) : [])
    .filter(d => /^chromium-\d+$/.test(d)).sort().pop();
  return dir ? path.join(base, dir, 'chrome-linux', 'chrome') : 'chromium';
})();

const results = [];
function check(name, pass, detail) {
  results.push(pass);
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  (' + detail + ')' : ''}`);
}

// ── A class set, with the failure modes a real one has ────────────────────────
function submission(topic, slots, opts) {
  const o = opts || {};
  const recs = slots.map((s, i) => ({
    ord: String(s.ord).padStart(2, '0'), slot: s.slot, label: s.label,
    rh: CORE.bhHash(s.text), cf: s.cf == null ? '' : s.cf
  }));
  const sum = CORE.bhHash(recs.map(r => r.slot + ':' + r.rh).join('|'));
  const body = recs.map((r, i) => [
    `<p><strong>${r.label}</strong></p>`,
    `<p><strong>Question:</strong> <em>${slots[i].prompt}</em></p>`,
    '<p><strong>My response:</strong></p>',
    // The one the student edited after gathering must still hash against the
    // recorded value, so write the tampered text into the body only.
    `<p>${o.tamper === i ? slots[i].text + ' And then I changed it.' : slots[i].text}</p>`
  ].join('\n')).join('\n<hr>\n');
  const manifest = [
    '<p>--- BEHISTORICAL RECORD, do not edit ---</p>',
    `<p>#BHV|v=1|topic=${topic}|copied=2026-08-07T14:38:32.878Z|items=${recs.length}|expected=${o.expected || recs.length}|sum=${sum}|#</p>`
  ].concat(recs.map(r =>
    `<p>#BHR|i=${r.ord}|slot=${r.slot}|lab=${r.label}|w=12|c=60|ph=00000000|rh=${r.rh}|cf=${r.cf}|#</p>`
  )).join('\n');
  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>
<p><strong>AP WORLD HISTORY, TOPIC ${topic}</strong></p><hr>
${body}
<hr>
${manifest}
</body></html>`;
}

const SLOTS = [
  { ord: 1, slot: 'map-check-response', label: 'Module 01, Map &amp; Geography Check',
    prompt: 'How did geography shape Song choices?',
    text: 'The northern frontier was exposed to the Liao and the Jin, while the Yangzi south grew rich on rice and trade, so the dynasty spent in the north what it earned in the south.', cf: 4 },
  { ord: 6, slot: 'checkpoint-one-response', label: 'Module 06, Checkpoint 1',
    prompt: 'Why did the civil service examination matter?',
    text: 'It filled the bureaucracy with scholars who owed their standing to the throne and to Confucian learning rather than to an aristocratic family or a regional army.', cf: 3 },
  { ord: 10, slot: 'checkpoint-two-response', label: 'Module 10, Checkpoint 2',
    prompt: 'How did Song commerce reach beyond China?',
    text: 'Porcelain and silk moved on the Grand Canal to coastal ports and from there into Indian Ocean networks reaching Southeast Asia and the Islamic world.', cf: 5 }
];

// Four students: one clean, one who edited an answer, one who gathered short,
// and one who submitted late. Every panel denominator should still be 3 slots.
const STUDENTS = [
  ['andersonjeff_88123_310529_text.html', submission('1.1', SLOTS)],
  ['garciamaria_LATE_88125_310531_text.html', submission('1.1', SLOTS)],
  ['odonnellsiobhan_88124_310530_text.html', submission('1.1', SLOTS, { tamper: 1 })],
  ['zhangwei_88126_310532_text.html', submission('1.1', SLOTS.slice(0, 2), { expected: 3 })]
];

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg' };

(async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'bh-lens-zip-'));
  const stage = path.join(tmp, 'submissions');
  fs.mkdirSync(stage, { recursive: true });
  STUDENTS.forEach(([n, t]) => fs.writeFileSync(path.join(stage, n), t, 'utf8'));
  const zipPath = path.join(tmp, 'submissions.zip');
  execFileSync('zip', ['-q', '-r', zipPath, '.'], { cwd: stage });

  const roster = path.join(tmp, 'roster.csv');
  fs.writeFileSync(roster, [
    'Student,Canvas ID,Period',
    '"Anderson, Jeff",88123,3rd',
    '"O\'Donnell, Siobhan",88124,3rd',
    '"Garcia, Maria",88125,5th',
    '"Zhang, Wei",88126,5th',
    '"Absent, Ana",88127,5th'
  ].join('\n'), 'utf8');

  const server = http.createServer((req, res) => {
    const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
    const file = path.join(ROOT, rel);
    if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      res.writeHead(404); res.end('nope'); return;
    }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    res.end(fs.readFileSync(file));
  });
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;

  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const context = await browser.newContext({ acceptDownloads: true });
  const page = await context.newPage();

  const errors = [];
  const cspViolations = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => {
    const t = m.text();
    if (!/Content Security Policy|Refused to/i.test(t)) return;
    // The Lens fires one deliberate request at example.invalid on load and shows
    // the refusal in its self-test strip, as live proof that connect-src 'none'
    // is actually in force rather than merely written down. That violation is
    // the feature working. Any other one is not.
    if (t.includes('example.invalid')) { selfTestBlocked = true; return; }
    cspViolations.push(t);
  });
  let selfTestBlocked = false;
  // Nothing may leave the page. If the reader ever reached for the network this
  // catches it, rather than trusting the CSP header to have been written right.
  const offPage = [];
  await page.route('**/*', route => {
    const url = route.request().url();
    if (url.startsWith(`http://127.0.0.1:${port}/`)) return route.continue();
    offPage.push(url);
    return route.abort();
  });

  await page.goto(`http://127.0.0.1:${port}/teacher/skills-lens.html`, { waitUntil: 'domcontentloaded' });

  console.log('\n  The inlined libraries survive the page CSP\n');
  check('canvas-parse-core loaded',
    await page.evaluate(() => typeof window.BEHISTORICAL_CANVAS_PARSE === 'object'));
  check('canvas-zip loaded',
    await page.evaluate(() => typeof window.BEHISTORICAL_CANVAS_ZIP === 'object'));
  check('the browser hash agrees with the Node hash on the same string',
    await page.evaluate(() => window.BEHISTORICAL_CANVAS_PARSE.bhHash('The exam system staffed a bureaucracy.'))
      === CORE.bhHash('The exam system staffed a bureaucracy.'));
  check('DecompressionStream is available, so no library is needed',
    await page.evaluate(() => typeof DecompressionStream === 'function'));

  console.log('\n  Dropping the zip\n');
  await page.setInputFiles('#filepick', [zipPath, roster]);
  await page.waitForFunction(() => {
    const el = document.getElementById('zip-progress');
    return el && !el.hidden && /Read \d+ submission/.test(el.textContent);
  }, { timeout: 20000 });

  const progress = await page.textContent('#zip-progress');
  check('the page reports what it read', /Read 4 submissions/.test(progress), progress.trim());

  const stats = await page.evaluate(() => {
    const t = window.__lensState ? window.__lensState.zipTable : null;
    return t ? t.stats : null;
  }).catch(() => null);

  // Read through the DOM rather than internals, because the DOM is what the
  // teacher actually gets.
  check('the filter bar came out of hiding, so the page has data',
    await page.evaluate(() => !document.getElementById('filterbar').hidden));

  // Five, not four. The roster names a fifth student who submitted nothing, and
  // the Lens counts her on purpose: a denominator taken from who managed to
  // submit is precisely the bug this tool exists to prevent, so once a roster is
  // loaded the roster is the denominator.
  const scopeText = await page.textContent('#scope-line').catch(() => '');
  check('the roster, not the submissions, sets the student denominator',
    /In scope: 5 students/.test(scopeText) && /denominator is the roster/.test(scopeText),
    scopeText.trim().slice(0, 96));
  check('and the non-submitter is visibly a non-submitter',
    await page.evaluate(() => document.getElementById('panel-coverage').innerText).then(t => /0 of 3|no submission|did not submit/i.test(t)),
    'coverage panel');

  console.log('\n  The numbers reached the panels\n');

  const coverage = await page.evaluate(() => document.getElementById('panel-coverage').innerText);
  check('the coverage panel rendered something substantial',
    coverage.length > 400, coverage.length + ' characters');
  // Names on screen are intended: the teacher is looking at their own class.
  // The rule is that names never leave the page, so the assertion belongs on the
  // export, which is checked further down.
  check('the teacher sees real names on screen, which is the point of a roster',
    /Anderson|Zhang/i.test(coverage));

  // The roster join is the thing the filename fix was really about.
  const periods = await page.evaluate(() =>
    Array.from(document.getElementById('f-period').options).map(o => o.textContent.trim()));
  check('class periods joined from the roster', periods.includes('3rd') && periods.includes('5th'),
    periods.join(' | '));

  const problems = await page.evaluate(() => {
    const el = document.getElementById('problems');
    return el ? el.innerText : '';
  });
  check('the EDITED student is surfaced, not swallowed',
    /EDITED/i.test(await page.evaluate(() => document.body.innerText)),
    problems.trim().slice(0, 70) || 'checked whole page');

  check('the INCOMPLETE student is surfaced too',
    /INCOMPLETE/i.test(await page.evaluate(() => document.body.innerText)));

  console.log('\n  Every panel renders on real zip data\n');
  const tabs = await page.evaluate(() => Array.from(document.querySelectorAll('[role="tab"]')).map(t => t.id));
  for (const id of tabs) {
    await page.click('#' + id);
    await page.waitForTimeout(60);
    const n = await page.evaluate(() => {
      const p = document.querySelector('[role="tabpanel"]:not([hidden])');
      return p ? p.innerText.trim().length : 0;
    });
    check('panel renders: ' + id.replace(/^tab-/, ''), n > 120, n + ' characters');
  }

  console.log('\n  It still cannot phone home\n');
  check('no request left the page', offPage.length === 0, offPage.join(', ') || 'none');
  check('the page proved its own connect-src lock by being refused', selfTestBlocked);
  check('no other CSP violation was logged', cspViolations.length === 0,
    cspViolations[0] ? cspViolations[0].slice(0, 80) : 'none');
  check('no page errors', errors.length === 0, errors.join(' | ') || 'none');

  console.log('\n  Saving the CSV back out\n');
  await page.click('#tab-coverage').catch(() => {});
  const [download] = await Promise.all([
    page.waitForEvent('download', { timeout: 10000 }),
    page.click('#save-csv')
  ]);
  const saved = path.join(tmp, 'out.csv');
  await download.saveAs(saved);
  const savedCsv = fs.readFileSync(saved, 'utf8');
  check('the download is named responses.csv', download.suggestedFilename() === 'responses.csv',
    download.suggestedFilename());

  // The headline claim: whichever door the teacher walks through, same bytes.
  // The roster has to be passed here too, because the browser had one loaded and
  // class_period is a column. A first version of this compared with-roster
  // output against without-roster output and reported a 33-byte difference,
  // which was 11 rows times a three-character period and not a defect at all.
  const ROSTER = {
    'id:88123': '3rd', 'id:88124': '3rd', 'id:88125': '5th', 'id:88126': '5th', 'id:88127': '5th',
    'name:andersonjeff': '3rd', 'name:odonnellsiobhan': '3rd',
    'name:garciamaria': '5th', 'name:zhangwei': '5th'
  };
  const cliTable = CORE.buildTable(STUDENTS.map(([name, text]) => ({ name, text })), ROSTER);
  const viaCli = CORE.toCsv(CORE.ROW_HEADERS, cliTable.rows);
  check('the saved CSV is byte-identical to what the CLI writes',
    savedCsv === viaCli,
    savedCsv === viaCli ? savedCsv.length + ' bytes' : `browser ${savedCsv.length} vs cli ${viaCli.length}`);
  check('class periods actually landed in it, so that comparison means something',
    /,3rd,/.test(savedCsv) && /,5th,/.test(savedCsv));

  // Rule 2: names never leave the page. On screen is fine; a file is not.
  await page.click('#tab-export');
  await page.waitForTimeout(60);
  await page.click('#x-build');
  await page.waitForTimeout(200);
  const bundle = await page.inputValue('#x-out');
  check('the AI export carries codes, never names',
    bundle.length > 50 && !/Anderson|Siobhan|Garcia|Zhang|Absent/i.test(bundle),
    (bundle.match(/Anderson|Siobhan|Garcia|Zhang|Absent/i) || ['clean, ' + bundle.length + ' chars'])[0]);

  console.log('\n  Failing honestly on a bad drop\n');
  await page.click('#clear-all');
  await page.waitForTimeout(80);
  const notAZip = path.join(tmp, 'notazip.zip');
  fs.writeFileSync(notAZip, 'this is not a zip file, it is a sentence');
  await page.setInputFiles('#filepick', [notAZip]);
  await page.waitForTimeout(400);
  const text = await page.evaluate(() => document.body.innerText);
  check('a file that is not a zip says so, with a next step',
    /does not look like a zip/i.test(text) && /Download Submissions|responses\.csv/i.test(text));

  await browser.close();
  server.close();
  fs.rmSync(tmp, { recursive: true, force: true });

  const failed = results.filter(r => !r).length;
  console.log(`\n  ${results.length - failed}/${results.length} passed\n`);
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
