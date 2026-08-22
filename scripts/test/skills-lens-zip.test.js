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
  const copied = o.copied === null ? '' : (o.copied || '2026-08-07T14:38:32.878Z');
  const manifest = [
    '<p>--- BEHISTORICAL RECORD, do not edit ---</p>',
    `<p>#BHV|v=1|topic=${topic}|copied=${copied}|items=${recs.length}|expected=${o.expected || recs.length}|sum=${sum}|#</p>`
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

/* A second topic, for the merge tests below. Its first two slots are the ones
   the skills map tags Causation and Continuity and Change, which is what gives
   Panel 10 a real second point rather than a single reading. */
const SLOTS_12 = [
  { ord: 2, slot: 'first10-q1', label: 'Module 02, First &amp; 10, Question 1',
    prompt: 'What caused Dar al-Islam to expand as fast as it did?',
    text: 'Conquest opened the routes and the tax structure kept them open, so merchants and scholars moved along roads an army had cleared and a treasury had reason to maintain.', cf: 4 },
  { ord: 2, slot: 'first10-q2', label: 'Module 02, First &amp; 10, Question 2',
    prompt: 'What continued from the empires that came before?',
    text: 'Persian administrative practice and Byzantine coinage both survived the conquest, because a new ruler who dismantles the tax rolls stops collecting taxes.', cf: 3 },
  { ord: 6, slot: 'checkpoint-one-response', label: 'Module 06, Checkpoint 1',
    prompt: 'How did scholarship travel?',
    text: 'Paper from China met Greek philosophy in Baghdad, and the House of Wisdom translated what the caliphate could afford to have translated.', cf: 5 }
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

  /* ── Merge on drop ──────────────────────────────────────────────────────────
     A Lens that replaced its dataset on every drop could answer "how did last
     night go" and nothing about a year, which is the whole premise of the Over
     time panel. These are the assertions that keep a second drop additive: that
     an older topic survives a newer one, that re-dropping the same file changes
     nothing, that copied_at and not arrival order decides which version of an
     answer is current, and that the teacher is told which of those happened
     rather than being shown "loaded successfully".

     Driven through the real page, on real drops. A unit test over the merge
     function alone would pass just as happily with the page never calling it. */
  console.log('\n  Merge on drop, the cumulative dataset\n');

  const state = () => page.evaluate(() => ({
    responses: S.merged ? S.merged.rows.length : 0,
    exceptions: S.merged ? S.merged.exceptions.length : 0,
    topics: S.topicsPresent.slice(),
    sources: S.sources.length,
    receipt: S.receipts.length ? JSON.parse(JSON.stringify(S.receipts[S.receipts.length - 1])) : null,
    // Text is read back so an "updated" count cannot be believed on its own.
    text: (S.merged ? S.merged.rows : []).reduce((acc, r) => {
      acc[r.student_display + '|' + r.topic_id + '|' + r.slot_id] = r.response; return acc;
    }, {}),
    flags: (S.merged ? S.merged.exceptions : []).map(x => x.student_display + ':' + x.topic_id + ':' + x.reason)
  }));

  const zipOf = (name, files) => {
    const dir = path.join(tmp, 'z-' + name);
    fs.mkdirSync(dir, { recursive: true });
    files.forEach(([n, t]) => fs.writeFileSync(path.join(dir, n), t, 'utf8'));
    const out = path.join(tmp, name + '.zip');
    execFileSync('zip', ['-q', '-r', out, '.'], { cwd: dir });
    return out;
  };
  const drop = async (files) => {
    const before = await page.evaluate(() => S.sources.length);
    await page.setInputFiles('#filepick', files);
    await page.waitForFunction(n => S.sources.length === n, before + 1, { timeout: 20000 });
    await page.waitForTimeout(120);
  };

  const base = await state();
  check('the first zip is one source holding the whole class',
    base.sources === 1 && base.responses === 11 && base.topics.join(',') === '1.1',
    base.responses + ' responses, topics ' + base.topics.join(','));

  // 1 and 2. A later topic arrives. The earlier one must survive it.
  const TOPIC12 = [
    ['andersonjeff_88123_310640_text.html', submission('1.2', SLOTS_12, { copied: '2026-09-14T15:02:00.000Z' })],
    ['garciamaria_88125_310641_text.html', submission('1.2', SLOTS_12, { copied: '2026-09-14T15:44:00.000Z' })],
    ['odonnellsiobhan_88124_310642_text.html', submission('1.2', SLOTS_12, { copied: '2026-09-14T16:10:00.000Z' })]
  ];
  await drop([zipOf('topic12', TOPIC12)]);
  const two = await state();
  check('Topic 1.1 is still there after a Topic 1.2 drop',
    two.topics.indexOf('1.1') !== -1, two.topics.join(', '));
  check('and Topic 1.2 was added rather than replacing it',
    two.topics.join(',') === '1.1,1.2' && two.responses === base.responses + 9,
    two.responses + ' responses across ' + two.topics.join(', '));
  check('the receipt calls all nine of them new',
    two.receipt.added === 9 && two.receipt.updated === 0 && two.receipt.unchanged === 0,
    JSON.stringify({ added: two.receipt.added, updated: two.receipt.updated, unchanged: two.receipt.unchanged }));

  // 3. The same file again. Nothing may grow.
  await drop([zipOf('topic12b', TOPIC12)]);
  const dup = await state();
  check('re-dropping the identical data does not grow the dataset',
    dup.responses === two.responses, dup.responses + ' responses, was ' + two.responses);
  check('and the receipt says so instead of claiming success',
    dup.receipt.added === 0 && dup.receipt.unchanged === 9 && dup.receipt.updated === 0,
    JSON.stringify({ added: dup.receipt.added, unchanged: dup.receipt.unchanged }));

  // 4. A newer version of a submission already held. copied_at decides, and the
  //    stale EDITED flag has to come off with it.
  const KEY = 'odonnellsiobhan|1.1|checkpoint-one-response';
  check('the edited answer is currently the tampered text, and is flagged',
    /And then I changed it/.test(dup.text[KEY] || '') &&
    dup.flags.indexOf('odonnellsiobhan:1.1:EDITED') !== -1,
    dup.flags.filter(f => /odonnell/.test(f)).join(', ') || 'no flags');

  await drop([zipOf('resub', [
    ['odonnellsiobhan_88124_310777_text.html', submission('1.1', SLOTS, { copied: '2026-09-20T18:00:00.000Z' })]
  ])]);
  const newer = await state();
  /* All three slots update, not only the one whose text changed. copied_at is
     part of the record, so a re-paste at a new time is a new version of every
     row in it even where the words came out the same, and the store has to hold
     the timestamp the panels will later order by. Only a byte-identical row is
     a duplicate. */
  check('a newer copied_at replaces the older rows for that student and topic',
    newer.receipt.updated === 3 && newer.receipt.unchanged === 0 && newer.receipt.added === 0,
    JSON.stringify({ added: newer.receipt.added, updated: newer.receipt.updated, unchanged: newer.receipt.unchanged }));
  check('the replacement is really in the data, not only in the count',
    !/And then I changed it/.test(newer.text[KEY] || ''), (newer.text[KEY] || '').slice(-40));
  check('the dataset did not grow, because it was the same three slots',
    newer.responses === dup.responses, newer.responses + ' responses');
  check('and the stale EDITED flag came off with the submission it belonged to',
    newer.flags.indexOf('odonnellsiobhan:1.1:EDITED') === -1 && newer.receipt.excCleared === 1,
    newer.flags.join(', ') || 'none left');

  // 5. An older version, arriving after the newer one. It must lose.
  await drop([zipOf('stale', [
    ['odonnellsiobhan_88124_310111_text.html',
      submission('1.1', SLOTS.map(s => Object.assign({}, s, { text: s.text + ' An earlier draft.' })),
        { tamper: 1, copied: '2026-08-01T09:00:00.000Z' })]
  ])]);
  const older = await state();
  check('an older copied_at does not overwrite the newer row',
    older.receipt.olderIgnored === 3 && older.receipt.updated === 0,
    JSON.stringify({ olderIgnored: older.receipt.olderIgnored, updated: older.receipt.updated }));
  check('the newer text survived the stale drop',
    !/An earlier draft/.test(older.text[KEY] || '') && older.responses === newer.responses,
    (older.text[KEY] || '').slice(-40));
  check('and the older submission could not re-flag the newer one',
    older.flags.indexOf('odonnellsiobhan:1.1:EDITED') === -1 && older.receipt.excRefused === 1,
    JSON.stringify({ excRefused: older.receipt.excRefused }));

  // 6. The undated case, which is the one that silently corrupts a year.
  await drop([zipOf('undated', [
    ['andersonjeff_88123_310999_text.html',
      submission('1.2', SLOTS_12.map(s => Object.assign({}, s, { text: s.text + ' Undated rewrite.' })),
        { copied: null })]
  ])]);
  const undated = await state();
  check('a row with no copied_at is refused rather than overwriting a dated row',
    undated.receipt.undatedRefused === 3 && undated.receipt.updated === 0,
    JSON.stringify({ undatedRefused: undated.receipt.undatedRefused, updated: undated.receipt.updated }));
  check('so the dated text is still what the panels read',
    !/Undated rewrite/.test(undated.text['andersonjeff|1.2|first10-q1'] || ''));

  // 7. The receipt on screen, in the teacher's words.
  const receiptText = (await page.textContent('#merge-receipt') || '').replace(/\s+/g, ' ');
  check('the ingest receipt names added, updated, duplicates and older rows',
    /added/.test(receiptText) && /updated/.test(receiptText) &&
    /duplicate/.test(receiptText) && /older row/.test(receiptText),
    receiptText.slice(0, 110));
  check('and it says the undated rows were refused rather than applied',
    /no copied_at/.test(receiptText) && /refused/.test(receiptText), receiptText.slice(0, 160));
  check('the receipt reports the size of the cumulative set, not of this drop',
    /Cumulative set now holds 20 responses across 2 topics/.test(receiptText),
    (receiptText.match(/Cumulative set[^.]*\./) || ['not found'])[0]);

  // 8. Save writes the cumulative set, not the last drop.
  const [dl2] = await Promise.all([
    page.waitForEvent('download', { timeout: 10000 }),
    page.click('#save-csv')
  ]);
  const cumPath = path.join(tmp, 'cumulative.csv');
  await dl2.saveAs(cumPath);
  const cumulative = fs.readFileSync(cumPath, 'utf8');
  const dataLines = CORE.toCsv(CORE.ROW_HEADERS, []).trim().length
    ? cumulative.trim().split('\n').length - 1 : 0;
  check('the saved CSV holds both topics, not just the most recent drop',
    /,1\.1,/.test(cumulative) && /,1\.2,/.test(cumulative), 'topics 1.1 and 1.2');
  check('it carries the accepted version of the replaced answer and not the rejected ones',
    !/And then I changed it/.test(cumulative) && !/An earlier draft/.test(cumulative) &&
    !/Undated rewrite/.test(cumulative));
  check('and it still parses back to exactly the rows the page holds',
    CORE.toCsv(CORE.ROW_HEADERS, await page.evaluate(() => S.merged.rows)) === cumulative &&
    dataLines >= undated.responses,
    cumulative.length + ' bytes');

  /* Every door, one merge. The spec that mattered here was not "make the zip
     additive", it was "do not grow four merge rules". So the CSV the page just
     wrote is fed straight back to it, a JSON drop and a loose submission file
     follow, and all three have to land under the same identity and the same
     copied_at rule the zip did. */
  console.log('\n  The other three doors merge under the same rule\n');

  const cumulativeCsv = path.join(tmp, 'responses.csv');
  fs.writeFileSync(cumulativeCsv, cumulative, 'utf8');
  await drop([cumulativeCsv]);
  const roundTrip = await state();
  check('the page\'s own saved responses.csv, dropped back on, is entirely duplicates',
    roundTrip.receipt.unchanged === undated.responses && roundTrip.receipt.added === 0 &&
    roundTrip.receipt.updated === 0 && roundTrip.responses === undated.responses,
    JSON.stringify({ unchanged: roundTrip.receipt.unchanged, added: roundTrip.receipt.added,
                     updated: roundTrip.receipt.updated }));

  const jsonPath = path.join(tmp, 'responses.json');
  const jsonRow = Object.assign({}, (await page.evaluate(() =>
    S.merged.rows.filter(r => r.topic_id === '1.2' && r.slot_id === 'first10-q1' &&
      r.student_display === 'andersonjeff')[0])), {
    response: 'A later rewrite of the causation answer, submitted through the JSON door.',
    word_count: 12, copied_at: '2026-10-02T13:00:00.000Z'
  });
  fs.writeFileSync(jsonPath, JSON.stringify({ responses: [jsonRow] }), 'utf8');
  await drop([jsonPath]);
  const viaJson = await state();
  check('a JSON drop updates the same row a zip would have',
    viaJson.receipt.updated === 1 && viaJson.responses === roundTrip.responses &&
    /through the JSON door/.test(viaJson.text['andersonjeff|1.2|first10-q1'] || ''),
    JSON.stringify({ updated: viaJson.receipt.updated, rows: viaJson.responses }));
  check('and a responses-only drop leaves exception state alone rather than clearing it',
    viaJson.exceptions === roundTrip.exceptions,
    viaJson.exceptions + ' exceptions, was ' + roundTrip.exceptions);

  const looseThird = path.join(tmp, 'garciamaria_88125_311200_text.html');
  fs.writeFileSync(looseThird, submission('1.3', SLOTS_12, { copied: '2026-10-09T14:00:00.000Z' }), 'utf8');
  await drop([looseThird]);
  const viaLoose = await state();
  check('a loose submission file adds a third topic to the same cumulative set',
    viaLoose.topics.join(',') === '1.1,1.2,1.3' && viaLoose.responses === viaJson.responses + 3,
    viaLoose.responses + ' responses across ' + viaLoose.topics.join(', '));

  // 9. Panel 10 on merged, multi-topic data. This is the thing merging is for.
  await page.click('#tab-trend');
  await page.waitForTimeout(200);
  const trend = await page.evaluate(() => {
    const el = document.getElementById('panel-trend');
    return {
      skill: document.getElementById('t-skill') ? document.getElementById('t-skill').value : '',
      points: el.querySelectorAll('circle.pt').length,
      segments: el.querySelectorAll('path.seg').length,
      axis: Array.from(el.querySelectorAll('svg text')).map(n => n.textContent),
      rows: Array.from(el.querySelectorAll('table.data tbody tr')).map(tr => tr.children[0].textContent.trim()),
      text: el.innerText
    };
  });
  check('Over time plots a real sequence once several topics are merged',
    trend.points >= 3 && trend.rows.join(',') === '1.1,1.2,1.3',
    trend.points + ' points on ' + trend.rows.join(', ') + ' for ' + trend.skill);
  check('the topics sit in curriculum order on the axis, with their sample sizes',
    trend.axis.indexOf('1.1') < trend.axis.indexOf('1.2') &&
    trend.axis.indexOf('1.2') < trend.axis.indexOf('1.3') &&
    trend.axis.some(t => /^n=\d+/.test(t)),
    trend.axis.filter(t => /^(n=|\d+\.\d+$)/.test(t)).join(' '));
  check('and the segments join them as straight runs, one per unbroken stretch',
    trend.segments >= 1, trend.segments + ' segment path(s)');
  check('and it still refuses to call any of it mastery',
    /does not score mastery/i.test(trend.text));

  /* Requirement G, driven rather than inspected. Narrowing to one student makes
     every sample genuinely small, and the rule is that a thin point stays on the
     chart and is marked, because hiding it would make the line look steadier
     than the evidence. */
  await page.fill('#f-student', 'siobhan');
  await page.waitForTimeout(400);
  const thin = await page.evaluate(() => {
    const el = document.getElementById('panel-trend');
    return {
      plotted: el.querySelectorAll('circle.pt').length,
      flagged: el.querySelectorAll('circle.pt.small').length,
      axis: Array.from(el.querySelectorAll('svg text')).map(n => n.textContent),
      text: el.innerText.replace(/\s+/g, ' ')
    };
  });
  check('a small sample is still plotted, never silently suppressed',
    thin.plotted >= 2 && thin.plotted === thin.flagged,
    thin.plotted + ' plotted, ' + thin.flagged + ' marked small');
  check('and it is visibly flagged on the axis, not only in a tooltip',
    thin.axis.filter(t => /^n=\d+ !$/.test(t)).length === thin.flagged,
    thin.axis.filter(t => /^n=/.test(t)).join(' '));
  check('the small-n rule is written down where the teacher reads it',
    /under n=5/.test(thin.text) && /1\.1 \(n=1\)/.test(thin.text),
    (thin.text.match(/\d+ points? (is|are) under n=5:[^.]*\./) || ['not stated'])[0]);
  await page.fill('#f-student', '');
  await page.waitForTimeout(400);

  console.log('\n  Every panel renders on merged, multi-topic data\n');
  for (const id of tabs) {
    await page.click('#' + id);
    await page.waitForTimeout(60);
    const n = await page.evaluate(() => {
      const p = document.querySelector('[role="tabpanel"]:not([hidden])');
      return p ? p.innerText.trim().length : 0;
    });
    check('merged panel renders: ' + id.replace(/^tab-/, ''), n > 120, n + ' characters');
  }

  check('nothing left the page during any of the merging', offPage.length === 0,
    offPage.join(', ') || 'none');
  check('the CSP is still in force after all of it',
    await page.evaluate(() => {
      const m = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
      return Boolean(m && /default-src 'none'/.test(m.content) && /connect-src 'none'/.test(m.content));
    }));
  check('no CSP violation beyond the page\'s own self-test', cspViolations.length === 0,
    cspViolations[0] ? cspViolations[0].slice(0, 80) : 'none');
  check('no page errors through the whole merge sequence', errors.length === 0,
    errors.join(' | ') || 'none');

  console.log('\n  The real Canvas download, by both gestures\n');

  // Everything above uses submissions this test built. These two use the file
  // Canvas actually handed over on 2026-08-07, and they are the regressions for
  // the two ways the Lens turned it away: the zip reader said "no Canvas text
  // submissions", and the loose file fell into the CSV reader and came back as
  // "was not recognised. Its columns are:" with nothing after it.
  const REAL = path.join(ROOT, 'scripts', 'test', 'fixtures', 'canvas-download-studenttest.html');
  const realText = fs.readFileSync(REAL, 'utf8');

  await page.click('#clear-all');
  await page.waitForTimeout(80);
  const loose = path.join(tmp, 'studenttest_LATE_310529_text.html');
  fs.writeFileSync(loose, realText);
  await page.setInputFiles('#filepick', [loose]);
  await page.waitForTimeout(500);
  const looseMsg = await page.textContent('#zip-progress');
  check('a loose submission file dropped on its own is read',
    /Read 1 submission, 9 responses/.test(looseMsg || ''), (looseMsg || '(nothing)').trim());
  check('and it does not land in the CSV reader',
    !/was not recognised/i.test(await page.evaluate(() => document.body.innerText)));
  check('the panels come up on it',
    await page.evaluate(() => !document.getElementById('filterbar').hidden
      && document.getElementById('panel-coverage').innerText.length > 300));

  // The same file inside a zip, under a name the filename convention does not
  // predict. The name filter finds nothing; the content sniff has to rescue it.
  await page.click('#clear-all');
  await page.waitForTimeout(80);
  const oddDir = path.join(tmp, 'odd');
  fs.mkdirSync(oddDir, { recursive: true });
  fs.writeFileSync(path.join(oddDir, 'submission_310529'), realText);
  const oddZip = path.join(tmp, 'odd.zip');
  execFileSync('zip', ['-q', '-r', oddZip, '.'], { cwd: oddDir });
  await page.setInputFiles('#filepick', [oddZip]);
  await page.waitForTimeout(900);
  const oddMsg = await page.textContent('#zip-progress');
  check('a zip entry the naming convention does not predict is still read',
    /Read 1 submission, 9 responses/.test(oddMsg || ''), (oddMsg || '(nothing)').trim());

  // And when there genuinely is nothing, the message names the entries.
  await page.click('#clear-all');
  await page.waitForTimeout(80);
  const junkDir = path.join(tmp, 'junk');
  fs.mkdirSync(junkDir, { recursive: true });
  fs.writeFileSync(path.join(junkDir, 'Essay Draft.rtf'), 'not a submission');
  const junkZip = path.join(tmp, 'junk.zip');
  execFileSync('zip', ['-q', '-r', junkZip, '.'], { cwd: junkDir });
  await page.setInputFiles('#filepick', [junkZip]);
  await page.waitForTimeout(600);
  const junkText = await page.evaluate(() => document.body.innerText);
  check('an empty result names what was actually in the zip',
    /Essay Draft\.rtf/.test(junkText), 'looked for the entry name in the message');

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
