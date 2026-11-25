# Unit 5 handoff, 2026-11-24

Written so any AI session, on any account, can pick up the Unit 5 work without the chat that
produced it. Read this repository's `CLAUDE.md` first; every rule there applies.

Jeff's instruction on 2026-11-24: **"only finish up 5.1 right now and have the work done so far on a
working branch that can be accessed from another AI account if necessary."**

## Two branches, two jobs

| Branch | What it holds | State |
|---|---|---|
| `claude/zealous-keller-cs4c3s` | `main` plus Topic 5.1 only: the two 5.1 corrections from the Unit 5 by Region review, and a fresh 5.1 topic audit | Finished; Jeff said ship it on 2026-11-25. 5.1 is taught Green 2026-11-30, Silver 2026-12-01. |
| `claude/ebook-regional-reading-status-n1uc9j` | The Unit 4 and Unit 5 "by Region" eBook rewrite (Part Two of `ebook/unit-4.html` and `ebook/unit-5.html`) in plain language, plus four review passes and the fixes they carried into Topics 4.4 to 4.7 and 5.1 to 5.8 | **Unfinished.** 50 commits not on `main`. Not shipped. |

Nothing from the second branch reaches students until Jeff says "ship it".

The 5.1 branch's audit is `docs/topic-audits/topic-5-1-2026-11-24.md`. Its two changes to what is assessed
(Checkpoint 1 now asks about reason and evidence; learning target 2's nationalism wording) were
approved by Jeff on 2026-11-25 and shipped with it. Its fixes touch the same 5.1 files the eBook branch's
review touched (`scripts/lib/reading-content/unit-5.js`, `scripts/lib/deep-reading-content/topic-5-1.js`,
`teacher/data/topic-5-1-teaching-base.js`); when the two meet, keep the 5.1 branch's text for 5.1.

## Where the eBook branch stopped

- The session doing it hit a usage limit on 2026-11-23 at about 11:20 UTC, **during review pass 5**.
  Pass 5's reviewers were still reading; **none of their findings were written down**, so pass 5 has
  to be run again from the start. Everything through pass 4 was committed and pushed (tip `d5f333e1`).
- The rule for this loop, from `docs/UNIT-5-BY-REGION-CLAIM-LEDGER.md` ("Review loop after the
  plain-language pass"): seven fresh reviewers a pass across both units, **run passes until one is
  clean**, and write each finding to the ledger as `PENDING`, and push, before fixing anything. The
  Unit 4 ledger (`docs/UNIT-4-BY-REGION-CLAIM-LEDGER.md`) has the reviewer brief.
- Pass 4 was not clean (its findings are all fixed and logged). No `PENDING` items remain.

## How to resume the eBook branch

1. Check it out and bring it up to date: `git merge origin/main`. The branch is several commits behind.
2. Expect one conflict, in `scripts/test/readings-golden.js`, on `APPROVED_UNIT5_REWRITE_BLOB`.
   `main` (via this 5.1 branch, once shipped) pins the Unit 5 reading file with only the 5.1
   correction; the eBook branch pins it with every Unit 5 correction. Keep **both** dated comments,
   then set the blob to `git hash-object scripts/lib/reading-content/unit-5.js` after the merge, and
   say in a new dated line that only the branch's own listed sentences differ from the 5.1-only pin.
   The 5.1 source edits themselves are identical on both branches and merge cleanly.
3. Rebuild (`npm run build:readings`, `build:deep-readings`, `build:ebook`, `build:student-os-decks`)
   and run `npm test`.
4. Run review pass 5 as the ledger describes, fresh reviewers, and keep going until a pass is clean.

## Running the gate in a cloud container

- `npm test` is the gate. In a shallow clone the topic-audit index check says CANNOT CHECK; run
  `git fetch --unshallow origin` first. That is not drift.
- Browser tests: `NODE_PATH=/opt/node-tools/node_modules npm run test:browser -- --strict` uses the
  pre-installed Playwright instead of installing `playwright-core`.

## Shipping

Use the `ship-to-main` skill, only after Jeff says "ship it". A Claude Code web session cannot delete
a remote branch (HTTP 403, then a misleading "Everything up-to-date"); check with `git ls-remote` and
tell Jeff the branch is still there.
