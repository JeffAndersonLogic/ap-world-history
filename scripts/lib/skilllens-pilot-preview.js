'use strict';
// Generate readable HTML from the same contract, fixtures, and judgment engine.
// File previews may disable scripts; the sample must still be useful there.
const core = require('./skilllens-pilot-core');
const escape = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
module.exports = function preview(data) {
  const {contract, responses, analyses} = data;
  const result = core.summarize(contract, responses, analyses, []);
  const patterns = result.patterns.map(pattern => {
    const ids = result.rows.filter(row => row.criteria.some(j => j.criterionId === pattern.id && ['partial','not_yet'].includes(j.band))).map(row => `<a href="#sample-${escape(row.response.id)}">${escape(row.response.label)}</a>`);
    return `<article class="preview-pattern"><h3>${escape(pattern.label)}</h3><p><strong>${pattern.gap} of ${pattern.assessed}</strong> partly or not yet shown</p><p class="muted">${pattern.meets} meet this criterion; ${pattern.review} unreviewed or not analyzed.</p><p>${ids.join(', ')}</p><p class="suggestion"><strong>Possible next step:</strong> ${escape(pattern.action)}</p></article>`;
  }).join('\n');
  const students = result.rows.map(row => {
    const {response} = row;
    let evidence;
    if (row.status === 'missing') evidence = '<p>No submission was received. This is not evidence of misunderstanding.</p>';
    else if (row.status === 'blank') evidence = '<p>A submission was received without response text. No assessment band is assigned.</p>';
    else {
      evidence = `<p class="observed-label">FULL RESPONSE · SYNTHETIC</p><blockquote>${escape(response.text)}</blockquote>`;
      if (row.status === 'not_analyzed') evidence += '<p>No analysis has been supplied for this response.</p>';
      else evidence += row.criteria.map(judgment => {
        const criterion = contract.criteria.find(c => c.id === judgment.criterionId);
        const quotes = judgment.evidence.map(span => `<blockquote>${escape(span.quote)}</blockquote>`).join('');
        return `<div class="interpretation"><h3>${escape(criterion.label)}</h3><p><span class="badge ${judgment.band}">${escape(core.labels[judgment.band])}</span></p>${quotes}<p><strong>Authored interpretation:</strong> ${escape(judgment.reason)}</p></div>`;
      }).join('');
    }
    const label = row.status === 'meets' ? 'Meets all three criteria' : core.labels[row.status];
    return `<details class="panel preview-response"${response.id === 'S02' ? ' open' : ''}><summary id="sample-${escape(response.id)}">${escape(response.label)} · ${escape(label)}</summary>${evidence}</details>`;
  }).join('\n');
  return `<section id="sample-preview" aria-labelledby="sample-preview-title">
<p class="notice"><strong>Read-only sample.</strong> All class information is included below. Editing judgments and downloading reviews require a browser that runs JavaScript; some in-app file previews do not. Open the downloaded file in a desktop browser for those controls.</p>
<h2 id="sample-preview-title">Sample class</h2>
<p id="preview-coverage">${result.roster} roster entries · ${result.assessed} responses assessed · ${result.counts.review} needs review · ${result.counts.not_analyzed} not analyzed · ${result.counts.blank} blank · ${result.counts.missing} no submission</p>
<details class="assignment"><summary>Assignment</summary><p>${escape(contract.prompt)}</p></details>
<div class="preview-patterns">${patterns}</div>
<h2>Read the supporting responses</h2><p class="muted">Expand a student below. Judgments describe this response only, not general student ability.</p>
${students}
</section>`;
};
