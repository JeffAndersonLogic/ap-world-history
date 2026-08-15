# Porting Prompt: Writing BeHistorical Deep Readings

**What this is.** A self-contained brief for handing the deep-reading and eBook
work to a different model or a different session. Everything below the line is
meant to be copied and pasted as a single prompt. It carries the architecture,
the exact data schema, the house rules, and the full specification for each
chapter still to be written, so the receiving model does not have to reverse
engineer any of it.

**How to use it.** Copy from "BEGIN PROMPT" to the end. If the model has the
repo, it can read and write files directly. If it does not, it should return one
complete JavaScript module per chapter and you paste the file in yourself; the
prompt says so explicitly.

**Keep it current.** When a chapter lands, move it from "still to write" to
"already written" in the prompt below. A stale porting prompt is worse than none,
because it will cheerfully instruct a model to rewrite work that already exists.

---

## BEGIN PROMPT

You are writing textbook-quality history chapters for **BeHistorical**, a static
AP World History: Modern course site built by a working high school teacher and
served from GitHub Pages. Your output is read by real 15 and 16 year olds,
including a significant number with IEPs and 504 plans.

### Why these chapters exist

Every topic has a short "First & 10" reading, roughly 950 words. Those readings
name things: they will tell a student that Persia used satrapies, or that surplus
produced job specialization. But the topic's success criteria and reading
questions ask students to explain **the mechanism by which something worked**, to
give **a specific limit or counter-example**, and to **compare two cases inside
one analytical category**. A student cannot infer a mechanism from a name, and
950 words has no room to supply one.

A deep reading is the optional push-further layer that supplies it. It is linked
from the topic's lesson page under the lecture cards, and it is also compiled
into a course eBook. Same source file, two surfaces.

### The content model, which is the thing to respect most

**Every page is generated.** You never write HTML. You write one JavaScript
content module, and a renderer produces both the standalone page and the eBook
chapter from it. Hand-editing a generated page fails the build, on purpose,
because a hand-edit looks like it worked and is silently reverted by the next
rebuild.

```
scripts/lib/deep-reading-content/<slug>.js   <- you write this, and only this
scripts/lib/deep-reading-page.js             <- renders it (do not edit)
scripts/build-deep-readings.js               <- writes the standalone page
scripts/build-ebook.js                       <- compiles chapters into the eBook
```

### The exact schema

Copy this shape. Field names are load-bearing; the renderer reads them literally.

```js
'use strict';

/**
 * A file-top comment explaining WHY this chapter exists: what its First & 10
 * cannot carry, and which specific question or success criterion each unusual
 * section is serving. Future maintainers read this before they read the prose.
 */

module.exports = {
  topicKey:   'f2',                                  // short id, also the eBook id prefix
  slug:       'foundations-2-belief-systems',        // decides the output directory
  sourceFile: 'deep-reading-foundations-2-belief-systems.html',
  lessonFile: 'foundations-2-belief-systems.html',   // the lesson this belongs to

  docTitle:   'BeHistorical | Deep Reading | Foundations 2: <Title>',
  eyebrow:    'Foundations 2 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml:  'The <em>Keyword</em>',   // ONE word in <em>, it renders as the gold highlight
  deck:       `One paragraph. What the chapter is about and what argument it lets a student make.`,
  meta:       ['One chapter', 'Foundations 2', 'Read alongside the First & 10'],
  footerNote: 'Foundations 2 &nbsp;·&nbsp; <Title> &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Tell the student how the chapter maps onto their three reading
            questions. Name the sections that answer each one.`,
    steps: [
      `<b>Sections 1 to 2:</b> what they cover.`,
      `<b>Section 3:</b> what it covers.`
    ]
  },

  // NOTE: the array is named `empires` for historical reasons. It is simply
  // "the chapter's sections" and is used for belief systems, trade networks,
  // and anything else. Do not rename it; the renderer reads this key.
  empires: [
    {
      id:        'confucianism',        // unique within the chapter, used as the anchor
      num:       '01',                  // displayed section number, a string
      accent:    'gold',                // gold | rust | iron | oxide, rotate for contrast
      name:      'Confucianism',        // section heading (may contain HTML)
      navLabel:  'Confucianism',        // short label for the jump nav and contents
      dates:     'c. 551 BCE onward &nbsp;·&nbsp; China',
      thesis:    `One or two sentences stating the section's argument, not its topic.`,

      parts: [
        {
          heading: 'The situation',     // plain text
          blocks: [
            { p: `A paragraph of body copy, authored as HTML.` },
            { p: `Another paragraph.` },
            { note: {
                kind:  'howknow',                    // 'howknow' or 'misconception'
                label: 'How we know, and how much to trust it',
                html:  `Sourcing, evidence quality, or a live scholarly debate.`
            } }
          ]
        }
      ],

      useThis: {
        tool:       `The strongest concept, then <em>the mechanism in italics: how it actually worked.</em>`,
        limit:      `The best evidence of a limit, exclusion, counter-example, or failure.`,
        comparison: `Which other section to set this beside, and on which single category.`
      },

      terms: [
        ['Term', 'A one-sentence definition a student could use in an essay.'],
        ['Another term', 'Definition.']
      ]
    }
  ],

  closing: {
    navLabel: 'Building your answer',
    heading:  'Building an Answer That Scores',
    intro:    `One paragraph on what a strong answer does.`,
    pairs: [
      {
        category: 'Question 1: Causation',      // or 'Category: how power was legitimated'
        title:    'What this question is testing',
        body:     `Where in this chapter the evidence lives, and how to structure the answer.`
      }
    ]
  }
};
```

**Allowed HTML inside body copy** (`p`, `html`, `thesis`, `deck`, `useThis.*`,
`terms` definitions, `closing.*`):

- `<span class="kt">term</span>`, a key term, rendered with an accent underline.
  Use it on **first meaningful use only**.
- `<span class="num">400,000</span>`, figures and dates, renders tabular.
- `<strong>` for the load-bearing clause in a paragraph. Roughly one per paragraph, at most.
- `<em>` for titles of works and for genuine emphasis.
- `&nbsp;·&nbsp;` as the separator in `dates` and `meta` lines.

Nothing else. No headings, no lists, no links, no images inside body copy.

### Hard rules, and why each exists

1. **No em dashes or en dashes in prose.** This is a global rule across all of
   this author's work. Use commas, colons, periods or parentheses. Ranges in a
   sentence read as "206 BCE to 220 CE". Dashes are acceptable inside `dates`
   fields and headings only.

2. **Never invent a fact, a statistic, a quotation or a date.** If you are not
   confident, either leave it out or hedge it explicitly in the text. This is a
   history course whose entire pitch is evidence discipline; a fabricated
   statistic in a chapter about evaluating evidence is the worst possible
   outcome.

3. **Hedge contested scholarship as contested, in the student-facing text.**
   Write "historians debate", "estimates vary", "the strong version of this
   claim is doubted". Then tell the student which version is safe to write. This
   is not throat-clearing; it is the skill being taught.

4. **Every chapter needs at least one `howknow` note and at least one
   `misconception` note.** `howknow` interrogates where the evidence comes from
   and what it cannot support. `misconception` names an error students reliably
   make and gives them the correct phrasing. These are the two highest-value
   blocks in the format.

5. **`useThis.tool` must state a mechanism, not a name.** "Satrapies" is a name.
   "Persia purchased consent by leaving local religion, law and elites in place,
   so revolt cost a subject people more than compliance did" is a mechanism.
   Put the mechanism in `<em>` so it renders as the emphasized clause.

6. **The chapter must serve that topic's actual questions.** Each chapter spec
   below lists the learning targets, success criteria and the three reading
   questions verbatim. Before writing, decide which section answers which
   question, and say so in `howTo` and in `closing.pairs`. If a question asks a
   student to evaluate a claim, the chapter must carry evidence for **both**
   sides, or the question is unanswerable.

7. **Never write a `<script>`, a form, a textarea, or an AI-coach button.**
   Nothing is submitted from a deep reading. Student work reaches the teacher
   through other modules only. A page with no script cannot ship a syntax error
   that silently kills its own behaviour.

8. **Filename prefix is `deep-reading-`.** The build validator globs lesson
   shells as `^foundations-\d+.*\.html$` and readings as
   `^first-and-10-foundations.*\.html$`. A deep reading must miss both globs or
   it gets validated against a contract it was never meant to satisfy.

### Chapter design

- **Target 6,000 to 8,000 words** of body copy, in **7 to 9 sections**.
- **Give parallel subjects a parallel skeleton.** If a chapter covers four
  empires or six belief systems, every one gets the same part headings in the
  same order. That is what turns the chapter into a comparison a student can
  actually make by reading across.
- **Open each section with a thesis, not a topic.** "Persia ruled the largest
  empire yet seen by refusing to make it uniform" beats "This section covers
  Persia."
- **Prefer the concrete and the surprising.** The earliest cuneiform tablets are
  receipts. Athens filled its council by lottery because elections were thought
  aristocratic. Those details are what students actually retain and cite.
- **Frame it as optional depth.** Say "optional" in the lesson card copy. Given
  the IEP and 504 load in this room, a long reading presented as required work
  reads as a wall rather than a resource.

### Wiring a finished chapter

If you have repo access, do all four. If not, deliver the module file and note
these steps for the human.

1. Write `scripts/lib/deep-reading-content/<slug>.js`.
2. Add a `deepReading` block to the topic's data file
   (`foundations/foundations-N-<slug>-data.js`), immediately before `first10:`:
   ```js
   deepReading: {
     title: 'The Chapter Title',
     desc:  'One or two sentences. Say "optional" and say what it is useful for.',
     url:   'deep-reading-foundations-N-<slug>.html'
   },
   ```
3. In `scripts/build-ebook.js`, add `{ module: 'foundations-N' }` to the right
   volume's `contents` array in teaching order, replacing that topic's
   `{ pending: {...} }` entry if one is there. **`module` is the content module's filename**, for example
   `foundations-4` for `deep-reading-content/foundations-4.js`. It is not the
   `slug` field inside that module, which is longer.
4. Build and verify:
   ```bash
   npm run build:deep-readings
   npm run build:ebook
   npm test                 # must be 8/8
   ```

`npm test` enforces that the generated page still matches the content module,
that the page is linked from its lesson, and that the eBook lists every volume
and is linked from the front door. If it fails, read the error; each one names
the file and the fix.

### Already written, do not redo

**The Foundations volume is complete.** All five chapters are on `main` and
compiled into `ebook/foundations.html`:

- **Foundations 1**, `foundations-1.js`, "The Bargain", 9 sections, ~6,100 words.
- **Foundations 2**, `foundations-2.js`, "What a Belief System Does", 8 sections, ~7,400 words.
- **Foundations 3**, `foundations-3.js`, "The Machinery of Power", 4 sections, ~6,300 words.
- **Foundations 4**, `foundations-4.js`, "Nobody Traveled the Whole Road", 8 sections, ~6,300 words.
- **Foundations 5**, `foundations-5.js`, "The Starting Line", 9 sections, ~6,300 words.

**The Unit 1 volume is complete.** All seven chapters are on the Unit 1 branch and
compiled into `ebook/unit-1.html`:

- **Topic 1.1**, `topic-1-1.js`, "The Examined State", 5 sections, ~5,200 words.
- **Topic 1.2**, `topic-1-2.js`, "The House Divided", 5 sections, ~4,900 words.
- **Topic 1.3**, `topic-1-3.js`, "Rice, Water, and the Strait", 5 sections, ~4,500 words.
- **Topic 1.4**, `topic-1-4.js`, "Tribute and Labor", 5 sections, ~5,000 words.
- **Topic 1.5**, `topic-1-5.js`, "Gold, Salt, Stone, and Faith", 5 sections, ~4,600 words.
- **Topic 1.6**, `topic-1-6.js`, "The Kingdom That Never Assembled", 5 sections, ~4,500 words.
- **Topic 1.7**, `topic-1-7.js`, "The Same Four Questions", 5 sections, ~4,700 words.

**The Unit 2 volume is complete.** All seven chapters are on the working branch and
compiled into `ebook/unit-2.html`:

- **Topic 2.1**, `topic-2-1.js`, "The Business of the Road", 5 sections, ~4,300 words.
- **Topic 2.2**, `topic-2-2.js`, "The Empire of the Relay", 5 sections, ~4,500 words.
- **Topic 2.3**, `topic-2-3.js`, "The Ocean That Carried Everything", 5 sections, ~4,400 words.
- **Topic 2.4**, `topic-2-4.js`, "Two Months Without Water", 5 sections, ~4,000 words.
- **Topic 2.5**, `topic-2-5.js`, "What Traveled Without Paying Freight", 5 sections, ~4,200 words.
- **Topic 2.6**, `topic-2-6.js`, "The Cargo Nobody Ordered", 5 sections, ~4,100 words.
- **Topic 2.7**, `topic-2-7.js`, "One System, Three Surfaces", 5 sections, ~3,900 words.

**Unit 2 overlaps Foundations 4, and the split is deliberate.** Foundations 4
gives the map of the three networks: the towns, the winds, relay rather than
through-travel, and value-to-weight. The Unit 2 chapters do not repeat any of
that. They take the same networks as businesses, the capital, the contracts, the
ships and animals, the cost per ton-mile, and the specific events of 1200 to
1450. If you write a chapter for a topic Foundations already touches, read the
Foundations chapter first and pick a different question rather than a different
wording.

**A unit chapter differs from a Foundations chapter in four fields and one wiring
step.** `topicKey` is `t1-4`, `slug` starts `topic-1-4-` (the builder places the
page and the eBook derives the chapter number and lesson link from it),
`sourceFile` is `deep-reading-topic-1-4-<slug>.html` and `lessonFile` is the unit
shell. The wiring step: a unit topic's `deepReading` block goes in
`assets/data/lesson-1-4-<slug>.js`, not beside the shell the way a Foundations
topic's does.

**Read two of them before writing.** They are the style reference, and matching
them matters more than any instruction above.

**Check `main` before you believe this list.** Foundations 1 and Foundations 4
were each written twice, in two sessions working from two branches, because this
document said a chapter existed while `main` did not have it. Run
`git ls-tree main scripts/lib/deep-reading-content/` and trust that over this
paragraph. Whoever lands a chapter updates this list in the same commit.

### Still to write

Foundations, Unit 1 and Unit 2 are complete. The next volume is another unit:
pick one, add a `VOLUMES` entry in `scripts/build-ebook.js`, and write its
chapters against the same schema. Units 3 through 9 are unwritten, and Unit 3,
land-based empires, is the natural next one, because the Unit 2 chapters end
with gunpowder moving west and the Mongol khanates fragmenting, which is exactly
where Unit 3 begins.

**Foundations 0 is deliberately excluded.** It is course orientation and the six
thinking skills, not history content, and its reading asks for a personal
baseline paragraph. The skills material belongs to Foundations 5.

---

#### Foundations 2, Belief Systems & Cultural Exchange

`lessonFile: foundations-2-belief-systems.html`

Learning targets:
1. Identify the core beliefs and origins of the six major belief systems: Confucianism, Daoism, Hinduism, Buddhism, Christianity, Islam.
2. Explain how belief systems functioned as **institutions that organized society**, not just private faith.
3. Trace how a belief system spread through trade, state adoption or missionary activity, and compare how two of them adapted on arrival (syncretism).

Success criteria:
1. State the central idea of each of the six and where it originated.
2. Identify a **specific institutional function** (education, law, welfare, legitimacy, social order) with a concrete historical example.
3. Explain at least one **mechanism** of spread (trade route, state adoption, missionary, civil service exam, monastic network) and give a specific syncretism example.

Reading questions:
- **Q1 (Causation).** Choose one belief system and explain what caused it to spread widely, or for Hinduism what kept it geographically rooted. Identify a specific mechanism and explain how it drove the outcome.
- **Q2 (Continuity & Change).** Choose one syncretism example (Buddhism blending with Daoism in China, Islam in Mali, Christianity in Ethiopia). Identify one thing that continued and one that changed.
- **Q3 (Argumentation).** Evaluate: "Before c.1200, the major belief systems shaped how ordinary people actually lived more than kings and armies did."

Lecture cards cover eight traditions, note that **Judaism is taught** even though the subtitle says six: Confucianism (two cards, the Five Relationships and then philosophy becoming the state), Daoism, Hinduism, Buddhism, Judaism, Christianity, Islam.

Notes for the writer. This is the largest chapter. Give every tradition the same
skeleton: core idea, how it functioned as an institution, how it spread or why it
did not, and who it ranked where. Q3 needs evidence that belief systems reached
ordinary daily life, so carry concrete institutional detail: monastic lending and
land holding, Islamic waqf and law courts, Christian monasteries as the surviving
literate institution in post-Roman Europe, caste as lived social order,
Confucian examination shaping who could hold office. Hinduism is the deliberate
contrast case for Q1, a tradition that travels far less because membership is
bound to birth and social position rather than to conversion.

---

#### Foundations 5, The World at c.1200 and Thinking Like a Historian

`lessonFile: foundations-5-world-at-1200.html`

Learning targets:
1. Describe the world at c.1200 across six AP World regions and explain how the Foundations themes built it.
2. Name and explain the five AP historical thinking skills: contextualization, causation, continuity and change over time, comparison, argumentation.
3. Write a complete AP-style SAQ paragraph with claim, evidence and explicit reasoning.

Success criteria:
1. Write one specific sentence about each of the six regions naming a feature, institution, trade connection or belief system, and explain which Foundations theme mattered most.
2. Explain each thinking skill in the student's own words and identify where it appeared in Foundations 1 to 4.
3. Write an SAQ paragraph with a defensible claim first, two specific pieces of evidence, and a reasoning sentence.

Reading questions:
- **Q1 (Contextualization).** Choose one region (Song China, Dar al-Islam, Africa, South and Southeast Asia, the Americas, Europe) and one Foundations theme that best explains its condition at c.1200.
- **Q2 (Comparison).** Africa is "selectively and profoundly connected" to global trade while the Americas are in "complete geographic isolation from Afro-Eurasia." Give one significant similarity and one difference, and what each reveals about trade networks.
- **Q3 (Argumentation).** Evaluate: Afro-Eurasia at c.1200 was "an interconnected system, where developments in one region regularly produce effects in others."

Notes for the writer. This chapter has two halves and should say so. The first is
six regional snapshots, one section each, each ending by naming which Foundations
theme explains it. The second teaches the five skills using examples drawn from
the four chapters that came before, which is what makes it a capstone rather than
a seventh survey. Q2 is delicate: the Americas were **internally** highly
connected, with large states and long-distance exchange of their own, and the
isolation is specifically from Afro-Eurasia. Write it so a student cannot come
away thinking isolated means primitive.

---

### Deliverable

For each chapter: one complete, runnable JavaScript module in the schema above,
plus the three wiring edits. If you cannot write files, output the module in a
single fenced code block with nothing omitted or abbreviated, and list the wiring
edits underneath.

Do not summarize the history back to the requester. Write the chapter.

## END PROMPT
