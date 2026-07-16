'use strict';

function esc(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function renderFirst10Page(options) {
  const {
    unit, topicId, title, subtitle, learningObjective, vocabulary, sections,
    skills, questions, takeaway, lessonHref, coachUrl, submitNote
  } = options;
  const skillTags = skills.map((skill) => `<span class="skill-tag">${esc(skill)}</span>`).join('');
  const vocab = vocabulary.map((term) => `<span class="term-chip">${esc(term)}</span>`).join('');
  const sectionHtml = sections.map((section, index) => `
    <section class="section">
      <span class="section-number">${index + 1}</span>
      <p class="section-label">${esc(section.label || `Part ${index + 1}`)}</p>
      <h2 class="section-heading">${esc(section.heading)}</h2>
      <p class="reading-text">${esc(section.text)}</p>
      <div class="ap-callout"><p class="ap-callout-label">AP Thinking — ${esc(section.skill || skills[index] || skills[0])}</p><p>${esc(section.coaching || `Connect this section to the Topic ${topicId} learning objective with specific evidence and an explained relationship.`)}</p></div>
    </section>`).join('');
  const questionHtml = questions.map((question, index) => `
      <li class="question-item"><div class="question-prompt"><span class="q-num">${index + 1}</span><span class="q-skill">${esc(skills[index] || skills[0])}</span><span class="q-text">${esc(question)}</span></div><textarea class="q-textarea" id="q${index + 1}" placeholder="Write your answer here..."></textarea></li>`).join('');

  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>BeHistorical — Module 02 | First &amp; 10 | Topic ${esc(topicId)} ${esc(title)}</title>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&amp;family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&amp;family=Montserrat:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
<link rel="stylesheet" href="../assets/css/behistorical-first10.css?v=20260716"></head><body><div class="module">
  <header class="module-header"><div class="header-top"><span class="module-badge">Module 02</span><span class="module-name">First &amp; 10 Reading</span></div><div class="module-subtitle">Topic ${esc(topicId)} — ${esc(title)} &nbsp;|&nbsp; AP World History: Modern</div></header>
  <section class="reading-title-band"><p class="reading-eyebrow">First &amp; 10 Reading</p><h1 class="reading-title"><em>${esc(title)}</em></h1><p class="reading-deck">${esc(subtitle)}</p><div class="skill-tags">${skillTags}</div></section>
  <main class="reading-body"><div class="support-strip"><article class="support-card"><h3>Before You Read</h3><p>Track who acts, what changes, why it changes, and which older patterns remain. Mark the evidence that best reveals the historical mechanism.</p></article><article class="support-card"><h3>Reading Target</h3><p>${esc(learningObjective)}</p></article></div>
  <div class="vocab-strip"><h3>Vocabulary to Watch</h3>${vocab}</div>${sectionHtml}
  <div class="be-ready"><h3>BeReady: 10-Second Takeaway</h3><p>${esc(takeaway)}</p></div></main>
  <section class="check-section"><div class="check-header"><span class="check-badge">Check Your Reading</span><span class="check-title">Three Questions</span></div><ol class="question-list">${questionHtml}</ol></section>
  <section class="builder-section"><h2 class="builder-heading">Build Your Google Form Response</h2><p class="builder-body">Compile and review your three answers before opening the class response form.</p><div class="tool-row"><button type="button" onclick="buildGooglePrompt()">Build Response</button><button type="button" onclick="submitToGoogleForm()">Submit to Google Form</button></div><textarea class="builder-output" id="google-output" readonly placeholder="Your compiled response will appear here."></textarea></section>
  <section class="builder-section"><h2 class="builder-heading">Build Your AI Coach Prompt</h2><p class="builder-body">Ask the BeHistorical AI Coach to question, challenge, and improve your thinking without writing the final answer for you.</p><div class="tool-row"><button type="button" onclick="buildAiPrompt()">Build AI Prompt</button><button class="secondary" type="button" onclick="copyAiPrompt()">Copy Prompt</button><a class="tool-button secondary" href="${esc(coachUrl)}" target="_blank" rel="noopener">Open MagicSchool</a></div><textarea class="builder-output" id="ai-output" readonly placeholder="Your prompt will appear here."></textarea></section>
  <p class="page-footer-note">${esc(submitNote)}</p><footer class="module-footer"><span class="footer-note">Topic ${esc(topicId)} — ${esc(title)}</span><nav class="footer-nav"><a class="nav-btn prev" href="${esc(lessonHref)}">← Map &amp; Geography</a><a class="nav-btn" href="${esc(lessonHref)}#lecture">Content Delivery →</a></nav></footer>
</div><script src="../assets/js/behistorical-form-config.js?v=20260716"></script><script>
var TOPIC_KEY='${esc(topicId)}';var TOPIC_LABEL=(window.BH_FORM&&BH_FORM.topics[TOPIC_KEY])||'Topic ${esc(topicId)}: ${esc(title)}';
function answers(){return[1,2,3].map(function(n){return(document.getElementById('q'+n)||{}).value||'';});}
function buildGooglePrompt(){var out=TOPIC_LABEL+' — First & 10\\n\\n'+answers().map(function(a,i){return'Question '+(i+1)+': '+a;}).join('\\n\\n');document.getElementById('google-output').value=out;return out;}
function submitToGoogleForm(){var out=buildGooglePrompt();if(out&&navigator.clipboard)navigator.clipboard.writeText(out).catch(function(){});var url=typeof buildFormURL==='function'?buildFormURL(TOPIC_KEY,'first10'):(window.BH_FORM&&BH_FORM.baseURL);if(url)window.open(url,'_blank','noopener');}
function buildAiPrompt(){var out='Coach my AP World historical reasoning for '+TOPIC_LABEL+'. Do not write my final answer. Ask one question at a time, verify factual accuracy, and help me explain how evidence proves or qualifies my claim.\\n\\nMy responses:\\n'+answers().join('\\n\\n');document.getElementById('ai-output').value=out;return out;}
function copyAiPrompt(){var out=buildAiPrompt();if(navigator.clipboard)navigator.clipboard.writeText(out).catch(function(){});}
</script></body></html>\n`;
}

module.exports = { renderFirst10Page };
