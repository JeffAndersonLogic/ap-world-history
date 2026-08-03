/**
 * Teacher Hub analysis layer, offline test harness.
 *
 *   node scripts/test-teacher-hub-analysis.js
 *
 * Runs tools/teacher-hub/google-apps-script/Code.gs in Node with stubbed Google services,
 * against synthetic response rows. No network and no dependencies.
 *
 * The privacy assertions are the important ones. The web app has to be deployed as "Anyone"
 * to be readable from the static Teacher Hub, so any change that lets a student name or raw
 * response text into the doGet payload publishes it. Those checks are here to fail loudly if
 * that ever regresses.
 */
const fs = require('fs');
const path = require('path');

const CODE = fs.readFileSync(
  path.join(__dirname, '..', 'tools', 'teacher-hub', 'google-apps-script', 'Code.gs'),
  'utf8'
);

// ── Synthetic response sheet ─────────────────────────────────────────────────
const HEADERS = ['Timestamp', 'Student Name', 'Class Period', 'Unit', 'Topic',
  'Response Type', 'Prompt ID', 'Student Response', 'Confidence Level'];

const U1 = 'Unit 1 - The Global Tapestry';
const U6 = 'Unit 6 - Consequences of Industrialization';

const ROWS = [
  ['2026-07-20T14:00:00Z', 'Ana Ruiz', 'Silver 1', U1, '1.1 - Song China', 'Checkpoint 1', '1.1-checkpoint-1',
    'The Song used the civil service exam to pick officials because it created a loyal bureaucracy tied to the emperor rather than hereditary aristocrats, which strengthened central control.', '4'],
  ['2026-07-20T14:01:00Z', 'Ben Okafor', 'Silver 1', U1, '1.1 - Song China', 'Checkpoint 1', '1.1-checkpoint-1',
    'Champa rice and the Grand Canal.', '2'],
  ['2026-07-20T14:02:00Z', 'Cara Lin', 'Silver 2', U1, '1.1 - Song China', 'Checkpoint 1', '1.1-checkpoint-1',
    '', '1'],
  ['2026-07-20T14:03:00Z', 'Dev Patel', 'Silver 2', U1, '1.1 - Song China', 'Evidence Lab', '1.1-evidence-lab',
    'Anyone could take the civil service exam so it was a pure meritocracy. Paper money replaced coins entirely in the Song economy.', '5'],
  ['2026-07-20T14:04:00Z', 'Ana Ruiz', 'Silver 1', U1, '1.1 - Song China', 'Evidence Lab', '1.1-evidence-lab',
    'The Grand Canal moved grain north, which meant cities like Kaifeng and Hangzhou could grow far beyond local food supply, and that led to commercialization.', '4'],
  // A second topic, to prove topic filtering and topic-agnostic detection
  ['2026-07-21T09:00:00Z', 'Ana Ruiz', 'Silver 1', U6, '6.6 - Causes of Migration', 'Checkpoint 1', '6.6-checkpoint-1',
    'Irish migration to the United States rose sharply after the Great Famine because crop failure removed any means of subsistence, so families left for industrial cities.', '4'],
  ['2026-07-21T09:01:00Z', 'Ben Okafor', 'Silver 1', U6, '6.6 - Causes of Migration', 'Checkpoint 1', '6.6-checkpoint-1',
    'People moved a lot.', '2'],
  ['2026-07-21T09:02:00Z', 'Cara Lin', 'Green 4', U6, '6.6 - Causes of Migration', 'Checkpoint 1', '6.6-checkpoint-1',
    'Indentured servitude from India and China expanded after slavery ended because plantation owners in the Caribbean still wanted cheap labor, which led to large diaspora communities.', '3'],
  ['2026-07-21T09:03:00Z', 'Ana Ruiz', 'Green 4', U6, '6.6 - Causes of Migration', 'Evidence Lab', '6.6-evidence-lab',
    'The Great Famine in Ireland pushed families toward the United States because potato blight destroyed subsistence farming, which led to chain migration.', '4'],
  // Topic 1.10-style key, to prove "1.1" does not match "1.10"
  ['2026-07-22T09:00:00Z', 'Dev Patel', 'Silver 3', 'Unit 5 - Revolutions', '5.10 - Continuity and Change in the Industrial Age',
    'Checkpoint 2', '5.10-checkpoint-2', 'Industrialization continued to reshape labor because factories concentrated workers in cities.', '5']
];

// ── Google service stubs ─────────────────────────────────────────────────────
const sheets = {};

function makeSheet(name, values) {
  const data = values ? values.map(r => r.slice()) : [];
  return {
    name,
    _data: data,
    getLastRow() { return this._data.length; },
    getDataRange() {
      const self = this;
      return { getValues() { return self._data.map(r => r.slice()); } };
    },
    clear() { this._data = []; return this; },
    getRange(row, col, numRows, numCols) {
      const self = this;
      return {
        setValues(vals) {
          for (let i = 0; i < vals.length; i++) {
            const target = row - 1 + i;
            while (self._data.length <= target) self._data.push([]);
            for (let j = 0; j < vals[i].length; j++) self._data[target][col - 1 + j] = vals[i][j];
          }
          return this;
        },
        setFontWeight() { return this; }
      };
    },
    autoResizeColumns() { return this; },
    setColumnWidth() { return this; },
    setFrozenRows() { return this; }
  };
}

sheets['Form Responses 1'] = makeSheet('Form Responses 1', [HEADERS].concat(ROWS));

const scriptProperties = {};

global.SpreadsheetApp = {
  getActive: () => ({
    getSheetByName: (n) => sheets[n] || null,
    insertSheet: (n) => { sheets[n] = makeSheet(n, []); return sheets[n]; }
  }),
  getUi: () => { throw new Error('Cannot call SpreadsheetApp.getUi() from this context.'); }
};
global.PropertiesService = {
  getScriptProperties: () => ({
    getProperty: (k) => (k in scriptProperties ? scriptProperties[k] : null),
    setProperty: (k, v) => { scriptProperties[k] = v; }
  })
};
let lastMime = null;
global.ContentService = {
  MimeType: { JSON: 'application/json' },
  createTextOutput: (text) => ({ setMimeType(m) { lastMime = m; this._text = text; return this; }, getContent() { return text; } })
};
global.Utilities = { getUuid: () => 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee' };
global.HtmlService = { createHtmlOutput: () => ({ setTitle: () => ({}) }) };

// Load the script into this context
eval(CODE);

// ── Assertions ───────────────────────────────────────────────────────────────
let failures = 0;
function check(label, condition, detail) {
  if (condition) {
    console.log('  PASS  ' + label);
  } else {
    failures++;
    console.log('  FAIL  ' + label + (detail ? '\n          ' + detail : ''));
  }
}
const parse = (out) => JSON.parse(out.getContent());

console.log('\n── Token gate');
let res = parse(doGet({ parameter: {} }));
check('no token configured is rejected', res.ok === false && /Create Teacher Hub Access Token/.test(res.error), res.error);

scriptProperties.TEACHER_HUB_TOKEN = 'secret-token';
res = parse(doGet({ parameter: {} }));
check('missing token is rejected once configured', res.ok === false && /Invalid or missing/.test(res.error), res.error);
res = parse(doGet({ parameter: { token: 'wrong' } }));
check('wrong token is rejected', res.ok === false && /Invalid or missing/.test(res.error), res.error);

console.log('\n── Index mode');
res = parse(doGet({ parameter: { token: 'secret-token', mode: 'index' } }));
check('index returns ok', res.ok === true);
check('index finds all 10 rows', res.totalResponses === 10, 'got ' + res.totalResponses);
check('index lists real class periods', JSON.stringify(res.classPeriods) === JSON.stringify(['Green 4', 'Silver 1', 'Silver 2', 'Silver 3']), JSON.stringify(res.classPeriods));
check('index lists real response types', res.responseTypes.indexOf('Evidence Lab') >= 0 && res.responseTypes.indexOf('Checkpoint 1') >= 0);
check('index lists 3 topics', res.topics.length === 3, JSON.stringify(res.topics));

console.log('\n── De-identification');
res = parse(doGet({ parameter: { token: 'secret-token', topic: '1.1 - Song China' } }));
const raw = JSON.stringify(res);
check('no raw rows array in payload', res.rows === undefined);
check('no student name appears anywhere', !/Ana Ruiz|Ben Okafor|Cara Lin|Dev Patel/.test(raw));
check('flags use numbered labels', res.studentFlags.length > 0 && /^Student \d+$/.test(res.studentFlags[0].label), JSON.stringify(res.studentFlags[0]));
check('withheld marker present', res.identifiableDataWithheld === true);
check('response text withheld by default', res.responseTextIncluded === false, 'responseTextIncluded=' + res.responseTextIncluded);
check('no raw response text in default payload', !/loyal bureaucracy tied to the emperor/.test(raw));
check('prompt still ships usable instructions', /instructional coach/.test(res.aiPrompt) && /reteach activity/.test(res.aiPrompt));
check('prompt points at the Sheet for the response set', /TeacherHub_Analysis/.test(res.aiPrompt));

console.log('\n── Topic filtering');
check('1.1 filter returns only its 5 responses', res.summary.totalResponses === 5, 'got ' + res.summary.totalResponses);
check('distinct student count is 4', res.summary.studentCount === 4, 'got ' + res.summary.studentCount);
let r66 = parse(doGet({ parameter: { token: 'secret-token', topic: '6.6 - Causes of Migration' } }));
check('6.6 filter returns its 4 responses', r66.summary.totalResponses === 4, 'got ' + r66.summary.totalResponses);
let rShort = parse(doGet({ parameter: { token: 'secret-token', topic: '1.1' } }));
check('bare "1.1" matches and does NOT catch 1.10', rShort.summary.totalResponses === 5, 'got ' + rShort.summary.totalResponses);
let r510 = parse(doGet({ parameter: { token: 'secret-token', topic: '5.10' } }));
check('bare "5.10" matches only 5.10', r510.summary.totalResponses === 1, 'got ' + r510.summary.totalResponses);
let rAll = parse(doGet({ parameter: { token: 'secret-token', topic: 'All Topics' } }));
check('All Topics returns all 10', rAll.summary.totalResponses === 10, 'got ' + rAll.summary.totalResponses);
let rPeriod = parse(doGet({ parameter: { token: 'secret-token', topic: 'All Topics', classPeriod: 'Silver 1' } }));
check('class period filter works', rPeriod.summary.totalResponses === 5, 'got ' + rPeriod.summary.totalResponses);
let rType = parse(doGet({ parameter: { token: 'secret-token', topic: '1.1 - Song China', responseType: 'Evidence Lab' } }));
check('response type filter works', rType.summary.totalResponses === 2, 'got ' + rType.summary.totalResponses);

console.log('\n── Analysis quality');
check('blank response counted', res.summary.blankResponseCount === 1, 'got ' + res.summary.blankResponseCount);
check('short response counted', res.summary.shortResponseCount === 1, 'got ' + res.summary.shortResponseCount);
check('low confidence counted', res.summary.lowConfidenceCount === 2, 'got ' + res.summary.lowConfidenceCount);
check('average confidence computed', res.summary.averageConfidence === 3.2, 'got ' + res.summary.averageConfidence);
check('evidence detected without a per-topic bank (1.1)',
  res.commonEvidence.some(e => /Grand Canal|Champa/.test(e)), JSON.stringify(res.commonEvidence));
check('evidence detected for a topic with NO configured bank (6.6)',
  r66.commonEvidence.length > 0, JSON.stringify(r66.commonEvidence));
check('skill gaps are generic and fire', res.skillGaps.length > 0, JSON.stringify(res.skillGaps));
check('reteach suggestions produced', res.reteachSuggestions.length > 0);
check('no-data filter is honest', (() => {
  const empty = parse(doGet({ parameter: { token: 'secret-token', topic: '9.9 - Continuity and Change in a Globalized World' } }));
  return empty.summary.totalResponses === 0 && /No matching responses/.test(empty.classSummary);
})());

console.log('\n── Settings-driven misconceptions');
check('no misconceptions before settings seeded', res.topMisconceptions.length === 0, JSON.stringify(res.topMisconceptions));
ensureTeacherHubTabs();
const seeded = parse(doGet({ parameter: { token: 'secret-token', topic: '1.1 - Song China' } }));
check('seeded 1.1 misconceptions now detected',
  seeded.topMisconceptions.some(m => /meritocracy/i.test(m)), JSON.stringify(seeded.topMisconceptions));
check('settings evidence terms used',
  seeded.commonEvidence.some(e => /civil service exam/i.test(e)), JSON.stringify(seeded.commonEvidence));

console.log('\n── Response text opt-in');
scriptProperties.TEACHER_HUB_INCLUDE_RESPONSE_TEXT = 'true';
const optedIn = parse(doGet({ parameter: { token: 'secret-token', topic: '1.1 - Song China' } }));
check('opt-in includes anonymized response text', optedIn.responseTextIncluded === true && /loyal bureaucracy tied to the emperor/.test(optedIn.aiPrompt));
check('opt-in still hides names', !/Ana Ruiz|Ben Okafor/.test(JSON.stringify(optedIn)));
scriptProperties.TEACHER_HUB_INCLUDE_RESPONSE_TEXT = 'false';
const optedOut = parse(doGet({ parameter: { token: 'secret-token', topic: '1.1 - Song China' } }));
check('toggling back off withholds text again', optedOut.responseTextIncluded === false && !/loyal bureaucracy/.test(JSON.stringify(optedOut)));

console.log('\n── Sheet write path');
parse(doGet({ parameter: { token: 'secret-token', topic: '1.1 - Song China', write: 'true' } }));
const flagTab = sheets['TeacherHub_StudentFlags']._data;
check('flags tab written with header', flagTab[0][0] === 'Label' && flagTab[0][1] === 'Student');
check('flags tab contains REAL names', flagTab.slice(1).some(r => /Ana Ruiz|Ben Okafor|Cara Lin|Dev Patel/.test(String(r[1]))));
check('flag labels in sheet match labels sent to hub', (() => {
  const hub = parse(doGet({ parameter: { token: 'secret-token', topic: '1.1 - Song China' } })).studentFlags;
  const sheetLabels = flagTab.slice(1).map(r => r[0]);
  return hub.every((f, i) => f.label === sheetLabels[i]);
})());
const analysisTab = sheets['TeacherHub_Analysis']._data;
check('analysis tab written', analysisTab.length > 5 && analysisTab[0][0] === 'Field');
check('anonymous AI prompt is written to the Sheet',
  analysisTab.some(r => r[0] === 'anonymousAiPrompt' && /loyal bureaucracy tied to the emperor/.test(String(r[1]))));
check('named AI prompt stays in the Sheet only',
  analysisTab.some(r => r[0] === 'namedAiPrompt' && /Ana Ruiz/.test(String(r[1]))));

console.log('\n── Missing-column error');
sheets['Form Responses 1'] = makeSheet('Form Responses 1', [['Timestamp', 'Name'], ['x', 'y']]);
res = parse(doGet({ parameter: { token: 'secret-token' } }));
check('missing required columns reported clearly', res.ok === false && /missing required columns/i.test(res.error), res.error);
sheets['Form Responses 1'] = makeSheet('Form Responses 1', [HEADERS].concat(ROWS));
delete sheets['Form Responses 1'];
res = parse(doGet({ parameter: { token: 'secret-token' } }));
check('missing response sheet reported clearly', res.ok === false && /Missing response sheet/.test(res.error), res.error);

console.log('\n' + (failures ? failures + ' FAILURE(S)' : 'All Apps Script checks passed.') + '\n');
process.exit(failures ? 1 : 0);
