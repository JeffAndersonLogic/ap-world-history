#!/usr/bin/env node
/**
 * skills-lens.test.js
 *
 * Loads teacher/skills-lens.html in Chromium, feeds it real parser output, and
 * renders all nine panels, asserting each produces content and throws nothing.
 *
 * The Lens replaced a dashboard that showed frozen numbers from a dead
 * spreadsheet for weeks without anyone noticing, so "it loads" is not the bar.
 * Every panel has to actually draw from the CSV it was handed.
 *
 * Panels render one at a time into their own container, so clicking the tab bar
 * is not enough to prove the others work: the body text is identical whichever
 * tab is active. This drives the panel switch directly instead.
 *
 * Fixtures come from scripts/test/fixtures/ if present, otherwise from a
 * scratch run of scripts/parse-canvas-submissions.js. Point SUBS at any folder
 * holding a responses.csv and an exceptions.csv.
 *
 *   npm i playwright-core
 *   node scripts/test/skills-lens.test.js
 */

'use strict';

const http=require('http'), fs=require('fs'), path=require('path');

let chromium;
try { ({ chromium } = require('playwright-core')); }
catch (e) {
  console.error('This test needs playwright-core. Install it first:\n  npm i playwright-core');
  process.exit(2);
}
const ROOT=path.resolve(__dirname,'..','..');
const SUBS = process.env.SUBS || path.join(__dirname, 'fixtures');
if (!fs.existsSync(path.join(SUBS, 'responses.csv'))) {
  console.error(`No responses.csv in ${SUBS}.\nRun scripts/parse-canvas-submissions.js on a submissions folder, then:\n  SUBS=<that folder> node scripts/test/skills-lens.test.js`);
  process.exit(2);
}
const T={'.html':'text/html','.js':'text/javascript','.css':'text/css','.csv':'text/csv'};
const EXE = process.env.PW_CHROME || (function () {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  const dir = (fs.existsSync(base) ? fs.readdirSync(base) : [])
    .filter(d => /^chromium-\d+$/.test(d)).sort().pop();
  return dir ? path.join(base, dir, 'chrome-linux', 'chrome') : 'chromium';
})();
const srv=http.createServer((q,r)=>{const rel=decodeURIComponent(q.url.split('?')[0]).replace(/^\/+/,'');const f=path.join(ROOT,rel);
  if(!f.startsWith(ROOT)||!fs.existsSync(f)||fs.statSync(f).isDirectory()){r.writeHead(404);r.end();return;}
  r.writeHead(200,{'Content-Type':T[path.extname(f)]||'application/octet-stream'});r.end(fs.readFileSync(f));});
(async()=>{
  await new Promise(r=>srv.listen(0,r)); const port=srv.address().port;
  const b=await chromium.launch({executablePath:EXE,args:['--no-sandbox']});
  const pg=await b.newPage(); const errs=[]; pg.on('pageerror',e=>errs.push(e.message));
  await pg.goto(`http://127.0.0.1:${port}/teacher/skills-lens.html`,{waitUntil:'domcontentloaded'});
  await (await pg.$('input[type="file"]')).setInputFiles([path.join(SUBS,'responses.csv'), path.join(SUBS,'exceptions.csv')]);
  await pg.waitForTimeout(900);

  const panels=['coverage','grid','module','skill','terms','confidence','read','target','export'];
  let bad=0;
  for (const p of panels) {
    const before = errs.length;
    await pg.evaluate(name => { S.active = name; renderActive(); }, p);
    await pg.waitForTimeout(250);
    const info = await pg.evaluate(name => {
      const el = document.getElementById('panel-' + name);
      return { chars: el ? el.innerText.trim().length : -1,
               head: el ? (el.innerText.trim().split('\n')[0]||'').slice(0,54) : 'MISSING',
               svg: el ? el.querySelectorAll('svg').length : 0 };
    }, p);
    const err = errs.length > before;
    const ok = info.chars > 120 && !err;
    if (!ok) bad++;
    console.log(`  ${ok?'PASS':'FAIL'}  ${p.padEnd(11)} ${String(info.chars).padStart(6)} chars, ${info.svg} charts  "${info.head}"${err?'  ERR '+errs[errs.length-1].slice(0,50):''}`);
  }
  console.log(`\n  ${panels.length-bad}/${panels.length} panels render, ${errs.length} page errors`);
  await b.close(); srv.close();
  process.exit(bad||errs.length?1:0);
})().catch(e=>{console.error('THREW:',e.message);process.exit(1);});
