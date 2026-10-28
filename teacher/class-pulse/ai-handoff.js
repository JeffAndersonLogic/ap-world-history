/* AI rating handoff: an export packet a teacher-run AI rates, and the import that checks its
   ratings. The packet carries the question, the criteria and the answer text only: no name,
   account ID, roster label or class. Imported ratings live in page memory as suggestions;
   only a rating the teacher accepts or changes is saved, as that teacher's own judgment.
   docs/class-pulse/README.md explains the workflow and the approval it waits on. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.ClassPulseAIHandoff=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
 'use strict';
 const PACKET='behistorical-class-pulse-ai-packet-v1',RATINGS='behistorical-class-pulse-ai-ratings-v1',INSTRUCTIONS='class-pulse-ai-rating-v1';
 const BANDS={meets:'Meets: the answer clearly shows this criterion.',partial:'Partly shown: some of it is there, but it is incomplete or unexplained.',not_yet:'Not yet shown: it is missing or wrong.',review:'Needs your review: too short, off-topic or contradictory to judge.'};
 const hasText=v=>typeof v==='string'&&v.trim().length>0;
 async function sha256(text){const bytes=new TextEncoder().encode(text),digest=await globalThis.crypto.subtle.digest('SHA-256',bytes);return Array.from(new Uint8Array(digest),b=>b.toString(16).padStart(2,'0')).join('');}
 // Real student writing may leave the page only after ZCS approves it in writing, recorded in
 // scripts/lib/class-pulse/config.js. The invented practice class needs no approval.
 function gate(synthetic,aiAssist){
  if(synthetic===true)return{on:true,reason:'Practice class: every student and answer is invented.'};
  if(aiAssist&&aiAssist.approved===true&&hasText(aiAssist.approvalReference)&&aiAssist.approvalReference.trim().length>=8)return{on:true,reason:'Approved: '+aiAssist.approvalReference.trim()};
  return{on:false,reason:'AI rating help is off for real student work until ZCS approves it in writing.'};
 }
 async function buildPacket(contract,responses,options={}){
  const seen=new Map();
  for(const r of responses){if(r.submission==='missing'||!hasText(r.text))continue;const hash=await sha256(r.text);if(!seen.has(hash))seen.set(hash,r.text);}
  // Sorted by fingerprint, not roster order, so an answer's position says nothing about who wrote it.
  const answers=Array.from(seen,([textSha256,text])=>({textSha256,text})).sort((a,b)=>a.textSha256.localeCompare(b.textSha256)).map((a,i)=>({key:'A'+String(i+1).padStart(2,'0'),...a}));
  return{format:PACKET,instructionsVersion:INSTRUCTIONS,synthetic:options.synthetic===true,createdAt:options.now||new Date().toISOString(),contractId:contract.contractId,question:contract.prompt,criteria:contract.criteria.map(c=>({id:c.id,label:c.label,description:c.description,guidance:c.guidance})),bands:BANDS,answers};
 }
 async function importRatings(contract,responses,input,core){
  if(!input||typeof input!=='object'||input.format!==RATINGS)throw Error('This is not a Class Pulse ratings file. Ask the AI to follow the rating instructions exactly.');
  if(input.contractId!==contract.contractId)throw Error('These ratings are for a different checkpoint or rubric version. Export a new packet and rate it again.');
  if(!input.rater||!hasText(input.rater.name)||input.rater.name.length>120)throw Error('The ratings file does not say which AI produced it.');
  if(!Array.isArray(input.ratings)||!input.ratings.length||input.ratings.length>5000)throw Error('The ratings file has no ratings.');
  const byHash=new Map();
  for(const r of responses){if(r.submission==='missing'||!hasText(r.text))continue;const hash=await sha256(r.text);if(!byHash.has(hash))byHash.set(hash,[]);byHash.get(hash).push(r);}
  const provenance={kind:'external-model',author:input.rater.name.trim(),version:hasText(input.rater.instructionsVersion)?input.rater.instructionsVersion.trim():INSTRUCTIONS};
  const analyses=[],rejected=[],seen=new Set();let unmatched=0,quoteNotFound=0;
  for(const rating of input.ratings){
   const key=rating&&hasText(rating.key)?rating.key:'(no key)';
   if(!rating||typeof rating.textSha256!=='string'||!/^[0-9a-f]{64}$/.test(rating.textSha256)){rejected.push({key,reason:'Missing the answer fingerprint copied from the packet.'});continue;}
   if(seen.has(rating.textSha256)){rejected.push({key,reason:'This answer was rated twice.'});continue;}
   seen.add(rating.textSha256);
   const targets=byHash.get(rating.textSha256);
   if(!targets){unmatched++;continue;}
   const list=Array.isArray(rating.criteria)?rating.criteria:[];
   const ids=list.map(j=>j&&j.criterionId);
   if(list.length!==contract.criteria.length||new Set(ids).size!==ids.length||!contract.criteria.every(c=>ids.includes(c.id))){rejected.push({key,reason:'It does not rate each criterion exactly once.'});continue;}
   const bad=list.find(j=>!core.bands.includes(j.band)||!hasText(j.reason)||j.reason.length>1200||(j.quote!==undefined&&typeof j.quote!=='string'));
   if(bad){rejected.push({key,reason:'A rating has an unknown label, no reason, or a reason that is too long.'});continue;}
   for(const r of targets){
    const criteria=contract.criteria.map(c=>{
     const j=list.find(x=>x.criterionId===c.id),quote=hasText(j.quote)?j.quote:'',at=quote?r.text.indexOf(quote):-1;
     const evidence=at>=0?[{start:at,end:at+quote.length,quote}]:[];
     // A positive rating must point at the student's own words. When the quote is not in the
     // answer word for word, the rating is not trusted and goes back to the teacher.
     if(['meets','partial'].includes(j.band)&&!evidence.length){quoteNotFound++;return{criterionId:c.id,band:'review',evidence:[],reason:'The AI suggested “'+core.labels[j.band]+'”, but its quote is not in this answer word for word, so it was not used. Read the full response. The AI’s reason: '+j.reason.trim()};}
     return{criterionId:c.id,band:j.band,evidence,reason:j.reason.trim()};
    });
    const analysis={responseId:r.id,responseText:r.text,contractId:contract.contractId,provenance,criteria};
    const check=core.validate(contract,r,analysis);
    if(!check.valid){rejected.push({key,reason:check.errors.join(' ')});continue;}
    analyses.push(analysis);
   }
  }
  return{analyses,report:{rated:analyses.length,unmatched,rejected,quoteNotFound,rater:provenance.author}};
 }
 return{PACKET,RATINGS,INSTRUCTIONS,BANDS,sha256,gate,buildPacket,importRatings};
});
