#!/usr/bin/env node
'use strict';
const http=require('http');
const fs=require('fs');
const path=require('path');
let chromium;try{({chromium}=require('playwright-core'));}catch(e){console.error('This test needs playwright-core. Install it first:\n  npm i playwright-core');process.exit(2);}
const ROOT=path.resolve(__dirname,'..','..');
const EXE=process.env.PW_CHROME||chromium.executablePath();
const TYPES={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp','.avif':'image/avif'};
const server=http.createServer((req,res)=>{const rel=decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');const file=path.join(ROOT,rel);if(!file.startsWith(ROOT)||!fs.existsSync(file)||fs.statSync(file).isDirectory()){res.writeHead(404);res.end('nope');return;}res.writeHead(200,{'Content-Type':TYPES[path.extname(file).toLowerCase()]||'application/octet-stream'});res.end(fs.readFileSync(file));});
const results=[];function check(name,pass,detail){results.push({name,pass});console.log(`  ${pass?'PASS':'FAIL'}  ${name}${detail?'  ('+detail+')':''}`);}
async function localPage(browser,origin,pathName,viewport={width:1600,height:950}){const page=await browser.newPage({viewport});const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.route('**/*',r=>r.request().url().startsWith(origin.origin)?r.continue():r.abort());await page.goto(new URL(pathName,origin).href,{waitUntil:'domcontentloaded'});return{page,errors};}
async function goToTeacherTitle(page,needle){const index=await page.evaluate(n=>(window.BEHISTORICAL_TEACHING?.slides||[]).findIndex(s=>String(s.title||'').toLowerCase().includes(String(n).toLowerCase())),needle);if(index<0)throw new Error(`Could not find teacher slide: ${needle}`);await page.locator(`#rail button[data-i="${index}"]`).click();await page.waitForTimeout(70);return index;}
(async()=>{await new Promise(r=>server.listen(0,r));const origin=new URL(`http://127.0.0.1:${server.address().port}/`);const browser=await chromium.launch({executablePath:EXE,args:['--no-sandbox']});

for(const [label,pathName] of [['2.1','teacher/topic-2-1-story-os.html'],['2.2','teacher/topic-2-2-os.html']]){
  const {page,errors}=await localPage(browser,origin,pathName);await page.waitForSelector('#stage .slide');
  console.log(`\n  Topic ${label} teacher readability`);
  check(`${label} Run of Show is collapsed by default`,await page.locator('.timeline').evaluate(el=>getComputedStyle(el).display==='none'));
  check(`${label} Run of Show toggle is available`,await page.locator('#runOfShowToggle').count()===1);
  const intelWidth=await page.locator('.intel').evaluate(el=>el.getBoundingClientRect().width);check(`${label} Teacher Intelligence has a readable wide column`,intelWidth>=385,`width=${Math.round(intelWidth)}px`);
  const cueSize=await page.locator('.cue p,.cue li').first().evaluate(el=>parseFloat(getComputedStyle(el).fontSize));check(`${label} quick-reference body text is at least 13.4px`,cueSize>=13.4,`font=${cueSize}px`);
  await page.locator('#runOfShowToggle').click();check(`${label} Run of Show opens on demand`,await page.locator('.timeline').evaluate(el=>getComputedStyle(el).display!=='none'));
  check(`${label} teacher surface has no JavaScript errors`,errors.length===0,errors.join('; ')||'none');await page.close();
}

{
  const {page,errors}=await localPage(browser,origin,'teacher/topic-2-2-os.html');await page.waitForSelector('#stage .slide');const index=await goToTeacherTitle(page,'Temüjin turns steppe warriors into a system');
  console.log('\n  Topic 2.2 Chinggis Museum composition');
  const g=await page.locator('.hero-slide').evaluate(el=>{const r=el.getBoundingClientRect(),c=el.querySelector('.copy').getBoundingClientRect();return{left:(c.left-r.left)/r.width,right:(c.right-r.left)/r.width,width:c.width/r.width};});
  check('2.2 organization slide places the text panel on the right half',g.left>0.5&&g.right<=1.01,`slide=${index+1} ${JSON.stringify(g)}`);
  const img=page.locator('img[src*="Chinggis%20Museum.jpg"]');const st=await img.evaluate(el=>({complete:el.complete,w:el.naturalWidth,h:el.naturalHeight,fit:getComputedStyle(el).objectFit}));
  check('2.2 museum image decodes and remains uncropped',st.complete&&st.w>0&&st.h>0&&st.fit==='contain',`${st.w}x${st.h}, fit=${st.fit}`);
  check('2.2 organization slide has no JavaScript errors',errors.length===0,errors.join('; ')||'none');await page.close();
}

for(const [label,lesson,deck,asset] of [
  ['2.1','unit-2/lesson-2-1-silk-roads.html','unit-2/presentation-topic-2-1-student.html','Silk%20Road%20Map%202'],
  ['2.2','unit-2/lesson-2-2-mongol-empire.html','unit-2/presentation-topic-2-2-student.html','Steppes%20of%20Asia']
]){
  const lessonPage=await localPage(browser,origin,lesson);await lessonPage.page.waitForSelector('#class-presentation-banner');
  console.log(`\n  Topic ${label} Content Delivery handoff`);
  check(`${label} Content Delivery shows the In-Class Presentation callout`,await lessonPage.page.locator('#class-presentation-banner').count()===1);
  const href=await lessonPage.page.locator('#class-presentation-banner a').getAttribute('href');const expectedDeck=deck.split('/').pop();check(`${label} callout points to the student-safe deck`,href===expectedDeck||Boolean(href&&href.endsWith('/'+expectedDeck)),href||'missing href');
  check(`${label} old Content Cards remain in Content Delivery`,await lessonPage.page.locator('#main-lecture-grid .card').count()>0,'cards='+await lessonPage.page.locator('#main-lecture-grid .card').count());await lessonPage.page.close();

  const {page,errors}=await localPage(browser,origin,deck,{width:1440,height:900});await page.waitForSelector('#stage .slide');
  const serialized=await page.evaluate(()=>JSON.stringify(window.BEHISTORICAL_STUDENT_DECK));
  check(`${label} student deck contains no teacher notes`,!serialized.includes('"notes"')&&!serialized.toLowerCase().includes('listenfor')&&!serialized.toLowerCase().includes('teacher intelligence'));
  const first=page.locator(`img[src*="${asset}"]`).first();await first.waitFor({state:'visible'});const state=await first.evaluate(el=>({complete:el.complete,w:el.naturalWidth,h:el.naturalHeight,fit:getComputedStyle(el).objectFit}));
  check(`${label} student deck first image decodes`,state.complete&&state.w>0&&state.h>0,`${state.w}x${state.h}`);check(`${label} student deck uses non-cropping images`,state.fit==='contain',`fit=${state.fit}`);
  await page.locator('#next').click();check(`${label} student deck Next works`,(await page.locator('#count').textContent()).trim().startsWith('2 / '),await page.locator('#count').textContent());
  check(`${label} student deck has no JavaScript errors`,errors.length===0,errors.join('; ')||'none');await page.close();
}

await browser.close();server.close();const failed=results.filter(r=>!r.pass);console.log(`\n  ${results.length-failed.length}/${results.length} passed`);if(failed.length){for(const f of failed)console.log('  ✗ '+f.name);process.exit(1);}
})();