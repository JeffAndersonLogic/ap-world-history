#!/usr/bin/env node
'use strict';
// Dry-run by default. Authenticated administrative execution only, outside the web app.
const fs=require('fs'),path=require('path'),assert=require('assert/strict'),contract=require('./lib/skilllens-pilot-contract')(require('./lib/class-pulse/config').assignmentId),{segment}=require('../teacher/class-pulse/data');
function plan(input){
 assert.equal(input.projectId,'behistoric','Use the district project explicitly.');segment(input.classId);
 assert(input.teacher&&input.teacher.uid&&input.teacher.label,'Verified teacher UID and label required.');segment(input.teacher.uid);
 assert(Array.isArray(input.students)&&input.students.length>0&&input.students.length<=100,'Supply one verified class roster of 1–100 students.');
 const seen=new Set();for(const student of input.students){segment(student.uid);assert(!seen.has(student.uid)&&student.uid!==input.teacher.uid,'Duplicate or teacher UID in student roster.');seen.add(student.uid);assert(typeof student.label==='string'&&student.label.trim()&&student.label.length<=120,'Each student needs a bounded display label.');}
 assert(typeof input.label==='string'&&input.label.trim()&&input.label.length<=120,'Class label required.');
 const base='tenants/zcs/classes/'+input.classId;
 return{base,records:[{path:base,data:{active:false,label:input.label,courseId:'apwh'}},{path:base+'/teachers/'+input.teacher.uid,data:{active:true,label:input.teacher.label}},...input.students.map(s=>({path:base+'/members/'+s.uid,data:{active:true,label:s.label}})),{path:base+'/assignments/'+contract.assignmentId,data:{active:true,contractId:contract.contractId,title:contract.title}}]};
}
module.exports=plan;
if(require.main===module)(async()=>{
 const filename=process.argv[2];if(!filename)throw Error('Usage: node scripts/class-pulse-provision.js /private/verified-roster.json [--apply] [--activate]');
 const real=fs.realpathSync(filename),repo=path.resolve(__dirname,'..');if(real===repo||real.startsWith(repo+path.sep))throw Error('Keep roster files outside the public repository.');
 const input=JSON.parse(fs.readFileSync(real,'utf8')),p=plan(input);
 console.log(JSON.stringify({projectId:input.projectId,classId:input.classId,students:input.students.length,records:p.records.length,operation:process.argv.includes('--activate')?'activate verified existing class':'create inactive class',apply:process.argv.includes('--apply')}));
 if(!process.argv.includes('--apply'))return;
 if(!input.approvalReference?.trim())throw Error('Administrative application requires the recorded district scope approval reference.');
 const {initializeApp,applicationDefault}=require('firebase-admin/app'),{getFirestore}=require('firebase-admin/firestore');
 const db=getFirestore(initializeApp({projectId:input.projectId,credential:applicationDefault()}));
 if(process.argv.includes('--activate')){
  await db.runTransaction(async tx=>{const refs=p.records.map(r=>db.doc(r.path)),snapshots=await tx.getAll(...refs);snapshots.forEach((s,i)=>{if(!s.exists)throw Error('Provision every required record before activation.');const expected=p.records[i].data,actual=s.data();for(const[k,v]of Object.entries(expected)){if(k==='active'&&i===0)continue;if(actual[k]!==v)throw Error('Existing roster differs from the verified activation input.');}});tx.update(refs[0],{active:true,approvalReference:input.approvalReference});});
 }else{const batch=db.batch();for(const record of p.records)batch.create(db.doc(record.path),record.data);await batch.commit();}
 console.log('Administrative operation confirmed. Verify sign-in and access before classroom use.');
})().catch(e=>{console.error(e.message);process.exitCode=1;});
