#!/usr/bin/env node
'use strict';

/**
 * Content preserved across the unit readings migration.
 *
 *   node scripts/test/readings-golden.js              against the frozen fixture
 *   node scripts/test/readings-golden.js --from-disk  against the files as they are now
 *
 * --from-disk is the migration run, used while the hand-authored pages are still
 * on disk. After they are replaced it would compare the generated page against
 * itself, so the committed fixture is the baseline from then on.
 */

const fs = require('fs');
const path = require('path');
const { extractReading, diffReadings } = require('../lib/reading-extract');
const { build, allTopics } = require('../build-unit-readings');

const ROOT = path.resolve(__dirname, '..', '..');
const FIXTURE = path.join(__dirname, 'fixtures', 'readings-before.json');
const fromDisk = process.argv.includes('--from-disk');

const R = '\x1b[31m', G = '\x1b[32m', Y = '\x1b[33m', W = '\x1b[1m', D = '\x1b[2m', X = '\x1b[0m';

let baseline = null;
if (!fromDisk) {
  if (!fs.existsSync(FIXTURE)) {
    console.error('No baseline fixture. Run with --from-disk while the originals are still present.');
    process.exit(1);
  }
  baseline = JSON.parse(fs.readFileSync(FIXTURE, 'utf8'));
}

/**
 * Changes made deliberately after the migration, each pinned to the exact value
 * it produces.
 *
 * The fixture is the historical record of what the hand-authored pages said, and
 * it stays that way: editing it to match a new decision would erase the evidence
 * the check exists to hold. Divergences are declared here instead, with the
 * value they must produce, so this list can only ever accept the specific edit
 * it describes. Any other change to the same field still fails.
 */
/**
 * Every Unit 8 reading named its AP learning objective by letter, "AP LO C asks
 * you to compare", and a student has no way to know what that letter means. The
 * letter is a CED index, not something the exam ever asks for. Each one now says
 * what the objective actually asks, so the sentence teaches on its own.
 */
const LO_LETTERS_REMOVED = 'the AP learning objective letters were replaced with what each objective actually says, 2026-09-08. "LO J" told a student nothing; the letter is a CED index and never appears on the exam.';

/**
 * Topic 2.6's own Key Concept (KC-3.1.IV) names crop diffusion, bananas in
 * Africa, new rice varieties in East Asia, citrus in the Mediterranean, as
 * an environmental consequence of connectivity, alongside the plague. The
 * reading, the learning targets, and Checkpoint 2 covered only the plague.
 * Jeff's 2026-09-11 build brief flagged the gap; this folds crop diffusion
 * into the existing sections and questions rather than adding new ones, so
 * the reading keeps its four sections and three check questions.
 */
const CROP_DIFFUSION_2_6 = 'Topic 2.6\'s reading, targets, and Checkpoint 2 covered only the plague; its own Key Concept also names crop diffusion (bananas in Africa, new rice varieties in East Asia, citrus in the Mediterranean) as an environmental consequence of connectivity, added 2026-09-11.';

const INTENTIONAL = [
  { field: 'footerNote',
    after: 'Organize your thinking here, submit your final work in Canvas.',
    why: 'the Google Form was retired 2026-08-07; 28 readings still pointed students at it. This is the wording the other 30 already used.' },
  { field: 'support[].body', contains: 'submit it in Canvas',
    why: 'same retirement, in the support card of 5.9, 5.10 and 6.1' },
  { field: 'header.badge', after: 'Module 02',
    why: 'the First & 10 is module 02 in the ten-module standard. Three readings badged themselves "First & 10"; 1.1, 2.1, 3.1, 3.2 and 8.9 carried "Module 01", which is the Map module number; and 2.3 through 2.7 counted 03 to 07, numbering by topic position in the unit rather than by module position in the lesson.' },
  { field: 'header.name', after: 'First & 10 Reading',
    why: 'those three put the topic title here instead; 55 others use the module name' },
  { field: 'support[].heading', after: 'Before You Read',
    why: 'those three said "What to do"; 55 others say Before You Read' },
  { field: 'support[].heading', after: 'Reading Target',
    why: 'those three said "Why it matters"; 55 others say Reading Target' },
  { field: 'header.subtitle',
    after: 'Topic 5.9, Society and the Industrial Age | AP World History',
    why: 'same retirement again, in the header of 5.9. These three were the last student-facing text in the course still telling students to build a Google Form response, three weeks after the form was removed. The other 55 already carry the topic title here.' },
  { field: 'header.subtitle',
    after: 'Topic 5.10, Continuity and Change in the Industrial Age | AP World History',
    why: 'same retirement, in the header of 5.10' },
  { field: 'header.subtitle',
    after: 'Topic 6.1, Rationales for Imperialism | AP World History: Modern',
    why: 'same retirement, in the header of 6.1' },

  { field: "support[].body",
    after: "Track two things as you read: (1) how each superpower used alliances, arms, and proxy forces to maintain influence, and (2) where their methods were similar and where they differed. The learning objective asks you to compare, not just describe, so focus on the structural patterns that appear across Korea, Angola, and Nicaragua.",
    why: LO_LETTERS_REMOVED },
  { field: "takeaway",
    after: "The Cold War produced three interconnected effects: new military alliances (NATO and the Warsaw Pact) that extended superpower influence across the globe; nuclear proliferation and MAD that deterred direct conflict while redirecting competition into proxy methods; and proxy wars in Korea, Angola, and Nicaragua where local forces fought Cold War battles with superpower arms, funding, and backing. Both the United States and Soviet Union used the same structural tools, alliances, arms, advisors, local clients, but differed in how they framed their involvement and how directly they intervened. Comparing these methods, not just cataloguing them, is what the learning objective requires.",
    why: LO_LETTERS_REMOVED },
  { field: "support[].body",
    after: "This topic has two distinct learning objectives: one covers China, the causes and consequences of the communist seizure of power, and the other covers movements to redistribute economic resources across Africa, Asia, and Latin America. Track both as you read. For China, trace the two causes the CED specifies: internal tension AND Japanese aggression. For the redistribution cases, note what drove each movement and what effect it produced.",
    why: LO_LETTERS_REMOVED },
  { field: "sections[].label",
    after: "Causation, KC-6.2.I.i, communism in China",
    why: LO_LETTERS_REMOVED },
  { field: "sections[].label",
    after: "Causation, KC-6.3.I.A.ii, communism in China",
    why: LO_LETTERS_REMOVED },
  { field: "sections[].label",
    after: "Causation / Comparison, KC-6.2.II.D.i, redistribution movements",
    why: LO_LETTERS_REMOVED },
  { field: "sections[].callout.body",
    after: "These four cases cover revolutionary (Vietnam), military-junta (Ethiopia), democratic-electoral (Kerala/India), and monarchical top-down (Iran) paths to redistribution. The causes differ; so do the effects. The learning objective asks you to explain causes AND effects. Use the cases comparatively: identify where causes overlapped (colonial inequality, rural land hunger) and where effects diverged (independence vs. civil war vs. democratic reform vs. revolution against the reformer).",
    why: LO_LETTERS_REMOVED },
  { field: "takeaway",
    after: "Two learning objectives, one topic. China: it turned communist because of internal tension (warlordism, KMT failure, land inequality) AND Japanese aggression, both causes are required. The Great Leap Forward shows what communist state control of the economy looks like at catastrophic scale: collectivization, backyard steel furnaces, inflated production reporting, grain extraction based on fake numbers, and a famine that killed tens of millions. Redistribution: movements in Vietnam (revolutionary), Ethiopia (military junta), Kerala/India (democratic election), and Iran (monarchical decree) show four different causes and four different effects, use the comparison to show the range, not just to list the cases.",
    why: LO_LETTERS_REMOVED },
  { field: "support[].body",
    after: "Track three threads as you read: (1) the strategies nationalist leaders used, what made them effective in their specific colonial context; (2) what conditions pushed a colony toward negotiated independence vs. armed struggle; (3) how inherited colonial boundaries produced conflicts that outlasted colonial rule. The learning objective asks you to compare these processes, so focus on what made paths similar and different, not just on memorizing case names.",
    why: LO_LETTERS_REMOVED },
  { field: "sections[].callout.body",
    after: "All four CED examples involve nationalist leaders seeking independence, but their strategies differ significantly. The INC and CPP used nonviolent mass mobilization; Ho Chi Minh used armed resistance; Nasser used state power and economic nationalization. The learning objective asks you to compare processes, so the comparison question is not just who succeeded, but why each chose the strategy they did, and what conditions made each strategy work (or fail to work) in its specific context.",
    why: LO_LETTERS_REMOVED },
  { field: "takeaway",
    after: "Three things to carry forward from this reading. First, nationalist leaders used different strategies, nonviolent mass mobilization (Gandhi, Nkrumah), armed resistance (Ho Chi Minh), state power and economic nationalism (Nasser), each calibrated to its specific colonial context. Second, the key comparison the learning objective asks for: negotiated independence happened where the colonial power calculated withdrawal was less costly than occupation; armed struggle happened where the stakes were too high to negotiate, especially settler presence, metropole politics, and Cold War framing. Third, inherited imperial boundaries were the fault lines of postcolonial conflict: Partition, Québec, Biafra, three very different cases, one structural cause: colonizers drew borders for themselves, and the people who lived inside them were left with those borders when empire ended.",
    why: LO_LETTERS_REMOVED },
  { field: "support[].body",
    after: "Track two threads as you read: (1) the political thread, how colonial withdrawal produced new states, and why those new states' boundaries generated conflict and displacement; and (2) the economic thread, what changed (who controls the economy) and what continued (migration ties, trade dependencies) after formal independence. Both of this topic's learning objectives are active here, one on the political changes that led to territorial, demographic, and nationalist developments, the other on the economic changes and continuities that followed decolonization. You need both threads to answer the checkpoint questions.",
    why: LO_LETTERS_REMOVED },
  { field: "sections[].callout.body",
    after: "The learning objective asks for both economic changes AND continuities. What changed: who controls the economy. Newly independent governments nationalized key industries and directed economic development, replacing colonial firms with state-owned enterprises and ending the automatic preference for metropolitan interests. What continued: migration corridors and trade dependencies. Former colonial subjects moved to the metropole's cities, sending remittances home; trade patterns often still ran through the former colonizer. Economic independence was harder to achieve than political independence, the structures of the colonial economy persisted even after the colonial flag came down.",
    why: LO_LETTERS_REMOVED },
  { field: "sections[].callout.body",
    after: "The mechanism matters for AP credit. \"The U.S. had a strong military\" is a fact. \"U.S. technological development, specifically SDI and the shift toward microelectronics, created pressure the Soviet economy could not match because Soviet industrial capacity was strongest in heavy manufacturing and weakest in computing, so the arms race moved into terrain where the Soviets were structurally outmatched\" is a causal explanation. The learning objective asks you to explain the causes of the end of the Cold War, which means explaining mechanisms, not just listing events.",
    why: LO_LETTERS_REMOVED },
  { field: "sections[].callout.body",
    after: "The Soviet economic crisis was not new in 1985, the structural problems had been building since at least the 1970s. What changed was Gorbachev's decision to respond with reform rather than repression. CCOT for the end of the Cold War: the continuity was chronic economic weakness; the change was glasnost releasing the public discontent that weakness had been generating for decades. The 1989 revolutions and the 1991 dissolution were not sudden, they were the accumulated result of structural weakness intersecting with a reform response that released pressures the system could not absorb.",
    why: LO_LETTERS_REMOVED },
  { field: "support[].body",
    after: "The learning objective asks you to evaluate the extent to which Cold War effects were similar across hemispheres. This means you need two things: a catalog of effects across both hemispheres (what the Hemispheric Effects Matrix will give you), and a degree claim (were effects largely similar, largely different, or mixed ?). As you read, track which hemisphere each effect falls in, and start forming a hypothesis about the dominant pattern.",
    why: LO_LETTERS_REMOVED },
  { field: "vocab[]",
    after: "Hemispheric Comparison",
    why: LO_LETTERS_REMOVED },
  { field: "sections[].callout.body",
    after: "The four effect categories (KC-6.2.IV.C) are your analytical framework for the learning objective. Before you can evaluate the \"extent\" of similarity, you need to populate the matrix with specific evidence in each category for each hemisphere. A pattern that holds across all four categories points toward \"largely similar.\" A pattern that diverges sharply in two or more categories points toward \"mixed\" or \"largely different.\" Your thesis will name which pattern dominates your evidence.",
    why: LO_LETTERS_REMOVED },
  { field: "takeaway",
    after: "The Cold War shaped every corner of the world, but not always in the same way. KC-6.2.IV.C's four categories (economic, political, social, cultural) give you the framework. The learning objective asks you to evaluate how much overlap there was. Your thesis needs a degree claim: \"to a great extent,\" \"to a moderate extent,\" or \"to a limited extent.\" The matrix builds your evidence. The thesis commits to your interpretation of it.",
    why: LO_LETTERS_REMOVED },

  /**
   * Topic 2.6's own Key Concept (KC-3.1.IV) names crop diffusion, bananas in
   * Africa, new rice varieties in East Asia, citrus in the Mediterranean, as
   * an environmental consequence of connectivity, alongside the plague. The
   * reading, the learning targets, and Checkpoint 2 covered only the plague.
   * Jeff's 2026-09-11 build brief flagged the gap; this folds crop diffusion
   * into the existing sections and questions rather than adding new ones, so
   * the reading keeps its four sections and three check questions.
   */
  { field: "band.deck",
    after: "Trade routes carried disease as efficiently as they carried goods, and just as easily carried crops and farming knowledge the other way. In the mid-14th century, the bubonic plague traveled along the trade networks of Afro-Eurasia and killed tens of millions of people, while those same networks spread bananas, new rice varieties, and citrus to farmers who had never grown them before. Connectivity's consequences ran in more than one direction.",
    why: CROP_DIFFUSION_2_6 },
  { field: "support[].body",
    after: "By the end, you should be able to explain how trade routes enabled the Black Death's spread, describe its demographic and social consequences, explain how those same networks diffused crops such as bananas, new rice varieties, and citrus, and evaluate whether trade networks brought both prosperity and catastrophe.",
    why: CROP_DIFFUSION_2_6 },
  { field: "vocab[]",
    after: "Crop Diffusion",
    why: CROP_DIFFUSION_2_6 },
  { field: "sections[].heading",
    after: "Social, Institutional, and Ecological Consequences",
    why: CROP_DIFFUSION_2_6 },
  { field: "sections[].paragraphs[].text",
    after: "The Church, which had no explanation for the disaster and no power to stop it, suffered severe damage to its authority, and some survivors began to question institutional religion when priests and bishops died alongside peasants and prayers offered no protection. Connectivity's consequences were not only catastrophic: the same trade networks also carried crops the other way, bananas continuing to spread into East Africa, new rice varieties reaching East Asia, and citrus becoming established around the Mediterranean, proof that a trade network moves more than one kind of cargo.",
    why: CROP_DIFFUSION_2_6 },
  { field: "sections[].blocks[].text",
    after: "The Church, which had no explanation for the disaster and no power to stop it, suffered severe damage to its authority, and some survivors began to question institutional religion when priests and bishops died alongside peasants and prayers offered no protection. Connectivity's consequences were not only catastrophic: the same trade networks also carried crops the other way, bananas continuing to spread into East Africa, new rice varieties reaching East Asia, and citrus becoming established around the Mediterranean, proof that a trade network moves more than one kind of cargo.",
    why: CROP_DIFFUSION_2_6 },
  { field: "takeaway",
    after: "The Black Death originated in Central Asian rodent populations and traveled along Mongol trade routes westward. It killed 30–60% of Europe's population, causing demographic collapse, labor shortages that weakened serfdom, and damage to Church authority. The same networks also diffused crops, bananas into East Africa, new rice varieties into East Asia, citrus around the Mediterranean, proof that connectivity's consequences were not only catastrophic. The central AP lesson: the same networks that carried silk and spices also carried plague and produce, connectivity creates both prosperity and vulnerability, and the two cannot be separated.",
    why: CROP_DIFFUSION_2_6 },
  { field: "check.questions[].text",
    after: "Explain two consequences of Afro-Eurasian connectivity in this period, one related to the spread of disease and one related to the diffusion of crops or agricultural practices. Use specific evidence for each.",
    why: CROP_DIFFUSION_2_6 },
  { field: "check.questions[].placeholder",
    after: "One consequence, the spread of disease, was... A second consequence, the diffusion of crops, was...",
    why: CROP_DIFFUSION_2_6 }
];

/** Parse one diff line back into field, before, after. */
function parseDiff(d) {
  const m = d.match(/^(.+?):\n\s+before: ([\s\S]*)\n\s+after:  ([\s\S]*)$/);
  if (!m) return null;
  const val = (raw) => { try { return JSON.parse(raw); } catch (_) { return raw; } };
  return { field: m[1].replace(/\[\d+\]/g, '[]'), before: val(m[2]), after: val(m[3]) };
}

function intentional(d) {
  const p = parseDiff(d);
  if (!p) return null;
  return INTENTIONAL.find(rule => rule.field === p.field
    && (rule.after !== undefined
      ? p.after === rule.after
      : String(p.after).includes(rule.contains))) || null;
}

let failed = 0, checked = 0;
const accepted = new Set();
const failures = [];
console.log(`\n${W}Unit readings, content preserved${X} ${D}(${fromDisk ? 'baseline: files on disk' : 'baseline: committed fixture'})${X}\n`);

for (const topic of allTopics()) {
  const rel = `${topic.unitDir}/${topic.sourceFile}`;
  let before;
  if (fromDisk) {
    const p = path.join(ROOT, rel);
    if (!fs.existsSync(p)) { console.log(`  ${R}✗${X} ${topic.topicKey}  missing ${rel}`); failed++; continue; }
    before = extractReading(fs.readFileSync(p, 'utf8'));
  } else {
    const rec = baseline.topics[topic.topicKey];
    if (!rec) { console.log(`  ${R}✗${X} ${topic.topicKey}  no recorded baseline`); failed++; continue; }
    before = rec.extraction;
  }

  const all = diffReadings(before, extractReading(build(topic)));
  checked++;
  const diffs = [];
  for (const d of all) {
    const rule = intentional(d);
    if (rule) accepted.add(rule.why); else diffs.push(d);
  }
  if (diffs.length === 0) continue;
  failed++;
  failures.push({ key: topic.topicKey, rel, diffs });
}

for (const f of failures) {
  console.log(`  ${R}✗${X} ${W}${f.key}${X}  ${f.diffs.length} difference(s)  ${D}${f.rel}${X}`);
  for (const d of f.diffs.slice(0, 6)) console.log(`      ${Y}${d}${X}`);
  if (f.diffs.length > 6) console.log(`      ${D}...and ${f.diffs.length - 6} more${X}`);
}

console.log(`\n${'─'.repeat(60)}`);
if (accepted.size) {
  console.log(`${Y}Deliberate changes since the originals:${X}`);
  for (const why of accepted) console.log(`  ${D}${why}${X}`);
  console.log('');
}
if (failed) {
  console.log(`${R}${W}${failed} of ${checked} readings differ.${X}  ${G}${checked - failures.length} identical.${X}`);
  process.exit(1);
}
console.log(`${G}${W}${checked} readings match the hand-authored originals, allowing for the declared changes above.${X}`);
