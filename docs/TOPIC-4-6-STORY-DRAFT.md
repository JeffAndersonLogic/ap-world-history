# Topic 4.6 Story Draft: Internal and External Challenges to State Power

**Status: Delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).**
Jeff started this build with "Build 4.6" on 2026-10-16. Topic 4.5 is on `main` (`641db4b`, with
the usage-cutting commit `6671a2f` on top) and 4.6 is the next topic in the unit. The Phase 9
reviewers check this story against the CED source file and the scholarship; the record of what
they found is in `docs/TOPIC-4-6-CLAIM-LEDGER.md`, under "Review findings".

**Resume here (2026-10-17):** Phases 1 to 8 built and pushed. Review pass 1 done: 18 findings (11 page truth, 7 history), 17 fixed and 1 logged as course-wide; all in the ledger under "Review findings". Next: review pass 2 on a fresh packet, then the fingerprint move, the audit record, the full test run and the Phase 10 report.

**Taught:** Green Wednesday 2026-11-11, Silver Thursday 2026-11-12, from Jeff's corrected November
Canvas calendar (2026-10-14), already in `assets/data/announcements-schedule.js` as date-only
entries.

**Branch baseline:** `claude/build-4-6-a8qfom`, the branch this session was given, from `main` at
`6671a2f`. (The build-topic skill names a topic branch `claude/topic-X-Y-build`; this session's
instructions name the branch, so the work is here and the report says so.) No other branch with
commits not on `main` touches 4.6 or the shared Unit 4 files: `claude/build-4-5-bizrkq`,
`claude/version-4-5-build-rmip8g` and `claude/topic-4-2-build` to `claude/topic-4-4-build` are
inside `main`; `claude/unit-4-5-f10-validators-CtTmA` and `claude/unit4-5-first10-fixes-xm7xyy`
sit on an unrelated old history and predate every Unit 4 rebuild.

**CED source: `scripts/lib/ced-source/unit-4.js`**, transcribed 2026-10-11 from the Fall 2026
CED, Course Framework V.1, p. 88 (topic page), p. 75 (Unit at a Glance) and p. 77 (sample
activity). This draft quotes that file and nothing else for what the CED requires. The unit story
map (`docs/UNIT-4-STORY-MAP.md`, approved 2026-10-11) supplies the spine, the hand-offs and the
owns / bridge-only split; it agrees with the source file on 4.6.

---

## 1. What the CED requires (p. 88)

One learning objective, under one theme.

- **Learning objective L (Governance, GOV):** Explain the effects of the development of state power from 1450 to 1750.

Key Concepts, as the CED pairs them with the objective:

- **KC-4.3.III.iii** (LO L): State expansion and centralization led to resistance from an array of social, political, and economic groups on a local level.
- **KC-5.3.III.C** (LO L): Enslaved persons challenged existing authorities in the Americas through organized resistance.

- **Reasoning move:** Causation, the CED's reasoning process for 4.6 (p. 75). The objective asks
  for the *effects* of state power, and the first Key Concept is a cause-and-effect sentence:
  expansion and centralization "led to" resistance. The story runs the chain one step further,
  because resistance had effects too: some states crushed it and grew stronger, some bargained,
  and some were worn down.
- **Suggested skill:** 4.B Contextualization, "Explain how a specific historical development or
  process is situated within a broader historical context." In this topic that means placing each
  revolt inside the bigger development it grew out of: Unit 3's states pulling power to the
  center, and Unit 4's empires pushing out across land and sea. A revolt explained only as "people
  were angry" has no context; a revolt explained as one result of a state's push has.
- **Thematic focus:** Governance (GOV).
- **Illustrative examples (optional):** Local resistance: Pueblo Revolts; Fronde; Cossack revolts;
  Maratha conflict with Mughals; Ana Nzinga's resistance (as ruler of Ndongo and Matamba); Metacom's
  War (King Philip's War). Resistance of enslaved persons: the establishment of Maroon societies in
  the Caribbean and Brazil; resistance of enslaved persons in North America. The CED says these "do
  not in any way constitute additional, preferred, or required information." All eight are used,
  because the Key Concept's word is "array": the point is that many *different* groups pushed back,
  and no one or two cases can show that. Each is told in a few sentences, as evidence inside a
  claim, never as its own unit. The other names in this story (Stenka Razin, the 1649 Law Code,
  Shivaji and Aurangzeb, Popé and the knotted cord, Palmares and Zumbi, Cudjoe and the 1739
  treaties, the Stono Rebellion and the 1740 Negro Act) are the concrete cases inside the CED's
  examples, chosen by this build.
- **Sample activity (p. 77, optional):** close reading of the "Declaration of Pedro Naranjo" (1681)
  about the Pueblo Revolt: highlight the social, economic and political reasons for rebellion, then
  answer "Explain the most significant causes of the Pueblo Revolt." This build makes it the Primary
  Source module.

**Five things in these sentences that are easy to drop.**
1. **"Expansion *and* centralization."** Two different pushes. Centralizing is a state pulling power
   inward over people it already rules (France's crown over its nobles and judges, Russia's tsar over
   its peasants). Expanding is a state pushing outward over people it does not yet rule (the Mughals
   into the Deccan, Portugal into Ndongo, Spain into the Pueblo world, New England into Wampanoag
   land). The CED's title says the same thing: internal and external challenges.
2. **"An array of social, political, and economic groups."** Not only colonized peoples. Nobles and
   judges, Cossacks and runaway serfs, a regional warrior kingdom, an African queen, and Indigenous
   towns all pushed back. A story that is all colonial resistance misses the Key Concept, which is
   why the story map requires an Afro-Eurasian case beside an American one.
3. **"On a local level."** The resistance was local: a city, a river valley, a province, a frontier.
   None of these groups was trying to overthrow every state; each was defending its own place.
4. **"Organized resistance."** For enslaved people the CED does not say "resisted"; it says
   "organized." Running away alone is resistance; building a town of thousands in the hills, signing a
   treaty, or marching under a flag is organized resistance that challenged the authorities.
5. **"Existing authorities in the Americas."** The authorities challenged were colonial governments
   and the enslavers whose power they backed. The Key Concept is set in the Americas.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-4-6-internal-external-challenges.js`), the renderer config, the First & 10
entry in `scripts/lib/reading-content/unit-4.js`, the deep reading
`scripts/lib/deep-reading-content/topic-4-6.js`, the BeInTheRoom scenario in
`scripts/build-unit4-rooms.js` (The Knotted Cord), the map spec `topic-4-6` in
`scripts/lib/instructional-map-specs.js`, the CED and coherence contracts, the deep audit, the unit
story map, and the 4.5 audit record and claim ledger.

**Consistent with the CED:**
- The lesson data and renderer config carry the learning objective and both Key Concepts in the
  CED's wording, with all eight illustrative examples (corrected 2026-10-11).
- The two learning targets map to KC-4.3.III.iii and KC-5.3.III.C, and the old third target on
  KC-4.3.III.ii (European rivalry) is gone, as the deep audit asked. The CED contract forbids it.
- The Pueblo Revolt and Palmares, the two cases the current lesson centers, are both inside the CED's
  examples and both stay.

**Out of line, each fixed inside this build:**
1. **Title.** The lesson is titled "Internal Challenges to State Power"; the CED says "Internal and
   External Challenges to State Power" (story map conflict, "Titles that differ from the CED"). The
   lesson title becomes the CED's.
2. **European rivalry is still taught (story map conflict 8).** The subtitle ("rival European powers
   challenged maritime empires"), the First & 10 (a whole section on the VOC against the Estado da
   Índia, piracy, privateering, Drake and the Seven Years' War, plus a callout and question 3 ranking
   "internal" against "external" European rivalry), its vocabulary chips (Piracy, Privateering, Seven
   Years War), the map ("Resistance and Rivalry", a privateers zone, an Indian Ocean key entry, and
   Ming and Ottoman zones that no surface teaches), the deep reading's section on the Dutch taking the
   Portuguese network, the Evidence Lab item on the VOC, and the BeInTheRoom description in the lesson
   data. Rivalry between states is KC-4.3.III.ii, 4.5's. It leaves every 4.6 surface.
3. **Material outside 1450 to 1750:** the Seven Years' War (1756 to 1763) called "the first truly
   global war" (F10), the Saramaka treaty of 1762 (lecture), and Santería in Cuba (lecture), which
   took its familiar form in the 1800s (4.5's ledger). All leave.
4. **One case per Key Concept (deep audit and story map conflict 13).** KC-4.3.III.iii is taught
   through the Pueblo Revolt alone, so "an array of groups" and the CED's Afro-Eurasian examples have
   no surface. The story adds the Fronde, the Cossacks (Razin), the Marathas, Njinga and Metacom's
   War; KC-5.3.III.C adds the Jamaica Maroons and North America (Stono).
5. **The Primary Source is not a source.** "Governor Otermín on the Pueblo Revolt" is an "adapted
   passage" with no translator, and it reads as invented: it has Otermín call Popé the Pueblos' "God"
   and concede the encomenderos' "excesses" in a tidy closing sentence. No Otermín letter this build
   could find says this. It is replaced with the CED's own sample-activity source, the Declaration of
   Pedro Naranjo, in the Hackett and Shelby translation (1942), quoted verbatim.
6. **The BeSurreal invents detail.** It has the Spanish burn the kivas at Ohkay Owingeh in 1675 and
   make Popé watch, the revolt "planned for August 13", "forty-six" communities speaking "six
   languages", and Popé sitting "in the kiva at Taos" deciding to launch early. Several are
   unsupported, and the scenario module already puts students in the Pueblo alliance. The BeSurreal
   moves to an Afro-Eurasian case (a runaway serf on the Don, 1670).
7. **Figures and claims flagged for the ledger:** "approximately 400 colonists and 21 of the 33
   Franciscan missionaries"; "Palmares ... up to 30,000 people", which the specialist entry calls a
   chroniclers' exaggeration; "c. 1605 to 1694"; "the encomienda system was not reimposed" and "the
   Spanish largely stopped trying to suppress Pueblo religious practices"; "forty-six Pueblo
   communities" (map key); "Palmares, the largest and most durable maroon community in the Americas"
   (map key, a superlative). Each is checked in the ledger; none is repeated without a source.
8. **Contextualization is named but not practiced.** The Skill Builder is "Causation practice" on the
   Pueblo Revolt alone; nothing practices 4.B. The F10's callouts are Contextualization, Causation,
   Comparison and Argumentation; its question badges are Causation, Comparison and Argumentation.
9. **Pictures from other topics (`stableImages`):** Columbus taking possession (4.2), a casta painting
   (4.7), Florentine Codex smallpox (4.3), a 1700 world map, the VOC (4.5), the Waldseemüller map
   (4.2), Vasco da Gama (4.2), a Persian astrolabe (4.1), Magellan (4.2). Lecture card 2's picture is
   the casta painting, captioned as if it were about maroons.
10. **Leftovers:** `first10.note` (lesson data and renderer config) still says "build your AI Coach
    prompt" (retired 2026-08-31); the reading still carries a `builderBody`; the lecture intro speaks
    of "Topic 4.6 focuses on"; the Evidence Lab's `items` (unrendered) and its intro are about the VOC;
    the BeInTheRoom description in the lesson data offers three scenarios that do not exist; the
    scenario's alignment lists "Organized resistance" and "Pueblo Revolt of 1680" as Key Concepts.
11. **Evidence Lab:** four cards, of which two are 20th-century memorials (a 1936 mural and a modern
    statue) and one is the course's own map. Only the 1647 Dutch map is from the period. Nothing shows
    an Afro-Eurasian case or a revolt by enslaved people.

## 3. The ninth-grade story

Last topic ended with a problem. States got richer and reached further. Not everyone accepted it.

**The push.** Between 1450 and 1750, states grew stronger than they had ever been. They did it in
two ways. They **centralized**: a king or emperor pulled power into his own hands and away from
everyone else who had shared it, the great nobles, the judges, the towns, the village headmen.
(Topic 3.2 showed some of the tools: Louis XIV's court at Versailles, the Ottoman devshirme, tax
collectors who answered to the center.) And they **expanded**: they pushed out over land and sea to
rule people who had never been theirs (Topics 4.2 to 4.5). Both pushes cost somebody something.
Centralizing meant new taxes, new laws and lost privileges. Expanding meant tribute, forced labor,
lost land, a new religion, and for millions of Africans, slavery. **The harder states pushed, the
harder people at the local level pushed back.** And the pushback came from every kind of group: rich
and poor, noble and peasant, kingdoms and villages, free and enslaved.

**Pushback from inside: nobles, judges and Paris.** In France, the crown had been fighting Spain for
years, and war cost money. In 1648, while Louis XIV was still a boy and his mother ruled for him with
her chief minister, Cardinal Mazarin, the government demanded new taxes. The judges of the Parlement
of Paris, a powerful court whose members had bought their offices, refused to approve them. When the
government arrested one of the judges, Paris put up barricades in the streets, and the next January
the royal family fled the city. Then great nobles rose too. This series of revolts, from 1648 to 1653,
is called the **Fronde**. It failed: the nobles quarreled with each other, and the crown won. But it
marked Louis XIV for life. He grew up to be a king who kept power in his own hands.

**Pushback from inside: peasants and Cossacks.** In Russia, the tsar's Law Code of 1649 finished
binding peasants to the land: a serf who ran away could be hunted down and returned to his lord, with
no time limit. Many fled anyway, south to the Don River, where communities of free frontier
horsemen called **Cossacks** lived beyond the tsar's reach. In 1670 a Don Cossack named **Stenka
Razin** led a huge revolt up the Volga River. Towns opened their gates to him, and tens of thousands of
peasants and non-Russian peoples of the Volga rose up. The tsar's army beat the rebels at Simbirsk,
Razin was handed over by other Cossacks, and in 1671 he was executed in Moscow. Serfdom stayed.

**Pushback at the edges: the Marathas.** The Mughal emperor **Aurangzeb** pushed his empire south
into the Deccan, the high plateau of central India. There the Marathas, led by **Shivaji**, had built a
kingdom of hill forts and fast horsemen, and in 1674 Shivaji had himself crowned king. In 1681
Aurangzeb moved his whole court south to finish them. He conquered two Deccan sultanates, but he could
never defeat the Marathas, who fought from their forts and raided instead of meeting his army head on.
He spent the rest of his life there and died in the Deccan in 1707. After that, the Marathas grew
stronger and the Mughal emperors grew weaker.

**Pushback at the edges: Njinga.** In West Central Africa, the Portuguese colony at Luanda pushed
inland into the kingdom of Ndongo, largely to get captives for the Atlantic slave trade. In 1622
Njinga, the king's sister, went to Luanda to bargain with the Portuguese governor and was baptized
there with the name Ana de Sousa. Two years later she became Ndongo's ruler. For the next forty years
she fought the Portuguese and bargained with them: she made a new base by conquering the kingdom of
Matamba, allied with the Dutch when they seized Luanda in 1641, and finally made peace with Portugal in
the 1650s. She died in 1663, still ruling Matamba. Resisting Portugal did not mean she stood outside the
slave trade: her own wars took captives, and Matamba sold them.

**Pushback at the edges: the Americas.** In 1598 Spain planted a colony in the Rio Grande valley of
New Mexico, among the Pueblo peoples, who lived in towns of stone and adobe. Spanish settlers took
tribute in corn and cloth (the **encomienda**) and forced labor. Franciscan friars tried to stamp out
the Pueblo religion: from the 1650s they banned the sacred dances and burned masks and prayer sticks. In
1675 the governor ordered the kivas, the rooms where ceremonies were held, destroyed, arrested
forty-seven Pueblo religious leaders, hanged three, and had the rest whipped. Spanish governors ruled by force and did not stop raids by Apache neighbors, and on top of it all
came years of drought and famine. One of the whipped men, **Popé** (Po'pay), from Ohkay Owingeh, began
to plan. Runners carried knotted cords from town to town; a town that agreed untied one knot as its sign,
and the knots that were left counted the days to the same morning. When the Spanish caught two runners, the Pueblos struck early, on August 10,
1680. In the **Pueblo Revolt** they killed about 400 colonists, including 21 friars, besieged Santa Fe
and cut off its water, and the surviving colonists fled south to El Paso. For twelve years the Pueblos ruled
themselves. When the Spanish came back in the 1690s, they did not restore the encomienda, and the
friars pressed far less hard against Pueblo religion than before.

At almost the same time, in New England, English colonists were taking more and more Wampanoag land and
putting the Wampanoag under colonial courts. In 1675, after Plymouth Colony executed three Wampanoag men,
war broke out between the colonists and the Wampanoag, led by **Metacom**, whom the English called King
Philip, and other Native nations joined in. **Metacom's War** destroyed more than a dozen English towns. But the colonists, with Native allies, won;
Metacom was killed in 1676, and many captives were sold into slavery in the Caribbean. Two revolts in the
same decade, against two expanding colonies, with opposite outcomes.

**Enslaved people organize.** The plantation colonies were built on slavery (Topic 4.4), and enslaved
people pushed back in every way they could. The CED's word is **organized**. In the hills behind
Brazil's sugar coast, people who escaped slavery built **Palmares**, a cluster of fortified towns that
lasted most of the 1600s and held thousands of people. These communities of people who escaped slavery are called **maroon
communities**, and in Brazil **quilombos**. Palmares farmed, traded with nearby settlers, and beat back
expedition after expedition. Its leader Ganga Zumba made a treaty with Portugal's governor in 1678, but
many in Palmares rejected it, and the next leader, **Zumbi**, kept fighting. A large colonial army
destroyed Palmares's main town in 1694, and Zumbi was killed in 1695. In Jamaica, the Maroons of the
mountains fought the British for years until, in 1739, the colony signed treaties with them: the
Maroons under Cudjoe were promised freedom and 1,500 acres of land forever. But the treaty also required
them to send back any enslaved person who ran away to them, and to help put down other revolts. Freedom
for some was bought with a promise to guard slavery for everyone else. And in North America, in 1739,
about twenty enslaved people near the Stono River in South Carolina seized guns and marched south toward
Spanish Florida, which had promised freedom to people who escaped from the English colonies. Others joined
until there were as many as a hundred. Militia broke up the march that afternoon and hunted down survivors over the following days; between
twenty and forty white colonists and dozens of rebels died, and the accounts disagree. South Carolina answered with the **Negro Act** of 1740, which tightened
control over every enslaved person in the colony.

**Put it together.** States pushed, inward and outward. The push landed on someone: taxes on judges and
townspeople, serfdom on peasants, conquest on kingdoms, tribute and religious attack on Pueblo towns, land
loss on the Wampanoag, slavery on Africans. Those groups pushed back: by revolt, by war, by flight, and by
bargaining. And the pushback had its own effects. Sometimes the state crushed it and came out stronger
(the Fronde, Razin, Metacom, Stono). Sometimes the state had to bargain (Njinga's peace, the Maroon
treaties, the Spanish return to New Mexico). And sometimes the resistance wore the state down (the
Marathas). Resistance is one of the effects of state power, and the College Board asks you to explain it
that way.

**And it hands on a question.** Some people resisted the new order. Everyone was sorted by it. Who ended
up where? That is Topic 4.7.

## 4. The spine

**The harder states pushed to expand and centralize, the harder people at the local level pushed
back.** (Approved with the unit story map, 2026-10-11.)

"Expand and centralize" is the first half of KC-4.3.III.iii; "people at the local level pushed back"
is its second half, and KC-5.3.III.C is the same pattern for enslaved people facing the plantation
colonies. The reasoning move runs through every case: what did the state push, what did the push
cost a local group, how did that group push back, and what happened next.

Shorter for the wall: **Push, and pushback.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| The two pushes: centralizing (Unit 3) and expanding (Unit 4), and what each cost | KC-4.3.III.iii ("state expansion and centralization") | The cause. Without it, resistance has no context (4.B). |
| The Fronde, 1648 to 1653: war taxes, the Parlement's refusal, the barricades, the nobles, the crown's win | KC-4.3.III.iii; example Fronde | **Centralization** pushed back by *political* and *social* elites: judges and nobles. Crushed; the crown came out stronger. |
| Russia's Law Code of 1649; runaways to the Don; Razin's revolt, 1670 to 1671 | KC-4.3.III.iii; example Cossack revolts | **Centralization** pushed back by an *economic* group, peasants, with the Cossacks. Crushed; serfdom stayed. |
| Aurangzeb in the Deccan, 1681 to 1707; Shivaji crowned 1674; hill forts and raids | KC-4.3.III.iii; example Maratha conflict with Mughals | **Expansion** pushed back by a regional *political* power. The state wore itself down. |
| Njinga: Luanda 1622, ruler 1624, Matamba, the Dutch, peace in the 1650s, died 1663 | KC-4.3.III.iii; example Ana Nzinga | **Expansion** (Portugal's) pushed back by an African ruler with war and diplomacy. A bargain. Also: resisting Portugal was not opposing the slave trade. |
| Pueblo Revolt: 1598 colony; encomienda, labor, raids on kivas; 1675 arrests; drought; knotted cords; 10 August 1680; twelve years; the 1690s return | KC-4.3.III.iii; example Pueblo Revolts; the CED's sample activity (Naranjo) | **Expansion** pushed back by Indigenous towns, with religious, economic and political causes together. A win, then a changed bargain. |
| Metacom's War, 1675 to 1676 | KC-4.3.III.iii; example Metacom's War | **Expansion** pushed back, and crushed. Set beside the Pueblo Revolt: same decade, opposite outcome. |
| Palmares, most of the 1600s; Ganga Zumba's 1678 treaty; Zumbi; 1694 and 1695 | KC-5.3.III.C; example Maroon societies in Brazil | **Organized** resistance: a maroon state that lasted most of a century. |
| The Jamaica Maroons and the 1739 treaties: freedom and land, and the clauses on runaways and rebels | KC-5.3.III.C; example Maroon societies in the Caribbean | Organized resistance that forced a bargain, and what the bargain cost. |
| The Stono Rebellion, 1739, and the Negro Act of 1740 | KC-5.3.III.C; example resistance in North America | Organized revolt in North America, crushed, and answered with tighter control. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 4.5: name one tool European rulers used to make their empires pay.
   (b) From 3.2: name one way a ruler pulled power into his own hands (Versailles, the devshirme, tax
   collectors who answered to him).
   (c) From 4.4: name one labor system that took work from people who did not choose it.
   **Bridge:** "Every one of those took something from somebody: money, power, land, work, freedom.
   4.5 ended: states got richer and reached further, and not everyone accepted it. Today: who pushed
   back, why, and what happened next."
3. **Topic question on screen, over a real historical scene:** States pushed to expand and
   centralize. Who pushed back, and what did it change?
4. **Two pushes.** Centralize (inward) and expand (outward), and what each cost. This is the context
   every case sits inside.
5. **Inside the state: the Fronde.** Judges, Paris and nobles against the crown's war taxes.
6. **Inside the state: Razin.** The 1649 Law Code, runaways, the Volga revolt.
7. **At the edges, Afro-Eurasia: the Marathas and Njinga.** A warrior kingdom and a queen, against
   expanding empires.
8. **At the edges, the Americas: the Pueblo Revolt.** Causes, the knotted cord, the outcome.
9. **Reading the source (the CED's sample activity): Pedro Naranjo, 1681.** Social, economic,
   political reasons. A first look; the Primary Source module does the work.
10. **Metacom's War beside the Pueblo Revolt.** Same decade, opposite outcome.
11. **Enslaved people organize: Palmares.**
12. **The Jamaica Maroons and the 1739 treaty.** Freedom, and its price.
13. **Stono, 1739, and the Negro Act.**
14. **Contextualization (4.B) modeled:** place one revolt in its bigger context, with a sentence
    frame. The Skill Builder practices it on Stono.
15. **Three outcomes:** crushed, bargained, wore down. Sort the cases.
16. **Myths.** "Colonized people accepted European rule until the 1800s"; "resistance always failed";
    "only colonized peoples resisted states"; "maroons were just runaways hiding in the woods."
17. **Retelling slide** (section 7).
18. **AP synthesis:** answer the learning objective in three sentences (push, pushback, effect), then
    hand off to 4.7.
19. **Landing, over a real historical scene.**

## 7. Retelling slide

A cause chain a student can redraw from memory, four links:

**The state pushes** (expands outward, or centralizes inward) → **the push lands on a local group**
(taxes, serfdom, conquest, tribute and religious attack, land loss, slavery) → **the group pushes
back** (revolt, war, flight, bargaining) → **the state answers** (crushes it, bargains, or is worn
down).

Result line: **The harder states pushed, the harder people pushed back, and the pushback changed the
states too.**

Why this shape: the reasoning move is causation and the objective asks for effects. The chain is
the CED's own sentence ("expansion and centralization led to resistance") with one more link for
what resistance did. Every case in the lesson fits it, which is the point. The deck builds it as a
cause chain (`cause-chain`).

## 8. Owns / bridge-only (from the unit story map)

- **4.6 owns:** local resistance to expanding, centralizing states (KC-4.3.III.iii), with the CED's
  range of examples across Afro-Eurasia and the Americas (Pueblo Revolts, Fronde, Cossack revolts,
  Maratha conflict with the Mughals, Ana Nzinga, Metacom's War); organized resistance by enslaved
  people in the Americas, Maroon societies and resistance in North America (KC-5.3.III.C).
- **Bridge only:**
  - Rivalries between European states (KC-4.3.III.ii, 4.5's; the Unit 4 contract forbids it as a 4.6
    target code). The Dutch alliance appears only as one of Njinga's moves.
  - Versailles and the tools of centralization (Topic 3.2). One clause, as context.
  - Aurangzeb's guns against the Marathas' forts (Topic 3.1's chapter). Not retold.
  - The labor systems and the plantation economy (4.4). Named as the push; not retaught.
  - Who ended up where in the new hierarchies, casta and elites (4.7). Not mentioned; the hand-off
    names it.
  - The Haitian Revolution (Unit 5). Not mentioned: it is after 1750.
- **Hands to 4.7:** "Some people resisted the new order. Everyone was sorted by it. Who ended up
  where?"

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-4-6-CLAIM-LEDGER.md`)

The claims that shaped the story are checked in the ledger before any surface is written. The ones
most likely to be wrong, by the defect classes 4.1 to 4.5 kept finding:

- Numbers: about 400 colonists and 21 friars (Pueblo); 47 arrested, 3 hanged (1675); Palmares's
  population; 1,500 acres (1739); about twenty, up to a hundred, about forty and about forty (Stono).
- Dates: 1648 to 1653 (Fronde), the barricades of August 1648 and the flight of January 1649; the Law
  Code of 1649; Razin 1670 to 1671; Shivaji crowned 1674; Aurangzeb south 1681, died 1707; Njinga at
  Luanda 1622, ruler 1624, Dutch Luanda 1641, peace in the 1650s, died 1663; New Mexico 1598; 10 August
  1680; Metacom's War 1675 to 1676; Ganga Zumba 1678, Palmares 1694, Zumbi 1695; Jamaica 1739; Stono 9
  September 1739; Negro Act 1740.
- Superlatives and single causes to keep out: "the largest and most durable maroon community"; "the
  first American revolution"; "the Fronde caused absolutism"; "the Marathas caused the Mughal decline";
  "the encomienda was abolished because of the revolt."
- Quotations, verbatim from a named translation: Naranjo (Hackett and Shelby, 1942); the 1739 treaty.
- Causal claims stated as historians' arguments where they are arguments: the Fronde's mark on Louis
  XIV; what the Maratha war cost the Mughals; why the Spanish returned to New Mexico on different terms.

## 10. Visual requirements per beat

Pictures are checked in Phase 6, and the build records which ones were verified. No image generator
key is set in this environment, so AI pictures are skipped; if a beat needs one, its prompt is saved to
`docs/TOPIC-4-6-IMAGE-PROMPTS.md`. The question and landing slides carry a real historical object.

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 3, 19 | A 17th-century picture of a revolt or a fortress of resistance | The pushback, seen by its own century. | A 19th-century romantic painting is not evidence of the event. |
| 5 | A print or painting of Paris in the Fronde (the barricades, 1648; the battle of the Faubourg Saint-Antoine, 1652) | The city and the nobles against the crown. | Made for one side. |
| 6 | A 17th-century print of Razin or his execution | Razin as his own time saw him. | Western European prints of Russia were often second-hand. |
| 7 | Shivaji's portrait, 1680s (British Museum); a portrait of Njinga from the 1660s to 1680s (Cavazzi) | Two rulers who held off empires. | A European missionary's picture of an African queen. |
| 8, 9 | A Pueblo mission church destroyed in 1680 (Pecos), or the Naranjo testimony | The target and the cause. | A modern photograph of an old ruin; say so. |
| 11 | The 1647 Dutch map of Pernambuco marking Palmares | A colonial map that had to mark a maroon state. | Drawn by outsiders. |
| 12 | The 1739 treaty text | The bargain, in its own words. | Printed later in the Assembly's journals. |
| 13 | No picture of Stono exists | The text of the 1740 Negro Act, or none. | Do not invent a scene. |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the final
report.

1. **Title:** the CED's, "Internal and External Challenges to State Power", on the lesson, reading,
   deck and hub.
2. **Skill Builder skill:** moves to the CED's suggested skill, 4.B Contextualization, modeled on the
   Fronde (the bigger context: a crown at war, centralizing) and practiced on the Stono Rebellion (the
   bigger context: a plantation colony with an enslaved majority, Spanish Florida's offer of freedom, a
   war between Britain and Spain about to start). The First & 10's question 2 asks for context too.
3. **Learning targets:** two, one per Key Concept, rewritten to require an Afro-Eurasian and an American
   case (target 1) and organized resistance by enslaved people (target 2). Checkpoint 1 assesses target
   1, Checkpoint 2 target 2. Both declare Causation, the CED's reasoning process, which is what both ask.
4. **Primary Source:** the CED's sample-activity source, Pedro Naranjo's declaration of 19 December 1681,
   in the Hackett and Shelby translation, with the CED's own questions (social, economic and political
   reasons; the most significant cause) and one sourcing question (a captive questioned by Spanish
   officials). It replaces the invented Otermín passage.
5. **Map module:** rebuilt as one map of pushback, c. 1640 to 1740: the nine cases as points, with
   internal and external marked. Rivalry, privateers, the Ming and the Ottomans leave.
6. **Evidence Lab:** the two 20th-century memorials and the course map leave; cards are chosen across
   Afro-Eurasia and the Americas and both Key Concepts, and verified as real objects of the period.
7. **BeSurreal:** a runaway serf among the Don Cossacks in spring 1670, deciding whether to join Razin.
   It replaces the invented Popé scene, and balances the Pueblo BeInTheRoom with an Afro-Eurasian case.
8. **BeInTheRoom:** The Knotted Cord stays (it is on this topic and passes the blueprint's theme gate);
   its facts are checked in the ledger and its alignment block is corrected.
9. **Deep reading:** rebuilt around this story. The old chapter's European-rivalry section leaves; its
   strongest material on the Pueblo Revolt's causes and on Palmares is kept, narrowed to the sources.
10. **Required modules** (Phase 8): 02 First & 10, 05 Skill Builder, 07 Evidence Lab, 10 Checkpoint 2.
