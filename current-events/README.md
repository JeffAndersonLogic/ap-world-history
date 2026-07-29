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
| 2. Landing Hub | Built | `index.html` |
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

An event page is three things: a shell, a data file, and the renderer. The shell
holds the ticker, masthead, and empty `data-slot` containers. Everything a
student reads comes out of the data file.

---

## The signature element

The Reverse Timeline spine, in `behistorical-newsroom.css` §10 and painted by
`CE.paintSpine()`.

One continuous vertical line carries steps 02 through 05. NOW sits at the top in
Signal Orange and the palette cools as you scroll down toward ORIGIN. The trace
cards get the full warm-to-cool range to themselves, because they are the part
that is actually about time; the framing steps above and below pin to the nearest
end. Without that, the trace would only ever use the muddy middle of the range.

Two rules worth keeping:

- **NOW is warm, THEN is cool.** The gradient carries meaning, so do not use
  `--signal` for anything historical or `--archive` for anything current.
- **`trace[]` runs newest first.** The array order is the pedagogy. The gradient
  re-spaces itself for any number of cards.

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

Two things are wired but pointed at the wrong place, both on purpose, both
flagged in the files themselves.

1. **The Google Form.** `CE_FORM.baseURL` and the six entry IDs in
   `behistorical-ce-form-config.js` currently point at the **AP World** response
   form, because that is the only live form in this repo. Current Events
   responses would land in the AP World sheet. Create a Current Events form with
   the six questions listed in that file's header, then swap `baseURL`,
   `responsesURL`, and the entry IDs. Nothing else needs to change.

2. **Evidence Lab links.** The five primary sources in the Event 01 data file
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

- Verify the five Evidence Lab links and the two Brief links resolve.
- Real-device check on a school Chromebook, especially the fixed ticker plus
  masthead offset at 1366×768.
- The NOW card in every trace, and every `scales[]` entry, cite laws and fights
  from the 2024 to 2026 window. They age fastest. Reread before each term.
- A link checker mirroring AP World's `scripts/check-image-urls.js` would catch
  the first item automatically.
