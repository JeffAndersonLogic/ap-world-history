'use strict';

const { CAPTURE_BLOCK } = require('./first10-capture-block');

function esc(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function renderFirst10Page(options) {
  const {
    unit, topicId, title, subtitle, learningObjective, vocabulary, sections,
    skills, questions, takeaway, lessonHref, coachUrl, submitNote,
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
    builderBody = 'Ask the BeHistorical AI Coach to question, challenge, and improve your thinking without writing the final answer for you.',
    footerNote,
    navPrev,
    navNext,
    padQuestionNumbers = false,
    promptScript
  } = options;

  // The Foundations readings build a richer AI Coach prompt than the unit ones:
  // theirs labels each answer with the question it answers, so the coach can see
  // what was actually asked. The unit prompt sends the answers alone. That is a
  // real difference in what a student gets back, so it travels with the reading
  // rather than being flattened to whichever version this template happened to
  // hard-code. Default stays the unit prompt, so units 6 and 9 are unchanged.
  const defaultPromptScript = `function answers(){return[1,2,3].map(function(n){return(document.getElementById('q'+n)||{}).value||'';});}


function buildAiPrompt(){var out='Coach my AP World historical reasoning for '+TOPIC_LABEL+'. Do not write my final answer. Ask one question at a time, verify factual accuracy, and help me explain how evidence proves or qualifies my claim.\\n\\nMy responses:\\n'+answers().join('\\n\\n');document.getElementById('ai-output').value=out;return out;}
function copyAiPrompt(){var out=buildAiPrompt();if(navigator.clipboard)navigator.clipboard.writeText(out).catch(function(){});}`;

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
    const paragraphs = Array.isArray(section.paragraphs)
      ? section.paragraphs.map((p) => `<p class="reading-text">${p}</p>`).join('')
      : `<p class="reading-text">${esc(section.text)}</p>`;
    const calloutLabel = (section.callout && section.callout.label)
      ? esc(section.callout.label)
      : `AP Thinking, ${esc(section.skill || skills[index] || skills[0])}`;
    const calloutBody = (section.callout && section.callout.html)
      ? section.callout.html
      : esc(section.coaching || `Connect this section to the Topic ${topicId} learning objective with specific evidence and an explained relationship.`);
    return `
    <section class="section">
      <span class="section-number">${index + 1}</span>
      <p class="section-label">${esc(section.label || `Part ${index + 1}`)}</p>
      <h2 class="section-heading">${esc(section.heading)}</h2>
      ${paragraphs}
      <div class="ap-callout"><p class="ap-callout-label">${calloutLabel}</p><p>${calloutBody}</p></div>
    </section>`;
  }).join('');
  const questionHtml = questions.map((question, index) => {
    const isObj = question && typeof question === 'object';
    const qSkill = isObj ? question.skill : (skills[index] || skills[0]);
    const qText = isObj ? question.text : question;
    const shown = padQuestionNumbers ? String(index + 1).padStart(2, '0') : String(index + 1);
    return `
      <li class="question-item"><div class="question-prompt"><span class="q-num">${shown}</span><span class="q-skill">${esc(qSkill)}</span><span class="q-text">${esc(qText)}</span></div><textarea class="q-textarea" id="q${index + 1}" placeholder="${esc(isObj && question.placeholder ? question.placeholder : 'Write your answer here...')}"></textarea></li>`;
  }).join('');

  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${documentTitle}</title>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&amp;family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&amp;family=Montserrat:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/css/behistorical-first10.css?v=20260717"></head><body><div class="module">
  <header class="module-header"><div class="header-top"><span class="module-badge">Module 02</span><span class="module-name">First &amp; 10 Reading</span></div><div class="module-subtitle">${subtitleLine}</div></header>
  <section class="reading-title-band"><p class="reading-eyebrow">First &amp; 10 Reading</p><h1 class="reading-title">${bandTitleHtml}</h1><p class="reading-deck">${esc(subtitle)}</p><div class="skill-tags">${skillTags}</div></section>
  <main class="reading-body"><div class="support-strip"><article class="support-card"><h3>Before You Read</h3><p>${beforeYouRead}</p></article><article class="support-card"><h3>Reading Target</h3><p>${readingTarget}</p></article></div>
  <div class="vocab-strip"><h3>Vocabulary to Watch</h3>${vocab}</div>${sectionHtml}
  <div class="be-ready"><h3>BeReady: 10-Second Takeaway</h3><p>${esc(takeaway)}</p></div></main>
  <section class="check-section"><div class="check-header"><span class="check-badge">${esc(checkBadge)}</span><span class="check-title">${esc(checkTitle)}</span></div><ol class="question-list">${questionHtml}</ol></section>
  
  <section class="builder-section"><h2 class="builder-heading">Build Your AI Coach Prompt</h2><p class="builder-body">${esc(builderBody)}</p><div class="tool-row"><button type="button" onclick="buildAiPrompt()">Build AI Prompt</button><button class="secondary" type="button" onclick="copyAiPrompt()">Copy Prompt</button><a class="tool-button secondary" href="${esc(coachUrl)}" target="_blank" rel="noopener">Open MagicSchool</a></div><textarea class="builder-output" id="ai-output" readonly placeholder="Your prompt will appear here."></textarea></section>
  <p class="page-footer-note">${esc(submitNote)}</p><footer class="module-footer"><span class="footer-note">${esc(footNote)}</span><nav class="footer-nav"><a class="nav-btn prev" href="${esc(prev.href)}">${prev.label}</a><a class="nav-btn" href="${esc(next.href)}">${next.label}</a></nav></footer>
</div><script>
var TOPIC_KEY='${esc(topicId)}';var TOPIC_LABEL='${storedLabel}';
${promptScript || defaultPromptScript}
${CAPTURE_BLOCK}
</script></body></html>\n`;
}

module.exports = { renderFirst10Page };
