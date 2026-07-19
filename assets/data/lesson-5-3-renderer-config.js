(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
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
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Age of Steam',
    embedUrl: 'first-and-10-topic-5-3-industrial-revolution-begins-capture.html',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.3 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Coal fields and industrial cities', detail: 'Britain\'s industrial cities cluster precisely where coal and iron ore are found: Manchester (cotton, using Midlands coal), Birmingham (metal goods, using South Staffordshire coal and iron), Sheffield (steel, using Yorkshire coal and iron), Newcastle (coal export and shipbuilding). This geographic clustering is not coincidental, coal was too heavy and cheap to transport long distances before railroads, so factories had to be near the coal. This explains why Manchester was in Lancashire rather than London: London had markets and capital, but no coal. Industrial geography was coal geography.' },
      { label: 'Canals and rivers as transportation infrastructure', detail: 'Before railroads, canals were the critical transportation infrastructure. The British canal network (built rapidly 1760s–1800s) connected coal fields to cities, cities to ports, and ports to markets. The Bridgewater Canal (1761, Manchester to the Worsley coal mines) halved the price of coal in Manchester virtually overnight, demonstrating the economic power of cheap bulk transportation. Canals also connected to rivers: the Trent and Mersey Canal joined the rivers of the Midlands to the port of Liverpool. Understanding canals helps explain WHY industrialization concentrated where it did geographically.' },
      { label: 'Manchester: case study in industrial urbanization', detail: 'Manchester is the archetypal industrial city, the first place in the world where the full consequences of industrialization were visible at scale. In 1772 it was a modest market town; by 1850 it was the second city of England. Its growth was powered entirely by cotton spinning mills powered first by water and then by steam. Friedrich Engels visited in 1842 and described what he found in The Condition of the Working Class in England (1845): workers packed into back-to-back housing without light, ventilation, or clean water; children working before dawn; rivers running with industrial effluent. Manchester was both the triumph of industrialization and its most devastating indictment.' },
      { label: 'Geographic takeaway: geography as necessary but not sufficient', detail: 'Britain\'s geographic advantages, coal deposits, rivers, coastline, were necessary but not sufficient causes of industrialization. France also had coal; Germany had coal and iron; China had both. What Britain had that these others did not was the specific combination: coal AND rivers AND capital AND political stability AND enclosure AND scientific culture AND legal infrastructure, all present at the same moment. This is the critical lesson for AP causation: multi-factor causation requires identifying not just each factor but how they interacted. The factors were not independent; each enabled and amplified the others.' }
    ]
  };

  lesson.stableImages = {
    map:             'https://commons.wikimedia.org/wiki/Special:FilePath/Casta_painting_all.jpg',
    first10:         'https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/FlorentineCodex_BK12_F54_smallpox.jpg',
    beSurreal:       'https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg',
    skill:           'https://commons.wikimedia.org/wiki/Special:FilePath/World_1700_CE.png',
    checkpoint1:     'https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg',
    evidence:        'https://commons.wikimedia.org/wiki/Special:FilePath/Columbus_Taking_Possession.jpg',
    source:          'https://commons.wikimedia.org/wiki/Special:FilePath/Loren_Mozley_Pueblo_Revolt_1680_installed_1936_ABQ_NM.jpg',
    beInTheRoom:     'https://commons.wikimedia.org/wiki/Special:FilePath/Ferdinand_Magellan.jpg',
    checkpoint2:     'https://commons.wikimedia.org/wiki/Special:FilePath/Pillar_of_Vasco_da_Gama.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-5/the-factory-commission.html',
    desc: "Testify at Manchester’s 1833 Factory Commission and decide how Britain can regulate child labor without ignoring wages, industrial competition, or enforcement."
  };

  lesson.skillBuilder = {
    label: 'Causation practice',
    title: 'Multi-Factor Causation: Why Did the Industrial Revolution Begin in Britain?',
    intro: 'Causation for Topic 5.3 requires identifying multiple factors and explaining how they interacted, not just listing causes but explaining the mechanism connecting each cause to its effect. The most common AP error is treating industrialization as having a single cause ("Britain had coal") or listing causes without explaining why each mattered. A strong causation argument demonstrates that the factors were interdependent: each enabled and amplified the others.',
    steps: [
      { label: 'Distinguish necessary from sufficient conditions', text: 'A necessary condition is one without which the outcome could not have occurred. A sufficient condition is one that, by itself, would produce the outcome. For the Industrial Revolution: coal was necessary (without coal, no steam power at this scale) but not sufficient (France and Germany had coal but industrialized later). Capital was necessary but not sufficient (the Netherlands had capital but did not industrialize first). Political stability was necessary but not sufficient (China had political stability). The combination was sufficient, any single factor removed would have changed the timing and form of industrialization. A strong AP causation argument identifies which factors were necessary and explains why the combination was sufficient.' },
      { label: 'Explain how factors interacted (the mechanism)', text: 'The best causation arguments explain mechanisms, not just what happened but how one condition produced another. Example: Enclosure Acts → displaced rural workers → urban labor supply → factory wages possible → factory owners could hire workers → factory system expanded. Or: capital from Atlantic trade → investment in machinery → Watt steam engine commercially viable → steam power freed factories from rivers → factories could locate in cities near coal → Manchester urbanized. Notice that each arrow (→) represents a mechanism. Strong AP causation arguments trace at least two or three steps in this chain rather than jumping from cause directly to "industrialization happened."' },
      { label: 'Write a multi-factor causation thesis', text: 'A strong causation thesis for Topic 5.3 identifies multiple interacting causes and explains their relationship: "The Industrial Revolution began in Britain rather than France or Germany because Britain possessed a unique combination of mutually reinforcing conditions: coal deposits located near navigable water (enabling cheap transportation), capital from Atlantic trade (enabling investment in machinery), Enclosure Acts that created an urban labor supply, and political stability that protected inventors\' profits through the patent system. No single factor was sufficient, but their combination in Britain at this moment created conditions that existed nowhere else in the 18th century." Notice how this thesis: names specific factors, explains their interaction, and addresses the comparison (why Britain rather than France or Germany).' }
    ],
    prompt: 'In 3–4 sentences, write a causation argument explaining why the Industrial Revolution began in Britain. Identify at least three specific factors and explain how two of them interacted, how did one condition enable or amplify another? End with a statement that addresses the implicit comparison: why Britain rather than France, Germany, or China?'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Why Britain? The Causes of Industrialization',
      subtitle: 'Checks Learning Target 1, multi-factor causation for why industrialization began in Britain.',
      cardDesc: 'Coal, geography, capital, enclosure, political stability, and scientific culture as interacting causes of British industrialization.',
      learningTargets: [lesson.learningTargets[0].target],
      successCriteria: [lesson.successCriteria[0].criteria],
      prompt: 'Identify four factors that explain why the Industrial Revolution began in Britain. For each factor, explain: (1) what it was, and (2) what specific role it played in enabling industrialization. Then explain how two of your four factors interacted, how did one condition enable or amplify another? End with a comparison: which one factor do you think was most important, and why?',
      responseType: 'Checkpoint 1',
      terms: ['coal', 'enclosure acts', 'capital', 'Glorious Revolution', 'patent system', 'canals', 'Royal Society', 'putting-out system', 'steam engine', 'geographic advantages'],
      focus: ['Name four factors, be specific about what each one was and how it worked.', 'Explain how two factors interacted, mechanism, not just correlation.', 'Name the most important factor and defend your choice with evidence.']
    },
    {
      title: 'Checkpoint 2: The Human Cost of Industrialization',
      subtitle: 'Checks Learning Target 2, social effects of industrialization on workers.',
      cardDesc: 'Factory system, urbanization, child labor, Luddites, and working-class resistance.',
      learningTargets: [lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[1].criteria],
      prompt: 'Describe two ways the factory system changed the experience of work compared to the domestic/putting-out system. Be specific about what was lost and what (if anything) was gained. Then explain the Luddite response: what exactly were they protesting, and why does calling them "anti-technology" mischaracterize their position? End with an argumentation statement: overall, did the first generation of factory workers experience industrialization as a benefit or a harm?',
      responseType: 'Checkpoint 2',
      terms: ['factory system', 'putting-out system', 'Manchester', 'Luddites', 'Chartism', 'child labor', 'Factory Acts', 'urbanization', 'working conditions', 'standard of living'],
      focus: ['Describe two specific changes from domestic to factory work, what exactly was different?', 'Explain the Luddite position accurately, not anti-technology, but what specifically?', 'Make a supported argumentation claim: benefit or harm for the first generation of workers?']
    }
  ];
})();
