#!/usr/bin/env node
'use strict';
/* =========================================================
   RENDER THE BEHISTORICAL WORDMARK TO PNG

     node scripts/build-wordmark.js
     node scripts/build-wordmark.js --check

   Writes assets/logos/behistorical-wordmark-light.png and
   -dark.png from the same markup and the same stylesheet the
   site draws the wordmark with.

   ---------------------------------------------------------
   WHY AN IMAGE EXISTS AT ALL

   On the site the wordmark is live HTML: Cinzel text with the
   globe O built from CSS gradients and a ::before pseudo-element
   in assets/css/behistorical-brand-lock.css. That is the right
   way to do it there and it cannot survive Canvas, which strips
   <style> blocks, cannot express a pseudo-element inline, and
   will not load a webfont. Typed into a Canvas event, the
   wordmark falls back to Georgia with a literal letter o.

   So Canvas gets a picture. The picture is rendered FROM the
   brand-lock stylesheet rather than drawn by hand, which is the
   whole point: edit the lock, rerun this, and the image follows.
   A hand-made PNG is a second copy of the brand that silently
   stops matching the site the first time the lock changes.

   ---------------------------------------------------------
   THE FONT IS FETCHED, NOT ASSUMED

   Cinzel is not in this repo and headless Chromium has no
   webfonts, so the face is downloaded once and embedded as a
   data URI before rendering. A run that cannot reach the font
   host FAILS rather than quietly rendering Georgia: a wordmark
   in the wrong face is worse than no new file, because it looks
   deliberate. The check is metric, not document.fonts.check(),
   which answers "can this string be rendered in that family"
   and says yes for a fallback.
   ========================================================= */

const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.resolve(__dirname, '..');
const LOCK = path.join(ROOT, 'assets', 'css', 'behistorical-brand-lock.css');
const OUT_DIR = path.join(ROOT, 'assets', 'logos');

// Pinned. A floating Google Fonts CSS lookup would change the file whenever
// they reship the face, which turns --check into a coin flip.
const FONT_URL = 'https://fonts.gstatic.com/s/cinzel/v26/' +
  '8vIU7ww63mVu7gtR-kwKxNvkNOjw-n_gTYo.ttf';

const VARIANTS = [
  { name: 'light', color: '#F5F0E7' },   // on steel, the Canvas masthead
  { name: 'dark',  color: '#151718' }    // on paper, for any light surface
];

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(get(res.headers.location));
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      const chunks = [];
      res.on('data', (c) => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

function renderPage(fontB64) {
  const lock = fs.readFileSync(LOCK, 'utf8');
  return '<!doctype html><meta charset="utf-8"><style>' +
    '@font-face{font-family:Cinzel;font-weight:900;font-style:normal;' +
    `src:url(data:font/ttf;base64,${fontB64}) format("truetype")}` +
    'html,body{margin:0;padding:0;background:transparent}' +
    '#stage{display:inline-block;padding:2px 4px}' +
    '.logo-title{font-family:Cinzel,Georgia,serif;font-weight:900;font-size:64px;' +
    'line-height:.92;letter-spacing:-.055em;white-space:nowrap;display:flex;align-items:center}' +
    '.logo-title .hero-h{display:inline-block;font-size:1.15em;line-height:.78;' +
    'margin:0 -.015em 0 .005em;letter-spacing:-.055em;transform:translateY(.015em)}' +
    lock +
    '</style><div id="stage"><div class="logo-title" id="w">' +
    'Be<span class="hero-h">H</span>ist<span class="globe-o">o</span>rical</div></div>';
}

async function main() {
  const check = process.argv.includes('--check');

  let chromium;
  try {
    chromium = require('playwright-core').chromium;
  } catch (err) {
    console.log('SKIP  playwright-core is not installed. npm i playwright-core');
    process.exit(2);   // 2 means skipped, not passed
  }

  const font = (await get(FONT_URL)).toString('base64');
  const html = renderPage(font);

  const exe = process.env.PW_CHROME || '/opt/pw-browsers/chromium';
  const browser = await chromium.launch({ executablePath: exe });
  const results = [];

  for (const v of VARIANTS) {
    const page = await browser.newPage({ viewport: { width: 1600, height: 400 }, deviceScaleFactor: 3 });
    await page.setContent(html);
    await page.evaluate((c) => { document.getElementById('w').style.color = c; }, v.color);
    await page.waitForTimeout(400);

    // Metric proof the real face applied. Identical widths mean Georgia.
    const w = await page.evaluate(() => {
      const el = document.getElementById('w');
      const a = el.getBoundingClientRect().width;
      el.style.fontFamily = 'Georgia,serif';
      const b = el.getBoundingClientRect().width;
      el.style.fontFamily = 'Cinzel,Georgia,serif';
      return { cinzel: Math.round(a), fallback: Math.round(b) };
    });
    if (w.cinzel === w.fallback) {
      await browser.close();
      console.error('FAIL  Cinzel did not apply; the render would be Georgia. Nothing written.');
      process.exit(1);
    }

    const buf = await (await page.$('#stage')).screenshot({ omitBackground: true });
    results.push({ file: path.join(OUT_DIR, `behistorical-wordmark-${v.name}.png`), buf, name: v.name, w });
    await page.close();
  }
  await browser.close();

  if (check) {
    let drifted = false;
    for (const r of results) {
      const current = fs.existsSync(r.file) ? fs.readFileSync(r.file) : null;
      if (!current || !current.equals(r.buf)) {
        console.error(`FAIL  ${path.relative(ROOT, r.file)} is out of date.`);
        drifted = true;
      }
    }
    if (drifted) {
      console.error('      Run: node scripts/build-wordmark.js');
      process.exit(1);
    }
    console.log('OK  both wordmarks match the brand-lock stylesheet.');
    return;
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  for (const r of results) {
    fs.writeFileSync(r.file, r.buf);
    console.log(`Wrote ${path.relative(ROOT, r.file)} (${(r.buf.length / 1024).toFixed(0)} KB, ` +
      `Cinzel ${r.w.cinzel}px vs fallback ${r.w.fallback}px)`);
  }
}

main().catch((err) => {
  console.error(`build-wordmark: ${err.message}`);
  process.exit(1);
});
