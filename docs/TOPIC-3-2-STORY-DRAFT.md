# Topic 3.2 Story Draft: Empires: Administration

**Status: Draft for Jeff's review, 2026-10-05. Not approved.** Nothing downstream has been
built. The claim ledger for every date, number and causal claim below is
`docs/TOPIC-3-2-CLAIM-LEDGER.md`.

**Taught:** Green Tuesday 2026-10-20, Silver Wednesday 2026-10-21 (Jeff, 2026-10-04,
recorded so far only as the `homeworkDue` comment on 3.1's days in
`assets/data/announcements-schedule.js`).

Built from the unit-level story map (`docs/UNIT-3-STORY-MAP.md`, approved 2026-09-23), so the
unit spine, the topic spine, the "owns / bridge only" split and the hand-offs are not
re-opened here. Branched from `claude/build-topic-accuracy-loop`, because the improved
build-topic skill and `docs/UNIT-3-PICTURE-LIST.md` have not reached `main` yet.

## 1. What the CED requires

Source: `scripts/lib/ced-unit3-contract.js`, `collegeBoardKeyConcepts` in
`assets/data/lesson-3-2-empires-administration.js`, and the Unit 3 Socrates spine.

- **Learning objective (Unit 3, B):** Explain how rulers used a variety of methods to
  legitimize and consolidate their power in land-based empires from 1450 to 1750.
- **KC-4.3.I.C (people):** Recruitment and use of bureaucratic elites, as well as the
  development of military professionals, became more common among rulers who wanted to
  maintain centralized control over their populations and resources. Illustrative examples:
  Ottoman devshirme, salaried samurai.
- **KC-4.3.I.A (legitimacy):** Rulers continued to use religious ideas, art, and monumental
  architecture to legitimize their rule. Illustrative examples: Mexica practice of human
  sacrifice, European notions of divine right, Songhai promotion of Islam, Qing imperial
  portraits, Incan sun temple of Cuzco, Mughal mausolea and mosques, European palaces such as
  Versailles.
- **KC-4.3.I.D (money):** Rulers used tribute collection, tax farming, and innovative
  tax-collection systems to generate revenue in order to forward state power and expansion.
  Illustrative examples: Mughal zamindar tax collection, Ottoman tax farming, Mexica tribute
  lists, Ming practice of collecting taxes in hard currency.
- **Reasoning move:** causation. "Explain how rulers used methods to legitimize and
  consolidate" asks for the mechanism: what each method did that kept people obeying.
- **One detail that is easy to drop.** KC-4.3.I.A says rulers *continued* to use religion,
  art and architecture. This is not new in 1450; students have seen it since Foundations
  (pyramids, the Mandate of Heaven). The new things in this topic are the scale and the
  systems, which is why the people and money branches matter as much as the symbols.
- **One mismatch between two copies of the CED in the repo, not a conflict with the CED.**
  The lesson's `collegeBoardKeyConcepts` lists the Mexica practice of human sacrifice among
  KC-4.3.I.A's illustrative examples; `ced-unit3-contract.js` and the story map leave it out.
  Illustrative examples are not required, so nothing is broken. Whether to teach it is
  question 4 below.

## 2. Constraint check (what students already see, and what is out of line)

Read for contradictions only, not as the source of the story.

**Consistent with the CED:**
- The three learning targets and success criteria map exactly to KC-4.3.I.C, I.A and I.D,
  and already come in the spine's order: people, symbols, money.
- Checkpoint 2 asks for one legitimacy example and one revenue example and "how each
  method strengthened the ruler", which is causation and covers targets 2 and 3.
- The BeInTheRoom (Akbar's rank roll at Fatehpur Sikri) is about consolidation through
  ranked service and revenue, which is on the spine.

**Out of line, each with where it gets fixed (all inside this build, Phase 7):**

1. **Legitimacy is crowded out, the problem the audit named.** The four lecture cards are
   "The Problem", "Devshirme, Mansabdar, and the Examination System", "Accommodation" and a
   fourth card that squeezes legitimacy *and* revenue into three bullets. The First & 10 is
   the same shape: three sections on administration, then one section for legitimacy and
   revenue together. Fix: one lecture card per branch, one reading section per beat.
2. **Salaried samurai, a named CED example, appears nowhere** a student can see: not in the
   reading, the lecture, the checkpoints or the deep reading. The same is true of the Inca sun
   temple, Songhai's promotion of Islam and the Mexica tribute lists outside a single list
   sentence.
3. **The "Accommodation" lecture card and the Evidence Lab item bank teach the Ottoman millet
   system as a tidy 15th to 18th century institution.** The course's own 3.2 eBook chapter
   says the opposite: the tidy millet system "is largely a nineteenth-century formalization
   projected backward." The millet is also not in 3.2's CED. Recommendation: drop the millet
   from student surfaces in 3.2; keep the eBook's careful paragraph.
4. **The First & 10 says the Mughals governed "hundreds of millions of people."** Estimates
   for c. 1600 are on the order of 100 to 150 million (see ledger). Also "the Qing ruled
   China, the largest economy on earth" (a superlative; ledger), 16 vocabulary chips, a stale
   AI Coach `builderBody`, a `docTitle` saying "Module 01" over a "Module 02" badge, and a
   `lessonFile` pointing at the 3.1 lesson. The reading is rewritten anyway.
5. **The BeSurreal puts Akbar's court in Delhi in 1580.** It was at Fatehpur Sikri. It also
   says a rank of 1,000 meant exactly 1,000 cavalry, and that the Rajput keeps his Hindu
   practice "in private", neither of which the scenario needs (ledger).
6. **The Primary Source is labeled "adapted from the Ain-i-Akbari" but reads as a composed
   retelling**, the same problem 3.1's Tursun Beg passage had. Sentences such as "In this way
   His Majesty ensures ... that no commander may accumulate power sufficient to challenge
   imperial authority" state the historian's analysis in Abu'l-Fazl's voice. Question 7.
7. **Evidence Lab captions do not match their pictures.** Commons describes "Court of Akbar,
   Akbarnama" as *The Young Emperor Akbar Arrests the Insolent Shah Abu'l-Maali* (Basawan,
   c. 1585 to 1595), an arrest scene, not a court of assembled officials. "Shah Abbas I" has
   no known painter, date or holder (Commons copied it from a website). And the money branch
   has no evidence card at all.
8. **The declared skill is Comparison; the objective and the story map say causation.** The
   Skill Builder compares devshirme with mansabdar, which is one branch and the 3.4 move.
   Checkpoint 2 inherits "Comparison" as its skill line in the Socrates paste while asking a
   causation question. Question 5.
9. **The BeInTheRoom's stated objective is "how rulers employed economic strategies to
   consolidate and maintain power"**, which is not the CED objective. A one-line fix in
   `scripts/build-unit3-rooms.js`.
10. **The First & 10 lesson note still says "build your AI Coach prompt."** The same stale
    line a 3.1 branch fixed for 3.2 on 2026-10-02 and never shipped.

No conflict with the CED itself was found, so the work does not stop.

## 3. The ninth-grade story

At the end of Topic 3.1, Mehmed II had just taken Constantinople. Seven weeks of cannon fire
won him the city. Now he has to run it, and the empire around it.

Think about what that means. Millions of people who speak different languages and pray in
different ways. Farmers who have never seen the sultan and never will. Local lords with their
own soldiers who were doing fine before he showed up. Messages that travel only as fast as a
horse. His army can win any battle, but it cannot stand in every village every day.

So every ruler in this unit had the same three problems, and they come in a chain.

**First, people.** A ruler needs thousands of officials and soldiers to do the work. But a
powerful noble with his own land and his own family is dangerous: he can keep the taxes, raise
his own army, and one day decide he would make a better king. So rulers built servants who had
nowhere else to go. The Ottomans took boys from Christian families in the Balkans in a levy
called the **devshirme**. The boys were converted to Islam and trained. The ablest ran the
government, and some rose to grand vizier, the highest office under the sultan. The rest became
**Janissaries**, the sultan's elite soldiers. They had no family power inside the empire; every
bit of their status came from the sultan. The Mughal emperor Akbar did it a different way. He
gave every noble, Muslim and Hindu Rajput alike, a numbered rank, a **mansab**, that set his
pay and how many horsemen he owed. He paid them with the right to collect taxes from a piece of
land, but moved them around and did not let their sons inherit it. In Japan the Tokugawa
shoguns pulled samurai off the land and paid them salaries, usually in rice. In all three, the
ruler turned people who might become rivals into people whose careers depended on him.

**Second, a reason to obey.** Soldiers and officials can force people for a while, but no ruler
can afford to force everyone all the time. The cheaper way is to make obeying feel right. In
Europe, kings claimed **divine right**: God chose them, so disobeying the king was disobeying
God. Louis XIV of France built the enormous palace of **Versailles** and had the great nobles
live at court, where he could watch them. The Mughals built huge tombs and mosques, like the
Taj Mahal. The Qing emperors, who were Manchus ruling Chinese people, had themselves painted in
the robes of a Chinese emperor. In the Andes, the Inca ruler claimed to descend from the Sun,
and the Sun's temple at Cuzco was the center of the empire. In West Africa, Songhai's ruler
Askia Muhammad made the pilgrimage to Mecca and built up Islam at home, so his rule looked like
the rule of a proper Muslim king. Religion, art and buildings all said the same thing: this
ruler belongs here.

**Third, money.** Officials and soldiers need pay. Palaces and mosques cost a fortune. So
rulers had to collect from millions of farmers, and that is harder than it sounds. The Mexica
in central Mexico made conquered towns send set amounts of goods, like cotton cloaks, cacao and
feathers, and kept painted lists of it. The Ottomans used **tax farming**: they sold the right
to collect an area's taxes to someone who paid the treasury up front and kept whatever extra he
could squeeze out. The Mughals relied on **zamindars**, local landholders who collected the land
tax and kept a share. And Ming China made people pay their taxes in silver, which made the money
easier to count and move.

Now see the chain. Money pays the people. The people collect the money and keep order. And the
symbols make paying and serving feel like the right thing to do. Take away any one and the other
two get harder: without money there are no salaries; without loyal servants the money leaks
away; without legitimacy every tax needs a soldier behind it.

And each tool had a catch. Middlemen kept part of what they collected. Servants wanted their
sons to inherit their jobs, and over time the Janissaries became powerful enough to overthrow a
sultan. Holding an empire never stopped being hard.

One more thing to notice: rulers kept using religion to justify their power. But in these same
centuries religion itself was changing, sometimes in ways no ruler could control. That is
Topic 3.3.

## 4. The spine

**Conquest wins land; people, legitimacy and money hold it.**

Three parts, in this order: **people who serve, symbols that justify, systems that pay.**

Shorter for the wall: **Win it with guns. Hold it with people, belief and money.**

Every example answers the story map's one question: *how did this help a ruler keep control of
people who had no reason to obey?*

## 5. Must-have evidence and what each one proves

Equal weight across the three branches. Each branch gets one lecture card, one reading section
and its own slides; no branch borrows another's.

| Branch | Evidence | CED anchor | What it proves (the "so what") |
|---|---|---|---|
| People | Ottoman devshirme and the Janissaries | KC-4.3.I.C (named) | A ruler can build an elite with no outside loyalties; status that comes only from the sultan makes officials depend on him. |
| People | Mughal mansabdars, paid by jagirs, rotated, not inherited; Rajputs given rank | KC-4.3.I.C | Instead of importing outsiders, rank the nobles you already have, so their pay and status come from the emperor. |
| People | Salaried samurai (Tokugawa Japan) | KC-4.3.I.C (named) | A warrior paid a stipend and living in the castle town has no land base to rebel from. |
| Symbols | European divine right; Versailles | KC-4.3.I.A (both named) | An idea (God chose the king) and a building (a palace that kept nobles under watch) both made obedience feel right. |
| Symbols | Mughal mausolea and mosques (the Taj Mahal) | KC-4.3.I.A (named) | Monumental building shows wealth, piety and permanence to people who will never meet the ruler. |
| Symbols | Qing imperial portraits | KC-4.3.I.A (named) | A Manchu ruler presented as a Chinese Son of Heaven, so outsiders' rule looks traditional. |
| Symbols | Inca sun temple at Cuzco (Coricancha); Songhai promotion of Islam | KC-4.3.I.A (both named) | Religion as legitimacy outside Eurasia: the ruler as the Sun's descendant; the ruler as a pilgrim and patron of Islam. |
| Money | Ottoman tax farming | KC-4.3.I.D (named) | Fast cash with no tax bureaucracy, at the price of squeezed farmers and powerful middlemen. |
| Money | Mughal zamindars | KC-4.3.I.D (named) | Local landholders who know the fields collect the tax and keep a share. |
| Money | Mexica tribute lists | KC-4.3.I.D (named) | Conquered places pay in goods on a written schedule; tribute is how conquest pays for itself. |
| Money | Ming taxes in silver | KC-4.3.I.D (named) | Taxes in hard currency are easier to count, move and spend. Bridge only to Unit 4's silver trade. |
| All three | The chain: money pays people, people collect money, symbols make both feel right; each tool's catch | Learning objective | The methods work together, and each one has a cost, which is why holding stayed hard. |

Named examples are evidence inside a branch. None earns its own slide unless the story needs
the separation.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from 3.1: (a) Why could only big states afford
   cannons? (b) Name two of the four land empires and where they were. (c) Morocco won at
   Tondibi. What could it not do afterward? **Bridge from 3.1:** "Mehmed took Constantinople
   in seven weeks. Now he has to run it."
3. **Topic question on screen:** Once an empire has won its land, how does a ruler make millions
   of people keep obeying?
4. **The problem.** Many languages and faiths, farmers who never see the ruler, local lords with
   their own soldiers, messages at the speed of a horse. The army cannot be everywhere. Name the
   three needs: people, a reason to obey, money.
5. **People who serve: the danger.** A noble with his own land and family is a possible rival.
6. **People who serve: three answers.** Devshirme and Janissaries; mansabdars (with Rajputs);
   salaried samurai. Each makes a career depend on the ruler.
7. **Symbols that justify: why force is not enough.** No ruler can afford to force everyone
   every day.
8. **Symbols that justify: ideas and buildings.** Divine right and Versailles; Mughal tombs and
   mosques; Qing portraits; the Inca sun temple; Songhai and Islam. Each says "this ruler
   belongs here."
9. **Systems that pay: why it is hard.** Millions of farmers, no modern bank or tax office.
10. **Systems that pay: four ways.** Mexica tribute lists; Ottoman tax farming; Mughal
    zamindars; Ming silver. Each with its trade-off.
11. **The chain and the catch.** How the three hold each other up; what each one cost (middlemen
    keep a share; the Janissaries grow powerful).
12. **Retelling slide** (proposed below).
13. **Reasoning:** model one causal sentence with the story map's question (method, what it
    controlled, why people obeyed), then students write about one example from a branch of their
    choice.
14. **AP synthesis and hand-off:** answer the learning objective in two sentences. "Rulers used
    religion to justify their power. But what happened to religion itself in these same
    centuries?"

## 7. Proposed retelling slide

**Trunk and branches** (the Unit 3 template made for exactly this): one trunk claim holding up
three branches, each with its example chips.

- **Trunk:** Conquest wins land. People, legitimacy and money hold it.
- **People who serve:** devshirme, mansabdars, salaried samurai
- **Symbols that justify:** divine right and Versailles, Mughal tombs, Qing portraits, Inca sun
  temple, Songhai and Islam
- **Systems that pay:** tribute lists, tax farming, zamindars, silver taxes

Why this shape and not a chain or a matrix: the learning objective asks for "a variety of
methods" that together consolidate power. Three branches of one claim is that idea's shape, and
the story map already fixes the branches and their order. A comparison matrix would turn the
topic into 3.4's job.

## 8. Owns / bridge-only (from the unit story map)

- **3.2 owns** all three branches with equal weight: people (devshirme, salaried samurai,
  mansabdars), legitimacy (divine right, Versailles, Qing imperial portraits, Mughal mausolea and
  mosques, the Inca sun temple at Cuzco, Songhai promotion of Islam), money (Ottoman tax farming,
  Mughal zamindars, Mexica tribute lists, Ming taxes in silver).
- **Bridge only:** religious *change* (3.3). Religion appears here only as a ruler's tool. The
  silver trade and where China's silver came from (Unit 4). Gunpowder and conquest (3.1, the
  BeReady only). Comparison as the main move (3.4).
- **From 3.1:** "Mehmed took Constantinople in seven weeks. Now he has to run it."
- **Hands to 3.3:** "Rulers used religion to justify their power. But what happened to religion
  itself in these same centuries?"

## 9. Visuals each beat needs (kinds of objects, not yet files)

The shopping list with holders and dates is `docs/UNIT-3-PICTURE-LIST.md`, written before this
draft. This story uses every row on it and adds none.

- Beat 4: a map of one empire's scale (the existing Mughal c. 1700 map, a secondary map, or the
  3.1 four-empire map, reused).
- Beat 6: the devshirme registration miniature from the Süleymanname (1558); a mansab rank and
  pay ladder drawn as a slide diagram, since no single picture carries it.
- Beat 8: Rigaud's Louis XIV (1701); Castiglione's Qianlong in court robes (1736); Bichitr's
  Jahangir (c. 1615 to 1618); a modern photograph of the Taj Mahal, labeled as modern; a modern
  photograph of the Coricancha walls under Santo Domingo, labeled; the Tomb of Askia, labeled as a
  modern photograph of a 1495 building.
- Beat 10: the Codex Mendoza tribute pages, captioned as made after the conquest (c. 1541); a
  Ming silver ingot a museum dates to the Ming; a chain diagram from farmer to treasury for tax
  farming and zamindars.
- Beat 12: the trunk-and-branches template, no picture.

## 10. Questions for Jeff (everything the build needs, in one list)

1. **Story and spine.** Approve the story above, the spine, and trunk and branches as the
   retelling slide?
2. **3.1 open decision: the devshirme lecture card.** The 2026-10-04 audit said 3.1's lecture
   had a devshirme card and no rivalry card. On today's rendered 3.1 page there is no devshirme
   card (the three cards are Gunpowder, the Land Empires, Constantinople), but there is still no
   rivalry card. What touches 3.2: devshirme is introduced fresh here, with 3.1 having said only
   that Janissaries fired the guns. **Recommendation:** 3.2 owns the full devshirme explanation
   (as built here); adding a Kandahar and Tondibi card to 3.1 stays a 3.1 fix, not part of this
   build.
3. **3.1 open decision: the Moroccan motive.** 3.1's eBook chapter still says "the Moroccan
   motive was the gold and salt trade." It touches 3.2 because Songhai appears here as a
   legitimacy example. **Recommendation:** keep the economic motive for Unit 4 (KC-4.3.III.ii),
   change nothing in 3.1 inside this build, and in 3.2 use Songhai only for Askia Muhammad's
   promotion of Islam, with no reference to Morocco.
4. **The Mexica practice of human sacrifice** is a CED illustrative example for KC-4.3.I.A in the
   lesson's own CED list, but not in the story map. **Recommendation:** one plain sentence in the
   First & 10 and the deep reading (so a student who meets it on the exam recognizes it as
   religious legitimacy), no slide and no picture.
5. **The skill.** The objective and the story map say causation; the Skill Builder teaches
   comparison of devshirme and mansabdar. **Recommendation:** rewrite the Skill Builder as a
   causation chain (method, what it controlled, why people obeyed), relabel it Causation, so the
   Socrates paste for Checkpoint 2 names the skill the checkpoint actually asks for. The
   alternative is keeping the comparison Skill Builder and declaring `skill: 'Causation'` on
   Checkpoint 2 only.
6. **The "Accommodation" lecture card (Rajputs and the millet).** **Recommendation:** replace the
   four lecture cards with four on the spine: The Problem, People Who Serve (devshirme,
   mansabdars with the Rajputs inside it, samurai), Symbols That Justify, Systems That Pay. The
   millet leaves 3.2's student surfaces (see section 2, item 3).
7. **The Primary Source.** **Recommendation:** replace the composed "adapted" passage with a short
   real excerpt from H. Blochmann's 1873 English translation of the *Ain-i-Akbari* (public
   domain) on the mansab ranks, verified against the published text, with honest framing. If the
   exact text cannot be verified from here, relabel the current passage as a classroom retelling
   based on the *Ain-i-Akbari* and keep it.
8. **BeSurreal.** It is the people branch again, like the BeInTheRoom, so legitimacy has no
   immersive module. **Recommendation:** keep the Rajput mansabdar (it fits the spine and pairs
   with the BeInTheRoom), fix the three facts in section 2, item 5. The alternative is a Versailles
   noble, which carries legitimacy and people together; say if you prefer it.
9. **Evidence Lab.** **Recommendation:** one card per branch at least. Until your uploads arrive,
   keep the Qianlong portrait (a named CED example), recaption the Akbar arrest scene honestly or
   drop it, drop the unprovenanced Shah Abbas, and leave a money slot for the Codex Mendoza upload.
   Final picture choices wait for your files.
10. **Required modules.** **Recommendation:** the same four as 3.1, 02 First & 10, 06
    Checkpoint 1, 07 Evidence Lab, 10 Checkpoint 2, with the First & 10 read in class. Checkpoint
    1 assesses the people branch, Checkpoint 2 the symbols and money branches, so the three
    branches are each assessed. Minutes and the launch count come with the deck in Phase 8.
11. **Pictures.** The shopping list `docs/UNIT-3-PICTURE-LIST.md` stands as written; this story
    needs nothing it does not list. Upload to `assets/images/topics/3-2/` whenever ready.
