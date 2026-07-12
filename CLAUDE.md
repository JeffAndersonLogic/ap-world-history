# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

BeHistorical is a static, dependency-free AP World History course site: plain HTML/CSS/JS served directly, no bundler, no framework, no `package.json`. Lesson pages are static HTML shells whose content is supplied by small `window.BEHISTORICAL_LESSON` (Units) / `window.FOUNDATION_TOPIC` (Foundations) JS objects and rendered client-side by a shared renderer script.

## Commands

- **Validate the whole site:** `node scripts/validate.js` — checks every data file, renderer config, First & 10 page, and lesson shell against the structural rules in this file (module count, `beSurreal` presence, First & 10 structure, etc.). This also runs automatically on session start via the `SessionStart` hook in `.claude/settings.json`, so its output already appears at the top of a fresh session.
- **Regenerate the command-center status manifest** after adding or editing topics: `node scripts/generate-status-manifest.js` — writes `assets/data/project-status-manifest.js`, which `docs/command-center.html` reads to show per-topic build status. That manifest file is generated; don't hand-edit it.
- There is no build step, package manager, linter, or automated test framework — `scripts/validate.js` is the closest thing to a test suite. To preview a page, open the `.html` file directly or serve the repo root with any static file server.

## Project-specific Claude Code skills

Three skills live in `.claude/skills/` (invoke as `/build-lesson`, `/audit-site`, `/wire-form`). Prefer these over hand-rolling the equivalent work — they encode the conventions in this file precisely:

- **`build-lesson`** — scaffolds a complete lesson package for a topic number/title: HTML shell, data JS, renderer config, First & 10 reading + capture wrapper, unit hub link, and form-config registration.
- **`audit-site`** — read-only structural audit: form-config coverage, hub link integrity, module count, `meta.topic` format, First & 10 companion-file completeness, capture-wrapper prefill consistency.
- **`wire-form`** — audits and fixes the Google Form prefill pipeline end-to-end (topic/unit labels, `buildFormURL` integrity, skill-mapping coverage, capture wrapper URL mismatches).

## Git

- Always commit and push directly to `main`.
- Do not create feature branches or pull requests.

## Architecture

### Content tree

- **`unit-1/` … `unit-9/`** — one folder per AP World unit. Each contains: `index.html` (unit hub with topic cards linking to lessons), `lesson-{unit}-{topic}-{slug}.html` (lesson shell), `first-and-10-topic-{unit}-{topic}-{slug}.html` (standalone First & 10 reading), `first-and-10-topic-{unit}-{topic}-{slug}-capture.html` (iframe capture wrapper), and `map-module-*.html` (geography check pages).
- **`foundations/`** — the pre-1200 bridge unit (5 topics: Geography, Belief Systems, States & Power, Trade Networks, World at 1200). Same lesson pattern, but data is `window.FOUNDATION_TOPIC`, rendered by `foundations/foundations-topic-renderer.js` against `foundations/foundations-template.html`. Module 08 here is `renderCoach()` (Socrates AI Coach) instead of the Unit pages' `renderSource()` (Primary Source) — see the module table below. The Foundations `blockPlan` data array is reference-only; the rendered Classroom Flow is always the fixed three-step markup, never built from `blockPlan`.
- **`assets/data/lesson-*.js`** — per-lesson content (`window.BEHISTORICAL_LESSON`). Unit 1 data files are self-contained (checkpoints, `stableImages`, etc. inline). Unit 2+ split content between the data file (base content) and a paired `lesson-{unit}-{topic}-renderer-config.js` that amends it (typically adds `checkpoints`, `skillBuilder`, `stableImages`, `beSurreal`, `beInTheRoom`, `embedUrl`). `scripts/validate.js` checks the data file + renderer config *together*, so a required key present in either file satisfies the requirement.
- **`assets/js/behistorical-topic-renderer-v1.js`** — the single shared renderer for all Unit lesson pages. Reads `window.BEHISTORICAL_LESSON`, renders the 10 module cards, and builds Google Form submission URLs via `autoBuildCaptureUrls()`.
- **`assets/js/behistorical-form-config.js`** — central `BH_FORM` config (units, topics, response types, skill-focus mappings) and `buildFormURL(topicKey, responseTypeKey)`, the single source of truth for prefilled Google Form URLs. Every lesson HTML must load this script *before* the renderer script.
- **`assets/templates/behistorical-topic-template-v1.html`** — the master template `build-lesson` copies when scaffolding a new lesson shell.
- **`teacher/`** (`index.html`, `dashboard.html`) + **`assets/js/teacher-dashboard-renderer.js`** — Teacher Hub pages. **`tools/teacher-hub/google-apps-script/Code.gs`** is the Google Apps Script backing it (processes Google Form submissions into the dashboard's data source).
- **`beintheroom/unit-N/*.html`** — standalone decision-point scenario pages, hand-named by slug (not derivable from the topic number) and referenced via a lesson's `beInTheRoom.url` field. A topic with no built scenario shows a "coming soon" placeholder instead. Every scenario must pass the **Step 0 — Theme Alignment Gate** documented in `docs/beintheroom-scenario-blueprint.md` before being drafted: the premise and decision points must directly enact a specific CED thematic-focus/learning-objective pair, not be transplantable to a different topic unchanged.
- **`docs/command-center.html`** — dashboard reading the generated `assets/data/project-status-manifest.js` to show build status (shell/data/renderer/First & 10/BeInTheRoom) per topic across all units.
- **`PROJECT_STATUS.md`** — an append-only running log of build sessions (per-topic BeInTheRoom scenario frames, Step 0 gate verdicts, continuity hooks between topics, CED text constraints). Append new entries; don't rewrite prior ones.

### Data flow for a Unit lesson page

1. The lesson HTML shell loads scripts in this order: `behistorical-form-config.js` → `assets/data/lesson-{u}-{t}-{slug}.js` (sets `window.BEHISTORICAL_LESSON`) → `assets/data/lesson-{u}-{t}-renderer-config.js` (amends it) → `behistorical-topic-renderer-v1.js` (renders it). `audit-site` flags any lesson HTML missing the form-config script or loading it after the renderer.
2. The renderer derives the topic key by stripping `"Topic "` from `L.meta.topic` (must match exactly `"Topic X.Y"`, or `autoBuildCaptureUrls()` silently fails) and calls `buildFormURL()` to wire the 4 capture touchpoints — First & 10, Checkpoint 1, BeInTheRoom, Checkpoint 2 — to prefilled Google Form URLs.
3. First & 10 is never rendered inline by the shared renderer: `first10.embedUrl` must point to a capture-wrapper HTML file (see "First & 10 Reading Standard" below) that iframes the standalone reading page and intercepts its own submit buttons.

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

## Google Form prefill pipeline

Three layers, all documented in detail by the `wire-form` skill:

1. **`assets/js/behistorical-form-config.js`** — `BH_FORM` (units, topics, response types, skill-focus mappings) and `buildFormURL(topicKey, responseTypeKey)`.
2. **`assets/js/behistorical-topic-renderer-v1.js`** — `autoBuildCaptureUrls()` calls `buildFormURL()` to wire submit buttons in module modals. It must never hardcode unit/topic strings.
3. **Capture wrappers** (`first-and-10-*-capture.html`) — hardcode a `PREFILLED_FIRST10_FORM` URL built with the same entry IDs as `buildFormURL`.

Form entry IDs: `entry.125385659` = Unit, `entry.187055090` = Topic, `entry.1549761827` = Prompt ID (`{topicKey}-{slug}`), `entry.2107637366` = Response Type, `entry.1963461515` = Skill Focus (repeated per skill), `entry.1794755975` = Class Period (student-selected).
