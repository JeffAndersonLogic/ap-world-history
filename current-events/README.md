# BeHistorical Current Events

The sister site to BeHistorical AP World. Students start with an event that is in
the news right now and trace it backward, link by link, to the thing that actually
caused it.

Static HTML, CSS, and vanilla JS. No build step, no dependencies. Open
`index.html` in a browser and it works.

---

## What is built

Per `BUILD-SPEC.md` §10, steps 1 through 3 are complete and the build pauses
there for review.

| Step | Status | Where |
|---|---|---|
| 1. Design system | Built | `assets/css/behistorical-newsroom.css` |
| 2. Landing Hub | Built, spine-led newsprint broadsheet | `index.html` |
| 3. Event 01, the template | Built | `event-01/index.html` + `assets/data/ce-event-01-social-media.js` |
| 4. Replicate events 02 to 06 | **Not started, awaiting review** | — |

| 5. Your Beat | Built, brief + formats + rubric + submission | `your-beat/index.html` |
| 6. Culture Beat + Teacher Hub | Lean versions built | `culture/`, `teacher/` |
| 7. Data hooks | Built | `assets/js/behistorical-ce-form-config.js` |
| 8. Quality pass | Partial, see Open items | — |

Steps 5 and 6 shipped ahead of order only far enough to keep every link on the
hub and on Event 01 live. They are real pages, not placeholders, but they are
lean and expected to grow.

---

## Layout

```
current-events/
├── index.html                Landing hub, the front page
├── event-01/index.html       Event 01, the copy-me template
├── your-beat/index.html      Independent project: brief, formats, rubric, submission
├── culture/index.html        The Culture Beat rail
├── teacher/index.html        Pacing, data links, coach link
├── BUILD-SPEC.md             The brief this was built from
├── scripts/
│   └── build-hub-art.js      Regenerates the hub card artwork (deterministic)
└── assets/
    ├── css/
    │   ├── behistorical-newsroom.css     Design system: tokens, type, ticker,
    │   │                                 masthead, THE SPINE, cards, footer
    │   ├── behistorical-ce-hub.css       Front-page layout
    │   └── behistorical-ce-event.css     Event-page furniture
    ├── js/
    │   ├── behistorical-ce-form-config.js    Google Form prefill + coach links
    │   ├── behistorical-ce-event-renderer.js Reads CE_EVENT, writes steps 01 to 05
    │   └── behistorical-ce-newsroom.js       Ticker, spine painting, scale rail, reveals
    ├── data/
    │   └── ce-event-01-social-media.js   All Event 01 content
    └── logos/behistorical-logo.jpeg      Shared with AP World
```

### Commands

- `node scripts/build-hub-art.js`, rebuild the hub card and hero artwork from
  `scripts/build-hub-art.js`. Deterministic: same seed in, byte-identical SVGs
  out, so rerunning it never churns the diff.

An event page is three things: a shell, a data file, and the renderer. The shell
holds the ticker, masthead, and empty `data-slot` containers. Everything a
student reads comes out of the data file.

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

The front page is an editorial magazine layout: a full-bleed hero with a dark
scrim, a split feature strip that overlaps the hero, and an asymmetric mosaic
mixing text-over-artwork cards with plain text cards.

It is photography-led by design, but **it currently ships with zero
photographs**, and it still looks finished. That is the Image Contract, carried
over from AP World:

- **Local artwork is the floor.** `assets/images/card-art/` holds a generated,
  on-topic SVG for the hero and for all six event cards. No empty frames, ever.
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

The masthead floats transparently over the hero and turns solid once you scroll
past it. That is driven by `class="has-hero"` on `<body>` plus `wireMasthead()`.
With JS blocked the masthead simply stays in overlay mode, which still reads
because the hero behind it is always dark.

---

## Adding Event 02

1. Copy `assets/data/ce-event-01-social-media.js` to
   `assets/data/ce-event-02-white-collar.js` and rewrite the strings. Keep the
   key names.
2. Copy `event-01/index.html` to `event-02/index.html`. Change the `<title>`, the
   ticker items, the masthead dateline, and the one `<script src>` line that
   points at the data file.
3. On the hub, change that event card's `href` and `data-status` from `soon` to
   `live`, and give it a real trace preview.
4. Add the event to `CE_FORM.events` in `assets/js/behistorical-ce-form-config.js`.

Nothing in the renderer is specific to social media.

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
