# Topic 3.2 Story Draft: Empires: Administration

**Status: Draft for Jeff's review, revision 2, 2026-10-06. Not yet approved.** Nothing
downstream of this page has been built.

**Why there is a revision 2.** Revision 1 (commit `820ea796`) took the CED from the repo's
copies (the lesson data, `ced-unit3-contract.js` and the story map) instead of the CED itself.
It inherited the story map's reasoning move, "causation", where the CED says **Comparison**,
and it treated every illustrative example as required. This revision is rebuilt from the
College Board's own Topic 3.2 page. The rule that this never happens again is now in
`CLAUDE.md`, `docs/PRESENTATION-AUTHORING.md` section 1 and the build-topic skill, and
`scripts/test/ced-source.test.js` enforces it.

**Taught:** Green Tuesday 2026-10-20, Silver Wednesday 2026-10-21 (Jeff, 2026-10-04; recorded
only in the `homeworkDue` comment on 3.1's days in `assets/data/announcements-schedule.js`).

The claim ledger is `docs/TOPIC-3-2-CLAIM-LEDGER.md`.

## 1. What the CED requires

**Source: `scripts/lib/ced-source/unit-3.js`**, transcribed from the AP World History: Modern
Course and Exam Description, effective Fall 2026, Course Framework p. 70 (Topic 3.2) and p. 67
(Unit 3 overview). Quoted, not paraphrased.

- **Learning objective (Unit 3: Learning Objective B):** "Explain how rulers used a variety of
  methods to legitimize and consolidate their power in land-based empires from 1450 to 1750."
- **Required content, the three historical development statements, in the CED's order:**
  - **KC-4.3.I.C:** "Recruitment and use of bureaucratic elites, as well as the development of
    military professionals, became more common among rulers who wanted to maintain centralized
    control over their populations and resources."
  - **KC-4.3.I.A:** "Rulers continued to use religious ideas, art, and monumental architecture
    to legitimize their rule."
  - **KC-4.3.I.D:** "Rulers used tribute collection, tax farming, and innovative tax-collection
    systems to generate revenue in order to forward state power and expansion."
- **Reasoning move:** Comparison. This is the CED's reasoning process for Topic 3.2 (p. 67).
  The CED's comparison skills are to describe similarities and differences, explain relevant
  similarities and differences, and explain their relative significance.
- **Suggested skill:** 4.A Contextualization, "Identify and describe a historical context for
  a specific historical development or process."
- **Thematic focus:** Governance (GOV).
- **Illustrative examples, which are optional.** The CED says illustrative examples "are
  intended as examples and do not in any way constitute additional, preferred, or required
  information. Historical development statements comprise the knowledge required to
  demonstrate mastery of the learning objective" (p. 85). Its list for 3.2:
  - Bureaucratic elites or military professionals: Ottoman devshirme; salaried samurai.
  - Religious ideas: Mexica practice of human sacrifice; European notions of divine right;
    Songhai promotion of Islam.
  - Art and monumental architecture: Qing imperial portraits; Incan sun temple of Cuzco; Mughal
    mausolea and mosques; European palaces, such as Versailles.
  - Tax-collection systems: Mughal zamindar tax collection; Ottoman tax farming; Mexica tribute
    lists; Ming practice of collecting taxes in hard currency.
- **The CED's own sample activity for 3.2 (p. 68, optional):** close reading of short excerpts
  on the rulers of the Ottoman and Songhay empires from Leo Africanus, *Description of
  Timbuktu* (1526), and Busbecq, *The Turkish Letters* (1555 to 1562): identify the historical
  context, then highlight similarities in the methods the rulers used to legitimize and
  consolidate power.

**What follows from the CED for the story:**
1. The story must teach the three statements, and every example exists only to make one of them
   clear. Four or five well-chosen examples, compared, do this better than thirteen named ones.
2. The move is comparison: the same job done differently by different rulers, and why.
3. The skill is contextualization: each "why" is the situation that ruler faced.
4. The CED's word "continued" (KC-4.3.I.A) means legitimacy through religion and buildings was
   not new in 1450; students saw it in Unit 1. The CED's phrase "forward state power and
   expansion" (KC-4.3.I.D) is the link to 3.1: the guns had to be paid for.

## 2. Constraint check (what students already see, against the CED)

**Matches the CED** (confirmed by `ced-source.test.js`): the lesson's learning objective, its
three Key Concept sentences and its illustrative-example list are the CED's, word for word. The
declared Skill Builder skill, "Comparison practice", matches the CED's reasoning process.

**Copies that disagreed with the CED, now corrected:**
1. `docs/UNIT-3-STORY-MAP.md` gave 3.2 the reasoning move "causation". Corrected to comparison,
   with a dated note.
2. `scripts/lib/ced-unit3-contract.js` dropped "Mexica practice of human sacrifice" from the
   CED's list. Restored. (It stays optional; see question 3.)

**Out of line with the CED on the student surfaces, fixed in this build:**
3. **KC-4.3.I.C is taught without one of the CED's two examples.** Success criterion 1 names
   salaried samurai, and no surface explains them.
4. **KC-4.3.I.A is crowded out.** The lecture gives a whole card to "Accommodation" (Rajput
   nobles, the Ottoman millet system), which is not in this topic's CED page, and gives
   legitimacy half of one card. The First & 10 gives it one paragraph out of thirteen.
5. **Checkpoint 1 displays Learning Target 1 (KC-4.3.I.C) but its prompt also accepts
   "taxation systems"**, which is KC-4.3.I.D. Its prompt is fixed to match its target.
6. **The First & 10 is built around material the CED does not name** (the timar gets the
   longest section; the Qing Banner and examination systems get another), carries 16
   vocabulary chips, and has two factual slips: it says timars "kept revenue flowing to the
   imperial center" (a timar holder kept that revenue to support himself and his horsemen),
   and that Qing banners were "defined by ethnicity and region" (there were Manchu, Mongol and
   Han banners, not regional ones). It is rewritten from this story.
7. **Leftovers:** a stale `builderBody` in the reading's entry, a lesson-page note that still
   says "build your AI Coach prompt", a `docTitle` saying "Module 01" beside a "Module 02"
   badge.
8. **BeSurreal** is set at "Akbar's Court, Delhi, c. 1580" (Akbar's court was then at
   Fatehpur Sikri) and tells a Rajput chief his Rajasthan jagir will not pass to his son
   (Rajput home lands were usually hereditary watan jagirs). See question 7.
9. **The BeInTheRoom page misquotes the objective** ("how rulers employed economic strategies
   to consolidate and maintain power" is not the CED's wording). Fixed in the generator.
10. **The Primary Source** is labeled "adapted from the Ain-i-Akbari" but reads as a modern
    summary. See question 8.
11. **The eBook chapter** runs people, money, legitimacy, local elites, decline, and never
    mentions samurai or Songhai. See question 9.

## 3. The ninth-grade story

Written the way the First & 10 will tell it: to the student, in the reading's voice, with every
term explained the first time it appears and the comparisons carried in AP Thinking boxes, as
the reading carries them. After approval the reading adds its vocabulary chips, takeaway and
three questions around this text; it does not tell a different story. Nothing here goes beyond
the claim ledger.

### 1. The morning after the conquest

Topic 3.1 ended with a problem. Gunpowder let a few rulers conquer enormous lands fast. Mehmed
II took Constantinople in seven weeks in 1453. Babur won north India in 1526. In 1644 the
Manchus took Beijing and went on to conquer China.

Now imagine you are one of those rulers on the morning after. You own a huge stretch of land
full of people who speak other languages, pray in other ways, and never asked to be ruled by
you. Some of them are powerful: they have their own lands, their own soldiers and their own
followers. And your new army, with its cannons and guns, costs a fortune to keep.

Winning the land was the fast part. Holding it was the hard part. To hold on, every ruler in
this unit had to do three jobs:

1. Find people who would serve him and not turn on him.
2. Convince everyone else that he deserved to rule.
3. Collect enough money to pay for all of it.

Every ruler did all three jobs. They did not do them the same way, and the reasons they
differed tell you a lot about each empire.

> **AP Thinking, Contextualization.** Before you explain any tool a ruler used, ask what
> situation he was in. A ruler who had just conquered strangers, or who had taken the throne by
> force, needed different tools than one whose family had ruled for generations.

### 2. People who serve

Mehmed knew how dangerous a powerful servant could be. The day after Constantinople fell, he
had his **grand vizier**, his chief minister, arrested, and soon executed. That minister,
Çandarlı Halil, came from a Turkish family that had held the job for much of the past hundred
years. A servant with a powerful family of his own can say no to his ruler. Rulers wanted
servants who depended on them for everything.

The Ottomans had a system for making servants like that. It was called the **devshirme**, a
Turkish word meaning "collecting." Ottoman officials took Christian boys, mostly from the
Balkans, away from their families, converted them to Islam and trained them. The strongest
became **Janissaries**, the sultan's own full-time soldiers. The smartest went to schools in the
palace and could rise to govern whole provinces, or even become grand vizier. The devshirme was
forced, and it was cruel to the families who lost their sons. But it gave the sultan men who had
no family power inside the empire. Everything they had came from him.

Japan solved the same problem in a different way. Japan was not a giant empire, but its rulers
faced the same danger. For more than a century, Japanese lords with their own lands and armies
had fought each other in civil wars. Starting in the late 1500s, Japan's new rulers and its
great lords moved most **samurai**, the warrior class, off their lands and into the towns around
their lords' castles. Instead of living off land he controlled, a **salaried samurai** received
a fixed yearly payment from his lord, counted in rice.

The Mughals in India had a third answer. The emperor Akbar gave each of his officials a numbered
rank, called a **mansab**. Many of these officials, called **mansabdars**, were paid with a
**jagir**: the right to collect the land tax from one area. Every few years the jagirs were
moved, and a son did not inherit his father's rank. A mansabdar could get rich serving the
emperor, but he could never turn one place into his own little kingdom.

> **AP Thinking, Comparison.** The devshirme and the salaried samurai did the same job: both
> turned the people with weapons into people who lived on their ruler's pay. They did it in
> different ways. The Ottomans built a new group out of outsiders, while Japan remade an old
> warrior group by cutting it off from its land. Why? The Ottoman sultan feared powerful Turkish
> families; Japan's rulers feared warrior lords who had just spent a century at war.

### 3. Symbols that justify

Most people in an empire would never see their ruler. No ruler could force millions of people to
obey every day, so rulers tried to make their power look rightful, as if it came from God or was
too great to question. They used religious ideas, art and huge buildings. Rulers had done this
for centuries, as you saw in Unit 1, and these rulers kept doing it.

Start with religious ideas. In France, King Louis XIV claimed **divine right**: God had chosen
the king, so disobeying the king meant disobeying God. In West Africa, Askia Muhammad had a
harder problem. He took the throne of the Songhai Empire by force in 1493, so he could not claim
it by birth. He made the pilgrimage to Mecca and came home with the title of **caliph**, a
leader of Muslims. Back home he supported Islamic scholars and judges. Promoting Islam made
Askia the protector of the faith, which gave people a reason to accept a ruler who had seized
power.

Buildings did the same work in stone. The Mughal emperors built enormous mosques and
**mausoleums**, giant tombs such as the Taj Mahal. They told everyone that this family was rich,
faithful to Islam and here to stay. In France, Louis XIV moved his **court**, the nobles and
officials who lived and worked around the king, to his enormous palace at **Versailles** in
1682. As a boy, Louis had lived through years when France's great nobles rose up against the
king. At Versailles, the great nobles spent their time at court, competing for the king's
attention where he could watch them, instead of building up power on their own lands.

> **AP Thinking, Comparison.** Divine right and Songhai's promotion of Islam both tied the ruler
> to God. Louis's claim came with his birth; Askia had to earn his, because he took power by
> force. The Mughal tombs and Versailles both made a ruler's power impossible to miss, but
> Versailles did a second job: it kept the nobles where the king could see them.

### 4. Systems that pay

Armies, salaries and palaces cost enormous amounts of money, and so did the guns from Topic 3.1.
Rulers raised it in three main ways: **tribute**, which is payment taken from conquered peoples;
tax farming; and new ways of collecting taxes.

The Ottomans used **tax farming**. The government sold the right to collect a tax to a bidder,
who paid the state and then kept whatever extra he could collect. Tax farming grew in the late
1500s, when the sultans needed cash fast to pay their full-time soldiers. The sultan got money
quickly, but tax farmers could squeeze the people who paid. The Mughals relied on **zamindars**,
local landholders who knew the fields and villages, to collect the land tax. A zamindar's right
usually passed down in his family, and he kept a share of what he collected.

Other rulers differed in what people paid. The Mexica, often called the Aztecs, kept painted
tribute lists showing what each conquered province owed their capital: cotton cloaks, cacao
beans, feathers and warrior costumes. Ming China moved the other way. It combined many separate
taxes and labor duties into payments made in **silver**, which made taxes simpler to collect.
Where all that silver came from is a story for Unit 4.

> **AP Thinking, Comparison.** Tax farming and zamindars both handed tax collection to a
> middleman. The Ottoman tax farmer bought his right for cash, because the sultan needed money
> now. The zamindar held his through his family and his standing in the countryside, because
> the Mughals needed people who knew a huge farming land village by village.

### 5. How it fits together

The three jobs depended on each other. Money paid the people who served. The people who served
collected the money. Symbols made serving and paying feel right. Every ruler had to do all
three, but each one chose tools that fit his own situation.

Rulers used religion to justify their power. But what happened to religion itself in these same
centuries? That is the next topic.

## 4. The spine

**Conquest wins land; people, legitimacy and money hold it.** People who serve, symbols that
justify, systems that pay: the CED's own order (KC-4.3.I.C, I.A, I.D). (Approved in the unit
story map; consistent with the CED.)

Shorter for the wall: **Guns win land. People, symbols and money hold it.**

The comparison every example answers: **same job, different tools. Why different?**

## 5. Must-have evidence and what each one proves

Only the Key Concept sentences are required. These examples are chosen because each sits in a
comparison that makes its Key Concept clear. Weight is equal across the three jobs in class time.

| Evidence | CED anchor | Compared with | What the comparison proves |
|---|---|---|---|
| Mehmed and Çandarlı Halil, 1453 (context hook) | KC-4.3.I.C | none | Why rulers wanted servants with no power of their own. |
| Ottoman devshirme and Janissaries (CED example) | KC-4.3.I.C | salaried samurai | Same job, new class built from outsiders. |
| Salaried samurai (CED example) | KC-4.3.I.C | devshirme | Same job, an old class cut off from its land. |
| Mughal mansabdars and jagirs (not a CED example; kept because the Unit 3 coherence contract requires it and it links to zamindars) | KC-4.3.I.C | the other two, one line | A third way: rank and rotation. |
| Divine right (CED example) | KC-4.3.I.A, religious ideas | Songhai Islam | Religious claim that comes with birth. |
| Songhai promotion of Islam (CED example) | KC-4.3.I.A, religious ideas | divine right | Religious claim earned by a ruler who took power by force. |
| Mughal mausolea and mosques (CED example) | KC-4.3.I.A, architecture | Versailles | Building as dynastic and religious statement. |
| Versailles (CED example) | KC-4.3.I.A, architecture | Mughal tombs | Building as statement and as a tool to watch the nobles. |
| Ottoman tax farming (CED example) | KC-4.3.I.D | zamindars | Cash now, through a bidder. |
| Mughal zamindar collection (CED example) | KC-4.3.I.D | tax farming | Local knowledge, through a landholder. |
| Mexica tribute lists (CED example) | KC-4.3.I.D | Ming silver | Goods from conquered provinces. |
| Ming taxes in silver (CED example) | KC-4.3.I.D | Mexica tribute | One tax in coin. Silver's source is Unit 4. |

**CED examples not used in the class story**, all optional: Mexica human sacrifice, Qing imperial
portraits, the Incan sun temple of Cuzco. See question 3.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from 3.1: (a) Why could only big states make full use of
   cannons? (b) Name the four land empires the College Board names, and where each was. (c)
   Morocco won at Tondibi. What did it find hard afterward? **Bridge:** "Mehmed took
   Constantinople in seven weeks. Now he has to run it."
3. **Topic question**, the learning objective in student words: How did rulers make their power
   look rightful and keep control of their empires, and why did different rulers do it
   differently?
4. **Context (4.A):** the morning after a conquest. Huge, diverse empires; powerful local men;
   expensive gun armies. Three jobs.
5. **Job one, people:** the Halil hook; devshirme compared with salaried samurai (same,
   different, why); mansabdars as a third way.
6. **Job two, symbols, religious ideas:** divine right compared with Songhai Islam.
7. **Job two, symbols, buildings:** Mughal tombs and mosques compared with Versailles.
8. **Job three, money:** tax farming compared with zamindars; Mexica tribute compared with Ming
   silver.
9. **The landing:** the three jobs hold each other up; the tools differ because the contexts
   differ.
10. **Retelling slide** (below).
11. **Reasoning, comparison with context:** model one sentence, then students write 2 to 3
    sentences on ONE pair: *Both ___ and ___ [did this job] by ___, but ___, while ___. They
    differed because ___ [the context].*
12. **AP synthesis and hand-off:** answer the learning objective in two sentences, then "Rulers
    used religion to justify their power. But what happened to religion itself in these same
    centuries?"

## 7. Proposed retelling slide

**Trunk and branches**, with each branch carrying its comparison.

- **Trunk:** Conquest wins land. People, symbols and money hold it.
- **People who serve:** devshirme / salaried samurai (outsiders made loyal / warriors taken off
  their land).
- **Symbols that justify:** divine right / Songhai Islam; Versailles / Mughal tombs.
- **Systems that pay:** tax farming / zamindars; Mexica tribute / Ming silver.

Why this shape: the topic's content is three parts holding up one claim, and the CED's reasoning
move is comparison, so each branch shows its pair. A student who can redraw the tree with one pair
per branch, and say why the pair differs, can answer any 3.2 prompt.

## 8. Owns / bridge-only (from the unit story map, checked against the CED)

- **3.2 owns:** the three Key Concepts (KC-4.3.I.C, I.A, I.D) and the examples above.
- **Bridge only:** religious *change* (3.3); where Ming silver came from (Unit 4).
- **Out of the class story:** the Ottoman millet system and the Qing examination and Banner
  systems. Accurate, but not on the CED page for this topic, and they are what crowded
  KC-4.3.I.A out. They can stay in the eBook as depth.
- **Hands to 3.3:** "Rulers used religion to justify their power. But what happened to religion
  itself in these same centuries?"

## 9. Visuals each beat needs (what kind of object, not yet a file)

From `docs/UNIT-3-PICTURE-LIST.md`, rows this story uses:

- Beat 5: Süleymanname devshirme registration miniature (1558). Samurai stipends and mansabdar
  ranks have no good single picture: a simple diagram.
- Beat 6: Rigaud's Louis XIV (1701); the Tomb of Askia, Gao (modern photograph of the 1495
  building).
- Beat 7: a modern photograph of the Taj Mahal or Humayun's Tomb; a view of Versailles; Bichitr's
  *Jahangir Preferring a Sufi Shaikh to Kings* if a Mughal legitimacy picture is wanted.
- Beat 8: Codex Mendoza tribute page (c. 1541, post-conquest); a Ming silver ingot a museum dates
  to the Ming. Tax farming and zamindars: a chain diagram.
- **No longer needed by this story:** the Qianlong court-robes portrait, the Coricancha, and the
  Qianlong-as-Manjushri thangka revision 1 added. Kept on the list in case question 3 brings Qing
  portraits back.

## 10. Questions for Jeff (one list)

**From 3.1's open decisions, which cross into 3.2**

1. **The devshirme card in 3.1.** The live 3.1 page shows three lecture cards and no devshirme
   card; the only devshirme text left in 3.1 is two entries in an Evidence Lab list the page never
   draws. **Recommend:** 3.2 teaches devshirme in full, as here; I list the two dead 3.1 entries
   as an adjacent finding rather than edit 3.1.
2. **The Moroccan motive.** Sources support 3.1's gold-and-salt motive, and also say al-Mansur
   demanded payment for the Taghaza salt and may have pressed his claim to be caliph. The CED lists
   Morocco against Songhai under KC-4.3.III.i (political and religious) for 3.1 and again under
   KC-4.3.III.ii in Unit 4. **Recommend:** 3.2 says nothing about Morocco; 3.1's chapter keeps the
   economic motive and adds one sourced sentence on the caliphate claim. That edit is 3.1's, so
   only on your word.

**Scope**

3. **Optional CED examples left out:** Mexica human sacrifice, Qing imperial portraits, the Inca
   sun temple. **Recommend:** leave them out of the class story, reading and checkpoints; the two
   religious-idea and two building examples already make KC-4.3.I.A clear. Qing portraits could go
   in the eBook. Say if you want any of them in class.
4. **The opening hook** (Mehmed and Halil). **Recommend:** keep, worded as above. Historians agree
   on the arrest and execution; the full switch to devshirme-trained grand viziers came under
   Süleyman, so the story claims only what Mehmed wanted.
5. **Take the millet system and the Qing exam and Banners out of the lecture and the First & 10**,
   and fold the Rajputs into one mansabdar line. **Recommend:** yes.

**Teaching calls**

6. **Skill Builder.** It already teaches comparison, which is the CED's move. **Recommend:** keep
   comparison, add the CED's contextualization step ("what situation was each ruler in?"), and
   compare devshirme with salaried samurai rather than with the mansabdar system.
7. **BeSurreal.** The BeInTheRoom is Akbar's revenue commission (people and money), so no activity
   puts a student inside the symbols job. **Recommend:** a legitimacy prompt, for example a
   provincial noble arriving at Versailles in the 1680s, or a scholar in Timbuktu under Askia
   Muhammad. If you prefer to keep the mansabdar, I fix the city and the inheritance line.
8. **Primary Source.** **Recommend:** the CED's own sample pair, short excerpts from Leo Africanus
   on the Songhai court and Busbecq on the Ottoman court, both in public-domain translations,
   replacing the composed Ain-i-Akbari passage. They match the story exactly: Busbecq on how the
   sultan chose his servants (people), Leo on the Songhai king's scholars and judges (symbols).
   Every line checked against the printed translation before it ships.
9. **The eBook chapter.** **Recommend:** reorder to people, symbols, money; add the samurai and
   Songhai; keep the local-elites and "where it cracked" sections as depth at the end.
10. **Required modules for October 20 and 21.** **Recommend** the same as 3.1: 02 (First & 10, in
    class), 06, 07 and 10, with the Skill Builder and BeInTheRoom optional. Minutes reported once
    the deck exists.
11. **Reading title.** **Recommend** "Holding What You Won" everywhere, or keep "Running an
    Empire".

**After you approve:** the First & 10 is written from this story first, and you read it; the
teacher presentation is built from the same story next.
