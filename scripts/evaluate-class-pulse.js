#!/usr/bin/env node
'use strict';
const fs=require('fs'),evaluate=require('./lib/class-pulse/evaluate');
if(process.argv.length!==3){console.error('Usage: node scripts/evaluate-class-pulse.js /private/path/evaluation.json');process.exit(1);}
try{const result=evaluate(JSON.parse(fs.readFileSync(process.argv[2],'utf8')));console.log(JSON.stringify(result,null,2));}catch(e){console.error(e.message);process.exitCode=1;}
