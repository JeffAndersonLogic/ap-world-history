# Topic 5.7 Story Draft: Economic Developments and Innovations in the Industrial Age

**Status: Delegated to the independent reviewer loop (Jeff's standing rule of 2026-10-12).**
Drafted 2026-10-29 from the CED source file, for the build Jeff started with "Build the next unit 5
topic." Nothing ships until Jeff says "ship it".

**Resume here (2026-10-29, second session):** Phases 0 to 8 done; review pass 1 (26 findings) fixed and
logged. Pass 2 (19 findings) fixed and logged; pass 3 under way from a fresh packet. The build continues on `claude/5-7-build-timeout-yjim8a`
(the session's assigned branch; it carries every commit of `claude/topic-5-7-build`, which stops at
pass 1). Then move `APPROVED_UNIT5_REWRITE_BLOB`, browser suite, topic audit, report.

**Taught:** no dates yet. The schedule ends with the Era 3 Exam (Green Monday 2026-11-23, Silver
Tuesday 2026-11-24), and neither the schedule nor any comment in it names a Unit 5 class day (5.1 to
5.6 are not scheduled either). The build adds no schedule entries; the dates are an open item in the
report.

**Branch baseline:** `claude/topic-5-7-build`, started from `main` at `ec768c94`, which already carries
5.1 to 5.6 (5.6's build and audit are on `main`: `a3e73a73`, `6adbf31b`). No other branch with commits
not on `main` touches 5.7 or the shared Unit 5 files (`scripts/lib/reading-content/unit-5.js`,
`scripts/build-unit5-rooms.js`): `claude/unit-5-completion-jueU7` (June), `claude/unit-5-ced-audit`
(June) and `repair-unit-5-ced-alignment` (September) are older than every 5.x build now on `main`, and
`work/unit4-unit5-atlases-20261012` touches only the atlases.

**CED source: `scripts/lib/ced-source/unit-5.js`**, transcribed 2026-10-20 from the Fall 2026 CED,
Course Framework V.1, p. 106 (topic page) and p. 95 (Unit at a Glance). This draft quotes that file
and nothing else for what the CED requires. The unit story map (`docs/UNIT-5-STORY-MAP.md`) section
for 5.7 was a proposal; this build follows it, as section 8 says.

---

## 1. What the CED requires (p. 106)

- **Learning objective H** (Economic Systems): Explain the development of economic systems, ideologies, and institutions and how they contributed to change in the period from 1750 to 1900.

Key Concepts, in the CED's order:

- **KC-5.1.III.A**: Western European countries began abandoning mercantilism and adopting free trade policies, partly in response to the growing acceptance of Adam Smith’s theories of laissez-faire capitalism and free markets.
- **KC-5.1.III.B**: The global nature of trade and production contributed to the proliferation of large-scale transnational businesses that relied on new practices in banking and finance.
- **KC-5.1**: The development of industrial capitalism led to increased standards of living for some, and to continued improvement in manufacturing methods that increased the availability, affordability, and variety of consumer goods.

- **Reasoning move:** Continuity and Change, the CED's reasoning process for 5.7 (p. 95). The learning
  objective asks how economic "systems, ideologies, and institutions ... contributed to change," and
  each Key Concept is a change from something older: from mercantilism to free trade, from small
  partnerships and chartered companies to "large-scale transnational businesses" with "new practices
  in banking and finance," and from costly goods to goods with greater "availability, affordability,
  and variety." The answer this story builds is **a before and after for each of the three, with what
  carried on: the rules of trade, the shape of business and the goods people could buy all changed
  between 1750 and 1900, while companies that sold shares were an older idea, many countries kept or
  went back to tariffs, and the gains reached some people and not others.**
- **Suggested skill:** 5.B Making Connections, "Explain how a historical development or process
  relates to another historical development or process." Students take two of the topic's
  developments and say how one relates to the other (it caused it, made it possible, or answered it),
  with a detail for each. The Key Concepts model the move themselves: global trade "contributed to"
  transnational businesses, which "relied on" new banking and finance.
- **Thematic focus:** Economic Systems (ECN). (The CED prints "Economics Systems" on this page; the
  source file records that as printed.)
- **Illustrative examples** (optional; the CED says they "are provided as" examples and are not
  required): for transnational businesses, the Hong Kong and Shanghai Banking Corporation (HSBC) and
  "Unilever based in England and the Netherlands and operating in British West Africa and the Belgian
  Congo"; for financial instruments, stock markets and limited-liability corporations. The CED gives
  no example for KC-5.1.III.A or KC-5.1. This story uses all four, because each carries a link in the
  story, and handles Unilever's dates with care (section 9).
- **Sample activity:** the CED gives none for 5.7. The page lists a classroom resource, "Teaching
  Consumerism in World History"; it is not used here.

**Five things in these sentences that are easy to drop.**
1. **"Began abandoning ... partly in response."** Two qualifiers. Western European countries *began*
   (Britain first, others in the 1860s, and several turned back to tariffs from 1879), and Smith's ideas
   were *part* of the reason: manufacturers who wanted cheap food and open markets, and a famine in
   Ireland, mattered too.
2. **"Mercantilism."** The before. Students met it in 4.5 ("a kingdom grew strong by bringing in more
   gold and silver than flowed out"); the change only makes sense against it.
3. **"Relied on new practices in banking and finance."** The businesses are the CED's subject, but the
   Key Concept says they depended on banking and finance. Limited liability, stock markets and banks
   are how they grew, not a separate list.
4. **"For some."** Industrial capitalism raised living standards "for some." An answer that says
   industry made everyone richer has dropped the CED's own limit.
5. **"Availability, affordability, and variety."** Three different changes to consumer goods: more of
   them, cheaper, and more kinds. And "continued improvement in manufacturing methods" is the cause.

## 2. Constraint check (what students already see, and what is out of line)

Read only for contradictions, not as the source of the story. Surfaces read: the lesson data
(`assets/data/lesson-5-7-economic-developments-and-innovations.js`), the renderer config, the First &
10 entry in `scripts/lib/reading-content/unit-5.js`, the deep reading
`scripts/lib/deep-reading-content/topic-5-7.js`, the BeInTheRoom entry in `scripts/build-unit5-rooms.js`,
the map spec in `scripts/lib/instructional-map-specs.js`, the network atlas entry in
`scripts/lib/unit5-atlas-content.js`, the deep audit, the unit story map, the 4.5 First & 10
(mercantilism) and the 5.3 and 5.6 First & 10s (what students were last taught).

**Consistent with the CED:**
- The renderer config's `collegeBoardKeyConcepts` carries learning objective H and all three Key
  Concepts in the CED's wording, with the four illustrative examples (corrected on 2026-10-20 in the
  5.1 build). The lesson data's copy differs only in a comma inside the Unilever example ("Unilever,
  based in England"); it is set to the CED's wording.
- The network atlas line ("Markets, finance, and corporations supported industrial capitalism. More
  consumer goods and wealth for some did not produce equal benefits for everyone.") agrees with the CED
  and is left alone.
- 4.5 taught mercantilism and chartered joint-stock companies (the VOC); 5.3 taught Adam Smith's pin
  workshop for specialization only and named "Adam Smith's free-trade argument (5.7)" as bridge; 5.1
  named "Adam Smith and free trade (5.7)" as not taught. 5.6 hands forward: "All this industry made
  goods, and goods had to be paid for, traded, and financed. Who owned the factories, and how did money
  move around the industrial world? That is Topic 5.7."
- The Evidence Lab's limited-liability and HSBC text cards point at the right Key Concept; both are
  rewritten to the story and its sources.

**Out of line, each fixed inside this build:**
1. **Half the topic teaches Unit 6's economic imperialism** (the deep audit's "Repair"). Learning
   Target 2, its success criterion, Checkpoint 2, the third lecture card, First & 10 Section 4, the
   map and its four-card key, the Skill Builder, the deep reading's last part and the BeInTheRoom (the
   Ottoman Public Debt Administration, 1881) teach debt, informal empire in Latin America, the Ottoman
   debt and China's treaty ports. That is Topic 6.5, Economic Imperialism (KC-5.2.I.E). The gold
   standard, which no Unit 5 Key Concept names, fills most of another card. All of it leaves 5.7, with
   one bridge line to Unit 6.
2. **KC-5.1 has no surface.** No target, criterion, card, reading section or checkpoint teaches
   standards of living or consumer goods (the deep audit's first repair item).
3. **The reasoning move and skill on the page.** The reading's badges read Causation, Comparison and
   Argumentation and its questions ask for those; the Skill Builder teaches argumentation; Checkpoint
   2 declares "Causation and contextualization." The CED's reasoning process is Continuity and Change
   and its skill is 5.B, relating one development to another.
4. **Invented or unverifiable quotations, each removed:**
   - "J.P. Morgan on Railroad Consolidation (c. 1890)": "Competition is a destructive force ..." No
     source is given and none was found; it reads as a modern paraphrase written as a quotation.
   - "The Ottoman Public Debt Administration (1881)": a quoted "decree" naming the revenues and the
     bondholder groups. The wording is not the Decree of Muharrem's, and the topic is Unit 6's.
   - The Primary Source, "The Anti-Corn Law League, Free Trade as Moral Mission (1843)," is an
     "adapted excerpt" presented as League text, with figures ("perhaps five percent," "ten thousand
     men") that cannot be traced. Replaced with Adam Smith's own words (section 11).
   - Richard Cobden's "principle of gravitation" passage is real (a speech in Manchester, 15 January
     1846, not "in Parliament"), but the sentence joined to it ("The result of our labours is to
     increase the power and the resources of a nation already the greatest manufacturing country in
     the world") could not be found in it. Removed with its card.
5. **Factual problems, flagged for the ledger, each leaving with its surface:**
   - "The UK Companies Act of 1862 established general limited liability" (the reading, a lecture card,
     a criterion, Checkpoint 1): general limited liability came with the Limited Liability Act of 1855
     and the Joint Stock Companies Act of 1856; the 1862 Act consolidated the law. Corrected.
   - "Rothschild family network, banking houses in London, Paris, Frankfurt, Vienna, and Naples, financed
     ... railroads" and "By 1900, a handful of investment banks exerted more influence over industrial
     economies than many governments": the second is a judgment stated as fact. Removed.
   - "House of Morgan ... controlling one-sixth of American railroad mileage": a figure with no source.
     Removed.
   - "Britain had invested approximately £4 billion overseas, more than France and Germany combined"
     (the map key): Unit 6's material. Removed.
   - The Evidence Lab's Standard Oil octopus (1904) and "Bosses of the Senate" (1889) cartoons are about
     American trusts and politics; the first is after 1900 and the second is 5.8's question (reactions).
     Both leave.
   - The BeSurreal (a Lancashire merchant in the Cotton Famine of 1862, deciding whether to back the
     Confederacy) is real history but answers no 5.7 Key Concept, and it claims "your workers ... have
     held public meetings declaring their support for the Union cause," which historians now treat as
     only part of the story. Replaced (section 11).
   - BeInTheRoom's alignment block names `KC-5.7.I–II` and `KC-5.7.II.A–D`, codes the CED does not have
     (story map conflict 2), and an objective the CED does not print. Replaced with the scenario.
6. **Leftovers:** `first10.note` says "build your AI Coach prompt"; the reading still carries a
   `builderBody` about building an AI Coach prompt (retired 2026-08-31), a `readingEyebrow` and support
   headings unlike its siblings, unpadded question numbers and a footer note; the lesson's
   `evidenceLab.items` bank is read by no renderer; the title reads "Economic Developments and
   Innovations" where the CED reads "Economic Developments and Innovations in the Industrial Age" (story
   map conflict 3).
7. **Pictures from other topics (`stableImages`):** the VOC logo, the Waldseemüller map, the casta
   painting, Columbus taking possession, the Pueblo Revolt mural, the Florentine Codex smallpox page, a
   Persian astrolabe, da Gama's pillar, Magellan and the 1700 world map. None has a 5.7 job; all leave.
   The lecture card's "Port of Buenos Aires" picture leaves with the economic-imperialism card.

## 3. The ninth-grade story

Topic 5.6 ended on a question: all this industry made goods, and goods had to be paid for, traded and
financed. Who owned the factories, and how did money move around the industrial world? This topic
answers it in three parts, and in each part something changed between 1750 and 1900 while something
else carried on.

**Part 1: the rules of trade.**

**The old rules.** In Topic 4.5 you met mercantilism: most European rulers believed a kingdom grew
strong by selling more to other countries than it bought from them, and by keeping its colonies' trade
for itself. So governments taxed imports, banned some foreign goods, and gave a few companies the
sole right to trade in a region. Britain's East India Company had that kind of monopoly on British
trade with Asia.

**A new argument.** In 1776 a Scottish thinker, Adam Smith, published *The Wealth of Nations* (you
met his pin workshop in Topic 5.3). Smith attacked what he called "the mercantile system." A sensible
family, he wrote, never makes at home what it would cost more to make than to buy: "The tailor does
not attempt to make his own shoes, but buys them of the shoemaker." A country, he argued, should do
the same: "If a foreign country can supply us with a commodity cheaper than we ourselves can make it,
better buy it of them." Taxes and bans on imports, he said, made ordinary buyers pay more so that a
few producers could profit. Let people buy and sell freely, and the whole country would grow richer.
Later writers called ideas like his *laissez-faire*, French for "let them do it" (Smith did not use
the phrase himself), and the policy of trading without heavy taxes on imports and exports *free trade*.

**Britain changes the rules.** Smith's ideas spread slowly. The biggest test was food. Britain's Corn
Laws, passed in 1815, taxed imported grain ("corn" meant grain) to keep prices high for British
landowners. In 1838 factory owners and merchants in Manchester started the campaign that became the
Anti-Corn Law League, led by Richard Cobden and John Bright. They argued that cheap bread would help
workers and open foreign markets to British cloth. When a potato blight destroyed
much of Ireland's potato crop in 1845 and famine began, Prime Minister Robert Peel decided the Corn Laws had to go, and in 1846
Parliament repealed them, splitting his own party. By 1860 Britain had ended its taxes on
imported factory goods, keeping a few, such as those on tea, sugar and wine, mainly to raise money. Smith's arguments were part of the reason; so were the interests of
manufacturers who wanted cheap food and open markets, and the famine.

**Others follow, for a while.** In 1860 Britain and France signed the Cobden-Chevalier Treaty, cutting
taxes on each other's goods, and in the 1860s a chain of similar treaties lowered tariffs across much of
Western Europe. But not everyone kept going. From 1879 the new German Empire (Germany became one country in 1871) put taxes back on
imported grain and iron to protect its farmers and factories, and the United States, which had raised
its tariffs on factory goods in 1861, kept them high.
Britain stayed with free trade. Western Europe had *begun* to abandon mercantilism, as the CED says,
but not every country, and not for good.

**Part 2: the shape of business.**

**The old way.** Companies that sold shares to investors were not new: the VOC had done it in 1602 (4.5),
and its shares were bought and sold in Amsterdam. But from 1720 to 1825, forming such a company
in Britain usually took a special grant from the government (a royal charter or an act of Parliament), and most businesses were owned by one family or a
few partners, as Richard Arkwright's mill at Cromford (Topic 5.3) was. If a partnership failed, each partner
could lose his house and savings to pay its debts.

**Three new tools.** Industry needed far more money than a family had: a railway or a steamship line
cost more than any few partners could pay. Three practices in banking and finance changed that.
- **Limited liability.** A law of 1855 let companies formed by ordinary investors limit what their
  owners could lose to what they had put in, not everything they owned, and a law of 1856 let almost
  any group of seven or more people in Britain register such a company. France passed similar laws in 1863 and 1867. With less to lose,
  thousands of people with modest savings could invest.
- **Stock markets.** Shares could be bought and sold on a stock exchange, so an investor could get
  money back without waiting for the company to close. London had had a stock exchange since the
  1700s; in the railway boom of the mid-1840s, crowds of British investors bought railway shares; and
  an American print of 1886 shows the exchanges of eight cities, from New York and Chicago to London,
  Paris, Berlin, Hamburg, Frankfurt and Brussels.
- **Banks that worked across borders.** Banks lent to companies, changed one currency into another,
  and paid bills between ports far apart.

**Businesses that crossed borders.** Trade and production now stretched around the world, and some
businesses grew to match. The Hongkong and Shanghai Banking Corporation (HSBC) opened in Hong Kong in March
1865, started by Thomas Sutherland, a Scot who worked there for a shipping company, with a committee of
merchant firms, to give local businesses better banking for their trade. It opened in Shanghai a month
later and in London that summer, and by 1900 it worked in 16 countries and territories. One of the
firms on its first committee, Dent & Co., had grown rich trading opium into China, a trade Britain had
forced China to accept by war (Unit 6). In England, William Lever began selling Sunlight Soap in 1884, made with oils from tropical
plants such as coconut and palm kernels; he registered its name in the United States by 1886 and built
a factory town, Port Sunlight, from 1888. In 1890 the business became a limited company, Lever Brothers,
Limited, and from 1894 it sold shares to the public. In the Netherlands, the Jurgens and Van den Bergh families
turned butter trading into margarine factories and sold across the North Sea to England. In 1929, after
this unit, Lever Brothers and the Dutch margarine makers joined into one company, Unilever, based in
both England and the Netherlands and running plantations and trading firms in British West Africa and
the Belgian Congo: the company the CED names grew out of these nineteenth-century businesses.

**Part 3: the goods people could buy.**

**More, cheaper, more kinds.** Around 1750, cotton thread was spun by hand. Once machines spun it,
its price fell fast: by 1815 even the coarsest cotton yarn cost about a third of its early 1780s price,
counting for rising prices (Harley). Factories kept improving how they made things, so goods became more
available, more affordable and more varied. Machine-spun cotton cloth (Topic 5.3) kept falling in price
long after the first mills. Soap that grocers had cut from long bars came in wrapped, branded bars like
Sunlight, advertised to every household. Ships and railways (5.5) brought fruit, tea and wheat from
far away to city markets.

**For some.** In Britain, one careful estimate (Feinstein) finds that working families' standard of
living rose by less than 15 percent from the 1780s to the 1850s (others had found faster gains); most
historians agree it grew much faster from about 1860 to 1900. But many city workers stayed poor (Topic 5.9),
and many of the people who grew the cotton, palm oil and tea did not share in the gains (Unit 6). The
CED's word is exact: standards of living rose "for some."

**What changed, and what continued.** Changed: Britain and, for a time, much of Western Europe moved
from mercantilism toward free trade; businesses grew larger and crossed borders, relying on limited
liability, stock markets and banks; goods became cheaper, more plentiful and more varied. Continued:
companies that sold shares, and markets for those shares, were older than industry; many countries
kept or went back to tariffs; and the gains went to some people and not others.

**How the changes connect (5.B).** Each development relates to another. Free trade and cheaper
shipping made trade more global; global trade gave businesses a reason to grow across borders; those
businesses relied on banks, stock markets and limited liability to raise and move money; and the
factories they paid for made goods cheaper.

**Myths to drop.** "Adam Smith said governments should do nothing": he wrote that government had
three duties, defense, justice, and public works and institutions that no private person would
profitably build. "Free trade won everywhere": Germany went back to tariffs from 1879 and the United
States kept them. "Corporations were invented in the 1800s": joint-stock companies and share trading
go back to the VOC; what changed was who could form one and how little a shareholder could lose.
"Industry made everyone richer": the CED says "for some."

**So, how did economic systems, ideologies and institutions develop, and how did they contribute to
change?** An idea, free trade, persuaded Britain to drop the Corn Laws in 1846 and much of Western
Europe to lower tariffs, though not everyone and not for good. Institutions, limited-liability
companies, stock markets and banks, let businesses such as HSBC and Lever Brothers grow large and cross
borders. And industrial capitalism made goods cheaper and more varied, raising living standards for
some.

**And it hands on a turn.** Not everyone gained from this new economy, and not everyone accepted it.
Workers organized, reformers pushed for new laws, and some thinkers imagined a different system. That
is Topic 5.8.

## 4. The spine

**Between 1750 and 1900 the rules of the economy changed: Britain, and for a time much of Western
Europe, moved from mercantilism toward free trade, partly persuaded by Adam Smith; new practices in
banking and finance let big businesses work across borders; and industrial capitalism made goods
cheaper and more varied, raising living standards for some. Shares, tariffs and unequal gains carried
on.**

The story map's spine ("Europe dropped mercantilism for free trade, big transnational businesses ran on
new banking and finance, and industrial capitalism made more goods cheaper, raising living standards
for some") is kept in substance; the build adds what continued, because the reasoning move is
Continuity and Change, and "began" and "for some," because the CED says them.

"Moved from mercantilism toward free trade, partly persuaded by Adam Smith" is KC-5.1.III.A; "new
practices in banking and finance let big businesses work across borders" is KC-5.1.III.B; "made goods
cheaper and more varied, raising living standards for some" is KC-5.1.

Shorter for the wall: **Freer trade. Bigger business. Cheaper goods, for some.**

## 5. Must-have evidence and what each one proves

| Evidence | CED anchor | What it proves |
|---|---|---|
| Mercantilism (4.5); import taxes and bans; the East India Company's monopoly | KC-5.1.III.A ("mercantilism") | The **before**. |
| Smith, *The Wealth of Nations*, 1776: the tailor and the shoemaker; "better buy it of them" | KC-5.1.III.A ("Adam Smith's theories") | The **idea** that challenged it, in his own words. |
| Corn Laws, 1815; the Manchester campaign, 1838; Irish famine, 1845; repeal, 1846 | KC-5.1.III.A ("adopting free trade policies, partly in response") | The **change**, and that Smith was **part** of the cause. |
| Cobden-Chevalier Treaty, 1860, and the 1860s treaties; Germany's tariff, 1879; U.S. tariffs | KC-5.1.III.A ("began") | The change **spread, and was partly reversed**: continuity. |
| The VOC's shares (1602) and Amsterdam's share market; family partnerships and unlimited risk | KC-5.1.III.B | What was **old** in business. |
| Limited liability, 1855 and 1856; the 1886 print of eight cities' exchanges; the railway-share boom of the mid-1840s | KC-5.1.III.B ("new practices in banking and finance"; the CED's examples) | The **new tools**. |
| HSBC, 1865: Hong Kong, Shanghai, London; 16 countries and territories by 1900 | KC-5.1.III.B (the CED's example) | A **transnational business** built on banking. |
| Lever's Sunlight Soap, 1884; U.S. trademark, 1886; Port Sunlight, 1888; the Dutch margarine makers; Unilever, 1929 | KC-5.1.III.B (the CED's example) | A business that **crossed borders**, and where the CED's Unilever came from. |
| Cotton cloth prices falling (5.3); branded soap; fruit and wheat from far away | KC-5.1 ("availability, affordability, and variety") | **Consumer goods** changed. |
| Real wages: little gain to the 1850s, faster gain after about 1860; the poor of 5.9; producers in Unit 6 | KC-5.1 ("for some") | **Who gained**, and who did not. |

Named examples are evidence inside a claim. None earns its own slide unless the story needs it.

## 6. Narrative beats

1. **Teacher Preflight.**
2. **BeReady.** No notes. Three prompts from memory:
   (a) From 4.5: what did mercantilism say made a kingdom strong? (Selling more than it bought; bringing
       in gold and silver; keeping its colonies' trade for itself.)
   (b) From 5.3: what did Adam Smith's pin workshop show? (Splitting work into small jobs let ten men make
       far more pins.)
   (c) From 5.6: who paid for the first factories in Egypt and Japan? (The state, with money from
       farmers.)
   **Bridge:** "Factories made more goods than ever. Who would own them, who would pay for them, and
   what rules would they be sold under?"
3. **Topic question on screen, over a cinematic picture:** How did trade, business and the goods
   people bought change between 1750 and 1900, and what stayed the same?
4. **First & 10.**
5. **The old rules:** mercantilism, import taxes, monopolies (KC-5.1.III.A).
6. **A new argument:** Adam Smith, 1776, in his own words (KC-5.1.III.A).
7. **Britain changes the rules:** the Corn Laws, 1815 to 1846 (KC-5.1.III.A).
8. **Others follow, for a while:** 1860, the 1860s, 1879 (KC-5.1.III.A).
9. **Checkpoint 1.**
10. **The skill (5.B): how one development relates to another**, modeled on a neutral everyday case.
11. **The old way of business, and three new tools:** limited liability, stock markets, banks
    (KC-5.1.III.B).
12. **HSBC** (KC-5.1.III.B).
13. **Lever's soap, the Dutch margarine makers, and Unilever** (KC-5.1.III.B).
14. **Skill Builder:** relate two developments (5.B).
15. **More, cheaper, more kinds:** consumer goods (KC-5.1).
16. **For some:** who gained and who did not (KC-5.1).
17. **Myths.**
18. **Retelling slide** (section 7).
19. **AP synthesis:** the objective answered in a sentence, then the hand-off to 5.8.
20. **Landing, over a cinematic picture.**

## 7. Retelling slide

A before, after and continued table, one row for each Key Concept, so a student can redraw it from
memory:

| | Around 1750 | By 1900 | What carried on |
|---|---|---|---|
| **Trade** | Mercantilism: import taxes, bans, monopolies | Britain trades freely; much of Western Europe lowered tariffs in the 1860s | Germany back to tariffs from 1879; the U.S. kept them |
| **Business** | Families and partners; a few chartered companies | Limited-liability companies, stock markets, banks; HSBC and Lever cross borders | Selling shares goes back to the VOC |
| **Goods** | Costly, few kinds | Cheaper cloth, branded soap, food from far away | Gains for some, not all |

Result line: **Freer trade. Bigger business. Cheaper goods, for some.**

Why this shape: the reasoning move is Continuity and Change and the skill is 5.B. The rows are the
three developments; reading down a column shows how they relate (free trade, global business and
cheaper goods arrive together), and the last column is the continuity.

## 8. Owns / bridge-only (from the unit story map)

- **5.7 owns:** KC-5.1.III.A (free trade replacing mercantilism, partly from Smith's ideas),
  KC-5.1.III.B (transnational businesses relying on banking and finance, with HSBC, Unilever, stock
  markets and limited-liability corporations) and KC-5.1 (industrial capitalism, living standards for
  some, and consumer goods).
- **Bridge only:** mercantilism and the VOC (4.5): named as the before, not retaught. Smith's pin
  workshop (5.3): named as where students met Smith. Factory methods and cheap cotton cloth (5.3) and
  railways and steamships (5.5): named as causes of cheaper goods, not retaught. State-built industry
  (5.6): the hand-off in. Workers, unions, reformers and Marx (5.8): the hand-off out, one line.
  Classes and city poverty (5.9): one clause on who did not gain. Economic imperialism, debts, informal
  empire, the opium trade and the treaty ports, and Unilever's plantations and forced labor in the
  Congo (Unit 6, 6.5): one clause each, with "Unit 6." The gold standard: not taught; no Unit 5 Key
  Concept names it.
- **Story map change:** none to ownership. The spine adds what continued and the CED's two qualifiers.
  Unit-wide conflict 2 (BeInTheRoom's invented codes) is fixed for 5.7.
- **Hands to 5.8:** "Not everyone gained from this new economy, and not everyone accepted it. Workers
  organized, reformers pushed for new laws, and some thinkers imagined a different system." (The story
  map gives 5.7 no hand-off line; this one points at 5.8's spine.)

## 9. Fact-check list (the full claim ledger is `docs/TOPIC-5-7-CLAIM-LEDGER.md`)

The new claims, and the ones most likely to be wrong by the defect classes Units 2 to 5 kept finding:

- Quotations: the two Smith passages, from the Gutenberg text of *The Wealth of Nations* (Book IV,
  chapters 2 and 8), checked word for word; "the mercantile system" is his phrase; "laissez-faire" is
  not in the book.
- Dates: 1776; 1815, 1838, 1845, 1846 (the Corn Laws); 1860 (Cobden-Chevalier); 1879 (Germany's
  tariff); 1602 (the VOC); 1855 and 1856 (limited liability); 1865
  (HSBC: Hong Kong 3 March, Shanghai a month later, London July); 1884 (Sunlight Soap), 1886 (the U.S.
  trademark), 1888 (Port Sunlight); 1929 (Unilever).
- Numbers: 16 countries and territories by 1900 (HSBC's own history); "seven or more people" (the 1856
  Act).
- Anachronism to keep out: Unilever did not exist before 1929, and Lever's Congo plantations date from
  1911; the CED's example describes the later company. The lesson says so in one sentence.
- Superlatives and single causes to keep out: "the first modern free trade agreement" (Cobden-Chevalier
  is often called that; say who calls it so if it is used); "Sunlight was the world's first branded
  soap"; "Smith invented free trade"; "the repeal was caused by the League" or "by the famine" alone;
  "limited liability began in 1862."
- Causal links stated with care: why the Corn Laws were repealed (several causes); what limited
  liability did (lowered the risk, so more people invested); living standards (rose little before the
  1850s, faster after about 1860, by the measures historians use, and not for everyone).

## 10. Visual requirements per beat

Pictures were checked in Phase 6, all from the Library of Congress (Wikimedia Commons answered HTTP
429 to this session, as it did for 5.6).

| Beat | Historical object or visual | Why it carries the claim | Watch for |
|---|---|---|---|
| 3 | Photochrom: the Royal Exchange, London, about 1890 to 1900 | The question: a business district built on trade and money. | The Royal Exchange was a merchants' exchange, not the Stock Exchange. |
| 6 | Adam Smith, stipple engraving, 1805, after James Tassie's medallion | The person behind the idea. | Engraved after his death (1790), for an 1805 edition of his book. |
| 11 | "The World's Exchanges," print, New York, 1886: eight cities' exchanges | Stock markets in many countries. | A printer's showpiece; the London panel shows the Bank of England. |
| 13 | Lever Brothers' 1891 U.S. trademark registration, an advertisement for Sunlight Soap | A British business selling across the ocean, and branded goods. | A legal filing with an advert pasted in, not a shop poster. |
| 15 | The 1886 Sunlight "Self-Washer" trademark (lesson page) | A branded product. | |
| 18 | The retelling table (template) | | |
| 20 | Stereo photograph: fruit stands on the dock, Liverpool, 1893 | Goods from far away, and who sells and who buys them. | Left half of a stereo card; sold by an American firm. |

## 11. Calls made in this build (reported for Jeff to overrule)

Under the standing rule, nothing here waits for Jeff. Each call is listed with its reason in the final
report.

1. **Title:** the page takes the CED's title, "Economic Developments and Innovations in the Industrial
   Age." The reading's title is "Freer Trade, Bigger Business," on the reading, both lesson files, the
   deck and Canvas. The file names keep the old slug, as 5.5's and 5.6's did, so no link breaks.
2. **Skill Builder skill:** moves to the CED's suggested skill, 5.B, "Explain how a historical
   development or process relates to another historical development or process": name the two
   developments, say how one relates to the other (it caused it, made it possible, or answered it),
   and give a detail for each. Modeled on a neutral everyday example, practiced on free trade, banking
   and consumer goods.
3. **Learning targets:** two. Target 1, how and why Western European countries began moving from
   mercantilism to free trade, and what did not change (KC-5.1.III.A); Target 2, how transnational
   businesses relied on new banking and finance, and how industrial capitalism changed consumer goods
   and living standards for some (KC-5.1.III.B, with KC-5.1 in its criterion). Checkpoint 1 assesses
   Target 1; Checkpoint 2 assesses Target 2 and the learning objective (relate two developments, and
   say what changed and what continued) and declares Continuity and Change.
4. **Primary Source:** Adam Smith, *The Wealth of Nations* (1776), Book IV, chapter 2 (the tailor and
   the shoemaker) and chapter 8 ("Consumption is the sole end and purpose of all production"), quoted
   exactly from the public-domain text, with three questions. It replaces the adapted League pamphlet.
5. **Map module:** "Trade and Money, 1838 to 1900," a world map with Britain, France, Germany, the
   United States, and Hong Kong and Shanghai shaded, and three numbered arrows: Britain and France's 1860
   treaty, HSBC's London office (1865), and Lever's U.S. trademark (1886). It replaces the
   economic-imperialism map.
6. **Evidence Lab:** six cards: five real objects (the 1891 Sunlight trademark advertisement, "The
   World's Exchanges," the Royal Exchange photochrom, the Liverpool dock photograph, the 1805 engraving
   of Smith) and one text card, Smith's "three duties" of government; never an AI picture.
7. **BeSurreal:** a fourteen-year-old helping in a grocer's shop in a Lancashire mill town in 1890, when
   a crate of wrapped Sunlight Soap arrives by railway, writing to a grandmother about what has changed in
   the shop since her day and what has not: consumer goods and "for some" seen by one person. It
   replaces the Cotton Famine letter. (A Liverpool grain clerk was considered and dropped: 5.5's
   BeSurreal already uses one, and the Corn Laws are the BeInTheRoom.)
8. **BeInTheRoom:** "The Debt Conversion Table" (the Ottoman Public Debt Administration, 1881, which is
   Unit 6's) is replaced by "The Corn Law Vote": London, May 1846, members of Parliament deciding
   whether to repeal the Corn Laws, with the League, landowners, a worker and the Irish famine in the
   evidence. The old file is removed (it stays in git history for 6.5's build) and the lesson links the
   new one.
9. **Deep reading:** rebuilt around this story.
10. **Required modules** (Phase 8, chosen under Jeff's rule of 2026-10-23): 02 First & 10, 06
    Checkpoint 1, 10 Checkpoint 2, and 05 Skill Builder, which practises the CED's suggested skill for
    5.7 (5.B) on the topic's three developments.
