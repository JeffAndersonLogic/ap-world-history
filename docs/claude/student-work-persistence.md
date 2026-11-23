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
(`behistorical.com` and `www.behistorical.com`). Not built.

**Storage belongs to the address, and the site moved to behistorical.com.**
The `CNAME` file at the repository root is what puts the site there; deleting it
sends the site back to `jeffandersonlogic.github.io`, where every student's work
would again look missing (`custom-domain.test.js` fails the push if it changes).
`localStorage` is per origin, so a student's saved work, the backup's own record,
the sign-in itself and Kelly's `?classroom=kelly` choice all stayed behind at
`jeffandersonlogic.github.io` and are invisible at the new address. GitHub Pages
also redirects the old address to the custom domain, so a student cannot simply
revisit it. The new domain has to be in Firebase Authentication's Authorized
domains before sign-in works there (the OAuth client uses
`behistoric.firebaseapp.com` and does not change). The backup is what makes the
move survivable: the new address looks to the engine exactly like a wiped device,
so once a student signs in again, work already uploaded comes back. Work that was
never uploaded does not, and a Kelly student gets Kelly's classroom back by
opening Kelly's link once more.

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

### Looking up one student's backup, added 2026-11-17

`scripts/backup-lookup.js` answers "did this student's work reach the backup?" for one
student: whether the account has ever signed in, when it was last active, and every
backed-up answer by topic, with a First & 10 question that never arrived named outright
and a plain-language reading of what the pattern means. It was built for a student who
kept losing her First & 10 answers.

**It is a command and not a teacher page, on purpose.** The rules let a teacher's browser
read only Checkpoint 1 and 2 of students on the class list, which is what Dan Layton
approved on 2026-11-05. A page that showed First & 10 would need those rules widened,
which is a district decision. Jeff chose (2026-11-17) the Cloud Shell route instead: it
runs with the project owner's administrator credentials, the same access he already has
in the Firebase console, so it needs no rules change and no new approval.

**Read only, and it prints the writing only when asked, one topic at a time.** Without
`--answers` it shows when each answer was saved, its length and its confidence, which is
enough to diagnose. `--answers` adds the text and refuses to run without `--topic`, so a
lookup to recover one lesson never prints a student's whole year. Nothing is saved to a
file. Times are Indiana time; Cloud Shell's clock is UTC.

**What it can say and what it cannot.** "Never signed in" is certain. A First & 10
answer marked NOT BACKED UP is certain about the cloud and says nothing about whether
the student typed it: the device is the only witness to that. More than one browser ID
across a student's records means a second computer or a Chromebook whose saved data was
wiped, because a wiped browser makes a new ID; it is the one server-side trace of the
wipes the save counter can only see at the device. Each record keeps only the ID of its
last write, so the count is a floor.

To run it (Jeff), in Cloud Shell, the same way as the class list:

1. Open **shell.cloud.google.com**, signed in with your school staff account.
2. Paste these lines, one at a time. If the `ap-world-history` folder is already there
   from setting up the class list, skip the first line and run `cd ap-world-history`
   then `git pull` instead.

   ```
   git clone --depth 1 https://github.com/JeffAndersonLogic/ap-world-history.git
   cd ap-world-history
   npm install --no-save firebase-admin
   gcloud config set project behistoric
   node scripts/backup-lookup.js STUDENT-EMAIL@stumail.zcs.k12.in.us
   ```

3. To focus on one lesson, add the topic: `--topic 2.6` (Foundations: `--topic F1`).
   To see the writing itself for that topic, add `--answers` as well.

If it stops with a message about credentials or a quota project, run
`gcloud auth application-default login`, follow the link it prints, and try again.

`scripts/test/backup-lookup.test.js` is offline and in the push gate: district accounts
only, `--answers` tied to one topic, a credentials failure never reported as "never
signed in", only the one student's records read, the text hidden unless asked, missing
First & 10 questions named, Indiana time, the browser count, and no write, with nine
negative controls.

## Class Pulse submission, added 2026-10-28

Class Pulse, the teacher view of Checkpoint 1 and 2 by criterion, reads only work
a student has **submitted**, because a backup snapshot can be half a sentence.
The build spec is AndersonLogic-OS
`04_PRODUCTS/BeHistorical/Class-Pulse-Spec-2026-10-27.md`.

**It is off.** `submit` in `scripts/lib/sync-config.js` is false, so no student
sees a Submit button, and it stays false until ZCS approves teacher reads of
submitted work. Like the rest of the config it is inlined by `build-sync.js`.

**The receipt is a fingerprint, not a copy.** Pressing Submit stores
`Submitted <date> · fingerprint <hash>` under `behistorical-submit-<topic>-<slot>`,
where the hash is the backup engine's own `valueHash` of the trimmed answer and its
confidence. The teacher side recomputes `valueHash` from the backed-up answer and
compares: equal means submitted and unchanged; different means changed since
submitted. Editing never unsubmits anything by itself, and confidence stays
optional, as it is everywhere else on the page.

**It rides the backup as an ordinary slot, so the engine and the rules did not
change.** The renderer appends receipts to `slots()` as `<checkpoint>-submitted`
and `syncApplyLocal` routes one back to its own key on restore. That slot has the
same derived document id, size ceiling and 30-second write window as every other,
so a receipt is at most one more document per checkpoint per student per topic,
and it needed no change to `firestore.rules` and no new ZCS review of them.

**The key prefix is load-bearing again.** `behistorical-submit-` sits outside the
`behistorical-draft-` prefix `collectLessonWork()` sweeps, so a receipt is never
pasted into Canvas as an answer. The browser test has a negative control that
moves it under the draft prefix and goes red.

**One check, in the browser suite.** `scripts/test/class-pulse-submit.test.js` runs
the real lesson page against the stand-in transport: off as shipped, the
fingerprint, the receipt reaching the backup, the teacher's reading of it, edits
and rating changes reading as changed, and a wiped device getting the receipt back
with the answer. Five negative controls.

### The coaching note, added 2026-11-07

**What it records.** When a student copies the AI Coach prompt for a checkpoint
(`copyCheckpointPrompt` in the unit renderer, on a successful copy only), the renderer
keeps a mark under `behistorical-coached-<topic>-<id>`, outside the draft prefix, so it
never reaches the Canvas paste. A Submit made after that writes the receipt as
`Submitted Nov 7, 9:14 AM · AI Coach prompt copied · fingerprint k2j3h4`. The student
sees the note in their own Submitted line. Only Checkpoint 2 has a coach, so in practice
only Checkpoint 2 carries it.

**Why the receipt and not a new slot.** The receipt slot already exists and the teacher
may already read it, so the note needed no new slot, no backup engine change and no
Firestore rules change. The fingerprint stays last, so every older reader of a receipt
still works.

**What the teacher sees.** `receiptCoached` in `teacher/class-pulse-live.js` reads the
note, and only for an answer whose receipt still matches it. After class shows
**Coached and not coached**: for each Checkpoint 2 criterion, the share demonstrating
among read answers in each group, a warning when a group is under five, and the plain
statement that copying the prompt is not proof the student used the coaching. The
response drawer says "Submitted after copying the AI Coach prompt."

**What it cannot tell you.** It does not see the MagicSchool conversation, so it cannot
tell a student who copied the prompt and ignored the reply from one who revised. A
student who copies on one device and submits on another loses the note, because the
mark is not backed up.

**Checks.** `class-pulse-submit.test.js` (browser) proves the note appears only after a
copy, reaches the backup, stays out of Gather All My Work, and is read by the teacher
side's own `receiptCoached`, with three negative controls. `class-pulse-page.test.js`
proves My class splits Checkpoint 2 by the note, with one negative control. The privacy
page says what the note records.

### Class view, added 2026-11-07

**What it is.** A Class Pulse tab for projecting at the start of a feedback session. For
the chosen checkpoint it shows the prompt, how many answers are in and read, a bar per
criterion, the criterion to revisit (the highest share not demonstrating, once three
answers are read) with the criterion's own rubric line when one is written, up to three
wrong ideas, and a model answer when the teacher presses Show.

**What it never shows.** No name, even with names switched on, and no "Student 01", since
a number in list order can be decoded. No student's words: wrong ideas pass through
`unquoted`, which replaces anything in quotation marks with an ellipsis. Nothing on it
opens an answer.

**Model answers stay out of this repository.** They hold answers, and every file here is
public (`scripts/test/no-answer-keys.test.js`). They are written in AndersonLogic-OS,
`04_PRODUCTS/BeHistorical/Assessments/Class-Pulse-Model-Answers/`, one paragraph per
criterion, and the teacher pastes one into Class view, where it is kept on that computer
only (`localStorage`, `class-pulse-model-<topic>-<checkpoint>`). When the paragraph count
matches the criteria, the revisited criterion's paragraph is highlighted.

**Students still writing.** The teacher-only line above the view says how many have not
submitted, and warns that they will see the model answer before they write.

**The feedback session marker.** In My class, with one class chosen, **Mark the feedback
session now** records the time on that computer (`class-pulse-session-<topic>-<cp>-<class>`;
one mark per topic, checkpoint and class, since each class meets on its own day). An answer
whose Submit receipt the database saved after that time (the receipt document's
`updateTime`, the server's clock, carried as `submittedTime` by `class-pulse-live.js`) is
marked: counted on Class view's teacher line, named in After class under **After the
feedback session**, and noted in the response drawer. Nothing is written to the database,
so a mark made on the classroom computer is not seen on another one. Demo has no real
submission times, so the button works only in My class. Checks: four in
`class-pulse-page.test.js`, with two negative controls.

**Checks.** `class-pulse-page.test.js`: no name, no answer text, a revisit criterion,
nothing clickable, the pasted model answer and its highlight, Hide, the teacher line, and
quoted words stripped from a pasted reply's wrong idea, with three negative controls. The
privacy page describes it.

### Class Pulse readers and calibration, added 2026-10-29

**Which AI reads the work is a setting.** `teacher/data/class-pulse-readers.js` lists the
readers (Claude's fast, everyday and most capable tiers, named by tier rather than model
version) and the readings each has recorded on the calibration page. The teacher page's
Reader menu replays a recorded reader through the real engine, offers a reader only for a
topic it has read, and the drawer shows every reader's level for the open criterion side by
side. In real use the menu lists only readers ZCS approves, and changing it reads the work
again.

**Calibration answers carry no levels.** `teacher/data/class-pulse-calibration-u3.js` is the
Unit 3 set, 104 invented answers judged against the Topic 3.1 to 3.4 descriptors in
`teacher/data/class-pulse-rubrics.js`. Their levels are settled on the calibration page by
review: where all four readers (three Claude tiers and ChatGPT, the last by copy and paste)
agree, that level stands; where they split, Jeff decides; ten unanimous answers are blind
spot checks. No other level may sit beside them, so the engine test fails if a row ever
gains a field beyond its id, topic, checkpoint and text, and Unit 3 readings stay out of the
readers file until the review is done. The calibration
page itself, and the scripts that rebuild it from this repository, live in AndersonLogic-OS
`04_PRODUCTS/BeHistorical/Class-Pulse-Calibration/`.

### Class Pulse by copy and paste, added 2026-10-30

**The pilot reads by copy and paste, not through a server.** Claude for Teachers and
ChatGPT for Teachers, the free accounts Jeff asked ZCS about on 2026-10-28, are chat apps
with no developer access, so no page can call them. On After class the teacher page offers
each checkpoint's submitted answers in batches of 15: **Copy batch**, paste into a new chat,
paste the reply back, **Read this reply**. The replies become one more reader, "Claude for
Teachers, pasted", and are kept for that page load only. The page still cannot reach the
network (`connect-src 'none'`); copying is the clipboard, not a request.

**What is copied is what the engine would send a model.** `teacher/class-pulse-handoff.js`
builds the text from the engine's own `INSTRUCTIONS`, the checkpoint contract with its
rubric, and the answer text, numbered A01, A02 and so on in fingerprint order. No name,
response key, class, confidence or timestamp, and two students with the same words are one
answer. Only work the engine's `eligibility()` accepts is copied, so drafts never are.

**The reply is never trusted.** It is read answer by answer with the engine's
`validateOutput()`, then run through the engine as a provider, so an invented quote, a
missing criterion, an answer left out or a rating given twice shows as Can't tell, and a
reply pasted next to the wrong batch is refused.

**A name off the record is not a name out of the writing, so each batch is checked
before it can be copied** (added the same day). `flagsFor()` in the handoff file flags what
a student may write about themselves: a capitalized word the course never uses as a name,
a family or life detail, a teacher's name, contact details, the school or class, and a
name signed at the end. The teacher removes each from the copy (it becomes `[removed]`;
a personal detail takes its whole sentence) or keeps it, and Copy waits until every flag
is decided. The student's work is unchanged, and the reading lands on the original
answer. "The course never uses" comes from `teacher/data/class-pulse-course-words.js`,
built by `node scripts/build-class-pulse-words.js` from the skills map, the CED source,
the readings, the lesson data and the decks, counting only words the course capitalizes
mid-sentence. A stale list only adds flags, so it is not a drift check in the gate;
rebuild it after adding a unit. Its limit: a student name that is also a history name
(Henry, Victoria, Madison) is caught only as a signature, after a title, or in a personal
sentence. On the 144 invented answers it flags three, all real history names the course
does not use (Blue Mosque, Counter Reformation, Francis Xavier).

**Real writing is off.** `APPROVAL` in the handoff file is `{ realWork: false }`. Invented
answers need no approval; real ones are offered for copying only once ZCS approves in
writing and `APPROVAL.reference` names who and when, and `privacy.html` must say what is
sent and where before that change reaches students.

**Checks.** `scripts/test/class-pulse-handoff.test.js` in the offline suite (thirteen
negative controls), and copy-and-paste and check-before-copying sections in
`scripts/test/class-pulse-page.test.js` (four more). The calibration practice that measures how Claude for Teachers reads a batch lives in
AndersonLogic-OS `04_PRODUCTS/BeHistorical/Class-Pulse-Calibration/`.

### Class Pulse, My class: reading submitted work and keeping ratings, added 2026-10-31

**What it does.** On the Class Pulse page, **My class** signs the teacher in with a school
staff account (the backup's own sign-in code, `createAuth` in
`assets/js/behistorical-sync-transport.js`) and reads, through Firestore's REST API with the
teacher's token, the Checkpoint 1 and 2 answers and Submit receipts of the students on that
teacher's class list (`teacher/class-pulse-live.js`). An answer counts as submitted only while
its receipt's fingerprint still matches it. Ratings pasted back are saved under
`tenants/zcs/pulse/{teacherUid}/ratings/{studentUid__topic__slot}` and read back on every
pull; a rating counts only for the exact answer it was made from (`answerFingerprint`). A
submitted answer with no rating shows as "not read yet", never as a level. Across the course
and One student stay demo-only and are switched off in My class. The project settings come
from `scripts/lib/sync-config.js` through `scripts/build-sync.js`, which also writes
`teacher/data/class-pulse-config.js` (staff domains only) and drift-checks it.

**What the rules allow** (`firestore/firestore.rules`, Jeff and Dan's process: summary and
exact file to Dan before publishing). A staff account (the staff domain exactly, never
stumail) may: read its own class list (`rosters/{teacherUid}` and `/students`); read, one
document at a time and never by query, the four checkpoint slots (`checkpoint-one-response`,
`checkpoint-two-response` and their `-submitted` receipts) of a student on its own list;
create and update its own ratings for students on its own list, shape-checked, with the
server's time. No browser can write a class list, the teacher's own included; it is written
with administrator credentials by `scripts/class-pulse-roster.js`. Student access is
unchanged. Each teacher read costs one extra read for the list lookup, so one pull of a
class of 25 is about 200 reads of the free plan's 50,000 a day.

**The page's network.** `connect-src` names Firestore and Google's two sign-in hosts and
nothing else; scripts may come from `www.gstatic.com` (the pinned sign-in library) and
`apis.google.com` (its popup helper). Demo contacts no Google host; the library loads only
when My class is chosen. AI reading stays copy and paste: no AI host is reachable.

**Checks.** `scripts/test/class-pulse-live.test.js` (rules suite) runs the module against
the real rules in the emulator, and loads the real rules first: the rules suite's negative
controls used to leave their last broken copy loaded for the suites after it, which
`firestore-rules.test.js` now also undoes when it finishes. `firestore-rules.test.js` gains
the Class Pulse assertions and seven mutations; `check-firestore-rules.js` gains six
invariants. `class-pulse-page.test.js` runs My class end to end against a stand-in for Google
served on Google's own addresses, so the real policy and requests run unchanged.
`class-pulse-roster.test.js` (offline) covers the setup script; it was also run against the
Auth and Firestore emulators with the real admin library on 2026-10-31. It has not been run
against the real project.

#### Setting up the class list (Jeff, once for all five classes)

Since 2026-11-06 the pilot covers all of Jeff's classes, G4 and S1 to S4, so one list holds
them all and every student on it carries their class. Class Pulse then shows **All my
classes** or any one of them from the class menu.

You need: your school staff account, which co-owns the `behistoric` Firebase project, and
one file listing your students. Keep the file on your own computer, never in this
repository. Its first line must be `email,name,section`, then one student per line:

```
email,name,section
ana.ruiz@stumail.zcs.k12.in.us,Ana Ruiz,G4
ben.cole@stumail.zcs.k12.in.us,Ben Cole,S1
```

Student addresses end `@stumail.zcs.k12.in.us`. The class is a short name like `G4` or
`S1`. A spreadsheet saved as CSV works: three columns, with those three words in the first
row. A student must have signed in to BeHistorical at least once; anyone who has not is
listed and left off, and the next run adds them. (A two-column `email,name` file for a
single class also works, with `--class S1` on the command line.)

1. Open **shell.cloud.google.com**, signed in with your school staff account.
2. In the Cloud Shell window, open the three-dot menu, choose **Upload**, and upload the
   file, for example `classes.csv`. It lands in your home folder.
3. Paste these lines, one at a time:

   ```
   git clone --depth 1 https://github.com/JeffAndersonLogic/ap-world-history.git
   cd ap-world-history
   npm install --no-save firebase-admin
   gcloud config set project behistoric
   node scripts/class-pulse-roster.js ~/classes.csv --teacher YOUR-STAFF-EMAIL@zcs.k12.in.us --approval "Dan Layton, emails of 2026-10-22 and 2026-11-05"
   ```

4. Read what it prints: how many students it found in each class, and who has not signed
   in yet. Nothing is written yet.
5. Run the last line again with ` --apply` at the end. It says **Done**.
6. Delete the uploaded file from Cloud Shell when you are finished: `rm ~/classes.csv`.

If it stops with a message about credentials or a quota project, run
`gcloud auth application-default login`, follow the link it prints, and try step 5 again.
Run it again any time to add students who have since signed in, or to move a student who
changed classes. `--remove-missing` takes off students who are no longer in the file, but
only in the classes the file covers.

#### What has to happen, in order, before My class works for real

1. Done 2026-11-05: Dan Layton approved, in writing, the rules change (summary and exact
   file, AndersonLogic-OS `04_PRODUCTS/BeHistorical/Rules-Change-Class-Pulse-2026-10-31.md`)
   and Claude for Teachers, once Jeff confirmed Class Pulse is formative only and never
   used for grades (Jeff's reading of the reply; record in AndersonLogic-OS
   `04_PRODUCTS/BeHistorical/Decisions.md`, 2026-11-05).
2. Jeff publishes the rules: Firebase console, Firestore Database, Rules, paste the whole of
   `firestore/firestore.rules`, Publish. A file in this repository is not a deployed rule.
   The file also carries the iPad remote block of 2026-11-04, beside the Class Pulse
   blocks, so publishing it publishes both.
3. Jeff sets up the class list for all five classes (above). Until 2026-11-06 this step
   was G4 only.
4. Shipped with the go-live release: `submit` in `scripts/lib/sync-config.js` is true, so
   students in Jeff's classes, G4 and S1 to S4 (never a named classroom such as Kelly's),
   see **Submit to your teacher**. A Submit works under the rules already published, because the
   student's own write is unchanged; it waits only on steps 2 and 3 to be read.
5. Shipped with the same release: `APPROVAL` in `teacher/class-pulse-handoff.js` is on for
   `claude-for-teachers` only, and `privacy.html` says what is sent and where. ChatGPT for
   Teachers stays shut; approving one service never opens the other.
6. Before the first paste of real writing, the district's acceptance of Anthropic's K-12
   terms (https://www.anthropic.com/legal/k12-dpa) is in place on Jeff's Claude for
   Teachers account. Then the first real checkpoint: compare Jeff's own levels with the
   AI's on that checkpoint and send Dan the results before going further, as the
   2026-11-04 email promised.

**Which AI, added 2026-10-31.** The paste panel has a **Pasting into** choice: Claude for
Teachers or ChatGPT for Teachers. Both get the same text and the same checks; the choice
is remembered on the device, recorded with every saved rating (`reader`, for example
`chatgpt-for-teachers-pasted`), and shown in the drawer as "Read by ...". Only a personal
account's practice with invented answers needs no approval; real writing needs the
district's approval of that specific service, and a teacher (not personal) account.

### Class Pulse rebuilt around its friction points, added 2026-11-16

Jeff, 2026-11-16: not every submission was pulled in, some that were pulled in were never
read, reading took too many copies and pastes, the dashboard was unclear, and there was no
projector screen. This is what changed. Where a paragraph above disagrees with this
section, this section is current. Nothing here needed a change to `firestore.rules`.

**Three reasons work went missing, and what each became.**

1. *A changed confidence rating unsubmitted the answer.* The receipt's fingerprint covers
   the writing and the confidence together, so a student who tapped a different confidence
   after submitting dropped off the page. `class-pulse-live.js` now compares the writing on
   its own: the receipt matches if it matches under any confidence (`sameWriting`). A saved
   rating is matched the same way (`fingerprints`).
2. *Canvas and Submit were two separate acts.* A student could paste into Canvas and never
   press Submit. **Gather All My Work now submits both checkpoints** (`submitOnGather` in the
   unit renderer): each checkpoint with writing gets a receipt exactly as its own button
   would write, an unchanged submission keeps its receipt and time, an empty one is not
   submitted, and the Gather panel and its result line say so. It follows `submitOn()`, so
   a named classroom such as Kelly's is unaffected. `privacy.html` says it.
3. *One imperfect quote voided a whole answer.* A quote had to match character for
   character, and one miss made every criterion Can't tell. The engine's `locate()` now
   finds the same words whatever the style of quote marks and dashes, capital letters,
   spacing, a closing period, or an ellipsis joining two real phrases, and keeps the
   student's exact words as the evidence. Different words still fail, a corrected spelling
   included. `readOutput()` checks **criterion by criterion**: one that fails becomes Can't
   tell, marked `CHECK_FAILED`, and the rest stand. A reply with nothing usable is still
   refused whole. `validateOutput()` remains the strict form. The instructions a model is
   given did not change, so the engine version and every saved reading stand.

**Where everyone is.** A panel above the tabs puts every student on the list in exactly one
box per checkpoint (`bucketOf`): read; read with a part that needs a second look;
submitted and waiting; changed after submitting; saved but never submitted; nothing in the
backup. Each row adds up to the class, and pressing a box names who is in it and what to
do. What it cannot tell apart: a student who wrote nothing from one who wrote on a device
that is not signed in to the backup. And a student who has never signed in is not on the
class list at all, so cannot appear; run the class-list setup again to add them.

**"Reading it now" is gone from My class.** It belongs to the demo's clock. In My class
nothing reads by itself, and the dot read as a reading that never finished. The waiting
cell is now a gold ellipsis labelled "Submitted, waiting for a reading"; changed and
never-submitted writing have their own cells.

**One copy, one paste.** Read the work (its own tab) offers **Copy everything waiting**: a
bundle (`bundleFor` in the handoff) of every answer of the topic that has no reading, or
whose reading has a `CHECK_FAILED` criterion, from both checkpoints, with the same check
before copying, the same removals and the same approval gate as a batch. It carries
exactly what a batch carries. It is pasted into the **Class Pulse Reader**, and one result
comes back to **Read the result**, which reads each part with the handoff's own
`readReply`, so every reading passes the checks a chat's reply would. Ratings saved this
way record `reader: claude-for-teachers-reader`. Batch by batch in a chat is still there,
folded under the bundle.

**The Class Pulse Reader** is a private artifact in Jeff's Claude for Teachers account
(`https://claude.ai/artifact/CZKikLV5Ei9P7CaPR5wzK6`, `READER_URL` in the handoff). It is
generated by `node scripts/build-class-pulse-reader.js` into
`teacher/reader/class-pulse-reader.artifact.html`, with the engine and the handoff inlined
so it reads and checks exactly as Class Pulse does; `--check` is in the offline suite.
**After changing the engine or the handoff, rebuild and publish that file again**, or the
two pages disagree about what a valid reading is. It reads each answer in a call of its own
(the copy-and-paste batches put fifteen in one chat), asks once more when a reading fails
the checks, stops on a usage limit and keeps what it has, stores nothing, and declares only
the `sample` capability. It is the same service, account and terms the district approved on
2026-11-05, reached through a page instead of a chat; Jeff decides whether to tell Dan
Layton. It has been run only on invented answers and against a stand-in for Claude.
**Before real work goes through it, compare its readings with the calibration set**
(AndersonLogic-OS `04_PRODUCTS/BeHistorical/Class-Pulse-Calibration/`).

**Pulling by itself.** A tick box checks for new submissions every three minutes, for one
class at a time, and stops itself after ninety minutes. One class only because every check
spends the free plan's daily reads, which the student backup shares. It never checks while a
reply is half pasted or a drawer is open.

**What a pull costs, corrected the same day.** A full pull is 8 reads a student (two
checkpoints, an answer and a receipt each, and the rules' class-list lookup on every
document) plus one read for every saved reading of the topic, across all the teacher's
classes. So a class of 26 is about 210 to 470 reads, and All my classes about 1,300. The
first version of auto-pull made a full pull every three minutes, up to about 14,000 reads
in ninety minutes. It now makes a **quick check** (`answers(topic, ids, { reuse })` in
`class-pulse-live.js`, `liveBuild(quick)` in the app): every receipt, an answer only when
its receipt changed since the last pull, and the saved readings reused, since they change
only when the teacher saves and saving pulls in full. That is about 4 reads a student plus
2 per new submission, about 105 for a class of 26, so ninety minutes is about 3,100 to
3,400. What it cannot see until the next full pull: an answer edited without a new Submit
or Gather, and readings saved on another computer. The Pull button, and changing topic or
class, still pull in full. `class-pulse-page.test.js` proves the quick check with a fake
clock and four negative controls. The read budget Jeff was given is in AndersonLogic-OS
`04_PRODUCTS/BeHistorical/Class-Pulse-At-A-Glance.html`.

**The dashboard.** A command bar that stays put (students, class, topic, names, pull,
projector), the hero cut to a strip, the count, then tabs in the order the work is done:
Class grid, Read the work, Plan next class, Projector. Across the course and One student
run on invented numbers, so in My class they are not offered at all; they used to sit
there greyed out, which read as broken.

**The projector screen.** `teacher/class-pulse-projector.html` is a second window for the
wall. It has no network (`connect-src 'none'`) and no data of its own: it draws the state
the Class Pulse page on the same computer sends over a BroadcastChannel, one part at a
time (title, the question, how the class did, what to revisit, wrong ideas, then one
model answer slide per criterion: "Model answer, criterion 1", "criterion 2" and so on,
three for most checkpoints and four or five for some in Units 5, 8 and 9; Jeff,
2026-11-18, replacing one model answer part that Next stepped through paragraph by
paragraph while the count stood still). `projectorState()` builds that message from class
totals, so Class view's rule (no name, no "Student 01", no student's words) is a property
of what is sent. The model answer is in the message only on its own slides, and each
slide is sent only its own criterion's paragraph. Arrow keys and a clicker work on either
window; the projector never steps itself.

**The iPad as its remote** reuses the Teaching OS remote session (`remote-firebase.js`,
`remoteSessions` in the rules, unchanged). The session document accepts a button name and
a number, so all that travels is which part to show: checkpoint (0 or 1) times 13
(`REMOTE_STRIDE`, the five fixed parts plus the engine's limit of eight criteria), plus
the part. The laptop's count ends with how many parts each checkpoint has
(`CP1 · 6 of 8 |8,8`), so the iPad offers one button per model answer slide, and its Next
and Back always move exactly one slide. `teacher/class-pulse-remote.html` is the iPad page. The QR library is vendored
in `teacher/vendor/` because the page's policy allows scripts only from this site and
Google's sign-in hosts. The remote has not been run on a real iPad or the school network.

**Model answers** still load from the private file, once per computer, and now show by
themselves when the projector reaches that part (Show is the default; Hide still works).

**Checks.** `class-pulse-engine.test.js` (the quote and criterion rules, two more negative
controls), `class-pulse-handoff.test.js` (partial readings, the bundle), and
`class-pulse-page.test.js` (the count, the changed confidence, the one copy in My class,
the projector's messages, with their negative controls). `class-pulse-reader.test.js`, in
the browser suite, runs the Reader against a stand-in for Claude. `class-pulse-submit.test.js`
covers Gather submitting.

### Old work through Topic 4.6 counts as submitted, added 2026-11-17

**What it does.** For every topic through 4.6, an answer in the backup with **no Submit
receipt at all** counts as submitted, and looks exactly like one: it waits for a reading,
goes out with the one copy to the Reader, and takes a saved reading like any other. From
Topic 4.7 on, nothing changed: only a receipt counts. The cutoff is `RECOVER_THROUGH` in
`teacher/class-pulse-live.js`, a fixed rule rather than a switch, so it can never reach a
new topic by being left on.

**Why.** Before 2026-11-16, Gather All My Work sent work to Canvas without writing a
receipt (see "Canvas and Submit were two separate acts" above), so students who turned in
everything sat in "Writing saved, never submitted" and their work could never be read. Jeff
chose a one-time recovery over matching each answer against a Canvas download and over
asking students to Gather again (AndersonLogic-OS `04_PRODUCTS/BeHistorical/Decisions.md`,
2026-11-17). 4.7 is left alone at his direction, although one class took it before the fix
reached students.

**What it cannot tell you.** A recovered answer is the last thing the backup saved, which
may differ from the student's Canvas paste or be unfinished. Nothing marks it, by Jeff's
choice; the row carries `recovered: true` for tests only. An answer **changed after its
Submit** is never recovered, because that student did press Submit, on different words.
A student with nothing in the backup stays in "Nothing in the backup". Nothing is written to
the student's records: the teacher's saved readings are what persist, and one stops
counting if the student later edits that answer, as it always has.

**Checks.** `class-pulse-page.test.js`: the cutoff's topic list, a never-submitted 4.6
answer waiting and sent to the Reader, a changed one staying changed, the count, and (in the
example class, which works on 4.7) a never-submitted 4.7 answer still saved but not
submitted, with three negative controls. `class-pulse-live.test.js` (rules suite, needs the
emulator) carries the same 4.6 and 4.7 cases against the real rules.

### Identical answers, added 2026-11-23

**What it is.** A panel on Plan next class that lists students who turned in the same
answer to one checkpoint, word for word: which checkpoint, how many students, how many words,
the names (with each student's class when All my classes is showing, and "across N classes"
when they differ), a **Read it** button per student that opens the response drawer, and the
shared answer folded under **Show the answer they share**. Jeff asked for exact matches only.

**The rule.** `identicalAnswers` in `teacher/class-pulse-engine.js`. Every word, letter and
punctuation mark must match; spacing and line breaks are ignored, because a paste can pick up
an extra space or a line break and that is still the same writing. Capital letters count.
Only finished, submitted work is compared (the engine's own `eligibility`), so a draft or an
answer changed after Submit is never matched, and the demo's placeholder sentences never are.
Groups run largest first, then longest. A group under eight words carries "A short answer, so
this could be chance."

**What it says about itself.** The panel states how many answers it compared, that an answer
copied and then changed by even one word does not show, and that a match is a reason to look,
not proof. It is not a grading tool: Class Pulse is formative only.

**Privacy.** Names follow the names switch like the rest of the tab. Plan next class is never
projected, and nothing here enters the projector's state. It reads the answers the page has
already loaded and sends nothing anywhere. The class menu narrows it like everything else,
so a match between two classes shows only under All my classes.

**Why the engine and not the page.** The Reader carries the engine inlined, so this change
rebuilt `teacher/reader/class-pulse-reader.artifact.html`. The Reader never calls
`identicalAnswers` and its reading rules are unchanged (`VERSION` stands), so republishing the
live Reader is optional rather than urgent; the drift check is satisfied by the rebuilt file.

**Checks.** `class-pulse-engine.test.js` (offline): spacing and a pasted line break still
match; one capital letter, one word or one punctuation mark breaks a match; drafts, missing
answers, placeholders and a lone student never match; three negative controls (capitals
ignored, drafts counted, line breaks not ignored). `class-pulse-page.test.js` (browser): no
match in the example class and only submitted answers compared; a copy across two classes
named with checkpoint, count, classes and the shared text; Read it opens the right answer; the
panel lives only on Plan next class; it follows the names switch; choosing one class compares
only that class; with three negative controls.
