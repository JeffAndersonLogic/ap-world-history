#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'assets', 'data');
const CHECK = process.argv.includes('--check');
const OUT_MD = path.join(ROOT, 'docs', 'COURSE-WIDE-DIAGNOSTIC.md');
const OUT_JSON = path.join(ROOT, 'docs', 'course-wide-diagnostic.json');

function exists(p){ return fs.existsSync(path.join(ROOT,p)); }
function read(p){ return fs.readFileSync(path.join(ROOT,p),'utf8'); }
function relExists(url, baseDir){
  if (!url || /^https?:/i.test(url)) return true;
  const clean = String(url).split('?')[0].split('#')[0];
  return fs.existsSync(path.normalize(path.join(ROOT, baseDir, clean)));
}
function stubDocument(){
  return {
    querySelector(){ return null; },
    querySelectorAll(){ return []; },
    createElement(){ return {setAttribute(){},style:{},appendChild(){}}; },
    head:{appendChild(){}},
    body:{classList:{add(){},remove(){},toggle(){}}}
  };
}
function loadLesson(file, renderer){
  const box = {
    window:{},
    document:stubDocument(),
    console:{log(){},warn(){},error(){}},
    URL, URLSearchParams,
    setTimeout(){}, clearTimeout(){},
    localStorage:{getItem(){return null;},setItem(){}}
  };
  const ctx = vm.createContext(box);
  vm.runInContext(fs.readFileSync(file,'utf8'),ctx,{filename:file});
  const before = JSON.parse(JSON.stringify(box.window.BEHISTORICAL_LESSON || {}));
  let rendererError = '';
  if (renderer && fs.existsSync(renderer)) {
    try { vm.runInContext(fs.readFileSync(renderer,'utf8'),ctx,{filename:renderer}); }
    catch(e){ rendererError = e.message; }
  }
  return {before, after:JSON.parse(JSON.stringify(box.window.BEHISTORICAL_LESSON || {})), rendererError};
}
function words(v){ return String(v||'').toLowerCase().replace(/<[^>]+>/g,' ').replace(/[^a-z0-9]+/g,' ').trim(); }
function hasPhrase(text, phrase){ return words(text).includes(words(phrase)); }
function unique(a){ return [...new Set(a.filter(Boolean))]; }
function listFiles(dir, re){
  const full=path.join(ROOT,dir);
  if(!fs.existsSync(full)) return [];
  return fs.readdirSync(full).filter(n=>re.test(n)).map(n=>path.join(dir,n));
}
function severity(red,yellow){
  if (red >= 2) return 'REBUILD';
  if (red === 1 || yellow >= 4) return 'REPAIR';
  if (yellow) return 'REVIEW';
  return 'CLEAN';
}
function escapePipe(s){ return String(s||'').replace(/\|/g,'\\|').replace(/\n/g,' '); }

const files = fs.readdirSync(DATA)
  .filter(n=>/^lesson-[1-9]-\d+-.+\.js$/.test(n))
  .filter(n=>!/-renderer-config\.js$/.test(n))
  .filter(n=>!/-standards-addon\.js$/.test(n))
  .sort();

const grouped = {};
for (const name of files){
  const m=name.match(/^lesson-([1-9])-(\d+)-(.+)\.js$/);
  if(!m) continue;
  const id=m[1]+'.'+Number(m[2]);
  (grouped[id] ||= []).push(name);
}

const results=[];
for (const id of Object.keys(grouped).sort((a,b)=>{
  const aa=a.split('.').map(Number), bb=b.split('.').map(Number);
  return aa[0]-bb[0] || aa[1]-bb[1];
})){
  const parts=id.split('.').map(Number), u=parts[0], t=parts[1];
  const names=grouped[id];
  const name=names[0];
  const lessonPath='assets/data/'+name;
  const rendererPath='assets/data/lesson-'+u+'-'+t+'-renderer-config.js';
  let loaded, loadError='';
  try { loaded=loadLesson(path.join(ROOT,lessonPath),path.join(ROOT,rendererPath)); }
  catch(e){ loadError=e.message; loaded={before:{},after:{},rendererError:''}; }
  const L=loaded.after||{}, B=loaded.before||{};
  const red=[], yellow=[], notes=[];
  if(names.length>1) yellow.push('multiple canonical lesson data files');
  if(loadError) red.push('lesson data does not evaluate: '+loadError);
  if(!exists(rendererPath)) red.push('missing renderer config');
  if(loaded.rendererError) red.push('renderer does not evaluate: '+loaded.rendererError);

  const title=(L.meta&&L.meta.title)||'Untitled';
  const slug=name.replace(/^lesson-\d+-\d+-/,'').replace(/\.js$/,'');
  const shell='unit-'+u+'/lesson-'+u+'-'+t+'-'+slug+'.html';
  if(!exists(shell)) red.push('missing lesson shell');

  const kcs=Array.isArray(L.collegeBoardKeyConcepts)?L.collegeBoardKeyConcepts:[];
  const baseKcs=Array.isArray(B.collegeBoardKeyConcepts)?B.collegeBoardKeyConcepts:[];
  if(!kcs.length) red.push('no runtime CED/key-concept metadata');
  const codes=unique(kcs.map(x=>x&&x.code));
  const baseCodes=unique(baseKcs.map(x=>x&&x.code));
  if(baseCodes.length && JSON.stringify(baseCodes)!==JSON.stringify(codes)) yellow.push('renderer changes canonical KC code set');
  if(baseKcs.length && JSON.stringify(baseKcs)!==JSON.stringify(kcs)) notes.push('renderer overrides canonical CED metadata; informational unless KC codes change');

  const targets=Array.isArray(L.learningTargets)?L.learningTargets:[];
  const criteria=Array.isArray(L.successCriteria)?L.successCriteria:[];
  if(!targets.length) red.push('missing learning targets');
  if(!criteria.length) red.push('missing success criteria');
  const mapped=unique(targets.concat(criteria).flatMap(x=>String((x&&x.kc)||'').match(/KC-[A-Za-z0-9.]+/g)||[]));
  for(const c of mapped) if(!codes.includes(c)) yellow.push('target/criteria KC not in runtime CED: '+c);

  const checkpoints=Array.isArray(L.checkpoints)?L.checkpoints:[];
  if(checkpoints.length<2) yellow.push('fewer than two checkpoints');

  const first10=L.first10&&L.first10.embedUrl?String(L.first10.embedUrl).split('?')[0]:'';
  if(!first10) red.push('missing First & 10 link');
  else if(!relExists(first10,'unit-'+u)) red.push('broken First & 10 link');

  const deep=L.deepReading&&L.deepReading.url?String(L.deepReading.url).split('?')[0]:'';
  if(!deep) yellow.push('missing Deep Reading link');
  else if(!relExists(deep,'unit-'+u)) red.push('broken Deep Reading link');

  const room=L.beInTheRoom&&L.beInTheRoom.url?String(L.beInTheRoom.url).split('?')[0]:'';
  if(room && !relExists(room,'unit-'+u)) red.push('broken BeInTheRoom link');
  if(!room) yellow.push('no BeInTheRoom scenario linked');

  const readingSource='scripts/lib/reading-content/unit-'+u+'.js';
  if(!exists(readingSource)) yellow.push('no canonical Unit '+u+' First & 10 source module');
  const deepSource='scripts/lib/deep-reading-content/topic-'+u+'-'+t+'.js';
  if(!exists(deepSource)) yellow.push('no canonical Deep Reading source module');

  const examples=unique(kcs.flatMap(x=>Array.isArray(x&&x.illustrativeExamples)?x.illustrativeExamples:[]));
  let readingText='';
  const firstPages=listFiles('unit-'+u,new RegExp('^first-and-10-topic-'+u+'-'+t+'-.*\\.html$','i')).filter(p=>!/-capture\.html$/i.test(p));
  const deepPages=listFiles('unit-'+u,new RegExp('^deep-reading-topic-'+u+'-'+t+'-.*\\.html$','i'));
  for(const p of firstPages.concat(deepPages)) readingText += '\n'+read(p);
  const matched=examples.filter(e=>hasPhrase(readingText,e));
  const trace=examples.length?Math.round(100*matched.length/examples.length):100;
  notes.push('reading example trace '+trace+'% ('+matched.length+'/'+examples.length+'); informational only');

  results.push({
    id,unit:u,topic:t,title,lessonPath,rendererPath,shell,
    status:severity(red.length,yellow.length),red,yellow,notes,
    codes,examples,trace,
    surfaces:{
      lessonShell:exists(shell),renderer:exists(rendererPath),
      first10:Boolean(first10)&&relExists(first10,'unit-'+u),
      deepReading:Boolean(deep)&&relExists(deep,'unit-'+u),
      beInTheRoom:Boolean(room)&&relExists(room,'unit-'+u),
      readingSource:exists(readingSource),deepReadingSource:exists(deepSource)
    }
  });
}

const statusOrder=['REBUILD','REPAIR','REVIEW','CLEAN'];
const counts=Object.fromEntries(statusOrder.map(s=>[s,results.filter(r=>r.status===s).length]));
const units={};
for(const r of results){
  units[r.unit] ||= {topics:0,REBUILD:0,REPAIR:0,REVIEW:0,CLEAN:0};
  units[r.unit].topics++; units[r.unit][r.status]++;
}

const unit2Control=results.filter(r=>r.unit===2);
const referenceBaselinePass=unit2Control.length===7 && unit2Control.every(r=>r.status==='CLEAN');
const calibration=['3.2','8.4'].map(id=>results.find(r=>r.id===id)).filter(Boolean);
const calibrationPass=referenceBaselinePass && calibration.length===2 && calibration.every(r=>r.status!=='REBUILD');

let md='# Course-Wide BeHistorical Diagnostic\n\n';
md+='**Purpose:** a read-only risk map using the Unit 2 reference-standard categories before any mass repair. This is **not** a blanket CED certification. It identifies where deeper CED/source review and human instructional review should be concentrated.\n\n';
md+='## Calibration\n\n';
md+='Known-good control: certified Unit 2 must return CLEAN on all seven topics. Control '+(referenceBaselinePass?'PASS':'FAIL')+'. The framework was also calibrated on Topic 3.2 (early-course land-empire administration) and Topic 8.4 (late-course dual-objective communism/redistribution). Overall calibration '+(calibrationPass?'PASS':'NEEDS REVIEW')+'.\n\n';
md+='| Topic | Status | Red flags | Review flags |\n|---|---|---:|---:|\n';
for(const r of calibration) md+='| '+r.id+' '+escapePipe(r.title)+' | '+r.status+' | '+r.red.length+' | '+r.yellow.length+' |\n';

md+='\n## Course heat map\n\n';
md+='**Totals:** '+results.length+' topics · '+counts.REBUILD+' Rebuild · '+counts.REPAIR+' Repair · '+counts.REVIEW+' Review · '+counts.CLEAN+' Clean\n\n';
md+='| Unit | Topics | Rebuild | Repair | Review | Clean |\n|---:|---:|---:|---:|---:|---:|\n';
for(const u of Object.keys(units).sort((a,b)=>Number(a)-Number(b))){
  const x=units[u]; md+='| '+u+' | '+x.topics+' | '+x.REBUILD+' | '+x.REPAIR+' | '+x.REVIEW+' | '+x.CLEAN+' |\n';
}
md+='\n## Topic-by-topic diagnostic\n\n';
md+='| Topic | Title | Status | Main findings | Reading trace |\n|---|---|---|---|---:|\n';
for(const r of results){
  const findings=r.red.map(x=>'RED: '+x).concat(r.yellow.map(x=>'Review: '+x)).slice(0,4);
  md+='| '+r.id+' | '+escapePipe(r.title)+' | **'+r.status+'** | '+escapePipe(findings.join('; ')||'No automated structural flags')+' | '+r.trace+'% |\n';
}
md+='\n## How to interpret this report\n\n';
md+='- **REBUILD:** multiple structural/contract failures. Deep audit before teaching.\n';
md+='- **REPAIR:** at least one major break or several coherence risks. Repair before Teaching OS conversion.\n';
md+='- **REVIEW:** structure is present, but one or more drift/source-of-truth signals need a human/CED check.\n';
md+='- **CLEAN:** no automated structural flags. This does **not** replace human instructional review or independent CED verification.\n\n';
md+='## Next audit pass\n\n';
md+='1. Deep-audit Unit 3 first, using the actual CED governing source and the five-part Unit 2 standard.\n';
md+='2. Then deep-audit every REBUILD/REPAIR topic course-wide, regardless of unit order.\n';
md+='3. Convert verified topic spines into locked per-unit CED/coherence contracts, so future changes are caught automatically.\n';
md+='4. Keep human instructional review separate from automated certification.\n\n';
md+='Generated by node scripts/audit-course.js.\n';

const json=JSON.stringify({generatedAt:new Date().toISOString(),referenceBaselinePass,calibrationPass,counts,units,results},null,2)+'\n';

if(CHECK){
  const oldMd=fs.existsSync(OUT_MD)?fs.readFileSync(OUT_MD,'utf8'):'';
  const oldJson=fs.existsSync(OUT_JSON)?fs.readFileSync(OUT_JSON,'utf8'):'';
  const stable=s=>s.replace(/"generatedAt": "[^"]+"/,'"generatedAt": "<ignored>"');
  if(oldMd!==md || stable(oldJson)!==stable(json)){
    console.error('DRIFT: course diagnostic is stale. Run node scripts/audit-course.js');
    process.exit(1);
  }
  console.log('OK: course-wide diagnostic is current');
}else{
  fs.writeFileSync(OUT_MD,md);
  fs.writeFileSync(OUT_JSON,json);
  console.log('Wrote '+path.relative(ROOT,OUT_MD));
  console.log('Wrote '+path.relative(ROOT,OUT_JSON));
  console.log(counts);
}
