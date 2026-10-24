(() => {
  const brandCss = '../assets/css/behistorical-brand-lock.css';
  if (!document.querySelector(`link[href="${brandCss}"]`)) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = brandCss;
    document.head.appendChild(link);
  }
  const topLogo = document.querySelector('.brand-mini');
  if (topLogo) {
    topLogo.href = '../index.html';
    topLogo.setAttribute('aria-label', 'Return to BeHistorical landing page');
  }
  const heroLogoFrame = document.querySelector('.hero .logo-frame');
  if (heroLogoFrame && !heroLogoFrame.closest('a')) {
    const homeLink = document.createElement('a');
    homeLink.href = '../index.html';
    homeLink.className = 'logo-home-link';
    homeLink.setAttribute('aria-label', 'Return to BeHistorical landing page');
    homeLink.style.display = 'inline-block';
    heroLogoFrame.parentNode.insertBefore(homeLink, heroLogoFrame);
    homeLink.appendChild(heroLogoFrame);
  }
})();

window.BEHISTORICAL_LESSON = {

  meta: {
    course: "AP WORLD HISTORY",
    unit: "Unit 5: Revolutions",
    topic: "Topic 5.6",
    title: "Industrialization: Government’s Role from 1750 to 1900",
    subtitle: "Wanting armies to match stronger powers, a few governments decided not to wait for industry and built it themselves, to make their states strong. Muhammad Ali’s Egypt built factories for an army, and most of them had closed by the mid-1840s; Meiji Japan reformed itself, built railways and mills, sold them to private companies, and became a regional power.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain why a small number of governments built industry themselves, and the causes and effects of Muhammad Ali's strategy in Egypt: what his government built, how it paid for it, and why most of the factories closed.",
      kc: "KC-5.1.V.C",
      theme: "Governance"
    },
    {
      target: "I can explain how pressure from the United States and Europe led to reforms in Japan that supported industry and made Japan a regional power, and identify a pattern Japan shares with Egypt and a difference in their results.",
      kc: "KC-5.2.II.A",
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain one reason Muhammad Ali's government built factories (such as wanting an army like the European one that beat Egypt's rulers in 1798, or his aim to hold Egypt for his family), describe what it built and how it paid for it (such as about 30 cotton mills, paid for by the state's control of cotton), and explain two causes of the result, one from outside Egypt (such as the European powers siding with the sultan in 1840, or the army cut to 18,000 in 1841) and one from inside (such as almost no coal, or drafted workers).",
      kc: "KC-5.1.V.C",
      theme: "Governance"
    },
    {
      criteria: "I can trace Japan's chain from Perry's warships and the unequal treaties to one Meiji reform, to the industry the state built (such as the 1872 railway or the Tomioka Silk Mill), to what happened to that industry after 1880, to evidence of regional power (such as the 1895 victory over China and Taiwan); and I can name one link Japan shares with Egypt (the pattern) and one difference in what happened next.",
      kc: "KC-5.2.II.A",
      theme: "Governance"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 5: Learning Objective G',
      theme: 'Learning Objective',
      text: 'Explain the causes and effects of economic strategies of different states and empires.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.V.C',
      theme: 'Governance',
      text: 'As the influence of the Industrial Revolution grew, a small number of states and governments promoted their own state-sponsored visions of industrialization.',
      illustrativeExamples: ['Muhammad Ali’s development of a cotton textile industry in Egypt']
    },
    {
      code: 'KC-5.2.II.A',
      theme: 'Governance',
      text: 'The expansion of U.S. and European influence in Asia led to internal reform in Japan that supported industrialization and led to the growing regional power of Japan in the Meiji Era.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Industry on Purpose",
    intro: "Use these cards to build two chains, one for Egypt and one for Japan, with the same four links: the threat, the decision, the strategy, and the result. Then compare them.",
    videos: [],
    segments: [
      {
        title: "Egypt: Factories for an Army",
        bullets: [
          "**The exception:** in Britain and the United States, private owners built the first factories. A small number of governments built industry themselves, wanting armies to match stronger powers.",
          "**The ruler:** in 1798 a French army under Napoleon invaded Egypt and easily defeated its rulers, the Mamluks, a class of soldier-lords. Muhammad Ali, an Ottoman officer from an Albanian family, became governor of Egypt in 1805 and by 1811 ruled alone. Napoleon's victory had shown what a modern European army could do, and he wanted an army like it, strong enough that he, and his family after him, could hold Egypt, even against the Ottoman sultan.",
          "**The strategy:** his government told peasants what to grow, bought their crops at low prices, and sold them abroad at higher ones: a monopoly. Long-staple cotton (cotton with long fibers, which makes strong, fine thread), first grown for sale in 1820, earned a great deal. From the late 1810s the state built factories with European machines and experts. By the early 1830s about 30 cotton mills employed about 30,000 drafted workers, many making cloth and uniforms for the army. In the 1820s he also sent Egyptian students to Europe to learn its sciences.",
          "**The army:** from 1822 peasants were drafted into a new army, which reached about 130,000 soldiers by the early 1830s. In 1831 it invaded Syria and beat the sultan's armies.",
          "**It stopped:** in 1840 Britain, Austria, Russia, and Prussia sided with the sultan, and British warships and Ottoman troops drove Egypt out of Syria. In 1841 Egypt's army was cut to 18,000 in peacetime, and Egypt had to accept an 1838 British and Ottoman trade treaty that ended the monopolies. With almost no coal, drafted workers who resisted, and inexperienced managers, most of the factories had failed by the mid-1840s, about a decade after their peak. Historians still argue about which cause mattered most."
        ],
        image: {
          title: "The Citadel of Cairo",
          caption: "A photochrom (a photograph colored by a printing process) of the Citadel of Cairo, made by the Photoglob Company of Zurich about 1890 to 1910. Muhammad Ali governed Egypt from the Citadel, and the domed mosque on top is the one he ordered built there. By the time of this photograph his factories were long gone. Library of Congress.",
          url: "../assets/images/topics/5-6/cairo-citadel-photochrom-c1900.jpg",
          sourceUrl: "https://www.loc.gov/pictures/item/2017657143/"
        }
      },
      {
        title: "Japan: Reform, Build, Sell",
        bullets: [
          "**The threat:** in 1853 Commodore Matthew Perry sailed American warships into Edo Bay, near today's Tokyo, and demanded that Japan open its ports. Treaties in 1854 and 1858 opened ports, let foreigners accused of crimes be tried in their own countries' courts, and took away Japan's control over its own trade. These were unequal treaties.",
          "**A new government:** in 1868 young samurai overthrew the shogun and governed in the name of the fifteen-year-old emperor, Meiji: the Meiji Restoration. Their Charter Oath promised that \"Knowledge shall be sought throughout the world so as to strengthen the foundations of imperial rule.\" Their slogan was \"Rich country, strong army.\"",
          "**Reform first:** in 1871 the old lords' domains were abolished. The samurai lost their privileges, and men of every class were drafted into a national army. A national school system began in 1872, and a land tax paid in money gave the government money to spend. From 1871 to 1873 the Iwakura Mission studied the United States and Europe.",
          "**The state builds:** the government opened Japan's first railway, Tokyo to Yokohama, in 1872, with British engineers, and the Tomioka Silk Mill in the same year, with French machines and a French engineer. It built telegraph lines, shipyards, mines, and factories.",
          "**Then it sells:** in 1880 the government decided to sell most of its businesses to private investors. Families such as Mitsui and Mitsubishi bought them and grew into huge business groups, the zaibatsu.",
          "**A regional power:** in 1894 Britain agreed to end the foreign courts in Japan (from 1899); Japan won back full control of its tariffs only in 1911. In 1894 and 1895 Japan fought China over Korea and won: China gave up its claim over Korea, gave Taiwan to Japan, and agreed to pay 200 million taels of silver (a tael is a Chinese measure of silver). Japan kept Taiwan as a colony. What empires did with that power is Unit 6."
        ],
        image: {
          title: "The First Steam Train Leaving Yokohama, about 1872",
          caption: "A Japanese color woodblock print in three sheets, signed Baidō Kunimasa, about 1872 (the Library of Congress catalogs it under Utagawa Kunisada, 1823 to 1880): a steam train leaves Yokohama beside a harbor full of ships. Japan's first railway opened in 1872. A print made to sell, not a photograph. Library of Congress.",
          url: "../assets/images/topics/5-6/kunisada-first-train-leaving-yokohama-1872.jpg",
          sourceUrl: "https://www.loc.gov/pictures/item/2002700197/"
        }
      },
      {
        title: "Line Up the Two Cases",
        bullets: [
          "**Threat:** for Egypt, European armies like the one Napoleon brought in 1798, which Muhammad Ali wanted to match, and the sultan he meant to hold Egypt against. For Japan, the American and European warships that forced its ports open in the 1850s.",
          "**Strategy, who paid for the first factories:** in Egypt, the state, with money from its cotton monopoly. In Japan, the state, with money from the land tax, and, for the first railway, a British loan.",
          "**Strategy, where the machines and know-how came from:** Egypt bought machines in Europe, hired European experts, and sent students to Europe in the 1820s. Japan used British engineers for its railway and a French engineer and French machines at Tomioka, and sent the Iwakura Mission abroad from 1871 to 1873.",
          "**Strategy, who did the work:** Egypt drafted peasants into its mills and its army. Japan drafted men of every class into its army and hired workers, many of them young women, for mills such as Tomioka.",
          "**Fuel:** Egypt had almost no coal, so many machines were turned by animals. Japan had coal of its own.",
          "**Result:** Europe made Egypt cut its army to 18,000 in 1841 and give up its monopolies, and most of its mills had failed by the mid-1840s. Japan sold most of its state businesses to private companies from 1880, won an end to the foreign courts in 1894 (from 1899), and beat China in 1895.",
          "**Your job:** using these facts, say what the two cases share (the pattern) and what was different, and why. Japan also had to accept low taxes on foreign goods, about 5 percent from 1866, through the years it was building its industry, and won full control of them only in 1911: keep that in mind before you blame one cause."
        ],
        image: {
          title: "The Railway at Takanawa, 1872",
          caption: "A Japanese color woodblock print in three sheets by Ikkei, 1872, called Steam Engine of the Iron Railroad at Takanawa. The sheets are shown as the Library of Congress photographed them, slightly overlapping. Library of Congress.",
          url: "../assets/images/topics/5-6/ikkei-takanawa-railway-triptych-1872.jpg",
          sourceUrl: "https://www.loc.gov/pictures/item/2008660440/"
        }
      }
    ]
  },

  map: {
    title: "Two States Build Industry, 1820s to 1895",
    url: "../assets/images/instructional-maps/topic-5-6.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-5-6.svg",
    caption: "A BeHistorical map of the two states in this lesson: Egypt and the land its army took in Syria, and Japan, with Korea and Taiwan.",
    intro: "Find Egypt and Istanbul first: Muhammad Ali governed Egypt for the Ottoman sultan in Istanbul. Then find Japan, Korea, and Taiwan. Each numbered arrow shows one state's army reaching beyond its borders.",
    prompt: "Using the map, compare the two numbered arrows. For each one, say what it shows, and whether that state kept the land it reached. What does that suggest about how strong each state became?"
  },

  deepReading: {
    title: "Industry on Purpose",
    desc: "A longer, optional chapter on the same story: why Muhammad Ali built factories for his army and why most of them closed, how Perry's warships led to the Meiji reforms, how Japan's government built industry and then sold it, and what the two cases share and do not.",
    url: "deep-reading-topic-5-6-industrialization-government-and-society.html"
  },

  first10: {
    title: "First & 10: Industry on Purpose",
    embedUrl: 'first-and-10-topic-5-6-industrialization-government-and-society-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 story, answer the three questions, then return to the 5.6 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: One Link in a Chain",
    intro: "Use the cards to find evidence for one link in Egypt's chain or Japan's: the threat, the decision, the strategy, or the result. Ask what each source can and cannot show.",
    prompt: "Choose two cards. For each, say what kind of source it is, which link in which chain it shows, and one thing it cannot tell you.",
    items: []
  },

  primarySource: {
    title: "Primary Source: The Charter Oath, 1868",
    intro: "In 1868 a group of young samurai overthrew the shogun and took power in the name of the fifteen-year-old emperor, Meiji. In April 1868 they issued a short public promise in the emperor's name, the Charter Oath, at a time when many people in Japan did not know what the new government would do. These are its five articles, translated into English.",
    attribution: "The Charter Oath, issued in April 1868 (the fourteenth day of the third month in the old Japanese calendar), translated by Akihiko Tanaka, from \"The World and Japan\" database (National Graduate Institute for Policy Studies and the University of Tokyo)",
    text: "1. Deliberative Assemblies shall be widely established and all matters shall be decided by public discussion<br><br>2. All people, high and low, shall unite their minds to conduct the affairs of the state.<br><br>3. All people, civil and military classes as well as commoners, shall be encouraged to achieve their respective wishes so as not to keep them frustrated.<br><br>4. Old, corrupt customs shall be abolished and everything shall be based on the just way of nature.<br><br>5. Knowledge shall be sought throughout the world so as to strengthen the foundations of imperial rule.<br><br><em>Words to know: deliberative assemblies means meetings where people discuss and decide; affairs of the state means the work of governing; civil means officials who are not soldiers; commoners means people who are not nobles or samurai; respective wishes means each person's own goals; frustrated means blocked; corrupt means bad or rotten; abolished means ended; imperial rule means rule by the emperor.</em>",
    questions: [
      "Article 5 says knowledge \"shall be sought throughout the world.\" Using the lesson, give one example of Japan seeking knowledge abroad after 1868, and say what the article says that knowledge was for.",
      "Article 4 says \"Old, corrupt customs shall be abolished.\" Using the lesson, name one old custom or rule the Meiji government ended in the 1870s, and explain how ending it helped Japan build industry or a stronger state.",
      "The Oath was written by the young samurai who had just taken power, in the name of a fifteen-year-old emperor, in a year when many people did not know what the new government would do. Why might they make these promises in public in 1868? Use one detail from the lesson about what Japan was facing."
    ]
  },

  beSurreal: {
    title: "BeSurreal: The Silk Mill at Tomioka, 1873",
    desc: "You are sixteen, the daughter of a family that were samurai until the new government ended their privileges. It is 1873, and you have just started work at the Tomioka Silk Mill, the big new mill the government opened last year.",
    intro: "The mill is a long brick building, longer than any building you have ever seen. Inside, rows of machines brought from France pull fine silk thread from cocoons soaking in hot water. A French engineer and French women workers are here to teach you. You learn quickly, because you know that when you go home, you are expected to teach the new way to others.",
    detail: "Your father says the government built this mill because Japan must become rich and strong, or the foreign powers whose ships came into Edo Bay will push Japan around forever. Your grandmother says no proper girl works in a factory. Some girls have heard rumors about the foreigners and stayed home. You stayed.",
    prompt: "Write a letter home to your family. Explain why the government built this mill, what is new about the work, and what you are expected to do when you come home. Use the words government, machines, and strong."
  },

  beInTheRoom: {
    url: '',
    desc: "Tokyo, 1880. On a government council, decide whether Japan should keep running the factories, mines, and shipyards the state built, or sell them to private companies, with Egypt's mills as a comparison."
  }

};
