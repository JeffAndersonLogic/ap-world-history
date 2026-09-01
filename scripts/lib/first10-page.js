'use strict';

const fs = require('fs');
const path = require('path');
const { CAPTURE_BLOCK } = require('./first10-capture-block');

function esc(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function renderFirst10Page(options) {
  const {
    unit, topicId, title, subtitle, learningObjective, vocabulary, sections,
    skills, questions, takeaway, lessonHref, submitNote,
    skillTags: skillTagList, supportCards
  } = options;
  // skillTagList, supportCards, and the section/callout/question rich fields below
  // are optional, author-controlled trusted HTML. When absent, output is identical
  // to the original generic template so untouched topics regenerate byte-for-byte.

  // ── page chrome ────────────────────────────────────────────────────────────
  // Foundations readings are the same reading, addressed to a student who has
  // not started the course yet: they carry a literary title rather than the
  // topic name, number their questions 01 to 03, and send the back link to the
  // module list instead of the map. Every one of these falls back to the unit
  // wording, so a caller that does not set them emits exactly what it did
  // before. scripts/test/readings-reproducible.test.js is what holds that.
  const {
    titleHtml,
    headerSubtitle,
    docTitle,
    topicLabel,
    checkBadge = 'Check Your Reading',
    checkTitle = 'Three Questions',
    footerNote,
    navPrev,
    navNext,
    padQuestionNumbers = false,
    // Chrome that varies across the 77 readings and is preserved verbatim rather
    // than normalised. Most readings label themselves "Module 01" even though the
    // First & 10 is module 02 in the ten-module standard; that inconsistency is
    // pre-existing and student-visible, so the migration carries it rather than
    // silently correcting 58 pages.
    moduleBadge = 'Module 02',
    moduleName = 'First &amp; 10 Reading',
    readingEyebrow = 'First &amp; 10 Reading',
    supportHeadings,
    takeawayHeading = 'BeReady: 10-Second Takeaway',
    // Explicit HTML variants, rather than letting one field mean plain text for
    // some callers and markup for others. Units 6 and 9 hold these as plain
    // text in f10-content.js and must stay escaped; the readings lifted out of
    // hand-authored HTML hold real markup and must not be. Collapsing the two
    // into one field is what double-escaped a footer note into a literal
    // "&nbsp;" on five Foundations pages.
    takeawayHtml,
    footerNoteHtml,
    checkBadgeHtml,
    checkTitleHtml,
    // Not every reading has a module footer. Emitting one where the original had
    // none would add a nav bar students never had, so it is opt-out.
    showFooter = true,
    // Many readings carry a footer with nav but no note beside it.
    showFooterNote = true
  } = options;

  const supportBeforeHeading = (supportHeadings && supportHeadings.before) || 'Before You Read';
  const supportTargetHeading = (supportHeadings && supportHeadings.target) || 'Reading Target';


  const bandTitleHtml = titleHtml || `<em>${esc(title)}</em>`;
  const subtitleLine = headerSubtitle || `Topic ${esc(topicId)}, ${esc(title)} &nbsp;|&nbsp; AP World History: Modern`;
  const documentTitle = docTitle || `BeHistorical — Module 02 | First &amp; 10 | Topic ${esc(topicId)} ${esc(title)}`;
  const storedLabel = topicLabel || `Topic ${esc(topicId)}: ${esc(title)}`;
  const footNote = footerNote || `Topic ${esc(topicId)}, ${esc(title)}`;
  const prev = navPrev || { label: '← Map &amp; Geography', href: lessonHref };
  const next = navNext || { label: 'Content Delivery →', href: `${lessonHref}#lecture` };
  const bandSkills = skillTagList || skills;
  const skillTags = bandSkills.map((skill) => `<span class="skill-tag">${esc(skill)}</span>`).join('');
  const vocab = vocabulary.map((term) => `<span class="term-chip">${esc(term)}</span>`).join('');
  const beforeYouRead = (supportCards && supportCards.beforeYouRead)
    || 'Track who acts, what changes, why it changes, and which older patterns remain. Mark the evidence that best reveals the historical mechanism.';
  const readingTarget = (supportCards && supportCards.readingTarget) || esc(learningObjective);
  const sectionHtml = sections.map((section, index) => {
    // `blocks` keeps prose and pull-quotes in the order the author wrote them.
    // A flat paragraph list cannot: a pull-quote sits between two paragraphs and
    // is the author's emphasis on the sentence that matters most in a section,
    // so appending them all at the end would move the emphasis somewhere else.
    // `paragraphs` stays supported and unchanged for readings without one.
    const paragraphs = Array.isArray(section.blocks)
      ? section.blocks.map((b) => b && b.type === 'pull'
          ? `<div class="pull-quote"><p>${b.html}</p></div>`
          : `<p class="reading-text">${b && b.html != null ? b.html : b}</p>`).join('')
      : Array.isArray(section.paragraphs)
        ? section.paragraphs.map((p) => `<p class="reading-text">${p}</p>`).join('')
        : `<p class="reading-text">${esc(section.text)}</p>`;
    const calloutLabel = (section.callout && section.callout.label)
      ? section.callout.label
      : `AP Thinking, ${esc(section.skill || skills[index] || skills[0])}`;
    const calloutBody = (section.callout && section.callout.html)
      ? section.callout.html
      : esc(section.coaching || `Connect this section to the Topic ${topicId} learning objective with specific evidence and an explained relationship.`);
    return `
    <section class="section">
      <span class="section-number">${section.number != null ? section.number : index + 1}</span>
      <p class="section-label">${esc(section.label || `Part ${index + 1}`)}</p>
      <h2 class="section-heading">${esc(section.heading)}</h2>
      ${paragraphs}
      ${section.callout === null ? '' :
        `<div class="ap-callout"><p class="ap-callout-label">${calloutLabel}</p>${
          section.callout && section.callout.raw ? section.callout.raw : `<p>${calloutBody}</p>`}</div>`}
    </section>`;
  }).join('');
  const questionHtml = questions.map((question, index) => {
    const isObj = question && typeof question === 'object';
    const qSkill = isObj ? question.skill : (skills[index] || skills[0]);
    const qText = isObj ? question.text : question;
    const shown = isObj && question.num != null
      ? question.num
      : padQuestionNumbers ? String(index + 1).padStart(2, '0') : String(index + 1);
    return `
      <li class="question-item"><div class="question-prompt"><span class="q-num">${shown}</span><span class="q-skill">${esc(qSkill)}</span><span class="q-text">${esc(qText)}</span></div><textarea class="q-textarea" id="q${index + 1}" placeholder="${esc(isObj && question.placeholder ? question.placeholder : 'Write your answer here...')}"></textarea></li>`;
  }).join('');

  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${documentTitle}</title>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&amp;family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&amp;family=Montserrat:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/css/behistorical-first10.css?v=20260717"></head><body><div class="module">
  <header class="module-header"><div class="header-top"><span class="module-badge">${moduleBadge}</span><span class="module-name">${moduleName}</span></div><div class="module-subtitle">${subtitleLine}</div></header>
  <section class="reading-title-band"><p class="reading-eyebrow">${readingEyebrow}</p><h1 class="reading-title">${bandTitleHtml}</h1><p class="reading-deck">${esc(subtitle)}</p><div class="skill-tags">${skillTags}</div></section>
  <main class="reading-body"><div class="support-strip"><article class="support-card"><h3>${supportBeforeHeading}</h3><p>${beforeYouRead}</p></article><article class="support-card"><h3>${supportTargetHeading}</h3><p>${readingTarget}</p></article></div>
  <div class="vocab-strip"><h3>Vocabulary to Watch</h3>${vocab}</div>${sectionHtml}
  <div class="be-ready"><h3>${takeawayHeading}</h3><p>${takeawayHtml || esc(takeaway)}</p></div></main>
  <section class="check-section"><div class="check-header"><span class="check-badge">${checkBadgeHtml || esc(checkBadge)}</span><span class="check-title">${checkTitleHtml || esc(checkTitle)}</span></div><ol class="question-list">${questionHtml}</ol></section>
  
  <p class="page-footer-note">${esc(submitNote)}</p>${showFooter ? `<footer class="module-footer">${showFooterNote ? `<span class="footer-note">${footerNoteHtml || esc(footNote)}</span>` : ''}<nav class="footer-nav"><a class="nav-btn prev" href="${esc(prev.href)}">${prev.label}</a><a class="nav-btn" href="${esc(next.href)}">${next.label}</a></nav></footer>` : ''}
</div><script>
var TOPIC_KEY='${esc(topicId)}';var TOPIC_LABEL='${storedLabel}';
${CAPTURE_BLOCK}
</script></body></html>\n`;
}

module.exports = { renderFirst10Page };
