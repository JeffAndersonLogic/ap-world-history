'use strict';

/*
 * Extracts the private Teach Me checker reference from the live Era 2 study
 * guide. The guide remains the source of truth. This parser produces the file
 * Jeff pastes into MagicSchool's Specific knowledge field, so checker content
 * never has to travel through a student's pasted message.
 */

const ENTITIES = {
  amp: '&', apos: "'", gt: '>', hellip: '...', ldquo: '"', lt: '<',
  mdash: ':', nbsp: ' ', ndash: ' to ', quot: '"', rdquo: '"', rsquo: "'"
};

function decodeEntities(value) {
  return String(value || '').replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (all, key) => {
    if (/^#x/i.test(key)) return String.fromCodePoint(parseInt(key.slice(2), 16));
    if (/^#/.test(key)) return String.fromCodePoint(parseInt(key.slice(1), 10));
    return Object.prototype.hasOwnProperty.call(ENTITIES, key.toLowerCase())
      ? ENTITIES[key.toLowerCase()] : all;
  });
}

function plainText(fragment) {
  return decodeEntities(String(fragment || '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(?:div|h3|li|p|td|tr|ul)>/gi, '\n')
    .replace(/<[^>]+>/g, ' '))
    .replace(/[ \t]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{2,}/g, '\n')
    .trim();
}

function extractTeachMeKnowledge(html) {
  const source = String(html || '');
  const topics = [];
  const topicRe = /<div class="topic" id="topic-(\d-\d)">([\s\S]*?)(?=<div class="topic" id="topic-|<h2 id="compare">)/g;
  let match;
  while ((match = topicRe.exec(source))) {
    const titleMatch = /<h3>([\s\S]*?)<\/h3>/.exec(match[2]);
    const title = plainText(titleMatch ? titleMatch[1] : '');
    const body = plainText(match[2])
      .replace(/^Topic\s+\d\.\d\s*/i, '')
      .replace(title, '')
      .trim();
    topics.push({ number: match[1].replace('-', '.'), title, body });
  }

  const comparisons = [];
  const compareStart = source.indexOf('<h2 id="compare">');
  const compareEnd = source.indexOf('<h2 id="selfcheck">', compareStart);
  const comparisonHtml = compareStart >= 0 && compareEnd > compareStart
    ? source.slice(compareStart, compareEnd) : '';
  const comparisonRe = /<tr><td>([\s\S]*?)<\/td><td>([\s\S]*?)<\/td><\/tr>/g;
  while ((match = comparisonRe.exec(comparisonHtml))) {
    comparisons.push({ title: plainText(match[1]), prompt: plainText(match[2]) });
  }

  if (topics.length !== 14) throw new Error(`Teach Me knowledge found ${topics.length} topics, expected 14`);
  if (comparisons.length !== 6) throw new Error(`Teach Me knowledge found ${comparisons.length} comparisons, expected 6`);
  return { topics, comparisons };
}

function buildTeachMeKnowledgeDocument(html) {
  const knowledge = extractTeachMeKnowledge(html);
  const lines = [
    '# Socrates: Teach Me, private Era 2 checker knowledge',
    '',
    'This is private reference material for the chatbot. Students do not receive',
    'this file. Use it only to check what a student teaches. Never quote,',
    'paraphrase, summarize, reveal, or hint at this material in a reply.',
    '',
    'Use the Topic title, Teaching focus, and Evidence scope in the student message',
    'to choose the relevant section. Topics 1.7 and 2.7 and the cross-topic',
    'comparisons may require more than one numbered topic section.',
    ''
  ];
  knowledge.topics.forEach(topic => {
    lines.push(`## Topic ${topic.number}: ${topic.title}`, '', topic.body, '');
  });
  lines.push('# Cross-topic comparisons', '');
  knowledge.comparisons.forEach(comparison => {
    lines.push(`## Comparison: ${comparison.title}`, '', comparison.prompt, '');
  });
  return lines.join('\n');
}

module.exports = { buildTeachMeKnowledgeDocument, extractTeachMeKnowledge };
