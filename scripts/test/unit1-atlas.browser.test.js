#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert');
let chromium;try{({chromium}=require('playwright-core'));}catch(e){process.exit(2);}
const root=path.resolve(__dirname,'../..'),types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml'};
const server=http.createServer((req,res)=>{const f=path.resolve(root,'.'+new URL(req.url,'http://local').pathname);if(!f.startsWith(root+path.sep)||!fs.existsSync(f)||!fs.statSync(f).isFile())return res.writeHead(404).end();res.setHeader('Content-Type',types[path.extname(f)]||'application/octet-stream');res.end(fs.readFileSync(f));});
let browser;
// The map redraws on ResizeObserver as well as on a click, and switching a view
// changes the map's height, so one click can mean a second redraw a frame later
// that replaces every marker. Two frames let that settle; measuring inside one
// page.evaluate keeps the query and the check in the same task, so neither can
// hold markers a redraw has just removed. The marker check below read null off a
// detached marker ("reading 'viewBox'") in CI on 2026-10-09; this is the same
// fix fae22ab made to the Unit 3 atlas test that morning.
async function settle(page){await page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));}
async function routeClick(page){await settle(page);const hit=page.locator('.atlas-route-hit').first();await hit.scrollIntoViewIfNeeded();const q=await hit.evaluate(el=>{for(const f of [.2,.3,.4,.5,.6,.7,.8]){const p=el.getPointAtLength(el.getTotalLength()*f),q=new DOMPoint(p.x,p.y).matrixTransform(el.getScreenCTM());if(document.elementFromPoint(q.x,q.y)===el)return{x:q.x,y:q.y};}throw Error('No visible connection segment');});await page.mouse.click(q.x,q.y);assert.equal(await page.locator('#detail-kind').textContent(),'Connection','Direct connection click updates information');}
async function focusResize(page){await page.locator('.atlas-place-hit').first().focus();const name=await page.locator('.atlas-place-hit').first().getAttribute('aria-label');await page.setViewportSize({width:950,height:1000});await page.waitForFunction(()=>document.getElementById('atlas-map').viewBox.baseVal.width===document.getElementById('atlas-map').clientWidth);assert.equal(await page.evaluate(()=>document.activeElement.getAttribute('aria-label')),name,'Resize preserves keyboard focus');}
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=`http://127.0.0.1:${server.address().port}`;
 browser=await chromium.launch({executablePath:process.env.PW_CHROME||chromium.executablePath(),args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:1100,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.route('**/*',r=>r.request().url().startsWith(base)?r.continue():r.abort());
 await page.goto(base+'/unit-1/network-atlas.html');await page.waitForSelector('.atlas-place-hit');assert.equal(await page.locator('#atlas-topic').inputValue(),'1.7');assert.equal(await page.locator('textarea').count(),0);
 await focusResize(page);await page.setViewportSize({width:1100,height:1000});
 for(let topic=1;topic<=7;topic++){
  await page.locator('#atlas-topic').selectOption('1.'+topic);await settle(page);const views=await page.locator('#view-controls button').count();
  for(let i=0;i<views;i++){
   await page.locator('#view-controls button').nth(i).click();await settle(page);
   const visible=await page.evaluate(()=>{const els=[...document.querySelectorAll('#atlas-map .atlas-place-hit')];return els.length>0&&els.every(el=>{const b=el.getBBox(),v=el.ownerSVGElement.viewBox.baseVal;return b.x>=0&&b.y>=0&&b.x+b.width<=v.width&&b.y+b.height<=v.height;});});assert(visible,'Every regional marker fits: '+topic+'/'+i);
   const place=page.locator('.atlas-place-hit').first(),name=await place.getAttribute('aria-label');await place.focus();await page.keyboard.press('Enter');assert.equal(await page.locator('#place-title').textContent(),name);assert.equal(await page.evaluate(()=>document.activeElement.getAttribute('aria-label')),name);
   if(await page.locator('.atlas-route-hit').count())await routeClick(page);
   assert(await page.locator('#source-note').textContent());
  }
 }
 await page.goto(base+'/unit-1/index.html');await page.locator('#unit1-atlas-frame').scrollIntoViewIfNeeded();const frame=page.frameLocator('#unit1-atlas-frame');await frame.locator('.atlas-place-hit').first().waitFor();
 for(const width of [360,768,1100]){await page.setViewportSize({width,height:1000});await frame.locator('#atlas-topic').selectOption('1.4');await frame.locator('#atlas-place').selectOption('1');assert.equal(await frame.locator('#place-title').textContent(),'Cusco: Inca state building');assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);assert.equal(await frame.locator('body').evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);if(process.env.BH_ATLAS_SHOTS_DIR){const out=path.resolve(root,process.env.BH_ATLAS_SHOTS_DIR);fs.mkdirSync(out,{recursive:true});await page.locator('#network-atlas').screenshot({path:path.join(out,`unit1-atlas-${width}.png`)});}}
 await frame.getByText('Historical source and map context',{exact:true}).click();await page.waitForFunction(()=>{const f=document.getElementById('unit1-atlas-frame');return f.clientHeight>=f.contentDocument.getElementById('network-atlas').getBoundingClientRect().height;});
 const touch=await browser.newPage({viewport:{width:360,height:844},hasTouch:true,isMobile:true});await touch.route('**/*',r=>r.request().url().startsWith(base)?r.continue():r.abort());await touch.goto(base+'/unit-1/network-atlas.html?topic=1.4');for(const name of ['Tenochtitlan: Mexica power','Cusco: Inca state building']){const el=touch.getByRole('button',{name,exact:true});await el.scrollIntoViewIfNeeded();const b=await el.boundingBox();await touch.touchscreen.tap(b.x+b.width/2,b.y+b.height/2);assert.equal(await touch.locator('#place-title').textContent(),name);}
 const mutant=await browser.newPage();await mutant.route('**/*',r=>{if(!r.request().url().startsWith(base))return r.abort();if(r.request().url().endsWith('/behistorical-network-atlas.js'))return r.fulfill({contentType:'text/javascript',body:fs.readFileSync(path.join(root,'assets/js/behistorical-network-atlas.js'),'utf8').replace(".on('click',fn)",".on('click',()=>{})")});return r.continue();});await mutant.goto(base+'/unit-1/network-atlas.html?topic=1.1');await assert.rejects(()=>routeClick(mutant),/Direct connection click/);
 const lostFocus=await browser.newPage({viewport:{width:1100,height:1000}});await lostFocus.route('**/*',r=>{if(!r.request().url().startsWith(base))return r.abort();if(r.request().url().endsWith('/behistorical-network-atlas.js'))return r.fulfill({contentType:'text/javascript',body:fs.readFileSync(path.join(root,'assets/js/behistorical-network-atlas.js'),'utf8').replace('if(focused){','if(false&&focused){')});return r.continue();});await lostFocus.goto(base+'/unit-1/network-atlas.html');await lostFocus.waitForSelector('.atlas-place-hit');await assert.rejects(()=>focusResize(lostFocus),/Resize preserves keyboard focus/);
 assert.deepEqual(errors,[]);console.log('PASS all regional views, real clicks, keyboard focus, mobile touch, responsive embed, sources, and removed-handler negative control.');
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{if(browser)await browser.close();server.close();});
