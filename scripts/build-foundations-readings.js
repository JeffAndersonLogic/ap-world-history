#!/usr/bin/env node
'use strict';

/**
 * Rebuild the six Foundations First & 10 readings from
 * scripts/lib/foundations-f10-content.js.
 *
 *   node scripts/build-foundations-readings.js            write the readings
 *   node scripts/build-foundations-readings.js --check    fail on drift, write nothing
 *
 * --check is what scripts/test/readings-reproducible.test.js runs, so a
 * hand-edit to a generated reading fails the build instead of surviving until
 * the next rebuild silently reverts it.
 *
 * These pages used to be six hand-authored files carrying a duplicated 80-line
 * stylesheet each. They now share assets/css/behistorical-first10.css with the
 * other 71 readings, which is why a change to the reading system reaches
 * Foundations too rather than needing a sweep script to catch it up.
 */

const fs = require('fs');
const path = require('path');
const { renderFirst10Page } = require('./lib/first10-page');
const CONTENT = require('./lib/foundations-f10-content');

const ROOT = path.resolve(__dirname, '..');
const DIR = path.join(ROOT, 'foundations');
const check = process.argv.includes('--check');

function build(topic) {
  return renderFirst10Page({
    topicId: topic.topicKey,
    // Only reached through the defaults this call overrides; kept accurate so a
    // future field that falls back to it does not inherit something wrong.
    title: (topic.topicLabel || '').replace(/^Foundations \d+\s*[-:]\s*/, ''),
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
    padQuestionNumbers: true,
    promptScript: topic.promptScript
  });
}

// Required by scripts/test/foundations-golden.js, which renders without writing.
module.exports = { build };

if (require.main !== module) return;

let wrote = 0;
const drifted = [];

for (const key of Object.keys(CONTENT)) {
  const topic = CONTENT[key];
  const target = path.join(DIR, topic.sourceFile);
  const html = build(topic);

  if (check) {
    const onDisk = fs.existsSync(target) ? fs.readFileSync(target, 'utf8') : null;
    if (onDisk !== html) drifted.push(topic.sourceFile);
    continue;
  }

  fs.writeFileSync(target, html);
  wrote++;
  console.log(`  wrote foundations/${topic.sourceFile}`);
}

if (check) {
  if (drifted.length) {
    console.error('Foundations readings differ from what the content model produces:');
    for (const f of drifted) console.error(`  foundations/${f}`);
    console.error('\nEdit scripts/lib/foundations-f10-content.js, then run: npm run build:foundations');
    process.exit(1);
  }
  console.log(`${Object.keys(CONTENT).length} Foundations readings match the content model`);
} else {
  console.log(`\n${wrote} Foundations readings rebuilt from the content model.`);
}
