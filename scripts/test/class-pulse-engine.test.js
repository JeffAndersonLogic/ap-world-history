#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const E=require('../../teacher/class-pulse-engine'),C=require('../../teacher/data/class-pulse-calibration');
const {createService}=require('../../server/class-pulse/service'),{createFirebaseBoundary}=require('../../server/class-pulse/firebase-boundary'),{createOpenAIProvider}=require('../../server/class-pulse/openai-provider');
const {evaluate,reviewTemplate,applyReferences}=require('../eval-class-pulse');
const sandbox={window:{}};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../../assets/data/skills-map.js'),'utf8'),sandbox);const map=JSON.parse(JSON.stringify(sandbox.window.BEHISTORICAL_SKILLS_MAP));
const cp1=E.contractFor(map,'cp1'),cp2=E.contractFor(map,'cp2');
function row(id='C01'){const r=C.rows.find(x=>x.id===id);return {...r,key:r.id,studentId:'NEVER-SEND-UID',sectionId:'NEVER-SEND-SECTION',confidence:5};}
function clone(x){return JSON.parse(JSON.stringify(x));}
function output(){return C.replayOutput(row(),cp1);}
(async()=>{
 assert.equal(C.rows.length,40);assert.equal(new Set(C.rows.map(x=>x.id)).size,40);assert.equal(C.rows.filter(x=>x.teacherReviewed).length,0);
 for(const [cp,contract] of [['cp1',cp1],['cp2',cp2]]){
  assert.equal(contract.prompt,map.topics['2.3'].slots[E.SLOTS[cp]].prompt);
  assert.deepEqual(contract.criteria.map(x=>x.text),map.topics['2.3'].slots[E.SLOTS[cp]].criteria);
  assert.deepEqual(contract.learningTargets,map.topics['2.3'].slots[E.SLOTS[cp]].learningTargets);
  assert.deepEqual(contract.successCriteria,map.topics['2.3'].slots[E.SLOTS[cp]].successCriteria);
 }
 assert.notEqual(cp1.prompt,cp2.prompt);assert.match(cp1.coverageNote,/not assessed/);
 assert.equal(E.eligibility(row('C18')),'completion-unverified');assert.equal(E.eligibility(row('C17')),'completion-unverified');assert.equal(E.eligibility(row('C19')),'missing-writing');
 let calls=0,payload;
 const engine=E.createEngine({provider:{id:'spy',version:'v1',kind:'model',async interpret(p){calls++;payload=p;return C.replayOutput(row(),p.contract);}}});
 const a=await engine.analyze(row(),cp1);assert.equal(a.status,'analyzed');assert.equal(a.source,'model-proposed');assert.equal(calls,1);
 const serialized=JSON.stringify(payload);assert.doesNotMatch(serialized,/NEVER-SEND|studentId|sectionId|confidence|C01/);assert.match(payload.instructions,/UNTRUSTED DATA/);
 await Promise.all([engine.analyze(row(),cp1),engine.analyze(row(),cp1)]);assert.equal(calls,1);
 const next=await engine.analyze({...row(),updatedAt:'changed'},cp1);assert.notEqual(next.revision,a.revision);assert.equal(calls,2);
 await engine.analyze({...row(),text:'Changed writing.'},cp1);assert.equal(calls,3); // quotes cannot be found in revised text: failure, not old result
 const absent=await engine.analyze(row('C18'),cp1);assert.equal(absent.status,'ineligible');assert.equal(calls,3);assert.ok(absent.criteria.every(c=>c.category==='U'));
 const changedContract={...cp1,prompt:cp1.prompt+' Revised.'};await engine.analyze(row(),changedContract);assert.equal(calls,4);
 const override=E.correction(a,'criterion-1','P','Seasonal timing needs clarification.');const overrides=new Map([[a.key+'|criterion-1',override]]);
 assert.equal(E.aggregate([a],cp1,overrides).criteria[0].counts.P,1);assert.equal(E.aggregate([next],cp1,overrides).criteria[0].counts.D,1);assert.equal(a.criteria[0].category,'D');assert.throws(()=>E.correction(a,'criterion-1','D',''),/reason/);
 assert.equal(E.aggregate([a,absent],cp1).criteria[0].n,2);assert.equal(E.aggregate([a,absent],cp1).criteria[0].counts.U,1);assert.equal(E.summary([{category:'D'},{category:'U'}]),'U');
 // Adversarial provider replies must fail the same validator used in production.
 for(const mutate of [r=>r.criteria.pop(),r=>r.criteria[0].evidence=['Invented quote'],r=>r.criteria[0].category='A+',r=>r.criteria[0].evidence=[],r=>{r.criteria[0].uncertainty=['Unresolved contradiction'];r.criteria[0].reviewRequired=true;},r=>{r.criteria[0].uncertainty=['Contradiction'];r.criteria[0].reviewRequired=false;},r=>r.criteria[1].criterionId='criterion-1']){const bad=output();mutate(bad);assert.throws(()=>E.validateOutput(bad,cp1,row().text));}
 const broken=E.createEngine({provider:{id:'bad',version:'1',async interpret(){throw new Error(row().text);}}});assert.equal((await broken.analyze(row(),cp1)).status,'error');assert.equal(broken.cacheSize(),0);
 let duplicateCalls=0;const concurrent=E.createEngine({provider:{id:'coalesce',version:'1',async interpret(){duplicateCalls++;return output();}}});await Promise.all([concurrent.analyze(row(),cp1),concurrent.analyze(row(),cp1)]);assert.equal(duplicateCalls,1);
 const report=await evaluate(C.replayProvider());assert.equal(report.eligibleInterpreted,34);assert.equal(report.errors,0);assert.equal(report.accuracy,null);assert.equal(report.confusion,null);
 const temp=fs.mkdtempSync(path.join(require('node:os').tmpdir(),'class-pulse-review-'));try{const file=path.join(temp,'reference.json'),template=await reviewTemplate();assert.equal(template.items.length,40);template.items[0].reviewer='TEST-ONLY REVIEWER';template.items[0].reviewedAt='2026-10-17T15:00:00Z';fs.writeFileSync(file,JSON.stringify(template));assert.equal((await applyReferences(file)).filter(x=>x.teacherReviewed).length,1);template.items[0].responseText='tampered';fs.writeFileSync(file,JSON.stringify(template));await assert.rejects(()=>applyReferences(file),/exact writing/);}finally{fs.rmSync(temp,{recursive:true,force:true});}
 // Semantic calibration accounting, using an intentionally wrong TEST provider.
 const wrong={id:'intentionally-wrong-test-double',version:'1',kind:'model',async interpret(p){const r=C.rows.find(x=>x.text===p.response.text);const o=C.replayOutput(r,p.contract);o.criteria[0].category='N';return o;}};
 const measured=await evaluate(wrong,[C.rows[0]]);assert.equal(measured.missedDemonstrating,1);assert.equal(measured.disagreements.length,1);assert.equal(measured.accuracy,null);
 let liveReads=0,modelCalls=0;const provider={id:'boundary-spy',version:'1',async interpret(){modelCalls++;return output();}};
 const service=createService({provider,map,syntheticCatalog:C.rows,verifyToken:async t=>{if(t!=='valid')throw new Error('Invalid token');return {uid:'teacher'};},authorizeScope:async(_t,s)=>{if(s.sectionId!=='A')throw new Error('Denied');return {...s,studentIds:['uid-a']};},readResponses:async()=>{liveReads++;return [{...row(),studentId:'uid-b',tenantId:'zcs',courseId:'apwh',topicKey:'2-3',slotId:cp1.slotId}];},verifySubmission:async()=>null});
 await assert.rejects(()=>service.analyzeLive(),e=>e.code==='PROCESSING_DISABLED');assert.equal(modelCalls,0);assert.equal(liveReads,0);
 await assert.rejects(()=>service.prepareLive({idToken:'invalid',tenantId:'zcs',sectionId:'A',checkpoint:'cp1'}));assert.equal(liveReads,0);
 await assert.rejects(()=>service.prepareLive({idToken:'valid',tenantId:'zcs',sectionId:'B',checkpoint:'cp1'}));assert.equal(liveReads,0);
 await assert.rejects(()=>service.prepareLive({idToken:'valid',tenantId:'zcs',sectionId:'A',checkpoint:'cp1'}),/Out-of-scope/);assert.equal(modelCalls,0);
 await assert.rejects(()=>service.analyzeSynthetic(['real-uid'],'cp1'),/Unknown/);
 let checkedRevocation=false;const auth={async verifyIdToken(_token,revoke){checkedRevocation=revoke;return {uid:'teacher',email:'janderson@zcs.k12.in.us',email_verified:true,firebase:{sign_in_provider:'google.com'}};}};
 const deps=createFirebaseBoundary({auth,rosterStore:{async getTeacherSection(uid,tenant,section){return section==='A'?{active:true,studentIds:['uid-a']}:null;}},submissionStore:{async getVerifiedReceipt(){return {text:'old snapshot',updatedAt:'old'};}},readTopic:async()=>[{...row(),studentId:'uid-a',tenantId:'zcs',courseId:'apwh',sectionId:'STUDENT-SPOOFED',topicKey:'2-3',slotId:cp1.slotId}]});
 const boundary=createService({provider,map,syntheticCatalog:C.rows,...deps});const prepared=await boundary.prepareLive({idToken:'token',tenantId:'zcs',sectionId:'A',checkpoint:'cp1'});assert.ok(checkedRevocation);assert.equal(prepared[0].completionState,'backup-snapshot');assert.equal(modelCalls,0);
 const exactBoundary=createService({provider,map,syntheticCatalog:C.rows,...deps,verifySubmission:async(_scope,r)=>({responseDigest:await E.digest({text:r.text,updatedAt:r.updatedAt})})});assert.equal((await exactBoundary.prepareLive({idToken:'token',tenantId:'zcs',sectionId:'A',checkpoint:'cp1'}))[0].completionState,'verified-submission');assert.equal(modelCalls,0);
 await assert.rejects(()=>boundary.prepareLive({idToken:'token',tenantId:'zcs',sectionId:'B',checkpoint:'cp1'}));
 for(const claims of [{uid:'u',email:'student@stumail.zcs.k12.in.us',email_verified:true,firebase:{sign_in_provider:'google.com'}},{uid:'u',email:'staff@zcs.k12.in.us.evil.com',email_verified:true,firebase:{sign_in_provider:'google.com'}},{uid:'u',email:'staff@zcs.k12.in.us',email_verified:false,firebase:{sign_in_provider:'google.com'}}]){const b=createFirebaseBoundary({auth:{verifyIdToken:async()=>claims}});await assert.rejects(()=>b.verifyToken('token'));}
 let request;const openai=createOpenAIProvider({apiKey:'server-test-secret',model:'explicit-test-model',fetchImpl:async(url,opts)=>{request={url,opts};return {ok:true,json:async()=>({status:'completed',output:[{type:'message',content:[{type:'output_text',text:JSON.stringify(output())}]}]})};}});
 assert.deepEqual(await openai.interpret(payload),output());const body=JSON.parse(request.opts.body);assert.equal(body.store,false);assert.equal(body.model,'explicit-test-model');assert.equal(body.text.format.strict,true);assert.equal(request.opts.redirect,'error');assert.doesNotMatch(request.opts.body,/server-test-secret|NEVER-SEND/);
 // Mutation controls: remove real evidence validation, reference mapping, or the
 // external-processing lock and prove these assertions actually go red.
 const source=fs.readFileSync(path.join(__dirname,'../../teacher/class-pulse-engine.js'),'utf8');
 function load(text){const box={module:{exports:{}},TextEncoder,require};vm.runInNewContext(text,box);return box.module.exports;}
 const mutated=source.replace("if(r.evidence.some(q=>!text.includes(q)))throw new Error('Evidence quote absent from response');",'');assert.notEqual(source,mutated);const m=load(mutated),bad=output();bad.criteria[0].evidence=['Invented quote'];assert.throws(()=>assert.throws(()=>m.validateOutput(bad,cp1,row().text)));
 assert.throws(()=>assert.deepEqual({...cp1,criteria:[]}.criteria.map(x=>x.text),map.topics['2.3'].slots[cp1.slotId].criteria));
 const serviceSource=fs.readFileSync(path.join(__dirname,'../../server/class-pulse/service.js'),'utf8');const unsafe=serviceSource.replace("throw e;},","return [];},");assert.notEqual(serviceSource,unsafe);const box={module:{exports:{}},require:x=>x.includes('class-pulse-engine')?E:require(x)};vm.runInNewContext(unsafe,box);await assert.rejects(()=>assert.rejects(()=>box.module.exports.createService({provider,map,syntheticCatalog:C.rows}).analyzeLive()));
 console.log('PASS Class Pulse: authored contracts, 40-case replay, evidence validation, revision cache, teacher corrections, calibration disagreement accounting, authentication/scope/receipt boundary, model adapter and mutation controls');
})().catch(e=>{console.error(e);process.exitCode=1;});
