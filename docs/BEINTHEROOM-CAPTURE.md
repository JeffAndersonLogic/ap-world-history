# BeInTheRoom capture, a handoff note

**Status: not built.** This records why the obvious approach does not work and
what has to happen first. Written 2026-08-07, after a session that scoped the
work and stopped rather than ship a bridge that would misreport submissions.

Read `docs/CANVAS-CAPTURE.md` first. Everything below is constrained by it.

## What was asked for

Module 09, BeInTheRoom, is the only student-facing module whose work never
reaches Canvas. The renderer says so itself, at the top of
`assets/js/behistorical-topic-renderer-v1.js`:

> module 09 has no textarea and no `*-beintheroom` Prompt IDs exist on the form.

The proposal was to bridge it the way Module 02 is already bridged: the reading
sits in an iframe, writes its answers to `behistorical-first10-<TOPIC>`, and
`injectFirst10Answers()` pulls them back into Gather All My Work. A scenario
page is same origin with the lesson page, so the same trick should work.

## Why that does not work yet

The First & 10 bridge works because all 77 readings share one canonical capture
block, installed and reinstalled by `scripts/sync-first10-capture.js`. One
implementation, so it cannot drift.

The 64 BeInTheRoom scenarios share nothing. Counted by grep over
`beintheroom/*/*.html`, so these numbers are reliable:

| Textarea id | Files |
|---|---|
| `decision-response` | 25 |
| `reflection-response` | 23 |
| `reflection` | 12 |
| `coach` | 12 |
| `argument` | 12 |
| `comparison-response` | 3 |
| `reflection1-response`, `reflection2-response`, `reflection3-response` | 2 each |
| `reflect1`, `reflect2`, `reflect3`, `position-text` | 1 each |

Storage is uneven, but not broken. **An earlier version of this file claimed 26
of 64 scenarios never touch `localStorage` and that student work in them is lost
on tab close. That was wrong, and it was wrong in the direction that matters:
it described a data-loss bug that does not exist.** Corrected 2026-08-08.

The grep behind that claim searched scenario HTML for a `localStorage` call and
missed the shared renderer. Counted properly:

- 38 of 64 scenarios call `localStorage.setItem` in their own markup.
- The other 26 call it through `assets/js/behistorical-room-v2.js`, which
  persists on their behalf at `save()`.
- Those two sets are **exactly** the v2 and pre-v2 scenarios. The only file
  under `beintheroom/` with neither is `index.html`, which is a menu.

So every scenario persists. Verify with, and note that the two counts match:

```sh
for f in beintheroom/*/*.html; do grep -q localStorage "$f" || echo "$f"; done | wc -l
grep -l behistorical-room-v2 beintheroom/*/*.html | wc -l
```

Scenarios that autosave in their own markup use `beintheroom-<slug>-<textarea id>`
plus a `beintheroom-<slug>-state` key, where the slug comes from the filename.
The v2 renderer uses a single `behistorical-room-v2-<scenario id>` key.

The real defect the miscount hid was narrower and is now fixed: `save()` in the
v2 renderer called `localStorage.setItem` unguarded while `load()` had always
been wrapped, so a device that refuses storage threw inside a click handler and
took the scenario's render down with it. Same failure the lesson renderers fixed
in `cbebb0a`, in the one file never audited for it.

**The bridge work below is still unbuilt, and the id sprawl above is still the
reason.** But it is a capture problem, not a data-loss emergency, so it does not
justify normalizing nine id schemes across 64 files ahead of a paying reason to.

## The constraint that makes a partial bridge harmful

`expectedCaptureCount()` counts the `WORK_ITEMS` whose backing data resolves, so
adding a Module 09 item raises `expected` from 9 to 10 on every topic that
defines `beInTheRoom`. A bridge keyed on one id scheme would capture on the
subset of scenarios that happen to match and stay empty everywhere else, so
students who did everything right would submit `9 of 10` and land in
`exceptions.csv` as INCOMPLETE.

`docs/CANVAS-CAPTURE.md` is blunt about this: a wrong `expected` reports
complete submissions as incomplete, which is worse than no count at all. That is
the reason this is unbuilt rather than half built.

## Numbers in this note that are NOT trustworthy

Three separate attempts to derive the topic to scenario mapping statically, by
regex and by brace matching over `assets/data/lesson-*.js`, produced three
different answers for how many topics define `beInTheRoom` (39, 17, 18). Every
disagreement traced to a bug in the extractor, not to the data. Two known traps:

- `beInTheRoom` appears twice in many data files. Once as a module-card image
  path (`beInTheRoom:'../assets/images/.../module-09-*.svg'`) and once as the
  real object (`beInTheRoom:{url:...}`). Only the object form counts.
- Quoting is mixed. `url:'...'` and `desc:"..."` both occur, so a
  single-quote-only pattern silently drops matches.

**Do not trust any topic count until it comes from a browser.** The reliable
method is to load each `unit-*/lesson-*.html` in Chromium and read
`window.BEHISTORICAL_LESSON.beInTheRoom`, which is exactly what the renderer
sees. An attempt to do that in the scoping session hung on page loads and was
killed, so it is still owed. Budget for it being slow, and consider blocking the
Google Fonts requests, which are the likely cause of the hang.

## Build order when this is picked up

1. **Get the mapping from a browser.** Which topics define `beInTheRoom`, and
   which scenario file each points at. Everything downstream depends on it.
2. **Write `scripts/lib/beintheroom-capture-block.js`**, modelled on
   `scripts/lib/first10-capture-block.js`. It should find textareas
   generically rather than by id, the way the First & 10 block already reasons
   about drifted markup, and label each from its nearest preceding heading.
   Write one payload to `behistorical-beintheroom-<TOPIC_KEY>`. The installer
   injects `TOPIC_KEY` literally, as the readings already do
   (`var TOPIC_KEY='1.1';`).
3. **Write `scripts/sync-beintheroom-capture.js`**, idempotent, sentinel
   delimited, mirroring `scripts/sync-first10-capture.js`. Sentinels rather than
   brace matching: getting that wrong once already duplicated the block in all
   77 readings.
4. **Add `injectBeInTheRoomAnswers()`** to the unit renderer next to
   `injectFirst10Answers()`.
5. **Add one `WORK_ITEMS` entry**, not one per textarea. Suggested slot id
   `beintheroom-response`, label `Module 09, BeInTheRoom`, joining the
   scenario's answers into a single response with each sub-prompt as a heading
   line. One slot keeps `expected` derivable from the lesson rather than from
   what a student managed to save, which is the property
   `docs/CANVAS-CAPTURE.md` requires.

## Known limits to state up front

Same origin and same device. A student who runs the scenario in a different
browser, or on a school machine whose site data gets wiped, submits without it.
The First & 10 bridge already lives with exactly this, so it is a known and
accepted cost, not a surprise.

## Related, and deliberately out of scope here

- **Module 04, BeSurreal, has no textarea in unit lessons** and so is not
  captured either. Foundations does capture it, via a `besurreal` slot in its
  own `WORK_ITEMS`. That inconsistency is unresolved.
- **Foundations checkpoints have no AI Coach bridge at all.**
  `foundations/foundations-topic-renderer.js` renders them as a dark callout, a
  checklist, and a bare draft textarea. Unit checkpoints gained a Build and Copy
  prompt path on 2026-08-07; Foundations did not.
