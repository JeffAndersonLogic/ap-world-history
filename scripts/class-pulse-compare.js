#!/usr/bin/env node
'use strict';
// Usage: node scripts/class-pulse-compare.js <packet.json> <answer-key.json> <ai-run-1.json> [ai-run-2.json]
// Compares an AI's ratings of the practice packet with the answer key, and with a second run.
// Use it on practice files only; real student ratings never belong in this repository.
const fs=require('fs'),path=require('path'),{compare,describe}=require('./lib/class-pulse/compare');
const files=process.argv.slice(2);
if(files.length<3){console.error('Usage: node scripts/class-pulse-compare.js <packet.json> <answer-key.json> <ai-run-1.json> [ai-run-2.json]');process.exit(1);}
const read=f=>{try{return JSON.parse(fs.readFileSync(path.resolve(f),'utf8'));}catch(e){console.error('Could not read '+f+': '+e.message);process.exit(1);}};
const [packet,key,a,b]=files.map(read);
if(!packet.synthetic){console.error('This packet is not marked as practice. Compare practice packets only.');process.exit(1);}
compare(packet,key,a,b).then(result=>console.log(describe(result))).catch(e=>{console.error(e.message);process.exit(1);});
