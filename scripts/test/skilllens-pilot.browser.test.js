#!/usr/bin/env node
'use strict';
const assert=require('assert/strict'),fs=require('fs'),path=require('path'),http=require('http');
let chromium;try{({chromium}=require('playwright-core'));}catch(e){process.exit(2);}
const root=path.resolve(__dirname,'../..'),html=fs.readFileSync(path.join(root,'teacher/skilllens-pilot.html'),'utf8');
let served=html,browser;const server=http.createServer((req,res)=>{res.setHeader('Content-Type','text/html');res.end(served);});
(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const url='http://127.0.0.1:'+server.address().port;
 browser=await chromium.launch({executablePath:process.env.PW_CHROME||chromium.executablePath(),args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:1280,height:1000},acceptDownloads:true}),errors=[];page.on('pageerror',e=>errors.push(e.message));
 page.on('dialog',dialog=>dialog.accept());
 // Reproduce script-blocking file viewers. The readable sample must not depend
 // on app startup; the old page left all responses hidden behind a spinner.
 const previewContext=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
 const previewPage=await previewContext.newPage();
 async function readableSample(){
  await previewPage.goto(url);
  assert.equal(await previewPage.locator('#sample-preview').isVisible(),true,'Sample visible without scripts');
  assert.equal(await previewPage.locator('.preview-response').count(),12);
  assert((await previewPage.locator('#preview-coverage').textContent()).includes('8 responses assessed'));
  assert.equal(await previewPage.locator('.preview-pattern').count(),3);
  assert.equal(await previewPage.locator('#sample-S02').locator('..').locator('blockquote').first().isVisible(),true,'Student writing visible without scripts');
  assert(!(await previewPage.locator('#load-state').textContent()).includes('Opening'));
 }
 assert(html.includes('id="sample-preview"'));
 served=html.replace('id="sample-preview"','id="sample-preview" hidden');await assert.rejects(readableSample,/AssertionError/);
 served=html;await readableSample();
 await previewPage.locator('#sample-S12').click();assert((await previewPage.locator('#sample-S12').locator('..').textContent()).includes('not evidence of misunderstanding'));
 assert(await previewPage.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Preview fits a phone');
 if(process.env.BH_PILOT_SHOTS_DIR){fs.mkdirSync(process.env.BH_PILOT_SHOTS_DIR,{recursive:true});await previewPage.screenshot({path:path.join(process.env.BH_PILOT_SHOTS_DIR,'pilot-no-scripts.png'),fullPage:true});}
 await previewContext.close();
 served=html.replace(/<script>[\s\S]*?<\/script>/g,'');await page.goto(url);assert.equal(await page.locator('#sample-preview').isVisible(),true,'Stripped scripts leave readable sample');
 served=html.replace('const PILOT_DATA =','const MISSING_PILOT_DATA =');await page.goto(url);assert((await page.locator('#load-state').textContent()).includes('could not open'));assert.equal(await page.locator('#sample-preview').isVisible(),true,'Startup error preserves readable sample');
 served=html;await page.goto(url);assert.equal(await page.locator('#sample-preview').isVisible(),false,'Hide read-only copy after successful startup');assert.equal(await page.locator('#export').isVisible(),true);
 async function changeFocus(){await page.goto(url);await page.locator('[data-criterion="monsoons"]').click();assert.equal(await page.locator('#focus-description').textContent(),'Explain the seasonal winds');}
 assert(html.includes('focus=p.id;'));served=html.replace('focus=p.id;','focus=focus;');await assert.rejects(changeFocus,/AssertionError/);served=html;await changeFocus();
 async function correctionStays(){
 await page.goto(url);await page.locator('[data-criterion="technology"]').click();assert.equal(await page.locator('#student').inputValue(),'S02');
 assert.equal(await page.locator('mark').textContent(),'They used a compass and an astrolabe.');
 await page.locator('#correction-details summary').click();await page.locator('#band').selectOption('meets');await page.locator('#reason').fill('Synthetic correction to test the workflow.');await page.locator('#correction button').click();
 assert.equal(await page.locator('[data-criterion="technology"] .count').textContent(),'3 / 8');
 assert.equal(await page.locator('#student').inputValue(),'S02','Corrected response stays visible');
 }
 async function draftFollowsFocus(){
 await page.goto(url);
 await page.locator('#action').fill('Technology draft');await page.locator('[data-criterion="monsoons"]').click();assert.equal(await page.locator('#action').inputValue(),'','An action is not silently attached to another focus');await page.locator('[data-criterion="technology"]').click();assert.equal(await page.locator('#action').inputValue(),'Technology draft','Draft survives changing focus');
 }
 const keepVisible="      $('filter').value='all';",keepDraft="actionDrafts[focus]=$('action').value;";
 assert(html.includes(keepVisible)&&html.includes(keepDraft));
 served=html.replace(keepVisible,"      $('filter').value='gap';");await assert.rejects(correctionStays,/AssertionError/);
 served=html.replace(keepDraft,'');await assert.rejects(draftFollowsFocus,/AssertionError/);
 served=html;await draftFollowsFocus();await correctionStays();
 await page.locator('#filter').selectOption('all');await page.locator('#student').selectOption('S02');await page.locator('.history summary').click();assert((await page.locator('.history').textContent()).includes('Original: Partly shown'));
 await page.locator('#include').check();await page.locator('#action').fill('Compare a named tool with a tool-function explanation, then revise.');await page.locator('#decision-form button').click();assert.equal(await page.locator('.decision-record').count(),1);
 const download=page.waitForEvent('download');await page.locator('#export').click();const artifact=await download;const saved=JSON.parse(fs.readFileSync(await artifact.path(),'utf8'));
 assert.equal(saved.teacher,'Jeff Anderson');assert.equal(saved.overrides.length,1);assert.equal(saved.originalAnalyses[1].criteria[1].band,'partial');assert.equal(saved.decisions[0].evidence[0].judgment.criteria[1].band,'meets');assert.equal(saved.synthetic,true);
 for(const [filter,text] of [['missing','not evidence of misunderstanding'],['blank','No assessment band'],['not_analyzed','No analysis'],['review','Too little detail']]){
  await page.locator('[data-criterion="monsoons"]').click();await page.locator('#filter').selectOption(filter);assert((await page.locator('#response-detail').textContent()).includes(text));
 }
 await page.locator('[data-criterion="technology"]').click();await page.locator('#filter').selectOption('gap');
 for(const width of [360,768,1280]){await page.setViewportSize({width,height:1000});assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'No horizontal overflow at '+width);if(process.env.BH_PILOT_SHOTS_DIR){fs.mkdirSync(process.env.BH_PILOT_SHOTS_DIR,{recursive:true});await page.screenshot({path:path.join(process.env.BH_PILOT_SHOTS_DIR,'pilot-'+width+'.png'),fullPage:true});}}
 // Page is also usable from disk. No external network request is made.
 const requests=[];page.on('request',r=>{if(/^https?:/.test(r.url()))requests.push(r.url());});
 await page.goto('file://'+path.join(root,'teacher/skilllens-pilot.html'));assert.equal(await page.locator('#workspace').isVisible(),true);
 assert.equal(await page.evaluate(()=>Object.keys(localStorage).length),0);await page.evaluate(async()=>{try{await fetch('https://example.com/pilot-test');}catch(e){}});assert.deepEqual(requests,[],'CSP blocks outbound requests');
 // Invalid supplied evidence must produce a recovery screen, not a class pattern.
 served=html.replace('"contractId":"','"contractId":"broken-');await page.goto(url);assert((await page.locator('#load-state').textContent()).includes('could not open'));assert.equal(await page.locator('#workspace').isVisible(),false);
 assert.deepEqual(errors,[]);console.log('PASS pilot browser: failed-handler control, evidence, corrections, original preservation, decisions, download, distinct missing/blank/review states, responsive layouts, file mode, network lock, failure recovery.');
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{if(browser)await browser.close();server.close();});
