#!/usr/bin/env node
/**
 * capture-topic-for-review.js
 *
 * Builds the packet the Phase 9 independent reviewers read (build-topic skill,
 * 9B and 9C): what a student and the projector actually show, captured from
 * Chromium, plus the brief that tells a reviewer what counts as a defect.
 *
 *   node scripts/capture-topic-for-review.js 4.5 <out-dir>
 *
 * Writes to <out-dir>:
 *   REVIEW-BRIEF.md       the brief, with this packet's paths filled in
 *   lesson-page.txt       the lesson page, then every module pop-out and lecture card
 *   first-and-10.txt      the First & 10 reading
 *   deep-reading.txt      the deep reading (the eBook chapter)
 *   beintheroom.txt       the scenario, visible text then all text
 *   deck-teacher-text.txt the projected text of every teacher slide
 *   deck-slides-data.json the teacher deck's data, speaker notes and credits included
 *   canvas-text.txt       the topic's Canvas assignment and calendar event
 *   slides/teacher-NN.png one full-window screenshot per teacher slide, at 1920x1080
 *
 * Teacher slides only, on purpose (Jeff, 2026-10-16). The student deck is the
 * teacher deck minus Teacher Preflight, generated from it with the notes stripped,
 * and its layout is already checked by the browser suite; screenshotting it again
 * doubled the most expensive thing a reviewer reads and found nothing the teacher
 * shots did not. Screenshots are full-window rather than of the stage element: an
 * element shot taken after the page scrolled once made a header look as if it hid
 * the Key Concept band, and a reviewer reported it as a defect.
 *
 * Remote requests are blocked. Set BHT_FONT_DIR (see slide-templates.browser.test.js)
 * to render in the brand fonts, which is what a reviewer judging fit should see.
 *
 * Not in any suite: it produces review material and checks nothing. Needs
 * playwright-core; exits 2 without it.
 */
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');

let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) { console.error('Needs playwright-core: npm i --no-save playwright-core'); process.exit(2); }

const ROOT = path.resolve(__dirname, '..');
const [topic, outArg] = process.argv.slice(2);
if (!/^\d+\.\d+$/.test(topic || '') || !outArg) {
  console.error('Usage: node scripts/capture-topic-for-review.js <unit.topic> <out-dir>');
  process.exit(1);
}
const OUT = path.resolve(outArg);
const key = topic.replace('.', '-');
const unitDir = `unit-${topic.split('.')[0]}`;
const FONT_DIR = process.env.BHT_FONT_DIR && fs.existsSync(path.join(process.env.BHT_FONT_DIR, 'fonts.css')) ? process.env.BHT_FONT_DIR : '';

const inUnit = re => (fs.readdirSync(path.join(ROOT, unitDir)).find(f => re.test(f)) || null);
const lesson = inUnit(new RegExp(`^lesson-${key}-.*\\.html$`));
const reading = inUnit(new RegExp(`^first-and-10-topic-${key}-(?!.*-capture\\.html$).*\\.html$`));
const deep = inUnit(new RegExp(`^deep-reading-topic-${key}-.*\\.html$`));
const dataText = fs.readdirSync(path.join(ROOT, 'assets', 'data')).filter(f => f.startsWith(`lesson-${key}-`) && f.endsWith('.js'))
  .map(f => fs.readFileSync(path.join(ROOT, 'assets', 'data', f), 'utf8')).join('\n');
const room = (dataText.match(/beintheroom\/[^'"?#]+\.html/) || [null])[0];
const deck = [`teacher/topic-${key}-story-os.html`, `teacher/topic-${key}-os.html`].find(p => fs.existsSync(path.join(ROOT, p)));
if (!lesson) { console.error(`No lesson page for ${topic} in ${unitDir}/`); process.exit(1); }

const EXE = process.env.PW_CHROME || (() => {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  for (const b of (fs.existsSync(base) ? fs.readdirSync(base) : []).filter(d => /^chromium-\d+$/.test(d)).sort().reverse())
    for (const l of ['chrome-linux64', 'chrome-linux']) { const e = path.join(base, b, l, 'chrome'); if (fs.existsSync(e)) return e; }
  return undefined;
})();
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };
const server = http.createServer((req, res) => {
  const file = path.join(ROOT, decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, ''));
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' }); res.end(fs.readFileSync(file));
});

const imgLines = sel => [...document.querySelectorAll(sel)].map(i => `[IMG src=${(i.getAttribute('src') || '').slice(0, 160)} alt="${i.alt}"]`).join('\n');

(async () => {
  fs.mkdirSync(path.join(OUT, 'slides'), { recursive: true });
  await new Promise(r => server.listen(0, r));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const open = async (url, vp = { width: 1400, height: 1000 }) => {
    const p = await browser.newPage({ viewport: vp });
    await p.route('**/*', rt => {
      const u = rt.request().url();
      if (u.startsWith(origin)) return rt.continue();
      if (FONT_DIR && u.startsWith('https://fonts.googleapis.com/css2')) return rt.fulfill({ contentType: 'text/css', body: fs.readFileSync(path.join(FONT_DIR, 'fonts.css')) });
      if (FONT_DIR && u.startsWith('https://fonts.gstatic.com/')) {
        const f = path.join(FONT_DIR, u.replace('https://fonts.gstatic.com/', '').replace(/\//g, '_'));
        return fs.existsSync(f) ? rt.fulfill({ contentType: 'font/woff2', body: fs.readFileSync(f) }) : rt.abort();
      }
      return rt.abort();
    });
    await p.goto(`${origin}/${url}`, { waitUntil: 'load' });
    await p.waitForTimeout(800);
    return p;
  };

  // The lesson page, every module pop-out, every lecture card.
  const out = [];
  const p = await open(`${unitDir}/${lesson}`);
  out.push('##### LESSON PAGE (main, as rendered)\n' + await p.evaluate(() => document.querySelector('main').innerText));
  const cards = await p.evaluate(() => document.querySelectorAll('#module-grid .module-card').length);
  for (let i = 0; i < cards; i++) {
    const label = await p.evaluate(i => { const c = document.querySelectorAll('#module-grid .module-card')[i]; const t = c.innerText; c.click(); return t; }, i);
    await p.waitForTimeout(400);
    const body = await p.evaluate(src => {
      const m = document.getElementById('pop-modal');
      if (!m.classList.contains('show') && getComputedStyle(m).display === 'none') return '(no pop-out: a jump link or an external link)';
      return document.getElementById('pop-title').innerText + '\n' + document.getElementById('pop-body').innerText + '\n' + new Function('sel', 'return (' + src + ')(sel)')('#pop-body img');
    }, imgLines.toString());
    out.push(`\n\n##### MODULE CARD ${i + 1}: ${label.replace(/\n+/g, ' | ')}\n${body}`);
    await p.evaluate(() => { if (window.closeModule) window.closeModule(); });
    await p.waitForTimeout(150);
  }
  const lectures = await p.evaluate(() => document.querySelectorAll('#main-lecture-grid .lecture-card, #main-lecture-grid article').length);
  for (let i = 0; i < lectures; i++) {
    out.push(`\n\n##### LECTURE CARD ${i + 1} (modal)\n` + await p.evaluate(i => {
      document.querySelectorAll('#main-lecture-grid .lecture-card, #main-lecture-grid article')[i].click();
      return document.getElementById('lecture-modal-title').innerText + '\n' + document.getElementById('lecture-modal-bullets').innerText
        + '\n[IMG ' + document.getElementById('lecture-modal-img').getAttribute('src') + ']\nCAPTION: ' + document.getElementById('lecture-modal-caption').innerText;
    }, i));
    await p.evaluate(() => { if (window.closeLectureModal) window.closeLectureModal(); });
  }
  fs.writeFileSync(path.join(OUT, 'lesson-page.txt'), out.join('\n'));
  await p.close();

  // Standalone pages: visible text, then every word including steps not yet shown.
  for (const [name, url] of [['first-and-10.txt', reading && `${unitDir}/${reading}`], ['deep-reading.txt', deep && `${unitDir}/${deep}`], ['beintheroom.txt', room]]) {
    if (!url) { fs.writeFileSync(path.join(OUT, name), '(this topic has none)\n'); continue; }
    const q = await open(url);
    fs.writeFileSync(path.join(OUT, name), await q.evaluate(src =>
      document.body.innerText + '\n\n----- ALL TEXT (textContent, for steps not yet shown) -----\n'
      + document.body.textContent.replace(/\s+\n/g, '\n').replace(/\n{3,}/g, '\n\n') + '\n'
      + new Function('sel', 'return (' + src + ')(sel)')('img'), imgLines.toString()));
    await q.close();
  }

  // The teacher deck, projector mode, one full-window shot per slide.
  let slideCount = 0;
  if (deck) {
    const q = await open(`${deck}?mode=project`, { width: 1920, height: 1080 });
    for (let k = 0; k < 80; k++) await q.keyboard.press('ArrowLeft');
    const slides = await q.evaluate(() => (window.BEHISTORICAL_TEACHING || {}).slides || []);
    fs.writeFileSync(path.join(OUT, 'deck-slides-data.json'), JSON.stringify(slides, null, 1));
    const texts = [];
    for (let i = 0; i < slides.length; i++) {
      if (i) await q.keyboard.press('ArrowRight');
      await q.waitForTimeout(250);
      await q.evaluate(() => window.scrollTo(0, 0));
      await q.screenshot({ path: path.join(OUT, 'slides', `teacher-${String(i + 1).padStart(2, '0')}.png`) });
      texts.push(`--- teacher slide ${i + 1} ---\n` + await q.evaluate(() => (document.getElementById('stage') || document.body).innerText));
    }
    slideCount = slides.length;
    fs.writeFileSync(path.join(OUT, 'deck-teacher-text.txt'), texts.join('\n\n'));
    await q.close();
  }
  await browser.close();
  server.close();

  // Canvas text for this topic, stripped of its inline-styled markup.
  const strip = h => h.replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/[ \t]+/g, ' ').replace(/\n\s*\n+/g, '\n');
  let canvas = '';
  for (const f of ['docs/canvas/assignments.md', 'docs/canvas/calendar-events.md']) {
    const s = fs.existsSync(path.join(ROOT, f)) ? fs.readFileSync(path.join(ROOT, f), 'utf8') : '';
    const i = s.indexOf(`## Topic ${topic}:`);
    if (i < 0) continue;
    const j = s.indexOf('\n## Topic', i + 5);
    canvas += `\n===== ${f}\n` + strip(s.slice(i, j < 0 ? undefined : j));
  }
  fs.writeFileSync(path.join(OUT, 'canvas-text.txt'), canvas || '(no Canvas text for this topic yet)\n');

  const brief = fs.readFileSync(path.join(ROOT, 'docs', 'review-brief-template.md'), 'utf8')
    .replace(/\{\{TOPIC\}\}/g, topic).replace(/\{\{KEY\}\}/g, key).replace(/\{\{UNIT\}\}/g, topic.split('.')[0])
    .replace(/\{\{REVIEW_DIR\}\}/g, OUT).replace(/\{\{ROOT\}\}/g, ROOT).replace(/\{\{SLIDES\}\}/g, String(slideCount));
  fs.writeFileSync(path.join(OUT, 'REVIEW-BRIEF.md'), brief);
  console.log(`Topic ${topic}: packet written to ${OUT} (${cards} module cards, ${lectures} lecture cards, ${slideCount} teacher slides${FONT_DIR ? ', brand fonts' : ', fallback fonts: set BHT_FONT_DIR for the brand faces'})`);
})().catch(e => { console.error(e); process.exit(1); });
