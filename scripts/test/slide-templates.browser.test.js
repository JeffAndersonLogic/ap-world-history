#!/usr/bin/env node
/**
 * slide-templates.browser.test.js
 *
 * Draws every slide template in Chromium and asserts what only a laid-out page
 * knows. The offline contract (slide-templates.test.js) proves the wiring is in
 * the source; this proves it works on the pages a class actually sees.
 *
 *   1. On the catalog, teacher/slide-templates.html, every example keeps all of
 *      its text inside the board, at a 1280x720 board and inside a 4:3
 *      projector stage, where the board has to letterbox rather than stretch.
 *   2. Every AI-generated picture's label is painted, on the board, and legible
 *      in size, and it is the house label.
 *   3. The real student presentation renderer draws every template, when a
 *      deck made of the catalog examples is served in place of a topic's
 *      generated deck.
 *   4. Every Teaching OS teacher page draws a template slide through its own
 *      renderer, which is only true if the page both loads the library and
 *      carries the hook.
 *
 * Remote requests are blocked, so the run is hermetic and measures the
 * fallback fonts. Cinzel runs wider than Georgia, so a pass here is a floor:
 * a template close to the edge in Georgia can still overflow in Cinzel. The
 * catalog text was written to leave room, and the check that would catch the
 * rest is the same font-loaded reflow pass the eBook test runs, which cannot
 * run from a sandbox that cannot reach the font host.
 *
 * A negative control at the end makes one example's title far too long and
 * requires the overflow check to fail, so its green is evidence.
 *
 *   npm i playwright-core
 *   node scripts/test/slide-templates.browser.test.js
 *
 * Exits 2 when playwright-core is absent, which run-tests.js reads as SKIP
 * unless --strict.
 */

'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) {
  console.error('This test needs playwright-core. Install it first:\n  npm i playwright-core');
  process.exit(2);
}

const ROOT = path.resolve(__dirname, '..', '..');
const { DECKS } = require('../build-teaching-os-student-decks.js');
const T = require('../../assets/js/behistorical-slide-templates.js');

const EXE = process.env.PW_CHROME || (function () {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  const builds = (fs.existsSync(base) ? fs.readdirSync(base) : [])
    .filter(d => /^chromium-\d+$/.test(d))
    .sort((a, b) => Number(a.split('-')[1]) - Number(b.split('-')[1]))
    .reverse();
  for (const build of builds) {
    for (const layout of ['chrome-linux64', 'chrome-linux']) {
      const exe = path.join(base, build, layout, 'chrome');
      if (fs.existsSync(exe)) return exe;
    }
  }
  return 'chromium';
})();

const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml',
  '.jpeg': 'image/jpeg', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };

let override = null;
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  if (override && rel === override.path) {
    res.writeHead(200, { 'Content-Type': 'text/javascript' }); res.end(override.body); return;
  }
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('nope'); return; }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  res.end(fs.readFileSync(file));
});

const results = [];
function check(name, pass, detail) {
  results.push({ name, pass });
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  (' + detail + ')' : ''}`);
}

const sandbox = { window: {}, encodeURIComponent };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'teacher/data/slide-template-examples.js'), 'utf8'), sandbox);
const EX = sandbox.window.BH_SLIDE_TEMPLATE_EXAMPLES;

/* Runs in the page. For every rendered board, find text painted outside it,
   measured on the text itself: a word that overflows its own box leaves the
   box inside the board and still runs off the slide, which is how the first
   Equation layout printed NETWOR and hid the K. Pictures are not measured;
   they are cropped on purpose, inside frames that clip them. An AI label is
   also measured against the frame it sits in, because a label cut off by its
   own picture is a label nobody can read. A photo credit is held to the same
   rule: a credit cut off at the frame edge names nobody. */
function measureBoards(label) {
  const out = [];
  const range = document.createRange();
  for (const slide of document.querySelectorAll('.bht-slide')) {
    const board = slide.querySelector('.bht').getBoundingClientRect();
    const scale = board.width / 1280;
    let worst = 0, what = '';
    const walker = document.createTreeWalker(slide.querySelector('.bht-in'), NodeFilter.SHOW_TEXT);
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      if (!node.textContent.trim()) continue;
      const host = node.parentElement;
      const cs = getComputedStyle(host);
      if (cs.display === 'none' || cs.visibility === 'hidden') continue;
      range.selectNodeContents(node);
      for (const r of range.getClientRects()) {
        if (!r.width || !r.height) continue;
        const over = Math.max(board.top - r.top, r.bottom - board.bottom, board.left - r.left, r.right - board.right) / scale;
        if (over > worst) { worst = over; what = node.textContent.trim().slice(0, 40); }
      }
    }
    const tags = [...slide.querySelectorAll('.bht-ai')].map(t => {
      const r = t.getBoundingClientRect();
      const clip = t.closest('.bht-frame');
      const c = clip ? clip.getBoundingClientRect() : board;
      const within = box => r.top >= box.top - 1 && r.bottom <= box.bottom + 1 && r.left >= box.left - 1 && r.right <= box.right + 1;
      return { text: t.textContent.trim(), inside: within(board) && within(c), px: parseFloat(getComputedStyle(t).fontSize) / scale };
    });
    const credits = [...slide.querySelectorAll('.bht-src')].map(t => {
      const r = t.getBoundingClientRect();
      const clip = t.closest('.bht-frame');
      const c = clip ? clip.getBoundingClientRect() : board;
      const within = box => r.top >= box.top - 1 && r.bottom <= box.bottom + 1 && r.left >= box.left - 1 && r.right <= box.right + 1;
      return { text: t.textContent.trim(), inside: within(board) && within(c) };
    });
    const ratio = board.width / board.height;
    out.push({ kind: slide.dataset.template, worst: Math.round(worst), what, tags, credits, ratio, label });
  }
  return out;
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const hermetic = async page => page.route('**/*', route => route.request().url().startsWith(origin) ? route.continue() : route.abort());

  console.log(`\nSlide templates in Chromium  (${T.kinds.length} templates, ${EX.length} examples, ${DECKS.length} decks)\n`);

  /* 1 and 2: the catalog, at a full-size board and in a 4:3 stage. */
  const STAGES = [
    { label: '1280x720 board', css: 'width:1280px;height:720px;aspect-ratio:auto' },
    { label: '1024x768 projector stage', css: 'width:1024px;height:768px;aspect-ratio:auto' }
  ];
  for (const st of STAGES) {
    const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
    const errors = []; page.on('pageerror', e => errors.push(e.message));
    await hermetic(page);
    await page.goto(`${origin}/teacher/slide-templates.html`, { waitUntil: 'load' });
    await page.addStyleTag({ content: `.grid{display:block!important}.card{margin-bottom:20px}.stage{${st.css}}` });
    await page.waitForTimeout(300);
    const boards = await page.evaluate(measureBoards, st.label);
    check(`${st.label}: every example rendered`, boards.length === EX.length, `${boards.length} of ${EX.length}`);
    const over = boards.filter(b => b.worst > 2);
    check(`${st.label}: no text is painted outside its board`, over.length === 0, over.map(b => `${b.kind} +${b.worst}px [${b.what}]`).join(' | ') || 'clean');
    const skewed = boards.filter(b => Math.abs(b.ratio - 16 / 9) > 0.01);
    check(`${st.label}: every board keeps 16:9`, skewed.length === 0, skewed.map(b => b.kind).join(', ') || 'clean');
    const tags = boards.flatMap(b => b.tags.map(t => ({ ...t, kind: b.kind })));
    const aiKinds = EX.filter(e => JSON.stringify(e.slide).includes('"ai":true')).length;
    check(`${st.label}: AI labels are painted`, tags.length >= aiKinds, `${tags.length} label(s) on ${aiKinds} example(s) with AI images`);
    const badTags = tags.filter(t => t.text !== T.LABEL || !t.inside || t.px < 9);
    check(`${st.label}: every AI label is the house label, fully visible, at least 9 design px`, badTags.length === 0, badTags.map(t => `${t.kind}: "${t.text}" inside=${t.inside} ${t.px.toFixed(1)}px`).join(' | ') || 'clean');
    const cut = boards.flatMap(b => b.credits.filter(c => !c.inside).map(c => `${b.kind}: "${c.text}"`));
    check(`${st.label}: every photo credit is fully visible`, cut.length === 0, cut.join(' | ') || 'clean');
    const decoded = await page.evaluate(() => [...document.querySelectorAll('.bht-img')].filter(i => i.naturalWidth > 0).length);
    check(`${st.label}: local pictures really decoded`, decoded > 0, `${decoded} decoded`);
    check(`${st.label}: no page errors`, errors.length === 0, errors.slice(0, 2).join(' | ') || 'clean');
    await page.close();
  }

  /* 2b: every template slide a real deck ships, not only the catalog. The
     catalog examples are written to fit; a deck's own titles, credits and
     pictures are not, and Topic 2.4 shipped a credit clipped at its frame
     edge and a Compounding bar that inherited the student shell's toolbar. */
  {
    const real = [];
    for (const deck of DECKS) {
      const file = path.join(ROOT, `assets/data/presentations/topic-${deck.key.replace('.', '-')}-student.js`);
      if (!fs.existsSync(file)) continue;
      const box = { window: {} };
      vm.runInNewContext(fs.readFileSync(file, 'utf8'), box);
      const d = box.window.BEHISTORICAL_STUDENT_DECK;
      for (const sl of (d && d.slides) || []) if (T.has(sl.kind)) real.push({ deck: deck.key, slide: sl });
    }
    const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
    await hermetic(page);
    // Rendered from the student shell's folder so a deck's relative image
    // paths resolve, and inside that shell's own CSS, which is the host a
    // generic class name collides with.
    await page.goto(`${origin}/unit-2/presentation-topic-2-4-student.html`, { waitUntil: 'load' });
    await page.waitForSelector('#stage .slide', { timeout: 15000 });
    const boards = [];
    for (const r of real) {
      const b = await page.evaluate(sl => {
        const stage = document.querySelector('#stage');
        stage.style.cssText = 'width:1280px;height:720px;aspect-ratio:auto';
        stage.innerHTML = window.BHSlideTemplates.render(sl);
        return new Promise(res => requestAnimationFrame(() => requestAnimationFrame(res)));
      }, r.slide);
      const m = await page.evaluate(measureBoards, r.deck);
      boards.push(...m.map(x => ({ ...x, id: `${r.deck} ${r.slide.id || x.kind}` })));
    }
    check('real decks: template slides measured', boards.length === real.length && real.length > 0, `${boards.length} of ${real.length}`);
    const over = boards.filter(b => b.worst > 2);
    check('real decks: no text is painted outside its board', over.length === 0, over.map(b => `${b.id} +${b.worst}px [${b.what}]`).join(' | ') || 'clean');
    const cut = boards.flatMap(b => b.credits.filter(c => !c.inside).map(c => `${b.id}: "${c.text}"`));
    check('real decks: every photo credit is fully visible', cut.length === 0, cut.join(' | ') || 'clean');
    const badTags = boards.flatMap(b => b.tags.filter(t => t.text !== T.LABEL || !t.inside).map(t => `${b.id}: "${t.text}"`));
    check('real decks: every AI label is the house label and fully visible', badTags.length === 0, badTags.join(' | ') || 'clean');
    const bars = await page.evaluate(sl => {
      document.querySelector('#stage').innerHTML = window.BHSlideTemplates.render(sl);
      const b = document.querySelector('.bht-cp-row > :last-child');
      return b ? getComputedStyle(b).position : 'missing';
    }, EX.find(e => e.slide.kind === 'compounding').slide);
    check('real decks: a Compounding bar keeps its own styling inside the student shell', bars === 'static', `position:${bars}`);
    await page.close();
  }

  /* 3: the real student renderer, fed a deck made of every example. */
  {
    const key = DECKS[0].key.replace('.', '-');
    const unit = DECKS[0].key.split('.')[0];
    override = { path: `assets/data/presentations/topic-${key}-student.js`,
      body: `window.BEHISTORICAL_STUDENT_DECK=${JSON.stringify({ meta: { topic: 'Templates', title: 'Template walk', backUrl: '../index.html' }, slides: EX.map(e => e.slide) })};` };
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    const errors = []; page.on('pageerror', e => errors.push(e.message));
    await hermetic(page);
    await page.goto(`${origin}/unit-${unit}/presentation-topic-${key}-student.html`, { waitUntil: 'load' });
    await page.waitForSelector('#stage .slide', { timeout: 15000 });
    const seen = [];
    for (let i = 0; i < EX.length; i++) {
      seen.push(await page.evaluate(() => { const s = document.querySelector('#stage .bht-slide'); return s ? s.dataset.template : null; }));
      if (i < EX.length - 1) { await page.click('#next'); await page.waitForTimeout(40); }
    }
    const missed = EX.map((e, i) => seen[i] === e.slide.kind ? null : `${e.slide.kind} drew ${seen[i]}`).filter(Boolean);
    check('student renderer draws every template', missed.length === 0, missed.join(' | ') || `${seen.length} slides`);
    check('student renderer: no page errors', errors.length === 0, errors.slice(0, 2).join(' | ') || 'clean');
    override = null;
    await page.close();
  }

  /* 4: every teacher page, through its own renderer. */
  const sample = EX.find(e => e.slide.kind === 'equation').slide;
  for (const deck of DECKS) {
    const key = deck.key.replace('.', '-');
    const pages = [`teacher/topic-${key}-os.html`, `teacher/topic-${key}-story-os.html`]
      .filter(p => fs.existsSync(path.join(ROOT, p)) && /function (render|renderSlide)\(s\)\{/.test(fs.readFileSync(path.join(ROOT, p), 'utf8')));
    for (const rel of pages) {
      const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
      await hermetic(page);
      // The renderers are private to each page, and some pages copy their slide
      // list once at start-up, so the sample goes in as the teaching data
      // arrives: every slide the page will ever see is the template sample,
      // and the page then draws it through its own renderSlide.
      await page.addInitScript(sampleJson => {
        let held;
        Object.defineProperty(window, 'BEHISTORICAL_TEACHING', { configurable: true,
          get() { return held; },
          set(v) { held = v; if (v && Array.isArray(v.slides)) v.slides = v.slides.map(() => JSON.parse(sampleJson)); } });
      }, JSON.stringify(sample));
      await page.goto(`${origin}/${rel}`, { waitUntil: 'load' });
      await page.waitForTimeout(250);
      // A page that rebuilds its list after start-up still holds the teaching
      // data's own slide objects, so turn those into the sample too, in place.
      const html = await page.evaluate(sampleJson => {
        const T = window.BEHISTORICAL_TEACHING;
        if (!T || !Array.isArray(T.slides)) return '(no teaching data)';
        for (const slide of T.slides) { for (const k of Object.keys(slide)) delete slide[k]; Object.assign(slide, JSON.parse(sampleJson)); }
        return 'ok';
      }, JSON.stringify(sample)).catch(e => `(threw: ${e.message})`);
      for (const key of ['ArrowRight', 'ArrowLeft', 'ArrowRight']) { await page.keyboard.press(key); await page.waitForTimeout(120); }
      const drawn = await page.evaluate(() => !!document.querySelector('.bht-slide[data-template="equation"]'));
      check(`${deck.key} ${path.basename(rel)} draws a template through its own renderer`, html === 'ok' && drawn, html === 'ok' ? (drawn ? '' : 'nothing drawn') : html);
      await page.close();
    }
  }

  /* Negative control: an overflowing title must fail the overflow check. */
  {
    const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
    await hermetic(page);
    await page.goto(`${origin}/teacher/slide-templates.html`, { waitUntil: 'load' });
    await page.evaluate(() => {
      const stage = document.querySelector('.stage');
      const s = JSON.parse(JSON.stringify(window.BH_SLIDE_TEMPLATE_EXAMPLES.find(e => e.slide.kind === 'frame-subtitle').slide));
      s.template.line = 'An overflowing line. '.repeat(60);
      stage.style.cssText = 'width:1280px;height:720px;aspect-ratio:auto';
      stage.innerHTML = window.BHSlideTemplates.render(s);
      document.querySelectorAll('.stage').forEach((el, i) => { if (i) el.innerHTML = ''; });
    });
    const boards = await page.evaluate(measureBoards, 'control');
    check('control: an overflowing slide is caught', boards.length === 1 && boards[0].worst > 2, boards[0] ? `+${boards[0].worst}px` : 'nothing measured');
    await page.close();
  }
  {
    // A word wider than its own box: the box stays on the board, the letters do not.
    const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
    await hermetic(page);
    await page.goto(`${origin}/teacher/slide-templates.html`, { waitUntil: 'load' });
    await page.evaluate(() => {
      const stage = document.querySelector('.stage');
      stage.style.cssText = 'width:1280px;height:720px;aspect-ratio:auto';
      stage.innerHTML = window.BHSlideTemplates.render({ kind: 'equation', title: 't', template: { terms: [{ word: 'Caravanserai'.repeat(9) }, { word: 'Oasis' }], result: { word: 'x' } } });
      document.querySelectorAll('.stage').forEach((el, i) => { if (i) el.innerHTML = ''; });
    });
    const boards = await page.evaluate(measureBoards, 'control');
    check('control: a word running out of its own box is caught', boards.length === 1 && boards[0].worst > 2, boards[0] ? `+${boards[0].worst}px` : 'nothing measured');
    await page.close();
  }
  {
    // An AI label squeezed by a frame too narrow for it.
    const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
    await hermetic(page);
    await page.goto(`${origin}/teacher/slide-templates.html`, { waitUntil: 'load' });
    await page.evaluate(() => {
      const stage = document.querySelector('.stage');
      stage.style.cssText = 'width:1280px;height:720px;aspect-ratio:auto';
      const s = window.BH_SLIDE_TEMPLATE_EXAMPLES.find(e => e.slide.kind === 'frame-triptych').slide;
      stage.innerHTML = window.BHSlideTemplates.render(s);
      const st = document.createElement('style'); st.textContent = '.bht-slide .bht-tp{grid-template-columns:70px 1fr 1fr!important}'; document.head.appendChild(st);
      document.querySelectorAll('.stage').forEach((el, i) => { if (i) el.innerHTML = ''; });
    });
    const boards = await page.evaluate(measureBoards, 'control');
    const clipped = boards.length === 1 && boards[0].tags.some(t => !t.inside);
    check('control: an AI label cut off by its frame is caught', clipped);
    await page.close();
  }

  {
    // A photo credit too long for a narrow side frame, with the wrap turned off.
    const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
    await hermetic(page);
    await page.goto(`${origin}/teacher/slide-templates.html`, { waitUntil: 'load' });
    await page.evaluate(() => {
      const stage = document.querySelector('.stage');
      stage.style.cssText = 'width:1280px;height:720px;aspect-ratio:auto';
      stage.innerHTML = window.BHSlideTemplates.render({ kind: 'source-quote', title: 't', template: { quote: 'q', visual: { url: '', credit: 'Modern photograph · a credit far too long for a three hundred unit frame' } } });
      const st = document.createElement('style'); st.textContent = '.bht-slide .bht-src{white-space:nowrap!important;max-width:none!important}'; document.head.appendChild(st);
      document.querySelectorAll('.stage').forEach((el, i) => { if (i) el.innerHTML = ''; });
    });
    const boards = await page.evaluate(measureBoards, 'control');
    const cut = boards.length === 1 && boards[0].credits.length > 0 && boards[0].credits.some(c => !c.inside);
    check('control: a photo credit cut off by its frame is caught', cut, boards[0] ? `${boards[0].credits.length} credit(s)` : 'nothing measured');
    await page.close();
  }

  await browser.close();
  server.close();
  const failed = results.filter(r => !r.pass);
  console.log(`\n  ${failed.length ? 'FAIL' : 'PASS'}  ${results.length} assertion(s), ${failed.length} failed`);
  process.exit(failed.length ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
