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
    topic: "Topic 5.8",
    title: "Reactions to the Industrial Economy",
    subtitle: "How workers built collective power through trade unions and strikes, abolitionists challenged slavery's structural connection to industrial capitalism, and reformers transformed education, public health, and social life in response to industrialization's dislocations",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how industrial workers organized through unions, strikes, and political movements to improve wages, hours, working conditions, and political influence.",
      kc: "KC-5.1.V.A",
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can explain how governments, organizations, and reformers responded to industrial problems through political, social, educational, public-health, and urban reforms.",
      kc: "KC-5.1.V.D",
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can explain how Marxism, socialism, and communism developed as ideological reactions to industrial capitalism and how they differed from reformist approaches.",
      kc: "KC-5.3.IV.A.ii",
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can compare Ottoman and Qing reform efforts to modernize economies and militaries in response to expanding industrial powers, including resistance from established elites.",
      kc: "KC-5.1.V.B",
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can use at least two specific labor examples—such as trade unions, collective bargaining, Chartism, the Great Railroad Strike, Haymarket, Pullman, or the AFL—to explain how workers built collective power and how governments or employers responded.",
      kc: "KC-5.1.V.A",
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can explain at least two reform responses to industrial social problems, such as factory legislation, expanded education, sanitation/public health, housing or urban infrastructure, and connect each reform to the industrial condition it addressed.",
      kc: "KC-5.1.V.D",
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can explain Marx's class-conflict critique of capitalism, identify a socialist or communist alternative to private industrial capitalism, and distinguish revolutionary socialism from reformist efforts to improve capitalism.",
      kc: "KC-5.3.IV.A.ii",
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can compare one Ottoman reform effort and one Qing reform effort, explain the industrial/military pressure each state faced, and explain how resistance from officials or established elites limited reform.",
      kc: "KC-5.1.V.B",
      theme: "Governance"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-5.1.V.D',
      theme: 'Social Interactions and Organization',
      text: 'In response to the social and economic changes brought about by industrial capitalism, some governments, organizations, and individuals promoted various types of political, social, educational, and urban reforms.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.V.A',
      theme: 'Social Interactions and Organization',
      text: 'In industrialized states, many workers organized themselves, often in labor unions, to improve working conditions, limit hours, and gain higher wages. Workers’ movements and political parties emerged in different areas, promoting alternative visions of society.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.IV.A.ii',
      theme: 'Social Interactions and Organization',
      text: 'Discontent with established power structures encouraged the development of various ideologies, including those espoused by Karl Marx, and the ideas of socialism and communism.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.V.B',
      theme: 'Social Interactions and Organization',
      text: 'In response to the expansion of industrializing states, some governments in Asia and Africa, including the Ottoman Empire and Qing China, sought to reform and modernize their economies and militaries. Reform efforts were often resisted by some members of government or established elite groups.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Reactions to Industrial Capitalism: Organize, Reform, Replace, Modernize",
    intro: "Industrialization generated more than factories and growth. It created harsh labor conditions, crowded cities, new class conflict, and a widening power gap between industrial and nonindustrial states. Topic 5.8 is the response topic: workers organized, reformers tried to fix industrial society, socialists proposed alternatives to capitalism, and vulnerable states tried to modernize before industrial powers overwhelmed them.",
    videos: [],
    segments: [
      {
        title: "Workers Organize: Unions, Strikes, and Political Movements",
        bullets: [
          "Industrial workers had little bargaining power as individuals, so they built **collective power** through trade unions, strikes, mutual-aid societies, and political movements. Their central demands were higher wages, shorter hours, safer conditions, and eventually greater political representation.",
          "Employers and governments often treated collective action as dangerous or illegal. Britain’s Combination Acts and American conspiracy doctrines restricted unions; major confrontations such as the Great Railroad Strike, Haymarket, and Pullman showed that states could use police, courts, or troops against organized labor.",
          "The key AP mechanism is: **industrial conditions -> worker organization -> pressure on employers/governments -> partial reform, repression, or political mobilization**."
        ],
        image: {
          title: "Workers and mass political organization",
          caption: "Industrial workers increasingly used collective action to turn economic grievances into political demands.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/William_Edward_Kilburn_-_View_of_the_Great_Chartist_Meeting_on_Kennington_Common_-_Google_Art_Project.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:William_Edward_Kilburn_-_View_of_the_Great_Chartist_Meeting_on_Kennington_Common_-_Google_Art_Project.jpg"
        }
      },
      {
        title: "Reform the System: Labor Law, Education, and Public Health",
        bullets: [
          "Some governments and reformers tried to **improve industrial society without abolishing capitalism**. Factory legislation restricted child labor and working hours; expanded public education aimed to create literate citizens and workers; sanitation projects addressed epidemics and overcrowded cities.",
          "Urban public-health campaigns grew from the realization that disease did not stay confined to poor neighborhoods. Sewer systems, clean-water projects, housing rules, and municipal infrastructure turned industrial social problems into matters of public policy.",
          "These reforms had mixed motives: humanitarian concern mattered, but governments also wanted social stability, healthier workers, reduced unrest, and more orderly cities."
        ],
        image: {
          title: "Industrial public-health reform",
          caption: "Sanitation reform turned the costs of industrial urbanization into a problem governments could no longer ignore.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Punch-A_Court_for_King_Cholera.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Punch-A_Court_for_King_Cholera.png"
        }
      },
      {
        title: "Replace the System: Marx, Socialism, and Communism",
        bullets: [
          "**Karl Marx and Friedrich Engels** argued that industrial capitalism was built on class conflict between owners of the means of production and workers who sold their labor. In this view, exploitation was structural, not an accidental abuse that a few reforms could remove.",
          "Socialist thinkers proposed greater collective or public control over production and a more equal distribution of wealth. Marxist communism predicted that class conflict would eventually produce proletarian revolution and the abolition of private ownership of the means of production.",
          "This creates a crucial comparison: **reformers asked how capitalism could be improved; revolutionary socialists asked whether capitalism itself was the problem**."
        ],
        image: {
          title: "Industrial inequality and class conflict",
          caption: "Socialist critiques grew from the visible contrast between industrial wealth and working-class poverty.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Punch_1843_-_Reichtum_und_Armut.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Punch_1843_-_Reichtum_und_Armut.png"
        }
      },
      {
        title: "Modernize the State: Ottoman and Qing Reform",
        bullets: [
          "Industrial power also created an international problem. The **Ottoman Empire** and **Qing China** faced militarily stronger industrial states and responded with attempts to modernize armies, administration, education, technology, and selected industries.",
          "Ottoman reform efforts such as the Tanzimat reorganized law, administration, military institutions, and education. Qing reformers pursued military and technological strengthening through efforts such as the Self-Strengthening Movement.",
          "Reform was constrained by **established elites, bureaucratic resistance, fiscal weakness, political conflict, and foreign pressure**. Topic 5.8 therefore includes both social reactions inside industrial societies and state modernization responses outside the first industrial core."
        ],
        image: {
          title: "Industrial pressure and modernization responses",
          caption: "Ottoman and Qing reformers tried to strengthen states without surrendering political control to industrial powers.",
          url: "../assets/images/instructional-maps/topic-5-8.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-5-8.svg"
        }
      }
    ]
  },

  map: {
    title: "The Geography of Industrial-Era Reform, c. 1830–1900",
    url: "../assets/images/instructional-maps/topic-5-8.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-5-8.svg",
    caption: "Reform movements in the industrial era were concentrated in the same industrial regions where industrialization's social dislocations were most intense. British abolition (1833), American abolition (1865), labor organizing in Lancashire and the American Northeast, public health reform in London and Manchester, and temperance campaigns across the United States, all were responses to specific features of the industrial economy.",
    intro: "Examine the geography of abolition and labor organizing. Notice that abolitionist movements were strongest in the industrial North (Britain, American Northeast) rather than the agrarian South, despite the fact that slavery's most direct victims were in the American South and the Caribbean. Consider: what does the geographic pattern of abolitionist organizing reveal about the relationship between industrial capitalism and anti-slavery politics? Is abolitionism in the industrial North a moral achievement, or is it easier to oppose slavery when you are far from it?",
    prompt: "Using the map and your knowledge, compare the geographic patterns of two reform movements, labor organizing and abolitionism. Where was each movement strongest? What explains the geographic concentration? What does comparing these two reform movements reveal about the relationship between political power, economic interest, and moral commitment in the industrial era?"
  },

  deepReading: {
    title: "Illegal, Then Inevitable",
    desc: "A textbook-depth companion on why organizing was a crime and what that leaves a worker, the three American strikes and who broke them, four structural reasons Britain got a Labour Party and the United States did not, and the movements that shared a cause with labor, including the one connecting a Lancashire mill to a Mississippi plantation. Optional, and useful when a checkpoint asks why reform happened when it did.",
    url: "deep-reading-topic-5-8-reactions-to-industrial-economy.html"
  },

  first10: {
    title: 'First & 10: The Rising',
    embedUrl: 'first-and-10-topic-5-8-reactions-to-industrial-economy-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.8 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Labor, Abolition, and Reform",
    intro: "Use the evidence below to analyze the reactions to industrial capitalism. Strong AP comparison and argumentation requires explaining what sources reveal about the broader patterns, not just describing what each source says but using it as evidence for a claim about reform movements and industrial society.",
    prompt: "Choose one piece of evidence. Explain what it reveals about how workers, abolitionists, or reformers responded to industrial capitalism. Then connect your evidence to the broader question: did industrial-era reform movements fundamentally challenge industrial capitalism, or did they primarily stabilize and humanize it?",
    items: [
      { title: "Eugene Debs on the Pullman Strike and His Conversion to Socialism (1895)", detail: "Eugene Debs wrote from prison after the Pullman Strike: 'In the gleam of every bayonet and the flash of every rifle the class struggle was revealed to me as never before... I began to read and think. I was not a Socialist then, I had not been in contact with Socialist literature. But in jail I had time to read and think, and the reading and thinking led me to Socialism. I am now a Socialist and I know why. I believe in the collective ownership and democratic control of the means of production, because the alternative, ownership by a handful of wealthy men who use the state's bayonets to maintain that ownership, produces the Pullman Strike. It produces men like Pullman. It produces poverty in the midst of plenty. It cannot be reformed. It must be replaced.' Analyze: what specific experience caused Debs's conversion to socialism, was it the strike itself, the government's response, or his time in prison? How does Debs's account support the Marxist argument that government in capitalist society serves capitalist class interests? How does this evidence complicate the argument that the American political system was open to working-class influence?" },
      { title: "Frederick Douglass, 'What to the Slave is the Fourth of July?' (1852)", detail: "Frederick Douglass addressed an abolitionist audience in Rochester, New York: 'Fellow Citizens, I am not wanting in respect for the fathers of this republic. The signers of the Declaration of Independence were brave men. They were great men, too, great enough to give fame to a great age. It does not often happen to a nation to raise, at one time, such a number of truly great men. But, fellow citizens, this Fourth of July is yours, not mine. You may rejoice, I must mourn. To drag a man in fetters into the grand illuminated temple of liberty, and call upon him to join you in joyous anthems, were inhuman mockery and sacrilegious irony. Do you mean, citizens, to mock me, by asking me to speak today? ... What have I, or those I represent, to do with your national independence? Are the great principles of political freedom and of natural justice, embodied in that Declaration of Independence, extended to us?' Analyze: how does Douglass use the language of American founding ideals against the practice of American slavery? How does his rhetorical strategy, 'this Fourth of July is yours, not mine', force his audience to confront the contradiction? What does this source reveal about the relationship between American democratic ideology and the reality of slavery in an industrial democracy?" },
      { title: "Edwin Chadwick, Report on the Sanitary Condition of the Labouring Population (1842)", detail: "Edwin Chadwick reported to Parliament: 'The annual loss of life from filth and bad ventilation are greater than the loss from death or wounds in any wars in which the country has been engaged in modern times. The ravages of epidemics as Typhus, Typhoid, Cholera and Smallpox are in the working population greater than those of the most destructive foreign wars... The primary and most important measures, and at the same time the most practicable, and within the recognized province of public administration, are drainage, the removal of all refuse of habitations, streets, and roads, and the improvement of the supplies of water... The loss of life from poor sanitation is not necessary or inevitable: it is a consequence of ignorance and neglect, neglect of the most elementary requirements of healthy human habitation.' Analyze: how does Chadwick frame the public health crisis as a policy problem rather than a natural catastrophe? What does his argument reveal about the relationship between industrial urbanization and avoidable death? How does the phrase 'neglect of the most elementary requirements of healthy human habitation' assign moral responsibility, and to whom?" }
    ]
  },

  primarySource: {
    title: "Primary Source: The Haymarket Martyrs — Labor, Repression, and the Eight-Hour Day (1886)",
    intro: "On May 4, 1886, a rally in Chicago's Haymarket Square, called to protest police violence against strikers at the McCormick Reaper Works, ended when someone threw a bomb, killing seven police officers and four workers. Eight anarchist labor organizers were tried for murder; none was proven to have thrown the bomb, and only one was even present at the rally. Four were hanged, one committed suicide in prison, and three were eventually pardoned in 1893 by Governor John Peter Altgeld, who called the trial 'packed with men hostile to the defendants.' The Haymarket affair became a defining moment in American labor history. This adapted excerpt includes statements by the defendants at their sentencing.",
    text: [
      "August Spies, editor of a German-language labor newspaper and one of the eight defendants, addressed the court before sentencing: 'If you think that by hanging us you can stamp out the labor movement, the movement from which the downtrodden millions, the millions who toil and live in want and misery, the wage slaves, expect salvation, if this is your opinion, then hang us! Here you will tread upon a spark, but there and there, behind you and in front of you, and everywhere, flames will blaze up. It is a subterranean fire. You cannot put it out.'",
      "Albert Parsons, the only native-born American among the defendants, refused an offer of clemency that would have required him to plead guilty to charges he denied: 'I could not purchase my life at the cost of my honor. I could not affirm my guilt when I am innocent. I ask for no mercy. I ask only for justice.' He was hanged on November 11, 1887.",
      "Governor John Peter Altgeld, pardoning the three survivors in 1893: 'The men were not proven guilty of the murder. The jury was packed, made up of men hostile to organized labor, men who had already formed opinions. The judge conducted himself with such malignity that the supreme court of Illinois was moved to say that it was not a trial by jury in any just sense. The conviction was procured not because these men were guilty of a crime, but because they were labor organizers and because their political views were unpopular.'",
      "The Haymarket affair established May 1 as International Workers' Day, commemorated globally. In the United States and Canada, Labor Day was placed on the first Monday in September, a deliberate choice to avoid the Haymarket association. The eight-hour workday that the Haymarket workers died for became legally required in the United States with the Fair Labor Standards Act of 1938, fifty-two years after the rally."
    ],
    questions: [
      "August Spies predicts that the executions will not stop the labor movement, 'It is a subterranean fire. You cannot put it out.' Evaluate this prediction against the historical record: was he right? What happened to the American labor movement after Haymarket, was it suppressed, did it grow, or did it transform? What does the historical outcome reveal about the relationship between repression and radical social movements?",
      "Governor Altgeld's pardon states that the trial 'was not a trial by jury in any just sense', that the men were convicted because of their political views, not proven crimes. What does this claim reveal about the American legal system's treatment of labor radicals in the 1880s? How does this evidence relate to the broader question of whether industrial capitalism's legal and political systems were neutral arbiters of justice or instruments of class power?",
      "Albert Parsons refused clemency rather than plead guilty to charges he denied. Compare his decision to the situation of the Chartist women you read about in Topic 5.6, both faced the question of what individuals owe to a political movement and what a political movement owes to individuals. What does comparing these two cases reveal about the personal costs of labor organizing and political dissent in the industrial era?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Railroad Worker During the Great Railroad Strike, 1877",
    desc: "You are a brakeman on the Baltimore & Ohio Railroad in Martinsburg, West Virginia, in July 1877. You have just learned that the company has cut wages by 10%, the second cut in a year. Your current wage is $1.75 a day for a twelve-hour shift. After the cut, it will be $1.57. Your rent is $6 a month; food for your family costs approximately $15 a month. You cannot make ends meet at the current wage, and at the reduced wage, you will fall further behind.",
    intro: "Workers at the Martinsburg yard have voted to strike, to refuse to move any trains until the wage cut is rescinded. The strike has spread up and down the line. The governor of West Virginia has called out the state militia; the militia refused to fire on the strikers and some militiamen joined the crowd. The governor has asked President Hayes for federal troops. The troops are coming.",
    detail: "You know what federal troops mean: the strike will be broken by force. Some men are talking about fighting, throwing switches, blocking tracks, refusing to move even when soldiers point rifles at them. Others are saying the strike is already lost and they should go back before they lose their jobs entirely. You have a wife and three children. You also know that if the strike fails without any concession, the next wage cut will come, and the one after that. You are trying to decide what to do when the troops arrive. You are also trying to write a letter to your brother in Pittsburgh, who works on the Pennsylvania Railroad, telling him what is happening and what you are deciding.",
    prompt: "Write the letter to your brother. Tell him honestly what the situation is: the wages, the strike, the militia, the coming federal troops. Then tell him what you are going to do when the troops arrive, and why. Are you staying on the line? Going back to work? Running? Make a choice and defend it. Include what you understand about what this strike means for workers beyond Martinsburg, and what it reveals about who the government serves when it sends troops against workers."
  },

  beInTheRoom: {
    url: '',
    desc: "Testify before Parliament on behalf of the Lancashire workers who supported the Union cause during the Cotton Famine at personal cost; defend or prosecute the Haymarket defendants in 1886; or advise the American Federation of Labor on whether 'pure and simple unionism' or political socialism is the right path for the American working class."
  }

};
