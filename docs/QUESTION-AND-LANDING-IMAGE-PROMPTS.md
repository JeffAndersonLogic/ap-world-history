# Question and Landing Slides: Cinematic Image Prompts

**Written 2026-10-14 at Jeff's request**, for the standard he set the same day: every deck opens
(the question slide, the first slide after BeReady) and closes (the landing slide) on a
cinematic picture. See "Cinematic question and landing slides" in
`docs/PRESENTATION-AUTHORING.md`. `scripts/test/teaching-os-architecture.test.js` lists the 15
slides that predate the rule in its `OWED` set; this file covers every one of them.

Each prompt is written from the deck's own question and landing sentence, never from a new
story. Jeff runs them in his image generator and uploads the results to
`assets/images/topics/X-Y/` under the filename given. The **presentation-images** skill then
checks each picture against its "check before use" list before anything is wired in. When a
picture is wired in, its line comes off `OWED` in the same commit, or the test fails.

The rules these pictures live under (`docs/PRESENTATION-AUTHORING.md`, "AI-generated images"):

- On a slide each one carries exactly `Historical Reconstruction - AI Generated`, which the slide
  library prints from `ai: true`. Prefer a clean file with no text printed into the picture.
- **Never in the Evidence Lab**, and never called evidence anywhere, slide notes included.
- A picture that fails a "check before use" item is regenerated or dropped, not captioned around.

**Landing prompts from Topic 3.3 on moved on 2026-10-22** to `docs/LANDING-SLIDE-CINEMATIC-PROMPTS.md`, rewritten with historical accuracy as a requirement inside each prompt. Use that file for the 3.3, 4.1, 4.2 and 4.3 landing pictures; prompts 7, 9, 11 and 13 below are kept for the record.

No generator can promise accuracy. The prompts name the period details and list the common
errors to exclude; the check after generation is what makes a picture usable.

## Two lines already inside every prompt

**Style:** Photorealistic cinematic historical reconstruction, natural light, documentary
realism, 16:9 landscape, no text, no captions, no watermark, no logos.

**Room for the words**, which is what went wrong on the 4.1 caravel slide: each prompt names a
calm band (shadowed ground, water, floor or open sky) where the slide's sentence will sit, and
keeps the subject out of the bottom-right corner, which is trimmed off Gemini files to remove
its mark. If the subject still lands under the words, the slide can move its caption into the
sky with `place: 'top'`.

## What is owed, at a glance

| Deck | Slide | Picture | Words go |
|---|---|---|---|
| 2.1 | 2, question | 1. Caravan over the pass | bottom |
| 2.7 | 3, question | Triptych of pictures already in the repo (no prompt) | bottom |
| 2.7 | 17, landing | 2. Cairo, where three roads meet | bottom |
| 3.1 | 3, question | 3. The army on the march | top |
| 3.1 | 23, landing | 4. The cannon foundry | bottom |
| 3.2 | 3, question | 5. The Hall of Public Audience | bottom |
| 3.2 | 20, landing | 6. The Imperial Council | bottom |
| 3.3 | 3, question | Triptych of pictures already in the repo (no prompt) | bottom |
| 3.3 | 18, landing | 7. Old church, new service | bottom |
| 4.1 | 3, question | 8. Leaving Restelo, 1497 | bottom |
| 4.1 | 23, landing | 9. Home from India, 1499 | top |
| 4.2 | 3, question | 10. The royal shipyard | bottom |
| 4.2 | 23, landing | 11. Pepper at the Casa da Índia | bottom |
| 4.3 | 3, question | 12. Unloading at La Isabela, 1494 | bottom |
| 4.3 | 24, landing | 13. A valley remade | top |

**Two openers need no new picture.** Topic 2.7 asks about three networks and Topic 3.3 about
three cases of religious change, so each opens on a triptych (`frame-triptych`) of pictures the
repo already has, one per case. For 2.7: the 2.1 caravanserai, the 2.3 dhow and the 2.4 camel
caravan. For 3.3: the German printing shop, Chaldiran and the Sikh scene. The 2.7 course map
then moves to the slide after the question, because its notes need it before any comparison
starts. Topic 2.1's question sits on slide 2, where a map is now; that map likewise moves to its
own slide.

---

## 1. Topic 2.1 question: a caravan over the pass

**Save as** `assets/images/topics/2-1/2.1 - Caravan Over the Pass.jpg`
**What it asks:** why would anyone drag goods across this, and why more of them after 1200?

> Photorealistic cinematic historical reconstruction, 16:9 landscape. A long camel caravan of the 1200s winds up a stony track toward a high mountain pass in the Pamir mountains of Central Asia at sunrise. The camels are two-humped Bactrian camels with shaggy brown winter coats, each loaded with bales wrapped in felt and rope. Merchants in quilted wool robes, felt boots and fur-trimmed caps walk beside them, a few riding small sturdy horses. Snow-covered peaks glow pink and gold above, the valley below still in blue shadow. The caravan is small against the mountains and stretches back out of sight, to show how far the goods travel. Keep the main subject in the middle of the frame; the bottom quarter is a plain shadowed slope where a caption will sit, and the bottom-right corner stays empty. Natural light, documentary realism, no text, no watermark.
>
> Exclude: one-humped camels, wagons or carts, a paved road, the Great Wall, pagodas, sand dunes, firearms, modern clothing or gear.

**Check before use:** two humps (Bactrian camels worked the cold mountain routes); pack animals,
no carts; no guns (gunpowder weapons are not on the Silk Roads in this scene); a mountain pass,
not a desert.

## 2. Topic 2.7 landing: Cairo, where three roads meet

**Save as** `assets/images/topics/2-7/2.7 - Cairo Where Three Roads Meet.jpg`
**What it lands:** three networks solved one problem with different tools, and all three grew
trading cities. Mamluk Cairo took goods from all three.

> Photorealistic cinematic historical reconstruction, 16:9 landscape, the stone courtyard of a merchants' warehouse in Mamluk Cairo around 1400. Two stories of pointed stone arches surround the courtyard, with carved wooden lattice screens on the upper balconies. Porters unload sacks of black pepper and bales of Indian cotton cloth brought up from the Red Sea, beside bolts of silk and crates holding blue-and-white Chinese porcelain. At a low table in the center a West African merchant in a white cotton robe and wrapped headcloth watches a Cairo merchant weigh small leather pouches of gold dust on a brass balance. Camels kneel at the gateway. Warm late-afternoon light slants across the courtyard and dust hangs in the air. Keep the people and goods in the middle of the frame; the bottom quarter is plain, shaded paving where a caption will sit, and the bottom-right corner stays empty. Documentary realism, no readable text, no watermark.
>
> Exclude: tomatoes, potatoes, chili peppers, coffee, tobacco or water pipes (none had reached Cairo by 1400), firearms, Ottoman-era costume, fezzes, readable signs or coins with readable lettering, onion domes.

**Check before use:** no American crops, coffee or tobacco (all later arrivals); the gold arrives
as dust or small ingots, not minted coins; porcelain is blue-and-white, which Egypt imported in
this period.

## 3. Topic 3.1 question: the army on the march

**Save as** `assets/images/topics/3-1/3.1 - The Army on the March.jpg`
**What it asks:** why did a few empires get huge after 1450? (Words go in the sky: `place: 'top'`.)

> Photorealistic cinematic historical reconstruction, 16:9 landscape, the central Anatolian plateau in the early 1500s. An Ottoman army on the march stretches from the foreground to the far horizon along a dusty road across brown, rolling steppe. In the foreground, a team of oxen and water buffalo strains to haul a heavy bronze cannon on a wooden carriage with big wooden wheels, drivers walking beside them with goads. Beyond them march columns of Janissary infantry in tall white felt caps that fold down at the back, long coats and matchlock muskets on their shoulders, then mounted cavalry with lances and round shields, and long strings of supply camels. Dust rises gold in the low morning sun. The size of the army is the point: it fills the land. Keep the top third mostly open pale sky where a caption will sit, and keep the bottom-right corner empty. Documentary realism, no text, no watermark.
>
> Exclude: red fezzes (a 19th-century hat), a red flag with a white crescent and star (the modern Turkish flag), flintlocks or bayonets, horse-drawn limbers, European plate-armored knights, tricorn hats.

**Check before use:** no fez and no modern flag; the cannon is bronze and pulled by oxen or
buffalo; the infantry carry matchlocks, not later flintlocks.

## 4. Topic 3.1 landing: the cannon foundry

**Save as** `assets/images/topics/3-1/3.1 - The Cannon Foundry.jpg`
**What it lands:** guns broke the walls, and only big states could buy guns.

> Photorealistic cinematic historical reconstruction, 16:9 landscape, inside the Ottoman imperial cannon foundry at Istanbul around 1500. A vast, dark, smoky stone hall lit by the glow of a furnace. In the center, a river of molten bronze pours from the furnace's tap down a clay channel into the mouth of a cannon mold buried upright in a pit in the floor, throwing up sparks. Workers in leather aprons and head wraps guide the pour with long iron rods. To one side, finished bronze cannon barrels many meters long lie on heavy timber beams, and a government official in a long kaftan and tall turban records the work in a ledger, a reminder that the state paid for all of it. Orange firelight against deep shadow. Keep the glowing pour in the middle of the frame; the bottom quarter is dark, shadowed floor where a caption will sit, and the bottom-right corner stays empty. Documentary realism, no readable text, no watermark.
>
> Exclude: steel or iron industrial machinery, rails, gears, electric light, modern safety gear, a blacksmith hammering at an anvil as the main action, a modern Turkish flag, fezzes.

**Check before use:** bronze poured into a mold standing upright in a pit, which is how great guns
were cast; no factory machinery; nothing that looks later than about 1550.

## 5. Topic 3.2 question: the Hall of Public Audience

**Save as** `assets/images/topics/3-2/3.2 - Hall of Public Audience.jpg`
**What it asks:** how did rulers make their power look rightful and keep control?

> Photorealistic cinematic historical reconstruction, 16:9 landscape, the Hall of Public Audience in the Mughal fort at Delhi around 1650. A long open hall of red sandstone columns and rows of scalloped arches, seen from the floor looking toward the far wall. There, raised high above everyone, the emperor Shah Jahan sits on a cushion beneath a white marble canopy set into the wall, in jeweled robes and a turban with a plume. Below him, his nobles stand in rows ordered by rank: the highest ranks closest, inside a gold-colored railing, lesser ranks farther back behind a silver one. All stand; no one sits in his presence. Attendants hold fly-whisks of white horsehair, and petitioners wait at the back. Soft morning light falls through the arches. The emperor is small and high in the frame, so the room's order says who rules. Keep the main subject in the upper and middle frame; the bottom quarter is a plain floor in shade where a caption will sit, and the bottom-right corner stays empty. Documentary realism, no readable text, no watermark.
>
> Exclude: the Peacock Throne (it stood in the private audience hall, not this one), the Taj Mahal, seated nobles, British soldiers, tourists, readable inscriptions, Persian-carpet clichés covering the floor.

**Check before use:** the emperor is raised above the hall and the nobles stand by rank, which is
the point of the room; no Peacock Throne; no Taj Mahal in view.

## 6. Topic 3.2 landing: the Imperial Council

**Save as** `assets/images/topics/3-2/3.2 - The Imperial Council.jpg`
**What it lands:** guns win land; people, symbols and money hold it.

> Photorealistic cinematic historical reconstruction, 16:9 landscape, the Imperial Council chamber of Topkapı Palace in Istanbul around 1550. A domed room with walls of blue and white tiles and a gilded ceiling. The grand vizier and the other viziers sit cross-legged on a long low cushioned bench along the wall, in tall white turbans and fur-lined silk kaftans. Scribes kneel at low writing desks with thick tax registers open in front of them. Treasury officials carry in sealed cloth sacks of coin. Two Janissaries in tall white felt caps guard the door. High on the wall above the viziers is a window covered by a golden grille, through which the sultan could listen without being seen. Warm lamplight and window light. Keep the people in the middle of the frame; the bottom quarter is plain carpeted floor in shade where a caption will sit, and the bottom-right corner stays empty. Documentary realism, no readable text, no watermark.
>
> Exclude: the sultan sitting in the room (he watched from behind the grille), chairs or a Western-style table, fezzes, a modern Turkish flag, readable writing, women in the council.

**Check before use:** the sultan is absent, present only as the grilled window; people (viziers,
scribes, Janissaries), a symbol (the hidden watching window) and money (registers and sacks of
coin) are all in one room, which is the landing sentence.

## 7. Topic 3.3 landing: old church, new service

**Save as** `assets/images/topics/3-3/3.3 - Old Church New Service.jpg`
**What it lands:** religions changed as much as empires did, and some things continued.

> Photorealistic cinematic historical reconstruction, 16:9 landscape, inside a late-medieval Gothic town church in Saxony around 1540, during a Lutheran service. Tall stone pillars and ribbed vaults, clear daylight through tall windows. Behind the altar, the old painted and gilded altarpiece of saints is still in place. From a raised stone pulpit, a pastor in a plain black scholar's gown and white collar preaches in German to a crowded congregation of townspeople in sober wool clothing, some sitting on wooden benches, many standing, several holding small printed hymnbooks. A silver chalice rests on the altar. The same old building, a new kind of service: what changed and what continued in one view. Keep the pulpit and congregation in the middle of the frame; the bottom quarter is plain stone floor in shade where a caption will sit, and the bottom-right corner stays empty. Documentary realism, no readable text, no watermark.
>
> Exclude: a priest in ornate vestments raising the host, electric lights, modern clothing, readable lettering in the books or on the walls, an empty church, destroyed or smashed images.

**Check before use:** the preacher is in a plain black gown, not Catholic vestments; the old
altarpiece is still there (Lutheran churches often kept them); printed books in the
congregation's hands.

## 8. Topic 4.1 question: leaving Restelo, 1497

**Save as** `assets/images/topics/4-1/4.1 - Leaving Restelo 1497.jpg`
**What it asks:** how did knowledge from older worlds let these ships cross the ocean and come
back?

> Photorealistic cinematic historical reconstruction, 16:9 landscape, the beach of Restelo on the Tagus river just west of Lisbon, early morning in July 1497. In the river, Vasco da Gama's small fleet rides at anchor: two broad carracks with high rounded castles at bow and stern and square sails still furled, a smaller lateen-rigged caravel and a supply ship. Longboats row sailors out to them. On the beach, families, friars in brown habits and townspeople watch in silence; a woman holds a child up to see. A small stone chapel stands on the low hill behind. Beyond the ships the river widens toward the open Atlantic under a pale sky. Mood: no one is sure they will come back. Keep the ships and crowd in the middle of the frame; the bottom quarter is wet, smooth sand where a caption will sit, and the bottom-right corner stays empty. Documentary realism, no text, no watermark.
>
> Exclude: Belém Tower and the Jerónimos Monastery (both built after 1500), the Monument to the Discoveries, any bridge, steamships, ship's wheels, crosses or flags with modern designs, pirate costumes.

**Check before use:** no Belém Tower, Jerónimos or bridge (the most common errors for this
place); carracks with square sails and one caravel; tillers, not wheels.

## 9. Topic 4.1 landing: home from India, 1499

**Save as** `assets/images/topics/4-1/4.1 - Home from India 1499.jpg`
**What it lands:** now the ocean goes both ways. (Words go in the sky: `place: 'top'`.)

> Photorealistic cinematic historical reconstruction, 16:9 landscape, the mouth of the Tagus river in summer 1499. A single weather-beaten Portuguese caravel sails home toward Lisbon, its lateen sails patched and stained, its hull streaked with salt and weed after two years at sea. A thin, exhausted crew, far fewer men than left, line the rail staring at the shore. Small boats row out to meet the ship. On the hills in the distance, the white houses of Lisbon climb toward the castle on its hilltop. Golden evening light on calm water. Keep the top third mostly open evening sky where a caption will sit; the ship sits in the middle of the frame, and the bottom-right corner stays empty. Documentary realism, no text, no watermark.
>
> Exclude: Belém Tower, the Jerónimos Monastery, any bridge, cannon firing, fireworks or celebration banners, a large square-rigged galleon, crosses on the sails.

**Check before use:** a battered small ship and a thin crew (about half of the men died on the
voyage); no landmarks built after 1500; a quiet arrival, not a parade.

## 10. Topic 4.2 question: the royal shipyard

**Save as** `assets/images/topics/4-2/4.2 - Royal Shipyard.jpg`
**What it asks:** why did rulers pay for ocean voyages, and what did they get? The deck already
shows Columbus and the two monarchs, so this picture shows the cost instead.

> Photorealistic cinematic historical reconstruction, 16:9 landscape, the royal shipyard on the Lisbon riverfront around 1500. On a wooden slipway, the half-built hull of a great carrack rises like the ribs of a whale, its curved oak frames bare, shipwrights with adzes and saws working on scaffolding around it. Piles of timber, coils of rope, barrels of tar and pitch, and an iron anchor lie on the ground. In the foreground, a royal official in a dark velvet doublet and cap checks costs in a ledger while a master shipwright points up at the hull. Finished ships ride at anchor in the river behind. Hazy morning sun, sawdust in the air. Keep the hull and people in the middle of the frame; the bottom quarter is plain packed earth in shade where a caption will sit, and the bottom-right corner stays empty. Documentary realism, no readable text, no watermark.
>
> Exclude: power tools, steel or iron hulls, cranes, steam, Belém Tower, any bridge, readable writing in the ledger, pirate costumes.

**Check before use:** a wooden hull on a slipway built by hand; the royal official is there,
because the point is who paid.

## 11. Topic 4.2 landing: pepper at the Casa da Índia

**Save as** `assets/images/topics/4-2/4.2 - Pepper at the Casa da India.jpg`
**What it lands:** rulers backed the voyages, voyages paid back, and more ships sailed.

> Photorealistic cinematic historical reconstruction, 16:9 landscape, the Lisbon waterfront outside the royal trading house, the Casa da Índia, around 1515. Porters carry sacks of black pepper up from longboats and pile them by enormous wooden balance scales, where royal clerks in dark doublets weigh each sack and record it in ledgers, watched by guards with halberds. Some sacks are open, showing the small black peppercorns. Behind them, the river is crowded with the masts of carracks and caravels, more ships than any one voyage needed. Bright midday light, busy and loud. Keep the scales and people in the middle of the frame; the bottom quarter is plain stone quayside in shade where a caption will sit, and the bottom-right corner stays empty. Documentary realism, no readable text, no watermark.
>
> Exclude: Belém Tower, any bridge, steamships, tomatoes or potatoes, coins or sacks with readable lettering, modern flags.

**Check before use:** pepper, not some other spice in the foreground; the crown's clerks doing
the weighing, because the king took the trade; many ships behind, because each return paid for
more.

## 12. Topic 4.3 question: unloading at La Isabela, 1494

**Save as** `assets/images/topics/4-3/4.3 - Unloading at La Isabela 1494.jpg`
**What it asks:** what caused the Columbian Exchange? Some of what crossed was chosen.

> Photorealistic cinematic historical reconstruction, 16:9 landscape, the north coast of Hispaniola at the new Spanish settlement of La Isabela in early 1494. Spanish sailors in loose shirts and wool caps lead horses through the shallow surf from longboats; others carry pigs in wicker crates, drive a few cattle ashore, and stack sacks of wheat seed and bundles of sugarcane cuttings on the beach. Two carracks and several caravels ride at anchor offshore. At the edge of the green forest, a small group of Taíno men and women watch, wearing little clothing, with short cotton skirts on the married women, some with body paint and shell or stone ornaments. Turquoise water, bright tropical light, low green hills. Keep the landing in the middle of the frame; the bottom quarter is plain wet sand and gentle surf where a caption will sit, and the bottom-right corner stays empty. Documentary realism, no text, no watermark.
>
> Exclude: feathered war bonnets or tipis (Plains peoples, thousands of kilometers away), enslaved Africans (not part of this 1494 landing), cannon firing, palm-thatched tourist huts, readable text, modern flags.

**Check before use:** the animals and plants Columbus did bring on his second voyage (horses, pigs,
cattle, wheat, sugarcane); Taíno people shown respectfully and not in another people's dress.

## 13. Topic 4.3 landing: a valley remade

**Save as** `assets/images/topics/4-3/4.3 - A Valley Remade.jpg`
**What it lands:** the ships carried more than anyone meant them to, and what they carried remade
populations. (Words go in the sky: `place: 'top'`.)

> Photorealistic cinematic historical reconstruction, 16:9 landscape, a highland valley in central Mexico around 1580. In the foreground, a Nahua farmer in white cotton clothing and sandals guides a pair of oxen pulling a wooden plow through a field of wheat, right beside a traditional field of tall maize with beans and squash growing among it. Flocks of sheep graze on the hillsides. Beyond, a small village of adobe houses surrounds a new stone church with a bell tower and a walled churchyard, and a small funeral procession walks slowly toward it, a quiet sign of the epidemics of these years. Volcanic mountains on the horizon. Soft late-afternoon light. Keep the top third mostly open sky where a caption will sit; the subject sits in the middle of the frame, and the bottom-right corner stays empty. Documentary realism, no text, no watermark.
>
> Exclude: cowboy hats, sombreros, tractors, barbed wire, the modern Mexican flag, readable text, a festive or picturesque tone.

**Check before use:** Old World animals and crops (oxen, sheep, wheat) beside the native milpa;
the funeral procession is small and in the distance, present but not the subject; nothing that
looks later than the 1500s.
