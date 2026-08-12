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
  }

  check('no page errors', errors.length === 0, errors.slice(0, 2).join('; '));

  await browser.close();
  server.close();

  const failed = results.filter(r => !r.pass);
  console.log(`\n${results.length - failed.length}/${results.length} passed.`);
  if (failed.length) process.exit(1);
})();
