# BeHistorical Instructional Audit and Units 1-2 AP Practice Standard

## What BeHistorical Is

BeHistorical is a static, student-facing AP World History learning environment organized around a repeatable ten-module lesson path. It combines a brief narrative reading, maps, lecture cards, memorable historical details, explicit AP skill practice, checkpoints, evidence analysis, primary sources, simulation, and a final response. Student drafts autosave in the browser and can be gathered into one Canvas-ready record. A separate Skills Lens helps the teacher analyze captured work.

Its purpose is larger than content delivery. The product is designed to make the habits of historical thinking visible and repeatable: locate, read, notice, source, connect, argue, revise, and submit.

## Present-State Product Assessment

### Design and look

The visual system is a major strength. Charcoal, bronze, warm paper, archival images, serif display type, and compact sans-serif labels create a coherent museum and field-notebook feel. Cards, large headings, and focused pop-outs make a very large amount of content feel intentional. The interface has a distinctive identity without looking childish or like a generic learning-management template.

The modal system is especially effective for classroom projection and focused individual work. Learning targets remain visible on the main page, while demanding tasks open in a separate reading surface. Keyboard focus handling, image lightboxes, responsive layouts, confidence ratings, and browser autosave show careful attention to actual classroom use.

The main visual limitation is scale. The hero and brand treatment are beautiful but consume substantial vertical space before students reach the learning path. Ten equal-weight module cards also make optional enrichment and required writing appear equally important. On smaller screens, long modules require significant scrolling inside a modal. Those are information-architecture issues, not failures of craft.

### Instructional positives

- The ten-module rhythm is stable enough to become a classroom routine.
- Content, skill practice, evidence, simulation, and reflection are integrated rather than stored in separate products.
- The First & 10 and deeper reading layers allow differentiation without lowering the historical argument.
- Checkpoints include targets, criteria, evidence terms, AI coaching, revision, and a clear Canvas handoff.
- The source model and build tests reduce silent technical failures, a significant advantage for daily classroom use.
- BeInTheRoom scenarios give students an unusually strong bridge from content knowledge to historical decision-making.

### Instructional negatives before this revision

- Many AP Skill Builder prompts asked only for two or three sentences and did not match the suggested skill assigned to the topic in the 2026-27 CED.
- Evidence Labs usually asked students to choose one artifact. That elicited observation, but rarely corroboration, qualification, counterevidence, source limitation, or deliberate evidence selection.
- Unit 2 Evidence Labs contained useful text evidence entries that the renderer did not display. Their introductory task rendered as `undefined`, leaving students with a response box but no visible evidence set.
- Primary Source questions mixed several cognitive moves into broad discussion questions instead of the discrete identify, describe, and explain parts used in AP short-answer tasks.
- Several source passages were anonymous instructional syntheses or highly adapted composites. The page did not consistently show attribution, and it gave students no reliable way to distinguish a continuous translation from a classroom condensation.
- The Skills Lens tagged the Skill Builder but usually treated Evidence Lab and Primary Source responses as untagged, weakening longitudinal skill analysis.

### Current limitations after this revision

- Topics 1.5 through 2.7 now use a lightly edited continuous excerpt or a transparent classroom rendering of one continuous passage. Every module names the edition or translator, identifies any modernization or omission, and links to a stable extended text. Topics 1.1 through 1.4 intentionally remain classroom condensations for a later rewrite.
- The linked editions are reliable classroom access copies, not manuscript facsimiles or current critical editions. Several translations are public-domain works with dated vocabulary; the source notes identify modernization so students do not mistake classroom wording for a diplomatic transcription.
- The practice modules are intentionally unscored. Confidence is student-reported and does not measure accuracy; actual growth must be established by reading student work and examining transfer to later writing.
- Students still draft all three response types in one large text area. The AP-style parts are visible, but separate response boxes for (a), (b), and (c) would make completion easier to audit.
- The sequence is rigorous by design, but some ninth-grade students will need modeling before independently completing qualification and evidence-limitation moves.
- Effectiveness cannot be established from prompt quality alone. The teacher needs student-response evidence across several lessons to determine whether the revision improves claim quality, evidence explanation, sourcing, and transfer to timed writing.

## Units 1-2 Revision Standard

The revised 42 modules are governed by one data file: `assets/data/ap-practice-units-1-2.js`. It loads after each topic's base data and renderer config, which keeps the new practice progression centralized and prevents fourteen lesson files from drifting apart.

Each topic now follows the skill and reasoning pairing in the AP World History: Modern Course and Exam Description effective fall 2026.

### Rubric-backward design without rubric scoring

The College Board free-response criteria are an authoring benchmark, not a student-facing scoring system in these modules. Students do not see points, score conversions, or a full FRQ rubric. Instead, each prompt is written backward from the response qualities that successful AP writing demonstrates: a defensible claim, accurate and specific evidence, explanation of how evidence supports an argument, relevant sourcing, use of a historical reasoning process, and qualification where the task permits it.

From Topic 1.5 forward, the three modules form a deliberate-practice sequence:

1. The AP Skill Builder isolates and names the historical thinking move.
2. The Evidence Lab requires students to select, connect, weigh, and limit evidence while making a judgment.
3. The Primary Source asks students to transfer the skill independently through discrete describe-and-explain questions grounded in a historical source.

This sequence does not attempt to reproduce a complete DBQ or LEQ inside every lesson. It develops the component moves from which high-quality FRQ responses are built.

| Topic | Skill Builder alignment | Reasoning process |
|---|---|---|
| 1.1 | Contextualization 4.A | Continuity and Change |
| 1.2 | Developments and Processes 1.A | Causation |
| 1.3 | Claims and Evidence 3.A | Comparison |
| 1.4 | Claims and Evidence 3.B | Continuity and Change |
| 1.5 | Developments and Processes 1.B | Continuity and Change |
| 1.6 | Developments and Processes 1.A | Causation |
| 1.7 | Argumentation 6.A | Comparison |
| 2.1 | Contextualization 4.A | Causation |
| 2.2 | Making Connections 5.A | Continuity and Change |
| 2.3 | Making Connections 5.A | Causation |
| 2.4 | Developments and Processes 1.B | Causation |
| 2.5 | Sourcing and Situation 2.A | Causation |
| 2.6 | Making Connections 5.A | Causation |
| 2.7 | Argumentation 6.B | Comparison |

### Quality rules

Every AP Skill Builder:

- names the official skill and reasoning process;
- teaches three visible cognitive moves;
- asks for a product appropriate to the named skill;
- includes a four-part submission check;
- requires specific historical subjects and evidence;
- elicits a defensible claim or explanation with a visible line of reasoning;
- practices a component of successful FRQ writing without referring to points or scoring.

Every Evidence Lab:

- presents a claim or argument worth testing;
- requires two or more pieces of evidence when the set permits;
- requires explanation of how the evidence bears on the claim;
- includes corroboration, qualification, relative importance, or source limitation;
- requires students to distinguish evidence from inference and explain why the evidence matters;
- carries skill, evidence-term, and quality-criteria metadata for the Skills Lens.

Every Primary Source module:

- identifies the author, genre, setting, and date;
- identifies whether the passage is an excerpt or a modern classroom rendering;
- uses one continuous source passage rather than an anonymous composite;
- names the translation or edition and links to the extended source for Topics 1.5 through 2.7;
- documents every omission, bracketed substitution, or modernization;
- displays attribution and a source-integrity note;
- uses three discrete AP-style parts labeled (a), (b), and (c);
- includes at least two explanation-level tasks rather than rewarding identification alone;
- requires source details, causal or comparative reasoning, relevant sourcing, or outside evidence as appropriate to the topic.

## Validation

`scripts/test/ap-practice-units12.test.js` checks all fourteen lessons and all forty-two revised modules. It verifies CED alignment, minimum prompt depth, evidence availability, quality criteria, source transparency, three-part source tasks, metadata, and script order. For Topics 1.5 through 2.7, it also enforces passage length, named translation data, continuous-passage disclosure, at least one HTTPS edition link, historically specific support, evidence-based judgment, two or more explanation-level source tasks, and the absence of scoring language from student-facing practice. `scripts/build-skills-map.js` also reads the centralized revision so the teacher-facing Skills Lens uses the same live prompts and skill tags students see.

The final effectiveness check is classroom evidence. After students complete several topics, compare their first and later responses for four observable changes: defensible claims, specific evidence, explanation of evidence, and source-aware qualification. That is the point at which prompt quality becomes demonstrated instructional effectiveness.
