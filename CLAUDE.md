# BeHistorical, Claude Code Rules

## Git

- `main` is the deploy branch: GitHub Pages serves it, so what is on `main` is
  what students have.
- Still no pull requests. Push to a working branch, wait for Validate to pass on
  it, then fast-forward `main` to that commit. This is the one change the branch
  rule forces, and only because a required check cannot pass on a commit that
  exists nowhere yet. See "The branch rule" below.
- Until the rule in `.github/branch-ruleset.json` is applied, committing directly
  to `main` still works and nothing stops an untested commit reaching students.

## The Gate

The contracts below are enforced by machine, not by memory.

- `npm test`, the gate. Runs `validate.js` plus the two dependency-free tests in
  about five seconds. This is what the pre-push hook and CI both run, and it is
  the only command you need to remember.
- `npm run test:browser`, the seven Chromium tests. Needs `npm i playwright-core`.
- `npm run test:all`, both suites.
- `npm run hooks:install`, point git at `.githooks/` so `npm test` runs before
  every push. `npm install` does this automatically. Override once with
  `git push --no-verify`.

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
`browser` at about two minutes, 27s of that installing Chromium and 82s running
the seven tests; `structure` finishes in 8 seconds. Required checks also bind to
the commit SHA rather than the branch, so once they are green on a working
branch, fast-forwarding `main` to that same commit is accepted straight away.
The two minutes runs alongside whatever you are doing, not in front of it.

If a broken CI ever blocks an urgent classroom fix, set the ruleset to
`"enforcement": "evaluate"` in Settings, Rules, rather than reaching for a force
push. That keeps the record of what it would have caught.

## Repository Commands

Every script below also has an `npm run` alias; see `package.json`.

- `node scripts/validate.js`, run the full structural, capture-wiring, and image-integrity audit.
- `node scripts/run-tests.js offline|browser|all [--strict]`, run a suite. Prints
  PASS, FAIL, or SKIP per check and exits 1 if anything failed.
- `node scripts/check-image-urls.js`, verify every remote Commons image URL actually resolves. Needs internet access to `commons.wikimedia.org`; `validate.js` stays offline on purpose and cannot do this.
- `node scripts/build-instructional-maps.js`, rebuild the local Map & Geography maps from `scripts/lib/instructional-map-specs.js`.
- `node scripts/build-module-art.js`, rebuild the local module-card and per-slot fallback artwork.
- `node scripts/build-announcements.js`, rebuild the classroom announcements board from `assets/data/announcements-schedule.js`, pulling each day's learning targets and success criteria out of that topic's lesson data file. Writes the generated `assets/data/announcements.js`, never edit that file by hand.
- `node scripts/generate-status-manifest.js`, refresh the teacher command-center inventory after adding or removing deliverables.
- `node scripts/build-unit6.js`, deterministically rebuild Unit 6 Topics 6.2–6.8 and their BeInTheRoom scenarios. `--check` fails on drift without writing.
- `node scripts/build-unit9.js`, deterministically rebuild Unit 9 Topics 9.4–9.9 and their BeInTheRoom scenarios. `--check` fails on drift without writing.
- `node scripts/build-unit-readings.js`, rebuild the 58 unit readings from `scripts/lib/reading-content/<unit>.js`. `--check` fails on drift without writing.
- `node scripts/extract-unit-content.js`, the one-way lift from hand-authored HTML into a content module. Refuses to read a page it generated, because re-extracting from generated output writes the generator's own bugs back in as authored content.
- `node scripts/test/readings-golden.js`, prove the 58 generated unit readings still carry every word of the originals, against `scripts/test/fixtures/readings-before.json`.
- `node scripts/build-foundations-readings.js`, rebuild the six Foundations First & 10 readings from `scripts/lib/foundations-f10-content.js`. `--check` fails on drift without writing, which is what the offline suite runs. Never hand-edit `foundations/first-and-10-foundations-*.html`; they are generated.
- `node scripts/test/foundations-golden.js`, prove the generated Foundations readings still carry every word, key term, callout, question and answer placeholder the hand-authored pages had. Compares content, not markup, against `scripts/test/fixtures/foundations-before.json`, a committed extraction of the originals. In the offline suite.
- `node scripts/test/foundations-visual.js [--shots]`, browser check that the shared stylesheet renders those readings the same. Not in the suite: it renders the real pre-migration HTML, which a shallow CI checkout does not have. Run it by hand with `BASE=<ref>` when touching `assets/css/behistorical-first10.css` or the template. Nine reviewed deltas are listed in the script with reasons; anything else fails.
- `node scripts/normalize-student-facing-language.js`, normalize Canvas guidance and the classroom MagicSchool URL.
- `node scripts/remove-google-form-capture.js`, idempotently strip any Google Form capture that reappears in a reading, wrapper, or lesson shell, and normalize all 77 capture wrappers to the MagicSchool-only shape.
- `node scripts/test/modal-focus.unit.js` and `node scripts/test/modal-focus.foundations.js`, drive a real lesson page in Chromium and assert the modal focus contract. Needs `npm i playwright-core`; `validate.js` stays offline and dependency-free, so these are separate. Run them when touching any modal open/close path.
- `node scripts/test/lecture-deck.test.js`, walk the whole lecture deck on both renderers and assert the student can still scroll afterwards. This is the regression gate for the stranded-student bug described under "The Lecture Deck" below, and it also covers Back to Modules and the video block. In the browser suite.
- `node scripts/build-skills-map.js`, regenerate `assets/data/skills-map.js`, the AP skill and evidence-term lookup the Skills Lens inlines. Run it after editing a checkpoint's `terms`, a `skillBuilder.label`, or a reading's `q-skill` badges.
- `node scripts/build-socrates.js`, regenerate the Socrates Kit in `docs/socrates/`: the instructions to paste into MagicSchool, the course spine to attach, and the paste contract. `--check` fails on drift without writing, which is what the offline suite runs. Run it after editing any lesson data or the persona.
- `node scripts/test/socrates-eval.js [--reps N] [--arm A|B|both]`, the graded stress test for the AI coach. Eight adversarial student inputs against the real persona and the real generated context blocks. Exits 2 when the `claude` CLI is absent, so it is not in the offline suite; `--strict` turns that skip into a failure. With one rep it is a regression gate, not a tuning instrument: use `--reps 3` or more before believing a persona edit helped.
- `node scripts/sync-first10-capture.js`, install the canonical First & 10 answer-capture block from `scripts/lib/first10-capture-block.js` into all 77 readings. That block is the only path by which the three reading answers and their confidence ratings reach Canvas, and it has gone missing silently twice. `validate.js` now fails if the block is absent **or** if any of the four files that must agree on the `behistorical-first10-<TOPIC_KEY>` storage key stops using it, which is the version of this failure that leaves every structural check green.
- `node scripts/test/skills-lens.test.js` and `node scripts/test/confidence.test.js`, browser tests for the Skills Lens panels and the confidence scale.
- `node scripts/test/lightbox-sweep.js`, open the Map and Evidence Lab modules on all 77 lesson pages and confirm every enlargeable image is an operable button. Prints only failures. Two exceptions are legitimate and the test allows them: a module with no images at all, which covers the topics with no Evidence Lab pictures and Topic 1.3, whose Map module is the course's only embedded iframe map.
- `node scripts/verify-canvas-check.js <parsed-dir>`, diff a real Canvas round trip character by character against the text that was typed. The one thing that cannot be tested from inside the repo is what Canvas does to a pasted document. See `docs/CANVAS-CHECK.md`.
- `node scripts/test/canvas-paragraphs.test.js`, offline check that every markup shape Canvas emits for a blank line parses back into two paragraphs, and that a soft `<br>` does not. Paragraph structure is the one corruption the manifest hash cannot catch, because the hash normalizes whitespace on purpose.
- `node scripts/parse-canvas-submissions.js <dir>`, turn an unzipped Canvas "Download Submissions" folder into `responses.csv` (one row per student per module response) and `exceptions.csv`. Reads and writes local files only, never the network. See `docs/CANVAS-CAPTURE.md`. The teacher's normal route is now dropping the zip straight on the Skills Lens; this is for a folder or a script.
- `node scripts/build-skills-lens.js`, inline `scripts/lib/canvas-parse-core.js` and `scripts/lib/canvas-zip.js` into `teacher/skills-lens.html`. Run it after editing either lib. `--check` fails without writing, which is what `validate.js` runs. Never hand-edit between the `BEGIN INLINED LIBS` sentinels.
- `node scripts/test/canvas-zip.test.js`, offline check of the browser zip reader against archives written by real tools, plus the parity assertion that a dropped zip and the CLI emit byte-identical `responses.csv`.
- `node scripts/test/skills-lens-zip.test.js`, drop a real Canvas zip on the real Lens in Chromium and assert the panels populate, the CSP still blocks the network, and the saved CSV matches the CLI byte for byte.

The student entry point is `index.html`. The project inventory is `docs/command-center.html`, backed by the generated `assets/data/project-status-manifest.js` file. The Google Form and the old Teacher Hub are both retired; see `docs/FORM-CONTRACT.md` and `docs/TEACHER-HUB.md`. Student work reaches the teacher through Canvas only, and the Skills Lens is the analysis surface.

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

## The Lecture Deck

The deck is a sequence and carries sequence controls in **both** renderers:
prev/next arrows, a `Card 3 of 8` counter, and the left/right arrow keys. The
controls and the Back to Modules button are **injected by the renderer**, not
added to the 77 lesson shells, so the shared renderer stays the only place that
knows the lecture modal's shape. Guard the injection on its own id, the way
`wireLectureControls()` does, or a re-render doubles the buttons.

Two exits, and they are not the same intention:

- **Close** returns the student to the card they opened, focus and all. A teacher
  stepping through a deck must not be yanked away from it.
- **Back to Modules** closes the card, scrolls to `#modules`, and puts focus on
  the first module card with `preventScroll: true` so the smooth scroll is the
  only movement the student sees.

`scripts/test/lecture-deck.test.js` is the gate on all of it. It asserts the page
really scrolls after Close rather than only that the lock was cleared, so a future
lock by some other mechanism fails there too.

### The card is paper, the picture is not

The lecture panel is `--warm-paper` under `--ink`, with a `--blackened-steel`
heading over a bronze rule and bold terms styled like a reading's `.kt`. The
figure keeps its near-black mount. Three reasons, in order of how much they
matter in a classroom:

1. A lamp projector can only add light. In a lit room a dark background degrades
   to washed-out grey, while a light one puts the lumens to work. Reverse this if
   the room is dark or the display is a flat panel.
2. Light-on-dark causes halation for the roughly one in three people with some
   astigmatism.
3. The positive polarity advantage: dark text on light is read measurably faster
   and more accurately, and the advantage grows as characters get smaller. The
   effect is small, and note that subjects in those studies performed better on
   light while reporting no preference, so asking students will not settle it.

It also ended an inconsistency. The readings and the module pop-outs were already
paper; this was the last dark reading surface in the system. `foundations-topic.css`
had been asking for a light panel all along and being overridden.

**The lecture card grid on the page stays dark.** Those are scanned at a glance,
not read at length, and it is the section's signature look.

The test is **polarity-agnostic**: it asserts contrast, not lightness, so flipping
back to dark stays a design call. What it will not allow is a half-done flip. Gold
headings on paper are 2.1:1, so changing the panel without the headings leaves the
title unreadable with every structural check still green.

## Video Clips

Videos are an **optional resource**, not part of the ten-module path and not part
of the lecture deck. Only 27 of the 71 unit topics have a clip at all (units 1, 2,
8 and 9, plus 3.1 and 3.4); most Foundations topics have two, and Foundations 2
has seven, one per belief system it teaches. That coverage is why they are not
folded into the lecture cards: it would leave 44 topics' cards with an empty
slot, and nothing in the data maps a clip to a particular card.

- The block **introduces itself** when clips exist and **hides entirely** when
  they do not. An empty `#content-video-clips` used to leave a gap under the
  lecture cards on 44 topics, which reads as something failing to load.
- Keep the container in the shell either way. `validate.js` requires the
  `content-video-clips` id; the renderer sets `hidden` on it.
- A clip card is headed by **its title**. It used to be headed "Video Clip" with
  the real title demoted to a paragraph.
- Each clip's `prompt` is the guiding question. It is what makes a clip usable as
  homework rather than filler, so never add a clip without one.

## Socrates, the AI Coach

**Socrates is one MagicSchool chatbot serving all 77 topics.** Every lesson's
`meta.feedbackToolUrl` and all 77 capture wrappers point at join code `czwb9Q`, so
the plumbing has always been course-wide. What was scoped to Unit 1 was his
*instructions*, which is why a Unit 7 student used to get told their topic was
outside the coach's scope.

The content is split three ways by how often it changes, and the split is the
whole design. Read `docs/socrates/README.md` before touching any of it.

- **The persona** is hand-authored in `scripts/lib/socrates-persona.js` and
  carries no unit names, no date ranges, and no unit numbers. With one bot serving
  77 topics, a content word in the persona is content the other 76 get coached
  with. `scripts/test/socrates-contract.test.js` fails the push if one reappears.
- **The paste** carries the one assignment in front of the student, built by
  `contextBlock()` in `scripts/lib/socrates-course.js` from the lesson data.
  This is what makes one bot work for nine units: retrieval cannot miss a fact
  that is already in the message. `docs/socrates/socrates-paste-contract.md` is
  the documented shape, generated from that same function so the doc cannot
  describe something the code does not produce.
- **The spine** is the generated attachment, for questions off the module path.

**Never paste unit content into the instructions field, and never hand-build a
knowledge pack.** Both make a second copy of content whose first copy is the
lesson data, with nothing able to tell you when the two disagree. That is the same
failure that lost the First & 10 capture block twice, and here it would be worse:
the coach would keep teaching last term's checkpoint with every structural check
green.

Two things the repo cannot test, so they are manual and written down in
`docs/socrates/README.md`: pasting the instructions into MagicSchool, and
uploading the spine. Nothing here can log into a vendor web UI. What the repo does
test is that both documents are reproducible from the lesson data, and that every
one of the 77 topics can produce a complete context block.

> **`teacher/skills-lens.html` is the analysis surface**, and it is a teacher
> tool: never link it from a lesson page. It reads the Canvas `submissions.zip`
> directly, or `responses.csv` and `exceptions.csv`, entirely in the tab. It
> makes no network call and holds the name-to-code crosswalk in memory only. Its
> denominators come from `assets/data/skills-map.js`, never from what a student
> managed to submit, because a bare n is the bug this pipeline exists to prevent.
>
> **The parser inside it is not a copy, it is the same file.**
> `scripts/lib/canvas-parse-core.js` is required by the CLI and inlined into the
> Lens by `scripts/build-skills-lens.js`. Two implementations would mean two
> answers to "did this student edit their work" depending on which door the
> teacher used. `validate.js` re-derives the inlined block and fails on drift, and
> `scripts/test/canvas-zip.test.js` asserts both paths emit byte-identical CSV.

> **Before touching the Gather All My Work panel or its record footer, read
> `docs/CANVAS-CAPTURE.md`.** Both renderers emit the footer and one parser reads
> it, so a change to any one of the three breaks the other two. A wrong
> `expected` count reports complete submissions as incomplete, which is worse
> than no count at all.

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
| 08 | `source` / `coach` | Primary Source (Unit) / Socrates AI Coach (Foundations) | `renderSource()` | `renderCoach()` |
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
  <div class="roadmap-step"><strong>2. Learn &amp; Practice</strong>Use the module cards, then move into the main lecture-card section.</div>
  <div class="roadmap-step"><strong>3. Check Understanding</strong>Complete checkpoints with self-check and response tools.</div>
</div>
```

- Unit lesson pages: the `.lesson-roadmap` div is hardcoded in the HTML.
- Foundations pages: the renderer populates `id="block-plan-roadmap"` (which has `class="lesson-roadmap"`) with the same three `.roadmap-step` divs. The Foundations `blockPlan` data array is ignored for display, it exists only as instructor reference material.

## First & 10 Reading Standard

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
5. **Builder section, "Build Your AI Coach Prompt"**, `.builder-section` with `buildAiPrompt()`, `copyAiPrompt()`, and Open MagicSchool buttons, `#ai-output` textarea
6. **`.page-footer-note`**, submission note
7. **`.module-footer`**, nav links back to lesson path (← Map & Geography | Content Delivery →)
8. **The First & 10 answer-capture script block.** It writes the three answers to `behistorical-first10-<TOPIC>` where both renderers read them for Gather All My Work. Drop it and those answers never reach Canvas.

### Delivery pattern

Every First & 10 must use the **embedded iframe** pattern:
- **Standalone reading file** (`first-and-10-topic-X-X-SLUG.html`), contains all reading content, check section, and builder sections
- **Capture wrapper** (`first-and-10-topic-X-X-SLUG-capture.html`), thin iframe wrapper that intercepts "Open MagicSchool" button clicks
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

All 77 wrappers share one shape. The MagicSchool interception is load-bearing:
most readings render that button with no `onclick` and rely on the wrapper
catching the click by label, so a wrapper without it is a dead button.

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
  <script>
    const MAGICSCHOOL_URL = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
    // ... wireFirst10Capture() intercepts clicks labelled
    //     'open magicschool' or 'open ai coach'
  </script>
</body>
</html>
```

Run `node scripts/remove-google-form-capture.js` to regenerate all 77 to this
shape. It is idempotent.
