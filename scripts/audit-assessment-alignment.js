#!/usr/bin/env node
'use strict';

const fs=require('fs');
const path=require('path');
const vm=require('vm');
const ROOT=path.resolve(__dirname,'..');
const DATA=path.join(ROOT,'assets','data');
const OUT=path.join(ROOT,'docs','ASSESSMENT-ALIGNMENT-DIAGNOSTIC.md');

const STOP=new Set((
  'i can explain describe identify compare construct use specific at least one two how why what which '+
  'the a an and or of to in on from with by for as is are was were be been being this that these those '+
  'historical history topic unit evidence example examples major broader pattern patterns relationship '+
  'students student response argument claim criteria target learning success land based empire empires '+
  'ruler rulers state states period world system systems approach approaches method methods different '+
  'including include using between across their its into over through about during within'
).split(/\s+/));

function normalize(s){return String(s||'').toLowerCase().replace(/[’‘]/g,"'").replace(/[^a-z0-9' -]+/g,' ').replace(/\s+/g,' ').trim();}
function tokens(s){
  return [...new Set(normalize(s).split(/\s+/).filter(w=>w.length>=4&&!STOP.has(w)&&!(/^\d+$/.test(w))))];
}
function sandbox(){
 const box={window:{},document:{querySelector:()=>null,createElement:()=>({setAttribute(){},appendChild(){},style:{}}),head:{appendChild(){}}}};
 box.globalThis=box; return vm.createContext(box);
}
function load(topic,slug){
 const key=topic.replace('.','-'), ctx=sandbox();
 const lesson=path.join(DATA,'lesson-'+key+'-'+slug+'.js');
 const renderer=path.join(DATA,'lesson-'+key+'-renderer-config.js');
 vm.runInContext(fs.readFileSync(lesson,'utf8'),ctx,{filename:lesson});
 if(fs.existsSync(renderer)) vm.runInContext(fs.readFileSync(renderer,'utf8'),ctx,{filename:renderer});
 return ctx.window.BEHISTORICAL_LESSON||{};
}
function lessonFiles(){
 return fs.readdirSync(DATA).filter(n=>/^lesson-[1-9]-\d+-.+\.js$/.test(n)&&!/-renderer-config\.js$/.test(n)&&!/-standards-addon\.js$/.test(n));
}
function checkpointText(cp){
 return JSON.stringify({
  title:cp.title||'',subtitle:cp.subtitle||'',cardDesc:cp.cardDesc||'',prompt:cp.prompt||'',
  terms:cp.terms||[],focus:cp.focus||[]
 });
}
function meaningfulOverlap(criterion,cpText){
 const need=tokens(criterion), got=new Set(tokens(cpText));
 const hit=need.filter(x=>got.has(x));
 return {need,hit,ratio:need.length?hit.length/need.length:1};
}

const rows=[], unit2=[];
for(const file of lessonFiles()){
 const m=file.match(/^lesson-([1-9])-(\d+)-(.+)\.js$/); if(!m)continue;
 const topic=m[1]+'.'+Number(m[2]), slug=m[3];
 let L; try{L=load(topic,slug);}catch(e){continue;}
 const cps=Array.isArray(L.checkpoints)?L.checkpoints:[];
 const criteria=Array.isArray(L.successCriteria)?L.successCriteria:[];
 for(let ci=0;ci<criteria.length;ci++){
  const criterion=criteria[ci]||{}, text=criterion.criteria||'';
  const linked=cps.filter(cp=>(cp.successCriteria||[]).includes(text));
  if(!linked.length){
    const row={topic,title:L.meta&&L.meta.title||'',criterion:text,status:'REVIEW',reason:'success criterion not linked to any checkpoint',best:0,hits:[]};
    rows.push(row); if(m[1]==='2')unit2.push(row); continue;
  }
  let best={ratio:0,hit:[],need:[]}, bestCp='';
  for(const cp of linked){
    const o=meaningfulOverlap(text,checkpointText(cp));
    if(o.ratio>best.ratio){best=o;bestCp=cp.title||'';}
  }
  const pass=best.hit.length>=2 || best.ratio>=0.20;
  const row={topic,title:L.meta&&L.meta.title||'',criterion:text,status:pass?'PASS':'REVIEW',reason:pass?'':'checkpoint prompt/focus/terms weakly match linked success criterion',best:Number(best.ratio.toFixed(2)),hits:best.hit,checkpoint:bestCp};
  rows.push(row); if(m[1]==='2')unit2.push(row);
 }
}

const unit2Pass=unit2.every(r=>r.status==='PASS');
const flagged=rows.filter(r=>r.status==='REVIEW');
const byTopic={};
for(const r of flagged)(byTopic[r.topic]||=[]).push(r);

let md='# Assessment Alignment Diagnostic\n\n';
md+='**Purpose:** triage for the failure mode found in Unit 3: a checkpoint can declare that it assesses a success criterion while its actual prompt/focus/terms ask students to do something else. This lexical-semantic screen is deliberately conservative and requires human review before any repair.\n\n';
md+='**Known-good control:** certified Unit 2 '+(unit2Pass?'PASS':'FAIL')+'. If Unit 2 does not pass, this diagnostic must not be trusted.\n\n';
md+='**Course result:** '+flagged.length+' criterion-level review flag'+(flagged.length===1?'':'s')+' across '+Object.keys(byTopic).length+' topics.\n\n';
md+='| Topic | Checkpoint | Flagged success criterion | Shared anchors |\n|---|---|---|---|\n';
const topicKeys=Object.keys(byTopic).sort((a,b)=>{const x=a.split('.').map(Number),y=b.split('.').map(Number);return x[0]-y[0]||x[1]-y[1];});
for(const topic of topicKeys){
 for(const r of byTopic[topic]){
  md+='| '+topic+' '+String(r.title).replace(/\|/g,'\\|')+' | '+String(r.checkpoint||'—').replace(/\|/g,'\\|')+' | '+String(r.criterion).replace(/\|/g,'\\|')+' | '+(r.hits.join(', ')||'none')+' |\n';
 }
}
md+='\n## Interpretation\n\n';
md+='A flag means **review the checkpoint**, not “the lesson is wrong.” The diagnostic intentionally ignores the success-criterion text embedded in checkpoint metadata and checks only what the student is actually asked to do: title, description, prompt, terms, and focus. Human/CED review decides whether a flag is real.\n';
fs.writeFileSync(OUT,md);
console.log('Unit 2 control: '+(unit2Pass?'PASS':'FAIL'));
console.log('Flagged '+flagged.length+' criteria across '+Object.keys(byTopic).length+' topics');
if(!unit2Pass) process.exit(1);
