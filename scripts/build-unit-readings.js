#!/usr/bin/env node
'use strict';

/**
 * Rebuild the unit First & 10 readings from scripts/lib/reading-content/<unit>.js.
 *
 *   node scripts/build-unit-readings.js            write every unit
 *   node scripts/build-unit-readings.js unit-3     write one unit
 *   node scripts/build-unit-readings.js --check    fail on drift, write nothing
 *
 * --check is what scripts/test/readings-reproducible.test.js runs, so a
 * hand-edit to a generated reading fails the push rather than surviving until
 * the next rebuild silently reverts it.
 */

const fs = require('fs');
const path = require('path');
const { renderFirst10Page } = require('./lib/first10-page');

const ROOT = path.resolve(__dirname, '..');
const DIR = path.join(ROOT, 'scripts', 'lib', 'reading-content');

const UNITS = fs.existsSync(DIR)
  ? fs.readdirSync(DIR).filter(f => f.endsWith('.js')).map(f => f.replace(/\.js$/, '')).sort()
  : [];

function build(topic) {
  return renderFirst10Page({
    topicId: topic.topicKey,
    title: (topic.topicLabel || '').replace(/^(Topic\s*)?[\d.]+\s*[-:–]\s*/, ''),
    subtitle: topic.deck,
    vocabulary: topic.vocabulary,
    sections: topic.sections,
    skills: topic.skillTags,
    skillTags: topic.skillTags,
    supportCards: topic.supportCards,
    questions: topic.questions,
    takeawayHtml: topic.takeaway,
    lessonHref: topic.lessonFile,
    coachUrl: topic.coachUrl,
    submitNote: topic.submitNote,
    titleHtml: topic.titleHtml,
    headerSubtitle: topic.headerSubtitle,
    docTitle: topic.docTitle,
    topicLabel: topic.topicLabel,
    checkBadgeHtml: topic.checkBadge,
    checkTitleHtml: topic.checkTitle,
    builderBodyHtml: topic.builderBody,
    footerNoteHtml: topic.footerNote,
    footerNote: topic.footerNote,
    navPrev: topic.navPrev,
    navNext: topic.navNext,
    padQuestionNumbers: topic.padQuestionNumbers,
    promptScript: topic.promptScript,
    moduleBadge: topic.moduleBadge,
    moduleName: topic.moduleName,
    readingEyebrow: topic.readingEyebrow,
    supportHeadings: topic.supportHeadings,
    showFooter: topic.showFooter,
    showFooterNote: topic.showFooterNote
  });
}

function allTopics() {
  const out = [];
  for (const unit of UNITS) {
    const mod = require(path.join(DIR, `${unit}.js`));
    for (const key of Object.keys(mod)) out.push(mod[key]);
  }
  return out;
}

module.exports = { build, allTopics, UNITS };

if (require.main !== module) return;

const args = process.argv.slice(2);
const check = args.includes('--check');
const only = args.find(a => !a.startsWith('-'));

let wrote = 0;
const drifted = [];

for (const topic of allTopics()) {
  if (only && topic.unitDir !== only) continue;
  const target = path.join(ROOT, topic.unitDir, topic.sourceFile);
  const html = build(topic);

  if (check) {
    const onDisk = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : null;
    if (onDisk !== html) drifted.push(`${topic.unitDir}/${topic.sourceFile}`);
    continue;
  }
  fs.writeFileSync(target, html);
  wrote++;
}

if (check) {
  if (drifted.length) {
    console.error(`${drifted.length} generated reading(s) differ from the content model:`);
    for (const f of drifted) console.error(`  ${f}`);
    console.error('\nEdit scripts/lib/reading-content/<unit>.js, then run: npm run build:readings');
    process.exit(1);
  }
  console.log(`${allTopics().length} unit readings match the content model`);
} else {
  console.log(`${wrote} unit readings rebuilt from the content model.`);
}
