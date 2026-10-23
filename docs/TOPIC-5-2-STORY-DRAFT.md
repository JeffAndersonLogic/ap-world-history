# Topic 5.2 Story Draft: Nationalism and Revolutions in the Period from 1750 to 1900

**Status: Delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).**

**Build finished 2026-10-22, waiting for "ship it":** on `claude/5-2-behistorical-build-1ejzka`. Three independent
review passes (24, 16 and 11 supported defects, all fixed; the loop stopped on its three-pass safety valve); the
Unit 5 reading fingerprint moved; `npm test` and the strict browser suite in the brand fonts pass. Audit record:
`docs/topic-audits/topic-5-2-2026-10-21.md`.

**Taught:** no dates yet. The schedule ends with the Era 3 Exam (Green Monday 2026-11-23, Silver
Tuesday 2026-11-24), and neither the schedule nor the Notion task names a Unit 5 class day (5.1 is
not scheduled either). The build adds no schedule entries; the dates are the one open item in the
report.

**Branch baseline:** `claude/build-5-2-9t1l7r`, the branch this session was given, from `main` at
`97156bd`. (The build-topic skill names a topic branch `claude/topic-X-Y-build`; this session's
instructions name the branch, so the work is here and the report says so.) No other branch with
commits not on `main` touches 5.2 or the shared Unit 5 files (`scripts/lib/reading-content/unit-5.js`,
`scripts/build-unit5-rooms.js`), except three old Unit 5 branches (`claude/unit-5-completion-jueU7`,
`claude/unit-5-ced-audit`, `repair-unit-5-ced-alignment`) whose work predates the current Unit 5
files on `main`, and `work/unit4-unit5-atlases-20261012`, which shares no history with `main`; none
is built on here.

**CED source: `scripts/lib/ced-source/unit-5.js`**, transcribed 2026-10-20 from the Fall 2026 CED,
Course Framework V.1, pp. 100 and 101 (topic pages), p. 95 (Unit at a Glance) and p. 97 (sample
activity). This draft quotes that file and nothing else for what the CED requires. The unit story map
(`docs/UNIT-5-STORY-MAP.md`) section for 5.2 was a proposal; this build follows it except where noted
in section 8.

---

## 1. What the CED requires (pp. 100 to 101)

- **Learning objective C** (Governance): Explain causes and effects of the various revolutions in the period from 1750 to 1900.

Key Concepts, in the CED's order:

- **KC-5.3.II.ii**: People around the world developed a new sense of commonality based on language, religion, social customs, and territory. This was sometimes harnessed by governments to foster a sense of unity.
- **KC-5.3**: The 18th century marked the beginning of an intense period of revolution and rebellion against existing governments, leading to the establishment of new nation-states around the world.
- **KC-5.3.IV.A.i**: Discontent with monarchist and imperial rule encouraged the development of systems of government and various ideologies, including democracy and 19th-century liberalism.
- **KC-5.3.III.B**: Colonial subjects in the Americas led a series of rebellions inspired by democratic ideals. The American Revolution, and its successful establishment of a republic, the United States of America, was a model and inspiration for a number of the revolutions that followed. The American Revolution, the Haitian Revolution, and the Latin American independence movements facilitated the emergence of independent states in the Americas.
- **KC-5.3.I.B**: The ideas of Enlightenment philosophers, as reflected in revolutionary documents—including the American Declaration of Independence during the American Revolution, the French “Declaration of the Rights of Man and of the Citizen” during the French Revolution, and Bolívar’s “Letter from Jamaica” on the eve of the Latin American revolutions—influenced resistance to existing political authority, often in pursuit of independence and democratic ideals.
- **KC-5.3.II.iii**: Newly imagined national communities often linked this new national identity with borders of the state, and in some cases, nationalists challenged boundaries or sought unification of fragmented regions.

- **Reasoning move:** Causation, the CED's reasoning process for 5.2 (p. 95). The learning objective
  is a causes-and-effects question by its own words. The answer this story builds is that **ideas
  alone did not make a revolution: it took a grievance, the words to name it, and a chance to act,
  and in the Atlantic world each revolution's effects became causes of the next one. The
  revolutions' biggest effect was a new loyalty, to the nation, which kept making and breaking states
  for the rest of the century.**
- **Suggested skill:** 3.C Claims and Evidence in Sources, "Compare the arguments or main ideas of
  two sources." The CED names three sources in KC-5.3.I.B, and its sample activity (p. 97) is a
  Socratic seminar on exactly those three: "How are the authors’ arguments similar? Why? How are the
  authors’ arguments different? Why?" Students compare two of the documents' arguments and explain
  the difference by what caused each one.
- **Thematic focus:** Governance (GOV).
- **Illustrative examples (optional), printed beside KC-5.3.II.iii under "Call for national
  unification or liberation":** Propaganda Movement in the Philippines; Maori nationalism and the New
  Zealand wars in New Zealand; Puerto Rico, the writings of Lola Rodríguez de Tió; German and Italian
  unifications; Balkan nationalisms; Ottomanism. This story uses four: the **German and Italian
  unifications** (nationalists uniting fragmented regions), **Balkan nationalisms**, with Greece as
  the first case (nationalists challenging an empire's borders), **Ottomanism** (an empire's
  government harnessing a shared loyalty, KC-5.3.II.ii) and, in one sentence, the **Propaganda
  Movement** (to show the idea reaching beyond Europe and the Americas). The other two are named in
  the deck's notes as further cases for a teacher who wants them.
- **Sample activity (p. 97, optional):** the Socratic seminar on the Declaration of Independence, the
  Declaration of the Rights of Man and of the Citizen and the Letter from Jamaica. The Skill Builder
  and the deck's practice slide use a short version of it.

**Six things in these sentences that are easy to drop.**
1. **"Causes and effects."** Both halves. A 5.2 answer that tells four revolution stories without
   saying what caused each and what each created has not answered the objective.
2. **"Discontent with monarchist and imperial rule."** The cause the CED names is discontent: a
   grievance against a king or an empire. The ideas (KC-5.3.I.B) "influenced resistance"; they did
   not create the discontent. Taxes, privilege, slavery and being shut out of office did.
3. **"Systems of government and various ideologies, including democracy and 19th-century
   liberalism."** An effect, not only a cause: the revolutions produced new kinds of government
   (republics, written constitutions) and new political ideas that people then fought over in 1830
   and 1848.
4. **"A model and inspiration."** The American Revolution is in the CED as a cause of the revolutions
   that followed, not only as the first of four.
5. **"Sometimes harnessed by governments."** Nationalism was not only a force against governments.
   Governments used it too, to make people loyal to the state.
6. **"New nation-states around the world"** and **"challenged boundaries or sought unification."**
   Nationalism both joined states together (Italy, Germany) and broke them apart (the Balkans out of
   the Ottoman Empire). A 5.2 answer that says only one of these has half the KC.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-5-2-nationalism-and-revolutions.js`), the renderer config, the First & 10 entry
in `scripts/lib/reading-content/unit-5.js`, the deep reading
`scripts/lib/deep-reading-content/topic-5-2.js`, the BeInTheRoom scenario in
`scripts/build-unit5-rooms.js`, the map `assets/images/instructional-maps/topic-5-2.svg`, the deep
audit, the unit story map, and the 5.1 First & 10 (what students were last taught).

**Consistent with the CED:**
- The lesson data and renderer config carry the learning objective and all six Key Concepts in the
  CED's wording (corrected on 2026-10-20 in the 5.1 build), with the six illustrative examples.
- Learning Target 1 (Enlightenment ideas and the revolutions, KC-5.3.I.B) and Target 3 (nationalism
  and multiethnic empires, KC-5.3.II.iii) point at real 5.2 Key Concepts.
- The CED's three documents appear in the Evidence Lab.

**Out of line, each fixed inside this build:**
1. **The reasoning move and skill are wrong on the page.** The Skill Builder is "Comparison
   practice," comparing the revolutions with each other; the reading's question badges read
   Causation, Comparison and Argumentation. The CED's reasoning process is Causation and its skill is
   3.C, comparing the arguments of **two sources**.
2. **Two Key Concepts have no target or checkpoint:** KC-5.3.II.ii (a shared language, religion,
   customs and territory; harnessed by governments) and KC-5.3.IV.A.i (democracy and liberalism). The
   effects half of the objective is thin: no target asks what the revolutions created.
3. **A superlative is a learning target.** Target 2 and Checkpoint 1 ask students to explain the
   Haitian Revolution "as the most radical Atlantic Revolution, the only one that simultaneously
   challenged colonialism, slavery, and racial hierarchy." It is a defensible historians' argument,
   not a fact to recite, and it turns a causation lesson into a ranking contest.
4. **The First & 10 is organized by revolution and then by theme** (contextualization, the four
   revolutions, Haiti, nationalism), five sections and fourteen vocabulary chips, three of them names
   and one (Olympe de Gouges) 5.1's. It carries the AI Coach `builderBody`-style note in `first10.note`
   ("build your AI Coach prompt"). It is rewritten from this story.
5. **Factual problems, flagged for the ledger, each leaving with its surface:**
   - "The Declaration of Independence (1776) invoked Locke almost word for word" (lecture card 1).
     It does not quote Locke; "the pursuit of Happiness" is not Locke's "estates."
   - "The radical phase, the Terror (1793 to 1794) ... executed tens of thousands, including Louis
     XVI" (lecture card 1). Louis XVI was executed in January 1793, before the Terror; "tens of
     thousands executed" overstates the official executions (about 17,000).
   - "In 1794, France became the first European power to abolish slavery in its colonies, partly
     because Toussaint Louverture had allied with France" (lecture cards 1 and 2). Backwards: the
     Convention's decree was February 1794 and Toussaint changed sides afterwards, in May 1794.
   - "40% of Europe's sugar and 60% of its coffee" and "approximately 500,000 enslaved people"
     (lecture card 2, map key). The shares are popular figures that vary by source from 40 to 50 and
     50 to 60 percent; estimates of the enslaved population around 1789 run from about 406,000 to
     465,000. Narrowed.
   - "Napoleon sent 50,000 soldiers ... in 1802" (lecture card 2). Leclerc's first army was about
     20,000; reinforcements came later. Narrowed.
   - "An enormous debt that Haiti did not finish paying until 1947" (lecture card 2). The indemnity
     was paid off by the 1880s; loans taken to pay it ran later. Narrowed.
   - "Indigenous peoples and enslaved Africans gained formal legal equality in most new
     constitutions" (lecture card 3). Slavery lasted in most of the new states for decades (Venezuela
     and Peru to 1854). Removed.
   - "Resented Enlightenment-inspired trade restrictions" (lecture card 3). The restrictions were
     Spain's colonial trade rules, not an Enlightenment idea. Removed.
   - "Why the Ottoman, Habsburg, and Austro-Hungarian empires collapsed in the 19th and early 20th
     centuries" (map key). Habsburg and Austro-Hungarian are the same empire, and all three ended in
     1918 to 1922, outside this topic. Removed. "Greek independence was the first successful
     nationalist challenge to the Ottoman Empire" (map key): Serbia won self-rule first. Narrowed.
   - **Evidence Lab quotation misattributed** (lesson data `evidenceLab.items`, not rendered): the
     "Toussaint Louverture's Address to His Soldiers" text ("The god of the white man inspires him
     with crime ... Throw away the image of the god of the whites") is the prayer attributed to
     Dutty Boukman at Bois Caïman in 1791, not Toussaint. Removed.
   - **The Primary Source is invented.** "Toussaint Louverture, Address to His Army, c. 1797 to 1798,"
     four paragraphs presented as his words; only the first paragraph (the Camp Turel proclamation of
     29 August 1793) is his. Replaced.
   - **The Letter from Jamaica is misquoted** (lesson data `evidenceLab.items`): "As it has a single
     origin, a single language ... it ought to have a single government" is Bolívar describing an
     idea he then rejects ("But this is not possible").
   - **BeSurreal anachronism:** set c. 1798, it has "French ships arrive with soldiers sent
     specifically to reimpose slavery" and asks whether Napoleon has read the declaration; Napoleon
     took power in November 1799 and his army arrived in 1802. It also says the French declaration
     says "all men are created equal," which is the American one.
6. **Leftovers:** `first10.note` in both lesson files says "build your AI Coach prompt"; the
   BeInTheRoom description in the lesson data offers three scenarios that do not exist; the
   BeInTheRoom generator's alignment block names `KC-5.2.I–II` and `KC-5.2.II.A–C` (Key Concept codes
   the CED does not have) and an objective the CED does not print; `primarySource.text` is an array,
   which the renderer prints joined by commas (5.1's adjacent finding 2).
7. **Pictures from other topics (`stableImages`):** the Pueblo Revolt mural, the casta painting, the
   1700 world map, the Waldseemüller map, Columbus taking possession, the Florentine Codex smallpox
   page, da Gama's pillar, Magellan, the VOC logo and a Persian astrolabe. None has a 5.2 job; all
   leave.
8. **Material from other topics:** Olympe de Gouges as a vocabulary chip and a section of the
   reading (5.1's, KC-5.3.IV.B); the 1848 vote for all French men is 5.1's (bridge only here).
9. **Title:** the lesson reads "Nationalism and Revolutions"; the CED's title adds "in the Period from
   1750 to 1900" (story map conflict 3). Kept short on the page, with the dates in the subtitle; see
   section 11.

## 3. The ninth-grade story

Last topic ended with a question. By 1789 the ideas were everywhere educated people read. In
America, France, Haiti and Spanish America, people turned them into revolutions. What caused them,
and what did they create?

**Ideas are not enough.** Many people read Locke and went on obeying their kings. A
revolution needed three things at the same time: **a grievance**, a wrong that many people felt;
**the words** to name it, written down in a document people could read aloud and rally around; and
**a chance**, a moment when the old ruler was broke, far away, or gone. Watch for all three in each
revolution, and watch for something else: each revolution helped cause the next one.

**America, 1775 to 1783.** *The grievance.* Britain won the Seven Years' War in 1763 but came out of
it deep in debt, and it taxed its thirteen American colonies to help pay, with laws such as the Stamp
Act of 1765. The colonists had no members in Parliament, the body passing the taxes: "no taxation without
representation." *The words.* On 4 July 1776 the Continental Congress adopted the Declaration of
Independence: "all men are created equal," governments get "their just powers from the consent of
the governed," and when a government destroys people's rights, "it is the Right of the People to
alter or to abolish it." *The chance.* Britain was an ocean away, and in 1778 France joined the war
on the American side. *What it created.* By 1783 the colonies had won their independence as the
United States, and in 1787 they wrote a constitution for a **republic**: a country with no king,
whose leaders are elected. It became a model other revolutionaries pointed to. It also kept slavery,
and most states let only men who owned property vote.

**France, 1789 to 1799.** One revolution's effect became the next one's cause. *The chance.* Helping
the Americans win had cost France a fortune, and by 1788 the king's government was nearly bankrupt.
To raise taxes, Louis XVI called the Estates-General, an assembly of the clergy, the nobles and
everyone else, which had not met since 1614. *The grievance.* The clergy and nobles paid little in
taxes, and the commoners, the Third Estate, paid most of them; after a bad harvest in 1788, the price
of bread soared. In June 1789 the Third Estate declared itself the National Assembly, and on 14 July
a Paris crowd stormed the Bastille, a royal fortress and prison. *The words.* In August 1789 the
Assembly ended nobles' privileges and adopted the Declaration of the Rights of Man and of the
Citizen: "Men are born and remain free and equal in rights," and "the principle of all sovereignty
resides essentially in the nation." *What it created.* France was not trying to break away from
anyone; it was remaking a kingdom. In 1792 it abolished the monarchy and became a republic; in 1793
it executed the king. The years of the Terror (1793 to 1794) killed thousands of people the
government called enemies. In 1799 a general, Napoleon Bonaparte, took power, and in 1804 he crowned
himself emperor. His armies carried the revolution's laws across Europe, and also made many
Europeans resent French rule.

**Haiti, 1791 to 1804.** *The grievance.* Saint-Domingue, on the island of Hispaniola, was France's
most valuable colony, and its sugar and coffee were grown by enslaved Africans. Around 1789 it held
more than 400,000 enslaved people and fewer than 80,000 free people, white colonists and free people
of color together: more than five enslaved people for every free person. *The words.* Free people of color asked the Assembly in Paris
for the equal rights its declaration promised, and were refused. *The chance.* With France in
revolution and the colony's white planters divided, enslaved people in the northern plain rose up in
August 1791. Toussaint Louverture, who had been born enslaved and had won his freedom before the
revolution, became its most famous leader. In 1793 he announced: "I want Liberty and Equality to reign
in Saint Domingue." Fighting to keep the colony, French officials there began freeing enslaved
people in 1793, and in February 1794 the government in Paris abolished slavery in all French
colonies. In 1802 Napoleon brought slavery back in other French colonies, such as Guadeloupe, and
sent an army to retake Saint-Domingue. Toussaint was captured and died in a French prison in 1803.
His officer Jean-Jacques Dessalines fought on, and yellow fever and the war destroyed the French
army. *What it created.* On 1 January 1804 Dessalines declared independence and gave the country
its old Taíno name, **Haiti**. It was the second independent state in the Americas, and the first
founded by people who had freed themselves from slavery. Its effects reached far: in April 1803, with his army in
Saint-Domingue dying of yellow fever, Napoleon sold Louisiana to the United States; slaveholding countries feared
Haiti, and the United States did not recognize it until 1862; in 1825 France demanded 150 million
francs (later cut to 90 million) as the price of recognizing Haitian independence.

**Spanish America, 1810 to 1826.** *The grievance.* Creoles, people of Spanish descent born in the
Americas, owned land and businesses but were kept out of the highest offices, which went to
peninsulares, men born in Spain. Spain also controlled what they could grow, make and trade. Simón
Bolívar, a creole from Caracas, wrote that Spain "has kept us in a sort of permanent infancy with
regard to public affairs." *The chance.* In 1808 Napoleon invaded Spain and forced its king from the
throne. Spanish America no longer had a king to obey, and in 1810 creole leaders formed governments
of their own, in Caracas and Buenos Aires, and in Mexico a priest, Miguel Hidalgo, called on Native
and mestizo villagers to rise. *The words.* In 1815, beaten and in exile in Jamaica, Bolívar wrote
the Letter from Jamaica: "The hatred that the Peninsula has inspired in us is greater than the ocean
between us." Then Haiti, the last revolution's creation, helped the next one: in 1816 its president,
Alexandre Pétion, gave Bolívar ships, guns and supplies, and asked him to free the enslaved people of
the lands he liberated. *What it created.* By 1826 Spain had lost every colony in the Americas except
Cuba and Puerto Rico. Mexico, Gran Colombia, Peru, Chile, the provinces of the Río de la Plata and
others became independent states, and Brazil broke from Portugal in 1822 as an empire with its own
emperor. Creole elites took the top places. Most of the new states kept a sharp social hierarchy,
and slavery lasted in several for decades. Bolívar himself doubted that governments "wholly
representative," elected by the people, suited Spanish America yet.

**New ideas about how to govern.** Behind all four revolutions was discontent with kings and empires,
and the revolutions left behind new answers to the question of how a country should be run. One was
the **republic**, with a written **constitution**. One was **liberalism**: the belief that a
constitution and an elected parliament should limit the government and protect each person's rights,
such as free speech, a free press and property. Many nineteenth-century liberals still wanted only
men with property to vote. Another was **democracy**, rule by the people, which pushed for the vote to
reach all men. These ideas set off new revolutions in Europe in 1830 and 1848, and most of the
uprisings of 1848 were crushed within two years.

**From "the people" to the nation.** The revolutions said that a state belongs to its people. Which
people? More and more, people answered with **the nation**: everyone who shared a language, a
religion, customs and a homeland. That feeling, **nationalism**, could be used by governments. In
1793 revolutionary France ordered that "all Frenchmen are in permanent requisition for the service of
the armies": the whole nation was called to war, not just a king's soldiers. It could also be used
against governments, by people who felt they were a nation without a state of their own.

**Nationalism redraws the map.** Through the 1800s, people who imagined themselves as one nation
wanted one state, with borders to match.
- **Uniting a nation.** Italy and Germany were each split into many states. Italian nationalists,
  Count Cavour and the soldier Giuseppe Garibaldi among them, joined most of Italy into one kingdom in
  1861, and added Rome in 1870. In Germany, liberals met at Frankfurt in 1848 to unite Germany with
  an elected parliament and a constitution, and failed. Then Otto von Bismarck, the chief minister of
  Prussia, said in 1862 that the great questions of the time are decided not "by speeches and majority
  resolutions," which had been "the big mistake of 1848 and 1849," but "by iron and blood." After three
  wars, the German Empire was proclaimed on 18 January 1871, in the Hall of Mirrors at Versailles,
  the palace Louis XIV built.
- **Breaking an empire apart.** The Ottoman Empire ruled many peoples. Serbs rebelled and won
  self-rule; Greeks rose up in 1821, and in 1830 Britain, France and Russia declared Greece an
  independent kingdom. Other Balkan peoples followed: in 1878 Serbia, Montenegro and Romania were
  recognized as independent.
- **An empire answers with a loyalty of its own.** To hold its peoples together, the Ottoman
  government tried **Ottomanism**: in 1856 it promised equal treatment to all its subjects, Muslim or
  not, and in 1869 a law made every subject an Ottoman citizen. The idea was one loyalty for
  everyone, to the empire. It did not stop the Balkan nations from leaving.
- **Beyond Europe.** In the Spanish Philippines in the 1880s and 1890s, Filipino writers in the
  Propaganda Movement, among them José Rizal, demanded equal rights with Spaniards; Spain executed
  Rizal in 1896, during a revolution against its rule.

**So, what caused the revolutions, and what did they create?** A grievance, the words to name it,
and a chance to act, in America, France, Haiti and Spanish America, and each revolution's effects
became causes of the next. They created new independent states in the Americas, republics and
constitutions, and new ideas, liberalism and democracy. And they created the nation as the thing a
state was supposed to belong to, an idea that kept joining some states together and pulling others
apart long after 1826.

**And it hands on a question.** Even before Paris argued about rights, a different revolution had
begun in British workshops. That is Topic 5.3.

## 4. The spine

**A grievance, the words to name it, and a chance to act: in America, France, Haiti and Spanish
America that mix became revolution, and each revolution helped another one start or win. The
revolutions built new states and left behind a new loyalty, to the nation, which went on joining
some states together and pulling peoples away from empires.**

(Revised after review pass 1, 2026-10-21: "helped set off the next" overclaimed Haiti's 1816 aid,
which came six years after Spanish America's revolution began; "breaking others apart" overclaimed
the Ottoman Empire, which lasted to 1922.)

The story map's spine ("Colonists, citizens and enslaved people turned the new ideas into
revolutions, and a new loyalty to the nation made new states and broke or remade old ones") is kept
in substance; the recipe (grievance, words, chance) is added because the reasoning move is Causation
and a ninth grader needs a cause they can carry from case to case.

"A grievance" is KC-5.3.IV.A.i's discontent; "the words" is KC-5.3.I.B; "in America ... Spanish
America" and "each revolution helped set off the next" is KC-5.3.III.B ("a model and inspiration")
and KC-5.3; "built new states" is KC-5.3 and III.B; "a new loyalty, to the nation" is KC-5.3.II.ii;
"joining some states together and breaking others apart" is KC-5.3.II.iii.

Shorter for the wall: **Grievance + words + a chance = revolution. Then the nation redrew the map.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| Readers of Locke who stayed loyal; the recipe: grievance, words, chance | LO C; KC-5.3.I.B ("influenced resistance") | Ideas are **one** cause, not the cause. |
| Seven Years' War debt; Stamp Act 1765; "no taxation without representation" | KC-5.3.IV.A.i (discontent with imperial rule) | The American **grievance**. |
| Declaration of Independence, 1776: equal, consent, "alter or to abolish" | KC-5.3.I.B | The American **words**. |
| France joins the war, 1778; independence 1783; Constitution 1787, a republic; slavery kept | KC-5.3.III.B ("successful establishment of a republic ... a model") | The **chance**, and what it **created**, with its limits. |
| French debt from the American war; Estates-General 1789, first since 1614 | KC-5.3.III.B ("model and inspiration") | One revolution's **effect** became the next one's **cause**. |
| Privilege and taxes; bread prices 1788 to 1789; the Bastille | KC-5.3.IV.A.i (discontent with monarchy) | The French **grievance**. |
| Declaration of the Rights of Man, 1789: Articles 1 and 3 | KC-5.3.I.B | The French **words**: rights, and sovereignty in the nation. |
| Republic 1792; the king executed 1793; the Terror; Napoleon 1799, emperor 1804 | KC-5.3 | What France **created**: a republic, then an empire; ideas spread by war. |
| Saint-Domingue c. 1789: more than 400,000 enslaved, fewer than 80,000 free | KC-5.3.III.B | The Haitian **grievance**. |
| Free people of color claim the declaration; August 1791; Toussaint, Camp Turel 1793 | KC-5.3.I.B, III.B | The **words** claimed by people they were not written for; the **chance**. |
| 1793 and 1794 abolition; 1802 expedition; Toussaint dies 1803; independence 1 January 1804 | KC-5.3.III.B ("the Haitian Revolution ... facilitated the emergence of independent states") | What Haiti **created**. |
| Louisiana sold 1803; US recognition only in 1862; the 1825 indemnity | KC-5.3 (effects) | Haiti's **effects** reached other states. |
| Creoles and peninsulares; "permanent infancy" | KC-5.3.IV.A.i (discontent with imperial rule) | The Spanish American **grievance**. |
| Napoleon invades Spain 1808; juntas 1810; Hidalgo | KC-5.3.III.B | The **chance**, made by the French Revolution's effects. |
| Letter from Jamaica 1815: "hatred ... greater than the ocean" | KC-5.3.I.B | The Spanish American **words**. |
| Pétion's aid to Bolívar, 1816 | KC-5.3.III.B | Haiti's creation **helped cause** the next revolution. |
| By 1826 only Cuba and Puerto Rico left to Spain; Brazil 1822; creole elites; slavery kept | KC-5.3.III.B, KC-5.3 | New **states**, and how much stayed the same. |
| Republics, constitutions, liberalism, democracy; 1830 and 1848 | KC-5.3.IV.A.i | New **systems and ideologies**, an effect that became a cause. |
| "All Frenchmen are in permanent requisition," 1793 | KC-5.3.II.ii ("harnessed by governments") | A government **using** the nation. |
| Italy 1861 and 1870; Frankfurt 1848; Bismarck's "iron and blood" 1862; Germany 1871 at Versailles | KC-5.3.II.iii (unification of fragmented regions); the CED's example | Nationalism **joins** states. |
| Serbia; Greece 1821 to 1830; Serbia, Montenegro and Romania 1878 | KC-5.3.II.iii (challenged boundaries); Balkan nationalisms | Nationalism **breaks** an empire. |
| Ottomanism: 1856 edict, 1869 citizenship law | KC-5.3.II.ii; the CED's example | An empire **answers** with a loyalty of its own. |
| The Propaganda Movement, Rizal 1896 | KC-5.3.II.iii; the CED's example | The idea reaches **around the world**. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory, from 5.1:
   (a) What question did Enlightenment thinkers ask every old authority?
   (b) According to Locke, where does a government's rightful power come from?
   (c) In 1789 the French said sovereignty belongs to what?
   **Bridge:** "5.1 ended: by 1789 the ideas were everywhere educated people read. But reading Locke
   never overthrew a king. Today: what else did it take, and what did the revolutions build?"
3. **Topic question on screen, over a cinematic picture:** What caused the revolutions of 1750 to
   1900, and what did they create?
4. **The recipe:** a grievance, the words, a chance (LO C).
5. **America:** grievance, words, chance, a republic (KC-5.3.III.B).
6. **France:** the American war's debt becomes France's chance; grievance; the words (KC-5.3.I.B).
7. **What France created:** republic, Terror, Napoleon, ideas spread by war (KC-5.3).
8. **Haiti:** grievance and words; the 1791 rising; Toussaint (KC-5.3.III.B).
9. **What Haiti created and what it set off:** independence 1804; Louisiana, recognition, the
   indemnity (KC-5.3.III.B).
10. **Spanish America:** Napoleon's invasion as the chance; the Letter from Jamaica; Pétion's aid
    (KC-5.3.I.B).
11. **The chain:** each revolution's effect becomes the next one's cause (KC-5.3).
12. **The skill (3.C): compare two sources' arguments**, modeled on the 1776 and 1789 declarations.
13. **Practice:** the Letter from Jamaica beside the Declaration of Independence.
14. **New ideas about how to govern:** republic, liberalism, democracy; 1848 (KC-5.3.IV.A.i).
15. **From "the people" to the nation;** governments harness it (KC-5.3.II.ii).
16. **Nationalism joins states:** Italy and Germany (KC-5.3.II.iii).
17. **Nationalism breaks an empire, and the empire answers:** the Balkans and Ottomanism
    (KC-5.3.II.iii, with Ottomanism under KC-5.3.II.ii on the notes).
18. **Myths.** "The Enlightenment caused the revolutions"; "France gave Haiti its freedom";
    "Nationalism only built countries."
19. **Retelling slide** (section 7).
20. **AP synthesis:** one cause and one effect in a sentence, then the hand-off to 5.3.
21. **Landing, over a cinematic picture.**

## 7. Retelling slide

A cause chain a student can redraw from memory:

**Grievance + words + a chance** → **revolution** (America 1775, France 1789, Haiti 1791, Spanish
America 1810, each helping set off the next) → **what it created** (new states, republics and
constitutions, liberalism and democracy) → **the nation** (one language, religion, customs and
homeland) → **joins states** (Italy 1861, Germany 1871) **or breaks them** (Greece 1830, the Balkans
1878).

Result line: **Grievance + words + a chance = revolution. Then the nation redrew the map.**

Why this shape: the objective asks for causes and effects, and the reasoning move is Causation. The
chain has the cause on the left and the effects running right, and its middle box is where an effect
becomes the next cause, which is the move a student needs on the exam.

## 8. Owns / bridge-only (from the unit story map)

- **5.2 owns:** revolution and rebellion leading to new nation-states (KC-5.3); the American,
  Haitian and Latin American revolutions and the states they created, with the American republic as a
  model (KC-5.3.III.B); the three revolutionary documents (KC-5.3.I.B); the French Revolution as the
  setting of the 1789 declaration and of the chain; democracy and liberalism (KC-5.3.IV.A.i); the
  nation as a shared language, religion, customs and territory, harnessed by governments
  (KC-5.3.II.ii); nationalists uniting or breaking states, with the CED's examples (KC-5.3.II.iii).
- **Bridge only:** the Enlightenment ideas themselves (5.1), named, not retaught; abolition as a
  long reform movement and the end of serfdom (5.1); de Gouges and women's demands (5.1); France's
  1848 vote for all men (5.1, named in passing as part of 1848); the industrial revolution (5.3, the
  hand-off line only); Ottoman reform as a response to industrial pressure (5.8: the Tanzimat is named
  here only as Ottomanism's promise of equal citizenship, never as modernization); imperialism and
  resistance to it (Unit 6: Rizal is one sentence, the Māori and Puerto Rican cases are teacher notes).
- **Story map change:** none to ownership. The spine adds the recipe (section 4).
- **Hands to 5.3:** "Even before Paris argued about rights, a different revolution had begun in
  British workshops." (Corrected from the story map's wording after review pass 1.)

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-5-2-CLAIM-LEDGER.md`)

The new claims, and the ones most likely to be wrong by the defect classes Units 2 to 5 kept finding:

- Every quotation checked word for word against its original or a named translation: the
  Declaration of Independence (National Archives transcription), the 1789 declaration's Articles 1
  and 3 (Avalon Project), Toussaint's Camp Turel proclamation (Bell's translation), the Letter from
  Jamaica (Bertrand's translation, 1951), the levée en masse (Fordham Sourcebook), Bismarck's 1862
  remarks (German History in Documents and Images, a secretary's record in reported speech).
- Dates: 1763, 1765, 1776, 1778, 1783, 1787, 1614, 1788, June, July and August 1789, 1791, 1792,
  1793, February 1794, 1799, 1802, 1803, 1 January 1804, 1808, 1810, 1815, 1816, 1822, 1825, 1826,
  1830, 1848, 1856, 1861, 1862, 1869, 1870, 18 January 1871, 1878, 1896.
- Numbers: more than 400,000 enslaved and fewer than 80,000 free people c. 1789 (estimates range
  from 406,000 to 465,000 enslaved; the figures are given as a floor, not a count); 150 million and 90
  million francs.
- Superlatives and single causes to keep out: "the Enlightenment caused the revolutions"; "the most
  radical revolution"; "the first Black republic" (narrowed to "the first founded by people who had
  freed themselves from slavery"); "the only successful slave revolt"; "Greece the first nationalist
  challenge"; "France's richest colony" (needs a source: Britannica's "most prosperous").
- Motives and causal links stated as arguments: Napoleon's sale of Louisiana (April 1803) while losing
  Saint-Domingue (historians weigh it with the coming war with Britain); Pétion's condition.

## 10. Visual requirements per beat

Pictures are checked in Phase 6. Commons and the Met open-access API are tried in that order.

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 3 | A painting of a revolutionary crowd or a signing (Trumbull's *Declaration of Independence*, painted 1818; Houël's *Prise de la Bastille*, 1789) | The question: people turning words into revolution. | Trumbull painted 42 years later; say so. |
| 5 | Trumbull's *Declaration*, or the engrossed Declaration | America's words. | |
| 6 to 7 | Houël's Bastille watercolor (already in the repo); the 1789 declaration printed as a tablet (Le Barbier, c. 1789) | France's grievance and words. | |
| 8 to 9 | Girodet's portrait of Jean-Baptiste Belley (1797), deputy for Saint-Domingue; a period portrait of Toussaint | Haiti's words claimed; its leaders. | Most Toussaint portraits are posthumous; say so. |
| 10 | A portrait of Bolívar painted in his lifetime | Spanish America's words. | |
| 16 | Anton von Werner's *Proclamation of the German Empire* (1877 or 1885 version) | Germany united, at Versailles. | Painted after the event, for the Prussian court. |
| 17 | Delacroix, *Greece on the Ruins of Missolonghi* (1826) | Balkan nationalism as Europeans pictured it. | A French painter's allegory, not a scene. |
| 4, 11, 19 | Cause-chain diagrams | | |
| 21 | Landing picture | | |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the
final report.

1. **Title:** the page keeps "Nationalism and Revolutions," with "1750 to 1900" in the subtitle,
   because the CED's full title does not fit the module cards and Unit 5's lesson files are named
   for the short title. The reading's title is "How Revolutions Made Nations," on the reading, both
   lesson files, the deck and Canvas.
2. **Skill Builder skill:** moves to the CED's suggested skill, 3.C, "compare the arguments of two
   sources": state each source's argument, find one way they agree and one way they differ, and
   explain the difference by what caused each document. Modeled on the 1776 and 1789 declarations,
   practiced on the Letter from Jamaica beside the Declaration of Independence. Replaces a
   comparison of the revolutions with each other.
3. **Learning targets:** three. Target 1, the causes, grievance, words and chance
   (KC-5.3.I.B, with KC-5.3.IV.A.i's discontent); Target 2, what the revolutions created: independent
   states in the Americas, each helping set off the next, and new systems of government and
   ideologies (KC-5.3.III.B, with KC-5.3 and KC-5.3.IV.A.i); Target 3, the nation, used by
   governments, uniting and breaking states (KC-5.3.II.iii, with KC-5.3.II.ii). Checkpoint 1
   assesses Targets 1 and 2; Checkpoint 2 assesses Target 3 and declares Causation.
4. **Primary Source:** the Letter from Jamaica (1815), three short passages in Bertrand's
   translation with an attribution, and three questions: its argument, what caused it, and how its
   argument compares with the Declaration of Independence (3.C). It replaces the invented Toussaint
   address.
5. **Map module:** the revolutions and the new states, 1775 to 1878, with its intro, prompt and key
   rewritten to the story.
6. **Evidence Lab:** verified excerpts of the three CED documents and Toussaint's 1793
   proclamation, and real objects where they can be sourced (the Bastille watercolor already in the
   repo; the Belley portrait; the proclamation of the German Empire).
7. **BeSurreal:** Les Cayes, Haiti, early 1816: you are a Haitian veteran of the revolution asked to
   sail with Bolívar's expedition, and you write home about what you will demand from the man you are
   helping. It replaces the c. 1798 soldier scene, which put Napoleon's 1802 army in 1798.
8. **BeInTheRoom:** the existing scenario, "The Saint-Domingue Constitution" (1801), is kept, with
   its alignment corrected to the CED (LO C, KC-5.3.III.B and KC-5.3.I.B), its reflection asking for
   causes and effects, and its facts checked.
9. **Deep reading:** rebuilt around this story.
10. **Required modules** (Phase 8): 02 First & 10, 05 Skill Builder, 07 Evidence Lab, 10 Checkpoint 2,
    the set Unit 4 and 5.1 used. Checkpoint 2 is the nationalism half of the objective, which the
    reading and deck build to.
