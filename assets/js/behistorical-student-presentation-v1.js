(function(){
'use strict';
const D=window.BEHISTORICAL_STUDENT_DECK;
if(!D||!Array.isArray(D.slides))return;
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const qs=s=>document.querySelector(s);
let index=0;

function image(v,cls=''){
  if(!v||!v.url)return '';
  return `<img class="${cls}" src="${esc(v.url)}" alt="${esc(v.alt||'Historical visual')}" loading="eager">`;
}
function credit(v){return v&&v.credit?`<div class="credit">${esc(v.credit)}</div>`:'';}
function textBlock(s){
  const pos=s.position||'left';
  return `<div class="copy ${esc(pos)}"><div class="kicker">${esc(s.eyebrow||'')}</div><h2>${esc(s.title||'')}</h2>${s.subtitle?`<p>${esc(s.subtitle)}</p>`:''}</div>`;
}
function hero(s){return `<section class="slide hero ${esc(s.position||'left')}"><div class="media">${image(s.visual)}</div><div class="veil"></div>${textBlock(s)}${credit(s.visual)}</section>`;}
function simple(s){return `<section class="slide simple"><div class="simple-inner"><div class="kicker">${esc(s.eyebrow||'')}</div><h2>${esc(s.title||'')}</h2>${s.subtitle?`<p>${esc(s.subtitle)}</p>`:''}</div></section>`;}
function map(s){return `<section class="slide map"><div class="head"><div class="kicker">${esc(s.eyebrow||'')}</div><h2>${esc(s.title||'')}</h2></div><div class="map-media">${image(s.visual)}</div>${s.footer?`<div class="foot">${esc(s.footer)}</div>`:''}${credit(s.visual)}</section>`;}
function process(s){return `<section class="slide process"><div class="head"><div class="kicker">${esc(s.eyebrow||'')}</div><h2>${esc(s.title||'')}</h2></div><div class="process-track">${(s.steps||[]).map((x,i)=>`<article><span>${String(i+1).padStart(2,'0')}</span><b>${esc(x.label||'')}</b><p>${esc(x.text||'')}</p></article>`).join('')}</div>${s.footer?`<div class="foot">${esc(s.footer)}</div>`:''}</section>`;}
function grid(s){const cards=(s.cards||[]).map(c=>`<article><b>${esc(c.title||'')}</b><p>${esc(c.text||'')}</p></article>`).join('');if(s.visual)return `<section class="slide grid-slide has-visual"><div class="head"><div class="kicker">${esc(s.eyebrow||'')}</div><h2>${esc(s.title||'')}</h2></div><div class="grid-visual-wrap"><div class="card-grid">${cards}</div><div class="grid-visual">${image(s.visual)}</div></div>${s.footer?`<div class="foot">${esc(s.footer)}</div>`:''}${credit(s.visual)}</section>`;return `<section class="slide grid-slide"><div class="head"><div class="kicker">${esc(s.eyebrow||'')}</div><h2>${esc(s.title||'')}</h2></div><div class="card-grid">${cards}</div></section>`;}
function nodes(s){return `<section class="slide nodes"><div class="head"><div class="kicker">${esc(s.eyebrow||'')}</div><h2>${esc(s.title||'')}</h2>${s.subtitle?`<p>${esc(s.subtitle)}</p>`:''}</div><div class="node-grid">${(s.nodes||[]).map(n=>`<article style="background-image:linear-gradient(180deg,rgba(3,5,6,.12),rgba(3,5,6,.86)),url('${esc(n.visual&&n.visual.url||'')}')"><b>${esc(n.title||'')}</b><p>${esc(n.text||'')}</p></article>`).join('')}</div></section>`;}
function video(s){
  const v=s.video||{};const start=Number(v.start||0),end=Number(v.end||0);
  const q=[start?`start=${start}`:'',end?`end=${end}`:'','rel=0'].filter(Boolean).join('&');
  return `<section class="slide video"><div class="head"><div class="kicker">${esc(s.eyebrow||'')}</div><h2>${esc(s.title||'')}</h2></div><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${esc(v.youtubeId||'')}?${q}" title="${esc(v.label||s.title||'Video')}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>${s.footer?`<div class="foot">${esc(s.footer)}</div>`:''}</section>`;
}
function action(s){return `<section class="slide action"><div class="action-inner"><div class="kicker">${esc(s.eyebrow||'')}</div><h2>${esc(s.title||'')}</h2>${s.subtitle?`<p>${esc(s.subtitle)}</p>`:''}${s.action&&s.action.url?`<a href="${esc(s.action.url)}" class="action-button">${esc(s.action.label||'Open')}</a>`:''}</div></section>`;}
function renderSlide(s){
  if(window.BHSlideTemplates&&window.BHSlideTemplates.has(s.kind))return window.BHSlideTemplates.render(s);
  switch(s.kind){case'hero':return hero(s);case'map':return map(s);case'process':return process(s);case'grid':return grid(s);case'nodes':return nodes(s);case'video':return video(s);case'action':return action(s);default:return simple(s);}
}
function render(){
  const s=D.slides[index];qs('#stage').innerHTML=renderSlide(s);qs('#count').textContent=`${index+1} / ${D.slides.length}`;qs('#slideName').textContent=s.eyebrow||'';qs('#prev').disabled=index===0;qs('#next').disabled=index===D.slides.length-1;
  document.title=`BeHistorical | ${D.meta.topic} | ${s.title||D.meta.title}`;
}
function go(n){index=Math.max(0,Math.min(D.slides.length-1,n));render();}
function fullscreen(){const el=document.documentElement;if(!document.fullscreenElement){el.requestFullscreen&&el.requestFullscreen().catch(()=>{});}else{document.exitFullscreen&&document.exitFullscreen();}}

document.addEventListener('DOMContentLoaded',()=>{
  qs('#topic').textContent=D.meta.topic;qs('#deckTitle').textContent=D.meta.title;qs('#back').href=D.meta.backUrl||'../index.html';qs('#prev').onclick=()=>go(index-1);qs('#next').onclick=()=>go(index+1);qs('#full').onclick=fullscreen;
  document.addEventListener('keydown',e=>{if(e.key==='ArrowLeft')go(index-1);else if(e.key==='ArrowRight'||e.key===' ')go(index+1);else if(e.key==='Home')go(0);else if(e.key==='End')go(D.slides.length-1);else if(e.key==='f'||e.key==='F')fullscreen();});
  render();
});
})();