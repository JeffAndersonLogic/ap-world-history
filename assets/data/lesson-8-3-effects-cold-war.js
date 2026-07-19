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
    topic: "Topic 8.3",
    title: "Effects of the Cold War",
    subtitle: "How military alliances, nuclear proliferation, and proxy wars in Latin America, Africa, and Asia became the dominant instruments of superpower competition",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how the United States and the Soviet Union used new military alliances, NATO and the Warsaw Pact, to maintain influence during the Cold War.",
      kc: "KC-6.2.IV.D",
      theme: "Governance"
    },
    {
      target: "I can explain how nuclear proliferation shaped the ways both superpowers sought to maintain influence and deter one another.",
      kc: "KC-6.2.IV.D",
      theme: "Governance"
    },
    {
      target: "I can compare how the United States and the Soviet Union used proxy wars between and within postcolonial states in Latin America, Africa, and Asia to maintain influence.",
      kc: "KC-6.2.IV.D",
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain how NATO (1949) and the Warsaw Pact (1955) served as instruments of U.S. and Soviet influence, respectively, describing how each alliance extended superpower reach beyond their borders and constrained the choices of member states.",
      kc: "KC-6.2.IV.D",
      theme: "Governance"
    },
    {
      criteria: "I can explain how nuclear proliferation and the doctrine of Mutually Assured Destruction (MAD) shaped superpower behavior, deterring direct conflict while pushing competition into proxy wars and alliance-building.",
      kc: "KC-6.2.IV.D",
      theme: "Governance"
    },
    {
      criteria: "I can compare how the U.S. and Soviet Union used aid, arms, advisors, and local clients in the Korean War, the Angolan Civil War, and the Sandinista–Contras conflict, identifying both similarities and differences in their methods across postcolonial regions.",
      kc: "KC-6.2.IV.D",
      theme: "Governance"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: "Thematic Focus, Governance (GOV)",
      theme: "Governance",
      text: "Governance",
      illustrativeExamples: []
    },
    {
      code: "Unit 8: Learning Objective C",
      theme: "Learning Objective",
      text: "Compare the ways in which the United States and the Soviet Union sought to maintain influence over the course of the Cold War.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.IV.D",
      theme: "Governance",
      text: "The Cold War produced new military alliances, including NATO and the Warsaw Pact, and led to nuclear proliferation and proxy wars between and within postcolonial states in Latin America, Africa, and Asia.",
      illustrativeExamples: [
        "Proxy wars: Korean War",
        "Proxy wars: Angolan Civil War",
        "Proxy wars: Sandinista–Contras conflict in Nicaragua"
      ]
    }
  ],

  lecture: {
    title: "Effects of the Cold War: Alliances, Arms, and Proxy Wars",
    intro: "Use these cards to trace how the Cold War's ideological struggle produced new military alliances and nuclear proliferation, then turned violent through proxy wars across Latin America, Africa, and Asia, and to compare how each superpower used these instruments to maintain influence.",
    videos: [
      {
        title: "Heimler's History, Topic 8.3: Effects of the Cold War",
        url: "https://youtu.be/FO-CXJL5EWI",
        youtubeId: "FO-CXJL5EWI",
        prompt: "Use this clip to review the effects of the Cold War, listen especially for how NATO and the Warsaw Pact functioned as instruments of influence and how proxy wars spread the superpower competition across the postcolonial world."
      }
    ],
    segments: [
      {
        title: "Blocs and Treaties",
        bullets: [
          "**NATO (1949)**, the North Atlantic Treaty Organization, formalized the Western military alliance under American leadership. Twelve founding members committed to collective defense: an attack on one was an attack on all. U.S. nuclear weapons, military bases, and forces stationed in Europe made NATO the primary instrument of American influence over Western allies.",
          "NATO was not merely defensive. For smaller member states, joining meant accepting American military presence on their soil, aligning foreign policy with Washington, and hosting U.S. nuclear weapons, raising the question of whose interests the alliance served most directly.",
          "The **Warsaw Pact (1955)** was Moscow's response to West Germany's admission to NATO. Eight Soviet-bloc states formalized the military alliance that already existed informally through Soviet troop presence in Eastern Europe. The Pact consolidated Soviet command over Eastern European armed forces and legitimized Soviet military intervention in member states.",
          "The Warsaw Pact's 1968 invasion of Czechoslovakia, crushing the Prague Spring reform movement, demonstrated the alliance's true function: not collective defense against external threat, but Soviet enforcement of political conformity within its bloc. The **Brezhnev Doctrine** formalized this logic, asserting the USSR's right to intervene in any socialist state where socialism was threatened.",
          "Both alliances used similar instruments, military basing, arms transfers, joint command structures, and economic integration, but served different political functions. NATO extended U.S. influence through multilateral commitments; the Warsaw Pact enforced Soviet hegemony through direct military presence."
        ],
        image: {
          title: "NATO and Warsaw Pact military alliances, 1955",
          caption: "By 1955 the Cold War's formal alliance structure had institutionalized the ideological divide into two rival military blocs covering most of Europe and North America.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cold_war_europe_military_alliances_map_en.png",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Cold_war_europe_military_alliances_map_en.png"
        }
      },
      {
        title: "The Balance of Terror",
        bullets: [
          "The **nuclear arms race** defined the existential stakes of the Cold War. The United States held a monopoly on atomic weapons from 1945 to 1949. The Soviet Union's first successful nuclear test in August 1949, years ahead of U.S. predictions, instantly transformed the strategic equation.",
          "Both sides then developed **thermonuclear weapons** (hydrogen bombs) many times more powerful than the atomic bombs used in 1945. By the late 1950s, each superpower possessed enough warheads to destroy civilization many times over. **Nuclear proliferation**, the spread of nuclear weapons technology, extended the arms race beyond the two superpowers: Britain (1952), France (1960), and China (1964) all tested nuclear devices.",
          "The doctrine of **Mutually Assured Destruction (MAD)** emerged as the terrifying logic of deterrence: if either side launched a nuclear first strike, the other would retain enough surviving weapons to annihilate the attacker. Both sides knew that nuclear war meant the destruction of both. This paradox made direct military confrontation between the superpowers too costly, but it did not end competition. It redirected it.",
          "The **nuclear umbrella** extended deterrence to alliance partners. U.S. nuclear weapons protected NATO allies; Soviet nuclear capability underwrote Warsaw Pact security. Nuclear weapons thus became instruments of influence as well as deterrence, reassuring allies while threatening adversaries.",
          "The arms race consumed enormous resources on both sides, reshaping domestic priorities. In the United States, President Eisenhower warned in 1961 of a **military-industrial complex**, the institutional network of defense contractors, military planners, and government agencies whose interests drove continued weapons development regardless of strategic need."
        ],
        image: {
          title: "Nuclear arms race, U.S. and Soviet warhead counts",
          caption: "The nuclear arms race produced tens of thousands of warheads on each side by the 1980s, enough to destroy civilization many times over under the doctrine of Mutually Assured Destruction.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/US_and_USSR_nuclear_stockpiles.svg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:US_and_USSR_nuclear_stockpiles.svg"
        }
      },
      {
        title: "Wars by Other Hands",
        bullets: [
          "**Proxy wars** became the dominant method of superpower competition. Unable to fight each other directly, nuclear deterrence made the cost too high, the U.S. and USSR backed opposing sides in conflicts across the postcolonial world, turning local and regional disputes into theaters of Cold War rivalry.",
          "**Korean War (1950–1953):** When Soviet-backed North Korea invaded U.S.-backed South Korea in June 1950, the United States led a UN coalition to defend the South. China entered on the North's side when U.S. forces approached the Chinese border. After three years and over 3 million deaths, the armistice restored the pre-war division at the 38th parallel. Korea was the prototype: superpower clients doing the fighting, superpower interests defining the stakes.",
          "**Angolan Civil War (1975–2002):** As Portugal withdrew from Angola in 1975, three liberation movements, the MPLA, FNLA, and UNITA, competed for power. The USSR and Cuba backed the MPLA (Marxist); the United States and apartheid South Africa backed UNITA and the FNLA. Cuban troops fought alongside the MPLA; U.S. support flowed through the CIA and South Africa. Angola's civil war lasted 27 years and killed hundreds of thousands, its duration shaped by the superpower backing each faction received.",
          "**Sandinista–Contras conflict in Nicaragua (1980s):** When the Sandinista revolution overthrew U.S.-backed dictator Somoza in 1979, the Reagan administration funded and organized the Contras, an insurgent force, to destabilize the Sandinista government. The Soviet Union and Cuba supplied the Sandinistas with arms and advisors. Nicaragua became a proxy battleground for the same superpower competition playing out in Africa and Asia.",
          "**Comparison:** In all three cases, both superpowers used arms transfers, financial aid, military advisors, and local clients to wage competition without direct confrontation. The U.S. tended to frame its involvement in anti-communist terms; the USSR framed its involvement in anti-imperialist and socialist solidarity terms. But the structural method was identical: fight the Cold War through other people's wars, in other people's countries."
        ],
        image: {
          title: "Angolan Civil War, MPLA fighters, 1975",
          caption: "Angola's independence in November 1975 immediately became a Cold War battleground: Soviet- and Cuban-backed MPLA forces fought U.S.- and South African-backed UNITA and FNLA fighters in a civil war that lasted until 2002.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/MPLA_fighters.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:MPLA_fighters.jpg"
        }
      }
    ]
  },

  map: {
    title: "Cold War Proxy Wars, 1950–1990",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cold_War_Map_1980.svg",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Cold_War_Map_1980.svg",
    caption: "Cold War alignment and proxy conflicts across Latin America, Africa, and Asia, the regions where superpower competition turned violent.",
    intro: "Use the map to identify where U.S. and Soviet proxy conflicts occurred. Notice that most Cold War violence happened outside Europe, in postcolonial states in Latin America, Africa, and Asia that were navigating independence while being pulled into superpower competition.",
    prompt: "What geographic pattern do you notice in Cold War proxy conflicts? What does the location of these wars, outside Europe, in postcolonial regions, reveal about how each superpower sought to expand its influence?",
    notes: [
      "Korea (1950–1953): the first major proxy conflict, fought on the Korean Peninsula with superpower backing on each side.",
      "Angola (1975–2002): Soviet/Cuban support for the MPLA vs. U.S./South African support for UNITA, the longest-running Cold War proxy conflict in Africa.",
      "Nicaragua (1980s): U.S.-funded Contras vs. Soviet/Cuban-backed Sandinistas, Cold War competition in Central America.",
      "All three CED proxy conflicts occurred in postcolonial states in the Global South, not in Europe, where nuclear deterrence kept the superpowers from direct confrontation."
    ]
  },

  first10: {
    title: "First & 10: Effects of the Cold War",
    embedUrl: "first-and-10-topic-8-3-effects-cold-war-capture.html?v=20260610"
  },

  images: [
    {
      title: "NATO founding ceremony, 1949",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/NATO_signing.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:NATO_signing.jpg",
      caption: "The signing of the North Atlantic Treaty, April 4, 1949, formalizing the Western military alliance under American leadership as the primary U.S. instrument for maintaining influence in Europe.",
      prompt: "Who signed NATO, and who did not? What does the treaty's membership reveal about how the United States used the alliance system to extend its influence beyond its own borders?"
    },
    {
      title: "Cuban troops in Angola, 1975",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Cuban_troops_Angola.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Cuban_troops_Angola.jpg",
      caption: "Cuban combat troops deployed to Angola in 1975 at the request of the Soviet-backed MPLA, one of the most direct forms of proxy war intervention in Cold War Africa.",
      prompt: "What does Cuba's military deployment to Angola reveal about how the Soviet bloc used local clients and third-party forces to pursue Cold War objectives? How is this similar to or different from U.S. methods in Nicaragua?"
    },
    {
      title: "Sandinista soldiers, Nicaragua, 1980s",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/FSLN_fighter.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:FSLN_fighter.jpg",
      caption: "Sandinista fighters in Nicaragua during the 1980s Contra conflict, a proxy war in which the U.S. funded insurgents to destabilize a Soviet-aligned government.",
      prompt: "How does the Nicaraguan conflict illustrate the comparison AP LO C demands? What methods did the U.S. use to maintain influence, and how did those compare to Soviet methods in Angola or Korea?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: Comparing Superpower Methods",
    task: "Choose one image and explain what it reveals about how the United States or Soviet Union sought to maintain influence during the Cold War. Your response should connect the image to at least one of the three CED proxy-war examples and explain the comparison dimension: how were U.S. and Soviet methods similar or different?",
    prompt: "This image shows... It is evidence of [choose: military alliance / nuclear deterrence / proxy war / arms transfer] because... Compared to the other superpower's methods, this reveals..."
  },

  primarySource: {
    title: "Primary Source: NSC-68, United States National Security Council (April 14, 1950)",
    intro: "NSC-68 was a classified policy document produced by the U.S. National Security Council in April 1950, two months before the Korean War began. Written in response to the Soviet Union's first nuclear test (August 1949) and the communist revolution in China (October 1949), NSC-68 argued for a massive expansion of U.S. military spending and global commitment to confronting Soviet power. It became the foundational document of U.S. Cold War strategy, framing the Cold War as an existential struggle requiring military alliances, arms development, and intervention wherever Soviet influence threatened to expand. The document remained classified until 1975, but its logic shaped U.S. policy across Korea, Vietnam, Angola, and Nicaragua.",
    text: "The Soviet Union, unlike previous aspirants to hegemony, is animated by a new fanatic faith, antithetical to our own, and seeks to impose its absolute authority over the rest of the world. Conflict has, therefore, become endemic and is waged, on the part of the Soviet Union, by violent or non-violent methods in accordance with the dictates of expediency. With the development of increasingly terrifying weapons of mass destruction, every individual faces the ever-present possibility of annihilation should the conflict enter the phase of total war. In a shrinking world, the absence of order among nations is becoming less and less tolerable. The United States and its allies, more over, have a further obligation to demonstrate that free men can devise institutions that will accomplish the fundamental purpose of the UN if, unhappily, that organization is unable to furnish them. The United States, as the principal center of power in the non-Soviet world and the bulwark of opposition to Soviet expansion, must lead in building a successfully functioning political and economic system in the free world.",
    questions: [
      "How does NSC-68 frame the Soviet threat? What assumptions does it make about the nature of Soviet ideology, and how might those assumptions justify U.S. intervention across the postcolonial world?",
      "NSC-68 was written in April 1950, two months before the Korean War. How does the document's logic help explain the U.S. decision to intervene in Korea, and later in Angola and Nicaragua?",
      "NSC-68 presents the Cold War as a binary: the 'free world' led by the United States vs. Soviet totalitarianism. How might a Nicaraguan Sandinista or an Angolan MPLA leader challenge this framing? What does the document reveal about whose perspective it reflects?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: 'Better Dead Than Red'",
    desc: "During the Korean War, American civil defense planners debated whether survival under communism was preferable to death in nuclear war.",
    intro: "In 1951, as U.S. forces fought in Korea and the Soviets had already tested their first nuclear bomb, American civil defense officials faced an impossible question.",
    detail: "The slogan 'Better Dead Than Red' circulated in 1950s America as a statement of principle: life under communism was considered so intolerable that death, including nuclear annihilation, was preferable. Civil defense planners who took this logic seriously faced a practical problem: why invest in fallout shelters if survival after a Soviet attack was not actually desirable? The U.S. government spent billions on civil defense programs anyway, including nationwide shelter networks and the CONELRAD broadcast system for nuclear alerts. The contradiction, building for survival while proclaiming death preferable to communist rule, was never publicly resolved.",
    prompt: "What does the 'Better Dead Than Red' slogan reveal about the ideological dimensions of the Cold War arms race? How does it illustrate the way nuclear deterrence shaped not just military strategy but public culture and political identity?"
  },

  skillBuilder: {
    label: "Comparison practice",
    title: "Compare U.S. and Soviet Methods for Maintaining Influence",
    intro: "AP Learning Objective C asks you to 'compare the ways in which the United States and the Soviet Union sought to maintain influence over the course of the Cold War.' Comparison means identifying similarities AND differences, not just listing what each side did. For 8.3: both superpowers used alliances, arms, advisors, and local clients. The comparison requires you to explain HOW their methods differed and why those differences matter.",
    steps: [
      { label: "Similarity", text: "Both the U.S. and USSR used military alliances (NATO / Warsaw Pact), arms transfers to client states, and proxy forces to extend influence without direct confrontation. In Korea, Angola, and Nicaragua, both sides backed local clients with weapons, funding, and advisors rather than committing their own troops to extended ground combat." },
      { label: "Difference (framing)", text: "The U.S. framed its involvement in anti-communist, pro-democracy terms (containing the Soviet threat); the USSR framed its involvement in anti-imperialist, socialist solidarity terms (supporting liberation movements against Western exploitation). Both framings served the strategic interest of expanding influence." },
      { label: "Difference (structure)", text: "U.S. alliances (NATO) operated through multilateral treaty commitments with nominal equality among members. Soviet alliances (Warsaw Pact) operated through direct military presence and the Brezhnev Doctrine, the right to intervene in any socialist state. The U.S. method was more multilateral in form; the Soviet method was more directly coercive." }
    ],
    prompt: "Build a comparison in two or three sentences: identify at least one similarity in how the U.S. and Soviet Union sought to maintain influence during the Cold War, and at least one difference. Use specific historical evidence from at least two of the three CED proxy-war examples (Korean War, Angolan Civil War, Sandinista–Contras conflict)."
  }

};
