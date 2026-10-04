#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert'),{execFileSync}=require('child_process');
const root=path.resolve(__dirname,'../..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
execFileSync(process.execPath,[path.join(root,'scripts/build-unit1-atlas.js'),'--check'],{stdio:'inherit'});
const context={window:{}};vm.runInNewContext(read('assets/data/unit1-network-atlas.js'),context);const data=context.window.BH_NETWORK_ATLAS;
function check(d){
 assert.equal(d.defaultTopic,'1.7');assert.deepEqual(Object.keys(d.topics),['1.1','1.2','1.3','1.4','1.5','1.6','1.7']);
 for(const [id,t] of Object.entries(d.topics)){
  assert(fs.existsSync(path.join(root,'unit-1',t.lesson)));assert(t.source.text&&t.source.sourceNote&&t.source.attribution);
  for(const key of ['prediction','explanation','checks','mapPrompt'])assert(!(key in t),'No assignment fields');
  for(const v of t.views){assert(v.frame&&v.places.length);for(const p of v.places){assert(p.detail&&p.name);assert(p.ll.every(Number.isFinite));assert(p.ll[0]>=v.frame[0][0]&&p.ll[0]<=v.frame[1][0]&&p.ll[1]>=v.frame[0][1]&&p.ll[1]<=v.frame[1][1],'Markers in regional frame: '+id);}for(const s of v.sets){assert(s.detail&&s.paths.length);assert(['silk','sea','desert'].includes(s.color));}}
 }
 assert.equal(d.topics['1.7'].views[0].sets.length,0,'No invented intercontinental routes');
 const africa=JSON.stringify(d.topics['1.5']);for(const name of ['Zimbabwe','Ethiopia','Hausa'])assert(africa.includes(name));
 const europe=JSON.stringify(d.topics['1.6']);for(const term of ['Judaism','Islam','decentralized','Free peasants','serfs'])assert(europe.includes(term));
 assert(JSON.stringify(d.topics['1.4']).includes('fifteenth century'));
}
check(data);const mutant=JSON.parse(JSON.stringify(data));mutant.topics['1.4'].views[0].frame=[[0,0],[30,40]];assert.throws(()=>check(mutant),/Markers in regional frame/,'An Afro-Eurasian-only Americas map must fail');
const assignment=JSON.parse(JSON.stringify(data));assignment.topics['1.1'].checks=[];assert.throws(()=>check(assignment),/No assignment fields/);
const hub=read('unit-1/index.html');assert(hub.includes('id="unit1-atlas-frame"')&&hub.includes('src="network-atlas.html?embed=1"'));assert(hub.indexOf('id="unit1-atlas-frame"')<hub.indexOf('id="topics"'));
const html=read('unit-1/network-atlas.html');assert(!/<textarea|reveal-map|send-to-map/.test(html));assert(!/localStorage|sessionStorage/.test(read('assets/js/behistorical-network-atlas.js')));
console.log('PASS seven-topic regional coverage, protected content spines, source context, visual-only hub, and negative controls.');
