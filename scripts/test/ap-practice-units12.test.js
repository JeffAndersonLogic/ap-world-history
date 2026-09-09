#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const DATA = path.join(ROOT, 'assets', 'data');
const PRACTICE = path.join(DATA, 'ap-practice-units-1-2.js');
const problems = [];
const SOURCE_UPGRADE_TOPICS = new Set(['1.5', '1.6', '1.7', '2.1', '2.2', '2.3', '2.4', '2.5', '2.6', '2.7']);
const FRQ_BACKWARD_DESIGN_TOPICS = new Set(SOURCE_UPGRADE_TOPICS);

const EXPECTED = {
  '1.1': ['Contextualization', 'Continuity and Change'],
  '1.2': ['Developments and Processes', 'Causation'],
  '1.3': ['Claims and Evidence', 'Comparison'],
  '1.4': ['Claims and Evidence', 'Continuity and Change'],
  '1.5': ['Developments and Processes', 'Continuity and Change'],
  '1.6': ['Developments and Processes', 'Causation'],
  '1.7': ['Argumentation', 'Comparison'],
  '2.1': ['Contextualization', 'Causation'],
  '2.2': ['Making Connections', 'Continuity and Change'],
  '2.3': ['Making Connections', 'Causation'],
  '2.4': ['Developments and Processes', 'Causation'],
  '2.5': ['Sourcing and Situation', 'Causation'],
  '2.6': ['Making Connections', 'Causation'],
  '2.7': ['Argumentation', 'Comparison']
};

function sandbox() {
  const box = {
    window: {},
    document: {
      addEventListener() {},
      getElementById: () => null,
      querySelectorAll: () => [],
      querySelector: () => null,
      createElement: () => ({ style: {}, setAttribute() {}, appendChild() {} }),
      head: { appendChild() {} },
      body: { appendChild() {} }
    },
    setTimeout() {},
    MutationObserver: function MutationObserver() { this.observe = () => {}; }
  };
  box.globalThis = box;
  return vm.createContext(box);
}

function run(ctx, file) {
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx, { filename: path.basename(file) });
}

function words(value) {
  return String(value || '').trim().split(/\s+/).filter(Boolean).length;
}

function issue(topic, message) {
  problems.push(`Topic ${topic}: ${message}`);
}

for (const topic of Object.keys(EXPECTED)) {
  const [unit, minor] = topic.split('.');
  const dataFile = fs.readdirSync(DATA).find(name =>
    new RegExp(`^lesson-${unit}-${minor}-(?!renderer-config|standards-addon).+\\.js$`).test(name)
  );
  const configFile = path.join(DATA, `lesson-${unit}-${minor}-renderer-config.js`);
  if (!dataFile || !fs.existsSync(configFile)) {
    issue(topic, 'lesson data or renderer config is missing');
    continue;
  }

  const ctx = sandbox();
  try {
    run(ctx, path.join(DATA, dataFile));
    run(ctx, configFile);
    run(ctx, PRACTICE);
  } catch (error) {
    issue(topic, `practice data failed to evaluate: ${error.message}`);
    continue;
  }

  const lesson = ctx.window.BEHISTORICAL_LESSON || {};
  const skill = lesson.skillBuilder || {};
  const lab = lesson.evidenceLab || {};
  const source = lesson.primarySource || {};
  const [suggestedSkill, reasoning] = EXPECTED[topic];

  if (!String(skill.label).includes(suggestedSkill)) issue(topic, `Skill Builder does not name CED skill ${suggestedSkill}`);
  if (!String(skill.label).includes(reasoning)) issue(topic, `Skill Builder does not name reasoning process ${reasoning}`);
  if (words(skill.prompt) < 28) issue(topic, 'Skill Builder prompt is too thin for rigorous AP practice');
  if (!Array.isArray(skill.steps) || skill.steps.length !== 3) issue(topic, 'Skill Builder must teach exactly three deliberate moves');
  if (!Array.isArray(skill.criteria) || skill.criteria.length < 4) issue(topic, 'Skill Builder needs a four-part quality check');

  if (!lab.task || String(lab.task).includes('undefined')) issue(topic, 'Evidence Lab task is missing');
  if (words(lab.prompt) < 28) issue(topic, 'Evidence Lab prompt is too thin for evidence reasoning');
  if (!lab.skill || !Array.isArray(lab.terms) || lab.terms.length < 5) issue(topic, 'Evidence Lab lacks skill and evidence metadata');
  if (!Array.isArray(lab.criteria) || lab.criteria.length < 4) issue(topic, 'Evidence Lab needs explicit evidence-quality criteria');
  if (!(lesson.images || []).length && !(lab.items || []).length) issue(topic, 'Evidence Lab has no evidence set to analyze');

  if (!source.attribution) issue(topic, 'Primary Source attribution is missing');
  if (!source.sourceNote) issue(topic, 'Primary Source transparency note is missing');
  if (!Array.isArray(source.questions) || source.questions.length !== 3) issue(topic, 'Primary Source task must have three AP-style parts');
  else ['(a)', '(b)', '(c)'].forEach((part, index) => {
    if (!String(source.questions[index]).startsWith(part)) issue(topic, `Primary Source part ${part} is not discrete`);
  });
  if (words(source.responsePrompt) < 28) issue(topic, 'Primary Source response prompt is too thin');
  if (!source.skill || !Array.isArray(source.terms) || source.terms.length < 5) issue(topic, 'Primary Source lacks skill and evidence metadata');
  if (FRQ_BACKWARD_DESIGN_TOPICS.has(topic)) {
    const studentFacingPractice = [
      skill.intro,
      skill.prompt,
      ...(skill.steps || []).map(step => `${step.label} ${step.text}`),
      ...(skill.criteria || []),
      lab.task,
      lab.prompt,
      ...(lab.criteria || []),
      ...(source.questions || []),
      source.responsePrompt
    ].join(' ');

    if (/\brubric\b|\bscor(?:e|ed|ing)\b|\bearn(?:s|ed|ing)? credit\b/i.test(studentFacingPractice)) {
      issue(topic, 'student-facing practice exposes scoring language instead of keeping the rubric in the authoring layer');
    }
    if (!/\b(explain|evaluate|develop|compare)\b/i.test(String(skill.prompt))) {
      issue(topic, 'Skill Builder prompt does not require an AP-level reasoning action');
    }
    if (!/\b(specific|precise|evidence|example|detail|development)\b/i.test(String(skill.prompt))) {
      issue(topic, 'Skill Builder prompt does not require historically specific support');
    }
    if (!/\b(claim|argument|judgment|explanation)\b/i.test(String(lab.prompt)) || !/\bexplain/i.test(String(lab.prompt))) {
      issue(topic, 'Evidence Lab does not require students to build and explain an evidence-based judgment');
    }
    const explanatoryParts = (source.questions || []).filter(question => /^\([a-c]\) Explain\b/i.test(String(question))).length;
    if (explanatoryParts < 2) issue(topic, 'Primary Source task needs at least two explanation-level parts');
    if (!/\b(detail|evidence|mechanism|connection|passage|source)\b/i.test(String(source.responsePrompt))) {
      issue(topic, 'Primary Source directions do not coach students toward evidence-based explanation');
    }
  }
  if (SOURCE_UPGRADE_TOPICS.has(topic)) {
    if (words(source.text) < 70) issue(topic, 'upgraded Primary Source passage is shorter than 70 words');
    if (!/translat|translation/i.test(String(source.attribution))) issue(topic, 'upgraded Primary Source does not name its translation or translator');
    if (!/continuous/i.test(String(source.sourceNote))) issue(topic, 'upgraded Primary Source does not document its continuous-passage method');
    if (/condens|\bcomposite\b/i.test(String(source.sourceNote))) issue(topic, 'upgraded Primary Source still describes itself as a condensed or composite passage');
    if (!Array.isArray(source.sourceLinks) || !source.sourceLinks.length) issue(topic, 'upgraded Primary Source lacks a traceable edition link');
    else source.sourceLinks.forEach(link => {
      if (!link.label || !/^https:\/\//.test(String(link.url))) issue(topic, 'upgraded Primary Source has an incomplete or non-HTTPS edition link');
    });
  }

  const shell = path.join(ROOT, `unit-${unit}`, `lesson-${unit}-${minor}-${dataFile.replace(new RegExp(`^lesson-${unit}-${minor}-|\\.js$`, 'g'), '')}.html`);
  if (!fs.existsSync(shell)) issue(topic, 'lesson shell could not be resolved');
  else {
    const html = fs.readFileSync(shell, 'utf8');
    const configAt = html.indexOf(`lesson-${unit}-${minor}-renderer-config.js`);
    const practiceAt = html.indexOf('ap-practice-units-1-2.js');
    const rendererAt = html.indexOf('behistorical-topic-renderer-v1.js');
    if (!(configAt !== -1 && configAt < practiceAt && practiceAt < rendererAt)) {
      issue(topic, 'lesson shell does not load config, AP practice, and renderer in that order');
    }
  }
}

if (problems.length) {
  console.error(`Units 1-2 AP practice validation failed (${problems.length}):`);
  problems.forEach(problem => console.error(`  - ${problem}`));
  process.exit(1);
}

console.log('Units 1-2 AP practice validation passed: 14 topics, 42 revised modules, 10 traceable source editions, and 30 unscored rubric-backward-designed tasks from Topic 1.5 forward.');
