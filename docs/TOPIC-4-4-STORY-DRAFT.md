# Topic 4.4 Story Draft: Maritime Empires Established

**Status: Delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).**
Jeff started this build with "build 4.4" on 2026-10-14 (he asked for 4.5, and chose to build
4.4 first when told it had not been built). The Phase 9 reviewers check this story against the
CED source file and the scholarship; the record of what they found is in
`docs/TOPIC-4-4-CLAIM-LEDGER.md`, under "Review findings".

**Resume here (2026-10-15, second session):** Phases 1 to 8 are committed, and review pass 1
(37 findings) is fixed and logged in the claim ledger. The first session ran out of usage while
pass 2 was running, and its pass 2 never reported. This session took the build over and relaunched
pass 2 from scratch (two fresh reviewers, prompts as in pass 1, working from new captures). Next:
fix and log pass 2, add the build-surface rows to the claim ledger, then pass 3 if needed, the
Unit 4 fingerprint, the browser suite and the topic audit.

**Taught:** Green Thursday 2026-11-05, Silver Friday 2026-11-06, from Jeff's corrected November
Canvas calendar (2026-10-14), already in `assets/data/announcements-schedule.js` as date-only
entries.

**Branch baseline:** `claude/topic-4-4-build`, branched from `main` at `a25c96fa`, which carries
the finished 4.3 build. No other branch touches 4.4 or the shared Unit 4 files.
`claude/topic-4-3-build` and `claude/unit-4-dates` change only the schedule, the board and the
Canvas text, and the 4.3 date change they carry is already on `main`.
`claude/wonderful-mendel-fcgnqo` (not on `main`) adds Jeff's 2026-10-14 standard that a deck's
question and landing slides carry a cinematic picture; this deck is built to meet it.

**CED source: `scripts/lib/ced-source/unit-4.js`**, transcribed 2026-10-11 from the Fall 2026
CED, Course Framework V.1, pp. 83 and 84 (topic pages) and p. 75 (Unit at a Glance). This draft
quotes that file and nothing else for what the CED requires. The unit story map
(`docs/UNIT-4-STORY-MAP.md`, approved 2026-10-11) supplies the spine, the hand-offs and the
owns / bridge-only split; it agrees with the source file on 4.4.

---

## 1. What the CED requires (pp. 83 and 84)

Three learning objectives, each under its own theme. A story has to answer all three.

- **Learning objective E (Governance, GOV):** Explain the process of state building and expansion among various empires and states in the period from 1450 to 1750.
- **Learning objective F (Economic Systems, ECN):** Explain the continuities and changes in economic systems and labor systems from 1450 to 1750.
- **Learning objective G (Social Interactions and Organization, SIO):** Explain changes and continuities in systems of slavery in the period from 1450 to 1750.

Key Concepts, as the CED pairs them with the objectives:

- **KC-4.3.II.A.i** (LO E): Europeans established new trading posts in Africa and Asia, which proved profitable for the rulers and merchants involved in new global trade networks. Some Asian states sought to limit the disruptive economic and cultural effects of European-dominated long-distance trade by adopting restrictive or isolationist trade policies.
- **KC-4.3.II.C** (LO E): Driven largely by political, religious, and economic rivalries, European states established new maritime empires, including the Portuguese, Spanish, Dutch, French, and British.
- **KC-4.3.II.A.ii** (LO E): The expansion of maritime trading networks fostered the growth of states in Africa, including the Asante and the Kingdom of the Kongo, whose participation in trading networks led to an increase in their influence.
- **KC-4.3.II.A.iii** (LO F): Despite some disruption and restructuring due to the arrival of Portuguese, Spanish, and Dutch merchants, existing trade networks in the Indian Ocean continued to flourish and included intra-Asian trade and Asian merchants.
- **KC-4.2.II.D** (LO F): Newly developed colonial economies in the Americas largely depended on agriculture, utilized existing labor systems, including the Incan mit’a, and introduced new labor systems including chattel slavery, indentured servitude, and encomienda and hacienda systems.
- **KC-4.2.II.B** (LO G): Enslavement in Africa continued in its traditional forms, including incorporation of enslaved persons into households and the export of enslaved persons to the Mediterranean and the Indian Ocean regions.
- **KC-4.2.II.C** (LO G): The growth of the plantation economy increased the demand for enslaved labor in the Americas, leading to significant demographic, social, and cultural changes.

- **Reasoning move:** Continuity and Change, the CED's reasoning process for 4.4 (p. 75). All
  three objectives are worded as continuity and change, and so is the spine: in each of the
  three places the topic looks (who ruled, trade and work, slavery), something new arrived and
  something older kept going.
- **Suggested skill:** 2.A Sourcing and Situation, "Identify a source’s point of view, purpose,
  historical situation, and/or audience." In this topic that is two real documents written by
  rulers who were setting terms for European traders: King Afonso I of Kongo's letter of 6 July
  1526 to King João III of Portugal, and the Tokugawa shogunate's 1635 memorandum to its
  magistrates in Nagasaki. Each has an author, an audience and a purpose a student can name,
  and each is misread without them.
- **Thematic focus:** Governance (GOV); Economic Systems (ECN); Social Interactions and
  Organization (SIO). (The CED prints the second "Economics Systems"; the course's theme list
  calls it Economic Systems.)
- **Illustrative examples (optional):** Asian states that adopted restrictive or isolationist
  trade policies: Ming China, Tokugawa Japan. Indian Ocean Asian merchants: Swahili Arabs,
  Omanis, Gujaratis, Javanese. The CED says these "do not in any way constitute additional,
  preferred, or required information." All six are used, because each carries a Key Concept
  sentence that has no other concrete example on the CED page; the other names in this story
  (Elmina, Goa, Malacca, Macau, Dejima, Afonso I, Feyiase, Potosí) are teaching choices.
- **Sample activity:** none for 4.4.

**Five things in these sentences that are easy to drop.**
1. **"Some Asian states sought to limit."** The second sentence of KC-4.3.II.A.i has no surface
   today (unit story map, conflict 12). It is the strongest continuity in the topic: the
   strongest states in Asia set the terms on which Europeans traded.
2. **"Driven largely by political, religious, and economic rivalries."** KC-4.3.II.C names the
   cause of the empires, and nothing on the current pages teaches it (conflict 12).
3. **"Whose participation in trading networks led to an increase in their influence."** Kongo
   and Asante are in the targets but not in the story. They grew stronger through the same trade
   that later carried their captives away, and the CED's sentence is about the growth.
4. **"Continued to flourish."** The CED's word for the Indian Ocean is not "survived." The
   Portuguese disrupted and restructured it, and it went on flourishing.
5. **"Continued in its traditional forms."** Slavery in Africa did not begin with the Atlantic
   trade, and its older forms (households, the routes to the Mediterranean and the Indian Ocean)
   went on alongside it. What changed was the scale and the kind of slavery the plantations
   demanded.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-4-4-maritime-empires-established.js`), the renderer config, the First & 10
entry in `scripts/lib/reading-content/unit-4.js`, the deep reading
`scripts/lib/deep-reading-content/topic-4-4.js`, the BeInTheRoom scenario in
`scripts/build-unit4-rooms.js` (The Goa Fort Council), the map spec `topic-4-4` in
`scripts/lib/instructional-map-specs.js`, the CED and coherence contracts, the deep audit, and the
4.3 audit record and claim ledger.

**Consistent with the CED:**
- The lesson data and renderer config carry all three learning objectives and all seven Key
  Concepts with the CED's wording, and the CED's six illustrative examples.
- The four learning targets were repaired on 2026-09-18 to cover state building, Indian Ocean
  continuity, labor systems and slavery, and the two checkpoints follow them.
- Lecture cards 2 to 4 already frame trade, labor and slavery as continuity and change.

**Out of line, each fixed inside this build:**
1. **Ownership drift into 4.5:** the subtitle names "three distinct models ... joint-stock
   company"; the First & 10 vocabulary carries VOC, Joint-Stock Company, Batavia, British EIC and
   Spice Islands, none used in its text; the deep reading's section 04 and its closing card are
   about the VOC charter; the Evidence Lab has the VOC charter card; the map key and the
   `stableImages` map picture are VOC material; the BeInTheRoom description in the lesson data
   offers "manage the VOC's Spice Islands trade network." Joint-stock companies belong to 4.5.
2. **Ownership drift elsewhere:** the casta painting (Evidence Lab card and the Content Delivery
   module picture) is 4.7's; "Columbus Taking Possession" (Evidence Lab card and Checkpoint 2
   picture) is 4.2's; the deep reading's section 02 retells the conquests of Tenochtitlan and
   Cajamarca, which no Unit 4 topic owns as conquests.
3. **Thin CED coverage (story map conflict 12):** nothing teaches the rivalries that drove the
   empires or the Ming and Tokugawa limits on European trade.
4. **The suggested skill is not practiced.** The Skill Builder teaches continuity and change;
   nothing practices 2.A, naming a source's point of view, purpose, situation or audience.
5. **Overstatements:** the map key says Goa, Malacca and Hormuz "gave Portugal control over
   Indian Ocean trade"; the deep reading says Spain built "the first large territorial empire
   ever governed across an ocean" (story map's list of claims to check).
6. **Map:** titled "c. 1550" while its key describes the VOC at Batavia "by c. 1620"; its prompt
   asks only about Portuguese chokepoints. Kongo, Asante, the Swahili coast, Gujarat, Japan and
   Macau are not the subject of any map prompt.
7. **Primary Source:** the Las Casas passage is labeled "adapted" with no translator, and it reads
   as a paraphrase rather than a translation ("not because they were weak or incapable, but
   because they were destroyed" is not a line of the *Brevísima relación* in any translation
   this build could find). It is replaced with a credited translation of a source that practices
   2.A.
8. **BeSurreal (Nahua noble, c. 1535):** sends forty workers to "the silver mines to the north"
   in 1535, about a decade before the northern silver strikes (Zacatecas, 1546); its population
   figures for one town have no source.
9. **Evidence Lab:** of five cards, one is a 19th-century painting of 1492, one a casta painting,
   one the VOC charter, and one the course's own map; only the Malindi pillar is a 4.4 object,
   and nothing shows Kongo, Asante, Japan, China, Indian Ocean merchants, a labor system or
   slavery.
10. **Module-card pictures** (`stableImages`): the VOC ship, the Malindi pillar, a casta
    painting, a 1700 world map, the Waldseemüller map, the Florentine Codex smallpox page (4.3),
    a 1936 Pueblo Revolt mural (4.6), a Persian astrolabe (4.1), Vasco da Gama (4.2) and
    Columbus (4.2).
11. **Leftovers:** `first10.note` (lesson data and renderer config) still says "build your AI
    Coach prompt" (retired 2026-08-31); the reading still carries a `builderBody`; its skill
    tags are Causation, Comparison and Argumentation, none of them 2.A, and two of its three
    question badges are Causation and Comparison-era labels; the lecture intro speaks to the
    teacher ("Topic 4.4 is bigger than comparing European empire models").
12. **BeInTheRoom (The Goa Fort Council, 1515)** fits KC-4.3.II.A.i and II.A.iii and stays; it
    is read in Phase 7 for the same defects as every other surface.

## 3. The ninth-grade story

Last topic ended with a question. Disease had emptied much of the Americas of its people, and the
new sugar plantations needed more workers than ever. Who would do the work, and who would rule?
Today is the answer, and it is bigger than the Americas, because the ships were reaching Africa
and Asia too.

**Why build empires at all.** After 1500, five European states built empires that were held
together by ships: Portugal, Spain, the Dutch Republic, France and England (Britain after 1707).
They did it because they were rivals. They competed for power, so each wanted what the others
had. They competed over religion: Catholic Portugal and Spain saw their voyages as a war against
Islam and a mission to spread Christianity, and after the Reformation Protestant England and the
Dutch fought Catholic Spain. And they
competed for money: spices, gold, sugar, and the trade that carried them. When one state found a
route or a rich coast, the others came after it.

**What an empire from the sea looked like.** In Africa and Asia it usually looked like a fort on
a coast. Portugal built São Jorge da Mina, a fortress on the Gold Coast of West Africa, in 1482,
to buy gold. It took Goa in India in 1510, Malacca on the strait between the Indian Ocean and the
South China Sea in 1511, and Hormuz at the mouth of the Persian Gulf in 1515. A **trading post**
is a small fortified base where a foreign state's merchants buy and sell. These posts made money
for the kings who sponsored them and the merchants who traded through them. The Dutch, and later
the English and French, built their own, often by taking Portugal's. In the Americas, where
disease and conquest had broken the great Indigenous states, the Spanish and Portuguese took whole
territories and the people on them.

**But Asia set its own terms.** The strongest states in Asia did not let Europeans in on
Europe's terms. Ming China let the Portuguese settle at Macau, a small port on the south coast,
from 1557, and kept them under Chinese officials and Chinese rules. Japan went further. Its rulers,
the Tokugawa shoguns, feared that Christianity, which Portuguese and Spanish missionaries had
spread, would split Japan. In 1635 the shogun's senior councilors ordered the officials at
Nagasaki that no Japanese ship could sail abroad and that any Japanese who returned from abroad
must be put to death. In 1639 they banned Portuguese ships altogether. From 1641 the only Europeans
allowed to trade were the Dutch, confined to a small artificial island in Nagasaki harbor called
Dejima, beside Chinese merchants who traded in the city. Europe's empires grew, and China and Japan
still decided how far into Asia they reached.

**And the old ocean kept trading.** Before the Portuguese came, the Indian Ocean was already crowded
with merchants from East Africa, Arabia, India, Southeast Asia and China (Topic 2.3). The Portuguese tried to control it with guns: they
made other ships buy a pass called a **cartaz** and attacked ships that sailed without one. That
was a real change. But Gujarati merchants from western India kept shipping cotton cloth, often
buying a pass and sailing on. Swahili Arab traders on the East African coast kept trading. Omani
Arabs drove the Portuguese out of Muscat in 1650, and in 1698 took the Portuguese fortress at
Mombasa. Javanese merchants kept carrying rice and spices. Much of the ocean's trade went on being
trade between Asian ports, carried by Asian and African merchants, and the Europeans often made
their money by joining it. The CED's word for this trade is that it "continued to flourish."

**African states grew too.** The same trade made some African states stronger. The Kingdom of
Kongo, near the mouth of the Congo River, welcomed the Portuguese in the 1480s, and its king was baptized in 1491. His son Afonso I,
king from the early 1500s, made Christianity the royal religion and traded with Portugal for
goods, priests, teachers and weapons that strengthened his rule. Kongo's influence grew. Two hundred
years later, on the Gold Coast, the Asante kingdom rose by controlling gold and buying guns from
Dutch and English traders on the coast. In 1701 Asante defeated the stronger kingdom of
Denkyira at the battle of Feyiase and became the main power of the region.

**What Afonso actually wrote.** In 1526 Afonso wrote to the king of Portugal that Portuguese
traders were carrying away "our native-born countrymen and the children of our nobles and vassals
as well as relatives of ours," and asked him to send "neither traders nor trading goods." Read
alone, that sounds like a king against slavery. Read with its author and audience in mind, it
says something more precise. Afonso himself sold war captives from outside Kongo to the
Portuguese, and Kongo had its own enslaved people. What he wanted stopped was thieves seizing
his own free-born subjects and selling them to traders he did not control, which was taking trade, and loyalty, out
of the king's hands. His audience was the one king who could order the Portuguese traders to obey
him. That is sourcing: who wrote it, to whom, and why changes what it means.

**Work in the colonial Americas.** In the Americas the colonies made money mostly from farming
(sugar, tobacco, wheat, cattle) and from mining. They needed workers, and they got them in two
ways. Some labor systems already existed. The Inca had required each community to send people to
work for the state in turns, a labor duty called the **mit’a**. In the 1570s the Spanish viceroy
Francisco de Toledo turned that duty into a draft that sent thousands of Andean men each year to
the silver mine at Potosí. An old system kept its name and changed its master. Other systems were
new. **Encomienda** gave a Spanish colonist the labor and tribute of a group of Indigenous people.
On a **hacienda**, a large estate, Indigenous and mixed-race workers farmed and herded for the
owner, often for wages and sometimes tied by debt. In the English colonies, poor Europeans paid
for their voyage with four to seven years of work under a contract, **indentured servitude**. And
on the plantations, enslaved Africans were held as **chattel**: owned as property for life, and
their children too.

**Slavery: old and new.** Slavery was not new in Africa. In many African societies, enslaved
people were taken into households and, over time, could become part of the family. Captives also
went north across the Sahara to the Mediterranean world, and east to Arabia, Persia and India
across the Indian Ocean. Those older forms went on through this whole period. What changed was
the plantations. Sugar, and later tobacco, needed huge numbers of workers. In the whole 1500s,
fewer than 300,000 Africans were forced onto ships to the Americas. In the fifty years from 1701 to
1750, more than 2.5 million were. The Atlantic trade carried more people across an ocean than any
slave trade before it, and slavery in the Americas was inherited and for life, and it came to be tied to race: laws in the English colonies made the
children of enslaved women enslaved too. Africans and their descendants became most of the people
in the Caribbean colonies and much of Brazil, and their languages, faiths and foods came with
them. That is the "significant demographic, social, and cultural changes" the CED names.

**Put it together.** Europeans built empires from the sea: new forts, new colonies, new labor
systems and a far larger slave trade. But much of the world kept its own rules. China and Japan
set the terms of trade. Asian merchants kept the Indian Ocean busy. Kongo and Asante grew strong.
Older labor duties were reused, and older forms of slavery went on. Some things changed fast, and
some barely moved.

**And it left a question.** The empires existed. How did their rulers make them pay, and what did
the money do to the people inside them? That is Topic 4.5.

## 4. The spine

**Europeans built empires from the sea, but much of the world kept its own rules: some things
changed fast and some barely moved.** (Approved with the unit story map, 2026-10-11.)

"Built empires from the sea" covers the rivalries, the trading posts and the American colonies.
"Kept its own rules" covers China and Japan setting terms, the Indian Ocean continuing, and
Kongo and Asante growing. "Changed fast" covers the new labor systems and the plantation demand
for enslaved people; "barely moved" covers the mit’a reused and slavery in Africa continuing in
its older forms. The spine is the reasoning move: every case is sorted as change or continuity,
and why.

Shorter for the wall: **Empires from the sea. A world with its own rules.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| Political, religious and economic rivalries among Portugal, Spain, the Dutch, France and England | KC-4.3.II.C | The cause of the empires, in the CED's own three words. |
| Elmina 1482, Goa 1510, Malacca 1511, Hormuz 1515: forts on coasts, not provinces | KC-4.3.II.A.i (first sentence) | What a trading post was, and why it paid the rulers and merchants who backed it. **Change.** |
| Macau from 1557 under Ming officials; the 1635 Tokugawa memorandum, the 1639 ban on Portuguese ships, the Dutch on Dejima from 1641 | KC-4.3.II.A.i (second sentence); examples Ming China, Tokugawa Japan | Asian states limited European trade for their own reasons. **Continuity** of Asian state power. Also the 2.A model source. |
| The cartaz; Gujarati, Swahili Arab, Omani and Javanese merchants trading on; Oman takes Muscat (1650) and Mombasa (1698) | KC-4.3.II.A.iii; examples Gujaratis, Swahili Arabs, Omanis, Javanese | Disruption without replacement. **Change and continuity in one case.** |
| Kongo under Afonso I; Asante's rise, Feyiase 1701 | KC-4.3.II.A.ii | African states growing through the new trade. **Change.** |
| Afonso's letter of 6 July 1526 (John K. Thornton's translation) | KC-4.3.II.A.ii, KC-4.2.II.B; 2.A | Sourcing changes the meaning: a king defending his control of trade and of who could be enslaved, not a king against all slavery. |
| Colonial economies built on farming and mining | KC-4.2.II.D ("largely depended on agriculture") | Why the colonies needed so many workers. |
| The mit’a, reorganized by Toledo in the 1570s for Potosí | KC-4.2.II.D ("utilized existing labor systems") | An old system reused. **Continuity with change.** |
| Encomienda, hacienda, indentured servitude, chattel slavery | KC-4.2.II.D ("introduced new labor systems") | New systems. **Change.** |
| Enslaved people incorporated into households; export across the Sahara and the Indian Ocean | KC-4.2.II.B | Slavery in Africa continued in its older forms. **Continuity.** |
| Fewer than 300,000 Africans carried to the Americas in the 1500s, more than 2.5 million in 1701 to 1750 (Slave Voyages estimates) | KC-4.2.II.C ("increased the demand") | The scale of the change, as estimates. |
| Hereditary, race-based chattel slavery; African majorities in Caribbean colonies; African languages, faiths and foods | KC-4.2.II.C ("demographic, social, and cultural changes") | The three kinds of change the CED names. Cultural mixing itself is **bridge only** (4.5). |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 4.3: what did the new sugar plantations need more of than ever?
   (b) From 4.2: where did Vasco da Gama's route lead, and what did Portugal want there?
   (c) From 2.3: name one group of merchants who traded on the Indian Ocean before the Europeans
   arrived.
   **Bridge:** "4.3 ended with a question: who would do the work, and who would rule? Today
   Europeans build empires from the sea. Watch for two things: what changed, and what kept going
   the way it already had."
3. **Topic question on screen, over a real historical scene:** Europeans built empires from the
   sea. What changed, and what kept going?
4. **Why build empires (rivalries).** Political, religious, economic; the five empires.
5. **Forts on coasts.** Trading posts in Africa and Asia, and why they paid. Territory in the
   Americas.
6. **Asia sets the terms.** Ming China at Macau; Tokugawa Japan, 1635 to 1641.
7. **Sourcing a ruler's order (2.A model).** The 1635 memorandum: author, audience, purpose,
   situation.
8. **The old ocean keeps trading.** The cartaz, and the merchants who traded on.
9. **African states grow.** Kongo and Asante.
10. **Afonso's letter (2.A practice).** What it says, and what it means once you know who wrote
    it, to whom, and why.
11. **Work in the Americas.** Old (mit’a) and new (encomienda, hacienda, indentured servitude,
    chattel slavery).
12. **Slavery in Africa continues.** Households; the Sahara and the Indian Ocean.
13. **The plantations change slavery.** The numbers by period, and the demographic, social and
    cultural changes.
14. **Myths.** "Europe took over the world after 1500"; "slavery began with the Atlantic trade";
    "African rulers had no power in the trade."
15. **Retelling slide** (section 7).
16. **AP synthesis:** answer the three objectives in three sentences, each one a change and a
    continuity, then hand off to 4.5.
17. **Landing, over a real historical scene.**

## 7. Retelling slide

A continuity-and-change ledger a student can redraw from memory: three rows, one per learning
objective, and two columns.

| | What changed | What kept going |
|---|---|---|
| **Who ruled** (LO E) | Five European empires, driven by rivalry, built forts on the coasts of Africa and Asia and colonies in the Americas. Kongo and Asante grew stronger through the new trade. | China and Japan set the terms of trade; Europeans held coasts, not Asia. |
| **Trade and work** (LO F) | The cartaz; new labor systems in the Americas: encomienda, hacienda, indentured servitude, chattel slavery. | Asian merchants kept the Indian Ocean trading; the Inca mit’a reused for Spanish mines. |
| **Slavery** (LO G) | Plantations made slavery in the Americas far larger, lifelong, inherited and tied to race. | Slavery in Africa went on in its older forms: households, the Sahara, the Indian Ocean. |

Result line: **Europeans built empires from the sea, but much of the world kept its own rules.**

Why this shape: the reasoning move is continuity and change, and the CED gives 4.4 three
objectives. Three rows answer the three objectives; two columns are the reasoning move. The
`continuity-change` template carries one turning point with things that changed and things that
carried on, but it has no rows, so the deck builds the ledger as a two-column matrix
(`split-matrix`), which keeps both columns and has room for three rows.

## 8. Owns / bridge-only (from the unit story map)

- **4.4 owns:** European trading posts in Africa and Asia, and the new maritime empires driven by
  political, religious and economic rivalries (KC-4.3.II.A.i, II.C); Asian states limiting
  European trade, with Ming China and Tokugawa Japan; African states growing through the trade,
  Asante and Kongo (II.A.ii); Indian Ocean networks continuing to flourish with Asian merchants
  (II.A.iii); colonial labor systems, the old (mit’a) and the new (chattel slavery, indentured
  servitude, encomienda, hacienda) (KC-4.2.II.D); slavery in Africa continuing in its traditional
  forms, and the plantation economy's demand for enslaved labor in the Americas (KC-4.2.II.B,
  II.C).
- **Bridge only:**
  - Joint-stock companies and the VOC (4.5). The Dutch appear as a rival empire and as the
    traders on Dejima; how they were organized is not taught.
  - Silver's global flow (4.5). Potosí appears only as where the mit’a sent its workers.
  - Casta (4.7). Not mentioned.
  - Cultural mixing in the Atlantic world (KC-4.1.IV.D.ii) and gender and family change in Africa
    (KC-4.2.III.C) (4.5). KC-4.2.II.C's "cultural changes" is named in one sentence and handed on.
  - Resistance by enslaved people and Maroon societies (4.6). Not taught.
  - The conquests of the Mexica and Inca: one clause, as the reason the Spanish could take
    territory in the Americas.
- **Hands to 4.5:** "The empires exist. How did rulers make them pay, and what did the money do
  to the people inside them?"

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-4-4-CLAIM-LEDGER.md`)

The claims that shaped the story, and how:

| Claim | Status |
|---|---|
| Afonso I's 1526 letter opposed the slave trade (the common reading) | **Narrowed:** Heywood 2009 shows Afonso sold foreign war captives and complained about the enslavement of free-born Kongo subjects; the letter is taught as a king defending control of trade and of who could be enslaved. |
| "Goa, Malacca and Hormuz gave Portugal control over Indian Ocean trade" (current map key) | **Narrowed:** the cartaz disrupted and taxed shipping; Asian merchants traded on, often under a pass. |
| "The first large territorial empire ever governed across an ocean" (current deep reading) | **Removed** with the section it sits in (the deep reading is rebuilt around this story). |
| Elmina 1482, Goa 1510, Malacca 1511, Hormuz 1515 | Ledger: standard dates. |
| Macau from 1557, under Ming officials | Ledger: 1557 is the start of permanent settlement allowed by provincial officials; formal recognition and rent dates are argued (1554 to 1573). Stated as "from 1557." |
| 1635 memorandum to the Nagasaki magistrates; Portuguese banned 1639; Dutch on Dejima from 1641 | Ledger: Vaporis, *Voices of Early Modern Japan* (2012), translating the memorandum and the 1639 exclusion; Dejima 1641. |
| Oman takes Muscat 1650 and Fort Jesus, Mombasa, 1698 | Ledger. |
| Asante defeats Denkyira at Feyiase, 1701; guns from Dutch and English traders | Ledger: the battle's date rests on Dutch archives; Osei Tutu's reign dates disagree, so none is given. |
| Toledo's mit’a for Potosí, 1570s, thousands of men a year | Ledger: one-seventh of adult men in the draft districts each year; counts run from about 9,000 (1573) to more than 14,000 (1578). Stated as "thousands." |
| Fewer than 300,000 embarked in the 1500s; more than 2.5 million in 1701 to 1750 | Ledger: Slave Voyages estimates, 277,505 for 1501 to 1600 and 2,560,634 for 1701 to 1750. |
| Indentured servants served four to seven years | Ledger. |
| Children of enslaved women were enslaved by law in the English colonies | Ledger: Virginia, 1662. |

## 10. Visual requirements per beat

Pictures are checked against Wikimedia Commons in Phase 6, and the build records which ones were
verified. No image generator key is set in this environment, so AI pictures are skipped and their
prompts saved to `docs/TOPIC-4-4-IMAGE-PROMPTS.md` if any beat needs one. The question and landing
slides carry a real historical scene, under Jeff's standard of 2026-10-14.

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 3, 17 | A 17th-century scene of a European trading post or ship in Asia or Africa: a Japanese *nanban* screen of the Portuguese at Nagasaki (c. 1600), or a 17th-century view of Elmina or Dejima | A real scene of Europeans arriving on someone else's terms. | A later copy, or a 19th-century view of Dejima; say so. |
| 4, 5 | One map of the forts, the colonies and the routes | Forts on coasts, territory in the Americas. | The course's own map; rebuilt in this build. |
| 6, 7 | Dejima, in a Japanese or Dutch picture | A trading post on Japan's terms. | Dates. |
| 8 | A picture of Indian Ocean shipping or a port: Mombasa's Fort Jesus, or a 16th-century view of an Asian port | The ocean's own merchants. | A modern photograph of an old building; say so. |
| 9, 10 | A Kongo Christian crucifix (16th or 17th century); Asante brass gold weights | African states using the trade, in their own objects. | Dates of objects are broad. |
| 11 | Potosí in Cieza de León's 1553 woodcut, or the Codex Kingsborough page on encomienda tribute | Labor systems on a real page. | Potosí's silver is 4.5's; caption it as the mine the mit’a served. |
| 13 | A 17th-century image of a sugar mill worked by enslaved people | The plantation's demand. | A European artist's view; say so. |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the
final report.

1. **Skill Builder skill:** moves to the CED's suggested skill, 2.A Sourcing and Situation,
   modeled on the 1635 Tokugawa memorandum and practiced on Afonso's 1526 letter. Checkpoint 2
   declares Continuity and Change, the CED's reasoning process, so Socrates coaches the right
   move.
2. **Learning targets:** rewritten as three, one per learning objective (state building, trade
   and labor, slavery), each a continuity-and-change target. Checkpoint 1 assesses the first and
   Checkpoint 2 the second and third.
3. **Primary Source:** Afonso's 1526 letter, in John K. Thornton's credited translation, replaces
   the uncredited Las Casas paraphrase.
4. **Map module:** the map is rebuilt for c. 1450 to 1750: the forts of Africa and Asia, the
   American colonies, Macau and Dejima, Kongo and Asante, the Indian Ocean ports of the Gujarati,
   Swahili, Omani and Javanese merchants. VOC material leaves.
5. **Evidence Lab:** the VOC, casta and Columbus cards leave (4.5, 4.7, 4.2); cards are chosen
   for the three objectives and verified on Commons.
6. **BeSurreal:** replaced with a scene that fits the story and carries no unsourced figure.
7. **Deep reading:** rebuilt around this story (it is the companion to the First & 10 and the
   eBook chapter), keeping its strongest existing material on the cartaz and the Estado da Índia.
8. **Required modules** (Phase 8): 02 First & 10, 05 Skill Builder, 07 Evidence Lab, 10
   Checkpoint 2.
