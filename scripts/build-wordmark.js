#!/usr/bin/env node
'use strict';
// The supplied artwork is canonical. Canvas receives exactly the same web mark
// as the site; the paper variant keeps dark lettering legible on a steel band.
const fs=require('fs');
const path=require('path');
const root=path.join(__dirname,'..','assets','logos');
let failed=false;
for(const [source,target] of [
  ['behistorical-wordmark.png','behistorical-wordmark-dark.png'],
  ['behistorical-wordmark-on-paper.png','behistorical-wordmark-light.png']
]){
  const expected=fs.readFileSync(path.join(root,source));
  const output=path.join(root,target);
  if(process.argv.includes('--check')){
    if(!fs.existsSync(output)||!expected.equals(fs.readFileSync(output))){
      console.error('OUT OF DATE '+target+'; run node scripts/build-wordmark.js');
      failed=true;
    }
  }else{
    fs.writeFileSync(output,expected);
    console.log('WROTE '+target);
  }
}
if(failed)process.exitCode=1;
else if(process.argv.includes('--check'))console.log('OK Canvas wordmarks match the supplied site artwork.');

