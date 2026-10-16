# Socrates, the AI Coach

Moved word for word from `CLAUDE.md` on 2026-10-16 so the rulebook every session loads stays short (Jeff's decision, recorded in AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`). It is as binding as it was there: read it before changing anything it covers. A comment elsewhere that says "see <section> in CLAUDE.md" means this file; `CLAUDE.md` lists where each section went.


**Socrates is one MagicSchool chatbot serving all 77 topics.** Every lesson's
`meta.feedbackToolUrl` and all 77 capture wrappers point at join code `czwb9Q`, so
the plumbing has always been course-wide. What was scoped to Unit 1 was his
*instructions*, which is why a Unit 7 student used to get told their topic was
outside the coach's scope.

The content is split three ways by how often it changes, and the split is the
whole design. Read `docs/socrates/README.md` before touching any of it.

- **The persona** is hand-authored in `scripts/lib/socrates-persona.js` and
  carries no unit names, no date ranges, and no unit numbers. With one bot serving
  77 topics, a content word in the persona is content the other 76 get coached
  with. `scripts/test/socrates-contract.test.js` fails the push if one reappears.
- **The paste** carries the one assignment in front of the student and is what
  makes one bot work for nine units: retrieval cannot miss a fact that is already
  in the message. There is exactly one implementation,
  `assets/js/behistorical-coach-prompt.js`, reached three ways: the checkpoint
  bridge in both renderers, via a copy inlined by `build-coach-prompt.js`;
  `scripts/lib/socrates-course.js`, for the docs and the eval; and the contract
  test. The 77 readings were the fourth until their builder was removed. Medians are about 520 words for a checkpoint and 555 for a reading.
  `docs/socrates/socrates-paste-contract.md` is generated from that same builder,
  so the doc cannot describe something the code does not produce.
  **Do not add a second prompt builder.** There were 64 of them, one per reading,
  and ten were malformed badly enough to kill their page's entire script block.
- **The spine** is the generated attachment, for questions off the module path.

**Two assignments reach him as of 2026-08-31, and only two:** Checkpoint 2 and
BeInTheRoom. Checkpoint 1 became the unaided diagnostic described below, and the
First & 10's coach builder was removed, because coaching the lowest-stakes
writing in the lesson cost a vendor round trip and bought little. That is four
surfaces down to two, and three copy-paste trips per lesson down to one.

**The persona has to be pasted into MagicSchool before the site changes ship.**
It lives in a vendor UI no test here can read. A bot still expecting readings
that no longer send is the smaller failure; a bot that has never heard of the
only surface left is the larger one. Both renderers carry the checkpoint bridge, all
77 readings carry their own, and 38 of the 64 BeInTheRoom scenarios build their own
payload. The unit renderer's inline First & 10 bridge is dead code, because all 71
topics use the iframe path. If a fifth surface ever grows a coach button, add it to
the persona's list, or the coach will meet work it was told does not exist.

**Never paste unit content into the instructions field, and never hand-build a
knowledge pack.** Both make a second copy of content whose first copy is the
lesson data, with nothing able to tell you when the two disagree. That is the same
failure that lost the First & 10 capture block twice, and here it would be worse:
the coach would keep teaching last term's checkpoint with every structural check
green.

**BeInTheRoom's AP reflection reaches Canvas.** It used to be true, and the
persona used to say, that BeInTheRoom work never reached Canvas: module 09 had
no textarea and no capture wiring at all. It now works the same way First & 10
does. Every scenario page, v2, the unit-6/unit-9 generated template, and every
hand-authored v1 scenario, writes its "step out of character" reflection to
`behistorical-beintheroom-<TOPIC_KEY>` through the one shared bridge,
`assets/js/behistorical-beintheroom-capture.js`. `injectBeInTheRoomAnswer()` in
both renderers pulls that back in under the `beintheroom-response` work item, the
same way `injectFirst10Answers()` pulls in the reading's answers, so it appears
in Gather All My Work and the Canvas paste like every other module. Only the
final reflection is captured, never the role, evidence, decisions, or draft
argument along the way; those stay local to the scenario page, which is why the
persona still tells a simulation student the roleplay itself is not collected.
`scripts/wire-beintheroom-work-capture.js` is the one-time sweep that wired the
26 reachable hand-authored scenarios; three older scenario files
(`abbasid-fragmentation.html`, `cahokia-council.html`, `khmer-court.html`) sit
unlinked from any lesson data file and were left alone, the same as the v2
"linked from its lesson data/config" check already treats an unlinked scenario.

**`behistorical-beintheroom-<TOPIC_KEY>` is the store, not a copy of one, and
treating it as a copy cost students their work.** Until 2026-09-11 the sweep
wrote the wiring logic into each scenario rather than a call to it, so there
were 23 copies, and every copy synced the reflection box to storage at page
load. A v1 scenario saves its own draft only when a student clicks Save Draft,
which nothing requires them to do, so on a second visit the box was empty and
that load-time sync erased a real answer. The student came back to an empty box
and a Gather All My Work panel carrying every other module and no BeInTheRoom.
**Every structural check was green through all of it**: the snippet was present
and byte-identical in all 23 files, and nothing offline can see a page clear a
storage key on load. A teacher found it on Topic 1.6, which was never a 1.6
problem, it was 23 topics across Units 1, 2, 8 and 9.

So two rules, both in `wire()` in the bridge and nowhere else. **A page load
restores from this key rather than writing to it**, which is also why a
reopened scenario now shows the student their own reflection back. And **only a
real edit can empty it**: an empty box at load is a page nobody has filled in
yet, never an instruction to erase what is stored. The payload carries an
optional `parts` array so a scenario with three reflection boxes comes back box
for box; both renderers read `a` and nothing else, so a payload written before
`parts` existed stays readable.

**v2 and the unit-6/unit-9 generated scenarios never had this**, because both
restore their reflection from their own saved state at load and neither writes
at load. They are excluded from the checks below for that reason, not
overlooked.

**Two checks, because the failure was silent in both directions.**
`validate.js` proves offline that every linked hand-authored scenario calls
`BHBeInTheRoomCapture.wire()` and carries none of the old snippet, which is
what catches a hand-revert or a new scenario wired by copy and paste.
`scripts/test/beintheroom-capture.test.js` proves in Chromium what only a
browser knows: that a typed reflection survives the reopen, comes back in the
box, and is still there in Gather All My Work on the lesson page.

## The reasoning skill in the Checkpoint 2 paste

The persona's diagnostic list has always ended on "if the prompt calls for
causation, comparison, or continuity and change, does the draft actually do that
reasoning?", and Socrates was never told which skill applied. He had to infer one
from the prompt's wording. The paste now carries a `Reasoning skill:` line.

**Which skill that is turned out to be two questions, not one.**
`skillBuilder.label` answers "what does module 05 teach". The paste needs "what
does module 10 assess". On about a sixth of the course those are different
skills, and deriving the paste from the label alone named the wrong one on every
one of them. Topic 7.3 is the case: its AP Skill Builder is "HIPP a Propaganda
Poster", genuinely sourcing, and its Checkpoint 2 asks how military technology
caused casualties.

So **a checkpoint may declare its own `skill`, and inherits the Skill Builder's
label when it does not.** That is not the duplication this repo forbids: two
modules practising two skills are two different facts, each stated once. Twelve
checkpoints declare one today. An explicit empty string means "this checkpoint
has no clean AP reasoning skill" and sends no line, which is honest rather than
forcing a label onto a descriptive prompt. No checkpoint uses it today: Topic 4.2,
which this sentence used to name, declares Causation since its 2026-10-12 build.

**Do not fix a mismatch by editing `skillBuilder.label`.** That label describes
the Skill Builder module, and on every topic checked it was accurate. Retagging
it to match the checkpoint would corrupt a correct label to patch a paste.

**A compound label sends every skill it names.** Many are compound: "Comparison
and causation practice", "Evidence, causation, and qualification". Collapsing
those to a single primary picked by position told Socrates to coach comparison on
five Unit 6 checkpoints that do causation and argumentation. `normalizeSkills`
also reads "qualification" as argumentation language, because qualifying a claim
is the move.

**One normalizer, in `assets/js/behistorical-coach-prompt.js`.** It used to live
in `scripts/build-skills-map.js`; it moved because two surfaces now need the same
answer to "which AP skill is this", and the paste's copy is the one nothing would
notice was wrong. `build-skills-map.js` requires it from there and keeps only its
own "nothing matched" reporting.

**`node scripts/report-skill-alignment.js` is what finds the next divergence.**
It reads each checkpoint's declared skill, falls back to the label, and flags a
prompt containing none of that skill's language. It found the original 37 and is
down to 1, which is Foundations 2: "why should historians treat the six belief
systems as institutions" is argumentation asked as a question, and the pattern
that would catch it would flag half the course. **Leave it flagged.** A report
tuned until it goes quiet is a report that has stopped saying anything, which is
the same defect as a nightly that is red for a reason nobody can fix.

**Deliberately not in any suite, and it exits 0 always**, the same as
`report-absolutes.js` and `report-checkpoint-congruence.js`. Whether a checkpoint
is really doing causation is a judgement about teaching. Three outcomes for a
hit, in the script's header: KEEP, RETAG the checkpoint, or REWORD the prompt.

**The finding underneath this is a lesson-design one, and it is not fixed.** On
those topics the AP Skill Builder teaches one skill and Checkpoint 2 assesses
another, inside a single 90-minute block. Declaring the checkpoint's own skill
makes the coaching correct and records the divergence; it does not close it.

## Checkpoint 1 is independent

**Checkpoint 1 has no Socrates, as of 2026-08-31, and that is the point.** It is
the lesson's formative diagnostic: can the student show the learning target at
this stage without help. Coaching it before it is captured measures the coaching.

Both renderers render `independentCheckpointNote()` in place of the bridge, and
the note says so in words. A button that simply vanishes reads as something
broken to a student who had one there all last year, which is why the card
explains itself and points at Checkpoint 2.

**The feedback that used to happen here moves to the teacher, in the room, in
the same block.** That is a commitment rather than something that happens by
itself: on an alternating block nothing carries over, so a wrong Checkpoint 1
left uncorrected stays wrong through Evidence Lab and into Checkpoint 2.

**Do not oversell this as assessment validity.** Socrates lives on a separate
site with no enforcement, and every student has another AI on their phone.
Removing the button removes *this* coach from the diagnostic, not AI. What it
reliably buys is a shorter lesson and a cleaner rhythm.

**Two checks, because the failure is invisible.** A regrown bridge would look
exactly like last year's card, and nothing offline can see which conversation a
student had. `validate.js` asserts the source shape in both renderers, and
`scripts/test/coach-prompt.test.js` asserts what a browser actually renders: no
bridge, no preview, no button or link to Socrates, the note present, and the
draft box still capturing for Canvas.

## Checkpoint 2 finishes in class, or at home

**Checkpoint 2 is a required conversation at the end of a 90-minute block, and
the room does not empty out at the same speed.** The draft, the coaching, and the
revision all have to happen before Gather All My Work, and a student who is
still coaching when the bell rings has nothing to submit. Jeff's decision,
2026-09-01: if it is not finished in class, it is homework, all three steps, not
just the write-up.

Both renderers say so on the card, right after the line that the revised answer
in the box is what goes to Canvas. It is the same shape as the independence note
on Checkpoint 1: a policy a machine cannot enforce is still worth stating in
words a student reads at the moment it applies, rather than leaving it to be
announced verbally and half-heard.

`scripts/test/coach-prompt.test.js` asserts the sentence is on the rendered
Checkpoint 2 card, on two unit topics and Foundations.

## What a scenario pastes

**A paste can replace Socrates, and for a year every BeInTheRoom scenario did.**
The persona treats the pasted block as authoritative over anything he remembers,
which is what lets one bot serve 77 topics. It also makes the paste the one place
that can overwrite him, and two strings were doing it until 2026-08-31.

The first named a different coach. Every hand-authored scenario and the v2
renderer opened with "You are the BeInTheRoom Historical Thinking Coach", and the
two generated units opened by asking him to act as a generic AP World coach. A
student who is supposed to build one relationship with Socrates across nine units
met an unnamed second bot in the module where the coach is most present.

The second was worse. The pastes said "ask me one question at a time", which is
**version 1 of the persona's own rule, restated in the place the persona says
wins**. That line was removed from the checkpoint paste on 2026-08-29, for the
reasons at the bottom of `assets/js/behistorical-coach-prompt.js`. The checkpoint
path was fixed and the scenarios were not, so BeInTheRoom went on running the
coach students complained about, and every structural check stayed green through
all of it, because nothing offline could see which conversation a paste produced.

On top of both, every scenario closed with a six-stage coaching walk. The persona
follows scenario-authored stages **deliberately**, so five or six stages at one
ask each made BeInTheRoom the longest and most repetitive conversation in the
course. That is replaced with the persona's own budget: diagnose whether the
decision is defensible given role, evidence and tradeoff, one revision, release.

**A scenario that genuinely teaches a sequence keeps it.** Topic 9.3 is the case:
its stages name historical responsibility, the ENV thematic focus, and the 9.2 to
9.3 bridge, which is a sequence about the history rather than a template with the
topic dropped in. Only the identity line and the restated rule were fixed there.

**The last line of a scenario paste is byte-identical to a checkpoint's**, "Give
me one thing to work on at a time. Do not write my final answer for me.", so the
two surfaces cannot drift into asking Socrates for different things.

**Two authored fragments are preserved per scenario**, and losing either would
look like a successful sweep: the revision target, which on several scenarios
names the AP key concept the argument has to reach, and the
step-out-of-character question, which is different on every scenario and is the
reflection that actually reaches Canvas. The sweep reports and skips any file
where it cannot find them rather than writing a generic substitute.

**The prohibition is what makes it stick.** `validate.js` fails on those strings
across every scenario, the v2 renderer, and both unit generators. Scanning
`beintheroom/` alone would cover the 38 hand-authored scenarios and report green
for the 26 that share `behistorical-room-v2.js`, which builds its paste at
runtime, so its wording never lands in a scenario file at all.

Two things the repo cannot test, so they are manual and written down in
`docs/socrates/README.md`: pasting the instructions into MagicSchool, and
uploading the spine. Nothing here can log into a vendor web UI. What the repo does
test is that both documents are reproducible from the lesson data, and that every
one of the 77 topics can produce a complete context block.
