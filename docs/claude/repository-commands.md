# Repository Commands

Moved word for word from `CLAUDE.md` on 2026-10-16 so the rulebook every session loads stays short (Jeff's decision, recorded in AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`). It is as binding as it was there: read it before changing anything it covers. A comment elsewhere that says "see <section> in CLAUDE.md" means this file; `CLAUDE.md` lists where each section went.


Every script below also has an `npm run` alias; see `package.json`.

- `node scripts/validate.js`, run the full structural, capture-wiring, and image-integrity audit.
- `node scripts/run-tests.js offline|browser|all [--strict]`, run a suite. Prints
  PASS, FAIL, or SKIP per check and exits 1 if anything failed.
- `node scripts/check-image-urls.js`, verify every remote Commons image URL actually resolves. Needs internet access to `commons.wikimedia.org`; `validate.js` stays offline on purpose and cannot do this. **It separates "gone" from "not verified"**, see "Rate limiting is not a broken image" below. Exit 1 means a picture is genuinely missing, exit 2 means nothing could be checked at all.
- `node scripts/test/image-check-throttle.test.js`, prove that separation against a local server that rate-limits on demand: `Retry-After` obeyed in both its forms, a 429 pausing every worker on that host rather than one request, a throttled URL that later answers reported as fine, a permanent 429 or a proxy 403 reported as unverified rather than broken, and a real 404 still failing the run. Offline and in the push gate, because the real host cannot be a test fixture.
- `node scripts/capture-topic-for-review.js X.Y <out-dir>`, capture what a student and the
  projector actually show for one topic (every module pop-out, lecture card, the reading, the deep
  reading, the scenario, the Canvas text, and a 1920x1080 screenshot of every teacher slide) plus
  `REVIEW-BRIEF.md` from `docs/review-brief-template.md`: the packet the Phase 9 independent
  reviewers read. Teacher slides only, on purpose; see its header. Set `BHT_FONT_DIR` for the
  brand fonts. **Not in any suite**: it produces review material and checks nothing. Exits 2
  without playwright-core.
- `node scripts/source-evidence-images.js [topic] [--apply]`, verify staged Module
  07 image candidates against Commons and apply only the ones that resolve.
  Candidates live in `scripts/lib/evidence-image-candidates.js` and are loaded by
  nothing; a candidate reaches a lesson page only on a live answer in that run. A
  dead filename prints the files Commons actually has for its search query, to
  choose from by eye. **Exit 2 means it verified nothing** because Commons could
  not be reached, which is not a pass. Refuses Units 6 and 9, whose pools their
  generators own. See "Sourcing images" in
  `docs/module-07-units-5-6-8-9-conversion.md`.
- `node scripts/test/evidence-image-surgery.test.js`, drive the real config
  splice against a config carrying the two traps that have bitten it: a card
  title that also appears in `stableImages`, and a bracket inside a caption. In
  the offline suite, because the corruption it prevents is silent, every page
  still renders and every structural check stays green.
- `node scripts/build-instructional-maps.js`, rebuild the local Map & Geography maps from `scripts/lib/instructional-map-specs.js`.
- `node scripts/build-module-art.js`, rebuild the local module-card and per-slot fallback artwork.
- `node scripts/build-announcements.js`, rebuild the classroom announcements board from `assets/data/announcements-schedule.js`, pulling each day's learning targets, success criteria and module list out of that topic's lesson data file. Writes the generated `assets/data/announcements.js`, never edit that file by hand. `--check` fails on drift, which is what the offline suite runs. See "Today's Required Modules" below.
- `node scripts/build-wordmark.js`, render the BeHistorical wordmark to
  `assets/logos/behistorical-wordmark-{light,dark}.png` from the same markup and
  the same `behistorical-brand-lock.css` the site draws it with. Needs
  `npm i playwright-core` and reachable Google Fonts, so it is not in any suite;
  it exits 2 when playwright-core is absent and **fails** rather than rendering
  in Georgia when the font does not arrive. `--check` fails on drift. See "The
  wordmark in Canvas" below.
- `node scripts/build-canvas-events.js`, rebuild both paste-ready Canvas documents from the same schedule: the calendar events in `docs/canvas/calendar-events.md`, one per class day, and the assignment bodies in `docs/canvas/assignments.md`, one per topic. `--check` fails on drift in either. One generator, because the two objects share the masthead, the overview, the targets, the criteria, the cohort seals and the row markup, and two scripts would mean two copies of all of it. See "Green and Silver" and "Today's Required Modules" below.
- `node scripts/test/announcements-refresh.test.js`, prove the classroom board re-reads `announcements.js` when the date rolls over, re-fetches once rather than once per clock tick, and keeps the day it has when the network is down or the file comes back unusable. In the browser suite. See "Today's Required Modules" below.
- `node scripts/test/schedule-cohorts.test.js`, prove the alternating block contract: every day names a cohort, cohorts alternate, every topic is scheduled for both, and every due date is the assigning cohort's own next meeting. In the offline suite.
- `node scripts/generate-status-manifest.js`, refresh the teacher command-center inventory after adding or removing deliverables.
- `node scripts/build-unit6.js`, deterministically rebuild Unit 6 Topics 6.2–6.8 and their BeInTheRoom scenarios. `--check` fails on drift without writing.
- `node scripts/build-unit9.js`, deterministically rebuild Unit 9 Topics 9.4–9.9 and their BeInTheRoom scenarios. `--check` fails on drift without writing.
- `node scripts/build-unit-readings.js`, rebuild the 58 unit readings from `scripts/lib/reading-content/<unit>.js`. `--check` fails on drift without writing.
- `node scripts/extract-unit-content.js`, the one-way lift from hand-authored HTML into a content module. Refuses to read a page it generated, because re-extracting from generated output writes the generator's own bugs back in as authored content.
- `node scripts/test/readings-golden.js`, prove the 58 generated unit readings still carry every word of the originals, against `scripts/test/fixtures/readings-before.json`.
- `node scripts/build-foundations-readings.js`, rebuild the six Foundations First & 10 readings from `scripts/lib/foundations-f10-content.js`. `--check` fails on drift without writing, which is what the offline suite runs. Never hand-edit `foundations/first-and-10-foundations-*.html`; they are generated.
- `node scripts/build-deep-readings.js`, rebuild the deep readings from `scripts/lib/deep-reading-content/`. `--check` fails on drift without writing, which is what the offline suite runs. Never hand-edit a generated `deep-reading-*.html`, in `foundations/` or in any `unit-N/`. See "Deep Readings" below.
- `node scripts/build-ebook.js`, compile the deep readings for a volume into `ebook/<volume>.html`. `--check` fails on drift without writing, which is what the offline suite runs. See "The eBook" below.
- `node scripts/build-student-decks.js`, generate the student-facing copy of each Teach Mode slide deck from its teacher deck, with every presenter note and the Blackout control removed from the file's actual bytes rather than hidden with CSS. `--check` fails on drift without writing, wired into `scripts/test/readings-reproducible.test.js` in the offline suite. See "Class Presentations" below.
- `node scripts/test/ebook-a11y.test.js`, drive the library and every volume in
  `VOLUMES` in Chromium and assert the WCAG 2.1 AA contract: skip link first and visible,
  one `<main>` with the footer outside it, a focus ring on every interactive
  element, no sideways scroll at 320px or at 200% zoom, and no text under its
  contrast threshold. In the browser suite. See "eBook accessibility" below.
- `node scripts/test/ebook-listen.test.js`, drive the eBook's "Listen to this
  section" controls in Chromium against a stubbed speech engine: controls built in
  every marked section, narration that reads the history and not the page
  furniture, starting one section cancelling another, pause, resume and stop
  moving the real state, a playback speed that persists and rejects anything
  outside the four supported values, and a browser with no speech synthesis
  getting no controls rather than dead ones. In the browser suite. See "Listen to
  this section" below.
- `node scripts/check-style.js`, the mechanical half of the house style: American
  English spelling, `c. 1200` rather than `c.1200`, no em or en dashes in prose, and
  the two canonical note labels. In the offline suite. It reads the deep-reading
  content modules and, since 2026-09-22, the First & 10 content modules too,
  under a ratchet: the 187 violations already in published readings are listed in
  `scripts/lib/style-baseline-first10.json` and tolerated, anything new fails,
  and an entry that stops occurring also fails, so the list only shrinks. Revise
  a reading and its old dashes get fixed in the same edit. Do not add entries to
  the baseline; that is re-approving a defect. Everything a machine cannot decide
  is in `docs/STYLE.md`.
- `node scripts/stamp-asset-versions.js [--write]`, replace the value of every
  `?v=` tag on a local page, script or stylesheet with a hash of that file's
  content and of everything it loads, so an edit to a data file changes its tag
  in the shell, the shell's tag on the hub, and the shell's self-redirect key.
  **It runs only at deploy, in `.github/workflows/pages.yml`, never on the repo**,
  so the tags in the source can stay whatever anyone typed and a web-editor or
  agent edit is never failed for a stale one. **Do not hand-bump `?v=` values or
  push "force refresh" commits any more**; once Pages deploys from that workflow
  they are overwritten on every deploy. `scripts/test/asset-versions.test.js`, in
  the offline suite, proves the stamp moves nothing but tag values, is
  idempotent, and carries a leaf edit up to the hub. **Switching it on is one
  setting: Settings, Pages, Source, GitHub Actions.** Until then the workflow
  sees a branch deploy and skips, and switching back is the rollback.
- `node scripts/report-absolutes.js [topic-N] [--counts]`, list superlatives,
  universals and sole-cause claims across the deep readings, with context,
  grouped by pattern. **Deliberately not in any suite, and exits 0 always.**
  Whether a claim is defensible is a judgment about evidence, and a gate that
  failed a push over the word "only" would teach one behavior, which is adding
  qualifiers until the grep goes quiet. Hedged prose is not more accurate, it
  has just stopped saying anything. Expect a high false-positive rate by design;
  see `docs/STYLE.md` for how to triage a hit, and note that the usual repair is
  a narrower **concrete** claim rather than a softer one.
- `node scripts/report-evidence-authenticity.js [unit] [--summaries]`, sort every
  Module 07 evidence card in the course into **object** (a real picture),
  **record** (no picture, but the words carry a quotation or figures) and
  **summary** (neither, so the student has nothing to observe). **Deliberately
  not in any suite, and exits 0 always**, same reasoning as `report-absolutes.js`:
  the classifier is a proxy and whether a card is really a historical object is a
  judgment about teaching. Read a flag as a question, is there a real object here
  we are not using, not a verdict. See "Module 07, the Evidence Lab" below.
- `node scripts/check-module07-authored.js`, the offline contract for a Module 07
  unit converted to one authored evidence pool: no registry, no runtime, 4 to 6
  cards, and every card either a picture or declared `sourceText`. `CONVERTED` in
  that file is the declared list of converted units. In the offline suite.
- `node scripts/report-skill-alignment.js [topic] [--flagged]`, list each topic's
  AP reasoning skill beside what its Checkpoint 2 actually asks for, and flag the
  ones whose prompt contains none of that skill's language. **Deliberately not in
  any suite, and exits 0 always**, same reasoning as the two reports below. The
  Checkpoint 2 paste now names the topic's skill, so a mislabelled topic points
  Socrates at a reasoning move the prompt never asked for. See "The reasoning
  skill in the Checkpoint 2 paste" below for the outstanding triage.
- `node scripts/report-checkpoint-congruence.js [topicKey] [--counts] [--min=N]`,
  list checkpoint prompts whose own topic publishes an eBook closing card or
  "Use this in your answer" box that answers the same specific question, ranked
  by content-word overlap. **Deliberately not in any suite, and exits 0
  always**, same reasoning as `report-absolutes.js`: the eBook and a checkpoint
  are supposed to share evidence about the same events, and whether a given
  match has crossed from shared evidence into a published conclusion is a
  judgment about teaching, not something a machine can decide. Topic 5.3 is the
  case that found this: Checkpoint 2 asks why calling the Luddites
  "anti-technology" mischaracterizes them, and the chapter's own closing card
  answers exactly that, with its evidence, on a public page. See the script's
  header for FINE / REWORD / PROMOTE, the three outcomes for a hit.
- `node scripts/test/foundations-golden.js`, prove the generated Foundations readings still carry every word, key term, callout, question and answer placeholder the hand-authored pages had. Compares content, not markup, against `scripts/test/fixtures/foundations-before.json`, a committed extraction of the originals. In the offline suite.
- `node scripts/test/foundations-visual.js [--shots]`, browser check that the shared stylesheet renders those readings the same. Not in the suite: it renders the real pre-migration HTML, which a shallow CI checkout does not have. Run it by hand with `BASE=<ref>` when touching `assets/css/behistorical-first10.css` or the template. Nine reviewed deltas are listed in the script with reasons; anything else fails.
- `node scripts/normalize-student-facing-language.js`, normalize Canvas guidance and the classroom MagicSchool URL.
- `node scripts/remove-google-form-capture.js`, idempotently strip any Google Form capture that reappears in a reading, wrapper, or lesson shell, and normalize all 77 capture wrappers to the MagicSchool-only shape.
- `node scripts/test/modal-focus.unit.js` and `node scripts/test/modal-focus.foundations.js`, drive a real lesson page in Chromium and assert the modal focus contract. Needs `npm i playwright-core`; `validate.js` stays offline and dependency-free, so these are separate. Run them when touching any modal open/close path.
- `node scripts/test/lecture-deck.test.js`, walk the whole lecture deck on both renderers and assert the student can still scroll afterwards. This is the regression gate for the stranded-student bug described under "The Lecture Deck" below, and it also covers Back to Modules and the video block. In the browser suite.
- `node scripts/build-skills-map.js`, regenerate `assets/data/skills-map.js`, the AP skill and evidence-term lookup the Skills Lens inlines. Run it after editing a checkpoint's `terms`, a `skillBuilder.label`, or a reading's `q-skill` badges.
- `node scripts/build-coach-prompt.js`, inline `assets/js/behistorical-coach-prompt.js` into **both** renderers between their sentinels. That file is the one implementation of the AI coach paste contract, shared by the checkpoint bridge, all 77 generated readings, and the Node side. `--check` fails on drift, which is what `validate.js` runs. Never hand-edit between the sentinels.
- `node scripts/build-classroom-config.js`, regenerate `assets/js/behistorical-classroom.js` from `scripts/lib/classroom-config.js`, and inline it into both renderers and `behistorical-room-v2.js` between sentinels. `--check` fails on drift, which is what the offline suite runs. Never hand-edit between the sentinels or the generated file. See "Two Classrooms, One Site" below.
- `node scripts/build-save-health.js`, inline `assets/js/behistorical-save-health.js` into both renderers between sentinels. That file is the one implementation of the save-failure counter, and it is the Phase 1 instrumentation from the persistence plan in AndersonLogic-OS. `--check` fails on drift, which is what the offline suite runs. Never hand-edit between the sentinels. See "Save health" below.
- `node scripts/test/save-health.test.js`, prove a failed draft save is counted rather than lost, against the real `BHDraftStore` lifted out of each renderer rather than a copy written for the test. In the offline suite. It also runs its own negative controls, so its green is evidence rather than an assumption.
- `node scripts/wire-beintheroom-magicschool.js [--dry-run]`, one-time sweep that gives every v1 BeInTheRoom scenario's MagicSchool button the same classroom-aware wiring. Idempotent; run it again after adding a new hand-authored (non-v2) scenario with its own MagicSchool button.
- `node scripts/wire-beintheroom-work-capture.js [--dry-run]`, one-time sweep that gives every hand-authored v1 BeInTheRoom scenario the same wiring to `assets/js/behistorical-beintheroom-capture.js`, so its AP reflection reaches Gather All My Work. Idempotent; run it again after adding a new hand-authored scenario. What it writes is a single `BHBeInTheRoomCapture.wire(...)` call, never the logic itself, because the version that wrote the logic put 23 copies of it in the repo and every copy had the same bug. See "BeInTheRoom reflections reach Canvas" below.
- `node scripts/test/beintheroom-capture.test.js`, drive a real hand-authored scenario in Chromium, type an AP reflection, reopen the page the way a student does, and assert the reflection is still in the box, still in storage, and still collected by the real lesson page's Gather All My Work. In the browser suite. It reads its scenario list off the lesson data files, so a scenario added later is covered by existing. See "BeInTheRoom reflections reach Canvas" below.
- `node scripts/wire-beintheroom-coach-prompt.js [--dry-run]`, normalize what a hand-authored BeInTheRoom scenario pastes into Socrates: name him rather than a second coach, drop the restated persona rule, and replace the six-stage walk with the bounded ask. Idempotent, skips the generated unit-6 and unit-9 scenarios because their generators own them, and preserves each scenario's own revision target and step-out-of-character question. Run it after writing a new hand-authored scenario. See "What a scenario pastes" below.
- `node scripts/test/readings-parse.test.js`, compile the trailing `<script>` of all 77 readings and fail if any is not valid JavaScript. In the offline suite. Ten readings once shipped with a stray `});` that threw a SyntaxError, which discards the whole script element: the AI prompt buttons, the confidence scale, and the answer capture all died at once, with every structural check green because the capture block was present and byte-identical. It was simply unreachable.
- `node scripts/test/coach-prompt.test.js`, drive a real lesson page in Chromium and assert the checkpoint paste is byte-identical to what `scripts/lib/socrates-course.js` produces. In the browser suite. It is the only check that the renderer actually *calls* the shared builder with the right fields.
- `node scripts/build-socrates.js`, regenerate the Socrates Kit in `docs/socrates/`: the instructions to paste into MagicSchool, the course spine to attach, and the paste contract. `--check` fails on drift without writing, which is what the offline suite runs. Run it after editing any lesson data or the persona.
- `node scripts/test/socrates-eval.js [--reps N] [--arm A|B|both]`, the graded stress test for the AI coach. Eight adversarial student inputs against the real persona and the real generated context blocks. Exits 2 when the `claude` CLI is absent, so it is not in the offline suite; `--strict` turns that skip into a failure. With one rep it is a regression gate, not a tuning instrument: use `--reps 3` or more before believing a persona edit helped.
- `node scripts/sync-first10-capture.js`, install the canonical First & 10 answer-capture block from `scripts/lib/first10-capture-block.js` into all 77 readings. That block is the only path by which the three reading answers and their confidence ratings reach Canvas, and it has gone missing silently twice. `validate.js` now fails if the block is absent **or** if any of the four files that must agree on the `behistorical-first10-<TOPIC_KEY>` storage key stops using it, which is the version of this failure that leaves every structural check green.
- `node scripts/test/skills-lens.test.js` and `node scripts/test/confidence.test.js`, browser tests for the Skills Lens panels and the confidence scale.
- `node scripts/test/ap-practice-units12.test.js`, validate the 42 revised AP Skill Builder, Evidence Lab, and Primary Source modules in Units 1-2 against the fall 2026 CED skill/reasoning progression, source-transparency contract, evidence availability, and lesson-shell load order. The live content is centralized in `assets/data/ap-practice-units-1-2.js`; load it after the topic renderer config and before the shared renderer.
- `node scripts/test/lightbox-sweep.js`, open the Map and Evidence Lab modules on all 77 lesson pages and confirm every image **already marked** as a button really opens the lightbox. Prints only failures. A module with no images at all is legitimate and allowed, which covers the topics with no Evidence Lab pictures and Topic 1.3, whose Map module is the course's only embedded iframe map. **That tolerance is also the sweep's blind spot**: it selects `img[role="button"]`, so an image that lost its role reports as zero images rather than as a failure, and would pass on all 77 pages. `validate.js` covers the other half offline, asserting the five renderer templates that produce every enlargeable picture each carry `role`, `tabindex`, an `aria-label` and an Enter/Space handler.
- `node scripts/verify-canvas-check.js <parsed-dir>`, diff a real Canvas round trip character by character against the text that was typed. The one thing that cannot be tested from inside the repo is what Canvas does to a pasted document. See `docs/CANVAS-CHECK.md`.
- `node scripts/test/canvas-paragraphs.test.js`, offline check that every markup shape Canvas emits for a blank line parses back into two paragraphs, and that a soft `<br>` does not. Paragraph structure is the one corruption the manifest hash cannot catch, because the hash normalizes whitespace on purpose.
- `node scripts/parse-canvas-submissions.js <dir>`, turn an unzipped Canvas "Download Submissions" folder into `responses.csv` (one row per student per module response) and `exceptions.csv`. Reads and writes local files only, never the network. See `docs/CANVAS-CAPTURE.md`. The teacher's normal route is now dropping the zip straight on the Skills Lens; this is for a folder or a script.
- `node scripts/build-skills-lens.js`, inline `scripts/lib/canvas-parse-core.js` and `scripts/lib/canvas-zip.js` into `teacher/skills-lens.html`. Run it after editing either lib. `--check` fails without writing, which is what `validate.js` runs. Never hand-edit between the `BEGIN INLINED LIBS` sentinels.
- `node scripts/test/canvas-zip.test.js`, offline check of the browser zip reader against archives written by real tools, plus the parity assertion that a dropped zip and the CLI emit byte-identical `responses.csv`.
- `node scripts/test/skills-lens-zip.test.js`, drop a real Canvas zip on the real Lens in Chromium and assert the panels populate, the CSP still blocks the network, and the saved CSV matches the CLI byte for byte.
- `node scripts/build-run-of-show.js`, generate the Run of Show teacher-cockpit pacing page for each topic in its `TOPICS` list, plus `teacher/run-of-show-index.html`, the one stable URL linking every topic that has one. `--check` fails on drift without writing, wired into `scripts/test/readings-reproducible.test.js` in the offline suite. `validate.js` checks reachability both ways: a declared topic missing its `runOfShow` block or its generated page, and a generated page the index does not link. See "Run of Show" below.
- `node scripts/build-teacher-index.js`, generate `teacher/index.html`, the teacher command center: one bookmark linking every teacher-only tool (Run of Show, the interactive lessons, Skills Lens), plus a Today panel that reads the schedule live in the browser and surfaces the best teacher surface for whatever topic is being taught right now. `--check` fails on drift without writing, in the offline suite. `validate.js` checks the registry **both ways**: the page links every declared tool, every declared interactive lesson exists and is in the tool grid, no `teacher/command-center-*.html` on disk is missing from `INTERACTIVE_TOPICS`, and none of it is linked from a student page. See "Run of Show" below.
- `node scripts/test/slide-templates.test.js`, the offline slide template contract: one library, `assets/js/behistorical-slide-templates.js`, handed every template slide by every Teaching OS renderer and loaded by every deck's wrapper and student shell, with a catalog example for every template, escaped text, and the `Historical Reconstruction - AI Generated` label forced on every `ai: true` visual. Carries its own negative controls. In the offline suite. See "Slide templates" in `docs/TEACHING-OS.md`.
- `node scripts/test/slide-templates.browser.test.js`, draw every template in Chromium and fail on text painted off its board, text colliding inside it (a region spilling into the heading or footer, or text over text), an AI label missing or cut off, or a Teaching OS page that does not really draw a template. In the browser suite. Its main passes use fallback fonts, narrower than Cinzel; a webfont pass re-measures every real deck in the brand fonts and prints SKIP when the fonts cannot load, which is not a pass. `BHT_FONT_DIR` serves the fonts from disk for a sandbox whose browser cannot reach Google; see "Slide templates" in `docs/TEACHING-OS.md`.
- `node scripts/test/teaching-os-briefing.browser.test.js`, click Briefing on every Teaching OS teacher page in Chromium and assert it opens with that deck's own end target and priorities, that Copy link, Copy briefing text and Print work, that `#briefing` opens it, that it never opens on the projector, and that every local link on the page resolves. In the browser suite, with negative controls. Six pages shipped a Briefing button wired to nothing until 2026-10-09; see "The Briefing" in `docs/TEACHING-OS.md`.
- `node scripts/test/teaching-os-projection.browser.test.js`, open every Teaching OS teacher page with its projection window beside it in Chromium and assert the projector follows the teacher, never shows Teacher Preflight (in the projection window or in Present), that a reload resumes on the same slide, and that the iPad Remote loads the topic. In the browser suite, with negative controls. Six pages shipped a projector that never moved until 2026-10-09; see "The projector" in `docs/TEACHING-OS.md`.
- `node scripts/build-key-concepts.js`, rebuild `assets/data/key-concepts.js`, every
  unit topic's CED Key Concepts lifted from its lesson data, which is where a class
  slide's Key Concept band gets its wording. `--check` fails on drift, in the offline
  suite. Never hand-edit the output. See "The Key Concept band" in `docs/TEACHING-OS.md`.
- `node scripts/test/deck-key-concepts.test.js`, the offline Key Concept band contract:
  every deck in `DECKS` tags only its own topic's Key Concepts, bands every one of them
  on some projected slide, never bands Preflight or BeReady, and is wired to draw the
  band. Carries its own negative controls. In the offline suite.
- `node scripts/test/key-concept-band.browser.test.js`, walk every Teaching OS deck in
  Chromium, teacher projector and student deck, and fail on a missing or stray band,
  wording that does not fit, or a slide the band pushes out of its room. In the browser
  suite. `BHT_FONT_DIR` measures it in the brand fonts, as for the slide templates.
- `node scripts/build-topic-audit-index.js`, generate `docs/topic-audits/index.md`, the
  coverage page for the per-topic audits. `--check` fails on drift, which is what the
  offline suite runs. Never hand-edit the index. See "Topic audits" below.
- `node scripts/check-audit-freshness.js [--horizon=N] [--sweep-max-age=N] [--json]`,
  fail when the topic audit has gone quiet: no weekly sweep marker, a topic taught
  soon with no record or a stale one, an exhausted schedule, an unreadable record, or
  a shallow clone. **Nightly, never the push gate**, because an overdue audit must
  never block a classroom fix. Exit 1 means something needs doing; there is no exit 2,
  since every input is local.
- `node scripts/test/topic-audit-coverage.test.js`, drive every branch of that check
  with synthetic coverage and prove each one is capable of failing, plus an all-clean
  fixture proving it can still pass. In the offline suite.
- `node scripts/test/teacher-today.test.js`, prove the Today panel routes a real date to the right teacher surface, against the real schedule and the real registry: every registered lesson on both its cohort days, a Run of Show topic still resolving, interactive outranking Run of Show, and a holiday, a topic-less class day and an unbuilt topic each answering honestly rather than offering a dead link. In the offline suite. See "Run of Show" below.
