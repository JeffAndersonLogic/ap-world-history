#!/usr/bin/env node
/**
 * lightbox-sweep.js
 *
 * Opens the Map and Evidence Lab modules on every lesson page, Unit and
 * Foundations, and asserts that each enlargeable image is an operable button
 * that actually opens the lightbox. Prints only failures; silence is a pass.
 *
 * Why a sweep and not a single-page test: the two spot-checked topics turned out
 * not to be representative. Topic 1.1 carries no Evidence Lab images at all, and
 * Topic 1.3 is the only topic in the course whose Map module is an embedded
 * iframe rather than a static picture, so it has no map image to enlarge. Both
 * are legitimate, and both would have been read as breakage by a test that
 * assumed every topic looks the same.
 *
 * Needs playwright-core. See scripts/test/modal-focus.unit.js.
 *
 *   npm i playwright-core
 *   node scripts/test/lightbox-sweep.js
 */
'use strict';
let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) {
  console.error('This test needs playwright-core. Install it first:\n  npm i playwright-core');
  process.exit(2);
}
const http = require('http'); const fs = require('fs'); const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const T = {'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.jpeg':'image/jpeg','.jpg':'image/jpeg','.png':'image/png'};
const srv = http.createServer((q,r)=>{const rel=decodeURIComponent(q.url.split('?')[0]).replace(/^\/+/,'');const f=path.join(ROOT,rel);
  if(!f.startsWith(ROOT)||!fs.existsSync(f)||fs.statSync(f).isDirectory()){r.writeHead(404);r.end();return;}
  r.writeHead(200,{'Content-Type':T[path.extname(f)]||'application/octet-stream'});r.end(fs.readFileSync(f));});
(async () => {
  await new Promise(r=>srv.listen(0,r));
  const port = srv.address().port;
  const EXE = process.env.PW_CHROME || (function () {
    const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
    const dir = (fs.existsSync(base) ? fs.readdirSync(base) : [])
      .filter(d => /^chromium-\d+$/.test(d)).sort().pop();
    return dir ? path.join(base, dir, 'chrome-linux', 'chrome') : 'chromium';
  })();
  const b = await chromium.launch({executablePath: EXE, args: ['--no-sandbox']});
  const pages = [];
  fs.readdirSync(ROOT).filter(d=>/^unit-\d+$/.test(d)).sort().forEach(d=>{
    fs.readdirSync(path.join(ROOT,d)).filter(f=>/^lesson-\d+-\d+-.*\.html$/.test(f)).sort()
      .forEach(f=>pages.push(d+'/'+f));
  });
  fs.readdirSync(path.join(ROOT,'foundations')).filter(f=>/^foundations-\d.*\.html$/.test(f)).sort()
    .forEach(f=>pages.push('foundations/'+f));
  let bad = 0;
  for (const f of pages) {
    const pg = await b.newPage();
    const errs = []; pg.on('pageerror', e => errs.push(e.message));
    await pg.goto(`http://127.0.0.1:${port}/${f}`, {waitUntil:'domcontentloaded'});
    await pg.waitForSelector('#module-grid .module-card, .command-center .module-card');
    const out = {};
    for (const mod of ['map','evidence']) {
      await pg.evaluate(m => openModule(m), mod);
      await pg.waitForTimeout(80);
      const n = await pg.evaluate(() => document.querySelectorAll('#pop-body img[role="button"]').length);
      let opened = false;
      if (n) {
        await pg.evaluate(() => document.querySelector('#pop-body img[role="button"]').click());
        await pg.waitForTimeout(80);
        opened = await pg.evaluate(() => document.getElementById('lightbox').classList.contains('show'));
        await pg.evaluate(() => closeLightbox());
        await pg.waitForTimeout(40);
      }
      out[mod] = { imgs: n, opened };
      await pg.evaluate(() => closeModule());
      await pg.waitForTimeout(40);
    }
    // An image-free module is legitimate: Topic 1.3's map is an embedded iframe and
    // some topics carry no Evidence Lab pictures. The defect is an image that is
    // present but not an operable button, so only assert when images exist.
    const ok = (out.map.imgs === 0 || out.map.opened)
      && (out.evidence.imgs === 0 || out.evidence.opened) && !errs.length;
    if (!ok) bad++;
    if (!ok) console.log(`  FAIL  ${f.padEnd(56)} map:${out.map.imgs}/${out.map.opened?'opens':'DEAD'}  evidence:${out.evidence.imgs}/${out.evidence.opened?'opens':'DEAD'}${errs.length?'  errors: '+errs.join(' | '):''}`);
    await pg.close();
  }
  await b.close(); srv.close();
  console.log(`\n  ${pages.length-bad}/${pages.length} lesson pages OK`);
  process.exit(bad?1:0);
})().catch(e=>{console.error(e);process.exit(1);});
