#!/usr/bin/env node
'use strict';
// The live Class Pulse rubric must cite the College Board CED, read from scripts/lib/ced-source/,
// never from a copy: its learning objective and page, and for every criterion a Key Concept of
// that topic or the topic's suggested skill. The lesson's learning targets for the checkpoint
// must be covered by those Key Concepts. Each rubric's contract must still build from its lesson.
const assert=require('assert/strict'),fs=require('fs'),path=require('path'),vm=require('vm');
const rubrics=require('../lib/class-pulse/rubrics'),config=require('../lib/class-pulse/config'),contract=require('../lib/skilllens-pilot-contract');
const clone=v=>JSON.parse(JSON.stringify(v));
function lessonOf(rubric){const sandbox={window:{},document:{querySelector:()=>null,createElement:()=>({style:{},setAttribute(){},appendChild(){}}),head:{appendChild(){}}}};vm.createContext(sandbox);for(const f of rubric.lessonFiles)vm.runInContext(fs.readFileSync(path.join(__dirname,'../..',f),'utf8'),sandbox,{filename:f});return sandbox.window.BEHISTORICAL_LESSON;}
function check(rubric){
 assert(rubric.ced,'the live rubric cites no CED topic');
 const file=path.join(__dirname,'../lib/ced-source/unit-'+rubric.ced.unit+'.js');
 assert(fs.existsSync(file),'no CED source file for unit '+rubric.ced.unit+'; transcribe it from the PDF first');
 const topic=require(file).topics[rubric.ced.topic];
 assert(topic,'CED topic '+rubric.ced.topic+' is not in the source file');
 assert.equal(rubric.ced.learningObjective,topic.learningObjective.code,'learning objective does not match the CED');
 assert.equal(rubric.ced.page,topic.page,'page does not match the CED');
 const allowed=new Set([...topic.keyConcepts.map(k=>k.code),'skill:'+topic.suggestedSkill.code]);
 for(const c of rubric.assessment.criteria)assert(allowed.has(c.ced),'criterion '+c.id+' cites '+c.ced+', which is not a Key Concept or the suggested skill of CED '+rubric.ced.topic);
 const cited=new Set(rubric.assessment.criteria.map(c=>c.ced)),lesson=lessonOf(rubric);
 for(const i of rubric.targets)assert(cited.has(lesson.learningTargets[i].kc),'learning target '+(i+1)+' ('+lesson.learningTargets[i].kc+') is not rated by any criterion');
}
const live=rubrics[config.assignmentId];
assert(live,'config.assignmentId names no rubric');
const mutants=[
 ['a criterion cites a Key Concept from another topic',r=>{r.assessment.criteria[0].ced='KC-4.3.I.C';}],
 ['a criterion cites the wrong skill',r=>{r.assessment.criteria[2].ced='skill:1.B';}],
 ['the learning objective does not match',r=>{r.ced.learningObjective='Unit 3: Learning Objective A';}],
 ['the rubric cites no CED topic',r=>{delete r.ced;}],
 ['a learning target goes unrated',r=>{r.assessment.criteria=r.assessment.criteria.filter(c=>c.id!=='revenue');}],
];
for(const [name,mutate] of mutants){const r=clone(live);mutate(r);assert.throws(()=>check(r),assert.AssertionError,'negative control not caught: '+name);}
check(live);
for(const id of Object.keys(rubrics)){const c=contract(id);assert.equal(c.assignmentId,id);assert.match(c.contractId,/^[0-9a-f]{64}$/);assert(c.criteria.length>=1&&c.criteria.every(x=>x.essential===true));}
assert(!rubrics['2.3-checkpoint-1'].ced,'the practice rubric must not be mistaken for a CED-checked live rubric');
// Choosing a checkpoint for the teacher view must not change the lesson students see.
for(const r of Object.values(rubrics))for(const f of r.lessonFiles)assert(!/assessment\s*=\s*\{/.test(fs.readFileSync(path.join(__dirname,'../..',f),'utf8')),f+' carries a Class Pulse rubric; keep it in scripts/lib/class-pulse/rubrics.js');
console.log('PASS Class Pulse rubrics: the live rubric ('+config.assignmentId+') cites the CED source for its learning objective, page, Key Concepts and suggested skill, and rates every learning target; every contract builds; no rubric lives in lesson data; '+mutants.length+' negative controls caught.');
