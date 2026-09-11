# Teach Mode Deck Voice

This extends `docs/STYLE.md`'s Voice and Readability sections to slide decks
specifically. It governs only the text a student sees on the slide itself,
titles, eyebrows, panel copy, stat tiles, and the KEY TAKEAWAY box. Presenter
notes (`data-notes`) stay the separate register CLAUDE.md's Class
Presentations section already documents, a teacher coaching another teacher
through the room, and are not covered by the rules below.

Written after Topic 2.1's first draft came back rejected as too casual for
AP-level academic writing, and not Jeff's voice. The problem was not a typo
sweep, it was structural: rhetorical questions standing in for headings, and
invented two-panel drama (Myth vs. Reality, The Boast vs. The Evidence) doing
the job the course's own established callouts already do better.

## The rules

**1. A heading states a claim, never asks a question.** "How do you run a
5,000-mile supply chain that no government owns?" is a hook for a podcast, not
a history slide. Replace it with the claim the slide proves: "Overland trade
required solutions no single government provided." A student reading only the
headings of a deck should be able to reconstruct its argument. A student
reading only its questions cannot.

**2. Full sentences in visible prose, not fragments used for punch.** "Not a
convoy. A business, with a payroll." reads as a performance. "A caravan
operated as a business, with an owner, paid staff, and a fixed cost
structure." states the same fact and does not perform stating it.

**3. Reuse the two callout labels this course already has, and only those
two.** `How we know` and `Common mistake to avoid` are established across all
71 deep-reading chapters. A deck invents nothing new. A misconception and its
correction belong in **one panel** under one of those two labels, in plain
prose, never as a dramatic two-card contrast with names like The Myth and The
Reality, or The Boast and The Evidence. Those labels are a game-show device,
and a game-show device is not what "How we know" or "Common mistake to avoid"
are for.

**4. No wordplay for its own sake.** "The goods list is not a matter of
taste. It is a matter of arithmetic." is a clever line before it is a
teaching sentence. "Which goods traveled the Silk Roads was determined by
cost, not by preference or custom." teaches the same mechanism without asking
to be admired for the phrasing.

**5. Ninth grade means readable, not simplified.** Break a sentence that
stacks four abstractions. Define an unfamiliar term the first time it
appears. Never cut the mechanism to make a sentence shorter, and never
replace a specific historical fact with a vaguer one to sound more casual.

**6. Direct address is fine; snark is not.** `docs/STYLE.md`'s Voice section
already keeps "the willingness to tell a student a sentence they were about
to write is wrong." That stays. What does not stay is performing that
correction as a bit, an aside, or a wink at the reader. Say the historical
fact and move on.

## What this looks like in practice

| Rejected | Fixed |
|---|---|
| "How do you run a 5,000-mile supply chain that no government owns?" | "Overland Trade Required Solutions No Single Government Provided" |
| Panels tagged The Boast / The Evidence | One panel, tag `How we know`, stating the claim and the better evidence in one paragraph |
| Panels tagged The Myth / The Reality | One panel, tag `Common mistake to avoid`, stating the misconception and the correction in one paragraph |
| "Not a convoy. A business, with a payroll, an owner, and a cost structure." | "A caravan operated as a business, with an owner, paid staff, and a fixed cost structure." |
| "The goods list is not a matter of taste. It is a matter of arithmetic." | "Which goods traveled the Silk Roads was determined by cost, not by preference or custom." |
| An org-chart of boxes and arrows for "who ran a caravan" | A `.stat-grid` of four short facts: One Leader, Paid Staff, One Segment Each, Shared Risk |
| A "How we know" panel stating the claim, the correction, and two supporting sentences | A "How we know" panel stating the claim and the correction in one sentence; the supporting detail moves to `data-notes` |
| A slide linking out to a YouTube clip | A `.video-wrap` slide, the clip embedded and playing on the board itself |

## Structure and density

Added after the second-draft rejection: the first fix (wording) was correct
but not the whole problem. The deeper issue was structural, and it is a
separate failure mode from voice.

**7. A slide carries an image, or a short list, never a paragraph.** The
"How we know" and "Common mistake to avoid" panels from rule 3 are ONE
sentence on the slide, not a paragraph. If the point needs more than one
sentence to state, the rest of it is what the teacher says out loud, in
`data-notes`, not more text on the board. A student who is copying a
paragraph off a screen is not listening to the teacher, and copying is not
the point of a slide anyway, per the deck's own existing design: the
KEY TAKEAWAY box is the only thing meant to be copied.

**8. No org-chart or flow-pipeline diagrams.** They read as a corporate
deck, not a history lecture, however accurate the content inside the boxes
is. Prefer, in order: a real photograph as a full-bleed `.hero` slide when
one is available and verified; a `.stat-grid` of short facts (a number, a
name, three or four words) when the content is genuinely list-shaped; a
table when the content is genuinely a structured comparison. A concept with
no honest photograph is not an excuse to draw boxes and arrows instead, it
is a reason to compress it into a `.stat-grid` tile the way Topic 1.4 did
for Maya city-states, a concept with no photograph either.

**9. A video clip plays on the slide, never links out.** The way Jeff has
always taught, a clip is part of the room the same way an image or a map
is: play it, then keep talking. A slide that only links to YouTube breaks
that rhythm and moves the room's attention off the projector and onto
whoever's device opens the tab. Embed it full-frame, one caption line at
most, the same restraint as `.hero`.

## Not yet a machine check

`check-style.js` runs on the deep-reading content modules only. Decks are
hand-authored HTML with no shared content module underneath them the way a
deep reading has, so nothing here is enforced by `npm test` yet. Until a deck
content model exists, this document is the standard a person applies before a
deck ships, the same way the judgment half of `docs/STYLE.md` already works
for deep readings. Revise this file itself, in place, as Jeff's specific
feedback on decks refines it further, rather than treating it as settled
after one pass.
