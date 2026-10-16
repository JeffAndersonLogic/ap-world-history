# Run of Show

Moved word for word from `CLAUDE.md` on 2026-10-16 so the rulebook every session loads stays short (Jeff's decision, recorded in AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`). It is as binding as it was there: read it before changing anything it covers. A comment elsewhere that says "see <section> in CLAUDE.md" means this file; `CLAUDE.md` lists where each section went.


A teacher-only "cockpit" view of a lesson's pacing, one per topic that has
authored one: retrieval prompts, teacher moves, an AP Move line per slide, a
per-phase class timer, a Must-Haves reference tab, and a pacing panel for a
condensed or emergency-length class. Rendered by
`scripts/lib/run-of-show-page.js` entirely from that topic's own `runOfShow`
block in its lesson data file, the same reason a deep reading's content lives
in its own module rather than in the renderer: a hand-typed pacing script that
quoted checkpoint wording directly would be a second copy of lesson content.

Validated by real classroom use on Topic 1.4 (2026-09-05), and now a permanent
teacher tool, the same kind of surface as `teacher/skills-lens.html`: never
linked from a lesson page, but covered by its own `validate.js` reachability
check and wired into the offline suite. Coverage of the other topics is
separate, ongoing content work, the same shape as the eBook's volumes: one
topic's `runOfShow` block authored and added to `TOPICS` in
`scripts/build-run-of-show.js` at a time, not all 71 at once.

**The class timer persists per topic to `localStorage`.** A reload mid-class
does not lose the Time Log. It never persists as "running": a reopened page
always starts paused, so time spent with the tab closed is never silently
counted. Because Green and Silver see the same topic in two different class
periods on the same day (see "Green and Silver" below), the **New Class**
button clears the saved state entirely, for switching cohorts rather than
only recovering a lost tab.

**`teacher/run-of-show-index.html` is the one stable URL**, the same reason
`ebook/index.html` exists rather than making a teacher remember a filename
per topic. Generated from the same `TOPICS` list the per-topic pages come
from, grouped by unit, so it cannot list a topic that does not exist or miss
one that does. Unlike the eBook's library, it carries no "not written yet"
placeholder rows: the eBook commits to one chapter per topic in a volume, a
fixed shape worth marking gaps in, and Run of Show makes no such commitment.

**`teacher/index.html` is the teacher command center**, one bookmark linking
every teacher-only tool (Run of Show, each interactive lesson, Skills Lens),
built by `scripts/build-teacher-index.js` from a declared `TOOLS` list, the same
editorial-list shape as `VOLUMES` in `build-ebook.js`. Its Today panel is a
router, not a dashboard: it stores nothing of its own. At page load it reads
`assets/data/announcements-schedule.js` live in the browser and finds the day
matching the browser's local date. **An interactive lesson outranks a Run of
Show** for the same topic, because the command center is the integrated surface
and carries the pacing inside it, so falling through would be a downgrade. With
neither, it says so plainly rather than guessing at a lesson-page URL it has no
way to derive correctly. The cohort
label shown there comes from `scripts/lib/cohorts.js`'s `COHORTS`, embedded at
build time, because the raw schedule file (unlike the generated
`announcements.js`) carries no label of its own, and a second schedule file
loaded just for that would be a second place for the label to fall out of
agreement with the one everything else reads.

**The routing decision is one function and the page does not own a copy.**
`scripts/lib/teacher-today.js` decides; `teacher-index-page.js` embeds its
source with `String()` and only formats the result. That is the same reason the
coach prompt has one builder and the Skills Lens inlines the real parser: a
second copy is a second answer to the same question, with nothing to say which
one the teacher read. It also makes the decision testable offline, which is why
`scripts/test/teacher-today.test.js` is in the push gate rather than the browser
suite.

**Both generated pages get the same two-way reachability check deep readings
and the eBook do.** `validate.js` confirms every topic `TOPICS` declares still
has a `runOfShow` block and a generated page, that no `teacher/run-of-show-*`
file on disk is missing from `TOPICS`, that the index links every declared
topic, that the command center links every declared tool, and that none of
it is linked from a student-facing page. `--check` on both builders is wired
into `scripts/test/readings-reproducible.test.js` in the offline suite, so a
hand-edit to any of the three generated files fails the push instead of being
silently reverted by the next rebuild.

**An interactive lesson is registered in two places and the check reads both
directions.** `INTERACTIVE_TOPICS` is what the Today panel routes on and `TOOLS`
is what the grid lists, so `validate.js` fails on a declared lesson whose page is
missing, on a lesson routable from Today but absent from the grid, and on a
`teacher/command-center-*.html` sitting on disk with no `INTERACTIVE_TOPICS`
entry at all. **That last one is the failure this check was written for.** Topics
2.1 and 2.2 had complete command centers, teaching data and projection pages, and
the registry still named the 1.7 pilot alone, so the Today panel would have told
a teacher those topics had no teacher surface on the mornings they were taught.
Nothing reported it, because the old check compared the page against the declared
list and the declared list was internally consistent. A list checked only against
itself can fall behind the repository and stay green forever.
