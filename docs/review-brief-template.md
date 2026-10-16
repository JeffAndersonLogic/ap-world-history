# Independent review brief: BeHistorical Topic {{TOPIC}} (AP World History: Modern, ninth grade)

<!-- Template for the Phase 9C reviewers (build-topic skill). scripts/capture-topic-for-review.js
     copies it into each review packet as REVIEW-BRIEF.md with the placeholders filled in. Edit the
     template, never a packet's copy. -->

You are an independent reviewer. You have NOT seen the builder's reasoning, and you must not go
looking for it: do not read `docs/TOPIC-{{KEY}}-STORY-DRAFT.md`, `docs/TOPIC-{{KEY}}-CLAIM-LEDGER.md`,
git history or commit messages. Your job is to FIND ERRORS, not to confirm the work.

## What you may read
- The CED (the College Board's own wording, the authority on scope):
  `scripts/lib/ced-source/unit-{{UNIT}}.js`, entry '{{TOPIC}}' (and the unit-at-a-glance for its
  reasoning process and suggested skill).
- The unit story map, `docs/UNIT-{{UNIT}}-STORY-MAP.md`: this topic's section, "Where the truth
  lives for each module", and the neighboring topics' sections (for what this topic owns and what
  is a bridge only).
- The rendered surfaces, captured from Chromium, in `{{REVIEW_DIR}}`:
  - `lesson-page.txt`: the lesson page as rendered, then each module pop-out, then each lecture
    card with its caption
  - `first-and-10.txt`: the First & 10 reading (every student reads this in class)
  - `deep-reading.txt`: the optional deep reading (also the eBook chapter)
  - `beintheroom.txt`: the BeInTheRoom scenario (visible text, then all text including later steps)
  - `deck-teacher-text.txt` and `deck-slides-data.json`: the projected slides' text, and the deck's
    data including speaker notes (`notes`) and picture credits
  - `slides/teacher-NN.png` ({{SLIDES}} slides): full-window screenshots at 1920x1080 in projector
    mode. View them with the Read tool. There are no student-deck screenshots on purpose: the
    student deck is this deck minus Teacher Preflight and the notes, generated from it, and its
    layout is checked by the browser test suite.
  - `canvas-text.txt`: the Canvas assignment and calendar event text
- Picture files: `assets/images/topics/{{KEY}}/` (view them with the Read tool) to compare against
  captions.
- Repo root: `{{ROOT}}` (read-only for you: DO NOT EDIT ANY FILE).

## What counts as a defect
A defect is a demonstrable failure of: historical accuracy; chronology; sourcing or source-to-claim
fit (a quotation that is not what the source says, a caption that misdescribes its picture, a
credit naming the wrong maker, date or holder); CED alignment (a required Key Concept missing or
misstated, the wrong reasoning process or skill); story-map ownership (material the map gives to
another topic taught here as this topic's own); page truth (a prompt, direction or question
telling a student to look at or use something that is not on the page or that they have not been
given; a checkpoint that displays a target it does not assess); ninth-grade readability (a prompt
a fourteen-year-old would have to decode before answering); accessibility; or the course
contradicting itself across surfaces. A preference about wording or design is NOT a defect.
Unsupported speculation is NOT a defect.

Recurring defect classes in this course: wrong dates; popular myths; superlatives, "firsts" and
sole causes stated as fact; claims scholars debate stated as settled; the course contradicting
itself across surfaces; captions that overclaim (eyewitness status, wrong date, a later copy not
flagged); prompts naming things not on the page; a near-model answer to a checkpoint, the Skill
Builder or a First & 10 question printed elsewhere on the student's own page or projected (the
course deliberately teaches the content in the reading and the lecture cards and has a required
retelling slide; a defect is a copyable finished answer to the specific task, not the content
itself).

Layout features shared by every deck in the course (subtitle alignment on action slides, Key
Concept band padding, credit-tag placement, map label type size) are already logged course-wide;
do not report them for one topic.

## What to report
A numbered list. For each finding: (1) where exactly (file and the quoted words, or slide number);
(2) what is wrong; (3) the evidence (for history: the source and what it actually says, with a URL
or a full citation; say if you could not open the source); (4) the proposed fix, as a narrower
concrete claim rather than a vaguer one. Rank by severity. Then a one-line verdict: "No supported
defects" or the count. Be concrete; do not pad. If something is fine, do not list it.
