# BeHistorical — Pitch Deck (AndersonLogic AI)

A 17-slide pitch deck presenting BeHistorical and its features, framed for a
school-administration audience and positioned for professional development and
future consulting.

Screenshots and mockups embedded throughout. Real, shipping features use live
screenshots; features that are still being built are shown as clearly-labeled
design mockups (an **In Development** / **Live Prototype** badge on the slide).

## Files

- **`behistorical-pitch-deck.html`** — self-contained, interactive web deck
  (all images embedded as data URIs). Open in any browser. Navigate with
  ← / → arrow keys, on-screen controls, the dot indicators, or by clicking the
  left/right half of a slide. No build step, no external dependencies.
- **`BeHistorical-AndersonLogic-AI.pptx`** — editable PowerPoint version with the
  same 15 slides, content, and images, for presenting live or handing off.
- **`build-deck.js`** — the `pptxgenjs` generator (`node build-deck.js`; reads
  `img-datauris.json` / `img-dims.json`).
- **`mock-studyguide.html`, `mock-dispatch.html`** — the source for the two
  concept mockups (personalized study guide, The Dispatch newsletter).
- **`img-datauris.json`, `img-dims.json`** — the embedded images (base64) and
  their pixel dimensions, so the `.pptx` is reproducible.

## Slides

1. Title — AndersonLogic AI presents BeHistorical
2. Why BeHistorical exists — three problems every AP classroom faces
3. Scope at a glance — a finished course, not a demo
4. The signature system — the 10-module learning path *(live screenshot)*
5. Named modules students remember *(First & 10 screenshot)*
6. BeInTheRoom — decision simulations *(Song Court screenshot)*
7. AI that coaches, never completes — the guardrails
8. Personalized study guides — *In Development* concept mockup
9. The Dispatch — biweekly family newsletter — *In Development* mockup (Issue 01)
10. The Teacher Hub — *Live Prototype* screenshot
11. From raw answers to teaching decisions — the analytics engine
12. FERPA-safe AI — MagicSchool (district-approved) + Claude for Teachers
13. Data governance — student data stays inside district-approved systems
14. Built like software — the Command Center *(live screenshot)*
15. How it all connects — one platform, one data layer, three audiences
16. Where the build stands — live vs. in development vs. exploring
17. Where this goes — a repeatable method, PD, and a platform to grow on

### Verify before presenting

Slides 12–13 make compliance claims — confirm the exact wording with your
district before presenting: the precise MagicSchool adoption/DPA language, the
exact Claude education product name and its FERPA/data-use terms, and which
Google/Canvas agreements cover data capture and submission.

## Status honesty

- **Live today:** the 77-lesson platform, First & 10 readings, BeInTheRoom
  simulations, the AI-coach workflow, the Command Center, and the Teacher Hub
  prototype (Topic 1.1, rule-based Apps Script backend).
- **In development:** personalized study guides (concept) and The Dispatch
  newsletter (master template + Issue 01 + rotation content library built;
  delivered via Google Apps Script → ParentSquare).

## Brand

Anchored to **AndersonLogic AI** (company) with **BeHistorical** as the flagship
product; created by Jeff Anderson. Visual identity uses BeHistorical's own
ink-and-gold aesthetic.
