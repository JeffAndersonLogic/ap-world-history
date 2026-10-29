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
    topic: "Topic 5.7",
    title: "Economic Developments and Innovations in the Industrial Age",
    subtitle: "Between 1750 and 1900 the rules of the economy changed: Britain, and for a time much of Western Europe, moved from mercantilism toward free trade, partly persuaded by Adam Smith; new practices in banking and finance let big businesses work across borders; and industrial capitalism made goods cheaper and more varied, raising living standards for some. Shares, tariffs, and unequal gains carried on.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how and why Britain and other Western European countries began to move from mercantilism to free trade between 1750 and 1900, including Adam Smith's ideas and the repeal of the Corn Laws, and what about trade did not change.",
      kc: "KC-5.1.III.A",
      theme: "Economic Systems"
    },
    {
      target: "I can explain how large businesses that crossed borders relied on new practices in banking and finance, and how industrial capitalism changed the goods people could buy and raised living standards for some, and explain how one of these developments relates to another.",
      kc: "KC-5.1.III.B",
      theme: "Economic Systems"
    }
  ],

  successCriteria: [
    {
      criteria: "I can describe the old rules of trade (mercantilism: tariffs, bans, or trading monopolies), explain one idea from Adam Smith that challenged them, and explain one cause of Britain's change to free trade (such as the Anti-Corn Law League, the Irish famine, or Smith's ideas) with a detail such as the 1846 repeal of the Corn Laws. I can name one thing that did not change for every country, such as Germany's return to tariffs in 1879.",
      kc: "KC-5.1.III.A",
      theme: "Economic Systems"
    },
    {
      criteria: "I can explain how one new practice in banking or finance (limited liability, stock markets, or banks) helped a business work across borders, using HSBC or Lever's soap company (later part of Unilever) as an example; I can explain one way consumer goods became more available, affordable, or varied, and why living standards rose only for some; and I can say how one of these developments relates to another, and one thing that continued.",
      kc: "KC-5.1.III.B",
      theme: "Economic Systems"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 5: Learning Objective H',
      theme: 'Learning Objective',
      text: 'Explain the development of economic systems, ideologies, and institutions and how they contributed to change in the period from 1750 to 1900.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.III.A',
      theme: 'Economic Systems',
      text: 'Western European countries began abandoning mercantilism and adopting free trade policies, partly in response to the growing acceptance of Adam Smith’s theories of laissez-faire capitalism and free markets.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.III.B',
      theme: 'Economic Systems',
      text: 'The global nature of trade and production contributed to the proliferation of large-scale transnational businesses that relied on new practices in banking and finance.',
      illustrativeExamples: ['Hong Kong and Shanghai Banking Corporation (HSBC)', 'Unilever based in England and the Netherlands and operating in British West Africa and the Belgian Congo', 'Stock markets', 'Limited-liability corporations']
    },
    {
      code: 'KC-5.1',
      theme: 'Economic Systems',
      text: 'The development of industrial capitalism led to increased standards of living for some, and to continued improvement in manufacturing methods that increased the availability, affordability, and variety of consumer goods.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Freer Trade, Bigger Business",
    intro: "Use these cards to build three rows, one each for trade, business, and goods. For each row, find what it was like around 1750, what it was like by 1900, and one thing that carried on.",
    videos: [],
    segments: [
      {
        title: "Trade: From Mercantilism to Free Trade",
        bullets: [
          "**Before:** under mercantilism (Topic 4.5), governments put tariffs (taxes on imported goods) on foreign goods, banned some outright, and gave a few companies the sole right to trade in a region, such as Britain's East India Company in Asia.",
          "**A new argument:** in 1776 Adam Smith, a Scottish thinker, published The Wealth of Nations. He attacked what he called \"the mercantile system\": \"If a foreign country can supply us with a commodity cheaper than we ourselves can make it, better buy it of them.\" Later writers called ideas like his laissez-faire, French for roughly \"let them do it.\" Smith did not use the phrase himself.",
          "**Britain changes the rules:** the Corn Laws of 1815 taxed imported grain to keep prices high for landowners. In 1838 Manchester factory owners and merchants started the campaign that became the Anti-Corn Law League, led by Richard Cobden and John Bright. After famine struck Ireland in 1845, Prime Minister Robert Peel turned against the Corn Laws, and in 1846 Parliament repealed them. By 1860 Britain had ended its tariffs on imported factory goods.",
          "**Partly in response:** Smith's ideas were part of the reason, but only part. Manufacturers who wanted cheap food and open markets, and the famine, mattered too.",
          "**Others follow, for a while:** the Cobden-Chevalier Treaty of 1860 between Britain and France, and a chain of treaties in the 1860s, lowered tariffs across much of Western Europe. From 1879 Germany put tariffs back on grain and iron, and the United States kept high tariffs on factory goods. Britain stayed with free trade."
        ],
        image: {
          title: "Adam Smith, engraved in 1805",
          caption: "A stipple engraving of Adam Smith by MacKenzie, after a portrait medallion by James Tassie, made for an 1805 edition of The Wealth of Nations, fifteen years after Smith's death. Library of Congress.",
          url: "../assets/images/topics/5-7/adam-smith-mackenzie-after-tassie-1805.jpg",
          sourceUrl: "https://www.loc.gov/pictures/item/2004672780/"
        }
      },
      {
        title: "Business: New Tools, Bigger Companies",
        bullets: [
          "**Before:** companies that sold shares were not new. The VOC sold shares in 1602 (Topic 4.5). But from 1720 to 1825, forming one in Britain usually took special permission from the government, and most businesses belonged to one family or a few partners, who could lose everything if the business failed.",
          "**Limited liability:** laws of 1855 and 1856 let almost any group of seven or more people in Britain register a company whose owners could lose only what they had put in. France passed similar laws in 1863 and 1867.",
          "**Stock markets:** a stock market is where people buy and sell shares. London had had one since the 1700s, and in the mid-1840s crowds of British investors rushed to buy railway shares. By 1886 an American print could show the stock exchanges of eight cities.",
          "**A bank across borders:** the Hongkong and Shanghai Banking Corporation (HSBC) opened in Hong Kong in March 1865 to give local businesses better banking for their trade, then in Shanghai and London the same year. By 1900 it worked in 16 countries and territories.",
          "**Soap and margarine:** William Lever began selling Sunlight Soap in England in 1884, registered the name in the United States by 1886, and built Port Sunlight from 1888. Dutch families in Oss turned butter trading into margarine factories that sold to England. In 1929, after this unit, they joined into Unilever, based in England and the Netherlands."
        ],
        image: {
          title: "The World's Exchanges, 1886",
          caption: "A print published in New York in 1886 by Root and Tinker: the stock exchanges of New York, Paris, London, Chicago, Hamburg, Frankfurt, Berlin, and Brussels. The London panel is labeled Bank of England, London, Stock Exchange. Library of Congress.",
          url: "../assets/images/topics/5-7/worlds-exchanges-root-tinker-1886.jpg",
          sourceUrl: "https://www.loc.gov/pictures/item/98516796/"
        }
      },
      {
        title: "Goods: Cheaper, for Some",
        bullets: [
          "**More, cheaper, more kinds:** factories kept improving how they made things. Machine-made cotton cloth (Topic 5.3) kept falling in price. Soap came in wrapped, branded bars like Sunlight instead of being cut from long bars. Ships and railways (Topic 5.5) brought fruit, tea, and wheat from far away.",
          "**Standards of living:** in Britain, historians who measure what wages could buy find that working families' standard of living rose very little from the 1780s to the 1850s, and much faster from about 1860 to 1900.",
          "**For some:** many city workers stayed poor (Topic 5.9), and many of the people who grew the cotton, palm oil, and tea did not share the gains (Unit 6).",
          "**What continued:** selling shares was older than industry; many countries kept or went back to tariffs; and the gains went to some people and not others.",
          "**Your job:** pick two developments from these cards and say how one relates to the other: did it cause it, make it possible, or answer it?"
        ],
        image: {
          title: "Fruit stands on the dock, Liverpool, 1893",
          caption: "One half of a stereo photograph by William H. Rau, sold by Griffith and Griffith of Philadelphia, 1893: a woman in a shawl sits at a fruit stand while shoppers walk past, by the warehouses of Liverpool's docks. Library of Congress.",
          url: "../assets/images/topics/5-7/liverpool-dock-fruit-stands-1893.jpg",
          sourceUrl: "https://www.loc.gov/pictures/item/2019637949/"
        }
      }
    ]
  },

  map: {
    title: "Trade and Money, 1838 to 1900",
    url: "../assets/images/instructional-maps/topic-5-7.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-5-7.svg",
    caption: "A BeHistorical map of the places in this lesson: the cities of Western Europe where trade rules changed and businesses grew, and Hong Kong and Shanghai, where a bank was founded to serve trade with China.",
    intro: "Find Britain first, then France and Germany. Then find the United States, and Hong Kong and Shanghai in East Asia. Each numbered arrow joins two places, and the key says what it shows.",
    prompt: "Using the map and its key, choose one place or arrow that shows the rules of trade changing, and one that shows a business working across borders. For each, say what happened and when."
  },

  deepReading: {
    title: "Freer Trade, Bigger Business",
    desc: "A longer, optional chapter on the same story: how Adam Smith's argument and Britain's fight over the Corn Laws moved trade toward free trade, how limited liability, stock markets, and banks let businesses such as HSBC and Lever's soap company grow across borders, and who gained from cheaper goods and who did not.",
    url: "deep-reading-topic-5-7-economic-developments-and-innovations.html"
  },

  first10: {
    title: "First & 10: Freer Trade, Bigger Business",
    embedUrl: 'first-and-10-topic-5-7-economic-developments-and-innovations-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 story, answer the three questions, then return to the 5.7 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Before, After, and What Carried On",
    intro: "Use the cards to find evidence for one row of the topic: trade, business, or goods. Ask what each source can and cannot show.",
    prompt: "Choose two cards. For each, say what kind of source it is, which row it is evidence for, and one thing it cannot tell you.",
    items: []
  },

  primarySource: {
    title: "Primary Source: Adam Smith, The Wealth of Nations, 1776",
    intro: "Adam Smith was a Scottish professor who wrote about how countries grow rich. In 1776 he published The Wealth of Nations, a long book that attacked what he called \"the mercantile system\": the tariffs, bans, and monopolies European governments used to control trade. These are two short passages from it, in his own words.",
    attribution: "Adam Smith, An Inquiry into the Nature and Causes of the Wealth of Nations (London, 1776), Book IV, chapter 2 (first two paragraphs) and chapter 8 (third), from the public-domain text at Project Gutenberg",
    text: "It is the maxim of every prudent master of a family, never to attempt to make at home what it will cost him more to make than to buy. The tailor does not attempt to make his own shoes, but buys them of the shoemaker. The shoemaker does not attempt to make his own clothes, but employs a tailor.<br><br>What is prudence in the conduct of every private family, can scarce be folly in that of a great kingdom. If a foreign country can supply us with a commodity cheaper than we ourselves can make it, better buy it of them with some part of the produce of our own industry, employed in a way in which we have some advantage.<br><br>Consumption is the sole end and purpose of all production; and the interest of the producer ought to be attended to, only so far as it may be necessary for promoting that of the consumer.<br><br><em>Words to know: maxim means a rule to live by; prudent means sensible and careful; master of a family means the head of a household; prudence means good sense; scarce be folly means can hardly be foolish; commodity means a good for sale; produce of our own industry means what our own work makes; consumption means buying and using goods; the sole end and purpose means the only goal; attended to means cared about.</em>",
    questions: [
      "In the first paragraph, what does the tailor do instead of making his own shoes? In your own words, what rule is Smith drawing from that example?",
      "In the second paragraph, Smith says a \"great kingdom\" should act like a sensible family. Using the lesson, name one British law that did the opposite, and explain what Britain did about it in 1846.",
      "In the third paragraph, Smith says the buyer (the consumer) matters more than the maker (the producer). Using the lesson, explain why factory owners in Manchester in the 1840s might agree with him, and why British landowners might not."
    ]
  },

  beSurreal: {
    title: "BeSurreal: A Grocer's Shop in Lancashire, 1890",
    desc: "You are fourteen, and you help in your family's grocer's shop in a Lancashire mill town. It is 1890, and a crate of soap has just arrived from Lever Brothers.",
    intro: "When your grandmother kept this shop, soap came in long bars, and she cut off a piece for each customer and weighed it. The soap in this crate is different. Every bar is already cut and wrapped in paper printed with one name: Sunlight. The crate came by railway, and the oils in the soap, your father says, came by ship from coconut and palm trees on the other side of the world.",
    detail: "The mill families who shop here can afford a little more than their parents could: cheaper cotton cloth, tea, sugar, and now soap with a name they have seen in the newspaper. But Mrs. Kelly, whose husband lost his place at the mill last winter, still buys the cheapest scrap of anything, and asks you to put it on her account.",
    prompt: "Write a letter to your grandmother, who has moved away. Tell her what has changed in the shop since her day, and one thing that has not changed. Use the words brand, cheaper, and for some."
  },

  beInTheRoom: {
    url: '',
    desc: "London, May 1846. In Parliament, decide whether Britain should repeal the Corn Laws and move to free trade, with a factory owner, a landowner, a worker, and news of famine in Ireland in front of you."
  }

};
