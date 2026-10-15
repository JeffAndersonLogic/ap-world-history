# Topic 4.5 Story Draft: Maritime Empires Maintained and Developed

**Status: Delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).**
Jeff started this build with "Build 4,5" on 2026-10-15, read as "build 4.5": Topic 4.4 is on
`main` (`ff7b958`) and 4.5 is the next topic in the unit. The Phase 9 reviewers check this story
against the CED source file and the scholarship; the record of what they found is in
`docs/TOPIC-4-5-CLAIM-LEDGER.md`, under "Review findings".

**Resume here (2026-10-15, session 2):** Phase 9 review passes 1 and 2 fixed and logged in the claim ledger (pass 1: 23 + 12 findings; pass 2: 15 + 11). Next: review pass 3 (fresh reviewers, full pass), then move the Unit 4 First & 10 fingerprint, topic audit, report.

**Taught:** Green Monday 2026-11-09, Silver Tuesday 2026-11-10, from Jeff's corrected November
Canvas calendar (2026-10-14), already in `assets/data/announcements-schedule.js` as date-only
entries.

**Branch baseline:** `claude/build-4-5-bizrkq` (the branch this session was given), from `main` at
`ff7b958`, which carries the finished 4.4 build. No other branch with commits not on `main`
touches 4.5 or the shared Unit 4 files: `claude/unit-4-5-f10-validators-CtTmA` and
`claude/unit4-5-first10-fixes-xm7xyy` are 450 and 499 commits off an unrelated old history and
predate every Unit 4 rebuild; `claude/topic-4-2-build` to `claude/topic-4-4-build` are inside
`main`.

**CED source: `scripts/lib/ced-source/unit-4.js`**, transcribed 2026-10-11 from the Fall 2026
CED, Course Framework V.1, pp. 85, 86 and 87 (topic pages) and p. 75 (Unit at a Glance). This
draft quotes that file and nothing else for what the CED requires. The unit story map
(`docs/UNIT-4-STORY-MAP.md`, approved 2026-10-11) supplies the spine, the hand-offs and the
owns / bridge-only split; it agrees with the source file on 4.5.

---

## 1. What the CED requires (pp. 85 to 87)

Four learning objectives, each under its own theme. A story has to answer all four.

- **Learning objective H (Governance, GOV):** Explain how rulers employed economic strategies to consolidate and maintain power throughout the period from 1450 to 1750.
- **Learning objective I (Economic Systems, ECN):** Explain the continuities and changes in networks of exchange from 1450 to 1750.
- **Learning objective J (Social Interactions and Organization, SIO):** Explain how political, economic, and cultural factors affected society from 1450 to 1750.
- **Learning objective K (Cultural Developments and Interactions, CDI):** Explain the similarities and differences in how various belief systems affected societies from 1450 to 1750.

Key Concepts, as the CED pairs them with the objectives:

- **KC-4.1.IV.C** (LO H): Mercantilist policies and practices were used by European rulers to expand and control their economies and claim overseas territories. Joint-stock companies, influenced by these mercantilist principles, were used by rulers and merchants to finance exploration and were used by rulers to compete against one another in global trade.
- **KC-4.3.III.ii** (LO H): Economic disputes led to rivalries and conflict between states.
- **KC-4.1.IV.D.i** (LO I): The Atlantic trading system involved the movement of goods, wealth, and labor, including enslaved persons.
- **KC-4.1.IV** (LO I): The new global circulation of goods was facilitated by chartered European monopoly companies and the global flow of silver, especially from Spanish colonies in the Americas, which was used to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver. Regional markets continued to flourish in Afro-Eurasia by using established commercial practices and new transoceanic and regional shipping services developed by European merchants.
- **KC-4.2.II.A** (LO I): Peasant and artisan labor continued and intensified in many regions as the demand for food and consumer goods increased.
- **KC-4.2.III.C** (LO J): Some notable gender and family restructuring occurred, including demographic changes in Africa that resulted from the trade of enslaved persons.
- **KC-4.1.IV.D.ii** (LO J): The Atlantic trading system involved the movement of labor—including enslaved persons and the mixing of African, American, and European cultures and peoples, with all parties contributing to this cultural synthesis.
- **KC-4.1.VI** (LO K): In some cases, the increase and intensification of interactions between newly connected hemispheres expanded the reach and furthered development of existing religions, and contributed to religious conflicts and the development of syncretic belief systems and practices.

- **Reasoning move:** Continuity and Change, the CED's reasoning process for 4.5 (p. 75). Learning
  objective I is worded as continuity and change, and so are four of the eight Key Concepts
  ("continued to flourish", "continued and intensified", "expanded the reach and furthered
  development of existing religions"). The spine is built on it: the rulers' tools were new,
  the fights over trade were old; silver's road around the world was new, the regional markets
  it ran into were old; the work was old and there was more of it; the religions were old and
  they went to new places and took new forms.
- **Suggested skill:** 3.A Claims and Evidence in Sources, "Identify and describe a claim and/or
  argument in a text-based or non-text-based source." In this topic that is three sources whose
  authors were making an argument a student can name in one sentence: Thomas Mun's case for
  selling more than you buy (written c. 1620s, printed 1664), Jan Pieterszoon Coen's 1614 letter
  telling the Dutch company's directors that trade and war cannot be separated, and Bernardino de
  Sahagún's claim, c. 1576, about who the people at Tepeyac were really praying to.
- **Thematic focus:** Governance (GOV); Economic Systems (ECN); Social Interactions and
  Organization (SIO); Cultural Developments and Interactions (CDI). (The CED prints the second
  "Economics Systems"; the course's theme list calls it Economic Systems.)
- **Illustrative examples (optional):** Competition over trade routes: Muslim–European rivalry in
  the Indian Ocean; Moroccan conflict with the Songhai Empire. Increased peasant and artisan
  labor: Western Europe, wool and linen; India, cotton; China, silk. The CED says these "do not
  in any way constitute additional, preferred, or required information." All five are used,
  because each carries a Key Concept sentence that has no other concrete example on the CED page.
  The other names in this story (the Casa de Contratación, the Navigation Act, the English East
  India Company, the VOC, Amboyna, the Anglo-Dutch Wars, Potosí, Zacatecas, Manila, the Single
  Whip reform, cowrie shells, Indian cloth, Tepeyac and Guadalupe, the Virgin of the Mountain,
  Kongo Christianity, Vodou) are teaching choices.
- **Sample activity:** none for 4.5.

**Six things in these sentences that are easy to drop.**
1. **"Used by rulers ... to compete against one another."** A joint-stock company is not only a
   way to raise money. In the CED's sentence it is a weapon rulers aimed at each other, which is
   why KC-4.3.III.ii sits under the same objective.
2. **"Satisfy Chinese demand for silver."** The silver story is pulled from China, not pushed from
   Spain. A story that has Spain finding a mine and the money simply flowing out has the cause
   backward.
3. **"Regional markets continued to flourish ... by using established commercial practices and
   new ... shipping services developed by European merchants."** Two halves: the old markets kept
   their own ways of doing business, and European ships became one more carrier inside them.
4. **"Continued and intensified."** Peasant and artisan labor is a continuity and a change in two
   words: the same work, more of it, for buyers farther away.
5. **"Demographic changes in Africa."** The family change the CED names is in Africa, and it came
   from who the trade took.
6. **"With all parties contributing."** The cultural mixing of the Atlantic world was not
   European culture poured over everyone else. Africans and Indigenous Americans made it too.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-4-5-maritime-empires-maintained.js`), the renderer config, the First & 10
entry in `scripts/lib/reading-content/unit-4.js`, the deep reading
`scripts/lib/deep-reading-content/topic-4-5.js`, the BeInTheRoom scenario in
`scripts/build-unit4-rooms.js` (The Potosí Production Order), the map spec `topic-4-5` in
`scripts/lib/instructional-map-specs.js`, the CED and coherence contracts, the deep audit, the
Unit 4 hub card, and the 4.4 audit record and claim ledger.

**Consistent with the CED:**
- The renderer config carries all four learning objectives and all eight Key Concepts in the
  CED's wording, and the CED's five illustrative examples.
- The four learning targets and success criteria were repaired on 2026-09-18 to cover all four
  objectives, and the two checkpoints follow them (Checkpoint 1 on strategy and exchange,
  Checkpoint 2 on society and belief). The deep audit's "checkpoints miswired" finding is already
  fixed.
- The First & 10 and the lecture are already organized as four moves, one per objective.

**Out of line, each fixed inside this build:**
1. **The lesson data's copy of the CED drifts from it.** KC-4.1.IV has a stray comma ("practices,
   and new"), KC-4.1.IV.D.ii reads "labor, including enslaved persons, and the mixing" where the
   CED prints "labor—including enslaved persons and the mixing", and the KC-4.2.II.A examples drop
   the CED's dashes. The renderer config's copy wins on the page, so students never saw the
   drift; the lesson data is corrected to the source file.
2. **Peasant and artisan labor sits under the wrong objective.** The CED pairs KC-4.2.II.A with LO
   I (networks of exchange); target and criterion 3 (society, LO J) carry it. It moves to target
   and criterion 2.
3. **Ownership drift into 4.4 (story map conflict 7):** the subtitle ("forced labor, colonial
   administration, and silver extraction"), the First & 10 title ("The Labor of Empire") and its
   vocabulary (Encomienda, Mita, Viceroyalty, Audiencia, Indentured Servitude, Las Casas, Chattel
   Slavery), the Primary Source (Toledo on the mita), the BeSurreal (a mita worker), the
   BeInTheRoom (The Potosí Production Order, which is about organizing mita labor), two of the
   three items in the unrendered `evidenceLab.items`, the map's "colonial administration" title
   and mita legend, and the Unit 4 hub card ("Labor systems, colonial administration"). Labor
   systems are 4.4's; 4.5 uses Potosí only as silver's source.
4. **Ownership drift into 4.7:** the Map & Geography module-card picture is a casta painting.
   Casta is 4.7's.
5. **Module-card pictures (`stableImages`) from other topics:** smallpox (4.3), the VOC ship and
   Waldseemüller map (4.2 and 4.4 material), Columbus (4.2), a 1936 Pueblo Revolt mural (4.6), a
   Persian astrolabe (4.1), da Gama's pillar (4.2), Magellan (4.2), and a 1700 world map.
6. **The Primary Source is not a source.** "Viceroy Toledo on the Mita" is labeled "adapted" with
   no translator, and it reads as an invented passage ("The mita is not slavery, which I would not
   permit") rather than a translation of any Toledo letter this build could find. It is replaced
   with a credited translation.
7. **Superlatives and figures flagged by the story map:** the map key says Potosí "produced roughly
   60% of the world's silver" and was "the largest city in the Western Hemisphere", and that the
   Manila galleon was "the world's first regularly scheduled transoceanic route". The map key also
   says the Casa de Contratación "held a monopoly on all colonial trade" and silver "triggered the
   global price revolution". Each is checked in the ledger; none is repeated without a source.
8. **Anachronism:** the success criteria and First & 10 offer Santería as a syncretic tradition of
   1450 to 1750. Santería took its familiar form in Cuba in the 1800s (ledger). Vodou took shape
   in the French colony of Saint-Domingue in the 1700s, so it stays, dated.
9. **The suggested skill is not practiced.** The Skill Builder ("Causation and comparison
   practice") practices four moves of argument; nothing practices 3.A, identifying a claim in a
   source. The deep audit and the story map both flag 4.5's practice as causation and comparison
   where the CED says Continuity and Change.
10. **The map:** "Silver Routes and Colonial Administration, c. 1580"; its intro and key center the
    mita; it shows no Atlantic slave trade, no companies, no regional markets, no rivalries.
11. **Leftovers:** `first10.note` (lesson data and renderer config) still says "build your AI Coach
    prompt" (retired 2026-08-31); the reading still carries a `builderBody`; its skill tags are
    Causation, Continuity & Change and Argumentation, none of them 3.A, and its question badges
    are Causation, Continuity & Change and Comparison; the lecture intro speaks to the teacher
    ("Keep those four moves distinct"); the BeInTheRoom description in the lesson data offers
    three scenarios that do not exist.
12. **Evidence Lab:** of four cards, one is the course's own map and one is the VOC charter as a
    summary; the Potosí woodcut and Frans Post's sugar mill are 4.4 material. Nothing shows a
    rivalry, Asian demand, artisan labor, African families, cultural mixing or religion.

## 3. The ninth-grade story

Last topic ended with a question. European states had built empires from the sea: forts on the
coasts of Africa and Asia, and colonies in the Americas. An empire like that is expensive. Ships,
soldiers and forts cost money every year. So how did rulers make their empires pay, and what did
the money do to the people inside them?

**The rulers' first tool was an idea.** European rulers believed that the world held only so much
wealth, and that a kingdom grew strong by collecting gold and silver and keeping it. To do that,
a country had to sell more to other countries than it bought from them, and it had to keep its
colonies' trade for itself. Later writers called this set of ideas **mercantilism**. An English
merchant named Thomas Mun put the rule in one sentence: to grow rich, England must "sell more to
strangers yearly than wee consume of theirs in value." Rulers turned the idea into laws. Spain
sent all trade with its American colonies through one office in Seville, the Casa de
Contratación, founded in 1503, and silver crossed the Atlantic in guarded fleets. England's
Navigation Act of 1651 said goods from Asia, Africa and the Americas could come into England only
on English ships. Colonies existed to send raw goods home and to buy the home country's goods.

**The second tool was a new kind of company.** Voyages to Asia cost a fortune and often failed. A
**joint-stock company** solved that by selling shares to many investors, who split the profits
and the losses. The English East India Company got its charter from Queen Elizabeth I in 1600, and
in 1602 the Dutch government chartered the Dutch East India Company, the **VOC**. These were
**chartered monopoly companies**: the charter gave each one the only right, in its country, to
trade in Asia. The VOC's charter also let it build forts, keep soldiers, make treaties with Asian
rulers and fight wars. A ruler could now send a company to compete with another ruler's company.
In 1614 Jan Pieterszoon Coen, the VOC's leader in Asia, wrote to the company's directors that
"we cannot carry on trade without war nor war without trade."

**So economic disputes became wars.** Rival states fought over who would control a trade. In the
Indian Ocean, the Portuguese tried to take over the spice trade with guns, and Muslim states
fought back: Mamluk Egypt and Gujarat sent a fleet that the Portuguese defeated off Diu in 1509,
and after the Ottomans took Egypt they fought the Portuguese at sea through the 1500s. In Africa,
the sultan of Morocco, Ahmad al-Mansur, wanted the gold of West Africa and the salt mines of the
Sahara, and in 1591 his army crossed the desert and defeated the Songhai Empire at Tondibi (Topic
3.1 told the battle; 4.5 asks why). Among Europeans, the Dutch and English companies fought over
the spice islands, and England and the Dutch Republic fought three wars at sea between 1652 and
1674, largely over trade and shipping. Fighting over trade routes was nothing new. What was new
was the tools: laws written to keep wealth at home, and companies built to compete.

**What the tools moved: silver.** In 1545 Spanish colonists found an enormous silver mountain at
Potosí in the Andes, and in 1546 another great silver strike came at Zacatecas in Mexico.
Spanish America became the world's largest source of silver. Some of that silver crossed the
Atlantic to Seville. Much of it ended up in China. Why China? Ming China's government had begun
collecting taxes in silver, in a reform called the **Single Whip**, so everyone in the world's
largest economy needed silver, and silver was worth more in China than almost anywhere else.
From 1571, Spanish galleons carried silver from Acapulco in Mexico across the Pacific to Manila in
the Philippines, where Chinese merchants sailed in with silk and porcelain to trade for it.
Silver that reached Europe moved on too: Europeans had few goods Asians wanted, so Portuguese,
Dutch and English merchants carried silver around Africa to pay for Asian spices, cotton cloth,
silk and porcelain. For the first time, one kind of money was traveling all the way around the
world. (The ledger narrows this sentence; see section 9.)

**What the tools moved: the Atlantic system.** In the Atlantic, ships moved goods, wealth and
people. Sugar, tobacco and later coffee went to Europe. Guns, iron, rum, and cloth went to Africa,
and much of the cloth was cotton woven in India; cowrie shells from the Maldive Islands in the
Indian Ocean, carried by Dutch and English ships, were money on the West African coast. And
enslaved Africans were forced onto ships to the Americas to work the plantations (Topic 4.4).
People often draw this as a neat triangle. It was messier: many ships went straight from Brazil
to Angola and back, and the goods came from all over the world.

**The old markets kept trading.** None of this replaced the trade that already ran across Africa
and Asia. Regional markets kept flourishing, with their own merchants and their own ways of doing
business: credit, partnerships and family firms that were centuries old. Gujarati, Chinese and
Armenian merchants kept trading. European ships became one more carrier inside these markets:
Dutch ships carried Japanese silver and copper to China and India, and Indian cloth to Southeast
Asia, earning money from trade between Asian ports.

**More work for ordinary people.** All this trade meant more demand for food and goods, and that
meant more work for peasants and artisans, people who farmed or made things by hand at home and
in workshops. The work was old. There was more of it, for buyers farther away. In western Europe,
merchants paid rural families to spin and weave wool and linen in their own homes. In India,
weavers made cotton cloth for buyers in Asia, Africa and Europe, and the European companies bought
more and more of it. In China, peasant families raised silkworms and wove silk, and some of that
silk sailed to Manila to be traded for American silver. Much of this work was done by women.

**What the trade did to families in Africa.** The Atlantic slave trade took about two men for
every woman. In some parts of West and West Central Africa, that left villages with far more women
than men. Historians argue this changed family life: in those places more men took several wives,
women did more of the farming, and more women were enslaved inside Africa itself. The trade
changed who lived in an African village, and that changed how families worked. These are the
"demographic changes in Africa" the College Board names.

**A mixed Atlantic world.** In the Americas, Africans, Indigenous Americans and Europeans lived
side by side, often by force, and each group shaped what came out of it. New foods mixed African,
American and European ingredients. New languages formed, called creoles, with words mostly from a
European language and much of their grammar shaped by African languages. Music, clothing and
religion mixed too. Nobody planned this culture, and no one group made it. The CED's words are
"with all parties contributing."

**Faith: spread, conflict, blending.** Religions traveled with the ships. Christianity spread to
the Americas, the Philippines and parts of Africa, and Jesuit missionaries reached the court of
Ming China. Islam kept spreading in Southeast Asia through its older trade routes. Contact also
caused conflict: in Peru, from about 1610, Spanish priests ran campaigns to "extirpate idolatry,"
smashing Andean sacred objects and punishing people who kept the old religion (and Japan's
shoguns, Topic 4.4, banned Christianity). And contact produced **syncretic** beliefs, blends of
two or more religions. At Tepeyac, near Mexico City, Nahua Christians prayed to the Virgin of
Guadalupe at a hill where, a Spanish friar named Bernardino de Sahagún claimed around 1576, they
had once honored a goddess they called Tonantzin, "our mother," and he suspected they still did.
In Kongo, Christian crucifixes were carved in Kongo style and given Kongo meanings. In Potosí,
in the 1700s, a painter showed the Virgin Mary as the silver mountain itself, which mixes Christian
art with the Andean idea of a sacred mountain. In the 1700s, enslaved Africans in the French
colony of Saint-Domingue (Haiti) built **Vodou** from West and Central African religions and
Catholic saints. Compare them: everywhere, old religions reached new people; in some places they
were fought over, and in others they blended into something new.

**Put it together.** Rulers built new tools to make their empires pay: mercantilist laws and
chartered companies, which they used against each other. Those tools moved silver around the
world, goods and enslaved people across the Atlantic, and more work into the hands of peasants and
artisans, while the old regional markets kept trading. And the money, goods and people they moved
changed society: families in Africa, a mixed Atlantic culture, and religions that spread, clashed
and blended.

**And it left a problem.** States got richer and reached further. Not everyone accepted it. That
is Topic 4.6.

## 4. The spine

**Rulers built economic tools to keep their empires paying, and the money, goods and people those
tools moved reshaped work, families and faith.** (Approved with the unit story map, 2026-10-11.)

"Built economic tools" is LO H: mercantilism, joint-stock companies, and the rivalries they were
aimed at. "The money, goods and people those tools moved" is LO I: silver, the Atlantic system,
and the regional markets that kept going. "Reshaped work" is KC-4.2.II.A, which the CED puts under
LO I; "families" is LO J; "faith" is LO K. The reasoning move runs through every clause: each tool
or flow is sorted as something new or something that kept going.

Shorter for the wall: **Tools to make empires pay. What they moved, and what it changed.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| Mercantilism: keep gold and silver, sell more than you buy, keep colonies' trade; Mun's sentence | KC-4.1.IV.C (first sentence) | The idea behind the rulers' laws. **Change:** a new economic strategy of state power. Also the 3.A model source. |
| The Casa de Contratación (1503) and the treasure fleets; the Navigation Act (1651) | KC-4.1.IV.C ("expand and control their economies") | The idea turned into law. |
| The English East India Company (1600) and the VOC (1602): shares, monopoly charter, forts, soldiers, treaties, war; Coen's 1614 letter | KC-4.1.IV.C (second sentence); KC-4.1.IV ("chartered European monopoly companies") | A company as a weapon rulers aimed at each other. **Change.** Also a 3.A source. |
| Diu 1509 and Ottoman–Portuguese war at sea; Morocco and Songhai, 1591; Amboyna 1623 and the Anglo-Dutch Wars, 1652 to 1674 | KC-4.3.III.ii; examples Muslim–European rivalry, Moroccan conflict with Songhai | Economic disputes became wars. **Continuity:** states had always fought over trade; the tools were new. |
| Potosí (1545) and Zacatecas (1546); the Single Whip; Manila from 1571; silver carried around Africa | KC-4.1.IV (first sentence) | Silver pulled toward China. **Change:** one money circulating worldwide. |
| Sugar, tobacco; guns, rum, Indian cloth and cowries; enslaved Africans; not a neat triangle | KC-4.1.IV.D.i | The Atlantic system moved goods, wealth and labor. **Change.** |
| Gujarati, Chinese and Armenian merchants; credit and partnerships; Dutch ships in trade between Asian ports | KC-4.1.IV (second sentence) | **Continuity:** the regional markets kept flourishing, with Europeans as one more carrier. |
| Wool and linen in western Europe; cotton in India; silk in China | KC-4.2.II.A; examples W. Europe, India, China | **Continuity and change in two words:** the same work, more of it. |
| About two men taken for every woman; female majorities in some regions; polygyny, women's farming, more enslaved women inside Africa | KC-4.2.III.C | The family change the CED names, and its cause. **Change.** |
| Foods, creole languages, music, religion made by Africans, Indigenous Americans and Europeans | KC-4.1.IV.D.ii | Cultural synthesis "with all parties contributing". **Change.** |
| Christianity in the Americas, the Philippines, Kongo and Ming China; Islam in Southeast Asia | KC-4.1.VI ("expanded the reach ... of existing religions") | **Continuity with a change:** old religions, new places. |
| The extirpation campaigns in Peru from about 1610 | KC-4.1.VI ("religious conflicts") | Contact caused conflict. |
| Guadalupe at Tepeyac and Sahagún's claim; the Kongo crucifix; the Virgin of the Mountain (Potosí, c. 1720); Vodou in Saint-Domingue | KC-4.1.VI ("syncretic belief systems and practices") | Blending. The comparison the objective asks for: spread, conflict, blend. Sahagún is also a 3.A source. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 4.4: name one European trading post and the country that built it.
   (b) From 4.4: Potosí was a mine. What labor system sent workers there?
   (c) From 4.4: name one Asian state that set its own terms for European traders, and how.
   **Bridge:** "4.4 ended with a question: the empires exist, so how did rulers make them pay, and
   what did the money do to the people inside them? Today, the tools rulers built, what those
   tools moved, and what it changed."
3. **Topic question on screen, over a real historical scene:** Rulers built tools to make their
   empires pay. What did those tools move, and what did it change?
4. **Tool 1: mercantilism.** The idea and the laws.
5. **Reading a claim (3.A model): Mun.** The claim in one sentence, and what it asks a ruler to do.
6. **Tool 2: the joint-stock company.** Shares, a monopoly charter, forts and soldiers; Coen.
7. **Economic disputes become wars.** Indian Ocean, Morocco and Songhai, Europeans against each
   other. Old fights, new tools.
8. **Silver goes around the world.** Potosí and Zacatecas, the Single Whip, Manila, silver around
   Africa. A route map.
9. **The Atlantic system.** Goods, wealth, enslaved people; not a neat triangle.
10. **The old markets keep trading.** Established practices, and European ships as carriers.
11. **More work.** Wool and linen, cotton, silk.
12. **Families in Africa.** Who the trade took, and what that changed.
13. **A mixed Atlantic world.** All parties contributing.
14. **Faith: spread, conflict, blending.** Compare the three.
15. **Reading a claim (3.A practice): Sahagún** on Tepeyac.
16. **Myths.** "Europe got rich by making better goods"; "the triangular trade was a neat
    triangle"; "global trade replaced the old markets"; "syncretism means people were faking it."
17. **Retelling slide** (section 7).
18. **AP synthesis:** answer the four objectives in four sentences, each one a change and a
    continuity, then hand off to 4.6.
19. **Landing, over a real historical scene.**

## 7. Retelling slide

A continuity-and-change ledger a student can redraw from memory: four rows, one per learning
objective, and two columns.

| | What was new | What kept going |
|---|---|---|
| **Rulers' tools** (LO H) | Mercantilist laws; joint-stock companies with monopoly charters, used against rival states. | States fighting over trade routes: the Indian Ocean, the Sahara's gold and salt. |
| **Exchange** (LO I) | Silver circling the world toward China; the Atlantic system of goods, wealth and enslaved people. | Regional markets with their old merchants and practices; peasant and artisan work, now more of it. |
| **Society** (LO J) | Families in parts of Africa reshaped by who the trade took; a mixed Atlantic culture. | African, Indigenous and European ways of life, carried into that mix. |
| **Faith** (LO K) | Religions in new places; conflict; blended beliefs (Guadalupe, Vodou). | Christianity, Islam and older faiths themselves. |

Result line: **Rulers built tools to make their empires pay, and what those tools moved reshaped
work, families and faith.**

Why this shape: the reasoning move is continuity and change, and the CED gives 4.5 four
objectives. Four rows answer the four objectives; two columns are the reasoning move. As in 4.4,
the deck builds the ledger as a two-column matrix (`split-matrix`).

## 8. Owns / bridge-only (from the unit story map)

- **4.5 owns:** mercantilism and joint-stock companies (KC-4.1.IV.C); economic disputes turning into
  rivalries, with the CED's Muslim–European rivalry in the Indian Ocean and the Moroccan conflict
  with Songhai (KC-4.3.III.ii); the Atlantic trading system and the global flow of silver to Asia
  (KC-4.1.IV, IV.D.i); peasant and artisan labor intensifying (KC-4.2.II.A); gender and family
  restructuring, including in Africa (KC-4.2.III.C); cultural mixing in the Atlantic world
  (KC-4.1.IV.D.ii); religions spreading, colliding and blending (KC-4.1.VI). Rivalry between
  European states is 4.5's (it leaves 4.6).
- **Bridge only:**
  - The mit'a and the colonial labor systems (4.4). Potosí appears as silver's source; how its
    workers were drafted is one clause pointing back to 4.4.
  - The battle of Tondibi itself (3.1). 4.5 gives its economic motive in one sentence.
  - The Atlantic slave trade's size and the plantation economy (4.4). 4.5 uses the trade's sex
    ratio and its effect on African families, and names enslaved people as part of the Atlantic
    system.
  - Indian Ocean merchants continuing (4.4's KC-4.3.II.A.iii). 4.5 uses regional markets under its
    own KC-4.1.IV: established commercial practices and European ships as carriers.
  - Japan's ban on Christianity (4.4). One clause, as a religious conflict already met.
  - Casta (4.7). Not mentioned. Resistance and rebellion (4.6). Not taught; the hand-off names it.
- **Hands to 4.6:** "States got richer and reached further. Not everyone accepted it."

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-4-5-CLAIM-LEDGER.md`)

The claims that shaped the story are checked in the ledger before any surface is written. The
ones most likely to be wrong, by the defect classes 4.1 to 4.4 kept finding:

- Superlatives and firsts: "world's largest source of silver"; "for the first time, one kind of
  money traveling all the way around the world"; "worth more in China than almost anywhere else";
  Potosí's share of world silver; the Manila galleon as a first.
- Dates: the Casa (1503), the Navigation Act (1651), the EIC charter (1600), the VOC charter (1602),
  Coen's letter (1614), Diu (1509), Tondibi (1591), Amboyna (1623), the Anglo-Dutch Wars, Potosí
  (1545), Zacatecas (1546), Manila (1571), the extirpation campaigns (from about 1610), Sahagún's
  passage (c. 1576), the Virgin of the Mountain (c. 1720), Vodou (1700s).
- Numbers: about two men for every woman in the Atlantic trade.
- Quotations, verbatim from a named translation: Mun, Coen, Sahagún.
- Causal claims: the Single Whip as a cause of Chinese demand; the sex ratio as a cause of family
  change in Africa (an argument of historians, stated as one).

## 10. Visual requirements per beat

Pictures are checked in Phase 6, and the build records which ones were verified. No image
generator key is set in this environment, so AI pictures are skipped; if a beat needs one, its
prompt is saved to `docs/TOPIC-4-5-IMAGE-PROMPTS.md`. The question and landing slides carry a real
historical scene.

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 3, 19 | A 17th-century painting of a trading company's ships in harbor (Amsterdam, Batavia) | The tools at work. | A later copy; say so. |
| 4, 5 | A mercantilist text's title page (Mun, 1664) | The idea in print. | Published after Mun's death. |
| 6 | The VOC share of 1606, or the VOC's Amsterdam shipyard | What a joint-stock company was. | Dates. |
| 7 | A sea battle of the Anglo-Dutch Wars, painted by Willem van de Velde | Trade rivalry as war. | A painter for one side. |
| 8 | A Spanish 8-reales coin with Chinese merchants' chop marks; a route map | Silver's road to China. | The course's own map is a map, not evidence. |
| 9, 10 | A West African coast trade scene, or cowrie shells | Goods from everywhere. | European viewpoint. |
| 11 | The 1637 *Tiangong Kaiwu* silk loom; an Indian export cotton; a Dutch spinning scene | Artisan work, three regions. | Dates of textiles are broad. |
| 12 | No picture can show a demographic change; a figures card from the Slave Voyages estimates | The numbers behind the claim. | Estimates; say so. |
| 13, 14 | The Virgin of the Mountain (Potosí, c. 1720); a painted copy of Guadalupe; the Kongo crucifix | Blending in real objects. | A painted copy is a copy. |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the
final report.

1. **Skill Builder skill:** moves to the CED's suggested skill, 3.A Claims and Evidence in Sources,
   modeled on Coen's 1614 letter and practiced on Sahagún's passage about Tepeyac. The First & 10
   carries Mun's sentence and asks for its claim (question 2). Checkpoint 2 declares Continuity and
   Change, the CED's reasoning process, so Socrates coaches the right move.
2. **Learning targets:** four, one per learning objective, with peasant and artisan labor moved to
   target 2 to follow the CED's pairing. Checkpoint 1 assesses targets 1 and 2, Checkpoint 2
   targets 3 and 4.
3. **Primary Source:** a credited translation replaces the invented Toledo passage, on the Manila
   silk-for-silver trade (Antonio de Morga, 1609), if a verbatim public-domain translation is found.
4. **Map module:** rebuilt for the four flows: silver to Seville and to Manila and China, the
   Atlantic system, the regional markets, and the rivalries (Diu, Tondibi, the spice islands).
   Colonial administration and the mita leave.
5. **Evidence Lab:** the Potosí woodcut, the sugar mill, the course map and the charter summary
   leave; cards are chosen for the four objectives and verified as real objects.
6. **BeSurreal:** a silk-raising household in China around 1600, whose silk is bound for Manila and
   whose taxes are paid in silver. It replaces the mita worker (4.4's).
7. **BeInTheRoom:** a new scenario at Manila in the 1590s, on the Crown's limits on the galleon
   trade, the Chinese merchants, and rival powers at sea, replacing The Potosí Production Order,
   which is about organizing mita labor (4.4's).
8. **Deep reading:** rebuilt around this story, keeping its strongest existing material on
   mercantilism's premise, the Single Whip, and the trade deficit Europe paid in silver.
9. **Required modules** (Phase 8): 02 First & 10, 05 Skill Builder, 07 Evidence Lab, 10
   Checkpoint 2.
