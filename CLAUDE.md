# BeHistorical — Claude Code Rules

## Git

- Always commit and push directly to `main`.
- Do not create feature branches or pull requests.

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
