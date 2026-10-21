# The Lecture Deck, Class Presentations and Video Clips

Moved word for word from `CLAUDE.md` on 2026-10-16 so the rulebook every session loads stays short (Jeff's decision, recorded in AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`). It is as binding as it was there: read it before changing anything it covers. A comment elsewhere that says "see <section> in CLAUDE.md" means this file; `CLAUDE.md` lists where each section went.

## The Lecture Deck

The deck is a sequence and carries sequence controls in **both** renderers:
prev/next arrows, a `Card 3 of 8` counter, and the left/right arrow keys. The
controls and the Back to Modules button are **injected by the renderer**, not
added to the 77 lesson shells, so the shared renderer stays the only place that
knows the lecture modal's shape. Guard the injection on its own id, the way
`wireLectureControls()` does, or a re-render doubles the buttons.

Two exits, and they are not the same intention:

- **Close** returns the student to the card they opened, focus and all. A teacher
  stepping through a deck must not be yanked away from it.
- **Back to Modules** closes the card, scrolls to `#modules`, and puts focus on
  the first module card with `preventScroll: true` so the smooth scroll is the
  only movement the student sees.

`scripts/test/lecture-deck.test.js` is the gate on all of it. It asserts the page
really scrolls after Close rather than only that the lock was cleared, so a future
lock by some other mechanism fails there too.

### The card is paper, the picture is not

The lecture panel is `--warm-paper` under `--ink`, with a `--blackened-steel`
heading over a bronze rule and bold terms styled like a reading's `.kt`. The
figure keeps its near-black mount. Three reasons, in order of how much they
matter in a classroom:

1. A lamp projector can only add light. In a lit room a dark background degrades
   to washed-out grey, while a light one puts the lumens to work. Reverse this if
   the room is dark or the display is a flat panel.
2. Light-on-dark causes halation for the roughly one in three people with some
   astigmatism.
3. The positive polarity advantage: dark text on light is read measurably faster
   and more accurately, and the advantage grows as characters get smaller. The
   effect is small, and note that subjects in those studies performed better on
   light while reporting no preference, so asking students will not settle it.

It also ended an inconsistency. The readings and the module pop-outs were already
paper; this was the last dark reading surface in the system. `foundations-topic.css`
had been asking for a light panel all along and being overridden.

**The lecture card grid on the page stays dark.** Those are scanned at a glance,
not read at length, and it is the section's signature look.

The test is **polarity-agnostic**: it asserts contrast, not lightness, so flipping
back to dark stays a design call. What it will not allow is a half-done flip. Gold
headings on paper are 2.1:1, so changing the panel without the headings leaves the
title unreadable with every structural check still green.

## Class Presentations

Some topics also carry a live, projector-first slide deck (`unit-N/deck-topic-X-X-*.html`,
built to the Teach Mode shell: fixed 1280x720 board, reveal steps, presenter notes,
a Notes panel, and a Blackout control). It is the artifact actually taught from,
in the room, that day, which is a different thing from either a lecture card or a
video clip.

**A slide deck's presenter notes are written like a coach talking to the teacher
about the room**, and there is no server here to withhold them: this is static
files on GitHub Pages, so a `?mode=student` URL still downloads the identical
bytes notes included, and hiding the Notes button with CSS still ships the notes
to anyone who opens dev tools. The only way to make them genuinely absent from
what a student's browser receives is a second file that never contains them.

**`scripts/build-student-decks.js` generates that second file.** `DECKS` in that
script is the one place a deck is declared, the same reason `VOLUMES` is declared
in `build-ebook.js`: which decks exist is an editorial fact. It strips every
`data-notes` attribute, the Notes button and panel and its N shortcut, and the
Blackout control and its B shortcut and CSS, from the teacher deck's own bytes,
verifying by exact literal match rather than a loose regex so a shape it does not
recognize fails loud instead of silently shipping something half-stripped.
**Never hand-edit a `-student.html` file.** Edit the teacher deck and rebuild.
`--check` fails on drift without writing, wired into
`scripts/test/readings-reproducible.test.js` in the offline suite.

**The student deck is reached from a callout above the concept cards, not from
where a video clip sits.** `renderClassPresentation()` in the unit renderer reads
a topic's `classPresentation: { title, desc, url }` field and injects the callout
via `main-lecture-grid.insertAdjacentHTML('beforebegin', ...)`, guarded on its own
id the way `renderDeepReading()` is, so a re-render never doubles the card. A
topic with no `classPresentation` field shows no trace of it, the same
self-hiding contract as the video block and the deep-reading banner. It sits
*above* the cards and gets its own label, "In-Class Presentation", rather than
being grouped with video clips, because a video is outside supplementary media
and this is the primary artifact for the student who sat in the room; folding it
into the video block would misdescribe what it is. `classPresentation.url` must
always point at the generated `-student.html` file, never at the teacher deck.

## Video Clips

Videos are an **optional resource**, not part of the ten-module path and not part
of the lecture deck. Not every unit topic has a clip (read the coverage off the
`lecture.videos` arrays, never off a count written here); most Foundations topics
have two, and Foundations 2 has seven, one per belief system it teaches. That
uneven coverage is why they are not folded into the concept cards: it would leave
many topics' cards with an empty slot, and nothing in the data maps a clip to a
particular card.

- The block **introduces itself** when clips exist and **hides entirely** when
  they do not. An empty `#content-video-clips` used to leave a gap under the
  concept cards on every topic without one, which reads as something failing to load.
- A clip is a **specific video** (`youtubeId` set, `url` a `youtu.be` link), never
  a YouTube search URL (6.1 and Unit 7 still carry search links as of
  2026-10-21). When Heimler's History has two cuts of a topic, use the
  newer re-recorded one. Topics he has no single video for (3.4, 4.8) use his
  full unit review.
- Keep the container in the shell either way. `validate.js` requires the
  `content-video-clips` id; the renderer sets `hidden` on it.
- A clip card is headed by **its title**. It used to be headed "Video Clip" with
  the real title demoted to a paragraph.
- Each clip's `prompt` is the guiding question. It is what makes a clip usable as
  homework rather than filler, so never add a clip without one.
