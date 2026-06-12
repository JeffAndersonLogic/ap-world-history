# BeHistorical — Project Status

> Note: this file did not exist before 2026-06-12; it was created during the BeInTheRoom theme-alignment audit session. Earlier project history is in `git log`.

## BeInTheRoom

### Theme-Alignment Hard Rule (codified 2026-06-12)

The **Step 0 — Theme Alignment Gate** is now codified in [`docs/beintheroom-scenario-blueprint.md`](docs/beintheroom-scenario-blueprint.md), preceding the existing scenario-requirement steps. Before drafting any scenario, the topic's CED thematic focus / learning objective pairs must be stated, and the premise AND decision points must directly enact at least one listed pair. A central dilemma that survives transplant to a different topic without changing the theme it exercises fails the gate. Every future BeInTheRoom build (including the 23 scenarios currently referenced by Unit 2–7 lessons but not yet built) must clear Step 0 first.

### Theme-Alignment Audit (2026-06-12)

Full report: [`docs/beintheroom-theme-audit.md`](docs/beintheroom-theme-audit.md). All nine existing scenarios (all in `beintheroom/unit-1/`) were audited against the Step 0 gate. No scenario HTML was edited.

| File | Topic | Verdict |
|---|---|---|
| `beintheroom/unit-1/song-court.html` | 1.1 East Asia | PASS |
| `beintheroom/unit-1/dar-al-islam-council.html` | 1.2 Dar al-Islam | PASS |
| `beintheroom/unit-1/abbasid-fragmentation.html` | 1.2 Dar al-Islam (orphaned) | PASS |
| `beintheroom/unit-1/angkor-council.html` | 1.3 South & Southeast Asia | PASS |
| `beintheroom/unit-1/khmer-court.html` | 1.3 South & Southeast Asia (orphaned) | **DRIFT** |
| `beintheroom/unit-1/cahokia-council.html` | 1.4 Americas (orphaned) | PASS |
| `beintheroom/unit-1/inca-court.html` | 1.4 Americas | PASS |
| `beintheroom/unit-1/great-zimbabwe-court.html` | 1.5 Africa | PASS |
| `beintheroom/unit-1/feudal-manor.html` | 1.6 Europe | PASS |

### Open Revision Tasks (from the audit)

- **DRIFT — `beintheroom/unit-1/khmer-court.html` (Topic 1.3):** Its central dilemma is a generic state-priorities allocation (temples / military / agriculture / trade) that is structurally identical to `song-court.html` and fails the transplant test; Topic 1.3's listed CDI-G / GOV-H pairing (belief systems shaping state power) drives only one of four options, and its reflection prompt is generic. Recommended: retire it as superseded by `angkor-council.html` (which the lesson actually links), or redesign its decision points and reflection around religion-as-state-power per LO G/H.
- **Discrepancies flagged in the report (not fixed):**
  - D1: Unit 1 renderer configs carry no thematic focus / LO blocks (unlike Unit 7 configs).
  - D2: `assets/data/lesson-1-6-europe.js` mislabels its Europe LO as "Unit 1 Learning Objective H" (H belongs to Topic 1.3).
  - D4: Three orphaned scenario files (`abbasid-fragmentation`, `khmer-court`, `cahokia-council`) are linked from no lesson; the BeInTheRoom hub page lists only `song-court`.
  - D5: 23 BeInTheRoom scenario files referenced by Unit 2–7 lesson data/configs do not exist yet (broken Module 09 links); each must clear Step 0 when built.
