#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm');
const contract=require('../lib/ced-unit4-contract');
const ROOT=path.resolve(__dirname,'..','..'),DATA=path.join(ROOT,'assets','data');
const failures=[];
function box(){const b={window:{},document:{querySelector:()=>null,querySelectorAll:()=>[],createElement:()=>({setAttribute(){},appendChild(){},style:{}}),head:{appendChild(){}},body:{classList:{add(){},remove(){},toggle(){}}}},setTimeout(){},clearTimeout(){}};b.globalThis=b;return vm.createContext(b);}
function norm(v){return String(v||'').toLowerCase().replace(/[–—]/g,'-').replace(/[’‘]/g,"'").replace(/[^a-z0-9.'\- ]+/g,' ').replace(/\s+/g,' ').trim();}
function has(t,p){return norm(t).includes(norm(p));}
function load(spec){const c=box(),lp=path.join(DATA,spec.file),rp=path.join(DATA,spec.renderer);vm.runInContext(fs.readFileSync(lp,'utf8'),c,{filename:lp});const base=JSON.parse(JSON.stringify(c.window.BEHISTORICAL_LESSON||{}));vm.runInContext(fs.readFileSync(rp,'utf8'),c,{filename:rp});const runtime=JSON.parse(JSON.stringify(c.window.BEHISTORICAL_LESSON||{}));return{base,runtime};}
function instruction(l){return JSON.stringify({lecture:l.lecture||{},map:l.map||{},evidenceLab:l.evidenceLab||{},primarySource:l.primarySource||{},deepReading:l.deepReading||{},first10:l.first10||{},beSurreal:l.beSurreal||{},skillBuilder:l.skillBuilder||{}});}
console.log('\nUnit 4 CED instructional contract');
for(const [topic,spec] of Object.entries(contract.topics)){
 let x;try{x=load(spec);}catch(e){failures.push(`Topic ${topic}: parse ${e.message}`);console.log(`  ${topic} FAIL parse: ${e.message}`);continue;}
 const misses=[];
 for(const scope of ['base','runtime']){
   const d=Array.isArray(x[scope].collegeBoardKeyConcepts)?x[scope].collegeBoardKeyConcepts:[];
   const codes=d.map(k=>String(k.code||''));
   spec.keyConcepts.forEach(k=>{if(!codes.includes(k))misses.push(`${scope} KC ${k}`);});
 }
 const targets=JSON.stringify([x.runtime.learningTargets||[],x.runtime.successCriteria||[]]);
 spec.targetCodes.forEach(k=>{if(!has(targets,k))misses.push(`target/criteria ${k}`);});
 (spec.forbiddenTargetCodes||[]).forEach(k=>{if(has(targets,k))misses.push(`forbidden target/criteria ${k}`);});
 const it=instruction(x.runtime);
 spec.evidence.forEach(c=>{if(!c.some(t=>has(it,t)))misses.push(`instruction ${c.join(' / ')}`);});
 console.log(`  ${topic} ${misses.length?'FAIL':'PASS'}${misses.length?' - '+misses.join('; '):''}`);
 if(misses.length)failures.push(`Topic ${topic}: ${misses.join('; ')}`);
}
if(failures.length){console.error(`\nUnit 4 CED gate failed (${failures.length}).`);failures.forEach(f=>console.error('  - '+f));process.exit(1);}
console.log('\nUnit 4 CED gate passed.');
