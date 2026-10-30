# The Schedule, the Classroom Board and Canvas

Moved word for word from `CLAUDE.md` on 2026-10-16 so the rulebook every session loads stays short (Jeff's decision, recorded in AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`). It is as binding as it was there: read it before changing anything it covers. A comment elsewhere that says "see <section> in CLAUDE.md" means this file; `CLAUDE.md` lists where each section went.

## Green and Silver

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

## Today's Required Modules

The board carries one slide listing the modules today's lesson runs, numbered
and named, under the heading a student reads on the wall rather than in Canvas.
The Canvas assignment for a topic already names them; this is the second place,
for the student who is in the room and has not opened Canvas yet.

**The required list is a subset, and it is typed once.** A topic runs ten module
cards and its Canvas assignment collects some of them: Topic 1.5 requires six,
Topic 1.6 requires five and no Map module at all. Which ones is a teaching
decision about a 90-minute block, so nothing in this repository derives it. It
is the `modules` field on that topic's days in `announcements-schedule.js`, read
off the DO THESE N row of the assignment as it stands in Canvas, and **that one
field is read by both `build-announcements.js` and `build-canvas-events.js`**, so
the wall and the graded assignment cannot name different work.

**That failure shipped, and every check was green.** Until 2026-09-08 no schedule
day carried the field, so the board listed all ten while the assignment asked for
six, and a student who correctly did the six opened Gather All My Work to four
empty answers with nothing to explain them. Nothing offline could see it: the
board was naming modules the lesson page really does show, just not the ones due.
The field was written, documented and tested, and never fed. `modules` is not the
short-day exception the comment in that file used to call it; a subset is the
norm, and `schedule-cohorts.test.js` now fails a topic whose two cohort days name
different modules, a topic whose assignment prints a list the schedule does not
name, and a board day that disagrees with the schedule.

**The names still come from the lesson, never from the schedule.**
`scripts/lib/module-list.js` answers "what modules does this topic run" and the
`modules` field only filters that answer, so a module cannot be renamed on the
board and nowhere else. A number a topic does not run fails the build rather than
printing a module the cards do not have. A topic that declares its own
`lesson.modules`, which Topics 7.8, 7.9 and 8.9 do, is read from that list, so a
substituted module such as the Causes and Consequences Matrix is named correctly
with no special case.

**The board re-reads its file when the day rolls over.** `announcements.html`
ticks every second and re-renders when the date key changes, which is what lets
it stay up overnight. What it re-rendered *from*, until 2026-09-08, was the copy
of `announcements.js` the browser downloaded whenever the tab was opened,
because the file arrives through a plain `<script src>` and was never read
again. So a board left running across a schedule change kept projecting the old
day, correctly and confidently, with nothing on screen to say it was stale. That
is how Topic 1.5 stayed on ten required modules on the wall for two hours after
the corrected file was already live on Pages, which is the same silent
disagreement as any other in this repo: both copies render and nothing can tell
you which one the room read.

The rollover now re-fetches first, by injecting a fresh `<script>` with a
cache-busting query, which is a real download rather than the ten-minute Pages
copy and reassigns `window.BEHISTORICAL_ANNOUNCEMENTS` through the same
mechanism the page already uses at load. No `fetch`, no `eval`, no second
parser.

**The board never goes blank over this and never stalls on it.** A classroom is
exactly where the wifi drops, so a refresh that fails, times out at ten seconds,
or comes back with no `days` keeps the data already in hand and rolls the day
over anyway; `adoptRaw` checks the shape before swapping anything in, so an
error page served with status 200 cannot replace a good day with a Board Not
Loaded slide. `builtFor` is advanced *before* the request goes out, so a dead
network cannot make the refresh fire again every second for the rest of the day.

**It covers the overnight case only, deliberately.** Nothing polls, so a change
pushed while the board is up and the date has not moved still needs `R`, which
the help card now says. A poll would be a request every few minutes, for the
whole school year, to catch something that happens a few times a term.

`scripts/test/announcements-refresh.test.js` is the gate, in the browser suite,
and it has to be a browser test: the behaviour is the passage of midnight in a
long-lived tab against a file that changed underneath it, and no DOM stub
re-executes a `<script>` tag. It drives a fake clock across two midnights
against a fixture server whose answer for the data file changes mid-test, and
asserts the four things that matter, each proved to fail without the fix:
rollover picks up the changed file, it re-fetches once rather than once per
tick, a dead network still rolls over on the data in hand, and an unusable 200
does not blank the board.

**It is a mirror, and the mirror is checked.** The real list is built inside each
renderer's `defaultModules()`, where the cards get their render functions and
their artwork, so the names live in two places. `validate.js` asserts every name
in `module-list.js` still appears in the renderer that draws it, and that every
scheduled topic day carries a list, and that `announcements.html` still builds
the slide. Rename a module card and the push fails here, rather than the board
going on naming a module that no longer exists on the page in front of a
student. The number rules are mirrored exactly too, BeInTheRoom only when the
topic has a scenario to link, Checkpoint 2 numbered from whether the topic
carries a `beInTheRoom` field at all: those are two different tests in the
renderer, a topic with the field and no url really does show a Module 10 after a
Module 08, and quietly renumbering it here would stop matching the cards.

## The wordmark in Canvas

The supplied Globe O artwork is now the canonical brand (Jeff, 2026-10-30).
The unchanged uploads are preserved in `assets/logos/originals/`. Tightly cropped,
resized web derivatives live in `assets/logos/`: `behistorical-wordmark.png`,
`behistorical-ap-world.png`, and `behistorical-globe.png`.

`assets/css/behistorical-brand-lock.css` applies the same wordmark to shared
headers. The homepage uses the full AP World History lockup. Dark surfaces use a
warm-paper backing so the supplied dark lettering stays readable.

Canvas still takes PNG images because it strips site styles. Run
`node scripts/build-wordmark.js` to copy the canonical transparent mark to
`behistorical-wordmark-dark.png`, and the warm-paper variant
`behistorical-wordmark-on-paper.png` to `behistorical-wordmark-light.png`.
`--check` fails if either alias drifts. No webfont or browser is needed.
Use the paper-backed light alias on a dark Canvas masthead.

GitHub Pages serves these images from `main`; publish the files before pasting
an event that uses them.
