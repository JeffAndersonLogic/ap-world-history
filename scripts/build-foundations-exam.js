#!/usr/bin/env node
/**
 * build-foundations-exam.js
 *
 * Renders the Foundations unit exam from `scripts/lib/foundations-exam-v1.js`
 * into the four artifacts a teacher actually needs:
 *
 *   foundations/assessments/foundations-unit-exam-v1-qti.zip   Canvas import
 *   foundations/assessments/foundations-unit-exam-v1.csv       spreadsheet form
 *   foundations/assessments/foundations-unit-exam-v1.md        student printable
 *   foundations/assessments/foundations-unit-exam-v1-key.md    key and blueprint
 *
 * `--check` renders into memory and fails on drift without writing, which is
 * what the offline suite runs. Never hand-edit the four outputs; edit the
 * content module and rebuild.
 *
 * WHY A QTI ZIP AND NOT A CSV FOR CANVAS
 *
 * Canvas does not import quiz questions from a CSV. Every CSV workflow in the
 * wild routes through a converter that emits QTI, so this writes the QTI package
 * directly and emits the CSV separately in the column layout those converters
 * and spreadsheets expect (type, blank, points, body, correct-answer number,
 * then the choices). Import the zip through Settings, Import Course Content,
 * QTI .zip file.
 *
 * WHY THE ZIP IS WRITTEN BY HAND
 *
 * Same reason `scripts/lib/canvas-zip.js` reads one by hand: this repo has no
 * runtime dependencies and the offline suite runs on a bare checkout with no
 * npm install at all. Entries are stored rather than deflated and every
 * timestamp is fixed, so the same content always produces the same bytes and
 * `--check` can compare them.
 *
 * STIMULUS REPETITION
 *
 * Canvas Classic Quizzes has no shared-stimulus item, so each question in a set
 * carries its own copy of the source. That is deliberate and it is what the LMS
 * needs. The markdown renderings print each source once, above its set.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const { META, STIMULI, ITEMS } = require('./lib/foundations-exam-v1.js');

const ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'foundations', 'assessments');
const BASE = 'foundations-unit-exam-v1';

const CHECK = process.argv.includes('--check');

const QUIZ_ID = 'bh_foundations_exam_v1';
const LETTERS = ['A', 'B', 'C', 'D', 'E'];

// ── small helpers ───────────────────────────────────────────────────────────

const xml = s => String(s)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const csvCell = s => `"${String(s).replace(/"/g, '""')}"`;

const itemsInPart = id => ITEMS.filter(i => i.part === id);

/** Ordered list of stimulus ids as they first appear, with the items each owns. */
function stimulusSets() {
  const sets = [];
  const seen = new Map();
  for (const item of ITEMS) {
    if (!item.stimulus) continue;
    if (!seen.has(item.stimulus)) {
      const set = { stimulus: STIMULI[item.stimulus], items: [] };
      seen.set(item.stimulus, set);
      sets.push(set);
    }
    seen.get(item.stimulus).items.push(item);
  }
  return sets;
}

/** The source, as plain paragraphs, for embedding in an LMS question body. */
function stimulusPlain(st) {
  const out = [`SOURCE: ${st.title}`];
  if (st.attribution) out.push(st.attribution);
  if (st.imageCredit) out.push(st.imageCredit);
  for (const p of st.body) out.push(p);
  if (st.table) {
    out.push(st.table.head.join(' | '));
    for (const row of st.table.rows) out.push(row.join(' | '));
  }
  return out;
}

// ── QTI 1.2 ─────────────────────────────────────────────────────────────────

function questionHtml(item) {
  const blocks = [];
  if (item.stimulus) {
    const st = STIMULI[item.stimulus];
    if (st.imageUrl) {
      blocks.push(`<p><img src="${xml(st.imageUrl)}" alt="${xml(st.title)}" style="max-width:100%;"></p>`);
    }
    for (const line of stimulusPlain(st)) blocks.push(`<p><em>${xml(line)}</em></p>`);
    blocks.push('<hr>');
  }
  blocks.push(`<p>${xml(item.stem)}</p>`);
  return blocks.join('\n');
}

function qtiItem(item) {
  const ident = `bh_fe_q${String(item.n).padStart(2, '0')}`;
  const labels = item.choices.map((choice, i) => {
    const respIdent = `${ident}_a${i}`;
    return `            <response_label ident="${respIdent}">
              <material><mattext texttype="text/plain">${xml(choice)}</mattext></material>
            </response_label>`;
  }).join('\n');

  return `      <item ident="${ident}" title="Question ${item.n}">
        <itemmetadata>
          <qtimetadata>
            <qtimetadatafield>
              <fieldlabel>question_type</fieldlabel>
              <fieldentry>multiple_choice_question</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
              <fieldlabel>points_possible</fieldlabel>
              <fieldentry>${META.pointsPerQuestion}.0</fieldentry>
            </qtimetadatafield>
            <qtimetadatafield>
              <fieldlabel>original_answer_ids</fieldlabel>
              <fieldentry>${item.choices.map((_, i) => `${ident}_a${i}`).join(',')}</fieldentry>
            </qtimetadatafield>
          </qtimetadata>
        </itemmetadata>
        <presentation>
          <material>
            <mattext texttype="text/html">${xml(questionHtml(item))}</mattext>
          </material>
          <response_lid ident="response1" rcardinality="Single">
            <render_choice>
${labels}
            </render_choice>
          </response_lid>
        </presentation>
        <resprocessing>
          <outcomes>
            <decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/>
          </outcomes>
          <respcondition continue="No">
            <conditionvar>
              <varequal respident="response1">${ident}_a${item.answer}</varequal>
            </conditionvar>
            <setvar action="Set" varname="SCORE">100</setvar>
          </respcondition>
        </resprocessing>
        <itemfeedback ident="general_fb">
          <flow_mat>
            <material><mattext texttype="text/html">${xml(`<p>${item.rationale}</p>`)}</mattext></material>
          </flow_mat>
        </itemfeedback>
      </item>`;
}

function qtiAssessment() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<questestinterop xmlns="http://www.imsglobal.org/xsd/ims_qtiasiv1p2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/ims_qtiasiv1p2 http://www.imsglobal.org/xsd/ims_qtiasiv1p2p1.xsd">
  <assessment ident="${QUIZ_ID}" title="${xml(META.title)}">
    <qtimetadata>
      <qtimetadatafield>
        <fieldlabel>cc_maxattempts</fieldlabel>
        <fieldentry>1</fieldentry>
      </qtimetadatafield>
    </qtimetadata>
    <section ident="root_section">
${ITEMS.map(qtiItem).join('\n')}
    </section>
  </assessment>
</questestinterop>
`;
}

function qtiMeta() {
  const description = `${META.course}. ${META.questionCount} multiple-choice questions, ${META.pointsPerQuestion} point each. Part I knowledge, Part II source analysis, Part III historical thinking skills.`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<quiz identifier="${QUIZ_ID}" xmlns="http://canvas.instructure.com/xsd/cccv1p0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://canvas.instructure.com/xsd/cccv1p0 https://canvas.instructure.com/xsd/cccv1p0.xsd">
  <title>${xml(META.title)}</title>
  <description>${xml(description)}</description>
  <shuffle_answers>false</shuffle_answers>
  <scoring_policy>keep_highest</scoring_policy>
  <hide_results></hide_results>
  <quiz_type>assignment</quiz_type>
  <points_possible>${(META.questionCount * META.pointsPerQuestion).toFixed(1)}</points_possible>
  <require_lockdown_browser>false</require_lockdown_browser>
  <allowed_attempts>1</allowed_attempts>
  <one_question_at_a_time>false</one_question_at_a_time>
  <cant_go_back>false</cant_go_back>
  <available>false</available>
  <published>false</published>
  <time_limit>${META.suggestedMinutes}</time_limit>
  <anonymous_submissions>false</anonymous_submissions>
  <could_be_locked>false</could_be_locked>
  <assignment_group_identifierref>bh_assignment_group</assignment_group_identifierref>
</quiz>
`;
}

function qtiManifest() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="${QUIZ_ID}_manifest" xmlns="http://www.imsglobal.org/xsd/imscp_v1p1" xmlns:lom="http://ltsc.ieee.org/xsd/imsccv1p1/LOM/resource" xmlns:imsmd="http://www.imsglobal.org/xsd/imsmd_v1p2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imscp_v1p1 http://www.imsglobal.org/profile/cc/ccv1p1/derived_schema/imscp_v1p2.xsd http://ltsc.ieee.org/xsd/imsccv1p1/LOM/resource http://www.imsglobal.org/profile/cc/ccv1p1/derived_schema/domainProfile_5.xsd http://www.imsglobal.org/xsd/imsmd_v1p2 http://www.imsglobal.org/profile/cc/ccv1p1/derived_schema/imsmd_v1p2p4.xsd">
  <metadata>
    <schema>IMS Content</schema>
    <schemaversion>1.1.3</schemaversion>
  </metadata>
  <organizations/>
  <resources>
    <resource identifier="${QUIZ_ID}" type="imsqti_xmlv1p2">
      <file href="${QUIZ_ID}/${QUIZ_ID}.xml"/>
      <dependency identifierref="${QUIZ_ID}_meta"/>
    </resource>
    <resource identifier="${QUIZ_ID}_meta" type="associatedcontent/imscc_xmlv1p1/learning-application-resource" href="${QUIZ_ID}/assessment_meta.xml">
      <file href="${QUIZ_ID}/assessment_meta.xml"/>
    </resource>
  </resources>
</manifest>
`;
}

// ── a deterministic, dependency-free, stored-entry zip writer ───────────────

const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();

function crc32(buf) {
  let c = -1;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ -1) >>> 0;
}

/**
 * Entries are stored (method 0) with a fixed 1980-01-01 timestamp, so the same
 * inputs always produce byte-identical output and `--check` means something.
 */
function makeZip(entries) {
  const locals = [];
  const centrals = [];
  let offset = 0;

  for (const { name, data } of entries) {
    const nameBuf = Buffer.from(name, 'utf8');
    const crc = crc32(data);

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4);      // version needed
    local.writeUInt16LE(0, 6);       // flags
    local.writeUInt16LE(0, 8);       // method: stored
    local.writeUInt16LE(0, 10);      // mod time
    local.writeUInt16LE(0x0021, 12); // mod date: 1980-01-01
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(data.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(nameBuf.length, 26);
    local.writeUInt16LE(0, 28);
    locals.push(local, nameBuf, data);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4);      // version made by
    central.writeUInt16LE(20, 6);      // version needed
    central.writeUInt16LE(0, 8);
    central.writeUInt16LE(0, 10);
    central.writeUInt16LE(0, 12);
    central.writeUInt16LE(0x0021, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(data.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(nameBuf.length, 28);
    central.writeUInt16LE(0, 30);     // extra
    central.writeUInt16LE(0, 32);     // comment
    central.writeUInt16LE(0, 34);     // disk start
    central.writeUInt16LE(0, 36);     // internal attrs
    central.writeUInt32LE(0, 38);     // external attrs
    central.writeUInt32LE(offset, 42);
    centrals.push(central, nameBuf);

    offset += 30 + nameBuf.length + data.length;
  }

  const centralBuf = Buffer.concat(centrals);
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(0, 4);
  eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(entries.length, 8);
  eocd.writeUInt16LE(entries.length, 10);
  eocd.writeUInt32LE(centralBuf.length, 12);
  eocd.writeUInt32LE(offset, 16);
  eocd.writeUInt16LE(0, 20);

  return Buffer.concat([...locals, centralBuf, eocd]);
}

function buildQtiZip() {
  return makeZip([
    { name: 'imsmanifest.xml', data: Buffer.from(qtiManifest(), 'utf8') },
    { name: `${QUIZ_ID}/${QUIZ_ID}.xml`, data: Buffer.from(qtiAssessment(), 'utf8') },
    { name: `${QUIZ_ID}/assessment_meta.xml`, data: Buffer.from(qtiMeta(), 'utf8') }
  ]);
}

// ── CSV ─────────────────────────────────────────────────────────────────────

/**
 * Column layout every CSV-to-QTI converter and every spreadsheet workflow for
 * Canvas expects: A question type, B unused but present, C points, D the
 * question body, E the number of the correct choice, F onward the choices.
 */
function buildCsv() {
  const rows = [];
  for (const item of ITEMS) {
    const body = item.stimulus
      ? `${stimulusPlain(STIMULI[item.stimulus]).join('\n\n')}\n\n${item.stem}`
      : item.stem;
    rows.push([
      'MC',
      '',
      String(META.pointsPerQuestion),
      body,
      String(item.answer + 1),
      ...item.choices
    ].map(csvCell).join(','));
  }
  return rows.join('\r\n') + '\r\n';
}

// ── markdown ────────────────────────────────────────────────────────────────

function renderStimulus(st) {
  const out = [];
  out.push(`### ${st.label}`);
  out.push('');
  out.push(`**${st.title}**`);
  out.push('');
  if (st.imageUrl) {
    out.push(`![${st.title}](${st.imageUrl})`);
    out.push('');
  }
  if (st.imageCredit) {
    out.push(`*${st.imageCredit}*`);
    out.push('');
  }
  if (st.attribution) {
    out.push(`*${st.attribution}*`);
    out.push('');
  }
  for (const p of st.body) {
    out.push(p);
    out.push('');
  }
  if (st.table) {
    out.push(`| ${st.table.head.join(' | ')} |`);
    out.push(`| ${st.table.head.map(() => '---').join(' | ')} |`);
    for (const row of st.table.rows) out.push(`| ${row.join(' | ')} |`);
    out.push('');
  }
  return out;
}

function renderItem(item, { withKey }) {
  const out = [];
  out.push(`**${item.n}.** ${item.stem}`);
  out.push('');
  item.choices.forEach((choice, i) => {
    const mark = withKey && i === item.answer ? ' **(correct)**' : '';
    out.push(`- **${LETTERS[i]}.** ${choice}${mark}`);
  });
  out.push('');
  if (withKey) {
    out.push(`> **Answer: ${LETTERS[item.answer]}.** ${item.rationale}`);
    out.push('>');
    out.push(`> *Distractor to watch:* ${item.trap}`);
    out.push('');
  }
  return out;
}

function renderExam({ withKey }) {
  const out = [];
  const sets = stimulusSets();

  out.push(`# ${META.title}${withKey ? ': Answer Key and Blueprint' : ''}`);
  out.push('');
  out.push(`*${META.course}*`);
  out.push('');
  out.push(`${META.questionCount} multiple-choice questions, ${META.pointsPerQuestion} point each. Suggested time: ${META.suggestedMinutes} minutes.`);
  out.push('');

  if (!withKey) {
    out.push('Name: ______________________________    Period: ________    Date: ________');
    out.push('');
    out.push('## Directions');
    out.push('');
    for (const line of META.studentInstructions) {
      out.push(`- ${line}`);
    }
    out.push('');
  }

  if (withKey) {
    out.push('## Blueprint');
    out.push('');
    out.push('| Q | Part | Day | Skill | Type | Answer |');
    out.push('| --- | --- | --- | --- | --- | --- |');
    for (const item of ITEMS) {
      out.push(`| ${item.n} | ${item.part} | ${item.day} | ${item.skill} | ${item.type} | ${LETTERS[item.answer]} |`);
    }
    out.push('');

    const byDay = {};
    const bySkill = {};
    const byType = {};
    for (const item of ITEMS) {
      byDay[item.day] = (byDay[item.day] || 0) + 1;
      bySkill[item.skill] = (bySkill[item.skill] || 0) + 1;
      byType[item.type] = (byType[item.type] || 0) + 1;
    }
    out.push('### Coverage');
    out.push('');
    out.push('| Foundations day | Questions |');
    out.push('| --- | --- |');
    const dayNames = {
      F1: 'F1, Geography Shapes Civilization',
      F2: 'F2, Belief Systems and Cultural Exchange',
      F3: 'F3, States, Power and Social Organization',
      F4: 'F4, Trade Networks and Innovation',
      F5: 'F5, The World at c.1200'
    };
    for (const key of Object.keys(dayNames)) {
      out.push(`| ${dayNames[key]} | ${byDay[key] || 0} |`);
    }
    out.push('');
    out.push('Foundations 0 is assessed through Part III rather than as recall, because the six thinking skills are what Day 0 teaches.');
    out.push('');
    out.push('| Skill | Questions |');
    out.push('| --- | --- |');
    for (const [k, v] of Object.entries(bySkill).sort((a, b) => b[1] - a[1])) {
      out.push(`| ${k} | ${v} |`);
    }
    out.push('');
    out.push('| Question type | Questions |');
    out.push('| --- | --- |');
    const typeNames = { traditional: 'Traditional MC', sbmc: 'Stimulus-based MC', hts: 'Skill identification' };
    for (const [k, v] of Object.entries(byType)) {
      out.push(`| ${typeNames[k] || k} | ${v} |`);
    }
    out.push('');

    out.push('### Answer string');
    out.push('');
    out.push('```');
    for (let row = 0; row < 4; row++) {
      const slice = ITEMS.slice(row * 10, row * 10 + 10);
      out.push(slice.map(i => `${String(i.n).padStart(2, ' ')}. ${LETTERS[i.answer]}`).join('   '));
    }
    out.push('```');
    out.push('');
  }

  for (const part of META.parts) {
    out.push(`## ${part.title}`);
    out.push('');
    out.push(part.blurb);
    out.push('');

    if (part.id === 'II') {
      for (const set of sets) {
        out.push(...renderStimulus(set.stimulus));
        for (const item of set.items) out.push(...renderItem(item, { withKey }));
      }
    } else {
      for (const item of itemsInPart(part.id)) out.push(...renderItem(item, { withKey }));
    }
  }

  if (withKey) {
    out.push('## Design notes');
    out.push('');
    out.push('**Why the mix.** Sixteen traditional items, sixteen stimulus-based, eight skill-identification. Stimulus items are about 40 per cent of the exam rather than the near-total share the national exam uses, which leaves genuine room for the reading and the term tables to pay off. Move the ratio by moving items between parts in the content module; the blueprint table regenerates itself.');
    out.push('');
    out.push('**Where the sources come from.** Three of the six sets use a source students met in a Foundations lesson: the Nile from orbit, the Buddhism spread map, and the Song celadon from Kilwa. Three are new to them: the Cyrus Cylinder source note, a passage on paper written for this exam, and a data table compiled from the unit. That split tests transfer without making the whole exam an unseen-source reading test.');
    out.push('');
    out.push('**No invented quotations.** Nothing here attributes words to a real document that the document does not contain. Real objects appear as accurate source notes, and authored passages say they were written for this exam. If you would rather have a literal translated excerpt in a set, replace the entry in `STIMULI` and the items above it will still work.');
    out.push('');
    out.push('**Part III is the part to reuse.** Those eight items are the closest thing the course has to a direct measure of whether students can tell a causation statement from a correlation, a thesis from a summary, or contextualization from an introduction. The stems are portable: swap the subject and keep the four sentence shapes, and you have a Unit 1 version.');
    out.push('');
    out.push('**Known distractor design.** In several items the tempting wrong answer is factually true and simply answers a neighbouring question, which is the failure mode most AP students actually have. Question 30 and question 40 are both built that way on purpose, and both are worth reviewing aloud.');
    out.push('');
    out.push('**Two cues the exam deliberately does not give.** The key is spread evenly across all four positions, and the correct answer is almost never the longest choice on offer. Both were wrong in the first draft, badly: 23 of the 40 keys were B, no key was D, and 34 of 40 correct answers were the longest option, which together would have let a student who knew nothing score well. `scripts/test/foundations-exam.test.js` now fails the build if either drifts back, so keep distractors substantial when you edit an item.');
    out.push('');
    out.push('**Images in Canvas.** The Nile photograph and the celadon bowl are hotlinked from Wikimedia Commons and the Buddhism map from the course site, so they render inside a Canvas question without an upload. If your Canvas blocks external images, upload the three files to the course and repoint `imageUrl` in the content module.');
    out.push('');
  }

  return out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
}

// ── emit ────────────────────────────────────────────────────────────────────

function outputs() {
  return [
    { file: `${BASE}.md`, data: Buffer.from(renderExam({ withKey: false }), 'utf8') },
    { file: `${BASE}-key.md`, data: Buffer.from(renderExam({ withKey: true }), 'utf8') },
    { file: `${BASE}.csv`, data: Buffer.from(buildCsv(), 'utf8') },
    { file: `${BASE}-qti.zip`, data: buildQtiZip() }
  ];
}

function main() {
  let drift = 0;
  if (!CHECK) fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const { file, data } of outputs()) {
    const target = path.join(OUT_DIR, file);
    if (CHECK) {
      let current = null;
      try { current = fs.readFileSync(target); } catch { /* missing counts as drift */ }
      if (!current || !current.equals(data)) {
        console.error(`DRIFT  ${path.relative(ROOT, target)}${current ? '' : ' (missing)'}`);
        drift++;
      } else {
        console.log(`ok     ${path.relative(ROOT, target)}`);
      }
    } else {
      fs.writeFileSync(target, data);
      console.log(`wrote  ${path.relative(ROOT, target)}  ${data.length} bytes`);
    }
  }

  if (CHECK) {
    if (drift) {
      console.error(`\n${drift} generated exam artifact(s) differ from the content module.`);
      console.error('Run: node scripts/build-foundations-exam.js');
      process.exit(1);
    }
    console.log('\nFoundations exam artifacts are reproducible.');
  } else {
    console.log(`\n${ITEMS.length} questions rendered.`);
  }
}

// Required by scripts/test/foundations-exam.test.js, which asserts on the
// rendered strings directly rather than re-reading the generated files.
module.exports = {
  OUT_DIR, BASE, QUIZ_ID,
  qtiAssessment, qtiManifest, qtiMeta, buildQtiZip, buildCsv, renderExam,
  stimulusSets
};

if (require.main === module) main();
