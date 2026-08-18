# Assessments

Teacher assets. Nothing in this folder is served to students as a lesson, nothing
is linked from `index.html`, and nothing here is generated.

**Why it is a separate top-level folder.** `validate.js` globs Foundations lesson
shells with `/^foundations-\d+.*\.html$/`, Foundations readings with
`/^first-and-10-foundations.*\.html$/`, and deep readings with
`/^deep-reading-.*\.html$/`. A file dropped into `foundations/` gets checked
against a contract it was never meant to satisfy. An exam is not a lesson, it has
no capture block, no storage key and no coach bridge, so it belongs outside all
three globs. Markdown keeps it out of the repo-wide `walkHtml(ROOT)` sweep as
well.

**Answer keys live in the same file as the exam**, below a page break, because a
key in a second file is a key that goes out of sync with the questions the first
time either one is edited. Print the student pages only.

## What is here

- `foundations-unit-exam-40mc.md`, the 40-question Foundations unit exam:
  18 stimulus-based, 14 traditional, 8 historical-thinking-skill identification.
  Every item is sourced to a First & 10 reading or an eBook chapter, and the
  answer key names the section it came from.
