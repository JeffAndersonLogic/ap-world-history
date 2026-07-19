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
    topic: "Topic 8.7",
    title: "Global Resistance to Established Power Structures After 1900",
    subtitle: "How groups and individuals challenged the wars of the century through nonviolence, how militarized states responded in ways that intensified conflict, and how some movements used violence against civilians to achieve political aims",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how groups and individuals, such as Mohandas Gandhi, Martin Luther King Jr., and Nelson Mandela, challenged the wars of the century and promoted nonviolence as a way to bring about political change.",
      kc: "KC-6.2.V.A",
      theme: "Cultural Developments and Interactions"
    },
    {
      target: "I can explain how militaries and militarized states responded to the proliferation of conflicts in ways that further intensified conflict.",
      kc: "KC-6.2.V.C",
      theme: "Cultural Developments and Interactions"
    },
    {
      target: "I can explain how some movements used violence against civilians in an effort to achieve political aims.",
      kc: "KC-6.2.V.D",
      theme: "Cultural Developments and Interactions"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain how at least two of the three named individuals, Gandhi, Martin Luther King Jr., and Nelson Mandela, specifically promoted nonviolence as a method for political change, naming the specific campaigns, strategies, or contexts involved and explaining why nonviolence was a deliberate strategic choice rather than mere passivity.",
      kc: "KC-6.2.V.A",
      theme: "Cultural Developments and Interactions"
    },
    {
      criteria: "I can explain how at least two of the four CED examples of militarized-state responses, Chile under Pinochet, Spain under Franco, Uganda under Idi Amin, or the buildup of the military–industrial complex and weapons trading, illustrate how militarized responses to conflict intensified rather than resolved it.",
      kc: "KC-6.2.V.C",
      theme: "Cultural Developments and Interactions"
    },
    {
      criteria: "I can explain how the Shining Path and Al-Qaeda each used violence against civilians in pursuit of political aims, distinguishing these movements analytically from both nonviolent resistance (KC-6.2.V.A) and state repression (KC-6.2.V.C).",
      kc: "KC-6.2.V.D",
      theme: "Cultural Developments and Interactions"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "Thematic Focus, Cultural Developments and Interactions (CDI)",
      theme: "Cultural Developments and Interactions",
      text: "Cultural Developments and Interactions",
      illustrativeExamples: []
    },
    {
      code: "Unit 8: Learning Objective I",
      theme: "Learning Objective",
      text: "Explain various reactions to existing power structures in the period after 1900.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.V",
      theme: "Cultural Developments and Interactions",
      text: "Although conflict dominated much of the 20th century, many individuals and groups, including states, opposed this trend. Some individuals and groups, however, intensified the conflicts.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.V.A",
      theme: "Cultural Developments and Interactions",
      text: "Groups and individuals challenged the many wars of the century, and some, such as Mohandas Gandhi, Martin Luther King Jr., and Nelson Mandela, promoted the practice of nonviolence as a way to bring about political change.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.V.C",
      theme: "Cultural Developments and Interactions",
      text: "Militaries and militarized states often responded to the proliferation of conflicts in ways that further intensified conflict.",
      illustrativeExamples: [
        "Chile under Augusto Pinochet",
        "Spain under Francisco Franco",
        "Uganda under Idi Amin",
        "The buildup of the military–industrial complex and weapons trading"
      ]
    },
    {
      code: "KC-6.2.V.D",
      theme: "Cultural Developments and Interactions",
      text: "Some movements used violence against civilians in an effort to achieve political aims.",
      illustrativeExamples: [
        "Shining Path",
        "Al-Qaeda"
      ]
    }
  ],

  lecture: {
    title: "Global Resistance to Established Power Structures After 1900",
    intro: "Use these cards to trace the full spectrum of reactions to power structures in the 20th century, from principled nonviolence to militarized state repression to movements that targeted civilians. The AP skill is not to equate these reactions but to explain each one's logic, context, and consequences.",
    videos: [
      {
        title: "Heimler's History — Topic 8.7: Global Resistance to Power",
        url: "https://youtu.be/placeholder-8-7",
        youtubeId: "placeholder-8-7",
        prompt: "Use this clip to review the three CED categories of reaction to power structures: nonviolent challenge (Gandhi, MLK, Mandela), militarized-state response (Pinochet, Franco, Amin, military-industrial complex), and movements using violence against civilians (Shining Path, Al-Qaeda). Focus on what distinguishes the three categories, not just who did what, but how the method connects to the goal."
      }
    ],
    segments: [
      {
        title: "The Nonviolent Challenge",
        bullets: [
          "KC-6.2.V.A names three individuals who promoted nonviolence as a method for political change: **Mohandas Gandhi**, **Martin Luther King Jr.**, and **Nelson Mandela**. The CED frames them as part of a broader pattern of groups and individuals who challenged the wars and power structures of the 20th century. For the AP exam, the key is not just knowing who they were but explaining nonviolence as a deliberate strategic choice, a method with its own theory of how political change happens, not simply a refusal to use force.",
          "**Mohandas Gandhi** developed **satyagraha**, 'truth-force' or 'soul-force', in South Africa between 1906 and 1915, before bringing it to India. Satyagraha was not passive resistance; it was active noncooperation designed to make British colonial rule ungovernable. The **Salt March of 1930** was Gandhi's most celebrated application of the method: a 240-mile walk to the sea to make salt illegally, directly defying British tax law and inviting arrest. The strategy worked by making the cost of maintaining colonial authority, arresting peaceful marchers, beating protesters before the world press, higher than the cost of political concessions. Gandhi's method influenced independence movements across the world because it could be used by movements without armies or economic power: discipline, moral clarity, and public suffering were the weapons.",
          "**Martin Luther King Jr.** explicitly built his civil rights strategy on the Gandhian method. After studying Gandhi's work and visiting India in 1959, King brought satyagraha into the American civil rights movement. The **Montgomery Bus Boycott (1955–1956)**, a year-long refusal by Black residents to ride segregated buses, demonstrated that organized economic pressure combined with disciplined nonviolence could force change. King's leadership through the **Birmingham Campaign (1963)**, where police used fire hoses and dogs against peaceful protesters, produced images that shocked the nation and pushed Congress toward the Civil Rights Act of 1964. King framed nonviolence not just as strategy but as moral witness: the willingness to suffer violence without retaliating forced the nation to confront the injustice it was defending.",
          "**Nelson Mandela** and the **African National Congress (ANC)** presented a more complex case. The ANC's history was explicitly nonviolent from its founding in 1912 through the 1950s, the **Defiance Campaign of 1952** was a Gandhian-inspired campaign of noncooperation with apartheid's pass laws. But after the **Sharpeville Massacre of 1960**, when South African police killed 69 Black protesters, the apartheid state banned the ANC and arrested its leadership. Mandela and others concluded that strict nonviolence could no longer be maintained as the exclusive strategy, and **Umkhonto we Sizwe (MK)**, the ANC's military wing, was formed in 1961, committed initially to sabotage of infrastructure rather than attacks on people. Mandela was arrested in 1962 and sentenced to life imprisonment in 1964 at the **Rivonia Trial**. He served 27 years on Robben Island. Released in 1990, he negotiated the transition to democracy, winning the Nobel Peace Prize with F.W. de Klerk in 1993 and becoming South Africa's first democratically elected President in 1994. The CED names Mandela in KC-6.2.V.A because his overall legacy is the promotion of political change through a method that prioritized negotiation, moral authority, and reconciliation, but students should also understand that the ANC's resistance was never as simple as pure nonviolence.",
          "**The shared logic of nonviolent resistance:** All three examples share a theory of political change: moral witness, disciplined noncooperation, and making the costs of repression visible to the world (and to domestic audiences who might otherwise ignore injustice). The method depends on the opponent having some sensitivity to international or domestic opinion, which is why it worked against British colonialism and American segregation, and why Mandela's ultimate success required decades of both internal resistance and international pressure."
        ],
        image: {
          title: "Martin Luther King Jr., Birmingham Campaign, 1963",
          caption: "Birmingham, Alabama, 1963: Bull Connor's police use fire hoses against peaceful civil rights marchers. The images, broadcast nationally and internationally, accelerated the passage of the Civil Rights Act of 1964, illustrating how nonviolent resistance works by making the cost of repression visible.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Birmingham_campaign.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Birmingham_campaign.jpg"
        }
      },
      {
        title: "States That Answered with Force",
        bullets: [
          "KC-6.2.V.C identifies a different kind of reaction to conflict: militaries and militarized states that responded in ways that **further intensified conflict** rather than resolving it. The four CED examples span different continents and eras but share a common dynamic: state power deployed against perceived internal enemies in ways that produced more violence, more repression, and deeper polarization.",
          "**Chile under Augusto Pinochet** (1973–1990): On September 11, 1973, a military coup backed by the CIA and American business interests overthrew the democratically elected socialist government of Salvador Allende. General Pinochet's military junta immediately detained, tortured, and executed thousands of Allende supporters, estimates range from 3,000 killed to approximately 40,000 tortured and detained. Political parties were banned; trade unions were suppressed; thousands went into exile. Pinochet's regime also implemented radical free-market economic reforms (the 'Chicago Boys') under the cover of military repression, making Chile a laboratory for neoliberal economics and political repression simultaneously. For the AP, Pinochet illustrates KC-6.2.V.C because the military response to Allende's elected socialist government intensified political conflict into state terror rather than resolving the underlying political debate.",
          "**Spain under Francisco Franco** (1939–1975): Franco's Nationalist movement won the **Spanish Civil War** (1936–1939) with the military support of Nazi Germany and Fascist Italy, and immediately used its victory to consolidate authoritarian rule. The regime executed an estimated 30,000–150,000 Republican opponents in the postwar period and imprisoned hundreds of thousands more. Political opposition was crushed; regional languages and identities (Basque, Catalan) were suppressed. Franco's Spain provides a European case of how military victory in a civil conflict was followed by decades of state repression that prevented reconciliation and deepened social divisions that persisted long after his death.",
          "**Uganda under Idi Amin** (1971–1979): Amin came to power in a military coup in January 1971, overthrowing the elected government of Milton Obote. His regime was characterized by arbitrary state violence against perceived enemies, ethnic purges, the expulsion of Uganda's South Asian community in 1972, and the systematic murder of political opponents and ethnic minorities. Estimates of deaths under Amin range from 100,000 to 500,000. His regime illustrates KC-6.2.V.C because military state power was used not to resolve political conflict but to generate and intensify it through unpredictable terror and ethnic persecution.",
          "**The buildup of the military–industrial complex and weapons trading** represents a structural form of conflict intensification. The term 'military–industrial complex' was coined by President Dwight Eisenhower in his 1961 farewell address, a warning that the interlocking relationship between the U.S. military and the defense industry created institutional incentives for continued military spending and conflict. The global weapons trade distributed the material capacity for violence across the world: Cold War superpowers supplied weapons to proxy states and movements; arms industries in major powers depended on conflict for their markets. This structural dynamic meant that even when political leaders sought peace, the economic and institutional weight of the military–industrial complex pushed in the other direction, making conflict more likely and more lethal by continuously expanding the supply of weapons available to combatants."
        ],
        image: {
          title: "Chilean military coup, September 11, 1973",
          caption: "La Moneda presidential palace under military bombardment during the September 11, 1973 coup that brought Pinochet to power in Chile. The democratically elected socialist government of Salvador Allende was overthrown; Allende died during the coup. The regime that followed detained and tortured tens of thousands.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Moneda_1973.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Moneda_1973.jpg"
        }
      },
      {
        title: "Violence Against Civilians",
        bullets: [
          "KC-6.2.V.D identifies a third category of reaction to existing power structures: movements that used **violence against civilians** in an effort to achieve political aims. The CED lists two illustrative examples, **Shining Path** and **Al-Qaeda**. For the AP exam, the skill is analytical, not moral: explain what these movements were trying to achieve, what methods they used, and how targeting civilians was connected to their theory of political change. The analytical distinction from the other KC categories is important: these were not state responses (like Pinochet or Amin), nor were they principled nonviolent challenges (like Gandhi or MLK), they were non-state movements that deliberately targeted civilian populations as part of their strategy.",
          "**Shining Path** (Sendero Luminoso) was a Maoist insurgency in Peru, founded in the 1970s by philosophy professor **Abimael Guzmán** at the National University of San Cristóbal de Huamanga. Guzmán believed that a revolutionary 'people's war' could overthrow the Peruvian state and establish a communist society, and that targeting both the state and civilians seen as collaborators was necessary to the revolution. Shining Path launched its armed campaign in 1980, the same day Peru returned to democratic elections, deliberately framing its violence as opposition to liberal democracy. The movement committed massacres in rural indigenous communities it deemed insufficiently revolutionary, assassinated politicians and NGO workers, bombed urban infrastructure, and sent car bombs into Lima. The Peruvian state's military response was itself brutal, with security forces responsible for a significant portion of the estimated 70,000 deaths of the conflict. Guzmán was captured in 1992, after which the movement declined sharply. Shining Path illustrates KC-6.2.V.D because its violence was directed at civilians as a deliberate political strategy, to create conditions for revolution by destroying the legitimacy of the state and eliminating perceived class enemies.",
          "**Al-Qaeda** ('the Base') was a transnational Islamist network founded by **Osama bin Laden** in the late 1980s, initially in the context of the anti-Soviet Afghan war. Al-Qaeda's stated political aims were the withdrawal of U.S. military forces from Muslim-majority countries (particularly Saudi Arabia) and the overthrow of what it characterized as apostate regimes in the Arab world. Its method was spectacular attacks on civilian and symbolic targets to achieve these political aims, the **1998 U.S. Embassy bombings** in Kenya and Tanzania, the **2000 bombing of the USS Cole** in Yemen, and most consequentially the **September 11, 2001 attacks** that killed approximately 3,000 people in the United States. The September 11 attacks produced a U.S. military response, the invasion of Afghanistan (2001) and Iraq (2003), that Al-Qaeda's leadership calculated would overextend American power and generate Muslim opposition to U.S. presence in the region. For the AP, Al-Qaeda illustrates KC-6.2.V.D because it was a non-state transnational movement that used attacks on civilians as the primary instrument for achieving political goals, distinct from state repression and from principled nonviolent resistance.",
          "**The analytical distinction:** All three categories in KC-6.2.V describe reactions to existing power structures, but they differ fundamentally in method and in relationship to civilian populations. Nonviolent resisters (KC-6.2.V.A) sought change through moral witness, disciplined suffering, and political pressure without harming civilians. Militarized states (KC-6.2.V.C) used institutional force, armies, police, detention systems, against political opponents, often in ways that extended to civilians. Movements in KC-6.2.V.D used civilian targeting as an instrument of political strategy, not a by-product of conflict. The AP exam rewards students who can make these distinctions with evidence, and who can recognize that some cases (like Mandela's ANC) complicate neat categorization."
        ],
        image: {
          title: "Shining Path mural, Peru",
          caption: "A Shining Path propaganda mural in Peru. The Maoist insurgency, active from 1980 through the 1990s, combined attacks on the state with violence against civilians it deemed insufficiently revolutionary. The conflict killed an estimated 70,000 people; both Shining Path and the Peruvian security forces committed atrocities.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Sendero_Luminoso_mural.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Sendero_Luminoso_mural.jpg"
        }
      }
    ]
  },

  map: {
    title: "Global Resistance to Power Structures, 1900–Present",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:World_map_blank_without_borders.png",
    caption: "Map the locations of the CED examples across three categories: nonviolent resistance (India, United States, South Africa), militarized state repression (Chile, Spain, Uganda; global military-industrial complex), and movements using violence against civilians (Peru, global Al-Qaeda network).",
    intro: "Use the map to place the CED examples geographically. As you examine each location, consider: what existing power structure was being challenged, and how did geography and context shape which method of resistance emerged?",
    prompt: "Why do you think the three CED categories of reaction, nonviolent challenge, militarized state response, and violence against civilians, appear in different regions and contexts? What factors in each case help explain why that particular method emerged rather than others?",
    notes: [
      "India: Gandhi's satyagraha and the independence movement, nonviolent resistance that eventually forced British withdrawal in 1947.",
      "United States: Martin Luther King Jr. and the civil rights movement, Gandhian nonviolence applied to challenge legal segregation in the American South.",
      "South Africa: Nelson Mandela and the ANC, a decades-long resistance to apartheid that began as strictly nonviolent and developed an armed wing (MK) after the Sharpeville Massacre (1960).",
      "Chile: Augusto Pinochet's military regime (1973–1990), coup against elected socialist government, followed by systematic detention, torture, and execution of opponents.",
      "Spain: Francisco Franco's authoritarian rule (1939–1975), victory in the Spanish Civil War consolidated through decades of political repression.",
      "Uganda: Idi Amin's military regime (1971–1979), characterized by ethnic purges, mass killings of perceived enemies, and the expulsion of Uganda's South Asian community.",
      "Peru: Shining Path (Sendero Luminoso), Maoist insurgency (1980s–1990s) using violence against both state and civilian targets to pursue revolution.",
      "Global: Al-Qaeda, transnational network using attacks on civilian targets to achieve political aims; most consequentially the September 11, 2001 attacks on the United States."
    ]
  },

  first10: {
    title: "First & 10: Global Resistance to Established Power Structures After 1900",
    embedUrl: "first-and-10-topic-8-7-global-resistance-capture.html?v=20260610"
  },

  images: [
    {
      title: "Gandhi leading the Salt March, 1930",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gandhi_salt_march.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gandhi_salt_march.jpg",
      caption: "Mohandas Gandhi leading the Salt March, March 1930, a 240-mile walk to the sea to make salt illegally in defiance of British colonial tax law. Gandhi's strategic nonviolence was designed to make the cost of colonial authority higher than the cost of political concessions.",
      prompt: "What does Gandhi's choice to march to make salt reveal about how nonviolence works as a political strategy? How does this image illustrate the difference between nonviolence as moral stance and nonviolence as deliberate method for producing political change?"
    },
    {
      title: "Nelson Mandela released from Victor Verster Prison, 1990",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Nelson_Mandela_1990.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Nelson_Mandela_1990.jpg",
      caption: "Nelson Mandela leaving Victor Verster Prison on February 11, 1990, after 27 years of imprisonment. Mandela's release marked the beginning of negotiations that ended apartheid and led to South Africa's first democratic elections in 1994.",
      prompt: "How does Mandela's release after 27 years of imprisonment illustrate the long-term logic of resistance, that political change can be achieved through sustained pressure over decades rather than immediate victory? What does this suggest about nonviolence as a strategy for change against a deeply entrenched power structure?"
    },
    {
      title: "Eisenhower's farewell address, January 1961",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Eisenhower_farewell_address.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Eisenhower_farewell_address.jpg",
      caption: "President Dwight D. Eisenhower delivering his farewell address on January 17, 1961, in which he coined the phrase 'military-industrial complex' and warned of the dangers of an arms economy that gave institutional interests an incentive to perpetuate conflict.",
      prompt: "Why is it significant that the warning about the military-industrial complex came from a five-star general and former Supreme Allied Commander? What does Eisenhower's perspective reveal about how structural forces can intensify conflict even when individual leaders seek peace?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Methods of Resistance",
    task: "Choose one image from the lesson and explain what it reveals about reactions to existing power structures after 1900. Your response should: (1) identify which CED category the image's subject belongs to (KC-6.2.V.A, KC-6.2.V.C, or KC-6.2.V.D); (2) explain the specific method used and how it connects to the actor's political goal; and (3) evaluate what the image reveals about whether that method was effective, and for whom.",
    prompt: "This image shows... It belongs to the category of [nonviolent challenge / militarized state response / violence against civilians] because... The specific method used was... The connection to a political goal was... What the image reveals about effectiveness is..."
  },

  primarySource: {
    title: "Primary Source: Martin Luther King Jr., 'Letter from Birmingham Jail' (April 16, 1963)",
    intro: "On April 12, 1963, Martin Luther King Jr. was arrested in Birmingham, Alabama, for violating an injunction against protests. While in jail, he read an open letter from eight white Alabama clergymen, 'A Call for Unity', who criticized the civil rights demonstrations as 'unwise and untimely' and called for negotiation rather than direct action. King wrote his response in the margins of the newspaper that published the clergymen's letter and on scraps of paper smuggled out of the jail. For AP sourcing: who is King's actual audience (the clergymen? the moderate white public? history?), what is the purpose of the letter (defend his method, persuade moderates, articulate a philosophy of direct action?), and how does the context of his confinement shape what he wrote? This excerpt comes from the section defending nonviolent direct action as a method.",
    text: "You may well ask: 'Why direct action? Why sit-ins, marches, and so forth? Isn't negotiation a better path?' You are quite right in calling for negotiation. Indeed, this is the very purpose of direct action. Nonviolent direct action seeks to create such a crisis and foster such a tension that a community which has constantly refused to negotiate is forced to confront the issue. It seeks so to dramatize the issue that it can no longer be ignored. My citing the creation of tension as part of the work of the nonviolent resister may sound rather shocking. But I must confess that I am not afraid of the word 'tension.' I have earnestly opposed violent tension, but there is a type of constructive, nonviolent tension which is necessary for growth. Just as Socrates felt that it was necessary to create a tension in the mind so that individuals could rise from the bondage of myths and half-truths to the unfettered realm of creative analysis and objective appraisal, so must we see the need for nonviolent gadflies to create the kind of tension in society that will help men rise from the dark depths of prejudice and racism to the majestic heights of understanding and brotherhood. The purpose of our direct action program is to create a situation so crisis-packed that it will inevitably open the door to negotiation.",
    questions: [
      "King describes nonviolent direct action as designed to 'create such a crisis and foster such a tension' that authorities are 'forced to confront the issue.' How does this framing of nonviolence challenge the clergymen's argument that protesters should simply negotiate? What does King's explanation reveal about why nonviolence works, or doesn't work, as a political strategy?",
      "King says he is 'not afraid of the word tension', he distinguishes between 'violent tension' he opposes and 'constructive, nonviolent tension' he believes is necessary. How does this distinction connect to KC-6.2.V.A's framing of nonviolence as a deliberate method for political change, not passive acceptance? What does the tension/crisis strategy reveal about the theory of change underlying the civil rights movement?",
      "This letter was written from a jail cell, by a man imprisoned for nonviolent protest, addressed to clergymen who criticized his methods as 'unwise and untimely.' How does the context of production shape the letter's argument? What does the fact that King was writing from prison reveal about the relationship between accepting suffering and achieving political goals, and how does that connect to the Gandhian method King had consciously adopted?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: Nelson Mandela Was on the U.S. Terrorist Watchlist Until 2008",
    desc: "Nelson Mandela, the man who won the Nobel Peace Prize in 1993 and became the symbol of peaceful democratic transition, remained on the United States government's terrorist watchlist until he was 90 years old.",
    intro: "In 1988, the U.S. Congress passed legislation designating the ANC a terrorist organization, based on its association with the Soviet Union and its armed wing Umkhonto we Sizwe. Mandela, as an ANC leader, was listed as a terrorist.",
    detail: "The designation was never formally removed after Mandela was released from prison in 1990, negotiated the end of apartheid, and became South Africa's first democratically elected President in 1994. It was never removed after he won the Nobel Peace Prize. It was never removed after he became one of the most universally admired figures in the world. In June 2008, Senators Hillary Clinton and Barack Obama co-sponsored legislation specifically to remove Mandela and ANC members from the U.S. terrorist watchlist. The legislation passed. Mandela was removed from the list in July 2008, he was 89 years old and had been free for 18 years, President of South Africa for 14 years, and a Nobel laureate for 15 years. The reason the designation persisted so long? Cold War-era counterterrorism law was not designed for formal review and revision. A classification made in one geopolitical context persisted through a completely transformed world because the bureaucratic machinery for removing it moved more slowly than history did. The AP concept here is straightforward but easy to miss: the Cold War's framing of every political conflict as a communist-vs.-democracy binary left classifications in place long after the world they described had ceased to exist.",
    prompt: "What does the Mandela watchlist story reveal about how Cold War framing shaped how Western governments perceived resistance movements, even nonviolent ones? How does this connect to KC-6.2.V.C, the ways militarized states responded to perceived threats in ways that intensified rather than resolved conflict?"
  },

  skillBuilder: {
    label: "Claims and Evidence practice",
    title: "Sorting Reactions: Which KC Category, and Why?",
    intro: "AP Learning Objective I asks you to 'explain various reactions to existing power structures in the period after 1900.' The skill is distinguishing the three CED categories analytically, not just naming who belongs where but explaining WHY a specific method constitutes a nonviolent challenge (KC-6.2.V.A), a militarized-state response that intensified conflict (KC-6.2.V.C), or a movement using violence against civilians (KC-6.2.V.D). This Skill Builder asks you to sort six cases and defend one contested placement.",
    steps: [
      { label: "KC-6.2.V.A, Gandhi's Salt March (1930)", text: "Category: Nonviolent challenge. The method, breaking British salt law openly and inviting arrest, was designed to make the cost of colonial authority visible and unsustainable. Discipline, public suffering, and the refusal to retaliate were central. The goal was political change through moral pressure, not through defeating the British militarily." },
      { label: "KC-6.2.V.A, MLK's Birmingham Campaign (1963)", text: "Category: Nonviolent challenge. Peaceful protesters subjected to fire hoses and police dogs created a political crisis by making white moderate Americans unable to ignore the violence used to enforce segregation. The method worked by creating exactly the 'constructive tension' King described in his Letter from Birmingham Jail, dramatizing injustice until it could no longer be ignored." },
      { label: "KC-6.2.V.C, Pinochet's Chile (1973–1990)", text: "Category: Militarized state response that intensified conflict. A military coup overthrew an elected government; the junta then used detention, torture, and execution to eliminate political opposition. The method intensified political conflict into state terror, deepening divisions rather than resolving the underlying political debate about economic policy." },
      { label: "KC-6.2.V.C, Military–industrial complex and weapons trading", text: "Category: Structural intensification of conflict. Not a single state but a system, the institutional relationship between military establishments and arms industries that creates incentives for continuous weapons development and conflict. The more weapons trade, the more conflicts have the material means to become lethal; the more military budgets grow, the more institutional interests push back against peace." },
      { label: "KC-6.2.V.D, Shining Path (1980s–1990s)", text: "Category: Movement using violence against civilians. Shining Path's theory of revolution required destroying existing community structures, including killing village leaders, NGO workers, and civilians seen as collaborators with the Peruvian state. Civilian targeting was not incidental; it was central to the strategy of creating revolutionary conditions." },
      { label: "CONTESTED CASE, Nelson Mandela and the ANC", text: "Which category? The ANC is named in KC-6.2.V.A, but the ANC formed Umkhonto we Sizwe in 1961 and conducted sabotage of infrastructure (though explicitly trying to avoid killing people). Where does this place the ANC? Arguments for KC-6.2.V.A: the overall arc of Mandela's leadership ended in nonviolent negotiation; MK sabotage explicitly targeted property, not people. Arguments for complexity: an organization that conducts armed sabotage does not fit purely in the nonviolent category. The AP reward goes to students who can articulate the tension rather than forcing a simple answer." }
    ],
    prompt: "Write a two-paragraph response: (1) explain which KC category the contested ANC case belongs to, using specific evidence to defend your placement, what about the ANC's methods supports your categorization? (2) explain what the ANC case reveals about the AP Learning Objective, why does LO I ask you to explain 'various' reactions rather than to sort them into clean boxes? What does the difficulty of categorizing the ANC reveal about how reactions to power actually work in history?"
  }

};
