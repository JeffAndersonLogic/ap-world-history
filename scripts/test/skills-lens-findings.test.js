#!/usr/bin/env node
/**
 * skills-lens-findings.test.js
 *
 * Two things the Lens gained on 2026-08-14, and both of them can fail silently.
 *
 * 1. THE TERM FALLBACK.  Unit topics hang evidence terms off their two
 *    checkpoint slots. Foundations does not have per-checkpoint terms at all,
 *    and scripts/build-skills-map.js is right not to invent them: a Foundations
 *    checkpoint carries a checklist of expectation sentences, not evidence
 *    words. Its real vocabulary hangs off the topic.
 *
 *    Every panel here read slot terms, so on all six Foundations topics the
 *    Evidence Term panel, the term column in Panel 03 and the "confident and
 *    thin" table in Panel 06 printed "no terms authored" and drew nothing. Three
 *    working analyses dark for the only unit that had been taught, with the
 *    vocabulary they needed one level up in the same file.
 *
 *    slotMeta() now lets a checkpoint borrow the topic list and records
 *    termScope:'topic' when it does. This asserts it fires on Foundations
 *    checkpoints, does NOT fire on a Map Check (scoring a map prompt against
 *    thirteen topic terms would be measuring the wrong thing loudly), and never
 *    mutates the shipped skills map.
 *
 * 2. THE FINDINGS.  Three ranked conclusions above Panel 01. The ranking rule is
 *    a severity band plus share of class, and the bands never cross. The thing
 *    that matters most about it is that it is DETERMINISTIC: a tool that
 *    reshuffles its own conclusions between renders is a tool nobody believes
 *    twice. This renders repeatedly and asserts the same three in the same
 *    order, and asserts no finding ever prints NaN, undefined, or a denominator
 *    it does not have.
 *
 * The fixture is synthetic and generated at runtime, deliberately. Real student
 * writing does not get committed to this repo.
 *
 *   npm i playwright-core
 *   node scripts/test/skills-lens-findings.test.js
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

/* ── The fixture ───────────────────────────────────────────────────────────
   Foundations 1, the ten slots the renderer captures, twelve invented students.
   Written so the interesting findings are guaranteed to fire:
     - one student short of a full set, so coverage has something to say
     - answers that avoid almost all of the topic vocabulary, so the absent-term
       finding fires through the fallback and not through a slot list
     - two students rated 5 with no vocabulary at all, so "confident and thin"
       has names in it                                                        */
const SLOTS = ['map', 'first10-q1', 'first10-q2', 'first10-q3', 'besurreal',
               'skill', 'checkpoint', 'evidence', 'coach', 'checkpoint2'];
const HEAD = ['student_display', 'canvas_user_id', 'canvas_submission_id', 'class_period', 'late',
              'topic_id', 'module_ord', 'slot_id', 'module_label', 'prompt', 'prompt_hash',
              'response', 'word_count', 'char_count', 'confidence', 'copied_at', 'flags', 'source_file'];

const PLAIN = 'People near good water grew food and stayed put while others kept moving around to find things to eat.';
const RICH  = 'The Neolithic Revolution began where a river valley offered irrigation and alluvial soil, and the agricultural surplus that followed produced job specialization in the first civilization.';

function cell(v) { const s = String(v == null ? '' : v); return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s; }
// Twenty-four, not twelve. The absent-term finding fires under five percent
// use, and with twelve students a single term-using student sits at eight,
// which quietly tested nothing.
const N = 24;
function buildFixture() {
  const rows = [];
  for (let i = 0; i < N; i++) {
    const name = 'student' + String(i + 1).padStart(2, '0');
    // The last student stops after six slots, so the denominator has a real gap.
    const slots = i === N - 1 ? SLOTS.slice(0, 6) : SLOTS;
    slots.forEach((slot, k) => {
      // Two loud, empty-handed students; one quiet student who knows the words.
      const rich = i === 0;
      const text = rich ? RICH : PLAIN;
      const conf = (i === 1 || i === 2) ? 5 : (rich ? 2 : 3);
      rows.push([name, 900 + i, 8000 + i, '', '', 'f1', String(k + 1).padStart(2, '0'), slot,
        'Module ' + String(k + 1).padStart(2, '0') + ', ' + slot, 'Prompt for ' + slot, '',
        text, text.split(/\s+/).length, text.length, conf, '', '', name + '_' + (900 + i) + '_text.html']);
    });
  }
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'lensfix-'));
  fs.writeFileSync(path.join(dir, 'responses.csv'),
    [HEAD.join(',')].concat(rows.map(r => r.map(cell).join(','))).join('\n') + '\n');
  const lastName = 'student' + String(N).padStart(2, '0');
  fs.writeFileSync(path.join(dir, 'exceptions.csv'),
    'student_display,canvas_user_id,class_period,topic_id,slot_id,reason,detail,source_file\n' +
    lastName + ',' + (900 + N - 1) + ',,f1,,INCOMPLETE,6 of 10 capture slots present,' +
    lastName + '_' + (900 + N - 1) + '_text.html\n');
  return dir;
}

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.csv': 'text/csv' };
const srv = http.createServer((q, r) => {
  const rel = decodeURIComponent(q.url.split('?')[0]).replace(/^\/+/, '');
  const f = path.join(ROOT, rel);
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

  console.log('\n  The Foundations term fallback\n');

  const fb = await pg.evaluate(() => {
    const cp = slotMeta('f1', 'checkpoint');
    const cp2 = slotMeta('f1', 'checkpoint2');
    const map = slotMeta('f1', 'map');
    const raw = SKILLS.topics.f1;
    return {
      cpTerms: (cp && cp.terms || []).length, cpScope: cp && cp.termScope || null,
      cp2Terms: (cp2 && cp2.terms || []).length,
      mapTerms: (map && map.terms || []).length, mapScope: map && map.termScope || null,
      topicTerms: (raw.terms || []).length,
      rawSlotTerms: (raw.slots.checkpoint.terms || []).length,
      rawHasScope: 'termScope' in raw.slots.checkpoint
    };
  });

  check('a Foundations checkpoint resolves terms', fb.cpTerms > 0, fb.cpTerms + ' terms');
  check('it borrows the topic list, and says so', fb.cpScope === 'topic', String(fb.cpScope));
  check('both checkpoints get them', fb.cp2Terms === fb.cpTerms, fb.cp2Terms + ' vs ' + fb.cpTerms);
  check('the count matches the topic vocabulary', fb.cpTerms === fb.topicTerms, fb.cpTerms + ' of ' + fb.topicTerms);
  check('a Map Check does NOT borrow them', fb.mapTerms === 0 && fb.mapScope === null,
    fb.mapTerms + ' terms, scope ' + fb.mapScope);
  check('the shipped skills map is not mutated',
    fb.rawSlotTerms === 0 && fb.rawHasScope === false);

  // The panels that were dark. Each has to draw something now.
  const panels = await pg.evaluate(() => {
    const out = {};
    ['terms', 'confidence', 'module'].forEach(p => {
      S.active = p; renderActive();
      const el = document.getElementById('panel-' + p);
      out[p] = { chars: el.innerText.trim().length, empty: /No slot in this scope has authored evidence terms/.test(el.innerText) };
    });
    return out;
  });
  check('the Evidence Term panel is no longer empty for Foundations',
    !panels.terms.empty && panels.terms.chars > 400, panels.terms.chars + ' chars');
  check('it labels the borrowed scope rather than passing it off as per-slot',
    await pg.evaluate(() => { S.active = 'terms'; renderActive();
      return /topic vocabulary, not a per-slot list/i.test(document.getElementById('panel-terms').innerText); }));

  console.log('\n  Findings\n');

  const f1 = await pg.evaluate(() => {
    S.active = 'coverage'; renderActive();
    const box = document.querySelector('.findings');
    return {
      n: box ? box.querySelectorAll('.finding').length : 0,
      titles: Array.prototype.map.call(box ? box.querySelectorAll('.f-title') : [], e => e.textContent),
      lead: box ? box.querySelectorAll('.finding.lead').length : 0,
      gotos: Array.prototype.map.call(box ? box.querySelectorAll('[data-goto]') : [], e => e.getAttribute('data-goto')),
      text: box ? box.innerText : ''
    };
  });

  check('findings render above the panel', f1.n >= 1 && f1.n <= 3, f1.n + ' shown');
  check('exactly one is marked as the lead', f1.lead === 1, String(f1.lead));
  check('every finding carries a control that opens its evidence',
    f1.gotos.length >= f1.n && f1.gotos.every(g => ['coverage', 'grid', 'module', 'skill', 'terms', 'confidence', 'read', 'export'].indexOf(g) !== -1),
    f1.gotos.join(', '));
  check('no finding prints NaN, undefined, or null',
    !/\bNaN\b|\bundefined\b|\bnull\b/.test(f1.text));
  // The engine, not the display. Only three are shown, so asserting on rendered
  // text silently stops testing any finding that ranks fourth.
  const eng = await pg.evaluate(() => {
    const f = buildFindings(scope());
    return {
      ids: f.map(x => x.id),
      weights: f.map(x => Math.round(x.weight * 1000) / 1000),
      sorted: f.every((x, i) => i === 0 || f[i - 1].weight >= x.weight)
    };
  });
  check('the absent-term finding fires through the fallback',
    eng.ids.indexOf('terms') !== -1, eng.ids.join(' > '));
  check('the confident-and-thin finding fires',
    eng.ids.indexOf('thin') !== -1, eng.ids.join(' > '));
  check('the untrustworthy-data band outranks everything below it',
    eng.ids[0] === 'pipeline', eng.ids[0] + ' @ ' + eng.weights[0]);
  check('findings come back sorted by weight, descending', eng.sorted,
    eng.weights.join(' > '));
  // A finding pushed twice ranks twice and pushes a real one off the top three.
  // This shipped once, from editing a rule in place and leaving the old block.
  check('no finding id appears twice',
    new Set(eng.ids).size === eng.ids.length, eng.ids.join(' > '));
  check('the bands never cross: no band-C finding outranks a band-B one',
    (function () {
      const BAND = { pipeline: 0.80, coverage: 0.60, terms: 0.60, thin: 0.40, underrated: 0.40, skills: 0.20 };
      return eng.ids.every((id, i) => i === 0 || BAND[eng.ids[i - 1]] >= BAND[id]);
    })(), eng.ids.join(' > '));

  // Determinism. Render four more times and demand the same three, in order.
  const repeats = await pg.evaluate(() => {
    const runs = [];
    for (let i = 0; i < 4; i++) {
      S.active = 'coverage'; renderActive();
      runs.push(Array.prototype.map.call(document.querySelectorAll('.findings .f-title'), e => e.textContent).join(' | '));
    }
    return runs;
  });
  const first = f1.titles.join(' | ');
  check('the same drop yields the same findings in the same order',
    repeats.every(r => r === first), repeats.every(r => r === first) ? '5 renders identical' : 'ORDER MOVED');

  check('no page errors', errs.length === 0, errs.slice(0, 2).join(' / '));

  await b.close();
  srv.close();
  fs.rmSync(dir, { recursive: true, force: true });

  const failed = results.filter(r => !r).length;
  console.log('\n  ' + (results.length - failed) + '/' + results.length + ' passed\n');
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error('THREW:', e.message); process.exit(1); });
