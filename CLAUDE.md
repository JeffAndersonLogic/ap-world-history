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

- `main` is the deploy branch: GitHub Pages serves it, so what is on `main` is
  what students have.
- Still no pull requests. Push to a working branch, wait for Validate to pass on
  it, then fast-forward `main` to that commit, then **delete the working branch**.
  This is the one change the branch rule forces, and only because a required check
  cannot pass on a commit that exists nowhere yet. See "The branch rule" below.
- **Deleting the branch is part of shipping, not tidying afterwards.** Nothing in
  this flow ever closes a branch otherwise, and on 2026-09-26 the repository was
  carrying about 300 remote branches, of which 27 were ancestors of `main`. At that
  size the branch list stops being usable and no later pruning fixes the cause.
  Delete it only after `origin/main` and the branch are the same commit and the
  branch is an ancestor of `main`; then it is provably free. **A Claude Code web
  session cannot do the remote half**: git writes of that kind are refused there with
  HTTP 403, and git prints `Everything up-to-date` afterwards, so a delete that was
  refused by policy reads like a no-op that found nothing to do. Check with
  `git ls-remote` and say so plainly rather than reporting a branch deleted. The
  **ship-to-main** skill has the procedure, the exact failure text and the routes
  that are also blocked.
- **Before deleting any branch you did not just ship, check whether it heads an open
  pull request.** Deleting the head branch closes the PR. The repository's own rule is
  that there are no pull requests, so it is easy to forget that fourteen are open
  anyway, mostly opened from other tools. In the 2026-09-26 batch pass exactly one
  branch of 56 was an open PR's head, #7, and nothing about the branch itself said so:
  it is four months stale, it is named like every other agent branch, and its work was
  retired from the repository weeks ago. `list_pull_requests` with `state: open` and a
  `grep -Fxf` against the delete list is the whole check.
- The rule in `.github/branch-ruleset.json` is applied, as of 2026-09-01: the API
  reports `main` protected. Committing directly to `main` no longer works, so the
  branch-then-fast-forward flow above is the only route and the escape hatch this
  line used to describe is gone.

### The teaching freeze, retired

**Retired 2026-09-24, on Jeff's word.** From 2026-09-22 a topic was frozen from the
start of its Green day through the end of its Silver day, and
`scripts/check-teaching-freeze.js` refused any change to it in CI, in the pre-push
hook and in the ship-to-main skill. None of that runs any more, and a change to a topic
being taught ships the same way as any other change. The checker, its library and its
test are in `archive/teaching-freeze/`, with a README saying how to restore them. Do
not rebuild it here without reading that README first.

## The Gate

The contracts below are enforced by machine, not by memory.

- `npm test`, the gate. Runs `validate.js` plus every other dependency-free
  check, in a few seconds. This is what the pre-push hook and CI both run, and it
  is the only command you need to remember.
- `npm run test:browser`, the Chromium contracts. Needs `npm i playwright-core`.

**No count is written down here on purpose.** `SUITES` in `scripts/run-tests.js`
is the list, the runner prints how many it is about to run, and a number typed
into prose stops being true the first time a check is added and says nothing when
it does. This file said "the two dependency-free tests" and "the seven Chromium
tests" until 2026-09-14, when the real figures were 14 and 13. Read the count off
a run.
- `npm run test:all`, both suites.
- `npm run hooks:install`, point git at `.githooks/` so `npm test` runs before
  every push. `npm install` does this automatically. Override once with
  `git push --no-verify`.

**The hook is a convenience, not the enforcement.** It has to be installed, it
is one flag away from being skipped, and on a machine with no `node` on PATH it
prints a line and exits 0, so a push from there runs nothing at all. CI and the
branch rule are what actually gate `main`; the hook exists to save you the round
trip, not to be relied on.

**Exit code 2 means skipped, not passed.** Every browser test exits 2 when
playwright-core is absent, because `validate.js` must stay runnable on a bare
checkout and the browser dependency is never installed by default.
`scripts/run-tests.js` honours that locally. Anywhere the dependency is supposed
to be present, pass `--strict`, which turns a skip into a failure, so a browser
job can never pass green having run nothing. Both CI workflows use `--strict`.

`.github/workflows/validate.yml` runs on every push and pull request, in two
jobs: `structure` deliberately runs with no `npm install` at all, which is what
keeps the offline suite honestly dependency-free, and `browser` installs
Chromium. `.github/workflows/nightly.yml` runs the checks that cannot sit on the
push path: `check-image-urls.js` needs commons.wikimedia.org, and a third party's
outage must never fail your commit.

### The branch rule

`.github/branch-ruleset.json` is the protection rule for `main`, kept in the repo
rather than only in the web UI so it can be reviewed and restored. Apply it with:

```bash
gh api --method POST /repos/JeffAndersonLogic/ap-world-history/rulesets \
  --input .github/branch-ruleset.json
```

It does three things: `main` cannot be deleted, `main` cannot be force-pushed,
and both Validate jobs must have passed on a commit before it can land there.

**This changes the Git workflow above.** Required checks cannot pass on a commit
that has not been pushed anywhere yet, so committing straight to `main` stops
working. The replacement is still not a pull request: push the work to any
branch, let Validate go green on it, then fast-forward `main` to that same
commit.

The wait is smaller than it looks. Both jobs run in parallel and the slow one is
`browser` at roughly two minutes, about 27s of that installing Chromium and the
rest running the suite; `structure` finishes in seconds. Required checks also bind to
the commit SHA rather than the branch, so once they are green on a working
branch, fast-forwarding `main` to that same commit is accepted straight away.
The two minutes runs alongside whatever you are doing, not in front of it.

If a broken CI ever blocks an urgent classroom fix, set the ruleset to
`"enforcement": "evaluate"` in Settings, Rules, rather than reaching for a force
push. That keeps the record of what it would have caught.

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

**Every one of the 77 First & 10 readings is generated.** Content lives in three
places, all rendered by `scripts/lib/first10-page.js`:

- `scripts/lib/f10-content.js`, Units 6 and 9 (13 readings)
- `scripts/lib/foundations-f10-content.js`, Foundations (6)
- `scripts/lib/reading-content/<unit>.js`, everything else (58)

There are no hand-authored readings left, and no sweep scripts are needed to
change one.

The point is not tidiness, it is that a change to the reading system reaches a
generated reading by rebuilding and reaches a hand-authored one only by writing a
sweep script that patches HTML in place. Every such script is permanent
maintenance debt and can only fix a problem already known about. That is how the
capture block went missing twice.

**Migrating a set of readings, in order:**

1. Extract the content into a module. Take paragraph, callout and support-card
   bodies as raw HTML: `<span class="kt">` is how a key term is found on the page
   and dropping it loses teaching, not styling.
2. Add whatever the template cannot yet express as an *optional* parameter that
   defaults to current behaviour, then regenerate the already-generated readings
   and confirm not one byte moved. This is the step that catches escaping bugs.
3. Prove the content survived with a golden diff against a **pinned** commit, not
   `HEAD`. A HEAD baseline compares the generated page against itself and can
   only say yes.
4. Prove it still looks right in a browser. Reviewed differences get listed with
   a reason rather than deleted, so the next unreviewed one still fails.
   Freeze the baseline as a committed fixture rather than a `git show`: CI
   checks out shallow, so a history lookup passes locally and fails on the only
   machine that gates anything.
5. Wire the reproducibility check into the offline suite, so a hand-edit to a
   generated file fails the push instead of being silently reverted by the next
   rebuild.

## Image Contract

Every picture a student can see must be on-topic and must be impossible to break:

- **Local artwork is the floor.** `assets/images/module-art/` holds generated
  artwork for every module card and every lecture, evidence, and map slot. Both
  renderers wire `onerror` to it, so a dead remote URL degrades to on-topic local
  art instead of an empty frame.
- **An empty `url` is a valid choice.** Leave `url` and `sourceUrl` empty and the
  renderer draws that slot's local artwork. Prefer this to a picture that does not
  match its caption.
- **Map & Geography needs an actual map.** Most map slots point at a generated
  local map in `assets/images/instructional-maps/`. Never put a portrait, a
  painting, a photograph, or a blank world outline in a map slot.
- **Hub topic cards carry two `<img>` layers**, local art underneath and the
  photograph on top with `onerror="this.remove()"`:

  ```html
  <a class="unit-card" href="...">
    <img class="card-art" src="../assets/images/module-art/unit-5/topic-5-3/map.svg" alt="" aria-hidden="true">
    <img class="card-photo" src="https://commons.wikimedia.org/wiki/Special:FilePath/..." alt="" aria-hidden="true" onerror="this.remove()">
  ```

  Do **not** put card artwork in a CSS custom property. A relative `url()` inside
  one resolves against the stylesheet's folder, not the page, so local paths
  silently 404. `validate.js` enforces the `<img>` structure.
- **Generated SVGs must carry `width` and `height`.** A `viewBox` alone leaves the
  intrinsic size undefined, and an `<img>` holding one gets stretched by its
  container until the picture is letterboxed off-screen.
- **Never commit a placeholder image file.** `validate.js` checks magic bytes;
  a text file named `.jpg` fails the build.
- **A remote image filename carries exactly one extension, at the end.**
  `Khmer_Empire_1203_Map_%28cropped%29.png).png` names no file on Commons, and
  Topic 1.3 shipped it to students on 2026-09-01 with every structural check
  green. A sweep percent-encoding parentheses across 72 Commons names had
  substituted each encoded name in for the *unencoded prefix*, leaving the tail
  of the old name attached; six pictures across four units went that way in one
  commit. `validate.js` now fails on a filename whose first image extension is
  not the end of the name, which needs no network because such a name is
  malformed on its face. **This is the offline half of the contract and it does
  not replace `check-image-urls.js`**, which is the only thing that knows
  whether a well-formed name actually resolves, and which is nightly on purpose
  so a third party's outage never fails a commit. That split is why a teacher
  found this before a machine did.

## Core Architecture

> **The Google Form is retired.** It was removed on 2026-08-07 along with
> `behistorical-form-config.js`, every Submit to Form button, and the Build Your
> Google Form Response builder. `docs/FORM-CONTRACT.md` records why, and
> `validate.js` fails the build if any of it reappears. Do not wire it back up.
> **MagicSchool is unaffected**; it was never a capture channel and every AI
> Coach prompt builder and Open MagicSchool button stays.

> **The modals manage focus.** `bhOpenModal`/`bhCloseModal` in both renderers
> move focus in, trap Tab, and return it to the launcher; the stack exists
> because the lightbox opens from inside the module modal. Adding a `.show` class
> without calling them locks a screen-reader user out of the lesson content. The
> two `scripts/test/modal-focus.*.js` browser tests are the check.
>
> **Every enlargeable image is a button.** Map and Evidence Lab images carry
> `role="button" tabindex="0"`, an `aria-label` naming the picture, and an
> Enter/Space handler. An `onclick` on its own is mouse-only, which is how the
> lightbox stayed unreachable by keyboard on every topic.
>
> **`bhOpenModal` is idempotent per element, and the scroll lock lifts on "no
> visible dialog", not "empty stack".** Both matter. The lecture arrows swap the
> card inside the open dialog by calling the open function again, so a renderer
> that pushed an entry per call left a five-card deck with five entries; one Close
> popped one, the stack stayed non-empty, and `document.body.style.overflow` was
> never restored. The dialog was gone, the page looked normal, and the student
> could not scroll the lesson until they reloaded. **Every structural check stayed
> green through all of it**, because nothing offline can see a scroll lock. Do not
> reintroduce an unconditional `BHModalStack.push`.

## Reference sections, read when the work touches them

These were part of this file until 2026-10-16 and moved word for word into `docs/claude/`, because
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

### Required structure (in order)

1. **`module-header`**, badge (`Module XX`), module name (`First & 10 Reading`), module subtitle (topic + course)
2. **`reading-title-band`**, eyebrow text, `h1.reading-title` (one word wrapped in `<em>` for gold highlight), `p.reading-deck` (italic subtitle), `.skill-tags` row
3. **`reading-body`** (warm-paper background, ink text)
   - `.support-strip`, two `.support-card` elements ("Before You Read" + "Reading Target")
   - `.vocab-strip`, key terms as `.term-chip` pills
   - Multiple `.section` divs, each with: `.section-number` watermark, `.section-label` eyebrow, `h2.section-heading`, `.reading-text` paragraphs, at least one `.ap-callout` with an AP skill label
   - `.be-ready` strip, "BeReady: 10-Second Takeaway"
4. **`.check-section`**, exactly three `.question-item` elements, each with `.q-num`, `.q-skill` badge, `.q-text`, and `textarea.q-textarea`
5. **No builder section, and no route to Socrates at all.** The reading carried a
   "Build Your AI Coach Prompt" block until 2026-08-31. It is gone, along with the
   Open MagicSchool button, the inlined prompt builder and the inlined classroom
   resolver, which existed only to resolve that button's href. `validate.js`
   prohibits all of it on both the reading and its wrapper, in the inverted form
   of the checks that used to require it, so it cannot come back on one side only.
6. **`.page-footer-note`**, submission note
7. **`.module-footer`**, nav links back to lesson path (← Map & Geography | Content Delivery →)
8. **The First & 10 answer-capture script block.** It writes the three answers to `behistorical-first10-<TOPIC>` where both renderers read them for Gather All My Work. Drop it and those answers never reach Canvas. It is now the *only* thing in a reading's trailing `<script>`.

### Delivery pattern

Every First & 10 must use the **embedded iframe** pattern:
- **Standalone reading file** (`first-and-10-topic-X-X-SLUG.html`), contains all reading content and the check section. No builder section: `validate.js` prohibits one, per point 5 above.
- **Capture wrapper** (`first-and-10-topic-X-X-SLUG-capture.html`), thin iframe wrapper. It intercepted "Open MagicSchool" clicks until 2026-08-31; the reading has no coach button now, so there is nothing left to intercept and the wrapper is just the iframe. See "Capture wrapper pattern" below.
- **Lesson data file**, `first10.embedUrl` must point to the capture wrapper (e.g., `'first-and-10-topic-1-1-song-china-capture.html'`)

### CSS class names (canonical)

Always use the full class names from Topic 1.1/1.2. Never use abbreviated names (`.cs`, `.qi`, `.mf`, etc.).

### Prohibited patterns

- No inline first10 rendering (paragraphs array + single prompt string)
- No standalone HTML without a capture wrapper
- No `embedUrl` pointing directly to the standalone HTML (must point to the capture wrapper)
- No abbreviated CSS class names
- No Google Form anything: no `submitToGoogleForm`, `buildGooglePrompt`, `#google-output`, `BH_FORM`, `PREFILLED_FIRST10_FORM`, or `behistorical-form-config.js`

### Capture wrapper pattern

All 77 wrappers share one shape, and it is now just an iframe. The MagicSchool
click interception is gone with the reading's coach button: most readings
rendered that button with no `onclick` and relied on the wrapper catching the
click by label, so with no button there is nothing to intercept.

The wrapper itself stays, because `first10.embedUrl` points at it and the iframe
is the delivery pattern.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First &amp; 10 Capture Wrapper | Topic X.X</title>
  <style>
    html, body { margin: 0; padding: 0; width: 100%; height: 100%; background: #1A1C1D; overflow: hidden; }
    iframe { width: 100%; height: 100vh; border: 0; display: block; }
  </style>
</head>
<body>
  <iframe id="first10-frame" src="first-and-10-topic-X-X-SLUG.html" title="First and 10 Topic X.X"></iframe>
</body>
</html>
```

`scripts/lib/first10-capture-wrapper.js` is the one template; three tools write
these files and all three import it. Run `node scripts/remove-google-form-capture.js`
to regenerate all 77. It is idempotent.
