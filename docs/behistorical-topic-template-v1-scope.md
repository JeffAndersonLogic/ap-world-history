# BeHistorical Topic Template v1

## Purpose

Topic 1.1 Song China is the official BeHistorical lesson standard. BeHistorical Topic Template v1 converts that standard into a reusable architecture for future AP World topic pages.

The goal is to prevent layout drift and make future changes easier to apply across Units 1-9.

## Official Standard

The reference lesson is:

```text
/unit-1/lesson-1-1-song-china.html
```

Topic 1.1 currently defines the approved lesson rhythm, visual structure, module sequence, lecture-card architecture, map-key expectation, College Board framework section, and checkpoint workflow.

## Template Files

```text
/assets/templates/behistorical-topic-template-v1.html
/assets/css/behistorical-topic-template-v1.css
/assets/js/behistorical-topic-renderer-v1.js
```

## Required Page Structure

Every full BeHistorical topic page should include:

1. Hero / topic title
2. Lesson Command Center
3. Learning Targets and Success Criteria
4. College Board Framework: Key Concepts and Illustrative Examples
5. Interactive Modules
6. Map & Geography Check with Map Key
7. First & 10 Reading
8. Content Delivery jump card
9. Lecture Cards with projection-friendly pop-outs
10. Video Clips inside Content Delivery
11. BeSurreal
12. AP Skill Builder
13. Checkpoint 1
14. Evidence Lab
15. Primary Source
16. BeInTheRoom, where appropriate
17. Final Checkpoint
18. Draft, copy, self-check, and MagicSchool workflow tools where useful

## Standard Module Order

```text
Module 01 - Map & Geography Check
Module 02 - First & 10 Reading
Module 03 - Content Delivery
Module 04 - BeSurreal
Module 05 - AP Skill Builder
Module 06 - Checkpoint 1
Module 07 - Evidence Lab
Module 08 - Primary Source
Module 09 - BeInTheRoom, if appropriate
Module 10 - Final Checkpoint
```

If BeInTheRoom is not appropriate for a topic, the final checkpoint may become Module 09.

## Data-First Rule

Future topics should be built mainly by creating a topic data file, not by hand-coding each full page.

A topic data file should define:

```text
meta
learningTargets
successCriteria
collegeBoardKeyConcepts
map
map.key
first10
lecture.segments
lecture.videos
beSurreal
skillBuilder
checkpoints
evidenceLab
images
primarySource
beInTheRoom, optional
stableImages
```

## College Board Framework Rule

Use verbatim AP framework language when requested.

If illustrative examples exist, list them under the relevant Key Concept.

If no illustrative examples are attached to a Key Concept, do not mention illustrative examples for that card.

Do not use phrasing such as:

```text
No specific illustrative examples listed...
```

## Map Key Rule

Every Map & Geography Check should include a map key that explains what students should notice.

Map modules should include:

- map title
- source URL
- caption
- notes
- map key
- map question
- draft response box

## Lecture Card Rule

Lecture cards stay on the main page.

Each lecture card opens a projection-friendly pop-out with:

- enlarged bullet content
- related historical image
- caption/source link

Images appear in the pop-out, not on the standard lecture cards.

## First & 10 Rule

First & 10 should remain inside the pop-out architecture, not open as a separate default tab.

A standalone version may exist as a source or backup, but the module card should keep students inside the lesson flow.

## Design Lock

Do not redesign the BeHistorical page layout, colors, fonts, logo, or navigation unless the user explicitly requests it.

Future changes should be made to the shared template files whenever possible before manually altering individual lesson pages.
