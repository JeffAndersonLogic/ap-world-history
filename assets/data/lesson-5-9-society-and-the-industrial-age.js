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
    topic: "Topic 5.9",
    title: "Society and the Industrial Age",
    subtitle: "How industrialization created a new middle class and a new industrial working class, reshaped the household and economic roles of women and children differently across classes, and produced the challenges of rapid urbanization in the period c. 1750–1900",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how industrialization led to the development of new social classes, the middle class and the industrial working class, and describe what made each class new relative to the older order based on land and birth.",
      kc: "KC-5.1.VI.A",
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can explain how industrialization changed the household and economic roles of women and children differently depending on social class, pulling working-class women and children into wage labor while increasingly confining middle-class women to the household.",
      kc: "KC-5.1.VI.B",
      theme: "Social Interactions and Organization"
    },
    {
      target: "I can explain the challenges that rapid urbanization created in industrial cities, including pollution, poverty, increased crime, public health crises, housing shortages, and insufficient infrastructure.",
      kc: "KC-5.1.VI.C",
      theme: "Social Interactions and Organization"
    }
  ],

  successCriteria: [
    {
      criteria: "I can name the two new classes (the middle class and the industrial working class) and describe at least one defining characteristic of each. I can explain that middle-class status (factory owners, merchants, bankers, engineers, professionals, managers, clerks) came from business, skill, and salaries rather than inherited titles or land, and that this class grew in number and political influence. I can explain that the industrial working class sold its labor for wages and worked long hours in dangerous factories and mines, and that the gap between owners and workers became a defining social tension of the 1800s.",
      kc: "KC-5.1.VI.A",
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can contrast the wage-earning roles of working-class women and children (textile mills, factories, mines, for lower pay than men) with the household- and child-focused roles of middle-class women, and explain WHY the economic situation of each class produced that difference. I can explain the ideology of 'separate spheres' / domesticity that cast middle-class men as public earners and middle-class women as managers of the household and children, and how it limited women's access to education and paid professions.",
      kc: "KC-5.1.VI.B",
      theme: "Social Interactions and Organization"
    },
    {
      criteria: "I can identify at least three of the challenges named in the CED (pollution, poverty, increased crime, public health crises, housing shortages, insufficient infrastructure) and explain why rapid, unplanned city growth produced each one, for example, why overcrowded tenements with no clean water or sewers fueled cholera and typhoid outbreaks, and how cities lacked the infrastructure to absorb mass rural-to-urban migration.",
      kc: "KC-5.1.VI.C",
      theme: "Social Interactions and Organization"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-5.1.VI.A',
      theme: 'Social Interactions and Organization',
      text: 'New social classes, including the middle class and the industrial working class, developed.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.VI.B',
      theme: 'Social Interactions and Organization',
      text: 'While women and often children in working-class families typically held wage-earning jobs to supplement their families’ income, middle-class women who did not have the same economic demands to satisfy were increasingly limited to roles in the household or roles focused on child development.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.VI.C',
      theme: 'Social Interactions and Organization',
      text: 'The rapid urbanization that accompanied global capitalism at times led to a variety of challenges, including pollution, poverty, increased crime, public health crises, housing shortages, and insufficient infrastructure to accommodate urban growth.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "A New Kind of Society: Class, Home, and the Industrial City",
    intro: "Industrialization did not just change what people produced, it remade who they were. In the span of a few generations it created two new social classes, split family and gender roles along class lines, and packed millions of people into cities that were not built to hold them. Topic 5.9 is about that social transformation: how industrialization reshaped social hierarchies and standards of living from the top of society to the bottom.",
    videos: [],
    segments: [
      {
        title: "A New Social Order: The Middle Class and the Industrial Working Class",
        bullets: [
          "**The old hierarchy gets scrambled**: For most of history, society was sorted mainly by land and birth, aristocrats who owned estates at the top, peasants and artisans below, with status largely fixed at birth. Industrialization cracked that order open. As factories, railroads, and global trade reorganized how wealth was created, two entirely new social classes rose to define the age (KC-5.1.VI.A).",
          "**The middle class**: This class included factory owners, merchants, bankers, engineers, and a fast-growing body of professionals, lawyers, doctors, managers, and clerks. Their status came from business, skill, and salaries rather than noble titles or inherited land. As industry expanded, the middle class grew in both numbers and political influence, building comfortable homes, funding schools, and pushing for reforms that protected property and rewarded ambition.",
          "**The industrial working class**: This class was made up of the men, women, and children who actually ran the machines. They owned no factories; they sold their labor for wages, often working twelve-hour shifts in hot, loud, and dangerous factories and mines. The widening gap between the owner who collected the profits and the worker who breathed the cotton dust became one of the defining social tensions of the nineteenth century."
        ],
        image: {
          title: "Manchester from Kersal Moor (William Wyld)",
          caption: "A nineteenth-century view of Manchester, the archetypal industrial city, its skyline crowded with factory chimneys. The new class structure of the industrial age was most visible in cities like this, where factory owners and the workers they employed lived very different lives within the same smoke-filled landscape.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg"
        }
      },
      {
        title: "Two Homes, Two Destinies: Family and Gender Roles by Class",
        bullets: [
          "**Working-class families**: One paycheck was rarely enough to survive on, so wives and children worked too, spinning thread in textile mills, tending machines, or hauling materials in mines. Their wages were essential to the family's survival, and women were routinely paid less than men for the same labor. For these families, industrialization pulled nearly everyone into the wage economy (KC-5.1.VI.B).",
          "**Middle-class families and 'separate spheres'**: Because a single salary could support the entire household, the middle-class wife was increasingly expected not to earn money at all, but to manage the home and raise the children. A powerful belief known as 'separate spheres' took hold: men belonged to the public world of work and politics, women to the private world of the household. The ideal of domesticity steered middle-class women away from education and paid professions.",
          "**The paradox**: The same force, industrialization, pushed working-class women *into* wage labor and middle-class women *out* of it. The difference was economic: working-class families needed every wage; middle-class families could afford a single earner, and turned that into a social expectation about where women belonged."
        ],
        image: {
          title: "Power-loom weaving, 1835",
          caption: "Women operating power looms in a textile mill, c. 1835. Working-class women's wage labor was central to the family economy of the industrial age, and a sharp contrast to the household-confined ideal expected of middle-class women.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Powerloom_weaving_in_1835.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Powerloom_weaving_in_1835.jpg"
        }
      },
      {
        title: "Cities Under Strain: The Challenges of Rapid Urbanization",
        bullets: [
          "**Why cities exploded**: The need for factory workers drove a massive migration from the countryside to the cities. Urban populations grew faster than anyone could manage, and cities simply were not built to hold the new arrivals (KC-5.1.VI.C).",
          "**The cluster of challenges**: Rapid, unplanned growth produced exactly the problems the CED names, pollution from coal-burning factories; poverty among workers whose wages barely covered rent; rising crime in overcrowded districts; public health crises as diseases like cholera and typhoid spread through neighborhoods with no clean water or sewers; severe housing shortages that forced families into packed tenements; and infrastructure (water, sanitation, transit) that could not keep up with the influx.",
          "**Disease and the road to reform**: Tenement overcrowding plus contaminated water made epidemic disease a defining feature of the industrial city. Over time these conditions sparked sanitation laws, public health measures, and housing regulations, the reform story developed more fully in Topic 5.8. For 5.9, the key takeaway is the whole transformation: industrialization reshaped social hierarchies *and* standards of living, for better and for worse."
        ],
        image: {
          title: "A Court for King Cholera (Punch, 1852)",
          caption: "A satirical illustration of an overcrowded, filthy urban court, the kind of densely packed, poorly drained neighborhood where cholera and typhoid spread. Images like this dramatized the public health crises that accompanied rapid industrial urbanization.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Court_for_King_Cholera.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/A_Court_for_King_Cholera.png"
        }
      }
    ]
  },

  map: {
    title: "The Geography of the Industrial City, c. 1750–1900",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Manchester_from_Kersal_Moor_William_Wyld.jpg",
    caption: "Industrial cities clustered where coal, water power, and transport made factory production possible, first in Britain, then across continental Europe and the United States. Within those cities, the new class structure was written into the map: factory districts and crowded workers' housing on one side, middle-class neighborhoods and suburbs on the other.",
    intro: "Examine where industrial cities grew most rapidly. Notice how the geography of the city reflected the new social order, working-class districts packed near the factories and mills, middle-class families increasingly in cleaner neighborhoods at the edges. Consider how the speed of urban growth, more than its mere existence, produced the cluster of challenges the CED identifies.",
    prompt: "Using the map and your knowledge, explain how the geography of the industrial city reflected BOTH the new class structure (KC-5.1.VI.A) AND the challenges of rapid urbanization (KC-5.1.VI.C). Where did each class live, and why did rapid, concentrated growth produce problems that slower-growing towns avoided?"
  },

  first10: {
    title: 'First & 10: A New Kind of Society',
    embedUrl: 'first-and-10-topic-5-9-society-and-the-industrial-age-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.9 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Class, Home, and the Industrial City",
    intro: "Use the evidence below to analyze how industrialization changed social hierarchies and standards of living. Strong AP work does not just describe what each source says, it uses the source as evidence for a claim about the broader social transformation of the industrial age.",
    prompt: "Choose at least two of the three sources. Use them as evidence to answer this question: How did industrialization affect standards of living and social roles DIFFERENTLY across classes? Connect each source you use to a specific key concept (KC-5.1.VI.A, B, or C), and end with one sentence explaining what the contrast between classes reveals.",
    items: [
      {
        title: "A Factory or Mine Wage Ledger (representative)",
        detail: "A weekly wage record from an industrial workplace, listing pay by worker category, adult men, adult women, and children, for comparable hours. Such ledgers consistently show women and children paid substantially less than men for similar work. [⚠ Teacher note: attach or transcribe a verified historical wage table, e.g., from a specific British textile mill or coal-mine record, before using as graded primary-source data; do not present unverified figures as authentic.] Analyze: What does the pay structure reveal about why working-class families relied on the wages of women and children (KC-5.1.VI.B)? What does it suggest about the working class's standard of living?"
      },
      {
        title: "Edwin Chadwick, Report on the Sanitary Condition of the Labouring Population of Great Britain (1842)",
        detail: "A landmark government report documenting the link between overcrowded, poorly drained working-class districts and dramatically shorter life expectancy. Chadwick argued that disease and early death in industrial cities were not natural or inevitable but the avoidable result of inadequate drainage, refuse removal, and water supply. [⚠ Teacher note: use a verified short excerpt from the public-domain report if you want a direct quotation.] Analyze: How does Chadwick frame the public health crisis as a policy problem rather than a natural catastrophe? Which CED challenges (pollution, public health crises, insufficient infrastructure) does his report document (KC-5.1.VI.C)?"
      },
      {
        title: "A Middle-Class Domestic-Advice Manual (e.g., Mrs Beeton's Book of Household Management, 1861; or Sarah Stickney Ellis, The Women of England, 1839)",
        detail: "A guide written for middle-class wives, instructing them on running a household, managing servants, and raising children, with no expectation that the woman of the house earn an income. Texts like these codified the ideal of 'separate spheres' and domesticity. [⚠ Teacher note: use a verified short excerpt if you want a direct quotation.] Analyze: What does this source reveal about how industrialization reshaped the role of middle-class women (KC-5.1.VI.B)? How does the world it describes contrast with the wage-earning reality of working-class women?"
      }
    ]
  },

  primarySource: {
    title: "Primary Source: Testimony on Child and Woman Labor in the Factories (Britain, 1830s)",
    intro: "In the 1830s, British parliamentary committees gathered testimony from factory workers, including women who had begun work as children, as part of the debate over factory regulation. The accounts documented long hours, low pay, physical punishment, and lasting bodily harm among the youngest and most vulnerable industrial workers, and helped drive early factory legislation. [⚠ Teacher note: the excerpts below are adapted and representative of documented testimony (e.g., the 1832 Sadler Committee, including the well-known testimony of Elizabeth Bentley). VERIFY against the published transcript and replace with exact text before student deployment.]",
    text: [
      "A woman who had begun factory work as a young child described starting work at age six, on shifts that ran roughly from five or six in the morning until late at night during the busy season, far longer than a modern school day, with only short breaks for meals.",
      "She described how overseers used physical punishment to keep exhausted children working at the pace of the machines, and how years of standing and repetitive strain at the looms and frames left some workers with permanent physical deformities.",
      "Reformers used such testimony to argue that the factory system, left unregulated, sacrificed the health of women and children to production, while factory owners argued that family wages depended on this labor and that regulation would raise costs. The result was a series of early factory acts limiting (though not at first ending) the hours of children and, later, women.",
      "[⚠ Replace this block and the two above with verified transcript excerpts before classroom use.]"
    ],
    questions: [
      "What does this testimony reveal about the standard of living and working conditions of the industrial working class, especially its women and children (KC-5.1.VI.B)? Use specific details from the account.",
      "Reformers and factory owners drew opposite conclusions from the same conditions. What does this disagreement reveal about the competing interests created by industrialization, and about whose standard of living the early factory system prioritized?",
      "Connect this source to the broader social transformation of Topic 5.9: how does the experience of working-class women and children here contrast with the household-confined ideal expected of middle-class women in the same era?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Live in Two Cities at Once, An Industrial City, 1851",
    desc: "You are fifteen. You wake before sunrise in a single rented room you share with your parents and three younger siblings; the air already tastes of coal. By six you are at the textile mill, where the machines are so loud you read the foreman's lips. Your wages, smaller than the men's, even at the same machine, go straight to your mother for rent and bread.",
    intro: "At midday you run an errand that takes you across town, into a neighborhood you rarely see: wide streets, a park, brick houses with curtains and gardens. Through one window you glimpse a girl about your own age. She is not going to a mill. She is at a piano, and a woman, her mother, you guess, is teaching her how to manage a household someday. You are both living through the same revolution. It has handed her a parlor and handed you a machine.",
    detail: "As you write, reason through these questions inside your account (don't just list answers): (1) What does your family's need for your wages reveal about the working-class experience of industrialization? (2) Why might the girl at the piano never take a paying job, and is that freedom, limitation, or both? (3) Walking between these two neighborhoods, what do you notice about the city itself, its air, its housing, its streets, that shows how unevenly industrialization touched people's lives?",
    prompt: "Write your account of this day in the first person. Make the contrast between the two neighborhoods do real analytical work: use it to explain how industrialization reshaped both social class and the daily standard of living for different people in the same city. Organize your thinking here, submit your final work in Canvas."
  },

  beInTheRoom: {
    url: '',
    desc: "Sit on a sanitary inquiry into an industrial city's overcrowded, disease-ridden districts and recommend who must pay to fix the water and housing; or testify before a factory committee on the wages and hours of women and children in the mills; or play a middle-class household navigating the expectations of 'separate spheres.' [Scenario blueprint, HTML build pending; not assigned in this build.]"
  }

};
