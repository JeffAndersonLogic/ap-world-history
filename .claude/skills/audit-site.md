---
name: audit-site
description: Validate structural integrity of the BeHistorical site, form config, lesson wiring, hub links, module counts, and meta.topic consistency.
---

# BeHistorical Site Audit

Run a comprehensive validation sweep across the entire BeHistorical project. Report all findings grouped by severity (errors, warnings, info).

## Checks to perform

### 1. Form Config Coverage
- Every topic key found in `assets/data/lesson-*.js` (parsed from `meta.topic`) must exist in `BH_FORM.topics` in `assets/js/behistorical-form-config.js`.
- Every unit number derived from topic keys must exist in `BH_FORM.units`.
- Report any data files with topics NOT registered in the form config.

### 2. Form Config Script Tag
- Every `unit-*/lesson-*.html` file must contain a `<script>` tag loading `behistorical-form-config.js`.
- The form-config script must appear BEFORE the renderer script (`behistorical-topic-renderer-v1.js`).
- Report any lesson HTML files missing or mis-ordered.

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

### 7. Capture Wrapper Prefill Consistency
For each `first-and-10-*-capture.html`, extract the `PREFILLED_FIRST10_FORM` URL and verify:
- The `entry.125385659` (Unit) value matches `BH_FORM.units[N]`
- The `entry.187055090` (Topic) value matches `BH_FORM.topics[key]`
- The `entry.2107637366` (Response Type) is `First+and+10`
Report any mismatches.

## Output Format
Print a summary table at the end:
```
=== AUDIT SUMMARY ===
Errors:   X
Warnings: Y
Info:     Z
```

Use Bash with `grep` / `ls` / file reads to perform all checks. Do NOT modify any files, this is read-only.
