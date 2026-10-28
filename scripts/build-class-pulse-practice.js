#!/usr/bin/env node
'use strict';
// Builds the practice packet and its draft answer key from scripts/lib/class-pulse/practice-set.js.
// --check fails if either generated file has drifted from the source.
const fs=require('fs'),path=require('path'),root=path.resolve(__dirname,'..');
const contract=require('./lib/skilllens-pilot-contract')(),H=require('../teacher/class-pulse/ai-handoff'),set=require('./lib/class-pulse/practice-set');
const OUT='docs/class-pulse/practice';
(async()=>{
 const responses=set.map(p=>({id:p.id,text:p.text,submission:'submitted'}));
 const packet=await H.buildPacket(contract,responses,{synthetic:true,now:'2026-10-28T00:00:00.000Z'});
 const ratings=[];
 for(const p of set){const hash=await H.sha256(p.text),answer=packet.answers.find(a=>a.textSha256===hash);
  ratings.push({key:answer.key,textSha256:hash,criteria:contract.criteria.map(c=>{const [band,reason,quote]=p.key[c.id];return{criterionId:c.id,band,reason,quote};})});}
 ratings.sort((x,y)=>x.key.localeCompare(y.key));
 const key={format:H.RATINGS,contractId:contract.contractId,rater:{name:'Draft answer key (written by Claude; Jeff to check)',instructionsVersion:H.INSTRUCTIONS},ratings};
 const outputs={[OUT+'/practice-packet.json']:packet,[OUT+'/answer-key.json']:key};
 const check=process.argv.includes('--check');
 for(const [file,value] of Object.entries(outputs)){const text=JSON.stringify(value,null,2)+'\n',full=path.join(root,file);
  if(check){if(!fs.existsSync(full)||fs.readFileSync(full,'utf8')!==text){console.error(file+' is stale. Run node scripts/build-class-pulse-practice.js');process.exit(1);}}
  else{fs.mkdirSync(path.dirname(full),{recursive:true});fs.writeFileSync(full,text);}}
 console.log('PASS Class Pulse practice packet and answer key '+(check?'match the source.':'generated.'));
})().catch(e=>{console.error(e.message);process.exit(1);});
