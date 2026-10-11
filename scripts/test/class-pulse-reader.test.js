#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict');
const P=require('../../teacher/class-pulse-reader.js');
const doc=(uid,slot,text,section)=>({
 name:'projects/test/databases/(default)/documents/tenants/zcs/responses/'+uid+'__2-3__'+slot,
 fields:{tenantId:{stringValue:'zcs'},studentId:{stringValue:uid},
   courseId:{stringValue:'apwh'},sectionId:{stringValue:section},
   topicKey:{stringValue:'2-3'},slotId:{stringValue:slot},text:{stringValue:text},
   confidence:{integerValue:'4'},updatedAt:{timestampValue:'2026-10-10T12:00:00Z'}}
});
const d=doc('uid-one','checkpoint-one-response','Seasonal winds helped','green');
assert.equal(P.normalize(d).completionState,'backup-snapshot');
assert.equal(P.normalize(d).confidence,4);
assert.equal(P.normalize(doc('uid','not-a-checkpoint','x','green')),null);
assert.throws(()=>P.makeQuery('../bad'),/Invalid/);
assert.equal(P.makeQuery('2-3').structuredQuery.where.fieldFilter.value.stringValue,'2-3');
let requests=[];
(async()=>{
  const reader=P.makeReader({projectId:'behistoric',tenantId:'zcs',
    getToken:async()=> 'synthetic-token',
    fetchImpl:async(url,opts)=>{requests.push({url,opts});return {ok:true,json:async()=>[
      {document:d},{document:doc('uid-two','checkpoint-two-response','Example B','silver')},
      {document:doc('uid-three','checkpoint-one-response','Example C','green')}
    ]};}
  });
  const rows=await reader.readTopic('2-3','green');
  assert.equal(rows.length,2);
  assert.equal(rows[0].studentId,'uid-one');
  assert.equal(requests.length,1);
  assert.equal(requests[0].opts.method,'POST');
  assert.match(requests[0].url,/:runQuery$/);
  assert.equal(requests[0].opts.cache,'no-store');
  assert.equal(requests[0].opts.credentials,'omit');
  assert.ok(!('writes' in JSON.parse(requests[0].opts.body)));
  assert.equal(P.coverage(rows)[0].backedUpRecords,2);
  assert.equal(P.labelsFor(rows)['uid-one'],'Student 01');
  console.log('PASS: Class Pulse adapter synthetic read-only contracts');
})().catch(e=>{console.error(e);process.exitCode=1;});
