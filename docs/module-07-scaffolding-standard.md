# Module 07 Evidence Lab Standard

## Purpose

Module 07 is where students practice turning historical material into usable evidence. It sits after the AP Skill Builder and Checkpoint 1, and before Primary Source analysis.

The core sequence is:

**evidence object -> observation -> inference -> claim**

For later units, add a fifth move when appropriate:

**evidence object -> observation -> inference -> claim -> limitation**

Module 07 should not become another content summary, another checkpoint, or a duplicate of Module 08 HIPP/source analysis.

## A-grade rubric

Score each category 0-2. An A-grade Evidence Lab scores at least **12/14 with no zero**.

1. **Authenticity** — Students work with an artifact, image, map, quantitative record, material object, or clearly labeled secondary reconstruction rather than only a paragraph that tells them what happened.
2. **Coverage** — The evidence set gives students access to the major learning target(s) of the topic.
3. **Inference** — The student must decide what the evidence suggests. Captions supply identification/provenance, not the historical conclusion.
4. **Claim connection** — The response requires students to explain how evidence supports a historical claim.
5. **Choice/comparison** — Students have enough meaningful evidence choices to select, pair, or compare evidence rather than being forced into one predetermined answer.
6. **Scaffolding** — The task makes the reasoning sequence visible at the appropriate point in the course.
7. **Module distinctiveness** — Module 07 does evidence work that is meaningfully different from Checkpoint 1 and Primary Source.

## The authenticity gate

**This gate is applied before the rubric is scored, and it can veto an A on its
own.** Added 2026-09-05, after the Units 5-9 pass produced 44 labs whose reasoning
tasks were excellent and whose evidence was not evidence.

> An Evidence Lab cannot receive an A unless a substantial majority of what
> students analyze is authentic historical evidence, or a meaningful reproduction
> of it.

Authentic evidence includes: photographs, political cartoons, maps, paintings,
posters, advertisements, artifacts, architecture, laws, treaties and treaty
clauses, speeches, letters, diaries, newspaper excerpts, tables and statistics,
government and administrative records, contemporary diagrams, and clearly
identified secondary quantitative or geographic reconstructions.

An author-written historical summary may still appear. It belongs as **context
for** evidence, not **as** the evidence.

**The automatic downgrade:** if an author-written summary stands in for a
historical object that was available, and performs the observation the student
was supposed to make, the lab cannot earn an A regardless of how sophisticated
the question underneath it is.

The case that produced this rule is Topic 7.2. The lab asked a genuinely good
question, "does this evidence explain why a crisis spread, why a crisis began, or
both?", about a card whose entire body read:

> Triple Alliance: Germany, Austria-Hungary, Italy
> Triple Entente: France, Russia, Britain

That is useful instructional information and it is not an object. There is
nothing in it for a student to notice, because the noticing has already been
done. Meanwhile the topic's own 1914 alliance map, its Punch cartoon of Rhodes,
and a contemporary illustration of the Sarajevo assassination were sitting in its
data file, shadowed at load by the registry runtime.

**Why the reasoning task cannot buy back the missing object.** The sequence this
module owns is *evidence object -> observation -> inference -> claim*. Handing a
student the observation and keeping the inference is not a harder task, it is a
shorter one, and it is the half the other nine modules already do.

### A ruler portrait can be an object. A press photograph of a leader usually is not.

Unit 7 cut its portraits of Hitler, Chamberlain, Churchill, Stalin and Gandhi as decorative. Units 3 and 4 keep portraits of Suleiman, Qianlong, Shah Abbas, Peter the Great, Luther and Guru Nanak. That is not drift, and the line between them is worth stating because it will come up again.

**State portraiture was an instrument of rule.** A commissioned portrait of an early modern sovereign is a deliberate claim about legitimacy, made in regalia, posture, setting and dress by people who chose every element of it. "How does this ruler want to be seen, and by whom" is a real sourcing question with a real answer in the frame. A twentieth-century press photograph of a head of state is a different object: nobody composed it as an argument, and the prompts attached to those Unit 7 cards asked nothing of the image.

**So the test is the prompt, not the genre.** A portrait earns its place when the card asks the student to read the self-presentation and says what the portrait cannot show. Every Unit 3 and 4 portrait does: they name clothing, posture and symbols of rank, and each one closes on what a portrait cannot prove about taxation, bureaucracy, or how ordinary people actually behaved. A portrait card whose prompt could be answered without looking at the picture is decoration, and should be cut or rewritten.

### An emblem is not an object either

Topic 4.4 through 4.8 each carried a card whose picture was the Dutch East India Company's monogram and whose caption said it "symbolizes the joint-stock company model". The student was asked to notice "the corporate identity and state connection" in a trademark. That passes the machine check, because a logo is a picture, and it fails this gate, because the caption was carrying the entire argument.

All five became the company's actual 1602 charter: a 21-year monopoly east of the Cape, and powers to build forts, keep troops and make treaties. A student can read those powers and work out for themselves how a company came to behave like a state. That is the same defect as the Topic 7.2 alliance card wearing different clothes, and the machine could not catch either one.

### The machine half, and its limit

`node scripts/report-evidence-authenticity.js [unit] [--summaries]` sorts every
card in the course into **object** (a real picture), **record** (no picture, but
the words carry a quotation or figures) and **summary** (neither). It is
**deliberately not in any suite and exits 0 always**, the same as
`report-absolutes.js` and `report-skill-alignment.js`.

The classifier is a proxy: a URL, a quotation mark, a numeral. Whether a card is
really a historical object is a judgment about teaching, and a gate that failed a
push over it would teach exactly one behavior, which is bolting a numeral onto a
summary until the report goes quiet. **Read a flag as a question**, not a verdict:
*is there a real object available for this card that we are not using?* On Topic
7.8 the answer is no, and its documentary pool of laws and administrative records
is correct. On Topic 7.2 the answer was yes.

`scripts/check-module07-authored.js` **is** in the offline suite, and it enforces
only the part that is not a judgment call: on a converted unit, every card is
either a picture or declares `sourceText`. A card that is neither is an author's
summary with nothing to observe, and it fails the push.

## Evidence-card writing rules

Each card should contain:

- a descriptive title;
- a working source/image link;
- a short caption that identifies the object, date/context, and evidence type;
- a prompt that asks the student to **notice** a concrete detail before making an **inference**;
- a question about what claim the evidence can support;
- where useful, a limit such as what the source cannot prove alone.

Do not write captions such as "This proves that..." or "This is evidence that..." when that statement performs the student's inference for them.

When an image or map is modern, reconstructed, or later than the period, label it explicitly. Students should know the difference between contemporary evidence, later memory, and secondary reconstruction.

## Progressive release

### Units 1-2: high support

- Usually 4-6 curated evidence choices.
- Explicit observation -> inference -> claim language.
- Balanced evidence categories.
- Response prompts can explicitly ask for a limitation.
- Comparison topics should provide balanced evidence from each region/network being compared.

### Units 3-4: moderate support

- Usually 4-6 evidence choices.
- Continue to require observation and inference, but reduce sentence-frame style guidance.
- Require students to choose which evidence best supports a claim and explain why.
- Introduce more deliberate evaluation of evidence limits and competing interpretations.

### Units 5-6: guided independence

- Less procedural wording.
- Students choose evidence and reasoning category with fewer cues.
- Evidence sets can include quantitative, political, economic, visual, and textual traces.

### Units 7-9: AP independence

- Students should be able to identify relevance, limitations, corroboration, and claim fit with minimal procedural guidance.
- Evidence sets should increasingly resemble the decisions students make in SAQ/DBQ/LEQ preparation.

## Module boundaries

- **Module 05 — AP Skill Builder:** learn the historical reasoning move.
- **Module 06 — Checkpoint 1:** apply content/reasoning to a short response.
- **Module 07 — Evidence Lab:** turn historical material into evidence for a claim.
- **Module 08 — Primary Source:** analyze a document/source, including context and perspective where appropriate.

## Renderer contract

The current Unit-topic renderer builds Module 07 cards from `lesson.images`. The `evidenceLab.items` arrays that exist in several older topic data files are not, by themselves, rendered as Evidence Lab cards.

Therefore, an Evidence Lab is not complete merely because `evidenceLab.items` contains rich prose. **Do not assume an item bank visible in the data file is visible to students.** Units 3 and 4 are the live case: twelve topics carry `evidenceLab.items` and no `images` array at all, so their Evidence Lab renders its task and zero evidence cards.

### One authored pool per topic

**A topic declares its evidence in exactly one place: `lesson.images`, in its renderer config** (or its data file, for topics that have always kept it there). Nothing may overwrite that at load.

This is a rule because it was broken. The Units 5-9 pass shipped a second pool, `assets/data/module-07-evidence-unit-N.js`, and a runtime that replaced `lesson.images` wholesale on every page load. Two pools with one silently winning is the failure this repository refuses everywhere else, the same shape as two coach prompt builders or an MP3 beside a chapter: a teacher editing a caption in the data file would have seen no change on the page and no failing check.

Units converted to the single-pool shape are listed in `CONVERTED` in `scripts/check-module07-authored.js`, which fails the push if a converted topic grows a second pool or a shell re-loads the runtime. **When the last unit is converted, delete `assets/js/module-07-evidence-runtime.js` and the remaining `module-07-evidence-unit-*.js` registries** rather than leaving a dormant override layer for someone to rediscover.

### Text evidence

When the evidence genuinely is text, a law, a treaty clause, a run of figures, a card declares `sourceText` (an array of lines) and a `label` naming the kind of record, and leaves `url` empty. `assets/js/behistorical-evidence-text-card.js` draws those words as a branded plate. It only ever fills in a card that asked to be filled in, and never replaces an authored `url`.

A text plate is for evidence that has no picture. It is **not** a way to render a summary and call it an object; see the authenticity gate above.

### Verify that the pictures resolve

`validate.js` checks offline that an image filename is well formed. It cannot tell you whether the file exists. **Run `node scripts/check-image-urls.js` from a network that can reach commons.wikimedia.org before certifying any Evidence Lab batch.** Topic 1.5 was graded 13/14 A at 11:30 on 2026-09-05 with two dead Commons links in its pool, fixed at 13:28 and 14:06 the same day. An authentic image that 404s is worse than a text card: the student gets fallback artwork and no evidence at all.