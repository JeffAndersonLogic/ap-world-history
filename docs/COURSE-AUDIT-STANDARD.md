# BeHistorical Course Audit Standard

This generalizes the Unit 2 reference implementation without pretending that automation can replace instructional judgment.

## Five required dimensions

1. **CED Coverage** — the topic's governing learning objectives, historical developments, and required/illustrative evidence are represented in the canonical runtime model.
2. **Instructional Coherence** — renderer-owned modules, First & 10, Deep Reading, Evidence Lab, AP Skill Builder, checkpoints, BeInTheRoom, Socrates/review, and generated artifacts reinforce the same topic story.
3. **Assessment Alignment** — checkpoints and skill work require the knowledge and reasoning promised in the learning targets and success criteria.
4. **Technical Integrity** — lesson shells, source/generated relationships, links, persistence, accessibility, and browser contracts remain intact.
5. **Human Instructional Review** — a teacher verifies hierarchy, pacing, Big Rocks, examples, readability, cognitive load, and whether enrichment supports rather than displaces the CED core.

## Calibration rule

Before generalizing a new audit rule, it must first reproduce the known-good Unit 2 reference implementation without false repair/rebuild flags. Then test it against at least one near-term topic and one substantially later topic with a different instructional shape. The initial outside calibration topics are 3.2 and 8.4.

## Diagnostic vs. certification

scripts/audit-course.js is a **diagnostic**. It is allowed to over-flag a topic for review, but it must not silently certify CED accuracy from self-referential repository metadata. A topic becomes reference-standard certified only after:

**CED Coverage PASS -> Instructional Coherence PASS -> Assessment Alignment PASS -> Technical Integrity PASS -> Human Instructional Review PASS**

## Severity

- **REBUILD** — multiple structural/contract failures.
- **REPAIR** — one major break or several coherence/source-of-truth risks.
- **REVIEW** — architecture is present but drift or traceability deserves human/CED inspection.
- **CLEAN** — no automated structural flags; not equivalent to instructional certification.

## Efficiency rule

Use the course-wide diagnostic to identify where reasoning time belongs. Do not deep-audit every generated surface equally. The initial deep audit is now complete for Units 1 and 3–9, with Unit 2 as the reference control. During repair, prioritize topic-role and assessment mismatches, then lock each repaired unit with CED/coherence contracts.
