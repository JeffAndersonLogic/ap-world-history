# Module 07 Evidence Lab Audit — Units 1-2

Audit standard: `docs/module-07-scaffolding-standard.md`.

An A grade requires at least 12/14 on the seven-part rubric, with no category scored zero.

## Round 0 — before refinement

| Topic | Initial grade | Main problem |
|---|---:|---|
| 1.1 Song China | B+ | Good evidence, but captions/prompts did not consistently separate observation from inference. |
| 1.2 Dar al-Islam | B | Good visual range; generic AP-theme response frame weakened claim construction. |
| 1.3 South & Southeast Asia | B+ | Strong objects, but generic “this image shows” frame did too little evidence-to-claim work. |
| 1.4 Americas | B- | Only two evidence choices; diversity of American state systems was underrepresented. |
| 1.5 Africa | C+ | Great Zimbabwe and Ethiopia dominated; Hausa/state-trade evidence was missing. |
| 1.6 Europe | C | Evidence did not cover the political, religious, labor, and economic breadth promised by the task. |
| 1.7 Unit 1 Comparison | C- | Comparison task offered only two evidence images, so students had no meaningful selection. |
| 2.1 Silk Roads | B- | Strong item bank in data, but `evidenceLab.items` was not rendered by Module 07; live evidence choices were missing. |
| 2.2 Mongols | B | Same renderer-contract problem; prose summaries did the inference for students. |
| 2.3 Indian Ocean | B | Same renderer-contract problem; excellent conceptual examples were not active evidence cards. |
| 2.4 Trans-Saharan | B | Same renderer-contract problem and over-interpreted evidence summaries. |
| 2.5 Cultural Consequences | B+ | Strong conceptual bank, but diffusion conclusions were largely supplied to students and item cards were not live. |
| 2.6 Environmental Consequences | A- conceptually | Best conceptual design in Unit 2, but `evidenceLab.items` still did not render as evidence cards. |
| 2.7 Network Comparison | B- | Rich comparison prose, but no balanced live evidence gallery for the three networks. |

## Structural finding

The shared Unit-topic renderer builds Module 07 image cards from `lesson.images`, not from `evidenceLab.items`. Several Unit 2 topics therefore contained high-quality evidence summaries in their data files that were not visible as Evidence Lab cards to students.

The refinement uses renderer configs to provide active `lesson.images` evidence galleries while preserving the existing data-first architecture.

## Final round — after refinement

| Topic | Final score | Final grade | Why it now meets the benchmark |
|---|---:|---:|---|
| 1.1 | 14/14 | A | Four categories; explicit observation -> inference -> claim; evidence limitations included. |
| 1.2 | 14/14 | A | Political, intellectual, cultural, and network evidence; two-source continuity/change claim; provenance cautions. |
| 1.3 | 14/14 | A | Religion, trade, geography, and state-power evidence with category-based pairing. |
| 1.4 | 14/14 | A | Six-case gallery covering Mexica, Inca, Maya, Chaco, and Cahokia; diversity is now visible in the evidence itself. |
| 1.5 | 13/14 | A | Great Zimbabwe, Ethiopia, and Hausa are all represented; direct and secondary evidence are clearly labeled. |
| 1.6 | 14/14 | A | Political continuity, manorial structure, labor, and Church evidence; chronological limits are made explicit. |
| 1.7 | 14/14 | A | Six-region gallery; students choose a shared category and build balanced comparison evidence. |
| 2.1 | 13/14 | A | Four active cards; geographic, commercial, and knowledge evidence; students must test claims and limits. |
| 2.2 | 13/14 | A | Empire-scale, political-memory, connectivity, and pre-Mongol baseline evidence; explicit continuity/change reasoning. |
| 2.3 | 14/14 | A | Monsoon, maritime technology, material trade evidence, and basin geography work together without giving away the inference. |
| 2.4 | 14/14 | A | Contemporary atlas, route reconstruction, Islamic-city continuity, and state geography cover technology, wealth, and culture. |
| 2.5 | 14/14 | A | Evidence pairs allow students to trace Buddhism, Islam, and paper across regions while testing alternative explanations. |
| 2.6 | 14/14 | A | Geographic reconstruction, route evidence, cultural memory, and post-plague labor evidence require corroboration across evidence types. |
| 2.7 | 14/14 | A | Six-card balanced gallery gives two evidence options for each of the three networks and forces same-category comparison. |

## Changes made

- Replaced generic “this image shows...” prompts with observation/inference/claim prompts.
- Added explicit provenance and chronology where a source is reconstructed, later, or pre-period.
- Added evidence-limit questions without turning Module 07 into full HIPP analysis.
- Expanded weak evidence sets in 1.4-1.7.
- Restored live evidence-card galleries for all Unit 2 topics by defining active `lesson.images` arrays in renderer configs.
- Converted Unit 2 comparison work from pre-interpreted prose into evidence selection and corroboration.

## Benchmark result

All 14 Evidence Labs in Units 1-2 now meet the A-grade benchmark under the Module 07 rubric.