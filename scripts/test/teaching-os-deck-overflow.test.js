#!/usr/bin/env node
/**
 * teaching-os-deck-overflow.test.js
 *
 * Walks every generated Teaching OS student deck in Chromium and asserts that no
 * slide renders taller or wider than the frame it is projected inside.
 *
 * This exists because of a real classroom defect. Every student presentation
 * shell sized its map images with:
 *
 *   .map-media img{width:100%;height:100%;object-fit:contain}
 *
 * `.map-media` is a grid track sized `minmax(0,1fr)` under `place-items:center`.
 * A percentage height does not resolve against an indefinite track, so a
 * landscape image laid out at its own aspect ratio instead of its row's height:
 * a 1600x1000 map rendered 737px tall inside a 531px row and pushed the slide
 * footer, which carries the takeaway line, off the bottom of the board. It was
 * live on four decks at once (Topics 2.1, 2.2, 2.5 and 2.6), over by as much as
 * 185px, and every structural check was green throughout. Nothing offline can
 * see a laid-out box.
 *
 * Two things about the design are deliberate:
 *
 *   - **The deck list is derived from DECKS**, the same list the generator and
 *     the architecture contract read. A list typed in here would go on reporting
 *     a confident green while covering less of the course each time a topic
 *     landed, which is the failure this repository cares about more than a red.
 *
 *   - **Blocked remote images are substituted, not skipped.** Several slides
 *     point at Wikimedia, and a hermetic run that merely aborts those requests
 *     measures a zero-height box and cannot overflow, so the check would pass on
 *     precisely the slides most likely to fail. Every non-local image request is
 *     instead fulfilled with a local 1600x1000 landscape fixture, which is the
 *     exact aspect ratio that produced the original defect. The run stays
 *     hermetic and still measures a real picture.
 *
 * Two viewports, because the failure is vertical: a 16:10 laptop and a 4:3
 * projector, which is the harsher case for height.
 *
 *   npm i playwright-core        # once, not committed
 *   node scripts/test/teaching-os-deck-overflow.test.js
 *
 * Chromium comes from PW_CHROME or PLAYWRIGHT_BROWSERS_PATH. Exits 2 when
 * playwright-core is absent, which run-tests.js reads as SKIP unless --strict.
 */

'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');

// Required lazily so the failure is a sentence rather than a stack trace.
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

// A 1600x1000 landscape picture: the aspect ratio that produced the original
// defect. Stood in for every remote image so a blocked request never reads as a
// slide that cannot overflow.
const STAND_IN = Buffer.from(
  '<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">'
  + '<rect width="1600" height="1000" fill="#20262a"/>'
  + '<rect x="40" y="40" width="1520" height="920" fill="none" stroke="#c9a46a" stroke-width="8"/>'
  + '</svg>', 'utf8');

const VIEWPORTS = [
  { label: '1280x800 laptop', width: 1280, height: 800 },
  { label: '1024x768 projector', width: 1024, height: 768 }
];

const results = [];
function check(name, pass, detail) {
  results.push({ name, pass });
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  (' + detail + ')' : ''}`);
}

// The shell lives beside the lesson it belongs to and is named from the topic,
// the same way build-deep-readings.js places a page from its slug. Derived
// rather than declared so a new deck cannot arrive with no shell to test.
function shellFor(key) {
  const slug = key.replace('.', '-');
  return `unit-${key.split('.')[0]}/presentation-topic-${slug}-student.html`;
}

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const origin = `http://127.0.0.1:${port}`;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });

  console.log(`\nTeaching OS student deck overflow  (${DECKS.length} deck(s) from DECKS)\n`);

  for (const deck of DECKS) {
    const rel = shellFor(deck.key);
    console.log(`\n  Topic ${deck.key}  ${rel}`);

    if (!fs.existsSync(path.join(ROOT, rel))) {
      check(`${deck.key} student shell exists`, false, rel);
      continue;
    }
    check(`${deck.key} student shell exists`, true);

    for (const vp of VIEWPORTS) {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));

      await page.route('**/*', route => {
        const url = route.request().url();
        if (url.startsWith(origin)) return route.continue();
        if (route.request().resourceType() === 'image') {
          return route.fulfill({ status: 200, contentType: 'image/svg+xml', body: STAND_IN });
        }
        return route.abort();
      });

      await page.goto(`${origin}/${rel}`, { waitUntil: 'domcontentloaded' });
      await page.waitForSelector('#stage .slide', { timeout: 15000 });
      await page.waitForTimeout(350);

      const total = Number(((await page.$eval('#count', el => el.textContent)).split('/')[1] || '0').trim());
      const seen = [];
      for (let i = 0; i < total; i++) {
        seen.push(await page.evaluate(() => {
          const stage = document.querySelector('#stage');
          const slide = stage.querySelector('.slide') || stage.firstElementChild;
          if (!slide) return { title: '(no slide)', sig: '(no slide)', overY: 0, overX: 0, imgs: 0, worst: '' };
          const frame = slide.getBoundingClientRect();
          // Measure painted boxes against the frame, not scrollHeight. A slide
          // whose children are all absolutely positioned reports a scrollHeight
          // larger than its clientHeight even when every child sits comfortably
          // inside, so the first version of this check failed eight hero slides
          // on which nothing was actually clipped. What matters to a student is
          // whether something they are meant to read is painted outside the
          // board, and that is a rectangle comparison.
          let overY = 0, overX = 0, worst = '';
          for (const el of slide.querySelectorAll('*')) {
            const cs = getComputedStyle(el);
            if (cs.visibility === 'hidden' || cs.display === 'none' || cs.opacity === '0') continue;
            const r = el.getBoundingClientRect();
            if (!r.width || !r.height) continue;
            const below = Math.round(r.bottom - frame.bottom);
            const above = Math.round(frame.top - r.top);
            const right = Math.round(r.right - frame.right);
            const left = Math.round(frame.left - r.left);
            const y = Math.max(below, above), x = Math.max(right, left);
            if (y > overY) { overY = y; worst = el.className || el.tagName.toLowerCase(); }
            if (x > overX) overX = x;
          }
          return {
            title: (stage.querySelector('h2')?.textContent || '').trim().slice(0, 44),
            // Tells slides apart for the walk check. The first h2 alone cannot:
            // a template slide may have none (a primary source, a placard, a
            // sharpened claim), and a landing slide can repeat another slide's
            // heading on purpose, so Topic 2.4 read as 18 slides of 21.
            sig: (stage.innerText || '').replace(/\s+/g, ' ').trim().slice(0, 240),
            overY, overX, worst,
            imgs: [...stage.querySelectorAll('img')].filter(im => im.naturalWidth > 0).length
          };
        }));
        if (i < total - 1) { await page.click('#next').catch(() => {}); await page.waitForTimeout(90); }
      }

      const label = `${deck.key} @ ${vp.label}`;
      check(`${label}: deck reports slides`, total > 0, `${total} slide(s)`);

      // Without this, a walk that never advanced reports every other assertion
      // green having measured slide 1 N times. That false green is not
      // hypothetical: it happened while this defect was being diagnosed.
      const distinct = new Set(seen.map(s => s.sig)).size;
      check(`${label}: the walk really advanced`, total > 0 && distinct === total,
        `${distinct} distinct of ${total}`);

      const tallY = seen.filter(s => s.overY > 2);
      check(`${label}: nothing is painted above or below the board`, tallY.length === 0,
        tallY.map(s => `${s.title} +${s.overY}px [${s.worst}]`).join(' | ') || 'clean');

      const wideX = seen.filter(s => s.overX > 2);
      check(`${label}: nothing is painted left or right of the board`, wideX.length === 0,
        wideX.map(s => `${s.title} +${s.overX}px`).join(' | ') || 'clean');

      // Proves the stand-in actually painted. Without a decoded picture on the
      // picture slides, the vertical assertion above is measuring empty boxes.
      const withImages = seen.filter(s => s.imgs > 0).length;
      check(`${label}: picture slides really rendered a picture`, withImages > 0,
        `${withImages} of ${total} slide(s) carry a decoded image`);

      check(`${label}: no page errors`, errors.length === 0, errors.slice(0, 2).join(' | ') || 'clean');
      await page.close();
    }
  }

  await browser.close();
  server.close();

  const failed = results.filter(r => !r.pass);
  console.log(`\n  ${failed.length ? 'FAIL' : 'PASS'}  ${results.length} assertion(s), ${failed.length} failed`);
  if (failed.length) {
    console.log('\n  Failing:');
    for (const f of failed) console.log(`    - ${f.name}`);
  }
  process.exit(failed.length ? 1 : 0);
})().catch(err => { console.error(err); server.close(); process.exit(1); });
