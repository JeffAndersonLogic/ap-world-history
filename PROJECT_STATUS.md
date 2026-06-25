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

## Unit 8 — Cold War and Decolonization

### Topic 8.1 — Setting the Stage for the Cold War and Decolonization (built 2026-06-24)

| Deliverable | File | Status |
|---|---|---|
| Lesson shell | `unit-8/lesson-8-1-cold-war-stage.html` | DONE |
| Topic data | `assets/data/lesson-8-1-cold-war-stage.js` | DONE |
| Renderer config | `assets/data/lesson-8-1-renderer-config.js` | DONE |
| First & 10 reading | `unit-8/first-and-10-topic-8-1-cold-war-stage.html` | DONE |
| First & 10 capture wrapper | `unit-8/first-and-10-topic-8-1-cold-war-stage-capture.html` | DONE |
| BeInTheRoom scenario | `beintheroom/unit-8/empire-accounts.html` | DONE |
| Unit 8 index link | `unit-8/index.html` (Topic 8.1 card href updated) | DONE |

**BeInTheRoom scenario frame:** "caught between superpowers" — London, February 1947, PM Attlee's cabinet facing simultaneous crises in India, Greece/Turkey, and Palestine. Decision points require reasoning from 1947 knowledge (no hindsight framing). Continuity hooks to Topics 8.5–8.6 (Nehru, Nkrumah).

**Step 0 gate:** PASS — premise directly enacts KC-6.2.II (imperial exhaustion → dissolution of empires) and KC-6.2.IV.C.i (superpower balance of power shift). All four decision options exercise Governance/state-formation pairs from the CED thematic focus.

### Topic 8.2 — The Cold War (built 2026-06-25)

| Deliverable | File | Status |
|---|---|---|
| Lesson shell | `unit-8/lesson-8-2-the-cold-war.html` | DONE |
| Topic data | `assets/data/lesson-8-2-the-cold-war.js` | DONE |
| Renderer config | `assets/data/lesson-8-2-renderer-config.js` | DONE |
| First & 10 reading | `unit-8/first-and-10-topic-8-2-cold-war.html` | DONE |
| First & 10 capture wrapper | `unit-8/first-and-10-topic-8-2-cold-war-capture.html` | DONE |
| BeInTheRoom scenario | `beintheroom/unit-8/bandung-table.html` | DONE |
| Unit 8 index link | `unit-8/index.html` (Topic 8.2 card href updated) | DONE |

**BeInTheRoom scenario frame:** "The Bandung Table" — Bandung, Indonesia, April 1955, as a senior advisor in Sukarno's foreign ministry during the first Afro-Asian Conference (29 nations). Decision points: formal non-aligned bloc vs. loose principles forum; acceptance of superpower aid with conditions; how hard to condemn all colonialism (including Soviet). Four roles: Indonesian Foreign Ministry advisor, Indian Panchsheel delegate (Nehru), West African Pan-African observer (Nkrumah continuity hook), Pakistani military diplomat (SEATO-aligned, creates tension).

**Step 0 gate:** PASS — premise directly enacts KC-6.2.V.B (groups and individuals, including the Non-Aligned Movement, opposing and promoting alternatives to existing orders). The Bandung setting cannot be transplanted without changing the CDI theme it exercises.

### Topic 8.3 — Effects of the Cold War (built 2026-06-25)

| Deliverable | File | Status |
|---|---|---|
| Lesson shell | `unit-8/lesson-8-3-effects-cold-war.html` | DONE |
| Topic data | `assets/data/lesson-8-3-effects-cold-war.js` | DONE |
| Renderer config | `assets/data/lesson-8-3-renderer-config.js` | DONE |
| First & 10 reading | `unit-8/first-and-10-topic-8-3-effects-cold-war.html` | DONE |
| First & 10 capture wrapper | `unit-8/first-and-10-topic-8-3-effects-cold-war-capture.html` | DONE |
| BeInTheRoom scenario | `beintheroom/unit-8/luanda-decision.html` | DONE |
| Unit 8 index link | `unit-8/index.html` (Topic 8.3 card href updated) | DONE |

**BeInTheRoom scenario frame:** "The Luanda Decision" — Luanda, Angola, November 1975, as a senior advisor within the MPLA leadership circle with independence day approaching and South African forces advancing from the south, FNLA from the north. Three decisions: accept Cuban troops and Soviet arms; pursue quiet U.S. recognition talks; appeal to the OAU and Bandung-era principles. Four roles: MPLA Political Commissar, Angolan Nationalist Intellectual, Cuban Liaison Officer, OAU Secretary-General Liaison.

**Step 0 gate:** PASS — premise directly enacts KC-6.2.IV.D (proxy wars between and within postcolonial states in Africa) and LO C (compare how U.S. and Soviet Union sought to maintain influence). The Angolan Independence Day setting is the moment where both superpowers' methods are simultaneously visible and the student must reason through the comparison from the inside. Continuity hook to Bandung 1955 (Topic 8.2): the reflection prompt explicitly asks whether the non-alignment promise survives contact with a real war.

---

### Open Revision Tasks (from the audit)

- **DRIFT — `beintheroom/unit-1/khmer-court.html` (Topic 1.3):** Its central dilemma is a generic state-priorities allocation (temples / military / agriculture / trade) that is structurally identical to `song-court.html` and fails the transplant test; Topic 1.3's listed CDI-G / GOV-H pairing (belief systems shaping state power) drives only one of four options, and its reflection prompt is generic. Recommended: retire it as superseded by `angkor-council.html` (which the lesson actually links), or redesign its decision points and reflection around religion-as-state-power per LO G/H.
- **Discrepancies flagged in the report (not fixed):**
  - D1: Unit 1 renderer configs carry no thematic focus / LO blocks (unlike Unit 7 configs).
  - D2: `assets/data/lesson-1-6-europe.js` mislabels its Europe LO as "Unit 1 Learning Objective H" (H belongs to Topic 1.3).
  - D4: Three orphaned scenario files (`abbasid-fragmentation`, `khmer-court`, `cahokia-council`) are linked from no lesson; the BeInTheRoom hub page lists only `song-court`.
  - D5: 23 BeInTheRoom scenario files referenced by Unit 2–7 lesson data/configs do not exist yet (broken Module 09 links); each must clear Step 0 when built.
