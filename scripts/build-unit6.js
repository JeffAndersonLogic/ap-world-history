#!/usr/bin/env node
'use strict';

/**
 * Deterministically builds the BeHistorical Unit 6 lesson stacks.
 * Source alignment: AP World History: Modern CED, effective Fall 2026.
 * Run from the repository root with: node scripts/build-unit6.js
 */

const fs = require('fs');
const path = require('path');
const { inspect } = require('util');
const vm = require('vm');
const { renderFirst10Page } = require('./lib/first10-page');
const F10_CONTENT = require('./lib/f10-content');
const { checkpoint1, skillBuilderLabel } = require('./lib/ap-skill');

const ROOT = path.resolve(__dirname, '..');
const UNIT = path.join(ROOT, 'unit-6');
const DATA = path.join(ROOT, 'assets', 'data');
const ROOM = path.join(ROOT, 'beintheroom', 'unit-6');
const COACH_URL = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
const SUBMIT_NOTE = 'Organize your thinking here, submit your final work in Canvas.';

const formContext = { URLSearchParams };
formContext.window = formContext;
vm.runInNewContext(
  fs.readFileSync(path.join(ROOT, 'assets', 'js', 'behistorical-form-config.js'), 'utf8'),
  formContext,
  { filename: 'behistorical-form-config.js' }
);

const topics = [
  {
    id: '6.2', slug: 'state-expansion', title: 'State Expansion', theme: 'Governance',
    lo: 'Compare processes by which state power shifted in various parts of the world from 1750 to 1900.',
    kc: [
      ['KC-5.2.I.A', 'States strengthened existing colonies and established direct control over territories previously held by non-state entities.'],
      ['KC-5.2.I.B', 'European states, the United States, and Japan acquired territories in Asia and the Pacific while older Spanish and Portuguese influence declined.'],
      ['KC-5.2.I.C', 'European states used warfare and diplomacy to establish empires in Africa.'],
      ['KC-5.2.I.D', 'Europeans established settler colonies in some parts of their empires.'],
      ['KC-5.2.II.B', 'The United States, Russia, and Japan expanded into neighboring territories.']
    ],
    cases: ['King Leopold II and the Belgian Congo', 'British and French rule in West Africa', 'Japanese expansion into East Asia', 'Russian and United States continental expansion'],
    first10: ['A map can show imperial borders, but it cannot show the process that produced them. Between 1750 and 1900, states used treaties, chartered companies, settlers, armies, and administrative takeovers to turn influence into rule.', 'In the Congo, Leopold II first claimed a private domain through diplomacy and a humanitarian façade. International outrage later pushed the Belgian government to replace personal rule with formal colonial administration. Elsewhere, companies such as the Dutch East India Company gave way to direct state control.', 'Comparison matters: conquest in Africa, settler expansion in the Pacific, and contiguous growth by Russia, Japan, and the United States all shifted sovereignty, but they did so through different combinations of force, migration, law, and diplomacy.'],
    scenario: {
      file: 'the-flag-over-the-congo.html', title: 'The Flag over the Congo', date: 'Brussels, 1908',
      dilemma: 'Leopold II’s private Congo regime has become an international scandal. Advise how sovereignty should change, and what meaningful control would require.',
      roles: ['Belgian parliamentary reformer', 'Congolese community representative', 'Rubber company director', 'International humanitarian investigator'],
      choices: ['Transfer the territory to direct Belgian state rule with enforceable oversight', 'Create an international commission with Congolese testimony and inspection power', 'Keep company administration but impose quotas and reporting rules', 'End the concession system and negotiate locally accountable governance'],
      evidence: ['Leopold’s Congo Free State was personal rule before Belgium annexed it in 1908.', 'Chartered companies often preceded direct colonial administration.', 'Warfare, diplomacy, and administrative transfer could all shift state power.', 'A legal transfer of sovereignty did not automatically end coercive labor practices.']
    }
  },
  {
    id: '6.3', slug: 'indigenous-responses-to-state-expansion', title: 'Indigenous Responses to State Expansion', theme: 'Governance',
    lo: 'Explain how and why internal and external factors influenced state building from 1750 to 1900.',
    kc: [
      ['KC-5.3.III.D', 'Nationalism and challenges to imperial authority contributed to anticolonial movements.'],
      ['KC-5.2.II.C', 'Anti-imperial resistance took direct and indirect forms and sometimes produced new states on imperial peripheries.'],
      ['KC-5.3.III.E', 'Discontent with imperial rule led to rebellions, some influenced by religious ideas.']
    ],
    cases: ['Yaa Asantewaa and the War of the Golden Stool', 'The Indian Rebellion of 1857', 'Samory Touré in West Africa', 'The Mahdist state and the Xhosa Cattle-Killing movement'],
    first10: ['Imperial expansion did not move across empty land. It met organized states, religious communities, local elites, farmers, soldiers, and traders who made choices under pressure.', 'Responses ranged from armed resistance and coalition building to negotiation, selective borrowing, migration, and religious revival. The Indian Rebellion of 1857 brought soldiers, rulers, peasants, and religious grievances together without producing a single unified program.', 'In Asante, Yaa Asantewaa’s defense of the Golden Stool linked political sovereignty to cultural legitimacy. Resistance movements reveal both external pressure and internal debates about authority, identity, and survival.'],
    scenario: {
      file: 'the-golden-stool-council.html', title: 'The Golden Stool Council', date: 'Kumasi, 1900',
      dilemma: 'A British governor demands the Golden Stool, a sacred symbol of Asante sovereignty. The council must decide how to answer while weighing military risk and political legitimacy.',
      roles: ['Yaa Asantewaa and the war council', 'Asante merchant with coastal ties', 'Village military commander', 'Diplomatic envoy familiar with British demands'],
      choices: ['Mobilize armed resistance around defense of the Golden Stool', 'Seek a regional coalition before confronting Britain', 'Negotiate delay while protecting the stool and evacuating supplies', 'Accept limited administrative demands but reject surrender of sacred authority'],
      evidence: ['The Golden Stool represented the unity and legitimacy of the Asante state.', 'British expansion had already exiled Asante leaders and occupied Kumasi.', 'Anticolonial resistance could draw strength from nationalism, religion, and political tradition.', 'Military resistance faced severe technological and logistical disadvantages.']
    }
  },
  {
    id: '6.4', slug: 'global-economic-development', title: 'Global Economic Development', theme: 'Humans and the Environment',
    lo: 'Explain how environmental factors contributed to the development of the global economy from 1750 to 1900.',
    kc: [['KC-5.1.II.A', 'Demand for raw materials and food created export economies specializing in natural resources, foodstuffs, and industrial crops; profits were used to purchase finished goods.']],
    cases: ['Cotton production in Egypt', 'Rubber extraction in the Amazon and Congo', 'Palm oil in West Africa', 'Guano, meat, and diamond export economies'],
    first10: ['Industrial factories needed inputs: cotton, rubber, palm oil, copper, guano, meat, and diamonds. Environmental location shaped which regions could supply them, but political power shaped who controlled the land and labor.', 'Specialization could bring ports, railways, and export revenue. It could also displace food production, intensify coerced labor, and leave local economies exposed when commodity prices fell or substitutes appeared.', 'The global economy was therefore both ecological and unequal. A resource’s climate and geology mattered, but so did the imperial institutions that moved profits toward merchants, companies, and industrial states.'],
    scenario: {
      file: 'the-rubber-quota.html', title: 'The Rubber Quota', date: 'Upper Congo basin, 1895',
      dilemma: 'A concession company demands more rubber from a river community. Decide how land, labor, and trade should be organized when global demand collides with local survival.',
      roles: ['River community elder', 'Rubber collection worker', 'Concession company agent', 'Regional trader and interpreter'],
      choices: ['Meet the quota by shifting more labor from food production', 'Negotiate a lower quota tied to harvest conditions', 'Build a regional refusal network and document abuses', 'Diversify trade and conceal rubber stands from company agents'],
      evidence: ['Industrial demand made rubber highly profitable before synthetic alternatives.', 'Export specialization could pull labor away from subsistence agriculture.', 'Concession systems joined environmental resources to coercive political power.', 'Commodity booms created infrastructure and wealth but distributed both unevenly.']
    }
  },
  {
    id: '6.5', slug: 'economic-imperialism', title: 'Economic Imperialism', theme: 'Economic Systems',
    lo: 'Explain how economic factors contributed to the development of the global economy from 1750 to 1900.',
    kc: [
      ['KC-5.2.I.E', 'Industrialized states and businesses practiced economic imperialism in Asia and Latin America.'],
      ['KC-5.1.II.C', 'Global commodity trade was organized to benefit merchants and companies in Europe and the United States.']
    ],
    cases: ['British and French pressure on China through the Opium Wars', 'British investment in the port of Buenos Aires', 'Cotton exports from South Asia and Egypt', 'Palm oil and copper commodity chains'],
    first10: ['Empire did not always require a flag. Loans, unequal treaties, foreign-owned railways, treaty ports, and control of customs revenue could limit a state’s choices without formal annexation.', 'After the Opium Wars, treaty provisions opened Chinese ports and constrained Qing tariff and legal authority. In Latin America, foreign firms financed and owned infrastructure that connected export zones to world markets.', 'Economic imperialism created real infrastructure and trade growth, but control over credit, shipping, prices, and profits often remained abroad. The key question is not whether exchange occurred, it is who set its terms.'],
    scenario: {
      file: 'the-customs-house-loan.html', title: 'The Customs House Loan', date: 'Buenos Aires, 1884',
      dilemma: 'Argentina needs capital to expand its port and rail links. A British-led syndicate offers financing in exchange for revenue guarantees and commercial privileges.',
      roles: ['Argentine finance minister', 'Provincial cattle exporter', 'Dockworker organizer', 'British banking representative'],
      choices: ['Accept the loan and revenue guarantees to build quickly', 'Renegotiate for local ownership and a shorter concession', 'Fund a smaller public project through domestic taxation', 'Approve the loan only with labor protections and transparent accounts'],
      evidence: ['Foreign capital financed railways and ports across Latin America.', 'Infrastructure often connected export regions to Atlantic markets rather than domestic markets.', 'Debt and customs guarantees could constrain state policy without annexation.', 'Export growth benefited some landowners and merchants while costs fell unevenly.']
    }
  },
  {
    id: '6.6', slug: 'causes-of-migration', title: 'Causes of Migration', theme: 'Humans and the Environment / Economic Systems',
    lo: 'Explain how environmental and economic factors contributed to varied patterns of migration from 1750 to 1900.',
    kc: [
      ['KC-5.4.I', 'Demographic changes challenged established living patterns.'],
      ['KC-5.4.I.B', 'New transportation encouraged internal, external, urban, and return migration.'],
      ['KC-5.4.II.A', 'Many migrants relocated freely in search of work.'],
      ['KC-5.4.II.B', 'Global capitalism relied on coerced and semicoerced migration, including enslavement, indenture, and convict labor.']
    ],
    cases: ['Irish and Italian migration to the Americas', 'Chinese and Indian indentured labor', 'Convict labor', 'Japanese agricultural workers and Lebanese merchant networks'],
    first10: ['Steamships and railroads lowered the cost and time of movement just as population growth, industrial labor demand, land pressure, and imperial networks widened the reasons to move.', 'Not all migrants possessed the same freedom. Some chose among difficult options; others signed restrictive indenture contracts; still others were transported through convict or slave systems. A contract can be legal without creating equal bargaining power.', 'Migration patterns included rural-to-urban movement, overseas settlement, seasonal circulation, and return migration. Causes must be explained through both push and pull factors, and through the institutions that shaped choice.'],
    scenario: {
      file: 'the-passage-contract.html', title: 'The Passage Contract', date: 'Calcutta emigration depot, 1870',
      dilemma: 'A recruiter offers a five-year indenture contract on a Caribbean sugar estate. Decide whether the promised passage and wages justify the restrictions and uncertainty.',
      roles: ['Prospective indentured worker', 'Family member responsible for household land', 'Colonial emigration agent', 'Returned migrant who completed a contract'],
      choices: ['Sign the contract and plan to return with savings', 'Refuse and seek work in a growing Indian city', 'Demand translated terms, wage guarantees, and return passage first', 'Organize a group contract to reduce recruiter power'],
      evidence: ['Indenture expanded after slavery was abolished in much of the British Empire.', 'Recruiters connected labor demand to people facing debt, land pressure, or limited work.', 'Contracts restricted mobility and were often poorly explained or coercively enforced.', 'Steamship routes made long-distance labor migration faster and more regular.']
    }
  },
  {
    id: '6.7', slug: 'effects-of-migration', title: 'Effects of Migration', theme: 'Social Interactions and Organization',
    lo: 'Explain how and why new patterns of migration affected society from 1750 to 1900.',
    kc: [
      ['KC-5.4.III.A', 'Because many migrants were male, women often took on new roles in home societies.'],
      ['KC-5.4.III.B', 'Migrants created ethnic enclaves and transplanted culture into new environments.'],
      ['KC-5.4.III.C', 'Migrants faced prejudice and states adopted restrictive policies.']
    ],
    cases: ['Chinese communities across the Pacific and Americas', 'Indian communities in Africa, the Caribbean, and Southeast Asia', 'Irish and Italian migration', 'The Chinese Exclusion Act and White Australia policy'],
    first10: ['Migrants did more than move labor. They built temples, churches, newspapers, mutual-aid societies, restaurants, schools, and remittance networks that connected home and destination communities.', 'Ethnic enclaves offered language, credit, housing, jobs, and protection. The same visibility could make migrants targets of racial theories, labor resentment, political violence, and exclusion laws.', 'Migration also changed households left behind. When streams were mostly male, women often managed farms, businesses, and family finances. Effects appeared on both ends of the route.'],
    scenario: {
      file: 'the-exclusion-hearing.html', title: 'The Exclusion Hearing', date: 'San Francisco, 1882',
      dilemma: 'Congress is considering a federal ban on Chinese labor migration. Prepare a recommendation amid labor conflict, racial violence, treaty obligations, and established communities.',
      roles: ['Chinese American merchant and family sponsor', 'White labor union delegate', 'Federal treaty and commerce adviser', 'Mission teacher serving an immigrant neighborhood'],
      choices: ['Reject exclusion and enforce equal protection under existing law', 'Adopt a temporary labor restriction while protecting residents and families', 'Use neutral labor standards that apply regardless of nationality', 'Support exclusion as a response to political and wage pressure'],
      evidence: ['Chinese migrants built durable communities and regional commercial networks.', 'Political organizers often blamed migrants for wage pressure during economic downturns.', 'The Chinese Exclusion Act of 1882 made nationality and race central to federal immigration restriction.', 'Exclusion separated families and reinforced violence even while Chinese labor remained economically important.']
    }
  },
  {
    id: '6.8', slug: 'causation-in-the-imperial-age', title: 'Causation in the Imperial Age', theme: 'Unit 6 Synthesis',
    lo: 'Explain the relative significance of the effects of imperialism from 1750 to 1900.',
    kc: [
      ['KC-5.1', 'Industrial capitalism expanded manufacturing, commodity demand, and uneven gains in standards of living.'],
      ['KC-5.2', 'Industrial states expanded empires and created new transoceanic relationships.'],
      ['KC-5.3', 'Revolution and rebellion contributed to new states and challenges to authority.'],
      ['KC-5.4', 'Empires and global capitalism changed the patterns and scale of migration.']
    ],
    cases: ['Economic extraction and infrastructure', 'State expansion and resistance', 'Migration and diaspora', 'Cultural justification and racial hierarchy'],
    first10: ['A strong causation argument does not list everything imperialism changed. It selects effects, defines criteria for significance, and weighs those effects across regions and time.', 'Economic integration built railways and ports while reorganizing production around exports. Political expansion weakened or replaced some sovereignties while provoking resistance and new identities. Migration formed diasporas while prompting racialized restrictions.', 'Relative significance depends on reasoning. An effect may be broad, durable, transformative, or foundational to other effects. Your job is to make that standard explicit and test evidence against it.'],
    scenario: null
  }
];

const scenario61 = {
  id: '6.1', file: 'the-mission-memorandum.html', title: 'The Mission Memorandum', date: 'London, 1890',
  dilemma: 'An imperial lobby asks your committee to endorse a proposed protectorate. Evaluate how “civilization,” conversion, nationalism, and racial hierarchy are being used to turn expansion into a moral claim.',
  roles: ['African Christian intellectual', 'Mission society secretary', 'Colonial Office official', 'Newspaper editor skeptical of expansion'],
  choices: ['Reject the memorandum because its ideology disguises conquest', 'Endorse missionary work but separate it from state expansion', 'Support a protectorate as a national and “civilizing” duty', 'Publish a counter-memorandum exposing the economic interests behind the rhetoric'],
  evidence: ['Social Darwinism misapplied biological competition to human societies and racial hierarchies.', 'Missionaries sometimes criticized abuses while their networks also enabled imperial access.', 'National rivalry encouraged states to treat overseas expansion as proof of strength.', 'The “civilizing mission” framed unequal rule as a benefit to conquered peoples.']
};

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content.replace(/\r?\n/g, '\n'), 'utf8');
}

function esc(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function jsObject(value) {
  return inspect(value, { depth: null, compact: false, breakLength: 110, maxArrayLength: null });
}

function imageFor(topic) {
  const files = {
    '6.2': 'Africa_map_1910.jpg', '6.3': 'Yaa_Asantewaa.jpg', '6.4': 'Rubber_tapping.jpg',
    '6.5': 'Buenos_Aires_Port.jpg', '6.6': 'Indian_indenture_ship.jpg',
    '6.7': 'Chinatown_San_Francisco_1880.jpg', '6.8': 'World_1898_empires_colonies_territory.png'
  };
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${files[topic.id]}`;
}

function buildLesson(topic) {
  const image = imageFor(topic);
  const concepts = topic.kc.map(([code, text]) => ({ code, theme: topic.theme, text, illustrativeExamples: topic.cases }));
  const evidenceItems = topic.cases.map((name, i) => ({
    title: name,
    detail: `${name} helps explain ${i % 2 ? 'how institutions and local choices shaped this global pattern' : 'how power and economic incentives turned a broad trend into a specific historical outcome'}. Use it to support a claim, then explain why the evidence proves the claim.`
  }));
  const lesson = {
    meta: {
      course: 'AP WORLD HISTORY', unit: 'Unit 6: Consequences of Industrialization', topic: `Topic ${topic.id}`,
      title: topic.title, subtitle: topic.lo, feedbackToolUrl: COACH_URL, canvasSubmissionNote: SUBMIT_NOTE
    },
    learningTargets: [
      { target: `I can ${topic.lo.charAt(0).toLowerCase()}${topic.lo.slice(1)}`, kc: topic.kc[0][0], theme: topic.theme },
      { target: `I can use specific evidence from ${topic.cases[0]} and ${topic.cases[1]} to support a defensible historical claim.`, kc: topic.kc[Math.min(1, topic.kc.length - 1)][0], theme: topic.theme },
      { target: `I can explain variation across regions instead of treating ${topic.title.toLowerCase()} as one uniform process.`, kc: topic.kc[topic.kc.length - 1][0], theme: topic.theme }
    ],
    successCriteria: [
      { criteria: `I accurately explain the relationship among ${topic.cases.slice(0, 3).join(', ')} and the topic learning objective.`, kc: topic.kc[0][0] },
      { criteria: 'I distinguish description from analysis by explaining how or why each piece of evidence supports my claim.', kc: 'AP Historical Reasoning' },
      { criteria: 'I qualify my argument with a meaningful regional difference, limitation, or counterexample.', kc: 'AP Argumentation' }
    ],
    collegeBoardKeyConcepts: concepts,
    stableImages: {
      map: image, first10: image, contentDelivery: image, beSurreal: image, skill: image,
      checkpoint1: image, evidence: image, source: image, beInTheRoom: image, checkpoint2: image
    },
    lecture: {
      title: `${topic.title}: Power, Process, and Consequence`,
      intro: `${topic.lo} This lesson connects institutional change to lived experience and asks you to compare processes rather than memorize a list.`,
      videos: [],
      segments: [
        { title: 'The historical mechanism', bullets: [
          `**Start with the process:** ${topic.kc[0][1]}`,
          `**Track power:** Ask who could make rules, mobilize labor, control land, or redirect trade, and how that power changed from 1750 to 1900.`,
          `**Anchor the pattern:** ${topic.cases[0]} and ${topic.cases[1]} show how a global development took different institutional forms.`
        ], image: { title: topic.title, caption: `A visual anchor for Topic ${topic.id}.`, url: image, sourceUrl: image } },
        { title: 'Comparison across regions', bullets: [
          `**Case one:** ${topic.cases[0]} reveals the role of policy, bargaining, and coercion.`,
          `**Case two:** ${topic.cases[1]} shows that similar pressures could produce a different balance of state, company, and community power.`,
          `**Comparison rule:** A meaningful comparison identifies a shared process and then explains why its form or result differed.`
        ], image: { title: 'Regional comparison', caption: `Compare ${topic.cases[0]} with ${topic.cases[1]}.`, url: image, sourceUrl: image } },
        { title: 'From evidence to AP argument', bullets: [
          `**Use a third case:** ${topic.cases[2]} can confirm, complicate, or limit your emerging claim.`,
          `**Name the mechanism:** Link evidence with because, therefore, while, or although; do not leave the relationship implied.`,
          `**Qualify the result:** ${topic.cases[3]} reminds us that global patterns were uneven and changed over time.`
        ], image: { title: 'Argumentation', caption: 'Evidence becomes analysis when its relationship to a claim is explained.', url: image, sourceUrl: image } }
      ]
    },
    map: {
      title: `Mapping ${topic.title}`, url: image, sourceUrl: image,
      caption: `Locate the regions connected to ${topic.cases.join(', ')}.`,
      intro: 'Geography shaped access to resources, markets, transport routes, and state power. Use the map to connect location to historical process.',
      prompt: `Which geographic relationship best helps explain ${topic.title.toLowerCase()}, and what evidence supports your answer?`,
      key: topic.cases.map((name) => ({ label: name, detail: `Use ${name} to connect a specific place to the topic learning objective.` }))
    },
    first10: {
      title: `First & 10: ${topic.title}`, embedUrl: `first-and-10-topic-${topic.id.replace('.', '-')}-${topic.slug}-capture.html`,
      note: 'Read the narrative, answer all three questions, build your feedback prompt, and return to the lesson path.'
    },
    evidenceLab: {
      title: `Evidence Lab: ${topic.title}`, intro: 'Select evidence for a defensible claim and explain its relevance.',
      task: 'Select one evidence card, explain what it reveals, and connect it to a defensible claim.',
      prompt: `Which evidence most strongly supports a claim answering this objective: ${topic.lo}`,
      items: evidenceItems
    },
    primarySource: {
      title: `Primary-Source Workshop: ${topic.title}`,
      intro: 'The passages below are concise classroom adaptations based on period policies, contracts, speeches, and reports. Analyze perspective and historical situation before using them as evidence.',
      text: [
        `Adapted period claim: Supporters described ${topic.title.toLowerCase()} as necessary for order, prosperity, security, or progress.`,
        `Adapted critical response: People affected by the policy argued that its costs and claimed benefits were distributed unequally.`,
        `Historical context: ${topic.cases[0]} and ${topic.cases[1]} provide concrete settings in which to test those competing claims.`
      ].join('<br><br>'),
      questions: ['Who benefits from the first claim, and how does that shape its language?', 'What historical evidence would corroborate or challenge the critical response?', 'How can the sources support a qualified answer to the learning objective?'],
      prompt: `Write one paragraph that uses a source claim and one specific historical example to answer: ${topic.lo}`
    },
    beSurreal: {
      title: `BeSurreal: The ${topic.title} Contradiction`, desc: 'Use an imaginative analogy to expose a historical contradiction.',
      intro: 'Surreal thinking is useful when it clarifies causation rather than replacing evidence.',
      detail: `Imagine a machine labeled “progress” whose gears are powered by the competing interests visible in ${topic.cases[0]} and ${topic.cases[1]}.`,
      text: `Imagine a machine labeled “progress” whose gears are powered by the competing interests visible in ${topic.cases[0]} and ${topic.cases[1]}.`,
      prompt: `Describe the machine, then explain in historically precise language what your analogy reveals about ${topic.title.toLowerCase()}.`
    },
    skillBuilder: {
      label: skillBuilderLabel(topic),
      title: `Building an AP claim about ${topic.title}`,
      intro: 'Move from evidence to reasoning in three deliberate steps.',
      steps: [
        { label: 'Make a claim', text: `Answer the objective directly: ${topic.lo}` },
        { label: 'Explain evidence', text: `Use ${topic.cases[0]} and ${topic.cases[1]}, explaining how each proves the claim.` },
        { label: 'Qualify', text: `Use ${topic.cases[2]} or ${topic.cases[3]} to identify variation, limitation, or a competing effect.` }
      ],
      prompt: `Write a defensible thesis that answers: ${topic.lo} Include a clear line of reasoning and a qualification.`
    },
    checkpoints: [
      checkpoint1(topic),
      {
        title: 'Checkpoint 2: Defend the Argument', subtitle: 'Check comparison, qualification, and significance.', cardDesc: 'Turn the full lesson into an AP-ready argument.',
        learningTargets: ['Defend a claim with evidence and reasoning.'], successCriteria: ['State criteria, weigh evidence, and qualify the conclusion.'],
        prompt: `Develop an argument in response to: ${topic.lo}`, responseType: 'Checkpoint 2', terms: topic.cases,
        focus: ['Defensible thesis', 'Two explained examples', 'Meaningful qualification']
      }
    ],
    beInTheRoom: topic.scenario ? {
      url: `../beintheroom/unit-6/${topic.scenario.file}`,
      desc: topic.scenario.dilemma
    } : {
      url: '', desc: 'Unit synthesis uses the full lesson evidence set instead of a separate simulation.'
    },
    images: evidenceItems.slice(0, 3).map((item) => ({
      title: item.title, url: image, sourceUrl: image, caption: item.detail,
      prompt: `How does ${item.title} support or complicate a claim about ${topic.title.toLowerCase()}?`
    }))
  };
  return lesson;
}

function dataFile(topic) {
  return `(() => {\n  const brandCss = '../assets/css/behistorical-brand-lock.css';\n  if (!document.querySelector(\`link[href="\${brandCss}"]\`)) {\n    const link = document.createElement('link'); link.rel = 'stylesheet'; link.href = brandCss; document.head.appendChild(link);\n  }\n})();\n\nwindow.BEHISTORICAL_LESSON = ${jsObject(buildLesson(topic))};\n`;
}

function rendererConfig(topic) {
  return `(() => {\n  const lesson = window.BEHISTORICAL_LESSON;\n  if (!lesson) return;\n  lesson.meta.canvasSubmissionNote = '${SUBMIT_NOTE}';\n  lesson.meta.feedbackToolUrl = '${COACH_URL}';\n})();\n`;
}

function first10Page(topic) {
  const f = F10_CONTENT[topic.id] || topic.f10;
  if (f) {
    return renderFirst10Page({
      unit: 6,
      topicId: topic.id,
      title: topic.title,
      subtitle: f.deck,
      learningObjective: topic.lo,
      skillTags: f.skillTags,
      supportCards: f.support,
      vocabulary: f.vocab,
      sections: f.sections,
      skills: f.questions.map((q) => q.skill),
      questions: f.questions,
      takeaway: f.takeaway,
      lessonHref: `lesson-${topic.id.replace('.', '-')}-${topic.slug}.html`,
      coachUrl: COACH_URL,
      submitNote: SUBMIT_NOTE
    });
  }
  const skills = ['Developments and Processes', 'Causation', 'Argumentation'];
  const questions = [
    'What historical process is introduced here, and what specific detail matters most?',
    'Explain one causal relationship in the reading using because, therefore, or although.',
    'How does the reading complicate or strengthen a defensible claim about the topic?'
  ];
  return renderFirst10Page({
    unit: 6,
    topicId: topic.id,
    title: topic.title,
    subtitle: 'Read closely for the historical mechanism, then test each claim with specific evidence and a meaningful qualification.',
    learningObjective: topic.lo,
    vocabulary: topic.cases,
    sections: topic.first10.map((text, index) => ({
      label: `Part ${index + 1}`,
      heading: topic.cases[index] || topic.title,
      text,
      skill: skills[index]
    })),
    skills,
    questions,
    takeaway: topic.first10[2],
    lessonHref: `lesson-${topic.id.replace('.', '-')}-${topic.slug}.html`,
    coachUrl: COACH_URL,
    submitNote: SUBMIT_NOTE
  });
}

function legacyFirst10Page(topic) {
  const skills = ['Developments and Processes', 'Causation', 'Argumentation'];
  const questions = [
    'What historical process is introduced here, and what specific detail matters most?',
    'Explain one causal relationship in the reading using because, therefore, or although.',
    'How does the reading complicate or strengthen a defensible claim about the topic?'
  ];
  const sections = topic.first10.map((text, i) => `<div class="section"><div class="section-number">0${i + 1}</div><div class="section-label">Part ${i + 1}</div><h2 class="section-heading">${esc(topic.cases[i])}</h2><p class="reading-text">${esc(text)}</p><div class="ap-callout"><p class="ap-callout-label">AP Thinking, ${skills[i]}</p><p>Be ready to connect this section to the Topic ${topic.id} learning objective with specific evidence.</p></div></div>`).join('\n');
  const questionItems = questions.map((question, i) => `<li class="question-item"><div class="question-prompt"><span class="q-num">Q${i + 1}</span><span class="q-skill">${skills[i]}</span><span class="q-text">${esc(question)}</span></div><textarea class="q-textarea" id="q${i + 1}" rows="5"></textarea></li>`).join('\n');
  const vocab = topic.cases.map((term) => `<span class="term-chip">${esc(term)}</span>`).join('');
  return `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>First &amp; 10 | Topic ${topic.id}</title><link rel="stylesheet" href="../assets/css/behistorical-brand-lock.css"><style>body{margin:0;background:#17243b;color:#17243b;font:16px/1.65 Georgia,serif}.module-header,.reading-title-band,.reading-body,.check-section,.builder-section,.page-footer-note,.module-footer{max-width:860px;margin:auto;padding:24px}.module-header{background:#10213b;color:#fff}.module-header a{color:#f0c56a}.module-badge,.section-label,.ap-callout-label,.q-skill{font:700 .72rem Montserrat,sans-serif;text-transform:uppercase;letter-spacing:.08em}.reading-title-band{background:#d8b463}.reading-title{font:800 2.25rem Montserrat,sans-serif;margin:.2rem 0}.reading-deck{font-style:italic}.skill-tags,.vocab-strip{display:flex;gap:8px;flex-wrap:wrap}.skill-tags span,.term-chip{background:#17243b;color:#fff;padding:4px 9px;border-radius:20px;font:600 .72rem Montserrat,sans-serif}.reading-body{background:#f4efe3}.support-strip{display:grid;grid-template-columns:1fr 1fr;gap:12px}.support-card,.section{background:#fff;padding:20px;margin:16px 0}.section{position:relative;border-left:6px solid #b68a37}.section-number{position:absolute;right:16px;top:4px;font:900 3rem Montserrat,sans-serif;color:#17243b12}.section-heading{font-family:Montserrat,sans-serif}.ap-callout{background:#e7edf4;padding:12px}.be-ready{background:#17243b;color:#fff;padding:16px}.check-section,.builder-section{background:#fff;border-top:1px solid #ccd2da}.question-list{list-style:none;padding:0}.question-item{margin:18px 0}.question-prompt{display:flex;gap:8px;align-items:flex-start;flex-wrap:wrap}.q-num{font-weight:bold;color:#8b5f16}.q-text{flex:1;min-width:260px}.q-textarea,.builder-output{width:100%;box-sizing:border-box;margin-top:8px;padding:12px;border:1px solid #8c94a0;border-radius:6px;min-height:110px}.tool-row button,.tool-row a{display:inline-block;padding:10px 14px;margin:5px;background:#10213b;color:#fff;border:0;border-radius:4px;text-decoration:none}.page-footer-note,.module-footer{background:#f4efe3;font-size:.9rem}.module-footer{display:flex;justify-content:space-between}.nav-btn{color:#17243b;font-weight:bold}@media(max-width:600px){.support-strip{grid-template-columns:1fr}}</style></head><body><header class="module-header"><span class="module-badge">Module 02</span><strong> First &amp; 10 Reading</strong><div>Topic ${topic.id} · AP World History</div></header><section class="reading-title-band"><div>FIRST &amp; 10 · UNIT 6</div><h1 class="reading-title"><em>${esc(topic.title)}</em></h1><p class="reading-deck">Read closely, answer all three checks, and turn your thinking into a feedback prompt.</p><div class="skill-tags">${skills.map((s) => `<span>${s}</span>`).join('')}</div></section><main class="reading-body"><div class="support-strip"><div class="support-card"><strong>Before You Read</strong><p>Look for a historical mechanism: who acts, what changes, and why?</p></div><div class="support-card"><strong>Reading Target</strong><p>${esc(topic.lo)}</p></div></div><div class="vocab-strip">${vocab}</div>${sections}<div class="be-ready"><h3>BeReady: 10-Second Takeaway</h3><p>${esc(topic.first10[2])}</p></div></main><section class="check-section"><h2>Check Your Thinking</h2><ul class="question-list">${questionItems}</ul></section><section class="builder-section"><h2 class="builder-heading">Build Your Google Form Response</h2><p class="builder-body">Compile your three answers, review them, and open the class response form.</p><div class="tool-row"><button type="button" onclick="buildGooglePrompt()">Build My Response</button><button type="button" onclick="submitToGoogleForm()">Submit to Google Form</button></div><textarea class="builder-output" id="google-output" readonly></textarea></section><section class="builder-section"><h2 class="builder-heading">Build Your AI Coach Prompt</h2><p class="builder-body">Ask the coach to pressure-test your evidence and reasoning without writing for you.</p><div class="tool-row"><button type="button" onclick="buildAiPrompt()">Build AI Prompt</button><button type="button" onclick="copyAiPrompt()">Copy Prompt</button><a href="${COACH_URL}" target="_blank" rel="noopener">Open MagicSchool</a></div><textarea class="builder-output" id="ai-output" readonly></textarea></section><p class="page-footer-note">${SUBMIT_NOTE}</p><footer class="module-footer"><a class="nav-btn" href="lesson-${topic.id.replace('.', '-')}-${topic.slug}.html">← Map &amp; Geography</a><span>Topic ${topic.id}</span><a class="nav-btn" href="lesson-${topic.id.replace('.', '-')}-${topic.slug}.html#lecture">Content Delivery →</a></footer><script src="../assets/js/behistorical-form-config.js"></script><script>var TOPIC_KEY='${topic.id}';var TOPIC_LABEL=(window.BH_FORM&&BH_FORM.topics[TOPIC_KEY])||'Topic ${topic.id}: ${esc(topic.title)}';function answers(){return[1,2,3].map(function(n){return(document.getElementById('q'+n)||{}).value||'';});}function buildGooglePrompt(){var out=''+TOPIC_LABEL+', First & 10\\n\\n'+answers().map(function(a,i){return'Q'+(i+1)+': '+a;}).join('\\n\\n');document.getElementById('google-output').value=out;return out;}function submitToGoogleForm(){var url=typeof buildFormURL==='function'?buildFormURL(TOPIC_KEY,'first10'):(window.BH_FORM&&BH_FORM.baseURL);if(!url){alert('Google Form URL is not configured.');return;}window.open(url,'_blank','noopener');}function buildAiPrompt(){var out='Coach my AP World historical reasoning for '+TOPIC_LABEL+'. Do not write my final answer. Ask one question at a time, check factual accuracy, and help me explain how evidence proves my claim.\\n\\nMy responses:\\n'+answers().join('\\n\\n');document.getElementById('ai-output').value=out;return out;}function copyAiPrompt(){var out=buildAiPrompt();navigator.clipboard&&navigator.clipboard.writeText(out);}document.addEventListener('DOMContentLoaded',function(){document.querySelectorAll('.q-textarea').forEach(function(el,i){if(!el.id)el.id='q'+(i+1);});});</script></body></html>\n`;
}

function capturePage(topic) {
  const src = `first-and-10-topic-${topic.id.replace('.', '-')}-${topic.slug}.html`;
  const formUrl = formContext.buildFormURL(topic.id, 'first10');
  return `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>First &amp; 10 Capture | ${topic.id}</title><style>html,body{margin:0;height:100%;background:#f4efe3}iframe{display:block;width:100%;height:100%;border:0}</style></head><body><iframe id="first10-frame" src="${src}" title="First &amp; 10 Topic ${topic.id}"></iframe><script>const PREFILLED_FIRST10_FORM='${formUrl}';document.getElementById('first10-frame').addEventListener('load',function(){try{var w=this.contentWindow;w.submitToGoogleForm=function(){w.open(PREFILLED_FIRST10_FORM,'_blank','noopener');};}catch(error){console.warn('Unable to wire First & 10 capture:',error);}});</script></body></html>\n`;
}

function lessonShell(topic) {
  const templatePath = path.join(UNIT, 'lesson-6-1-rationales-for-imperialism.html');
  let html = fs.readFileSync(templatePath, 'utf8');
  html = html.replace(/<title>BeHistorical \| AP World 6\.1<\/title>/, `<title>BeHistorical | AP World ${topic.id}</title>`);
  html = html.replace(/\.\.\/assets\/data\/lesson-6-1-rationales-for-imperialism\.js[^"']*/, `../assets/data/lesson-${topic.id.replace('.', '-')}-${topic.slug}.js`);
  html = html.replace(/\.\.\/assets\/data\/lesson-6-1-renderer-config\.js[^"']*/, `../assets/data/lesson-${topic.id.replace('.', '-')}-renderer-config.js`);
  return html;
}

function scenarioPage(s) {
  const payload = JSON.stringify(s).replace(/</g, '\\u003c');
  return `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>BeInTheRoom | ${esc(s.title)}</title><link rel="stylesheet" href="../../assets/css/behistorical-brand-lock.css"><style>:root{--ink:#13233c;--gold:#d4a84f;--paper:#f3ecdc}*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.55 Georgia,serif}header,main,footer{max-width:980px;margin:auto;padding:24px}header{background:var(--ink);color:#fff}h1,h2{font-family:Montserrat,sans-serif}.panel{background:#fff;padding:22px;margin:18px 0;border-top:5px solid var(--gold)}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}.choice{display:block;border:1px solid #8791a0;padding:14px;border-radius:6px;cursor:pointer}.choice:has(input:checked){outline:3px solid var(--gold)}textarea{width:100%;min-height:130px;padding:12px}button,a.button{display:inline-block;background:var(--ink);color:#fff;padding:10px 14px;border:0;border-radius:4px;text-decoration:none;margin:5px}.status{font-weight:bold;color:#76530f}</style></head><body><header><a href="../index.html" style="color:#f4cf7b">← BeInTheRoom hub</a><div>${esc(s.date)}</div><h1>${esc(s.title)}</h1><p>${esc(s.dilemma)}</p></header><main><section class="panel"><h2>1. Choose a role</h2><div class="grid" id="roles"></div></section><section class="panel"><h2>2. Review the evidence</h2><div id="evidence"></div></section><section class="panel"><h2>3. Make the decision</h2><div id="choices"></div></section><section class="panel"><h2>4. Defend it historically</h2><label for="argument">Write a claim, use two checked facts, and address one tradeoff.</label><textarea id="argument"></textarea><p><button onclick="saveWork()">Save locally</button><button onclick="buildCoachPrompt()">Build AI Coach prompt</button><a class="button" href="${COACH_URL}" target="_blank" rel="noopener">Open MagicSchool</a></p><div class="status" id="status"></div><textarea id="coach" readonly aria-label="AI Coach prompt"></textarea></section><section class="panel"><h2>AP Reflection</h2><p>How does this dilemma illuminate Topic ${esc(s.id)}? Explain how the available choices were constrained by institutions, power, and historical context.</p><textarea id="reflection"></textarea><p>${SUBMIT_NOTE}</p></section></main><footer>BeHistorical · BeInTheRoom</footer><script>var SCENARIO=${payload};var KEY='behistorical-room-'+SCENARIO.id;function render(){document.getElementById('roles').innerHTML=SCENARIO.roles.map(function(x,i){return'<label class="choice"><input type="radio" name="role" value="'+i+'"> '+x+'</label>';}).join('');document.getElementById('evidence').innerHTML=SCENARIO.evidence.map(function(x,i){return'<label class="choice"><input type="checkbox" name="fact" value="'+i+'"> '+x+'</label>';}).join('');document.getElementById('choices').innerHTML=SCENARIO.choices.map(function(x,i){return'<label class="choice"><input type="radio" name="decision" value="'+i+'"> '+x+'</label>';}).join('');var saved=JSON.parse(localStorage.getItem(KEY)||'null');if(saved){if(saved.role!=null)document.querySelector('[name=role][value="'+saved.role+'"]').checked=true;if(saved.decision!=null)document.querySelector('[name=decision][value="'+saved.decision+'"]').checked=true;(saved.facts||[]).forEach(function(v){document.querySelector('[name=fact][value="'+v+'"]').checked=true;});argument.value=saved.argument||'';reflection.value=saved.reflection||'';}}function state(){var r=document.querySelector('[name=role]:checked'),d=document.querySelector('[name=decision]:checked');return{role:r&&r.value,decision:d&&d.value,facts:Array.from(document.querySelectorAll('[name=fact]:checked')).map(function(x){return x.value;}),argument:argument.value,reflection:reflection.value};}function saveWork(){localStorage.setItem(KEY,JSON.stringify(state()));status.textContent='Saved on this device.';}function buildCoachPrompt(){var s=state(),role=s.role==null?'not chosen':SCENARIO.roles[s.role],decision=s.decision==null?'not chosen':SCENARIO.choices[s.decision],facts=s.facts.map(function(i){return SCENARIO.evidence[i];});coach.value='Act as an AP World History coach for Topic '+SCENARIO.id+'. I am playing '+role+'. My decision: '+decision+'. Evidence: '+facts.join(' | ')+'. My reasoning: '+s.argument+'. Ask one question at a time. Do not write my final response; help me test accuracy, sourcing, causation, and tradeoffs.';}document.addEventListener('DOMContentLoaded',render);</script></body></html>\n`;
}

function updateHub() {
  const file = path.join(UNIT, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  const hubTopics = [{ id: '6.1', slug: 'rationales-for-imperialism' }, ...topics];
  for (const topic of hubTopics) {
    const href = `lesson-${topic.id.replace('.', '-')}-${topic.slug}.html`;
    const marker = `<div class="unit-num">TOPIC ${topic.id}</div>`;
    const pos = html.indexOf(marker);
    if (pos < 0) throw new Error(`Unit hub marker not found: ${topic.id}`);
    const anchor = html.lastIndexOf('<a class="unit-card" href="', pos);
    const hrefStart = html.indexOf('href="', anchor) + 6;
    const hrefEnd = html.indexOf('"', hrefStart);
    html = html.slice(0, hrefStart) + href + html.slice(hrefEnd);
  }
  write(file, html);
}

fs.mkdirSync(ROOM, { recursive: true });
for (const topic of topics) {
  const stem = `lesson-${topic.id.replace('.', '-')}-${topic.slug}`;
  write(path.join(DATA, `${stem}.js`), dataFile(topic));
  write(path.join(DATA, `lesson-${topic.id.replace('.', '-')}-renderer-config.js`), rendererConfig(topic));
  write(path.join(UNIT, `${stem}.html`), lessonShell(topic));
  write(path.join(UNIT, `first-and-10-topic-${topic.id.replace('.', '-')}-${topic.slug}.html`), first10Page(topic));
  write(path.join(UNIT, `first-and-10-topic-${topic.id.replace('.', '-')}-${topic.slug}-capture.html`), capturePage(topic));
  if (topic.scenario) write(path.join(ROOM, topic.scenario.file), scenarioPage({ id: topic.id, ...topic.scenario }));
}
write(path.join(ROOM, scenario61.file), scenarioPage(scenario61));

// Recovered Topic 6.1 already has rich lesson data and First & 10 content; wire its scenario and current submission language.
write(path.join(DATA, 'lesson-6-1-renderer-config.js'), `(() => {\n  const lesson = window.BEHISTORICAL_LESSON;\n  if (!lesson) return;\n  lesson.meta.canvasSubmissionNote = '${SUBMIT_NOTE}';\n  lesson.meta.feedbackToolUrl = '${COACH_URL}';\n  lesson.beInTheRoom = {\n    url: '../beintheroom/unit-6/${scenario61.file}',\n    desc: '${scenario61.dilemma.replace(/'/g, "\\'")}'\n  };\n})();\n`);

updateHub();
console.log('Built Unit 6 Topics 6.2–6.8, wired Topic 6.1, and generated seven BeInTheRoom scenarios.');
