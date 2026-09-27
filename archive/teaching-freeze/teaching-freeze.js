'use strict';

/**
 * The teaching freeze, as logic rather than memory. See "The teaching freeze" in
 * CLAUDE.md for the rule itself.
 *
 * A topic is frozen from its first scheduled class day through its last, which
 * on the alternating block is Green's day through Silver's. While it is frozen,
 * no change to the files students or the projector see for that topic may reach
 * main, unless a commit in the change carries a `Ship-this-fix:` trailer, which
 * is only written when Jeff has said "ship this fix".
 *
 * Pure functions only. The git side lives in scripts/check-teaching-freeze.js so
 * the decision can be tested offline against the real schedule without a repo.
 */

const SCHOOL_TIME_ZONE = 'America/Indiana/Indianapolis';

// Files that carry content for several topics in one file, where a filename
// cannot say which topic an edit touched. Each is re-evaluated per topic and the
// two results compared. Multi-topic *source* files whose output is committed per
// topic (reading-content/<unit>.js -> one First & 10 page per topic) do not need
// an entry: the generated page is what changes, and it is matched by name.
const MULTI_TOPIC_FILES = ['assets/data/ap-practice-units-1-2.js'];

/** Today's date as YYYY-MM-DD in the school's own time zone, not the machine's. */
function schoolDate(now, timeZone = SCHOOL_TIME_ZONE) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone, year: 'numeric', month: '2-digit', day: '2-digit'
  }).formatToParts(now);
  const get = type => parts.find(p => p.type === type).value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}

/** { topic: { first, last } } from the schedule's class days. */
function freezeWindows(schedule) {
  const windows = {};
  for (const day of schedule.days || []) {
    if (!day.topic || !day.date) continue;
    const w = windows[day.topic] || (windows[day.topic] = { first: day.date, last: day.date });
    if (day.date < w.first) w.first = day.date;
    if (day.date > w.last) w.last = day.date;
  }
  return windows;
}

/** Topics frozen on `date` (YYYY-MM-DD, compared as strings). */
function frozenTopics(schedule, date) {
  const windows = freezeWindows(schedule);
  return Object.keys(windows)
    .filter(t => windows[t].first <= date && date <= windows[t].last)
    .map(t => ({ topic: t, ...windows[t] }));
}

/**
 * Filename patterns that belong to one topic. `(?![0-9])` keeps 5.1 from
 * claiming 5.10's files; the course has a Topic 5.10.
 */
function topicPatterns(topic) {
  const f = /^F(\d+)$/.exec(topic);
  if (f) return [new RegExp(`foundations-${f[1]}-`)];
  const u = /^(\d+)\.(\d+)$/.exec(topic);
  if (!u) return [];
  const key = `${u[1]}-${u[2]}`;
  return [
    new RegExp(`(?:lesson|topic)-${key}(?![0-9])`),
    new RegExp(`topics/${key}/`)
  ];
}

/**
 * Which changed paths belong to a frozen topic.
 *   changedPaths   paths relative to the repo root
 *   frozen         output of frozenTopics()
 *   extraOwned     { topic: [paths] }, e.g. the BeInTheRoom scenario a topic links
 *   multiTopicHits { topic: [paths] }, multi-topic files whose entry for that topic changed
 */
function violations(changedPaths, frozen, extraOwned = {}, multiTopicHits = {}) {
  const out = [];
  for (const { topic, first, last } of frozen) {
    const patterns = topicPatterns(topic);
    const owned = new Set(extraOwned[topic] || []);
    const files = changedPaths.filter(p =>
      !p.startsWith('docs/') && (owned.has(p) || patterns.some(re => re.test(p))));
    for (const p of multiTopicHits[topic] || []) if (!files.includes(p)) files.push(p);
    if (files.length) out.push({ topic, first, last, files });
  }
  return out;
}

/** The override is a trailer on its own line in any commit of the change. */
function overrideReason(commitMessages) {
  for (const msg of commitMessages) {
    const m = /^Ship-this-fix:\s*(\S.*)$/m.exec(msg || '');
    if (m) return m[1].trim();
  }
  return null;
}

/** Repo-relative scenario paths a topic's data files link to. */
function linkedScenarios(sources) {
  const found = new Set();
  for (const src of sources) {
    const re = /['"](?:\.\.\/)+(beintheroom\/[^'"?#]+\.html)/g;
    let m;
    while ((m = re.exec(src))) found.add(m[1]);
  }
  return [...found];
}

module.exports = {
  SCHOOL_TIME_ZONE,
  MULTI_TOPIC_FILES,
  schoolDate,
  freezeWindows,
  frozenTopics,
  topicPatterns,
  violations,
  overrideReason,
  linkedScenarios
};
