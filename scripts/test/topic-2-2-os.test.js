#!/usr/bin/env node
'use strict';
const http=require('http');
const fs=require('fs');
const path=require('path');
let chromium;
try{({chromium}=require('playwright-core'));}catch(e){console.error('This test needs playwright-core. Install it first:\n  npm i playwright-core');process.exit(2);}
const ROOT=path.resolve(__dirname,'..','..');
const EXE=process.env.PW_CHROME||(()=>{const base=process.env.PLAYWRIGHT_BROWSERS_PATH||'/opt/pw-browsers';const builds=(fs.existsSync(base)?fs.readdirSync(base):[]).filter(d=>/^chromium-\d+$/.test(d)).sort((a,b)=>Number(b.split('-')[1])-Number(a.split('-')[1]));for(const build of builds){for(const layout of ['chrome-linux64','chrome-linux']){const exe=path.join(base,build,layout,'chrome');if(fs.existsSync(exe))return exe;}}return 'chromium';})();
const TYPES={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp'};
const server=http.createServer((req,res)=>{const rel=decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');const file=path.join(ROOT,rel);if(!file.startsWith(ROOT)||!fs.existsSync(file)||fs.statSync(file).isDirectory()){res.writeHead(404);res.end('nope');return;}res.writeHead(200,{'Content-Type':TYPES[path.extname(file)]||'application/octet-stream'});res.end(fs.readFileSync(file));});
const results=[];function check(name,pass,detail){results.push({name,pass});console.log(`  ${pass?'PASS':'FAIL'}  ${name}${detail?'  ('+detail+')':''}`);}
async function localPage(browser,url,viewport){const page=await browser.newPage({viewport});const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.route('**/*',route=>route.request().url().startsWith(url.origin)?route.continue():route.abort());return{page,errors};}
(async()=>{await new Promise(r=>server.listen(0,r));const port=server.address().port;const origin=new URL(`http://127.0.0.1:${port}/`);const browser=await chromium.launch({executablePath:EXE,args:['--no-sandbox']});

  {
    const {page,errors}=await localPage(browser,origin,{width:1440,height:950});
    await page.goto(`${origin}teacher/topic-2-2-os.html`,{waitUntil:'domcontentloaded'});await page.waitForSelector('#stage .slide');
    console.log('\n  Topic 2.2 teacher surface');
    check('2.2 single-source teaching data renders the first slide',(await page.locator('#count').textContent()).trim().startsWith('1 / '),await page.locator('#count').textContent());
    check('2.2 run of show is present',await page.locator('.flow-card').count()>=10,'cards='+await page.locator('.flow-card').count());
    check('2.2 teacher intelligence exposes LAND, STORY, ASK, and AP',await page.locator('#notes').innerText().then(t=>['LAND','STORY','ASK','AP CONNECTION'].every(x=>t.includes(x))));
    await page.locator('#next').click();await page.waitForTimeout(40);check('2.2 Next advances the presentation',(await page.locator('#count').textContent()).trim().startsWith('2 / '),await page.locator('#count').textContent());
    await page.locator('#briefingBtn').click();check('2.2 Briefing opens without replacing the teaching surface',await page.locator('#drawer').evaluate(el=>el.classList.contains('open')));await page.locator('#closeBriefing').click();
    await page.locator('#rail button[data-i="4"]').click();await page.waitForTimeout(40);check('2.2 reconstruction dependency is replaced by a mechanism view',await page.locator('.mechanism-slide .mechanism-node').count()===4,'nodes='+await page.locator('.mechanism-slide .mechanism-node').count());
    check('2.2 teacher page has no JavaScript errors',errors.length===0,errors.join('; ')||'none');await page.close();
  }

  {
    const {page,errors}=await localPage(browser,origin,{width:1440,height:950});
    await page.goto(`${origin}teacher/topic-2-1-story-os.html`,{waitUntil:'domcontentloaded'});await page.waitForSelector('#stage .slide');
    console.log('\n  Topic 2.1 storytelling teacher surface');
    check('2.1 story OS renders the first slide',(await page.locator('#count').textContent()).trim().startsWith('1 / '),await page.locator('#count').textContent());
    check('2.1 run of show is present',await page.locator('.flow-card').count()>=10,'cards='+await page.locator('.flow-card').count());
    check('2.1 teacher intelligence exposes LAND, STORY, ASK, and AP',await page.locator('#notes').innerText().then(t=>['LAND','STORY','ASK','AP CONNECTION'].every(x=>t.includes(x))));
    const cause=page.locator('.flow-card').filter({hasText:'Teach Causes'});await cause.click();await page.waitForTimeout(40);check('2.1 merchant-relay cause is rendered as an intentional mechanism view',await page.locator('.mechanism-slide .mechanism-node').count()===4,'nodes='+await page.locator('.mechanism-slide .mechanism-node').count());
    await page.locator('#rail button[data-i="8"]').click();await page.waitForTimeout(40);check('2.1 caravanserai is taught without a Canva iframe',await page.locator('.mechanism-slide').count()===1&&await page.locator('iframe[src*="canva"]').count()===0);
    await page.locator('#rail button[data-i="14"]').click();await page.waitForTimeout(40);check('2.1 gives Samarkand and Kashgar their own network-node story',await page.locator('.city-node').count()===2,'nodes='+await page.locator('.city-node').count());
    check('2.1 teacher page has no JavaScript errors',errors.length===0,errors.join('; ')||'none');await page.close();
  }

  for(const [label,pathName] of [['2.2','topic-2-2-os.html'],['2.1','topic-2-1-story-os.html']]){
    const {page,errors}=await localPage(browser,origin,{width:1920,height:1080});
    await page.goto(`${origin}teacher/${pathName}?mode=project`,{waitUntil:'domcontentloaded'});await page.waitForSelector('#stage .slide');
    console.log(`\n  Topic ${label} projection surface`);
    check(`${label} projection hides teacher chrome`,await page.locator('.appbar').evaluate(el=>getComputedStyle(el).display==='none')&&await page.locator('.intel').evaluate(el=>getComputedStyle(el).display==='none'));
    const box=await page.locator('#stage').boundingBox();check(`${label} projection fills a 1920×1080 viewport`,!!box&&Math.abs(box.width-1920)<2&&Math.abs(box.height-1080)<2,box?`${box.width}x${box.height}`:'no box');
    check(`${label} projection has no JavaScript errors`,errors.length===0,errors.join('; ')||'none');await page.close();
  }

  await browser.close();server.close();const failed=results.filter(r=>!r.pass);console.log(`\n  ${results.length-failed.length}/${results.length} passed`);if(failed.length){for(const f of failed)console.log('  ✗ '+f.name);process.exit(1);}
})();
