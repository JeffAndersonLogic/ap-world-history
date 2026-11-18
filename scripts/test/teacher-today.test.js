#!/usr/bin/env node
/**
 * teacher-today.test.js
 *
 * The Today panel on teacher/index.html answers one question: it is this
 * date, which teacher surface does this class want. Getting it wrong has no
 * symptom. The page renders, the tool grid is complete, validate.js reports
 * every declared tool linked, and the panel simply says the topic "does not
 * have a teacher command surface yet" about a surface that has been sitting
 * in teacher/ for weeks.
 *
 * That is exactly what happened. Topics 2.1 and 2.2 had working command
 * centers and INTERACTIVE_TOPICS still listed only the 1.7 pilot, so on the
 * two mornings those lessons were taught the panel would have sent a teacher
 * nowhere.
 *
 * So this drives the real decision against the real schedule and the real
 * registry. It is offline and in the push gate because none of it needs a
 * browser: teacher-index-page.js embeds this same function's own source with
 * String(), so what runs here is what runs on the projector.
 *
 *   node scripts/test/teacher-today.test.js
 */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..', '..');
const { resolveTeacherSurface, teacherBriefingHref } = require('../lib/teacher-today.js');
const { TOOLS, INTERACTIVE_TOPICS, MANIFEST_OUT } = require('../build-teacher-index.js');
const { TOPICS: ROS_TOPICS } = require('../build-run-of-show.js');

const G = '\x1b[32m', R = '\x1b[31m', W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';
let failed = 0;

function ok(label, cond, detail) {
  if (cond) console.log(`  ${G}PASS${X}  ${label}${detail ? `  ${D}(${detail})${X}` : ''}`);
  else { failed++; console.log(`  ${R}FAIL${X}  ${label}${detail ? `  ${D}(${detail})${X}` : ''}`); }
}

function loadWindow(rel) {
  const box = { window: {}, console: { log() {}, warn() {}, error() {} } };
  vm.runInContext(fs.readFileSync(path.join(ROOT, rel), 'utf8'), vm.createContext(box), { filename: rel });
  return box.window;
}

const schedule = loadWindow('assets/data/announcements-schedule.js').BEHISTORICAL_SCHEDULE;

// Run of Show declares data files, not topic keys; the builder resolves them
// the same way, so resolve them here rather than typing a second list.
const rosTopics = ROS_TOPICS.map(t => {
  const box = { window: {}, console: { log() {}, warn() {}, error() {} } };
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets', 'data', t.dataFile), 'utf8'), vm.createContext(box), { filename: t.dataFile });
  const L = box.window.BEHISTORICAL_LESSON;
  return { key: (L.meta.topic || '').replace(/^Topic\s+/i, '').trim(), out: t.out };
});

const resolve = today => resolveTeacherSurface(today, schedule, INTERACTIVE_TOPICS, rosTopics);
const dayFor = topic => (schedule.days || []).filter(d => d.topic === topic).map(d => d.date);

console.log(`\n${W}The Today panel routes a date to the right teacher surface${X}\n`);

// 1. Every registered interactive lesson is reachable on every day it is taught.
//    Both cohorts, because a topic is taught twice and the second morning is
//    exactly as easy to strand as the first.
//    A lesson marked `undated` is built and listed before its class dates
//    exist (Jeff, 2026-11-02, for Unit 5). It must really have no dates: the
//    flag on a scheduled topic would be a stale label, so that fails too.
const UNDATED = new Set(TOOLS.filter(t => t.kind === 'lesson' && t.undated).map(t => t.key));
for (const entry of INTERACTIVE_TOPICS) {
  const dates = dayFor(entry.key);
  if (UNDATED.has(entry.key)) {
    ok(`Topic ${entry.key} is listed before its dates, and really has none`, dates.length === 0,
      dates.length ? 'scheduled on ' + dates.join(', ') + ': remove `undated` from its TOOLS entry' : 'undated');
    continue;
  }
  ok(`Topic ${entry.key} is scheduled at all`, dates.length > 0, dates.join(', ') || 'never scheduled');
  for (const date of dates) {
    const got = resolve(date);
    ok(`  ${date} routes to ${entry.out}`,
      got.kind === 'interactive' && got.href === entry.out,
      `${got.kind}${got.href ? ' -> ' + got.href : ''}`);
  }
}

// 2. The visible Teaching OS library and Today routing share one registry.
//    Unit 2 uses one canonical topic-*-os URL per lesson; compatibility aliases
//    may remain on disk, but the command center never advertises both.
{
  const lessonTools = TOOLS.filter(t => t.kind === 'lesson');
  const lessonKeys = lessonTools.map(t => t.key);
  ok('the teacher lesson registry has no duplicate topic keys',
    new Set(lessonKeys).size === lessonKeys.length, lessonKeys.join(', '));
  ok('Today routing is derived from every visible lesson entry',
    lessonTools.length === INTERACTIVE_TOPICS.length &&
      lessonTools.every(t => INTERACTIVE_TOPICS.some(i => i.key === t.key && i.out === t.href)),
    lessonTools.length + ' lesson(s)');
  for (const t of lessonTools.filter(t => t.unit === '2')) {
    const canonical = 'topic-' + t.key.replace('.', '-') + '-os.html';
    ok('  Topic ' + t.key + ' uses canonical Teaching OS URL',
      t.href === canonical, t.href);
  }
}

// 3. A topic with a Run of Show and no interactive lesson still gets its page.
const rosOnly = rosTopics.filter(t => !INTERACTIVE_TOPICS.some(i => i.key === t.key));
ok('some topic has a Run of Show and no interactive lesson', rosOnly.length > 0, `${rosOnly.length} topic(s)`);
for (const t of rosOnly) {
  for (const date of dayFor(t.key)) {
    const got = resolve(date);
    ok(`  ${date} (Topic ${t.key}) routes to ${t.out}`,
      got.kind === 'runofshow' && got.href === t.out,
      `${got.kind}${got.href ? ' -> ' + got.href : ''}`);
  }
}

// 4. Interactive wins when a topic has both. Asserted against a fixture rather
//    than live data, so it keeps holding on the day a registered topic gains a
//    Run of Show page as well.
{
  const both = resolveTeacherSurface('2026-09-16', schedule,
    [{ key: '2.1', out: 'command-center-topic-2-1.html' }],
    [{ key: '2.1', out: 'run-of-show-topic-2-1.html' }]);
  ok('an interactive lesson outranks a Run of Show for the same topic',
    both.kind === 'interactive' && both.href === 'command-center-topic-2-1.html', both.kind);
}

// 5. The honest answers. Each one is a case the panel used to render badly or
//    not at all, and none of them may resolve to a link.
{
  const noclass = resolve('2026-12-25');
  ok('a date with no class says so rather than guessing', noclass.kind === 'noclass', noclass.kind);

  const blank = (schedule.days || []).filter(d => !d.topic)[0];
  ok('the schedule still has a class day that teaches no topic', !!blank, blank ? blank.date : 'none');
  if (blank) {
    const got = resolve(blank.date);
    ok(`  ${blank.date} is reported as a day with no lesson, not as Topic ""`,
      got.kind === 'nolesson' && got.cohort === blank.cohort, got.kind);
  }

  const unbuilt = (schedule.days || []).filter(d =>
    d.topic && !INTERACTIVE_TOPICS.some(i => i.key === d.topic) && !rosTopics.some(t => t.key === d.topic))[0];
  ok('some scheduled topic still has no teacher surface', !!unbuilt, unbuilt ? `Topic ${unbuilt.topic}` : 'all covered');
  if (unbuilt) {
    const got = resolve(unbuilt.date);
    ok(`  Topic ${unbuilt.topic} reports no surface rather than a dead link`,
      got.kind === 'none' && !got.href, got.kind);
  }

  ok('a missing schedule is reported, never thrown',
    resolveTeacherSurface('2026-09-16', null, INTERACTIVE_TOPICS, rosTopics).kind === 'noschedule');
}

// 6. The key format the registry has to match. "Topic 2.1" against "2.1" is a
//    mismatch that renders a perfectly normal empty panel, so both spellings
//    resolve rather than only the one that happens to be typed today.
{
  const spelled = resolveTeacherSurface('2026-09-16', schedule,
    [{ key: 'Topic 2.1', out: 'command-center-topic-2-1.html' }], []);
  ok('a registry key written "Topic 2.1" still matches schedule key "2.1"',
    spelled.kind === 'interactive', spelled.kind);
}

// 7. The page runs this function's own source, so a hand-edit to the generated
//    page that changed the routing would pass every other check.
{
  const page = fs.readFileSync(path.join(ROOT, 'teacher', 'index.html'), 'utf8');
  ok('teacher/index.html embeds this exact function, not a copy of it',
    page.includes(String(resolveTeacherSurface)));
  ok('teacher command center keeps the AP World hero heading',
    page.includes('AP World Command Center'));
  const hasBrandWordmark = html => html.includes('class="tc-brand-logo"') && html.includes('src="../assets/logos/behistorical-wordmark-on-dark.png"') && html.includes('alt="BeHistorical"');
  const hasBrandGlobe = html => html.includes('class="tc-hero-globe"') && html.includes('src="../assets/logos/behistorical-globe.png" alt="" aria-hidden="true"');
  ok('teacher command center uses the Globe-O brand wordmark', hasBrandWordmark(page));
  ok('teacher command center uses the decorative gold brand globe', hasBrandGlobe(page));
  ok('control: replacing the wordmark with the old treatment is caught',
    !hasBrandWordmark(page.replace('behistorical-wordmark-on-dark.png', 'old-wordmark.png')));
  ok('control: replacing the brand globe with the old map is caught',
    !hasBrandGlobe(page.replace('behistorical-globe.png', 'map.svg')));
}

// 8. The briefing rule. Teaching OS pages have a #briefing; the 1.7 command
//    center and the Run of Show pages do not, so they must get no link.
{
  ok('a Teaching OS page gets its #briefing link',
    teacherBriefingHref('topic-4-8-os.html') === 'topic-4-8-os.html#briefing');
  ok('the 1.7 command center gets no briefing link', teacherBriefingHref('command-center-topic-1-7.html') === '');
  ok('a Run of Show page gets no briefing link', teacherBriefingHref('run-of-show-topic-1-4.html') === '');
  ok('no surface at all gets no briefing link', teacherBriefingHref(undefined) === '');
}

// 9. teacher/teacher-today-manifest.js is what the JeffOS Command Center reads
//    to show this same Today card. Before it existed the dashboard routed from
//    the Run of Show manifest alone and offered the Run of Show index on every
//    Teaching OS day. So it must carry the same registry and run the same
//    decision as this page, on every scheduled date.
{
  const rel = 'teacher/' + MANIFEST_OUT;
  const text = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  const loadManifest = src => {
    const box = { window: {} };
    vm.runInContext(src, vm.createContext(box), { filename: rel });
    return box.window.BEHISTORICAL_TEACHER_TODAY;
  };
  const m = loadManifest(text);
  ok('the manifest defines window.BEHISTORICAL_TEACHER_TODAY', !!(m && typeof m.resolve === 'function'));
  ok('the manifest embeds this exact router and briefing rule, not copies',
    text.includes(String(resolveTeacherSurface)) && text.includes(String(teacherBriefingHref)));
  const sameRegistry = mm => JSON.stringify(mm.interactive.map(t => ({ key: t.key, out: t.out }))) === JSON.stringify(INTERACTIVE_TOPICS) &&
    JSON.stringify(mm.runOfShow) === JSON.stringify(rosTopics);
  ok('the manifest carries the same lesson and Run of Show registry as this page', sameRegistry(m));
  ok('every lesson in the manifest carries its library title',
    m.interactive.every(t => t.title), m.interactive.filter(t => !t.title).map(t => t.key).join(', ') || 'all titled');

  const agrees = mm => (schedule.days || []).every(d => {
    const a = resolve(d.date), b = mm.resolve(d.date, schedule, mm.interactive, mm.runOfShow);
    return a.kind === b.kind && a.href === b.href && mm.briefing(b.href) === teacherBriefingHref(a.href);
  });
  ok('the manifest routes every scheduled date exactly as this page does', agrees(m),
    (schedule.days || []).length + ' date(s)');

  // Negative controls: a manifest that lost a lesson, or whose router fell
  // back to Run of Show first, is caught by the checks above.
  const dropped = loadManifest(text.replace('{"key":"4.8","out":"topic-4-8-os.html"', '{"key":"9.9","out":"topic-4-8-os.html"'));
  ok('control: a manifest missing a scheduled lesson is caught', !sameRegistry(dropped) && !agrees(dropped));
  const flipped = loadManifest(text.replace("[['interactive', interactiveTopics || []], ['runofshow', rosTopics || []]]",
    "[['runofshow', rosTopics || []], ['interactive', interactiveTopics || []]]"));
  const flippedBoth = flipped.resolve('2026-09-16', schedule,
    [{ key: '2.1', out: 'topic-2-1-os.html' }], [{ key: '2.1', out: 'run-of-show-topic-2-1.html' }]);
  ok('control: a manifest router that prefers Run of Show is caught',
    !text.includes("[['runofshow'") && flippedBoth.kind === 'runofshow' &&
    !fs.readFileSync(path.join(ROOT, rel), 'utf8').includes(String(flipped.resolve)));
}

console.log('');
if (failed) { console.log(`${R}${W}${failed} check(s) failed.${X}\n`); process.exit(1); }
console.log(`${G}${W}Today routing: all checks passed.${X}\n`);

