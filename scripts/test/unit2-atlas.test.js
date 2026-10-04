#!/usr/bin/env node
'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const {execFileSync}=require('child_process');
const root=path.resolve(__dirname,'../..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
execFileSync(process.execPath,[path.join(root,'scripts/build-unit2-atlas.js'),'--check'],{stdio:'inherit'});
const sandbox={window:{}};vm.runInNewContext(read('assets/data/unit2-network-atlas.js'),sandbox);
const topics=sandbox.window.BH_UNIT2_ATLAS.topics;assert.equal(Object.keys(topics).length,7);
for(const [id,t] of Object.entries(topics)){
 assert(t.source.text&&t.source.attribution&&t.source.sourceNote&&t.source.sourceLinks.length,'Source transparency: '+id);
 assert(fs.existsSync(path.join(root,'unit-2',t.lesson)),'Lesson link: '+id);
 for(const field of ['prediction','explanation','transfer','checks','sourceQuestion','mapPrompt'])assert(!(field in t),'No assignment field: '+field);
 for(const view of t.views){assert(view.places.length,'Places: '+id);assert(!('prompt' in view));for(const p of view.places)assert(p.ll.length===2&&p.ll.every(Number.isFinite),'Coordinate: '+id);for(const set of view.sets)assert(set.detail&&set.paths.length,'Connection information: '+id);}
 const base=read('assets/data/'+t.lesson.replace('.html','.js'));assert(!base.includes('atlasUrl'),'Atlas is not a module: '+id);
}
assert.equal(topics['2.6'].views[0].sets.length,0,'No invented crop itinerary.');assert(topics['2.3'].period.includes('Portuguese routes are excluded'));assert(topics['2.2'].views.some(v=>v.name==='Knowledge and writing'));
function visualOnly(html,script){assert(!/<textarea|data-draft|send-to-map|reveal-map|name="atlas-mode"/.test(html),'No assignment or reveal controls');assert(!/localStorage|sessionStorage|writeMap|recordWrite/.test(script),'Visual must not touch student storage');}
const html=read('unit-2/network-atlas.html'),script=read('assets/js/behistorical-network-atlas.js');visualOnly(html,script);
assert.throws(()=>visualOnly(html+'<textarea></textarea>',script),undefined,'A writing-box regression must fail');
assert.throws(()=>visualOnly(html,script+'localStorage.setItem("key","value")'),undefined,'A student-storage mutation must fail');
const hub=read('unit-2/index.html');assert(hub.includes('id="unit2-atlas-frame"')&&hub.includes('src="network-atlas.html?embed=1"'));assert(!read('assets/js/behistorical-topic-renderer-v1.js').includes('atlasUrl'));
function safeEmbed(script){
 const frame={contentWindow:{},style:{height:'500px'}};let handler;
 const window={location:{origin:'https://course.example'},addEventListener:(name,fn)=>{handler=fn;}};
 vm.runInNewContext(script,{document:{getElementById:()=>frame},window});
 const data={type:'BH_ATLAS_HEIGHT',height:900};
 handler({origin:window.location.origin,source:{},data});assert.equal(frame.style.height,'500px','Other senders cannot resize the map');
 handler({origin:'https://other.example',source:frame.contentWindow,data});assert.equal(frame.style.height,'500px','Other origins cannot resize the map');
 handler({origin:window.location.origin,source:frame.contentWindow,data});assert.equal(frame.style.height,'902px','The expected frame can resize');
}
const embed=read('assets/js/behistorical-atlas-embed.js');safeEmbed(embed);assert.throws(()=>safeEmbed(embed.replace('||event.source!==frame.contentWindow','')),undefined,'An unchecked sender must fail the embed test');
console.log('PASS seven-topic visual content, canonical sources, no assignment/storage workflow, hub integration, and negative controls.');
