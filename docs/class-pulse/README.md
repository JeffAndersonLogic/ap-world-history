# Class Pulse: AI Rating Help

Class Pulse is the teacher heat map: students submit one checkpoint answer, and the teacher
sees, for each criterion, how much of the class shows it. Rating a whole class by hand is the
slow part. This folder describes how an AI can suggest a first rating for each answer, which
the teacher then accepts or changes. The AI never assigns a grade, and nothing it suggests is
saved unless the teacher accepts or changes it.

## Which checkpoint

The live pilot rates **Topic 3.2 Checkpoint 2, Symbols and Revenue** (`assignmentId` in
`scripts/lib/class-pulse/config.js`). Its rubric is in `scripts/lib/class-pulse/rubrics.js` and
cites the CED for Topic 3.2 (Learning Objective B, KC-4.3.I.A, KC-4.3.I.D, suggested skill 4.A).
The invented practice class and the practice files in `practice/` are on Topic 2.3 Checkpoint 1,
so a practice result says how the AI rates in general, not on the 3.2 rubric.

## How it works

1. **Export for AI rating** on the Class Pulse page saves a packet file: the question, the
   checkpoint's criteria and the answers. It contains no names, no account IDs and no class.
   Blank and missing answers are left out, and answers are listed in an order that says nothing
   about who wrote them.
2. **The teacher's own AI rates the packet** by following
   [`ai-rating-instructions.md`](ai-rating-instructions.md), and saves a ratings file.
3. **Import AI ratings** on the page checks the file. Every rating must use one of the four
   labels, and every positive rating must quote the student's own words exactly. A quote that is
   not in the answer word for word is not trusted: that rating goes back to the teacher as
   "Needs your review". Ratings for a different checkpoint, or for an answer that has changed
   since the export, are refused.
4. **The teacher reviews.** Imported ratings are labeled "AI suggestion" on the page. "Accept
   this suggestion" or a correction saves the teacher's own judgment; nothing else is saved.
   Suggestions are held in the page only, so after a reload, import the ratings file again.

The code is `teacher/class-pulse/ai-handoff.js`; the page wiring is in
`teacher/skilllens-pilot/app.js`.

## The approval switch

For real student work, both buttons are **off** until ZCS approves AI help in writing. The switch
is `aiAssist` in `scripts/lib/class-pulse/config.js`:

```js
aiAssist:{approved:false,approvalReference:''}
```

After written approval, set `approved:true` and `approvalReference` to who approved it and when
(for example `'Dan Layton, email of 2026-11-02'`), rebuild with `node scripts/build-class-pulse.js`,
and update the privacy page (`privacy.html`) to say what is sent, to which service, and how it is
protected, **before** the change reaches students. The privacy page promises that order.
`scripts/test/class-pulse-ai-handoff.test.js` fails if the switch is on without a reference.

The practice class needs no approval: every student and answer in it is invented.

## Where the files go

The packet and the ratings file hold student writing once real classes are involved. Keep them in
a private folder on the teacher's own computer, **never inside this repository** or anything
published. This repository is public.

## Practicing before any real student work

Two separate checks, both on invented answers.

**1. Does the AI rate the way the teacher does?** Use the practice files in
[`practice/`](practice/): `practice-packet.json` (10 invented answers to Topic 2.3 Checkpoint 1)
and `answer-key.json`. **The answer key is a draft written by Claude, and the teacher should
check it first**: a key written by the same kind of model it tests is not independent until a
teacher has confirmed it. Change any rating you disagree with in
`scripts/lib/class-pulse/practice-set.js` and run `node scripts/build-class-pulse-practice.js`.

Then have the AI rate `practice-packet.json` **twice**, in two separate conversations, saving
`run-1.json` and `run-2.json`, and compare:

```bash
node scripts/class-pulse-compare.js docs/class-pulse/practice/practice-packet.json docs/class-pulse/practice/answer-key.json run-1.json run-2.json
```

It reports agreement with the key on each criterion, every disagreement, and how often the two
runs gave the same rating. A suggested bar for this small check is at least 8 of 10 on each
criterion and at least 9 of 10 the same on both runs. Passing it is a reason to try one real
class once approved, not proof the AI is accurate; ten answers cannot show that.

**2. Does the whole loop work?** Open the practice class page, `teacher/skilllens-pilot.html`,
click **Export for AI rating**, have the AI rate the file, then **Import AI ratings** and review
the suggestions on the heat map.

## Tests

- `scripts/test/class-pulse-ai-handoff.test.js` (offline): nothing identifying leaves the page,
  untrusted quotes go back to the teacher, wrong or changed ratings are refused, and the switch
  stays off without a recorded approval.
- `scripts/test/class-pulse-practice.test.js` (offline): the practice key, and the comparison.
- `scripts/test/class-pulse-ai-handoff.browser.test.js` (browser): the full loop on the practice
  page, and the buttons switched off on the real-class page.

Each carries negative controls: deliberately broken copies that must fail.
