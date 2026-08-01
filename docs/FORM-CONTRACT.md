# Google Form Capture Contract

**Last verified: 2026-08-01**

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

**Prompt ID dropdown** — `foundations-0-first10` through
`foundations-5-first10`, plus `foundations-N-checkpoint-1` and
`foundations-N-checkpoint-2` for N = 0..5. Legacy `f1-*` through `f5-*` options
remain in the list, unused and harmless.

**Skill Focus** — checkbox question. Foundations checkpoints send:
`Argumentation`, `Causation`, `Claims & Thesis`, `Comparison`, `Evidence Usage`.

---

## KNOWN GAPS

**Foundations touchpoints.** Foundations lessons capture First & 10,
Checkpoint 1, and Checkpoint 2. That is the full three-touchpoint allocation.
Map, BeSurreal, AP Skill Builder, Evidence Lab, Socrates AI Coach, and
BeInTheRoom are localStorage-only **by design**. Do not add capture to them.
Three touchpoints is the architectural ceiling, not a starting point.

**BeInTheRoom.** `BeInTheRoom` is a valid Response Type and `beintheroom` is a
valid slug, but no `*-beintheroom` prompt IDs exist on the form and
`autoBuildCaptureUrls()` in the unit renderer does not build a button for it.
The unit renderer's header comment claims otherwise. The comment is wrong.

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
