'use strict';
const E=require('../../teacher/class-pulse-engine');
// Deployment boundary. There is deliberately no real-writing model dispatch path.
// Adding one requires a separately reviewed change, not a browser or env toggle.
function createService({provider,map,syntheticCatalog,verifyToken,authorizeScope,readResponses,verifySubmission}={}){
 const engine=E.createEngine({provider});
 return {
  async analyzeSynthetic(ids,checkpoint){
   if(!Array.isArray(ids)||!ids.length||ids.length>50||new Set(ids).size!==ids.length)throw new Error('Invalid synthetic selection');
   const rows=ids.map(id=>{const r=syntheticCatalog.find(x=>x.id===id&&x.checkpoint===checkpoint);if(!r)throw new Error('Unknown synthetic response');return {key:r.id,text:r.text,completionState:r.completionState,updatedAt:r.updatedAt};});
   return engine.analyzeMany(rows,E.contractFor(map,checkpoint));
  },
  async analyzeLive(){const e=new Error('Real-student external processing is disabled pending district and vendor authorization.');e.code='PROCESSING_DISABLED';throw e;},
  async prepareLive({idToken,tenantId,sectionId,checkpoint}){
   if(!verifyToken||!authorizeScope||!readResponses||!verifySubmission)throw new Error('Trusted live integrations unavailable');
   // Callbacks are server dependencies; no request-supplied roster or writing.
   const teacher=await verifyToken(idToken);
   const scope=await authorizeScope(teacher,{tenantId,sectionId});
   if(!scope||scope.tenantId!==tenantId||scope.sectionId!==sectionId||!Array.isArray(scope.studentIds))throw new Error('Scope denied');
   const contract=E.contractFor(map,checkpoint);
   const rows=await readResponses(scope,contract);
   const authorized=new Set(scope.studentIds);
   if(rows.some(r=>!authorized.has(r.studentId)||r.tenantId!==tenantId||r.courseId!=='apwh'||r.topicKey!==contract.topicKey||r.slotId!==contract.slotId))throw new Error('Out-of-scope response refused');
   // Completion receipts must attest the exact snapshot, not just a student/slot.
   return Promise.all(rows.map(async r=>{const receipt=await verifySubmission(scope,r);const complete=receipt&&receipt.responseDigest===await E.digest({text:r.text,updatedAt:r.updatedAt});return {...r,key:tenantId+'|'+r.studentId+'|'+r.topicKey+'|'+r.slotId,completionState:complete?'verified-submission':'backup-snapshot',analysisStatus:'disabled'};}));
  },clear(){engine.clear();}
 };
}
module.exports={createService};
