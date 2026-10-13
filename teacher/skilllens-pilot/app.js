(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const node = (tag, text, className) => {const el=document.createElement(tag); if (text !== undefined) el.textContent=text; if(className) el.className=className; return el;};
  const core = window.SkillLensPilot, data = PILOT_DATA, contract=data.contract;
  let history=[], decisions=[], selected=new Set(), focus, currentId, dirty=false;
  const actionDrafts={};
  const flash = message => {$('feedback').textContent=message;};
  const summary = () => core.summarize(contract,data.responses,data.analyses,history);
  const current = () => data.responses.find(r=>r.id === currentId);
  const criterion = () => contract.criteria.find(c=>c.id === focus);
  function renderPatterns() {
    const s=summary();
    $('coverage').replaceChildren(...[[s.roster,'on the sample roster'],[s.assessed,'responses assessed'],[s.counts.review,'need your review'],[s.counts.not_analyzed,'not analyzed'],[s.counts.blank,'blank submission'],[s.counts.missing,'no submission']].map(([n,label])=>{const el=node('div',undefined,'metric');el.append(node('strong',n),node('span',label));return el;}));
    $('pattern-cards').replaceChildren(...s.patterns.map(p=>{
      const button=node('button',undefined,'pattern');button.type='button';button.dataset.criterion=p.id;button.setAttribute('aria-pressed',String(focus===p.id));
      button.append(node('span',p.label,'pattern-label'),node('span',p.gap+' / '+p.assessed,'count'),node('span','partly or not yet shown'),node('span',p.meets+' meet · '+p.review+' unreviewed / not analyzed','muted'));
      button.addEventListener('click',()=>{
        if(focus===p.id)return;
        actionDrafts[focus]=$('action').value;
        focus=p.id; selected.clear(); $('filter').value='gap'; currentId=null;
        $('action').value=actionDrafts[focus] || '';
        render();
        document.querySelector('[data-criterion="'+focus+'"]').focus();
      });return button;
    }));
  }
  function rowsInView() {
    return summary().rows.filter(row=>{
      const filter=$('filter').value,j=row.criteria.find(c=>c.criterionId===focus);
      if(filter==='all')return true;
      if(['missing','blank','not_analyzed'].includes(filter))return row.status===filter;
      if(row.status==='not_analyzed')return false;
      return filter==='gap' ? j && ['partial','not_yet'].includes(j.band) : j && j.band===filter;
    });
  }
  function renderEvidence() {
    const rows=rowsInView();
    if(!rows.some(r=>r.response.id===currentId))currentId=rows[0]?.response.id;
    $('student').replaceChildren(...rows.map(row=>{const option=node('option',row.response.label);option.value=row.response.id;return option;}));
    $('student').disabled=!rows.length;
    if(currentId)$('student').value=currentId;
    $('response-detail').replaceChildren();$('correction').hidden=true;$('evidence-choice').hidden=true;
    $('empty').hidden=!!rows.length;$('empty').textContent='No responses in this view. Choose another filter.';
    if(!rows.length)return;
    const row=rows.find(r=>r.response.id===currentId),r=row.response,j=row.criteria.find(c=>c.criterionId===focus);
    const displayBand=row.status==='not_analyzed'?'not_analyzed':j?.band || row.status;
    const detail=$('response-detail');detail.append(node('span',core.labels[displayBand],'badge '+displayBand));
    if(['missing','blank'].includes(row.status)){
      detail.append(node('p',row.status==='missing'?'There is no submission for this roster entry. This is not evidence of misunderstanding.':'A submission was received, but it has no response text. No assessment band is assigned.'));return;
    }
    detail.append(node('p','FULL RESPONSE · HIGHLIGHTED TEXT IS QUOTED EVIDENCE','observed-label'));
    const quote=node('blockquote');
    // Render every character safely; overlapping quote spans are merged visually.
    const spans=j.evidence || [];let start=0;
    while(start<r.text.length){const marked=spans.some(s=>s.start<=start&&s.end>start);let end=start+1;while(end<r.text.length&&spans.some(s=>s.start<=end&&s.end>end)===marked)end++;
      quote.append(marked?node('mark',r.text.slice(start,end)):document.createTextNode(r.text.slice(start,end)));start=end;}
    detail.append(quote);
    const interpretation=node('div',undefined,'interpretation');interpretation.append(node('h3',j.teacher?'YOUR INTERPRETATION':'PROVISIONAL INTERPRETATION · AUTHORED EXAMPLE'),node('p',j.reason));
    if(row.status==='not_analyzed')interpretation.firstChild.textContent='NO ANALYSIS SUPPLIED';
    if(row.errors.length)interpretation.append(node('p','Analysis needs review: '+row.errors.join(' '),'notice'));
    detail.append(interpretation);
    const changes=history.filter(o=>o.responseId===r.id&&o.criterionId===focus);
    if(changes.length){const original=data.analyses.find(a=>a.responseId===r.id)?.criteria.find(c=>c.criterionId===focus);const audit=node('details',undefined,'history');audit.append(node('summary',changes.length+' teacher change(s) · view original'));audit.append(node('p','Original: '+(original?core.labels[original.band]+' — '+original.reason:'Not analyzed.')));changes.forEach(c=>audit.append(node('p',core.labels[c.band]+' — '+c.reason)));detail.append(audit);}
    $('correction').hidden=false;$('band').value=j.band;$('reason').value='';$('correction-details').open=false;
    $('evidence-choice').hidden=false;$('include').checked=selected.has(r.id);
  }
  function renderSelection(){ $('selected-evidence').textContent=selected.size?Array.from(selected).map(id=>data.responses.find(r=>r.id===id).label).join(', '):'None yet. Select “Use this response in my decision” after reading the writing.'; }
  function render(){renderPatterns();$('focus-description').textContent=criterion().label;$('suggestion').textContent=criterion().action;renderEvidence();renderSelection();}
  function renderDecisions(){ $('decisions').replaceChildren(...decisions.map((d,i)=>{const item=node('article',undefined,'decision-record');item.append(node('h3','Decision '+(i+1)),node('p',d.action),node('p',contract.criteria.find(c=>c.id===d.criterionId).label+' · '+d.evidence.map(e=>e.response.label).join(', '),'muted'));return item;})); }
  try {
    if(data.synthetic!==true||data.responses.length!==12)throw new Error('The synthetic sample could not be verified.');
    for(const analysis of data.analyses){const response=data.responses.find(r=>r.id===analysis.responseId);if(!response||!core.validate(contract,response,analysis).valid)throw new Error('The authored sample contains an invalid evidence record.');}
    focus=summary().patterns.slice().sort((a,b)=>b.gap-a.gap)[0].id;
    $('prompt').textContent=contract.prompt;
    $('rubric').replaceChildren(...contract.criteria.map(c=>{const el=node('div',undefined,'rubric-item');el.append(node('h3',c.label),node('p',c.description),node('p',c.guidance,'muted'));return el;}));
    $('filter').addEventListener('change',()=>{currentId=null;renderEvidence();});
    $('student').addEventListener('change',()=>{currentId=$('student').value;renderEvidence();});
    $('include').addEventListener('change',()=>{if($('include').checked)selected.add(currentId);else selected.delete(currentId);renderSelection();});
    $('correction').addEventListener('submit',event=>{event.preventDefault();try{
      const label=current().label;
      history=core.correct(contract,current(),history,focus,$('band').value,$('reason').value);dirty=true;
      $('filter').value='all';
      render();flash('Saved your judgment for '+label+'. Class patterns now include your change.');
    }catch(error){flash(error.message);}});
    $('decision-form').addEventListener('submit',event=>{event.preventDefault();try{
      decisions.push(core.decision(contract,data.responses,data.analyses,history,focus,Array.from(selected),$('action').value));dirty=true;
      $('action').value='';delete actionDrafts[focus];selected.clear();renderSelection();$('include').checked=false;renderDecisions();flash('Decision recorded with the response evidence and judgments as they are now. Download your review to keep it.');
    }catch(error){flash(error.message);}});
    $('export').addEventListener('click',()=>{
      const output={format:'behistorical-synthetic-review-v1',exportedAt:new Date().toISOString(),synthetic:true,teacher:'Jeff Anderson',contract,responses:data.responses,originalAnalyses:data.analyses,overrides:history,decisions,summary:summary()};
      const url=URL.createObjectURL(new Blob([JSON.stringify(output,null,2)],{type:'application/json'}));const link=node('a');link.href=url;link.download='behistorical-synthetic-review.json';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);dirty=false;flash('Review download requested. Keep the JSON file as your record; this pilot does not re-import saved reviews.');
    });
    window.addEventListener('beforeunload',event=>{if(dirty){event.preventDefault();event.returnValue='';}});
    render();$('workspace').hidden=false;$('load-state').hidden=true;$('export').disabled=false;
  } catch(error) {
    $('workspace').hidden=true;$('load-state').textContent='The sample could not open. '+error.message+' ';
    const retry=node('button','Try again');retry.addEventListener('click',()=>location.reload());$('load-state').append(retry);
  }
}());
