/*
 * Topic 4.6 canonical Teaching OS source.
 * CED: Fall 2026 p. 88 (scripts/lib/ced-source/unit-4.js). Reasoning process:
 * Causation. Suggested skill: 4.B Contextualization. One learning objective:
 * L (Governance), explain the effects of the development of state power from
 * 1450 to 1750. Key Concepts KC-4.3.III.iii and KC-5.3.III.C.
 * Story: docs/TOPIC-4-6-STORY-DRAFT.md, approval delegated to the independent
 * reviewer loop (Jeff's standing rule of 2026-10-12). First & 10 "Push and
 * Pushback" is written from the same story, and this deck retells it.
 * Spine: The harder states pushed to expand and centralize, the harder people
 * at the local level pushed back.
 * Wall version: Push, and pushback.
 * Retelling slide: the four-link cause chain (phase 'chain').
 *
 * Class dates: Green Wednesday 2026-11-11, Silver Thursday 2026-11-12.
 * Required modules: 02 First & 10, 05 Skill Builder, 07 Evidence Lab,
 * 10 Checkpoint 2.
 */
window.BEHISTORICAL_TEACHING = {
  meta: {
    topic: '4.6',
    minutes: 90,
    title: 'Internal and External Challenges to State Power',
    subtitle: 'The harder states pushed to expand and centralize, the harder people at the local level pushed back.',
    essentialQuestion: 'From 1450 to 1750, how did states\' push to expand and centralize lead to resistance, who resisted, and what did that resistance change?',
    apFocus: 'Causation, with Contextualization 4.B',
    endTarget: 'Students can explain how expansion and centralization led different local groups to resist, with one case from Afro-Eurasia (the Fronde, Razin, the Marathas or Njinga) and one from the Americas (the Pueblo Revolt or Metacom\'s War); explain how enslaved people challenged the authorities through organized resistance (Palmares, the Jamaica Maroons, Stono) and how the authorities responded; sort outcomes as crushed, bargained or worn down; and place one revolt in its broader context in a sentence.'
  },

  priorities: {
    must: [
      'Run every case through the same chain: what the state pushed, who it landed on, how they pushed back, what happened next (Causation, LO L).',
      'Show the array of groups (KC-4.3.III.iii): judges and nobles, peasants and Cossacks, a warrior kingdom, a queen, Indigenous towns. At least one Afro-Eurasian case beside an American one.',
      'Teach organized resistance by enslaved people (KC-5.3.III.C) as organized: Palmares\'s towns and treaty, the Jamaica treaty, the Stono march.',
      'Land the spine with the cause-chain slide: push, landing, pushback, answer.'
    ],
    should: [
      'Model 4.B Contextualization on the Fronde, then let students practice on Stono in the Skill Builder.',
      'Correct three myths: "only colonized peoples resisted," "maroons were just runaways hiding," and "resisting a European empire meant opposing slavery." Each is now in the AVOID note of the slide it belongs to (slides 6, 7 and 9); the retelling chain\'s last link answers a fourth, "resistance always failed."',
      'Ask why Metacom\'s War was crushed while the Pueblos won twelve years (slides 7 and 8): same decade, opposite outcomes.'
    ],
    could: [
      'Use the BeInTheRoom Knotted Cord as an extension for students who finish early.',
      'Point students who want more depth to the eBook chapter, "Push and Pushback."'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the chain, the three big ideas, owns and bridge-only.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 4.5, 3.2 and 4.4. Bridge to who pushed back.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over Razin\'s capture.', students: 'Predict who might push back against a state.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '5-17', minutes: 12, teacher: 'Module 02: students read "Push and Pushback" in class.', students: 'For every case: push, who, how, what next.', slide: 4 },
    { id: 'push', label: 'Two Pushes', range: '17-19', minutes: 2, teacher: 'Centralize inward, expand outward, and what each cost.', students: 'Sort a cost under each push.', slide: 5 },
    { id: 'inside', label: 'Big Idea 1: Inside the State', range: '19-23', minutes: 4, teacher: 'The Fronde and Razin: centralization pushed back.', students: 'Run both cases through the chain.', slide: 6 },
    { id: 'edges', label: 'Big Idea 2: At the Edges', range: '23-27', minutes: 4, teacher: 'Marathas, Njinga, Metacom: expansion pushed back.', students: 'Explain why the endings differ.', slide: 7 },
    { id: 'pueblo', label: 'Big Idea 2: The Pueblo Revolt', range: '27-31', minutes: 4, teacher: 'Causes in kinds; the cord; what changed after.', students: 'Sort the causes by kind.', slide: 8 },
    { id: 'enslaved', label: 'Big Idea 3: Enslaved People Organize', range: '31-35', minutes: 4, teacher: 'Palmares, Jamaica, Stono, and how colonies answered.', students: 'Find the evidence of organization.', slide: 9 },
    { id: 'context', label: 'Contextualize It', range: '35-37', minutes: 2, teacher: 'Model 4.B on the Fronde with a sentence frame.', students: 'Say the frame aloud for the Fronde.', slide: 10 },
    { id: 'chain', label: 'Push and Pushback', range: '37-41', minutes: 4, teacher: 'Students redraw the chain from memory.', students: 'Retell the whole topic.', slide: 11 },
    { id: 'sharpen', label: 'Sharpen the Claim', range: '41-43', minutes: 2, teacher: 'From "they were oppressed" to a cause chain.', students: 'Upgrade a weak claim.', slide: 12 },
    { id: 'skill', label: 'Skill Builder', range: '43-51', minutes: 8, teacher: 'Module 05: Contextualization.', students: 'Put Stono in its context.', slide: 13 },
    { id: 'evidence', label: 'Evidence Lab', range: '51-59', minutes: 8, teacher: 'Module 07: one claim about pushback from two sources.', students: 'Observe, then infer, then name a limit.', slide: 14 },
    { id: 'cp2', label: 'Checkpoint 2', range: '59-71', minutes: 12, teacher: 'Module 10: organized resistance by enslaved people. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 15 },
    { id: 'close', label: 'Landing Sentence', range: '71-73', minutes: 2, teacher: 'Land the answer and hand off to 4.7.', students: 'Say the topic in one sentence.', slide: 16 }
  ],

  quickLaunch: [
    { label: 'Student Lesson 4.6', url: '../unit-4/lesson-4-6-internal-external-challenges.html' },
    { label: 'First & 10', url: '../unit-4/first-and-10-topic-4-6-internal-external-challenges-capture.html' },
    { label: 'BeInTheRoom: The Knotted Cord', url: '../beintheroom/unit-4/the-knotted-cord.html' },
    { label: 'Deep Reading', url: '../unit-4/deep-reading-topic-4-6-internal-external-challenges.html' }
  ],

  projection: {
    storageKey: 'behistorical-topic-4-6-slide',
    title: 'Topic 4.6 Presentation',
    file: 'present-topic-4-6.html'
  },

  slides: [
    {
      phase: 'preflight', kind: 'question', eyebrow: 'Teacher Preflight · 2 Minutes',
      title: 'Push, and pushback.',
      subtitle: 'Causation, with Contextualization 4.B. Every case runs one chain: what the state pushed, who it landed on, how they pushed back, what happened next.',
      notes: {
        minutes: 2,
        keys: [
          'Spine: states pushed harder, people pushed back',
          'Every case: push, who it hit, pushback, next',
          'Show the array: many kinds of groups',
          'Pair an Afro-Eurasian case with an American one',
          'Enslaved resistance taught as organized',
          'European rivalry is 4.5, not "external"',
          'Three myths: AVOID notes, slides 6, 7, 9'
        ],
        land: [
          'CED p. 88. One learning objective, L (Governance): explain the effects of the development of state power from 1450 to 1750. The reasoning process is Causation (p. 75); the suggested skill is 4.B Contextualization, explain how a development is situated in a broader context.',
          'KC-4.3.III.iii: state expansion and centralization led to resistance from an array of social, political and economic groups on a local level. KC-5.3.III.C: enslaved persons challenged existing authorities in the Americas through organized resistance.',
          'The CED\'s illustrative examples (optional): Pueblo Revolts; Fronde; Cossack revolts; Maratha conflict with Mughals; Ana Nzinga\'s resistance (as ruler of Ndongo and Matamba); Metacom\'s War (King Philip\'s War); Maroon societies in the Caribbean and Brazil; resistance of enslaved persons in North America. All eight are in this deck, each told briefly, because "an array of groups" is the Key Concept and no one case can show it.',
          'The CED\'s sample activity (p. 77) is a close reading of the Declaration of Pedro Naranjo (1681). It is the Primary Source module; slide 8 quotes the knotted-cord passage in its notes.',
          'Owns: local resistance to expanding and centralizing states, across Afro-Eurasia and the Americas; organized resistance by enslaved people in the Americas.',
          'Bridge only: rivalries between European states (KC-4.3.III.ii, Topic 4.5; the Unit 4 contract forbids it as a 4.6 target); Versailles (3.2, one clause); the labor systems and plantations (4.4, named as the push); casta and elites (4.7, the hand-off); the Haitian Revolution (Unit 5, after 1750, not mentioned).',
          'Three myths, each in the AVOID note of the slide it belongs to: "only colonized peoples resisted states" (slide 6); "resisting a European empire meant opposing slavery" (slide 7); "maroons were just runaways hiding in the woods" (slide 9). The last link of the retelling chain (slide 11) answers a fourth, "resistance always failed."',
          'Big rocks (Jeff, 2026-11-05): this deck was cut from 28 slides to 16. It projects three big ideas under one chain: pushback inside the state (slide 6), at the edges of expanding states (slides 7 and 8, the Pueblo Revolt keeping its own slide as the CED\'s sample-activity case), and organized resistance by enslaved people (slide 9). Every CED example is still on a slide, and the First & 10 tells each case in full. Removed: the map (Module 01 has it), eleven case slides merged into four, the outcomes slide (now the chain\'s last link and its notes), the myths slide (now AVOID notes), and the optional Checkpoint 1 slide (the module is still on the lesson page).',
          'Every picture in this deck is a real object from the 1600s or 1700: a French print of 1648 and a Dutch print made for a book published in Leiden, two paintings made in the Deccan, and a Dutch print of Razin made about thirty years after his death. The map is the course\'s own. None is AI-generated.'
        ],
        ask: 'What is the one sentence I want every student to leave with?',
        listenFor: 'The harder states pushed to expand and centralize, the harder people at the local level pushed back, and the pushback changed the states too.',
        avoid: 'Avoid teaching European rivalry (Dutch against Portuguese, piracy, the Seven Years\' War) as an "external challenge." It is 4.5\'s Key Concept. External here means pushback at the edges of an expanding state.'
      }
    },
    {
      phase: 'beready', kind: 'beready-recall', eyebrow: 'BeReady · 4 Minutes · No Notes',
      title: 'Pull it back from memory.',
      template: {
        questions: [
          { label: 'Topic 4.5', text: 'Name one tool European rulers used to make their empires pay.' },
          { label: 'Topic 3.2', text: 'Name one way a ruler pulled power into his own hands.' },
          { label: 'Topic 4.4', text: 'Name one labor system that took work from people who did not choose it.' }
        ],
        turn: 'Every one of those took something from somebody. 4.5 ended: **states got richer and reached further. Not everyone accepted it.** Today: who pushed back, why, and what happened next.'
      },
      notes: {
        minutes: 4,
        keys: [
          'Fast answers, no reteaching',
          'Recall: 4.5 tools, Unit 3 rule, 4.4 labor',
          'Prompt 2 = centralize; 1 and 3 = expand',
          'Ask: who paid for each tool?'
        ],
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: mercantilist laws (the Navigation Act, the Casa de Contratación), chartered companies (the VOC, the English East India Company); Versailles, the devshirme, tax farming, zamindars, salaried officials; the encomienda, the mit\'a, chattel slavery, indentured servitude.',
          'The bridge is 4.5\'s hand-off in the unit story map, word for word.',
          'Prompt 2 is centralization (pulling power inward); prompts 1 and 3 are expansion (pushing outward). Those are the two pushes on slide 5, and the big ideas on slides 6 to 9.'
        ],
        ask: 'Who paid for each of those tools: in money, land, work or freedom?',
        listenFor: 'Taxpayers and peasants, nobles who lost power, conquered peoples, enslaved Africans.',
        ap: 'Retrieval plus bridge: the tools of state power had costs, and the costs had effects.'
      }
    },
    {
      phase: 'question', kind: 'frame-subtitle',
      title: 'States pushed to expand and centralize. Who pushed back, and what did it change?',
      subtitle: 'The rebel Stenka Razin brought into Moscow in chains, 1671, as a Dutch printmaker pictured it about thirty years later.',
      notes: {
        minutes: 1,
        keys: [
          'Real print: Razin in chains, 1671',
          'A Dutch imagining, about 30 years later',
          'Predict who might push back'
        ],
        land: [
          'The picture is a real historical print: Jan Luyken, "Stenko Radzin is brought into Moscow on a cart with his brother," an etching made for J. L. Gottfried\'s Historische kronyck (Leiden: Pieter van der Aa, 1700), Rijksmuseum RP-P-1896-A-19368-1482. Luyken never went to Russia; the city and the clothing are his imagining. It shows a captured rebel chained in a cart under a gallows-like frame, guards with pikes, and a crowd at the city gate.',
          'Razin\'s revolt is one case of many: peasants and Cossacks against a tsar who had just bound peasants to the land. Slide 6 tells it.',
          'The question is the learning objective in a ninth grader\'s words: the push (expansion and centralization), the pushback (resistance), and the effects.'
        ],
        ask: 'Predict: what kind of people might push back against a growing state?',
        listenFor: 'Taxpayers, nobles who lose power, peasants, conquered peoples, enslaved people.'
      }
    },
    {
      phase: 'first10', kind: 'action', eyebrow: 'Module 02 · First & 10 · 12 Minutes',
      title: 'Read with four questions in mind.',
      subtitle: 'For every case: what did the state push for, who pushed back, how, and what happened next?',
      big: '12',
      action: { label: 'Open First & 10', url: '../unit-4/first-and-10-topic-4-6-internal-external-challenges-capture.html?v=response-id-fix-v1' },
      notes: {
        minutes: 12,
        keys: [
          'Read in class',
          'Track: push, who pushed back, how, what next',
          'Resistance had its own effects',
          'Q2: the Pueblo Revolt’s context',
          'Answers reach Canvas via Gather'
        ],
        land: [
          'Students read "Push and Pushback" in class. The slides that follow retell it with evidence, so they are retrieval, not a first telling.',
          'Circulate for students who track the four questions for each case, and who notice that resistance has its own effects (crushed, bargained, worn down).',
          'Question 02 is the topic\'s 4.B practice: it asks for the Pueblo Revolt\'s broader context. The three answers reach Canvas through Gather All My Work.'
        ],
        ask: 'Which case surprised you most, and why?',
        listenFor: 'Judges and nobles resisting (not only colonized people); a queen bargaining with Portugal; a treaty that made maroons free but made them return runaways.'
      }
    },
    {
      phase: 'push', kind: 'branch-tree', eyebrow: 'The Push · Context',
      kc: 'KC-4.3.III.iii', title: 'Two ways to grow a state.',
      footer: 'Both pushes cost somebody something. That is the context for every revolt today.',
      template: {
        claimLabel: '1450 to 1750',
        claim: 'States grew stronger by pushing **inward** and **outward**.',
        branches: [
          { label: 'Centralize', note: 'Pull power to the ruler, away from nobles, judges and towns', items: ['New taxes', 'New laws', 'Lost privileges'] },
          { label: 'Expand', note: 'Push out to rule new lands and peoples', items: ['Tribute and forced labor', 'Lost land and faith', 'Slavery'] }
        ]
      },
      notes: {
        minutes: 2,
        keys: [
          'Two pushes: centralize and expand',
          'Centralize: pull power in over your own people',
          'Expand: push out over new people',
          'Both cost somebody something',
          'This is the context for every revolt'
        ],
        land: [
          'KC-4.3.III.iii opens with the two pushes: "state expansion and centralization." They are different. Centralizing is a state pulling power inward over people it already rules (Unit 3: Versailles, the devshirme, tax collectors who answered to the center). Expanding is a state pushing outward over people it does not yet rule (Unit 4: the maritime empires, and land empires too, such as the Mughals moving into the Deccan).',
          'This is the context, in the 4.B sense, for every case today. A revolt explained only as "people were angry" has no context; a revolt explained as the result of one of these pushes does.',
          'The CED\'s title names internal and external challenges without defining them. This deck reads them as challenges from a state\'s own nobles, judges and peasants, and from peoples at the edges of an expanding state. Do not define "external" as European rivalry; that is 4.5.'
        ],
        ask: 'Sort one cost under each push: who pays when a state centralizes, and who pays when it expands?',
        listenFor: 'Centralize: nobles and judges lose power, taxpayers pay more. Expand: conquered peoples lose land and pay tribute; enslaved Africans are forced to work.',
        ap: 'Contextualization 4.B: name the bigger development a revolt grew out of.'
      }
    },
    {
      phase: 'inside', kind: 'split-scenes', eyebrow: 'Big Idea 1 of 3 · Pushback Inside the State',
      kc: 'KC-4.3.III.iii', title: 'Rulers centralized. Their own people pushed back.',
      footer: 'Judges, nobles, peasants and Cossacks: an array of groups, not only colonized peoples.',
      template: {
        left: {
          name: 'The Fronde, France',
          items: [
            'War with Spain: the crown demands **new taxes**, 1648',
            'The **Parlement** refuses; Paris builds **barricades**; nobles rise',
            'The rebels split; the **crown wins**, 1653'
          ]
        },
        right: {
          name: 'Razin, Russia',
          items: [
            'The **Law Code of 1649** binds peasants to the land',
            'Runaways join the **Cossacks**; Razin leads a revolt, 1670',
            'The army wins, 1671; **serfdom stays**'
          ]
        },
        bothLabel: 'Same push',
        both: ['A ruler pulls power and money inward', 'The state won, and came out stronger']
      },
      notes: {
        minutes: 4,
        keys: [
          'Centralize: pull power and money inward',
          'Fronde 1648 to 1653: war taxes refused',
          'Judge arrested; 1,200 barricades; nobles revolt',
          'Say Louis XIV was "marked," not "caused absolutism"',
          'Law Code 1649 bound peasants to the land',
          'Razin: loyal to the tsar, against his officials',
          'Crushed 1671; serfdom stayed until 1861'
        ],
        land: [
          'Big-rocks revision, 2026-11-05: this one slide replaces two (the Fronde and Razin). Both are the CED\'s own examples, and together they show that groups pushed back against their own rulers, not only at an empire\'s edge.',
          'The Fronde ("sling"), 1648 to 1653, while Anne of Austria ruled as regent for the boy Louis XIV with Cardinal Mazarin as chief minister (Michel De Waele, "Fronde," Europe 1450 to 1789, 2004). War with Spain consumed about 70 percent of revenue. In January 1648 the regency tried to force new fiscal edicts on the Parlement of Paris, the high court that had to register royal laws, and the judges refused them, including taxes aimed at themselves. In August the government arrested the judge Pierre Broussel; Paris put up some 1,200 barricades on the night of 26 to 27 August, and the queen released him. On 5 January 1649 the royal family and Mazarin fled Paris.',
          'From January 1650 the "Fronde of the princes": great nobles led by the Prince of Condé. The rebels quarreled; Louis XIV entered Paris on 21 October 1652 and Mazarin returned in February 1653. De Waele: "Louis XIV\'s reign was deeply marked by the events that shook his youth." Say "marked"; do not say the Fronde caused absolutism.',
          'Russia: the Law Code of 1649 (Ulozhenie) completed the enserfment of the peasantry; a runaway serf could be returned with no time limit (Encyclopedia of Russian History). It was itself a product of unrest, the Moscow riots of June 1648. Cossacks were free frontier communities of fighters on the Don and elsewhere, and runaway serfs swelled their numbers.',
          'Stepan (Stenka) Razin, a Don Cossack, raised an army of perhaps 7,000 to 10,000 in 1670; Saratov and Samara opened their gates, and peasants and non-Russian peoples of the Volga rose "by the tens of thousands." The rebels said they were loyal to the tsar and against his boyars and officials. The army beat them at Simbirsk; Razin was executed in Moscow on 6 June 1671 (Old Style). Serfdom lasted until 1861.',
          'The pictures: on the left a labeled reconstruction of a Paris barricade (its shop lettering and clothing are invented, not evidence of 1648); on the right Jan Luyken\'s etching of Razin brought into Moscow in chains, made for a Dutch book of 1700, a later imagining.'
        ],
        ask: 'Run both cases through the chain: what did the ruler push for, which group pushed back, how, and what happened next?',
        listenFor: 'France: war taxes; judges, Parisians, then nobles; barricades and revolt; the crown won. Russia: serfdom; peasants and Cossacks; Razin\'s revolt; crushed, and serfdom stayed.',
        ap: 'KC-4.3.III.iii: political and social groups (judges, nobles) and an economic group (peasants) resisting centralization. The CED\'s examples: the Fronde and Cossack revolts.',
        avoid: 'Myth: "only colonized peoples resisted states." French judges and nobles and Russian peasants pushed back against their own rulers. That is the "array" in the Key Concept.'
      }
    },
    {
      phase: 'edges', kind: 'story-scene', eyebrow: 'Big Idea 2 of 3 · Pushback at the Edges',
      kc: 'KC-4.3.III.iii', title: 'Empires expanded. The people in their way pushed back.',
      footer: 'Same push, different endings: an empire worn down, a bargain, a defeat.',
      template: {
        steps: [
          { label: 'Marathas', text: '**Aurangzeb** pushes south, 1681; hill forts and raids wear him down until he dies there, **1707**.' },
          { label: 'Njinga', text: 'Bargains in Luanda, 1622; fights Portugal from **Matamba**; makes **peace** in the 1650s.' },
          { label: 'Metacom', key: true, text: 'Burns over a dozen English towns, 1675; **crushed**, captives enslaved.' }
        ]
      },
      notes: {
        minutes: 4,
        keys: [
          'Expand: push out over new peoples',
          'Marathas: hill forts and fast raids',
          'Aurangzeb never beat them; died there, 1707',
          'Njinga: fought and bargained with Portugal',
          'Her wars also sold captives',
          'Metacom: crushed; captives sold into slavery',
          'Why different endings? Numbers, allies, geography'
        ],
        land: [
          'Big-rocks revision, 2026-11-05: this one slide replaces three (the Deccan, Njinga, and the Metacom comparison). The Pueblo Revolt, the CED\'s own sample-activity case, keeps the next slide.',
          'Marathas: Shivaji (about 1627 to 1680) built Maratha power from hill forts in the western Deccan and was crowned at Raigad in 1674. Aurangzeb came south in 1681 (some sources say 1682), conquered Bijapur (1686) and Golconda (1687), "but never could subdue the Marathas" (Frances Pritchett, Columbia). He died at his camp near Ahmednagar in March 1707 without returning north. After 1707 Maratha power grew while the Mughal center weakened; the decline had many causes, so do not make the Marathas the only one.',
          'Njinga: Portuguese Angola, centered on Luanda (founded 1576), pushed into Ndongo, and its wars fed the Atlantic slave trade (Linda Heywood, Njinga of Angola, 2017). In 1622 Njinga negotiated in Luanda for her brother and was baptized Ana de Sousa; she ruled from 1624, conquered Matamba in the 1630s, allied with the Dutch after they took Luanda in 1641, and made peace with Portugal in the 1650s (1656 or 1657). She died ruling on 17 December 1663. The story of her sitting on a kneeling servant comes from a 1687 missionary account; leave it out or call it a later story.',
          'Metacom\'s War (King Philip\'s War), 1675 to 1676: New England colonists were taking Wampanoag land and putting the Wampanoag under colonial law. Nipmucks, Pocumtucks, Narragansetts and others joined, though historians doubt one planned alliance. More than a dozen English towns were burned; the colonies, with Native allies and Mohawk pressure, won. Metacom was killed in August 1676, and many captives were sold into slavery in the West Indies.',
          'Why different endings? Let students suggest it, then offer: how many colonists or soldiers each side had, who had allies, and the ground (hill forts, distance). Reasons to weigh, not one answer.',
          'The pictures are labeled reconstructions: Maratha riders leaving a hill fort, and an imagined negotiation at Luanda. Neither is a portrait or a record of a named place or meeting. The real Golconda portraits of Shivaji and Aurangzeb (1680s) are in the Evidence Lab.'
        ],
        ask: 'Same push, three endings. Why might one empire be worn down, one colony bargain, and another win outright?',
        listenFor: 'Hill forts and raids that would not stand and fight; a ruler who could fight and negotiate; colonies with more people and Native allies.',
        ap: 'KC-4.3.III.iii: political groups (a regional kingdom, an African state, Native nations) resisting expanding states. The CED\'s examples: Maratha conflict with the Mughals, Ana Nzinga\'s resistance, Metacom\'s War.',
        avoid: 'Myth: "resisting a European empire meant opposing slavery." Njinga\'s wars took captives, and Matamba sold them. People resisted the push that landed on them; that does not make the resistance less real.'
      }
    },
    {
      phase: 'pueblo', kind: 'scene-case', eyebrow: 'Big Idea 2 of 3 · Pushback at the Edges · New Mexico, 1680',
      kc: 'KC-4.3.III.iii', title: 'The Pueblo Revolt: causes come in kinds.',
      template: {
        steps: [
          { label: 'Religious', text: 'Dances banned, masks burned; 47 leaders arrested, 1675.' },
          { label: 'Economic', text: 'Crops taken as tribute; forced labor without pay.' },
          { label: 'Political', text: 'Rule by force; Spanish soldiers do not stop raids.' },
          { label: '10 August 1680', text: 'Knotted cords count down; the towns rise together and drive the Spanish out.' },
          { label: 'After', key: true, text: 'Spain returns in 1692, but without the encomienda.' }
        ],
        proves: 'Causes came in kinds and combined, and the revolt changed the terms even after Spain returned.'
      },
      notes: {
        minutes: 4,
        keys: [
          'Spain in New Mexico from 1598',
          'Causes in kinds: religious, economic, political',
          'Drought and famine made every burden heavier',
          'Knotted cords: every town rose on one day',
          'Rose 10 August 1680; twelve years free',
          'Vargas returned 1692; no encomienda after',
          'Do not settle "most significant cause" here'
        ],
        land: [
          'Big-rocks revision, 2026-11-05: this one slide replaces three (the causes, Naranjo\'s testimony, and the revolt and its aftermath). The Pueblo Revolt keeps its own slide because the CED\'s sample activity (p. 77) is built on it.',
          'Spain\'s colony in New Mexico dates from Juan de Oñate\'s expedition in 1598. Economic: under the encomienda Pueblos handed over a portion of their crops each year; under repartimiento they were forced to work for Spaniards without pay (Library of Congress, In Custodia Legis, 2013). Religious: in 1661 the head of the Franciscans banned the kachina dances, and friars burned masks and prayer sticks; in 1675 Governor Treviño ordered kivas destroyed and arrested 47 religious leaders, three were hanged and one killed himself, and the rest, Popé among them, were whipped and jailed until Pueblo men came to Santa Fe in force. Political: governors ruled by force, and soldiers did not stop Apache raids. Drought and famine in the 1660s and 1670s made every burden heavier.',
          'Coordination: Pedro Naranjo of San Felipe Pueblo, questioned by Spanish officials on 19 December 1681, said "the cord was passed through all the pueblos of the kingdom so that the ones which agreed to it might untie one knot in sign of obedience, and by the other knots they would know the days which were lacking" (trans. C. C. Shelby, in Hackett, ed., 1942). A captive speaking to the officials his people had driven out; the cord detail is the kind of fact he had little reason to invent. The Primary Source module reads more of his testimony.',
          'The revolt: when the Spanish caught two runners on 9 August, the Pueblos rose early, on 10 August 1680, killed about 400 colonists including 21 friars, and besieged Santa Fe; Governor Otermín led the survivors to El Paso on 21 August. For twelve years the Pueblos ruled themselves. Diego de Vargas returned in 1692; revolts in 1694 and 1696 were crushed. After: "The practice of encomiendas (paying tribute) was abolished" and the friars "moderated their zeal" (NPS, Pecos). Other forced service continued; say "far less hard," not "stopped." Popé\'s own rule after 1680 also drew opposition among the Pueblos.',
          'Sorting causes into kinds is the CED\'s own sample activity, done in full in the Primary Source module. Do not settle "the most significant cause" here.',
          'The picture is a labeled reconstruction of runners passing a knotted cord between towns; it cannot show a particular runner or town. Naranjo\'s testimony is the evidence.'
        ],
        ask: 'Which kind of cause would a Pueblo religious leader have named first? Which would a farmer? And did the revolt fail, since Spain came back?',
        listenFor: 'The religious leader: the dances, kivas and arrests. The farmer: tribute, forced labor, drought. Not a simple failure: Spain came back without the encomienda and pressed far less hard on Pueblo religion.',
        ap: 'Causation: causes come in kinds and combine, and an effect can outlast a defeat. KC-4.3.III.iii; the CED\'s example: Pueblo Revolts.'
      }
    },
    {
      phase: 'enslaved', kind: 'scene-case', eyebrow: 'Big Idea 3 of 3 · Enslaved People Organize',
      kc: 'KC-5.3.III.C', title: 'Enslaved people organized, and challenged the colony itself.',
      template: {
        steps: [
          { label: 'Palmares, Brazil', text: 'For most of a century, thousands in fortified towns farm, trade and beat back expeditions.' },
          { label: 'Jamaica, 1739', text: 'Maroons force a treaty: freedom and land, but they must return runaways.' },
          { label: 'Stono, 1739', text: 'Rebels seize guns and march for Spanish Florida; militia break the march.' },
          { label: 'The answer', key: true, text: 'Colonies fight, bargain or tighten the law: South Carolina\'s Negro Act, 1740.' }
        ],
        proves: 'Organized: leaders, plans, places, and a challenge to the authorities themselves.'
      },
      notes: {
        minutes: 4,
        keys: [
          'CED word: organized, not just running away',
          'Palmares: many towns joined for defense',
          'Say "thousands," never "largest maroon community"',
          'Jamaica 1739: freedom and land, runaways returned',
          'Stono 1739: marched toward Spanish Florida',
          'Answer: Negro Act 1740, a harsher law',
          'Save the contextualizing for Module 05'
        ],
        land: [
          'Big-rocks revision, 2026-11-05: this one slide replaces four (organized resistance, Palmares, the Jamaica treaty and Stono). Checkpoint 2 asks about this Key Concept, so students meet every case again there.',
          'KC-5.3.III.C: "Enslaved persons challenged existing authorities in the Americas through organized resistance." The word that matters is organized: collective, and a challenge to the colony itself, not only everyday resistance such as working slowly or running away alone. The CED\'s examples: Maroon societies in the Caribbean and Brazil (Palmares, Jamaica) and resistance in North America (Stono). The push behind all three is the plantation colony built on slavery (4.4).',
          'Palmares, in the hills of Pernambuco (today\'s Alagoas), was "a collection of numerous, perhaps dozens, of quilombos, joined together for purposes of defense and survival" (Flávio Gomes, Encyclopedia of African-American Culture and History); reports date from the late 1500s. Say "thousands"; Gomes gives more than 20,000 by the mid-1600s and calls 30,000 an exaggeration. It traded with nearby settlers and beat Portuguese and Dutch expeditions. In 1678 Ganga Zumba accepted a treaty; Zumbi rejected it and fought on; the main town fell in 1694 and Zumbi was killed on 20 November 1695. Do not call it "the largest and most durable maroon community"; no source here supports it.',
          'Jamaica: after the English took the island in 1655, people who escaped slavery formed communities in the mountains, and the colony fought them for years without winning. The Leeward Maroons under Cudjoe signed articles dated 1 March 1738 in the old calendar (1739 in ours): Cudjoe\'s people "shall for ever hereafter [be] in a perfect state of freedom and liberty," with 1,500 acres of land, but runaways who "fall into Captain Cudjoe\'s hands ... shall immediately be sent back" (Dallas, 1803). A victory and a trap at once.',
          'Stono, 9 September 1739, near Charleston: about twenty enslaved people took guns and powder from a store and marched south toward Spanish Florida, which had promised freedom since 1693 (Fort Mose, 1738); the group grew to as many as a hundred. Militia caught them near the Edisto River that afternoon; the 1739 account counts about 40 rebels and 20 colonists killed (Mark M. Smith, South Carolina Encyclopedia, gives about forty on each side). The Negro Act of 1740 made freeing anyone depend on an act of the assembly and required patrols. These context facts are the Skill Builder\'s practice; name them as story here.',
          'The picture is a labeled reconstruction of a fortified maroon settlement, not a surveyed plan of Palmares.'
        ],
        ask: 'What makes resistance organized? Find one piece of evidence in each row.',
        listenFor: 'Leaders, towns, farms and trade at Palmares; a treaty in Jamaica; a planned armed march at Stono. Each challenged the colony, and each colony answered.',
        ap: 'KC-5.3.III.C. The CED\'s examples: Maroon societies in the Caribbean and Brazil, and resistance of enslaved persons in North America.',
        avoid: 'Myth: "Maroons were just runaways hiding in the woods." Palmares had towns, farms, trade, an army and a treaty. Do not swing the other way on the Jamaica treaty either: the freedom was real, and so was the promise to return runaways.'
      }
    },
    {
      phase: 'context', kind: 'sentence-frame', eyebrow: 'Contextualization 4.B · Model',
      kc: 'Unit 4: Learning Objective L', title: 'Put a revolt in its bigger story.',
      footer: 'Context is the bigger development, and how it helps explain the event.',
      template: {
        frame: '{{The event}} happened as part of {{a bigger development of the period}}, which helps explain it because {{how the bigger development caused or shaped it}}.',
        exampleLabel: 'Modeled on the Fronde',
        example: '**The Fronde** happened as part of **European rulers pulling power into their own hands and paying for long wars with new taxes**, which helps explain it because **the judges, the city and the nobles were the people who lost money and power when the crown centralized**.'
      },
      notes: {
        minutes: 2,
        keys: [
          'Skill 4.B: bigger development plus "because"',
          'Model it once: the Fronde',
          'Pairs say it aloud for Razin',
          'No finished model on the board'
        ],
        land: [
          'The suggested skill, 4.B: explain how a specific development is situated within a broader historical context. The move has two parts: name the bigger development, and say how it explains the event. Naming the context without the "because" is only half.',
          'The bigger development for the Fronde: centralization (Unit 3) and the cost of war. De Waele describes the regency continuing Richelieu\'s heavy taxation for the war with Spain, and many provincial bodies hoping "that the centralization of power ... would come to a halt."',
          'Model it once, aloud. Then have pairs say the frame for Razin (context: the tsar\'s 1649 Law Code and serfdom) without writing a finished model on the board. The Skill Builder practices it on Stono.'
        ],
        ask: 'Say the frame aloud for Razin\'s revolt.',
        listenFor: 'Razin\'s revolt happened as part of the tsars binding peasants to the land, which helps explain it because runaway serfs and the peasants who joined him were the people that law bound.',
        ap: 'Contextualization 4.B: context plus the "because."'
      }
    },
    {
      retelling: true, phase: 'chain', kind: 'cause-chain', eyebrow: 'The Whole Topic',
      title: 'Push, and pushback.',
      footer: 'The harder states pushed, the harder people pushed back, and the pushback changed the states too.',
      template: {
        steps: [
          { label: 'The state pushes', text: 'Expands outward, or centralizes inward' },
          { label: 'It lands on a group', text: 'Taxes, serfdom, conquest, tribute, lost land, slavery' },
          { label: 'The group pushes back', text: 'Revolt, war, escape, bargaining', key: true },
          { label: 'The state answers', text: 'Crushes it, makes terms, or wears itself down' }
        ],
        links: ['so', 'so', 'so']
      },
      notes: {
        minutes: 4,
        keys: [
          'Show it, hide it, redraw four links',
          'Push → lands on → pushback → answer',
          'A named case and group at each link',
          'Pushback changed the states too',
          'The answer: crushed, bargained, or worn down'
        ],
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw the four links from memory, with one case under each link.',
          'The chain is KC-4.3.III.iii in four steps: "state expansion and centralization led to resistance from an array of social, political, and economic groups on a local level," plus one more link for what the resistance did. KC-5.3.III.C runs the same chain with the plantation colony as the push.',
          'The last link is the outcomes slide this deck used to have (big-rocks revision, 2026-11-05). Crushed, and the state often came out stronger: Louis XIV ruled in person and kept the nobles close (3.2); serfdom stayed in Russia; southern New England\'s Native nations lost their independence; South Carolina passed the Negro Act. Bargained: Njinga\'s peace in the 1650s; the 1739 Jamaica treaties; Spain\'s return to New Mexico without the encomienda. Worn down: the Mughals in the Deccan. Palmares fits more than one box: crushed in 1694 to 1695, after nearly a century and a treaty offer in 1678.',
          'Push for a named case and a named group at each link: the Fronde (judges and nobles), Razin (peasants and Cossacks), the Marathas, Njinga, the Pueblos, Metacom, Palmares, the Jamaica Maroons, Stono.'
        ],
        ask: 'Run one case through all four links without looking.',
        listenFor: 'Russia\'s Law Code (push) binds peasants (lands) who join Razin\'s revolt (pushback) and are crushed; serfdom stays (answer).'
      }
    },
    {
      phase: 'sharpen', kind: 'sharpen', eyebrow: 'Sharpen the Claim',
      kc: 'KC-4.3.III.iii',
      footer: 'Name the push, the group, the pushback, and what came next.',
      template: {
        weak: 'People resisted because they were oppressed.',
        strong: '**Because** ______ pushed to ______, ______ lost ______, **so** they ______; **as a result,** ______.'
      },
      notes: {
        minutes: 2,
        keys: [
          'Weak: no state, push, group or effect',
          'Need: state, push, group, loss, pushback, next',
          'Pairs fill the frame aloud',
          'No finished claim on the board'
        ],
        land: [
          'The weak claim names no state, no push, no group, no form of resistance and no effect. Almost any revolt in history fits it, which is why it earns no credit.',
          'The frame asks for the whole chain: which state, which push, which group, what they lost, how they pushed back, and what happened next.',
          'This is a sentence frame, not a model answer: every case is asked for somewhere (First & 10 Q1, Checkpoints 1 and 2). Have pairs fill it in aloud with a case they choose. Do not write a finished claim on the board.'
        ],
        ask: 'Why is "oppressed" not enough?',
        listenFor: 'It does not say who did what to whom, how they resisted, or what changed.'
      }
    },
    {
      phase: 'skill', kind: 'action', eyebrow: 'Module 05 · Skill Builder',
      title: 'Put a revolt in its bigger story.',
      subtitle: 'Name the bigger development, then explain how it helps explain the event.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-6-internal-external-challenges.html#modules' },
      notes: {
        minutes: 8,
        keys: [
          'Skill 4.B: contextualize',
          'Modeled on the Fronde, practiced on Stono',
          'Push for the "because"',
          'Debrief after: Florida, the coming war'
        ],
        land: [
          'The Skill Builder practices the CED\'s suggested skill, 4.B Contextualization: explain how a specific development is situated within a broader context.',
          'It models the Fronde (slide 10), then gives the Stono Rebellion with three pieces of context (a plantation colony with an enslaved majority, Spanish Florida\'s promise of freedom, a war between Britain and Spain about to begin) and asks students to place the revolt in its context and say how that context helps explain it.',
          'Push students to write the "because." Listing the context is only half the move.'
        ],
        ask: 'After students have written: which piece of context explains the march south?',
        listenFor: 'Debrief only after the module: Spanish Florida\'s offer of freedom, which explains the direction of the march, and the coming war, which explains the timing.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Build one claim from two sources.',
      subtitle: 'What made people push back, and how? Two sources, one limit.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-6-internal-external-challenges.html#modules' },
      notes: {
        minutes: 8,
        keys: [
          'One claim, two sources',
          'Four objects plus two text cards',
          'Luyken print: a later Dutch imagining',
          'Observe → infer → name a limit'
        ],
        land: [
          'Four real objects and two written sources: the 1648 French print of Broussel, Luyken\'s 1700 print of Razin, the Shivaji portrait (about 1680), the Aurangzeb portrait (about 1686), and two text cards, from Naranjo\'s 1681 testimony and the 1739 Jamaica treaty.',
          'Observation before inference: what the source shows, then what it suggests, then what it cannot tell you. The Luyken print is a Dutch imagining made decades later; that is its limit, and a good one to name.',
          'Every picture in the Evidence Lab is a real historical object; none is AI-generated. Two cards are words, not pictures.'
        ],
        ask: 'What does the source show before you tell me what it means?',
        listenFor: 'A concrete detail, then the inference, then a limit.'
      }
    },
    {
      phase: 'cp2', kind: 'action', eyebrow: 'Module 10 · Checkpoint 2',
      title: 'Organized resistance by enslaved people: how it challenged the authorities, and how they answered.',
      subtitle: 'Draft, work with Socrates, revise. If it is not finished in class, it is homework.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-6-internal-external-challenges.html#modules' },
      notes: {
        minutes: 12,
        keys: [
          'A maroon community plus Stono',
          'How each was organized',
          'How authorities answered, and why it differed',
          'Revised answer goes to Canvas',
          'Unfinished = homework'
        ],
        land: [
          'The revised answer in the box is what goes to Canvas.',
          'Checkpoint 2 asks for one maroon community (Palmares or the Jamaica Maroons) and the Stono Rebellion: how each was organized, how the authorities responded, and one reason the responses differed. That is KC-5.3.III.C, run through the causation chain. KC-4.3.III.iii is the First & 10\'s and Checkpoint 1\'s.',
          'Socrates is told the skill is Causation, so it will push for how each was organized and why the authorities answered as they did.'
        ],
        ask: 'Does your answer show how each was organized, how the authorities answered, and why the answers differed?',
        listenFor: 'Towns, leaders, a treaty, a march; destruction, a treaty, a harsher law; the colony could not beat the Maroons in the mountains, but could catch Stono\'s marchers in open country.'
      }
    },
    {
      phase: 'close', kind: 'frame-subtitle',
      title: 'The harder states pushed to expand and centralize, the harder people at the local level pushed back.',
      subtitle: 'Next: some people resisted the new order. Everyone was sorted by it. Who ended up where?',
      notes: {
        minutes: 2,
        keys: [
          'Real print: a judge arrested, 1648',
          'The sentence answers the objective',
          'Hand off to 4.7: who ended up where?'
        ],
        land: [
          'The picture: Caspar Luyken\'s 1699 etching of soldiers arresting a judge of the Parlement of Paris in 1648 (Rijksmuseum), the arrest that set off the barricades: a state pushing, and the moment before the pushback.',
          'This sentence answers the learning objective: the development of state power (expansion and centralization) and its effects (resistance, and what resistance changed).',
          'Hand off to 4.7 in the words of the unit story map.'
        ],
        ask: 'What is the one-sentence answer to Topic 4.6?',
        listenFor: 'States expanded and centralized; nobles, peasants, kingdoms, Indigenous towns and enslaved people pushed back; some were crushed, some won terms, some wore the state down.'
      }
    }
  ]
};
