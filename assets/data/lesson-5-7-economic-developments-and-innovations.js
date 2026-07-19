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
      target: "I can explain how industrial capitalism developed new financial institutions, joint-stock companies with limited liability, investment banking, and stock exchanges, and analyze how these institutions made large-scale industrial and infrastructure investment economically possible.",
      kc: "KC-5.1.III.B",
      theme: "Economic Systems"
    },
    {
      target: "I can explain how free trade ideology and the gold standard created an integrated global economy in the 19th century, and analyze how economic imperialism, debt, investment, and trade relationships, extended industrial power over regions that were not directly colonized.",
      kc: "KC-5.1.III.A",
      theme: "Economic Systems"
    }
  ],

  successCriteria: [
    {
      criteria: "I can define joint-stock company, limited liability, stock exchange, and investment banking, and explain how each institution changed the economics of industrial investment. I can explain the specific mechanism of limited liability: before it, investors faced unlimited personal liability for company debts, which limited investment to those who could afford total loss; after it, investors risked only what they invested, enabling mass participation in industrial enterprise. I can identify the UK Companies Act of 1862 as the key legal turning point. I can give at least one specific example of an investment bank (House of Morgan, Deutsche Bank, Rothschilds) and explain its role in financing industrial enterprise.",
      kc: "KC-5.1.III.B",
      theme: "Economic Systems"
    },
    {
      criteria: "I can explain the argument for free trade (comparative advantage, David Ricardo) and its political context: Britain, as the most advanced industrial economy, benefited from free trade because it could undersell domestic producers in every market; countries that were still industrializing used protective tariffs to shield infant industries. I can explain the Corn Laws (1846 repeal) as the defining moment of British free trade policy. I can explain the gold standard as a mechanism for global financial integration and its effect on government economic policy. I can give at least two specific examples of economic imperialism, Latin American debt dependency, Ottoman debt crisis and the Ottoman Public Debt Administration, China's treaty port system, and explain how financial instruments achieved colonial-like control without formal annexation.",
      kc: "KC-5.1.III.A",
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
    title: "The Architecture of Industrial Capitalism: Finance, Free Trade, and Economic Power",
    intro: "Industrialization required more than technology, it required new ways of organizing and mobilizing capital. The financial innovations of the 19th century, limited liability corporations, stock exchanges, investment banking, the gold standard, were as important as the railroad and the Bessemer process for understanding how industrial capitalism worked. And the ideology of free trade, which Britain promoted globally as the 19th century's dominant industrial power, was simultaneously an economic argument and a tool of economic imperialism. Understanding Topic 5.7 means understanding how the financial architecture of industrial capitalism was built, and how it served some interests more than others.",
    videos: [],
    segments: [
      {
        title: "The Architecture of Industrial Capital: Corporations, Banks, and Markets",
        bullets: [
          "**The fundamental problem of industrial capitalism**: industrial enterprises, factories, railroads, steamship lines, required more capital than any individual could supply. A single textile factory in Manchester in the 1840s might require £50,000 to build and equip; a railroad line from Liverpool to Manchester required millions. Individual investors could not provide this capital alone, and even partnerships were limited by the wealth of their members. Industrial capitalism required institutions that could pool capital from thousands of investors and direct it toward productive enterprise.",
          "**The joint-stock company** solved the pooling problem: investors bought 'shares' of a company, entitling them to a proportional share of profits (dividends). The company could thus raise capital from hundreds or thousands of investors rather than relying on a single owner or small partnership. The **Dutch East India Company (VOC, 1602)** and British East India Company had pioneered joint-stock financing in the 17th century. By the early 19th century, joint-stock companies were common in banking and insurance, but still limited by the problem of unlimited liability.",
          "**Limited liability** was the critical legal innovation. Before limited liability, an investor in a joint-stock company who was personally liable for company debts. If the company went bankrupt owing £1 million, creditors could pursue the personal assets of every shareholder, their house, their savings, everything, until the debt was paid. This was catastrophic in practice and severely limited investment: only those who could afford to lose everything they owned would invest in risky industrial ventures. The **UK Companies Act of 1862** established general limited liability: investors could only lose what they had invested. Their personal assets were protected. This single legal change transformed the economics of industrial investment: millions of middle-class investors with modest savings could now safely participate in large enterprises because their maximum loss was defined and bounded.",
          "**The stock exchange** solved the liquidity problem. Even with limited liability, investors were reluctant to commit capital to enterprises they could not exit. A factory, once built, could not easily be sold; a railroad bond locked capital up for decades. The stock exchange, a regulated market for buying and selling shares and bonds, made industrial investment liquid. An investor could buy shares in a Lancashire cotton mill on Monday and sell them on Friday if needed. The **London Stock Exchange** (formalized 1801) and **New York Stock Exchange** (organized 1817) became the world's dominant capital markets. By 1850, thousands of railroad, mining, and manufacturing companies were listed; by 1900, billions of dollars of securities changed hands daily.",
          "**Investment banks** were the connective tissue of industrial capitalism: they underwrote new securities issues (guaranteeing a price to corporations while selling shares to investors), organized mergers and acquisitions, and provided long-term financing for infrastructure. The **House of Morgan** (J.P. Morgan & Co.) financed American railroad consolidation in the 1870s–1890s, eventually controlling one-sixth of American railroad mileage. **Deutsche Bank** (founded 1870) specifically to finance German foreign trade and industrial development, the model of German-style bank-industry partnership that produced Germany's rapid industrialization. The **Rothschild family** network, banking houses in London, Paris, Frankfurt, Vienna, and Naples, financed European governments and railroads across the continent. By 1900, a handful of investment banks exerted more influence over industrial economies than many governments."
        ],
        image: {
          title: "Voc — Joint-Stock Capitalism's Origins",
          caption: "The Dutch East India Company (VOC) pioneered joint-stock financing in 1602, issuing the first publicly traded shares on the Amsterdam stock exchange. The 19th century's financial innovations, limited liability, regulated stock exchanges, investment banking, built on this 17th-century foundation to create capital markets at industrial scale.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg"
        }
      },
      {
        title: "Free Trade and the Gold Standard: Global Economic Integration",
        bullets: [
          "**The free trade argument**: The economist David Ricardo (1817) formalized the argument for free trade through the principle of **comparative advantage**: even if one country could produce everything more efficiently than another, both countries benefit from specializing in what they produce most efficiently (relative to other goods) and trading. Britain could produce both cloth and wine more efficiently than Portugal, but if Britain focused on cloth (where its comparative advantage was greatest) and Portugal focused on wine (where its comparative disadvantage was least), total production increases and both benefit from trade. The policy implication: remove tariffs and barriers; let each country specialize; global wealth increases.",
          "**The political context**: Free trade served British interests specifically. By the 1840s, Britain was the world's most advanced industrial economy, producing manufactured goods more cheaply than any competitor. **Free trade meant British goods could penetrate every market** without tariff barriers, while British consumers could buy cheap foreign food. Countries that were still industrializing, Germany, the United States, had strong reason to use protective tariffs to shield their infant industries from British competition (and did). The free trade argument was not wrong, but its benefits were distributed unequally: Britain gained dominance of global manufactured goods markets; agricultural and resource-exporting countries got cheaper British manufactured goods but could not easily develop their own industrial capacity.",
          "**The Corn Laws and their repeal**: The **Corn Laws** were British tariffs on imported grain, protecting British landowners (who dominated Parliament) from cheap foreign competition. Manufacturers and middle-class reformers, led by Richard Cobden's **Anti-Corn Law League**, argued that the Corn Laws raised bread prices for workers (forcing higher wages) and enriched landowners at everyone else's expense. After a decade of political campaigning and the Irish Famine (which made the case for cheap food imports dramatically), Prime Minister Robert Peel pushed through **repeal of the Corn Laws in 1846**. The repeal opened Britain to cheap American, Canadian, and eventually Argentine and Russian grain, transforming British agriculture and cementing Britain's commitment to free trade for the rest of the 19th century.",
          "**The gold standard**: The gold standard, linking a currency to a fixed weight of gold, solved the exchange rate problem of international trade. When multiple currencies existed with floating exchange rates, international trade involved currency risk: prices agreed today might be paid in a different effective value tomorrow. The gold standard made exchange rates fixed and predictable. Britain adopted the gold standard in 1821; the United States adopted it effectively after the Civil War (officially 1900); most major European economies joined in the 1870s–1880s. By 1890, the international gold standard had created the first genuinely integrated global financial system. Its costs: governments could not print money to stimulate the economy without gold reserves to back it, which meant economic downturns produced deflation and unemployment rather than inflation. The burden fell on workers (through wage cuts) rather than creditors (through inflation). The gold standard was a system that systematically protected financial assets over labor."
        ],
        image: {
          title: "Waldseemuller Map — The Pre-Industrial Trade World",
          caption: "The 16th-century world of mercantilism and protected trade gave way in the 19th century to Britain's free trade vision: an integrated global economy where comparative advantage determined specialization. The Waldseemuller map represents the world that mercantilist trade policy was built to navigate; the repeal of the Corn Laws in 1846 represented the decisive rejection of that mercantilist logic.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg"
        }
      },
      {
        title: "Economic Imperialism: Power Without Formal Colonialism",
        bullets: [
          "**Economic imperialism** is the extension of economic control over a country through debt, investment, and trade relationships rather than formal political annexation. It was often more efficient than direct colonialism: it extracted profits without the costs of colonial administration, military occupation, and the political backlash that formal colonialism generated. But it could achieve the same coercive effects: forcing debtor countries to restructure their economies in creditors' interests, removing their ability to use protective tariffs, and prioritizing debt repayment over domestic development.",
          "**Latin America**: After independence from Spain and Portugal (1810s–1820s), Latin American governments needed capital to build infrastructure and pay their armies. They borrowed heavily from British banks, often at unfavorable terms, with customs revenue pledged as collateral. When governments defaulted (as many did in the 1820s and 1830s), British creditors demanded control over customs revenue to ensure repayment. By 1900, British investment in Latin America totaled approximately £1 billion: British banks financed Argentina's railroad system; British companies owned Chilean copper and nitrate mines; British investors held Brazilian government bonds. Latin American economies were formally independent but functionally integrated into the British financial system as raw material exporters and capital importers. This 'informal empire' was enforced not by the British army but by the threat of financial exclusion, default meant inability to borrow, which meant inability to build infrastructure or fund government.",
          "**The Ottoman Empire**: The Ottoman government, trying to modernize its military and infrastructure to resist European pressure, borrowed heavily from European banks through the 1850s–1870s. Interest payments consumed growing shares of government revenue. In 1875, the Ottoman government defaulted. After negotiation, the **Ottoman Public Debt Administration** (1881) was established: a body controlled by European creditors (primarily British, French, German, and Dutch bondholders) that directly administered the collection of six Ottoman revenue sources (customs duties, salt and tobacco taxes, stamp duties, fishing rights) to guarantee debt repayment. The Ottoman government ceded control of major revenue streams to foreign creditors, a form of financial sovereignty loss that stopped short of formal colonialism but achieved similar effects.",
          "**China's treaty port system**: After Britain defeated China in the First Opium War (1839–1842), the **Treaty of Nanking** (1842) forced China to open five treaty ports to British trade, cede Hong Kong, pay an indemnity, and grant British merchants **extraterritoriality** (exemption from Chinese law). Subsequent treaties after the Second Opium War (1856–1860) extended these provisions and opened more ports. Foreign merchants in treaty ports operated under their home country's law rather than Chinese law, a profound violation of Chinese sovereignty. British, French, German, and American businesses established factories, warehouses, and banks in treaty ports; foreign gunboats patrolled Chinese rivers to protect foreign property. China was not formally colonized, but its ability to regulate foreign economic activity within its own territory was severely constrained.",
          "**The key argument**: Economic imperialism reveals that the line between 'free trade' and 'coercion' is less clear than free trade ideology suggests. When Britain demanded that China open its ports under threat of naval bombardment, or when Latin American governments accepted British creditor control over their customs revenue as the price of continued access to capital markets, these were not voluntary agreements between equals. Economic relationships can be as coercive as military relationships, and in many cases, the economic relationship was enforced by the implicit or explicit threat of military force."
        ],
        image: {
          title: "Casta Painting — Hierarchy and Exchange",
          caption: "Colonial-era casta paintings documented racial and social hierarchy in Spanish America. The economic imperialism of the 19th century reorganized these hierarchies without necessarily transforming them: formally independent Latin American states remained structured as raw material exporters supplying industrial Europe, with British and European financial interests controlling the infrastructure that made that export economy function.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg"
        }
      }
    ]
  },

  map: {
    title: "The Global Financial System, c. 1850–1900",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg",
    caption: "By c. 1850–1900, British financial institutions, banks, insurance companies, stock exchanges, had made London the center of the global financial system. British capital flowed outward to finance railroads in Argentina, mines in Chile, government bonds in the Ottoman Empire, and plantation agriculture in Southeast Asia. The returns flowed back to London.",
    intro: "Examine the pattern of British overseas investment by 1900. Note that British capital flowed primarily to: (1) formal British colonies (India, Australia, Canada, South Africa); (2) formally independent but economically dependent Latin American countries; (3) the Ottoman Empire and China, where unequal treaties had opened markets to British goods and investment. Notice which regions are NOT major recipients of British investment, continental Europe and the United States were increasingly competitors, not dependencies.",
    prompt: "Using the map and your knowledge, explain how British financial investment created economic dependencies in Latin America and the Ottoman Empire without formal colonialism. What specific financial mechanisms produced these dependencies? How does the geographic pattern of British investment by 1900 reveal the structure of the global economy that industrial capitalism created?"
  },

  first10: {
    title: 'First & 10: The Free Market',
    embedUrl: 'first-and-10-topic-5-7-economic-developments-and-innovations-capture.html',
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
