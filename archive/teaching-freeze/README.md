# Teaching freeze, retired

The teaching freeze refused any change to a topic from the start of its Green day
through the end of its Silver day, so the two cohorts were always taught the same
lesson. It was added on 2026-09-22, after Topic 2.3 was rewritten the night between
the two classes, and it was enforced in three places: a step in the Validate workflow,
the pre-push hook on any push to `main`, and Step 3.5 of the ship-to-main skill. A
commit trailer, `Ship-this-fix: <what was broken>`, let a repair through.

**Retired 2026-09-24, on Jeff's word.** Moved here rather than deleted, the same way
the Canvas Packets were retired: the history stays, and nothing else in the repo still
points at this folder.

## What is here

- `check-teaching-freeze.js`, the checker (was `scripts/check-teaching-freeze.js`).
- `teaching-freeze.js`, its library: school-time dates, freeze windows, the file
  patterns that tie a path to a topic, and the override trailer (was
  `scripts/lib/teaching-freeze.js`).
- `teaching-freeze.test.js`, the offline test that replayed the real 2.3 rewrite and
  required it refused on 9/22 and allowed on 9/24 (was
  `scripts/test/teaching-freeze.test.js`).

## Restoring it

The files still `require` each other by their old paths, so they only run from where
they came from. To bring the freeze back, move all three to their original locations,
add the test back to `SUITES.offline` in `scripts/run-tests.js`, and restore the three
call sites from commit `e09d460` ("Enforce the teaching freeze on the way to main"):
the "Teaching freeze" step and `fetch-depth: 200` in `.github/workflows/validate.yml`,
the loop in `.githooks/pre-push`, and Step 3.5 in `.claude/skills/ship-to-main/SKILL.md`.
The topic-audit and presentation-images skills also used to switch to report-only on a
frozen topic.
