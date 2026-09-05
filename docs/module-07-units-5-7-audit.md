# Module 07 Evidence Lab Audit — Units 5–7

## Scope

This audit covers all 27 Module 07 Evidence Labs in Units 5–7:

- Unit 5: Topics 5.1–5.10 (10)
- Unit 6: Topics 6.1–6.8 (8)
- Unit 7: Topics 7.1–7.9 (9)

The benchmark is the course standard in `docs/module-07-scaffolding-standard.md`: an A requires at least 12/14 across authenticity, coverage, inference, claim connection, choice/comparison, scaffolding, and module distinctiveness, with no zero in any category.

## Initial diagnosis

The central problem was architectural as much as pedagogical. Many Unit 5–7 lesson data files contained substantial `evidenceLab.items` text banks, but the shared renderer does not render those items as the student evidence gallery. `renderEvidence()` builds the visible cards from `lesson.images`. In these units, the live `lesson.images` evidence pools were absent or insufficient, so strong hidden content did not translate into a strong Module 07 student experience.

The second problem was developmental. By Units 5–7, students should no longer receive evidence that has already been interpreted for them. The labs need to require evidence selection, relevance judgments, inference, corroboration or comparison, claim construction, and increasingly explicit limitations.

## Refinement model

The revised labs use three unit-specific evidence registries plus a scoped runtime loaded after the topic data/config and before the shared renderer:

- `assets/data/module-07-evidence-unit-5.js`
- `assets/data/module-07-evidence-unit-6.js`
- `assets/data/module-07-evidence-unit-7.js`
- `assets/js/module-07-evidence-runtime.js`

The runtime supplies the active `lesson.images` collection and the topic-specific Evidence Lab prompt. It generates stable branded evidence cards as inline SVG data URIs, avoiding brittle external image dependencies while keeping source type/provenance visible on every card.

The cards deliberately distinguish among primary-source excerpts, legal or treaty records, quantitative records, policy records, institutional records, and clearly labeled secondary reconstructions. Module 07 asks students to use those objects as evidence; Module 08 remains the place for full primary-source sourcing/HIPP work.

## Progressive release

### Units 5–6 — guided independence

Students must:

1. choose at least two evidence cards;
2. decide which historical claim each is useful for;
3. identify a precise detail rather than summarize the whole card;
4. explain the inference connecting detail to claim;
5. identify a limitation or missing piece of evidence.

The lab still gives a focused historical question, but it does not supply the conclusion.

### Unit 7 — AP-independent evidence pools

Students must:

1. build or test a defensible claim using at least two cards;
2. decide which evidence is relevant and reject evidence that is not;
3. explain why each selected piece is useful;
4. determine whether evidence corroborates, complicates, or qualifies other evidence;
5. state a limitation;
6. rank or weigh evidence when the topic calls for causation or significance.

This is intentionally less scaffolded than Units 5–6.

## Topic audit and final status

### Unit 5

| Topic | Evidence emphasis | Final grade |
| --- | --- | --- |
| 5.1 Enlightenment | Locke, Wollstonecraft, Encyclopédie circulation, de Gouges; universalism and its limits | A |
| 5.2 Nationalism and Revolutions | American, French, Haitian, and Latin American revolutionary evidence | A |
| 5.3 Industrial Revolution Begins | steam, factory organization, urbanization, coal/transport geography | A |
| 5.4 Industrialization Spreads | Japan, Germany, Russia; state action, infrastructure, market integration | A |
| 5.5 Technology of Industrialization | steel, telegraph, Suez, electricity; mechanism of technological change | A |
| 5.6 Government and Society | Meiji, Iwakura, Witte, Muhammad Ali; state-led industrialization | A |
| 5.7 Economic Developments and Innovations | limited liability, integrated firms, banking, exchanges | A |
| 5.8 Reactions to Industrial Economy | socialism, factory reform, unions, social insurance | A |
| 5.9 Society and the Industrial Age | urbanization, gender/child labor, public health, class | A |
| 5.10 CCOT in the Industrial Age | factory production, connectivity, hierarchy, agrarian continuity | A |

**Unit 5 result: 10/10 A.**

### Unit 6

| Topic | Evidence emphasis | Final grade |
| --- | --- | --- |
| 6.1 Rationales for Imperialism | race/mission ideology, economic interpretation, interstate competition | A |
| 6.2 State Expansion | India, Congo, Taiwan, Hawai‘i; varied mechanisms of imperial control | A |
| 6.3 Indigenous Responses | India, Ethiopia, Samory Touré, Mahdist Sudan; success/failure conditions | A |
| 6.4 Global Economic Development | cotton, rubber, guano, palm oil; commodity demand and dependency | A |
| 6.5 Economic Imperialism | unequal treaty, debt administration, occupation, foreign investment | A |
| 6.6 Causes of Migration | famine, indenture, labor demand, steam transport | A |
| 6.7 Effects of Migration | exclusion law, ethnic enclaves, remittances, sending/receiving societies | A |
| 6.8 Causation in the Imperial Age | raw materials, technology, competition, export economies; causal ranking | A |

**Unit 6 result: 8/8 A.**

### Unit 7

| Topic | Evidence emphasis | Final grade |
| --- | --- | --- |
| 7.1 Shifting Power | Japan, China, Russia, Ottoman/Turkish transition; change in state power | A |
| 7.2 Causes of World War I | alliances, militarism, Sarajevo, July Crisis; long-term vs immediate causes | A |
| 7.3 Conducting World War I | casualties, state controls, colonial troops, military technology | A |
| 7.4 Interwar Economy | hyperinflation, unemployment, New Deal, Soviet planning; compare state responses | A |
| 7.5 Unresolved Tensions | Versailles, mandates, racial equality proposal, May Fourth; contradictions of settlement | A |
| 7.6 Causes of World War II | Manchuria, Ethiopia, Munich, Nazi–Soviet Pact/Poland; causal hierarchy | A |
| 7.7 Conducting World War II | mobile war, industrial mobilization, strategic bombing, atomic weapons | A |
| 7.8 Mass Atrocities | Armenian deportations, Nuremberg Laws, Wannsee, Cambodia, Rwanda; mechanism comparison | A |
| 7.9 Causation in Global Conflict | cross-war causal evidence; continuity, difference, ranking, qualification | A |

**Unit 7 result: 9/9 A.**

## Final benchmark

**27/27 Module 07 Evidence Labs in Units 5–7 meet the A-grade standard.** Every topic clears the 12/14 threshold and has no zero-category failure.

The important improvement is not simply “more evidence.” The labs now make students do the historical work that Module 07 is supposed to own:

> evidence object → observation → inference → claim → limitation/qualification

By Unit 7, students also decide whether evidence corroborates, complicates, or should be rejected, which keeps the course’s progressive-release model intact.

## Technical notes

- The shared renderer itself is unchanged.
- The Evidence Lab enhancement is scoped to Units 5–7 through unit registries and one runtime.
- Generated evidence visuals use inline SVG data URIs, which the repository image validator permits.
- Unit 6 shell wiring was added to Topic 6.1, the shell used by `scripts/build-unit6.js` as its template, and to the generated Topic 6.2–6.8 shells so the reproducibility check remains aligned.
- Existing `evidenceLab.items` content is not deleted. The new registry controls the live Module 07 evidence pool while preserving legacy lesson data for compatibility and future refactoring.
