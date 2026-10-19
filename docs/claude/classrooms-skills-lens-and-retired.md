# Two Classrooms, the Skills Lens, and Retired Surfaces

Moved word for word from `CLAUDE.md` on 2026-10-16 so the rulebook every session loads stays short (Jeff's decision, recorded in AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`). It is as binding as it was there: read it before changing anything it covers. A comment elsewhere that says "see <section> in CLAUDE.md" means this file; `CLAUDE.md` lists where each section went.

## Two Classrooms, One Site

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
> **The evidence-term measure plots Units 1 and 2 only, and that is a fact about
> the lesson data.** Of 701 response slots across 77 topics in
> `assets/data/skills-map.js`, 28 carry both an AP skill tag and authored evidence
> terms, and all 28 are in Units 1 and 2, where
> `assets/data/ap-practice-units-1-2.js` names a skill on the modules that also
> carry terms. Everywhere else the two still sit apart: the tags on the First & 10
> questions and the Skill Builder, the terms on the checkpoints and the Evidence
> Lab. So the measure is real but thin, and the panel should say which units it
> covers rather than implying the course. **This said "no slot in the course"
> until 2026-09-14, which was true when the panel was written and stopped being
> true when Units 1 and 2 were revised**, with nothing to report the change. To
> widen it, name a skill on the checkpoints that carry terms in another unit and
> re-run `node scripts/build-skills-map.js`. Read a thin n as thin, not as a
> finding: the "point under n=5 is drawn hollow" rule above is doing real work
> here.

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

> **Canvas Packets retired 2026-09-03,** on Jeff's word that they are no longer
> necessary. `canvas/` and its two generators moved to
> `archive/canvas-packets/`, which carries the provenance and, separately, the
> pre-existing bug that had already made the generator unusable (it expected a
> First & 10 capture wrapper shape that stopped existing on 2026-08-31). Do not
> rebuild this here without first reading that README.
