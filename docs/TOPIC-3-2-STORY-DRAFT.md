# Topic 3.2 Story Draft: Empires: Administration

**Status: Draft for Jeff's review, 2026-10-06. Not yet approved.** Nothing downstream of this
page has been built. The claim ledger for every date, number and causal claim below is
`docs/TOPIC-3-2-CLAIM-LEDGER.md`.

**Taught:** Green Tuesday 2026-10-20, Silver Wednesday 2026-10-21. These dates are recorded
only in the `homeworkDue` comment on 3.1's days in `assets/data/announcements-schedule.js`
(confirmed by Jeff 2026-10-04). 3.2 has no schedule entries yet.

Built from the unit story map (`docs/UNIT-3-STORY-MAP.md`, approved 2026-09-23), so the unit
spine, the topic spine, the "owns / bridge only" split and the hand-offs are not re-opened
here. Branched from `main` at `af95f25`, which already carries all of 3.1.

## 1. What the CED requires

Source: `scripts/lib/ced-unit3-contract.js` and `collegeBoardKeyConcepts` in
`assets/data/lesson-3-2-renderer-config.js`.

- **Learning objective (Unit 3, B):** Explain how rulers used a variety of methods to
  legitimize and consolidate their power in land-based empires from 1450 to 1750.
- **KC-4.3.I.C (people):** Recruitment and use of bureaucratic elites, as well as the
  development of military professionals, became more common among rulers who wanted to
  maintain centralized control over their populations and resources. Illustrative examples:
  Ottoman devshirme, salaried samurai.
- **KC-4.3.I.A (symbols):** Rulers continued to use religious ideas, art, and monumental
  architecture to legitimize their rule. Illustrative examples: European notions of divine
  right, Songhai promotion of Islam, Qing imperial portraits, Incan sun temple of Cuzco,
  Mughal mausolea and mosques, European palaces such as Versailles. (The lesson data also
  lists the Mexica practice of human sacrifice; the CED contract in the repo does not. See
  question 3.)
- **KC-4.3.I.D (money):** Rulers used tribute collection, tax farming, and innovative
  tax-collection systems to generate revenue in order to forward state power and expansion.
  Illustrative examples: Mughal zamindar tax collection, Ottoman tax farming, Mexica tribute
  lists, Ming practice of collecting taxes in hard currency.
- **Reasoning move:** causation. "How rulers used methods to legitimize and consolidate"
  asks for the mechanism: what the tool did, and why it made people serve, obey or pay.
- **Two words in the CED that are easy to drop.** KC-4.3.I.A says rulers *continued* to use
  these tools, so legitimacy through religion and buildings is not new in 1450; students met
  it in Unit 1. KC-4.3.I.D says revenue *forwarded state power and expansion*, which is the
  link back to 3.1: the cannons had to be paid for.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story.

**Consistent with the CED:**
- The three learning targets and three success criteria map exactly to KC-4.3.I.C, I.A
  and I.D, and the criteria name the CED's own examples.
- Checkpoint 2 now asks for one legitimacy example and one revenue example, which closed the
  gap the 2026 deep audit found (the legitimacy branch was not assessed).
- The coherence contract (`scripts/lib/unit3-coherence-contract.js`) already requires
  devshirme, mansabdar, religious ideas or monumental architecture, divine right or
  Versailles, tax farming or zamindar, and revenue on the reading and the other surfaces.
  The rewrite keeps every one of them.

**Out of line, each with where it gets fixed:**
1. **Salaried samurai are never taught.** Success criterion 1 names them, so a student is
   told to use an example no surface explains. The lecture, the First & 10 and the eBook
   chapter never mention samurai. Fix in this build.
2. **The legitimacy branch is still crowded out.** The lecture gives a full card to
   "Accommodation" (Rajput nobles and the Ottoman millet system, neither in the CED for this
   topic), and legitimacy shares half of one card with revenue. The First & 10 gives
   legitimacy one paragraph out of thirteen. Songhai, the Inca sun temple, the Qing
   portraits and the Mexica tribute lists appear only as one-line name drops. Fix: one
   lecture card and one reading section per branch.
3. **Checkpoint 1 displays Learning Target 1 (people) but its prompt also accepts
   "taxation systems",** which is Learning Target 3. A student could answer it entirely
   about taxes and meet the prompt while missing the target it says it checks. Fix the
   prompt to match the target it displays.
4. **The Skill Builder teaches comparison** (devshirme against mansabdar), while the
   objective's move is causation and 3.4 is the unit's comparison topic. A teaching call;
   see question 6.
5. **The First & 10 has 16 vocabulary chips**, several never used in its text (Vizier,
   Bureaucracy), and its longest section is about the timar, which the CED does not name.
   It also says timars "kept revenue flowing to the imperial center"; a timar holder kept
   that revenue to pay for himself and his horsemen, which is the point of the system. The
   Qing Banner sentence says banners were "defined by ethnicity and region"; there were
   Manchu, Mongol and Han banners, not regional ones. The reading is rewritten from this
   story in any case (Phase 7), so these are listed, not patched.
6. **Leftovers:** a `builderBody` about building an AI Coach prompt in the reading's entry
   (not rendered, but stale), a First & 10 note on the lesson page that still says "build
   your AI Coach prompt", and a `docTitle` that says "Module 01" while the badge says
   Module 02.
7. **BeSurreal is set at "Akbar's Court, Delhi, c. 1580".** Akbar's court in 1580 was at
   Fatehpur Sikri, not Delhi. It also tells a Rajput chief his jagir in Rajasthan will not
   pass to his son; Rajput chiefs' home lands were usually held as hereditary watan jagirs,
   which is the exception to the rule the card teaches. Fix or replace in this build (see
   question 7).
8. **The BeInTheRoom page's alignment line misquotes the objective** ("how rulers employed
   economic strategies to consolidate and maintain power", which is not the CED wording).
   Fix in the generator in this build.
9. **The Primary Source is labeled "adapted from the Ain-i-Akbari"** but reads as a modern
   composed summary, the same problem 3.1's audit found with its Tursun Beg passage. See
   question 8.
10. **The eBook chapter runs people, money, legitimacy, local elites, decline**, so its order
    is not the spine's, and it never mentions samurai, Songhai, Cuzco or the Mexica. See
    question 9.

## 3. The ninth-grade story

You already know how Mehmed took Constantinople: big guns, seven weeks, the walls came down.
Now picture the morning after. He owns a battered city, an army, and an empire that stretches across the Balkans and much of Anatolia. Millions of people live in it who speak other languages, pray in
other ways, and never asked to be ruled by him. Cannons do not collect taxes. Cannons do not
make anyone believe he deserves to be in charge. So every ruler in this unit had to answer
three questions, and the answers are the whole topic.

**Question one: who will serve me?** A ruler cannot do everything himself. He needs
governors, generals, judges and soldiers. The danger is that the most powerful of them have
families, lands and followers of their own, and a man with his own power can say no. Mehmed
knew this. The day after Constantinople fell, he had his grand vizier, Çandarlı Halil,
arrested, and soon had him executed. Halil came from a Turkish family that had held that top job for much of the past hundred years. Mehmed wanted servants who owed everything to him.

The Ottomans had a system for making exactly that kind of servant. It was called the
**devshirme**. Ottoman officials took Christian boys, mostly from the Balkans, away from their
families, converted them to Islam and trained them. The strongest became **Janissaries**, the
sultan's own professional soldiers. The smartest went to palace schools and could rise to
govern provinces or even become grand vizier. It was forced and it was cruel to the families.
It also produced men with no family power inside the empire at all. Their whole lives
depended on the sultan.

The Mughals in India solved the same problem a different way. Akbar gave his officials a
numbered rank, a **mansab**, which set their pay and how many horsemen they had to bring.
Many were paid with a **jagir**, the right to collect the land tax from one area. But the
jagir moved: officials were shifted around every few years, and a son did not inherit his
father's rank. So a **mansabdar** could get rich serving the emperor, but could never turn one
place into his own little kingdom. Akbar even gave high ranks to Hindu Rajput kings, which
turned possible rivals into commanders of his army.

Japan used the same idea with warriors. Samurai had once lived on their own lands. Starting in the late 1500s, and under the Tokugawa shoguns who ruled from 1603, most were moved into their lords' castle towns and paid a yearly stipend, counted in rice. A **salaried samurai** was a professional soldier and
official who lived on a salary from his lord, not on land he controlled himself.

Three empires, one mechanism: pay people for service, keep them away from a power base of
their own, and they stay loyal because they have nowhere else to go.

**Question two: why should anyone obey me?** Most people would never see the ruler, and
fear alone is expensive. So rulers made their power look like it came from somewhere higher,
or simply too great to argue with. They used three kinds of tools, and every one of them was
something people could see or hear about.

*Religious ideas.* In Europe, kings like Louis XIV of France claimed **divine right**: God had
chosen the king, so disobeying the king meant disobeying God. In West Africa, Askia Muhammad
had seized the Songhai throne in 1493, so he needed a reason for people to accept him. He
made the pilgrimage to Mecca, came home with the title of caliph, a deputy leader for
Muslims, and backed Islamic scholars and judges at home. **Songhai's promotion of Islam** made
the ruler the protector of the faith. In the Andes, the Inca ruler was called the son of the
Sun, and the sun temple at the center of Cuzco, the **Coricancha**, put that claim in stone at
the heart of the capital.

*Art.* The Qing emperors were Manchus, outsiders ruling a mostly Han Chinese empire. Their
**imperial portraits** showed them in the robes and poses of a Chinese emperor. The Qianlong
Emperor was also painted as a Buddhist holy figure for his Tibetan and Mongol subjects. Same
ruler, different picture, depending on who needed convincing.

*Monumental architecture.* The Mughals built enormous **mausolea and mosques**, tombs such as
the Taj Mahal and great mosques in their capitals, that said this family was rich, pious and
permanent. Louis XIV moved his court to the palace of **Versailles** in 1682. It was a
building designed to make the king look like the center of everything, and it did a second
job: the great nobles of France spent their time at court, competing for the king's favor,
instead of building power back home.

**Question three: who pays?** Armies, salaries and palaces cost enormous amounts, including the guns from 3.1. So rulers built systems to get money out of millions of farmers.
The Ottomans used **tax farming**: the state sold the right to collect a tax to a bidder, who
paid the state and then collected from the people, keeping whatever extra he could get. The sultan got cash fast, and the farmers could get squeezed. The Mughals relied on
**zamindars**, local landholders who knew every field, to collect the land tax and keep a
share of it. The Mexica in central Mexico kept painted **tribute lists** showing what each
conquered province owed the capital: cloaks, cacao, feathers, warrior costumes. (The copies that survive were made around the time of the Spanish conquest, or just after it.) And in Ming
China, the government combined many taxes and labor duties into payments in **silver**, a
change called the Single Whip reform, which made taxes simpler to collect and tied China to
the silver of the wider world. That last connection is a Unit 4 story.

**The twist.** The three answers were not separate. Money paid the people who served, the
people who served collected the money, and the symbols made both serving and paying feel
right. The cleverest tools did two jobs at once: a jagir paid an official and tied him to the
emperor; Versailles was a symbol and a leash on the nobles.

Rulers used religion to justify their power. But what happened to religion itself in these
same centuries? That question is Topic 3.3.

## 4. The spine

**Conquest wins land; people, legitimacy and money hold it.** Three parts, in this order:
**people who serve, symbols that justify, systems that pay.** (Approved in the unit story map.)

Shorter for the wall: **Guns win land. People, symbols and money hold it.**

The question every example answers: **how did this help a ruler keep control of people who
had no reason to obey?**

The unit spine, "Gunpowder won the land. Holding it was the hard part," is this topic's
whole subject.

## 5. Must-have evidence and what each one proves

Weight is equal across the three branches, measured in class time, not in number of
examples. Legitimacy has the most named examples, so they are grouped into three moves
(belief, image, building) rather than given a slide each.

| Evidence | CED anchor | What it proves (the "so what") |
|---|---|---|
| Mehmed and Çandarlı Halil, 1453 (hook) | KC-4.3.I.C | A ruler's most dangerous servants are the ones with power of their own. Sets up why rulers built new kinds of servants. |
| Ottoman devshirme and the Janissaries | KC-4.3.I.C | Loyalty by design: men with no family power inside the empire depend wholly on the sultan. |
| Mughal mansabdars and jagirs (Rajputs inside it) | KC-4.3.I.C | Loyalty by rank and rotation: paid well, moved often, nothing inherited. |
| Salaried samurai | KC-4.3.I.C | The same idea in Japan: warriors taken off their land and paid a stipend. |
| Divine right (Louis XIV) | KC-4.3.I.A | Religious idea: obeying the king is obeying God. |
| Songhai promotion of Islam (Askia Muhammad) | KC-4.3.I.A | A ruler who took the throne by force wins acceptance as protector of the faith. |
| Inca sun temple at Cuzco (Coricancha) | KC-4.3.I.A | Religion and architecture together: the ruler as son of the Sun, at the center of the capital. |
| Qing imperial portraits | KC-4.3.I.A | Art: an outsider dynasty shows itself as the rightful emperor, a different image for each audience. |
| Mughal mausolea and mosques | KC-4.3.I.A | Architecture: a dynasty that looks rich, pious and permanent. |
| Versailles | KC-4.3.I.A (and I.C) | Architecture that also controls the nobles. Carries the twist. |
| Ottoman tax farming | KC-4.3.I.D | Cash now for the state, squeeze later for the farmers. |
| Mughal zamindar tax collection | KC-4.3.I.D | The state needs local men who know the fields, and pays them a share. |
| Mexica tribute lists | KC-4.3.I.D | Conquered provinces pay the center, recorded in a painted ledger. |
| Ming taxes in silver | KC-4.3.I.D | An "innovative tax-collection system": one payment in silver. Its link to world silver is a bridge to Unit 4 only. |

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from 3.1: (a) Why could only big states make full use
   of cannons? (b) Name the four land empires the College Board names, and where each was.
   (c) Morocco won at Tondibi. What did it find hard afterward? **Bridge:** "Mehmed took
   Constantinople in seven weeks. Now he has to run it."
3. **Topic question on screen:** Once an empire had conquered the land, how did its ruler
   get millions of people to serve, obey and pay?
4. **The three questions.** Who will serve me? Why should anyone obey me? Who pays? Name
   them once, as the map for the whole lesson.
5. **People, the hook:** the morning after 1453. Mehmed arrests Çandarlı Halil. Why a
   servant with his own family power is a danger.
6. **People, the mechanism:** devshirme and Janissaries; mansabdars and jagirs (Rajputs as
   one line); salaried samurai. One mechanism, three empires: pay them, keep them from a
   power base, and they have nowhere else to go.
7. **Symbols, belief:** divine right; Askia Muhammad and Songhai Islam; the Inca as son of
   the Sun.
8. **Symbols, image and stone:** Qing portraits (one ruler, two pictures); Mughal tombs and
   mosques; the Coricancha; Versailles.
9. **Money:** tax farming; zamindars; Mexica tribute lists; Ming silver (Single Whip). One
   line pointing at Unit 4 for where the silver came from.
10. **The twist:** the three parts hold each other up, and the best tools did two jobs
    (jagir, Versailles).
11. **Retelling slide** (proposed below).
12. **Reasoning:** model one causal sentence, then students write 2 to 3 sentences about
    ONE tool: *[Ruler] used [tool], which [what it did], so [who] [served / obeyed / paid]
    because ___.*
13. **AP synthesis and hand-off:** answer the learning objective in two sentences, then
    "Rulers used religion to justify their power. But what happened to religion itself in
    these same centuries?"

## 7. Proposed retelling slide

**Trunk and branches**, the Unit 3 template built for exactly this shape: one claim holding
up three branches, each with its example chips.

- **Trunk:** Conquest wins land. People, symbols and money hold it.
- **Branch 1, People who serve** (Who will serve me?): devshirme, mansabdars, salaried
  samurai.
- **Branch 2, Symbols that justify** (Why should anyone obey me?): divine right, Songhai
  Islam, Inca sun temple, Qing portraits, Mughal tombs and mosques, Versailles.
- **Branch 3, Systems that pay** (Who pays?): tax farming, zamindars, Mexica tribute, Ming
  silver.

Why this and not a chain: 3.2's argument is three parts holding up one claim, not a sequence
of causes. A student who can redraw the tree from memory, with the question on each branch,
can answer any 3.2 prompt by picking a branch and an example.

## 8. Owns / bridge-only (from the unit story map)

- **3.2 owns:** all three branches with equal weight. People: devshirme, salaried samurai,
  mansabdars. Legitimacy: divine right, Versailles, Qing imperial portraits, Mughal mausolea
  and mosques, the Inca sun temple at Cuzco, Songhai promotion of Islam. Money: Ottoman tax
  farming, Mughal zamindar collection, Mexica tribute lists, Ming taxes in silver.
- **Bridge only:** religious *change* (3.3). Here religion appears only as a ruler's tool.
  Also bridge only, by this draft's choice: Ming silver's link to Japan and Spanish America
  (Unit 4), and the cracks in these systems after 1700 (eBook depth, not class content).
- **Out of the class story** (recommended, question 5): the Ottoman millet system and the
  Qing examination and Banner systems. Real and accurate, but not CED examples for this
  topic, and they are what crowded legitimacy out before. They can stay in the eBook.
- **Hands to 3.3:** "Rulers used religion to justify their power. But what happened to
  religion itself in these same centuries?"

## 9. Visuals each beat needs (what kind of object, not yet a file)

Pictures are chosen after approval. Jeff's shopping list is `docs/UNIT-3-PICTURE-LIST.md`;
this story uses every row on it and adds one.

- Beat 5: no picture needed; a simple card naming Mehmed and Halil. (An Ottoman portrait of
  Mehmed exists, but the slide's point is a decision, not a face.)
- Beat 6: the Süleymanname devshirme registration miniature (1558, on the list). Mansabdar
  ranks and samurai stipends have no good single picture: a rank and pay ladder diagram, as
  the list recommends.
- Beat 7: Rigaud's Louis XIV (1701, on the list); the Tomb of Askia, Gao (modern photograph
  of the 1495 building, on the list); Coricancha walls under Santo Domingo (modern
  photograph, on the list).
- Beat 8: Qianlong in court robes (1736, on the list) **and, added by this story,** *The
  Qianlong Emperor as Manjushri, the Bodhisattva of Wisdom*, Freer Gallery of Art,
  Smithsonian, F2000.4, mid-18th century, imperial workshop with the face by Giuseppe
  Castiglione. The pair is the slide: one emperor, two images, two audiences. Bichitr's
  *Jahangir Preferring a Sufi Shaikh to Kings* (on the list) for the Mughal claim; a modern
  photograph of the Taj Mahal or Humayun's Tomb for the buildings.
- Beat 9: Codex Mendoza tribute page (c. 1541, a post-conquest copy, on the list); a Ming
  silver ingot dated by a museum (on the list). Tax farming and zamindars: a chain diagram,
  peasant to collector to treasury.
- Beat 11: the trunk-and-branches template, no picture.

Any AI reconstruction carries `Historical Reconstruction - AI Generated` and never goes into
the Evidence Lab.

## 10. Questions for Jeff (one list)

**From 3.1's open decisions, which cross into 3.2**

1. **The devshirme card in 3.1.** I checked the live 3.1 page: its lecture now shows three
   cards (gunpowder, the four empires, Constantinople) and no devshirme card. The only
   devshirme text left in 3.1 is two entries in an Evidence Lab list the page never draws.
   So nothing devshirme reaches 3.1 students, and 3.2 teaches the system in full.
   **Recommend:** 3.2 owns devshirme as this draft does; I list the two dead 3.1 entries as
   an adjacent finding rather than edit 3.1. (3.1's other half of that decision, that it has
   no lecture card for the two rivalries, stays 3.1's.)
2. **The Moroccan motive.** 3.1's eBook chapter says Morocco invaded Songhai for the gold
   and salt trade. Sources support that, and also say al-Mansur wanted Songhai to pay him for
   the Taghaza salt mines and may have been pressing his claim to be caliph, a religious
   and political claim. This crosses into 3.2 because 3.2 teaches Songhai's rulers using
   Islam for legitimacy. **Recommend:** 3.2 says nothing about Morocco (its Songhai story is
   Askia Muhammad, a century earlier); 3.1's chapter keeps the economic motive and adds one
   sentence that Morocco's sultan also claimed authority as caliph, marked "historians also
   point to", so the CED's political-and-religious framing is visible. That edit is 3.1's,
   so I would make it only on your word.

**Scope**

3. **Mexica human sacrifice.** The lesson lists it among the CED's examples for
   KC-4.3.I.A; the approved story map and the repo's CED contract leave it out. **Recommend:**
   leave it out of the slides, reading and checkpoints, as the story map does. The Key
   Concept band shows the CED's sentence, not its examples, so nothing displays it.
4. **The opening hook** (Mehmed arresting and executing his grand vizier). It is the cleanest
   way into "who will serve me", and it continues 3.1's last line. **Recommend:** keep, worded
   as in the story. One nuance is in the ledger: historians agree on the arrest and
   execution, but the full switch to devshirme-trained grand viziers took until the 1500s,
   so the story says only that Mehmed wanted servants who owed everything to him.
5. **Accommodation, millet, and the Qing exam and Banners.** **Recommend:** fold the Rajputs
   into the mansabdar paragraph (one line), and take the millet system and the Qing
   exam and Banner systems out of the lecture and the First & 10. They stay in the eBook as
   depth. This is what gives legitimacy its equal share.

**Teaching calls**

6. **Skill Builder skill.** It now teaches comparison (devshirme against mansabdar).
   **Recommend:** make it causation, using the sentence frame in beat 12, since the objective
   asks "how" and 3.4 is the comparison topic.
7. **BeSurreal.** It is a Rajput mansabdar (people), and the BeInTheRoom is Akbar's revenue
   commission (people and money), so no activity puts a student inside the legitimacy
   branch. **Recommend:** replace the BeSurreal with a legitimacy prompt, for example a
   provincial noble arriving at Versailles in the 1680s, or a scholar in Timbuktu under
   Askia Muhammad, and fix the BeInTheRoom's misquoted objective. If you prefer to keep the
   mansabdar, I will fix its city (Fatehpur Sikri, not Delhi) and the inheritance line.
8. **Primary Source.** The "adapted from the Ain-i-Akbari" passage reads as a modern
   summary. **Recommend:** replace it with a short real passage from H. Blochmann's 1873
   English translation of the Ain-i-Akbari (public domain), with a plain-language gloss
   under it, and say on the page that it is a translation. Or, if you prefer a legitimacy
   source for balance, a short passage on divine right from Bossuet or James I.
9. **The eBook chapter.** **Recommend:** reorder its sections to the spine (people, symbols,
   money), add short passages for the samurai, Songhai, Cuzco and the Mexica tribute lists,
   and keep the local-elites and "where it cracked" sections as depth at the end. This is the
   largest single edit in the build.
10. **Required modules for October 20 and 21.** 3.1 required 02, 06, 07 and 10.
    **Recommend** the same for 3.2: the First & 10 read in class, both checkpoints and the
    Evidence Lab, with the Skill Builder and BeInTheRoom optional. I will report the minutes
    against the 80-minute budget once the deck is built.
11. **Reading title.** The First & 10 is "Running an Empire". **Recommend:** "Holding What
    You Won", used on the reading, both lesson files and the Canvas assignment. Keep the old
    title if you prefer it.
12. **Pictures.** The story adds one row to the shopping list: the Qianlong-as-Manjushri
    thangka (Freer F2000.4), to pair with the court-robes portrait. I have added it to
    `docs/UNIT-3-PICTURE-LIST.md`. Until your uploads arrive I will build with pictures
    already verified in the repo or leave slots empty.
