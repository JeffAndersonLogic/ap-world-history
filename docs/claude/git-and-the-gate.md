# Git and the gate

Moved word for word from `CLAUDE.md` on 2026-10-17, the second pass of the 2026-10-16 decision to keep the rulebook every session loads short (recorded in AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`). `CLAUDE.md` keeps a short form of these rules; this file is the full text, with the reasons and the incidents behind them, and it is as binding as it was there. A comment elsewhere that says "see <section> in CLAUDE.md" means this file when the section is listed here.

## Git

- `main` is the deploy branch: GitHub Pages serves it, so what is on `main` is
  what students have, at `https://behistorical.com/`. The one-line `CNAME` file at
  the root is what puts it there; never delete or edit it. The old address,
  `jeffandersonlogic.github.io/ap-world-history/`, redirects to the new one, which
  is why old Canvas links still work. Student work saved in a browser belongs to
  the address, so see "Storage belongs to the address" in
  `docs/claude/student-work-persistence.md` before any change of address.
- Still no pull requests. Push to a working branch, wait for Validate to pass on
  it, then fast-forward `main` to that commit, then **delete the working branch**.
  This is the one change the branch rule forces, and only because a required check
  cannot pass on a commit that exists nowhere yet. See "The branch rule" below.
- **Deleting the branch is part of shipping, not tidying afterwards.** Nothing in
  this flow ever closes a branch otherwise, and on 2026-09-26 the repository was
  carrying about 300 remote branches, of which 27 were ancestors of `main`. At that
  size the branch list stops being usable and no later pruning fixes the cause.
  Delete it only after `origin/main` and the branch are the same commit and the
  branch is an ancestor of `main`; then it is provably free. **A Claude Code web
  session cannot do the remote half**: git writes of that kind are refused there with
  HTTP 403, and git prints `Everything up-to-date` afterwards, so a delete that was
  refused by policy reads like a no-op that found nothing to do. Check with
  `git ls-remote` and say so plainly rather than reporting a branch deleted. The
  **ship-to-main** skill has the procedure, the exact failure text and the routes
  that are also blocked.
- **Before deleting any branch you did not just ship, check whether it heads an open
  pull request.** Deleting the head branch closes the PR. The repository's own rule is
  that there are no pull requests, so it is easy to forget that fourteen are open
  anyway, mostly opened from other tools. In the 2026-09-26 batch pass exactly one
  branch of 56 was an open PR's head, #7, and nothing about the branch itself said so:
  it is four months stale, it is named like every other agent branch, and its work was
  retired from the repository weeks ago. `list_pull_requests` with `state: open` and a
  `grep -Fxf` against the delete list is the whole check.
- The rule in `.github/branch-ruleset.json` is applied, as of 2026-09-01: the API
  reports `main` protected. Committing directly to `main` no longer works, so the
  branch-then-fast-forward flow above is the only route and the escape hatch this
  line used to describe is gone.

### The teaching freeze, retired

**Retired 2026-09-24, on Jeff's word.** From 2026-09-22 a topic was frozen from the
start of its Green day through the end of its Silver day, and
`scripts/check-teaching-freeze.js` refused any change to it in CI, in the pre-push
hook and in the ship-to-main skill. None of that runs any more, and a change to a topic
being taught ships the same way as any other change. The checker, its library and its
test are in `archive/teaching-freeze/`, with a README saying how to restore them. Do
not rebuild it here without reading that README first.

## The Gate

The contracts below are enforced by machine, not by memory.

- `npm test`, the gate. Runs `validate.js` plus every other dependency-free
  check, in a few seconds. This is what the pre-push hook and CI both run, and it
  is the only command you need to remember.
- `npm run test:browser`, the Chromium contracts. Needs `npm i playwright-core`.

**No count is written down here on purpose.** `SUITES` in `scripts/run-tests.js`
is the list, the runner prints how many it is about to run, and a number typed
into prose stops being true the first time a check is added and says nothing when
it does. This file said "the two dependency-free tests" and "the seven Chromium
tests" until 2026-09-14, when the real figures were 14 and 13. Read the count off
a run.
- `npm run test:all`, both suites.
- `npm run hooks:install`, point git at `.githooks/` so `npm test` runs before
  every push. `npm install` does this automatically. Override once with
  `git push --no-verify`.

**The hook is a convenience, not the enforcement.** It has to be installed, it
is one flag away from being skipped, and on a machine with no `node` on PATH it
prints a line and exits 0, so a push from there runs nothing at all. CI and the
branch rule are what actually gate `main`; the hook exists to save you the round
trip, not to be relied on.

**Exit code 2 means skipped, not passed.** Every browser test exits 2 when
playwright-core is absent, because `validate.js` must stay runnable on a bare
checkout and the browser dependency is never installed by default.
`scripts/run-tests.js` honours that locally. Anywhere the dependency is supposed
to be present, pass `--strict`, which turns a skip into a failure, so a browser
job can never pass green having run nothing. Both CI workflows use `--strict`.

`.github/workflows/validate.yml` runs on every push and pull request, in two
jobs: `structure` deliberately runs with no `npm install` at all, which is what
keeps the offline suite honestly dependency-free, and `browser` installs
Chromium. `.github/workflows/nightly.yml` runs the checks that cannot sit on the
push path: `check-image-urls.js` needs commons.wikimedia.org, and a third party's
outage must never fail your commit.

### The branch rule

`.github/branch-ruleset.json` is the protection rule for `main`, kept in the repo
rather than only in the web UI so it can be reviewed and restored. Apply it with:

```bash
gh api --method POST /repos/JeffAndersonLogic/ap-world-history/rulesets \
  --input .github/branch-ruleset.json
```

It does three things: `main` cannot be deleted, `main` cannot be force-pushed,
and both Validate jobs must have passed on a commit before it can land there.

**This changes the Git workflow above.** Required checks cannot pass on a commit
that has not been pushed anywhere yet, so committing straight to `main` stops
working. The replacement is still not a pull request: push the work to any
branch, let Validate go green on it, then fast-forward `main` to that same
commit.

The wait is smaller than it looks. Both jobs run in parallel and the slow one is
`browser` at roughly two minutes, about 27s of that installing Chromium and the
rest running the suite; `structure` finishes in seconds. Required checks also bind to
the commit SHA rather than the branch, so once they are green on a working
branch, fast-forwarding `main` to that same commit is accepted straight away.
The two minutes runs alongside whatever you are doing, not in front of it.

If a broken CI ever blocks an urgent classroom fix, set the ruleset to
`"enforcement": "evaluate"` in Settings, Rules, rather than reaching for a force
push. That keeps the record of what it would have caught.

