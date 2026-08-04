# Google Form Capture Contract

**Last verified: 2026-08-01** — pipeline tested end-to-end, live submission confirmed.

This file records state that lives in Google, not in this repository. Nothing
here can be verified by reading code. If you are an agent working on capture,
read this before changing anything.

---

## THE GOVERNING RULE

**The Google Form conforms to the site. Never the reverse.**

When a value the site sends does not match a Google Form dropdown option, the
fix is to edit the form option. Do NOT edit site files to match the form.

Reason: one form edit takes a minute. The equivalent site change touches
80+ files and permanently changes the naming convention every future lesson
inherits.

**The one exception, already exercised:** Unit 1 topics 1.5, 1.6, 1.7. The form
had drifted off the College Board CED. The form was corrected to match the site,
because the site's names track the CED. CED compliance outranks the governing
rule.

---

## THE FAILURE MODE YOU MUST UNDERSTAND

Google Forms prefill matching is **character-exact and silent**.

If the site sends `Foundations 1 - Geography` (hyphen) and the form option reads
`Foundations 1 – Geography` (en dash), the form does not error, does not warn,
and does not log. It leaves the field blank and accepts the submission.

This exact mismatch silently dropped Topic on all six Foundations lessons for an
unknown period. It was invisible in testing because the form still opened and
still submitted.

**Corollary:** never "clean up" or normalize a dash, an ampersand, a spacing
choice, or capitalization in any capture string. Character-exact or don't touch.

---

## THE PIPELINE

```
Lesson shell HTML
  -> topic data JS  (defines T.id, embedUrl)
  -> renderer JS    (builds Submit to Form buttons)
  -> buildFormURL() in assets/js/behistorical-form-config.js
  -> prefilled Google Form URL
  -> Google Sheet
  -> Apps Script (tools/teacher-hub/google-apps-script/Code.gs)
```

`assets/js/behistorical-form-config.js` is the **single source of truth** for
every string the site sends. Entry IDs, unit names, topic names, response types,
prompt-ID slugs, and skill tags all live there. Read it before assuming anything.

---

## FIELD MAP

| Field | Entry ID | Source |
|---|---|---|
| Unit | `entry.125385659` | `BH_FORM.units` |
| Topic | `entry.187055090` | `BH_FORM.topics` |
| Prompt ID | `entry.1549761827` | derived, see below |
| Response Type | `entry.2107637366` | `BH_FORM.responseTypes` |
| Skill Focus | `entry.1963461515` | `BH_FORM.skills`, checkbox, repeats |
| Class Period | `entry.1794755975` | student selects, not prefilled |
| Student Response | `entry.1845180246` | pre-filled from the card's textarea at click time |

`entry.1845180246` was recovered on 2026-08-03 from the Unit 8 and Unit 9 First & 10
capture wrappers, which had been prefilling it since they were written. It was
missing from this table, so every other capture point copied the response to the
clipboard and asked the student to paste. It no longer does; the response rides
in the URL.

Do not hardcode these anywhere. Read them from `BH_FORM.fields`.

---

## KEY FORMAT TRAP

Foundations data files set `T.id` to `foundations-0` … `foundations-5`.
`buildFormURL(topicKey, ...)` expects the config's topic keys: `f0` … `f5`.

Passing `T.id` directly does NOT throw. It produces a URL with the **Unit
parameter silently missing**, because the internal regex `/^f(\d+)$/` fails to
match and the unit lookup falls through to an empty string. The Prompt ID still
comes out correct, which makes the bug look like it worked.

Always convert:

```js
var topicKey = String(T.id || '').replace(/^foundations-(\d+)$/, 'f$1');
```

Then assert `BH_FORM.topics[topicKey]` exists before building a URL. If it does
not, render no button. A button that opens a bare form is worse than no button.

---

## PROMPT ID CONVENTION

`promptId = {promptKey}-{slug}`

- Unit topics: promptKey is the topic key, e.g. `4.1` -> `4.1-checkpoint-1`
- Foundations: `f1` converts to `foundations-1` -> `foundations-1-checkpoint-1`

Slugs (`BH_FORM.slugs`):

| Response type key | Slug | Response Type string |
|---|---|---|
| `first10` | `first10` | `First and 10` |
| `skillBuilder` | `ap-skill-builder` | `AP Skill Builder` |
| `checkpoint1` | `checkpoint-1` | `Checkpoint 1` |
| `evidenceLab` | `evidence-lab` | `Evidence Lab` |
| `primarySource` | `primary-source` | `Primary Source` |
| `beInTheRoom` | `beintheroom` | `BeInTheRoom` |
| `checkpoint2` | `checkpoint-2` | `Checkpoint 2` |

Note `First and 10` is spelled out. It is **not** `First & 10`.

---

## WHAT THE FORM CURRENTLY CONTAINS

Verified by hand on 2026-08-01.

**Unit dropdown** — includes `Foundations - How World History Works` plus
Units 1 through 9.

**Topic dropdown** — all six Foundations topics present with plain hyphens:

```
Foundations 0 - Intro to BeHistorical
Foundations 1 - Geography
Foundations 2 - Belief Systems
Foundations 3 - States & Power
Foundations 4 - Trade Networks
Foundations 5 - World at 1200
```

Unit 1 topics 1.5 / 1.6 / 1.7 corrected to the CED-aligned site names.
Units 2 through 9 topic names were already correct.

> ### NO FORM EDITS ARE OUTSTANDING AS OF 2026-08-03
>
> An expansion to eight capture points was built and then reverted the same day,
> before it ever reached students. It would have required changing Prompt ID to
> a short-answer question and adding three Response Type options. **Neither was
> made, and neither is needed.** The site is back to the three built touchpoints,
> whose Prompt IDs and Response Types are all already on the form.
>
> If a future change adds a capture point, the checklist at the bottom of this
> file applies, and step 3 is the one people skip.

**Prompt ID dropdown** — 474 options total as of 2026-08-01.

Foundations First & 10 (six options): `foundations-0-first10` through
`foundations-5-first10`.

Foundations checkpoints — twelve options, verified present at positions
463–474:

| # | Option |
|---|---|
| 463 | `foundations-0-checkpoint-1` |
| 464 | `foundations-0-checkpoint-2` |
| 465 | `foundations-1-checkpoint-1` |
| 466 | `foundations-1-checkpoint-2` |
| 467 | `foundations-2-checkpoint-1` |
| 468 | `foundations-2-checkpoint-2` |
| 469 | `foundations-3-checkpoint-1` |
| 470 | `foundations-3-checkpoint-2` |
| 471 | `foundations-4-checkpoint-1` |
| 472 | `foundations-4-checkpoint-2` |
| 473 | `foundations-5-checkpoint-1` |
| 474 | `foundations-5-checkpoint-2` |

Option order is irrelevant to matching — Google matches prefill by exact string
value, not position. Position numbers are recorded only to make future audits
faster.

Legacy `f1-*` through `f5-*` options remain in the list, unused and harmless.

**Skill Focus** — checkbox question, marked required. Nine options, in this
order on the form:

1. `Causation`
2. `Comparison`
3. `Continuity and Change Over Time (CCOT)`
4. `Contextualization`
5. `Argumentation`
6. `Evidence Usage`
7. `Sourcing`
8. `Complexity`
9. `Claims & Thesis`

Verified 2026-08-01 against the complete `BH_FORM.skills` map — every topic,
every response type. The site sends exactly eight distinct values across the
entire course: `Argumentation`, `Causation`, `Claims & Thesis`, `Comparison`,
`Contextualization`, `Continuity and Change Over Time (CCOT)`, `Evidence Usage`,
`Sourcing`. All eight are present on the form. `Complexity` exists on the form
but is never sent by any capture button — harmless.

**This field cannot silently drop.** Extra options on the form are harmless;
only missing ones cause failures.

Note that Foundations checkpoints use a five-value subset. Five is not the
ceiling — the unit topics use all eight.

---

## KNOWN GAPS

**THE CEILING HOLDS. It was lifted on 2026-08-03 and restored the same day.**

Read this before you touch capture scope, because the mistake has now been made
once and the reasoning is what stops it happening again.

Three touchpoints are built: **First & 10, Checkpoint 1, Checkpoint 2.** Map,
BeSurreal, AP Skill Builder, Evidence Lab, Primary Source and Socrates AI Coach
keep their draft boxes and are localStorage-only **by design**.

**Why an expansion looks like a fix and is not one.** On 2026-08-03 the modules
with draft boxes but no Submit button were read as a wiring bug, and capture was
expanded to eight touchpoints. It was reverted before students saw it. The
expansion was aimed at the wrong problem:

- A Submit to Form button does **not** make a draft durable. The text still lives
  only in `localStorage` until the student remembers to click Submit on that
  specific box. Eight buttons per lesson is eight things to forget.
- The Form is **not the grading path and never was.** There is no Canvas
  integration in this repository. The architecture is: BeHistorical is the
  thinking space, MagicSchool is the coaching layer, **Canvas is the graded
  submission point, and the student carries work there manually.** The Form is a
  narrow teacher-visibility channel feeding a Sheet.
- What students actually needed was durability and a path to Canvas. That is
  **autosave plus "Copy All My Work"**, not more form touchpoints.

So: if you find yourself about to add a capture point because a draft box "goes
nowhere", it does not go nowhere. It autosaves, and Copy All My Work carries it
to Canvas. Ask before expanding.

**How the built buttons work.** Both renderers build them from
`buildCaptureButton()` in `assets/js/behistorical-form-config.js`, inside the
same `.tool-row` as Save Draft and Copy Response, never outside the card.

`autoBuildCaptureUrls()` **merges** into `L.captureUrls` rather than replacing
it, because topics 7.9 and 8.9 define bespoke `matrix*` capture keys that their
own module renderers read. Replacing the object outright deletes those buttons
silently. It does overwrite the standard keys, deliberately: hand-written
`captureUrls` in `assets/data/` dropped Prompt ID and Skill Focus on 22 topics.

**First & 10 has no button on the lesson page.** Its capture lives in the capture
wrapper, which already prefills the response. A second button on the lesson page
would open a form with nothing in it, because the reading is inside an iframe.

**BeInTheRoom was never built.** `BeInTheRoom` is a valid Response Type and
`beintheroom` is a valid slug, but no `*-beintheroom` prompt IDs exist on the
form, module 09 is an external link with no textarea, and neither renderer builds
a button. Earlier notes list it as one of the touchpoints. Those notes are
aspirational, not a description of the code. Wiring it means either adding a
debrief textarea to the 61 scenario pages under `beintheroom/`, or breaking the
exactly-10-modules rule in `CLAUDE.md`.

**Unit 9 wrappers.** Topics 9.1 and 9.9 use two different non-standard capture
wrapper patterns. The 9.1 pattern attaches duplicate click handlers and can open
two form tabs per click. The 9.9 pattern overwrites the child page's
`submitToGoogleForm`, discarding the clipboard copy, so the student lands on a
form with an empty required Student Response field and nothing to paste. Both
should be regenerated to match the Units 1–8 wrapper pattern.

**Teacher Hub.** PR #7 is unmerged. Deployed Apps Script is a Topic-1.1
prototype. `onOpen` fails, which removes the custom spreadsheet menu but does not
affect data capture. `TeacherHub_Settings` is empty; `TeacherHub_Analysis` is
stale and hardcoded.

**Apps Script column access.** `Code.gs` resolves columns by header name via
`HEADER_ALIASES` and `headers.indexOf(...)`, not by position. Reordering or
deleting sheet columns is therefore safe. The only positional `getRange` calls
write to the Teacher Hub output tabs.

---

## BEFORE ADDING ANY NEW CAPTURE POINT

1. Confirm the response type key exists in `BH_FORM.responseTypes` and
   `BH_FORM.slugs`.
2. Compute the resulting Prompt ID string and write it down.
3. **Add that Prompt ID to the live Google Form dropdown before shipping.**
   A button whose Prompt ID is missing from the form fails silently.
4. Confirm any Skill Focus values you introduce exist in the form's Skill Focus
   options.
5. Update the "WHAT THE FORM CURRENTLY CONTAINS" section above.

Step 3 is the one people skip. It is the one that costs days.

---

## CACHE-BUSTING

Lesson shells load the renderer with `?v=N`. Data files and capture wrappers are
also versioned. **Bump the version on every capture-related edit.**

A stale cached copy of a capture wrapper produced a bare, parameter-free form URL
that could not be explained by reading current source, and burned a full
debugging session. `scripts/validate.js` strips query strings before resolving
`embedUrl` paths, so versioning will not trip the build gate.

---

## VERIFICATION HISTORY

**2026-08-01 — Full pipeline verified end-to-end.**

Repo commits:
- `0007ab2` — Foundations capture parity, 20 files. Checkpoint 1 and Checkpoint 2
  wired into `foundations/foundations-topic-renderer.js`. Renderer cache-bust
  `?v=6` → `?v=7` across six shells. Malformed `?v=2?replaced` corrected to
  `?v=3` in foundations-1 through foundations-4. `scripts/validate.js` line ~356
  fixed to strip query strings before path resolution.
- `5cd7e3c` — this contract document plus the `CLAUDE.md` pointer.

Form-side changes (manual, outside the repo):
- Unit dropdown: added `Foundations - How World History Works`
- Topic dropdown: all six Foundations topics added with plain hyphens
- Unit 1 topics 1.5 / 1.6 / 1.7 corrected to CED-aligned site names
- Prompt ID: 12 checkpoint options added (see table above)
- Skill Focus: confirmed complete, no edits needed

Four defects repaired, none of which threw an error:
1. Unit parameter silently dropping on the `foundations-N` → `fN` key mismatch
2. Checkpoint 1 and Checkpoint 2 had no capture path at all
3. Stale browser cache serving a parameter-free form URL absent from all source
4. Form drift off CED naming on three Unit 1 topics

**`scripts/validate.js` passing does NOT indicate correct behavior.** Every
defect listed above passed validation. The validator checks structural
well-formedness, not runtime behavior. Do not treat a green validate run as
evidence that capture works.
