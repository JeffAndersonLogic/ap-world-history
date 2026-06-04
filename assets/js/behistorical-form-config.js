/*
 * ─── BEHISTORICAL FORM CONFIG ────────────────────────────────────────────────
 * File: assets/js/behistorical-form-config.js
 *
 * Load this script BEFORE the topic data script on every lesson page:
 *   <script src="../assets/js/behistorical-form-config.js?v=1"></script>
 *
 * Entry IDs (from Google Form prefill link — do not modify):
 *   entry.821183375  = Student Name       (student fills in)
 *   entry.1794755975 = Class Period        (student fills in)
 *   entry.187055090  = Topic              (pre-filled per lesson)
 *   entry.2107637366 = Response Type      (pre-filled per capture point)
 *   entry.1818136905 = Student Response   (student fills in)
 *   entry.1452763218 = Revision Notes     (student fills in, optional)
 *   entry.1652722657 = Confidence 1–5     (student fills in)
 * ─────────────────────────────────────────────────────────────────────────────
 */

window.BH_FORM = {
  baseURL: 'https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform',

  fields: {
    topic:        'entry.187055090',
    responseType: 'entry.2107637366',
  },

  // Must match Google Form dropdown labels exactly.
  // Verify each string against the live form before deploying a new lesson.
  topics: {
    '1.1': '1.1 - Song China',
    '1.2': '1.2 - Dar al-Islam',
    '1.3': '1.3 - South and Southeast Asia',
    '1.4': '1.4 - The Americas',
    '1.5': '1.5 - Africa',
    '1.6': '1.6 - Eurasian Connections',
    '1.7': '1.7 - Cross-Cultural Exchanges',
    'foundations-1': 'Foundations 1 - Geography',
    'foundations-2': 'Foundations 2 - Belief Systems',
    'foundations-3': 'Foundations 3 - States & Power',
    'foundations-4': 'Foundations 4 - Trade Networks',
    'foundations-5': 'Foundations 5 - World at 1200',
    '2.1': '2.1 - The Silk Roads',
    '2.2': '2.2 - The Mongol Empire',
    '2.3': '2.3 - Exchange in the Indian Ocean',
    '2.4': '2.4 - Trans-Saharan Trade Routes',
    '2.5': '2.5 - Cultural Consequences of Connectivity',
    '2.6': '2.6 - Environmental Consequences of Connectivity',
    '2.7': '2.7 - Comparison of Economic Exchange',
    '3.1': '3.1 - Empires Expand',
    '3.2': '3.2 - Empires Administration',
    '3.3': '3.3 - Empires and Belief Systems',
    '3.4': '3.4 - Comparison in Land-Based Empires',
    '4.1': '4.1 - Technological Innovations',
    '4.2': '4.2 - Exploration: Causes and Events',
    '4.3': '4.3 - Columbian Exchange',
    '4.4': '4.4 - Maritime Empires Established',
    '4.5': '4.5 - Maritime Empires Maintained',
    '4.6': '4.6 - Internal and External Challenges',
    '4.7': '4.7 - Changing Social Hierarchies',
    '4.8': '4.8 - Continuity and Change',
    '5.1': '5.1 - The Enlightenment',
    '5.2': '5.2 - Nationalism and Revolutions',
    '5.3': '5.3 - Industrial Revolution Begins',
    '5.4': '5.4 - Industrialization Spreads',
  },

  // Must match Google Form multiple-choice option text exactly.
  // Always use these keys in lesson pages — never hardcode the string directly.
  responseTypes: {
    first10:       'First and 10',
    skillBuilder:  'AP Skill Builder',
    checkpoint1:   'Checkpoint 1',
    evidenceLab:   'Evidence Lab',
    primarySource: 'Primary Source',
    beInTheRoom:   'BeInTheRoom',
    checkpoint2:   'Checkpoint 2',
  }
};

/**
 * buildFormURL(topic, responseType)
 * Returns a Google Form prefill URL with Topic + Response Type pre-populated.
 * The student fills in: Name, Period, Response, Revision Notes, Confidence.
 *
 * Usage in lesson pages:
 *   buildFormURL(BH_FORM.topics['1.1'], BH_FORM.responseTypes.first10)
 *   buildFormURL(BH_FORM.topics['1.1'], BH_FORM.responseTypes.checkpoint2)
 */
function buildFormURL(topic, responseType) {
  const params = new URLSearchParams({
    usp: 'pp_url',
    [BH_FORM.fields.topic]:        topic,
    [BH_FORM.fields.responseType]: responseType,
  });
  return `${BH_FORM.baseURL}?${params.toString()}`;
}
