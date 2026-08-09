# Canvas Build Guide

How BeHistorical content is represented in Canvas. Written to be followed step by
step with Canvas open in the next tab.

---

## Section 1, Purpose and scope

BeHistorical runs a locked three-layer architecture:

```
BeHistorical   the interactive lesson engine, where the work is done
MagicSchool    AI coaching, a small fixed number of touchpoints
Canvas         the graded submission home base
```

**Canvas is the graded submission layer. It never duplicates the lesson engine.**
A Canvas calendar event tells a student what today is about, what they should be
able to do by the end of it, where the lesson lives, and which assignment to
submit. It does not carry the lesson content itself. If a student can read the
whole lesson inside Canvas, the event has been built wrong.

Final student work is never submitted on BeHistorical. BeHistorical autosaves
drafts in the browser; Canvas is the only place a grade comes from.

Canvas lives outside this repository, so Canvas content has no version control of
its own. That is the gap this guide closes. **The repo is the source of truth for
what gets pasted into Canvas**, so a calendar event and its lesson page cannot
drift apart without someone noticing.

**Foundations is the reference implementation.** Units 1 through 9 reuse this
pattern exactly. Section 11 is the short procedure for doing that.

This guide covers documentation only. It does not change any lesson, data,
renderer, or config file.

---

## Section 2, Naming conventions

| Object | Format | Example |
|---|---|---|
| Calendar event title | `APW - FN - [Topic Title]` | `APW - F1 - Geography Shapes Civilization` |
| Module | `APW Foundations - How World History Works` | one module per unit |
| Text header inside module | `Foundations N - [Topic Title]` | `Foundations 1 - Geography Shapes Civilization` |
| Assignment (Canvas **and** PowerSchool) | `FN - [Short Title]` | `F1 - Geo Shapes Civilization` |
| Page | `APW Foundations - [Purpose]` | `APW Foundations - Learning Targets` |

Rules, all of which matter:

- **Assignment names must be identical in Canvas and PowerSchool, character for
  character.** This is an administration requirement, not a preference. Type it
  once, copy it, paste it into the other system. Do not retype it.
- **Assignment names use ASCII only.** Plain hyphen, no em dash, no ampersand, no
  curly quotes. PowerSchool caps name length, and some sync configurations fail
  on non-ASCII punctuation. The failure is quiet: the assignment exists in both
  systems and simply does not sync.
- **Long titles belong in the calendar event and the assignment body**, which
  have no length limit. The assignment *name* is an identifier, not a
  description.
- **Calendar event titles do not sync to PowerSchool** and may be as long as they
  need to be.
- **Activities are labeled by content, never by date.** `F3 - States and Power`,
  never `Tuesday's Work` or `Day 3 Assignment`. A student looking at a grade in
  April has to be able to tell what it was.

### The ampersand rule

Three data file titles carry an `&`:

| Data file `title` | Canvas object name |
|---|---|
| `Belief Systems & Cultural Exchange` | `Belief Systems and Cultural Exchange` |
| `States, Power & Social Organization` | `States, Power and Social Organization` |
| `Trade Networks & Innovation` | `Trade Networks and Innovation` |

Spell the ampersand out in every Canvas object name, including calendar event
titles and text headers, so one convention covers every object rather than one
convention for the objects PowerSchool sees and another for the ones it does not.

F5's data file title is `The World at c.1200 / Thinking Like a Historian`. The
Canvas name drops the second half: `The World at c.1200`. A forward slash in a
Canvas object name reads as a path separator in several export formats.

---

## Section 3, Calendar event table specification

Every calendar event body is one table with exactly five rows, in this order:

1. `OVERVIEW`
2. `LEARNING TARGETS`
3. `SUCCESS CRITERIA`
4. `BeHistorical Link`
5. `ASSIGNMENT`

No extra rows. No reordering. A student learns the shape once and then reads
every event in the year the same way.

### The canonical markup

```html
<table style="border-collapse: collapse; width: 100%; border-color: #000000; border-style: solid;" border="3" cellpadding="8">
    <tbody>
        <tr>
            <td style="width: 20%; vertical-align: top; background-color: #f0f0f0;">
                <h3>ROW LABEL</h3>
            </td>
            <td style="vertical-align: top;">
                CONTENT
            </td>
        </tr>
    </tbody>
</table>
```

### Constraints

**Label cells** (the left column) carry all four of these:

- `width: 20%`
- `vertical-align: top`
- `background-color: #f0f0f0`
- the label wrapped in `<h3>`

**The table element** carries all six of these:

- `border="3"`
- `cellpadding="8"`
- `border-color: #000000`
- `border-style: solid`
- `border-collapse: collapse`
- `width: 100%`

**Canvas strips `<style>` blocks and most `class` attributes.** All styling must
be inline, on the element. Do not refactor this into a stylesheet, do not add a
class and style it elsewhere. It will look correct in your editor and arrive at
the student as an unstyled table.

The one class that survives is `inline_disabled` on the BeHistorical link. That
is Canvas's own class and Canvas puts it there. Leave it.

### Always paste through the HTML editor

**Use the RCE HTML editor, the `</>` icon. Never the visual editor.**

Pasting rendered HTML into the visual editor injects wrapper `<div>`s and inline
font declarations that collapse the table. The result usually looks acceptable on
a desktop monitor and falls apart on a Chromebook, which is the only screen that
matters here.

The full sequence:

1. Canvas Calendar, click the day, **Edit**, then **More Options**.
2. Set the event title exactly as specified.
3. Click the **`</>`** icon to switch the Rich Content Editor into HTML mode.
4. Paste the whole `<table>` block.
5. Switch back to the visual editor **only** to insert the assignment link, per
   Section 5.
6. Save.

---

## Section 4, Where each row's content comes from

This is the anti-drift rule, and it is the reason this guide exists.

| Row | Source of truth |
|---|---|
| OVERVIEW | The lesson data file's `commandCopy` field, rewritten into student-facing voice. `commandCopy` is written to the teacher and must not be pasted raw. |
| LEARNING TARGETS | The data file's `learningTargets` array, **verbatim, no edits** |
| SUCCESS CRITERIA | The data file's `successCriteria` array, **verbatim, no edits** |
| BeHistorical Link | `https://jeffandersonlogic.github.io/ap-world-history/foundations/[shell-filename].html` |
| ASSIGNMENT | Inserted through the Canvas RCE course-links panel, see Section 5 |

For Foundations the data files are:

| Day | Data file | Lesson page |
|---|---|---|
| F0 | `foundations/foundations-0-intro-to-behistorical-data.js` | `foundations-0-intro-to-behistorical.html` |
| F1 | `foundations/foundations-1-geography-data.js` | `foundations-1-geography.html` |
| F2 | `foundations/foundations-2-belief-systems-data.js` | `foundations-2-belief-systems.html` |
| F3 | `foundations/foundations-3-states-power-data.js` | `foundations-3-states-power.html` |
| F4 | `foundations/foundations-4-trade-networks-data.js` | `foundations-4-trade-networks.html` |
| F5 | `foundations/foundations-5-world-at-1200-data.js` | `foundations-5-world-at-1200.html` |

### The rule

**If a Learning Target changes in the data file, the Canvas event is stale and
must be regenerated. Never edit targets in Canvas directly.**

A target edited in Canvas and not in the data file produces the worst version of
this failure: the lesson page and the calendar event both look right on their
own, they disagree with each other, and nothing reports it. A student who reads
the event and then works the lesson is being graded against a target they were
never shown.

`docs/canvas/foundations-calendar-events.md` holds the six paste-ready events.
It is **generated**, not hand-maintained:

```bash
node tools/build-canvas-events.js          # rewrite from the data files
node tools/build-canvas-events.js --check  # fail on drift, write nothing
```

Do not hand-edit that file. Change a target in the data file, rerun the
generator, repaste the affected event.

### Why OVERVIEW is the exception

`commandCopy` is instructional-design prose addressed to the teacher. It says
things like "the intellectual core of Day 3 is this claim" and "students who can
compare these four solutions can analyze any state they meet". Pasted at a
student it reads as though they are being talked about rather than to.

OVERVIEW is therefore hand-written from `commandCopy`, two to four sentences, in
second person. That prose lives in the `OVERVIEWS` table inside
`tools/build-canvas-events.js` so a regeneration never overwrites it. Edit it
there.

---

## Section 5, Inserting the ASSIGNMENT link, do not hand-type

### Procedure

1. Paste the table with `[INSERT ASSIGNMENT LINK]` as the ASSIGNMENT cell content.
2. Switch back to the visual RCE.
3. Delete the placeholder text.
4. Open the right-hand course-links panel, choose **Assignments**, click the
   assignment.

### Why

Canvas auto-generates four attributes tied to the assignment's internal ID:

- `data-course-type`
- `data-published`
- `data-api-endpoint`
- `data-api-returntype`

Those attributes are how Canvas knows the link points at a live object in this
course. They carry the published state, they let the link survive a course copy
into next year's shell, and they are what makes the link resolve for a student
whose enrollment differs from yours.

**A hand-typed link renders as a working link and resolves to nothing.** It is
blue, it is underlined, it is clickable, and it fails. This is the single most
common way one of these events ships broken, because the failure is invisible
from the teacher's own account, where the raw URL happens to work.

Verified example of a correct Canvas-generated link:

```html
<a title="F1  - Geo Shapes Civilization" href="https://zcs.instructure.com/courses/42956/assignments/974029" data-course-type="assignments" data-published="true" data-api-endpoint="https://zcs.instructure.com/api/v1/courses/42956/assignments/974029" data-api-returntype="Assignment">F1 - Geo Shapes Civilization</a>
```

The double space in the `title` attribute is Canvas's own output. Leave it alone;
it is not visible to students and editing the markup by hand is how the four data
attributes get lost.

**The assignment must exist before you build the event.** The course-links panel
can only find an assignment that has already been created. Section 11 puts
assignment creation before event construction for exactly this reason.

---

## Section 6, Module structure

One module per unit, with text headers separating the days.

```
Module: APW Foundations - How World History Works
[Page]        APW Foundations - Unit Overview and Learning Targets
[Page]        APW Foundations - How BeHistorical Works
[External]    BeHistorical: Foundations Hub
--- Text Header: Foundations 0 - Intro to BeHistorical ---
[Assignment]  F0 - Intro to BeHistorical
--- Text Header: Foundations 1 - Geography Shapes Civilization ---
[Assignment]  F1 - Geo Shapes Civilization
--- Text Header: Foundations 2 - Belief Systems and Cultural Exchange ---
[Assignment]  F2 - Belief Systems
--- Text Header: Foundations 3 - States, Power and Social Organization ---
[Assignment]  F3 - States and Power
--- Text Header: Foundations 4 - Trade Networks and Innovation ---
[Assignment]  F4 - Trade Networks
--- Text Header: Foundations 5 - The World at c.1200 ---
[Assignment]  F5 - World at c.1200 SAQ
```

Notes:

- **Assignments are indented one level under their text headers.** Use the indent
  control in the module item's edit menu. Without the indent the text headers
  read as list items rather than as section breaks.
- **The most recent unit sits at the top of the module list.** When Unit 1
  publishes, Foundations moves down. A student opening Modules should land on
  current work without scrolling.
- **The module stays unpublished until the Chromebook end-to-end walkthrough
  passes.** Open the BeHistorical link on a student Chromebook, work a lesson,
  gather the work, paste it into the assignment, and submit as a Test Student.
  Publishing a module whose external link is wrong is the failure that reaches
  every student at once.
- The `[External]` Foundations Hub item points at
  `https://jeffandersonlogic.github.io/ap-world-history/foundations/index.html`.
- Never link `teacher/skills-lens.html` from a Canvas module or any student-facing
  surface. It is a teacher tool.

---

## Section 7, Assignment settings

| Setting | Value |
|---|---|
| Submission type | Online, then **Text Entry** |
| Attempts | Unlimited |
| Assignment group | `Foundations` |
| Points | F0: 10 · F1 to F4: 20 each · F5: 30 |
| Display grade as | Points |
| Peer review | Off |
| Anonymous grading | Off |

**Text Entry is a deliberate choice, not a default.** Students submit by pasting
the output of BeHistorical's **Gather All My Work**, then **Copy to Clipboard**
panel. Text Entry is Chromebook-native with nothing to download, nothing to
upload, and no file format to go wrong.

It is also what the analysis pipeline reads. `teacher/skills-lens.html` and
`scripts/parse-canvas-submissions.js` both parse the HTML body of a Text Entry
submission. A file upload submission cannot be parsed by either and will not
appear in any analysis. See `docs/CANVAS-CAPTURE.md`.

**Anonymous grading must stay off.** It suppresses the student name the parser
uses to build its crosswalk, and the result is a run of unattributable rows in
`exceptions.csv`.

**Attempts unlimited** matters because the pipeline flags edited work rather than
blocking it. A student who resubmits is recorded as having resubmitted.

---

## Section 8, The student submission path

This is the single most failure-prone step in the whole system. Put it in the
assignment body, not only in the calendar event.

1. **Work the lesson in BeHistorical.** Drafts autosave, but **only in that
   browser on that device**. Autosave is not a submission. It does not follow a
   student to another Chromebook, it does not survive a cleared browser, and it
   is not visible to the teacher.
2. **Scroll to the Save Your Work panel**, below the module cards.
3. **Click Gather All My Work**, then **Copy to Clipboard**.
4. **Open the Canvas assignment**, paste into the text box, and submit.

Step 1 is where students lose work. Say the autosave sentence out loud on Day 0
and put it in every assignment body: *typing saves on this computer only, and
saving is not submitting.*

### What Gather All My Work produces

The panel assembles every draft box on the page into one document: the Map
response, the three First & 10 check questions, the First & 10 reading response,
BeSurreal, AP Skill Builder, Checkpoint 1, Evidence Lab, Socrates AI Coach, and
Checkpoint 2. Each answer carries its prompt and its confidence rating, plus a
record footer the parser reads.

The First & 10 answers are worth a note, because they are the fragile ones. The
reading renders in an iframe, so its three answers cannot be read off the lesson
page directly. The reading writes them to `behistorical-first10-<TOPIC_KEY>` and
the renderer pulls them back in at gather time. If a student never opened the
First & 10, those three slots come through empty and the record footer says so.

**Do not change the gather panel or its record footer without reading
`docs/CANVAS-CAPTURE.md` first.** Both renderers emit the footer and one parser
reads it; a change to any one of the three breaks the other two.

### There is no Submit to Form button

**The Google Form is retired.** It was removed on 2026-08-07 along with every
Submit to Form button and `behistorical-form-config.js`. `validate.js` fails the
build if any of it reappears; see `docs/FORM-CONTRACT.md`.

Canvas is now the only capture channel. Do not write Canvas instructions that
reference a Form, a second submission, or a teacher copy sent separately, and do
not tell students their work reaches the teacher any way other than the Canvas
submission. If they do not paste and submit, the teacher has nothing.

MagicSchool is unaffected by that removal. It was never a capture channel.

---

## Section 9, ZCHS compliance mapping

Administration's published Canvas setup expectations for 2026 to 2027, mapped to
how the Foundations build satisfies each one.

| # | Requirement | How Foundations satisfies it | Status |
|---|---|---|---|
| 1 | Event title begins with course name, then topic | `APW - FN - [Topic Title]`, course prefix first, topic second, six events built to Section 2 | Met |
| 2 | Agenda includes a link to daily learning materials | The `BeHistorical Link` row, row 4 of every event, pointing at that day's lesson page on GitHub Pages | Met |
| 3 | Modules organized by unit | One module per unit, `APW Foundations - How World History Works`, days separated by text headers rather than split into six modules | Met |
| 4 | Most recent unit at top | Foundations sits at the top now and moves down when Unit 1 publishes, see Section 6 | Met, requires action at each unit rollover |
| 5 | Learning material including learning targets and success criteria | Rows 2 and 3 of every event, lifted verbatim from `learningTargets` and `successCriteria`, plus the `APW Foundations - Unit Overview and Learning Targets` page in the module | Met |
| 6 | Activities labeled by content, not date | `F3 - States and Power`, never `Tuesday's Work`. Enforced by the Section 2 naming table | Met |
| 7 | All graded activities present in Canvas even when submission occurs outside Canvas | All six Foundations assignments exist in Canvas, and submission is *in* Canvas by Text Entry. The lesson engine is where work is done, not where it is submitted | Met |
| 8 | Canvas assignment names match PowerSchool | ASCII-only `FN - [Short Title]` names, copied not retyped between the two systems, per Section 2 | Met, verify per assignment at creation |
| 9 | Notes as needed | The OVERVIEW row carries the day's framing; the assignment body carries the submission path from Section 8 | Met |
| 10 | Homepage or pinned module carries contact information | Course homepage | **Open** |
| 11 | Homepage or pinned module carries syllabus | Course homepage | **Open** |
| 12 | Homepage or pinned module carries course expectations | Course homepage | **Open** |
| 13 | Homepage or pinned module carries schoolwide reassessment policy | Course homepage | **Open** |
| 14 | Homepage or pinned module carries course-specific reassessment requirements | Course homepage | **Open** |
| 15 | Navigation shows Modules and Grades | Course Settings, Navigation tab | Verify before publish |
| 16 | Navigation hides Files and any unused menu item | Course Settings, Navigation tab. Hide Files, and hide every item not in use, Quizzes, Discussions, Collaborations, Pages if unused | Verify before publish |
| 17 | Cloud-based assignments recommended | Text Entry submissions, nothing to download, nothing to upload, Chromebook-native, per Section 7 | Met |

**Items 10 through 14 are not satisfied by anything in this repository.** They are
course-homepage content that has to be built in Canvas directly, and this build
does not cover them. They are listed here so the gap is recorded rather than
assumed handled. Build them before the course publishes.

**Items 15 and 16 are Canvas course settings**, not content, and cannot be
verified from the repo. Check them in Settings, Navigation, as part of the same
pre-publish pass as the Chromebook walkthrough in Section 6.

---

## Section 10, Known issues that affect Canvas content

Each of these constrains what may be published to Canvas. All three were
re-verified against the repository on 2026-08-09, and two of the three have
changed since they were first written down.

### 1. Video reuse in Foundations data files, mostly corrected

**Current state.** The reuse this was originally raised about is gone. `QO7NHZJ-eE4`
no longer appears in any Foundations data file. `Yocja_N5s1I` now appears exactly
once, in F1, correctly titled *Crash Course World History: The Agricultural
Revolution*. There are no longer any videos carrying a title that does not match
their content.

**What remains.** One video ID is still used twice:

| ID | Files | Title in both |
|---|---|---|
| `O9P1TaBnhg8` | F2, F5 | `Developments in DAR-AL-ISLAM [AP World Review, Unit 1 Topic 2]` |

This is a genuine reuse of the same clip on two days, under the same correct
title, which is a defensible teaching choice rather than a mislabeling bug. It is
noted so that a future audit does not read it as a fresh regression.

**Consequence, which stands regardless.** **Do not publish direct YouTube links
in Canvas calendar events.** Point students at the lesson's in-page Video Clips
section, so the lesson page remains the single source of truth for which clip
belongs to which day. A YouTube URL pasted into Canvas is a second copy that
nothing in this repository can check, and when a clip is swapped in the data file
the Canvas copy silently keeps pointing at the old one. This is the same drift
failure Section 4 exists to prevent, in a different costume.

### 2. Foundations capture is checkpoint-only, resolved

**This is no longer true and the constraint is lifted.** `draft()` in
`foundations/foundations-topic-renderer.js` now takes `(id, prompt)` with no
`captureKey` parameter at all. There is no Submit to Form button on any draft
box, on any module, on any day, because the Google Form was retired in full on
2026-08-07.

Every draft box on a Foundations page now behaves identically: autosave, a
confidence rating, and inclusion in Gather All My Work. All ten module slots
export, listed explicitly in `FOUNDATION_WORK_ITEMS` in the renderer: Map, the
three First & 10 questions, First & 10, BeSurreal, AP Skill Builder, Checkpoint 1,
Evidence Lab, Socrates AI Coach, and Checkpoint 2.

**Consequence.** Canvas instructions may safely promise that everything a student
types on the page reaches the Canvas submission, because it does. The old warning
against promising capture points that do not exist no longer applies. What
Canvas instructions must still not promise is that anything is captured *without*
the student pasting and submitting, per Section 8.

### 3. Foundations has no BeInTheRoom, confirmed, and one decision is open

**Confirmed unchanged.** None of the six data files defines a `beInTheRoom`
object, so `renderBeInTheRoomPlaceholder()` renders on all six days and Module 09
reads "This immersive experience is coming soon." Confirmed in the renderer's
module table, which falls through to the placeholder whenever
`beInTheRoom.url` is absent.

**Also confirmed.** The in-page Socrates AI Coach module, Module 08, is a static
prompt list plus a draft box. `renderCoach()` prints `aiCoach.prompts` and calls
`draft()`. It contains no MagicSchool button and makes no MagicSchool handoff.

**So the MagicSchool layer is only partially present during Foundations.** The one
MagicSchool touchpoint that does exist on each of the six days is inside the
First & 10 reading, whose capture wrapper intercepts the Open MagicSchool click.
That is one touchpoint per day, against the three the architecture specifies.

**Consequence for Canvas.** Do not write Canvas instructions that send students to
MagicSchool from Module 08 or Module 09 during Foundations. The only working
MagicSchool handoff in Foundations is inside the First & 10 reading.

**Unresolved decision, the teacher's call, not an implementation detail.** Where
should MagicSchool enter during Foundations?

- **Option A, F5's final checkpoint only.** One high-stakes coached revision at
  the end of the week, on the SAQ paragraph. Keeps Foundations focused on the
  BeHistorical rhythm and introduces the AI layer once students have something
  worth coaching.
- **Option B, every day's Checkpoint 2.** Six coached revisions, one per day.
  Establishes the three-layer habit from Day 0, at the cost of adding a tool to
  a week that is already introducing a new platform.

This is a pedagogical sequencing choice about when to introduce a third tool, and
it should be decided before Foundations publishes, because the Canvas assignment
bodies have to describe whichever path is chosen. Record the decision here when
it is made.

---

## Section 11, Procedure for future units

For each topic in Units 1 through 9:

1. **Open the topic's renderer-config file.** That is the runtime-authoritative
   file, the one the lesson page actually reads. Unit lessons are a thin HTML
   shell plus a topic data file plus a renderer-config file plus
   `assets/js/behistorical-topic-renderer-v1.js`. If the config and the data file
   disagree, the config is what students see.
2. **Copy `learningTargets` and `successCriteria` verbatim.** No edits, no
   trimming, no renumbering, no fixing a typo in passing. If a target genuinely
   needs changing, change it in the source file and rebuild, so the lesson page
   and Canvas move together.
3. **Rewrite `commandCopy` into student voice for OVERVIEW.** Two to four
   sentences, second person. `commandCopy` is written to the teacher and must not
   be pasted raw.
4. **Create the Canvas assignment first.** Settings per Section 7, name per
   Section 2, ASCII only, matching PowerSchool character for character. This has
   to come before the event, because the course-links panel can only insert an
   assignment that already exists.
5. **Build the five-row table.** Section 3 markup exactly, rows in the Section 3
   order, `[INSERT ASSIGNMENT LINK]` in the ASSIGNMENT cell.
6. **Paste it through the `</>` HTML editor**, never the visual editor.
7. **Insert the assignment link through the course-links panel.** Switch to the
   visual editor, delete the placeholder, insert from the panel. Never hand-type
   the URL, per Section 5.
8. **Add the module text header and the indented assignment**, per Section 6.
9. **Walk it end to end on a Chromebook** before publishing the module.

Extending `tools/build-canvas-events.js` to cover a unit is the better move once
a unit's topics are stable. It reads the data files directly, so a Learning Target
edit becomes a rerun rather than a re-transcription, and `--check` will fail
loudly when the repository and the pasted Canvas content have diverged.

---

## Related documents

- `docs/canvas/foundations-calendar-events.md`, the six paste-ready events, generated
- `tools/build-canvas-events.js`, the generator
- `docs/CANVAS-CAPTURE.md`, the capture contract, read before touching the gather panel
- `docs/CANVAS-CHECK.md`, verifying a real Canvas round trip character by character
- `docs/FORM-CONTRACT.md`, why the Google Form is retired
