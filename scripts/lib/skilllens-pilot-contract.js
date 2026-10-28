'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm'), crypto = require('crypto');
const ROOT = path.resolve(__dirname, '../..');
module.exports = function contract() {
  const sandbox = {window:{}, document:{querySelector:()=>null, createElement:()=>({style:{},setAttribute(){},appendChild(){}}), head:{appendChild(){}}}};
  vm.createContext(sandbox);
  for (const file of ['assets/data/lesson-2-3-indian-ocean.js', 'assets/data/lesson-2-3-renderer-config.js']) vm.runInContext(fs.readFileSync(path.join(ROOT,file),'utf8'), sandbox, {filename:file});
  const lesson = sandbox.window.BEHISTORICAL_LESSON;
  const checkpoint = lesson.checkpoints[0];
  const result = JSON.parse(JSON.stringify({assignmentId:'2.3-checkpoint-1', title:checkpoint.title, prompt:checkpoint.prompt, learningTargets:checkpoint.learningTargets, successCriteria:checkpoint.successCriteria, ...checkpoint.assessment}));
  result.contractId = crypto.createHash('sha256').update(JSON.stringify(result)).digest('hex');
  return result;
};
