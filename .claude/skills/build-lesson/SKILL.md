---
name: build-lesson
description: Scaffold a complete BeHistorical lesson for a given AP World topic, HTML shell, data JS, renderer config, First & 10, capture wrapper, hub wiring, and form config registration.
---

# BeHistorical Lesson Builder

> **Read this note before following the steps below.** This skill predates several
> architecture changes documented in the repo's `CLAUDE.md`, and following it literally
> will produce a lesson that fights the current content model rather than fitting it.
> Known drift, checked 2026-08-23:
>
> - **"Standalone reading file" (Step 4) is stale as a process instruction.** Per
>   `CLAUDE.md`'s "The Content Model", every First & 10 is now *generated* from a content
>   module (`scripts/lib/reading-content/<unit>.js` for most units, `f10-content.js` for
>   Units 6 and 9, `foundations-f10-content.js` for Foundations), rendered by
>   `scripts/lib/first10-page.js`. There are no hand-authored readings left, and hand-writing
>   the HTML structure below (which is still an accurate description of the *output shape*)
>   directly, instead of writing a content module and running the unit's build script, creates
>   exactly the kind of one-off file the content model exists to prevent. Check which build
>   script owns the target unit (`build-unit-readings.js`, `build-unit6.js`, `build-unit9.js`,
>   or `build-foundations-readings.js`) before writing any HTML by hand.
> - **The capture wrapper is generated too, or synced with `scripts/sync-first10-capture.js`
>   / `scripts/remove-google-form-capture.js`.** Don't hand-build one field by field; read
>   `docs/CANVAS-CAPTURE.md` first.
> - **Image sourcing has moved.** `CLAUDE.md`'s "Image Contract" now requires local generated
>   artwork as the floor (`scripts/build-module-art.js`, `assets/images/module-art/`) with a
>   remote Commons URL layered on top and `onerror` degrading back to local art, not a bare
>   Wikimedia URL per slot. Hub cards need the two-`<img>`-layer structure `validate.js`
>   enforces.
> - **Not mentioned below at all, and required by current `CLAUDE.md`:** the exact 10-module
>   table (module 08 is `renderSource()` on a Unit page but `renderCoach()` on a Foundations
>   page), the required `.lesson-roadmap` Classroom Flow block, an optional `deepReading`
>   block and where its data file lives (differs between Foundations and Unit topics, see
>   "Deep Readings"), the Socrates paste plumbing (`docs/socrates/README.md`), and, if this
>   topic has a BeInTheRoom simulation, the theme-alignment gate in
>   `docs/beintheroom-scenario-blueprint.md` before it can be linked.
> - **The "form config registration" in this skill's own description no longer exists.** The
>   Google Form was retired 2026-08-07; see `docs/FORM-CONTRACT.md`. Do not register anything
>   with it.
>
> Treat everything below as a description of the required *output shape* for the pieces it
> still gets right (the data file's fields, the hub wiring, the 10-module completeness check),
> and re-derive the *process* (which script generates what) from `CLAUDE.md` and the actual
> build scripts rather than from this file. This skill has not been re-verified end to end
> against the current generators; run `/audit-site` and `npm test` on whatever it produces
> before trusting it.

Build a complete lesson for a single AP World History topic. The user provides the topic number and title; this skill generates all required files and wiring.

## Required input (ask if not provided)
- **Topic number** (e.g., `6.3`)
- **Topic title** (e.g., `Indigenous Responses to State Expansion`)

## Derived values
From the topic number, derive:
- `unitNum` = integer before the dot (e.g., `6`)
- `topicSeq` = integer after the dot (e.g., `3`)
- `topicKey` = `"6.3"`
- `unitFolder` = `"unit-6"`
- `unitLabel` = the College Board unit name, e.g. `"Unit 6 - Consequences of Industrialization"`
- `slug` = lowercase, hyphenated version of the title (e.g., `indigenous-responses`)
- `topicLabel` = `"6.3 - Indigenous Responses to State Expansion"`

## Files to generate

### 1. Lesson HTML shell
**Path:** `unit-{N}/lesson-{unitNum}-{topicSeq}-{slug}.html`

Copy the template from `assets/templates/behistorical-topic-template-v1.html` and replace:
- `TOPIC_CODE` → `Topic {topicKey}`
- `TOPIC_TITLE` → title
- `TOPIC_SUBTITLE` → `"c. [period], AP World History"`  (ask user for period if ambiguous, otherwise derive from unit: Units 1-2 = "1200–1450", Unit 3 = "1450–1750", Unit 4 = "1450–1750", Unit 5 = "1750–1900", Unit 6 = "1750–1900", Unit 7 = "1900–present", Unit 8 = "1900–present", Unit 9 = "1900–present")
- `UNIT_FOLDER` → `unit-{N}`
- `UNIT_LABEL` → `"Unit {N}"`
- `TOPIC_DATA_FILE` → `lesson-{unitNum}-{topicSeq}-{slug}`

**Critical:** Insert the data and renderer-config script tags. The script block at the bottom must be:
```html
<script src="../assets/data/lesson-{unitNum}-{topicSeq}-{slug}.js"></script>
<script src="../assets/data/lesson-{unitNum}-{topicSeq}-renderer-config.js"></script>
<script src="../assets/js/behistorical-topic-renderer-v1.js"></script>
```

### 2. Lesson data JS
**Path:** `assets/data/lesson-{unitNum}-{topicSeq}-{slug}.js`

Generate a scaffold `window.BEHISTORICAL_LESSON = { ... }` with:
- `meta`: course, unit, topic (`"Topic {topicKey}"`), title, subtitle, feedbackToolUrl
- `learningTargets`: 2-3 targets (use CED learning objectives for the topic, research if needed)
- `successCriteria`: 2-3 criteria
- `collegeBoardKeyConcepts`: at least 2 entries with `code`, `theme`, `text`, `illustrativeExamples`
- `stableImages`: object with keys `map`, `first10`, `contentDelivery`, `beSurreal`, `skill`, `checkpoint1`, `evidence`, `source`, `beInTheRoom`, `checkpoint2`, use placeholder Wikimedia Commons URLs relevant to the topic
- `map`: title, intro, url, sourceUrl, caption, notes array, key array, prompt
- `first10`: title, embedUrl (pointing to the capture wrapper filename), note
- `lecture`: title, intro, segments array (4 segments each with title, bullets, image)
- `beSurreal`: title, text, prompt (REQUIRED per CLAUDE.md)
- `skillBuilder`: title, label, intro, steps array, prompt
- `checkpoints`: array of exactly 2 checkpoint objects (Checkpoint 1 and Checkpoint 2) each with title, subtitle, prompt, responseType, learningTargets, successCriteria, terms, focus, cardDesc
- `evidenceLab`: title, task, prompt
- `primarySource`: title, intro, text, questions array
- `beInTheRoom`: url (empty string, placeholder for future build)

Use real AP World History content from the CED for this topic. Do NOT leave placeholder text like "TODO", generate historically accurate content.

### 3. Renderer config
**Path:** `assets/data/lesson-{unitNum}-{topicSeq}-renderer-config.js`

Generate with the standard IIFE pattern:
```javascript
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;
  lesson.stableImages = {
    map: 'WIKIMEDIA_URL',
    first10: 'WIKIMEDIA_URL',
    // ... all 10 module card image URLs
  };
})();
```
Use Wikimedia Commons URLs relevant to the topic.

### 4. First & 10 standalone page
**Path:** `unit-{N}/first-and-10-topic-{topicKey-with-dashes}-{slug}.html`
(e.g., `unit-6/first-and-10-topic-6-3-indigenous-responses.html`)

Follow the exact structure documented in CLAUDE.md "First & 10 Reading Standard":
1. module-header with badge, name, subtitle
2. reading-title-band with eyebrow, h1, deck, skill-tags
3. reading-body with support-strip, vocab-strip, 3-4 sections with AP callouts
4. check-section with exactly 3 question-items
   builder; the form was retired on 2026-08-07, see `docs/FORM-CONTRACT.md`
6. page-footer-note
7. module-footer with nav links
8. The First & 10 answer-capture script block. Without it the three reading
   answers never reach Gather All My Work, see `docs/CANVAS-CAPTURE.md`

Use the same CSS from an existing First & 10 page (e.g., `unit-7/first-and-10-topic-7-2-causes-wwi.html`). Write real AP World content for the reading sections.

### 5. First & 10 capture wrapper
**Path:** `unit-{N}/first-and-10-topic-{topicKey-with-dashes}-{slug}-capture.html`

Use the exact pattern from `unit-7/first-and-10-topic-7-2-causes-wwi-capture.html`, or just run `node scripts/remove-google-form-capture.js`, which regenerates every wrapper to the canonical shape:
- iframe src pointing to the standalone First & 10 page
- `MAGICSCHOOL_URL` = `'https://student.magicschool.ai/s/login?joinCode=czwb9Q'`
- Full `wireFirst10Capture()` function (copy from existing capture wrapper)

### 6. Hub page wiring
In `unit-{N}/index.html`:
- Find the `<a class="unit-card" href="#">` element for this topic number.
- Replace `href="#"` with `href="lesson-{unitNum}-{topicSeq}-{slug}.html"`.
- If no card exists for this topic, add one following the existing pattern.

## After generation
- Run the `/audit-site` skill to verify everything wired correctly.
- Report what was created and any items that need manual review (e.g., image URLs, BeInTheRoom content).
