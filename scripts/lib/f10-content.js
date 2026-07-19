'use strict';

/**
 * Authored, gold-standard "First & 10" reading content, keyed by topic id.
 *
 * Each entry is the rich `f10` object consumed by renderFirst10Page (see
 * scripts/lib/first10-page.js): { deck, skillTags, support, vocab, sections,
 * takeaway, questions }. Section paragraphs, callout html, support cards, and
 * the takeaway are trusted, author-controlled HTML (they may use <span class="kt">,
 * <strong>, and <em>). When a topic has no entry here, the build scripts fall
 * back to their inline `topic.f10` (if any) and then to the generic template.
 */

module.exports = {
  "6.2": {
    "deck": "How states between 1750 and 1900 turned influence into rule, replacing chartered companies with direct control, carving up Africa through warfare and diplomacy, planting settler colonies, and expanding across neighboring lands, and why the same expansion took such different forms.",
    "skillTags": [
      "Comparison",
      "Causation"
    ],
    "support": {
      "beforeYouRead": "As you read, track two things at once. (1) The different <strong>methods</strong> states used to expand, chartered companies, treaties, warfare, settlement, and administrative takeover. (2) The different <strong>geographies</strong> those methods produced, overseas colonies in Asia and Africa versus contiguous expansion across neighboring land. For every case, ask which combination of force, migration, law, and diplomacy shifted sovereignty, and from whom.",
      "readingTarget": "By the end you should be able to compare the processes by which state power shifted around the world from 1750 to 1900; use specific evidence, the British Raj, the Dutch East Indies, King Leopold's Congo, British and French West Africa, and the continental expansion of the United States, Russia, and Japan, to support a claim; and connect these developments to the GOV thematic focus on how states form, expand, and maintain power."
    },
    "vocab": [
      "British East India Company",
      "Sepoy Rebellion",
      "British Raj",
      "Dutch East India Company",
      "Spanish-American War",
      "Berlin Conference",
      "King Leopold II",
      "Congo Free State",
      "Maxim Gun",
      "Settler Colony",
      "Manifest Destiny",
      "Treaty of Guadalupe Hidalgo",
      "Turkestan",
      "Meiji Restoration"
    ],
    "sections": [
      {
        "label": "Comparison, KC-5.2.I.A / KC-5.2.I.B",
        "heading": "From Company to Crown: The Turn to Direct Rule",
        "paragraphs": [
          "A map can show where an empire's borders fell in 1900, but it cannot show the process that produced them. Between 1750 and 1900, expansion often began not with a government at all but with a <em>chartered company</em>, a private corporation granted a trade monopoly and quasi-governmental powers by its home state. These companies raised armies, signed treaties, minted coins, and collected taxes across vast territories, blurring the line between business and state. The CED's central claim for this era is that <strong>states strengthened existing colonies and established direct control over territories previously held by non-state entities.</strong> The great shift of the nineteenth century came when governments decided that commercial influence exercised through such intermediaries was no longer enough, that they wanted formal, unambiguous sovereignty, administered directly from the metropole and defended by the national army.",
          "The clearest example is India. For a century the <span class=\"kt\">British East India Company</span> governed millions of South Asians, fielding a private army larger than most European states could muster and ruling through Indian soldiers, or sepoys, in its pay. That arrangement collapsed in 1857, when sepoys and civilians rose in the <span class=\"kt\">Sepoy Rebellion</span>, also called the Indian Rebellion or the Great Uprising, a revolt sparked by grievances over rifle cartridges, taxation, and the erosion of local rulers' authority. The uprising was crushed after brutal fighting, but it convinced London that a profit-driven company could not be trusted to rule a subcontinent. Through the Government of India Act of 1858, the Crown dissolved the Company's authority and imposed the <span class=\"kt\">British Raj</span>: direct rule administered by a viceroy answering to Parliament. A commercial monopoly had become a formal colony of the British state.",
          "The same pattern repeated elsewhere. The <span class=\"kt\">Dutch East India Company</span>, once the wealthiest corporation on earth, sank under debt and corruption and was dissolved in 1799; the Dutch state absorbed its holdings and, over the following decades, built them into the tightly governed Dutch East Indies, today's Indonesia, extracting wealth through a forced-cultivation system. In Southeast Asia, France converted decades of missionary and merchant activity into the colony of French Indochina, ruling Vietnam, Cambodia, and Laos directly from a colonial bureaucracy. In each case a non-state or semi-private entity gave way to a national government that wanted <em>sovereignty on paper</em>, not merely commercial dominance. Direct rule promised order, reliable tax revenue, and national prestige that overstretched companies could no longer guarantee.",
          "At the same time, a widening cast of powers <strong>acquired territories in Asia and the Pacific while older Spanish and Portuguese influence declined.</strong> In 1898 the United States defeated Spain in the <span class=\"kt\">Spanish-American War</span> and seized the Philippines, Guam, and Puerto Rico, announcing itself as a Pacific empire and stripping Spain of its last major colonies; that same year Washington annexed the independent kingdom of Hawaii. Newly industrialized Japan took Taiwan from a weakened China in 1895 under the Treaty of Shimonoseki, its first overseas colony. The Iberian empires that had opened the age of overseas colonization three centuries earlier were now the ones being pushed aside, their claims absorbed by younger, hungrier states eager to prove their standing among the great powers."
        ],
        "callout": {
          "label": "AP Skill, Comparison",
          "html": "The CED says states <strong>\"established direct control over territories previously held by non-state entities.\"</strong> On the exam, the phrase <em>non-state entity</em> almost always points to a chartered company such as the British or Dutch East India Company. A strong comparison names the mechanism of transfer, a rebellion in India, bankruptcy in the Dutch case, rather than simply asserting that rule \"became direct.\" Explain how sovereignty moved, and to whom."
        }
      },
      {
        "label": "Causation, KC-5.2.I.C / KC-5.2.I.D",
        "heading": "Carving the Continent: The Scramble for Africa",
        "paragraphs": [
          "Nowhere was expansion faster or more deliberate than in Africa. In 1870 Europeans controlled little more than coastal footholds and trading posts; by 1900 nearly the entire continent had been partitioned among a handful of European powers. The CED states that <strong>European states used warfare and diplomacy to establish empires in Africa</strong>, and both tools were on display at the <span class=\"kt\">Berlin Conference</span> of 1884–1885, convened by Otto von Bismarck, where European diplomats drew borders across a continent most of them had never seen and no African ruler was invited to attend. The conference endorsed the principle of \"effective occupation\": a claim was valid only if backed by real administrative and military presence. Diplomacy set the rules of the game; conquest supplied the occupation those rules demanded.",
          "The Congo shows how naked the process could be. <span class=\"kt\">King Leopold II</span> of Belgium claimed a personal domain roughly the size of Western Europe not through his government but as a private venture, cloaked in the language of humanitarianism, free trade, and the suppression of slavery. His <span class=\"kt\">Congo Free State</span> became a regime of forced rubber collection so brutal, hostage-taking, severed hands, and the deaths of millions, that a global campaign led by reformers and journalists forced the Belgian parliament to annex the territory in 1908, converting Leopold's personal fiefdom into a formal state colony. The Congo is the era in miniature: <em>diplomacy created the claim, violence enforced it, and a legal transfer of sovereignty did not, by itself, end the coercion on the ground.</em>",
          "In West Africa, warfare did the primary work. France pushed inland from the Senegal coast, subduing the Tukulor empire and Samori Ture's Wassoulou state after years of resistance, and welding its conquests into the sprawling federation of French West Africa. Britain fought a series of wars against the Asante kingdom in present-day Ghana and imposed control over Nigeria through a mix of treaties and force. European technological advantages, quinine against malaria, repeating rifles, and the <span class=\"kt\">Maxim gun</span>, the first true machine gun, made these campaigns lopsided. At the Battle of Omdurman in 1898, British forces killed thousands of Sudanese Mahdist fighters while suffering only a few hundred casualties of their own. Superior firepower turned diplomacy's paper claims into administrative reality on the ground.",
          "Not every colony was governed at arm's length. In some regions Europeans planted <span class=\"kt\">settler colonies</span>, territories where large numbers of migrants from the metropole came to live permanently, seizing land and displacing indigenous populations rather than merely governing them. France settled Algeria with hundreds of thousands of European colonists; British and Dutch-descended settlers competed for South Africa's mineral wealth and farmland; newcomers claimed the highlands of Kenya and the farmland of Southern Rhodesia. Settler colonies produced the sharpest conflicts over land and the most durable racial hierarchies, because the migrants intended not to administer a distant possession but to <em>make it their own home.</em> This distinction, administrative rule versus permanent settlement, is essential when comparing empires, and it helps explain why some colonies decolonized far more violently than others."
        ],
        "callout": {
          "label": "AP Skill, Causation",
          "html": "The CED pairs <strong>\"warfare and diplomacy\"</strong> as the twin methods of empire in Africa. A top answer treats them as linked causes, not a list: the Berlin Conference (diplomacy) set rules requiring \"effective occupation,\" which drove the wars of conquest (warfare) that followed. Explain the causal link between the two, how the diplomatic framework generated the military scramble, rather than describing each in isolation."
        }
      },
      {
        "label": "Comparison, KC-5.2.II.B",
        "heading": "Growing by Land: The Continental Empires of the US, Russia, and Japan",
        "paragraphs": [
          "Empire did not always mean crossing an ocean. The CED notes that <strong>the United States, Russia, and Japan expanded into neighboring territories</strong>, building contiguous land empires by absorbing the regions on their own borders. This expansion looked less like the sudden scramble for Africa and more like a slow tide, advancing overland through settlement, purchase, treaty, and war. Because the new lands touched the existing state, contemporaries often described the growth as \"natural\" or domestic rather than imperial. Yet the effect on the peoples already living there, dispossession, forced assimilation, and the loss of self-rule, was much the same as in any overseas colony. Setting overseas colonization beside this overland growth is one of the sharpest analytical moves this topic invites.",
          "The United States doubled and redoubled its territory across the nineteenth century, driven by the ideology of <span class=\"kt\">Manifest Destiny</span>, the belief that the nation was fated, even divinely appointed, to span the continent from the Atlantic to the Pacific. The 1803 Louisiana Purchase bought out a French claim to the interior; the 1846–1848 war with Mexico ended in the <span class=\"kt\">Treaty of Guadalupe Hidalgo</span> and the seizure of California and the Southwest. Behind these acquisitions came transcontinental railroads, waves of homesteaders, and the systematic removal of Native American nations onto reservations through treaties routinely broken and wars repeatedly waged. What looked on a map like natural growth was in fact the conquest and displacement of dozens of sovereign indigenous peoples who had governed the land for centuries.",
          "Russia expanded across two frontiers at once in the same era. To the east it consolidated its long push through Siberia to the Pacific coast; to the south it conquered the Muslim khanates of Central Asia, capturing Tashkent and Samarkand and absorbing the region Russians called <span class=\"kt\">Turkestan</span>, while pressing into the Caucasus against Chechen and other resistance. Because this growth was overland and contiguous, it produced a single sprawling land empire rather than scattered overseas colonies, but it rested on the same foundation of military conquest and settler migration. Russian peasants, cossacks, and administrators followed the army into newly annexed lands, imposing direct imperial control over Muslim and nomadic peoples who had long governed themselves.",
          "Japan is the striking case, because it expanded as an <em>Asian</em> power adopting European methods. After the <span class=\"kt\">Meiji Restoration</span> rebuilt the state along industrial lines, Japan absorbed its own borderlands, colonizing the northern island of Hokkaido and displacing the indigenous Ainu, and annexing the Ryukyu Islands. Victory in the 1894–1895 war with China brought Taiwan and growing dominance over Korea, which Japan would formally annex in 1910. Taken together, the American, Russian, and Japanese cases prove the topic's core lesson: <em>state power shifted through many different processes</em>, company to Crown, warfare and diplomacy, settlement, and contiguous conquest, but everywhere the result was centralized states expanding over lands and peoples that had once ruled themselves. That is the GOV theme in motion."
        ],
        "callout": {
          "label": "AP Skill, Comparison",
          "html": "The learning objective asks you to <strong>compare processes by which state power shifted</strong> across the world. The best comparison sets continental expansion beside overseas empire: the United States, Russia, and Japan grew overland by settlement and annexation, while Britain and France built scattered colonies across the seas. Argue both the similarity, sovereignty stripped from indigenous peoples, and the difference in method. Naming that shared outcome is what turns a description into a comparison."
        }
      }
    ],
    "takeaway": "Topic 6.2 is one comparison in three acts. First, influence became rule: chartered companies like the British and Dutch East India Companies gave way to direct state control, the British Raj, the Dutch East Indies, while the United States and Japan seized Asian and Pacific lands as Iberian power faded. Second, Europeans carved up Africa, using the diplomacy of the Berlin Conference and the firepower of the Maxim gun, and planting settler colonies from Algeria to South Africa. Third, the United States, Russia, and Japan expanded overland into neighboring territories. Different processes, one outcome: centralized states swallowing self-governing peoples. That is Governance from 1750 to 1900.",
    "questions": [
      {
        "skill": "Evidence Usage",
        "text": "Choose ONE case in which a state took direct control over territory previously governed by a chartered company or other non-state entity, such as British India or the Dutch East Indies. Describe the specific process of transfer, and explain what your example reveals about why governments came to prefer direct rule over company rule."
      },
      {
        "skill": "Causation",
        "text": "Explain how warfare and diplomacy worked together to produce European empires in Africa between 1750 and 1900. Why did the diplomatic agreements of the Berlin Conference help cause the military conquests that followed?"
      },
      {
        "skill": "Argumentation",
        "text": "Make a defensible claim comparing continental expansion (the United States, Russia, or Japan) with overseas colonization (in Africa, Asia, or the Pacific). Identify one important similarity AND one important difference, then explain which mattered more for the peoples whose sovereignty was lost."
      }
    ]
  },
  "6.3": {
    "deck": "Across Asia and Africa, peoples facing imperial conquest chose to rebel, to build new states, or to trust prophecy, and those choices, not European guns alone, shaped the political map of the nineteenth century.",
    "skillTags": [
      "Causation",
      "Comparison",
      "Continuity and Change"
    ],
    "support": {
      "beforeYouRead": "As you read, sort every response into one of three buckets and ask what each reveals. (1) <strong>Direct resistance and rebellion</strong>, organized states, armies, and soldiers who fought conquest outright. (2) <strong>New states on the periphery</strong>, leaders who built or rebuilt political power in the path of empire. (3) <strong>Religious and millenarian movements</strong>, communities who answered colonial pressure with prophecy and faith. For every case, ask why the response took the form it did, and whether it strengthened or weakened the people who chose it.",
      "readingTarget": "By the end you should be able to explain how and why internal and external factors influenced state building from 1750 to 1900; use specific evidence, the Indian Rebellion of 1857, Yaa Asantewaa, Samory Touré, the Mahdist State, and the Xhosa Cattle-Killing, to support a claim; and connect these responses to the GOV thematic focus on how societies organize, contest, and defend political authority."
    },
    "vocab": [
      "Indian Rebellion of 1857",
      "Sepoys",
      "Doctrine of Lapse",
      "Bahadur Shah II",
      "British Raj",
      "Asante Empire",
      "Golden Stool",
      "Yaa Asantewaa",
      "Samory Touré",
      "Wassoulou Empire",
      "Muhammad Ahmad",
      "Mahdist State",
      "Xhosa Cattle-Killing",
      "Nongqawuse"
    ],
    "sections": [
      {
        "label": "Causation, KC-5.3.III.D",
        "heading": "The Cartridge and the Council: Fighting Empire Head-On",
        "paragraphs": [
          "Imperial expansion never crossed empty land. It pushed into places already governed by kings, councils, landholders, priests, and standing armies, people who had to decide, under intense pressure, whether to fight, bargain, or bend. The most dramatic answer was <strong>direct armed resistance</strong>, and no episode showed its scale better than the <span class=\"kt\">Indian Rebellion of 1857</span>. The uprising began among the <span class=\"kt\">sepoys</span>, Indian soldiers in the army of the British East India Company, who mutinied at Meerut in May 1857. The immediate spark was a rumor that the cartridges for their new Enfield rifles were greased with cow and pig fat, an insult to Hindu and Muslim soldiers alike who had to bite the cartridges open. But the grievance ran far deeper than a rifle.",
          "Beneath the cartridge lay years of resentment: aggressive British annexations under the <span class=\"kt\">Doctrine of Lapse</span>, heavy taxation, and open contempt for Indian custom and religion. As the revolt spread across northern and central India, soldiers, dispossessed princes, and peasants rallied around the aging Mughal emperor <span class=\"kt\">Bahadur Shah II</span> in Delhi, while leaders such as Rani Lakshmibai of Jhansi and Tantia Tope carried the fight into the countryside. Yet the rebellion produced <em>no single unified program</em>, Hindus and Muslims, rulers and farmers, each fought for a different vision of what should replace Company rule. Britain crushed the revolt by 1858 and exiled Bahadur Shah to Rangoon. The result was a stronger empire, not a weaker one: the Crown abolished Company rule and imposed direct governance, launching the <span class=\"kt\">British Raj</span>.",
          "West Africa produced a different kind of direct resistance, one that fused politics with the sacred. In the <span class=\"kt\">Asante Empire</span> of the Gold Coast (modern Ghana), the <span class=\"kt\">Golden Stool</span> was no ordinary throne: according to tradition it had descended from the sky through the priest Okomfo Anokye, and the Asante believed it held the very soul and unity of the nation. So when the British governor Frederick Hodgson demanded in 1900 that he be allowed to sit upon it, after Britain had already exiled the Asantehene, Prempeh I, to the Seychelles in 1896, he struck at the sacred heart of Asante identity. The Queen Mother of Ejisu, <span class=\"kt\">Yaa Asantewaa</span>, rallied a war council that had wavered, shaming the men into action and leading an armed uprising that became the War of the Golden Stool, the last of the Anglo-Asante wars.",
          "The Asante fought hard but faced overwhelming firepower; Britain defeated the rising and exiled Yaa Asantewaa herself to the Seychelles, annexing Asante into its Gold Coast colony. Still, the resistance carried a lasting meaning: the British never captured the Golden Stool, which the Asante hid away, preserving the symbol even as they lost the war. Read side by side, 1857 and 1900 reveal a pattern. Direct resistance rarely defeated industrial armies, yet it was never merely futile, it defended <em>legitimacy, faith, and identity</em>, and it forced empires to expose the violence beneath their claim to civilize. The historian's question is not only whether resistance won, but what it protected and what it laid bare."
        ],
        "callout": {
          "label": "AP Skill, Causation",
          "html": "The CED explains that <strong>discontent with imperial rule led to rebellions</strong> and that <strong>nationalism and challenges to imperial authority contributed to anticolonial movements</strong>. On the exam, separate the <em>trigger</em> from the <em>underlying cause</em>: the greased cartridges sparked 1857, but annexation, taxation, and religious insult were the deeper fuel. Naming both, and showing how they combined, earns the causation point, stating only the spark does not."
        }
      },
      {
        "label": "Continuity and Change, KC-5.2.II.C",
        "heading": "Building States in Empire's Path",
        "paragraphs": [
          "Resistance did not always mean defending an old throne. As the CED notes, <strong>anti-imperial resistance took direct and indirect forms and sometimes produced new states on imperial peripheries</strong>. In the spaces between expanding empires, ambitious leaders assembled fresh political orders, states born precisely because empire was closing in. These new states borrowed selectively from their rivals, adopting modern weapons, centralized armies, and religious authority to hold territory that European powers coveted. Building a state in the path of conquest was itself a form of resistance, and West Africa offered the era's clearest example in the career of a single Mandinka commander who turned military talent into a kingdom.",
          "That commander was <span class=\"kt\">Samory Touré</span>, who from the 1870s carved out the <span class=\"kt\">Wassoulou Empire</span> across the savanna of what is now Guinea, Mali, and Côte d'Ivoire. A Muslim ruler and gifted organizer, Samory built a disciplined, well-supplied army and equipped it with modern firearms, some purchased, others repaired and even manufactured by his own blacksmiths, reducing his dependence on European suppliers. He used Islam to unify a diverse realm and to legitimize his authority, presenting his state as both a political and a religious project, and he built roads and a chain of fortified towns to knit his territory together. His empire was not a relic of the past resisting the future; it was a <em>new</em> creation, assembled in a single generation and deliberately engineered to survive in a world of imperial pressure.",
          "Samory resisted French expansion for nearly two decades, longer than almost any other West African leader. He fought a mobile war, trading space for time, and when the French pressed him he relocated his entire state eastward and scorched the land behind him to deny his enemies supplies. In the end, superior French numbers and logistics prevailed: Samory was captured in 1898 and exiled to Gabon, where he died in 1900. His defeat did not erase the significance of what he had accomplished. He proved that Africans could construct modern, centralized states capable of confronting Europe for years, an <em>internal factor</em> in state building that the AP framework asks you to weigh against the external force of conquest.",
          "Northeast Africa produced a second new state of remarkable strength. In the Sudan, resentment of oppressive Turco-Egyptian rule created an opening that a religious leader named <span class=\"kt\">Muhammad Ahmad</span> filled when he declared himself the <span class=\"kt\">Mahdi</span>, the divinely guided redeemer of Islam, in 1881. His followers overwhelmed Egyptian garrisons and, in 1885, stormed Khartoum, killing the British general Charles Gordon. Out of that victory rose the <span class=\"kt\">Mahdist State</span>, an independent Islamic government that ruled much of the Sudan for more than a decade. Like Samory's empire, it was a state <em>created</em> by resistance on empire's edge. But it was also something more, a movement powered by prophecy, and that religious current runs straight into the final, and most desperate, category of response."
        ],
        "callout": {
          "label": "AP Skill, Continuity and Change",
          "html": "The CED stresses that resistance <strong>sometimes produced new states on imperial peripheries</strong>. A strong response treats these states as evidence of <em>continuity and change at once</em>: leaders continued older traditions of Islamic authority and kingship, yet changed them by adopting modern firearms, centralized armies, and defined borders. Argue that these were innovations, not mere survivals, the exam rewards showing precisely what was new about them."
        }
      },
      {
        "label": "Argumentation, KC-5.3.III.E",
        "heading": "Prophecy Against Empire: Faith That Built and Faith That Broke",
        "paragraphs": [
          "The CED observes that <strong>discontent with imperial rule led to rebellions, some influenced by religious ideas</strong>. Faith did more than comfort communities under pressure; it organized them, named their enemies, and promised that history was on their side. The Mahdist movement is the clearest case. By claiming the title of <span class=\"kt\">Mahdi</span>, Muhammad Ahmad drew on a deep Islamic expectation of a redeemer who would restore justice at the end of days, transforming ordinary political grievance into holy struggle. That vision mobilized tens of thousands and, even after Muhammad Ahmad died in 1885 and his lieutenant the Khalifa Abdallahi took command, it sustained the Mahdist State against Egyptian and British power for more than a decade, until an Anglo-Egyptian army under Kitchener destroyed it at the Battle of Omdurman in 1898, where Maxim machine guns and artillery cut down the Mahdist ranks in a matter of hours.",
          "Where the Mahdi's prophecy built a state, another prophecy consumed a people. In the eastern Cape of southern Africa, the Xhosa faced relentless British encroachment, steady land loss, and a cattle disease that was ravaging their herds. In 1856 a young prophetess named <span class=\"kt\">Nongqawuse</span> reported a vision: if the Xhosa slaughtered their cattle and destroyed their crops, the ancestors would rise, sweep the British into the sea, and return the dead alongside vast new herds. This was millenarianism in its purest form, a promise that a total act of faith would reverse conquest and renew the world. Many Xhosa believed, and the <span class=\"kt\">Xhosa Cattle-Killing</span> began.",
          "The result was catastrophe. Between 1856 and 1857 the Xhosa killed hundreds of thousands of cattle and left their fields unplanted, and when the appointed day came, no ancestors rose and no new herds appeared. Famine followed on a horrifying scale: by most estimates some forty thousand Xhosa starved to death, the population of the region collapsed, and tens of thousands more, desperate for food, abandoned their land to seek work inside the very colony they had hoped to destroy. A movement meant to expel the British instead shattered Xhosa independence and threw open their territory to colonial control, the exact outcome the prophecy had promised to prevent. Religious hope, in this case, did not merely fail; it <em>accelerated</em> the conquest it had been summoned to resist.",
          "Placed together, these movements refuse a simple story. Religion could build a durable state, as it did for the Mahdi, or hollow out a society from within, as it did for the Xhosa; it could unify resistance or splinter it. What they share is the deeper truth of this topic: the political map of 1900 was shaped not only by European weapons but by the <em>choices</em> of the peoples who faced them, to rebel, to build, or to believe. Those choices are exactly what the <strong>Governance</strong> theme asks you to analyze: how societies organize authority, contest it, and defend it under pressure. Empire was powerful, but it was never the only author of the story."
        ],
        "callout": {
          "label": "AP Skill, Argumentation",
          "html": "The learning objective asks you to explain <strong>how and why internal and external factors influenced state building</strong>. Religious movements are ideal for a complex argument because they cut both ways: the same force forged the Mahdist State and ruined the Xhosa. A top essay does not treat all resistance as alike, it uses a case like the Cattle-Killing to <em>qualify</em> the claim that resistance strengthened indigenous societies, proving you can weigh evidence rather than merely list it."
        }
      }
    ],
    "takeaway": "Topic 6.3 is one argument in three acts. First, peoples fought empire head-on, the sepoys of 1857 and Yaa Asantewaa's Asante defended faith, throne, and identity even against hopeless odds. Second, leaders built new states in empire's path, Samory Touré's Wassoulou Empire and the Mahdist State proved that Africans could create modern, centralized power. Third, communities turned to prophecy, the Mahdi's movement forged a state while the Xhosa Cattle-Killing devoured a society. Rebel, rebuild, believe: three responses, three outcomes. The lesson for Governance is that the map of 1900 was written by the conquered as much as by the conquerors.",
    "questions": [
      {
        "skill": "Evidence Usage",
        "text": "Choose ONE case from the reading, the Indian Rebellion of 1857, Yaa Asantewaa and the Golden Stool, or Samory Touré's Wassoulou Empire, and use specific details (people, dates, and actions) to show how it illustrates a particular form of indigenous response to state expansion."
      },
      {
        "skill": "Causation",
        "text": "Explain why the Indian Rebellion of 1857 broke out. Distinguish the immediate trigger from the deeper underlying causes, and explain how internal grievances and external British policies combined to produce the revolt."
      },
      {
        "skill": "Argumentation",
        "text": "Historians debate whether religious movements strengthened or weakened indigenous societies facing empire. Make a defensible claim using the Mahdist State AND the Xhosa Cattle-Killing, then identify one piece of evidence that complicates your argument."
      }
    ]
  },
  "6.4": {
    "deck": "How the hunger of industrial factories for raw materials reorganized whole regions into export economies, and how the environment set the stage while imperial power decided who profited and who paid.",
    "skillTags": [
      "Causation",
      "Continuity and Change"
    ],
    "support": {
      "beforeYouRead": "As you read, track three things. (1) <strong>Environmental factors</strong>, the climate, soil, and geology that decided which region could grow or extract a given commodity. (2) <strong>Industrial demand</strong>, the factories, machines, and consumers whose appetite made that commodity valuable. (3) <strong>Power and labor</strong>, the empires, companies, and coerced workers who moved the profit from the resource toward industrial states. For every case, ask which force explains the outcome, and notice that it is almost always all three at once.",
      "readingTarget": "By the end you should be able to explain how environmental factors contributed to the development of the global economy from 1750 to 1900; use specific evidence, Egyptian cotton, Amazon and Congo rubber, West African palm oil, Peruvian guano, Argentine meat, and South African diamonds, to prove a claim about export economies; and connect these developments to the ENV thematic focus that the environment shapes, and is reshaped by, human societies."
    },
    "vocab": [
      "Export Economy",
      "Cash Crops",
      "Egyptian Cotton",
      "Legitimate Commerce",
      "Palm Oil",
      "Amazon Rubber",
      "Congo Free State",
      "Concession Companies",
      "Guano",
      "Refrigerated Shipping",
      "De Beers",
      "Global Division of Labor",
      "Economic Dependence",
      "Unequal Exchange"
    ],
    "sections": [
      {
        "label": "Causation, KC-5.1.II.A",
        "heading": "Feeding the Factories: The Hunger for Raw Materials",
        "paragraphs": [
          "Industrialization ran on inputs. A Manchester textile mill was useless without raw cotton; a soap works needed fat; a machine shop needed lubricant. As factory output multiplied after 1750, the appetite of industrial economies for <strong>raw materials and food</strong> grew faster than Europe could supply itself. The consequence, according to the CED, was that <strong>demand for raw materials and food created export economies specializing in natural resources, foodstuffs, and industrial crops</strong>, whole regions reorganized to grow or dig a single commodity for a distant buyer. This was not accidental. The environment decided which places could supply what, but industrial demand is what turned a plant or a mineral into a global commodity worth reorganizing a society around.",
          "The clearest agricultural case is <span class=\"kt\">Egyptian cotton</span>. Egypt's hot, sun-drenched, Nile-irrigated soil proved ideal for the long-staple cotton that European spinners prized, and from the 1820s the ruler Muhammad Ali reorganized Egyptian agriculture to grow it, forcing peasants onto cotton and monopolizing the sale of the crop. His grandson Isma'il Pasha pushed the strategy even harder. When the Union blockade of the American Civil War (1861–1865) choked off Southern cotton, world prices roughly quadrupled and Egyptian exports exploded, pouring revenue into the treasury. Cotton became the country's overwhelming <span class=\"kt\">cash crop</span>, the defining example of an <span class=\"kt\">export economy</span> built around a single industrial input. Environmental fit made cotton possible; the factory demand of Lancashire, and the sudden absence of the American supply, made it irresistible.",
          "West Africa shows the same logic in a different commodity. As the Atlantic slave trade was abolished across the early nineteenth century, European traders turned to what they called <span class=\"kt\">legitimate commerce</span>, above all <span class=\"kt\">palm oil</span> from the forests of the Niger Delta and the Gold Coast. Palm oil greased the axles and machinery of an industrializing Britain, lit lamps, and, through firms that would become Lever Brothers, was rendered into soap and candles for a newly hygiene-conscious urban public. At first African merchants and coastal states controlled the trade: figures like King Jaja of Opobo built powerful commercial states by taxing and channeling the oil trade, capturing real profit for themselves. Palm oil is therefore a useful reminder that early export economies were not always simply imposed from outside, though by the 1880s European firms and the Royal Niger Company were working hard to break that African middleman control.",
          "Across these cases a single mechanism repeats. A region possessed the right ecological conditions, Nile silt, tropical palm forests, and an industrializing economy abroad developed a use, and therefore a market, for what grew there. Local land, labor, and capital were then re-channeled toward that one export, often at the expense of food grown for local consumption. The commodity flowed out to the factories, and finished manufactured goods, cloth, tools, guns, and household products, flowed back in the opposite direction. As the CED puts it, <strong>profits were used to purchase finished goods</strong>. That two-way flow, raw materials out, factory products in, is the skeleton of the nineteenth-century global economy, and it explains why regions that supplied the most valuable resources rarely industrialized themselves."
        ],
        "callout": {
          "label": "AP Skill, Causation",
          "html": "The CED says industrial demand <strong>\"created export economies specializing in natural resources, foodstuffs, and industrial crops.\"</strong> On the exam, explain the causal chain rather than just naming a crop: factory demand raised a commodity's price, high prices pulled land and labor into producing it, and specialization locked the region into supplying that one export. Naming Egyptian cotton earns a point; explaining <em>why</em> the American Civil War made Egypt's environment suddenly so profitable shows the reasoning graders reward."
        }
      },
      {
        "label": "Causation, KC-5.1.II.A",
        "heading": "Digging In: Extraction, Coercion, and the Colonial Grid",
        "paragraphs": [
          "If cotton and palm oil show export agriculture, the extractive economies show its harsher edge, and reveal how tightly environmental resources were bound to political power. <span class=\"kt\">Amazon rubber</span> is the classic case. Only the wild rubber trees of the Amazon and Congo basins could supply the latex that industry suddenly craved for tires, hoses, insulation, and belts. In Brazil, rubber wealth built a jungle metropolis at Manaus, complete with an opera house, while rubber tappers labored in debt bondage deep in the forest. The environment set the location; nothing but industrial demand explains why a rainforest sap became one of the most valuable substances on earth.",
          "The same commodity turned monstrous in the <span class=\"kt\">Congo Free State</span>, which was not a colony at all but the personal property of Belgium's King Leopold II, who ran it for private profit. Here <span class=\"kt\">concession companies</span> imposed rubber quotas on entire villages and enforced them through a colonial militia that took hostages, burned villages, and mutilated or killed those who fell short; the severed hand became the notorious emblem of the system. Reformers like the journalist E. D. Morel and the diplomat Roger Casement, whose 1904 report documented the atrocities, built an international protest movement, the Congo Reform Association, that eventually forced Leopold to surrender the territory to the Belgian state in 1908. Congo rubber is the sharpest illustration of how an export economy could <em>intensify coerced labor</em> and fuse an environmental resource directly to violent political control.",
          "Mineral extraction followed the same grid. In Peru, the arid, rainless Chincha Islands off the coast were blanketed in centuries of nitrogen-rich seabird droppings, <span class=\"kt\">guano</span>, that European and American farms craved as fertilizer for their own exhausted soils. Peru financed its entire national government on guano exports for decades and imported tens of thousands of indentured Chinese laborers to dig the stinking cliffs under brutal conditions. In South Africa, the diamond strikes at Kimberley after 1867 drew fortune-seekers and, above all, Cecil Rhodes, whose <span class=\"kt\">De Beers</span> company bought up and consolidated the mines into a near-monopoly by 1888 and organized African migrant workers into closed, guarded compounds designed to control them and prevent diamond theft. Geology decided where the wealth lay; imperial companies and financiers decided who dug it, under what conditions, and who kept the returns.",
          "Read together, these cases make the topic's core point about the environment. A resource's <em>climate and geology</em> determined which region could supply it, you cannot tap rubber without a rainforest, harvest guano without a rainless coast, or mine diamonds without the right volcanic rock. Environmental endowment is a genuine cause and belongs in any explanation. But the institutions layered on top, concession companies, colonial states, indentured labor and compound systems, determined how the resource was extracted, who did the extracting, and where the profit ultimately flowed. Environmental endowment opened the door; imperial and corporate power decided who walked through it and on whose backs. The most sophisticated analysis names both causes and shows how they worked together rather than treating geography as destiny."
        ],
        "callout": {
          "label": "AP Skill, Comparison",
          "html": "The learning objective asks you to explain how <strong>environmental factors contributed to the development of the global economy</strong>. Strong answers hold two causes together: the environment made a resource possible, but political and economic institutions determined its impact. Compare Congo rubber and South African diamonds, different commodities and continents, the <em>same</em> pattern of coerced or controlled labor serving distant industry. Explaining that shared structure, not just listing two examples, is what demonstrates comparative reasoning."
        }
      },
      {
        "label": "Continuity and Change, KC-5.1.II.A",
        "heading": "Boom, Bust, and Dependence: The New Global Division of Labor",
        "paragraphs": [
          "Specialization brought real gains, and honest analysis has to acknowledge them. Export revenue built ports, railways, and telegraph lines; it created jobs, cities, and fortunes. Argentina is the showcase: the vast, fertile grasslands of the Pampas were perfect for cattle, but beef spoiled long before it could reach Europe. The invention of <span class=\"kt\">refrigerated shipping</span> in the 1870s and 1880s solved that problem, letting Argentine herds be slaughtered, frozen in packing plants, and sold fresh to Britain. Backed heavily by British investment, Argentine beef and grain exports financed one of the densest railway networks in the Southern Hemisphere, drew millions of European immigrants, and gave the country, for a time, one of the highest standards of living in the world. Technology and environment together turned open grassland into a global meat factory.",
          "But specialization also created a dangerous fragility, because an economy built on one export lives and dies by that export's price. When commodity prices fell or a substitute appeared, the boom could vanish. Amazon rubber is the cautionary tale: after Henry Wickham smuggled rubber seeds to Britain's Kew Gardens in 1876, the seedlings were used to establish efficient plantations in British Malaya and Ceylon. By the 1910s those plantations undercut Amazon prices, the Brazilian boom collapsed, and Manaus's opera house sat in a decaying city. Environmental monopoly, it turned out, could be broken by transplanting the environment itself.",
          "Dependence had political costs as well. Egypt borrowed heavily against future cotton revenue to build railways and the Suez Canal, and Isma'il Pasha eventually sold Egypt's canal shares to Britain in 1875 to service the debt. When cotton prices slumped after the American Civil War ended and Southern supply returned, revenues fell just as debts came due. European creditors imposed foreign control over Egyptian finances; a nationalist backlash, the Urabi revolt, followed; and Britain occupied the country militarily in 1882, beginning decades of rule. A resource meant to enrich Egypt instead became the lever by which Egypt lost its independence. This is <span class=\"kt\">economic dependence</span> in its sharpest form, specialization that leaves a society exposed to distant markets and, ultimately, subordinate to the industrial powers it supplies.",
          "The cumulative result was a <span class=\"kt\">global division of labor</span>: a handful of industrialized regions in Western Europe and North America manufactured finished goods and set world prices, while much of Asia, Africa, and Latin America supplied the raw materials and food that fed those factories and cities. This was <span class=\"kt\">unequal exchange</span>, the resource-producing periphery sold cheap, volatile commodities and bought back expensive manufactures, so wealth, technology, and industrial capacity concentrated at one end of the exchange while risk and price instability piled up at the other. That structure did not vanish in 1900; its outlines shaped patterns of global inequality for the century that followed. The environment set the stage and supplied the raw materials, but the play that ran on it was written by industrial power."
        ],
        "callout": {
          "label": "AP Skill, Argumentation",
          "html": "A top-scoring argument weighs benefit against cost. The CED's export economies genuinely delivered <strong>ports, railways, and revenue</strong>, Argentine beef built a railway boom, yet they also produced <em>economic dependence</em>, as when a cotton-debt crisis helped bring Britain into Egypt in 1882. Make a defensible claim that holds both together, then complicate it: rubber's collapse after 1876 shows how quickly an environmental advantage could evaporate. Naming a change and a continuity in the same argument is the complexity graders reward."
        }
      }
    ],
    "takeaway": "Topic 6.4 is one argument in three moves. First, industrial demand turned local ecologies into global commodities: Nile-Delta cotton and Niger-Delta palm oil became export economies feeding distant factories. Second, extraction fused environment to power, Amazon and Congo rubber, Peruvian guano, and Kimberley diamonds show geology deciding where the wealth lay and empire deciding who dug it. Third, specialization bred dependence: Argentine beef boomed on refrigeration while Amazon rubber collapsed and Egyptian cotton debt invited British occupation, hardening a global division of labor built on unequal exchange. Environment opened the door; industrial power walked through it. That is Humans and the Environment from 1750 to 1900.",
    "questions": [
      {
        "skill": "Evidence Usage",
        "text": "Choose ONE export economy from the reading, Egyptian cotton, Amazon or Congo rubber, West African palm oil, Peruvian guano, Argentine meat, or South African diamonds, and describe the specific environmental conditions and industrial demand that created it. What does your example reveal about how environmental factors shaped the global economy?"
      },
      {
        "skill": "Causation",
        "text": "Explain the causal chain that turned a region into an export economy after 1750. How did industrial demand, environmental endowment, and imperial or company control combine to determine both what a region produced and who kept the profits?"
      },
      {
        "skill": "Argumentation",
        "text": "Make a defensible claim about whether export specialization helped or harmed the regions that supplied raw materials from 1750 to 1900. Then identify one piece of evidence, such as the collapse of the Amazon rubber boom or Britain's 1882 occupation of Egypt, that complicates or qualifies your argument."
      }
    ]
  },
  "6.5": {
    "deck": "How industrialized states and businesses controlled distant economies without planting a flag, through opium and unequal treaties in China, the leash of foreign debt in Egypt, the Ottoman Empire, and Latin America, and commodity chains that captured the profits of cotton, palm oil, and copper in Europe and the United States.",
    "skillTags": [
      "Causation",
      "Continuity and Change"
    ],
    "support": {
      "beforeYouRead": "As you read, track how power operated <em>without</em> conquest. Watch three instruments: (1) <strong>Trade coercion</strong>, opium, gunboats, and unequal treaties that pried open markets on foreign terms. (2) <strong>Finance</strong>, loans, defaults, and foreign control of a state's customs and tax revenue. (3) <strong>Investment</strong>, foreign-owned railways, ports, and commodity chains that linked export zones to Atlantic markets. For each case, ask a single question: who set the terms of exchange, and where did the profits end up?",
      "readingTarget": "By the end you should be able to explain how economic factors shaped the global economy from 1750 to 1900; use specific evidence, the Opium Wars and the Treaty of Nanjing, the Chinese Maritime Customs Service, the Caisse de la Dette in Egypt, the Ottoman Public Debt Administration, British investment in Buenos Aires, and the cotton, palm oil, and copper commodity chains, to prove that control could be exercised through markets rather than annexation; and connect these developments to the ECN thematic focus that societies are shaped by how they produce, exchange, and consume."
    },
    "vocab": [
      "Economic Imperialism",
      "Informal Empire",
      "Spheres of Influence",
      "Unequal Treaties",
      "Opium Wars",
      "Treaty of Nanjing",
      "Treaty Ports",
      "Extraterritoriality",
      "Chinese Maritime Customs Service",
      "Ottoman Public Debt Administration",
      "Caisse de la Dette",
      "Suez Canal",
      "Commodity Chain",
      "Egyptian Cotton"
    ],
    "sections": [
      {
        "label": "Causation, KC-5.2.I.E",
        "heading": "Empire Without a Flag: Opium, Gunboats, and the Opening of China",
        "paragraphs": [
          "By the nineteenth century, the industrialized states of Europe and the United States had built economies hungry for markets, raw materials, and safe places to invest capital. They did not always need to raise a flag to get them. Historians call the resulting system <span class=\"kt\">economic imperialism</span>, or <span class=\"kt\">informal empire</span>: control exercised through trade, finance, and investment rather than formal colonial rule. A state could keep its emperor, its army, and its borders on the map, and still find its most important choices dictated from abroad. The instruments were subtle but powerful: loans, foreign-owned railways, control of customs revenue, and treaties signed under the muzzle of naval guns. The central question of the whole topic follows from this: not whether trade occurred, but <em>who set its terms.</em>",
          "China offers the clearest case of trade opened by force. Europe wanted Chinese tea, silk, and porcelain, but China wanted little from Europe in return and demanded payment in silver, draining bullion out of British hands. To reverse that flow, British merchants ran a massive, illegal trade in Indian-grown opium into China, addicting hundreds of thousands and pulling the silver back. When the Qing commissioner Lin Zexu seized and destroyed some twenty thousand chests of opium at Canton in 1839, Britain answered with war in the name of free trade. The <span class=\"kt\">Opium Wars</span>, the first from 1839 to 1842, the second from 1856 to 1860, pitted steam-powered iron warships and modern artillery against a Qing state that could not match them at sea. Military defeat forced the Qing government to the negotiating table on terms it never would have accepted freely, exposing the gap between an industrialized navy and a vast but agrarian empire.",
          "The <span class=\"kt\">Treaty of Nanjing</span> of 1842 and the settlements that followed became the model for a whole class of <span class=\"kt\">unequal treaties</span>. They ceded Hong Kong to Britain, imposed a crushing indemnity, and opened a string of <span class=\"kt\">treaty ports</span>, Canton, Shanghai, and others, where foreigners could live and trade. Later provisions capped Chinese tariffs at a low fixed rate, so the Qing could not protect its own producers, and granted <span class=\"kt\">extraterritoriality</span>, meaning foreign nationals answered to their own consular courts, not Chinese law. Even China's customs houses came under foreign management through the <span class=\"kt\">Chinese Maritime Customs Service</span>, led for decades by the British official Robert Hart, which collected the tariff revenue that guaranteed foreign loans.",
          "By the 1890s these openings hardened into <span class=\"kt\">spheres of influence</span>, regions where a single foreign power claimed priority over railways, mines, and loans. Britain dominated the Yangzi valley, Russia the northeast, Germany the Shandong coast, France the southwest. The Qing dynasty was never formally colonized; it retained its throne and its territory. Yet it had lost control over its tariffs, its courts for foreigners, its customs revenue, and its coastal commerce. That is precisely what makes China the defining example of the CED claim that <strong>industrialized states and businesses practiced economic imperialism in Asia</strong>: the machinery of sovereignty survived, but the levers had been moved offshore."
        ],
        "callout": {
          "label": "AP Skill, Causation",
          "html": "The CED states that <strong>industrialized states and businesses practiced economic imperialism in Asia and Latin America.</strong> The exam rewards explaining the <em>mechanism</em>, not just naming a war. A strong answer traces the causal chain: an industrial navy wins the Opium Wars, which forces unequal treaties, which impose treaty ports, fixed tariffs, and extraterritoriality, so control follows from commerce and coercion, not annexation. State the tool AND what it did to Chinese sovereignty."
        }
      },
      {
        "label": "Continuity and Change, KC-5.2.I.E",
        "heading": "The Leash of Debt: Egypt, the Ottoman Empire, and Latin America",
        "paragraphs": [
          "If gunboats opened China, debt did much of the work elsewhere. Rulers eager to modernize, to build railways, canals, harbors, telegraphs, and armies on the European model, borrowed heavily from banks in London and Paris at high interest, often on terms that left only a fraction of each loan in the borrower's hands after fees and discounts. When export earnings faltered or interest payments outran revenue, governments defaulted, and their European creditors demanded direct control over the state's finances as the price of rescue. The result was a familiar pattern: a sovereign government surrendered command of its own treasury, especially its customs and tax revenue, to foreign bondholders who now stood first in line for its money. This was economic imperialism working through the ledger rather than the cannon, and it bound Egypt, the Ottoman Empire, and much of Latin America to Europe's financial capitals.",
          "Egypt is the sharpest example. Under the khedive Ismail, Egypt borrowed enormous sums to modernize and to build the <span class=\"kt\">Suez Canal</span>, opened in 1869. When the debts became unpayable, Ismail sold Egypt's canal shares to the British government in 1875, handing London a strategic stake in the waterway to India. In 1876 European creditors established the <span class=\"kt\">Caisse de la Dette</span> Publique, and Britain and France imposed \"dual control\" over Egyptian finances, effectively running the country's budget to guarantee repayment. When a nationalist revolt threatened this arrangement, Britain invaded and occupied Egypt in 1882, a case where informal financial control hardened into outright military rule.",
          "The Ottoman Empire followed a parallel road. Decades of borrowing to fund reform, modernization, and costly wars ended in a formal default in the mid-1870s that shut the empire out of European credit markets. In 1881 European creditors created the <span class=\"kt\">Ottoman Public Debt Administration</span>, a body staffed by foreign bondholders' representatives that collected major streams of Ottoman revenue, from tobacco, salt, silk, fishing, and stamp duties, directly, before the money ever reached the sultan's treasury. At its height the Administration employed thousands of officials and controlled a meaningful share of the empire's total income. The empire kept its sultan and its capital at Istanbul, but a foreign commission now skimmed its tax base at the source and reassured European investors that their bonds would be paid. Contemporaries began calling the Ottoman state the \"sick man of Europe,\" a label that was as much a financial diagnosis as a political one.",
          "Latin America shows the same forces working through investment rather than conquest. After independence, states such as Argentina welcomed British capital to build the infrastructure of an export economy. British firms financed and often owned the railways and the modernized port of <span class=\"kt\">Buenos Aires</span>, links designed to move beef, hides, and wheat outward to Atlantic markets rather than to knit the domestic economy together. Argentina was never a British colony, yet its credit, shipping, and much of its infrastructure depended on London, a relationship so tight that the Baring banking crisis of 1890 was triggered by Argentine debt. This is <em>continuity within change</em>: new railways and booming exports were genuine, but the older pattern of profits and decisions concentrating abroad endured."
        ],
        "callout": {
          "label": "AP Skill, Continuity and Change",
          "html": "The CED extends economic imperialism to <strong>Latin America</strong> as well as Asia, and the debt cases show why. A top response distinguishes the <em>change</em>, real railways, ports, and export growth financed by foreign capital, from the <em>continuity</em>, control over credit, revenue, and profit remaining in Europe. Naming a specific institution (the Caisse de la Dette, the Ottoman Public Debt Administration, British ownership of the Buenos Aires port) is what turns a vague claim into evidence that earns points."
        }
      },
      {
        "label": "Continuity and Change, KC-5.1.II.C",
        "heading": "Chains of Commodities: Cotton, Palm Oil, and Copper",
        "paragraphs": [
          "Behind the treaties and the loans lay a global trading system built to serve one end. The CED puts it plainly: <strong>global commodity trade was organized to benefit merchants and companies in Europe and the United States.</strong> A <span class=\"kt\">commodity chain</span> is the full sequence that carries a raw material from the field or mine, through processing and shipping, to the final consumer. In the nineteenth century these chains were engineered so that colonies and dependent economies produced cheap raw materials, while the profitable stages, financing, insurance, shipping, manufacturing, and sale of finished goods, were captured in industrial centers like Manchester, London, and the ports of the United States.",
          "Cotton is the textbook illustration. India had long been the world's great exporter of finished cotton cloth, but British policy and the flood of cheap Lancashire textiles reversed the relationship: India was pushed toward exporting <em>raw</em> cotton and importing British cloth, a wrenching deindustrialization of its once-dominant weaving trade. When the American Civil War of 1861 to 1865 cut off Southern cotton to British mills, demand for <span class=\"kt\">Egyptian cotton</span> exploded, drawing Egypt deeper into a single-crop export economy tied to Lancashire's needs, and, when prices later collapsed, deeper into the debt trap described above. The cotton chain fed British factories; the value added by spinning and weaving stayed in Britain.",
          "Two other chains show the same design. In West Africa, the abolition of the Atlantic slave trade pushed European merchants toward so-called \"legitimate commerce,\" above all <em>palm oil</em> from the Niger Delta, which lubricated industrial machinery and made the soap and candles that a growing European middle class demanded. African brokers and coastal states organized the collection of the oil, but British firms controlled the shipping and set the prices in Liverpool, and by late century British force increasingly pushed past the African middlemen to seize the trade directly. In the Andes, Chile emerged as a leading exporter of <em>copper</em>, a metal industrial economies craved for wiring, coinage, and machinery, while British merchants and capital dominated its financing, smelting technology, and shipment. In each case, African and Latin American producers supplied a raw material whose price, transport, and ultimate use were governed from abroad, and the profits of the finished product accrued far from the point of production.",
          "Put the three sections together and the logic of the topic is complete. Trade coercion cracked open China; finance harnessed Egypt, the Ottoman Empire, and Argentina; and commodity chains channeled cotton, palm oil, and copper toward industrial profit centers. Economic imperialism built real things, railways, ports, canals, and expanding trade, so its record is not simply one of extraction. But control over credit, shipping, prices, and profits remained, again and again, in Europe and the United States. That is the ECN thematic focus in its starkest nineteenth-century form: societies were reshaped less by who governed them than by how they were made to produce, exchange, and consume."
        ],
        "callout": {
          "label": "AP Skill, Argumentation",
          "html": "The learning objective asks you to <strong>explain how economic factors contributed to the development of the global economy from 1750 to 1900.</strong> The strongest arguments hold two truths at once: economic imperialism generated genuine infrastructure and trade growth AND concentrated profit and control abroad. Use a commodity chain, Indian and Egyptian cotton feeding Lancashire, Niger Delta palm oil, Chilean copper, as your evidence, then push to complexity by acknowledging what producers gained even as the terms of exchange were set elsewhere."
        }
      }
    ],
    "takeaway": "Topic 6.5 is one argument in three moves. First, coercion: the Opium Wars and the Treaty of Nanjing forced treaty ports, fixed tariffs, extraterritoriality, and spheres of influence onto a China that kept its throne but lost control of its own commerce. Second, finance: unpayable debt handed Egypt's treasury to the Caisse de la Dette, the Ottoman revenues to the Public Debt Administration, and Argentina's railways and Buenos Aires port to British capital. Third, commodities: cotton, palm oil, and copper chains funneled raw wealth toward Europe and the United States. Empire did not always need a flag, only control of the terms of exchange. That is Economic Systems from 1750 to 1900.",
    "questions": [
      {
        "skill": "Evidence Usage",
        "text": "Choose ONE case, China after the Opium Wars, Egypt under the Caisse de la Dette, the Ottoman Public Debt Administration, or British investment in Buenos Aires, and describe the specific mechanisms (treaties, loans, customs control, or foreign-owned infrastructure) through which industrialized states or businesses controlled that economy. What does your example reveal about how imperial control could operate without formal colonial rule?"
      },
      {
        "skill": "Causation",
        "text": "Explain why industrialized states and businesses so often exercised control through trade, finance, and investment rather than outright annexation between 1750 and 1900. How did instruments like unequal treaties, foreign debt, and commodity chains produce a loss of economic sovereignty even where a government kept its throne and its borders?"
      },
      {
        "skill": "Argumentation",
        "text": "Make a defensible claim about how economic imperialism shaped the global economy from 1750 to 1900. Then identify one piece of evidence, for example, the real railways, ports, and export growth it produced, that complicates or qualifies your argument about who benefited from the terms of exchange."
      }
    ]
  },
  "6.6": {
    "deck": "Why tens of millions of people moved between 1750 and 1900, how a revolution in transportation, the pressures of industrial capitalism, and the machinery of coerced labor combined to remake the human map of the planet.",
    "skillTags": [
      "Causation",
      "Continuity and Change"
    ],
    "support": {
      "beforeYouRead": "As you read, sort every migration you meet into two grids at once. First, the <strong>cause grid</strong>: is a person leaving because of a <strong>push factor</strong> (famine, land pressure, unemployment) or a <strong>pull factor</strong> (jobs, land, higher wages)? Second, the <strong>freedom grid</strong>: how much choice did the migrant actually have, free, semicoerced by contract, or coerced by the state? A single migrant almost always sits on both grids at once, and the best answers name both.",
      "readingTarget": "By the end you should be able to explain how environmental and economic factors produced varied patterns of migration from 1750 to 1900; use specific evidence, the transportation revolution, the Irish Potato Famine, Italian and Japanese labor migrants, Indian and Chinese indentured workers, and penal transportation, to prove a claim; and connect these movements to the ECN and ENV thematic focus that societies are shaped by how they produce and by the environments they inhabit."
    },
    "vocab": [
      "Push and Pull Factors",
      "Transportation Revolution",
      "Steamships",
      "Railroads",
      "Irish Potato Famine",
      "Return Migration",
      "Indentured Servitude",
      "Indian Indentured Labor",
      "Chinese Migration",
      "Italian Migration",
      "Japanese Agricultural Workers",
      "Lebanese Merchant Networks",
      "Convict Labor",
      "Diaspora"
    ],
    "sections": [
      {
        "label": "Causation, KC-5.4.I.B",
        "heading": "The Machinery of Movement: Steam, Rails, and the Reasons to Leave",
        "paragraphs": [
          "Between 1750 and 1900 people moved in numbers the world had never seen, tens of millions crossing oceans, filling new cities, and circulating between continents in a single lifetime. The scale was new, and so was the machinery that made it possible. A <span class=\"kt\">transportation revolution</span> collapsed the cost, the time, and the danger of long-distance travel. Where a sailing voyage across the Atlantic once took two months and risked disease, storm, and shipwreck, <span class=\"kt\">steamships</span> after mid-century made the crossing in one to two weeks on a fixed, published schedule. <span class=\"kt\">Railroads</span> extended the same logic overland, reaching inland toward the ports and then carrying arrivals deep into continental interiors. For the first time, moving thousands of miles for work became a calculable decision an ordinary family could plan, rather than a once-in-a-lifetime gamble reserved for the desperate or the rich.",
          "Technology, though, only explains <em>how</em> people moved; it does not explain <em>why</em>. The CED is precise on this point: <strong>new methods of transportation encouraged internal and external migration</strong>, but the reasons for leaving lay in the wider transformation of the world economy. Historians sort those reasons into <span class=\"kt\">push and pull factors</span>. Push factors drove people out of their homes, while pull factors drew them toward particular destinations. The industrialization of agriculture, the enclosure and consolidation of farmland, and rapid population growth created a surplus of rural people across Europe and Asia, men and women who could no longer make a living in the villages where they were born. The steamship did not create that surplus; it gave it somewhere to go, connecting regions of desperate labor supply to regions of hungry labor demand.",
          "The <span class=\"kt\">Irish Potato Famine</span> of 1845 to 1852 is the classic push factor. When potato blight destroyed the staple crop of Ireland's rural poor, roughly a million people died of starvation and disease, and another million or more emigrated within a decade, most to the United States and Britain. Famine did not merely make people <em>want</em> to leave; combined with cheap steam passage and established shipping lines, it made mass departure physically achievable for the poorest households. The same underlying logic operated across southern Europe, Scandinavia, and East Asia, where repeatedly subdivided farms and the spread of cash-crop economies left growing populations with too little land. Environmental shock and economic pressure together turned emigration from an unusual event into an expected stage of life for millions.",
          "Pull factors worked in the opposite direction, and they were just as concrete. Industrializing economies and settler frontiers demanded labor: railroads to lay, mines to dig, plantations to harvest, and factories to staff around the clock. The California and Australian gold rushes, the sugar estates of the Caribbean, and the exploding cities of the Americas all advertised wages far above what a peasant could earn at home. Because steamships shrank both the cost and the risk of the journey, migration also became increasingly reversible: many workers practiced <span class=\"kt\">return migration</span>, crossing to earn and then circulating home with their savings rather than settling permanently. Migration in this era, in short, became a deliberate economic strategy, a way to move labor toward capital, and not simply a one-way escape from crisis."
        ],
        "callout": {
          "label": "AP Skill, Causation",
          "html": "The CED states that <strong>new methods of transportation encouraged internal and external migration</strong>. On the exam, name transportation as the <em>enabling</em> cause and the economy as the <em>driving</em> cause, steamships made movement cheap, but famine, land pressure, and labor demand supplied the motive. A response that separates <strong>push factors from pull factors</strong> and shows how the new technology physically connected the two will out-score one that merely lists who moved and where."
        }
      },
      {
        "label": "Continuity and Change, KC-5.4.II.A",
        "heading": "In Search of Work: The World's Voluntary Migrants",
        "paragraphs": [
          "The CED opens its account of the migrants themselves with a plain but crucial claim: <strong>migrants relocated in search of work</strong>. Many did so freely, weighing the opportunities in front of them and choosing where to go. These voluntary migrants were not a footnote to the coerced systems that ran alongside them, they were the single largest stream of movement in the entire era. They also proved the most transformative in the long run, because free migrants tended to bring families, put down roots, and build enduring communities and commercial networks that permanently reshaped the receiving societies of the Americas, the Pacific rim, and the world's great port cities.",
          "<span class=\"kt\">Italian migration</span> illustrates the pattern vividly. From the 1870s onward, millions left the impoverished Italian south for the Americas, the United States above all, but also in enormous numbers Argentina and Brazil, where farmland was cheap and labor was scarce. Many Italians were seasonal migrants nicknamed <em>golondrinas</em>, or \"swallows,\" who crossed the Atlantic each year to harvest the South American wheat and grape crops and then returned home for the European planting season. Their pattern demonstrates that voluntary migration was frequently circular rather than permanent, and that the falling price of steam travel had made even ocean-crossing seasonal commuting a rational choice, something unthinkable a single generation earlier.",
          "Across the Pacific, <span class=\"kt\">Japanese agricultural workers</span> followed a parallel logic. After the Meiji government relaxed centuries-old emigration restrictions in the late nineteenth century, Japanese laborers traveled first to the sugar plantations of Hawaii and then onward to California, Peru, and Brazil, chasing wages that dwarfed what rural Japan could offer. Much <span class=\"kt\">Chinese migration</span> was likewise voluntary in its origins: Chinese laborers streamed to the California and Australian goldfields and to the great railroad construction projects of North America, financing their passage through family savings, clan associations, and credit networks rather than through binding indenture contracts. These migrants moved as calculating economic actors, not as passive cargo, and their remittances and return journeys tied distant Pacific economies together. Their presence also provoked backlash: host governments increasingly answered these free Asian arrivals with exclusion laws, such as the United States' Chinese Exclusion Act of 1882, showing that voluntary migration reshaped politics as well as labor markets.",
          "Trade drew still other migrants across the same shrinking world. <span class=\"kt\">Lebanese merchant networks</span>, spreading outward from the Ottoman province of Mount Lebanon, established peddling routes and permanent commercial communities across West Africa, the Americas, and the Caribbean, stitching distant markets together through ties of kinship and religion. Together these voluntary streams produced a lasting <span class=\"kt\">diaspora</span> geography, the Chinatowns, Little Italies, and Lebanese trading colonies whose descendants remain prominent today. Yet the word \"voluntary\" describes a spectrum, not an absolute. A landless Sicilian peasant or a debt-burdened Japanese farmer choosing between destitution at home and grueling labor abroad was choosing among sharply constrained options, a nuance the AP exam consistently rewards students for recognizing."
        ],
        "callout": {
          "label": "AP Skill, Continuity and Change",
          "html": "The CED emphasizes that <strong>migrants relocated in search of work</strong> and that these newcomers both maintained and transformed the cultures of their destinations. A strong answer treats \"voluntary\" with care: explain that free migration was <em>genuinely</em> free, people chose their destinations and often returned home, while acknowledging that economic desperation narrowed the range of real choices. Naming a specific diaspora, such as Italians in Argentina or Lebanese traders in West Africa, converts a vague generalization into scorable evidence."
        }
      },
      {
        "label": "Argumentation, KC-5.4.II.B",
        "heading": "Contracts, Coasts, and Convicts: The New Systems of Coerced Labor",
        "paragraphs": [
          "Not everyone who moved did so freely. The CED is blunt about this: <strong>global capitalism relied on coerced and semicoerced labor migration</strong>, including systems of enslavement, indenture, and convict labor. The timing is the key to understanding why. As Britain and other European empires abolished first the transatlantic slave trade and then slavery itself, Britain in 1807 and 1833, the owners of tropical plantations faced a sudden and severe labor crisis. Sugar, coffee, and rubber still had to be produced, and the profits still depended on cheap, controllable workers. Rather than raise wages to attract free labor, planters and colonial states invented new systems that manufactured docile, low-cost workforces under the respectable cover of legal contracts.",
          "<span class=\"kt\">Indentured servitude</span> was by far the largest of these systems. Under it, a worker signed a contract binding them to labor on a specific estate for a fixed term, usually five years, in exchange for passage, housing, and a set wage; at the end they were in theory free to stay or go. <span class=\"kt\">Indian indentured labor</span> became the global template. From the 1830s onward, well over a million Indians were shipped to sugar colonies including Mauritius, Trinidad, British Guiana, Fiji, and Natal in South Africa. Recruiters deliberately targeted people already crushed by debt, drought, or the loss of land, and the contracts, routinely signed by workers who could not read them, restricted movement and were enforced by criminal penalty rather than ordinary civil law.",
          "<span class=\"kt\">Chinese migration</span> supplied a second major indenture stream, often called the \"coolie\" trade by contemporaries. Chinese laborers were carried in enormous numbers to the guano islands and sugar estates of Peru and to the plantations of Spanish Cuba, frequently recruited through deception, debt, or outright kidnapping. Conditions on the Pacific voyage were so brutal that mortality sometimes rivaled that of the earlier Atlantic slave ships, and on arrival many workers found themselves resold and confined with little hope of ever returning. Here the line between a labor \"contract\" and outright coercion nearly disappears, a reminder that a document can be perfectly legal and still leave one party with almost no genuine bargaining power.",
          "At the coercive extreme stood <span class=\"kt\">convict labor</span>. Empires transported prisoners across the world to build, garrison, and populate distant colonies: Britain sent roughly 160,000 convicts to Australia between 1788 and 1868, and France later shipped prisoners to penal settlements in New Caledonia and French Guiana. Convicts had no contract, no wage, and no choice whatsoever. Placed side by side, these systems reveal a continuous spectrum of unfreedom, the free Italian \"swallow\" who could go home, the semicoerced Indian indentured worker locked into a five-year term, and the transported convict stripped of all agency, every one of them mobilized to serve the same expanding, profit-driven capitalist economy. The sharpest AP argument treats migration in this era not as a simple binary of free versus forced, but as a graduated continuum of coercion in the service of global production."
        ],
        "callout": {
          "label": "AP Skill, Argumentation",
          "html": "The CED ties these systems directly to the <strong>demand for labor that followed the abolition of slavery</strong>. A top-scoring argument first establishes the causation, abolition created a labor vacuum that indenture and convict systems rushed to fill, and then complicates it by placing migration on a <em>continuum of coercion</em> rather than a clean free/forced binary. Backing the claim with a specific system, such as Indian indenture to Fiji, Chinese labor to Peru, or British convicts to Australia, is the difference between stating the pattern and actually proving it."
        }
      }
    ],
    "takeaway": "Topic 6.6 is one argument in three acts. First, the machinery changed: steamships and railroads made mass movement cheap and fast, while famine, land pressure, and industrial labor demand supplied the push and pull. Second, most migrants moved to find work, Italians to Argentina, Japanese to Hawaii, Lebanese traders across three continents, building diasporas that permanently reshaped their new homes. Third, capitalism also ran on coercion: as slavery ended, Indian and Chinese indentured contracts and convict transportation filled the labor gap along a graduated continuum of unfreedom. New reasons to leave, new means to travel, and old hierarchies of control, that is Economic Systems and the Environment from 1750 to 1900.",
    "questions": [
      {
        "skill": "Evidence Usage",
        "text": "Choose ONE migrant group from the reading, Irish famine emigrants, Italian golondrinas, Japanese agricultural workers, Indian indentured laborers, or transported convicts, and describe the specific conditions that set them in motion. What does your example reveal about whether their migration was pushed, pulled, or coerced?"
      },
      {
        "skill": "Causation",
        "text": "Explain how the transportation revolution and the demand for labor worked together to produce mass migration between 1750 and 1900. Why is it more accurate to call steamships and railroads the enabling cause rather than the driving cause of this movement?"
      },
      {
        "skill": "Argumentation",
        "text": "Make a defensible claim about the relationship between the abolition of slavery and the rise of indentured and convict labor systems. Then identify one piece of evidence that complicates the simple distinction between \"free\" and \"forced\" migration in this era."
      }
    ]
  },
  "6.7": {
    "deck": "How the great migrations of 1750 to 1900 remade three worlds at once, the enclaves migrants built abroad, the households they left behind, and the backlash that turned race and nationality into law.",
    "skillTags": [
      "Comparison",
      "Causation",
      "Continuity and Change"
    ],
    "support": {
      "beforeYouRead": "As you read, track migration's effects in three places at once. (1) <strong>Communities abroad</strong>, the ethnic enclaves and diaspora networks migrants built. (2) <strong>Households at home</strong>, how gender roles shifted when working-age men left. (3) <strong>The backlash</strong>, the nativism and restrictive laws that host societies adopted. For every case, ask which of the three it illustrates, and how the three connect.",
      "readingTarget": "By the end you should be able to explain how and why new patterns of migration affected society from 1750 to 1900; use specific evidence, Chinatowns, Indian indentured communities, Irish and Italian enclaves, the Chinese Exclusion Act, and the White Australia policy, to prove a claim; and connect these effects to the SIO thematic focus, that social roles and the boundaries of belonging are transformed as peoples interact."
    },
    "vocab": [
      "Diaspora",
      "Ethnic Enclave",
      "Chinatown",
      "Remittances",
      "Mutual-Aid Society",
      "Indentured Labor",
      "Chain Migration",
      "Sojourner",
      "Nativism",
      "Scientific Racism",
      "Chinese Exclusion Act",
      "White Australia Policy",
      "Dictation Test",
      "Bachelor Society"
    ],
    "sections": [
      {
        "label": "Comparison, KC-5.4.III.B",
        "heading": "Cities Within Cities: The Enclaves Migrants Built",
        "paragraphs": [
          "Migrants in the long nineteenth century did far more than move their labor from one place to another, they rebuilt whole worlds in miniature. Across the Pacific and the Americas, Chinese migrants created dense <span class=\"kt\">ethnic enclaves</span> that outsiders called <span class=\"kt\">Chinatowns</span>, from San Francisco and Vancouver to Lima, Havana, Singapore, and Melbourne. Inside them, migrants built temples, clan and native-place associations known as <em>huiguan</em>, Chinese-language newspapers, and <span class=\"kt\">mutual-aid societies</span> that pooled credit, found jobs, arbitrated disputes, and even shipped the bones of the dead home for burial. These institutions turned a hostile foreign city into a place where a newcomer from Guangdong could find housing, work, and protection in his own language. Just as important, they anchored <span class=\"kt\">remittances</span>, the money migrants sent home, which flowed back to south China and sustained entire villages an ocean away.",
          "The same pattern appeared wherever the British Empire moved workers. After the abolition of slavery, planters turned to <span class=\"kt\">indentured labor</span>, and more than a million Indians signed contracts as <em>girmityas</em> bound for Natal in South Africa, Mauritius, Fiji, Trinidad, British Guiana, and the plantations of Malaya. In each destination they transplanted the culture of home, building Hindu temples and mosques, celebrating festivals such as Diwali and Holi, and keeping languages like Bhojpuri and Tamil alive far from the subcontinent. These communities were not passive. In South Africa a young lawyer named <span class=\"kt\">Mohandas Gandhi</span> spent two decades organizing Indian migrants against discriminatory laws, developing the tactics of nonviolent resistance he would later carry back to India. The Indian diaspora, like the Chinese, wove destination and homeland into a single social world.",
          "In the Atlantic world, European migrants built enclaves of their own. Driven by the catastrophic potato famine of the 1840s, the Irish crowded into the cities of the northeastern United States, where the Catholic parish, the parochial school, and urban political machines such as New York's Tammany Hall became engines of community survival and, eventually, real political power. Italians followed later and in even larger numbers, settling not only in the \"Little Italy\" districts of American cities but also in Buenos Aires and São Paulo. Many arrived through the <em>padrone</em> labor-broker system and returned home seasonally, \"birds of passage\" who crossed the ocean repeatedly and poured remittances back into the impoverished villages of the Italian south. Their enclaves, too, ran on churches, mother-tongue newspapers, and mutual-aid societies that softened the shock of arrival.",
          "Compared side by side, these communities reveal a single underlying process. Migration rarely moved lone individuals; it moved through <span class=\"kt\">chain migration</span>, as settled migrants sponsored relatives and neighbors and reproduced their home villages street by street. Everywhere, the same kinds of institutions did the same work, a house of worship, a newspaper in the mother tongue, and a mutual-aid society to supply credit and protection, even as their specific content differed from a Cantonese temple to an Irish parish. The result was the <span class=\"kt\">diaspora</span>: a dispersed people who remained bound to a homeland through kinship, money, and culture. <strong>Migrants created ethnic enclaves and transplanted their cultures into new environments</strong>, and those enclaves became permanent features of the world's great port cities."
        ],
        "callout": {
          "label": "AP Skill, Comparison",
          "html": "The CED states that <strong>migrants created ethnic enclaves and transplanted their cultures into new environments</strong>. A strong comparative answer does not just list Chinatowns and Little Italys side by side, it identifies the shared function beneath them. A Cantonese <em>huiguan</em>, an Irish parish, and a Hindu temple abroad all supplied credit, jobs, and identity to newcomers. Name the common institution <em>and</em> the specific case, and you show the reasoning graders reward."
        }
      },
      {
        "label": "Causation, KC-5.4.III.A",
        "heading": "The Women Who Stayed: Households Transformed at Home",
        "paragraphs": [
          "The reason enclaves so often looked like societies of men lies in the structure of the migration streams themselves. Indentured recruiters, mine and railroad bosses, and plantation managers wanted young, unattached male workers, and many migrants intended to earn abroad and return home rather than resettle their families. Chinese <span class=\"kt\">sojourners</span>, Indian indentured men, and southern Italian laborers therefore crossed borders in overwhelmingly male numbers. This lopsided flow had consequences on <em>both</em> ends of the route. <strong>Because many migrants were male, women, children, and the elderly often took on new roles and responsibilities in the home societies the migrants left behind.</strong> The departure of husbands and sons did not empty the villages of work to be done, it redistributed that work onto the people who stayed.",
          "In the sending regions, the Pearl River delta of Guangdong, the Punjab and Tamil districts of India, and the villages of the Italian <em>Mezzogiorno</em>, women managed farms, ran family shops, controlled household budgets, and made decisions that custom had normally reserved for men. Contemporaries in south China spoke of \"gold mountain widows,\" wives who lived for years or even decades on remittances from husbands they rarely saw. These women gained real managerial authority, but also heavier burdens: they farmed, raised children alone, cared for aging in-laws, and shouldered the anxiety of depending on money that might suddenly stop arriving. The <span class=\"kt\">remittances</span> that flowed home were thus largely managed by women, making them central economic actors in communities that still described themselves as patriarchal.",
          "Discriminatory laws in the destinations deepened this imbalance. In the United States the <span class=\"kt\">Page Act</span> of 1875 effectively barred Chinese women from immigrating, and later exclusion laws slammed the door further shut. The result was the <span class=\"kt\">bachelor society</span>, Chinatowns with wildly skewed sex ratios, where family formation was nearly impossible and men grew old without wives or children. Policies that shaped households abroad thus reached backward across the ocean, keeping families divided and locking the sending villages into their reliance on distant male earners. Migration and the law together produced a peculiar geography of gender: crowded bachelor quarters in one hemisphere, and villages effectively run by women in the other.",
          "How permanent were these changes? Often the shift proved partial or temporary. When men returned with their savings, older patriarchal expectations could reassert themselves, and a wife's years of authority might quietly contract. Yet the experience left a mark: a generation of women had demonstrably run farms, businesses, and family finances, and the sending economies had come to depend on their competence. The careful AP thinker should therefore treat this as a genuine but <em>uneven</em> change, a real transformation of roles caused by migration, layered on top of enduring continuities in gender norms. The key insight is that a change abroad, namely who left, produced a change at home, namely who governed the household, proof that migration's effects radiated in both directions."
        ],
        "callout": {
          "label": "AP Skill, Causation",
          "html": "The CED explains that <strong>because many migrants were male, women often took on new roles in their home societies</strong>. On the exam, name the causal chain, not just the outcome: recruiters and return-minded migrants produced male-dominated streams, which removed working-age men, which forced women to manage farms, shops, and finances. Graders reward the mechanism that connects cause to effect, and credit you further for noting that the change was frequently only temporary."
        }
      },
      {
        "label": "Continuity and Change, KC-5.4.III.C",
        "heading": "The Backlash: When Race and Nationality Became Law",
        "paragraphs": [
          "The visibility that made enclaves a refuge also made migrants a target. As Chinese, Indian, and southern and eastern European newcomers concentrated in recognizable districts, host populations increasingly cast them as economic threats and racial outsiders. During economic downturns, labor organizers blamed migrants for driving down wages, while the pseudoscience of the era, <span class=\"kt\">scientific racism</span>, supplied a language of biological hierarchy that recast poor and foreign workers as permanently unassimilable. The product was <span class=\"kt\">nativism</span>: an ideology that defined the nation against its immigrants. <strong>Migrants often faced prejudice, and states responded by adopting restrictive and discriminatory immigration policies.</strong> Prejudice against outsiders was nothing new, but the era's innovation was to write it into the machinery of the modern state itself.",
          "In the United States the anti-Chinese movement moved from the street into the statute book. Mobs carried out atrocities such as the 1871 Los Angeles massacre and the 1885 Rock Springs massacre in Wyoming, while the demagogue Denis Kearney and his Workingmen's Party of California made \"The Chinese must go\" a rallying cry. Congress answered with the <span class=\"kt\">Chinese Exclusion Act</span> of 1882, the first federal law in American history to bar a specific nationality both from immigrating and from becoming naturalized citizens. It made race and national origin explicit criteria of exclusion, and it was repeatedly renewed and expanded over the decades that followed. The law did not end the economic usefulness of Chinese labor; it simply criminalized the arrival of more of it while dividing families that were already settled.",
          "Australia followed the same logic to an even more sweeping conclusion. Anti-Chinese agitation on the colonial goldfields, including the Lambing Flat riots of 1860 to 1861, hardened into a national program when the newly federated Commonwealth passed the Immigration Restriction Act of 1901. Rather than name a race outright, the law relied on a <span class=\"kt\">dictation test</span>, officials could require a would-be migrant to write out fifty words in any European language of the official's choosing, to exclude non-Europeans while preserving a veneer of neutrality. Together these measures became known as the <span class=\"kt\">White Australia policy</span>. Similar hostility struck European migrants too: American Know-Nothings had attacked Irish Catholics in the 1850s, and a mob lynched eleven Italians in New Orleans in 1891.",
          "Seen together, the Chinese Exclusion Act and the White Australia policy mark a turning point in how states governed human movement. Prejudice against outsiders was ancient, but for the first time powerful governments built <em>permanent bureaucracies</em>, inspectors, passports, dictation tests, and formal racial categories, to sort migrants by nationality and race at the border. That is the deep significance for the <strong>Social Interactions and Organization</strong> theme: migration did not merely create new communities and new household roles, it provoked host societies to redefine who belonged to the nation and to encode that definition in law. The backlash was as much a product of the age of migration as the enclaves themselves, the same movement of peoples that built the diaspora also hardened the border against it."
        ],
        "callout": {
          "label": "AP Skill, Argumentation",
          "html": "The learning objective asks you to explain <strong>how and why new patterns of migration affected society from 1750 to 1900</strong>. A top-scoring argument links cause to consequence: labor competition and scientific racism (the why) produced laws like the <strong>Chinese Exclusion Act and the White Australia policy</strong> (the how). Strengthen it with a complication, Chinese labor remained economically valuable even as it was legally excluded, to display the historical complexity graders reward."
        }
      }
    ],
    "takeaway": "Topic 6.7 is one story told in three places. Abroad, migrants built <span class=\"kt\">ethnic enclaves</span>, Chinatowns, Indian temple communities, Irish parishes, Little Italys, knit back into their homelands by chain migration and remittances. At home, male-dominated departure handed women new authority over farms, shops, and finances, a real if often temporary shift. And in the destinations, nativism and scientific racism drove states to write prejudice into law, from the Chinese Exclusion Act to the White Australia policy. Communities created, households transformed, borders hardened: migration reorganized social life on both ends of every route. That is the Social Interactions and Organization theme in motion.",
    "questions": [
      {
        "skill": "Evidence Usage",
        "text": "Choose ONE diaspora community from the reading, Chinese, Indian, Irish, or Italian, and describe at least two specific institutions its members built in their new home. What do these institutions reveal about how migrants transplanted their culture and sustained ties to their homeland?"
      },
      {
        "skill": "Causation",
        "text": "Explain how male-dominated migration streams changed the roles of women in ONE sending society (such as south China, India, or southern Italy). Why did the departure of working-age men reshape gender roles at home, and why was that change often only temporary?"
      },
      {
        "skill": "Argumentation",
        "text": "Make a defensible claim about why states such as the United States and Australia adopted restrictive immigration laws in this era. Then identify one piece of evidence, for example, the continued economic value of Chinese labor, that complicates or qualifies your argument."
      }
    ]
  },
  "6.8": {
    "deck": "A synthesis reading: how to reason about the causes and effects of imperialism from 1750 to 1900, separating deep causes from triggers, comparing effects across regions, and weighing lasting change against stubborn continuity.",
    "skillTags": [
      "Causation",
      "Continuity and Change",
      "Argumentation"
    ],
    "support": {
      "beforeYouRead": "As you read, hold two questions in mind at once. (1) <strong>Causes</strong>, separate the long-term, structural driver of imperial expansion (industrial capitalism) from the immediate triggers (great-power rivalry) and the mere enablers (technology). (2) <strong>Effects</strong>, sort empire's consequences into economic, demographic, and political, and notice how differently they landed from one region to the next. For every example, ask a third question: <strong>significance</strong>, how broad, how durable, and how transformative was this effect?",
      "readingTarget": "By the end you should be able to explain the relative significance of the effects of imperialism from 1750 to 1900; distinguish long-term from immediate causes, and causation from mere correlation; and marshal specific evidence, the Suez Canal, Indian deindustrialization, indentured migration, the Chinese Exclusion Act, the Sepoy Rebellion, and the Battle of Adwa, to weigh change against continuity across the whole of Unit 6."
    },
    "vocab": [
      "Industrial Capitalism",
      "Scramble for Africa",
      "Berlin Conference",
      "Social Darwinism",
      "Civilizing Mission",
      "Cash-Crop Economy",
      "Suez Canal",
      "Deindustrialization",
      "Indentured Servitude",
      "Chinese Exclusion Act",
      "Sepoy Rebellion",
      "Battle of Adwa",
      "Coerced Labor",
      "Relative Significance"
    ],
    "sections": [
      {
        "label": "Causation, KC-5.1 / KC-5.2",
        "heading": "Why Empires Grew: Sorting Causes from Coincidence",
        "paragraphs": [
          "Historians agree that European empires expanded dramatically between 1750 and 1900, but expansion is not the same as explanation. A strong causation argument begins by separating the deep, structural cause from the surface events that followed it. That structural cause was <span class=\"kt\">industrial capitalism</span>. Britain's factories, and soon those of France, Germany, Belgium, and the United States, devoured raw materials they could not grow at home: raw cotton for Lancashire mills, rubber for tires and insulation, palm oil for machine lubricant and soap, tin for canning. Those same factories flooded the world with cheap manufactured goods that needed buyers. <strong>Industrial states expanded their empires</strong> to secure both the inputs and the markets that industrial production demanded. This is the underlying, long-term cause: it explains not one colony but the entire pattern.",
          "If industrial demand supplied the motive, technology supplied the means, and here students must resist a common error: mistaking an <em>enabling</em> cause for a <em>driving</em> one. The steamship, the railroad, and the telegraph collapsed the time and cost of moving troops, goods, and orders across oceans and continents. Quinine, extracted from cinchona bark, let Europeans survive malaria long enough to push into an African interior that had killed earlier expeditions. Breech-loading rifles and, by the 1880s, the Maxim gun gave small European forces a lethal edge over far larger armies. These tools did not create the hunger for colonies; they lowered its price. Correlation is not causation: steamships and empire rose together, but the ships served an appetite that industrial capitalism had already produced.",
          "Closer to the surface lay the immediate causes, the political rivalries that turned a general appetite into a frantic race. As newly unified Germany and Italy sought status, and as France rebuilt prestige after its 1871 defeat, controlling territory became a measure of national greatness. The result was the <span class=\"kt\">Scramble for Africa</span>, formalized at the <span class=\"kt\">Berlin Conference</span> of 1884–1885, where European powers drew borders across a continent whose peoples were not present. Within roughly two decades, nearly the entire African interior was claimed. These rivalries are proximate causes: they explain the timing and speed of the late-century land grab, but not why industrial powers wanted colonies in the first place. Immediate and long-term causes operate together, and the exam rewards students who name both.",
          "Finally, empire was wrapped in justification. <span class=\"kt\">Social Darwinism</span> misapplied Charles Darwin's biology to human societies, casting European domination as a natural \"survival of the fittest.\" The <span class=\"kt\">civilizing mission</span>, captured in Rudyard Kipling's 1899 phrase \"the white man's burden\", recast conquest as a moral duty to uplift supposedly backward peoples, while pseudo-scientific racial hierarchies ranked humanity and slotted the colonized at the bottom. Students must handle these ideas with care: they were <em>justifications</em> that accompanied and rationalized expansion, not its root cause. Mistaking a justification for a cause is another version of confusing correlation with causation. Ideology made empire feel legitimate to its perpetrators and shaped how it was carried out, but the driving force lay in the industrial economy beneath it."
        ],
        "callout": {
          "label": "AP Skill, Causation",
          "html": "The CED asks you to explain that <strong>industrial states expanded their empires and created new transoceanic relationships</strong>. Top responses distinguish a <em>long-term</em> cause (industrial capitalism's demand for materials and markets) from an <em>immediate</em> cause (great-power rivalry that set off the Scramble for Africa), and refuse to treat enabling technology as the motive. Explain the mechanism; do not merely list steamships and guns."
        }
      },
      {
        "label": "Comparison, KC-5.4 / KC-5.1",
        "heading": "One System, Many Consequences: Effects Across the Colonized World",
        "paragraphs": [
          "Empire's first and most visible effect was to remake colonial economies around export. Across the colonized world, land and labor were redirected into the <span class=\"kt\">cash-crop economy</span>: Egyptian and Indian fields grew cotton for European mills, Malayan estates tapped rubber, and in King Leopold II's Congo Free State, villagers were forced under threat of mutilation to collect wild rubber. To move these commodities, colonizers built infrastructure, but infrastructure aimed at extraction, not local development. Railways in British India ran from interior growing regions to coastal ports rather than knitting local markets together. The <span class=\"kt\">Suez Canal</span>, opened in 1869, cut the sea route from Europe to Asia and became so strategically vital that Britain occupied Egypt in 1882 to control it. The pattern was consistent: colonial economies were reorganized to serve the industrial metropole.",
          "The gains from this system were profoundly uneven, exactly as <strong>industrial capitalism produced uneven gains in standards of living</strong>. India offers the sharpest example. Before British rule it had been the world's leading producer of cotton textiles; British tariffs and mechanized competition drove <span class=\"kt\">deindustrialization</span>, as cheap Lancashire cloth flooded the subcontinent and Indian weavers lost their livelihoods. Wealth flowed toward the metropole while colonized regions supplied raw materials and bought finished goods. When commodity prices swung or harvests failed, colonial populations bore the cost: the late-nineteenth-century famines in India, worsened by export-first policies and official indifference, killed millions. Rising living standards in industrial Europe and stagnation or decline elsewhere were two sides of one integrated system.",
          "Empire and global capitalism also transformed the scale and patterns of human migration. After Britain abolished slavery in its empire in the 1830s, planters turned to <span class=\"kt\">indentured servitude</span> to replace enslaved labor. Millions of workers, overwhelmingly from India and China, signed multi-year contracts and were shipped to plantations and mines across the globe: Indians to the sugar colonies of the Caribbean and to Natal, Mauritius, and Fiji; Chinese to Southeast Asia, Peru, Cuba, and the goldfields and railroads of North America. These movements created lasting diaspora communities far from home. Yet the same era produced racialized backlash: the United States passed the <span class=\"kt\">Chinese Exclusion Act</span> in 1882, and settler societies enacted comparable bans, revealing how migration and exclusion were bound together.",
          "Imperial expansion did not go uncontested, and here effects diverged sharply by region. In 1857 the <span class=\"kt\">Sepoy Rebellion</span> spread across northern India; Britain crushed it but then abolished Company rule, governing India directly through the Crown thereafter, resistance reshaped the colonizer's own institutions. Elsewhere resistance succeeded outright: at the <span class=\"kt\">Battle of Adwa</span> in 1896, Emperor Menelik II's forces defeated an invading Italian army, keeping Ethiopia independent and making it a symbol for later anticolonial movements. In still other places, the shared experience of subjugation forged new political identities, as with the founding of the Indian National Congress in 1885. Comparing these outcomes shows that the <em>same</em> imperial pressure produced conquest in one place, humiliation of the colonizer in another, and the seeds of nationalism in a third."
        ],
        "callout": {
          "label": "AP Skill, Comparison",
          "html": "The CED notes that <strong>empires and global capitalism changed the patterns and scale of migration</strong> and produced <strong>uneven gains in standards of living</strong>. A strong comparative answer explains why the <em>same</em> imperial system produced different effects in different places, deindustrialization in India, indentured diasporas across the Caribbean and Pacific, and successful resistance at Adwa. Name the region-specific factor, not just the shared cause."
        }
      },
      {
        "label": "Continuity and Change, KC-5.3 / KC-5.4",
        "heading": "Weighing the Scales: What Mattered Most, and What Endured",
        "paragraphs": [
          "Faced with this sprawl of effects, a strong synthesis does not simply list everything empire changed. As you weigh <span class=\"kt\">relative significance</span>, the historian's task is to define criteria and then test the evidence against them. Which effects were broadest in reach, which endured the longest, which were most transformative, and which were foundational, that is, which made other effects possible? An effect that touched hundreds of millions and outlasted empire itself outweighs one that was dramatic but local and brief. A rebellion may be vivid, but the quiet, decades-long restructuring of an economy may matter more. Making that standard explicit, rather than quietly assuming it, is what separates a genuine argument from a catalog of facts. The remaining question is how change and continuity balance out across the whole imperial age.",
          "The case for change is powerful. Never before had the world's economies been so tightly integrated into a single system, with raw materials, capital, manufactured goods, and people moving on an unprecedented scale. Industrial technology compressed distance; steamships and telegraph lines bound continents into one market and one information network. The political map was redrawn, most sharply in Africa, where the borders imposed after the Berlin Conference still shape states today. And migration reached a scale earlier centuries could not have imagined, seeding permanent communities on every inhabited continent and reshaping the ethnic makeup of whole societies from Trinidad to Malaya. New administrative states, standardized legal codes, and export-oriented infrastructure knit distant regions into the industrial economy for the first time. By 1900 the structures of a recognizably modern, interconnected world were in place, a genuine and lasting transformation.",
          "Yet much that looked new rested on old foundations. The turn to indentured servitude was itself a continuity: <span class=\"kt\">coerced labor</span> did not end with abolition but changed form, as contracts replaced chains while the underlying practice of extracting cheap, controllable labor endured. The unequal exchange between resource-supplying peripheries and manufacturing cores echoed the mercantile empires of earlier centuries. Extraction, forced cultivation, and the concentration of profit in distant capitals were old imperial habits wearing industrial dress. Even resistance had deep roots, continuing centuries of revolt against outside domination. Recognizing these continuities keeps an argument honest: the years 1750 to 1900 accelerated and rescaled processes that were already underway, rather than inventing them from nothing.",
          "So how should you weigh the scales? A defensible answer commits to a position, perhaps that empire's most significant effect was the creation of an integrated but deeply unequal global economy, and then defends it with criteria and evidence, while acknowledging the strongest counterpoint. You might argue that economic reorganization outweighs political conquest because it touched the most people and outlasted formal empire, then concede that the new national identities forged under colonial rule proved just as durable in the long run. The point is not to prove that empire was \"all change\" or \"all continuity,\" but to judge which effects mattered most and why. That disciplined weighing of causes, effects, and endurance is the core of historical thinking, and the through-line of the entire imperial age from 1750 to 1900."
        ],
        "callout": {
          "label": "AP Skill, Argumentation",
          "html": "The learning objective asks you to <strong>explain the relative significance of the effects of imperialism from 1750 to 1900</strong>. The word <em>relative</em> is the whole task: you must rank, not just describe. A top-scoring response states explicit criteria, reach, duration, transformative power, applies them to specific evidence, and then concedes a strong counterexample. That willingness to weigh competing effects is the complexity the exam rewards."
        }
      }
    ],
    "takeaway": "Topic 6.8 is Unit 6 in a single argument. First, sort the causes: industrial capitalism was the long-term driver, great-power rivalry the immediate trigger, and technology only the enabler, never confuse them. Second, trace the effects and notice how unevenly they landed: cash-crop economies and deindustrialization, indentured diasporas, the Sepoy Rebellion, and the victory at Adwa were all products of one system. Third, weigh significance, rank effects by reach, duration, and transformative power, and hold genuine change against durable continuity. Do that, and you are reasoning like a historian about the whole imperial age from 1750 to 1900.",
    "questions": [
      {
        "skill": "Evidence Usage",
        "text": "Choose ONE specific effect of imperialism from the reading, for example, the deindustrialization of India, the Congo rubber system, indentured migration, or the Battle of Adwa, and use it as evidence to support a claim about how empire reshaped a region. State clearly what your example proves and what it does not."
      },
      {
        "skill": "Causation",
        "text": "Distinguish a long-term cause of imperial expansion from an immediate one, and explain why technology should be treated as an enabling rather than a driving cause. How would confusing these categories lead to a weaker historical argument?"
      },
      {
        "skill": "Argumentation",
        "text": "Make a defensible claim about the relative significance of imperialism's effects: which effect mattered most from 1750 to 1900, and why? State your criteria, defend the claim with evidence from across Unit 6, and identify one continuity that complicates the story."
      }
    ]
  },
  "9.4": {
    "deck": "How the world economy was rewritten after 1900, the turn to free markets, the new global division of labor, and the institutions and corporations that spread free-market rules while old patterns of inequality endured.",
    "skillTags": [
      "Continuity and Change",
      "Causation"
    ],
    "support": {
      "beforeYouRead": "As you read, track two forces at once. (1) <strong>Change</strong>, the turn to economic liberalization, the new geography that split knowledge economies from manufacturing zones, and the rise of global institutions and multinational corporations. (2) <strong>Continuity</strong>, the unequal, profit-driven structure of the world economy and the enduring power of the state. For every example, ask which force it illustrates, and whether it illustrates both at once.",
      "readingTarget": "By the end you should be able to explain the continuities and changes in the global economy from 1900 to the present; deploy specific evidence, Reagan, Thatcher, Deng Xiaoping, Pinochet, the shipping container, the WTO, NAFTA, ASEAN, and named multinationals, to prove a claim; and connect these developments to the ECN thematic focus that societies are shaped by how they produce, exchange, and consume."
    },
    "vocab": [
      "Economic Liberalization",
      "Free-Market Economics",
      "Privatization",
      "Deng Xiaoping",
      "Special Economic Zones",
      "Knowledge Economy",
      "Global Division of Labor",
      "Global Supply Chains",
      "Shipping Container",
      "Multinational Corporation",
      "WTO",
      "NAFTA",
      "ASEAN",
      "Structural Adjustment"
    ],
    "sections": [
      {
        "label": "Continuity and Change, KC-6.3.I.D",
        "heading": "A New Rulebook: The Turn to Free Markets",
        "paragraphs": [
          "For most of the twentieth century, governments across the political spectrum assumed the state should actively steer the economy, owning strategic industries, protecting home markets behind tariffs, and managing employment through public spending. The Great Depression and two world wars had made state planning look like common sense. In the late twentieth century that consensus cracked. In a trend <strong>accelerated by the end of the Cold War</strong>, many governments turned toward <span class=\"kt\">economic liberalization</span>: they cut regulation, sold off state-owned enterprises, welcomed foreign investment, and insisted that <span class=\"kt\">free-market economics</span> would allocate resources more efficiently than any planner could. The change was not merely technical, it reflected a new conviction that markets, not ministries, should decide what an economy produced and for whom.",
          "The shift found its loudest champions in the English-speaking world. In the United States, <span class=\"kt\">Ronald Reagan</span>, elected in 1980, cut income taxes, rolled back federal regulation, and signaled a harder line toward organized labor when he fired striking air-traffic controllers in 1981. In Britain, <span class=\"kt\">Margaret Thatcher</span> pursued sweeping <span class=\"kt\">privatization</span>, selling state-owned telephone, gas, water, and steel companies to private shareholders and defeating a year-long coal miners' strike in 1984–85. Both leaders preached that shrinking the state would free enterprise, reward risk-takers, and cure the stagnation and inflation of the 1970s. Their partnership made the vocabulary of deregulation and supply-side economics the dominant economic language of the West, and a model international lenders would soon press on the rest of the world.",
          "The most surprising convert was communist China. Under <span class=\"kt\">Deng Xiaoping</span>, who consolidated power in 1978, China dismantled collective farms, let peasants sell surplus crops, and opened coastal <span class=\"kt\">Special Economic Zones</span> such as Shenzhen, a fishing town that swelled into a skyscraper metropolis within a generation. Foreign firms were invited in to build factories and transfer technology, and private enterprise was allowed to flourish. Yet the Communist Party surrendered none of its political monopoly: the 1989 crackdown at Tiananmen Square showed that economic opening would not be matched by political opening. Deng called the formula <em>socialism with Chinese characteristics</em>. Its lesson reverberated worldwide, a one-party state could master the tools of the global market without loosening its grip on power at home.",
          "Chile drove the point home from the opposite direction. After seizing power in a 1973 coup, the military dictatorship of Augusto Pinochet handed economic policy to the \"Chicago Boys,\" Chilean economists trained in free-market theory, who slashed public spending, privatized industries, and threw the country open to trade, reforms imposed by a regime that jailed and killed its opponents. Placed side by side, Reagan's democracy, Thatcher's parliament, Deng's one-party state, and Pinochet's dictatorship reveal a striking pattern: <em>economic liberalization did not require, and did not necessarily produce, political liberalization.</em> The same economic direction traveled through four utterly different political systems. For historians, that variety is the point: it marks liberalization as a genuinely global wave, not the property of any single ideology."
        ],
        "callout": {
          "label": "AP Skill, Continuity and Change",
          "html": "The CED says liberalization was <strong>\"accelerated by the end of the Cold War.\"</strong> The exam rewards explaining the mechanism, not just naming the date: the collapse of the Soviet model discredited central planning and removed the strongest alternative to capitalism, so governments raced to adopt market policies. Grouping <strong>Reagan, Thatcher, Deng, and Pinochet</strong> in one argument is powerful because it shows the <em>same</em> economic change moving through <em>different</em> political systems, democratic, communist, and authoritarian alike."
        }
      },
      {
        "label": "Causation, KC-6.3.I.E",
        "heading": "A New Geography of Work",
        "paragraphs": [
          "While the rules were changing, so was the map of who did which work. A revolution in information and communications technology, communication satellites, undersea fiber-optic cables, the personal computer, and, by the 1990s, the internet, collapsed the cost of moving information across the planet. The humble <span class=\"kt\">shipping container</span>, standardized after the 1950s, did the same for physical goods, letting dockside cranes load a vessel in hours rather than days. Together these technologies made distance almost irrelevant to coordination. For the first time a single firm could design a product in one country, raise capital in a second, manufacture it in a third, and sell it in a fourth, running the whole operation in near-real time from a headquarters an ocean away.",
          "This produced a new division within the world economy. Some regions specialized in <span class=\"kt\">knowledge economies</span> built on research, design, software, finance, and branding, sectors that rewarded advanced education and paid high wages. Finland's Nokia transformed a paper-and-rubber conglomerate into a mobile-phone giant; Japan led in precision electronics; and California's Silicon Valley became shorthand for the information age itself. What these economies shared was that their most valuable work, writing code, engineering chips, managing global finance, was difficult to relocate and commanded a premium. Increasingly, the wealth generated by ideas and expertise concentrated in a handful of high-income hubs.",
          "At the same time, <strong>industrial production and manufacturing were increasingly situated in Asia and Latin America.</strong> Labor-intensive factory work migrated to lower-wage production zones: garment plants in Bangladesh and Vietnam, electronics assembly across coastal China, and Mexican <em>maquiladoras</em> lined up along the U.S. border. Governments courted these factories with tax breaks and export-processing zones, and workers, often young women leaving the countryside, gained wages and a foothold in the cash economy. But the bargain was harsh: long hours, low pay, weak unions, and dangerous conditions. The <span class=\"kt\">Rana Plaza</span> garment-factory collapse in Bangladesh in 2013, which killed more than 1,100 workers, exposed to the world the human cost stitched into cheap clothing, and the thin leverage of the people who made it.",
          "The result was a <span class=\"kt\">global division of labor</span> knit together by <span class=\"kt\">global supply chains</span>. A single smartphone might combine minerals from Central Africa, chips from Taiwan, a screen from South Korea, and final assembly in China before shipping to a consumer in Europe. This geography was genuinely new in its speed and complexity. Yet its underlying shape, high-value design and profit accumulating in wealthy regions while low-wage extraction and assembly clustered in poorer ones, echoed the core-and-periphery patterns that reached back to the age of empire. The technology was revolutionary; the distribution of who benefited most looked unsettlingly familiar."
        ],
        "callout": {
          "label": "AP Skill, Causation",
          "html": "The CED states that <strong>\"industrial production and manufacturing were increasingly situated in Asia and Latin America.\"</strong> A strong answer explains <em>why</em>, not just <em>that</em>: information technology made it possible to coordinate production across oceans, and large wage differences made it profitable to do so. Technology is the enabling cause; cost is the driving cause. Name both, and reach for complexity by weighing the trade-off workers accepted: new income against low pay and real danger."
        }
      },
      {
        "label": "Continuity and Change, KC-6.3.II.B",
        "heading": "New Rules, Old Patterns",
        "paragraphs": [
          "As free-market ideas spread, new institutions arose to write and enforce them on a global scale. The <span class=\"kt\">World Trade Organization</span> (WTO), founded in 1995 to succeed the older GATT, set common rules for trade and created a forum to settle disputes between nations. Regional agreements multiplied the pattern: <span class=\"kt\">NAFTA</span> knit together the economies of Canada, Mexico, and the United States in 1994, while <span class=\"kt\">ASEAN</span> deepened economic cooperation across Southeast Asia. These bodies lowered barriers and expanded trade dramatically, but they also exposed communities to sudden foreign competition and handed distant negotiators real power over local livelihoods, fueling sharp debate about who actually wrote the rules of globalization.",
          "Alongside these institutions rose the <span class=\"kt\">multinational corporation</span> as a central actor in world affairs. Firms such as the Swiss food giant Nestlé, the Japanese automaker Nissan, and India's Mahindra and Mahindra ran production and sold goods across dozens of countries at once, organizing supply chains that no single government fully controlled. The largest multinationals commanded annual revenues greater than the entire economies of many of the nations that hosted their factories. That scale gave private corporations genuine leverage over public policy, the ability to bargain over taxes, shape labor rules, and threaten to relocate if a government's demands grew inconvenient.",
          "Yet the state did not disappear, as some enthusiasts of globalization had predicted. Governments still controlled currencies, wrote labor and environmental law, levied tariffs, and policed investment. When heavily indebted nations sought emergency loans, lenders such as the International Monetary Fund attached strict conditions, <span class=\"kt\">structural adjustment</span> programs that demanded currency devaluation, subsidy cuts, and privatization in exchange for credit. Far from erasing government, globalization often turned the state into the arena where citizens, corporations, and foreign lenders fought over who would gain from integration and who would shoulder its risks. Power was redistributed, not dissolved.",
          "This is where the topic's central tension lives. The <em>machinery</em> of the world economy changed dramatically after 1900, new technologies, new institutions, and a wholly new geography of work. But the <em>deep pattern</em> displayed a stubborn <span class=\"kt\">continuity</span>: the global economy remained profoundly unequal and driven by the pursuit of profit, with wealth concentrating in some regions while economic risk fell hardest on workers and poorer nations. The strongest AP argument refuses to pick just one story. It weighs the genuine transformations against that durable continuity, recognizing that a smartphone assembled by a low-wage worker for a distant corporation is, at once, something brand-new and something very old."
        ],
        "callout": {
          "label": "AP Skill, Argumentation",
          "html": "The learning objective asks you to explain <strong>continuity AND change</strong> in the global economy from 1900 to the present. A top-scoring response names a specific change, the WTO setting global trade rules where none existed, <em>and</em> a specific continuity, unequal exchange inherited from the imperial era, and explains how both are true at the same time. Holding both in a single argument, rather than listing one and forgetting the other, is the mark of the complexity the exam rewards."
        }
      }
    ],
    "takeaway": "Topic 9.4 is one argument in three moves. First, the rulebook changed: after the Cold War, Reagan, Thatcher, Deng Xiaoping, and Pinochet drove free-market liberalization across four very different political systems. Second, the map of work changed: information technology and the shipping container split the globe into high-wage knowledge economies and low-wage manufacturing zones. Third, the rules went global, the WTO, NAFTA, ASEAN, and multinational corporations, even as states kept real power and the old pattern of unequal exchange survived. Change in the machinery; continuity in who wins. That is Economic Systems, from 1900 to today.",
    "questions": [
      {
        "skill": "Evidence Usage",
        "text": "Choose ONE leader, Reagan, Thatcher, Deng Xiaoping, or Pinochet, and describe the specific free-market policies they pursued. What does your example reveal about the claim that economic liberalization could take hold under very different political systems?"
      },
      {
        "skill": "Causation",
        "text": "Explain how the revolution in information and communications technology reshaped the global division of labor after 1970. Why did knowledge-intensive work and labor-intensive manufacturing end up concentrated in different regions of the world?"
      },
      {
        "skill": "Argumentation",
        "text": "Make a defensible claim about what changed AND what stayed the same in the global economy from 1900 to the present. Then identify one piece of evidence that complicates or qualifies your argument."
      }
    ]
  },
  "9.5": {
    "deck": "How activists after 1900 turned a new language of universal rights into pressure on states, opening doors of education, politics, and law, while inherited categories of race, class, gender, and global inequality proved stubbornly durable.",
    "skillTags": [
      "Continuity and Change",
      "Causation",
      "Argumentation"
    ],
    "support": {
      "beforeYouRead": "As you read, track three kinds of reform and their limits. (1) <strong>New rights-based language</strong>, the vocabulary activists used to attack old assumptions about race, class, gender, and religion. (2) <strong>Expanding access</strong>, how education, political participation, and professional roles became more inclusive, and where they did not. (3) <strong>Protest against global inequality</strong>, movements that linked local harm to worldwide systems. For every case, ask what was challenged and what survived unchanged.",
      "readingTarget": "By the end you should be able to explain how social categories, roles, and practices were both maintained and challenged after 1900; use specific evidence, the Universal Declaration of Human Rights, Negritude, liberation theology, global feminism, the end of apartheid, caste reservation, and the Green Belt Movement, to support a claim; and connect these developments to the SIO thematic focus, which holds that how a society groups its members and governs their interactions shapes its political, economic, and cultural institutions."
    },
    "vocab": [
      "Universal Declaration of Human Rights",
      "Rights-Based Discourse",
      "Negritude",
      "Liberation Theology",
      "Global Feminism",
      "CEDAW",
      "Women's Suffrage",
      "Female Literacy",
      "Voting Rights Act",
      "Apartheid",
      "Caste Reservation",
      "Green Belt Movement",
      "Greenpeace",
      "Fair Trade"
    ],
    "sections": [
      {
        "label": "Continuity and Change, KC-6.3.III.i",
        "heading": "Rights Become a Global Language",
        "paragraphs": [
          "In December 1948, in the shadow of the Second World War and the Holocaust, the newly formed United Nations adopted the <span class=\"kt\">Universal Declaration of Human Rights</span>. Drafted by a committee chaired by Eleanor Roosevelt, it proclaimed that all people are \"born free and equal in dignity and rights\" and entitled to those rights \"without distinction of any kind\", race, sex, religion, or class. That claim was radical. For centuries, most societies had organized themselves around the opposite assumption: that people belonged to fixed and unequal categories. The Declaration did not overturn those hierarchies by itself, but it planted a <strong>rights-based discourse</strong> that activists everywhere could pick up and turn against their own governments.",
          "The power of the Declaration lay in what it made sayable. A colonized subject, a disenfranchised woman, or a member of a persecuted minority could now frame a local grievance in a language the wider world claimed to accept. Yet the document carried a built-in limit that students must grasp: a declaration does not enforce itself. It named rights without creating any court or army to guarantee them. This gap, between rights proclaimed and rights delivered, became the central drama of the century. Activists used the Declaration less as a finished achievement than as a lever, a moral standard against which they could measure, and shame, states that fell short of their own stated ideals.",
          "Rights language also fused with older cultural and religious identities to sharpen its edge. The <span class=\"kt\">Negritude</span> movement, launched in 1930s Paris by writers such as Aimé Césaire of Martinique and Léopold Sédar Senghor of Senegal, rejected the colonial insistence that African culture was inferior and instead affirmed Black identity as a source of pride and political claim. Senghor would go on to become the first president of independent Senegal, carrying that cultural pride into the politics of decolonization. Decades later in Latin America, <span class=\"kt\">liberation theology</span>, articulated by the Peruvian priest Gustavo Gutiérrez in his 1971 book of that name, read Christianity as a demand for a \"preferential option for the poor,\" turning the Catholic Church, in some regions, into a defender of the landless and oppressed rather than of established elites. Figures such as Archbishop Óscar Romero of El Salvador, assassinated in 1980 for denouncing state violence, showed how dangerous that reinterpretation of religion could be.",
          "Meanwhile <span class=\"kt\">global feminism</span> carried rights language into the most intimate corners of social organization. Feminists across many societies challenged legal and customary restrictions on women's education, work, property, political voice, and control over their own bodies. The United Nations declared a Decade for Women beginning in 1975, adopted the convention known as <span class=\"kt\">CEDAW</span> in 1979, often called an international bill of rights for women, and hosted a landmark world conference in Beijing in 1995, where delegates from across the globe insisted that \"women's rights are human rights.\" What made this movement genuinely global was that activists in very different societies could invoke the same standard while adapting it to their own legal and cultural battles. Taken together, Negritude, liberation theology, and global feminism show a single pattern: <em>the abstract vocabulary of universal rights was translated into distinct struggles</em>, each aimed at an old assumption about who counted as fully human and fully equal."
        ],
        "callout": {
          "label": "AP Skill, Continuity and Change",
          "html": "The CED states that <strong>rights-based discourses \"challenged old assumptions about race, class, gender, and religion.\"</strong> On the exam, do not simply list movements, show the assumption each one attacked. Negritude challenged racial hierarchy, feminism challenged gender roles, liberation theology reread religion as a claim for the poor. Naming the <em>specific</em> assumption a movement targeted is what turns a description into an analysis of change over time."
        }
      },
      {
        "label": "Causation, KC-6.3.III.ii",
        "heading": "Doors Open, But the Road Stays Rough",
        "paragraphs": [
          "The most visible result of a century of reform was a genuine widening of access to public life. Political participation expanded first: New Zealand had granted <span class=\"kt\">women's suffrage</span> as early as 1893, the United States followed with the Nineteenth Amendment in 1920, and across the twentieth century women in most states won the vote and, eventually, the right to hold office. This was a real change in the norms governing who could belong to the political community. Where women had once been defined as dependents represented by men, they increasingly stood as citizens in their own right, a shift that slowly reshaped legislatures, courts, and the assumptions behind them.",
          "Access to knowledge widened alongside access to the ballot. Rising <span class=\"kt\">female literacy</span> and expanding university enrollment opened professional roles, in medicine, law, science, and government, that had once been closed to women and to the poor. Yet the pattern was uneven, and that unevenness is itself the point. In many regions girls' literacy still lagged behind boys', the highest professional ranks remained disproportionately male, and access often tracked wealth: families with money could seize new opportunities that families without it could not. A woman might now earn a university degree and still find the top of her profession blocked by hiring practices, unequal pay, and the assumption that public leadership was a man's domain. Formal inclusion, in other words, expanded faster than lived equality, a distinction the exam expects you to hold firmly in view.",
          "Law also moved against entrenched racial hierarchy, though social practice trailed behind. In the United States, landmark civil-rights legislation, the Civil Rights Act of 1964 and the <span class=\"kt\">Voting Rights Act</span> of 1965, dismantled the legal architecture of segregation and Black disenfranchisement, yet economic inequality and everyday discrimination persisted long after the statutes passed. In South Africa, the system of <span class=\"kt\">apartheid</span> that had organized society by race since 1948 finally collapsed with Nelson Mandela's release in 1990 and the first fully democratic elections in 1994. Mandela, imprisoned for twenty-seven years, became the country's first democratically elected president. Formal racial rule ended; the deep gap in wealth, land, and opportunity that decades of segregation had created did not vanish with it.",
          "India offers a striking case of the state itself engineering inclusion. Under a constitution shaped by the Dalit leader B. R. Ambedkar, India adopted <span class=\"kt\">caste reservation</span>, reserving seats in legislatures, government jobs, and universities for groups historically excluded by the caste order, and later extended these quotas to additional disadvantaged castes. Reservation used public policy deliberately to widen access for the oppressed. Across all these cases the lesson is consistent and testable: <em>reform frequently changed the law faster than it changed social practice.</em> Because inclusion on paper outran equality in life, continuity and change coexisted, which is exactly why continuity must be part of the historical explanation, not treated as its failure."
        ],
        "callout": {
          "label": "AP Skill, Causation",
          "html": "The CED says that <strong>\"access to education and participation in new political and professional roles became more inclusive in terms of race, class, gender, and religion.\"</strong> A strong causal answer explains <em>why</em> legal inclusion did not automatically produce equality: statutes can be changed by a vote, but inherited wealth, custom, prejudice, and institutional practice change slowly. Distinguish the cause of formal change from the causes of persistent inequality, naming both is what earns the point."
        }
      },
      {
        "label": "Argumentation, KC-6.3.II.C",
        "heading": "When Reform Confronts the Global System",
        "paragraphs": [
          "Reform after 1900 was not only about who could vote or attend school; it was also about who paid the costs of a tightly integrated world economy. As trade, industry, and consumption knit the globe together, the environmental and economic damage they produced fell unevenly, often heaviest on the poor, on colonized and formerly colonized peoples, and on regions far from where the profits were counted. A wave of movements arose to protest exactly this <strong>inequality of the environmental and economic consequences of global integration</strong>, and their signature move was to connect a local harm to the worldwide system that produced it. Where earlier reformers had fought discrimination within a nation, these campaigns increasingly organized across borders, because the systems they opposed, trade, industry, resource extraction, were themselves global.",
          "<span class=\"kt\">Greenpeace</span>, founded in 1971 in Vancouver, pioneered the transnational environmental campaign. It sailed into nuclear test zones, confronted whaling fleets on the open ocean, and used dramatic, media-ready protest to make distant environmental harm visible to publics that would never otherwise see it. When French agents sank its flagship, the Rainbow Warrior, in Auckland harbor in 1985, the incident only confirmed the group's argument that powerful states and industries would go to great lengths to protect the profits behind environmental destruction. Greenpeace showed that a private movement could operate across borders to pressure governments and corporations that answered to no single electorate, building a global constituency for the environment where none had existed before.",
          "In Kenya, <span class=\"kt\">Wangari Maathai</span> tied environmental repair directly to social justice. The <span class=\"kt\">Green Belt Movement</span> she founded in 1977 paid rural women to plant trees, restoring degraded land while giving them income and standing in their communities. Maathai's work steadily broadened into a challenge to the ruling regime's seizure of public land for the benefit of political elites, linking ecology, women's economic roles, and democratic accountability in a single struggle. Her arrests and confrontations over sites like Nairobi's Uhuru Park dramatized how environmental questions were really questions about power. In 2004 she became the first African woman to win the Nobel Peace Prize.",
          "Economic reformers pressed the same logic onto trade itself. The <span class=\"kt\">fair trade</span> movement, organized internationally through bodies such as the World Fair Trade Organization, argued that farmers and artisans in poorer countries received far too small a share of the value of coffee, cocoa, and other commodities they produced. By guaranteeing better prices and standards, fair trade tried to rewrite the rules of exchange in favor of producers rather than distant buyers. Across Greenpeace, the Green Belt Movement, and fair trade, one argument recurs, and it ties the whole topic to the SIO theme: <em>the way a global society organizes production and distributes power shapes who benefits and who bears the harm</em>, and reform movements insisted those arrangements could be challenged and remade."
        ],
        "callout": {
          "label": "AP Skill, Argumentation",
          "html": "The CED states that <strong>\"movements throughout the world protested the inequality of the environmental and economic consequences of global integration.\"</strong> A top-scoring argument does more than name a movement, it explains the <em>connection</em> the movement drew between a local harm and the global system, as Maathai linked tree planting to land power and democracy. To show complexity, pair a genuine challenge with a persisting continuity: reformers reshaped the debate, yet global inequality endured."
        }
      }
    ],
    "takeaway": "Topic 9.5 is one argument in three acts. First, activists forged a new language: the Universal Declaration of Human Rights, Negritude, liberation theology, and global feminism turned universal rights into weapons against old assumptions about race, class, gender, and religion. Second, doors opened, suffrage, rising female literacy, U.S. civil-rights law, the end of apartheid, and caste reservation widened access, yet inclusion on paper outran equality in life. Third, movements like Greenpeace, the Green Belt Movement, and fair trade attacked the uneven costs of global integration. Categories were challenged everywhere; many were also maintained. How a society groups its members and governs their interactions still shaped its institutions, the heart of Social Interactions and Organization.",
    "questions": [
      {
        "skill": "Evidence Usage",
        "text": "Choose ONE rights-based discourse, the Universal Declaration of Human Rights, Negritude, liberation theology, or global feminism, and describe specifically how it challenged an old assumption about race, class, gender, or religion. What does your example reveal about how activists used the language of universal rights?"
      },
      {
        "skill": "Causation",
        "text": "The Civil Rights Act of 1964, the end of apartheid, and caste reservation all changed the law, yet inequality persisted afterward in each case. Explain why formal or legal inclusion did not automatically produce lived equality. What causes made social practice change more slowly than the law?"
      },
      {
        "skill": "Argumentation",
        "text": "Make a defensible claim about how social categories, roles, and practices were BOTH challenged AND maintained in the world after 1900. Support it with specific evidence from the reading, then identify one example that complicates or qualifies your argument."
      }
    ]
  },
  "9.6": {
    "deck": "How new media, global spectacles, and worldwide brands after 1900 spread culture across borders, producing not one identical world culture, but a web of shared forms that audiences everywhere made their own.",
    "skillTags": [
      "Causation",
      "Comparison",
      "Continuity and Change"
    ],
    "support": {
      "beforeYouRead": "As you read, track three things. (1) <strong>Technology</strong>, the media and platforms (radio, film, satellite, the internet) that made culture move faster and farther. (2) <strong>Circulation</strong>, the artists, institutions, and corporations that carried cultural forms across borders. (3) <strong>Reinterpretation</strong>, the ways audiences translated global forms through their own language, religion, class, and national memory. For every example, ask: is this evidence of a single global culture, or of many connected cultures?",
      "readingTarget": "By the end you should be able to explain how and why globalization changed culture over time; use specific evidence, reggae, Bollywood, the BBC, the World Cup, the Olympics, social media, Coca-Cola, Toyota, and Alibaba, to prove a claim; and connect these developments to the CDI thematic focus that ideas and beliefs shape how groups see themselves, and that interactions among societies carry cultural consequences."
    },
    "vocab": [
      "Globalization",
      "Reggae",
      "Bob Marley",
      "Rastafari",
      "Bollywood",
      "BBC",
      "Satellite Television",
      "World Cup",
      "Olympic Games",
      "Social Media",
      "Cultural Hybridity",
      "Coca-Cola",
      "Toyota",
      "Alibaba"
    ],
    "sections": [
      {
        "label": "Causation, KC-6.3.IV.i",
        "heading": "Signals Across Borders",
        "paragraphs": [
          "For most of human history, culture traveled only as fast as the fastest ship or the slowest caravan. A song, a story, or a style could take years to cross an ocean, and often never made the trip at all. The twentieth century shattered that limit. Radio, film, sound recordings, television, communication satellites, and finally the internet collapsed the cost and the time of moving culture across the planet, turning what had been a trickle into a flood. The <strong>political and social changes of the twentieth century led to changes in the arts</strong>, decolonization, mass migration, civil-rights struggles, and the Cold War all gave artists new subjects and new audiences. In the second half of the century <span class=\"kt\">globalization</span> pushed popular and consumer culture onto a genuinely worldwide stage. Technology did not create the ideas people wanted to share, but it made sharing them across borders cheap, fast, and constant, and that acceleration is the engine behind everything else in this topic.",
          "Consider <span class=\"kt\">reggae</span>. It emerged in Jamaica in the late 1960s, growing out of the earlier ska and rocksteady styles and carrying the island's history of slavery, poverty, and racial injustice in its lyrics. Through the <span class=\"kt\">Rastafari</span> movement, a religion born in Jamaica in the 1930s, it fused music with faith and political protest, giving voice to the descendants of enslaved Africans in a former British colony. Then it went global: records, radio play, the migration of Caribbean people to Britain and North America, and relentless touring carried it far beyond the island. <span class=\"kt\">Bob Marley</span>, who died in 1981, became its most famous voice, and songs like \"Get Up, Stand Up\" and \"Redemption Song\" turned a specifically Jamaican sound into an international language of resistance. Anti-apartheid activists in South Africa, Indigenous rights movements, and disaffected youth across Europe all adopted it, listeners heard their own struggles inside music born from someone else's history.",
          "Film followed the same path. <span class=\"kt\">Bollywood</span>, the Hindi-language film industry centered in Mumbai, grew into the most prolific film industry on earth, releasing more titles each year than Hollywood and selling billions of tickets. Its signature blend of melodrama, spectacle, and elaborate song-and-dance numbers reached far beyond India, serving huge diaspora audiences in the Persian Gulf, Britain, East Africa, and Southeast Asia who used the films to stay connected to a homeland many had left behind. Its style influenced filmmakers well outside South Asia, and its stars became celebrities in countries where Hindi was not spoken. A cultural form rooted in one national tradition became a shared reference point for millions of viewers who had never set foot in India, proof that the flow of global culture was never a simple one-way current running out of the United States.",
          "Behind these flows stood powerful broadcasting institutions. The <span class=\"kt\">BBC</span>, founded in 1922, circulated news and entertainment across Britain's former imperial networks and, through its overseas service, to listeners on every continent, often becoming the most trusted source of information in places where local media were censored. Institutions like it did not merely transmit signals; they made editorial choices about which voices reached global audiences and which did not, giving a handful of broadcasters, studios, and record labels enormous power to shape what the world saw and heard. The result was a media system in which a Jamaican rhythm, an Indian film, and a British news bulletin could all become part of daily life thousands of miles from where they were made, the first act in the making of a global culture, and a reminder that cultural globalization always had gatekeepers."
        ],
        "callout": {
          "label": "AP Skill, Causation",
          "html": "The CED states that in the twentieth century <strong>\"popular and consumer culture became more global.\"</strong> On the exam, explain the mechanism, not just the outcome: new media technologies, recordings, satellite broadcasting, the internet, collapsed the cost and time of moving culture, while migration and touring carried it in person. Technology is the <em>enabling</em> cause; human networks are the <em>carrying</em> cause. A strong causal answer names both, rather than simply asserting that culture \"spread.\""
        }
      },
      {
        "label": "Comparison, KC-6.3.IV.ii",
        "heading": "Shared Spectacles, Different Meanings",
        "paragraphs": [
          "If media let culture cross borders, global spectacles let the whole world watch the same thing at the same moment. International sport became the clearest example. The <span class=\"kt\">World Cup</span>, first held in Uruguay in 1930, and the modern <span class=\"kt\">Olympic Games</span>, revived by Pierre de Coubertin in Athens in 1896, grew from modest gatherings into planetary events. <span class=\"kt\">Satellite television</span> was the turning point: a single match or opening ceremony could now be watched simultaneously by billions of people in hundreds of languages. <strong>Arts, entertainment, and popular culture increasingly reflected the influence of a globalized society</strong>, and nothing reflected it more vividly than a stadium event carried live into living rooms on every continent.",
          "Yet these spectacles never erased national identity, they intensified it. Fans watched as members of a global audience and as citizens rooting for their own flag, and the events became stages for political meaning. The 1936 Berlin Olympics were a showcase for Nazi propaganda; at the 1968 Mexico City Games, American sprinters Tommie Smith and John Carlos raised gloved fists for civil rights; and the 1980 Moscow Games were hollowed out by a Western boycott. Global competition, in other words, ran on national feeling. The spectacle was shared, but the loyalties and grievances people brought to it were anything but uniform.",
          "The twenty-first century added a new layer with <span class=\"kt\">social media</span>. Earlier media let audiences receive culture; platforms that emerged in the 2000s let ordinary users produce and distribute it too. A fan in Lagos or Lima could now upload a clip, remix a song, or launch a trend that reached millions without ever passing through a studio, a network, or a record label. This was a genuine shift in who got to make global culture, and it fed the rise of styles, from Korean pop to viral dance crazes, that spread bottom-up rather than top-down. Yet corporations and states still shaped what spread: platform algorithms decided what was promoted, governments censored or blocked access, and the gap between those online and those offline created a new dividing line. Distribution widened dramatically, but it was never fully free or equal.",
          "The deepest lesson of these shared spectacles is that <em>participation did not make culture identical.</em> Viewers translated the same match, the same broadcast, and the same viral clip through their own language, religion, class, race, and national memory, giving common forms very different meanings. A World Cup final might be a source of postcolonial pride in one country and a commercial entertainment in another; a hit song could be a protest anthem in one place and a dance track in the next. What emerged was therefore not a single flattened world culture but <span class=\"kt\">cultural hybridity</span>, global forms constantly reworked, blended, and repurposed into local ones. This is why the fear of total cultural homogenization has proven too simple: everyone was watching together, but no two audiences were seeing quite the same thing."
        ],
        "callout": {
          "label": "AP Skill, Comparison",
          "html": "The CED says popular culture <strong>\"increasingly reflected the influence of a globalized society.\"</strong> The exam rewards comparison that holds two truths at once: a spectacle like the Olympics created a <em>shared</em> global audience <em>and</em> reinforced <em>distinct</em> national identities. Avoid the trap of arguing that globalization simply produced one homogeneous culture, the sophisticated move is to show similarity (everyone watching) and difference (everyone interpreting differently) in the same argument."
        }
      },
      {
        "label": "Continuity and Change, KC-6.3.IV.iii",
        "heading": "Culture for Sale",
        "paragraphs": [
          "Culture did not only travel as music, film, and sport, it traveled as products. In the second half of the twentieth century, <strong>consumer culture became globalized and transcended national borders</strong>, so that the same goods, logos, and shopping habits appeared in wildly different societies. <span class=\"kt\">Coca-Cola</span>, an American soft drink first sold in 1886, became one of the most recognized symbols on earth, so ubiquitous that critics coined the term \"Coca-colonization\" to describe the worry that American products were overwriting local ways of life. To buy and display certain brands was, increasingly, to take part in a shared global consumer identity.",
          "The Japanese automaker <span class=\"kt\">Toyota</span>, founded in 1937, shows the same pattern from a different direction. Through global production and marketing networks it sold cars on every continent, proving that the flow of consumer culture was never simply from West to rest, Japanese firms, and later Korean and Chinese ones, shaped global tastes just as powerfully. Multinational brands standardized their core identity worldwide while quietly adapting products, flavors, and advertising to local markets. That balance of a uniform global image and tailored local versions is exactly the convergence-plus-hybridity dynamic seen in music and film.",
          "The internet then rebuilt the marketplace itself. <span class=\"kt\">Alibaba</span>, founded in China in 1999 by Jack Ma, and eBay, launched in the United States in 1995, created online platforms where buyers and sellers separated by oceans could find one another and transact directly. Consumer exchange no longer required a physical store, a middleman, or even a shared country; a small manufacturer in one nation could reach households in dozens of others through a single website, and a shopper could buy goods made half a world away without leaving home. That Alibaba rose in China and rivaled American platforms is itself telling, the digital consumer economy was global from the start, not merely an export of the West. These platforms turned globalized consumption from something people watched into something they could do with a few clicks, accelerating the worldwide spread of shared products and symbols.",
          "But access was never evenly distributed. Global consumer culture multiplied the number of shared brands and images, yet who could actually participate remained shaped by income, infrastructure, and political control over the internet. A teenager in Seoul and a farmer in rural Malawi might both recognize the same logos, but only one could readily buy the products or log on to the platform selling them. This is the continuity beneath the change: the <em>tools</em> of consumption transformed completely, but the <em>inequality</em> of who could consume, and who mostly produced for others, echoed far older divisions in the world economy that stretched back to the age of empire. Globalized culture, in the end, connected the planet without making it equal, and that tension, between genuine connection and enduring hierarchy, sits at the heart of Cultural Developments and Interactions after 1900."
        ],
        "callout": {
          "label": "AP Skill, Argumentation",
          "html": "The learning objective asks you to explain <strong>how and why globalization changed culture over time.</strong> A top-scoring argument names a clear change, worldwide brands and online platforms like Coca-Cola, Toyota, and Alibaba creating a shared consumer culture, <em>and</em> a clear continuity, persistent inequality in who could actually participate. Use a specific case as evidence, then push further: explain <em>why</em> convergence and hybridity happened together. Holding change and continuity in one argument is the complexity the exam rewards."
        }
      }
    ],
    "takeaway": "Topic 9.6 is one argument in three acts. First, new media carried culture across borders: reggae, Bollywood, and the BBC turned local traditions into shared global forms. Second, global spectacles let the world watch together while seeing differently, the World Cup, the Olympics, and social media created simultaneous audiences whose loyalties and meanings stayed distinct. Third, culture went on sale: Coca-Cola, Toyota, Alibaba, and eBay spread shared products and symbols worldwide, even as access stayed shaped by wealth and power. The through-line is convergence and hybridity at once, a connected planet, not an identical one. That is Cultural Developments and Interactions after 1900.",
    "questions": [
      {
        "skill": "Evidence Usage",
        "text": "Choose ONE cultural form from the reading, reggae, Bollywood, the World Cup, or a global brand such as Coca-Cola. Describe its specific origins and how it spread, and use that example to prove the claim that a cultural form can be both deeply local and genuinely global at the same time."
      },
      {
        "skill": "Causation",
        "text": "Explain how developments in media and communication technology after 1900 caused popular and consumer culture to become more global. Identify both the technologies that made cultural circulation possible and the human networks, artists, corporations, migrants, that actually carried it across borders."
      },
      {
        "skill": "Argumentation",
        "text": "Make a defensible claim about whether globalization after 1900 produced a single world culture or many connected cultures. Support your claim with specific evidence from the reading, then identify one example, such as audience reinterpretation or unequal access, that complicates or qualifies your argument."
      }
    ]
  },
  "9.7": {
    "deck": "Why so many people fought back against globalization after 1900, not by walling themselves off, but by attacking specific institutions, joining unlikely coalitions, and building homegrown tools to defend local culture inside a connected world.",
    "skillTags": [
      "Causation",
      "Comparison",
      "Argumentation"
    ],
    "support": {
      "beforeYouRead": "As you read, sort every act of resistance into one of three buckets. (1) <strong>Economic critiques</strong>, anti-IMF and anti-World Bank campaigns that targeted debt, austerity, and their human and environmental costs. (2) <strong>Coalition protest</strong>, the Seattle WTO demonstrations, where labor, environmental, and global-justice groups joined forces without sharing identical goals. (3) <strong>Cultural and technological responses</strong>, homegrown platforms like Weibo and movements defending local values against a globalized culture. For each case, ask: what exactly is being resisted, and what alternative is being proposed?",
      "readingTarget": "By the end you should be able to explain the various responses to increasing globalization from 1900 to the present; use specific evidence, the IMF and World Bank, structural adjustment, the 1999 Seattle WTO protests, and China's Weibo, to prove that resistance took many forms; and connect these responses to the CDI thematic focus that ideas and beliefs shape how groups view themselves and their interactions with other societies."
    },
    "vocab": [
      "Globalization",
      "International Monetary Fund",
      "World Bank",
      "Structural Adjustment",
      "Austerity",
      "Conditionality",
      "World Trade Organization",
      "Battle of Seattle",
      "Global Justice Movement",
      "Direct Action",
      "Great Firewall",
      "Weibo",
      "Cultural Hybridity",
      "Localization"
    ],
    "sections": [
      {
        "label": "Causation, KC-6.3.IV.iv",
        "heading": "Not Against the World, But Against the Rules",
        "paragraphs": [
          "It is tempting to picture opponents of <span class=\"kt\">globalization</span> as people who simply wanted to shut the borders and turn back the clock. Most did not. The central insight of this topic is that <strong>responses to rising cultural and economic globalization took a variety of forms</strong>, and the loudest critics usually opposed <em>particular rules, institutions, or distributions of power</em>, not cross-border exchange itself. They wanted trade and finance to operate on different terms, terms that protected workers, farmers, ecosystems, and poor households rather than treating them as costs to be minimized. Many of these activists were themselves deeply international, coordinating across continents by phone, fax, and email. Resistance, in other words, was rarely a retreat into isolation. It was an argument about who globalization was supposed to serve, and about who got to write the rules that governed the flow of money, goods, and jobs across the planet.",
          "Much of that argument fixed on two institutions born at the 1944 Bretton Woods conference: the <span class=\"kt\">International Monetary Fund</span> and the <span class=\"kt\">World Bank</span>. Designed to stabilize the postwar economy, both grew into powerful shapers of policy in the developing world. When newly independent and debt-burdened nations fell into repeated financial crises in the 1980s and 1990s, these lenders offered emergency loans, but attached <span class=\"kt\">conditionality</span>. To qualify, governments had to accept <span class=\"kt\">structural adjustment</span> programs: cut public spending, devalue currencies, privatize state enterprises, remove tariffs, and open their markets to foreign competition and investment. Supporters called this necessary discipline that would restore growth and lure capital. Critics called it a system that let creditors in Washington rewrite the budgets of distant countries and shifted the pain of debt onto the people least responsible for creating it.",
          "The human costs made the critique concrete. <span class=\"kt\">Austerity</span> measures often meant slashing subsidies on food and fuel, freezing public-sector wages, laying off workers, and charging new fees for schooling and health care, burdens that landed hardest on the urban and rural poor. Anti-IMF activists pointed to episodes like Venezuela's 1989 Caracazo, when days of rioting erupted after an IMF-backed package suddenly raised transport and fuel prices; the government's crackdown left hundreds dead. Across Latin America, Africa, and Asia, so-called \"IMF riots\" became a recurring feature of the debt era, evidence that policies negotiated in boardrooms could ignite streets thousands of miles away. By the late 1990s, the transnational Jubilee 2000 campaign, backed by churches, unions, and celebrities, gathered millions of signatures demanding cancellation of the crushing debts owed by the world's poorest countries.",
          "The World Bank drew fire of a different kind. Its large development projects, dams, highways, mines, and power plants meant to modernize economies, sometimes displaced whole communities and flooded farmland and forest in the name of progress. India's Sardar Sarovar dam on the Narmada River became a global symbol of this conflict: the Narmada Bachao Andolan movement organized villagers, activists, and scholars who argued that development planned from distant offices erased local livelihoods, submerged sacred land, and ignored the people it claimed to help. Labor activists added their own charge, that global supply chains rewarded relocating factories to wherever wages were lowest and protections weakest, pitting workers in different countries against one another. Environmentalists warned that the same rules externalized ecological damage onto communities with the least power to refuse. What united these critics was not a hatred of trade but a shared demand that the rules answer to people, not only to markets."
        ],
        "callout": {
          "label": "AP Skill, Evidence Usage",
          "html": "The CED says responses to globalization included <strong>\"anti-IMF and anti-World Bank activism.\"</strong> On the exam, do not stop at naming the institutions, show what critics actually opposed. A strong answer explains that <strong>structural adjustment</strong> loans came with conditions like austerity and privatization, and cites a concrete effect (subsidy cuts, displacement from a World Bank project). Specific evidence earns the point; a vague reference to \"people who disliked globalization\" does not."
        }
      },
      {
        "label": "Comparison, KC-6.3.IV.iv",
        "heading": "Teamsters and Turtles: The Battle of Seattle",
        "paragraphs": [
          "In late November 1999, the <span class=\"kt\">World Trade Organization</span> convened its ministerial conference in Seattle to launch a new round of global trade negotiations. It never got the chance. Tens of thousands of demonstrators, by some estimates more than forty thousand, filled the streets, blockaded intersections, and shut the opening ceremonies down. Police responded with tear gas, pepper spray, and mass arrests; the mayor declared a state of emergency and imposed a downtown curfew; and the talks ultimately collapsed. The event became known as the <span class=\"kt\">Battle of Seattle</span>, and it announced to the world that a broad-based <span class=\"kt\">global justice movement</span> had arrived. For a public that had come to treat expanding trade as inevitable, the images from Seattle were a shock: globalization now had organized, visible, and disruptive opposition.",
          "What made Seattle remarkable was the sheer variety of people who marched together. Labor unions like the Teamsters, worried about manufacturing jobs lost to relocation abroad, joined environmentalists dressed as sea turtles, who protested a WTO ruling that struck down U.S. protections for endangered turtles caught in shrimp nets. The slogan \"Teamsters and Turtles, together at last\" captured the improbable alliance between blue-collar workers and green activists who had long distrusted each other. Human-rights campaigners, small-farmer networks, students, and anti-corporate activists added their voices. Many embraced <span class=\"kt\">direct action</span>, nonviolent blockades and lockdowns organized by networks like the Direct Action Network to physically halt the meeting rather than merely petition it, while others marched peacefully in permitted parades.",
          "Yet the coalition's unity was partly an illusion of the moment. Its members shared opposition to the WTO but often disagreed sharply about what should replace it. Some wanted enforceable labor and environmental standards written directly into trade rules; others, especially voices from the Global South, feared such standards were rich-world protectionism in disguise, a way to keep poorer nations' cheaper exports out of wealthy markets. Still others rejected the WTO's authority altogether rather than seeking to reform it. This tension mirrored the conference itself, where delegations from developing countries resisted an agenda they felt was dictated by the United States and Europe, a reminder that <em>resistance to globalization came from inside the negotiating room as well as from the streets outside it</em>, and that the divisions among reformers were real.",
          "There was also a deep irony at the heart of the protest. Activists condemned corporate-driven globalization, yet they organized through the very global media and communications networks that globalization had built. Cheap air travel brought demonstrators from around the world; email lists and websites coordinated the logistics; and television and the early internet carried images of Seattle around the planet within hours, turning a local demonstration into a worldwide event and inspiring later mobilizations from Washington to Genoa to Cancún. <strong>The media coverage made the protest itself part of the global information system activists criticized.</strong> Dependence on those tools did not weaken the movement so much as reveal how completely globalization now structured even the resistance to it, a paradox that would resurface everywhere people fought the connected world using the connected world's own instruments."
        ],
        "callout": {
          "label": "AP Skill, Causation",
          "html": "The CED treats the anti-globalization coalitions as groups that <strong>\"joined groups with distinct interests.\"</strong> The exam rewards explaining <em>why</em> such different groups converged and <em>why</em> they still disagreed. Say the mechanism: shared opposition to the WTO's power pulled labor, environmental, and justice groups together, while conflicting goals, protections versus market access, pulled them apart. Naming both the cause of unity and the cause of friction shows genuine analysis, not just narration."
        }
      },
      {
        "label": "Argumentation, KC-6.3.IV.iv",
        "heading": "The Great Firewall and the Homegrown Web",
        "paragraphs": [
          "Not all resistance took to the streets. As a globalized consumer culture spread through film, music, brands, fast food, and social media, many societies pushed back by defending or rebuilding their own. Governments promoted local content and language quotas, imposed censorship, and cultivated national platforms as alternatives to the American media and technology giants that dominated the global internet. China offers the clearest case. Behind what observers call the <span class=\"kt\">Great Firewall</span>, an elaborate system of filtering and blocking, the state shut out global services such as Google, Facebook, YouTube, and Twitter. This walling-off was partly about political control, but it also created space, and enormous commercial demand, for homegrown platforms to fill the gap left by the absent foreign brands.",
          "The result was a vast parallel digital ecosystem. <span class=\"kt\">Weibo</span>, a microblogging service launched by the company Sina in 2009, grew into one of China's dominant platforms, later joined by Tencent's messaging-and-payment app WeChat and the search engine Baidu. These were not simply copies of Western apps dropped into a new market. They operated in Chinese, answered to Chinese regulators, tailored their features to local habits, and kept both their users and their advertising revenue inside the national economy. In this sense Weibo represents a form of <span class=\"kt\">localization</span>: a locally developed response to a global technology that preserved language, culture, and state control while still connecting hundreds of millions of people to one another and, selectively, to the wider world.",
          "But the story is double-edged, and that is exactly what makes it a good argument rather than a slogan. The same platforms that expressed national independence also enabled dense state surveillance, commercial harvesting of personal data, and the swift censorship of dissent through keyword filtering and deleted posts. At the same time, Weibo occasionally opened room for genuine public criticism: after the 2011 Wenzhou high-speed rail collision, users flooded the platform with grief and outrage that embarrassed officials and forced a response. A tool built partly to resist foreign cultural and technological power thus became a contested arena of struggle within China itself, capable of both muffling and amplifying ordinary voices, sometimes in the same week.",
          "Cultural resistance elsewhere ran along similar lines. Religious and nationalist movements around the world sometimes framed global consumer culture, its advertising, its sexual openness, its worship of the market, as a threat to community values, faith, and moral tradition, calling for a return to local identity. Yet the response was rarely pure rejection. Far more often it produced <span class=\"kt\">cultural hybridity</span>, new blends of the global and the local, from regional pop music built on international styles, to global fast-food chains reengineering their menus for local tastes, to religious broadcasters using satellite television to spread traditional messages. <strong>States promoted local content, language, censorship, or national platforms in response to outside media power,</strong> and ordinary communities remixed global culture into something recognizably their own. Resistance, adaptation, and creativity, it turns out, were not opposites but different faces of the same global encounter."
        ],
        "callout": {
          "label": "AP Skill, Argumentation",
          "html": "The learning objective asks you to explain the <strong>various responses to increasing globalization.</strong> A top-scoring answer does not treat resistance as one thing. It classifies responses, economic critique (anti-IMF), coalition protest (Seattle), and cultural or technological <strong>localization</strong> (Weibo, the Great Firewall), and supports each with specific evidence. Adding complexity, such as noting that Weibo both resisted foreign platforms <em>and</em> enabled surveillance, is what pushes an argument from solid to excellent."
        }
      }
    ],
    "takeaway": "Topic 9.7 is one argument in three acts. First, critics attacked the rules: anti-IMF and anti-World Bank activists targeted debt, austerity, and structural adjustment, insisting the economy should serve people, not the reverse. Second, they built coalitions: at the 1999 Battle of Seattle, labor, environmental, and global-justice groups shut down the WTO together, even as they disagreed about what should replace it. Third, they defended and remade culture: behind China's Great Firewall, homegrown platforms like Weibo localized a global technology, while religious and nationalist movements answered global consumer culture with rejection and hybridity alike. Resistance was rarely isolation. It was a fight over whose values globalization would carry, the heart of Cultural Developments and Interactions.",
    "questions": [
      {
        "skill": "Evidence Usage",
        "text": "Using a specific example from the reading, explain what anti-IMF or anti-World Bank activists were actually opposing. How does your example show that resistance targeted particular rules and institutions rather than all global exchange?"
      },
      {
        "skill": "Causation",
        "text": "The 1999 Seattle WTO protests brought together groups with very different interests. Explain what caused labor unions, environmentalists, and global-justice activists to unite, and why those same groups also disagreed with one another."
      },
      {
        "skill": "Argumentation",
        "text": "Make a defensible claim about the variety of responses to globalization after 1900, drawing on at least two different types of resistance from the reading. Then identify one piece of evidence, such as Weibo's double-edged role, that complicates or qualifies your claim."
      }
    ]
  },
  "9.8": {
    "deck": "How and why states built a web of international institutions after 1945, the United Nations, its agencies, humanitarian NGOs, and global economic bodies, and why sovereignty survived even as cooperation deepened.",
    "skillTags": [
      "Causation",
      "Continuity and Change",
      "Governance"
    ],
    "support": {
      "beforeYouRead": "As you read, track two forces at once. (1) <strong>Cooperation</strong>, the new institutions states built to keep the peace and solve shared problems: the United Nations, its specialized agencies, humanitarian NGOs, and global economic bodies. (2) <strong>Sovereignty</strong>, the power states refused to surrender, expressed through the veto, reliance on member consent, and the absence of any world army. For every institution, ask which force it advances, and where the two collide.",
      "readingTarget": "By the end you should be able to explain how and why globalization changed interactions among states; use specific evidence, the failure of the League of Nations, the 1945 Charter, the Security Council veto, decolonization, the WHO, and humanitarian NGOs, to support a claim; and connect these developments to the GOV thematic focus that governments obtain, retain, and exercise power in different ways."
    },
    "vocab": [
      "United Nations",
      "League of Nations",
      "Collective Security",
      "UN Charter",
      "General Assembly",
      "Security Council",
      "Veto Power",
      "Permanent Members",
      "Sovereignty",
      "Peacekeeping",
      "Decolonization",
      "World Health Organization",
      "Nongovernmental Organizations",
      "Multinational Corporation"
    ],
    "sections": [
      {
        "label": "Causation, KC-6.3.II.A",
        "heading": "From the Ashes of Two Wars: Why States Built the UN",
        "paragraphs": [
          "The <span class=\"kt\">League of Nations</span>, created in 1920 after the First World War, was history's first attempt to prevent war through a permanent international body. Its architects believed in <span class=\"kt\">collective security</span>, the idea that aggression against one state was the concern of all, and that the combined weight of nations could deter any aggressor. But the League was crippled from the start. The United States, whose president Woodrow Wilson had championed the idea, never joined after the Senate refused to ratify the treaty. The League commanded no army, and its decisions required near-unanimity. When aggression came, it could do little: it failed to stop the Japanese seizure of Manchuria in 1931, the Italian invasion of Ethiopia in 1935, or German rearmament through the decade. By 1939 the League was effectively dead, and a second, even deadlier world war followed. That failure became the founding lesson of the institution that would replace it.",
          "As the Second World War drew to a close, the victorious Allies resolved not to repeat the League's mistakes. Delegates from fifty nations gathered at the 1945 <span class=\"kt\">San Francisco Conference</span> to draft a charter for a new organization. The <span class=\"kt\">United Nations</span> Charter was signed in June 1945 and took effect that October, binding fifty-one founding members. Its preamble announced a sweeping purpose: to <strong>save succeeding generations from the scourge of war</strong>, to reaffirm fundamental human rights, and to promote social progress through cooperation among states. Here was the CED's claim in the founders' own words, a new organization built with the <strong>stated goal of maintaining world peace and facilitating international cooperation</strong>.",
          "Yet the UN was never designed to be a world government. It had no power to tax, no standing army, and no authority to override a member's laws. It depended entirely on member states for money, personnel, and enforcement, a deliberate choice, because sovereign states would never have joined a body that could command them. <span class=\"kt\">Sovereignty</span>, the principle that each state is the final authority within its own borders, remained the bedrock of the system. This is the paradox students must grasp: an organization created to constrain the behavior of states was itself built and controlled by those same states. Its power would rest not on force but on persuasion, legitimacy, moral pressure, and the willingness of governments to cooperate voluntarily, a foundation strong enough to convene the world, but too weak to command it.",
          "The founders drew a subtler lesson as well. The League had failed partly because the most powerful states stood outside it or ignored it. To keep the great powers inside the new system, the UN's designers gave them permanent privileges, a bargain examined in the next section. The organization thus emerged from a specific historical moment: the wreckage of two world wars, the opening of the Cold War between the United States and the Soviet Union, and a hard-won conviction that repeated negotiation, however imperfect, was safer than the alternative. Context shaped every feature of its design."
        ],
        "callout": {
          "label": "AP Skill, Causation",
          "html": "The CED states that <strong>new international organizations, including the United Nations, formed with the stated goal of maintaining world peace and facilitating international cooperation</strong>. On the exam, explain the <em>cause</em>, not just the founding date: the League of Nations had failed and a second world war had killed tens of millions, so states built a stronger body. An answer that names the League's collapse as the driving cause earns more than one that simply reports the UN was created in 1945."
        }
      },
      {
        "label": "Continuity and Change, KC-6.3.II.A",
        "heading": "Equality in One Room, Power in Another",
        "paragraphs": [
          "The UN's structure carried a deep contradiction, a promise of equality bolted onto a hierarchy of power. In the <span class=\"kt\">General Assembly</span>, every member state holds a single vote, from the smallest Pacific island to the largest superpower. This principle of <em>sovereign equality</em> made the Assembly a genuine forum where any nation could be heard, set agendas, and confer legitimacy on ideas that governments alone would never advance. But that equality came with a catch. The Assembly's resolutions are recommendations, not binding law; it can debate, condemn, and pressure, yet it cannot compel a single government to act against its will. The framers had granted symbolic equality precisely because it cost the great powers nothing, the votes that truly bound states were reserved for a smaller, more selective chamber.",
          "Real enforcement power lived in the <span class=\"kt\">Security Council</span>, charged with the primary responsibility for international peace and security. Unlike the Assembly, the Council can issue binding resolutions, impose sanctions, and authorize the use of force. But it is not a body of equals. Five <span class=\"kt\">permanent members</span>, the United States, the Soviet Union (now Russia), the United Kingdom, France, and China, each hold a <span class=\"kt\">veto</span>, the power to block any substantive decision single-handedly. The remaining seats rotate among elected members who wield no such privilege. The veto froze the power realities of 1945 into the permanent architecture of the institution.",
          "During the Cold War, the veto turned the Council into a battleground. The United States and the Soviet Union repeatedly canceled each other's initiatives, and the Council was often paralyzed on the era's gravest crises. In one revealing case, the UN authorized the defense of South Korea in 1950 only because the Soviet delegate was boycotting the Council and could not cast a veto. The feature meant to keep great powers inside the system also handed each of them the ability to shield itself and its allies from collective action, a limit built into the institution by intention rather than by accident.",
          "The one feature that changed dramatically was membership. The UN began with fifty-one states; today it has roughly 193. That growth came from <span class=\"kt\">decolonization</span>, as dozens of Asian and African territories won independence in the decades after 1945, a body once dominated by a handful of Western and allied great powers became a nearly universal forum. Newly independent nations used the General Assembly to press anti-colonial and economic-justice agendas, to condemn apartheid in South Africa, and to give the <strong>Universal Declaration of Human Rights</strong> of 1948 lasting moral weight. The organization the great powers designed for themselves became, over time, a megaphone for the Global South. Here is the topic's core tension: the veto and the great-power hierarchy showed striking <em>continuity</em>, while the membership and its voice underwent profound <em>change</em>, proof that an institution's rules and its realities can drift apart."
        ],
        "callout": {
          "label": "AP Skill, Continuity and Change",
          "html": "The learning objective asks you to <strong>explain how and why globalization changed international interactions among states</strong>. A top answer holds continuity and change together: the Security Council <em>veto</em> preserved 1945's power hierarchy (continuity), while <em>decolonization</em> transformed the General Assembly into a near-universal forum (change). Naming a specific continuity and a specific change in the same argument is the complexity the exam rewards, do not settle for only one."
        }
      },
      {
        "label": "Comparison, KC-6.3.II.A",
        "heading": "Beyond Peacekeeping: Agencies, NGOs, and the Limits of Sovereignty",
        "paragraphs": [
          "The UN's most visible work is <span class=\"kt\">peacekeeping</span>. Beginning with the first armed force deployed during the Suez Crisis in 1956, lightly armed \"blue helmets\", soldiers loaned by member states and wearing the UN's colors rather than their own, have monitored ceasefires, separated combatants, and sometimes protected civilians. But peacekeeping exposes the institution's limits with unusual clarity. Missions require both Security Council authorization and the consent of the host state, and they depend on troops and funding that members choose whether to provide. A peacekeeping force can enter only where a government agrees to let it in, and it can accomplish only what its mandate and its budget allow. When those mandates outran their resources, as in several tragic operations of the 1990s, peacekeepers could not halt the violence they had been sent to witness, a failure that flowed directly from the sovereignty-first design of the whole system.",
          "Beyond soldiers, a web of specialized agencies made international cooperation routine. The <span class=\"kt\">World Health Organization</span> coordinated the campaign that eradicated smallpox by 1980, one of the great achievements in the history of medicine, and a disease that had killed hundreds of millions over the centuries. The UN High Commissioner for Refugees shelters people displaced by war; UNICEF works for children; the World Food Programme fights hunger across crises that no single state could manage alone. Each agency addresses a problem that spills across borders and answers to no one government. These bodies rarely make headlines, but they normalized the habit of states solving shared problems together, meeting year after year to negotiate standards, share data, and pool resources, the quiet, cumulative substance of <strong>facilitating international cooperation</strong> that the CED places at the heart of this topic.",
          "International cooperation was never confined to the UN alone. <span class=\"kt\">Nongovernmental organizations</span>, the International Committee of the Red Cross, Amnesty International, Doctors Without Borders, operate across borders to deliver aid and defend human rights independent of any single government, sometimes shaming the very states that host them. Powerful economic and political institutions took shape alongside them: the International Monetary Fund and World Bank managed global finance and development, the World Trade Organization set common trade rules and settled disputes, and regional bodies such as the European Union pooled sovereignty so deeply that members share a currency and open borders. Even <span class=\"kt\">multinational corporations</span>, some with revenues larger than entire national economies, became global actors that states had to reckon with. The map of world affairs, once drawn almost entirely between governments, now teemed with institutions that governments neither fully owned nor fully controlled.",
          "Together these institutions reveal what globalization did to relations among states. Denser trade, faster communication, and shared dangers made cooperation more necessary than ever, yet states still refused to surrender their <span class=\"kt\">sovereignty</span>. The UN commands no army of its own; the veto can still freeze the Security Council; agencies and peacekeepers act only where governments allow them. The result is a paradox that defines our era: a thickening network of global institutions layered over a world still organized into sovereign states, each guarding its own authority. That unresolved tension between cooperation and control is the essence of governance in a globalized world."
        ],
        "callout": {
          "label": "AP Skill, Comparison",
          "html": "The CED groups the UN with <strong>new international organizations that formed to facilitate international cooperation</strong>. A comparison prompt may ask you to weigh the UN against NGOs or multinational corporations. Note the distinction the exam wants: the UN is built <em>from states</em> and bound by their sovereignty, while NGOs and corporations operate across borders <em>independent</em> of any single government. Explaining that difference earns more than merely listing organizations side by side."
        }
      }
    ],
    "takeaway": "Topic 9.8 is one story in three acts. First, cause: the League of Nations had failed and two world wars had shattered the globe, so in 1945 states built the United Nations to keep the peace. Second, design: the General Assembly promised sovereign equality while the Security Council veto preserved great-power dominance, equality and hierarchy in one building. Third, the wider web: peacekeepers, agencies like the WHO, humanitarian NGOs, and economic bodies such as the IMF and WTO thickened cooperation, even as sovereignty endured. Globalization made states more connected but never less jealous of their own power. That is Governance in the world we live in today.",
    "questions": [
      {
        "skill": "Evidence Usage",
        "text": "Using specific evidence from the reading, the failure of the League of Nations, the 1945 UN Charter, or the founding purposes in its preamble, explain why states created the United Nations after the Second World War. What does your evidence reveal about what the founders wanted the organization to do?"
      },
      {
        "skill": "Causation",
        "text": "Explain how the Security Council veto both caused the paralysis of the Council during the Cold War and reflected the power realities of 1945. Why did the founders build this feature into the institution despite its obvious drawbacks?"
      },
      {
        "skill": "Argumentation",
        "text": "Make a defensible claim about how globalization changed interactions among states through international institutions. Then identify one piece of evidence, the veto, the persistence of sovereignty, or a peacekeeping failure, that complicates or qualifies your claim."
      }
    ]
  },
  "9.9": {
    "deck": "How to weigh a century of dazzling scientific and technological change against the stubborn continuities, state power, inequality, and cultural difference, that never fully gave way, and how to turn that tension into an argument about the extent of transformation since 1900.",
    "skillTags": [
      "Continuity and Change",
      "Argumentation"
    ],
    "support": {
      "beforeYouRead": "Read this synthesis reading with two questions in your hand at all times. (1) <strong>What changed?</strong> Track three threads of transformation, <strong>technology &amp; environment</strong> (communication, transport, energy), <strong>life &amp; population</strong> (agriculture, medicine, fertility), and <strong>culture, rights &amp; structures</strong> (identity, inclusion, consumer culture). (2) <strong>What endured?</strong> For every dazzling change, name the continuity that qualifies it, a border, a price, an unequal access, a persistent state. An extent argument lives in the space between those two questions.",
      "readingTarget": "By the end you should be able to <strong>explain the extent to which science and technology brought change from 1900 to the present</strong>; marshal specific evidence from across Unit 9, the internet, shipping containers, the Green Revolution, antibiotics, birth control, and global consumer culture, to prove a claim; define a criterion for significance before you rank effects; and connect the whole argument to the SYN synthesis focus of evaluating change, continuity, significance, and complexity."
    },
    "vocab": [
      "Shipping Containers",
      "Internet",
      "Cellular Communication",
      "Air Travel",
      "Petroleum",
      "Nuclear Energy",
      "Green Revolution",
      "Norman Borlaug",
      "Vaccines and Antibiotics",
      "Birth Control",
      "Digital Divide",
      "Consumer Culture",
      "Antimicrobial Resistance",
      "Extent of Change"
    ],
    "sections": [
      {
        "label": "Continuity and Change, KC-6.1.I.A",
        "heading": "The World Shrinks, But Not for Everyone",
        "paragraphs": [
          "The defining sensation of the century after 1900 was that distance was dissolving. The CED states that <strong>new communication and transportation modes reduced the problem of geographic distance</strong>, and the evidence is overwhelming. Radio broadcast a single voice to millions in the 1920s and 1930s; the telephone and then <span class=\"kt\">cellular communication</span> put conversation in the pocket; and the <span class=\"kt\">internet</span>, born as the U.S. military's ARPANET in 1969 and opened to the world after Tim Berners-Lee published the World Wide Web in 1991, made near-instant contact across continents ordinary. A message that once traveled by ship for weeks now crossed the planet in the time it takes to press send.",
          "Transportation compressed the map just as radically. <span class=\"kt\">Air travel</span>, accelerated by the jet age and the wide-body Boeing 747 after 1970, turned intercontinental journeys from weeks into hours, reorganizing labor migration, mass tourism, and the global reach of militaries that could now project force across oceans in a day. Even more quietly transformative was Malcom McLean's <span class=\"kt\">shipping containers</span>, first sailed on the Ideal X in 1956. Before the container, loading a ship meant armies of dockworkers hauling crates by hand; the standardized steel box let cranes move cargo in a fraction of the time and cost. That single innovation made it economical to manufacture goods on one side of the world and sell them on the other, knitting national economies into a single circulatory system of supply chains, the physical backbone of everything we now call globalization.",
          "Underneath the movement of people and information ran a revolution in energy. The CED notes that <strong>petroleum and nuclear energy technologies raised productivity and increased material production</strong>. Cheap <span class=\"kt\">petroleum</span> was the master resource of the twentieth century: it powered the cars, planes, and factories, fed the chemical fertilizers behind modern farming, and became the raw material for plastics and synthetics that filled everyday life. So central was oil that the 1973 OPEC embargo, launched by petroleum-exporting states, could throw the entire industrial world into recession overnight. <span class=\"kt\">Nuclear energy</span> promised near-limitless power from tiny amounts of fuel, and delivered new categories of danger, from the 1986 Chernobyl disaster to the 2011 Fukushima meltdown, alongside the long environmental bill of a fossil-fueled civilization now measured in a warming atmosphere. Energy technology raised output enormously, but it also bound human prosperity to escalating environmental risk.",
          "Yet distance collapsed <em>unevenly</em>, and this is where the continuity lives. The same decades that produced the internet also produced the <span class=\"kt\">digital divide</span>: billions of people gained connection while billions more lacked reliable electricity, affordable bandwidth, or the money to buy a device, so a technology in principle available everywhere remained in practice concentrated among the wealthy. Borders often hardened even as bandwidth widened. Passports, visas, tariffs, and checkpoints still decided who could physically move, and governments learned to police the new networks, states erected national firewalls and surveillance systems to filter and monitor the very internet that was supposed to be borderless. The lesson for the synthesis argument is sharp: technology dramatically shrank the world for the connected and the mobile, while leaving the underlying geography of power, infrastructure, and inequality remarkably intact."
        ],
        "callout": {
          "label": "AP Skill, Continuity and Change",
          "html": "The CED says technology <strong>\"reduced the problem of geographic distance.\"</strong> Note the careful word: <em>reduced</em>, not erased. A top answer pairs a genuine change, container shipping making global manufacturing cheap, with the continuity that qualifies it, borders, cost, and unequal infrastructure still controlling access. Holding both at once, rather than declaring the world simply \"borderless,\" is exactly the complexity the exam rewards."
        }
      },
      {
        "label": "Causation, KC-6.1.I.C",
        "heading": "Feeding, Curing, and Reshaping Humanity",
        "paragraphs": [
          "If the first thread reshaped space, the second reshaped life itself, and it may be the deepest change of the century. The CED states that <strong>the Green Revolution and commercial agriculture increased productivity and helped sustain a growing population</strong>. Beginning in Mexico and India in the mid-twentieth century, the agronomist <span class=\"kt\">Norman Borlaug</span> and the institutes behind the <span class=\"kt\">Green Revolution</span> bred high-yield, disease-resistant wheat and rice, such as the celebrated IR8 rice from the Philippines, that multiplied harvests. India, facing predictions of mass famine in the 1960s, instead approached self-sufficiency in grain, and the Green Revolution is credited with feeding perhaps a billion people who might otherwise have starved.",
          "Medicine transformed survival on the same scale. The CED notes that <strong>vaccines and antibiotics increased human survival and longevity</strong>. Alexander Fleming's 1928 discovery of penicillin, developed into a mass-produced treatment during World War II, made once-lethal bacterial infections routinely curable, and a whole family of antibiotics followed. Jonas Salk's polio vaccine (1955) tamed a disease that had paralyzed children by the thousands, and a coordinated global vaccination campaign let the World Health Organization declare smallpox, a killer for millennia, eradicated in 1980, the first disease ever deliberately wiped from the earth. Combined with better sanitation, these <span class=\"kt\">vaccines and antibiotics</span> slashed infant and childhood mortality, the single biggest driver of longer average lives. In many regions life expectancy climbed from the forties into the seventies within one lifetime, a change so vast it reshaped every calculation a family made about work, children, and old age.",
          "Technology even reached into the family. The CED observes that <strong>more effective birth control increased women's control over fertility and contributed to declining fertility rates in much of the world</strong>. The oral contraceptive pill, approved in the United States in 1960 and spreading across much of the world thereafter, let women separate sexuality from childbearing and time their pregnancies with a reliability no earlier method offered. Fertility rates fell sharply, average family sizes shrank, and, freed in part from continuous childbearing, women entered schools, professions, and public life in unprecedented numbers. The demographic consequences ran in two directions at once: rapid population growth as death rates fell, then, in the wealthiest societies, aging and even shrinking populations as birth rates dropped below replacement. That divergence between still-growing and now-graying societies is one of the defining human patterns of the twenty-first century, and it began in part with a pill.",
          "But each gain carried a shadow that qualifies any triumphant story. The Green Revolution deepened dependence on irrigation, chemical fertilizers, pesticides, and purchased commercial seed, draining water tables and squeezing out small farmers who could not afford the new inputs, so that higher yields sometimes came with heavier debt and environmental damage. Overuse of antibiotics, in clinics and in livestock alike, bred <span class=\"kt\">antimicrobial resistance</span>, so that old infections began outrunning the very drugs that had once beaten them, a reminder that a technological victory can decay over time. And access remained brutally unequal: effective HIV/AIDS treatments existed in wealthy countries for years before they reached the hardest-hit regions of sub-Saharan Africa, where the epidemic killed millions who could not obtain the drugs. The transformation of survival was real, foundational, and genuinely demographic, but it was also uneven, costly, and, in places, reversible."
        ],
        "callout": {
          "label": "AP Skill, Causation",
          "html": "The CED credits the Green Revolution and medicine with helping to <strong>\"sustain a growing population\"</strong> and <strong>\"increase human survival and longevity.\"</strong> A strong answer explains the mechanism, higher yields plus antibiotics and vaccines lowered death rates faster than birth rates fell, driving explosive population growth, rather than just listing inventions. Then name a consequence, such as antimicrobial resistance or unequal access, to show you can trace an effect to its second-order cost."
        }
      },
      {
        "label": "Argumentation, KC-6.3.III–IV",
        "heading": "Measuring the Revolution: What Actually Changed?",
        "paragraphs": [
          "The third thread is human self-understanding, rights, identity, and culture. The CED holds that <strong>rights-based discourse challenged old assumptions, while education and political and professional participation became more inclusive</strong>. The Universal Declaration of Human Rights (1948) established a global vocabulary of dignity that movements everywhere could invoke against their own governments. Decolonization dismantled European empires and multiplied sovereign nations across Asia and Africa; civil-rights and anti-apartheid struggles attacked legal racial hierarchy; feminist movements won the vote, property rights, and access to work; and later campaigns pressed for the rights of workers, indigenous peoples, and LGBTQ people. Mass education expanded on every continent, literacy climbed, and groups once shut out, women, colonized peoples, ethnic and religious minorities, moved into universities, professions, and legislatures. The <em>idea</em> of who counted as a full human being with claims on the state widened dramatically over the century.",
          "Culture, too, went global. The CED notes that <strong>arts, entertainment, popular culture, and consumer culture increasingly reflected a globalized society and crossed national borders</strong>. Hollywood and Bollywood films, televised events like the World Cup and the Olympics, and later K-pop and streaming platforms reached audiences on every continent, while brands like Coca-Cola and McDonald's turned <span class=\"kt\">consumer culture</span> into a shared global language of logos and tastes. Yet this was never simple homogenization. Local societies adapted, remixed, and sometimes fiercely resisted imported culture, dubbing and reworking foreign media, blending global styles with regional traditions, and mounting nationalist or religious backlashes against what they saw as cultural invasion. The result was a genuinely globalized cultural marketplace in which local and global identities negotiated with each other rather than one simply erasing the other.",
          "Against all this genuine change stands the continuity that any honest synthesis must weigh. States did not wither away. They responded to the economic challenges of the century in a variety of ways, through planning, welfare, liberalization, or authoritarian control, but through all of it, borders, nationalism, standing militaries, and vast economic inequality between and within nations persisted through every technological revolution. Rights were proclaimed in grand declarations yet unevenly enforced, and the gap between promise and reality remained wide for the world's poor, colonized, and marginalized. The wealth generated by new technology concentrated in some regions and classes while the risks, dangerous factory work, environmental damage, financial shocks, fell disproportionately on workers and poorer nations, echoing patterns of unequal exchange that reach back to the age of empire. The structures of power proved far more durable than the tools that operated within them.",
          "This is why the learning objective asks you to judge the <span class=\"kt\">extent of change</span>, not merely to catalog inventions. An extent argument must first define its criterion, was change broad, deep, rapid, durable, or foundational?, because the answer genuinely shifts with the standard you choose. Measured by demography and daily life, the transformation since 1900 was arguably the most profound in human history: more people lived longer, ate better, moved farther, and communicated faster than any generation before them. Measured instead by the persistence of the sovereign state, of inequality, and of cultural and national difference, the deeper structures endured beneath the gleaming new machinery. The most sophisticated answer refuses to pick one and ignore the other; it names both the decisive change and the durable continuity, states the criterion by which it is judging, and then argues which weighs more. That deliberate weighing of change against continuity is precisely the synthesis this unit demands."
        ],
        "callout": {
          "label": "AP Skill, Argumentation",
          "html": "The learning objective asks you to <strong>\"explain the extent to which science and technology brought change from 1900 to the present.\"</strong> The word <em>extent</em> is the whole assignment: you cannot answer it without first defining a criterion for significance, breadth, depth, or durability, and defending that choice. A top-scoring thesis names a decisive change (medicine and agriculture reshaping survival) <em>and</em> a decisive continuity (enduring state power and inequality), then argues which outweighs the other. Nuance that qualifies your own claim is the mark of complexity."
        }
      }
    ],
    "takeaway": "Topic 9.9 is not a new story, it is the whole of Unit 9 turned into one argument along three threads. First, technology &amp; environment: the internet, containers, air travel, petroleum, and nuclear power shrank the world, but only for the connected. Second, life &amp; population: the Green Revolution, vaccines, antibiotics, and birth control remade survival itself, at real cost. Third, culture, rights &amp; structures: identity and consumer culture went global while states, borders, and inequality endured. Change in the machinery of daily life; continuity in the structures of power. To evaluate the extent of change, define your criterion, weigh both, and decide which matters more, the essence of historical synthesis.",
    "questions": [
      {
        "skill": "Evidence Usage",
        "text": "Choose ONE technology from the reading, the internet, shipping containers, the Green Revolution, antibiotics, or birth control, and describe its specific development with concrete evidence (names, dates, or places). Then explain both a change it produced and a limit or unequal effect that qualifies that change."
      },
      {
        "skill": "Continuity and Change",
        "text": "Across the period from 1900 to the present, identify ONE thing that genuinely changed because of science and technology AND ONE structure or pattern that endured despite it. Explain how both can be true at the same time, using evidence from at least two of the reading's three threads."
      },
      {
        "skill": "Argumentation",
        "text": "The reading argues that an \"extent\" claim depends on the criterion you choose. Make a defensible thesis about the extent to which science and technology transformed the world since 1900, state the criterion for significance you are using, and identify one piece of evidence that complicates your own argument."
      }
    ]
  }
};
