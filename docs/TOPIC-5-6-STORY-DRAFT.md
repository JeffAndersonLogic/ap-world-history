# Topic 5.6 Story Draft: Industrialization: Government's Role from 1750 to 1900

**Status: Delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).**
Drafted 2026-10-24 from the CED source file, for the build Jeff started with "Build 5.6." Phase 9's
reviewers check this story and every surface built from it against that file and the scholarship.
Nothing ships until Jeff says "ship it".

**Resume here (2026-10-24):** Phases 0 to 8 are finished. Review pass 1 is done: the page-truth
findings (13) are fixed and logged in the claim ledger; the history findings (14) are fixed in the
surfaces (13 accepted, 1 rejected: the 1946 Charter Oath wording, which the FRUS official translation
supports) but NOT yet logged in the ledger. Next: log the pass 1 history findings, recapture, run
pass 2. The Unit 5 reading fingerprint has not moved. Jeff paused the build here.

**Taught:** no dates yet. The schedule ends with the Era 3 Exam (Green Monday 2026-11-23, Silver
Tuesday 2026-11-24), and neither the schedule nor any comment in it names a Unit 5 class day (5.1 to
5.5 are not scheduled either). The build adds no schedule entries; the dates are an open item in the
report.

**Branch baseline:** `claude/build-5-6-wbngu2`, the branch this session was given, started from
`main` at `8f6a5002`, which already carries 5.1 to 5.5 (5.5 shipped 2026-10-23, `49a4c99d`). No other
branch with commits not on `main` touches 5.6 or the shared Unit 5 files
(`scripts/lib/reading-content/unit-5.js`, `scripts/build-unit5-rooms.js`):
`claude/build-5-4-ngkkp4` carries only an older copy of the 5.4 story draft, and
`claude/5.4-build-completion-2sdf4j` touches Units 6.5 and 6.8.

**CED source: `scripts/lib/ced-source/unit-5.js`**, transcribed 2026-10-20 from the Fall 2026 CED,
Course Framework V.1, p. 105 (topic page) and p. 95 (Unit at a Glance). This draft quotes that file
and nothing else for what the CED requires. The unit story map (`docs/UNIT-5-STORY-MAP.md`) section
for 5.6 was a proposal; this build follows it, as section 8 says.

---

## 1. What the CED requires (p. 105)

- **Learning objective G** (Governance): Explain the causes and effects of economic strategies of different states and empires.

Key Concepts, in the CED's order:

- **KC-5.1.V.C**: As the influence of the Industrial Revolution grew, a small number of states and governments promoted their own state-sponsored visions of industrialization.
- **KC-5.2.II.A**: The expansion of U.S. and European influence in Asia led to internal reform in Japan that supported industrialization and led to the growing regional power of Japan in the Meiji Era.

- **Reasoning move:** Causation, the CED's reasoning process for 5.6 (p. 95). The learning objective
  asks for "the causes and effects of economic strategies," which is a causal question in its own
  words, and the second Key Concept is a chain by itself: outside influence "led to" internal reform,
  which "supported" industrialization and "led to" regional power. The answer this story builds is a
  **chain of causes and effects for each state: a threat from stronger, better-armed powers made a few
  governments decide not to wait for industry; they built it themselves, with foreign machines and
  experts, paid for by their farmers, to make the state strong; in Japan the strategy lasted and made
  Japan a regional power, and in Egypt most of the factories had closed by the mid-1840s.**
- **Suggested skill:** 5.A Making Connections, "Identify patterns among or connections between
  historical developments and processes." Students put two cases side by side, name what they share
  (the pattern), and name the difference that the pattern does not explain.
- **Thematic focus:** Governance (GOV).
- **Illustrative examples** (optional; the CED says they "are provided as" examples and are not
  required): for state-sponsored visions of industrialization, "Muhammad Ali’s development of a
  cotton textile industry in Egypt." The CED gives no example for KC-5.2.II.A, whose case, Japan, is
  in the Key Concept itself. This story uses the one example and Japan, and no other case.
- **Sample activity:** the CED gives none for 5.6.

**Five things in these sentences that are easy to drop.**
1. **"Causes and effects."** Both halves. A lesson that describes what Muhammad Ali built, or lists
   Meiji reforms, without saying why the state acted and what followed has missed the objective.
2. **"Economic strategies of different states."** The objective is about the strategy, the state
   choosing to build industry, not industry in general (that was 5.3 to 5.5).
3. **"A small number of states."** Most early industry, in Britain and the United States, was built
   by private owners (5.3, 5.4). State-sponsored industry was the exception, and the Key Concept
   says so.
4. **"Internal reform in Japan."** The Key Concept's middle link. Japan did not only build
   factories: it abolished the domains, ended the samurai's privileges, drafted a national army,
   taxed land in money and built schools, and those reforms "supported industrialization."
5. **"Growing regional power."** The last link. Japan's industry has to end somewhere: the war with
   China in 1894 and 1895, Taiwan, and the end of the unequal treaties. An answer that stops at
   factories has dropped the effect the Key Concept names.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-5-6-industrialization-government-and-society.js`), the renderer config, the
First & 10 entry in `scripts/lib/reading-content/unit-5.js`, the deep reading
`scripts/lib/deep-reading-content/topic-5-6.js`, the BeInTheRoom entry in
`scripts/build-unit5-rooms.js`, the map spec in `scripts/lib/instructional-map-specs.js`, the network
atlas entry in `scripts/lib/unit5-atlas-content.js`, the deep audit, the unit story map, and the 5.4
and 5.5 First & 10s (what students were last taught).

**Consistent with the CED:**
- The renderer config's `collegeBoardKeyConcepts` carries learning objective G and both Key Concepts
  in the CED's wording, with Muhammad Ali's cotton textile industry as the illustrative example
  (corrected on 2026-10-20 in the 5.1 build).
- The network atlas line ("Some governments directed industrial investment to strengthen state
  power. Foreign pressure encouraged reform, but local politics shaped what happened.") agrees with
  the CED and is left alone.
- The Evidence Lab's Iwakura Mission photograph and Auguste Couder's portrait of Muhammad Ali are
  real, mirrored objects that fit this story. Both are kept and recaptioned where needed.
- 5.4 hands forward correctly: "The Japanese government also pushed industry on purpose; that is
  Topic 5.6," and its deep reading's "Who built those mills, and why, is Topic 5.6." 5.5 hands
  forward: "A few governments did not wait for these machines to arrive on their own. They decided to
  build industry themselves. That is Topic 5.6."

**Out of line, each fixed inside this build:**
1. **The whole topic teaches a different question** (the deep audit's "priority rebuild" and story
   map conflict 7). Both learning targets, both success criteria, every lecture card, all four First &
   10 sections, the Skill Builder, both checkpoints, the map and its key, the deep reading, the
   Primary Source and the BeInTheRoom teach new social classes, liberalism, conservatism, socialism
   and Marxism, British reform laws, Bismarck's social insurance and women's suffrage. The CED gives
   classes and women's lives to 5.9 (KC-5.1.VI.A to C), and ideologies, reforms and Marx to 5.8
   (KC-5.1.V.A, V.D, KC-5.3.IV.A.ii). The targets still point at KC-5.1.VI.A, B and C, which the CED
   gives to 5.9 (story map conflict 1). All of it leaves.
2. **Neither Key Concept is taught.** No target, criterion, card, reading section or checkpoint
   teaches state-sponsored industry, Muhammad Ali or Meiji Japan; only three Evidence Lab cards touch
   them, and one of those is about Russia.
3. **The reasoning move and skill on the page.** The reading's badges read Causation, Comparison and
   Argumentation, and its questions ask for a comparison and an argument; the Skill Builder teaches
   comparison of ideologies. The CED's reasoning process is Causation and its skill is 5.A,
   identifying patterns.
4. **Factual problems, flagged for the ledger, each leaving with its surface:**
   - "New Zealand granted women full voting rights in 1893, the first country in the world" (the map
     key): New Zealand women could vote from 1893 but could not stand for Parliament until 1919, so
     "full" overstates it. Removed with its surface (5.9's material).
   - "Germany under Bismarck introduced the world's first modern social insurance system" and "the
     German Social Democratic Party, the largest socialist party in the world, won 20% of the popular
     vote in 1890" (the reading and map key): superlatives and a figure off this topic. Removed.
   - "Chartism ... demanded universal male suffrage, secret ballot, annual parliaments, and payment
     for MPs, all eventually enacted": annual parliaments were never enacted. Removed.
   - "Witte and Russian rail finance" (Evidence Lab): Russia is not one of the story map's cases, and
     5.4's review (finding 4) already removed a promise of a Russian case in 5.6. Removed.
   - The Evidence Lab's map caption calls the reference map a reconstruction of "state-led industrial
     projects across several regions." The map is replaced (below).
   - The Muhammad Ali portrait caption ("built state arms factories, textile mills and a conscript
     army in Egypt from the 1810s"): the factories date from the late 1810s and the conscript army
     from the 1820s. Narrowed in the ledger.
   - BeInTheRoom's alignment block names `KC-5.6.I–II` and `KC-5.6.II.A–D`, codes the CED does not
     have (story map conflict 2), and an objective the CED does not print. Replaced with the scenario.
5. **Leftovers:** `first10.note` says "build your AI Coach prompt"; the reading still carries a
   `builderBody` about building an AI Coach prompt (retired 2026-08-31) and a `docTitle` and eyebrow
   unlike its siblings; the BeInTheRoom description points at a Reichstag committee; the title reads
   "Industrialization: Government and Society" where the CED reads "Industrialization: Government’s
   Role from 1750 to 1900" (story map conflict 3).
6. **Pictures from other topics (`stableImages`):** Vasco da Gama, the Florentine Codex smallpox page,
   Columbus taking possession, the Waldseemüller map, the casta painting, da Gama's pillar, the Pueblo
   Revolt mural, the 1700 world map, a Persian astrolabe and Magellan. None has a 5.6 job; all leave.
7. **Title:** the page title is restored to the CED's, "Industrialization: Government’s Role from 1750
   to 1900."

## 3. The ninth-grade story

Topic 5.4 followed the factory as it spread from Britain to other parts of Europe, the United States,
Russia and Japan, and ended on a line: "The Japanese government also pushed industry on purpose."
Topic 5.5 ended on another: a few governments did not wait for the machines to arrive on their own.
In Britain and the United States, private owners and investors built the first factories (5.3, 5.4).
This topic is about the exceptions: a small number of governments that decided to build industry
themselves. Two of the clearest cases are Egypt under Muhammad Ali and Japan in the Meiji era.

**Why would a government build factories?** Because it was afraid. By the early 1800s, the states
with factories, steam power and new weapons were becoming the strongest in the world. A ruler who
watched them could see that a state without industry could be beaten, or forced to sign whatever it
was told to sign.

**Egypt: a governor who wanted power of his own.** In 1798 a French army under Napoleon invaded Egypt
and defeated its Mamluk rulers; the French left in 1801. Among the Ottoman troops sent to
take Egypt back was Muhammad Ali, an officer from an Albanian family. In 1805 the Ottoman sultan named
him governor of Egypt, and by 1811 he had destroyed his rivals and ruled alone. Egypt was a province of
the Ottoman Empire, and Muhammad Ali was the sultan's governor, but he wanted Egypt strong enough that
he, and his family after him, could hold it, even against the sultan. Strength meant an army, and an
army meant guns, uniforms and ships.

**What Muhammad Ali built.** His government took control of Egypt's farming: it told peasants what to
grow, bought their crops at low prices, and sold them abroad at higher ones. A new crop, long-staple
cotton, first grown for sale in 1820, began to earn a great deal. With that money, from the late 1810s his government built
factories: cotton mills, and works for weapons, sugar and other goods, with machines bought in Europe
and European experts to run them. By the early 1830s about 30 cotton mills employed about 30,000
workers, many making cloth and uniforms for the army. The workers did not choose these jobs: they
were drafted, the way peasants had long been drafted to dig canals. From 1822 peasants were
drafted into the army too, which reached about 130,000 soldiers by the early 1830s, and in the 1820s Muhammad Ali sent Egyptian students to Europe to learn
its sciences. To protect his mills, he kept cheap British cloth out of Egypt.

**For a while it worked.** His army, led by his son Ibrahim, invaded Syria in 1831 and beat the sultan's
own armies more than once.

**Then it stopped.** Britain, Austria, Russia and Prussia did not want a strong Egypt breaking the
Ottoman Empire apart. In 1840 they sided with the sultan, and British warships and Ottoman troops drove
Ibrahim out of Syria. In 1841
the sultan made the governorship of Egypt hereditary in Muhammad Ali's family (passing to its eldest male), but Egypt had to give up its
conquests except Sudan, and its army was cut to 18,000 men in peacetime. Egypt also had to accept a
trade treaty Britain had signed with the Ottoman sultan in 1838, which ended Muhammad Ali's monopolies
and opened Egypt to cheap foreign goods. The factories had problems of their own, too. Egypt had almost
no coal, so many machines were turned by animals instead of steam. The drafted workers resisted, and the managers had
little experience. By the mid-1840s, about a decade after their peak, most of the new factories had failed. Historians still argue
about which cause mattered most, and about how much the factories achieved while they lasted. Egypt
went on growing more and more cotton, almost all of it sold abroad, much of it to the mills of Britain. (What that led to is
Unit 6.)

**Japan: ships that changed a government.** In 1853 an American naval officer, Commodore Matthew
Perry, sailed warships into Edo Bay, near today's Tokyo, and demanded that Japan open its ports to
trade. Japan had no navy that could stop him. Treaties in 1854 and 1858 opened Japanese ports to
Americans and Europeans, let foreigners accused of crimes in Japan be tried by their own countries'
courts, and took away Japan's control over its own trade. These were unequal treaties. Some samurai
blamed the shogun, the military ruler who governed in the emperor's name, for giving in.

**A new government, and a new aim.** In 1868 a group of young samurai overthrew the shogun and
governed in the name of the teenage emperor, Meiji. This is the Meiji Restoration. In April 1868 the
new government promised, in the Charter Oath, that "Knowledge shall be sought throughout the world so
as to strengthen the foundations of imperial rule." Its slogan was "Rich country, strong army."

**Reform first.** The Meiji leaders changed Japan itself. In 1871 they abolished the domains of the old
lords and made one central state. The samurai lost their privileges, and men of every class were
drafted into a national army. A national school system began in 1872. A new land tax, paid in money
instead of rice, gave the government money to spend. From 1871 to 1873 a group of leaders, the Iwakura
Mission, toured the United States and Europe to study how they worked.

**Then the state built industry.** The government built Japan's first railway, from Tokyo to Yokohama,
opened in 1872 with British engineers. In the same year it opened the Tomioka Silk Mill, with French
machines and a French engineer, Paul Brunat, to teach Japanese workers, mostly young women, to reel
silk by machine. It built telegraph lines, shipyards, mines and factories for weapons and for goods
such as cement, glass and cloth. Farmers paid for much of this through the land tax, and some samurai
rebelled against losing their place; the new army of drafted commoners crushed the last great revolt
in 1877.

**Then the state sold it.** Running so many enterprises cost more than the government could afford. In
1880 it decided to sell most of them to private investors. Business families such as Mitsui and
Mitsubishi bought them and grew into huge companies, the zaibatsu. Private companies such as the Osaka
Spinning Company (Topic 5.4) built more. The state had started the industry; private business carried
it on.

**And Japan became a regional power.** In 1894 Britain agreed to end the foreign courts in Japan
(the change took effect in 1899), and other powers followed; full control of tariffs came only in 1911. In 1894 and 1895 Japan fought China over
Korea and won. In the Treaty of Shimonoseki, China gave up its claim over Korea, gave Taiwan to Japan,
and agreed to pay 200 million taels of silver. Russia, Germany and France forced Japan to give back
one more piece of land it had won, which angered Japan's leaders. Japan, which had been forced to open its
ports forty years before, now had a colony of its own. (What empires did with that power is Unit 6.)

**The pattern, and the difference.** Put the two cases side by side. Both governments acted because
they feared stronger, better-armed powers. In both, the state, not private owners, paid for the first
factories. Both bought foreign machines, hired foreign experts and sent people abroad to learn. In
both, farmers paid much of the bill. And both wanted the same result: a state strong enough to defend
itself, with an army to match. That is the pattern. The difference is what happened next. Japan's
industry lasted and grew; Egypt's mostly closed. Historians point to several reasons: Japan was an
independent country, while Egypt was a province of the Ottoman Empire that European powers forced to
cut its army and open its markets; Japan reformed its whole society, while Egypt's factories were one
ruler's project, run with drafted workers; Japan had coal of its own and Egypt almost none; and
Japan's government handed its industries to private companies that kept them running. Japan had to
accept low tariffs too, so outside pressure alone does not explain the difference.

**Myths to drop.** "Japan just copied the West": Japan's leaders chose what to borrow and from whom (a
French silk mill, British railway engineers), and their aim, in their own words, was to "strengthen
the foundations of imperial rule." "Muhammad Ali was building an Egyptian nation": he was an Ottoman
governor from an Albanian family whose court spoke Turkish, and he built for his own and his family's
power. "One cause explains Egypt's result": historians weigh European pressure, missing coal, drafted
workers and inexperienced managers, and still disagree about how much each mattered.

**So, what caused these economic strategies, and what were their effects?** Fear of stronger industrial
powers made a small number of governments decide to build industry themselves. Muhammad Ali's Egypt
built cotton mills and arms works to supply an army; it won wars for a while, but European pressure,
missing coal and forced labor closed most of the factories. In Japan, Perry's warships and the unequal
treaties led to the Meiji reforms; the state built railways and mills and then sold them to private
companies, and the industry it started made Japan strong enough to defeat China, take Taiwan, and end
the unequal treaties.

**And it hands on a turn.** All this industry made goods, and goods had to be paid for, traded and
financed. Who owned the factories, and how did money move around the industrial world? That is Topic
5.7.

## 4. The spine

**Afraid of stronger, better-armed powers, a few governments decided not to wait for industry and built
it themselves, to make their states strong. Muhammad Ali's Egypt built factories for an army, and most
of them had closed by the mid-1840s; Meiji Japan reformed itself, built railways and mills, sold
them to private companies, and became a regional power.**

The story map's spine ("A few governments decided not to wait for industry and built it themselves:
Muhammad Ali's Egypt and Meiji Japan") is kept in substance; the build adds the cause (fear of stronger
industrial powers) and the different effects, because the reasoning move is Causation and the
objective asks for causes and effects.

"A few governments ... built it themselves" is KC-5.1.V.C; "Meiji Japan reformed itself ... became a
regional power" is KC-5.2.II.A; "afraid of stronger, better-armed powers ... to make their states strong"
and "most of them closed" are the objective's causes and effects.

Shorter for the wall: **The state built the factories. Japan's lasted. Egypt's mostly closed.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| Private owners built Britain's and America's first factories (5.3, 5.4) | KC-5.1.V.C ("a small number") | State-built industry was the **exception**. |
| Napoleon's invasion, 1798; Muhammad Ali governor, 1805; his aim to hold Egypt for his family | KC-5.1.V.C; LO G (cause) | The **cause**: a ruler who feared stronger armies and wanted power. |
| State control of crops; long-staple cotton; profits paid for factories | KC-5.1.V.C; LO G (strategy) | **How** a state paid for industry: farmers. |
| About 30 cotton mills and about 30,000 drafted workers by the early 1830s; foreign machines and experts; students to Europe; British cloth kept out | KC-5.1.V.C (the CED's example) | The **strategy**: the state as investor, owner and protector. |
| Syria taken, 1831; the sultan's armies beaten twice | LO G (effect) | The strategy **worked for a while**: an army that won. |
| 1840 to 1841: driven from Syria, army cut to 18,000 in peace; the 1838 treaty ends monopolies | LO G (effect) | **Outside pressure** limited the strategy. |
| No coal, oxen, drafted workers, inexperienced managers; most factories failed within a decade | LO G (effect) | **Inside problems**, and the debate about which mattered most. |
| Perry, 1853; treaties of 1854 and 1858; extraterritoriality and lost trade control | KC-5.2.II.A ("expansion of U.S. and European influence") | The **cause** in Japan. |
| Meiji Restoration, 1868; the Charter Oath; "Rich country, strong army" | KC-5.2.II.A ("internal reform") | The **decision** and its aim, in Japan's own words. |
| Domains abolished, 1871; samurai privileges ended; conscription; schools, 1872; land tax in money; Iwakura Mission, 1871 to 1873 | KC-5.2.II.A ("internal reform ... that supported industrialization") | **Reform** made industry possible and paid for it. |
| Tokyo to Yokohama railway, 1872; Tomioka Silk Mill, 1872; shipyards, mines, factories | KC-5.1.V.C; KC-5.2.II.A | The **state built** Japan's first modern industry. |
| The 1880 decision to sell; Mitsui and Mitsubishi; the zaibatsu | KC-5.2.II.A ("supported industrialization") | The state **started** it; private business **carried it on**. |
| Treaty revision, 1894 (in force 1899); war with China, 1894 to 1895; Shimonoseki: Korea, Taiwan, 200 million taels | KC-5.2.II.A ("growing regional power") | The **effect**: Japan became a regional power. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 5.4: name two places the factory methods spread to outside Britain.
   (b) From 5.3 and 5.4: who paid for the first factories in Britain and the United States? (Private
       owners and investors, such as Arkwright, or the Boston merchants at Lowell.)
   (c) From 5.5: name one technology that made industrial states stronger. (The steam engine,
       railroads, steamships, the telegraph, steel.)
   **Bridge:** "Factories made some states strong. If you ruled a state without them, and you were
   afraid, would you wait for private owners to build them, or build them yourself?"
3. **Topic question on screen, over a cinematic picture:** Why did a few governments build industry
   themselves, and what happened when they did?
4. **First & 10.**
5. **The exception:** most industry was built by private owners; a few states built their own
   (KC-5.1.V.C).
6. **Egypt, the cause:** Napoleon's invasion; Muhammad Ali's rise and aim (KC-5.1.V.C).
7. **Egypt, the strategy:** control of crops, cotton, about 30 mills and 30,000 drafted workers,
   foreign machines and experts (KC-5.1.V.C).
8. **Egypt, the effects:** the army wins; 1840 to 1841; the 1838 treaty; no coal, drafted workers;
   most factories fail (KC-5.1.V.C).
9. **The skill (5.A): find the pattern**, modeled on a neutral everyday case.
10. **Japan, the cause:** Perry and the unequal treaties (KC-5.2.II.A).
11. **Japan, the reforms:** the Restoration, the Charter Oath, the reforms that supported industry
    (KC-5.2.II.A).
12. **Japan, the state builds, then sells** (KC-5.2.II.A).
13. **Japan, regional power:** treaty revision; the war with China; Shimonoseki (KC-5.2.II.A).
14. **Practice:** the pattern across the two cases, then the difference (the 5.A move).
15. **Why the results differed:** four reasons historians weigh.
16. **Myths.**
17. **Retelling slide** (section 7).
18. **AP synthesis:** the objective answered in a sentence, then the hand-off to 5.7.
19. **Landing, over a cinematic picture.**

## 7. Retelling slide

Two cause chains side by side, with the shared links lined up, so a student can redraw them from
memory:

| | Egypt (Muhammad Ali) | Japan (Meiji) |
|---|---|---|
| **Threat** | Napoleon's army, 1798; a ruler who wants to hold power | Perry's warships, 1853; unequal treaties |
| **Decision** | The governor builds an army and the industry to supply it | The Meiji leaders reform Japan: "Rich country, strong army" |
| **Strategy** | State control of crops; cotton mills; drafted workers; foreign machines | Railways, silk mills, shipyards; foreign experts; then sold to private companies |
| **Result** | Wins wars; then pressure from Europe, no coal and forced labor; most factories close | Industry grows; treaties revised; beats China, takes Taiwan: regional power |

Result line: **The state built the factories. Japan's lasted. Egypt's mostly closed.**

Why this shape: the reasoning move is Causation and the skill is 5.A (patterns). The same four links
in both chains are the pattern; the last link is the difference.

## 8. Owns / bridge-only (from the unit story map)

- **5.6 owns:** KC-5.1.V.C (state-sponsored industry, with Muhammad Ali's cotton textile industry) and
  KC-5.2.II.A (Meiji reform, industry and regional power).
- **Bridge only:** the spread of industry to Japan (5.4): named as what came before, and the Osaka
  Spinning Company named as a private mill. The technologies (5.5): railways and telegraphs named as
  what the states built, not taught again. Free trade and mercantilism as policy (5.7): the 1838
  treaty named as what ended Egypt's monopolies, not taught as an idea. Ottoman and Qing reforms and
  their resistance (5.8, KC-5.1.V.B): not taught; Muhammad Ali is an Ottoman governor, and the
  Ottoman Empire appears only as the empire Egypt belonged to. Social classes, ideologies, reform laws
  and women's lives (5.8, 5.9): out, apart from the Tomioka workers named as young women. Imperialism
  (Unit 6): Taiwan named as Japan's colony and the evidence of regional power, with one line
  that what empires did is Unit 6; Egypt's later cotton economy, debt and the British occupation of
  1882 are Unit 6, named in one line. Russia's state-led industry (Witte) is not a case here, as 5.4's
  review decided.
- **Story map change:** none to ownership. The spine adds the cause and the two effects. Unit-wide
  conflict 2 (BeInTheRoom's invented codes) is fixed for 5.6.
- **Hands to 5.7:** "All this industry made goods, and goods had to be paid for, traded and financed.
  Who owned the factories, and how did money move around the industrial world?" (The story map gives
  5.6 no hand-off line; this one points at 5.7's spine.)

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-5-6-CLAIM-LEDGER.md`)

The new claims, and the ones most likely to be wrong by the defect classes Units 2 to 5 kept finding:

- Numbers: about 30 cotton mills and about 30,000 workers by the early 1830s (Beinin, MERIP; Ahmeti and
  Rizaj, as 5.4's ledger cites them); the army cut to 18,000 in peacetime (the 1841 firman's own
  words); 200 million taels (the Treaty of Shimonoseki, Article 4).
- Dates: 1798 and 1801 (the French in Egypt), 1805, 1811, the late 1810s (the first factories), the
  1820s (conscription; the student missions), 1831, 1838, 1840, 1841, 1853, 1854, 1858, 1868 (the
  Restoration; the Charter Oath, April), 1871 (domains abolished), 1871 to 1873 (Iwakura), 1872 (the
  railway; Tomioka; schools), 1877 (the Satsuma revolt), 1880 (the decision to sell), 1883 (Osaka
  Spinning), 1894 (treaty revision), 1894 to 1895 (the war), 1899.
- Superlatives and single causes to keep out: "the first industrialization outside the West"; "Egypt's
  industry was destroyed by Britain" as the sole cause; "Japan simply copied the West"; "Muhammad Ali,
  the father of modern Egypt" stated as fact (it is a later nationalist label; say who calls him
  that if it is used at all); "Japan defeated China and took Korea" (Korea became Japan's in 1910).
- Causal links stated with care: why Egypt's factories closed (several causes, weighed by historians);
  Japan's land tax as the main way farmers paid; treaty revision as following Japan's legal reforms
  and growing strength.

## 10. Visual requirements per beat

Pictures are checked in Phase 6.

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 3 | A cinematic scene: a state-built mill or railway in Meiji Japan; or the two cases as a pair | The question: the state builds. | An AI picture is labeled; a real print is preferred. |
| 6 | Couder's portrait of Muhammad Ali (mirrored) | The ruler and his aim. | A commissioned portrait: an argument, not a snapshot. |
| 7 | A view of a Cairo works or the Citadel; cotton | The strategy. | No period picture of a mill may exist; leave the slot to a diagram if so. |
| 8 | A map: Egypt, Syria, Istanbul, 1831 to 1841 | The wars and the limit. | Generated map. |
| 10 | A Japanese print of Perry's ships, 1853 to 1854 | The threat, seen from Japan. | Prints were often made later; date them. |
| 11 | The Iwakura Mission photograph, 1872 (mirrored) | Reform and learning abroad. | Who is in it, and where it was taken. |
| 12 | A nishiki-e print of the Tomioka mill or the Yokohama railway, 1872 | The state builds. | Artists' views. |
| 13 | A map: Japan, Korea, Taiwan, 1895 | Regional power. | Generated map. |
| 17 | The retelling chains (template) | | |
| 19 | Landing picture | | |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the final
report.

1. **Title:** the page takes the CED's title, "Industrialization: Government’s Role from 1750 to
   1900." The reading's title is "Industry on Purpose," on the reading, both lesson files, the deck
   and Canvas. The file names keep the old slug, as 5.5's did, so no link breaks.
2. **Skill Builder skill:** moves to the CED's suggested skill, 5.A, "Identify patterns among or
   connections between historical developments and processes": put two cases side by side, name what
   they share, write the pattern in one sentence, then name the difference the pattern does not
   explain. Modeled on a neutral everyday example, practiced on Egypt and Japan.
3. **Learning targets:** two. Target 1, why a small number of states sponsored industry and what
   Muhammad Ali's Egypt did and with what results (KC-5.1.V.C); Target 2, how U.S. and European
   pressure led to Meiji reforms that supported industry and made Japan a regional power
   (KC-5.2.II.A). Checkpoint 1 assesses Target 1; Checkpoint 2 assesses Target 2 and the learning
   objective (the pattern across both states and the difference in their results) and declares
   Causation.
4. **Primary Source:** the Charter Oath of April 1868, all five articles, in Akihiko Tanaka's
   translation from "The World and Japan" database (GRIPS and the University of Tokyo), quoted in full
   with its credit, with three questions. W. W. McLaren's 1914 public-domain translation could not be
   read word for word from this session, so it is not used. It replaces the Communist Manifesto
   material, which is 5.8's.
5. **Map module:** two panels, Egypt and the eastern Mediterranean, 1831 to 1841, and Japan, Korea and
   Taiwan, 1853 to 1895, printing labels only in the key. It replaces the classes and reform map.
6. **Evidence Lab:** real objects where they can be sourced (the Couder portrait, the Iwakura Mission
   photograph, Japanese prints of the railway or the mill), and text cards for the 1841 firman's army
   clause and the Treaty of Shimonoseki's terms; never an AI picture.
7. **BeSurreal:** a young woman from a former samurai family, starting work at the Tomioka Silk Mill
   in 1873, writing home: the state's industry seen by one worker. It replaces the old surface.
8. **BeInTheRoom:** "The Factory Question" (a Reichstag committee on social insurance, which is 5.8's)
   is replaced by "The Factory Sale": Tokyo, 1880, a government council deciding whether to keep or
   sell the state's factories, with Egypt's mills as evidence of what a state industry can come to.
   The old file is removed (it stays in git history for 5.8's build) and the lesson links the new one.
9. **Deep reading:** rebuilt around this story.
10. **Required modules** (Phase 8, chosen under Jeff's rule of 2026-10-23): 02 First & 10, 06
    Checkpoint 1, 10 Checkpoint 2, and 05 Skill Builder, which practises the CED's suggested skill for
    5.6 (5.A, patterns) on the topic's two cases.
