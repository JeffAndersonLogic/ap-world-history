# Topic 3.1 Image Plan: Empires Expand

**Verified against the Wikimedia Commons API on 2026-10-04.** This is a list of suggested
pictures, not a change to the deck. Nothing was downloaded into the repository and no other
file was touched. Pick what you like, then the **presentation-images** skill wires it in.

The approved story and slide order are in `teacher/data/topic-3-1-teaching-base.js` and
`docs/TOPIC-3-1-STORY-DRAFT.md`. The pictures serve that story. If a picture fits no beat, it
stays out.

## How this was checked, and what went wrong

- Every picture listed as VERIFIED came back from the Commons API with a pixel size and a
  license. The titles below are copied exactly as Commons returned them.
- To save requests, most searches used one combined call (a search that returns each hit's
  size, license, date, author and description together). Then every recommended title was
  sent through the plain metadata call (up to 10 titles per request) as a second check. All
  of them came back with a width and a license. None was reported missing. A few files that
  are mentioned only as "seen, not recommended" or as traps were verified by the search call
  alone.
- I also downloaded small preview copies into a temporary scratch folder outside the repo,
  looked at most of them, and read what the picture really shows against its filename. Where
  I could not look (rate limiting), the entry says "not viewed".
- **Commons was heavily rate limited from this sandbox.** Roughly half of all requests were
  refused with "too many requests" (HTTP 429) on the first try. The runner waited 30 to 60
  seconds and retried up to 3 times, with at least 10 seconds between requests. Almost
  everything eventually went through. Anything that did not is under "Unverified leads".
- Only public domain, CC0, CC BY and CC BY-SA files are listed. For CC BY and CC BY-SA the
  slide credit must name the author, name the license, and say it is from Wikimedia Commons.
  The credit line is given for each. For public domain files a credit is not required, but
  the deck's habit of saying what a picture is (period source, modern photograph, and so on)
  still applies.

**Size rule used** (board is 1280x720): about 1000px wide or more is fine as a full-slide
background, 600 to 1000px as half a slide, under about 400px on the long side is too small.
Many of the best period pictures are tall pages (portrait). On a landscape board they work
as a half-slide placard or as "fit whole", not as a full background.

**A note on slide templates.** Several beats are text-only templates today (wall and twist
are `question` slides; pays, proofs and kandahar are `grid`; tondibi is `split-mirror`). A
picture on one of those needs a template with a picture slot, or a picture placed on the
teacher surface only. That is a design decision for you, so each beat below says what the
picture would be, not how it is wired.

---

## Wall: the Theodosian Walls of Constantinople

Beat: "A wall let a lord say no to a king." The picture should show how big and thick a wall
was. Best bet is a clear modern photograph, plus one period map showing the walls as the
city's whole shape.

1. **File:Theodosian Walls of Constantinople, Istanbul (24053561188).jpg**
   - What it is: modern photograph (taken 2017-10-21) of a ruined section of the land wall.
   - Size: 3203x2121. License: CC BY-SA 2.0.
   - Credit: "Carole Raddato, CC BY-SA 2.0, via Wikimedia Commons".
   - Why it fits: a huge flat face of layered stone and brick, with a thin minaret on the
     skyline that lets students judge the height. Full-slide size. Viewed.
   - Caution: it is a ruin, so it shows weathered stone and broken tops, not the wall as the
     defenders saw it. Say "what is left today".
2. **File:Theodosian Walls of Constantinople.jpg**
   - What it is: modern photograph (2024-08-19) of a restored stretch.
   - Size: 1620x1080. License: CC BY-SA 4.0.
   - Credit: "Apaleutos25, CC BY-SA 4.0, via Wikimedia Commons".
   - Why it fits: the clearest view of the layered defense, an outer low wall, a tall inner
     wall and square towers behind. Half-slide to full-slide size. Viewed.
   - Caution: the battlements are new (restored) and the colors are boosted, so it looks
     cleaner and brighter than the real thing. Caption it "restored section, modern photograph".
3. **File:Map of Constantinople, Buondelmonti.jpg**
   - What it is: period source. A map of Constantinople in Cristoforo Buondelmonti's
     *Liber Insularum Archipelagi*, dated "before 1430" by Commons (Bibliothèque nationale
     de France, fol. 37r).
   - Size: 2291x3320. License: public domain. Credit: "Cristoforo Buondelmonti, before 1430,
     BnF, public domain".
   - Why it fits: the city is drawn as a shape defined by its towered wall, made a generation
     before the siege. A real source for a wall beat. Viewed.
   - Caution: a stylized drawing, not to scale. Labels are in Latin. Portrait page, so use
     it as a half-slide. Note that the file is the BnF copy, not the later Düsseldorf copy,
     which Commons dates 1485 to 1490, after the fall.
4. Backup: **File:Theodosian Walls of Constantinople, Istanbul (1991).jpg**, 4894x3184,
   CC BY-SA 4.0, Peter Christian Riemann. Towers of the land wall, scanned from a 1991 slide.
   Viewed: the foreground is very dark and the wall sits in shadow. Usable but weaker than
   number 1.
5. Backup: **File:Theodosian Walls in Constantinople 2.jpg**, 1200x900, labeled public domain.
   Viewed: ruined towers with the old moat now a vegetable field, and people on the pavement
   for scale. **Commons gives no author and no source**, so the public domain claim cannot
   be checked. Prefer the others.
6. Also seen, **not viewed**: **File:The Triple Wall of Constantinople, on the land side near
   Top Kapoussi - Walsh Robert & Allom Thomas - 1836.jpg**, 800x631, public domain. An 1836
   engraving. It is a 19th-century picture of the ruins, not a period source, so label it so.

## Cannon and proof: Constantinople 1453

Beats: "The Cannon" (equation slide) and "Constantinople, 1453" (the Dardanelles Gun slide).
The deck already has the gun photograph. What is missing is a period picture of the siege.

1. **File:Siege of Constantinople BnF MS Fr 9087.jpg**
   - What it is: period source. A miniature of the 1453 siege by Jean Le Tavernier, Lille,
     1455 (Bibliothèque nationale de France, Français 9087, folio 207 v).
   - Size: 1297x1851. License: public domain. Credit: "Jean Le Tavernier, Lille, 1455, BnF
     MS Fr 9087, public domain".
   - Why it fits: made within about two years of the siege. It shows big bombards on the
     Ottoman side (lower right), tents, and ships being dragged overland toward the Golden
     Horn. Viewed.
   - Caution, important: the painter worked in the French-speaking Burgundian lands and
     drew from reports. The city is a Gothic castle town, not Constantinople. The labels
     inside the picture are in French. Tell students it shows how Europeans imagined the
     siege, not what it looked like. It is portrait, so crop to the cannon area for a
     half-slide or show it whole beside text.
   - A second upload of the same miniature exists, **File:Le siège de Constantinople (1453) by
     Jean Le Tavernier after 1455.jpg** (1210x1788, public domain). It carries less
     information. Use the BnF one above.
2. **File:Bombard on wheeled carriage Büchsenmeisterbuch.jpg**
   - What it is: period source. A gunner and a small bombard on a two-wheeled carriage,
     from a German gun-master's book (BSB Cgm 600), first quarter of the 15th century.
   - Size: 1435x2045. License: public domain.
   - Why it fits: a simple, clear picture of what a "cannon" was in the 1400s, good for the
     equation slide ("what is the new weapon"). Viewed.
   - Caution: German, not Ottoman, and a small gun, much smaller than Mehmed's. Say so.
3. **File:Muzzle of Great Turkish Bombard Flickr 8616026033.jpg**
   - What it is: modern photograph of the muzzle of the Dardanelles Gun (the gun already in
     the deck).
   - Size: 2242x1684. License: CC BY-SA 2.0. Credit: "Simon Cope (Flickr: slim_cop),
     CC BY-SA 2.0, via Wikimedia Commons".
   - Why it fits: the bore is big enough that students can judge the size of the shot. A
     good second picture for the proof slide. Not viewed, but the description says exactly this.
   - Caution: same caution as the deck already gives, it is a surviving gun cast in 1464,
     not a gun from the siege.
4. Mehmed II portrait, only if the "twist" beat wants a face: **File:Bellini, Gentile -
   Portrait of Mehmed II - National Gallery, London.jpg**, 4439x6000, public domain, 1480.
   It was painted about 27 years after the siege, so it shows a man of about 48, not the
   21-year-old of 1453. Not viewed. Check the museum's attribution before captioning it as
   Bellini's own hand.

## Pays: what a cannon cost

Beat: "Only a big state could pay for a cannon." Needs scale and cost: metal, foundries,
powder, gunners, haulers. **No period foundry or cannon-casting picture was found** (see
"Unverified leads"). The haulers are the beat's best picture.

1. **File:Bullocks dragging siege-guns up hill during the attack on Ranthambhor Fort.jpg**
   - What it is: period source. A painting from the Akbarnama (Mughal court history), dated
     "between 1590 and 1595" by Commons, showing the 1568 attack on Ranthambhor Fort.
   - Size: 1602x2500. License: public domain. Credit: "Akbarnama, c. 1590 to 1595, public
     domain".
   - Why it fits: three huge guns on wheels being hauled up a rocky hill by teams of oxen
     and crowds of men. Exactly "the teams and roads to drag the guns to the wall". Viewed.
   - Caution: painted about 25 years after the event for the court. Portrait page, so use
     it as a half-slide. It also works as a Mughal artillery proof beyond Panipat.
2. **File:Jaivana Cannon, the largest wheeled cannon.jpg**
   - What it is: modern photograph of the Jaivana Cannon at Jaigarh Fort, Rajasthan, an
     18th-century gun that Commons calls the largest wheeled cannon ever built.
   - Size: 4160x3120. License: CC BY-SA 4.0. Credit: "SumitAmbekar7, CC BY-SA 4.0, via
     Wikimedia Commons". Viewed.
   - Why it fits: the wheels and barrel give an instant sense of scale and cost.
   - Caution: it is later than the 1450 to 1500s story, it sits in a Rajasthan fort rather
     than being an imperial Mughal gun (Commons only says "18th century" and "Jaigarh Fort"),
     the carriage looks repainted, and a modern shed roof is in the frame. Caption it "modern
     photograph of an 18th-century gun".
3. **File:Malik E Maidan in 1885.jpg**, 720x600, public domain, an 1885 photograph of a very
   large gun at Bijapur. Commons names the gun and city only. Bijapur was a Deccan
   sultanate, not one of the four empires, and the file is small (half-slide at most). Only
   use it as a second "giant gun" example. Not viewed.
4. Small extra: **File:Mughal breechloading cannons.jpg**, 595x532, public domain, four
   cannon from the Akbarnama, painted 1590 to 1595. Below the half-slide size. Not viewed
   (preview download was refused), so check it before use.

## Empires and proofs: Chaldiran, Safavid, Mughal, Qing

Beats: "Four Winners" (the map is already in the deck) and "One Weapon, Four Stories" (a
four-card text grid with no picture slot today). One picture per empire is below, ranked by
how directly the picture shows the gun mechanism.

### Ottoman and Safavid: Chaldiran, 1514

1. **File:"Shah Ismail at the Battle of Chaldiran", from Bijan’s Tarikh-i Jahangusha-yi Khaqan
   Sahibqiran.jpg**
   - What it is: period source, but late. A Safavid court painting by Muin Musavvir, Isfahan,
     "end of the 1680s", about 170 years after the battle.
   - Size: 1833x2727. License: public domain. Credit: "Muin Musavvir, Isfahan, late 1680s,
     public domain".
   - Why it fits: Shah Ismail charges with a sword at a wheeled carriage carrying two bronze
     cannon, while a gunner fires a long gun from behind it. Sultan Selim watches from the
     top left. Commons says the Ottoman victory was due to the Turks' superior artillery.
     This is the single best "gun against horsemen" picture. Viewed.
   - Caution: made by the losing side's later artists to glorify Ismail, so it is not a
     record of the day. The Persian text is not translated. Portrait page.
2. **File:Battle of Chaldiran miniature. Selīm-nāma, by Şūkrī-i Bitlisī, 1524 (National Library
   of Israel, Ms. Yah. Ar. 1116).jpg**
   - What it is: period source, close to the event. A double-page miniature from the
     Selim-nama, a verse history of Sultan Selim, dated 1524 (about ten years after).
   - Size: 2494x2439. License: public domain. Credit: "Selim-nama, 1524, National Library of
     Israel, Ms. Yah. Ar. 1116, public domain".
   - Why it fits: the right-hand page shows a rank of infantry holding long guns, facing
     mounted archers and lancers on the left. It is the earliest picture on this list.
     Viewed.
   - Caution: the sides are labeled in Persian only, so confirm which army is which from the
     Commons page before captioning. A few stray red lines cross the page. Good full-slide
     size with "fit whole".
3. Lead, viewed: **File:Qara Khan Ustajlu and the Safavid army attack the Ottoman force of
   Mustafa Pasha supplied with artillery, from Bijan's Tarikh-i Jahangusha-yi Khaqan
   Sahibqiran, attributable to Mu'in Musavvir, Safavid Iran, circa 1640.jpg**, 590x861,
   public domain. A cavalry melee with a wheeled gun carriage at the left edge. The title
   does not say the battle is Chaldiran, so do not caption it as Chaldiran. Small.

### Safavid musketeers

- **File:Persian Musketeer.jpg**, 445x857, public domain, by Habib Allah Mashadi, c. 1600,
  "in time of Abbas I". Viewed. A single young soldier with a long matchlock on his
  shoulder, clear and student-friendly. Small and tall, so use it as a narrow inset beside
  text. It shows that the Safavids adopted guns after Chaldiran.

### Mughal artillery beyond Panipat

- Use **File:Bullocks dragging siege-guns up hill during the attack on Ranthambhor Fort.jpg**
  (see "Pays" above). One picture can serve both beats, but showing it twice in one lesson
  would be a waste, so choose a beat for it.

### Qing firearms and the steppe

1. **File:Relief army Black River1759.jpg**
   - What it is: period source. A Qianlong-era court painting (Commons date: 1760) of the 1759
     relief of the Black River fort in the western campaigns.
   - Size: 2000x1304. License: public domain. Credit: "Qing court painting, c. 1760, public
     domain".
   - Why it fits: rows of musketeers with long guns and a line of camels carrying small
     cannon, the settled empire's firepower on the steppe. Commons says it shows archers,
     musketeers and camel artillery. Viewed. Full-slide size.
   - Caution: the scene is dated 1759, Qianlong's western campaigns, a century after the
     first Qing conquest of China in the 1640s that the slide's card also mentions. Caption it
     as "the Qing on the western frontier, 1759", not as the conquest of China.
2. **File:Battle of Oroi-Jalatu.jpg**, 2000x1217, public domain. One of the Qianlong battle
   copperplate prints, designed by Chinese and European artists, dated by Commons "between
   1765 and 1769", showing a night attack by General Zhao Hui on the Dzungars in 1756.
   Viewed: it shows a camp of tents being overrun, with no clear gun. Pretty but does not
   show the mechanism. Use only for "the Qing reached the steppe".
3. Seen, viewed, not recommended: **File:Qing artillery and musketeers.jpg**, 618x402, public
   domain. The filename and description say "artillery and musketeers" at the Battle of Ulan
   Butong, 1690, but the picture shows mounted riders, a camel train and kneeling men. I
   could not see any gun. **The filename claims more than the picture shows**, and it is
   small. Skip it.
4. Seen, not viewed: **File:Victory at Khorgos Battle Copper Print.png**, 1855x965, CC BY-SA
   4.0, a 2018 photograph of one of the Qianlong battle prints. Same family as number 2.

## Meet and Kandahar

Beat: "Kandahar: a fortress between two empires." Political and religious.

1. **File:12 Abu'l Hasan Jahangir Welcoming Shah 'Abbas, ca. 1618, Freer Gallery of Art,
   Washington DC.jpg**
   - What it is: period source. A Mughal court painting, c. 1618, attributed to Bishandas
     (a 2015 article quoted on Commons names Abu'l Hasan). Freer Gallery of Art.
   - Size: 5351x7750 (portrait, huge). License: public domain. Credit: "Mughal court
     painting, c. 1618, Freer Gallery of Art, public domain".
   - Why it fits: the Mughal emperor and the Safavid shah sit side by side, cordial, under
     painted angels. It is a sourcing lesson on a rivalry slide: the court shows friendship
     while the empires fight over a frontier. Viewed.
   - Caution: Commons itself calls it "a creative image", an imagined meeting. It does **not
     show Kandahar**. The story draft's list of dates for the Safavid and Mughal captures is
     "from memory, verify" and nothing here supplies them, so do not caption this with a
     date for Kandahar changing hands.
2. **File:Ruins of old Kandahar Citadel in 1881.jpg**
   - What it is: modern (19th-century) photograph by Sir Benjamin Simpson, c. 1881, from the
     Bellew album.
   - Size: 4000x3129. License: public domain. Credit: "Benjamin Simpson, c. 1881, public
     domain".
   - Why it fits: a mud-brick citadel on a rocky spur, the idea of "a fortress" in one
     picture. Viewed.
   - Caution: Commons says the old citadel was destroyed by Nadir Shah in 1738, so this is a
     ruin photographed some 240 years after Safavid and Mughal times. Caption it "ruins of
     the old Kandahar citadel, photographed c. 1881", never "the fortress they fought over".
3. **File:Shah Abbas the Great receiving the Mughal ambassador Khan’Alam in 1618.jpg**,
   2256x3307, public domain, 17th century, artist unknown. Safavid and Mughal diplomacy in
   one scene (the shah offers the ambassador a gold wine cup). Not viewed. A backup to number
   1; a second upload, **File:Shah Abbas and Khan Alam.jpg** (1848x2500, CC BY-SA 4.0), is
   the same meeting.
4. No map showing Kandahar between the empires was found on Commons. The deck's own local
   map already marks Kandahar, so use that.

**Do not use for Kandahar, even though the filenames say so:**

- **File:The Surrender of Kandahar.jpg** (2543x3503) and **File:The Surrender of Kandahar
  (1638).jpg** (357x500). Their own descriptions contradict each other. One line says it
  shows the surrender of the Kandahar garrison in 1638, but the museum caption quoted on the
  same page (Musée Guimet) says "Qulij Khan accepts the keys to a city in Badakhshan
  (probably Bust)". The picture may not be Kandahar at all.
- **File:Mughal Siege of Qandahar, May 1631, the Padshahnama (RCT).jpg** (1479x2000). The
  Commons description carries a warning that this is "the Kandhar Fort in Central India,
  not Kandahar in Afghanistan". The painting itself is striking, but it is the wrong place.

## Tondibi: Morocco and Songhai, 1591

Beat: "guns decide a war between states." **No period picture of the battle was found.** Be
careful: several of these are modern and the deck should say so.

1. **File:Bataille de tondibi.png**
   - What it is: modern diagram (2011), in French, of the battle in four panels, by "Monsieur
     Fou".
   - Size: 1400x800. License: CC BY-SA 3.0. Credit: "Monsieur Fou, CC BY-SA 3.0, via
     Wikimedia Commons". Viewed.
   - Why it fits: it shows the idea in pictures: guns and a smaller force against a very
     large army.
   - Caution: **it prints unit counts on its legend**, including 8 cannon and thousands of
     arquebusiers for Morocco and 15,000 cavalry and 20,000 infantry for Songhai. The deck
     deliberately uses no counts ("a few thousand against many times larger") and flags the
     figures to VERIFY. Putting this on the wall would project numbers nobody has checked.
     The text is also French. Best use: a model for drawing our own simple diagram, not the
     picture itself.
2. **File:SONGHAI empire map.PNG**
   - What it is: modern map (uploaded 2008) of the Songhai Empire. Labels are in English:
     Timbuktu, Gao, Jenne, the Niger River.
   - Size: 1580x988. License: CC BY-SA 3.0. Credit: "Map by Astrokey44 and later editors,
     CC BY-SA 3.0, via Wikimedia Commons" (check the file page for the exact author line).
     Viewed.
   - Why it fits: shows where Songhai was. Tondibi is not marked, and Morocco is not on it.
   - Caution: a modern map, with no date for the extent.
3. **File:Atiradores andaluzes e renegados 1614.png**
   - What it is: period source. A drawing by Jorge de Henin, 1614, of Andalusian and
     "renegade" arquebusiers serving the Saadi kings of Morocco (the Moroccan side at Tondibi).
   - Size: 443x311. License: public domain. Not viewed (refused when I tried).
   - Why it fits: the closest thing to a contemporary picture of the Moroccan guns.
   - Caution: drawn 23 years after the battle, from a source I could not confirm. Under the
     half-slide size, so use it as a small inset only.
4. Context only: **File:Tombeau dAskia in Gao by David Sessoms.jpg**, 2592x1944, CC BY-SA
   2.0, "Tomb of Askia, Gao" (modern photograph, 2006). Viewed: a small mud-brick tomb with
   cattle and a power pole in the frame. It shows a real Songhai monument but belongs to
   the dynasty, not to the battle. **File:ETH-BIB-Grabmal von Askia, Gao-Tschadseeflug
   1930-31-LBS MH02-08-0549.tif** (4958x3606, public domain, Walter Mittelholzer, 1930-31
   aerial photograph) is also there. Not viewed.
5. Do not caption as al-Mansur: **File:Ahmad al-Mansur by André Thevet.png** (2189x2685,
   public domain, 1584). Commons itself says only "a possible portrait", titled "Cherif roi
   de Fez et de Marroc". A **Saadian map** exists, **File:Conquetes Saadiennes.PNG** (683x780,
   CC BY 1.0), covering the dynasty's advance 1509 to 1591, but it is small and I could not
   view it.

## Twist

**Keep it text-led.** "Guns can win a place. They do not run it." is an idea, not a scene, and
a picture would compete with the sentence. The only picture worth naming is a *modern
painting*, **File:Zonaro GatesofConst.jpg** (903x1224, public domain, Fausto Zonaro, "Mehmed
II, Entering to Constantinople"). It is useful only if labeled "modern painting, c. 450 years
after" and shown as the artist's imagination, because it reads like a record. Not viewed.
A second modern painting is **File:Entry of Mehmed II into Constantinople by Benjamin
Constant.jpg**, 1438x2342, scanned from a book. Neither earns a slide.

## Lecture card: "The Major Land-Based Empires"

The card currently shows a modern photograph of Topkapi Palace. It names the Ottomans,
Safavids, Mughals, Qing and Russia, so one picture cannot cover it. Three options:

1. **File:Battle of Chaldiran miniature. Selīm-nāma, by Şūkrī-i Bitlisī, 1524 (National Library
   of Israel, Ms. Yah. Ar. 1116).jpg** (details under Chaldiran above). Two of the empires, in
   a battle, with guns. A source, not a landmark.
2. **File:Islamic Gunpowder Empires.jpg**
   - What it is: modern map of the Ottoman, Safavid and Mughal empires with labeled cities
     (Constantinople, Isfahan, Agra, Delhi and more).
   - Size: 912x549. License: CC BY-SA 4.0. Credit: "Pinupbettu, CC BY-SA 4.0, via Wikimedia
     Commons". Viewed.
   - Caution: **provenance is unclear.** The file is marked as the uploader's own work, but
     the style is that of a printed textbook map, so the license may not be reliable. The Qing
     is missing, and there is no date. The repository's own instructional map is the safer
     choice, and it already covers all four.
3. **File:Relief army Black River1759.jpg** (details under Qing above). The Qing, with
   muskets and camel artillery. Best of the three if you want a picture with a person's
   attention drawn into it.

## BeSurreal: a defender on the Theodosian Walls

The card's stable image is currently a photograph of Topkapi Palace, which is the sultan's
home, not the walls. A defender's view wants the walls or the siege:

1. **File:Siege of Constantinople BnF MS Fr 9087.jpg** (see "Cannon and proof"). It shows the
   walls, the defenders, and the bombards at once, in 1455. Honest caption: how Europeans
   imagined it.
2. **File:Theodosian Walls of Constantinople, Istanbul (24053561188).jpg** (see "Wall"). A
   student can stand where the defender stood and judge the height.
3. **File:Map of Constantinople, Buondelmonti.jpg** (see "Wall"). What the walls looked like
   on a map made a generation earlier, which a student can set beside the photograph.

---

## Already in the deck

Not re-suggested. These are repo-local and unchanged.

- **The four empires map** (`assets/images/instructional-maps/topic-3-1.svg`) on the
  "empires" and "close" slides.
- **The Dardanelles Gun** photograph (`assets/images/topics/3-1/dardanelles-gun.jpg`) on the
  "proof" slide. The Commons source is Gaius Cornelius's "Great Turkish Bombard at Fort
  Nelson.JPG", 1600x1200, public domain, which this check confirmed still exists.
- **The Panipat illustration** (`assets/images/topics/3-1/panipat-1526.jpg`) on the
  "panipat" slide, a Baburnama court painting.

The lesson page also uses the Ottoman expansion map (a GIF), the Topkapi Palace photograph
(card 2 and BeSurreal) and the Dardanelles Gun (card 3). The wall slide and the siege have no
picture yet.

## Traps seen while searching, and rejected

- **File:File 000000008e8481fa860a9a4a9d1a5050.png** is labeled a map of the Mughal Empire
  in 1700 but is by "Open Ai", dated 2026, so it is an AI picture dressed as a map. An AI
  image never counts as evidence.
- **File:A painting in Chehel Sotoun1.jpg** (and "Battle of Chaldiran (1514).jpg" from the
  same palace): Commons dates this Chaldiran painting 1801 to 1802. It is a much later
  painting, not a period source.
- **File:A portion of Panorama 1453 siege scene (cropped).jpg**: a photograph of a modern
  museum panorama, not a historical source.
- The Biringuccio *Pirotechnia* photographs (1540 and 1558 editions): I looked at four.
  They show furnaces, bellows, a goldsmith's hammer and a mortar, not cannon casting. Not
  used.

## Unverified leads

Things I looked for and could not confirm. None of these is a recommendation.

- **A period picture of casting a cannon or of a foundry.** Searches for cannon casting
  woodcuts, Biringuccio, German gun-founder terms and Ottoman Tophane returned nothing
  usable. Tophane-i Amire (the Ottoman imperial cannon foundry in Istanbul) has several modern
  photographs on Commons, but I did not check which century the building dates from, and
  it is not the 1453 foundry. A German 1698 woodcut of a bell and gun founder exists
  (title starts "Fotothek df tg 0008478 Ständebuch"), 543x820, but my preview download was
  refused and it is a late European print, so I left it out.
- **An Ottoman miniature of the 1453 siege.** Several searches found none.
- **A Saadian depiction of Judar Pasha or the Moroccan army at Tondibi.** Searches for
  "Judar Pasha" and 16th-century Moroccan soldiers returned nothing except the 1614
  drawing above.
- **A map with Kandahar between the Safavid and Mughal empires.** One search, no result.
- **Anything I did not look at** (marked "not viewed" above) has been checked for existence,
  size and license only, not for what it actually shows.
- **Facts that came from the story draft, not from Commons,** and remain unverified: the dates
  Kandahar changed hands, and the force sizes at Tondibi.

## Recommended shortlist

If you only add a few pictures, add these, in deck order.

1. **File:Theodosian Walls of Constantinople, Istanbul (24053561188).jpg** (Raddato). Beat:
   wall, and the BeSurreal card. Earns it because "a wall that stopped attackers for a
   thousand years" is an abstraction until students see the height and thickness. Keeps the
   deck from opening with only text.
2. **File:Siege of Constantinople BnF MS Fr 9087.jpg** (Le Tavernier, 1455). Beat: proof,
   with the Dardanelles Gun. The only period picture of the siege that shows bombards, and a
   ready-made sourcing question, "why does it look like a French castle?". Include the
   honest caption.
3. **File:Bullocks dragging siege-guns up hill during the attack on Ranthambhor Fort.jpg**
   (Akbarnama). Beat: pays. The only picture on the list that shows the cost of a gun in
   people and animals, which is the spine's "only a big state can pay".
4. **File:"Shah Ismail at the Battle of Chaldiran", from Bijan’s Tarikh-i Jahangusha-yi Khaqan
   Sahibqiran.jpg** (Muin Musavvir, 1680s). Beat: Chaldiran in "One Weapon, Four Stories".
   Shows a cavalry charge meeting bronze cannon and a gunner. Label it a later Safavid
   painting.
5. **File:Relief army Black River1759.jpg** (Qing court painting). Beat: the Qing proof, and
   an option for the lecture card. The clearest picture of a settled empire's firearms on
   the steppe.
6. **File:Battle of Chaldiran miniature. Selīm-nāma, by Şūkrī-i Bitlisī, 1524 (National Library
   of Israel, Ms. Yah. Ar. 1116).jpg** (1524). The lecture card, or Chaldiran's source
   beside the later Safavid painting (a nice "two sides, 160 years apart" pair for sourcing).
7. **File:12 Abu'l Hasan Jahangir Welcoming Shah 'Abbas, ca. 1618, Freer Gallery of Art,
   Washington DC.jpg** (Mughal court, c. 1618). Beat: Kandahar. Earns a slide because it
   turns a rivalry into a sourcing question: what does a court painting hide? Pair it with the
   1881 citadel ruin if students need to see a fortress.
8. **File:Map of Constantinople, Buondelmonti.jpg** (before 1430). Beat: wall or BeSurreal.
   A real period source that shows a city as its walls, made before the siege.

Tondibi and the twist stay text-led. If Tondibi needs a visual, draw a simple diagram of our
own (a small band with guns facing a very large army) using the numbers the deck already
allows, rather than projecting the French diagram with its unchecked counts.
