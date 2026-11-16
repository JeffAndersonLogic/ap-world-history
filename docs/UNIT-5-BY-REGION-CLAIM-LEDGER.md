# Unit 5 by Region: Claim and Review Ledger

**Resume here:** drafting. The region plan below is settled; draft the chapters in the order
listed, then wire `VOLUMES` and the hub button, build, and start review pass 1.

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

## Review findings

(None yet. Each pass's findings go here as `PENDING` before any fix.)
