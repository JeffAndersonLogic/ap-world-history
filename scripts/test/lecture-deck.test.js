#!/usr/bin/env node
/**
 * lecture-deck.test.js
 *
 * Drives the lecture deck on both renderers and asserts the flow a student
 * actually walks: step through every card, close the last one, and still be able
 * to scroll the lesson.
 *
 * This exists because of a real classroom failure. The prev/next arrows swap the
 * card in place by calling the open function again, and bhOpenModal used to push
 * a stack entry every time. A five-card deck pushed five entries, Close popped
 * one, and the stack stayed non-empty, so `document.body.style.overflow` was
 * never restored: the page looked normal, the dialog was gone, and the student
 * could not scroll up or down. The only way out was reloading the page.
 *
 * Every structural check stayed green through all of it, which is the version of
 * this bug that matters. Nothing in validate.js can see a scroll lock, and
 * modal-focus.*.js opens one card rather than walking a deck, so neither would
 * have caught it. Hence a test that walks the whole deck.
 *
 * It also covers the two things added alongside the fix, because both are ways a
 * student gets out of the deck and neither is visible to an offline check:
 *
 *   - Back to Modules, which closes the card and lands on the module grid with
 *     focus on a real card rather than at the top of the document.
 *   - The video block, which introduces itself when a topic has clips and
 *     disappears when it does not. 44 of the 71 unit topics have no clip, and an
 *     empty container left a gap under the concept cards that reads as something
 *     failing to load.
 *
 * Three pages, chosen for what differs: a Foundations topic (six shells, its own
 * renderer, two clips), a unit topic with clips, and a unit topic without.
 *
 *   npm i playwright-core        # once, not committed
 *   node scripts/test/lecture-deck.test.js
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

const results = [];
function check(name, pass, detail) {
  results.push({ name, pass });
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  (' + detail + ')' : ''}`);
}

const PAGES = [
  { label: 'Foundations 1, its own renderer, 2 clips',
    url: '/foundations/foundations-1-geography.html', clips: true },
  { label: 'Topic 1.1, shared renderer, 2 clips',
    url: '/unit-1/lesson-1-1-song-china.html', clips: true },
  { label: 'Topic 4.1, shared renderer, no clips',
    url: '/unit-4/lesson-4-1-technological-innovations.html', clips: false }
];

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });

  for (const spec of PAGES) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    // Abort anything the fixture server does not serve. The lessons link Google
    // Fonts and Wikimedia images, which in a sandbox hang rather than fail fast.
    // Both renderers degrade to local artwork on a dead image, so this removes a
    // test artefact rather than hiding a defect.
    await page.route('**/*', route =>
      route.request().url().startsWith(`http://127.0.0.1:${port}/`) ? route.continue() : route.abort());
    await page.goto(`http://127.0.0.1:${port}${spec.url}`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('#main-lecture-grid .lecture-topic-card');

    console.log(`\n  ${spec.label}`);
    const cards = await page.locator('#main-lecture-grid .lecture-topic-card').count();

    check('deck controls are injected, not hand-added to the shells',
      await page.locator('#lecture-next').count() === 1 &&
      await page.locator('#lecture-prev').count() === 1 &&
      await page.locator('#lecture-to-modules').count() === 1);

    await page.locator('#main-lecture-grid .lecture-topic-card').first().click();
    await page.waitForSelector('#lecture-modal.show');
    await page.waitForTimeout(60);

    check('the counter names the card and the deck size',
      (await page.locator('#lecture-nav-status').textContent()) === `Card 1 of ${cards}`,
      await page.locator('#lecture-nav-status').textContent());
    check('prev is disabled on the first card', await page.locator('#lecture-prev').isDisabled());

    // Both buttons have to be reachable inside the panel. The row is positioned
    // absolutely, so a panel that is not its containing block would throw it into
    // the overlay corner, outside the dialog a screen reader is trapped in.
    const placed = await page.evaluate(() => {
      const row = document.querySelector('.lecture-modal-actions').getBoundingClientRect();
      const panel = document.querySelector('.lecture-modal-panel').getBoundingClientRect();
      return { inside: row.left >= panel.left - 1 && row.right <= panel.right + 1 && row.top >= panel.top - 1,
        row: `${row.left | 0},${row.top | 0}`, panel: `${panel.left | 0},${panel.top | 0},${panel.right | 0}` };
    });
    check('the Back to Modules and Close row sits inside the panel',
      placed.inside, `row=${placed.row} panel=${placed.panel}`);

    // ── The card has to be readable at the back of the room ──────────────────
    //
    // Deliberately polarity-agnostic: it asserts contrast, not "light". Flipping
    // the panel between paper and dark is a design call and this must not
    // relitigate it. What it will not allow is a half-done flip, which is the real
    // hazard here: the panel was dark with gold headings, and gold on paper is
    // 2.1:1. Change the background without the headings and the title becomes
    // unreadable while every structural check stays green.
    const contrast = await page.evaluate(() => {
      const lum = (rgb) => {
        const c = rgb.map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
        return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
      };
      const parse = (s) => {
        const m = String(s).match(/rgba?\(([^)]+)\)/);
        if (!m) return null;
        const p = m[1].split(',').map(x => parseFloat(x.trim()));
        return { rgb: p.slice(0, 3), a: p.length > 3 ? p[3] : 1 };
      };
      const ratio = (a, b) => {
        const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x);
        return Math.round(((hi + 0.05) / (lo + 0.05)) * 100) / 100;
      };
      const panel = document.querySelector('.lecture-modal-panel');
      const bg = parse(getComputedStyle(panel).backgroundColor);
      const title = parse(getComputedStyle(document.getElementById('lecture-modal-title')).color);
      const bullet = document.querySelector('#lecture-modal-bullets li');
      const body = parse(getComputedStyle(bullet).color);
      const term = bullet.parentNode.querySelector('strong');
      // A highlighted term sits on its own background, so measure against that.
      const termBg = term ? (parse(getComputedStyle(term).backgroundColor)) : null;
      const termFg = term ? parse(getComputedStyle(term).color) : null;
      const flat = (over, under) => over && over.a === 1 ? over.rgb
        : over ? over.rgb.map((v, i) => Math.round(over.a * v + (1 - over.a) * under[i])) : under;
      return {
        opaque: !!bg && bg.a === 1,
        title: bg && title ? ratio(title.rgb, bg.rgb) : 0,
        body: bg && body ? ratio(body.rgb, bg.rgb) : 0,
        term: termFg && bg ? ratio(termFg.rgb, flat(termBg, bg.rgb)) : null
      };
    });
    check('the panel declares an opaque background', contrast.opaque);
    check('body bullets clear 4.5:1 against the panel', contrast.body >= 4.5, contrast.body + ':1');
    check('the card title clears 3:1 against the panel', contrast.title >= 3, contrast.title + ':1');
    if (contrast.term !== null) {
      check('a highlighted term clears 4.5:1 on its own background',
        contrast.term >= 4.5, contrast.term + ':1');
    }

    // ── Walk the whole deck, the way a teacher projecting it does ────────────
    for (let i = 1; i < cards; i++) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(40);
    }
    check('the arrow key walks to the last card',
      (await page.locator('#lecture-nav-status').textContent()) === `Card ${cards} of ${cards}`,
      await page.locator('#lecture-nav-status').textContent());
    check('next is disabled on the last card', await page.locator('#lecture-next').isDisabled());

    // The regression itself. One visible dialog is one stack entry, however many
    // times the card was swapped inside it.
    check('stepping the deck leaks no modal stack entries',
      await page.evaluate(() => BHModalStack.length) === 1,
      'stack=' + await page.evaluate(() => BHModalStack.length));

    // ── Close after the last card: the reported failure ──────────────────────
    await page.locator('#lecture-modal .lecture-close').click();
    await page.waitForTimeout(80);
    check('closing the last card releases the scroll lock',
      await page.evaluate(() => document.body.style.overflow === ''),
      'overflow=' + JSON.stringify(await page.evaluate(() => document.body.style.overflow)));

    // Asserting the lock is not enough: assert the page really moves. A future
    // lock by some other mechanism has to fail here too.
    const before = await page.evaluate(() => window.scrollY);
    await page.mouse.move(640, 400);
    await page.mouse.wheel(0, -600);
    await page.waitForTimeout(250);
    const after = await page.evaluate(() => window.scrollY);
    check('the lesson scrolls again after Close', after !== before, `${before} -> ${after}`);

    check('Close returns to the card that opened it',
      await page.evaluate(() => document.activeElement &&
        document.activeElement.classList.contains('lecture-topic-card')));

    // ── Back to Modules, the explicit way out of the deck ────────────────────
    await page.locator('#main-lecture-grid .lecture-topic-card').first().click();
    await page.waitForSelector('#lecture-modal.show');
    await page.waitForTimeout(60);
    await page.locator('#lecture-to-modules').click();
    await page.waitForTimeout(800); // the scroll is smooth on purpose

    const landed = await page.evaluate(() => {
      const section = document.getElementById('modules').getBoundingClientRect();
      const first = document.querySelector('#module-grid .module-card').getBoundingClientRect();
      return {
        closed: !document.getElementById('lecture-modal').classList.contains('show'),
        overflow: document.body.style.overflow,
        top: Math.round(section.top),
        visible: first.top >= 0 && first.bottom <= window.innerHeight,
        focused: !!(document.activeElement && document.activeElement.classList.contains('module-card'))
      };
    });
    check('Back to Modules closes the card', landed.closed);
    check('Back to Modules leaves the lesson scrollable',
      landed.overflow === '', 'overflow=' + JSON.stringify(landed.overflow));
    check('the modules section is at the top of the viewport',
      Math.abs(landed.top) < 150, 'top=' + landed.top);
    check('a module card is on screen and holds focus',
      landed.visible && landed.focused, `visible=${landed.visible} focused=${landed.focused}`);

    // ── The video block says what it is, or says nothing at all ──────────────
    const vids = await page.evaluate(() => {
      const host = document.getElementById('content-video-clips');
      const card = host.querySelector('.video-card h3');
      return {
        hidden: host.hidden,
        height: Math.round(host.getBoundingClientRect().height),
        intro: !!host.querySelector('.video-intro'),
        cards: host.querySelectorAll('.video-card').length,
        heading: card ? card.textContent : ''
      };
    });
    if (spec.clips) {
      check('the video block introduces itself', vids.intro && vids.cards > 0,
        `intro=${vids.intro} cards=${vids.cards}`);
      check('a clip card is headed by its title, not the word "Video Clip"',
        !!vids.heading && vids.heading !== 'Video Clip', vids.heading.slice(0, 46));
    } else {
      check('a topic with no clips hides the block rather than leaving a gap',
        vids.hidden && vids.height === 0, `hidden=${vids.hidden} height=${vids.height}px`);
    }

    check('no page errors', errors.length === 0, errors.join('; ') || 'none');
    await page.close();
  }

  await browser.close();
  server.close();

  const failed = results.filter(r => !r.pass);
  console.log(`\n  ${results.length - failed.length}/${results.length} passed`);
  if (failed.length) {
    for (const f of failed) console.log(`  ✗ ${f.name}`);
    process.exit(1);
  }
})();
