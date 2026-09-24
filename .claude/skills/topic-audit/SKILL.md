---
name: topic-audit
description: "Audit every student- and projector-facing surface of one BeHistorical topic before it is taught: plain-language prompts, prompts that match what is actually on the page, factual accuracy (including teaching devices, BeInTheRoom roles and slide notes), pictures that match their captions, and CED alignment. Use whenever Jeff says 'audit Topic X.Y', 'run the topic audit', '/topic-audit', 'check 2.6 before I teach it', 'module audit', 'content pass', or asks whether a topic is ready for class. Also use for the report-only pass the weekly pre-teaching check runs. Not for a site-wide structural sweep (that is audit-site) or for choosing presentation pictures (that is presentation-images)."
---

# Topic Audit

This is the audit Topics 2.4 and 2.5 got on 2026-09-23 (commits `156bbb5`, `1f5fa80`,
`96c5837`), written down so every topic gets the same one. It exists because the 2.3
Skill Builder shipped prompts written above a ninth grader, and because an Evidence Lab
asked students about three cards that were not on the page. Every structural check was
green through both.

**The question this audit answers:** if a ninth grader opens every module of this topic
tomorrow, is anything confusing, wrong, or asking about something they cannot see?

`npm test` answers a different question (is the plumbing intact) and is step 7, not the
audit.

## Arguments

`/topic-audit <topic> [report]`

- `<topic>` is `2.6`, `3.2`, `F3` (Foundations 3), and so on. Several are fine: `2.6 2.7`.
- `week` means **the topics taught in the next seven days**, found from the schedule
  (see "Finding the week's topics" below). Implies nothing about `report`.
- `report` means **find and list, change nothing**. The weekly check always runs it this
  way. Without `report`, fix what is plainly correct and list the rest for Jeff.

## Step 0: Check the calendar before anything else

```bash
node -e "
const vm=require('vm'),fs=require('fs');
const c={window:{}};vm.createContext(c);vm.runInContext(fs.readFileSync('assets/data/announcements-schedule.js','utf8'),c);
const today=process.env.ON||new Intl.DateTimeFormat('en-CA',{timeZone:'America/Indiana/Indianapolis'}).format(new Date());
const w={};for(const d of c.window.BEHISTORICAL_SCHEDULE.days||[]){if(!d.topic||!d.date)continue;const x=w[d.topic]||(w[d.topic]={first:d.date,last:d.date});if(d.date<x.first)x.first=d.date;if(d.date>x.last)x.last=d.date;}
for(const t of process.argv.slice(1)){const x=w[t];console.log(t+': '+(x?('Green '+x.first+', Silver '+x.last+(today>=x.first&&today<=x.last?'  MID-TEACH on '+today:'')):'not on the schedule'));}
" 2.6 2.7
```

It prints, for example, `2.6: Green 2026-09-30, Silver 2026-10-01`, and adds
`MID-TEACH on <date>` when today falls between those two days. Dates are the school's, in
Indiana time. Set `ON=2026-09-24` in front of the command to ask about another day.

Say the dates in your first line to Jeff: "2.6 is taught Green 9/30, Silver 10/1."

- **Mid-teach** (between its Green day and its Silver day, inclusive): audit and fix as
  normal, but say in the report that Green was already taught the old version, so Jeff
  can decide whether Green needs to hear about a correction.
- **Taught in the next few days:** audit it now, this is exactly the window it is for.
- **Already taught to both rooms:** fine to audit; fixes ship before it is taught again.

### Finding the week's topics

```bash
node -e "
const vm=require('vm'),fs=require('fs');
const c={window:{}};vm.createContext(c);vm.runInContext(fs.readFileSync('assets/data/announcements-schedule.js','utf8'),c);
const today=process.env.ON||new Intl.DateTimeFormat('en-CA',{timeZone:'America/Indiana/Indianapolis'}).format(new Date());const end=new Date(today+'T12:00:00Z');end.setUTCDate(end.getUTCDate()+7);const last=end.toISOString().slice(0,10);
for(const d of c.window.BEHISTORICAL_SCHEDULE.days)if(d.topic&&d.date>=today&&d.date<=last)console.log(d.date,d.cohort,d.topic,(d.modules||[]).join(' '));
"
```

Each line is a date, a cohort, a topic, and the modules that day's assignment requires.
**Audit the required modules hardest**: those are what students will actually open.

## Step 1: Find every surface

A topic's content lives in more places than its lesson page. Find them all first, or the
audit silently skips the BeInTheRoom scenario or the slide notes.

```bash
T=2-6   # the topic with a dash
git ls-files | grep -E "(lesson|topic)-${T}([^0-9]|$)|topics/${T}/" | grep -v module-art/
grep -ohE "beintheroom/[^'\"?#]+\.html" assets/data/lesson-${T}-*.js | sort -u
```

What each one is, and where to edit it (edit the **source**, never a generated file):

| Surface | Source to edit | Notes |
|---|---|---|
| Targets, criteria, checkpoints, BeSurreal, primary source text | `assets/data/lesson-X-Y-<slug>.js` | |
| Lecture cards, map, Evidence Lab pictures | `assets/data/lesson-X-Y-renderer-config.js` | |
| Skill Builder, Evidence Lab and Primary Source **prompts** (Units 1 and 2 only) | the topic's entry in `assets/data/ap-practice-units-1-2.js` | one file carries fourteen topics; touch only this topic's entry |
| First & 10 reading | `scripts/lib/reading-content/unit-N.js` (Units 6 and 9: `scripts/lib/f10-content.js`; Foundations: `foundations-f10-content.js`) | the HTML is generated |
| Deep reading and eBook chapter | `scripts/lib/deep-reading-content/topic-X-Y.js` | one source feeds both |
| BeInTheRoom | the scenario file found above (Units 6 and 9: their generators) | hand-authored v1 files are edited directly |
| Class presentation and slide notes | `teacher/data/topic-X-Y-teaching-base.js` and `-presentation-assets.js` | student deck is generated |
| Units 6 and 9 anything | `scripts/build-unit6.js` / `build-unit9.js` | hand edits are reverted by the next rebuild |

## Step 2: Read every surface the way a student meets it

Read the actual text, top to bottom, module by module. Do not skim for keywords. For each
surface, check the five things below.

### A. Plain language

The reader is fourteen or fifteen. Rewrite any prompt a ninth grader would have to
decode before they could answer it. Real examples removed from 2.4 and 2.5:
"mutually reinforcing", "camel physiology", "defensible roles", "weakest link",
"emphasis, or silence", "qualified judgment", "can (or cannot) demonstrate",
"Mongol-era historical situation".

Keep the AP skill names (causation, comparison, sourcing, argumentation). Those are what
the course teaches. Cut the jargon wrapped around them. A plain prompt keeps the same
demand: it is easier to read, not easier to answer.

### B. Every prompt asks about what is actually on the page

This is the failure that looks fine in a data file and breaks in class.

- The Evidence Lab task must name **the cards students can see**, not items from
  `evidenceLab.items` (which nothing renders) or cards that used to be there. Open the
  renderer config, list the cards, and compare. 2.4 asked about "camel technology, Mansa
  Musa's hajj, Timbuktu's scholarship", none of which were cards. 2.5 asked about sugar
  and printing on a page whose cards were a city's fall and a travel map.
- A checkpoint must display the learning target it actually assesses.
- A lecture card's picture must be the picture its caption describes (2.4's camel-saddle
  card was showing the Mansa Musa atlas).

### C. Factual accuracy, on every surface, with no lower bar for the fun parts

BeInTheRoom roles, BeSurreal scenes, slide notes, hooks, analogies and counterfactuals are
factual claims too (see "Fact-check the teaching devices too" in
`docs/PRESENTATION-AUTHORING.md`). The errors found so far, as a guide to where they hide:

- **Dates and chronology:** Rabban Bar Sauma was born before the Yuan dynasty and before
  Khanbaliq existed; papermaking reached Baghdad by the 700s, so it did not spread
  "later"; Timbuktu's great libraries are 15th and 16th century, not Mansa Musa's.
- **Popular myths:** salt traded weight for weight with gold (the course's own deep
  reading calls this a myth).
- **Overreach:** "controlled the routes" when Mali controlled trade centers and access
  points; "the most comprehensive", "the wealthiest in the world", "impossible to
  contain"; "the House of Wisdom fell" rather than Baghdad's libraries.
- **Later sources stated as fact:** the 60,000 figure for Mansa Musa's caravan is a later
  chronicle claim.
- **Contemporaneity:** the 1375 Catalan Atlas is not contemporary with the 1324 hajj.
- **The course contradicting itself:** check a claim in BeInTheRoom against the same
  topic's deep reading and First & 10. If they disagree, one is wrong.

The usual fix is a **narrower concrete claim**, not a vaguer one (see `docs/STYLE.md`).
"One of the wealthiest" is right; adding "arguably, in some ways" to everything is not.

If you are not sure a claim is wrong, list it for Jeff with why you doubt it. Do not
"fix" history you are unsure of.

### D. Pictures

- Captions say what the picture is: a modern photograph, a modern painting, a map, a
  1375 manuscript. Never let a modern image read as a period source.
- An AI-generated picture is never Evidence Lab evidence, and anywhere else it carries
  exactly `Historical Reconstruction - AI Generated`. A slide note must never call an AI
  picture evidence (2.5's slide 11 did).
- A map slot holds a map.
- Do not type a new Commons filename from memory. If a picture needs replacing, use the
  **presentation-images** skill or `node scripts/source-evidence-images.js`, and read
  what Commons says the file is against the caption.

### E. CED alignment

- The Skill Builder and checkpoints should practise the topic's actual CED learning
  objectives. 2.4's Skill Builder paired transportation with demand; the CED pairs
  improved transportation with the growth of a powerful state.
- Nothing essential from the CED is missing, and adjacent-topic content is not crowding it
  out.

## Step 3: Run the judgment reports for this topic

None of these fail a build. Read each hit and decide; do not tune wording until they go
quiet.

```bash
node scripts/report-absolutes.js topic-X-Y                 # superlatives and sole causes
node scripts/report-checkpoint-congruence.js tX-Y          # eBook card giving away a checkpoint
node scripts/report-skill-alignment.js X.Y                 # checkpoint asks a different skill
node scripts/report-evidence-authenticity.js X             # object / record / summary cards
```

Triage words, from the scripts' own headers: congruence is FINE / REWORD / PROMOTE; skill
alignment is KEEP / RETAG / REWORD.

## Step 4: After fixing a claim, search every surface for it

A wrong claim usually lives in more than one place. After fixing one, grep the whole topic
for it: `git grep -n -i "weight for weight\|60,000" -- $(git ls-files | grep -E "(lesson|topic)-2-4")`
plus the BeInTheRoom file. Report what is left. The only acceptable remaining hits are the
lesson's own warnings against the myth.

## Step 5: What to fix, and what to leave for Jeff

**Fix directly** (unless in `report` mode): jargon rewrites that keep the same
demand, prompts that name cards not on the page, clear factual errors, mislabeled
pictures, dates.

**List for Jeff, do not change:** anything that changes what a lesson teaches or assesses
(a different learning objective pairing, dropping or adding an example, rewording a
target), anything historically debatable, and any defect outside this topic
(an "adjacent finding", reported with file, defect, impact, proposed fix, and why it was
left out).

## Step 6: Rebuild generated files

Rebuild whatever your source edits feed. When in doubt, run step 7 first: the
reproducibility checks name every generated file that drifted.

```bash
npm run build:readings          # First & 10 (Units 1-5, 7, 8)
npm run build:deep-readings && npm run build:ebook
npm run build:student-os-decks  # class presentation
node scripts/build-skills-map.js   # checkpoint terms, skill labels (also refreshes the Skills Lens copy)
npm run build:socrates          # lesson data the coach reads
node scripts/build-announcements.js && node scripts/build-canvas-events.js   # targets or criteria changed
```

## Step 7: Verify

```bash
npm test
```

If you touched a slide, also run `npm run test:browser` (needs `npm i playwright-core`).
A SKIP is not a pass.

## Step 8: Report and commit

**Report to Jeff in plain language**, grouped by module, in this order:

1. The dates it is taught, and whether Green has already had it.
2. What was fixed, one line each, saying what was wrong and what it says now.
3. What needs his decision, each with a recommendation.
4. Report hits reviewed and left alone, with the reason.
5. Adjacent findings.

**Commit** on the working branch with the house message shape: a title like
`Topic 2.6 module audit: plain-language prompts and factual fixes`, one line on why and
when it is taught, then one bullet per surface saying what was wrong. See `96c5837`.

Do not push to `main`. Getting it to students is the **ship-to-main** skill, and only when
Jeff says to ship.
