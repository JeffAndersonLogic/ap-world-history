#!/usr/bin/env node
/**
 * canvas-topic-recovery.test.js
 *
 * A submission whose record footer is missing must still land on a topic.
 *
 * This is the check for a failure that hid in plain sight for the first two
 * lessons of the 2026 school year. The record footer prints as faint monospace
 * under an "--- BEHISTORICAL RECORD, do not edit ---" line styled exactly like
 * the hashes beneath it, so it read as decoration and students deleted it or
 * failed to select it when copying. The parser handled that: parseWithoutManifest
 * recovers every response, label and prompt on the legacy grammar.
 *
 * What it did not recover was the topic, and only on Foundations. The pattern
 * accepted "Topic 1.1" and "F1"; the Foundations renderer writes
 * "AP World History, FOUNDATIONS 1", which matched neither. A response with an
 * empty topic_id drops out of every topic-filtered panel in the Skills Lens, so
 * the writing survived into responses.csv and the student vanished from the
 * class. On the real drops that was 16 of 115 students on f1, and all but 6 of
 * 130 on f0: 1,257 responses read, 66 attributed.
 *
 * Nothing in the offline suite could see it. The responses were present, the
 * counts were internally consistent, and the only symptom was a denominator that
 * looked like students had not done the work.
 *
 * Two contracts are asserted here:
 *
 *   1. Every heading either renderer writes resolves to the topic key that
 *      skills-map.js uses. Foundations keys are f0..f5, lowercase.
 *   2. The "Topic code:" line both renderers now print in the heading block wins
 *      over the prose, and sits where neither parse path can read it as an
 *      answer.
 *
 * Runs offline, no browser, no dependencies.
 *
 *   node scripts/test/canvas-topic-recovery.test.js
 */

'use strict';

const {
  recoverTopicId, normalizeTopicId, parseSubmission, submissionText
} = require('../parse-canvas-submissions');

const results = [];
function check(name, pass, detail) {
  results.push(pass);
  console.log(`  ${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? '  (' + detail + ')' : ''}`);
}

console.log('\n  Headings the renderers actually write\n');

// foundations-topic-renderer.js: 'AP World History' + ', ' + T.code, and every
// Foundations data file sets code to 'FOUNDATIONS <n>'. This is the shape that
// used to resolve to nothing.
[['AP WORLD HISTORY, FOUNDATIONS 0', 'f0'],
 ['AP WORLD HISTORY, FOUNDATIONS 1', 'f1'],
 ['AP WORLD HISTORY, FOUNDATIONS 5', 'f5'],
 // behistorical-topic-renderer-v1.js: 'AP World History, Topic ' + id.
 ['AP WORLD HISTORY, TOPIC 1.1', '1.1'],
 ['AP WORLD HISTORY, TOPIC 5.10', '5.10'],
 // The legacy shape, still accepted, now normalized to the skills-map key.
 ['AP WORLD HISTORY, F1', 'f1']
].forEach(([heading, want]) => {
  const got = recoverTopicId(heading + '\n\nMODULE 01, MAP & GEOGRAPHY CHECK\n');
  check(`${heading} resolves to ${want}`, got === want, got || 'empty');
});

check('an unrelated document resolves to no topic rather than a guess',
  recoverTopicId('Some other assignment entirely') === '');

console.log('\n  The explicit code line wins over the prose\n');

check('Topic code beats a heading that disagrees with it',
  recoverTopicId('AP WORLD HISTORY, FOUNDATIONS 2\nTopic code: f4\n') === 'f4');
check('Topic code alone is enough with no recognizable heading',
  recoverTopicId('Student work\nTopic code: 7.3\n') === '7.3');

console.log('\n  Keys normalize to what skills-map.js uses\n');

[['F1', 'f1'], ['f1', 'f1'], ['FOUNDATIONS 3', 'f3'], ['1.1', '1.1'], ['', '']]
  .forEach(([raw, want]) => check(`${JSON.stringify(raw)} normalizes to ${JSON.stringify(want)}`,
    normalizeTopicId(raw) === want));

console.log('\n  End to end: a footer-less Foundations submission\n');

// Shaped like the real thing: the heading block, then module sections, and no
// record footer at all. This is exactly what the 16 f1 students submitted.
const FOOTERLESS = [
  '<p><strong>AP World History, FOUNDATIONS 1</strong><br>',
  '<strong>Geography Shapes Civilization</strong></p>',
  '<p>Topic code: f1</p>',
  '<p><em>Student work, copied 8/10/2026, 9:14:02 AM</em></p>',
  '<hr>',
  '<p><strong>Module 01, Map &amp; Geography Check</strong></p>',
  '<p><strong>Question:</strong> <em>Choose one geographic feature from the map.</em></p>',
  '<p><strong>My response:</strong></p>',
  '<p>In the Nile people could be farmers because the river flooded every year.</p>',
  '<hr>',
  '<p><strong>Module 02, First &amp; 10, Question 1</strong></p>',
  '<p><strong>Question:</strong> <em>Reconstruct the causal chain.</em></p>',
  '<p><strong>My response:</strong></p>',
  '<p>The end of the Ice Age set off a chain that led to civilization.</p>'
].join('\n');

// Through submissionText first, which is the call path buildTable uses: the
// parser reads text, and Canvas hands over HTML.
const NAME = 'bergjuliet_LATE_14800_text.html';
const parsed = parseSubmission(submissionText(NAME, FOOTERLESS), NAME);

check('the topic is recovered', parsed.topicId === 'f1', parsed.topicId || 'empty');
check('both responses are recovered', parsed.responses.length === 2,
  String(parsed.responses.length));
check('it is still flagged NO_MANIFEST, because completeness is unknowable',
  parsed.exceptions.some(e => e.reason === 'NO_MANIFEST'));
check('the first response is the student\'s writing, not the heading',
  /In the Nile people could be farmers/.test(parsed.responses[0].response));

// The heading additions must not leak into an answer. The code line sits above
// the first module label, and the note sits below the opening sentinel, so
// neither can be swept into a response by either parse path.
check('the Topic code line does not appear inside any response',
  parsed.responses.every(r => !/Topic code/i.test(r.response)));
check('the heading does not appear inside any response',
  parsed.responses.every(r => !/AP World History/i.test(r.response)));

const failed = results.filter(r => !r).length;
console.log(`\n  ${results.length - failed}/${results.length} passed\n`);
process.exit(failed ? 1 : 0);
