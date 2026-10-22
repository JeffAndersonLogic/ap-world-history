# BeHistorical, Claude Code Rules

## The CED rule (iron-clad, Jeff, 2026-10-06)

**Every topic's story is built from the course CED, and nothing ever drifts from it.** This is
the foundation of topic development in BeHistorical and it outranks every other document in
this repository, the unit story maps included.

- **"The CED" means the College Board's own document**: the AP World History: Modern Course
  and Exam Description, effective Fall 2026, transcribed per unit into
  `scripts/lib/ced-source/unit-N.js` with page numbers. It does **not** mean the lesson data,
  a story map, a `ced-unitN-contract.js`, an audit, a Socrates spine, or anyone's memory. All
  of those are copies, and a copy can be wrong: on 2026-10-06 the approved Unit 3 story map
  gave 3.2 the reasoning move "causation" where the CED says Comparison, and a story drafted
  from the copies inherited the mistake.
- **A story starts from that file**: the learning objective quoted verbatim, every Key
  Concept sentence, the CED's reasoning process as the story's reasoning move, its suggested
  skill, and its illustrative examples marked optional (the CED says they are "not in any way
  ... required"; the Key Concept sentences are the required content).
- **When any copy disagrees with the CED, the copy is wrong.** Name the conflict, correct
  the copy, and never carry it into the story.
- **If a unit has no `scripts/lib/ced-source/unit-N.js` yet, transcribe it from the PDF
  before drafting that unit's first story.** Never draft from a copy instead.
- **The order after the story is fixed:** the story is approved, then the First & 10 is
  written from the approved story, then the teacher presentation is built from the same
  story. Everything else follows those. Since 2026-10-12 "approved" means passed by the
  independent reviewer loop, not by Jeff, unless he asks to see the story first; see the
  next section.
- **It is enforced by machine.** `scripts/test/ced-source.test.js`, in the offline suite,
  fails the push when the lesson data, the unit contract, the story map or a story draft
  disagrees with the CED source file, and carries negative controls that prove each check
  can fail.

## Presentation design authority

For any request to plan, build, revise, audit, or model a BeHistorical class presentation, read **both** of these before changing code:

1. `docs/PRESENTATION-AUTHORING.md` - the canonical instructional-design process
2. `docs/TEACHING-OS.md` - the canonical Teaching OS implementation contract

The locked production line is:

**CED (the College Board's own document) -> existing-course constraint check -> ninth-grade story -> memorable spine -> must-have evidence -> narrative beats -> story approval gate -> First & 10 written from the approved story -> retelling slide -> asset and capability inventory -> visual plan -> canonical teacher build from the approved story -> generated student deck -> ecosystem and registry sync -> instructional verification -> technical verification -> adjacent findings -> ship**

Do not start by cloning an old deck, counting slides, or searching for images. The CED, read from `scripts/lib/ced-source/unit-N.js` and never from a copy, decides what students must learn; the ninth-grade story decides how they encounter it. Organizing claims follow the history rather than a fixed count.

**Standing rule since 2026-10-12 (Jeff): topic builds run end to end without stopping for him.** When Jeff says "update topic X.Y" or "build X.Y", the story approval gate and the First & 10 prose approval are both satisfied by the independent reviewer loop (fresh reviewers each round until a clean round or three rounds, every finding fixed or logged in the claim ledger), not by Jeff. The build stops once, finished on a working branch, with one report; it reaches students only when Jeff says "ship it". If Jeff asks to see a story first, stop there for that topic. The final build report says: **Story and reading approval were delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).** The decision record is in AndersonLogic-OS, `04_PRODUCTS/BeHistorical/Decisions.md`.

When another AI model's proposal is supplied, evaluate it independently against the CED, historical evidence, the authoring standard, and the current repository. Agreement is not a goal. Keep, modify, reject, or verify its claims when that distinction matters.

Any check used as evidence of completion, committed or disposable, must be shown capable of failing before its green result is trusted when that ability has not already been demonstrated.

A presentation is not complete because a file or commit exists. Follow the authoring, architecture, generation, sync, verification, adjacent-findings, and shipping requirements in the two documents above before reporting it as done or live.

## Git

The full text, with the reasons and incidents behind each rule, is `docs/claude/git-and-the-gate.md`.
The **ship-to-main** skill is the procedure; use it whenever a change goes to students.

- `main` is the deploy branch: GitHub Pages serves it, so what is on `main` is what students
  have. It is protected (`.github/branch-ruleset.json`, applied 2026-09-01): it cannot be
  deleted or force-pushed, and both Validate jobs must pass on a commit before it lands there.
- **Still no pull requests.** Push to a working branch, wait for Validate to pass on it,
  fast-forward `main` to that commit, then **delete the working branch**. Deleting it is part
  of shipping, not tidying afterwards.
- Delete a branch only when it and `origin/main` are the same commit and it is an ancestor of
  `main`. **A Claude Code web session cannot do the remote delete**: it is refused with HTTP 403
  and git then prints `Everything up-to-date`, which reads like success. Check with
  `git ls-remote` and say plainly that the branch is still there.
- **Before deleting any branch you did not just ship, check whether it heads an open pull
  request** (`list_pull_requests` with `state: open`). Deleting the head branch closes the PR.
- If a broken CI ever blocks an urgent classroom fix, set the ruleset to
  `"enforcement": "evaluate"` in Settings, Rules. Never force-push.
- The teaching freeze was retired on 2026-09-24. Do not rebuild it without reading
  `archive/teaching-freeze/README.md`.

## The Gate

- `npm test`, the gate: `validate.js` plus every other dependency-free check, in a few seconds.
  The pre-push hook and CI both run it, and it is the only command you need to remember.
- `npm run test:browser`, the Chromium contracts (needs `npm i playwright-core`), and
  `npm run test:all` for both suites.
- `npm run hooks:install` points git at `.githooks/` (`npm install` does this automatically).
  **The hook is a convenience, not the enforcement**: CI and the branch rule gate `main`.
- **Exit code 2 means skipped, not passed.** Browser tests exit 2 when playwright-core is
  absent. Anywhere it is supposed to be present, pass `--strict` so a skip fails.
- **Never write a test count in prose.** `SUITES` in `scripts/run-tests.js` is the list; read
  the count off a run.
- `.github/workflows/validate.yml` runs `structure` (no `npm install`, which keeps the offline
  suite honestly dependency-free) and `browser`. `.github/workflows/nightly.yml` runs the
  checks that need the network, so a third party's outage never fails a commit.

## Repository Commands

Every script also has an `npm run` alias; see `package.json`. The full list, with what each
command proves and why it exists, is `docs/claude/repository-commands.md`: read it before running
or changing a script you have not used in this session. The ones nearly every change needs:

- `npm test`, the gate (offline suite). `npm run test:browser` and `npm run test:all` as above.
- Rebuild after editing a source: `npm run build:readings` (First & 10), `build:deep-readings`
  and `build:ebook`, `build:student-os-decks` and `build:key-concepts` (decks), `build:maps`,
  `build:announcements` and `build:canvas-events` (schedule and Canvas), `build:socrates`,
  `build:skills-map`, `build:audit-index`, and `node scripts/build-unitN-rooms.js` (BeInTheRoom).
  `--check` on any builder fails on drift without writing.
- Judgment reports, never in a suite, exit 0 always: `report-absolutes.js`,
  `report-checkpoint-congruence.js`, `report-skill-alignment.js`,
  `report-evidence-authenticity.js`.
- `node scripts/source-evidence-images.js`, the only route by which a Commons filename reaches a
  lesson (never type one from memory).
- `node scripts/capture-topic-for-review.js X.Y <dir>`, the packet a Phase 9 reviewer reads (see
  the build-topic skill, 9C).

The student entry point is `index.html`. The project inventory is `docs/command-center.html`, backed by the generated `assets/data/project-status-manifest.js` file. The Google Form and the old Teacher Hub are both retired; see `docs/FORM-CONTRACT.md` and `docs/TEACHER-HUB.md`. Student work reaches the teacher through Canvas only, and the Skills Lens and the teacher command center are the teacher-facing surfaces.

## The Content Model

**Every one of the 77 First & 10 readings is generated** by `scripts/lib/first10-page.js` from
three places:

- `scripts/lib/f10-content.js`, Units 6 and 9 (13 readings)
- `scripts/lib/foundations-f10-content.js`, Foundations (6)
- `scripts/lib/reading-content/<unit>.js`, everything else (58)

Change a reading by editing its content module and rebuilding (`npm run build:readings`). Never
hand-edit a generated reading or write a sweep script that patches HTML: the reproducibility check
fails the push. Paragraph, callout and support-card bodies are raw HTML, and `<span class="kt">` is
how a key term is found on the page, so keep it. The migration procedure and why the model exists
are in `docs/claude/first10-readings.md`.

## Image Contract

Every picture a student can see must be on-topic and impossible to break. Full text and the
incidents behind each rule: `docs/claude/image-contract.md`.

- **Never hotlink a Commons picture.** Copies live in `assets/images/commons/` (credits in its
  `manifest.json`); a school network is one address, and Commons refuses it. Add a picture with the
  Mirror Commons images workflow and `scripts/mirror-commons-images.js --rewrite`.
- **Local artwork is the floor.** `assets/images/module-art/` holds artwork for every module card
  and every lecture, evidence and map slot, and both renderers fall back to it through `onerror`.
- **An empty `url` is a valid choice.** Leave `url` and `sourceUrl` empty rather than use a
  picture that does not match its caption.
- **Map & Geography needs an actual map**, usually a generated one in
  `assets/images/instructional-maps/`. Never a portrait, painting, photograph or blank outline.
- **Hub topic cards carry two `<img>` layers**: `img.card-art` (local art) underneath and
  `img.card-photo` with `onerror="this.remove()"` on top. Never put card art in a CSS custom
  property. `validate.js` enforces the structure.
- **Generated SVGs carry `width` and `height`**, not just a `viewBox`.
- **Never commit a placeholder image file.** `validate.js` checks magic bytes.
- **A remote image filename carries exactly one extension, at the end.** `validate.js` checks the
  shape offline; only the nightly `check-image-urls.js` knows whether a name resolves.

## Core Architecture

Full text: `docs/claude/core-architecture.md`.

- **The Google Form is retired** (2026-08-07) and `validate.js` fails the build if any of it
  reappears. Do not wire it back up. MagicSchool is unaffected.
- **Open and close modals only through `bhOpenModal`/`bhCloseModal`** in both renderers. They
  move focus in, trap Tab and return focus; adding a `.show` class instead locks a screen-reader
  user out.
- **Every enlargeable image is a button**: `role="button" tabindex="0"`, an `aria-label` naming
  the picture, and an Enter/Space handler.
- **`bhOpenModal` is idempotent per element, and the scroll lock lifts on "no visible dialog".**
  Never reintroduce an unconditional `BHModalStack.push`; no offline check can see a stuck scroll
  lock, so the browser tests are the proof.

## Reference sections, read when the work touches them

These were part of this file until 2026-10-16 (the last four rows until 2026-10-17, where this file
now keeps a short form) and moved word for word into `docs/claude/`, because
every session and every reviewer loads this file in full and most jobs need only a few of them
(Jeff's decision, recorded in AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`). They are
as binding as before. **Read the file before changing what it covers**, and when a script comment
says "see <section> in CLAUDE.md", the section is in the file named here.

| Read before touching | File | Sections |
|---|---|---|
| Any script or test you have not used this session | `docs/claude/repository-commands.md` | Repository Commands |
| Deep readings, the eBook, its accessibility or its narration | `docs/claude/deep-readings-and-ebook.md` | Deep Readings; The eBook; eBook accessibility; Listen to this section |
| `check-image-urls.js` or the nightly image check | `docs/claude/image-url-checks.md` | Rate limiting is not a broken image |
| Evidence Lab cards or image sourcing (every topic build) | `docs/claude/module-07-evidence-lab.md` | Module 07, the Evidence Lab |
| Saving, the save counter, Firestore, the response backup | `docs/claude/student-work-persistence.md` | Save health; The sync projection; Firestore security rules; Student response backup |
| The lecture cards, class presentations, video clips | `docs/claude/lecture-deck-presentations-video.md` | The Lecture Deck; Class Presentations; Video Clips |
| Run of Show, the teacher command center | `docs/claude/run-of-show-and-teacher-tools.md` | Run of Show |
| Topic audit records and their freshness check | `docs/claude/topic-audits.md` | Topic audits |
| Socrates, checkpoints, BeInTheRoom pastes (every topic build) | `docs/claude/socrates.md` | Socrates, the AI Coach; The reasoning skill in the Checkpoint 2 paste; Checkpoint 1 is independent; Checkpoint 2 finishes in class, or at home; What a scenario pastes |
| The schedule, required modules, the board, Canvas (every topic build) | `docs/claude/schedule-board-and-canvas.md` | Green and Silver; Today's Required Modules; The wordmark in Canvas |
| Kelly's classroom link, the Skills Lens, Gather All My Work, retired surfaces | `docs/claude/classrooms-skills-lens-and-retired.md` | Two Classrooms, One Site; the Skills Lens notes; BeCurrent and Canvas Packets retired |
| The ship flow, branches, the gate, CI, the branch rule (full text of the short form above) | `docs/claude/git-and-the-gate.md` | Git; The teaching freeze, retired; The Gate; The branch rule |
| The First & 10 template, a wrapper, a reading builder, a reading migration | `docs/claude/first10-readings.md` | The Content Model; First & 10 Reading Standard: Required structure, Delivery pattern, CSS class names, Prohibited patterns, Capture wrapper pattern |
| Card art, map slots, generated SVGs, image filenames | `docs/claude/image-contract.md` | Image Contract |
| The modals, the lightbox, the retired Google Form | `docs/claude/core-architecture.md` | Core Architecture |

Standard unit lessons are thin HTML shells plus a topic data file, a renderer-config file, and `assets/js/behistorical-topic-renderer-v1.js`. Foundations uses `foundations/foundations-topic-renderer.js`. First & 10 readings are standalone pages embedded through capture wrappers. BeInTheRoom simulations live under `beintheroom/unit-N/` and must pass the theme-alignment gate in `docs/beintheroom-scenario-blueprint.md` before they are linked.

## 10-Module Structure Standard

Every lesson page, Unit and Foundations, must display exactly **10 modules** in this fixed order:

| # | ID | Title | Unit Page | Foundations Page |
|---|---|---|---|---|
| 01 | `map` | Map & Geography Check | `renderMap()` | `renderMap()` |
| 02 | `first10` | First & 10 Reading | `renderFirst10()` | `renderFirst10()` |
| 03 | `contentdelivery` | Content Delivery | jump `#lecture` | jump `#content` |
| 04 | `besurreal` | BeSurreal | `renderBeSurreal()` | `renderBeSurreal()` |
| 05 | `skill` | AP Skill Builder | `renderSkill()` | `renderSkill()` |
| 06 | `checkpoint1` | Checkpoint 1 | `renderCheckpoint1()` | `renderCheckpoint1()` |
| 07 | `evidence` | Evidence Lab | `renderEvidence()` | `renderEvidence()` |
| 08 | `source` / `coach` | Primary Source (Unit) / Reasoning Prompts (Foundations) | `renderSource()` | `renderCoach()` |
| 09 | `beintheroom` | BeInTheRoom | link to external URL | link to external URL (or placeholder if none) |
| 10 | `checkpoint2` | Checkpoint 2 | `renderCheckpoint2()` | `renderCheckpoint2()` |

**Rules:**
- Module 03 is always a jump link, never a pop-out modal.
- Module 09 is always an external link (`window.open`) when a URL exists; otherwise shows a "coming soon" placeholder.
- Module count must be exactly 10, no more, no fewer.
- The `beSurreal` field is required in every data file (Unit and Foundations). It must have `title`, `desc`, `intro`, `detail`, and `prompt`.
- When a Foundations data file has no `beInTheRoom.url`, the renderer renders the "coming soon" placeholder automatically.

## Classroom Flow Standard

Every lesson page (Unit and Foundations) **must** display the same three-card Classroom Flow inside a `.lesson-roadmap` container. The three steps are fixed, never customized per lesson:

```html
<div class="lesson-roadmap">
  <div class="roadmap-step"><strong>1. Build Context</strong>Review the targets, examine the map, and read the First &amp; 10 narrative.</div>
  <div class="roadmap-step"><strong>2. Learn &amp; Practice</strong>Use the module cards, then move into the main concept-card section.</div>
  <div class="roadmap-step"><strong>3. Check Understanding</strong>Complete checkpoints with self-check and response tools.</div>
</div>
```

- Unit lesson pages: the `.lesson-roadmap` div is hardcoded in the HTML.
- Foundations pages: the renderer populates `id="block-plan-roadmap"` (which has `class="lesson-roadmap"`) with the same three `.roadmap-step` divs. The Foundations `blockPlan` data array is ignored for display, it exists only as instructor reference material.

## First & 10 Reading Standard

### Instructional purpose and authoring standard

First & 10 exists because students need protected class time to read the content that makes the day's lesson intelligible. It is the common knowledge floor for the room: every student should finish the opening phase with the same coherent historical story in mind before teacher-led instruction deepens it.

The title **First & 10 does not impose a ten-minute or word-count ceiling.** Length is a diagnostic, not a constraint. Quality and content delivery come first. Use as many words as necessary to tell the AP-essential story exceptionally well, and no more than necessary to preserve coherence, accuracy, and student attention. Never cut required explanation simply to hit an arbitrary time or word target.

Author every First & 10 around these rules:

- **Story first.** Give students the complete conceptual story College Board expects them to understand for that topic: what happened, why it happened, what changed or continued, and why it matters.
- **Vocabulary in context.** Essential terms appear naturally at the moment the story needs them. The vocabulary strip previews terms students will meet; it is not a detached memorization list.
- **AP Thinking stays embedded.** Use concise AP Thinking callouts only where they genuinely teach a historical reasoning move such as causation, continuity and change, comparison, contextualization, evidence, or significance. They should sharpen the story, not interrupt every paragraph.
- **CED essentials are protected.** Include every concept and evidence anchor necessary to understand the topic's College Board job. Enrichment is welcome only when it improves the story rather than crowding out the core.
- **Do not duplicate the lecture.** First & 10 establishes the conceptual map. Content Delivery should deepen it with visuals, maps, evidence, mechanisms, primary sources, examples, misconceptions, discussion, and teacher explanation rather than retelling the same prose.
- **Three-question retrieval remains.** End with exactly three concise questions that ask students to retrieve and reason from the reading. Questions should feel like the natural payoff to the story, not three mini-SAQs added for compliance.
- **Confidence remains.** Preserve the existing confidence-rating capture so the teacher receives both what the student can explain and how secure the student feels about it.
- **Audio is equivalent support, not a replacement curriculum.** When listening support is available, it must carry the same instructional content as the readable text.

A strong First & 10 should make the next lesson move possible: students should already know the basic story, so class time can focus on deeper evidence, interpretation, and AP reasoning.

Every First & 10 reading **must** follow the Topic 1.1 structure exactly. This rule applies to all units and foundations.

### Page structure and delivery

The page structure (the Topic 1.1 shape) is generated by `scripts/lib/first10-page.js` and enforced
by `validate.js`. The full specification, with the capture wrapper template, is in
`docs/claude/first10-readings.md`; read it before changing the template, a wrapper or a builder.
The rules an author must not break:

- **Delivery is a standalone reading plus a capture wrapper** that is just an iframe
  (`scripts/lib/first10-capture-wrapper.js`). `first10.embedUrl` points at the wrapper, never at
  the standalone reading.
- **Exactly three questions, and keep the answer-capture script**, which writes
  `behistorical-first10-<TOPIC>`. Drop it and the answers never reach Canvas.
- **No builder section and no route to Socrates or MagicSchool** on the reading or its wrapper,
  and no Google Form anything. `validate.js` prohibits all of it.
- **Full canonical class names**, never abbreviated ones like `.cs` or `.qi`.
