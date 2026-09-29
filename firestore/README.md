# Firestore security rules

`firestore.rules` is the security model for BeHistorical student response
persistence. In Firestore the rules are the entire protection: no application
server sits in front of this and nothing sits behind it, so a wrong line here is
every student's writing readable by anyone who can sign in.

**Nothing in the student-facing site reads or writes Firestore yet.** This is
Phase 2 of the persistence plan in AndersonLogic-OS at
`04_PRODUCTS/BeHistorical/Student-Response-Persistence-Architecture-2026-09-08.md`.
ZCS approved the free Spark plan and confirmed FERPA on 2026-09-29. Under-18 app
approval in the Workspace Admin console is still outstanding, and until it lands
no student can sign in at all.

## The record

`tenants/{tenantId}/responses/{responseId}`, flat, with tenant identity in the
path and everything else as ordinary fields. Two levels of path is what keeps
these rules short enough to audit, which is the one thing here that cannot be
got wrong. The field list is in the rules as a closed allowlist.

## Tenant identity comes from the email domain, and that is a Spark constraint

Custom claims would be the clean way to say which district a caller belongs to.
Setting one needs a Cloud Function on the auth trigger, and **Cloud Functions
require the paid Blaze plan**, which ZCS finance declined. So `tenantOfCaller()`
derives the tenant from the caller's verified Workspace email domain instead.
Google asserts the domain; we do not.

The domain map lives in the rules rather than in a config document, because a
config document is a read on every request and a second thing to secure. Adding
a district is one line.

**If this ever moves to Blaze, revisit this first.** It is the one design choice
made against a billing constraint rather than a security one.

## What an external review changed, 2026-09-29

The first version protected confidentiality well and bounded write volume badly.
Seven findings were taken:

1. **The document id is derived, not chosen.** Previously any signed-in student
   could create unlimited documents by varying `responseId`, since every create
   satisfied every other check. A client bug looping on create would have
   manufactured a new document per iteration. The id is now
   `{uid}__{topicKey}__{slotId}`, so one response has exactly one address and a
   loop rewrites a document instead of creating millions. **This was the biggest
   hole and it was invisible: the rules compiled, denied outsiders, and passed
   every check.**
2. **Timestamps are the server's.** `updatedAt == request.time` on every write
   and `createdAt == request.time` on create. A client-supplied timestamp makes
   the conflict rule guessable and lets a device backdate a write to win a merge
   it should have lost.
3. **An update may only touch `text`, `confidence`, `updatedAt`, `clientId`**,
   via `diff().affectedKeys().hasOnly(...)`. Without it a student who owns a
   record could move their Checkpoint 2 answer onto the Map slot.
4. **`confidence` is required and may be `''`.** It was optional while the rule
   read it unconditionally, which in Firestore denies by evaluation error rather
   than by decision. A latent, confusing failure.
5. **Every permitted field is bounded**, not only the required ones.
   `topicKey` and `slotId` are shape-matched rather than enumerated: enumerating
   would put a second copy of the lesson inventory in the security model and it
   would go stale silently.
6. **The size ceiling is stated in characters**, because Firestore's
   `String.size()` counts characters, not bytes. The old comment said KiB.
7. **The sign-in provider is pinned to `google.com`.** Verified district email is
   the real check; the pin means enabling another sign-in method later cannot
   quietly widen who satisfies it.

**Queries are now tested, both directions.** Rules are not filters: a `list`
whose query does not itself guarantee the constraint is refused outright rather
than narrowed. The emulator test asserts that a query constrained to the
student's own records is allowed and that an unconstrained one is not.

### The rate limit that is not here, and why

The review also suggested a server-time minimum update interval in the rules, so
a loop hammering one document would be throttled. **Declined, deliberately.**

Firestore's offline persistence queues mutations and flushes them on reconnect.
A student who worked through a dropped wifi period, or on the bus, comes back
with several queued writes to the same document arriving within milliseconds of
each other. A minimum-interval rule would reject some of them, and a rejected
mutation is **reverted** by the client SDK. That is not a throttled loop, that is
a student losing the paragraph they wrote offline, which is the exact failure
this entire project exists to prevent.

So the layering is: **the rules bound document count, the client bounds write
rate, and the free plan's daily quota is the backstop.** Deriving the id closes
the unbounded-creation hole completely and costs nothing. Bounding the rate is
the sync layer's job, where a rejected write can be retried instead of lost.

Worth being honest about what that leaves: a determined person with a valid ZCS
account could still burn the daily quota by rewriting one document in a loop. On
the free plan that costs nothing and produces an outage rather than a bill, which
is the containment, and it is why the free plan is the right place to start.

## Deletion is refused for everyone, including the author

This system exists because student work vanishes. A delete path a student can
reach is one more way for it to vanish, and at the database "I deleted it by
accident" is indistinguishable from the failure the project was installed to
fix. District retention and deletion are administrative operations run with
admin credentials, which bypass rules by design.

## The size ceiling is a cost control, not just an abuse control

Firestore **cannot be spend-capped**. Google's native spend caps cover Firebase
AI Logic, App Hosting, Cloud Functions and Extensions; Firestore is not among
them, and Firestore operations take no configurable quota either. On the free
plan the daily quota is the hard stop. The per-document ceiling in these rules
is the other one, and it is the only limit that applies per write rather than
per day. Losing it is silent.

## Two checks, and they answer different questions

**`node scripts/check-firestore-rules.js`** is offline, dependency-free, and in
the push gate. It cannot evaluate the rules. It catches the shapes that are
catastrophic on their face, above all the single line that has leaked more
Firestore data than every other mistake combined:

```
allow read, write: if request.auth != null;
```

It strips comments before parsing, which is not tidiness: the prose in
`firestore.rules` explaining why a catch-all deny is useless contains that exact
literal, and the first version of the checker read its own documentation as code
and passed on it.

**`node scripts/test/firestore-rules.test.js`** runs the rules against
Firestore's own engine and is the check that actually knows whether the model
works. It needs the emulator:

```bash
npm i -D @firebase/rules-unit-testing firebase-tools
npx firebase emulators:exec --only firestore \
  "node scripts/run-tests.js rules --strict"
```

It exits 2 and prints SKIP when those are absent, the same contract every
browser test here follows. **A SKIP is not a pass**, and neither CI workflow
runs this yet. That gap is real and written down rather than papered over: what
gates a push today is the textual check.

Both carry their own negative controls, because a green from a check never shown
capable of failing is an assumption rather than evidence.

## Still to do before anything reaches a student

- **App access configuration in the ZCS Workspace Admin console. Nothing works
  without it.** Students designated as under 18 are blocked from any third-party
  app that has no access setting yet, which is the default for Education
  accounts rather than something a district switches on. There is no
  "allow unconfigured apps for minors" toggle to look for: configuring the app
  *is* the mechanism. **The setting to request is Limited, not Trusted.** Limited
  permits sign-in and unrestricted profile data, which is all this needs; Trusted
  would grant restricted Google services the app never touches.
- A ZCS-owned project for the rules to be deployed into.
- **Run the emulator test.** It has never been executed: it was written in an
  environment with no emulator and it SKIPs. Until it goes green once, the rules
  are written and gated textually and verified by nothing. Do not describe them
  as tested.
- A second pair of eyes on this file from someone on the district's Cloud team.
- The emulator in CI, so the real check gates rather than skips.
- The sync layer itself, which does not exist. `assets/js/behistorical-save-health.js`
  currently projects what it *would* write; it writes nothing anywhere.
