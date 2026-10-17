#!/usr/bin/env node
'use strict';
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const E=require('../teacher/class-pulse-engine'),C=require('../teacher/data/class-pulse-calibration');
const {createOpenAIProvider}=require('../server/class-pulse/openai-provider');
const sandbox={window:{}};vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../assets/data/skills-map.js'),'utf8'),sandbox);const map=sandbox.window.BEHISTORICAL_SKILLS_MAP;
const emptyMatrix=()=>Object.fromEntries(E.BANDS.map(x=>[x,Object.fromEntries(E.BANDS.map(y=>[y,0]))]));
async function reviewTemplate(){return {schema:1,note:'Review the synthetic writing independently. Edit expected categories if needed; fill reviewer and reviewedAt only after actual review. No real student writing belongs in this file.',items:await Promise.all(C.rows.map(async row=>({id:row.id,checkpoint:row.checkpoint,responseText:row.text,contractDigest:await E.digest(E.contractFor(map,row.checkpoint)),expected:row.expected,reviewer:null,reviewedAt:null})))};}
async function applyReferences(file){const input=JSON.parse(fs.readFileSync(file,'utf8'));if(input.schema!==1||!Array.isArray(input.items)||new Set(input.items.map(x=>x.id)).size!==input.items.length)throw new Error('Invalid reference set');const rows=C.rows.map(x=>({...x}));for(const reference of input.items){const row=rows.find(x=>x.id===reference.id);if(!row||reference.checkpoint!==row.checkpoint||reference.responseText!==row.text||reference.contractDigest!==await E.digest(E.contractFor(map,row.checkpoint)))throw new Error('Reference does not bind to exact writing and contract');if(!reference.reviewer&&!reference.reviewedAt)continue;if(typeof reference.reviewer!=='string'||!reference.reviewer.trim()||!Number.isFinite(Date.parse(reference.reviewedAt))||!Array.isArray(reference.expected)||reference.expected.length!==3||reference.expected.some(x=>!E.BANDS.includes(x)))throw new Error('Reviewed reference needs reviewer, date and all criterion categories');row.expected=reference.expected;row.teacherReviewed=true;}return rows;}
async function evaluate(provider,rows=C.rows){
 const engine=E.createEngine({provider}),confusion=emptyMatrix(),perCriterion={},disagreements=[];let errors=0,interpreted=0,ineligible=0,semanticCriteriaCompared=0;
 for(const row of rows){const contract=E.contractFor(map,row.checkpoint),result=await engine.analyze({...row,key:row.id},contract);
  if(result.status==='ineligible'){ineligible++;continue;}
  if(result.status==='error')errors++;if(result.status==='analyzed')interpreted++;
  result.criteria.forEach((r,i)=>{const key=row.checkpoint+':'+r.criterionId;if(!perCriterion[key])perCriterion[key]={n:0,agreement:0,falseDemonstrating:0,missedDemonstrating:0,confusion:emptyMatrix()};const p=perCriterion[key];semanticCriteriaCompared++;p.n++;p.confusion[row.expected[i]][r.category]++;confusion[row.expected[i]][r.category]++;if(row.expected[i]===r.category)p.agreement++;if(r.category==='D'&&row.expected[i]!=='D')p.falseDemonstrating++;if(row.expected[i]==='D'&&r.category!=='D')p.missedDemonstrating++;
   if(r.category!==row.expected[i])disagreements.push({id:row.id,tag:row.tag,criterionId:r.criterionId,reference:row.expected[i],proposed:r.category,analysisStatus:result.status});});
 }
 const replay=provider.kind==='replay';
 return {kind:replay?'contract-replay':'semantic-calibration',provider:provider.id,providerVersion:provider.version,responses:rows.length,eligibleInterpreted:interpreted,ineligible,errors,teacherReviewed:rows.filter(x=>x.teacherReviewed).length,referenceStatus:C.provenance,
  semanticCriteriaCompared:replay?null:semanticCriteriaCompared,confusion:replay?null:confusion,perCriterion:replay?null:perCriterion,disagreements:replay?null:disagreements,
  falseDemonstrating:replay?null:disagreements.filter(x=>x.proposed==='D'&&x.reference!=='D').length,
  missedDemonstrating:replay?null:disagreements.filter(x=>x.reference==='D'&&x.proposed!=='D').length,
  accuracy:null,note:replay?'Fixture replay verifies software paths only; semantic calibration has not run.':'Agreement is against the stated reference set; teacher-reviewed metadata is self-attested. Report per-criterion errors, held-out performance and teacher usefulness before claiming readiness. Ineligible drafts and blanks are excluded from semantic metrics; invalid analyses stay in the eligible denominator as unknown.'};
}
if(require.main===module){(async()=>{
 if(process.argv.includes('--review-template')){console.log(JSON.stringify(await reviewTemplate(),null,2));return;}
 const model=process.argv.includes('--model'),referenceArg=process.argv.find(x=>x.startsWith('--references='));
 const provider=model?createOpenAIProvider({apiKey:process.env.OPENAI_API_KEY,model:process.env.CLASS_PULSE_MODEL}):C.replayProvider();
 const rows=referenceArg?await applyReferences(referenceArg.slice('--references='.length)):C.rows;
 const report=await evaluate(provider,rows);console.log(JSON.stringify(report,null,2));if(report.errors)process.exitCode=1;
})().catch(()=>{console.error('Calibration failed; no response text logged.');process.exitCode=1;});}
module.exports={evaluate,reviewTemplate,applyReferences};
