'use strict';

/**
 * Which teacher surface does today's class want?
 *
 * This is the Today panel's whole decision, and it lives here rather than
 * inside the page template for one reason: the page runs it in a browser on
 * a date nobody controls, and the only failure it can have is a quiet one.
 * A registry that has fallen behind the pages on disk, or a key written
 * "Topic 2.1" where the schedule says "2.1", both render a perfectly normal
 * panel that simply never finds the surface a teacher built.
 *
 * So the page does not carry its own copy of this. teacher-index-page.js
 * embeds this function's own source with String(), which means the browser
 * runs the same bytes scripts/test/teacher-today.test.js drives offline.
 * There is no second implementation to drift, and no sentinel to hand-edit
 * past: a rebuild is the only way the page's copy changes.
 *
 * Written in ES5 with no closure over module scope, because it is going to
 * be stringified into a <script> tag.
 *
 * Returns one of:
 *   { kind: 'noschedule' }                      the schedule file did not load
 *   { kind: 'noclass', date }                   no class day matches that date
 *   { kind: 'nolesson', date, cohort }          a class day that teaches no topic
 *   { kind: 'none', date, cohort, topic }       a topic with no teacher surface
 *   { kind: 'interactive'|'runofshow', ..., href }
 */
function resolveTeacherSurface(today, schedule, interactiveTopics, rosTopics) {
  if (!schedule || !schedule.days) return { kind: 'noschedule' };

  var days = schedule.days, day = null, i;
  for (i = 0; i < days.length; i++) {
    if (days[i].date === today) { day = days[i]; break; }
  }
  if (!day) return { kind: 'noclass', date: today };

  var cohort = day.cohort || '';
  var topic = (day.topic || '').replace(/^Topic\s+/i, '').trim();
  if (!topic) return { kind: 'nolesson', date: today, cohort: cohort };

  /* Interactive lessons win over Run of Show when a topic has both: the
     command center is the integrated surface and carries the pacing inside
     it, so falling through to the older page would be a downgrade. */
  var lists = [['interactive', interactiveTopics || []], ['runofshow', rosTopics || []]];
  for (i = 0; i < lists.length; i++) {
    var kind = lists[i][0], entries = lists[i][1];
    for (var j = 0; j < entries.length; j++) {
      if (String(entries[j].key).replace(/^Topic\s+/i, '').trim() === topic) {
        return { kind: kind, date: today, cohort: cohort, topic: topic, href: entries[j].out };
      }
    }
  }
  return { kind: 'none', date: today, cohort: cohort, topic: topic };
}

/**
 * The briefing link for a teacher surface, or '' when it has none.
 *
 * Every Teaching OS page (topic-X-X-os.html) opens straight to its briefing
 * at #briefing, which is the link co-teachers share. The 1.7 command center
 * and the Run of Show pages have no briefing, so they get no link. Kept here
 * beside the router, and stringified the same way, so the AP World Command
 * Center and the JeffOS dashboard (through teacher-today-manifest.js) apply
 * one rule rather than two.
 */
function teacherBriefingHref(href) {
  href = String(href || '');
  return href.slice(-8) === '-os.html' ? href + '#briefing' : '';
}

module.exports = { resolveTeacherSurface, teacherBriefingHref };
