---
name: audit-site
description: Validate structural integrity of the BeHistorical site, form config, lesson wiring, hub links, module counts, and meta.topic consistency.
---

# BeHistorical Site Audit

Run a comprehensive validation sweep across the entire BeHistorical project. Report all findings grouped by severity (errors, warnings, info).

## Checks to perform

### 1. Google Form Retirement
The Google Form was retired on 2026-08-07; see `docs/FORM-CONTRACT.md` for why.
- No student-facing surface may contain `docs.google.com/forms`, `BH_FORM`, `behistorical-form-config`, `submitToGoogleForm`, `buildGooglePrompt`, or `PREFILLED_FIRST10_FORM`.
- Report any file that does, and point at `scripts/remove-google-form-capture.js`.

### 2. Canvas Capture Wiring
- Every lesson page must render the Save Your Work panel with Gather All My Work.
- Every gathered document must carry the record footer; see `docs/CANVAS-CAPTURE.md`.
- Report any lesson whose `expected` capture count disagrees with the slots it actually renders. An inflated count reports complete submissions as incomplete.

### 3. Hub Link Integrity
- For each `unit-*/index.html`, extract all `href` values from unit-card links.
- Any `href="#"` is an error, it means a topic card has no lesson page.
- Any `href` pointing to a file that doesn't exist on disk is an error.
- Report per-unit: how many cards, how many linked, how many broken.

### 4. meta.topic Format
- Every `assets/data/lesson-*.js` must have a `topic:` field matching the pattern `"Topic X.Y"` or `'Topic X.Y'` (where X is 1-9 and Y is 1-99).
- The renderer strips `"Topic "` prefix to get the key. If the format is wrong, `autoBuildCaptureUrls()` silently fails.
- Report any non-conforming files.

### 5. File Completeness Per Topic
For each topic that has a lesson HTML page, check that these companion files also exist:
- `assets/data/lesson-{unit}-{seq}-{slug}.js` (data file)
- `assets/data/lesson-{unit}-{seq}-renderer-config.js` (renderer config)
- `unit-{N}/first-and-10-topic-{X}-{Y}-{slug}.html` (standalone First & 10)
- `unit-{N}/first-and-10-topic-{X}-{Y}-{slug}-capture.html` (capture wrapper)
Report missing companion files.

### 6. Module Count
Per CLAUDE.md, every lesson must render exactly 10 modules. Check each data file for the presence of:
- `map` object
- `first10` object
- `beSurreal` object
- `skillBuilder` object
- `checkpoints` array with at least 2 entries (checkpoint1 + checkpoint2)
- `evidenceLab` object
- `primarySource` object
- `beInTheRoom` object (or URL)
Report data files missing required module sections.

### 7. Capture Wrapper MagicSchool Wiring
For each `first-and-10-*-capture.html`, verify it defines `MAGICSCHOOL_URL` and
intercepts clicks labelled `open magicschool` or `open ai coach`.
Most readings render that button with no `onclick` and depend on the wrapper, so
a wrapper without the interception is a dead button, not a cosmetic gap.
Report any wrapper missing it.

## Output Format
Print a summary table at the end:
```
=== AUDIT SUMMARY ===
Errors:   X
Warnings: Y
Info:     Z
```

Use Bash with `grep` / `ls` / file reads to perform all checks. Do NOT modify any files, this is read-only.
