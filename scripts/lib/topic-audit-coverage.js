'use strict';
/**
 * topic-audit-coverage.js
 *
 * The one answer to "what audit state is each topic in".
 *
 * Two surfaces read it and neither owns a copy, for the same reason
 * teacher-today.js is one function the command center embeds rather than
 * reimplements: a second copy is a second answer to the same question, with
 * nothing to say which one Jeff read.
 *
 *   scripts/build-topic-audit-index.js   renders it to docs/topic-audits/index.md
 *   scripts/check-audit-freshness.js     asserts on it, nightly
 *
 * WHY THIS EXISTS. The topic-audit skill ran once, by hand, on 2026-09-23, and
 * reported to a chat window that then scrolled away. Nothing recorded which
 * topics had been audited, nothing fired it again, and the only signal that it
 * had stopped was Jeff noticing it felt like it had slipped. A per-topic audit
 * whose own coverage cannot be inspected is not auditable.
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..', '..');
const AUDIT_DIR = path.join(ROOT, 'docs', 'topic-audits');
const SWEEP_DIR = path.join(AUDIT_DIR, 'sweeps');

// The school's own day, in the school's own timezone. A UTC date rolls over
// during the school evening, which is exactly when Jeff is working, and would
// report tomorrow's teaching window tonight.
const SCHOOL_TZ = 'America/Indiana/Indianapolis';
function schoolToday() {
  return new Intl.DateTimeFormat('en-CA', { timeZone: SCHOOL_TZ }).format(new Date());
}

function addDays(isoDate, n) {
  const d = new Date(isoDate + 'T12:00:00Z');
  d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}

/** The schedule, read the same way every other reader reads it. */
function scheduleDays(scheduleFile) {
  const vm = require('vm');
  const file = scheduleFile || path.join(ROOT, 'assets', 'data', 'announcements-schedule.js');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(file, 'utf8'), ctx);
  const sched = ctx.window.BEHISTORICAL_SCHEDULE || {};
  return (sched.days || []).filter(d => d && d.topic && d.date);
}

/** Every topic on the schedule, with its Green and Silver dates. */
function scheduledTopics(days) {
  const out = new Map();
  for (const d of days) {
    const e = out.get(d.topic) || { topic: d.topic, first: d.date, last: d.date, days: [] };
    if (d.date < e.first) e.first = d.date;
    if (d.date > e.last) e.last = d.date;
    e.days.push({ date: d.date, cohort: d.cohort });
    out.set(d.topic, e);
  }
  for (const e of out.values()) e.days.sort((a, b) => a.date.localeCompare(b.date));
  return out;
}

/**
 * A topic's own content files.
 *
 * Deliberately excludes assets/images/module-art/** and assets/images/topics/**:
 * the first is regenerated wholesale by build-module-art.js and the second is an
 * upload folder, so a change to either is not a change to what a student reads,
 * and counting them would mark every topic stale after an unrelated art rebuild.
 *
 * `shared` files carry several topics in one file (a unit's whole First & 10
 * content module). A change to one is reported separately rather than silently
 * folded in, because it marks every topic in that unit and the honest reading is
 * "something in this unit's readings moved", not "this topic was revised".
 */
function topicFiles(key, allFiles) {
  const m = /^(\d+)\.(\d+)$/.exec(key);
  const f = /^F(\d+)$/i.exec(key);
  const own = [];
  const shared = [];
  if (m) {
    const [, unit, topic] = m;
    const tag = `${unit}-${topic}`;
    for (const file of allFiles) {
      if (file.startsWith('assets/images/module-art/')) continue;
      if (file.startsWith('assets/images/topics/')) continue;
      // Boundary-matched so 2-6 never matches 12-6 or 2-60.
      if (new RegExp(`(^|[^0-9])${unit}-${topic}([^0-9]|$)`).test(file)) own.push(file);
    }
    const sharedReading = `scripts/lib/reading-content/${unit}.js`;
    if (allFiles.includes(sharedReading)) shared.push(sharedReading);
  } else if (f) {
    const n = f[1];
    for (const file of allFiles) {
      if (file.startsWith('assets/images/maps/')) continue;
      if (new RegExp(`foundations-${n}([^0-9]|$)`).test(file)) own.push(file);
    }
    const sharedF10 = 'scripts/lib/foundations-f10-content.js';
    if (allFiles.includes(sharedF10)) shared.push(sharedF10);
  }
  return { own, shared };
}

/**
 * Is this clone missing the history the staleness signal depends on?
 *
 * A shallow clone answers every `git log` lookup with nothing, `lastChanged`
 * returns null, and every audited topic then reads as fresh forever. That is the
 * exact false green this whole mechanism exists to refuse, and it arrives by way of
 * a one-line workflow change rather than by anyone touching this file, so it is
 * detected here rather than trusted to a comment in the YAML.
 */
function isShallow() {
  try {
    return execFileSync('git', ['rev-parse', '--is-shallow-repository'],
      { cwd: ROOT, encoding: 'utf8' }).trim() === 'true';
  } catch (e) { return false; }
}

function gitFiles() {
  return execFileSync('git', ['ls-files'], { cwd: ROOT, encoding: 'utf8' })
    .split('\n').filter(Boolean);
}

/**
 * Committer date (YYYY-MM-DD) of the newest commit touching any of these files,
 * or today when any of them is modified in the working tree.
 *
 * The working-tree half is not a nicety, it is what stops the generated index
 * lagging by exactly one commit forever. Generate the index while an edit to a
 * topic is still uncommitted and git's newest date is the PREVIOUS commit's;
 * commit both together and git's answer moves to today, so `--check` would fail
 * immediately after every content commit and the only fix would be a second
 * commit that did nothing else. Counting a dirty file as changed today makes the
 * before and after agree.
 *
 * CI checks out clean, so there the answer is pure git history and `--check` is
 * deterministic.
 */
function lastChanged(files) {
  if (!files.length) return null;
  const committed = execFileSync('git', ['log', '-1', '--format=%cs', '--'].concat(files),
    { cwd: ROOT, encoding: 'utf8' }).trim() || null;
  let dirty = null;
  try {
    const st = execFileSync('git', ['status', '--porcelain', '--'].concat(files),
      { cwd: ROOT, encoding: 'utf8' }).trim();
    if (st) dirty = schoolToday();
  } catch (e) { /* a path git cannot stat is not a change */ }
  if (!committed) return dirty;
  if (!dirty) return committed;
  return dirty > committed ? dirty : committed;
}

/** Parse one audit record's front matter. Tolerant: a malformed file is reported, never thrown. */
function parseRecord(file, text) {
  const fm = /^---\r?\n([\s\S]*?)\r?\n---/.exec(text);
  const rec = { file: path.basename(file), topic: null, audited: null, mode: null, problems: [] };
  if (!fm) { rec.problems.push('no front matter'); return rec; }
  for (const line of fm[1].split(/\r?\n/)) {
    const kv = /^([a-z_]+):\s*(.*)$/.exec(line.trim());
    if (!kv) continue;
    const [, k, raw] = kv;
    const v = raw.replace(/^["']|["']$/g, '').trim();
    if (k === 'topic') rec.topic = v;
    else if (k === 'audited') rec.audited = v;
    else if (k === 'mode') rec.mode = v;
  }
  if (!rec.topic) rec.problems.push('no topic');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(rec.audited || '')) rec.problems.push('no valid audited date');
  return rec;
}

function auditRecords(dir) {
  const d = dir || AUDIT_DIR;
  if (!fs.existsSync(d)) return [];
  return fs.readdirSync(d)
    .filter(f => /^topic-.*\.md$/.test(f))
    .map(f => parseRecord(f, fs.readFileSync(path.join(d, f), 'utf8')));
}

/** Sweep markers: proof the weekly automation ran at all, including on a quiet week. */
function sweeps(dir) {
  const d = dir || SWEEP_DIR;
  if (!fs.existsSync(d)) return [];
  return fs.readdirSync(d)
    .map(f => /^(\d{4}-\d{2}-\d{2})\.md$/.exec(f))
    .filter(Boolean)
    .map(m => m[1])
    .sort();
}

/**
 * The whole picture.
 *
 * horizonDays is how far ahead "taught soon" reaches. It is wider than a week on
 * purpose: the weekly sweep looks seven days out, so a check that also stopped at
 * seven would have no margin and would call a topic overdue on the same morning
 * the sweep was still allowed to catch it.
 */
function coverage(opts) {
  const o = opts || {};
  const today = o.today || schoolToday();
  const horizonDays = o.horizonDays == null ? 10 : o.horizonDays;
  const horizon = addDays(today, horizonDays);
  const days = scheduleDays(o.scheduleFile);
  const topics = scheduledTopics(days);
  const records = auditRecords(o.auditDir);
  const allFiles = o.allFiles || gitFiles();

  const byTopic = new Map();
  for (const r of records) {
    if (!r.topic || r.problems.length) continue;
    const cur = byTopic.get(r.topic);
    if (!cur || r.audited > cur.audited) byTopic.set(r.topic, r);
  }

  const rows = [];
  for (const e of [...topics.values()].sort((a, b) => cmpTopic(a.topic, b.topic))) {
    const rec = byTopic.get(e.topic) || null;
    const { own, shared } = topicFiles(e.topic, allFiles);
    const ownChanged = o.lastChanged ? o.lastChanged(own) : lastChanged(own);
    const sharedChanged = o.lastChanged ? o.lastChanged(shared) : lastChanged(shared);

    const upcoming = e.last >= today && e.first <= horizon;
    const taught = e.last < today;
    let state, why;
    if (!rec) {
      state = 'never'; why = 'no audit record';
    } else if (ownChanged && ownChanged > rec.audited) {
      state = 'stale'; why = `this topic's content changed ${ownChanged}, after the ${rec.audited} audit`;
    } else if (sharedChanged && sharedChanged > rec.audited) {
      state = 'shared-changed'; why = `a file shared across this unit changed ${sharedChanged}, after the ${rec.audited} audit`;
    } else {
      state = 'fresh'; why = `audited ${rec.audited}`;
    }
    rows.push({
      topic: e.topic, first: e.first, last: e.last, days: e.days,
      upcoming, taught, state, why,
      audited: rec ? rec.audited : null,
      mode: rec ? rec.mode : null,
      record: rec ? rec.file : null,
      ownChanged, sharedChanged
    });
  }

  const sw = sweeps(o.sweepDir);
  return {
    today, horizon, horizonDays, rows,
    shallow: o.shallow != null ? o.shallow : (o.lastChanged ? false : isShallow()),
    sweeps: sw,
    lastSweep: sw.length ? sw[sw.length - 1] : null,
    malformed: records.filter(r => r.problems.length)
  };
}

function cmpTopic(a, b) {
  const rank = t => /^F/i.test(t) ? [0, Number(t.slice(1)), 0] : [1, ...t.split('.').map(Number)];
  const x = rank(a), y = rank(b);
  for (let i = 0; i < 3; i++) if ((x[i] || 0) !== (y[i] || 0)) return (x[i] || 0) - (y[i] || 0);
  return 0;
}

module.exports = {
  AUDIT_DIR, SWEEP_DIR, SCHOOL_TZ,
  schoolToday, addDays, scheduleDays, scheduledTopics, topicFiles,
  gitFiles, lastChanged, isShallow, parseRecord, auditRecords, sweeps, coverage, cmpTopic
};
