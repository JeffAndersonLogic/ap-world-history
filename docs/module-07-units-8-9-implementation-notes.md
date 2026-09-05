# Module 07 Units 8–9 Implementation Notes

## Architecture

This batch reuses the existing scoped Module 07 runtime introduced for Units 5–7:

- `assets/js/module-07-evidence-runtime.js`
- `assets/data/module-07-evidence-unit-8.js`
- `assets/data/module-07-evidence-unit-9.js`

The shared course renderer is unchanged.

The runtime runs before `behistorical-topic-renderer-v1.js`, replaces the active lesson's Evidence Lab prompt and `lesson.images` with the topic-specific evidence pool, and lets the normal renderer build Module 07 from that data. This preserves the lesson template while fixing the underlying renderer contract: visible Module 07 evidence comes from `lesson.images`.

## Late-course design

Units 8–9 are intentionally less scaffolded than early-course labs. The runtime's late-course task requires students to:

1. build or test a defensible claim with at least two cards;
2. explain why each card is relevant;
3. decide whether evidence corroborates or complicates other evidence;
4. identify a limitation;
5. reject evidence that does not fit instead of forcing it into the argument.

Individual topic prompts add the historical reasoning move appropriate to the CED objective: comparison, causation, contextualization, continuity/change, extent, or qualification.

## Evidence-card contract

Every card includes:

- a descriptive title;
- an explicit evidence/source/type and date or period label;
- at least two observable evidence details;
- an analysis question that requires inference, claim fit, comparison, limitation, or qualification.

Cards do not ask students to perform full HIPP analysis. That remains Module 08's job.

## Topic 8.9 exception

Topic 8.9 is a documented custom six-module capstone. Its base data still contains some legacy `evidenceLab`-shaped synthesis data, but the custom renderer does not expose the standard Module 07 surface. This batch deliberately leaves that architecture alone and does **not** wire the Unit 8 Evidence Lab registry/runtime into the 8.9 lesson shell.

## Unit 9 generation

Topics 9.4–9.9 are deterministic outputs of `scripts/build-unit9.js`, which uses Topic 9.3 as the lesson-shell template. The implementation therefore:

1. wires Topic 9.3 to the Unit 9 registry/runtime;
2. runs `node scripts/build-unit9.js`;
3. commits the regenerated 9.4–9.9 shells;
4. relies on the existing reproducibility test to prevent future drift.

Hand-editing the generated 9.4–9.9 shells is not the durable path.

## Permanent guardrail

`scripts/check-module07-units8-9.js` verifies:

- all 17 active topics have registry entries;
- every entry has a substantial late-course prompt;
- every active topic has at least five evidence cards;
- every card has explicit provenance/type, at least two evidence details, and a substantive analysis question;
- every active lesson shell is wired to its unit registry and the shared Module 07 runtime;
- Topic 8.9 remains unwired as the intentional capstone exception.

The checker is part of the normal offline suite in `scripts/run-tests.js`.
