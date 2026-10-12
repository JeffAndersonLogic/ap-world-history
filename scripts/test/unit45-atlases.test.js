#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),assert=require('assert'),{execFileSync}=require('child_process');
const root=path.resolve(__dirname,'../..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const content=u=>require('../lib/unit'+u+'-atlas-content');
function check(d,u){
 const n=u===4?8:10;
 assert.deepEqual(Object.keys(d.topics),Array.from({length:n},(_,i)=>u+'.'+(i+1)),'Complete topic membership');
 assert.equal(d.defaultTopic,u+'.'+n);
 for(const [id,t] of Object.entries(d.topics)){
  assert.equal(t.id,id);assert(t.title&&t.focus&&t.period);
  assert(fs.existsSync(path.join(root,'unit-'+u,t.lesson)),'Real lesson destination: '+t.lesson);
  assert(t.source.sourceLinks.length>=2&&t.source.sourceNote);
  assert(t.source.sourceLinks.every(l=>l.label&&/^https:\/\//.test(l.url)),'Source links');
  for(const key of ['prediction','explanation','checks','mapPrompt'])assert(!(key in t),'No assignment fields');
  assert(t.views.length>=1);
  for(const v of t.views){
   assert(v.places.length&&v.frame&&v.name);
   const inside=ll=>ll.length===2&&ll.every(Number.isFinite)&&ll[0]>=v.frame[0][0]&&ll[0]<=v.frame[1][0]&&ll[1]>=v.frame[0][1]&&ll[1]<=v.frame[1][1];
   for(const p of v.places)assert(p.name&&p.detail&&inside(p.ll),'Marker in frame: '+id+' '+p.name);
   for(const s of v.sets){assert(s.key&&s.detail&&['sea','silk','desert'].includes(s.color));for(const line of s.paths)assert(line.length>=2&&line.every(inside),'Connection in frame: '+id);}
  }
 }
 const text=JSON.stringify(d);
 const names=u===4?['1492','1498','mita','encomienda','hacienda','Manila','silver','Maroon','Pueblo','Manchu','serf','Gujarati','syncretic']:['1791','1804','Dessalines','1868','1865','1861','1871','1848','coal','steam','telegraph','limited','Marx','Ottoman','Qing','women'];
 for(const name of names)assert(text.toLowerCase().includes(name.toLowerCase()),'Reviewed evidence: '+name);
 if(u===4)assert(text.includes('not complete isolation'),'Trade restrictions are qualified');
 if(u===5)assert(text.includes('not shown as a nineteenth-century corporation'),'No Unilever chronology error');
}
// Prove validators reject broken input before accepting valid content.
for(const u of [4,5]){
 for(const [mutation,pattern] of [
  [d=>{delete d.topics[u+'.1'];},/Complete topic membership/],
  [d=>{d.topics[u+'.1'].views[0].places[0].ll=[999,90];},/Marker in frame/],
  [d=>{d.topics[u+'.1'].checks=[];},/No assignment fields/],
  [d=>{d.topics[u+'.1'].lesson='missing-lesson.html';},/Real lesson destination/],
  [d=>{d.topics[u+'.1'].source.sourceLinks=[];},/assert/]
 ]){const bad=JSON.parse(JSON.stringify(content(u)));mutation(bad);assert.throws(()=>check(bad,u),pattern);}
 check(content(u),u);
 const hub=read('unit-'+u+'/index.html'),html=read('unit-'+u+'/network-atlas.html');
 assert(hub.includes('id="unit'+u+'-atlas-frame"'));assert(hub.indexOf('id="unit'+u+'-atlas-frame"')<hub.indexOf('id="topics"'));
 assert(html.includes('unit'+u+'-network-atlas.js'));assert(!/<textarea|send-to-map|reveal-map/.test(html));
}
// Prove the reproducibility check rejects a tampered generated file, then restore it.
const file=path.join(root,'assets/data/unit4-network-atlas.js'),original=fs.readFileSync(file,'utf8');
try{fs.writeFileSync(file,original+'// deliberate negative control\n');assert.throws(()=>execFileSync(process.execPath,[path.join(root,'scripts/build-unit45-atlases.js'),'--check'],{stdio:'pipe'}));}finally{fs.writeFileSync(file,original);}
execFileSync(process.execPath,[path.join(root,'scripts/build-unit45-atlases.js'),'--check'],{stdio:'inherit'});
assert(!/localStorage|sessionStorage/.test(read('assets/js/behistorical-network-atlas.js')));
console.log('PASS Units 4–5: topic coverage, destinations, geographic frames, sources, chronology guardrails, visual-only hubs, drift detection, and negative controls.');
