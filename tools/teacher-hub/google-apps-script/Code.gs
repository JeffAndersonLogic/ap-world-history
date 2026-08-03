/**
 * BeHistorical Teacher Hub Analysis Layer
 *
 * Paste this file into Extensions > Apps Script inside the Google Sheet that receives
 * BeHistorical Student Response Form submissions.
 *
 * What it does:
 * - Reads Google Form responses from the active response Sheet.
 * - Filters by Unit, Topic, Response Type, and Class Period.
 * - Generates a structured Teacher Hub payload.
 * - Writes the full, named analysis to TeacherHub_Analysis and TeacherHub_StudentFlags,
 *   which only people with access to this Sheet can read.
 * - Serves a de-identified version of that analysis to the Teacher Hub through doGet().
 *
 * Privacy model:
 * The Teacher Hub is a static GitHub Pages site. Its browser fetch cannot send Google
 * login cookies, so the web app has to be deployed as "Anyone" to be reachable at all.
 * Because of that, doGet() never returns student names or raw response text. It returns
 * counts, patterns, and numbered student labels. The names live in this Sheet, matched to
 * those same numbers, in the TeacherHub_StudentFlags tab.
 *
 * Access to doGet() requires a token. Create one from the BeHistorical menu.
 */

const BEHISTORICAL_CONFIG = {
  responseSheetName: 'Form Responses 1',
  analysisSheetName: 'TeacherHub_Analysis',
  studentFlagsSheetName: 'TeacherHub_StudentFlags',
  settingsSheetName: 'TeacherHub_Settings',
  shortResponseThreshold: 80,
  lowConfidenceThreshold: 3,
  minClaimWordCount: 25,
  skillGapThreshold: 0.7,
  maxFlags: 40,
  tokenProperty: 'TEACHER_HUB_TOKEN',
  responseTextProperty: 'TEACHER_HUB_INCLUDE_RESPONSE_TEXT',
  responseTypes: [
    'First and 10',
    'AP Skill Builder',
    'Checkpoint 1',
    'Evidence Lab',
    'Primary Source',
    'BeInTheRoom',
    'Checkpoint 2'
  ]
};

const HEADER_ALIASES = {
  timestamp: ['Timestamp'],
  studentName: ['Student Name', 'Name', 'Student'],
  classPeriod: ['Class Period', 'Period'],
  unit: ['Unit'],
  topic: ['Topic'],
  responseType: ['Response Type', 'Question Type', 'Activity'],
  promptId: ['Prompt ID', 'Prompt Id', 'PromptID'],
  studentResponse: ['Student Response', 'Response', 'Written Response'],
  confidenceLevel: ['Confidence Level', 'Confidence', 'Confidence Check'],
  aiCoachingReflection: ['AI Coaching Reflection', 'AI Reflection', 'Revision Notes']
};

const ALL_RESPONSE_TYPES = 'All Response Types';
const ALL_PERIODS = 'All Periods';
const ALL_TOPICS = 'All Topics';

/* ─── Menu ──────────────────────────────────────────────────────────────────── */

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('BeHistorical')
    .addItem('Analyze Selected Filters...', 'showAnalyzeSidebar')
    .addItem('Analyze Everything', 'analyzeEverything')
    .addSeparator()
    .addItem('Create/Repair Teacher Hub Tabs', 'ensureTeacherHubTabs')
    .addItem('Create Teacher Hub Access Token', 'createTeacherHubToken')
    .addItem('Show Teacher Hub Access Token', 'showTeacherHubToken')
    .addSeparator()
    .addItem('Response Text Over Web App (On/Off)', 'toggleResponseTextSharing')
    .addToUi();
}

/**
 * Controls whether the web app may return student response text. Off by default. Turning it
 * on publishes anonymized student writing to anyone holding the endpoint URL and token.
 */
function toggleResponseTextSharing() {
  const ui = SpreadsheetApp.getUi();
  const properties = PropertiesService.getScriptProperties();
  const current = responseTextAllowed_();

  if (current) {
    properties.setProperty(BEHISTORICAL_CONFIG.responseTextProperty, 'false');
    ui.alert('Response text is now withheld', 'The Teacher Hub will show the analysis and the prompt instructions, but not student writing. The full anonymized prompt stays on the ' + BEHISTORICAL_CONFIG.analysisSheetName + ' tab.', ui.ButtonSet.OK);
    return;
  }

  const confirm = ui.alert(
    'Send student response text to the Teacher Hub?',
    'The web app must be deployed as "Anyone" to be readable from the Teacher Hub, so turning this on means anyone with the endpoint URL and token can read your students\' writing. Names stay hidden, but anonymous writing can still identify its author.\n\nLeave this off unless you have checked it against your school\'s privacy expectations.',
    ui.ButtonSet.YES_NO
  );
  if (confirm !== ui.Button.YES) return;
  properties.setProperty(BEHISTORICAL_CONFIG.responseTextProperty, 'true');
  ui.alert('Response text enabled', 'The Teacher Hub will now include anonymized response text in its AI prompt. Turn this off again from the same menu item.', ui.ButtonSet.OK);
}

function createTeacherHubToken() {
  const ui = SpreadsheetApp.getUi();
  const properties = PropertiesService.getScriptProperties();
  const existing = properties.getProperty(BEHISTORICAL_CONFIG.tokenProperty);
  if (existing) {
    const confirm = ui.alert(
      'Replace existing token?',
      'A Teacher Hub token already exists. Creating a new one immediately stops the old one from working, and you will need to paste the new token into the Teacher Hub.',
      ui.ButtonSet.YES_NO
    );
    if (confirm !== ui.Button.YES) return;
  }
  const token = Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().replace(/-/g, '').slice(0, 12);
  properties.setProperty(BEHISTORICAL_CONFIG.tokenProperty, token);
  ui.alert('Teacher Hub access token', token + '\n\nCopy this now and paste it into the Teacher Hub sign-in screen.', ui.ButtonSet.OK);
}

function showTeacherHubToken() {
  const ui = SpreadsheetApp.getUi();
  const token = PropertiesService.getScriptProperties().getProperty(BEHISTORICAL_CONFIG.tokenProperty);
  if (!token) {
    ui.alert('No token yet', 'Run BeHistorical > Create Teacher Hub Access Token first.', ui.ButtonSet.OK);
    return;
  }
  ui.alert('Teacher Hub access token', token, ui.ButtonSet.OK);
}

function analyzeEverything() {
  const ui = SpreadsheetApp.getUi();
  const payload = buildTeacherHubAnalysis_({
    unit: '',
    topic: ALL_TOPICS,
    responseType: ALL_RESPONSE_TYPES,
    classPeriod: ALL_PERIODS
  });
  writeTeacherHubAnalysis_(payload);
  ui.alert(
    'Teacher Hub analysis updated',
    payload.summary.totalResponses + ' responses analyzed across all topics.\n\nSee the ' +
      BEHISTORICAL_CONFIG.analysisSheetName + ' and ' + BEHISTORICAL_CONFIG.studentFlagsSheetName + ' tabs.',
    ui.ButtonSet.OK
  );
}

function showAnalyzeSidebar() {
  const index = buildFilterIndex_();
  const optionList = function (values) {
    return values.map(function (value) { return '<option>' + escapeForHtml_(value) + '</option>'; }).join('');
  };
  const html = HtmlService.createHtmlOutput(
    '<div style="font-family:Arial,sans-serif;padding:14px;line-height:1.4">' +
    '<h2 style="margin-top:0">BeHistorical Analysis</h2>' +
    '<label>Topic<br><select id="topic" style="width:100%">' + optionList([ALL_TOPICS].concat(index.topics)) + '</select></label><br><br>' +
    '<label>Response Type<br><select id="responseType" style="width:100%">' + optionList([ALL_RESPONSE_TYPES].concat(index.responseTypes)) + '</select></label><br><br>' +
    '<label>Class Period<br><select id="classPeriod" style="width:100%">' + optionList([ALL_PERIODS].concat(index.classPeriods)) + '</select></label><br><br>' +
    '<button onclick="run()">Analyze</button>' +
    '<p id="status"></p>' +
    '<script>' +
    'function run(){' +
    "document.getElementById('status').textContent = 'Analyzing...';" +
    'google.script.run' +
    ".withSuccessHandler(function(result){ document.getElementById('status').textContent = result.summary.totalResponses + ' responses analyzed.'; })" +
    ".withFailureHandler(function(err){ document.getElementById('status').textContent = err.message || err; })" +
    '.analyzeWithFilters({' +
    "topic: document.getElementById('topic').value," +
    "responseType: document.getElementById('responseType').value," +
    "classPeriod: document.getElementById('classPeriod').value" +
    '});' +
    '}' +
    '</script>' +
    '</div>'
  ).setTitle('BeHistorical Analysis');
  SpreadsheetApp.getUi().showSidebar(html);
}

function analyzeWithFilters(filters) {
  const payload = buildTeacherHubAnalysis_({
    unit: filters.unit || '',
    topic: filters.topic || ALL_TOPICS,
    responseType: filters.responseType || ALL_RESPONSE_TYPES,
    classPeriod: filters.classPeriod || ALL_PERIODS
  });
  writeTeacherHubAnalysis_(payload);
  return { summary: { totalResponses: payload.summary.totalResponses } };
}

/* ─── Web app ───────────────────────────────────────────────────────────────── */

function doGet(e) {
  const params = (e && e.parameter) ? e.parameter : {};
  try {
    requireToken_(params.token);

    if (String(params.mode || '') === 'index') {
      const index = buildFilterIndex_();
      index.ok = true;
      return jsonResponse_(index);
    }

    const filters = {
      unit: params.unit || '',
      topic: params.topic || ALL_TOPICS,
      responseType: params.responseType || ALL_RESPONSE_TYPES,
      classPeriod: params.classPeriod || ALL_PERIODS
    };
    const payload = buildTeacherHubAnalysis_(filters);

    if (String(params.write || '').toLowerCase() === 'true') {
      writeTeacherHubAnalysis_(payload);
      payload.namedFlagsWritten = true;
    }

    return jsonResponse_(deidentifyPayload_(payload));
  } catch (error) {
    return jsonResponse_({ ok: false, error: error.message || String(error) });
  }
}

function requireToken_(supplied) {
  const expected = PropertiesService.getScriptProperties().getProperty(BEHISTORICAL_CONFIG.tokenProperty);
  if (!expected) {
    throw new Error('This endpoint has no access token configured. In the Google Sheet, run BeHistorical > Create Teacher Hub Access Token.');
  }
  if (String(supplied || '') !== expected) {
    throw new Error('Invalid or missing access token.');
  }
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload, null, 2))
    .setMimeType(ContentService.MimeType.JSON);
}

/** True only if the teacher has explicitly opted in from the BeHistorical menu. */
function responseTextAllowed_() {
  return String(PropertiesService.getScriptProperties().getProperty(BEHISTORICAL_CONFIG.responseTextProperty) || '')
    .toLowerCase() === 'true';
}

/**
 * Strips everything that could identify a student.
 *
 * Student flags keep their number and class period only. The same numbers appear in the
 * TeacherHub_StudentFlags tab next to real names, so the teacher can match them there.
 *
 * Raw response text is withheld by default too, not just names. Anonymous student writing
 * can still identify its author, and this endpoint is reachable by anyone with the URL.
 * The full anonymized prompt is always written to the TeacherHub_Analysis tab, so nothing
 * is lost; it just stays inside the Sheet. A teacher who has decided the risk is acceptable
 * can opt in with BeHistorical > Allow Response Text Over the Web App.
 */
function deidentifyPayload_(payload) {
  const includeText = responseTextAllowed_();
  return {
    ok: true,
    generatedAt: payload.generatedAt,
    source: payload.source,
    filters: payload.filters,
    summary: payload.summary,
    classSummary: payload.classSummary,
    commonEvidence: payload.commonEvidence,
    topMisconceptions: payload.topMisconceptions,
    misconceptionSource: payload.misconceptionSource,
    skillGaps: payload.skillGaps,
    reteachSuggestions: payload.reteachSuggestions,
    studentFlags: payload.studentFlags.map(function (flag) {
      return {
        label: flag.label,
        classPeriod: flag.classPeriod,
        task: flag.task,
        status: flag.status,
        issue: flag.issue,
        next: flag.next
      };
    }),
    aiPrompt: includeText ? payload.anonymousAiPrompt : payload.aiPromptHeader,
    responseTextIncluded: includeText,
    namedFlagsWritten: payload.namedFlagsWritten === true,
    namedFlagsTab: BEHISTORICAL_CONFIG.studentFlagsSheetName,
    analysisTab: BEHISTORICAL_CONFIG.analysisSheetName,
    identifiableDataWithheld: true
  };
}

/* ─── Analysis ──────────────────────────────────────────────────────────────── */

function buildTeacherHubAnalysis_(filters) {
  const rows = getNormalizedResponseRows_();
  const filtered = filterRows_(rows, filters);
  const totalResponses = filtered.length;

  const confidenceValues = filtered
    .map(function (row) { return parseConfidence_(row.confidenceLevel); })
    .filter(function (value) { return !isNaN(value); });
  const averageConfidence = confidenceValues.length
    ? roundTo_(confidenceValues.reduce(function (sum, value) { return sum + value; }, 0) / confidenceValues.length, 1)
    : null;

  const lowConfidenceRows = filtered.filter(function (row) {
    const value = parseConfidence_(row.confidenceLevel);
    return !isNaN(value) && value < BEHISTORICAL_CONFIG.lowConfidenceThreshold;
  });
  const shortRows = filtered.filter(function (row) {
    const text = String(row.studentResponse || '').trim();
    return text.length > 0 && text.length < BEHISTORICAL_CONFIG.shortResponseThreshold;
  });
  const blankRows = filtered.filter(function (row) { return !String(row.studentResponse || '').trim(); });

  const settings = readTopicSettings_(filters.topic);
  const evidence = detectCommonEvidence_(filtered, settings.evidenceTerms);
  const misconceptions = detectCommonMisconceptions_(filtered, settings.misconceptionPatterns);
  const skillGaps = detectSkillGaps_(filtered);
  const flags = buildStudentFlags_(filtered, lowConfidenceRows, shortRows, blankRows);
  const reteachSuggestions = buildReteachSuggestions_(misconceptions, skillGaps, averageConfidence, totalResponses);

  return {
    generatedAt: new Date().toISOString(),
    source: 'Google Sheets + BeHistorical Apps Script',
    filters: {
      unit: filters.unit || '',
      topic: filters.topic || ALL_TOPICS,
      responseType: filters.responseType || ALL_RESPONSE_TYPES,
      classPeriod: filters.classPeriod || ALL_PERIODS
    },
    summary: {
      totalResponses: totalResponses,
      studentCount: countDistinct_(filtered, 'studentName'),
      averageConfidence: averageConfidence,
      lowConfidenceCount: lowConfidenceRows.length,
      shortResponseCount: shortRows.length,
      blankResponseCount: blankRows.length,
      responseTypeCounts: countBy_(filtered, 'responseType'),
      periodCounts: countBy_(filtered, 'classPeriod'),
      promptCounts: countBy_(filtered, 'promptId'),
      topicCounts: countBy_(filtered, 'topic')
    },
    classSummary: buildClassSummary_(totalResponses, averageConfidence, evidence, misconceptions, skillGaps),
    commonEvidence: evidence,
    topMisconceptions: misconceptions,
    misconceptionSource: settings.misconceptionPatterns.length
      ? 'Configured in the ' + BEHISTORICAL_CONFIG.settingsSheetName + ' tab for this topic.'
      : 'No misconception patterns are configured for this topic yet. Add them in the ' + BEHISTORICAL_CONFIG.settingsSheetName + ' tab.',
    skillGaps: skillGaps,
    reteachSuggestions: reteachSuggestions,
    studentFlags: flags,
    aiPromptHeader: buildAiPromptHeader_(filters, false) +
      '\n\nStudent responses:\n\n[Paste the anonymized response set from the ' +
      BEHISTORICAL_CONFIG.analysisSheetName + ' tab of your response Sheet, row "anonymousAiPrompt".]',
    anonymousAiPrompt: buildAiPrompt_(filtered, filters, false),
    namedAiPrompt: buildAiPrompt_(filtered, filters, true)
  };
}

function getNormalizedResponseRows_() {
  const sheet = SpreadsheetApp.getActive().getSheetByName(BEHISTORICAL_CONFIG.responseSheetName);
  if (!sheet) {
    throw new Error('Missing response sheet "' + BEHISTORICAL_CONFIG.responseSheetName +
      '". Rename your form response tab to match, or change responseSheetName at the top of Code.gs.');
  }
  const values = sheet.getDataRange().getValues();
  if (values.length < 2) return [];
  const headers = values[0].map(String);
  const index = buildHeaderIndex_(headers);
  const missing = ['topic', 'responseType', 'studentResponse'].filter(function (key) { return index[key] < 0; });
  if (missing.length) {
    throw new Error('The response sheet is missing required columns: ' + missing.join(', ') +
      '. Expected headers include Topic, Response Type, and Student Response.');
  }
  return values.slice(1).map(function (row, position) { return normalizeRow_(row, index, position); });
}

function buildHeaderIndex_(headers) {
  const index = {};
  Object.keys(HEADER_ALIASES).forEach(function (key) {
    const found = HEADER_ALIASES[key]
      .map(function (alias) { return headers.indexOf(alias); })
      .find(function (position) { return position >= 0; });
    index[key] = typeof found === 'number' ? found : -1;
  });
  return index;
}

function normalizeRow_(row, index, position) {
  const get = function (key) { return index[key] >= 0 ? row[index[key]] : ''; };
  return {
    sheetRow: position + 2,
    timestamp: formatCell_(get('timestamp')),
    studentName: formatCell_(get('studentName')),
    classPeriod: formatCell_(get('classPeriod')),
    unit: formatCell_(get('unit')),
    topic: formatCell_(get('topic')),
    responseType: formatCell_(get('responseType')),
    promptId: formatCell_(get('promptId')),
    studentResponse: formatCell_(get('studentResponse')),
    confidenceLevel: formatCell_(get('confidenceLevel')),
    aiCoachingReflection: formatCell_(get('aiCoachingReflection'))
  };
}

/**
 * Topic matching is exact on the full label ("1.1 - Song China") or on the leading
 * topic number, so "1.1" and "1.1 - Song China" both work, and "1.1" never matches "1.10".
 */
function filterRows_(rows, filters) {
  const topicFilter = normalizeFilter_(filters.topic || '');
  const responseType = normalizeFilter_(filters.responseType || ALL_RESPONSE_TYPES);
  const classPeriod = normalizeFilter_(filters.classPeriod || ALL_PERIODS);
  const unit = normalizeFilter_(filters.unit || '');
  const wantsAllTopics = !topicFilter || topicFilter === normalizeFilter_(ALL_TOPICS);
  const topicNumber = topicKey_(filters.topic || '');

  return rows.filter(function (row) {
    const rowTopic = normalizeFilter_(row.topic);
    const topicMatches = wantsAllTopics ||
      rowTopic === topicFilter ||
      (topicNumber && topicKey_(row.topic) === topicNumber);
    const responseMatches = responseType === normalizeFilter_(ALL_RESPONSE_TYPES) || !responseType ||
      normalizeFilter_(row.responseType) === responseType;
    const periodMatches = classPeriod === normalizeFilter_(ALL_PERIODS) || !classPeriod ||
      normalizeFilter_(row.classPeriod) === classPeriod;
    const unitMatches = !unit || normalizeFilter_(row.unit) === unit;
    return topicMatches && responseMatches && periodMatches && unitMatches;
  });
}

/** Pulls "1.1" out of "1.1 - Song China", or "f3" out of "Foundations 3 - States & Power". */
function topicKey_(label) {
  const text = String(label || '').trim();
  const numeric = text.match(/^(\d+\.\d+)/);
  if (numeric) return numeric[1];
  const foundations = text.match(/^foundations\s*(\d+)/i);
  if (foundations) return 'f' + foundations[1];
  const shorthand = text.match(/^f(\d+)$/i);
  if (shorthand) return 'f' + shorthand[1];
  return '';
}

/**
 * Builds the filter index from what is actually in the Sheet, so the Teacher Hub
 * dropdowns for class period and response type reflect real submissions.
 */
function buildFilterIndex_() {
  const rows = getNormalizedResponseRows_();
  return {
    generatedAt: new Date().toISOString(),
    totalResponses: rows.length,
    topics: distinctValues_(rows, 'topic'),
    units: distinctValues_(rows, 'unit'),
    classPeriods: distinctValues_(rows, 'classPeriod'),
    responseTypes: distinctValues_(rows, 'responseType')
  };
}

function distinctValues_(rows, key) {
  const seen = {};
  rows.forEach(function (row) {
    const value = String(row[key] || '').trim();
    if (value) seen[value] = true;
  });
  return Object.keys(seen).sort();
}

/* ─── Pattern detection ─────────────────────────────────────────────────────── */

const EVIDENCE_STOPWORDS = {
  the: 1, this: 1, that: 1, these: 1, those: 1, they: 1, their: 1, there: 1, then: 1, than: 1,
  and: 1, but: 1, for: 1, with: 1, from: 1, into: 1, because: 1, therefore: 1, however: 1,
  what: 1, when: 1, where: 1, which: 1, while: 1, would: 1, could: 1, should: 1, also: 1,
  more: 1, most: 1, some: 1, many: 1, much: 1, very: 1, been: 1, were: 1, was: 1, are: 1,
  had: 1, has: 1, have: 1, his: 1, her: 1, its: 1, one: 1, two: 1, first: 1, second: 1,
  people: 1, thing: 1, things: 1, example: 1, evidence: 1, claim: 1, question: 1, answer: 1,
  history: 1, historical: 1, student: 1, response: 1, topic: 1, unit: 1, i: 1, it: 1, in: 1,
  a: 1, an: 1, of: 1, to: 1, is: 1, as: 1, at: 1, by: 1, on: 1, or: 1, so: 1, be: 1, my: 1
};

/**
 * Finds the specific terms students actually used, without needing a per-topic keyword bank.
 *
 * Any terms listed for this topic in TeacherHub_Settings are checked first, then capitalized
 * phrases from the responses themselves fill out the rest. A term has to appear in at least
 * two responses and in at least 15 percent of them to count as a class-wide pattern.
 */
function detectCommonEvidence_(rows, configuredTerms) {
  const withText = rows.filter(function (row) { return String(row.studentResponse || '').trim(); });
  if (!withText.length) return [];

  const results = [];
  const claimed = {};

  (configuredTerms || []).forEach(function (term) {
    const needle = String(term || '').trim().toLowerCase();
    if (!needle) return;
    const count = withText.filter(function (row) {
      return String(row.studentResponse).toLowerCase().indexOf(needle) >= 0;
    }).length;
    if (count >= 2) {
      results.push({ label: term, count: count });
      claimed[needle] = true;
    }
  });

  const counts = {};
  const display = {};
  withText.forEach(function (row) {
    const phrases = extractProperPhrases_(row.studentResponse);
    const unique = {};
    phrases.forEach(function (phrase) { unique[phrase.toLowerCase()] = phrase; });
    Object.keys(unique).forEach(function (key) {
      counts[key] = (counts[key] || 0) + 1;
      if (!display[key]) display[key] = unique[key];
    });
  });

  const minimumShare = Math.max(2, Math.ceil(withText.length * 0.15));
  Object.keys(counts).forEach(function (key) {
    if (claimed[key]) return;
    if (counts[key] < minimumShare) return;
    results.push({ label: display[key], count: counts[key] });
  });

  results.sort(function (a, b) { return b.count - a.count || a.label.localeCompare(b.label); });
  return results.slice(0, 8).map(function (item) { return item.label + ' (' + item.count + ')'; });
}

/**
 * Pulls capitalized one-to-three word phrases out of a response, skipping the first word of
 * each sentence so ordinary sentence openers do not read as proper nouns.
 */
function extractProperPhrases_(text) {
  const phrases = [];
  const sentences = String(text || '').split(/(?<=[.!?])\s+|\n+/);
  sentences.forEach(function (sentence) {
    const words = sentence.trim().split(/\s+/);
    let buffer = [];
    for (let i = 0; i < words.length; i++) {
      const raw = words[i].replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, '');
      const isCapitalized = /^[A-Z][a-z’'\-]+$/.test(raw) || /^[A-Z]{2,}$/.test(raw);
      const isSentenceStart = i === 0;
      if (isCapitalized && !isSentenceStart && !EVIDENCE_STOPWORDS[raw.toLowerCase()]) {
        buffer.push(raw);
        if (buffer.length === 3) { phrases.push(buffer.join(' ')); buffer = []; }
      } else {
        if (buffer.length) phrases.push(buffer.join(' '));
        buffer = [];
      }
    }
    if (buffer.length) phrases.push(buffer.join(' '));
  });
  return phrases.filter(function (phrase) { return phrase.length > 3; });
}

/**
 * Misconceptions cannot be inferred from text alone, so they come from the
 * TeacherHub_Settings tab, one row per topic. Topic 1.1 ships with defaults.
 */
function detectCommonMisconceptions_(rows, patterns) {
  if (!patterns || !patterns.length) return [];
  const withText = rows.filter(function (row) { return String(row.studentResponse || '').trim(); });
  if (!withText.length) return [];
  const scored = patterns.map(function (entry) {
    const count = withText.filter(function (row) {
      const text = String(row.studentResponse).toLowerCase();
      return entry.triggers.some(function (trigger) { return text.indexOf(trigger.toLowerCase()) >= 0; });
    }).length;
    return { label: entry.label, count: count };
  }).filter(function (item) { return item.count > 0; });
  scored.sort(function (a, b) { return b.count - a.count || a.label.localeCompare(b.label); });
  return scored.slice(0, 6).map(function (item) { return item.label + ' (' + item.count + ')'; });
}

/** Generic AP reasoning checks. These hold for any topic. */
function detectSkillGaps_(rows) {
  const gaps = [];
  const withText = rows.filter(function (row) { return String(row.studentResponse || '').trim(); });
  if (!withText.length) return gaps;

  const reasoningCount = withText.filter(function (row) { return hasReasoningLanguage_(row.studentResponse); }).length;
  const specificCount = withText.filter(function (row) { return hasSpecificEvidence_(row.studentResponse); }).length;
  const claimCount = withText.filter(function (row) {
    return String(row.studentResponse).trim().split(/\s+/).length >= BEHISTORICAL_CONFIG.minClaimWordCount;
  }).length;
  const threshold = BEHISTORICAL_CONFIG.skillGapThreshold;

  if (claimCount / withText.length < threshold) {
    gaps.push('Responses are often too short to make a complete historical claim.');
  }
  if (specificCount / withText.length < threshold) {
    gaps.push('Many responses need more specific historical evidence, such as a named person, place, institution, or date.');
  }
  if (reasoningCount / withText.length < threshold) {
    gaps.push('Many responses need stronger reasoning that connects evidence to the claim.');
  }
  return gaps;
}

function hasReasoningLanguage_(text) {
  return /because|therefore|this shows|this helped|as a result|led to|so that|which meant|resulted in|caused/i.test(String(text || ''));
}

/** A proper noun or a year is a reasonable proxy for topic-specific detail. */
function hasSpecificEvidence_(text) {
  const value = String(text || '');
  if (/\b1?\d{3}s?\b|\bc\.\s?\d{3,4}\b/.test(value)) return true;
  return extractProperPhrases_(value).length > 0;
}

/* ─── Student flags ─────────────────────────────────────────────────────────── */

/**
 * Flags carry both a real name (written to the Sheet) and a stable numbered label
 * (sent to the Teacher Hub). Numbering is per student, so one student who trips three
 * checks stays "Student 4" in all three rows.
 */
function buildStudentFlags_(rows, lowConfidenceRows, shortRows, blankRows) {
  const labels = assignStudentLabels_(rows);
  const flags = [];

  blankRows.forEach(function (row) {
    flags.push(makeFlag_(row, labels, 'High', 'Blank or missing response', 'Have the student complete the response before analysis.'));
  });
  shortRows.forEach(function (row) {
    flags.push(makeFlag_(row, labels, 'Medium', 'Short response', 'Ask for a complete claim, specific evidence, and one because statement.'));
  });
  lowConfidenceRows.forEach(function (row) {
    flags.push(makeFlag_(row, labels, 'Medium', 'Low confidence', 'Conference briefly or assign a targeted revision question.'));
  });
  rows.forEach(function (row) {
    const text = String(row.studentResponse || '').trim();
    if (text && !hasReasoningLanguage_(text)) {
      flags.push(makeFlag_(row, labels, 'Medium', 'Missing reasoning language', 'Ask: why does this evidence prove your claim?'));
    }
  });

  return dedupeFlags_(flags).slice(0, BEHISTORICAL_CONFIG.maxFlags);
}

function assignStudentLabels_(rows) {
  const labels = {};
  let next = 1;
  rows.forEach(function (row) {
    const key = studentKey_(row);
    if (!labels[key]) {
      labels[key] = 'Student ' + next;
      next++;
    }
  });
  return labels;
}

function studentKey_(row) {
  const name = String(row.studentName || '').trim().toLowerCase();
  return name || ('row-' + row.sheetRow);
}

function makeFlag_(row, labels, status, issue, next) {
  return {
    student: row.studentName || 'Unnamed student',
    label: labels[studentKey_(row)] || 'Student',
    classPeriod: row.classPeriod || '',
    task: row.responseType || row.promptId || 'Unknown task',
    status: status,
    issue: issue,
    next: next
  };
}

function dedupeFlags_(flags) {
  const seen = {};
  return flags.filter(function (flag) {
    const key = [flag.label, flag.classPeriod, flag.task, flag.issue].join('|');
    if (seen[key]) return false;
    seen[key] = true;
    return true;
  });
}

/* ─── Narrative output ─────────────────────────────────────────────────────── */

function buildReteachSuggestions_(misconceptions, skillGaps, averageConfidence, totalResponses) {
  const suggestions = [];
  if (!totalResponses) {
    suggestions.push({
      priority: 'High',
      focus: 'No response data yet',
      action: 'Have students submit one checkpoint response for this topic, then refresh.'
    });
    return suggestions;
  }
  skillGaps.forEach(function (gap) {
    suggestions.push({ priority: 'High', focus: gap, action: 'Model a one-paragraph AP response using claim, evidence, and because reasoning.' });
  });
  misconceptions.forEach(function (item) {
    suggestions.push({ priority: 'Medium', focus: item, action: 'Use a two-minute misconception correction before the next activity.' });
  });
  if (averageConfidence !== null && averageConfidence < 3) {
    suggestions.push({ priority: 'High', focus: 'Low class confidence', action: 'Use a low-stakes pair revision before collecting the next checkpoint.' });
  }
  if (!suggestions.length) {
    suggestions.push({ priority: 'Low', focus: 'Responses look stable', action: 'Move forward, but use one model response to reinforce reasoning.' });
  }
  return suggestions.slice(0, 8);
}

function buildClassSummary_(totalResponses, averageConfidence, evidence, misconceptions, skillGaps) {
  if (!totalResponses) return 'No matching responses have been collected yet for this filter.';
  const confidenceText = averageConfidence === null
    ? 'Confidence data is not available'
    : 'Average confidence is ' + averageConfidence + '/5';
  const evidenceText = evidence.length
    ? 'Frequently cited specifics include ' + evidence.slice(0, 3).join(', ') + '.'
    : 'Students are not yet using much detectable specific evidence.';
  const misconceptionText = misconceptions.length
    ? 'Watch for: ' + misconceptions.slice(0, 2).join('; ') + '.'
    : 'No configured misconception pattern was detected.';
  const skillText = skillGaps.length
    ? 'Main skill gap: ' + skillGaps[0]
    : 'Most responses include basic claim, evidence, and reasoning markers.';
  return totalResponses + ' matching responses were analyzed. ' + confidenceText + '. ' +
    evidenceText + ' ' + misconceptionText + ' ' + skillText;
}

/**
 * The instruction half of the AI prompt. It carries no student writing, so it is safe to
 * send over the web app on its own.
 */
function buildAiPromptHeader_(filters, includeNames) {
  const privacyNote = includeNames
    ? ''
    : '\n\nStudent names have been replaced with numbered labels. Refer to students by those labels.';

  return 'You are an AP World History instructional coach helping analyze BeHistorical student responses.\n\n' +
    'Topic: ' + (filters.topic || ALL_TOPICS) + '\n' +
    'Response Type: ' + (filters.responseType || ALL_RESPONSE_TYPES) + '\n' +
    'Class Period: ' + (filters.classPeriod || ALL_PERIODS) + privacyNote + '\n\n' +
    'Analyze the class set and return:\n' +
    '1. A concise class summary\n' +
    '2. Common accurate evidence\n' +
    '3. Common misconceptions\n' +
    '4. Missing AP skill components, especially claim, evidence, and reasoning\n' +
    '5. Students who may need follow-up\n' +
    '6. One 3-minute reteach activity';
}

/**
 * The anonymous variant is what should be pasted into any external AI tool. The named
 * variant stays in the Sheet. Both embed response text, so neither leaves the Sheet unless
 * the teacher has opted in.
 */
function buildAiPrompt_(rows, filters, includeNames) {
  const labels = assignStudentLabels_(rows);
  const responseLines = rows.map(function (row, index) {
    const who = includeNames
      ? (row.studentName || 'Student')
      : (labels[studentKey_(row)] || 'Student');
    return (index + 1) + '. ' + who + ' | ' + (row.classPeriod || 'No period') + ' | ' +
      (row.responseType || 'No type') + ' | Confidence: ' + (row.confidenceLevel || 'N/A') + '\n' +
      (row.studentResponse || '[blank]');
  }).join('\n\n');

  return buildAiPromptHeader_(filters, includeNames) + '\n\nStudent responses:\n\n' + responseLines;
}

/* ─── Sheet output ─────────────────────────────────────────────────────────── */

function writeTeacherHubAnalysis_(payload) {
  ensureTeacherHubTabs();
  const ss = SpreadsheetApp.getActive();
  const analysisSheet = ss.getSheetByName(BEHISTORICAL_CONFIG.analysisSheetName);
  const flagsSheet = ss.getSheetByName(BEHISTORICAL_CONFIG.studentFlagsSheetName);

  analysisSheet.clear();
  const rows = [
    ['Field', 'Value'],
    ['generatedAt', payload.generatedAt],
    ['unit', payload.filters.unit],
    ['topic', payload.filters.topic],
    ['responseType', payload.filters.responseType],
    ['classPeriod', payload.filters.classPeriod],
    ['totalResponses', payload.summary.totalResponses],
    ['studentCount', payload.summary.studentCount],
    ['averageConfidence', payload.summary.averageConfidence],
    ['lowConfidenceCount', payload.summary.lowConfidenceCount],
    ['shortResponseCount', payload.summary.shortResponseCount],
    ['blankResponseCount', payload.summary.blankResponseCount],
    ['classSummary', payload.classSummary],
    ['commonEvidence', payload.commonEvidence.join(' | ')],
    ['topMisconceptions', payload.topMisconceptions.join(' | ')],
    ['skillGaps', payload.skillGaps.join(' | ')],
    ['reteachSuggestionsJson', JSON.stringify(payload.reteachSuggestions)],
    ['anonymousAiPrompt', payload.anonymousAiPrompt],
    ['namedAiPrompt', payload.namedAiPrompt]
  ];
  analysisSheet.getRange(1, 1, rows.length, 2).setValues(rows);
  analysisSheet.getRange(1, 1, 1, 2).setFontWeight('bold');
  analysisSheet.setColumnWidth(1, 190);
  analysisSheet.setColumnWidth(2, 720);

  flagsSheet.clear();
  flagsSheet.getRange(1, 1, 1, 7).setValues([['Label', 'Student', 'Class Period', 'Task', 'Status', 'Issue', 'Next Step']]);
  flagsSheet.getRange(1, 1, 1, 7).setFontWeight('bold');
  if (payload.studentFlags.length) {
    flagsSheet.getRange(2, 1, payload.studentFlags.length, 7).setValues(payload.studentFlags.map(function (flag) {
      return [flag.label, flag.student, flag.classPeriod, flag.task, flag.status, flag.issue, flag.next];
    }));
  }
  flagsSheet.autoResizeColumns(1, 5);
}

function ensureTeacherHubTabs() {
  const ss = SpreadsheetApp.getActive();
  [
    BEHISTORICAL_CONFIG.analysisSheetName,
    BEHISTORICAL_CONFIG.studentFlagsSheetName,
    BEHISTORICAL_CONFIG.settingsSheetName
  ].forEach(function (name) {
    if (!ss.getSheetByName(name)) ss.insertSheet(name);
  });
  seedSettingsSheet_(ss.getSheetByName(BEHISTORICAL_CONFIG.settingsSheetName));
}

/**
 * TeacherHub_Settings is the teacher-editable knob for per-topic analysis.
 *
 *   Topic | Evidence Terms | Misconception Label | Misconception Triggers
 *
 * Evidence Terms and Misconception Triggers are comma separated. One row per
 * misconception; repeat the topic across rows.
 */
function seedSettingsSheet_(sheet) {
  if (!sheet || sheet.getLastRow() > 0) return;
  const headers = ['Topic', 'Evidence Terms', 'Misconception Label', 'Misconception Triggers'];
  const seed = [
    ['1.1 - Song China',
      'civil service exam, Confucian, scholar-official, Champa rice, Grand Canal, paper money, jiaozi, Neo-Confucianism, Hangzhou, Kaifeng',
      'Civil service exam treated as pure meritocracy',
      'everyone could take, anyone could take, pure meritocracy, open to everyone'],
    ['1.1 - Song China', '',
      'Economic strength confused with military strength',
      'song was militarily strong, strong army, powerful military'],
    ['1.1 - Song China', '',
      'Champa rice described as a Chinese invention',
      'invented champa, created champa, china invented rice'],
    ['1.1 - Song China', '',
      'Neo-Confucianism and original Confucianism treated as identical',
      'same as confucianism, no difference, identical'],
    ['1.1 - Song China', '',
      'Paper money described as fully replacing coins',
      'replaced coins, only paper money, no coins']
  ];
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold');
  sheet.getRange(2, 1, seed.length, headers.length).setValues(seed);
  sheet.setColumnWidth(1, 200);
  sheet.setColumnWidth(2, 380);
  sheet.setColumnWidth(3, 320);
  sheet.setColumnWidth(4, 380);
  sheet.setFrozenRows(1);
}

function readTopicSettings_(topic) {
  const empty = { evidenceTerms: [], misconceptionPatterns: [] };
  const sheet = SpreadsheetApp.getActive().getSheetByName(BEHISTORICAL_CONFIG.settingsSheetName);
  if (!sheet || sheet.getLastRow() < 2) return empty;

  const values = sheet.getDataRange().getValues();
  const headers = values[0].map(function (value) { return String(value).trim().toLowerCase(); });
  const col = function (name) { return headers.indexOf(name); };
  const topicCol = col('topic');
  const evidenceCol = col('evidence terms');
  const labelCol = col('misconception label');
  const triggerCol = col('misconception triggers');
  if (topicCol < 0) return empty;

  const wantedKey = topicKey_(topic);
  const wantedLabel = normalizeFilter_(topic);
  const evidenceTerms = [];
  const misconceptionPatterns = [];

  values.slice(1).forEach(function (row) {
    const rowTopic = String(row[topicCol] || '').trim();
    if (!rowTopic) return;
    const matches = normalizeFilter_(rowTopic) === wantedLabel ||
      (wantedKey && topicKey_(rowTopic) === wantedKey);
    if (!matches) return;

    if (evidenceCol >= 0) {
      splitList_(row[evidenceCol]).forEach(function (term) {
        if (evidenceTerms.indexOf(term) < 0) evidenceTerms.push(term);
      });
    }
    if (labelCol >= 0 && triggerCol >= 0) {
      const label = String(row[labelCol] || '').trim();
      const triggers = splitList_(row[triggerCol]);
      if (label && triggers.length) misconceptionPatterns.push({ label: label, triggers: triggers });
    }
  });

  return { evidenceTerms: evidenceTerms, misconceptionPatterns: misconceptionPatterns };
}

function splitList_(value) {
  return String(value || '')
    .split(',')
    .map(function (part) { return part.trim(); })
    .filter(function (part) { return part.length > 0; });
}

/* ─── Helpers ──────────────────────────────────────────────────────────────── */

function countBy_(rows, key) {
  return rows.reduce(function (counts, row) {
    const value = row[key] || 'Blank';
    counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {});
}

function countDistinct_(rows, key) {
  const seen = {};
  rows.forEach(function (row) {
    const value = String(row[key] || '').trim().toLowerCase();
    if (value) seen[value] = true;
  });
  return Object.keys(seen).length;
}

function parseConfidence_(value) {
  const match = String(value == null ? '' : value).match(/[1-5]/);
  return match ? Number(match[0]) : NaN;
}

function formatCell_(value) {
  if (value instanceof Date) return value.toISOString();
  return String(value == null ? '' : value).trim();
}

function normalizeFilter_(value) {
  return String(value || '').trim().toLowerCase();
}

function roundTo_(value, places) {
  const factor = Math.pow(10, places || 0);
  return Math.round(value * factor) / factor;
}

function escapeForHtml_(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
