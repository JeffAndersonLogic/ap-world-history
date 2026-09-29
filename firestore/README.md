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
- A second pair of eyes on this file from someone on the district's Cloud team.
- The emulator in CI, so the real check gates rather than skips.
- The sync layer itself, which does not exist. `assets/js/behistorical-save-health.js`
  currently projects what it *would* write; it writes nothing anywhere.
