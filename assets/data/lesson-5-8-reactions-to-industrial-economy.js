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
      target: "I can explain how workers organized through trade unions, strikes, and political parties to improve wages and working conditions, and analyze how government and employer responses, including violent suppression, shaped the development of the labor movement in Britain and the United States.",
      kc: "KC-5.1.V.A",
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can explain how abolitionism challenged slavery's structural connection to the industrial cotton economy, and how reform movements, including public education, public health reform, and temperance, responded to the social dislocations of industrialization.",
      kc: "KC-5.1.V.D",
      theme: "Social Interactions and Organization"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain why trade unions were illegal under early industrial-era law (Combination Acts in Britain; criminal conspiracy doctrine in the US) and how this legal framework shaped what forms of collective action were available to workers. I can describe three specific labor events and their significance: the Great Railroad Strike of 1877 (first major US labor uprising, broken by state and federal troops); the Haymarket affair of 1886 (bomb at eight-hour workday rally, used to criminalize labor radicalism); and the Pullman Strike of 1894 (nationwide solidarity strike broken by federal troops, Eugene Debs imprisoned). I can explain how the American Federation of Labor (1886) chose 'pure and simple unionism' over political radicalism, and why. I can compare British and American labor movements: why did Britain develop a Labour Party while the United States did not?",
      kc: "KC-5.1.V.A",
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can explain the structural connection between industrial capitalism (specifically the textile industry) and American slavery through the cotton economy, and how abolitionists used this connection in their arguments. I can describe the British abolition of slavery (1833, effective 1838) and the role of the abolitionist movement and the 1831–32 Baptist War. I can explain how the American Cotton Famine (1861–1865) forced British textile mills to diversify cotton sources, restructuring global cotton supply chains. I can give at least two examples of industrial-era reform movements beyond labor and abolitionism (public education reform, Forster Act 1870, mandatory schooling; public health reform, Edwin Chadwick's 1842 report, germ theory, Great Stink/Bazalgette sewers; temperance, WCTU 1874) and explain the connection between each reform and the social dislocations of industrialization.",
      kc: "KC-5.1.V.D",
      theme: "Social Interactions and Organization"
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
    title: "Rising Up: Labor, Abolition, and Reform in the Industrial Era",
    intro: "Industrialization created the conditions for some of the most powerful social movements in modern history. Workers who had no individual bargaining power discovered collective power, and paid for it with arrests, beatings, and deaths. Abolitionists who challenged slavery's deep structural connection to industrial capitalism eventually prevailed, in Britain in 1833, in the United States in 1865, after decades of organizing and, in the American case, a catastrophic civil war. Reformers who confronted the sanitation disaster of industrial cities saved millions of lives by building sewers. Understanding Topic 5.8 means understanding that the industrial age was not simply imposed on people, it was contested, reformed, and resisted, with real consequences.",
    videos: [],
    segments: [
      {
        title: "The Labor Movement: From Illegal Conspiracy to Political Power",
        bullets: [
          "**The legal framework workers faced**: In Britain, the **Combination Acts** (1799, 1800) made it illegal for workers to combine to demand higher wages or better conditions, trade unions were criminal conspiracies. In the United States, courts used the common law doctrine of criminal conspiracy to prosecute union organizers through most of the 19th century. The legal framework treated employment as a free contract between individuals: any collective action to change that contract was coercion. This was not neutral law, it treated the grossly unequal power relationship between a factory owner and an individual worker as if they were equals negotiating freely, while making collective equalization of that power illegal.",
          "**Britain's path**: The Combination Acts were repealed in 1824, legalizing union organizing, though courts continued to restrict strike action. **Craft unions**, organizing skilled workers by trade, grew through the 1850s–1870s. The **Trades Union Congress** (TUC, 1868) created a national federation. By the 1880s–1890s, 'new unionism' organized less-skilled workers in docks, gas works, and general labor. The **Dockers' Strike of 1889**, won after enormous public sympathy and a five-week stoppage, demonstrated unskilled workers' collective power. The **British Labour Party** (1900) grew from TUC support for parliamentary candidates; by 1906, it had 29 MPs. Britain's path to labor political power ran through the trade union movement and eventually produced a Labour government in 1924.",
          "**The Great Railroad Strike (1877)** was the first major labor uprising in the United States. Railroad workers walked off the job across multiple states in response to a 10% wage cut, the second cut in a year, by the Baltimore & Ohio Railroad. The strike spread to the Pennsylvania, Erie, and New York Central railroads within days, paralyzing rail traffic in a dozen states. State militias were called in; in Pittsburgh, militia fired on crowds, killing more than 20 people. President Hayes deployed federal troops, the first significant use of federal military force against domestic labor action. The strike was broken after two weeks. Its significance: it demonstrated workers' ability to shut down the industrial economy, and it demonstrated the government's willingness to use military force to protect railroad company property.",
          "**The Haymarket affair (1886)** began as a rally in Chicago's Haymarket Square in support of an eight-hour workday, called the day after police killed two workers at a strike at the McCormick Reaper Works. As police advanced on the crowd, someone threw a bomb; seven police officers were killed, along with four workers. Eight anarchist labor organizers, only one of whom was even present at the rally, were tried for murder in a proceeding widely condemned as unjust; four were hanged. **Haymarket** became a defining moment: for labor radicals, the four executed men were martyrs; for employers and governments, the affair confirmed that union organizing led to violence and must be suppressed. **International Workers' Day (May Day)** was established in 1889 by the Second International to commemorate the Haymarket events, it became a global labor holiday observed everywhere except the United States and Canada.",
          "**The Pullman Strike (1894)**: After the Pullman Palace Car Company cut wages during the depression of 1893 without reducing rents in its company-owned town, workers went on strike. Eugene Debs's American Railway Union organized a nationwide boycott: members refused to handle any train with Pullman cars. Railroad traffic across the Midwest stopped. President Cleveland, over the objection of the Illinois governor, sent federal troops; a federal judge issued an injunction against the boycott. Debs was imprisoned for contempt of court. After his release, he read widely in socialist literature and concluded that reform within capitalism was insufficient, he became the Socialist Party of America's presidential candidate in 1900, 1904, 1908, 1912, and 1920. The Pullman Strike demonstrated that 'pure and simple unionism' within capitalism was vulnerable to federal power, a lesson that pushed some labor activists toward political radicalism."
        ],
        image: {
          title: "Loren Mozley Pueblo Revolt — Collective Resistance",
          caption: "The Pueblo Revolt of 1680 represents organized collective resistance against colonial authority, the same dynamic that animated the labor movement. Workers in the industrial era, like the Pueblo people in 1680, had little individual power against the institutions that controlled their lives; collective action was the only mechanism that could change their situation.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg"
        }
      },
      {
        title: "Abolitionism and the Industrial Cotton Connection",
        bullets: [
          "**The structural connection between industrial capitalism and slavery**: The textile mills of Lancashire and the cotton mills of Lowell, Massachusetts, ran on American cotton. In 1850, cotton was the United States' largest export, providing two-thirds of American export earnings. This cotton was grown by enslaved people on Southern plantations. The Industrial Revolution in Britain and the expansion of American slavery were not separate phenomena, they were parts of the same economic system. British industrialists who bought American cotton knew it was produced by enslaved labor; the question abolitionists forced was whether that knowledge created moral responsibility.",
          "**The Baptist War (1831–32)**, also called the Sam Sharpe Rebellion, was the largest slave revolt in British Caribbean history: approximately 60,000 enslaved people in Jamaica, led by a Baptist deacon named Sam Sharpe, organized a general strike that escalated into armed resistance. British forces suppressed it; 14 white colonists and approximately 500 enslaved people were killed, with hundreds more executed afterward. The rebellion's significance for British abolition: it demonstrated that the slave system was inherently unstable and that enslaved people were actively resisting their condition. Combined with the abolitionist movement's political organizing, 1.3 million petition signatures presented to Parliament in 1833, the Baptist War helped produce the **Slavery Abolition Act of 1833**, which abolished slavery throughout most of the British Empire (effective 1838). Crucially, the Act included **£20 million in compensation to slaveholders**, not to formerly enslaved people.",
          "**Frederick Douglass**, born into slavery in Maryland, escaped in 1838, became the most powerful public voice of the American abolitionist movement. His autobiography (Narrative of the Life of Frederick Douglass, 1845) was one of the most widely read books of the 19th century. Douglass was a brilliant rhetorician: his famous speech 'What to the Slave is the Fourth of July?' (1852) systematically dismantled the contradiction between American revolutionary ideals and American slavery. Douglass worked with William Lloyd Garrison (publisher of The Liberator), Sojourner Truth, and Harriet Tubman. When the Civil War began, Douglass immediately understood its potential as an emancipation war and lobbied Lincoln to make abolition its explicit goal, which Lincoln eventually did with the Emancipation Proclamation (1863) and the Thirteenth Amendment (1865).",
          "**The Cotton Famine (1861–1865)**: The Union naval blockade of Confederate ports during the Civil War cut off American cotton to British mills. The **Lancashire Cotton Famine**, as British workers experienced it, put approximately 500,000 textile workers out of work, with millions more affected. In a remarkable political moment, Lancashire workers held public meetings declaring their support for the Union cause and opposing Confederate recognition, even at the cost of their own employment. Their calculation: recognizing the Confederacy would mean prolonging slavery; they would not do it. Abraham Lincoln wrote a letter of thanks to the workers of Manchester in 1863, calling their stand 'an instance of sublime Christian heroism which has not been surpassed in any age or in any country.' The Cotton Famine forced British mills to diversify cotton sources, turning to Egypt, India, and eventually other regions, which restructured global cotton supply chains and transformed the agricultural economies of Egypt and India in ways that shaped those countries for decades."
        ],
        image: {
          title: "Florentine Codex — Documenting Social Transformation",
          caption: "The Florentine Codex documented the transformation of Aztec society under colonial contact. The abolitionist movement similarly produced documents, slave narratives, petition campaigns, parliamentary testimony, that forced the public record to include the experience of enslaved people, not just the interests of slaveholders.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg"
        }
      },
      {
        title: "Reform Movements: Education, Public Health, and Temperance",
        bullets: [
          "**Public education reform**: Industrial capitalism both created the conditions that made child labor common and generated the arguments for eliminating it. Factory commissioners' reports documenting children working from age five, and parliamentary acts limiting and eventually prohibiting child factory labor, created pressure for alternatives. Where would children be if not in factories? Schools. **Britain's Education Act of 1870** (the **Forster Act**) established publicly funded elementary schools wherever church schools were inadequate; subsequent legislation (1880) made attendance compulsory for children aged 5–10; the 1891 act made state elementary schools free. In the United States, Massachusetts was the first state to require school attendance (1852); by 1918, all states had compulsory education laws. The argument for mandatory education combined humanitarian concern (children should learn, not work) with industrial-era economic logic (an industrial economy needed workers who could read safety instructions, do basic arithmetic, and follow written rules) and political logic (democratic governments needed literate citizens).",
          "**Public health reform** emerged from the catastrophic sanitation conditions of industrial cities. Before germ theory, no one understood that cholera, typhoid, and other epidemic diseases spread through contaminated water. Edwin Chadwick's **Report on the Sanitary Condition of the Labouring Population of Great Britain** (1842) documented the direct empirical connection between poor sanitation and early death, even without understanding the mechanism: working-class districts with no sewers had dramatically shorter life expectancies than middle-class districts with better drainage. The average age of death for laborers in Liverpool was 15; for gentry in nearby rural areas, 35. Chadwick argued that good drainage would save money (by reducing disease-related poverty) even before humanitarian arguments convinced anyone.",
          "**The Great Stink (1858)**: A heat wave in the summer of 1858 caused the Thames, London's primary water source and primary sewer, to produce odors so powerful that Parliament, meeting on the riverbank, was nearly unable to function. Members of Parliament fled meetings with handkerchiefs soaked in chloride of lime pressed to their faces. The direct experience of the smell of London's waste water, by the people with political power to fund a solution, produced immediate legislative action. Civil engineer Joseph Bazalgette's sewer system, 1,100 miles of sewers carrying waste away from the Thames, was authorized and funded. When it was completed (1875), cholera deaths in London fell dramatically. Germ theory (Pasteur, Koch, 1860s–1870s) later provided the scientific explanation for what Chadwick and Bazalgette had documented empirically: sanitation prevented disease because bacteria in contaminated water caused it. Public sewer systems and clean water supplies spread through industrial cities across Europe and North America through the late 19th and early 20th centuries, producing the most dramatic sustained decline in urban mortality in human history.",
          "**The temperance movement** was one of the largest mass movements of the industrial era, especially in the United States, where the **Women's Christian Temperance Union** (WCTU, founded 1874) became the largest women's organization in 19th-century America. Temperance advocates argued that alcohol consumption destroyed working-class family life: wages spent on drink rather than food; husbands returning home violent; children neglected. The argument had force in an era when industrial wages were low, working hours long, and alcohol cheap, and when legal protections for women and children in the household were minimal. The WCTU, under Frances Willard's leadership, expanded its mission beyond temperance to women's suffrage, labor reform, and social welfare, making 'Do Everything' its motto. The temperance movement ultimately achieved prohibition in the United States (Eighteenth Amendment, 1919), a significant policy win that also proved deeply problematic in practice, fueling organized crime and eventually being repealed (Twenty-First Amendment, 1933)."
        ],
        image: {
          title: "World 1700 CE — The Pre-Reform Social Order",
          caption: "The social order of c. 1700, hierarchical, agrarian, without public education systems or sanitation infrastructure, was what industrialization disrupted and what industrial-era reform movements sought to reconstruct on new foundations. Public education, public health, and labor rights were not pre-existing institutions that industrialization threatened; they were new institutions that reformers built in response to industrialization.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png"
        }
      }
    ]
  },

  map: {
    title: "The Geography of Industrial-Era Reform, c. 1830–1900",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png",
    caption: "Reform movements in the industrial era were concentrated in the same industrial regions where industrialization's social dislocations were most intense. British abolition (1833), American abolition (1865), labor organizing in Lancashire and the American Northeast, public health reform in London and Manchester, and temperance campaigns across the United States, all were responses to specific features of the industrial economy.",
    intro: "Examine the geography of abolition and labor organizing. Notice that abolitionist movements were strongest in the industrial North (Britain, American Northeast) rather than the agrarian South, despite the fact that slavery's most direct victims were in the American South and the Caribbean. Consider: what does the geographic pattern of abolitionist organizing reveal about the relationship between industrial capitalism and anti-slavery politics? Is abolitionism in the industrial North a moral achievement, or is it easier to oppose slavery when you are far from it?",
    prompt: "Using the map and your knowledge, compare the geographic patterns of two reform movements, labor organizing and abolitionism. Where was each movement strongest? What explains the geographic concentration? What does comparing these two reform movements reveal about the relationship between political power, economic interest, and moral commitment in the industrial era?"
  },

  first10: {
    title: 'First & 10: The Rising',
    embedUrl: 'first-and-10-topic-5-8-reactions-to-industrial-economy-capture.html',
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
