'use strict';

/**
 * Topic 5.9, Society and the Industrial Age: the deep reading.
 *
 * Why this exists. The CED gives 5.9 one learning objective, J, explain how
 * industrialization caused change in existing social hierarchies and standards
 * of living, three Key Concepts (KC-5.1.VI.A, new social classes, including the
 * middle class and the industrial working class, developed; KC-5.1.VI.B,
 * working-class women and often children held wage-earning jobs to supplement
 * their families' income, while middle-class women were increasingly limited to
 * the household; KC-5.1.VI.C, the rapid urbanization that accompanied global
 * capitalism at times led to pollution, poverty, increased crime, public health
 * crises, housing shortages and insufficient infrastructure), a reasoning
 * process of Continuity and Change and the skill 4.B, contextualization. The
 * First & 10 tells the story in one pass. What it has no room for is how the
 * landed families held on, what the middle-class ideal of home actually asked
 * of women, how historians measure life in the industrial city, and why Riis's
 * New York belongs in the same story as Manchester.
 *
 * Rebuilt from the 5.9 story (docs/TOPIC-5-9-STORY-DRAFT.md) on 2026-11-08.
 * The old chapter, "A City Built for a Quarter of Itself," told the topic as
 * pure change and had no continuity in it. Every claim here is in
 * docs/TOPIC-5-9-CLAIM-LEDGER.md.
 *
 * Three things carried deliberately:
 *
 *   1. Every section names what changed and what kept going, so the chapter is
 *      Continuity and Change throughout, as the objective's word "existing" asks.
 *   2. The CED's reason for the split in women's lives is money, and the chapter
 *      says so in its words.
 *   3. Numbers about life and death are read with care: averages, boundaries and
 *      what counts as a crime are explained, not just stated.
 */

module.exports = {
  topicKey: 't5-9',
  slug: 'topic-5-9-society-and-the-industrial-age',
  sourceFile: 'deep-reading-topic-5-9-society-and-the-industrial-age.html',
  lessonFile: 'lesson-5-9-society-and-the-industrial-age.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 5.9: A New Ladder',
  eyebrow: 'Topic 5.9 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'A New <em>Ladder</em>',
  deck: `Before industry, society was already a ladder of rank. Industry did not throw it away. It added new rungs, moved people up and down, split women's lives by class, and packed people into cities that could not keep up. This chapter asks of each part of society: what changed, and what kept going?`,
  meta: ['Five sections', 'Classes, women and children, cities, life, New York', 'Read alongside the First & 10'],
  footerNote: 'Topic 5.9 &nbsp;·&nbsp; A New Ladder &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The College Board asks you to explain how industrialization caused change in existing social hierarchies and standards of living. That is a continuity and change question: the word "existing" means there was a ladder of rank before industry, so a strong answer says what changed and what kept going. Its skill is contextualization: placing one specific thing inside the bigger story that explains it.`,
    steps: [
      `<b>01 New classes, old families:</b> who rose, and who stayed on top.`,
      `<b>02 Work and home, split by class:</b> why working-class and middle-class women's lives went different ways.`,
      `<b>03 Cities that could not keep up:</b> how fast the towns grew, and the six challenges.`,
      `<b>04 What it did to life:</b> cholera, John Snow's map, and how long people lived.`,
      `<b>05 Not only Britain:</b> New York in 1890, and the city by 1900.`,
      `<b>Then the closing section</b>, which gathers the evidence for an answer.`
    ]
  },

  empires: [
    // ── 01 ─────────────────────────────────────────────────────────────
    {
      id: 'classes',
      num: '01',
      accent: 'gold',
      name: 'New Classes, Old Families',
      navLabel: 'Classes',
      dates: '1750 to 1900 &nbsp;·&nbsp; Britain',
      thesis: `Industry made a middle class that rose by money and education and a working class that lived on wages. But the landed families who had been on top in 1750 were still near the top in 1900.`,
      parts: [
        {
          heading: 'The old ladder',
          blocks: [
            { p: `Every society has a <span class="kt">social hierarchy</span>, a ladder of rank. In <span class="num">1750</span> most people in Britain lived in the countryside. At the top were landowning families, the aristocracy (lords with titles) and the gentry (landowners without them), whose wealth and rank came from land they inherited. Below them were farmers, craftsmen and laborers. Most families worked together, on the farm or at home, where women spun thread and children helped.` }
          ]
        },
        {
          heading: 'Two classes grow',
          blocks: [
            { p: `Industry made two groups bigger and more important than ever. The <span class="kt">middle class</span> included factory owners, merchants and bankers, and the people who ran things for them, from engineers, doctors and lawyers to managers and clerks. Their place came from money they made and the education they paid for, not from land or titles. In <span class="num">1832</span> the Reform Act gave the vote, in the towns, to men who occupied property worth ten pounds a year: in effect, most middle-class men. It excluded women by its own wording.` },
            { p: `The <span class="kt">industrial working class</span> was made up of people who owned no land and no tools, and lived on the wages they earned in mills, mines, docks and workshops, at the hours the employer set. Their unions and parties are Topic 5.8's story.` }
          ]
        },
        {
          heading: 'Who stayed on top',
          blocks: [
            { p: `The landed families did not disappear. They kept their land, their titles and much of their power; historians of the landed class describe it as still dominant in wealth and politics until the <span class="num">1880s</span>. From <span class="num">1895</span> to <span class="num">1902</span> Britain's prime minister was Lord Salisbury, a marquess and a great landowner. Rich middle-class families often bought country houses, sent their sons to the same schools as the gentry, and married into landed families. They climbed the old ladder rather than breaking it.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `"Industry created social classes." There was a ladder of rank long before the factories, and its top rungs held. What industry did was add new rungs and change how people climbed: by money and education as well as by birth. The opposite mistake is "nothing changed": the middle class won the vote in 1832, and the class that lived on wages grew fast.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Start with who was on top. <em>Name one change and one continuity, with a detail for each.</em>`,
        limit: `The working class's own calls for change (unions, the Charter, parties) are Topic 5.8's. Here, they are a class.`,
        comparison: `Against Topic 5.7: there, living standards rose "for some." Here is who the some were.`
      },
      terms: [
        ['Social hierarchy', 'A ladder of rank: who is on top and who is below.'],
        ['Middle class', 'Owners, merchants, bankers, professionals and clerks, whose rank came from money and education.'],
        ['Industrial working class', 'People with no land or tools who lived on wages.']
      ]
    },

    // ── 02 ─────────────────────────────────────────────────────────────
    {
      id: 'homes',
      num: '02',
      accent: 'rust',
      name: 'Work and Home, Split by Class',
      navLabel: 'Women and children',
      dates: '1830s to 1900 &nbsp;·&nbsp; Britain, the United States, Japan',
      thesis: `Women and children had always worked. Industry moved work out of the home and split women's lives by class: working-class women and children earned wages because their families needed them, and middle-class women, whose families did not, were increasingly kept to the home.`,
      parts: [
        {
          heading: 'Working-class families',
          blocks: [
            { p: `In working-class families one wage was rarely enough to pay for rent and food, so women, and often children, earned too. A survey of factories in <span class="num">1833</span> found that women and girls were a majority of the workers in Britain's cotton, flax and silk mills, though not in its wool mills. Many more women worked in <span class="kt">domestic service</span>, as maids and cooks in other people's houses: the census of <span class="num">1851</span> suggests about four in ten women with a recorded job were servants, the largest single job for women. Others sewed or made goods at home, paid by the piece.` },
            { p: `Women were usually paid less than men. Some historians find that much of the gap came from the jobs women were given, which paid less; others put more weight on custom and unequal pay for the same work, and the debate goes on. The pattern spread with industry: in Japan in <span class="num">1900</span>, women made up about 62 percent of the workers in private factories, most of them young women in textile mills.` }
          ]
        },
        {
          heading: 'The middle-class home',
          blocks: [
            { p: `In middle-class families the husband's earnings were enough, so the wife was increasingly expected to stay out of paid work and to run the home and raise the children. Writers called the home a woman's proper "sphere"; historians call the idea <span class="kt">separate spheres</span>. In <span class="num">1861</span> Isabella Beeton's best-selling <em>Book of Household Management</em> opened: "As with the commander of an army, or the leader of any enterprise, so is it with the mistress of a house. Her spirit will be seen through the whole establishment; and just in proportion as she performs her duties intelligently and thoroughly, so will her domestics follow in her path."` },
            { p: `Running such a house was real work, and the "domestics" who followed the mistress were servants, most of them working-class women. One class's home ran on the other class's wages.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: an ideal, not a photograph',
              html: `Advice books like Beeton's, and pictures like Currier &amp; Ives's <em>The Four Seasons of Life: Middle Age</em> (about 1868), tell us what middle-class families were told a home should be. They do not prove every family lived that way. The historian Amanda Vickery has warned that many women's lives never fit the "separate spheres" picture, which is why the College Board says middle-class women were "increasingly" limited to the home: an ideal that grew over the century.`
            } }
          ]
        },
        {
          heading: 'What kept going for women',
          blocks: [
            { p: `In both classes, women were paid less and had fewer rights than men. In England and Wales, a married woman's property passed under her husband's control; the Married Women's Property Act of <span class="num">1870</span> let her keep the money she earned, and the Act of <span class="num">1882</span> let women married from <span class="num">1883</span> hold all their property as their own. No woman could vote for Parliament.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `"In the 1800s women stopped working." Working-class women and children earned wages, and middle-class women ran households, often with servants. The opposite mistake is "all women worked in factories": most working women were servants, and many worked at home. Name the class before you describe a woman's life.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Use the College Board's own reason. <em>Working-class women earned "to supplement their families' income"; middle-class women "did not have the same economic demands to satisfy."</em>`,
        limit: `The CED's word is "increasingly." The middle-class home was a growing ideal, not every family's life.`,
        comparison: `Against Topic 5.3: there, spinning left the home for the factory. Here is what that did to women of different classes.`
      },
      terms: [
        ['Domestic service', 'Work as a servant in someone else\'s house; the largest job for women in Britain.'],
        ['Separate spheres', 'The idea that men belonged in work and politics and women in the home.'],
        ['Wages', 'Pay for work, by the hour, day, week or piece.']
      ]
    },

    // ── 03 ─────────────────────────────────────────────────────────────
    {
      id: 'cities',
      num: '03',
      accent: 'iron',
      name: 'Cities That Could Not Keep Up',
      navLabel: 'Cities',
      dates: '1773 to 1851 &nbsp;·&nbsp; Manchester, England and Wales',
      thesis: `Industrial towns grew faster than anyone could build homes, sewers and water pipes for the people who came, and that speed brought the six challenges the College Board names.`,
      parts: [
        {
          heading: 'How fast',
          blocks: [
            { p: `<span class="kt">Urbanization</span> is the growth of cities. Manchester, the great cotton town, had about <span class="num">23,000</span> people in a count made in <span class="num">1773</span>, about <span class="num">70,000</span> in the township at the first national census in <span class="num">1801</span>, and more than <span class="num">300,000</span> in the borough by <span class="num">1851</span>. (The numbers depend on where the town's edge is drawn: the borough was larger than the old township.) In <span class="num">1851</span> the census found, for the first time, more than half the people of England and Wales living in towns, though only just.` }
          ]
        },
        {
          heading: 'Six challenges',
          blocks: [
            { p: `<strong>Pollution:</strong> coal smoke hung over the towns, and waste ran into the rivers. Friedrich Engels described Manchester's river Irk in 1845 as "coal-black, foul-smelling ... full of debris and refuse." <strong>Poverty:</strong> many wages barely paid the rent. <strong>Housing shortages:</strong> houses were split into rooms, and whole families lived in one room or a damp cellar. <strong>Insufficient <span class="kt">infrastructure</span>:</strong> the new streets had no sewers, no clean water and no rubbish collection. <strong>Public health crises:</strong> section 04. <strong>Increased crime:</strong> below.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: counting crime',
              html: `The number of people tried for serious crimes in England and Wales rose to peaks in 1842 and 1848, years of hard times, and then fell for the rest of the century (Gatrell and Hadden). But historians warn that these numbers count prosecutions, not crimes: as towns set up police forces, more crimes were caught and charged. So say "more people were charged with crimes," not "crime exploded."`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Name the cause of all six. <em>The College Board's word is "rapid": people arrived faster than homes and pipes were built.</em>`,
        limit: `"At times," says the College Board: not every town, not every year. The reforms that answered these problems are Topic 5.8's.`,
        comparison: `Against Wyld's 1852 watercolor of Manchester: from a hilltop, the town is golden smoke and spires. Up close, it was the six challenges.`
      },
      terms: [
        ['Urbanization', 'The growth of cities, as people move from the countryside to towns.'],
        ['Infrastructure', 'The shared systems a city needs: sewers, clean water, streets, rubbish collection.']
      ]
    },

    // ── 04 ─────────────────────────────────────────────────────────────
    {
      id: 'life',
      num: '04',
      accent: 'oxide',
      name: 'What It Did to Life',
      navLabel: 'Life and health',
      dates: '1831 to 1854 &nbsp;·&nbsp; Manchester and London',
      thesis: `Crowded towns with dirty water made disease spread, and in the fastest-growing cities people's lives were shorter: the standard of living, measured in health, fell for many.`,
      parts: [
        {
          heading: 'Cholera',
          blocks: [
            { p: `Cholera, a disease of the gut that spreads through water fouled with human waste, reached Britain in <span class="num">1831</span>. In <span class="num">1848</span> and <span class="num">1849</span> about <span class="num">53,000</span> cholera deaths were registered in England and Wales. These were <span class="kt">public health</span> crises: disasters for a whole population, not only for the sick.` },
            { p: `In <span class="num">1854</span> the London physician John Snow mapped the cholera deaths around Broad Street in Soho and traced them to one public water pump. His map, printed in a report of <span class="num">1855</span>, marks each death with a small black bar; the bars stack up around the pump. A cartoon in <em>Punch</em> two years earlier, "A Court for King Cholera" (<span class="num">1852</span>), had blamed crowding and filth. Snow showed the route was the water.` }
          ]
        },
        {
          heading: 'How long people lived',
          blocks: [
            { p: `A family's <span class="kt">standard of living</span> is how well it lives, including its health and how long its members live. In the <span class="num">1840s</span> a baby born in Manchester could expect to live only about 25 to 28 years, depending on how the historians count, against about 40 to 42 for England and Wales as a whole.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `"Workers in industrial cities died at 25." Life expectancy at birth is an average, and it is pulled down hard by the many babies and young children who died. A Manchester worker who survived childhood could expect decades more. The gap between the city and the nation is the evidence: the city was far deadlier. The opposite mistake is "cities were as healthy as the countryside."`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Standards of living are the objective's second half. <em>Use cholera or life expectancy as your detail, and say what caused it.</em>`,
        limit: `Snow's map shows how cholera spread; London's new sewers, the answer to it, are Topic 5.8's.`,
        comparison: `Against the middle class of section 01: comfortable families moved to cleaner streets and suburbs, away from the smoke.`
      },
      terms: [
        ['Public health', 'The health of a whole population, and what a community does to protect it.'],
        ['Standard of living', 'How well people live: food, home, health and how long they live.']
      ]
    },

    // ── 05 ─────────────────────────────────────────────────────────────
    {
      id: 'newyork',
      num: '05',
      accent: 'sage',
      name: 'Not Only Britain: New York, and 1900',
      navLabel: 'New York and 1900',
      dates: '1850 to 1900 &nbsp;·&nbsp; New York, Britain',
      thesis: `The College Board ties these challenges to "global capitalism." Wherever industry and trade drew people in faster than homes were built, the same story played out, and by 1900 cities were only beginning to catch up.`,
      parts: [
        {
          heading: 'New York, 1890',
          blocks: [
            { p: `Manhattan, the heart of New York City, grew from about <span class="num">515,000</span> people in <span class="num">1850</span> to about <span class="num">1.4 million</span> in <span class="num">1890</span>, many of them immigrants who came for work. In <span class="num">1890</span> the reporter Jacob Riis published <em>How the Other Half Lives</em>. "To-day three-fourths of its people live in the tenements," he wrote, "and the nineteenth century drift of the population to the cities is sending ever-increasing multitudes to crowd them." A <span class="kt">tenement</span> was a crowded apartment building for poor renters.` },
            { p: `Riis went with the police on a visit after midnight and photographed one room on Bayard Street by flash: "In a room not thirteen feet either way slept twelve men and women, two or three in bunks set in a sort of alcove, the rest on the floor ... Most of the men were lodgers, who slept there for five cents a spot."` },
            { note: {
              kind: 'howknow',
              label: 'How we know: a reformer\'s camera',
              html: `Riis wanted to shock comfortable readers into supporting reform, and he chose and set up his scenes for that purpose. His book also carries prejudiced lines about immigrant groups. His photographs and counts are strong evidence of crowding; his judgments of the people in them are evidence of his own point of view.`
            } }
          ]
        },
        {
          heading: 'Contextualize it',
          blocks: [
            { p: `To contextualize a source, place it inside the bigger story that explains it. A Manchester family living in one damp cellar room in the <span class="num">1840s</span> happened inside the rapid growth of industrial towns: Manchester grew from about <span class="num">70,000</span> people in <span class="num">1801</span> to more than <span class="num">300,000</span> by <span class="num">1851</span>, faster than anyone built houses, so every room and cellar was rented out. Try the same move on Riis's Bayard Street room in the Skill Builder.` }
          ]
        },
        {
          heading: 'By 1900',
          blocks: [
            { p: `Later in the century, cities began to catch up with sewers, clean water and police (Topic 5.8 has those reforms). Life expectancy in England and Wales began a lasting rise from the <span class="num">1870s</span>, and wages rose faster after about <span class="num">1860</span> (Topic 5.7). But in <span class="num">1900</span> many city workers were still poor, and a ladder of rank, rebuilt, still stood.` }
          ]
        }
      ],
      useThis: {
        tool: `Contextualize one thing. <em>Name it, name the bigger story, and explain how the story explains it.</em>`,
        limit: `Immigration to New York is Unit 6's story. Here it is who filled the tenements.`,
        comparison: `Against Manchester in the 1840s: forty years later and an ocean away, the same pattern.`
      },
      terms: [
        ['Tenement', 'A crowded apartment building for poor renters.'],
        ['Contextualization', 'Placing a specific development inside the bigger story that explains it.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'The answer',
    intro: `Each card gathers the evidence for one part of the answer. The College Board asks how industrialization changed existing social hierarchies and standards of living, so each card gives what changed and what kept going, and the last asks you to contextualize.`,
    pairs: [
      {
        category: 'Continuity and Change',
        title: 'Who was on top, and who did the work',
        body: `Changed: a middle class rose by money and education and won the vote in the towns in 1832; a working class lived on wages, at the employer's hours. Kept going: landed families kept land, titles and power (Lord Salisbury, a marquess, prime minister 1895 to 1902); most people still worked hard for little.`
      },
      {
        category: 'Continuity and Change',
        title: 'Women and children',
        body: `Changed: working-class women and often children earned wages to add to the family's income (women and girls a majority in most textile mills surveyed in 1833; domestic service; Japan's mills, 1900); middle-class women increasingly kept to the home (Beeton, 1861). Kept going: women paid less, with fewer rights (property laws of 1870 and 1882).`
      },
      {
        category: 'Continuity and Change',
        title: 'Where and how people lived',
        body: `Changed: rapid urbanization (Manchester about 23,000 in 1773, 300,000+ by 1851; England and Wales half urban in 1851; Manhattan 1.4 million by 1890) brought pollution, poverty, crime charges, cholera (about 53,000 dead, 1848 to 1849), crowded housing and too few sewers. Kept going: poverty and disease, old problems made worse; many still poor in 1900.`
      },
      {
        category: 'Contextualization',
        title: 'Place one thing in the bigger story',
        body: `Pick Riis's Bayard Street room, a Manchester cellar, Snow's map or Beeton's book. Name it, name the bigger story it sits inside, and explain how the story explains it.`
      }
    ]
  }
};
