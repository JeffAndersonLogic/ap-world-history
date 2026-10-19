# First & 10 readings: the content model and the page structure

Moved word for word from `CLAUDE.md` on 2026-10-17, the second pass of the 2026-10-16 decision to keep the rulebook every session loads short (recorded in AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`). `CLAUDE.md` keeps a short form of these rules; this file is the full text, with the reasons and the incidents behind them, and it is as binding as it was there. A comment elsewhere that says "see <section> in CLAUDE.md" means this file when the section is listed here.

## The Content Model

**Every one of the 77 First & 10 readings is generated.** Content lives in three
places, all rendered by `scripts/lib/first10-page.js`:

- `scripts/lib/f10-content.js`, Units 6 and 9 (13 readings)
- `scripts/lib/foundations-f10-content.js`, Foundations (6)
- `scripts/lib/reading-content/<unit>.js`, everything else (58)

There are no hand-authored readings left, and no sweep scripts are needed to
change one.

The point is not tidiness, it is that a change to the reading system reaches a
generated reading by rebuilding and reaches a hand-authored one only by writing a
sweep script that patches HTML in place. Every such script is permanent
maintenance debt and can only fix a problem already known about. That is how the
capture block went missing twice.

**Migrating a set of readings, in order:**

1. Extract the content into a module. Take paragraph, callout and support-card
   bodies as raw HTML: `<span class="kt">` is how a key term is found on the page
   and dropping it loses teaching, not styling.
2. Add whatever the template cannot yet express as an *optional* parameter that
   defaults to current behaviour, then regenerate the already-generated readings
   and confirm not one byte moved. This is the step that catches escaping bugs.
3. Prove the content survived with a golden diff against a **pinned** commit, not
   `HEAD`. A HEAD baseline compares the generated page against itself and can
   only say yes.
4. Prove it still looks right in a browser. Reviewed differences get listed with
   a reason rather than deleted, so the next unreviewed one still fails.
   Freeze the baseline as a committed fixture rather than a `git show`: CI
   checks out shallow, so a history lookup passes locally and fails on the only
   machine that gates anything.
5. Wire the reproducibility check into the offline suite, so a hand-edit to a
   generated file fails the push instead of being silently reverted by the next
   rebuild.


## First & 10 Reading Standard, the page structure

The instructional purpose and authoring standard stayed in `CLAUDE.md`. The structural rules below are what `scripts/lib/first10-page.js` generates and `validate.js` enforces.

### Required structure (in order)

1. **`module-header`**, badge (`Module XX`), module name (`First & 10 Reading`), module subtitle (topic + course)
2. **`reading-title-band`**, eyebrow text, `h1.reading-title` (one word wrapped in `<em>` for gold highlight), `p.reading-deck` (italic subtitle), `.skill-tags` row
3. **`reading-body`** (warm-paper background, ink text)
   - `.support-strip`, two `.support-card` elements ("Before You Read" + "Reading Target")
   - `.vocab-strip`, key terms as `.term-chip` pills
   - Multiple `.section` divs, each with: `.section-number` watermark, `.section-label` eyebrow, `h2.section-heading`, `.reading-text` paragraphs, at least one `.ap-callout` with an AP skill label
   - `.be-ready` strip, "BeReady: 10-Second Takeaway"
4. **`.check-section`**, exactly three `.question-item` elements, each with `.q-num`, `.q-skill` badge, `.q-text`, and `textarea.q-textarea`
5. **No builder section, and no route to Socrates at all.** The reading carried a
   "Build Your AI Coach Prompt" block until 2026-08-31. It is gone, along with the
   Open MagicSchool button, the inlined prompt builder and the inlined classroom
   resolver, which existed only to resolve that button's href. `validate.js`
   prohibits all of it on both the reading and its wrapper, in the inverted form
   of the checks that used to require it, so it cannot come back on one side only.
6. **`.page-footer-note`**, submission note
7. **`.module-footer`**, nav links back to lesson path (← Map & Geography | Content Delivery →)
8. **The First & 10 answer-capture script block.** It writes the three answers to `behistorical-first10-<TOPIC>` where both renderers read them for Gather All My Work. Drop it and those answers never reach Canvas. It is now the *only* thing in a reading's trailing `<script>`.

### Delivery pattern

Every First & 10 must use the **embedded iframe** pattern:
- **Standalone reading file** (`first-and-10-topic-X-X-SLUG.html`), contains all reading content and the check section. No builder section: `validate.js` prohibits one, per point 5 above.
- **Capture wrapper** (`first-and-10-topic-X-X-SLUG-capture.html`), thin iframe wrapper. It intercepted "Open MagicSchool" clicks until 2026-08-31; the reading has no coach button now, so there is nothing left to intercept and the wrapper is just the iframe. See "Capture wrapper pattern" below.
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

All 77 wrappers share one shape, and it is now just an iframe. The MagicSchool
click interception is gone with the reading's coach button: most readings
rendered that button with no `onclick` and relied on the wrapper catching the
click by label, so with no button there is nothing to intercept.

The wrapper itself stays, because `first10.embedUrl` points at it and the iframe
is the delivery pattern.

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
</body>
</html>
```

`scripts/lib/first10-capture-wrapper.js` is the one template; three tools write
these files and all three import it. Run `node scripts/remove-google-form-capture.js`
to regenerate all 77. It is idempotent.
