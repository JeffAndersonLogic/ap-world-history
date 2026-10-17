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
      'Correct three myths: "only colonized peoples resisted," "maroons were just runaways hiding," and "resisting a European empire meant opposing slavery." The outcomes slide answers a fourth, "resistance always failed."',
      'Set the Pueblo Revolt beside Metacom\'s War: same decade, opposite outcomes.'
    ],
    could: [
      'Use the BeInTheRoom Knotted Cord as an extension for students who finish early.',
      'Point students who want more depth to the eBook chapter, "Push and Pushback."'
    ]
  },

  flow: [
    { id: 'preflight', label: 'Teacher Preflight', range: 'Before class', minutes: 2, teacher: 'The spine, the chain, the owns and bridge-only split, the three myths.', students: 'Not projected.', slide: 1 },
    { id: 'beready', label: 'BeReady', range: '0-4', minutes: 4, teacher: 'Retrieve 4.5, 3.2 and 4.4. Bridge to who pushed back.', students: 'Answer from memory.', slide: 2 },
    { id: 'question', label: 'The Question', range: '4-5', minutes: 1, teacher: 'Pose the topic question over Razin\'s capture.', students: 'Predict who might push back against a state.', slide: 3 },
    { id: 'first10', label: 'First & 10', range: '5-17', minutes: 12, teacher: 'Module 02: students read "Push and Pushback" in class.', students: 'For every case: push, who, how, what next.', slide: 4 },
    { id: 'push', label: 'Two Pushes', range: '17-19', minutes: 2, teacher: 'Centralize inward, expand outward, and what each cost.', students: 'Sort a cost under each push.', slide: 5 },
    { id: 'map', label: 'Where People Pushed Back', range: '19-20', minutes: 1, teacher: 'Nine cases on one map, inside and at the edges.', students: 'Find one in Afro-Eurasia, one in the Americas.', slide: 6 },
    { id: 'fronde', label: 'Inside: The Fronde', range: '20-23', minutes: 3, teacher: 'Judges, Paris and nobles against war taxes.', students: 'Run the chain.', slide: 7 },
    { id: 'razin', label: 'Inside: Razin', range: '23-25', minutes: 2, teacher: 'The 1649 Law Code, runaways, the Volga revolt.', students: 'Name the group and the push.', slide: 8 },
    { id: 'deccan', label: 'Edges: The Marathas', range: '25-27', minutes: 2, teacher: 'Aurangzeb\'s push south; forts and raids.', students: 'Say what the war cost the Mughals.', slide: 9 },
    { id: 'njinga', label: 'Edges: Njinga', range: '27-29', minutes: 2, teacher: 'War and diplomacy against Portugal.', students: 'Name two of her moves.', slide: 10 },
    { id: 'pueblo', label: 'Why the Pueblos Rose', range: '29-31', minutes: 2, teacher: 'Religious, economic and political causes together.', students: 'Sort the causes into kinds.', slide: 11 },
    { id: 'naranjo', label: 'A Witness, 1681', range: '31-32', minutes: 1, teacher: 'First look at Naranjo; the Primary Source module goes deeper.', students: 'Find the knotted cord.', slide: 12 },
    { id: 'revolt', label: 'The Revolt, 1680', range: '32-34', minutes: 2, teacher: 'From the 1675 arrests to the return on new terms.', students: 'Say what changed after 1692.', slide: 13 },
    { id: 'metacom', label: 'Same Decade, Opposite Ends', range: '34-36', minutes: 2, teacher: 'The Pueblo Revolt beside Metacom\'s War.', students: 'Suggest why the outcomes differed.', slide: 14 },
    { id: 'organized', label: 'Enslaved People Organize', range: '36-37', minutes: 1, teacher: 'What "organized" means: three forms.', students: 'Define organized resistance.', slide: 15 },
    { id: 'palmares', label: 'Palmares', range: '37-39', minutes: 2, teacher: 'A maroon state for most of a century.', students: 'Find the evidence of organization.', slide: 16 },
    { id: 'jamaica', label: 'The 1739 Treaty', range: '39-41', minutes: 2, teacher: 'Freedom and land, and the price.', students: 'What was gained, what was promised.', slide: 17 },
    { id: 'stono', label: 'Stono, 1739', range: '41-43', minutes: 2, teacher: 'The march south and the colony\'s answer.', students: 'Say how the authorities responded.', slide: 18 },
    { id: 'context', label: 'Contextualize It', range: '43-45', minutes: 2, teacher: 'Model 4.B on the Fronde with a sentence frame.', students: 'Say the frame aloud for the Fronde.', slide: 19 },
    { id: 'outcomes', label: 'Three Outcomes', range: '45-47', minutes: 2, teacher: 'Crushed, bargained, worn down.', students: 'Sort each case.', slide: 20 },
    { id: 'myths', label: 'Myth and Evidence', range: '47-49', minutes: 2, teacher: 'Three things people get wrong.', students: 'Correct each myth.', slide: 21 },
    { id: 'chain', label: 'Push and Pushback', range: '49-53', minutes: 4, teacher: 'Students redraw the chain from memory.', students: 'Retell the whole topic.', slide: 22 },
    { id: 'sharpen', label: 'Sharpen the Claim', range: '53-55', minutes: 2, teacher: 'From "they were oppressed" to a cause chain.', students: 'Upgrade a weak claim.', slide: 23 },
    { id: 'skill', label: 'Skill Builder', range: '55-61', minutes: 6, teacher: 'Module 05: Contextualization.', students: 'Put Stono in its context.', slide: 24 },
    { id: 'cp1', label: 'Checkpoint 1', range: 'Optional', minutes: 0, teacher: 'Optional diagnostic: local resistance.', students: 'Work without the coach.', slide: 25 },
    { id: 'evidence', label: 'Evidence Lab', range: '61-68', minutes: 7, teacher: 'Module 07: one claim about pushback from two sources.', students: 'Observe, then infer, then name a limit.', slide: 26 },
    { id: 'cp2', label: 'Checkpoint 2', range: '68-78', minutes: 10, teacher: 'Module 10: organized resistance by enslaved people. Finish at home if needed.', students: 'Draft, coach, revise.', slide: 27 },
    { id: 'close', label: 'Landing Sentence', range: '78-80', minutes: 2, teacher: 'Land the answer and hand off to 4.7.', students: 'Say the topic in one sentence.', slide: 28 }
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
        land: [
          'CED p. 88. One learning objective, L (Governance): explain the effects of the development of state power from 1450 to 1750. The reasoning process is Causation (p. 75); the suggested skill is 4.B Contextualization, explain how a development is situated in a broader context.',
          'KC-4.3.III.iii: state expansion and centralization led to resistance from an array of social, political and economic groups on a local level. KC-5.3.III.C: enslaved persons challenged existing authorities in the Americas through organized resistance.',
          'The CED\'s illustrative examples (optional): Pueblo Revolts; Fronde; Cossack revolts; Maratha conflict with Mughals; Ana Nzinga\'s resistance (as ruler of Ndongo and Matamba); Metacom\'s War (King Philip\'s War); Maroon societies in the Caribbean and Brazil; resistance of enslaved persons in North America. All eight are in this deck, each told briefly, because "an array of groups" is the Key Concept and no one case can show it.',
          'The CED\'s sample activity (p. 77) is a close reading of the Declaration of Pedro Naranjo (1681). It is the Primary Source module; slide 12 is a first look.',
          'Owns: local resistance to expanding and centralizing states, across Afro-Eurasia and the Americas; organized resistance by enslaved people in the Americas.',
          'Bridge only: rivalries between European states (KC-4.3.III.ii, Topic 4.5; the Unit 4 contract forbids it as a 4.6 target); Versailles (3.2, one clause); the labor systems and plantations (4.4, named as the push); casta and elites (4.7, the hand-off); the Haitian Revolution (Unit 5, after 1750, not mentioned).',
          'Three myths, on slide 21: "only colonized peoples resisted states"; "maroons were just runaways hiding in the woods"; "resisting a European empire meant opposing slavery." Slide 20 answers a fourth, "resistance always failed."',
          'Every picture in this deck is a real object from the 1600s: a print made in Paris and a Dutch print made for a book published in Leiden, two paintings made in the Deccan, and a Dutch print of Razin made about thirty years after his death. The map is the course\'s own. None is AI-generated.'
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
        land: [
          'No notes. Take fast answers and do not reteach.',
          'Accept: mercantilist laws (the Navigation Act, the Casa de Contratación), chartered companies (the VOC, the English East India Company); Versailles, the devshirme, tax farming, zamindars, salaried officials; the encomienda, the mit\'a, chattel slavery, indentured servitude.',
          'The bridge is 4.5\'s hand-off in the unit story map, word for word.',
          'Prompt 2 is centralization (pulling power inward); prompts 1 and 3 are expansion (pushing outward). Those are the two pushes on slide 5.'
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
        land: [
          'The picture is a real historical print: Jan Luyken, "Stenko Radzin is brought into Moscow on a cart with his brother," an etching made for J. L. Gottfried\'s Historische kronyck (Leiden: Pieter van der Aa, 1700), Rijksmuseum RP-P-1896-A-19368-1482. Luyken never went to Russia; the city and the clothing are his imagining. It shows a captured rebel chained in a cart under a gallows-like frame, guards with pikes, and a crowd at the city gate.',
          'Razin\'s revolt is one case of many: peasants and Cossacks against a tsar who had just bound peasants to the land. Slide 8 tells it.',
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
      phase: 'map', kind: 'map', eyebrow: 'Where People Pushed Back',
      kc: 'Unit 4: Learning Objective L', title: 'Pushback, inside states and at their edges.',
      footer: 'The key sorts every case: pushback inside a state, at the edge of an expanding state, or organized resistance by enslaved people.',
      visual: { url: '../assets/images/instructional-maps/topic-4-6.svg', alt: 'World map with labeled dots at Paris, the Volga, the Deccan, Ndongo and Matamba, New Mexico, New England, Palmares in Brazil, Jamaica and the Stono River in South Carolina, each with a date' },
      notes: {
        minutes: 1,
        land: [
          'The course\'s own instructional map, rebuilt for this story. Dots mark regions, not exact battlefields, and the colors sort the cases: inside a state (Paris, the Volga), at an expanding state\'s edge (the Deccan, Ndongo and Matamba, New Mexico, New England), and organized resistance by enslaved people (Palmares, Jamaica, Stono).',
          'Point out the spread: pushback happened in Europe, Asia, Africa and the Americas in a little over a century, from the 1620s to 1739. That spread is the "array" in the Key Concept.'
        ],
        ask: 'Find one case in Afro-Eurasia and one in the Americas.',
        listenFor: 'Any pair across the Atlantic, for example the Fronde and the Pueblo Revolt.'
      }
    },
    {
      phase: 'fronde', kind: 'frame-pair', eyebrow: 'Inside the State · France, 1648 to 1653',
      kc: 'KC-4.3.III.iii', title: 'Judges, Paris and nobles against the crown.',
      template: {
        panels: [
          { visual: { url: '../assets/images/topics/4-6/broussel-paris-1648.jpg', alt: 'An engraved portrait of an older man with long hair and a small beard, in a dark robe and white collar, inside an oval frame, with a coat of arms below and a printed caption naming him as a counselor of the king in the Parlement of Paris', credit: 'Portrait of Pierre Broussel, printed in Paris, 1648 · Rijksmuseum · Public domain', ratio: 0.822 }, tag: 'Printed in Paris, 1648', text: 'The judge **Pierre Broussel**, whose arrest set off the barricades.' },
          { visual: { url: '../assets/images/topics/4-6/parlement-arrest-luyken-1699.jpg', alt: 'An etching of soldiers with a halberd at a doorway seizing a man in a long robe, with a city street, a cathedral and marching soldiers behind', credit: 'Caspar Luyken, arrest of a member of the Parlement of Paris, for a book published in Leiden, 1699 · Rijksmuseum · Public domain', ratio: 0.633 }, tag: 'Dutch print, Leiden, 1699', text: 'A Dutch artist pictures the **arrest**, fifty years later.' }
        ],
        rows: [
          { label: 'Push', text: 'War with Spain: the crown demands **new taxes** (1648)' },
          { label: 'Pushback', text: 'The **Parlement** refuses; Paris builds **barricades**; nobles rise' },
          { label: 'Next', text: 'The rebels split; the **crown wins** (1653)' }
        ],
        proves: 'Centralization pushed back by judges, a city and nobles.'
      },
      notes: {
        minutes: 3,
        land: [
          'The Fronde ("sling"), 1648 to 1653, while Anne of Austria ruled as regent for the boy Louis XIV with Cardinal Mazarin as chief minister (Michel De Waele, "Fronde," Europe 1450 to 1789, 2004). France had been at war with Spain for years; war consumed about 70 percent of revenue.',
          'January 1648: the regency tried to force new fiscal edicts on the Parlement of Paris, the high court whose judges had to register royal laws; the judges refused them, including taxes aimed at themselves. In August, after the victory at Lens, the government arrested Pierre Broussel and other judges; Paris put up some 1,200 barricades on the night of 26 to 27 August, and the queen released him. On 5 January 1649 the royal family and Mazarin fled Paris.',
          'From January 1650 the "Fronde of the princes": great nobles led by the Prince of Condé. The rebels quarreled; by late 1652 the Fronde collapsed, Louis XIV entered Paris on 21 October 1652, and Mazarin returned in February 1653.',
          'Left picture: a portrait print of Broussel published in Paris in 1648 "avec privilège" (with the king\'s license to print), Rijksmuseum RP-P-1908-4807. It names him "conseiller du Roy en sa cour de Parlement de Paris." A print like this in the year of his arrest shows a judge as a public figure. Right picture: Caspar Luyken\'s etching for a Dutch life of Mazarin (Leiden, 1699), Rijksmuseum RP-P-1896-A-19368-1694; a later imagining.',
          'The effect: De Waele writes that "Louis XIV\'s reign was deeply marked by the events that shook his youth." Say "marked"; do not say the Fronde caused absolutism.'
        ],
        ask: 'Run the chain: what did the crown push for, who pushed back, how, and what happened next?',
        listenFor: 'War taxes; judges, Parisians and then nobles; refusing the taxes, barricades, revolt; the crown won and Louis XIV kept power in his own hands.',
        ap: 'KC-4.3.III.iii: political and social groups (judges, nobles) resisting centralization.'
      }
    },
    {
      phase: 'razin', kind: 'story-steps', eyebrow: 'Inside the State · Russia, 1649 to 1671',
      kc: 'KC-4.3.III.iii', title: 'Peasants and Cossacks against the tsar.',
      template: {
        steps: [
          { label: '1649', text: 'The tsar\'s Law Code binds peasants to the land as serfs.' },
          { label: 'Runaways', text: 'Many flee south to the Don River and the Cossacks.' },
          { label: '1670', text: 'Stenka Razin leads a revolt up the Volga; towns open their gates.' },
          { label: '1671', key: true, text: 'The army wins; Razin is executed in Moscow. Serfdom stays.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'The Law Code of 1649 (Ulozhenie) completed the enserfment of the peasantry (chapter 11): a runaway serf could be returned to any place where he was recorded as having lived, with no time limit (Encyclopedia of Russian History, "Law Code of 1649"). It was itself the product of unrest: Moscow riots in June 1648 led the tsar to call for a new code.',
          'Cossacks were free frontier communities of fighters, on the Don and elsewhere, beyond the tsar\'s direct rule. Runaway serfs swelled their numbers.',
          'Stepan (Stenka) Razin, a Don Cossack, raided the Volga and the Caspian in 1667 to 1669. In 1670 he raised an army of perhaps 7,000 to 10,000; Saratov and Samara opened their gates, and Russian peasants and non-Russian peoples of the Volga rose "by the tens of thousands." The rebels said they were loyal to the tsar and against his boyars and officials. The regular army beat them at Simbirsk. Don Cossack elders captured Razin in April 1671; he was executed in Moscow on 6 June 1671 (Old Style; 16 June in our calendar) (Encyclopedia of Russian History, "Razin").',
          'Serfdom in Russia lasted until 1861.'
        ],
        ask: 'Which group is this, and which push were they answering?',
        listenFor: 'Peasants (an economic group) and Cossacks, answering centralization: the tsar\'s law binding peasants to the land.',
        ap: 'KC-4.3.III.iii: an economic group (peasants) resisting a centralizing state. The CED\'s example: Cossack revolts.'
      }
    },
    {
      phase: 'deccan', kind: 'frame-pair', eyebrow: 'At the Edges · The Deccan, 1674 to 1707',
      kc: 'KC-4.3.III.iii', title: 'An emperor pushes south. A warrior kingdom pushes back.',
      template: {
        panels: [
          { visual: { url: '../assets/images/topics/4-6/aurangzeb-golconda-c1686.jpg', alt: 'A painted portrait of an elderly man with a white beard in a white robe and turban, in profile, holding a flower in one hand and resting the other on a sword, with a golden halo, against a green background', credit: 'Aurangzeb, painted in Golconda, about 1686 · Rijksmuseum · Public domain', ratio: 0.706 }, tag: 'The Mughal emperor', text: '**Aurangzeb** moved his court south in **1681** to conquer the Deccan.' },
          { visual: { url: '../assets/images/topics/4-6/shivaji-golconda-c1680.jpg', alt: 'A painted portrait of a bearded man in profile in a gold turban with a black plume and a patterned white robe, holding a sword, inside an oval frame on a page with a gold flower border and a handwritten Dutch caption below', credit: 'Shivaji, painted in Golconda, about 1680 · Rijksmuseum · Public domain', ratio: 0.793 }, tag: 'The Maratha king', text: '**Shivaji**, crowned in **1674**, built a kingdom of hill forts.' }
        ],
        rows: [
          { label: 'Pushback', text: 'Forts and fast raids, never one big battle' },
          { label: 'Next', text: 'Aurangzeb died in the Deccan in **1707** without defeating them' }
        ],
        proves: 'Expansion pushed back by a regional power, and the empire wore itself down.'
      },
      notes: {
        minutes: 2,
        land: [
          'Shivaji (about 1627 to 1680) built Maratha power from hill forts in the western Deccan; in 1674 he was crowned at his fort of Raigad (Frances Pritchett, Columbia; NCERT 2026). Forts and fast, mobile raiding were the Maratha way of war; Aurangzeb\'s artillery could take forts but could not pin down an enemy who would not stand and fight (Topic 3.1\'s chapter tells the guns side).',
          'Aurangzeb came south in 1681 (some sources say 1682), conquered the Deccan sultanates of Bijapur (1686) and Golconda (1687), "but never could subdue the Marathas; he died in Aurangabad in 1707, without ever returning to North India" (Pritchett). After 1707 Maratha power expanded across much of the subcontinent while the Mughal center weakened. The decline had many causes; do not make the Marathas the only one.',
          'Both pictures are real paintings made in Golconda, in the Deccan, in the 1680s, and both reached the Netherlands: Shivaji, about 1680, with a long Dutch caption added on the mount (Rijksmuseum RP-T-1972-25); Aurangzeb, about 1686, from the Witsen Album of Indian rulers, with a Dutch note naming him "king of all Delhi or Deccan" (RP-T-00-3186-6). Dutch traders collected portraits of the rulers they dealt with.',
          'An extension, not on the slide: Ramchandrapant Amatya, a Maratha minister, wrote in his Ajnapatra ("The Royal Edict") that "it was due to forts that the [Maratha] state survived despite decades of onslaught" (quoted in NCERT 2026).'
        ],
        ask: 'What did the war in the Deccan cost the Mughal Empire?',
        listenFor: 'Decades of war and money, the emperor himself away from the north, and in the end a stronger Maratha power.',
        ap: 'KC-4.3.III.iii: a political group (a regional kingdom) resisting an expanding state. The CED\'s example: Maratha conflict with Mughals.'
      }
    },
    {
      phase: 'njinga', kind: 'case-file', eyebrow: 'At the Edges · West Central Africa, 1622 to 1663',
      kc: 'KC-4.3.III.iii', title: 'A queen fights and bargains with Portugal.',
      template: {
        tag: 'Ruler of Ndongo and Matamba', place: 'Inland from Luanda', date: '1624 to 1663',
        rows: [
          { label: 'Push', text: 'Portugal pushes inland from **Luanda**, largely for **captives**' },
          { label: 'Bargain', text: '**1622**: Njinga negotiates in Luanda and is baptized **Ana de Sousa**' },
          { label: 'Fight', text: 'Rules from **1624**; conquers **Matamba**; allies with the **Dutch** (1641)' },
          { label: 'Peace', text: 'Makes **peace** with Portugal in the **1650s**; dies ruling, **1663**' }
        ],
        proves: 'An African ruler held off an expanding colony with war and diplomacy.'
      },
      notes: {
        minutes: 2,
        land: [
          'Portuguese Angola, centered on Luanda (founded 1576), pushed into the kingdom of Ndongo; its wars fed the Atlantic slave trade with captives (Enslaved.org, "Njinga"; Linda Heywood, Njinga of Angola, 2017).',
          'In 1622 King Mbandi sent his sister Njinga to Luanda to negotiate peace; she agreed to be baptized there and took the name Ana de Sousa. She became ruler in 1624. After Portuguese attacks drove her out of Ndongo, she conquered Matamba in the 1630s and ruled from there, allied with the Dutch West India Company after the Dutch occupied Luanda in 1641 (the Portuguese retook it in 1648), and made peace with Portugal in the 1650s (sources give 1656 or 1657). She died on 17 December 1663 (Enslaved.org).',
          'The famous story of Njinga sitting on a kneeling servant during the 1622 talks comes from an Italian missionary\'s account published in 1687; leave it out or tell it as a later story.',
          'Complexity for the myth slide: her own wars took captives, and Matamba sold them into the slave trade. Resisting Portugal was not the same as opposing slavery.',
          'No picture: the best-known images of Njinga are a missionary\'s watercolors and a 1687 engraving made decades after the events; none could be checked this build. The slide is text.'
        ],
        ask: 'Name two of Njinga\'s moves, one a fight and one a bargain.',
        listenFor: 'Baptism and talks in Luanda, the 1650s peace; conquering Matamba, the Dutch alliance.',
        ap: 'KC-4.3.III.iii: a political group resisting an expanding state. The CED\'s example: Ana Nzinga\'s resistance.'
      }
    },
    {
      phase: 'pueblo', kind: 'branch-tree', eyebrow: 'At the Edges · New Mexico, 1598 to 1680',
      kc: 'KC-4.3.III.iii', title: 'Why the Pueblos rose: causes come in kinds.',
      footer: 'On top of all three came drought and famine. Strong answers name more than one kind of cause.',
      template: {
        claimLabel: 'The Pueblo Revolt, 1680',
        claim: 'Spanish rule since **1598** pressed on Pueblo towns in three ways.',
        branches: [
          { label: 'Religious', note: 'Friars tried to stamp out Pueblo religion', items: ['Dances banned, masks burned', '1675: 47 leaders arrested'] },
          { label: 'Economic', note: 'Work and crops taken', items: ['Encomienda tribute', 'Forced labor'] },
          { label: 'Political', note: 'Spanish rule by force, and its failures', items: ['Men hanged for plotting', 'Raids not stopped'] }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Spain\'s colony in New Mexico dates from Juan de Oñate\'s expedition in 1598 (Library of Congress, In Custodia Legis, 2013; NPS Pecos). Under the encomienda, Pueblos had to hand over a portion of their crops each year; under repartimiento they were forced to work for Spaniards without pay (LOC 2013).',
          'Religious suppression: from the 1650s Franciscan friars banned the kachina dances and burned masks and prayer sticks; in 1675 Governor Juan Francisco Treviño ordered kivas destroyed and arrested 47 religious leaders, whom the Spanish called sorcerers; four were sentenced to death, three hanged and one killed himself, and the rest were whipped and jailed. Pueblo men came to Santa Fe in force, and the prisoners were released. Popé of Ohkay Owingeh (San Juan Pueblo) was among them.',
          'Political: Spanish governors ruled by force (Naranjo says seven or eight men were hanged for plotting under Governor Ugarte y la Concha, around 1650), and Spanish soldiers did not stop Apache raids. Drought and famine in the 1660s and 1670s were not a kind of rule; they are the extra pressure in the footer that made every burden heavier (LOC 2013).',
          'Sorting causes this way is the CED\'s own sample activity: highlight the social, economic and political reasons in Naranjo\'s testimony. The Primary Source module does it. Do not settle "the most significant cause" here; that is the module\'s question.'
        ],
        ask: 'Which kind of cause would a Pueblo religious leader have named first? Which would a farmer?',
        listenFor: 'The religious leader: the attack on the dances, the kivas and the leaders. The farmer: tribute, forced labor, drought.',
        ap: 'Causation: causes come in kinds, and they combine.'
      }
    },
    {
      phase: 'naranjo', kind: 'source-quote', eyebrow: 'A Witness · 1681',
      kc: 'KC-4.3.III.iii', title: 'How the towns kept the same day.',
      footer: 'A first look. The Primary Source module (08) reads more of his testimony.',
      template: {
        quote: '[T]he cord was passed through all the pueblos of the kingdom so that the ones which agreed to it might untie one knot in sign of obedience, and by the other knots they would know the days which were lacking.',
        attribution: { author: 'Pedro Naranjo, of San Felipe Pueblo, questioned by Spanish officials', work: 'Declaration, translated by C. C. Shelby (1942)', year: '19 December 1681' },
        notice: 'What did the cord do? Why would a revolt across many towns need it?'
      },
      notes: {
        minutes: 1,
        land: [
          '"Declaration of Pedro Naranjo of the Queres Nation," 19 December 1681, translated by Charmion Clair Shelby in Charles Wilson Hackett, ed., Revolt of the Pueblo Indians of New Mexico and Otermín\'s Attempted Reconquest, 1680-1682 (University of New Mexico Press, 1942), vol. 2. Naranjo, a Keres man from San Felipe Pueblo, was captured during Otermín\'s attempt to retake New Mexico and questioned by Spanish officials. The slide starts mid-sentence (the record reads "He said that the cord was passed ...", "he" being Naranjo as the Spanish clerk recorded him). The sentence before it says three spirit beings told Popé, in a kiva at Taos, to make a cord of maguey fiber and tie in it one knot for each day until the rising.',
          'This is the CED\'s own sample-activity source (p. 77). The slide uses only the knotted-cord passage; the Primary Source module gives students more of the testimony and asks for the reasons for the revolt and how to source a captive\'s statement. Do not run those questions here.',
          'Sourcing in one line: a captive answering questions put to him by the officials his people had driven out, recorded in Spanish. The record says he spoke Spanish well, though interpreters were present for the oath. The cord detail is the kind of fact he had little reason to invent.'
        ],
        ask: 'What did the cord do?',
        listenFor: 'Each town that agreed untied a knot, and the knots left counted down the days, so every town would rise on the same day.',
        ap: 'A primary source as evidence for how the revolt was organized.'
      }
    },
    {
      phase: 'revolt', kind: 'story-steps', eyebrow: 'At the Edges · New Mexico, 1675 to 1690s',
      kc: 'KC-4.3.III.iii', title: 'The Pueblo Revolt, and what changed after.',
      template: {
        steps: [
          { label: '1675', text: 'Popé is whipped with the arrested religious leaders, then released.' },
          { label: 'Cords', text: 'Runners carry knotted cords; towns count down together.' },
          { label: '10 August 1680', text: 'The Pueblos strike early; Santa Fe is besieged; settlers flee to El Paso.' },
          { label: '1690s', key: true, text: 'Spain returns, but without the encomienda, and the friars press far less hard.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'When the Spanish arrested two runners from Tesuque on 9 August, the Pueblos rose early, on 10 August 1680 (Naranjo: "two days before the time set ... it was carried out prematurely"; LOC 2013). They killed about 400 colonists, including 21 Franciscan friars, besieged Santa Fe and cut off its water. On 21 August Governor Antonio de Otermín broke out and led the survivors south to El Paso del Norte.',
          'For twelve years the Pueblos ruled themselves. Diego de Vargas returned in 1692 and retook Santa Fe; revolts in 1694 and 1696 were crushed (LOC 2013).',
          'What changed: "The Franciscans moderated their zeal. The practice of encomiendas (paying tribute) was abolished" (NPS, Pecos). "Although the friars had returned with De Vargas, the forced labor practices and aggressive suppression of native religion did not" (LOC 2013). Other forms of forced service continued; say "far less hard," not "stopped."',
          'Popé\'s own rule after 1680 also drew opposition among the Pueblos; Naranjo testified that Popé had people who opposed his orders killed. Unity was an achievement of 1680, not a permanent fact.'
        ],
        ask: 'The Spanish came back. So did the revolt fail?',
        listenFor: 'It was not permanent, but it changed the terms: no encomienda, and less pressure on Pueblo religion. Resistance had effects even after defeat.',
        ap: 'KC-4.3.III.iii: Indigenous towns resisting an expanding state. The CED\'s example: Pueblo Revolts.'
      }
    },
    {
      phase: 'metacom', kind: 'balance', eyebrow: 'Same Decade, Opposite Ends',
      kc: 'KC-4.3.III.iii', title: 'Two revolts against two expanding colonies.',
      template: {
        job: 'Push back',
        left: { tag: 'New England', name: 'Metacom\'s War', when: '1675 to 1676', text: 'Burned more than a dozen English towns. Crushed: Metacom killed; captives sold into slavery.' },
        right: { tag: 'New Mexico', name: 'Pueblo Revolt', when: '1680', text: 'Drove the Spanish out for twelve years. They came back on new terms.' },
        claimLabel: 'Ask why',
        claim: 'Same push, **opposite outcomes**: what was different about each colony and each alliance?'
      },
      notes: {
        minutes: 2,
        land: [
          'Metacom\'s War (King Philip\'s War), 1675 to 1676: New England colonists were taking Wampanoag land and putting the Wampanoag under colonial law. In June 1675 Plymouth executed three Wampanoag men for killing John Sassamon, a Christian Native informer, and fighting began (Dictionary of American History). Metacom, son of Massasoit, was the Wampanoag sachem the English called Philip. Nipmucks, Pocumtucks, Narragansetts and others joined, though historians doubt there was one planned alliance under Metacom (Oxford Companion to American Military History).',
          'More than a dozen English towns were burned. The colonies, with Native allies and Mohawk pressure from the west, won; Metacom was shot by a Native man in Benjamin Church\'s company in August 1676, and many Native captives were sold into slavery in the West Indies. Southern New England\'s Native peoples lost their political and military independence.',
          'Why the difference? Let students suggest it, then offer: New England had far more colonists than New Mexico had Spaniards; the Pueblos coordinated many towns on one day; the New England colonies had Native allies, and the Mohawks kept others from escaping west. These are reasons to weigh, not a single answer.'
        ],
        ask: 'Same push, same decade. Why might one revolt win and the other lose?',
        listenFor: 'Numbers of colonists, coordination, allies on each side, geography.',
        ap: 'Causation: an effect (the outcome) can have several causes. The CED\'s example: Metacom\'s War.'
      }
    },
    {
      phase: 'organized', kind: 'branch-tree', eyebrow: 'Enslaved People Organize',
      kc: 'KC-5.3.III.C', title: 'Not one person running. Many people acting together.',
      footer: 'The College Board\'s word is organized: resistance that challenged the authorities.',
      template: {
        claimLabel: 'Organized resistance',
        claim: 'Enslaved people in the Americas **organized** to challenge the authorities over them.',
        branches: [
          { label: 'Build a free town', note: 'Maroon communities', items: ['Palmares, Brazil'] },
          { label: 'Force a treaty', note: 'Win freedom on paper', items: ['Jamaica, 1739'] },
          { label: 'Rise and march', note: 'Armed revolt', items: ['Stono, 1739'] }
        ]
      },
      notes: {
        minutes: 1,
        land: [
          'KC-5.3.III.C: "Enslaved persons challenged existing authorities in the Americas through organized resistance." The word that matters is organized. Enslaved people also resisted every day, by working slowly, keeping their own beliefs and running away alone; this Key Concept asks about resistance that was collective and challenged the colony itself.',
          'The CED\'s examples: Maroon societies in the Caribbean and Brazil, and resistance of enslaved persons in North America. Palmares and Jamaica are the first; Stono is the second.',
          'The push behind all three is the plantation colony built on slavery (Topic 4.4).'
        ],
        ask: 'What makes resistance organized?',
        listenFor: 'Many people, leaders, a plan, a place, and a challenge to the authorities themselves.'
      }
    },
    {
      phase: 'palmares', kind: 'case-file', eyebrow: 'Maroon Communities · Brazil',
      kc: 'KC-5.3.III.C', title: 'Palmares: a free state in the hills.',
      template: {
        tag: 'Quilombo', place: 'Hills behind the sugar coast', date: 'c. 1600 to 1695',
        rows: [
          { label: 'People', text: '**Thousands**, in a cluster of fortified towns' },
          { label: 'Life', text: 'Farms, and **trade** with nearby settlers' },
          { label: 'Defense', text: 'Beat back expedition after expedition' },
          { label: 'Leaders', text: '**Ganga Zumba**\'s treaty (1678) rejected; **Zumbi** fights on; main town falls 1694; Zumbi killed 1695' }
        ],
        proves: 'What makes this organized resistance, and not just running away?'
      },
      notes: {
        minutes: 2,
        land: [
          'Palmares, in the hills of the old captaincy of Pernambuco (today\'s Alagoas), was "not just one quilombo ... [but] a collection of numerous, perhaps dozens, of quilombos, joined together for purposes of defense and survival" (Flávio Gomes, "Palmares," Encyclopedia of African-American Culture and History). The first reports date from the late 1500s.',
          'Population: Gomes gives more than 20,000 by the mid-1600s and calls the chroniclers\' 30,000 an exaggeration; other historians estimate lower. Say "thousands." Do not repeat "the largest and most durable maroon community in the Americas"; no source here supports it.',
          'Palmares traded manioc flour, palm wine and other goods with nearby settlers for guns, powder, cloth and tools; it resisted Portuguese and Dutch expeditions. People of African birth, Brazilian-born people, and some Indigenous people and Europeans lived there; chapels with Catholic images stood beside African practices (Gomes).',
          'In 1678 Ganga Zumba accepted a treaty with the colonial government (freedom for those born in Palmares, return of other runaways); many rejected it, and Zumbi led the fight on. In 1694 an army of paulista bandeirantes under Domingos Jorge Velho took the main town, Macaco; Zumbi was killed on 20 November 1695, now Brazil\'s Day of Black Consciousness.',
          'No picture: the old lesson used a 1647 Dutch map said to mark Palmares, which could not be checked this build. The slide is text.'
        ],
        ask: 'Find three pieces of evidence that Palmares was organized.',
        listenFor: 'Leaders, towns, farms and trade, an army that beat expeditions, a treaty.',
        ap: 'KC-5.3.III.C. The CED\'s example: the establishment of Maroon societies in Brazil.'
      }
    },
    {
      phase: 'jamaica', kind: 'source-quote', eyebrow: 'Maroon Communities · Jamaica, 1739',
      kc: 'KC-5.3.III.C', title: 'Freedom on paper, and its price.',
      footer: 'Freedom for one community, and a promise to guard slavery for others.',
      template: {
        quote: '[Cudjoe\'s people] shall for ever hereafter [be] in a perfect state of freedom and liberty ... [but] if any negroes shall hereafter run away ... and shall fall into Captain Cudjoe\'s hands, they shall immediately be sent back.',
        attribution: { author: 'Articles of the treaty with the Maroons of Trelawny Town', work: 'Second and ninth articles', year: '1 March 1739' },
        notice: 'What did the Maroons gain? What did they have to promise?'
      },
      notes: {
        minutes: 2,
        land: [
          'After the English took Jamaica from Spain in 1655, people who escaped slavery formed communities in the mountains, the Maroons, joined over the decades by many more. The colony fought them for years (the First Maroon War of the 1720s and 1730s) without winning.',
          'The Leeward Maroons under Cudjoe signed articles with the colony dated 1 March 1738 in the old calendar (1739 in ours), confirmed by the Assembly on 12 May 1739; the Windward Maroons signed a similar treaty later in 1739. The quotation joins the second and ninth articles; the brackets and the cut "from their masters or owners" are BeHistorical\'s (the treaty\'s own words are "the said Captain Cudjoe, the rest of his captains, adherents, and men shall for ever hereafter in a perfect state of freedom and liberty").',
          'Third article: 1,500 acres of land "for themselves and posterity for ever." Sixth: Cudjoe and his successors to "take, kill, suppress, or destroy ... all rebels wheresoever they be, throughout this island." Ninth: runaways to be sent back, with a reward set by the Assembly. Seventh: to fight any foreign invader.',
          'The effect cuts both ways: organized resistance forced a colony to recognize Maroon freedom and land, and the colony turned the Maroons into a guard against other enslaved people.'
        ],
        ask: 'Was the treaty a victory?',
        listenFor: 'Both: freedom and land the colony could not take, and a promise that made the Maroons help hold others in slavery.',
        ap: 'KC-5.3.III.C. The CED\'s example: Maroon societies in the Caribbean. Also an effect of resistance: a bargain.'
      }
    },
    {
      phase: 'stono', kind: 'story-steps', eyebrow: 'North America · South Carolina, 1739',
      kc: 'KC-5.3.III.C', title: 'The Stono Rebellion, and the colony\'s answer.',
      template: {
        steps: [
          { label: '9 September 1739', text: 'About twenty enslaved people seize guns from a store near the Stono River.' },
          { label: 'The march', text: 'They head south for Spanish Florida, which promised freedom; up to a hundred join.' },
          { label: 'That afternoon', text: 'Militia break the march, hunt survivors for days; 20 to 40 colonists and dozens of rebels die.' },
          { label: '1740', key: true, text: 'The Negro Act tightens control over every enslaved person in the colony.' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'The revolt began on Sunday, 9 September 1739, on a branch of the Stono River near Charleston. The rebels broke into a store for guns and powder, killed the storekeepers, and marched south toward St. Augustine, "to reach St. Augustine and claim freedom in Spanish-controlled Florida"; their numbers grew "from sixty to as many as one hundred," and some accounts say they marched with drums and a banner, shouting "Liberty!" Around four o\'clock planters and militia caught them near the Edisto River. "About forty whites and probably as many blacks were killed"; fighting and hunting went on into the next week (Mark M. Smith, "Stono Rebellion," South Carolina Encyclopedia). The account written in 1739 counts "about 40 Negroes and 20 whites" (Colonial Records of the State of Georgia, vol. 22, pt. 2); the slide gives the range. The starting number of about twenty is the common estimate in other accounts.',
          'Spain had promised freedom since 1693 to people who escaped the English colonies and became Catholic, and in 1738 founded Fort Mose near St. Augustine for them. Several Stono rebels came from Kongo, where Catholicism was widespread (Smith; John Thornton, 1991). Britain and Spain went to war weeks later.',
          'The answer: the Negro Act of 1740 made freeing an enslaved person depend on a special act of the assembly and required patrol service of every militiaman; in 1741 the colony put a heavy duty on importing more enslaved people (Smith).',
          'These context facts are the Skill Builder\'s practice. Name them here as part of the story; let students do the contextualizing in Module 05.'
        ],
        ask: 'How did the colony respond, and what does that tell you about how the revolt was seen?',
        listenFor: 'With force and then a harsher law: the colony saw organized revolt as a threat to its whole system.',
        ap: 'KC-5.3.III.C. The CED\'s example: resistance of enslaved persons in North America.'
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
      phase: 'outcomes', kind: 'ledger', eyebrow: 'What Came Next',
      title: 'Resistance had effects too.',
      template: {
        rows: [
          { name: 'Crushed', mark: 'C', tool: 'The Fronde, Razin, Metacom, Stono:', result: 'the state won, and often came out stronger.' },
          { name: 'Bargained', mark: 'B', tool: 'Njinga, the Jamaica Maroons, New Mexico:', result: 'the state had to make terms.' },
          { name: 'Worn down', mark: 'W', tool: 'The Marathas:', result: 'the empire spent itself and never won.' }
        ],
        payoffLabel: 'So',
        payoff: 'Resistance is an effect of state power, and it changed states too'
      },
      notes: {
        minutes: 2,
        land: [
          'The learning objective asks for the effects of state power. Resistance is one effect; this slide is the next link, what resistance did in return.',
          'Crushed and stronger: Louis XIV ruled in person and kept the nobles close (3.2); serfdom stayed in Russia; Southern New England\'s Native nations lost their independence; South Carolina passed the Negro Act. Bargained: Njinga\'s peace in the 1650s; the 1739 treaties; Spain\'s return to New Mexico without the encomienda. Worn down: the Mughals in the Deccan.',
          'Palmares fits "crushed" in the end, after nearly a century and a rejected treaty. Let students argue where it goes; there is no single right box.'
        ],
        ask: 'Where would you put Palmares, and why?',
        listenFor: 'Crushed in the end (1694 to 1695), but it lasted most of a century and forced a treaty offer in 1678: it fits more than one box.'
      }
    },
    {
      phase: 'myths', kind: 'myth-evidence', eyebrow: 'Myth and Evidence',
      title: 'Three things people get wrong.',
      footer: 'The evidence tells a more interesting story than the myths.',
      template: {
        rows: [
          { myth: 'Only colonized peoples resisted states.', evidence: 'French judges and nobles and Russian peasants pushed back against their own rulers.', source: 'The Fronde; Razin' },
          { myth: 'Maroons were just runaways hiding in the woods.', evidence: 'Palmares had towns, farms, trade, an army and a treaty.', source: 'Palmares, 1600s' },
          { myth: 'Resisting a European empire meant opposing slavery.', evidence: 'Njinga\'s wars took captives to sell; the Maroons agreed to return runaways.', source: 'Matamba; the 1739 treaty' }
        ]
      },
      notes: {
        minutes: 2,
        land: [
          'Row 1 is the "array" in KC-4.3.III.iii: social, political and economic groups, not only colonized peoples.',
          'Row 2 is the "organized" in KC-5.3.III.C.',
          'Row 3 is the hardest. Do not swing to the opposite myth either: the Maroons\' freedom was real, and Njinga held off Portugal for decades. People resisted the push that landed on them, not every injustice of their age.'
        ],
        ask: 'Which myth is the hardest to correct without making a new mistake?',
        listenFor: 'The third: resisting one power was not opposing slavery itself, but that does not make the resistance less real.'
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
        land: [
          'This is the slide the lesson drives toward. Show it, then hide it and have students redraw the four links from memory, with one case under each link.',
          'The chain is KC-4.3.III.iii in four steps: "state expansion and centralization led to resistance from an array of social, political, and economic groups on a local level," plus one more link for what the resistance did. KC-5.3.III.C runs the same chain with the plantation colony as the push.',
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
        minutes: 6,
        land: [
          'The Skill Builder practices the CED\'s suggested skill, 4.B Contextualization: explain how a specific development is situated within a broader context.',
          'It models the Fronde (slide 19), then gives the Stono Rebellion with three pieces of context (a plantation colony with an enslaved majority, Spanish Florida\'s promise of freedom, a war between Britain and Spain about to begin) and asks students to place the revolt in its context and say how that context helps explain it.',
          'Push students to write the "because." Listing the context is only half the move.'
        ],
        ask: 'After students have written: which piece of context explains the march south?',
        listenFor: 'Debrief only after the module: Spanish Florida\'s offer of freedom, which explains the direction of the march, and the coming war, which explains the timing.'
      }
    },
    {
      phase: 'cp1', kind: 'action', eyebrow: 'Module 06 · Checkpoint 1 · Optional',
      title: 'Local resistance.',
      subtitle: 'Optional today. On your own: Checkpoint 1 is the diagnostic, so no coach.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-6-internal-external-challenges.html#modules' },
      notes: {
        minutes: 0,
        land: [
          'Checkpoint 1 is not required for 4.6. Use it for early finishers or as a quick diagnostic if the room is ahead.',
          'It asks for two cases of local resistance, one in Africa, Asia or Europe and one in the Americas, each run through the chain. Give feedback in the room: on an alternating block nothing carries over.'
        ],
        ask: 'Name two cases from two sides of the Atlantic, and run one through the chain.',
        listenFor: 'The Marathas and the Pueblos, or the Fronde and Metacom\'s War, with push, group, pushback and outcome.'
      }
    },
    {
      phase: 'evidence', kind: 'action', eyebrow: 'Module 07 · Evidence Lab',
      title: 'Build one claim from two sources.',
      subtitle: 'What made people push back, and how? Two sources, one limit.',
      action: { label: 'Open Student Lesson', url: '../unit-4/lesson-4-6-internal-external-challenges.html#modules' },
      notes: {
        minutes: 7,
        land: [
          'Four real objects and two written sources: the 1648 Paris print of Broussel, Luyken\'s 1700 print of Razin, the Shivaji portrait (about 1680), the Aurangzeb portrait (about 1686), and two text cards, from Naranjo\'s 1681 testimony and the 1739 Jamaica treaty.',
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
        minutes: 10,
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
