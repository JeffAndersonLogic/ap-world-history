# Topic 4.7 Story Draft: Changing Social Hierarchies

**Status: Delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).**
Jeff started this build with "Build 4.7" on 2026-10-18. Topic 4.6 is on `main` (`dcabc84`, with
`8f22519` and `832cf98` on top) and 4.7 is the next topic in the unit. The Phase 9 reviewers check
this story against the CED source file and the scholarship; the record of what they found is in
`docs/TOPIC-4-7-CLAIM-LEDGER.md`, under "Review findings".

**Taught:** Green Friday 2026-11-13, Silver Monday 2026-11-16, from Jeff's corrected November
Canvas calendar (2026-10-14), already in `assets/data/announcements-schedule.js` as date-only
entries.

**Branch baseline:** `claude/build-4-7-qqz736`, the branch this session was given, from `main` at
`832cf98`. (The build-topic skill names a topic branch `claude/topic-X-Y-build`; this session's
instructions name the branch, so the work is here and the report says so.) No other branch with
commits not on `main` touches 4.7 or the shared Unit 4 files.

**CED source: `scripts/lib/ced-source/unit-4.js`**, transcribed 2026-10-11 from the Fall 2026
CED, Course Framework V.1, p. 89 (topic page), p. 75 (Unit at a Glance) and p. 77 (sample
activity). This draft quotes that file and nothing else for what the CED requires. The unit story
map (`docs/UNIT-4-STORY-MAP.md`, approved 2026-10-11) supplies the spine, the hand-offs and the
owns / bridge-only split; it agrees with the source file on 4.7.

---

## 1. What the CED requires (p. 89)

One learning objective, under one theme.

- **Learning objective M (Social Interactions and Organization, SIO):** Explain how social categories, roles, and practices have been maintained or have changed over time.

Key Concepts, as the CED pairs them with the objective:

- **KC-4.3.I.B** (LO M): Many states, such as the Mughal and Ottoman empires, adopted practices to accommodate the ethnic and religious diversity of their subjects or to utilize the economic, political, and military contributions of different ethnic or religious groups. In other cases, states suppressed diversity or limited certain groups’ roles in society, politics, or the economy.
- **KC-4.2.III.A** (LO M): Imperial conquests and widening global economic opportunities contributed to the formation of new political and economic elites, including in China with the transition to the Qing Dynasty and in the Americas with the rise of the Casta system.
- **KC-4.2.III.B** (LO M): The power of existing political and economic elites fluctuated as the elites confronted new challenges to their ability to affect the policies of the increasingly powerful monarchs and leaders.

- **Reasoning move:** Continuity and Change, the CED's reasoning process for 4.7 (p. 75). The
  objective's own words are "maintained or have changed," so every case is sorted the same way:
  what about who held status stayed the same, what changed, and why. The answer the whole topic
  builds is that **the ladder stayed and the people on its rungs moved**: every society in the
  period still ranked people, and most were still ruled by a hereditary monarch with privileged
  nobles beneath him, but who was let in, who rose to the top, and how much power the old top kept
  all changed.
- **Suggested skill:** 3.D Claims and Evidence in Sources, "Explain how claims or evidence support,
  modify, or refute a source’s argument." In this topic that means taking an argument someone made
  at the time about who could rise or how free a group was, and testing it against the evidence:
  this detail supports it, this one modifies it (true, but only for some people), this one refutes
  it. The CED's own sample activity is the same move, a debate testing a historian's claim about
  religious toleration against evidence.
- **Thematic focus:** Social Interactions and Organization (SIO).
- **Illustrative examples (optional):** Differential treatment of groups in society, politics, and
  the economy: expulsion of Jews from Spain and Portugal and the acceptance of Jews in the Ottoman
  Empire; restrictive policies against Han Chinese in Qing China; varying status of different
  classes of women within the Ottoman Empire. Existing elites: Ottoman timars; Russian boyars;
  European nobility. The CED says these "do not in any way constitute additional, preferred, or
  required information." All six are used, because together they are the shortest route through
  all three Key Concepts: two of them (Qing restrictions, and the casta system the Key Concept
  itself names) carry both a "suppressed or limited" case and a "new elite" case at once. The
  other names in this story (Bayezid II and Salonica; Akbar, the Rajputs and Aurangzeb; Hürrem and
  Kösem; the queue order and the banners; peninsulares and creoles; the 1695 tax farms; Peter the
  Great's Table of Ranks; Louis XIV at Versailles) are concrete cases inside the CED's examples,
  chosen by this build.
- **Sample activity (p. 77, optional):** a debate on the introduction of Alan Kramer's "Toleration
  in the World History of Religions" (World History Connected): compile evidence from 1250 to 1750
  that supports and refutes Kramer's claim, then debate the scope of religious tolerance. This build
  takes the move rather than the article: the Skill Builder tests a 1555 European ambassador's claim
  that Ottomans rose by merit and not by birth, and the Primary Source tests a 1717 English
  traveler's claim that Ottoman women were "the only free people in the empire." Both sources are
  in public-domain translations; Kramer's article is not reproduced.

**Five things in these sentences that are easy to drop.**
1. **"Accommodate ... or to utilize."** Two different reasons to make room for a group: to keep the
   peace among subjects who differ, or to *use* what a group can do (its taxes, its trade, its
   soldiers, its skills). The Ottomans welcoming Jewish refugees and the Mughals making Rajput
   princes into generals are both "utilize" as much as "accommodate."
2. **"In other cases, states suppressed diversity or limited certain groups' roles."** The other
   half of the same sentence. A story that is all tolerance misses it. Spain and Portugal expelling
   or forcibly converting Jews, and the Qing limiting Han Chinese, are the CED's cases.
3. **"New political *and* economic elites."** Not only rulers. The Qing banners were a new
   political and military elite; in Spanish America, Spanish-born officials were a political elite
   and American-born Spanish families who grew rich from silver, land and trade an economic one.
   "Widening global economic opportunities" is in the sentence for a reason.
4. **"The power of existing elites fluctuated."** Not "disappeared." Old elites lost some powers and
   kept or gained others: Russian nobles lost their independence and gained firmer control over
   serfs; French nobles lost their military independence and kept their privileges. "Fluctuated"
   means up as well as down, and in some places the old elites won.
5. **"Maintained or have changed."** The objective asks for both. A 4.7 answer that only lists
   changes has answered half the question.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-4-7-changing-social-hierarchies.js`), the renderer config, the First & 10
entry in `scripts/lib/reading-content/unit-4.js`, the deep reading
`scripts/lib/deep-reading-content/topic-4-7.js`, the BeInTheRoom scenario in
`scripts/build-unit4-rooms.js` (The Identity Dossier), the map spec `topic-4-7` in
`scripts/lib/instructional-map-specs.js`, the CED and coherence contracts, the deep audit, the unit
story map, the Unit 3 surfaces that already teach Akbar, the jizya, the devshirme and the timar,
and the 4.6 audit record and claim ledger.

**Consistent with the CED:**
- The lesson data and renderer config carry the learning objective and all three Key Concepts in
  the CED's wording, with the illustrative examples (corrected 2026-10-11).
- The three learning targets map one to one to KC-4.3.I.B, KC-4.2.III.A and KC-4.2.III.B.
- What Unit 3 already teaches agrees with this story: Akbar abolished the jizya in 1564 and
  Aurangzeb reimposed it in 1679 (Topics 3.2 and 3.4 chapters); the Ottoman "millet system" as a
  tidy empire-wide chart is a later formalization (3.2 chapter); the Ottoman state moved "from
  timar-holding cavalry to tax farming and provincial notables" (3.2 and 3.4 chapters).

**Out of line, each fixed inside this build:**
1. **The subtitle teaches a different topic.** "How European colonialism reorganized social order,
   creating the casta system in Spanish America, racializing slavery in the Atlantic world, and
   producing new hierarchies wherever it reached." That is one Key Concept of three, plus Atlantic
   slavery, which the story map gives to 4.4 as a comparison set only. The subtitle becomes the
   spine.
2. **The reasoning process is missed (story map conflict 2).** The Skill Builder is "Comparison
   practice" on colonial hierarchies (Spanish, Portuguese, British, Dutch), and nothing practices
   3.D. The First & 10's callouts are Causation, Social Structure and Continuity & Change; its
   question badges are Causation, Continuity & Change and Comparison.
3. **Material outside 1450 to 1750 (story map conflict 4):** the *gracias al sacar* "purchasing
   whiteness" material (lesson data and deep reading; the fee schedule historians write about is the
   royal decree of 1795), the *Pragmática* of 1776 (deep reading, four times), Tupac Amaru II and the
   1780 rising (deep reading), and casta "in Spanish colonial America" told mostly from the late
   1700s. All leave or are dated honestly.
4. **KC-4.2.III.B has almost no surface (story map conflict 14).** The deep reading has no timar,
   boyar or European nobility at all; the First & 10 gives them two sentences; Mughal accommodation
   is one clause. The story gives each existing-elite case its own beat.
5. **Atlantic and Dutch colonial hierarchies outside the topic:** the map ("Colonial Social
   Hierarchies Across the Atlantic World", the mita, plantation slavery, West Africa), its key
   (Portuguese Brazil's manumission, VOC territories, British slave codes), the Skill Builder (all
   four colonial systems), and two Evidence Lab items (the 1705 Virginia slave code, Brazilian
   manumission rates). These are 4.4's labor and slavery material. They leave.
6. **The Primary Source is not a source.** "Casta and Legal Status in New Spain, c. 1730" is an
   "adapted passage ... drawn from a colonial legal manual used by audiencia judges," with no
   author, title or translator, and it reads as written for the lesson (a tidy closing sentence
   about "the natural order of a Christian society"). It is replaced with a real source in a named
   public-domain translation.
7. **Claims flagged for the ledger:** casta "major categories" with "enslaved Africans (no legal
   personhood)" (enslaved people in Spanish law could marry, go to court and buy freedom, so "no
   legal personhood" is wrong); "mestizos ... exempt from tribute if raised in the Spanish manner";
   "Peter the Great pushed boyars into state service" (right in outline; the dates and the Table of
   Ranks need checking); "Mughal rulers at times incorporated Hindu elites"; Portuguese Brazil
   manumission "perhaps 5 to 10% of the enslaved population was freed per generation" (no source,
   and off-topic). Each is checked in the ledger or leaves with its surface.
8. **Pictures from other topics (`stableImages`):** Columbus taking possession (4.2), a 1700 world
   map, Florentine Codex smallpox (4.3), a 1936 Pueblo Revolt mural (4.6), the VOC (4.5), Vasco da
   Gama's pillar and portrait (4.2), the Waldseemüller map (4.2), a Persian astrolabe (4.1). Lecture
   card 2's picture is Columbus taking possession, captioned as if it were about casta; card 3's is
   a portrait of Louis XIV captioned "European court nobility."
9. **Leftovers:** `first10.note` (lesson data and renderer config) still says "build your AI Coach
   prompt" (retired 2026-08-31); the reading still carries a `builderBody`; the lecture intro speaks
   of "Topic 4.7 tracks"; the Evidence Lab's `items` (unrendered) are about Atlantic slave codes; the
   BeInTheRoom description in the lesson data offers three scenarios that do not exist; the
   scenario's alignment misquotes the objective ("maintained or challenged") and lists "Casta,
   lineage, status, and social mobility" as a Key Concept; the map's intro tells students to "study
   the casta painting" on a map module that shows no casta painting.
10. **Evidence Lab:** five cards, of which two are ruler portraits with prompts asking what the
    portrait "cannot reveal," one is a VOC charter summary (4.5), and one is a Frans Post plantation
    (4.4). Only the casta series is on the topic, and it is a modern collage of a painting set.
11. **BeInTheRoom (The Identity Dossier) is on the topic and well researched, and written above a
    ninth grader** ("context-dependent identity," "corporate privilege," "administrative clarity
    hardens racial hierarchy"). It stays, rewritten in plain words, with its alignment corrected.

## 3. The ninth-grade story

Last topic ended with a question. Some people resisted the new order. Everyone was sorted by it.
Who ended up where?

**The ladder stays; the people on it move.** Every society you have studied ranked people. There
were rulers and nobles at the top, priests and scholars and merchants in the middle, and farmers,
laborers and the enslaved at the bottom. Between 1450 and 1750 that did not change: nobody in this
period built a society of equals, and almost everywhere a hereditary king, sultan, tsar or emperor
still sat on top. That is the **continuity**. What changed was who stood on which rung, and why.
Empires that conquered new lands and got rich from new trade made three kinds of change. They
decided **who could belong**: which religious and ethnic groups they welcomed or made use of, and
which they pushed out or held down. They made **new elites**, new groups at the top. And they
**squeezed old elites**, the nobles and warriors who had shared power with earlier rulers.

**Who belongs, part 1: pushed out and welcomed.** In 1492 Ferdinand and Isabella of Spain ordered
every Jew in their kingdoms to become Christian or leave by the end of July. Tens of thousands left;
many more converted and stayed. Four years later Portugal's king ordered the same, and in 1497,
instead of letting most of them go, he had them baptized by force. Spain wanted one religion for
one kingdom, and pushing a whole group out was how it got it. At the other end of the
Mediterranean, the Ottoman sultan Bayezid II let the refugees settle in his empire, and thousands
did, in Istanbul, in Salonica (today Thessaloniki, in Greece), and in other cities. Salonica became a
city where Jews were the largest group, and it stayed that way for centuries. Why would a Muslim
sultan take them in? Because they were useful: merchants, doctors, craftsmen and taxpayers. Jewish
refugees soon set up Istanbul's first printing press. (Not all the exiles went east: many went to
Portugal, North Africa and Italy.)

**How the Ottomans made room.** The Ottoman Empire ruled Muslims, Orthodox Christians, Armenian
Christians and Jews. Its rule for non-Muslims was old Islamic law: they were protected subjects.
They could practice their religion, and their own religious leaders ran their marriages,
inheritances, schools and courts for family matters, and answered to the sultan for their
community's taxes and good behavior. In return they paid a special tax, the **jizya**, and lived
with limits: in an Islamic court their word counted for less against a Muslim's, they could not
build new churches or synagogues freely, and the top jobs in the army and government went to
Muslims. (Topic 3.2's devshirme took Christian boys and made them Muslim soldiers and officials,
which is one way a Christian family's son could reach the top, by leaving his family's religion.) So
the Ottomans **accommodated** difference and **used** it, but they did not make people equal.

**Who belongs, part 2: it depends on the ruler.** In India, the Mughal emperors were Muslims ruling a
mostly Hindu land. The emperor **Akbar** (ruled 1556 to 1605) did more than tolerate Hindus: he
abolished the jizya in 1564, married daughters of Hindu Rajput kings, and made Rajput princes some of
the highest-ranking commanders and officials in his empire. He needed their armies and their loyalty,
and he got them. A century later his great-grandson **Aurangzeb** brought the jizya back, in 1679,
though he still employed many Hindu officers. Same empire, same groups, opposite policy. Making room
for a group was a choice a ruler made, and the next ruler could unmake it.

**Who belongs, part 3: women, by class.** Inside the Ottoman Empire, being a woman meant very
different things depending on who you were. At the very top, women of the sultan's family held real
power. Hürrem, who began as an enslaved woman in the palace and became the wife of Suleiman, paid for
a mosque, a school, a soup kitchen and a hospital in Istanbul. Kösem acted for her young sons and
grandson as regent, running the government for years at a time between the 1620s and 1651. In the
towns, ordinary women owned property, ran businesses, and went to the Islamic court to claim
inheritances and debts, and court records show them winning. But the law treated them unequally:
a daughter inherited half what a son did, and her word in court counted for less than a man's. And
many women were enslaved, as servants and concubines, with almost no say in their lives. The CED
calls this the "varying status of different classes of women," and the key word is varying.

**New elites, part 1: China gets new rulers.** In 1644 the Manchus, a people from north of the Great
Wall, took Beijing and founded the **Qing dynasty**. They were a small minority ruling a huge Han
Chinese majority. They kept the Chinese way of governing: the civil service exams, the Confucian
officials, the old law codes, and Han Chinese scholars still filled most government jobs. But they
also built a new elite at the top: the **banners**, hereditary military units of Manchus, Mongols and
Han families who had joined the Manchus early. Bannermen lived in walled quarters inside major
cities, were paid by the state, and had legal privileges ordinary Han did not. And the Qing held the
Han majority in place. In 1645 they ordered every Han man to shave the front of his head and wear his
hair in a long braid, the Manchu **queue**, or be killed. Many top government posts were given to two
officials, one Manchu and one Han, so the Manchu could watch the Han. A line of ditches and willow
fences in the northeast kept Han farmers out of the Manchu homeland. Continuity (the exams and the
bureaucracy) and change (a new conquest elite, and restrictions on the Han) in the same empire.

**New elites, part 2: the Americas get a new top.** In Spanish America (Topics 4.3 and 4.4), conquest
had thrown together Spaniards, Indigenous peoples and Africans, and their children. The Spanish
crown ranked people by birthplace and by ancestry, and the system is called the **casta** system. At
the top were **peninsulares**, people born in Spain: the viceroys who ruled for the king were almost
always Spanish-born. Next came **creoles**, people of Spanish ancestry born in the Americas. Silver
mines, great estates and trade made many creole families rich, a new economic elite, and they
resented the newcomers from Spain who got the highest jobs. Below them were people of mixed ancestry,
**mestizos** (Spanish and Indigenous) and **mulattos** (Spanish and African); Indigenous people, who
paid tribute to the crown and lived under their own town governments; and people of African ancestry,
some free and many enslaved. In the 1700s, artists in Mexico painted sets of **casta paintings**, each
showing a mother, a father and their child, labeled by category, as if society were a neat chart. Real
life was messier. The labels in the paintings did not appear in most official records, and how a
person was recorded could change with their wealth, job, clothes and reputation. But ancestry still
opened or closed doors, and the top of the ladder belonged to people whose ancestors came from Spain.

**Old elites squeezed, part 1: the Ottoman cavalry.** For centuries the backbone of the Ottoman army
was the **sipahi**, a cavalryman who held a **timar**: the right to collect the taxes of a piece of
land, in return for riding to war when the sultan called. A timar was not his to own, and it was not
supposed to pass automatically to his son. By the late 1500s, wars were won by soldiers with guns,
paid in cash (Topic 3.1's Janissaries), and the sultan needed money more than horsemen. So the state
turned more and more timar land into **tax farms**, the right to collect a district's taxes, sold for
cash to whoever would pay; in 1695 it began selling them for life. The sipahis faded. The people who
rose were the tax farmers and powerful provincial families. The old elite lost; a new one gained.

**Old elites squeezed, part 2: the Russian boyars.** The **boyars** were Russia's great noble
families. They sat on the tsar's council and fought over seats by family rank. In 1682 the tsar
ended that system of family precedence. Then **Peter the Great** (ruled 1682 to 1725) went further. He
replaced the old boyar council with a Senate he appointed (1711), ordered nobles to shave their beards
and dress like western Europeans, and made noblemen serve the state, in the army or the government,
for life. In 1722 his **Table of Ranks** set out fourteen ranks of service: a man's place depended on
the rank he earned, and a commoner who rose high enough became a noble. The word "boyar" faded. But
the nobles did not: they kept their estates, and their hold over their serfs, which the Law Code of
1649 (Topic 4.6) had already tightened. They lost independence and kept privilege.

**Old elites squeezed, part 3: the French nobles.** Louis XIV never forgot the Fronde (Topic 4.6).
He sent royal officials, the **intendants**, to run the provinces, and in 1682 he moved his court and
government to his palace at **Versailles**, where great nobles spent their days near the king,
competing for his favor instead of building armies at home (Topic 3.2 showed the palace as a tool of
rule). French nobles kept their titles, their land and their freedom from the main tax. What they lost
was the power to defy the king. And "fluctuated" means it could go the other way: in England in 1688, a group
of nobles invited William of Orange to bring an army, King James II fled, and Parliament, a body of
landowning nobles and gentry, set limits on the monarchs who came after him. There the old elite won.

**Testing a claim (the skill).** People at the time argued about all this. In the 1550s a European
ambassador to the Ottoman court, Ogier Ghiselin de Busbecq, wrote home that among the Turks "no
distinction is attached to birth" and "it is by merit that men rise," while in Europe "birth is the
standard for everything." Is he right? Evidence can **support** his argument (boys taken by the
devshirme rose to be generals and grand viziers), **modify** it (true for the sultan's servants, but
the sultan himself inherited his throne, and a Christian had to become Muslim to rise), or
**refute** part of it (in Europe, Peter's Table of Ranks and French offices that commoners could buy
show that birth was not the only route). That is the CED's skill for this topic.

**Put it together.** The ladder stayed: kings and emperors on top, privileged nobles beneath them,
the many at the bottom, and women's place set by their class. Who stood where changed. States decided
who could belong, welcoming or using some groups (Jews in the Ottoman Empire, Rajputs under Akbar) and
pushing out or limiting others (Jews in Spain and Portugal, the Han under the Qing). Conquest and new
trade made new elites (the Qing banners; peninsulares and rich creoles). And old elites were squeezed
by stronger rulers (sipahis, boyars, French nobles), though they rarely vanished and sometimes won.

**And it hands on a question.** Trade, labor and hierarchy all moved. Which change mattered most,
and what stayed the same? That is Topic 4.8.

## 4. The spine

**Empires decided who could belong and who could rise: new elites appeared, old ones were squeezed,
and some groups were welcomed while others were pushed out.** (Approved with the unit story map,
2026-10-11.)

"Who could belong ... some groups were welcomed while others were pushed out" is KC-4.3.I.B; "new
elites appeared" is KC-4.2.III.A; "old ones were squeezed" is KC-4.2.III.B. The reasoning move runs
through every case: what stayed the same about who held status, what changed, and why.

Shorter for the wall: **The ladder stayed. The people on it moved.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| The ladder: every society ranked people; hereditary rulers and privileged nobles almost everywhere | LO M ("maintained") | The continuity. Without it, every case reads as pure change. |
| Spain 1492 (convert or leave by the end of July) and Portugal 1496 to 1497 (forced baptism) | KC-4.3.I.B ("suppressed diversity"); example | A state **pushing out** a group to make one religion. |
| Bayezid II lets the refugees settle; Salonica; the first printing press in Istanbul, 1493 | KC-4.3.I.B ("utilize the economic ... contributions"); example | A state **welcoming and using** a group, for what it could do. |
| Ottoman protected-subject rules: own leaders and family law; the jizya; limits on testimony, building and office | KC-4.3.I.B ("accommodate"); the CED names the Ottomans | Accommodation **without equality**. |
| Akbar: jizya abolished 1564; Rajput marriages; Rajput princes as top commanders. Aurangzeb: jizya back 1679 | KC-4.3.I.B ("utilize the ... military contributions"); the CED names the Mughals | Accommodation is a ruler's **choice**, and it can be reversed: change inside one empire. |
| Ottoman women by class: Hürrem's buildings; Kösem as regent; townswomen in court; unequal inheritance and testimony; enslaved women | KC-4.3.I.B; example "varying status of different classes of women" | A group's place **varied by class**, inside one empire. |
| Qing 1644; the banners as a new elite; the exams and Han officials kept; the queue order 1645; dual appointments; the Willow Palisade | KC-4.2.III.A (Qing); KC-4.3.I.B (example, restrictions on Han) | A **new conquest elite**, a **limited majority**, and a continuity (the exams), all at once. |
| Casta: peninsulares (viceroys almost always Spanish-born), creoles (rich from silver, land and trade), mestizos, mulattos, Indigenous (tribute), Africans free and enslaved; casta paintings from about 1715; real records simpler and status negotiable | KC-4.2.III.A ("the rise of the Casta system") | A **new elite** made by conquest and new wealth, ranked by birthplace and ancestry. |
| Timars and sipahis; cash and guns; tax farms; life-term tax farms 1695; tax farmers and provincial families rise | KC-4.2.III.B; example Ottoman timars | An old elite **falls** as the state's needs change, and a new one rises. |
| Boyars: precedence ended 1682; Peter's Senate 1711, beards and dress, lifelong service, Table of Ranks 1722; nobles keep estates and serfs | KC-4.2.III.B; example Russian boyars | An old elite **squeezed into service**, losing independence, keeping privilege. |
| Louis XIV: intendants; Versailles 1682; nobles keep titles, land and tax exemption. England 1688 | KC-4.2.III.B; example European nobility | Squeezed in France; **winning** in England. "Fluctuated." |
| Busbecq, 1555 to 1562: "by merit that men rise"; "birth is the standard for everything" | Suggested skill 3.D | A source's argument to support, modify and refute. |
| Lady Mary Wortley Montagu, 1717: Ottoman women "the only free people in the empire" | Suggested skill 3.D; example women by class | A second argument to test, on the CED's example about women. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 4.6: name one group that pushed back against a growing state.
   (b) From 3.2: name one tool a ruler used to keep nobles or officials under control (Versailles,
   the devshirme, officials paid by the ruler).
   (c) From 4.4: name one group of people in Spanish America who were forced to work.
   **Bridge:** "4.6 ended: some people resisted the new order, and everyone was sorted by it. Today:
   who ended up where, and what stayed the same?"
3. **Topic question on screen, over a real historical object:** Between 1450 and 1750, who could
   belong, who could rise, and who got squeezed?
4. **The ladder stays; the people on it move.** The continuity and the three kinds of change.
5. **Pushed out and welcomed: 1492.** Spain and Portugal; Bayezid II and Salonica.
6. **How the Ottomans made room, and its limits.** Protected subjects, the jizya, the limits.
7. **It depends on the ruler: Akbar and Aurangzeb.**
8. **Ottoman women, by class.** Hürrem and Kösem; townswomen in court; the enslaved.
9. **A new elite in China: the Qing.** The banners, the queue, the exams kept.
10. **A new elite in the Americas: casta.** The categories; the paintings; real life messier.
11. **Old elites squeezed: the sipahis and their timars.**
12. **Old elites squeezed: the boyars and the Table of Ranks.**
13. **Old elites squeezed, or winning: French nobles at Versailles; England 1688.**
14. **Testing a claim (3.D) modeled:** Busbecq's argument, with support, modify and refute. The
    Skill Builder practices it; the Primary Source does it again on Montagu.
15. **Sort the cases:** maintained or changed, and which kind of change.
16. **Myths.** "The Ottomans gave everyone equal rights"; "casta was a fixed chart everyone was
    locked into"; "old elites disappeared"; "the expelled Jews all went to the Ottoman Empire."
17. **Retelling slide** (section 7).
18. **AP synthesis:** answer the learning objective in three sentences (what stayed, what changed,
    why), then hand off to 4.8.
19. **Landing, over a real historical object.**

## 7. Retelling slide

A continuity-and-change model a student can redraw from memory:

**What stayed (continuity):** a hereditary ruler on top, privileged nobles beneath him, most people at
the bottom, and a woman's place set by her family's class.

**What changed, three ways:** **who could belong** (welcomed or used: Jews in the Ottoman Empire,
Rajputs under Akbar; pushed out or limited: Jews in Spain and Portugal, the Han under the Qing) →
**new elites** (the Qing banners; peninsulares and rich creoles) → **old elites squeezed**
(sipahis, boyars, French nobles; and in England, the old elite won).

Result line: **The ladder stayed. The people on it moved, and rulers decided who moved where.**

Why this shape: the reasoning move is continuity and change, and the objective asks how categories
were "maintained or have changed." The slide puts the continuity first, because students forget it,
and the three changes are the three Key Concepts in order. The deck builds it as a continuity-and-
change slide (`continuity-change`).

## 8. Owns / bridge-only (from the unit story map)

- **4.7 owns:** states accommodating or suppressing diversity, the Mughal and Ottoman cases and the
  CED's examples (Jews expelled from Spain and Portugal and accepted in the Ottoman Empire;
  restrictions on Han Chinese under the Qing; the varying status of women in the Ottoman Empire)
  (KC-4.3.I.B); new elites, the Qing transition and the casta system (KC-4.2.III.A); existing elites
  whose power rose and fell against stronger monarchs, Ottoman timars, Russian boyars, European
  nobility (KC-4.2.III.B).
- **Bridge only:**
  - Atlantic slavery regimes as a comparison set (4.4). Enslaved Africans appear only as the bottom of
    the casta ranking. Slave codes, manumission rates and the plantation hierarchy leave.
  - The labor systems of Spanish America, encomienda, mit'a and hacienda (4.4). Named in BeReady only.
  - The devshirme and Versailles as tools of rule (Topic 3.2), and the Janissaries' guns (3.1). One
    clause each, from the elite's side.
  - Akbar's religious ideas (Topic 3.3's setting). Only his policies toward Hindu groups are used.
  - The Fronde and the 1649 Law Code (4.6). Named as what came before; not retold.
  - The argument about which change mattered most (4.8). Named in the hand-off only.
- **Hands to 4.8:** "Trade, labor and hierarchy all moved. Which change mattered most, and what
  stayed the same?"

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-4-7-CLAIM-LEDGER.md`)

The claims that shaped the story are checked in the ledger before any surface is written. The ones
most likely to be wrong, by the defect classes 4.1 to 4.6 kept finding:

- Numbers: how many Jews left Spain (estimates run from about 40,000 to 200,000, so the story says
  "tens of thousands"); "fourteen ranks"; Manchus as a minority (no number given).
- Dates: 31 March 1492 and the end of July; Portugal 1496 to 1497; 1493 press in Istanbul; Akbar
  1556 to 1605, jizya 1564; Aurangzeb 1679; Hürrem's complex 1538 to 1551; Kösem's regencies 1623 to
  1651; Qing 1644; queue order 1645; Willow Palisade from 1648; the 1695 life-term tax farms; 1682
  precedence ended; Senate 1711; Table of Ranks 1722; Versailles 1682; England 1688; casta paintings
  from about 1715; Busbecq 1555 to 1562; Montagu 1717.
- Superlatives and single causes to keep out: "the Ottomans were tolerant" as a value; "casta was a
  rigid caste"; "Peter abolished the nobility"; "the Sultanate of Women caused Ottoman decline"; "the
  Qing banned Manchu and Han marriage" (the rules changed over time); "creoles were barred from all
  high office" (barred from almost none in law; kept from the very top in practice); "enslaved
  people had no legal personhood."
- Quotations, verbatim from a named translation: Busbecq (Forster and Daniell, 1881); Montagu
  (Letters, 1763 edition or a standard reprint).
- Causal claims stated as historians' arguments where they are arguments: why Bayezid welcomed the
  refugees; why the timar gave way to tax farming; what Versailles did to the nobles.

## 10. Visual requirements per beat

Pictures are checked in Phase 6, and the build records which ones were verified. No image generator
key is set in this environment, so AI pictures are skipped; if a beat needs one, its prompt is saved
to `docs/TOPIC-4-7-IMAGE-PROMPTS.md`. The question and landing slides carry a real historical object.
Wikimedia Commons answered HTTP 429 at the start of this build, as it did for all of 4.6; the
Rijksmuseum, the Metropolitan Museum and the Art Institute of Chicago answer, and their open-access
images are sourced from their own catalogues.

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 3, 19 | A casta painting, or a picture of the court at Versailles, made in the period | Sorting people, seen by its own century. | A late-1700s casta set is after the period; say so. |
| 5 | A print or map of Salonica or Istanbul, 1500s to 1600s; or a Jewish book printed in Istanbul | The welcome. | A modern photograph of a city. |
| 7 | A Mughal painting of Akbar's court with Rajput nobles | Accommodation as policy. | Later copies of Akbar-period scenes. |
| 8 | An Ottoman or European picture of an Ottoman woman, or Hürrem's buildings | Women by class. | European "harem" fantasies are imagination, not evidence. |
| 9 | A Qing painting showing officials or soldiers with the queue, or a banner portrait | The new elite and the restriction. | A 19th-century photograph is after the period. |
| 10 | A casta painting from about 1715 to 1750 | The elite's chart. | It shows an ideal, not a census. |
| 11 | An Ottoman sipahi in a costume book | The old elite. | European costume books copy each other. |
| 12 | A 1705 beard token, or a print of Peter's Russia | Squeezing the boyars. | Later caricatures. |
| 13 | A painting of Versailles with courtiers, 1700s | Nobles at court. | 19th-century history paintings. |
| 14 | Busbecq's text | The argument to test. | It was written to shame Europeans. |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the final
report.

1. **Title:** "Changing Social Hierarchies," the CED's title without its date range, as 4.6 did; the
   reading's title is "Who Belongs, Who Rises," on the reading, both lesson files, the deck and Canvas.
2. **Skill Builder skill:** moves to the CED's suggested skill, 3.D Claims and Evidence in Sources,
   modeled on Busbecq's claim about Ottoman merit and practiced on the second half of his claim, that
   in Europe "birth is the standard for everything," against the Russian and French evidence. The
   Primary Source does the same move on Montagu.
3. **Learning targets:** three, one per Key Concept, rewritten for a ninth grader. Checkpoint 1 assesses
   target 1; Checkpoint 2 assesses targets 2 and 3, the new and the old elites, as one
   continuity-and-change answer about the top of society. Checkpoint 2 declares Continuity and Change,
   the CED's reasoning process, which is what it asks.
4. **Primary Source:** Lady Mary Wortley Montagu's letter of 1 April 1717 from Adrianople, in the
   public-domain text, with three questions: her argument, one piece of evidence that supports it and
   one that modifies or refutes it (3.D), and how her class shaped what she could see. It replaces the
   unsourced "legal manual."
5. **Map module:** rebuilt as one map of the cases, c. 1450 to 1750: pushed out and welcomed, new
   elites, old elites squeezed. The Atlantic labor map leaves (it is 4.4's).
6. **Evidence Lab:** the plantation, the VOC and the two ruler portraits leave; cards are chosen across
   all three Key Concepts and verified as real objects or texts of the period.
7. **BeSurreal:** a Jewish family leaving Spain in the summer of 1492 and arriving in Salonica,
   deciding what to write to a cousin who converted and stayed. It replaces the creole-merchant scene,
   because BeInTheRoom already puts students in Mexico City's casta world.
8. **BeInTheRoom:** The Identity Dossier stays (on the topic and inside the period); it is rewritten
   for a ninth grader and its alignment block is corrected.
9. **Deep reading:** rebuilt around this story. The old chapter's after-1750 material (1776, 1780, the
   1795 fee schedule) leaves; its careful lines on the millet, the Qing separations and how casta was
   really assigned are kept and simplified; the missing existing-elite material is added.
10. **Required modules** (Phase 8): 02 First & 10, 05 Skill Builder, 07 Evidence Lab, 10 Checkpoint 2,
    the same set as 4.4 to 4.6.
