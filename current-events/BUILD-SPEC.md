# BeHistorical: Current Events — Build Spec

> **What this is:** a complete build brief for *BeHistorical Current Events*, a sibling to the existing BeHistorical AP World History site.
>
> **Status:** steps 1 through 3 of §10 are built. See `README.md` for what shipped, what is stubbed, and what is next.

---

## 1. The course this site serves

- **Title:** BeHistorical Current Events
- **Type:** semester-long elective, grades 9–12, mixed ability
- **Schedule:** alternating 90-minute blocks (students seen 5× per 2 weeks), 20-week semester
- **Owner:** Anderson Logic AI — links off `anderson-logic.net`, deploys as its own project
- **Daily resources in the room:** CNN 10 (≈10 min per episode, sometimes 2 per block) and *The Week* digital magazine (department-provided student subscriptions)

### The pedagogy: Reverse History

Students **start with a current event and trace it backward to its real origins** — the actual causal lineage of *that specific event*, so they understand why the world looks the way it does today.

**Design constraint that matters:** this is the history **of a named event**, not a theme-matching exercise across history. "The rise of social media, traced to its origins" is in scope. "Find three historical events that resemble social media" is **out** of scope. Where a historical parallel genuinely illuminates the pattern, it can appear as a *lens* — but the spine of every unit is the true lineage of the event itself.

---

## 2. Relationship to the AP World site

Reuse the **bones**, change the **skin**.

**Reuse:** the hub → unit-card → lesson-page architecture; the repeatable lesson rhythm; the Teacher Hub; the Google Form capture pattern; the BeHistorical logo and family identity.

**Change:** AP World reads as a traditional, scholarly, district-facing class. Current Events should read like a **living newsroom** — faster, louder, feed-like. Same family, different voice. Full visual direction in §5.

---

## 3. Information architecture

```
/ (Landing Hub)
├── Live ticker (fixed, top) + masthead
├── "How a unit works" — the lesson rhythm, explained
├── Event cards (the units) ─────────────► /event-01/ ... /event-NN/
├── The Culture Beat (recurring rail) ───► /culture/
├── Your Beat (student project home) ────► /your-beat/
└── Teacher Hub ─────────────────────────► /teacher/

/event-01/  (one page per event — the core unit page; see §6 worked example)
/culture/   (song / book / NYT-bestseller of the week; light, rotating)
/your-beat/ (independent tracing project: brief, format menu, rubric, submission)
/teacher/   (pacing, data dashboard links, MagicSchool coach link)
```

### Event bank (starter units — cards on the hub)

Each is a modern event traced to its origins.

- **The Rise of Social Media** — from a headline about its effects back to its origins *(fully worked in §6 as the template)*
- **The White-Collar Shock** — AI displacing knowledge workers
- **Israel & Palestine** — a current flashpoint traced back
- **Iran** — a current flashpoint traced back
- **Climate Change** — a current headline traced back
- **Immigration** — a current debate traced back
- **+ Student Choice** — powers the independent project (§7)

Optional grouping: events can be tagged into loose **strands** (e.g., *Technology & Society*, *Conflict & Power*, *People & Movement*) for filtering, but the **event card is the primary unit**, matching AP World.

---

## 4. The lesson rhythm (re-skinned 5-step flow)

Every event page runs the same five steps, so students learn one repeatable method.

| # | AP World step | Current Events step | What happens |
|---|---|---|---|
| 01 | First & 10 Reading | **The Brief** | CNN 10 clip + a short *The Week* read — today's pulse on the event |
| 02 | Map & Geography Check | **Where in the World** | Locator that also sets *scale*: local → state → national → global |
| 03 | Lecture Cards | **The Trace** | Reverse-timeline cards: NOW at the top, stepping back to the ORIGIN |
| 04 | Evidence Lab | **Evidence Lab** | Primary sources on the roots — read, interpret, weigh |
| 05 | AP Checkpoints | **Your Beat Checkpoint** | A milestone in the student's own tracing project + a quick response captured to a Google Form (§8) |

**Two cross-cutting threads on every page:**

- **Local → Global rail:** the same event surfaced at four scales (Zionsville → Indiana → national → world) so students learn that scale changes the story.
- **Culture Beat callout:** a rotating song / book / NYT-bestseller tie-in so the course isn't wall-to-wall heavy news.

---

## 5. Visual direction — the sister brand

**Concept:** a wire-service newsroom. Where AP World is the archive, Current Events is the **live desk**.

### Signature element
**The Reverse Timeline spine.** A vertical spine that anchors every event page. **NOW sits at the top in bright gunmetal; scrolling down walks *backward* through time toward the ORIGIN, and the palette darkens as you descend** (lit = present, dark = past). The structure *is* the pedagogy.

### Color tokens

> **Revised 2026-07-29.** The original brief called for a bright wire-service
> orange. Jeff asked for gunmetal grey instead, so the accent changed and the
> gradient was re-cut to run on **value** rather than temperature. The pedagogy
> is unchanged: the top of the spine is still the present, the bottom is still
> the origin.

```
--ink:        #14171A   /* masthead, headlines, primary text */
--newsprint:  #F6F7F7   /* page background — cool off-white, not cream */
--signal:     #5E6D79   /* THE accent: ticker, "NOW", live markers, spine top */
--charcoal:   #5A6169   /* secondary text, hairline rules, datelines */
--archive:    #1F2A34   /* the "past/origin" deep tone — spine bottom, THEN markers */
```

Rule of thumb: **NOW is lit (`--signal`), THEN is dark (`--archive`).**

### Typography (3 roles)
- **Display (headlines):** *Newsreader*, a serif drawn for news. Revised
  2026-07-29 from the original condensed-grotesque direction: steel grey wants
  editorial weight rather than shoutiness.
- **Body (reading):** *Source Sans 3*, easier over long paragraphs than Inter.
- **Utility (datelines, ticker, timestamps):** *IBM Plex Mono*.

Provide web-safe fallbacks for all three.

### Layout notes
- **Fixed ticker + masthead** at the top of every page.
- Hub reads like a **front page**: a lead story slot, then the event cards as a card grid.
- Event pages read like a **feature**: masthead → The Brief → the Reverse Timeline spine carrying steps 02–05 → Your Beat Checkpoint.
- **Quality floor:** responsive to mobile (Chromebooks + phones), visible keyboard focus, `prefers-reduced-motion` respected. Motion restrained.

### Copy voice
Newsroom-plain, active voice, sentence case. Buttons say exactly what they do. Empty states are invitations, not apologies.

---

## 6. Worked example: Event 01 page (the copy-me template)

**Event:** The Rise of Social Media → traced to its origins.

```
┌─ TICKER (fixed) ── "LIVE: …scrolling headlines…" ──────────────┐
├─ MASTHEAD ── BeHistorical Current Events · dateline · Event 01 ─┤
│                                                                 │
│  HEADLINE:  The Rise of Social Media                            │
│  DEK:       We start with today's fight over it — then trace    │
│             it back to where it actually began.                 │
│  [ Start the Trace ↓ ]                                          │
│                                                                 │
│  ── LOCAL→GLOBAL RAIL ── [Zionsville][Indiana][US][World] ──    │
│                                                                 │
│  01 · THE BRIEF                                                 │
│     [ CNN 10 clip ]   [ The Week read → ]                       │
│     Prompt: what's the argument *today*?                        │
│                                                                 │
│  ══ REVERSE TIMELINE SPINE (NOW ▲ steel … dark ▼ ORIGIN) ══     │
│                                                                 │
│  02 · WHERE IN THE WORLD   (locator + scale)                    │
│  03 · THE TRACE            (reverse cards: NOW → … → ORIGIN)     │
│  04 · EVIDENCE LAB         (primary sources on the roots)       │
│  05 · YOUR BEAT CHECKPOINT (project milestone + Google Form)    │
│                                                                 │
│  ── CULTURE BEAT ── song / book / bestseller tie-in ──          │
│  [ MagicSchool: ask the Reverse History Coach → ]               │
└─────────────────────────────────────────────────────────────────┘
```

**The Trace (step 03) content model** — an array of cards, rendered newest→oldest down the spine:

```
[
  { era: "NOW",     label: "The present fight",  summary: "…", source: "…" },
  { era: "RECENT",  label: "How it went viral",  summary: "…", source: "…" },
  { era: "EARLIER", label: "The first platforms", summary: "…", source: "…" },
  { era: "ORIGIN",  label: "Where it began",     summary: "…", source: "…" }
]
```

Card visuals interpolate from `--signal` (NOW) to `--archive` (ORIGIN) down the spine. Every event page is just this same component fed a different array.

---

## 7. Your Beat — the independent project

Each student picks their **own** current story and runs the same reverse-history method on it.

**Format menu (student chooses one):**
- **Portfolio** — a written/visual trace document
- **Video** — a narrated walk-back through the origins
- **Mini-site** — their own small BeHistorical-style page

**One shared rubric under all three formats**, so you grade the *tracing skill*, not the medium. Criteria: (1) clear modern event named, (2) accurate backward causal chain, (3) evidence/sources cited, (4) explains present-day significance, (5) craft of the chosen format.

`/your-beat/` carries the brief, the format menu, the rubric (visible to students), and a submission path (Google Form, §8). No class presentations required — the artifact is the assessment.

---

## 8. The data layer

**Google Form → responses → Claude analysis → MagicSchool.**

- Each lesson step 05 and each Your Beat checkpoint writes to a **Google Form** via a **pre-filled URL** (event ID / step / student context as URL params).
- Responses collect as real-time class data.
- That data is fed to **Claude** to surface patterns, misconceptions, and where students are stuck.
- Insights flow into **MagicSchool**, including a **"Reverse History Coach"** chatbot linked from every event page.

Hooks for all of this exist now even though the analysis step is run manually at first.

---

## 9. Tech stack & deployment

- **Static site:** HTML / CSS / vanilla JS. No framework, matching the AP World repo.
- **Hosting:** deploys as its own project (Netlify target; host-agnostic so GitHub Pages also works).
- **Structure:** mirrors AP World's folders and naming so the two sites are siblings.
- **Assets:** reuses the BeHistorical logo and family identity.

---

## 10. Build order

1. **Design system first** — tokens as CSS variables + type roles; ticker + masthead + Reverse Timeline spine component.
2. **Landing Hub** — front-page layout, event card grid, "how a unit works" rhythm explainer.
3. **Event 01 page** — §6 in full as the template. **Then stop for review.**
4. **Replicate** — clone Event 01 for the other events, feeding each a different Trace array.
5. **Your Beat** — project home, format menu, rubric, submission.
6. **Culture Beat + Teacher Hub** — the rotating rail and the teacher-facing panel with data/coach links.
7. **Data hooks** — Google Form pre-filled URLs, response links, MagicSchool coach link.
8. **Quality pass** — mobile/Chromebook, keyboard focus, reduced motion, link checks.

---

*End of spec.*
