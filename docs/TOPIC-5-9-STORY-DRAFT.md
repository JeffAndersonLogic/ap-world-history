# Topic 5.9 Story Draft: Society and the Industrial Age

**Status: Approved 2026-11-08 by the independent reviewer loop (Jeff's standing rule of 2026-10-12).**
Drafted 2026-11-08 from the CED source file, for the build the parent session started with "Build
5.9." Three review passes (six reviewers) checked it and every surface built from it against that file
and the scholarship; the loop closed on the three-pass safety valve with every finding fixed
(`docs/TOPIC-5-9-CLAIM-LEDGER.md`, Review findings). Review changed the story in these places, and the
surfaces carry the corrected wording: why women were paid less is a live debate; some, not "often,"
new-money families bought into land; the 1833 survey speaks of textile mills by fiber; a wife's property
"passed under her husband's control"; Riis's "most of the men were lodgers"; Manchester's 1851 figure is
the larger borough's; standards of living "rose for some, while in the fast-growing towns many people's
health was far worse than the nation's." Nothing ships until Jeff says "ship it".

**Taught:** no dates yet. Unit 5 class dates exist only through 5.3 (finals follow), and Jeff has not
named dates for 5.4 onward. The build adds no schedule entries; the dates are an open item in the
report.

**Branch baseline:** `claude/topic-5-9-build`, cut from `claude/unit-5-quality-structure-htdgg2` at
`3087e32` (Topics 4.6 to 4.8 converted to the lesson shape, and the lesson-shape standard itself, not
yet on `main`). 5.1 to 5.8 are on that base. No other branch with commits not on `main` touches 5.9
or the shared Unit 5 files: `claude/unit-5-completion-jueU7` (June), `claude/unit-5-ced-audit` (June),
`claude/behistorical-units-5-9-review-64445a` (August) and `repair-unit-5-ced-alignment` (September)
are older than every 5.x build now on the base.

**CED source: `scripts/lib/ced-source/unit-5.js`**, transcribed 2026-10-20 from the Fall 2026 CED,
Course Framework V.1, p. 108 (topic page) and p. 96 (Unit at a Glance). This draft quotes that file
and nothing else for what the CED requires. The unit story map (`docs/UNIT-5-STORY-MAP.md`) section
for 5.9 was a proposal; this build follows it, as section 8 says.

---

## 1. What the CED requires (p. 108)

- **Learning objective J** (Social Interactions and Organization): Explain how industrialization caused change in existing social hierarchies and standards of living.

Key Concepts, in the CED's order:

- **KC-5.1.VI.A**: New social classes, including the middle class and the industrial working class, developed.
- **KC-5.1.VI.B**: While women and often children in working class families typically held wage-earning jobs to supplement their families’ income, middle-class women who did not have the same economic demands to satisfy were increasingly limited to roles in the household or roles focused on child development.
- **KC-5.1.VI.C**: The rapid urbanization that accompanied global capitalism at times led to a variety of challenges, including pollution, poverty, increased crime, public health crises, housing shortages, and insufficient infrastructure to accommodate urban growth.

- **Reasoning move:** Continuity and Change, the CED's reasoning process for 5.9 (p. 96). The learning
  objective asks how industrialization "caused change in **existing** social hierarchies and standards
  of living." The word "existing" is the continuity: there was a ladder of rank before industry, and
  there was one after. The answer this story builds is **a before-and-after for each part of society:
  who was on top, who did the work, what women's and children's lives were like, and where and how
  people lived, saying in each what changed and what kept going.**
- **Suggested skill:** 4.B Contextualization, "Explain how a specific historical development or
  process is situated within a broader historical context." Students take one specific thing (a
  photograph of a crowded New York room, a household manual, a law) and explain the bigger story it
  sits inside: industrial capitalism pulling people into cities faster than they could be housed, or
  a middle class that could live on one earner.
- **Thematic focus:** Social Interactions and Organization (SIO).
- **Illustrative examples:** the CED prints none for 5.9. Every example in this story is the build's
  choice, and each is a claim in the ledger.
- **Sample activity:** the CED gives none for 5.9.

**Four things in these sentences that are easy to drop.**
1. **"Existing social hierarchies."** The objective is about change *to a ladder that was already
   there*. A story that says industry "created" class society, or "ended" the old order, gets the
   continuity wrong: landed families kept land, titles and power through the century.
2. **"Standards of living."** The objective asks about how well people lived, not only about who
   ranked where. That means wages, housing, health and how long people lived, and the CED's "for
   some" from 5.7 (KC-5.1) is the reminder that it moved differently for different classes.
3. **"To supplement their families' income" ... "who did not have the same economic demands to
   satisfy."** The CED gives the cause of the split in women's lives: money. Working-class women and
   children earned because the family needed it; middle-class women could stay home because one
   earner was enough. A story that says only "women were pushed into the home" has dropped the class
   difference, which is the whole Key Concept. "Increasingly" is a change over time, not a fixed fact.
4. **"At times led to a variety of challenges ... to accommodate urban growth."** Six named
   challenges (pollution, poverty, increased crime, public health crises, housing shortages,
   insufficient infrastructure), caused by the *speed* of growth ("rapid"), and tied to *global*
   capitalism, so not only British. "At times" means the challenges were not everywhere or constant.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-5-9-society-and-the-industrial-age.js`), the renderer config, the First & 10
entry in `scripts/lib/reading-content/unit-5.js`, the deep reading
`scripts/lib/deep-reading-content/topic-5-9.js`, the BeInTheRoom entry in `scripts/build-unit5-rooms.js`,
the deep audit, the unit story map, and the 5.7 and 5.8 First & 10s (what students were last taught).

**Consistent with the CED:**
- The renderer config's `collegeBoardKeyConcepts` carries learning objective J and all three Key
  Concepts in the CED's wording. The three learning targets map one each to the three Key Concepts.
- The deep audit calls 5.9 "well aligned to the current CED" and says to preserve it as the social
  consequences topic. Its three branches (classes, class-differentiated roles for women and children,
  urban problems) are the CED's, and this story keeps them.
- 5.8 hands forward: "Industry had changed who worked, where people lived and how families got by.
  What kind of society had it made? That is Topic 5.9." 5.8 named Manchester's conditions as the
  pressure behind reform in one sentence and London's sewers as an urban reform, and left "the city's
  crisis" to 5.9 (its story draft, section 8).
- 5.7 taught that standards of living rose "for some" (one estimate under 15 percent for British
  working families from the 1780s to the 1850s, faster from about 1860 to 1900) and pointed to 5.9 for
  city workers who stayed poor.

**Out of line, each fixed inside this build:**
1. **The lesson data's KC-5.1.VI.B reads "working-class families"**, with a hyphen the CED does not
   print ("working class families"). The renderer config has the CED's wording and wins on the page; the
   data file is corrected to match.
2. **The reasoning move and skill on the page.** The reading's badges and callouts read "Developments and
   Processes," "Causation" and "Comparison"; its reading target says "Topic 5.9 is a causation topic";
   the Skill Builder teaches causation; neither checkpoint declares Continuity and Change; nothing teaches
   the CED's suggested skill, 4.B Contextualization.
3. **No continuity anywhere.** Every surface tells the story as pure change ("rebuilt society from the
   ground up," "The Old Order Gets Scrambled"). The objective's "existing" hierarchies are never shown
   lasting.
4. **Placeholders and unverified material on the student page:**
   - The Evidence Lab bank (`evidenceLab.items`, read by no renderer) carries "[⚠ Teacher note: attach or
     transcribe a verified historical wage table ...]" and two more notes.
   - The Primary Source is a paraphrase presented as testimony, with "[⚠ Replace this block and the two
     above with verified transcript excerpts before classroom use.]" printed in the text students read.
   - The BeInTheRoom description carries "[Scenario blueprint, HTML build pending; not assigned in this
     ...]" in the lesson data.
   - Evidence card "Public Health Act of 1848": "A law of 1848, the year of the epidemic the cartoon above
     was drawn about." The cartoon is Punch, 25 September 1852; the epidemic it anticipates or follows is
     1848 to 1849 or 1853 to 1854. The card's two lines ("Government gained new tools ...") summarize, not
     quote, and the law is a reform (5.8's).
   - Evidence card "Manchester urban growth": "c. 25,000 people around 1770; more than 300,000 by the
     mid-nineteenth century," with no source and no boundary (township or borough).
   - Evidence card "Manchester from Kersal Moor": "commissioned view of Manchester" without saying by whom.
   - The map card "Industrial society" is a BeHistorical map shown as evidence.
5. **The BeInTheRoom room, "The Sanitary Board" (Manchester, 1842):** its alignment block names
   `KC-5.9.I–II` and `KC-5.9.II.A–D`, codes the CED does not have (story map conflict 2), and an
   objective the CED does not print; no "sanitary board" of Manchester sat in 1842 (Chadwick's report of
   that year was national); and its decisions are all about the reform (5.8's KC-5.1.V.D). The room is
   replaced.
6. **Ownership drift into 5.8:** the reading's last section and the lecture card credit "sanitation laws,
   public health measures, and housing rules" to "the story of Topic 5.8" (5.8's adjacent finding 3; 5.8
   teaches one urban reform, London's sewers). The Skill Builder and Checkpoint 2 ask for reforms.
7. **Unsupported generalizations:** "women were routinely paid less than men for the same labor" (the
   evidence is that women were paid less, mostly because they were given different jobs; the gap for the
   same work is disputed); "often working twelve-hour shifts" (true for some; stated as the rule); "the
   archetypal industrial city." Each is narrowed or removed.
8. **Leftovers:** `first10.note` says "build your AI Coach prompt"; the reading carries a `builderBody`
   about building an AI Coach prompt (retired 2026-08-31), `supportCards.beforeYouRead` ends "then open
   your AI Coach," a `docTitle` unlike its siblings, unpadded question numbers ("Q1") and a footer note.
9. **Pictures from other topics (`stableImages`):** none from outside the topic, but the three pictures
   are used ten times between them, and the map slot shows a painting where a map belongs.

## 3. The ninth-grade story

Topic 5.8 ended on a question: industry had changed who worked, where people lived and how families got
by, so what kind of society did it make? The answer is not "a brand-new one." Before industry there was
already a ladder of rank. Industry rebuilt the ladder: it added new rungs, moved people up and down, and
changed what life was like on each rung. In every part of this story, ask two questions: **what
changed, and what kept going?**

**Before: a ladder of land and birth.** In 1750, most people in Britain, as almost everywhere, lived in
the countryside. At the top were landowning families, the aristocracy and gentry, whose wealth and rank
came from land they inherited. Below them were farmers, craftsmen and laborers. Families mostly worked
together, on the farm or at home: women spun thread and children helped as soon as they could (Topic 5.3
showed that work moving into the factory).

**1. New classes.** Industry made two groups bigger and more important than ever.
- The **middle class**: factory owners, merchants and bankers, and the people who ran things for them,
  from engineers, doctors and lawyers to managers and clerks. Their place came from money they made and
  the education they paid for, not from land or titles. In Britain, the Reform Act of 1832 gave the vote
  to most middle-class men in the towns.
- The **industrial working class**: people who owned no land and no tools, and lived on the wages they
  earned in mills, mines, docks and workshops, at the hours the employer set.
- **What kept going:** the old landed families kept their land, their titles and much of their power. In
  1900 Britain's prime minister, Lord Salisbury, was a marquess. Rich middle-class families often bought
  country houses and married into the gentry. The ladder had new rungs; it was still a ladder.

**2. Work and home split by class.** Women and children had always worked. What changed was *where* they
worked, and how the answer split by class.
- In **working-class** families, one wage was rarely enough. Women and often children took wage-earning
  jobs to add to the family's income: in textile mills (in Britain in the 1830s, women and girls were a
  majority of factory workers), in other people's houses as servants, or sewing piecework at home. Women
  were usually paid less than men. The same pattern spread with industry: in Japan in 1900, women made up
  about 62 percent of the workers in private factories, most of them in textile mills.
- In **middle-class** families, one earner was enough, so the wife was increasingly expected to stay out
  of paid work and run the home and raise the children. Writers called the home a woman's proper "sphere"
  (historians call the idea *separate spheres*). In 1861 Isabella Beeton's *Book of Household Management*
  opened: "As with the commander of an army, or the leader of any enterprise, so is it with the mistress
  of a house." The "domestics" she would command were servants, most of them working-class women.
- **What kept going:** women were paid less and had fewer rights than men, in both classes. Until laws of
  1870 and 1882, an English wife's property and, until 1870, her earnings legally belonged to her
  husband. The CED's word is "increasingly": the middle-class home was an ideal that grew over the
  century, and many women's lives did not fit it.

**3. Cities that could not keep up.** The fastest change was where people lived.
- **The growth:** Manchester, the great cotton town, had about 23,000 people in a count of 1773, about
  70,000 at the first census in 1801, and more than 300,000 by 1851, counting the larger borough. That year's census found, for the
  first time, more than half the people of England and Wales living in towns.
- **The challenges** the CED names: coal smoke over the town and waste in the rivers (pollution); wages
  that barely paid the rent (poverty); whole families in one room or a cellar (housing shortages); no
  sewers or clean water for the new streets (insufficient infrastructure); and diseases that spread through
  dirty water and crowded rooms. Cholera reached Britain in 1831 and killed about 53,000 people in England
  and Wales in 1848 and 1849 (public health crises). More people were also charged with crimes, which rose
  until the early 1840s, though historians warn that the numbers also grew because towns set up police.
- **What it did to standards of living:** in the 1840s, a baby born in Manchester could expect to live only
  about 25 to 28 years, against about 40 to 42 for England and Wales as a whole (the low numbers are
  pulled down by the many babies and children who died). Comfortable families lived in cleaner streets and,
  later, suburbs, away from the smoke.
- **Not only Britain:** "global capitalism" brought the same pattern wherever industry and trade drew
  people in. Manhattan grew from about 515,000 people in 1850 to about 1.4 million in 1890. In 1890 the
  reporter Jacob Riis wrote that "three-fourths of its people live in the tenements," crowded apartment
  buildings, and photographed a room "not thirteen feet either way" where twelve men and women slept,
  lodgers paying "five cents a spot."
- **What kept going, and what changed by 1900:** poverty and disease were old; the speed and size of the
  new cities made them worse. Later in the century, sewers, clean water and police began to catch up (those
  reforms are Topic 5.8's), death rates fell, and wages rose faster after about 1860, but many city workers
  were still poor in 1900.

**So, how did industrialization change existing social hierarchies and standards of living?** It added a
middle class that rose by money and education and a working class that lived on wages, beside landed
families who kept much of their wealth and power; it moved work out of the home, sending working-class
women and children into wage jobs and keeping middle-class women increasingly at home; and it packed people
into cities that grew faster than they could house, clean or protect them, so standards of living rose for
some and fell, for a time, for many.

**And it hands on a turn.** Industry changed almost everything in fifty years. Or did it? Topic 5.10 asks
you to weigh the whole unit: how much did industrialization really change the world from 1750 to 1900?

## 4. The spine

**Industry did not end the old ladder of rank; it rebuilt it: a new middle class rose by money and
education beside landed families who kept much of their power, a new working class lived on wages, work
left the home and split women's lives by class, and cities grew faster than they could house, clean or
protect the people who poured in.**

The story map's spine ("Industry made a middle class and a working class, split women's lives by class,
and packed cities faster than they could cope") is kept in substance; the build adds the continuity
("rebuilt" a ladder that already existed; landed families kept power), because the reasoning move is
Continuity and Change and the objective says "existing."

"A new middle class ... a new working class" is KC-5.1.VI.A; "work left the home and split women's lives
by class" is KC-5.1.VI.B; "cities grew faster than they could house, clean or protect" is KC-5.1.VI.C.

Shorter for the wall: **New classes. Split homes. Crowded cities. A new ladder, still a ladder.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| The ladder of land and birth before industry; the household as a workplace | LO J ("existing social hierarchies") | The **baseline**: what was already true. |
| The middle class's sources of rank; the Reform Act of 1832 | KC-5.1.VI.A | A **new class** that rose by money and education. |
| Wage workers with no land or tools | KC-5.1.VI.A | A **new class** that lived on wages. |
| Lord Salisbury, a marquess, prime minister in 1900 | LO J (continuity) | The old top **kept going**. |
| Women and girls a majority of British factory workers in the 1830s; servants; Japan's mills, 1900 | KC-5.1.VI.B | Working-class women and children **earned wages** to support the family. |
| Mrs Beeton (1861); the Currier & Ives "Middle Age" print (1868) | KC-5.1.VI.B | The **middle-class ideal** of the wife at home. |
| Married women's property before 1870 and 1882 | KC-5.1.VI.B (continuity) | Women's **lower place kept going** in both classes. |
| Manchester, 1773 to 1851; the 1851 census | KC-5.1.VI.C ("rapid urbanization") | How **fast** the cities grew. |
| Cholera, 1831 and 1848 to 1849; Manchester's life expectancy in the 1840s | KC-5.1.VI.C ("public health crises"); LO J ("standards of living") | What the speed did to **health and life**. |
| Crime charges to the early 1840s, and the police | KC-5.1.VI.C ("increased crime") | A challenge, **read with care**. |
| Manhattan, 1850 to 1890; Riis (1890) | KC-5.1.VI.C ("global capitalism") | The **same pattern** outside Britain. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 5.8: what did workers organize to get? (Better conditions, shorter hours, higher wages, the vote.)
   (b) From 5.3: what changed for workers when spinning moved into the factory? (Everyone came to one
       building, at the hours the mill set.)
   (c) From 5.7: why does the CED say living standards rose "for some"? (Many city workers stayed poor.)
   **Bridge:** "Workers called for change because industry had changed their lives. Today: what kind of
   society did industry make, and how much of the old one kept going?"
3. **Topic question on screen, over a real historical scene (Wyld's Manchester, 1852):** How did
   industry change who was on top, who did the work, and how people lived, and what kept going?
4. **Road map** (the outline's section headers).
5. **First & 10.**
6. **Before: the ladder of land and birth** (section I).
7. **The middle class** (section II, KC-5.1.VI.A).
8. **The working class, and the old top that kept going** (section II, KC-5.1.VI.A).
9. **Working-class women and children earn** (section III, KC-5.1.VI.B).
10. **The middle-class home** (section III, KC-5.1.VI.B).
11. **What kept going for women** (section III, KC-5.1.VI.B).
12. **How fast the cities grew** (section IV, KC-5.1.VI.C).
13. **Six challenges** (section IV, KC-5.1.VI.C).
14. **What it did to life: health and life expectancy** (section IV, KC-5.1.VI.C).
15. **The skill (4.B), modeled on New York, 1890:** Riis's photograph in its broader context (section V,
    KC-5.1.VI.C).
16. **By 1900: what changed and what kept going** (section V).
17. **Retelling slide** (section 7).
18. **Work Time launch pad.**
19. **Landing, over a real historical scene.**

## 7. Retelling slide

A continuity-and-change table, one row per part of society, so a student can redraw it from memory:

| Part of society | Before industry | What changed | What kept going |
|---|---|---|---|
| **Who was on top** | Landed families, by birth | A middle class rose by money and education; won votes in 1832 | Landed families kept land, titles and power |
| **Who did the work** | Farm and craft families, at home | A working class lived on wages, at the employer's hours | Many still poor in 1900 |
| **Women and children** | Worked in the family household | Working-class women and children earned wages; middle-class women increasingly kept at home | Women paid less, with fewer rights |
| **Where people lived** | Mostly the countryside | Fast-growing cities: smoke, crowding, disease, crime | Poverty and disease, old problems made worse |

Result line: **New classes. Split homes. Crowded cities. A new ladder, still a ladder.**

Why this shape: the reasoning move is Continuity and Change. Each row is before, changed, kept going;
reading down the "changed" column gives the three Key Concepts, and reading down "kept going" gives the
objective's "existing" hierarchies.

## 8. Owns / bridge-only (from the unit story map)

- **5.9 owns:** KC-5.1.VI.A (new classes), KC-5.1.VI.B (women's and children's roles by class) and
  KC-5.1.VI.C (the challenges of rapid urbanization).
- **Bridge only:** the factory system (5.3), named as where work moved. "For some" and real wages (5.7):
  the 5.7 estimate is not retaught; "wages rose faster after about 1860" is one clause. Reforms (5.8,
  KC-5.1.V.D): sewers, clean water, factory laws and police are named as what "began to catch up," not
  taught; the 1832 Reform Act is named as a middle-class gain, not as a reform movement (5.8 owns the
  later Reform Acts). Meiji Japan (5.6): the 1900 factory figure is one sentence about women's wage work,
  not a return to Meiji policy. Immigration to New York (Unit 6, migration): named as who filled the
  tenements, not taught.
- **Story map change:** none to ownership. The spine adds the continuity, because the reasoning move is
  Continuity and Change. Unit-wide conflict 2 (BeInTheRoom's invented codes) is fixed for 5.9; the title
  already matches the CED (conflict 3 does not apply).
- **Hands to 5.10:** "Industry changed almost everything in fifty years. Or did it? How much did
  industrialization really change the world from 1750 to 1900?" (The story map gives 5.9 no hand-off line;
  this one points at 5.10's objective K.)

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-5-9-CLAIM-LEDGER.md`)

The new claims, and the ones most likely to be wrong by the defect classes Units 2 to 5 kept finding:

- Numbers that are approximate or easily mythologized, each to two sources or narrowed: Manchester's
  population (1773, 1801, 1851, and which boundary); the 1851 urban majority; women and girls as a majority
  of factory workers in the 1830s; Japan's 62 percent in 1900; cholera deaths, 1848 to 1849; Manchester's
  life expectancy in the 1840s against the national figure; Manhattan's population.
- Quotations: Beeton (1861), and Riis (1890), word for word from the first editions' text.
- Superlatives and single causes to keep out: "the first industrial city"; "industry created class";
  "middle-class women did nothing"; "women were paid half for the same work"; "crime exploded"; "the
  average worker died at 17" (Chadwick's average age at death, read as a lifespan, the 5.8 audit's warning).
- Continuity claims stated with care: Salisbury; the landed families' power; the property laws of 1870 and
  1882 (England and Wales, and not Scotland).

## 10. Visual requirements per beat

Pictures are checked in Phase 6. Candidates found while drafting (Library of Congress records through
loc.gov's JSON; Wellcome Collection's catalogue API; Wikimedia Commons answered HTTP 429, as it did for
5.6 to 5.8):

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 3 | William Wyld, *Manchester from Kersal Moor*, watercolour, 1852 (in the repo; Royal Collection) | The question: a city of chimneys behind a country scene, the old ladder and the new. | A romantic view for a royal collection; not a picture of how workers lived. |
| 7 | Currier & Ives, *The Four Seasons of Life: Middle Age*, lithograph, 1868 (LoC 92500887) | The middle-class home: a father coming in from the porch, a mother with the children. | American, an ideal printed to sell, not a photograph of a family. |
| 9 | T. Allom, power-loom weaving, engraving, 1835 (in the repo) | Women at the looms. | An illustration for a book on the cotton industry. |
| 9 | Jacob Riis, "Sewing pants for the trade in a Gotham Court 'flat'," about 1890 (LoC 2002710299) | Working-class women and a girl earning at home. | New York, not Britain; Riis posed and chose his scenes. |
| 13 | John Leech, "A Court for King Cholera," Punch, 25 September 1852 (in the repo) | Crowding, filth and disease in one court. | A cartoon; its link of cholera to crowding rather than water is the thinking of 1852. |
| 14 | John Snow's map of cholera deaths around Broad Street, 1854 (Wellcome Collection, public domain) | A public health crisis traced to one water pump. | Snow's map, not a BeHistorical map. |
| 15 | Jacob Riis, "Lodgers in a crowded Bayard Street tenement, 'five cents a spot'," about 1889 to 1890 (LoC 2002710259) | The skill: a specific scene in a broader context. | Taken at midnight with a flash on a police visit; Riis's book carries prejudiced lines about immigrants. |
| 16 | Jacob Riis, "Garbage in the streets, East Fifth Street," about 1890 (LoC 2002710278) | Infrastructure that had not caught up. | Same. |
| 17 | The retelling table (template) | | |
| 19 | Riis, "five cents a spot," or the Wyld | Landing on the spine. | |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the final
report.

1. **Title:** the page keeps the CED's title, "Society and the Industrial Age." The reading's title is
   "A New Ladder," on the reading, both lesson files, the deck and Canvas.
2. **Skill Builder skill:** moves to the CED's suggested skill, 4.B Contextualization, "Explain how a
   specific historical development or process is situated within a broader historical context." Modeled on
   a neutral everyday example, then practiced on Riis's 1890 photograph and words.
3. **Learning targets:** three, one per Key Concept, each written as a change and a continuity. Checkpoint 1
   assesses Targets 1 and 2; Checkpoint 2 assesses Target 3 and the learning objective (what changed and
   what kept going) and declares Continuity and Change.
4. **Primary Source:** Isabella Beeton, *The Book of Household Management* (1861), the opening of chapter 1,
   with three questions. It replaces the paraphrased "testimony" with its placeholder warning.
5. **Map module:** "Industrial Cities, 1773 to 1890," a map with Manchester, London, Glasgow, New York and
   Osaka marked only if the key can say something verified about each; otherwise Manchester, London and New
   York. It replaces the old map, which the Map slot showed as a painting.
6. **Evidence Lab:** real objects only (Wyld, the Currier & Ives print, the power-loom engraving, Leech's
   cartoon, Snow's map, Riis's photographs); no AI picture, no BeHistorical map, no unsourced summary card.
7. **BeSurreal:** a fourteen-year-old girl in Manchester in 1851 who works as a maid in a middle-class house
   and goes home to her family's cellar room, so one day crosses both halves of KC-5.1.VI.B and the city's
   challenges.
8. **BeInTheRoom:** "The Sanitary Board" (an invented Manchester board, invented Key Concept codes) is
   replaced by "The Housing Commission": London, 1884, the Royal Commission on the Housing of the Working
   Classes deciding what its report should say caused the housing crisis, with the commission's own two
   causes, a union leader and a prince among its members, and Octavia Hill among its witnesses. The old file
   is removed (it stays in git history) and the lesson links the new one.
9. **Deep reading:** rebuilt around this story.
10. **Required modules** (Phase 8): 02 First & 10, 06 Checkpoint 1, 10 Checkpoint 2, and 05 Skill Builder,
    which practices the CED's suggested skill for 5.9 (4.B) on Riis's New York. The Evidence Lab is optional.
