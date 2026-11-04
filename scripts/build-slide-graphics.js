#!/usr/bin/env node
'use strict';
// Finished slide graphics: a picture that carries its own title, labels and
// key, shown whole by the frame-full template (see "Slide templates" in
// docs/TEACHING-OS.md). Each source is one HTML page in
// scripts/lib/slide-graphics/ on a 1600x900 board, with
//   <meta name="bh-output" content="assets/images/topics/X-Y/name.png">
// naming where its PNG goes. The PNG is rendered at 2.4x, 3840x2160, the size
// of Topic 4.3's exchange map, so it stays sharp on any projector.
//
// The source is the thing to edit. Never retouch a PNG this writes: change the
// HTML and rerun. A slide's alt text must say everything its picture says, so
// a wording change here is also a change to that slide's `alt` in the topic's
// teaching base.
//
// It refuses to write a PNG, rather than writing a wrong one, when:
//   - any of the three brand faces (Cinzel, Libre Baskerville, Montserrat)
//     did not load, because the page would still render, in Georgia and Arial,
//     and look broadly right;
//   - any text box overflows its region of the board, or the board itself has
//     grown past 1600x900.
// `--selftest` proves both refusals can fire: it renders the first source once
// with the font host blocked and once with a paragraph made too long, and fails
// unless each is refused.
//
// Needs playwright to render and the network to reach Google Fonts, so it is
// not in any suite; it exits 2 when playwright is absent.
//
//   node scripts/build-slide-graphics.js               write every PNG
//   node scripts/build-slide-graphics.js topic-4-5     only sources whose name contains this
//   node scripts/build-slide-graphics.js --selftest    prove the refusals can fail
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(__dirname, 'lib', 'slide-graphics');
const FACES = ['Cinzel', 'Libre Baskerville', 'Montserrat'];
const W = 1600, H = 900, SCALE = 2.4;

function sources(filter) {
  return fs.readdirSync(SRC).filter(f => f.endsWith('.html') && (!filter || f.includes(filter))).sort().map(f => {
    const html = fs.readFileSync(path.join(SRC, f), 'utf8');
    const m = html.match(/<meta name="bh-output" content="([^"]+)">/);
    if (!m) throw new Error(`${f}: no <meta name="bh-output"> naming its PNG`);
    if (!/^assets\/images\/topics\/\d-\d\/[a-z0-9-]+\.png$/.test(m[1])) throw new Error(`${f}: bh-output must be assets/images/topics/X-Y/lowercase-name.png, got ${m[1]}`);
    return { file: f, out: m[1] };
  });
}

// Returns a list of problems; empty means the board is safe to write.
async function inspect(page) {
  return page.evaluate(async (faces) => {
    await document.fonts.ready;
    const problems = [];
    const loaded = new Set([...document.fonts].filter(f => f.status === 'loaded').map(f => f.family.replace(/["']/g, '')));
    for (const face of faces) if (!loaded.has(face)) problems.push(`the ${face} font did not load`);
    const board = document.querySelector('.board');
    if (!board) return problems.concat('no .board element');
    if (board.scrollWidth > board.clientWidth + 1 || board.scrollHeight > board.clientHeight + 1) problems.push(`the board overflows (${board.scrollWidth}x${board.scrollHeight})`);
    for (const region of board.children) {
      const r = region.getBoundingClientRect();
      if (region.scrollHeight > region.clientHeight + 1) problems.push(`.${region.className} overflows its region`);
      for (const el of region.querySelectorAll('p, h1, .chip, .tag, .k, .eyebrow')) {
        const b = el.getBoundingClientRect();
        if (b.bottom > r.bottom + 1 || b.right > r.right + 1) problems.push(`"${el.textContent.trim().slice(0, 40)}" runs out of .${region.className}`);
      }
      for (const el of region.querySelectorAll('.cards')) {
        if (el.scrollHeight > el.clientHeight + 1) problems.push('the cards column overflows');
      }
    }
    for (const t of board.querySelectorAll('svg text')) {
      const svg = t.ownerSVGElement.getBoundingClientRect(), b = t.getBoundingClientRect();
      if (b.left < svg.left - 1 || b.right > svg.right + 1 || b.top < svg.top - 1 || b.bottom > svg.bottom + 1) problems.push(`diagram label "${t.textContent.slice(0, 30)}" leaves its diagram`);
    }
    return problems;
  }, FACES);
}

async function render(browser, src, opts = {}) {
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: SCALE });
  try {
    if (opts.blockFonts) await page.route(/fonts\.(googleapis|gstatic)\.com/, r => r.abort());
    await page.goto(pathToFileURL(path.join(SRC, src.file)).href, { waitUntil: 'networkidle' });
    if (opts.mutate) await page.evaluate(opts.mutate);
    const problems = await inspect(page);
    if (!problems.length && !opts.dryRun) {
      const out = path.join(ROOT, src.out);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      await page.locator('.board').screenshot({ path: out });
    }
    return problems;
  } finally { await page.close(); }
}

async function main() {
  const args = process.argv.slice(2);
  const selftest = args.includes('--selftest');
  const filter = args.find(a => !a.startsWith('--'));
  let chromium;
  try { ({ chromium } = require('playwright')); } catch (e) {
    try { ({ chromium } = require('playwright-core')); } catch (e2) {
      console.error('SKIP playwright is not installed, so the graphics cannot be rendered.');
      process.exit(2);
    }
  }
  const list = sources(filter);
  if (!list.length) { console.error('no slide graphic sources matched'); process.exit(1); }
  const browser = await chromium.launch();
  let failed = 0;
  try {
    if (selftest) {
      const src = list[0];
      const clean = await render(browser, src, { dryRun: true });
      const noFonts = await render(browser, src, { dryRun: true, blockFonts: true });
      const tooLong = await render(browser, src, { dryRun: true, mutate: () => { const p = document.querySelector('.card p'); p.textContent = p.textContent.repeat(8); } });
      const checks = [
        ['the real source renders clean', clean.length === 0, clean],
        ['blocking the font host is refused', noFonts.some(p => /font did not load/.test(p)), noFonts],
        ['an overlong card is refused', tooLong.some(p => /overflow|runs out/.test(p)), tooLong],
      ];
      for (const [name, ok, detail] of checks) {
        console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${ok ? '' : `: ${detail.join('; ') || 'nothing reported'}`}`);
        if (!ok) failed++;
      }
    } else {
      for (const src of list) {
        const problems = await render(browser, src);
        if (problems.length) { failed++; console.error(`REFUSED ${src.file}:\n  - ${problems.join('\n  - ')}`); }
        else console.log(`wrote ${src.out}`);
      }
    }
  } finally { await browser.close(); }
  process.exit(failed ? 1 : 0);
}

main().catch(e => { console.error(e); process.exit(1); });
