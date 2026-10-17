# Class Pulse: integration and release status

Status: October 17, 2026. This is a synthetic development build, not a live instructional-intelligence deployment.

## Repository audit

- Audited the requested `chatgpt/class-pulse-reader-20261010` head, `3b0210fdfb8f84a3f92c3b78c54458f0f4cfcacb`. Its colors were fixture labels; live mode displayed backup snapshots without semantic interpretation. The adapter used authenticated Firestore REST reads, not writes.
- Based this build on current `main`, `dcabc8429093f2889b6d20203b92fae3b830878c`, rather than merging the older branch over newer course work. Only the Class Pulse UI, reader, and in-memory roster helpers were carried forward. The generated teacher hub adds a clearly labeled synthetic-pilot link through its declared TOOLS registry. Production-source Firestore rules have no teacher-reader grant. The actual deployed rules and current Firebase console billing plan were not inspected.
- The old branch proposed a verified-email allowlist for Jeff Anderson and Mike Kelly that could read the entire tenant. It did not enforce class membership. `class-pulse-scope.rules.test.js` reproduces that permission in an isolated emulator and demonstrates cross-section reads. It also confirms the current source denies those teacher reads and preserves student own-only access. No broad grant was carried into this build.
- Another unmerged branch, `build/class-pulse-production-20261013`, exists. A local checkout at `5581f51748866454dc8064073ac532f0719e2356` contains class-scoped release work and persistent teacher review. It was not used as a production fact or merged into this semantic build; compulsory manual criterion grading is outside the agreed workflow. Reconcile its independently useful provisioning work before any production rollout. The remote branch head was independently rechecked and matches that commit.
- The actual Topic 2.3 skills-map object matches the current `main` version. No lesson, generated skills map, student saving code, Firestore rules, or Firebase deployment configuration was edited.

## Instructional contract

`teacher/class-pulse-engine.js` reads the two prompts, three checkpoint criteria each, and associated learning targets/success criteria directly from `assets/data/skills-map.js`. It preserves their wording. Guidance for interpreting those criteria is separately identified in the contract. Guidance is not a replacement curriculum standard.

The PDF supplied with the handoff was checked for Topic 2.3: monsoon knowledge, compass/astrolabe/larger ships, trading-state growth, diasporic communities, and Ming admiral Zheng He are within the topic. A Unit 2 `ced-source` transcription was not present in the audited development branch. No new unit story or curriculum content was authored from a substitute source.

Known alignment limitations are displayed, not silently repaired:

- Checkpoint 1 is a causes prompt, but its associated targets include a diasporic-community/Zheng He effects target and success criterion. Those remain references and receive no inferred achievement label from this prompt.
- Checkpoint 2 explicitly asks for a diaspora or Zheng He example, but its associated target/success criterion cover state growth only. Its exact checkpoint criteria still cover the full task.
- The two checkpoints are distinct constructs. There is no pre/post growth calculation or cross-lesson proficiency trend. The one chart is an explicitly fictional response-arrival ordering, not an observed chronological classroom history.

## Interpretation engine

`createEngine({provider})` accepts any versioned provider with `interpret({instructions, contract, response, schema})`. The provider receives the question, criterion context and text only: no student UID, section, confidence, timestamps or internal response key. Text can still contain identifying details; minimization is not anonymization.

Each result binds to a SHA-256 revision of exact writing, completion signal, timestamp, full contract and interpretation instructions, and provider/version. Duplicate requests coalesce. A changed response or contract invalidates the cache and any prior teacher correction. Cache and corrections are memory-only; provider errors are retryable and are not cached as successful analysis.

Each criterion returns D / P / N / U, exact response quotations, a short evidence explanation, possible misconceptions, uncertainty, and a review flag. Invalid categories, omitted or duplicate criteria, ungrounded quotes, unsupported positive judgments, and unflagged uncertainty fail closed to gray. Structural validation cannot prove historical correctness or semantic accuracy.

D/P require at least one exact quote. N may reflect an omitted explanation and does not automatically mean a misconception. Unclear or contradictory evidence should be U. Student instructions embedded in writing are untrusted data, never executable instructions. No tools are offered to the model.

All selected records, including gray, stay in criterion denominators. The optional checkpoint summary is transparent shorthand: all D -> D; all N -> N; any U -> U; otherwise P. The criterion heat map remains the detailed signal. Teacher corrections have separate provenance and preserve the original proposal. They are optional, version-bound and session-only; this does not reintroduce compulsory grading.

## Completion eligibility

The engine will interpret nonblank, bounded text only with `synthetic-complete` or `verified-submission`. Missing writing, drafts and unverified backups stay U without a provider call. No word count, confidence score, idle timer or saved timestamp proves completion.

The Firebase reader always marks returned records `backup-snapshot`. The existing live backup schema does not include an authoritative completed-checkpoint receipt. A future completion integration must attest the exact writing version. An old Canvas submission receipt cannot authorize analysis of later in-progress edits. This is an unresolved production dependency; no student-saving workflow was changed to manufacture completion.

## Secure server boundary

- Browser live read selection is disabled and `readLive()` returns before any network call. Teacher-auth entry is also locked. This is a development safety boundary, not a substitute for Firestore rules.
- `server/class-pulse/service.js` accepts fixed catalog IDs for synthetic analysis. Arbitrary posted writing and invented IDs are rejected. `analyzeLive()` always rejects before retrieval or model calls. There is deliberately no environment switch to enable real-writing external processing.
- `prepareLive()` is an integration seam, not a deployed endpoint. It verifies identity, authorizes tenant/class scope through a trusted server roster, checks every returned student's membership plus tenant/course/topic/slot, and checks a version-bound submission receipt using a digest of exact text and snapshot timestamp, so a receipt need not duplicate writing. Student-device `sectionId` and a browser-uploaded roster are not authorization evidence.
- `firebase-boundary.js` defines the required Firebase Admin `verifyIdToken(token, true)` and trusted roster/submission-store interfaces. No Admin database reader, service account, key, privileged collection, or roster-provisioning job was installed. A host and real trusted adapters still need to be chosen and reviewed. A server using Admin database credentials would bypass Firestore rules and must enforce this scope itself; do not treat its SDK as automatic authorization.
- `openai-provider.js` is one optional server-only adapter; the engine does not depend on OpenAI. It uses structured Responses output, `store:false`, an explicit model, timeout, no automatic retries, no tools, and redirection refusal. Credentials come only from the server environment. `store:false` alone is not contractual zero retention or district processing permission. Official schema reference: https://developers.openai.com/api/docs/guides/structured-outputs?api-mode=responses (checked October 17).
- No API key or model is configured in this workspace. A real model call was not made. No real student writing was fetched or transmitted by this work.
- No Firebase plan change, Cloud Function, paid hosting, live listener, background polling, external analytics or student-writing log was added. Current account quotas and plan require console verification before production architecture or cost claims. The local synthetic server has a 100-provider-call process budget and bounded requests; that is not a financial spending cap.

## Run and verify

From the repository root, using Node 18+:

```sh
node scripts/serve-class-pulse.js
```

Open `http://127.0.0.1:8766/teacher/class-pulse.html`. Contract replay is available immediately and never calls an external provider.

For an authorized synthetic-only model test, set `OPENAI_API_KEY` and an explicit `CLASS_PULSE_MODEL` in the server environment, then:

```sh
node scripts/serve-class-pulse.js --model
node scripts/eval-class-pulse.js --model
```

Choose **Configured server model** and **Analyze checkpoints** in the local dashboard. GitHub Pages alone cannot serve the API. Do not put credentials in the page, URL, repository or command history. Model use may incur provider charges; no live billing architecture has been enabled.

```sh
node scripts/eval-class-pulse.js
node scripts/eval-class-pulse.js --review-template
node scripts/eval-class-pulse.js --model --references=docs/class-pulse-reference-review.json
node scripts/test/class-pulse-engine.test.js
npm test
npm run test:browser -- --strict
npm run test:rules:emulator
```

The review template binds every reference to the exact response and contract digest. Fill reviewer/date only after real review. Calibration outputs report confusion matrices per criterion, false Demonstrating proposals, missed Demonstrating cases, analysis errors and disagreements. They never populate an accuracy percentage automatically. Ineligible records do not inflate semantic agreement; invalid eligible analyses remain in the denominator as U.

## Production sequence

1. Choose an authorized provider/account and explicit model. Run the existing 40 synthetic cases through it. Independently review/adjudicate reference labels and disagreements; reserve additional held-out cases. Set acceptable false-positive/false-negative and uncertainty thresholds with teachers, then measure them. Today's replay is not a substitute.
2. Obtain a written district decision on allowed teacher/class read scope and the external provider/data-processing arrangement, including retention, logging and vendor terms. Informal pseudonymous-ID agreement is not permission to transmit writing.
3. Resolve trustworthy class/teacher/student membership and exact-version checkpoint completion. Provision an administrator-owned roster and completion receipts. Reconcile any reusable work on the separate Oct 13 branch; do not widen student-response rules based on a display filter.
4. Choose and secure an approved server host, verify actual Firebase plan/quotas and costs, implement trusted dependencies and bounded analysis-result storage if desired, and test real teacher authentication on an authorized origin and an actual iPad. Recheck the known iOS popup issue rather than assuming desktop emulation verifies sign-in.
5. Run emulator authorization/negative tests, an authorized controlled end-to-end pilot, and calibration/teacher-usefulness checks. Release a separate reviewed change through repository validation. Do not deploy this local synthetic server as a student-data endpoint.

The work is ready for review and provider calibration on a working branch. It is not ready to claim automated classroom understanding in production.
