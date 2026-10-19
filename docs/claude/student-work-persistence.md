# Student Work Persistence: Save Health, Firestore Rules, Response Backup

Moved word for word from `CLAUDE.md` on 2026-10-16 so the rulebook every session loads stays short (Jeff's decision, recorded in AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`). It is as binding as it was there: read it before changing anything it covers. A comment elsewhere that says "see <section> in CLAUDE.md" means this file; `CLAUDE.md` lists where each section went.

## Save health

A student's work is saved in the browser on their Chromebook, and roughly two
students a day lose it. Until now that loss was **silent**: nothing counted it,
nothing reported it, and every check in this repository stayed green through all
of it. "About two a day" was an anecdote, and an anecdote cannot tell you which
of four causes you are looking at.

`assets/js/behistorical-save-health.js` is the counter, and it is the one
implementation. `scripts/build-save-health.js` inlines it into both renderers
between sentinels, for the same reason the coach prompt builder and the
classroom config are inlined: another `<script src>` would be a sweep across
hundreds of hand-authored shells, and every sweep script here is permanent
maintenance debt.

**It counts whether a save worked. It never records what was written.** No
vendor, no network, no authentication, and nothing leaves the device. This is
Phase 1 of the persistence plan in AndersonLogic-OS at
`04_PRODUCTS/BeHistorical/Student-Response-Persistence-Architecture-2026-09-08.md`,
which is the only phase authorized. Phase 2 onward is a proposal awaiting
district decisions and nothing here anticipates them.

**Why the baseline matters more than the number does today.** Once cloud
persistence ships, a student reporting lost work cannot be told apart from this
same failure still running unless there is a figure from before. That is the
whole reason diagnosis runs in parallel with the build rather than after it.

**What it cannot do, which decides how to read the output.** The record lives in
the storage it is measuring, so a wipe takes the evidence with it. It cannot
report its own erasure. What it reports instead is a record that has come back
**new**: a `firstSeen` of today and a `loads` count of 1, on a student who has
been in this course for weeks, means **this storage was cleared**. It does not
say by what. Browser eviction, a district cleanup policy, a different Chromebook
profile, a cleared-site-data event and a first load after a deploy all produce
the same fresh record. Read a reset record as a question worth chasing, not as
an answer and not as the absence of one.

**`persisted: false` is not a cause either.** It means this site's storage is
best-effort and may be evicted by the browser under storage pressure, which is
the normal state for a plain website. That keeps browser eviction a live
candidate. It does not establish what any particular student lost work to, and
this section exists partly because the first draft of that comment said it did.

**`ok` is a slight undercount and `failed` is not.** Successful writes are held
in memory and flushed at most once every five seconds, plus on `pagehide`, so a
crash or a killed tab can lose a few of them. Failures flush immediately. Do not
compute a failure rate from the two without accounting for that.

**Two keys stay separate, and one of them is load-bearing.** The record is
stored under `behistorical-save-health`, deliberately outside the
`behistorical-draft-` prefix, because `collectLessonWork()` sweeps every key
under that prefix and treats what it finds as student writing. A telemetry key
inside it would be pasted into Canvas as though it were an answer. This is the
same trap the confidence keys already document.

**The telemetry writes through raw `localStorage`, never through
`BHDraftStore`.** A write that went through the store being measured would
recurse on failure, and would land in the sweep above.

**Reading it takes standing at the device**, which is the honest scope of a
browser-local diagnostic. `window.BHSaveHealth.report()` in dev tools prints the
record. Nothing routes it to the teacher yet, and nothing should be bolted onto
the Canvas record footer to do so without reading `docs/CANVAS-CAPTURE.md`
first: everything printed between a record's label and the footer is hashed into
that record, so a loose diagnostic line would flag a student's honest work as
`EDITED`.

**Two checks, because the failure is silent in both directions.**
`build-save-health.js --check` runs in the offline suite and fails on a
hand-edit to either inlined copy. `scripts/test/save-health.test.js` proves the
behavior, against the real `BHDraftStore` lifted out of each renderer rather
than a copy written for the test, because a test that reimplements its subject
can only say that the test is self-consistent. It carries its own negative
controls: three real ways the wiring could be reverted, each of which must turn
the assertions red.

### The sync projection, added 2026-09-21

The same module also counts **what a Firestore sync layer would have written**,
which is the one number ZCS finance actually asked for. Dan Layton's reply to the
Firebase request asked how many writes a day this would be, because the district
has been billed for a runaway loop before. Arithmetic off the lesson data is an
estimate somebody can argue with; a count taken on the Chromebooks, in the room,
over a fortnight is not.

**Still Phase 1.** No vendor, no network, no authentication, no database. The
projection is arithmetic over the timestamps of saves that were already
happening, and it persists counts and nothing else.

**The policy is part of the number, so it is stored beside it.** A cloud write is
not a local write: `BHDraftStore` autosaves 600ms after a student stops typing,
which across one checkpoint answer is dozens of writes, and mirroring that to
Firestore one for one *is* the runaway shape the district is afraid of. The
proposed sync layer coalesces per response slot, and `SYNC_COALESCE_MS` is that
window. A write count read against the wrong window is worse than no write count,
so `coalesceMs` travels inside the record. **Do not quote a figure without it.**

**It is a floor, not a ceiling.** A leading-edge throttle: one write per window
per slot, plus one tail flush per slot still dirty when the page goes away. It
does not model retries, an offline queue draining, or the reads a student's own
records cost at page load.

**Two data models are projected, not one, because the write count is a fact
about the schema as much as about the students.** Firestore bills per *document*
write. The architecture record proposes one record per response slot; a second
reading of the problem proposed one consolidated document per student and topic.
`slotWrites` and `docWrites` count both, from the same saves against the same
window, so the only thing separating the two figures is the schema. A lesson page
serves one topic, so every key written from it belongs to that topic's document,
which is why the consolidated model needs no key parsing and never has to learn
how a draft key is spelled.

**The consolidated model is worth far less than it looks, and the projection is
what says so.** Consolidating sounds like it should divide the bill by the number
of slots. It does not, because students work modules **sequentially**: one box at
a time, so a per-slot throttle and a page-wide throttle are counting almost the
same windows. Modelled against a typical required set, 31 minutes of typing
across seven slots, the multiplier is 1.06x at a 10-second window and 1.36x at
60. **The throttle interval is the lever and the schema is not**: 10 seconds to
30 cuts writes by about 62%, which is twenty times what the schema buys. Choose
the data model on the conflict rule, which is what the architecture record
already does, rather than on cost. `syncReport()` prints the live multiplier, so
this stops being an argument the moment there is a fortnight of data.

**`busiestMinute` is the runaway detector, and it is a maximum on purpose.** A
write loop barely moves a daily average on the day it starts and pins one minute
immediately. `days` is the per-class-day rollup, capped at `SYNC_DAY_CAP` and
keyed off the **local** date: `toISOString` is UTC and would file a student
working after practice under tomorrow, which is the call BeCurrent's Desk already
refuses by name.

**The draft key reaches the projection and is never stored.** It arrives as the
third argument to `recordWrite` and is used as an in-memory map key only, because
a draft key names a topic and a slot. `window.BHSaveHealth.syncReport()` prints
the per-day table at the device.

**`SCHEMA` deliberately stayed at 1.** Bumping it would have made `readRaw`
discard every existing record, resetting `firstSeen` across the course at once,
which would make every device look freshly cleared and destroy the only signal
this file has about storage being wiped. A record with no `sync` is backfilled in
`load()` instead.

**Three assertions carry it**, all offline, all in the push gate: that autosaves
inside one window project one write, that the window expires, and that coalescing
is per slot rather than page-wide. A fourth negative control was added with them,
because dropping the key from the `recordWrite` call turns every sync figure to
zero while every other check in the file stays green.

**Three write paths exist and only one is instrumented so far.** The renderers
go through `BHDraftStore`; the 77 First & 10 readings carry their own capture
block; the BeInTheRoom scenarios go through
`assets/js/behistorical-beintheroom-capture.js`. The other two are not counted
yet, so today's figure is a floor rather than a total. Instrument them before
quoting a course-wide number.

**The three paths do not save at the same cadence, and one of them has no
throttle at all.** The renderers debounce 600ms
(`assets/js/behistorical-topic-renderer-v1.js`), the readings 500ms
(`scripts/lib/first10-capture-block.js`), and **BeInTheRoom writes on every
`input` event**, which is every keystroke
(`assets/js/behistorical-beintheroom-capture.js`). That is correct and
deliberate for `localStorage`, where a write is free and the load-time restore
rule described above is what actually protects the student's reflection. It
would be indefensible against a billed database. **Nothing may mirror a local
write to a cloud one-for-one**, and the keystroke path is the reason that
sentence is in this file rather than assumed: any sync layer is a separate
throttle over all three, never a hook on the existing ones.

## Firestore security rules

`firestore/firestore.rules` is the security model for student response
persistence, and `firestore/README.md` is the standing explanation. **The backup
is on for every student as of 2026-10-07**, see "Student response backup" below.
ZCS IT confirmed on 2026-10-05 that app access is configured as Limited for ZHS
students and staff, which was the Admin-console gate; what is still open is in
that section.

**The rules accept two email domains, both mapped to the one tenant:**
`zcs.k12.in.us` for staff and `stumail.zcs.k12.in.us` for students. They accepted
staff only until 2026-10-05, which would have refused every student on the first
save with "tell your teacher". It is an exact match on the whole domain after the
`@`, never a suffix test, and the emulator test carries four lookalikes
(`evilzcs.k12.in.us`, `notstumail.zcs.k12.in.us`, `stumail.zcs.k12.in.us.evil.com`,
`lab.stumail.zcs.k12.in.us`) plus a mutation turning the check into a suffix match.
That mutation is what showed the first version of those lookalike assertions were
refused for the wrong reason (a slot id that did not match the derived document
id), so they proved nothing until it was fixed. A negative control earned its keep.

ZCS approved the **free Spark plan** and confirmed FERPA on 2026-09-29, after
Finance declined open-ended billing. Three things follow from that and none of
them are cosmetic:

**Firestore cannot be spend-capped, so the free plan's daily quota is the only
hard financial stop.** Google's native spend caps cover Firebase AI Logic, App
Hosting, Cloud Functions and Extensions; Firestore is not on the list and takes
no configurable operations quota either. A runaway loop on Spark produces an
outage; the same loop on Blaze produces an invoice nobody can bound. **Do not
"upgrade to Blaze to be safe."** It is strictly less safe financially, and it is
a decision that has to go back through the district.

**Spark has no Cloud Functions, so tenant identity is derived from the verified
Workspace email domain rather than from a custom claim.** That is the one design
choice in this file made against a billing constraint rather than a security one,
and it is the first thing to revisit if the plan ever changes.

**The per-document size ceiling is a cost control.** It is the only limit that
applies per write rather than per day, and losing it is silent.

**Deletion is refused for everyone, including the author.** A system installed
because student work vanishes does not ship a delete button a student can reach.

**Two checks, and the split is the usual one.** `scripts/check-firestore-rules.js`
is offline, dependency-free and in the push gate; it cannot evaluate the rules and
only catches the shapes that are catastrophic on their face, above all
`allow read, write: if request.auth != null`. `scripts/test/firestore-rules.test.js`
runs them against the real engine and needs the emulator, so it exits 2 and SKIPs
on a bare checkout, in its own `rules` suite rather than folded into `browser`.
**Neither CI workflow runs it yet**, which is a real gap and is stated in the
README rather than papered over.

**It has now been run: green on 2026-09-29**, 37 assertions and 8 negative
controls, no rule changes needed. `npm run test:rules:emulator` is the one
command, after `npm i --no-save firebase-tools firebase @firebase/rules-unit-testing`.
The install is `--no-save` for the same reason `playwright-core` is: 731 packages
in `devDependencies` would be installed by every CI job including the ones that
never run this.

**Production Firestore is deny-all and these rules are not deployed.** The
project is `behistoric`, created by ZCS IT on 2026-10-05 with Jeff and JJ Nielsen
as owners, on the free Spark plan, with a Standard-edition `(default)` database in
us-east5 (Columbus) started in production mode, so `allow read, write: if false`
is live, which is where it stays until a person reviews and decides. An earlier
project, `behistorical-zcs`, was made on 2026-09-29 and is superseded; it is not
used, and nothing in the site ever read or wrote it. **Nothing here deploys**:
there is no `firebase deploy` in any script, and adding one is a decision rather
than a convenience.

**An external review on 2026-09-29 found the rules protected confidentiality
well and bounded write volume badly**, and the fix is the shape of the data
rather than a new rule. The document id is **derived**,
`{uid}__{topicKey}__{slotId}`, because before that any signed-in student could
create unlimited documents by varying the name and every create passed. Six other
findings were taken with it: server-pinned timestamps, `affectedKeys().hasOnly`
so an edit cannot move a record to another topic or slot, `confidence` required
rather than read-when-absent, every optional field bounded, a character-count
ceiling stated as characters, and the sign-in provider pinned. `firestore/README.md`
lists all seven.

**A rules-level rate limit was suggested and declined, and the reason is the
whole project.** Firestore's offline persistence flushes queued mutations on
reconnect, so a minimum-interval rule would reject some of them, and a rejected
mutation is reverted by the client SDK. That is a student losing what they wrote
on the bus, which is the failure this system exists to prevent. **The rules bound
document count, the client bounds write rate, and the daily quota is the
backstop.**

**The offline check strips comments before parsing, and that is load-bearing.**
The prose in `firestore.rules` explaining why a catch-all deny is useless contains
the literal `allow read, write: if false;`. The first version of the checker
counted five allow statements in a file with four and reported a wildcard block
that does not exist as safely denied. It passed, on a comment. A checker that
reads documentation as code can be made to pass by writing a sentence.

## Student response backup

`assets/js/behistorical-sync.js` backs a student's work up to Firestore and puts
it back on a device that lost it. **It is on for every student as of 2026-10-07.**
`scripts/lib/sync-config.js` is the only switch: `enabled` is true and `pilot` is
false. Setting `enabled` false and shipping turns it off again for everyone, and
`mount()` then returns before it builds an element or makes a request, so a page
makes no call to Google and leaves nothing of its own in storage.
`scripts/build-sync.js` inlines the config and the engine into both renderers
between sentinels, for the reason the save counter is inlined; `--check` is in the
offline suite. Never hand-edit between the sentinels.

**It is a separate layer over the three save paths and never a hook on them.** The
renderers save 600ms after a keystroke, the readings 500ms and BeInTheRoom on every
keystroke. All correct for `localStorage` and indefensible against a billed
database. So the engine is not called from any writer. It reads the same
`collectLessonWork()` Gather All My Work reads, a few times a minute, and compares
it with what it last confirmed. That one list covers the renderer's drafts, the
First & 10 answers and the BeInTheRoom reflection, and a loop in any of the three
moves a snapshot and cannot move the write rate. The renderer supplies only two
things the engine cannot know: `slots()` and `apply()`, which puts a restored
answer back in the key that path reads (the First & 10 payload array, the
BeInTheRoom key, or the draft and confidence keys).

**Who bounds what.** The rules bound how many documents can exist (the id is
derived). The engine bounds how often one is written: a slot at most once per
`windowMs` (30 seconds, which the sync projection puts inside the free plan's
20,000 writes), never twice inside `minGapMs` even as the page closes, one write in
flight, exponential backoff on failure, and a brake at `sessionCap` writes per page
load or `dayCap` per device per day that stops and says so. The free plan's
daily quota is the backstop. A rules-level rate limit was declined, see
`firestore/README.md`.

**The rule for two copies that disagree** is the architecture record's, and it is
`decide()`, a pure function with its own exhaustive checks. It uses a third value,
the baseline: a hash of what this device last confirmed. The hash is deliberate,
so the engine's own record never holds a second copy of a student's writing, and
it lives under `behistorical-sync-*`, outside the `behistorical-draft-<topic>-`
prefix `collectLessonWork()` sweeps, or it would be pasted into Canvas as an
answer.

- Nothing here and something in the cloud, nothing recorded: a new or wiped
  device. **Restore.** This is the case the project exists for.
- Nothing here and something recorded: the student cleared it. Leave it alone.
- Edited here only: push. Changed in the cloud only: take it.
- Both changed, or both non-empty with no baseline: **ask the student**, in a
  native `<dialog>`, and write nothing meanwhile. The losing copy is kept.
- **An empty answer is never written**, by two separate locks. A cleared box, a
  wiped store and a blanked textarea look identical to a sync layer, and one of
  them is the failure this exists to survive. The cost is that clearing an
  answer does not clear the cloud copy, which is the safe direction to be wrong in.

**Four save states, and "Saved" means safe off this device:** saving; saved; saved
on this device only (offline, or not signed in); save problem (a choice is
waiting, the account is refused, the daily quota is spent, or the brake tripped).
A spent quota and a refused account are `problem`, not `device`, because the whole
point is that failure is loud.

**Why the transport uses REST and not the Firestore SDK.** The SDK keeps its own
queue of unsent writes and applies them whenever it reconnects, underneath the
engine's queue and invisible to it, so a stale write could land after a newer one
or after the student had chosen a version in the dialog. REST has no hidden queue:
a write is acknowledged or it failed, and the engine, whose queue lives in the
student's own storage, is the only thing that retries. REST also gives the conflict
rule a precondition for free: an update names the `updateTime` it was based on and
the server refuses it if the document has moved. Sign-in alone uses the Firebase
Auth SDK, imported from Google's host at a version pinned in the config.
`behistorical-sync-transport.js` is loaded only when the backup is on.

**What was found by testing, and is worth knowing before changing any of it:**

- The rules answer an update to a document that does not exist exactly like a
  refusal, because there is no stored record to check ownership against. An
  administrator deleting a record (retention runs with admin credentials, which the
  rules cannot stop) would have turned a student's account into "not allowed".
  The transport now looks, and reports a missing record as a conflict.
- A create that is refused might be a race (the document is already there) or a
  real refusal. The transport tells them apart with a read.
- The `currentDocument: { exists: false }` precondition on a create is
  defense in depth: the rules refuse the same write independently, so removing it
  is not detectable by a test. It stayed anyway and is not claimed as covered.
- **Not checked yet is not signed out.** Until Google's sign-in library has
  loaded and restored the saved session, `user` is null for a student who is
  signed in, and on a school network that takes seconds on every page. The box
  showed "Back up my work" in that window, so Kelly's students were asked to sign
  in again on every topic (found 2026-10-09). Until the check finishes the box
  says "Checking your saved work." with no button; if the library cannot load,
  or has not answered within `bootWaitMs` (15 seconds), it shows the offline
  message, also with no button, because sign-in could not work then anyway.
- **That was not the whole cause, and the rest was one line.** The lazy loader's
  `ready()` resolved once the transport script had loaded and never called the
  transport's own `ready()`, so the sign-in library was not loaded and the saved
  session was never restored until a click on "Back up my work" loaded it. Every
  page looked signed out to everyone (Jeff confirmed it on his own laptop
  2026-10-09: the box read "Saved" with the account chooser still open). The
  browser test's stand-in transport used to answer `user()` before `ready()` had
  run, which is how this passed; it now returns null until then, and a negative
  control reverts the line.

**Turning it on is a decision with a list, and it is not one edit.**

1. ~~Fill in `firebase.apiKey`, `authDomain` and `appId`~~ **Done 2026-10-05**, from
   the console's web app registration. They identify the project and are not
   secrets. The registration also produced a Google Analytics `measurementId`,
   deliberately left out: nothing loads Analytics, and analytics over student
   activity is a separate ask to the district that has not been made.
2. Enable Google as a sign-in method (Authentication), confirm ZCS approved *that*
   OAuth client, and add the site's host to Authorized domains.
3. Deploy the current `firestore.rules` to the `behistoric` project after ZCS
   review. Production is deny-all until then, which is correct.
4. Run a pretend student through a full lesson with `pilot` and `?sync=on`, which
   switches the backup on for one browser only. Then set `pilot` false, because
   it is a hidden switch a curious student could find, and then `enabled` true.
   **Done 2026-10-07.** A student's answers were backed up from her own
   Chromebook and a second student's came back in a clean incognito window on a
   different computer, through the real district sign-in and the real database.
   Jeff published the rules himself for that test; ZCS's own review of
   `firestore.rules` is still outstanding and is the first open item.

**One account owns a device, and a second one is refused.** The first account to
sign in on a browser is written to `behistorical-sync-owner` (a Firebase user id,
never a name or an email, outside the draft prefix). A different account signing
in there, or switching accounts inside one page, reads nothing, restores nothing
and writes nothing, and the box says the backup is paused and to tell the
teacher. Before this the engine treated whatever was saved in the browser as the
signed-in student's, and would have uploaded the first student's answers under the
second. A request still in flight for the last account is discarded rather than
applied to the next. **What it cannot do** is know who typed what was already
there before the first sign-in, so a loaner or inherited Chromebook whose site
data has not been cleared belongs to whoever signs in first. Clearing the site
data for the address is how a person hands a device on. Students keep one
Chromebook for years, which is why this was judged enough. `sync-engine.test.js`
carries three negative controls for it.

**The iPhone sign-in fails and is a known gap.** The sign-in opens a pop-up on
`behistoric.firebaseapp.com`, and iOS Safari (every browser on an iPhone) keeps the
page and the pop-up from sharing storage, so the handler stops with "missing
initial state". It worked once and failed once on the same phone. The fix is
Google's own sign-in button with `signInWithCredential`, which also stops depending
on `firebaseapp.com`, which the district filter blocked until JJ Nielsen allowed
it. It needs the sites added as authorized JavaScript origins on the OAuth client
(`jeffandersonlogic.github.io`, later `behistorical.com`). Not built.

**Storage belongs to the address, and the site is moving to behistorical.com.**
`localStorage` is per origin, so a student's saved work, the backup's own record,
the `?sync=on` pilot flag and Kelly's `?classroom=kelly` choice all stay behind at
`jeffandersonlogic.github.io` and are invisible at the new address. GitHub Pages
also redirects the old address to a custom domain, so a student cannot simply
revisit it. The new domain has to be added to Firebase Authentication's
Authorized domains before sign-in works there (the OAuth client uses
`behistoric.firebaseapp.com` and does not change). The backup is what makes the
move survivable: the new address looks to the engine exactly like a wiped device,
so work already uploaded comes back. Work that was never uploaded does not.

**What it does not cover, stated so nobody assumes it does.** The lesson page has
to be open for the engine to run: a BeInTheRoom reflection typed in its own tab is
backed up by the lesson tab that opened it, and one typed after the lesson tab was
closed waits for the next time the lesson opens. The conflict dialog keeps the
losing copy on this device only; the architecture record asked for the last few
versions in the cloud, which needs a field the rules do not allow yet and is
unbuilt. Google sign-in, the popup and the real Workspace setting are untested
here, and are exactly what the pretend student is for.

**Four checks, because each failure is silent in a different way.**
`sync-engine.test.js` (offline) proves the decisions, the brake and the sign-in
domain logic against a fake server and a virtual clock, with thirteen negative
controls. `sync-page.test.js` (browser) proves the real lesson pages: silent when
off, restore into the keys each path reads, typing noticed, the dialog, offline,
Foundations, with its own controls. `sync-transport.test.js` (the `rules` suite)
runs the real requests and the engine against the emulator with the real rules.
`firestore-rules.test.js` holds the rules. The last two need the emulator and
SKIP without it; a SKIP is not a pass.
