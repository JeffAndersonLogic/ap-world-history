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
      target: "I can explain how Enlightenment thinkers used reason to challenge traditional authority and articulate new ideas about natural rights, the social contract, and popular sovereignty.",
      kc: "KC-5.3.I.A",
      theme: "Cultural Developments and Interactions"
    },
    {
      target: "I can analyze how Enlightenment ideas spread through print culture and institutions, and evaluate the significant limits of Enlightenment universalism, particularly regarding women, enslaved people, and colonized peoples.",
      kc: "KC-5.3.I",
      theme: "Cultural Developments and Interactions"
    }
  ],

  successCriteria: [
    {
      criteria: "I can identify at least three Enlightenment philosophes and explain their core ideas (Locke: natural rights and consent of the governed; Rousseau: social contract and popular sovereignty; Montesquieu: separation of powers; Voltaire: religious tolerance; Wollstonecraft: rights of women; Smith: free market). I can explain how these ideas challenged the divine right of kings, hereditary aristocracy, and Church authority.",
      kc: "KC-5.3.I.A",
      theme: "Cultural Developments and Interactions"
    },
    {
      criteria: "I can describe two mechanisms by which Enlightenment ideas spread (print culture, newspapers, encyclopédies, pamphlets; Parisian salons; coffeehouses). I can identify at least two groups excluded from Enlightenment universalism and explain the structural reasons for their exclusion: women (Rousseau's claim that women's sphere was domestic); enslaved Africans and colonial subjects (Locke's investment in the Royal African Company; the philosophes' racist writings).",
      kc: "KC-5.3.I",
      theme: "Cultural Developments and Interactions"
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
    title: "Reason, Rights, and Authority: The Enlightenment",
    intro: "The Enlightenment (c. 1680–c. 1800) was an intellectual revolution before the political ones. By applying the methods of the Scientific Revolution to human society, Enlightenment thinkers created a vocabulary, natural rights, social contract, popular sovereignty, separation of powers, that revolutionaries in France, America, Haiti, and Latin America would use to justify overthrowing the established order. Understanding the Enlightenment means understanding both its radical promise and its profound limitations.",
    videos: [],
    segments: [
      {
        title: "What Was the Enlightenment? Origins and Context",
        bullets: [
          "The **Enlightenment** (c. 1680–c. 1800) was an intellectual movement centered in Western Europe, especially France, Britain, and Scotland, that argued reason, not tradition, scripture, or inherited authority, should be the basis for understanding the world and organizing society. Its intellectual ancestors were the Scientific Revolution (Newton's discovery of natural laws governing the physical world) and Renaissance humanism (the rediscovery of classical learning about human potential).",
          "The Enlightenment challenged three traditional pillars of European authority: the **divine right of kings** (monarchs derive their authority directly from God, not from the consent of the governed); **hereditary aristocracy** (birth determines social and political status permanently); and **Church authority** (the Church interprets God's will for both spiritual and political life, and is immune from rational criticism).",
          "For AP purposes, the Enlightenment is most important as a **cause of the Atlantic Revolutions** (Topic 5.2). Revolutionaries in America, France, Haiti, and Latin America used Enlightenment vocabulary, natural rights, popular sovereignty, social contract, to justify their actions. Understanding which philosophe said what allows you to trace the causal chain from 18th-century salon debate to 19th-century revolution.",
          "The Enlightenment also produced **economic ideas** (Adam Smith's free market theory) and **scientific advances** (systematic botany, chemistry, physics), but for the AP exam, the political and social ideas are the most heavily tested. The primary skill being assessed is causation: how did Enlightenment ideas cause the Atlantic Revolutions?"
        ],
        image: {
          title: "Waldseemüller Map — The World the Enlightenment Inherited",
          caption: "The Enlightenment thinkers inherited a world already transformed by European expansion. The global networks created by the Age of Exploration provided both the material conditions (print culture, global trade, Atlantic plantation economy) and the moral contradictions (slavery, colonialism) that shaped Enlightenment thought.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg"
        }
      },
      {
        title: "The Philosophes and Their Core Ideas",
        bullets: [
          "**John Locke** (1632–1704): The most influential Enlightenment thinker for the Atlantic Revolutions. In *Two Treatises of Government* (1689), Locke argued that all humans possess **natural rights**, life, liberty, and property, that exist prior to and independent of any government. Government derives its legitimacy from the **consent of the governed**; a government that violates natural rights forfeits its authority and the people have the right to overthrow it. This argument directly inspired the American Declaration of Independence (1776) and the French Declaration of the Rights of Man (1789).",
          "**Montesquieu** (1689–1755): In *The Spirit of the Laws* (1748), argued for the **separation of powers**, that executive, legislative, and judicial functions should be divided among separate institutions to prevent any single person or body from accumulating tyrannical power. His analysis of the British constitutional system (which he somewhat idealized) directly influenced the architects of the U.S. Constitution, particularly the tripartite structure of Congress, the President, and the Supreme Court.",
          "**Rousseau** (1712–1778): In *The Social Contract* (1762), argued that government is legitimate only if it reflects the **general will** of the people, **popular sovereignty**. Unlike Locke (who focused on protecting individual rights from government), Rousseau focused on collective self-governance. His ideas influenced the more radical phase of the French Revolution, which prioritized the collective good over individual rights. Importantly, Rousseau explicitly argued that women's natural sphere was the household, not politics, a contradiction that Mary Wollstonecraft directly challenged.",
          "**Voltaire** (1694–1778): The most famous and widely read philosophe, known for his wit and his attacks on religious intolerance, Church corruption, and the arbitrary cruelty of traditional authority. *Candide* (1759) mocked the optimism of those who justified suffering as part of God's plan. Voltaire believed in freedom of conscience and the separation of Church and state, but his writing also contained racist descriptions of non-European peoples that contradicted his universal claims.",
          "**Mary Wollstonecraft** (1759–1797): In *A Vindication of the Rights of Woman* (1792), applied the logic of natural rights to argue that women should have the same political and educational rights as men. If natural rights belong to all rational beings, they must include women. This was a direct challenge to Rousseau and to most male philosophes who assumed women's subordination. Wollstonecraft is the clearest example of how the Enlightenment's internal logic could be turned against its own limits.",
          "**Adam Smith** (1723–1790): In *The Wealth of Nations* (1776), argued that the **free market**, the 'invisible hand' of supply and demand, allocates resources more efficiently than government intervention or mercantilist monopolies. Smith challenged the mercantilist assumptions of European colonial empires (that trade should be tightly controlled for national advantage) and provided intellectual foundations for industrial capitalism. For the AP exam, Smith is primarily important as background to the economic transformations of Topics 5.3–5.7."
        ],
        image: {
          title: "Astrolabe — Scientific Instrument of the Age of Reason",
          caption: "The Enlightenment drew its authority from the success of the Scientific Revolution. If Newton could discover natural laws governing the physical universe through reason and observation, Enlightenment thinkers argued, surely reason could discover natural laws governing human society and government.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Astrolabe-Persian-18C.jpg"
        }
      },
      {
        title: "How the Enlightenment Spread — and Its Limits",
        bullets: [
          "**Print culture**: By the 18th century, expanded literacy and cheap printing made it possible for ideas to circulate rapidly across Europe and the Atlantic world. The **Encyclopédie** (1751–1772), edited by Denis Diderot and Jean le Rond d'Alembert, was the Enlightenment's most ambitious project, a systematic account of all human knowledge organized by reason rather than theology. It was banned by the French Crown and the Catholic Church (its existence proving the very point it was making about censorship), but 25,000 copies circulated across Europe.",
          "**Salons**: Intellectual gatherings hosted primarily by women in Paris provided spaces for philosophes to debate, refine, and publicize their ideas. Women like **Marie-Thérèse Rodet Geoffrin**, **Julie de Lespinasse**, and **Suzanne Necker** were central organizers and patrons of the Enlightenment network, they were, in effect, the institutional infrastructure of the movement. The deep irony: the same philosophes they hosted and financed generally excluded women from the political rights they were arguing for.",
          "**Coffeehouses** (especially in Britain) and **universities** (especially in Scotland, Edinburgh, Glasgow, and the Netherlands) were additional nodes of Enlightenment circulation. The **Republic of Letters**, an informal network of correspondence among scholars across Europe, enabled ideas to travel faster than political censorship could suppress them.",
          "**The limits of universalism**: Enlightenment universalism was deeply contradictory in practice. **Rousseau** explicitly argued that women's natural sphere was domestic, not political, his *Emile* (1762) described the ideal education for girls as preparation for obedience and charm, not citizenship. **Locke** invested in the Royal African Company, which transported enslaved Africans across the Atlantic, his natural rights theory had no mechanism to explain why enslaved people were excluded. **Voltaire** wrote explicitly racist descriptions of Africans and Asians. These limits are not peripheral to the Enlightenment, they reveal that 'universal' rights were conceived primarily by European men for European men, and that the struggle to actually universalize them would define the next two centuries of Atlantic history."
        ],
        image: {
          title: "VOC — Enlightenment in a Commercial World",
          caption: "The Enlightenment developed alongside the Atlantic commercial economy, the same global trade networks that enriched European merchants and funded the printing presses that spread Enlightenment ideas also sustained the plantation slavery that contradicted Enlightenment universalism.",
          url: "https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg",
          sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Voc.jpg"
        }
      }
    ]
  },

  map: {
    title: "The Republic of Letters: Enlightenment Ideas Across the Atlantic World, c. 1750",
    url: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg",
    sourceUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Waldseemuller_map_2.jpg",
    caption: "By c. 1750, Enlightenment ideas circulated across Europe and the Atlantic world through print culture, correspondence networks, salons, and universities. The same trade routes that carried silver and enslaved people also carried books, pamphlets, and letters among philosophes.",
    intro: "Examine the Atlantic world in c. 1750. Notice the concentration of Enlightenment intellectual centers in Western Europe (Paris, London, Edinburgh, Amsterdam) and the Atlantic trade routes that connected them to the Americas. Consider: how did the same infrastructure that sustained the plantation economy also spread the Enlightenment ideas that would eventually be used to challenge that economy?",
    prompt: "Using the map, explain how geography shaped both the spread of Enlightenment ideas and their limits. Why were Enlightenment ideas most accessible to educated Europeans, and hardest to access for enslaved Africans in the Americas? What does this geographic pattern reveal about the relationship between Enlightenment universalism and Enlightenment practice?"
  },

  first10: {
    title: 'First & 10: The Age of Reason',
    embedUrl: 'first-and-10-topic-5-1-enlightenment-capture.html',
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
