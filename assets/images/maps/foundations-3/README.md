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

| File | Shows | Publisher |
|---|---|---|
| `persian-empires.png` | Achaemenid (500 BCE), Sassanid (621 CE), and Safavid (16th c.) Persia on one frame | Geopolitical Futures |
| `qin-han-empires.png` | Qin and Han empires side by side, 221 BCE to 220 CE, with the Great Wall in each period | National Geographic |
| `greek-city-states.png` | The Greek city-states, 500 BCE, with Athens, Sparta, Corinth, Thebes and the major temples | Glencoe/McGraw-Hill |
| `roman-empire-height.png` | The Roman Empire at its height, 117 CE, with the Republic of 264 BCE shown inside it | Glencoe/McGraw-Hill |

Any of `.png`, `.jpg`, `.webp` or `.svg` works; `scripts/validate.js` checks the
magic bytes, so the extension has to match the actual bytes.

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
