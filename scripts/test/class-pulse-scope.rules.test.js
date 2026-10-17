#!/usr/bin/env node
'use strict';
// Synthetic only. Compare student-only production source with the rejected broad
// teacher-reader proposal, using Firestore's real rule evaluator.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
let testing,fst;try{testing=require('@firebase/rules-unit-testing');fst=require('firebase/firestore');}catch(_){console.log('SKIP Class Pulse scope rules: emulator dependencies absent');process.exit(2);}
if(!process.env.FIRESTORE_EMULATOR_HOST){console.log('SKIP Class Pulse scope rules: emulator not running');process.exit(2);}
const {initializeTestEnvironment,assertFails,assertSucceeds}=testing,{doc,setDoc,getDoc,getDocs,collection,query,where}=fst;
const rules=fs.readFileSync(path.join(__dirname,'../../firestore/firestore.rules'),'utf8');
const claims=email=>({email,email_verified:true,firebase:{sign_in_provider:'google.com'}});
async function environment(rules,name){const e=await initializeTestEnvironment({projectId:'demo-class-pulse-'+name,firestore:{rules}});await e.withSecurityRulesDisabled(async c=>{for(const [id,uid,sectionId] of [['a','student-a','A'],['b','student-b','B']])await setDoc(doc(c.firestore(),'tenants/zcs/responses/'+id),{studentId:uid,tenantId:'zcs',courseId:'apwh',topicKey:'2-3',slotId:'checkpoint-one-response',sectionId,text:'SYNTHETIC ONLY'});});return e;}
(async()=>{
 let current,legacy;
 try{
  current=await environment(rules,'current');
  const teacher=current.authenticatedContext('teacher',claims('janderson@zcs.k12.in.us')).firestore();
  const student=current.authenticatedContext('student-a',claims('student@stumail.zcs.k12.in.us')).firestore();
  await assertFails(getDoc(doc(teacher,'tenants/zcs/responses/b')));await assertFails(getDocs(collection(teacher,'tenants/zcs/responses')));
  await assertSucceeds(getDoc(doc(student,'tenants/zcs/responses/a')));await assertFails(getDoc(doc(student,'tenants/zcs/responses/b')));
  // This reproduces the relevant allow condition from the Oct 10 proposal. It
  // is not a production rules artifact and is never deployed.
  const marker='allow get, list: if inTenant(tenantId) && ownsStored();';
  assert.ok(rules.includes(marker));const broad=rules.replace(marker,marker+"\n      allow get, list: if inTenant(tenantId) && request.auth.token.email.lower() in ['janderson@zcs.k12.in.us','mkelly@zcs.k12.in.us'];");
  legacy=await environment(broad,'legacy');const broadTeacher=legacy.authenticatedContext('teacher',claims('janderson@zcs.k12.in.us')).firestore();
  await assertSucceeds(getDocs(query(collection(broadTeacher,'tenants/zcs/responses'),where('sectionId','==','B'))));
  await assert.rejects(()=>assertFails(getDoc(doc(broadTeacher,'tenants/zcs/responses/b'))));
  console.log('PASS Class Pulse scope: current teacher reads denied, student own-only preserved; rejected legacy allowlist demonstrably permits another section; denial test catches the mutation');
 }finally{for(const env of [current,legacy])if(env){await env.clearFirestore();await env.cleanup();}}
})().catch(e=>{console.error(e);process.exitCode=1;});
