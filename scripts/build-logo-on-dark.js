#!/usr/bin/env node
'use strict';
// Light-lettered BeHistorical marks for dark surfaces, made from the supplied
// artwork: the wordmark every dark header uses, and the full "AP World
// History" lockup on the classroom board.
//
// The lettering is the supplied artwork with its lightness flipped, so the
// letterforms never change. The bronze globe is the original pixels,
// untouched, with a fine ivory rim and a soft warm glow behind it. GLOW names
// the strength in use (Jeff chose soft, 2026-10-30).
//
// Writes behistorical-wordmark-on-dark.png and behistorical-ap-world-on-dark.png.
// Run node scripts/build-wordmark.js afterwards so the Canvas light alias
// follows. Needs playwright to rasterise, so it is not in any suite; it exits 2
// when playwright is absent.
//
//   node scripts/build-logo-on-dark.js            write both PNGs
//   node scripts/build-logo-on-dark.js --glow=X   try another strength
const fs = require('fs');
const path = require('path');

const LOGOS = path.join(__dirname, '..', 'assets', 'logos');
// Where the globe sits in each supplied image, in that image's pixels.
const MARKS = [
  { file: 'behistorical-wordmark.png', out: 'behistorical-wordmark-on-dark', title: 'BeHistorical, light wordmark for dark backgrounds', w: 1428, h: 220, cx: 795, cy: 131.5, r: 69.25 },
  { file: 'behistorical-ap-world.png', out: 'behistorical-ap-world-on-dark', title: 'BeHistorical, AP World History, light lockup for dark backgrounds', w: 1636, h: 305, cx: 911.5, cy: 152, r: 78.5 },
];

// glow is the opacity of the light behind the globe, spread its size and blur
// its softness, both as a share of the globe's radius.
const PRESETS = {
  none: { rim: 0, glow: 0 },
  soft: { rim: 0.45, glow: 0.45, spread: 1.02, blur: 0.17 },
  medium: { rim: 0.4, glow: 0.65, spread: 1.08, blur: 0.24 },
  strong: { rim: 0.35, glow: 0.85, spread: 1.15, blur: 0.34 },
};
const GLOW = 'soft';

function buildSvg(a, p) {
  const art = fs.readFileSync(path.join(LOGOS, a.file)).toString('base64');
  const s = a.r / 69.25; // the rim was tuned on the 1428px wordmark's globe
  const glow = p.glow
    ? `<circle cx="${a.cx}" cy="${a.cy}" r="${(a.r * p.spread).toFixed(2)}" fill="#f2d9a6" opacity="${p.glow}" filter="url(#glow)"/>\n`
    : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${a.w}" height="${a.h}" viewBox="0 0 ${a.w} ${a.h}">
<title>${a.title}</title>
<defs>
<image id="art" width="${a.w}" height="${a.h}" xlink:href="data:image/png;base64,${art}"/>
<filter id="light" color-interpolation-filters="sRGB">
<feColorMatrix type="matrix" values="-1 0 0 0 1 0 -1 0 0 1 0 0 -1 0 1 0 0 0 1 0"/>
<feColorMatrix type="hueRotate" values="180"/>
<feComponentTransfer><feFuncR type="linear" slope="1.08" intercept="0.01"/><feFuncG type="linear" slope="1.06" intercept="0.005"/><feFuncB type="linear" slope="1.015"/></feComponentTransfer>
</filter>
<clipPath id="globe"><circle cx="${a.cx}" cy="${a.cy}" r="${a.r}"/></clipPath>
<mask id="letters" maskUnits="userSpaceOnUse" x="0" y="0" width="${a.w}" height="${a.h}"><rect width="${a.w}" height="${a.h}" fill="white"/><circle cx="${a.cx}" cy="${a.cy}" r="${a.r}" fill="black"/></mask>
<filter id="glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="${(a.r * (p.blur || 0)).toFixed(2)}"/></filter>
<filter id="rim" x="-10%" y="-10%" width="120%" height="120%" color-interpolation-filters="sRGB">
<feMorphology in="SourceAlpha" operator="dilate" radius="${(0.85 * s).toFixed(2)}" result="expanded"/>
<feComposite in="expanded" in2="SourceAlpha" operator="out" result="edge"/>
<feFlood flood-color="#f5f0e7" flood-opacity="${p.rim}" result="ivory"/>
<feComposite in="ivory" in2="edge" operator="in" result="border"/>
<feMerge><feMergeNode in="border"/><feMergeNode in="SourceGraphic"/></feMerge>
</filter>
</defs>
${glow}<use xlink:href="#art" filter="url(#light)" mask="url(#letters)"/>
<g filter="url(#rim)"><g clip-path="url(#globe)"><use xlink:href="#art"/></g></g>
</svg>
`;
}

async function main() {
  const arg = process.argv.find((x) => x.startsWith('--glow='));
  const name = arg ? arg.slice(7) : GLOW;
  if (!PRESETS[name]) {
    console.error('Unknown glow "' + name + '". Choose one of: ' + Object.keys(PRESETS).join(', '));
    process.exit(1);
  }
  let chromium;
  try {
    ({ chromium } = require('playwright'));
  } catch (e) {
    try { ({ chromium } = require('playwright-core')); } catch (e2) {
      console.error('SKIP playwright is not installed, so the PNG cannot be rendered.');
      process.exit(2);
    }
  }
  const browser = await chromium.launch();
  const page = await browser.newPage();
  for (const mark of MARKS) {
    const svg = buildSvg(mark, PRESETS[name]);
    await page.setViewportSize({ width: mark.w, height: mark.h });
    await page.setContent('<html><body style="margin:0;background:transparent">' + svg + '</body></html>');
    await page.locator('svg').screenshot({ path: path.join(LOGOS, mark.out + '.png'), omitBackground: true });
    console.log('WROTE ' + mark.out + '.png (glow: ' + name + ')');
  }
  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
