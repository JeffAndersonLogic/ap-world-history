# Canvas Capture Contract

How student writing gets from a lesson page into an analysis table, and what the
pipeline refuses to do quietly.

This is the counterpart to `docs/FORM-CONTRACT.md`. That file documents state
living in Google that code cannot verify. This one documents a contract that is
entirely inside the repository, which is the point: everything here is checkable
by running `node scripts/parse-canvas-submissions.js`.

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
  -> Download Submissions      one HTML file per student
  -> scripts/parse-canvas-submissions.js
  -> responses.csv + exceptions.csv
```

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

```bash
node scripts/parse-canvas-submissions.js ~/Downloads/submissions
node scripts/parse-canvas-submissions.js ~/Downloads/submissions \
  --out ~/Desktop/topic-1-1 --roster roster.csv --json
```

The input is an unzipped Canvas **Download Submissions** folder. Canvas names
each file `lastnamefirstname_<userid>_<submissionid>_<assignment>.html`, and that
filename is the only place the student's identity appears. The paste itself
deliberately carries no name, so a mispaste into the wrong assignment is a
misfiled response rather than a disclosure.

`--roster` attaches class period. The CSV needs a period or section column plus
either an id column or a name column; names are squashed to the same shape Canvas
writes into filenames, so `Anderson, Jeff` joins to `andersonjeff`.

**The script makes no network calls, and it must stay that way.** The folder it
reads is identifiable student work. The moment this can reach the internet it
becomes a data flow somebody has to govern.

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
