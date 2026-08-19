# Foundations Exam 1

Forty multiple-choice questions on Foundations 1 through 5, generated into a Canvas
QTI 1.2 package. Foundations 0 is not assessed: it introduces the skills and the course
structure rather than content.

## Files

| File | What it is |
|---|---|
| `foundations-exam-1-canvas-qti.zip` | **The import file.** Canvas Classic Quizzes. |
| `ANSWER-KEY.md` | Teacher key: correct answer, why, and the chapter section it came from. |
| `questions.js` | The 40 questions. **This is the source. Edit here, then rebuild.** |
| `stimuli.js` | The eight passages, as verbatim excerpts from the eBook chapters. |
| `build.js` | Emits the zip and the key. |
| `validate.js` | Enforces the exam's design constraints. |
| `verify-stimuli.js` | Proves every passage is real chapter text. |

## Importing into Canvas

Course **Settings** > **Import Course Content** > Content Type **QTI .zip file** > choose
the zip > **Import**. It lands as an unpublished quiz named Foundations Exam 1, worth 40
points, one attempt, answers not shuffled.

Shuffling is off deliberately. Several questions pair a claim with its mirror image, and
the answer key is keyed to the authored order; turn shuffling on in Canvas if you want it
and the key's letters no longer apply.

## Changing a question

```bash
node validate.js         # design constraints
node verify-stimuli.js   # passages are genuinely chapter text
node build.js            # rewrites the zip and the key
```

Never hand-edit `ANSWER-KEY.md` or anything under `build/`. Both are generated, and a
hand edit survives exactly until the next build.

## What the checks enforce, and why

`validate.js` fails on any of:

- not exactly 40 questions, or a question without four options and one key
- **option lengths spreading more than 25%**, and it warns when the key is the longest
  option. A key that is reliably the longest is answerable without reading the chapter,
  which would make the exam measure test-taking rather than history.
- answer letters clumping: fewer than 7 or more than 13 of any letter, or four of the
  same letter in a row
- a negatively worded stem (`NOT`, `EXCEPT`, `LEAST`). Missing one of those costs a
  student a point for reading speed rather than for history.
- `all of the above` and its relatives
- a Part B question pointing at a stimulus that does not exist

`verify-stimuli.js` checks every passage against
`scripts/lib/deep-reading-content/foundations-N.js` and fails if a single excerpt has been
reworded. Passages are condensed only by cutting, and the cuts render as an ellipsis.
This is the check that matters most: the course teaches students to ask what a source
actually says, so its own exam cannot paraphrase a source and present the result as a
quotation. The check caught thirteen drifted sentences on the first run.

## Design notes

**Difficulty is aimed at 85% or better for a student who did the reading.** That is a
deliberate target for a first exam, and it shapes everything: one unambiguously correct
answer per question, distractors that are wrong for a reason a student can articulate
rather than wrong by a technicality, no double negatives, and no question whose difficulty
comes from the wording rather than the history.

**Coverage is weighted toward Foundations 1 to 4**, with Foundations 5 lighter because
half of that chapter is the analytical skills rather than content. Part C tests those
skills against content the students already know.

**Everything is answerable from the eBook chapters and the lesson pages.** The `source`
field on every question names the section, so a challenged question can be settled by
opening the reading rather than by argument.

## Not built here

- Per-question feedback inside Canvas. The key covers it for review day; say the word
  and `build.js` can emit `itemfeedback` blocks instead.
- A blueprint table and a student study guide. Both are straightforward additions from
  the same `questions.js` metadata.
