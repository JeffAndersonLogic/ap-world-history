# The Skills Lens: build specification

Written 2026-08-14, from four real Canvas drops and a mockup Jeff reacted to.
This is the brief the build works from. It is not a wish list: every criterion
below is either machine-checkable or has a named human test.

## 1. What the tool is

**The Skills Lens is a triage instrument, and its job ends in a decision.**

At 130 students and 10 capture slots, one lesson produces about 1,300 responses.
Nobody reads that. So the only honest question the tool can answer is: *which
twelve responses should I read right now, and what do I open with tomorrow?*

Every feature is judged against how much it shortens the path from zip-dropped
to that answer. A feature that adds a number without shortening that path is a
feature that made the tool worse.

### What it is not

- **Not a gradebook.** Canvas is the gradebook. The Lens never stores a score.
- **Not a dashboard.** Nothing in it is maintained by hand. It reads a drop and
  derives everything. This is the AndersonLogic "no dashboard stores state" rule
  and it is not negotiable.
- **Not an auto-grader.** The moment it puts a number on a student's writing,
  the teacher stops reading the writing, and the number is wrong. It may rank,
  flag, and sort. It may not score.

## 2. Non-negotiable constraints

These are inherited from the existing tool and hold for every phase.

1. **One file, no network.** `teacher/skills-lens.html` is self-contained and
   CSP-locked. No fetch, no XHR, no CDN, no telemetry. A teacher can open it
   from a thumb drive on a school laptop with the wifi off.
2. **One parser, not two.** `scripts/lib/canvas-parse-core.js` is required by
   the CLI and inlined by `scripts/build-skills-lens.js`. `validate.js` fails on
   drift. Two implementations would mean two answers to "did this student edit
   their work" depending on which door the teacher used.
3. **Denominators come from the lesson data**, never from what a student managed
   to submit. `assets/data/skills-map.js` is the source. A bare n is the bug
   this pipeline exists to prevent.
4. **The name-to-code crosswalk lives in memory only**, re-salted every load.
   Nothing identifying is ever written to disk by the tool.
5. **Never linked from a lesson page.** It is a teacher tool.
6. **Never invent a number.** Absent data renders as "not computable" or an
   explicit empty state naming what is missing. Never 0, never an imputed mean,
   never a silently narrowed denominator.
7. **`npm test` is the gate.** New behaviour ships with an offline test.

## 3. Decisions taken

| Question | Decision |
|---|---|
| Where quality judgment comes from | Offline signals do the triage. A clipboard bridge builds a clustering paste for an LLM. No network call, ever. |
| Altitude of the top of the screen | **Three ranked findings**, strongest first, not one committed conclusion. |
| Growth across lessons | Single-drop now. Multi-drop longitudinal after Unit 1 begins. |
| Audience | Jeff now, department later. Copy must be self-explanatory; no feature may depend on having built it. |

## 4. What great looks like

Stated as tests, not adjectives.

### The four-minute test
From dropping the zip to walking away with tomorrow's opener: **under four
minutes, without touching the mouse more than twice.** Timed by hand at the end
of a real block.

### The surprise test
Every drop must surface **at least one thing the teacher did not already know.**
The f1 drop cleared this: 99 percent of the class named a geographic condition,
and 3 percent wrote "Neolithic Revolution." Nobody guessed that. A tool whose
findings are all confirmations of what you already felt is a tool you will stop
opening by October.

### The name test
Every aggregate must reach **specific students by pseudonymous code in one
click.** A statistic you cannot open is a statistic you cannot trust, and you
will not trust this tool until you have caught it being right.

### The honest-gap test
Where a signal cannot be computed, the tool says which input is missing and how
to supply it. Measured by: **zero panels that render a plausible zero.**

### The reproducibility test
The same zip produces the same three findings, in the same order, on every run
and in both the browser and the CLI. Machine-checked.

### The department test
A colleague who has never seen it can drop their own zip and read the top card
without being told anything. Tested by handing it to one person.

## 5. Signals the tool may compute

Offline, in the tab, and each one honest about its limits.

| Signal | What it is | What it is not |
|---|---|---|
| **Coverage** | Present against a lesson-derived denominator | Not a completion grade |
| **Absent terms** | Authored evidence terms the class never reached | Not a vocabulary score |
| **Move checks** | Does a causation prompt's answer contain causal language and a named example | Not a rubric score. A sort key and a flag |
| **Calibration** | Self-rated confidence crossed with terms reached | Not an ability estimate |
| **Word count** | Effort proxy only, and labelled as such everywhere it appears | **Never a quality measure.** This was the tool's original sin |

**Rule for adding a signal:** it must be explainable to a student in one
sentence, and the tool must be able to show the responses behind it.

## 6. Build order

Phased so each phase is independently useful and independently shippable. The
calendar is real: F3 is 14 Aug, Foundations ends 21 Aug, the Foundations
assessment is 24 to 25 Aug, Unit 1 begins about 26 Aug.

### Phase 1: light up what already exists
The Evidence Term panel and the confident-and-thin panel are both already built,
already good, and both dark for all six Foundations topics, because Foundations
stores its vocabulary at topic level and both panels read slot level.

`scripts/build-skills-map.js` is right to keep it that way: Foundations genuinely
has no per-checkpoint term list, and inventing one would be the data lying. The
fallback belongs in the consumer, labelled.

- Term lookup falls back to topic vocabulary on checkpoint slots when no slot
  terms exist, and the UI says which it used.
- Absent terms lead. The negative direction is the actionable one.

### Phase 2: the tool concludes
- Three ranked findings at the top of Coverage, strongest first, each with the
  evidence behind it and a control that reaches the students or responses.
- Findings are derived, ranked by a stated rule, and reproducible.

### Phase 3: reading gets fast
- Read Mode becomes keyboard-first: `J`/`K` to move, `1`–`4` to tag, tagging
  advances. Tags are session state and feed the exports.

### Phase 4: the tool hands you artifacts
- Clipboard bridge: a clustering paste for an LLM, following the Socrates paste
  contract pattern already in the repo.
- Exemplar set, opener, and small-group roster off the tags.

### Phase 5: growth
- Multi-zip drop in one session, linked in memory, never persisted. Slope per
  student per skill. After Unit 1 begins.

## 7. Verification

Machine checks, in the offline suite:

- **`skills-lens-findings.test.js`** — the ranking rule is deterministic; the
  same fixture yields the same ordered findings; a finding never cites a
  denominator it does not have.
- **`skills-lens-terms.test.js`** — the topic fallback fires only where slot
  terms are absent, only on checkpoint slots, and is labelled in the output.
- **Existing gates hold** — `build-skills-lens.js --check` (no drift between the
  lib and the inlined copy), `canvas-zip.test.js` (CLI and browser emit
  byte-identical CSV), `canvas-topic-recovery.test.js`.
- **No-network assertion** — `skills-lens-zip.test.js` already asserts the CSP
  blocks the network with a real zip dropped in Chromium. Every new feature
  must keep that test green.

Human checks, run once per phase:

- The four-minute test, timed, at the end of a real block.
- The surprise test, on the next drop that lands.
- The department test, once, before any of this is shared.

## 8. How it is used

**Per lesson, four minutes.** Drop the zip. Read the three findings. Click into
the responses behind the one worth acting on. Tag two exemplars. Copy the
opener. Done before the next class walks in.

**Per week, fifteen minutes.** Drop the week together. Look at slope, not level.
Pick one small group. Print conference cards.

**Per quarter.** Drop everything. One question: which of the seven skills has
not moved?
