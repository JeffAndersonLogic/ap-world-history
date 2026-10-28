#!/usr/bin/env node
'use strict';
const assert=require('assert/strict'),fs=require('fs');
if(!process.env.FIRESTORE_EMULATOR_HOST||!/^127\.0\.0\.1:\d+$/.test(process.env.FIRESTORE_EMULATOR_HOST))throw Error('A localhost Firestore emulator is required.');
const {initializeTestEnvironment,assertFails,assertSucceeds}=require('@firebase/rules-unit-testing');
const {doc,setDoc,getDoc,updateDoc,deleteDoc,collection,getDocs,query,limit,serverTimestamp}=require('firebase/firestore');
const Data=require('../../teacher/class-pulse/data'),contract=require('../lib/skilllens-pilot-contract')();
const PROJECT='demo-class-pulse',rules=fs.readFileSync('firestore/class-pulse.rules','utf8'),base='tenants/zcs/classes/class-a',assignment=base+'/assignments/'+contract.assignmentId;
const claims=(email)=>({email,email_verified:true,firebase:{sign_in_provider:'google.com'}});
function token(uid,email){const b=o=>Buffer.from(JSON.stringify(o)).toString('base64url'),now=Math.floor(Date.now()/1000);return b({alg:'none',typ:'JWT'})+'.'+b({iss:'https://securetoken.google.com/'+PROJECT,aud:PROJECT,sub:uid,user_id:uid,email,email_verified:true,iat:now,exp:now+3600,auth_time:now,firebase:{sign_in_provider:'google.com'}})+'.';}
async function suite(source){
 const [host,port]=process.env.FIRESTORE_EMULATOR_HOST.split(':');const env=await initializeTestEnvironment({projectId:PROJECT,firestore:{host,port:Number(port),rules:source}});
 try{
  await env.clearFirestore();await env.withSecurityRulesDisabled(async ctx=>{const db=ctx.firestore();for(const c of ['class-a','class-b']){const p='tenants/zcs/classes/'+c;await setDoc(doc(db,p),{active:true,label:c});await setDoc(doc(db,p+'/teachers/'+(c==='class-a'?'jeff':'other')),{active:true,label:c==='class-a'?'Jeff Anderson':'Other teacher'});await setDoc(doc(db,p+'/members/sam'),{active:true,label:'Test student'});await setDoc(doc(db,p+'/assignments/'+contract.assignmentId),{active:true,contractId:contract.contractId});}});
  const jeff=env.authenticatedContext('jeff',claims('jeff@zcs.k12.in.us')).firestore(),other=env.authenticatedContext('other',claims('other@zcs.k12.in.us')).firestore(),sam=env.authenticatedContext('sam',claims('sam@stumail.zcs.k12.in.us')).firestore(),stranger=env.authenticatedContext('stranger',claims('stranger@stumail.zcs.k12.in.us')).firestore(),anon=env.unauthenticatedContext().firestore();
  await assertSucceeds(getDoc(doc(jeff,base)));await assertFails(getDoc(doc(other,base)));await assertFails(getDoc(doc(anon,base)));
  await assertFails(setDoc(doc(sam,base+'/teachers/sam'),{active:true}));await assertFails(setDoc(doc(jeff,base+'/members/stranger'),{active:true}));await assertFails(getDoc(doc(stranger,base)));
  const response={studentId:'sam',contractId:contract.contractId,text:'Seasonal winds reversed.',revision:1,submittedAt:serverTimestamp()};
  await assertSucceeds(setDoc(doc(sam,assignment+'/submissions/sam'),response));
  await assertFails(getDoc(doc(other,assignment+'/submissions/sam')));await assertSucceeds(getDoc(doc(jeff,assignment+'/submissions/sam')));
  await assertFails(getDoc(doc(stranger,assignment+'/submissions/sam')));await assertFails(setDoc(doc(sam,assignment+'/submissions/stranger'),{...response,studentId:'stranger'}));
  await assertFails(updateDoc(doc(sam,assignment+'/submissions/sam'),{revision:1,text:'Overwrite without revision',submittedAt:serverTimestamp()}));
  await assertFails(updateDoc(doc(sam,assignment+'/submissions/sam'),{revision:2,contractId:'other',submittedAt:serverTimestamp()}));
  await assertFails(updateDoc(doc(jeff,assignment+'/submissions/sam'),{revision:2,text:'Teacher overwrites student',submittedAt:serverTimestamp()}));
  await assertFails(deleteDoc(doc(sam,assignment+'/submissions/sam')));
  await assertSucceeds(getDocs(query(collection(jeff,assignment+'/submissions'),limit(200))));await assertFails(getDocs(query(collection(other,assignment+'/submissions'),limit(200))));await assertFails(getDocs(query(collection(sam,assignment+'/submissions'),limit(200))));
  const override={studentId:'sam',revision:1,actorUid:'jeff',payload:'{}',createdAt:serverTimestamp()};
  await assertSucceeds(setDoc(doc(jeff,assignment+'/overrides/change1'),override));
  await assertFails(updateDoc(doc(jeff,assignment+'/overrides/change1'),{payload:'overwrite'}));await assertFails(deleteDoc(doc(jeff,assignment+'/overrides/change1')));
  await assertFails(setDoc(doc(sam,assignment+'/overrides/student'),{...override,actorUid:'sam'}));await assertFails(setDoc(doc(jeff,assignment+'/overrides/forged'),{...override,actorUid:'other'}));await assertFails(setDoc(doc(jeff,assignment+'/overrides/stale'),{...override,revision:2}));
  await assertFails(setDoc(doc(jeff,assignment+'/analyses/sam'),{payload:'fake AI'}));await assertFails(getDoc(doc(sam,assignment+'/overrides/change1')));
  await assertSucceeds(setDoc(doc(jeff,assignment+'/decisions/decision1'),{actorUid:'jeff',contractId:contract.contractId,payload:'{}',createdAt:serverTimestamp()}));
  await assertFails(setDoc(doc(sam,assignment+'/decisions/student'),{actorUid:'sam',contractId:contract.contractId,payload:'{}',createdAt:serverTimestamp()}));
  // Real REST calls use emulator-only JWTs and the same adapter as the deployed page.
  const transport=uid=>Data.create({firebase:{projectId:PROJECT},tenantId:'zcs',classId:'class-a',assignmentId:contract.assignmentId},{user:()=>({uid}),getToken:async()=>token(uid,uid==='sam'?'sam@stumail.zcs.k12.in.us':uid+'@zcs.k12.in.us')},(url,opts)=>fetch(url.replace('https://firestore.googleapis.com/v1','http://'+process.env.FIRESTORE_EMULATOR_HOST+'/v1'),opts));
  const student=transport('sam'),state=await student.studentLoad();await student.submit('Revised explanation.',contract.contractId,state.submission);await assert.rejects(student.submit('Old revision.',contract.contractId,state.submission));
  const loaded=await transport('jeff').teacherLoad();assert.equal(loaded.submissions[0].revision,2);assert.equal(loaded.submissions[0].text,'Revised explanation.');
  await assert.rejects(transport('other').teacherLoad());
  await env.withSecurityRulesDisabled(ctx=>updateDoc(doc(ctx.firestore(),base+'/teachers/jeff'),{active:false}));await assertFails(getDoc(doc(jeff,assignment+'/submissions/sam')));
 }finally{await env.cleanup();}
}
(async()=>{
 const mutations=[['teacher membership bypass',s=>s.replace("return inTenant(tenantId) && classActive()\n          && get(/databases/$(database)/documents/tenants/$(tenantId)/classes/$(classId)/teachers/$(request.auth.uid)).data.active == true;","return inTenant(tenantId);")],['revision check removed',s=>s.replace('request.resource.data.revision == resource.data.revision + 1','true')],['override history mutable',s=>s.replace('allow update, delete: if false;','allow update, delete: if teacher();')]];
 for(const [label,mutate]of mutations){const changed=mutate(rules);assert.notEqual(changed,rules);await assert.rejects(suite(changed));console.log('PASS negative control:',label);}
 await suite(rules);console.log('PASS Class Pulse real-engine security and REST submission/reload: cross-class isolation, roster protection, append-only reviews, versions, conflicts, revocation.');
})().catch(e=>{console.error(e);process.exitCode=1;});
