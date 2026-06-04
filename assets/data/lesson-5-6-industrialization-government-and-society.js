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
    title: "Industrialization: Government and Society",
    subtitle: "How industrialization created new social classes and ideological conflicts — and how governments, workers, and women responded to the social transformations of the industrial age",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Use this space to organize your thinking. Your final response must be submitted in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how industrialization created new social classes — the bourgeoisie and proletariat — and generated competing ideological responses including liberalism, conservatism, utopian socialism, and Marxism, and analyze how these ideologies responded differently to the social disruptions of industrialization.",
      kc: "KC-5.6.I.A",
      theme: "Social Structures / Ideology"
    },
    {
      target: "I can explain how governments responded to industrialization through reform legislation, and analyze how women's roles changed — both in the industrial workforce and in the emergence of the women's suffrage movement — as a consequence of industrial transformation.",
      kc: "KC-5.6.I.B",
      theme: "Governance / Social Change"
    }
  ],

  successCriteria: [
    {
      criteria: "I can define bourgeoisie (industrial and commercial middle class, owners of capital) and proletariat (industrial working class, selling labor for wages) and explain how industrialization created these classes. I can identify the key features of liberalism (individual rights, free markets, limited government), conservatism (social stability, tradition, gradual change), utopian socialism (cooperative communities, moral reform), and Marxism (class conflict as historical engine, inevitable proletarian revolution, abolition of private property). I can explain the specific claims of the Communist Manifesto (1848) — the materialist conception of history, the theory of class conflict, and the call for workers to 'unite.' I can compare at least two of these ideologies on the question: what is the cause of industrial poverty, and what is the solution?",
      kc: "KC-5.6.I.A",
      theme: "Social Structures / Ideology"
    },
    {
      criteria: "I can describe at least two specific government responses to industrialization: British reform legislation (Reform Acts of 1832, 1867, 1884 expanding voting rights; Factory Acts limiting child labor and working hours; Poor Law Amendment Act 1834) and Bismarck's social insurance laws in Germany (accident insurance 1871, health insurance 1883, old-age pensions 1889). I can explain women's experience of industrialization — entry into factory labor, exclusion from skilled trades, and the suffrage movement's connection to industrial-era claims about natural rights. I can compare liberal and conservative approaches to government reform.",
      kc: "KC-5.6.I.B",
      theme: "Governance / Social Change"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-5.6.I.A',
      theme: 'Social Structures / Ideology',
      text: "Industrialization created new social classes whose conflicts shaped 19th-century political life. The bourgeoisie — industrial capitalists and commercial middle class — accumulated wealth and political power. The proletariat — industrial working class — labored for wages in factories under difficult conditions. The tension between these classes generated competing ideologies. Liberalism argued for individual rights, free markets, and limited government — the ideology of the rising middle class. Conservatism defended tradition, hierarchy, and social stability against rapid change. Utopian socialists proposed cooperative communities as alternatives to industrial competition. Karl Marx argued in the Communist Manifesto (1848) and Das Kapital (1867) that class conflict was the engine of history, that the bourgeoisie and proletariat were locked in inevitable conflict, and that the proletariat would eventually overthrow capitalism.",
      illustrativeExamples: ['Bourgeoisie and proletariat as new industrial classes', 'Communist Manifesto (Marx and Engels, 1848)', 'Das Kapital (Marx, 1867)', 'Utopian socialists — Robert Owen (New Lanark), Charles Fourier (phalansteries)', 'Classical liberalism — Adam Smith, John Stuart Mill', 'British Chartist movement (1838–1857)', 'First International (International Workingmen\'s Association, 1864)']
    },
    {
      code: 'KC-5.6.I.B',
      theme: 'Governance / Social Change',
      text: "Industrialization generated political pressure for reform. In Britain, the Reform Acts of 1832, 1867, and 1884 progressively extended voting rights to middle-class men and then urban and rural working-class men. Factory Acts (1833, 1844, 1847) regulated child labor and working hours. In Germany, Bismarck introduced Europe's first social insurance system — accident insurance (1871), health insurance (1883), and old-age pensions (1889) — specifically to undercut socialist political appeal by addressing workers' material needs through state programs. Women entered industrial labor in large numbers in textile mills and other factories, but were generally excluded from skilled trades and paid less than male workers. The suffrage movement emerged from the same Enlightenment natural-rights tradition that had driven the American and French revolutions — arguing that the rights of man were also the rights of women.",
      illustrativeExamples: ['British Reform Acts (1832, 1867, 1884)', 'British Factory Acts (1833, 1844, 1847)', 'Bismarck\'s social insurance laws (1871, 1883, 1889)', 'Chartism (1838–1857)', 'Seneca Falls Convention (1848)', 'Mary Wollstonecraft\'s Vindication of the Rights of Woman (1792)', 'British suffragette movement (1890s–1918)']
    }
  ],

  lecture: {
    title: "Class, Ideology, and Reform: Society's Response to Industrialization",
    intro: "Industrialization did not simply change how things were made — it reorganized human society. It created new classes, new forms of work, new patterns of urban life, and new political conflicts. The 19th century was an age of competing visions about what industrial society should look like, who should benefit from industrial wealth, and what governments were obligated to do for citizens whose labor made that wealth possible. Understanding the ideological battles of Topic 5.6 — liberalism vs. conservatism vs. socialism vs. Marxism — is essential for the AP exam because these arguments about class, wealth, and the role of government continued to shape the 20th century.",
    videos: [],
    segments: [
      {
        title: "New Classes, New Conflicts: Bourgeoisie and Proletariat",
        bullets: [
          "**Industrialization created two new classes** that became the central actors of 19th-century political life. The **bourgeoisie** (French for 'town-dwellers') — industrial capitalists, factory owners, merchants, bankers, and professionals — accumulated unprecedented wealth from industrial production. They controlled the means of production (factories, machinery, capital) and increasingly controlled political power, displacing the old aristocracy as the dominant social class. They valued property rights, free markets, individual liberty, and legal equality — the ideology of classical liberalism.",
          "The **proletariat** (from the Latin proletarius, 'those who contribute only children') was the industrial working class: men, women, and children who sold their labor to factory owners for wages. They did not own the means of production; they owned only their labor. The conditions of early industrial labor were documented extensively by parliamentary commissions: 12–16 hour days; six-day weeks; child workers as young as five or six; unsafe machinery; wages just above subsistence; factory towns with no sanitation, no schools, and no parks. Industrial accidents — fingers, hands, and lives lost in machinery — were routine and almost never compensated.",
          "**Class conflict** was the defining feature of 19th-century industrial society. Workers formed trade unions (illegal in Britain until 1824, gradually legalized) and organized strikes to demand higher wages, shorter hours, and safer conditions. Factory owners resisted, calling in police or military, firing organizers, and locking out striking workers. The **Chartist movement** in Britain (1838–1857) was the first mass working-class political movement: it demanded universal male suffrage, secret ballot, and other democratic reforms — arguing that working-class people needed political power to address their economic situation. Parliament rejected the Chartist petitions twice (1839, 1842) and a third time in 1848 — but eventually adopted all six Chartist demands except annual parliaments by the early 20th century.",
          "**Women's industrial labor** was essential to the factory system from the beginning, and largely invisible in the political debates about it. Women and girls — especially in textile mills — made up the majority of factory workers in some industries. They were paid less than men for the same work, excluded from skilled trades controlled by male unions, and denied the political rights that would have allowed them to address these inequalities through democratic processes. The contradiction was widely noticed: liberals argued for natural rights and equality before the law but excluded women; socialists argued for class solidarity but frequently subordinated women's demands to class demands.",
          "**Children in industrial labor**: factory commissioners' reports documented children working from age five in textile mills, from age six in coal mines (hauling coal cars in tunnels too narrow for adults). The Factory Act of 1833 prohibited children under nine from working in textile factories and required two hours of education per day for children aged nine to thirteen. The coal mine report of 1842 — which included testimony from children describing their work — shocked Parliament sufficiently to pass the Mines Act prohibiting underground work for women and for boys under ten. These regulations were opposed by factory owners who argued that child labor was economically necessary and that regulating it violated free-market principles."
        ],
        image: {
          title: "Vasco da Gama — European Power and Global Reach",
          caption: "The same European states that built oceanic empires in the 15th–17th centuries built industrial empires in the 19th. The class conflicts of industrial Britain occurred simultaneously with Britain's global expansion — and the profits of colonial resource extraction funded the capital that built Britain's factories.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg"
        }
      },
      {
        title: "Competing Ideologies: Liberalism, Conservatism, Socialism, and Marxism",
        bullets: [
          "**Classical liberalism** was the dominant ideology of the bourgeoisie. Rooted in Enlightenment thought (Locke, Smith, Bentham, Mill), liberalism argued for individual rights, free markets, and limited government. Its key claims: individuals have natural rights to life, liberty, and property; governments should protect these rights but not interfere in economic life; free markets, through competition, produce the best outcomes for all; poverty is the result of individual failure, not systemic injustice. For the AP exam: liberalism was the ideology of the industrial middle class; it justified industrial capitalism and resisted government regulation. Its major critics — from the left and right — argued that liberalism's promise of equal individual rights coexisted with massive actual inequality, and that free markets left to themselves produced suffering that markets would not, and could not, address.",
          "**Conservatism** in the 19th century was not a defense of industrial capitalism but a critique of it from the right. Conservatives (Edmund Burke, Thomas Carlyle, Benjamin Disraeli) argued that rapid industrial change was destroying the social fabric: communities, traditions, hierarchies, and obligations that held society together. They worried that the industrial bourgeoisie was as dangerous as the revolutionary mob — both were overturning the organic social order. In practice, some conservatives (especially British Tories under Disraeli) supported factory regulation and social reform precisely because they believed the state had obligations to workers that free-market liberalism denied. The 'One Nation' Toryism that produced Britain's first factory legislation was conservative, not liberal.",
          "**Utopian socialism** was the first organized response to industrial capitalism from the left. Utopian socialists — Robert Owen in Britain, Charles Fourier and Henri de Saint-Simon in France — argued that industrial society's problem was its competitive, individualistic foundation. Their solution: voluntary cooperative communities organized on principles of mutual aid, shared ownership, and planned production. Robert Owen built New Lanark in Scotland — a model factory community with decent housing, schools, and regulated working hours — and proved (to his own satisfaction) that treating workers decently was compatible with profit. Owen then tried to build larger cooperative communities; they failed. Utopian socialism was called 'utopian' by Marx precisely because it relied on voluntary moral conversion rather than structural change — it wanted to persuade factory owners to act differently, not to overthrow them.",
          "**Marxism** (scientific socialism): Karl Marx and Friedrich Engels argued in the **Communist Manifesto** (1848) that the utopian socialists were naive — you could not change capitalism by appealing to bourgeois morality, because the bourgeoisie's values were shaped by their class interests. History, Marx argued, was driven by **class conflict** — the tension between those who owned the means of production and those who did not. The current conflict between bourgeoisie and proletariat would, like all previous class conflicts, end in revolution: the proletariat would overthrow the bourgeoisie, abolish private property in the means of production, and build a classless communist society. The famous opening: 'The history of all hitherto existing society is the history of class struggle.' The famous closing: 'The proletarians have nothing to lose but their chains. They have a world to win. Working men of all countries, unite!' Marx's **Das Kapital** (1867) provided the detailed economic analysis: the theory of surplus value (workers produce more value than they are paid; the difference is profit, extracted from workers), the tendency of the rate of profit to fall, and the prediction of capitalism's eventual collapse.",
          "**Comparing the ideologies**: For the AP exam, the most important comparison is: **what is the cause of industrial poverty, and what is the solution?** Liberal answer: poverty is the result of individual failure; free markets will eventually raise all boats; government interference makes it worse. Conservative answer: poverty is the result of rapid, unplanned social change that destroyed community; solution is guided reform from above, maintaining social hierarchy and obligation. Utopian socialist answer: poverty is the result of a competitive, individualistic economic system; solution is voluntary cooperative communities. Marxist answer: poverty is the structural result of capitalist class relations — workers are necessarily exploited because profit requires paying workers less than they produce; solution is abolition of private property and proletarian revolution."
        ],
        image: {
          title: "Florentine Codex — Social Order in Transformation",
          caption: "The Florentine Codex documented a society's transformation under colonial contact. The ideological debates of 19th-century industrialization similarly tried to make sense of a world transformed beyond recognition — new classes, new technologies, new cities — and proposed competing visions of what the transformed world should look like.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg"
        }
      },
      {
        title: "Government Response and Women: Reform, Social Insurance, and the Suffrage Movement",
        bullets: [
          "**British parliamentary reform**: The **Reform Act of 1832** extended voting rights to middle-class men (roughly doubling the electorate) in response to mass protests for parliamentary reform. But it explicitly excluded the working class — a point that the Chartist movement made the center of its demands throughout the 1840s. The **Reform Act of 1867** extended voting rights to urban working-class men — pushed through by Disraeli's Conservative government. The **Reform Act of 1884** extended voting rights to rural working-class men. By 1884, Britain had a near-universal male franchise — but still no votes for women, a contradiction that became increasingly difficult to defend as the women's suffrage movement grew.",
          "**Factory legislation**: The series of British Factory Acts — 1833 (children under 9 banned from textile mills; children 9–13 limited to 9 hours; factory inspectors appointed), 1844 (women limited to 12-hour days; safety guards on machinery), 1847 (10-hour day for women and children in textile factories) — progressively regulated industrial labor. These were opposed by factory owners on liberal free-market grounds and supported by an unlikely alliance of Tory conservatives (Disraeli, Lord Shaftesbury) and working-class activists. The Factory Acts established the principle that the state had the right to regulate private economic contracts — a principle that would expand enormously in the 20th century.",
          "**Bismarck's social insurance**: Otto von Bismarck, the 'Iron Chancellor' of unified Germany, introduced the most comprehensive government response to industrial social problems in the 19th century — not because he sympathized with workers, but because he wanted to eliminate the political appeal of the Social Democratic Party (Germany's Marxist party). His calculation: if the state provided accident insurance (1871), health insurance (1883), and old-age pensions (1889), workers would have no reason to support socialist revolution. The strategy worked partially — German workers gained real material benefits from Bismarck's programs, but continued to vote for the Social Democrats in large numbers. Bismarck's social insurance became the model for 20th-century welfare states across Europe and eventually the United States.",
          "**Women in industrial society**: Industrialization transformed women's economic roles in contradictory ways. It drew women into factory labor on an unprecedented scale — especially in textile mills, where women and girls made up the majority of workers in many factories. At the same time, a middle-class ideal of 'domestic femininity' emerged that defined women as wives and mothers rather than workers, and excluded middle-class women from professional life. Working-class women thus worked in factories while middle-class women were expected not to. Both groups were excluded from political life entirely: women could not vote, hold office, or (in most jurisdictions) own property independently of their husbands. The women's suffrage movement emerged from this contradiction, drawing on the same natural-rights language that had justified the American and French revolutions and arguing that rights of self-government applied to women as well as men.",
          "**The suffrage movement's roots**: The first major articulation of women's rights in modern Europe was Mary Wollstonecraft's **Vindication of the Rights of Woman** (1792) — written in response to the French Revolution and to Rousseau's exclusion of women from civic life. Wollstonecraft argued that if reason was the basis of rights (as Enlightenment thinkers claimed), and if women were rational beings (which almost no one denied), then women had the same claim to rights as men. The **Seneca Falls Convention** (1848, New York) was the first women's rights convention in the United States; its Declaration of Sentiments modeled on the Declaration of Independence: 'We hold these truths to be self-evident: that all men and women are created equal.' Organized women's suffrage movements developed in Britain, the United States, and other countries through the second half of the 19th century, achieving their first major successes in New Zealand (1893) and Australia (1902) — before most European countries."
        ],
        image: {
          title: "Columbus Taking Possession — Authority and Exclusion",
          caption: "The act of 'taking possession' represented in this image excluded indigenous peoples from political agency — the same logic that 19th-century governments used to exclude workers and women from political participation. The suffrage and labor movements challenged both forms of exclusion using the same natural-rights language that had justified the exclusions in the first place.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg"
        }
      }
    ]
  },

  map: {
    title: "Industrial Society and Political Change, c. 1830–1900",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Vasco_da_Gama.jpg",
    caption: "By c. 1830–1900, industrial cities in Britain, Belgium, France, Germany, and the northeastern United States became the centers of class conflict and political reform. The ideological debates about liberalism, conservatism, and socialism were fought out in these industrial cities, through strikes, elections, parliamentary debates, and revolutionary movements.",
    intro: "Examine the geography of industrialization and social response. Notice that the industrial regions — Britain, Belgium, Germany, northeastern US — are also the regions where class conflict, labor movements, and political reform were most intense. Consider: why did these industrial regions generate such intense ideological conflict? What were workers fighting for? How did governments respond differently — Britain through parliamentary reform; Germany through social insurance; France through periodic revolution?",
    prompt: "Using the map and your knowledge, compare the political responses to industrialization in at least two regions. What specific reforms did governments enact — and why did they enact them? Were government reforms driven primarily by moral concern for workers, fear of revolution, or political calculation? What does the pattern of reform suggest about the relationship between industrial class conflict and political change?"
  },

  first10: {
    title: 'First & 10: The Class Question',
    embedUrl: 'first-and-10-topic-5-6-industrialization-government-and-society-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.6 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Competing Visions of Industrial Society",
    intro: "Use the evidence below to analyze the ideological conflicts generated by industrialization. Strong AP comparison arguments identify a specific point of comparison and explain what the comparison reveals about the broader pattern — not just 'they disagreed' but specifically how and why they disagreed.",
    prompt: "Choose one piece of evidence. Explain what it reveals about how industrialization generated ideological conflict. Then connect your evidence to the broader comparison: how did different ideologies diagnose the cause of industrial poverty — and propose different solutions?",
    items: [
      { title: "The Communist Manifesto (Marx and Engels, 1848) — Opening", detail: "Karl Marx and Friedrich Engels opened the Communist Manifesto: 'A specter is haunting Europe — the specter of Communism. All the powers of old Europe have entered into a holy alliance to exorcise this specter... The history of all hitherto existing society is the history of class struggles. Freeman and slave, patrician and plebeian, lord and serf, guild-master and journeyman, in a word, oppressor and oppressed, stood in constant opposition to one another, carried on an uninterrupted, now hidden, now open fight, a fight that each time ended, either in a revolutionary reconstitution of society at large, or in the common ruin of the contending classes... Our epoch, the epoch of the bourgeoisie, possesses, however, this distinctive feature: it has simplified class antagonisms. Society as a whole is more and more splitting up into two great hostile camps, into two great classes directly facing each other — bourgeoisie and proletariat.' Analyze: what theory of history does this passage present? How does Marx's claim that 'the history of all hitherto existing society is the history of class struggles' differ from liberal or conservative explanations of social conflict? What does 'simplified class antagonisms' mean in the context of industrial society?" },
      { title: "John Stuart Mill, On Liberty (1859) — The Liberal Case for Limited Government", detail: "John Stuart Mill argued: 'The only freedom which deserves the name is that of pursuing our own good in our own way, so long as we do not attempt to deprive others of theirs, or impede their efforts to obtain it... The only purpose for which power can be rightfully exercised over any member of a civilised community, against his will, is to prevent harm to others. His own good, either physical or moral, is not a sufficient warrant... Over himself, over his own body and mind, the individual is sovereign.' Analyze: how does Mill's argument define the proper limits of government power? How would Mill's principle of individual sovereignty apply to questions about factory regulation and child labor? What tensions exist between Mill's liberal individualism and his earlier argument (in The Subjection of Women) for women's equality?" },
      { title: "Bismarck's Speech to the Reichstag on Social Insurance (1881)", detail: "Otto von Bismarck argued to the German parliament: 'Give the working man the right to work as long as he is healthy, assure him care when he is sick, assure him maintenance when he is old... If you do that... then I believe that the gentlemen of the Wyden program [Social Democrats] will sound their bird-calls in vain, and that the thronging to their banner will cease as soon as working men see that the Government and legislative bodies are earnestly concerned for their welfare.' Analyze: how does Bismarck's argument reveal the relationship between social reform and political calculation? Is Bismarck's approach liberal, conservative, or something else? What does this source reveal about why governments reform — moral concern, fear of revolution, or political strategy?" }
    ]
  },

  primarySource: {
    title: "Primary Source: The Communist Manifesto (adapted) — Bourgeoisie, Proletariat, and Class Conflict (1848)",
    intro: "In 1848 — the 'Year of Revolutions,' when uprisings broke out across Europe — Karl Marx and Friedrich Engels published the Communist Manifesto as the founding document of the Communist League. The Manifesto presented a sweeping theory of history driven by class conflict, analyzed the relationship between the bourgeoisie and proletariat in industrial capitalism, and issued a call for workers to organize. This adapted excerpt focuses on the analysis of industrial class relations. The Manifesto is the most influential political document of the 19th century — its diagnosis of industrial society's problems shaped labor movements, socialist parties, and eventually communist states across the 20th century.",
    text: [
      "The bourgeoisie, historically, has played a most revolutionary part. It has established the world-market, for which the discovery of America paved the way. The bourgeoisie has subjected the country to the rule of the towns. It has created enormous cities, has greatly increased the urban population as compared with the rural, and has thus rescued a considerable part of the population from the idiocy of rural life.",
      "The bourgeoisie has subjected Nature's forces to man, has set up machinery, has applied chemistry to industry and agriculture, has turned rivers into steam-powered factories, has cleared whole continents for cultivation, has canalised rivers, has conjured whole populations out of the ground. What earlier century had even a presentiment that such productive forces slumbered in the lap of social labour?",
      "But not only has the bourgeoisie forged the weapons that bring death to itself; it has also called into existence the men who are to wield those weapons — the modern working class, the proletarians. In proportion as the bourgeoisie, i.e., capital, is developed, in the same proportion is the proletariat, the modern working class, developed — a class of labourers, who live only so long as they find work, and who find work only so long as their labour increases capital. These labourers, who must sell themselves piecemeal, are a commodity, like every other article of commerce, and are consequently exposed to all the vicissitudes of competition, to all the fluctuations of the market.",
      "Of all the classes that stand face to face with the bourgeoisie today, the proletariat alone is a really revolutionary class. The proletarians have nothing to lose but their chains. They have a world to win. Working men of all countries, unite!"
    ],
    questions: [
      "Marx argues that the bourgeoisie 'has played a most revolutionary part' — that it transformed the world through industrial capitalism. How does this argument compare to conservative criticisms of industrial capitalism? In what sense does Marx agree with conservatives that industrialization was radically disruptive? In what sense does he fundamentally disagree about whether that disruption was a problem?",
      "Marx describes the proletariat as a class of 'labourers who must sell themselves piecemeal' and who are 'a commodity, like every other article of commerce.' What does this metaphor — treating labor as a commodity — reveal about the Marxist analysis of industrial capitalism? How does this differ from the liberal view that free contracts between employer and employee are mutually beneficial?",
      "Marx ends with 'The proletarians have nothing to lose but their chains. Working men of all countries, unite!' Compare this conclusion to Bismarck's approach to the same industrial problem. Both Marx and Bismarck agreed that industrial capitalism created serious social problems. How did their proposed solutions differ — and what does this difference reveal about competing theories of political change?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Woman at a Chartist Meeting, Manchester, 1842",
    desc: "You are a 24-year-old woman working in a cotton mill in Manchester in 1842. You work twelve hours a day, six days a week, operating a power loom. You earn eight shillings a week — less than a male weaver doing the same work earns. You have attended Chartist meetings for the past year.",
    intro: "Tonight, the second Chartist petition — three million signatures demanding the vote for all men — has been rejected by Parliament. The hall is packed with men and some women, all angry. Speaker after speaker denounces Parliament, the factory owners, the aristocracy. Several speakers are urging a general strike. One speaker — a prominent Chartist — has just said something that stops you cold: 'When working men have the vote, we will have the power to change our conditions.' Not women. Working men.",
    detail: "You have been here before. At the previous meeting, you asked whether the Chartist petition would include women's suffrage. The answer was no — it would only demand votes for men, because demanding votes for women would make the petition too radical and reduce support. The logic was: first get votes for men, then help women. You understood the argument. You also notice that you work the same hours as the men in this hall for lower pay, and are told to wait. You have been told to wait your whole life. You are deciding whether to stand up and speak — or to leave. Your friend beside you is urging you to stay quiet: 'Don't split the movement. This isn't the time.' You are not sure she is right.",
    prompt: "Write either the speech you give to this meeting, or the letter you write to your friend explaining why you left without speaking. Either way, be honest about the full weight of your situation: the factory work, the wages, the politics, the contradiction between the Chartists' principles (all people deserve representation) and their practice (only men deserve votes). If you speak, argue your case — why should women's suffrage be part of the Chartist demands now, not later? If you write the letter, explain what you actually believe — was your friend right to tell you to stay quiet? What do you owe the movement? What does the movement owe you?"
  },

  beInTheRoom: {
    url: '',
    desc: "Testify before a Parliamentary committee investigating factory conditions, debate Karl Marx about whether reform or revolution is the path to workers' justice, or advise Bismarck on which social insurance program to introduce first — and which working-class grievances are most dangerous to ignore."
  }

};
