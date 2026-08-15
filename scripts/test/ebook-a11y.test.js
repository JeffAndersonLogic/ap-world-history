#!/usr/bin/env node
/**
 * ebook-a11y.test.js
 *
 * Drives both generated eBook pages in Chromium and asserts the WCAG 2.1 AA
 * contract they are built to: a skip link that is really first and really
 * visible when focused, one main landmark with the footer outside it, a focus
 * ring on every interactive element, no sideways scroll at 320 CSS pixels or at
 * 200% zoom, and no small text below 4.5:1 anywhere a student reads.
 *
 * A browser test rather than a source check, because every one of these is a
 * computed-style fact and none of them is visible in the HTML. validate.js can
 * see that <main id="main-content"> is in the file; only a browser can see that
 * the skip link is the first thing Tab reaches, that the ring the stylesheet
 * asks for actually paints, or that a grid track is wider than the viewport it
 * sits in. The 320px case in particular passed every offline check for as long
 * as it was broken: `minmax(320px,1fr)` is valid CSS that reads as a sensible
 * card width and silently overflows the page it is on.
 *
 * The contrast sweep is the part that earns its runtime. Antique Gold is
 * correct on the cover and wrong on the contents rows, and the difference is
 * not in the rule, it is in what is behind it. Nothing but a rendered page can
 * tell those two uses apart, which is exactly how #c9a46a ended up at 2.2:1 on
 * a list of chapter numbers while looking entirely on brand.
 *
 *   npm i playwright-core
 *   node scripts/test/ebook-a11y.test.js
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
  results.push(pass);
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  (' + detail + ')' : ''}`);
}

// Both generated eBook page types, and every volume that exists.
//
// The two page types come out of scripts/lib/ebook-page.js through different
// template functions, so a fix applied to one and not the other is a real and
// easy mistake, and every assertion below runs against both. The volume list is
// read from build-ebook.js rather than typed here for the reason the rest of
// this repo prefers discovery: a hand-written list stops covering the moment a
// volume is added, and it does so silently, with the suite still reporting the
// same confident green it did when the list was complete.
const { VOLUMES } = require(path.join(ROOT, 'scripts', 'build-ebook.js'));
const PAGES = [
  ['ebook/index.html', 'library'],
  ...VOLUMES.map(v => [v.outputFile, `volume "${v.id}"`])
];

/**
 * Injected into the page. Kept as one string rather than several because each
 * page.evaluate crosses the process boundary, and the contrast walk needs the
 * same helpers the focus walk does.
 *
 * page.evaluate takes an *expression*, so these declarations cannot be prefixed
 * onto a call site directly; withHelpers() closes them into an IIFE. Doing it
 * the other way round throws "Unexpected token 'function'" from inside the page
 * and reads like a bug in the page rather than in the test.
 */
const HELPERS = `
  function srgb(c){ c/=255; return c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4); }
  function lum(rgb){ return 0.2126*srgb(rgb[0]) + 0.7152*srgb(rgb[1]) + 0.0722*srgb(rgb[2]); }
  function parse(s){
    const m = /rgba?\\(([^)]+)\\)/.exec(s || '');
    if (!m) return null;
    const p = m[1].split(/[ ,\\/]+/).filter(Boolean).map(Number);
    if (p.length >= 4 && p[3] === 0) return null;      // fully transparent
    return [p[0], p[1], p[2]];
  }
  function ratio(a, b){
    const l1 = lum(a), l2 = lum(b);
    const hi = Math.max(l1, l2), lo = Math.min(l1, l2);
    return (hi + 0.05) / (lo + 0.05);
  }
  /**
   * The colour actually behind an element. Walks up for the first opaque
   * background-color, which is what a browser composites against.
   *
   * The cover is the one exception and it has to be special-cased: it paints a
   * linear-gradient, so its own background-color is transparent and a naive walk
   * would sail past it to <body> and compare gold text against cream paper,
   * reporting a comfortable pass as a catastrophic failure. #202324 is the
   * lightest stop in that gradient, so it is the worst case for light text on it.
   */
  function bgOf(el){
    for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
      if (n.classList && n.classList.contains('eb-cover')) return [0x20, 0x23, 0x24];
      const c = parse(getComputedStyle(n).backgroundColor);
      if (c) return c;
    }
    return parse(getComputedStyle(document.body).backgroundColor) || [255, 255, 255];
  }
  /** WCAG 1.4.3: 18pt, or 14pt bold, is "large" and drops to 3:1. */
  function threshold(cs){
    const px = parseFloat(cs.fontSize);
    const bold = (parseInt(cs.fontWeight, 10) || 400) >= 700;
    return (px >= 24 || (bold && px >= 18.66)) ? 3 : 4.5;
  }
`;

/** Wrap a statement body plus the helpers into the single expression evaluate wants. */
const withHelpers = body => `(() => {${HELPERS}\n${body}\n})()`;

(async () => {
  await new Promise(r => server.listen(0, r));
  const port = server.address().port;
  const browser = await chromium.launch({ executablePath: EXE, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));

  // The eBook pages load Google Fonts. In a sandbox that request hangs rather
  // than failing fast, which leaves the document in readyState "loading" and
  // makes every measurement below race the network. Blocking anything off the
  // fixture server keeps this pass hermetic and fast.
  //
  // The consequence has to be stated, because it is exactly the kind of quiet
  // gap this suite exists to close: with the fonts blocked, every measurement
  // below is taken in the Georgia and Arial fallbacks, so the reflow numbers
  // say nothing about how the page lays out in Cinzel and Libre Baskerville,
  // which are wider. The webfont pass at the end of this file covers that, and
  // skips rather than fails when the fonts cannot be fetched, because a third
  // party's outage must never fail a commit.
  await page.route('**/*', route => {
    const url = route.request().url();
    if (url.startsWith(`http://localhost:${port}/`)) return route.continue();
    return route.abort();
  });

  for (const [rel, label] of PAGES) {
    console.log(`\n${rel}`);
    await page.goto(`http://localhost:${port}/${rel}`, { waitUntil: 'load' });

    // ── 1. landmark and language ────────────────────────────────────────────
    const landmarks = await page.evaluate(() => ({
      lang: document.documentElement.lang,
      mains: document.querySelectorAll('main').length,
      mainId: (document.querySelector('main') || {}).id,
      footerInMain: !!document.querySelector('main footer'),
      footerExists: !!document.querySelector('footer'),
      h1s: document.querySelectorAll('h1').length
    }));
    check(`${label}: <html lang="en">`, landmarks.lang === 'en', landmarks.lang);
    check(`${label}: exactly one <main id="main-content">`,
      landmarks.mains === 1 && landmarks.mainId === 'main-content',
      `${landmarks.mains} main, id="${landmarks.mainId}"`);
    check(`${label}: footer exists and sits outside <main>`,
      landmarks.footerExists && !landmarks.footerInMain);
    check(`${label}: exactly one <h1>`, landmarks.h1s === 1, `${landmarks.h1s} found`);

    // ── 2. the skip link ────────────────────────────────────────────────────
    // Tab once from the very top of the document. "First focusable" is a claim
    // about what the keyboard reaches, so it is tested with the keyboard.
    await page.evaluate(() => { document.body.focus(); window.scrollTo(0, 0); });
    await page.keyboard.press('Tab');
    const skip = await page.evaluate(() => {
      const el = document.activeElement;
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return {
        isSkip: el.classList.contains('skip-link'),
        href: el.getAttribute('href'),
        text: (el.textContent || '').trim(),
        // Visible means on screen, not merely not-display-none. The off-screen
        // parking spot is left:-9999px, so a rule that failed to move it back
        // would still report a box, just not one anybody can see.
        onScreen: r.left >= 0 && r.top >= 0 && r.width > 0 && r.height > 0 &&
                  r.right <= window.innerWidth && r.bottom <= window.innerHeight
      };
    });
    check(`${label}: first Tab reaches the skip link`, !!skip && skip.isSkip,
      skip ? `focused "${skip.text}"` : 'nothing focused');
    check(`${label}: skip link targets #main-content`, !!skip && skip.href === '#main-content',
      skip ? skip.href : '');
    check(`${label}: skip link is visible once focused`, !!skip && skip.onScreen);

    // Activating it must land on a real target, and the target must be the main
    // landmark. A skip link pointing at a missing id still looks and behaves
    // like a link, and does nothing at all.
    await page.keyboard.press('Enter');
    await page.waitForTimeout(120);
    const landed = await page.evaluate(() => {
      const t = document.querySelector(location.hash || '#none');
      return { hash: location.hash, isMain: !!t && t.tagName === 'MAIN' };
    });
    check(`${label}: activating the skip link resolves to <main>`,
      landed.hash === '#main-content' && landed.isMain, landed.hash);

    // ── 3. a focus ring on every interactive element ────────────────────────
    // Tabbed rather than focused programmatically: :focus-visible is defined in
    // terms of how focus arrived, so element.focus() from a script is precisely
    // the case the pseudo-class is allowed not to match.
    await page.goto(`http://localhost:${port}/${rel}`, { waitUntil: 'load' });
    const focusables = await page.evaluate(() =>
      document.querySelectorAll('a[href], button, [tabindex]:not([tabindex="-1"])').length);

    await page.evaluate(() => { document.body.focus(); });
    const weak = [];
    for (let i = 0; i < focusables; i++) {
      await page.keyboard.press('Tab');
      const ring = await page.evaluate(withHelpers(`
        const el = document.activeElement;
        if (!el || el === document.body) return null;
        const cs = getComputedStyle(el);
        const col = parse(cs.outlineColor);
        return {
          tag: el.tagName,
          label: (el.className || '') + ' :: ' + (el.textContent || '').trim().slice(0, 32),
          style: cs.outlineStyle,
          width: parseFloat(cs.outlineWidth) || 0,
          // The ring is drawn outside the element, so it is judged against what
          // is behind the element, not against the element's own fill.
          contrast: col ? ratio(col, bgOf(el.parentElement || el)) : 0
        };
      `));
      if (!ring) continue;
      if (ring.style === 'none' || ring.width < 3 || ring.contrast < 3) {
        weak.push(`${ring.label.trim()} [${ring.style} ${ring.width}px ${ring.contrast.toFixed(2)}:1]`);
      }
    }
    check(`${label}: all ${focusables} focusable elements get a >=3px ring at >=3:1`,
      weak.length === 0, weak.slice(0, 4).join(' | '));

    // ── 4. reflow at 320 CSS pixels, and at 200% zoom ───────────────────────
    // 1.4.10 is tested at 320px wide. 1.4.4 at 200% is the same measurement on
    // a 1280px window, which is 640 CSS pixels of layout.
    for (const [w, h, why] of [[320, 640, '320px reflow'], [640, 512, '200% zoom of 1280x1024']]) {
      await page.setViewportSize({ width: w, height: h });
      await page.waitForTimeout(80);
      const over = await page.evaluate(() => {
        const de = document.documentElement;
        // Attribute the overflow, so a failure names the element rather than
        // only the number. Anything wider than the viewport and not inside its
        // own scroll container is a reflow bug.
        //
        // Rightward only. In a left-to-right document, content pushed off the
        // left edge does not extend the scrollable area, which is exactly how
        // the off-screen skip link is parked at left:-9999px without making the
        // page scroll. Flagging it would fail the test on the fix for it.
        const wide = [];
        for (const el of document.querySelectorAll('body *')) {
          const r = el.getBoundingClientRect();
          if (r.right > de.clientWidth + 1) {
            let scrolls = false;
            for (let n = el.parentElement; n; n = n.parentElement) {
              const o = getComputedStyle(n).overflowX;
              if (o === 'auto' || o === 'scroll') { scrolls = true; break; }
            }
            if (!scrolls) wide.push(el.className || el.tagName);
          }
        }
        return { scrollW: de.scrollWidth, clientW: de.clientWidth, wide: wide.slice(0, 4) };
      });
      check(`${label}: no horizontal scroll, ${why}`,
        over.scrollW <= over.clientW + 1 && over.wide.length === 0,
        `scrollWidth ${over.scrollW} vs ${over.clientW}${over.wide.length ? ', ' + over.wide.join(', ') : ''}`);
    }
    await page.setViewportSize({ width: 1280, height: 900 });

    // ── 5. text contrast ────────────────────────────────────────────────────
    // Every element holding its own text, measured against what is actually
    // behind it. This is the check that would have caught #c9a46a on the
    // contents rows, and the one that keeps it caught when a chapter is added.
    const lowContrast = await page.evaluate(withHelpers(`
      const bad = [];
      for (const el of document.querySelectorAll('body *')) {
        // Own text only: counting a wrapper twice reports the same defect once
        // per level of nesting and buries the element that actually has it.
        const own = Array.from(el.childNodes)
          .filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim();
        if (!own) continue;
        const cs = getComputedStyle(el);
        if (cs.visibility === 'hidden' || cs.display === 'none' || parseFloat(cs.opacity) === 0) continue;
        const r = el.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) continue;   // the parked skip link
        const fg = parse(cs.color);
        if (!fg) continue;
        const cr = ratio(fg, bgOf(el));
        const need = threshold(cs);
        if (cr < need) {
          bad.push((el.className || el.tagName) + ' "' + own.slice(0, 24) + '" ' +
                   cr.toFixed(2) + ':1 needs ' + need);
        }
      }
      return bad;
    `));
    check(`${label}: no text below its WCAG AA threshold`,
      lowContrast.length === 0, lowContrast.slice(0, 5).join(' | '));

    // ── 6. navigation still works ───────────────────────────────────────────
    // The <main> wrapper moved every anchor on these pages one level deeper. In
    // -page links are resolved by id, so a lost id is a dead link that still
    // renders; out-of-page links are fetched, because "../foundations/..." is
    // computed from the slug and a wrong one 404s silently for a student.
    const links = await page.evaluate(() => Array.from(document.querySelectorAll('a[href]'))
      .map(a => a.getAttribute('href')).filter(h => h && !h.startsWith('http')));
    const deadAnchors = await page.evaluate(() => Array.from(document.querySelectorAll('a[href^="#"]'))
      .map(a => a.getAttribute('href'))
      .filter(h => h !== '#' && !document.querySelector(h)));
    check(`${label}: every in-page anchor resolves`, deadAnchors.length === 0,
      deadAnchors.slice(0, 5).join(', '));

    const outbound = [...new Set(links.filter(h => !h.startsWith('#')).map(h => h.split('#')[0]))];
    const broken = [];
    for (const href of outbound) {
      const target = new URL(href, `http://localhost:${port}/${rel}`).toString();
      const res = await page.request.get(target).catch(() => null);
      if (!res || !res.ok()) broken.push(`${href} -> ${res ? res.status() : 'error'}`);
    }
    check(`${label}: all ${outbound.length} outbound links resolve`, broken.length === 0,
      broken.join(', '));
  }

  // ── 6. the same reflow measurement, in the real brand fonts ──────────────
  //
  // Everything above ran with webfonts blocked, so it measured the fallbacks.
  // Cinzel and Libre Baskerville are both wider than Georgia at the same size,
  // and reflow is a width test, so a page that fits at 320px in the fallback
  // can still overflow in the face a student actually sees. This pass allows
  // the two font hosts, waits for the faces to be in use, and repeats the two
  // reflow measurements.
  //
  // It SKIPS rather than fails when the fonts do not arrive. The browser job
  // has network, so this normally runs; when Google is unreachable the suite
  // still has to be able to go green, for the same reason check-image-urls.js
  // lives in the nightly workflow rather than on the push path. A skip is
  // printed, so nobody mistakes it for coverage.
  console.log('\nwith the brand webfonts loaded');
  const fontCtx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const fontPage = await fontCtx.newPage();
  await fontPage.route('**/*', route => {
    const url = route.request().url();
    if (url.startsWith(`http://localhost:${port}/`)) return route.continue();
    if (/^https:\/\/fonts\.(googleapis|gstatic)\.com\//.test(url)) return route.continue();
    return route.abort();
  });

  for (const [rel, label] of PAGES) {
    let loaded = false;
    try {
      await fontPage.goto(`http://localhost:${port}/${rel}`, { waitUntil: 'load', timeout: 15000 });
      // Measured, not asked. document.fonts.check() answers "can I render this
      // string in that family", and a browser with no Cinzel answers yes,
      // because it can render it in a fallback. It returns true on a machine
      // with no network at all, which would make this whole pass report a
      // confident green while measuring Georgia. The honest test is whether the
      // face changes the layout: render the same string in the webfont and in
      // the fallback and compare widths. Cinzel is a Trajan-style face whose
      // lowercase are small capitals, so it is nowhere near Georgia's metrics,
      // and identical widths mean it did not apply.
      loaded = await fontPage.evaluate(async () => {
        await document.fonts.ready;
        const width = family => {
          const el = document.createElement('span');
          el.textContent = 'The Global Tapestry Handgloves';
          el.style.cssText =
            `position:absolute;visibility:hidden;white-space:nowrap;` +
            `font-size:40px;font-weight:700;font-family:${family}`;
          document.body.appendChild(el);
          const w = el.getBoundingClientRect().width;
          el.remove();
          return w;
        };
        const fallback = width('Georgia,serif');
        return Math.abs(width('Cinzel,Georgia,serif') - fallback) > 1 &&
               Math.abs(width('"Libre Baskerville",Georgia,serif') - fallback) > 1;
      });
    } catch (e) { loaded = false; }

    if (!loaded) {
      console.log(`  SKIP  ${label}: brand webfonts did not load, reflow measured in fallbacks only`);
      continue;
    }

    for (const [w, h, why] of [[320, 640, '320px reflow'], [640, 512, '200% zoom of 1280x1024']]) {
      await fontPage.setViewportSize({ width: w, height: h });
      await fontPage.waitForTimeout(80);
      const over = await fontPage.evaluate(() => {
        const de = document.documentElement;
        const wide = [];
        for (const el of document.querySelectorAll('body *')) {
          const r = el.getBoundingClientRect();
          if (r.right > de.clientWidth + 1) {
            let scrolls = false;
            for (let n = el.parentElement; n; n = n.parentElement) {
              const o = getComputedStyle(n).overflowX;
              if (o === 'auto' || o === 'scroll') { scrolls = true; break; }
            }
            if (!scrolls) wide.push(el.className || el.tagName);
          }
        }
        return { scrollW: de.scrollWidth, clientW: de.clientWidth, wide: wide.slice(0, 4) };
      });
      check(`${label}: no horizontal scroll in brand fonts, ${why}`,
        over.scrollW <= over.clientW + 1 && over.wide.length === 0,
        `scrollWidth ${over.scrollW} vs ${over.clientW}${over.wide.length ? ', ' + over.wide.join(', ') : ''}`);
    }
    await fontPage.setViewportSize({ width: 1280, height: 900 });
  }
  await fontCtx.close();

  check('no page errors in either eBook page', errors.length === 0, errors.slice(0, 3).join(' | '));

  await browser.close();
  server.close();

  const failed = results.filter(r => !r).length;
  console.log(`\n${'─'.repeat(60)}`);
  console.log(failed
    ? `${failed} of ${results.length} eBook accessibility checks failed.`
    : `All ${results.length} eBook accessibility checks passed.`);
  process.exit(failed ? 1 : 0);
})().catch(e => {
  console.error(e);
  server.close();
  process.exit(1);
});
