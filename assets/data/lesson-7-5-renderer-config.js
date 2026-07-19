// lesson-7-5-renderer-config.js
// Topic 7.5, Unresolved Tensions After World War I
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
// NOTE: the thematic focus for this topic is GOV (Governance), it changes back
// from ECN (Topic 7.4). Do not carry the ECN text forward. The illustrative-
// examples block is verbatim CED text attached to KC-6.2.I.B as a flat array
// with TWO headed groups, "Territorial gains:" (two bullets) and "Anti-imperial
// resistance:" (two bullets), each heading as a lead entry, matching the
// structure used across Unit 4–7 configs.
(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Thematic Focus, Governance (GOV)',
      theme: 'Governance',
      text: 'A variety of internal and external factors contribute to state formation, expansion, and decline. Governments maintain order through a variety of administrative institutions, policies, and procedures, and governments obtain, retain, and exercise power in different ways and for different purposes.',
      illustrativeExamples: []
    },
    {
      code: 'Unit 7: Learning Objective E',
      theme: 'Learning Objective',
      text: 'Explain the continuities and changes in territorial holdings from 1900 to the present.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.I.B',
      theme: 'Governance',
      text: 'Between the two world wars, Western and Japanese imperial states predominantly maintained control over colonial holdings; in some cases, they gained additional territories through conquest or treaty settlement and in other cases faced anti-imperial resistance.',
      illustrativeExamples: [
        'Territorial gains:',
        'Transfer of former German colonies to Great Britain and France under the system of League of Nations mandates',
        'Manchukuo / Greater East Asia Co-Prosperity Sphere',
        'Anti-imperial resistance:',
        'Indian National Congress',
        'West African resistance (strikes/congresses) to French rule'
      ]
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: 'First & 10: The Empire That Would Not End',
    embedUrl: 'first-and-10-topic-7-5-unresolved-tensions-capture.html?v=unit7-v1',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 7.5 lesson path.'
  };

  lesson.map = {
    ...lesson.map,
    key: [
      { label: 'Empires reorganized, not ended', detail: 'The empires that collapsed in Topic 7.1 left territory on the table. Rather than independence, their colonies were redistributed to the victors. Between the wars, Western and Japanese imperial states predominantly MAINTAINED control over colonial holdings, the continuity at the heart of the Learning Objective.' },
      { label: 'Mandates: gains by treaty', detail: 'Former German colonies were transferred to Great Britain and France under the system of League of Nations mandates, German East Africa to Britain, German South West Africa to South African control. The post-Ottoman Middle East was carved by Sykes-Picot and mandates: France over Syria and Lebanon, Britain over Iraq. Borders drawn without regard to ethnic and sectarian lines sowed future conflict.' },
      { label: 'Japan: gains by conquest', detail: 'Japan did not merely hold its empire, it expanded it. Manchukuo (1932) was a puppet state carved from Manchuria; the Greater East Asia Co-Prosperity Sphere framed Japanese expansion as Asian unity against Western imperialism. Conquest and treaty settlement are exactly the "additional territories" the Key Concept names.' },
      { label: 'Resistance: the change building beneath', detail: 'Even where control held, it faced anti-imperial resistance. The Indian National Congress (founded 1885) moved from petitions to mass protest, galvanized by the 1919 Jallianwala Bagh massacre; West African strikes, protests, and congresses challenged French rule. Maintained control (continuity) ran alongside rising resistance (change), the unresolved tensions that fuel Topic 7.6.' }
    ]
  };

  lesson.stableImages = {
    map: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG',
    first10: 'https://commons.wikimedia.org/wiki/Special:FilePath/Big_four.jpg',
    contentDelivery: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG',
    beSurreal: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flag_of_Manchukuo.svg',
    skill: 'https://commons.wikimedia.org/wiki/Special:FilePath/MPK1-426_Sykes_Picot_Agreement_Map_signed_8_May_1916.jpg',
    checkpoint1: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_1936_empires_colonies_territory.PNG',
    evidence: 'https://commons.wikimedia.org/wiki/Special:FilePath/Big_four.jpg',
    source: 'https://commons.wikimedia.org/wiki/Special:FilePath/MPK1-426_Sykes_Picot_Agreement_Map_signed_8_May_1916.jpg',
    beInTheRoom: 'https://commons.wikimedia.org/wiki/Special:FilePath/Big_four.jpg',
    checkpoint2: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mahatma-Gandhi,_studio,_1931.jpg'
  };

  lesson.beInTheRoom = {
    url: '../beintheroom/unit-7/the-mandate-map.html',
    desc: 'Enter the 1919 mandate negotiations and decide whether self-determination can be credible when imperial powers retain control over borders, defense, finance, and the timetable for independence.'
  };

  lesson.beSurreal = {
    title: 'BeSurreal: The Emperor Who Ruled Nothing',
    text: 'When Japan carved Manchukuo out of Manchuria in 1932, it needed a face for the new state, so it reinstalled Puyi, the last emperor of China, who had been deposed as a child in 1912. He was crowned again, this time as ruler of Manchukuo, in robes and ceremony fit for a sovereign. But the throne was pure theater. Every law was written by Japanese advisers; the Kwantung Army guarded his palace and controlled who entered and left; he could not appoint his own ministers or even leave the grounds without permission. An emperor in name presiding over a conquest run entirely by someone else, sovereignty as stage scenery for empire.',
    prompt: 'Manchukuo had an emperor, a flag, a capital, and a name, everything a state is supposed to have except actual independence. What does this elaborate performance of sovereignty reveal about how imperial states "gained additional territories through conquest" while disguising the gain as something else?'
  };

  lesson.skillBuilder = {
    label: 'Continuity & change practice',
    title: 'Maintained, Gained, Challenged: Building a Continuity-and-Change Argument',
    intro: 'Topic 7.5 is built for the AP\'s continuity-and-change skill: the Learning Objective asks you to explain the continuities AND changes in territorial holdings. A weak answer lists what happened; a strong one sorts each development into continuity (control maintained) or change (territory gained, borders redrawn, resistance rising) and explains the relationship between them. Build the frame below.',
    steps: [
      { label: 'Name the continuity (with evidence)', text: 'The overarching continuity is the Key Concept itself: between the wars, Western and Japanese imperial states PREDOMINANTLY MAINTAINED control over colonial holdings. Evidence: Britain and France kept their pre-war empires intact, and the mandate system handed them MORE rather than freeing anyone, the rhetoric of "preparing territories for self-governance" masking continued colonial control.' },
      { label: 'Name the changes (with evidence)', text: 'Two kinds of change. (1) Territorial GAINS: former German colonies transferred to Britain and France under League of Nations mandates; the post-Ottoman Middle East divided by Sykes-Picot; Japan\'s conquest of Manchuria and creation of Manchukuo and the Greater East Asia Co-Prosperity Sphere. (2) Rising RESISTANCE: the Indian National Congress (galvanized by the 1919 Jallianwala Bagh massacre) and West African strikes, protests, and congresses against French rule.' },
      { label: 'Say what the relationship reveals', text: 'Finish with the analytical payoff: continuity and change were happening at once. Imperial control was maintained AND expanded (gains) even as it was increasingly challenged (resistance). The tensions this left unresolved, borders drawn without regard to ethnic and sectarian lines, conquered peoples under puppet states, colonized peoples demanding self-determination, became the fuse for the next war in Topic 7.6.' }
    ],
    prompt: 'In three to four sentences, explain ONE continuity and ONE change in territorial holdings between the world wars. Use specific evidence (e.g., the League of Nations mandate system, Manchukuo, the Indian National Congress, or West African resistance), and explain what the relationship between the continuity and the change reveals about imperial power after World War I.'
  };

  lesson.checkpoints = [
    {
      title: 'Checkpoint 1: Maintained and Gained — Empire Reorganized',
      subtitle: 'Checks Learning Targets 1–2 and Success Criteria 1–2.',
      cardDesc: 'Imperial control maintained; mandates and Japanese conquest redraw the map.',
      learningTargets: [lesson.learningTargets[0].target, lesson.learningTargets[1].target],
      successCriteria: [lesson.successCriteria[0].criteria, lesson.successCriteria[1].criteria],
      prompt: 'Explain how Western and Japanese imperial states maintained and in some cases expanded control over territories between the two world wars. Use the League of Nations mandate system AND one example of territorial gain by conquest or treaty (the post-Ottoman Middle East mandates or Japanese Manchukuo) as your evidence, and explain the gap between the mandate system\'s rhetoric and its reality.',
      responseType: 'Checkpoint 1',
      terms: ['League of Nations mandates', 'German East Africa', 'German South West Africa', 'Sykes-Picot Agreement', 'Syria', 'Lebanon', 'Iraq', 'Manchukuo', 'Greater East Asia Co-Prosperity Sphere', 'self-governance'],
      focus: ['State the continuity first: imperial control was predominantly maintained between the wars.', 'Use the mandate system to show gains by treaty settlement, and the rhetoric-versus-reality gap.', 'Add one gain by conquest (Japanese Manchukuo) to show expansion, not just maintenance.']
    },
    {
      title: 'Checkpoint 2: Continuity, Change, and Resistance',
      subtitle: 'Checks Learning Target 3 and Success Criteria 3.',
      cardDesc: 'The Indian National Congress and West African resistance, the change beneath maintained control.',
      learningTargets: [lesson.learningTargets[2].target],
      successCriteria: [lesson.successCriteria[2].criteria],
      prompt: 'Explain how anti-imperial resistance challenged imperial control between the wars. Use the Indian National Congress AND West African resistance (strikes/congresses) to French rule as your evidence, then explain why this resistance is the "change" set against the "continuity" of predominantly maintained imperial control.',
      responseType: 'Checkpoint 2',
      terms: ['Indian National Congress', 'Jallianwala Bagh massacre', 'mass protest', 'self-determination', 'West African resistance', 'strikes', 'congresses', 'French colonial rule', 'nationalism', 'anti-imperial resistance'],
      focus: ['Use both required examples: the Indian National Congress and West African strikes/congresses against French rule.', 'Tie the resistance to the Learning Objective: it is the CHANGE running beneath maintained control.', 'Close by naming these as the unresolved tensions that fuel Topic 7.6.']
    }
  ];

  // Capture points, static hardcoded anchors (never JS-generated).
  // first10 is intentionally empty: the First & 10 capture lives inside the
  // capture wrapper, and nothing renders below the First & 10 iframe.
  lesson.captureUrls = {
    first10: '',
    checkpoint1: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.5+-+Unresolved+Tensions+After+World+War+I&entry.2107637366=Checkpoint+1" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.187055090=7.5+-+Unresolved+Tensions+After+World+War+I&entry.2107637366=Checkpoint+2" target="_blank" rel="noopener">Submit to Form</a>'
  };
})();
