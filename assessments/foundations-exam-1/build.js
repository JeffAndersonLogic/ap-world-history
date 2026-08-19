'use strict';
/**
 * Builds the Canvas QTI 1.2 package and the teacher answer key from questions.js.
 *
 * QTI 1.2 is what Canvas Classic Quizzes imports: Course Settings > Import Course
 * Content > QTI .zip. The package is generated rather than hand-written for the same
 * reason everything else in this repo is: a hand-edited copy drifts from the source
 * and nothing tells you which version the students sat.
 */
const fs   = require('fs');
const path = require('path');
const cp   = require('child_process');

const questions = require('./questions.js');
const stimuli   = require('./stimuli.js');

const LETTERS = ['A', 'B', 'C', 'D'];
const QUIZ_ID = 'g5f0undat10nsexam1';
const TITLE   = 'Foundations Exam 1';
const DESC    = 'Foundations 1 through 5. Forty multiple-choice questions, one point each. '
              + 'Part A is recall and applied recall, Part B is stimulus-based, and Part C applies '
              + 'the historical thinking skills to Foundations content.';

const esc = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

// The HTML body of one question: stimulus block first when there is one, then the stem.
function questionHtml(q) {
  let html = '';
  if (q.stim) {
    const s = stimuli[q.stim];
    const body = s.parts.map(t => `<p>${esc(t)}</p>`).join('<p>&hellip;</p>');
    html += `<p><strong>Read the passage, then answer the question.</strong></p>`
         +  `<blockquote>${body}<p><em>Source: ${esc(s.cite)}</em></p></blockquote>`;
  }
  html += `<p>${esc(q.stem)}</p>`;
  return html;
}

function itemXml(q) {
  const ident = `q${String(q.n).padStart(2, '0')}`;
  const labels = q.options.map((opt, j) => `
            <response_label ident="${ident}_${LETTERS[j]}">
              <material><mattext texttype="text/plain">${esc(opt)}</mattext></material>
            </response_label>`).join('');

  return `
    <item ident="${ident}" title="Question ${q.n}">
      <itemmetadata>
        <qtimetadata>
          <qtimetadatafield><fieldlabel>question_type</fieldlabel><fieldentry>multiple_choice_question</fieldentry></qtimetadatafield>
          <qtimetadatafield><fieldlabel>points_possible</fieldlabel><fieldentry>1.0</fieldentry></qtimetadatafield>
          <qtimetadatafield><fieldlabel>assessment_question_identifierref</fieldlabel><fieldentry>${ident}_ref</fieldentry></qtimetadatafield>
        </qtimetadata>
      </itemmetadata>
      <presentation>
        <material><mattext texttype="text/html">${esc(questionHtml(q))}</mattext></material>
        <response_lid ident="response1" rcardinality="Single">
          <render_choice>${labels}
          </render_choice>
        </response_lid>
      </presentation>
      <resprocessing>
        <outcomes><decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/></outcomes>
        <respcondition continue="No">
          <conditionvar><varequal respident="response1">${ident}_${LETTERS[q.answer]}</varequal></conditionvar>
          <setvar action="Set" varname="SCORE">100</setvar>
        </respcondition>
      </resprocessing>
    </item>`;
}

const assessmentXml = `<?xml version="1.0" encoding="UTF-8"?>
<questestinterop xmlns="http://www.imsglobal.org/xsd/ims_qtiasiv1p2"
                 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                 xsi:schemaLocation="http://www.imsglobal.org/xsd/ims_qtiasiv1p2 http://www.imsglobal.org/xsd/ims_qtiasiv1p2p1.xsd">
  <assessment ident="${QUIZ_ID}" title="${esc(TITLE)}">
    <qtimetadata>
      <qtimetadatafield><fieldlabel>cc_maxattempts</fieldlabel><fieldentry>1</fieldentry></qtimetadatafield>
    </qtimetadata>
    <section ident="root_section">${questions.map(itemXml).join('')}
    </section>
  </assessment>
</questestinterop>
`;

const metaXml = `<?xml version="1.0" encoding="UTF-8"?>
<quiz identifier="${QUIZ_ID}"
      xmlns="http://canvas.instructure.com/xsd/cccv1p0"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://canvas.instructure.com/xsd/cccv1p0 https://canvas.instructure.com/xsd/cccv1p0.xsd">
  <title>${esc(TITLE)}</title>
  <description>${esc(DESC)}</description>
  <shuffle_answers>false</shuffle_answers>
  <scoring_policy>keep_highest</scoring_policy>
  <hide_results></hide_results>
  <quiz_type>assignment</quiz_type>
  <points_possible>${questions.length}.0</points_possible>
  <allowed_attempts>1</allowed_attempts>
  <one_question_at_a_time>false</one_question_at_a_time>
  <cant_go_back>false</cant_go_back>
  <show_correct_answers>true</show_correct_answers>
  <anonymous_submissions>false</anonymous_submissions>
  <could_be_locked>false</could_be_locked>
  <available>false</available>
</quiz>
`;

const manifestXml = `<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="foundations_exam_1_manifest"
          xmlns="http://www.imsglobal.org/xsd/imsccv1p1/imscp_v1p1"
          xmlns:lom="http://ltsc.ieee.org/xsd/imsccv1p1/LOM/resource"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.imsglobal.org/xsd/imsccv1p1/imscp_v1p1 http://www.imsglobal.org/profile/cc/ccv1p1/ccv1p1_imscp_v1p2_v1p0.xsd">
  <metadata>
    <schema>IMS Content</schema>
    <schemaversion>1.1.3</schemaversion>
  </metadata>
  <organizations/>
  <resources>
    <resource identifier="${QUIZ_ID}" type="imsqti_xmlv1p2">
      <file href="${QUIZ_ID}/${QUIZ_ID}.xml"/>
      <dependency identifierref="${QUIZ_ID}_dependency"/>
    </resource>
    <resource identifier="${QUIZ_ID}_dependency" type="associatedcontent/imscc_xmlv1p1/learning-application-resource" href="${QUIZ_ID}/assessment_meta.xml">
      <file href="${QUIZ_ID}/assessment_meta.xml"/>
    </resource>
  </resources>
</manifest>
`;

// ── write the package ────────────────────────────────────────────────────────
const out = path.join(__dirname, 'build');
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(path.join(out, QUIZ_ID), { recursive: true });
fs.writeFileSync(path.join(out, 'imsmanifest.xml'), manifestXml);
fs.writeFileSync(path.join(out, QUIZ_ID, `${QUIZ_ID}.xml`), assessmentXml);
fs.writeFileSync(path.join(out, QUIZ_ID, 'assessment_meta.xml'), metaXml);

const zipPath = path.join(__dirname, 'foundations-exam-1-canvas-qti.zip');
fs.rmSync(zipPath, { force: true });
cp.execSync(`cd ${JSON.stringify(out)} && zip -q -r ${JSON.stringify(zipPath)} . -x '.*'`);

// ── the teacher answer key ───────────────────────────────────────────────────
const PART_TITLES = {
  A: 'Part A · Recall and applied recall (Questions 1-20)',
  B: 'Part B · Stimulus-based multiple choice (Questions 21-35)',
  C: 'Part C · Historical thinking skills applied to content (Questions 36-40)'
};

let key = `# Foundations Exam 1 · Answer Key\n\n`
        + `Forty questions, one point each. Every rationale names the chapter section the\n`
        + `question is answerable from, so a challenged item can be checked against the text\n`
        + `students actually read.\n\n`
        + `Generated by \`node build.js\`. Do not hand-edit; edit \`questions.js\` and rebuild.\n\n`
        + `## At a glance\n\n| Q | Key | Chapter | Skill or target | Q | Key | Chapter | Skill or target |\n`
        + `|---|---|---|---|---|---|---|---|\n`;

for (let i = 0; i < 20; i++) {
  const l = questions[i], r = questions[i + 20];
  const cell = q => `${q.n} | **${LETTERS[q.answer]}** | ${q.ch} | ${q.skill || q.target}`;
  key += `| ${cell(l)} | ${cell(r)} |\n`;
}

let currentPart = null;
for (const q of questions) {
  if (q.part !== currentPart) { currentPart = q.part; key += `\n## ${PART_TITLES[q.part]}\n`; }
  key += `\n### ${q.n}. ${LETTERS[q.answer]}\n\n`;
  if (q.stim) key += `*Stimulus: ${stimuli[q.stim].cite}*\n\n`;
  key += `**${q.stem}**\n\n`;
  q.options.forEach((o, j) => {
    key += `- ${LETTERS[j]}. ${o}${j === q.answer ? '  **← correct**' : ''}\n`;
  });
  key += `\n*Why:* ${q.why}\n\n*Source:* ${q.source}\n`;
}

fs.writeFileSync(path.join(__dirname, 'ANSWER-KEY.md'), key);

console.log(`Wrote ${path.relative(process.cwd(), zipPath)}`);
console.log(`Wrote ANSWER-KEY.md`);
console.log(`${questions.length} questions, ${questions.length} points.`);
