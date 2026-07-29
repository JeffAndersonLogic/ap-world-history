# BeHistorical Current Events

The sister site to BeHistorical AP World. Students start with an event that is in
the news right now and trace it backward, link by link, to the thing that actually
caused it.

Static HTML, CSS, and vanilla JS. No build step, no dependencies. Open
`index.html` in a browser and it works.

---

## What is built

Lesson 1 is complete and is the model every later lesson copies.

| Piece | Status | Where |
|---|---|---|
| Design system | Built | `assets/css/behistorical-newsroom.css` |
| Lesson page furniture | Built | `assets/css/behistorical-ce-lesson.css` |
| Landing hub | Built, spine-led newsprint broadsheet | `index.html` |
| **Lesson 1, the copy-me model** | **Built** | `lesson-01/` + `assets/data/ce-lesson-01-*.js` |
| Teacher orientation, flags, coach sets | Built | `teacher/lesson-01-orientation.html` |
| Your Beat | Built, brief + formats + rubric + submission | `your-beat/index.html` |
| Culture Beat + Teacher Hub | Lean versions built | `culture/`, `teacher/` |
| Data hooks | Built, 7 capture points | `assets/js/behistorical-ce-form-config.js` |
| Events 02 to 06 | Not started | hub cards are inert, each states its week |

Lesson pages follow the **AP World lesson architecture**, not the five-step
event rhythm that shipped first. A lesson page is a thin shell plus a data file
plus a renderer-config file plus `assets/js/behistorical-ce-lesson-renderer.js`,
exactly like `unit-1/lesson-1-1-song-china.html` in the parent repo. The
superseded five-step event and its renderer are in `archive/`.

Three items in Lesson 1 are deliberately unresolved and render as visibly marked
teacher blocks: the verbatim ZCS handbook language (Step 1), the primary-source
excerpt (Step 4, copyright), and the Pew ownership figures (Step 5). See
`teacher/lesson-01-orientation.html`.

## Layout

```
current-events/
├── index.html                Landing hub, the front page
├── lesson-01/index.html      Lesson 1, the copy-me model
├── your-beat/index.html      Independent project: brief, formats, rubric, submission
├── culture/index.html        The Culture Beat rail
├── teacher/
│   ├── index.html            Pacing, data links, coach link
│   └── lesson-01-orientation.html   Flags + coach sets, NOT student-facing
├── archive/                  Superseded Event 01 and its five-step renderer
├── BUILD-SPEC.md             The original brief
├── scripts/
│   ├── build-hub-art.js      Hub card artwork (deterministic)
│   └── build-lesson-art.js   Lesson module-card artwork (deterministic)
└── assets/
    ├── css/
    │   ├── behistorical-newsroom.css     Design system: tokens, type, ticker,
    │   │                                 masthead, THE SPINE, cards, footer
    │   ├── behistorical-ce-hub.css       Front-page layout
    │   ├── behistorical-ce-lesson.css    Lesson page furniture
    │   └── behistorical-ce-event.css     Legacy event furniture, still used by
    │                                     your-beat/, culture/, teacher/
    ├── js/
    │   ├── behistorical-ce-form-config.js      Google Form prefill + coach links
    │   ├── behistorical-ce-lesson-renderer.js  Reads CE_LESSON, writes the page
    │   └── behistorical-ce-newsroom.js         Ticker, spine, scale rail, reveals
    ├── data/
    │   ├── ce-lesson-01-locker-ban.js          All Lesson 1 content
    │   └── ce-lesson-01-renderer-config.js     Per-deployment overrides
    └── logos/behistorical-logo.jpeg      Shared with AP World
```

### Commands

- `node scripts/build-hub-art.js`, rebuild the hub card and hero artwork.
- `node scripts/build-lesson-art.js`, rebuild the ten lesson module-card motifs.

Both are deterministic: same seed in, byte-identical SVGs out, so rerunning them
never churns the diff.

A lesson page is four things: a shell, a data file, a renderer-config file, and
the renderer. The shell holds the ticker, masthead, and the empty containers the
renderer fills. Everything a student reads comes out of the data file.

---

## Design direction

Set 2026-07-29 after a five-persona design council reviewed three candidate
layouts. The council scored the spine-led broadsheet at 7.4/10 and the
image-led editorial magazine at 4.8/10, so the site commits to the broadsheet:
a light newsprint page, dark gunmetal type and structure, Signal Orange used
occasionally, and real paper texture.

**Orange has exactly one job: ORANGE MARKS NOW.** It is the hot end of the
spine, the live tag, the current step, the open event, the primary action. It
never marks anything historical and it is never a decorative wash. If you reach
for orange to liven an element up, that is a sign you have the wrong element.

**And there is a hard constraint on how it can be used.** #FF6A13 on this paper
is only 2.6:1, so it cannot carry small text at all. The system splits in two:

- `--signal` is for fills, bars, rules, dots and underlines. Any text sitting
  *on* an orange fill is `--ink`, which is 6.2:1.
- `--signal-ink` (#A63C08) is the only orange permitted for text, and it clears
  AA on the `--paper-2` band as well as on the page.

Setting `color:var(--signal)` on a run of text is the one way to break this
system, and the test suite sweeps every rendered element to catch it.

Two places where that constraint changed the design rather than just the
palette. The era tags on the spine and the trace chips on the hub are
**outlined, not filled**. Their colour sweeps orange to deep gunmetal, and in
the middle of that sweep a filled chip lands on a mid-tone where neither dark
nor light text reaches 4.5:1: the best available foreground peaks at 4.05:1. No
choice of text colour rescues it, so the ramp moved to the border and the text
stays `--ink`.

**Texture** is two layers, both inline SVG data URIs costing zero requests: a
fine fractal grain tiled across the page, and a laid hairline pattern on the
alternating bands.

Three fixes the council flagged unanimously, all applied:

- The event cards now clear the fold. They previously started at y=1087 on a
  1366x768 Chromebook, which is 319px below the fold, so the whole first screen
  was a headline and two buttons. They now start at y=752.
- Unbuilt events are no longer links. Five of six tiles used to point at a dead
  anchor, so a student clicking "Iran" got silence. They are inert `<div>`s now
  and each one states the week it opens.
- The ticker Pause control is larger and higher contrast, because a teacher
  needs to kill the crawl during work time.

---

## The signature element

The Reverse Timeline spine, in `behistorical-newsroom.css` §10 and painted by
`CE.paintSpine()`.

One continuous vertical line carries steps 02 through 05. NOW sits at the top in
Signal Orange and the line cools into deep gunmetal as you scroll toward the
ORIGIN. The trace cards get the full range to themselves, because they are the
part that is actually about time; the framing steps above and below pin to the
nearest end. Without that, the trace would only ever use the muddy middle of the
range.

Two rules worth keeping:

- **NOW is hot, THEN is dim.** Orange at the top, gunmetal at the origin. Do not
  use `--signal` for anything historical or `--archive` for anything current.
- **Never fill a small element with an interpolated ramp colour.** Mid-ramp
  tones cannot carry text at AA under any foreground. Outline it instead.
- **Surfaces live in one token block.** Section 1 of `behistorical-newsroom.css`
  is the only place that has to change to reskin the site. Every component
  references tokens, never raw hex.
- **`trace[]` runs newest first.** The array order is the pedagogy. The gradient
  re-spaces itself for any number of cards.

---

## The hub layout, and the Image Contract

The front page is the spine-led newsprint broadsheet the design council chose:
a short lede capped so the cards clear the fold on a 1366x768 Chromebook, the
reverse-ladder method aside, the four-movement rhythm explainer, and six cards.

It **currently ships with zero photographs** and still looks finished. That is the Image Contract, carried
over from AP World:

- **Local artwork is the floor.** `assets/images/card-art/` holds a generated,
  on-topic SVG for the hero and the event cards, and
  `assets/images/lesson-art/lesson-01/` holds one per lesson module card. No
  empty frames, ever.
- **Every image slot has two layers.** The generated `.art` underneath, and an
  optional `.photo` on top carrying `onerror="this.remove()"`. To add real
  photography, uncomment the `.photo` line in a card and point it at a URL. If
  that URL ever dies, the photo layer removes itself and the artwork underneath
  carries the card. Nothing collapses.
- **Generated SVGs carry `width` and `height`.** A `viewBox` alone leaves the
  intrinsic size undefined and the `<img>` gets stretched by its container.
- **Never put card artwork in a CSS custom property.** A relative `url()` inside
  one resolves against the stylesheet's folder, not the page, so local paths
  silently 404.

The masthead is a solid fixed bar under the ticker. `wireMasthead()` still
exists for the overlay behaviour a `class="has-hero"` page would want, but no
page currently uses it: the broadsheet has no full-bleed hero to float over.

---

## Adding Lesson 2

1. Copy `assets/data/ce-lesson-01-locker-ban.js` to
   `assets/data/ce-lesson-02-SLUG.js` and rewrite the strings. Keep the key
   names. The `steps` array can be any length: the module grid, the capture
   numbering, and the spine all size themselves to it.
2. Copy `assets/data/ce-lesson-01-renderer-config.js` alongside it and point the
   clip URLs and `captureEvent` at the new lesson.
3. Copy `lesson-01/index.html` to `lesson-02/index.html`. Change the `<title>`,
   the ticker items, the masthead dateline, and the two `<script src>` lines
   that point at the data and renderer-config files.
4. Add ten motifs to `scripts/build-lesson-art.js` under a new output folder and
   run it, or set `art` to `''` on a step to get the plain gunmetal card.
5. On the hub, change that card's `href` and `data-status` from `soon` to
   `live`, and give it a real trace preview.
6. Add the lesson to `CE_FORM.events` and its steps to `CE_FORM.steps` in
   `assets/js/behistorical-ce-form-config.js`.
7. Copy `teacher/lesson-01-orientation.html` and rewrite the flags. Every
   unverified claim in the new lesson gets a `type: 'todo'` block in the data
   file so it renders as marked rather than shipping quietly.

Nothing in the renderer is specific to phone bans.

---

## Before the semester starts

Three things need a human, all flagged in the files themselves.

0. **Resize the logo.** `assets/logos/behistorical-logo.jpeg` is 227KB and it
   renders at 34 by 34 pixels. It is 72% of the hub's total page weight, on
   every page, and on a school access point at 3pm it is most of the load time.
   The build environment had no image tooling, so this needs one command
   locally, for example
   `magick behistorical-logo.jpeg -resize 96x96 -quality 82 behistorical-logo.jpg`.
   Expect roughly 227KB to drop to under 8KB. Nothing in the markup changes.

2. **The Google Form.** `CE_FORM.baseURL` and the six entry IDs in
   `behistorical-ce-form-config.js` currently point at the **AP World** response
   form, because that is the only live form in this repo. Current Events
   responses would land in the AP World sheet. Create a Current Events form with
   the six questions listed in that file's header, then swap `baseURL`,
   `responsesURL`, and the entry IDs. Nothing else needs to change.

3. **Evidence Lab links.** The five primary sources in the Event 01 data file
   carry canonical URLs (W3C, Google Patents, Internet Archive, Chronicling
   America). They could not be verified from the build environment, whose network
   policy blocks those hosts. Open all five once before you teach the block.

---

## Deploying

Its own Netlify project, publishing this subdirectory:

```
Base directory:    current-events
Publish directory: current-events
Build command:     (none)
```

`netlify.toml` in this folder sets that already. Host-agnostic: any static host
that can serve a subdirectory works, including GitHub Pages.

---

## Open items for the quality pass

- Resize the 227KB logo. Highest-value single fix on this list.
- Verify the five Evidence Lab links and the two Brief links resolve.
- Real-device check on a school Chromebook, especially the fixed ticker plus
  masthead offset at 1366×768.
- The NOW card in every trace, and every `scales[]` entry, cite laws and fights
  from the 2024 to 2026 window. They age fastest. Reread before each term.
- A link checker mirroring AP World's `scripts/check-image-urls.js` would catch
  the first item automatically.
