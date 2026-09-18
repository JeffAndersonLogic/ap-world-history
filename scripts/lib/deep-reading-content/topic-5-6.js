'use strict';

/**
 * Topic 5.6, Industrialization: Government's Role.
 *
 * Fall 2026 CED repair: this topic is the state-sponsored industrialization
 * topic. Social class, gender/family structure, urban problems, and Marxist
 * reactions belong primarily to Topics 5.9 and 5.8.
 */

module.exports = {
  topicKey: 't5-6',
  slug: 'topic-5-6-industrialization-government-and-society',
  sourceFile: 'deep-reading-topic-5-6-industrialization-government-and-society.html',
  lessonFile: 'lesson-5-6-industrialization-government-and-society.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 5.6: When the State Steps In',
  eyebrow: 'Topic 5.6 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'When the State Steps <em>In</em>',
  deck: `Britain industrialized first under a peculiar mix of coal, private capital, markets, and institutions. Everyone else entered a world in which industrial powers already had stronger factories, weapons, ships, banks, and trade networks. Egypt under Muhammad Ali and Meiji Japan are two answers to the same question: what can a government do when waiting for private industry means falling farther behind?`,
  meta: ['Four sections', 'The catch-up problem, Egypt, Japan, and comparison', 'Read alongside the First & 10'],
  footerNote: 'Topic 5.6 &nbsp;·&nbsp; When the State Steps In &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `Read every case through the same four-part frame: the strategic problem, the state instrument, the mechanism, and the result or limit. Topic 5.6 is not asking whether government is "good" for industry. It is asking how state capacity can substitute for missing capital, infrastructure, skills, or firms when industrialization has become a problem of national power.`,
    steps: [
      `<b>01 The catch-up problem:</b> why late industrializers faced a different world than Britain did.`,
      `<b>02 Muhammad Ali's Egypt:</b> cotton, monopoly, irrigation, factories, and military demand.`,
      `<b>03 Meiji Japan:</b> tax reform, education, infrastructure, model industry, and private scale-up.`,
      `<b>04 Comparison:</b> why similar state intervention produced different outcomes.`,
      `<b>Then the closing cards</b>, which turn the two cases into AP comparison and causation claims.`
    ]
  },

  empires: [
    {
      id: 'catchup',
      num: '01',
      accent: 'gold',
      name: 'The Catch-Up Problem',
      navLabel: 'Why the state intervenes',
      dates: 'c. 1800 to 1900 &nbsp;·&nbsp; Industrial power becomes geopolitical power',
      thesis: `Once Britain industrialized, every state that followed confronted a new strategic problem: industrial weakness now meant military vulnerability, fiscal weakness, and dependence on foreigners, so government intervention could become a substitute for institutions and private capital that did not yet exist at sufficient scale.`,
      parts: [
        {
          heading: 'Britain changed the baseline',
          blocks: [
            { p: `Britain did not industrialize because a ministry in London wrote a national industrial plan. Its factories grew inside an economy already rich in commercial capital, coal, credit, ports, skilled artisans, and overseas markets. By the early nineteenth century that first-mover advantage had become an international fact: British textiles could undersell many local producers, British steamships could move goods reliably, and British weapons and finance backed British diplomacy.` },
            { p: `That meant a ruler in Cairo, Tokyo, Istanbul, St. Petersburg, or Beijing was no longer deciding whether industrialization sounded attractive. The question was whether a state could remain sovereign while industrial powers controlled the machines, transport, weapons, and credit on which modern power increasingly depended.` }
          ]
        },
        {
          heading: 'What governments could supply',
          blocks: [
            { p: `A state could do several things markets might not yet do on their own: tax broadly enough to raise investment capital, build railroads and telegraphs before they were profitable, import engineers and machines, establish schools, create model factories, guarantee military demand, protect domestic producers, or organize monopolies that concentrated scarce resources.` },
            { p: `The mechanism is the Topic 5.6 core: <strong>strategic pressure -> state intervention -> new industrial capacity -> changed national power</strong>. The quality of the answer depends on naming the actual intervention and explaining the missing capacity it supplied.` }
          ]
        }
      ],
      useThis: {
        tool: `The catch-up mechanism. <em>A late-industrializing government may intervene because the market it wants to create is too weak to finance the infrastructure, skills, or firms that would make private industrial investment profitable in the first place.</em>`,
        limit: `State direction can mobilize resources quickly, but it can also become coercive, fiscally expensive, inefficient, or vulnerable to foreign pressure. Intervention is a mechanism, not a guarantee of success.`,
        comparison: `Against Britain in Topic 5.3: Britain's early path relied much more heavily on existing private capital and commercial institutions; Egypt and Japan show the different policy problem faced by states industrializing after an industrial leader already existed.`
      },
      terms: [
        ['State-sponsored industrialization', 'Government use of policy, investment, institutions, or direct ownership to accelerate industrial development.'],
        ['Catch-up problem', 'The disadvantage faced by states trying to industrialize after competitors already possess industrial capital, technology, infrastructure, and military power.'],
        ['State capacity', 'The ability of a government to tax, administer, educate, build infrastructure, enforce policy, and sustain projects over time.']
      ]
    },

    {
      id: 'egypt',
      num: '02',
      accent: 'copper',
      name: 'Muhammad Ali Tries to Build Industry from the Top',
      navLabel: 'Egypt',
      dates: '1805 to 1848 &nbsp;·&nbsp; Cotton, factories, and military modernization',
      thesis: `Muhammad Ali's industrial program joined agriculture, factories, and the army into one state project: control cotton, process more of it at home, equip a stronger military, and reduce dependence on imported manufactures.`,
      parts: [
        {
          heading: 'Cotton was not just a crop',
          blocks: [
            { p: `Muhammad Ali reorganized Egyptian agriculture around state-controlled production, especially <span class="kt">cotton</span>. Irrigation projects expanded cultivation, while state monopolies bought crops at controlled prices and directed their sale. Cotton supplied export revenue, but the larger ambition was to turn more raw material into finished goods inside Egypt.` },
            { p: `The government established <span class="kt">cotton textile factories</span>, arsenals, shipyards, and other military workshops. It imported machinery and foreign technicians and used conscription and state purchasing to guarantee demand. Industrialization and military reform were parts of the same project rather than separate policies.` }
          ]
        },
        {
          heading: 'What the state substituted for',
          blocks: [
            { p: `Egypt lacked the depth of private industrial capital, technical schools, machine-building firms, and commercial institutions that Britain had accumulated. The state tried to supply those missing pieces directly by concentrating taxes, labor, raw materials, and investment under government control.` },
            { p: `That strategy could create factories rapidly, but it also imposed heavy burdens. Peasants faced conscription, taxation, and monopoly purchasing. European powers preferred open Egyptian markets and constrained Muhammad Ali's protected system after his military expansion threatened the Ottoman balance of power. The case shows both what state power can build and what an unequal international system can limit.` }
          ]
        }
      ],
      useThis: {
        tool: `Import substitution by state direction. <em>Controlling cotton and building textile mills attempts to keep more value inside the economy instead of exporting raw cotton and importing higher-value cloth.</em>`,
        limit: `The factories alone do not prove a self-sustaining industrial transformation. Ask whether skills, finance, machinery production, private firms, and policy autonomy survive once state coercion or protection weakens.`,
        comparison: `Against Meiji Japan: both governments used direct state action to accelerate industrial capacity, but Egypt relied more heavily on monopolies and coercion and faced tighter European constraints on maintaining protection.`
      },
      terms: [
        ['Muhammad Ali', 'Ottoman governor of Egypt who built a highly centralized military and economic modernization program.'],
        ['Cotton textile industry', 'The CED illustrative example for Egyptian state-sponsored industrialization.'],
        ['State monopoly', 'Government control over purchase or sale of a commodity, used by Muhammad Ali to concentrate revenue and direct production.'],
        ['Import substitution', 'Producing domestically goods that had previously been imported, reducing dependence on foreign manufactures.']
      ]
    },

    {
      id: 'meiji',
      num: '03',
      accent: 'gold',
      name: 'Meiji Japan Builds the Platform First',
      navLabel: 'Japan',
      dates: '1868 to 1900 &nbsp;·&nbsp; Reform, infrastructure, and industrial power',
      thesis: `Meiji leaders did not simply "copy the West." They used government to build the institutions and infrastructure that made private industrial expansion possible, then converted industrial capacity into military and regional power.`,
      parts: [
        {
          heading: 'The shock that made modernization urgent',
          blocks: [
            { p: `Western gunboat diplomacy and the unequal treaties exposed the Tokugawa state's inability to control foreign access. After the <span class="kt">Meiji Restoration</span> of 1868, leaders concluded that preserving independence required a stronger tax base, modern armed forces, industrial production, transport, communications, and education.` },
            { p: `The slogan "rich country, strong army" captures the logic. Industrialization was not treated as a consumer project. It was a sovereignty project in which economic capacity and military capacity reinforced one another.` }
          ]
        },
        {
          heading: 'Build the platform, then let firms scale it',
          blocks: [
            { p: `The government centralized land taxes, expanded mass education, hired foreign experts, sent the <span class="kt">Iwakura Mission</span> to study institutions abroad, constructed railroads and telegraph lines, and established model textile mills, shipyards, mines, and arsenals.` },
            { p: `Many state enterprises were later sold to private owners. That matters analytically: Meiji industrialization was not permanent state ownership. The state absorbed early risk and built infrastructure and expertise, then private firms expanded on top of that platform, helping create the large business groups later known as <span class="kt">zaibatsu</span>.` }
          ]
        },
        {
          heading: 'Industrial capacity becomes regional power',
          blocks: [
            { p: `By the 1890s Japan had developed modern transport, finance, factories, and armed forces on a scale unmatched by most of Asia. Victory over Qing China in the <span class="num">1894-1895</span> Sino-Japanese War demonstrated that economic and institutional reform had changed the regional balance of power.` },
            { p: `This is why KC-5.2.II.A joins industrialization to regional power. The effect is not simply "more factories." State reform changed what Japan could do internationally.` }
          ]
        }
      ],
      useThis: {
        tool: `State-built platform. <em>The government can supply infrastructure, education, technology transfer, and early enterprise until private firms are capable of expanding on their own.</em>`,
        limit: `Meiji success depended on coercive taxation, disciplined administration, social disruption, and favorable choices as well as policy; it should not be reduced to a frictionless modernization story.`,
        comparison: `Against Egypt: both states intervened because foreign industrial power threatened autonomy, but Japan paired industrial policy with broader institutional reconstruction and retained greater policy space to sustain it.`
      },
      terms: [
        ['Meiji Restoration', 'The 1868 political transformation that centralized rule under the emperor and launched wide-ranging institutional reform.'],
        ['Iwakura Mission', 'The 1871-1873 diplomatic and study mission through the United States and Europe, used to gather institutional and technical knowledge.'],
        ['Model factory', 'A government-built enterprise intended to demonstrate technology, train workers, and establish an industry before private firms could do so at scale.'],
        ['Zaibatsu', 'Large private business groups that became important in later Japanese industrialization.']
      ]
    },

    {
      id: 'compare',
      num: '04',
      accent: 'iron',
      name: 'Same Tool, Different Capacity',
      navLabel: 'Comparison',
      dates: '19th century &nbsp;·&nbsp; Why outcomes differed',
      thesis: `Egypt and Japan prove that "government intervention" is too broad to explain an outcome. What matters is which capacities the state builds, whether policy can be sustained, and how much external pressure constrains the choices available.`,
      parts: [
        {
          heading: 'The similarity that matters',
          blocks: [
            { p: `Both Muhammad Ali and Meiji leaders saw industrial weakness as a strategic problem and used state authority to accelerate change. Both directed resources toward infrastructure and industry, imported foreign knowledge, and linked industrial policy to military strength.` },
            { p: `That similarity is stronger than saying both "modernized." It identifies the same mechanism: the government supplied capital, coordination, or institutions that private enterprise could not yet supply at sufficient scale.` }
          ]
        },
        {
          heading: 'The difference that explains the outcome',
          blocks: [
            { p: `Japan's program reached more deeply into institutions that reproduce industrial capacity over time: national taxation, mass schooling, transport, communications, technical learning, and a transition toward private industrial ownership. Egypt's program remained more dependent on monopolies, coercive extraction, and a ruler-centered fiscal system.` },
            { p: `External conditions also differed. European diplomatic and commercial pressure directly limited Muhammad Ali's protected economy, while Japan, although constrained by unequal treaties, retained enough autonomy to sustain a broad domestic reform program and eventually renegotiate its position from greater strength.` }
          ]
        }
      ],
      useThis: {
        tool: `Comparison by mechanism. <em>Hold the goal constant—industrial catch-up—and compare the instruments, state capacity, external constraints, and ability to sustain policy.</em>`,
        limit: `Do not turn the comparison into a cultural explanation about one society being more "modern." The difference is institutional and geopolitical, not civilizational.`,
        comparison: `Forward to Unit 6: industrial capacity will become one of the resources that makes imperial expansion possible, while states without it face growing pressure to reform, submit, or resist.`
      },
      terms: [
        ['Policy autonomy', 'The ability of a state to choose and sustain economic policy without external powers forcing it to change course.'],
        ['Institutional capacity', 'Durable government systems that can reproduce skills, revenue, infrastructure, and administration beyond one ruler or project.'],
        ['Regional power', 'A state capable of shaping the political and military order around it; Meiji industrialization contributed directly to Japan attaining this position.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'Build the comparison',
    intro: `A strong Topic 5.6 answer never says only that "the government helped." It names the strategic pressure, the policy instrument, the capacity created, and the resulting change or limit.`,
    pairs: [
      {
        category: 'Causation',
        title: 'Industrial weakness became a sovereignty problem',
        body: `Once industrial states could produce cheaper manufactures, finance larger projects, and field steam-powered transport and modern weapons, late-industrializing states faced more than an economic disadvantage. A government that could not mobilize capital, infrastructure, skills, or industry risked military dependence and unequal commercial terms. That is why rulers such as Muhammad Ali and Meiji leaders used government power to supply capacities weak private markets could not yet provide.`
      },
      {
        category: 'Evidence',
        title: 'Muhammad Ali used cotton to connect agriculture, factories, and military power',
        body: `Egypt expanded irrigation and cotton cultivation, used state monopolies to concentrate revenue, imported machinery and expertise, and built cotton textile and military factories. The mechanism was import substitution and military supply: retain more value inside Egypt and reduce dependence on foreign manufactures. European pressure and a coercive fiscal system limited the durability of the program.`
      },
      {
        category: 'Evidence',
        title: 'Meiji Japan built institutions first and private scale second',
        body: `The Meiji state centralized taxation, expanded education, built railroads and telegraphs, hired foreign experts, sent the Iwakura Mission abroad, and created model factories, shipyards, and arsenals. Many enterprises were later sold to private firms, so state investment created the platform on which private industrial expansion could continue. By the 1890s that capacity had become regional military power.`
      },
      {
        category: 'Comparison',
        title: 'State intervention explains the strategy; state capacity explains the difference',
        body: `Egypt and Japan both intervened because industrial power threatened sovereignty. Japan's more durable transformation depended on a broader institutional package, stronger capacity to tax and educate, infrastructure that linked national markets, a transition toward private industrial firms, and greater ability to sustain policy despite foreign pressure. The comparison is therefore not "state versus market" but how effectively the state creates the conditions in which an industrial market can grow.`
      }
    ]
  }
};
