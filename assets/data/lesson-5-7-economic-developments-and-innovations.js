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
    title: "Economic Developments and Innovations",
    subtitle: "How industrial capitalism invented new financial institutions — corporations, investment banking, stock markets — promoted free trade ideology, and extended economic power through debt and investment rather than armies",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how Western European economies moved away from mercantilism toward free trade and laissez-faire ideas associated with Adam Smith.",
      kc: "KC-5.1.III.A",
      theme: "Economic Systems"
    },
    {
      target: "I can explain how transnational businesses used stock markets, limited-liability corporations, banks, and other financial practices to mobilize capital for large-scale industrial and global enterprise.",
      kc: "KC-5.1.III.B",
      theme: "Economic Systems"
    },
    {
      target: "I can explain how industrial capitalism increased standards of living for some people and made manufactured consumer goods more available, affordable, and varied, while benefits remained unevenly distributed.",
      kc: "KC-5.1",
      theme: "Economic Systems"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain why free-trade arguments challenged mercantilist restrictions and use Adam Smith, laissez-faire, or a policy such as the repeal of the Corn Laws as evidence.",
      kc: "KC-5.1.III.A",
      theme: "Economic Systems"
    },
    {
      criteria: "I can explain how at least two financial or business innovations—such as limited liability, stock markets, investment banking, HSBC, or large transnational firms—reduced risk, pooled capital, or financed long-distance industrial activity.",
      kc: "KC-5.1.III.B",
      theme: "Economic Systems"
    },
    {
      criteria: "I can explain one way industrial capitalism raised standards of living for some people and use specific evidence showing how improved manufacturing increased the availability, affordability, or variety of consumer goods, while also qualifying who benefited.",
      kc: "KC-5.1",
      theme: "Economic Systems"
    }
  ],

  collegeBoardKeyConcepts: [
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
      illustrativeExamples: ['Hong Kong and Shanghai Banking Corporation (HSBC)', 'Unilever, based in England and the Netherlands and operating in British West Africa and the Belgian Congo', 'Stock markets', 'Limited-liability corporations']
    },
    {
      code: 'KC-5.1',
      theme: 'Economic Systems',
      text: 'The development of industrial capitalism led to increased standards of living for some, and to continued improvement in manufacturing methods that increased the availability, affordability, and variety of consumer goods.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Industrial Capitalism: Free Markets, Big Finance, Mass Consumption",
    intro: "Industrialization changed not only factories but the rules and institutions of economic life. Western European states increasingly embraced free trade, firms grew beyond national borders with help from new banking and corporate practices, and improved manufacturing put a wider range of goods within reach of more consumers. Topic 5.7 asks how those economic systems, ideologies, and institutions produced change.",
    videos: [],
    segments: [
      {
        title: "From Mercantilism to Free Trade",
        bullets: [
          "Mercantilism had used tariffs, monopolies, and state regulation to direct trade for national power. During the industrial era, influential thinkers such as **Adam Smith** argued that freer markets and **laissez-faire** policies would allow specialization and competition to increase wealth.",
          "Britain became a leading advocate of free trade as its industrial producers sought cheaper food and raw materials and wider markets. The repeal of the **Corn Laws in 1846** became a major symbol of the shift away from protection of landed agricultural interests.",
          "Free trade was an economic ideology and a policy choice, not an automatic result of industrialization. Different states adopted or rejected it according to their own stage of development and political interests."
        ],
        image: {
          title: "Industrial trade and financial networks",
          caption: "Industrial capitalism connected production, finance, and trade across national borders.",
          url: "../assets/images/instructional-maps/topic-5-7.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-5-7.svg"
        }
      },
      {
        title: "Finance Makes Industrial Scale Possible",
        bullets: [
          "Factories, railroads, mines, shipping lines, and global trading firms required far more capital than most individual owners could provide. **Stock markets and joint-stock firms** pooled money from many investors.",
          "**Limited liability** reduced investor risk by limiting losses to the amount invested, making participation in large enterprises more attractive. Banks and investment houses moved credit between savers, firms, governments, and distant markets.",
          "Transnational institutions such as **HSBC**, founded in 1865 to finance trade between Asian ports and British markets, show how industrial business increasingly operated across borders and depended on sophisticated finance."
        ],
        image: {
          title: "Transnational banking and finance",
          caption: "Banking and corporate innovations made it possible to mobilize capital across regions and oceans.",
          url: "../assets/images/instructional-maps/topic-5-7.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-5-7.svg"
        }
      },
      {
        title: "Industrial Capitalism Creates a Consumer Economy",
        bullets: [
          "Improved machinery, larger factories, cheaper transportation, and standardized production increased the **quantity and variety of manufactured goods**. Mass production lowered the cost of many textiles, household goods, tools, and other consumer products.",
          "For some workers and especially expanding middle classes, rising real incomes and cheaper manufactured goods contributed to **higher standards of living** over the course of the 19th century. Consumers could purchase goods that earlier generations had made at home or could not afford.",
          "The gains were **uneven**. Early industrial workers often endured low wages and poor conditions, and colonized or resource-producing regions did not share equally in industrial wealth. Topic 5.7 requires explaining both the increased availability of goods and the qualified nature of rising living standards."
        ],
        image: {
          title: "Mass production and consumer goods",
          caption: "Industrial manufacturing increased the availability, affordability, and variety of consumer goods for many people.",
          url: "../assets/images/instructional-maps/topic-5-7.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-5-7.svg"
        }
      },
      {
        title: "Connect the System: Ideology, Capital, Production, Consumption",
        bullets: [
          "Free-trade ideas encouraged wider markets; financial institutions mobilized investment; improved manufacturing expanded output; and larger markets made mass production more profitable.",
          "The system was mutually reinforcing: **capital -> industrial expansion -> more goods -> larger consumer markets -> new investment opportunities**.",
          "Economic imperialism, debt dependency, and unequal trade relationships are important extensions of this story, but the formal Topic 5.7 job is the development of free-market ideas, transnational finance/business, and industrial capitalism's effects on goods and living standards."
        ],
        image: {
          title: "The industrial-capitalist cycle",
          caption: "Finance, production, trade, and consumption reinforced one another as industrial capitalism expanded.",
          url: "../assets/images/instructional-maps/topic-5-7.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-5-7.svg"
        }
      }
    ]
  },

  map: {
    title: "The Global Financial System, c. 1850–1900",
    url: "../assets/images/instructional-maps/topic-5-7.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-5-7.svg",
    caption: "By c. 1850–1900, British financial institutions, banks, insurance companies, stock exchanges, had made London the center of the global financial system. British capital flowed outward to finance railroads in Argentina, mines in Chile, government bonds in the Ottoman Empire, and plantation agriculture in Southeast Asia. The returns flowed back to London.",
    intro: "Examine the pattern of British overseas investment by 1900. Note that British capital flowed primarily to: (1) formal British colonies (India, Australia, Canada, South Africa); (2) formally independent but economically dependent Latin American countries; (3) the Ottoman Empire and China, where unequal treaties had opened markets to British goods and investment. Notice which regions are NOT major recipients of British investment, continental Europe and the United States were increasingly competitors, not dependencies.",
    prompt: "Using the map and your knowledge, explain how British financial investment created economic dependencies in Latin America and the Ottoman Empire without formal colonialism. What specific financial mechanisms produced these dependencies? How does the geographic pattern of British investment by 1900 reveal the structure of the global economy that industrial capitalism created?"
  },

  deepReading: {
    title: "Somebody Else Carries the Risk",
    desc: "A textbook-depth companion on what an investor faced before limited liability and what the Companies Act of 1862 changed, what a stock exchange and an investment bank actually do, why free trade was the policy of the cheapest producer, and how a loan became a government in Egypt, the Ottoman empire and the treaty ports. Optional, and the bridge from this unit into Unit 6.",
    url: "deep-reading-topic-5-7-economic-developments-and-innovations.html"
  },

  first10: {
    title: 'First & 10: The Free Market',
    embedUrl: 'first-and-10-topic-5-7-economic-developments-and-innovations-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.7 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Free Trade, Finance, and Economic Power",
    intro: "Use the evidence below to analyze the economic developments and innovations of industrial capitalism. Strong AP argumentation requires using specific evidence to support a claim, not just describing what sources say but explaining what they reveal about the broader pattern.",
    prompt: "Choose one piece of evidence. Explain what it reveals about how industrial capitalism developed new financial institutions or extended economic power through trade and investment relationships. Then connect your evidence to the broader argument: how did the financial innovations and free trade ideology of the 19th century shape the global economy, and who benefited most?",
    items: [
      { title: "Richard Cobden on the Repeal of the Corn Laws (1846)", detail: "Richard Cobden, leader of the Anti-Corn Law League, argued in Parliament: 'I see in the Free Trade principle that which shall act on the moral world as the principle of gravitation in the universe, drawing men together, thrusting aside the antagonism of race, and creed, and language, and uniting us in the bonds of eternal peace. I have speculated, and probably dreamed, in the dim anticipation of the future, and I have seen, through a telescope which has been almost dazzled by its own light, the day when Free Trade shall have a mission to perform, a mission greater than was ever intrusted to the sword or to the cannon... The result of our labours is to increase the power and the resources of a nation already the greatest manufacturing country in the world.' Analyze: how does Cobden's argument for free trade blend economic logic with moral and political claims? How does the phrase 'already the greatest manufacturing country in the world' reveal the political context of Britain's free trade advocacy? Why might countries that were NOT the greatest manufacturing country in the world see free trade differently?" },
      { title: "The Ottoman Public Debt Administration (1881)", detail: "The Ottoman government decree establishing the Public Debt Administration stated: 'The Administration shall take over the collection of the following revenues, currently assigned to the service of the Ottoman public debt: the tobacco and salt monopolies; stamp duties; customs duties on specified goods; and the fishing tax. These revenues shall be administered by a Council of the Public Debt under the direction of representatives appointed by the principal bondholder groups, British, French, German, Austro-Hungarian, Italian, and Ottoman, in proportion to their bond holdings.' Analyze: what does this decree reveal about the relationship between Ottoman debt and Ottoman sovereignty? What does it mean for a government to cede the collection of its own taxes to foreign creditors? How does the Ottoman Public Debt Administration compare to direct British colonial administration of India, what is similar, what is different?" },
      { title: "J.P. Morgan on Railroad Consolidation (c. 1890)", detail: "J.P. Morgan explained his approach to railroad consolidation: 'Competition is a destructive force. The railroads of America are running at a loss, cutting rates, poaching each other's traffic, and destroying their own credit in the process. What they need is not more competition but rational organization, combination under unified management, elimination of duplicate costs, and pricing that allows a reasonable return on investment. The capital markets will not continue to finance enterprises that cannot earn their cost of capital. My job is to ensure that they can. The alternative is chaos, and chaos serves no one, not the investor, not the shipper, not the worker, and not the nation.' Analyze: how does Morgan's argument reframe monopolistic consolidation as a service to all parties? What assumptions about markets and competition does it reveal? How does the scale of Morgan's influence, controlling one-sixth of American railroads, relate to the broader question of whether industrial capitalism concentrated or distributed economic power?" }
    ]
  },

  primarySource: {
    title: "Primary Source: The Anti-Corn Law League — Free Trade as Moral Mission (1843)",
    intro: "The Anti-Corn Law League, founded in Manchester in 1838, became one of the most effective political lobbying campaigns in British history. By combining economic argument (the Corn Laws raised food prices and depressed industrial wages) with moral argument (the Corn Laws were a corrupt aristocratic subsidy at the expense of the poor) and strategic use of the new railroad network and postal system to distribute pamphlets and organize meetings, the League achieved repeal of the Corn Laws in 1846, the decisive victory of the free trade movement. This adapted excerpt from League publications captures the movement's self-presentation.",
    text: [
      "The Corn Laws are not merely bad economics, they are a moral abomination. They exist for one purpose: to maintain the rental income of the English landowning class by restricting the import of foreign grain and thereby keeping bread prices artificially high. The landowners are perhaps five percent of the population. The remaining ninety-five percent, the manufacturers, the merchants, the shopkeepers, and above all the working people of England, pay higher prices for their daily bread so that the Squirearchy may draw higher rents.",
      "The manufacturer of Manchester employs ten thousand men. He sells his cloth to the world at a price the world will pay. He asks only one thing from Parliament: let him buy his workers' bread where it is cheapest, so that his wages may be lower and his costs competitive. The Corn Laws deny him this. They require him to pay the artificial bread price, which means he must pay higher wages, which means his cloth costs more, which means he loses orders to foreign competitors. The Corn Laws do not protect England; they weaken it.",
      "But the argument for repeal is not merely economic. It is moral. The man who works twelve hours in a cotton mill earns wages barely sufficient to feed his family at the prices the Corn Laws create. When the harvest fails, as it has in Ireland, with consequences that will shame England for generations, the price of bread rises further, and the factory worker's family goes hungry. The Corn Laws are, in plain language, a tax on bread imposed on the poor for the benefit of the rich.",
      "Free Trade is the principle of the future. When every nation trades in what it produces best, and buys from others what they produce best, the total product of human labor increases, prices fall, and the people of every nation are better fed, better clothed, and better housed. We do not argue for Free Trade as the interest of England alone, though it is that, too. We argue for it as the interest of all mankind."
    ],
    questions: [
      "The Anti-Corn Law League presents free trade as both economically efficient (lower costs, competitive industry) and morally superior (cheaper bread for workers, benefit for all mankind). Evaluate these two arguments separately: how strong is the economic argument? How strong is the moral argument? Does the economic argument support the moral one, or are they actually in tension?",
      "The League argues that 'when every nation trades in what it produces best... the total product of human labor increases.' This is the comparative advantage argument. What does this argument assume about the relationship between nations in trade? What does it leave out, specifically, what happens to a country that specializes in raw materials while another specializes in manufactured goods?",
      "The League pamphlet was written in Manchester in 1843. Consider the source: the Anti-Corn Law League was funded primarily by Manchester manufacturers. Does the source's origin affect how you evaluate its argument? How would a German or American industrialist, trying to protect their own infant industries from British competition, respond to the League's claim that free trade is 'the interest of all mankind'?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Lancashire Cotton Merchant During the American Civil War, 1862",
    desc: "You are a cotton merchant in Preston, Lancashire, in the autumn of 1862. Your mill has been running at a fraction of capacity since the American Civil War began in April 1861. The Union naval blockade has cut off American cotton, your primary raw material. Your workers are on short time or laid off. The 'Cotton Famine' is real: families who worked your looms are going hungry.",
    intro: "You know that the Confederate States of America, the South, is fighting to preserve slavery and its cotton economy. You know that the enslaved people on the plantations that grew your cotton are the same people whose labor fed your mill. You also know that if the Confederacy wins and the blockade ends, your cotton supply will resume, your mill will reopen, and your workers will eat. British textile manufacturers have been lobbying the government to recognize the Confederacy, which would likely cause Britain to break the Union blockade. Some of your friends have already signed the petition.",
    detail: "Meanwhile, your workers, the people laid off from your mill, have held public meetings declaring their support for the Union cause and opposing Confederate recognition, even at the cost of their own employment and food. They understand that recognizing the Confederacy means prolonging slavery; they are willing to go hungry rather than support it. You are deciding whether to sign the petition for Confederate recognition. Your economic interest points one way. Your workers' moral stand, made at a higher personal cost than your own, points another.",
    prompt: "Write the letter to your Member of Parliament explaining your decision, and your reasoning. Address the economic argument directly: you understand what recognizing the Confederacy would mean for your workers and your mill. Address the moral argument directly: you understand what it would mean for enslaved people. Make a choice and defend it. Then reflect: what does it reveal about you, and about industrial capitalism's relationship to slavery, that this choice is a genuine dilemma rather than an obvious answer?"
  },

  beInTheRoom: {
    url: '',
    desc: "Advise the Ottoman government on whether to accept the Public Debt Administration's terms or risk default; negotiate with Richard Cobden about whether India deserves the same free trade treatment as Britain; or testify before Parliament about whether J.P. Morgan's railroad consolidations serve the public interest."
  }

};
