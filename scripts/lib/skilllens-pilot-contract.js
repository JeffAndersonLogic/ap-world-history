'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm'), crypto = require('crypto');
const ROOT = path.resolve(__dirname, '../..');
const rubrics = require('./class-pulse/rubrics');
// The checkpoint contract: the lesson's own title, prompt, learning targets and success criteria,
// plus the rubric from class-pulse/rubrics.js. contractId fingerprints exactly what is rated, so a
// changed prompt or rubric refuses old submissions and judgments instead of mixing them.
// With no argument it builds the invented practice class's checkpoint.
module.exports = function contract(assignmentId = '2.3-checkpoint-1') {
  const rubric = rubrics[assignmentId];
  if (!rubric) throw new Error('No Class Pulse rubric for ' + assignmentId + '.');
  const sandbox = {window:{}, document:{querySelector:()=>null, createElement:()=>({style:{},setAttribute(){},appendChild(){}}), head:{appendChild(){}}}};
  vm.createContext(sandbox);
  for (const file of rubric.lessonFiles) vm.runInContext(fs.readFileSync(path.join(ROOT,file),'utf8'), sandbox, {filename:file});
  const lesson = sandbox.window.BEHISTORICAL_LESSON;
  const checkpoint = lesson.checkpoints[rubric.checkpointIndex];
  if (!checkpoint || checkpoint.title !== rubric.checkpointTitle) throw new Error('The lesson checkpoint for ' + assignmentId + ' has moved or been renamed; update class-pulse/rubrics.js.');
  const result = JSON.parse(JSON.stringify({assignmentId, title:checkpoint.title, prompt:checkpoint.prompt, learningTargets:rubric.targets.map(i => lesson.learningTargets[i].target), successCriteria:rubric.targets.map(i => lesson.successCriteria[i].criteria), ...rubric.assessment}));
  result.contractId = crypto.createHash('sha256').update(JSON.stringify(result)).digest('hex');
  // Labels for the page header; not part of what is rated, so not in the fingerprint.
  result.display = rubric.display;
  return result;
};
