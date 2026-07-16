#!/usr/bin/env node
'use strict';

/**
 * Synchronize Google Form skill mappings and First & 10 capture wrappers.
 *
 * The central form configuration is authoritative. This script fills every
 * numeric AP topic with a complete set of valid form skills, then rewrites the
 * capture wrapper URLs so their prefilled metadata cannot drift from it.
 *
 * Run from the repository root with:
 *   node scripts/synchronize-form-wiring.js
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const CONFIG_PATH = path.join(ROOT, 'assets', 'js', 'behistorical-form-config.js');
const REQUIRED_RESPONSE_TYPES = [
  'first10',
  'skillBuilder',
  'checkpoint1',
  'evidenceLab',
  'primarySource',
  'beInTheRoom',
  'checkpoint2'
];
const VALID_SKILLS = new Set([
  'Causation',
  'Comparison',
  'Continuity and Change Over Time (CCOT)',
  'Contextualization',
  'Argumentation',
  'Evidence Usage',
  'Sourcing',
  'Complexity',
  'Claims & Thesis'
]);

function loadFormConfig(source) {
  const context = { URLSearchParams };
  context.window = context;
  vm.runInNewContext(source, context, { filename: CONFIG_PATH });
  return context;
}

function primaryReasoningSkill(topicKey, topicLabel) {
  const foundationSkills = { f1: 'Causation', f2: 'Comparison', f3: 'Comparison', f4: 'Causation', f5: 'Comparison' };
  if (foundationSkills[topicKey]) return foundationSkills[topicKey];
  const label = topicLabel.toLowerCase();
  if (label.includes('comparison')) return 'Comparison';
  if (label.includes('continuity and change')) return 'Continuity and Change Over Time (CCOT)';
  return 'Causation';
}

function standardMapping(primary) {
  return {
    first10: [primary, 'Contextualization', 'Argumentation'],
    skillBuilder: [primary, 'Argumentation'],
    checkpoint1: ['Evidence Usage', primary],
    evidenceLab: ['Evidence Usage', primary],
    primarySource: ['Sourcing', 'Evidence Usage'],
    beInTheRoom: ['Contextualization', 'Argumentation'],
    checkpoint2: [primary, 'Argumentation', 'Claims & Thesis']
  };
}

function normalizeDisplayedSkill(label, topicKey, topicLabel) {
  const normalized = label.replace(/&amp;/g, '&').trim();
  if (normalized === 'Causation / Comparison') return ['Causation', 'Comparison'];
  if (normalized === 'CCOT' || /^Continuity (?:&|and) Change(?: Over Time)?$/.test(normalized)) {
    return ['Continuity and Change Over Time (CCOT)'];
  }
  if (normalized === 'Developments and Processes') return ['Evidence Usage'];
  if (normalized === 'Evaluation') return ['Argumentation'];
  if (normalized === 'Historical Thinking') return [primaryReasoningSkill(topicKey, topicLabel)];
  return [normalized];
}

function first10PagePath(topicKey) {
  const directory = /^f\d+$/.test(topicKey)
    ? path.join(ROOT, 'foundations')
    : path.join(ROOT, `unit-${topicKey.split('.')[0]}`);
  const prefix = /^f\d+$/.test(topicKey)
    ? `first-and-10-foundations-${topicKey.slice(1)}-`
    : `first-and-10-topic-${topicKey.replace('.', '-')}-`;
  const fileName = fs.readdirSync(directory)
    .find((name) => name.startsWith(prefix) && name.endsWith('.html') && !name.includes('-capture'));
  return fileName ? path.join(directory, fileName) : null;
}

function displayedFirst10Skills(topicKey, topicLabel) {
  const filePath = first10PagePath(topicKey);
  if (!filePath) return [];
  const source = fs.readFileSync(filePath, 'utf8');
  const skills = [];
  for (const match of source.matchAll(/<span class="q-skill">([^<]+)<\/span>/g)) {
    for (const skill of normalizeDisplayedSkill(match[1], topicKey, topicLabel)) {
      if (VALID_SKILLS.has(skill) && !skills.includes(skill)) skills.push(skill);
    }
  }
  return skills;
}

function preserveValidMapping(existing, fallback) {
  const result = {};
  for (const responseType of REQUIRED_RESPONSE_TYPES) {
    const current = existing && existing[responseType];
    result[responseType] = Array.isArray(current) && current.length > 0 && current.every((skill) => VALID_SKILLS.has(skill))
      ? current
      : fallback[responseType];
  }
  return result;
}

function findObjectEnd(source, openIndex) {
  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let i = openIndex; i < source.length; i++) {
    const char = source[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === "'" || char === '"' || char === '`') {
      quote = char;
      continue;
    }
    if (char === '{') depth++;
    if (char === '}' && --depth === 0) return i;
  }
  throw new Error('Could not locate the end of BH_FORM.skills.');
}

function replaceSkillsBlock(source, skills) {
  const marker = '  skills: {';
  const start = source.indexOf(marker);
  if (start < 0) throw new Error('Could not locate BH_FORM.skills.');
  const open = source.indexOf('{', start);
  const close = findObjectEnd(source, open);
  const serialized = ['{', ...Object.entries(skills).map(([topicKey, mapping], index, entries) => {
    const properties = REQUIRED_RESPONSE_TYPES
      .map((responseType) => `${responseType}: ${JSON.stringify(mapping[responseType])}`)
      .join(', ');
    return `    '${topicKey}': { ${properties} }${index < entries.length - 1 ? ',' : ''}`;
  }), '  }'].join('\n');
  return source.slice(0, start) + `  skills: ${serialized}` + source.slice(close + 1);
}

function captureTopicKey(fileName) {
  const topicMatch = fileName.match(/^first-and-10-topic-(\d+)-(\d+)-.*-capture\.html$/);
  if (topicMatch) return `${topicMatch[1]}.${topicMatch[2]}`;
  const foundationMatch = fileName.match(/^first-and-10-foundations-(\d+)-.*-capture\.html$/);
  return foundationMatch ? `f${foundationMatch[1]}` : null;
}

function synchronizeCapture(filePath, topicKey, formUrl) {
  let source = fs.readFileSync(filePath, 'utf8');
  const escapedUrl = formUrl.replace(/'/g, '&#39;');
  const constantPattern = /const\s+PREFILLED_FIRST10_FORM\s*=\s*(['"])[\s\S]*?\1;/;

  if (constantPattern.test(source)) {
    source = source.replace(constantPattern, `const PREFILLED_FIRST10_FORM='${escapedUrl}';`);
  } else {
    source = source.replace('<script>', `<script>const PREFILLED_FIRST10_FORM='${escapedUrl}';`);
  }

  source = source.replace(
    /w\.submitToGoogleForm=function\(\)\{var url=typeof w\.buildFormURL[\s\S]*?if\(url\)w\.open\(url,'_blank','noopener'\);\};/,
    "w.submitToGoogleForm=function(){w.open(PREFILLED_FIRST10_FORM,'_blank','noopener');};"
  );

  if (!source.includes('PREFILLED_FIRST10_FORM')) {
    throw new Error(`Capture wrapper was not synchronized: ${path.relative(ROOT, filePath)}`);
  }
  fs.writeFileSync(filePath, source);
  return topicKey;
}

const originalSource = fs.readFileSync(CONFIG_PATH, 'utf8');
const originalContext = loadFormConfig(originalSource);
const originalForm = originalContext.BH_FORM;
const allTopics = Object.keys(originalForm.topics)
  .filter((topicKey) => /^\d+\.\d+$/.test(topicKey) || /^f\d+$/.test(topicKey))
  .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

const completeSkills = {};
for (const topicKey of allTopics) {
  const fallback = standardMapping(primaryReasoningSkill(topicKey, originalForm.topics[topicKey]));
  completeSkills[topicKey] = preserveValidMapping(originalForm.skills[topicKey], fallback);
  const pageSkills = displayedFirst10Skills(topicKey, originalForm.topics[topicKey]);
  if (pageSkills.length > 0) completeSkills[topicKey].first10 = pageSkills;
}

const synchronizedSource = replaceSkillsBlock(originalSource, completeSkills);
fs.writeFileSync(CONFIG_PATH, synchronizedSource);

const synchronizedContext = loadFormConfig(synchronizedSource);
let captureCount = 0;
for (let unit = 1; unit <= 9; unit++) {
  const unitDir = path.join(ROOT, `unit-${unit}`);
  if (!fs.existsSync(unitDir)) continue;
  for (const fileName of fs.readdirSync(unitDir)) {
    const topicKey = captureTopicKey(fileName);
    if (!topicKey) continue;
    const formUrl = synchronizedContext.buildFormURL(topicKey, 'first10');
    synchronizeCapture(path.join(unitDir, fileName), topicKey, formUrl);
    captureCount++;
  }
}

const foundationsDir = path.join(ROOT, 'foundations');
for (const fileName of fs.readdirSync(foundationsDir)) {
  const topicKey = captureTopicKey(fileName);
  if (!topicKey) continue;
  const formUrl = synchronizedContext.buildFormURL(topicKey, 'first10');
  synchronizeCapture(path.join(foundationsDir, fileName), topicKey, formUrl);
  captureCount++;
}

console.log(`Synchronized ${allTopics.length} topic mappings and ${captureCount} capture wrappers.`);
