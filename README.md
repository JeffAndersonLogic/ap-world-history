# BeHistorical

BeHistorical is a static AP World History: Modern lesson platform built around a consistent ten-module learning path, evidence-based writing, interactive First & 10 readings, and BeInTheRoom historical decision simulations.

## Current build

- All 71 AP topic lesson stacks are present on disk.
- Unit 9 Topics 9.4–9.9 are built, CED-aligned, and linked.
- 35 non-capstone BeInTheRoom scenarios are connected to lesson modules.
- Foundations includes five complete pre-course topic stacks.
- The repository validator currently reports zero deployment-blocking errors.

Open `index.html` through a local static server to explore the student site. Open `teacher/command-center.html` for the generated project inventory.

## Architecture

Each standard lesson uses:

1. A thin shell in `unit-N/lesson-N-N-slug.html`
2. Topic content in `assets/data/lesson-N-N-slug.js`
3. Runtime amendments in `assets/data/lesson-N-N-renderer-config.js`
4. The shared renderer in `assets/js/behistorical-topic-renderer-v1.js`
5. A standalone First & 10 reading plus a `-capture.html` iframe wrapper
6. An optional BeInTheRoom scenario in `beintheroom/unit-N/`

The required module order and authoring rules are documented in `CLAUDE.md`.

## Local commands

```bash
node scripts/validate.js
node scripts/generate-status-manifest.js
node scripts/build-unit6.js
node scripts/build-unit9.js
node scripts/normalize-student-facing-language.js
```

- `validate.js` checks lesson contracts, form keys, First & 10 wiring, and shell structure.
- `generate-status-manifest.js` refreshes the data used by the teacher command center.
- `build-unit6.js` deterministically rebuilds Topics 6.1–6.8 and the Unit 6 simulations.
- `build-unit9.js` deterministically rebuilds Topics 9.4–9.9 and the five associated Unit 9 simulations.
- `normalize-student-facing-language.js` keeps Canvas guidance and the classroom MagicSchool link consistent.

## Student response flow

BeHistorical is the thinking and drafting space. Google Form capture points are prefilled through `assets/js/behistorical-form-config.js`; students submit assessed work through Canvas. The AI Coach is for questioning, verification, and revision—not answer generation.

## Source alignment

Lesson standards are aligned to the AP World History: Modern Course and Exam Description. Units 6 and 9 were checked against the edition effective Fall 2026. Historical claims and source adaptations should be verified during each topic's content-quality pass before classroom release.
