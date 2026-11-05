# Topic 4.4, the Indian Ocean Story: Two Image Prompts

**Written 2026-11-05 at Jeff's request**, for the three Indian Ocean story slides added to the 4.4
deck that day (`calicut`, `force` and `gates` in `teacher/data/topic-4-4-teaching-base.js`). Jeff
runs these in his image generator and uploads the results to `assets/images/topics/4-4/` under the
filenames given. The **presentation-images** skill then checks each one against its "check before
use" list before it is wired in.

The rules from `docs/PRESENTATION-AUTHORING.md` ("AI-generated images") apply: each picture carries
exactly `Historical Reconstruction - AI Generated` on screen, which the slide library prints from
`ai: true`; it is never in the Evidence Lab; and it is never called evidence. A picture that fails a
check is regenerated or dropped, not captioned around.

**Shape.** Both pictures fill the tall right-hand panel of a story slide, about 3 wide by 4 high,
with a short caption along the bottom. So both prompts ask for a 3:4 portrait frame, keep the action
in the middle, leave a calm band at the bottom for the caption, and keep the bottom-right corner
empty (it is trimmed off Gemini files to remove the generator's mark).

| Slide | Picture | Replaces |
|---|---|---|
| 8, `calicut` | 1. The gifts at Calicut, May 1498 | the Topic 4.1 Calicut harbor scene, used until this is uploaded |
| 9, `force` | 2. The cartaz at Hormuz, about 1520 | nothing yet: the slide is a cause chain with no picture, and becomes a story scene once this exists |

## 1. The gifts at Calicut, May 1498

**Save as** `assets/images/topics/4-4/4.4 - Gifts at Calicut.jpg`

> Photorealistic cinematic historical reconstruction, 3:4 portrait, a shaded veranda of a timber
> building in Calicut on the Malabar coast of India in May 1498, with steep tiled roofs and carved
> wooden pillars in the Kerala style, coconut palms and monsoon clouds beyond. On a woven mat in the
> foreground sit the Portuguese gifts, opened: bolts of striped cotton cloth, red hoods, plain hats,
> strings of red coral, six brass washbasins, a wooden case of sugar, and small casks of oil and
> honey. Behind them a bearded Portuguese captain in a dark 1490s doublet, cloak and soft cap stands
> stiffly, embarrassed. Facing him, two officials of the Zamorin laugh at the gifts: a Malayali
> Hindu official, bare to the waist in a white wrapped cloth with gold earrings and armlets, and a
> Muslim merchant in a white robe and turban, one of them waving a hand at the basins. In the
> background, porters carry sacks of black pepper and bales of fine white cotton, the goods Calicut
> really traded. Warm, humid afternoon light. Keep the laughing officials and the gifts in the middle
> of the frame; the bottom fifth is the plain woven mat where a caption will sit, and the
> bottom-right corner stays empty. Documentary realism, no text, no captions, no watermark, no logos.

> Exclude: Mughal dress, domes or onion arches (the Mughal Empire did not exist until 1526),
> elephants or thrones on the veranda, gold coins or jewels among the gifts (da Gama had no gold to
> give), lace ruffs, tricorn hats or 1600s clothing, readable writing, modern flags.

**Check before use**

- The officials are laughing or dismissive, and the Portuguese captain is not.
- The gifts are cheap goods (cloth, hats, basins, coral, sugar, casks), with no gold.
- Nothing Mughal or Persian-domed; the building reads as Kerala (timber, pillars, tiled roofs).
- Portuguese clothing is late 1400s: doublet, hose, cloak, soft cap. No ruffs.
- No readable text, and nothing important in the bottom-right corner.

## 2. The cartaz at Hormuz, about 1520

**Save as** `assets/images/topics/4-4/4.4 - The Cartaz.jpg`

> Photorealistic cinematic historical reconstruction, 3:4 portrait, the mouth of the Persian Gulf
> about 1520. A large Portuguese armed carrack with high wooden castles at bow and stern and the red
> cross of the Order of Christ on its square sails has come alongside a Gujarati merchant ship, a
> broad wooden trading ship stacked with bales of cotton cloth. On the merchant ship's deck, a
> Gujarati merchant in a white robe and turban holds out a folded paper pass with a wax seal; a
> Portuguese officer in a steel helmet and breastplate leans across to read it, while two Portuguese
> soldiers with matchlock guns watch from the carrack's rail. Behind them, the stone Portuguese
> fortress of Hormuz stands on its bare, rocky island, with dry brown mountains on the coast beyond.
> Hard, bright desert light, calm turquoise water. Keep the two ships and the pass in the middle of
> the frame; the bottom fifth is plain calm water where a caption will sit, and the bottom-right
> corner stays empty. Documentary realism, no text, no captions, no watermark, no logos.

> Exclude: cannons firing, smoke or explosions, pirates or skull flags, Dutch, English or modern
> flags, warships with several gun decks (those are 1700s), green palm jungle (Hormuz is desert),
> readable writing on the pass, Arabian Nights fantasy costumes.

**Check before use**

- The scene is an inspection, a pass held out and read, not a battle.
- The Portuguese ship is an early 1500s carrack, with high castles and the red cross on its sails.
- The fort sits on a dry, rocky island, not in a jungle.
- Portuguese armor and clothing are early 1500s; the Gujarati merchant is not dressed as a sultan.
- No readable text, and nothing important in the bottom-right corner.

## When the pictures arrive

1. `calicut`: in `teacher/data/topic-4-4-presentation-assets.js`, the block headed "The Indian
   Ocean story, 2026-11-05" points at the 4.1 harbor picture. Change its file name to
   `4.4 - Gifts at Calicut.jpg` and its alt text to describe the new picture.
2. `force`: change the slide's `kind` from `cause-chain` to `story-scene`, keep its five steps, and
   add `visual` with `ai: true` and the new file. A story scene takes up to five steps, so nothing is
   cut.
3. Rebuild the student deck (`npm run build:student-os-decks`), run `npm test`, and check both
   slides on the projector view.
