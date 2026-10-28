#!/usr/bin/env node
'use strict';
// The practice packet, its draft answer key, and the comparison that scores an AI against them.
const assert=require('assert/strict'),fs=require('fs'),vm=require('vm'),path=require('path'),{spawnSync}=require('child_process');
const packet=require('../../docs/class-pulse/practice/practice-packet.json'),key=require('../../docs/class-pulse/practice/answer-key.json');
const SOURCE='scripts/lib/class-pulse/compare.js',source=fs.readFileSync(SOURCE,'utf8');
const load=text=>{const sandbox={module:{exports:{}},require:p=>require(path.resolve('scripts/lib/class-pulse',p))};vm.runInNewContext(text,sandbox);return sandbox.module.exports;};
const clone=v=>JSON.parse(JSON.stringify(v));
async function checks(C){
 assert.equal(packet.synthetic,true);assert.equal(packet.answers.length,10);
 // The key itself imports cleanly: every quote is in its answer, every criterion rated.
 let r=await C.compare(packet,key,key,key);
 assert.equal(r.scored,10);assert.equal(r.exact,10);assert.equal(r.quoteNotFound,0);
 for(const c of r.criteria){assert.equal(c.agree,10);assert.equal(c.same,10);}
 // A run that changes one band is scored as one disagreement, on the right criterion.
 const run=clone(key);run.ratings[0].criteria[1].band=run.ratings[0].criteria[1].band==='meets'?'not_yet':'meets';
 r=await C.compare(packet,key,run,key);
 assert.equal(r.criteria[1].agree,9);assert.equal(r.criteria[0].agree,10);assert.equal(r.exact,9);
 assert.equal(r.disagreements.length,1);assert.equal(r.disagreements[0].key,key.ratings[0].key);assert.equal(r.criteria[1].same,9);
 // An invented quote on a positive rating counts as Needs your review, as the page would show it.
 const invented=clone(key),target=invented.ratings.find(x=>x.criteria.some(j=>j.band==='meets')),j=target.criteria.find(j=>j.band==='meets');j.quote='words the student never wrote';
 r=await C.compare(packet,key,invented);assert.equal(r.quoteNotFound,1);assert(r.disagreements.some(d=>d.key===target.key&&d.aiBand==='review'));
 // A run that skips answers is reported, not silently scored as agreement.
 const partial=clone(key);partial.ratings=partial.ratings.slice(2);
 r=await C.compare(packet,key,partial);assert.equal(r.unrated.length,2);assert.equal(r.scored,8);
}
(async()=>{
 const mutants=[
  ['agreement ignores the band',source.replace("if(a[c.id]===k[c.id])c.agree++;else{","c.agree++;if(a[c.id]!==k[c.id]){")],
  ['skipped answers count as scored',source.replace("if(!a){unrated.push(answer.key);continue;}","if(!a){continue;}")],
  ['second run compared with the key instead',source.replace("if(b[c.id]===a[c.id])c.same++;","if(b[c.id]===k[c.id])c.same++;")],
 ];
 for(const [name,text] of mutants){assert.notEqual(text,source,'mutation did not apply: '+name);let failed=false;try{await checks(load(text));}catch(error){failed=error.code==='ERR_ASSERTION';if(process.env.SHOW_CONTROLS)console.log('  caught',name,'->',error.code,error.message.split('\n')[0]);}assert(failed,'negative control not caught: '+name);}
 await checks(require('../../'+SOURCE));
 // The generated files match their source, and a hand edit is caught.
 const file='docs/class-pulse/practice/answer-key.json',original=fs.readFileSync(file,'utf8');
 try{fs.writeFileSync(file,original.replace('"meets"','"partial"'));assert.notEqual(spawnSync(process.execPath,['scripts/build-class-pulse-practice.js','--check']).status,0);}finally{fs.writeFileSync(file,original);}
 assert.equal(spawnSync(process.execPath,['scripts/build-class-pulse-practice.js','--check']).status,0);
 console.log('PASS Class Pulse practice set: answer key imports cleanly, disagreements and run-to-run changes are counted on the right criterion, invented quotes count as review, skipped answers are reported, generated files match; '+(mutants.length+1)+' negative controls caught.');
})().catch(error=>{console.error('FAIL',error.message);process.exit(1);});
