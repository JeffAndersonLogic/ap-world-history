#!/usr/bin/env node
/**
 * skills-lens-reader.test.js
 *
 * The keyboard reader in Panel 07 and the three artifacts in Panel 08.
 *
 * THE READER exists because a teacher reading 115 answers with a trackpad stops
 * at thirty. The ergonomic bet is one keystroke per response: 1 to 4 tags AND
 * advances, so finishing a prompt costs 115 keys. This asserts J/K move, the
 * digits tag and advance, a repeated digit clears rather than re-tagging, and
 * the keys stay dead while the caret is in a field, which is the failure that
 * would make the search box untypeable.
 *
 * THE ARTIFACTS are what the tool hands you at the end. Every one routes through
 * leakScan(), and this asserts that a real student display name never reaches
 * the output box: the crosswalk is the tool's one privacy promise, and a
 * clustering paste is by definition on its way into somebody's chatbot history.
 *
 * Fixture is synthetic and built at runtime. No student writing is committed.
 *
 *   npm i playwright-core
 *   node scripts/test/skills-lens-reader.test.js
 */

'use strict';

const http = require('http'), fs = require('fs'), path = require('path'), os = require('os');

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

/* Distinctive display names, so a leak is unambiguous when the scan is what is
   under test. "Wollstonecraft" will not turn up by accident in invented prose. */
const NAMES = ['Wollstonecraft, Aphra', 'Zenobia, Quintus', 'Ashurbanipal, Xanthe',
               'Theodoric, Perpetua', 'Machiavelli, Ozymandias', 'Kilimanjaro, Grendel'];
const SLOTS = ['map', 'first10-q1', 'first10-q2', 'first10-q3', 'besurreal',
               'skill', 'checkpoint', 'evidence', 'coach', 'checkpoint2'];
const HEAD = ['student_display', 'canvas_user_id', 'canvas_submission_id', 'class_period', 'late',
              'topic_id', 'module_ord', 'slot_id', 'module_label', 'prompt', 'prompt_hash',
              'response', 'word_count', 'char_count', 'confidence', 'copied_at', 'flags', 'source_file'];

function cell(v) { const s = String(v == null ? '' : v); return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; }
function buildFixture() {
  const rows = [];
  NAMES.forEach((name, i) => {
    SLOTS.forEach((slot, k) => {
      const text = 'A river valley gave irrigation and an agricultural surplus, so answer number ' + (i + 1) + ' follows from that.';
      rows.push([name, 900 + i, 8000 + i, String((i % 2) + 1), '', 'f1',
        String(k + 1).padStart(2, '0'), slot, 'Module ' + String(k + 1).padStart(2, '0') + ', ' + slot,
        'Prompt for ' + slot, '', text, text.split(/\s+/).length, text.length, (i % 5) + 1, '', '',
        'file' + i + '_' + (900 + i) + '_text.html']);
    });
  });
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'lensrd-'));
  fs.writeFileSync(path.join(dir, 'responses.csv'),
    [HEAD.join(',')].concat(rows.map(r => r.map(cell).join(','))).join('\n') + '\n');
  fs.writeFileSync(path.join(dir, 'exceptions.csv'),
    'student_display,canvas_user_id,class_period,topic_id,slot_id,reason,detail,source_file\n');
  return dir;
}

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.csv': 'text/csv' };
const srv = http.createServer((q, r) => {
  const f = path.join(ROOT, decodeURIComponent(q.url.split('?')[0]).replace(/^\/+/, ''));
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); r.end(); return; }
  r.writeHead(200, { 'Content-Type': MIME[path.extname(f)] || 'application/octet-stream' });
  r.end(fs.readFileSync(f));
});

const results = [];
function check(name, pass, detail) {
  results.push(pass);
  console.log('  ' + (pass ? 'PASS' : 'FAIL') + '  ' + name + (detail ? '  (' + detail + ')' : ''));
}

(async () => {
  const dir = buildFixture();
  await new Promise(r => srv.listen(0, r));
  const port = srv.address().port;
  const b = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const pg = await b.newPage();
  const errs = [];
  pg.on('pageerror', e => errs.push(e.message));
  await pg.goto('http://127.0.0.1:' + port + '/teacher/skills-lens.html', { waitUntil: 'domcontentloaded' });
  await (await pg.$('input[type="file"]')).setInputFiles([path.join(dir, 'responses.csv'), path.join(dir, 'exceptions.csv')]);
  await pg.waitForTimeout(900);

  console.log('\n  The keyboard reader\n');

  await pg.evaluate(() => { selectTab('read', false); });
  await pg.waitForTimeout(200);
  const listed = await pg.evaluate(() => document.querySelectorAll('#panel-read [data-read]').length);
  check('the prompt list offers a keyboard read per prompt', listed === 10, listed + ' prompts');

  await pg.click('#panel-read [data-read]');
  await pg.waitForTimeout(200);
  const open = await pg.evaluate(() => ({
    open: Boolean(S.reader), i: S.reader && S.reader.i,
    pos: (document.querySelector('.rd-pos') || {}).textContent,
    card: document.querySelectorAll('.rd-card').length,
    tags: document.querySelectorAll('.rd-tag').length
  }));
  check('it opens on the first response', open.open && open.i === 0, open.pos);
  check('one response fills the panel', open.card === 1 && open.tags === 4, open.tags + ' tag buttons');

  // Focus the body so the keys are not swallowed by whatever the click left focused.
  await pg.evaluate(() => document.body.focus());
  await pg.keyboard.press('j');
  await pg.keyboard.press('j');
  await pg.waitForTimeout(120);
  check('J advances', await pg.evaluate(() => S.reader.i) === 2);
  await pg.keyboard.press('k');
  await pg.waitForTimeout(120);
  check('K goes back', await pg.evaluate(() => S.reader.i) === 1);

  const before = await pg.evaluate(() => S.reader.i);
  await pg.keyboard.press('1');
  await pg.waitForTimeout(120);
  const afterTag = await pg.evaluate(() => ({ i: S.reader.i, n: S.tags.size, vals: Array.from(S.tags.values()) }));
  check('a digit tags AND advances in one keystroke',
    afterTag.n === 1 && afterTag.i === before + 1, 'i ' + before + '->' + afterTag.i + ', ' + afterTag.n + ' tagged');
  check('it applied the tag the key names', afterTag.vals[0] === 'exemplar', afterTag.vals[0]);

  // Go back and press the same digit again: that clears rather than re-tagging.
  await pg.keyboard.press('k');
  await pg.keyboard.press('1');
  await pg.waitForTimeout(120);
  check('re-pressing the same tag clears it, so a misfire costs one key',
    await pg.evaluate(() => S.tags.size) === 0);

  await pg.keyboard.press('2');
  await pg.keyboard.press('3');
  await pg.waitForTimeout(120);
  const spread = await pg.evaluate(() => Array.from(S.tags.values()).sort().join(','));
  check('the four tags are distinct', spread === 'conference,reteach', spread);

  await pg.keyboard.press('Escape');
  await pg.waitForTimeout(150);
  check('Escape leaves the reader and keeps the tags',
    await pg.evaluate(() => !S.reader && S.tags.size === 2));

  // The failure that would make the tool unusable: hot keys firing while typing.
  await pg.evaluate(() => { selectTab('read', false); S.reader = { topic: 'f1', slot: 'checkpoint', i: 0 }; renderReadMode(); });
  await pg.waitForTimeout(150);
  const typed = await pg.evaluate(async () => {
    const box = document.getElementById('f-student');
    box.focus();
    const n0 = S.tags.size, i0 = S.reader.i;
    ['j', 'k', '1', '2'].forEach(k => box.dispatchEvent(new KeyboardEvent('keydown', { key: k, bubbles: true })));
    return { moved: S.reader.i !== i0, tagged: S.tags.size !== n0 };
  });
  check('the reader keys stay dead while the caret is in a field',
    !typed.moved && !typed.tagged);

  console.log('\n  The artifacts\n');

  // Tag a spread so all three artifacts have material.
  await pg.evaluate(() => {
    S.tags.clear();
    const sc = scope();
    const rows = sc.rows.filter(r => r.slot === 'checkpoint' && !r.blank);
    S.tags.set(rowKey(rows[0]), 'exemplar');
    S.tags.set(rowKey(rows[1]), 'reteach');
    S.tags.set(rowKey(rows[2]), 'conference');
    S.tags.set(rowKey(rows[3]), 'conference');
    S.reader = { topic: 'f1', slot: 'checkpoint', i: 0 };
    selectTab('export', false);
  });
  await pg.waitForTimeout(200);

  for (const id of ['cluster', 'opener', 'roster']) {
    const r = await pg.evaluate(async (which) => {
      doArtifact(which);
      const box = document.getElementById('x-out');
      const status = document.getElementById('x-status');
      return { len: box.value.length, text: box.value, status: status.textContent };
    }, id);
    check(id + ' builds something substantial', r.len > 200, r.len + ' chars');
    const leaked = NAMES.filter(n => r.text.indexOf(n) !== -1 || r.text.indexOf(n.split(',')[0]) !== -1);
    check(id + ' contains no student display name', leaked.length === 0, leaked.join(', ') || 'clean');
    check(id + ' reports it was scanned', /scanned against all/.test(r.status));
  }

  const cluster = await pg.evaluate(() => { doArtifact('cluster'); return document.getElementById('x-out').value; });
  check('the clustering paste carries the prompt, the responses and the task',
    /THE ASSIGNMENT THEY GAVE/.test(cluster) && /THE RESPONSES/.test(cluster) && /WHAT TO DO/.test(cluster));
  check('it tells the model not to grade', /Do not grade, rank, or score/.test(cluster));
  // Codes are S- plus four characters from the crosswalk alphabet.
  check('it identifies students by code', /\[S-[A-Z0-9]{4}\]/.test(cluster),
    (cluster.match(/\[S-[A-Z0-9]{4}\]/g) || []).length + ' codes');

  const opener = await pg.evaluate(() => { doArtifact('opener'); return document.getElementById('x-out').value; });
  check('the opener carries the ranked findings', /TOMORROW, FIRST FIVE MINUTES/.test(opener) && /\n1\. /.test(opener));
  check('the opener carries the tagged exemplar', /READ THESE OUT/.test(opener));

  const roster = await pg.evaluate(() => { doArtifact('roster'); return document.getElementById('x-out').value; });
  check('the roster lists the conference-tagged students', /2 students, 2 flagged responses/.test(roster), roster.split('\n')[3]);

  // The refusal path has to actually refuse. Plant a name in the data the
  // artifact reads from and confirm nothing reaches the box.
  const refused = await pg.evaluate(() => {
    const sc = scope();
    const row = sc.rows.filter(r => S.tags.get(rowKey(r)) === 'exemplar')[0];
    const keep = row.response;
    const victim = Array.from(S.students.values())[0];
    row.response = 'This mentions ' + victim.display + ' by name.';
    doArtifact('opener');
    const box = document.getElementById('x-out').value;
    const status = document.getElementById('x-status').textContent;
    row.response = keep;
    return { box: box, status: status };
  });
  check('a name in the source refuses the whole artifact rather than trimming it',
    refused.box === '' && /Refused/i.test(refused.status), refused.status.slice(0, 60));

  check('no page errors', errs.length === 0, errs.slice(0, 2).join(' / '));

  await b.close();
  srv.close();
  fs.rmSync(dir, { recursive: true, force: true });

  const failed = results.filter(r => !r).length;
  console.log('\n  ' + (results.length - failed) + '/' + results.length + ' passed\n');
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error('THREW:', e.message); process.exit(1); });
