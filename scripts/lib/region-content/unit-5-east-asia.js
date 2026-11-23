'use strict';

/**
 * Unit 5 by region: East Asia (Qing China and Japan).
 * One continuous story of China and Japan from 1750 to 1900, told in four sections: China as the
 * world's largest maker and the defeats that made reform urgent (KC-5.1.II.B), Self-Strengthening,
 * its opponents and its end in 1898, with HSBC as the bank of the China trade (KC-5.1.V.B,
 * KC-5.1.III.B), Japan forced open and reformed by the Meiji government (KC-5.2.II.A), and Japan's
 * state-started industry, the women who worked it, and its rise to regional power (KC-5.1.V.C,
 * KC-5.1.I.D, KC-5.1.I.C, KC-5.1.VI.B). Facts come from the Topic 5.4, 5.6, 5.7 and 5.8 chapters
 * and their claim ledgers, and from the reviewed rebuild of 5.9 (women in Japan's factories,
 * 1900), keeping their narrowings (Bairoch's shares are estimates; Cixi's spending did not empty
 * the navy's purse, and for 1894 Elman points to fleets never under one command, Japan's faster
 * ships, quick-firing guns and better naval leadership, and Chinese ships short of shells; the Meiji state built the first railway and model factories and took over
 * shipyards and mines begun under the shogun; Taiwan "a colony of its own", not "its first"; Korea
 * not a colony until 1910). Left out on purpose: the Opium Wars and the Taiping Rebellion beyond a
 * sentence each, and the treaty ports, which are Unit 6's; Korea, which the Unit 5 CED does not
 * name except through the war of 1894 and 1895.
 *
 * Plain-language and accuracy pass (2026-11-21): sentences cut to one idea each, definitions moved
 * out from between commas into parentheses or their own sentences, and every College Board
 * quotation moved out of the story into one "What the College Board says" box per section. Each box
 * opens "In short:", then quotes every Key Concept sentence whole, word for word from
 * scripts/lib/ced-source/unit-5.js (KC-5.2.II.A is no longer cut before "and led to the growing
 * regional power of Japan in the Meiji Era"), and labels HSBC "An optional College Board example".
 * Added: "The story in short" (inShort), a "How we know" box on Bairoch's estimates (from Topic
 * 5.4), a "Common mistake" box on Japan copying the West (from Topic 5.6), and the Meiji chronology separated by date: the shogun's resignation in late 1867,
 * the civil war won by 1869, the domains abolished in 1871, the conscription law of 1873 and the
 * sword ban of 1876 (Wikipedia, "Boshin War", "Imperial Japanese Army" and "Haitō Edict"; the
 * dates are standard). Dropped to fit the length: the Dent and Company sentence. Topic 5.3 is now
 * listed, because KC-5.1.I.C, which the chapter teaches through Japan's mills, is a Topic 5.3
 * Key Concept.
 *
 * Review loop pass 3 (2026-11-23, findings U1, U2, U5): reform and the first state industries are
 * told as happening in the same years, not in sequence (the shogun's shipyards taken in 1868, the
 * railway, Tomioka and the schools all in 1872; Topic 5.6); Elman's 1894 diagnosis follows Modern
 * Asian Studies 38:2 (2004), pp. 317 to 320; the 1873 conscription law "excused many men", as Topic 5.6.
 *
 * Review loop pass 2 (2026-11-22, findings N5, Q7): the Intellectual card no longer says "only
 * Japan kept at it" (Self-Strengthening went on for decades; the 1898 reforms were stopped after
 * about three months), and the Religious card names Woren, the emperor's tutor, instead of
 * generalizing his argument to "In China".
 */

const CB = 'What the College Board says';

module.exports = {
  topicKey: 'r5-east-asia',
  slug: 'region-5-east-asia',
  unit: '5',
  region: 'East Asia',
  titleHtml: 'East <em>Asia</em>',
  deck: `From 1750 to 1900, China went from the world's largest maker to a defeated empire trying to reform. Japan went from a country forced to open its ports to a regional power with a colony of its own.`,
  inShort: [
    `In 1750 China made about a third of the world's manufactured goods, by hand.`,
    `Factories in Europe and the United States then made far more, and China lost wars to Britain and France.`,
    `Qing officials borrowed Western weapons and learning, but powerful people at court fought the changes.`,
    `American warships pushed Japan to open its ports, and in 1868 a new government began to remake the country.`,
    `Japan's state started factories and then sold them, and in 1895 Japan defeated China.`
  ],
  topics: ['5.3', '5.4', '5.6', '5.7', '5.8', '5.9'],
  ced: [
    'KC-5.1.II.B',
    'KC-5.1.V.B',
    'KC-5.1.III.B',
    'KC-5.2.II.A',
    'KC-5.1.V.C',
    'KC-5.1.I.D'
  ],

  empires: [
    // ── 01 ────────────────────────────────────────────────────────────────────
    {
      id: 'qing-maker',
      num: '01',
      accent: 'gold',
      name: 'The World\'s Largest Maker',
      navLabel: 'Qing China',
      dates: '1750 to 1864 &nbsp;·&nbsp; Silk, porcelain, cloth, and two lost wars',
      thesis: `In 1750 China made more of the world's manufactured goods than any other country, by hand. Then machines elsewhere made far more, and China's share shrank. Lost wars showed the Qing court how far behind its weapons had fallen.`,
      parts: [
        {
          heading: 'Made in China',
          blocks: [
            { p: `In 1750 the <span class="kt">Qing dynasty</span> ruled China. The Qing were Manchu emperors who ruled the largest population on earth from Beijing.` },
            { p: `Chinese silk, porcelain and cotton cloth filled China's own huge markets and also traveled abroad. The economic historian Paul Bairoch estimated that around 1750 China made about a third of all the world's manufactured goods. That was more than all of Europe together (<a href="#chapter-t5-4">Topic 5.4</a>).` }
          ]
        },
        {
          heading: 'A share, not an amount',
          blocks: [
            { p: `A <span class="kt">share</span> is a part of a whole. By <span class="num">1900</span>, in Bairoch's estimates, China's share of the world's manufactured goods had fallen to about 6 percent.` },
            { p: `China did not stop making things. Farm families kept weaving cloth at home. More and more of it was woven from cheaper machine-made thread. But the world was now making far more goods. Factories in Europe and the United States made most of the new ones.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that China "stopped manufacturing." Its share fell mostly because the world's total grew far faster. Bairoch thought China's own output also fell after about 1830. Other historians think hand weaving held up better than he allowed.`
            } },
            { note: {
              kind: 'howknow',
              label: 'How we know: estimates',
              html: `Nobody counted every piece of cloth in the world in 1750. Bairoch built his shares from what is known about population and work, and published them in 1982. Historians who use them say they are rough. Use them to show the size of the change, never as exact amounts.`
            } }
          ]
        },
        {
          heading: 'Defeat and rebellion',
          blocks: [
            { p: `Britain defeated China in the Opium War of <span class="num">1839</span> to <span class="num">1842</span>. Britain and France defeated it again from <span class="num">1856</span> to <span class="num">1860</span>. At the same time, a huge rebellion tore through China until <span class="num">1864</span>. It was called the Taiping Rebellion.` },
            { p: `How those wars opened China to foreign trade is a Unit 6 story. What matters here is what the court learned. Its armies and ships could not match those of the industrial states.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: the share of world manufacturing made in Europe and the United States rose, while Asia's fell, though Asia kept making goods.`,
                `<a href="#chapter-t5-4">Topic 5.4</a>: "The rapid development of steam-powered industrial production in European countries and the U.S. contributed to the increase in these regions’ share of global manufacturing during the first Industrial Revolution. While Middle Eastern and Asian countries continued to produce manufactured goods, these regions’ share in global manufacturing declined."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Qing dynasty', `The Manchu family of emperors that ruled China from 1644 to 1912.`],
        ['Share', `A part of a whole. Here it means the part of all the world's manufactured goods made in one country.`]
      ]
    },

    // ── 02 ────────────────────────────────────────────────────────────────────
    {
      id: 'self-strengthening',
      num: '02',
      accent: 'rust',
      name: 'Self-Strengthening, and Its Critics',
      navLabel: 'Self-Strengthening',
      dates: '1861 to 1898 &nbsp;·&nbsp; Arsenals, a school, a bank, and a coup',
      thesis: `Qing officials borrowed Western weapons, ships and learning, but kept China's own system of rule. Each step met opponents at court, and in 1898 the opponents won.`,
      parts: [
        {
          heading: 'Arsenals and shipyards',
          blocks: [
            { p: `In <span class="num">1861</span> Prince Gong set up an office for foreign affairs. Officials such as Zeng Guofan, Li Hongzhang and Zuo Zongtang then began a program called <span class="kt">Self-Strengthening</span>. Its aim was to learn Western ways of making weapons and ships while China kept its own system of rule.` },
            { p: `In <span class="num">1865</span> they built the Jiangnan Arsenal in Shanghai. An <span class="kt">arsenal</span> is a factory for weapons. This one made ships too. They built a navy yard at Fuzhou in <span class="num">1866</span>. In <span class="num">1872</span> they started a steamship company (<a href="#chapter-t5-8">Topic 5.8</a>).` }
          ]
        },
        {
          heading: 'A school, and its enemies',
          blocks: [
            { p: `In <span class="num">1862</span> the court opened the Tongwen Guan in Beijing. It was a school to train translators. In <span class="num">1867</span> Prince Gong asked to add astronomy and mathematics. Western teachers would teach some of the classes. He also wanted to invite young scholars who had passed the civil service examinations.` },
            { p: `He made his case in a <span class="kt">memorial</span> (a formal written request to the emperor). "Western learning is something urgently in need of study," it said.` },
            { p: `Woren objected. He was a senior Confucian scholar and the emperor's tutor. Confucian teaching put moral order and right conduct at the center of good government. Woren wrote: "establishing a country rests on valuing propriety and righteousness, not on schemes and stratagems."` },
            { p: `The court backed the prince. But of about 98 people who applied, only about 30 were admitted. Few of them were the young officials the plan had hoped for.` }
          ]
        },
        {
          heading: 'A bank for the China trade',
          blocks: [
            { p: `Foreign merchants trading with China needed banks. In March <span class="num">1865</span> the bank known today as HSBC opened in Hong Kong. Its first name was the Hongkong and Shanghai Banking Company. A Scot working for a shipping company started it with a committee of merchant firms.` },
            { p: `HSBC was itself a bank. It lent money to traders and changed one currency into another for them. It opened in Shanghai a month later and in London that July. By <span class="num">1900</span> it worked in 16 countries and territories. A business like this, working in many countries, is a <span class="kt">transnational business</span> (<a href="#chapter-t5-7">Topic 5.7</a>).` }
          ]
        },
        {
          heading: '1895 and 1898',
          blocks: [
            { p: `In <span class="num">1894</span> and <span class="num">1895</span> Japan defeated China's new navy.` },
            { p: `In June <span class="num">1898</span> the young Guangxu Emperor declared reform the national policy. He issued decree after decree. A <span class="kt">decree</span> is an order from a ruler that has the force of law.` },
            { p: `In September the Empress Dowager Cixi acted against the reforms. She was the widow of an earlier emperor. With officials who opposed the reforms, she seized power. They confined the emperor and executed six reformers.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Cixi spent the navy's money and so China lost in 1895. It is a popular story. The historian Benjamin Elman finds that her palace spending did not empty the treasury or take all of the navy's money. Tight funding did limit the fleet. For 1894 he points instead to China's fleets, which were never under one command. Japan also had faster ships, quick-firing guns, better-trained crews and better naval leadership. Some Chinese ships were short of shells.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: as industrial states grew stronger, the Qing tried to modernize, some powerful people fought it, and big businesses grew across borders.`,
                `<a href="#chapter-t5-8">Topic 5.8</a>: "In response to the expansion of industrializing states, some governments in Asia and Africa, including the Ottoman Empire and Qing China, sought to reform and modernize their economies and militaries. Reform efforts were often resisted by some members of government or established elite groups."`,
                `<a href="#chapter-t5-7">Topic 5.7</a>: "The global nature of trade and production contributed to the proliferation of large-scale transnational businesses that relied on new practices in banking and finance."`,
                `An optional College Board example: "Hong Kong and Shanghai Banking Corporation (HSBC)".`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Self-Strengthening', `Qing reforms from the 1860s that borrowed Western weapons and machines.`],
        ['Transnational business', `A company that works in more than one country.`]
      ]
    },

    // ── 03 ────────────────────────────────────────────────────────────────────
    {
      id: 'meiji',
      num: '03',
      accent: 'iron',
      name: 'Japan Remakes Its Government',
      navLabel: 'Meiji reforms',
      dates: '1853 to 1877 &nbsp;·&nbsp; Warships, treaties, and the Meiji Restoration',
      thesis: `American warships and unequal treaties showed Japan's leaders how weak the country was. A new government took power in 1868. It changed Japan itself. In the same years it began to build industry.`,
      parts: [
        {
          heading: 'Ships and treaties',
          blocks: [
            { p: `In <span class="num">1853</span> Commodore Matthew Perry sailed American warships into Edo Bay. Edo is today's Tokyo. Perry demanded that Japan open its ports to trade. Japan had no navy that could stop him.` },
            { p: `Treaties in <span class="num">1854</span> and <span class="num">1858</span> opened Japanese ports to Americans and Europeans. Foreigners accused of crimes in Japan would be tried in their own countries' courts. Japan also lost control of its own trade. From <span class="num">1866</span> its <span class="kt">tariffs</span> (taxes on imported goods) were held to about 5 percent on most imports.` },
            { p: `A treaty like this is an <span class="kt">unequal treaty</span>. A stronger country forces it on a weaker one, and only the stronger side gains rights.` }
          ]
        },
        {
          heading: 'The Meiji Restoration',
          blocks: [
            { p: `Since 1603 Japan had been run by a <span class="kt">shogun</span> (a military ruler who governed in the emperor's name). Some <span class="kt">samurai</span> blamed the shogun for giving in to the foreigners. The samurai were Japan's warrior class, born to their rank.` },
            { p: `In late <span class="num">1867</span> the last shogun handed his powers back to the emperor. Early in <span class="num">1868</span> a group of young samurai took control of the court. They governed in the name of the fifteen-year-old emperor, Meiji. This is the <span class="kt">Meiji Restoration</span>. Supporters of the old shogun fought back, but the new government won that civil war by <span class="num">1869</span>.` },
            { p: `In April <span class="num">1868</span> the new government issued the Charter Oath. It promised: "Knowledge shall be sought throughout the world so as to strengthen the foundations of imperial rule." The government's slogan was "Rich country, strong army."` }
          ]
        },
        {
          heading: 'Reforming Japan itself',
          blocks: [
            { p: `The Meiji leaders changed Japan itself. They began to build industry in the same years, as the next section tells. Before, local lords had ruled their own lands, called <span class="kt">domains</span>. In <span class="num">1871</span> the leaders abolished the domains and made one central state.` },
            { p: `A national school system began in <span class="num">1872</span>. A law of <span class="num">1873</span> made army service a duty for men of every class, not only samurai. But the law excused many men. A new land tax, paid in money instead of rice, gave the government money to spend.` },
            { p: `The samurai lost their special rights step by step. In <span class="num">1876</span> they lost even the right to wear swords in public. Some samurai rebelled. In <span class="num">1877</span> the new army of drafted commoners crushed the last great revolt (<a href="#chapter-t5-6">Topic 5.6</a>).` },
            { p: `From <span class="num">1871</span> to <span class="num">1873</span> a group of Japan's leaders toured the United States and Europe to study how those countries worked. This trip is called the Iwakura Mission.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Japan simply copied the West. Its leaders chose what to borrow. The Charter Oath says their aim was to strengthen imperial rule.`
            } },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: pressure from the United States and Europe pushed Japan to reform, and the reforms helped Japan build industry and grow strong in its region.`,
                `<a href="#chapter-t5-6">Topic 5.6</a>: "The expansion of U.S. and European influence in Asia led to internal reform in Japan that supported industrialization and led to the growing regional power of Japan in the Meiji Era."`
              ]
            } }
          ]
        }
      ],
      terms: [
        ['Unequal treaty', `A treaty forced on a weaker country that gives the stronger side rights it does not give back.`],
        ['Shogun', `The military ruler who governed Japan in the emperor's name until 1868.`],
        ['Samurai', `Japan's warrior class, who were born to their rank.`],
        ['Meiji Restoration', `The 1868 takeover by young samurai who governed in the name of the emperor, Meiji.`]
      ]
    },

    // ── 04 ────────────────────────────────────────────────────────────────────
    {
      id: 'japan-builds',
      num: '04',
      accent: 'oxide',
      name: 'Japan Builds, Then Sells',
      navLabel: 'Japan\'s industry',
      dates: '1872 to 1900 &nbsp;·&nbsp; Railways, silk, cotton, and a war with China',
      thesis: `Japan's government built the first railway and model factories, and took over shipyards and mines. Then it sold most of its factories and mines to private companies. The strength Japan built made it a regional power.`,
      parts: [
        {
          heading: 'The state builds',
          blocks: [
            { p: `The government built Japan's first railway, from Tokyo to Yokohama. It opened in <span class="num">1872</span>, built with British engineers.` },
            { p: `The same year the government opened the Tomioka Silk Mill. It had French machines and a French engineer named Paul Brunat. He taught Japanese workers to reel silk by machine. To reel silk is to unwind the thread from silkworm cocoons. Most of the workers were young women. The plan was for the method to spread to other mills.` },
            { p: `The government also built telegraph lines and factories for weapons and for goods such as cement and glass. It took over shipyards and mines that had been begun under the shogun. Farmers paid for much of it through the land tax.` },
            { p: `This is <span class="kt">state-sponsored industry</span>: industry that a government plans, pays for and protects. <a href="#r5-middle-east-egypt">The Middle East chapter</a> tells how Egypt's ruler tried the same thing earlier, and why most of his factories failed.` }
          ]
        },
        {
          heading: 'Then the state sells',
          blocks: [
            { p: `Running so many businesses cost more than the government could afford. In <span class="num">1880</span> it decided to sell most of them.` },
            { p: `Business families such as Mitsui and Mitsubishi bought them. These families grew into huge business groups called <span class="kt">zaibatsu</span>. Mitsubishi bought the Nagasaki shipyard in <span class="num">1887</span>. In <span class="num">1889</span> Mitsui took over the Miike coal mine. It was the largest coal mine in the country.` },
            { p: `Private companies built more. The Osaka Spinning Company opened in <span class="num">1883</span>. Its spinning machines came from Britain and were driven by steam, and it ran day and night. Like Britain's factories, mills like this brought many workers and machines together in one place (<a href="#chapter-t5-4">Topic 5.4</a>).` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Japan's government built all of its industry. The state started key industries and then sold most of its factories and mines. Private companies carried them on and built much more.`
            } }
          ]
        },
        {
          heading: 'The women in the mills',
          blocks: [
            { p: `As in Britain, many of the first factory workers were young women. In <span class="num">1900</span> women made up about 62 percent of the workers in Japan's private factories. Most of them worked in textile mills. Their wages helped support their farm families (<a href="#chapter-t5-9">Topic 5.9</a>).` }
          ]
        },
        {
          heading: 'Winning back its courts',
          blocks: [
            { p: `Japan wanted to end the foreign courts on its soil. So it rewrote its laws on French and German models. In <span class="num">1894</span> Britain agreed to end its courts in Japan from <span class="num">1899</span>. Other countries followed. Japan won back full control of its tariffs only in <span class="num">1911</span>.` }
          ]
        },
        {
          heading: 'A regional power',
          blocks: [
            { p: `In <span class="num">1894</span> and <span class="num">1895</span> Japan fought China over Korea, and Japan won. In the Treaty of Shimonoseki, China recognized Korea's independence. China also gave the island of Taiwan to Japan.` },
            { p: `China agreed to pay an <span class="kt">indemnity</span> (money a defeated country must pay the winner). It was 200 million taels of silver (a tael is a Chinese measure of silver).` },
            { p: `Within a week, Russia, Germany and France demanded that Japan give back the Liaodong Peninsula in northeast China, which Japan had also won. Japan gave in, and its leaders were angry.` },
            { p: `Still, about forty years after Perry, Japan was a growing <span class="kt">regional power</span>. It now had a colony of its own: Taiwan. A colony is a land ruled by another country. What empires did with power like this is Unit 6.` },
            { note: {
              kind: 'cb',
              label: CB,
              paras: [
                `In short: Japan's government started industry on purpose, and factory methods spread to Japan.`,
                `<a href="#chapter-t5-6">Topic 5.6</a>: "As the influence of the Industrial Revolution grew, a small number of states and governments promoted their own state-sponsored visions of industrialization."`,
                `<a href="#chapter-t5-4">Topic 5.4</a>: "As new methods of industrial production became more common in parts of northwestern Europe, they spread to other parts of Europe and the United States, Russia, and Japan."`,
              ]
            } }
          ]
        }
      ],
      terms: [
        ['State-sponsored industry', `Industry that a government plans, pays for and protects.`],
        ['Zaibatsu', `A huge Japanese family business group that owned many companies.`],
        ['Indemnity', `Money a defeated country is made to pay the winner.`],
        ['Regional power', `A state strong enough to win wars and gain land in its own part of the world.`]
      ]
    }
  ],

  closing: {
    heading: 'East Asia at a Glance',
    navLabel: 'At a glance',
    intro: `The same story, sorted by its sides for review.`,
    argue: {
      move: 'Causation',
      prompt: `Qing China and Meiji Japan both tried to borrow the strength of industrial states. Yet in 1895 Japan defeated China. Why did Japan's reforms make it a regional power when China's did not? Make a claim, support it with two pieces of evidence from this chapter, and explain why your cause mattered most.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'Japan replaced its government, while the Qing court held on and stopped reform.',
        body: `In 1868 young samurai took power in the emperor's name, and in 1871 they abolished the domains. In China, Cixi and her allies ended the Guangxu Emperor's reforms in September 1898.`
      },
      {
        category: 'Religious',
        title: 'At the Qing court, the emperor\'s tutor used Confucian values to argue against Western learning.',
        body: `In 1867 the Confucian scholar Woren wrote that a country rests on "propriety and righteousness," not on "schemes and stratagems." Only about 30 of about 98 applicants were admitted to the new classes.`
      },
      {
        category: 'Social',
        title: 'Japan\'s samurai lost their place, and young women went to work in the mills.',
        body: `A law of 1873 made army service a duty for men of every class, though it excused many men. In 1876 samurai lost the right to wear swords. By 1900 women were about 62 percent of Japan's private factory workers.`
      },
      {
        category: 'Intellectual',
        title: 'Both governments set out to learn from the West, and Japan went further.',
        body: `In 1867 China's Tongwen Guan added astronomy and mathematics, and Self-Strengthening went on for decades. Japan's Charter Oath of 1868 promised to seek knowledge "throughout the world," and Japan began a national school system in 1872. China's 1898 reforms were stopped after about three months.`
      },
      {
        category: 'Technological',
        title: 'Both states set out to build modern weapons and machines.',
        body: `China built the Jiangnan Arsenal (1865) and the Fuzhou navy yard (1866) to make weapons and ships. Japan's first railway (1872) was built with British engineers, and the Tomioka Silk Mill (1872) used French machines.`
      },
      {
        category: 'Economic',
        title: 'China\'s share of world manufacturing fell, while Japan\'s state started industries and sold them.',
        body: `By Bairoch's estimates, China's share fell from about a third in 1750 to about 6 percent in 1900. Japan decided in 1880 to sell most of its works: Mitsubishi bought the Nagasaki shipyard in 1887 and Mitsui the Miike mine in 1889.`
      }
    ]
  }
};
