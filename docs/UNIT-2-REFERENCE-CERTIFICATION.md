# Unit 2 Reference-Standard Certification

**Scope:** AP World History: Modern, Unit 2 — Networks of Exchange, Topics 2.1–2.7  
**Governing source:** `CED - MASTER v.1.1 - Working Copy.pdf`  
**Purpose:** Record the post-repair human instructional review that follows the second-pass ecosystem audit. The original audit remains intact as the pre-repair baseline.

## What this certifies

This document does **not** claim blanket “College Board compliance.” It certifies that Unit 2 has been rebuilt and reviewed against BeHistorical's locked Unit 2 instructional-content contract and reference-standard architecture.

The reference standard has five independent checks:

1. **CED Coverage** — every locked Unit 2 learning-objective/key-concept development and selected evidence anchor required by the BeHistorical contract is represented.
2. **Instructional Coherence** — First & 10, renderer modules, Deep Reading/eBook, checkpoints, Evidence Lab, and BeInTheRoom reinforce the same topic spine rather than reviving stale topic architecture.
3. **Assessment Alignment** — checkpoint and skill work require the evidence/reasoning the topic claims to teach.
4. **Technical Integrity** — repository validation, generated-artifact checks, browser contracts, capture wiring, accessibility, and related CI gates must pass on the exact merge candidate.
5. **Human Instructional Review** — the topic story, emphasis, evidence balance, and module roles are reviewed for classroom coherence beyond simple keyword presence.

## Human instructional review — PASS

The final review was conducted after the downstream repair, including a specific check for the failure mode that triggered this project: a repaired canonical lesson being silently overridden by stale renderer/module content.

| Topic | Final instructional spine | Human review |
|---|---|---|
| 2.1 Silk Roads | Luxury demand + commercial/transport systems + supporting political stability → lower trade friction → greater volume/range → trading-city growth + productive response | **PASS** |
| 2.2 Mongol Empire | Build → fragment/decline → connect → transfer, including Greco-Islamic medical knowledge, numbering systems, and Uyghur-script adoption | **PASS** |
| 2.3 Indian Ocean | Monsoon knowledge + compass/astrolabe/larger ships → expanded exchange → state growth + diasporas + Zheng He | **PASS** |
| 2.4 Trans-Saharan | Camel/saddle + caravan organization + complementary demand → increased trade volume/range → Mali facilitates and profits | **PASS** |
| 2.5 Cultural Consequences | Cultural/technological diffusion → changing urban fortunes → more written travel accounts | **PASS** |
| 2.6 Environmental Consequences | Connectivity moves living things: crop diffusion + pathogen diffusion | **PASS** |
| 2.7 Comparison | Compare environment, transportation, commercial practices/finance, demand/productive capacity, states/cities, and diffusion using balanced evidence | **PASS** |

## Evidence Lab final review

The final human pass found one additional architecture problem after the automated coherence gates were already green: legacy Evidence Lab assignments could still override repaired topic framing in several renderer configs. That was corrected before certification.

- **2.1:** evidence remains centered on Silk Roads geography and commercial systems.
- **2.2:** Evidence Lab now explicitly includes the three required transfer anchors alongside empire/trade evidence.
- **2.3:** Evidence Lab now makes state growth, diasporic communities, and Zheng He visible alongside monsoon and maritime evidence.
- **2.4:** strong existing Mali/caravan/gold/state evidence was preserved without a second stale Evidence Lab assignment overriding the repaired task.
- **2.5:** Evidence Lab now includes urban fortunes and written travel accounts rather than reducing the topic to diffusion alone.
- **2.6:** crop evidence and pathogen evidence are both visible, including bananas, new rice varieties, citrus, and bubonic-plague connectivity.
- **2.7:** the comparison Evidence Lab uses balanced evidence from multiple networks and the repaired comparison categories.

Where a card presents a CED historical-development anchor rather than a historical object, it is explicitly labeled as a CED-aligned paraphrase and not presented as a primary-source quotation. Text-evidence rendering is loaded only after the topic renderer config has authored the evidence pool, so the card module fills declared text cards instead of silently replacing the gallery.

## Other final human checks

- Topic 2.1 political stability remains a supporting enabling condition, not a replacement for the economic spine.
- Topic 2.2 plague is not allowed to replace the required transfer development.
- Topic 2.5 crop diffusion no longer displaces city fortunes and traveler accounts.
- Topic 2.6 does not collapse into a plague-only lesson; crop and pathogen branches recur across the ecosystem.
- Topic 2.7 has a wired comparative BeInTheRoom scenario using the standard reflection/capture contract.
- The intentionally rewritten Unit 2 First & 10 set is protected by an exact canonical-source hash, so future edits require a new review rather than silently redefining the approved baseline.
- Deep Reading/eBook content is generated from canonical topic modules, not hand-edited downstream pages.
- The Topic 2.1 luxury-demand visual now uses a local, explicitly labeled instructional reconstruction rather than a missing or misleading asset.

## Technical-integrity rule

**This certification is valid for merge only when the required GitHub CI gates are green on the exact PR head.** In particular, the Unit 2 CED contract, Unit 2 instructional-coherence contract, and the complete Validate workflow (offline/structure plus browser contracts) must all pass. A later content change invalidates the technical-integrity portion until those checks run again.

## Scaling rule

Unit 2 is the reference implementation for the remaining course. Foundations and Units 1 and 3–9 should be audited against this architecture before broad rewriting. Automation is a regression tripwire for coverage, traceability, and wiring; human instructional review remains required for emphasis, teachability, evidence quality, and enrichment boundaries.
