# Unit 5 by Region: Claim and Review Ledger

**Resume here:** review pass 1 is running (launched 2026-11-16, four fresh reviewers on the packet
captured from `ebook/unit-5.html` at commit after the ledger rows). If this session stopped
before pass 1's findings appear below, relaunch pass 1 from a fresh capture.

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
| The Propaganda Movement did not demand independence at first | South and Southeast Asia 04 | Library of Congress country study, Philippines (a reform movement; independence came with the Katipunan); Topic 5.2 ("demanded equal rights with Spaniards") | VERIFIED |

## Review findings

(None yet. Each pass's findings go here as `PENDING` before any fix.)
