#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { alignTopicConcepts } = require('./lib/ced-2026-key-concepts');

const ROOT = path.resolve(__dirname, '..');
const DATA = path.join(ROOT, 'assets', 'data');

function domNode() {
  return {
    style: {}, dataset: {},
    classList: { add() {}, remove() {}, contains() { return false; } },
    setAttribute() {}, appendChild() {}, insertBefore() {}, closest() { return null; },
    querySelector() { return null; }, querySelectorAll() { return []; },
    parentNode: { insertBefore() {} }
  };
}

function sandbox() {
  const document = {
    head: domNode(), body: domNode(), documentElement: domNode(),
    querySelector() { return null; }, querySelectorAll() { return []; },
    getElementById() { return null; }, createElement() { return domNode(); }, addEventListener() {}
  };
  const localStorage = { getItem() { return null; }, setItem() {}, removeItem() {} };
  const window = { document, localStorage, addEventListener() {}, location: { href: '' } };
  window.window = window;
  return { window, document, localStorage, console, URL, setTimeout() {}, clearTimeout() {}, navigator: { clipboard: { writeText() {} } } };
}

function scriptSources(html) {
  return [...html.matchAll(/<script\s+src=["']([^"']+)["']/gi)]
    .map((match) => match[1].split('?')[0])
    .filter((src) => src.includes('/assets/data/') || src.startsWith('../assets/data/'));
}

function findArrayEnd(source, start) {
  let depth = 0;
  let quote = null;
  let escaped = false;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
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
    if (char === '[') depth += 1;
    if (char === ']') {
      depth -= 1;
      if (depth === 0) return index;
    }
  }
  throw new Error('Unterminated collegeBoardKeyConcepts array.');
}

function writeAssignment(configPath, concepts) {
  let source = fs.readFileSync(configPath, 'utf8');
  const marker = 'lesson.collegeBoardKeyConcepts';
  const markerAt = source.indexOf(marker);
  const assignment = `lesson.collegeBoardKeyConcepts = ${JSON.stringify(concepts, null, 2)};`;

  if (markerAt >= 0) {
    const lineStart = source.lastIndexOf('\n', markerAt) + 1;
    const indent = source.slice(lineStart, markerAt);
    const arrayStart = source.indexOf('[', markerAt);
    const arrayEnd = findArrayEnd(source, arrayStart);
    const semicolon = source.indexOf(';', arrayEnd);
    const formatted = assignment.split('\n').map((line, index) => index ? indent + line : indent + line).join('\n');
    source = source.slice(0, lineStart) + formatted + source.slice(semicolon + 1);
  } else {
    const close = source.lastIndexOf('})();');
    if (close < 0) throw new Error(`Could not find IIFE close in ${configPath}`);
    const formatted = assignment.split('\n').map((line) => `  ${line}`).join('\n');
    source = `${source.slice(0, close)}${formatted}\n${source.slice(close)}`;
  }

  fs.writeFileSync(configPath, source, 'utf8');
}

const updated = [];
for (let unit = 1; unit <= 9; unit += 1) {
  const unitDir = path.join(ROOT, `unit-${unit}`);
  const shells = fs.readdirSync(unitDir)
    .filter((name) => /^lesson-\d+-\d+.*\.html$/i.test(name))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

  for (const shell of shells) {
    const html = fs.readFileSync(path.join(unitDir, shell), 'utf8');
    const sources = scriptSources(html);
    const context = sandbox();
    for (const src of sources) {
      const file = path.resolve(unitDir, src);
      vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
    }
    const lesson = context.window.BEHISTORICAL_LESSON;
    if (!lesson?.meta?.topic) continue;
    const topic = String(lesson.meta.topic).replace(/^Topic\s+/i, '').trim();
    const concepts = alignTopicConcepts(topic, lesson.collegeBoardKeyConcepts || []);
    const configPath = path.join(DATA, `lesson-${topic.replace('.', '-')}-renderer-config.js`);
    const configSource = fs.readFileSync(configPath, 'utf8');
    const alreadyOverridesConcepts = configSource.includes('lesson.collegeBoardKeyConcepts');
    const runtimeNeedsOverride = JSON.stringify(concepts) !== JSON.stringify(lesson.collegeBoardKeyConcepts || []);
    if (alreadyOverridesConcepts || runtimeNeedsOverride) writeAssignment(configPath, concepts);
    updated.push(topic);
  }
}

console.log(`Aligned ${updated.length} renderer configs to the Fall 2026 CED.`);
