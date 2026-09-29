#!/usr/bin/env node
'use strict';
/**
 * check-audit-freshness.js
 *
 * Fails when the topic audit has gone quiet. This is the check whose whole job is
 * to make a broken automation loud.
 *
 * It answers three questions, and each one is a separate way the same thing rots:
 *
 *   1. IS THE SWEEP ALIVE? The weekly sweep writes docs/topic-audits/sweeps/<date>.md
 *      every time it runs, including on a week with nothing scheduled. So a missing
 *      or old marker means the automation did not run. It can never mean "there was
 *      nothing to do". That rule is lifted from the nightly-work-log Routine, which
 *      vanished once and took 15 days of work logs with it before anyone noticed.
 *
 *   2. IS EVERY TOPIC TAUGHT SOON ACTUALLY AUDITED? Including topics audited once
 *      and revised afterwards. An audit describes a topic at a moment; the topic
 *      moves. Topic 2.5 was audited 2026-09-23 and revised on the 25th and 26th,
 *      and was taught on the 28th.
 *
 *   3. HAS THE SCHEDULE RUN OUT? This is the false green that would otherwise
 *      swallow the other two. With no future class days, nothing is "taught soon",
 *      every coverage assertion passes vacuously, and the check reports all clear
 *      on a course that has stopped being scheduled. On 2026-09-27 the schedule
 *      ended on 2026-10-05, eight days out, so this was not hypothetical.
 *
 * WHY NIGHTLY AND NOT THE PUSH GATE. An overdue audit must never be the thing
 * standing between a broken classroom page and its fix. Same reasoning as
 * check-image-urls.js. The offline suite carries only the index's --check, which is
 * a drift check on a generated file and is a fact about the commit.
 *
 *   node scripts/check-audit-freshness.js [--horizon=N] [--sweep-max-age=N] [--json]
 *
 * Exit 0 clean, exit 1 something needs doing. There is no exit 2: every input is
 * local, so there is no third party whose outage could mean "not verified".
 */

const fs = require('fs');
const path = require('path');
const cov = require('./lib/topic-audit-coverage.js');

function arg(name, dflt) {
  const hit = process.argv.find(a => a.startsWith(`--${name}=`));
  if (!hit) return dflt;
  const n = Number(hit.split('=')[1]);
  return Number.isFinite(n) ? n : dflt;
}

/**
 * The assertions, as a pure function of a coverage object.
 *
 * Separated from main() so scripts/test/topic-audit-coverage.test.js can drive
 * every branch with synthetic coverage and prove each one is capable of failing.
 * A check nobody has watched fail is a check nobody should trust, which is the
 * rule at the top of CLAUDE.md.
 */
function evaluate(c, opts) {
  const o = opts || {};
  const horizonDays = o.horizonDays == null ? 10 : o.horizonDays;
  const sweepMaxAge = o.sweepMaxAge == null ? 8 : o.sweepMaxAge;
  const today = c.today;
  const failures = [];
  const notes = [];

  // ---- 0. Can staleness be measured at all? ---------------------------------
  // Before anything else, because a shallow clone makes every check below pass
  // for the wrong reason.
  if (c.shallow) {
    failures.push({
      kind: 'automation',
      what: 'This clone is shallow, so git history is truncated.',
      why: 'Staleness compares an audit date against the date content last changed. With no history every lookup is empty and every audited topic reads as fresh, so this check would report all clear while measuring nothing.',
      do: 'Run git fetch --unshallow, or set fetch-depth: 0 on the checkout step.'
    });
  }

  // ---- 1. Is the sweep alive? -------------------------------------------------
  const sweepFloor = cov.addDays(today, -sweepMaxAge);
  let sweepState;
  if (!c.lastSweep) {
    sweepState = 'missing';
    failures.push({
      kind: 'automation',
      what: 'No sweep marker has ever been written.',
      why: 'The weekly sweep writes one on every run, including a quiet week, so none at all means it has never run.',
      do: 'Check the Routine exists and is enabled, then fire it once by hand.'
    });
  } else if (c.lastSweep < sweepFloor) {
    sweepState = 'overdue';
    failures.push({
      kind: 'automation',
      what: `The newest sweep marker is ${c.lastSweep}, older than the ${sweepMaxAge}-day limit.`,
      why: 'The sweep is supposed to write one every week. It has stopped.',
      do: 'Check the weekly Routine: enabled, last run status, and whether its push to claude/topic-audit-sweep succeeded.'
    });
  } else {
    sweepState = 'alive';
    notes.push(`Sweep alive: newest marker ${c.lastSweep}, within ${sweepMaxAge} days.`);
  }

  // ---- 2. Does the schedule still reach into the future? ----------------------
  const future = c.rows.filter(r => r.last >= today);
  const lastDay = c.rows.reduce((m, r) => (r.last > m ? r.last : m), '');
  if (!future.length) {
    failures.push({
      kind: 'schedule',
      what: `The schedule has run out. Its last class day is ${lastDay || 'unknown'}, before today.`,
      why: 'With nothing scheduled ahead, every coverage check below passes for want of anything to check, and this script would report all clear on a course nobody is scheduling.',
      do: 'Extend assets/data/announcements-schedule.js.'
    });
  } else if (lastDay < cov.addDays(today, horizonDays)) {
    notes.push(`WARNING: the schedule ends ${lastDay}, inside the ${horizonDays}-day window. Coverage past that date cannot be checked because nothing is scheduled there. Extend the schedule.`);
  }

  // ---- 3. Is every topic taught soon audited, and still audited? --------------
  const upcoming = c.rows.filter(r => r.upcoming);
  for (const r of upcoming) {
    if (r.state === 'fresh') continue;
    failures.push({
      kind: 'coverage',
      topic: r.topic,
      what: `Topic ${r.topic} is taught ${r.days.map(d => `${d.cohort} ${d.date}`).join(', ')} and its audit is "${r.state}".`,
      why: r.why,
      do: `Run /topic-audit ${r.topic}`
    });
  }

  // ---- 4. Records that could not be read -------------------------------------
  for (const m of c.malformed) {
    failures.push({
      kind: 'record',
      what: `docs/topic-audits/${m.file} could not be parsed: ${m.problems.join('; ')}.`,
      why: 'An unreadable record counts for nothing, so a topic that was audited reads as never audited.',
      do: 'Fix its front matter: topic, audited (YYYY-MM-DD), mode.'
    });
  }

  return {
    today, horizonDays, sweepMaxAge, sweepState, lastSweep: c.lastSweep,
    scheduleLastDay: lastDay,
    upcoming: upcoming.map(r => ({ topic: r.topic, state: r.state, why: r.why })),
    totals: c.rows.reduce((a, r) => (a[r.state] = (a[r.state] || 0) + 1, a), {}),
    failures, notes, ok: failures.length === 0
  };
}

function main() {
  const json = process.argv.includes('--json');
  const horizonDays = arg('horizon', 10);
  // 8 days, not 7: a weekly sweep that fires Sunday morning must not be reported
  // overdue by a check that runs the following Sunday a few hours earlier.
  const sweepMaxAge = arg('sweep-max-age', 8);

  const c = cov.coverage({ horizonDays });
  const result = evaluate(c, { horizonDays, sweepMaxAge });
  const { today, failures, notes, upcoming } = result;

  if (json) { console.log(JSON.stringify(result, null, 2)); return failures.length ? 1 : 0; }

  console.log(`\nTopic audit freshness, ${today} (school time)\n`);
  for (const n of notes) console.log(`  ${n}`);
  if (notes.length) console.log('');

  console.log(`  Taught in the next ${horizonDays} days:`);
  if (!upcoming.length) console.log('    (nothing scheduled)');
  for (const r of upcoming) {
    console.log(`    ${r.state === 'fresh' ? 'OK  ' : 'NEED'}  Topic ${r.topic.padEnd(4)} ${r.state.padEnd(15)} ${r.why}`);
  }
  console.log('');

  const t = result.totals;
  console.log(`  All ${c.rows.length} scheduled topics: ` +
    ['fresh', 'stale', 'shared-changed', 'never'].map(k => `${k} ${t[k] || 0}`).join(', '));
  console.log('');

  if (!failures.length) { console.log('  PASS  nothing overdue.\n'); return 0; }

  const groups = { automation: 'THE AUTOMATION', schedule: 'THE SCHEDULE', coverage: 'TOPICS NEEDING AN AUDIT', record: 'UNREADABLE RECORDS' };
  for (const kind of ['automation', 'schedule', 'coverage', 'record']) {
    const g = failures.filter(f => f.kind === kind);
    if (!g.length) continue;
    console.log(`  ${groups[kind]}`);
    for (const f of g) {
      console.log(`    - ${f.what}`);
      console.log(`      why:  ${f.why}`);
      console.log(`      do:   ${f.do}`);
    }
    console.log('');
  }
  console.log(`  FAIL  ${failures.length} item(s).\n`);
  return 1;
}

if (require.main === module) process.exit(main());
module.exports = { main, evaluate };
