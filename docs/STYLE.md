# BeHistorical House Style

Two halves. The first is enforced by `scripts/check-style.js`, which runs in the
offline suite, so it fails a push rather than waiting to be noticed. The second
is judgment, which no checker can hold, and it is the half that actually decides
whether a chapter teaches anything.

**Before anything else: you cannot edit the pages.** The ten eBook volumes and
the 77 readings are all generated. A style fix goes into the content module and
then you rebuild:

```bash
# edit scripts/lib/deep-reading-content/<topic>.js, then
npm run build:ebook && npm test
```

Hand-editing a generated page either fails `--check` on the next push or gets
silently reverted by the next rebuild. That is the whole reason the content model
exists, and a proofreading pass is exactly when someone forgets it.

---

## Enforced by `npm run check:style`

Four rules, chosen because a machine can decide them without judgment.

**1. American English in student-facing prose.** `labor`, `center`, `color`,
`neighbor`, `defense`, `traveled`, `program`, `plow`, `mold`. The checker carries
the stem list.

**2. Dates take a space after `c.`** Write `c. 1200`, never `c.1200`. Ranges in
prose use the word "to": `c. 1200 to c. 1450`. The College Board's own materials
use the spaced form, and it reads better at the start of a sentence.

**3. No em or en dashes in prose.** Commas, colons, periods or parentheses. This
is a global rule across all of Jeff's writing, not only this repo. The `dates`
field is exempt, because it is a metadata line rather than a sentence.

**4. Note labels are recognizable on sight.** A misconception note is always
`Common mistake to avoid`. A sourcing note always begins `How we know`, and may
carry a specific tail: `How we know: a wreck is a sealed sample`. A student
should know what kind of box they are looking at before reading a word of it.

### Exceptions are real, and they go in the checker

Proper nouns, titles of works and direct quotations keep their source's
spelling. Four are currently in the list: the *Statute of Labourers* of 1351,
the title of Chadwick's 1842 *Report on the Sanitary Condition of the Labouring
Population*, the Labour Representation Committee of 1900, and the Labour Party.
None of them is a mistake. Add the exact string to `ALLOWED_STRINGS` in
`scripts/check-style.js` with the reason, rather than weakening a rule so that a
real error can slip past it later.

An exemption covers **every** occurrence of its phrase in a string, not the
first. Matching on `indexOf` alone let a paragraph name the Labour Party once
and then flagged it the second time, in a sentence identical to one that had
just passed, and the fix a writer reaches for when that happens is to stop
naming the thing. The exemption is still narrow: it covers only the span of the
allowed phrase itself, so a bare "labour" elsewhere in the same sentence still
fails.

### Overclaims, and why that check is a report rather than a gate

`node scripts/report-absolutes.js` lists superlatives, universals and sole-cause
claims across every eBook chapter, with context, grouped by pattern. It
exits 0 no matter what it finds, and it must stay that way.

The reason is the split this repo runs on. `npm test` is hard on plumbing and
silent on pedagogy, because a missing capture block loses a student's work with
every other check green, while whether a claim is defensible is a judgment about
evidence. A gate that failed a push over the word "only" would teach one
behavior: add qualifiers until the grep stops matching. Hedged prose is not more
accurate prose, it is prose that has stopped saying anything, and the whole
value of these chapters is that they state a mechanism sharply enough to be
remembered.

So a person reads the list and decides one of three things per hit:

- **Keep.** The absolute is true and load-bearing. "The only path by which the
  three reading answers reach Canvas" describes a system with one path.
- **Narrow.** The usual answer, and the important one: replace a wide claim with
  a smaller **concrete** one rather than with a qualifier. "The richest society
  on earth" becomes the largest cities, the deepest commercial economy, the
  widest print culture. Narrower and sharper at once.
- **Hedge.** Only when the point is genuinely contested, and then name the
  dispute: "one influential interpretation holds that...". This is the right
  answer for a scholarly argument and the lazy answer for everything else.

A useful discriminator when triaging: a ranking of something **measured**, the
largest city, the largest temple, usually survives, and a ranking of an
**aggregate abstraction**, the richest or most sophisticated society, usually
does not, because nobody can check it.

Expect a high false-positive rate by design. Most hits on "the only" are honest
mechanism claims, and a report that fired only on certain problems would miss
the ones worth catching.

### What the checker does not cover, and why

It reads the chapter content modules only. The 77 First & 10 readings are
pinned word for word by `readings-golden.js` and `foundations-golden.js` against
committed fixtures of the hand-authored originals, so changing a spelling there
fails a test whose entire purpose is to prove no words were lost in migration.
Sweeping those is a deliberate decision that means re-baselining the fixtures,
and re-baselining a golden fixture to match current output is exactly the move
that makes it stop catching anything. Do it on purpose, in its own commit, or not
at all.

---

## Judgment, which is the half that matters

### Superlatives and rank claims

A superlative about historical rank must be defensible, and hedged when the
scholarship hedges. "The oldest surviving national census in the world" is
correct, sourced, and the most teachable fact in the Han section; softening it to
"one of the older censuses" costs the student something and gains nothing.

What is not acceptable is a rank claim nobody has checked. `largest`, `first`,
`oldest`, `wealthiest`, `most advanced`, `only`: each is a place where confident
writing overreaches. Check it, or hedge it in the text, or cut it.

Do not run a blanket search for superlatives and soften whatever it finds. Most
hits are ordinary English, and the ones that are not are usually the sentences
worth keeping.

### Absolutes and causation

Prefer `contributed to`, `helped create the conditions for`, `in many regions`,
`one important factor`. Reserve `caused` for a mechanism you can state. The house
formulation is the one in the chapters: **surplus made hierarchy possible,
it did not cause it**, and the Indus cities are the evidence for the distinction.

This is not hedging for its own sake. It is the causation skill the AP exam
tests, modeled in the prose the student is reading.

### Determinism

Never write that agriculture inevitably produced civilization, that Europe was
bound to dominate, or that terrain decided an outcome. Geography sets conditions.
The historian's question is always what a condition made **easier or harder, for
whom, and compared with where**. Foundations 1 section 09 and Foundations 5
section 08 both exist to hold this line.

### Geographic and group generalizations

"Europe believed", "Africa traded", "China wanted", "Islamic society" all name
an actor that did not exist. Name the state, the city, the dynasty, the merchant
community or the social group when the distinction carries weight. Do not
overqualify every sentence into unreadability; qualify where it changes the
claim.

### Chronology at the boundaries

An example from outside the period being taught is fine when it is doing
deliberate work, and must be labelled as such. Foundations chapters reach past
c. 1200 for Mansa Musa and for Ibn Battuta at Mali, and both say so in the text.
An unmarked anachronism teaches a student that the period boundary is decorative.

### Quotations

Any direct quotation is checked word for word against a reliable source.
Quotation marks never wrap a paraphrase of what someone "essentially said". The
chapters mostly paraphrase Herodotus, Thucydides, Juvenal and Augustus
without quotation marks precisely to avoid this, which is a legitimate solution:
if you cannot verify the wording, do not use the marks.

### College Board material

Learning objectives and historical developments belong to the College Board and
are paraphrased into the repo's own `learningTargets` and `successCriteria`
rather than reproduced at length. Where official wording matters, mark it as
official. A student should never be unable to tell which sentences are the exam
framework and which are BeHistorical's interpretation of it.

Keep the "Five Moves" framing in Foundations 5, and keep its part headings on the
official skill names, so the student-friendly label and the examinable term are
learned together.

### Voice

The point of a copyedit is consistency, not sterility. Keep the direct address,
the short declarative openings, and the willingness to tell a student that a
sentence they were about to write is wrong. "A name is not a mechanism" is
better teaching than any formal paraphrase of it.

What to cut is repetition that adds words without adding retrieval: a concept
explained twice in the same chapter for no reason. What to keep is repetition
that is deliberately building a habit, such as the same four-part skeleton
running through every section of a chapter.

### Readability

Ninth grade means breaking a sentence that stacks four abstractions, and defining
a genuinely unfamiliar term on first use. It does not mean simplifying the
historical argument, and it never means removing the mechanism, which is the part
the student is actually being asked for.

### The usefulness test

For any section, ask what a student could **do** with it: contextualize, explain
a cause, compare two cases inside one category, argue a position, or cite it as
evidence. If the honest answer is "remember it", the section is decoration and
the space belongs to something else. Every `useThis` block in a chapter is
this test written down.
