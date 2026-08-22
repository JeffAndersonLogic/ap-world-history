# Canvas Capture Contract

How student writing gets from a lesson page into an analysis table, and what the
pipeline refuses to do quietly.

This is the counterpart to `docs/FORM-CONTRACT.md`. That file documents state
living in Google that code cannot verify. This one documents a contract that is
entirely inside the repository, which is the point: everything here is checkable
by running `node scripts/parse-canvas-submissions.js`, or by dropping the
Canvas zip on `teacher/skills-lens.html`, which runs the identical parser in the
browser.

---

## THE GOVERNING RULE

**No filter may reduce the row count without recording why.**

The Google Form pipeline lost rows silently, and the damage looked like low
student completion rather than like data loss. `filterRows_` in `Code.gs` drops
any row whose Topic came through blank, so the en-dash incident showed up as a
class of 28 reporting n=19.

Every response the manifest declares therefore ends up in exactly one of two
files. `responses.csv` if it parsed, `exceptions.csv` if it did not. A summary
that prints a bare n is a bug.

---

## THE PIPELINE

```
lesson page draft boxes (localStorage)
  -> Gather All My Work        buildWorkDocument() in either renderer
  -> clipboard                 text/html and text/plain, both carry the manifest
  -> Canvas Text Entry         one assignment per topic
  -> Download Submissions      submissions.zip, one HTML file per student
  ->                           either door, same answer:
       teacher/skills-lens.html      drop the zip, parsed in the tab
       scripts/parse-canvas-submissions.js   for a folder, from a Terminal
  -> responses.csv + exceptions.csv
```

**Both doors run the same parser.** `scripts/lib/canvas-parse-core.js` is the one
implementation; the CLI requires it and `scripts/build-skills-lens.js` inlines
the identical bytes into the Lens. Two copies of a hash rule would mean two
answers to "did this student edit their work" depending on which route the
teacher took, and the copy that disagreed would not announce itself. It would
surface as a few EDITED flags nobody could account for.

The guard is mechanical, not a promise: `validate.js` re-derives the inlined
block from source and fails the build the moment it drifts. The parity assertion
in `scripts/test/canvas-zip.test.js` goes further and checks the two paths emit
byte-identical `responses.csv` on the same input.

Row order is therefore fixed inside `buildTable`, not left to the caller. A
directory read and a zip hand over entries in different orders, and without a
sort the two doors produce the same rows in different sequences, which makes the
parity check meaningless.

Two renderers emit the manifest and they must stay in lockstep:

- `assets/js/behistorical-topic-renderer-v1.js`, all 71 unit topics
- `foundations/foundations-topic-renderer.js`, the six Foundations topics

The parser reads both, plus the plain-text clipboard fallback, plus submissions
gathered before the manifest existed.

---

## THE RECORD FORMAT

Appended below the human-readable transcript:

```
--- BEHISTORICAL RECORD, do not edit ---
#BHV|v=1|topic=1.1|copied=2026-08-06T22:11:06.435Z|items=9|expected=9|sum=6979ab38|#
#BHR|i=01|slot=map-check-response|lab=Module 01, Map & Geography Check|w=26|c=147|ph=af70ad43|rh=5c14402d|#
...
--- END BEHISTORICAL RECORD ---
```

| Field | Meaning |
|---|---|
| `v` | schema version, bump it and `SCHEMA_SUPPORTED` together |
| `topic` | `1.1` for units, `f1` for Foundations |
| `copied` | ISO 8601, when Gather ran |
| `items` | responses actually gathered |
| `expected` | capture slots **the lesson defines**, the denominator |
| `sum` | hash over every `slot:responseHash` pair |
| `i` | module ordinal, `xx` for a bespoke textarea |
| `slot` | textarea id, the stable join key |
| `lab` | the label the parser splits the body on |
| `w` / `c` | word and character count |
| `ph` / `rh` | prompt hash and response hash |

### Why the format is this ugly

**Canvas rewrites the paste.** Its editor is free to strip a tag, drop an
attribute, or reflow a paragraph, so nothing may depend on HTML structure
surviving. Every record is one self-delimiting line, `#BHR|...|#`, which a regex
recovers from the submission's text content even if every newline collapses.

**Hashes are over collapsed whitespace.** Canvas rewrites line breaks on the way
in and again on the way out, so a hash over raw text would not survive its own
round trip. `normalizeForHash` collapses runs of whitespace first. The question
being asked is "is this the same writing", not "are the newlines byte-identical".

**FNV-1a 32-bit, implemented three times.** Once in each renderer, once in the
parser. It is dependency-free and identical in all three, and the round-trip test
below proves they agree. It detects accident and drift. **It is not a
tamper-proof signature** and nothing downstream should treat it as one: a student
who wants to defeat it can, and the correct response to a persistent `EDITED`
flag is a conversation, not an accusation.

**`expected` comes from the lesson, not from the paste.** That is the whole
design. A student who gathered nothing still has a denominator, so an empty
submission reports `0 of 9` instead of looking like a student who wrote nothing.

---

## WHAT THE PARSER CATCHES

| Reason | Means |
|---|---|
| `INCOMPLETE` | fewer responses than the lesson defines. The empty-but-valid submission: district Chrome policy wipes site data, Gather returns nothing, and the student pastes a well-formed transcript of prompts with no answers. Canvas records it as submitted. |
| `BLANK` | a record exists and its response text is empty |
| `EDITED` | the response no longer hashes to what Gather recorded |
| `COUNT_MISMATCH` | the manifest declares N records and fewer arrived, so the paste was truncated |
| `MANIFEST_ALTERED` | the checksum does not match, so a whole record line was removed |
| `DUPLICATE_PASTE` | more than one manifest in a submission. The last is read |
| `SCHEMA_UNKNOWN` | a manifest version this parser does not know |
| `NO_MANIFEST` | gathered before the footer shipped. Parsed on the legacy grammar and always flagged, because without a manifest completeness is not a claim that can be made |

---

## USAGE

### The normal way, no Terminal

Open `teacher/skills-lens.html` and drop the `submissions.zip` on it, straight
from Canvas. If you have already unzipped it, select the submission files
themselves and drop those instead; both gestures work. Drop the roster CSV alongside it in the same go and class periods
come with it. **Save responses.csv** writes the CSVs back out if you want the
files.

The Lens reads the zip with `DecompressionStream`, which is native in every
current browser, so there is no library and no build step at the teacher's end.
Its Content-Security-Policy is `default-src 'none'` with `connect-src 'none'`:
the page cannot reach the network at all, which is not a policy choice it makes
at runtime but a restriction the browser enforces on it.

The Terminal step existed only because nothing had read a zip in the browser
yet. Asking a teacher to type a folder path in the five minutes before a bell is
how a pipeline goes unused.

### Every drop merges

A drop adds to what the page already holds. It does not replace it. Drop Topic
1.2 in September and Topic 1.3 in October and the Lens holds both, which is what
lets the Over time panel plot a course rather than an evening. Every door goes
through the same merge: the zip, loose submission files, `responses.csv`,
`exceptions.csv` and a `responses.json`. There is one implementation, because
four ingest paths with four merge rules would give four answers to whether a
student's work got counted.

**A row is a student, a topic and a slot.** The student is `canvas_user_id`
where Canvas wrote one and the squashed display name where it did not, and that
fallback is a real limitation rather than a solved problem: two students who
squash to the same string are one student to this code. Where some drop carried
both a name and an id for the same person, that pairing is Canvas's own and the
name-only rows are folded onto the id; two ids under one squashed name is
genuinely ambiguous, so those stay apart and the page says so. Nothing here
invents a permanent identifier. A legacy row with no `slot_id` falls back to its
module ordinal and label, because nine such rows keyed on one empty string would
collapse a whole submission into a single record.

**`copied_at` decides which version wins**, not the order the files were
dropped. A newer paste replaces an older one; an older paste arriving late does
not overwrite the newer row; a byte-identical row is a duplicate and stays one
row. A row with no `copied_at` never overwrites a dated one. When neither side
can be dated, the later drop wins, which is a convention rather than evidence,
so it is counted separately and reported as the weaker rule.

**Exceptions move with the submission they describe.** An `EDITED` flag belongs
to a paste, not to a slot, so when a newer submission for the same student and
topic wins, its exception set replaces the old one outright, including replacing
a flag with nothing when the new paste is clean. A drop that carries only
responses is not in a position to say anything about exceptions and leaves them
alone rather than clearing them.

**Every drop prints a receipt**, because "loaded successfully" cannot answer the
only question a second drop raises:

```
Merge: 184 added · 12 updated · 176 duplicates ignored · 3 older rows ignored.
Cumulative set now holds 1,204 responses across 14 topics.
```

**Save responses.csv writes the cumulative set**, in the same `ROW_HEADERS`
order and the same RFC4180 quoting the CLI uses, so it round-trips: dropping the
page's own saved CSV back onto the page reports every row as a duplicate.
`scripts/test/skills-lens-zip.test.js` asserts exactly that, along with the
newer-wins, older-loses and undated-refused rules, in a real browser.

### The command line, for a folder or a script

```bash
node scripts/parse-canvas-submissions.js ~/Downloads/submissions
node scripts/parse-canvas-submissions.js ~/Downloads/submissions \
  --out ~/Desktop/topic-1-1 --roster roster.csv --json
```

The input is an unzipped Canvas **Download Submissions** folder. Canvas names
each file `lastnamefirstname_<userid>_<submissionid>_<assignment>.html`, and that
filename is the only place the student's identity appears.

**The filename is a convention, and the manifest is a fact.** Both readers ask
the name first and the contents second. A real Canvas download was rejected as
holding no submissions because its one zip entry did not match the expected name,
while the file inside parsed perfectly once extracted by hand. So anything
carrying a record footer is a submission whatever it is called, and an archive
with nothing in it reports the entry names it actually saw rather than restating
the rule it applied. `scripts/test/fixtures/canvas-download-studenttest.html` is
that download, committed verbatim as the regression.

Canvas also does not always write both ids. The 2026-08-07 test-student download
came back as `studenttest_LATE_310529_text.html`, with one. The parser takes however
many are there; with one it keeps it as the submission id rather than guessing it
is a user id, because `canvas_user_id` is the roster's first join key and a wrong
key is worse than an absent one. The paste itself
deliberately carries no name, so a mispaste into the wrong assignment is a
misfiled response rather than a disclosure.

`--roster` attaches class period. The CSV needs a period or section column plus
either an id column or a name column; names are squashed to the same shape Canvas
writes into filenames, so `Anderson, Jeff` joins to `andersonjeff`.

**Neither door makes a network call, and it must stay that way.** What they read
is identifiable student work. The moment either can reach the internet it becomes
a data flow somebody has to govern. `validate.js` asserts the Lens still carries
its `connect-src 'none'` policy, and `scripts/test/skills-lens-zip.test.js`
watches a real browser session for any request that tries to leave the page.

---

## VERIFYING A CHANGE

Any edit to `buildWorkDocument`, `WORK_ITEMS`, `FOUNDATION_WORK_ITEMS`, or the
parser needs the round trip re-run, because a wrong denominator is worse than no
denominator: an exception report that cries wolf is one nobody reads.

That is not hypothetical. The Foundations `expectedCaptureCount` first counted
the bare `first10` slot, which `renderFirst10()` only draws when a topic has no
`embedUrl`. Every Foundations topic embeds, so every complete submission would
have reported `10 of 11`.

Before trusting this on real work, run it once on live Canvas output, on one
topic, with a test student. Complete all nine capture points including one
response over 2,000 characters containing blank lines, a comma, a double quote,
and a curly apostrophe. Submit, download, unzip, parse, and **diff** the parsed
response against what was typed rather than eyeballing it. If the text survives
byte-complete, the rest of the design holds.
