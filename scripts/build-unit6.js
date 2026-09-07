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
const { alignTopicConcepts } = require('./lib/ced-2026-key-concepts');

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
// Module 07 evidence pools for Unit 6, declared here for the same reason
// DEEP_READINGS is: this script writes every Unit 6 renderer config, including
// Topic 6.1's, so a hand edit to one survives exactly until the next rebuild.
// One authored pool per topic, every card a picture or declared text evidence.
// See the authenticity gate in docs/module-07-scaffolding-standard.md.
// Parentheses are the CSS url() delimiter itself, so an unescaped one in a
// filename breaks it; validate.js fails the push over exactly this. Every
// other Commons filename in this file has none, so this is a no-op for them.
const escapeParens = name => name.replace(/\(/g, '%28').replace(/\)/g, '%29');
const COMMONS = name => `https://commons.wikimedia.org/wiki/Special:FilePath/${escapeParens(name)}`;
const COMMONS_PAGE = name => `https://commons.wikimedia.org/wiki/File:${escapeParens(name)}`;
const picture = (name, title, caption, prompt) => ({ title, url: COMMONS(name), sourceUrl: COMMONS_PAGE(name), caption, prompt });
const localMap = (file, title, caption, prompt) => ({ title, url: `../assets/images/instructional-maps/${file}`, sourceUrl: `../assets/images/instructional-maps/${file}`, caption, prompt });

// Unit 6 sits at "guided independence" in the progressive-release scale, so the
// task still names the moves. Units 7 to 9 drop the procedural wording.
const MODULE07_TASK = 'Choose at least two evidence cards. Decide which historical claim each card is most useful for, name one precise detail from each rather than summarizing it, explain the inference that carries the detail to the claim, and identify one limitation or missing piece of evidence. The caption identifies the object; it does not supply your conclusion.';

const MODULE07_EVIDENCE = {
  '6.1': {
    prompt: 'Build a claim about why Europeans and others justified imperial expansion after 1750. Use at least two cards, distinguish a stated justification from an underlying cause, and explain how you can tell them apart.',
    cards: [
      picture('Punch_Rhodes_Colossus.png', 'The Rhodes Colossus',
        'Cartoon published in the British magazine Punch, 1892, showing Cecil Rhodes astride Africa. Commentary made for a British readership.',
        'NOTICE what the cartoonist exaggerates and what sits outside the frame. INFER what British readers were expected to find plausible. Is a cartoon evidence of what people believed, or of what a magazine thought would sell?'),
      picture('Kongokonferenz.jpg', 'The Berlin Conference, 1884 to 1885',
        'Contemporary depiction of the conference at which European powers set rules for claims in Africa. No African state was represented.',
        'NOTICE who is in the room. INFER, from who is absent, what the conference assumed about the territory being divided. What does a picture of a meeting not tell you about what happened on the ground afterward?'),
      localMap('topic-6-1.svg', 'Imperial claims after 1870',
        'BeHistorical reference map. Secondary geographic reconstruction of imperial holdings and claims.',
        'NOTICE how much of the map is claimed and by how few states. INFER what that leaves for a latecomer. How does scarcity of unclaimed land help explain the timing of the scramble?'),
      { title: 'Rhodes on race and empire',
        label: 'Primary-source excerpt · Cecil Rhodes, 1877',
        sourceText: [
          '“We are the finest race in the world.”',
          'Expansion is framed as a racial and national mission.'
        ],
        caption: 'Written by one of the men who did the expanding, in a private confession of faith rather than a public speech.',
        prompt: 'What kind of justification is this: economic, strategic, or ideological? What would you need to show that the belief caused the expansion rather than decorating it?' },
      { title: 'Kipling and imperial duty',
        label: 'Primary-source excerpt · “The White Man’s Burden,” 1899',
        sourceText: [
          '“Take up the White Man’s burden…”',
          'Rule is presented as sacrifice and obligation rather than gain.'
        ],
        caption: 'A poem addressed to the United States on its acquisition of the Philippines, urging it to take up empire.',
        prompt: 'How does presenting rule as a burden change what the argument has to answer for? Set it beside the Rhodes card: are these the same justification or two different ones?' },
      { title: 'The Berlin Act and effective occupation',
        label: 'Diplomatic record · General Act of the Berlin Conference, 1885',
        sourceText: [
          'European powers set rules for claims and for navigation.',
          '“Effective occupation” rewarded actual control on the ground.',
          'A claim on paper was not enough to hold territory.'
        ],
        caption: 'The rule that turned mapmaking into occupation: to keep a claim, a power had to administer it.',
        prompt: 'What behaviour does a rule like this encourage? Use it to explain the pace of conquest after 1885, and say what other evidence you would need.' }
    ]
  },
  '6.2': {
    prompt: 'Make a claim about how states expanded their power after 1750. Use at least two cards from different mechanisms, and explain what each mechanism required that the others did not.',
    cards: [
      picture('Kongokonferenz.jpg', 'The Berlin Conference, 1884 to 1885',
        'Contemporary depiction of the conference at which European powers agreed rules for claiming African territory.',
        'NOTICE that this is a negotiation between claimants. INFER what kind of expansion begins in a conference room rather than on a battlefield. What does the image not show about how the claims were enforced?'),
      localMap('topic-6-2.svg', 'State expansion after 1750',
        'BeHistorical reference map. Secondary geographic reconstruction of the expansions this topic studies.',
        'NOTICE which expansions are contiguous with the expanding state and which are overseas. INFER what difference that makes to how a territory is governed. What does the map not show about local collaboration or resistance?'),
      { title: 'The British Raj replaces company rule',
        label: 'Administrative record · India, 1858',
        sourceText: [
          'After the 1857 rebellion, rule transferred from the',
          'East India Company to the Crown.',
          'A company empire became a directly governed one.'
        ],
        caption: 'A change of ruler without a change of ruled: the same territory, administered by a state instead of a corporation.',
        prompt: 'What does this transfer suggest about the limits of governing through a company? Which other card shows a power making the opposite choice?' },
      { title: 'The Congo Free State',
        label: 'Sovereignty record · 1885 to 1908',
        sourceText: [
          'Leopold II held the Congo as a personal domain,',
          'not as a Belgian colony.',
          'Belgium annexed it as a formal colony in 1908.'
        ],
        caption: 'Territory held by a monarch in a private capacity, and then taken over by his own country after reports of atrocity.',
        prompt: 'What does private ownership of a territory change about accountability? Note the 1908 date: what does the annexation itself tell you?' },
      { title: 'Japan takes Taiwan',
        label: 'Treaty record · Treaty of Shimonoseki, 1895',
        sourceText: [
          'Qing China ceded Taiwan after defeat in war.',
          'Japan joined the ranks of overseas imperial powers.'
        ],
        caption: 'An Asian state acquiring an overseas colony from another Asian state, by treaty after a war.',
        prompt: 'How does this card complicate a claim that imperialism was European? What would you need to show that Japanese rule worked like, or unlike, European rule?' },
      { title: 'The United States annexes Hawai‘i',
        label: 'Legal and political record · 1893 and 1898',
        sourceText: [
          'The Hawaiian monarchy was overthrown in 1893',
          'by settlers and business interests with U.S. support.',
          'The United States formally annexed the islands in 1898.'
        ],
        caption: 'Five years between the overthrow and the annexation, which is itself part of the evidence.',
        prompt: 'What does the gap between 1893 and 1898 suggest about how this expansion was justified at home? Compare the mechanism here with the treaty in the Taiwan card.' }
    ]
  },
  '6.3': {
    prompt: 'Explain why some resistance to imperial expansion succeeded and most did not. Use at least two cards, name the conditions each case had, and avoid concluding that resistance was either futile or uniform.',
    cards: [
      { title: 'Yaa Asantewaa and the Golden Stool',
        label: 'Colonial record \u00b7 War of the Golden Stool, 1900 to 1901',
        sourceText: [
          'Yaa Asantewaa, queen mother of Ejisu, led Asante forces against British demands to surrender the Golden Stool.',
          'The uprising was defeated; she was captured and exiled to the Seychelles in 1901, where she died in 1921.'
        ],
        caption: 'No verified photograph of Yaa Asantewaa herself could be sourced from Commons; this record states the outcome rather than showing the person.',
        prompt: 'NOTICE the outcome: defeat and exile, not negotiation. INFER what that outcome suggests about how the British treated this uprising compared with other responses to expansion in this unit. What would a photograph add here that a record of dates cannot?' },
      localMap('topic-6-3.svg', 'Resistance to state expansion',
        'BeHistorical reference map. Secondary geographic reconstruction locating the major resistance movements of this period.',
        'NOTICE where sustained resistance occurred. INFER what those places might have had in common. What does location alone fail to explain about success or defeat?'),
      { title: 'The Indian Rebellion of 1857',
        label: 'Rebellion record · South Asia, 1857 to 1858',
        sourceText: [
          'A cartridge controversy helped trigger mutiny among sepoys.',
          'Grievances included annexation, pay, land and religion.',
          'The rebellion was defeated and rule passed to the Crown.'
        ],
        caption: 'A rebellion inside the imperial army itself, defeated, and followed by a reorganization of the empire that faced it.',
        prompt: 'Was this a failure? Use the outcome to argue both ways, then say which reading the evidence better supports.' },
      { title: 'Ethiopia at Adwa',
        label: 'Battle record · 1 March 1896',
        sourceText: [
          'Ethiopian forces defeated an invading Italian army.',
          'Menelik II combined diplomacy, imported modern weapons',
          'and mass mobilization.'
        ],
        caption: 'The one decisive defeat of a European invasion in this period, and the three things the victor had assembled first.',
        prompt: 'Which of the three factors named here do the other cards lack? Build a claim about the conditions for successful resistance and name what would disprove it.' },
      { title: 'Samory Touré’s resistance',
        label: 'Military and political record · West Africa, 1880s to 1898',
        sourceText: [
          'Samory built a mobile state and acquired modern firearms.',
          'He resisted French forces for well over a decade.',
          'French forces eventually defeated and captured him.'
        ],
        caption: 'Sustained, organized, modern-armed resistance that still ended in defeat, which is what makes it useful beside Adwa.',
        prompt: 'Samory had weapons and organization and still lost. What does that do to a simple technology explanation? What was different at Adwa?' },
      { title: 'The Mahdist state in Sudan',
        label: 'Religious and political resistance · 1881 to 1898',
        sourceText: [
          'A religiously framed revolt defeated Egyptian and British forces',
          'and governed a state for over a decade.',
          'Anglo-Egyptian armies reconquered Sudan in 1898.'
        ],
        caption: 'Resistance that became a functioning state before it was destroyed, seventeen years later.',
        prompt: 'What does the length of this case add that a single battle cannot? Compare the basis of authority here with the Asante and Ethiopian cases.' }
    ]
  },
  '6.4': {
    prompt: 'Build a claim about how industrial demand reshaped economies outside the industrial core. Use at least two commodities, name the mechanism in each, and identify who captured the value.',
    cards: [
      picture('Rubber_tapping.jpg', 'Rubber tapping',
        'Photograph of latex being tapped from a rubber tree. The technique is simple; the demand behind it was industrial.',
        'NOTICE what the work itself involves. INFER what determines how much a tapper can produce in a day, and what a quota would therefore require. What does the photograph not show about who set the quota?'),
      localMap('topic-6-4.svg', 'Commodity production and export routes',
        'BeHistorical reference map. Secondary geographic reconstruction of major export commodities and the routes carrying them.',
        'NOTICE which direction the routes run and what they connect. INFER what an economy organized around one export is exposed to. What does a route map not show about prices?'),
      { title: 'The Egyptian cotton boom',
        label: 'Commodity record · Egypt, 1860s',
        sourceText: [
          'Disruption from the U.S. Civil War raised demand for Egyptian cotton.',
          'Expansion tied growers and the state more tightly to foreign markets and credit.'
        ],
        caption: 'A boom caused by a war on another continent, and the debt that followed it.',
        prompt: 'What happens to this economy when the American supply returns? Use the card to explain a vulnerability rather than a benefit.' },
      { title: 'Congo rubber quotas',
        label: 'Labor and commodity record · 1890s to 1900s',
        sourceText: [
          'Rubber demand produced coercive collection quotas.',
          'Concession companies used violence to enforce output.'
        ],
        caption: 'The point at which a commodity boom becomes a labor system enforced by force.',
        prompt: 'Set this beside the tapping photograph. What does the record tell you that the image cannot, and what does the image tell you that the record cannot?' },
      { title: 'Peruvian guano exports',
        label: 'Commodity record · mid-nineteenth century',
        sourceText: [
          'Guano fertilizer became a major export.',
          'State revenue became unusually dependent on one resource.'
        ],
        caption: 'A case outside Africa and Asia, and a state budget resting on a single deposit.',
        prompt: 'What does this add to a claim built only from colonial cases? Peru was independent: does that change the pattern or confirm it?' },
      { title: 'West African palm oil',
        label: 'Commodity record · nineteenth century',
        sourceText: [
          'Palm oil exports expanded with European industrial demand.',
          'African producers and merchants often remained important',
          'in production and trade.'
        ],
        caption: 'The card that complicates the others: expanding export demand did not always displace local ownership.',
        prompt: 'Why does this case not fit a simple extraction story? What would you need to know before deciding whether it is the exception or the rule?' }
    ]
  },
  '6.5': {
    prompt: 'Explain economic imperialism without conquest. Use at least two cards to show how a state could lose control of its own economy, and say what distinguishes this from colonial rule.',
    cards: [
      picture('Buenos_Aires_Port.jpg', 'The port of Buenos Aires',
        'Photograph of the port built out with British capital, in a country that was never a colony.',
        'NOTICE the scale of the infrastructure and what it is built to move. INFER whose interests the layout serves. What does a port photograph not show about who owns it or who holds the debt?'),
      localMap('topic-6-5.svg', 'Economic imperialism and financial control',
        'BeHistorical reference map. Secondary geographic reconstruction of investment, debt and treaty-port arrangements.',
        'NOTICE which states appear here that do not appear on a map of colonies. INFER what kind of control does not require a flag. What would you need beyond a map to show that control was real?'),
      { title: 'The Treaty of Nanjing',
        label: 'Treaty record · China and Britain, 1842',
        sourceText: [
          'China opened treaty ports and paid an indemnity.',
          'Hong Kong was ceded to Britain.',
          'China remained a sovereign state throughout.'
        ],
        caption: 'Terms imposed after defeat on a state that was never colonized, which is what makes it the clearest case of this topic.',
        prompt: 'What is taken here and what is left? Use the card to define economic imperialism against colonial rule.' },
      { title: 'The Ottoman Public Debt Administration',
        label: 'Financial institution · established 1881',
        sourceText: [
          'Foreign creditors gained control over selected Ottoman revenues.',
          'Debt repayment became an international governance mechanism.'
        ],
        caption: 'A creditors\' body collecting an empire\'s own taxes, inside that empire, with its consent on paper.',
        prompt: 'How much sovereignty is left when foreign creditors collect the taxes? Compare this mechanism with the treaty in the Nanjing card.' },
      { title: 'Egypt, debt and occupation',
        label: 'Financial and political sequence · 1870s to 1882',
        sourceText: [
          'Debt gave European creditors growing leverage over Egyptian finances.',
          'Britain occupied Egypt militarily in 1882.'
        ],
        caption: 'The case where financial control ended in troops, which is the boundary this topic sits on.',
        prompt: 'Does this card belong in economic imperialism or in conquest? Argue the placement, and say what the sequence implies about the relationship between the two.' },
      { title: 'British capital in Argentine railways',
        label: 'Investment record · late nineteenth century',
        sourceText: [
          'Foreign capital financed major railway expansion.',
          'Routes linked export-producing regions to Atlantic ports.'
        ],
        caption: 'Infrastructure built by outside investors, laid out to serve export rather than internal connection.',
        prompt: 'Read the route pattern as evidence of intent. What would an internally focused railway network look like instead, and how would you check?' }
    ]
  },
  '6.6': {
    prompt: 'Make a claim about what caused mass migration after 1750. Use at least two cards, separate a push from a pull, and explain what made the movement physically possible.',
    cards: [
      picture('Indian_indenture_ship.jpg', 'An indenture ship',
        'Photograph of a vessel carrying indentured labourers. The contract and the passage were parts of the same system.',
        'NOTICE the conditions the vessel implies for a voyage of weeks. INFER what a recruiter would have to promise to fill it. What does the ship not tell you about what awaited at the other end?'),
      localMap('topic-6-6.svg', 'Global migration flows after 1750',
        'BeHistorical reference map. Secondary geographic reconstruction of the major migration streams of the period.',
        'NOTICE which flows are voluntary, which are contracted, and which are coerced. INFER what the map is flattening by drawing them all as arrows. Which distinction matters most for causation?'),
      { title: 'The Great Famine and Irish migration',
        label: 'Demographic record · Ireland, 1845 to 1852',
        sourceText: [
          'Crop failure combined with poverty and insecure land tenure.',
          'Mass death and mass emigration followed.'
        ],
        caption: 'A push factor with a cause behind it: the blight was natural, the vulnerability was not.',
        prompt: 'Which part of this is the cause of the migration: the crop failure, or the land system? Defend the answer and say what evidence would settle it.' },
      { title: 'The Indian indenture contract',
        label: 'Labor-system record · after 1834',
        sourceText: [
          'Workers signed fixed-term contracts for overseas plantation labor.',
          'Recruitment expanded after the abolition of slavery',
          'in the British empire.'
        ],
        caption: 'A labor system that appeared where another had just been abolished, which is the fact to reason from.',
        prompt: 'What does the timing suggest about what indenture was for? Is a signed contract sufficient evidence that the movement was voluntary?' },
      { title: 'Chinese migration to the Pacific world',
        label: 'Migration record · 1850s to 1870s',
        sourceText: [
          'Gold rushes, railroads and port labor created demand abroad.',
          'Steamship routes connected southern China to Pacific destinations.'
        ],
        caption: 'A pull factor and a route, in one card. Demand alone does not move anyone.',
        prompt: 'Separate the pull from the means in this card. Which of the two would you rank as the more important cause, and what would change your mind?' },
      { title: 'Steamship passage',
        label: 'Transport reconstruction · nineteenth century',
        sourceText: [
          'Regular steamship service reduced travel time and uncertainty.',
          'Cheaper, more predictable passage made repeat and',
          'return migration possible for the first time.'
        ],
        caption: 'Labeled a reconstruction: the pattern historians draw from shipping schedules and passenger records rather than a single document.',
        prompt: 'Return migration is the detail to notice here. How does the possibility of going home change what migration means, and which other card does it most complicate?' }
    ]
  },
  '6.7': {
    prompt: 'Build a claim about the effects of migration on receiving and sending societies. Use at least two cards, and make sure your claim accounts for a place migrants left as well as one they arrived in.',
    cards: [
      picture('A_Holiday_in_Chinatown,_San_Francisco_(P._Frenzeny,_Harper\'s,_1880-03-20).jpg', 'Chinatown, San Francisco, 1880',
        'An illustration published in Harper\'s Weekly, March 1880, two years before Chinese immigration was restricted by federal law. The accompanying article argued the community would not assimilate.',
        'NOTICE what the street shows about how the community organized itself, and who this was drawn for. INFER what institutions a migrant population builds when the surrounding society excludes it. What does an illustration made for a national magazine reveal about its own audience, not just its subject?'),
      localMap('topic-6-7.svg', 'Diasporas and receiving societies',
        'BeHistorical reference map. Secondary geographic reconstruction of major diaspora communities and their origins.',
        'NOTICE the pairing of origin and destination. INFER what a sending region loses and gains at the same time. What does the map show nothing at all about?'),
      { title: 'The Chinese Exclusion Act',
        label: 'Legal record · United States, 1882',
        sourceText: [
          'Federal law suspended the immigration of Chinese laborers.',
          'Migration became explicitly regulated by national origin.'
        ],
        caption: 'The first American law to bar a group by nationality, passed while the community in the photograph was already established.',
        prompt: 'What does a law like this tell you about the receiving society rather than about the migrants? Read it beside the photograph: which comes first, the community or the exclusion?' },
      { title: 'The White Australia policy',
        label: 'Legal record · Immigration Restriction Act, 1901',
        sourceText: [
          'A dictation test provided the mechanism for racial exclusion.',
          'The policy followed decades of anti-Chinese restriction.'
        ],
        caption: 'Exclusion written so that the racial purpose is not stated in the text: the test could be given in any European language.',
        prompt: 'Why would a government write a law this way? What does the gap between the mechanism and the purpose tell you about how such policies were justified?' },
      { title: 'Remittances and absent workers',
        label: 'Household and economic reconstruction · sending regions',
        sourceText: [
          'Migrants sent earnings home across long distances.',
          'Male-selective migration could alter household labor',
          'and gender roles in the villages they left.'
        ],
        caption: 'The only card here about the places migrants came from, and labeled a reconstruction rather than a record.',
        prompt: 'Build the sending-society half of your claim from this card. What kind of source would give you direct evidence for it, and why is that evidence scarce?' }
    ]
  },
  '6.8': {
    prompt: 'Rank the causes of imperial expansion after 1750 and defend the ranking. Use at least two cards, state your criterion for importance before you rank, and name the evidence that most weakens your answer.',
    cards: [
      picture('Punch_Rhodes_Colossus.png', 'The Rhodes Colossus',
        'Punch cartoon, 1892. Ambition and competition between powers, drawn for a domestic audience.',
        'NOTICE the pose and the scale. INFER which cause of expansion this image is arguing for. Is a cartoon evidence of a cause, or of how a cause was talked about?'),
      picture('Rubber_tapping.jpg', 'Rubber tapping',
        'Photograph of latex extraction, the point where industrial demand met colonial labor.',
        'NOTICE the labor the process requires. INFER which cause of expansion this image supports. What does it evidence better than the cartoon does, and worse?'),
      { title: 'Yaa Asantewaa and the Golden Stool',
        label: 'Colonial record \u00b7 War of the Golden Stool, 1900 to 1901',
        sourceText: [
          'Yaa Asantewaa led Asante forces against British demands to surrender the Golden Stool.',
          'She was captured and exiled to the Seychelles in 1901, where she died in 1921.'
        ],
        caption: 'This card is a response rather than a cause, and no verified photograph of her could be sourced from Commons.',
        prompt: 'NOTICE that this is a card about response rather than cause. INFER what a ranking of causes leaves out if it never accounts for resistance. Where does this belong in a causal argument?' },
      { title: 'Industrial demand for raw materials',
        label: 'Economic causal evidence · nineteenth century',
        sourceText: [
          'Factories demanded cotton, rubber, metals, oils and other inputs.',
          'Overseas markets also attracted exporters and investors.'
        ],
        caption: 'The economic case, stated as demand rather than as greed, so that it can be tested against the other cards.',
        prompt: 'Does demand explain where empires expanded, when they expanded, or both? Name a case from this unit that demand alone does not explain.' },
      { title: 'Technology lowers the cost of conquest',
        label: 'Technological causal evidence · late nineteenth century',
        sourceText: [
          'Steam transport, quinine, telegraphy and modern firearms',
          'widened military and logistical advantages.',
          'States could project force further and hold it longer.'
        ],
        caption: 'The enabling condition rather than the motive: what made expansion cheap enough to attempt.',
        prompt: 'An enabling condition is not a motive. Explain the difference using this card and the demand card, then say which belongs higher in your ranking and why.' }
    ]
  }
};

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

function jsonAssignmentValue(value) {
  return JSON.stringify(value, null, 2).replace(/\n/g, '\n  ');
}

// Media contract for Unit 6.
//
// Every topic used to point all ten module slots, all three concept cards, and
// all three evidence cards at one picture, which meant a photograph of a rubber
// tapper captioned as a map of Egyptian cotton. Now each topic declares:
//   map      the Map & Geography image (a local instructional map, or a real map)
//   photo    the one period photograph the topic legitimately owns
//   onCard   which lecture card the photograph belongs on (0 = none)
//   onEvidence  which Evidence Lab item the photograph actually depicts (0 = none)
// Any slot the photograph does not belong in renders the generated per-slot
// artwork for that topic, which is always on-topic and can never 404.
const commons = (file) => `https://commons.wikimedia.org/wiki/Special:FilePath/${escapeParens(file)}`;
const commonsSource = (file) => `https://commons.wikimedia.org/wiki/File:${escapeParens(file)}`;
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
    // No verified Commons photograph of Yaa Asantewaa herself exists; five
    // searches returned only a modern museum building and a family house. The
    // lecture card and Evidence Lab both fall back to generated topic art
    // rather than a wrong or unverified picture, the same as 6.8.
    map: instructionalMap('6.3'),
    photo: null, onCard: 0, onEvidence: 0
  },
  '6.4': {
    map: instructionalMap('6.4'),
    photo: 'Rubber_tapping.jpg', onCard: 1, onEvidence: 2,
    photoTitle: 'Tapping rubber',
    photoCaption: 'Industrial demand for rubber reorganized whole regions around a single export crop, in the Amazon and in the Congo.'
  },
  '6.5': {
    map: instructionalMap('6.5'),
    photo: 'Buenos_Aires_Port.jpg', onCard: 1, onEvidence: 2,
    photoTitle: 'The port of Buenos Aires',
    photoCaption: 'British capital financed Argentina\'s docks and railways. Economic imperialism could direct an economy without formal colonial rule.'
  },
  '6.6': {
    map: instructionalMap('6.6'),
    photo: 'Indian_indenture_ship.jpg', onCard: 1, onEvidence: 2,
    photoTitle: 'An indenture ship carrying Indian laborers',
    photoCaption: 'After abolition, plantations recruited indentured workers from India and China under contracts that limited pay, movement, and return.'
  },
  '6.7': {
    map: instructionalMap('6.7'),
    photo: 'A_Holiday_in_Chinatown,_San_Francisco_(P._Frenzeny,_Harper\'s,_1880-03-20).jpg', onCard: 1, onEvidence: 1,
    photoTitle: 'Chinatown, San Francisco, Harper\'s Weekly, 1880',
    photoCaption: 'An illustration from Harper\'s Weekly, March 1880. Migration produced lasting diaspora communities, and a backlash: the United States barred Chinese labor migration in 1882.'
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
  const concepts = alignTopicConcepts(topic.id, topic.kc.map(([code, text]) => ({
    code,
    theme: topic.theme,
    text,
    illustrativeExamples: topic.cases
  })));
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

// Module 07's authored pool, emitted into a generated renderer config. A topic
// with no entry emits nothing.
function module07Block(topicId) {
  const pool = MODULE07_EVIDENCE[topicId];
  if (!pool) return '';
  const lab = { title: 'Evidence Lab: Build and Test a Claim', task: MODULE07_TASK, prompt: pool.prompt };
  return `\n  lesson.evidenceLab = ${jsonAssignmentValue(lab)};\n  lesson.images = ${jsonAssignmentValue(pool.cards)};`;
}

function rendererConfig(topic) {
  const concepts = alignTopicConcepts(topic.id, topic.kc.map(([code, text]) => ({
    code,
    theme: topic.theme,
    text,
    illustrativeExamples: topic.cases
  })));
  return `(() => {\n  const lesson = window.BEHISTORICAL_LESSON;\n  if (!lesson) return;\n  lesson.meta.canvasSubmissionNote = '${SUBMIT_NOTE}';\n  lesson.meta.feedbackToolUrl = '${COACH_URL}';\n  lesson.collegeBoardKeyConcepts = ${jsonAssignmentValue(concepts)};${module07Block(topic.id)}\n})();\n`;
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
  return `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>BeInTheRoom | ${esc(s.title)}</title><link rel="stylesheet" href="../../assets/css/behistorical-brand-lock.css"><style>:root{--ink:#13233c;--gold:#d4a84f;--paper:#f3ecdc}*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:16px/1.55 Georgia,serif}header,main,footer{max-width:980px;margin:auto;padding:24px}header{background:var(--ink);color:#fff}h1,h2{font-family:Montserrat,sans-serif}.panel{background:#fff;padding:22px;margin:18px 0;border-top:5px solid var(--gold)}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px}.choice{display:block;border:1px solid #8791a0;padding:14px;border-radius:6px;cursor:pointer}.choice:has(input:checked){outline:3px solid var(--gold)}textarea{width:100%;min-height:130px;padding:12px}button,a.button{display:inline-block;background:var(--ink);color:#fff;padding:10px 14px;border:0;border-radius:4px;text-decoration:none;margin:5px}.status{font-weight:bold;color:#76530f}</style></head><body><header><a href="../index.html" style="color:#f4cf7b">← BeInTheRoom hub</a><div>${esc(s.date)}</div><h1>${esc(s.title)}</h1><p>${esc(s.dilemma)}</p></header><main><section class="panel"><h2>1. Choose a role</h2><div class="grid" id="roles"></div></section><section class="panel"><h2>2. Review the evidence</h2><div id="evidence"></div></section><section class="panel"><h2>3. Make the decision</h2><div id="choices"></div></section><section class="panel"><h2>4. Defend it historically</h2><label for="argument">Write a claim, use two checked facts, and address one tradeoff.</label><textarea id="argument"></textarea><p><button onclick="saveWork()">Save locally</button><button onclick="buildCoachPrompt()">Build AI Coach prompt</button><a class="button" id="magicschool-open-link" data-default-href="${COACH_URL}" href="${COACH_URL}" target="_blank" rel="noopener">Open MagicSchool</a></p><div class="status" id="status"></div><textarea id="coach" readonly aria-label="AI Coach prompt"></textarea></section><section class="panel"><h2>AP Reflection</h2><p>How does this dilemma illuminate Topic ${esc(s.id)}? Explain how the available choices were constrained by institutions, power, and historical context.</p><textarea id="reflection"></textarea><p>${SUBMIT_NOTE}</p></section></main><footer>BeHistorical · BeInTheRoom</footer><script src="../../assets/js/behistorical-classroom.js"></script><script src="../../assets/js/behistorical-beintheroom-capture.js"></script><script>var SCENARIO=${payload};var KEY='behistorical-room-'+SCENARIO.id;var REFLECTION_PROMPT='How does this dilemma illuminate Topic '+SCENARIO.id+'? Explain how the available choices were constrained by institutions, power, and historical context.';function render(){document.getElementById('roles').innerHTML=SCENARIO.roles.map(function(x,i){return'<label class="choice"><input type="radio" name="role" value="'+i+'"> '+x+'</label>';}).join('');document.getElementById('evidence').innerHTML=SCENARIO.evidence.map(function(x,i){return'<label class="choice"><input type="checkbox" name="fact" value="'+i+'"> '+x+'</label>';}).join('');document.getElementById('choices').innerHTML=SCENARIO.choices.map(function(x,i){return'<label class="choice"><input type="radio" name="decision" value="'+i+'"> '+x+'</label>';}).join('');var saved=JSON.parse(localStorage.getItem(KEY)||'null');if(saved){if(saved.role!=null)document.querySelector('[name=role][value="'+saved.role+'"]').checked=true;if(saved.decision!=null)document.querySelector('[name=decision][value="'+saved.decision+'"]').checked=true;(saved.facts||[]).forEach(function(v){document.querySelector('[name=fact][value="'+v+'"]').checked=true;});argument.value=saved.argument||'';reflection.value=saved.reflection||'';}}function state(){var r=document.querySelector('[name=role]:checked'),d=document.querySelector('[name=decision]:checked');return{role:r&&r.value,decision:d&&d.value,facts:Array.from(document.querySelectorAll('[name=fact]:checked')).map(function(x){return x.value;}),argument:argument.value,reflection:reflection.value};}function saveWork(){localStorage.setItem(KEY,JSON.stringify(state()));status.textContent='Saved on this device.';if(window.BHBeInTheRoomCapture)window.BHBeInTheRoomCapture.save(SCENARIO.id,REFLECTION_PROMPT,reflection.value);}function buildCoachPrompt(){var s=state(),role=s.role==null?'not chosen':SCENARIO.roles[s.role],decision=s.decision==null?'not chosen':SCENARIO.choices[s.decision],facts=s.facts.map(function(i){return SCENARIO.evidence[i];});coach.value='Socrates, I am in a BeInTheRoom simulation for Topic '+SCENARIO.id+' and you are in the room with me. I am playing '+role+'. My decision: '+decision+'. Evidence: '+facts.join(' | ')+'. My reasoning: '+s.argument+'. Coach me on one thing: is my decision defensible given my role, my evidence, and the tradeoff I accepted? Name the weakest part of it and tell me what to revise. After I revise once, tell me whether it holds. When it does, I will step out of character and answer the AP Reflection box on this page, which is what reaches Canvas through Gather All My Work on the lesson page. Give me one thing to work on at a time. Do not write my final answer for me.';}document.addEventListener('DOMContentLoaded',render);reflection.addEventListener('input',saveWork);(function(){var link=document.getElementById('magicschool-open-link');if(link&&window.BHClassroom){link.href=window.BHClassroom.resolveMagicSchoolUrl(link.getAttribute('data-default-href')||link.href);}})();</script></body></html>\n`;
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
write(path.join(DATA, 'lesson-6-1-renderer-config.js'), `(() => {\n  const lesson = window.BEHISTORICAL_LESSON;\n  if (!lesson) return;\n  lesson.meta.canvasSubmissionNote = '${SUBMIT_NOTE}';\n  lesson.meta.feedbackToolUrl = '${COACH_URL}';\n  lesson.beInTheRoom = {\n    url: '../beintheroom/unit-6/${scenario61.file}',\n    desc: '${scenario61.dilemma.replace(/'/g, "\\'")}'\n  };${module07Block('6.1')}\n})();\n`);

updateHub();
console.log('Built Unit 6 Topics 6.2–6.8, wired Topic 6.1, and generated seven BeInTheRoom scenarios.');
