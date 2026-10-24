'use strict';

/**
 * Topic 5.6, Industrialization: Government's Role from 1750 to 1900: the deep
 * reading.
 *
 * Why this exists. The CED gives 5.6 one learning objective, the causes and
 * effects of economic strategies of different states and empires, two Key
 * Concepts (KC-5.1.V.C, a small number of states and governments promoted
 * their own state-sponsored visions of industrialization, with Muhammad Ali's
 * cotton textile industry in Egypt as its example; KC-5.2.II.A, U.S. and
 * European influence in Asia led to internal reform in Japan that supported
 * industrialization and led to Japan's growing regional power in the Meiji
 * Era), a reasoning process of Causation and the skill 5.A, patterns. The
 * First & 10 tells the story in one pass. What it has no room for is how each
 * government paid for its industry, how the historians' debate over Egypt
 * runs, and why the two results differed.
 *
 * Rebuilt from the 5.6 story (docs/TOPIC-5-6-STORY-DRAFT.md) on 2026-10-24.
 * The old chapter, "One Question, Five Answers," taught liberalism,
 * conservatism, socialism, Marxism, British reform laws and Bismarck's
 * insurance, which the CED gives to 5.8 and 5.9, and taught neither Key
 * Concept.
 *
 * Three things carried deliberately:
 *
 *   1. Two chains with the same four links (threat, decision, strategy,
 *      result), so the chapter is causal and the comparison is ready-made.
 *   2. The CED's own example, Muhammad Ali's cotton mills, with the causes of
 *      their failure weighed rather than reduced to one.
 *   3. All three links of KC-5.2.II.A: outside pressure, internal reform, and
 *      regional power.
 */

module.exports = {
  topicKey: 't5-6',
  slug: 'topic-5-6-industrialization-government-and-society',
  sourceFile: 'deep-reading-topic-5-6-industrialization-government-and-society.html',
  lessonFile: 'lesson-5-6-industrialization-government-and-society.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 5.6: Industry on Purpose',
  eyebrow: 'Topic 5.6 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Industry <em>on Purpose</em>',
  deck: `In Britain and the United States, private owners built the first factories. A few governments did not wait. This chapter follows two of them, Egypt under Muhammad Ali and Japan in the Meiji era: why each government built industry itself, how it paid for it, and why Japan's industry lasted while most of Egypt's factories closed.`,
  meta: ['Five sections', 'Why a state builds, Egypt\'s strategy and its end, Japan\'s reforms, Japan builds and sells', 'Read alongside the First & 10'],
  footerNote: 'Topic 5.6 &nbsp;·&nbsp; Industry on Purpose &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The College Board asks you to explain the causes and effects of the economic strategies of different states. That is a causation question, and it comes with a comparison: two states, the same strategy, different results. Section 01 says why any government would build industry; sections 02 and 03 follow Egypt; sections 04 and 05 follow Japan. Build a chain for each with the same four links, the threat, the decision, the strategy and the result, then use the closing section to compare them.`,
    steps: [
      `<b>01 Why a state builds:</b> the exception, and the fear behind it.`,
      `<b>02 Egypt's strategy:</b> a governor, a cotton monopoly, state mills and an army.`,
      `<b>03 Egypt's result:</b> it worked, then it stopped, and why.`,
      `<b>04 Japan's reforms:</b> Perry, the unequal treaties, and a new government.`,
      `<b>05 Japan builds, then sells:</b> railways and mills, the 1880 sale, and regional power.`,
      `<b>Then the closing section</b>, which gathers the evidence for an answer.`
    ]
  },

  empires: [
    // ── 01 ─────────────────────────────────────────────────────────────
    {
      id: 'exception',
      num: '01',
      accent: 'gold',
      name: 'Why a State Builds Factories',
      navLabel: 'Why a state builds',
      dates: 'The early 1800s &nbsp;·&nbsp; The exception',
      thesis: `Most early factories were built by private owners. A small number of governments built industry themselves, wanting armies to match stronger powers.`,
      parts: [
        {
          heading: 'The rule, and the exception',
          blocks: [
            { p: `In Britain, Richard Arkwright and his partners paid for the mill at Cromford (Topic 5.3). In the United States, Boston merchants paid for the big cotton mills at Lowell (Topic 5.4). Governments helped in other ways, with patents, roads and taxes on foreign goods, but private owners built and owned the factories.` },
            { p: `A small number of governments did something different. They planned factories, paid for them, owned them and protected them. This is <span class="kt">state-sponsored industry</span>, and the College Board names it as the exception: "a small number of states and governments promoted their own state-sponsored visions of industrialization."` }
          ]
        },
        {
          heading: 'The fear behind it',
          blocks: [
            { p: `By the early 1800s the countries with factories, steam engines and new weapons were becoming the strongest in the world. A ruler watching them could see two dangers: a country without industry could be beaten in war, or forced to sign treaties it did not want. Waiting for merchants to build factories might take too long. So a few rulers decided to build industry themselves, to make their states strong.` }
          ]
        }
      ],
      useThis: {
        tool: `Start with the cause. <em>Before you describe what a government built, say what it was afraid of.</em>`,
        limit: `"A small number" is the College Board's phrase: state-built industry was the exception, not how industry usually began.`,
        comparison: `Against Topics 5.3 and 5.4: there, private owners built the first factories; here, governments did.`
      },
      terms: [
        ['State-sponsored industry', 'Industry that a government plans, pays for and protects.'],
        ['Private owner', 'A person or company, not the government, that owns a business.']
      ]
    },

    // ── 02 ─────────────────────────────────────────────────────────────
    {
      id: 'egypt-strategy',
      num: '02',
      accent: 'iron',
      name: 'Egypt\'s Strategy',
      navLabel: 'Egypt\'s strategy',
      dates: '1805 to the 1830s &nbsp;·&nbsp; Muhammad Ali',
      thesis: `Muhammad Ali, Egypt's Ottoman governor, used the state's control of farming and cotton to pay for factories, and the factories supplied his army.`,
      parts: [
        {
          heading: 'A governor who wanted power of his own',
          blocks: [
            { p: `In <span class="num">1798</span> a French army under Napoleon invaded Egypt and easily defeated its rulers, the Mamluks, a class of soldier-lords. The French left in <span class="num">1801</span>. Among the Ottoman troops sent to take Egypt back was Muhammad Ali, an officer from an Albanian family. In <span class="num">1805</span> the Ottomans named him governor of Egypt, and by <span class="num">1811</span>, after his men killed the Mamluk leaders in the Cairo Citadel, he ruled alone.` },
            { p: `Egypt was a province of the Ottoman Empire, and Muhammad Ali was the sultan's governor. Napoleon's victory had shown what a modern European army could do. Muhammad Ali wanted Egypt strong enough that he, and his family after him, could hold it, even against the sultan. Strength meant an army, and an army needed guns, uniforms and ships.` }
          ]
        },
        {
          heading: 'Crops paid for factories',
          blocks: [
            { p: `His government took control of Egypt's farming. It told peasants what crops to plant, bought the crops at low prices, and sold them abroad at higher ones. When there is only one allowed buyer or seller, that is a <span class="kt">monopoly</span>. A new crop, long-staple cotton, first grown for sale in <span class="num">1820</span>, earned a great deal of money.` },
            { p: `With that money, from the late 1810s, the government built factories: cotton mills, and works for weapons, sugar and other goods. It bought machines in Europe and hired European experts to run them. By the early 1830s about 30 cotton mills employed about 30,000 workers, many of them making cloth and uniforms for the army. To protect the mills, Muhammad Ali kept cheap British cloth out of Egypt.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the mills and their workers',
              html: `The historian Joel Beinin, writing about the first Egyptian factory workers, gives the count: "By the early 1830s 30 cotton mills were in operation with a labor force of 30,000." Another recent study also counts about 30 state textile factories in the 1830s. The U.S. Library of Congress's history of Egypt adds that "Workers were drafted into factories to weave on government looms."`
            } }
          ]
        },
        {
          heading: 'Drafted workers, drafted soldiers',
          blocks: [
            { p: `The workers did not choose these jobs. They were drafted, the way Egyptian peasants had long been made to dig canals and repair dams. From <span class="num">1822</span> peasants were drafted into the army too. Forcing people to serve in the army is <span class="kt">conscription</span>. The army reached about 130,000 soldiers by the early 1830s. The historian Khaled Fahmy writes that Muhammad Ali's schools, factories and hospitals "were all founded to serve it." In the 1820s Muhammad Ali also sent Egyptian students to Europe to learn its sciences.` }
          ]
        }
      ],
      useThis: {
        tool: `Follow the money. <em>Say who paid for the factories (peasants, through the cotton monopoly) and what the factories were for (the army).</em>`,
        limit: `Muhammad Ali was an Ottoman governor building power for his family, not an Egyptian nationalist building a nation: his court's official language was Ottoman Turkish.`,
        comparison: `Against Japan (section 05): both governments made farmers pay; Egypt through a monopoly on crops, Japan through a land tax.`
      },
      terms: [
        ['Monopoly', 'Control of a trade by one buyer or seller, here the government.'],
        ['Conscription', 'Forcing people to serve in the army.'],
        ['Long-staple cotton', 'Cotton with long fibers, which makes strong, fine thread.']
      ]
    },

    // ── 03 ─────────────────────────────────────────────────────────────
    {
      id: 'egypt-result',
      num: '03',
      accent: 'sage',
      name: 'Egypt\'s Result',
      navLabel: 'Egypt\'s result',
      dates: '1831 to the 1840s &nbsp;·&nbsp; It worked, then it stopped',
      thesis: `The army won wars until European powers stopped it. Then, with the army cut, the monopolies ended, almost no coal and drafted workers, most of the factories failed.`,
      parts: [
        {
          heading: 'It worked',
          blocks: [
            { p: `For a while the strategy did what Muhammad Ali wanted. In <span class="num">1831</span> his army, led by his son Ibrahim, invaded Syria, and it beat the sultan's own armies more than once.` }
          ]
        },
        {
          heading: 'Then it stopped',
          blocks: [
            { p: `Britain, Austria, Russia and Prussia did not want a strong Egypt breaking the Ottoman Empire apart. In <span class="num">1840</span> they sided with the sultan, and British warships and Ottoman troops drove Ibrahim out of Syria. In <span class="num">1841</span> the sultan made the governorship of Egypt <span class="kt">hereditary</span> in Muhammad Ali's family, passing to its eldest male, but Egypt had to give up its conquests except Sudan. The sultan's decree said: "In time of peace, 18,000 men will suffice." Egypt also had to accept a trade treaty that Britain had signed with the Ottoman sultan in <span class="num">1838</span>, which ended Muhammad Ali's monopolies and opened Egypt to cheap foreign goods.` },
            { p: `The factories had problems of their own, too. Egypt had almost no coal, so many machines were turned by animals instead of steam engines. The drafted workers resisted the work, and the managers had little experience. By the mid-1840s, about a decade after their peak in the early 1830s, most of the new factories had failed. Egypt went on growing more and more cotton, almost all of it sold abroad, much of it to the mills of Britain. What that led to is Unit 6.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: historians disagree',
              html: `Historians weigh the causes differently. Joel Beinin lists four: "inexperienced management, lack of adequate natural resources (especially fuel), peasant resistance to factory discipline and competition from Europe." The historian Afaf Lutfi al-Sayyid Marsot stressed Britain's hostility to a strong Egypt. The economic historians Laura Panza and Jeffrey Williamson argue that, while they lasted, "his policies were successful." Most of the factories had failed by the mid-1840s.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Weigh the causes. <em>Name at least one cause from outside Egypt and one from inside, and say which you think mattered most.</em>`,
        limit: `Do not say Britain alone destroyed Egypt's industry: Japan also had to accept low taxes on foreign goods, and its industry grew.`,
        comparison: `Against Japan (section 05): Japan's industry lasted; most of Egypt's did not.`
      },
      terms: [
        ['Hereditary', 'Passed down from parent to child.'],
        ['Treaty', 'A written agreement between states.']
      ]
    },

    // ── 04 ─────────────────────────────────────────────────────────────
    {
      id: 'japan-reform',
      num: '04',
      accent: 'gold',
      name: 'Japan\'s Reforms',
      navLabel: 'Japan\'s reforms',
      dates: '1853 to 1873 &nbsp;·&nbsp; Outside pressure, inside reform',
      thesis: `American and European warships and unequal treaties pushed Japan's new Meiji government to reform the country before it built industry.`,
      parts: [
        {
          heading: 'Ships and treaties',
          blocks: [
            { p: `In <span class="num">1853</span> an American naval officer, Commodore Matthew Perry, sailed warships into Edo Bay, near today's Tokyo, and demanded that Japan open its ports to trade. Japan had no navy that could stop him. Treaties in <span class="num">1854</span> and <span class="num">1858</span> opened Japanese ports to Americans and Europeans, let foreigners accused of crimes in Japan be tried in their own countries' courts, and took away Japan's control over its own trade. A tariff agreement of <span class="num">1866</span> held Japan's taxes on most imports to about 5 percent, and Japan did not win back full control of them until 1911. A treaty forced on a weaker country that gives the stronger side rights it does not give back is an <span class="kt">unequal treaty</span>.` }
          ]
        },
        {
          heading: 'A new government',
          blocks: [
            { p: `Some samurai blamed the shogun, the military ruler who governed Japan in the emperor's name, for giving in. In <span class="num">1868</span> a group of young samurai overthrew him and governed in the name of the fifteen-year-old emperor, Meiji. This is the <span class="kt">Meiji Restoration</span>. In April 1868 the new government issued the Charter Oath, which promised: "Knowledge shall be sought throughout the world so as to strengthen the foundations of imperial rule." Its slogan was "Rich country, strong army."` }
          ]
        },
        {
          heading: 'Reform first',
          blocks: [
            { p: `The Meiji leaders changed Japan itself. In <span class="num">1871</span> they abolished the domains of the old lords and made one central state. The samurai lost their privileges, and men of every class were drafted into a national army. A national school system began in <span class="num">1872</span>. A new land tax, paid in money instead of rice, gave the government money to spend. From 1871 to 1873 a group of leaders, the Iwakura Mission, toured the United States and Europe to study how they worked.` }
          ]
        }
      ],
      useThis: {
        tool: `Link outside pressure to inside reform. <em>Name the pressure (Perry, the unequal treaties), then one reform, then how that reform helped Japan build industry.</em>`,
        limit: `Japan did not "just copy the West": its leaders chose what to learn, and their stated aim was to strengthen imperial rule.`,
        comparison: `Against Egypt (section 02): Egypt's strategy was one governor's project; Japan changed its whole society first.`
      },
      terms: [
        ['Unequal treaty', 'A treaty forced on a weaker country that gives the stronger side rights it does not give back.'],
        ['Meiji Restoration', 'The 1868 overthrow of the shogun by samurai who governed in the name of the emperor, Meiji.'],
        ['Shogun', 'The military ruler who governed Japan in the emperor\'s name until 1868.']
      ]
    },

    // ── 05 ─────────────────────────────────────────────────────────────
    {
      id: 'japan-build',
      num: '05',
      accent: 'iron',
      name: 'Japan Builds, Then Sells',
      navLabel: 'Japan builds, then sells',
      dates: '1872 to 1895 &nbsp;·&nbsp; From state industry to regional power',
      thesis: `Japan's government built railways, mills and shipyards, then sold most of them to private companies, and the strength it built made Japan a regional power.`,
      parts: [
        {
          heading: 'The state builds',
          blocks: [
            { p: `The government built Japan's first railway, from Tokyo to Yokohama, which opened in <span class="num">1872</span> with British engineers. In the same year it opened the Tomioka Silk Mill, with French machines and a French engineer, Paul Brunat, to teach Japanese workers, mostly young women, to reel silk by machine, so the method could spread to other mills. It built telegraph lines, shipyards, mines, and factories for weapons and for goods such as cement, glass and cloth.` },
            { p: `Farmers paid for much of this through the land tax. Some samurai rebelled against losing their place, and in <span class="num">1877</span> the new army of drafted commoners crushed the last great revolt.` }
          ]
        },
        {
          heading: 'Then the state sells',
          blocks: [
            { p: `Running so many businesses cost more than the government could afford. In <span class="num">1880</span> it decided to sell most of them to private investors. Business families such as Mitsui and Mitsubishi bought them and grew into huge business groups called <span class="kt">zaibatsu</span>: Mitsubishi bought the Nagasaki shipyard in 1887, and Mitsui took over the Miike coal mine, the country's largest, in 1889. Private companies such as the Osaka Spinning Company (Topic 5.4) built more. The state had started the industry; private business carried it on.` }
          ]
        },
        {
          heading: 'A regional power',
          blocks: [
            { p: `In <span class="num">1894</span> Britain agreed to end the foreign courts in Japan from <span class="num">1899</span>, so that foreigners there would be tried by Japanese law, and other countries followed; Japan won back full control of its tariffs only in 1911. In 1894 and 1895 Japan fought China over Korea and won. In the Treaty of Shimonoseki, China gave up its claim over Korea, gave the island of Taiwan to Japan, and agreed to pay an <span class="kt">indemnity</span> of 200 million taels of silver (a tael is a Chinese measure of silver). Within a week, Russia, Germany and France demanded that Japan give back one more piece of land it had won, and Japan gave in, which angered Japan's leaders. Japan, forced to open its ports forty years before, was now a <span class="kt">regional power</span>, with a colony of its own. What empires did with that power is Unit 6.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: the treaty\'s own words',
              html: `The Treaty of Shimonoseki, signed on 17 April 1895, still exists. Its first article says China "recognizes definitively the full and complete independence and autonomy of Korea"; its fourth says China will pay "200,000,000 Kuping taels." Korea did not become a Japanese colony until 1910.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Finish the chain. <em>Say what the state built, who carried it on after 1880, and one piece of evidence that Japan became a regional power.</em>`,
        limit: `Industry was one reason Japan grew strong; its reforms and its new army were others.`,
        comparison: `Against Egypt (section 03): Egypt's army was cut and its mills mostly closed; Japan's industry passed to private companies and kept growing.`
      },
      terms: [
        ['Zaibatsu', 'A huge Japanese family business group that owned many companies.'],
        ['Regional power', 'A state strong enough to win wars and gain land in its own part of the world.'],
        ['Indemnity', 'Money a defeated country is made to pay the winner.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'The answer',
    intro: `Each card gathers the evidence for one part of the answer. The College Board asks for the causes and effects of the economic strategies of different states, and its skill for this topic is finding a pattern, so the cards give each state's chain and then compare them.`,
    pairs: [
      {
        category: 'Causation',
        title: 'Egypt\'s chain',
        body: `Evidence to sort: Napoleon's invasion (1798); Muhammad Ali governor (1805), ruling alone by 1811, aiming to hold Egypt for his family; the cotton monopoly and long-staple cotton (1820); about 30 state cotton mills and 30,000 drafted workers by the early 1830s; conscription from 1822, an army of about 130,000; Syria invaded (1831); driven out (1840); the army cut to 18,000 and the 1838 treaty accepted (1841); almost no coal; most mills failed within about a decade.`
      },
      {
        category: 'Causation',
        title: 'Japan\'s chain',
        body: `Evidence to sort: Perry's warships (1853); the treaties of 1854 and 1858; the Meiji Restoration and the Charter Oath (1868); "Rich country, strong army"; domains abolished (1871); conscription, schools (1872), the land tax; the Iwakura Mission (1871 to 1873); the Tokyo to Yokohama railway and the Tomioka Silk Mill (1872); the 1880 decision to sell; Mitsui and Mitsubishi; the end of the foreign courts (agreed 1894, in force 1899); victory over China and Taiwan (1895).`
      },
      {
        category: 'Making Connections',
        title: 'The pattern',
        body: `Evidence to sort into "both," "Egypt only" and "Japan only": an army to match stronger powers; state money for the first factories; a cotton monopoly; a land tax paid in money; European machines and experts; students sent to Europe in the 1820s; the Iwakura Mission (1871 to 1873); drafted mill workers; a national school system; an Ottoman province. Then write your own pattern sentence.`
      },
      {
        category: 'Making Connections',
        title: 'The difference',
        body: `Evidence to weigh: Egypt's army cut to 18,000 in 1841 and its monopolies ended; almost no coal in Egypt, many machines turned by animals; drafted workers and inexperienced managers; Japan never conquered, though forced into unequal treaties; Japan's reforms of 1871 to 1873; the Miike mine; the 1880 sale to Mitsui and Mitsubishi; Japan's 5 percent tariffs from 1866. Choose the reason you think mattered most, and say why.`
      }
    ]
  }
};
