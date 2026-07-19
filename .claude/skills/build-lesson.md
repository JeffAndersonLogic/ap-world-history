---
name: build-lesson
description: Scaffold a complete BeHistorical lesson for a given AP World topic, HTML shell, data JS, renderer config, First & 10, capture wrapper, hub wiring, and form config registration.
---

# BeHistorical Lesson Builder

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
- `unitLabel` = look up from `BH_FORM.units[unitNum]` in `assets/js/behistorical-form-config.js`
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

**Critical:** Insert the form-config and renderer-config script tags. The script block at the bottom must be:
```html
<script src="../assets/js/behistorical-form-config.js?v=3"></script>
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
5. Builder section 1: "Build Your Google Form Response"
6. Builder section 2: "Build Your AI Coach Prompt"
7. page-footer-note
8. module-footer with nav links

Use the same CSS from an existing First & 10 page (e.g., `unit-7/first-and-10-topic-7-2-causes-wwi.html`). Write real AP World content for the reading sections.

### 5. First & 10 capture wrapper
**Path:** `unit-{N}/first-and-10-topic-{topicKey-with-dashes}-{slug}-capture.html`

Use the exact pattern from `unit-7/first-and-10-topic-7-2-causes-wwi-capture.html`:
- iframe src pointing to the standalone First & 10 page
- `PREFILLED_FIRST10_FORM` URL generated using the same logic as `buildFormURL(topicKey, 'first10')`, must include Unit, Topic, Prompt ID (`{topicKey}-first10`), Response Type (`First and 10`)
- `MAGICSCHOOL_URL` = `'https://student.magicschool.ai/s/login?joinCode=czwb9Q'`
- Full `wireFirst10Capture()` function (copy from existing capture wrapper)

### 6. Form config registration
In `assets/js/behistorical-form-config.js`:
- Verify the topic key exists in `BH_FORM.topics`. If not, add it in the correct position (sorted by topic number).
- The topic label must match the Google Form dropdown format: `"{topicKey} - {title}"`

### 7. Hub page wiring
In `unit-{N}/index.html`:
- Find the `<a class="unit-card" href="#">` element for this topic number.
- Replace `href="#"` with `href="lesson-{unitNum}-{topicSeq}-{slug}.html"`.
- If no card exists for this topic, add one following the existing pattern.

## After generation
- Run the `/audit-site` skill to verify everything wired correctly.
- Report what was created and any items that need manual review (e.g., image URLs, BeInTheRoom content).
