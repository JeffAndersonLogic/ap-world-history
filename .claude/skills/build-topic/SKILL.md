---
name: build-topic
description: "Run the full BeHistorical production line for one topic, one fresh session per topic, the way Unit 2 and Topic 3.1 were built: CED, existing-course check, ninth-grade story, spine, approval gate, retelling slide, Teaching OS deck, the other module surfaces, schedule and required-module choice, Canvas event and assignment, a claim-ledger accuracy loop with independent reviewers, audit, and verification. Use whenever Jeff says 'plan Topic 3.1', 'build 3.2', 'mirror Unit 2 for Unit 3', 'start the next topic', 'what does this topic still need', or '/build-topic'. This is the conductor: it sequences the other skills and points at the two authoring documents rather than restating them. Not for auditing an already-built topic (topic-audit), choosing pictures (presentation-images), or shipping (ship-to-main)."
---

# Build Topic

This is the order of work that produced Topics 2.5, 2.6, 2.7 and 3.1, written as one checklist
so a new unit does not depend on anyone remembering it. **It restates nothing.** The rules live in
two documents, and a second copy here would drift from them with nothing to say which one is
right (the failure the whole repo is built to refuse):

- `docs/PRESENTATION-AUTHORING.md`: the instructional-design process (story, spine, gate)
- `docs/TEACHING-OS.md`: the implementation contract (files, generators, tests)

Read both before Phase 1. Also read `CLAUDE.md` for the git rules and the module-role contract.

**Model on 3.1, 2.7 and 2.6, not the whole of Unit 2.** Topics 2.1 to 2.3 were built before
BeReady, the retelling slide and the Key Concept band were standard, and carry `meta.omits`
for it. Copy the newest decks' shape. The best story draft to copy is
`docs/TOPIC-3-1-STORY-DRAFT.md`; the best audit record is
`docs/topic-audits/topic-2-6-2026-09-28.md`.

**Why this skill has an accuracy loop (Phase 9).** Unit 2 was "certified" by coverage gates on
2026-09-19, and the 2.4 hand audit six days later found Evidence Lab prompts about cards that
were not on the page and eight factual errors in one BeInTheRoom scenario. Every topic from 2.4
to 3.1 then repeated the same four defects after it was declared built: prompts naming things
students cannot see, prompts above a ninth grader, checkpoints displaying a target they do not
assess, and factual slips (myths, anachronisms, superlatives). 2.4 took nine fixes after "done",
2.5 twelve, and 2.7's three landed on its Green teaching day. No machine check catches any of
the four. Green tests prove plumbing, not history.

## Arguments

`/build-topic <topic> [plan|build]`

- `plan` (default when Jeff says "plan it" or "show me"): stop after Phase 4. Nothing is written
  except the story draft.
- `build` ("build it", "run it"): run Phases 5 to 10. Never ships. Shipping is **ship-to-main**,
  and only when Jeff says so.
- **One fresh session per topic** is the default (Jeff, 2026-10-05). See "A unit, one topic per
  session" below.

## A unit, one topic per session

Each topic gets **its own fresh session**, run strictly in order. A fresh session starts with
the full rules in view; a long session gets summarized and loses detail, which is the wrong
trade for the accuracy loop. So nothing may depend on conversation memory:

- **Everything lives in committed, pushed files**: the story draft with its status line, the
  claim ledger, the picture list, the audit record. Commit and push after each gate.
- **Start from the previous topic's work, not from a stale `main`.** A unit's topics share
  files (Unit 3's First & 10 is one file for all four topics). If the previous topic has
  reached `main`, branch from `main`. If it has not, branch from the previous topic's working
  branch, say so in the report, and never start from a `main` that lacks it, or the two
  readings will collide when both ship.
- **Do not start the next topic's session until the previous topic's First & 10 is approved**
  and its fingerprint moved, because a correction to one reading can change what the next one
  bridges from.
- **Carry lessons forward through the files.** The previous topic's audit record and claim
  ledger say which defect classes turned up. Read them in Phase 0 and search this topic for
  the same classes before its reviewers run.

## Rules that hold in every phase

1. **One topic at a time within a unit.** Unit 3's First & 10 lives in one shared file
   (`scripts/lib/reading-content/unit-3.js`) and its BeInTheRoom scenarios come from one
   generator (`scripts/build-unit3-rooms.js`). Two parallel sessions overwrite each other.
2. **Edit sources, never generated files.** Each source and its generator is in the table below.
3. **The story decides the slide count, the order and the number of organizing claims.**
   No quota, no "three Big Rocks" by default.
4. **A check used as evidence must be shown able to fail** before its green is trusted
   (`docs/PRESENTATION-AUTHORING.md` section 16).
5. **Anything outside this topic that verification turns up is an adjacent finding.** Report it
   with file, defect, impact, proposed fix and why it was left out. Do not fix it silently and
   do not drop it.
6. **Never invent dates.** Class dates, exam dates and due dates come from Jeff or from
   `assets/data/announcements-schedule.js`.
7. **Teaching calls are Jeff's; flagged facts do not stop the build.** Required modules,
   pictures, slide cuts, and anything that changes what is taught or assessed: propose with a
   reason and let him decide. A claim you cannot verify or settle is marked NEEDS JEFF in the
   claim ledger, left in its safest narrow form, and **listed in the final report**; the build
   carries on around it. Only the story gate and the prose approval stop the work.
8. **Batch questions.** Everything Jeff needs to answer for a topic goes in one message at the
   Phase 4 gate, not one question at a time across the build.

## Phase 0: Situation

0. **Nobody else is on this topic.** `git fetch origin main`, then look at recent commits and
   remote branches touching this topic or the unit's shared files (for Unit 3,
   `scripts/lib/reading-content/unit-3.js` and `scripts/build-unit3-rooms.js`). If they changed
   since the baseline you expected, read the diff. **Stop only** if the changes overlap this
   topic, leave a conflict you cannot resolve, or cannot be confidently attributed to an
   already finished topic; otherwise record the baseline change in the report and carry on.
   2.5 was rebuilt on a branch and on `main` on consecutive days and one version was thrown
   away (`795dc4dc`); nothing warned either session.
1. **Calendar.** Use the snippet in step 0 of the **topic-audit** skill to print the topic's
   Green and Silver dates. If it prints "not on the schedule", also grep the schedule for
   comments: Jeff's dates are sometimes recorded there before the topic has entries (3.2's
   were, as the `homeworkDue` comment on 3.1's days). If there are truly no dates, say so and
   continue: everything except Phase 8 can proceed.
2. **Unit story map.** Look for `docs/UNIT-N-STORY-MAP.md`. If it exists and is approved, the
   unit spine, the topic spine, the "owns / bridge only" split and the hand-offs are already
   decided; do not ask for them again. If it does not exist, the unit needs one before any topic
   (that is a unit-level story gate, drafted from the CED contract and the unit's deep audit).
3. **What already exists.** Check the topic against the surface table below and list what is
   built and what is missing. Also read `docs/UNIT-N-DEEP-AUDIT.md`, and the
   `ced-unitN-contract` and `unitN-coherence-contract` files in `scripts/lib/` if they exist.
4. **Previous topic's hand-off.** Read the previous topic's story for the sentence it hands
   forward. That sentence is the BeReady bridge.
5. **Previous topic's open decisions.** Read every `docs/topic-audits/` record for the previous
   topic and list each "Needs Jeff's decision" item that crosses into this one (3.1's
   devshirme lecture card and Moroccan motive both touch 3.2). Put them in front of Jeff at the
   Phase 4 gate. Do not resolve them quietly in either direction.
6. **Known conflicts for this topic.** The unit story map and deep audit often name a
   conflict to fix inside this topic's build (for example 3.3's eBook chapter opening on 3.2's
   material). List them now so Phase 7 cannot forget them.

## Phase 1: CED

Isolate the learning objective(s), essential knowledge and key concepts, the named illustrative
examples, and the reasoning move the objective's verb implies. Source: the unit's CED contract
in `scripts/lib/` and `collegeBoardKeyConcepts` in the lesson data.

## Phase 2: Existing-course constraint check

Read only what students already see: learning targets, success criteria, declared skill, the
encoded CED contract. This is a constraint check, not the source of the story. **A conflict with
the CED stops the work**: name it, do not inherit it, do not rewrite another surface to hide it.
Do not look at images or renderer capabilities yet.

## Phase 3: Story, spine, evidence, beats

Follow sections 3 to 6 and 9 of `docs/PRESENTATION-AUTHORING.md`. Write the result to
`docs/TOPIC-X-Y-STORY-DRAFT.md`, shaped like `docs/TOPIC-3-1-STORY-DRAFT.md` and
`docs/TOPIC-2-7-STORY-DRAFT.md`:

1. What the CED requires
2. Constraint check (what students already see, and what is out of line)
3. The ninth-grade story
4. The spine
5. Must-have evidence, each with a "so what"
6. Narrative beats
7. The retelling slide, named
8. Owns / bridge-only (from the unit story map)
9. Visuals each beat needs (what kind of historical object would carry it, not yet a file)
10. Questions for Jeff: the previous topic's open decisions, required modules, pictures, and
    anything else the whole build will need, in one list

Fact-check every hook, analogy and counterfactual as a claim (section 15). Start the claim
ledger now (`docs/TOPIC-X-Y-CLAIM-LEDGER.md`, see Phase 9) with every date, number and causal
claim in the story, so the story Jeff approves has already been checked.

## Phase 4: Approval gate

**Commit the draft, then stop** and show Jeff the draft. The gate is satisfied by his review or
by an explicit waiver. A blanket "go ahead" before he has seen the story is a waiver, and the
final report must then say: **Story approval was explicitly waived for this build.**

Approving the story is the whole gate: Jeff does not need to see a slide outline first. When
he approves, set the draft's status line to `Approved by Jeff, <date>` and commit it. 2.4 to
2.6 were approved in chat only, so there is no record of what he approved, and 2.5's draft
gives two different approval dates.

In `plan` mode, end here with the visual requirements listed per beat.

## Phase 5: Assets and visual plan

Now, and not earlier, look at pictures and renderer capability. Use the **presentation-images**
skill for uploaded pictures and to stage any new Commons candidates for verification. Pick the
slide template by the shape of the idea (`teacher/slide-templates.html`). AI pictures carry
exactly `Historical Reconstruction - AI Generated` and never appear in the Evidence Lab.

**If Jeff has not uploaded pictures yet, do not block and do not guess filenames.** Give him a
shopping list, one row per beat: what the object is, its date and maker, where it is held,
which beat and claim it carries, and anything to watch for (a modern photograph of an old
building, a later copy, a European imagining of an Asian ruler). Build with pictures already
verified in the repo, or leave `url` empty so the local artwork shows, and wire his uploads in
with **presentation-images** when they arrive. Commons can rate-limit a session for hours
(3.1's image plan hit HTTP 429 throughout); use the batched API in
`scripts/source-evidence-images.js`, and never fill the gap with a filename from memory or a
scan of a printed book (`4a20e483`).

## Phase 6: Build the teacher deck and the student deck

Files for topic `X-Y` (copy the shape of `topic-2-6` or `topic-2-7`):

- `teacher/data/topic-X-Y-teaching-base.js`, `teacher/data/topic-X-Y-presentation-assets.js`,
  `teacher/data/topic-X-Y-visual-assets.js`, `teacher/data/topic-X-Y-teaching.js`
- `teacher/topic-X-Y-os.html`
- Register in `DECKS` in `scripts/build-teaching-os-student-decks.js`
- Register in `TOOLS` in `scripts/build-teacher-index.js` (both directions are checked)
- `unit-N/presentation-topic-X-Y-student.html`, and `lesson.classPresentation` in
  **`assets/data/lesson-X-Y-renderer-config.js`** (Unit 2 sets it there, not in the lesson data)
- Required content: Teacher Preflight, BeReady with a bridge, visible topic question, organizing
  claims as the history requires, mechanism where needed, return to the spine, exactly one
  `retelling: true` slide, `kc:` tags per the Key Concept band rules
- Omit a required function only with a reason in `meta.omits`

Then generate: `npm run build:key-concepts && npm run build:student-os-decks`.
Never edit `assets/data/presentations/topic-X-Y-student.js`.

## Phase 7: The other module surfaces

Edit the source for each, then rebuild. Confirm each still tells this topic's spine and that
nothing has been added from an adjacent topic.

| Surface | Source of truth | Rebuild |
|---|---|---|
| Targets, criteria, map, lecture cards, videos, deep-reading card | `assets/data/lesson-X-Y-<slug>.js` | none |
| Checkpoints, Skill Builder, Evidence Lab pictures, BeSurreal, BeInTheRoom link, `classPresentation` | `assets/data/lesson-X-Y-renderer-config.js` | none |
| Skill Builder / Evidence Lab / Primary Source prompts, Units 1 and 2 only | `assets/data/ap-practice-units-1-2.js` | none |
| First & 10 reading | `scripts/lib/reading-content/unit-N.js` | `npm run build:readings` |
| Deep reading and eBook chapter | `scripts/lib/deep-reading-content/topic-X-Y.js` | `npm run build:deep-readings && npm run build:ebook` |
| BeInTheRoom | Unit 3: `scripts/build-unit3-rooms.js` (3.1 to 3.3), scenario file (3.4); Units 6 and 9: their generators | run the generator |
| Skills map (checkpoint terms, skill labels) | lesson data | `node scripts/build-skills-map.js` |
| Socrates kit | lesson data | `npm run build:socrates` |

BeInTheRoom must pass the theme-alignment gate in `docs/beintheroom-scenario-blueprint.md`
before it is linked. Evidence Lab cards are a real picture or declared `sourceText`, never a
summary standing in for an available object.

If a Phase 3 constraint check found something out of line (a mis-titled card, an off-spine
opening section), it is fixed here, inside this topic's build, as the unit story map decides.

### The First & 10 is rewritten to the approved story, not checked against it

"Still tells the spine" is the bar for the other surfaces. The reading gets the story-first
rewrite that Topics 2.4 to 2.7 got (commits `ac4ac321`, `7d1a1d18`, `11809ec3`, `72b7d752`),
written to the "First & 10 Reading Standard" in `CLAUDE.md`, which is the rule:

1. **Rewrite it from the Phase 4 story.** An old reading that roughly agrees is not done.
   One section per beat (2.4, 2.5 and 2.6 each used four), the spine stated up front, every
   vocabulary chip used in context, and the callouts carrying the chain.
2. **Strip teacher language** from student text ("These examples help students see...").
3. **One title everywhere**: the reading and both lesson files. Rebuild Canvas
   (`npm run build:canvas-events`) so the assignment carries it too.
4. **Keep three questions and the answer capture** in the same shape.
5. **Keep the unit's contract terms.** Where `scripts/lib/unitN-coherence-contract.js` exists,
   it requires term clusters in the First & 10 and the other surfaces (3.2's reading must keep
   devshirme, mansabdar, divine right or Versailles, tax farming or zamindar, and so on). A
   story-first rewrite that drops one fails CI. Read the contract before writing, not after.
6. **Clear leftovers while you are in the entry**: a stray `builderBody` about building an AI
   Coach prompt (the builder was retired 2026-08-31), and a `docTitle` module number that
   disagrees with its siblings.
7. **Show Jeff the reading.** Story approval in Phase 4 is not approval of the prose.
8. **Mind the shared fingerprint.** `readings-golden.js` pins the **whole**
   `reading-content/unit-N.js` file to one approved hash (`APPROVED_UNIT3_REWRITE_BLOB` for
   Unit 3), so a new hash also re-approves every other topic's text in that file. Before moving
   it, prove with `git diff` that only this topic's entry changed since the last approved
   commit, then update the hash with a dated comment naming the topic Jeff approved, and fix
   the comment's description if it still names an older approval.

## Phase 8: Schedule, required modules and Canvas

**Blocked until Jeff gives class dates.** If the topic has none, stop after listing what this
phase will need. Do not guess.

1. **Schedule.** Add the topic's Green and Silver days to `assets/data/announcements-schedule.js`.
   - Required modules are a teaching call about one 90-minute block. Propose a list with a
     reason for each, and let Jeff decide. Both days carry the same `modules` list. With the
     proposal, report the authored minutes against the 80-minute budget (plus a 5-minute
     reserve) and the count of teacher-launched activities against 5 to 7, from the
     2026-09-15 decision in AndersonLogic-OS. Report them; do not enforce them: Jeff declined
     the budget checks on purpose.
   - If Jeff's dates were parked in a schedule comment (for example the `homeworkDue` lines on
     3.1's days), delete that comment and those lines when this topic's entries go in.
   - The previous topic's days carry a `reading` block for this topic. Adding this topic
     means adding that block to the previous topic's days (the 2.7 entry has a comment waiting
     for exactly this with 3.1).
   - Quizzes and exams go in `assessments`, with Green and Silver dates, only when Jeff
     supplies them.
2. **Canvas text.** In `scripts/build-canvas-events.js`, author the topic's `OVERVIEWS` entry
   (student voice, second person, 2 to 4 sentences), an `ASSIGNMENT_OVERVIEWS` entry if the
   assignment needs different opening words (edit both or neither), and `MODULE_NOTES` only
   for a module whose card wording is wrong for Canvas. If a card wording is simply wrong, fix
   the lesson data instead.
3. **Generate.** `npm run build:announcements && npm run build:canvas-events`. Review the
   output in `docs/canvas/calendar-events.md` and `docs/canvas/assignments.md`. Targets and
   criteria are copied from the lesson data, verbatim.
4. **Jeff's manual Canvas steps** (state them; nothing in the repo can do them):
   create the assignment first (Text Entry, unlimited attempts, ASCII-only name identical in
   Canvas and PowerSchool); paste the event through the `</>` HTML editor; insert the
   assignment link from the course-links panel, never typed; add the module text header;
   set Assign to per section; walk it on a Chromebook before publishing.
   Section 2 of `docs/canvas/CANVAS-BUILD-GUIDE.md` gives the naming pattern for Foundations
   only, so ask Jeff which pattern the unit's assignments use.

## Phase 9: Accuracy loop, then verify

**The standard:** every sentence a student reads or Jeff projects is historically accurate, on
this topic's spine, readable by a ninth grader, and about something actually on the page.
"Done" means proven, not believed. Run the loop below until it comes back clean, then the
technical checks.

### 9A. The claim ledger

`docs/TOPIC-X-Y-CLAIM-LEDGER.md`, started in Phase 3, committed with the topic. One row per
**material** historical claim, across every student- and teacher-facing surface: the First &
10, the deep reading and eBook chapter, every slide with its speaker notes and picture credits,
lecture cards, checkpoints, Skill Builder, Evidence Lab, Primary Source, BeSurreal, BeInTheRoom
and the Canvas text. A claim that repeats across surfaces is **one row** listing every place
it appears. Directions such as "look at the map" are not claims.

**A claim is material if a student would learn something false were it wrong**: about
chronology, cause, comparison, what a piece of evidence is, or what the CED requires. **Always
material, whatever they look like:** every date, number and name-to-place pairing; every
picture caption and credit; every superlative or "first"; and every claim inside a hook,
analogy, counterfactual, BeInTheRoom role or slide note. Unit 2's errors hid in exactly the
places that sound minor (a celadon bowl captioned "at Kilwa", Taghaza misplaced in a role), so
"minor" is never a reason to leave a row out.

| Claim | Where it appears | Source and what it actually says | Status |
|---|---|---|---|

Status is exactly one of:

- **VERIFIED**: checked against sources, not memory.
- **NARROWED**: say what it now says. The fix for an overreach is a narrower concrete claim,
  never a vaguer one (`docs/STYLE.md`).
- **REMOVED**.
- **NEEDS JEFF**: say why, and leave the claim in its safest narrow form. This does not stop
  the build (rule 7); it goes in the report.

**Verify against sources, with each source in its role.** Use web search.

- **The CED decides scope; scholarship decides truth.** The CED is the authority for what must
  be taught, which examples are required and which skill is assessed. University, museum and
  standard scholarly sources are the authority for whether a claim is true. The CED's silence
  is not evidence that something did not happen, and an outside source never expands required
  content beyond the approved story map.
- **Source to claim fit.** A citation verifies a sentence only if the source says what the
  sentence says. A general history of the Ottomans does not verify a specific number, motive,
  cause or superlative unless it states it. Record the source's actual words in the ledger;
  when they fall short of the sentence, narrow the sentence or mark it NEEDS JEFF rather than
  stretching the source.
- **Quality over count.** One authoritative scholarly or institutional source is enough for
  routine chronology. Require **two independent sources** for a date or number that is
  disputed, surprising, approximate, consequential or easily mythologized, and whenever
  sources conflict. Two weak websites do not outweigh one specialist source.
- A figure that comes from a later chronicle says so on the page and is never stated as fact.
- If you are not sure a claim is wrong, it is NEEDS JEFF, not a rewrite of history you are
  unsure of.

**Where to hunt.** The topic-audit skill, Step 2C, lists where errors have actually hidden;
read it rather than relying on a summary. The four recurring classes since 2.4 are dates and
chronology, popular myths, superlatives and sole causes ("for the first time",
"impregnable", "all states recruited conquered peoples" in 3.1), and the course contradicting
itself across surfaces. Pictures add anachronism: 3.1's AI siege picture showed minarets on a
pre-1453 Hagia Sophia.

### 9B. Read the rendered page, not the data file

Open the real lesson page and both decks in a browser and check, module by module:

1. **Page truth.** Every prompt, direction, question, caption and reference points at
   something the student can actually see or has explicitly been given. (Explanatory prose
   need not point at anything; this is about telling a student to look at or use something.)
   This failed in every topic from 2.4 to 2.7.
2. **Targets.** Every checkpoint displays the target it really assesses.
3. **Captions.** Each one describes the picture above it, and says when a picture is a modern
   photograph, a later copy, a map or AI. An AI picture carries exactly
   `Historical Reconstruction - AI Generated`, never appears in the Evidence Lab, and is never
   called evidence anywhere, slide notes included.
4. **Ninth-grade read.** Rewrite any prompt a fourteen-year-old would have to decode before
   answering it. Keep the same demand and the AP skill names.
5. **Ownership.** Grep every surface for material the unit story map gives to another topic.
   Bridge-only material stays a bridge.
6. **One claim, one wording.** After fixing any claim, grep every surface for it, the eBook
   and BeInTheRoom included (topic-audit Step 4). The only acceptable leftover hits are the
   lesson's own warnings against a myth.

### 9C. Independent review, repeated

The builder shares the build's blind spots, and a checker that shares a failure mode with the
thing it checks confirms the bug. So launch a **fresh subagent that has not seen your
reasoning**. Give it only the rendered surfaces, the CED contract, the unit story map and the
defect definition below, and tell it to find errors, not to confirm the work.

**A defect is a demonstrable failure** of accuracy, chronology, sourcing or source to claim
fit, CED alignment, story-map ownership, page truth, ninth-grade readability, accessibility, or
a technical check. A preference about wording or design, or a reviewer's unsupported
speculation, is not a defect.

**The reviewer does not have the last word.** Evaluate every finding independently: fix the
supported ones, reject the unsupported ones with a one-line reason, and log both in the ledger
(a "Review findings" section with each finding and its disposition). A reviewer that sounds
confident is not thereby right, and a fix made only because a reviewer asked is a second way to
put an error in.

**Then a fresh reviewer runs a full pass**, never only a check of the corrected spots, since a
fix can break something nearby. Repeat until a full pass turns up no supported defect.

**Stop rule.** Stop when a fresh reviewer's full pass finds no supported defect **and** every
ledger row has a status. Green tests, fatigue and "probably fine" are not stopping conditions.
Neither is hedging until a report goes quiet. The defect definition is what keeps this from
running forever on style objections. **Safety valve:** if three full passes in a row still find
supported defects, stop and tell Jeff, because something systemic is wrong (the story, a source
the topic leans on, or a renderer) and another pass will not fix it.

### 9D. Technical verification

1. `npm test`. It names every generated file that drifted. A First & 10 edit also fails
   `readings-golden.js`, **by design** (see Phase 7, step 8). Do not quiet it. Until Jeff has
   approved the reading, report it as failing pending his review.
2. `npm i --no-save playwright-core && npm run test:browser` if a slide or template changed.
   A SKIP is not a pass. **The brand-font pass skips in the cloud sandbox and fails in CI**:
   download the woff2 files with `curl`, set `BHT_FONT_DIR`, and get a real result. 2.6 shipped
   a 9px overflow that only CI caught.
3. **Screenshot every teacher and student slide and look at each one** for overflow, labels
   over route lines, hidden map keys and low contrast (all found on 2.7 on its teaching day).
4. **Instructional verification** (section 15): the deck answers the actual learning objective;
   every example is attached to a claim; the retelling slide captures the argument; every Key
   Concept is banded on some projected slide; a ninth grader could retell the topic.
5. Any **new automated check** written during this build is shown to fail on a known bad
   fixture or a temporary controlled mutation before its green is trusted, and the source is
   restored afterwards. Established checks that have already been shown to fail do not need
   re-proving.
6. Run the **topic-audit** skill in fix mode. It writes its dated record in
   `docs/topic-audits/`; then run `npm run build:audit-index`, or `npm test` fails on drift
   (3.1's 10-05 CI run did).

## Phase 10: Report

Tell Jeff, in plain language (he is a teacher, not a programmer):

1. What was built, by surface
2. Whether the story gate was satisfied by approval or waived (with the exact waiver sentence)
3. The claim ledger in totals (VERIFIED, NARROWED, REMOVED, NEEDS JEFF), then **every NEEDS
   JEFF item listed** with a recommendation
4. What each independent reviewer found, and whether the last pass was clean
5. The required-modules decision and who made it, with the minutes and launch count
6. Which checks ran, which skipped, and which were shown able to fail
7. Adjacent findings
8. What is left for him: Canvas steps, dates still needed, pictures to upload, decisions

Keep the states separate: built, committed, tested, verified, shipped. Never call something
done or live without the evidence for that state.

Commit on a working branch with the house message shape (see `96c5837`). Do not push to `main`.
Shipping is the **ship-to-main** skill, when Jeff says to ship. Then offer to log the day with
the **daily-summary** skill: the Notion work log has no entry for any build after 2026-09-15,
so the only record of 2.4 to 3.1 is git.
