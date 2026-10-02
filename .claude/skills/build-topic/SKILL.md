---
name: build-topic
description: "Run the full BeHistorical production line for one topic, the way Unit 2 was built: CED, existing-course check, ninth-grade story, spine, approval gate, retelling slide, Teaching OS deck, the other module surfaces, schedule and required-module choice, Canvas event and assignment, audit, and verification. Use whenever Jeff says 'plan Topic 3.1', 'build 3.2', 'mirror Unit 2 for Unit 3', 'start the next topic', 'what does this topic still need', or '/build-topic'. This is the conductor: it sequences the other skills and points at the two authoring documents rather than restating them. Not for auditing an already-built topic (topic-audit), choosing pictures (presentation-images), or shipping (ship-to-main)."
---

# Build Topic

This is the order of work that produced Topics 2.5, 2.6 and 2.7, written as one checklist so a
new unit does not depend on anyone remembering it. **It restates nothing.** The rules live in
two documents, and a second copy here would drift from them with nothing to say which one is
right (the failure the whole repo is built to refuse):

- `docs/PRESENTATION-AUTHORING.md`: the instructional-design process (story, spine, gate)
- `docs/TEACHING-OS.md`: the implementation contract (files, generators, tests)

Read both before Phase 1. Also read `CLAUDE.md` for the git rules and the module-role contract.

**Model on 2.5, 2.6 and 2.7, not the whole of Unit 2.** Topics 2.1 and 2.2 were built before
BeReady, the retelling slide and the Key Concept band were standard, and carry `meta.omits`
for it. Copy the newest decks' shape.

## Arguments

`/build-topic <topic> [plan|build]`

- `plan` (default when Jeff says "plan it" or "show me"): stop after Phase 4. Nothing is written
  except the story draft.
- `build` ("build it", "run it"): run Phases 5 to 10. Never ships. Shipping is **ship-to-main**,
  and only when Jeff says so.

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

## Phase 0: Situation

1. **Calendar.** Use the snippet in step 0 of the **topic-audit** skill to print the topic's
   Green and Silver dates. If it prints "not on the schedule" (true of all of Unit 3 today),
   say so and continue: everything except Phase 8 can proceed.
2. **Unit story map.** Look for `docs/UNIT-N-STORY-MAP.md`. If it exists and is approved, the
   unit spine, the topic spine, the "owns / bridge only" split and the hand-offs are already
   decided; do not ask for them again. If it does not exist, the unit needs one before any topic
   (that is a unit-level story gate, drafted from the CED contract and the unit's deep audit).
3. **What already exists.** Check the topic against the surface table below and list what is
   built and what is missing. Also read `docs/UNIT-N-DEEP-AUDIT.md`, and the
   `ced-unitN-contract` and `unitN-coherence-contract` files in `scripts/lib/` if they exist.
4. **Previous topic's hand-off.** Read the previous topic's story for the sentence it hands
   forward. That sentence is the BeReady bridge.

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
`docs/TOPIC-X-Y-STORY-DRAFT.md`, shaped like `docs/TOPIC-2-7-STORY-DRAFT.md`:

1. What the CED requires
2. Constraint check (what students already see, and what is out of line)
3. The ninth-grade story
4. The spine
5. Must-have evidence, each with a "so what"
6. Narrative beats
7. The retelling slide, named
8. Owns / bridge-only (from the unit story map)

Fact-check every hook, analogy and counterfactual as a claim (section 15).

## Phase 4: Approval gate

Stop and show Jeff the draft. The gate is satisfied by his review or by an explicit waiver.
A blanket "go ahead" before he has seen the story is a waiver, and the final report must then
say: **Story approval was explicitly waived for this build.**

In `plan` mode, end here with the visual requirements listed per beat.

## Phase 5: Assets and visual plan

Now, and not earlier, look at pictures and renderer capability. Use the **presentation-images**
skill for uploaded pictures and to stage any new Commons candidates for verification. Pick the
slide template by the shape of the idea (`teacher/slide-templates.html`). AI pictures carry
exactly `Historical Reconstruction - AI Generated` and never appear in the Evidence Lab.

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
5. **Show Jeff the reading.** Story approval in Phase 4 is not approval of the prose.

## Phase 8: Schedule, required modules and Canvas

**Blocked until Jeff gives class dates.** If the topic has none, stop after listing what this
phase will need. Do not guess.

1. **Schedule.** Add the topic's Green and Silver days to `assets/data/announcements-schedule.js`.
   - Required modules are a teaching call about one 90-minute block. Propose a list with a
     reason for each, and let Jeff decide. Both days carry the same `modules` list.
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

## Phase 9: Verify

1. `npm test`. It names every generated file that drifted. A First & 10 edit also fails
   `readings-golden.js`, **by design**: it pins each `reading-content/unit-N.js` either to
   the frozen originals or to an approved fingerprint (`APPROVED_UNIT2_REWRITE_BLOB` and its
   siblings). Do not quiet it. Once Jeff has approved the reading, update that unit's
   fingerprint, or add one on the Unit 2 pattern, with a dated comment saying what he
   approved. Until then, report it as failing pending his review.
2. `npm run test:browser` if a slide or template changed (needs `npm i playwright-core`).
   A SKIP is not a pass.
3. **Instructional verification** (section 15): the deck answers the actual learning objective;
   every example is attached to a claim; the retelling slide captures the argument; every Key
   Concept is banded on some projected slide; a ninth grader could retell the topic.
4. Run the **topic-audit** skill on the topic and let it write its dated record in
   `docs/topic-audits/`.
5. Open `teacher/topic-X-Y-os.html` and the student deck and step through the slides.

## Phase 10: Report

Tell Jeff, in plain language:

1. What was built, by surface
2. Whether the story gate was satisfied by approval or waived (with the exact waiver sentence)
3. The required-modules decision and who made it
4. Which checks ran, which skipped, and which were shown able to fail
5. Adjacent findings
6. What is left for him: Canvas steps, dates still needed, decisions

Commit on a working branch with the house message shape (see `96c5837`). Do not push to `main`.
Shipping is the **ship-to-main** skill, when Jeff says to ship.
