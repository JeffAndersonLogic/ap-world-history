#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert'),{execFileSync}=require('child_process');
const root=path.resolve(__dirname,'../..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
execFileSync(process.execPath,[path.join(root,'scripts/build-unit3-atlas.js'),'--check'],{stdio:'inherit'});
const context={window:{}};vm.runInNewContext(read('assets/data/unit3-network-atlas.js'),context);const data=context.window.BH_NETWORK_ATLAS;
function check(d){
 assert.equal(d.defaultTopic,'3.4');assert.deepEqual(Object.keys(d.topics),['3.1','3.2','3.3','3.4']);
 for(const [id,t] of Object.entries(d.topics)){
  assert(fs.existsSync(path.join(root,'unit-3',t.lesson)));assert(t.source.sourceLinks.length&&t.source.sourceNote);
  for(const key of ['prediction','explanation','checks','mapPrompt'])assert(!(key in t),'No assignment fields');
  for(const v of t.views){
   assert(v.frame&&v.places.length);
   const inside=ll=>ll.length===2&&ll.every(Number.isFinite)&&ll[0]>=v.frame[0][0]&&ll[0]<=v.frame[1][0]&&ll[1]>=v.frame[0][1]&&ll[1]<=v.frame[1][1];
   for(const p of v.places)assert(p.name&&p.detail&&inside(p.ll),'Markers in regional frame: '+id);
   for(const s of v.sets){assert(s.detail&&['silk','sea','desert'].includes(s.color));for(const line of s.paths)assert(line.length>1&&line.every(inside),'Relationship in regional frame: '+id);}
  }
 }
 const expansion=JSON.stringify(d.topics['3.1']);for(const name of ['Ottoman','Safavid','Mughal','Manchu','Kandahar','Songhai','Morocco'])assert(expansion.includes(name),'Expansion evidence: '+name);
 const admin=d.topics['3.2'].views.flatMap(v=>v.places).map(p=>p.name+' '+p.detail).join(' ');
 for(const name of ['devshirme','samurai','divine right','Islam','portraits','Sun Temple','mausolea','mosques','Versailles','zamindar','tax farming','tribute lists','Ming','silver','human sacrifice'])assert(admin.includes(name),'Administration evidence: '+name);
 const qing=d.topics['3.1'].views.find(v=>v.name==='Qing expansion before 1750');
 assert(qing.places.every(p=>p.ll[0]>85),'No post-1750 Xinjiang conquest marker');
 const belief=JSON.stringify(d.topics['3.3']);for(const name of ['Trent','1545','1563','Sunni','Shi','Guru Nanak','distinct religion'])assert(belief.includes(name),'Belief evidence: '+name);
 assert(d.topics['3.4'].views.every(v=>v.sets.length===0),'Comparison does not invent intercontinental routes');
}
check(data);
for(const [mutation,pattern] of [
 [d=>{d.topics['3.2'].views[1].frame=[[0,0],[30,40]];},/Markers in regional frame/],
 [d=>{d.topics['3.2'].views[0].places=d.topics['3.2'].views[0].places.filter(p=>!p.name.includes('samurai'));},/Administration evidence: samurai/],
 [d=>{d.topics['3.1'].checks=[];},/No assignment fields/],
 [d=>{d.topics['3.1'].views[2].places.push({name:'Xinjiang',ll:[80,40],detail:'Conquered in 1759'});},/No post-1750/]
]){const m=JSON.parse(JSON.stringify(data));mutation(m);assert.throws(()=>check(m),pattern);}
const hub=read('unit-3/index.html');assert(hub.includes('id="unit3-atlas-frame"'));assert(hub.indexOf('id="unit3-atlas-frame"')<hub.indexOf('id="topics"'));
const html=read('unit-3/network-atlas.html');assert(!/<textarea|<blockquote|reveal-map|send-to-map/.test(html));assert(!/localStorage|sessionStorage/.test(read('assets/js/behistorical-network-atlas.js')));
console.log('PASS Unit 3 coverage, geographic frames, chronology boundaries, visual-only hub, and negative controls.');
