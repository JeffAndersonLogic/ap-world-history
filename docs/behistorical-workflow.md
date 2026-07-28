# BeHistorical: How the Process Works

An instruction manual for the people who run this course. Part 1 is what to say
to students. Part 2 is what a colleague needs in order to teach a day out of it.
Part 3 is the plumbing. Part 4 is troubleshooting.

The student-facing version of this same walkthrough is a page on the site itself:
`how-it-works.html`, linked from the home page. Project it on day one instead of
explaining the platform out loud.

---

## Part 1: What BeHistorical is

A static AP World History: Modern site. Every topic, Foundations through Unit 9,
is built to the same shape, so students learn the pattern once and then spend
their attention on history instead of on navigation.

| | |
|---|---|
| Topic lessons | 71 (Units 1 through 9, all CED topics) |
| Foundations topics | 6 (Foundations 0 through 5, pre-1200 bridge unit) |
| BeInTheRoom simulations linked into lessons | 61 |
| Server required | None. It is HTML, CSS, and JS on disk |
| Student entry point | `index.html` |
| Teacher entry point | `teacher/index.html` |
| Project inventory | `docs/command-center.html` |

The core promise to students: **BeHistorical is the thinking and drafting space.**
Formative capture goes to one Google Form. Assessed work is submitted in Canvas.
The AI Coach questions and revises; it does not generate answers.

### The three-step rhythm

Every lesson page opens with the same Classroom Flow strip, and it is never
customized per lesson:

1. **Build Context.** Review the targets, examine the map, read the First & 10.
2. **Learn & Practice.** Work the module cards, then move into the lecture section.
3. **Check Understanding.** Complete the checkpoints with the self-check and
   response tools.

### The ten modules

Fixed order, every lesson page, unit and Foundations. Cards open a pop-out over
the page except where noted.

| # | Module | Behavior | What the student does |
|---|--------|----------|-----------------------|
| 01 | Map & Geography Check | Pop-out | Reads a real map of the region, answers one geography question. Click to enlarge. |
| 02 | First & 10 Reading | Pop-out, embedded reading page | Reads the topic narrative, answers **exactly three** questions, then clicks two builder buttons: one packages the answers for the Google Form, one packages them into an AI Coach prompt. |
| 03 | Content Delivery | **Jump link**, never a modal | Scrolls to the lecture section: lecture cards with bullets and images, plus video clips with a "watch for" prompt. |
| 04 | BeSurreal | Pop-out | One strange everyday-life detail plus a question. The memory hook. |
| 05 | AP Skill Builder | Pop-out, draft box | Practices one historical thinking skill after the steps are modeled. |
| 06 | Checkpoint 1 | Pop-out, response box | Writes against specific targets, with focus terms and a strong-answer checklist visible. Save Draft, Run Self-Check, Copy, submit. |
| 07 | Evidence Lab | Pop-out | Picks one piece of evidence and explains the claim it supports. Images enlarge and carry source links. |
| 08 | Primary Source (unit) / Socrates AI Coach (Foundations) | Pop-out | HIPP analysis of a short adapted source. In Foundations this slot is a set of Socratic questioning prompts instead. |
| 09 | BeInTheRoom | **Opens in a new tab** | Runs the roleplay simulation. Shows a "coming soon" placeholder when a topic has no scenario yet. |
| 10 | Checkpoint 2 | Pop-out, response box | The exit write. Coach first, then submit. |

Module count is exactly ten, no more and no fewer, and the validator enforces it.

### The BeInTheRoom sequence

Simulations are decision scenarios, not character costumes. Students: enter the
room, choose a historical perspective, choose a policy, select the evidence
behind it, build a position, take it to the AI Coach, then step out of character
for an AP reflection. Every option carries costs, supporters, and critics, so
there is no answer key. The design standard, including the theme-alignment gate
a scenario must pass before it is linked, is `docs/beintheroom-scenario-blueprint.md`.

---

## Part 2: Teaching a day out of it

### Setup, once per year

1. **Google Form.** One form serves the whole course. Confirm it is accepting
   responses and that its class-period options match your sections.
2. **MagicSchool room.** Refresh the class join code and update it in
   `assets/js/behistorical-form-config.js` and the capture wrappers. The helper
   `node scripts/normalize-student-facing-language.js` propagates the classroom
   MagicSchool URL and the Canvas guidance wording.
3. **Canvas.** Create the assignments that will actually be graded. BeHistorical
   never grades anything.
4. **Run Foundations 0.** It teaches the platform while teaching content, which
   is a better first day than a tour.

### Setup, once per lesson

- Read the topic's learning targets and success criteria. They are written as
  "I can" statements with the College Board key concept beside each, and they are
  the claims the two checkpoints ask students to prove.
- Decide which checkpoint you are collecting for a grade. Checkpoint 2 is the
  usual choice.
- Decide whether BeInTheRoom is in class, homework, or skipped this topic.

### Running the period

The module order is the lesson plan. A workable 50-minute version:

| Minutes | Modules |
|---------|---------|
| 0 to 10 | Targets, then Module 01 map |
| 10 to 22 | Module 02 First & 10, three questions answered |
| 22 to 35 | Module 03 lecture cards and video clips |
| 35 to 40 | Module 04 BeSurreal, Module 05 Skill Builder |
| 40 to 50 | Checkpoint 1, self-check, submit |

Modules 07 through 10 then carry the second meeting or the homework block.
Nothing breaks if you reorder within a step, but keep the reading before the
lecture and both checkpoints after the content they check.

### What to tell students about their writing

This is the part worth saying out loud, because it is the part that loses work:

- **Typing in a box sends nothing.** Closing a pop-out does not submit.
- **Save Draft is this device only.** It saves in that browser, filed under that
  topic. It does not follow them to a phone or another computer, and clearing
  browser data erases it.
- **Submit copies their text and opens the form.** Unit, topic, prompt, and AP
  skills are prefilled. They choose their class period and paste their response.
- **Graded work goes in Canvas.**
- **Run Self-Check is not a grade and not an AI.** It counts words and reports
  which focus terms appear. "Evidence terms found: none yet" is the single most
  useful piece of feedback on the site: it means they wrote about the topic
  without naming the evidence.

### AI Coach policy

The prompts the site builds always end with an instruction telling the coach to
ask one question at a time and not to write the student's final answer. Hold the
line on the order: **draft, build prompt, coach, revise, submit.** Coaching a
draft is honest work. Generating a draft is not, and the built prompt carries the
student's own writing into the coach precisely so the questions have something
real to push on.

---

## Part 3: The plumbing

### Anatomy of a lesson

A standard unit lesson is four files plus a reading:

```
unit-N/lesson-N-N-slug.html                     thin shell, no content
assets/data/lesson-N-N-slug.js                  all the content, all the text
assets/data/lesson-N-N-renderer-config.js       runtime amendments, images
assets/js/behistorical-topic-renderer-v1.js     shared renderer
unit-N/first-and-10-topic-N-N-slug.html         standalone reading
unit-N/first-and-10-topic-N-N-slug-capture.html iframe wrapper the lesson embeds
beintheroom/unit-N/scenario.html                optional simulation
```

Foundations uses the same idea with its own renderer,
`foundations/foundations-topic-renderer.js`, and one data file per topic.

The lesson shell holds no prose. Everything a student reads comes out of the data
file, which is why editing is a text edit and never a code change.

### First & 10 delivery

Always the same two-file pattern: a standalone reading page, plus a thin capture
wrapper that the lesson embeds in an iframe. The wrapper intercepts the "Submit
to Google Form" and "Open MagicSchool" clicks from inside the frame. A lesson's
`first10.embedUrl` must point at the **capture wrapper**, never at the standalone
page. The reading itself carries no images or videos, so media swaps never touch it.

Each reading has exactly three questions, and each question's skill tag must
match the topic's skill list in `assets/js/behistorical-form-config.js`. That
coupling is enforced: change one, change the other.

### Form capture

One Google Form, prefilled per capture point from
`assets/js/behistorical-form-config.js`:

| Field | Source |
|-------|--------|
| Unit | prefilled per lesson |
| Topic | prefilled per lesson |
| Prompt ID | prefilled per capture point |
| Response Type | prefilled per capture point |
| Skill Focus | prefilled per topic, repeated per skill |
| Class Period | the student selects |
| Student Response | the student pastes |

Submitting copies the draft to the clipboard and opens the prefilled form in a
new tab. If the clipboard is blocked, the form still opens and the on-screen
message tells the student to copy manually, so the path never dead-ends.

### Images

The rule is that no student ever sees a broken frame. Generated local artwork in
`assets/images/module-art/` exists for every module card and every lecture,
evidence, and map slot, and both renderers wire it as the `onerror` fallback. An
empty image URL is a legitimate authoring choice: the renderer then draws that
slot's local art, which is always on topic. Map slots must hold actual maps,
generally the generated ones in `assets/images/instructional-maps/`. The full
contract, including the two-layer `<img>` structure hub cards use, is in `CLAUDE.md`.

### Editing and shipping

`docs/editing-topics.md` is the cheat sheet: swapping a video, replacing an
image, fixing text, rewriting a reading. Two things to know before you touch a file:

- **Units 6 and 9 are build-generated.** Edit the build source and re-run
  `node scripts/build-unit6.js` or `node scripts/build-unit9.js`. Hand edits to
  generated files are overwritten by the next build. Foundations and all other
  units are edited directly.
- **Always validate before committing.** `node scripts/validate.js` checks every
  data file, module count, First & 10 structure, skill-tag wiring, form URL, and
  image reference. "All checks passed" means it is safe to ship.

```bash
node scripts/validate.js                    # required before every commit
node scripts/check-image-urls.js            # online: do remote images resolve
node scripts/generate-status-manifest.js    # after adding or removing deliverables
node scripts/build-instructional-maps.js    # rebuild generated maps
node scripts/build-module-art.js            # rebuild generated artwork
```

---

## Part 4: Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| "My draft is gone" | Save Draft is per browser, per device. Different computer, or cleared browsing data. | Nothing to recover. Tell students to submit rather than rely on drafts across days. |
| Submit button opens the form but the response is not pasted | Clipboard blocked by the browser or the device policy | The response is still in the draft box. Copy it manually; the on-screen message says so. |
| A picture looks like plain labeled artwork | The remote image failed and the local fallback drew instead | Working as designed. If it is the wrong picture rather than a fallback, run `node scripts/check-image-urls.js`. |
| A module card does nothing | Module 03 scrolls instead of opening, Module 09 opens a new tab that a popup blocker may have caught | Allow popups for the site, or open the simulation from `beintheroom/index.html`. |
| Module 09 says "coming soon" | That topic has no scenario linked yet | Expected. Check `docs/command-center.html` for the current inventory. |
| An edit to a Unit 6 or Unit 9 topic disappeared | Those units are build-generated | Edit the build source, then re-run the unit's build script. |
| `check-image-urls.js` reports nothing verified | The network blocks Wikimedia | Run it from a network that allows `commons.wikimedia.org`. |

---

## Quick links

- Student walkthrough page: `how-it-works.html`
- Editing cheat sheet: `docs/editing-topics.md`
- Simulation design standard: `docs/beintheroom-scenario-blueprint.md`
- Lesson template scope: `docs/behistorical-topic-template-v1-scope.md`
- Authoring rules and the ten-module contract: `CLAUDE.md`
- Project inventory: `docs/command-center.html`
