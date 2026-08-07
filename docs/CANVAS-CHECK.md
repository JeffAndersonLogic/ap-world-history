# The Canvas Round-Trip Check

Run this once, on one topic, before students use the Canvas assignment for real.
It takes about an afternoon and it is the only part of the pipeline that cannot
be tested from inside this repository.

## Why it is the one thing left

Everything upstream of Canvas is verified in a real browser: both renderers, the
record manifest, the confidence scale, the parser, the Skills Lens. What none of
that settles is what **Canvas** does to a pasted document. Its rich content
editor rewrites markup on the way in and again on the way out, and no local
simulation is authoritative about a curly apostrophe, an ampersand, or a
paragraph break.

If Canvas alters student writing between the paste and the download, every
response the Skills Lens ever reads carries the same corruption, and the two
failure modes that matter most, truncation and entity leakage, both look
perfectly fine at a glance. So this check diffs character by character rather
than asking you to read 2,000 words and form an impression.

## Before you start

- A test student account, or Canvas Student View.
- One topic. Topic 1.1 is a good choice; it is the reference implementation.
- The Canvas assignment set to **Text Entry** submission type.

## Step 1, set up the assignment

In Canvas, create or open the assignment for the topic and confirm:

- Submission type is **Text Entry**.
- The lesson page is linked from the description.

## Step 2, complete the lesson as the test student

Open the lesson page. Work through the modules and fill **all nine** capture
points with the text in:

```
scripts/test/fixtures/canvas-check-answers.txt
```

Copy each block into its matching module. The file is deliberately awkward, and
every character class in it has broken a copy-paste pipeline somewhere:

| In the text | Why it is there |
|---|---|
| A curly apostrophe and curly quotes | become question marks under the wrong encoding |
| `&` | comes back as `&amp;` when an HTML decode is missed |
| A double quote | breaks a naive CSV reader |
| An en dash | the character that silently dropped the Topic field on six lessons |
| A blank line between paragraphs | what Canvas's editor rewrites both ways |
| Answers over 300 characters | truncation looks like a student writing less |

Set a confidence rating on at least a few of them, and deliberately leave others
blank. A blank is a real answer and the check confirms it stays blank.

## Step 3, gather and submit

Click **Gather All My Work**, then **Copy to Clipboard**. Read the line it prints:
it should say `Gathered 9 of 9 responses`. If it says fewer, stop and find out
why before submitting; that is the empty-but-valid failure the whole record
footer exists to catch.

Paste into the Canvas assignment and submit.

## Step 4, download and parse

In Canvas: **Assignment → Download Submissions**.

Drop the zip straight onto `teacher/skills-lens.html`. It parses in the tab and
**Save responses.csv** writes the files out. Or, from a Terminal, unzip it and
run:

```bash
node scripts/parse-canvas-submissions.js ~/Downloads/submissions
```

Both run the same parser, so it makes no difference to the check which you use.

## Step 5, diff it

```bash
node scripts/verify-canvas-check.js ~/Downloads/submissions
```

If the folder holds more than one student, add `--student <name>`.

**You do not have to type the fixture text.** The default check recomputes the
hash the Gather panel recorded for each response and compares it to what came
back out of Canvas, so it settles the round trip against whatever the tester
actually wrote. Use `--answers scripts/test/fixtures/canvas-check-answers.txt`
only when the run deliberately used that script, for the stricter character
diff on known input.

The check reports per slot and catches six distinct corruptions:

| It catches | What it means |
|---|---|
| text differs at character N | shows both versions around the difference |
| truncation | flagged explicitly when the parsed text is materially shorter |
| paragraph breaks lost | typed two paragraphs, parsed one |
| HTML entities surviving as text | a decode step was skipped |
| mojibake | decoded as the wrong character set |
| a parser flag on the row | EDITED, BLANK and the rest, surfaced here too |

A clean run ends with:

```
  9/9 slots survived the round trip
  Canvas returned every response unchanged. The pipeline holds end to end.
```

## If it fails

Do not roll out to students. Send me the output. A difference here is Canvas
altering student writing, which is a different and more serious problem than a
bug in this repository, and the fix depends entirely on which character class
moved.

## The first run, 2026-08-07

Passed, 9 of 9, on Foundations 0 with a test student.

- All nine manifest records survived the paste and the download.
- Every response hashed byte-identical to what Gather recorded, so Canvas
  altered nothing.
- A curly apostrophe came through intact.
- No HTML entity leaked into response text. The `&amp;` occurrences in the file
  are all inside manifest labels such as "Map &amp; Geography Check", which is
  correct encoding, and the parser decoded them.
- No mojibake.
- 7 of 9 confidence ratings present, two deliberately blank and staying blank
  rather than becoming zeros.
- Zero exceptions.

### Paragraph preservation, the one gap in that run

Every answer in it was a single paragraph, so nothing exercised a blank line.
That matters more than the other gaps would, because paragraph structure is the
one corruption class the manifest hash cannot catch: `bhHash` normalizes
whitespace before hashing, on purpose, since Canvas rewraps lines and a hash
that moved every time it did would flag every clean submission. A response that
came back as one paragraph instead of two would still hash green. The checker
now says so at the end of a run rather than letting a clean result imply
coverage it does not have.

The gap splits in two, and only one half needs Canvas.

**The parser half is closed.** `scripts/test/canvas-paragraphs.test.js` feeds
every markup shape Canvas's editor is known to emit for a blank line, adjacent
`<p>` siblings, a double `<br>`, a self-closing `<br>` pair, an empty spacer
paragraph, and bare `<div>`s, and asserts each one comes back as two paragraphs
with no EDITED flag. It also asserts that a single `<br>` stays one paragraph,
so the parser cannot invent a break either. 9 of 9.

**The Canvas half is strongly evidenced, not proven.** The 2026-08-07 submission
stored 50 `<p>` elements and kept 39 adjacent `</p><p>` pairs, including all
nine `My response:` labels sitting directly next to the paragraph beneath them.
A two-paragraph answer reaches Canvas by the same route: `paragraphsHtml()` in
both renderers puts `<p>a</p><p>b</p>` on the HTML clipboard flavour, which is
the adjacency Canvas demonstrably preserved 39 times in that very document.

So a redo purely for this is not worth an afternoon. Fold a blank line into one
answer on the next real run, and the last of it is covered.

## After it passes

The `responses.csv` from this run is the right first thing to drop on
`teacher/skills-lens.html`. The committed fixtures under `scripts/test/fixtures/`
are synthetic; the panels say more when they are reading real writing.
