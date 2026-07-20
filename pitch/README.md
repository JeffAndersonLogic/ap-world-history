# BeHistorical — Pitch Deck (AndersonLogic AI)

A 10-slide pitch deck presenting BeHistorical and its features, framed for a
school-administration audience and positioned for professional development and
future consulting.

Slides 1, 4, 5, 6, and 9 embed real screenshots of the live student pages
(the bronze emblem, the 10-module lesson grid, a First & 10 reading, an
"Advising the Song Court" BeInTheRoom scenario, and the Command Center).

## Files

- **`behistorical-pitch-deck.html`** — self-contained, interactive web deck
  (screenshots embedded as data URIs). Open in any browser. Navigate with
  ← / → arrow keys, on-screen controls, the dot indicators, or by clicking the
  left/right half of a slide. No build step, no external dependencies.
- **`BeHistorical-AndersonLogic-AI.pptx`** — editable PowerPoint version with the
  same 10 slides, content, and screenshots, for presenting live or handing off.
- **`build-deck.js`** — the `pptxgenjs` generator that produces the `.pptx`.
  Rebuild with `node build-deck.js` (requires `pptxgenjs`; reads the screenshot
  data from `img-datauris.json` / `img-dims.json` in this folder).
- **`img-datauris.json`, `img-dims.json`** — the embedded screenshots (base64)
  and their pixel dimensions, so the `.pptx` is reproducible.

## Slides

1. Title — AndersonLogic AI presents BeHistorical
2. Why BeHistorical exists — three problems every AP classroom faces
3. Scope at a glance — a finished course, not a demo
4. The signature system — the 10-module learning path
5. Named modules students remember — First & 10, BeSurreal, Evidence Lab, Primary Source, AP Skill Builder, BeReady
6. BeInTheRoom — the flagship decision simulations
7. AI that coaches, never completes — the guardrails and work flow
8. For the teacher — the analytics / command center layer
9. Built like software — the engineering rigor behind the scale
10. Where this goes — a repeatable method, PD, and a platform to grow on

## Brand

Anchored to **AndersonLogic AI** (company) with **BeHistorical** as the flagship
product; created by Jeff Anderson. Visual identity uses BeHistorical's own
ink-and-gold aesthetic.
