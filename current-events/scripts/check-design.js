#!/usr/bin/env node
/**
 * BeHistorical Current Events, design system check
 * Run: node scripts/check-design.js            (starts its own static server)
 *      node scripts/check-design.js --url URL  (points at a running server)
 *      node scripts/check-design.js --shots DIR (also writes screenshots)
 *
 * This is the counterpart to AP World's validate.js: that one audits structure
 * offline, this one drives a real browser and audits what actually renders.
 *
 * It exists because three real defects shipped past code review and were only
 * caught by measuring the rendered page:
 *   - step 01's numeral was full-strength orange at 2.6:1
 *   - --steel-2 was 4.1:1 and carries every dateline and strand label
 *   - filled ramp chips hit a mid-tone where NO foreground reaches AA
 *
 * The invariants it protects are listed in DESIGN-HANDOFF.md. If you change a
 * token, a ramp, or the hub's above-the-fold budget, run this before pushing.
 *
 * Needs Playwright + Chromium. Skips cleanly with an explanatory message if
 * Playwright is not installed, so it never blocks a content-only change.
 */
'use strict';

let chromium;
try {
  ({ chromium } = require('playwright'));
} catch (e) {
  try {
    ({ chromium } = require('/opt/node22/lib/node_modules/playwright'));
  } catch (e2) {
    console.log('check-design: Playwright not installed, skipping.');
    console.log('  npm i -D playwright && npx playwright install chromium');
    process.exit(0);
  }
}

const path = require('path');
const http = require('http');
const fs   = require('fs');

const argv = process.argv.slice(2);
const arg  = n => { const i = argv.indexOf(n); return i === -1 ? null : argv[i + 1]; };
const OUT  = arg('--shots');
const ROOT = path.resolve(__dirname, '..');

/** Minimal static server so the check has no dependency on http-server. */
function serve(root) {
  const TYPES = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript',
                  '.svg':'image/svg+xml', '.json':'application/json',
                  '.jpeg':'image/jpeg', '.jpg':'image/jpeg', '.png':'image/png' };
  const server = http.createServer((req, res) => {
    let f = path.join(root, decodeURIComponent(req.url.split('?')[0]));
    if (f.endsWith('/')) f += 'index.html';
    if (!f.startsWith(root)) { res.writeHead(403).end(); return; }
    fs.readFile(f, (err, buf) => {
      if (err) { res.writeHead(404).end('not found'); return; }
      res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
      res.end(buf);
    });
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1',
    () => resolve({ server, port: server.address().port })));
}

(async () => {
  let own = null;
  let BASE = arg('--url');
  if (!BASE) { own = await serve(ROOT); BASE = 'http://127.0.0.1:' + own.port; }
  if (OUT) fs.mkdirSync(OUT, { recursive: true });

  const browser = await chromium.launch();
  const errors = [];
  let failures = 0;
  const check = (name, cond, extra) => {
    console.log((cond ? '  ok   ' : '  FAIL ') + name + (extra ? '  ' + extra : ''));
    if (!cond) failures++;
  };

  const ctx = await browser.newContext({ viewport: { width: 1366, height: 768 } });
  const page = await ctx.newPage();
  page.on('pageerror', e => errors.push('pageerror: ' + e.message));
  // Google Fonts are external. On a filtered school network, or in a sandbox,
  // they fail to load and the stack falls back to Georgia. That is a designed-for
  // condition, not a defect, so those errors are not counted.
  const isFontNoise = t => /fonts\.(googleapis|gstatic)\.com|ERR_CERT|Failed to load resource/.test(t);
  page.on('console', m => {
    if (m.type() === 'error' && !isFontNoise(m.text())) errors.push('console: ' + m.text());
  });
  page.on('requestfailed', r => {
    const u = r.url();
    if (u.startsWith(BASE)) errors.push('404/failed: ' + u + ' :: ' + r.failure()?.errorText);
  });

  // ── Event 01 ──────────────────────────────────────────────────────────────
  console.log('\n== event-01/index.html ==');
  await page.goto(BASE + '/event-01/index.html', { waitUntil: 'networkidle' });

  check('h1 rendered', (await page.locator('h1').innerText()).includes('Rise of Social Media'));
  check('spine items on the line', await page.locator('.spine-item').count() === 10,
        'count=' + await page.locator('.spine-item').count());
  check('6 trace cards', await page.locator('.trace-card').count() === 6);
  check('5 evidence items', await page.locator('.evidence-item').count() === 5);
  check('scale panels', await page.locator('[data-scale-panel]').count() === 4);
  check('two scale rails share state', await page.locator('[data-scale-rail]').count() === 2);
  check('only one panel visible',
        await page.locator('[data-scale-panel]:not([hidden])').count() === 1);

  // The spine gradient: first trace card must be warm, last must be cool.
  const nodes = await page.$$eval('.spine-item',
    els => els.map(e => ({ node: e.style.getPropertyValue('--node'), trace: !!e.querySelector('.trace-card') })));
  const traceNodes = nodes.filter(n => n.trace).map(n => n.node);
  check('trace starts at Signal Orange', traceNodes[0] === 'rgb(255,106,19)', traceNodes[0]);
  check('trace ends at dim gunmetal', traceNodes[traceNodes.length - 1] === 'rgb(35,44,51)',
        traceNodes[traceNodes.length - 1]);
  check('gradient cools monotonically off the orange',
        traceNodes.every((c, i) => i === 0 ||
          parseInt(c.match(/\d+/)[0]) < parseInt(traceNodes[i - 1].match(/\d+/)[0])));

  // Local -> Global rail actually switches
  await page.locator('.spine .rail-btn[data-scale="world"]').click();
  check('rail switches panel',
        await page.locator('[data-scale-panel="world"]').isVisible());
  check('locator highlights the scale',
        await page.locator('[data-scale-locator]').getAttribute('data-scale') === 'world');
  check('both rails stay in sync',
        await page.locator('.rail-btn[data-scale="world"][aria-selected="true"]').count() === 2);

  // Form hook builds a prefilled URL with the event/step context
  const url = await page.evaluate(() => CE_FORM.prefill({
    event: '01', step: '05', promptId: 'event-01-step-05',
    responseType: 'Your Beat Checkpoint', skillFocus: ['Causation', 'Sourcing']
  }));
  check('prefill carries event', url.includes('entry.125385659=Event+01'));
  check('prefill carries step', url.includes('entry.187055090=05'));
  check('prefill repeats skill checkboxes',
        (url.match(/entry\.1963461515=/g) || []).length === 2);

  // Coach link resolves to MagicSchool
  check('coach link wired',
        (await page.locator('[data-ce-coach]').first().getAttribute('href') || '')
          .includes('magicschool.ai'));

  // No horizontal page scroll at Chromebook width
  const hscroll = await page.evaluate(() =>
    document.documentElement.scrollWidth - document.documentElement.clientWidth);
  check('no horizontal scroll at 1366', hscroll <= 1, 'overflow=' + hscroll + 'px');

  if (OUT) await page.screenshot({ path: OUT + '/event01-top.png' });
  await page.evaluate(() => document.querySelector('#trace').scrollIntoView());
  await page.waitForTimeout(700);
  if (OUT) await page.screenshot({ path: OUT + '/event01-spine.png' });

  // ── Hub ───────────────────────────────────────────────────────────────────
  console.log('\n== index.html ==');
  await page.goto(BASE + '/index.html', { waitUntil: 'networkidle' });
  check('6 event cards', await page.locator('.event-card').count() === 6);
  check('exactly one live, clickable event',
        await page.locator('a.event-card[data-status="live"]').count() === 1);
  check('unbuilt events are not links',
        await page.locator('a.event-card[data-status="soon"]').count() === 0);
  check('every unbuilt event says when it opens',
        await page.locator('.event-card[data-status="soon"] .event-opens').count() === 5);
  check('5 rhythm cards', await page.locator('.rhythm-card').count() === 5);

  // Every image slot must resolve AND have real intrinsic size. A viewBox-only
  // SVG reports naturalWidth 0 and gets stretched by its container.
  const art = await page.$$eval('img.art', els => els.map(e => ({
    src: e.getAttribute('src'), w: e.naturalWidth, h: e.naturalHeight })));
  check('every art slot filled', art.length === 6, art.length + ' slots');
  check('all art has intrinsic size', art.every(a => a.w > 0 && a.h > 0));

  // THE FOLD. The council measured the magazine hub pushing the event cards to
  // y=1087 on a 1366x768 Chromebook. They must now clear the fold.
  const fold = await page.evaluate(() => {
    const c = document.querySelector('.event-card');
    return { cardTop: Math.round(c.getBoundingClientRect().top + window.scrollY),
             vh: window.innerHeight };
  });
  check('event cards start above the fold', fold.cardTop < fold.vh,
        'cardTop=' + fold.cardTop + ' vh=' + fold.vh);

  // Trace chips run the spine ramp and each picks a readable foreground.
  const chips = await page.$$eval('.trace-preview .trace-chip', els => els.map(e => ({
    bg: e.style.getPropertyValue('--chip'), fg: e.style.color })));
  check('chips run hot to dim', chips[0].bg === 'rgb(255,106,19)' &&
        chips[chips.length - 1].bg === 'rgb(35,44,51)',
        chips[0].bg + ' -> ' + chips[chips.length - 1].bg);
  check('chips are outlined, text stays ink',
        new Set(chips.map(c => c.fg)).size === 1, chips.map(c => c.fg).join(' | '));

  // Both hand-authored ramps must start at --signal and land on --archive.
  // These are inline styles, so a theme change does not update them and they
  // silently rot. That is exactly what happened once already.
  const ramps = await page.evaluate(() => {
    const g = (sel, prop) => Array.from(document.querySelectorAll(sel))
      .map(e => e.style.getPropertyValue(prop).trim().toUpperCase());
    return { rung: g('.ladder li', '--rung'),
             step: g('.rhythm-card', '--step'),
             ink:  g('.rhythm-card', '--step-ink') };
  });
  const endsWell = a => a.length > 1 && a[0] === '#FF6A13' && a[a.length-1] === '#232C33';
  check('ladder ramp runs signal to archive', endsWell(ramps.rung), ramps.rung.join(' '));
  check('rhythm fill ramp runs signal to archive', endsWell(ramps.step), ramps.step.join(' '));
  check('every rhythm card carries its own --step-ink',
        ramps.ink.length === ramps.step.length && new Set(ramps.ink).size === ramps.ink.length,
        ramps.ink.join(' '));

  const h2 = await page.evaluate(() =>
    document.documentElement.scrollWidth - document.documentElement.clientWidth);
  check('no horizontal scroll at 1366', h2 <= 1, 'overflow=' + h2 + 'px');
  if (OUT) await page.screenshot({ path: OUT + '/hub-top.png' });

  // ── Contrast (the token comments claim these ratios, so verify them) ──────
  console.log('\n== contrast ==');
  const ratios = await page.evaluate(() => {
    const t = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
    const lin = c => { c /= 255; return c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4); };
    const L = hex => { const h = hex.replace('#',''); const n = parseInt(h,16);
      return 0.2126*lin((n>>16)&255) + 0.7152*lin((n>>8)&255) + 0.0722*lin(n&255); };
    const cr = (a,b) => { const x=L(a), y=L(b); return ((Math.max(x,y)+0.05)/(Math.min(x,y)+0.05)); };
    return {
      inkOnPaper:        cr(t('--ink'),        t('--paper')),
      steelOnPaper:      cr(t('--steel'),      t('--paper')),
      steelOnBand:       cr(t('--steel'),      t('--paper-2')),
      signalInkOnPaper:  cr(t('--signal-ink'), t('--paper')),
      signalInkOnSurface:cr(t('--signal-ink'), t('--surface')),
      inkOnSignalFill:   cr(t('--ink'),        t('--signal'))
    };
  });
  Object.entries(ratios).forEach(([k,v]) =>
    check('AA ' + k, v >= 4.5, v.toFixed(2) + ':1'));

  // THE ORANGE RULE: --signal is 2.6:1 on paper, so it must never be the colour
  // of a run of text. Sweep every rendered element and prove it.
  const orangeText = await page.evaluate(() => {
    const parse = c => (c.match(/[\d.]+/g) || []).map(Number);
    const lin = c => { c /= 255; return c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4); };
    const lum = ([r,g,b]) => 0.2126*lin(r) + 0.7152*lin(g) + 0.0722*lin(b);
    const cr = (a,b) => { const x=lum(a), y=lum(b); return (Math.max(x,y)+0.05)/(Math.min(x,y)+0.05); };
    // Walk up until something actually paints a background.
    // Composite semi-transparent backgrounds over what is behind them, or a
    // 12%-white chip over dark ink reads as near-white and false-alarms.
    const bgOf = el => {
      let acc = null;
      for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
        const c = parse(getComputedStyle(n).backgroundColor);
        if (!c.length) continue;
        const a = c.length === 4 ? c[3] : 1;
        if (a === 0) continue;
        const rgb = c.slice(0,3);
        acc = acc === null ? { rgb, a } :
          { rgb: acc.rgb.map((v,i) => v * acc.a + rgb[i] * (1 - acc.a)), a: 1 };
        if (acc.a === 1) return acc.rgb;
        if (a === 1) return acc.rgb.map((v,i) => v * acc.a + rgb[i] * (1 - acc.a));
      }
      const base = [244,242,236];
      return acc ? acc.rgb.map((v,i) => v * acc.a + base[i] * (1 - acc.a)) : base;
    };
    const bad = [];
    document.querySelectorAll('*').forEach(el => {
      const txt = Array.from(el.childNodes)
        .filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join('');
      if (!txt) return;
      const fg = parse(getComputedStyle(el).color).slice(0,3);
      const ratio = cr(fg, bgOf(el));
      if (ratio < 4.5) bad.push((el.className || el.tagName) + ' ' +
        ratio.toFixed(2) + ':1 :: ' + txt.slice(0, 24));
    });
    return bad;
  });
  check('every text run on the page clears AA', orangeText.length === 0,
        orangeText.join(' | ') || 'clean');

  // Texture is part of the design, so assert it actually renders.
  const tex = await page.evaluate(() => ({
    grain: getComputedStyle(document.body).backgroundImage.includes('svg'),
    band: !!document.querySelector('.section-paper') &&
      getComputedStyle(document.querySelector('.section-paper'))
        .backgroundImage.includes('gradient')
  }));
  check('page grain renders', tex.grain);
  check('laid texture on bands', tex.band);

  // ── Mobile ────────────────────────────────────────────────────────────────
  console.log('\n== mobile 390x844 ==');
  const m = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const mp = await m.newPage();
  mp.on('pageerror', e => errors.push('mobile pageerror: ' + e.message));
  for (const p of ['/index.html', '/event-01/index.html', '/your-beat/index.html',
                   '/culture/index.html', '/teacher/index.html']) {
    await mp.goto(BASE + p, { waitUntil: 'networkidle' });
    const o = await mp.evaluate(() =>
      document.documentElement.scrollWidth - document.documentElement.clientWidth);
    check('no h-scroll ' + p, o <= 1, 'overflow=' + o + 'px');
  }
  await mp.goto(BASE + '/event-01/index.html', { waitUntil: 'networkidle' });
  if (OUT) await mp.screenshot({ path: OUT + '/event01-mobile.png' });

  // ── Reduced motion ────────────────────────────────────────────────────────
  console.log('\n== prefers-reduced-motion ==');
  const rm = await browser.newContext({ viewport: { width: 1366, height: 768 },
                                        reducedMotion: 'reduce' });
  const rp = await rm.newPage();
  rp.on('pageerror', e => errors.push('rm pageerror: ' + e.message));
  await rp.goto(BASE + '/event-01/index.html', { waitUntil: 'networkidle' });
  check('reveals not hidden under reduced motion',
        await rp.locator('#trace').isVisible());
  check('ticker pause control hidden when no crawl',
        await rp.locator('.ticker-pause').isHidden());
  check('spine still painted', (await rp.locator('.trace-card').count()) === 6);

  // ── Keyboard focus ────────────────────────────────────────────────────────
  console.log('\n== keyboard ==');
  await page.goto(BASE + '/event-01/index.html', { waitUntil: 'networkidle' });
  await page.keyboard.press('Tab');
  const first = await page.evaluate(() => document.activeElement.className);
  check('first tab stop is the skip link', first.includes('skip-link'), first);
  const outline = await page.evaluate(() =>
    getComputedStyle(document.activeElement).outlineWidth);
  check('focus ring visible', outline !== '0px', 'outline=' + outline);

  // ── Link integrity ────────────────────────────────────────────────────────
  console.log('\n== internal links ==');
  const pages = ['/index.html', '/event-01/index.html', '/your-beat/index.html',
                 '/culture/index.html', '/teacher/index.html'];
  const seen = new Set();
  for (const p of pages) {
    await page.goto(BASE + p, { waitUntil: 'networkidle' });
    const hrefs = await page.$$eval('a[href]', as => as.map(a => a.href));
    for (const h of hrefs) {
      if (!h.startsWith(BASE) || h.includes('#') && h.split('#')[0] === BASE + p) continue;
      const clean = h.split('#')[0];
      if (!clean || seen.has(clean)) continue;
      seen.add(clean);
      const r = await page.request.get(clean).catch(() => null);
      check('link ' + clean.replace(BASE, ''), r && r.status() < 400,
            r ? String(r.status()) : 'unreachable');
    }
  }

  console.log('\n== runtime errors ==');
  if (errors.length) { errors.forEach(e => console.log('  ' + e)); failures += errors.length; }
  else console.log('  none');

  await browser.close();
  if (own) own.server.close();
  console.log('\n' + (failures ? 'FAILURES: ' + failures : 'ALL CHECKS PASSED'));
  process.exit(failures ? 1 : 0);
})();
