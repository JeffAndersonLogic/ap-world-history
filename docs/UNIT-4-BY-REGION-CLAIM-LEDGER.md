# Unit 4 by Region: Review Ledger

**Status: review loop stopped at its safety valve after pass 3, 2026-11-14.** Part Two of the Unit 4
eBook volume (`ebook/unit-4.html`), six regional chapters generated from
`scripts/lib/region-content/unit-4-*.js`. Story and reading approval were delegated to the
independent reviewer loop (Jeff's standing rule of 2026-10-12). Nothing here is on `main` until Jeff
says "ship it".

**The CED decides scope; scholarship decides truth.** The chapters retell
`scripts/lib/ced-source/unit-4.js`; `scripts/test/region-chapters.test.js` holds each chapter's Key
Concept codes, topic links and six-sided closing to that file, with negative controls.

## What is known about passes 1 and 2

Passes 1 and 2 ran on 2026-11-13 and 2026-11-14 in an earlier session that stopped partway through
pass 2's fixes. Their findings were not written to a ledger, and that session's transcript cannot be
read, so they cannot be listed here. What the commits show:

- **Pass 1:** fixes committed for all six chapters (`0bc40129`, `97a07b84`, `eb9c0f72`, `aacf9ac2`,
  `28bd7b3a`).
- **Pass 2:** fixes committed for the Americas, Sub-Saharan Africa, East Asia, South and Southeast
  Asia and the Middle East (`05e0cb27` to `883f2e46`), the last two marked "in progress". No pass 2
  commit touches Europe. The volume was not rebuilt after them, so the reproducibility check failed
  until `a8a82e87` rebuilt it.

Pass 3 below was a full fresh pass over all six chapters, so anything pass 2 left unfixed was in
front of it.

## Pass 3 (2026-11-14), four fresh reviewers

Packet: the six chapters as rendered text from `ebook/unit-4.html`, the CED source, the Unit 4 story
map, and a brief adapted from `docs/review-brief-template.md`. Three history reviewers (two chapters
each, top model, web-verified) and one CED, readability and consistency reviewer (all six, cheaper
model). None saw the build's reasoning.

### Reviewer A: CED alignment, readability, consistency (all six), 8 findings

All quotations of the CED (about 45) match `unit-4.js` word for word; no link mislinked.

1. **KC-4.1.III.B claimed by South and Southeast Asia but not taught.** Supported. Fixed: the
   Manila paragraph now quotes the Key Concept (checked against `unit-4.js` line 86).
2. **Africa deck: "which" made the Swahili trade carry Africans to the Americas.** Supported (also
   History B, 1). Fixed: split into three sentences, Atlantic and Indian Ocean stories separated.
3. **Middle East millet aside undecodable.** Supported. Fixed: "Some books call this the millet
   system. Many historians now think that name fits the more formal arrangement of the 1800s better
   than the looser practice of the 1500s."
4. **Southeast Asian wars paragraph reads as a list of names.** Partly supported (closer to style).
   Fixed lightly: a lead sentence states the point (trade set states fighting); the history stays.
5. **Habshi and Malik Ambar sentences break the Deccan story.** Supported. Fixed: tied in ("one of
   their toughest enemies there had begun life enslaved").
6. **Europe: "it did not yet matter" has no referent.** Supported. Fixed.
7. **Europe and Africa date the first Senegal trade differently.** Supported; superseded by History
   C, 1 and History B, 2, which showed both versions were wrong. See below.
8. **"Swahili Arabs" glossed as the College Board's own name.** Supported (the CED lists it only as
   an illustrative example). Fixed: "one of the Indian Ocean merchant groups the College Board names".

### Reviewer B: history, Middle East and Sub-Saharan Africa, 3 findings (none in the Middle East)

1. **Africa deck "which".** Same as A2; already fixed.
2. **Gold was not bought on the Senegal coast by about 1450.** Supported (Arguin as a gold, slave
   and gum post by 1445: Library of Congress country study, *Mauritania*, "Early European
   Contacts"; Cadamosto on the Senegal coast in 1455 trading horses for captives, gold barely seen
   on the Gambia). Fixed with History C, 1, below.
3. **Africa section 02 run-on sentence.** Supported. Fixed: three sentences. The claim inside it
   (the Caribbean out-producing Brazil by about 1700) was found plausible and stays.

Checked and held up: Afonso's 1526 letter, Montagu's 1717 letter, the slave-trade database figures,
Tondibi, Fort Jesus, Luanda, Njinga's dates and some forty other dates and names.

### Reviewer C: history, Europe and the Americas, 3 findings

1. **"By the 1440s Portuguese ships were buying gold on the Senegal coast, and buying enslaved
   people."** Supported (OpenStax, *World History* vol. 2, 3.4: raids on Arguin and exploring the
   Senegal and Gambia "in search of" gold by the mid-fifteenth century; the 1444 Lagos sale of raided
   captives). The same compression was in the shipped **Topic 4.2 deep reading and eBook chapter**.
   **NARROWED** on all three surfaces (Europe, Africa, `topic-4-2.js`): raids for captives in the
   1440s, the beginning of the Atlantic slave trade; from the late 1440s gold (carried across the
   desert by caravan) and captives bought at Arguin; captives bought on the Senegal coast in the
   1450s.
2. **"Rather than fight Portugal for the route around Africa, they sought a Northwest Passage."**
   Supported (Lancaster 1591, de Houtman 1595 to 1597, the VOC from 1602) and contradicted Topic 4.2.
   Fixed: "At first", plus a sentence that from the 1590s English and Dutch fleets took Portugal's
   own route and fought Portugal for it.
3. **"The three Anglo-Dutch Wars."** Supported (a fourth, 1780 to 1784). The same glossary wording
   was in the shipped **Topic 4.5 deep reading and eBook chapter**. Fixed on both: "the first three
   ... (a fourth followed in 1780)". The 1673 Texel caption ("the third Anglo-Dutch War") is
   correct and unchanged.

Checked and held up: Cook and Borah's Mexico figures, the mit'a figures, the Pueblo Revolt, Metacom's
War, the Calico Acts, the Russian reforms and the Caribbean slave-law dates.

### Reviewer D: history, East Asia and South and Southeast Asia, 1 finding (none in South Asia)

1. **Shimabara: "their lords, who were enforcing the shogunate's taxes".** Supported: the taxes were
   the Matsukura lords' own, and the shogunate executed Matsukura Katsuie for misrule. Topic 4.4 does
   not carry the error. **NARROWED**: the lords' own heavy taxes through famine, plus the shogunate's
   ban on Christianity; the shogunate crushed the rising and later executed the Shimabara lord.

Checked and held up: Morga's quotation (Stanley's 1868 translation), the Nagasaki orders of 1633 to
1639, Diu 1509, and the Macau, Dejima, queue and calico dates against the topic chapters.

## Why the loop stopped

Pass 3 is the third full pass, and it still found supported defects, so the safety valve applies:
fix what it found and stop rather than run a fourth. The trend is down to small items. Two chapters
(the Middle East; South and Southeast Asia) came back with no history defect; most of the rest is
readability. The two substantive errors (the Senegal-coast gold and the Shimabara taxes) are causal or
chronological compressions, not myths, and the Senegal one came from the shipped Topic 4.2 chapter the
regional chapters were drawn from. No new myth turned up. All pass 3 fixes are in; no row is left
NEEDS JEFF.

**Adjacent fixes outside Part Two:** `scripts/lib/deep-reading-content/topic-4-2.js` (Arguin and the
Senegal coast) and `topic-4-5.js` (the Anglo-Dutch Wars glossary), rebuilt into
`unit-4/deep-reading-topic-4-2-exploration.html`,
`unit-4/deep-reading-topic-4-5-maritime-empires-maintained.html` and the eBook.

## External review (2026-11-14): ChatGPT five-persona stress test, supplied by Jeff

Evaluated independently against the chapter sources, the CED and the topic ledgers, per CLAUDE.md.
It raised six accuracy flags, all phrased as "verify", and five structural recommendations. It did
not find the one defect that was actually left over from pass 3 (item 0).

0. **Europe still said "the first of three Anglo-Dutch Wars".** Not raised by the review; found
   while checking its item 6. Pass 3 (Reviewer C, 3) fixed the glossary and the next paragraph but
   missed this sentence. Fixed: "the first of the Anglo-Dutch Wars".
1. **Lateen sail origin.** Partly supported: the text said historians "trace it to" the Roman-era
   Mediterranean, firmer than the evidence. Earliest evidence is Roman-era Mediterranean; first use
   is debated. NARROWED in the Middle East chapter (paragraph and misconception note).
2. **Single Whip and the silver ratios.** Mostly already handled: the text says silver was already
   worth more in China before the reform, and the ratios are localized (Canton and Spain, 1590s).
   Source is Topic 4.5 ledger row 132 (Flynn and Giraldez quoting von Glahn 1996, p. 127). Fixed by
   attribution only: "By the historian Richard von Glahn's figures".
3. **Ottoman protected subjects too uniform.** Supported. The chapter disclaimed the millet name
   but still described each community answering to the state for its taxes, which is the later
   formal arrangement. NARROWED: the tax clause removed; many Christians and Jews also used the
   Islamic court; the arrangement differed by city and century. **For Jeff:** the shipped Topic 4.7
   First & 10 and deep reading carry the communal-tax clause (4.7 ledger row 79, sourced to the
   3.2 chapter); the deep reading already has the "community by community" caveat. Left unchanged.
4. **Household slavery read as benign.** Supported for the topic chapter more than the regional
   one. Regional chapter NARROWED: not gentle, varied by society, hereditary in some places, and
   Songhai's rulers worked captives on large farms; glossary says enslaved people could still be
   sold. Adjacent fix in the shipped Topic 4.4 deep reading, which said flatly "it was not slavery
   passed down forever": now "often not ... though in some societies it was".
5. **Casta not one rigid pyramid.** Supported. Fixed with Topic 4.7 ledger row 123 (VERIFIED,
   Katzew): never one fixed ladder; official records used few labels; recording changed with
   wealth, work and reputation; it differed by region.
6. **Statistics unattributed.** Not supported: Cook and Borah, the Trans-Atlantic Slave Trade
   Database and "one standard estimate" (Barrett, via the 4.5 ledger) are already named or hedged.
   No change.

**Structural recommendations, not adopted, for Jeff to decide.** A reasoning question after each
chapter, a six-region comparison activity and recap prompts all conflict with the eBook's design
rule (`docs/claude/deep-readings-and-ebook.md`: no questions, nothing submitted; the ten lesson
modules are the only route to Canvas). A printed, unanswered "argue it" prompt per chapter, or a
cross-region comparison table built from the closing cards, would fit the rule. If the table is
built, note that three chapters split "Intellectual" and "Technological" in their closing cards and
three merge them.

## Argue it prompts (2026-11-14, Jeff: "Add the Argue it prompts and ship it")

Each regional chapter now ends with one printed "Argue it" prompt (`closing.argue`), rendered by
`renderArgue` in `scripts/lib/deep-reading-page.js` as a note, never a form: nothing is collected,
and the page says so. Each move is a reasoning process the Unit 4 CED uses (only Causation and
Continuity and Change appear there, so no Comparison prompt): Continuity and Change for East Asia,
South and Southeast Asia and the Middle East; Causation for Sub-Saharan Africa, Europe and the
Americas. `scripts/test/region-chapters.test.js` requires one per chapter, holds the move to the
unit's CED, refuses a form control, and checks the prompt reaches the rendered chapter, with a
negative control for each.

Each prompt was checked as answerable from its own chapter. One was narrowed before shipping: the
Africa prompt said the trade "helped tear Kongo apart", further than the chapter goes (the causes of
Kongo's civil wars are argued); it now uses the chapter's own claim, that the trade which had
strengthened the king "turned against the kingdom". The six prompts were not put through a fresh
reviewer loop; this is a review aid, not a topic build.

## Plain-language pass, East Asia (2026-11-16, Jeff: "yes, start with the East Asia chapter")

A readability check found the chapters at about a grade 9 to 10.5 reading level, with the difficulty
coming from crowded sentences rather than vocabulary: in East Asia, 29 story sentences over 25
words (the longest 48) and 13 College Board or CED quotations woven into the story. East Asia was
revised first, as the sample for the other five.

**What changed.** Sentences split to one idea each (story prose: average 18.0 words to 12.0;
sentences over 25 words 29 to 3; Flesch-Kincaid grade 9.4 to 6.6, the drop coming from sentence
length, since the vocabulary and key terms are the same). Every College Board quotation moved out
of the story into one "What the College Board says" box at the end of each of the four sections
(`kind: 'howknow'`, so no renderer change), each linking its topic. The box quotes whole Key
Concept sentences where they are short and fragments where they are long, word for word from
`scripts/lib/ced-source/unit-4.js`; "silk in China" is labelled one of the College Board's
examples, since the CED lists it as an illustrative example, not a Key Concept sentence.

**What did not change.** No fact was added or removed. All 46 years and decades in the old chapter
are still there; the reviewers' narrowings stay word for word in substance ("most taxes", "may
have", "probably", the Shimabara lords' "taxes of their own", the silver-and-the-Ming-fall
misconception). The glossary, closing cards and Argue it prompt are unchanged apart from two
closing-card sentences split in two.

**Rewordings that touch a claim, for the record:**

1. **Silver ratios rounded.** "about five and a half to seven ounces of silver at Canton ... twelve
   and a half to fourteen in Spain" became "about six" and "about thirteen" (the midpoints are 6.25
   and 13.25; von Glahn 1996, via Topic 4.5 ledger row 132). The "about twice as much" conclusion is
   unchanged. Attribution kept: "The historian Richard von Glahn has worked out what this meant".
2. **Tribute system.** "sent envoys to acknowledge the emperor" became "to honor the emperor as the
   ruler above him", which is what the acknowledgement was. The glossary keeps "acknowledge".
3. **Shimabara.** "local resistance to a centralizing state" became "local resistance to a
   government that was pulling power into its own hands", with the Topic 4.6 Key Concept quoted in
   the box.
4. **The 1565 voyage.** "found a way back across the Pacific" became "found a sailing route back
   across the Pacific, from Asia to Mexico", which is what the return route was.
5. **The 1639 order glossed.** After the order's words ("have secretly transported those who are
   going to propagate that religion"): "In other words, they had been sneaking in missionaries to
   spread Christianity."
6. **Han officials and Topic 4.7.** "the power of existing elites fluctuated ..." is now said in the
   story as "The old elite's power went up and down, and the emperor had the final say", with the
   CED's words in the box.
7. **New links, both to topics the chapter already declared:** Topic 4.4 on Japan's restrictive
   trade policy (now also a key-term span) and Topic 4.6 on the queue risings, which the module
   header already counted under KC-4.3.III.iii.

**How it was checked.** `region-chapters.test.js` and the full offline gate pass; the eBook
accessibility and narration browser tests pass. Two disposable checks, each first shown failing on
a deliberately broken copy: every quotation in the four boxes is verbatim CED text, and no year in
the old chapter is missing from the new one. Only `ebook/unit-4.html` changed in the rebuild. This
pass was not put through a fresh independent reviewer; it changes wording, not history, but items
1 to 6 are the places a reviewer should look first.

## Five-persona stress test (2026-11-17, Jeff: "Spin up the five personas in the regional ebook")

Five independent reviewers, each briefed only with its own persona and the topic, each driving or
reading the real page, then one debate round. Scored against the branch (East Asia revised, the other
five not). Persona scripts and measurements were kept in the session scratchpad, not the repo.

| Persona | Stake | Initial | After debate |
|---|---|---|---|
| Ana, English learner with a reading IEP | can she follow it and retell it | 6 (East Asia 7.5, Middle East 4) | 5 |
| Jordan, May exam crammer | points on SAQ, DBQ, LEQ | 7 | 6 |
| Dr. Okafor, hostile AP Reader and historian | errors students will repeat | 7 | 7 |
| Dev, dyslexic student on a phone using Listen | reach a region and hear it | 6 | 6 |
| Ms. Reyes, second-classroom teacher | assign it Monday | 6 | 6 |

**Consensus, round 1, 5 of 5 (100%): one merged pass, chapter by chapter, Middle East first.** Each of
the five unrevised chapters gets the East Asia plain-language method and, in the same edit, the
accuracy and consistency fixes below, then all six go through one fresh independent reviewer loop
**before** shipping. Merged because both touch the same sentences: two separate passes would edit and
review each sentence twice, and a plain pass alone would make the contradictions easier to read.
Folded in by the debate: line up the closing cards (same categories, same kind of evidence on the same
card), write College Board items as separate paragraphs (not `<br>`), move mid-story "Common mistake"
boxes so the correct claim comes first, and give the College Board box a look distinct from "How we
know". Not adopted: holding East Asia back to keep the six uniform (Ana and Dev: it is the chapter
that works for the weakest readers); a cross-region Argue it prompt before the silver contradiction
is fixed (Okafor).

**Confirmed findings to fix in that pass (Okafor, verified against the modules):**

1. **Three chapters give three causes for silver flowing to China.** East Asia: already worth more, and
   the tax law added demand. The Americas: taxes in silver "so silver was worth more there than
   anywhere else" (reversed order, superlative). South and Southeast Asia: "because China's government
   collected its taxes in silver" (drops "most"). Use East Asia's chain everywhere.
2. **Illustrative examples presented as CED content** in the Middle East ("the CED's 'varying status of
   different classes of women'", "the CED's astronomical charts", the Omanis as a group "the CED
   names"). Label each as one of the College Board's examples, as East Asia does.
3. **"(Sub-Saharan Africa gives Songhai's side)" points to nothing.** The Africa chapter gives no
   Songhai decisions. Give Songhai its own actions or drop the pointer; say the Swahili towns sought
   Oman's help.
4. **Portugal's motive told two ways** (South and Southeast Asia vs. Europe and the Middle East).
5. **Two truncated CED quotations** that shift the slant (Middle East KC-4.1.IV; South and Southeast
   Asia "limited certain groups' roles." with the period inside the quotation).
6. Judgment calls for the reviewer: Europe's "Europeans dominated the ocean routes"; Madeira as the
   plantation prototype; Gujarati agency at Diu 1509; the East Asia rewordings 2 (tribute) and 5
   (the 1639 gloss states the shogunate's charge as fact).

**Fixed now, on this branch:** the plain-language pass had dropped the causal link in East Asia
("because the Ming had given up paper money"; found by Ana and Okafor independently). Restored, and
the von Glahn sentence's "what this meant" (which pointed back at the tax reform) is now "How big was
the difference? ... has worked out the numbers for the 1590s."

**Separate small items the panel queued behind the merged pass (not competing for the vote):**

- **Narration bug, every eBook volume, live on main.** `splitLong()` in
  `assets/js/behistorical-listen.js` treats "4.5" as a sentence end: 51 mangled topic numbers across
  the 30 regional sections ("Topic 4. 7", or split across two utterances), plus `<br>` read as a
  run-on and stray punctuation-only utterances. Dev's measurement with a stubbed speech engine.
- **Reading time.** "About a fifteen-minute read" is not honest: 2,965 to 3,258 visible words per
  chapter (Reyes), 18 to 20 minutes of narration at 1x (Dev), 25 to 30 minutes for struggling readers.
- **Teacher note.** No guidance anywhere on when to use Part Two. The panel's suggestion: Era 3 review
  or a six-group jigsaw, not alongside the topics, linked from the review days.
- **Navigation on phones.** "Read Unit 4 by Region" lands on an intro that links no region (the
  target can be 48.7 screens below); no next-region link; "Back to contents" only at chapter head;
  "Read alongside" and "Back to contents" tap targets 52x12px (WCAG 2.5.8 asks 24px); At a Glance
  has no contents link; cross-region links land on chapter tops.
- **Developer-only:** the East Asia module header says KC-4.3.II.A.i is "Left out on purpose" while the
  module claims and quotes it (probably meant A.iii).

## Plain-language and accuracy pass (2026-11-21, Jeff: "do unit 4 and 5 together", target 8.5 from every persona)

The merged pass the five-persona panel agreed on (2026-11-17): the East Asia method applied to the
other five chapters, and the panel's accuracy and consistency findings fixed in the same edit. One
rewriter per chapter, briefed with the shared rules (one idea per sentence; College Board words in one
`cb` box per section, quoted word for word; mistake boxes after the claim they correct; six closing
cards in a fixed order; shared accounts of silver and of Portugal's motives). Not yet independently
reviewed: the reviewer loop that follows starts with the items marked **NEW FACT** below.

| Chapter | Story sentence average | Over 25 words | Grade (story) | Whole chapter, words |
|---|---|---|---|---|
| East Asia (2026-11-16) | 12.6 | 4 | 6.5 | about 3,200 |
| South and Southeast Asia | 20.8 to 12.4 | 25 to 1 | 10.8 to 6.2 | 2,887 to 3,342 |
| Middle East | 20.1 to 12.5 | 31 to 0 | 9.6 to 6.3 | 3,036 to 2,713 |
| Sub-Saharan Africa | 20.7 to 11.4 | 27 to 0 | 10.5 to 6.1 | 2,942 to 3,108 |
| Europe | 20.3 to 13.2 | 26 to 1 | 9.9 to 6.3 | 2,985 to 3,195 |
| Americas | 19.5 to 12.2 | 31 to 0 | 10.9 to 7.2 | 3,231 to 3,026 |

Story prose shrank in every chapter; whole-chapter length held near 3,000 words because the College
Board's words now sit in boxes (about 350 to 540 words a chapter). The reading time on the page is
measured, 20 to 25 minutes.

**Panel findings, how each was closed.**

1. *Three causes for silver:* every chapter now gives East Asia's chain (already worth more in China,
   because the Ming had given up paper money; the Single Whip then made most taxes payable in silver;
   China mined little). South and Southeast Asia and the Americas rewritten; no superlative.
2. *Illustrative examples as CED content (Middle East):* every "the CED's" and "the CED names" is gone
   from the story; each example is labelled one of the College Board's examples in the box.
   **Adjacent, not changed here:** Topic 4.7's deep reading (line 135) still says "The College Board
   names 'the varying status of different classes of women within the Ottoman Empire'", the same error.
3. *"Songhai's side" pointed at nothing:* Sub-Saharan Africa now gives Songhai's own decisions. **NEW
   FACT:** Askia Ishaq II emptied Gao and offered tribute in gold and captives if the Moroccans would
   leave; al-Mansur refused and sent a harder commander; Ishaq was deposed and died in exile; Askia
   Nuh fought on from Dendi through much of the 1590s (Gomez 2018, p. 365; Levtzion, Cambridge History
   of Africa 4, pp. 165 to 166, both via secondary summaries). The Swahili towns asked Oman for help:
   **NEW FACT**, Africa names Pate (EBSCO; Cambridge History of Africa 4, pp. 529 to 530, via a
   summary), the Middle East names no town; Swahili towns helped Portugal back into Mombasa 1728 to
   1729.
4. *Portugal's motive told two ways:* all chapters now give profit from cutting out the middlemen, West
   African gold, and the crusading motive from Ceuta (1415), as Topic 4.2 does.
5. *Truncated CED quotations:* KC-4.1.IV now quoted whole (Middle East); the Topic 4.7 sentence ending
   "roles in society, politics, or the economy." quoted whole (South and Southeast Asia).
6. *Judgment calls:* Europe's "dominated the ocean routes" narrowed (Atlantic trade; in Asia some ports
   and some sea lanes held by force while Asian merchants kept much of the trade). Madeira: "sugar
   plantations worked by enslaved people reached Atlantic islands before the Americas" (Madeira before
   1492, then São Tomé), the same in Africa and the Americas. Diu 1509: **NEW FACT**, Gujarat's governor
   Malik Ayaz made his own peace, returned the Portuguese prisoners from Chaul (1508), and put off a fort;
   Portugal built one only by treaty in the 1530s (Bassein 1534) (Wikipedia, "Battle of Diu" and "Malik
   Ayyaz"; Winter, Indian Historical Review 2024, summary only). East Asia: tribute now "accept, at least
   in ceremony"; the 1639 charge attributed to the shogunate.

**Other rewordings a reviewer should look at first:** Europe, Ambon 1623 now "ten English company men
and ten others" with the charge and the confessions taken under torture (Topic 4.5), and "leading
Englishmen, most of them nobles" for 1688; Middle East, "At its heart, the fight was about which route"
for the Portuguese and Ottoman contest; Americas, "about one-seventh" for the mit'a and "helped feed"
for American crops (ledger hedges restored).

**Dropped with their details (all listed in each module's header):** among them Dias 1488, the Royal
African Company 1672, Mombasa sacked 1505 and 1528, Magellan's landing 1521 and crossing, Tordesillas in
the Americas chapter (kept in South and Southeast Asia), the 1494 to 1696 Pueblo and Palmares detail,
Matteo Ricci 1601 (East Asia keeps it), Ptolemy, Murad IV's tobacco ban, Shivaji 1664, Makassar 1667 to
1669. Ambon now lives only in Europe, which South and Southeast Asia links.

## Review loop after the plain-language pass (from 2026-11-22). Rule: run fresh passes until one is clean.

Seven fresh reviewers a pass across both units: six history reviewers (two chapters each, web
sources) and one CED, readability and consistency reviewer across all twelve chapters. Brief: the
course's review template adapted for regional chapters. Findings are written here as PENDING, and
pushed, before any fix.

### Pass 1 (2026-11-22)

**Reviewer G (CED and consistency, all twelve chapters), Unit 4 items:**

- G1. East Asia, Political card: "After 1639 only the Dutch could trade in Japan" contradicts the
  chapter's own Chinese merchants at Nagasaki. **FIXED:** "After 1639 the Dutch were the only Europeans allowed to trade in Japan".
- G4. Americas, story in short: "Spain forced Indigenous men to work its silver mines" generalizes
  Potosí's mit'a to all mining (Zacatecas relied largely on paid labor). **FIXED:** "At Potosí, Spain forced Indigenous men to work its silver mine".
- G7. Europe claims KC-4.2 (environmental processes not taught); Sub-Saharan Africa lists KC-4.2
  but neither quotes nor teaches it. Europe **FIXED** (now teaches the livestock half from Topic 4.3); Sub-Saharan Africa **FIXED** (KC-4.2 quoted whole in section 2's box; manufacturing taught: "Weavers in India made more and more cloth for sale in Africa", Riello 2013, to be confirmed by the next pass)
- G10. Europe, Argue it and section 2 lead: "kings and queens" charter companies, but the Dutch
  Republic chartered the VOC. **FIXED:** "a project of rulers and states"; Argue it asks about "Europe's rulers"; "official grants of special rights".
- G15b. Middle East, section 4 box: the Morocco and Songhai example stands without its Key Concept
  (quoted only in section 2). **FIXED:** the Morocco and Songhai example moved into section 2's box under KC-4.3.III.ii, pointing to section 4.
- G15c. Europe and Middle East: Zacuto's tables "grew out of" Muslim and Jewish astronomy in Toledo;
  the Alfonsine tables were compiled largely by Jewish and Christian scholars on the Toledan Tables.
  Europe **FIXED** (Toledan Tables c. 1080 by Muslim astronomers, updated in the 1270s by Jewish astronomers for Alfonso X, Zacuto built on that version); Middle East **FIXED** (D1)
- Not verified by the reviewer: the slave-trade figures (278,000 in the 1500s; more than 2.5 million
  1701 to 1750) and the Morga 1609 quotation. To check.

**Reviewer B (history: Europe, Americas).** Verified sound: all 42 CED quotations; 1517; the compass
by about 1100; Zacuto 1496; Elmina, Goa, Malacca, Hormuz; Mun and 1664; the 1651 Navigation Act;
Amboyna (10 English, 9 Japanese, 1 Portuguese); the Calico Acts; the Fronde; 1649 and Razin; the 1711
Senate; Cook and Borah; Gualpa's 1572 account; the mit'a figures; four-fifths of silver (Flynn and
Giráldez 1995); the Slave Voyages figures; Virginia 1662; the Pueblo Revolt; Jamaica; Stono; Palmares.

- B1. Europe: "On Africa's coasts, though, African rulers and merchants decided who and what was sold"
  contradicts Angola, where Portugal's own wars took captives (Ndongo, 1617 to 1621). **FIXED:** "On most of Africa's coasts ... In Angola, Portugal's own wars took captives too."
- B2. Americas: "Disease was killing the workers Spain needed. So Spain reused an Inca labor duty"
  makes disease the cause; the encomienda rewarded conquerors and Toledo's draft served the mercury
  process (Bakewell 1977). **FIXED:** "Spain rewarded its conquerors with the work of Indigenous communities"; "The new mercury method needed many workers. So in the 1570s Francisco de Toledo turned the mit'a into a draft" (Bakewell 1977).
- B3. Europe: the Dutch "looked for a Northwest Passage"; the VOC hired Hudson in 1609 for the
  northeast route and he turned west against instructions; Topic 4.2 says so. **FIXED:** "Most looked for a Northwest Passage ... In 1609 a Dutch company sent Henry Hudson to find a route north of Russia. Ice stopped him, and he turned west against his orders."
- B4. Americas: Madeira's workers "were enslaved people" reads as all; Vieira finds slaves beside
  paid settlers and sharecroppers, Greenfield the reverse. **FIXED:** "Many of its workers were enslaved ... Free settlers also grew cane, some for wages and some for a share of the crop" (Vieira); Sub-Saharan Africa matched ("Free settlers worked the cane beside them").
- B5. Americas: Comanche horse culture "By the 1700s" is too early; first in Spanish records 1706, the
  culture built during the century (NPS; Hämäläinen 2003). **FIXED:** "During the 1700s, Plains nations such as the Comanche built" (story and card).
- B6. Europe: pepper passed through "Mamluk Egypt or Ottoman lands" in the 1400s; Syria was Mamluk
  until 1516, Baghdad Ottoman from 1534. **FIXED:** "through Egypt or Syria. The Mamluk sultans ruled both."
- B7. Americas and Topic 4.7: casta "favored those born in Spain"; casta ranked ancestry, and the
  crown's appointments, not casta, favored peninsulares. **FIXED:** "People of Spanish ancestry stood at the top. Among them, the crown favored those born in Spain for its top posts." Topic 4.7 is being fixed to match.
- B8. Americas: story in short, forced silver-mine labor generalized (G4). **FIXED** with G4.
- B9. Europe, glossary: "Three wars at sea" defines the Anglo-Dutch Wars as three; there were four.
  **FIXED:** glossary "Wars at sea between England and the Dutch. The first three, from 1652 to 1674, were fought largely over trade."
- B10. Europe and Americas: silver dearer in China for one cause; East Asia gives two (paper money
  given up; a growing economy that ran on silver). Europe and Americas **FIXED**
- B11. Europe: KC-4.1.II.A shown with " ... " where the CED has a dash (no words left out); Americas:
  KC-4.1.IV.D.ii cut drops "including enslaved persons". Europe and Americas **FIXED** (the CED's dash kept inside the quotation)

**Reviewer D (history: Middle East, Sub-Saharan Africa).** Verified sound: the Afonso quotation
(Madureira, in Thornton 2023, p. 203); Montagu's letter of 1 April 1717; Tondibi; Ottoman aid to the
Mamluks before 1509 (Oxford Research Encyclopedia); the 1538 siege; the slave-trade figures.

- D1. Middle East: the Toledo tables "around 1080" by "Muslim and Jewish astronomers", Zacuto's
  "grew from theirs"; the Toledan Tables (c. 1080) were Muslim work, the Alfonsine Tables (1270s) were
  by Jewish astronomers for Alfonso X, and Zacuto built on the Alfonsine (G15c). **FIXED:** the Toledan Tables (around 1080) by Muslim astronomers; updated in the 1270s by Jewish astronomers for Alfonso X; Zacuto's 1496 tables based on that later version (story and card).
- D2. Middle East: "In 1450 the lands of Islam stretched from Morocco to Persia" leaves out India,
  Central Asia, Southeast Asia, the Swahili coast and West Africa, which the course's own chapters
  name. **FIXED:** "In 1450 the lands of Islam reached from West Africa to Southeast Asia. They included the East African coast, Central Asia and much of India. This chapter follows the lands from Morocco to Persia."
- D3. Middle East: "Most sugar, though, went to Europe" implies the other cash crops went to the
  Middle East; Topic 4.5: "Sugar and tobacco went to Europe"; the Topic 4.3 link does not tell it.
  **FIXED:** "Most American sugar and tobacco went to Europe. Some reached the Middle East too"; the Topic 4.3 link removed from the story.
- D4. Sub-Saharan Africa: "In 1591 al-Mansur sent"; the army left Marrakesh in October 1590 and
  fought at Tondibi on 13 March 1591. **FIXED:** "Late in 1590 al-Mansur sent an army ... In March 1591 he met them at Tondibi."
- D5. Both: "about 4,000 men with firearms" reads as all armed with guns; about 1,500 to 2,500
  arquebusiers, 1,500 cavalry, cannon. **FIXED** in both chapters and the card: "about 4,000 ... Many of them carried firearms."
- D6. Sub-Saharan Africa: KC-4.1.IV.D.ii cut drops "including enslaved persons" (B11). **FIXED:** KC-4.1.IV.D.ii quoted whole with the CED's dash.
- D7. Sub-Saharan Africa: plantations "crossed to Brazil in the 1500s" skips Hispaniola's sugar mills
  of about 1515 to 1520 (the 1522 Wolof revolt); the Americas chapter keeps "first great". **FIXED:** "From the late 1510s, enslaved Africans worked Spanish sugar mills on the Caribbean island of Hispaniola. Brazil's plantations grew far larger later in the 1500s."
- D8. Sub-Saharan Africa: quotes KC-4.1.IV's "global flow of silver", which the chapter never
  teaches. **FIXED:** Sub-Saharan Africa no longer claims or quotes KC-4.1.IV (five chapters teach it).
- D9. Sub-Saharan Africa: "In 1498 Vasco da Gama sailed around Africa and up its east coast"; he
  rounded the Cape in November 1497 and reached Malindi in April 1498. **FIXED:** "Late in 1497 Vasco da Gama sailed around the southern tip of Africa. In April 1498 he reached ... Malindi".

**Reviewer A (history: East Asia, South and Southeast Asia).** Verified sound: all 31 CED quotations;
Morga (Stanley's 1868 Hakluyt translation); the 1635 Nagasaki order (Columbia); Coen 1614; and the
standard dates from Macau 1557 to Malacca 1641.

- A1. East Asia, mistake box (and Topic 4.5): "Silver imports did drop in the 1630s and 1640s" states
  a disputed drop as settled; research had imports rising in the late 1630s, von Glahn's table puts
  the fall in the early 1640s (Atwell, JWH 16:4, 2005). **FIXED:** "Historians disagree about when silver imports fell in the last Ming years. They also disagree about how much any fall hurt." Topic 4.5 is being fixed to match.
- A2. East Asia, How we know: the 1590s Canton and Spain ratios are Chuan Han-sheng's (1969), cited by
  Flynn and Giráldez 2002, p. 392; von Glahn is credited there with the early-1500s ratios. **FIXED:** the 1590s ratios now credited to Chuan Han-sheng, "and later historians have used them".
- A3. East Asia: "In 1644 the Manchus conquered China" squeezes a conquest that ran to 1683. **FIXED:** "In 1644 the Manchus took Beijing and began to conquer China"; "Conquering the rest of China took decades. The last Ming loyalists, on the island of Taiwan, surrendered in 1683."
- A4. South and Southeast Asia, story in short: "From 1498 Portugal used warships and forts to tax";
  forts and passes came from 1503 on. **FIXED:** "From the early 1500s Portugal used warships and forts to tax part of that trade".
- A5. South and Southeast Asia (and Europe, Americas): silver dearer in China for one cause (B10).
  **FIXED** in South and Southeast Asia and Europe: "because the Ming had given up paper money, and China's growing economy ran on silver" (East Asia already said so).
- A6. South and Southeast Asia and Europe (and Topic 4.5): "In 1700 and 1721, England passed laws";
  the 1721 Calico Act was Great Britain's. **FIXED** in both chapters and both Economic cards: England in 1700, Great Britain in 1721. Topic 4.5 is being fixed to match.
- A7. South and Southeast Asia, mistake box: "The war was over who would rule and tax the Deccan"
  overcorrects into a sole cause. **FIXED:** "Much of the fighting was over who would rule and tax the Deccan."
- A8. East Asia quotes KC-4.1.V.B's first sentence only, without an ellipsis, and claims the code;
  South and Southeast Asia claims KC-4.2.II.B, teaching only the Indian Ocean export half. **FIXED:** East Asia no longer claims or quotes KC-4.1.V.B (four chapters teach it); South and Southeast Asia now teaches the household half of KC-4.2.II.B (Topic 4.4, Heywood).

### Pass 2 (2026-11-22), seven fresh reviewers

Pass 1 found about 75 items across both units, so a second pass was run. Letters continue from pass
1 (H to J here; Q is the CED and consistency reviewer for both units).

**Reviewer I (history: South and Southeast Asia, Middle East), 6 findings.** Verified sound: Akbar's
1564 jizya repeal and Aurangzeb's 1679 return; Coen's 1614 letter (Colenbrander); Calico Acts 1700
and 1721; the Nahmias press, 1493; malikâne, 1695; Alfonsine observations 1263 to 1272.

- I1. Middle East: "From the late 1500s, foot soldiers with guns won more and more wars", and the
  Technological card "Ottoman foot soldiers with guns won more and more wars"; read as Ottoman
  victories, false (Long War stalemate 1593 to 1606; Vienna 1683; Karlowitz 1699). The point is that
  battles turned on paid infantry, which needed cash (Pamuk, LSE GEHN). PENDING.
- I2. Middle East: "Winning did not bring Morocco the gold" is too absolute: Morocco took plunder and
  caravans of gold to Marrakesh in the 1590s; it never controlled the supply. PENDING.
- I3. Middle East, story and glossary: the lateen "lets a ship sail against the wind"; no sail sails
  straight into the wind; Topic 4.1 says "much closer to the wind than a square sail" (Campbell,
  JWH 1995). PENDING.
- I4. KC-4.1.II.A quotation: South and Southeast Asia drops "all of which", so the quoted sentence
  no longer parses; both chapters replace the CED's dash with " ... ". Middle East prints "groups'"
  with a straight apostrophe in KC-4.3.I.B. PENDING.
- I5. Middle East mistake box: "Indian Ocean pilots mostly used the kamal and wooden quadrants";
  quadrant use at sea is disputed (arXiv 2209.02371; King); Topic 4.1 names the kamal only. PENDING.
- I6. South and Southeast Asia: "Mughal armies fought him from the 1660s"; fighting began in 1657
  (Junnar and Ahmednagar raids; Nasiri Khan sent by Aurangzeb); the big campaigns came in the
  1660s. PENDING.

**Reviewer J (history: Sub-Saharan Africa, Europe), 5 findings.** Verified sound: every CED
quotation; Afonso I's 1526 letter (Thornton 2023, p. 203); Mun's quotation; Fort Jesus 1593 to 1596
and 1698 (UNESCO); all eleven cross-region links; shared facts with the other chapters.

- J1. Europe, story and glossary: three Anglo-Dutch wars "largely over trade"; the third (1672 to
  1674) followed the secret Treaty of Dover and was part of Louis XIV's Dutch War (Britannica,
  "Dutch War"). Same in Topic 4.5 (story line 137, glossary line 156). PENDING.
- J2. Sub-Saharan Africa, Technological card: "European power reached little farther" than the
  forts contradicts the chapter's own Portuguese wars inland from Luanda against Ndongo. PENDING.
- J3. Sub-Saharan Africa, story and Religious card: "Henrique became a bishop in 1518"; he was
  named titular bishop of Utica in 1518 and consecrated about 1520 to 1521 (DACB). PENDING.
- J4. Europe (and the Middle East chapter and both Intellectual cards): "In the 1270s Jewish
  astronomers updated them for Alfonso X"; the work ran 1263 to 1272 (Library of Congress). PENDING.
- J5. Sub-Saharan Africa (and the Americas chapter, Topic 4.6 line 275): "Several of the rebels
  came from Kongo" states Thornton's reading as fact; the 1739 account says "the Kingdom of Angola"
  and Portuguese speakers. PENDING.
