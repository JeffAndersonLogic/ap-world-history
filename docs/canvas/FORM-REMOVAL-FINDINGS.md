# Google Form Removal, Remaining References

**Audit date:** 2026-08-10. **Group A was fixed on 2026-08-10; everything else is
still a report.**

This is a scoped prompt for a separate cleanup session, not a change log. Mixing
a documentation session with the removal of a subsystem that spans many files
makes breakage impossible to attribute: if the Canvas artifacts and the form
teardown land in one commit and a First & 10 goes dark, nothing tells you which
half did it. So the audit is written down and the removal is deferred.

**Total at audit time: 98 references across 23 files.** 34 of those are in a
single frozen test fixture that must not be touched, and 15 more are the
enforcement machinery that keeps the retirement in place. What actually needed
fixing was much smaller, and four lines of it were visible to students.

**Those four are now fixed. 93 references remain across 18 files**, none of them
on a student-facing surface. Groups B through E below are still outstanding.

---

## Headline: the capture layer was already gone; the prose was not

**The pipeline itself is genuinely dead.**

- `assets/js/behistorical-form-config.js` **does not exist**. `assets/js/` holds
  exactly two files, `behistorical-room-v2.js` and
  `behistorical-topic-renderer-v1.js`.
- No surface anywhere carries `docs.google.com/forms`, `BH_FORM`,
  `submitToGoogleForm`, `buildGooglePrompt`, `#google-output`,
  `PREFILLED_FIRST10_FORM`, or `behistorical-form-config`. Verified by grep across
  every `.html` and `.js` outside `scripts/`, and independently by
  `scripts/validate.js`, which passes on 1330 files.
- `foundations/foundations-topic-renderer.js` has no form code path at all. Its
  `draft()` takes `(id, prompt)` with no `captureKey` parameter. The only export
  route is `renderWorkExportPanel()`, the **Save Your Work** card, whose two
  buttons are **Gather All My Work** and **Copy to Clipboard**.
- The two built Canvas packets in `canvas/` contain **zero** form references.
- `node scripts/remove-google-form-capture.js --dry-run` reports **0 files that
  would change** across 77 readings, 77 wrappers, and 77 lesson shells.

**But the prose did not all come with it.** At audit time, four student-facing
lines still told students to build a Google Form response, pointing at a builder
section that was deleted. There was no button, no URL, and no handler behind any
of them: dead instructions, not a live second capture channel, which is why
Canvas documentation could safely describe the Gather All My Work path as the
only one even before they were fixed. They still had to go, because a student who
reads one goes looking for a control that is not on the page.

**Group A below is the record of what they were and how they were fixed.** It is
kept rather than deleted, because the interesting part is not the four lines, it
is that every check in the repository was green while they were on screen.

---

## Group A, student-visible prose, FIXED 2026-08-10

`validate.js` section 8 did not catch these. It banned six code identifiers and
URLs; none of the four lines contained one. The phrase "Google Form" in running
prose had never been on the banned list, and the list only ever ran against HTML,
so the data-file line at A2 was outside its reach twice over. Both gaps are now
closed; see A3.

### A1. Three First & 10 readings, module subtitle

| File | Line |
|---|---|
| `unit-5/first-and-10-topic-5-9-society-and-the-industrial-age.html` | 5 |
| `unit-5/first-and-10-topic-5-10-continuity-and-change-in-the-industrial-age.html` | 5 |
| `unit-6/first-and-10-topic-6-1-rationales-for-imperialism.html` | 5 |

Each renders, in the visible `.module-subtitle` band at the top of the reading:

> Read the narrative, answer three questions across three AP skills, then build
> your Google Form response and your AI Coach prompt.

All three readings are generated, so the HTML was not touched. The source strings
were `headerSubtitle` in `scripts/lib/reading-content/unit-5.js` lines 232 and
1687 and `scripts/lib/reading-content/unit-6.js` line 32, followed by
`node scripts/build-unit-readings.js`.

**The replacement is not a reworded sentence.** The other 55 readings do not carry
a corrected version of that instruction; they carry something else entirely. Every
one of them puts `Topic X.Y, Title | course` in the module subtitle, which is what
the First & 10 standard in `CLAUDE.md` specifies for that slot: "module subtitle
(topic + course)". These three were the only readings in the course with a
workflow instruction there at all. So the fix restores the house pattern rather
than editing the sentence:

| Reading | New subtitle |
|---|---|
| 5.9 | `Topic 5.9, Society and the Industrial Age &nbsp;\|&nbsp; AP World History: Modern` |
| 5.10 | `Topic 5.10, Continuity and Change in the Industrial Age &nbsp;\|&nbsp; AP World History: Modern` |
| 6.1 | `Topic 6.1, Rationales for Imperialism &nbsp;\|&nbsp; AP World History: Modern` |

`scripts/test/readings-golden.js` failed on exactly these three diffs, as
expected, since `scripts/test/fixtures/readings-before.json` holds the old string
at lines 11436, 15021, and 15348 under `subtitle`. Three entries were added to the
test's `INTENTIONAL` list, **one per reading, each pinned to its own exact value**
rather than one loose `contains` rule, so the list still cannot accept a fourth
subtitle change it does not describe.

That list already handled `footerNote` and `support[].body` for these same three
readings, which is the tell: the 2026-08-07 normalization pass caught two of the
three fields on these files and missed the third.

**Pre-existing inconsistency, left alone:** Topics 5.3 through 5.8 end their
subtitle with `AP World History` where every other reading in the course, all 52
of them, says `AP World History: Modern`. The three fixed here use the majority
form. The six stragglers are unrelated to the form retirement and were not
touched.

### A2. Topic 6.1 lesson page, First & 10 module note

`assets/data/lesson-6-1-rationales-for-imperialism.js:115`

```js
note: "Read the First & 10 narrative on the four ideologies of empire, answer the three questions, build your Google Form response and your AI Coach prompt, then return to the 6.1 lesson path."
```

`assets/js/behistorical-topic-renderer-v1.js:477` renders `first10.note` inside
the First & 10 module modal, so this was on screen every time a student opened
module 02 of Topic 6.1. Hand-authored data file, not generated, so it was edited
directly: the clause `build your Google Form response and` was dropped, leaving
`build your AI Coach prompt`, which is the builder the reading actually has.

### A3. The two reasons the checks missed all four

Both are now closed, in `scripts/validate.js` section 8.

**`'Google Form'` is now a seventh banned token.** The first six are code
identifiers and URLs. A student cannot read an identifier; they can read the
prose, and then go looking for a builder that is not on the page. Each banned
entry now also carries its own fix hint, because the sweep script the old message
recommended only rewrites HTML and is the wrong advice for a data file or a
generated reading.

**The scan now covers data files, not just HTML.** The `surfaces` list was
`unitFirst10 + fFirst10 + lessonShells + fHtmlFiles`, all HTML. A2 lived in a
`.js` data file whose strings are read out and rendered, so it was outside the
check's reach even for the identifiers. `dataFiles`, `rcFiles`, and the six
Foundations data files are now included; the validator's file count went from 1182
to 1330.

Verified fail-closed: reinstating the A2 wording makes `validate.js` fail with
`assets/data/lesson-6-1-rationales-for-imperialism.js: student-facing prose naming
the retired form is still here`, and removing it again returns the suite to green.

---

## Group B, dead code (prints a false green tick)

### B1. `scripts/validate.js:100`, `loadTopicKeys()` reads a file that no longer exists

```js
function loadTopicKeys() {
  const src = read(path.join(ROOT, 'assets/js/behistorical-form-config.js'));
  if (!src) return new Set();
  ...
}
```

`read()` returns null for the missing file, so the function returns an empty set,
silently. Line 407 then prints:

```
✓ Loaded 0 topic keys from behistorical-form-config.js
```

A green tick, with a count of zero, naming a file that is not in the repository,
at the top of the output of the validator whose whole purpose is catching silent
failure.

### B2. `scripts/validate.js:214, 436, 491`, `topicKeys` is a dead parameter

`checkFirst10(filePath, topicKeys)` accepts the set and **never reads it**. It is
threaded through both call sites, line 436 for the 71 unit readings and line 491
for the 6 Foundations readings, and used nowhere in the function body. The comment
at line 216, "Capture wrappers are audited separately against the central form
config," describes an audit that no longer exists.

**Removal:** delete `loadTopicKeys()`, delete lines 406 and 407, drop the second
parameter from `checkFirst10` and both call sites, delete the stale comment at
line 216. No check loses coverage, because no check was using it. `npm test` must
still report `All checks passed` on 1330 files afterwards.

---

## Group C, tooling with nothing left to do

### C1. `scripts/remove-google-form-capture.js`, 240 lines, currently a no-op

14 references inside the file itself; referenced from `package.json:28` as
`npm run strip-form`, `scripts/validate.js:533`, `CLAUDE.md:92` and `CLAUDE.md:325`,
`scripts/lib/first10-capture-wrapper.js:16`, `docs/FORM-CONTRACT.md:139`,
`.claude/skills/audit-site.md:15`, and `.claude/skills/build-lesson.md:102`.

It does two separable jobs:

1. **Strip form capture** from readings, wrappers, and shells. Dead: 0 files would
   change, and `validate.js` section 8 now fails the build if any of it reappears,
   so the sweep can no longer be the thing that catches a regression.
2. **Normalize all 77 capture wrappers** to the canonical MagicSchool-only shape.
   **Still live and still load-bearing.** `.claude/skills/build-lesson.md` points
   at it for exactly this, and most readings render the MagicSchool button with no
   `onclick` and depend on the wrapper catching the click by label, so a wrapper
   without the interception is a dead button.

**Do not delete this script.** Split it: keep job 2 under a name that says what it
does, `scripts/normalize-capture-wrappers.js`, and delete job 1, the form branches
at lines 93, 94, 145, 160, 164, 167, and 169 to 174. Then update the eight
referencing sites, including the `strip-form` alias in `package.json`.

The `BH_FORM` fallback rewrite at lines 169 to 174, which reduced
`var TOPIC_LABEL = (window.BH_FORM && BH_FORM.topics[TOPIC_KEY]) || 'literal';` to
the literal, has already run against all 77 readings and has nothing left to match.

---

## Group D, stale documentation

### D1. `canvas/README.md:99`, describes a button and an assertion that do not exist

> Everything else matches, including the Google Form button. That one is worth
> naming: the reading's own submit handler sends two fields and no answer, and it
> is the capture wrapper that upgrades the request to carry the unit, topic id,
> response type, AP skills, and the student's typed response. The packet inlines
> that wrapper's logic rather than skipping it, and the build asserts all six
> prefill fields survive.

Verified false on all three claims: the built packets contain zero form
references, `scripts/build-canvas-packets.js` contains no prefill assertion, and
there is no submit handler to inline. Delete the paragraph. It sits in the "What
differs from the live page" section, which is a correctness contract for the
packets, so a false entry there is worse than an omission.

### D2. `scripts/build-canvas-packets.js:153`, stale reason in a comment

> The builder sections and the module footer are dropped, they point at the Google
> Form and at lesson pages this packet cannot reach.

The behavior is still correct and should not change; only the reason is out of
date. The builder section that survives is the AI Coach builder, and it is dropped
because the packet cannot reach MagicSchool, not because of a form.

### D3. `PROJECT_STATUS.md:274, 298, 322`, present-tense form dependency

Three Unit 9 topic entries carry a **Known dependency** line of this shape:

> Google Form dropdown (`behistorical-form-config.js`) already includes
> `'9.1': '9.1 - Advances in Technology and Exchange'` in topics and
> `9: 'Unit 9 - Globalization'` in units. No form config update required.

These describe a deleted file as a current dependency of a shipped lesson. Anyone
reading `PROJECT_STATUS.md` to learn what Topic 9.1 depends on is sent to check a
config that does not exist. Rewrite each as a dated note that the dependency was
retired on 2026-08-07, or strike the three lines.

### D4. `PROJECT_STATUS.md:347, 375`, historical build-log entries, leave them

> Added Unit 6 Google Form skill mappings and repaired the Foundations topic-key
> validator mismatch.

> Added complete Unit 9 Google Form skill mappings and hardcoded, prefilled First
> & 10 wrapper URLs.

Dated records of work that genuinely happened, past tense, in a change log.
**Leave them.** Listed here only so a future audit does not read them as a fresh
regression.

---

## Group E, enforcement (correct as-is, do not remove)

These name the form on purpose, to keep it retired. Removing them removes the only
thing preventing its return.

| File | Lines | What it does |
|---|---|---|
| `scripts/validate.js` | 521 to 570 | Section 8, fails the build if any of seven banned tokens appears on a student-facing surface. The seventh, and the widening of that surface set to include data files, were added by the Group A fix |
| `.claude/skills/audit-site.md` | 12 to 14 | The same tokens as an audit instruction |
| `CLAUDE.md` | 179 to 182, 294 | The retirement notice and the First & 10 prohibited-patterns list |

One edit is needed inside this group: the `SWEEP` hint at `scripts/validate.js:533`
and the `CLAUDE.md` pointers name `scripts/remove-google-form-capture.js`, which
Group C renames. The seventh token does not point at the sweep and needs no change.

---

## Group F, historical record (correct as-is, leave alone)

Every one of these names the form in order to explain that it is gone, or what
replaced it and what the replacement must guarantee.

| File | Lines | Note |
|---|---|---|
| `docs/FORM-CONTRACT.md` | 1, 3, 4, 136 to 138 | The record of the retirement and why. **It does not describe the form as live.** Its title is `RETIRED 2026-08-07` and its first line is "This pipeline no longer exists." |
| `docs/TEACHER-HUB.md` | 6, 78 | Records the Teacher Hub retirement on the same day |
| `docs/CANVAS-CAPTURE.md` | 19 | "The Google Form pipeline lost rows silently", the rationale for the Canvas parser |
| `README.md` | 63 | Points a reader at the two retirement records |
| `scripts/parse-canvas-submissions.js` | 20 | Same rationale, in the parser's header comment |
| `scripts/lib/canvas-parse-core.js` | 451 | Why a bare n is never printed |
| `teacher/skills-lens.html` | 13990, 14354 | The inlined copy of the same two comments. Generated by `scripts/build-skills-lens.js`; never hand-edit between the sentinels |
| `scripts/test/readings-golden.js` | 48 | The `why` string on a reviewed golden-diff delta |
| `assets/data/teacher/teacher-1-1-song-china.js` | 4 | Records that the Teacher Hub dashboard was retired when its form died |
| `scripts/lib/first10-capture-wrapper.js` | 16 | Names the script that generated the wrappers |

---

## Group G, frozen fixture (do not touch under any circumstances)

`scripts/test/fixtures/readings-before.json`, **34 occurrences** between lines 7847
and 19802. Mostly `footerNote` strings of the form:

> Your typed responses stay on this page. Use the builder buttons to copy your work
> and submit to Google Form or share with your AI Coach.

plus three `subtitle` strings at 11436, 15021, 15348 and three intro `body` strings
at 11451, 15036, 15363.

This file is the committed extraction of the **pre-migration** readings, the
baseline `scripts/test/readings-golden.js` diffs against to prove the 58 generated
unit readings still carry every word of the originals. It is supposed to contain
form language, because the originals did. "Cleaning" it would rewrite the baseline
to match whatever the generator currently emits, which is the exact failure
`CLAUDE.md` warns about under "Migrating a set of readings", step 3: a baseline
compared against itself can only say yes.

The same applies to `scripts/test/fixtures/foundations-before.json` if a future
grep surfaces hits there.

---

## Recommended removal order

Each step is independently verifiable with `npm test`. Do not collapse them into
one commit; the point of the ordering is that a break is attributable.

1. ~~**Group A, the four student-visible lines.**~~ **Done 2026-08-10.** Fixed at
   source in `scripts/lib/reading-content/unit-5.js`, `unit-6.js`, and
   `assets/data/lesson-6-1-rationales-for-imperialism.js`; readings rebuilt; three
   pinned `INTENTIONAL` entries added to `scripts/test/readings-golden.js`; the
   seventh banned token and the widened surface set added to `scripts/validate.js`.
   `npm test` green on 1330 files. A grep for `Google Form` under `unit-*/`,
   `foundations/`, and `assets/data/` now returns exactly one hit, the Group F
   comment at `assets/data/teacher/teacher-1-1-song-china.js:4`, which is a code
   comment in a teacher file and is the historical record, not student prose.
2. **Group B, `validate.js` dead code.** Small, zero blast radius, kills the false
   green tick. Verify: `npm test` still passes and the `Loaded 0 topic keys` line
   is gone from the output.
3. **Group D, the documentation.** No code touched and no test can catch any of
   it, so do it while the context is fresh rather than after a code change has
   consumed the attention. `canvas/README.md:99` first: it is the only one of the
   four that makes a false claim about how a shipped artifact behaves.
4. **Group C, split `remove-google-form-capture.js`.** Largest and the only step
   with real risk, because job 2 is load-bearing for all 77 wrappers. Do it alone.
   Verify: `npm test`, then `npm run test:browser`, then confirm the renamed script
   is idempotent and reports 0 changes on a clean tree.
5. **Group E, the `SWEEP` hint at `validate.js:533` and the `CLAUDE.md` pointers.**
   Follows step 4 mechanically, since it is only the new script name.

Groups F and G are not in the removal order. Nothing in them should change.

---

## What this means for the Canvas artifacts

Nothing here changes what may be written into Canvas. The student submission path
documented in `CANVAS-BUILD-GUIDE.md` Section 8 and in
`foundations-assignment-instructions.md` is accurate as of this audit: complete
the modules on the live site, **Gather All My Work**, **Copy to Clipboard**, paste
into the Canvas Text Entry box. There is no second capture channel and no working
form control anywhere, so no Canvas-facing document in `docs/canvas/` should ever
suggest one.

Two adjacent notes for whoever picks this up:

- **The Group A lines were all in Units 5 and 6, never Foundations.** All six
  Foundations readings and all six lesson shells were clean throughout. The
  Foundations Canvas build documented in this folder was never affected and can
  ship ahead of the remaining cleanup.
- **`canvas/` is a different thing from `docs/canvas/`.** `canvas/` holds the two
  built offline packets for Foundations 0 and 1, for students who cannot reach the
  site; `docs/canvas/` holds the paste-ready Canvas artifacts. `CANVAS-BUILD-GUIDE.md`
  does not currently mention the packets, which is a real gap in the guide but a
  separate one from this audit.
