'use strict';

// A reversible, labels-only trial. Do not change --font-ui or --font-display:
// those also control navigation, controls, titles and section headings.
const TRIAL_CLASS = 'bh-label-trial-46';
function usesLabelTrial(topic) {
  return topic === '4.6' || !!(topic && /^topic-4-6(?:-|$)/.test(topic.slug || ''));
}
function trialLinks(enabled) {
  if (!enabled) return '';
  const font = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap';
  return `  <link rel="stylesheet" href="${font}" media="print" onload="this.media='all'">\n` +
    `  <noscript><link rel="stylesheet" href="${font}"></noscript>\n` +
    '  <link rel="stylesheet" href="../assets/css/behistorical-label-trial-46.css?v=20261110-bold">\n';
}
module.exports = { TRIAL_CLASS, usesLabelTrial, trialLinks };
