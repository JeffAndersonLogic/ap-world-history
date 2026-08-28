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
- `node scripts/build-announcements.js`, rebuild the classroom announcements board from `assets/data/announcements-schedule.js`, pulling each day's learning targets and success criteria out of that topic's lesson data file. Writes the generated `assets/data/announcements.js`, never edit that file by hand. `--check` fails on drift, which is what the offline suite runs.
- `node scripts/build-canvas-events.js`, rebuild the paste-ready Canvas calendar events in `docs/canvas/calendar-events.md`, one per class day, from the same schedule. `--check` fails on drift. See "Green and Silver" below.
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
  content modules only; the 77 First & 10 readings are pinned word for word by
  golden fixtures, so a spelling sweep there is a separate decision. Everything a
  machine cannot decide is in `docs/STYLE.md`.
- `node scripts/report-absolutes.js [topic-N] [--counts]`, list superlatives,
  universals and sole-cause claims across the deep readings, with context,
  grouped by pattern. **Deliberately not in any suite, and exits 0 always.**
  Whether a claim is defensible is a judgment about evidence, and a gate that
  failed a push over the word "only" would teach one behavior, which is adding
  qualifiers until the grep goes quiet. Hedged prose is not more accurate, it
  has just stopped saying anything. Expect a high false-positive rate by design;
  see `docs/STYLE.md` for how to triage a hit, and note that the usual repair is
  a narrower **concrete** claim rather than a softer one.
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
- `node scripts/wire-beintheroom-magicschool.js [--dry-run]`, one-time sweep that gives every v1 BeInTheRoom scenario's MagicSchool button the same classroom-aware wiring. Idempotent; run it again after adding a new hand-authored (non-v2) scenario with its own MagicSchool button.
- `node scripts/wire-beintheroom-work-capture.js [--dry-run]`, one-time sweep that gives every hand-authored v1 BeInTheRoom scenario the same wiring to `assets/js/behistorical-beintheroom-capture.js`, so its AP reflection reaches Gather All My Work. Idempotent; run it again after adding a new hand-authored scenario. See "BeInTheRoom reflections reach Canvas" below.
- `node scripts/test/readings-parse.test.js`, compile the trailing `<script>` of all 77 readings and fail if any is not valid JavaScript. In the offline suite. Ten readings once shipped with a stray `});` that threw a SyntaxError, which discards the whole script element: the AI prompt buttons, the confidence scale, and the answer capture all died at once, with every structural check green because the capture block was present and byte-identical. It was simply unreachable.
- `node scripts/test/coach-prompt.test.js`, drive a real lesson page in Chromium and assert the checkpoint paste is byte-identical to what `scripts/lib/socrates-course.js` produces. In the browser suite. It is the only check that the renderer actually *calls* the shared builder with the right fields.
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

## Deep Readings

A deep reading is the **optional push-further layer** under Content Delivery, for
a topic whose modules assume more background than its First & 10 has room to
carry. Foundations 3 is the case that produced it: 716 words of body text across
Persia, Han China, Greece and Rome, about 179 each, against success criteria that
ask a student to name a tool of rule and explain **the mechanism by which it
worked**. The survey named the tools. A student cannot infer a mechanism from a
name.

Generated, like everything else. Content lives in
`scripts/lib/deep-reading-content/<slug>.js`, `scripts/lib/deep-reading-page.js`
renders it, and `scripts/build-deep-readings.js` writes the page beside the
lesson it belongs to. Content modules are **discovered by reading the directory**,
not listed, so adding one is a new content file plus a `deepReading` block in
that topic's data file. Nothing else.

**A deep reading is deliberately not a First & 10**, and the differences are the
point:

- **No questions, so no capture block, no storage key, and none of the
  four-files-must-agree failure modes.** Nothing is submitted from a deep
  reading. The ten modules remain the only path by which student writing reaches
  Canvas.
- **No coach bridge.** Socrates is told about exactly four assignments. A fifth
  surface that grew a coach button silently would mean the coach meets work it
  was told does not exist.
- **No `<script>` at all.** A page with no script cannot ship a SyntaxError that
  discards its own behaviour, which is the failure `readings-parse.test.js`
  exists to catch on the 77.

**The filename prefix is load-bearing.** `validate.js` globs Foundations lesson
shells with `/^foundations-\d+.*\.html$/` and Foundations readings with
`/^first-and-10-foundations.*\.html$/`. A deep reading must miss both, or it gets
checked against a contract it was never meant to satisfy. Hence
`deep-reading-<slug>.html`. Re-read those two globs before renaming these.

**Both renderers inject the card and hide the feature entirely when absent**, the
same way the video block does, so the topics without one show no empty frame. It
sits *after* the lecture cards on purpose: the cards are the path everyone walks
and this is depth on top of them. A reading this long placed above the cards reads
as required work rather than as an offer, which is why it sits below them and why
the card says optional twice. `renderDeepReading()` in the unit renderer mirrors
the Foundations one, guard on its own id included, or a re-render doubles the
card.

**A unit topic keeps its `deepReading` block somewhere else, and the check has to
know.** A Foundations topic's data file sits beside its shell as
`foundations-3-states-power-data.js`; a unit topic's sits in `assets/data/` under
the shell's own name, because the shell loads it with a `<script src>`. Resolving
a unit topic the Foundations way looks for `unit-1/lesson-1-1-song-china-data.js`,
which no unit topic has ever had, so every unit deep reading would fail
reachability for a file that was never supposed to exist.

**Two checks, because each failure is silent.** `--check` in the offline suite
proves the page still matches its content module. `validate.js` proves the page
is **reachable**: a generated reading that no `deepReading` block points at sits
on disk, gets served by Pages, and can only be found by typing the filename,
with every other structural check green. It checks both directions, because a
data file pointing at a missing page is a dead card and a page no content module
produces is a hand-authored reading, which is the thing the content model exists
to prevent. Both directions scan `foundations/` **and** every `unit-N/`, through
one `standaloneDeepReadings()` helper rather than a glob repeated per call site:
a glob naming only `foundations/` stops covering the moment a volume outside
Foundations is written, and it stops covering silently.

## The eBook

Ten volumes exist and the course is covered end to end: `ebook/foundations.html`,
five chapters; `ebook/unit-1.html` and `ebook/unit-2.html`, seven each, one per
topic; `ebook/unit-3.html`, four, because Unit 3 has four topics;
`ebook/unit-4.html`, eight; `ebook/unit-5.html`, ten; `ebook/unit-6.html`,
eight; `ebook/unit-7.html`, `ebook/unit-8.html` and `ebook/unit-9.html`, nine
each. A volume carries one chapter per topic, so
its chapter count is a fact about the unit rather than a target, and chapter
length is set so that the **volume** comes out comparable rather than the
chapter: Unit 3's four chapters run six sections each, Unit 5's ten run four, and
Unit 6's eight run four or five.

**A unit whose lessons are generated keeps its `deepReading` block in the
generator.** Unit 6 Topics 6.2 to 6.8 have their data files written by
`scripts/build-unit6.js`, so the card is declared in the `DEEP_READINGS` map at
the top of that script and the page's filename is derived from the topic's own id
and slug, for the same reason the eBook derives its lesson links. Editing
`assets/data/lesson-6-4-*.js` by hand would survive exactly until the next
`npm run build:unit6`. Topic 6.1 is the hand-authored template the others are
built from, so its block does live in its data file.

**A two-digit topic number works and was not free.** Unit 5 has a Topic 5.10,
the course's first, and `chapterNumber()` and `tocLabel()` in `ebook-page.js`
both match `^topic-(\d+)-(\d+)`, so it renders as "5.10" rather than "5.1".
Anything new that parses a slug must use `\d+` for the topic segment; `\d`
silently truncates and the page still builds.

The eBook is a **second surface on the chapter modules, not a second copy of the
content.** Every chapter in a volume is the same
`scripts/lib/deep-reading-content/<slug>.js` that produces that topic's
standalone deep reading, so the two cannot disagree. `scripts/lib/ebook-page.js`
renders the cover and contents and then calls `renderChapterBody` from the
deep-reading renderer rather than reimplementing it, for the same reason
`canvas-parse-core.js` is inlined into the Skills Lens instead of copied: two
implementations eventually give two different answers and nothing tells you
which one a student read.

It exists alongside the per-topic pages because they answer different questions.
The deep reading on the Foundations 1 lesson serves the student doing Foundations
1 tonight. The eBook serves the student revising in May, the student who missed
three weeks, and the case manager who wants to see what is being taught.

**A volume is named the way the front door names its unit.** `ebook/unit-1.html`
is "The Global Tapestry", not "The Unit 1 eBook", and the library card carries
"UNIT 01" above it exactly as the unit card on `index.html` does. The volume's
`label` and `titleHtml` are the two fields that carry this, and they must match
the unit card in `index.html`; a student who has just clicked away from that
card should not have to work out that Networks of Exchange is Unit 2.

**The brand typefaces are loaded by the page templates, not by the stylesheet.**
`behistorical-deep-reading.css` has always declared Cinzel, Libre Baskerville and
Montserrat in `--font-display`, `--font-body` and `--font-ui`, and for the first
four volumes nothing loaded them, so every eBook page and every standalone deep
reading quietly rendered in the Georgia and Arial fallbacks while the rest of the
site rendered in the brand faces. Tokens are not a request. `FONT_LINKS` in
`scripts/lib/deep-reading-page.js` is the one copy, re-exported to
`ebook-page.js`, and its href is byte-identical to the one the 77 First & 10
readings use so that a student moving between them reuses the cache. It carries
`display=swap`, so slow fonts never mean invisible text, and the CSS fallbacks
stay, so a blocked or offline load costs the brand and nothing else.

**Volumes are declared, chapters are ordered by hand.** A volume is an editorial
decision about what belongs together and in what order, which no directory
listing knows, so `VOLUMES` in `scripts/build-ebook.js` lists them. Its
`contents` array is one ordered list in **teaching order**, mixing written
chapters (`{ slug }`) with topics still to come (`{ pending }`). Unwritten
topics are listed **in place** rather than collected at the end, because a
student looking for Foundations 2 looks between 1 and 3, and finding it there
marked "chapter not written yet" answers the question while finding nothing
does not.

**The library's note about unwritten chapters is derived, not declared.**
`LIBRARY.note` explains those pending rows, so `renderLibrary` prints it only
while some volume still has one, and every volume is complete as of 2026-08-16.
Deleting the text instead would have worked
today and left nothing to explain the first pending row that reappears; a note
that outlives its gaps is the worse half of the same failure, because a library
warning a student that a topic might be missing when none is teaches them to
distrust the contents. Do not restore it unconditionally.

**Chapters are numbered by their topic, not their position.** Sequential
numbering would make the Foundations 3 chapter "Chapter 02" while Foundations 2
is unwritten, and would silently renumber every chapter the moment a gap is
filled. Unit chapters number as `1.4` and label as `Topic 1.4`, both derived from
the slug, which is why a unit content module's slug must start `topic-<unit>-`:
`build-deep-readings.js` places the page from it, and `ebook-page.js` derives the
chapter number, the contents label and the link back to the lesson from it too.

**A volume's footer names the volume and links its own hub**, derived from the
first written chapter's slug rather than declared, for the same reason the lesson
link is derived: a declared value is a second place to state where a topic lives,
and the two can then disagree. The Foundations volume came out of that change
byte for byte unchanged, which is the check worth running whenever a shared
template gains a parameter.

**`build-ebook.js` exports `VOLUMES` before it runs, and guards the run with
`if (require.main !== module) return;`.** `validate.js` requires the file purely
to read that list. Without the guard the require executes the builder, which
means the validator writes files as a side effect of validating, and a check
that silently rebuilds the thing it is checking can never fail. That bug existed
for about ten minutes and is exactly the kind this repo is built to refuse.

**`ebook/index.html` is the library, and it is the one stable eBook URL.** The
front door links the library, never a volume file, because the library keeps
working as volumes are added while a direct link would mean editing `index.html`
and re-pasting the Canvas link every time one lands. It is generated from the
same `VOLUMES` list, so it cannot list a volume that does not exist or miss one
that does.

### eBook accessibility

The eBook is the surface a student reads at length, on a phone, on a projector,
and in May when they have three weeks to catch up. It is held to WCAG 2.1 AA,
and the parts of that which can be checked by machine are.

**Antique Gold is a dark-surface colour.** It is 7.3:1 on steel and 2.1:1 on
paper, which is under the 3:1 that even large text is allowed. It keeps the
cover, the mastheads, the card rules and the chapter opener's border; it is not
used for text on paper, and `.dr-usethis > b` uses it rather than `--accent`
because three of the four empire accents are paper colours that read at 1.9:1 to
3.7:1 on that panel's dark ground. On light surfaces the equivalent is
`--oxidized`, at 7.9:1. **Do not "restore" gold on a cream row.** It looks more
on brand and is the defect this section exists to describe.

**Focus is a ring, not a tint.** `behistorical-deep-reading.css` defines one
`:focus-visible` treatment for every interactive element, and nothing may go
back to `outline:none` plus a background change: a 3% shift between two creams
is invisible on a projector and absent entirely in forced-colours mode. Hover
tints are unaffected and should stay.

**Both page types render `<main id="main-content">` with the footer outside it,
and a skip link as the literal first element in `<body>`.** Both come from
`scripts/lib/ebook-page.js`, which holds the skip link in one constant so the
two templates cannot point at different ids.

**Grid minimums are `minmax(min(100%,N),1fr)`, never `minmax(N,1fr)`.** A bare
floor is a width the track cannot go under, so at the 320px viewport reflow is
tested at, a 320px card inside a wrap that has already spent 32px on padding
scrolls the whole page sideways.

**Two checks, and they cover different failures.** `validate.js` proves the
landmarks and the skip link are in the generated HTML, offline, in the push
gate. `scripts/test/ebook-a11y.test.js` proves the things only a rendered page
knows: that the skip link is really what Tab reaches first, that the ring really
paints, that nothing overflows 320px, and that no text is under its contrast
threshold. The contrast sweep is the one that earns its runtime, because the
same colour is correct on the cover and wrong on the contents rows and only a
browser can tell those two uses apart.

**The a11y test measures reflow twice, and the second pass is allowed to skip.**
Its main pass blocks every request off the fixture server, which keeps it
hermetic and means it measures the *fallback* fonts. Cinzel is about 30% wider
than Georgia at the same size and reflow is a width test, so that pass says
nothing about the page a student actually sees. A second pass allows the two
font hosts and repeats the 320px and 200% measurements, and **skips**, visibly,
when the fonts do not arrive, because a third party's outage must never fail a
commit, which is the same reason `check-image-urls.js` is nightly.

**A skip is not a pass, and the environment that skips is the one you develop
in.** The Unit 6 cover shipped a 75px horizontal overflow at 320px because of
this. Cloud dev sandboxes generally cannot reach the font hosts from inside
Chromium, so the second pass skips there and a local run reports a confident
green having never measured the page a student sees; CI can reach them, and
failed. **Treat a SKIP on that pass as "not tested", never as "fine", and if you
have added or renamed a volume title, prove the reflow before pushing.** The
cheap way needs no browser network access: fetch the woff2 once with `curl`,
which does work through most proxies, register it with `new FontFace(...)` from
the bytes, block every request off the fixture server, and measure. That
reproduced 395 vs 320 exactly, which is how the fix was confirmed rather than
assumed. The general form of the trap is worth remembering on its own: a check
allowed to skip will skip in precisely the environment where nobody is watching
for it.

**A long word in a display face is the recurring shape of this bug.**
`.eb-cover h1` clamps to a 2.3rem floor, and Cinzel sets "Industrialization"
379px wide against a 320px viewport. `overflow-wrap:break-word` is the floor
that stops it, and it is a no-op until a word cannot fit on a line of its own,
so the shorter cover titles measure identically with and without it. Unit 8's
"Decolonization" is the next one near the cliff.

**`document.fonts.check()` does not tell you a webfont loaded.** It answers "can
this string be rendered in that family", and a browser with no network answers
yes, because it can render it in a fallback. Written that way, the pass above
reported a confident green while measuring Georgia. The honest signal is
metrics: render a string in the webfont stack and in the fallback and compare
widths, since identical widths mean the face never applied.

**Both browser tests read their page list from `VOLUMES`, never a typed list.**
`ebook-a11y.test.js` runs every assertion against the library and every volume.
`ebook-listen.test.js` drives Foundations in depth, because its labels and
paragraph counts are Foundations content, and then sweeps every other volume
structurally: controls built in every marked section, no mount left empty, and
starting a second section cancelling the first. A typed list would go on
reporting the same confident green while covering less of the eBook each time a
volume landed, which is the failure this repo cares about more than an outright
red.

**Two checks, same shape as the deep readings.** `--check` in the offline suite
proves each volume and the library still match the chapter modules.
`validate.js` proves each volume exists, that every slug it names has a content
module, that the library lists every volume, and that **`index.html` links the
library**, because the library carries reachability for everything behind it: if
the front door stops linking it, every volume goes unreachable at once while each
volume file still sits happily on disk.

### Listen to this section

Every reading section in an eBook volume carries a compact **Listen to this
section** control: Listen, Pause and Resume on one button, Stop, and a speed
selector offering 0.75x, 1x, 1.25x and 1.5x. It is built by
`assets/js/behistorical-listen.js` and it is the only implementation.

**It is an instructional enhancement, not an accessibility feature, and it is
not a substitute for one.** A student using a screen reader already has a better
tool for hearing this page than this is. What this is for is the student who
reads slowly, the student who holds more when the words arrive through two
channels at once, and the student catching up on three weeks in May. The eBook's
WCAG 2.1 AA contract in the section above is a separate layer, and nothing here
may weaken it: real buttons, real labels, one shared focus ring, no ARIA where
native HTML already says the thing, and nothing that starts speaking on its own.

**The HTML stays the source of truth.** Narration reads the rendered DOM of the
section in front of the student, so a revised chapter is a revised narration on
the next page load, with nothing to regenerate and nothing that can fall behind.

**That is why there are no MP3 files and no speech API.** An audio file is a
second copy of the content, and the moment a paragraph is edited nothing in this
repo can tell you which copy a student heard. It is the same failure the content
model exists to refuse, and it would be worse here, because a stale recording
sounds exactly as authoritative as a current one. A paid TTS service adds the
second failure on top of the first: it would mean the reading, and eventually a
student's page, leaving the device. `window.speechSynthesis` is the browser's
own engine, it costs nothing, and nothing is sent anywhere. The single stored
value is the playback rate, a number, under `behistorical-listen-rate`.

**One section speaks at a time, page-wide.** Starting anywhere cancels
everywhere, playback stops on `pagehide`, and there is never more than one
utterance in flight. Two sections talking over each other is not a degraded
experience, it is noise.

**The controls are generated, never hand-written.** Two things come from
`scripts/lib/deep-reading-page.js`: `data-listenable="true"` with a
`data-listen-label` on the section, and an empty `data-listen-mount` div under
its heading. The shared module finds those and builds the buttons. Forty-three
sections wired by hand would be forty-three places for the next change to miss
one, which is exactly how the First & 10 capture block went missing twice.

**So a future section inherits the feature by existing.** A new chapter module
in `deep-reading-content/`, or a new volume in `build-ebook.js`, is narratable
the moment it is built. There is nothing to add and nothing to remember. A new
*component* inside a section is narrated too, because the extractor walks
structure rather than a list of known class names.

**Narrated:** the section heading, its dates line, its thesis, every explanatory
paragraph, subsection headings, the How we know and Common mistake to avoid
callouts, and the closing comparison cards. **"Use this in your answer" and
"Terms to use precisely" are both narrated**, deliberately: they are the parts a
student is most likely to be revising from, and the definition-list markup reads
naturally out loud because the walk puts each label and each body on its own
utterance, so it comes out as "Terms to use precisely. Domestication. The genetic
change in..." rather than as markup.

**Not narrated:** the site and jump navigation, the contents list, Back to
contents, Go to the lesson, the footer, any button or select label, the listen
controls and their own status text, and the section number watermark, which is a
navigational label rather than content. The **How to Use This** panel is also
excluded: it is instructions for reading the chapter rather than the chapter, and
it stays on the page in text, where scanning it is quicker than hearing it.
Anything hidden, collapsed or `aria-hidden` is skipped, and a future exclusion is
one `data-no-narrate` attribute in the renderer.

**Volumes only.** `ebook/index.html` is a shelf, not a reading, so it marks no
sections and loads no narration module. `validate.js` asserts both directions.

**The standalone deep readings do not have this, and that is deliberate.** They
ship no `<script>` at all, in writing, because a page with no script cannot ship
a SyntaxError that silently discards its own behaviour. The `listen` option
defaults to false and only the eBook turns it on, so
`foundations/deep-reading-*.html` came out of this change byte for byte
unchanged. `validate.js` fails if any standalone deep reading, in `foundations/`
or in a `unit-N/`, grows a `<script>` tag.

**Two checks, because the failures are silent in opposite directions.**
`validate.js` proves offline that the sections are marked, that the marked count
equals what the chapter modules contain, that every one has its mount, and that
exactly one shared module is loaded: a volume that marks its sections and does
not load the module renders perfectly and does nothing, and so does a volume that
loads the module and stops marking its sections.
`scripts/test/ebook-listen.test.js` proves in Chromium what only a browser knows,
against a stubbed engine: that Listen speaks the right section, that starting one
cancels another, that pause, resume and stop move the real state, that speed
persists and rejects a value that is not one of the four, and that a browser with
no speech synthesis gets no controls rather than dead ones.

#### What the browser does, and what it does not

Found while building this, and worth knowing before changing any of it:

- **Chromium stops part way through a long utterance.** The common workaround is
  a `pause()`/`resume()` heartbeat on a timer, which is not used here because it
  fights the real Pause button for the same state. Instead the section is fed to
  the engine one paragraph at a time, and a paragraph over about 220 characters
  is split further at its sentence boundaries. Playback was already sequential,
  so this costs nothing and the bug has no room to appear.
- **A `speak()` in the same task as a `cancel()` is sometimes swallowed**, which
  showed up as a Listen button that did nothing on the second section a student
  tried. The first utterance of a section is deferred by one turn.
- **`cancel()` fires the current utterance's `end` handler**, which at the
  handler is indistinguishable from a natural finish, and in some builds also
  fires `error` with reason `interrupted` or `canceled`. Without a guard,
  cancelling section A mid-paragraph advances A and speaks it over section B.
  Every callback carries a session token and does nothing once the session has
  moved on. Do not remove it.
- **The browser's default voice is often the worst one installed**, and that is
  the single biggest thing separating narration a student will use from
  narration a student turns off after one paragraph. So a voice is scored and
  chosen, never named: every candidate in the document's language is ranked,
  the winner is used, and if there is no candidate the utterance is left with
  no voice, which is the plain browser default. Naming one specific voice would
  mean silence for any student whose device does not have it. The ranking
  prefers a network voice (Chrome's Google voices and Edge's Natural ones,
  which are the good ones on those browsers and are not what either picks by
  default), then a premium or enhanced tier over a compact one, and it drops
  Apple's novelty voices outright. **"Bad News" and "Zarvox" are real entries in
  `getVoices()`**, and one of them reading a chapter on the Neolithic was a live
  possibility before this.
- **A network voice that fails is retried once on a local voice**, speaking the
  same words, and network voices are then refused for the rest of the session.
  A classroom is exactly where the wifi drops, and the section must not report
  itself broken when it does. Excluded outright on the retry rather than marked
  down, because "Google US English" still earns four points from its name alone
  and would win the retry and fail again identically.

##### iOS cannot be fixed from a web page

**Every browser on iOS is WebKit, so Chrome on an iPhone is Safari's speech
engine.** WebKit deliberately withholds the downloadable voices from the web.
Apple's own engineer, on their developer forum, thread 723503: *"it is expected
that with Web Speech APIs only the pre-installed voices are available.
Optionally downloadable voices are not available."*

A student can download an excellent voice in Settings, Accessibility, Spoken
Content, Voices, and a web page still cannot use it. iOS is unreliable about the
voices it does list, too: asking for Alex returns Samantha. What a page gets on
an iPhone is the pre-installed compact voice, and no ranking, no rate change and
no amount of code here improves it.

**The route that does work on that device is outside the page.** iOS Speak
Screen, and Safari's Listen to Page, both use the downloaded voices and both
work on the eBook, because the eBook is ordinary semantic HTML with a real
`<main>` landmark. If iPhone listening matters for a student, that is the answer
to give them, not this feature. The other way to fix it would be a paid TTS
service, which means the reading leaving the device, and that is refused for the
reasons at the top of this section.

macOS Safari has the same withholding, which is why the novelty voices matter
there: they are exposed while the good ones are not.
- **Changing the speed applies from the next chunk**, not mid-sentence.
  Restarting the current utterance would throw away the paragraph the student
  was in the middle of, which is worse than one sentence at the old speed.
- **`pause()` is not reliable everywhere.** On some Android and ChromeOS builds,
  and with remote voices, it behaves like a stop. The UI reports what it asked
  for, which is the best any page can do.
- **Headless Chromium exposes the whole API and has no voices**, so a test that
  waited on real audio would hang in CI and sound different on every laptop. The
  browser test stubs the engine, and the honest limit of that is written at the
  top of the file: it proves this code is correct, not that Chrome is.

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
- **The paste** carries the one assignment in front of the student and is what
  makes one bot work for nine units: retrieval cannot miss a fact that is already
  in the message. There is exactly one implementation,
  `assets/js/behistorical-coach-prompt.js`, reached four ways: the checkpoint
  bridge in the renderer, via a copy inlined by `build-coach-prompt.js`; all 77
  generated readings, via a copy `first10-page.js` emits into each page;
  `scripts/lib/socrates-course.js`, for the docs and the eval; and the contract
  test. Medians are about 520 words for a checkpoint and 555 for a reading.
  `docs/socrates/socrates-paste-contract.md` is generated from that same builder,
  so the doc cannot describe something the code does not produce.
  **Do not add a second prompt builder.** There were 64 of them, one per reading,
  and ten were malformed badly enough to kill their page's entire script block.
- **The spine** is the generated attachment, for questions off the module path.

**Four assignments reach him, and only four:** the First & 10 Reflection, Checkpoint
1, Checkpoint 2, and BeInTheRoom. Both renderers carry the checkpoint bridge, all
77 readings carry their own, and 38 of the 64 BeInTheRoom scenarios build their own
payload. The unit renderer's inline First & 10 bridge is dead code, because all 71
topics use the iframe path. If a fifth surface ever grows a coach button, add it to
the persona's list, or the coach will meet work it was told does not exist.

**Never paste unit content into the instructions field, and never hand-build a
knowledge pack.** Both make a second copy of content whose first copy is the
lesson data, with nothing able to tell you when the two disagree. That is the same
failure that lost the First & 10 capture block twice, and here it would be worse:
the coach would keep teaching last term's checkpoint with every structural check
green.

**BeInTheRoom's AP reflection reaches Canvas.** It used to be true, and the
persona used to say, that BeInTheRoom work never reached Canvas: module 09 had
no textarea and no capture wiring at all. It now works the same way First & 10
does. Every scenario page, v2, the unit-6/unit-9 generated template, and every
hand-authored v1 scenario, writes its "step out of character" reflection to
`behistorical-beintheroom-<TOPIC_KEY>` through the one shared bridge,
`assets/js/behistorical-beintheroom-capture.js`. `injectBeInTheRoomAnswer()` in
both renderers pulls that back in under the `beintheroom-response` work item, the
same way `injectFirst10Answers()` pulls in the reading's answers, so it appears
in Gather All My Work and the Canvas paste like every other module. Only the
final reflection is captured, never the role, evidence, decisions, or draft
argument along the way; those stay local to the scenario page, which is why the
persona still tells a simulation student the roleplay itself is not collected.
`scripts/wire-beintheroom-work-capture.js` is the one-time sweep that wired the
26 reachable hand-authored scenarios; three older scenario files
(`abbasid-fragmentation.html`, `cahokia-council.html`, `khmer-court.html`) sit
unlinked from any lesson data file and were left alone, the same as the v2
"linked from its lesson data/config" check already treats an unlinked scenario.

Two things the repo cannot test, so they are manual and written down in
`docs/socrates/README.md`: pasting the instructions into MagicSchool, and
uploading the spine. Nothing here can log into a vendor web UI. What the repo does
test is that both documents are reproducible from the lesson data, and that every
one of the 77 topics can produce a complete context block.

### Green and Silver

**The schedule is an alternating block.** School days alternate strictly, and
each topic is taught to Green first and to Silver at the next meeting. They are
**different students**, so a topic is not a two-day arc: it is one 90-minute
block, taught twice, to two rooms that never see each other's work. Everything a
topic needs has to land inside one block, and nothing carries over.

`scripts/lib/cohorts.js` is the one place the two cohorts are defined, read by
the announcements builder, the classroom board, and the Canvas event generator,
for the same reason the coach prompt has one builder: a second copy is a second
place for the labels and the colours to fall out of agreement, and the failure is
silent because both copies still render.

**A due date is derived, never typed.** It is the next date in the schedule
carrying the same cohort. The old schedule kept one homework entry per topic
pair, posted on the last day of the pair with a hand-typed weekday, which on an
alternating block puts every assignment in front of one cohort and every blank
row in front of the other: Green went into Topic 1.2 with nothing assigned and
Silver's said due Friday, a day Silver is never in the building. Every structural
check was green through all of it, because nothing offline could see that a
weekday belonged to the other room. Deriving the date also means a holiday is one
deleted row rather than an edit to every date after it.

**Colour is never the only signal.** Every surface marking a cohort carries
three: the colour, the letter G or S, and the shape, a filled disc for Green
against an open ring for Silver. That survives a washed-out projector, a
grayscale print, and a reader who cannot separate the hues. The palette is
already a set of metals, bronze, gold, iron, gunmetal, oxidized steel, so the
cohorts are metals too: Green is **verdigris**, Silver is **pewter**. A stock
green and a stock grey would sit beside the brand rather than inside it.

**Pewter is a fill colour, not a text colour.** `#8A9298` is about 2.9:1 on
paper, under the 3:1 floor even for large text, so Silver carries a darker `ink`
for text and uses `mark` only for rules, seals and fills, and an `onDark` value
again for the board, which is steel. This is the same rule the eBook has in
writing about antique gold on a cream row, and "restoring" the lighter value on
text is the same defect.

**Anything reading the schedule has to filter by cohort, not just render it.**
The board's Upcoming Topics slide listed every future class day, which showed a
Green class "Dar al-Islam, Monday August 31" on the afternoon they had already
had it, because Monday is Silver's. A student reading their next class off the
board has to be reading their own calendar. `DATA` in `announcements.html` is
also a **whitelist**, so a key added to the generated file and not added there
arrives as undefined and the feature reading it silently does nothing; that is
how the cohort seal shipped invisible the first time.

**Two checks, because the failures are silent in opposite directions.**
`--check` on both generators proves the board and the Canvas events still match
the schedule. `scripts/test/schedule-cohorts.test.js` proves the schedule itself
is coherent: cohorts alternate, every topic reaches both rooms, every due date is
the assigning cohort's own next meeting, every reading carries its sections as
separate items rather than packed into one sentence, and every due date on the
board also appears in a Canvas event. That last one caught the board emitting a
due date on days with nothing assigned, which is invisible on the projector and
is exactly the quiet disagreement between two surfaces this section exists to
prevent.

### Two Classrooms, One Site

Anderson team-teaches AP World History with Kelly. Both run their own MagicSchool
Socrates classroom, on the same shared site, at the same shared URL, with no
login system to tell one teacher's students from the other's. Left alone, every
AI Coach and Open MagicSchool button on the site points at Anderson's join link,
because that link is what every lesson's `meta.feedbackToolUrl`, every capture
wrapper, and every BeInTheRoom scenario has always hardcoded.

**`scripts/lib/classroom-config.js` is the one place that lists which join link
belongs to which classroom.** It exports `DEFAULT_MAGICSCHOOL_URL` (Anderson's
own) and `CLASSROOMS`, a `key -> MagicSchool URL` map for every other teacher.
Kelly's is `kelly`. Adding a third teacher is one more entry here, a rebuild, and
a link to give that teacher's students; nothing else in this section changes.

**A student's classroom is chosen once, by a link, and remembered after that.**
Kelly gives his students a link ending in `?classroom=kelly`, on whatever page
he wants them to land on first. The first time a student loads a page with that
parameter, `assets/js/behistorical-classroom.js` writes `kelly` to
`localStorage` under `behistorical-classroom`, and every classroom-aware button
on every later page, on that device, resolves to Kelly's join link instead of
Anderson's, with no parameter needed again. A student who never sees that link,
or whose browser blocks `localStorage`, gets Anderson's own classroom, unchanged.
Private browsing and a blocked `localStorage` fail the same way: the resolver
falls through to the caller's default rather than throwing.

**One browser module, reached four ways**, the same shape as the coach prompt
builder and for the same reason: a second copy is a second place to fall out of
sync with `scripts/lib/classroom-config.js`.

- `scripts/build-classroom-config.js` writes `assets/js/behistorical-classroom.js`
  from the source data, then inlines that same file between sentinels into
  `assets/js/behistorical-topic-renderer-v1.js`,
  `foundations/foundations-topic-renderer.js`, and `assets/js/behistorical-room-v2.js`.
  Inlining, not a fourth `<script src>`, for the same reason the coach prompt
  builder is inlined: those three files are loaded by hundreds of hand-authored
  shells and scenario pages, and a shell sweep is exactly the maintenance debt
  this repo tries not to create. `--check` fails on drift, wired into the offline
  suite.
- The 77 capture wrappers and the 77 First & 10 readings are generated pages, so
  they carry it two different ways instead: a wrapper loads the generated file
  with a plain `<script src="../assets/js/behistorical-classroom.js">`; a
  reading inlines the same file's source directly, the way it already inlines
  the coach prompt builder, because a reading is a standalone page with no
  renderer underneath it to load from.
- The 38 hand-authored (non-v2) BeInTheRoom scenarios have no shared generator,
  so `scripts/wire-beintheroom-magicschool.js` swept all of them once, the same
  way `remove-google-form-capture.js` normalized the capture wrappers. Run it
  again for a newly written v1 scenario; it skips anything already wired. The 26
  v2 scenarios need nothing of their own: `behistorical-room-v2.js` builds their
  MagicSchool button in JS already, so the sentinel-inlined copy above covers
  every one of them.

**Every classroom-aware button gets an `id="magicschool-open-link"` and a
`data-default-href` carrying its own default**, and resolves its real `href` (or
computes the URL at click time, for the handful of buttons built as
`<button onclick="window.open(...)">` rather than an anchor) through
`window.BHClassroom.resolveMagicSchoolUrl(defaultUrl)`. `validate.js` checks
both halves everywhere a classroom-aware button is supposed to exist: capture
wrappers and v1 BeInTheRoom scenarios for the `<script src>` and the id;
readings for `resolveMagicSchoolUrl` and the id, since a reading inlines the
resolver's source rather than loading it by filename. A hand-revert of any of
this fails the push instead of silently routing Kelly's students into
Anderson's classroom.

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

> **Every drop merges, and there is one merge.** The Lens holds a cumulative
> dataset across the year, not the last file dropped on it, because the Over time
> panel is otherwise a chart of one evening. The zip, loose submission files,
> `responses.csv`, `exceptions.csv` and a `responses.json` all fold through the
> same code: a row is `student + topic + slot`, `copied_at` decides which version
> of a row is current, an undated row never overwrites a dated one, and a
> byte-identical row is a duplicate. The store is a **deterministic fold over
> `S.sources`**, so removing one drop is a replay rather than an un-merge. Every
> drop prints a receipt naming added, updated, duplicates and older rows;
> "loaded successfully" is the message that could not answer whether the year's
> data actually grew. The full contract is in `docs/CANVAS-CAPTURE.md` and the
> browser assertions are in `scripts/test/skills-lens-zip.test.js`.
>
> **Panel 10, Over time, plots observable evidence and never mastery.** The
> longitudinal dimension is the AP historical-thinking skill, because a skill
> recurs for nine units and a learning target does not: a Song China target
> followed by a gunpowder target is two constructs measured once each, and a line
> between them would claim a trend the data cannot carry. Targets stay in Panel
> 08. One skill, one measure, one series, one chart, chosen from completion rate,
> median response length, median evidence-term hits and median confidence.
> **Never add a combined score, a growth figure or a proficiency number**: word
> count is not quality, and any arithmetic over these four would be read as a
> grade within a week. The x axis is categorical topic sequence through
> `topicSort()`, never calendar spacing; `copied_at` is context in the tooltip
> and the table and never a position. Every point carries its n on the axis, and
> a point under n=5 is drawn hollow and flagged rather than suppressed.
>
> **The evidence-term measure currently has nothing to plot, and that is a fact
> about the lesson data.** No slot in the course carries both an AP skill tag and
> authored evidence terms: the tags sit on the First & 10 questions and the Skill
> Builder, the terms sit on the checkpoints and the Evidence Lab. The panel says
> so and points at Panels 05 and 08 rather than inventing an association the
> lesson author never made. To make it plot, name a skill on the checkpoints that
> carry terms and re-run `node scripts/build-skills-map.js`.

> **Before touching the Gather All My Work panel or its record footer, read
> `docs/CANVAS-CAPTURE.md`.** Both renderers emit the footer and one parser reads
> it, so a change to any one of the three breaks the other two. A wrong
> `expected` count reports complete submissions as incomplete, which is worse
> than no count at all.

> **The current events desk left this repo on 2026-08-17.** It was branded BeCurrent
> and linked from the front door, and BeCurrent is a separate course. All six files
> moved to `BeCurrent/archive/current-events-desk/`, which carries the provenance and
> the list of what is still wrong with it. Nothing here should link a BeCurrent
> surface, and current events work does not belong in this repo: it is not a lesson,
> it does not use either renderer, and it answers to a different course's gate. Do
> not rebuild it here.

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
