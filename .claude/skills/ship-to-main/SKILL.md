---
name: ship-to-main
description: "Get a finished, tested BeHistorical change onto main, which GitHub Pages serves to students, using the branch-then-fast-forward workflow instead of a pull request, then deleting the working branch. Use whenever Jeff says 'ship this', 'push it live', 'get this to main', 'publish to students', 'deploy this', or when you've finished a change and CLAUDE.md's git rules apply. Also use to check whether the branch-protection ruleset is applied yet, or to apply it."
---

# Ship a BeHistorical Change to main

`main` is the deploy branch: what's on it is what students see. There are no pull
requests here. The flow is: push the work to any branch, wait for both Validate jobs to
go green on that exact commit, fast-forward `main` to it, then delete the branch.

**Whether this matters depends on one fact you should check first**: has
`.github/branch-ruleset.json` (name: "Protect main") actually been applied to the repo
yet? If not, CLAUDE.md says committing straight to `main` still works and nothing stops
an untested commit reaching students, so the safest habit is to follow this flow either
way rather than relying on protection that may not be active.

## Step 0: Check whether the ruleset is active

```bash
gh api repos/JeffAndersonLogic/ap-world-history/rulesets --jq '.[].name'
```

If `Protect main` is not listed, the ruleset has not been applied. Apply it (only if
Jeff asks you to, this changes how pushes to `main` behave for good):

```bash
gh api --method POST /repos/JeffAndersonLogic/ap-world-history/rulesets \
  --input .github/branch-ruleset.json
```

If a broken CI is blocking an urgent classroom fix and the ruleset is already active,
the documented escape hatch is setting `"enforcement": "evaluate"` on the ruleset in
GitHub Settings → Rules, not a force push. Only do this if Jeff explicitly asks; it is a
shared-state change like any other in the "actions visible to others" category.

## Step 1: Validate locally before pushing anything

```bash
npm test              # scripts/validate.js + the offline tests, about five seconds
```

If you touched a modal open/close path, the deck, the coach paste, the Skills Lens, or
any of the browser-only contracts, also run:

```bash
npm run test:browser  # needs `npm i playwright-core` once
```

If `.git/hooks` is wired via `npm run hooks:install`, `npm test` already runs on every
`git push` and a failure blocks it; that is a backstop, not a substitute for running it
yourself first, since a blocked push after real work is done is a worse moment to find
out.

Do not push on a hunch that it's fine. A push that turns CI red costs a cycle and, once
the ruleset is active, blocks `main` from moving at all until it's fixed.

## Step 2: Commit and push to a working branch, never straight to main

```bash
git add <files>
git commit -m "..."
git push -u origin <branch-name>
```

Any branch name works; it does not need to be a `claude/...` branch unless you were
told to use one.

## Step 3: Wait for both required checks on that exact commit

The two required contexts (from `.github/branch-ruleset.json`) are:
- `Structure and offline tests`
- `Browser contracts`

Both run in parallel from `.github/workflows/validate.yml` on every push and pull
request. `structure` finishes in about 8 seconds; `browser` takes about two minutes (27s
installing Chromium, 82s running the seven browser tests). `.github/workflows/nightly.yml`
is separate and not a required check, it runs `check-image-urls.js` against
commons.wikimedia.org on a schedule so a third-party outage never blocks a push.

Poll:

```bash
gh run list --branch <branch-name> --limit 5
gh run watch <run-id>
```

Both must show success on the commit SHA you just pushed, not an older commit on the
same branch.

## Step 4: Fast-forward main to that commit

Required checks bind to the commit SHA, not the branch, so once both are green the
fast-forward is accepted immediately, no new CI run needed.

```bash
git fetch origin main
git push origin <branch-name>:main
```

This only succeeds if it's a genuine fast-forward (the ruleset's `non_fast_forward` rule
blocks anything else). If it's rejected because `main` moved since you branched, merge or
rebase `main` into your branch, push the branch again, wait for both checks to go green
on the new commit, then retry the fast-forward. Never force-push `main`.

Alternatively, if you'd rather work locally:

```bash
git fetch origin main
git checkout main
git merge --ff-only origin/<branch-name>
git push origin main
```

Both accomplish the same fast-forward; use whichever fits how you're already working.

## Step 5: Delete the working branch

**Do this every time, as part of shipping.** The branch has served its purpose the
moment `main` points at the same commit, and nothing in this workflow ever closes one
otherwise. By 2026-09-26 this repository had accumulated about 300 remote branches, of
which only 27 were ancestors of `main`; the rest were abandoned after `main` moved on.
At that size the branch list stops being usable, and no amount of later pruning fixes
the cause.

First prove the fast-forward actually landed and that the branch is now redundant:

```bash
git fetch origin main
git rev-parse --short origin/main <branch-name>        # must be the same commit
git merge-base --is-ancestor <branch-name> origin/main && echo safe to delete
```

Both checks matter. The first says the ship worked. The second says the branch holds
nothing `main` does not, which is the only condition under which deleting it is free.
If either fails, stop and say why rather than deleting.

Then delete it in both places, remote first:

```bash
git push origin --delete <branch-name>
git checkout main && git branch -D <branch-name>
```

**Confirm the remote delete really happened, because it can fail silently:**

```bash
git ls-remote --heads origin <branch-name>    # no output means it is gone
```

### A Claude Code web session cannot delete a remote branch

This is not a transient error and retrying does not help. The git proxy in that
environment drops delete refspecs: both `git push origin --delete <branch>` and the
explicit `git push origin :<branch>` come back with

```
send-pack: unexpected disconnect while reading sideband packet
fatal: the remote end hung up unexpectedly
Everything up-to-date
```

and the branch is still there. `Everything up-to-date` in reply to a delete means git
never sent it. There is no fallback either: the GitHub MCP toolset has `create_branch`
but no delete-branch tool, and those sessions have no `gh` CLI and no direct REST access.
Five retries with exponential backoff were tried on 2026-09-26 and all five failed the
same way.

So from a web session: **delete the local branch, attempt the remote delete, check with
`git ls-remote`, and if it is still there say plainly that it could not be deleted and
hand Jeff the one-liner.** Do not report a branch as deleted on the strength of the push
command not erroring, and do not describe the failure as a network blip.

```bash
git push origin --delete <branch-name>   # run this from your own clone
```

A local clone on Jeff's machine, or the trash icon on
`github.com/JeffAndersonLogic/ap-world-history/branches`, both work normally.

## Step 6: Confirm

GitHub Pages redeploys automatically from `main` on push (repo Settings → Pages, "Deploy
from a branch"). There is no separate deploy step. Tell Jeff the commit is on `main` and,
if it's a student-visible change, that Pages will pick it up on its normal schedule
(typically under a minute, but don't promise an exact time).
