# Module 07, the Evidence Lab

Moved word for word from `CLAUDE.md` on 2026-10-16 so the rulebook every session loads stays short (Jeff's decision, recorded in AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`). It is as binding as it was there: read it before changing anything it covers. A comment elsewhere that says "see <section> in CLAUDE.md" means this file; `CLAUDE.md` lists where each section went.


The full standard is `docs/module-07-scaffolding-standard.md`. Three things about
it belong here, because each one was learned by shipping the opposite.

**A topic declares its evidence in exactly one place, `lesson.images`, and
nothing overwrites it at load.** On 2026-09-05 Units 5 to 9 gained a second pool,
`assets/data/module-07-evidence-unit-N.js`, plus a runtime that replaced
`lesson.images` wholesale on every page load. Every one of the 85 authentic
images across those units was still in its data file, shadowed, and nothing on
the page or in any check could say which pool a student had read. That is the
same failure as two coach prompt builders or an MP3 beside a chapter, and it is
why `scripts/check-module07-authored.js` fails the push if a converted topic
grows a second pool or its shell re-loads the runtime.

**All 71 topics are converted**, units 3 to 9 on 2026-09-06 and units 1 and 2
added to `CONVERTED` on 2026-09-10, and the registries, the
override runtime and the two checks that guarded that path are deleted. If a
topic's evidence is wrong on the page it is wrong in that topic's renderer
config, or in the generator that writes it, and nowhere else. Do not build a
second pool again.

**Units 6 and 9 keep their pools in their generators**, in a
`MODULE07_EVIDENCE` map beside `DEEP_READINGS`, because `build-unit6.js` writes
every Unit 6 renderer config (6.1's included) and `build-unit9.js` writes 9.4 to
9.9. Hand-editing one of those configs survives exactly until the next rebuild,
and `readings-reproducible.test.js` runs `--check` on both, so the push fails
first. Both generators derive their lesson shells from a template shell, 6.1 and
9.3, so a script tag added to the template reaches every generated shell.

**An author's summary is not evidence, however good the question attached to it
is.** The module's sequence is *object -> observation -> inference -> claim*, and
a card that reads "Triple Alliance: Germany, Austria-Hungary, Italy" has already
done the observing. That card shipped on Topic 7.2 while the topic's own 1914
alliance map sat shadowed in its data file. The authenticity gate in the standard
is the rule; the automatic downgrade is that a summary standing in for an
available object costs the A outright. When the evidence genuinely is text, a
law, a treaty clause, a run of figures, the card declares `sourceText` and a
`label` and `assets/js/behistorical-evidence-text-card.js` draws it as a plate.
That module only fills in a card that asked to be filled in and never replaces an
authored `url`.

**Two checks and a report, and the split is the point.**
`check-module07-authored.js` is in the offline suite and enforces only what is
not a judgment call: on a converted unit, every card is a picture or declares
`sourceText`. `CONVERTED` in that file now lists every unit, and should stay
that way. `node scripts/report-evidence-authenticity.js [unit] [--summaries]`
sorts every card in the course into object, record and summary and is
**deliberately not in any suite, exiting 0 always**, the same as
`report-absolutes.js`: its classifier is a proxy, whether a card is really a
historical object is a teaching judgment, and a gate over it would only teach
people to bolt a numeral onto a summary until the report went quiet. Thirteen topics are flagged
today and were deliberately left alone; most are the classifier's own blind spot,
which reads a card's body and not its label. The reasons are in
`docs/module-07-unit-7-conversion.md` and
`docs/module-07-units-5-6-8-9-conversion.md`. **Do not move dates into card
bodies to quiet the report**; that is the numeral-bolting it exists to
discourage.

**`evidenceLab.items` is not rendered by anything.** It is prose in a data file
that no renderer reads. Units 3 and 4 carried an items bank and no `images`
array, so for twelve topics the Evidence Lab drew its task and zero evidence
cards; the report is what surfaced that, and both units are now converted. If a
topic's evidence looks good in the data file and thin on the page, this is why.

**An AI-generated picture is never Evidence Lab evidence.** It can set a scene on a slide or a concept card when it is labeled `Historical Reconstruction - AI Generated`, but asking a student to "notice the ship design" on an image a generator drew teaches them to treat an invention as a source. Topic 2.3 shipped that on 2026-09-21, replacing a Borobudur ship relief and a Song celadon bowl; both are back. See "AI-generated images" in `docs/PRESENTATION-AUTHORING.md`.

**Never write a Commons filename straight into a lesson.** A filename from memory
is indistinguishable from a correct one until something fetches it: the name is
well formed, `validate.js` passes, the page renders, and the student gets local
fallback artwork and no evidence. Stage it in
`scripts/lib/evidence-image-candidates.js`, run `node
scripts/source-evidence-images.js`, and let the tool apply only what Commons
actually served in that run. **Then run `--describe <unit>` and read what
Commons says each picture is against the caption written for it**: a file that
resolves is not the same thing as the right picture. On Unit 5 that caught a
commemorative medal captioned as a photograph of the Suez opening procession,
which had passed every other check in the repository. The machine answers "does this exist"; whether it is
the right picture is still a person's call, which is why a dead candidate prints
real search results instead of taking the top hit. Delete a candidate from the
staging file once it lands.

**Verify the pictures resolve before certifying a batch.** `validate.js` only
knows whether a filename is well formed. Topic 1.5 was graded A at 11:30 on
2026-09-05 with two dead Commons links in its pool and was fixed at 13:28 and
14:06 the same day. Run `check-image-urls.js` from a network that can reach
commons.wikimedia.org; an authentic image that 404s is worse than a text card,
because the student gets fallback artwork and no evidence at all.
