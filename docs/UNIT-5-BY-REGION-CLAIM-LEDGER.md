# Unit 5 by Region: Claim and Review Ledger

**Resume here:** pass 1 is done and every finding has a disposition. Next: recapture the
chapters from `ebook/unit-5.html` and run review pass 2 with four fresh reviewers.

Part Two of the Unit 5 eBook volume (`ebook/unit-5.html`), regional chapters generated from
`scripts/lib/region-content/unit-5-*.js`. Built under Jeff's standing rule of 2026-10-12: story and
reading approval are delegated to the independent reviewer loop. Reviewer findings are written here
as `PENDING`, and pushed, before any fix (standing rule of 2026-11-16). Nothing here is on `main`
until Jeff says "ship it".

**The CED decides scope; scholarship decides truth.** The chapters retell
`scripts/lib/ced-source/unit-5.js` (transcribed 2026-10-20 from the Fall 2026 CED, pp. 93 to 110).
`scripts/test/region-chapters.test.js` holds each chapter's Key Concept codes, topic links, six-sided
closing and Argue it move to that file.

## Does Unit 5 need it?

Yes. Unlike Unit 1, Unit 5's topics are cut by theme, not by place: the Enlightenment, revolutions,
the start, spread, technology, state role, economics, reactions and society of industry. Britain
appears in at least six of the ten topics, the Ottoman Empire in three, China and Japan in three or
four, and no student sees one region's whole 1750 to 1900 story in one place.

## Which regions, and why

Chosen from what the CED's Key Concepts and named cases actually cover:

| Chapter | Module | What the CED gives it |
|---|---|---|
| Britain | `unit-5-britain` | The causes of industrialization (KC-5.1.I.A), the factory (I.C), steam and coal (I.B), free trade (III.A), limited liability (III.B), living standards (5.1), workers, reformers, socialism (V.A, V.D, 5.3.IV.A.ii), classes, women, cities (VI.A to C), abolition and suffrage (5.3.I.C), Wollstonecraft (5.3.IV.B) |
| Europe (the Continent and Russia) | `unit-5-europe` | The Enlightenment (5.3.I, I.A), the Rights of Man (I.B), the French Revolution (5.3), liberalism and 1848 (IV.A.i), nationalism and unification (II.i to iii), the end of serfdom (I.C), de Gouges (IV.B), industry spreading to Belgium, the German states and Russia (5.1.I.D), the second industrial revolution (I.E), railways (IV), Marx and the Social Democrats (V.A, 5.3.IV.A.ii), Bismarck's insurance (V.D), tariffs (III.A) |
| The Americas | `unit-5-americas` | The American, Haitian and Latin American revolutions (5.3.III.B, I.B, 5.3), abolition (I.C), Seneca Falls (IV.B), US industry (5.1.I.D, I.E, I.B), railroads and migration (IV), the AFL (V.A), tenements (VI.C) |
| The Middle East | `unit-5-middle-east` | Ottoman reform and resistance (5.1.V.B), Muhammad Ali (V.C), Ottomanism (5.3.II.ii), Balkan nationalisms (II.i, II.iii), the falling share of manufacturing (5.1.II.B), Suez and the telegraph (IV) |
| East Asia | `unit-5-east-asia` | Self-Strengthening and its opponents (5.1.V.B), Meiji Japan (5.2.II.A, 5.1.V.C, I.D), China's falling share (II.B), HSBC (III.B), Japan's mill women (VI.B) |
| South and Southeast Asia | `unit-5-south-southeast-asia` | India's falling share of manufacturing (5.1.II.B), railways, cables and migration (IV), HSBC's Indian business (III.B), the Philippines' Propaganda Movement (5.3.II.ii, II.iii) |

**Europe has two chapters** because so much of the unit happened there that one chapter could not be
told as a story in fifteen minutes: Britain, where the factories began, and the Continent from France
to Russia, where the French Revolution and the new nations were made.

**No chapter, and the part intro says so:**

- **Sub-Saharan Africa.** No Unit 5 Key Concept names it. Its nineteenth-century story, European
  conquest and the export economies, is Unit 6's. Egypt, in North Africa, is in the Middle East
  chapter.
- **Oceania.** The CED mentions it only in optional examples (Maori nationalism); New Zealand's vote
  for women in 1893 is a single line in Topic 5.1. Migration to Australia appears in the Europe
  and Americas chapters only as a number.
- **Central Asia.** Russian railways and migration reach it, but the CED gives it no Key Concept.

## Key Concept coverage (all 30 codes must be taught somewhere)

Checked by `region-chapters.test.js`; this table is the plan.

| Code | Taught by |
|---|---|
| KC-5.3.I.A, KC-5.3.I | Europe; Americas |
| KC-5.3.I.B | Europe; Americas |
| KC-5.3.I.C | Britain; Europe; Americas |
| KC-5.3.II.i | Europe; Middle East |
| KC-5.3.II.ii | Europe; Middle East; South and Southeast Asia |
| KC-5.3.II.iii | Europe; Middle East; South and Southeast Asia |
| KC-5.3 | Europe; Americas |
| KC-5.3.III.B | Americas |
| KC-5.3.IV.A.i | Europe; Americas |
| KC-5.3.IV.A.ii | Britain; Europe |
| KC-5.3.IV.B | Britain; Europe; Americas |
| KC-5.1.I.A, KC-5.1.I.C | Britain (I.C also Americas, East Asia) |
| KC-5.1.I.B | Britain; Europe; Americas |
| KC-5.1.I.D | Europe; Americas; East Asia |
| KC-5.1.I.E | Europe; Americas |
| KC-5.1.II.B | Britain; Middle East; East Asia; South and Southeast Asia |
| KC-5.1.III.A | Britain; Europe |
| KC-5.1.III.B | Britain; East Asia; South and Southeast Asia |
| KC-5.1 | Britain |
| KC-5.1.IV | Britain; Europe; Americas; Middle East; South and Southeast Asia |
| KC-5.1.V.A | Britain; Europe; Americas |
| KC-5.1.V.B | Middle East; East Asia |
| KC-5.1.V.C | Middle East; East Asia |
| KC-5.1.V.D | Britain; Europe |
| KC-5.2.II.A | East Asia |
| KC-5.1.VI.A, VI.B, VI.C | Britain (VI.B also East Asia; VI.C also Americas) |

## Sources the chapters draw on

The Unit 5 topic chapters (`scripts/lib/deep-reading-content/topic-5-1.js` to `topic-5-10.js`) and
their claim ledgers (`docs/TOPIC-5-1-CLAIM-LEDGER.md` to `TOPIC-5-8-CLAIM-LEDGER.md`), keeping their
narrowings. For 5.9 and 5.10 the shipped chapters on `main` are older drafts that were never put
through the claim-ledger loop; their rebuilt, reviewed versions sit unshipped on
`claude/topic-5-10-build`. Where the regional chapters use 5.9 or 5.10 material, they use facts the
two versions agree on, or that the rebuilt version's review checked, and no regional chapter quotes a
sentence that exists only in the old drafts.

## Claims

One row per material claim that is new to the regional chapters or reworded from its topic source.
A claim carried word for word from a reviewed topic chapter is covered by that topic's ledger and is
not repeated here.

| Claim | Where | Source and what it says | Status |
|---|---|---|---|
| The Liverpool and Manchester Railway (1830) let cotton landed at Liverpool reach Manchester's mills by rail | Britain 02 | ICE, "Liverpool and Manchester Railway"; Rylands collections (2022): built to move raw materials and goods between the port and the mills; Liverpool was the main import port for raw cotton | VERIFIED |
| Reform Act 1832: the vote in the towns for men occupying property worth ten pounds a year, in effect most middle-class men | Britain 04 | Topic 5.9 rebuild ledger (`claude/topic-5-10-build`), the 1832 Act row | VERIFIED (5.9 rebuild) |
| Lord Salisbury, a marquess and great landowner, prime minister 1895 to 1902 | Britain 04 | Topic 5.9 rebuild ledger, Salisbury row | VERIFIED (5.9 rebuild) |
| 1833 survey: women and girls a majority in cotton, flax and silk mills (not wool); 1851 census, about four in ten women with a recorded job were servants | Britain 04 | Topic 5.9 rebuild ledger (narrowed there to "most kinds of mill"; the chapter names the three) | VERIFIED (5.9 rebuild) |
| Beeton (1861): the mistress compared to "the commander of an army" | Britain 04 | Topic 5.9 rebuild ledger, Beeton row | VERIFIED (5.9 rebuild) |
| Manchester more than 300,000 by 1851; the 1851 census found more than half the people of England and Wales in towns | Britain 04 | Topic 5.9 rebuild ledger | VERIFIED (5.9 rebuild) |
| Cholera about 53,000 registered deaths in England and Wales, 1848 to 1849; Snow 1854; Manchester life expectancy at birth about 25 to 28 years in the 1840s, against about 40 to 42 nationally | Britain 04 | Topic 5.9 rebuild ledger | VERIFIED (5.9 rebuild) |
| Serious-crime charges peaked in hard years such as 1842 and 1848, then fell; police forces caught and charged more | Britain 04 | Topic 5.9 rebuild ledger (Gatrell and Hadden) | VERIFIED (5.9 rebuild) |
| From 1880 every local authority had to require children to attend school | Britain 05 | Topic 5.8 chapter and ledger (Education Act 1880). The first draft said "every child had to attend", wider than the law; narrowed before review | NARROWED |
| Marx wrote the first volume of Capital in London | Britain 05 | Topic 5.8: Marx lived in London 1849 to 1883 and published Capital in 1867 (it was printed in Hamburg; "wrote", not "published", is the claim) | VERIFIED |
| Napoleon's invasion of Spain (1808) gave Spanish America's colonists their chance to break away | Europe 02 | Topic 5.2 section 04 ("The chance"). The first draft said it "set off" independence, a sole-cause wording; narrowed before review | NARROWED |
| Calas was executed in 1762 for killing his son to stop him becoming a Catholic, a crime he most likely did not commit | Europe 01 | Topic 5.1 section 02 ("His son had most likely taken his own life") | VERIFIED |
| Bismarck was the German Empire's chancellor by 1878 | Europe 05 | Standard (chancellor from 1871); Topic 5.8 calls him chancellor when he banned the socialists | VERIFIED |
| The United States ended slavery in 1865, after a civil war | Americas 04 | Thirteenth Amendment, ratified December 1865 (National Archives); not in a Unit 5 topic chapter | VERIFIED |
| In 1900 most American women still could not vote | Americas 04 | Women had full suffrage in Wyoming, Colorado, Utah and Idaho by 1896; the Nineteenth Amendment came in 1920. The first draft said they "could not vote in national elections", wrong for those four states; narrowed before review | NARROWED |
| Manhattan about 515,000 (1850) to about 1.4 million (1890); Riis, 1890, "three-fourths of its people live in the tenements" (of New York), the Bayard Street room | Americas 05 | Topic 5.9 rebuild ledger | VERIFIED (5.9 rebuild) |
| The Ottoman Empire in 1750 held the Balkans, Anatolia and the Arab lands, including Egypt | Middle East 01 | Standard; Topic 5.2 (Balkans) and 5.6 (Egypt a province) | VERIFIED |
| A quarter or more of the cotton spun in Britain in the 1780s came from the Ottoman Empire, through Smyrna | Middle East 04 | Topic 5.3 section 04 and its ledger | VERIFIED (5.3) |
| Abdulhamid II came to the throne in 1876 and suspended the constitution in February 1878 | Middle East 03 | Standard (accession 31 August 1876); Topic 5.8 | VERIFIED |
| In 1750 Qing China governed the largest population on earth | East Asia 01 | Standard (China roughly 200 million or more in the mid-1700s, ahead of India); no topic chapter states it | VERIFIED |
| In Japan in 1900 women were about 62 percent of private factory workers, most in textile mills | East Asia 04 | Topic 5.9 rebuild ledger (Tsurumi) | VERIFIED (5.9 rebuild) |
| The Mughal Empire was breaking up in 1750; over the next century the East India Company, with its own army, came to rule much of India | South and Southeast Asia 01 | Topic 5.4 ("the breakup of the Mughal Empire"; "much of India was ruled by the British East India Company"); standard | VERIFIED |
| India's census of 1901 found about two-thirds of the people living by farming | South and Southeast Asia 03 | Topic 5.10 rebuild ledger (Risley and Gait, Report on the Census of India, 1901) | VERIFIED (5.10 rebuild) |
| Many Indian and Chinese migrants later went home | South and Southeast Asia 04 | McKeown (2007 essay): returns from Southeast Asia ran at 63 to 75 percent of arrivals, 1870 to 1930 | VERIFIED |
| Spain had ruled the Philippines since the 1500s; Propaganda writers, many of them students in Europe, demanded equal rights with Spaniards; Rizal's Noli Me Tángere (1887) attacked the abuses of Spanish rule and the friars | South and Southeast Asia 04 | Library of Congress country study, Philippines ("Rizal and the Propaganda Movement"); Penguin reader's guide to Noli Me Tángere; Topic 5.2 for the demands and 1896 | VERIFIED |
| Chile ended slavery in 1823 and Mexico in 1829 | Americas 04 | Added in pass 1 (reviewer B): Abolition of slavery timeline (Chile 1823; Mexico, the Guerrero decree of 1829) | VERIFIED |
| London and India were joined by an overland telegraph from 1865, whose messages took days; the 1870 cable cut that to minutes | South and Southeast Asia 03 | Added in pass 1 (reviewer C): Encyclopaedia Iranica, "Indo-European Telegraph Department" (1 March 1865); atlantic-cable.com (first message 6 days 8 hours); Porthcurno Museum (1870 exchange about 5 minutes) | VERIFIED |
| The Propaganda Movement did not demand independence at first | South and Southeast Asia 04 | Library of Congress country study, Philippines (a reform movement; independence came with the Katipunan); Topic 5.2 ("demanded equal rights with Spaniards") | VERIFIED |

## Review findings

### Pass 1 (2026-11-16), four fresh reviewers

Packet: the six chapters and the Part Two intro as rendered text from `ebook/unit-5.html` (captured
in Chromium), a copy of `scripts/lib/ced-source/unit-5.js`, and a brief adapted from
`docs/review-brief-template.md`. Three history reviewers (two chapters each, top model, web
sources) and one CED, readability and consistency reviewer (all six, cheaper model). None saw the
build's reasoning, the ledger or the region-content sources.

**Pass 1 total: 37 findings (D 15, A 10, B 7, C 5), 4 of them duplicates. 34 FIXED, 2 ADJACENT (the old 5.9 and 5.10 drafts on `main`), 0 rejected. Three were errors in shipped topic chapters (5.6 Egypt's factory money, 5.7 the 1879 tariff), fixed on every surface that carries them.** Pass 2 runs on a fresh capture.

#### Reviewer D: CED alignment, readability, consistency (all six), 15 findings

All College Board quotations checked by script against the CED: word for word. Argue it moves and
answerability, cross-references and the part intro's account of missing regions held up.

1. **Part intro: "you meet Britain in six of them"**, but Britain's own header lists seven topics.
   Fix: drop the count or say seven. **FIXED: "in most of them".**
2. **Europe: the "spread" quotation (KC-5.1.I.D) is cited to Topic 5.5**; the CED puts it in 5.4
   and topic-5-4 teaches it. Fix: cite Topic 5.4. **FIXED: cited to Topic 5.4.**
3. **Europe: closing card "by 1900 most kings shared power with parliaments"** against the body's
   "many of them"; Russia's tsar had no parliament until 1906. Fix: "many". **FIXED: "many monarchs shared power with elected parliaments".**
4. **Europe: missing full stop**, "...disability in 1889 In 1884 Bismarck told...". **FIXED (introduced by a pre-review edit that dropped a clause).**
5. **Americas: "By 1783 Britain had recognized the United States, and in 1787 it wrote a
   constitution"**: "it" reads as Britain. Fix: name the United States. **FIXED: "the new country wrote a constitution".**
6. **East Asia: the CED splice "governments including 'Qing China, sought to...'"** reads as broken
   English. Fix: quote from "including the Ottoman Empire and Qing China". **FIXED: quotes from "including the Ottoman Empire and Qing China".**
7. **South and Southeast Asia: "as the CED says"**: "CED" is never explained to students. Fix: "the
   College Board". **FIXED: "the College Board".**
8. **East Asia: the Terms box defines "Indemnity", which the text never uses; "taels" unglossed;
   "one more piece of land" with no first piece named.** Fix: use "indemnity", gloss taels, name the
   Liaodong Peninsula. **FIXED: "indemnity" used in the text, taels glossed, the Liaodong Peninsula named.**
9. **East Asia: the Elman quotation is a hard double negative and drops topic 5.8's qualifier**
   ("though tight funding did limit the fleet"). Fix: paraphrase and restore the qualifier. **FIXED: paraphrased, with the qualifier restored (Elman, Modern Asian Studies 38:2, 2004, confirmed by reviewer C).**
10. **Britain 03: "Chartist" used before it is explained, and "'cheap bread' really meant cheap labor"
    skips the step** (lower bread prices would let employers cut wages). **FIXED: Chartists glossed in place, and the step stated (cheaper bread would let employers pay lower wages).**
11. **Britain deck: "the first country to make most of its goods by machine"**: the chapter gives no
    evidence for "most of its goods". Fix: "the first country to industrialize". **FIXED: "the world's first industrial country".**
12. **Americas 03 thesis: "Haiti helped them win"** rests on one expedition in the body. Fix: say what
    Haiti did. **FIXED: "Haiti armed one of Bolívar's expeditions".**
13. **East Asia closing card: "arsenals at Shanghai (1865) and Fuzhou (1866)"** against the body's
    "a navy yard at Fuzhou". **FIXED: "an arsenal at Shanghai (1865), a navy yard at Fuzhou (1866)".**
14. **South and Southeast Asia: "India's weavers clothed much of the world"** (deck and Argue it)
    goes beyond the chapter's evidence (cloth sold on three continents; about a quarter of
    manufactured goods). **FIXED: "sold cotton cloth on three continents", in the deck and the Argue it prompt.**
15. **Topic 5.10 (shipped chapter, not regional): "Chartism was rejected"** sits oddly beside Britain's
    "five of the six points later became law". **ADJACENT, no change: the shipped 5.10 chapter is the older draft; its reviewed rebuild on `claude/topic-5-10-build` no longer says "Chartism was rejected". Reported.**

Reviewer D also listed as unverified, not as defects: Bismarck's 1884 words, Beinin's and Elman's
quotations, Bolívar's phrases, the 62 percent figure for Japan, HSBC's 16 countries, Roy's handloom
figures and the 1815 and 1832 cloth values. Each is a verified row in its topic ledger or in this
ledger's Claims table.

#### Reviewer A: history, Britain and Europe, 10 findings

1. **Europe 05: the Manifesto "begins" with "The history of all hitherto existing society..."**: it
   begins with the preamble ("A spectre is haunting Europe"); the class-struggle sentence opens
   Section I, as topic-5-8 says. **FIXED: "Its first section begins: ..." (matches topic 5.8).**
2. **Britain 03: limited liability presented as what made railway finance possible, then a railway
   boom ten years before the laws.** Railway companies of the 1830s and 1840s were each incorporated
   by their own Act of Parliament. Fix: separate the two. **FIXED: railways raised money through their own acts of Parliament, the boom of the mid-1840s came first, and the 1855 and 1856 laws then made limited companies general.**
3. **Britain 03: "Laws of 1855 and 1856 let almost any group of seven or more..."**: the seven-person
   rule is the 1856 Act's; the 1855 Act covered larger companies (more than 25 members). Topic 5.7
   separates them. **FIXED: 1855 for larger companies, 1856 for any seven or more (as topic 5.7).**
4. **Europe 04: the "spread" quotation cited to Topic 5.5** (same as D2). **FIXED with D2.**
5. **Britain 04: Snow "mapped deaths around one water pump ... and showed that the water carried
   it"**: the popular simplification; the course's topic chapter says the stronger evidence was the
   two-water-company comparison and that doctors were not persuaded at once. **FIXED: the map and the two-company comparison, and doctors not persuaded for years (as the course's 5.9 chapter).**
6. **Europe 04: "From 1879 Germany put tariffs back on imported grain and iron ... after cheap American
   grain drove prices down"**: one cause for two tariffs; grain came from Russia too, and the iron
   tariff answered the slump after 1873. Topic 5.7 has the same compression. **FIXED here and in the shipped course: grain tariffs against cheap American and Russian grain, iron tariffs after the slump from 1873 (Wikipedia, "German tariff of 1879" and "Marriage of Iron and Rye"; Britannica, "Germany: the economy, 1870-90"). Same correction in `deep-reading-content/topic-5-7.js` and the 5.7 teacher note in `teacher/data/topic-5-7-teaching-base.js`.**
7. **Britain 03: "a free trade country, and it stayed one"** has no end date; Britain left general
   free trade in 1932 (McKenna duties from 1915). **FIXED: "it stayed one through 1900".**
8. **Britain 03: "In 1776 Adam Smith, a Scottish professor"**: he resigned his Glasgow chair in 1764.
   Topic 5.7 has it right ("who had been a professor"). **FIXED: "a Scottish thinker who had been a professor at Glasgow" (as topic 5.7).**
9. **Europe 05: missing full stop after 1889** (same as D4). **FIXED with D4.**
10. **Manchester's population: Britain and topic 5.3 say about 23,000 in 1773; the shipped topic 5.9
    and 5.10 chapters say about 25,000 in 1772.** The 1773 count (about 22,500 for the township) supports
    23,000. Adjacent to this build. **ADJACENT, no change here: the regional chapter's 23,000 (1773) is right; the shipped 5.9 and 5.10 drafts' 25,000 (1772) is the old wording, and the 5.9 rebuild on `claude/topic-5-10-build` already says about 23,000 in 1773. Reported.**

Checked and held up (reviewer's list): every CED quotation in both chapters; Bairoch's shares;
population and enclosure figures; Darby, Bridgewater, the 1624 law, Arkwright, Newcomen, Watt;
Harley's yarn price (working paper opened); Feinstein; the 1833 survey (Burnette's table); the
Corn Laws sequence; Lever and Unilever; abolition, union and reform-act dates; Salisbury; the
Enlightenment dates and quotations; the French Revolution sequence; serfdom; unification; Cockerill,
railway kilometers, Hughes, BASF, Otto, Benz; the German party dates and Bismarck's 1884 words
(GHDI translation).

#### Reviewer B: history, the Americas and the Middle East, 7 findings

1. **Middle East 02 (and shipped topic 5.6): "long-staple cotton, first grown for sale in 1820 ...
   With that money, from the late 1810s, the government built"**: money from 1820 cannot have paid for
   factories begun in the late 1810s; the earlier crop monopolies (grain and others) did. Topic 5.6's
   useThis also says "through the cotton monopoly". **FIXED here and in the shipped course: the crop monopolies (grain and others first, cotton from 1820) paid for the factories. Same correction in the 5.6 deep reading and its "Use this" line, the 5.6 First & 10 (`reading-content/unit-5.js`, fingerprint moved in `readings-golden.js` with a dated note) and the 5.6 lesson data. Supported by the course's own sources: Panza and Williamson (2015), "the state purchased agricultural commodities (cotton and wheat)" (5.6 ledger).**
2. **Americas 04 and its card: abolition framed as beginning in 1834** ("from 1834 to Brazil in
   1888"): Chile ended slavery in 1823, Central America in 1824, Mexico in 1829, and Haiti earlier.
   **FIXED: Haiti, Chile (1823) and Mexico (1829) named before the 1834 sentence; the section dates and card now start at 1823.**
3. **Americas 05: Riis's "tenements" glossed as "crowded buildings for poor renters"**: Riis's
   three-fourths uses the legal definition he quotes himself, any building "occupied by three or more
   families, living independently and doing their cooking on the premises"; the gloss turns the figure
   into slum housing. Source: Riis (1890), ch. 2. **FIXED: the legal definition stated ("any rented building where three or more families lived and cooked; the worst were dark and badly crowded"), and the glossary to match.**
4. **Americas 04: "reform movements, driven by 'Enlightenment ideas and religious ideals'"**: the
   CED says these "influenced" the movements; "driven by" strengthens the quoted claim. **FIXED: "influenced by".**
5. **Middle East 03: the fez factory reads as a Tanzimat creation**; topic 5.8 has it opened by Mahmud
   II's government in the 1830s. **FIXED: opened by Mahmud II's government in the 1830s, fitted with steam about 1850 (as topic 5.8); the thesis says "ran", not "built".**
6. **Americas 05 thesis: "Factory methods reached the United States in a skilled worker's memory"**:
   one channel, not the only one (earlier attempts such as Beverly, 1787; Francis Cabot Lowell's power
   loom, from 1810 to 1812). **FIXED: "Factory spinning reached the United States partly in a skilled worker's memory".**
7. **Middle East social card: "the Balkan peoples chose their own nations"**: by 1878 only Greeks,
   Serbs, Montenegrins and Romanians had states; many others stayed in the empire. **FIXED: "Greeks, Serbs, Montenegrins and Romanians chose nations of their own".**

Checked and held up (reviewer's list): every CED quotation; Locke, the Stamp Act, the Declaration,
1778 to 1787; Saint-Domingue's figures, 1791, Toussaint's 1793 words, 1793 and 1794, 1802, 1803,
1804, Louisiana, 1862, the indemnity; 1808, 1810, Hidalgo; the Jamaica Letter quotations (Bertrand
translation; "wholly representative" not confirmed in the copy opened); Pétion; 1826; Brazil 1822;
the abolition dates; Mott and Seneca Falls; Slater, Lowell, Drake, Promontory, steel, Pearl Street,
Morrill; Hatton and Williamson's 55 million; the wheat gap; Manhattan's census figures; Bayard
Street; the AFL; the Ottoman army reforms; Muhammad Ali's dates, the 1840 powers, the 1841 firman,
Balta Liman; Gülhane's date and quoted wording (one translation; the "lofty Sultanate" sentence not
traced to a published English translation); 1856, 1869, 1876, 1878; Greece, Berlin, Suez, the cable.

#### Reviewer C: history, East Asia and South and Southeast Asia, 5 findings

1. **South and Southeast Asia 03 and its card: the 1870 cable meant "minutes rather than weeks by
   ship"**: London and India were already joined by the overland Indo-European telegraph from 1865,
   whose messages took days (the first, six days and more). The 1870 cable cut days to minutes. The card
   also puts the railways inside "within minutes". Sources: Encyclopaedia Iranica, "Indo-European
   Telegraph Department"; atlantic-cable.com, Indo-European page; Porthcurno Museum on the 1870
   exchange. **FIXED: the 1865 overland line (days, many relays) named, and the card no longer puts the railways "within minutes".**
2. **East Asia 02: the Elman box drops his qualification** ("but inadequate funding did set limits on
   Li Hongzhang's plans to expand the Northern Fleet"; Elman, Modern Asian Studies 38:2, 2004, opened).
   Same as D9. **FIXED with D9.**
3. **East Asia 04: "Within a week Russia, Germany and France forced Japan to give back..."**: only the
   demand came within a week (23 April 1895); Japan accepted on 5 May and returned Liaodong by a
   November convention. **FIXED: "demanded that Japan give back the Liaodong Peninsula ... and Japan gave in".**
4. **East Asia thesis and economic card: "the world's goods"**: Bairoch's shares are of manufactured
   goods only; the body says so, the heading and thesis do not. **FIXED: "manufactured goods" in the thesis and the card.**
5. **East Asia economic card: "sold it to Mitsui and Mitsubishi from 1880"**: 1880 was the decision;
   the sales the chapter names are 1887 and 1889. **FIXED: "decided in 1880 to sell it, and sold key works to Mitsubishi (1887) and Mitsui (1889)".**

Checked and held up (reviewer's list): every CED quotation; Bairoch's 1750 and 1900 shares; the Opium
Wars, Taiping, Zongli Yamen, Jiangnan, Fuzhou, the steamship company, the Tongwen Guan and 1898;
HSBC's dates and 16 countries (HSBC's own timeline); Perry, the treaties, the 1866 tariff and 1911;
the Meiji reforms and industry; the 62 percent figure (Tsurumi, 1984); treaty revision and
Shimonoseki; India's cloth figures and duties (Ray, 2009); Wadia and Trincomalee; Bombay to Thane;
the 1901 census; McKeown's migration figures; Rizal and the Propaganda Movement. Unverified but
consistent with the topic chapters: Prince Gong's line, the Tongwen Guan admissions, Woren's English
wording, Roy's handloom figures, Osaka Spinning running day and night.
