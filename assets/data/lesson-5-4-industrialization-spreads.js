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
    subtitle: "Factory methods spread from Britain to other parts of Europe, the United States, Russia, and Japan, carried by people, machines, and money. Europe and the United States made a fast-growing share of the world's goods. India, China, and the Middle East kept making goods, much of it by hand, but a shrinking share.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how new factory methods spread from Britain to other parts of Europe, the United States, Russia, and Japan, what carried them there (skilled people, machines, and money), and the pattern in how they spread.",
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
      criteria: "I can name the four places the College Board says the new methods spread to (other parts of Europe, the United States, Russia, and Japan), give one case for at least two of them (such as Samuel Slater in Rhode Island, John Cockerill in Belgium, John Hughes in Russia, or the Osaka Spinning Company in Japan), say what carried the methods there, and state the pattern in one sentence.",
      kc: "KC-5.1.I.D",
      theme: "Technology and Innovation"
    },
    {
      criteria: "I can use two of Paul Bairoch's estimates to explain how shares of world manufacturing changed from 1750 to 1900, explain what a share means, explain one cause of the change (such as cheaper machine-made cloth, or the trade rules of Britain and the East India Company), and give evidence that India, China, or the Middle East kept making goods, such as India's handloom weavers or the Bombay Dockyard's ships.",
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
          "**People:** Samuel Slater learned the cotton trade at Jedediah Strutt's mill in Derbyshire (Strutt had been Arkwright's partner, and his mills ran Arkwright's machines). In 1789 he sailed for the United States, and at Pawtucket, Rhode Island, he built water-powered spinning machines from memory and had them running by the end of 1790; the Slater Mill was begun in 1793 and enlarged several times afterward. In 1817 John Cockerill, son of an English machine maker, began building machines at Seraing, near Liège in Belgium, on a rich coalfield.",
          "**Machines and money:** the first steam railway in the German states, Nuremberg to Fürth (1835), ran with a locomotive built in England. Boston merchants paid for big cotton mills at Lowell, Massachusetts, from the 1820s. On the continent, industry grew where coal lay: around Liège, in the Ruhr valley, and in northern France.",
          "**Russia and Japan, later:** their big growth came mostly after 1870. A Welsh engineer, John Hughes, built ironworks in the Donets coal basin of the southern Russian Empire (today eastern Ukraine) in the early 1870s; the town that grew up around them was named Yuzovka, after him (today Donetsk). In Japan the Osaka Spinning Company opened in 1883 with British-made spinning machines driven by steam. Both governments also pushed industry on purpose: that is Topic 5.6.",
          "**Three carriers:** people, machines, and money. Ask of each case: what carried the methods there, and what was waiting when they arrived?"
        ],
        image: {
          title: "Slater Mill, Pawtucket, about 1869",
          caption: "One frame of a stereo photograph of about 1869 showing Slater Mill, begun in 1793 and enlarged several times, beside its dam on the Blackstone River in Pawtucket, Rhode Island. By then another company rented it; its sign is on the gable. Library of Congress (a copy made by the Historic American Engineering Record).",
          url: "../assets/images/topics/5-4/slater-mill-pawtucket-c1869.jpg",
          sourceUrl: "https://www.loc.gov/item/ri0102/"
        }
      },
      {
        title: "What Changed: The World's Shares",
        bullets: [
          "**Mode:** a steam-powered factory could make cloth far faster and more cheaply than hand spinners and weavers.",
          "**Location:** as factories spread, the regions that had them made more of the world's goods. In Bairoch's estimates, Britain's share of world manufacturing went from under 2 percent in 1750 to about a fifth by 1860.",
          "**By 1900:** Europe and the United States together made more than four-fifths of the world's manufactured goods, and the United States had passed Britain as the largest maker.",
          "**The fall:** China's share fell from about a third (1750) to about 6 percent (1900); India's from about a quarter to under 2 percent.",
          "**A share is not an amount:** the world was making far more goods in 1900 than in 1750. A region's share can fall even while it keeps making as much as before, because the total grows faster. For India, though, Bairoch's estimates suggest it also made less per person over time: it lost ground, not only share."
        ],
        image: {
          title: "British Cotton Machinery, 1851",
          caption: "A photograph of cotton machinery made by Hibbert, Platt and Sons of Oldham, England, on show at the Great Exhibition in London in 1851: a long iron frame with rows of spindles and bobbins. In a mill, machines like this were driven by a steam engine. Rijksmuseum.",
          url: "../assets/images/topics/5-4/great-exhibition-1851-hibbert-platt-spinning-machine.jpg",
          sourceUrl: "https://id.rijksmuseum.nl/200345908"
        }
      },
      {
        title: "What Continued, and Why the Share Fell",
        bullets: [
          "**Cloth:** India built some steam-powered cotton mills of its own (Bombay's first was founded in 1854), but much of its cloth was still woven by hand. Hand weaving shrank but did not die. Many weavers switched to cheaper machine-spun thread and kept weaving, and in 1908, in one province of northern India alone, about a million people still lived from handloom weaving. Chinese farm families kept weaving cloth at home, more and more from machine-made thread. In the Syrian cities of Aleppo and Damascus, in the Ottoman Empire, the number of handlooms held steady from 1860 to 1914.",
          "**Ships:** at the Bombay Dockyard the Wadia family of master shipbuilders built teak warships for Britain's Royal Navy. HMS Trincomalee, launched in 1817, is still afloat at Hartlepool, England, where its museum calls it Britain's oldest warship still afloat.",
          "**Why the share fell:** the rest of the world made far more goods, and the old makers lost buyers. Machine-made cloth from Lancashire, the cotton-mill region of northwest England, was cheaper than hand-made cloth, even in India. In 1815 India sold about £1.3 million worth of cotton cloth abroad and bought about £26,000 worth from England; by 1832 it sold under £100,000 worth and bought over £400,000 worth. From about 1830 India bought more cotton cloth than it sold, and it sold raw cotton to British mills.",
          "**The rules of those in power:** under the East India Company, which ruled much of India, British cotton cloth entered India at a tax of 2½ percent, while around 1813 Indian calicoes paid about 70 to 85 percent to be sold in Britain. Historians still argue how much each cause mattered: cheaper machine-made cloth, the trade rules of those in power, and troubles in India that began before the factories, such as the breakup of the Mughal Empire and drought.",
          "**New ships:** by the middle of the 1800s navies were turning to iron ships driven by steam, built mostly in British yards, and Bombay's age of teak warships came to an end."
        ],
        image: {
          title: "A Weaver at His Loom, about 1840",
          caption: "A painting of a weaver working a hand loom, about 1840, attributed to a painter from Tanjore (Thanjavur), in south India, in a style Indian artists often made for European buyers who collected pictures of Indian trades. Wellcome Collection.",
          url: "../assets/images/topics/5-4/weaver-at-his-loom-tanjore-c1840.jpg",
          sourceUrl: "https://wellcomecollection.org/works/pjnujb7j"
        }
      }
    ]
  },

  map: {
    title: "Where the Factory Went, and Who Kept Making Goods, 1750 to 1900",
    url: "../assets/images/instructional-maps/topic-5-4.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-5-4.svg",
    caption: "A BeHistorical map of the places factory methods reached from Britain, with the decade of the case this lesson uses for each, and of regions that kept making goods, much of it by hand, while their share of the world's manufacturing fell.",
    intro: "Find Britain first. Then follow the numbered arrows to the cases this lesson uses, in date order. Then find the shaded regions in Asia and the Middle East that kept making goods.",
    prompt: "Using the map, explain one change and one continuity in where the world's goods were made between 1750 and 1900. Name a place for each."
  },

  deepReading: {
    title: "Who Made the World's Goods?",
    desc: "A longer, optional chapter on the same story: how factory methods left Britain with skilled people, then machines and money; where they took root, from Belgium and the German states to the United States, Russia, and Japan; how the world's shares of manufacturing moved; and what India, China, and the Middle East kept making while their share fell.",
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
    title: "Primary Source: Montgomery Martin on India's Cloth, 1840",
    intro: "In 1840 a committee of Britain's House of Commons asked witnesses about the taxes on goods from India. One witness was Robert Montgomery Martin, a British writer who had lived in India and spent years studying the trade of the British Empire. He argued that India's goods were being treated unfairly. A member of the committee, who spoke for British silk makers, had said the committee had evidence that India was \"an agricultural rather than a manufacturing country.\" Martin answered him. The Indian historian Romesh Dutt reprinted Martin's evidence in 1904.",
    attribution: "Robert Montgomery Martin, evidence to the House of Commons Select Committee on East India Produce, 1840, questions 3877 and 3879 and 3918 to 3920, as printed in Romesh Dutt, India in the Victorian Age (London, 1904), pp. 112 and 114",
    text: "<strong>Passage 1.</strong> We have during the period of a quarter of a century compelled the Indian territories to receive our manufactures; our woollens, duty free, our cottons at 2½ per cent., and other articles in proportion ... The decay and destruction of Surat, of Dacca, of Murshedabad, and other places where native manufactures have been carried on, is too painful a fact to dwell upon. I do not consider that it has been in the fair course of trade; I think it has been the power of the stronger exercised over the weaker.<br><br><strong>Passage 2.</strong> I do not agree that India is an agricultural country; India is as much a manufacturing country as an agricultural; and he who would seek to reduce her to the position of an agricultural country seeks to lower her in the scale of civilisation. I do not suppose that India is to become the agricultural farm of England; she is a manufacturing country, her manufactures of various descriptions have existed for ages, and have never been able to be competed with by any nation wherever fair play has been given to them.<br><br><em>Words to know: compelled means forced; manufactures means manufactured goods; duty means a tax on goods brought in; 2½ per cent. means a tax of 2½ percent of the goods' value; Surat, Dacca (now Dhaka), and Murshedabad were Indian cloth-making cities; native means made by Indians; decay and destruction means decline and ruin; competed with means matched by a rival; to lower her in the scale of civilisation means to treat her as less advanced.</em>",
    questions: [
      "In Passage 1, what does Martin say Britain \"compelled\" India to do, and at what tax did British cottons enter India? What does he say happened to Indian cloth-making cities such as Dacca?",
      "In Passage 1, Martin says: \"I do not consider that it has been in the fair course of trade; I think it has been the power of the stronger exercised over the weaker.\" What is he claiming caused the change? Name one other cause from this lesson that historians also weigh.",
      "Using Passage 2, explain what Martin thought India should be: a country that only grows crops, or one that also makes goods? Then use the lesson to say whether India kept making goods after 1840, and what happened to its share of the world's goods."
    ]
  },

  beSurreal: {
    title: "BeSurreal: A Weaver's House near Dacca, Bengal, 1830s",
    desc: "You live in a weaving village near Dacca (today Dhaka), in Bengal. Your father weaves cotton cloth on a handloom in the front room, and your mother spins the thread by hand. The cloth from villages like yours was once sold as far away as Europe.",
    intro: "This year the cloth merchant came back from the market with a bolt of cloth from Lancashire, in Britain, made by machines. He says it sells for less than your father's, and that more of it arrives every season. He also says the mills sell thread spun by machines, cheaper than your mother's.",
    detail: "Your father is not stopping. He says people still want cloth woven the old way, and that the machine thread is strong and cheap, so he can buy it and weave faster. Your mother is not sure there will be work for her spinning. Your uncle has stopped weaving and now works in the fields. Your grandmother remembers when buyers from many countries came to the village for its cloth.",
    prompt: "Write a page of your journal about this year. Explain one thing that has changed in how cloth is made and sold, and one thing that has stayed the same in your family's work. Say what your family is doing about it. Use the words handloom, machine-made, and continuity."
  },

  beInTheRoom: {
    url: '',
    desc: "London, 1851, the Great Exhibition. Walk the hall as a visitor from one of the world's making regions, decide what to take home, and explain what has changed and what has stayed the same in who makes the world's goods."
  }

};
