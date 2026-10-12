# Topic 4.1 First & 10: Corrections Waiting on Jeff

**Written 2026-10-12, after review passes 1 and 2.** Jeff approved the 4.1 reading on
2026-10-12. Four independent reviewers then found nine places where it is wrong,
overclaims or reads badly. The corrections below are written and tested (house style and
CED checks pass with them applied) but are **not in the reading yet**: the reading is
locked to its approval fingerprint (`APPROVED_UNIT4_REWRITE_BLOB` in
`scripts/test/readings-golden.js`), and changing it re-opens approval.

**When Jeff approves:** apply the patch at the bottom with `git apply`, run
`npm run build:readings`, compute the new blob with
`git hash-object scripts/lib/reading-content/unit-4.js`, move the fingerprint with a dated
comment, rebuild the skills map and Socrates, and run `npm test`. The reasons and sources
for each change are in `docs/TOPIC-4-1-CLAIM-LEDGER.md` under "Review findings".

| # | Section | Now says | Corrected to | Why |
|---|---|---|---|---|
| 1 | 1, The Problem | "Indian Ocean sailors already used the compass and the astrolabe, and in the early 1400s the Ming admiral Zheng He led large fleets as far as East Africa." | "Indian Ocean sailors already used the compass, and they measured the height of the stars with simple tools such as the kamal, a small wooden card on a knotted string. In the early 1400s the Ming admiral Zheng He led large fleets as far as East Africa." | Indian Ocean pilots used the kamal and wooden quadrants; the astrolabe was mainly an astronomer's land instrument. The deck and eBook already say this. |
| 2 | 1, The Problem | "Far from the coast there are no islands to hop between and no landmarks to steer by." | "Far from the coast there are only a few scattered islands, and no landmarks to steer by." | Madeira and the Azores were already known by 1430, and the Azores were on the route home. |
| 3 | 2, Borrowed Tools | "Ptolemy's great work of Greek astronomy, which had been preserved and studied in Arabic before Europeans could read it again." | "Ptolemy's great work of Greek astronomy, which scholars in the Islamic world had preserved, studied, and corrected in Arabic." | Byzantine Greeks always had the book, and a Greek-to-Latin version existed in Sicily c. 1160. |
| 4 | 2, Borrowed Tools | "Before those translators, Muslim and Jewish astronomers in Toledo had built tables of the sky." | "Even before the translators got to work, Muslim and Jewish astronomers in Toledo had built tables of the sky." | The translators were two paragraphs back; "those" was unclear. |
| 5 | 3, New Ships | "That is what made ocean trade pay off voyage after voyage." | "That made carrying goods by sea much cheaper." | The fluyt worked mostly in European bulk trades such as the Baltic, not long ocean routes. |
| 6 | 4, The Wind | "Portuguese sailors called this loop the volta do mar" | "Historians call this loop the volta do mar" | Sailors at the time spoke of the turn from Guinea or Mina; "volta do mar" is mostly the historians' term. |
| 7 | 4, The Wind (callout) | "The loop only worked with the other tools. A pilot needed latitude readings to know when to turn, and a ship that could stay at sea for weeks." | "The loop needed a ship that could stay at sea for weeks, and it grew far more reliable once pilots could read their latitude, because then they knew when to turn." | The loop was sailed in the 1440s and 1450s, before the first recorded latitude readings at sea (about 1460). |
| 8 | 5, The Payoff (callout) | "In 1400 the biggest ships and the longest voyages were in the Indian Ocean and China" | "In the early 1400s the biggest ships and the longest voyages were in the Indian Ocean and China" | Zheng He's voyages ran 1405 to 1433. The deck already says "early 1400s". |
| 9 | BeReady | one long sentence with a list in parentheses | split into two sentences: the borrowed tools, then the ships and the wind | A 70-word sentence is hard for a ninth grader to take in at a glance. Same content. |

## The patch

```diff
diff --git a/scripts/lib/reading-content/unit-4.js b/scripts/lib/reading-content/unit-4.js
index 7f110bcb..b2880b2f 100644
--- a/scripts/lib/reading-content/unit-4.js
+++ b/scripts/lib/reading-content/unit-4.js
@@ -62,11 +62,11 @@ module.exports = {
         "blocks": [
           {
             "type": "p",
-            "html": "In Unit 2 you saw how the Indian Ocean ran on a schedule. The <span class=\"kt\">monsoon</span> winds blow from the northeast in winter and turn around to blow from the southwest in summer. A merchant could sail to East Africa, trade, wait a few months, and ride the reversed wind home. Indian Ocean sailors already used the compass and the astrolabe, and in the early 1400s the Ming admiral Zheng He led large fleets as far as East Africa."
+            "html": "In Unit 2 you saw how the Indian Ocean ran on a schedule. The <span class=\"kt\">monsoon</span> winds blow from the northeast in winter and turn around to blow from the southwest in summer. A merchant could sail to East Africa, trade, wait a few months, and ride the reversed wind home. Indian Ocean sailors already used the compass, and they measured the height of the stars with simple tools such as the kamal, a small wooden card on a knotted string. In the early 1400s the Ming admiral Zheng He led large fleets as far as East Africa."
           },
           {
             "type": "p",
-            "html": "Now stand on the coast of Portugal around 1430. The Atlantic Ocean is in front of you, and it does not work like that. Off the northwest coast of Africa, the <span class=\"kt\">trade winds</span> blow from the northeast nearly all year. Sailing south along the coast is easy. Sailing back north means fighting that same wind the whole way, and it never turns around for you. Far from the coast there are no islands to hop between and no landmarks to steer by."
+            "html": "Now stand on the coast of Portugal around 1430. The Atlantic Ocean is in front of you, and it does not work like that. Off the northwest coast of Africa, the <span class=\"kt\">trade winds</span> blow from the northeast nearly all year. Sailing south along the coast is easy. Sailing back north means fighting that same wind the whole way, and it never turns around for you. Far from the coast there are only a few scattered islands, and no landmarks to steer by."
           },
           {
             "type": "p",
@@ -85,7 +85,7 @@ module.exports = {
         "blocks": [
           {
             "type": "p",
-            "html": "Europe solved its problem mostly with tools and knowledge it did not invent, and that knowledge did not travel on its own. It moved with people: merchants on the trade networks you studied in Unit 2, and scholars in places like Toledo, a city in Spain where Christian and Jewish translators turned Arabic books, many written by Muslim scholars, into Latin. One of those books was Ptolemy's great work of Greek astronomy, which had been preserved and studied in Arabic before Europeans could read it again."
+            "html": "Europe solved its problem mostly with tools and knowledge it did not invent, and that knowledge did not travel on its own. It moved with people: merchants on the trade networks you studied in Unit 2, and scholars in places like Toledo, a city in Spain where Christian and Jewish translators turned Arabic books, many written by Muslim scholars, into Latin. One of those books was Ptolemy's great work of Greek astronomy, which scholars in the Islamic world had preserved, studied, and corrected in Arabic."
           },
           {
             "type": "p",
@@ -97,7 +97,7 @@ module.exports = {
           },
           {
             "type": "p",
-            "html": "A sun reading only helps if you know where the sun should be on that day, so pilots also needed <span class=\"kt\">astronomical charts</span>: tables showing where the sun and stars would be on each day of the year. Those had a family tree, too. Before those translators, Muslim and Jewish astronomers in Toledo had built tables of the sky. Astronomers working for a king of Castile built new tables on them. Then a Jewish astronomer named Abraham Zacuto produced an almanac that was printed in Portugal in 1496 and carried on Portuguese voyages."
+            "html": "A sun reading only helps if you know where the sun should be on that day, so pilots also needed <span class=\"kt\">astronomical charts</span>: tables showing where the sun and stars would be on each day of the year. Those had a family tree, too. Even before the translators got to work, Muslim and Jewish astronomers in Toledo had built tables of the sky. Astronomers working for a king of Castile built new tables on them. Then a Jewish astronomer named Abraham Zacuto produced an almanac that was printed in Portugal in 1496 and carried on Portuguese voyages."
           },
           {
             "type": "p",
@@ -128,7 +128,7 @@ module.exports = {
           },
           {
             "type": "p",
-            "html": "The <span class=\"kt\">fluyt</span> came much later. Dutch shipbuilders designed it around 1600 to do one job very well: carry a large cargo with a small, cheap crew. That is what made ocean trade pay off voyage after voyage."
+            "html": "The <span class=\"kt\">fluyt</span> came much later. Dutch shipbuilders designed it around 1600 to do one job very well: carry a large cargo with a small, cheap crew. That made carrying goods by sea much cheaper."
           }
         ],
         "callout": {
@@ -147,11 +147,11 @@ module.exports = {
           },
           {
             "type": "p",
-            "html": "So to get home from West Africa, a ship did something that feels backward. Instead of fighting the wind along the coast, it sailed away from land, out west and north into the open ocean, until it reached the westerlies, and then it rode them home. Portuguese sailors called this loop the <span class=\"kt\">volta do mar</span>, roughly \"the turn of the sea.\""
+            "html": "So to get home from West Africa, a ship did something that feels backward. Instead of fighting the wind along the coast, it sailed away from land, out west and north into the open ocean, until it reached the westerlies, and then it rode them home. Historians call this loop the <span class=\"kt\">volta do mar</span>, roughly \"the turn of the sea.\""
           },
           {
             "type": "p",
-            "html": "The loop only worked with the other tools. A pilot needed latitude readings to know when to turn, and a ship that could stay at sea for weeks. That is why the College Board lists new tools, new ship designs, and knowledge of winds and currents together."
+            "html": "The loop needed a ship that could stay at sea for weeks, and it grew far more reliable once pilots could read their latitude, because then they knew when to turn. That is why the College Board lists new tools, new ship designs, and knowledge of winds and currents together."
           }
         ],
         "callout": {
@@ -174,7 +174,7 @@ module.exports = {
           },
           {
             "type": "p",
-            "html": "Here is the twist. In 1400 the biggest ships and the longest voyages were in the Indian Ocean and China, not Europe. Europe faced a harder ocean and solved it by combining knowledge from older worlds. The breakthrough was a combination, not a European invention."
+            "html": "Here is the twist. In the early 1400s the biggest ships and the longest voyages were in the Indian Ocean and China, not Europe. Europe faced a harder ocean and solved it by combining knowledge from older worlds. The breakthrough was a combination, not a European invention."
           },
           {
             "type": "p",
@@ -187,7 +187,7 @@ module.exports = {
         }
       }
     ],
-    "takeaway": "The Atlantic's wind did not turn around, so the hard part was getting home. Europe borrowed tools from older worlds (the compass from China, the astrolabe and astronomical charts from Greek and Islamic astronomy, the lateen sail from the Mediterranean and the Islamic seas), built new ships (caravel, carrack, fluyt), and learned how the Atlantic's winds and currents turn (the volta do mar). Together they made the ocean a two-way road, and new routes for trade and travel opened around Africa to Asia and across the Atlantic.",
+    "takeaway": "The Atlantic's wind did not turn around, so the hard part was getting home. Europe borrowed tools from older worlds: the compass from China, the astrolabe and astronomical charts from Greek and Islamic astronomy, and the lateen sail from the Mediterranean and the Islamic seas. It built new ships (caravel, carrack, fluyt) and learned how the Atlantic's winds and currents turn (the volta do mar). Together they made the ocean a two-way road, and new routes for trade and travel opened around Africa to Asia and across the Atlantic.",
     "checkBadge": "Check Your Thinking",
     "checkTitle": "Three Questions, Supported Answers Only",
     "questions": [
```
