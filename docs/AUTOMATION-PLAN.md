# The Automation Plan

How to stop authoring the same day four times.

Written 2026-08-10. This is a plan document, not a specification of shipped
behaviour. Nothing described in Phases 1 through 5 exists yet. Sections marked
**Already built** describe code that is in the repository today.

---

## Section 1, The actual problem

The daily pain is not writing announcements. It is that **one class day is
currently authored four separate times**, in four places, with nothing checking
that the four agree:

| # | Artifact | Where it is authored | Automated today? |
|---|---|---|---|
| 1 | Classroom board slide | `assets/data/announcements-schedule.js` | Partly. Targets and criteria pull from lesson data. Date, topic and homework are typed. |
| 2 | Canvas calendar event | Canvas RCE, by paste | Foundations only, by generator. Units 1 to 9 not started. |
| 3 | Canvas module item and assignment | Canvas UI, by hand | No |
| 4 | Homework, the eBook reading | Typed into the schedule file | No |

Every one of those four needs the same five facts: what date it is, which topic
that date lands on, what the targets are, which assignment is due, and which
pages to read. **The facts are the same. Only the output format differs.**

So the feeling of having to generate something every day is accurate, and it is
not a discipline problem. There is no file in the repository that says what the
year looks like. Without one, every surface has to be told the year separately,
by you, one day at a time.

### The fix, in one sentence

Write the year down once, in one file, and make all four artifacts generated
projections of it.

That is the same move the repository already made twice and both times it
worked. The 77 First & 10 readings became generated rather than hand-authored,
and the classroom board's learning targets became derived from lesson data rather
than retyped. This plan applies the same rule to the calendar.

### The architecture

```
                 school-calendar.js   (no-school days, terms, block rotation)
                 pacing.js            (topic -> how many class days)
                 ebook-map.js         (topic -> chapter and pages)
                          |
                          v
              [ scripts/build-course-calendar.js ]
                          |
                          v
              assets/data/course-calendar.js          THE SOURCE OF TRUTH
                 one entry per class day:
                 date, topic, day-of-topic, assignment name, reading, due date
                          |
        +-----------------+------------------+-------------------+
        v                 v                  v                   v
  build-announcements  build-canvas-      build-canvas-      build-ebook-
      (exists)            events            modules            assignments
        |                 |                  |                   |
        v                 v                  v                   v
   classroom board   calendar event      module blueprint    reading list
                       HTML                                   per topic
                          \                 /
                           v               v
                    [ delivery: paste, or Canvas API push ]
```

Two properties of that diagram matter more than the boxes:

1. **`course-calendar.js` is generated too.** You do not type 170 dated entries.
   You type a school calendar and a pacing map, both of which are short, and the
   dates fall out. This is what makes a snow day a one-command reflow instead of
   forty edits.
2. **Content generation is separate from delivery.** Every generator emits
   content. How that content reaches Canvas, by paste or by API, is a swappable
   last step. Get this wrong and a change in Canvas access means rewriting the
   generators; get it right and it means writing one adapter.

---

## Section 2, Phase 1, the course calendar

**Goal: never type a date again, and absorb a lost day in one command.**

### 2.1 What you supply, once

Three short input files. Together these are maybe ninety minutes of typing for
the whole year, and they are the only calendar data that exists anywhere.

**`assets/data/school-calendar.js`**

```js
window.BEHISTORICAL_SCHOOL_CALENDAR = {
  firstDay: '2026-08-06',
  lastDay:  '2027-05-28',

  // Days school is not in session, or you do not teach this section.
  noSchool: [
    { date: '2026-09-07', reason: 'Labor Day' },
    { from: '2026-11-25', to: '2026-11-27', reason: 'Thanksgiving' },
    { from: '2026-12-21', to: '2027-01-01', reason: 'Winter Break' }
  ],

  // Days school meets but this class does not: assemblies, testing, field trips.
  noClass: [
    { date: '2026-10-14', reason: 'PSAT morning' }
  ],

  // Which weekdays this section meets. A/B block goes here.
  // 'everyday'  meets each school day
  // 'ab'        alternating, plus which letter the first day is
  meetingPattern: { kind: 'ab', firstDayLetter: 'A', meetsOn: 'A' }
};
```

**`assets/data/pacing.js`**

```js
window.BEHISTORICAL_PACING = [
  { topic: 'F0', days: 2 },
  { topic: 'F1', days: 2 },
  // ...
  { topic: 'Foundations Assessment', days: 2, kind: 'assessment' },
  { topic: '1.1', days: 2 },
  { topic: '1.2', days: 2 },
  // ...
  { topic: 'Unit 1 Exam', days: 1, kind: 'assessment' },
  { topic: '2.1', days: 2 }
  // ...
];
```

Ordered list, no dates. That is the point. The order is the curriculum; the dates
are arithmetic.

**`assets/data/ebook-map.js`**, covered in Section 5.

### 2.2 What gets generated

`node scripts/build-course-calendar.js` walks the pacing list, assigns each entry
the next available class day from the school calendar, and writes
`assets/data/course-calendar.js`:

```js
window.BEHISTORICAL_CALENDAR = {
  generatedAt: '2026-08-10',
  days: [
    {
      date: '2026-08-06',
      topic: 'F0',
      dayOfTopic: 1, daysInTopic: 2,
      unit: 'Foundations',
      title: 'Intro to BeHistorical',
      canvasAssignment: 'F0 - Intro to BeHistorical',
      lessonUrl: 'https://jeffandersonlogic.github.io/ap-world-history/foundations/foundations-0-intro-to-behistorical.html',
      reading: { chapter: null, pages: null, label: 'Read Theme 1, page 18' },
      dueDate: '2026-08-10'
    }
    // ... one entry per class day, whole year
  ],
  unscheduled: []   // pacing entries that ran past the last day of school
};
```

`unscheduled` is the feature that earns this phase. If your pacing does not fit
the year, the generator says so in August rather than you discovering it in
April.

### 2.3 The reflow command, which is the real payoff

```bash
node scripts/shift-calendar.js --from 2026-10-14 --reason "Snow day"
```

Adds one non-teaching day and re-flows every subsequent entry around it. Then
`npm run build:all-surfaces` and the board, every future Canvas event, and every
due date move together.

This is the specific thing that makes people hand-edit calendars forever. One
lost day invalidates the rest of the year, so the calendar stops being trustworthy
and everyone falls back to typing today's slide each morning. Make the reflow one
command and the calendar stays true, which is what makes everything downstream
worth generating.

### 2.4 What happens to `announcements-schedule.js`

It becomes generated, not hand-typed. `build-announcements.js` keeps working
exactly as it does now, it just reads `course-calendar.js` instead of a typed
schedule.

Keep a small **overrides file** for the things a generator cannot know:

```js
window.BEHISTORICAL_OVERRIDES = {
  '2026-10-22': { note: 'Bring your Chromebook charged, we are in the library' },
  '2026-11-03': { topicTitle: 'Unit 3 Review, Stations' }
};
```

Overrides are keyed by date and merge on top of the generated day. This preserves
what the current schedule file gets right, that you can always override the
machine, without requiring you to type the 95 percent it can derive.

### 2.5 Steps

1. Write `school-calendar.js` from the district calendar PDF.
2. Write `pacing.js`. Start with a default of 2 days per topic and adjust.
3. Build `scripts/build-course-calendar.js`.
4. Build `scripts/shift-calendar.js`.
5. Repoint `build-announcements.js` at `course-calendar.js`, keep the overrides
   merge.
6. Add `--check` to both, and wire them into the offline suite, so a hand-edit to
   a generated calendar fails the push. Same rule the readings already follow.

**Result after Phase 1: the board is populated for the entire year and you never
touch it again unless reality changes.**

---

## Section 3, Phase 2, homework stops being typed

Homework today is a free-text field you fill in per day. Nearly all of it is one
of four sentences.

Add a template table:

```js
window.BEHISTORICAL_HOMEWORK_TEMPLATES = {
  // Day 1 of a two-day topic
  day1: [
    'Finish the {topic} modules for {title}.',
    'Read {reading} in Traditions and Encounters.'
  ],
  // Final day of a topic
  dayLast: [
    'Complete your {topic} responses and submit them in Canvas.',
    'Read {reading} in Traditions and Encounters.'
  ],
  assessment: ['Review the {unit} learning targets. {assessment} is {when}.']
};
```

The generator fills `{topic}`, `{title}`, `{reading}`, `{unit}` from the calendar
entry. Anything genuinely one-off goes in the overrides file from Section 2.4.

**Steps**

1. Write the template table from the homework you have already typed for
   Foundations. Those entries are the specification.
2. Teach `build-course-calendar.js` to render `homework` into each day.
3. Confirm the generated Foundations homework matches what is in the schedule
   file today, byte for byte, before deleting the typed version. Same
   already-generated-output check the reading migration used, and it is the step
   that catches template bugs.

---

## Section 4, Phase 3 and 4, Canvas

### 4.1 Already built, and worth saying plainly

`docs/canvas/CANVAS-BUILD-GUIDE.md` is a complete specification of what
administration requires and how to satisfy it. It has the naming convention, the
exact five-row table markup, the assignment settings, the submission path, and a
17-item compliance map against the ZCHS 2026 to 2027 expectations. Twelve of the
17 are met by the Foundations build, item 4 needs action at each unit rollover,
items 15 and 16 are Canvas settings to verify, and **items 10 through 14 are
open**: contact info, syllabus, course expectations, schoolwide reassessment
policy, and course-specific reassessment requirements, all of which live on the
course homepage and none of which any script can produce. Those five are a
one-time afternoon in Canvas and they are the only compliance gap that automation
does not touch.

`tools/build-canvas-events.js` already generates paste-ready five-row events for
the six Foundations days from the data files, with `--check` to fail on drift.
**The pattern is proven. It has never been extended past Foundations.**

### 4.2 Phase 3, generate Canvas content for all 71 unit topics

This is mostly a widening of the existing generator, with one real obstacle.

**The obstacle: unit data files have no `commandCopy`.** I checked all 147 files
in `assets/data/`. Zero contain it, so the OVERVIEW row has no source for Units 1
through 9. Foundations has it because Foundations was authored differently.

Three options, and the third is the one to take:

- Derive OVERVIEW from `meta.subtitle` plus the learning targets. Cheap, and it
  reads like a machine wrote it, because one did.
- Write 71 overviews by hand. Two to four sentences each, in student voice.
  Correct, and it is a solid week of work.
- **Draft all 71 from the material that does exist in each file** (`meta.title`,
  `meta.subtitle`, `learningTargets`, `collegeBoardKeyConcepts`, `lecture`), then
  review and edit them. They land in a `canvas-overviews.js` table, the same shape
  as the `OVERVIEWS` constant already inside `build-canvas-events.js`, so a
  regeneration never overwrites your prose.

I can produce the 71 drafts. Your job becomes editing, not writing, and the
review is per unit rather than all at once.

**Steps**

1. Create `assets/data/canvas-overviews.js`, drafted then reviewed unit by unit.
2. Generalize `tools/build-canvas-events.js` to read any topic, Foundations or
   unit, from `course-calendar.js`.
3. Have it emit two things, not one:
   - `docs/canvas/unit-N-calendar-events.md`, paste-ready, same as today.
   - `docs/canvas/canvas-state.json`, a neutral description of every assignment,
     event and module item that should exist. This is what makes Phase 4
     possible without rewriting anything.
4. Add `scripts/build-canvas-modules.js`, emitting the module blueprint from
   Section 6 of the build guide: module name, text headers, indented assignments,
   in order, per unit.
5. Wire `--check` into the offline suite.

### 4.3 Phase 4, delivery, three routes

**Route C, generate and paste.** What Foundations does now. No new access, no new
risk, and it still costs one paste per event. At 71 topics that is real time, but
it is time you can spend a unit at a time.

**Route A, the Canvas REST API. This is the target.** A teacher access token from
Account, Settings, New Access Token, then a script that creates and updates
objects directly:

```
GET  /api/v1/courses/:id/assignment_groups
POST /api/v1/courses/:id/assignments
POST /api/v1/calendar_events            (context_code=course_:id)
POST /api/v1/courses/:id/modules
POST /api/v1/courses/:id/modules/:id/items
```

Authorization is a bearer token header. The script reads `canvas-state.json`,
lists what exists, and creates or updates by matching on name. Run it once per
unit and the whole unit appears in Canvas built to spec.

There is a second benefit that is easy to miss. **Section 5 of the build guide
warns at length that a hand-typed assignment link renders correctly and resolves
to nothing**, because it lacks the four `data-*` attributes Canvas generates. The
API route eliminates that failure by construction: you create the assignment,
Canvas returns its real ID, and you build the link with the correct attributes
from that ID. The most dangerous manual step in the whole build stops being a
manual step.

Rules, non-negotiable:

- **The token never enters the repository.** Environment variable only. Add a
  `validate.js` check that fails the build on anything shaped like a Canvas
  token, the same way it fails on a reintroduced Google Form.
- **Sandbox course first.** Build a full unit into a sandbox and walk it on a
  Chromebook before pointing the script at the live course.
- **Dry run by default.** `--apply` to actually write. A script that can create
  71 assignments can also create 71 duplicates.
- **Never delete.** Create and update only. If something needs removing, remove
  it in the Canvas UI where you can see what you are removing.

**Route B, Common Cartridge import.** Generate an `.imscc` package, import via
Settings, Import Course Content. No token needed, so it survives a district that
blocks teacher tokens. It is good for the initial bulk build and poor for updates,
because a re-import duplicates rather than updates. Treat it as the fallback if
Route A is unavailable, not as the destination.

**Recommendation:** build Route C's generators regardless, since Route A consumes
the same output. Then test Route A against a sandbox course. If tokens are
blocked, fall back to B for the bulk build and stay on C for revisions.

---

## Section 5, Phase 5, the eBook

### 5.1 What I could not verify, and you can

I do not know from here which McGraw Hill platform your district uses, and it
changes the answer. Ask your MHE representative these four questions, in writing:

1. Is our AP World title available through the **Canvas LTI integration**, and is
   the LTI key already installed at the district, or does IT need to add it?
2. Does that integration support **deep linking**, that is, can a Canvas
   assignment or module item point at a specific chapter or reading rather than
   at the eBook's front door?
3. If not, is there a **stable per-chapter URL** that resolves for a logged-in
   student, and does it survive a new term or a new edition rollover?
4. Do students reach the book through **Clever, ClassLink, or a direct login**?
   This determines whether a link works at all for a student who is not already
   authenticated.

Question 2 is the one that matters. Everything below branches on it.

### 5.2 The map, which you need either way

`assets/data/ebook-map.js`:

```js
window.BEHISTORICAL_EBOOK = {
  title: 'Traditions and Encounters: A Global Perspective on the Past',
  edition: '7th edition, AP Edition',
  platform: 'McGraw Hill ConnectED',
  launchUrl: '',          // the front door, Tier 3 below
  deepLinkPattern: '',    // filled in only if question 2 comes back yes

  topics: {
    '1.1': { chapter: 27, title: 'The Expansive Realm of Islam', pages: '000-000' },
    '1.2': { chapter: 28, title: '...', pages: '000-000' }
    // ... one entry per topic
  }
};
```

Chapter numbers and page ranges above are placeholders. You said the book is
structured the same way as the course with some overlapping chapters, so the map
is mostly one to one and the overlaps are exactly why the map has to be explicit
rather than computed from the topic number. **A topic may list more than one
chapter, and two topics may share one.** Both cases are ordinary, and both are
why this is a table and not a formula.

Filling it in is a read-through of the table of contents against the 77 topics.
That is one sitting with the book open, and it is the highest-leverage hour in
this whole plan, because it is the input to homework, to the Canvas assignment
body, and to the reading link at the same time.

### 5.3 The link, three tiers, best available wins

| Tier | What | Works when | Breaks when |
|---|---|---|---|
| 1 | LTI deep link to the chapter | The MHE LTI is installed and supports deep linking | Never, if it works at all. Auth is handled by LTI. |
| 2 | Direct per-chapter URL | ConnectED issues stable chapter URLs | Session expiry, edition rollover, a student who is not logged in |
| 3 | One external link to the book's front door, plus chapter and pages in text | Always | Never |

**Build Tier 3 first, in every case.** It is one module item per course, it never
breaks, and it makes the whole system usable while you wait on the rep. Then add
Tier 1 or Tier 2 on top when you know which exists.

Test any Tier 2 candidate the only way that proves anything: copy the URL, open a
private window, sign in as a test student, and click it. A link that works from
your own already-authenticated browser proves nothing. This is the same failure
class as the hand-typed assignment link in Section 5 of the build guide, where
the teacher's own session is what hides the bug.

**One caution.** Link to the book, never copy it. No pasting chapter text or page
images into Canvas or into a First & 10 reading. Beyond the licensing problem, a
copy is a second source of truth that nothing in this repository can check, which
is the exact drift the Canvas guide exists to prevent.

### 5.4 Steps

1. Send the four questions to your MHE rep.
2. Fill in `ebook-map.js` from the table of contents.
3. Add the Tier 3 external link as a module item in Canvas, once.
4. Teach the homework templates in Phase 2 to render `{reading}` from the map.
5. When the rep answers, add Tier 1 or 2 to `deepLinkPattern` and regenerate.

---

## Section 6, What the daily routine becomes

**Today:** open the schedule file, type tomorrow's date, topic and homework,
rebuild, push, then separately build a Canvas event and a module item.

**After this plan:**

| When | What you do | How long |
|---|---|---|
| Once, in August | Write the school calendar, the pacing map, the eBook map | About 3 hours |
| Once per unit | Review the drafted overviews, run the generators, push the unit to Canvas | 20 to 30 minutes |
| When reality changes | `shift-calendar.js`, rebuild, push | 2 minutes |
| Daily | Nothing | Nothing |

The daily column is the whole point. The board is populated through May the day
you finish Phase 1.

### On rebuilding and pushing

The board reads a generated file, so a schedule change still needs a build and a
push. Two ways to keep that from becoming a new daily chore:

- **Preferred: do not change the schedule daily.** After Phase 1 there is nothing
  to change on a normal day.
- If you want to edit from a browser or a phone, a GitHub Action can run the
  builders on push and commit the regenerated files back. Note the constraint in
  `CLAUDE.md`: `main` is protected and requires both Validate jobs, so the Action
  must push to a working branch and you fast-forward `main` after Validate passes.
  Worth doing, but only after Phase 1 proves out.

---

## Section 7, Order of work, and why this order

1. **Phase 1, the course calendar.** Everything else reads it. Doing any other
   phase first means building it twice.
2. **Phase 5's eBook map.** Not the links, just the table. It is an input to
   Phase 2 and it depends on nothing, so it can happen in parallel with Phase 1.
3. **Phase 2, homework templates.** Small, and it removes the last hand-typed
   field from the board.
4. **Phase 3, Canvas content generation.** The largest phase, because of the 71
   overviews. Ship it a unit at a time. Unit 1 first, since it is next.
5. **Phase 4, Canvas delivery.** Only after Phase 3 produces `canvas-state.json`.
   Sandbox course before the live one.
6. **Compliance items 10 to 14.** One afternoon in Canvas, independent of all of
   the above, and required before the course publishes.

Phases 1, 2 and 5's map are the ones that kill the daily grind. Phases 3 and 4
are the ones that kill the per-unit grind. If you only ever do the first group,
the plan has already paid for itself.

---

## Section 8, What this plan does not automate

Stated so it is not assumed handled:

- **Grading.** Untouched. The Skills Lens remains the analysis surface.
- **The overview prose.** Drafted by machine, reviewed by you. There is no version
  of this where nobody reads 71 paragraphs.
- **The Chromebook end-to-end walkthrough.** Section 6 of the build guide requires
  it before a module publishes, and it stays manual on purpose. It is the check
  that catches what every generator here is blind to.
- **Canvas course settings**, compliance items 15 and 16, navigation visibility.
  Not content, not in the repo.
- **Course homepage content**, items 10 through 14.
- **Anything inside the eBook.** Links only.

---

## Related documents

- `docs/canvas/CANVAS-BUILD-GUIDE.md`, the Canvas specification and the
  compliance map
- `docs/canvas/foundations-calendar-events.md`, the generated Foundations events
- `docs/ANNOUNCEMENTS-BOARD.md`, the classroom board
- `docs/CANVAS-CAPTURE.md`, the submission and capture contract
- `CLAUDE.md`, the gate, the branch rule, and the content model
