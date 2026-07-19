---
name: wire-form
description: Validate and fix the Google Form prefill pipeline, verify every lesson generates correct prefilled URLs, check topic label matches, flag missing skill mappings, and audit capture wrappers.
---

# BeHistorical Form Wiring Audit & Fix

Validate the end-to-end pipeline from lesson submit buttons → Google Form prefill → Teacher Hub. This skill both audits AND fixes issues it finds.

## Reference: Form Architecture

The prefill pipeline has three layers:
1. **`behistorical-form-config.js`**, Central config with `BH_FORM` object and `buildFormURL(topicKey, responseTypeKey)`
2. **`behistorical-topic-renderer-v1.js`**, `autoBuildCaptureUrls()` generates submit buttons in module modals using `buildFormURL`
3. **Capture wrappers**, `first-and-10-*-capture.html` files with hardcoded `PREFILLED_FIRST10_FORM` URLs

### Form entry IDs
- `entry.125385659` = Unit (dropdown)
- `entry.187055090` = Topic (dropdown)
- `entry.1549761827` = Prompt ID (dropdown)
- `entry.2107637366` = Response Type (radio buttons)
- `entry.1963461515` = Skill Focus (checkbox, repeat param per skill)
- `entry.1794755975` = Class Period (dropdown, student selects)

### Valid Skill Focus values
Causation, Comparison, Continuity and Change Over Time (CCOT), Contextualization, Argumentation, Evidence Usage, Sourcing, Complexity, Claims & Thesis

## Checks to perform

### 1. Topic Label Verification
Read `BH_FORM.topics` from `assets/js/behistorical-form-config.js`. For each topic:
- The label format must be `"{X.Y} - {Title}"` (dash with spaces, not em-dash or colon)
- All 76 AP World topics (1.1–1.7, 2.1–2.7, 3.1–3.4, 4.1–4.8, 5.1–5.10, 6.1–6.8, 7.1–7.9, 8.1–8.9, 9.1–9.9) should be present
- Report any missing topics

### 2. Unit Label Verification
Check `BH_FORM.units` has all 9 units with correct labels:
- Unit 1 - The Global Tapestry
- Unit 2 - Networks of Exchange
- Unit 3 - Land-Based Empires
- Unit 4 - Transoceanic Interconnections
- Unit 5 - Revolutions
- Unit 6 - Consequences of Industrialization
- Unit 7 - Global Conflict
- Unit 8 - Cold War and Decolonization
- Unit 9 - Globalization

### 3. buildFormURL Integrity
Verify the `buildFormURL` function in `behistorical-form-config.js`:
- Takes `(topicKey, responseTypeKey)` as arguments
- Sets `entry.125385659` (Unit) derived from topic key
- Sets `entry.187055090` (Topic) from `BH_FORM.topics[topicKey]`
- Sets `entry.1549761827` (Prompt ID) as `{topicKey}-{slug}`
- Sets `entry.2107637366` (Response Type) from `BH_FORM.responseTypes[responseTypeKey]`
- Appends `entry.1963461515` (Skill Focus) for each skill in `BH_FORM.skills[topicKey][responseTypeKey]`

### 4. Renderer Integration
Check `behistorical-topic-renderer-v1.js`:
- `autoBuildCaptureUrls()` must call `buildFormURL()` (not hardcode URLs or unit labels)
- Must NOT contain hardcoded unit strings like `'Unit 1 - The Global Tapestry'`
- The function must derive topicKey from `L.meta.topic` using `.replace('Topic ', '').trim()`

### 5. Skill Mappings Coverage
Check `BH_FORM.skills` in the form config:
- For each topic that has a lesson data file, report whether skill mappings exist
- Each topic should have entries for: `first10`, `skillBuilder`, `checkpoint1`, `evidenceLab`, `primarySource`, `checkpoint2`
- Each skill array should contain 1-4 values from the valid skill list
- Report: X of Y topics have skill mappings

### 6. Capture Wrapper Audit
For each `unit-*/first-and-10-*-capture.html`:
- Extract the `PREFILLED_FIRST10_FORM` URL
- Decode the URL parameters
- Verify Unit matches `BH_FORM.units[N]` for the topic's unit
- Verify Topic matches `BH_FORM.topics[key]`
- Verify Prompt ID follows the `{topicKey}-first10` pattern
- Verify Response Type is `First and 10`
- Report any mismatches

### 7. Lesson Page Form-Config Loading
For each `unit-*/lesson-*.html`:
- Verify `behistorical-form-config.js` script tag exists
- Verify it loads BEFORE the renderer script
- Report any missing or mis-ordered

## Fixes to apply (with user confirmation)
If issues are found:
1. **Missing topics in form config** → Add them with correct labels
2. **Missing form-config script tags** → Add to lesson HTML files
3. **Hardcoded unit labels in renderer** → Replace with `buildFormURL()` calls
4. **Capture wrapper URL mismatches** → Regenerate the `PREFILLED_FIRST10_FORM` URL

Always show the user what will change before applying fixes.

## Output Format
Print a per-check summary:
```
=== FORM WIRING AUDIT ===
[PASS] Topic labels: 76/76 present
[WARN] Skill mappings: 7/42 topics have mappings (35 missing)
[FAIL] Capture wrapper 6.3: Unit mismatch (expected "Unit 6 - ...", got "Unit 1 - ...")
...
```
