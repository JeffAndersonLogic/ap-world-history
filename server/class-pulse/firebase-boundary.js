'use strict';
// Dependency injection boundary for a future district-approved server. No Admin
// database access, credentials, roster provisioning or deployment is created here.
function createFirebaseBoundary({auth,rosterStore,submissionStore,readTopic}){
 return {
  async verifyToken(token){
   // Firebase Admin verifyIdToken with revocation checking, not decode-only JWT.
   const claims=await auth.verifyIdToken(token,true);
   if(!claims.uid||claims.email_verified!==true||claims.firebase?.sign_in_provider!=='google.com'||typeof claims.email!=='string'||claims.email.toLowerCase().split('@')[1]!=='zcs.k12.in.us')throw new Error('Verified staff identity required');
   return {uid:claims.uid};
  },
  async authorizeScope(teacher,{tenantId,sectionId}){
   if(tenantId!=='zcs'||typeof sectionId!=='string'||!sectionId)throw new Error('Scope denied');
   // Must be administrator-owned SIS/Canvas roster membership, never the
   // sectionId written by student devices or a browser-uploaded roster.
   const membership=await rosterStore.getTeacherSection(teacher.uid,tenantId,sectionId);
   if(!membership||!membership.active||!Array.isArray(membership.studentIds))throw new Error('Scope denied');
   return {teacherUid:teacher.uid,tenantId,sectionId,studentIds:membership.studentIds};
  },
  async readResponses(scope,contract){return readTopic(scope,contract);},
  async verifySubmission(scope,response){return submissionStore.getVerifiedReceipt(scope,response);}
 };
}
module.exports={createFirebaseBoundary};
