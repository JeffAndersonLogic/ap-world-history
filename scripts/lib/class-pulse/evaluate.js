'use strict';
const core=require('../skilllens-pilot-core');
module.exports=function evaluate(input){
 const {contract,responses,analyses,references}=input;
 if(!contract||!Array.isArray(responses)||!Array.isArray(analyses)||!Array.isArray(references)||!['development','holdout'].includes(input.split))throw Error('Contract, responses, analyses, references, and declared evaluation split are required.');
 if(new Set(responses.map(r=>r.id)).size!==responses.length||new Set(references.map(r=>r.responseId)).size!==references.length||new Set(analyses.map(a=>a.responseId)).size!==analyses.length)throw Error('Duplicate response, reference, or analysis ID.');
 const criteria=Object.fromEntries(contract.criteria.map(c=>[c.id,{n:0,agreement:0,abstentions:0,positives:0,misleadingPositives:0,positivesOnUnjudgeable:0,confusion:{}}]));
 let exactResponses=0,assessableResponses=0,invalidAnalyses=0;
 for(const reference of references){
  const r=responses.find(r=>r.id===reference.responseId);if(!r||!r.text?.trim()||r.submission==='missing')throw Error('Reference judgments must refer to submitted, nonblank work; report missing/blank separately.');
  if(!reference.reviewer||reference.responseText!==r.text||reference.contractId!==contract.contractId||!Array.isArray(reference.criteria)||reference.criteria.length!==contract.criteria.length||new Set(reference.criteria.map(j=>j.criterionId)).size!==contract.criteria.length)throw Error('Reference needs independent reviewer, exact response and contract binding, and one band for every criterion.');
  const a=analyses.find(a=>a.responseId===r.id),check=core.validate(contract,r,a);if(!check.valid)invalidAnalyses++;
  let exact=true,fullyJudgeable=true;
  for(const truth of reference.criteria){
   if(!criteria[truth.criterionId]||!core.bands.includes(truth.band))throw Error('Invalid reference criterion or band.');
   const predicted=check.valid?a.criteria.find(j=>j.criterionId===truth.criterionId).band:'review',row=criteria[truth.criterionId];
   row.n++;const key=truth.band+' → '+predicted;row.confusion[key]=(row.confusion[key]||0)+1;
   if(predicted==='review')row.abstentions++;
   if(truth.band==='review'){fullyJudgeable=false;exact=false;}else if(predicted===truth.band)row.agreement++;else exact=false;
   if(predicted==='meets'){row.positives++;if(truth.band==='review')row.positivesOnUnjudgeable++;else if(truth.band!=='meets')row.misleadingPositives++;}
  }
  if(fullyJudgeable)assessableResponses++;if(exact)exactResponses++;
 }
 for(const row of Object.values(criteria)){row.agreementRate=row.n?row.agreement/row.n:null;row.misleadingPositiveRate=row.positives?row.misleadingPositives/row.positives:null;row.misleadingShareOfAll=row.n?row.misleadingPositives/row.n:null;}
 const n=references.length;
 return{split:input.split,declaredVersion:input.version||null,referenceResponses:n,fullyJudgeableReferenceResponses:assessableResponses,exactResponses,exactAgreementRate:n?exactResponses/n:null,invalidAnalyses,criteria,readiness:'NOT ESTABLISHED',limitations:['Declared split and reviewer metadata do not prove blinding or independence.','Abstentions and unjudgeable reference cases stay in the all-response denominator.','Development fixtures cannot establish production accuracy.','Report per-criterion errors, positive denominators, uncertainty, review time and teacher usefulness before a release decision.']};
};
