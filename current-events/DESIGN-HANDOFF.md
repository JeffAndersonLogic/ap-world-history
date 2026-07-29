# BeHistorical Current Events, design handoff

**How to use this file:** paste everything between the two rules below as the
first message of a new Claude Code session working on this site. It carries the
settled design so nobody re-opens decisions that are already closed.

Last settled 2026-07-29. If you change a token, a ramp, or the hub's
above-the-fold budget, update this file in the same commit.

---

## THE PROMPT

You are working on **BeHistorical Current Events**, a static site at
`current-events/` inside the `ap-world-history` repo. It is a semester elective
for grades 9 to 12 in Zionsville, Indiana. Students start with an event that is
in the news right now and trace it backward, link by link, to the thing that
actually caused it. Twenty weeks, six events, 90-minute blocks, read on school
Chromebooks at 1366x768 and on phones.

Plain HTML, CSS and vanilla JS. No framework, no build step, no dependencies.

### The look is settled. Build to it, do not redesign it.

The direction below was chosen after a five-persona design council scored three
candidates: the spine-led broadsheet 7.4/10, a loud wire-service treatment
5.6/10, and an image-led editorial magazine 4.8/10. The broadsheet won on
teaching value, maintainability and device reality. Treat it as decided.

**Layout: a spine-led newsprint broadsheet.** Light warm paper, dark gunmetal
type and structure, Signal Orange used occasionally, and real paper texture.
Text-first. No full-bleed photo hero, no magazine card mosaic.

**The signature element is the Reverse Timeline spine.** One continuous vertical
line carries steps 02 through 05 of an event page. NOW sits at the top in Signal
Orange and the line cools into deep gunmetal as you scroll down toward the
ORIGIN. The structure *is* the pedagogy: scrolling down means going backward in
time. Never hide it, never make it decorative, never reorder the trace.

### Palette

Every value is a token in section 1 of `assets/css/behistorical-newsroom.css`.
Reference tokens, never raw hex.

```
--paper:      #F4F2EC   page background, warm newsprint
--paper-2:    #E9E6DE   alternating bands, carries the laid texture
--surface:    #FFFFFF   cards and reading panels
--ink:        #14181B   headlines and primary text        15.9:1 on paper
--steel:      #4A555D   secondary text and structure       6.8:1 on paper
--steel-2:    #5C666F   tertiary: datelines, strands       5.2:1 on paper
--archive:    #232C33   deep gunmetal, the ORIGIN end of the spine
--signal:     #FF6A13   SIGNAL ORANGE. Fills and rules only. NOT text.
--signal-ink: #A63C08   the only orange permitted for text  5.7:1 on paper
```

### THE ORANGE RULE

**Orange marks NOW.** It is the hot end of the spine, the live tag, the current
step, the open event, the primary action. It never marks anything historical and
it is never a decorative wash. If you reach for orange to liven an element up,
that is a sign you have the wrong element.

**And there is a hard constraint on how it can be used.** `#FF6A13` is only
2.6:1 on this paper, so it cannot carry small text at all.

- `--signal` is for fills, bars, rules, dots and underlines. Any text sitting
  *on* an orange fill is `--ink`, which is 6.2:1.
- `--signal-ink` is the only orange permitted for text, and it clears AA on the
  `--paper-2` band as well as on the page.

Setting `color: var(--signal)` on a run of text is the single way to break this
system. `scripts/check-design.js` sweeps every rendered element and fails the
build if any text run drops below 4.5:1 against its composited background.

That constraint has already changed the design twice, so expect it to bite:

1. **Era tags and trace chips are outlined, not filled.** Their colour sweeps
   orange to deep gunmetal, and mid-sweep a filled chip lands on a tone where
   *neither* dark nor light text reaches 4.5:1. The best available foreground
   peaks at 4.05:1. No choice of text colour rescues it, so the ramp lives in
   the border and the text stays `--ink`. Do not "fix" them back to filled.
2. **The rhythm cards run two ramps.** `--step` is the bright ramp for the
   border fill; `--step-ink` is the dark ramp for the numeral. They cannot be
   the same value.

### Typography

Three roles, all with web-safe fallbacks, loaded from Google Fonts.

- **Display:** Newsreader 800, a serif drawn for news. Falls back to Georgia.
- **Body:** Source Sans 3, which holds up over long paragraphs.
- **Utility:** IBM Plex Mono for datelines, kickers, tags and timestamps.

Assume the fonts may not load. Districts filter `fonts.gstatic.com` more often
than people expect, and the design has to still read in Georgia.

### Texture

Two layers, both inline SVG data URIs, so they cost zero extra requests:

- `--grain`, a 140px fractal-noise tile at 0.075 opacity, on `body` and the
  masthead.
- `--laid`, a 1px-per-6px hairline pattern, on `.section-paper` bands and the
  Evidence Lab task blocks.

Keep them felt rather than seen. If you raise the opacity, check it on a cheap
panel, not a good monitor.

### Layout grammar

- **Fixed chrome:** a 32px ticker plus a 62px masthead, 94px total, on every
  page. That is 12% of a Chromebook viewport, so spend the rest carefully.
- **Measure:** `min(1180px, 92vw)`. The spine column is capped at 820px because
  full-width body text on a 1366px screen runs past 100 characters a line.
- **Corners are square.** `--radius` is 3px and barely used. This is newsprint.
- **Alternating bands.** `.section` on paper, `.section-paper` on the darker
  textured band. The Culture Beat and the coach strip are the only deliberately
  dark blocks; they are the change of pace.

### Non-negotiables

1. **Event cards clear the fold on the hub at 1366x768.** They currently start
   at y=751 against a 768 viewport. An earlier magazine hero pushed them to
   y=1087 and the entire first screen was a headline and two buttons. Do not add
   copy above that grid without re-measuring.
2. **Unbuilt events are inert `<div>`s, not links**, and each states the week it
   opens. Five of six used to point at a dead anchor, so a student clicking
   "Iran" got silence.
3. **`trace[]` runs newest first.** The array order is the pedagogy. The
   gradient re-spaces itself for any number of cards.
4. **Every image slot has two layers**, per the AP World Image Contract:
   generated local art underneath, an optional photo on top carrying
   `onerror="this.remove()"`. There is no photography and no budget for it, so
   the site must look finished without any. Generated SVGs must carry `width`
   and `height`, or the `<img>` gets stretched by its container.
5. **Accessibility floor:** WCAG AA on every text run, visible keyboard focus,
   `prefers-reduced-motion` respected, no horizontal scroll at 1366 or 390.
6. **Never put card artwork in a CSS custom property.** A relative `url()` inside
   one resolves against the stylesheet's folder, not the page, so local paths
   silently 404.

### Settled, do not reopen

- Light page, not dark. A dark shell was built and rejected.
- No sage, no second accent hue. Gunmetal plus orange only.
- No full-bleed photo hero and no asymmetric card mosaic on the hub.
- Serif display type, not a condensed grotesque.
- The spine stays on the event pages and the hub stays text-first.

### What exists

| Piece | State |
|---|---|
| Design system, `assets/css/behistorical-newsroom.css` | Settled |
| Landing hub, `index.html` | Built |
| Event 01, `event-01/` plus its data file | Built, and it is the template |
| Your Beat, Culture Beat, Teacher Hub | Built, lean |
| Events 02 to 06 | **Not built.** Cards are inert placeholders. |
| Google Form wiring | Built, but pointed at the wrong form. See below. |

An event page is three things: a shell with empty `data-slot` containers, a data
file, and `assets/js/behistorical-ce-event-renderer.js`. Everything a student
reads comes out of the data file. Nothing in the renderer is specific to social
media. To add Event 02, copy the data file, copy the shell, change one
`<script src>`, and flip the hub card from inert to a link.

### How to verify

```
node scripts/check-design.js          # drives real Chromium, audits what renders
node scripts/build-hub-art.js         # deterministic, regenerates card artwork
cd .. && node scripts/validate.js     # AP World's own audit, must stay green
```

`check-design.js` is the important one. It starts its own static server, checks
both viewports, and asserts the invariants above: the fold budget, the ramps,
the orange rule, contrast on every text run, reduced motion, focus order, and
internal links. It skips cleanly if Playwright is not installed. Three real
defects reached review and were caught only by this check, so run it before
pushing anything visual.

### Open items

1. **Resize the logo.** `assets/logos/behistorical-logo.jpeg` is 227KB and
   renders at 34 by 34 pixels. It is roughly 70% of the page weight, on every
   page. One command locally, for example
   `magick behistorical-logo.jpeg -resize 96x96 -quality 82 behistorical-logo.jpg`.
   No markup changes. Highest-value single fix available.
2. **Point the Google Form at the right place.** `CE_FORM.baseURL` and the six
   entry IDs in `assets/js/behistorical-ce-form-config.js` currently target the
   **AP World** response form, so Current Events responses would land in the AP
   World sheet. The six questions to recreate are listed in that file's header.
3. **Verify the Evidence Lab links.** The five primary sources in the Event 01
   data file carry canonical URLs that could not be checked from the build
   environment.
4. **Content ages fast.** Every trace's NOW card and every `scales[]` entry cite
   laws and fights from the 2024 to 2026 window. Reread before each term.

### House style

- No em dashes or en dashes in running prose. Commas, colons, periods or
  parentheses instead. Dashes are fine in titles, dates and numeric ranges.
- Copy voice is newsroom-plain, active, sentence case. Buttons say exactly what
  they do. Empty states are invitations, not apologies.
- Comments explain *why*, especially where a value looks arbitrary. Most of the
  odd-looking numbers in this codebase are contrast or fold measurements.

---

## Appendix: the ramps

Hand-authored inline styles on the hub, because they are per-element. All three
interpolate to `--archive` and `check-design.js` asserts their endpoints.

```
Ladder    --rung      #FF6A13  #B6551E  #6C4128  #232C33
Rhythm    --step      #FF6A13  #C85B1B  #914B23  #5A3B2B  #232C33
Rhythm    --step-ink  #A63C08  #853813  #65341E  #443028  #232C33
```

The spine gradient in CSS uses the same interpolation with mid stops `#C65A1B`
at 26% and `#7F4626` at 58%. Change `--signal` or `--archive` and those move too.
