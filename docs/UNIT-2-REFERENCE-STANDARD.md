# Unit 2 Reference Standard

Unit 2 is the reference implementation for BeHistorical curriculum quality assurance.

## What “aligned” means

BeHistorical now separates five different claims that were previously easy to collapse into one percentage:

1. **CED Coverage** — every required learning objective, historical development, and contracted evidence anchor is represented in the canonical topic model.
2. **Instructional Coherence** — downstream student-facing surfaces reinforce the same topic story rather than reviving stale or adjacent-topic content.
3. **Assessment Alignment** — checkpoints require students to use the knowledge and reasoning named in the topic's learning targets.
4. **Technical Integrity** — generated artifacts, links, module wiring, persistence, accessibility, and browser contracts pass automated validation.
5. **Human Instructional Review** — a teacher-level review confirms that hierarchy, pacing, examples, readability, and enrichment serve the intended lesson rather than merely satisfying token checks.

Automated checks protect the first four categories where code can test them reliably. Human instructional review remains intentionally separate; a passing string/traceability contract is not a claim that prose quality or classroom pacing has been machine-certified.

## Unit 2 topic spines

| Topic | Protected instructional spine |
|---|---|
| 2.1 Silk Roads | luxury demand + commercial/transport systems + supporting stability -> lower trade friction -> greater volume/range -> trading-city growth + productive response |
| 2.2 Mongol Empire | build -> fragment/decline -> connect -> transfer, including Greco-Islamic medical knowledge, numbering systems, and Uyghur-script adoption |
| 2.3 Indian Ocean | monsoon knowledge + compass/astrolabe/larger ships -> expanded exchange -> state growth + diasporic communities + Zheng He |
| 2.4 Trans-Saharan | camel saddle + caravan organization + complementary demand -> increased volume/range -> Mali facilitates and profits from exchange |
| 2.5 Cultural Consequences | cultural/technological diffusion -> changing urban fortunes -> more written travel accounts |
| 2.6 Environmental Consequences | connectivity moves living things: crop diffusion + pathogen diffusion |
| 2.7 Comparison | compare the same categories across networks: environment, transportation, commercial practices, demand/productive capacity, states/cities, and diffusion |

## Module-role contract

A module does **not** need to repeat the entire CED. It needs a defined job in the topic ecosystem.

- **First & 10:** establish the topic's foundation, vocabulary, and causal/problem frame.
- **Content Delivery:** make the teacher-led historical story and Big Rocks explicit.
- **BeSurreal:** create a memorable conceptual confrontation that serves the current topic.
- **AP Skill Builder:** practice the historical reasoning process with topic-valid evidence.
- **Checkpoints:** demonstrate mastery of declared learning targets and success criteria.
- **Evidence Lab / Primary Source:** practice evidence use, sourcing, limitation, and claim support.
- **BeInTheRoom:** apply historical reasoning through a perspective-rich decision or scenario.
- **Deep Reading / eBook:** add depth, nuance, historiographic caution, and enrichment without displacing the CED core.
- **Socrates / review:** reinforce the same topic spine and evidence expectations rather than inventing a parallel curriculum.

Enrichment is allowed and encouraged. It is classified as supporting or enrichment only when it does not displace the protected core or consume another topic's instructional job.

## Automated safeguards

- `scripts/lib/ced-unit2-contract.js` + `scripts/test/ced-unit2-contract.test.js` protect canonical CED coverage at a 100% merge requirement.
- `scripts/lib/unit2-coherence-contract.js` + `scripts/test/unit2-instructional-coherence.test.js` protect cross-surface traceability and checkpoint alignment.
- `scripts/run-tests.js offline` runs both contracts with the repository's existing structural and reproducibility tests.
- Generated First & 10 pages are rebuilt from `scripts/lib/reading-content/unit-2.js` so authored source and student pages cannot silently diverge.
- Unit 2 renderer configs no longer re-inject the stale topic architecture over corrected canonical lesson data.

## Current implementation scope

The second-audit repair has now been applied to all seven Unit 2 renderer configs and all seven First & 10 authored readings. Topics 2.2, 2.5, 2.6, and 2.7 also received targeted Deep Reading repairs where the audit identified required concepts being buried or displaced. Topic 2.7 now has a functioning comparative BeInTheRoom scenario.

The branch should not be certified or merged solely because these edits exist. The final certification sequence is:

**CED Coverage PASS -> Instructional Coherence PASS -> Assessment Alignment PASS -> Technical Integrity PASS -> Human Instructional Review PASS.**

Only after the Unit 2 reference implementation passes that sequence should this QA architecture be generalized to Foundations and Units 1 and 3–9.
