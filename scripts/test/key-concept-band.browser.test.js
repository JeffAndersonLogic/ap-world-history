#!/usr/bin/env node
/**
 * key-concept-band.browser.test.js
 *
 * Walks every slide of every Teaching OS deck in Chromium, on the teacher
 * page in projector mode and on the generated student deck, and asserts what
 * only a laid-out page knows about the Key Concept band
 * (withKeyConcept in assets/js/behistorical-slide-templates.js):
 *
 *   1. A slide tagged `kc` draws the band, with that code and that topic's CED
 *      wording from assets/data/key-concepts.js, and an untagged slide draws
 *      none.
 *   2. The wording fits inside the band. A Key Concept that runs long wraps
 *      rather than being cut, so the check is on the painted text, not on
 *      the box.
 *   3. What the slide paints sits wholly below the band, so the band covers
 *      nothing the slide put at its top edge, and a template's board is
 *      still 16:9.
 *   4. The slide's own text still fits the smaller room it is drawn in. The
 *      band takes the top of the board and every slide under it is drawn
 *      about 9% smaller; a slide kind that does not scale with its box would
 *      spill past the bottom, and nothing offline can see that. A slide that
 *      already spills with no band is measured too and printed as a NOTE:
 *      the band must not make it worse, and the slide's own defect belongs
 *      to the slide.
 *
 * Measured at a 1920x1080 projector and inside a 4:3 one. Remote requests are
 * blocked, so the run is hermetic and measures the fallback fonts, unless
 * BHT_FONT_DIR holds the brand webfonts (see slide-templates.browser.test.js
 * for its layout), in which case they are served from disk. It says which.
 *
 * Negative controls at the end give a Key Concept far too much wording, stop
 * scaling a slide under the band, and give a slide a code its topic does not
 * have; each must fail.
 *
 *   npm i playwright-core
 *   node scripts/test/key-concept-band.browser.test.js
 *
 * Exits 2 when playwright-core is absent, which run-tests.js reads as SKIP
 * unless --strict.
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
const { DECKS } = require('../build-teaching-os-student-decks.js');

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
const server = http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  const file = path.join(ROOT, rel);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('nope'); return; }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
  res.end(fs.readFileSync(file));
});

let failed = 0;
function check(name, pass, detail = '') {
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? `  (${detail})` : ''}`);
  if (!pass) failed++;
}

const FONT_DIR = process.env.BHT_FONT_DIR && fs.existsSync(path.join(process.env.BHT_FONT_DIR, 'fonts.css')) ? process.env.BHT_FONT_DIR : '';

/* Measure the slide on the stage now. Returns null when the slide has no
   band, else what is wrong with it, as an array of strings. */
function measure() {
  const stage = document.getElementById('stage');
  const deck = window.BEHISTORICAL_TEACHING || window.BEHISTORICAL_STUDENT_DECK;
  const count = (document.getElementById('count') || {}).textContent || '';
  const i = Number((count.match(/(\d+)\s*\/\s*\d+/) || [])[1]) - 1;
  const slide = deck.slides[i] || {};
  const band = stage.querySelector('.bhkc-band');
  const out = { index: i, kc: slide.kc || null, title: slide.title || slide.eyebrow || '', band: !!band, problems: [] };
  if (!band) return out;
  const topic = String(deck.meta.topic || '').replace(/^Topic\s+/i, '');
  const want = ((window.BEHISTORICAL_KEY_CONCEPTS || {})[topic] || []).find(k => k.code === slide.kc);
  const code = band.querySelector('.bhkc-code'), text = band.querySelector('.bhkc-text');
  if (!code || code.textContent !== slide.kc) out.problems.push(`code reads "${code && code.textContent}"`);
  if (!want) out.problems.push(`no wording for ${slide.kc} on Topic ${topic}`);
  else if (!text || text.textContent !== want.text) out.problems.push('wording differs from the lesson data');
  const b = band.getBoundingClientRect();
  const wrap = stage.querySelector('.bhkc').getBoundingClientRect();
  const region = stage.querySelector('.bhkc-slide').getBoundingClientRect();
  const scale = Math.min(wrap.width, wrap.height * 16 / 9) / 1280;
  if (region.top < b.bottom - 0.5) out.problems.push('slide starts under the band');
  // What the slide itself paints: a template's 16:9 board, or a whole
  // non-template slide scaled down. Either must sit wholly below the band.
  const drawn = stage.querySelector('.bhkc-slide .bht') || stage.querySelector('.bhkc-slide > *');
  if (drawn) {
    const d = drawn.getBoundingClientRect();
    if (d.top < b.bottom - 0.5) out.problems.push(`slide is drawn ${Math.round((b.bottom - d.top) / scale)}px under the band`);
    if (d.bottom > region.bottom + 0.5 || d.left < region.left - 0.5 || d.right > region.right + 0.5) out.problems.push('slide is drawn outside its room');
    if (drawn.classList.contains('bht') && Math.abs(d.width / d.height - 16 / 9) > 0.01) out.problems.push(`board is ${(d.width / d.height).toFixed(3)}:1`);
  }
  // Painted text, line by line, so a clipped last line is caught.
  const lines = el => {
    const r = document.createRange(); const rects = [];
    const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let n; while ((n = walk.nextNode())) {
      if (!n.textContent.trim()) continue;
      const cs = getComputedStyle(n.parentElement);
      if (cs.visibility === 'hidden' || cs.display === 'none' || Number(cs.opacity) === 0) continue;
      r.selectNodeContents(n); for (const q of r.getClientRects()) if (q.width > 0 && q.height > 0) rects.push({ q, n });
    }
    return rects;
  };
  for (const { q } of lines(band)) {
    if (q.bottom > b.bottom + 0.5 || q.top < b.top - 0.5 || q.right > b.right + 0.5) { out.problems.push(`band wording overflows by ${Math.round(Math.max(q.bottom - b.bottom, b.top - q.top, q.right - b.right) / scale)}px`); break; }
  }
  let worst = 0, what = '';
  for (const { q, n } of lines(stage.querySelector('.bhkc-slide'))) {
    const o = Math.max(q.bottom - region.bottom, q.right - region.right, region.left - q.left, region.top - q.top) / scale;
    if (o > worst) { worst = o; what = n.textContent.trim().slice(0, 30); }
  }
  // Against the same slide drawn without the band, full size: a slide that
  // already runs off the stage is that slide's defect, not the band's, and is
  // reported as `before` rather than failed here. The band must not make it
  // worse.
  const saved = stage.innerHTML;
  stage.innerHTML = stage.querySelector('.bhkc-slide').innerHTML;
  const st = stage.getBoundingClientRect(), su = Math.min(st.width, st.height * 16 / 9) / 1280;
  let before = 0;
  for (const { q } of lines(stage)) before = Math.max(before, Math.max(q.bottom - st.bottom, q.right - st.right, st.left - q.left, st.top - q.top) / su);
  stage.innerHTML = saved;
  out.before = Math.round(before);
  if (worst > before + 2) out.problems.push(`slide text runs ${Math.round(worst)}px out of its room, ${Math.round(before)}px without the band: "${what}"`);
  return out;
}

async function walk(page, label) {
  const results = [];
  await page.waitForSelector('#stage .slide, #stage section, #stage .bhkc', { timeout: 15000 });
  for (let k = 0; k < 60; k++) await page.keyboard.press('ArrowLeft');
  const total = await page.evaluate(() => (window.BEHISTORICAL_TEACHING || window.BEHISTORICAL_STUDENT_DECK).slides.length);
  for (let i = 0; i < total; i++) {
    if (i) await page.keyboard.press('ArrowRight');
    await page.waitForTimeout(60);
    results.push(await page.evaluate(measure));
  }
  return results;
}

function report(label, results) {
  const missing = results.filter(r => r.kc && !r.band).map(r => r.index + 1);
  const stray = results.filter(r => !r.kc && r.band).map(r => r.index + 1);
  const broken = results.filter(r => r.band && r.problems.length);
  const banded = results.filter(r => r.band).length;
  check(`${label}: every tagged slide draws its band`, missing.length === 0, missing.length ? `slides ${missing.join(', ')}` : `${banded} of ${results.length}`);
  check(`${label}: no band on an untagged slide`, stray.length === 0, stray.join(', '));
  check(`${label}: every band fits and covers nothing`, broken.length === 0,
    broken.slice(0, 3).map(r => `slide ${r.index + 1}: ${r.problems.join('; ')}`).join(' | '));
  const already = results.filter(r => r.band && r.before > 2);
  if (already.length) console.log(`  NOTE  ${label}: already runs off the stage without the band, not this check's to fail: ${already.map(r => `slide ${r.index + 1} by ${r.before}px`).join(', ')}`);
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const route = page => page.route('**/*', rt => {
    const url = rt.request().url();
    if (url.startsWith(origin)) return rt.continue();
    if (FONT_DIR && url.startsWith('https://fonts.googleapis.com/css2')) return rt.fulfill({ contentType: 'text/css', body: fs.readFileSync(path.join(FONT_DIR, 'fonts.css')) });
    if (FONT_DIR && url.startsWith('https://fonts.gstatic.com/')) {
      const f = path.join(FONT_DIR, url.replace('https://fonts.gstatic.com/', '').replace(/\//g, '_'));
      return fs.existsSync(f) ? rt.fulfill({ contentType: 'font/woff2', body: fs.readFileSync(f) }) : rt.abort();
    }
    return rt.abort();
  });

  console.log(`\nKey Concept band in Chromium  (${DECKS.length} decks, ${FONT_DIR ? 'brand webfonts from BHT_FONT_DIR' : 'fallback fonts: set BHT_FONT_DIR to measure in the brand faces'})\n`);

  const VIEWS = [{ label: '1920x1080', width: 1920, height: 1080 }, { label: '4:3', width: 1024, height: 768 }];
  for (const deck of DECKS) {
    const key = deck.key.replace('.', '-');
    const teacher = [`teacher/topic-${key}-story-os.html`, `teacher/topic-${key}-os.html`]
      .find(p => fs.existsSync(path.join(ROOT, p)) && /function (render|renderSlide)\(s\)\{/.test(fs.readFileSync(path.join(ROOT, p), 'utf8')));
    const shell = fs.readdirSync(ROOT).filter(d => /^unit-\d+$/.test(d)).map(d => `${d}/presentation-topic-${key}-student.html`)
      .find(p => fs.existsSync(path.join(ROOT, p)));
    for (const view of VIEWS) {
      for (const [who, url] of [['teacher projector', `${teacher}?mode=project`], ['student deck', shell]]) {
        const page = await browser.newPage({ viewport: { width: view.width, height: view.height } });
        const errors = []; page.on('pageerror', e => errors.push(e.message));
        await route(page);
        await page.goto(`${origin}/${url}`, { waitUntil: 'load' });
        await page.evaluate(() => document.fonts && document.fonts.ready);
        report(`${deck.key} ${who} ${view.label}`, await walk(page, who));
        if (errors.length) check(`${deck.key} ${who} ${view.label}: no page errors`, false, errors[0]);
        await page.close();
      }
    }
  }

  /* Negative controls: a Key Concept with far too much wording, and a slide
     whose code the topic does not have. Both must fail. */
  console.log('\n  Negative controls\n');
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await route(page);
  await page.goto(`${origin}/unit-2/presentation-topic-2-6-student.html`, { waitUntil: 'load' });
  const first = await page.evaluate(() => window.BEHISTORICAL_STUDENT_DECK.slides.findIndex(s => s.kc));
  for (let k = 0; k < first; k++) await page.keyboard.press('ArrowRight');
  const rerender = async () => { await page.keyboard.press('ArrowRight'); await page.keyboard.press('ArrowLeft'); await page.waitForTimeout(60); return page.evaluate(measure); };
  const long = await page.evaluate(() => { const k = window.BEHISTORICAL_KEY_CONCEPTS['2.6'][0]; const was = k.text; k.text = (was + ' ').repeat(6); return was; });
  const lr = await rerender();
  check('control: wording too long for the band is caught', lr.band && lr.problems.some(p => /overflows/.test(p)), lr.problems.join('; '));
  await page.evaluate(was => { window.BEHISTORICAL_KEY_CONCEPTS['2.6'][0].text = was; }, long);
  const ok = await rerender();
  check('control: the same slide passes once the wording is restored', ok.band && ok.problems.length === 0, ok.problems.join('; '));
  // Stop scaling the non-template slides under the band: a question slide,
  // which fills its stage and sets its text low, then runs out the bottom.
  const q = await page.evaluate(() => window.BEHISTORICAL_STUDENT_DECK.slides.findIndex(s => s.kc && !window.BHSlideTemplates.has(s.kind)));
  const style = await page.addStyleTag({ content: '.bhkc-slide>:not(.bht-slide){transform:none!important}' });
  for (let k = first; k < q; k++) await page.keyboard.press('ArrowRight');
  const sr = await rerender();
  check('control: a slide the band pushes off its room is caught', sr.band && sr.problems.some(p => /out of its room|outside its room/.test(p)), sr.problems.join('; ') || `slide ${q + 1} fit`);
  await style.evaluate(el => el.remove());
  const sr2 = await rerender();
  check('control: the same slide passes once it is scaled again', sr2.band && sr2.problems.length === 0, sr2.problems.join('; '));
  for (let k = first; k < q; k++) await page.keyboard.press('ArrowLeft');
  await page.evaluate(i => { window.BEHISTORICAL_STUDENT_DECK.slides[i].kc = 'KC-9.9.IX'; }, first);
  const fr = await rerender();
  check('control: a code the topic does not have is caught', fr.band && fr.problems.some(p => /no wording/.test(p)), fr.problems.join('; '));
  await page.close();

  await browser.close();
  server.close();
  console.log(failed ? `\n${failed} Key Concept band check(s) failed.\n` : '\nKey Concept band: all browser checks passed.\n');
  process.exit(failed ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
