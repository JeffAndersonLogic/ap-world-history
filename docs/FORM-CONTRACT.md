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

**Identity was half a text box.** The student typed their own name on every
submission, so `Jaden R.`, `jaden r` and `Jaden Ramirez` were three students to
any analysis. The form did also collect a verified Google account, which the
repo's field map never showed because that map only recorded the six *prefilled*
entry IDs and email collection is not one. So the rows are attributable by email
after all, better than this document originally claimed, and the typed name
remains useless as a join key. Corrected 2026-08-07 from the live form's
Settings, where Collect email addresses reads "Verified".

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

## THE LIVE STATE, OBSERVED 2026-08-07

This section exists because the rest of this file used to say the ownership of
the Google artefacts was never documented. That is no longer true. What follows
was read off the teacher's own Google account, not inferred from code.

### The form

**BeHistorical Student Response Capture**, form id
`1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw`, owned by
janderson@zcs.k12.in.us.

- **30 responses** on the Responses tab.
- **Collect email addresses: Verified**, so every row carries a signed-in school
  Google account. These are attributable student records and need a deliberate
  disposition, not deletion alongside the script.
- Allow response editing: off. Limit to 1 response: off.

A second form id, `1FAIpQLSfBMy2v9tjXnA9aWZLwBjMdl-snJc2RWljKUxgRwUNxYQPq_g`,
appears in the git history inside the dead `behistorical-lesson-renderer.js`.
It returns "the file you have requested does not exist" and is not in the
account's Forms list. Already gone, no action.

### The Apps Script projects

Two, neither of which the repository named:

| Project | Trigger | Observed state |
|---|---|---|
| `BeHistorical Script ReBind` | `onFormSubmit` | Completing. Fired seven times on 2026-08-06, most recently 3:03 PM |
| `BeHistorical Teacher Hub Analysis` | `onOpen`, simple | Failing on every run |

`Teacher Hub Analysis` is the `Code.gs` that was in
`tools/teacher-hub/google-apps-script/`; see `docs/TEACHER-HUB.md`.
**`Script ReBind` was never in this repository at all** and its purpose is
unknown. It runs on every form submission. Do not assume it is inert because the
repo has no copy of it.

The executions log is the thing worth internalising: the form was **still taking
submissions the day before the retirement**. Two live collection channels was not
a hypothetical risk in the design review, it was the actual state.

### Shutting it down, in order

Order matters. Only the first step stops new data arriving.

1. **Stop the form.** The toggle is on the **Responses** tab, not Settings, which
   is where everyone looks first. Switch **Accepting responses** off.
2. **Delete the trigger.** https://script.google.com/home/triggers . Archiving a
   deployment does not remove a trigger, and `onFormSubmit` keeps firing until it
   is deleted or the form stops.
3. **Archive the web app deployments.** For each project,
   **Deploy → Manage deployments → Archive**. This is the step that closes the
   unauthenticated endpoint serving existing named responses. Deleting code does
   not do it.
4. **Export the Sheet** to district Drive, sharing owner-only, and record the
   date and the disposition of the 30 rows.

### Verifying it actually stopped

Three checks, weakest to strongest:

- **Manage deployments** with the filter set to Archived. Shows intent, not effect.
- **https://script.google.com/home/executions** the next day. No new rows means
  nothing is running. Absence over a day beats a dialog's description.
- **Open the archived deployment URL in a private window.** An archived web app
  returns a Google error page. If it returns JSON, it is still live. This is the
  only check that tests the thing you actually care about.

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
