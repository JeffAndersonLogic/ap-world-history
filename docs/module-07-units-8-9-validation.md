# Module 07 Units 8–9 Validation Plan

The Units 8–9 Evidence Lab work is complete only when both pedagogy and repository contracts pass.

## Pedagogical validation

- Audit every active Module 07 against the seven-category standard in `docs/module-07-scaffolding-standard.md`.
- Require **12/14 or higher with no zero** for an A.
- Preserve the Topic 8.9 six-module capstone exception instead of inventing a standard Evidence Lab there.
- Confirm each Unit 8–9 lab behaves as a late-course mini evidence pool: selection, relevance, corroboration/complication, limitation, and claim fit.

## Structural validation

Run:

```bash
node scripts/check-module07-units8-9.js
```

Expected result:

```text
Module 07 Units 8-9 contract: 17/17 active Evidence Labs have substantive evidence pools and live shell wiring; Topic 8.9 capstone exception preserved.
```

## Full offline validation

Run:

```bash
node scripts/run-tests.js offline
```

This includes the Module 07 contract, the repository validator, generated-reading checks, and Unit 9 reproducibility. The Unit 9 reproducibility check is especially important because Topics 9.4–9.9 are generated from `scripts/build-unit9.js`.

## Browser validation

CI runs:

```bash
node scripts/run-tests.js browser --strict
```

The browser job must stay green so the new pre-render registry/runtime wiring does not break lesson modals, lightboxes, confidence controls, Skills Lens, coach prompts, or eBook contracts.

## Merge rule

Do not merge the branch until both required GitHub Actions jobs are green:

- Structure and offline tests
- Browser contracts

After merge, verify that `main` contains the Unit 8 and Unit 9 evidence registries, the permanent checker, and representative wired shells including a generated Unit 9 topic such as 9.4 or 9.9.
