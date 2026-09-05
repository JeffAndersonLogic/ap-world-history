# Module 07 Units 5–7 Validation

This batch is validated through the repository's normal protected-branch workflow.

Required before merge:

1. `Structure and offline tests` passes on the pull request head.
2. `Browser contracts` passes on the pull request head.
3. Unit 6 reproducibility remains clean because the Module 07 script wiring is present in the Topic 6.1 shell template and the generated Topic 6.2–6.8 shells.
4. The Module 07 contract helper `node scripts/check-module07-units5-7.js` is available for a checkout to verify that all 27 registry entries have substantive prompts, at least four evidence cards, provenance/type labels, analysis questions, and live shell wiring.

A local checkout was not available in the connector environment, so the GitHub Actions checks are the authoritative executable validation for this change set.
