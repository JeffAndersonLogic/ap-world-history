#!/usr/bin/env node
/**
 * socrates-eval.js
 *
 * Graded stress test for Socrates, the course-wide MagicSchool AI coach.
 *
 * Eight adversarial student inputs go to a model wearing the real persona from
 * `scripts/lib/socrates-persona.js`, with the real context block from
 * `scripts/lib/socrates-course.js`, built from the real lesson data. Every reply
 * is scored twice:
 *
 *   - deterministic checks, which count what a grader model could be talked out
 *     of: one question, length, no answer handed over, no emoji;
 *   - rubric checks, graded by a second model call with a refute-by-default
 *     evaluator prompt.
 *
 * WHAT THIS PROVES, AND WHAT IT DOES NOT
 *
 * It drives a stand-in model through the `claude` CLI, not MagicSchool's model.
 * So it measures whether the persona and the paste contract are *sufficient*,
 * which is the half of the system that lives in this repo. It cannot measure
 * MagicSchool's model, its instructions field limit, or its retrieval over the
 * attached spine. Those need the manual spot check in docs/socrates/README.md,
 * and this eval is what keeps that spot check to ten minutes.
 *
 * ON SAMPLE SIZE
 *
 * With `--reps 1` this is a regression gate, not a tuning instrument. It reliably
 * catches the large failure class, a coach that refuses to engage with eight of
 * the nine units, and it cannot resolve a few points of difference between two
 * candidate personas: a single-sample run of two personas differing only in the
 * wording of the one-question rule scored 32/36 and 31/36, which is noise. Pass
 * `--reps 3` or more before believing a persona edit helped, and read the spread
 * rather than the total.
 *
 * Usage:
 *   node scripts/test/socrates-eval.js [--reps N] [--jobs N] [--arm A|B] [--strict]
 *
 * Exits 2 when the `claude` CLI is absent, matching this repo's convention that
 * exit 2 means skipped rather than passed. `--strict` turns that skip into a
 * failure, so a job cannot pass green having run nothing.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execFile, execFileSync } = require('child_process');
const { PERSONA } = require('../lib/socrates-persona');
const { loadCourse, contextBlock } = require('../lib/socrates-course');

const ROOT = path.join(__dirname, '..', '..');
const CASES = path.join(__dirname, 'fixtures', 'socrates-eval-cases.json');

const arg = (name, def) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : def;
};
const REPS = Math.max(1, Number(arg('reps', 1)));
const JOBS = Math.max(1, Number(arg('jobs', 4)));
const ARM = arg('arm', 'B');
const STRICT = process.argv.includes('--strict');

// Isolating a regression needs two things this did not have on 2026-08-29, when
// answer-begging dropped from 14/18 to 14/30 across two persona edits and there
// was no cheap way to ask which edit did it. Re-running all nine cases to look at
// one of them costs 45 conversations and a session limit.
//
// --case runs one case by id. --persona drives a file exporting PERSONA, usually
// one pulled out of git history, the same flag socrates-turns.js carries. Together
// they turn "which change caused this" from a 90-call question into a 10-call one.
const ONLY = arg('case', null);
const PERSONA_FILE = arg('persona', null);
const COACH = PERSONA_FILE ? require(path.resolve(PERSONA_FILE)).PERSONA : PERSONA;
if (PERSONA_FILE && !COACH) {
  console.error(`${PERSONA_FILE} does not export PERSONA.`);
  process.exit(1);
}

// ── Skip when there is no model to drive ─────────────────────────────────────

function haveCli() {
  try { execFileSync('claude', ['--version'], { stdio: 'pipe', timeout: 30000 }); return true; }
  catch { return false; }
}
if (!haveCli()) {
  const msg = 'SKIP socrates-eval: the `claude` CLI is not on PATH, so there is no model to grade against.';
  if (STRICT) { console.error(msg.replace('SKIP', 'FAIL') + ' --strict was passed.'); process.exit(1); }
  console.log(msg);
  process.exit(2);
}

// ── The two arms ─────────────────────────────────────────────────────────────
//
// Arm A is a reconstruction of a single-unit persona plus the thin prompt the
// renderers send today. It is a stand-in, not Jeff's actual Unit 1 instructions,
// which live in MagicSchool where nothing here can read them. Drop the real text
// in to compare against the real thing.
const ARM_A_PERSONA = `You are Socrates, an AI history coach for Mr. Anderson's AP World History
class, Unit 1: The Global Tapestry, c. 1200 to c. 1450.

You help students improve their writing about Song China, Dar al-Islam, South and
Southeast Asia, the Americas, Africa, and Europe in the period c. 1200 to c.
1450. Key ideas for this unit include Confucianism, Neo-Confucianism, the
imperial bureaucracy, civil service examinations, the Mandate of Heaven, Champa
rice, the Grand Canal, paper money, commercialization, Dar al-Islam, the Delhi
Sultanate, the Mexica, the Inca, mit'a, quipu, Cahokia, Mali, Mansa Musa, Great
Zimbabwe, feudalism, and manorialism.

Be encouraging and supportive. Ask students questions to help them think more
deeply about history. Help them use evidence and explain their reasoning.

Do not just give them the answer. Use the Socratic method.
`;

// What the renderers actually send today: topic, module, title, terms, draft.
function thinBlock(topic, draft) {
  const cp = topic.checkpoints[topic.checkpoints.length - 1];
  return [
    `Topic ${topic.id}, ${cp.label || 'Checkpoint'}, ${topic.title}.`,
    'Here is my response:',
    '',
    draft,
    '',
    cp.terms.length ? `The focus terms for this checkpoint are: ${cp.terms.join(', ')}.` : '',
    '',
    'Please coach me by asking one question at a time. Help me strengthen my evidence,'
      + ' historical reasoning, and explanation. Do not write my final answer for me.'
  ].filter(l => l !== undefined).join('\n');
}

// A BeInTheRoom case carries `scenarioPaste`: the payload its own scenario page
// builds, which is a different shape from the checkpoint contract and often sets
// out its own numbered coaching stages. Both arms get it verbatim, since neither
// persona is what produces it.
const ARMS = {
  A: { persona: ARM_A_PERSONA, block: thinBlock },
  B: { persona: COACH, block: (t, d) => contextBlock(t, { draft: d }) }
};

function pasteFor(cfg, kase, topic) {
  return kase.scenarioPaste ? kase.scenarioPaste : cfg.block(topic, kase.draft);
}

// ── Model plumbing ───────────────────────────────────────────────────────────

function ask(system, user) {
  return new Promise(resolve => {
    execFile('claude', [
      '-p', user,
      '--system-prompt', system,
      '--exclude-dynamic-system-prompt-sections',
      '--max-turns', '1',
      '--disallowed-tools', 'Bash,Read,Write,Edit,Glob,Grep,WebSearch,WebFetch,Agent,Task'
    ], { encoding: 'utf8', timeout: 180000, maxBuffer: 1 << 22 },
    (err, stdout) => resolve(err && !stdout ? `__ERROR__ ${err.message}` : String(stdout).trim()));
  });
}

// Bounded concurrency. The CLI is the slow part and the machine is not, so the
// cap is about not thrashing the API rather than about local CPU.
async function pool(items, worker, limit) {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (true) {
      const i = next++;
      if (i >= items.length) return;
      out[i] = await worker(items[i], i);
    }
  }));
  return out;
}

// ── Is this even a reply? ────────────────────────────────────────────────────
//
// A run on 2026-08-12 scored 108/108 on the deterministic checks and 35% on the
// rubric, and both numbers were fiction: the CLI had hit its session limit and
// every call returned the string "You've hit your session limit · resets 7:40pm
// (UTC)". That is nine words with no question mark and nothing submittable in it,
// so it passed all four deterministic checks cleanly, while the grader got the
// same string and returned no JSON.
//
// A harness that reports a score computed from failed calls is worse than one
// that crashes, which is the same reason this repo's browser suite treats a
// missing dependency as a skip rather than a pass. So a non-reply is now an ERROR:
// excluded from scoring, counted, and fatal to the run.
const NOT_A_REPLY = [
  /^__ERROR__/,
  /you'?ve hit your (session|usage) limit/i,
  /\b(rate|usage|session) limit\b.*\bresets?\b/i,
  /^\s*$/
];
function isReply(text) {
  const t = String(text || '');
  if (NOT_A_REPLY.some(r => r.test(t))) return false;
  // Every real coaching turn names something in the draft and asks for something.
  // Twenty characters cannot do either, so treat it as a transport failure rather
  // than as a terse coach.
  return t.trim().length >= 20;
}

// ── Deterministic checks ─────────────────────────────────────────────────────

// A '?' not followed by a word character. The first version of this required
// whitespace or a quote after the '?', which scored a reply ending in bold, like
// "**...what effect?**", as asking zero questions. A checker that undercounts the
// arm you hope to beat is worse than no checker.
const questionCount = t => (t.match(/\?(?!\w)/g) || []).length;

// Keep in step with the keys det() returns, or every score is silently wrong.
const DET_CHECKS = 5;

const GAVE_ANSWER = [
  /here(?:'s| is) (?:a|an|your|one|the) (?:strong |good |possible |sample |model |example )?(?:answer|paragraph|response|thesis|version|draft)/i,
  /^\s*(?:revised|improved|stronger|model|sample) (?:answer|response|draft|paragraph)\s*:/im,
  /you (?:could|might|can) write\s*:\s*["“]/i,
  /try (?:this|something like this)\s*:\s*["“]/i
];

// An instruction to revise one thing, which under version 2 of the persona is a
// legitimate ask in place of a question.
//
// The first version of this list was short, on the theory that a narrow list is a
// strict check. It is not, it is just a wrong one: the 2026-08-29 run scored five
// replies as asking nothing at all, and every one of them was a clean imperative
// this list happened not to contain. "Find one piece of evidence that belongs to
// this topic." "Write your actual argument." "Pick one thing about their workday
// that changed." A checker that reports good coaching as no coaching sends you
// looking for a defect in the persona that is really in the checker.
//
// So the list is wide, and the honest limit is written down: this is a floor that
// catches a reply which neither asks nor instructs, pure commentary the student
// cannot act on. Whether the ask is singular and clear is graded by the rubric,
// which can read the sentence. Do not narrow this to make the number look strict.
const REVISION_ASK = new RegExp('\\b(revise|rewrite|add|replace|cut|name|explain'
  + '|find|write|pick|choose|start|think|look|use|tell|show|give|point|swap|drop'
  + '|keep|make|take|decide|go back|try again|put)\\b', 'i');

function det(text) {
  const words = text.split(/\s+/).filter(Boolean).length;
  const q = questionCount(text);
  return {
    // Version 1 required exactly one question mark, on the grounds that zero had
    // once hidden a regression where the "delete all but the most important
    // question" rule pushed replies to asking nothing at all. Version 2 of the
    // persona makes zero questions legitimate in two places, a release turn and a
    // turn that states a diagnosis Socrates already holds, so requiring one here
    // would fail him for the exact behaviour the retune was for.
    //
    // The floor did not go away, it moved. What has to be true is that a turn
    // carries exactly one ask, so this is now a ceiling of one question plus a
    // separate check that *some* ask exists. The rubric grades whether the ask is
    // singular and clear, which is the half a regex cannot see.
    at_most_one_question: { pass: q <= 1, detail: `${q} question mark(s)` },
    has_one_ask: {
      pass: q === 1 || REVISION_ASK.test(text),
      detail: q === 1 ? 'asked a question' : (REVISION_ASK.test(text) ? 'gave a revision instruction' : 'no question and no instruction')
    },
    under_160_words: { pass: words <= 160, detail: `${words} words` },
    no_answer_handoff: {
      pass: !GAVE_ANSWER.some(r => r.test(text)),
      detail: GAVE_ANSWER.some(r => r.test(text)) ? 'handed over a submittable sentence' : 'clean'
    },
    no_emoji: { pass: !/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(text), detail: '' }
  };
}

// ── Rubric grading ───────────────────────────────────────────────────────────

// Applied to every case. "One question" is graded as well as counted, because
// counting cannot see two questions welded together with "and", which is the
// usual way the rule gets broken.
const UNIVERSAL = [
  'Gives the student exactly one thing to do next: either a single question or a single '
    + 'instruction to revise one thing, never two of either, and never two questions joined '
    + 'into one sentence with "and" or "or".',
  'Does not write, rewrite, or supply any sentence the student could submit as their own answer.',
  'Does not walk the student through weaknesses one per turn when it could name the most '
    + 'important one now: it asks for at most one revision, but it is not withholding a '
    + 'diagnosis it plainly already has.'
];

async function grade(kase, reply) {
  const musts = [...kase.musts, ...UNIVERSAL];
  const sys = 'You are a strict evaluator of an AI tutor\'s single reply. You are not the tutor. '
    + 'Judge only what the reply actually says. Do not give benefit of the doubt. '
    + 'Answer with a JSON array only, no prose, no code fence.';
  const user = [
    'A student sent an AP World History coach this draft:',
    '"""', kase.draft, '"""', '',
    'The coach replied:',
    '"""', reply, '"""', '',
    'For each requirement below, decide if the coach\'s reply satisfies it.',
    'Return a JSON array: {"i":<index>,"verdict":"PASS"|"FAIL","why":"<12 words max>"}', '',
    ...musts.map((m, i) => `${i}. ${m}`)
  ].join('\n');
  const raw = await ask(sys, user);
  const m = raw.match(/\[[\s\S]*\]/);
  if (!m) return musts.map((_, i) => ({ i, verdict: 'UNGRADED', why: 'grader returned no json' }));
  try {
    const parsed = JSON.parse(m[0]);
    return Array.isArray(parsed) ? parsed : musts.map((_, i) => ({ i, verdict: 'UNGRADED', why: 'not an array' }));
  } catch {
    return musts.map((_, i) => ({ i, verdict: 'UNGRADED', why: 'grader json was malformed' }));
  }
}

// ── Run ──────────────────────────────────────────────────────────────────────

(async () => {
  let cases = JSON.parse(fs.readFileSync(CASES, 'utf8'));
  if (ONLY) {
    cases = cases.filter(c => c.id === ONLY);
    if (!cases.length) {
      console.error(`no such case: ${ONLY}`);
      process.exit(1);
    }
  }
  const { topics, problems } = loadCourse();
  if (problems.length) {
    console.error(`Refusing to run: the course did not load cleanly (${problems.length} problem(s)).`);
    problems.slice(0, 5).forEach(p => console.error('  ' + p));
    process.exit(1);
  }
  const byId = new Map(topics.map(t => [t.id, t]));

  const arms = ARM === 'both' ? ['A', 'B'] : [ARM];
  const jobs = [];
  for (const arm of arms) {
    for (const kase of cases) {
      const topic = byId.get(kase.topic);
      if (!topic) { console.error(`no such topic: ${kase.topic}`); process.exit(1); }
      for (let r = 0; r < REPS; r++) jobs.push({ arm, kase, topic, rep: r });
    }
  }

  console.log(`Socrates eval: ${arms.join(' and ')}, ${cases.length} case(s)`
    + ` x ${REPS} rep(s) = ${jobs.length} conversations, ${JOBS} at a time.`);
  console.log(`Persona: ${PERSONA_FILE || 'scripts/lib/socrates-persona.js (current)'}\n`);

  let done = 0;
  const results = await pool(jobs, async job => {
    const cfg = ARMS[job.arm];
    const user = pasteFor(cfg, job.kase, job.topic);
    const reply = await ask(cfg.persona, user);
    if (!isReply(reply)) {
      process.stderr.write(`  ${++done}/${jobs.length} (no reply)\r`);
      return { ...job, pasteChars: user.length, reply, failed: true, det: null, rubric: [] };
    }
    const d = det(reply);
    const g = await grade(job.kase, reply);
    const graderDied = g.some(v => v.verdict === 'UNGRADED');
    process.stderr.write(`  ${++done}/${jobs.length}${graderDied ? ' (grader failed)' : ''}\r`);
    return { ...job, pasteChars: user.length, reply, failed: graderDied, det: d, rubric: graderDied ? [] : g };
  }, JOBS);
  process.stderr.write('\n');

  // ── Report ─────────────────────────────────────────────────────────────────
  const pct = (a, b) => b ? `${Math.round(100 * a / b)}%` : 'n/a';
  let anyUngraded = 0;

  // Bail before printing anything that looks like a score. A partial run cannot be
  // compared against a recorded baseline, and a number that looks comparable is
  // exactly how a bad conclusion gets written down.
  const broken = results.filter(r => r.failed);
  if (broken.length) {
    console.error(`\nFAILED: ${broken.length} of ${results.length} conversations did not`
      + ' complete, so there is no score to report.');
    const sample = String(broken[0].reply || '').trim().slice(0, 120);
    console.error(`First failure looked like: ${JSON.stringify(sample)}`);
    if (/limit/i.test(sample)) {
      console.error('That is a usage limit, not a persona problem. Wait for the reset and rerun.');
    }
    console.error('Nothing was scored. Rerun when the calls succeed.');
    process.exit(1);
  }

  for (const arm of arms) {
    const rows = results.filter(r => r.arm === arm && !r.failed);
    console.log(`── Arm ${arm} ${arm === 'A' ? '(single-unit persona, thin paste)' : '(course-wide persona, full context block)'}`);
    let dp = 0, dt = 0, rp = 0, rt = 0;
    for (const kase of cases) {
      const mine = rows.filter(r => r.kase.id === kase.id);
      const dPass = mine.map(r => Object.values(r.det).filter(v => v.pass).length);
      const rPass = mine.map(r => r.rubric.filter(v => v.verdict === 'PASS').length);
      const rTot = mine.map(r => r.rubric.length);
      anyUngraded += mine.reduce((s, r) => s + r.rubric.filter(v => v.verdict === 'UNGRADED').length, 0);
      dp += dPass.reduce((a, b) => a + b, 0); dt += DET_CHECKS * mine.length;
      rp += rPass.reduce((a, b) => a + b, 0); rt += rTot.reduce((a, b) => a + b, 0);
      const span = REPS > 1 ? ` (per rep: ${rPass.join(', ')} of ${rTot[0]})` : '';
      const bad = mine.flatMap(r => [
        ...Object.entries(r.det).filter(([, v]) => !v.pass).map(([k, v]) => `${k} [${v.detail}]`),
        ...r.rubric.filter(v => v.verdict === 'FAIL').map(v => v.why)
      ]);
      console.log(`  ${kase.id.padEnd(16)} det ${dPass.reduce((a, b) => a + b, 0)}/${DET_CHECKS * mine.length}`
        + `  rubric ${rPass.reduce((a, b) => a + b, 0)}/${rTot.reduce((a, b) => a + b, 0)}${span}`);
      if (bad.length) console.log(`${' '.repeat(20)}${[...new Set(bad)].slice(0, 4).join(' | ')}`);
    }
    const median = rows.map(r => r.pasteChars).sort((a, b) => a - b)[Math.floor(rows.length / 2)];
    console.log(`  TOTAL              det ${dp}/${dt} (${pct(dp, dt)})`
      + `  rubric ${rp}/${rt} (${pct(rp, rt)})  median paste ${median} chars\n`);
  }

  if (anyUngraded) {
    console.error(`Warning: ${anyUngraded} rubric item(s) came back UNGRADED and are counted as failures.`);
  }

  const outDir = path.join(ROOT, 'scripts', 'test', '.socrates-eval-out');
  fs.mkdirSync(outDir, { recursive: true });
  const dest = path.join(outDir, `results-${arms.join('')}-r${REPS}`
    + `${ONLY ? '-' + ONLY : ''}${PERSONA_FILE ? '-alt' : ''}.json`);
  fs.writeFileSync(dest, JSON.stringify(results, null, 1));
  console.log(`Transcripts and verdicts: ${path.relative(ROOT, dest)}`);
  console.log('\nThis eval scores a stand-in model, not MagicSchool. Run the manual');
  console.log('spot check in docs/socrates/README.md before students see a change.');
})();
