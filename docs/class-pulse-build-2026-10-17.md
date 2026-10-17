# Class Pulse build report — October 17, 2026

Working branch: `build/class-pulse-engine-20261017`. Base: current `main` at `dcabc8429093f2889b6d20203b92fae3b830878c`. The requested Oct 10 branch was audited at `3b0210fdfb8f84a3f92c3b78c54458f0f4cfcacb` and selectively carried forward. No pull request or production merge is part of this build.

## Implemented

- Provider-independent semantic interpretation pipeline using exact Topic 2.3 prompts and authored checkpoint criteria. Targets and success criteria retain their wording; mismatched coverage is visible rather than silently rewritten.
- Strict result validation: every criterion, allowed category, exact evidence quotes, concise reasons, misconceptions, uncertainty and review flags. Uncertain interpretations cannot remain green. Invalid outputs become gray, with original writing still available.
- SHA-256 response/contract/instruction/provider revisions, request coalescing, bounded in-memory cache, retryable errors, and invalidation of outdated teacher corrections.
- Existing heat-map and student-evidence interface connected to engine results. Gray records remain in denominators. Clickable segments, original responses, exact questions/targets/criteria, reasoning, optional session-only teacher corrections and follow-up marks work.
- Responsive layout checked at 320, 820, 1024, 1180 and 1280 pixels. At 1024×768, all three criterion bars are visible without scrolling. Actual iPad Safari authentication remains unverified.
- Forty authored synthetic cases covering complete/partial writing, paraphrases, spelling, alternatives, misconceptions, contradictions, negation, keyword traps, injection attempts, drafts and missing work.
- Calibration runner with per-criterion confusion/error accounting, false Demonstrating and missed Demonstrating cases, reference review template, exact-response/contract binding, and no automatic accuracy claim.
- Optional server-only OpenAI Responses adapter with explicit model, structured output, no tools, `store:false`, timeout, redirect refusal and no response-text error logging. Other providers can implement the same engine interface.
- A local synthetic API that accepts known catalog IDs, rejects arbitrary writing and unknown IDs, checks host/origin, exposes only an explicit public asset list, and bounds provider calls per process.
- Firebase integration seam for verified teacher tokens, trusted teacher/class/student roster authorization, per-record scope checks and digest-bound completion receipts. Real-student external analysis is unconditionally disabled. Browser live reads are also locked.
- Selection changes during slow analysis re-enable the Analyze control and discard stale results/errors. A synthetic-pilot entry in the generated teacher command center. No student lesson links to this tool.

## Measured results

| Check | Result |
|---|---|
| Synthetic corpus | 40 responses, 20 per checkpoint |
| Contract replay | 34 eligible interpretations; 6 ineligible; 0 errors |
| Real model calibration | Not run; no API key or model configured |
| Independently teacher-reviewed references | 0; template ready for review |
| Semantic accuracy | Not established; no percentage claimed |
| Offline gate | 39 suites passed |
| Dedicated Class Pulse Chromium test | Passed, including server test double and negative control |
| Firestore emulator | 3 suites passed, including cross-section authorization proof |
| Whole-repository browser gate | 26 suites passed; 2 existing deck/template layout suites failed and reproduced on clean main |

Replay and mocked-provider tests prove software behavior, not model interpretation quality. Development examples are not a held-out accuracy benchmark. The read adapter was tested synthetically; no real student work was read or sent to an AI provider.

## Security findings and release blockers

The rejected Oct 10 teacher allowlist demonstrably permits another section's records in the emulator. The current source rules deny teacher reads and retain student own-only access. Neither ruleset nor the deployed production Firebase console was changed by this work. UI class filtering is not authorization.

A saved backup has no trustworthy completion signal. Neither fluent prose, a confidence number, elapsed time nor a database timestamp should be turned into a submission claim. Production needs a verified completion receipt for the exact version analyzed.

Before classroom production:

1. Configure an approved model for **synthetic-only** calibration. Independently review references, resolve disagreements and evaluate held-out cases with agreed error thresholds.
2. Obtain the district's written scope and external-processing decisions, including provider terms and retention. Verify actual current Firebase plan/quotas before choosing infrastructure.
3. Provide authoritative roster membership and completion receipts, and implement reviewed server dependencies. Reconcile useful provisioning work on the separate Oct 13 class-scoped branch without restoring compulsory grading.
4. Select and secure a production host, define approved result retention/cache behavior, test real teacher sign-in on an actual iPad, and complete a controlled authorized pilot.
5. Pass repository release checks on a reviewed production change. The present branch must not be represented as a live classroom deployment.

Detailed architecture, commands and boundaries: [CLASS-PULSE-CONNECTION.md](../teacher/CLASS-PULSE-CONNECTION.md). Provisional reference worksheet: [class-pulse-reference-review.json](class-pulse-reference-review.json). Replay result: [class-pulse-replay-report.json](class-pulse-replay-report.json).

## Adjacent findings

- The whole-repository Chromium sweep reports existing student-deck overflow in Topics 4.4, 4.5 and 4.6, plus template overflow/collision in Topics 3.2 and 4.4–4.6. Separate clean-main runs at the pinned base commit reproduce the deck failures; the template failure is likewise present on unchanged main. Class Pulse does not modify any deck, deck renderer, or deck data. The baseline template run also notes unavailable brand webfonts, so these measurements use fallback fonts in this Chromium environment. These are adjacent findings, not a green whole-repository browser result, and were not silently fixed.
- The existing teacher-index template contains a duplicated opening `section` fragment. The Class Pulse entry follows the generator rather than hand-editing its output; this unrelated defect was not changed.
- Known iOS Firebase popup issues and formal review of deployed student persistence are not proven resolved by Chromium emulation.

## Release verification notes

The working branch is intended for review and calibration. `main`, student persistence and production processing remain unchanged. CI status is reported separately after the branch commit is published; a branch URL alone is not proof of passing checks or deployment.
