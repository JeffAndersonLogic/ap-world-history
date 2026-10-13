'use strict';
// Generate readable HTML from the same contract, fixtures, and judgment engine.
// File previews may disable scripts; the sample must still be useful there.
const core = require('./skilllens-pilot-core');
const escape = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
module.exports = function preview(data) {
  const {contract, responses, analyses} = data;
  const result = core.summarize(contract, responses, analyses, []);
  const closer=result.patterns.slice().sort((a,b)=>b.gap-a.gap)[0];
  const bands=['meets','partial','not_yet'];
  const bar=(counts,total,criterion) => `<div class="stacked-bar">${bands.filter(band=>counts[band]).map(band=>`<${criterion?'a':'span'} class="segment ${band}" style="width:${counts[band]/total*100}%" ${criterion?`href="#matches-${escape(criterion.id)}"`:''} title="${escape(core.labels[band])}: ${counts[band]} of ${total}">${counts[band]}</${criterion?'a':'span'}>`).join('')}</div>`;
  const legend='<div class="legend"><span><i class="swatch meets"></i>Meets</span><span><i class="swatch partial"></i>Partly shown</span><span><i class="swatch not_yet"></i>Not yet shown</span></div>';
  const heatmap = result.patterns.map(pattern=>{
    const counts=Object.fromEntries(bands.map(band=>[band,result.rows.filter(row=>row.criteria.some(j=>j.criterionId===pattern.id&&j.band===band)).length]));
    return `<div class="heatmap-row"><div class="heatmap-line"><a class="criterion-link" href="#matches-${escape(pattern.id)}">${escape(pattern.label)}</a>${bar(counts,pattern.assessed,pattern)}<span class="heatmap-percent">${Math.round(pattern.meets/pattern.assessed*100)}%</span></div><p class="heatmap-note">${pattern.gap} / ${pattern.assessed} partly or not yet shown · ${result.roster-pattern.assessed} outside this row</p></div>`;
  }).join('');
  const patterns = result.patterns.map(pattern => {
    const matches=bands.map(band=>{
      const ids=result.rows.filter(row=>row.criteria.some(j=>j.criterionId===pattern.id&&j.band===band)).map(row=>`<a href="#sample-${escape(row.response.id)}">${escape(row.response.label)}</a>`);
      return `<p><strong>${escape(core.labels[band])}:</strong> ${ids.join(', ')||'None'}</p>`;
    }).join('');
    return `<article id="matches-${escape(pattern.id)}" class="preview-pattern"><h3>${escape(pattern.label)}</h3><div class="preview-matches">${matches}</div><p class="suggestion"><strong>Possible next step:</strong> ${escape(pattern.action)}</p></article>`;
  }).join('\n');
  const metrics=[[result.counts.meets,'Meets all criteria','meets'],[result.counts.partial,'Partly shown','partial'],[result.counts.not_yet,'Not yet shown','not_yet'],[result.roster-result.assessed,'Not yet assessed','unassessed']].map(([n,label,band])=>`<div class="metric ${band}"><p class="eyebrow">${band==='unassessed'?'OUTSIDE THE PATTERN':'RESPONSE EVIDENCE'}</p><strong>${n}</strong><span class="metric-label">${label}</span><span class="metric-note">${band==='unassessed'?'Review, unanalyzed, blank or missing':`of ${result.assessed} fully assessed responses`}</span></div>`).join('');
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
  return `<section id="sample-preview" aria-label="Read-only Class Pulse">
<p class="notice"><strong>Read-only sample.</strong> Class information is ready below. Open this file in a desktop browser to filter responses, edit judgments, and download your review.</p>
<div class="metric-grid">${metrics}</div>
<div class="pulse-grid"><section class="panel"><p class="eyebrow">SELECTED CHECKPOINT</p><h2>Understanding at a glance</h2><p class="muted">${result.assessed} of ${result.roster} roster responses fully assessed.</p>${bar(result.counts,result.assessed)}${legend}<div class="insight"><h3>Worth a closer look: ${escape(closer.label)}</h3><p>${closer.gap} of ${closer.assessed} assessed responses partly or do not yet show this criterion.</p><a href="#matches-${escape(closer.id)}" class="text-button">View related responses →</a></div><p class="fine-print">Meets all criteria requires evidence for every essential criterion. Interpretations describe this response, never general ability.</p></section>
<section class="panel heatmap-panel"><p class="eyebrow">LEARNING TARGET EVIDENCE</p><h2>Success criteria heat map</h2><p class="muted">Follow a colored row to its response lists below.</p>${heatmap}${legend}<p class="fine-print">Green share = meets this criterion. Unjudged and absent work are excluded.</p></section></div>
<section class="panel preview-assignment"><h2>Response coverage</h2><p id="preview-coverage">${result.roster} roster entries · ${result.assessed} responses assessed · ${result.counts.review} needs review · ${result.counts.not_analyzed} not analyzed · ${result.counts.blank} blank · ${result.counts.missing} no submission</p><details class="assignment" id="sample-assignment"><summary>Assignment and criteria</summary><p>${escape(contract.prompt)}</p>${contract.criteria.map(c=>`<h3>${escape(c.label)}</h3><p>${escape(c.description)}</p>`).join('')}</details></section>
<section class="panel preview-patterns"><h2>Responses by criterion</h2><p class="muted">Choose a student, then expand their response. Editing controls require a browser that runs scripts.</p>${patterns}</section>
<h2 id="sample-evidence" class="preview-evidence-title">Read the supporting responses</h2><p class="muted">Expand a student below. Judgments describe this response only, not general student ability.</p>
${students}
<section class="panel" id="sample-meaning"><h2>What this means</h2><p>Read the writing before deciding what to reteach. Missing, blank, unreviewed, and unanalyzed work are not evidence of misunderstanding. These are authored examples, not an evaluated AI assessment.</p></section>
</section>`;
};
