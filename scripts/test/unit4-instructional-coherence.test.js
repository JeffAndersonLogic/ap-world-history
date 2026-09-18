#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm');
const contract=require('../lib/unit4-coherence-contract');
const ROOT=path.resolve(__dirname,'..','..'),failures=[];
function norm(v){return String(v||'').toLowerCase().replace(/[–—]/g,'-').replace(/[’‘]/g,"'").replace(/[^a-z0-9.'\- ]+/g,' ').replace(/\s+/g,' ').trim();}
function has(t,p){return norm(t).includes(norm(p));}
function missing(t,cs){return cs.filter(c=>!c.some(x=>has(t,x)));}
function key(t){return t.replace('.','-');}
function box(){const b={window:{},document:{querySelector:()=>null,querySelectorAll:()=>[],createElement:()=>({setAttribute(){},appendChild(){},style:{}}),head:{appendChild(){}},body:{classList:{add(){},remove(){},toggle(){}}}},setTimeout(){},clearTimeout(){}};b.globalThis=b;return vm.createContext(b);}
function load(t,slug){const c=box(),k=key(t),lp=path.join(ROOT,'assets','data',`lesson-${k}-${slug}.js`),rp=path.join(ROOT,'assets','data',`lesson-${k}-renderer-config.js`);vm.runInContext(fs.readFileSync(lp,'utf8'),c,{filename:lp});vm.runInContext(fs.readFileSync(rp,'utf8'),c,{filename:rp});return c.window.BEHISTORICAL_LESSON||{};}
console.log('\nUnit 4 instructional coherence gate');
for(const [topic,spec] of Object.entries(contract.topics)){
 const k=key(topic),first=`unit-4/first-and-10-topic-${k}-${spec.slug}.html`,deep=`unit-4/deep-reading-topic-${k}-${spec.slug}.html`;
 const req=[`assets/data/lesson-${k}-${spec.slug}.js`,`assets/data/lesson-${k}-renderer-config.js`,first,deep].concat(spec.beInTheRoom?[spec.beInTheRoom]:[]);
 const mf=req.filter(r=>!fs.existsSync(path.join(ROOT,r)));if(mf.length){failures.push(`${topic}: missing ${mf.join(', ')}`);console.log(`  ${topic} FAIL missing`);continue;}
 let l;try{l=load(topic,spec.slug);}catch(e){failures.push(`${topic}: parse ${e.message}`);console.log(`  ${topic} FAIL parse`);continue;}
 const misses={renderer:missing(JSON.stringify(l),spec.rendererRequired),first10:missing(fs.readFileSync(path.join(ROOT,first),'utf8'),spec.first10Required),deepReading:missing(fs.readFileSync(path.join(ROOT,deep),'utf8'),spec.deepReadingRequired),assessment:missing(JSON.stringify(l.checkpoints||[]),spec.assessmentRequired)};
 if(spec.beInTheRoom){const room=l.beInTheRoom&&l.beInTheRoom.url?String(l.beInTheRoom.url).replace(/^\.\.\//,''):'';if(room!==spec.beInTheRoom)misses.beInTheRoom=[[spec.beInTheRoom]];}
 const labels=[];for(const [surface,cs] of Object.entries(misses)){if(cs&&cs.length)labels.push(`${surface}: ${cs.map(c=>c.join(' / ')).join(', ')}`);}
 console.log(`  ${topic} ${labels.length?'FAIL '+labels.join('; '):'PASS'}`);if(labels.length)failures.push(`${topic}: ${labels.join('; ')}`);
}
if(failures.length){console.error(`\nUnit 4 coherence gate failed (${failures.length}).`);failures.forEach(f=>console.error('  - '+f));process.exit(1);}
console.log('\nUnit 4 coherence gate passed.');
