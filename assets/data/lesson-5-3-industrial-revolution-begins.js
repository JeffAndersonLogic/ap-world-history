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
    topic: "Topic 5.3",
    title: "The Industrial Revolution Begins",
    subtitle: "Why industrialization started in Britain — and how the steam engine, factory system, and urbanization transformed labor and society from c. 1750 to c. 1900",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here — submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain why the Industrial Revolution began in Britain, identifying the combination of factors — coal, geography, capital, enclosure, political stability, and scientific culture — that made Britain uniquely positioned for industrialization.",
      kc: "KC-5.1.I.A",
      theme: "Humans and the Environment"
    },
    {
      target: "I can describe the key features of early industrialization — steam engine, factory system, and urbanization — and explain the social effects on workers, including new forms of discipline, child labor, dangerous conditions, and the emergence of working-class resistance.",
      kc: "KC-5.1.I.C",
      theme: "Humans and the Environment"
    }
  ],

  successCriteria: [
    {
      criteria: "I can identify at least four factors that explain why industrialization began in Britain (coal and iron deposits; geographic advantages — rivers, canals, coastline; Enclosure Acts driving rural workers to cities; capital from colonial and Atlantic trade; political stability and property rights after the Glorious Revolution; scientific culture — Royal Society, patent system). I can explain why no single factor is sufficient — the combination was unique.",
      kc: "KC-5.1.I.A",
      theme: "Humans and the Environment"
    },
    {
      criteria: "I can explain three key features of early industrialization: Watt's steam engine (1769, improved efficiency), Arkwright's factory at Cromford (1771, first factory concentrating workers and machines), and the urbanization of Manchester (25,000 in 1772 to 300,000 by 1850). I can describe at least two effects on labor: loss of craft/artisan autonomy, long hours and dangerous conditions, widespread child labor, and the Luddite resistance to deskilling machinery.",
      kc: "KC-5.1.I.C",
      theme: "Humans and the Environment"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-5.1.I.A',
      theme: 'Humans and the Environment',
      text: 'A variety of factors contributed to the growth of industrial production and eventually resulted in the Industrial Revolution, including: Proximity to waterways; access to rivers and canals; Geographical distribution of coal, iron, and timber; Urbanization; Improved agricultural productivity; Legal protection of private property; Access to foreign resources; Accumulation of capital',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.1.I.C',
      theme: 'Humans and the Environment',
      text: 'The development of the factory system concentrated production in a single location and led to an increasing degree of specialization of labor.',
      illustrativeExamples: []
    }
  ],

  lecture: {
    title: "Coal, Steam, and the Factory: How Industrialization Began",
    intro: "The Industrial Revolution was not a single event but a transformation that unfolded across several generations — changing how goods were made, where people lived, and how work was organized. Understanding it requires answering two questions: Why did it start in Britain? And what did it do to the people who lived through it?",
    videos: [],
    segments: [
      {
        title: "Why Britain? The Causes of Industrialization",
        bullets: [
          "**Coal and iron**: Britain sat on enormous coal deposits (Yorkshire, the Midlands, South Wales, northeast England) and iron ore deposits that — when combined — produced the steel and steam power driving industrialization. Coal was abundant, shallow enough to mine, and located near navigable rivers. Without coal, there is no steam engine; without the steam engine, the factory system's scale is impossible. Continental Europe had coal too, but not always in the right places or with the right political conditions to exploit it.",
          "**Geography**: Britain's rivers, extensive canal system (built rapidly 1750s–1800s), and coastline meant raw materials and finished goods could be transported cheaply. No part of England is more than 70 miles from the sea. The canal network connected the coal fields to the cities before railroads existed. This low transportation cost was essential — industrialization required moving bulk goods (coal, iron, cotton, finished cloth) cheaply and reliably.",
          "**The Enclosure Acts**: From roughly 1700 to 1850, Parliament passed thousands of local Enclosure Acts that converted common land (on which rural communities had grazing rights) into private farms. Enclosure increased agricultural productivity — better farming on consolidated land — while displacing enormous numbers of rural workers. These displaced rural workers migrated to cities in search of factory wages. Enclosure thus simultaneously increased food supply (needed to feed a growing industrial workforce) and created a cheap urban labor supply.",
          "**Capital**: Profits from Atlantic trade — including the profits of the slave trade, plantation agriculture, and colonial commerce — provided the investment capital for industrial machinery, factories, and canals. British merchants and landowners were willing to invest in risky industrial ventures; the legal system (joint-stock companies, bankruptcy laws) structured investment to limit personal liability. Without capital, there are no machines — and without Atlantic trade profits, British industrialists would have had much less capital to invest.",
          "**Political stability and the patent system**: After the Glorious Revolution (1688), Britain's constitutional monarchy protected property rights and provided legal predictability for long-term investment. The patent system (first codified in 1624) gave inventors exclusive commercial rights to their inventions for a limited period — creating financial incentives for invention. James Watt and Richard Arkwright both made fortunes from their patents. No equivalent system existed in France or Germany at this stage.",
          "**Scientific culture**: The Royal Society (founded 1660), the Lunar Society of Birmingham (Watt, Boulton, Erasmus Darwin, Josiah Wedgwood), and dozens of mechanics' institutes connected scientific curiosity with practical application. Watt improved the steam engine through years of systematic experimentation. Britain's culture of 'useful knowledge' — the belief that science should improve industry and commerce — distinguished it from more theoretically oriented continental scientific cultures."
        ],
        image: {
          title: "Casta Painting — Social Order Before and After Industrialization",
          caption: "Before industrialization, social order in most of the world was based on birth, land, and hereditary status. The Industrial Revolution created new forms of social stratification — the factory owner, the industrial worker, the urban proletariat — that cut across traditional categories.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg"
        }
      },
      {
        title: "Steam Power and the Factory System",
        bullets: [
          "**James Watt's steam engine** (patented 1769, commercially practical by the 1780s) was not the first steam engine — Thomas Newcomen had built an atmospheric pump in 1712 — but it was the first efficient one. Watt added a **separate condenser**, keeping the main cylinder hot and dramatically reducing fuel consumption. By the mid-1780s, Watt's engine (built in partnership with Birmingham industrialist Matthew Boulton) was powering mills, factories, and eventually (after the 1780s) rotary machinery of all types. The steam engine freed industry from dependence on flowing water — factories could now be built anywhere, including in cities.",
          "**Richard Arkwright's water frame** (1769) was the first machine that could spin cotton thread strong enough to be used as warp (the long threads in weaving). In 1771, Arkwright built the first water-powered cotton spinning mill at Cromford, Derbyshire — and this was the first true factory: workers came to a single location, worked with machines they didn't own, at hours set by the factory owner, under supervision from paid overseers. This was a revolutionary change in the social organization of production.",
          "**The domestic/putting-out system** that factories replaced had a very different logic. Under the putting-out system, merchants distributed raw materials (raw cotton, raw wool) to rural workers who processed it in their own homes, on their own equipment, at their own pace. Workers had autonomy over their time and tools; they could work seasonally, supplement with farming, and organize their own labor. The factory system eliminated this autonomy entirely — workers came to the factory at the bell and left at the bell, and the machine set the pace.",
          "**Child labor** was a defining feature of early industrialization. Children as young as 5–7 worked in textile mills, coal mines, and factories. They were valued for their small hands (reaching into dangerous machinery to clear jams), low wages, and (in theory) malleability to factory discipline. Factory owners recruited children from workhouses. The **Factory Act of 1833** was the first effective legislation: it prohibited children under 9 in textile mills, limited those aged 9–13 to 48 hours per week, and crucially established factory inspectors to actually enforce the rules — unlike earlier legislation that relied on self-reporting.",
          "**Working conditions** in early factories were genuinely dangerous. Unguarded machinery caused frequent injuries — children cleaning under moving looms lost fingers, hands, and lives. Cotton dust caused chronic lung disease (byssinosis). Mines filled with explosive gases and collapsed without warning. Working hours were typically 12–16 hours per day, six days a week. Workers were fined for tardiness, talking, or singing. Wages were paid partly in company scrip redeemable only at company stores (truck system). The legal doctrine of 'master and servant' meant workers had few legal remedies."
        ],
        image: {
          title: "Florentine Codex — Transformation and Dislocation",
          caption: "Like the demographic catastrophe documented in sources such as the Florentine Codex, the Industrial Revolution represented a sudden, traumatic disruption of existing social and economic systems — with winners and losers determined largely by position, not merit.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg"
        }
      },
      {
        title: "Urbanization and Working-Class Response",
        bullets: [
          "**Manchester** grew from approximately 25,000 in 1772 to 300,000 by 1850 — the fastest sustained urban growth in history to that point. It earned the nickname 'Cottonopolis' for its cotton spinning mills. Friedrich Engels described conditions there in *The Condition of the Working Class in England* (1845): workers lived in back-to-back houses without light or ventilation, sharing privies (outdoor toilets) with dozens of families, drinking water from the same rivers that served as sewers. Cholera epidemics struck Manchester repeatedly — the disease spread through contaminated water, and the city's infrastructure could not keep pace with its growth.",
          "**Urbanization's human costs** were not invisible to contemporaries. Parliamentary investigations, reform journalism, and fiction (Charles Dickens) documented working-class conditions extensively. But the dominant economic ideology — *laissez-faire* (leave it alone) capitalism — resisted government intervention as distorting the natural market. The reform of working conditions was slow, contested, and occurred through political struggle rather than voluntary employer action.",
          "**The Luddites** (1811–1816): skilled textile workers — frame-knitters and handloom weavers — who destroyed machinery they believed was being used to displace them. They were not simply 'anti-technology': they objected specifically to the use of machinery to undercut skilled workers with unskilled machine-operators. The government treated Luddism as rebellion: 12,000 troops were deployed to the Midlands and Yorkshire (more than Wellington had in Spain); frame-breaking was made a capital offense in 1812; 17 Luddites were executed after the York trials of 1813.",
          "**Chartism** (1838–1857) was the first mass working-class political movement in history. The People's Charter (1838) demanded six reforms: universal male suffrage, secret ballot, annual parliaments, payment for MPs, equal electoral districts, and abolition of property qualifications for MPs. None of the six demands were granted in the 1840s — but five of the six were eventually enacted by 1918. Chartism demonstrates that the working class created political responses to industrialization, not only economic ones.",
          "**The standard of living debate**: Historians continue to argue about whether real wages and living standards rose or fell during the Industrial Revolution's first generation. The evidence suggests that aggregate wealth increased dramatically — but that the distribution was highly unequal. The first generation of factory workers generally experienced worse conditions than the artisans and rural workers they replaced. Improvements in real wages, life expectancy, and consumer access accelerated in the second half of the 19th century — but the costs of the transition were borne disproportionately by the poor."
        ],
        image: {
          title: "VOC — Commercial Networks and Industrial Capital",
          caption: "The commercial networks built by European trading companies like the VOC created the capital and global commodity flows that funded and fueled British industrialization. Cotton from the Americas, markets in Asia, and profits from colonial trade were all inputs to the Industrial Revolution.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg"
        }
      }
    ]
  },

  map: {
    title: "Britain's Industrial Geography, c. 1800",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg",
    caption: "Britain's coal and iron deposits, river systems, and canal networks created the geographic infrastructure for industrialization. The clustering of industrial cities in the Midlands and the North reflects the location of coal fields and the water power of Pennine rivers.",
    intro: "Examine the distribution of Britain's coal deposits, iron ore, rivers, and early industrial cities. Notice how coal fields, navigable rivers, and port cities cluster together — this geographic coincidence is not accidental. Trace how coal from the Midlands could reach Manchester via canal, how finished cloth from Manchester could reach Liverpool's docks, and how Liverpool connected to the Atlantic trade that supplied raw cotton and consumed finished goods.",
    prompt: "Using the map, explain the relationship between geography and industrialization. Which features of Britain's geography were most important for enabling industrialization? What would have been different if Britain's coal deposits had been in the interior, far from navigable water?"
  },

  first10: {
    title: 'First & 10: The Age of Steam',
    embedUrl: 'first-and-10-topic-5-3-industrial-revolution-begins-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.3 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: The Industrial Revolution and Its Human Cost",
    intro: "Use the evidence below to analyze the causes and social effects of the Industrial Revolution. Strong AP causation arguments identify multiple causes and explain the mechanism connecting each cause to its effect. Strong comparison arguments identify specific similarities and differences rather than vague generalizations.",
    prompt: "Choose one piece of evidence. Explain what it reveals about either the causes of industrialization OR its social effects on the working class. Be specific about the mechanism: how exactly did this condition cause this effect?",
    items: [
      { title: "Testimony before Parliament, Factory Commission (1833)", detail: "Samuel Coulson, a factory worker, testified: 'At what time in the morning, in the brisk time, did those girls go to the mills? — In the brisk time, for about six weeks, they have gone at 3 o'clock in the morning, and ended at 10, or nearly half past at night. What intervals were allowed for rest or refreshment during those nineteen hours of labour? — Breakfast a quarter of an hour, and dinner half an hour, and drinking a quarter of an hour. Was any of that time taken up in cleaning the machinery? — They generally had to do what they called dry down; sometimes this took the whole of the time at breakfast or drinking, and they were to get their dinner or breakfast as they could.' Analyze: what does this testimony reveal about the conditions of factory labor, and how does it compare to what you would expect of the domestic putting-out system?" },
      { title: "James Watt's Steam Engine Patent Description (1769)", detail: "Watt's original patent described his key innovation: 'My method of lessening the consumption of steam, and consequently fuel, in fire engines, consists of the following principles: First, that vessel in which the powers of steam are to be employed to work the engine... is to be maintained always as hot as the steam that enters it; secondly, in steam engines, there is to be no unnecessary condensation of steam; thirdly, a third kind of pump... is to be employed.' Analyze: how does Watt's focus on efficiency — 'lessening the consumption of steam, and consequently fuel' — reveal the economic logic that drove technological innovation in the Industrial Revolution? What incentive did factory owners have to adopt more efficient engines?" },
      { title: "Luddite Letter to a Hosier (c. 1812)", detail: "A letter attributed to Ned Ludd (the Luddites' fictional leader) warned a Nottingham hosier: 'I write on behalf of the whole body of Luddites, to inform you, that we are determined to destroy your frames, unless you immediately discharge from your employ the men who have been placed at them to do the work of our trade at a lower rate than the full price... We are determined to destroy all frames that work at anything less than the full price. Signed by the General of the Army of Redressers, Ned Ludd.' Analyze: how does this letter complicate the popular image of Luddites as simply 'anti-technology'? What does the letter's specific demand (full price for labor) reveal about the economic threat they were responding to?" }
    ]
  },

  primarySource: {
    title: "Primary Source: Parliamentary Testimony, Factory Commission (1833)",
    intro: "In 1833, the British Parliament commissioned an inquiry into child labor in the textile mills. Parliamentary commissioners traveled to factory districts and took testimony from workers, children, factory owners, and physicians. This adapted testimony was given by a young worker in a textile mill. The Factory Act of 1833 — passed the same year — prohibited employment of children under 9 in textile mills and restricted those aged 9–13 to 48 hours per week. It also established factory inspectors to enforce the rules, for the first time making the law enforceable.",
    text: [
      "What age are you? — I am turned thirteen years old.",
      "How long have you worked in the mill? — Since I was about six years old.",
      "What were your hours of labor when you first began to work? — We began at five in the morning and worked till nine at night in busy times.",
      "What was done to you if you were late? — We were strapped with a leather strap, or we had to stand on a step for two hours at the end of the day.",
      "Did your feet hurt you? — Yes, they swelled so at night that I had to have a large bucket of cold water to dip them in to reduce the swelling before I could put my shoes on the next morning.",
      "Did you receive any schooling? — No. By the time I got home I was too tired to learn anything.",
      "Were you ever injured in the mill? — Yes. My finger was taken off in the machinery when I was eight. I was reaching in to clear a jam in the rollers when the machine started up."
    ],
    questions: [
      "What does this testimony reveal about the conditions of child labor in textile mills? Identify at least three specific details — hours, discipline, physical effects — that characterize the worker's experience.",
      "This child began working at age 6 and lost a finger at age 8. The Factory Act of 1833 prohibited employment of children under 9 — passed the same year this testimony was given. What does this reveal about the relationship between political reform and industrial conditions? Why did reform take so long?",
      "Factory owners argued that factories were beneficial for poor children because they provided wages and kept children out of idleness. How would you respond to this argument using this testimony as evidence? What does this exchange reveal about the relationship between economic interest and humanitarian concern in the early Industrial Revolution?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Handloom Weaver in Lancashire, c. 1812",
    desc: "You are a handloom weaver in a village in Lancashire, England, c. 1812. Your family has woven woolen cloth for three generations. The power loom being installed in the mill down the road can produce in a day what takes you a week at your loom. Last month, some men from the village went out in the night and broke the frames in the new mill — Luddites, they call themselves. You didn't go, but you understood why.",
    intro: "Your son Thomas is 12 years old. He has been offered a job in the mill — 12 hours a day, six days a week, for wages that are less than what you used to make in a day but more than the family has now. Your earnings at the handloom have fallen by half in two years as the mills have driven prices down. You can see the future: either Thomas goes to the mill, or the family goes to the workhouse. You know men who chose the workhouse — and you know what that looks like.",
    detail: "You also know what the mill looks like. You've walked past it at dawn — the noise, the vibration through the ground, the smell of machine oil and damp cotton. You've talked to women who work there. The pace is set by the machine, not by the worker. There are fines for being late, for talking, for going to the outhouse without permission. You have worked at your own loom, in your own house, at your own pace, for as long as you can remember. You are being asked to give Thomas to a world that has no place for that kind of work.",
    prompt: "Write a letter to Thomas explaining your decision — whether you will send him to the mill or not. Explain to him what is being lost and what must be accepted. Tell him what you hope for him, and what you are afraid of. Don't idealize the old ways (you know the handloom was hard work too) and don't surrender to despair. Write as someone who loves his son and is trying to be honest about a world that is changing faster than he can understand."
  },

  beInTheRoom: {
    url: '',
    desc: "Advise James Watt and Matthew Boulton on the risks of commercializing the steam engine, testify before the Factory Commission as a mill owner defending your labor practices, or join a Luddite cell planning a frame-breaking raid and argue about whether violence or politics is the right response to the power loom."
  }

};
