#!/usr/bin/env node
'use strict';
const http=require('node:http');
const fs=require('node:fs');
const path=require('node:path');
let chromium;
try{({chromium}=require('playwright-core'))}catch(e){console.log('SKIP Class Pulse browser: playwright-core missing');process.exit(2)}
const ROOT=path.resolve(__dirname,'../..');
let failures=0;
function ok(name,pass,detail){console.log('  '+(pass?'PASS':'FAIL')+' '+name+(detail?' ('+detail+')':''));if(!pass)failures++}
const server=http.createServer((req,res)=>{
 const rel=decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/,''),file=path.resolve(ROOT,rel);
 if(!file.startsWith(ROOT+path.sep)||!fs.existsSync(file)||fs.statSync(file).isDirectory()){res.writeHead(404);res.end('not found');return;}
 const mime=file.endsWith('.js')?'text/javascript':file.endsWith('.html')?'text/html':'text/plain';
 res.writeHead(200,{'Content-Type':mime});res.end(fs.readFileSync(file));
});
(async()=>{
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 const url='http://127.0.0.1:'+server.address().port+'/teacher/class-pulse.html';
 const browser=await chromium.launch({executablePath:process.env.PW_CHROME||chromium.executablePath(),args:['--no-sandbox']});
 const ctx=await browser.newContext({viewport:{width:1280,height:850}}),page=await ctx.newPage();
 const errors=[],requests=[];page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>requests.push(r.url()));
 await page.goto(url);
 ok('Class Pulse loads with four signals',await page.locator('#metrics .metric').count()===4);
 ok('demo starts offline (no external requests)',requests.every(x=>x.startsWith('http://127.0.0.1:')),requests.filter(x=>!x.startsWith('http://127.0.0.1:')).join(' '));
 await page.locator('[data-criterion]').first().click();
 ok('heat-map drilldown opens a real response',await page.locator('#pageStudents').isVisible() && (await page.locator('#studentDetail .textquote').count())===1);
 await page.locator('[data-nav=targets]').first().click();
 await page.locator('#checkpoint').selectOption('cp2');
 ok('checkpoint 2 uses its distinct prompt',/TWO effects/.test(await page.textContent('#targetPrompt')));
 await page.locator('[data-nav=pulse]').first().click();
 await page.locator('#simulate').click();
 ok('simulated arrival updates status',/Fictional response added/.test(await page.textContent('#simulate')));
 const beforeRemote=requests.filter(x=>x.startsWith('https://firestore.googleapis.com/')).length;
 await page.locator('#dataMode').selectOption('live');
 ok('live mode never fabricates semantic bands',await page.locator('#metrics .metric').first().locator('strong').textContent()==='—');
 ok('switching into live mode sends no student data',requests.filter(x=>x.startsWith('https://firestore.googleapis.com/')).length===beforeRemote);
 const documents=[
  ['uid-a','checkpoint-one-response','Winds were predictable.','',4],
  ['uid-b','checkpoint-one-response','A compass helped.','G1',3],
  ['uid-a','checkpoint-two-response','Kilwa prospered through trade.','',4]
 ].map(([uid,slot,text,section,confidence])=>({document:{name:'projects/behistoric/databases/(default)/documents/tenants/zcs/responses/'+uid+'__2-3__'+slot,fields:{tenantId:{stringValue:'zcs'},studentId:{stringValue:uid},courseId:{stringValue:'apwh'},sectionId:{stringValue:section},topicKey:{stringValue:'2-3'},slotId:{stringValue:slot},text:{stringValue:text},confidence:{integerValue:String(confidence)},updatedAt:{timestampValue:'2026-10-10T10:00:00Z'}}}}));
 await page.route('https://firestore.googleapis.com/**',route=>{
  const req=route.request(),body=JSON.parse(req.postData()||'{}');
  ok('reader uses topic-scoped Firestore runQuery (not a write endpoint)',req.method()==='POST' && req.url().endsWith(':runQuery') && body.structuredQuery?.where?.fieldFilter?.value?.stringValue==='2-3');
  route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(documents)});
 });
 await page.evaluate(()=>{window.__CLASS_PULSE_TEST__.STATE.auth={auth:{currentUser:{email:'janderson@zcs.k12.in.us'}},getIdToken:async()=> 'synthetic-test-token'}});
 await page.locator('#refresh').click();
 await page.waitForTimeout(200);
 ok('live read returned three checkpoint snapshots',/3 checkpoint snapshots/.test(await page.textContent('#liveBanner')));
 ok('real mode never generates pretend progress',/No historical trend yet/.test(await page.textContent('#trendHeading')) && await page.locator('#metrics .metric').first().locator('strong').textContent()==='—');
 await page.locator('[data-nav=students]').first().click();
 ok('drilldown reads real-shaped snapshot without a grade',await page.locator('#studentList .studentrow').count()===2 && /Winds were predictable/.test(await page.textContent('#studentDetail')) && /Not analyzed/.test(await page.textContent('#studentDetail')));
 await page.locator('#section').selectOption('G1');
 ok('section filter picks the correct one',await page.locator('#studentList .studentrow').count()===1);
 await page.setViewportSize({width:320,height:650});
 ok('no sideways overflow at 320px',await page.evaluate(()=>document.documentElement.scrollWidth<=321));
 const nojs=await browser.newContext({javaScriptEnabled:false});const pg=await nojs.newPage();await pg.goto(url);
 ok('scripts blocked: static fictional response archive is readable',await pg.locator('#archive').isVisible() && await pg.locator('#archiveContent details').count()>=48);
 ok('no unexpected page errors',errors.length===0,errors.join(' | '));
 await pg.close();await nojs.close();await ctx.close();await browser.close();server.close();
 if(failures){console.log('FAIL '+failures+' Class Pulse browser checks');process.exitCode=1;}else console.log('PASS Class Pulse browser interactions, live mock, response drilldown, mobile, no-JS');
})().catch(e=>{console.error(e);server.close();process.exitCode=1;});