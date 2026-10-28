# SkillLens successor: first production release

Owner: Jeff Anderson. Class Pulse is the working screen title, not a settled
commercial product name. Scope: one verified class, Topic 2.3 Checkpoint 1.
Retain the heatmap. Spark/no billing. No changes to the course domain.

This is a release candidate, not a claim of live deployment or AI accuracy.
The development branch is `build/class-pulse-production-20261013`, based on main
`7b7cd6c598d70f4bd4967cbe0a2b9d49b262d6b5`. It includes the synthetic foundation
and preserves the newer Topic 3.3/3.4 image uploads from main.

The live work checklist is the private Notion page:
https://app.notion.com/p/3f8315889115819a9e25d5bcafdc71e5 .
Existing district scope decision:
https://app.notion.com/p/3f6315889115819dbaaaef1f58b67cf6 .
Existing scorecard decision:
https://app.notion.com/p/3f63158891158112aae4fd27d287f7e2 .

## Release boundaries

The teacher and submission pages are static application code, suitable for the
existing GitHub Pages deployment. They contain no roster or student writing.
They require authenticated Firestore requests. No new external model service is
connected; the live page explicitly says teacher review mode. Unanalyzed writing
stays unassessed, and an invalid analysis abstains. A teacher can create judgments
and save a decision, but this alone does not prove the promised time savings.

The default class ID is empty. The administrator supplies the verified class
link after provisioning. Changing a URL cannot grant membership. The rules check
Google-verified district identity and the caller's protected class membership.
No email allowlist gives district-wide response access. Students cannot create
membership, read classmates, edit teacher records, or author analysis results.

Baseline `firestore/firestore.rules` and the current backup transport stay intact.
The separate **generated candidate** `firestore/class-pulse.rules` includes that
baseline plus narrowly scoped class collections. Merely merging the frontend
code does not deploy database rules. The special Firebase config exists to make
the rules release an explicit, reviewable operation.

## Data and behavior

Paths begin `tenants/zcs/classes/{classId}`:

| Path | Purpose and writer |
|---|---|
| class document | Active flag and display label; administrator only |
| `teachers/{authUid}` | Authorized teacher role; administrator only |
| `members/{authUid}` | Verified enrollment and display label; administrator only |
| `assignments/2.3-checkpoint-1` | Active checkpoint and canonical contract ID; administrator only |
| assignment `submissions/{authUid}` | Explicit submitted response, revision, server submission time; enrolled author only |
| assignment `analyses/{authUid}` | Revision and response-bound analysis payload; administrative writer only; no provider connected |
| assignment `overrides/{id}` | Append-only teacher judgment, source revision and authenticated actor |
| assignment `decisions/{id}` | Append-only action and response/judgment snapshots with authenticated actor |

Teacher reads use bounded, class/assignment-local requests, with pagination.
More than 5,000 records in any loaded collection fails clearly rather than
silently computing a partial class. The provisional single-class roster tool
accepts 1–100 students. Request failures, denied access, and quota errors never
fall back to fictional data. No Firestore offline cache or student-response
localStorage is introduced. Google sign-in uses memory-only persistence for
these two pages; the existing student-backup session is unchanged.

Only an explicit submission enters the dashboard. The first version uses a
separate submission page: students paste their checkpoint response there, review
it, and select Submit. It says clearly that this does not submit work to Canvas.
There is no automatic import from a potentially shared browser's saved drafts.
This adds a step; count it in the classroom usability evaluation. Integrating
submission into the existing checkpoint module is a later usability improvement
once this path is verified with real school accounts.

Students may revise and resubmit. A server-time update precondition and incremented
revision reject stale second-device writes. Readback confirms a successful save.
Missing and blank responses stay separate. When a revision changes, the prior
analysis and overrides no longer contribute to counts. Old decisions retain the
original evidence. Teacher saves await server confirmation before changing the
heatmap. A timeout is reported as unconfirmed, not success.

## Administrative provisioning, only after scope approval

Needed from the authorized district operator:
- Written scope approval/reference, verified Jeff Firebase Authentication UID,
  one class ID/label, and students' verified Firebase Authentication UIDs/labels.
- Retention/deletion responsibility and the agreed classroom pilot window.
- Administrative Firebase access for rules and roster provisioning. This coding
  environment currently has no signed-in Firebase CLI account.

Keep real roster JSON, credentials, evaluation responses and downloaded reviews
**outside this public repository**. The provisioner refuses a roster file inside
it and never prints the roster. Use a private file with this shape (illustrative
values, not real accounts):

```json
{
  "projectId": "behistoric",
  "classId": "jeff-apwh-pilot",
  "label": "Jeff AP World pilot",
  "approvalReference": "Reference to the district's written scope decision",
  "teacher": {"uid": "VERIFIED_TEACHER_UID", "label": "Jeff Anderson"},
  "students": [{"uid": "VERIFIED_STUDENT_UID", "label": "Roster display name"}]
}
```

1. Verify the candidate's offline, browser, and security jobs. The security job
   runs baseline backup tests and the new class rules against the real emulator;
   a skipped test is a failure. Review the exact combined rules diff.
2. Prepare the roster in a private location. With `firebase-admin` installed,
   `node scripts/class-pulse-provision.js /private/verified-roster.json` prints a
   count-only dry run. Authentication uses the authorized operator's Application
   Default Credentials; never embed an admin credential in browser code or git.
3. With scope approval and credentials, add `--apply` to create the class in an
   **inactive** state. Creates fail if the records already exist; this tool does
   not overwrite or migrate existing data. No legacy response is copied.
4. From the approved commit, deploy reviewed rules explicitly:
   `firebase deploy --only firestore:rules --config firebase.class-pulse.json --project behistoric`.
   Do not deploy the old broad-reader prototype. Verify the active release in the
   console; a repository file is not evidence of deployed rules.
5. Ship the frontend using the repository's working-branch/Validate/main procedure.
   No domain migration. The teacher route is `teacher/class-pulse.html`; the
   student route is `student/checkpoint-submit.html`, both with the same
   `?class=jeff-apwh-pilot` suffix. The assignment is intentionally fixed.
6. Add `--apply --activate` to the provision command only when ready. It first
   compares the stored class, teacher, roster and assignment against the verified
   input, then activates the class. Revoking the teacher or class `active` flag
   removes subsequent data access without deleting student work.
7. In school browsers: Jeff can open the roster; an unassigned staff account is
   denied; a student can submit only their own response; Jeff can inspect it,
   save a correction/decision and reload. Test a resubmission, network loss,
   expired sign-in, and the actual Google popup policy. Verify on the devices
   used in class. Emulated auth is not proof of Workspace configuration.

No production rule deployment, provisioning, activation or live-school-account
verification has been performed by this build.

## Analysis and evaluation gate

The offline command is:
`node scripts/evaluate-class-pulse.js /private/evaluation.json`.
Input declares `split` (`development` or `holdout`), `version`, the canonical
`contract`, submitted `responses`, response-bound `analyses`, and independent
teacher `references`. Each reference includes `responseId`, exact `responseText`,
`contractId`, reviewer identifier and one band per criterion. The harness reports
whole-response exact agreement, criterion confusion matrices, abstentions,
misleading positives among predicted positives and among all evaluated criteria,
and predictions on unjudgeable reference work. It never labels a score as
production readiness. Declared blinding is metadata, not verified independence.

An approved provider, runtime and data-processing arrangement are still required
before real responses go to a model. Firebase Cloud Functions are not part of
this Spark design. No API key belongs in the frontend. Administrative analysis
writers bypass client rules and must implement their own least-privilege access,
response/version checks, validation and operational controls; no such live
writer is authorized or enabled by this candidate.

Proposed evaluation, still requiring Jeff's confirmation: freeze the analysis
version; separate tuning from a blind sample of at least 100 responses; report
80% exact agreement and a maximum 5% misleading-positive proposal with explicit
denominators and uncertainty. At 100 responses, one error is a percentage point;
small samples do not establish broad accuracy. Count abstentions, errors by
criterion, correction time, and cases where teachers disagree. Compare total
review time with Jeff's current workflow. Target under 10 minutes and five
traceable decisions, while recognizing that neither shows learning gains.
Jeff is the primary pilot user; Kelly is not an adoption requirement.

## Rollback and retention

First deactivate the class to stop new class reads and submissions; existing
local lesson drafts and owner-only backups continue. Revert only the frontend
commit if necessary; retain the database records for investigation and the
approved retention policy. Restoring the reviewed baseline rules removes all
new class access and preserves owner-only backups. Check deployed rules after
rollback. Do not delete submitted writing as a rollback shortcut. The district
operator owns archival/deletion; Spark backup/PITR services are not assumed.

## Build and verification

- `node scripts/build-skilllens-pilot.js`
- `node scripts/build-class-pulse.js` (`--check` detects generated-file drift)
- `npm test`
- `node scripts/test/class-pulse.browser.test.js` with Playwright and Chromium
- `firebase emulators:exec --only firestore --project demo-class-pulse --config firebase.class-pulse.json "node scripts/run-tests.js rules --strict"`

Do not run the emulator against a real project. Test fixtures use invented
accounts. The new rules suite proves its checks can fail by loosening teacher
membership, revision checks and immutable review history, then verifies the real
candidate. Browser tests prove a removed persistence call is detected before
checking reload, failed-save rollback, stale judgments and submission readback.
