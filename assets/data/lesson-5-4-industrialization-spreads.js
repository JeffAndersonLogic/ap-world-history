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
    topic: "Topic 5.4",
    title: "Industrialization Spreads in the Period from 1750 to 1900",
    subtitle: "Factory methods spread from Britain to other parts of Europe, the United States, Russia, and Japan, carried by people, machines, and money. The factory regions made a fast-growing share of the world's goods. India, China, and the Middle East kept making goods, mostly by hand, but a shrinking share.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how new factory methods spread from Britain to other parts of Europe, the United States, Russia, and Japan, what carried them there (skilled people, machines, and money), and the pattern in where they took root.",
      kc: "KC-5.1.I.D",
      theme: "Technology and Innovation"
    },
    {
      target: "I can explain how the share of the world's manufactured goods made in Europe and the United States rose between 1750 and 1900 while the share made in Asia and the Middle East fell, and what those regions kept making.",
      kc: "KC-5.1.II.B",
      theme: "Technology and Innovation"
    }
  ],

  successCriteria: [
    {
      criteria: "I can name the four places the CED says the new methods spread to (other parts of Europe, the United States, Russia, and Japan), give one case for at least two of them (such as Samuel Slater in Rhode Island, John Cockerill in Belgium, John Hughes in Russia, or the Osaka Spinning Company in Japan), say what carried the methods there, and state the pattern in one sentence.",
      kc: "KC-5.1.I.D",
      theme: "Technology and Innovation"
    },
    {
      criteria: "I can use two of Paul Bairoch's estimates to explain how shares of world manufacturing changed from 1750 to 1900, explain what a share means, explain one cause of the change (such as cheaper machine-made cloth, or the trade rules of the East India Company), and give evidence that India, China, or Egypt kept making goods, such as India's handloom weavers or the Bombay Dockyard's ships.",
      kc: "KC-5.1.II.B",
      theme: "Technology and Innovation"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 5: Learning Objective E',
      theme: 'Learning Objective',
      text: 'Explain how different modes and locations of production have developed and changed over time.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.II.B',
      theme: 'Technology and Innovation',
      text: 'The rapid development of steam-powered industrial production in European countries and the United States contributed to the increase in these regions’ share of global manufacturing during the first Industrial Revolution. While Middle Eastern and Asian countries continued to produce manufactured goods, these regions’ share in global manufacturing declined.',
      illustrativeExamples: ['Shipbuilding in India and Southeast Asia', 'Iron works in India', 'Textile production in India and Egypt']
    },
    {
      code: 'KC-5.1.I.D',
      theme: 'Technology and Innovation',
      text: 'As new methods of industrial production became more common in parts of northwestern Europe, they spread to other parts of Europe and the United States, Russia, and Japan.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Who Made the World's Goods?",
    intro: "Use these cards to follow where the factory went and what carried it there, how the world's shares of manufacturing changed, and what the old makers kept making.",
    videos: [],
    segments: [
      {
        title: "Where the Factory Went, and What Carried It",
        bullets: [
          "**Before:** in 1750 almost everything was made by hand, at home or in workshops, and most of it in Asia. The economic historian Paul Bairoch estimated that China made about a third of the world's manufactured goods, India about a quarter, all of Europe about a quarter, and Britain under 2 percent. His figures are estimates.",
          "**Keeping the secret:** British law banned skilled textile workers from leaving to work abroad (until 1824) and banned the export of textile machines (until 1843).",
          "**People:** Samuel Slater learned the cotton trade at Jedediah Strutt's mill in Derbyshire (Strutt was Arkwright's partner). In 1789 he sailed for the United States, and at Pawtucket, Rhode Island, he built water-powered spinning machines from memory; the Slater Mill building dates from 1793. In 1817 John Cockerill, son of an English machine maker, opened works at Seraing, near Liège in Belgium, on a rich coalfield.",
          "**Machines and money:** the first railway in the German states, Nuremberg to Fürth (1835), ran with a locomotive built in England. Boston merchants paid for big cotton mills at Lowell, Massachusetts, from the 1820s. On the continent, industry grew where coal lay: around Liège, in the Ruhr valley, and in northern France.",
          "**Russia and Japan, later:** a Welsh engineer, John Hughes, built ironworks in the Donets coal basin of southern Russia in the early 1870s, in a town named after him, Yuzovka. In Japan the Osaka Spinning Company opened in 1883 with British-made spinning machines driven by steam. Both governments also pushed industry on purpose: that is Topic 5.6.",
          "**The pattern:** the methods were carried by people, machines, and money, and they took root where coal, iron, and water were waiting."
        ],
        image: {
          title: "Where the factory went",
          caption: "BeHistorical topic artwork for this card.",
          url: "",
          sourceUrl: ""
        }
      },
      {
        title: "What Changed: The World's Shares",
        bullets: [
          "**Mode:** a steam-powered factory could make cloth far faster and more cheaply than hand spinners and weavers.",
          "**Location:** as factories spread, the regions that had them made more of the world's goods. In Bairoch's estimates, Britain's share of world manufacturing went from under 2 percent in 1750 to about a fifth by 1860.",
          "**By 1900:** Europe and the United States together made more than four-fifths of the world's manufactured goods, and the United States had passed Britain as the largest maker.",
          "**The fall:** China's share fell from about a third (1750) to about 6 percent (1900); India's from about a quarter to under 2 percent.",
          "**A share is not an amount:** the world was making far more goods in 1900 than in 1750. A region's share can fall even while it keeps making as much as before, because the total grows faster."
        ],
        image: {
          title: "The shares move",
          caption: "BeHistorical topic artwork for this card.",
          url: "",
          sourceUrl: ""
        }
      },
      {
        title: "What Continued, and Why the Share Fell",
        bullets: [
          "**Cloth:** millions of Indian handloom weavers were still weaving in 1900; many switched to cheaper machine-spun thread and kept weaving. Chinese farm families kept spinning and weaving cotton at home. Egypt's weavers kept weaving.",
          "**Ships:** at the Bombay Dockyard the Wadia family of master shipbuilders built teak warships for Britain's Royal Navy. HMS Trincomalee, launched in 1817, is still afloat at Hartlepool, England.",
          "**Why the share fell:** Lancashire's machine-made cloth was cheaper than hand-made cloth, even in India. By the 1820s more cotton cloth went from Britain to India than from India to Britain, and India sold raw cotton to British mills.",
          "**The rules of those in power:** the British East India Company, which ruled much of India, let British goods in at low taxes; Britain had long kept many Indian cloths out of its own market with bans and high taxes. Historians still argue how much each cause mattered, alongside troubles in India that began before the factories.",
          "**New ships:** by the 1850s and 1860s navies wanted iron ships driven by steam, built in British yards, and Bombay's wooden warships were left behind."
        ],
        image: {
          title: "The old makers kept making",
          caption: "BeHistorical topic artwork for this card.",
          url: "",
          sourceUrl: ""
        }
      }
    ]
  },

  map: {
    title: "Where the Factory Went, and Who Kept Making Goods, 1750 to 1900",
    url: "../assets/images/instructional-maps/topic-5-4.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-5-4.svg",
    caption: "A BeHistorical map of the places factory methods reached from Britain, with the decade they arrived, and of regions that kept making goods mostly by hand while their share of the world's manufacturing fell.",
    intro: "Find Britain first. Then follow the numbered arrows to the places the new methods reached, in order. Then find the shaded regions in Asia and the Middle East that kept making goods.",
    prompt: "Using the map, explain one change and one continuity in where the world's goods were made between 1750 and 1900. Name a place for each."
  },

  deepReading: {
    title: "Who Made the World's Goods?",
    desc: "A longer, optional chapter on the same story: how factory methods left Britain with skilled people, then machines and money; where they took root, from Belgium and the German states to the United States, Russia, and Japan; how the world's shares of manufacturing moved; and what India, China, and Egypt kept making while their share fell.",
    url: "deep-reading-topic-5-4-industrialization-spreads.html"
  },

  first10: {
    title: "First & 10: Who Made the World's Goods?",
    embedUrl: 'first-and-10-topic-5-4-industrialization-spreads-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 story, answer the three questions, then return to the 5.4 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: A Change, or a Continuity",
    intro: "Use the cards to find changes and continuities in how and where the world's goods were made, and what each source can and cannot show.",
    prompt: "Choose two cards. For each, say what kind of source it is, what it shows about a change or a continuity in how or where goods were made, and one thing it cannot tell you.",
    items: []
  },

  primarySource: {
    title: "Primary Source: PENDING",
    intro: "PENDING",
    attribution: "PENDING",
    text: "PENDING",
    questions: ["PENDING", "PENDING", "PENDING"]
  },

  beSurreal: {
    title: "BeSurreal: A Weaver's House near Dhaka, Bengal, 1830s",
    desc: "You live in a weaving village near Dhaka, in Bengal. Your father weaves cotton cloth on a handloom in the front room, and your mother spins the thread on a wheel. The cloth from villages like yours was once sold as far away as Europe.",
    intro: "This year the cloth merchant came back from the market with a bolt of cloth from Lancashire, in Britain, made by machines. He says it sells for less than your father's, and that more of it arrives every season. He also says the mills sell thread spun by machines, cheaper than your mother's.",
    detail: "Your father is not stopping. He says people still want cloth woven the old way, and that the machine thread is strong and cheap, so he can buy it and weave faster. Your mother is not sure there will be work for her wheel. Your uncle has stopped weaving and now grows cotton to sell; he says the merchants who buy it ship it to the same British mills. Your grandmother remembers when buyers from many countries came to the village for its cloth.",
    prompt: "Write a page of your journal about this year. Explain one thing that has changed in how cloth is made and sold, and one thing that has stayed the same in your family's work. Say what your family is doing about it. Use the words handloom, machine-made, and raw cotton."
  },

  beInTheRoom: {
    url: '',
    desc: "London, 1851, the Great Exhibition. Walk the hall as a visitor from one of the world's making regions, decide what to take home, and explain what has changed and what has stayed the same in who makes the world's goods."
  }

};
