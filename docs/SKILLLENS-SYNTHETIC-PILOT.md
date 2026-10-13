# SkillLens successor: synthetic pilot foundation

Jeff Anderson is the primary teacher, developer, and pilot owner. This branch
implements the approved synthetic foundation. It is not a live classroom pilot
or a tested AI assessor. It makes no changes to Firestore, authentication,
hosting, billing, or production access. No PR or main-branch deployment is part
of this build.

Development branch: `build/skilllens-synthetic-pilot-20261012`. Based on main
commit `213fce233375d6aa2e60d981c156f4d15db77acf`, incorporating the Topic 4.2
updates that arrived during this build.

## Open and try it

Open `teacher/skilllens-pilot.html` directly in a browser. Everything is inside
that one file. No server, sign-in, internet connection, or API key is needed.

1. Select **Explain two maritime technologies**. Initially four of eight
   interpretable responses show a gap on this criterion.
2. Read Synthetic student 02. The response names a compass and astrolabe but
   does not explain either function. Exact words are highlighted; the
   interpretation is labeled separately. The whole response stays visible.
3. Check **Use this response in my decision**, describe a next step, and select
   **Record decision**. For example: compare a list of tools with an explanation
   of their functions, then ask students to revise their own writing.
4. Try **Change this judgment**. A reason is required. The counts update, while
   the original judgment and the change history remain inspectable.
5. **Download review** preserves the full synthetic set, assignment contract,
   original analysis, teacher changes, and decisions as JSON. Changes otherwise
   last only until this page closes. Re-import is not implemented.

The 12 roster entries include nine authored analyses (one abstains), one
unanalyzed response, one blank submission, and one missing submission. Eight
responses are fully assessable. Criterion denominators can differ after a
teacher reviews only part of a response. None of the samples is a holdout.

## What changed

| Source | Responsibility |
|---|---|
| `assets/data/lesson-2-3-renderer-config.js` | Canonical prompt associations and three pilot criteria. Checkpoint 1 maps only to the causes target; Checkpoint 2 maps to state growth and cultural effects. Student focus text derives from the criterion descriptions. |
| `scripts/lib/skilllens-pilot-contract.js` | Reads the lesson and renderer configuration; binds the exact prompt, targets, criteria, and version with SHA-256. |
| `scripts/lib/skilllens-pilot-fixtures.js` | Explicitly authored synthetic responses and provisional judgments. No keyword scoring or model calls. |
| `scripts/lib/skilllens-pilot-core.js` | Shared evidence validator, criterion judgments, conservative response status, class counts, teacher overrides, and decision snapshots. |
| `teacher/skilllens-pilot/` | Readable HTML, CSS, and UI sources. |
| `scripts/build-skilllens-pilot.js` | Generates the self-contained `teacher/skilllens-pilot.html`. Never hand-edit the generated page. |
| `scripts/test/skilllens-pilot*.js` | Meaningful failure controls and browser workflow verification, registered in the normal test suites. |

The existing Skills Lens page and Socrates spines are regenerated from the
corrected checkpoint configuration. Existing student saves, Canvas parsing,
and Firebase sync are retained. The old prototype branch is not merged.

The established Cinzel, Libre Baskerville, and Montserrat fonts are embedded as
Latin/punctuation subsets for offline use. Their Google Fonts sources and SIL
Open Font Licenses are included in `teacher/skilllens-pilot/FONT-LICENSES.txt`.

Assessment grounding: [College Board CED, effective Fall 2026](https://apcentral.collegeboard.org/media/pdf/ap-world-history-modern-course-and-exam-description-effective-fall-2026.pdf),
Topic 2.3, printed pp. 57–58, LO E/G and KC-3.1.I.A.ii,
KC-3.1.I.C.ii, KC-3.1.II.A.i. The three criteria operationalize the existing
checkpoint; they are not a claim to cover the entire topic or an official AP
scoring rubric. Example mechanisms and teacher actions are authored instructional
interpretations. The provided Topic 5.1 curriculum document is outside this
Topic 2.3 slice and was not used to change it.

## Evidence contract

Each original analysis binds `responseId`, exact `responseText`, `contractId`,
and provenance (`kind`, `author`, `version`). Each criterion judgment contains
`criterionId`, a band, a reason, and exact evidence spans (`start`, `end`,
`quote`; JavaScript UTF-16 offsets). There must be exactly one judgment per
criterion. A positive or partial judgment must include evidence. A quotation
must exactly match the original response substring. A missing criterion,
unknown band, stale prompt or response, duplicate criterion, or invalid quote
causes abstention, not a negative assessment of the student.

Bands are `meets`, `partial`, `not_yet`, and `review`. The response cannot
become `meets` unless every essential criterion meets. Any unresolved essential
criterion yields review. Missing, blank, and unanalyzed work remain separate.
No confidence number is displayed or treated as accuracy.

Exact quotations prove provenance, not sound interpretation. A validator cannot
tell whether an authentic quote supports a historical conclusion. Teacher review
and an independent evaluation remain necessary. A future model adapter must
apply this contract and abstain on ambiguity, unsupported historical claims,
contradiction, or too little writing. Merely passing the schema is not readiness
for live use. Alternative wording should be judged by meaning and historically
defensible mechanisms, never a list of required keywords.

Teacher changes are append-only records bound to the same response text and
assignment. The UI uses the latest change for counts and keeps the authored
original. Decisions preserve full response and judgment snapshots so later
corrections do not rewrite the evidence behind an earlier decision. A teacher
can manually interpret an unanalyzed response. Assessing one criterion leaves
the others unresolved.

## Boundary and next coding task

The page has `default-src 'none'` and `connect-src 'none'`, no external assets,
no browser persistence, and no real-data import. The export is deliberately
marked synthetic. This is compatible with the Spark/no-billing constraint
because it uses no Firebase or paid model service. It is a design and software
foundation, not authorization for a district deployment or external processing
of student writing.

Next task: add a provider-neutral **offline analysis evaluation harness**, using
only synthetic development cases initially. Consume this contract unchanged;
accept a response-bound analysis result; validate exact quotes; record model,
prompt, and rubric versions; emit per-criterion errors and abstentions. Add an
interface for an approved analysis method only after its operating environment,
cost, and data handling are decided. Do not add browser-side API keys.

Before real responses can be connected, resolve:

- Teacher-controlled class roster and assignment identity. Do not trust a
  student-entered `sectionId` or an email allowlist as class membership.
- A class-scoped read path whose rules check authenticated teacher membership;
  a teacher cannot read another class by changing a filter, document ID, or
  query. Students cannot grant membership or move submissions between classes.
- Legacy responses require a verified roster mapping; leave unmapped records
  out of live analysis. No speculative bulk migration.
- District approval for student-data processing, retention, and any provider.
  Spark/no billing stays in force. A design does not grant deployment approval.

Postpone automatic grouping, longitudinal ability labels, automatic grades,
district views, additional assignments, and predictive analytics. Grouping
decisions should remain temporary and tied to the specific response evidence.

## Evaluation gate still outstanding

For the eventual classroom pilot: Jeff, one class, one checkpoint type, four
weeks. Track review opportunities, elapsed time including correction time,
evidence inspected, overrides, and decisions. Compare matched class sets with
Jeff's existing workflow; using a self-built tool alone is not independent
adoption evidence. An optional second teacher is useful later, not a dependency.

Before claiming assessment quality, freeze prompt, rubric, and analysis version;
separate tuning cases from a blind holdout of at least 100 real responses from
multiple assignments/classes when authorized. Have teacher reference judgments
made without seeing tool outputs, including criterion bands and unjudgeable
cases; resolve ambiguous reference labels explicitly rather than forcing them.
Report exact agreement, a band-by-band confusion matrix, abstention rate, and
errors by criterion. Report misleading positives among predicted positives and
also among all evaluated responses; a low overall rate can hide a bad positive
predictive value. Publish denominators and uncertainty intervals. Do not tune
on the holdout and then reuse its score as independent evidence.

The proposed 80% agreement, 5% misleading-positive ceiling, under-10-minute
review, and five traceable decisions are evaluation proposals, not results of
this build. Abstention cannot inflate agreement by quietly shrinking the
denominator. A small sample is a feasibility check, not proof of broad accuracy.
Documented decisions do not establish learning gains; a later study would need
aligned follow-up work and an appropriate comparison.

## Rebuild and verify

```sh
npm run build:skills-map
npm run build:socrates
npm run build:skilllens-pilot
npm test
npm run test:skilllens-pilot
```

The browser test needs Playwright and Chromium; `PW_CHROME` can specify an
installed Chromium binary. `BH_PILOT_SHOTS_DIR` optionally captures responsive
screenshots. The tests first reject deliberately broken quote validation,
essential-criterion aggregation, correction handling, generated content, and
pattern selection, then verify the real implementation. Browser checks cover
quote highlighting, overrides, original preservation, decision export,
coverage states, narrow-screen overflow, local file opening, the network lock,
and recovery from invalid bundled evidence.
