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
    title: "Industrialization: Government’s Role",
    subtitle: "How industrialization created new social classes and ideological conflicts — and how governments, workers, and women responded to the social transformations of the industrial age",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain why some states adopted government-sponsored industrialization and how rulers used state policy, investment, monopolies, infrastructure, and imported expertise to build industrial capacity.",
      kc: "KC-5.1.V.C",
      theme: "Governance"
    },
    {
      target: "I can compare Muhammad Ali's industrial strategy in Egypt with Meiji Japan's reforms and explain how different state strategies affected industrial growth, sovereignty, and regional power.",
      kc: "KC-5.1.V.C; KC-5.2.II.A",
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain why late-industrializing states could not simply copy Britain's private-market path and use Muhammad Ali's cotton textile industry, state factories, irrigation, military reform, or import substitution as evidence of state-sponsored industrialization.",
      kc: "KC-5.1.V.C",
      theme: "Governance"
    },
    {
      criteria: "I can explain at least three Meiji reforms that supported industrialization—such as infrastructure, education, model factories, shipyards, imported technology, or support for private firms—and connect those reforms to Japan's emergence as a regional industrial and military power. I can also compare one important limit or difference between the Egyptian and Japanese cases.",
      kc: "KC-5.2.II.A",
      theme: "Governance"
    }
  ],

  collegeBoardKeyConcepts: [
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
    title: "State-Sponsored Industrialization: Egypt and Meiji Japan",
    intro: "Topic 5.6 is about government economic strategy, not social class or Marxism. Britain industrialized first through a distinctive mix of private capital, coal, markets, and institutions. States industrializing later faced a different problem: how do you catch up when factories, railroads, weapons, and global trade already favor stronger industrial powers? Some governments answered by intervening directly.",
    videos: [],
    segments: [
      {
        title: "Why Governments Intervened",
        bullets: [
          "Late-industrializing states faced a **catch-up problem**. Industrial powers already possessed factories, steam transport, military technology, capital, and global commercial networks. Waiting for private industry to develop slowly could leave a state militarily vulnerable and economically dependent.",
          "Government intervention could include **state factories, tariffs or monopolies, infrastructure, education, imported machinery and experts, military procurement, and direct investment**. The goal was not industrialization for its own sake; rulers wanted revenue, stronger armies, strategic independence, and greater international power.",
          "The AP causal chain is: **external pressure or strategic weakness -> state economic intervention -> industrial capacity -> changed national or regional power**."
        ],
        image: {
          title: "State-led industrialization in the 19th century",
          caption: "Governments in several regions used policy and public investment to accelerate industrial development.",
          url: "../assets/images/instructional-maps/topic-5-6.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-5-6.svg"
        }
      },
      {
        title: "Muhammad Ali's Egypt: Build Industry to Build the State",
        bullets: [
          "**Muhammad Ali** sought to strengthen Egypt within the Ottoman world by building a more self-sufficient military and economy. His government expanded irrigation and cotton cultivation, created state monopolies, imported machinery and expertise, and established textile and military factories.",
          "The cotton textile program shows the logic of **state-sponsored industrialization**: the government tried to control raw cotton, process more of it domestically, supply the army, and reduce dependence on imported manufactured goods.",
          "The Egyptian project faced major limits. State coercion imposed heavy burdens on peasants, capital and technical expertise remained constrained, and European diplomatic and commercial pressure restricted Muhammad Ali's ability to sustain a protected state-industrial system."
        ],
        image: {
          title: "Muhammad Ali of Egypt",
          caption: "Muhammad Ali used state authority to reorganize agriculture, industry, and the military as parts of one modernization strategy.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/ModernEgypt%2C_Muhammad_Ali_by_Auguste_Couder%2C_BAP_17996.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:ModernEgypt%2C_Muhammad_Ali_by_Auguste_Couder%2C_BAP_17996.jpg"
        }
      },
      {
        title: "Meiji Japan: Reform, Build, Then Scale",
        bullets: [
          "After the unequal treaties and the collapse of the Tokugawa shogunate, Meiji leaders treated industrialization as a matter of **national survival**. The government centralized taxation, expanded mass education, sent the Iwakura Mission abroad, hired foreign experts, built railroads and telegraph lines, and established model factories, shipyards, and arsenals.",
          "Many state-built enterprises were later sold to private firms, helping create powerful business groups. This sequence—**state investment -> demonstration and infrastructure -> private expansion**—shows that government and private enterprise could work in stages rather than as opposites.",
          "By the late 19th century, industrial and military reform helped Japan become a **regional power**. Success in the Sino-Japanese War demonstrated that state-led reform had changed Japan's position relative to neighboring states and to Western imperial powers."
        ],
        image: {
          title: "The Iwakura Mission",
          caption: "Meiji leaders studied foreign institutions and technologies as part of a deliberate state modernization strategy.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Iwakura_mission.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Iwakura_mission.jpg"
        }
      },
      {
        title: "Compare the Strategies: Why Japan Went Further",
        bullets: [
          "Egypt and Japan shared a core strategy: **use the state to accelerate industrialization before private capital and domestic firms were strong enough to do it alone**. Both linked industrial policy to military power and sovereignty.",
          "Their outcomes diverged. Japan built a broader institutional package—tax reform, education, infrastructure, military conscription, technology transfer, and eventual private industrial expansion—while Egypt faced stronger external constraints and a more coercive, narrower state monopoly system.",
          "A strong comparison does not say 'Japan modernized, Egypt failed.' It asks which **state capacities, external pressures, fiscal systems, and policy choices** made one strategy more durable than the other."
        ],
        image: {
          title: "Meiji industrial development",
          caption: "Industrialization became part of a broader state-building program that connected factories, infrastructure, education, and military power.",
          url: "../assets/images/instructional-maps/topic-5-6.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-5-6.svg"
        }
      }
    ]
  },

  map: {
    title: "Industrial Society and Political Change, c. 1830–1900",
    url: "../assets/images/instructional-maps/topic-5-6.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-5-6.svg",
    caption: "By c. 1830–1900, industrial cities in Britain, Belgium, France, Germany, and the northeastern United States became the centers of class conflict and political reform. The ideological debates about liberalism, conservatism, and socialism were fought out in these industrial cities, through strikes, elections, parliamentary debates, and revolutionary movements.",
    intro: "Examine the geography of industrialization and social response. Notice that the industrial regions, Britain, Belgium, Germany, northeastern US, are also the regions where class conflict, labor movements, and political reform were most intense. Consider: why did these industrial regions generate such intense ideological conflict? What were workers fighting for? How did governments respond differently, Britain through parliamentary reform; Germany through social insurance; France through periodic revolution?",
    prompt: "Using the map and your knowledge, compare the political responses to industrialization in at least two regions. What specific reforms did governments enact, and why did they enact them? Were government reforms driven primarily by moral concern for workers, fear of revolution, or political calculation? What does the pattern of reform suggest about the relationship between industrial class conflict and political change?"
  },

  deepReading: {
    title: "One Question, Five Answers",
    desc: "A textbook-depth companion that defines the two classes structurally and then runs one question, what causes industrial poverty and what is the remedy, across liberalism, conservatism, utopian socialism and Marxism, before turning to what governments actually legislated, from the Factory Acts and the workhouse to Bismarck&rsquo;s pensions. Optional, and useful when a checkpoint asks you to compare ideologies.",
    url: "deep-reading-topic-5-6-industrialization-government-and-society.html"
  },

  first10: {
    title: 'First & 10: The Class Question',
    embedUrl: 'first-and-10-topic-5-6-industrialization-government-and-society-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.6 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Competing Visions of Industrial Society",
    intro: "Use the evidence below to analyze the ideological conflicts generated by industrialization. Strong AP comparison arguments identify a specific point of comparison and explain what the comparison reveals about the broader pattern, not just 'they disagreed' but specifically how and why they disagreed.",
    prompt: "Choose one piece of evidence. Explain what it reveals about how industrialization generated ideological conflict. Then connect your evidence to the broader comparison: how did different ideologies diagnose the cause of industrial poverty, and propose different solutions?",
    items: [
      { title: "The Communist Manifesto (Marx and Engels, 1848) — Opening", detail: "Karl Marx and Friedrich Engels opened the Communist Manifesto: 'A specter is haunting Europe, the specter of Communism. All the powers of old Europe have entered into a holy alliance to exorcise this specter... The history of all hitherto existing society is the history of class struggles. Freeman and slave, patrician and plebeian, lord and serf, guild-master and journeyman, in a word, oppressor and oppressed, stood in constant opposition to one another, carried on an uninterrupted, now hidden, now open fight, a fight that each time ended, either in a revolutionary reconstitution of society at large, or in the common ruin of the contending classes... Our epoch, the epoch of the bourgeoisie, possesses, however, this distinctive feature: it has simplified class antagonisms. Society as a whole is more and more splitting up into two great hostile camps, into two great classes directly facing each other, bourgeoisie and proletariat.' Analyze: what theory of history does this passage present? How does Marx's claim that 'the history of all hitherto existing society is the history of class struggles' differ from liberal or conservative explanations of social conflict? What does 'simplified class antagonisms' mean in the context of industrial society?" },
      { title: "John Stuart Mill, On Liberty (1859) — The Liberal Case for Limited Government", detail: "John Stuart Mill argued: 'The only freedom which deserves the name is that of pursuing our own good in our own way, so long as we do not attempt to deprive others of theirs, or impede their efforts to obtain it... The only purpose for which power can be rightfully exercised over any member of a civilised community, against his will, is to prevent harm to others. His own good, either physical or moral, is not a sufficient warrant... Over himself, over his own body and mind, the individual is sovereign.' Analyze: how does Mill's argument define the proper limits of government power? How would Mill's principle of individual sovereignty apply to questions about factory regulation and child labor? What tensions exist between Mill's liberal individualism and his earlier argument (in The Subjection of Women) for women's equality?" },
      { title: "Bismarck's Speech to the Reichstag on Social Insurance (1881)", detail: "Otto von Bismarck argued to the German parliament: 'Give the working man the right to work as long as he is healthy, assure him care when he is sick, assure him maintenance when he is old... If you do that... then I believe that the gentlemen of the Wyden program [Social Democrats] will sound their bird-calls in vain, and that the thronging to their banner will cease as soon as working men see that the Government and legislative bodies are earnestly concerned for their welfare.' Analyze: how does Bismarck's argument reveal the relationship between social reform and political calculation? Is Bismarck's approach liberal, conservative, or something else? What does this source reveal about why governments reform, moral concern, fear of revolution, or political strategy?" }
    ]
  },

  primarySource: {
    title: "Primary Source: The Communist Manifesto (adapted) — Bourgeoisie, Proletariat, and Class Conflict (1848)",
    intro: "In 1848, the 'Year of Revolutions,' when uprisings broke out across Europe, Karl Marx and Friedrich Engels published the Communist Manifesto as the founding document of the Communist League. The Manifesto presented a sweeping theory of history driven by class conflict, analyzed the relationship between the bourgeoisie and proletariat in industrial capitalism, and issued a call for workers to organize. This adapted excerpt focuses on the analysis of industrial class relations. The Manifesto is the most influential political document of the 19th century, its diagnosis of industrial society's problems shaped labor movements, socialist parties, and eventually communist states across the 20th century.",
    text: [
      "The bourgeoisie, historically, has played a most revolutionary part. It has established the world-market, for which the discovery of America paved the way. The bourgeoisie has subjected the country to the rule of the towns. It has created enormous cities, has greatly increased the urban population as compared with the rural, and has thus rescued a considerable part of the population from the idiocy of rural life.",
      "The bourgeoisie has subjected Nature's forces to man, has set up machinery, has applied chemistry to industry and agriculture, has turned rivers into steam-powered factories, has cleared whole continents for cultivation, has canalised rivers, has conjured whole populations out of the ground. What earlier century had even a presentiment that such productive forces slumbered in the lap of social labour?",
      "But not only has the bourgeoisie forged the weapons that bring death to itself; it has also called into existence the men who are to wield those weapons, the modern working class, the proletarians. In proportion as the bourgeoisie, i.e., capital, is developed, in the same proportion is the proletariat, the modern working class, developed, a class of labourers, who live only so long as they find work, and who find work only so long as their labour increases capital. These labourers, who must sell themselves piecemeal, are a commodity, like every other article of commerce, and are consequently exposed to all the vicissitudes of competition, to all the fluctuations of the market.",
      "Of all the classes that stand face to face with the bourgeoisie today, the proletariat alone is a really revolutionary class. The proletarians have nothing to lose but their chains. They have a world to win. Working men of all countries, unite!"
    ],
    questions: [
      "Marx argues that the bourgeoisie 'has played a most revolutionary part', that it transformed the world through industrial capitalism. How does this argument compare to conservative criticisms of industrial capitalism? In what sense does Marx agree with conservatives that industrialization was radically disruptive? In what sense does he fundamentally disagree about whether that disruption was a problem?",
      "Marx describes the proletariat as a class of 'labourers who must sell themselves piecemeal' and who are 'a commodity, like every other article of commerce.' What does this metaphor, treating labor as a commodity, reveal about the Marxist analysis of industrial capitalism? How does this differ from the liberal view that free contracts between employer and employee are mutually beneficial?",
      "Marx ends with 'The proletarians have nothing to lose but their chains. Working men of all countries, unite!' Compare this conclusion to Bismarck's approach to the same industrial problem. Both Marx and Bismarck agreed that industrial capitalism created serious social problems. How did their proposed solutions differ, and what does this difference reveal about competing theories of political change?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Woman at a Chartist Meeting, Manchester, 1842",
    desc: "You are a 24-year-old woman working in a cotton mill in Manchester in 1842. You work twelve hours a day, six days a week, operating a power loom. You earn eight shillings a week, less than a male weaver doing the same work earns. You have attended Chartist meetings for the past year.",
    intro: "Tonight, the second Chartist petition, three million signatures demanding the vote for all men, has been rejected by Parliament. The hall is packed with men and some women, all angry. Speaker after speaker denounces Parliament, the factory owners, the aristocracy. Several speakers are urging a general strike. One speaker, a prominent Chartist, has just said something that stops you cold: 'When working men have the vote, we will have the power to change our conditions.' Not women. Working men.",
    detail: "You have been here before. At the previous meeting, you asked whether the Chartist petition would include women's suffrage. The answer was no, it would only demand votes for men, because demanding votes for women would make the petition too radical and reduce support. The logic was: first get votes for men, then help women. You understood the argument. You also notice that you work the same hours as the men in this hall for lower pay, and are told to wait. You have been told to wait your whole life. You are deciding whether to stand up and speak, or to leave. Your friend beside you is urging you to stay quiet: 'Don't split the movement. This isn't the time.' You are not sure she is right.",
    prompt: "Write either the speech you give to this meeting, or the letter you write to your friend explaining why you left without speaking. Either way, be honest about the full weight of your situation: the factory work, the wages, the politics, the contradiction between the Chartists' principles (all people deserve representation) and their practice (only men deserve votes). If you speak, argue your case, why should women's suffrage be part of the Chartist demands now, not later? If you write the letter, explain what you actually believe, was your friend right to tell you to stay quiet? What do you owe the movement? What does the movement owe you?"
  },

  beInTheRoom: {
    url: '',
    desc: "Testify before a Parliamentary committee investigating factory conditions, debate Karl Marx about whether reform or revolution is the path to workers' justice, or advise Bismarck on which social insurance program to introduce first, and which working-class grievances are most dangerous to ignore."
  }

};
