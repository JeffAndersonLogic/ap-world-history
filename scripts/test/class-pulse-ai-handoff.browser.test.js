#!/usr/bin/env node
'use strict';
// The AI rating loop in a real browser: export from the practice class, import ratings, see them
// marked as suggestions, accept one; and on the real-class page the buttons stay off without approval.
const assert=require('assert/strict'),fs=require('fs'),http=require('http'),os=require('os'),path=require('path');
let chromium;try{({chromium}=require('playwright-core'));}catch{console.log('SKIP playwright-core is not installed (npm i --no-save playwright-core).');process.exit(2);}
const root=path.resolve(__dirname,'../..'),contract=require('../lib/skilllens-pilot-contract')(require('../lib/class-pulse/config').assignmentId);
const practice=fs.readFileSync(path.join(root,'teacher/skilllens-pilot.html'),'utf8'),live=fs.readFileSync(path.join(root,'teacher/class-pulse.html'),'utf8');
const authSource=fs.readFileSync(path.join(root,'teacher/class-pulse/auth.js'),'utf8');
const authStub="window.ClassPulseAuth=function(){return {user:()=>({uid:'jeff',email:'jeff@zcs.k12.in.us'}),getToken:async()=> 'test-session',signIn:async()=>{},signOut:async()=>{}};};";
let servedPractice=practice;
const server=http.createServer((req,res)=>{res.setHeader('Content-Type','text/html');res.end(req.url.startsWith('/live')?live.replace(authSource,authStub):servedPractice);});
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'class-pulse-ai-'));
let browser;
(async()=>{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const url='http://127.0.0.1:'+server.address().port;
 browser=await chromium.launch({executablePath:process.env.PW_CHROME||chromium.executablePath(),args:['--no-sandbox']});
 const page=await browser.newPage({viewport:{width:1440,height:1000},acceptDownloads:true}),errors=[];page.on('pageerror',e=>errors.push(e.message));

 async function loop(){
  await page.goto(url+'/practice');await page.locator('#workspace').waitFor({state:'visible'});
  assert.equal(await page.locator('#ai-export').isEnabled(),true);
  const [download]=await Promise.all([page.waitForEvent('download'),page.locator('#ai-export').click()]);
  const packet=JSON.parse(fs.readFileSync(await download.path(),'utf8'));
  assert.equal(packet.format,'behistorical-class-pulse-ai-packet-v1');assert.equal(packet.synthetic,true);
  assert(!JSON.stringify(packet).includes('Synthetic student'),'the packet names a student');
  const ratings={format:'behistorical-class-pulse-ai-ratings-v1',contractId:packet.contractId,rater:{name:'Test rater',instructionsVersion:packet.instructionsVersion},ratings:packet.answers.map(a=>({key:a.key,textSha256:a.textSha256,criteria:packet.criteria.map(c=>({criterionId:c.id,band:'partial',reason:'Part of this is shown.',quote:a.text.slice(0,15)}))}))};
  ratings.ratings[1].criteria[0].quote='words the student never wrote';
  const file=path.join(tmp,'ratings.json');fs.writeFileSync(file,JSON.stringify(ratings));
  await page.locator('#ai-import').setInputFiles(file);
  await page.waitForFunction(()=>document.getElementById('feedback').textContent.includes('Imported suggested ratings'));
  assert((await page.locator('#feedback').textContent()).includes('1 ratings quoted words that are not in the answer'));
  await page.locator('#explore-all').click();
  assert((await page.locator('#response-detail').textContent()).includes('AI SUGGESTION · TEST RATER'),'imported rating is not marked as an AI suggestion');
  await page.getByRole('button',{name:'Accept this suggestion'}).click();
  await page.waitForFunction(()=>document.getElementById('feedback').textContent.includes('Accepted the suggestion'));
  assert((await page.locator('#response-detail').textContent()).includes('YOUR INTERPRETATION'));
  assert.equal(await page.evaluate(()=>Object.keys(localStorage).length),0,'student writing was put in browser storage');
 }
 const wire='data.analyses=data.analyses.filter(a=>!ids.has(a.responseId)).concat(result.analyses);';
 assert(practice.includes(wire));servedPractice=practice.replace(wire,'');await assert.rejects(loop,/AssertionError|Timeout/);servedPractice=practice;await loop();

 // The real-class page: same buttons, switched off until ZCS approval is recorded.
 const prefix='tenants/zcs/classes/class-a',assignment=prefix+'/assignments/'+contract.assignmentId;
 const stored={[prefix]:{active:true,label:'Test class'},[prefix+'/teachers/jeff']:{active:true,label:'Jeff Anderson'},[prefix+'/members/sam']:{active:true,label:'Test student'},[assignment]:{active:true,contractId:contract.contractId},[assignment+'/submissions/sam']:{studentId:'sam',contractId:contract.contractId,text:'The winds reversed with the seasons.',revision:1}};
 const encode=v=>typeof v==='string'?{stringValue:v}:typeof v==='number'?{integerValue:String(v)}:{booleanValue:v};
 const doc=(name,obj)=>({name:'projects/behistoric/databases/(default)/documents/'+name,fields:Object.fromEntries(Object.entries(obj).map(([k,v])=>[k,encode(v)])),updateTime:'2026-10-28T00:00:00.000000Z'});
 await page.route('https://firestore.googleapis.com/**',route=>{const u=new URL(route.request().url()),key=decodeURIComponent(u.pathname.split('/documents/')[1]||'');if(u.searchParams.has('pageSize'))return route.fulfill({status:200,body:JSON.stringify({documents:Object.keys(stored).filter(k=>k.startsWith(key+'/')&&!k.slice(key.length+1).includes('/')).map(k=>doc(k,stored[k]))})});return route.fulfill(stored[key]?{status:200,body:JSON.stringify(doc(key,stored[key]))}:{status:404,body:'{}'});});
 await page.goto(url+'/live?class=class-a');await page.locator('#sign-in').click();await page.locator('#workspace').waitFor({state:'visible'});
 assert.equal(await page.locator('#ai-export').isDisabled(),true,'AI export is on for real students without approval');
 assert.equal(await page.locator('#ai-import-button').isDisabled(),true);
 assert((await page.locator('#ai-status').textContent()).includes('until ZCS approves it in writing'));
 assert.deepEqual(errors,[]);
 console.log('PASS Class Pulse AI handoff in the browser: practice export names no student, imported ratings show as suggestions, an untrusted quote goes back for review, accepting saves your judgment, nothing in browser storage; real-class buttons off without approval; negative control caught.');
})().catch(error=>{console.error('FAIL',error.message);process.exitCode=1;}).finally(async()=>{if(browser)await browser.close();server.close();fs.rmSync(tmp,{recursive:true,force:true});});
