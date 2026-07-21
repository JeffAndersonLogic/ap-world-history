# BeHistorical — Pitch Decks (AndersonLogic AI)

Two decks:

1. **The admin deck** (`behistorical-pitch-deck.html` / `.pptx`) — an 18-slide
   product deck for a school-administration audience, presenting BeHistorical
   and its features, its privacy posture, and a measurement plan.
2. **The PD / consulting variant** (`andersonlogic-pd-consulting.html` / the
   `AndersonLogic-AI-PD-Consulting.pptx`) — a 10-slide, business-forward deck
   that positions Jeff / AndersonLogic AI to be booked for paid PD and
   consulting: a named portable method, "what your teachers will be able to
   do," a transferability example, credibility, and an offer + call-to-action.

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
16. Measuring impact — how we'll know it's working (signals + outcome targets)
17. Where the build stands — live vs. in development vs. exploring
18. Where this goes — a repeatable method, PD, and a platform to grow on

## The PD / consulting variant (10 slides)

`andersonlogic-pd-consulting.html` · `AndersonLogic-AI-PD-Consulting.pptx` ·
`build-pd-deck.js`

1. Title — AndersonLogic AI: "AI-integrated instruction that augments, never replaces"
2. The problem every school shares (universal, not AP-specific)
3. Why this is different — "I built a working system, not a talk"
4. The proof — BeHistorical *(screenshot montage)*
5. The Augment Method — the transferable, subject-agnostic framework
6. What your teachers will be able to do
7. It's not just history — the method mapped to another subject
8. Why work with me — the builder-teacher credibility case
9. How we'd work together — four engagement tiers
10. Call to action — book a discovery call

### Fill in before sending (placeholders are marked in the deck)

- **Framework name** — "The Augment Method" is a working name; rename if you prefer.
- **Credentials** (slide 8) — years teaching, AP experience, any results/recognition.
- **Offer** (slide 9) — add pricing/packages when ready.
- **Contact** (slide 10) — business email + website. Do **not** use your school
  (k12) email on the consulting deck — keep the business and the school separate.
- **Transferability** (slide 7) — the AP Biology column is illustrative; swap in
  a subject you want to target.

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
