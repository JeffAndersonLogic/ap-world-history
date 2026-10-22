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
    subtitle: "1750 to 1900. Nature put coal, iron, and water close together in Britain, and its shortage of wood pushed it to coal. People built the rest: better farms, growing towns, laws that protected property, cotton from abroad, and money to invest. Together they made factories pay, and the factory put the work in one place and split it into small jobs.",
    feedbackToolUrl: "https://student.magicschool.ai/s/login?joinCode=czwb9Q",
    canvasSubmissionNote: "Organize your thinking here, submit your final work in Canvas."
  },

  learningTargets: [
    {
      target: "I can explain how Britain's environment (its coal, iron, and timber, and its rivers, coast, and canals) and the things people built (better farming, growing towns, laws that protected property, resources from abroad, and saved-up capital) worked together to cause industrial production to grow, starting in Britain.",
      kc: "KC-5.1.I.A",
      theme: "Humans and the Environment"
    },
    {
      target: "I can explain how the factory system gathered production in a single place and split the work into specialized jobs, and why that let a mill make more goods.",
      kc: "KC-5.1.I.C",
      theme: "Humans and the Environment"
    }
  ],

  successCriteria: [
    {
      criteria: "I can explain two things nature gave Britain (such as coal and iron lying close together and close to water; a shortage of wood that pushed Britons to burn coal and, from 1709, to make iron with coke; or rivers and canals, such as the Bridgewater Canal of 1761, which cut the price of coal in Manchester by about half) and two things people built (such as better farming with turnips and clover, towns such as Manchester, patents that protected inventions, cotton grown by enslaved people abroad, or money saved up from trade), saying for each what it made cheaper or possible, and one way two of them worked together.",
      kc: "KC-5.1.I.A",
      theme: "Humans and the Environment"
    },
    {
      criteria: "I can describe the putting-out system, explain how a mill like Arkwright's at Cromford (1771) brought workers to water-powered machines in one building, explain how the work in a cotton mill was split into steps (carding, drawing, roving, and spinning) with each worker tending one, use Adam Smith's pin workshop (1776) to explain why splitting the work made more goods, and connect the factory to one environmental factor, such as the water that turned its wheel.",
      kc: "KC-5.1.I.C",
      theme: "Humans and the Environment"
    }
  ],

  collegeBoardKeyConcepts: [
    {
      code: 'Unit 5: Learning Objective D',
      theme: 'Learning Objective',
      text: 'Explain how environmental factors contributed to industrialization from 1750 to 1900.',
      illustrativeExamples: []
    },
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
    title: "Coal, Water, and One Roof",
    intro: "Use these cards to see what nature gave Britain, what people built on top of it, how the factors worked together, and what the factory changed about work.",
    videos: [],
    segments: [
      {
        title: "What Nature Gave: Coal, Iron, Wood, and Water",
        bullets: [
          "**Before factories:** in 1750 most thread and cloth were made by hand in people's homes. Under the **putting-out system**, a merchant brought raw wool or cotton to families in the countryside, who spun and wove it on their own wheels and looms, and he paid them for each piece. Power came from muscles, horses, wind, and water wheels.",
          "**Coal and iron:** Britain sat on huge beds of coal, much of it close to the surface and close to rivers or the sea, often near iron ore.",
          "**Not enough wood:** by the 1600s most of Britain's old forests were gone, so wood was expensive, and much of the iron Britain used was bought from Sweden and Russia. Britons turned to coal: by 1700 it gave England about half its energy. In 1709, at Coalbrookdale beside the River Severn, Abraham Darby made iron using **coke**, a fuel baked from coal, instead of charcoal made from wood.",
          "**Water:** before railways, the cheapest way to move something heavy was to float it. Coal from the mines near Newcastle went by ship to London; fast streams turned water wheels. Then people dug **canals**. In 1761 the Duke of Bridgewater's canal began carrying coal from his mines at Worsley into Manchester, and the price of coal there fell by about half."
        ],
        image: {
          title: "Coalbrookdale by Night, 1801",
          caption: "Philip James de Loutherbourg's painting of the Madeley Wood furnaces near Coalbrookdale, beside the River Severn, lit up at night. Loutherbourg also painted scenery for the theater. Science Museum, London.",
          url: "../assets/images/commons/philipp-jakob-loutherbourg-d-j-002-23c595.jpg",
          sourceUrl: "https://collection.sciencemuseumgroup.org.uk/objects/co65204/coalbrookdale-by-night-by-philippe-jacques-de-loutherbourg"
        }
      },
      {
        title: "What People Built: Food, Towns, Laws, Cotton, and Money",
        bullets: [
          "**Better farming:** British farmers planted turnips and clover instead of leaving fields empty to rest. Turnips fed animals through the winter, clover enriched the soil, and more animals meant more manure and more grain. Landowners **enclosed** shared village fields into private farms, often by act of Parliament. More food fed more people: Britain grew from about 8 million people in 1761 to about 10.5 million in 1801, and by 1801 only about a third of English working men farmed.",
          "**Towns:** urbanization put workers close together and gave them neighbors to sell to. Manchester had about 23,000 people in 1773 and 70,409 in the census of 1801.",
          "**Laws that protected property:** Parliament, where landowners and merchants sat, passed the laws that enclosed fields and allowed canals. Since 1624 an inventor could take out a **patent**, the sole right to use a new invention for up to fourteen years; Richard Arkwright patented his spinning machine in 1769.",
          "**Resources from abroad:** cotton does not grow in Britain. By the 1780s most of the cotton spun in Manchester was grown by enslaved people on plantations in the Caribbean and South America, and after the 1790s more and more came from plantations in the United States.",
          "**Capital:** merchants, bankers, and landowners had grown rich from trade, including the Atlantic slave trade, and some risked their savings on mills. Historians still argue about how much came from slavery. Arkwright's partners, Samuel Need and Jedediah Strutt, had grown rich making stockings, and they spent thousands of pounds before the business made a profit.",
          "**Working together:** the Bridgewater Canal needed coal at Worsley, water to float it on, an act of Parliament (1759), the duke's money and loans, and a growing town to buy the coal. No single factor did it alone."
        ],
        image: {
          title: "A Cotton Plant, 1807",
          caption: "A hand-colored engraving by J. Pass after a drawing by Maria Sibylla Merian, published in London in 1807. Merian drew the plants of Suriname, a Dutch plantation colony in South America. Cotton, the factory's raw material, had to be grown abroad. Wellcome Collection.",
          url: "../assets/images/topics/5-3/cotton-plant-pass-after-merian-1807.jpg",
          sourceUrl: "https://wellcomecollection.org/works/r986rsr9"
        }
      },
      {
        title: "The Factory: One Place, One Job Each",
        bullets: [
          "**One place:** in 1771 Arkwright and his partners built a cotton-spinning mill at **Cromford**, in Derbyshire. A water wheel, fed by a brook and by a tunnel that drained the nearby lead mines, turned the machines. The workers came to the machines, in one building, at the hours the mill set, under an overseer. The village was too small, so Arkwright built houses for them; most were women and children, some as young as seven. UNESCO says the valley \"saw the birth of the factory system.\"",
          "**One job each:** in a cotton mill, raw cotton was cleaned, carded (combed straight), drawn out, twisted into a loose rope called roving, and spun into thread. Cromford began with machines for spinning; in 1775 Arkwright patented machines for the earlier steps too. From then on each step after cleaning had its own machine, tended by workers who did that job and no other. This is **specialization of labor**.",
          "**Why it made more:** Adam Smith described a pin workshop in 1776 where ten men who shared about eighteen steps, each doing only one, two, or three of them, \"could make among them upwards of forty-eight thousand pins in a day,\" while one man alone \"could scarce ... make one pin in a day.\" Simple jobs could be learned quickly, so mills could hire workers with no training, many of them children.",
          "**A writer of the time:** in 1835 Andrew Ure, who admired factories, defined one as many kinds of workers \"tending with assiduous skill a system of productive machines continuously impelled by a central power\": one power source, many machines, each with its own workers.",
          "**Not the first, not steam:** earlier mills, such as a silk mill at Derby in the 1720s, had some factory features, and Cromford ran on water. Steam power is Topic 5.5."
        ],
        image: {
          title: "Carding, Drawing, and Roving",
          caption: "An engraving of the room in a cotton mill where cotton was combed, drawn out, and twisted, drawn by Thomas Allom in the 1830s, here from a later reprint. Each row of machines does one step; belts from the ceiling turn them all. Wellcome Collection.",
          url: "../assets/images/topics/5-3/carding-drawing-roving-allom-engraving.jpg",
          sourceUrl: "https://wellcomecollection.org/works/azdqm7t7"
        }
      }
    ]
  },

  map: {
    title: "Britain's Industrial Geography, c. 1770 to 1801",
    url: "../assets/images/instructional-maps/topic-5-3.svg",
    sourceUrl: "../assets/images/instructional-maps/topic-5-3.svg",
    caption: "A BeHistorical map of Britain's main coalfields, its rivers and early canals, and the places this topic names: Coalbrookdale, Cromford, Worsley, Manchester, Liverpool, Newcastle, and London.",
    intro: "Find the coalfields first. Then find the rivers, the coast, and the canals near them. Then find the four places this topic names in the north and Midlands: Coalbrookdale, Cromford, Worsley, and Manchester.",
    prompt: "Using the map, explain how one thing nature gave Britain helped industry grow in one place on the map. Name the place, the factor (coal, iron, or water), and what it made cheaper or possible."
  },

  deepReading: {
    title: "Coal, Water, and One Roof",
    desc: "A longer, optional chapter on the same story: how Britain's coal, iron, shortage of wood, and waterways contributed to industrialization; how better farming, growing towns, laws, cotton from abroad, and capital made factories worth building; how the factors worked together; and what the factory system changed about work.",
    url: "deep-reading-topic-5-3-industrial-revolution-begins.html"
  },

  first10: {
    title: 'First & 10: Coal, Water, and One Roof',
    embedUrl: 'first-and-10-topic-5-3-industrial-revolution-begins-capture.html?v=response-id-fix-v1',
    note: 'Read the First & 10 story, answer the three questions, then return to the 5.3 lesson path.'
  },

  evidenceLab: {
    title: "Evidence Lab: Causes of Industry, and the Factory System",
    intro: "Use the cards to find causes of industrialization and changes the factory system made, and what each source can and cannot show.",
    prompt: "Choose two cards. For each, say what kind of source it is, what it shows about a cause of industrialization or about the factory system, and one thing it cannot tell you.",
    items: []
  },

  primarySource: {
    title: "Primary Source: Adam Smith and Andrew Ure on Dividing the Work",
    intro: "Two writers of the time described how splitting work into steps changed how things were made. Adam Smith, a Scottish thinker, wrote The Wealth of Nations in 1776, five years after Arkwright's mill opened at Cromford. He described a small hand workshop that made pins. Andrew Ure, a Scottish scientist who admired factories, wrote The Philosophy of Manufactures in 1835, when cotton mills ran on steam. He defined what a factory is.",
    attribution: "Passages 1 and 2: Adam Smith, An Inquiry into the Nature and Causes of the Wealth of Nations, 1776, Book I, chapter 1. Passage 3: Andrew Ure, The Philosophy of Manufactures, London, 1835, p. 13",
    text: "<strong>Passage 1, Smith (1776).</strong> One man draws out the wire; another straights it; a third cuts it; a fourth points it; a fifth grinds it at the top for receiving the head ... and the important business of making a pin is, in this manner, divided into about eighteen distinct operations.<br><br><strong>Passage 2, Smith (1776).</strong> I have seen a small manufactory of this kind, where ten men only were employed ... Those ten persons, therefore, could make among them upwards of forty-eight thousand pins in a day. ... But if they had all wrought separately and independently ... they certainly could not each of them have made twenty, perhaps not one pin in a day.<br><br><strong>Passage 3, Ure (1835).</strong> The term Factory, in technology, designates the combined operation of many orders of work-people, adult and young, in tending with assiduous skill a system of productive machines continuously impelled by a central power.",
    questions: [
      "In your own words, explain what Smith describes in Passages 1 and 2. How many pins could ten men make in a day by splitting the work, and how many could one man make alone?",
      "In Passage 3, Ure defines a factory. His definition names \"a system of productive machines\" and \"a central power.\" Does Smith describe either of these in Passages 1 and 2? What does that tell you about how a factory differs from Smith's workshop?",
      "Using both writers, explain the factory system as a process: how did gathering workers in one place and splitting the work into steps let a mill make more goods?"
    ]
  },

  beSurreal: {
    title: "BeSurreal: Cromford, Derbyshire, 1772",
    desc: "You are a spinner in a Derbyshire village. All your life you have spun thread at home, on a wheel by the window, from cotton and wool a merchant brings to your door. He pays you for each bundle of thread. Down the valley, a man named Richard Arkwright has built a mill beside the brook, and its water wheel turns all day.",
    intro: "Your daughter Ann is twelve. The mill has offered her a place. She would walk there with the other girls before it is light, work at one machine all day, every day but Sunday, and bring home wages every week. The merchant still comes to your door, but your neighbors say the mill's thread is cheaper and stronger, and you wonder how long he will keep coming.",
    detail: "You have watched the mill from the road. Everyone goes into one building at the same hour, when the bell rings. Inside, you hear, nobody spins a whole thread the way you do. One girl only feeds cotton into a machine that combs it. Another only watches a row of spindles and mends the broken threads. The machines do the spinning; the people tend the machines. People say Mr. Arkwright wants whole families from other villages to come and work for him, and that he means to build houses for them. You spin at your own pace, and you know every step of the work. Ann would know one.",
    prompt: "Write a letter to your sister in another village about the offer to Ann. Explain two things that would change if Ann went to the mill instead of spinning at home: where the work happens, and how the work is divided. Say what Ann would gain and what she would lose. Use the words factory, putting-out, and specialization."
  },

  beInTheRoom: {
    url: '',
    desc: "Nottingham, early 1771. As one of Richard Arkwright's partners, decide where to build the new spinning mill, how to divide the work inside it, and how to pay for it and protect it."
  }

};
