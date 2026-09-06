# Module 07, Units 5, 6, 8 and 9: the last conversion

2026-09-06. The final four units move to one authored evidence pool per topic.
**Every Module 07 in the course is now converted**, the registries and the
override runtime are deleted, and no lesson page can have its evidence replaced
at load any more.

## What these four units looked like before

All 44 topics ran the registry-plus-runtime path added on 2026-09-05, so the
report read **zero pictures across all four units**. Underneath that, the picture
varied a lot, and it decided how each unit had to be repaired:

| Unit | Real images shadowed in its data files | Local instructional maps |
|---|---:|---|
| 5 | 2, on one topic | all ten |
| 6 | 7, spread over six topics | 6.1 to 6.7 |
| 8 | 24, three per topic | 8.5 to 8.9 |
| 9 | 15, three each on 9.1 to 9.3 and one each on 9.4 to 9.9 | all nine |

So Units 8 and 9.1 to 9.3 were a recovery job, Unit 6 a partial one, and Unit 5
close to a build from nothing.

## The generated-file trap

**Units 6 and 9 do not keep their renderer configs by hand.** `build-unit6.js`
writes every Unit 6 config, including Topic 6.1's, and `build-unit9.js` writes
9.4 to 9.9. Editing those files directly would have survived exactly until the
next rebuild, and `readings-reproducible.test.js` runs `--check` on both builders,
so the push would have failed immediately.

Both generators now carry a `MODULE07_EVIDENCE` map beside `DEEP_READINGS`, for
the same stated reason that map exists, and `module07Block()` emits the pool into
the generated config. A topic with no entry emits nothing.

Both generators also derive their lesson shells from a template shell (6.1 and
9.3), so wiring those two correctly propagated to every generated shell on the
next build.

## What each unit got

**Unit 8** (9 topics). Three restored photographs per topic plus the registry
records that are genuinely documentary: the Atlantic Charter clause, the
Anglo-American loan, the Indian Independence Act, Truman and Zhdanov side by
side, the Warsaw Pact, the Derg and Kerala land reforms, Evian, the Radcliffe
Line, Resolution 181, the British Nationality Act, the Rwanda self-review. Cards
that only restated what a restored photograph already showed were dropped rather
than kept for the count. Topic 8.9's pool had two cards titled identically and one
with an empty `url` whose caption read "BeHistorical topic artwork for this card";
that card is now the topic's own instructional map, and the other two are retitled
for what they actually show.

**Unit 9** (9 topics). 9.1 to 9.3 are hand-authored and got the same treatment as
Unit 8. 9.4 to 9.9 are generated and had only one real photograph each, so each
gets that photograph, its own instructional map, and three documentary records.
Topic 9.9, the synthesis capstone, was the exception: its registry cards were four
author reconstructions, which on a capstone is the essay rather than the evidence,
so it takes cross-topic objects instead. Apollo 11, the life-expectancy series,
the emissions breakdown and the two Aral Sea frames, plus the unit map.

**Unit 6** (8 topics). Two to three objects per topic. Topic 6.1's records are the
strongest in the unit because they are verbatim: Rhodes on race, Kipling's
"burden", and the Berlin Act's "effective occupation" clause. Topic 6.8 has
neither a photograph of its own nor an instructional map, so like 7.9 and 9.9 it
draws on the unit's own objects, which suits a causation capstone.

**Unit 5** (10 topics). The hardest. The unit owns exactly three period pictures
anywhere in its files: an 1835 powerloom engraving, Punch's "A Court for King
Cholera" of 1852, and Wyld's 1852 painting of Manchester from Kersal Moor. Those
three are placed where they do the most work, and 5.9 gets the painting and the
cartoon together, same decade and same country, arguing opposite things about the
same city. Every other topic gets its own instructional map plus the records,
which in this unit are the best in the course: Locke, Wollstonecraft, de Gouges
and Marx are quoted verbatim, and the Manchester, hyperinflation and unemployment
figures are real numbers.

## Where it is still thin, named rather than hidden

**Unit 5 needs period images and does not have them.** Seven of its ten topics
carry one object, an instructional map, and four documentary records. That clears
the contract but it is the weakest unit in the course on authenticity, and no
amount of rearranging fixes it: the pictures are not in the repository. Sourcing
verified Commons images for the Enlightenment, the Atlantic revolutions, the
spread of industrialization, technology, state-led industry, finance and labor
reform is the next real content job. It is not done here because this conversion
does not invent Commons filenames.

**Unit 5's module-card artwork is from the wrong period.** Topics 5.1 to 5.8 point
their `stableImages` at Columbus, Magellan, Vasco da Gama, a casta painting and
the Florentine Codex, which are Unit 4 images on a unit that starts in 1750. That
is a separate pre-existing defect, untouched here, and worth a pass of its own.

**Thirteen topics carry a report flag.** Most are the classifier's known blind
spot: it reads a card's body and not its `label`, so a treaty record whose date
sits in "Treaty record · North Atlantic Treaty, 1949" reads as a summary even
though the student sees that line on the plate. The blind spot is now written into
the report's own header. It was not fixed by moving dates into card bodies, which
would be the numeral-bolting the report exists to discourage.

## Verification

- `npm test`: 12 offline checks pass, including `check-module07-authored.js`
  across all seven converted units, and `--check` on both unit generators.
- The browser suite passes, including `lightbox-sweep.js` over all 77 pages.
- A rendered-page proof opens real lesson pages in Chromium and asserts the card
  counts, the mix of photographs and text plates, that nothing falls back to
  generic artwork, and that no source link is empty or points at a data URI.
- **Not verified: that every restored Commons URL still resolves.** Every image
  restored in these four units was live on the site before 2026-09-05 and none was
  retyped, but that is an argument rather than a check, and this sandbox cannot
  reach commons.wikimedia.org. Run `node scripts/check-image-urls.js` from a real
  network before this reaches `main`.

## What is now gone

`assets/js/module-07-evidence-runtime.js` and all five
`assets/data/module-07-evidence-unit-*.js` registries are deleted, along with the
two contract checks that guarded that path. Nothing in the repository can
overwrite a topic's evidence at load. If a future topic's evidence looks wrong on
the page, it is wrong in that topic's renderer config, or in the generator that
writes it, and nowhere else.
