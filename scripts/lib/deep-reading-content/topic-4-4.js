'use strict';

/**
 * Topic 4.4, Maritime Empires Established: the deep reading.
 *
 * Why this exists. The success criteria ask for a change and a continuity in
 * each of three places: who ruled, trade and labor, and slavery. The First & 10
 * tells that story. What it has no room for is the mechanism behind each case:
 * why a small kingdom could hold a coast and not a country, how China and Japan
 * kept control of trade, how African kings used the trade to grow stronger, how
 * an old labor duty became a colonial one, and what made plantation slavery
 * different from the older slavery it grew beside.
 *
 * Rebuilt from the 4.4 story (docs/TOPIC-4-4-STORY-DRAFT.md) on 2026-10-14.
 * The old chapter, "Three Ways to Hold an Ocean," was organized around three
 * models of empire, two of which belong elsewhere: the chartered joint-stock
 * company is Topic 4.5's, and the conquests of Tenochtitlan and Cajamarca are no
 * Unit 4 topic's. Its strongest material, on the cartaz and the Estado da Índia
 * and on encomienda, is kept in sections 01 and 04.
 *
 * Three things carried deliberately:
 *
 *   1. Asia set terms. Section 02 is the second sentence of KC-4.3.II.A.i, which
 *      the old pages never taught: Ming China at Macau and Tokugawa Japan from
 *      1635 to 1641.
 *   2. African states had power in the trade, and some used it to sell captives.
 *      Section 03 holds both halves together, because a student who learns only
 *      one of them learns a myth.
 *   3. Slavery did not begin in 1500. Section 05 sets the older forms beside the
 *      plantation economy, as the CED pairs them.
 */

module.exports = {
  topicKey: 't4-4',
  slug: 'topic-4-4-maritime-empires-established',
  sourceFile: 'deep-reading-topic-4-4-maritime-empires-established.html',
  lessonFile: 'lesson-4-4-maritime-empires-established.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 4.4: Who Set the Terms',
  eyebrow: 'Topic 4.4 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Who Set the <em>Terms</em>',
  deck: `Between 1450 and 1750 rival European states built empires held together by ships: forts on the coasts of Africa and Asia, and colonies in the Americas. But in much of the world someone else set the terms. This chapter explains how a trading post worked, how China and Japan kept control, how Kongo and Asante grew strong, how colonial labor reused old systems and invented new ones, and how plantation slavery differed from the older slavery it grew beside.`,
  meta: ['Five sections', 'Posts, Asia, Africa, labor, slavery', 'Read alongside the First & 10'],
  footerNote: 'Topic 4.4 &nbsp;·&nbsp; Who Set the Terms &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The College Board asks three things of this topic: how states were built, what changed and continued in trade and labor, and what changed and continued in slavery. Sections 01 to 03 answer the first, sections 01 and 04 the second, and section 05 the third. Every section ends with a change and a continuity you can use.`,
    steps: [
      `<b>01 The empire of chokepoints:</b> the rivalries, the trading posts, and the cartaz.`,
      `<b>02 Asia's terms:</b> Macau under Ming officials, and Japan from 1635 to 1641.`,
      `<b>03 Kongo and Asante:</b> two African states that grew stronger through the trade.`,
      `<b>04 Work in the colonial Americas:</b> the mit’a reused, and the new labor systems.`,
      `<b>05 Slavery, old and new:</b> what continued in Africa, and what the plantations changed.`,
      `<b>Then the closing section</b>, which turns all of it into continuity-and-change sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'tradingpost',
      num: '01',
      accent: 'gold',
      name: 'The Empire of Chokepoints',
      navLabel: 'Trading posts',
      dates: 'c. 1480 to 1650 &nbsp;·&nbsp; Rivalry, forts, and the cartaz',
      thesis: `Portugal was a small kingdom with no army capable of taking territory in Asia. What it had was ships that carried guns, so it built an empire out of the only thing that advantage could hold: the narrow places every ship has to pass.`,
      parts: [
        {
          heading: 'Why rivals built empires at all',
          blocks: [
            { p: `The College Board puts the cause in three words: the maritime empires were "driven largely by political, religious, and economic rivalries." Each word does work. <b>Political:</b> Portugal and Spain divided their claims in the Treaty of Tordesillas in <span class="num">1494</span>; the Dutch Republic fought Spain for its independence from <span class="num">1568</span>; England and France fought each other for colonies through the 1600s and 1700s. <b>Religious:</b> papal bulls of the 1450s framed Portuguese expansion as war on Muslim powers and a Christian mission, and after the Reformation, Protestant England and the Dutch fought Catholic Spain. <b>Economic:</b> West African gold, Asian spices and American sugar, and the profits of carrying them.` },
            { p: `Rivalry also explains why the empires kept changing hands. When one state found a route or a rich coast, the others came after it. The Dutch took Elmina from Portugal in <span class="num">1637</span> and Malacca in <span class="num">1641</span>; the English and French built colonies of their own in North America and the Caribbean in the early 1600s.` }
          ]
        },
        {
          heading: 'What Portugal actually seized',
          blocks: [
            { p: `Portugal's first great post was in Africa: the fortress of São Jorge da Mina, Elmina, built on the Gold Coast in <span class="num">1482</span> to buy gold. In Asia, Afonso de Albuquerque took <b>Goa</b> in <span class="num">1510</span>, and by <span class="num">1530</span> it was the capital of the <span class="kt">Estado da Índia</span>, Portugal's network of eastern posts. <b>Malacca</b>, taken in <span class="num">1511</span>, controls the main strait between the Indian Ocean and the South China Sea. <b>Hormuz</b>, taken in <span class="num">1515</span>, sits at the mouth of the Persian Gulf. Add fortified posts down the East African coast and along the Indian shore.` },
            { p: `Every one of them is a port, and several, Malacca and Hormuz above all, sit at chokepoints. None of them is a province. The Portuguese held dozens of fortified points and almost no land behind them, which is exactly what a network built to tax movement, rather than to own land, looks like. A <span class="kt">trading post</span> made money for the king who backed it and the merchants who traded through it, the College Board's words, in two ways: by buying goods where they were produced, and by taxing other people's ships.` },
            { p: `The tax was the <span class="kt">cartaz</span>, a pass that a merchant ship bought from the Portuguese, which committed it to calling at a Portuguese port, paying duties there and carrying none of the goods Portugal claimed for itself. A ship sailing without one could be seized by Portuguese patrols.` }
          ]
        },
        {
          heading: 'Why ports and not provinces',
          blocks: [
            { p: `This is the mechanism the section turns on. Portuguese naval artillery could out-shoot the fleets it met in the Indian Ocean and could batter a harbor, which is how the Portuguese won at Diu in <span class="num">1509</span>. But a ship's guns cannot occupy a river valley. Ashore, out of range of the guns, the Portuguese faced Gujarat, Vijayanagara, the Safavids, the Ottomans and Ming China (and, after <span class="num">1526</span>, the Mughals), states with armies, revenues and populations many times their own. Their empire took the shape of their advantage: decisive at sea and at the water's edge, small fifty miles inland.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Portugal "took over Indian Ocean trade." It taxed a share of it from a string of forts, and it did so alongside much larger states that found the arrangement tolerable or not worth the cost of ending. When a regional power did decide to push back, it often could: Ottoman fleets contested the Red Sea, Aceh and Calicut fought the Portuguese for decades, and Oman took Muscat in <span class="num">1650</span> and Mombasa in <span class="num">1698</span>.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The cartaz. <em>A naval force too small to occupy territory can still make money from a trade route by selling permission to use it, because a strait concentrates all traffic into a stretch of water that a few armed ships can patrol: the change was a European navy taxing Asian shipping; the continuity was that the shipping, and the merchants, went on.</em>`,
        limit: `Enforcement was patchy across an ocean that size, merchants evaded and bribed, and the system collapsed wherever a regional power decided to remove it, as Oman did at Muscat in 1650.`,
        comparison: `Against <em>Srivijaya</em> in Topic 2.3: a state at the Strait of Malacca taxing passing ships is a much older idea than the Portuguese, who seized the same strait for the same reason. What was new was a distant, small power holding the strait with guns rather than a local one.`
      },
      terms: [
        ['Maritime empire', 'An empire held together by ships and sea routes, as the Portuguese, Spanish, Dutch, French and British empires of this period were.'],
        ['Trading post', 'A small fortified base where a foreign state\'s merchants buy and sell, such as Elmina, Goa or Malacca.'],
        ['Estado da Índia', 'The Portuguese network of fortified ports in the Indian Ocean and beyond, governed from Goa.'],
        ['Cartaz', 'The pass Portugal sold to merchant ships, requiring them to call at a Portuguese port and pay duties there.'],
        ['Chokepoint', 'A narrow passage all shipping on a route must use, which lets a small naval force tax a large trade.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'asia',
      num: '02',
      accent: 'rust',
      name: 'Asia\'s Terms',
      navLabel: 'China and Japan',
      dates: '1557 to 1641 &nbsp;·&nbsp; Macau, Nagasaki, Dejima',
      thesis: `The strongest states in Asia let Europeans trade on Asian terms. Ming China allowed a small Portuguese settlement under Chinese officials, and Tokugawa Japan, fearing Christianity, cut European trade down to one Dutch post on an island in Nagasaki harbor. Europe's empires grew; in China and Japan they did not decide how far.`,
      parts: [
        {
          heading: 'Macau under Ming officials',
          blocks: [
            { p: `Ming China had restricted private overseas trade for much of the dynasty and dealt with foreigners on its own terms. From <span class="num">1557</span>, Chinese provincial officials let Portuguese merchants settle permanently at <b>Macau</b>, a small peninsula on the south coast. It was not a conquest and not, in the Ming view, a transfer of land: Chinese officials kept authority over the port, and the Portuguese paid them a yearly ground rent. Historians date the formal arrangement variously from the 1550s to <span class="num">1573</span>, but on the central point they agree: Macau existed because China allowed it, on China's conditions.` },
            { p: `Why allow it at all? Because the trade was useful. Ming law officially barred Chinese merchants from trading directly with Japan, so the Portuguese carried Chinese silk to Japan and Japanese silver back to China, and Macau let Chinese officials keep that trade in one place they could watch.` }
          ]
        },
        {
          heading: 'Japan, 1635 to 1641',
          blocks: [
            { p: `Portuguese ships first reached Japan in the 1540s, and Jesuit missionaries followed. By 1600 they had made many Christian converts, and the Tokugawa shoguns, who had just unified Japan after a century of war, came to see Christianity as a loyalty outside their control. The shogunate banned Christianity in <span class="num">1614</span>. The Spanish were expelled in <span class="num">1624</span>; the English had already left.` },
            { p: `Between <span class="num">1633</span> and <span class="num">1639</span>, the shogun's senior councilors sent five sets of orders to their two magistrates at Nagasaki, the port where foreign ships traded. The <span class="num">1635</span> set has seventeen articles. The first reads: "Japanese ships are strictly forbidden to leave for foreign countries." The third: "If any Japanese returns from overseas after residing there, he must be put to death." Others order a search of every incoming ship for Christians, rewards for informers, and rules for buying and selling raw silk. In <span class="num">1637</span> and <span class="num">1638</span> a rebellion at Shimabara, near Nagasaki, drew in many Christian peasants, and in <span class="num">1639</span> the councilors banned Portuguese ships outright, because, the order says, the Portuguese "have secretly transported those who are going to propagate that religion."` },
            { p: `The Dutch stayed. They came to trade, not to spread Christianity, and from <span class="num">1641</span> they lived and traded only on <b>Dejima</b>, a small artificial island in Nagasaki harbor, under Japanese supervision. Chinese merchants kept trading in Nagasaki, and Japan kept dealing with Korea and the Ryukyu kingdom through other ports. Historians later named the orders the "closed country" edicts, but the documents themselves carry no such title, and Japan was not closed: it chose who could come, and on what terms.` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `The orders survive in the shogunate's records and are translated in David J. Lu, <em>Japan: A Documentary History</em> (1997). Their audience is the clue to reading them. They were working instructions to two officials, not announcements to foreigners, so they show what the government meant to enforce, not what it wanted the world to hear.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Asian states set the terms. <em>China and Japan were strong enough to decide where, how and with whom Europeans could trade, so the continuity is Asian state power and the change is only the newcomers it chose to admit: the Portuguese at Macau from 1557, the Dutch alone on Dejima from 1641.</em>`,
        limit: `Limiting European trade did not end foreign trade. Silk, silver and other goods kept moving through Nagasaki, Macau and Chinese ports, and the reasons were as much about control and Christianity as about trade.`,
        comparison: `Against <em>the Indian Ocean ports</em> in section 01: where Portugal faced divided coastal rulers, it built forts; where it faced unified, strong states, it was let in on their terms or shut out.`
      },
      terms: [
        ['Macau', 'The small port on China\'s south coast where Portuguese merchants settled from 1557, under Chinese officials and a yearly rent.'],
        ['Tokugawa shogunate', 'The military government that ruled Japan from 1603 and limited European trade and Christianity in the 1630s.'],
        ['Dejima', 'The small artificial island in Nagasaki harbor where the Dutch were confined from 1641.'],
        ['Restrictive trade policy', 'A government\'s limits on who may trade, where and in what, as Ming China and Tokugawa Japan set on Europeans.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'africa',
      num: '03',
      accent: 'iron',
      name: 'Kongo and Asante',
      navLabel: 'African states',
      dates: 'c. 1480 to 1750 &nbsp;·&nbsp; Kings, guns, and the trade',
      thesis: `The College Board's sentence is that maritime trade "fostered the growth of states in Africa, including the Asante and the Kingdom of the Kongo." Both grew stronger by using the trade, and both sold captives into it. Holding both halves together is the whole section.`,
      parts: [
        {
          heading: 'Kongo: a Christian king and the trade',
          blocks: [
            { p: `Kongo was the dominant power in west-central Africa when Portuguese ships reached the mouth of the Congo River in the early <span class="num">1480</span>s. Its king was baptized in <span class="num">1491</span>, and his son <b>Afonso I</b>, king from about <span class="num">1509</span> until the early 1540s, made Christianity the religion of the court. Afonso asked Portugal for priests and teachers, sent young Kongo nobles to study in Portugal, and fought his wars with Portuguese allies. Kongo's artists made Christianity their own, in brass crucifixes cast in their own style.` },
            { p: `The trade strengthened the king in a specific way: imports came through him. When Afonso controlled who traded and what they sold, foreign goods were his to give to loyal nobles, and nobles who owed him their goods owed him their loyalty. Traders who sold directly to his nobles cut into that hold.` }
          ]
        },
        {
          heading: 'What Afonso\'s letter does and does not say',
          blocks: [
            { p: `The same letter complains that traders "carry away our native-born countrymen and the children of our nobles and vassals as well as relatives of ours," and asks the king of Portugal to send "neither traders nor trading goods." The historian Linda Heywood adds what the letter leaves out. Kongo had slavery of its own, and most captives Kongo sold to the Portuguese in Afonso's reign were foreigners taken in Kongo's wars; Afonso ran a slave market in his capital. Kongo custom protected free-born Kongo people from sale abroad, and the people the letter says were carried off were free-born Kongo, seized by thieves and sold to Portuguese traders.` },
            { p: `Keep both facts in view when you read the letter yourself in Module 08. Later, Heywood argues, Kongo's civil wars of the 1600s broke down the protection of free-born Kongo people, and far more of them were sold abroad.` }
          ]
        },
        {
          heading: 'Asante: gold, guns, and Feyiase',
          blocks: [
            { p: `On the Gold Coast, where Elmina stood, several Akan states were joined under one ruler, the Asantehene, around <span class="num">1700</span>. Asante tradition credits Osei Tutu and the priest Okomfo Anokye with the union and with the Golden Stool that symbolized it; the sources disagree on Osei Tutu's dates, so this chapter gives none. In <span class="num">1701</span> Asante defeated Denkyira, the region's leading power, at the battle of Feyiase, a date recorded in Dutch archives.` },
            { p: `Asante's strength rested on gold, which it controlled, and on guns, which it bought from Dutch and English traders on the coast, paying in part with captives taken in its wars. Through the 1700s it expanded into the main power of the region. Like Kongo, it grew stronger through the trade and sold people into it.` }
          ]
        }
      ],
      useThis: {
        tool: `African states used the trade. <em>Kongo and Asante grew stronger because the trade brought weapons, allies and goods through their rulers' hands, so the change was African kings with new power, and the continuity was that they set rules for the traders who came to them.</em>`,
        limit: `The same trade that strengthened these states carried captives out of Africa, and in Kongo the civil wars of the 1600s turned the trade against the kingdom's own people.`,
        comparison: `Against <em>Ming China and Tokugawa Japan</em> in section 02: all four states set terms for European traders, but Kongo and Asante grew by joining the Atlantic trade, while China and Japan limited it.`
      },
      terms: [
        ['Kingdom of Kongo', 'The dominant state of west-central Africa in 1500, whose Christian kings traded with Portugal from the 1480s.'],
        ['Afonso I', 'King of Kongo from about 1509 to the early 1540s, a Christian who used the Portuguese connection to strengthen his rule.'],
        ['Asante', 'The Akan kingdom of the Gold Coast that rose around 1700 through gold and guns and became the region\'s main power.'],
        ['Feyiase, 1701', 'Asante\'s victory over Denkyira, which made it the leading power of the Gold Coast interior.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'labor',
      num: '04',
      accent: 'oxide',
      name: 'Work in the Colonial Americas',
      navLabel: 'Labor systems',
      dates: 'c. 1500 to 1750 &nbsp;·&nbsp; Mit’a, encomienda, hacienda, indenture, slavery',
      thesis: `The College Board's sentence is that colonial economies in the Americas "largely depended on agriculture, utilized existing labor systems, including the Incan mit’a, and introduced new labor systems." The colonies needed workers for farms and mines, and they got them by reusing an old duty and inventing new forms of coerced work.`,
      parts: [
        {
          heading: 'The mit’a: an old duty, a new master',
          blocks: [
            { p: `The Inca state had required each community to send people in turns to work for the state, building roads, farming state lands and serving in the army. That rotating duty was the <span class="kt">mit’a</span>. Between <span class="num">1572</span> and <span class="num">1575</span> the Spanish viceroy of Peru, Francisco de Toledo, reorganized it into a draft that required the communities of the highland districts to send one-seventh of their adult men each year to the silver mine at <b>Potosí</b>: more than 14,000 men by 1578.` },
            { p: `It is the clearest continuity-with-change case in the unit. The name and the idea of a rotating duty to the state continued. The master, the work and the danger changed: the men now served a colonial state in deep mines and mercury refineries, and many did not come home. What the silver of Potosí did to the world economy is Topic 4.5.` }
          ]
        },
        {
          heading: 'Encomienda: paying conquerors with other people\'s work',
          blocks: [
            { p: `The crown had not paid for the conquests. Expeditions were private ventures under royal license, and the men who survived expected reward. The <span class="kt">encomienda</span> was the reward: a grant to a Spaniard of the right to demand labor and tribute from a named Indigenous community, in exchange for a formal duty to protect them and have them taught Christianity. Legally it was not a grant of land and it did not make the people property; in practice, on communities collapsing from epidemic disease, the difference was thin.` },
            { p: `Challenge came early and from inside the system. The friar Antonio de Montesinos preached against it in <span class="num">1511</span>; Bartolomé de las Casas spent decades campaigning; the New Laws of <span class="num">1542</span> restricted it and provoked armed revolt in Peru. Indigenous communities fought it in Spanish courts too: in the 1550s the people of Tepetlaoztoc, in central Mexico, sent the crown a painted complaint, the Codex Kingsborough, recording what their encomenderos had taken and how they had been treated. Encomienda declined across the 1500s, as the population it drew on collapsed.` }
          ]
        },
        {
          heading: 'Haciendas, indentures, and chattel slavery',
          blocks: [
            { p: `What grew instead was a set of systems that overlapped rather than replacing each other in neat stages. On the <span class="kt">hacienda</span>, a large estate, Indigenous and mixed-race workers farmed and herded for the owner, often for wages and sometimes tied to the estate by debt; historians argue about how many were bound that way. In the English colonies of the 1600s, most European newcomers to the Chesapeake came as <span class="kt">indentured servants</span>, working four to seven years under contract to pay for their voyage. And on the sugar and tobacco plantations, enslaved Africans were held in <span class="kt">chattel slavery</span>: owned as property, for life, with their children born enslaved.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not treat these as the same thing with different names. Ask the same four questions of each: who did the work, for how long, whether they could leave, and who took what they produced. An indentured servant's term had an end date; an enslaved person's had none, unless an owner chose to free them, and their children were born enslaved. That difference is why chattel slavery is a change and not just more of the same.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Old systems reused, new ones invented. <em>For each labor system, ask the same four questions: who did the work, for how long, whether they could leave, and who took what they produced. The answers show which systems carried an older idea forward and which were new.</em>`,
        limit: `The systems overlapped in time and place, varied by region, and depended on Indigenous populations that disease and war were shrinking, which is part of why the plantations turned to enslaved Africans.`,
        comparison: `Against <em>the encomienda</em>: the mit’a drafted men for limited turns of service to the state, while encomienda gave one colonist a standing claim on a community's labor and tribute.`
      },
      terms: [
        ['Mit’a', 'The Inca rotating labor duty, reorganized by Viceroy Toledo in the 1570s into a draft for the silver mine at Potosí.'],
        ['Encomienda', 'A grant to a Spanish colonist of the right to the labor and tribute of a named Indigenous community.'],
        ['Hacienda', 'A large colonial estate whose workers were paid wages and were sometimes bound by debt.'],
        ['Indentured servitude', 'Work under contract for a fixed term, usually four to seven years, to pay for a voyage to the colonies.'],
        ['Chattel slavery', 'Slavery in which people are owned as property for life and their children are born enslaved.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'slavery',
      num: '05',
      accent: 'gold',
      name: 'Slavery, Old and New',
      navLabel: 'Slavery',
      dates: '1450 to 1750 &nbsp;·&nbsp; Households, the Sahara, the plantations',
      thesis: `The College Board pairs two sentences: enslavement in Africa "continued in its traditional forms," and the plantation economy "increased the demand for enslaved labor in the Americas, leading to significant demographic, social, and cultural changes." Slavery did not begin with the Atlantic trade. The plantations changed its size and its kind.`,
      parts: [
        {
          heading: 'The older forms that continued',
          blocks: [
            { p: `In many African societies, slavery was old and took forms unlike the plantations. Enslaved people, often captives from wars, were taken into <b>households</b>, where they worked, served or married, and over time they or their children could become part of the family. In Kongo, a king's letter of <span class="num">1550</span> speaks of a rival's relatives "even if they are slaves," and Heywood concludes that domestic slaves in elite households were counted as part of the extended family. That was not freedom: enslaved people could still be sold. But it was not slavery passed down forever.` },
            { p: `Captives were also carried out of Africa by older routes than the Atlantic: north across the <b>Sahara</b> to North Africa and the Mediterranean world, and east across the Red Sea and the <b>Indian Ocean</b> to Arabia, Persia and India. Those trades were centuries old before 1500 and went on through this whole period alongside the Atlantic trade.` }
          ]
        },
        {
          heading: 'What the plantations changed',
          blocks: [
            { p: `Sugar, and later tobacco, needed huge numbers of workers, and the plantations of Brazil and the Caribbean bought enslaved Africans to do the work. The estimates in the Trans-Atlantic Slave Trade Database show the change in one comparison: about 278,000 Africans were forced onto ships bound for the Americas in the whole 1500s, and more than 2.5 million in the fifty years from <span class="num">1701</span> to <span class="num">1750</span>.` },
            { p: `The CED names three kinds of change. <b>Demographic:</b> on Barbados enslaved Africans outnumbered Europeans by the late 1600s, and across the British, French and Dutch Caribbean colonies Africans and their descendants became most of the people. <b>Social:</b> plantation slavery was for life and inherited, and colonial law tied it to race; Virginia's law of <span class="num">1662</span> made the children of enslaved women enslaved. <b>Cultural:</b> African languages, beliefs and foods crossed with the people who carried them, and how they mixed with American and European cultures is Topic 4.5.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that slavery was invented after 1500, and do not write that African and plantation slavery were the same. The continuity is that slavery in its older forms went on in Africa; the change is the scale, the destination and the kind of slavery the plantations demanded: lifelong, inherited and tied to race.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Same word, different institution. <em>The continuity is slavery in Africa in its older forms, in households and through the Sahara and the Indian Ocean; the change is the plantation economy, which made the Atlantic trade carry about nine times as many people in the fifty years from 1701 to 1750 as in the whole 1500s, and made slavery in the Americas lifelong, inherited and tied to race.</em>`,
        limit: `The household and plantation pictures are general patterns; slavery varied across Africa's many societies, and some enslaved people in African households were treated harshly or sold on.`,
        comparison: `Against <em>the mit’a</em> in section 04: both were forced labor, but the mit’a drafted men for turns of service and sent them home, while plantation slavery held people, and their children, for life.`
      },
      terms: [
        ['Household slavery', 'Slavery in which enslaved people were taken into a household and could, over generations, become part of the family.'],
        ['Trans-Saharan slave trade', 'The older trade carrying captives north across the Sahara to North Africa and the Mediterranean.'],
        ['Plantation economy', 'An economy built on large farms growing one crop to sell, such as sugar, worked by coerced labor.'],
        ['Hereditary slavery', 'Slavery passed from enslaved mothers to their children, made law in Virginia in 1662.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Continuity and change',
    intro: `Each card is a full continuity-and-change explanation: the change, the continuity, the evidence and the reason. Together they answer all three learning objectives.`,
    pairs: [
      {
        category: 'State building',
        title: 'Europe held coasts; Asia held the terms',
        body: `Portugal built forts at Elmina, Goa, Malacca and Hormuz, and the Dutch took several of them in turn: a real change in who held power on the coasts of Africa and Asia. But the strongest Asian states set the terms. Ming officials let the Portuguese settle at Macau from 1557 and kept authority over the port, and Tokugawa Japan, after orders of 1635 and 1639 aimed above all at Christianity, allowed only the Dutch to trade, on Dejima, from 1641. The change was on the coasts; the continuity was Asian state power.`
      },
      {
        category: 'State building',
        title: 'African kings grew stronger through the trade',
        body: `Kongo under Afonso I and Asante around 1700 both grew stronger through maritime trade, because weapons, allies and imported goods came through their rulers. In 1526 Afonso protested to the king of Portugal that thieves were seizing free-born Kongo people and selling them to Portuguese traders; he himself sold foreign war captives. Asante bought guns on the Gold Coast and defeated Denkyira at Feyiase in 1701. Both states grew by joining the trade, and both sold captives into it.`
      },
      {
        category: 'Economic systems',
        title: 'The Indian Ocean was disrupted, not replaced',
        body: `The cartaz, a pass the Portuguese sold and enforced with warships, was a real change: a European navy now taxed Asian shipping. But Gujarati merchants kept shipping cloth, often under a pass, Swahili Arab and Javanese traders kept trading, and Oman drove the Portuguese from Muscat in 1650 and Mombasa in 1698. Much of the trade stayed trade between Asian ports, and Europeans often made their money by joining it. That is what the College Board means by "continued to flourish."`
      },
      {
        category: 'Labor systems',
        title: 'An old duty under a new master',
        body: `The Inca mit’a, a rotating labor duty to the state, continued in name and shape when Viceroy Toledo reorganized it in the 1570s, but it now sent thousands of Andean men each year to the silver mine at Potosí: continuity in the institution, change in its master and its work. Beside it the colonies introduced new systems: encomienda grants of Indigenous labor and tribute, hacienda wage and debt labor, indentured servitude for a fixed term, and chattel slavery for life.`
      },
      {
        category: 'Slavery',
        title: 'Same word, different institution',
        body: `Slavery in Africa continued in its older forms: enslaved people taken into households, whose children could become part of the family, and captives sent across the Sahara and the Indian Ocean. The plantation economy changed slavery in the Americas: about 278,000 Africans were shipped west in the 1500s and more than 2.5 million in 1701 to 1750, held for life, their children born enslaved, and bound by laws that tied slavery to race. The continuity is the institution's existence; the change is its scale and its kind.`
      }
    ]
  }
};
