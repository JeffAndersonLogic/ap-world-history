# Map images, Foundations 4

Raster maps used directly by a lecture card, as opposed to the generated maps in
`assets/images/instructional-maps/` or the fallback artwork in
`assets/images/module-art/foundations/topic-f4/`.

Module 01 on Foundations 4 still leads with the Wikimedia Silk Road map, which
shows the overland network the map questions are written against. The file here
is for the lecture deck, where card 3 teaches the monsoon and needed a picture of
the wind rather than a picture of the ocean.

## Expected files

| File | Shows | Credit |
|---|---|---|
| `indian-ocean-monsoon-trade.jpg` | Indian Ocean trade routes with both monsoon arrow sets, April to September and November to February, and the ports from Sofala and Kilwa up through Aden, Calicut, and Melaka to Quanzhou | Classroom textbook cartography; the image carries no publisher mark, so none is asserted |

It is wired to the `image` block of lecture card 3 in
`foundations/foundations-4-trade-networks-data.js`, and its caption there carries
the credit, so the credit survives when the picture does not load.

## Resolution

| File | Native size | Reads well enlarged? |
|---|---|---|
| `indian-ocean-monsoon-trade.jpg` | 670 x 484 | Marginal |

The lecture card shows it at roughly 470 px wide, so it is displayed at close to
its full resolution and the lightbox gains a student very little. That is a
projector problem rather than a laptop one: `Masulipatam` and the small monsoon
labels are legible on a screen and soft on a wall. If a higher-resolution copy
turns up, replace the file under the same name and nothing else needs to change.

## Two notes on what this map teaches

**The ports are labeled for the network at its later height.** Foundations 4 stops
at c. 1200, and Cairo and Melaka in particular are later than that, Melaka by two
centuries. The card's caption says so, because a student who reads the port list
as a snapshot of 1200 will date Melaka's rise four hundred years early. What the
map is here for is the wind and the lanes, and those are right.

**The arrow months are wider than the notes.** The map labels April to September
and November to February, the full sailing windows; the bullets and the deep
reading say June to September and November to March, the reliable core of each
season. Both are defensible and the caption reconciles them, because a student
looking from the bullet to the picture will otherwise think one of them is wrong.
What has to be right is which direction goes with which season.

## Rules

- Real image bytes only. `scripts/validate.js` checks magic bytes, so a text file
  renamed `.jpg` fails the build.
- Keep any attribution printed inside the image itself, and repeat the credit in
  the slot's `caption` so it survives when the picture does not load.
- Watch the file size. A class opening the deck together is thirty simultaneous
  downloads, so anything over about 1.5 MB should be re-encoded to WebP the way
  `../foundations-2/buddhism-spread-asia.webp` was. This file is 323 KB and needs
  nothing. Do not downscale: students read the small place names by opening the
  lightbox and zooming.
- After adding or replacing a file here, run `node scripts/validate.js`.
