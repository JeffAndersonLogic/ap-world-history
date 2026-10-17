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
    unit: "Unit 4: Transoceanic Interconnections",
    topic: "Topic 4.6",
    title: "Internal and External Challenges to State Power",
    subtitle: "The harder states pushed to expand and centralize, the harder people at the local level pushed back.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how states' push to expand and to centralize led different local groups to resist, using one case from Africa, Asia, or Europe and one from the Americas, and what that resistance changed.",
      kc: 'KC-4.3.III.iii',
      theme: "Governance"
    },
    {
      target: "I can explain how enslaved people in the Americas challenged the authorities over them through organized resistance, such as maroon communities and revolts, and how the authorities responded.",
      kc: 'KC-5.3.III.C',
      theme: "Governance"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain, for one case from Africa, Asia, or Europe (the Fronde, Razin's revolt, the Marathas, or Njinga) and one from the Americas (the Pueblo Revolt or Metacom's War), what the state pushed for, which group pushed back and how, what happened next and what the resistance changed, and one way the two cases were alike.",
      kc: 'KC-4.3.III.iii',
      theme: "Governance"
    },
    {
      criteria: "I can explain how one maroon community (Palmares or the Jamaica Maroons) and one revolt (the Stono Rebellion) were organized, how the authorities responded to each, and one reason the responses differed.",
      kc: 'KC-5.3.III.C',
      theme: "Governance"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 4: Learning Objective L',
      theme: 'Learning Objective',
      text: 'Explain the effects of the development of state power from 1450 to 1750.',
      illustrativeExamples: []
    },
    {
      code: 'KC-4.3.III.iii',
      theme: 'Governance',
      text: 'State expansion and centralization led to resistance from an array of social, political, and economic groups on a local level.',
      illustrativeExamples: ['Pueblo Revolts', 'Fronde', 'Cossack revolts', 'Maratha conflict with Mughals', 'Ana Nzinga’s resistance (as ruler of Ndongo and Matamba)', 'Metacom’s War (King Philip’s War)']
    },
    {
      code: 'KC-5.3.III.C',
      theme: 'Governance',
      text: 'Enslaved persons challenged existing authorities in the Americas through organized resistance.',
      illustrativeExamples: ['The establishment of Maroon societies in the Caribbean and Brazil', 'Resistance of enslaved persons in North America']
    }
  ],

  lecture: {
    title: "Push and Pushback: How It Worked",
    intro: "The First & 10 tells the story. These cards take four parts of it apart: what a centralizing state took from the people inside it, how many Pueblo towns rose on one day, how a warrior kingdom and a queen held off empires, and what made resistance by enslaved people organized.",
    videos: [],
    segments: [
      {
        title: "What Centralizing Took",
        bullets: [
          "A ruler who **centralized** took power from people who had shared it. In France, the judges of the **Parlement of Paris** had to register the king's new laws before they took effect, and many had paid for their positions. When the crown needed money for its war with Spain and demanded new taxes in 1648, the judges refused, and Paris backed them.",
          "In Russia, the tsar's **Law Code of 1649** took something from peasants: the right to leave. A serf who ran away could be returned to his lord, no matter how many years had passed. Many ran anyway, to the Cossack lands on the Don River, and in 1670 many of them followed Stenka Razin.",
          "Notice who resisted: judges, nobles, townspeople, peasants, Cossacks. These were the state's own people, so their pushback was an internal challenge, from inside the state."
        ],
        image: {
          title: "A judge of the Parlement of Paris, printed in 1648",
          caption: "A portrait print of Pierre Broussel, a judge of the Parlement of Paris, printed by an unnamed printmaker in 1648 with the French king's license, the year his arrest set off the barricades. The caption reads \"Pierre de Broussel, counselor of the King in his court of Parlement of Paris.\" Rijksmuseum.",
          url: "../assets/images/topics/4-6/broussel-paris-1648.jpg",
          sourceUrl: "https://id.rijksmuseum.nl/200435769"
        }
      },
      {
        title: "How Many Towns Rose on One Day",
        bullets: [
          "The Pueblos lived in many separate towns that spoke several languages and did not always get along. To rise together, they needed a plan and a signal. Runners carried **knotted cords** of maguey fiber from town to town. A town that agreed untied one knot, and the knots left counted the days until the revolt.",
          "The causes came in kinds. **Religious suppression**: friars banned the sacred dances and burned masks, and in 1675 the governor arrested forty-seven religious leaders. **Economic**: the encomienda took part of each harvest, and Pueblos were forced to work for Spaniards. **Political**: Spanish governors ruled by force and hanged Pueblo men accused of plotting, yet their soldiers did not stop Apache raids. On top of all three came years of drought and famine.",
          "The revolt of August 10, 1680, drove the Spanish out for twelve years. When they returned in the 1690s, they did not bring back the encomienda, and the friars pressed far less hard against Pueblo religion. The revolt was defeated in the end, but it changed the terms of Spanish rule."
        ],
        image: {
          title: "Pueblo Revolt, 1680",
          caption: "No picture made at the time of the revolt was found for this card, so the course's own artwork is shown.",
          url: "",
          sourceUrl: ""
        }
      },
      {
        title: "How a Kingdom and a Queen Held Off Empires",
        bullets: [
          "Some pushback came from the edges of expanding empires. The **Marathas** fought the Mughal emperor Aurangzeb from **hill forts** and with fast raids, instead of meeting his huge army in one battle. He could take a fort, but he could not take them all, and he died in the Deccan in 1707 without defeating them.",
          "**Njinga** of Ndongo and Matamba used both war and diplomacy against Portugal. She negotiated in Luanda in 1622 and was baptized there, fought the Portuguese for decades, joined forces with the Dutch after 1641, and made peace in the 1650s.",
          "These challenges came from outside the state that was pushing, from peoples it was trying to conquer, so they were external challenges."
        ],
        image: {
          title: "Shivaji, painted in the Deccan, about 1680",
          caption: "A portrait of the Maratha king Shivaji, painted at Golconda in the Deccan about 1680. Its decorated mount carries a long caption in Dutch. Rijksmuseum.",
          url: "../assets/images/topics/4-6/shivaji-golconda-c1680.jpg",
          sourceUrl: "https://id.rijksmuseum.nl/200383520"
        }
      },
      {
        title: "What Made Resistance Organized",
        bullets: [
          "**Organized resistance** means many people acting together in a way that challenged the authorities. **Palmares** in Brazil had towns, leaders, farms, trade, and an army, and in 1678 its leader Ganga Zumba made a treaty with the colonial government. Many in Palmares rejected it, and **Zumbi** fought on until he was killed in 1695.",
          "In Jamaica, the **Maroons** forced the British colony to sign treaties in 1739. The colony promised them freedom and land forever, but the treaty also made them send back any runaway who came to them and help put down other revolts.",
          "In South Carolina, the **Stono Rebellion** of 1739 was a march south toward Spanish Florida. The militia broke the march that afternoon, hunted down survivors over the following weeks and months, and the colony then passed the Negro Act of 1740 to tighten control over every enslaved person. How the authorities answered tells you how seriously they took organized resistance."
        ],
        image: {
          title: "Organized resistance by enslaved people",
          caption: "No picture made at the time was found for this card, so the course's own artwork is shown.",
          url: "",
          sourceUrl: ""
        }
      }
    ]
  },

  map: {
    title: "Push and Pushback, c. 1600 to 1739",
    url: "../assets/images/instructional-maps/topic-4-6.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-4-6.svg",
    caption: "Nine places where people pushed back against expanding and centralizing states, sorted into three kinds: pushback inside a state, pushback at the edge of an expanding state, and organized resistance by enslaved people.",
    intro: "Use the map to see how far the pushback reached. In about a century and a half, people pushed back against states in Europe, Asia, Africa, and the Americas. The colors sort the cases into three kinds; the key says which is which.",
    prompt: "Find ONE place where people pushed back inside their own state and ONE place where they pushed back at the edge of an expanding state. For each, name the state that was pushing and the group that pushed back. Then explain why one is an internal challenge, from inside a state, and the other an external one, from the edge of a state that was expanding."
  },

  deepReading: {
    title: "Push and Pushback",
    desc: "A textbook-depth companion on why centralizing and expanding states provoked resistance, how the Fronde and Razin's revolt challenged rulers from inside, how the Marathas and Njinga held off empires, how the Pueblos coordinated a revolt across many towns, and what made Palmares, the Jamaica Maroons, and the Stono rebels organized. Optional, and useful when a checkpoint asks what resistance changed.",
    url: "deep-reading-topic-4-6-internal-external-challenges.html"
  },

  first10: {
    title: 'First & 10: Push and Pushback',
    embedUrl: 'first-and-10-topic-4-6-internal-external-challenges-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10, answer the three questions, then return to the 4.6 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Push and Pushback",
    intro: "Use the cards to build one claim about why people pushed back against growing states, and how: a portrait print of a Paris judge from 1648, a Dutch print of a Russian rebel's capture, portraits of a Maratha king and a Mughal emperor painted in the Deccan, a Pueblo man's testimony from 1681, and the 1739 treaty with Jamaica's Maroons.",
    prompt: "Choose two cards and make one claim about what made people push back against a growing state, or how they did it."
  },

  primarySource: {
    title: "Primary Source: Pedro Naranjo on the Pueblo Revolt, 1681",
    intro: "Pedro Naranjo was a Keres man from San Felipe Pueblo. In December 1681, more than a year after the Pueblo Revolt, the Spanish tried to retake New Mexico and captured him. Spanish officials questioned him about why the Pueblos had rebelled. The record says he spoke Spanish well, though interpreters were present, and the officials wrote down his answers in Spanish. This is part of his declaration of December 19, 1681, in the English translation by Charmion Clair Shelby, published in 1942. \"Him\" in the middle passage is Popé; words in brackets are explanations.",
    text: "[S]ince the government of Señor General Hernando Ugarte y la Concha [the Spanish governor around 1650, about thirty years earlier] they have planned to rebel on various occasions through conspiracies of the Indian sorcerers [Pueblo religious leaders] ... and that it is true that during the government of the said Señor general seven or eight Indians were hanged for this same cause, whereupon the unrest subsided. ... [T]hey always kept in their hearts the desire to carry it out, so as to live as they are living today. ... They told him to make a cord of maguey fiber [a desert plant] and tie some knots in it which would signify the number of days that they must wait before the rebellion. ... [A]s soon as the Spaniards had left the kingdom an order came from the said Indian, Popé, in which he commanded all the Indians to break the lands and enlarge their cultivated fields, saying that now they were as they had been in ancient times, free from the labor they had performed for the religious [the friars] and the Spaniards ... He said that this is the legitimate cause and the reason they had for rebelling, because they had always desired to live as they had when they came out of the lake of Copala [the place Naranjo says his people first came from]. ... [T]he God of the Spaniards was worth nothing and theirs was very strong, the Spaniard's God being rotten wood.",
    questions: [
      "Find the reasons for the revolt in Naranjo's answers. Name ONE religious reason, ONE economic reason, and ONE political reason, and quote a few words of the source for each.",
      "Naranjo was a prisoner answering questions from the Spanish officials his people had driven out, and his words were written down in Spanish. How might that have shaped what he said, or how it was recorded? Choose one word or phrase in the excerpt and say whether it is more likely Naranjo's own words or the officials', and why.",
      "Using the source and what you know, explain the most significant cause of the Pueblo Revolt. Support your claim with one detail from the source."
    ]
  },

  beSurreal: {
    title: "BeSurreal: You Ran to the Don River, Spring 1670",
    desc: "You grew up in a farming village in central Russia, on a landlord's estate. Since the tsar's Law Code of 1649, a serf who leaves the estate can be hunted down and brought back, no matter how many years have passed.",
    intro: "Three winters ago you ran away, south across the steppe to the Don River, where the Cossacks live. Cossacks are free fighters and fishermen who answer to their own elected leaders, not to a landlord. The old Cossack families do not always welcome runaways like you, but here no one can drag you back to the estate.",
    detail: "This spring the camp is buzzing. A Cossack named Stenka Razin has come back from raiding along the Volga and the Caspian Sea with boats full of goods, and he is gathering men again. People say he is going up the Volga to fight the tsar's governors and the boyars, the great lords, not the tsar himself, and that towns will open their gates to him. Some of the older Cossacks warn that the tsar's army is large and well armed, and that rebels who are caught are executed. Your sister is still on the estate back home.",
    prompt: "Write a short message to your sister, who is still bound to the land. Explain why you ran, and why the 1649 law made running so dangerous. Then tell her whether you will join Razin, and why. Finally, write two sentences you would not dare send: what you think could happen to people like her if the revolt fails."
  },

  beInTheRoom: {
    url: '',
    desc: "Meet with the leaders of the Pueblo alliance in August 1680 and decide how to keep many towns, languages, and communities rising on the same day, and what should hold them together if the Spanish are driven out."
  }

};
