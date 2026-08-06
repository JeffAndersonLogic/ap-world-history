# Lecture card photographs, Foundations 1

Raster images used directly by lecture cards, as opposed to the generated
fallback artwork in `assets/images/module-art/foundations/topic-f1/`.

Most lecture images on the site are remote Wikimedia Commons URLs. This folder
is for pictures that are not on Commons: teacher-supplied illustrations and
licensed classroom maps. Being local means they render even when the network
blocks Commons, which matters for the Canvas packets.

## Expected files

| File | Used by | Lecture card |
|---|---|---|
| `neolithic-foragers.jpg` | `foundations-1-geography-data.js`, `lecture[0].image` | From Foraging to Farming: The Neolithic Revolution |
| `first-wave-civilizations.webp` | `foundations-1-geography-data.js`, `lecture[1].image` | Why Geography Chose the River Valleys |
| `ancient-civilizations-old-world.jpg` | `foundations-1-geography-data.js`, `lecture[4].image` | Geography Is Cause, Not Destiny |

`ancient-civilizations-old-world.jpg` is from John Allen, *Student Atlas of
Anthropology*, 1st ed. (McGraw-Hill, 2004), p. 42. The credit is repeated in the
lecture card's `caption`.

## Rules

- Real image bytes only. `scripts/validate.js` checks magic bytes, so a text
  file renamed `.jpg` fails the build.
- Keep any attribution that is printed inside the image itself, and repeat the
  credit in the card's `caption` so it survives when the picture does not load.
- After adding or replacing a file here, run `node scripts/validate.js` and then
  `node scripts/build-canvas-packets.js` so the Canvas packets pick up the change.
