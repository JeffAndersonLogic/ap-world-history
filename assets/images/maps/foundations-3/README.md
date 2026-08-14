# Map & Geography images, Foundations 3

Raster maps used directly by the Map & Geography Check slot, as opposed to the
generated maps in `assets/images/instructional-maps/` or the fallback artwork in
`assets/images/module-art/foundations/topic-f3/`.

Module 01 on Foundations 3 leads with the generated world map
(`instructional-maps/foundations-3.svg`), which shows all four classical states
at once and is what the module's questions and map key are written against. The
files in this folder are the four close-ups that sit under it, one per
civilization, so a student can see the shape of a single empire rather than a
zone on a world map.

## Expected files

All four are wired to `map.gallery` in
`foundations/foundations-3-states-power-data.js`, and each one's caption there
carries the credit, so it survives when the picture does not load.

| File | Shows | Credit |
|---|---|---|
| `persian-empires.jpg` | Achaemenid (500 BCE), Sassanid (621 CE), and Safavid (16th c.) Persia on one frame | Graphic redesign by Geopolitical Futures, printed in the image, over Wikimedia Commons sources also printed in the image |
| `qin-han-empires.jpg` | Qin and Han empires in two panels, 221 BCE to 220 CE, each with the Great Wall of its period | National Geographic, logo printed in the image |
| `greek-city-states.png` | The Greek city-states, 500 BCE, with Athens, Sparta, Corinth, Thebes, the major shrines, and the Persian Empire across the Aegean | Classroom textbook cartography; the image carries no publisher mark, so none is asserted |
| `roman-empire-height.jpg` | The Roman Empire at its height, 117 CE, with the Republic of 264 BCE inside it | Classroom textbook cartography; the image carries no publisher mark, so none is asserted |

Two of these carry no attribution anywhere in the image, and none is invented
here. If you know the publisher, add it to the table and to that entry's
`caption`.

Any of `.png`, `.jpg`, `.webp` or `.svg` works; `scripts/validate.js` checks the
magic bytes, so the extension has to match the actual bytes.

## Resolution, and which two are thin

| File | Native size | Reads well enlarged? |
|---|---|---|
| `persian-empires.jpg` | 1280 x 938 | Yes |
| `greek-city-states.png` | 727 x 525 | Just about |
| `qin-han-empires.jpg` | 636 x 472 | Marginal |
| `roman-empire-height.jpg` | 550 x 395 | No, it is already near 1:1 in the card |

The card shows each map at roughly 470 px wide, so the Roman one is displayed at
almost its full resolution and the lightbox gains a student very little. That is
a projector problem more than a laptop one: `ANATOLIA` and `JUDEA` are legible on
a screen and soft on a wall. If a higher-resolution copy of the Roman or the
Qin/Han map turns up, replace the file under the same name and nothing else needs
to change.

## Two notes on what these maps teach

**The Persian map runs past this lesson on purpose.** Foundations 3 is about
Achaemenid Persia, the 500 BCE layer. The Sassanid and Safavid layers are Unit 1
and Unit 3 content, and the slot's caption says so, because a student who reads
the legend without that framing will date the satrapies two thousand years late.
What the extra layers buy is the point the deep reading makes: the same plateau,
the same problem of ruling it, answered again and again.

**The Qin/Han map is a comparison, not one picture.** Its teaching value is the
pair: what the Qin built and what the Han inherited and pushed west. The caption
asks that question rather than describing the panels.

## Rules

- Real image bytes only. `scripts/validate.js` checks magic bytes, so a text
  file renamed `.png` fails the build.
- Keep any attribution printed inside the image itself, and repeat the credit in
  the slot's `caption` so it survives when the picture does not load.
- A map slot needs an actual map. Never a portrait, a painting, a photograph, or
  a blank world outline.
- Watch the file size. A class opening Module 01 together is thirty simultaneous
  downloads, so anything over about 1.5 MB should be re-encoded to WebP the way
  `../foundations-2/buddhism-spread-asia.webp` was. Do not downscale: students
  read the small place names by opening the lightbox and zooming.
- After adding or replacing a file here, run `node scripts/validate.js`.
