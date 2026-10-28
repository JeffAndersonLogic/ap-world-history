#!/usr/bin/env node
'use strict';
// The AI rating handoff: what leaves the page, what the import trusts, and the approval switch.
// Each check is run against a deliberately broken copy of the module first, which must fail.
const assert=require('assert/strict'),fs=require('fs'),vm=require('vm');
const core=require('../lib/skilllens-pilot-core'),contract=require('../lib/skilllens-pilot-contract')(),fixtures=require('../lib/skilllens-pilot-fixtures')(contract);
const SOURCE='teacher/class-pulse/ai-handoff.js',source=fs.readFileSync(SOURCE,'utf8');
const load=text=>{const sandbox={module:{exports:{}},globalThis,TextEncoder};sandbox.globalThis=globalThis;vm.runInNewContext(text,sandbox);return sandbox.module.exports;};
const responses=fixtures.responses;

async function packetChecks(H){
 const packet=await H.buildPacket(contract,responses,{synthetic:true,now:'2026-10-28T00:00:00.000Z'});
 const text=JSON.stringify(packet);
 // Nothing that identifies a student: no roster label, no account or record ID.
 for(const r of responses){assert(!text.includes(r.label),'packet carries a roster label');assert(!text.includes(r.studentId||'\u0000none'),'packet carries a student ID');assert(!text.includes('"'+r.id+'"'),'packet carries a record ID');}
 assert(!/studentId|label"|responseId/.test(JSON.stringify(packet.answers)),'answers carry identifying fields');
 // Blank and missing work is not exported; every exported answer is the exact text.
 const submitted=responses.filter(r=>r.submission!=='missing'&&r.text.trim());
 assert.equal(packet.answers.length,submitted.length);
 for(const a of packet.answers){assert(submitted.some(r=>r.text===a.text));assert.equal(a.textSha256,await H.sha256(a.text));}
 // Order follows the fingerprint, not the roster.
 const hashes=packet.answers.map(a=>a.textSha256);assert.deepEqual(hashes,hashes.slice().sort());
 assert.equal(packet.contractId,contract.contractId);assert.equal(packet.criteria.length,contract.criteria.length);
 return packet;
}
function goodRatings(packet){return{format:'behistorical-class-pulse-ai-ratings-v1',contractId:contract.contractId,rater:{name:'Test rater',instructionsVersion:'class-pulse-ai-rating-v1'},ratings:packet.answers.map(a=>({key:a.key,textSha256:a.textSha256,criteria:contract.criteria.map(c=>({criterionId:c.id,band:'meets',reason:'Shown in the answer.',quote:a.text.slice(0,12)}))}))};}
async function importChecks(H,packet){
 let out=await H.importRatings(contract,responses,goodRatings(packet),core);
 assert.equal(out.report.rated,packet.answers.length);assert.equal(out.report.quoteNotFound,0);
 for(const a of out.analyses){const r=responses.find(r=>r.id===a.responseId);assert(core.validate(contract,r,a).valid);assert.equal(a.provenance.kind,'external-model');}
 // A positive rating whose quote is not in the answer word for word is not trusted.
 const invented=goodRatings(packet);invented.ratings[0].criteria[0].quote='words the student never wrote';
 out=await H.importRatings(contract,responses,invented,core);
 const sent=out.analyses.find(a=>a.responseText===packet.answers[0].text);
 assert(sent,'a rating with an invented quote was dropped instead of sent back to the teacher');
 const j=sent.criteria[0];
 assert.equal(j.band,'review');assert.equal(out.report.quoteNotFound,1);
 // A Not yet rating needs no quote.
 const noQuote=goodRatings(packet);Object.assign(noQuote.ratings[0].criteria[1],{band:'not_yet',quote:''});
 out=await H.importRatings(contract,responses,noQuote,core);assert.equal(out.analyses.find(a=>a.responseText===packet.answers[0].text)?.criteria[1].band,'not_yet');
 // Wrong checkpoint, unknown label, missing criterion and a changed answer are all caught.
 await assert.rejects(H.importRatings(contract,responses,{...goodRatings(packet),contractId:'other'},core));
 const unknown=goodRatings(packet);unknown.ratings[0].criteria[0].band='excellent';
 out=await H.importRatings(contract,responses,unknown,core);assert.equal(out.report.rejected.length,1);
 const short=goodRatings(packet);short.ratings[0].criteria.pop();
 out=await H.importRatings(contract,responses,short,core);assert.equal(out.report.rejected.length,1);
 const changed=responses.map(r=>r.id===responses[0].id?{...r,text:r.text+' Edited.'}:r);
 out=await H.importRatings(contract,changed,goodRatings(packet),core);assert.equal(out.report.unmatched,1);
}
function gateChecks(H){
 assert.equal(H.gate(true,undefined).on,true);
 assert.equal(H.gate(false,undefined).on,false);
 assert.equal(H.gate(false,{approved:false,approvalReference:'Dan Layton, email of 2026-11-02'}).on,false);
 assert.equal(H.gate(false,{approved:true,approvalReference:''}).on,false);
 assert.equal(H.gate(false,{approved:true,approvalReference:'Dan Layton, email of 2026-11-02'}).on,true);
 // The shipped configuration keeps real student work off until approval is recorded.
 const config=require('../lib/class-pulse/config');assert.equal(H.gate(false,config.aiAssist).on,false,'aiAssist is switched on in config.js');
}
async function all(H){const packet=await packetChecks(H);await importChecks(H,packet);gateChecks(H);}

(async()=>{
 const mutants=[
  ['packet leaks the roster labels', source.replace("bands:BANDS,answers};","bands:BANDS,answers,roster:responses.map(r=>r.label)};")],
  ['blank answers are exported', source.replace("if(r.submission==='missing'||!hasText(r.text))continue;const hash=await sha256(r.text);if(!seen.has(hash))","const hash=await sha256(r.text||'');if(!seen.has(hash))")],
  ['quote is not checked against the answer', source.replace("if(['meets','partial'].includes(j.band)&&!evidence.length)","if(false)")],
  ['approval reference is not required', source.replace("&&hasText(aiAssist.approvalReference)&&aiAssist.approvalReference.trim().length>=8","")],
  ['wrong checkpoint is accepted', source.replace("if(input.contractId!==contract.contractId)","if(false)")],
 ];
 for(const [name,text] of mutants){
  assert.notEqual(text,source,'mutation did not apply: '+name);
  let failed=false;try{await all(load(text));}catch(error){failed=error instanceof assert.AssertionError||error.code==='ERR_ASSERTION';if(process.env.SHOW_CONTROLS)console.log('  caught',name,'->',error.message.split('\n')[0]);}
  assert(failed,'negative control not caught: '+name);
 }
 await all(require('../../'+SOURCE));
 console.log('PASS Class Pulse AI handoff: no identifying fields leave the page, blank and missing work stays behind, untrusted quotes go back to the teacher, wrong or changed ratings are refused, real-student export stays off without a recorded approval; '+mutants.length+' negative controls caught.');
})().catch(error=>{console.error('FAIL',error.message);process.exit(1);});
