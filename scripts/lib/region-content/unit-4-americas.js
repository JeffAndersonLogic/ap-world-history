'use strict';

/**
 * Unit 4 by region: The Americas.
 *
 * The whole Unit 4 story of the Americas, c. 1450 to c. 1750, told as one narrative in four
 * sections: contact and the Columbian Exchange (KC-4.1.III, III.B, III.C; KC-4.1.V and V.A to
 * V.D), silver and the Spanish labor systems with the casta ranking (KC-4.2.II.D, KC-4.1.IV,
 * KC-4.1.IV.C, KC-4.2.III.A), the plantation Atlantic (KC-4.3.II.C, KC-4.2.II, KC-4.2.II.C,
 * KC-4.1.IV.D.i and .ii), and faith and resistance (KC-4.1.VI, KC-4.3.III.iii, KC-5.3.III.C).
 * KC-4.1, the unit's overview sentence, is carried by the whole chapter. Facts are drawn from
 * the Topic 4.2 to 4.8 chapters and their claim ledgers, and follow their corrections (the
 * central Mexico figures are Cook and Borah's, not the retired 15 million to 1.5 million pair;
 * malaria is hedged; Brazil's mills are Indigenous-worked before the 1600s; the plantation
 * system came from Madeira and then Sao Tome, as Topic 4.3 tells it). Deliberately left out:
 * the conquests of the Mexica and the Inca, which no Unit 4 topic owns and which appear only in
 * two connective sentences, and any Indigenous history before 1450 beyond a sentence of
 * setting. Indigenous survival is carried by the story itself (Plains horse nations, Indigenous
 * town governments, Nahua Christians, the Pueblos after 1692, the Jamaica Maroons) rather than
 * stated as a slogan.
 *
 * Plain-language and accuracy pass (2026-11-21), on the East Asia model: sentences cut to one
 * idea each, key terms defined in plain words where they first appear, and the College Board's
 * words moved out of the story into one "What the College Board says" box per section (kind
 * 'cb', one paragraph per item), quoted word for word from scripts/lib/ced-source/unit-4.js
 * with the topic linked and illustrative examples labelled as examples. Fixes from the
 * five-persona stress test of 2026-11-17: silver to China now follows the shared account
 * (already worth more in China than in Europe because the Ming gave up paper money; the Single
 * Whip then made most taxes payable in silver; China mined little), with no superlative; the
 * casta narrowing from the external review (item 5) kept in plain words; Madeira kept no
 * stronger than Topic 4.3 (Madeira, then Sao Tome, before the Americas), matching the
 * Sub-Saharan Africa chapter. Ledger hedges restored: "about one-seventh" (Topic 4.4 ledger),
 * American crops "helped feed" growing populations (Topic 4.3 ledger). Topic 4.8 added to
 * `topics`, since KC-4.1 and KC-4.2.II are Topic 4.8 codes. The closing now has six cards, one
 * per category. Cut for length, with their dates: Columbus's death (1506), the Treaty of
 * Tordesillas (1494), Magellan's Pacific crossing (1520 to 1521), the opening list of peoples,
 * Hudson's river, smallpox in the Caribbean (1518), Dine sheep herding, the encomienda's legal
 * limits, the Tepetlaoztoc complaint (1550s) and Indigenous court cases, the Seville fleets,
 * England's colonial trade laws (1660), Fujian as the merchants' home, Jamaica taken from Spain
 * (1655), Brazil's gold mining as a driver of
 * the slave trade, Indian cloth and the direct Brazil-Africa voyages, creole languages, the
 * "extirpate idolatry" quotation, the kachina dance ban (1661), Pope's town and the drought,
 * the Pueblo revolts of 1694 and 1696, Metacom's raids on English towns, the Palmares treaty
 * (1678) with Ganga Zumba and Zumbi, and the name of South Carolina's 1740 law. See
 * docs/UNIT-4-BY-REGION-CLAIM-LEDGER.md.
 *
 * Second polish (2026-11-21, the addendum to the plain-language brief): history and claims
 * unchanged. Every "What the College Board says" box now opens with an "In short:" sentence,
 * then gives whole Key Concept sentences word for word (a cut shown with " ... "), then each
 * illustrative example group in its own paragraph headed "An optional College Board example:".
 * No Key Concept sentence appears in more than one box, and only sentences this chapter
 * teaches are quoted. Added `inShort` (five sentences). Definitions moved out from between
 * commas into parentheses or their own short sentences (Indigenous, disease vector, endemic,
 * epidemic, tribute, friar, draft, viceroy, casta, peninsulares, creoles, mestizos, shares,
 * maroon community, militia); idioms removed ("struck silver", "beat back", "the last word");
 * topic links moved out of the story into the boxes; cross-region references written as
 * phrases that read well aloud. Cook and Borah's central Mexico figures moved from the story
 * into a "How we know" box, with the tribute records they were built from (Topic 4.3). Added
 * from Topic 4.5: Vodou "in the 1700s". Metacom's war now says the other Native nations
 * joined him. Closing cards rewritten as a claim plus dated evidence.
 *
 * Review pass 1 (2026-11-22, ledger G4, B2, B4, B5, B7, B8, B10, B11): forced mine labor is
 * Potosí's mit'a, not all silver mining; section 2's thesis no longer makes disease the cause of
 * the labor systems (the encomienda rewarded conquerors; Toledo's draft served the mercury
 * method, after Bakewell 1977); Madeira's enslaved workers worked beside free settlers; the
 * Comanche horse culture is built "during the 1700s"; casta ranks ancestry, and the crown's
 * appointments, not casta, favored peninsulares; silver was dearer in China for two reasons (paper
 * money given up; a growing economy that ran on silver); KC-4.1.IV.D.ii quoted whole with the
 * CED's own dash.
 *
 * Review pass 2 (2026-11-22, ledger Q1, Q2, Q10, J5): "Where the silver went" no longer numbers
 * its reasons; it gives the shared account in order (already worth more in China, because paper
 * money was given up and the economy ran on silver; then the Single Whip; then little mining). The
 * story now states KC-4.1.III.B's effect (Spain's voyages made other Europeans far more interested
 * in ocean travel and trade). Huayna Capac died "probably" in an epidemic. The Stono rebels
 * "probably" came from Kongo, as the Sub-Saharan Africa chapter and Topic 4.6 now say.
 *
 * Review pass 4 (2026-11-23, ledger AC2, AC3, AG1a, AG1b, AG6, and the quotation self-audit):
 * African foods crossed "often as food for the voyage", as Topic 4.3 hedges; the Dutch West India
 * Company is taught as a chartered monopoly company (1621) for KC-4.1.IV; sugar "went mostly to
 * Europe" and some reached the Middle East (KC-4.1.V.B); Potosi's find is dated by "the usual
 * date" 1545 and Gualpa's sworn account of 1572. Self-audit additions: Spain's Pacific voyages
 * (KC-4.1.III.B), fruit tree seeds in 1493 (KC-4.1.V.C, Crosby 1972), colonies held under
 * mercantilism (KC-4.1.IV.C), galleon silk sold in Mexico and Spain (KC-4.1.IV's Atlantic
 * markets), and the 1500 to 1800 silver estimate marked as running past 1750.
 */

const CB = 'What the College Board says';
const N = n => `<span class="num">${n}</span>`;
const KT = t => `<span class="kt">${t}</span>`;

module.exports = {
  topicKey: 'r4-americas',
  slug: 'region-4-americas',
  unit: '4',
  region: 'The Americas',
  titleHtml: 'The <em>Americas</em>',
  deck: `Between 1450 and 1750, the Americas were joined to the rest of the world. For the people already here, it began as a catastrophe. Colonies grew rich on silver, sugar and forced labor. Yet Indigenous Americans, Africans and Europeans together made the new societies. And people under colonial rule resisted.`,
  inShort: [
    `In 1492 a Spanish voyage joined the Americas to Afro-Eurasia, and new diseases killed millions of Indigenous people.`,
    `Plants and animals crossed both ways: horses and sugar came west, and maize and potatoes went east.`,
    `At Potosí, Spain forced Indigenous men to work its silver mine, and much of the silver ended up in China.`,
    `Sugar planters bought millions of enslaved Africans, who became most of the people in much of the Caribbean.`,
    `Christianity spread and blended with older faiths, and Indigenous and enslaved people resisted, sometimes winning lasting terms.`
  ],
  topics: ['4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8'],
  ced: [
    'KC-4.1',
    'KC-4.1.III',
    'KC-4.1.III.B',
    'KC-4.1.III.C',
    'KC-4.1.V',
    'KC-4.1.V.A',
    'KC-4.1.V.B',
    'KC-4.1.V.C',
    'KC-4.1.V.D',
    'KC-4.2.II.D',
    'KC-4.1.IV',
    'KC-4.1.IV.C',
    'KC-4.2.III.A',
    'KC-4.3.II.C',
    'KC-4.2.II',
    'KC-4.2.II.C',
    'KC-4.1.IV.D.i',
    'KC-4.1.IV.D.ii',
    'KC-4.1.VI',
    'KC-4.3.III.iii',
    'KC-5.3.III.C'
  ],

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'contact',
      num: '01',
      accent: 'gold',
      name: 'Two Worlds Joined',
      navLabel: 'Contact',
      dates: 'c. 1450 to 1600 &nbsp;·&nbsp; Voyages, germs, animals and crops',
      thesis: `In 1492 a voyage paid for by Spain joined two halves of the world. Germs did the most damage. Animals and plants changed the land and its people.`,
      parts: [
        {
          heading: 'Voyages across the ocean',
          blocks: [
            { p: `In ${N('1450')}, tens of millions of people lived in the Americas. Historians call them ${KT('Indigenous')} peoples. Indigenous means the first people to live in a place. In ${N('1492')} the rulers of Spain paid for a voyage by <b>Christopher Columbus</b>. He wrongly believed that Asia lay a few thousand miles to the west. He reached the Caribbean instead.` },
            { p: `Spain went on to pay for more voyages across the Atlantic, and later across the Pacific. Spain's voyages made other Europeans far more interested in ocean travel and trade. England, France and the Dutch sent ships across the northern Atlantic. They hoped to find a sea route to Asia. <b>John Cabot</b> sailed for England in ${N('1497')}. <b>Jacques Cartier</b> sailed for France in the 1530s, and <b>Henry Hudson</b> for the Dutch in ${N('1609')}. Land and Arctic ice blocked every route. Instead, the sailors found cod and a fur trade with Indigenous nations. <a href="#r4-europe-crowns">The Europe chapter</a> has more on these voyages.` }
          ]
        },
        {
          heading: 'The germs that did the most damage',
          blocks: [
            { p: `The ships carried ${KT('disease vectors')}. A disease vector is a living thing that spreads disease, such as a rat or a mosquito. The ships also brought diseases that were ${KT('endemic')} in Afro-Eurasia (Africa, Europe and Asia). Endemic means always present in a place. These diseases included <b>smallpox</b>, <b>measles</b> and, most likely, <b>malaria</b>.` },
            { p: `Many of these diseases first spread where people lived close to herd animals. The Americas had few herd animals. So their people had never met these germs.` },
            { p: `Most European adults had ${KT('acquired immunity')} to smallpox. They had caught it as children and survived, so their bodies could fight it off. Nobody in the Americas had had that chance. So smallpox struck people of every age at once. Often no one was left healthy enough to plant, cook or nurse the sick.` },
            { p: `Smallpox spread through Tenochtitlan in ${N('1520')}. Tenochtitlan was the capital of the Mexica (Aztecs). In ${N('1521')} Spanish forces and many thousands of Indigenous allies overthrew the Mexica. The ${KT('epidemic')} (a fast-spreading outbreak of disease) had helped them.` },
            { p: `In the 1530s the Spanish took over the Inca empire. A war over the throne had already split it. That war came after the Inca emperor Huayna Capac died, probably in an epidemic.` },
            { p: `In many regions, the population fell by half to ninety percent or more within about a century. War, forced labor and hunger made every epidemic deadlier.` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `Population figures for this period are estimates, not counts. The historians Sherburne Cook and Woodrow Borah built theirs from Spanish tribute records (lists of what each town had to pay). They estimated that central Mexico fell from about ${N('6.3 million')} people in ${N('1548')} to about ${N('1.1 million')} in ${N('1605')}. Other historians give other numbers. But even the lowest estimates that historians trust describe a catastrophe.`
            } },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Indigenous Americans were biologically weaker. Immunity to smallpox comes from surviving it. The pattern ran both ways. In West Africa, malaria and yellow fever killed Europeans in huge numbers, while local people had long lived with them.`
            } }
          ]
        },
        {
          heading: 'Animals, crops and sugar',
          blocks: [
            { p: `Historians call this two-way movement of plants, animals and diseases the ${KT('Columbian Exchange')}. Disease crossed by accident, but much else crossed on purpose. On his second voyage, in ${N('1493')}, Columbus brought horses, cattle, pigs, wheat, sugarcane and the seeds of fruit trees.` },
            { p: `Enslaved Africans were carried across the ocean by force. African foods crossed on the same ships, often as food for the voyage. Among them were okra and rice. Enslaved people grew African foods in garden plots to feed themselves.` },
            { p: `During the 1700s, Plains nations such as the <b>Comanche</b> built a new way of life around hunting bison on horseback. It was a new Indigenous culture, not an old one.` },
            { p: `Crops also went east. Maize, potatoes and cassava became ${KT('staple crops')} (main everyday foods) in parts of Europe, Asia and Africa. They grew where older crops could not, so they helped feed growing populations.` },
            { p: `Sugar became the great ${KT('cash crop')} (a crop grown to sell). It grew on ${KT('plantations')}. A plantation is a large farm that grows one cash crop with forced labor. Most American sugar was sold in Europe. Some reached the Middle East too.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: ocean voyages joined the two hemispheres, and the plants, animals and diseases that crossed changed life on both sides.`,
                `<a href="#chapter-t4-8">Topic 4.8</a>: "The interconnection of the Eastern and Western Hemispheres, made possible by transoceanic voyaging, transformed trade and had a significant social impact on the world."`,
                `<a href="#chapter-t4-2">Topic 4.2</a>: "New state-supported transoceanic maritime exploration occurred in this period."`,
                `<a href="#chapter-t4-2">Topic 4.2</a>: "Spanish sponsorship of the voyages of Columbus and subsequent voyages across the Atlantic and Pacific dramatically increased European interest in transoceanic travel and trade."`,
                `<a href="#chapter-t4-2">Topic 4.2</a>: "Northern Atlantic crossings were undertaken under English, French, and Dutch sponsorship, often with the goal of finding alternative sailing routes to Asia."`,
                `<a href="#chapter-t4-3">Topic 4.3</a>: "The new connections between the Eastern and Western Hemispheres resulted in the exchange of new plants, animals, and diseases, known as the Columbian Exchange."`,
                `<a href="#chapter-t4-3">Topic 4.3</a>: "European colonization of the Americas led to the unintentional transfer of disease vectors, including mosquitoes and rats, and the spread of diseases that were endemic in the Eastern Hemisphere, including smallpox, measles, and malaria. Some of these diseases substantially reduced the indigenous populations, with catastrophic effects in many areas."`,
                `<a href="#chapter-t4-3">Topic 4.3</a>: "American foods became staple crops in various parts of Europe, Asia, and Africa. Cash crops were grown primarily on plantations with coerced labor and were exported mostly to Europe and the Middle East."`,
                `<a href="#chapter-t4-3">Topic 4.3</a>: "Afro-Eurasian fruit trees, grains, sugar, and domesticated animals were brought by Europeans to the Americas, while other foods were brought by African enslaved persons."`,
                `<a href="#chapter-t4-3">Topic 4.3</a>: "Populations in Afro-Eurasia benefitted nutritionally from the increased diversity of American food crops."`,
                `An optional College Board example: horses, pigs and cattle (domesticated animals Europeans brought).`,
                `An optional College Board example: okra and rice (foods enslaved Africans brought).`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Columbian Exchange', `The movement of plants, animals and diseases between Afro-Eurasia and the Americas after 1492.`],
        ['Plantation', `A large farm growing one cash crop, such as sugar, with forced labor.`]
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'silver',
      num: '02',
      accent: 'rust',
      name: 'Silver, Land and Forced Work',
      navLabel: 'Silver and labor',
      dates: 'c. 1500 to 1750 &nbsp;·&nbsp; Encomienda, Potosí, the galleons, casta',
      thesis: `Spain rewarded its conquerors with the work of Indigenous communities. To mine silver at Potosí, it turned an old Inca labor duty into a forced draft. Much of the silver ended up in China.`,
      parts: [
        {
          heading: 'Paying conquerors with other people\'s work',
          blocks: [
            { p: `Colonial economies in the Americas depended mainly on farming. Mining was also important. The Spanish crown rewarded conquerors with the ${KT('encomienda')}. It was the right to demand labor and tribute (payments of goods) from one Indigenous community. In return, the colonist who held it was supposed to protect its people and have them taught Christianity.` },
            { p: `Bartolomé de las Casas campaigned against the encomienda. He was a friar (a member of a Catholic religious order). The New Laws of ${N('1542')} limited the encomienda. As it declined, the ${KT('hacienda')} grew. A hacienda was a large estate. Its Indigenous and mixed-race workers were often paid wages. Sometimes debt kept them from leaving.` }
          ]
        },
        {
          heading: 'A mountain of silver',
          blocks: [
            { p: `An Andean miner named Diego Gualpa found silver at <b>Potosí</b>, high in the Andes Mountains. The usual date for his find is ${N('1545')}. We know of it from his own sworn account, taken in ${N('1572')}. Spanish colonists claimed the mountain. In ${N('1546')} miners found silver at Zacatecas in Mexico. From the 1570s, Potosí also used a way to separate silver from rock with mercury (a liquid metal). It was first worked out in Mexico.` },
            { p: `The Inca had required communities to send people in turns to work for the state. This rotating duty was the ${KT('mit’a')}. The new mercury method needed many workers. So in the 1570s Francisco de Toledo turned the mit’a into a draft for the Potosí mine. A draft forces people to serve. Toledo was the viceroy of Peru (the king's governor there).` },
            { p: `Each year, about one-seventh of the adult men of the highland districts had to go. By ${N('1578')}, the draft took more than ${N('14,000')} men. The idea of a turn of service continued, but the master and the danger changed. Many men never came home from the mines.` }
          ]
        },
        {
          heading: 'Where the silver went',
          blocks: [
            { p: `Spain ran this trade by the rules of ${KT('mercantilism')}. This was the idea that a kingdom grows strong by gathering gold and silver. In this view, a kingdom should also hold colonies and keep their trade for itself.` },
            { p: `By one standard estimate, Spanish America produced about four-fifths of the world's silver between 1500 and 1800. (The estimate runs to 1800, after this unit ends.) Much of it ended up in China.` },
            { p: `Silver was already worth more in China than in Europe. That was because the Ming government (China's rulers) had given up paper money, and China's growing economy ran on silver. Then a tax reform called the Single Whip made most taxes payable in silver. That added to the demand. And China mined little silver of its own. <a href="#r4-east-asia-silver">The East Asia chapter</a> tells this from China's side.` },
            { p: `In ${N('1571')} Spain founded Manila, in the Philippines. From then on, ${KT('Manila galleons')} (large Spanish ships) carried silver across the Pacific from Acapulco in Mexico to Manila. There, Chinese merchants traded silk and porcelain for it. The galleons carried the silk and porcelain back to Mexico, and some went on to Spain.` }
          ]
        },
        {
          heading: 'A new top class, ranked by birth',
          blocks: [
            { p: `Spanish America ranked people by their ancestry (their family line). Historians call this ranking the ${KT('casta')} system. People of Spanish ancestry stood at the top. Among them, the crown favored those born in Spain for its top posts. They were called ${KT('peninsulares')}. They almost always held the post of viceroy, and many top posts in government and the Church. They were a new political elite (a small ruling group).` },
            { p: `${KT('Creoles')} were people of Spanish ancestry born in the Americas. They grew rich from mines, estates and trade. They were a new economic elite.` },
            { p: `Below them came people of mixed ancestry, such as ${KT('mestizos')} (people with Spanish and Indigenous parents). Indigenous people kept their own town governments and paid tribute. People of African ancestry were ranked lowest, whether free or enslaved.` },
            { p: `But casta was never one fixed ladder. Official records used only a few labels. How a person was recorded could change with their wealth, work and reputation. A rich mestizo might be recorded as Spanish. The ranking also worked differently from region to region.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: the colonies used old and new kinds of forced labor, their silver flowed to Asia, and new elites rose, ranked by birth.`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Newly developed colonial economies in the Americas largely depended on agriculture, utilized existing labor systems, including the Incan mit’a, and introduced new labor systems including chattel slavery, indentured servitude, and encomienda and hacienda systems."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "Mercantilist policies and practices were used by European rulers to expand and control their economies and claim overseas territories."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "The new global circulation of goods was facilitated by chartered European monopoly companies and the global flow of silver, especially from Spanish colonies in the Americas, which was used to purchase Asian goods for the Atlantic markets and satisfy Chinese demand for silver."`,
                `<a href="#chapter-t4-7">Topic 4.7</a>: "Imperial conquests and widening global economic opportunities contributed to the formation of new political and economic elites, including ... in the Americas with the rise of the Casta system."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Encomienda', `A colonist's right to demand labor and tribute from one Indigenous community.`],
        ['Mit’a', `The Inca duty to work for the state in turns. In the 1570s Spain made it a draft for the Potosí mine.`],
        ['Casta', `The ranking of people in Spanish America by ancestry. People of Spanish ancestry stood at the top.`]
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'plantations',
      num: '03',
      accent: 'iron',
      name: 'The Plantation Atlantic',
      navLabel: 'Plantations',
      dates: 'c. 1500 to 1750 &nbsp;·&nbsp; Sugar, tobacco, slavery, new peoples',
      thesis: `Sugar drew Europe's rival empires into the Americas. Planters chose to work their plantations with enslaved Africans, and they bought millions of them. That choice changed who lived here.`,
      parts: [
        {
          heading: 'Rival empires',
          blocks: [
            { p: `European kingdoms were rivals for power, wealth and religion. The English and French built colonies in North America and the Caribbean in the early 1600s. England's first lasting colony was Jamestown. The Virginia Company founded it in ${N('1607')}.` },
            { p: `The Virginia Company was a ${KT('joint-stock company')}. Many investors bought shares (small parts of the company). They split the profits and the losses.` },
            { p: `The Dutch West India Company was another joint-stock company. The Dutch government chartered it in ${N('1621')}, as its war with Spain began again. The charter gave it a monopoly on Dutch trade with West Africa and the Americas. No other Dutch merchant could trade there. The company held part of Brazil's sugar coast from ${N('1630')} to ${N('1654')}.` }
          ]
        },
        {
          heading: 'A system from the Atlantic islands',
          blocks: [
            { p: `What these empires often fought over was sugar. The sugar plantation was not invented in the Americas. Before ${N('1492')}, Portugal grew sugar on the island of Madeira. Many of its workers were enslaved people, including Canary Islanders and Africans. Free settlers also grew cane, some for wages and some for a share of the crop.` },
            { p: `Then Portugal did the same on São Tomé. São Tomé is an island in the Gulf of Guinea. It was settled in the 1480s and 1490s. What the Americas added was land. <a href="#r4-sub-saharan-africa-slave-trade">The Sub-Saharan Africa chapter</a> tells how plantations reached the Atlantic islands.` },
            { p: `Brazil became the first great American sugar economy in the 1500s. The Caribbean followed in the 1600s. Brazil's early mills used Indigenous workers. During the 1600s, almost all of their workers came to be enslaved Africans.` },
            { p: `Disease had killed many Indigenous workers. But people, not disease, chose to bring the island system across the ocean. In the English Chesapeake (Virginia and Maryland), tobacco planters first used ${KT('indentured servants')}. Most were poor Europeans. They worked four to seven years to pay for their voyage. From the late 1600s, planters turned more and more to enslaved Africans.` }
          ]
        },
        {
          heading: 'Slavery for life',
          blocks: [
            { p: `Plantations bought enslaved Africans in ever larger numbers, above all for sugar. The Trans-Atlantic Slave Trade Database estimates that about ${N('278,000')} Africans were forced onto ships bound for the Americas in the whole 1500s. From ${N('1701')} to ${N('1750')} alone, it was more than ${N('2.5 million')}.` },
            { p: `They were held in ${KT('chattel slavery')}. They were owned as property for life, and their children were born enslaved. A Virginia law of ${N('1662')} made the children of enslaved women enslaved too. Colonial laws also tied slavery to race.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that slavery began with the Atlantic trade. It was thousands of years old, in Africa, the Mediterranean and the Americas. What the plantations changed was its size, its tie to race, and how few ways out it left.`
            } },
            { p: `On Barbados, enslaved Africans outnumbered Europeans by the late 1600s. Across the British, French and Dutch Caribbean, Africans and their descendants became most of the people.` }
          ]
        },
        {
          heading: 'A world made by everyone',
          blocks: [
            { p: `Plantations were at the center of the ${KT('Atlantic trading system')}. This system moved goods, wealth and people. Sugar and tobacco went mostly to Europe. Guns, alcohol and cloth went to Africa. Enslaved Africans were forced west.` },
            { p: `In the colonies, Africans, Indigenous Americans and Europeans lived side by side, usually because some were forced to. All of them shaped the cultures that grew there, from cooking to music. The mixing happened under force, not between equals. But no single people made the result.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: plantations in rival European colonies needed workers, and that demand drove the Atlantic slave trade and changed who lived in the Americas.`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "Driven largely by political, religious, and economic rivalries, European states established new maritime empires, including the Portuguese, Spanish, Dutch, French, and British."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "Joint-stock companies, influenced by these mercantilist principles, were used by rulers and merchants to finance exploration and were used by rulers to compete against one another in global trade."`,
                `<a href="#chapter-t4-8">Topic 4.8</a>: "The demand for labor intensified as a result of the growing global demand for raw materials and finished products. ... plantations expanded, and the Atlantic slave trade developed and intensified."`,
                `<a href="#chapter-t4-4">Topic 4.4</a>: "The growth of the plantation economy increased the demand for enslaved labor in the Americas, leading to significant demographic, social, and cultural changes."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "The Atlantic trading system involved the movement of goods, wealth, and labor, including enslaved persons."`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "The Atlantic trading system involved the movement of labor—including enslaved persons and the mixing of African, American, and European cultures and peoples, with all parties contributing to this cultural synthesis."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Indentured servitude', `Work under contract for a set time, usually four to seven years, to pay for the voyage over.`],
        ['Chattel slavery', `Slavery in which people are owned as property for life and their children are born enslaved.`],
        ['Atlantic trading system', `The movement of goods, wealth and enslaved people among Europe, Africa and the Americas.`]
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'resistance',
      num: '04',
      accent: 'oxide',
      name: 'Faith and Pushback',
      navLabel: 'Faith and resistance',
      dates: 'c. 1530 to 1750 &nbsp;·&nbsp; Missions, blending, revolts, maroons',
      thesis: `Christianity spread, but the people who took it up also changed it. Where colonies pushed hardest, people resisted. Sometimes they won terms that lasted.`,
      parts: [
        {
          heading: 'Spread, clash, blend',
          blocks: [
            { p: `Missionaries spread Christianity through Spanish and Portuguese America. It brought conflict too. From around 1610, priests in Peru led campaigns to end Andean religion. They destroyed sacred objects and punished religious leaders.` },
            { p: `Faiths also blended. Historians call this ${KT('syncretism')}. At Tepeyac (a hill near Mexico City), Nahua and Spanish Christians honored the Virgin of Guadalupe by the 1550s. The Nahua were the Indigenous people of central Mexico. The friar Bernardino de Sahagún wrote that they had once honored a goddess named Tonantzin there. Historians argue about that link. But Nahua Christians made Mary their own.` },
            { p: `In the 1700s, enslaved Africans in French Saint-Domingue (today's Haiti) built a religion called Vodou. It joined African religions with Catholic saints.` }
          ]
        },
        {
          heading: 'The Pueblo Revolt and Metacom\'s War',
          blocks: [
            { p: `As colonies expanded, local people resisted. Spain ruled New Mexico from ${N('1598')}. It demanded harvests and unpaid labor from the Pueblo peoples who lived there. In ${N('1675')} the governor arrested forty-seven Pueblo religious leaders as sorcerers (people accused of harmful magic). <b>Popé</b> was one of them. He helped plan a rising to strike every Spanish settlement at once.` },
            { p: `The ${KT('Pueblo Revolt')} began on August 10, ${N('1680')}. The Pueblos killed about 400 colonists and drove the rest south to El Paso. For twelve years they ruled themselves. Spain returned from ${N('1692')}. But it did not bring back the encomienda, and friars put far less pressure on Pueblo religion.` },
            { p: `In New England, colonists kept taking Wampanoag land. In ${N('1675')} the Wampanoag leader <b>Metacom</b> went to war, and other Native nations joined him. The English called him King Philip. But the colonists had more people, and Native allies of their own.` },
            { p: `In ${N('1676')} Metacom was killed, and ${KT('Metacom\'s War')} ended in southern New England. Fighting farther north, in Maine, went on until ${N('1678')}. Many captives were sold into slavery in the Caribbean. The Native nations of southern New England lost their independence.` }
          ]
        },
        {
          heading: 'Enslaved people organize',
          blocks: [
            { p: `Enslaved people resisted every day, and sometimes they organized. In Brazil, people who escaped slavery built <b>Palmares</b>. A community like this is called a ${KT('maroon community')}. Palmares's fortified towns drove back Portuguese and Dutch attacks for most of the 1600s. It fell in the 1690s.` },
            { p: `In Jamaica, the colony could not defeat the Maroons. In ${N('1739')} it signed treaties that recognized their freedom. In return, the Maroons had to send back runaways.` },
            { p: `That same year, enslaved people at the Stono River in South Carolina seized guns. They marched toward Spanish Florida, which promised freedom to runaways who became Catholic. Several of the rebels probably came from the Catholic kingdom of Kongo. The colony's militia (its armed colonists) broke the march. In ${N('1740')} the colony made its slave laws harsher.` },
            { p: `By 1750, the Pueblo towns, the Plains nations, the Nahua Christians and the Jamaica Maroons were all still there. Colonial rule did not always win.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: contact spread Christianity and caused religious conflict and blending, and colonial rule met resistance from Indigenous and enslaved people.`,
                `<a href="#chapter-t4-5">Topic 4.5</a>: "In some cases, the increase and intensification of interactions between newly connected hemispheres expanded the reach and furthered development of existing religions, and contributed to religious conflicts and the development of syncretic belief systems and practices."`,
                `<a href="#chapter-t4-6">Topic 4.6</a>: "State expansion and centralization led to resistance from an array of social, political, and economic groups on a local level."`,
                `<a href="#chapter-t4-6">Topic 4.6</a>: "Enslaved persons challenged existing authorities in the Americas through organized resistance."`,
                `An optional College Board example: the Pueblo Revolts and Metacom's War (King Philip's War), for local resistance.`,
                `An optional College Board example: Maroon societies in the Caribbean and Brazil, and resistance of enslaved persons in North America.`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Syncretism', `The blending of two or more religions into new beliefs and practices.`],
        ['Pueblo Revolt', `The rising of the Pueblo towns of New Mexico in 1680. It drove the Spanish out for twelve years.`],
        ['Maroon community', `A community of people who escaped slavery, usually in hard-to-reach country.`]
      ]
    }
  ],

  closing: {
    heading: 'The Americas at a Glance',
    navLabel: 'At a glance',
    intro: `The region's story, sorted for review.`,
    argue: {
      move: 'Causation',
      prompt: `Disease did the most damage, but people also made choices. Explain how disease and human choices together changed who lived and worked in the Americas. Use one piece of evidence about disease and one about a labor system.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'European empires took over large parts of the Americas, and local people resisted.',
        body: `Spanish forces and Indigenous allies overthrew the Mexica in 1521. In 1680 the Pueblo Revolt drove Spain out of New Mexico for twelve years. Metacom's War was crushed in southern New England in 1676.`
      },
      {
        category: 'Religious',
        title: 'Christianity spread, clashed with older faiths and blended with them.',
        body: `From about 1610, priests in Peru destroyed Andean sacred objects. By the 1550s, Nahua Christians honored the Virgin of Guadalupe at Tepeyac. In the 1700s, enslaved Africans in Saint-Domingue built Vodou.`
      },
      {
        category: 'Social',
        title: 'Disease, slavery and casta changed who lived in the Americas and how they were ranked.',
        body: `Central Mexico fell from about 6.3 million people in 1548 to about 1.1 million in 1605 (Cook and Borah's estimate). On Barbados, enslaved Africans outnumbered Europeans by the late 1600s. Casta ranked people by ancestry, and the crown gave many top posts to people born in Spain.`
      },
      {
        category: 'Intellectual',
        title: 'The big ideas were arguments about empire.',
        body: `Las Casas argued that the encomienda was unjust, and the New Laws of 1542 limited it. Mercantilism (the idea that a kingdom grows strong by gathering gold and silver) shaped Spain's colonial trade.`
      },
      {
        category: 'Technological',
        title: 'Ships, mercury and horses changed what people could do.',
        body: `From 1571, Manila galleons carried silver across the Pacific from Acapulco to Manila. From the 1570s, Potosí used mercury to separate silver from rock. During the 1700s, the Comanche built a way of life around hunting bison on horseback.`
      },
      {
        category: 'Economic',
        title: 'Silver, sugar and forced labor built the colonial economies.',
        body: `Silver was found at Potosí in 1545, and by 1578 the mit’a draft sent more than 14,000 men there. By one estimate, Spanish America produced about four-fifths of the world's silver. Brazil was the first great American sugar economy, in the 1500s.`
      }
    ]
  }
};
