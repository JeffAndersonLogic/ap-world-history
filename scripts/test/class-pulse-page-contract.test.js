#!/usr/bin/env node
'use strict';
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const file=path.join(__dirname,'../../teacher/class-pulse.html');
const adapter=path.join(__dirname,'../../teacher/class-pulse-reader.js');
const src=fs.readFileSync(file,'utf8');
const client=fs.readFileSync(adapter,'utf8');
function contract(s){
 assert.match(s,/<title>Class Pulse \| BeHistorical Instructional Intelligence<\/title>/);
 assert.match(s,/<script src="\.\/class-pulse-reader\.js"><\/script>/);
 assert.match(s,/id="dataMode"/);
 assert.match(s,/id="rosterPanel"/);
 assert.match(s,/id="archiveContent"><details>/);
 assert.match(s,/data-nav="students"/);
 assert.match(s,/id="heatmap"/);
 assert.match(s,/id="studentDetail"/);
 assert.match(s,/No AI analysis runs/);
 assert.match(s,/No class-understanding score or reteaching recommendation has been inferred/);
 assert.match(s,/No semantic interpretation has been performed/);
 assert.match(s,/Backups ≠ submissions/);
 assert.match(s,/studentId/);
 assert.doesNotMatch(s,/https:\/\/api\.openai\.com|https:\/\/api\.anthropic\.com|localStorage\.setItem|sessionStorage\.setItem/);
}
function connector(s){
 assert.match(s,/runQuery/);
 assert.match(s,/completionState:'backup-snapshot'/);
 assert.match(s,/method:'POST'/); // Firestore runQuery read API uses POST transport
 assert.doesNotMatch(s,/:(?:commit|batchWrite)|documents\/.*:delete|method:'(?:PUT|PATCH|DELETE)'/);
}
contract(src);connector(client);
for(const [name,mutation,check] of [
 ['remove student details',src.replace('id="studentDetail"','id="wrong"'),contract],
 ['drop static fallback',src.replace(/<div id="archiveContent">[\s\S]*?<\/div>/,'<div id="archiveContent"></div>'),contract],
 ['fake an inferred live pulse',src.replace('No class-understanding score or reteaching recommendation has been inferred','Class appears proficient'),contract],
 ['allow local student storage',src+'\nlocalStorage.setItem("student", "record");',contract],
 ['turn a read into a write',client.replace("method:'POST'","method:'PATCH'"),connector]
]){
 assert.throws(()=>check(mutation),name+' must be caught');
}
console.log('PASS Class Pulse offline contract: UI, transparency, read-only adapter, no-JS fallback, and five negative controls');