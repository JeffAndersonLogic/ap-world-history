#!/usr/bin/env node
/**
 * socrates-turns.js
 *
 * Measures how long a Socrates conversation actually runs.
 *
 * WHY THIS EXISTS
 *
 * `socrates-eval.js` grades one reply. Every one of its nine cases is a single
 * turn, so the whole suite could stay green while Socrates took nine exchanges
 * to release a student who needed two. That is precisely the complaint the
 * version 2 persona retune was for, which means the retune shipped against a
 * suite that could not see the thing it changed. A persona edit judged only by
 * single-turn scores is an edit judged on vibes.
 *
 * So this drives a real conversation: Socrates, wearing the persona from
 * `scripts/lib/socrates-persona.js`, against a simulated student who revises the
 * way a real fifteen-year-old revises, which is partially and without
 * anticipating the next note. It counts coach turns until release.
 *
 * WHAT IT PROVES, AND WHAT IT DOES NOT
 *
 * The student is a model, not a student. It is more compliant than a real
 * fifteen-year-old and it never gets bored, gives up, or argues, so the turn
 * counts here are a floor: a conversation that runs long against this student
 * runs longer against a real one. Treat a regression as real and an improvement
 * as directional.
 *
 * It also drives a stand-in model through the `claude` CLI, not MagicSchool's
 * model, so it measures whether the persona is sufficient, not what the vendor
 * does with it. Same limit as socrates-eval.js, same manual spot check in
 * docs/socrates/README.md.
 *
 * Usage:
 *   node scripts/test/socrates-turns.js [--reps N] [--max-turns N] [--verbose]
 *
 * Exits 2 when the `claude` CLI is absent, this repo's convention for skipped.
 * `--strict` turns that skip into a failure.
 */

'use strict';

const path = require('path');
const { execFile, execFileSync } = require('child_process');
const fs = require('fs');
const { PERSONA } = require('../lib/socrates-persona');
const { loadCourse, contextBlock } = require('../lib/socrates-course');

const arg = (name, def) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : def;
};
const REPS = Math.max(1, Number(arg('reps', 1)));
const MAX_TURNS = Math.max(2, Number(arg('max-turns', 8)));
const VERBOSE = process.argv.includes('--verbose');
const STRICT = process.argv.includes('--strict');

// A turn count means nothing on its own. The question is always "shorter than
// what", so the harness has to be able to drive an older persona: point this at a
// file exporting PERSONA, usually one pulled out of git history, and the same
// three cases run against it. Without this the only way to compare two personas
// is to edit the source file between runs, which is how a baseline gets recorded
// against a persona nobody can identify afterwards.
const PERSONA_FILE = arg('persona', null);
const COACH = PERSONA_FILE
  ? require(path.resolve(PERSONA_FILE)).PERSONA
  : PERSONA;
if (PERSONA_FILE && !COACH) {
  console.error(`${PERSONA_FILE} does not export PERSONA.`);
  process.exit(1);
}

function haveCli() {
  try { execFileSync('claude', ['--version'], { stdio: 'pipe', timeout: 30000 }); return true; }
  catch { return false; }
}
if (!haveCli()) {
  const msg = 'SKIP socrates-turns: the `claude` CLI is not on PATH, so there is no model to drive.';
  if (STRICT) { console.error(msg.replace('SKIP', 'FAIL') + ' --strict was passed.'); process.exit(1); }
  console.log(msg);
  process.exit(2);
}

// ── The cases ────────────────────────────────────────────────────────────────
//
// One per threshold in the persona's "How much is enough" section, because the
// whole point of that section is that these three should not cost the same
// number of turns. A run where all three land on the same number is a run where
// the thresholds are not doing anything, even if every number looks acceptable.
//
// `budget` is the number of coach turns by which release is expected. It comes
// from the persona's own budget section, diagnose, revise, check, plus one turn
// of slack for the assignments allowed a longer conversation.
const CASES = [
  {
    id: 'first10-vague',
    topic: '2.2',
    module: 'First & 10 Reflection',
    budget: 3,
    // Understands the idea, evidence is real but unspecific, explanation thin.
    // Under version 1 this drew a full claim/evidence/explanation walk. It should
    // now cost one note and one revision.
    draft: 'Trade networks in this period grew a lot and connected different '
      + 'regions together. Merchants moved goods over long distances and this '
      + 'changed the places they passed through. It made the world more connected '
      + 'than it had been before.'
  },
  {
    id: 'checkpoint1-thin',
    topic: '5.3',
    module: null,
    checkpoint: 0,
    budget: 4,
    draft: 'Workers had a hard time during industrialization. Factory conditions '
      + 'were bad and people worked long hours for low pay. Some workers protested '
      + 'about it because they were angry about how things were changing.'
  },
  {
    id: 'checkpoint2-synthesis',
    topic: '7.2',
    module: null,
    checkpoint: null,
    budget: 5,
    draft: 'There were a lot of causes of the war and the alliance system was one '
      + 'of them. Countries made agreements with each other and that meant when one '
      + 'country got into a conflict the others got pulled in too. Nationalism and '
      + 'militarism also mattered. So the alliances helped turn a small conflict '
      + 'into a big one.'
  }
];

// ── The student ──────────────────────────────────────────────────────────────
//
// Deliberately not a good student and deliberately not a hostile one. A hostile
// student measures the refusal rules, which socrates-eval.js already covers. This
// one measures length, so what matters is that it revises plausibly: it fixes
// what it was actually asked to fix, it does not anticipate the next note, and it
// does not suddenly write like a reader of the rubric.
const STUDENT = `You are a fifteen-year-old AP World History student revising your own
work with an AI coach. Reply the way a real student would in a chat box.

Rules:
- Do exactly what the coach asked, no more. Never fix something they did not
  mention, even if you can see it.
- Revise partially and imperfectly, the way a first revision actually goes.
- Keep it short, two to four sentences, plus your revised draft when you revised.
- Never write like a teacher and never name the AP skills.
- If the coach tells you that you are done and where to put your work, reply
  "ok thanks" and nothing else.
- Never ask the coach to write it for you.

Your current draft is below. Reply to the coach's latest message.`;

function ask(system, user, maxTurns) {
  return new Promise(resolve => {
    execFile('claude', [
      '-p', user,
      '--system-prompt', system,
      '--exclude-dynamic-system-prompt-sections',
      '--max-turns', String(maxTurns || 1),
      '--disallowed-tools', 'Bash,Read,Write,Edit,Glob,Grep,WebSearch,WebFetch,Agent,Task'
    ], { encoding: 'utf8', timeout: 180000, maxBuffer: 1 << 22 },
    (err, stdout) => resolve(err && !stdout ? `__ERROR__ ${err.message}` : String(stdout).trim()));
  });
}

const questionCount = t => (t.match(/\?(?!\w)/g) || []).length;

// A release turn is defined by the persona in two halves: it asks nothing, and it
// names where the work goes. Requiring both is what keeps this from scoring a
// coach who simply forgot to ask a question as a coach who released the student.
const DESTINATION = /(response box|back where you drafted|Gather All My Work|on the lesson page)/i;
const isRelease = t => questionCount(t) === 0 && DESTINATION.test(t);

// A run that scores a transport failure as a short conversation would report the
// best number this harness can produce for the worst possible reason.
const isReply = t => !/^__ERROR__/.test(t) && !/\b(rate|usage|session) limit\b/i.test(t)
  && String(t).trim().length >= 20;

async function conversation(kase, topic) {
  const opts = { draft: kase.draft };
  if (kase.module) opts.module = kase.module;
  if (kase.checkpoint != null) opts.checkpoint = kase.checkpoint;
  const paste = contextBlock(topic, opts);
  if (!paste) return { error: `no context block for topic ${kase.topic}` };

  const transcript = [];
  let studentTurn = paste;
  let draft = kase.draft;

  for (let turn = 1; turn <= MAX_TURNS; turn++) {
    const coach = await ask(COACH, transcriptFor(transcript, studentTurn));
    if (!isReply(coach)) return { error: `coach call failed on turn ${turn}: ${coach.slice(0, 80)}` };
    transcript.push({ who: 'coach', text: coach });

    if (isRelease(coach)) return { turns: turn, transcript, released: true };

    const reply = await ask(STUDENT + `\n\nYour current draft:\n"""\n${draft}\n"""`,
      transcriptFor(transcript, null, true));
    if (!isReply(reply)) return { error: `student call failed on turn ${turn}` };
    transcript.push({ who: 'student', text: reply });
    // The student's revised draft is whatever prose they sent back, which is what
    // the coach will be reading next turn anyway.
    draft = reply;
    studentTurn = reply;
  }
  return { turns: null, transcript, released: false };
}

// Both sides get the whole conversation as one prompt, because the CLI is
// stateless per call. The paste sits at the top exactly as the student sent it.
function transcriptFor(transcript, opening, forStudent) {
  const lines = [];
  if (transcript.length === 0 && opening) return opening;
  transcript.forEach(t => {
    lines.push(t.who === 'coach' ? `COACH: ${t.text}` : `STUDENT: ${t.text}`);
  });
  if (opening) lines.push(`STUDENT: ${opening}`);
  lines.push(forStudent ? 'Reply as the student.' : 'Reply as the coach.');
  return lines.join('\n\n');
}

// ── Run ──────────────────────────────────────────────────────────────────────

(async () => {
  const { topics, problems } = loadCourse();
  if (problems.length) {
    console.error(`Refusing to run: the course did not load cleanly (${problems.length} problem(s)).`);
    process.exit(1);
  }
  const byId = new Map(topics.map(t => [t.id, t]));

  console.log(`Socrates turns-to-release: ${CASES.length} cases x ${REPS} rep(s),`
    + ` cap ${MAX_TURNS} coach turns.`);
  console.log(`Persona: ${PERSONA_FILE || 'scripts/lib/socrates-persona.js (current)'}\n`);

  let failures = 0;
  for (const kase of CASES) {
    const topic = byId.get(kase.topic);
    if (!topic) { console.error(`no such topic: ${kase.topic}`); process.exit(1); }

    const runs = [];
    for (let r = 0; r < REPS; r++) {
      const out = await conversation(kase, topic);
      if (out.error) { console.error(`  ERROR ${kase.id}: ${out.error}`); process.exit(1); }
      runs.push(out);
      if (VERBOSE) {
        console.log(`\n── ${kase.id} rep ${r + 1}`);
        out.transcript.forEach(t => console.log(`  ${t.who.toUpperCase()}: ${t.text.replace(/\n/g, '\n    ')}\n`));
      }
    }

    const turns = runs.map(r => r.released ? r.turns : MAX_TURNS + 1);
    const worst = Math.max(...turns);
    const median = turns.slice().sort((a, b) => a - b)[Math.floor(turns.length / 2)];
    const overran = runs.filter(r => !r.released).length;
    const pass = worst <= kase.budget;
    if (!pass) failures++;

    console.log(`  ${pass ? 'PASS' : 'FAIL'} ${kase.id.padEnd(22)}`
      + ` budget ${kase.budget}  median ${median}  worst ${worst}`
      + `  (per rep: ${turns.map(t => t > MAX_TURNS ? `${MAX_TURNS}+` : t).join(', ')})`
      + (overran ? `  ${overran} never released` : ''));
  }

  console.log('\nThe simulated student is more compliant than a real one, so these');
  console.log('numbers are a floor. A regression here is real; an improvement is');
  console.log('directional. This drives a stand-in model, not MagicSchool.');

  if (failures) {
    console.error(`\n${failures} case(s) over budget.`);
    process.exit(1);
  }
  console.log('\nSocrates turns-to-release: all cases within budget.');
})();
