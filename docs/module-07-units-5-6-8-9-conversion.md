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

**2026-09-06, what was done about that.** Two things, and neither of them is
"typed some filenames in".

The repository owned exactly one period picture that was not already placed:
`Prise_de_la_Bastille.jpg`, Houël's gouache of July 1789, which has been on the
front door as the Unit 5 hub card photograph all along. It is now also Topic
5.2's second object. Nothing about it needed verifying that was not already
being verified every time a student loads `index.html`.

Everything else needs a network, so the sourcing job became a tool rather than a
guess. See "Sourcing images" below.

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

## Sourcing images

Sourcing pictures is the one job in this repository that cannot be done from
knowledge, and the reason is worth stating plainly: **a Commons filename written
from memory is indistinguishable from a correct one until something fetches it.**
`validate.js` confirms the name is well formed. Every structural check passes.
The lesson page renders. The student gets local fallback artwork and no evidence
at all. Topic 1.5 was graded A at 11:30 on 2026-09-05 with two dead Commons links
in its pool and was fixed at 13:28 and 14:06 the same afternoon.

So candidates are staged, not written straight into a lesson.

- `scripts/lib/evidence-image-candidates.js` is the staging area. Nothing in it
  is loaded by any page. Each entry carries the proposed filename, a **search
  query to fall back on when that filename is wrong**, and the card as it should
  read: title, caption, prompt.
- `node scripts/source-evidence-images.js [topic]` asks Commons whether each
  file exists, then fetches the URL a student's browser would actually hit,
  because those are two different questions: a thumbnail name handed to
  `Special:FilePath` earns HTTP 400 while the underlying file is fine. It prints
  what it found and applies nothing.
- `--apply` writes the verified ones into their topics' renderer configs, and
  only the verified ones.
- A candidate that turns out not to exist prints the files Commons really has for
  that search, with their page URLs, to look at and choose from.

**The split is the same one the authenticity report and the authored-pool check
already draw.** The machine decides whether a picture exists; a person decides
whether it is the right picture. A file can resolve perfectly and show the wrong
thing, and the Image Contract is explicit that an empty `url` beats a picture
that does not match its caption. That is why a dead candidate prints search
results rather than quietly taking the top hit.

**Three outcomes, and the last two are not the same.** *Verified*, the host
served image bytes. *Missing*, the host answered and the answer was no.
*Unverified*, the host declined to answer: a proxy 403, a 429, a timeout, a
network that cannot reach Commons. A decline reported as missing would mean a
blocked network reads as a dozen pictures that do not exist, which is the defect
that made the nightly image report worth skimming before it was split the same
way.

**A run that verified nothing exits 2, not 0.** Same convention as a skipped
browser test: a run that applied nothing because it could not reach Commons must
never look like a run that found nothing to do. This matters more than it sounds,
because the environment that cannot reach Commons is the sandbox this work is
done in, which is precisely where nobody is watching for it.

**`scripts/test/evidence-image-surgery.test.js` is in the offline suite**,
covering the half that can corrupt a file silently. Editing a renderer config by
text is dangerous and has already gone wrong here: while converting Units 3 and
4, a matcher looking for a card by title found `stableImages` first and replaced
a map-key entry on Topics 3.1 and 3.4. Both files still parsed, both pages still
rendered, and every structural check stayed green. The test drives the real
splice against exactly that shape.

**A candidate that lands gets deleted from the staging file.** It is a staging
area, not a record of what the course uses. A landed candidate left there is a
second copy of a card whose first copy is the renderer config, and the two can
then disagree with nothing to report it.

**Units 6 and 9 are refused.** Their pools are written by `build-unit6.js` and
`build-unit9.js`, so a card belongs in that generator's `MODULE07_EVIDENCE` map;
editing the renderer config would survive until the next rebuild. The tool
derives that list from the generators rather than keeping its own.

### The first real run, and what it proved

Twelve candidates were staged for Units 5.1 and 5.3 to 5.8 on 2026-09-06 and
checked from a GitHub runner. **Eight of the twelve filenames did not exist.**
Every one of the eight was written by someone who was confident about it, and
every one of the eight would have passed `validate.js`, rendered a lesson page,
and shown a student local fallback artwork instead of evidence. That is the
whole argument for this pipeline, made in one run.

The fallback search resolved seven of the eight over three further rounds, and
the corrections are not the sort of thing anyone guesses:

| Wanted | Actually on Commons |
|---|---|
| Muhammad Ali portrait | `ModernEgypt, Muhammad Ali by Auguste Couder, BAP 17996.jpg` |
| Standard Oil octopus | `Standard oil octopus loc color.jpg` |
| Chartist daguerreotype | the Google Art Project scan of Kilburn's original |
| Coalbrookdale by Night | `Philipp Jakob Loutherbourg d. J. 002.jpg`, by painter not painting |
| Suez opening | `Inauguration et ouverture à la navigation du Canal de Suez, 17 novembre 1869, ND314.jpg` |
| Punch, "Capital and Labour" | `Punch 1843 - Reichtum und Armut.png`, filed under its German title |

Two more things the run taught, both about the searches rather than the files.
**A search written as a description of the picture returns nothing**: five
queries of six or seven words all came back empty and all found something once
cut to two or three. And **a search can return a different picture than the one
asked for, which is a content decision, not a correction**: Tomioka came back as
a photograph of the surviving mill rather than the Meiji print that was wanted,
so the card's caption and prompt were rewritten to be about the building. Fitting
a found file to a caption written for a different picture is exactly the defect
the Image Contract names.

Eleven of the twelve landed. Unit 5 went from 15 objects across 52 cards, with
seven topics carrying a single object and five flagged "mostly author summary",
to **27 objects across 53, every topic green and none flagged**.

**One is still outstanding**: a period woodblock print of the Tokyo to Yokohama
railway of 1872, for Topic 5.4, which three searches could not find. It is
recorded here rather than left in the staging file, because a candidate with no
working filename and no working search reports "missing" forever, and a report
that is permanently red for something nobody can fix is one people stop reading.

**Unit 5's module-card artwork is still from the wrong period.** Topics 5.1 to
5.8 point their `stableImages` at Columbus, Magellan, Vasco da Gama, a casta
painting and the Florentine Codex. That is Module 07's neighbour rather than
Module 07, untouched here, and now the largest remaining Unit 5 defect.
