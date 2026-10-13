#!/usr/bin/env node
'use strict';
const assert=require('assert/strict'),fs=require('fs'),path=require('path'),http=require('http');
let chromium;try{({chromium}=require('playwright-core'));}catch(e){process.exit(2);}
const root=path.resolve(__dirname,'../..'),html=fs.readFileSync(path.join(root,'teacher/skilllens-pilot.html'),'utf8');
let served=html,browser;const server=http.createServer((req,res)=>{res.setHeader('Content-Type','text/html');res.end(served);});
(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const url='http://127.0.0.1:'+server.address().port;
 browser=await chromium.launch({executablePath:process.env.PW_CHROME||chromium.executablePath(),args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:1440,height:1000},acceptDownloads:true}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 page.on('dialog',dialog=>dialog.accept());
 const pulse=()=>page.locator('.sidebar [data-view="pulse"]').click();
 const focus=async id=>{await pulse();await page.locator('[data-criterion="'+id+'"]').click();};
 const segment=(id,band)=>page.locator('[data-heatmap-criterion="'+id+'"][data-band="'+band+'"]');
 async function shot(name){if(process.env.BH_PILOT_SHOTS_DIR){fs.mkdirSync(process.env.BH_PILOT_SHOTS_DIR,{recursive:true});await page.screenshot({path:path.join(process.env.BH_PILOT_SHOTS_DIR,name+'.png'),fullPage:true});}}
 // A script-blocking viewer must retain the heatmap and all twelve responses.
 const previewContext=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
 const previewPage=await previewContext.newPage();
 async function readableSample(){
  await previewPage.goto(url);
  assert.equal(await previewPage.locator('#sample-preview').isVisible(),true);
  assert.equal(await previewPage.locator('.preview-response').count(),12);
  assert((await previewPage.locator('#preview-coverage').textContent()).includes('8 responses assessed'));
  assert.equal(await previewPage.locator('.preview-pattern').count(),3);
  assert.equal(await previewPage.locator('#sample-preview .heatmap-row').count(),3);
  assert.equal(await previewPage.locator('#sample-S02').locator('..').locator('blockquote').first().isVisible(),true);
  assert(!(await previewPage.locator('#load-state').textContent()).includes('Opening'));
 }
 served=html.replace('id="sample-preview"','id="sample-preview" hidden');await assert.rejects(readableSample,/AssertionError/);
 served=html.replaceAll('class="heatmap-row"','class="missing-heatmap"');await assert.rejects(readableSample,/AssertionError/);
 served=html;await readableSample();
 await previewPage.locator('#sample-S12').click();assert((await previewPage.locator('#sample-S12').locator('..').textContent()).includes('not evidence of misunderstanding'));
 assert(await previewPage.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Preview fits a phone');
 if(process.env.BH_PILOT_SHOTS_DIR){fs.mkdirSync(process.env.BH_PILOT_SHOTS_DIR,{recursive:true});await previewPage.screenshot({path:path.join(process.env.BH_PILOT_SHOTS_DIR,'pilot-no-scripts.png'),fullPage:true});}
 await previewContext.close();
 served=html.replace(/<script>[\s\S]*?<\/script>/g,'');await page.goto(url);assert.equal(await page.locator('#sample-preview').isVisible(),true);
 served=html.replace('const PILOT_DATA =','const MISSING_PILOT_DATA =');await page.goto(url);assert((await page.locator('#load-state').textContent()).includes('could not open'));assert.equal(await page.locator('#sample-preview').isVisible(),true);
 served=html;await page.goto(url);assert.equal(await page.locator('#sample-preview').isVisible(),false);assert.equal(await page.locator('#export').isVisible(),true);
 async function changeFocus(){await page.goto(url);await focus('monsoons');assert.equal(await page.locator('#focus-description').textContent(),'Explain the seasonal winds');}
 assert(html.includes('focus=p.id;'));served=html.replace('focus=p.id;','focus=focus;');await assert.rejects(changeFocus,/AssertionError/);served=html;await changeFocus();
 async function segmentSelectsEvidence(){
  await page.goto(url);
  await segment('technology','partial').focus();await page.keyboard.press('Enter');
  assert.equal(await page.locator('#page-title').textContent(),'Student Evidence');
  assert.equal(await page.locator('#criterion-filter').inputValue(),'technology');
  assert.equal(await page.locator('#filter').inputValue(),'partial');
  assert.deepEqual(await page.locator('#student option').evaluateAll(els=>els.map(e=>e.value)),['S02','S05','S09']);
  assert.equal(await page.locator('mark').textContent(),'They used a compass and an astrolabe.');
 }
 const filterWire="$('filter').value=band";
 assert(html.includes(filterWire));served=html.replace(filterWire,"$('filter').value='all'");await assert.rejects(segmentSelectsEvidence,/AssertionError/);
 served=html;await segmentSelectsEvidence();
 async function barsMatchCounts(){
  await page.goto(url);
  assert.deepEqual(await page.locator('#coverage .metric strong').allTextContents(),['3','2','3','4']);
  assert.deepEqual(await page.locator('#pattern-cards .heatmap-percent').allTextContents(),['75%','50%','50%']);
  assert.deepEqual(await page.locator('#pattern-cards .count').allTextContents(),['2 / 8','4 / 8','4 / 8']);
  assert.equal(await segment('technology','partial').textContent(),'3');
  assert.equal(await segment('technology','partial').evaluate(el=>el.style.width),'37.5%');
  assert((await segment('technology','partial').getAttribute('aria-label')).includes('3 of 8'));
 }
 assert(html.includes('const count=counts[band];'));served=html.replace('const count=counts[band];','const count=counts[band]+1;');await assert.rejects(barsMatchCounts,/AssertionError/);
 served=html;await barsMatchCounts();
 async function correctionStays(){
  await page.goto(url);await focus('technology');assert.equal(await page.locator('#student').inputValue(),'S02');
  assert.equal(await page.locator('mark').textContent(),'They used a compass and an astrolabe.');
  await page.locator('#correction-details summary').click();await page.locator('#band').selectOption('meets');await page.locator('#reason').fill('Synthetic correction to test the workflow.');await page.locator('#correction button').click();
  assert.equal(await page.locator('#pattern-cards .count').nth(1).textContent(),'3 / 8');
  assert.equal(await page.locator('#student').inputValue(),'S02','Corrected response stays visible');
 }
 async function draftFollowsFocus(){
  await page.goto(url);await focus('technology');
  await page.locator('#action').fill('Technology draft');await focus('monsoons');assert.equal(await page.locator('#action').inputValue(),'');await focus('technology');assert.equal(await page.locator('#action').inputValue(),'Technology draft');
 }
 const keepVisible="      $('filter').value='all';",keepDraft="actionDrafts[focus]=$('action').value;";
 assert(html.includes(keepVisible)&&html.includes(keepDraft));
 served=html.replace(keepVisible,"      $('filter').value='gap';");await assert.rejects(correctionStays,/AssertionError/);
 served=html.replace(keepDraft,'');await assert.rejects(draftFollowsFocus,/AssertionError/);
 served=html;await draftFollowsFocus();await correctionStays();
 await page.locator('.history summary').click();assert((await page.locator('.history').textContent()).includes('Original: Partly shown'));
 await page.locator('#include').check();await page.locator('#action').fill('Compare a named tool with a tool-function explanation, then revise.');await page.locator('#decision-form button').click();assert.equal(await page.locator('.decision-record').count(),1);
 const download=page.waitForEvent('download');await page.locator('#export').click();const artifact=await download;const saved=JSON.parse(fs.readFileSync(await artifact.path(),'utf8'));
 assert.equal(saved.teacher,'Jeff Anderson');assert.equal(saved.overrides.length,1);assert.equal(saved.originalAnalyses[1].criteria[1].band,'partial');assert.equal(saved.decisions[0].evidence[0].judgment.criteria[1].band,'meets');assert.equal(saved.synthetic,true);
 for(const [filter,text] of [['missing','not evidence of misunderstanding'],['blank','No assessment band'],['not_analyzed','No analysis'],['review','Too little detail']]){
  await focus('monsoons');await page.locator('#filter').selectOption(filter);assert((await page.locator('#response-detail').textContent()).includes(text));
 }
 // One reviewed criterion changes its denominator but not the full-response denominator.
 async function criterionDenominator(){
  await page.goto(url);await focus('technology');await page.locator('#filter').selectOption('review');
  await page.locator('#correction-details summary').click();await page.locator('#band').selectOption('partial');await page.locator('#reason').fill('Partial evidence in this synthetic workflow case.');await page.locator('#correction button').click();
  await pulse();assert((await segment('technology','partial').getAttribute('aria-label')).includes('4 of 9'));
  assert.equal(await segment('technology','partial').evaluate(el=>el.style.width),'44.4444%');
  assert((await page.locator('#overall-coverage').textContent()).startsWith('8 of 12'));
  await page.locator('#coverage-details button').first().click();assert.equal(await page.locator('#student').inputValue(),'S07');
  assert((await page.locator('#response-detail').textContent()).includes('another criterion still needs review'));
 }
 assert(html.includes('fillBar(bar,counts,p.assessed,p)'));served=html.replace('fillBar(bar,counts,p.assessed,p)','fillBar(bar,counts,s.assessed,p)');await assert.rejects(criterionDenominator,/AssertionError/);
 served=html;await criterionDenominator();
 await page.goto(url);
 for(const width of [360,768,1440]){
  await page.setViewportSize({width,height:1000});await pulse();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Overview fits '+width);await shot('pulse-'+width);
  await segment('technology','partial').click();assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Evidence fits '+width);await shot('evidence-'+width);
 }
 await page.locator('.sidebar [data-view="targets"]').click();assert.equal(await page.locator('#assignment').isVisible(),true);
 await page.locator('.sidebar [data-view="meaning"]').click();assert.equal(await page.locator('[data-screen="meaning"]').isVisible(),true);
 const requests=[];page.on('request',r=>{if(/^https?:/.test(r.url()))requests.push(r.url());});
 await page.goto('file://'+path.join(root,'teacher/skilllens-pilot.html'));assert.equal(await page.locator('#workspace').isVisible(),true);
 assert.equal(await page.evaluate(()=>Object.keys(localStorage).length),0);await page.evaluate(async()=>{try{await fetch('https://example.com/pilot-test');}catch(e){}});assert.deepEqual(requests,[]);
 served=html.replace('"contractId":"','"contractId":"broken-');await page.goto(url);assert((await page.locator('#load-state').textContent()).includes('could not open'));assert.equal(await page.locator('#workspace').isVisible(),false);
 assert.deepEqual(errors,[]);console.log('PASS pilot browser: negative controls, heatmap counts and segment navigation, per-criterion denominators, evidence, corrections, decisions, export, distinct coverage states, responsive layouts, script-free preview, file mode, network lock, recovery.');
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{if(browser)await browser.close();server.close();});
