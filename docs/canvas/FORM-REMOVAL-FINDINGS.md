# Google Form Removal, Remaining References

**Audit date:** 2026-08-10. **Report only. No code was changed in the session
that produced this file.**

This is a scoped prompt for a separate cleanup session, not a change log. Mixing
a documentation session with the removal of a subsystem that spans many files
makes breakage impossible to attribute: if the Canvas artifacts and the form
teardown land in one commit and a First & 10 goes dark, nothing tells you which
half did it. So the audit is written down and the removal is deferred.

**Total: 98 references across 23 files.** 34 of those are in a single frozen test
fixture that must not be touched, and 15 more are the enforcement machinery that
keeps the retirement in place. What actually needs fixing is much smaller, and
four lines of it are visible to students.

---

## Headline: the capture layer is gone, but four student-visible lines still name it

**The pipeline itself is genuinely dead.**

- `assets/js/behistorical-form-config.js` **does not exist**. `assets/js/` holds
  exactly two files, `behistorical-room-v2.js` and
  `behistorical-topic-renderer-v1.js`.
- No surface anywhere carries `docs.google.com/forms`, `BH_FORM`,
  `submitToGoogleForm`, `buildGooglePrompt`, `#google-output`,
  `PREFILLED_FIRST10_FORM`, or `behistorical-form-config`. Verified by grep across
  every `.html` and `.js` outside `scripts/`, and independently by
  `scripts/validate.js`, which passes on 1182 files.
- `foundations/foundations-topic-renderer.js` has no form code path at all. Its
  `draft()` takes `(id, prompt)` with no `captureKey` parameter. The only export
  route is `renderWorkExportPanel()`, the **Save Your Work** card, whose two
  buttons are **Gather All My Work** and **Copy to Clipboard**.
- The two built Canvas packets in `canvas/` contain **zero** form references.
- `node scripts/remove-google-form-capture.js --dry-run` reports **0 files that
  would change** across 77 readings, 77 wrappers, and 77 lesson shells.

**But the prose did not all come with it.** Four student-facing lines still tell
students to build a Google Form response, pointing at a builder section that was
deleted. There is no button, no URL, and no handler behind any of them. They are
dead instructions, not a live second capture channel, which is why Canvas
documentation may safely describe the Gather All My Work path as the only one.
They still need to go, because a student who reads one goes looking for a control
that is not on the page.

---

## Group A, student-visible prose (fix first)

`validate.js` section 8 does not catch these. It bans six code identifiers and
URLs; none of these four lines contains one. The phrase "Google Form" in running
prose has never been on the banned list.

### A1. Three First & 10 readings, module subtitle

| File | Line |
|---|---|
| `unit-5/first-and-10-topic-5-9-society-and-the-industrial-age.html` | 5 |
| `unit-5/first-and-10-topic-5-10-continuity-and-change-in-the-industrial-age.html` | 5 |
| `unit-6/first-and-10-topic-6-1-rationales-for-imperialism.html` | 5 |

Each renders, in the visible `.module-subtitle` band at the top of the reading:

> Read the narrative, answer three questions across three AP skills, then build
> your Google Form response and your AI Coach prompt.

All three of these readings are generated. **Do not edit the HTML.** The source
strings are `headerSubtitle` in `scripts/lib/reading-content/unit-5.js` lines 232
and 1687, and `scripts/lib/reading-content/unit-6.js` line 32. Fix those three,
then `node scripts/build-unit-readings.js`.

The other 55 readings already carry the corrected wording, so there is a house
version to copy rather than a new sentence to invent.

**This will fail `scripts/test/readings-golden.js` until the change is declared.**
That test compares against `scripts/test/fixtures/readings-before.json`, where the
same string sits at lines 11436, 15021, and 15348 under `subtitle`. Add an entry
to the `INTENTIONAL` list at the top of the test, in the same shape as the
`footerNote` entry already there:

```js
{ field: 'header.subtitle', after: '<the corrected wording>',
  why: 'the Google Form was retired 2026-08-07; 5.9, 5.10 and 6.1 still pointed students at it in the module subtitle. This is the wording the other 55 already used.' },
```

That list already handles `footerNote` and `support[].body` for these same three
readings, which is the tell: the 2026-08-07 normalization pass caught two of the
three fields on these files and missed the third.

### A2. Topic 6.1 lesson page, First & 10 module note

`assets/data/lesson-6-1-rationales-for-imperialism.js:115`

```js
note: "Read the First & 10 narrative on the four ideologies of empire, answer the three questions, build your Google Form response and your AI Coach prompt, then return to the 6.1 lesson path."
```

`assets/js/behistorical-topic-renderer-v1.js:477` renders `first10.note` inside
the First & 10 module modal, so this is on screen every time a student opens
module 02 of Topic 6.1. This one is a hand-authored data file, not generated;
edit it directly.

**After A1 and A2, add `'Google Form'` as a seventh banned token** to the list at
`scripts/validate.js:531`, so the prose cannot come back the way it just did. The
banned-token list is the check that would have caught this and did not.

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
still report `All checks passed` on 1182 files afterwards.

---

## Group C, tooling with nothing left to do

### C1. `scripts/remove-google-form-capture.js`, 240 lines, currently a no-op

14 references inside the file itself; referenced from `package.json:28` as
`npm run strip-form`, `scripts/validate.js:547`, `CLAUDE.md:92` and `CLAUDE.md:325`,
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
| `scripts/validate.js` | 521 to 552 | Section 8, fails the build if any of six banned tokens appears on a student-facing surface. Group A recommends adding a seventh |
| `.claude/skills/audit-site.md` | 12 to 14 | The same tokens as an audit instruction |
| `CLAUDE.md` | 179 to 182, 294 | The retirement notice and the First & 10 prohibited-patterns list |

One edit is needed inside this group: the error string at `scripts/validate.js:547`
and the `CLAUDE.md` pointers name `scripts/remove-google-form-capture.js`, which
Group C renames.

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

1. **Group A, the four student-visible lines.** Highest value, because these are
   the only ones a student can read. Do A1 and A2 together, then add the seventh
   banned token so the check that missed them stops missing them. Verify:
   `node scripts/build-unit-readings.js --check` passes, `npm test` passes with the
   new `INTENTIONAL` entry, and a grep for `Google Form` returns nothing under
   `unit-*/`, `foundations/`, or `assets/data/`.
2. **Group B, `validate.js` dead code.** Small, zero blast radius, kills the false
   green tick. Verify: `npm test` still passes on 1182 files and the
   `Loaded 0 topic keys` line is gone from the output.
3. **Group D, the documentation.** No code touched and no test can catch any of
   it, so do it while the context is fresh rather than after a code change has
   consumed the attention. `canvas/README.md:99` first: it is the only one of the
   four that makes a false claim about how a shipped artifact behaves.
4. **Group C, split `remove-google-form-capture.js`.** Largest and the only step
   with real risk, because job 2 is load-bearing for all 77 wrappers. Do it alone.
   Verify: `npm test`, then `npm run test:browser`, then confirm the renamed script
   is idempotent and reports 0 changes on a clean tree.
5. **Group E, the one string at `validate.js:547` and the `CLAUDE.md` pointers.**
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

- **The Group A lines are all in Units 5 and 6, not Foundations.** All six
  Foundations readings and all six lesson shells are clean. The Foundations Canvas
  build documented in this folder is unaffected, and can ship before this cleanup
  runs.
- **`canvas/` is a different thing from `docs/canvas/`.** `canvas/` holds the two
  built offline packets for Foundations 0 and 1, for students who cannot reach the
  site; `docs/canvas/` holds the paste-ready Canvas artifacts. `CANVAS-BUILD-GUIDE.md`
  does not currently mention the packets, which is a real gap in the guide but a
  separate one from this audit.
