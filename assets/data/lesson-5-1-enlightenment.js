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
    topic: "Topic 5.1",
    title: "The Enlightenment",
    subtitle: "How Enlightenment thinkers used reason to challenge traditional authority — and why their universalism had profound limits that the next century would struggle to resolve",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain the intellectual and ideological context in which Atlantic revolutions developed, including reason, empiricism, natural rights, the social contract, and popular sovereignty.",
      kc: "KC-5.3.I.A; KC-5.3.I",
      theme: "Cultural Developments and Interactions"
    },
    {
      target: "I can analyze how Enlightenment ideas challenged traditional political and religious authority and how their diffusion helped provide justification for revolutions and new forms of political identity, including nationalism.",
      kc: "KC-5.3.I; KC-5.3.II.i",
      theme: "Cultural Developments and Interactions"
    },
    {
      target: "I can evaluate how Enlightenment and religious ideals influenced reform movements that expanded rights, including suffrage, abolition, the end of serfdom, women’s rights, and emergent feminism.",
      kc: "KC-5.3.I.C; KC-5.3.IV.B",
      theme: "Social Interactions and Organization"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain the core ideas of at least three Enlightenment thinkers—including natural rights, social contract, popular sovereignty, separation of powers, or religious tolerance—and connect those ideas to reason and empiricism.",
      kc: "KC-5.3.I.A",
      theme: "Cultural Developments and Interactions"
    },
    {
      criteria: "I can explain how Enlightenment ideas challenged divine-right monarchy, hereditary privilege, or religious authority and describe at least one mechanism of diffusion such as print culture, salons, coffeehouses, or correspondence.",
      kc: "KC-5.3.I; KC-5.3.II.i",
      theme: "Cultural Developments and Interactions"
    },
    {
      criteria: "I can connect Enlightenment or religious ideals to at least two reforms from expanded suffrage, abolition of slavery, end of serfdom, or women’s rights, and use Mary Wollstonecraft, Olympe de Gouges, or the Seneca Falls Conference as specific evidence for challenges to gender hierarchy.",
      kc: "KC-5.3.I.C; KC-5.3.IV.B",
      theme: "Social Interactions and Organization"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'KC-5.3.I.A',
      theme: 'Cultural Developments and Interactions',
      text: 'Enlightenment philosophies applied new ways of understanding and empiricist approaches to both the natural world and human relationships; they also reexamined the role that religion played in public life and emphasized the importance of reason. Philosophers developed new political ideas about the individual, natural rights, and the social contract.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.I',
      theme: 'Cultural Developments and Interactions',
      text: 'The rise and diffusion of Enlightenment thought that questioned established traditions in all areas of life often preceded revolutions and rebellions against existing governments.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.II.i',
      theme: 'Cultural Developments and Interactions',
      text: 'Nationalism also became a major force shaping the historical development of states and empires.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.I.C',
      theme: 'Social Interactions and Organization',
      text: 'Enlightenment ideas and religious ideals influenced various reform movements. These reform movements contributed to the expansion of rights, as seen in expanded suffrage, the abolition of slavery, and the end of serfdom.',
      illustrativeExamples: []
    },
    {
      code: 'KC-5.3.IV.B',
      theme: 'Social Interactions and Organization',
      text: 'Demands for women’s suffrage and an emergent feminism challenged political and gender hierarchies.',
      illustrativeExamples: ['Mary Wollstonecraft’s A Vindication of the Rights of Woman', 'Olympe de Gouges’s Declaration of the Rights of Woman and of the Female Citizen', 'Seneca Falls Conference (1848), organized by Elizabeth Cady Stanton and Lucretia Mott']
    }
  ],

  lecture: {
    title: "Reason, Rights, Revolution, Reform",
    intro: "The Enlightenment matters because it changed the language people used to judge authority. Reason, natural rights, social contract, and popular sovereignty gave critics of monarchy, privilege, and religious authority a new standard: institutions should be justified by what they do for people, not simply by tradition. Those ideas helped justify revolutions, but their effects continued into reform movements that widened political and social rights.",
    videos: [],
    segments: [
      {
        title: "A New Standard: Reason and Empiricism",
        bullets: [
          "Enlightenment thinkers applied **reason and empiricism**—methods associated with the Scientific Revolution—to human society. If nature operated according to discoverable laws, many thinkers argued that government, law, religion, and social institutions could also be examined and improved through reason.",
          "This approach weakened the assumption that tradition itself proved legitimacy. **Inherited authority had to be defended**, not merely accepted.",
          "The intellectual shift created a powerful habit of questioning: Who has rights? Where does government authority come from? What is religion’s proper role in public life? Can unequal social institutions be justified rationally?"
        ],
        image: {
          title: "The Enlightenment world",
          caption: "Print, correspondence, salons, and urban intellectual networks helped circulate a new language of reason and rights.",
          url: "../assets/images/instructional-maps/topic-5-1.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-5-1.svg"
        }
      },
      {
        title: "New Political Ideas Challenge Old Authority",
        bullets: [
          "**John Locke** argued for natural rights and government by consent; **Rousseau** emphasized the social contract and popular sovereignty; **Montesquieu** argued for separation of powers; **Voltaire** defended religious tolerance and criticized clerical intolerance.",
          "These ideas challenged the **divine right of kings**, hereditary privilege, and unchecked religious authority. A government that violated rights could now be described not just as harsh but as **illegitimate**.",
          "The Enlightenment did not mechanically cause revolution. It supplied the **vocabulary and justification** that revolutionaries could use when fiscal crises, colonial grievances, inequality, or political breakdown created an opening for rebellion."
        ],
        image: {
          title: "Locke and political consent",
          caption: "Natural-rights theory made consent, rather than divine appointment, a standard for legitimate government.",
          url: "../assets/images/instructional-maps/topic-5-1.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-5-1.svg"
        }
      },
      {
        title: "Ideas Spread — and Political Identity Changes",
        bullets: [
          "Books, pamphlets, newspapers, the **Encyclopédie**, salons, coffeehouses, universities, and correspondence networks spread Enlightenment arguments across the Atlantic world.",
          "The diffusion of rights language preceded and shaped revolutions in North America, France, Haiti, and Latin America. It also interacted with the growing force of **nationalism**, as people increasingly imagined political community through shared language, culture, territory, or citizenship.",
          "The universal language of rights contained major contradictions. Women, enslaved people, and colonized subjects were often excluded in practice. Those exclusions became arguments for extending Enlightenment principles further rather than evidence that the ideas had no effect."
        ],
        image: {
          title: "Print and discussion networks",
          caption: "Enlightenment ideas became politically significant because they circulated beyond individual philosophers.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Salon_de_Madame_Geoffrin.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:Salon_de_Madame_Geoffrin.jpg"
        }
      },
      {
        title: "From Revolutionary Rights to Reform Movements",
        bullets: [
          "Enlightenment and religious ideals helped inspire movements that expanded **suffrage**, attacked **slavery**, and contributed to the **end of serfdom**. These reforms show that the Enlightenment’s effects continued after the first Atlantic revolutions.",
          "**Mary Wollstonecraft** used Enlightenment logic to argue that women were rational beings entitled to education and rights. **Olympe de Gouges** rewrote revolutionary rights language to expose women’s exclusion from French political equality.",
          "At **Seneca Falls in 1848**, Elizabeth Cady Stanton and Lucretia Mott helped turn natural-rights language toward organized demands for women’s political equality. The long-term causal pattern is: **new ideas -> critique of exclusion -> organized reform -> expanded rights**."
        ],
        image: {
          title: "Rights language extended to women",
          caption: "Women’s-rights advocates used the logic of universal rights to challenge political and gender hierarchies.",
          url: "../assets/images/instructional-maps/topic-5-1.svg",
          sourceUrl: "../assets/images/instructional-maps/topic-5-1.svg"
        }
      }
    ]
  },

  map: {
    title: "The Republic of Letters: Enlightenment Ideas Across the Atlantic World, c. 1750",
    url: "../assets/images/instructional-maps/topic-5-1.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-5-1.svg",
    caption: "By c. 1750, Enlightenment ideas circulated across Europe and the Atlantic world through print culture, correspondence networks, salons, and universities. The same trade routes that carried silver and enslaved people also carried books, pamphlets, and letters among philosophes.",
    intro: "Examine the Atlantic world in c. 1750. Notice the concentration of Enlightenment intellectual centers in Western Europe (Paris, London, Edinburgh, Amsterdam) and the Atlantic trade routes that connected them to the Americas. Consider: how did the same infrastructure that sustained the plantation economy also spread the Enlightenment ideas that would eventually be used to challenge that economy?",
    prompt: "Using the map, explain how geography shaped both the spread of Enlightenment ideas and their limits. Why were Enlightenment ideas most accessible to educated Europeans, and hardest to access for enslaved Africans in the Americas? What does this geographic pattern reveal about the relationship between Enlightenment universalism and Enlightenment practice?"
  },

  deepReading: {
    title: "Where Authority Comes From",
    desc: "A textbook-depth companion on six Enlightenment arguments and what each one licenses, how banned books reached readers through a cross-border smuggling trade, why the exclusions of women and enslaved people were built into the theory rather than appended to it, and what Wollstonecraft, de Gouges, Equiano and Haiti did with a universal claim once it existed in print. Optional, and useful when a checkpoint asks you to explain a thinker rather than name one.",
    url: "deep-reading-topic-5-1-enlightenment.html"
  },

  first10: {
    title: 'First & 10: The Age of Reason',
    embedUrl: 'first-and-10-topic-5-1-enlightenment-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 5.1 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: The Enlightenment and Its Limits",
    intro: "Use the evidence below to analyze how Enlightenment ideas challenged traditional authority and simultaneously revealed their own contradictions. Strong AP causation and comparison arguments require specific evidence and a clear explanation of mechanisms.",
    prompt: "Choose one piece of evidence. Explain what it reveals about either the Enlightenment's challenge to traditional authority OR the limits of Enlightenment universalism. Be specific about which thinker, which idea, and which contradiction.",
    items: [
      { title: "Locke, Two Treatises of Government (1689)", detail: "Locke argued that 'men being by nature all free, equal, and independent, no one can be put out of this estate and subjected to the political power of another without his own consent.' This passage was quoted directly in both the American Declaration of Independence and the French Declaration of the Rights of Man. Locke was simultaneously a major investor in the Royal African Company, which transported enslaved Africans. Analyze: how could the same person write both the theory of natural rights AND invest in the slave trade? What does this reveal about the Enlightenment's limits?" },
      { title: "Wollstonecraft, Vindication of the Rights of Woman (1792)", detail: "Mary Wollstonecraft argued: 'I wish to persuade women to endeavour to acquire strength, both of mind and body... Let it not be concluded that I wish to invert the order of things; I have already granted, that, from the constitution of their bodies, men seem to be designed by Providence to attain a greater degree of virtue. I speak collectively of the whole sex; but I see not the shadow of a reason to conclude that their virtues should differ in respect to their nature.' How does Wollstonecraft use Enlightenment logic against the Enlightenment's own exclusions? What does her argument reveal about the internal tensions within Enlightenment universalism?" },
      { title: "Encyclopédie, article on 'Natural Rights' (Diderot, c. 1755)", detail: "Diderot wrote in the Encyclopédie: 'Natural liberty is the right which nature gives to all mankind, of disposing of their persons and property, after the manner they judge most convenient to their happiness, on condition of their acting within the limits of the law of nature.' The Encyclopédie was banned by the French Crown in 1759 and again in 1762. Analyze what the banning of the Encyclopédie reveals about the relationship between Enlightenment ideas and political power. Why did the French Crown fear a dictionary?" }
    ]
  },

  primarySource: {
    title: "Primary Source: John Locke, Second Treatise of Government (1689)",
    intro: "John Locke's Second Treatise of Government (1689) was the foundational text of Enlightenment political thought. Written in the context of the Glorious Revolution (1688), it argued that political authority derives from the consent of the governed, not from divine right. This passage became one of the most-cited texts in the American and French Revolutions. Locke was simultaneously a major investor in the Royal African Company, which transported enslaved Africans across the Atlantic. The contradiction between his theory and his practice is one of the defining tensions of the Enlightenment.",
    text: [
      "Men being by nature all free, equal, and independent, no one can be put out of this estate and subjected to the political power of another without his own consent.",
      "The natural liberty of man is to be free from any superior power on earth, and not to be under the will or legislative authority of man, but to have only the law of nature for his rule.",
      "Whensoever any number of men are so united into one society as to quit every one his executive power of the law of nature and to resign it to the public, there and there only is a political or civil society.",
      "The great and chief end, therefore, of men's uniting into commonwealths and putting themselves under government is the preservation of their property, by which I mean their lives, liberties, and estates.",
      "Whenever the legislators endeavour to take away and destroy the property of the people, or to reduce them to slavery under arbitrary power, they put themselves into a state of war with the people, who are thereupon absolved from any further obedience."
    ],
    questions: [
      "What is Locke's basis for natural rights? Why does he say 'no one can be put out of this estate... without his own consent'? What authority is he invoking if not God or tradition?",
      "How were these words used by American colonists in 1776? How might enslaved Africans in Saint-Domingue (Haiti) have used the same words in 1791? What do these two different applications reveal about how Enlightenment ideas could be used to justify very different political projects?",
      "Locke was a major investor in the Royal African Company, which transported enslaved Africans across the Atlantic. He also wrote the Fundamental Constitutions of Carolina, which included provisions protecting slaveholders' property rights. How does knowing this context change your reading of the passage above? Can a person hold these ideas and these investments simultaneously without contradiction, or does the contradiction reveal something important about the limits of Enlightenment universalism?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Are a Philosophe at a Parisian Salon, 1762",
    desc: "You are a writer and philosophe at a Parisian salon hosted by Madame Geoffrin, c. 1762. Your work on natural rights has circulated widely. Tonight, a visitor from Saint-Domingue, a free man of color and a property owner, challenges you directly.",
    intro: "The visitor has read your work. He says: 'I read your argument that all men possess natural rights by birth. I showed your words to my neighbor in Saint-Domingue, a man who was born enslaved. He asked me: do your natural rights apply to him? He has a name. He has a family. He was born, just as you were. The French Declaration promises liberty to all. But the plantation owners in Saint-Domingue, men who also read your work, say your words do not apply to him. I need you to tell me: do they apply? And if they do not, what exactly do you mean by natural?'",
    detail: "The room has gone quiet. You are aware of several things simultaneously: the logic of your own argument (if rights are natural, they must apply to all rational beings, regardless of birth); the economic reality (the wealth of France depends heavily on Saint-Domingue's sugar plantations, which depend on enslaved labor); the social reality (several investors in the plantation trade are in this room right now); and the intellectual reality (you have not, in fact, ever directly addressed whether your natural rights theory applies to enslaved Africans, you have always written about it in abstraction).",
    prompt: "Write your internal monologue as you formulate your response to the visitor's question. Do you acknowledge the contradiction, that your own theory of natural rights implies that slavery is illegitimate? Do you rationalize the exclusion somehow? Do you try to change the subject? Or do you, for the first time, genuinely reckon with what you have written? Your response should reveal the full intellectual and moral complexity of a thinker confronted with the limits of his own universalism, not a simple villain, but not a simple hero either."
  },

  beInTheRoom: {
    url: '',
    desc: "Debate whether Rousseau or Locke better explains the relationship between the individual and the state, advise Diderot on which articles to include in the Encyclopédie despite royal censorship, or challenge a salon philosophe on why his natural rights theory does not extend to enslaved Africans."
  }

};
