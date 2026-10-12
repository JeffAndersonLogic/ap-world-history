#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),http=require('http'),assert=require('assert');
let chromium;try{({chromium}=require('playwright-core'));}catch(e){process.exit(2);}
const root=path.resolve(__dirname,'../..'),types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml'};
const server=http.createServer((req,res)=>{const f=path.resolve(root,'.'+new URL(req.url,'http://local').pathname);if(!f.startsWith(root+path.sep)||!fs.existsSync(f)||!fs.statSync(f).isFile())return res.writeHead(404).end();res.setHeader('Content-Type',types[path.extname(f)]||'application/octet-stream');res.end(fs.readFileSync(f));});
let browser;
const settle=page=>page.evaluate(()=>new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r))));
async function directRoute(page){
 await page.locator('#atlas-place').selectOption('0');await settle(page);const hit=page.locator('.atlas-route-hit').first();await hit.scrollIntoViewIfNeeded();
 const q=await hit.evaluate(el=>{for(const f of [.2,.3,.4,.5,.6,.7,.8]){const p=el.getPointAtLength(el.getTotalLength()*f),q=new DOMPoint(p.x,p.y).matrixTransform(el.getScreenCTM());if(document.elementFromPoint(q.x,q.y)===el)return{x:q.x,y:q.y};}throw Error('No visible connection segment');});
 await page.mouse.click(q.x,q.y);assert.equal(await page.locator('#detail-kind').textContent(),'Connection','Direct connection click');
}
async function audit(page,u){
 await page.goto(base+'/unit-'+u+'/network-atlas.html');await page.waitForSelector('.atlas-place-hit');
 for(let k=1;k<=(u===4?8:10);k++){
  await page.locator('#atlas-topic').selectOption(u+'.'+k);await settle(page);
  for(let i=0;i<await page.locator('#view-controls button').count();i++){
   await page.locator('#view-controls button').nth(i).click();await settle(page);
   assert(await page.evaluate(()=>[...document.querySelectorAll('.atlas-place-hit')].every(el=>{const b=el.getBBox(),v=el.ownerSVGElement.viewBox.baseVal;return b.x>=0&&b.y>=0&&b.x+b.width<=v.width&&b.y+b.height<=v.height;})),'Visible markers: '+u+'.'+k+'/'+i);
   const place=page.locator('.atlas-place-hit').first(),name=await place.getAttribute('aria-label');
   await place.focus();await page.keyboard.press('Enter');assert.equal(await page.locator('#place-title').textContent(),name);
   assert.equal(await page.evaluate(()=>document.activeElement.getAttribute('aria-label')),name,'Focus survives redraw');
   await page.locator('#atlas-place').selectOption('0');assert.equal(await page.locator('#place-title').textContent(),name);
   const count=await page.locator('.map-key').count();if(count){await page.locator('.map-key').first().click();assert.equal(await page.locator('#detail-kind').textContent(),'Connection');await directRoute(page);}
   await page.locator('#atlas-place').selectOption('');await settle(page);
   const marker=page.locator('.atlas-place-hit').first();await marker.scrollIntoViewIfNeeded();
   // Overlapping hit areas intentionally select the geographically nearest point.
   // Click the rendered center as a user would, rather than require this one
   // invisible hit area to be topmost over a neighboring invisible hit area.
   const q=await marker.evaluate(el=>{const q=new DOMPoint(el.cx.baseVal.value,el.cy.baseVal.value).matrixTransform(el.getScreenCTM());return{x:q.x,y:q.y};});
   await page.mouse.click(q.x,q.y);assert.equal(await page.locator('#detail-kind').textContent(),'Place','Direct marker click');
  }
 }
}
let base;
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));base='http://127.0.0.1:'+server.address().port;
 browser=await chromium.launch({executablePath:process.env.PW_CHROME||chromium.executablePath(),args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:1100,height:1000}}),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.route('**/*',r=>r.request().url().startsWith(base)?r.continue():r.abort());
 for(const u of [4,5]){
  // Negative control: disabling marker key handlers must fail the same interaction audit.
  await page.route('**/behistorical-network-atlas.js',r=>r.fulfill({contentType:'text/javascript',body:fs.readFileSync(path.join(root,'assets/js/behistorical-network-atlas.js'),'utf8').replace(".on('keydown',event=>{if(event.key==='Enter'||event.key===' ')",".on('keydown',event=>{if(false)")}));
  await assert.rejects(()=>audit(page,u),/AssertionError/);await page.unroute('**/behistorical-network-atlas.js');
  // Independently demonstrate direct clicks fail when click handlers are removed.
  await page.route('**/behistorical-network-atlas.js',r=>r.fulfill({contentType:'text/javascript',body:fs.readFileSync(path.join(root,'assets/js/behistorical-network-atlas.js'),'utf8').replace(".on('click',fn)",".on('click',()=>{})")}));
  await assert.rejects(()=>audit(page,u),/AssertionError/);await page.unroute('**/behistorical-network-atlas.js');await audit(page,u);
  for(const width of [360,768,1100]){
   await page.setViewportSize({width,height:1000});await page.goto(base+'/unit-'+u+'/index.html');const id='#unit'+u+'-atlas-frame';await page.locator(id).scrollIntoViewIfNeeded();const frame=page.frameLocator(id);await frame.locator('.atlas-place-hit').first().waitFor();await frame.locator('#atlas-topic').selectOption(u+'.1');
   await page.waitForFunction(id=>{const f=document.querySelector(id);return f.clientHeight>=f.contentDocument.getElementById('network-atlas').getBoundingClientRect().height;},id);
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'Responsive hub');
   await frame.locator('#atlas-place').selectOption('0');assert.equal(await frame.locator('#detail-kind').textContent(),'Place');
   if(process.env.BH_ATLAS_SHOTS_DIR){fs.mkdirSync(process.env.BH_ATLAS_SHOTS_DIR,{recursive:true});await page.screenshot({path:path.join(process.env.BH_ATLAS_SHOTS_DIR,'unit'+u+'-'+width+'.png'),fullPage:true});}
  }
 }
 assert.deepEqual(errors,[]);console.log('PASS Units 4–5 browser: 37 views, marker keyboard selection, focus, place menus, connection legend, negative controls, responsive hubs, and iframe height.');
})().catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{if(browser)await browser.close();server.close();});
