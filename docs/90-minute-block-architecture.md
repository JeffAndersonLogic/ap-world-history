# The 90-Minute Block: Evaluating the Five-Phase Redesign

**Date:** 2026-09-15
**Status:** Evaluation complete, revised 2026-09-15 after a second round. Four
recommendations adopted in principle, two rejected. No code changed by this
document.
**Prompted by:** A ChatGPT assessment proposing that BeHistorical's default lesson
be rebuilt around five phases (HOOK, TEACH, INVESTIGATE, SYNTHESIZE, PROVE) on the
grounds that the current design spends most of a 90-minute block on presentation.

---

## Verdict in one paragraph

The proposed architecture is sound and is largely already built. The diagnosis
underneath it is wrong: direct instruction is not the problem and never was.
Buried inside the proposal is one principle the current design genuinely does
violate, which is worth adopting, and one concrete prompt improvement that is
worth adopting immediately. Two of its recommendations point backwards at
surfaces that already exist or that were deliberately superseded, and following
those would cost real work.

---

## What the block actually looks like today

Measured off the authored `runOfShow` blocks and the Topic 1.7 teaching data,
classifying each phase as teacher-led or student-working:

| Topic | Authored total | Teacher-led | Student working | Phases | Avg phase | Longest unbroken student block |
|---|---|---|---|---|---|---|
| 1.4 Americas | 93 min | 35 (38%) | 58 (62%) | 9 | 10.3 min | 18 min |
| 1.5 Africa | 92 min | 35 (38%) | 57 (62%) | 9 | 10.2 min | 23 min |
| 1.6 Europe | 96 min | 39 (41%) | 57 (59%) | 9 | 10.7 min | 23 min |
| 1.7 Comparison | 90 min | 43 (48%) | 47 (52%) | 10 | 9.0 min | 27 min |

Direct instruction runs 21 to 25 minutes. The proposal's target is 15 to 20. The
current design is one to five minutes over a band it was assumed to be missing by
a wide margin. The proposal's own rule, that no single instructional mode should
last longer than about 20 to 25 minutes, is already satisfied everywhere.

**So the premise fails.** BeHistorical is not a presentation-heavy course.

## The real finding, which the proposal gestures at without naming

The problem is **transitions, not teacher talk**. Topic 1.4 runs nine phases in
93 minutes. Topic 1.7 runs ten in 90. A student changes cognitive mode roughly
every nine to ten minutes for the whole block. The five-phase model averages 18
minutes per phase, and that gap, not the lecture minutes, is what the proposal is
actually reacting to.

The correct statement of the principle is therefore: **a 90-minute block should
contain fewer, longer phases, with one student work period of at least 25
minutes.** That is worth adopting. The five phase names are not: they discard a
working vocabulary (BeReady, First & 10, Evidence Lab, Checkpoint) that students,
the Canvas assignments, the announcements board and the Skills Lens all already
share.

## Where the proposal re-proposes what exists

**"The teacher-facing page should account for the 90-minute reality."** This
describes Run of Show, which shipped and was validated in a live class on Topic
1.4 (2026-09-05). The existing surface is strictly richer than the one proposed:
it carries the run of show, the must-haves, what to skip, the misconceptions and
the end target, plus a persisting per-phase class timer, a 60-minute condensed
route and a 45-minute emergency route.

**"That would be far more valuable than giving you a giant command center filled
with buttons."** This points backwards. The command centers (Topics 1.7, 2.1,
2.2) are the newer surface and deliberately outrank Run of Show in the Today
router, because they carry the pacing inside the teaching surface rather than
beside it. Acting on this line would mean reversing the most recent teacher-tool
decision in the repository.

**The Topic 5.1 worked example.** The proposal designs an investigation around "a
short Locke excerpt, a short Rousseau excerpt, a Wollstonecraft or de Gouges
excerpt, maybe one visual." Topic 5.1's Evidence Lab already holds Locke's *Two
Treatises* (1689), Wollstonecraft (1792), a banned-work publication record, de
Gouges' 1791 rewrite of the 1789 Declaration, and Lemonnier's salon painting as
the visual. It reinvented the existing document set card for card. **The content
is not the gap.**

## The one place the proposal's version is better

Topic 5.1's Evidence Lab prompt reads:

> Choose one piece of evidence. Explain what it reveals about either the
> Enlightenment's challenge to traditional authority OR the limits of
> Enlightenment universalism.

The proposal's reads:

> What traditional authority is this person challenging, and what new principle
> are they using to challenge it?

asked of every document in the set.

The first permits a student to read one card and stop, which is a six-minute
task. The second is a single comparative frame across the whole set, which is a
thirty-minute task. **An investigation phase of 25 to 30 minutes is impossible
without a cross-document question**, and that is the specific reason the current
design cannot produce one no matter how the timings are rearranged. This is a
prompt rewrite, not an architecture change, and it is the highest value per hour
of anything in this evaluation.

## What the proposal does not know

**1. The block already overruns, and nothing catches it.** The three authored Run
of Show blocks total 93, 92 and 96 minutes. Against 85 minutes of usable class
time (see below) those are 8, 7 and 11 minutes over. `totalMinutes` is authored by
hand, it is not summed from the phases, and no check in either suite compares it
to the length of a class. Topic 1.7 is authored at exactly 90 and is therefore
5 minutes over.

Read this alongside Jeff's 2026-09-01 ruling that Checkpoint 2 becomes homework
when it does not finish in class. That ruling is the strongest available evidence
that the lesson is overfull, and it is better support for the proposal's thesis
than anything the proposal itself offers.

**2. The module count is the Canvas evidence trail, not decoration.** Green and
Silver are different students and nothing carries over, so every graded artifact
has to be captured inside the one block. The schedule already requires 4 to 6
modules per topic, not ten: Topic 1.5 requires six, Topic 1.6 requires five. The
proposal's five phases produce a quick write, an investigation answer, an SAQ and
an exit ticket, which is four capture points with no submission plumbing behind
them. It has renamed the count rather than reduced it.

**3. Coverage is the constraint, not design.** Six of 77 topics have any teacher
pacing surface: Run of Show for 1.4, 1.5 and 1.6, command centers for 1.7, 2.1
and 2.2. Redesigning the architecture of a surface that exists for 8% of the
course optimizes the wrong variable.

---

## Second round, and three corrections it forces

The proposal's author reviewed the measurements above and withdrew the redesign,
converging on the same three recommendations. Two additions from that round are
adopted; three facts checked afterwards correct the plan as it stood.

### Adopted: Teacher Orchestration Count

Minutes are the wrong unit on their own. A block can be 60% student-working time
and still exhaust the teacher, because what costs the teacher is **initiating**
something new: explaining directions, switching the window, regrouping the room.
So count teacher-initiated launches, not phases. Concurrent work counts once:
Topic 1.4 launches Map and First & 10 together, so those two phases are one
launch.

| Topic | Phases | Concurrent | Orchestration count |
|---|---|---|---|
| 1.4 Americas | 9 | Map with First & 10 | 8 |
| 1.5 Africa | 9 | Map with First & 10 | 8 |
| 1.6 Europe | 9 | Map with First & 10 | 8 |
| 1.7 Comparison | 10 | none | 10 |

**Target: 5 to 7 launches per block.** Every authored topic today is over it, and
1.7, the newest, is the worst. The consolidation in the appendix lands at 6.

### Adopted: an explicit flex reserve, which means 80 authored minutes

A 90-minute period yields about 85 usable minutes once attendance, settling and
packing up are gone. A lesson authored to exactly 85 still has no room for a
Canvas outage, a long question, or a fire drill, so the reserve has to be
explicit rather than assumed.

**The numbers are therefore: 90 scheduled, 85 usable, 80 authored, 5 held in
reserve.** The budget check, when built, should fail above 80 rather than 85.
The reserve is taken out of every phase except the investigation, which is
protected.

This tightens the overrun considerably. Against 80 authored, Topics 1.4, 1.5,
1.6 and 1.7 are 13, 12, 16 and 10 minutes over.

### Correction: Topic 1.4 cannot be the pilot

The pilot's success criteria are all classroom observations: did students stay
engaged longer, did the room need less transitioning, did the block finish
without rushing. Those require teaching it.

**Topic 1.4 was taught in early September and the course is past it.** As of
2026-09-15 the schedule has Silver on 1.7 today, then 2.1 on the 16th and 17th,
2.2 on the 18th and 21st, 2.3 on the 22nd and 23rd. A restructured 1.4 could be
written but not tested until next year.

**Topic 2.3 is the recommended pilot instead.** Three reasons. It is seven days
out, which is enough time to author and not enough to gold-plate. Its Canvas
assignment already requires Module 07, so the cross-document Evidence Lab
question has somewhere to land. And it has **neither** a Run of Show nor a
command center, which makes it the right test: the open question is whether
topics 2.3 through 9.9 can inherit the standard, and a pilot on a topic that
already has a bespoke surface answers a question nobody is asking.

Topic 1.4 stays useful as the paper exercise that defines the target shape,
because it is the one fully authored pacing block with a real overrun. It just
cannot be the thing that validates it.

### Not verified

The second round characterizes recent presentation, image-handling, remote
control and deployment work as too technically ambitious and fragile. That claim
was not audited for this document and is neither endorsed nor rejected here. The
most recent commit does replace a newly added iPad remote transport, which is
consistent with churn, but one commit is not evidence of fragility.

## Decisions

**Adopted in principle.** No implementation authorized by this document.

1. **Consolidation over renaming.** Merge the mid-block student tasks into one
   named investigation of 25 to 30 minutes, with Checkpoint 1 as its capture
   rather than as a separate phase. This reduces Topic 1.4 from nine phases to
   seven without losing a single Canvas artifact.
2. **One cross-document question per Evidence Lab**, replacing "choose one
   card." Content work across topics, starting with 5.1, which is ready today.
3. **A hard budget of 80 authored minutes**, enforced by a machine check in the
   offline suite, so a Run of Show cannot be authored past the bell again.
4. **Teacher Orchestration Count as a second budget**, targeting 5 to 7
   teacher-initiated launches per block, measured with concurrent work counted
   once.

**Rejected.**

5. **The five phase names.** The existing vocabulary is shared by students, the
   Canvas assignments, the announcements board and the Skills Lens. Renaming it
   costs all of that and buys nothing the consolidation principle does not
   already buy.
6. **Retreating from the command centers.** They are the current direction and
   they carry the pacing inside the teaching surface. Run of Show remains the
   fallback for topics without one.

**Parameters set.**

- **90 scheduled, 85 usable, 80 authored, 5 in reserve.** Budget checks use 80.
- **The pilot topic is 2.3**, not 1.4, because the course is already past 1.4 and
  a pilot that cannot be taught cannot be evaluated. See the correction above.

## What is not decided

Whether the consolidation generalizes past one topic. Whether the budget checks
should fail a push or only warn. Whether the cross-document Evidence Lab rewrite
is a per-topic authoring pass or a template change. Whether the architecture
freezes after one pilot or two. None of these should be settled before the pilot
has been taught in a real block.

The larger question the second round raises and this document does not answer:
six of 77 topics have a teacher pacing surface, and the development pattern has
been to deepen those six rather than widen to the other 71. Whatever comes out of
the pilot is only worth having if topics 2.4 through 9.9 inherit it without being
individually authored.

---

## Appendix: an illustrative consolidation, using Topic 1.4 as the worked case

Not a decision, and not the pilot (see the correction above). Topic 1.4 is used
here because it is the one fully authored pacing block with a real overrun, so it
shows what the target shape costs. Current design left, consolidated right.

| Current (93 min, 9 phases, 8 launches) | Consolidated (80 min, 7 phases, 6 launches) |
|---|---|
| BeReady 5 | BeReady 5 |
| Map 7 + First & 10 11 | Map and First & 10 15, launched together |
| Content 21 | Content 16 |
| Checkpoint 1 8 | **Investigate 25, protected** (Evidence Lab, with Checkpoint 1 as its closing capture) |
| Evidence Lab 16 | Debrief 7 |
| Debrief 9 | Checkpoint 2 10 |
| Checkpoint 2 11 | Exit Retrieval 2 |
| Exit Retrieval 5 | |

Orchestration count moves from 8 launches to 6, inside the 5 to 7 target. The
longest unbroken student block moves from 18 minutes to 25. The total comes in at
80 with 5 minutes held in reserve, and nothing is dropped: every Canvas artifact
survives. Checkpoint 1 stops being a standalone mode switch and becomes the thing
a student writes at the end of the investigation, which is closer to what it was
always for.

The 13 minutes come out of Content (5), the opening independent work (1), Debrief
(2), Exit (3) and the reserve (5 of the original 8 over). The investigation is
the one phase that never gives minutes back.
