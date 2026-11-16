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
