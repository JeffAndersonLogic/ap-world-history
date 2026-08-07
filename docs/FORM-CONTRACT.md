# Google Form Capture Contract, RETIRED 2026-08-07

**This pipeline no longer exists.** The Google Form, its prefill contract, the
`BH_FORM` config, and every Submit to Form button were removed on 2026-08-07.
Student work reaches the teacher through Canvas only. See
`docs/CANVAS-CAPTURE.md`.

Nothing in this file describes live behavior. It is kept as the record of why
the form was retired, because the reasons are the design constraints on whatever
replaces it.

---

## WHY IT WAS RETIRED

**It failed silently, twice, and the failures were invisible by construction.**
Prefill matching was character-exact with no error and no log. An en dash
against a hyphen dropped the Topic field on all six Foundations lessons for an
unknown period. A wrong entry ID (`entry.1845180246` instead of
`entry.1818136905`) discarded every Student Response for an unknown period. Both
were found by accident. In each case the form still opened, still submitted, and
still thanked the student.

**Identity was a text box.** The student typed their own name on every
submission, so `Jaden R.`, `jaden r` and `Jaden Ramirez` were three students to
any analysis, and no row could be attributed with confidence.

**It covered 3 of 9 capture points.** First & 10, Checkpoint 1, Checkpoint 2.
Six modules of student writing were never collected at all.

**The analysis layer read a public endpoint.** The Apps Script web app was
deployed as "Anyone with the link" and returned named student responses over an
unauthenticated URL, with the dashboard caching that URL in `localStorage` on a
public GitHub Pages origin.

**Two collection channels split the record.** Once Canvas held the graded work,
a parallel copy in a Google Sheet nobody owned on paper was a liability, not a
backup.

---

## WHAT REPLACED IT

`docs/CANVAS-CAPTURE.md`. Both renderers assemble every response into one
document with a machine-readable record footer; the student pastes it into a
Canvas Text Entry assignment; `scripts/parse-canvas-submissions.js` turns a
Download Submissions folder into a long-format table and an exceptions report.
Identity comes from the Canvas roster. Nothing is dropped silently.

---

## IF YOU ARE THINKING OF WIRING IT BACK UP

Read the failure list above first, then note the guarantees the replacement
provides that the form did not: a denominator that comes from the lesson rather
than from what the student managed to submit, an exception for every response
that should exist and does not, and identity from an SIS-synced roster instead
of a text box.

`scripts/validate.js` enforces the retirement. Its "Google Form retirement and
MagicSchool wiring" section fails the build if a form URL, `BH_FORM`,
`submitToGoogleForm`, `buildGooglePrompt`, or the old config file reappears on
any student-facing surface. `scripts/remove-google-form-capture.js` is the
idempotent cleanup if one does.

**MagicSchool is not part of this.** It was never a capture channel, it is where
students take their thinking to be questioned, and every AI Coach prompt builder
and Open MagicSchool button stays.
