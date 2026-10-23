# Topic 5.4 Story Draft: Industrialization Spreads in the Period from 1750 to 1900

**Status: Delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).**

**Resume here (2026-10-23):** Jeff stopped the build during Phase 3. Done: Phases 0 to 2, and this
story draft (sections 1 to 11). Not yet done: the claim ledger `docs/TOPIC-5-4-CLAIM-LEDGER.md`. The
sources already checked are named in section 9, and two claims still need a second source: Indian
village iron smelting undercut by imported iron carried by rail (try the NCERT Class 8 *Our Pasts III*
chapter "Weavers, Iron Smelters and Factory Owners"), and the 33% to 3% export figure (NCERT Class 10
ch. 4 only so far). Next: write the ledger, then Phase 5 (First & 10). This branch already carries 5.3
through `f6159738`. Before Phase 5, merge any later 5.3 commits (its audit record and slide fixes).

**Taught:** no dates yet. The schedule ends with the Era 3 Exam (Green Monday 2026-11-23, Silver
Tuesday 2026-11-24), and neither the schedule nor the Notion task names a Unit 5 class day (5.1 to
5.3 are not scheduled either). The build adds no schedule entries; the dates are the one open item in
the report.

**Branch baseline:** `claude/build-5-4-ngkkp4`, the branch this session was given. (The build-topic
skill names a topic branch `claude/topic-X-Y-build`; this session's instructions name the branch, so
the work is here and the report says so.) When the session started, the branch was `main` at
`e2adf9d` (the finished 5.2 build), and Topic 5.3 was still in its third review pass on
`claude/build-5-3-erthgh`, in another session, editing the shared Unit 5 files. The story draft and
claim ledger were started while 5.3 finished, touching no shared file; when 5.3 closed its review loop
and moved the Unit 5 reading fingerprint (`f6159738`), this branch was fast-forwarded to it, so 5.4
builds on 5.3's approved reading and hand-off. 5.3 is not yet on `main`; the report says so. No
other branch with commits not on `main` touches 5.4 or the shared Unit 5 files
(`scripts/lib/reading-content/unit-5.js`, `scripts/build-unit5-rooms.js`).

**CED source: `scripts/lib/ced-source/unit-5.js`**, transcribed 2026-10-20 from the Fall 2026 CED,
Course Framework V.1, p. 103 (topic page) and p. 95 (Unit at a Glance). This draft quotes that file
and nothing else for what the CED requires. The unit story map (`docs/UNIT-5-STORY-MAP.md`) section
for 5.4 was a proposal; this build follows it except where noted in section 8.

---

## 1. What the CED requires (p. 103)

- **Learning objective E** (Technology and Innovation): Explain how different modes and locations of production have developed and changed over time.

Key Concepts, in the CED's order:

- **KC-5.1.II.B**: The rapid development of steam-powered industrial production in European countries and the U.S. contributed to the increase in these regions’ share of global manufacturing during the first Industrial Revolution. While Middle Eastern and Asian countries continued to produce manufactured goods, these regions’ share in global manufacturing declined.
- **KC-5.1.I.D**: As new methods of industrial production became more common in parts of northwestern Europe, they spread to other parts of Europe and the United States, Russia, and Japan.

- **Reasoning move:** Continuity and Change, the CED's reasoning process for 5.4 (p. 95). The learning
  objective asks how modes and locations of production "developed and changed over time," which is a
  continuity-and-change question by its own words. The answer this story builds is that **between
  1750 and 1900 two things changed: how most goods were made (from hands and simple tools in homes and
  workshops to steam-powered machines in factories) and where most of them were made (from China and
  India to northwestern Europe, and then to other parts of Europe, the United States, Russia and
  Japan). One thing continued: Middle Eastern and Asian producers kept making ships, iron and cloth.
  What they lost was their share.**
- **Suggested skill:** 5.A Making Connections, "Identify patterns among or connections between
  historical developments and processes." Students find a pattern across the places the new methods
  reached (they arrived with people, machines and money from places that already had them), and a
  connection between two developments that look separate (Britain's mills rising and India's
  weavers losing their markets were one change seen from two ends).
- **Thematic focus:** Technology and Innovation (TEC).
- **Illustrative examples** (optional; the CED prints them beside KC-5.1.II.B under the heading
  "Decline of Middle Eastern and Asian share in global manufacturing"): Shipbuilding in India and
  Southeast Asia; Iron works in India; Textile production in India and Egypt. This story uses all
  three, because each is one of the "manufactured goods" the CED says these regions "continued to
  produce," and each shows the share falling in a different way. The page also lists an available
  resource, the Professional Development module "Comparison in Period 5"; it is not a requirement.
- **Sample activity:** none for 5.4.

**Five things in these sentences that are easy to drop.**
1. **"Continued to produce."** The CED does not say Asia and the Middle East stopped making things,
   or that industry "failed to spread" there. It says production continued and the *share* fell. A
   5.4 answer that says India "stopped manufacturing" contradicts the Key Concept.
2. **"Share."** A share can fall while output stays the same or grows, because the whole grows.
   Britain's machines made the world's total output of cloth far larger; a hand weaver making the
   same amount of cloth as before held a smaller slice of a much bigger pie. Some producers also
   lost markets outright (hand spinners in India); the share fell for both reasons.
3. **"Steam-powered."** The change in *mode* is not only "factories" but factories driven by steam
   engines, so they no longer had to sit by a fast stream. (How the steam engine works, and the
   railways and steamships it drove, are 5.5's.)
4. **"Russia, and Japan."** Both are named. Industry reached them late, after 1860, and both must be
   in the answer, not only Belgium, Germany and the United States.
5. **"Modes and locations."** Two kinds of change, and the objective asks for both: *how* goods were
   made and *where*.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-5-4-industrialization-spreads.js`), the renderer config, the First & 10 entry in
`scripts/lib/reading-content/unit-5.js`, the deep reading `scripts/lib/deep-reading-content/topic-5-4.js`
(by its card), the BeInTheRoom scenario in `scripts/build-unit5-rooms.js`, the map key, the deep
audit, the unit story map, and the 5.3 story draft and reading (what students were last taught).

**Consistent with the CED:**
- The lesson data and renderer config carry the learning objective and both Key Concepts in the CED's
  wording, with the three illustrative examples (corrected on 2026-10-20 in the 5.1 build). The lesson
  data's copy prints "the United States" where the CED prints "the U.S."; the renderer config, which
  wins on the page, prints "the U.S." Corrected in the lesson data to match.
- The two learning targets point at the topic's two real Key Concepts (Target 1 at KC-5.1.I.D,
  Target 2 at KC-5.1.II.B). The deep audit found them aligned in emphasis.

**Out of line, each fixed inside this build:**
1. **Target 2, its success criterion, Checkpoint 2, lecture card 3, the map key, the Skill Builder
   and the reading contradict KC-5.1.II.B.** They teach that industrialization "deliberately did NOT
   spread" to Asia, Africa and Latin America, that India was "deindustrialized," and that "political
   sovereignty" was "the decisive variable" and "the single most important contextual factor." The
   CED says Middle Eastern and Asian countries "continued to produce manufactured goods" while their
   share declined, and the deep audit warned: "avoid reducing every non-industrialization outcome to a
   single deliberate-policy cause." British trade rules are one real cause (section 3) and are kept;
   machines that made cloth far more cheaply are the other, which an East India Company director
   himself called the chief one in 1823 (section 9). Africa and Latin America are not in this Key
   Concept; their economies under European empire are Unit 6's.
2. **Half the topic teaches what 5.6 owns.** Lecture card 2, First & 10 section 3, the BeSurreal
   (the Iwakura Mission at Krupp), the BeInTheRoom ("The Meiji Investment Ledger," 1872), three of
   the four Evidence Lab cards (the Charter Oath, Japan's first railway as state building, Tomioka)
   and Checkpoint 1's terms (Meiji Restoration, Iwakura Mission, zaibatsu, *fukoku kyōhei*) teach
   *why and how the Meiji state built industry*. Muhammad Ali's mills and the 1838 treaty are lecture
   card 3's centerpiece. The CED gives state-sponsored industrialization, with Muhammad Ali's cotton
   industry, and Meiji reform to 5.6 (KC-5.1.V.C, KC-5.2.II.A). 5.4 keeps Japan as a place the new
   methods reached and names the state's role in one line as a bridge.
3. **Russia is missing.** The Key Concept names it; no target, criterion, card, checkpoint, question
   or picture does.
4. **The reasoning move and skill on the page.** The reading's badges read Causation, Comparison and
   Argumentation; its three questions and both checkpoints end on comparison or an argumentation
   verdict ("natural disadvantages or deliberate colonial policy?"); the Skill Builder teaches
   comparison. The CED's reasoning process is Continuity and Change, its skill 5.A.
5. **Sources that are not what they say they are.**
   - The Primary Source, "The Decline of Indian Textile Manufacturing, c. 1840," is an "adapted
     account" drawing on unnamed "reports ... and Indian testimony": a composite, not a quotable
     record. It opens with "The bones of the cotton-weavers are bleaching the plains of India," which
     is usually attributed to Governor-General Bentinck in 1834 through Marx's *Capital*, with no
     record of Bentinck writing it found; and it states figures ("net exporter ... 1813 ... net importer
     ... 1830," duties "of 2.5 percent" and "20 to 80 percent," "thirty days ... three hours") with no
     source. Replaced with the 1840 House of Commons evidence of Montgomery Martin and John
     Brocklehurst (section 9).
   - Evidence Lab card 3 (lesson data) quotes Bismarck: "Free trade is the policy of the strong;
     protection is the policy of the developing nation." No source gives this wording. Card 2 quotes
     an unnamed "Manchester merchant" at the 1813 charter hearings; no source is given and the words
     are not found in the 1813 minutes as printed by Dutt. Both removed.
6. **Factual problems, flagged for the ledger, each leaving with its surface:**
   - "By 1900, the United States was the world's largest industrial economy, larger than Britain and
     Germany combined" (lecture card 1). Bairoch's estimates give the United States 23.6% of world
     manufacturing in 1900, Britain 18.5% and Germany 13.2%: the largest, not larger than the two
     combined. Narrowed to the estimate.
   - "Japan was the only non-Western country to industrialize successfully in the 19th century"
     (lecture card 2, map key, reading). A superlative that depends on what counts; India's Bombay
     mills date from 1854. Removed; 5.4 says Japan was one of the places the new methods reached.
   - "By 1895, Japan defeated China ... the first time an Asian power had defeated a major power in
     modern warfare" (lecture card 2). Self-contradicting (China is Asian) and 5.6's. Removed.
   - "By 1905, Japan defeated Russia ... the first time a non-Western country had defeated a European
     great power" (lecture card 2). Ethiopia defeated Italy at Adwa in 1896. Removed with the card.
   - "Lowell, Massachusetts (1820s) was the first planned industrial city" (lecture card 1, reading).
     An unsourced superlative. Removed; the story uses the Boston Manufacturing Company at Waltham.
   - "Japan had fewer coal deposits than India ... smaller capital reserves than the Ottoman Empire"
     (map key). Unsourced. Removed with the key.
   - "The Ruhr valley ... the most productive industrial region in the world by 1900" (map key).
     Unsourced superlative. Removed.
   - "India had the most sophisticated textile industry in the world" (lecture card 3, reading) and
     "Dacca muslin was the finest cotton cloth in the world." Superlatives. Narrowed: Indian cotton
     cloth was sold across Asia, Africa and Europe, and Bengal's finest muslins were famous.
   - BeSurreal: the Iwakura Mission at Krupp in "January 1873"; "Krupp cannons destroyed the French
     fortress at Sedan in 1870. The French fortress had held for centuries. Krupp destroyed it in
     three days." Sedan was a battle in the field, not a siege of a fortress that "held for
     centuries," and the scene is 5.6's. Replaced.
   - "The Iwakura Mission ... approximately 50 officials ... 18-month tour" and the "they took German
     military organization, British naval architecture, American education ..." list. 5.6's; removed
     with the card.
7. **Leftovers:** `first10.note` in both lesson files says "build your AI Coach prompt"; the reading
   carries a `builderBody`; the BeInTheRoom description in the lesson data offers three scenarios that
   do not exist; the reading's `docTitle` and eyebrow differ from 5.3's; `primarySource.text` is an
   array of paragraphs with no attribution.
8. **Pictures from other topics (`stableImages`):** Magellan, da Gama's pillar, a Persian astrolabe,
   Columbus taking possession, the Pueblo Revolt mural, the Waldseemüller map, the 1700 world map, the
   Florentine Codex smallpox page, the casta painting, the VOC logo. None has a 5.4 job; all leave.
9. **The BeInTheRoom alignment block names `KC-5.4.I–II` and `KC-5.4.II.A–C`,** codes the CED does
   not have (story map conflict 2), and an objective the CED does not print. Replaced with a 5.4
   scenario aligned to LO E.
10. **Title:** the lesson reads "Industrialization Spreads"; the CED's title is "Industrialization
    Spreads in the Period from 1750 to 1900" (story map conflict 3). Kept as the page title, with
    "1750 to 1900" opening the subtitle as 5.2 does; every Unit 5 file and the scenario index use the
    short title. See section 11.

## 3. The ninth-grade story

Last topic ended with a turn. In Britain, coal, water, growing towns, protected property, foreign
cotton and saved-up money made factories pay, and the factory put the work under one roof. **The new
way of making things did not stay in Britain.** Where did it go, and what happened to the places that
had been making the world's goods all along?

**Where the world's goods were made in 1750.** Most of the world's manufactured goods were made in
Asia. Almost everything was made by hand, in homes and small workshops, with simple tools. India's
weavers made cotton cloth that was sold across Asia, Africa and Europe; in the 1600s and 1700s it was
so popular in Britain that Parliament restricted it to protect British weavers. Bengal's finest
muslins were famous. India's shipwrights built ocean-going ships of teak, and its village smiths
smelted iron with charcoal. Egypt's weavers made linen and cotton cloth, and so did workshops across the
Ottoman Empire. One economic historian, Paul Bairoch, estimated that in 1750 China made about a third of
all the manufactured goods in the world and South Asia about a quarter, while Britain made about 2
percent. (These are estimates, not counts: nobody counted the world's cloth in 1750. They include
everything made by hand, which is most of what anyone made.)

**What changed first: the mode.** In Britain, after 1770, cotton thread and then cloth began to be made
by machines in factories, as Topic 5.3 showed. At first the machines were turned by water wheels.
Then, more and more, by **steam engines**, which burned coal and could run a factory anywhere, not only
beside a fast stream. One worker tending steam-powered machines could make far more thread or cloth in
a day than a hand spinner or weaver. That is the change in **mode of production**: from hands and
simple tools in homes and workshops to **steam-powered machines in factories**.

**How the new methods traveled.** Britain tried to keep its methods at home. Until 1824 its laws
forbade skilled workers to emigrate to work abroad, and until 1843 they banned the export of many kinds
of machinery. It did not work, because the knowledge traveled in people's heads.
- **Samuel Slater** started work at ten in Jedediah Strutt's cotton mill in Belper (Strutt was one of
  Arkwright's partners at Cromford) and stayed for years, learning the machines. In 1789 he sailed to
  New York and offered to build them. By December 1790 his machines were spinning cotton at Pawtucket,
  Rhode Island, and in 1793 he and his partners opened a water-powered spinning mill there.
- **Francis Cabot Lowell**, a Boston merchant, toured British mills before the War of 1812 and
  memorized what he saw. Back home, with the mechanic Paul Moody, he rebuilt the power loom, and in 1814
  the Boston Manufacturing Company's mill at Waltham, Massachusetts, did spinning and weaving under one
  roof.
- **The Cockerills**, an English family, built textile machines in Belgium, and in 1817 John Cockerill
  opened an iron foundry and machine works at Seraing, near the coal and iron of Liège.
Methods spread outward from Britain to Belgium, northern France and the German lands, and across the
Atlantic to the United States, wherever coal, iron, money and a market came together.

**Late arrivals: Russia and Japan.** The new methods reached Russia and Japan later in the century, and
they too came with people and machines from places that already had them.
- In **Russia**, a Welsh ironmaster, **John Hughes**, set up the New Russia Company in London in 1869,
  brought about a hundred workers from South Wales, and built an ironworks on the steppe of what is now
  eastern Ukraine; its first blast furnace was producing iron by early 1872. The town that grew around
  it was named Yuzovka, after him (today's Donetsk). In 1891 Russia began the Trans-Siberian Railway, and
  in the 1890s its industry grew so fast that historians call it the "great spurt."
- In **Japan**, the first railway opened between Tokyo (Shimbashi) and Yokohama in 1872, designed by a
  British engineer, with locomotives and rails imported from Britain. In 1883 the Osaka Spinning Company,
  founded by Shibusawa Eiichi and partners, began spinning cotton with 10,500 steam-driven spindles and
  ran them day and night.
In both countries, the government pushed industry along; how and why is Topic 5.6.

**What changed next: the location, and the share.** As steam-powered factories spread, the places that
made most of the world's goods moved. By Bairoch's estimates, Britain's share of world manufacturing rose
from about 2 percent in 1750 to about 23 percent in 1880. Europe as a whole went from about 23 percent in
1750 to about 62 percent in 1900. By 1900 the United States made about 24 percent, more than any other
single country, followed by Britain, Germany and Russia; Japan made about 2 percent. Meanwhile China's
share fell from about 33 percent to about 6, and South Asia's from about 25 percent to under 2.

**What continued: Asia and the Middle East kept making things.** Those falling shares do not mean these
places stopped manufacturing. The CED's own examples show what happened instead.
- **Shipbuilding in India and Southeast Asia.** At the Bombay Dockyard, Parsi master builders of the
  Wadia family built ships of teak for merchants and for Britain's Royal Navy. HMS *Trincomalee*,
  launched there in 1817, is still afloat at Hartlepool in England. In Burma, the shipyards of Moulmein
  built teak sailing ships for decades. But from the 1850s, ships with iron hulls and steam engines began
  to replace wooden sailing ships, and most of those were built in Britain. Teak shipyards built on, for
  a smaller share of the world's ships.
- **Iron works in India.** Village smiths had smelted iron with charcoal for centuries. In the 1800s,
  cheap iron from British furnaces, carried inland by the new railways, undercut many of them. One British
  businessman, Josiah Heath, built a modern ironworks at Porto Novo in southern India in 1830; it lost
  money for years, and the government took it over in 1853.
- **Textile production in India and Egypt.** Here the change hit hardest. In 1811-12 cotton cloth was a
  third of everything India exported; by 1850-51 it was 3 percent. Cheap machine-made thread wiped out
  most of India's hand spinners. But India's hand weavers did not disappear: many survived by weaving
  machine-made thread into the cloth machines could not copy, and in Bombay, Indian merchants opened
  their own steam-powered cotton mill in 1854, the first of many. In Egypt, more and more of the country's
  own cotton was shipped raw to Europe's mills; by the end of the century cotton was more than nine-tenths
  of what Egypt sold abroad. (Egypt's ruler built cotton mills of his own; that is Topic 5.6.)

**Why the shares fell: two connected reasons.** First, the machines made the world's total output so
much bigger that hand production, even where it held steady, became a smaller slice. Second, machine-made
goods were cheap enough to take customers away from hand producers, in Asia's own markets as well as
Europe's. In India, rules made by its British rulers helped: in the early 1800s Britain taxed Indian
cloth heavily when it entered Britain, while British cloth entered India at low duties. In 1823 an East
India Company director, Henry St. George Tucker, wrote that Indian cotton cloth had been driven out of
Britain "partly in consequence of the operation of a duty of 67 per cent., but chiefly from the effect of
superior machinery." The rise of Britain's mills and the decline of India's weavers were one change, seen
from two ends.

**Myths to drop.** "Asia stopped making things": production continued; the share fell. "Industry spread
everywhere at once": it reached Russia and Japan a century after Cromford. "British policy alone
destroyed Indian industry" and "India just couldn't keep up": both reasons were real, and contemporaries
named both. "Japan was the only non-Western country to industrialize": Bombay's mills opened in the 1850s.

**So, how did modes and locations of production change, and what stayed the same?** The mode changed,
from hands and simple tools to steam-powered machines in factories. The location changed: from Asia to
northwestern Europe, and from there to other parts of Europe, the United States, Russia and Japan, carried
by people, machines and money from places that already had them. What continued is that Middle Eastern
and Asian producers kept making ships, iron and cloth; what they lost was their share of the world's
goods.

**And it hands on a turn.** The steam engine sat behind all of it, and in the second half of the century
new machines and new kinds of energy, steel, oil and electricity, and the railways, steamships and
telegraphs that carried goods and people, changed production again. That is Topic 5.5.

## 4. The spine

**From 1750 to 1900, how goods were made changed (from hands to steam-powered machines) and so did where
most of them were made (from Asia to northwestern Europe, and then to other parts of Europe, the United
States, Russia and Japan). Middle Eastern and Asian producers kept making goods, but a shrinking share of
the world's.**

The story map's spine ("Industry spread from northwestern Europe to other parts of Europe, the United
States, Russia and Japan, and the world's share of manufacturing shifted: Middle Eastern and Asian
producers kept making goods, but a falling share of them") is kept in substance. The build adds the
*mode* (hands to steam-powered machines) because the objective asks for modes as well as locations, and
the Key Concept names "steam-powered industrial production."

"How goods were made" is LO E's modes and KC-5.1.II.B's "steam-powered industrial production"; "where
most of them were made" is LO E's locations; "to other parts of Europe, the United States, Russia and
Japan" is KC-5.1.I.D; "kept making goods, but a shrinking share" is KC-5.1.II.B's second sentence.

Shorter for the wall: **The machines moved. The hand workshops kept working. The world's share shifted.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| Hand production in homes and workshops; Indian cloth sold across Asia, Africa and Europe; Bairoch's 1750 estimates (China about a third, South Asia about a quarter, Britain about 2%) | LO E (the before); KC-5.1.II.B | The **before**: most goods made by hand, most of them in Asia. |
| Water wheels, then steam engines, in factories | KC-5.1.II.B ("steam-powered industrial production") | The change in **mode**. |
| Britain's laws against emigrating artisans (to 1824) and exporting machinery (to 1843) | KC-5.1.I.D | The methods spread **despite** the country that had them. |
| Slater (Strutt's mill, 1789, Pawtucket 1790 and 1793); Lowell (Waltham, 1814); the Cockerills (Seraing, 1817) | KC-5.1.I.D (other parts of Europe, the United States) | The methods traveled **with people**, to Belgium and the United States. |
| Hughes and Yuzovka (1869 to 1872); the Trans-Siberian (1891); the "great spurt" of the 1890s | KC-5.1.I.D (Russia) | Russia: **late**, with foreign people and money. |
| Japan's first railway (1872, British engineer, British locomotives); Osaka Spinning Company (1883, steam, 10,500 spindles) | KC-5.1.I.D (Japan) | Japan: **late**, with foreign machines. |
| Bairoch's shares: Britain 2% to 23% (1750 to 1880); Europe 23% to 62%; United States 24% by 1900; China 33% to 6%; South Asia 25% to under 2% (1750 to 1900) | KC-5.1.II.B | The **location** of most production changed, and the shares with it. |
| Bombay Dockyard, the Wadias, HMS *Trincomalee* (1817); Moulmein's teak yards; iron hulls and steam from the 1850s | KC-5.1.II.B (shipbuilding in India and Southeast Asia) | Production **continued**; the share fell as a new kind of ship took over. |
| Village iron smelting; imported iron by rail; Porto Novo (1830, taken over 1853) | KC-5.1.II.B (iron works in India) | Production **continued** under pressure. |
| Cloth 33% of India's exports (1811-12) to 3% (1850-51); hand spinning collapsed, hand weaving survived; Bombay's first mill (1854); Egypt's cotton exported raw, about 93% of exports by 1900 | KC-5.1.II.B (textile production in India and Egypt) | The sharpest fall, and still **continuity**: weavers, and new mills. |
| Tucker, 1823 ("partly ... a duty of 67 per cent., but chiefly ... superior machinery"); Martin and Brocklehurst, 1840 | KC-5.1.II.B | **Why** the share fell: two connected reasons, named at the time. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 5.3: name one thing nature gave Britain and one thing people built. (Coal, iron, water;
   farms, towns, laws, foreign cotton, money.)
   (b) From 5.3: what two things did the factory change? (Where the work was done: one place. How:
   one small job each.)
   (c) From 5.3: where did much of the world's cotton cloth come from in 1750? (India.)
   **Bridge:** "The new way of making things did not stay in Britain. Where did it go? And what
   happened to India's cloth?"
3. **Topic question on screen, over a cinematic picture:** Where were the world's goods made, and how
   did that change between 1750 and 1900?
4. **Before: where the world's goods were made in 1750** (KC-5.1.II.B, the before).
5. **What changed first: the mode**, hands to steam-powered machines (KC-5.1.II.B).
6. **How the methods traveled**: the bans, Slater, Lowell, the Cockerills (KC-5.1.I.D).
7. **Late arrivals: Russia and Japan** (KC-5.1.I.D).
8. **The skill (5.A): find the pattern** across places the methods reached, modeled.
9. **What changed next: the shares**, the chart (KC-5.1.II.B).
10. **What continued: ships, iron and cloth** (KC-5.1.II.B, the CED's examples).
11. **Why the shares fell: two connected reasons** (Tucker, the trade rules) (KC-5.1.II.B).
12. **Practice (5.A): make a connection** between two developments.
13. **Myths.**
14. **Retelling slide** (section 7).
15. **AP synthesis:** one change and one continuity, in a sentence, then the hand-off to 5.5.
16. **Landing, over a cinematic picture.**

## 7. Retelling slide

A continuity-and-change slide a student can redraw from memory, with 1750 on one side and 1900 on the
other:

**Changed: how** (hands and simple tools in homes and workshops → steam-powered machines in factories).
**Changed: where** (most goods made in Asia → most made in northwestern Europe, then also other parts of
Europe, the United States, Russia and Japan). **Continued:** Middle Eastern and Asian producers kept
making ships, iron and cloth. **The result:** their share fell; Europe's and the United States' rose.

Result line: **The machines moved. The hand workshops kept working. The world's share shifted.**

Why this shape: the reasoning move is Continuity and Change, and the objective asks for two kinds of
change (modes, locations). A turning point with what changed on one side and what continued on the other
is the shape of the claim; the share is the result of both.

## 8. Owns / bridge-only (from the unit story map)

- **5.4 owns:** the spread of the new methods from northwestern Europe to other parts of Europe, the
  United States, Russia and Japan (KC-5.1.I.D); the rise of Europe's and the United States' share of
  world manufacturing and the fall of the Middle East's and Asia's, while they kept producing
  (KC-5.1.II.B), with the CED's three examples.
- **Bridge only:** how governments sponsored industry (5.6, KC-5.1.V.C and KC-5.2.II.A): one line
  that Russia's and Japan's governments pushed industry along, and one that Egypt's ruler built mills;
  Meiji reform, Muhammad Ali, the Iwakura Mission and Witte are not taught. How the steam engine works,
  the second industrial revolution, railways, steamships and the telegraph (5.5, KC-5.1.I.B, I.E, IV):
  steam named as the power; railways named as what carried British iron inland and as Japan's and
  Russia's projects, not taught. Free trade and Adam Smith (5.7): not taught; the trade rules on Indian
  cloth are taught as tariffs, not as the free-trade argument. Ottoman and Qing reform (5.8): not
  taught. Workers' lives and the new classes (5.9): not taught. British rule in India and the economics
  of empire (Unit 6): named only as the rulers who set India's trade rules. Latin America and Africa:
  not in this Key Concept, not taught.
- **Story map change:** the spine adds the mode of production (section 4); ownership unchanged.
- **Hands to 5.5:** "The steam engine sat behind all of it, and new machines and new kinds of energy were
  about to change production again."

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-5-4-CLAIM-LEDGER.md`)

The new claims, and the ones most likely to be wrong by the defect classes Units 2 to 5 kept finding:

- **Quotations** checked word for word against the texts as printed: Henry St. George Tucker (1823), in
  *Memorials of Indian Government* (1853), p. 494, as quoted in R. C. Dutt, *The Economic History of
  India under Early British Rule* (1902; Internet Archive scan of the 1916 printing), pp. 262 to 263;
  Montgomery Martin and John Brocklehurst before the House of Commons Select Committee on East India
  Produce (1840), Questions 3877, 3879 and 3918 to 3920, as printed in Dutt, *India in the Victorian Age*
  (1904; Internet Archive scan), pp. 111 to 114.
- **Dates:** 1789, 1790 and 1793 (Slater); 1814 (Waltham); 1817 (Seraing; *Trincomalee*); 1824 and
  1843 (the bans lifted); 1830 and 1853 (Porto Novo); 1854 (Bombay's first mill); 1869 and 1872
  (Hughes); 1872 (Japan's railway); 1883 (Osaka Spinning); 1891 (Trans-Siberian); 1811-12 and 1850-51
  (India's exports); 1823 (Tucker); 1840 (the Select Committee).
- **Numbers:** Bairoch's shares (two sources: the Bairoch 1982 table as reproduced in Strayer's
  *Ways of the World* and summarized from Kennedy's *Rise and Fall of the Great Powers*; India's 25%
  and 2% also in Clingingsmith and Williamson, NBER 2004); 33% and 3% (NCERT, *India and the
  Contemporary World II*, ch. 4); 10,500 spindles (sources differ; one gives 15,000); about a hundred
  Welsh workers; 67% (Tucker); 93% (Egypt's exports).
- **Superlatives and single causes to keep out:** "the only non-Western country to industrialize";
  "the first planned industrial city"; "larger than Britain and Germany combined"; "the most
  sophisticated textile industry in the world"; "political sovereignty was the decisive variable";
  "British policy destroyed Indian industry" as a sole cause; "India stopped manufacturing."
- **Claims stated as arguments, not facts:** how much of India's decline was trade policy and how much
  machinery (the story gives both, with a contemporary's words); Bairoch's shares (estimates, said so
  on the page); whether Indian hand weaving "survived" (Roy's argument, which the NCERT textbook
  follows; the story says "many survived").

## 10. Visual requirements per beat

Pictures are checked in Phase 6. The repo's mirrored pictures, Wikimedia Commons, the Met, the Library
of Congress and the Wellcome Collection are tried first.

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 3 | A cinematic scene: an Indian handloom weaver's workshop beside a steam mill's chimneys, or a harbor with a teak sailing ship and a steamship | The question: two ways of making things, two places. | AI only with the label; never in the Evidence Lab. |
| 4 | An Indian hand weaver or chintz/muslin textile (a museum object, the Met or the V&A) | The before. | Date it; many weaver prints are later. |
| 5 | A steam-powered mill interior (the Baines/Allom power-loom plate, 1835, already mirrored) | The mode. | The plate shows Britain, 1830s. |
| 6 | Slater Mill (photograph, with its date), or a portrait of Slater | People carried the methods. | A modern photograph says so. |
| 7 | Yuzovka (a period photograph of the Hughes works) and the 1872 Japanese railway (a ukiyo-e print of the Takanawa embankment, by Hiroshige III or Kunisada) | Russia and Japan, late. | Prints are celebrations, not records of scale. |
| 9 | A bar chart of Bairoch's estimates, drawn by the build | The shares. | Say "estimates." |
| 10 | HMS *Trincomalee* (a photograph, modern, said so) or a Bombay Dockyard print; Indian iron smelting (a 19th-century drawing) | Continuity. | |
| 11 | Tucker's words on a text card | Two reasons. | |
| 14 | The retelling slide (continuity and change) | | |
| 16 | Landing picture | | |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the final
report.

1. **Title:** the page keeps "Industrialization Spreads," because every Unit 5 file and the scenario
   index use it; the subtitle opens "1750 to 1900" as 5.2's does. The reading's title is "Who Made the
   World's Goods?", on the reading, both lesson files, the deck and Canvas.
2. **Skill Builder skill:** moves to the CED's suggested skill, 5.A, "identify patterns among or
   connections between historical developments and processes": a pattern is something that repeats
   across cases; a connection is a link between two developments that explains both. Modeled on an
   everyday case so the model is not an answer to a checkpoint; practiced on 5.4's evidence.
3. **Learning targets:** two, one per Key Concept. Target 1, how the new methods spread from
   northwestern Europe to other parts of Europe, the United States, Russia and Japan (KC-5.1.I.D);
   Target 2, how the shares of world manufacturing changed and what continued in the Middle East and
   Asia (KC-5.1.II.B). Checkpoint 1 assesses Target 1; Checkpoint 2 assesses Target 2 and declares
   Continuity and Change.
4. **Primary Source:** the 1840 Select Committee: Montgomery Martin ("India is as much a manufacturing
   country as an agricultural") against John Brocklehurst ("the destruction of weaving in India had
   already taken place"), quoted exactly from Dutt's printing with its question numbers, three questions:
   what each claims, which is right about change and which about continuity, and why each might say so.
   It replaces the composite "adapted account."
5. **Map module:** where industrial production was by about 1900, with the routes the methods traveled
   (Britain to Belgium, the United States, Russia and Japan) and the CED's three Asian and Middle
   Eastern examples marked as places that kept producing.
6. **Evidence Lab:** real objects where they can be sourced (the power-loom plate; a Japanese railway
   print; a Bombay Dockyard or *Trincomalee* image; an Indian textile; Yuzovka) and verified excerpts
   (Tucker; Bairoch's table; NCERT's export figures).
7. **BeSurreal:** Bombay, 1856: you are a hand weaver whose brother has taken a job at the new
   steam-powered spinning mill at Tardeo; you write about what changes and what stays the same. It
   replaces the Iwakura Mission at Krupp, which was 5.6's and misdescribed Sedan.
8. **BeInTheRoom:** "The Meiji Investment Ledger" (5.6's) is replaced by a 5.4 scenario: an investor's
   board in 1869 deciding whether to back the New Russia Company, which exercises how methods traveled,
   what a late arrival needed, and what the shares meant. The old file is removed and the lesson links
   the new one. (5.6's own build can write a Meiji scenario fresh.)
9. **Deep reading:** rebuilt around this story.
10. **Required modules** (Phase 8): 02 First & 10, 05 Skill Builder, 07 Evidence Lab, 10 Checkpoint 2,
    the set Unit 4 and 5.1 to 5.3 used. Checkpoint 2 is the share-and-continuity half of the objective,
    which the reading and deck build to.
