# BeHistorical, Claude Code Rules

## Git

- Always commit and push directly to `main`.
- Do not create feature branches or pull requests.

## Repository Commands

- `node scripts/validate.js`, run the full structural, capture-wiring, and image-integrity audit.
- `node scripts/check-image-urls.js`, verify every remote Commons image URL actually resolves. Needs internet access to `commons.wikimedia.org`; `validate.js` stays offline on purpose and cannot do this.
- `node scripts/build-instructional-maps.js`, rebuild the local Map & Geography maps from `scripts/lib/instructional-map-specs.js`.
- `node scripts/build-module-art.js`, rebuild the local module-card and per-slot fallback artwork.
- `node scripts/build-announcements.js`, rebuild the classroom announcements board from `assets/data/announcements-schedule.js`, pulling each day's learning targets and success criteria out of that topic's lesson data file. Writes the generated `assets/data/announcements.js`, never edit that file by hand.
- `node scripts/generate-status-manifest.js`, refresh the teacher command-center inventory after adding or removing deliverables.
- `node scripts/build-unit6.js`, deterministically rebuild Unit 6 Topics 6.2–6.8 and their BeInTheRoom scenarios.
- `node scripts/build-unit9.js`, deterministically rebuild Unit 9 Topics 9.4–9.9 and their BeInTheRoom scenarios.
- `node scripts/normalize-student-facing-language.js`, normalize Canvas guidance and the classroom MagicSchool URL.
- `node scripts/remove-google-form-capture.js`, idempotently strip any Google Form capture that reappears in a reading, wrapper, or lesson shell, and normalize all 77 capture wrappers to the MagicSchool-only shape.
- `node scripts/parse-canvas-submissions.js <dir>`, turn an unzipped Canvas "Download Submissions" folder into `responses.csv` (one row per student per module response) and `exceptions.csv`. Reads and writes local files only, never the network. See `docs/CANVAS-CAPTURE.md`.

The student entry point is `index.html`. The project inventory is `teacher/command-center.html`, backed by the generated `assets/data/project-status-manifest.js` file.

## Image Contract

Every picture a student can see must be on-topic and must be impossible to break:

- **Local artwork is the floor.** `assets/images/module-art/` holds generated
  artwork for every module card and every lecture, evidence, and map slot. Both
  renderers wire `onerror` to it, so a dead remote URL degrades to on-topic local
  art instead of an empty frame.
- **An empty `url` is a valid choice.** Leave `url` and `sourceUrl` empty and the
  renderer draws that slot's local artwork. Prefer this to a picture that does not
  match its caption.
- **Map & Geography needs an actual map.** Most map slots point at a generated
  local map in `assets/images/instructional-maps/`. Never put a portrait, a
  painting, a photograph, or a blank world outline in a map slot.
- **Hub topic cards carry two `<img>` layers**, local art underneath and the
  photograph on top with `onerror="this.remove()"`:

  ```html
  <a class="unit-card" href="...">
    <img class="card-art" src="../assets/images/module-art/unit-5/topic-5-3/map.svg" alt="" aria-hidden="true">
    <img class="card-photo" src="https://commons.wikimedia.org/wiki/Special:FilePath/..." alt="" aria-hidden="true" onerror="this.remove()">
  ```

  Do **not** put card artwork in a CSS custom property. A relative `url()` inside
  one resolves against the stylesheet's folder, not the page, so local paths
  silently 404. `validate.js` enforces the `<img>` structure.
- **Generated SVGs must carry `width` and `height`.** A `viewBox` alone leaves the
  intrinsic size undefined, and an `<img>` holding one gets stretched by its
  container until the picture is letterboxed off-screen.
- **Never commit a placeholder image file.** `validate.js` checks magic bytes;
  a text file named `.jpg` fails the build.

## Core Architecture

> **The Google Form is retired.** It was removed on 2026-08-07 along with
> `behistorical-form-config.js`, every Submit to Form button, and the Build Your
> Google Form Response builder. `docs/FORM-CONTRACT.md` records why, and
> `validate.js` fails the build if any of it reappears. Do not wire it back up.
> **MagicSchool is unaffected**; it was never a capture channel and every AI
> Coach prompt builder and Open MagicSchool button stays.

> **Before touching the Gather All My Work panel or its record footer, read
> `docs/CANVAS-CAPTURE.md`.** Both renderers emit the footer and one parser reads
> it, so a change to any one of the three breaks the other two. A wrong
> `expected` count reports complete submissions as incomplete, which is worse
> than no count at all.

Standard unit lessons are thin HTML shells plus a topic data file, a renderer-config file, and `assets/js/behistorical-topic-renderer-v1.js`. Foundations uses `foundations/foundations-topic-renderer.js`. First & 10 readings are standalone pages embedded through capture wrappers. BeInTheRoom simulations live under `beintheroom/unit-N/` and must pass the theme-alignment gate in `docs/beintheroom-scenario-blueprint.md` before they are linked.

## 10-Module Structure Standard

Every lesson page, Unit and Foundations, must display exactly **10 modules** in this fixed order:

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
- Module count must be exactly 10, no more, no fewer.
- The `beSurreal` field is required in every data file (Unit and Foundations). It must have `title`, `desc`, `intro`, `detail`, and `prompt`.
- When a Foundations data file has no `beInTheRoom.url`, the renderer renders the "coming soon" placeholder automatically.

## Classroom Flow Standard

Every lesson page (Unit and Foundations) **must** display the same three-card Classroom Flow inside a `.lesson-roadmap` container. The three steps are fixed, never customized per lesson:

```html
<div class="lesson-roadmap">
  <div class="roadmap-step"><strong>1. Build Context</strong>Review the targets, examine the map, and read the First &amp; 10 narrative.</div>
  <div class="roadmap-step"><strong>2. Learn &amp; Practice</strong>Use the module cards, then move into the main lecture-card section.</div>
  <div class="roadmap-step"><strong>3. Check Understanding</strong>Complete checkpoints with self-check and response tools.</div>
</div>
```

- Unit lesson pages: the `.lesson-roadmap` div is hardcoded in the HTML.
- Foundations pages: the renderer populates `id="block-plan-roadmap"` (which has `class="lesson-roadmap"`) with the same three `.roadmap-step` divs. The Foundations `blockPlan` data array is ignored for display, it exists only as instructor reference material.

## First & 10 Reading Standard

Every First & 10 reading **must** follow the Topic 1.1 structure exactly. This rule applies to all units and foundations.

### Required structure (in order)

1. **`module-header`**, badge (`Module XX`), module name (`First & 10 Reading`), module subtitle (topic + course)
2. **`reading-title-band`**, eyebrow text, `h1.reading-title` (one word wrapped in `<em>` for gold highlight), `p.reading-deck` (italic subtitle), `.skill-tags` row
3. **`reading-body`** (warm-paper background, ink text)
   - `.support-strip`, two `.support-card` elements ("Before You Read" + "Reading Target")
   - `.vocab-strip`, key terms as `.term-chip` pills
   - Multiple `.section` divs, each with: `.section-number` watermark, `.section-label` eyebrow, `h2.section-heading`, `.reading-text` paragraphs, at least one `.ap-callout` with an AP skill label
   - `.be-ready` strip, "BeReady: 10-Second Takeaway"
4. **`.check-section`**, exactly three `.question-item` elements, each with `.q-num`, `.q-skill` badge, `.q-text`, and `textarea.q-textarea`
5. **Builder section, "Build Your AI Coach Prompt"**, `.builder-section` with `buildAiPrompt()`, `copyAiPrompt()`, and Open MagicSchool buttons, `#ai-output` textarea
6. **`.page-footer-note`**, submission note
7. **`.module-footer`**, nav links back to lesson path (← Map & Geography | Content Delivery →)
8. **The First & 10 answer-capture script block.** It writes the three answers to `behistorical-first10-<TOPIC>` where both renderers read them for Gather All My Work. Drop it and those answers never reach Canvas.

### Delivery pattern

Every First & 10 must use the **embedded iframe** pattern:
- **Standalone reading file** (`first-and-10-topic-X-X-SLUG.html`), contains all reading content, check section, and builder sections
- **Capture wrapper** (`first-and-10-topic-X-X-SLUG-capture.html`), thin iframe wrapper that intercepts "Open MagicSchool" button clicks
- **Lesson data file**, `first10.embedUrl` must point to the capture wrapper (e.g., `'first-and-10-topic-1-1-song-china-capture.html'`)

### CSS class names (canonical)

Always use the full class names from Topic 1.1/1.2. Never use abbreviated names (`.cs`, `.qi`, `.mf`, etc.).

### Prohibited patterns

- No inline first10 rendering (paragraphs array + single prompt string)
- No standalone HTML without a capture wrapper
- No `embedUrl` pointing directly to the standalone HTML (must point to the capture wrapper)
- No abbreviated CSS class names
- No Google Form anything: no `submitToGoogleForm`, `buildGooglePrompt`, `#google-output`, `BH_FORM`, `PREFILLED_FIRST10_FORM`, or `behistorical-form-config.js`

### Capture wrapper pattern

All 77 wrappers share one shape. The MagicSchool interception is load-bearing:
most readings render that button with no `onclick` and rely on the wrapper
catching the click by label, so a wrapper without it is a dead button.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First &amp; 10 Capture Wrapper | Topic X.X</title>
  <style>
    html, body { margin: 0; padding: 0; width: 100%; height: 100%; background: #1A1C1D; overflow: hidden; }
    iframe { width: 100%; height: 100vh; border: 0; display: block; }
  </style>
</head>
<body>
  <iframe id="first10-frame" src="first-and-10-topic-X-X-SLUG.html" title="First and 10 Topic X.X"></iframe>
  <script>
    const MAGICSCHOOL_URL = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
    // ... wireFirst10Capture() intercepts clicks labelled
    //     'open magicschool' or 'open ai coach'
  </script>
</body>
</html>
```

Run `node scripts/remove-google-form-capture.js` to regenerate all 77 to this
shape. It is idempotent.
