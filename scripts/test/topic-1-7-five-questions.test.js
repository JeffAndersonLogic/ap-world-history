#!/usr/bin/env node
/**
 * topic-1-7-five-questions.test.js
 *
 * Topic 1.7 is the only topic in the course whose First & 10 asks five questions
 * instead of three. WORK_ITEMS declares three, because that is what every other
 * topic asks, so before this was handled the fourth and fifth answers exported
 * with the fallback label "First10 q4" and the manifest reported eleven
 * responses against a denominator of nine, which reads as over-complete.
 *
 * The reading is the authority on how many questions it asks, and the renderer
 * now follows it. This test is the guard on that: a topic-shaped assumption
 * baked back into the capture table would silently mislabel real student work.
 *
 *   npm i playwright-core
 *   node scripts/test/topic-1-7-five-questions.test.js
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
const T={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.jpeg':'image/jpeg','.jpg':'image/jpeg','.png':'image/png'};
const EXE = process.env.PW_CHROME || (function () {
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  const dir = (fs.existsSync(base) ? fs.readdirSync(base) : [])
    .filter(d => /^chromium-\d+$/.test(d)).sort().pop();
  return dir ? path.join(base, dir, 'chrome-linux', 'chrome') : 'chromium';
})();
const srv=http.createServer((q,r)=>{const rel=decodeURIComponent(q.url.split('?')[0]).replace(/^\/+/,'');const f=path.join(ROOT,rel);
  if(!f.startsWith(ROOT)||!fs.existsSync(f)||fs.statSync(f).isDirectory()){r.writeHead(404);r.end();return;}
  r.writeHead(200,{'Content-Type':T[path.extname(f)]||'application/octet-stream'});r.end(fs.readFileSync(f));});
const out=[]; const check=(n,p,d)=>{out.push(p);console.log(`  ${p?'PASS':'FAIL'}  ${n}${d?'  ('+d+')':''}`);};
(async()=>{
  await new Promise(r=>srv.listen(0,r)); const port=srv.address().port;
  const b=await chromium.launch({executablePath:EXE,args:['--no-sandbox']});
  const pg=await b.newPage(); const errs=[]; pg.on('pageerror',e=>errs.push(e.message));
  await pg.route('**/*', r => r.request().url().startsWith(`http://127.0.0.1:${port}/`) ? r.continue() : r.abort());
  await pg.goto(`http://127.0.0.1:${port}/unit-1/lesson-1-7-comparison.html`,{waitUntil:'domcontentloaded'});
  await pg.waitForSelector('#module-grid .module-card');

  check('expected is 9 before the reading is opened',
    await pg.evaluate(()=>expectedCaptureCount()===9), 'got '+await pg.evaluate(()=>expectedCaptureCount()));

  await pg.evaluate(()=>openModule('first10'));
  await pg.waitForSelector('#pop-body iframe');
  const wrap=await (await pg.$('#pop-body iframe')).contentFrame();
  await wrap.waitForSelector('#first10-frame',{timeout:20000});
  const fr=await (await wrap.$('#first10-frame')).contentFrame();
  await fr.waitForSelector('[id^="bh-conf-row-"]',{timeout:20000});

  check('the reading asks five questions',
    await fr.evaluate(()=>document.querySelectorAll('.q-textarea,.qta').length===5),
    await fr.evaluate(()=>document.querySelectorAll('.q-textarea,.qta').length)+' boxes');
  check('five confidence rows, one per question',
    await fr.evaluate(()=>document.querySelectorAll('[id^="bh-conf-row-"]').length===5));

  // Answer all five, rate the fifth.
  await fr.evaluate(()=>{
    document.querySelectorAll('.q-textarea,.qta').forEach((t,i)=>{
      t.value='Answer number '+(i+1)+' about cross-cultural exchange.';
      t.dispatchEvent(new Event('input',{bubbles:true}));
    });
    const r=document.querySelector('input[name="bh-conf-4"][value="2"]');
    r.checked=true; r.dispatchEvent(new Event('change',{bubbles:true}));
  });
  await pg.waitForTimeout(800);
  await pg.evaluate(()=>closeModule());

  check('expected follows the reading to 11',
    await pg.evaluate(()=>expectedCaptureCount()===11), 'got '+await pg.evaluate(()=>expectedCaptureCount()));

  const doc=await pg.evaluate(()=>{const d=gatherAllWork();return d?d.plain:'';});
  // Only the five reading questions were answered, so five gathered against a
  // denominator of eleven is the correct, honest number. Before this fix the
  // denominator was nine, which would have read as over-complete.
  check('manifest denominator is 11, and items reports only what was answered',
    /#BHV\|[^#]*\|items=5\|expected=11\|/.test(doc),
    (doc.match(/items=\d+\|expected=\d+/)||['none'])[0]);
  check('question 4 gets a canonical label, not "First10 q4"',
    /#BHR\|i=02\|slot=first10-q4\|lab=Module 02, First & 10, Question 4\|/.test(doc),
    (doc.match(/#BHR\|i=02\|slot=first10-q4\|lab=[^|]*/)||['not found'])[0].slice(0,58));
  check('question 5 carries its confidence',
    /#BHR\|i=02\|slot=first10-q5\|[^#]*\|cf=2\|#/.test(doc));
  check('no page errors', errs.length===0, errs.join(' | ')||'none');

  await b.close(); srv.close();
  const bad=out.filter(x=>!x).length;
  console.log(`\n  ${out.length-bad}/${out.length} passed`);
  process.exit(bad?1:0);
})().catch(e=>{console.error(e);process.exit(1);});
