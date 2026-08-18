#!/usr/bin/env node
'use strict';

/**
 * Deterministically builds the BeHistorical Unit 6 lesson stacks.
 * Source alignment: AP World History: Modern CED, effective Fall 2026.
 * Run from the repository root with: node scripts/build-unit6.js
 */

const fs = require('fs');
const path = require('path');
const { captureWrapper } = require('./lib/first10-capture-wrapper');
const { inspect } = require('util');
const vm = require('vm');
const { renderFirst10Page } = require('./lib/first10-page');
const { loadCourse } = require('./lib/socrates-course');

// The reading's AI Coach prompt carries the same assignment context a checkpoint's
// does, read from the lesson data so the two cannot disagree about what Socrates
// is told. See docs/socrates/socrates-paste-contract.md.
const COURSE = new Map(loadCourse().topics.map(t => [t.id, t]));

function coachContextFor(topicId) {
  const t = COURSE.get(String(topicId).replace(/^Topic\s+/i, '').trim());
  if (!t) return undefined;
  return {
    topic: t.id,
    module: 'First & 10 Reflection',
    title: t.title,
    span: t.span,
    focus: t.period,
    targets: t.targets,
    criteria: t.criteria,
    kcs: t.kcs.map(k => ({ code: k.code, text: k.text })),
    terms: t.terms
  };
}
const F10_CONTENT = require('./lib/f10-content');

const ROOT = path.resolve(__dirname, '..');
const UNIT = path.join(ROOT, 'unit-6');
const DATA = path.join(ROOT, 'assets', 'data');
const ROOM = path.join(ROOT, 'beintheroom', 'unit-6');
const COACH_URL = 'https://student.magicschool.ai/s/login?joinCode=czwb9Q';
const SUBMIT_NOTE = 'Organize your thinking here, submit your final work in Canvas.';

/**
 * The optional deep reading offered under Content Delivery, keyed by topic id.
 *
 * Only the title and the description live here, because only they are editorial.
 * The filename is derived from the topic's own id and slug, for the same reason
 * the lesson link inside the eBook is derived: a declared path is a second place
 * to state where a page lives, and the two can then disagree. The chapter itself
 * is scripts/lib/deep-reading-content/topic-6-N.js, and validate.js checks the
 * pairing in both directions, so a topic listed here with no content module, or
 * a content module no topic points at, fails the push.
 *
 * A topic absent from this map simply shows no deep-reading card, which is how
 * the feature stays optional.
 */
const DEEP_READINGS = {
  '6.2': {
    title: 'What Conquest Started to Cost',
    desc: 'A textbook-depth companion on what the Berlin Conference actually decided and why a rule about effective occupation started a race, how quinine, steamers, breech-loaders and locally raised taxes collapsed the price of conquest, why the Congo Free State differed in kind rather than degree from a normal colony, how direct rule, indirect rule and settler colonization were chosen by cost, and why Japan, Russia and the United States built empires with the same package. Optional, and useful when a checkpoint asks you to compare processes rather than list annexations.'
  },
  '6.3': {
    title: 'Five Kinds of No',
    desc: 'A textbook-depth companion on the five distinct strategies the word resistance covers and what decided which one a people could use, why the greased cartridge is the trigger of 1857 and not its cause, how a rebellion that failed rebuilt the state that defeated it, what the Golden Stool and Samory Toure&rsquo;s gunsmiths had in common, why one prophetic movement destroyed a nation and another founded a state, and what Adwa explains about every defeat elsewhere. Optional, and useful when a checkpoint asks for a meaningful regional difference.'
  },
  '6.4': {
    title: 'One Crop, and What It Costs',
    desc: 'A textbook-depth companion on what an export economy does to a place beyond its fields, the dated chain from Egyptian cotton to a foreign debt commission to the occupation of 1882, why a crop that grows wild produces a coercive labor system and why seventy thousand seeds in a London greenhouse ended the Amazon boom, the West African case where producers owned the trees, and how four ownership structures produced four different countries. Optional, and useful when a checkpoint asks how environmental factors shaped the global economy.'
  },
  '6.5': {
    title: 'Control Without a Flag',
    desc: 'A textbook-depth companion on how to detect an empire that appears on no map, why the lasting damage of the Opium War settlement was the fixed tariff and the most-favored-nation clause rather than Hong Kong, how Argentina became economically dependent with no conquest, no treaty and a willing local elite, what a tariff written by your competitor does to an industry, and why Japan had the same unequal treaties and a different century. Optional, and useful when a checkpoint asks you to explain economic factors rather than name them.'
  },
  '6.6': {
    title: 'Why People Could Go',
    desc: 'A textbook-depth companion on the four things that had to be true at once before a reason to leave became a journey, why the same steamships that carried migrants out carried the grain that ruined their farms, how land tenure and relief policy rather than a plant disease set the death toll in Ireland, the single clause that separates indenture from both slavery and free labor, and why the largest migrations of the age left almost no statistical trace. Optional, and useful when a checkpoint asks why migration patterns varied.'
  },
  '6.7': {
    title: 'Two Societies, Both Changed',
    desc: 'A textbook-depth companion on what a male-selective migration did to the villages it emptied, why an ethnic enclave is a set of institutions rather than a neighborhood and why exclusion builds one as surely as preference does, how the dictation test let three countries exclude by race with no racial word in the statute, and how labor recruitment composed plural societies whose administrative categories became their political ones. Optional, and useful when a checkpoint asks how migration affected society at both ends.'
  },
  '6.8': {
    title: 'Which One Mattered Most',
    desc: 'A textbook-depth companion on how to weigh one effect of imperialism against another: the four effects stated as mechanisms so they can be compared, four tests of significance that rank them in different orders, the causes sorted into necessary, permissive and accelerating, the argument historians actually have about Hobson and Lenin and the investment data that complicates it, and a full thesis written out with its evidence structure. Optional, and the one to read before an argument essay.'
  }
};

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

/**
 * `--check` compares instead of writing, and exits 1 on any difference.
 *
 * Every file this script produces is generated, so a hand-edit to one is the
 * worst kind of change: it looks like it worked, and the next rebuild silently
 * reverts it. Intercepting the single write helper covers the readings, the
 * lesson data, the shells and the rooms in one place, and lets
 * scripts/test/readings-reproducible.test.js gate this unit the same way it
 * gates the others.
 */
const CHECK_ONLY = process.argv.includes('--check');
const DRIFTED = [];

if (CHECK_ONLY) {
  process.on('exit', (code) => {
    if (code) return;
    if (DRIFTED.length) {
      console.error(`${DRIFTED.length} generated file(s) differ from what this script produces:`);
      for (const d of DRIFTED) console.error(`  ${d}`);
      console.error('\nEdit the source, then rerun this script without --check.');
      process.exitCode = 1;
      return;
    }
    console.log('all generated files match this script');
  });
}

function write(file, content) {
  const normalized = content.replace(/\r?\n/g, '\n');
  if (CHECK_ONLY) {
    const onDisk = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
    if (onDisk !== normalized) DRIFTED.push(require('path').relative(process.cwd(), file));
    return;
  }
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content.replace(/\r?\n/g, '\n'), 'utf8');
}

function esc(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function jsObject(value) {
  return inspect(value, { depth: null, compact: false, breakLength: 110, maxArrayLength: null });
}

// Media contract for Unit 6.
//
// Every topic used to point all ten module slots, all three lecture cards, and
// all three evidence cards at one picture, which meant a photograph of a rubber
// tapper captioned as a map of Egyptian cotton. Now each topic declares:
//   map      the Map & Geography image (a local instructional map, or a real map)
//   photo    the one period photograph the topic legitimately owns
//   onCard   which lecture card the photograph belongs on (0 = none)
//   onEvidence  which Evidence Lab item the photograph actually depicts (0 = none)
// Any slot the photograph does not belong in renders the generated per-slot
// artwork for that topic, which is always on-topic and can never 404.
const commons = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${file}`;
const commonsSource = (file) => `https://commons.wikimedia.org/wiki/File:${file}`;
const instructionalMap = (id) => `../assets/images/instructional-maps/topic-${id.replace('.', '-')}.svg`;
const moduleArt = (id, slot) => `../assets/images/module-art/unit-6/topic-${id.replace('.', '-')}/${slot}.svg`;
const TOPIC_ART = '';

const MEDIA = {
  '6.2': {
    // A 1910 map of Africa cannot answer a map question about state expansion in
    // Japan, Russia, and the United States, so this topic gets its own map.
    map: instructionalMap('6.2'),
    photo: 'Map_of_Colonial_Africa_in_1913.png', onCard: 1, onEvidence: 0,
    photoTitle: 'Africa after the partition, 1910',
    photoCaption: 'Twenty-five years after the Berlin Conference, almost the whole continent is drawn into European colonies. Compare the pace of this with expansion elsewhere.'
  },
  '6.3': {
    map: instructionalMap('6.3'),
    photo: null, onCard: 0, onEvidence: 0,
    photoTitle: 'Yaa Asantewaa, c. 1900',
    photoCaption: 'Yaa Asantewaa led Asante resistance in the War of the Golden Stool. Indigenous responses to expansion included organized armed defence, not only accommodation.'
  },
  '6.4': {
    map: instructionalMap('6.4'),
    photo: 'Rubber_tapping.jpg', onCard: 1, onEvidence: 2,
    photoTitle: 'Tapping rubber',
    photoCaption: 'Industrial demand for rubber reorganized whole regions around a single export crop, in the Amazon and in the Congo.'
  },
  '6.5': {
    map: instructionalMap('6.5'),
    photo: 'Port_of_Buenos_Aires.jpg', onCard: 1, onEvidence: 2,
    photoTitle: 'The port of Buenos Aires',
    photoCaption: 'British capital financed Argentina\'s docks and railways. Economic imperialism could direct an economy without formal colonial rule.'
  },
  '6.6': {
    map: instructionalMap('6.6'),
    photo: null, onCard: 0, onEvidence: 0,
    photoTitle: 'An indenture ship carrying Indian laborers',
    photoCaption: 'After abolition, plantations recruited indentured workers from India and China under contracts that limited pay, movement, and return.'
  },
  '6.7': {
    map: instructionalMap('6.7'),
    photo: 'A_Holiday_in_Chinatown%2C_San_Francisco_%28P._Frenzeny%2C_Harper%27s%2C_1880-03-20%29.jpg', onCard: 1, onEvidence: 1,
    photoTitle: 'Chinatown, San Francisco, 1880',
    photoCaption: 'Migration produced lasting diaspora communities, and a backlash: the United States barred Chinese labor migration in 1882.'
  },
  '6.8': {
    map: commons('World_1898_empires_colonies_territory.png'),
    mapSource: commonsSource('World_1898_empires_colonies_territory.png'),
    photo: null, onCard: 0, onEvidence: 0
  }
};

function mediaFor(topic) {
  const media = MEDIA[topic.id];
  if (!media) throw new Error(`no media contract for Topic ${topic.id}`);
  return media;
}

function cardImage(topic, index) {
  const media = mediaFor(topic);
  if (media.photo && media.onCard === index) {
    return { url: commons(media.photo), sourceUrl: commonsSource(media.photo), title: media.photoTitle, caption: media.photoCaption };
  }
  return { url: TOPIC_ART, sourceUrl: TOPIC_ART, title: null, caption: null };
}

function evidenceImage(topic, index) {
  const media = mediaFor(topic);
  if (media.photo && media.onEvidence === index) {
    return { url: commons(media.photo), sourceUrl: commonsSource(media.photo) };
  }
  return { url: TOPIC_ART, sourceUrl: TOPIC_ART };
}

function buildLesson(topic) {
  const media = mediaFor(topic);
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
      map: moduleArt(topic.id, 'map'), first10: moduleArt(topic.id, 'first10'),
      contentDelivery: moduleArt(topic.id, 'contentdelivery'), beSurreal: moduleArt(topic.id, 'besurreal'),
      skill: moduleArt(topic.id, 'skill'), checkpoint1: moduleArt(topic.id, 'checkpoint1'),
      evidence: moduleArt(topic.id, 'evidence'), source: moduleArt(topic.id, 'source'),
      beInTheRoom: moduleArt(topic.id, 'beintheroom'), checkpoint2: moduleArt(topic.id, 'checkpoint2')
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
        ], image: { title: cardImage(topic, 1).title || topic.title, caption: cardImage(topic, 1).caption || `The mechanism behind Topic ${topic.id}, drawn as BeHistorical topic artwork.`, url: cardImage(topic, 1).url, sourceUrl: cardImage(topic, 1).sourceUrl } },
        { title: 'Comparison across regions', bullets: [
          `**Case one:** ${topic.cases[0]} reveals the role of policy, bargaining, and coercion.`,
          `**Case two:** ${topic.cases[1]} shows that similar pressures could produce a different balance of state, company, and community power.`,
          `**Comparison rule:** A meaningful comparison identifies a shared process and then explains why its form or result differed.`
        ], image: { title: cardImage(topic, 2).title || 'Regional comparison', caption: cardImage(topic, 2).caption || `Compare ${topic.cases[0]} with ${topic.cases[1]}.`, url: cardImage(topic, 2).url, sourceUrl: cardImage(topic, 2).sourceUrl } },
        { title: 'From evidence to AP argument', bullets: [
          `**Use a third case:** ${topic.cases[2]} can confirm, complicate, or limit your emerging claim.`,
          `**Name the mechanism:** Link evidence with because, therefore, while, or although; do not leave the relationship implied.`,
          `**Qualify the result:** ${topic.cases[3]} reminds us that global patterns were uneven and changed over time.`
        ], image: { title: cardImage(topic, 3).title || 'Argumentation', caption: cardImage(topic, 3).caption || 'Evidence becomes analysis when its relationship to a claim is explained.', url: cardImage(topic, 3).url, sourceUrl: cardImage(topic, 3).sourceUrl } }
      ]
    },
    map: {
      title: `Mapping ${topic.title}`, url: media.map, sourceUrl: media.mapSource || media.map,
      caption: `Locate the regions connected to ${topic.cases.join(', ')}.`,
      intro: 'Geography shaped access to resources, markets, transport routes, and state power. Use the map to connect location to historical process.',
      prompt: `Which geographic relationship best helps explain ${topic.title.toLowerCase()}, and what evidence supports your answer?`,
      key: topic.cases.map((name) => ({ label: name, detail: `Use ${name} to connect a specific place to the topic learning objective.` }))
    },
    ...(DEEP_READINGS[topic.id] ? {
      deepReading: {
        title: DEEP_READINGS[topic.id].title,
        desc: DEEP_READINGS[topic.id].desc,
        url: `deep-reading-topic-${topic.id.replace('.', '-')}-${topic.slug}.html`
      }
    } : {}),
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
      label: topic.id === '6.8' ? 'Causation practice' : 'Comparison and causation practice',
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
      {
        title: 'Checkpoint 1: Explain the Process', subtitle: 'Check core content and causal mechanism.', cardDesc: `Use ${topic.cases[0]} and ${topic.cases[1]}.`,
        learningTargets: [`Explain the process behind ${topic.title.toLowerCase()}.`], successCriteria: ['Use two accurate examples and connect each to the claim.'],
        prompt: `Explain how ${topic.cases[0]} and ${topic.cases[1]} illustrate the learning objective.`, responseType: 'Checkpoint 1',
        terms: topic.cases, focus: ['Answer the objective', 'Use specific evidence', 'Explain the relationship']
      },
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
    images: evidenceItems.slice(0, 3).map((item, i) => ({
      title: item.title, url: evidenceImage(topic, i + 1).url, sourceUrl: evidenceImage(topic, i + 1).sourceUrl, caption: item.detail,
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
    coachContext: coachContextFor(topic.id),
      coachContext: coachContextFor(topic.id),
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
    coachContext: coachContextFor(topic.id),
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


function capturePage(topic) {
  const src = `first-and-10-topic-${topic.id.replace('.', '-')}-${topic.slug}.html`;
  return captureWrapper(src, `First &amp; 10 Capture | Topic ${topic.id}`);
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
