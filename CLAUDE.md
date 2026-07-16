# BeHistorical — Claude Code Rules

## Git

- Always commit and push directly to `main`.
- Do not create feature branches or pull requests.

## Repository Commands

- `node scripts/validate.js` — run the full structural and form-wiring audit.
- `node scripts/generate-status-manifest.js` — refresh the teacher command-center inventory after adding or removing deliverables.
- `node scripts/build-unit6.js` — deterministically rebuild Unit 6 Topics 6.2–6.8 and their BeInTheRoom scenarios.
- `node scripts/build-unit9.js` — deterministically rebuild Unit 9 Topics 9.4–9.9 and their BeInTheRoom scenarios.
- `node scripts/normalize-student-facing-language.js` — normalize Canvas guidance and the classroom MagicSchool URL.

The student entry point is `index.html`. The project inventory is `teacher/command-center.html`, backed by the generated `assets/data/project-status-manifest.js` file.

## Core Architecture

Standard unit lessons are thin HTML shells plus a topic data file, a renderer-config file, and `assets/js/behistorical-topic-renderer-v1.js`. Foundations uses `foundations/foundations-topic-renderer.js`. First & 10 readings are standalone pages embedded through capture wrappers. BeInTheRoom simulations live under `beintheroom/unit-N/` and must pass the theme-alignment gate in `docs/beintheroom-scenario-blueprint.md` before they are linked.

## 10-Module Structure Standard

Every lesson page — Unit and Foundations — must display exactly **10 modules** in this fixed order:

| # | ID | Title | Unit Page | Foundations Page |
|---|---|---|---|---|
| 01 | `map` | Map & Geography Check | `renderMap()` | `renderMap()` |
| 02 | `first10` | First & 10 Reading | `renderFirst10()` | `renderFirst10()` |
| 03 | `contentdelivery` | Content Delivery | jump `#lecture` | jump `#content` |
| 04 | `besurreal` | BeSurreal | `renderBeSurreal()` | `renderBeSurreal()` |
| 05 | `skill` | AP Skill Builder | `renderSkill()` | `renderSkill()` |
| 06 | `checkpoint1` | Checkpoint 1 | `renderCheckpoint1()` | `renderCheckpoint1()` |
| 07 | `evidence` | Evidence Lab | `renderEvidence()` | `renderEvidence()` |
| 08 | `source` / `coach` | Primary Source (Unit) / Socrates AI Coach (Foundations) | `renderSource()` | `renderCoach()` |
| 09 | `beintheroom` | BeInTheRoom | link to external URL | link to external URL (or placeholder if none) |
| 10 | `checkpoint2` | Checkpoint 2 | `renderCheckpoint2()` | `renderCheckpoint2()` |

**Rules:**
- Module 03 is always a jump link, never a pop-out modal.
- Module 09 is always an external link (`window.open`) when a URL exists; otherwise shows a "coming soon" placeholder.
- Module count must be exactly 10 — no more, no fewer.
- The `beSurreal` field is required in every data file (Unit and Foundations). It must have `title`, `desc`, `intro`, `detail`, and `prompt`.
- When a Foundations data file has no `beInTheRoom.url`, the renderer renders the "coming soon" placeholder automatically.

## Classroom Flow Standard

Every lesson page (Unit and Foundations) **must** display the same three-card Classroom Flow inside a `.lesson-roadmap` container. The three steps are fixed — never customized per lesson:

```html
<div class="lesson-roadmap">
  <div class="roadmap-step"><strong>1. Build Context</strong>Review the targets, examine the map, and read the First &amp; 10 narrative.</div>
  <div class="roadmap-step"><strong>2. Learn &amp; Practice</strong>Use the module cards, then move into the main lecture-card section.</div>
  <div class="roadmap-step"><strong>3. Check Understanding</strong>Complete checkpoints with self-check and response tools.</div>
</div>
```

- Unit lesson pages: the `.lesson-roadmap` div is hardcoded in the HTML.
- Foundations pages: the renderer populates `id="block-plan-roadmap"` (which has `class="lesson-roadmap"`) with the same three `.roadmap-step` divs. The Foundations `blockPlan` data array is ignored for display — it exists only as instructor reference material.

## First & 10 Reading Standard

Every First & 10 reading **must** follow the Topic 1.1 structure exactly. This rule applies to all units and foundations.

### Required structure (in order)

1. **`module-header`** — badge (`Module XX`), module name (`First & 10 Reading`), module subtitle (topic + course)
2. **`reading-title-band`** — eyebrow text, `h1.reading-title` (one word wrapped in `<em>` for gold highlight), `p.reading-deck` (italic subtitle), `.skill-tags` row
3. **`reading-body`** (warm-paper background, ink text)
   - `.support-strip` — two `.support-card` elements ("Before You Read" + "Reading Target")
   - `.vocab-strip` — key terms as `.term-chip` pills
   - Multiple `.section` divs, each with: `.section-number` watermark, `.section-label` eyebrow, `h2.section-heading`, `.reading-text` paragraphs, at least one `.ap-callout` with an AP skill label
   - `.be-ready` strip — "BeReady: 10-Second Takeaway"
4. **`.check-section`** — exactly three `.question-item` elements, each with `.q-num`, `.q-skill` badge, `.q-text`, and `textarea.q-textarea`
5. **Builder section 1 — "Build Your Google Form Response"** — `.builder-section` with `buildGooglePrompt()` button, `#google-output` textarea, `submitToGoogleForm()` button
6. **Builder section 2 — "Build Your AI Coach Prompt"** — `.builder-section` with `buildAiPrompt()`, `copyAiPrompt()`, and Open MagicSchool buttons, `#ai-output` textarea
7. **`.page-footer-note`** — submission note
8. **`.module-footer`** — nav links back to lesson path (← Map & Geography | Content Delivery →)

### Delivery pattern

Every First & 10 must use the **embedded iframe** pattern:
- **Standalone reading file** (`first-and-10-topic-X-X-SLUG.html`) — contains all reading content, check section, and builder sections
- **Capture wrapper** (`first-and-10-topic-X-X-SLUG-capture.html`) — thin iframe wrapper that intercepts "Submit to Google Form" and "Open MagicSchool" button clicks
- **Lesson data file** — `first10.embedUrl` must point to the capture wrapper (e.g., `'first-and-10-topic-1-1-song-china-capture.html'`)

### CSS class names (canonical)

Always use the full class names from Topic 1.1/1.2. Never use abbreviated names (`.cs`, `.qi`, `.mf`, etc.).

### Prohibited patterns

- No inline first10 rendering (paragraphs array + single prompt string)
- No standalone HTML without a capture wrapper
- No `embedUrl` pointing directly to the standalone HTML (must point to the capture wrapper)
- No abbreviated CSS class names

### Capture wrapper pattern

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First & 10 Capture Wrapper | Topic X.X</title>
  <style>
    html, body { margin: 0; padding: 0; width: 100%; height: 100%; background: #1A1C1D; overflow: hidden; }
    iframe { width: 100%; height: 100vh; border: 0; display: block; }
  </style>
</head>
<body>
  <iframe id="first10-frame" src="first-and-10-topic-X-X-SLUG.html" title="First and 10 Topic X.X"></iframe>
  <script>
    const PREFILLED_FIRST10_FORM = 'https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=UNIT_LABEL&entry.187055090=TOPIC_LABEL&entry.1549761827=TOPIC_ID-first10&entry.2107637366=First+and+10&entry.1963461515=SKILL1&entry.1963461515=SKILL2';
    const MAGICSCHOOL_URL = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
    // ... wireFirst10Capture() function (see topic 1.1 capture wrapper)
  </script>
</body>
</html>
```
