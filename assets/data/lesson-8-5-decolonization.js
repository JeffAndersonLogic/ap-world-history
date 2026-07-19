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
    topic: "Topic 8.5",
    title: "Decolonization After 1900",
    subtitle: "How nationalist leaders, mass movements, and the legacies of inherited imperial boundaries drove the end of formal empire across Asia and Africa, through negotiation, armed struggle, and the unresolved conflicts that followed",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how nationalist leaders and parties in Asia and Africa sought varying degrees of autonomy within or independence from imperial rule.",
      kc: "KC-6.2.II.A",
      theme: "Governance"
    },
    {
      target: "I can compare the processes by which colonies negotiated independence after World War II with those that achieved independence through armed struggle.",
      kc: "KC-6.2.II.B",
      theme: "Governance"
    },
    {
      target: "I can explain how regional, religious, and ethnic movements challenged colonial rule and inherited imperial boundaries, including movements that advocated for autonomy.",
      kc: "KC-6.2.I.C",
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain the strategies and goals of at least two of the four CED nationalist leaders or parties, the Indian National Congress (nonviolent resistance, mass mobilization), Ho Chi Minh (Viet Minh, armed resistance and independence declaration), Kwame Nkrumah in British Gold Coast (CPP, Positive Action, negotiated independence), and Gamal Abdel Nasser in Egypt (revolution, Suez Canal nationalization), and explain how each sought autonomy or independence.",
      kc: "KC-6.2.II.A",
      theme: "Governance"
    },
    {
      criteria: "I can compare at least one colony that negotiated independence (India from the British Empire, the Gold Coast from the British Empire, or French West Africa) with at least one that achieved independence through armed struggle (Algeria from the French empire, Angola from the Portuguese empire, or Vietnam from the French empire), explaining at least one factor that accounts for the difference in processes.",
      kc: "KC-6.2.II.B",
      theme: "Governance"
    },
    {
      criteria: "I can explain how at least two of the three CED regional, religious, or ethnic movements, the Muslim League in British India (demand for Pakistan), the Québécois separatist movement in Canada, and the Biafra secessionist movement in Nigeria, challenged inherited colonial boundaries and explain why imperial boundary drawing produced these conflicts.",
      kc: "KC-6.2.I.C",
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
      code: "Unit 8: Learning Objective F",
      theme: "Learning Objective",
      text: "Compare the processes by which various peoples pursued independence after 1900.",
      illustrativeExamples: []
    },
    {
      code: "KC-6.2.II.A",
      theme: "Governance",
      text: "Nationalist leaders and parties in Asia and Africa sought varying degrees of autonomy within or independence from imperial rule.",
      illustrativeExamples: [
        "Indian National Congress",
        "Ho Chi Minh in French Indochina (Vietnam)",
        "Kwame Nkrumah in British Gold Coast (Ghana)",
        "Gamal Abdel Nasser in Egypt"
      ]
    },
    {
      code: "KC-6.2.II.B",
      theme: "Governance",
      text: "After the end of World War II, some colonies negotiated their independence, while others achieved independence through armed struggle.",
      illustrativeExamples: [
        "Negotiated independence: India from the British Empire",
        "Negotiated independence: The Gold Coast from the British Empire",
        "Negotiated independence: French West Africa",
        "Independence through armed struggle: Algeria from the French empire",
        "Independence through armed struggle: Angola from the Portuguese empire",
        "Independence through armed struggle: Vietnam from the French empire"
      ]
    },
    {
      code: "KC-6.2.I.C",
      theme: "Governance",
      text: "Regional, religious, and ethnic movements challenged colonial rule and inherited imperial boundaries. Some of these movements advocated for autonomy.",
      illustrativeExamples: [
        "Muslim League in British India",
        "Québécois separatist movement in Canada",
        "Biafra secessionist movement in Nigeria"
      ]
    }
  ],

  lecture: {
    title: "Decolonization After 1900: Leaders, Roads, and Boundaries",
    intro: "Use these cards to trace how nationalist leaders built independence movements, why some colonies negotiated independence while others fought for it, and how the boundaries drawn by colonial empires became fault lines for new conflicts after independence.",
    videos: [
      {
        title: "Heimler's History, Topic 8.5: Decolonization After 1900",
        url: "https://youtu.be/1l8_KGvzrFQ",
        youtubeId: "1l8_KGvzrFQ",
        prompt: "Use this clip to review the key nationalist leaders, the negotiated vs. armed-struggle distinction, and the regional/ethnic movements that challenged post-independence boundaries. Listen especially for how the CED comparison question works: what conditions pushed a colony toward negotiation vs. armed resistance?"
      }
    ],
    segments: [
      {
        title: "The Leaders and the Parties",
        bullets: [
          "The **Indian National Congress (INC)**, founded in 1885, became the organizational backbone of India's independence movement. Under **Mohandas Gandhi**, the INC built mass nonviolent resistance, the Salt March of 1930, the civil disobedience campaigns of the 1930s, and the Quit India Movement of 1942. The INC sought not just independence but a particular kind of sovereignty: moral legitimacy through nonviolent means, which also cultivated international sympathy and made British repression politically costly at home. **Jawaharlal Nehru**, the INC's other central figure, would become India's first prime minister after the Indian Independence Act of 1947.",
          "**Ho Chi Minh** founded the **Viet Minh** in 1941, combining Vietnamese nationalism with communist ideology and organizing resistance against both French colonial rule and Japanese occupation. On September 2, 1945, he declared Vietnamese independence, pointedly quoting the American Declaration of Independence and the French Declaration of the Rights of Man. France refused to accept the declaration, and the **First Indochina War (1946–1954)** followed. The Viet Minh's decisive victory at **Dien Bien Phu** in 1954 forced French withdrawal and the division of Vietnam at the 17th parallel, a case of armed struggle where the colonial power's refusal to negotiate led to military defeat. (This continues from Topic 8.4's discussion of communist revolution and Vietnamese land redistribution.)",
          "**Kwame Nkrumah** returned to the Gold Coast in 1947 after studying in the United States and Britain, where he had attended the 1945 Pan-African Congress in Manchester alongside W.E.B. Du Bois, Jomo Kenyatta, and others. He split from the more conservative **United Gold Coast Convention (UGCC)** in 1949 to found the **Convention People's Party (CPP)**, with the slogan 'Self-Government Now.' In January 1950, Nkrumah launched the **Positive Action** campaign, nonviolent strikes and boycotts, was arrested and imprisoned by British colonial authorities, and then released from prison to serve as Prime Minister after the CPP won the 1951 Gold Coast legislative elections. In 1957, **Ghana became the first sub-Saharan African nation to achieve independence** from colonial rule.",
          "**Gamal Abdel Nasser** led the military coup that overthrew King Farouk in 1952 and became President of Egypt in 1954. Egypt had been nominally independent since 1922 but remained under British military and economic influence. Nasser's signature act, the **nationalization of the Suez Canal in 1956**, directly challenged British and French economic interests and imperial prestige. Britain and France responded with military force (the **Suez Crisis, 1956**), but the United States and Soviet Union both opposed the invasion, forcing a humiliating British and French withdrawal. The Suez Crisis demonstrated the limits of European imperial power in the postwar world, and made Nasser the symbol of pan-Arab nationalism and decolonization."
        ],
        image: {
          title: "Kwame Nkrumah declares Ghana's independence, March 6, 1957",
          caption: "Kwame Nkrumah proclaims Ghana's independence on March 6, 1957, the first sub-Saharan African nation to achieve independence, with a leader who had been imprisoned by British colonial authorities just six years earlier.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kwame_Nkrumah_declares_independence.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Kwame_Nkrumah_declares_independence.jpg"
        }
      },
      {
        title: "Two Roads Out",
        bullets: [
          "After World War II, two distinct paths to independence emerged. The CED captures the comparison precisely: 'some colonies negotiated their independence, while others achieved independence through armed struggle.' AP LO F asks you to compare these processes, not just list the cases, but explain what drove each colony down one road or the other.",
          "**Negotiated independence** was the path taken where the colonial power calculated that the cost of holding the colony outweighed the benefit. **India** achieved independence through the **Indian Independence Act of 1947**, the result of mass nonviolent resistance, wartime exhaustion of British resources, and a Labour government in London more sympathetic to Indian self-determination than its predecessors. **The Gold Coast** (Ghana) achieved independence in 1957 after Nkrumah's CPP demonstrated, through the 1951 election and through Positive Action, that the British could not govern without the CPP's participation. **French West Africa** negotiated a series of independence agreements in 1960, as France recognized the unsustainability of empire after its defeat in Indochina.",
          "**Independence through armed struggle** was the path taken where the colonial power refused to negotiate, often because significant numbers of European settlers had political and economic stakes in maintaining control, or because the metropole's political culture resisted acknowledgment of colonial people's rights. **Algeria's** war of independence (1954–1962) was fought by the **FLN (Front de Libération Nationale)** against France, which at the time classified Algeria not as a colony but as a department of France itself, making withdrawal a constitutional and political crisis as well as a military one. Over 1 million Algerians died. **Angola** fought Portuguese rule until 1975 (continuing Topic 8.3's Luanda Decision). **Vietnam**, the third armed-struggle case in the CED, was fought first against France (1946–1954) and then against American-backed South Vietnamese forces (1955–1975).",
          "**What conditions pushed a colony one road or the other?** Four factors matter for AP comparison: (1) **Settler presence**, large European settler populations (Algeria, Angola) gave the metropole political reasons to resist withdrawal; (2) **Metropole politics**, Labour Britain was more willing to negotiate exit than the French Fourth Republic facing Algeria; (3) **Leadership strategy**, Gandhi and Nkrumah built nonviolent mass movements that made British repression politically costly; Ho Chi Minh chose armed resistance because France refused to recognize the 1945 independence declaration; (4) **Cold War stakes**, both the U.S. and the USSR pressured former European powers to decolonize, but Cold War framing also meant that movements labeled 'communist' faced different responses from Western powers."
        ],
        image: {
          title: "FLN fighters, Algerian War of Independence, late 1950s",
          caption: "Fighters of the Front de Libération Nationale (FLN) during Algeria's war of independence (1954–1962). Algeria's path, armed struggle, contrasted sharply with the negotiated independence achieved by India and the Gold Coast.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/FLN_fighters_Algeria.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:FLN_fighters_Algeria.jpg"
        }
      },
      {
        title: "Boundaries Under Challenge",
        bullets: [
          "Colonial empires drew borders without regard for ethnic, religious, linguistic, or cultural communities. When European powers withdrew, these borders, inherited by newly independent states, became fault lines for some of the most violent conflicts of the postwar world. The CED identifies this pattern in KC-6.2.I.C: 'Regional, religious, and ethnic movements challenged colonial rule and inherited imperial boundaries.' Some of these movements emerged before independence; others broke out after.",
          "The **Muslim League**, founded in 1906, represented Muslim political interests within British India. As the INC under Gandhi and Nehru pushed for a unified independent India, League leader **Muhammad Ali Jinnah** argued that Muslim-majority regions needed a separate state to protect Muslim political and cultural rights in a Hindu-majority country. The result was **Partition in 1947**, the simultaneous creation of India and Pakistan, with one of the largest forced migrations in history: approximately 10–20 million people displaced and an estimated 200,000–2 million killed in intercommunal violence. Partition was not just the end of British rule; it was the violent redrawing of colonial boundaries along a fault line the British had both created and deepened.",
          "The **Québécois separatist movement** in Canada arose from the political and cultural marginalization of French-speaking Québécois within an English-dominated confederation. Though Canada was never formally colonized in the same way as Asian or African territories, the Conquest of 1760 created a persistent linguistic and cultural minority within a state whose dominant language and culture were English. The **Parti Québécois** (founded 1968) pursued independence through democratic means; the **FLQ (Front de libération du Québec)** used political violence during the **October Crisis of 1970**. Quebec held independence referenda in 1980 (rejected 60-40) and 1995 (rejected 50.6-49.4). The movement illustrates that 'inherited imperial boundaries' challenged political legitimacy even within established Western democracies.",
          "The **Biafra secessionist movement** demonstrated the violence possible when post-independence states refused to accept challenges to colonial-era boundaries. **Nigeria** gained independence from Britain in 1960 as a federation of three major ethnic groups: Hausa-Fulani (north), Yoruba (southwest), and Igbo (southeast). The boundaries were British, the federation was artificial, and political and economic competition between groups was intense. After a 1966 military coup, anti-Igbo pogroms drove Igbo people back to the southeast, and the Igbo-majority southeastern region declared independence as the **Republic of Biafra** in 1967. The **Biafran War (1967–1970)** killed an estimated 1–3 million people, many from the famine blockade imposed by the Nigerian government. Nigeria's reunification preserved the colonial-era boundary, but at catastrophic human cost."
        ],
        image: {
          title: "Partition of India, August 1947, refugees crossing the border",
          caption: "Millions of people displaced during the 1947 Partition of India and Pakistan, one of the largest forced migrations in history, produced by the redrawing of colonial-era boundaries along religious lines when Britain withdrew.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Partition_of_India_1947_mass_migration.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Partition_of_India_1947_mass_migration.jpg"
        }
      }
    ]
  },

  map: {
    title: "Decolonization, 1945–1975",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Decolonization_of_the_Americas.png",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Decolonization_of_the_Americas.png",
    caption: "The wave of decolonization from the end of World War II through the mid-1970s, showing the geographic range of independence movements in Asia, Africa, and the Caribbean.",
    intro: "Use the map to trace the geography of decolonization. Note where independence came earliest (India, 1947), where it clustered (sub-Saharan Africa in 1960, the 'Year of Africa'), and where it was most delayed (Angola and other Portuguese colonies, 1975). The geographic pattern reflects the political and military conditions that shaped each colony's path.",
    prompt: "What patterns do you notice in when and where independence came? What does the timing and geography of decolonization suggest about the conditions that produced negotiated versus armed-struggle paths to independence?",
    notes: [
      "India (1947): independence through the Indian Independence Act, following mass nonviolent resistance by the Indian National Congress, and accompanied by Partition into India and Pakistan.",
      "Gold Coast / Ghana (1957): first sub-Saharan African nation to independence, following Nkrumah's CPP campaign and the Positive Action movement.",
      "French West Africa (1960): negotiated series of independence agreements in the 'Year of Africa.'",
      "Algeria (1962): independence after eight years of armed struggle (1954–1962), the longest and most violent decolonization war in Africa.",
      "Angola (1975): independence through armed struggle after 14 years of anti-Portuguese guerrilla war, immediately followed by civil war (Topic 8.3).",
      "Vietnam (1954/1975): independence achieved through military defeat of France (1954) then the U.S.-backed South (1975), the most costly armed decolonization conflict."
    ]
  },

  first10: {
    title: "First & 10: Decolonization After 1900",
    embedUrl: "first-and-10-topic-8-5-decolonization-capture.html?v=20260610"
  },

  images: [
    {
      title: "Mahatma Gandhi, Salt March, 1930",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gandhi_salt_march.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gandhi_salt_march.jpg",
      caption: "Gandhi leads the Salt March in 1930, a 240-mile walk to the sea to collect salt illegally, defying British tax law. The march was a mass act of nonviolent civil disobedience that galvanized Indian independence and drew global attention.",
      prompt: "How does the Salt March illustrate the INC's strategy for pursuing independence? What does it reveal about how Gandhi sought to challenge British imperial rule without armed violence, and why that strategy was effective?"
    },
    {
      title: "Gamal Abdel Nasser after Suez Canal nationalization, 1956",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gamal_Abdel_Nasser_1956.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Gamal_Abdel_Nasser_1956.jpg",
      caption: "Nasser after announcing the nationalization of the Suez Canal in 1956. The nationalization triggered the Suez Crisis, Britain and France invaded, but U.S. pressure forced their withdrawal, demonstrating the limits of European imperial power in the postwar world.",
      prompt: "What does Nasser's nationalization of the Suez Canal reveal about how decolonization extended beyond formal political independence? How does the Suez Crisis illustrate the role of Cold War superpower pressure in accelerating European decolonization?"
    },
    {
      title: "Biafra, Nigerian Civil War, 1967–1970",
      url: "https://commons.wikimedia.org/wiki/Special:FilePath/Biafra_child_famine.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Biafra_child_famine.jpg",
      caption: "The Biafran War (1967–1970): the secessionist movement of the Igbo-majority southeast challenged Nigeria's colonial-era boundaries. An estimated 1–3 million people died, many from the famine produced by the Nigerian blockade of Biafra.",
      prompt: "How does the Biafra secessionist movement illustrate the argument that inherited imperial boundaries became fault lines after independence? What does the Biafran War reveal about the relationship between colonial boundary-drawing and postcolonial conflict?"
    }
  ],

  evidenceLab: {
    title: "Evidence Lab: The Roads to Independence",
    task: "Choose one image and explain what it reveals about the processes by which peoples pursued independence after 1900. Your response should connect the image to at least one of the CED cases and explain what it reveals about the comparison between negotiated and armed-struggle paths, or about how inherited boundaries produced new conflicts.",
    prompt: "This image shows... It is evidence of [choose: nationalist resistance / nonviolent mass movement / armed struggle / inherited boundary conflict] because... Compared to other independence processes, this reveals..."
  },

  primarySource: {
    title: "Primary Source: Ho Chi Minh, 'Declaration of Vietnamese Independence' (September 2, 1945)",
    intro: "On September 2, 1945, four years before Mao proclaimed the People's Republic of China and twelve years before Ghana achieved independence, Ho Chi Minh read the Vietnamese Declaration of Independence in Hanoi's Ba Dinh Square. The declaration deliberately echoed the American Declaration of Independence and the French Declaration of the Rights of Man and Citizen. For AP sourcing analysis, notice: who is the audience (both Vietnamese and foreign)? What is the purpose (declaring independence, shaping international legitimacy)? What does the choice to quote American and French documents reveal about the context and strategy of anti-colonial nationalism?",
    text: "All men are created equal. They are endowed by their Creator with certain inalienable rights, among these are Life, Liberty, and the pursuit of Happiness. This immortal statement was made in the Declaration of Independence of the United States of America in 1776. In a broader sense, this means: All the peoples on the earth are equal from birth, all the peoples have a right to live, to be happy and free. The Declaration of the French Revolution made in 1791 on the Rights of Man and the Citizen also states: 'All men are born free and with equal rights, and must always remain free and have equal rights.' Those are undeniable truths. Nevertheless, for more than eighty years, the French imperialists, abusing the standard of Liberty, Equality, and Fraternity, have violated our Fatherland and oppressed our fellow-citizens. They have acted contrary to the ideals of humanity and justice.",
    questions: [
      "Ho Chi Minh opens his declaration by quoting the American Declaration of Independence and the French Declaration of the Rights of Man. What does this choice of sources reveal about his intended audience and the strategic purpose of the declaration?",
      "How does Ho Chi Minh use the language of 'liberty' and 'equality' to argue against French colonial rule? What does this reveal about how nationalist leaders framed their independence claims to maximize international legitimacy?",
      "France refused to recognize this declaration and fought a war against the Viet Minh from 1946–1954. What does the gap between the declaration's appeal to universal rights and France's military response reveal about the comparison between negotiated and armed-struggle paths to independence? Why might France negotiate Indian independence (through Britain) but refuse Vietnamese independence?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: Released from Prison to Run a Country",
    desc: "On February 21, 1951, Kwame Nkrumah was serving a prison sentence for organizing illegal strikes. On February 22, he was released to become Prime Minister-elect of the Gold Coast.",
    intro: "In January 1950, Kwame Nkrumah launched Positive Action, nonviolent general strikes and boycotts demanding immediate self-government. The British colonial government arrested him for inciting an illegal strike.",
    detail: "Nkrumah was sentenced to three years in prison. While he was incarcerated, his Convention People's Party contested the February 1951 Gold Coast legislative elections, the first held under the new Coussey Constitution, and won a landslide. The CPP won 34 of 38 elected seats. British Governor Charles Arden-Clarke faced a constitutional reality: he could not form a government without the leader of the winning party. He ordered Nkrumah released from James Fort Prison and invited him to Government House. Within 24 hours, Nkrumah went from prison cell to leader of government business. In 1952, he became Prime Minister. In 1957, the Gold Coast became Ghana, the first sub-Saharan African nation to achieve independence. The same colonial legal system that imprisoned him for demanding self-government had to release him to give it.",
    prompt: "What does the sequence, Positive Action → arrest → CPP electoral victory → release to govern, reveal about how Nkrumah's independence strategy worked? How did the CPP's ability to win elections undermine the British colonial argument that the Gold Coast was not ready for self-government?"
  },

  skillBuilder: {
    label: "Comparison practice",
    title: "Two Roads Out: Build the Process Chart",
    intro: "AP Learning Objective F asks you to 'compare the processes by which various peoples pursued independence after 1900.' The key word is processes, not just outcomes. This Skill Builder asks you to build a two-column comparison chart using at least four CED examples (two negotiated, two armed struggle), identify one factor that explains each pairing's difference, and then draft a comparison argument.",
    steps: [
      { label: "India (Negotiated, 1947)", text: "Process: Mass nonviolent resistance (Salt March, Quit India) + political negotiation with Labour Britain. Factor: Britain's wartime exhaustion + Gandhi/Nehru built a mass movement that made repression politically costly at home and abroad. Effect: Indian Independence Act 1947, but accompanied by Partition, which produced its own violence." },
      { label: "The Gold Coast / Ghana (Negotiated, 1957)", text: "Process: Positive Action (nonviolent strikes/boycotts) → CPP electoral victory → negotiated transfer of power. Factor: Nkrumah's CPP demonstrated mass organizational strength and electoral legitimacy, making continued British governance impossible without CPP participation. Effect: first sub-Saharan independence, Ghana becomes a model." },
      { label: "Algeria (Armed Struggle, 1954–1962)", text: "Process: FLN guerrilla war + urban terrorism + French military repression → international isolation of France → French constitutional crisis → Évian Accords 1962. Factor: large French settler (pied-noir) population gave the French government political reasons to resist withdrawal; France classified Algeria as a domestic department, not a colony. Effect: independence after over 1 million Algerian deaths." },
      { label: "Vietnam (Armed Struggle, 1946–1954 / 1955–1975)", text: "Process: Viet Minh military resistance → Dien Bien Phu → Geneva Accords 1954 → continued armed conflict vs. U.S.-backed South → reunification 1975. Factor: France (and later the U.S.) refused to recognize Vietnamese independence declaration; Cold War stakes made Vietnam a proxy battlefield. Effect: independence through military defeat of two successive foreign powers." }
    ],
    prompt: "Using the four cases above, write a comparison argument in three or four sentences: identify one similarity in the processes of peoples pursuing independence after 1900 (something true of both paths), explain one key difference between the negotiated and armed-struggle paths, and explain one factor that accounts for the difference, connecting it to at least two specific CED examples."
  }

};
