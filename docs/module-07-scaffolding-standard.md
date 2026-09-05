# Module 07 Evidence Lab Standard

## Purpose

Module 07 is where students practice turning historical material into usable evidence. It sits after the AP Skill Builder and Checkpoint 1, and before Primary Source analysis.

The core sequence is:

**evidence object -> observation -> inference -> claim**

For later units, add a fifth move when appropriate:

**evidence object -> observation -> inference -> claim -> limitation**

Module 07 should not become another content summary, another checkpoint, or a duplicate of Module 08 HIPP/source analysis.

## A-grade rubric

Score each category 0-2. An A-grade Evidence Lab scores at least **12/14 with no zero**.

1. **Authenticity** — Students work with an artifact, image, map, quantitative record, material object, or clearly labeled secondary reconstruction rather than only a paragraph that tells them what happened.
2. **Coverage** — The evidence set gives students access to the major learning target(s) of the topic.
3. **Inference** — The student must decide what the evidence suggests. Captions supply identification/provenance, not the historical conclusion.
4. **Claim connection** — The response requires students to explain how evidence supports a historical claim.
5. **Choice/comparison** — Students have enough meaningful evidence choices to select, pair, or compare evidence rather than being forced into one predetermined answer.
6. **Scaffolding** — The task makes the reasoning sequence visible at the appropriate point in the course.
7. **Module distinctiveness** — Module 07 does evidence work that is meaningfully different from Checkpoint 1 and Primary Source.

## Evidence-card writing rules

Each card should contain:

- a descriptive title;
- a working source/image link;
- a short caption that identifies the object, date/context, and evidence type;
- a prompt that asks the student to **notice** a concrete detail before making an **inference**;
- a question about what claim the evidence can support;
- where useful, a limit such as what the source cannot prove alone.

Do not write captions such as "This proves that..." or "This is evidence that..." when that statement performs the student's inference for them.

When an image or map is modern, reconstructed, or later than the period, label it explicitly. Students should know the difference between contemporary evidence, later memory, and secondary reconstruction.

## Progressive release

### Units 1-2: high support

- Usually 4-6 curated evidence choices.
- Explicit observation -> inference -> claim language.
- Balanced evidence categories.
- Response prompts can explicitly ask for a limitation.
- Comparison topics should provide balanced evidence from each region/network being compared.

### Units 3-4: moderate support

- Usually 4-6 evidence choices.
- Continue to require observation and inference, but reduce sentence-frame style guidance.
- Require students to choose which evidence best supports a claim and explain why.
- Introduce more deliberate evaluation of evidence limits and competing interpretations.

### Units 5-6: guided independence

- Less procedural wording.
- Students choose evidence and reasoning category with fewer cues.
- Evidence sets can include quantitative, political, economic, visual, and textual traces.

### Units 7-9: AP independence

- Students should be able to identify relevance, limitations, corroboration, and claim fit with minimal procedural guidance.
- Evidence sets should increasingly resemble the decisions students make in SAQ/DBQ/LEQ preparation.

## Module boundaries

- **Module 05 — AP Skill Builder:** learn the historical reasoning move.
- **Module 06 — Checkpoint 1:** apply content/reasoning to a short response.
- **Module 07 — Evidence Lab:** turn historical material into evidence for a claim.
- **Module 08 — Primary Source:** analyze a document/source, including context and perspective where appropriate.

## Renderer contract

The current Unit-topic renderer builds Module 07 cards from `lesson.images`. The `evidenceLab.items` arrays that exist in several older topic data files are not, by themselves, rendered as Evidence Lab cards.

Therefore, an Evidence Lab is not complete merely because `evidenceLab.items` contains rich prose. The active combined lesson object must provide a usable `images` array with evidence-card prompts. Renderer configs may amend/replace `lesson.images` when the base data does not yet meet this standard.

This contract should be preserved or deliberately migrated in a future shared-renderer refactor; do not assume an item bank visible in the data file is visible to students.