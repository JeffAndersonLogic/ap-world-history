'use strict';
// Scores AI ratings against an answer key, and one AI run against another, for a practice
// packet. Each ratings file goes through the same import the teacher page uses, so a rating
// whose quote is not in the answer counts as "Needs your review", exactly as the page would show it.
const core=require('../skilllens-pilot-core'),H=require('../../../teacher/class-pulse/ai-handoff');
async function bands(packet,ratings){
 const contract={contractId:packet.contractId,criteria:packet.criteria},responses=packet.answers.map(a=>({id:a.key,text:a.text,submission:'submitted'}));
 const {analyses,report}=await H.importRatings(contract,responses,ratings,core);
 return{report,byKey:Object.fromEntries(analyses.map(a=>[a.responseId,Object.fromEntries(a.criteria.map(j=>[j.criterionId,j.band]))]))};
}
async function compare(packet,key,runA,runB){
 const K=await bands(packet,key),A=await bands(packet,runA),B=runB?await bands(packet,runB):null;
 const criteria=packet.criteria.map(c=>({id:c.id,label:c.label,agree:0,total:0,same:0,pairs:0}));
 const disagreements=[],unrated=[];let exact=0,scored=0;
 for(const answer of packet.answers){
  const k=K.byKey[answer.key],a=A.byKey[answer.key];
  if(!k)continue;
  if(!a){unrated.push(answer.key);continue;}
  scored++;let all=true;
  for(const c of criteria){c.total++;if(a[c.id]===k[c.id])c.agree++;else{all=false;disagreements.push({key:answer.key,criterion:c.label,keyBand:k[c.id],aiBand:a[c.id]});}
   const b=B&&B.byKey[answer.key];if(b){c.pairs++;if(b[c.id]===a[c.id])c.same++;}}
  if(all)exact++;
 }
 return{criteria,exact,scored,disagreements,unrated,quoteNotFound:A.report.quoteNotFound,secondRun:!!B};
}
function describe(result){
 const lines=[],label=b=>core.labels[b]||b;
 lines.push('Agreement with the answer key:');
 for(const c of result.criteria)lines.push('  '+c.label+': '+c.agree+' of '+c.total);
 lines.push('Answers where every criterion matched: '+result.exact+' of '+result.scored);
 if(result.unrated.length)lines.push('Not rated by the AI: '+result.unrated.join(', '));
 if(result.quoteNotFound)lines.push(result.quoteNotFound+' rating(s) quoted words that are not in the answer, so they count as "Needs your review".');
 if(result.disagreements.length){lines.push('Where the AI and the key disagree:');for(const d of result.disagreements)lines.push('  '+d.key+' · '+d.criterion+': key "'+label(d.keyBand)+'", AI "'+label(d.aiBand)+'"');}
 if(result.secondRun){lines.push('Same rating on both AI runs:');for(const c of result.criteria)lines.push('  '+c.label+': '+c.same+' of '+c.pairs);}
 lines.push('Suggested bar for this 10-answer check: at least 8 of 10 on each criterion, and at least 9 of 10 the same on both runs. Passing it is a reason to try a real class once approved, not proof the AI is accurate.');
 return lines.join('\n');
}
module.exports={compare,describe};
