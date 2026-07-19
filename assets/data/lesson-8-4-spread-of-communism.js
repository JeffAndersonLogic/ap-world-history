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
    unit: "Unit 8: Cold War and Decolonization",
    topic: "Topic 8.4",
    title: "Spread of Communism After 1900",
    subtitle: "How internal crisis, foreign aggression, and the drive to redistribute land and resources fueled communist and socialist movements across China, Africa, Asia, and Latin America",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how internal tension and Japanese aggression contributed to the Chinese communists' seizure of power and communist revolution in 1949.",
      kc: "KC-6.2.I.i",
      theme: "Economic Systems"
    },
    {
      target: "I can explain the consequences of communist government control of China's national economy through the Great Leap Forward, including repressive policies and negative repercussions for the population.",
      kc: "KC-6.3.I.A.ii",
      theme: "Economic Systems"
    },
    {
      target: "I can explain the causes and effects of movements to redistribute land and resources within states in Africa, Asia, and Latin America, including those advocating communism or socialism.",
      kc: "KC-6.2.II.D.i",
      theme: "Social Interactions and Organization"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain how the collapse of the Qing dynasty, warlordism, nationalist struggle, and Japanese aggression created the conditions in which the Chinese Communist Party (CCP) defeated the Kuomintang (KMT) and established the People's Republic of China in 1949.",
      kc: "KC-6.2.I.i",
      theme: "Economic Systems"
    },
    {
      criteria: "I can explain how the Great Leap Forward (1958–1962), including collectivization, backyard steel furnaces, and inflated production reporting, represented communist government control of the national economy, and I can explain the resulting famine and social disruption as negative repercussions for the population.",
      kc: "KC-6.3.I.A.ii",
      theme: "Economic Systems"
    },
    {
      criteria: "I can explain the causes and effects of at least two of the four CED land/resource redistribution examples, Communist Revolution for Vietnamese independence, Mengistu Haile Mariam in Ethiopia, land reform in Kerala and other states within India, and the White Revolution in Iran, identifying both the path to redistribution and its effects on political and social order.",
      kc: "KC-6.2.II.D.i",
      theme: "Social Interactions and Organization"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "Thematic Focus, Economic Systems (ECN)",
      theme: "Economic Systems",
      text: "Economic Systems",
      illustrativeExamples: []
    },
    {
      code: "Unit 8: Learning Objective D",
      theme: "Learning Objective",
      text: "Explain the causes and consequences of China's adoption of communism.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.I.i",
      theme: "Economic Systems",
      text: "As a result of internal tension and Japanese aggression, Chinese communists seized power. These changes in China eventually led to communist revolution.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.3.I.A.ii",
      theme: "Economic Systems",
      text: "In communist China, the government controlled the national economy through the Great Leap Forward, often implementing repressive policies, with negative repercussions for the population.",
      illustrativeExamples: []
    },
    {
      code: "Thematic Focus, Social Interactions and Organization (SIO)",
      theme: "Social Interactions and Organization",
      text: "Social Interactions and Organization",
      illustrativeExamples: []
    },
    {
      code: "Unit 8: Learning Objective E",
      theme: "Learning Objective",
      text: "Explain the causes and effects of movements to redistribute economic resources.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.II.D.i",
      theme: "Social Interactions and Organization",
      text: "Movements to redistribute land and resources developed within states in Africa, Asia, and Latin America, sometimes advocating communism or socialism.",
      illustrativeExamples: [
        "Land and resource redistribution: Communist Revolution for Vietnamese independence",
        "Land and resource redistribution: Mengistu Haile Mariam in Ethiopia",
        "Land and resource redistribution: Land reform in Kerala and other states within India",
        "Land and resource redistribution: White Revolution in Iran"
      ]
    }
  ],

  lecture: {
    title: "Spread of Communism After 1900: China, the Great Leap Forward, and Redistribution Beyond",
    intro: "Use these cards to trace why China turned communist, what consequences followed from the state's control of its national economy, and how redistribution movements in Vietnam, Ethiopia, India, and Iran show the range of paths through which communism and socialism reshaped the post-1900 world.",
    videos: [
      {
        title: "Heimler's History — Topic 8.4: Spread of Communism After 1900",
        url: "https://youtu.be/FmI-Zfsk7ok",
        youtubeId: "FmI-Zfsk7ok",
        prompt: "Use this clip to review the causes of China's communist revolution and the consequences of the Great Leap Forward. Listen especially for how ideology-driven economic control produced repressive policies and negative repercussions for the Chinese population."
      }
    ],
    segments: [
      {
        title: "Why China Turned Communist",
        bullets: [
          "The fall of the Qing dynasty (1912) left China without a stable government and began decades of internal crisis. Warlords divided the country; the **Kuomintang (KMT)** under Sun Yat-sen and later Chiang Kai-shek struggled to unify it. The **Chinese Communist Party (CCP)** was founded in 1921, beginning a decades-long struggle between two competing visions for China's future.",
          "**Japanese aggression**, the invasion of Manchuria (1931), the Marco Polo Bridge Incident (1937), and the full-scale Second Sino-Japanese War (1937–1945), created the conditions that made communist revolution possible. The KMT government bore primary responsibility for fighting Japan and suffered catastrophic losses. The CCP, operating from the countryside and Yan'an, built popular support through land redistribution promises and resistance organizing.",
          "The **Long March (1934–1935)**, the CCP's 6,000-mile retreat from KMT encirclement, became the founding myth of Chinese communism. **Mao Zedong** consolidated leadership during the Long March and emerged as the dominant figure within the party.",
          "After Japan's defeat in 1945, civil war resumed immediately. The KMT, weakened by years of fighting Japan and corrupt governance, lost ground rapidly. In **1949, Mao Zedong proclaimed the People's Republic of China** from Tiananmen Square. The KMT retreated to Taiwan. China, the world's most populous country, had become communist.",
          "The causes of the communist seizure of power were structural: **internal tension** (political fragmentation, warlordism, failed KMT governance, peasant land hunger) combined with **Japanese aggression** (which devastated the government while the CCP built rural networks) to produce the conditions for revolution. The CED captures this causation exactly: 'As a result of internal tension and Japanese aggression, Chinese communists seized power.'"
        ],
        image: {
          title: "Mao Zedong proclaims the People's Republic of China, 1949",
          caption: "On October 1, 1949, Mao Zedong proclaimed the founding of the People's Republic of China from Tiananmen Gate, the culmination of decades of internal tension and anti-Japanese struggle.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mao_proclaiming_PRC.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Mao_proclaiming_PRC.jpg"
        }
      },
      {
        title: "The Great Leap Forward",
        bullets: [
          "The **Great Leap Forward (1958–1962)** was Mao's attempt to rapidly transform China from an agrarian economy into a socialist industrial powerhouse, within a single generation. It represents the CED's key concept directly: communist government control of the national economy, with repressive policies and negative repercussions for the population.",
          "**Agricultural collectivization** reorganized Chinese villages into massive **people's communes**, collective units that replaced family farming with state-directed agricultural production. Communes were expected to meet centrally-set grain quotas and simultaneously produce industrial goods.",
          "The signature policy was the **backyard steel furnace campaign**: every commune was to produce steel, with families melting down metal implements, including farm tools, cooking pots, and door hinges, to meet production targets. The resulting steel was generally unusable brittle pig iron. Meanwhile, the loss of agricultural tools contributed directly to the crop failures that followed.",
          "**Production reporting became catastrophically distorted**. Local and provincial officials competed to report record harvests, often falsifying figures by factors of two, three, or more, to demonstrate ideological commitment and avoid being labeled rightists after the **Lushan Conference (1959)**, when Defense Minister **Peng Dehuai** was purged for criticizing the Leap. Officials who reported honest figures faced the same fate.",
          "Inflated reporting drove inflated **grain procurement quotas**: the state extracted grain based on reported harvests, not actual ones. Villages that had surrendered their real surplus, and their seed grain, starved. The resulting **Great Chinese Famine (1959–1961)** killed an estimated 15–55 million people in what remains the deadliest famine in recorded history. The Great Leap Forward is the CED's 'negative repercussions for the population' operating at catastrophic scale."
        ],
        image: {
          title: "Great Leap Forward — backyard steel furnace, 1958",
          caption: "During the Great Leap Forward, Chinese communes operated thousands of backyard steel furnaces, melting down household implements to meet centrally mandated production targets. The resulting steel was largely unusable while agricultural production collapsed.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Great_Leap_Forward_backyard_steel.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Great_Leap_Forward_backyard_steel.jpg"
        }
      },
      {
        title: "Redistribution Beyond China",
        bullets: [
          "**Communist Revolution for Vietnamese independence**: Ho Chi Minh's **Viet Minh** combined anti-colonial nationalism with communist ideology, fighting French colonialism while promising land redistribution to Vietnamese peasants. The **First Indochina War (1946–1954)** ended with the defeat of France at Dien Bien Phu and the division of Vietnam at the 17th parallel. Land redistribution was central to the revolution's appeal: the Viet Minh mobilized rural support by promising to break up landlord-held estates.",
          "**Mengistu Haile Mariam in Ethiopia**: the **Derg**, a Marxist military junta, overthrew Emperor Haile Selassie in 1974 and nationalized land and industry under Mengistu. Land redistribution broke up large estates, abolished the traditional tenancy system, and eliminated the power of the landed aristocracy. The government's collectivization drive and its brutal suppression of opponents (the **Red Terror**, 1977–1978) produced civil war and famine that killed hundreds of thousands.",
          "**Land reform in Kerala and other states within India**: the **Communist Party of India** won state elections in Kerala in 1957, the first democratically elected communist government in the world, and implemented sweeping **land reform legislation** redistributing holdings from large landlords to tenant farmers. Unlike China or Ethiopia, Kerala's redistribution operated through democratic institutions, producing significant improvements in landless laborers' conditions without civil war. Other Indian states pursued similar reforms in the 1950s–1970s.",
          "**White Revolution in Iran**: Shah Mohammad Reza Pahlavi launched the **White Revolution** in 1963, a top-down modernization and land redistribution program partly designed to preempt communist rural organizing and demonstrate to the Kennedy administration that Iran was reforming. Land reform broke up large religious and aristocratic landholdings. But the disruption of traditional agricultural structures and the social displacement caused by rapid urbanization contributed to the tensions that produced the **Iranian Revolution of 1979**.",
          "**The range matters**: these four CED examples show that redistribution movements took revolutionary (Vietnam), military-junta (Ethiopia), democratic-electoral (Kerala/India), and monarchical top-down (Iran) forms. The causes varied; so did the effects. What they share is that land and resource redistribution, whether communist, socialist, or nationalist, became one of the defining political struggles of the post-1900 world across Africa, Asia, and Latin America."
        ],
        image: {
          title: "Ho Chi Minh, Vietnamese independence leader",
          caption: "Ho Chi Minh combined Vietnamese nationalism with communist ideology, mobilizing peasant support through promises of land redistribution while fighting French colonialism in the First Indochina War (1946–1954).",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ho_Chi_Minh_1946.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_1946.jpg"
        }
      }
    ]
  },

  map: {
    title: "Communist and Redistribution Movements, 1900–1979",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Communist_world_1983.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Communist_world_1983.png",
    caption: "Communist and socialist states at peak Cold War spread, showing the geographic range of movements to redistribute land and resources across Africa, Asia, and Latin America.",
    intro: "Use the map to trace the geographic spread of communist and socialist movements after 1900. China, Vietnam, Ethiopia, and the wider pattern of redistribution movements show how the ideological conflict of the Cold War era intersected with the drive for economic transformation across the postcolonial world.",
    prompt: "What geographic pattern do you notice in the spread of communist and redistribution movements? What does the distribution of these movements across Asia, Africa, and Latin America suggest about the relationship between communism and decolonization?",
    notes: [
      "China (1949): the world's most populous country turned communist, a result of internal tension and Japanese aggression, per KC-6.2.I.i.",
      "Vietnam (1954/1975): communist revolution combined independence and land redistribution; division at the 17th parallel became a Cold War proxy battleground.",
      "Ethiopia (1974): Mengistu's Derg land reform and nationalization represented a military-junta path to redistribution in sub-Saharan Africa.",
      "India/Kerala (1957): the Communist Party of India won state elections, demonstrating a democratic electoral path to land redistribution within a non-communist state.",
      "Iran (1963): the White Revolution represented a top-down, monarchical path to land redistribution, driven partly by fear of communist organizing and American pressure."
    ]
  },

  first10: {
    title: "First & 10: Spread of Communism After 1900",
    embedUrl: "first-and-10-topic-8-4-spread-of-communism-capture.html?v=20260610"
  },

  images: [
    {
      title: "Great Leap Forward propaganda poster, 1958",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/GLF_poster.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:GLF_poster.jpg",
      caption: "A Great Leap Forward propaganda poster (1958) celebrates the simultaneous drive for agricultural and industrial production, imagery that contrasted sharply with the famine unfolding in Chinese villages.",
      prompt: "What does this propaganda poster reveal about how the CCP government exercised control of the national economy during the Great Leap Forward? How does the imagery relate to the CED's description of 'repressive policies with negative repercussions for the population'?"
    },
    {
      title: "Ho Chi Minh and Viet Minh forces, 1950s",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ho_Chi_Minh_1946.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Ho_Chi_Minh_1946.jpg",
      caption: "Ho Chi Minh led the Viet Minh in combining anti-colonial nationalism with communist land redistribution promises, mobilizing Vietnamese peasants against French colonial rule.",
      prompt: "How does the Vietnamese case illustrate the relationship between communist revolution and land redistribution? What made redistribution promises an effective tool for building rural support for the Viet Minh?"
    },
    {
      title: "Shah Mohammad Reza Pahlavi announces White Revolution, 1963",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/White_Revolution_Iran.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:White_Revolution_Iran.jpg",
      caption: "Shah Mohammad Reza Pahlavi launched the White Revolution in 1963, a top-down land reform program that redistributed holdings from large landlords, partly to preempt communist organizing and satisfy American pressure for modernization.",
      prompt: "How does the White Revolution in Iran differ from redistribution in Vietnam or Kerala? What does a monarchical, top-down path to land reform reveal about the range of motivations and methods behind resource redistribution movements?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Redistribution and Its Consequences",
    task: "Choose one image and explain what it reveals about the causes or effects of communist and socialist redistribution movements. Your response should connect the image to at least one of the four CED illustrative examples and explain what the case reveals about the range of paths through which land and resource redistribution occurred.",
    prompt: "This image shows... It is evidence of [choose: communist revolution / state economic control / land redistribution / repressive policies] because... Compared to other redistribution cases, this reveals..."
  },

  primarySource: {
    title: "Primary Source: Mao Zedong, 'On the People's Democratic Dictatorship' (June 30, 1949)",
    intro: "On June 30, 1949, three months before proclaiming the People's Republic of China, Mao Zedong published 'On the People's Democratic Dictatorship.' The essay explained why China needed communist government and what that government would do with state power. It was both a statement of ideology and a governing blueprint. For AP analysis, the text reveals the causes of China's communist revolution (the ideological argument that made communism necessary) and the logic that would drive the consequences (including the economic policies of the Great Leap Forward, which followed the same logic of state control applied at maximum intensity). Mao's framing is important for the AP skill of sourcing: who wrote this, for what purpose, and what does the perspective reveal?",
    text: "The Chinese people have had considerable experience of the democratic system of the West and know that it is nothing but another name for the dictatorship of the bourgeoisie. So-called 'democracy' serves only the capitalists; it does not serve the working people. The Communist Party of China agrees with the political stand, principles, and policies put forward by Marx, Engels, Lenin, and Stalin and uses the Marxist-Leninist view of world affairs as the telescopic sight with which to observe the destiny of mankind and to judge our own destiny. The people's democratic dictatorship needs the leadership of the working class. For it is only the working class that is most far-sighted, most selfless, and most thoroughly revolutionary. The entire history of revolution proves that without the leadership of the working class, revolution fails; with the leadership of the working class, revolution triumphs.",
    questions: [
      "How does Mao frame the relationship between communism and Western democracy? What causes, rooted in China's historical experience, does he offer to justify communist revolution?",
      "Mao describes 'the working class' as 'most far-sighted, most selfless, and most thoroughly revolutionary.' How does this framing explain the logic behind the Great Leap Forward's economic policies, including the authority the party claimed over agricultural and industrial production?",
      "How might a peasant in Henan Province in 1959, during the famine caused by the Great Leap Forward's requisition policies, read this 1949 text differently from how Mao intended it to be read? What does the gap between the text's promises and the famine's reality reveal about KC-6.3.I.A.ii?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: Melting the Future",
    desc: "During the Great Leap Forward, Chinese communes were ordered to produce steel, so families melted down their farming tools and cooking pots.",
    intro: "In 1958, China's county party secretaries received production targets they had never seen before: steel, grain, and industrial output all to be multiplied within months.",
    detail: "The Great Leap Forward's steel campaign asked Chinese communes to meet industrial production quotas with no industrial equipment. The solution was the 'backyard furnace', clay and brick kilns built in village courtyards, fired by wood from local forests. Families contributed metal: door hinges, plowshares, woks, and cookware were melted down to meet the quota. What emerged was brittle pig iron, largely useless for construction or manufacturing. The forests were stripped. The farming tools were gone. The harvest rotted in fields that could not be plowed. The reported steel output reached record levels. The actual steel was piled in fields and rusted. The famine that followed was not caused by a drought, it was caused by arithmetic: quotas extracted from villages based on reported harvests that existed only on paper.",
    prompt: "What does the backyard steel campaign reveal about how the CCP government exercised 'control of the national economy through the Great Leap Forward'? Why would a government pursue a policy whose outcomes, melting farm tools to make useless steel, were visibly counterproductive?"
  },

  skillBuilder: {
    label: "Causation/Comparison practice",
    title: "Classify the Redistribution Cases: Causes and Effects",
    intro: "AP Learning Objective E asks you to 'explain the causes and effects of movements to redistribute economic resources.' This topic shows four different paths to redistribution. AP Skill Builder for 8.4 combines causation (what drove each movement?) and comparison (how did the causes and effects differ across cases?). Fill in the chart logic below for each of the four CED examples.",
    steps: [
      { label: "Vietnam (Communist Revolution)", text: "Cause: colonial occupation by France + rural land hunger. Path: armed communist revolution (Viet Minh). Effect: independence, land redistribution to peasants, partition at 17th parallel, sets up Cold War proxy conflict. Classification: revolutionary redistribution driven by anti-colonialism." },
      { label: "Ethiopia (Mengistu and the Derg)", text: "Cause: imperial inequality under Haile Selassie + military coup (1974). Path: Marxist military junta nationalization. Effect: land redistribution AND Red Terror, civil war, famine. Classification: military-junta redistribution driven by Marxist ideology and military seizure of power." },
      { label: "India/Kerala (Communist Party electoral victory)", text: "Cause: extreme landlord-tenant inequality, communist electoral mobilization. Path: democratic election → land reform legislation (1957). Effect: redistribution without revolution, significant gains for tenant farmers. Classification: democratic-electoral redistribution within a capitalist state." },
      { label: "Iran (White Revolution)", text: "Cause: U.S. pressure for modernization + fear of communist rural organizing. Path: top-down royal decree by the Shah (1963). Effect: redistribution that disrupted traditional land structures, contributing to tensions that produced the 1979 revolution. Classification: monarchical top-down redistribution to prevent communist revolution." }
    ],
    prompt: "Using the four cases above, write a causation argument in two or three sentences: explain at least one similarity and one difference in the causes of redistribution movements across these examples, and explain at least one effect that redistribution produced, drawing on at least two specific cases."
  }

};
