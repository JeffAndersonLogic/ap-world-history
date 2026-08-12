# Map & Geography images, Foundations 2

Raster maps used directly by a Map & Geography Check slot, as opposed to the
generated maps in `assets/images/instructional-maps/` or the fallback artwork in
`assets/images/module-art/foundations/topic-f2/`.

Most map slots on the site point at a generated local map. This folder is for
maps that are not ours and are not on Wikimedia Commons: licensed classroom
cartography good enough to teach from directly. Being local means it renders
even when the network blocks the publisher, which matters for the Canvas packets
and for a classroom on a filtered school connection.

## Expected files

| File | Used by | Slot |
|---|---|---|
| `buddhism-spread-asia.png` | `foundations/foundations-2-belief-systems-data.js`, `map.url` | Module 01, Map & Geography Check |

`buddhism-spread-asia.png` is *The Origin and Spread of Buddhism Across Asia*,
World History Encyclopedia, https://www.worldhistory.org/image/19850/map-of-the-spread-of-buddhism-across-asia/.
The publisher's logo and the `worldhistory.org` wordmark are printed inside the
image and must not be cropped out. The credit is repeated in the slot's
`caption` so it survives when the picture does not load.

## Rules

- Real image bytes only. `scripts/validate.js` checks magic bytes, so a text
  file renamed `.png` fails the build.
- Keep any attribution that is printed inside the image itself, and repeat the
  credit in the slot's `caption`.
- A map slot needs an actual map. Never a portrait, a painting, a photograph, or
  a blank world outline.
- After adding or replacing a file here, run `node scripts/validate.js`.
