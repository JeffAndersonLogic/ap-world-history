'use strict';

/**
 * Topic 4.6, Internal and External Challenges to State Power: the deep reading.
 *
 * Why this exists. The learning objective asks for the effects of the
 * development of state power, and the two Key Concepts name one of them:
 * resistance, from "an array of social, political, and economic groups," and
 * organized resistance by enslaved people in the Americas. The First & 10
 * tells that story case by case. What it has no room for is the mechanism
 * behind each case: what a centralizing crown took from judges and nobles,
 * what the 1649 Law Code took from Russian peasants, how a hill-fort kingdom
 * and a queen held off empires, how many Pueblo towns rose on one day, and
 * what made Palmares, the Jamaica Maroons and the Stono rebels organized.
 *
 * Rebuilt from the 4.6 story (docs/TOPIC-4-6-STORY-DRAFT.md) on 2026-10-16.
 * The old chapter, "The Cracks in the Map," gave a whole section to the Dutch
 * taking the Portuguese network and to privateering. That is European rivalry,
 * KC-4.3.III.ii, Topic 4.5's, and the Unit 4 contract forbids it as a 4.6
 * target. It also taught KC-4.3.III.iii through one case. Its strongest
 * material, on the Pueblo Revolt's causes and coordination and on Palmares as
 * a state rather than a hideout, is kept in sections 04 and 05, with its
 * figures narrowed to what the sources say.
 *
 * Three things carried deliberately:
 *
 *   1. The push before the pushback. Section 01 names the two pushes,
 *      centralization and expansion, because the suggested skill is
 *      contextualization: a revolt explained without the push behind it has no
 *      context.
 *   2. The array. Sections 02 and 03 put judges, nobles, peasants, Cossacks, a
 *      warrior kingdom and a queen beside the American cases, because the Key
 *      Concept's word is "array" and the story map requires an Afro-Eurasian
 *      case.
 *   3. What came next. Every section ends with what the resistance changed,
 *      because the objective asks for effects: crushed, bargained, worn down.
 */

module.exports = {
  topicKey: 't4-6',
  slug: 'topic-4-6-internal-external-challenges',
  sourceFile: 'deep-reading-topic-4-6-internal-external-challenges.html',
  lessonFile: 'lesson-4-6-internal-external-challenges.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 4.6: Push and Pushback',
  eyebrow: 'Topic 4.6 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Push and <em>Pushback</em>',
  deck: `Between 1450 and 1750, states pulled power into the hands of their rulers and pushed out to rule new lands and peoples. Every push cost somebody something, and people pushed back. This chapter explains what centralizing and expanding states took, who resisted inside France and Russia, how the Marathas and Njinga held off empires, how the Pueblo towns rose together in 1680, and what made the resistance of enslaved people in the Americas organized.`,
  meta: ['Five sections', 'The push, inside, the edges, the Americas, the enslaved', 'Read alongside the First & 10'],
  footerNote: 'Topic 4.6 &nbsp;·&nbsp; Push and Pushback &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The College Board asks one thing of this topic: explain the effects of the development of state power from 1450 to 1750. Section 01 explains the development: states centralized and expanded. Sections 02 to 04 explain one effect, resistance from many kinds of local groups. Section 05 explains organized resistance by enslaved people. Most sections end with what the resistance changed, because resistance had effects too.`,
    steps: [
      `<b>01 The push:</b> what centralizing and expanding states took, and from whom.`,
      `<b>02 Inside the state:</b> judges and nobles in France, peasants and Cossacks in Russia.`,
      `<b>03 At the edges, Asia and Africa:</b> the Marathas against the Mughals, Njinga against Portugal.`,
      `<b>04 At the edges, the Americas:</b> the Pueblo Revolt and Metacom's War.`,
      `<b>05 Enslaved people organize:</b> Palmares, the Jamaica Maroons, the Stono Rebellion.`,
      `<b>Then the closing section</b>, which gathers the evidence for each Key Concept.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'push',
      num: '01',
      accent: 'gold',
      name: 'The Push',
      navLabel: 'The push',
      dates: '1450 to 1750 &nbsp;·&nbsp; Centralization and expansion',
      thesis: `States between 1450 and 1750 grew stronger in two ways at once. They pulled power inward, into the hands of their rulers, and they pushed outward over lands and peoples that had never been theirs. Each push took something from someone, and that is the context for every revolt in this topic.`,
      parts: [
        {
          heading: 'Pulling power inward',
          blocks: [
            { p: `<span class="kt">Centralization</span> means a ruler gathering power that others used to share. Topic 3.2 showed the tools: officials and soldiers who owed everything to the ruler, such as the Ottoman devshirme; tax systems that answered to the center; and a court, like Louis XIV's at Versailles, where great nobles spent their time under the king's eye instead of building power on their own lands.` },
            { p: `Every one of those tools took something from someone. A king who wanted more taxes took money from towns, landowners and peasants. A king who wanted the final word took it from the judges, nobles and local assemblies who had shared it. A tsar who wanted his landholders to keep their workers took freedom of movement from the peasants. So the people who pushed back against centralization were usually the state's own subjects. These were internal challenges, from inside the state.` }
          ]
        },
        {
          heading: 'Pushing power outward',
          blocks: [
            { p: `<span class="kt">Expansion</span> means a state reaching over new lands and peoples. Topics 4.2 to 4.5 showed the maritime empires doing it: forts on the coasts of Africa and Asia, colonies in the Americas, tribute and forced labor, missionaries, and the plantation economy built on enslaved Africans. Land empires expanded too: the Mughal emperors pushed south into the Deccan, and Russia pushed east and south.` },
            { p: `Expansion took land, harvests, labor and faith from people who had never agreed to be ruled. So the people who pushed back against expansion were usually at the edges of a growing state: kingdoms it wanted to conquer, and peoples it had only recently claimed. These were external challenges, from outside the state that was pushing. (External here does not mean European states fighting each other over trade. That is Topic 4.5.)` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that people resisted simply "because they were oppressed." That is true of almost any revolt and explains none of them. Name the push (what the state wanted), the group it landed on, and what the push took from that group. That is the context, and it turns a complaint into an explanation.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `The push and the landing. <em>For any revolt, name what the state was pushing for (to centralize or to expand), and name the group the push landed on and what it took from them. Those two together are the revolt's context, and the beginning of its causes.</em>`,
        limit: `The two pushes often came together: an expanding empire needed money, so it taxed its own people harder at the same time.`,
        comparison: `Against <em>Unit 3</em>: there the question was how rulers built and held power. Here it is the other side of the same tools: who paid for them, and how they answered.`
      },
      terms: [
        ['Centralization', 'A ruler gathering into his own hands power that nobles, judges, towns or local leaders used to share.'],
        ['Expansion', 'A state reaching out to rule lands and peoples that were not yet its own.'],
        ['Internal challenge', 'Resistance to a state from its own subjects, such as nobles, judges or peasants.'],
        ['External challenge', 'Resistance to a state from peoples at its edges whom it was trying to conquer or rule.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'inside',
      num: '02',
      accent: 'iron',
      name: 'Inside the State',
      navLabel: 'Inside the state',
      dates: '1648 to 1671 &nbsp;·&nbsp; France and Russia',
      thesis: `The pushback against centralization came from the state's own people, and from every level: the judges of a royal court, the people of a capital city, great nobles, runaway peasants and frontier Cossacks.`,
      parts: [
        {
          heading: 'France: the Fronde, 1648 to 1653',
          blocks: [
            { p: `In <span class="num">1648</span> France had been at war with Spain for years, and war was eating most of the crown's money. Louis XIV was nine years old. His mother, Anne of Austria, ruled for him with her chief minister, Cardinal Mazarin, and they kept raising money the way the late king and Cardinal Richelieu had: with new taxes and loans against future taxes.` },
            { p: `The <span class="kt">Parlement of Paris</span> was the kingdom's highest court. Its judges had to register a royal law before it took effect, and they saw themselves as protectors of the people against a grasping crown. In <span class="num">1648</span> they refused the new taxes, including taxes aimed at themselves, and wrote demands to limit the regent's power over the kingdom's money. In August the government arrested a respected judge, Pierre Broussel. Paris answered overnight with some twelve hundred barricades in the streets, and the queen had to let him go. In January <span class="num">1649</span> the royal family fled Paris.` },
            { p: `Then the great nobles rose, led by the Prince of Condé, in what is called the Fronde of the princes. But the rebels wanted different things and quarreled with each other, and some took help from Spain, France's enemy. By late <span class="num">1652</span> the movement collapsed, and Louis XIV returned to Paris. Historians write that the Fronde marked his whole reign: as an adult he ruled in person and kept the great nobles where he could watch them.` }
          ]
        },
        {
          heading: 'Russia: the Law Code of 1649 and Razin',
          blocks: [
            { p: `In Russia, the tsar's <span class="kt">Law Code of 1649</span> finished turning peasants into <span class="kt">serfs</span>, people bound to their lord's land. Before it, a lord had only a limited number of years to reclaim a peasant who ran away; after it, a runaway could be returned no matter how long he had been gone. The tsar's landholding cavalry, who needed peasants to work their land, had demanded it.` },
            { p: `Many peasants ran anyway, south to the Don River, where the <span class="kt">Cossacks</span> lived: communities of free frontier fighters who chose their own leaders and lived beyond the tsar's direct rule. In <span class="num">1670</span> a Don Cossack named Stepan Razin, called Stenka, led an army up the Volga River. The towns of Saratov and Samara opened their gates, and Russian peasants and non-Russian peoples of the Volga rose by the tens of thousands. The rebels said they were loyal to the tsar and were fighting his great lords and officials.` },
            { p: `The tsar's regular army defeated them at Simbirsk. Don Cossack leaders loyal to the tsar captured Razin and handed him over, and he was executed in Moscow in <span class="num">1671</span>. Serfdom stayed, and grew harsher over the next century.` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `Much of what Western Europeans knew about Razin came from travelers, merchants and newspaper reports, and later accounts added invented details, such as the famous legend that he threw a Persian princess into the Volga. Historians rely on Russian government records and the letters of the rebels themselves. The Dutch print of Razin's capture in this lesson was made for a book published in Leiden about thirty years later by an artist who never went to Russia.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Internal pushback. <em>When a ruler centralizes, the people who lose (judges, nobles, towns, peasants) may resist. Name who lost what, how they resisted, and what the ruler did next.</em>`,
        limit: `Both revolts were crushed, so it is easy to call them failures. But they showed rulers what their power cost, and rulers changed how they ruled because of them.`,
        comparison: `The Fronde was led by judges and nobles; Razin's revolt by Cossacks and peasants. Different groups, different demands. What push from the crown sat behind both?`
      },
      terms: [
        ['Fronde', 'A series of revolts in France from 1648 to 1653 by judges, Parisians and great nobles against the crown.'],
        ['Parlement of Paris', 'France\'s highest royal court, whose judges registered the king\'s laws.'],
        ['Law Code of 1649', 'Russia\'s law code that completed binding peasants to the land as serfs.'],
        ['Serf', 'A peasant bound to a lord\'s land and not free to leave.'],
        ['Cossacks', 'Communities of free frontier fighters on the Don and other rivers, beyond the tsar\'s direct rule.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'edges-asia-africa',
      num: '03',
      accent: 'oxide',
      name: 'At the Edges: Asia and Africa',
      navLabel: 'Marathas and Njinga',
      dates: '1622 to 1707 &nbsp;·&nbsp; The Deccan and Ndongo',
      thesis: `At the edges of expanding empires, the people who pushed back were often rulers themselves. A warrior kingdom wore down the Mughal Empire, and an African queen used war and diplomacy to hold off Portugal for forty years.`,
      parts: [
        {
          heading: 'The Marathas and the Mughals',
          blocks: [
            { p: `In the western Deccan, the high plateau of central India, <span class="kt">Shivaji</span> built a Maratha kingdom from hill forts, beginning in the 1640s. His soldiers fought with speed and surprise: they raided, struck supply lines and slipped back to their forts instead of meeting a large army in open battle. In <span class="num">1674</span> he had himself crowned king at his fort of Raigad.` },
            { p: `The Mughal emperor <span class="kt">Aurangzeb</span> wanted the whole Deccan. In <span class="num">1681</span> he moved his court south. He conquered the two Deccan sultanates, Bijapur and Golconda, by <span class="num">1687</span>, and he captured and executed Shivaji's son and successor in <span class="num">1689</span>. But he could never finish the Marathas. His artillery could take a fort, and the Marathas would hold or retake others; his huge army could not pin down an enemy that would not stand and fight. He spent the rest of his life in the south and died there in <span class="num">1707</span>.` },
            { p: `After his death, Maratha power spread across much of India while the Mughal emperors in Delhi grew weaker. The Mughal decline had many causes, but the long war in the Deccan was one of them: it cost the empire money, soldiers and decades of its emperor's attention.` }
          ]
        },
        {
          heading: 'Njinga and Portugal',
          blocks: [
            { p: `In West Central Africa, the Portuguese colony at Luanda, founded in <span class="num">1576</span>, pushed inland into the kingdom of Ndongo. Its wars took captives, and Luanda became one of the busiest ports of the Atlantic slave trade.` },
            { p: `In <span class="num">1622</span> King Mbandi of Ndongo sent his sister <span class="kt">Njinga</span> to Luanda to negotiate peace with the Portuguese governor. She agreed to be baptized there, taking the Christian name Ana de Sousa. In <span class="num">1624</span> she became Ndongo's ruler. When Portuguese armies drove her out, she conquered the neighboring kingdom of Matamba in the 1630s and made it her base. When the Dutch captured Luanda in <span class="num">1641</span>, she joined forces with them; when the Portuguese took it back in <span class="num">1648</span>, she kept fighting. In the 1650s she made peace with Portugal, and she died in <span class="num">1663</span>, still ruling Matamba.` },
            { p: `She fought Portugal and bargained with it, as each moment called for. And she was no enemy of the slave trade itself: her wars took captives, and Matamba sold them. Like many rulers of her time, she resisted a state that was trying to rule her, not every injustice of her age.` }
          ]
        }
      ],
      useThis: {
        tool: `External pushback. <em>When a state expands, the rulers and peoples in its path may resist with whatever works: forts and raids, alliances with the expanding state's rivals, or a treaty. Name the push, the resisters, their methods, and the result.</em>`,
        limit: `Do not make the Marathas the only cause of the Mughal decline, or Njinga a hero against slavery. The evidence supports neither.`,
        comparison: `Both the Marathas and Njinga outlasted the push. The Marathas did it by wearing an empire down; Njinga did it by switching between war and diplomacy, and by finding an ally in Portugal's rival, the Dutch.`
      },
      terms: [
        ['Marathas', 'A people of the western Deccan whose kingdom, founded by Shivaji, fought the Mughal Empire.'],
        ['Shivaji', 'The founder of the Maratha kingdom, crowned in 1674.'],
        ['Aurangzeb', 'The Mughal emperor who spent his last twenty-six years fighting to conquer the Deccan.'],
        ['Njinga', 'The ruler of Ndongo and Matamba from 1624 to 1663, who fought and bargained with Portugal.'],
        ['Matamba', 'A kingdom in West Central Africa that Njinga conquered and ruled from.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'edges-americas',
      num: '04',
      accent: 'rust',
      name: 'At the Edges: The Americas',
      navLabel: 'Pueblo and Metacom',
      dates: '1675 to 1696 &nbsp;·&nbsp; New Mexico and New England',
      thesis: `In the same decade, two Indigenous peoples rose against two expanding colonies. One drove the colonists out for twelve years; the other was crushed. Both show how expansion pressed on local communities, and both changed what came after.`,
      parts: [
        {
          heading: 'Why the Pueblos rose',
          blocks: [
            { p: `Spain planted its colony of New Mexico among the <b>Pueblo peoples</b> of the Rio Grande valley in <span class="num">1598</span>. The Pueblos lived in separate towns of stone and adobe and spoke several different languages. Under the <span class="kt">encomienda</span>, they had to hand over part of their harvest to Spanish settlers each year, and they were forced to work for Spaniards without pay.` },
            { p: `The heaviest pressure fell on religion. Franciscan friars ran missions in the towns and tried to replace the Pueblo religion with Christianity. From the 1650s they banned the sacred kachina dances and burned masks and prayer sticks. In <span class="num">1675</span> the governor ordered kivas, the rooms where ceremonies were held, destroyed, and arrested forty-seven Pueblo religious leaders as sorcerers. Three were hanged, one killed himself, and the rest were whipped and jailed, until Pueblo men came to the capital in force and the governor let them go. This <b>religious suppression</b> came on top of drought and famine in the 1660s and 1670s, and raids by Apache neighbors that Spanish soldiers did not stop.` }
          ]
        },
        {
          heading: 'How many towns rose on one day',
          blocks: [
            { p: `One of the whipped men was <span class="kt">Popé</span> (today often spelled Po'pay), a religious leader from Ohkay Owingeh. He and other leaders planned a revolt that would strike every Spanish settlement at once, so the Spanish could not gather to fight back. Runners carried <b>knotted cords</b> from town to town. A town that agreed untied one knot, and the knots left counted the days until the rising.` },
            { p: `The Spanish caught two runners, so the towns struck early, on August 10, <span class="num">1680</span>. In the <span class="kt">Pueblo Revolt</span> they killed about 400 colonists, including 21 friars, surrounded Santa Fe and cut off its water. On August 21 the governor led the surviving colonists south to El Paso. The Pueblos burned churches, rebuilt kivas and returned to their own ceremonies, and for twelve years they ruled themselves.` },
            { p: `In <span class="num">1692</span> a new governor, Diego de Vargas, came back, and by <span class="num">1696</span> Spain had put down two more risings. But Spanish rule came back on new terms. The encomienda was not brought back, and the friars pressed far less hard against Pueblo religion than before. The revolt was defeated in the end, and it still changed how Spain ruled New Mexico.` },
            { note: {
              kind: 'howknow',
              label: 'How we know',
              html: `Almost every written account of the revolt was written by Spaniards. The fullest Pueblo voices come from Pueblo men captured in 1681 and questioned by Spanish officials, such as Pedro Naranjo of San Felipe Pueblo, whose answers were written down in Spanish. Read them knowing who asked the questions. Archaeologists have added another kind of evidence: the villages the Pueblos built and lived in after the revolt.`
            } }
          ]
        },
        {
          heading: 'Metacom\'s War',
          blocks: [
            { p: `In New England, English colonists had grown in number and were taking more and more land from the Wampanoag and their neighbors, and putting them under colonial courts. In <span class="num">1675</span> Plymouth Colony tried and executed three Wampanoag men for the killing of John Sassamon, a Christian Native man who had warned the English of trouble. Fighting broke out with the Wampanoag, led by <b>Metacom</b>, whom the English called King Philip, and other Native nations joined in, each for its own reasons.` },
            { p: `For a year, Native fighters destroyed more than a dozen English towns. But the colonists had far greater numbers, Native allies of their own, and help from the Mohawks to the west. Metacom was killed in August <span class="num">1676</span>, and many Native captives were sold into slavery in the Caribbean. The Native nations of southern New England lost their independence.` }
          ]
        }
      ],
      useThis: {
        tool: `Causes come in kinds. <em>Religious, economic and political causes worked together in New Mexico. A strong answer names more than one kind and explains how they combined to produce a revolt in 1680, not just "oppression."</em>`,
        limit: `Pueblo unity was an achievement of 1680, not a permanent fact: after the Spanish left, Popé's own orders were resisted, and some towns later sided with the returning Spanish.`,
        comparison: `The Pueblo Revolt and Metacom's War came in the same decade against expanding colonies, with opposite outcomes. Numbers, coordination and allies help explain the difference.`
      },
      terms: [
        ['Pueblo Revolt', 'The rising of the Pueblo towns of New Mexico on August 10, 1680, which drove the Spanish out for twelve years.'],
        ['Popé', 'A Pueblo religious leader from Ohkay Owingeh who helped organize the revolt of 1680; today often spelled Po\'pay.'],
        ['Encomienda', 'A Spanish system that made Indigenous communities give part of their harvest and labor to Spanish settlers.'],
        ['Kiva', 'A room, often underground, where Pueblo ceremonies were held.'],
        ['Metacom\'s War', 'The war of 1675 to 1676 between New England\'s colonists and the Wampanoag and other Native nations, also called King Philip\'s War.']
      ]
    },

    // ── 05 ────────────────────────────────────────────────────────────────────
    {
      id: 'enslaved',
      num: '05',
      accent: 'gold',
      name: 'Enslaved People Organize',
      navLabel: 'Organized resistance',
      dates: 'c. 1600 to 1740 &nbsp;·&nbsp; Brazil, Jamaica, South Carolina',
      thesis: `Enslaved people resisted every day, by working slowly, keeping their own beliefs, and running away. The College Board asks about something more: organized resistance, many people acting together in a way that challenged the authorities.`,
      parts: [
        {
          heading: 'Palmares: a state in the hills',
          blocks: [
            { p: `In the hills behind the sugar coast of northeastern Brazil, people who escaped slavery built <span class="kt">Palmares</span>. Communities like this are called <span class="kt">maroon communities</span>, and in Brazil a <b>quilombo</b> or mocambo. Palmares was not one hideout but a cluster of many fortified towns, joined for defense, with a capital, leaders, farms, and trade with nearby settlers, who sold them guns, powder, cloth and tools for food. First reported in the late 1500s, it lasted most of the 1600s and held thousands of people: people born in Africa, people born in Brazil, and some Indigenous people and Europeans hiding from the colonial authorities.` },
            { p: `Palmares beat back expedition after expedition, Portuguese and Dutch. In <span class="num">1678</span> its leader, Ganga Zumba, accepted a treaty with the colonial government: freedom for those born in Palmares, in exchange for returning other runaways. Many in Palmares rejected it, and the next leader, <b>Zumbi</b>, fought on. In <span class="num">1694</span> a large army of hired frontier fighters took the main town, and in <span class="num">1695</span> Zumbi was found and killed. November 20, the day of his death, is now Brazil's Day of Black Consciousness.` }
          ]
        },
        {
          heading: 'Jamaica: freedom by treaty',
          blocks: [
            { p: `After the English took Jamaica from Spain in <span class="num">1655</span>, people who escaped slavery built communities in the island's mountains, the Jamaica <b>Maroons</b>, and many more joined them over the following decades. For years the colony sent soldiers against them and could not win. In <span class="num">1739</span> it signed treaties instead. The Maroons led by Cudjoe were promised that they would be "for ever hereafter in a perfect state of freedom and liberty," with 1,500 acres of land for themselves and their descendants.` },
            { p: `The same treaty made them promise to send back any enslaved person who ran away to them, and to "take, kill, suppress, or destroy" other rebels on the island. Organized resistance forced a colony to recognize the Maroons' freedom, and the colony turned the Maroons into a guard for slavery.` }
          ]
        },
        {
          heading: 'Stono: a march for freedom',
          blocks: [
            { p: `In North America, on Sunday, September 9, <span class="num">1739</span>, about twenty enslaved people gathered by the Stono River near Charleston, South Carolina, broke into a store for guns and powder, and marched south. They were heading for Spanish Florida, where the Spanish king had promised freedom to people who escaped the English colonies and became Catholic. Others joined until there were as many as a hundred. Several of the rebels came from Kongo, where Catholicism was widespread.` },
            { p: `By that afternoon the colony's militia broke up the march, and over the following days it hunted down the survivors. Somewhere between twenty and forty white colonists died, along with dozens of rebels. The accounts disagree: one written that year counted about twenty white and forty Black dead. South Carolina answered the <span class="kt">Stono Rebellion</span> with the Negro Act of <span class="num">1740</span>, which tightened control over every enslaved person in the colony: it made freeing an enslaved person depend on a special act of the assembly and put every militiaman on patrol duty.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that maroons were "just runaways hiding in the woods." Palmares had towns, leaders, farms, trade and an army, and it made a treaty. The Jamaica Maroons forced a colony to sign one.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Organized resistance. <em>Look for many people, leaders, a plan, a place, and a challenge to the authorities themselves. Then look at how the authorities answered: with destruction, a treaty, or a harsher law.</em>`,
        limit: `Organized resistance by enslaved people did not end slavery in this period. Its effects were freedom for some communities and, often, tighter control over everyone else.`,
        comparison: `Palmares and the Jamaica Maroons built free communities in hard country and lasted for decades; the Stono rebels marched across open country, and the militia broke their march the same afternoon. Why might the authorities have answered them so differently?`
      },
      terms: [
        ['Organized resistance', 'Many people acting together, with leaders and a plan, in a way that challenged the authorities.'],
        ['Maroon community', 'A community built by people who escaped slavery, usually in hard-to-reach country.'],
        ['Quilombo', 'The Brazilian word for a maroon community, such as Palmares.'],
        ['Palmares', 'A cluster of maroon towns in northeastern Brazil that lasted most of the 1600s.'],
        ['Stono Rebellion', 'A revolt of enslaved people in South Carolina in 1739, who marched toward Spanish Florida.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Push and pushback',
    intro: `Each card gathers the evidence for one part of the topic. Running a case through the chain (the push, the group it landed on, the pushback, what came next) is your job; the checkpoints ask you to.`,
    pairs: [
      {
        category: 'Inside the state',
        title: 'Judges, nobles, peasants and Cossacks',
        body: `In France, the crown's war taxes led the Parlement of Paris to refuse them in 1648; Paris built barricades, nobles rose, and the Fronde collapsed by 1653. In Russia, the Law Code of 1649 bound peasants to the land; runaways joined the Cossacks, and Stenka Razin's revolt of 1670 to 1671 was crushed.`
      },
      {
        category: 'At the edges',
        title: 'A warrior kingdom and a queen',
        body: `Shivaji, crowned in 1674, built a Maratha kingdom of hill forts; Aurangzeb came south in 1681 and died in the Deccan in 1707 without defeating it. Njinga negotiated in Luanda in 1622, ruled from 1624, conquered Matamba, allied with the Dutch after 1641, made peace in the 1650s and died in 1663.`
      },
      {
        category: 'At the edges',
        title: 'Two revolts in one decade',
        body: `Spanish tribute, forced labor and religious suppression, with drought and raids, led the Pueblo towns to rise on August 10, 1680, coordinated by knotted cords; Spain returned in the 1690s without the encomienda. In New England, Metacom's War of 1675 to 1676 destroyed more than a dozen English towns and was crushed.`
      },
      {
        category: 'Enslaved people',
        title: 'Organized resistance in the Americas',
        body: `Palmares lasted most of the 1600s, rejected a treaty in 1678, and fell in 1694 and 1695. The Jamaica Maroons won freedom and land by treaty in 1739, and promised to return runaways. The Stono rebels marched toward Spanish Florida in 1739 and were crushed; South Carolina passed the Negro Act of 1740.`
      },
      {
        category: 'What came next',
        title: 'Crushed, bargained, worn down',
        body: `Some resistance was crushed and the state came out stronger: the Fronde, Razin, Metacom's War, Stono. Some forced a bargain: Njinga's peace, the Jamaica treaties, New Mexico after 1692. Some wore an empire down: the Marathas.`
      }
    ]
  }
};
