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
| `buddhism-spread-asia.webp` | `foundations/foundations-2-belief-systems-data.js`, `map.url` | Module 01, Map & Geography Check |

`buddhism-spread-asia.webp` is *The Origin and Spread of Buddhism Across Asia*,
World History Encyclopedia, https://www.worldhistory.org/image/19850/map-of-the-spread-of-buddhism-across-asia/.
The publisher's logo and the `worldhistory.org` wordmark are printed inside the
image and must not be cropped out. The credit is repeated in the slot's
`caption` so it survives when the picture does not load.

## Why this one is WebP

It arrived as a 5.9 MB PNG, twelve times the largest picture anywhere else in
the repo. A class opening Module 01 together is thirty simultaneous downloads,
so that size is a classroom problem on school wi-fi, not a housekeeping one.

Re-encoded at WebP quality 92 it is 1.17 MB, the same 3489x2791 pixels, with
every label, arrow, marker and date still crisp at 1:1. The only thing lost is
some micro-detail in the pale terrain shading, which teaches nothing. Full
resolution is the point here: the place names are small and students read them
by opening the lightbox and zooming, so **do not downscale this file**.

The original PNG is in this branch's git history, and the publisher's page
linked above remains the real source if it ever needs re-encoding.

## Rules

- Real image bytes only. `scripts/validate.js` checks magic bytes, so a text
  file renamed `.png` fails the build.
- Keep any attribution that is printed inside the image itself, and repeat the
  credit in the slot's `caption`.
- A map slot needs an actual map. Never a portrait, a painting, a photograph, or
  a blank world outline.
- After adding or replacing a file here, run `node scripts/validate.js`.
