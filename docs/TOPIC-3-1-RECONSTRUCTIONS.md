# Topic 3.1 Historical Reconstructions to Create

Scene-setting pictures for the Topic 3.1 deck, in the same family as the Unit 2
reconstructions (`assets/images/topics/2-3/2.3 - Dhow Ship.jpeg` and the like).

**The rules, from `docs/PRESENTATION-AUTHORING.md`:**
- An AI picture sets a scene. It is never a source and **never goes in the Evidence Lab**.
- It always carries exactly `Historical Reconstruction - AI Generated`, small, in a corner. In the
  deck this label is added for you when the picture's data says `ai: true`. In hand-written HTML,
  use the `<figcaption>` in the snippets below, word for word.
- Describe the scene in the **alt text**, not in the label.
- Real sources beat reconstructions wherever a real one exists. The separate image plan
  (`docs/TOPIC-3-1-IMAGE-PLAN.md`, when it is ready) lists verified real pictures. Use these
  reconstructions for the beats where no real picture can show the scene (a siege battery at work,
  a battle in progress, a desert crossing).

**How to make them (what Unit 2 learned):**
- **16:9, at least 1600 pixels wide.** The board is 1280x720.
- **No text, labels, flags with writing, or signatures in the picture.** Then the on-screen label
  does not appear twice.
- **Leave quiet space** on the side noted below, so slide text never sits on the action.
- **Trim any generator watermark or sparkle** from the corner before you save it.
- **Save as** `assets/images/topics/3-1/3.1 - <Title>.png` (Unit 2 style: topic number, a dash, the title).
- Ask for **plain, period-correct clothing and tools.** Nothing from a fantasy film, no modern
  objects, no shiny plate armor. Say "documentary painting, natural light" rather than "epic."

All file paths in the HTML are written for a page in `unit-3/` or `teacher/`
(both use `../assets/...`). Spaces in file names are written as `%20`.

---

## The list

**Placed in the deck, 2026-10-05:** #3 Bombards at the Walls (cropped to the siege lines, because the full picture showed a minareted Hagia Sophia and Ottoman mosques, which is the city after 1453) and #4 Hauling the Great Gun (modeled on the Akbarnama's siege of Ranthambhor, 1568). Both are slides of their own, labeled by `ai: true`.

### 1. Walls Hold
- **Beat:** the wall problem (slide "A wall let a lord say no to a king"), and the Constantinople lecture card.
- **Scene:** The land walls of Constantinople on a calm morning: a deep ditch, a low outer wall, a
  taller inner wall with square towers, a few defenders on the ramparts, farmland in front.
- **Quiet space:** right third (sky).
- **Accuracy:** It is a *double* wall behind a ditch, in stone and brick, not a single tall castle wall. No cannon yet.

```html
<figure class="reconstruction">
  <img src="../assets/images/topics/3-1/3.1%20-%20Walls%20Hold.png" alt="The layered land walls of Constantinople behind a deep ditch, with defenders on the ramparts on a calm morning">
  <figcaption>Historical Reconstruction - AI Generated</figcaption>
</figure>
```

### 2. Defender on the Wall
- **Beat:** the BeSurreal card (a defender on the Theodosian Walls, April 1453).
- **Scene:** One defender in plain wool and a simple helmet on the wall at dawn, seen from behind
  over the shoulder, looking out at a large camp and a line of enormous guns in the distance.
- **Quiet space:** left third.
- **Accuracy:** One person, ordinary kit. The Ottoman camp is tents and banners with no readable writing.

```html
<figure class="reconstruction">
  <img src="../assets/images/topics/3-1/3.1%20-%20Defender%20on%20the%20Wall.png" alt="A defender on the walls of Constantinople at dawn, seen from behind, looking at the Ottoman camp and its huge guns">
  <figcaption>Historical Reconstruction - AI Generated</figcaption>
</figure>
```

### 3. Bombards at the Walls
- **Beat:** the cannon (slide "The cannon changed the math") and the Constantinople proof slide.
- **Scene:** A battery of giant bronze bombards on heavy timber beds behind wooden screens and a
  low earth bank, crews loading, a stack of round stone shot, smoke from a recent shot, and a
  breach with rubble in the wall beyond.
- **Quiet space:** left third.
- **Accuracy:** The biggest guns were fixed on wooden cradles, not light wheeled carriages. Stone
  shot, not iron, for the giant bombards. Keep it dusty and crowded, not heroic.

```html
<figure class="reconstruction">
  <img src="../assets/images/topics/3-1/3.1%20-%20Bombards%20at%20the%20Walls.png" alt="Ottoman crews loading giant bronze bombards on timber beds, with stone shot piled nearby and a breach in the city wall beyond">
  <figcaption>Historical Reconstruction - AI Generated</figcaption>
</figure>
```

### 4. Hauling the Great Gun
- **Beat:** "Only a big state could pay for a cannon" (the cost of moving one).
- **Scene:** A huge bronze bombard strapped to a heavy wooden sledge, pulled by long teams of oxen
  with dozens of men steadying it on a dirt road through hills.
- **Quiet space:** top third.
- **Accuracy:** Say "dozens of oxen" and "many men." Do not draw a modern truck-like carriage.

```html
<figure class="reconstruction">
  <img src="../assets/images/topics/3-1/3.1%20-%20Hauling%20the%20Great%20Gun.png" alt="Long teams of oxen and many men hauling a huge bronze bombard on a wooden sledge along a dirt road">
  <figcaption>Historical Reconstruction - AI Generated</figcaption>
</figure>
```

### 5. The Foundry
- **Beat:** "Only a big state could pay for a cannon" (metal and foundries).
- **Scene:** A cannon foundry: molten bronze poured from a crucible into a clay mold set in a pit,
  workers with long tools and leather aprons, glowing light, a finished bronze barrel on trestles.
- **Quiet space:** right third.
- **Accuracy:** Bronze casting in a mold in a pit, early modern workshop, no machinery.

```html
<figure class="reconstruction">
  <img src="../assets/images/topics/3-1/3.1%20-%20The%20Foundry.png" alt="Workers pouring molten bronze into a clay mold in a pit at an early modern cannon foundry, with a finished barrel on trestles">
  <figcaption>Historical Reconstruction - AI Generated</figcaption>
</figure>
```

### 6. Cavalry Meets Guns at Chaldiran
- **Beat:** "One weapon, four stories" (Ottoman card, Chaldiran 1514).
- **Scene:** Safavid cavalry in red twelve-folded caps charging across open ground toward a line of
  Ottoman musketeers and cannon drawn up behind a row of carts, with smoke rising.
- **Quiet space:** top third (sky and smoke).
- **Accuracy:** Red headgear with twelve folds marks the Qizilbash. Ottoman guns stood behind linked
  carts. No flags with writing.

```html
<figure class="reconstruction">
  <img src="../assets/images/topics/3-1/3.1%20-%20Cavalry%20Meets%20Guns%20at%20Chaldiran.png" alt="Safavid cavalry in red caps charging toward Ottoman musketeers and cannon behind a line of carts, with gun smoke rising">
  <figcaption>Historical Reconstruction - AI Generated</figcaption>
</figure>
```

### 7. Babur's Guns at Panipat
- **Beat:** "One weapon, four stories" (Mughal card), beside the real Panipat painting.
- **Scene:** Babur's army behind a line of carts tied together with ropes, matchlock soldiers
  between the carts, a few bronze cannon, and a much larger army with war elephants advancing in the distance.
- **Quiet space:** left third.
- **Accuracy:** Use this *beside* the real Baburnama painting, not instead of it. Matchlocks and
  small field guns, not giant bombards.

```html
<figure class="reconstruction">
  <img src="../assets/images/topics/3-1/3.1%20-%20Babur%27s%20Guns%20at%20Panipat.png" alt="Babur's soldiers with matchlock guns and cannon behind a line of ropes-tied carts, with a larger army and war elephants advancing across the plain">
  <figcaption>Historical Reconstruction - AI Generated</figcaption>
</figure>
```

### 8. Qing Banners on the Steppe
- **Beat:** "One weapon, four stories" (Qing card).
- **Scene:** Manchu banner soldiers, some mounted and some on foot with matchlock muskets, and a
  field gun, moving across open grassland, with nomad tents far off.
- **Quiet space:** right third.
- **Accuracy:** Qing soldiers in period dress. Keep the tents small and distant, and show no
  specific named battle.

```html
<figure class="reconstruction">
  <img src="../assets/images/topics/3-1/3.1%20-%20Qing%20Banners%20on%20the%20Steppe.png" alt="Manchu banner soldiers, mounted and on foot with matchlock muskets and a field gun, crossing open grassland toward distant nomad tents">
  <figcaption>Historical Reconstruction - AI Generated</figcaption>
</figure>
```

### 9. Kandahar, Fortress on the Road
- **Beat:** Rivalry 1, Safavid and Mughal (Kandahar slide).
- **Scene:** A mud-brick walled fortress on a dry plain with mountains behind, a caravan road
  running past its gate, and two armies' tents camped at some distance on opposite sides.
- **Quiet space:** top third.
- **Accuracy:** Mud-brick and stone, dry landscape. Do not put readable banners on either camp.

```html
<figure class="reconstruction">
  <img src="../assets/images/topics/3-1/3.1%20-%20Kandahar%2C%20Fortress%20on%20the%20Road.png" alt="A mud-brick fortress on a dry plain with mountains behind, a caravan road passing its gate, and two armies camped on opposite sides">
  <figcaption>Historical Reconstruction - AI Generated</figcaption>
</figure>
```

### 10. Across the Sahara with Guns
- **Beat:** Rivalry 2, Morocco and Songhai (the crossing).
- **Scene:** A long column of camels and soldiers in desert dress crossing high sand dunes, some
  carrying firearms and a few light cannon packed on camels, under a harsh sun.
- **Quiet space:** top third (sky).
- **Accuracy:** A few thousand men is a long, thin line, not a vast host. Camels carry the supplies.

```html
<figure class="reconstruction">
  <img src="../assets/images/topics/3-1/3.1%20-%20Across%20the%20Sahara%20with%20Guns.png" alt="A long column of camels and soldiers carrying firearms and light cannon crossing high sand dunes under a harsh sun">
  <figcaption>Historical Reconstruction - AI Generated</figcaption>
</figure>
```

### 11. Tondibi, Guns Against Numbers
- **Beat:** Rivalry 2, Morocco and Songhai (Tondibi 1591).
- **Scene:** A small line of Moroccan soldiers with arquebuses and a light gun, firing smoke across
  a dusty plain at a much larger Songhai force of cavalry and foot soldiers with spears, swords and bows.
- **Quiet space:** left third.
- **Accuracy:** Show the size difference. Songhai fighters with spears, bows and swords. No
  invented gimmicks (leave out stampeding animals and similar tales).

```html
<figure class="reconstruction">
  <img src="../assets/images/topics/3-1/3.1%20-%20Tondibi%2C%20Guns%20Against%20Numbers.png" alt="A small line of Moroccan soldiers firing arquebuses across a dusty plain at a much larger Songhai army of cavalry and foot soldiers with spears and bows">
  <figcaption>Historical Reconstruction - AI Generated</figcaption>
</figure>
```

### 12. Winning Is Not Holding
- **Beat:** "The twist" (guns win a place, they do not run it), and the hand-off to Topic 3.2.
- **Scene:** A conquered Niger river city in the afternoon: a small garrison of soldiers resting
  in a market square among townspeople going about their work, cannon silent in the background.
- **Quiet space:** right third.
- **Accuracy:** Quiet and ordinary, not a battle. The point is that the guns are not the hard part now.

```html
<figure class="reconstruction">
  <img src="../assets/images/topics/3-1/3.1%20-%20Winning%20Is%20Not%20Holding.png" alt="A small garrison of soldiers resting in the market square of a conquered river city while townspeople go about their work">
  <figcaption>Historical Reconstruction - AI Generated</figcaption>
</figure>
```

---

## When the pictures exist

Upload them to `assets/images/topics/3-1/` with the file names above. Putting one in the deck is a
data change, not HTML. In `teacher/data/topic-3-1-presentation-assets.js` the visual is:

```js
{ url: '../assets/images/topics/3-1/3.1 - Walls Hold.png',
  alt: 'The layered land walls of Constantinople behind a deep ditch, with defenders on the ramparts on a calm morning',
  ai: true }
```

`ai: true` prints the house label for you, so the deck never carries a second one. Ask me to
wire them in and I will place each on its beat and rebuild the student deck.

**Not for reconstruction:** anything in the Evidence Lab (the Dardanelles Gun, the Panipat
painting and the siege record stay real), any portrait of a named person, and any picture of a
named battle's exact moment. Those need real sources.
