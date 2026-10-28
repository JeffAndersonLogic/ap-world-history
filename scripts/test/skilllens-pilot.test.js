#!/usr/bin/env node
'use strict';
const assert=require('assert/strict'),fs=require('fs'),path=require('path'),vm=require('vm'),{spawnSync}=require('child_process');
const root=path.resolve(__dirname,'../..'),contract=require('../lib/skilllens-pilot-contract')(),data=require('../lib/skilllens-pilot-fixtures')(contract),core=require('../lib/skilllens-pilot-core');
const clone=x=>JSON.parse(JSON.stringify(x));
function checks(api){
  const r=data.responses[0],a=data.analyses[0];
  for(const candidate of data.analyses)assert(api.validate(contract,data.responses.find(r=>r.id===candidate.responseId),candidate).valid);
  const corrupt=clone(a);corrupt.criteria[0].evidence[0].quote='Words the student never wrote';assert.equal(api.validate(contract,r,corrupt).valid,false,'Fabricated quotation rejected');
  const stale=clone(a);stale.responseText+=' changed';assert.equal(api.validate(contract,r,stale).valid,false,'Stale response rejected');
  const wrong=clone(a);wrong.contractId='old';assert.equal(api.validate(contract,r,wrong).valid,false,'Stale assignment rejected');
  const empty=clone(a);empty.criteria[0].evidence=[];assert.equal(api.validate(contract,r,empty).valid,false,'Unsupported positive rejected');
  const duplicate=clone(a);duplicate.criteria[1]=clone(duplicate.criteria[0]);assert.equal(api.validate(contract,r,duplicate).valid,false,'Duplicate criterion rejected');
  const incomplete=clone(a);incomplete.criteria.pop();assert.equal(api.validate(contract,r,incomplete).valid,false);
  const bounds=clone(a);bounds.criteria[0].evidence[0].start=-1;assert.equal(api.validate(contract,r,bounds).valid,false);
  const provenance=clone(a);delete provenance.provenance;assert.equal(api.validate(contract,r,provenance).valid,false);
  const invalidBand=clone(a);invalidBand.criteria[0].band='confident';assert.equal(api.validate(contract,r,invalidBand).valid,false);
  const malformed=clone(a);malformed.criteria=[null];assert.equal(api.validate(contract,r,malformed).valid,false);
  assert.equal(api.snapshot(contract,r,corrupt,[]).status,'review','Invalid evidence abstains');
  assert.equal(api.snapshot(contract,data.responses[8],data.analyses[8],[]).status,'partial','One missing essential criterion cannot become meets');
  const before=api.summarize(contract,data.responses,data.analyses,[]);
  assert.equal(before.assessed,8);assert.equal(before.counts.meets,3);assert.equal(before.counts.review,1);assert.equal(before.counts.not_analyzed,1);assert.equal(before.counts.blank,1);assert.equal(before.counts.missing,1);
  assert.equal(before.patterns.find(c=>c.id==='technology').gap,4);
  const original=JSON.stringify(data.analyses),old=[];
  const h=api.correct(contract,data.responses[1],old,'technology','meets','Teacher explanation tied to the full response.','2026-10-12T23:00:00Z');
  assert.equal(old.length,0);assert.equal(h.length,1);assert.equal(JSON.stringify(data.analyses),original,'Original analysis preserved');
  assert.equal(api.summarize(contract,data.responses,data.analyses,h).patterns.find(c=>c.id==='technology').gap,3,'Correction updates the pattern');
  const h2=api.correct(contract,data.responses[1],h,'technology','partial','Reconsidered after reading the full response.');assert.equal(h2.length,2);assert.equal(h.length,1);
  assert.throws(()=>api.correct(contract,data.responses[10],[],'monsoons','not_yet','Blank'),/Missing or blank/);
  assert.throws(()=>api.correct(contract,r,[],'monsoons','meets','   '));
  assert.throws(()=>api.decision(contract,data.responses,data.analyses,[],'technology',[],'Reteach.'));
  assert.throws(()=>api.decision(contract,data.responses,data.analyses,[],'technology',['S12'],'Reteach.'));
  const d=api.decision(contract,data.responses,data.analyses,h,'technology',['S02'],'Practice tool functions.');
  assert.equal(d.evidence[0].judgment.criteria[1].band,'meets');h[0].band='not_yet';assert.equal(d.evidence[0].judgment.criteria[1].band,'meets','Decision evidence remains a historical snapshot');
}
// Run the same checks against defective engines before trusting their green run.
const source=fs.readFileSync(path.join(root,'scripts/lib/skilllens-pilot-core.js'),'utf8');
for(const [from,to] of [
  ['response.text.slice(span.start, span.end) !== span.quote','false'],
  ["essential.every(j => j.band === 'meets')","essential.some(j => j.band === 'meets')"],
  ["j.band = last.band;","j.band = j.band;"]
]){assert(source.includes(from));const sandbox={module:{exports:{}}};vm.runInNewContext(source.replace(from,to),sandbox);assert.throws(()=>checks(sandbox.module.exports),/AssertionError/);}
checks(core);
const sandbox={window:{},document:{querySelector:()=>null,createElement:()=>({}),head:{appendChild(){}}}};vm.createContext(sandbox);for(const file of ['lesson-2-3-indian-ocean.js','lesson-2-3-renderer-config.js'])vm.runInContext(fs.readFileSync(path.join(root,'assets/data',file),'utf8'),sandbox);
const lesson=sandbox.window.BEHISTORICAL_LESSON;
// The practice contract reads the lesson's own prompt and target; the rubric lives in
// scripts/lib/class-pulse/rubrics.js, so the lesson students see is not changed by it.
assert.equal(contract.prompt,lesson.checkpoints[0].prompt);
assert.deepEqual(contract.learningTargets,[lesson.learningTargets[0].target]);
assert.equal(lesson.checkpoints[0].assessment,undefined);
const htmlPath=path.join(root,'teacher/skilllens-pilot.html'),html=fs.readFileSync(htmlPath,'utf8');
try{fs.writeFileSync(htmlPath,html+'\nSTALE');assert.equal(spawnSync(process.execPath,['scripts/build-skilllens-pilot.js','--check'],{cwd:root}).status,1,'Reproducibility check catches stale output');}finally{fs.writeFileSync(htmlPath,html);}
assert.equal(spawnSync(process.execPath,['scripts/build-skilllens-pilot.js','--check'],{cwd:root}).status,0);
console.log('PASS synthetic pilot: evidence, binding, abstentions, denominators, essential criteria, corrections, decision snapshots, source alignment, reproducibility; three engine mutations and stale-output negative control rejected.');
