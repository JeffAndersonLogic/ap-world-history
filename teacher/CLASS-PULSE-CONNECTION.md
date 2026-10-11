# BeHistorical Class Pulse — read-only connector (development only)

The module `teacher/class-pulse-reader.js` provides an authenticated, topic-scoped Firestore **read** adapter for existing response backups. It is intentionally not connected to any live teacher page and not deployed to production. No new Firebase collection, student identifier, teacher permission, or AI provider is introduced.

## Privacy and integrity requirements

- **Production is untouched.** This working branch has not altered the student sync transport or the deployed Firestore rules.
- **Authentication and security are mandatory.** The caller supplies an ID token for an approved staff account; the Firestore server rules remain the authorization boundary.
- **Random-looking IDs are not anonymous.** Existing Firebase Authentication UIDs are pseudonymous. The adapter generates local display labels like `Student 01` and keeps UIDs in memory for drill-down, not analytics export.
- **No external AI or secondary storage.** The module makes no requests to an AI provider, stores nothing in browser local/session storage, and does not log student writing.
- **Do not interpret backups as submissions.** A snapshot can be an unfinished draft. `completionState: backup-snapshot` explicitly states the limitation. Canvas submission is separate.
- **Section filters are not security.** The current proposed teacher reader rule grants tenant-wide read access; `sectionId` is student-device-supplied. A UI filter cannot enforce teacher-to-section access. Resolve the scope before publication.
- **No Firestore writes.** Firestore REST `:runQuery` uses HTTP POST to submit a *read query*; no document write endpoint is used.
- **Costs are bounded by teacher use.** Explicit per-topic queries are preferred over always-on listeners until actual read consumption is measured.

## Development test

Run `node scripts/test/class-pulse-reader.test.js` from the repository root. It uses synthetic responses and mocks the REST endpoint.

## Integration checklist

1. Confirm which staff accounts and which record scope are authorized for the pilot. The working branch currently contains exact staff addresses for Jeff Anderson and Mike Kelly, but grants tenant-wide reads.
2. Run Firestore rules emulator tests and inspect the complete ruleset before publishing teacher-read permissions.
3. Build a teacher-only sign-in view using Google Workspace authentication with in-memory persistence, clear sign-out, and no analytics.
4. Consume `makeReader({projectId, tenantId, getToken, fetchImpl}).readTopic(topicKey, optionalSectionId)` and show snapshot availability separately from semantic analysis.
5. For actual Class Pulse understanding bands, add a separately reviewed, district-approved interpretation service and calibrate against teacher judgments. Do not send real student writing to an external model before that processing is explicitly acknowledged.
6. Never deploy teacher-facing live data or changes to student sync as part of a synthetic demo build.

This file is an integration boundary, not a production-ready Class Pulse.


## Current dashboard page (development)

`teacher/class-pulse.html` now contains a responsive, self-contained Class Pulse interface in two explicitly separated modes:

- **Fictional demo:** 48 authored sample records, four broad understanding bands, checkpoint-specific must-haves, clickable criterion heat map, response arrival simulation and individual response drill-down. The heat-map ratings are fixture labels, not derived from real students or a semantic AI model.
- **Teacher Firebase read:** a teacher-initiated Google Workspace sign-in and authenticated Firestore `:runQuery` read via `class-pulse-reader.js`. It shows genuine checkpoint backup snapshots and individual texts when authorized, but all semantic bands remain *not analyzed*. No provider receives the writing except Firebase itself.
- **Optional local period mapping:** reuse the existing X-Ray roster parser through a Firebase Authentication users export plus a Canvas gradebook CSV. The files are parsed in browser memory; names and emails are discarded by the roster join and files are cleared from inputs. They are not uploaded.
- **Preview safety:** with JavaScript blocked, the page exposes only a static fictional response archive. Real student records never appear in static markup.
- **Live status:** the page is on a working Git branch, not on `main`, and the proposed teacher reader permissions have not been deployed by this work. A direct download is adequate for demo, but live Google sign-in should be tested from an authorized HTTPS origin; iOS sign-in was already a known issue in the student sync setup.
- **Current scope:** Topic 2.3 is the complete offline example. On the hosted course site, the teacher page loads the generated skills map for broader topic prompts and criteria. Additional topics have not yet been semantic-calibrated.

The read adapter returns latest backups only, **not** Canvas submissions or historical revisions. Classroom understanding ratings cannot responsibly be inferred from word counts or topic terminology alone. Actual automated semantic classification requires calibration and confirmation of the permitted data processing path.

### Tests

- `scripts/test/class-pulse-reader.test.js`: synthetic REST adapter shapes, read transport and confidence parsing.
- `scripts/test/class-pulse-page-contract.test.js`: UI/privacy contract and five deliberately broken negative controls.
- `scripts/test/class-pulse-page.browser.test.js`: demonstrated mode, drill-down, mock Firestore read, no semantic inference in live mode, 320px layout, and script-disabled fallback.

The new tests are registered in `scripts/run-tests.js`. Browser CI must run to prove the committed test is green; local QA of the standalone file was also performed with Chromium.
