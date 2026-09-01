#!/usr/bin/env node
/**
 * coach-prompt.test.js
 *
 * Drives a real lesson page in Chromium, drafts a checkpoint response, clicks
 * Build My AI Coach Prompt, and asserts the text in the preview is byte-identical
 * to what `scripts/lib/socrates-course.js` produces for the same topic.
 *
 * WHY THIS NEEDS A BROWSER
 *
 * The paste is the whole mechanism by which one MagicSchool chatbot can coach 77
 * topics. Socrates' instructions name no unit content on purpose, so if a field
 * goes missing from this block the coaching silently degrades to generic writing
 * advice, and every offline check stays green: nothing offline can click a button
 * and read what landed in the preview.
 *
 * The offline `socrates-contract.test.js` proves the Node side can build a
 * complete block for all 77 topics, and `build-coach-prompt.js --check` proves the
 * renderer's inlined copy of the builder matches its source. Neither proves the
 * renderer actually *calls* it with the right fields. That is this test, and it is
 * the only thing that would catch a typo in the object passed to
 * buildCoachPrompt(), which is exactly the kind of change that looks fine in a
 * diff.
 *
 *   npm i playwright-core        # once, not committed
 *   node scripts/test/coach-prompt.test.js
 */

'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const { loadCourse, contextBlock } = require('../lib/socrates-course');

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
  results.push({ name, pass, detail });
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  (' + detail + ')' : ''}`);
}

// Two topics from different halves of the course, because the period line and the
// key concept shape both differ between them, and one of the two Foundations-style
// topics has no CED key concepts at all.
const CASES = [
  { id: '1.1', page: 'unit-1/lesson-1-1-song-china.html' },
  { id: '7.2', page: 'unit-7/lesson-7-2-causes-wwi.html' }
];

// Foundations is a separate renderer with a separate data shape, and it had no
// coach bridge at all until this was added. It is checked apart from the unit
// cases because its paste legitimately differs: Foundations carries no College
// Board key concepts, so the Key concept line is absent by design rather than
// missing, and its topic ids are `foundations-3` on the page but F3 in the paste,
// because F3 is what the spine Socrates has attached is keyed on.
const FOUNDATIONS = {
  id: 'F3',
  page: 'foundations/foundations-3-states-power.html',
  // Checkpoint 1 is not here any more, and its absence is the point. It became
  // an independent formative diagnostic on 2026-08-31, so it renders no bridge
  // and has no paste to compare. The unit and Foundations renderers are both
  // asserted below to have stopped emitting one.
  slots: [
    { textarea: 'foundations-3-checkpoint2', module: 'Checkpoint 2' }
  ]
};

const DRAFT = 'The alliance system turned a regional crisis into a world war because '
  + 'Austria-Hungary and Serbia pulled their partners in.';

(async () => {
  const { topics, problems } = loadCourse();
  if (problems.length) {
    console.error(`Course did not load cleanly (${problems.length} problem(s)); refusing to compare.`);
    problems.slice(0, 5).forEach(p => console.error('  ' + p));
    process.exit(1);
  }
  const byId = new Map(topics.map(t => [t.id, t]));

  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));

  await page.route('**/*', route =>
    route.request().url().startsWith(`http://127.0.0.1:${port}/`) ? route.continue() : route.abort());

  for (const kase of CASES) {
    const topic = byId.get(kase.id);
    console.log(`\nTopic ${kase.id}`);
    await page.goto(`http://127.0.0.1:${port}/${kase.page}`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#module-grid .module-card');

    check('the shared builder reached the page',
      await page.evaluate(() => typeof window.BH_COACH === 'object'
        && typeof window.BH_COACH.buildCoachPrompt === 'function'));

    // Checkpoint 1 first, because it must offer no route to Socrates at all.
    // This is the renderer 71 of the 77 topics use, so it carries more of the
    // course than the Foundations case below.
    await page.evaluate(() => window.openModule('checkpoint1'));
    await page.waitForSelector('#pop-modal.show');
    await page.waitForSelector('#checkpoint-one-response');
    const cp1 = await page.evaluate(() => ({
      preview: !!document.getElementById('checkpoint-one-response-ms-preview'),
      bridges: document.querySelectorAll('#pop-body .magicschool-bridge').length,
      coachControls: [...document.querySelectorAll('#pop-body a, #pop-body button')]
        .filter(el => /ai coach|magicschool|socrates/i.test(el.textContent)).length,
      saysSoloWork: /on your own/i.test(document.getElementById('pop-body').textContent),
      stillHasDraftBox: !!document.getElementById('checkpoint-one-response')
    }));
    check('Checkpoint 1 renders no coach bridge', cp1.bridges === 0 && cp1.preview === false,
      `${cp1.bridges} bridge(s)`);
    check('Checkpoint 1 offers no button or link to Socrates', cp1.coachControls === 0,
      `${cp1.coachControls} found`);
    check('Checkpoint 1 says it is unaided rather than just losing a button', cp1.saysSoloWork);
    check('Checkpoint 1 still captures a response for Canvas', cp1.stillHasDraftBox);

    // Checkpoint 2 is module 10. Open it by id rather than by grid position so a
    // reordered module grid fails the module contract test, not this one.
    await page.evaluate(() => window.openModule('checkpoint2'));
    await page.waitForSelector('#pop-modal.show');
    await page.waitForSelector('#checkpoint-two-response');

    // Building with an empty draft must refuse rather than send a prompt with a
    // placeholder where the student's writing should be.
    await page.evaluate(() => window.generateCheckpointPrompt('checkpoint-two-response'));
    const refused = await page.evaluate(() =>
      document.getElementById('checkpoint-two-response-ms-result').textContent);
    check('an empty draft is refused, not sent',
      /draft your response/i.test(refused), refused.slice(0, 48));

    await page.fill('#checkpoint-two-response', DRAFT);
    await page.evaluate(() => window.generateCheckpointPrompt('checkpoint-two-response'));

    const got = await page.evaluate(() =>
      document.getElementById('checkpoint-two-response-ms-preview').textContent);
    const want = contextBlock(topic, { checkpoint: 1, draft: DRAFT });

    if (got === want) {
      check('page prompt is byte-identical to the Node contract', true, `${got.length} chars`);
    } else {
      check('page prompt is byte-identical to the Node contract', false,
        `page ${got.length} chars, contract ${want.length}`);
      const g = got.split('\n');
      const w = want.split('\n');
      for (let i = 0; i < Math.max(g.length, w.length); i++) {
        if (g[i] !== w[i]) {
          console.log(`        line ${i + 1}\n          page:     ${JSON.stringify(g[i])}`
            + `\n          contract: ${JSON.stringify(w[i])}`);
        }
      }
    }

    // The fields that carry the coaching. Asserted by name so a failure says which
    // one vanished rather than only that the totals differ.
    const cp = topic.checkpoints[1];
    check('carries the period', got.includes(`Period: ${topic.span}.`));
    check('carries the learning target', got.includes('Learning target:'));
    check('carries the success criteria', got.includes('Success criteria:'));
    check('carries the CED key concept', got.includes(`Key concept: ${topic.kcs[0].code}`));
    check('carries the focus terms', got.includes(`Focus terms: ${cp.terms.join(', ')}.`));
    check('carries the strong answer checklist', got.includes('Strong answer checklist:'));
    check('carries the assigned prompt', got.includes(`Assigned prompt: ${cp.prompt}`));
    check('carries the student draft verbatim', got.includes(DRAFT));
    check('the paste is long enough to be the full contract',
      got.length > 1200, `${got.length} chars`);

    // Copy has to send what the student can see. It used to regenerate from a
    // preview that nothing ever wrote, so the two could disagree.
    const copied = await page.evaluate(async () => {
      let captured = null;
      const real = navigator.clipboard && navigator.clipboard.writeText;
      navigator.clipboard.writeText = t => { captured = t; return Promise.resolve(); };
      window.copyCheckpointPrompt('checkpoint-two-response');
      await new Promise(r => setTimeout(r, 30));
      if (real) navigator.clipboard.writeText = real;
      return captured;
    });
    check('Copy sends exactly what the preview shows', copied === got,
      copied === null ? 'clipboard was not called' : `${String(copied).length} chars`);

    // Jeff's rule, 2026-09-01: if the draft, the coaching, and the revision are
    // not finished in class, they are homework. The card has to say so, because
    // Checkpoint 2 is a required conversation at the end of the block and the
    // slower half of the room will not always reach it before the bell.
    const saysHomework = await page.evaluate(() =>
      /do not finish.*class.*complete.*homework/is.test(document.getElementById('pop-body').textContent));
    check('Checkpoint 2 tells the student to finish at home if class runs out', saysHomework);
  }

  // ── Foundations ────────────────────────────────────────────────────────────
  const fTopic = byId.get(FOUNDATIONS.id);
  console.log(`\nFoundations ${FOUNDATIONS.id}`);
  await page.goto(`http://127.0.0.1:${port}/${FOUNDATIONS.page}`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#module-grid .module-card');

  check('the shared builder reached the Foundations page',
    await page.evaluate(() => typeof window.BH_COACH === 'object'
      && typeof window.BH_COACH.buildCoachPrompt === 'function'));

  // Checkpoint 1 is the unaided diagnostic, so it must render no way to reach
  // Socrates at all. validate.js asserts the renderers' source shape offline;
  // this is the half only a browser can answer, which is what a student
  // actually sees on the card.
  await page.evaluate(() => window.openModule('checkpoint1'));
  await page.waitForSelector('#pop-modal.show');
  await page.waitForSelector('#foundations-3-checkpoint');
  const cp1 = await page.evaluate(() => ({
    preview: !!document.getElementById('foundations-3-checkpoint-ms-preview'),
    bridges: document.querySelectorAll('#pop-body .magicschool-bridge').length,
    coachLinks: [...document.querySelectorAll('#pop-body a, #pop-body button')]
      .filter(el => /ai coach|magicschool|socrates/i.test(el.textContent)).length,
    saysSoloWork: /on your own/i.test(document.getElementById('pop-body').textContent),
    stillHasDraftBox: !!document.getElementById('foundations-3-checkpoint')
  }));
  check('Checkpoint 1: renders no coach prompt preview', cp1.preview === false);
  check('Checkpoint 1: renders no coach bridge', cp1.bridges === 0, `${cp1.bridges} found`);
  check('Checkpoint 1: offers no button or link to Socrates', cp1.coachLinks === 0,
    `${cp1.coachLinks} found`);
  check('Checkpoint 1: tells the student it is unaided rather than just losing a button',
    cp1.saysSoloWork);
  check('Checkpoint 1: still captures a response for Canvas', cp1.stillHasDraftBox);

  for (const slot of FOUNDATIONS.slots) {
    const moduleId = slot.module === 'Checkpoint 1' ? 'checkpoint1' : 'checkpoint2';
    await page.evaluate(id => window.openModule(id), moduleId);
    await page.waitForSelector('#pop-modal.show');
    await page.waitForSelector(`#${slot.textarea}`);

    // The bridge exists at all, which is the whole point of this addition.
    check(`${slot.module}: the coach bridge is rendered`,
      await page.evaluate(t => !!document.getElementById(t + '-ms-preview'), slot.textarea));
    check(`${slot.module}: Open AI Coach points at the classroom join code`,
      await page.evaluate(() => {
        const a = [...document.querySelectorAll('#pop-body a')]
          .find(x => /open ai coach/i.test(x.textContent));
        return !!a && a.href.includes('joinCode=czwb9Q');
      }));

    await page.evaluate(t => window.generateFoundationsCoachPrompt(t), slot.textarea);
    const refused = await page.evaluate(t =>
      document.getElementById(t + '-ms-result').textContent, slot.textarea);
    check(`${slot.module}: an empty draft is refused`, /draft your response/i.test(refused));

    await page.fill(`#${slot.textarea}`, DRAFT);
    await page.evaluate(t => window.generateFoundationsCoachPrompt(t), slot.textarea);
    const got = await page.evaluate(t =>
      document.getElementById(t + '-ms-preview').textContent, slot.textarea);

    check(`${slot.module}: names the topic as ${FOUNDATIONS.id}, not the page's own id`,
      got.startsWith(`Topic ${FOUNDATIONS.id}, ${slot.module},`), got.split('\n')[0].slice(0, 56));
    check(`${slot.module}: carries the Foundations period`,
      got.includes(`Period: ${fTopic.span}.`));
    check(`${slot.module}: carries the learning target`, got.includes('Learning target:'));
    check(`${slot.module}: carries the evidence terms`, got.includes('Focus terms:'));
    check(`${slot.module}: carries the assigned prompt`, got.includes('Assigned prompt:'));
    check(`${slot.module}: carries the student draft`, got.includes(DRAFT));
    // Absent by design: Foundations has no CED key concepts, and a "Key concept:"
    // line with nothing after it would read as a missing field to the coach.
    check(`${slot.module}: omits the Key concept line rather than emitting an empty one`,
      !got.includes('Key concept:'));

    const copied = await page.evaluate(async t => {
      let captured = null;
      navigator.clipboard.writeText = x => { captured = x; return Promise.resolve(); };
      window.copyFoundationsCoachPrompt(t);
      await new Promise(r => setTimeout(r, 30));
      return captured;
    }, slot.textarea);
    check(`${slot.module}: Copy sends what the preview shows`, copied === got);

    const saysHomework = await page.evaluate(() =>
      /do not finish.*class.*complete.*homework/is.test(document.getElementById('pop-body').textContent));
    check(`${slot.module}: tells the student to finish at home if class runs out`, saysHomework);

    await page.evaluate(() => window.closeModule && window.closeModule());
    await page.waitForTimeout(40);
  }

  check('no page errors', errors.length === 0, errors.slice(0, 2).join('; '));

  await browser.close();
  server.close();

  const failed = results.filter(r => !r.pass);
  console.log(`\n${results.length - failed.length}/${results.length} passed.`);
  if (failed.length) process.exit(1);
})();
