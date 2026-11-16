'use strict';

/**
 * Unit 5 by region: East Asia (Qing China and Japan).
 * One continuous story of China and Japan from 1750 to 1900, told in four sections: China as the
 * world's largest maker and the defeats that made reform urgent (KC-5.1.II.B), Self-Strengthening,
 * its opponents and its end in 1898, with HSBC as the bank of the treaty-port trade (KC-5.1.V.B,
 * KC-5.1.III.B), Japan forced open and reformed by the Meiji government (KC-5.2.II.A), and Japan's
 * state-started industry, the women who worked it, and its rise to regional power (KC-5.1.V.C,
 * KC-5.1.I.D, KC-5.1.I.C, KC-5.1.VI.B, KC-5.2.II.A). Facts come from the Topic 5.4, 5.6, 5.7 and
 * 5.8 chapters and their claim ledgers, and from the reviewed rebuild of 5.9 (women in Japan's
 * factories, 1900), keeping their narrowings (Cixi's spending did not empty the navy's purse; the
 * "Chinese learning as the essence" slogan is from the 1890s; Taiwan "a colony of its own", not
 * "its first"; Korea not a colony until 1910). Left out on purpose: the Opium Wars and the Taiping
 * Rebellion beyond a sentence each, and the treaty ports, which are Unit 6's; Korea, which the
 * Unit 5 CED does not name except through the war of 1894 and 1895.
 */

module.exports = {
  topicKey: 'r5-east-asia',
  slug: 'region-5-east-asia',
  unit: '5',
  region: 'East Asia',
  titleHtml: 'East <em>Asia</em>',
  deck: `From 1750 to 1900, China went from the world's largest maker to a defeated empire trying to reform, and Japan went from a country forced to open its ports to a regional power with a colony of its own. Follow both governments as they tried to borrow the strength of industrial states without giving up their own way of ruling.`,
  topics: ['5.4', '5.6', '5.7', '5.8', '5.9'],
  ced: [
    'KC-5.1.II.B',
    'KC-5.1.V.B',
    'KC-5.1.III.B',
    'KC-5.2.II.A',
    'KC-5.1.V.C',
    'KC-5.1.I.D',
    'KC-5.1.I.C',
    'KC-5.1.VI.B'
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
      thesis: `In 1750 China made more of the world's manufactured goods than any other country, by hand. Over the next century its share shrank as machines elsewhere made more, and lost wars showed the Qing court how far behind its weapons had fallen.`,
      parts: [
        {
          heading: 'Made in China',
          blocks: [
            { p: `In 1750 the <span class="kt">Qing dynasty</span>, Manchu emperors ruling from Beijing, governed the largest population on earth. Chinese silk, porcelain and cotton cloth filled China's own huge markets and traveled abroad. The economic historian Paul Bairoch estimated that around 1750 China made about a third of all the world's manufactured goods, more than all of Europe together (<a href="#chapter-t5-4">Topic 5.4</a>).` }
          ]
        },
        {
          heading: 'A share, not an amount',
          blocks: [
            { p: `By <span class="num">1900</span>, in Bairoch's estimates, China's share had fallen to about 6 percent. China did not stop making things. Farm families kept weaving cloth at home, more and more of it from cheaper machine-made thread. But the world was making far more goods, and factories in Europe and the United States made most of the new ones. The College Board's words are that "Middle Eastern and Asian countries continued to produce manufactured goods," while "these regions' share in global manufacturing declined."` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that China "stopped manufacturing." Its share fell because the world's total grew far faster, while Chinese families kept spinning and weaving. Bairoch's figures are estimates: use them for the size of the change, never as exact amounts.`
            } }
          ]
        },
        {
          heading: 'Defeat and rebellion',
          blocks: [
            { p: `Britain defeated China in the Opium War of <span class="num">1839</span> to <span class="num">1842</span>, and Britain and France defeated it again from <span class="num">1856</span> to <span class="num">1860</span>, while the Taiping Rebellion tore through the country until <span class="num">1864</span>. How those wars opened China to foreign trade is Unit 6. What matters here is what the court learned: its armies and ships could not match those of industrial states (<a href="#chapter-t5-8">Topic 5.8</a>).` }
          ]
        }
      ],
      terms: [
        ['Qing dynasty', `The Manchu dynasty that ruled China from 1644 to 1912.`],
        ['Manufacturing', `Making goods, such as cloth, tools and pots, by hand or by machine.`],
        ['Share', `A part of a whole; here, the part of all the world's manufactured goods made in one country.`]
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
      thesis: `Qing officials borrowed Western weapons, ships and learning while keeping China's own system of rule. Each step met opponents at court, and in 1898 the opponents won.`,
      parts: [
        {
          heading: 'Arsenals and shipyards',
          blocks: [
            { p: `In <span class="num">1861</span> Prince Gong set up an office for foreign affairs, and officials such as Zeng Guofan, Li Hongzhang and Zuo Zongtang began what was called <span class="kt">Self-Strengthening</span>: learning Western ways of making weapons and ships while keeping China's own system of rule. They built the Jiangnan Arsenal in Shanghai (<span class="num">1865</span>), a navy yard at Fuzhou (<span class="num">1866</span>) and a steamship company (<span class="num">1872</span>). The College Board says some governments, "including the Ottoman Empire and Qing China, sought to reform and modernize their economies and militaries."` }
          ]
        },
        {
          heading: 'A school, and its enemies',
          blocks: [
            { p: `In <span class="num">1862</span> the court opened the Tongwen Guan in Beijing to train translators. In <span class="num">1867</span> Prince Gong asked to add astronomy and mathematics, taught partly by Western teachers, and to invite young scholars who had passed the civil service examinations. "Western learning is something urgently in need of study," his memorial said. Woren, a senior scholar and the emperor's tutor, objected: "establishing a country rests on valuing propriety and righteousness, not on schemes and stratagems." The court backed the prince, but of about 98 who applied, only about 30 were admitted, and few were the young officials the plan had hoped for. The College Board's sentence fits: "Reform efforts were often resisted by some members of government or established elite groups."` }
          ]
        },
        {
          heading: 'A bank for the China trade',
          blocks: [
            { p: `Foreign merchants trading with China needed banks. In March <span class="num">1865</span> the bank known today as HSBC opened in Hong Kong, as the Hongkong and Shanghai Banking Company, started by a Scot working for a shipping company with a committee of merchant firms. It opened in Shanghai a month later and in London that July, and by <span class="num">1900</span> it worked in 16 countries and territories. The College Board names it among the "large-scale transnational businesses that relied on new practices in banking and finance." One firm on its first committee, Dent and Company, had grown rich selling opium into China (<a href="#chapter-t5-7">Topic 5.7</a>).` }
          ]
        },
        {
          heading: '1895 and 1898',
          blocks: [
            { p: `In <span class="num">1894</span> and <span class="num">1895</span> Japan defeated China's new navy (section 04). In June <span class="num">1898</span> the young Guangxu Emperor declared reform national policy and issued decree after decree. In September the Empress Dowager Cixi and officials who opposed the reforms seized power, confined the emperor, and executed six reformers.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Cixi spent the navy's money and so China lost in 1895. It is a popular story. The historian Benjamin Elman finds that her palace spending did not empty the treasury or take all of the navy's money, though tight funding did limit the fleet. The deeper problems were a disorganized empire and poorly trained crews.`
            } }
          ]
        }
      ],
      terms: [
        ['Self-Strengthening', `Qing reforms from the 1860s that borrowed Western weapons and machines.`],
        ['Memorial', `A formal written request or argument sent by an official to the emperor.`],
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
      thesis: `American warships and unequal treaties showed Japan's leaders how weak the country was. A new government overthrew the shogun and changed Japan itself before it built industry.`,
      parts: [
        {
          heading: 'Ships and treaties',
          blocks: [
            { p: `In <span class="num">1853</span> an American naval officer, Commodore Matthew Perry, sailed warships into Edo Bay, near today's Tokyo, and demanded that Japan open its ports to trade. Japan had no navy that could stop him. Treaties in <span class="num">1854</span> and <span class="num">1858</span> opened Japanese ports to Americans and Europeans, let foreigners accused of crimes in Japan be tried in their own countries' courts, and took away Japan's control of its own trade: from <span class="num">1866</span> its taxes on most imports were held to about 5 percent. A treaty like this, forced on a weaker country, is an <span class="kt">unequal treaty</span>.` }
          ]
        },
        {
          heading: 'The Meiji Restoration',
          blocks: [
            { p: `Some samurai blamed the <span class="kt">shogun</span>, the military ruler who governed in the emperor's name, for giving in. In <span class="num">1868</span> a group of young samurai overthrew him and governed in the name of the fifteen-year-old emperor, Meiji: the <span class="kt">Meiji Restoration</span>. That April the new government's Charter Oath promised: "Knowledge shall be sought throughout the world so as to strengthen the foundations of imperial rule." Its slogan was "Rich country, strong army."` },
            { p: `The College Board connects the two steps: "The expansion of U.S. and European influence in Asia led to internal reform in Japan that supported industrialization."` }
          ]
        },
        {
          heading: 'Reform first',
          blocks: [
            { p: `In <span class="num">1871</span> the Meiji leaders abolished the domains of the old lords and made one central state. The samurai lost their privileges, and men of every class were drafted into a national army. A national school system began in <span class="num">1872</span>, and a new land tax, paid in money instead of rice, gave the government money to spend. From <span class="num">1871</span> to <span class="num">1873</span> a group of leaders, the Iwakura Mission, toured the United States and Europe to study how they worked. Some samurai rebelled against losing their place, and in <span class="num">1877</span> the new army of drafted commoners crushed the last great revolt (<a href="#chapter-t5-6">Topic 5.6</a>).` }
          ]
        }
      ],
      terms: [
        ['Unequal treaty', `A treaty forced on a weaker country that gives the stronger side rights it does not give back.`],
        ['Shogun', `The military ruler who governed Japan in the emperor's name until 1868.`],
        ['Meiji Restoration', `The 1868 overthrow of the shogun by samurai who governed in the name of the emperor, Meiji.`]
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
      thesis: `Japan's government built the first railways, mills and shipyards itself, then sold most of them to private companies. The strength it built made Japan a regional power.`,
      parts: [
        {
          heading: 'The state builds',
          blocks: [
            { p: `The government built Japan's first railway, from Tokyo to Yokohama, which opened in <span class="num">1872</span> with British engineers. The same year it opened the Tomioka Silk Mill, with French machines and a French engineer, Paul Brunat, to teach Japanese workers, mostly young women, to reel silk by machine so the method could spread. It built telegraph lines, shipyards, mines, and factories for weapons and goods such as cement and glass. Farmers paid for much of it through the land tax. This is one of the College Board's "state-sponsored visions of industrialization."` }
          ]
        },
        {
          heading: 'Then the state sells',
          blocks: [
            { p: `Running so many businesses cost more than the government could afford, and in <span class="num">1880</span> it decided to sell most of them. Business families such as Mitsui and Mitsubishi bought them and grew into huge business groups, the <span class="kt">zaibatsu</span>: Mitsubishi bought the Nagasaki shipyard in <span class="num">1887</span>, and Mitsui took over the Miike coal mine, the country's largest, in <span class="num">1889</span>. Private companies built more. The Osaka Spinning Company opened in <span class="num">1883</span> with British spinning machines driven by steam, and ran day and night (<a href="#chapter-t5-4">Topic 5.4</a>). The College Board names Japan among the places the new methods "spread to."` }
          ]
        },
        {
          heading: 'The women in the mills',
          blocks: [
            { p: `As in Britain, the first factory workers were often young women. In <span class="num">1900</span> women made up about 62 percent of the workers in Japan's private factories, most of them in textile mills. Their wages helped their farm families, a case of the College Board's point that women in working families "held wage-earning jobs to supplement their families' income."` }
          ]
        },
        {
          heading: 'A regional power',
          blocks: [
            { p: `To win back its own courts, Japan rewrote its laws on French and German models, and in <span class="num">1894</span> Britain agreed to end the foreign courts in Japan from <span class="num">1899</span>; other countries followed. Japan won back full control of its tariffs only in <span class="num">1911</span>. In <span class="num">1894</span> and <span class="num">1895</span> Japan fought China over Korea and won. In the Treaty of Shimonoseki, China recognized Korea's independence, gave the island of Taiwan to Japan, and agreed to pay an <span class="kt">indemnity</span> of 200 million taels of silver (a tael is a Chinese measure of silver). Within a week Russia, Germany and France demanded that Japan give back the Liaodong Peninsula, which it had also won, and Japan gave in, which angered its leaders. Still, Japan, forced open forty years before, was now what the College Board calls a growing "regional power," with a colony of its own. What empires did with that power is Unit 6.` },
            { note: {
              kind: 'misconception',
              label: 'Common mistake to avoid',
              html: `Do not write that Japan's government built all of its industry. The state started key industries and then sold most of them; private companies carried them on and built much more.`
            } }
          ]
        }
      ],
      terms: [
        ['State-sponsored industry', `Industry that a government plans, pays for and protects.`],
        ['Zaibatsu', `A huge Japanese family business group that owned many companies.`],
        ['Regional power', `A state strong enough to win wars and gain land in its own part of the world.`],
        ['Indemnity', `Money a defeated country is made to pay the winner.`]
      ]
    }
  ],

  closing: {
    heading: 'East Asia at a Glance',
    navLabel: 'At a glance',
    intro: `The same story, gathered by its sides for review.`,
    argue: {
      move: 'Causation',
      prompt: `Both Qing China and Meiji Japan tried to borrow the strength of industrial states, yet in 1895 Japan defeated China. Using this chapter, argue what caused Japan's reforms to make it a regional power while China's did not, and explain why the cause you chose mattered most.`
    },
    pairs: [
      {
        category: 'Political',
        title: 'One government replaced, one held on',
        body: `Japan's samurai overthrew the shogun in 1868 and built a central state in 1871. In China, the Qing kept their own system of rule while borrowing Western weapons, and in 1898 Cixi ended the Guangxu Emperor's reforms.`
      },
      {
        category: 'Religious',
        title: 'Confucian order against "schemes and stratagems"',
        body: `Woren argued in 1867 that a country rests on "propriety and righteousness," Confucian values, not on Western learning, and few scholars joined the Tongwen Guan. Japan's Charter Oath of 1868 promised instead to seek knowledge "throughout the world."`
      },
      {
        category: 'Social',
        title: 'Samurai lose their place, young women go to the mills',
        body: `Japan's samurai lost their privileges in the 1870s and commoners were drafted. Young women reeled silk at Tomioka (1872), and by 1900 women were about 62 percent of private factory workers.`
      },
      {
        category: 'Intellectual and technological',
        title: 'Borrowed machines, borrowed teachers',
        body: `China built an arsenal at Shanghai (1865), a navy yard at Fuzhou (1866) and a school for Western learning. Japan hired British engineers for its first railway (1872) and a French engineer for Tomioka, and sent the Iwakura Mission to study the West.`
      },
      {
        category: 'Economic',
        title: 'From a third of the world\'s manufactured goods to 6 percent',
        body: `China's share of world manufacturing fell, by estimate, from about a third in 1750 to about 6 percent in 1900. Japan's state built industry, decided in 1880 to sell it, and sold key works to Mitsubishi (1887) and Mitsui (1889). HSBC (1865) financed the China trade.`
      }
    ]
  }
};
