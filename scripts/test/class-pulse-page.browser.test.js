#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
let chromium;try{({chromium}=require('playwright-core'));}catch(_){console.log('SKIP Class Pulse browser: playwright-core missing');process.exit(2);}
const {createServer}=require('../serve-class-pulse'),C=require('../../teacher/data/class-pulse-calibration');
let errors=[],requests=[],providerRequests=[];
// This is a contract test double, not a semantic model or accuracy measurement.
const provider={id:'test-model-adapter',version:'1',kind:'model',async interpret(p){providerRequests.push(p);const r=C.rows.find(x=>x.text===p.response.text&&x.checkpoint===p.contract.checkpoint);return C.replayOutput(r,p.contract);}};
const server=createServer({provider});
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const base='http://127.0.0.1:'+server.address().port,url=base+'/teacher/class-pulse.html';
 const browser=await chromium.launch({executablePath:process.env.PW_CHROME||chromium.executablePath(),args:['--no-sandbox']});
 try{
 const context=await browser.newContext({viewport:{width:1280,height:850}}),page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
 await page.goto(url);await page.waitForFunction(()=>document.querySelector('#analysisStatus').textContent.includes('Contract replay ready'));
 assert.equal(await page.locator('#metrics .metric').count(),4);assert.equal(await page.locator('#heatmap .crit').count(),3);
 assert.ok(requests.every(x=>x.startsWith(base)),'Replay must stay offline');
 assert.ok(await page.locator('#dataMode option[value=live]').isDisabled());
 const total=await page.locator('#metrics .metric strong').allTextContents();assert.equal(total.map(Number).reduce((a,b)=>a+b,0),10);
 const bars=await page.locator('#heatmap .crit').evaluateAll(rows=>rows.map(r=>[...r.querySelectorAll('.bar button')].reduce((n,b)=>n+parseFloat(b.style.width),0)));assert.ok(bars.every(n=>Math.abs(n-100)<0.01),'Gray records remain in heat-map denominators');
 await page.locator('#heatmap [data-band=U]').first().click();assert.ok(await page.locator('#pageStudents').isVisible());assert.ok((await page.locator('#studentList .studentrow').count())>=2);assert.match(await page.locator('#studentDetail').textContent(),/Completion:/);
 await page.locator('#bandFilter').selectOption('all');await page.locator('#criterionFilter').selectOption('overall');await page.locator('[data-student=C01]').click();assert.match(await page.locator('#studentDetail .textquote').textContent(),/Seasonal monsoon/);
 await page.locator('#studentDetail details').first().locator('summary').click();assert.match(await page.locator('#studentDetail').textContent(),/TWO maritime technologies/);
 await page.locator('#studentDetail [data-correction-category="criterion-1"]').locator('..').locator('..').locator('summary').click();
 await page.locator('[data-correction-category="criterion-1"]').selectOption('P');await page.locator('[data-correction-note="criterion-1"]').fill('Review timing explanation with this student.');await page.locator('[data-save-correction="criterion-1"]').click();assert.match(await page.locator('#studentDetail').textContent(),/Teacher-confirmed/);assert.match(await page.locator('#studentDetail').textContent(),/original proposal: Demonstrating/);
 await page.locator('#followup').click();assert.match(await page.locator('#followup').textContent(),/Follow-up marked/);
 // Rerendered correction is still optional and never changes source writing.
 assert.match(await page.locator('#studentDetail .textquote').textContent(),/Seasonal monsoon winds reversed/);
 await page.locator('#checkpoint').selectOption('cp2');await page.waitForFunction(()=>document.querySelector('#analysisStatus').textContent.includes('Contract replay ready'));
 await page.locator('[data-nav=targets]').first().click();assert.match(await page.locator('#targetPrompt').textContent(),/TWO effects/);assert.match(await page.locator('#targetScope').textContent(),/state growth only/);
 await page.locator('[data-nav=pulse]').first().click();await page.locator('#simulate').click();await page.waitForFunction(()=>document.querySelector('#analysisStatus').textContent.includes('Contract replay ready'));assert.match(await page.locator('#simulate').textContent(),/Fictional response added/);
 // A real-shaped server model request uses fixed synthetic IDs only.
 await page.locator('#analysisProvider').selectOption('model');assert.ok(await page.locator('#simulate').isHidden());const received=page.waitForResponse(x=>x.url().endsWith('/api/class-pulse/analyze'));
 await page.locator('#analyze').click();assert.equal((await received).status(),200);await page.waitForFunction(()=>document.querySelector('#analysisStatus').textContent.includes('Model analysis ready'));
 assert.ok(providerRequests.length>0);assert.ok(providerRequests.every(x=>!JSON.stringify(x).includes('studentId')));
 assert.match(await page.locator('#metrics').textContent(),/Model-proposed/);
 // A class change during a slow request cannot strand the Analyze control or
 // let a stale completion/error overwrite the new selection.
 let release,arrive;const held=new Promise(r=>release=r),arrived=new Promise(r=>arrive=r);
 await page.route('**/api/class-pulse/analyze',async route=>{arrive();await held;await route.fulfill({status:503,body:'Synthetic delayed failure'});});
 await page.locator('#analyze').click();await arrived;await page.locator('#section').selectOption('Green');assert.ok(await page.locator('#analyze').isEnabled());const selectionStatus=await page.locator('#analysisStatus').textContent();const staleResponse=page.waitForResponse(x=>x.url().endsWith('/api/class-pulse/analyze'));release();await staleResponse;await page.waitForTimeout(50);assert.equal(await page.locator('#analysisStatus').textContent(),selectionStatus);await page.unroute('**/api/class-pulse/analyze');
 // API rejects writing, impersonated synthetic records, and inaccessible files.
 const post=async(body,headers={})=>fetch(base+'/api/class-pulse/analyze',{method:'POST',headers:{'Content-Type':'application/json',...headers},body:JSON.stringify(body)});
 assert.equal((await post({ids:['C01'],checkpoint:'cp1',text:'arbitrary writing'})).status,400);
 assert.equal((await post({ids:['uid-real'],checkpoint:'cp1'})).status,400);
 assert.equal((await post({ids:['C01'],checkpoint:'cp1'},{Origin:'https://untrusted.example'})).status,403);
 assert.equal((await fetch(base+'/server/class-pulse/openai-provider.js')).status,404);
 assert.equal((await fetch(base+'/api/class-pulse/live',{method:'POST'})).status,423);
 const before=requests.length;await page.evaluate(()=>window.__CLASS_PULSE_TEST__.readLive());assert.equal(requests.length,before,'Live read gate must return before any request');
 for(const [width,height] of [[1024,768],[820,1180],[1180,820],[320,650]]){await page.setViewportSize({width,height});await page.locator('[data-nav=pulse]').first().click();assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'No sideways overflow at '+width);}
 await page.locator('#analysisProvider').selectOption('replay');await page.waitForFunction(()=>document.querySelector('#analysisStatus').textContent.includes('Contract replay ready'));
 await page.setViewportSize({width:1024,height:768});const lastSegment=await page.locator('#heatmap .crit').last().locator('.bar').boundingBox();assert.ok(lastSegment.y+lastSegment.height<=768,'iPad landscape shows all three criterion bars without scrolling');
 if(process.env.CLASS_PULSE_QA_DIR){fs.mkdirSync(process.env.CLASS_PULSE_QA_DIR,{recursive:true});await page.setViewportSize({width:1024,height:768});await page.screenshot({path:path.join(process.env.CLASS_PULSE_QA_DIR,'class-pulse-ipad.png'),fullPage:true});await page.setViewportSize({width:1280,height:850});await page.screenshot({path:path.join(process.env.CLASS_PULSE_QA_DIR,'class-pulse-desktop.png'),fullPage:true});}
 const nojs=await browser.newContext({javaScriptEnabled:false});const archive=await nojs.newPage();await archive.goto(url);assert.ok(await archive.locator('#archive').isVisible());assert.ok(await archive.locator('#archiveContent details').count()>=48);await nojs.close();
 await page.reload();await page.waitForFunction(()=>document.querySelector('#analysisStatus').textContent.includes('Contract replay ready'));assert.equal(await page.evaluate(()=>window.__CLASS_PULSE_TEST__.teacherCorrections.size),0);
 // Negative control: remove the analysis engine asset. The real UI must fail
 // initialization, proving the ready-state check cannot pass on static markup.
 const negative=await context.newPage();await negative.route('**/class-pulse-engine.js',r=>r.abort());await negative.goto(url);assert.ok(await negative.locator('#application').isHidden());await negative.close();
 assert.deepEqual(errors,[]);
 console.log('PASS Class Pulse browser: heat-map denominators, exact prompts, evidence, corrections, follow-up, revisions, synthetic server flow, live gate, API privacy, iPad/mobile layouts, no-JS and missing-engine negative control');
 await context.close();
 }finally{await browser.close();server.close();}
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});
