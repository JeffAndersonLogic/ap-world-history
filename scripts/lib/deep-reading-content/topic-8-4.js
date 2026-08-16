'use strict';

/**
 * Topic 8.4, Spread of Communism After 1900: the deep reading.
 *
 * Why this exists. The success criteria ask why the CCP defeated the KMT, what
 * the Great Leap Forward did and why, and for at least two of the four CED
 * redistribution cases. The First & 10 names all of them. What it cannot do in
 * its space is explain the two mechanisms that make the topic intelligible: how
 * redistributing land in a village buys an army, and how a planning system that
 * punishes bad news turns a harvest shortfall into a famine.
 *
 * The organizing argument: this topic is about land before it is about ideology.
 * Every case here, communist and anti-communist alike, is a state or a movement
 * trying to change who holds land, because in an agrarian society that is where
 * both the tax base and the political power are. Reading it that way lets a
 * student put Mao, Ho Chi Minh, Mengistu, Kerala's elected communists and the
 * Shah of Iran on one page without confusion.
 *
 * Three things carried deliberately:
 *
 *   1. Land reform as recruitment. A party that redistributes in the villages it
 *      holds buys soldiers, intelligence and food at the price of the landlord
 *      class. That is a mechanism, and it explains the CCP's rural base far
 *      better than any statement about popularity.
 *   2. The Great Leap famine as an information failure with a political cause.
 *      Procurement was set from inflated reports, so the state took grain that
 *      did not exist. Lushan in 1959 shows what happened to officials who
 *      reported accurately, which closes the loop.
 *   3. The bloc was never one thing. Yugoslavia in 1948, the Sino-Soviet split
 *      by 1960, and China and Vietnam at war in 1979. National interest survived
 *      shared ideology, and students who miss this write essays about a
 *      monolithic communism that did not exist.
 */

module.exports = {
  topicKey: 't8-4',
  slug: 'topic-8-4-spread-of-communism',
  sourceFile: 'deep-reading-topic-8-4-spread-of-communism.html',
  lessonFile: 'lesson-8-4-spread-of-communism.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 8.4: Land, and Who Holds It',
  eyebrow: 'Topic 8.4 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Land, and Who <em>Holds</em> It',
  deck: `This topic is usually taught as the spread of an ideology. It is better read as a series of arguments about land, because in an agrarian society land is where the tax base, the food supply and the political power all sit. Once you read it that way, Mao&rsquo;s base areas, Ho Chi Minh&rsquo;s recruitment, Ethiopia&rsquo;s nationalizations, Kerala&rsquo;s elected communists and the Shah of Iran&rsquo;s land program stop looking like five unrelated things.`,
  meta: ['Four sections', 'Land, catastrophe, comparison, and the myth of one bloc', 'Read alongside the First & 10'],
  footerNote: 'Topic 8.4 &nbsp;·&nbsp; Land, and Who Holds It &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Section 01 explains why the CCP won by explaining what it did in villages, and section 02 explains how the same party produced a catastrophe. Section 03 is the comparison the success criteria ask for, and section 04 is the correction most Unit 8 essays need.`,
    steps: [
      `<b>01 Why the CCP won:</b> land reform as a recruitment mechanism, and what Japanese invasion did to the KMT.`,
      `<b>02 The Great Leap Forward:</b> how a reporting system turned a shortfall into the deadliest famine on record.`,
      `<b>03 Four redistributions:</b> Vietnam, Ethiopia, Kerala and Iran, and what the comparison shows.`,
      `<b>04 One bloc, or none:</b> Yugoslavia, the Sino-Soviet split, and China at war with Vietnam.`,
      `<b>Then the closing section</b>, which turns all of it into comparison sentences you can write.`
    ]
  },

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'ccp',
      num: '01',
      accent: 'gold',
      name: 'Why the Communists Won in China',
      navLabel: 'Why the CCP won',
      dates: '1921 to 1949 &nbsp;·&nbsp; Party founding to the People&rsquo;s Republic',
      thesis: `The Chinese Communist Party did not win by converting China to Marxism. It won by governing the villages it controlled in a way that produced recruits, intelligence and food, while the Kuomintang bore the main weight of the Japanese war and the inflation that came with it.`,
      parts: [
        {
          heading: 'The position before the war',
          blocks: [
            { p: `The Qing dynasty fell in <span class="num">1912</span> and no government replaced its authority for a generation. Regional military commanders held real power through the <span class="num">1910</span>s and <span class="num">1920</span>s, which is the period called warlordism, and the Kuomintang under Chiang Kai-shek reunified much of the country by <span class="num">1928</span> without ever fully displacing them. The <span class="kt">Chinese Communist Party</span>, founded in <span class="num">1921</span>, was initially an urban party of workers and intellectuals, and it was very nearly destroyed as one when the KMT turned on its communist allies in Shanghai in <span class="num">1927</span>.` },
            { p: `The survivors went to the countryside, and that relocation is the most consequential thing that happened to Chinese communism. Pushed out of their southern base, they made the retreat of <span class="num">1934</span> and <span class="num">1935</span> that became known as the <span class="kt">Long March</span>, a journey of thousands of miles that most of the participants did not survive and that ended with a much smaller party established at Yan'an in the northwest under Mao Zedong's leadership. The march is remembered as an epic, and it functioned as one: it gave the party a founding story, a settled leadership and a rural base area to govern.` }
          ]
        },
        {
          heading: 'What the party did in the villages, and why it worked',
          blocks: [
            { p: `In the areas it held, the CCP reduced rents and interest, redistributed land from large holders to tenants, and organized peasant associations that took over local decisions from landlord-dominated village authorities. State the mechanism precisely, because this is the answer to the question. A landless tenant who receives land from a party has a direct material interest in that party not losing, since a returning landlord will want the land back. That produces volunteers, food for the troops, porters, and, decisively, intelligence: a village that supports you will tell you where the enemy column is, and a village that does not will tell the enemy where you are. Land reform is how a party with no treasury and no foreign backer builds an army in an agrarian country.` },
            { p: `Then Japanese aggression changed the terms. Japan seized Manchuria in <span class="num">1931</span> and invaded China proper in <span class="num">1937</span>. The KMT, as the recognized government with a conventional army, bore the main burden of fighting a modern military and lost the wealthy coastal cities that generated its tax revenue, retreating inland. To keep paying for the war it printed money, and by the later <span class="num">1940</span>s inflation had destroyed the savings of the urban middle class that was its natural constituency. Communist forces, operating in the countryside behind Japanese lines, fought a guerrilla war that cost them far less, expanded their base areas substantially, and let them present themselves as national resisters as well as social reformers.` },
            { p: `Civil war resumed in <span class="num">1946</span> and was over quickly. The People's Republic of China was proclaimed on 1 October <span class="num">1949</span>, and Chiang's government withdrew to Taiwan. So the causal statement the success criteria want has two strands that reinforce each other: internal weakness in the KMT, made much worse by inflation and corruption, and Japanese invasion, which imposed the cost of conventional defense on the KMT while giving the CCP room to grow.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: two historians, two explanations, same evidence',
              html: `The classic dispute about the CCP's rural support is worth knowing by name. Chalmers Johnson, in <em>Peasant Nationalism and Communist Power</em> (<span class="num">1962</span>), argued that peasants rallied to the communists chiefly because the party organized resistance to a brutal Japanese occupation, so the decisive appeal was national rather than social. Mark Selden, in <em>The Yenan Way</em> (<span class="num">1971</span>), argued from the Shaanxi-Gansu-Ningxia base that the decisive appeal was the party's economic and social program, rent reduction, land redistribution and local participation, which changed peasants' material position. Later work generally treats the balance as varying by region and by period, with nationalism weighing more in occupied areas and social reform more in the older base areas. Naming this dispute, and then saying which strand your evidence supports in the case you are writing about, is worth more than asserting either one.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Land redistribution as recruitment. <em>The mechanism is that a tenant who receives land from a party acquires a direct material stake in that party's survival, because defeat means the landlord returns, so redistribution converts into volunteers, porters, food and intelligence. It is how a movement with no treasury and no foreign backer raises an army in an agrarian society.</em>`,
        limit: `It bought support at the price of the class it dispossessed, and it required territory to hold in order to work at all, which is why the CCP's rural strategy only became possible after 1927 drove it out of the cities.`,
        comparison: `Against the <em>KMT</em> in the same years: both wanted a strong centralized China and both proposed land reform on paper. The KMT depended on landlords and urban business for revenue and could not execute redistribution without attacking its own base, while the CCP had no such constituency to protect. Capacity to act, not intention, is what separates them.`
      },
      terms: [
        ['Chinese Communist Party', 'Founded in 1921 as an urban party, driven to the countryside after 1927, and victorious in 1949 on a rural base.'],
        ['Kuomintang', 'The Nationalist party under Chiang Kai-shek, the recognized government that bore the main weight of the Japanese war and withdrew to Taiwan in 1949.'],
        ['Long March', 'The retreat of 1934 to 1935 that ended at Yan’an, which most participants did not survive, and which settled Mao’s leadership.'],
        ['Base area', 'Territory the CCP governed directly, where rent reduction and land redistribution converted peasants into supporters with a material stake.'],
        ['Guerrilla warfare', 'Dispersed irregular fighting that avoids decisive battle, cheap to sustain and dependent on a population willing to shelter and inform.']
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'greatleap',
      num: '02',
      accent: 'rust',
      name: 'The Great Leap Forward: A Famine Made by Reporting',
      navLabel: 'The Great Leap',
      dates: '1958 to 1962 &nbsp;·&nbsp; Communes to the retreat from the policy',
      thesis: `The Great Leap Forward failed for many reasons, and the specific mechanism that turned failure into mass death is one a student can state in two sentences: the state set how much grain it would take from the reported harvest, and the reported harvest was invented, so the state took food that was not there.`,
      parts: [
        {
          heading: 'The policy',
          blocks: [
            { p: `From <span class="num">1958</span> Mao pushed a program intended to industrialize China within a few years by mobilizing labor rather than by importing capital. Villages were merged into <span class="kt">people's communes</span>, very large units that took over agriculture, local industry, schooling and, in many places, communal dining halls in place of family kitchens. Millions of peasants were moved to construction projects and to small-scale iron smelting in <span class="kt">backyard furnaces</span>, which consumed enormous amounts of labor and fuel and produced pig iron of largely unusable quality.` },
            { p: `Several of the agricultural techniques imposed centrally were unsound, including planting seed at extreme density and deep plowing that damaged soil, and labor was pulled out of the fields at harvest time for the iron campaign. Poor weather in some regions made the situation worse. All of that would have produced a bad harvest. It does not by itself produce a famine on the scale that followed.` }
          ]
        },
        {
          heading: 'The mechanism',
          blocks: [
            { p: `Here is what did. Under the planning system, each level of officials reported production upward, and the state's procurement, the grain it took for the cities, for exports and for reserves, was set as a share of the reported figure. Officials were rewarded for reporting spectacular results and punished for reporting shortfalls, and each level inflated what it received from below. Reported harvests rose while actual harvests fell, and procurement, calculated from the reports, rose with them. In many districts the state took more grain than the village had produced, leaving nothing to eat and nothing to plant. Export of grain continued while people were starving, because on paper there was a surplus.` },
            { p: `The political half of the mechanism closed the loop. At the Lushan conference in <span class="num">1959</span>, Defense Minister Peng Dehuai criticized the campaign in a letter to Mao, having seen conditions in the countryside. He was denounced and removed, and a further campaign against right deviation followed. After that, an official who reported accurately was reporting himself into removal, and the incentive to inflate became overwhelming exactly when honest information was most needed.` },
            { p: `The resulting famine, generally dated <span class="num">1959</span> to <span class="num">1961</span>, is the deadliest on record. Estimates of excess deaths vary widely, commonly from about 15 million to over 40 million, with some scholars proposing higher figures. The variation is not carelessness: the figures are reconstructions from census data, official statistics of contested reliability and provincial records of varying survival, and the definition of an excess death itself involves a modeling choice. Give the range, say what kind of number it is, and note that it is disputed.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that the famine was caused by drought, and do not write that Mao intended it. The weather was poor in some regions and normal in others, and the death rates track policy intensity by province rather than rainfall, which is the strongest evidence against the natural-disaster explanation. Nor is deliberate mass killing what the evidence shows: the sharper and better-supported claim is that a system which set procurement from reports, and punished officials who reported bad news, made accurate information impossible at the exact moment it was needed, and that the leadership persisted with the policy long after the signs were visible. Amartya Sen's comparison is the useful one to know: famines of this kind have not occurred in states with a free press and competitive elections, because information about a shortfall reaches decision-makers before it becomes a catastrophe.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Procurement set from reported output. <em>The mechanism is that officials were rewarded for high production reports and punished for shortfalls, each level inflated the figures it passed upward, and the state then took grain calculated as a share of a harvest that had never existed, so districts were stripped of both food and seed while national statistics showed a surplus.</em>`,
        limit: `It is a mechanism, not the whole cause. Unsound agricultural techniques, labor diverted to backyard furnaces at harvest time, communal dining that removed household control of food, and poor weather in some regions all contributed, and the death toll is a contested range rather than a settled figure.`,
        comparison: `Against the <em>Soviet collectivization</em> and famine of the early <span class="num">1930</span>s, and against the Bengal famine of <span class="num">1943</span> under British administration: in all three, a shortfall became mass death through an administrative decision about extraction and distribution rather than through the absence of food alone. Famine as a political phenomenon rather than an agricultural one is a comparison this topic supports well.`
      },
      terms: [
        ['Great Leap Forward', 'The 1958 to 1962 campaign to industrialize China by mobilizing labor, which produced the deadliest famine on record.'],
        ['People’s commune', 'The very large collective unit that replaced villages and households as the organizer of work, food and schooling.'],
        ['Backyard furnace', 'Small-scale smelting undertaken across the countryside, which consumed labor and fuel and produced largely unusable iron.'],
        ['Procurement', 'The share of the harvest the state took, calculated from reported rather than actual output, which is the mechanism of the famine.'],
        ['Excess deaths', 'Deaths above the expected baseline, a reconstructed figure whose range for this famine runs from about 15 million to over 40 million.']
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'redistribution',
      num: '03',
      accent: 'iron',
      name: 'Four Redistributions, Only Two of Them Communist',
      navLabel: 'Four redistributions',
      dates: '1945 to 1979 &nbsp;·&nbsp; Viet Minh land reform to the Iranian Revolution',
      thesis: `Land redistribution in the twentieth century was not a communist monopoly. It was the tool available to any government trying to break a landholding elite, and comparing a revolutionary case with an electoral one and with a monarchy's version is the fastest way to see what the tool does and what it depends on.`,
      parts: [
        {
          heading: 'Two revolutionary cases',
          blocks: [
            { p: `<b>Vietnam.</b> Ho Chi Minh's Viet Minh, founded in <span class="num">1941</span>, combined anti-colonial nationalism with communist organization, and its rural program worked the way the CCP's had: rent reduction and redistribution in the areas it controlled, converting tenants into supporters with a stake in the outcome. That base sustained the war against France to <span class="num">1954</span> and the war that followed. The land reform campaign carried out in North Vietnam in the mid-<span class="num">1950</span>s was violent, involved public denunciation tribunals, and killed a substantial number of people classified as landlords, and the government itself later acknowledged serious errors and carried out a partial rectification. Include that, because a chapter that describes redistribution only as recruitment has told half the story.` },
            { p: `<b>Ethiopia.</b> A military committee known as the Derg deposed Emperor Haile Selassie in <span class="num">1974</span>, ending a monarchy that traced its claim back centuries, and declared a Marxist program. It nationalized rural land in <span class="num">1975</span>, abolishing the tenancy arrangements of the northern highlands and the large estates of the south, which was genuinely popular among tenants. Mengistu Haile Mariam consolidated personal power through the campaign of political killings known as the Red Terror in <span class="num">1977</span> and <span class="num">1978</span>. The regime received Soviet and Cuban support, fought the Ogaden war described in the Topic 8.3 chapter, faced insurgencies in Eritrea and Tigray throughout, and fell in <span class="num">1991</span>. Redistribution did not save it, because it never solved the problem of how the new landholders would get credit, tools and a price for their crops.` }
          ]
        },
        {
          heading: 'An electoral case and a royal one',
          blocks: [
            { p: `<b>Kerala.</b> In <span class="num">1957</span> voters in the Indian state of Kerala elected a Communist Party government, one of the first anywhere to come to power through the ballot box in a multiparty system. Its attempt at agrarian and education reform provoked enough opposition that the central government dismissed the state administration in <span class="num">1959</span>, but the political direction survived: major land reform legislation was enacted in the <span class="num">1960</span>s and implemented from <span class="num">1970</span>, abolishing tenancy and transferring land to those who worked it. Kerala's subsequent record of high literacy and long life expectancy relative to its income is much discussed, and historians and economists argue about how much of it is attributable to the land reforms as against earlier missionary and princely-state investment in schooling and health. The case matters here because it shows redistribution carried out by an elected government under an independent judiciary, on a timescale of years and through legislation rather than tribunals.` },
            { p: `<b>Iran.</b> In <span class="num">1963</span> Shah Mohammad Reza Pahlavi launched the White Revolution, a package of reforms from above whose central element was land redistribution, along with the extension of the vote to women, literacy programs and the sale of state factories. Its purpose was, in part, defensive: to break the political power of the large landowners and to remove the rural grievance a revolutionary movement could organize. It was opposed by landowners and by religious leaders, including Ruhollah Khomeini, who objected both to specific measures and to the whole project of a state remaking society by decree. Implementation was uneven, many recipients received plots too small to live on, and a large migration to the cities followed, which supplied much of the crowd of <span class="num">1978</span>. The regime that redistributed land to prevent a revolution was overthrown by one in <span class="num">1979</span>.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: land records are unusually good evidence, up to a point',
              html: `Redistribution generates paperwork: cadastral surveys, title transfers, tenancy registers and compensation schedules, and these survive in state archives in all four of these cases. That makes it possible to say how much land legally changed hands, which is a firmer thing to know than most social history offers. Two cautions belong with it. A title transfer is not the same as a functioning farm, and in several of these programs recipients got land without credit, water rights, tools or a market, which is why redistribution and rural poverty coexisted afterward. And the records are produced by the reforming state, which has a strong interest in the numbers looking complete; independent surveys, where they exist, often find less land actually delivered than the registers report.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Redistribution as regime strategy. <em>The mechanism is that in an agrarian society the landholding elite is the main rival power to the central state, so breaking it both removes a rival and creates a large population of smallholders who owe their position to the government. That logic is available to a communist party, an elected coalition and a monarchy alike, which is why the Shah's program and the Derg's look structurally similar.</em>`,
        limit: `Transferring title is the easy half. Where recipients got no credit, no inputs and no market, output and rural incomes did not rise, and in Iran the plots were often too small to support a family, which contributed to the urban migration that fed the 1979 revolution.`,
        comparison: `Against <em>Topic 5.3</em> on causation: this is another case where the same instrument produces different outcomes because the surrounding conditions differ. Kerala's reform ran through legislation and courts over a decade, Vietnam's ran through tribunals in a war, and the difference in method is the difference in what the state was trying to survive.`
      },
      terms: [
        ['Land reform', 'The legal transfer of agricultural land from large holders to tenants or cultivators, used by governments of very different ideologies.'],
        ['Viet Minh', 'The nationalist and communist front founded in 1941, whose rural program supplied the base for the wars against France and the United States.'],
        ['The Derg', 'The Ethiopian military committee that deposed Haile Selassie in 1974, nationalized rural land in 1975 and ruled until 1991.'],
        ['Kerala land reform', 'Redistribution carried out by elected governments in an Indian state, legislated in the 1960s and implemented from 1970.'],
        ['White Revolution', 'The Shah of Iran’s 1963 reform program, including land redistribution, intended to forestall revolution and preceding one by sixteen years.']
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'bloc',
      num: '04',
      accent: 'oxide',
      name: 'There Was Never One Communist Bloc',
      navLabel: 'One bloc, or none',
      dates: '1948 to 1979 &nbsp;·&nbsp; The break with Yugoslavia to the Sino-Vietnamese war',
      thesis: `The single most common error in Unit 8 essays is treating world communism as one actor taking instructions from Moscow. Communist states fought each other, expelled each other and armed each other's enemies, and the reason is that shared ideology did not dissolve national interest.`,
      parts: [
        {
          heading: 'Three breaks',
          blocks: [
            { p: `<b>Yugoslavia, <span class="num">1948</span>.</b> Tito's partisans had liberated most of Yugoslavia largely by their own effort, which meant his government did not depend on the Red Army and did not have to take direction. Stalin expelled Yugoslavia from the Cominform, and Yugoslavia went on to develop its own economic model and, in <span class="num">1961</span>, to co-found the Non-Aligned Movement. The lesson Moscow drew is visible in Eastern Europe afterward: where communist governments had been installed by Soviet occupation, control was maintained tightly, and where they had come to power by their own means, it was not maintained at all.` },
            { p: `<b>The Sino-Soviet split.</b> Relations deteriorated through the later <span class="num">1950</span>s over Khrushchev's denunciation of Stalin, over peaceful coexistence with the West, over Soviet unwillingness to share nuclear weapons technology, and over which state led the communist world. Soviet advisers and aid were withdrawn from China in <span class="num">1960</span>, the dispute became public, and by <span class="num">1969</span> Soviet and Chinese troops were fighting border clashes along the Ussuri river. That split is the precondition for Nixon's visit to Beijing in <span class="num">1972</span>: the United States could improve relations with one communist power because the other was now its rival.` },
            { p: `<b>China and Vietnam, <span class="num">1979</span>.</b> Vietnam, reunified in <span class="num">1975</span> and aligned with the Soviet Union, invaded Cambodia at the end of <span class="num">1978</span> and removed the Khmer Rouge government, which had carried out mass killings on a scale that is among the worst of the century and which China had supported. China then invaded northern Vietnam in February <span class="num">1979</span> and withdrew after several weeks of costly fighting. Three communist states, two wars, in fourteen months.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write about the communist bloc as a single actor, and be careful with the domino theory as an explanatory device. The theory, articulated by Eisenhower in <span class="num">1954</span>, held that the fall of one state to communism would topple its neighbors in sequence. It was influential and it shaped real decisions, so it belongs in an essay as a cause of American policy. As a description of what happened it fits poorly: communist states repeatedly fought each other, Yugoslavia and later Albania and Romania took independent lines, and Vietnamese unification in <span class="num">1975</span> was followed within four years by war with China rather than by a communist advance across Southeast Asia. Treat the domino theory as evidence about what policymakers believed, which is what it is good evidence for.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `National interest surviving shared ideology. <em>The mechanism is that a state's leadership answers first to holding power in its own territory, so where a communist government had come to power by its own means, as in Yugoslavia, China and Vietnam, it had both the capacity and the motive to defy Moscow, while governments installed by Soviet occupation generally did not.</em>`,
        limit: `The bloc was not fictional either. Comecon, the Warsaw Pact, party-to-party training, arms transfers and shared doctrine were all real, and Soviet troops did enforce conformity in Hungary in 1956 and Czechoslovakia in 1968. The precise claim is that it was a hierarchy under continual strain, not a monolith and not an illusion.`,
        comparison: `Against the <em>Western alliance</em>: NATO also contained serious splits, France's withdrawal from the integrated command in <span class="num">1966</span> and the Suez crisis of <span class="num">1956</span>, when the United States forced its two principal allies to abandon an operation. Both blocs were coalitions of states with divergent interests, and the useful comparison is how each managed dissent: one by argument and one, at the extreme, by invasion.`
      },
      terms: [
        ['Tito', 'The Yugoslav leader whose partisans liberated their own country, which is why his 1948 break with Stalin was possible and lasting.'],
        ['Sino-Soviet split', 'The breakdown of Chinese-Soviet relations from the late 1950s, public by 1960 and violent at the border by 1969.'],
        ['Peaceful coexistence', 'Khrushchev’s doctrine that war with the capitalist world was not inevitable, one of the disputes that divided Moscow from Beijing.'],
        ['Domino theory', 'The American belief that one state falling to communism would topple its neighbors, good evidence for policy motives and a poor description of events.'],
        ['Khmer Rouge', 'The Cambodian regime of 1975 to 1979, responsible for mass killing on an extraordinary scale, removed by a Vietnamese invasion and backed by China.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Building a comparison',
    intro: `Each card is a claim, its evidence and the mechanism joining them. The second is the one to learn most carefully, because it converts a catastrophe from a list of policies into an explanation.`,
    pairs: [
      {
        category: 'Causation',
        title: 'The CCP won by governing villages, and the Japanese war set the terms',
        body: `In its base areas the party cut rents, redistributed land and organized peasant associations, which gave tenants a material stake in the party not losing and produced volunteers, food, porters and intelligence. Meanwhile the KMT, as the recognized government with a conventional army, bore the main weight of the Japanese invasion from 1937, lost the coastal cities that produced its revenue, and printed money until inflation destroyed the savings of the urban class that supported it. Two strands, reinforcing each other. Historians differ on the balance in the rural half: Chalmers Johnson argued that resistance to occupation was the decisive appeal, Mark Selden that the social program was, and later work generally finds the mix varying by region. Say which strand your evidence supports rather than asserting either.`
      },
      {
        category: 'Mechanism',
        title: 'The Great Leap famine was an information failure with a political cause',
        body: `Procurement, the grain the state took for cities, exports and reserves, was set as a share of reported output. Officials were rewarded for high reports and punished for shortfalls, so each level inflated what it passed upward, and the state then collected grain calculated from harvests that had not happened, taking seed as well as food while national figures showed a surplus. At Lushan in 1959 Peng Dehuai criticized the campaign and was removed, after which accurate reporting was career-ending exactly when it was most needed. Excess deaths from 1959 to 1961 are estimated from about 15 million to over 40 million, a reconstructed and disputed range. Amartya Sen's comparison sharpens the point: famines of this kind have not occurred where a free press carries news of a shortfall upward.`
      },
      {
        category: 'Comparison',
        title: 'A monarchy and a communist party used the same instrument for the same structural reason',
        body: `The Shah's White Revolution of 1963 redistributed land to break the political power of large landowners and to remove the rural grievance a revolutionary movement could organize. Ethiopia's Derg nationalized rural land in 1975 to destroy the estates and tenancies of the old order and to build a constituency for the new one. Both were states attacking the landholding elite that was their main rival for power in the countryside, which is why the programs look structurally alike despite opposite ideologies. Both also show the limit: transferring title is the easy half, and where recipients received no credit, water rights or market access, incomes did not rise. In Iran the plots were often too small to live on, and the resulting migration to the cities supplied the crowds of 1978.`
      },
      {
        category: 'Complexity',
        title: 'Communist states fought each other, which is why the domino theory describes a belief and not an outcome',
        body: `Yugoslavia was expelled from the Cominform in 1948 and co-founded the Non-Aligned Movement in 1961. Soviet advisers left China in 1960, the split became public, and Soviet and Chinese troops fought at the Ussuri river in 1969, which is what made Nixon's opening to Beijing in 1972 possible. Vietnam removed China's Khmer Rouge allies from Cambodia at the end of 1978, and China invaded northern Vietnam in February 1979. Use the domino theory as evidence of what American policymakers believed, since it demonstrably shaped decisions from 1954 onward, and do not use it as a description of what happened, because the record shows communist states pursuing national interests against each other throughout.`
      }
    ]
  }
};
