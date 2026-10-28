/* Shared by the offline pilot and Node checks. No network or storage. */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.SkillLensPilot = factory();
}(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const bands = ['meets', 'partial', 'not_yet', 'review'];
  const labels = {meets: 'Meets this criterion', partial: 'Partly shown', not_yet: 'Not yet shown', review: 'Needs your review', missing: 'No submission', blank: 'Blank submission', not_analyzed: 'Not analyzed'};
  const copy = value => JSON.parse(JSON.stringify(value));
  const hasText = value => typeof value === 'string' && value.trim().length > 0;
  function validate(contract, response, analysis) {
    const errors = [];
    if (!analysis || typeof analysis !== 'object') return {valid: false, errors: ['No analysis received.']};
    if (analysis.contractId !== contract.contractId) errors.push('Assignment or criteria version changed.');
    if (analysis.responseId !== response.id || analysis.responseText !== response.text) errors.push('Response changed or belongs to another record.');
    if (!analysis.provenance || !hasText(analysis.provenance.author) || !hasText(analysis.provenance.version) || !['authored-synthetic', 'external-model'].includes(analysis.provenance.kind)) errors.push('Analysis provenance is missing.');
    if (!Array.isArray(analysis.criteria) || analysis.criteria.length !== contract.criteria.length) errors.push('Criterion set is incomplete.');
    const seen = new Set();
    for (const judgment of Array.isArray(analysis.criteria) ? analysis.criteria : []) {
      if (!judgment || !contract.criteria.some(c => c.id === judgment.criterionId) || seen.has(judgment.criterionId)) { errors.push('Unknown or repeated criterion.'); continue; }
      seen.add(judgment.criterionId);
      if (!bands.includes(judgment.band) || !hasText(judgment.reason)) errors.push('A judgment has no valid band or explanation.');
      if (!Array.isArray(judgment.evidence)) { errors.push('Evidence must be a list.'); continue; }
      for (const span of judgment.evidence) {
        if (!span || !Number.isInteger(span.start) || !Number.isInteger(span.end) || span.start < 0 || span.end <= span.start || span.end > response.text.length || !hasText(span.quote) || response.text.slice(span.start, span.end) !== span.quote) errors.push('An evidence quotation does not match the response.');
      }
      if (['meets', 'partial'].includes(judgment.band) && !judgment.evidence.length) errors.push('A positive judgment needs exact response evidence.');
    }
    return {valid: errors.length === 0, errors};
  }
  function snapshot(contract, response, analysis, overrides) {
    if (response.submission === 'missing') return {status: 'missing', criteria: [], errors: []};
    if (!response.text.trim()) return {status: 'blank', criteria: [], errors: []};
    const check = validate(contract, response, analysis);
    const base = check.valid ? copy(analysis.criteria) : contract.criteria.map(c => ({criterionId:c.id, band:'review', evidence:[], reason:analysis ? 'Analysis could not be verified. Review the full response.' : 'No analysis has been supplied.'}));
    let corrected = false;
    for (const j of base) {
      const history = (overrides || []).filter(o => o.responseId === response.id && o.criterionId === j.criterionId && o.contractId === contract.contractId && o.responseText === response.text);
      if (history.length) { const last = history[history.length - 1]; j.band = last.band; j.reason = last.reason; j.teacher = true; corrected = true; }
    }
    const essential = base.filter(j => contract.criteria.find(c => c.id === j.criterionId).essential);
    let status = essential.some(j => j.band === 'review') ? 'review' : essential.every(j => j.band === 'meets') ? 'meets' : essential.some(j => j.band === 'not_yet') ? 'not_yet' : 'partial';
    if (!analysis && !corrected) status = 'not_analyzed';
    return {status, criteria: base, errors: analysis && !check.valid ? check.errors : []};
  }
  function correct(contract, response, history, criterionId, band, reason, now) {
    if (response.submission === 'missing' || !response.text.trim()) throw new Error('Missing or blank work cannot receive an assessment band.');
    if (!contract.criteria.some(c => c.id === criterionId) || !bands.includes(band) || !hasText(reason)) throw new Error('Choose a criterion and band, and explain your judgment.');
    return history.concat({responseId:response.id, responseText:response.text, contractId:contract.contractId, criterionId, band, reason:reason.trim(), author:'Jeff Anderson', at:now || new Date().toISOString()});
  }
  function summarize(contract, responses, analyses, overrides) {
    const rows = responses.map(r => ({response:r, ...snapshot(contract, r, analyses.find(a => a.responseId === r.id), overrides)}));
    const counts = Object.fromEntries(Object.keys(labels).map(key => [key, rows.filter(r => r.status === key).length]));
    const patterns = contract.criteria.map(c => {
      const judgments = rows.flatMap(r => r.criteria.filter(j => j.criterionId === c.id));
      const assessed = judgments.filter(j => j.band !== 'review');
      return {...c, assessed:assessed.length, gap:assessed.filter(j => j.band !== 'meets').length, meets:assessed.filter(j => j.band === 'meets').length, review:judgments.length - assessed.length};
    });
    return {rows, counts, patterns, assessed:counts.meets + counts.partial + counts.not_yet, roster:responses.length};
  }
  function decision(contract, responses, analyses, overrides, criterionId, responseIds, action, now) {
    if (!hasText(action) || !responseIds.length || new Set(responseIds).size !== responseIds.length || !contract.criteria.some(c => c.id === criterionId)) throw new Error('Choose evidence and write an instructional action.');
    const evidence = responseIds.map(id => {
      const response = responses.find(r => r.id === id);
      if (!response || response.submission === 'missing' || !response.text.trim()) throw new Error('A decision needs submitted response evidence.');
      return {response:copy(response), judgment:snapshot(contract,response,analyses.find(a => a.responseId === id),overrides)};
    });
    return {contractId:contract.contractId, criterionId, action:action.trim(), author:'Jeff Anderson', at:now || new Date().toISOString(), evidence};
  }
  return {bands, labels, validate, snapshot, correct, summarize, decision};
}));
