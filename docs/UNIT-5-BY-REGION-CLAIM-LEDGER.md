# Unit 5 by Region: Claim and Review Ledger

**Resume here:** shipped to `main` on 2026-11-16 (merge `86e09b5`) after three review passes, the
last one not clean. Since 2026-11-21 the chapters are being rewritten in plain language with Unit 4's,
on branch `claude/ebook-regional-reading-status-n1uc9j`; see "Plain-language and accuracy pass
(2026-11-21)" at the end of this file.

Part Two of the Unit 5 eBook volume (`ebook/unit-5.html`), regional chapters generated from
`scripts/lib/region-content/unit-5-*.js`. Built under Jeff's standing rule of 2026-10-12: story and
reading approval are delegated to the independent reviewer loop. Reviewer findings are written here
as `PENDING`, and pushed, before any fix (standing rule of 2026-11-16). Nothing reaches `main`
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
| From 1854 Indian owners built steam-powered cotton mills, first in Bombay; about 200 by the early 1900s, about five million spindles; yarn for handloom weavers and for China | South and Southeast Asia 03, deck, card | Added in pass 2 (reviewer G): 1911 Britannica, "Cotton" (164 mills in 1897-98, 204 in 1903-04; 4.2 to 5.2 million spindles); Bombay Spinning and Weaving Company founded 1854 (Wikipedia; Davar) | VERIFIED |
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

### Pass 2 (2026-11-16), four fresh reviewers

Packet recaptured from `ebook/unit-5.html` after commit `dec3bd83` (all pass 1 fixes in). New
pairings: Britain and the Middle East; Europe and East Asia; the Americas and South and Southeast
Asia; plus the CED, readability and consistency reviewer on all six. None saw pass 1.

#### Reviewer H: CED alignment, readability, consistency (all six), 13 items

1. **Americas 02: "In 1803, with his army dying in Saint-Domingue, Napoleon sold Louisiana"** drops
   topic 5.2's second cause ("and a new war with Britain coming"). **FIXED: "dying of yellow fever and a new war with Britain coming" (as topic 5.2).**
2. **Americas Argue it: "Between 1775 and 1826, most of the Americas broke away"**: Canada and the
   British, French and Dutch Caribbean stayed European, Cuba and Puerto Rico Spanish; 1775 never
   appears in the body. **FIXED: "Between 1776 and 1826, the United States, Haiti, Brazil and most of Spanish America broke away".**
3. **Manchester's size: 5.9 and 5.10 (shipped) say about 25,000 in 1772; 5.3 and Britain say about
   23,000 in 1773.** Same as pass 1 A10. **ADJACENT, same as pass 1 A10; no change here.**
4. **Middle East 04 "a quarter or more of the cotton spun in Britain came from the Ottoman Empire"
   beside Britain 01 "most of the cotton spun in Manchester was grown by enslaved people"**: different
   scopes, and "most" plus "a quarter or more" leaves little room. **FIXED with E1: the Middle East chapter now says "In the mid-1780s about a quarter of the raw cotton Britain imported"; Britain keeps "most of the cotton spun in Manchester", which leaves room for it.**
5. **Middle East 03: Ottomanism tied to KC-5.3.II.ii ("new sense of commonality ... harnessed by
   governments")**, while the CED lists Ottomanism as an optional example under the calls for national
   unification or liberation. **FIXED: the chapter now says in its own voice that Ottomanism tried to build a "new sense of commonality" around the empire, and says the College Board lists Ottomanism among its optional examples of calls for national unity. KC-5.3.II.ii stays claimed: the Ottoman government using that loyalty is what the sentence describes.**
6. **Terms boxes define words the body never uses**: Conscription (Middle East), Tariff, Nationalism,
   Migration (South and Southeast Asia), State-sponsored industry (Middle East, East Asia), Social
   insurance (Europe). **FIXED: conscription, state-sponsored industry (Middle East and East Asia), social insurance (Europe), tariff, migration and nationalism (South and Southeast Asia) now each appear in the body where the idea does.**
7. **Americas 02: comma splice**, "Dessalines fought on, yellow fever and the war destroyed the French
   army, and ...". **FIXED: three sentences.**
8. **South and Southeast Asia 02: "Power mattered too"** after a sentence about steam-powered mills
   reads as machine power. **FIXED: "The trade rules mattered too."**
9. **South and Southeast Asia: "friars" unglossed.** **FIXED: "friars, Catholic religious brothers".**
10. **Britain: "marquess", "monopolies" and "Corn Laws" (corn meaning grain) unglossed.** **FIXED: marquess, monopolies and "corn" glossed in place.**
11. **Europe "brought back slavery in the colonies in 1802" against Americas "in other French
    colonies".** **FIXED: Europe now says "in some French colonies, such as Guadeloupe".**
12. **Britain 02: "the world's first railway between two cities"**, a "first" (matches topic 5.5).
    **REJECTED: "the first railway between two cities" is the standard description of the Liverpool and Manchester (the Stockton and Darlington joined two towns and used horses for passengers at first) and matches topic 5.5 and its ledger.**
13. **Unconfirmed by this reviewer's searches**: four in ten women servants (1851), the 1833 survey
    majority, Manchester life expectancy 25 to 28 against 40 to 42. Not counted as defects by the
    reviewer. **NO CHANGE: not a defect claim. Each figure is a verified row in the 5.9 rebuild ledger; the 1851 servant share was corrected under E2, and the 1833 percentages were confirmed by reviewers A and E (Burnette).**

Held up (reviewer's list): every CED attribution word for word; Argue it moves and answerability
(South and Southeast Asia's "for whom" thinnest; the Middle East prompt's 1789 not in the body);
closing cards against bodies; shared facts across chapters and topics; cross-references; the part
intro against the CED.

#### Reviewer F: history, Europe and East Asia, 4 findings

1. **East Asia 01 mistake box: "Its share fell because the world's total grew far faster, while
   Chinese families kept spinning and weaving."** One cause; Bairoch also has China's own output
   shrinking after about 1830 and its per-person level falling (8, 6, 3 for 1750, 1830, 1900);
   Feuerwerker found hand weaving held up better. And "kept spinning" contradicts the paragraph above
   (machine-made thread replacing home spinning). Topic 5.4 claims the per-person fall for India only.
   **FIXED: "mostly because the world's total grew far faster. Bairoch also estimated that China's own output shrank after about 1830, though other historians think hand weaving held up better than he allowed. Chinese families kept weaving, more and more of it with machine-made thread." The topic 5.4 gap (a per-person fall named for India only) is an omission, not an error: ADJACENT, reported.**
2. **Europe 03: "These ideas set off revolutions across Europe in 1830 and 1848"**: a sole cause;
   topic 5.2 says "helped set off", and 1848 followed the bad harvests of 1845 to 1847 and the slump of
   1847. **FIXED: "helped set off", with the hard times after the bad harvests of 1845 to 1847 named for 1848 (as topic 5.2's "helped").**
3. **Europe 01 (and topic 5.1): Rousseau "began The Social Contract" with "Man is born free"**: the
   line opens Book I, Chapter 1, after a short introduction. **FIXED here and on every shipped 5.1 surface: the deep reading, the First & 10 (fingerprint moved with a dated note), the lesson data, the Skill Builder prompt in the renderer config, and the teacher note ("Book I, Chapter 1, opens").**
4. **Europe 01: "In most countries one church was the law"** could be read literally. **FIXED: "one church was the official church, and the law favored it over every other".**

Held up (reviewer's list): every CED quotation; both Argue it prompts; the intro; Locke (Second
Treatise sections 123 and 95); the French Revolution sequence; serfdom; unification; rail figures;
BASF, Otto, Benz; the German tariffs as corrected; the Manifesto's first-section line; the SPD dates
(19.7 percent in 1890); Bismarck's 1884 words (GHDI); every East Asia date and figure, including
Elman's text (p. 317, read in the PDF) and the Triple Intervention.

#### Reviewer E: history, Britain and the Middle East, 7 findings

1. **Middle East 04 (and topic 5.3): "In the 1780s a quarter or more of the cotton spun in Britain
   came from the Ottoman Empire, through Smyrna."** The 1911 Britannica (citing a US Census bulletin)
   gives Britain's raw cotton for 1786 to 1790 as about 70 percent West Indies, 20 percent "the
   Mediterranean countries", 8 percent Brazil, so the Ottoman share was at most a fifth in the late
   1780s. (Topic 5.3's ledger cites Hansard, 1847: about 5 of 19.9 million pounds from Smyrna and
   Turkey in 1786.) **NARROWED here and in topic 5.3's deep reading to "the mid-1780s ... about a quarter". Topic 5.3's ledger has two archival sources for 1786 to 1787 (Hansard 1847: about 5 of 19.9 million pounds from Smyrna and Turkey in 1786; Pereira, from BT 6/140: about 6.0 of 19.8 million in 1786 to 1787); the reviewer's 1911 Britannica average for 1786 to 1790 (20 percent Mediterranean) is lower for the late 1780s, so the decade-wide "a quarter or more" was too wide.**
2. **Britain 04: "the census of 1851 suggests about four in ten women with a recorded job were
   servants"**: Burnett (Victorian Web) gives 905,000 domestic servants among about 2.8 million employed
   women and girls, about a third; four in ten only with washerwomen and charwomen. **FIXED: "about one in three women with a recorded job was a domestic servant ..., and about four in ten worked in domestic service if washerwomen and charwomen are counted" (Burnett). The unshipped 5.9 rebuild says "about four in ten ... servants": ADJACENT, reported for that branch.**
3. **Middle East 04 "Ottomanism did not stop them" and the social card's "but"**: Greece was
   independent in 1830, before the 1856 decree and the 1869 law. **FIXED: "Greece had left before Ottomanism began; it did not stop Serbia, Montenegro and Romania in 1878", and the card reworded to match.**
4. **Middle East 03 (and topic 5.8): "In December 1876 the empire got a constitution and a
   parliament"**: the parliament first met in March 1877. **FIXED here and in topic 5.8's deep reading: the constitution in December 1876, the first parliament in March 1877.**
5. **Britain 03: "could now buy shares safely"**: limited liability capped the loss; it did not make
   shares safe. **FIXED: "without risking their homes".**
6. **Middle East Argue it: "Between 1789 and 1878"**: 1789 appears nowhere in the chapter. (Same as
   H's note.) **FIXED with H's note: the prompt now starts at 1787, the chapter's first date.**
7. **Topic 5.9 (shipped draft): "the Reform Act of 1832 in Topic 5.6"**: 5.6 never mentions it.
   Adjacent. **ADJACENT: the shipped 5.9 draft; its rebuild on `claude/topic-5-10-build` drops the cross-reference. Reported.**

Held up (reviewer's list): every CED quotation; both Argue it moves; the Britain industry, trade,
business, society, reform and city facts (including the 1833 inquiry percentages and Snow's two 1854
studies); the Middle East army, Egypt (Beinin's 1981 MERIP article), Ottoman reform, Balkan and route
facts. Unverified, not findings: the Aleppo and Damascus handlooms, Manchester's 25 to 28 years
(Davenport, EcHR 2021, disputes the low city estimates), the fez factory's steam date (some say
1843), the Gülhane wording, the yarn price.

#### Reviewer G: history, the Americas and South and Southeast Asia, 6 findings

1. **South and Southeast Asia: India's own steam-powered cotton mills left out of 1900** (deck, Argue
   it, economic card): the first Bombay mill opened in 1854, and by about 1900 India had roughly 190
   mills and about 5 million spindles, spinning yarn for handloom weavers and for China. Also, by the
   1890s to 1910s most Indian raw cotton went to Japan and continental Europe (Hansard written answer,
   11 July 1916), so "sold raw cotton to British mills" is safe only for mid-century. **FIXED: section 03 now says that from 1854 Indian owners built steam-powered cotton mills, first in Bombay, about 200 by the early 1900s with about five million spindles, spinning thread for handloom weavers and yarn for China (1911 Britannica, "Cotton": 164 mills in 1897-98, 204 in 1903-04, 4.2 to 5.2 million spindles; Bombay Spinning and Weaving Company, 1854). The deck and the economic card say India sold raw cotton "abroad", not to "Britain's mills"; the 1830s sentence in section 02 stays, since it is right for then.**
2. **Americas 02 thesis (and topic 5.2's): the enslaved "claimed those words for themselves, rose
   up"**: an implied "because" between the 1789 Declaration and the 1791 rising that the sources do not
   support (royalist leaders, the three-free-days rumour; liberty and equality language clear by 1793,
   when Toussaint fought for Spain). Sources: EHNE, "Saint-Domingue revolution, August 1791"; Dubois,
   Avengers of the New World (2004). Restore "fighting on Spain's side" before the 1793 quotation.
   **FIXED here and in topic 5.2's deep reading thesis: "enslaved people rose up in 1791, and within two years their leaders were claiming liberty and equality for themselves". The 1793 quotation now says Toussaint was fighting on Spain's side, and that he changed sides after Paris abolished slavery (as topic 5.2).**
3. **Americas 02: Louisiana sale with one cause** (same as H1). **FIXED with H1.**
4. **Americas deck: "a hemisphere of independent states"**: Canada, the Caribbean colonies, the
   Guianas, British Honduras, Puerto Rico and occupied Cuba in 1900. **FIXED: "a hemisphere made up mostly of independent states".**
5. **Americas 02 box (and topic 5.2): "began freeing them in 1793 to keep their side's soldiers"**:
   hard to decode and not quite right; they freed people to win them as soldiers for the Republic.
   **FIXED here and in topic 5.2's deep reading: "to win them as soldiers against Spain and Britain".**
6. **Americas 04 thesis: "held the words to their own terms"** is garbled. **FIXED: "insisted that those words meant what they said, for them too".**

Held up (reviewer's list): every CED quotation; both Argue it moves; every Americas date and figure
(including the abolition dates and the tenement definition); every South and Southeast Asia date and
figure (Bairoch, the trade figures, the duties, Wadia, 1853, Suez, the 1865 and 1870 telegraph times,
HSBC, Roy, the 1901 census, McKeown, Rizal); the part intro.

**Pass 2 total: 30 findings (H 13, E 7, G 6, F 4), 4 of them duplicates or already fixed. 22 FIXED or
NARROWED, 1 REJECTED (the first intercity railway), 1 no change (figures sourced, the one wrong one
fixed under E2), 2 ADJACENT (the old 5.9 and 5.10 drafts; the topic 5.4 per-person gap for China).
Down from 37 in pass 1, and smaller: no new myth, and most were compressions (one cause where there
were two), readability or scope. Five more small corrections reached shipped topic chapters (5.1,
5.2, 5.3, 5.8), each on every surface that carried it. Pass 3 runs on a fresh capture.**

### Pass 3 (2026-11-16), four fresh reviewers, the last pass allowed

Packet recaptured from `ebook/unit-5.html` after commit `ce7e82da` (all pass 1 and 2 fixes in). New
pairings: Britain and East Asia; Europe and the Americas; the Middle East and South and Southeast
Asia; plus the CED, readability and consistency reviewer on all six. None saw passes 1 or 2.

#### Reviewer L: CED alignment, readability, consistency (all six), 10 items

1. **Middle East social card: "Greece left the empire in 1830 ... despite the 1869 law"**: Greece
   left 39 years before the law. **FIXED: "Greece left the empire in 1830. Serbia, Montenegro and Romania left in 1878, nine years after the 1869 law".**
2. **Europe 03: "Crowds crowds demanded"**, a doubled word. **FIXED (introduced by the pass 2 fix for F2).**
3. **Britain: "Britain had all seven", "one of seven factors", "The College Board lists seven
   factors"**: KC-5.1.I.A says "A variety of factors ... including:", an open list. **FIXED: "Among the factors behind the Industrial Revolution, the College Board names seven", and "one of the seven factors the College Board names" here and in topic 5.3's deep reading. "Lists seven factors" stays where it appears: the CED does print seven.**
4. **South and Southeast Asia deck: "millions of its weavers were still at their looms"**: the body
   gives about a million in one province. **FIXED: "many of its weavers".**
5. **South and Southeast Asia card: "Railways from 1853 carried goods inland"**: the body says only
   that the first passenger train ran in 1853. **FIXED: "India's first passenger train ran in 1853".**
6. **East Asia religious card: "Confucian values" (not in the body) and "few scholars joined the
   Tongwen Guan"** (looser than the body's 30 of 98, few of them the hoped-for young officials).
   **FIXED: Woren is "a senior Confucian scholar" in the body, and the card says "the Confucian values he defended" and "fewer young officials joined the Tongwen Guan than the plan had hoped".**
7. **Europe 04 thesis: "after 1850 German firms led in new industries such as chemicals"**: the body
   shows activity, not leadership. **FIXED: "became leaders in new industries such as chemical dyes", with topic 5.5's "By 1914 Germany made most of the world's dyes" now in the body.**
8. **East Asia 01 box repeats "kept weaving ... machine-made thread" and sets "mostly because the
   total grew" beside "China's own output shrank" with no bridge.** **FIXED: the repeated sentence dropped; "Bairoch thought China's own output also fell after about 1830, though other historians think hand weaving held up better".**
9. **Middle East 04: "Greece had left before Ottomanism began; it did not stop..."**: ambiguous "it".
   **FIXED: "Ottomanism did not stop Serbia, Montenegro and Romania from leaving in 1878".**
10. **Unglossed terms**: spindles, arsenal, Anatolia, fez, Piedmont-Sardinia, Prussia, yarn, census.
    **FIXED: spindles, arsenal, Anatolia, fez, Piedmont-Sardinia, Prussia, yarn and census glossed in place.**

Held up (reviewer's list): every CED attribution word for word and in context; all six Argue it
moves and answerability; the part intro's scope claims; shared facts across chapters and with the
topic chapters; every internal reference; every Terms-box entry now used in its body.

#### Reviewer K: history, the Middle East and South and Southeast Asia, 5 findings

1. **Middle East social card: Greece left "despite" the 1869 law** (same as L1). **FIXED with L1.**
2. **Middle East 01: KC-5.1.V.B quoted without its opening clause ("In response to the expansion of
   industrializing states") and applied to Selim III's and Mahmud II's reforms**, which answered
   defeat by Russia (1787 to 1792) and Napoleon's army (1798), neither an industrializing state.
   Topic 5.8 frames it the same way. **FIXED: the chapter now says the first reforms answered defeats by Russia and by Napoleon's army, and quotes KC-5.1.V.B in full ("In response to the expansion of industrializing states, ...") for the later pressure. Topic 5.8 already says "more and more of them industrial"; no change there.**
3. **Middle East 03 (and topic 5.8): the fez factory "opened ... in the 1830s; around 1850 fitted with
   steam engines and machines from Britain and Belgium"**: Istanbul's official heritage site dates the
   fez workshop to 1827 (at Kadırga, moved to Eyüp later) and its first steam machines to 1843; no
   source found for "around 1850, Britain and Belgium". **REJECTED: the course's dates come from a scholarly source the reviewer could not reach. Topic 5.8's ledger (row "The state fez factory ...") cites TDV İslâm Ansiklopedisi, "Feshâne" (fez making from 1833; machines 1849 to 1851) and Ergün and Ciritci (2026) (1843 to 1851). The reviewer's source is a tourism page. "In the 1830s" and "around 1850" stand.**
4. **South and Southeast Asia 03 and card: "Indian owners built ... about 200 of them" and
   "Indian-owned steam mills, about 200"**: about 200 was all of India's cotton mills, some
   British-owned (Cawnpore's Elgin Mills, 1864; Muir Mills, 1874; mills around Calcutta). **FIXED: "steam-powered cotton mills were built in India, first in Bombay by Indian owners; by the early 1900s India had about 200 of them, many Indian-owned", and the card to match.**
5. **South and Southeast Asia 04: "the friars, Catholic religious brothers"**: the Spanish friars
   were mostly ordained priests who ran the parishes, not lay brothers. **FIXED: "the friars, Spanish members of Catholic religious orders, most of them priests who ran the parishes".**

Held up (reviewer's list): every CED quotation and both Argue it prompts; the part intro; every
Ottoman date and the Gülhane wording (Inalcik and Hurewitz); Beinin's quotation and figures (MERIP,
1981); the 1838 cloth prices; the Aleppo and Damascus looms (Pamuk and Williamson, NBER w14763, citing
Issawi); Smyrna in the mid-1780s; Suez and the 1870 cable; Bairoch; the 1813 duties; 1853; HSBC;
Davar's mill (1854); Trincomalee; the 1901 census; McKeown; Rizal.

#### Reviewer I: history, Britain and East Asia, 6 findings

1. **East Asia 04 (thesis and box): "Japan's government built the first railways, mills and shipyards
   itself, then sold most of them"**: Japan's first Western-style spinning mill was Satsuma's
   Kagoshima mill (1867), and the Nagasaki shipyard was begun by the Tokugawa shogunate in 1857
   (Mitsubishi Heavy Industries, Nagasaki Shipyard history); the railways were not among the works
   sold. Topic 5.6 claims only the first railway. **FIXED: the thesis and box say the government built the first railway and model factories, took over shipyards and mines begun under the shogun, and sold most of its factories and mines; the body says the shipyards and mines were taken over (Mitsubishi Heavy Industries, Nagasaki Shipyard history: shogunate, 1857).**
2. **Britain 02: the cotton steps, "each step on its own machine", read as Cromford in 1771**: Cromford
   began with spinning machines; carding and roving came with the 1775 patent; cleaning was not a
   machine step. Topic 5.3 says this correctly. **FIXED: "Cromford began with spinning machines. After 1775, when Arkwright patented machines for the earlier steps, ... each step after cleaning on its own machine" (as topic 5.3).**
3. **Britain 01: "Britain was not yet a great maker: ... under 2 percent"**: a small share reflects a
   small population; Bairoch's per-person index already puts Britain highest in 1750 (10, against China
   8 and India 7). Bairoch (1982), p. 294, via McKay, Table 20.1. **FIXED: "Britain was a small country:" in place of "not yet a great maker".**
4. **East Asia 02 box (and topic 5.8): "The deeper problems were a disorganized empire and poorly
   trained crews"**: Elman's sentence with those two causes is about the Sino-French War of 1884 to
   1885; for 1894 he points to Japan's better-trained crews and a navy split into regional fleets.
   Elman (2004), pp. 316 to 317 (PDF opened). **FIXED here and in topic 5.8's deep reading: for 1894 Elman points to a navy split into rival regional fleets and crews less well trained than Japan's (Elman, Modern Asian Studies 38:2, 2004, pp. 316 to 317).**
5. **Britain 01 (and topic 5.3): enclosure set beside "More food fed more people"**, implying
   enclosure drove the harvest and the population rise; Allen (1992) finds most yield gains in open
   fields too, and Wrigley and Schofield (1981) put the population rise mainly to higher fertility.
   **NARROWED here: more food is tied to the new crops; enclosure is a separate sentence with "historians still argue how much enclosure added to the harvest"; "Larger harvests helped feed a growing population". Topic 5.3 already hedges enclosure ("historians still argue about how many people it pushed off the land") and claims no cause for the population rise; no change there.**
6. **Britain 05: Wollstonecraft's book "among the 'demands for women's suffrage and an emergent
   feminism'"**: the CED lists it only as an optional example, and the book asked for education and
   independence, only hinting at representation; a reader will think she demanded the vote. **FIXED here, and the same framing aligned in Europe (de Gouges) and the Americas (Seneca Falls): each is now "an optional example" of the CED's demands, and Wollstonecraft's book is said to have asked for education and independence, not yet the vote.**

Held up (reviewer's list): every CED quotation in both chapters; the Britain dates, figures and
quotations (Harley's yarn price word for word; Edwards on 1787 imports; Burnette's 1833 percentages;
Szreter and Mooney's Manchester range); every East Asia date, figure and quotation (HSBC timeline;
Tsurumi; the 1894 treaty; Shimonoseki); both Argue it prompts; the part intro.

#### Reviewer J: history, Europe and the Americas, 4 findings

1. **Americas 02: "He changed sides to France the next year, after Paris abolished slavery"** implies a
   cause historians debate (James; Ardouin; Ott; Toussaint's own later account; Geggus). Topic 5.2
   gives no cause ("a few months later"). Source: Wikipedia, "Toussaint Louverture", "Alliance with
   the French: 1794-1796" ("The timing of and motivation behind Louverture's volte-face against Spain
   remains debated among historians"). This sentence was added by the pass 2 fix for G2. **FIXED: "In May 1794, a few months after Paris abolished slavery, he changed sides to France; historians still debate why." The causal wording had been introduced by the pass 2 fix for G2.**
2. **Europe 03: "Crowds crowds"** (same as L2). **FIXED with L2.**
3. **Europe 04: the German and Russian railway lengths and the Trans-Siberian cited to Topic 5.4**;
   they are in Topic 5.5, not 5.4. (Figures confirmed: Fordham Modern History Sourcebook, 51,678 and
   53,234 km in 1900.) **FIXED: the railway figures and the Trans-Siberian now cite Topic 5.5; the "spread" quotation keeps Topic 5.4.**
4. **Europe 04 (and topic 5.4): Seraing "near Liège in Belgium" in 1817**: Liège was in the United
   Kingdom of the Netherlands until Belgium's independence in 1830. **FIXED here and in topic 5.4: "in what is today Belgium" in the deep reading, the First & 10 paragraph and takeaway (fingerprint moved with a dated note) and the lesson data. The teacher deck's map labels name places by today's country and are left as labels.**

Held up (reviewer's list): every CED quotation; both Argue it prompts; the part intro; Riis (three
passages, Standard Ebooks), Bismarck (GHDI), Bolívar (Bertrand), Locke, Rousseau, the declarations,
the levée, "iron and blood", the Manifesto, Kant, Toussaint's 1793 proclamation; every Europe and
Americas date and figure.

**Pass 3 total: 25 findings (L 10, I 6, K 5, J 4), 3 of them duplicates. 20 FIXED or NARROWED, 1
REJECTED (the fez factory dates, which rest on a scholarly encyclopedia), 1 with no change needed in a
topic chapter. Three pass 3 defects were introduced by this build's own earlier fixes (the doubled
"Crowds", the Greece card's "despite", and the reason given for Toussaint's change of sides), which
is the reason a fresh full pass is run after every round of fixes. Two more small corrections reached
shipped topic chapters (5.4, 5.8).**

## Why the loop stopped

Pass 3 is the third full pass and it still found supported defects, so the safety valve applies: fix
what it found and stop rather than run a fourth. The trend is down: 37 findings in pass 1, 30 in
pass 2, 25 in pass 3, and smaller each time. Pass 1 found outright errors (the Manifesto's first line,
Topic 5.6's factory money, abolition before 1834, the telegraph's speed); pass 2 found mostly
compressions where two causes had become one; pass 3 found finer points of chronology and attribution
(Cromford's machines before 1775, which Japanese works the Meiji state built first, which war Elman's
two causes describe) plus three slips from earlier fixes. No new myth turned up after pass 1. Every
finding has a disposition and no row is left NEEDS JEFF.

**Shipped topic chapters corrected by this build**, each on every surface that carried the claim:
5.1 (Rousseau's first line), 5.2 (the cause of the 1791 rising; why France freed people in 1793),
5.3 (the Ottoman cotton share; "one of the seven factors the College Board names"), 5.4 (Seraing "in
what is today Belgium"), 5.6 (what paid for Egypt's factories), 5.7 (Germany's two 1879 tariffs) and
5.8 (the first Ottoman parliament, 1877; Elman on 1894). Each has a dated note in its own ledger; the
First & 10 fingerprint in `scripts/test/readings-golden.js` was moved three times, each with a note
naming the only phrases that changed.

**Adjacent, not changed here:** the shipped Topic 5.9 and 5.10 chapters on `main` are older drafts
(Manchester "about 25,000 in 1772", "Chartism was rejected", a cross-reference to the 1832 Reform Act
"in Topic 5.6"); their reviewed rebuilds wait on `claude/topic-5-10-build`. That rebuild says "about
four in ten" women servants in 1851, which this build's reviewers narrowed to about one in three (four
in ten with washerwomen and charwomen). Topic 5.4 claims a per-person fall in output for India but not
for China, which Bairoch also estimates.

## Plain-language and accuracy pass (2026-11-21 to 22, Jeff: target 8.5 from every persona)

**Baseline panel (2026-11-21), before any rewrite:** Ana (English learner, reading IEP) 5, Jordan
(exam crammer) 7.5, Dev (dyslexic, phone, Listen) 5.5, Dr. Okafor (hostile AP Reader) 7.5, Ms. Reyes
(second-classroom teacher) 7. Consensus 5 of 5: one merged pass, plain language plus a CED-quotation
pass, each section ending in a College Board box (plain "In short" sentence, whole Key Concept
sentences, optional examples labelled the same way every time). Full findings kept in the session
scratchpad; the ones acted on are below.

**What changed in all six chapters.** Story prose cut to one idea a sentence (averages about 20 words
to about 11; story grade about 10 to about 5 to 7; no sentence over 30 words outside a quotation);
definitions moved out of commas into parentheses or their own sentences, idioms removed, every course
word defined; a five-sentence "story in short" at the top; one College Board box per section, its
exact wording folded behind "Show the exact words"; at least one How we know and one Common mistake
box; six closing cards in one order; cross-region references written as phrases that read well aloud.

**Panel findings fixed, by chapter (NEW FACT = verified by the rewriter on the web, reviewer first):**

- *Britain:* the seven factors explained one by one, the CED sentence quoted whole in the box; Corn
  Laws 1815, sliding tariff 1828, repeal voted 1846 with the duty falling to 1849 (Topic 5.7);
  Unilever an optional example; three cut Key Concept sentences now whole; crime figures count people
  charged (Topic 5.9). **Adjacent:** Topic 5.9 says "Snow showed the route was the water", stronger
  than this ledger's pass 1 narrowing (A5).
- *Europe:* NEW FACT, the Civil Code of 1804 named as what Napoleon's armies carried; NEW FACT, the
  Anti-Socialist Law (1878) banned groups, meetings and papers but not candidates, so "socialist
  candidates won more votes than any other party, about 20 percent" in February 1890, and the law
  lapsed that September; NEW FACT, the Bessemer process (1856); NEW FACT, Witte as finance minister
  1892 to 1903, foreign borrowing for railways and industry (Malik, Bankers and Bolsheviks, 2018).
  Mistake box: "not the only cause". **Adjacent:** Topic 5.8 (line 137) and its ledger (row 466) say
  the party won "while still banned".
- *Americas:* NEW FACT, Hidalgo defeated and executed in 1811, independence in 1821 under conservative
  creoles and Iturbide, emperor 1822 (Library of Congress exhibit); NEW FACT, the Portuguese court in
  Rio from 1808, Pedro's declaration in 1822; How we know boxes on Toussaint's change of side and on
  Riis. **Adjacent:** Topic 5.2 tells Mexico without its outcome and keeps the overcorrecting box "Do
  not write that the Enlightenment caused the revolutions."
- *Middle East:* the stitched 64-word quotation gone, the drivers stated plainly; the fez factory in
  time order; the Balkans as a dated sequence, NEW FACT Serbia's self-rule from 1830 (Leovac, Belleten);
  NEW FACT the constitution suspended, parliament next met 1908 (Britannica); the Social card about
  labor.
- *East Asia:* KC-5.2.II.A quoted whole; HSBC an optional example, described as a bank; NEW FACT the
  Meiji dates separated (power returned late 1867, court taken early 1868, civil war won 1869, domains
  abolished 1871, conscription law 1873 with exemptions, sword ban 1876). **Adjacent:** Topic 5.6 (lines
  204 and 210) has the same compressed 1868 and 1871 sentences.
- *South and Southeast Asia:* NEW FACT India's first cotton mill British-owned near Calcutta about 1818;
  Bombay's industry begins with Davar's mill of 1854 (the claims row above, "From 1854 Indian owners
  built ... first in Bombay", is superseded); "bought British machine-made cloth" for "most of its";
  section dates match their content; the Philippines joined to the India story.

**Not adopted:** a Comparison "Argue it" (Jordan, Okafor, Reyes). Unit 5's CED gives no topic the
Comparison reasoning process, and the CED rule holds; prompts ask comparative questions as Causation
or Continuity and Change instead. **Deferred:** a locator map per chapter (Reyes, Okafor), pending the
second panel.

## Review loop after the plain-language pass (from 2026-11-22). Rule: run fresh passes until one is clean.

Seven fresh reviewers a pass across both units (see the Unit 4 ledger for the brief). Findings are
written here as PENDING, and pushed, before any fix.

### Pass 1 (2026-11-22)

**Reviewer G (CED and consistency, all twelve chapters), Unit 5 items:**

- G2. Britain: the law factor narrowed to patents; the CED factor is legal protection of private
  property in general. **FIXED:** "Another factor is the legal protection of private property. Owners could count on the law to protect what they owned and earned"; the 1624 law now "banned most monopolies but still let the crown give an inventor a patent"; box gloss "laws that protect what people own, including new inventions".
- G3. South and Southeast Asia, Social card: McKeown's departure counts given as people who "moved",
  with no return hedge; the Chinese figure is Southeast Asia only. **FIXED:** story and card now give McKeown's figures as counted departures ("mostly to Southeast Asia"), and the card adds "Many later went home."
- G5. Europe, section 5 dates line promises "the Commune", which the chapter never tells. **FIXED:** the Commune is now told (Topic 5.8's wording): workers ran Paris in 1871, Marx praised it, the army crushed it within about ten weeks.
- G6. Britain claims and quotes KC-5.1.IV (railroads, steamships, telegraph, interiors, trade and
  migration) but teaches one railway only. **FIXED:** a new paragraph from Topic 5.10: emigrant ships Liverpool to New York, more than 40 days under sail in 1853, about 16 by steam in 1869; Atlantic cables from 1866; Topic 5.10 added to `topics`.
- G7. East Asia quotes KC-5.1.VI.B whole but teaches only working women; Americas claims KC-5.3.I.A
  (empiricism, religion) and KC-5.3.IV.A.i (democracy, liberalism) beyond what it teaches. **FIXED:** East Asia no longer claims KC-5.1.I.C or KC-5.1.VI.B and no longer quotes them (Britain teaches both); Americas no longer claims KC-5.3.I.A (Europe teaches it) and now defines liberalism ("Liberals wanted a written constitution, an elected assembly and protected rights").
- G8. East Asia, Technological card: "Both states bought Western machines and hired foreign experts"
  is supported for Japan only. **FIXED:** card title now "Both states set out to build modern weapons and machines."
- G9. Americas, Religious card: "Faith fed ... the first rising in Mexico"; the chapter shows only
  that Hidalgo was a priest. **FIXED:** "Faith fed the fight against slavery, and a priest led Mexico's first rising."
- G11. Britain, section 5 dates line: "Two German writers in London predicted"; in 1848 Marx wrote in
  Brussels and the Manifesto was printed in London. **FIXED:** "Two German writers predicted a workers' revolution in a book printed in London. It never came to Britain."
- G12. Britain and Europe: "&quot;" in two box labels. REJECTED: an artifact of the review packet's
  text extraction; the page renders a quotation mark (the label is escaped once, correctly).
- G13. Britain, Religious card: faith as the sole driver of abolition; the story says faith and new
  ideas about rights. **FIXED:** "Religious faith, with new ideas about rights, drove the fight against the slave trade."
- G14. Europe, Social card: "Old ranks of birth and sex ... some of them fell" can be read to include
  sex. **FIXED:** "Old ranks of birth fell in France and Russia, and women claimed equal rights", with "but women could vote almost nowhere by 1900" from the chapter's own section 05.
- G15a. Britain: the story numbers farming third and towns fourth; the CED and the box list
  urbanization third. **FIXED:** ordinals after the second factor replaced by "Another factor", so the story no longer numbers against the box.
- Not verified by the reviewer: the Beinin and Madureira quotations, Bismarck's 1884 words, and
  "minutes" for the 1870 London to Bombay cable. To check.

**Reviewer F (history: East Asia, South and Southeast Asia).** Verified sound: every CED quotation;
Bairoch's shares; HSBC (1865, Hong Kong, Shanghai, London); Tongwen Guan 30 of 98; 62 percent women
in private factories 1900 (Tsurumi); the 1815 and 1832 cloth figures (Lajpat Rai); the 1870 cable;
Roy on handloom share; McKeown's counts; the Meiji, treaty and mill dates.

- F1. South and Southeast Asia: "Its writers first asked for equal rights ... The revolution of 1896
  went further" with "during a revolution ... Spain executed Rizal" makes Rizal read as a leader; the
  Katipunan began the revolution, Rizal disowned it and was shot for rebellion on 30 December 1896.
  **FIXED:** "In 1896 a secret society, the Katipunan, began a revolution for independence. Rizal did not lead it. But Spain convicted him of rebellion and shot him in December 1896"; the mistake box and Political card match.
- F2. East Asia, Intellectual card: "Japan made it national policy" contradicts the chapter's own 1898
  Guangxu decree. **FIXED:** "Both governments set out to learn from the West, but only Japan kept at it", with "China's 1898 reform policy was stopped three months later."
- F3. South and Southeast Asia, Political card: "As the Mughal Empire broke up after 1750" reads as
  the breakup beginning then (it began after 1707). **FIXED:** "The Mughal Empire was already breaking up by 1750. Over the next century the British East India Company came to rule much of India."
- F4. East Asia: KC-5.1.I.C (specialization of labor) and KC-5.1.VI.B (middle-class women) claimed
  and quoted, half taught (same as G7). **FIXED** with G7.
- F5. South and Southeast Asia: KC-5.3.II.ii's government half ("harnessed by governments") not
  taught. **FIXED:** South and Southeast Asia no longer claims or quotes KC-5.3.II.ii (Europe and the Middle East teach it).

**Reviewer C (history: Britain, Europe).** Verified sound: every CED quotation; Bismarck's 1884
words (GHDI); the Statute of Monopolies; Bairoch; Manchester; the 1851 census; cholera deaths;
railway lengths; Witte, Otto, Benz, BASF, Bessemer; the 1890 vote; the insurance laws.

- C1. Britain: "She asked for education and independence, not yet the vote" is false; Vindication ch.
  9 says women "ought to have representatives"; and the chapter gives no British suffrage demand for
  KC-5.3.IV.B. **FIXED:** "She asked mostly for education and independence. She also wrote, briefly, that women \"ought to have representatives\" in government." The chapter's women's-suffrage evidence also includes the Reform Acts line ("no woman could vote for Parliament").
- C2. Europe, Religious card and section 01 box: "questioned religion's power over government, not
  belief itself" overcorrects; deists rejected miracles and revelation, d'Holbach argued atheism (SEP,
  "Enlightenment"). Same in Topic 5.1. **FIXED:** box: "Many doubted miracles and church teachings, and a few rejected God. Above all they attacked the church's power over government and law"; card title "attacked the church's power over government, and some doubted its teachings". Topic 5.1 is being fixed to match.
- C3. Britain: the only transnational business example is Unilever "not formed until 1929"; Lever
  Brothers itself made soap in Australia (1895) and the United States (1898) before 1900. **FIXED:** NEW FACT (reviewer C's sources, Graces Guide; Manchester UP): "In the late 1890s his company, Lever Brothers, opened soap works in Australia and the United States. It had become transnational ... In 1929 it joined Dutch firms to form Unilever."
- C4. Britain: KC-5.1.IV and the internal-combustion half of KC-5.1.I.B claimed, not taught (G6).
  **FIXED** for KC-5.1.IV with G6. KC-5.1.I.B: **ANSWERED**, the chapter quotes and teaches the fossil-fuels sentence; the internal-combustion sentence is taught in the Europe chapter.
- C5. Europe: the Commune promised in the dates line and never told (G5). **FIXED** with G5.
- C6. Britain: "In 1854 ... Snow argued that water carried it"; he argued it in 1849 and traced the
  Broad Street pump in 1854. **FIXED:** "In 1849 the doctor John Snow argued that dirty water carried it. In 1854 he traced a London outbreak to one water pump, but many doctors were not persuaded for years." Topic 5.9 is being fixed to match.
- C7. Britain: "A law of 1624 let the crown give an inventor a patent"; the statute banned most
  monopolies and kept patents for inventions (G2 overlaps). **FIXED** with G2.
- C8. Britain: "repealed them in 1824. Skilled workers then built lasting labor unions" drops the
  1825 Act and squeezes decades (lasting national unions from 1851); contradicts Topic 5.8. **FIXED:** "Parliament repealed them in 1824, but a law of 1825 limited what workers' groups could do. By the 1850s skilled workers had built lasting national labor unions."
- C9. Britain: farming third and towns fourth, the box the other way (G15a). **FIXED** with G15a.

**Reviewer E (history: Americas, Middle East).** Verified sound: every CED quotation; the Gülhane
quotations (Inalcik, ed. Hurewitz 1975); Bolívar (Bertrand translation); Beinin's four causes
(MERIP 1981); 55 million Europeans (Hatton and Williamson); Aleppo and Damascus handlooms (Pamuk and
Williamson); Toussaint, May 1794; the wheat gap; Manhattan; Riis; Seneca Falls; abolition and Haiti
dates.

- E1. Middle East: "the first reforms answered lost wars against Russia and against Napoleon's army";
  Selim's reforms began 1792 to 1793, before the 1798 invasion, and the French surrendered in 1801;
  Topic 5.8 names Russia only. **FIXED:** "So the first reforms answered a lost war against Russia. Napoleon's easy victory in Egypt then showed what a modern European army could do, and that added to the pressure."
- E2. Middle East: Muhammad Ali "kept cheap British cloth out" against "In 1838 English cotton cloth
  sold in Egypt for less than cloth from Egypt's own new mills"; the 1838 figures compare the English
  price in Egypt with the Egyptian mills' cost (Overton 1971, via JEEH 2024); protection was a limit,
  not a ban. Same in Topics 5.4 and 5.6. **FIXED:** "used his control of trade to limit cheap British cloth"; "In 1838 English cotton cloth could be bought in Egypt for less than it cost Egypt's own mills to make the same cloth" (card to match). Topics 5.4 and 5.6 are being fixed to match.
- E3. Americas, Religious card: faith and Hidalgo's rising (G9). **FIXED** with G9.
- E4. Americas, story in short: "When Napoleon invaded Spain in 1808, most of Spanish America broke
  away" squeezes 1808 to 1826. **FIXED:** "After Napoleon invaded Spain in 1808, most of Spanish America broke away by 1826."
- E5. Americas, Social card: "from Chile in 1823" makes Chile first; Haiti ended slavery 1793 to
  1804. **FIXED:** "Slavery ended in Haiti through its revolution. Then it ended country by country, from Chile in 1823 to Brazil in 1888."
- E6. Americas: KC-5.3.I.A first sentence and "liberalism" in KC-5.3.IV.A.i untaught (G7). **FIXED** with G7.
- E7. Middle East: KC-5.1.IV claimed, but Suez and a coastal cable are not interior regions. **FIXED:** the Middle East no longer claims or quotes KC-5.1.IV (four other chapters teach it); its box "In short" no longer says "steamships and telegraphs joined far places".

### Pass 2 (2026-11-22), seven fresh reviewers

Letters continue after the 2026-11-16 passes (M to P here; Q is the CED and consistency reviewer
for both units).

**Reviewer N (history: Europe, East Asia), 6 findings.** Verified sound: every CED quotation; every
cross-region link; Bismarck 1884 (GHDI); Elman 2004 on the Summer Palace and the navy; HSBC in 16
countries by 1900; 62 percent women in Japan's private factories, 1900 (Tsurumi); Locke, the
Declaration, de Gouges, Kant, Calas; railway figures (Mitchell); Bairoch shares; the 1866 tariff,
Meiji reforms, Shimonoseki.

- N1. Europe: "In February 1890 socialist candidates won ... The Reichstag did not renew the law,
  and it ended that September" reads as vote causing non-renewal; the Reichstag rejected renewal
  on 25 January 1890, before the 20 February election (GHDI). **FIXED:** "On 25 January 1890 the Reichstag voted against renewing the law. On 20 February socialist candidates won more votes than any other party, about 20 percent. The law ended on 30 September."
- N2. Europe claims KC-5.1.III.A, quotes the Adam Smith cause, and never teaches it. **FIXED:** Britain's move to free trade "partly persuaded by Adam Smith's case for free trade"; Jean-Baptiste Say spread Smith's ideas in France; Michel Chevalier, who helped prepare the 1860 treaty, was a free trader too.
- N3. Europe claims KC-5.1.IV (railroads, steamships, telegraph, increased trade and migration),
  teaches railways only, no trade or migration effect. **FIXED:** the Trans-Siberian "carried peasant settlers east to farm Siberia. Over the next twenty years they came in the millions. Trains also carried Siberian wheat west to sell"; steamships and the telegraph named, with a link phrase to the Britain chapter's factory section. (The fixer's 1906 to 1914 settler figure and 1896 to 1913 grain figure were cut as outside the unit.)
- N4. Europe claims KC-5.1.V.A (labor unions) and never mentions unions. **FIXED:** labor unions defined and taught ("groups of workers who bargain with employers together for higher wages, shorter hours and better conditions"); many of the groups banned in 1878 were unions; France made unions legal in 1884.
- N5. East Asia, Intellectual card: "only Japan kept at it" overstated; Qing Western learning
  continued (Tongwen Guan, Jiangnan translations, students sent to Europe, Imperial University of
  Peking, 1898, the one edict not repealed). **FIXED:** card: "Both governments set out to learn from the West, and Japan went further"; body adds that Self-Strengthening went on for decades and China's 1898 reforms were stopped after about three months.
- N6. Europe, Social card: "Old ranks of birth fell in France and Russia"; Russia freed serfs but
  kept the nobility as a legal estate until 1917. **FIXED:** "France ended noble privilege, Russia freed its serfs, and women claimed equal rights."

**Reviewer P (history: the Americas, South and Southeast Asia), 3 findings, no historical errors.**
Verified sound: every CED quotation; every link; Bolívar's Jamaica Letter (Bertrand); the India
cloth-trade figures, 1815 and 1832 (Montgomery Martin via Lajpat Rai); the 1813 duty table; HSBC's
London office, 1865; the 1870 Bombay cable; Riis's tenement definition; Seneca Falls; abolition
dates; Slater and Belper; Davar's mill; the Propaganda Movement, the Katipunan and Rizal.

- P1. Americas claims KC-5.1.I.B but quotes only its first sentence and never ties a machine to a
  fossil fuel (mills on water, coal for furnaces, oil as kerosene); KC-5.1.V.A is claimed without
  its second sentence (workers' movements and parties), which is not taught. **FIXED:** both Key Concepts kept and quoted whole. I.B taught: "Early American trains burned wood in their steam engines. By 1880 coal made up more than 90 percent of the fuel American railroads burned. In 1885 coal passed wood as the country's largest source of energy" (White, A History of the American Locomotive; US EIA). V.A taught: "The Knights of Labor was founded in 1869. It hoped that businesses owned by their own workers would one day replace wage work" (Britannica).
- P2. South and Southeast Asia, box "In short": "The College Board asks you to explain how its
  [India's] share of world manufacturing then fell" makes an optional example (Indian textiles)
  sound required; the Key Concept says "Middle Eastern and Asian countries". **FIXED:** "Middle Eastern and Asian countries kept making goods, but their share of world manufacturing fell. India's cloth making is one optional example."
- P3. South and Southeast Asia: the Philippine case is never tied to KC-5.3.II.iii (nation linked
  to state borders), and the box "In short" ("some nationalists wanted their nation to have its own
  state") can read as contradicting the chapter's mistake box (the Propaganda writers sought equal
  rights inside Spain's empire). **FIXED:** new paragraph: the Propaganda writers asked for equal rights inside Spain's empire; the Katipunan wanted the islands to become their own independent state. Box "In short": "Nationalists often linked their nation to a state with its own borders. In the Philippines, the Katipunan fought for that state..."

**Reviewer Q (CED and consistency, all twelve chapters), Unit 5 items.**

- Q7. East Asia, Intellectual card "only Japan kept at it" (same as N5); also the Religious card
  generalizes Woren's argument to "In China". **FIXED** with N5; Religious card: "At the Qing court, the emperor's tutor used Confucian values to argue against Western learning."
- Q11. Unit 5 Middle East glossary: Mamluks "ruled Egypt until Napoleon's invasion" contradicts
  Unit 4 (Ottoman Egypt from 1517); they kept real power under Ottoman governors. **FIXED:** "Egypt had been an Ottoman province since 1517. But the Mamluks had stayed powerful there under the sultan's governors"; glossary to match.
- Q12. Europe, Social card "Old ranks of birth fell in France and Russia" (same as N6). **FIXED** with N6.
- Q13. Britain and Europe box headings show "&quot;". **REJECTED:** an artifact of the review
  packet's text extraction. The page escapes the quotation marks as `&quot;`, which the browser
  shows as ordinary quotation marks; the extractor now decodes it.

**Reviewer M (history: Britain, the Middle East), 5 findings.** Verified sound: all 36 CED
quotations; links; Bairoch 1750 and 1860; Feinstein; Smith's pin and tailor; Corn Laws; limited
liability 1855 and 1856; Engels; cholera and Snow; the 1787 society; Wollstonecraft; Chartists;
Beinin (MERIP 1981); the Gülhane text (Hurewitz 1975); Selim III to the 1878 suspension; Suez.

- M1. Middle East, section 05 and mistake box: "What changed was the region's share" overcorrects;
  textile makers fell steeply in number before 1860 (Aleppo about 40,000 looms in the 1700s, about
  5,125 in 1838 to 1850; Damascus 34,000 to 12,000), then held steady (Pamuk and Williamson, NBER
  WP 14763, 2009, p. 7, citing Issawi). **FIXED:** heading "Fewer makers, a smaller share"; Aleppo about 40,000 handlooms in the 1700s, about 5,000 from 1838 to 1850, steady from 1860 to 1914; the mistake box keeps "did not stop making goods" and says many makers did lose their work. Topic 5.4 (deep reading, First & 10, lesson data) now gives the fall too.
- M2. Britain: "By 1869 steamships made it in about 16 [days]"; 16 is the all-ship emigrant average
  in 1869; steamships alone averaged about 14 (Hatton, IZA DP 16274, 2023, Tables 1 and 2). Topic
  5.5 says "about 12 days in the 1860s". **FIXED:** "By 1869 almost all went by steam. A steamship made it in about 14 days" (Hatton, Table 2: 14.0 days, 197 of 213 voyages). Topic 5.5's "about 12 days in the 1860s" (sourced to one Allan Line run to Quebec) now says "about two weeks" on the deep reading, First & 10, lesson data and slide, with Hatton in the teacher note.
- M3. Middle East: the 1804 Serbian rising presented as a nationalist break; it began against the
  renegade Janissary commanders (dahije), at first on the sultan's side, and only later became a
  fight for self-rule. **FIXED:** "At first they fought rebel Janissary commanders who had seized power in Serbia, and they said they fought for the sultan. The rising soon became a fight to rule themselves."
- M4. Britain, Political card heading "Britain widened the vote in steps, and only for men"; some
  women gained local votes from 1869. Narrow to the vote for Parliament. **FIXED:** "Britain widened the vote for Parliament in steps, and only for men"; body: "From 1869 some women could vote in town elections."
- M5. Britain claims KC-5.1.I.B and KC-5.1.II.B but quotes and teaches one sentence of each.
  **FIXED:** both Key Concepts quoted whole and taught: Benz's 1886 oil-burning internal combustion engine and the fossil fuels revolution; India's share falling from about a quarter in 1750 to under 2 percent by 1900 (Bairoch), with link phrases to the Europe and South and Southeast Asia sections.

### Pass 3 (2026-11-23), seven fresh reviewers

Pass 2 found about 59 items, so a third pass was run, with the chapters paired differently. Letters
R to W are the history reviewers (R: Unit 4 East Asia and South and Southeast Asia; S: Unit 4
Middle East and Sub-Saharan Africa; T: Unit 4 Europe and the Americas; U: Unit 5 Britain and East
Asia; V: Unit 5 Europe and the Americas; W: Unit 5 Middle East and South and Southeast Asia); X is
the CED and consistency reviewer for all twelve.

**Reviewer V (history: Europe, the Americas), 5 findings.** Verified sound: every CED quotation
(by script); links; Bismarck 1884 (GHDI); Bolívar's Jamaica Letter; coal as more than 90 percent of
railroad fuel by 1880 (White); 55 million Europeans (Hatton and Williamson).

- V1. Americas: "Toussaint was arrested ... His officer Jean-Jacques Dessalines fought on"; he
  submitted to Leclerc in spring 1802 and turned on the French in October 1802 (Britannica,
  "Haitian Revolution"; BnF France Amériques). Same in Topic 5.2 (line 190). PENDING.
- V2. Americas: "This was feminism beginning" dates feminism's start to 1848, against de Gouges
  (1791) and Wollstonecraft (1792) in the course; the CED says "an emergent feminism". PENDING.
- V3. Americas: after 1869 "trains could reach farms and mines in the interior ... where no river
  went" reads as no railroad reaching the interior before 1869 (Chicago 1848; Mississippi bridged
  1856). PENDING.
- V4. Americas: "In 1802 Napoleon brought slavery back ... He sent an army" reverses the order
  (Leclerc sailed December 1801, landed February 1802; the slavery law of 20 May 1802). Same in
  Topic 5.2 (line 190). PENDING.
- V5. Americas claims KC-5.3.I.A but teaches only its second sentence (natural rights, social
  contract), not its first (empiricism, religion's role in public life, reason). PENDING.
