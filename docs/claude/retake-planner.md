# The Retake Planner

Read before changing `teacher/retake-planner*.{html,css,js}` or either of its tests. The decision
record is AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`, 2026-11-17.

## What it is for

A student who retakes a test, or writes test corrections, has usually seen the test, so the same
questions measure memory of the answer, not understanding. The Retake Planner shows which
**learning targets** each student missed, so the retake asks **new** questions on those targets. It
reads results; it does not grade. Canvas holds every grade, and nothing the page shows feeds one.
It is a department tool: any teacher who gives the test can use it with their own Canvas copy.

## Two files, both read in the tab

1. **The Canvas results**: New Quizzes, Reports, Student Analysis, Export CSV. Canvas does not
   publish that file's exact columns, so the engine does not depend on them for questions. It
   finds the student columns by name, treats every other column as a possible question, and
   decides which question a column is **by the answers students chose in it** (every answer choice
   is unique across a test). That survives Canvas shuffling the order and each teacher's copy
   numbering questions differently. Both shapes are read: one row per student and one row per
   answer. The page states how many questions it matched and lists any it could not, so an
   unfamiliar file says so on screen instead of producing a quietly wrong plan.
2. **The question map** (`*-Retake-Map.json`, format `behistorical-retake-map/1`, documented at
   the top of the engine). It holds the answer key, so **it never lives in this repository**
   (`scripts/test/no-answer-keys.test.js`). It is built in AndersonLogic-OS,
   `04_PRODUCTS/BeHistorical/Assessments/Retake-Planner/`, from the test's own source file, and
   shared privately with the teachers who give that test.

## Rules that must not be broken

- **The page reaches nothing.** Its Content-Security-Policy allows its own script and style files
  and nothing else: no fonts, no `connect-src`. It holds student names, so this is the privacy
  promise, not a preference. Nothing is written to `localStorage`; Start over or closing the tab
  forgets both files. The browser test proves the policy blocks a fetch.
- **No inline `style=""` in generated markup.** The policy refuses it; set widths through
  `element.style`, as the target bars do.
- **Every string from a file is escaped** before it reaches the page.
- **Canvas's score wins** when it disagrees with the key (a regraded question), and the count is
  shown. A blank answer counts as missed; a question a student never saw is left out of their
  denominator. The latest attempt is used.
- **Projector safe** removes names and every question, answer and rationale. A retake plan
  projected with the wording on it would give the retake away.
- **No real test content in a fixture.** The tests and the demo use invented questions only.
- It is not part of Class Pulse, on purpose: Class Pulse is the AI formative read approved by the
  district on that basis; this tool has no AI step and reads summative results.

## Tests

- `scripts/test/retake-planner.test.js` (offline): both layouts, shuffled order, identical stems,
  Canvas score wins, blanks and unseen questions, latest attempt, rules, class filter, broken maps,
  each with a negative control.
- `scripts/test/retake-planner-page.test.js` (browser): no request leaves, demo and chosen files,
  projector safe, download, phone width.

## Not yet proven

The engine has not yet read a real New Quizzes Student Analysis export, because none was
available when it was built. The first real file is the test: if the page reports fewer matched
questions than the map holds, keep a copy of the header row (no student rows) and adjust
`readExport()` against it.
