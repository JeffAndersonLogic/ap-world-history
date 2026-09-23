# BeHistorical Presentation Authoring Standard

This is the canonical instructional-design process for BeHistorical class presentations.

It governs the thinking that happens before and during a Teaching OS build. For implementation architecture, generated student decks, teacher surfaces, tests, and shipping, read `docs/TEACHING-OS.md`.

AI agents must read both documents before planning, building, revising, or auditing a presentation.

## Core principle

The College Board CED determines **what students must learn**.

The ninth-grade story determines **how students should encounter it**.

Existing slides, available images, vocabulary lists, old lesson organization, and preferred slide counts do not get to reverse that order.

The locked production line is:

**CED -> existing-course constraint check -> ninth-grade story -> memorable spine -> must-have evidence -> narrative beats -> story approval gate -> retelling slide -> asset and capability inventory -> visual plan -> canonical teacher build -> generated student deck -> ecosystem and registry sync -> instructional verification -> technical verification -> adjacent findings -> ship**

## 1. Start with the CED

Before designing slides, inspect the topic's current College Board framework and isolate:

- learning objective or objectives
- essential knowledge and key concepts
- illustrative examples College Board names
- the reasoning move implied by the learning-objective verb

The CED is the content authority. Do not start from an old presentation and retrofit the CED afterward.

## 2. Run the existing-course constraint check

Before the story is approved, inspect the current BeHistorical topic only for constraints that students may already see elsewhere:

- learning targets
- success criteria
- declared AP skill or reasoning focus
- encoded CED contract
- closely related lesson framing that would create a contradiction if ignored

This is a constraint check, not the source of the historical story.

If the existing course surface conflicts with the CED, stop and identify the conflict. Do not silently inherit it and do not silently rewrite another surface while building the presentation.

Images, renderer capabilities, and visual assets are intentionally inspected later so they do not shape the story too early.

## 3. Tell the ninth-grade story

Explain the topic as if speaking to a 14- or 15-year-old who already knows the preceding topics.

The story should make these questions easy to answer:

- What was already true?
- What changed?
- What problem, pressure, opportunity, or interaction drove the change?
- How did the mechanism work?
- What consequence or twist followed?
- Why does College Board care about this development?

This stage is narrative, not slide design.

Do not code, count slides, or hunt for images while the story is still unclear.

A useful failure test: if the topic still sounds like "students need to know A, B, C, and D," the story is not finished.

## 4. Find the memorable spine

Reduce the story to one durable idea students can carry through the lesson and recall later.

The spine is an argument, causal idea, or interpretive frame, not a vocabulary list.

Examples:

- Topic 2.5: connectivity changes what societies know and what they become.
- Topic 2.6: the same network could feed you and kill you.

The spine should recur naturally in the opening, transitions, synthesis, and landing without becoming a slogan pasted onto every slide.

## 5. Attach every must-have example to a "so what"

Identify the evidence students actually need from the CED and the course.

For every named example, state:

- what claim it proves
- what mechanism it illustrates
- what consequence it helps explain

A named example does not automatically earn its own slide.

Bad structure:

- banana slide
- rice slide
- citrus slide

Better structure:

- crop diffusion changed agricultural possibilities
- bananas, new rice varieties, and citrus serve as evidence inside that claim

Vocabulary and illustrative examples serve the argument. The argument does not serve the vocabulary list.

## 6. Convert the story into narrative beats

Storyboard the order in which a ninth grader needs to discover the argument.

A beat should do at least one of these jobs:

- establish context
- advance the historical story
- explain a mechanism
- introduce evidence that proves the argument
- create a meaningful turn
- make students reason, write, or synthesize

**Slide count follows the story.**

There is no target range and no quota.

Do not add a slide because a template expects one. Do not split examples into separate slides unless the story needs the separation.

One projected slide should usually carry one argument.

## 7. Reconcile required functions with flexible structure

A finished BeHistorical presentation should contain these instructional functions:

- Teacher Preflight
- BeReady retrieval that activates prior learning and bridges into the new topic
- a visible topic question or problem
- organizing claims that help students sort the evidence
- historical story
- mechanism or causation where the topic requires it
- repeated return to the spine
- AP synthesis that answers the learning objective

These are required functions, **not a fixed number of sections and not a fixed order**.

The story decides the order.

"Big Rocks" are an optional organizing device. Use two, three, four, or none if that is what the history supports. Never invent a third claim because an older template once said "Three Big Rocks."

If a build intentionally omits one of the functions above, the teacher source must explain why.

Three of these are checked by machine, because each is easy to lose without anything looking wrong: Teacher Preflight (a slide with `phase: 'preflight'`), BeReady (a slide with `phase: 'beready'`, first after any preflight), and the retelling slide (exactly one student-visible slide with `retelling: true`, see section 9). A deck that leaves one out records the reason in `meta.omits`, for example `omits: { beready: 'Built and taught before the BeReady standard.' }`. `scripts/test/teaching-os-architecture.test.js` fails a deck that has neither.

**Which decks this applies to.** Every deck built or revised on or after 2026-09-22. Decks already taught before then (Topics 2.1 and 2.2) carry their omissions in `meta.omits` and gain the missing functions the next time they are revised. Topics 2.5 and 2.6 were not yet taught and received BeReady on 2026-09-22.

### BeReady retrieval standard

BeReady is the first student-facing phase after any teacher-only preflight. Its job is retrieval and transition, not new instruction.

Default BeReady pattern:

- 3-5 minutes
- no notes at first
- two or three short retrieval prompts students should be able to answer from memory
- prompts drawn mainly from the immediately preceding topic, with earlier course themes used only when they sharpen the connection
- one explicit bridge that turns the retrieved idea into the problem, contrast, or question of the new topic

BeReady should feel fast. Take answers, surface the pattern, and move on. Do not let it become a mini-review lecture, a vocabulary dump, or a preview that teaches today's content before the story begins.

The bridge is required. Retrieval without a bridge is review; BeReady exists to make prior learning useful for the lesson students are about to enter.

At the opening of a course or unit where there is no meaningful prior topic to retrieve, the teacher source may substitute a short baseline prompt or explain why BeReady is intentionally omitted.

### Topic 2.6 proof case

Topic 2.6 helped expose the old-template problem. Its historical logic is two branches of one system: crop diffusion and pathogen diffusion. Forcing a third historical branch would add structure that the CED and the story do not need.

The lesson therefore establishes the general rule: **organizing claims follow the history rather than a fixed count.**

## 8. Story approval gate

Nothing downstream should multiply an unreviewed story by default.

The gate is satisfied in one of two ways:

1. **Reviewed approval:** Jeff approves the story and memorable spine, either explicitly or through the normal collaborative review that produced the final version.
2. **Explicit waiver:** Jeff directly instructs the system to proceed without story approval.

"Run it" after the story has already been reviewed does not require a redundant approval question.

A blanket instruction to proceed before anyone has reviewed the story is a waiver, not approval.

If the gate was waived, the final build report must say:

> Story approval was explicitly waived for this build.

This keeps an unreviewed story from later being mistaken for an approved interpretation.

## 9. Name the retelling slide

Every presentation must identify one student-visible slide as the **retelling slide**.

The retelling slide is the slide a student should be able to reconstruct from memory and then use to explain the whole topic.

It may be:

- a causal chain
- a comparison
- a before-and-after model
- a map plus mechanism
- a synthesis diagram
- another form that fits the story

It does not need to display the words "Retelling Slide" to students.

Mark it in the teacher source with `retelling: true` on that slide, so the choice is recorded where the next author will see it and the gate can confirm there is exactly one.

If the team cannot name the retelling slide, the deck probably has not found its conceptual center yet.

For Topic 2.6, the twin causal chains are the retelling slide.

## 10. Run the asset and capability inventory

Only after the story gate is satisfied should existing visual and technical assets shape implementation.

Inspect:

- visuals the topic already uses successfully
- repo-local images and instructional maps
- already verified remote assets
- renderer slide kinds and layout capabilities
- topic-specific composition rules
- whether the desired visual treatment is actually supported

Default visual sourcing order:

1. a strong repo-local asset already in use
2. an already verified visual the topic or course already ships
3. a newly sourced public-domain or licensed asset that is staged and verified before it reaches a slide
4. a clearly labeled reconstruction when appropriate

### AI-generated images

An AI-generated illustration may be used on a projected slide or a concept card to set a scene, **only when it is labeled on screen** as `Historical Reconstruction - AI Generated` in its credit or caption. The label is exactly that text, nothing added, and it stays small: one quiet caption in the corner of the image, never a second badge on top of it. The description of what the picture shows belongs in its alt text, not in the label. It is never presented as a historical source, and it never appears in the Evidence Lab, whose whole method is observing a real object. Check an image's C2PA metadata when its origin is unclear; Google and other generators mark their output.

The wording was settled on 2026-09-23, replacing three variants that had grown up across Topics 2.1 to 2.3 (`HISTORICAL RECONSTRUCTION — AI GENERATED`, `Historical reconstruction · AI generated` and `Illustration (AI-generated)`). If an image has a label printed into the picture itself, prefer a clean copy of the file, because the on-screen label then appears twice.

Topic 2.3 is the case: its slide illustrations are AI-generated and labeled, and its Evidence Lab uses the Borobudur ship relief and a Song celadon bowl instead.

**Never write a Commons filename from memory.** A plausible filename is not evidence that the asset exists.

A genuinely new remote visual must be fetched or otherwise verified before it becomes production slide data.

Do not design a composition the renderer cannot support and then silently downgrade it during implementation. Change the renderer intentionally or change the plan intentionally.

## 11. Make the visual plan

For every narrative beat, decide whether it deserves:

- a historical image
- a map
- a manuscript, artifact, or primary-source visual
- a comparison, diptych, or triptych
- a simple mechanism graphic
- or no image

Standing rule:

> **Do not let an available image determine the lesson. Determine the lesson first, then find or create the visual the story deserves.**

Projected slides should feel closer to museum exhibits than textbook pages: a clear argument, purposeful visual evidence, and only enough text to orient the room.

Teacher Intelligence carries the depth.

## 12. Build the canonical teacher presentation

Implementation begins only after the story, evidence, beats, gate, retelling slide, and visual plan are settled.

The teacher source carries:

- projected slide content
- pacing and run-of-show information
- Teacher Preflight
- LAND
- STORY
- ASK
- LISTEN FOR
- AP CONNECTION
- AVOID or misconception warnings

The canonical teacher source is the authored presentation.

The student deck is a derivative artifact, never a second authored source.

See `docs/TEACHING-OS.md` for the file architecture.

## 13. Generate the student deck

Generate the student companion from the canonical teacher data.

Teacher notes, controls, and preflight content must be absent from the student bytes rather than merely hidden with CSS.

Never hand-maintain generated Teaching OS student data.

## 14. Sync the ecosystem and registries

A presentation is not complete because its files exist.

Check every relevant surface, including:

- Teacher Command Center routing
- Teaching OS entry surface
- lesson `classPresentation`
- student presentation HTML
- generated student presentation data
- presentation generator declarations
- topic-specific visual assets
- indexes and routes
- any declared topic lists that sibling presentations use

### Registry rule

Prefer derived membership checks where the repository can determine membership mechanically.

Preserve declared editorial content where humans intentionally control wording, grouping, or order.

Examples:

- derive a test's topic membership from the canonical deck registry when possible
- keep a teacher-tool description manually authored if it is editorial copy
- keep an intentionally curated volume order declared when order itself is a teaching decision

For declared registries, check both directions:

- every expected presentation has an entry
- every entry points to a real presentation

This catches both orphaned files and stale registry entries.

A declared list checked only against itself can fall behind the repository and stay green forever, so the Teaching OS registry is also checked against the disk: every `teacher/topic-X-X-os.html` must be either in `DECKS` or in `NOT_YET_MIGRATED` (with a reason) in `scripts/build-teaching-os-student-decks.js`. Topic 2.3 was built outside the pipeline, with a "student" page that redirected to the teacher surface, and every check stayed green until this was added. No page under `unit-N/` may redirect into `teacher/`.

## 15. Instructional verification

Technical correctness is not instructional correctness.

Before shipping, confirm:

- the deck answers the actual CED learning objective
- the story remains historically accurate
- required examples are present and attached to consequences
- examples prove claims rather than float as trivia
- the mechanism is explicit where needed
- the deck does not drift into adjacent topics
- the final synthesis answers the topic question
- the AP reasoning move is visible without turning the lesson into test-prep jargon
- the retelling slide still captures the whole argument
- a ninth grader could retell the topic from the deck's structure

### Fact-check the teaching devices too

Every analogy, comparison, counterfactual, dramatic shorthand, hook, and framing sentence is a factual claim for review purposes.

A teaching device does not get a lower evidence standard because it is memorable.

The Topic 2.6 "year 900" counterfactual is the proof case: the underlying mechanism was useful, but the framing was too absolute and had to be corrected before it multiplied through the deck.

## 16. Technical verification

Confirm:

- canonical teacher data loads
- generated student data matches the canonical teacher source
- teacher-only notes do not leak into student bytes
- images load or degrade safely
- Teacher Command Center routing works
- lesson presentation links work
- projection controls actually traverse the intended slides
- relevant registries include the topic
- required CI gates pass on the exact commit

### A green check must be meaningful

Any check used as evidence that work is complete must be shown capable of failing, whether the check is permanent or disposable.

This includes:

- committed automated tests
- one-off browser scripts
- temporary DOM checks
- ad-hoc verification code
- throwaway scripts written only for that build

Before trusting the green result of a new or materially changed check, create a known-bad condition or fixture and confirm the check goes red. Restore the correct condition before shipping.

Do not intentionally break production on every topic build. This rule applies when developing or relying on a check whose ability to detect failure has not yet been demonstrated.

A check that cannot distinguish the right behavior from the wrong behavior is not verification.

## 17. Adjacent findings

Verification often reveals a real defect outside the topic being changed.

Do not silently fix it inside the current topic change.

Do not silently drop it.

Report it with:

- affected file or surface
- observed defect
- likely impact
- proposed fix
- why it was left out of the current scope

Jeff decides whether it becomes a separate fix.

This keeps topic commits narrow while preserving what the verification process discovered.

## 18. Ship

Follow the repository shipping contract in `CLAUDE.md` and `docs/TEACHING-OS.md`.

Do not call a presentation "done," "live," "synced," or "shipped" from:

- intention
- a commit existing
- a pull request existing
- one passing test
- a page looking correct locally
- a deployment attempt that has not been verified

The exact commit being shipped must pass the required gates before it lands on `main`.

## Independent AI review rule

When the user supplies another AI model's recommendation, critique, or draft, evaluate it independently against:

- the CED
- historical evidence
- this authoring standard
- the current repository state

Agreement is not the objective.

When useful, distinguish what to:

- keep
- modify
- reject
- verify

Do not fold another model's ideas in merely because they arrived later.

## Execution language

- "Plan it" or "show me" normally means stop after story, spine, evidence, narrative beats, retelling slide, and visual requirements.
- "Build it", "run it", or "fix it" means execute the full relevant pipeline through verification and shipping when repository access permits.
- If the story approval gate has already been satisfied, do not ask for approval again.
- If Jeff explicitly waives the story approval gate, proceed and disclose the waiver in the final build report.

## Compressed version

When this standard must be reduced to a few lines, preserve these ideas:

1. CED decides what must be learned.
2. Tell the ninth-grade story and find the spine before designing slides.
3. Every example needs a "so what"; examples serve claims rather than becoming trivia slides.
4. Start the student-facing sequence with a fast BeReady retrieval + bridge when prior learning exists.
5. The story decides the order and slide count.
6. Approve the story, name the retelling slide, then let assets and code enter.
7. One canonical teacher source generates the student deck.
8. Verify instruction and software separately, prove new checks can fail, report adjacent findings, then ship.
