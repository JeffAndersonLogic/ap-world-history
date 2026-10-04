#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const {execFileSync}=require('child_process');
const root=path.resolve(__dirname,'../..');
const coreFile=path.join(root,'assets/js/behistorical-network-atlas.js');
const actual=require(coreFile);
function storage(){const values={};return{getItem:k=>values[k]||null,setItem:(k,v)=>{values[k]=String(v);},values};}
function model(core){
 const local=storage(),store=core.createStore(local);
 store.update('2.1',{prediction:'First thought'});store.update('2.3',{prediction:'Different topic'});
 store.update('2.1',{explanation:'A mechanism'});
 assert.equal(store.read('2.1').prediction,'First thought','A second field must preserve the first.');
 assert.equal(store.read('2.3').prediction,'Different topic','Topics must remain separate.');
 assert.equal(core.createStore(local).read('2.1').explanation,'A mechanism','Reload must restore a saved explanation.');
 assert.equal(core.mergeMap('Existing map writing','Atlas writing'),'Existing map writing\n\nAtlas writing','Import must preserve earlier map writing.');
 assert.equal(core.mergeMap('Existing map writing\n\nAtlas writing','New atlas writing','Atlas writing'),'Existing map writing\n\nNew atlas writing','Re-import replaces the known earlier atlas portion, not other writing.');
 assert.equal(core.mergeMap('Atlas writing','Atlas writing'),'Atlas writing','Import must be idempotent.');
 let failure=0;const blocked=core.createStore({getItem(){throw Error('blocked');},setItem(){throw Error('blocked');}},()=>failure++);
 blocked.update('2.1',{explanation:'Still here'});assert.equal(blocked.read('2.1').explanation,'Still here','Failed persistence must retain this tab’s writing.');assert(failure>0);assert.equal(blocked.writeMap('2.1','draft'),false,'Failed storage must not claim a successful import.');
 const bad=storage();bad.values[core.PREFIX+'2.1']='{broken';const corrupted=core.createStore(bad);corrupted.update('2.1',{prediction:'New session'});assert.equal(bad.values[core.PREFIX+'2.1'],'{broken','Corrupt storage must not be silently overwritten.');
 const detail={title:'Topic',prediction:'Predict',sourceQuestion:'Source',explanation:'Explain',transfer:'Recall'};
 const text=core.responseText('2.1',detail,{prediction:'P',explanation:'E',transfer:'T'});assert(text.includes('P')&&text.includes('E')&&text.includes('T'));assert.equal(core.responseText('2.1',detail,{}),'');
}
model(actual);
// Negative controls run these assertions against actual-code mutations.
const source=fs.readFileSync(coreFile,'utf8');
for(const [name,from,to] of [
 ['destructive Map Check import',"return [existing.trimEnd(),text].filter(Boolean).join('\\n\\n');","return text;"],
 ['lost in-session writing',"return cleanRecord(memory[topic]||{});","return {};"],
 ['topic draft collision',"PREFIX+topic","PREFIX+'all'"]
]){
 assert(source.includes(from),'Mutation target missing: '+name);
 const sandbox={module:{exports:{}},globalThis:{}};vm.runInNewContext(source.replaceAll(from,to),sandbox);
 assert.throws(()=>model(sandbox.module.exports),undefined,'Negative control must fail: '+name);
 console.log('PASS negative control: '+name);
}
execFileSync(process.execPath,[path.join(root,'scripts/build-unit2-atlas.js'),'--check'],{stdio:'inherit'});
const sandbox={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'assets/data/unit2-network-atlas.js'),'utf8'),sandbox);
const topics=sandbox.window.BH_UNIT2_ATLAS.topics;assert.equal(Object.keys(topics).length,7);
for(const [id,t] of Object.entries(topics)){
 assert(t.source.text&&t.source.attribution&&t.source.sourceNote,'Source transparency: '+id);
 assert(t.source.sourceLinks.length,'Source link: '+id);
 assert(fs.existsSync(path.join(root,'unit-2',t.lesson)),'Lesson link: '+id);
 for(const view of t.views){assert(view.places.length,'Places: '+id);for(const p of view.places)assert(p.ll.length===2&&p.ll.every(Number.isFinite),'Coordinate: '+id);}
 const base=fs.readFileSync(path.join(root,'assets/data',t.lesson.replace('.html','.js')),'utf8');assert(base.includes(`network-atlas.html?topic=${id}`),'Topic integration: '+id);
}
assert.equal(topics['2.6'].views[0].sets.length,0,'Crop markers must not invent exact transmission paths.');
assert(topics['2.3'].period.includes('Portuguese routes are excluded'));
assert(topics['2.3'].sourceQuestion.includes('Kilwa')&&topics['2.3'].sourceQuestion.includes('merchant'));
assert(topics['2.3'].source.text.includes('merchant')&&topics['2.3'].source.text.includes('Kilwa'),'The sourcing task must name observations in the displayed source.');
assert(!topics['2.3'].sourceQuestion.includes('host-broker'),'Do not ask for Mogadishu evidence in the Kilwa source.');
function sourceTasksMatch(bank){
 for(const [id,cue] of Object.entries({'2.1':'Yamb','2.3':'Kilwa','2.4':'salt','2.5':'Cardinals','2.6':'Florence'})){
  assert(bank[id].sourceQuestion.includes(cue),'Task must identify the actual source: '+id);
  assert(bank[id].source.text.includes(cue),'Task evidence must exist in the displayed passage: '+id);
 }
}
sourceTasksMatch(topics);
const mismatched=JSON.parse(JSON.stringify(topics));mismatched['2.3'].sourceQuestion='Identify a host-broker practice in Mogadishu.';
assert.throws(()=>sourceTasksMatch(mismatched),undefined,'A source-task mismatch must fail the content check.');
console.log('PASS negative control: source task references the wrong passage.');
assert(topics['2.2'].views.some(v=>v.name==='Knowledge and writing'));
assert(fs.readFileSync(path.join(root,'unit-2/index.html'),'utf8').includes('network-atlas.html'));
console.log('PASS atlas content, persistence, failed storage, re-import, sources, and seven lesson links.');
