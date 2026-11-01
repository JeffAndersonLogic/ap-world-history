'use strict';

/**
 * Topic 5.8, Reactions to the Industrial Economy from 1750 to 1900: the deep
 * reading.
 *
 * Why this exists. The CED gives 5.8 one learning objective, the causes and
 * effects of calls for changes in industrial societies from 1750 to 1900, four
 * Key Concepts (KC-5.1.V.D, governments, organizations and individuals
 * promoted political, social, educational and urban reforms; KC-5.1.V.A,
 * workers organized, often in unions, and workers' movements and parties
 * promoted alternative visions of society; KC-5.3.IV.A.ii, discontent with
 * established power structures encouraged ideologies including Marx's and the
 * ideas of socialism and communism; KC-5.1.V.B, in response to industrializing
 * states, the Ottoman and Qing governments sought to modernize their economies
 * and militaries, against resistance), a reasoning process of Causation and the
 * skill 2.B, sourcing a source. The First & 10 tells the story in one pass. What
 * it has no room for is the Chartists' six points, how Marx and the socialists
 * differed, why a government would reform to beat its critics, and how the
 * Ottoman and Qing reforms were fought over at court.
 *
 * Rebuilt from the 5.8 story (docs/TOPIC-5-8-STORY-DRAFT.md) on 2026-11-01.
 * The old chapter, "Illegal, Then Inevitable," taught American strikes and
 * abolition (abolition is 5.1's, KC-5.3.I.C) and had nothing on Marx or on the
 * Ottoman and Qing reforms. Every claim here is in docs/TOPIC-5-8-CLAIM-LEDGER.md.
 *
 * Three things carried deliberately:
 *
 *   1. Every section is a cause, a call for change and an effect, so the
 *      chapter is Causation throughout.
 *   2. Each section names who made its sources and why (2.B), starting with
 *      Engels and the Manchester directory, the CED's own sample activity.
 *   3. The effects are mixed on purpose: what each call won, and what it did not.
 */

module.exports = {
  topicKey: 't5-8',
  slug: 'topic-5-8-reactions-to-industrial-economy',
  sourceFile: 'deep-reading-topic-5-8-reactions-to-industrial-economy.html',
  lessonFile: 'lesson-5-8-reactions-to-industrial-economy.html',

  docTitle: 'BeHistorical | Deep Reading | Topic 5.8: Calls for Change',
  eyebrow: 'Topic 5.8 &nbsp;·&nbsp; Deep Reading &nbsp;·&nbsp; AP World History: Modern',
  titleHtml: 'Calls for <em>Change</em>',
  deck: `Industry made some people rich and left many working long hours for little pay, and it made a few countries strong enough to push the rest around. This chapter follows the people who called for change, why they called, and what their calls changed, from Manchester's streets to the courts of Istanbul and Beijing.`,
  meta: ['Five sections', 'The pressure, workers, thinkers, reformers, the old empires', 'Read alongside the First & 10'],
  footerNote: 'Topic 5.8 &nbsp;·&nbsp; Calls for Change &nbsp;·&nbsp; Companion to the First &amp; 10',

  howTo: {
    heading: 'How to Use This',
    intro: `The College Board asks you to explain the causes and effects of calls for change in industrial societies from 1750 to 1900. That is a causation question, and its skill asks you to source a source: who made it, why, for whom, and in what situation. Each section below gives a cause, the people who called for change, and what happened.`,
    steps: [
      `<b>01 The pressure:</b> one city, two descriptions, and why they differ.`,
      `<b>02 Workers organize:</b> unions, the Chartists, and workers' parties.`,
      `<b>03 Thinkers imagine:</b> socialism, Marx, and communism.`,
      `<b>04 Reformers and governments:</b> four kinds of reform, and Bismarck.`,
      `<b>05 The old empires:</b> the Ottoman Empire and Qing China modernize, and meet resistance.`,
      `<b>Then the closing section</b>, which gathers the evidence for an answer.`
    ]
  },

  empires: [
    // ── 01 ─────────────────────────────────────────────────────────────
    {
      id: 'pressure',
      num: '01',
      accent: 'gold',
      name: 'One City, Two Descriptions',
      navLabel: 'The pressure',
      dates: '1845 to 1853 &nbsp;·&nbsp; Manchester',
      thesis: `Industrial capitalism made some people rich and left many working long hours for low pay in crowded towns. Two descriptions of Manchester show both, and show how a source's maker shapes what it says.`,
      parts: [
        {
          heading: 'Engels in Manchester',
          blocks: [
            { p: `Friedrich Engels was a young German whose father was a partner in a cotton business with a mill near Manchester. He was sent to England to learn the business. In <span class="num">1845</span> he published a book, in German, for readers in Germany: <em>The Condition of the Working Class in England in 1844</em>. It describes the streets where Manchester's mill workers lived.` },
            { p: `In the English translation of 1887, Engels describes the river Irk as "a narrow, coal-black, foul-smelling stream, full of debris and refuse." He also noticed how the town was built: "a person may live in it for years, and go in and out daily without coming into contact with a working people's quarter or even with workers, that is, so long as he confines himself to his business or to pleasure walks."` }
          ]
        },
        {
          heading: 'The directory\'s Manchester',
          blocks: [
            { p: `A directory was a book listing a town's businesses and their addresses, sold to merchants and visitors. One of Manchester and Salford, printed by Whellan and Company (the copy that can be read today is dated <span class="num">1853</span>), opens with a chapter called "Sketches of Manchester and its Vicinity." It describes "the innumerable large mills and factories whose tall chimneys shoot up in every direction," which "betoken the activity, enterprise, and wealth of its inhabitants," and it calls the town "the 'workshop of the world'."` },
            { note: {
              kind: 'howknow',
              label: 'How we know: sourcing both',
              html: `Engels wrote to show German readers what industry did to workers; he went on to write <em>The Communist Manifesto</em> with Karl Marx (section 03). The directory was written to sell a book to businesses and to present the town at its best. Neither is lying, and neither is the whole truth. The College Board's sample activity for this topic asks exactly this: how do point of view, purpose and audience explain the difference, and which description is more accurate?`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Start with the pressure. <em>Name one thing industry did to workers' lives, and say who described it, and why.</em>`,
        limit: `Manchester's conditions are Topic 5.9's subject. Here they are the cause; the calls for change are this topic.`,
        comparison: `Against Topic 5.7: there, living standards rose "for some." Here are the people who were not among the some.`
      },
      terms: [
        ['Point of view', 'Who made a source, and where they stood.'],
        ['Purpose', 'Why a source was made.'],
        ['Audience', 'Who a source was made for.']
      ]
    },

    // ── 02 ─────────────────────────────────────────────────────────────
    {
      id: 'workers',
      num: '02',
      accent: 'iron',
      name: 'Workers Organize',
      navLabel: 'Workers',
      dates: '1799 to 1906 &nbsp;·&nbsp; Britain, Germany, the United States',
      thesis: `Workers organized for better conditions, shorter hours, higher wages and a voice in government. In Britain, unions went from a crime to a legal standing; in Britain and Germany, workers built political parties.`,
      parts: [
        {
          heading: 'From a crime to a right',
          blocks: [
            { p: `A single worker who asked for more pay could be fired. Workers together could <span class="kt">strike</span>, stopping work until the employer gave way. That is what a <span class="kt">labor union</span> is for. In Britain, the Combination Acts of <span class="num">1799</span> and <span class="num">1800</span> made it illegal for workers to combine to demand higher wages or shorter hours. Parliament repealed them in <span class="num">1824</span>; a law of <span class="num">1825</span> then limited what unions could lawfully do.` },
            { p: `In <span class="num">1834</span> six farm laborers from Tolpuddle, in Dorset, were sentenced to seven years' transportation to Australia for swearing a secret oath when they formed a union. A mass protest followed, with a petition of about 800,000 names, and in <span class="num">1836</span> they were pardoned.` },
            { p: `Skilled workers built lasting unions for their trades. In June <span class="num">1868</span> unions met in Manchester as the first Trades Union Congress. The Trade Union Act of <span class="num">1871</span> said that a union's purposes were not unlawful just because they were "in restraint of trade," which gave unions legal standing. After years of campaigning, a law of <span class="num">1847</span> limited women and young people in textile mills to ten hours of work a day from <span class="num">1848</span>.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `"Unions became legal in 1824." Not quite. The 1824 repeal ended the ban, but the 1825 law limited what unions could do, and the Tolpuddle laborers were convicted in 1834 under a law against secret oaths. Full legal standing came in 1871. A change can come in steps.`
            } }
          ]
        },
        {
          heading: 'The Charter',
          blocks: [
            { p: `Workers also wanted a voice in making the laws. In <span class="num">1838</span> the <span class="kt">Chartists</span> published a People's Charter with six points: a vote for every man over 21, a secret ballot, no property requirement for members of Parliament, pay for members, districts of equal size, and a new Parliament elected every year. Over 1.2 million people signed their first petition in <span class="num">1839</span>, and the Chartists claimed over three million for the second in <span class="num">1842</span>. Parliament rejected both, and a third in <span class="num">1848</span>.` },
            { p: `The Chartists lost every petition, but most of their points later became law: the property requirement went in 1858, the vote reached many working men in 1867 and 1884 and every man over 21 in 1918, the secret ballot came in 1872, districts were redrawn closer to equal size in 1885, and members were paid from 1911. A new Parliament every year never came.` }
          ]
        },
        {
          heading: 'Parties in different countries',
          blocks: [
            { p: `In Germany, Ferdinand Lassalle founded a workers' party in <span class="num">1863</span>, and August Bebel and Wilhelm Liebknecht founded another in <span class="num">1869</span>. They united in <span class="num">1875</span>. Chancellor Otto von Bismarck banned socialist meetings and newspapers in <span class="num">1878</span>; the law lapsed in <span class="num">1890</span>, when the party renamed itself the Social Democratic Party and won more votes than any other party, about 20 percent.` },
            { p: `In Britain, unions and socialists founded the Labour Representation Committee in February <span class="num">1900</span> to elect working men to Parliament; in <span class="num">1906</span> it won 29 seats and took the name Labour Party. In the United States, the American Federation of Labor, founded in December <span class="num">1886</span> with Samuel Gompers as president, joined unions of skilled workers who wanted higher wages, shorter hours and better conditions.` }
          ]
        }
      ],
      useThis: {
        tool: `Give a cause and an effect. <em>Name one thing workers wanted, how they organized for it, and what they won or failed to win.</em>`,
        limit: `Workers' parties wanted more than wages. Many wanted "alternative visions of society," as the College Board says, which is section 03.`,
        comparison: `Britain and Germany: in both, workers built parties, but Germany's government banned its socialists for twelve years.`
      },
      terms: [
        ['Labor union', 'A group of workers who bargain with their employer together.'],
        ['Strike', 'When workers stop work together until their demands are met.'],
        ['Chartists', 'A British workers\' movement, from 1838, that demanded the vote for every man.']
      ]
    },

    // ── 03 ─────────────────────────────────────────────────────────────
    {
      id: 'thinkers',
      num: '03',
      accent: 'oxide',
      name: 'Imagining a Different Society',
      navLabel: 'Thinkers',
      dates: '1800 to 1891 &nbsp;·&nbsp; Owen, Marx and Engels',
      thesis: `Discontent with who held power encouraged new ideas. Socialists wanted the means of making wealth owned in common; Marx predicted that workers would overthrow the owners and build a classless society he called communism.`,
      parts: [
        {
          heading: 'Owen and socialism',
          blocks: [
            { p: `Robert Owen took over the management of the New Lanark cotton mills in Scotland in <span class="num">1800</span>. He cut the adults' working day from twelve hours to ten and opened a school for the workers' children in <span class="num">1816</span>. In <span class="num">1825</span> he bought land at New Harmony, Indiana, for a community where people would share their work and its rewards; it broke up within two years.` },
            { p: `In the late 1820s, Owen's followers began to call their ideas <span class="kt">socialism</span>: the idea that land, factories and the other things a society uses to make wealth should be owned and run in common, for everyone, and not by private owners for their own profit.` }
          ]
        },
        {
          heading: 'The Manifesto',
          blocks: [
            { p: `In <span class="num">1847</span> a small group of radicals in London, the Communist League, asked Karl Marx and Friedrich Engels to set out its ideas. Their <em>Manifesto of the Communist Party</em> was printed in German in London in February <span class="num">1848</span>. The English translation of 1888, which Engels checked, begins its first section: "The history of all hitherto existing society is the history of class struggles."` },
            { p: `Industry, Marx argued, was splitting society "into two great hostile camps": the <em>bourgeoisie</em>, who owned the factories, and the <em>proletarians</em>, wage workers who owned nothing but their ability to work. The workers would one day overthrow the owners, end private ownership of the means of production ("the theory of the Communists may be summed up in the single sentence: Abolition of private property"), and build a society without classes: <span class="kt">communism</span>. The Manifesto ends: "The proletarians have nothing to lose but their chains. They have a world to win. Working Men of All Countries, Unite!"` },
            { note: {
              kind: 'howknow',
              label: 'How we know: socialism and communism',
              html: `In his preface of 1888, Engels explained why the book was not called a socialist manifesto: in 1847, he wrote, "socialism was a middle-class movement, communism a working-class movement." Socialism was the wider family of ideas; communism, as Marx and Engels used the word, was a working-class movement for revolution and its end point. Marx lived in London from 1849 until his death in 1883, and published the first volume of <em>Capital</em> in <span class="num">1867</span>.`
            } }
          ]
        },
        {
          heading: 'What the ideas did by 1900',
          blocks: [
            { p: `No revolution like the one Marx predicted happened in an industrial country before 1900. His ideas spread through parties instead. In <span class="num">1891</span> Germany's Social Democrats adopted a program, drafted mainly by Karl Kautsky, based on Marx's ideas, while they kept winning seats in elections. In July <span class="num">1889</span> socialist parties from many countries met in Paris and called for workers everywhere to march on May 1, <span class="num">1890</span>, for an eight-hour working day.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `"Marx's communism was tried in the 1800s." No communist government existed in the 1800s. Communist states came in the twentieth century (Unit 7). And "Workers of the world, unite!" is a popular simplification: the 1888 English translation reads "Working Men of All Countries, Unite!"`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Name the cause exactly. <em>"Discontent with established power structures": who held power, and why were socialists angry about it?</em>`,
        limit: `Marx was one of "various" thinkers, as the College Board says, and his revolution did not come before 1900.`,
        comparison: `Owen tried to build a better society by example; Marx predicted that workers would take it by revolution.`
      },
      terms: [
        ['Socialism', 'The idea that the means of making wealth should be owned and run in common.'],
        ['Communism', 'Marx\'s classless society, with no private ownership of the means of production, to be won by workers\' revolution.'],
        ['Proletarians', 'Marx\'s word for wage workers.']
      ]
    },

    // ── 04 ─────────────────────────────────────────────────────────────
    {
      id: 'reform',
      num: '04',
      accent: 'rust',
      name: 'Reformers and Governments',
      navLabel: 'Reform',
      dates: '1833 to 1889 &nbsp;·&nbsp; Britain and Germany',
      thesis: `Governments, organizations and individuals pushed political, social, educational and urban reforms. Some reforms answered workers; Bismarck's were also a weapon against their party.`,
      parts: [
        {
          heading: 'Four kinds of reform',
          blocks: [
            { p: `A <span class="kt">reform</span> changes a law or a system to fix a problem without overthrowing it. The College Board names four kinds, and Britain had all of them.` },
            { p: `<strong>Political.</strong> After the Reform League, a workers' organization, held huge meetings in London's Hyde Park in 1866 and 1867, the Reform Act of <span class="num">1867</span> added about 938,000 voters, many of them working men in towns, and the act of <span class="num">1884</span> brought in many voters in the countryside. No woman could vote in a British national election until <span class="num">1918</span>.` },
            { p: `<strong>Social.</strong> The Factory Act of <span class="num">1833</span> banned children under nine from textile mills, limited children of nine to thirteen to nine hours a day, and appointed four inspectors. The Mines Act of <span class="num">1842</span>, brought in by Lord Ashley, a member of Parliament, after a government inquiry into children's work in mines, stopped all women and girls, and boys under ten, from working inside mines.` },
            { p: `<strong>Educational.</strong> The Education Act of <span class="num">1870</span>, written by William Forster, a government minister, after a campaign by the National Education League, set up elected school boards to provide elementary schools where church schools fell short, and let them require attendance; a law of <span class="num">1880</span> made every local authority require it.` },
            { p: `<strong>Urban.</strong> In the hot summer of <span class="num">1858</span> the River Thames, which carried London's sewage, smelled so foul it was called the "Great Stink." London's engineer Joseph Bazalgette then built 82 miles of large brick sewers, fed by about 1,100 miles of street sewers, to carry the waste away; the work was completed in <span class="num">1875</span>. The crisis in the cities is Topic 5.9's story.` }
          ]
        },
        {
          heading: 'A government reforms to beat its critics',
          blocks: [
            { p: `Germany's government reformed for another reason. Bismarck banned the socialists in <span class="num">1878</span>. Then a message from the emperor in <span class="num">1881</span> promised to cure workers' discontent "not only through the repression of Social Democratic excesses" but also by "the positive promotion of workers' welfare." The Reichstag passed health insurance in <span class="num">1883</span>, accident insurance in <span class="num">1884</span>, and insurance for old age and disability in <span class="num">1889</span>.` },
            { note: {
              kind: 'howknow',
              label: 'How we know: Bismarck\'s motive',
              html: `Bismarck said so himself. In a speech to the Reichstag in 1884 he argued that the socialists' leaders needed "dissatisfied classes": "dissatisfied workers are just what they need." Insurance was meant, in part, to make workers less dissatisfied. Reform could answer workers and also be a weapon against their party.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Sort the reforms. <em>Name one reform of each kind, and say whether a government, an organization or individuals pushed it.</em>`,
        limit: `Reforms fixed problems without overthrowing anything. Socialists said that was not enough; Bismarck hoped it would be.`,
        comparison: `Britain and Germany both reformed; Germany's government reformed partly to defeat the socialists it had banned.`
      },
      terms: [
        ['Reform', 'A change to a law or system to fix a problem without overthrowing it.'],
        ['Factory Act', 'A British law limiting who could work in factories, and for how long.'],
        ['Social insurance', 'Government-run payments to workers who are sick, injured or old.']
      ]
    },

    // ── 05 ─────────────────────────────────────────────────────────────
    {
      id: 'empires',
      num: '05',
      accent: 'sage',
      name: 'The Old Empires Modernize, and Meet Resistance',
      navLabel: 'Old empires',
      dates: '1789 to 1898 &nbsp;·&nbsp; Istanbul and Beijing',
      thesis: `For the Ottoman Empire and Qing China, the pressure came from the industrial powers. Both governments tried to modernize their armies and economies, and both met resistance from inside.`,
      parts: [
        {
          heading: 'The Ottoman Empire',
          blocks: [
            { p: `In the 1790s Sultan Selim III built a new infantry, the "New Order," with European-style uniforms, imported rifles and French instructors. The Janissaries, the old army corps, saw it as a threat, and important conservative religious scholars sided with them. A revolt overthrew Selim in <span class="num">1807</span>. In June <span class="num">1826</span> Sultan Mahmud II destroyed the Janissaries and built a new army along European lines.` },
            { p: `On 3 November <span class="num">1839</span>, at Gülhane in Istanbul, the government announced the <span class="kt">Tanzimat</span> ("reorganization"). Its decree promised "perfect security for life, honor, and property," "a regular system of assessing taxes" and a regular system of military service, and it said that "the Muslim and non-Muslim subjects of our lofty Sultanate shall, without exception, enjoy our imperial concessions." Even before the edict, in <span class="num">1835</span>, the state had set up a fez factory in Istanbul with machines from Britain and Belgium; it added an ironworks in <span class="num">1843</span> and telegraph lines from <span class="num">1855</span>.` },
            { p: `A decree of <span class="num">1856</span> promised equal treatment to Christians and Jews. Many Muslims, who had long held a higher place than Christians and Jews, resented losing it; some Christian church leaders were unhappy too. In December <span class="num">1876</span> the empire got a constitution and a parliament. In February <span class="num">1878</span> Sultan Abdulhamid II suspended the constitution and dissolved the parliament.` }
          ]
        },
        {
          heading: 'Qing China',
          blocks: [
            { p: `Britain defeated China in the Opium War of <span class="num">1839</span> to <span class="num">1842</span>, and Britain and France defeated it again from <span class="num">1856</span> to <span class="num">1860</span> (Unit 6), while the Taiping Rebellion tore through the country until <span class="num">1864</span>. In <span class="num">1861</span> Prince Gong set up an office for foreign affairs, and officials such as Zeng Guofan, Li Hongzhang and Zuo Zongtang began what was called <span class="kt">Self-Strengthening</span>: learning Western ways of making weapons and ships while keeping China's own system of rule. They built the Jiangnan Arsenal in Shanghai (<span class="num">1865</span>), a navy yard at Fuzhou (<span class="num">1866</span>) and a steamship company (<span class="num">1872</span>).` },
            { p: `In <span class="num">1862</span> the court opened the Tongwen Guan in Beijing to train translators. In early <span class="num">1867</span> Prince Gong asked the court to add astronomy and mathematics, taught partly by Western teachers, and to invite young degree-holders from the civil service examinations to study there. "Western learning is something urgently in need of study," his memorial said. Woren, a senior scholar and the emperor's tutor, objected: "establishing a country rests on valuing propriety and righteousness, not on schemes and stratagems." The court backed the prince, and the plan went ahead, but of about 98 who applied, only about 30 were admitted, and few were the well-educated young officials the plan had hoped for.` },
            { p: `In <span class="num">1894</span> and <span class="num">1895</span> Japan defeated China's new navy. In June <span class="num">1898</span> the young Guangxu Emperor declared that reform was national policy and issued decree after decree. In September the Empress Dowager Cixi and officials who opposed the reforms seized power, confined the emperor, and executed six reformers.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `"Cixi spent the navy's money, so China lost in 1895." It is a popular story. The historian Benjamin Elman finds that Cixi's spending on the Summer Palace "did not use up the imperial treasury or leave nothing for the Chinese navy," though tight funding did limit the fleet; the deeper problems were a disorganized empire and poorly trained crews. And the slogan "Chinese learning as the essence, Western learning for practical use" was coined in that form in 1898, not in the 1860s.`
            } }
          ]
        }
      ],
      useThis: {
        tool: `Same pattern, different cause. <em>Name the outside pressure, one reform, and one person or group who resisted.</em>`,
        limit: `Neither empire "refused to change." Both tried; the question is how far reform went, and who stopped it.`,
        comparison: `Against Topic 5.6: Egypt and Japan built industry from the top too. Japan's reforms went furthest, and in 1895 Japan defeated China.`
      },
      terms: [
        ['Tanzimat', 'Ottoman reforms from 1839 to 1876; the word means "reorganization."'],
        ['Janissaries', 'The Ottoman Empire\'s old army corps, destroyed in 1826.'],
        ['Self-Strengthening', 'Qing reforms from the 1860s that borrowed Western weapons and machines.']
      ]
    }
  ],

  closing: {
    heading: 'Building an Answer That Scores',
    navLabel: 'The answer',
    intro: `Each card gathers the evidence for one part of the answer. The College Board asks for the causes and effects of calls for change, so each card gives a cause, the call, and its effects, and the last asks you to source a source.`,
    pairs: [
      {
        category: 'Causation',
        title: 'Workers',
        body: `Cause: long hours, low pay, no vote, and laws against combining. Calls: unions (1824 on), the Chartists (1838 to 1848), the Social Democrats (1875, 1890), the Labour Party (1900, 1906), the American Federation of Labor (1886). Effects: unions' legal standing (1871), the ten-hour law (1847), the vote for many working men (1867, 1884); the Charter's petitions refused.`
      },
      {
        category: 'Causation',
        title: 'Thinkers',
        body: `Cause: "discontent with established power structures." Calls: Owen's socialism (late 1820s), the Communist Manifesto (1848), Capital (1867). Effects: the Social Democrats' Marxist program (1891), the May Day marches (1890); no revolution in an industrial country by 1900.`
      },
      {
        category: 'Causation',
        title: 'Reformers, governments and old empires',
        body: `Reforms: political (1867, 1884), social (1833, 1842), educational (1870, 1880), urban (London's sewers after 1858); Bismarck's insurance (1883, 1884, 1889) to win workers from the socialists. The old empires: outside pressure (the Opium Wars; Japan's victory, 1895); reforms (the Tanzimat from 1839; Self-Strengthening from the 1860s); resistance (the Janissaries, 1807; Muslims who resented 1856; Abdulhamid, 1878; Woren, 1867; Cixi, 1898).`
      },
      {
        category: 'Sourcing and Situation',
        title: 'Source a source',
        body: `Pick Engels, the Manchester directory, the Manifesto, Bismarck's speech or Woren's memorial. Say who made it, why, for whom and when, and how that shapes what it says.`
      }
    ]
  }
};
