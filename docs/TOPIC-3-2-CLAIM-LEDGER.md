# Topic 3.2 Claim Ledger

**Started 2026-10-06 at the story stage (build-topic Phase 3). Updated the same day for story
revision 2, rebuilt from the CED itself** (`scripts/lib/ced-source/unit-3.js`). Every material claim in the
story draft is a row here, so the story Jeff approves has already been checked. Rows for the
deck, the First & 10, the eBook chapter and the other surfaces are added as those are built
(Phase 9). A claim that repeats across surfaces is one row listing every place it appears.

Status is exactly one of VERIFIED, NARROWED, REMOVED, NEEDS JEFF. The CED decides scope;
scholarship decides truth.

## What the CED requires (checked against the CED itself)

| Claim | Where it appears | Source and what it actually says | Status |
|---|---|---|---|
| 3.2's reasoning process is Comparison; its suggested skill is 4.A Contextualization. | Story s1, beats 4 to 11; Skill Builder | Fall 2026 CED, Course Framework p. 67 (Unit 3 table) and p. 70 (topic page). Revision 1 said "causation", taken from the story map. | VERIFIED (revision 1 was wrong) |
| The learning objective and the three Key Concept sentences, quoted. | Story s1; lesson data; Key Concept bands | CED p. 70, transcribed in `scripts/lib/ced-source/unit-3.js`; `ced-source.test.js` confirms the lesson data matches word for word. | VERIFIED |
| Illustrative examples are optional; the Key Concept sentences are the required content. | Story s1 and s5 | CED p. 85: examples "are intended as examples and do not in any way constitute additional, preferred, or required information. Historical development statements comprise the knowledge required to demonstrate mastery of the learning objective." | VERIFIED |
| The CED's illustrative list for 3.2 includes the Mexica practice of human sacrifice. | Story s1; contract | CED p. 70, under "Religious ideas". The repo contract had dropped it; restored. | VERIFIED |
| The CED's sample activity for 3.2 pairs Leo Africanus (1526) and Busbecq (1555 to 1562). | Story s1, question 8 | CED p. 68, activity 2. | VERIFIED |
| 3.1, the previous topic, matches the CED too: learning objective, Key Concepts, examples, and its reasoning process (Causation, p. 69). | `docs/TOPIC-3-1-STORY-DRAFT.md` (approved 2026-10-04, not edited) | `ced-source.test.js` checks 3.1's lesson data, contract, story map entry and approved draft against the source file. | VERIFIED |

## Story claims (docs/TOPIC-3-2-STORY-DRAFT.md)

| Claim | Where it appears | Source and what it actually says | Status |
|---|---|---|---|
| The day after Constantinople fell, Mehmed had his grand vizier Çandarlı Halil arrested, and soon had him executed. | Story s3, beat 5 | Britannica, "Mehmed II": "The day after the capture of the city, Çandarlı was arrested and soon afterward was executed in Edirne." Wikipedia (Çandarlı Halil Pasha the Younger) gives 10 July 1453. | VERIFIED |
| Halil's family had held the grand vizierate for much of the past hundred years. | Story s3 | Wikipedia, "Grand vizier": the Çandarlı family held the post for 64 years between 1365 and 1453. | VERIFIED (narrowed from "most of the past century" in the first draft) |
| Mehmed wanted servants who owed everything to him (motive for the arrest). | Story s3, beat 5 | Wikipedia, "Grand vizier": after Halil, the post was chosen "nearly exclusively from the kul system", men "much easier for the sultans to control" than free Turkish aristocrats. But a 2025 Belleten article ("Rise of Indigenous Ottoman Viziers in the Sixteenth Century", as summarised in search results; full text returned HTTP 503) argues Mehmed's post-1453 viziers came mostly from converted Balkan and Byzantine aristocratic families, and true devshirme grand viziers dominated only from Süleyman's reign. Britannica adds that Halil had opposed the siege. | NARROWED: the story claims only the motive (servants who owe everything to him) and does **not** say Mehmed's next viziers were devshirme recruits. A second source on the motive is owed in Phase 9. |
| Devshirme: Christian boys, mostly from the Balkans, taken from their families, converted to Islam and trained; the strongest became Janissaries, the ablest went to palace schools and could become governors or grand vizier. | Story s3, beat 6; lecture, reading, eBook | World History Commons, "Devshirme System" (as summarised): a forced levy, probably begun in the late 14th century, of Christian boys mostly from the Balkans; converted; many became soldiers including the Janissaries; others ministers, provincial governors and grand viziers. | VERIFIED. Ages vary by source (8 to 14, 10 to 15, 8 to 18); the story gives no age. |
| Devshirme recruits had no family power inside the empire, so they depended on the sultan. | Story s3 | Standard interpretation; Wikipedia "Grand vizier" (kul administrators "much easier for the sultans to control"). | VERIFIED as interpretation. Second source owed in Phase 9. |
| Akbar gave officials a numbered rank (mansab) that set pay and the number of horsemen; many were paid by jagir, the right to collect land revenue from an area; jagirs were moved every few years and rank was not inherited. | Story s3, beat 6; lecture, reading, BeSurreal, BeInTheRoom, primary source | Wikipedia, "Mansabdar", citing the Ain-i-Akbari: grades from commanders of 10 to 10,000; rank "personal, non-hereditary, and revocable"; paid in cash or "more often, by jagir, an assignment of land revenue ... normally transferred every few years". | VERIFIED. A second, scholarly source owed in Phase 9 (Richards, *The Mughal Empire*, or Habib). |
| Akbar gave high ranks to Hindu Rajput kings. | Story s3 | Common to every survey (for example Man Singh of Amber). | VERIFIED in outline; named example and source owed in Phase 9 if a slide names one. |
| Samurai were moved off their lands into castle towns from the late 1500s, and under the Tokugawa (from 1603) most were paid a yearly stipend counted in rice. | Story s3, beat 6 | Search summary of Tokugawa sources (openhistory.org; Wikipedia "Kashindan"; University of Colorado "Tokugawa Japan: An Introductory Essay"): after 1588 samurai were "progressively removed from their independent fiefs ... into the daimyos' castle towns"; retainers paid a land stipend (chigyō) or a rice stipend (fuchimai) by rank. | NARROWED to "most" and "from the late 1500s". Phase 9 must confirm "most" against the Colorado essay or a scholarly survey, or drop it to "many". |
| Louis XIV claimed divine right. | Story s3, beat 7 | Château de Versailles, "Louis XIV", and general surveys. | VERIFIED. Exact wording to be checked against the Versailles page in Phase 9. |
| Louis XIV moved his court to Versailles in 1682; nobles spent their time at court competing for favor. | Story s3, beat 8 | EBSCO Research Starters, "French Court Moves to Versailles": 1682. Château de Versailles site on the court. | VERIFIED (date). The "leash on the nobles" interpretation is standard; second source owed in Phase 9. |
| Askia Muhammad seized the Songhai throne in 1493. | Story s3, beat 7 | Britannica / EBSCO, "Muḥammad I Askia": reigned from 1493 after taking power from Sonni Ali's heir. | VERIFIED |
| Askia Muhammad made the pilgrimage to Mecca and came home with the title of caliph; he backed Islamic scholars and judges. | Story s3, beat 7 | Britannica (as summarised): hajj 1496 to 1497; persuaded a caliph to recognise him as caliph of the western Sudan; Islam "a pillar of his rule". EBSCO: revived Timbuktu as a center of learning. Sources disagree on **who** granted the title (the Abbasid caliph in Cairo or the sharif of Mecca) and on the hajj years (1495 to 1498 across sources). | NARROWED: the story gives neither the grantor nor the year. |
| The Inca ruler was called the son of the Sun; the Coricancha, the sun temple at the center of Cuzco, put that claim in stone. | Story s3, beat 7 | World History Encyclopedia, "Coricancha": the most sacred site, dedicated especially to Inti, "the god of the sun", and to "his living incarnation, the Inca emperor". Wikipedia, "Coricancha": the most important temple of the Inca Empire, at Cuzco; Santo Domingo built on its walls. | REMOVED from the story in revision 2 (optional CED example not used). Verification kept in case it returns. |
| The Qing were Manchus ruling a mostly Han Chinese empire; their imperial portraits showed them as Chinese emperors. | Story s3, beat 8 | Smithsonian / general surveys. | REMOVED from the story in revision 2 (optional CED example not used). Verification kept in case it returns. |
| The Qianlong Emperor was also painted as a Buddhist holy figure (Manjushri) for his Tibetan and Mongol subjects. | Story s3, beat 8; picture list | Smithsonian National Museum of Asian Art, F2000.4: "By having himself depicted as ... Manjusri ... the Qianlong emperor positioned himself squarely in the Tibetan Buddhist hierarchy"; relations with Mongol and Tibetan subjects "were couched in Buddhist, rather than Confucian, cultural rhetoric." | REMOVED from the story in revision 2 (optional CED example not used). Verification kept in case it returns. |
| The Mughals built mausolea such as the Taj Mahal and great mosques in their capitals. | Story s3, beat 8 | General; dates to be added only if a slide carries them. | VERIFIED in outline. |
| Ottoman tax farming: the state sold the right to collect a tax to a bidder, who paid the state and kept what extra he collected. | Story s3, beat 9; lecture, reading | Britannica, "Iltizām": the state "auctioned taxation rights to the highest bidder", who collected the taxes, paid in installments and kept a part. | VERIFIED |
| Tax farming got the sultan cash fast, and the farmers could get squeezed. | Story s3, beat 9 | Malikâne (from 1695) secured "large upfront bids" (search summary of Wikipedia "Malikâne"). The squeeze is standard but needs a cited source. | NARROWED to "could". Source owed in Phase 9. |
| Zamindars were local landholders who collected the land tax for the Mughal state and kept a share. | Story s3, beat 9 | Wikipedia, "Zamindar", and Indian survey sources (as summarised): hereditary claim to a share of the produce; collected revenue for the state and kept a share, stated in official documents as 10 percent. | VERIFIED in outline; the 10 percent figure is **not** used. Scholarly source owed in Phase 9. |
| The Mexica kept painted tribute lists of what each conquered province owed; the surviving copies were made around or just after the Spanish conquest. | Story s3, beat 9; picture list | Wikipedia, "Codex Mendoza": compiled c. 1541 under Viceroy Mendoza; its tribute section lists the tribute of 39 provinces and is probably copied from the Matrícula de Tributos, whose own date (just before or just after the conquest) is debated. | VERIFIED as narrowed. |
| Tribute goods included cloaks, cacao, feathers and warrior costumes. | Story s3, beat 9 | Codex Mendoza tribute section, as summarised: cotton mantles, warrior costumes, cacao, foodstuffs, feathers, jade, gold dust. | VERIFIED |
| Ming China combined many taxes and labor duties into payments in silver (the Single Whip reform). | Story s3, beat 9 | EBSCO, "Single-Whip Reform", and Wikipedia, "Single whip law": land tax, labor service and miscellaneous levies consolidated into one payment in silver, spread empire-wide around 1580 to 1581 under Zhang Juzheng. | VERIFIED. The story gives no date. |
| Babur won north India in 1526; in 1644 the Manchus took Beijing and went on to conquer China. | Story s3.1 | Panipat 1526 (3.1's approved story and chapter); the Qing took Beijing in 1644 and completed the conquest of China over the following decades (standard chronology). Revision 2's first wording, "the Manchus took China in the 1640s", was narrowed because the conquest ran on past the 1640s. | NARROWED |
| "Devshirme" is a Turkish word meaning "collecting". | Story s3.2 | 3.1's lesson data glosses it "('collection')"; Turkish *devşirme*, from *devşirmek*, to collect or gather. A dictionary or Britannica citation is owed in Phase 9. | VERIFIED in outline |
| Japan had come through more than a century of civil war between lords with their own lands and armies. | Story s3, beat 5 | Sengoku period, conventionally c. 1467 to the 1590s (Wikipedia, "Sword hunt", and survey sources as summarised). | VERIFIED in outline; a scholarly source owed in Phase 9. |
| Context for the samurai change: rulers feared the warrior lords who had fought each other; Hideyoshi's 1588 sword hunt and the separation of warriors from farmers. | Story s3, beat 5 | Wikipedia, "Sword hunt", and UNC "Points of Peace" (as summarised): the 1588 sword hunt disarmed farmers, separated warriors from farmers, and reined in the daimyo as a military threat. | VERIFIED in outline; second source owed in Phase 9. |
| Context for the devshirme: the Ottomans ruled many conquered Christian subjects and feared over-mighty Turkish families. | Story s3, beat 5 | Interpretation. Supported by the Çandarlı rows above (kul administrators "much easier for the sultans to control" than Turkish aristocrats). | NARROWED to the two facts the sources give; second source owed in Phase 9. |
| Louis XIV lived through the Fronde as a boy (from 1648, aged nine), when great nobles rose against the crown; Versailles kept the great nobles at court, away from their estates. | Story s3, beat 7 | Britannica, "Louis XIV" (as summarised): his policies are believed rooted in the Fronde, "when men of high birth readily took up the rebel cause against their king"; he encouraged leading nobles to live at Versailles, away from their regional power bases. | VERIFIED; the causal link is stated as context, not as Louis's stated motive. |
| Ottoman tax farming grew in the late 1500s, when the sultans needed cash fast to pay salaried soldiers. | Story s3, beat 8 | Search summaries of Springer, "A Research on Tax-Farming (Iltizam) Contracts in the Ottoman Empire: The Case of Bolu", and Darling's work: significant changes in iltizam from the second half of the 16th century; salaried armies drove the auctioning of collection rights for cash. | NARROWED to "grew"; the full scholarly text owed in Phase 9. |
| Zamindars held their rights by inheritance and local standing. | Story s3, beat 8 | Wikipedia, "Zamindar" (as summarised): "any person with any hereditary claim to a direct share in the peasant's produce." | VERIFIED in outline; scholarly source owed in Phase 9. |

## Claims about other topics, for the gate

| Claim | Where it appears | Source and what it actually says | Status |
|---|---|---|---|
| Morocco's 1591 invasion of Songhai was motivated by the gold and salt trade (3.1 eBook chapter). | `scripts/lib/deep-reading-content/topic-3-1.js`, section 06 | Wikipedia, "Moroccan invasion of the Songhai Empire" (as summarised): al-Mansur demanded payment for the Taghaza salt and sought West African gold; the invasion "may have been" a way to elevate his claim to be a universal Muslim ruler. | NEEDS JEFF (3.1's open decision; story draft question 2). |

## Claims added during the build (First & 10, deck, lesson surfaces)

| Claim | Where it appears | Source and what it actually says | Status |
|---|---|---|---|
| Leo Africanus passage on the king of Tombuto (gold plates and scepters "some whereof weigh 1300 pounds", prostration ritual, "doctors, judges, priests, and other learned men ... bountifully maintained at the king's cost"). | Primary Source | Pory translation, ed. Brown, Hakluyt Society 1896, vol. 3, pp. 824 to 825; read in the archive.org scan (historyanddescr02porygoog) and cross-checked in a second scan; spelling modernized and cuts marked on the page. The 1300 pounds is labeled as Leo's claim. Brown's note 9 identifies the king as Askia (Muhammad), whose capital was Gao. | VERIFIED (quotation and attribution) |
| Busbecq passage on appointment by merit ("In making his appointments the Sultan pays no regard to any pretensions on the score of wealth or rank ... sons of shepherds or herdsmen"). | Primary Source | Forster and Daniell, *The Life and Letters of Ogier Ghiselin de Busbecq*, London 1881, vol. 1, p. 154 (archive.org lifelettbusbecq01forsuoft), read in the scan. Letter I, Amasya; the editors date it 1 September 1555. | VERIFIED (quotation); "the sons of shepherds were probably devshirme men" is stated on the page as probable, as the editors' and agent's reading, not Busbecq's word. |
| The CED suggests the Leo Africanus and Busbecq pair for 3.2. | Primary Source intro | CED p. 68, sample activity 2. | VERIFIED |
| The Qianlong court portrait is dated 1736. | Deck slide 10 (case file), presentation-assets credit | The painting's own inscription, legible in the image: 乾隆元年八月吉日, "an auspicious day in the eighth month of the first year of Qianlong", i.e. 1736. Commons: "Part of the painting Qianlong Emperor and His Consorts", artist Giuseppe Castiglione, public domain. | VERIFIED (date from the inscription); attribution "attributed to Castiglione" kept as attribution. |
| Topkapı caption: the sultans' palace after the conquest; its palace school trained the most promising devshirme recruits. | Lecture card 2, Evidence Lab card | Standard (Enderun palace school); scholarly source owed. | VERIFIED (topkapipalace.com.tr, Enderun; fact-check 2026-10-06) |
| Taj Mahal caption: Shah Jahan's mausoleum for his wife, built in the 1600s; photograph taken 2004. | Evidence Lab card, lecture card 4 | Commons: photograph 6 March 2004 (CC BY-SA 3.0, used by URL with its source link). UNESCO dates the building to the mid-1600s. | VERIFIED in outline; UNESCO citation owed. |
| BeSurreal: Versailles c. 1690, nobles at court competing for the king's favor, the king's daily routine as ceremony, posts and pensions. | BeSurreal | Britannica and Château de Versailles in outline (see the Versailles rows above); Château de Versailles quoting Saint-Simon on the king marking absentees. | VERIFIED (fact-check 2026-10-06) |

## Review findings

Four reviews ran on 2026-10-06 after the first ship: one independent reviewer of every
surface (pass 1) and three claim fact-checkers (the reading and lesson page; the teacher deck;
the eBook chapter and scenario). Each finding was checked against the cited source before it
was acted on. Fixed means fixed in the follow-up ship.

### Reviewer pass 1

| # | Finding | Disposition |
|---|---|---|
| 1 | BeSurreal shows "undefined": the renderer prints `text`, the data had only `intro` and `detail`. The grandfather "heard stories of the Fronde" as a boy, which the dates do not allow. | Fixed: `text` added (intro and detail), grandfather "lived through the Fronde". Other topics with the same gap are an adjacent finding. |
| 2 | The Commons map "Mughal Empire (1700).png" carries a factual-accuracy dispute ("No source, obviously exaggerated borders"). | Confirmed on Commons. Fixed: replaced in the map module and lecture card 1 by a new BeHistorical map of the topic's empires (core zones, not borders); dropped from the Evidence Lab, which keeps four cards. 3.1, 3.3 and 3.4 still use it: adjacent finding. |
| 3 | Qing portraits "in the robes of a traditional Chinese emperor": Qing court dress kept Manchu features. | Fixed everywhere: yellow and dragons were the Chinese imperial color and symbol; hat, fur collar and cut were Qing court dress. |
| 4 | The mansabdar paragraph gives no context, though the topic's skill is contextualization. | Fixed: Akbar's Central Asian family, a mostly Hindu land, Rajput kings with armies; he ranked the powerful men already there. |
| 5 | Success criterion 3 asks for at least two tax systems; Checkpoint 2 asked for one. | Fixed: Checkpoint 2 now asks for two systems from different empires, with context for the symbol and at least one system. |
| 6 | Samurai were paid by their own lord, not "the ruler"; the overlap "lived on the ruler's pay" and "Japan's rulers feared warrior lords" misstate it. | Fixed: "lived on pay, not land of their own"; the new rulers and the great lords wanted warriors with no land to rebel from. |
| 7 | The Akbar painting is captioned as Akbar among his nobles; it shows the arrest of Shah Abu'l-Maali. | Confirmed (Commons title; Art Institute of Chicago 1919.898). Fixed: caption names the scene, Basawan and Shankar, c. 1590 to 1595; prompt points at the arrest and links it to Halil. |
| 8 | The eBook's silver "How we know" box states a contested thesis as fact. | Fixed: two sentences, both sides, Unit 4 bridge. |
| 9 | The Topkapı prompt asks about things the photograph cannot show. | Fixed: prompt now points at the site, the water and the extent of the walls. |
| 10 | The 3.2 scenario's alignment label says "Comparison and causation". | Fixed: "Comparison, with contextualization". |
| 11 | Canvas "Due: no later meeting" for 3.2. | Rejected: that table is the teacher's instruction, outside the block pasted into Canvas, and it fills in once Jeff gives the 3.3 dates. |

### Fact-checker: reading and lesson page

| Finding | Disposition |
|---|---|
| Qing robes (as pass 1, #3); Evidence Lab prompt assumed Han subjects saw the portrait (Cleveland: a private court scroll). | Fixed: prompt asks how the Qing court wanted its emperor shown and remembered. |
| Akbar painting (as pass 1, #7). | Fixed. |
| "The day after Constantinople fell": sources differ on the day. Mehmed's motive was concrete: Halil helped depose him in 1446 and opposed the siege. | Fixed: "Right after"; the 1446 and siege facts added (Britannica, TDV). |
| Topkapı "the sultans' palace after the conquest": built from 1459. | Fixed. |
| Leo "visited Timbuktu early in the 1500s": Britannica says he may have. | Fixed: "wrote that he had visited". |
| Busbecq "letters from the 1550s": embassy 1554 to 1562, passage from 1555. | Fixed. |
| Tax farmer "paid first" (lecture card 4): installments; paying up front is the later malikâne. | Fixed: "promised the state a fixed sum". |
| Samurai "stipend in rice": counted in rice, often paid in cash. | Fixed: "counted in rice". |
| Disputed Mughal map (NEEDS JEFF). | Fixed by replacement (pass 1, #2), so no decision is needed. |
| BeSurreal grandfather and Fronde. | Fixed (pass 1, #1). |
| Module-card background pictures (stableImages) do not match their modules. | Rejected: `stableImages` is not read by the renderer (`stableImageKey` has no caller); module cards draw local artwork. The map entry was pointed at the new map anyway. |
| Devshirme, Enderun school, BeSurreal court life, samurai "most", mansab transfers. | Verified; the two "needs second source" rows above are now VERIFIED. |

### Fact-checker: teacher deck

| Finding | Disposition |
|---|---|
| Portrait slide: robes and the audience ("for Han Chinese subjects"). | Fixed on the slide, notes and listen-for. |
| Credit omits the painter. | Fixed: "Castiglione, 1736". Notes cite Cleveland 1969.31. |
| Mehmed's later viziers "raised in his service"; the Süleyman switch is one historian's argument. | Fixed: "converts from Balkan and Byzantine noble families"; "some historians argue". |
| Halil's execution date and place; the "64 years" figure has no non-Wikipedia source. | Fixed: both accounts given; "most of the years from 1365 to 1453 (about 64)". |
| Fronde: Parlement first, nobles from 1650. | Fixed. |
| "The Mughals needed local knowledge" is not the main reason the sources give. | Fixed: "worked through local landholders who already held their villages", here and in the reading. |
| Japan's rulers and lords; stipend from the lord; "counted in rice"; "pays a set sum". | Fixed. |
| "The CED uses Japan because..." (the CED gives no reason). | Fixed. |
| Tomb of Askia "the 1495 building". | Fixed: "UNESCO dates the building to 1495; replastered many times". |

### Fact-checker: eBook chapter and scenario

All 22 supported findings fixed: the Zat and Sawar card (anachronistic for c. 1580, replaced by
rank setting pay and horsemen); Manchu and Chinese population figures (Elliott, Campbell and Lee
2016); Mughal and Qing population dates; Qing robes; the Table of Ranks; "every service elite"
narrowed to the Ottoman, Mughal and Russian cases; devshirme property "could be seized"; most
grand viziers from the levy for much of the 1500s; "every empire built like this" narrowed;
uniformity (the 1645 queue order); the Fronde; the ayan; the silver box; zabt land classes;
the jagir crisis attributed to Chandra and Athar Ali; jharokha darshan from Akbar to Shah Jahan;
the county magistrate; caliph of the western Sudan; Topkapı seclusion from the late 1400s; the
scenario's Todar Mal role line (who headed finance in 1580 is disputed) and its skill label.

### Reviewer pass 2 (fresh, full, after the fixes above)

| # | Finding | Disposition |
|---|---|---|
| 1 | Mansabdars "could never" hold a kingdom of their own: Rajput kings kept their home lands as hereditary watan jagirs (Hansraj College, Delhi University; Britannica). | Fixed: "most could never", with the Rajput exception, in the reading, lecture card, slide 7 ("rarely") and the eBook. |
| 2 | The pass-1 fix said Akbar ranked "the powerful men already there", but about 70 percent of his mansabdars were of foreign origin (Britannica). The eBook said "rather than importing outsiders". | Fixed: most of his officials came from Central Asia and Persia; he also ranked powerful men already in India, Muslim and Hindu, including Rajput kings. Reading, lecture card, deck notes, eBook. |
| 3 | The deck still said Checkpoint 2 asks for one revenue system. | Fixed: "One symbol, and two ways to pay", notes and flow row. |
| 4 | The eBook still had tax farmers paying "up front" (that is the later malikâne). | Fixed: a fixed sum, often partly in advance and the rest in installments. |
| 5 | The court portrait is framed as aimed at an audience ("who needed convincing"), but it was a private court scroll. | Fixed: "Same ruler, shown in a different role for each audience"; slide "What it proves" now "Art showed the ruler in the role each audience expected"; eBook to match. |
| 6 | The map's Mexica zone sat on the Tarascan kingdom; Mexica and Japan shared a color. | Fixed: zone moved to the Valley of Mexico and the south; Japan given a new color. |
| 7 | The model comparison sentence still had "Japan's rulers" paying the samurai. | Fixed: "Japan's rulers and great lords got loyal fighters". |
| 8 | The Akbar arrest was ordered by the regent Bairam Khan, who stands in the picture (Art Institute of Chicago 1919.898). | Fixed: caption names Bairam Khan; the prompt asks how "a new reign" dealt with a powerful servant. |
| 9 | Slide 7 result "A loyal official": Akbar faced revolts by his own officers (1560s, 1580 to 1581). | Fixed: "An official who depends on him". |
| 10 | eBook heading promised the devshirme "in the words of the people it took"; the sources are not by the recruits. | Fixed: "seen from several sides". |
| 11 | The scenario and eBook use jargon above a ninth grader. | Fixed in the scenario (evidence and options rewritten in plain words). In the eBook, the optional textbook-depth layer, the named jargon is glossed or replaced; the chapter stays harder than the First & 10 by design. |
| 12 | Success criterion 2 says "specific examples" but Checkpoint 2 asks for one symbol. | Fixed: "at least one specific example". The board and Canvas text were rebuilt from it. |
| 13 | The Canvas event says "Nothing tonight" while Checkpoint 2 may be homework. | Deliberate and pending: the homework line waits on the 3.3 dates, which only Jeff can give. |

### Next

A fresh full reviewer pass (pass 3) runs on the corrected surfaces. The loop ends when one pass
finds no supported defect.
