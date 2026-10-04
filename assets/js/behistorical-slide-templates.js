/* BeHistorical slide templates: the one implementation.
 *
 * Every Teaching OS renderer (the six teacher pages and the student
 * presentation renderer) hands a slide to this module before its own switch:
 *
 *   if(window.BHSlideTemplates&&window.BHSlideTemplates.has(s.kind))return window.BHSlideTemplates.render(s);
 *
 * so a template written once works on the teacher screen, the projector and
 * the generated student deck alike. scripts/test/slide-templates.test.js fails
 * the push if a renderer loses that line or a deck stops loading this file.
 *
 * A template slide is ordinary slide data. `kind` names the template,
 * `eyebrow`, `title`, `subtitle` and `footer` work as they do everywhere else,
 * and everything the template needs beyond those lives in one `template`
 * object. The catalog, with a real example of every kind, is
 * teacher/slide-templates.html, built from teacher/data/slide-template-examples.js.
 *
 * Images: a visual is { url, alt, ai, credit, position, cropBottom, fit }.
 * fit:'contain' shows the whole picture, letterboxed, instead of filling the frame.
 * `ai: true` prints the house label, "Historical Reconstruction - AI
 * Generated", small, and nothing else, so no template can show an
 * AI-generated picture unlabeled or labeled some other way. `cropBottom`
 * (0 to 0.3) hides a strip along the bottom edge, for source files that have a
 * label printed into the picture.
 *
 * Text: `**bold**` is the one markup allowed in authored strings, and
 * `[[phrase]]` marks an error in a Fix the Error passage. Everything else is
 * escaped.
 *
 * Every size below is written in design pixels on a 1280x720 board, as `64u`,
 * and becomes calc(64*var(--u)), where --u is 1/1280 of the board width. The
 * board keeps 16:9 inside whatever box the host renderer gives it, including
 * a full-window projector stage that is not 16:9.
 */
(function(){
'use strict';

const LABEL='Historical Reconstruction - AI Generated';

const esc=v=>String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const rich=v=>esc(v).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>').replace(/\[\[(.+?)\]\]/g,'<span class="bht-err">$1</span>');
const arr=v=>Array.isArray(v)?v:[];
const num=(v,d)=>{const n=Number(v);return Number.isFinite(n)?n:d;};

/* ── shared pieces ─────────────────────────────────────────────────────── */

function board(kind,theme,inner){
  return `<section class="slide bht-slide" data-template="${esc(kind)}"><div class="bht ${theme==='paper'?'paper':'dark'} bht-${esc(kind)}"><div class="bht-in">${inner}</div></div></section>`;
}
function themeOf(t,def){return t&&(t.theme==='paper'||t.theme==='dark')?t.theme:def;}
function eyebrow(s){return s.eyebrow?`<div class="bht-eb">${esc(s.eyebrow)}</div>`:'';}
function title(s,cls){return s.title?`<h2 class="bht-h ${cls||''}">${rich(s.title)}</h2>`:'';}
function sub(s){return s.subtitle?`<p class="bht-sub">${rich(s.subtitle)}</p>`:'';}
function foot(text){return text?`<div class="bht-foot"><i></i><p>${rich(text)}</p></div>`:'';}
function head(s){return eyebrow(s)+title(s)+sub(s);}

/* A visual may name its own corner (tl, tr, bl, br) when the default would
   cover something printed on the picture, such as a map's own title. A corner
   the template chooses still wins. */
function tag(v,pos){
  if(!v)return '';
  const where=pos||(/^(tl|tr|bl|br)$/.test(v.tagPos)?v.tagPos:'tr');
  if(v.ai)return `<span class="bht-tag bht-ai ${where}">${LABEL}</span>`;
  if(v.credit)return `<span class="bht-tag bht-src ${where}">${esc(v.credit)}</span>`;
  return '';
}
/* A picture that fills its box. Always absolutely positioned inside a
   position:relative, overflow:hidden box the caller provides. */
function pic(v,opts){
  const o=opts||{};
  if(!v||!v.url)return `<div class="bht-ph"><span>${esc(o.placeholder||'Add an image')}</span></div>`;
  const crop=Math.max(0,Math.min(.3,num(v.cropBottom,0)));
  const pos=esc(v.position||o.position||'50% 50%');
  // A visual may ask to be shown whole (a map, a document) in any frame.
  const fit=o.fit==='contain'||v.fit==='contain'?'contain':'cover';
  const h=crop?` height:${(100/(1-crop)).toFixed(2)}%;`:'';
  const p=crop?pos.replace(/\S+$/,'0%'):pos;
  return `<img class="bht-img" src="${esc(v.url)}" alt="${esc(v.alt||'')}" loading="eager" style="object-fit:${fit}; object-position:${p};${h}">`;
}
function frame(v,cls,opts){
  const o=opts||{};
  return `<div class="bht-frame ${cls||''}">${pic(v,o)}${o.noTag?'':tag(v,o.tagPos)}</div>`;
}
function dots(n,filled){
  const count=Math.max(1,Math.min(40,num(n,1)));
  let out='';
  for(let i=0;i<count;i++)out+=`<i class="${filled?'on':''}"></i>`;
  return `<div class="bht-dots ${count===1?'one':''}">${out}</div>`;
}
function pad(inner,cls){return `<div class="bht-pad ${cls||''}">${inner}</div>`;}
function grow(inner,cls){return `<div class="bht-grow ${cls||''}">${inner}</div>`;}

/* ── relationships ─────────────────────────────────────────────────────── */

function equation(s){
  const t=s.template||{},terms=arr(t.terms),n=terms.length;
  // The terms share one line, so their size comes from how much they say:
  // Cinzel caps run about .8em a letter, and the operators and gaps take the rest.
  const chars=terms.reduce((a,x)=>a+String(x.word||'').length,0)||1;
  const size=Math.max(30,Math.min(56,Math.floor((1128-Math.max(0,n-1)*96)/(chars*.8))));
  const cols=[];let cells='';
  terms.forEach((x,i)=>{
    cols.push('auto');
    cells+=`<div class="bht-eq-term" style="grid-column:${2*i+1};grid-row:1;font-size:calc(${size}*var(--u))"><b>${esc(x.word)}</b><span>${esc(x.note)}</span></div>`;
    if(i<n-1){cols.push('auto');cells+=`<div class="bht-eq-op" style="grid-column:${2*i+2};grid-row:1">+</div>`;}
  });
  arr(t.groups).forEach((g,k)=>{
    const a=Math.max(0,num(g.from,0)),b=Math.min(n-1,num(g.to,a));
    cells+=`<div class="bht-eq-brace ${k%2?'alt':''}" style="grid-column:${2*a+1} / ${2*b+2};grid-row:2"><i></i><span>${esc(g.label)}</span></div>`;
  });
  const r=t.result||{};
  const res=`<div class="bht-eq-res"><em>=</em><b>${esc(r.word)}</b><span>${esc(r.note)}</span></div>`;
  return board('equation',themeOf(t,'dark'),pad(head(s)+grow(`<div class="bht-eq" style="grid-template-columns:${cols.join(' ')||'auto'}">${cells}</div>${res}`)+foot(s.footer)));
}

function equationStack(s){
  const t=s.template||{},terms=arr(t.terms),r=t.result||{};
  const rows=terms.map((x,i)=>`<div class="bht-stk-row"><div class="op">${i?'+':''}</div><div class="w">${esc(x.word)}</div><div class="n">${esc(x.note)}</div></div>`).join('');
  return board('equation-stack',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-stk">${rows}<div class="bht-stk-line"></div><div class="bht-stk-row res"><div class="op">=</div><div class="w">${esc(r.word)}</div><div class="n">${esc(r.note)}</div></div></div>`)+foot(s.footer)));
}

function equationRemove(s){
  const t=s.template||{},terms=arr(t.terms);
  const cells=terms.map(x=>`<div class="bht-rm"><svg viewBox="0 0 44 44" aria-hidden="true"><circle cx="22" cy="22" r="20"></circle><line x1="14" y1="14" x2="30" y2="30"></line><line x1="30" y1="14" x2="14" y2="30"></line></svg><b>${esc(x.word)}</b><p>${rich(x.without)}</p></div>`).join('');
  return board('equation-remove',themeOf(t,'dark'),pad(head(s)+grow(`<div class="bht-rm-row" style="grid-template-columns:repeat(${Math.max(1,terms.length)},minmax(0,1fr))">${cells}</div>`)+foot(s.footer)));
}

function exchange(s){
  const t=s.template||{},places=arr(t.places).slice(0,4),flows=arr(t.flows).slice(0,2);
  const tones=['steel','mid','bronze','mid'];
  const bands=places.map((p,i)=>`<div class="bht-band ${esc(p.tone||tones[i])}"><div class="tg">${esc(p.tag)}</div><div class="tx"><b>${esc(p.name)}</b><span>${rich(p.text)}</span></div></div>`).join('');
  const arrows=flows.map((f,i)=>{
    const up=f.dir!=='down';
    const hd='<i class="hd"></i>',sh=`<i class="sh ${i?'dash':''}"></i>`,lb=`<span>${esc(f.label)}</span>`;
    return `<div class="bht-varrow ${up?'up':'down'} ${i?'second':''}">${up?hd+sh+lb:lb+sh+hd}</div>`;
  }).join('');
  const left=`<div class="bht-col">${head(s)}${t.lede?`<p class="bht-lede">${rich(t.lede)}</p>`:''}<div class="bht-fill"></div>${foot(s.footer)}</div>`;
  return board('exchange',themeOf(t,'paper'),pad(`<div class="bht-ex">${left}<div class="bht-ex-map"><div class="bht-bands">${bands}</div><div class="bht-arrows">${arrows}</div></div></div>`,'row'));
}

function exchangeFlow(s){
  const t=s.template||{},pl=arr(t.places),fl=arr(t.flows);
  const place=(p,al)=>`<div class="bht-fl-place ${al}"><b>${esc(p&&p.name)}</b><span>${esc(p&&p.note)}</span></div>`;
  const f0=fl[0]||{},f1=fl[1]||{};
  const a0=f0.dir==='left'?'M540 70 Q280 0 20 70':'M20 70 Q280 0 540 70';
  const a1=f1.dir==='right'?'M20 140 Q280 210 540 140':'M540 140 Q280 210 20 140';
  const svg=`<svg class="bht-fl-svg" viewBox="0 0 560 210" aria-hidden="true"><defs><marker id="bhtA" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="m1"></path></marker><marker id="bhtB" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" class="m2"></path></marker></defs>${fl[0]?`<path d="${a0}" class="a1" marker-end="url(#bhtA)"></path><text x="280" y="22" class="t1">${esc(f0.label)}</text>`:''}${fl[1]?`<path d="${a1}" class="a2" marker-end="url(#bhtB)"></path><text x="280" y="202" class="t2">${esc(f1.label)}</text>`:''}</svg>`;
  return board('exchange-flow',themeOf(t,'dark'),pad(head(s)+grow(`<div class="bht-fl">${place(pl[0],'l')}${svg}${place(pl[1],'r')}</div>`)+foot(s.footer)));
}

function exchangeHub(s){
  const t=s.template||{},spokes=arr(t.spokes).slice(0,6),W=1128,H=480,cx=W/2,cy=H/2;
  let lines='',labels='';
  spokes.forEach((p,i)=>{
    const ang=num(p.angle,-150+i*(300/Math.max(1,spokes.length-1)));
    const a=ang*Math.PI/180,x0=cx+300*Math.cos(a),y0=cy+300*Math.sin(a)*.75,x1=cx+110*Math.cos(a),y1=cy+110*Math.sin(a)*.75;
    lines+=`<line x1="${x0.toFixed(0)}" y1="${y0.toFixed(0)}" x2="${x1.toFixed(0)}" y2="${y1.toFixed(0)}" marker-end="url(#bhtH)"></line>`;
    const left=x0<cx;
    labels+=`<div class="bht-hub-lab ${left?'l':'r'}" style="${left?`right:${((W-x0+14)/W*100).toFixed(2)}%`:`left:${((x0+14)/W*100).toFixed(2)}%`};top:${((y0-26)/H*100).toFixed(2)}%"><b>${esc(p.name)}</b><span>${esc(p.note)}</span></div>`;
  });
  const c=t.center||{};
  const svg=`<svg viewBox="0 0 ${W} ${H}" aria-hidden="true"><defs><marker id="bhtH" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z"></path></marker></defs>${lines}<circle cx="${cx}" cy="${cy}" r="96"></circle></svg>`;
  return board('exchange-hub',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-hub">${svg}<div class="bht-hub-c">${esc(c.name)}</div>${labels}</div>`)+foot(s.footer)));
}

function splitContrast(s){
  const t=s.template||{},L=t.left||{},R=t.right||{};
  const items=arr(R.items).map(x=>`<div class="k">${esc(x.label)}</div><div class="v">${rich(x.text)}</div>`).join('');
  const ltext=arr(L.text).map(p=>`<p>${rich(p)}</p>`).join('');
  return board('split-contrast','paper',`<div class="bht-sc"><div class="bht-sc-l"><div class="bht-eb">${esc(L.tag)}</div><h2 class="bht-h">${rich(L.title)}</h2><div class="bht-sc-track">${dots(L.count||1,true)}</div><div class="bht-sc-text">${ltext}</div></div><div class="bht-sc-r"><div class="bht-eb">${esc(R.tag)}</div><h2 class="bht-h">${rich(R.title)}</h2>${dots(R.count||27,false)}<div class="bht-kv">${items}</div><div class="bht-fill"></div>${foot(s.footer)}</div></div>`);
}

function splitMirror(s){
  const t=s.template||{},L=t.left||{},R=t.right||{};
  const rows=arr(t.rows).map(r=>`<div class="bht-mr-row"><div class="l">${rich(r.left)}</div><div class="m">${esc(r.label)}</div><div class="r">${rich(r.right)}</div></div>`).join('');
  return board('split-mirror',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-mr"><div class="bht-mr-head"><div class="l">${esc(L.name)}</div><div></div><div class="r">${esc(R.name)}</div></div>${rows}</div>`)+foot(s.footer)));
}

function splitMatrix(s){
  const t=s.template||{},cols=arr(t.columns).slice(0,4),n=Math.max(1,cols.length);
  const heads=cols.map(c=>`<div class="c">${esc(c.name)}</div>`).join('');
  const rows=arr(t.rows).map(r=>`<div class="bht-mx-row"><div class="m">${esc(r.label)}</div>${cols.map((_,i)=>`<div class="c">${rich(arr(r.cells)[i])}</div>`).join('')}</div>`).join('');
  const span=t.result?`<div class="bht-mx-row bht-mx-span"><div class="m">${esc(t.result.label)}</div><div class="c">${rich(t.result.text)}</div></div>`:'';
  return board('split-matrix',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-mx" style="--n:${n}"><div class="bht-mx-head"><div></div>${heads}</div>${rows}${span}</div>`)+foot(s.footer)));
}

function splitDiagonal(s){
  const t=s.template||{},B=t.before||{},A=t.after||{};
  return board('split-diagonal','paper',`<svg class="bht-dg-cut" viewBox="0 0 1280 720" preserveAspectRatio="none" aria-hidden="true"><polygon points="0,0 780,0 500,720 0,720"></polygon></svg><div class="bht-dg-b"><div class="bht-eb">${esc(B.tag||'Before')}</div><h2 class="bht-h">${rich(B.title)}</h2><p>${rich(B.text)}</p></div><div class="bht-dg-date"><span>${esc(t.date)}</span></div><div class="bht-dg-a"><div class="bht-eb">${esc(A.tag||'After')}</div><h2 class="bht-h">${rich(A.title)}</h2><p>${rich(A.text)}</p></div>`);
}

function compounding(s){
  const t=s.template||{},st=arr(t.steps),n=Math.max(1,st.length);
  const rows=st.map((x,i)=>{const pct=n===1?100:Math.round(30+70*i/(n-1));return `<div class="bht-cp-row"><div class="lab"><b>${esc(x.label)}</b><span>${rich(x.text)}</span></div><div class="bht-cp-bar" style="width:${pct}%"><i></i><em></em></div></div>`;}).join('');
  return board('compounding',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-cp">${rows}</div>`)+foot(s.footer)));
}

function compoundingSnowball(s){
  const t=s.template||{},st=arr(t.steps),n=Math.max(1,st.length);
  const out=st.map((x,i)=>{const d=Math.round(70+102*(n===1?1:i/(n-1)));const twist=x.twist||(t.twistLast&&i===n-1);return `<div class="bht-sb-step"><i class="${twist?'tw':''}" style="width:calc(${d}*var(--u));height:calc(${d}*var(--u));opacity:${twist?1:(.35+.55*(n===1?1:i/(n-1))).toFixed(2)}"></i><b>${esc(x.label)}</b><span>${rich(x.text)}</span></div>${i<n-1?'<div class="bht-sb-ar">&#8594;</div>':''}`;}).join('');
  return board('compounding-snowball',themeOf(t,'dark'),pad(head(s)+grow(`<div class="bht-sb">${out}</div>`)+foot(s.footer)));
}

function compoundingStairs(s){
  const t=s.template||{},st=arr(t.steps),n=Math.max(1,st.length);
  const cols=st.map((x,i)=>`<div class="bht-st-col"><b>${esc(x.label)}</b><span>${rich(x.text)}</span><i style="height:calc(${Math.round(90+285*(n===1?1:i/(n-1)))}*var(--u));opacity:${(.45+.55*(n===1?1:i/(n-1))).toFixed(2)}"></i></div>`).join('');
  return board('compounding-stairs',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-st" style="grid-template-columns:repeat(${n},minmax(0,1fr))">${cols}</div>`)+foot(s.footer)));
}

function annotated(s){
  const t=s.template||{},pins=arr(t.pins).slice(0,5),n=Math.max(1,pins.length);
  const IW=440,IH=520,IT=10,rowH=520/n;
  let svg='',labels='';
  pins.forEach((p,i)=>{
    const px=num(p.x,.5)*IW,py=IT+num(p.y,.5)*IH,ly=IT+rowH*i+rowH/2;
    svg+=`<line x1="${px.toFixed(0)}" y1="${py.toFixed(0)}" x2="520" y2="${ly.toFixed(0)}"></line><line x1="520" y1="${ly.toFixed(0)}" x2="560" y2="${ly.toFixed(0)}"></line><circle cx="${px.toFixed(0)}" cy="${py.toFixed(0)}" r="9" class="ring"></circle><circle cx="${px.toFixed(0)}" cy="${py.toFixed(0)}" r="3" class="dot"></circle>`;
    labels+=`<div class="bht-an-lab" style="top:${((ly-20)/560*100).toFixed(2)}%"><b>${esc(p.label)}</b><span>${rich(p.text)}</span></div>`;
  });
  return board('annotated',themeOf(t,'dark'),pad(head(s)+`<div class="bht-an">${frame(t.visual,'bht-an-img',{placeholder:t.placeholder||'Add the real object this slide annotates'})}<svg class="bht-an-svg" viewBox="0 0 1128 560" aria-hidden="true">${svg}</svg>${labels}</div>`+foot(s.footer)));
}

/* ── time ──────────────────────────────────────────────────────────────── */

function axis(t,events){
  const years=events.length?events:[0];
  const r=arr(t.range);
  const y0=num(r[0],Math.min(...years)),y1=num(r[1],Math.max(...years));
  return {y0,y1:y1===y0?y0+1:y1};
}
function ticks(y0,y1,step,xp,top,bottom,cls,avoid){
  // A tick number printed beside an event's own year (1325 under 1324) reads
  // as a second date, so ticks that land next to an event keep the line and
  // drop the number.
  const near=x=>(avoid||[]).some(a=>Math.abs(a-x)<34);
  let out='';const st=Math.max(1,num(step,0)||Math.pow(10,Math.floor(Math.log10(Math.max(1,y1-y0))))/2||1);
  for(let y=Math.ceil(y0/st)*st;y<=y1;y+=st)out+=`<line x1="${xp(y).toFixed(0)}" y1="${top}" x2="${xp(y).toFixed(0)}" y2="${bottom}" class="${cls||'tk'}"></line>${near(xp(y))?'':`<text x="${xp(y).toFixed(0)}" y="${bottom+26}" class="ty">${y}</text>`}`;
  return out;
}

function timeline(s){
  const t=s.template||{},ev=arr(t.events).slice(0,6),ax=axis(t,ev.map(e=>num(e.year,0)));
  const X0=40,X1=1088,W=1128,LW=200,GAP=14,xp=y=>X0+(y-ax.y0)/(ax.y1-ax.y0)*(X1-X0);
  let svg=`<line x1="${X0}" y1="150" x2="${X1}" y2="150" class="axis"></line>`+ticks(ax.y0,ax.y1,t.tick,xp,144,156,'tk',ev.map(e=>xp(num(e.year,ax.y0))));
  // Each label goes above or below the line, whichever side has room for it
  // next to the label before it, so events that crowd together in time (the
  // point of a to-scale timeline) do not print on top of each other.
  const right={up:-Infinity,down:-Infinity};let labels='';
  ev.map(e=>({e,x:xp(num(e.year,ax.y0))})).sort((p,q)=>p.x-q.x).forEach(({e,x},i)=>{
    const want=Math.max(0,Math.min(x-20,W-LW));
    const fits=side=>want>=right[side]+GAP;
    const pref=i%2?'down':'up',other=pref==='up'?'down':'up';
    const side=fits(pref)?pref:fits(other)?other:(right.up<=right.down?'up':'down');
    const left=Math.min(W-LW,Math.max(want,right[side]+GAP));
    right[side]=left+LW;
    const up=side==='up',anchor=Math.min(Math.max(x,left+8),left+LW-8);
    svg+=`<polyline points="${x.toFixed(0)},${up?140:160} ${x.toFixed(0)},${up?128:172} ${anchor.toFixed(0)},${up?118:196}" class="st"></polyline><circle cx="${x.toFixed(0)}" cy="150" r="10" class="pt"></circle>`;
    const alignRight=left+LW>=W-4&&x>left+LW/2;
    labels+=`<div class="bht-tl-lab ${up?'up':'down'} ${alignRight?'r':''}" style="left:${(left/W*100).toFixed(2)}%"><b>${esc(e.label||e.year)}</b><span>${rich(e.text)}</span></div>`;
  });
  return board('timeline',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-tl"><svg viewBox="0 0 1128 330" aria-hidden="true">${svg}</svg><div class="bht-tl-labs">${labels}</div></div>`)+foot(s.footer)));
}

function timelineSpans(s){
  const t=s.template||{},sp=arr(t.spans).slice(0,5),ax=axis(t,sp.flatMap(x=>[num(x.start,0),num(x.end,0)]));
  const X0=200,X1=1128,xp=y=>X0+(y-ax.y0)/(ax.y1-ax.y0)*(X1-X0),gap=Math.min(105,300/Math.max(1,sp.length-1||1));
  let svg=ticks(ax.y0,ax.y1,t.tick,xp,0,330,'grid'),labels='';
  const tones=['bronze','ox','steel','rust','iron'];
  sp.forEach((x,i)=>{
    const yy=30+i*gap,a=xp(num(x.start,ax.y0)),b=xp(num(x.end,ax.y0));
    const lab=x.range||`${num(x.start,'')} to ${num(x.end,'')}`;
    const inside=b>1128-130;
    svg+=`<rect x="${a.toFixed(0)}" y="${yy}" width="${Math.max(6,b-a).toFixed(0)}" height="34" rx="17" class="${tones[i%5]}"></rect><text x="${inside?(b-14).toFixed(0):(b+12).toFixed(0)}" y="${yy+23}" class="rl ${inside?'in':''}">${esc(lab)}</text>`;
    labels+=`<div class="bht-sp-lab" style="top:${((yy-8)/370*100).toFixed(2)}%"><b>${esc(x.name)}</b><span>${esc(x.note)}</span></div>`;
  });
  return board('timeline-spans',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-sp"><svg viewBox="0 0 1128 370" aria-hidden="true">${svg}</svg>${labels}</div>`)+foot(s.footer)));
}

function timelineLanes(s){
  const t=s.template||{},lanes=arr(t.lanes).slice(0,3),all=lanes.flatMap(l=>arr(l.events).map(e=>num(e.year,0))),ax=axis(t,all);
  const X0=210,X1=1128,xp=y=>X0+(y-ax.y0)/(ax.y1-ax.y0)*(X1-X0),n=Math.max(1,lanes.length),laneY=i=>Math.round(120+i*Math.min(180,280/Math.max(1,n-1)));
  let svg=ticks(ax.y0,ax.y1,t.tick,xp,20,400,'grid'),labels='';
  lanes.forEach((l,i)=>{
    const ly=n===1?220:laneY(i),cls=i%2?'b':'a';
    svg+=`<line x1="${X0}" y1="${ly}" x2="${X1}" y2="${ly}" class="lane ${cls}"></line>`;
    labels+=`<div class="bht-ln-name" style="top:${((ly-16)/440*100).toFixed(2)}%">${esc(l.name)}</div>`;
    arr(l.events).slice(0,5).forEach(e=>{
      const x=xp(num(e.year,ax.y0));
      svg+=`<circle cx="${x.toFixed(0)}" cy="${ly}" r="9" class="pt ${cls}"></circle>`;
      labels+=`<div class="bht-ln-ev ${cls}" style="left:${((x-64)/1128*100).toFixed(2)}%;top:${((ly-78)/440*100).toFixed(2)}%"><b>${esc(e.label||e.year)}</b><span>${esc(e.text)}</span></div>`;
    });
  });
  return board('timeline-lanes',themeOf(t,'dark'),pad(head(s)+grow(`<div class="bht-ln"><svg viewBox="0 0 1128 440" aria-hidden="true">${svg}</svg>${labels}</div>`)+foot(s.footer)));
}

/* ── voice and judgment ────────────────────────────────────────────────── */

function sourceQuote(s){
  const t=s.template||{},a=t.attribution||{};
  const who=[esc(a.author),a.work?`<i>${esc(a.work)}</i>`:'',esc(a.year)].filter(Boolean).join(', ');
  const side=t.visual||t.notice?`<div class="bht-sq-side">${t.visual?frame(t.visual,'bht-sq-img',{fit:'contain'}):''}${t.notice?`<div class="bht-eb">Notice</div><p>${rich(t.notice)}</p>`:''}</div>`:'';
  return board('source-quote',themeOf(t,'paper'),pad(`<div class="bht-sq ${side?'':'solo'}"><div class="bht-col">${eyebrow(s)}<div class="bht-sq-mark">&#8220;</div><p class="bht-sq-q">${rich(t.quote)}</p><div class="bht-sq-who">${who}</div><div class="bht-fill"></div>${foot(s.footer)}</div>${side}</div>`,'row'));
}

function sharpen(s){
  const t=s.template||{};
  return board('sharpen',themeOf(t,'paper'),pad(eyebrow(s)+grow(`<div class="bht-sh"><div class="bht-sh-k weak">${esc(t.weakLabel||'Too small')}</div><div class="bht-sh-weak"><span>${rich(t.weak)}</span><i></i></div><div class="bht-sh-k">${esc(t.strongLabel||'AP-sized')}</div><p class="bht-sh-strong">${rich(t.strong)}</p></div>`)+foot(s.footer)));
}

/* ── BeReady: one frame, a different move each day ─────────────────────── */

function beready(kind,mode,middle,s,t,defTheme){
  const theme=themeOf(t,defTheme);
  const time=t.time===false?'':esc(t.time||'4 minutes');
  const notes=t.noNotes===false?'':'No notes';
  const pills=(time||notes)?`<div class="bht-pills">${time?`<span class="fill">${time}</span>`:''}${notes?`<span>${notes}</span>`:''}</div>`:'';
  const eb=s.eyebrow||`BeReady · ${mode}`;
  const turn=t.turn?`<div class="bht-turn"><div>${esc(t.turnLabel||'The turn')}</div><p>${rich(t.turn)}</p></div>`:'';
  return board(kind,theme,`<div class="bht-br"><div class="bht-br-top"><div class="bht-col"><div class="bht-eb">${esc(eb)}</div>${title(s)}${pills}</div><div class="bht-br-mid">${middle}</div></div>${turn}</div>`);
}
function brRecall(s){const t=s.template||{};return beready('beready-recall','Recall',`<div class="bht-rl">${arr(t.questions).slice(0,4).map(q=>`<div><b>${esc(q.label)}</b><p>${rich(q.text)}</p></div>`).join('')}</div>`,s,t,'dark');}
function brFix(s){const t=s.template||{};return beready('beready-fix','Fix the Error',`<div class="bht-fx"><div class="k">${esc(t.source||'A student wrote this')}</div><div class="card"><p>${rich(t.passage)}</p></div><p class="ask">${rich(t.instruction||'Something here is wrong. Fix it in your own words.')}</p></div>`,s,t,'paper');}
function brBank(s){const t=s.template||{};return beready('beready-bank','Word Bank',`<div class="bht-bk"><div class="chips">${arr(t.words).slice(0,10).map(w=>`<span>${esc(w)}</span>`).join('')}</div><p class="ask">${rich(t.prompt||'Pick **two**. Write one sentence that explains how they are connected.')}</p>${t.push?`<p class="push">${rich(t.push)}</p>`:''}</div>`,s,t,'paper');}
function brAnswer(s){const t=s.template||{};return beready('beready-answer','Answer First',`<div class="bht-af"><div class="k">${esc(t.label||'Here is the answer')}</div><div class="a">${esc(t.answer)}</div><p class="ask">${rich(t.prompt)}</p></div>`,s,t,'dark');}
function brOdd(s){const t=s.template||{};return beready('beready-odd','Odd One Out',`<div class="bht-oo"><div class="list">${arr(t.terms).slice(0,5).map(w=>`<div>${esc(w)}</div>`).join('')}</div><p class="ask">${rich(t.prompt||'Which one does not belong? **Defend it in one sentence.**')}</p><p class="push">${rich(t.note||'More than one answer can win if the reason holds.')}</p></div>`,s,t,'dark');}

/* ── image frames ──────────────────────────────────────────────────────── */

function fLetterbox(s){
  const t=s.template||{};
  return board('frame-letterbox','dark',`<div class="bht-lb-top">${eyebrow(s)}</div>${frame(t.visual,'bht-lb-img')}<div class="bht-lb-bot">${title(s)}${sub(s)}</div>`);
}
function fQuestion(s){
  const t=s.template||{},right=t.side!=='left';
  const copy=`<div class="bht-fq-copy">${head(s)}</div>`,img=frame(t.visual,'bht-fq-img');
  return board('frame-question','paper',`<div class="bht-fq ${right?'':'flip'}">${right?copy+img:img+copy}</div>`);
}
function fPlacard(s){
  const t=s.template||{},p=t.placard||{};
  return board('frame-placard','paper',`${frame(t.visual,'bht-pl-img')}<div class="bht-pl-card"><div class="bht-eb">${esc(p.tag||s.eyebrow)}</div><div class="n">${esc(p.name||s.title)}</div><p>${rich(p.text||s.subtitle)}</p></div>`);
}
function fTriptych(s){
  const t=s.template||{},panels=arr(t.panels).slice(0,4);
  return board('frame-triptych','dark',pad(eyebrow(s)+title(s)+`<div class="bht-tp" style="grid-template-columns:repeat(${Math.max(1,panels.length)},minmax(0,1fr))">${panels.map(p=>`<div class="bht-tp-p">${frame(p.visual,'bht-tp-img',{tagPos:'tl'})}<div class="cap">${esc(p.title)}</div></div>`).join('')}</div>`,'tight'));
}
function fStepIn(s){
  const t=s.template||{};
  return board('frame-stepin','dark',`${frame(t.visual,'bht-full',{tagPos:'tl'})}<div class="bht-si-veil"></div><div class="bht-si-copy"><div class="bht-eb">${esc(s.eyebrow||'Step Into the Scene')}</div>${arr(t.lines).map(l=>`<p class="l">${rich(l)}</p>`).join('')}${t.question?`<p class="q">${rich(t.question)}</p>`:''}${t.note?`<p class="n">${rich(t.note)}</p>`:''}</div>`);
}
function fEvidence(s){
  const t=s.template||{},ev=t.evidence||{};
  return board('frame-evidence','paper',pad(head(s)+`<div class="bht-fe"><div class="c">${frame(t.scene,'bht-fe-img',{tagPos:'tl'})}<div class="k">${esc(t.sceneLabel||'Imagine it')}</div></div><div class="c">${frame(ev,'bht-fe-img ev',{fit:'contain',tagPos:'tl'})}<div class="k ev">${esc(t.evidenceLabel||'Reason from it')}</div></div></div>`,'tight'));
}
function fSubtitle(s){
  const t=s.template||{};
  return board('frame-subtitle','dark',`${frame(t.visual,'bht-full')}<div class="bht-sub-veil"></div>${s.eyebrow?`<div class="bht-sub-eb">${eyebrow(s)}</div>`:''}<div class="bht-sub-line"><p>${rich(t.line||s.title)}</p></div>`);
}
/* A strip of small pictures carries one label for the strip: a label per
   frame is cut off by frames this narrow. A strip that mixes AI images with
   real sources labels each frame instead, since one label would then be false
   for some of them. */
function stripTag(panels){
  const vs=panels.map(p=>p.visual).filter(v=>v&&v.url);
  if(!vs.length)return '';
  if(vs.every(v=>v.ai))return `<span class="bht-tag bht-ai bht-sbd-tag">${LABEL}</span>`;
  return '';
}
function fStoryboard(s){
  const t=s.template||{},panels=arr(t.panels).slice(0,5),n=Math.max(1,panels.length);
  const allAi=!!stripTag(panels);
  let holes='';for(let i=0;i<34;i++)holes+='<i></i>';
  return board('frame-storyboard','dark',pad(`<div class="bht-sbd-h">${eyebrow(s)}${title(s)}</div><div class="bht-sbd"><div class="holes">${holes}</div><div class="cells" style="grid-template-columns:repeat(${n},minmax(0,1fr))">${panels.map(p=>`<div class="cell">${frame(p.visual,'bht-sbd-img',{noTag:allAi,tagPos:'tl'})}<b>${esc(p.title)}</b><span>${rich(p.text)}</span></div>`).join('')}</div><div class="holes">${holes}</div>${stripTag(panels)}</div>`,'tight'));
}
function fPostcard(s){
  const t=s.template||{};
  let lines='';for(let i=0;i<num(t.lines,5);i++)lines+='<i></i>';
  return board('frame-postcard','paper',`<div class="bht-pc">${frame(t.visual,'bht-pc-img',{tagPos:'bl'})}<div class="bht-pc-back">${t.stamp?`<div class="stamp">${esc(t.stamp)}</div>`:''}<div class="bht-eb">${esc(s.eyebrow||'Postcard Home')}</div><div class="h">${rich(s.title)}</div><p>${rich(t.prompt)}</p><div class="lines">${lines}</div></div></div>`);
}
function fPorthole(s){
  const t=s.template||{};
  let rivets='';[[0,-.92],[.92,0],[0,.92],[-.92,0],[.65,-.65],[.65,.65],[-.65,.65],[-.65,-.65]].forEach(([x,y])=>{rivets+=`<i style="left:${(50+50*x*1.02).toFixed(1)}%;top:${(50+50*y*1.02).toFixed(1)}%"></i>`;});
  return board('frame-porthole','dark',`<div class="bht-ph-ring">${frame(t.visual,'bht-ph-img',{noTag:true})}${rivets}</div>${t.visual&&t.visual.ai?`<span class="bht-tag bht-ai bht-ph-tag">${LABEL}</span>`:tag(t.visual,'bht-ph-tag')}<div class="bht-ph-copy">${head(s)}</div>`);
}
function fNumber(s){
  const t=s.template||{};
  return board('frame-number','paper',`<div class="bht-nb">${frame(t.visual,'bht-nb-img',{tagPos:'tl'})}<div class="bht-nb-copy">${eyebrow(s)}<div class="big">${esc(t.number)}</div>${t.unit?`<div class="unit">${esc(t.unit)}</div>`:''}${t.range?`<div class="rng">${esc(t.range)}</div>`:''}${t.text?`<p>${rich(t.text)}</p>`:''}</div></div>`);
}
function fCover(s){
  const t=s.template||{},st=t.story||{};
  return board('frame-cover','dark',`${frame(t.visual,'bht-full',{noTag:true})}<div class="bht-cv-top"></div><div class="bht-cv-bot"></div><div class="bht-cv-mast"><div class="m">${esc(t.masthead)}</div><div class="i">${esc(t.issue)}</div></div>${tag(t.visual,'bht-cv-tag')}<div class="bht-cv-story"><div class="bht-eb">${esc(st.tag||'Cover Story')}</div><div class="t">${rich(st.title||s.title)}</div></div><div class="bht-cv-lines">${arr(t.lines).slice(0,3).map(l=>`<p>${rich(l)}</p>`).join('<i></i>')}</div>`);
}

/* ── round 2 (2026-09-27) ──────────────────────────────────────────────── */

/* Cause and effect in a row. `links` are the connector words printed on the
   arrows ("so", "until"); a step marked `key: true` is the mechanism, and is
   the one filled in. */
function causeChain(s){
  const t=s.template||{},st=arr(t.steps).slice(0,5),n=Math.max(1,st.length),links=arr(t.links);
  const cols=[];let cells='';
  st.forEach((x,i)=>{
    cols.push('minmax(0,1fr)');
    cells+=`<div class="bht-cc-step ${x.key?'key':''}"><div class="k">${esc(x.tag||String(i+1).padStart(2,'0'))}</div><b>${esc(x.label)}</b><span>${rich(x.text)}</span></div>`;
    if(i<n-1){cols.push('84u');cells+=`<div class="bht-cc-link"><em>${esc(links[i]||'')}</em><svg viewBox="0 0 84 24" aria-hidden="true"><line x1="4" y1="12" x2="70" y2="12"></line><path d="M66 4 L80 12 L66 20 z"></path></svg></div>`;}
  });
  const tpl=cols.join(' ').replace(/84u/g,'calc(84*var(--u))');
  return board('cause-chain',themeOf(t,'dark'),pad(head(s)+grow(`<div class="bht-cc" style="grid-template-columns:${tpl||'1fr'}">${cells}</div>`)+foot(s.footer)));
}

/* One thing moving place to place, changing at each stop. The route winds so
   the labels can alternate above and below it. */
function diffusionPath(s){
  const t=s.template||{},st=arr(t.stops).slice(0,6),n=st.length,W=1128,H=400,hi=150,lo=250;
  const dx=n>1?(W-160)/(n-1):0,xs=st.map((_,i)=>n>1?80+i*dx:W/2),ys=st.map((_,i)=>i%2?lo:hi);
  let d=n?`M${xs[0]} ${ys[0]}`:'';
  for(let i=1;i<n;i++)d+=` C${(xs[i-1]+dx/2).toFixed(0)} ${ys[i-1]} ${(xs[i]-dx/2).toFixed(0)} ${ys[i]} ${xs[i].toFixed(0)} ${ys[i]}`;
  const lw=Math.min(250,n>1?dx-14:360);
  let dots='',labels='';
  st.forEach((x,i)=>{
    dots+=`<circle cx="${xs[i].toFixed(0)}" cy="${ys[i]}" r="${i?11:17}" class="${i?'':'origin'}"></circle>`;
    const left=Math.max(0,Math.min(W-lw,xs[i]-lw/2)),up=!(i%2);
    labels+=`<div class="bht-dp-lab ${up?'up':'down'}" style="left:${(left/W*100).toFixed(2)}%;width:${(lw/W*100).toFixed(2)}%;${up?`bottom:${((H-hi+26)/H*100).toFixed(2)}%`:`top:${((lo+26)/H*100).toFixed(2)}%`}"><em>${esc(x.date)}</em><b>${esc(x.place)}</b><span>${rich(x.text)}</span></div>`;
  });
  return board('diffusion-path',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-dp"><svg viewBox="0 0 ${W} ${H}" aria-hidden="true">${d?`<path d="${d}"></path>`:''}${dots}</svg>${labels}</div>`)+foot(s.footer)));
}

/* Rise and fall: the shape of several places' fortunes on one clock. Levels
   run 0 to 4 and are a direction, not a measurement, and the slide says so. */
function timelineFortunes(s){
  const t=s.template||{},cs=arr(t.cases).slice(0,4),n=Math.max(1,cs.length);
  const years=cs.flatMap(c=>arr(c.points).map(p=>num(p.year,0)));
  const ax=axis(t,years.length?years:[0,1]);
  const W=900,RH=Math.min(108,Math.floor(318/n)),TOP=40,X=y=>(y-ax.y0)/(ax.y1-ax.y0)*W,Y=l=>RH-8-(Math.max(0,Math.min(4,num(l,0)))/4)*(RH-8-TOP);
  const rows=cs.map((c,k)=>{
    const pts=arr(c.points).map(p=>[X(num(p.year,ax.y0)),Y(p.level)]);
    const line=pts.map((p,i)=>`${i?'L':'M'}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
    const area=pts.length?`${line} L${pts[pts.length-1][0].toFixed(1)} ${RH} L${pts[0][0].toFixed(1)} ${RH} Z`:'';
    let marks='',labs='';
    arr(c.events).slice(0,3).forEach((e,j)=>{
      const x=X(num(e.year,ax.y0));
      // The event sits on the line: find the line's height at that year.
      let y=RH/2;for(let i=1;i<pts.length;i++)if(x>=pts[i-1][0]&&x<=pts[i][0]){const f=(x-pts[i-1][0])/Math.max(.001,pts[i][0]-pts[i-1][0]);y=pts[i-1][1]+f*(pts[i][1]-pts[i-1][1]);break;}
      // Labels sit in a strip across the top of the row, on two alternating
      // lines so neighbours cannot overprint, each on a dotted leader down to
      // its point, so no label can land on the line itself.
      marks+=`<line x1="${x.toFixed(1)}" y1="${j%2?TOP-2:TOP-20}" x2="${x.toFixed(1)}" y2="${(y-7).toFixed(1)}" class="lead"></line><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6"></circle>`;
      const right=x>W*.62;
      labs+=`<div class="bht-ft-ev ${right?'r':''}" style="${right?`right:${((W-x-4)/W*100).toFixed(2)}%`:`left:${((x-4)/W*100).toFixed(2)}%`};top:${j%2?'calc(19*var(--u))':'0'}"><b>${esc(e.label||e.year)}</b> ${esc(e.text)}</div>`;
    });
    return `<div class="bht-ft-row"><div class="bht-ft-name"><b>${esc(c.name)}</b><span>${esc(c.note)}</span></div><div class="bht-ft-plot" style="height:calc(${RH}*var(--u))"><svg viewBox="0 0 ${W} ${RH}" preserveAspectRatio="none" aria-hidden="true"><line x1="0" y1="${RH}" x2="${W}" y2="${RH}" class="base"></line>${area?`<path d="${area}" class="area t${k%3}"></path><path d="${line}" class="line t${k%3}"></path>`:''}${marks}</svg>${labs}</div></div>`;
  }).join('');
  let ticks='';
  if(ax.y1>ax.y0){const step=Math.max(1,num(t.tick,50));for(let y=Math.ceil(ax.y0/step)*step;y<=ax.y1;y+=step)ticks+=`<span style="left:${(X(y)/W*100).toFixed(2)}%">${y}</span>`;}
  const note=t.note===false?'':esc(t.note||'Direction only, not a measurement.');
  return board('timeline-fortunes',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-ft">${rows}<div class="bht-ft-row axis"><div class="bht-ft-name"><span>${note}</span></div><div class="bht-ft-ticks">${ticks}</div></div></div>`)+foot(s.footer)));
}

/* Two overlapping circles: what only one side has, and what both share. */
function splitVenn(s){
  const t=s.template||{},L=t.left||{},R=t.right||{};
  const list=(a,cls,x)=>`<div class="bht-vn-list ${cls}" style="left:${(x/1128*100).toFixed(2)}%">${arr(a).slice(0,4).map(v=>`<p>${rich(v)}</p>`).join('')}</div>`;
  const svg=`<svg viewBox="0 0 1128 430" aria-hidden="true"><circle cx="464" cy="235" r="195" class="l"></circle><circle cx="664" cy="235" r="195" class="r"></circle></svg>`;
  const names=`<div class="bht-vn-name l">${esc(L.name)}</div><div class="bht-vn-name m">${esc(t.bothLabel||'Both')}</div><div class="bht-vn-name r">${esc(R.name)}</div>`;
  return board('split-venn',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-vn">${svg}${names}${list(L.items,'l',290)}${list(t.both,'m',485)}${list(R.items,'r',680)}</div>`)+foot(s.footer)));
}

/* Continuity and change: before and after on either side of a turning point,
   with what carried on drawn as one unbroken band underneath both. */
function continuityChange(s){
  const t=s.template||{},B=t.before||{},A=t.after||{},C=t.continued||{};
  const side=(x,cls)=>`<div class="bht-cy-side ${cls}"><div class="bht-eb">${esc(x.tag||(cls==='b'?'Before':'After'))}</div>${arr(x.items).slice(0,3).map(v=>`<p>${rich(v)}</p>`).join('')}</div>`;
  const band=`<div class="bht-cy-band"><div class="tg">${esc(C.tag||'Continued')}</div><div class="its">${arr(C.items).slice(0,3).map(v=>`<p>${rich(v)}</p>`).join('<i></i>')}</div></div>`;
  return board('continuity-change',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-cy"><div class="bht-cy-top">${side(B,'b')}<div class="bht-cy-turn"><span>${esc(t.date)}</span><i></i></div>${side(A,'a')}</div>${band}</div>`)+foot(s.footer)));
}

/* HIPP sourcing: the source in the middle, the four questions around it. */
function sourceHipp(s){
  const t=s.template||{},a=t.attribution||{};
  const who=[esc(a.author),a.work?`<i>${esc(a.work)}</i>`:'',esc(a.year)].filter(Boolean).join(', ');
  const Q=[['H','Historical situation',t.situation],['I','Intended audience',t.audience],['P','Purpose',t.purpose],['P','Point of view',t.pov]];
  const card=(q,cls)=>`<div class="bht-hp-card ${cls}"><div class="l">${q[0]}</div><div class="c"><div class="bht-eb">${q[1]}</div><p>${rich(q[2]||'')}</p></div></div>`;
  const mid=t.visual?frame(t.visual,'bht-hp-img',{fit:'contain'}):`<div class="bht-sq-mark">&#8220;</div><p class="q">${rich(t.quote)}</p>`;
  return board('source-hipp',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-hp">${card(Q[0],'a')}${card(Q[1],'b')}<div class="bht-hp-src">${mid}${who?`<div class="bht-sq-who">${who}</div>`:''}</div>${card(Q[2],'c')}${card(Q[3],'d')}</div>`)+foot(s.footer)));
}

/* Claim, evidence, reasoning, stacked the way the paragraph is built. */
function claimEvidence(s){
  const t=s.template||{},ev=arr(t.evidence).slice(0,3);
  return board('claim-evidence',themeOf(t,'paper'),pad(eyebrow(s)+grow(`<div class="bht-ce"><div class="bht-ce-claim"><div class="tg">${esc(t.claimLabel||'Claim')}</div><p>${rich(t.claim||s.title)}</p></div><div class="bht-ce-ev" style="grid-template-columns:repeat(${Math.max(1,ev.length)},minmax(0,1fr))">${ev.map(e=>`<div class="card"><div class="tg">${esc(t.evidenceLabel||'Evidence')}</div><p>${rich(e.text)}</p>${e.source?`<span>${esc(e.source)}</span>`:''}</div>`).join('')}</div><div class="bht-ce-why"><div class="tg">${esc(t.reasoningLabel||'Reasoning')}</div><p>${rich(t.reasoning)}</p></div></div>`)+foot(s.footer)));
}

/* Rank the causes. Leave `weight` out and the bars stay empty for the room to
   decide; give each a weight from 0 to 1 to show a ranking. */
function causeRank(s){
  const t=s.template||{},cs=arr(t.causes).slice(0,5);
  const rows=cs.map((c,i)=>{
    const w=c.weight==null?null:Math.max(0,Math.min(1,num(c.weight,0)));
    return `<div class="bht-rk-row"><div class="n">${i+1}</div><div class="w"><b>${esc(c.label)}</b><span>${rich(c.note)}</span></div><div class="bht-rk-track ${w==null?'open':''}">${w==null?'':`<i style="width:${Math.round(w*100)}%"></i>`}</div></div>`;
  }).join('');
  return board('cause-rank',themeOf(t,'dark'),pad(head(s)+grow(`<div class="bht-rk">${rows}</div>${t.prompt?`<p class="bht-rk-ask">${rich(t.prompt)}</p>`:''}`)+foot(s.footer)));
}

/* A common belief struck out, and what the evidence actually shows. */
function mythEvidence(s){
  const t=s.template||{},rows=arr(t.rows).slice(0,3);
  const out=rows.map(r=>`<div class="bht-my-row"><div class="m"><span>${rich(r.myth)}</span></div><div class="ar">&#8594;</div><div class="e"><p>${rich(r.evidence)}</p>${r.source?`<span>${esc(r.source)}</span>`:''}</div></div>`).join('');
  return board('myth-evidence',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-my"><div class="bht-my-head"><div>${esc(t.mythLabel||'People say')}</div><div></div><div>${esc(t.evidenceLabel||'The evidence says')}</div></div>${out}</div>`)+foot(s.footer)));
}

function brSort(s){const t=s.template||{},cols=arr(t.columns).slice(0,4);return beready('beready-sort','Sort It',`<div class="bht-so"><div class="chips">${arr(t.words).slice(0,10).map(w=>`<span>${esc(w)}</span>`).join('')}</div><div class="cols" style="grid-template-columns:repeat(${Math.max(1,cols.length)},minmax(0,1fr))">${cols.map(c=>`<div><b>${esc(c)}</b><i></i></div>`).join('')}</div></div>`,s,t,'paper');}

/* Closers: the last thing on the screen before the bell. */
function close321(s){
  const t=s.template||{},it=arr(t.items).slice(0,3);
  const cols=it.map(x=>{const k=Math.max(1,Math.min(4,num(x.n,1)));let l='';for(let i=0;i<k;i++)l+='<i></i>';return `<div class="bht-c3-col"><div class="big">${esc(x.n)}</div><p>${rich(x.text)}</p><div class="lines">${l}</div></div>`;}).join('');
  return board('close-321',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-c3" style="grid-template-columns:repeat(${Math.max(1,it.length)},minmax(0,1fr))">${cols}</div>`)+foot(s.footer)));
}
function closeRetell(s){
  const t=s.template||{};
  const frameText=rich(t.frame).replace(/_{3,}/g,'<span class="bht-rt-blank"></span>');
  return board('close-retell',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-rt"><p class="f">${frameText}</p>${arr(t.words).length?`<div class="bht-rt-bank"><div class="bht-eb">${esc(t.bankLabel||'Word bank')}</div><div class="chips">${arr(t.words).slice(0,8).map(w=>`<span>${esc(w)}</span>`).join('')}</div></div>`:''}${t.prompt?`<p class="ask">${rich(t.prompt)}</p>`:''}</div>`)+foot(s.footer)));
}

/* Two real sources side by side, each with its own label. */
function fCompare(s){
  const t=s.template||{},P=arr(t.panels).slice(0,2);
  const cell=p=>`<div class="c">${frame(p.visual,'bht-cm-img',{fit:'contain',tagPos:'tl'})}<div class="k"><b>${esc(p.tag)}</b><span>${rich(p.text)}</span></div></div>`;
  return board('frame-compare','paper',pad(head(s)+`<div class="bht-cm">${P.map(cell).join('')}</div>${t.question?`<p class="bht-cm-q">${rich(t.question)}</p>`:''}`,'tight'));
}

/* A route on a real map. `view` crops the picture to a region ({x,y,w,h} as
   fractions of the whole image), `ratio` is the image's own width over
   height, and every stop's x and y are fractions of the whole image, so the
   pins stay put whatever the crop. */
function fRoute(s){
  const t=s.template||{},v=t.view||{},st=arr(t.stops).slice(0,8);
  const vx=num(v.x,0),vy=num(v.y,0),vw=Math.max(.05,num(v.w,1)),vh=Math.max(.05,num(v.h,1)),ratio=Math.max(.2,num(t.ratio,1));
  const H=592,Wd=Math.round(Math.min(640,H*ratio*vw/vh));
  const px=p=>((num(p.x,0)-vx)/vw*100),py=p=>((num(p.y,0)-vy)/vh*100);
  const vis=t.visual;
  const img=vis&&vis.url?`<img class="bht-img" src="${esc(vis.url)}" alt="${esc(vis.alt||'')}" loading="eager" style="width:${(100/vw).toFixed(3)}%;height:${(100/vh).toFixed(3)}%;left:${(-vx/vw*100).toFixed(3)}%;top:${(-vy/vh*100).toFixed(3)}%;object-fit:fill">`:`<div class="bht-ph"><span>Add a map or satellite image</span></div>`;
  const path=st.length>1?`<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polyline points="${st.map(p=>`${px(p).toFixed(2)},${py(p).toFixed(2)}`).join(' ')}"></polyline></svg>`:'';
  const pins=st.map((p,i)=>`<div class="bht-ro-pin" style="left:${px(p).toFixed(2)}%;top:${py(p).toFixed(2)}%">${i+1}</div>`).join('');
  const legend=st.map((p,i)=>`<div class="bht-ro-leg"><div class="n">${i+1}</div><div><b>${esc(p.name)}</b><span>${rich(p.text)}</span></div></div>`).join('');
  return board('frame-route','dark',pad(`<div class="bht-ro-map" style="width:calc(${Wd}*var(--u))">${img}${path}${pins}${tag(vis,'bl')}</div><div class="bht-col bht-ro-side">${head(s)}<div class="bht-ro-legend">${legend}</div><div class="bht-fill"></div>${foot(s.footer)}</div>`,'row'));
}

/* ── round 3 (2026-10-04): Unit 3, land-based empires ──────────────────────
   Built for the four moves Unit 3 keeps making: take one event apart (a siege,
   a battle, a policy), show one claim holding up several branches, set two
   states against each other over a contested place, and hand students the
   sentence they will have to write. Each takes up to four lines of text and
   no more, so a slide stays readable from the back of the room. */

/* One event or place taken apart: where and when on a stamp, up to four
   labeled facts, and what the case proves. */
function caseFile(s){
  const t=s.template||{},rows=arr(t.rows).slice(0,4);
  const stamp=`<div class="bht-cf-stamp">${t.tag?`<div class="tg">${esc(t.tag)}</div>`:''}<div class="pl${String(t.place||'').length>10?' lg':''}">${esc(t.place)}</div>${t.date?`<div class="dt">${esc(t.date)}</div>`:''}${t.visual?frame(t.visual,'bht-cf-pic',{fit:'contain'}):''}</div>`;
  const body=rows.map(r=>`<div class="bht-cf-row"><div class="l">${esc(r.label)}</div><p>${rich(r.text)}</p></div>`).join('');
  const proves=t.proves?`<div class="bht-cf-proves"><div class="tg">${esc(t.provesLabel||'What it proves')}</div><p>${rich(t.proves)}</p></div>`:'';
  return board('case-file',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-cf">${stamp}<div class="bht-cf-rows">${body}</div></div>`)+proves));
}

/* One claim and the branches that hold it up. Each branch has a name, a line
   of explanation, and up to three examples as chips. */
function branchTree(s){
  const t=s.template||{},br=arr(t.branches).slice(0,4),n=Math.max(1,br.length);
  const ys=br.map((_,i)=>((i+.5)/n*100).toFixed(2));
  const lines=br.length?`<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M0 50 H46 M46 ${ys[0]} V${ys[ys.length-1]} M46 ${ys.join(' H100 M46 ')} H100"></path></svg>`:'';
  const rows=br.map((b,i)=>`<div class="bht-bt-br"><div class="n">${esc(b.tag||String(i+1))}</div><div class="w"><b>${esc(b.label)}</b>${b.note?`<span>${rich(b.note)}</span>`:''}${arr(b.items).length?`<div class="chips">${arr(b.items).slice(0,3).map(x=>`<i>${esc(x)}</i>`).join('')}</div>`:''}</div></div>`).join('');
  return board('branch-tree',themeOf(t,'dark'),pad(head(s)+grow(`<div class="bht-bt"><div class="bht-bt-claim"><div class="tg">${esc(t.claimLabel||'The claim')}</div><p>${rich(t.claim)}</p></div><div class="bht-bt-lines">${lines}</div><div class="bht-bt-brs" style="grid-template-rows:repeat(${n},minmax(0,1fr))">${rows}</div></div>`)+foot(s.footer)));
}

/* Two states over one contested place, and the disputes that set them against
   each other. */
function faceOff(s){
  const t=s.template||{},L=t.left||{},R=t.right||{},M=t.between||{},ds=arr(t.disputes).slice(0,3);
  const side=(x,cls)=>`<div class="bht-fo-side ${cls}"><b>${esc(x.name)}</b>${x.note?`<span>${rich(x.note)}</span>`:''}</div>`;
  const mid=`<div class="bht-fo-mid"><div class="pt"><em>${esc(M.label||'Contested')}</em><b>${esc(M.name)}</b>${M.note?`<span>${rich(M.note)}</span>`:''}</div></div>`;
  const dis=ds.length?`<div class="bht-fo-ds" style="grid-template-columns:repeat(${ds.length},minmax(0,1fr))">${ds.map(d=>`<div class="bht-fo-d"><div class="tg">${esc(d.tag)}</div><p>${rich(d.text)}</p></div>`).join('')}</div>`:'';
  return board('face-off',themeOf(t,'dark'),pad(head(s)+grow(`<div class="bht-fo"><div class="bht-fo-top">${side(L,'l')}${mid}${side(R,'r')}</div>${dis}</div>`)+foot(s.footer)));
}

/* The sentence students will write, with the blanks showing what goes in
   each, and one finished example under it. Write a blank as {{hint}}. */
function sentenceFrame(s){
  const t=s.template||{};
  const parts=String(t.frame==null?'':t.frame).split(/\{\{(.+?)\}\}/);
  const html=parts.map((x,i)=>i%2?`<span class="bht-sf-slot"><i>${esc(x)}</i></span>`:rich(x)).join('');
  const ex=t.example?`<div class="bht-sf-ex"><div class="tg">${esc(t.exampleLabel||'Filled in')}</div><p>${rich(t.example)}</p></div>`:'';
  return board('sentence-frame',themeOf(t,'paper'),pad(head(s)+grow(`<div class="bht-sf"><p class="bht-sf-line">${html}</p>${ex}</div>`)+foot(s.footer)));
}

const KINDS={
  'equation':equation,'equation-stack':equationStack,'equation-remove':equationRemove,
  'exchange':exchange,'exchange-flow':exchangeFlow,'exchange-hub':exchangeHub,
  'split-contrast':splitContrast,'split-mirror':splitMirror,'split-matrix':splitMatrix,'split-diagonal':splitDiagonal,
  'compounding':compounding,'compounding-snowball':compoundingSnowball,'compounding-stairs':compoundingStairs,
  'annotated':annotated,
  'timeline':timeline,'timeline-spans':timelineSpans,'timeline-lanes':timelineLanes,
  'source-quote':sourceQuote,'sharpen':sharpen,
  'beready-recall':brRecall,'beready-fix':brFix,'beready-bank':brBank,'beready-answer':brAnswer,'beready-odd':brOdd,
  'frame-letterbox':fLetterbox,'frame-question':fQuestion,'frame-placard':fPlacard,'frame-triptych':fTriptych,
  'frame-stepin':fStepIn,'frame-evidence':fEvidence,'frame-subtitle':fSubtitle,'frame-storyboard':fStoryboard,
  'frame-postcard':fPostcard,'frame-porthole':fPorthole,'frame-number':fNumber,'frame-cover':fCover,
  /* round 2 */
  'cause-chain':causeChain,'diffusion-path':diffusionPath,'split-venn':splitVenn,'continuity-change':continuityChange,
  'timeline-fortunes':timelineFortunes,
  'source-hipp':sourceHipp,'claim-evidence':claimEvidence,'cause-rank':causeRank,'myth-evidence':mythEvidence,
  'beready-sort':brSort,'close-321':close321,'close-retell':closeRetell,
  'frame-compare':fCompare,'frame-route':fRoute,
  /* round 3 */
  'case-file':caseFile,'branch-tree':branchTree,'face-off':faceOff,'sentence-frame':sentenceFrame
};

/* ── the Key Concept band ─────────────────────────────────────────────── */

/* A slide that teaches a CED Key Concept names it, `kc: 'KC-3.1.IV'`, and
   every renderer passes what it drew through withKeyConcept() on the way to the stage:

     $('stage').innerHTML=window.BHSlideTemplates?window.BHSlideTemplates.withKeyConcept(s,renderSlide(s)):renderSlide(s);

   withKeyConcept() puts a band across the top of the 16:9 board carrying the code and
   the CED wording, in the look of the cockpit's Essential Question strip, and
   draws the slide below it, scaled to the room left. The band sits on the
   board, so it projects: the cockpit strip is hidden in project mode.

   The slide is scaled rather than overlaid on purpose. An overlay covers
   whatever that slide put at its top edge, an eyebrow or the top of a picture,
   and which slide that is depends on its kind, so every slide type would need
   its own fix. Shrinking the slide into the space below keeps every existing
   layout exactly as designed, a little smaller.

   The wording is never in the slide. It comes from
   window.BEHISTORICAL_KEY_CONCEPTS, generated from each lesson's
   collegeBoardKeyConcepts by scripts/build-key-concepts.js, for the topic of
   the deck on the page. A slide with no `kc` comes back untouched. */

const KC_TWO_LINES=250;
function deckTopic(){
  if(typeof window==='undefined')return '';
  const d=window.BEHISTORICAL_TEACHING||window.BEHISTORICAL_STUDENT_DECK;
  return d&&d.meta?String(d.meta.topic||'').replace(/^Topic\s+/i,'').trim():'';
}
function deckSlides(){
  if(typeof window==='undefined')return [];
  const d=window.BEHISTORICAL_TEACHING||window.BEHISTORICAL_STUDENT_DECK;
  return d&&Array.isArray(d.slides)?d.slides:[];
}
function keyConcept(code,topic){
  const all=typeof window!=='undefined'&&window.BEHISTORICAL_KEY_CONCEPTS||{};
  const list=arr(all[topic===undefined?deckTopic():topic]);
  return list.find(k=>k.code===code)||null;
}
/* One band height for the whole deck, so the slide does not change size
   between two slides that both carry a band. Three lines only when some KC on
   this deck needs them. */
function bandLines(topic){
  const long=deckSlides().some(x=>{const k=x&&x.kc&&keyConcept(x.kc,topic);return k&&k.text.length>KC_TWO_LINES;});
  return long?3:2;
}
function withKeyConcept(s,html){
  if(!s||typeof s.kc!=='string'||!s.kc)return html;
  installCss();
  const topic=deckTopic();
  const k=keyConcept(s.kc,topic);
  const text=k?k.text:'';
  return `<div class="bhkc bhkc-l${bandLines(topic)}" data-kc="${esc(s.kc)}"><div class="bhkc-band" role="note" aria-label="Key concept ${esc(s.kc)}"><span class="bhkc-code">${esc(s.kc)}</span><span class="bhkc-text">${esc(text)}</span></div><div class="bhkc-slide">${html}</div></div>`;
}

/* ── styles ────────────────────────────────────────────────────────────── */

const CSS=`
.bht-slide{position:absolute!important;inset:0!important;width:auto!important;height:auto!important;padding:0!important;margin:0!important;background:#050606!important;container-type:size;overflow:hidden!important}
.bht{position:absolute;left:50%;top:50%;width:min(100cqw,177.7778cqh);aspect-ratio:16/9;transform:translate(-50%,-50%);container-type:inline-size;overflow:hidden;text-align:left}
.bht-in{--u:calc(100cqw/1280);position:absolute;inset:0;overflow:hidden;background:var(--bg);color:var(--fg);font-family:'Libre Baskerville',Georgia,serif;font-size:20u;line-height:1.5;letter-spacing:0;text-shadow:none}
.bht.dark{--bg:#101213;--fg:#f5f0e7;--acc:#c9a46a;--head:#fffdf7;--sub:#d2b48c;--soft:#aeb6b8;--rulec:#364044;--b:#c9a46a}
.bht.paper{--bg:#f5f0e7;--fg:#151718;--acc:#6b3e1f;--head:#1a1c1d;--sub:#5a5f5c;--soft:#5a5f5c;--rulec:#ddd2be;--b:#6b3e1f}
.bht *{box-sizing:border-box}
.bht b{color:var(--b);font-weight:700}
.bht p{margin:0}
.bht h2{margin:0}
.bht-pad{position:absolute;inset:0;padding:64u 76u;display:flex;flex-direction:column;gap:18u}
.bht-pad.tight{padding:52u 60u 48u}
.bht-pad.row{flex-direction:row}
.bht-grow{flex:1 1 auto;min-height:0;display:flex;flex-direction:column;justify-content:center}
.bht-fill{flex:1 1 auto}
.bht-col{display:flex;flex-direction:column;gap:18u;min-width:0}
.bht-eb{font:800 14u/1.3 'Montserrat',Helvetica,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:var(--acc)}
.bht-h{font:800 44u/1.12 'Cinzel',Georgia,serif;color:var(--head);max-width:26ch;overflow-wrap:break-word}
.bht-h b{color:inherit}
.bht-sub{font-size:21u;line-height:1.5;color:var(--sub);max-width:52ch}
.bht-lede{font-size:20u;line-height:1.55}
.bht-foot{display:flex;align-items:center;gap:18u}
.bht-foot i{width:56u;height:3u;background:var(--acc);flex:none}
.dark .bht-foot i{background:#c9a46a}
.paper .bht-foot i{background:#8c5a2b}
.bht-foot p{font-style:italic;font-size:20u;line-height:1.4;color:var(--sub)}
.bht-tag{position:absolute;z-index:4;border-radius:3u;padding:3u 7u;font:600 10u/1.3 'Montserrat',Helvetica,sans-serif;letter-spacing:.03em;white-space:nowrap}
.bht-tag.tr{right:14u;top:14u}.bht-tag.tl{left:14u;top:14u}.bht-tag.bl{left:14u;bottom:14u}.bht-tag.br{right:14u;bottom:14u}
.bht-ai{background:rgba(16,18,19,.62);color:rgba(245,240,231,.88)}
.bht-src{background:rgba(255,253,247,.86);color:#1a1c1d;white-space:normal;max-width:calc(100% - 28u)}
.bht-frame{position:relative;overflow:hidden;background:#0b0d0e}
.bht-img{position:absolute;left:0;top:0;width:100%;height:100%;display:block;max-width:none}
.bht-ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border:2u dashed #5a5f5c;background:#1d2123;padding:24u;text-align:center}
.paper .bht-ph{background:#fffdf7;border-color:#ddd2be}
.bht-ph span{font:700 15u/1.5 'Montserrat',Helvetica,sans-serif;color:var(--soft)}
.bht-full{position:absolute;inset:0}
.bht-err{border-bottom:3u dotted #a8652d}
.bht-dots{display:flex;flex-wrap:wrap;gap:8u 12u;max-width:280u}
.bht-dots i{width:14u;height:14u;border-radius:50%;background:#8c5a2b}
.bht-dots i.on{background:#c9a46a;width:18u;height:18u}

/* equation */
.bht-eq{display:grid;justify-content:start;align-items:start;column-gap:24u;row-gap:10u;max-width:100%}
.bht-eq-term{display:flex;flex-direction:column;gap:10u;min-width:0}
.bht-eq-term b{font-family:'Cinzel',Georgia,serif;font-weight:900;font-size:1em;line-height:1;color:var(--head)}
.bht-eq-res{display:flex;align-items:baseline;gap:22u;margin-top:30u}
.bht-eq-res em{font:600 52u/1 'Cinzel',Georgia,serif;font-style:normal;color:var(--acc)}
.bht-eq-res b{font:900 60u/1 'Cinzel',Georgia,serif;color:var(--acc)}
.bht-eq-res span{font:600 16u/1.35 'Montserrat',Helvetica,sans-serif;color:var(--soft)}
.bht-eq-term span{font:600 16u/1.35 'Montserrat',Helvetica,sans-serif;color:var(--soft);max-width:190u}
.bht-eq-op{font:600 48u/1 'Cinzel',Georgia,serif;color:var(--acc);padding-top:2u}
.bht-eq-brace{display:flex;flex-direction:column;align-items:center;gap:10u;padding-top:6u}
.bht-eq-brace i{align-self:stretch;height:14u;border:2u solid var(--sub);border-top:0}
.bht-eq-brace.alt i{border-color:var(--acc)}
.bht-eq-brace span{font:800 14u/1.2 'Montserrat',Helvetica,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:var(--sub)}
.bht-eq-brace.alt span{color:var(--acc)}
.bht-stk{display:flex;flex-direction:column;gap:14u}
.bht-stk-row{display:grid;grid-template-columns:60u 420u minmax(0,1fr);column-gap:24u;align-items:baseline}
.bht-stk-row .op{font:700 40u/1 'Cinzel',Georgia,serif;color:#8c5a2b;text-align:right}
.bht-stk-row .w{font:800 36u/1.1 'Cinzel',Georgia,serif;color:var(--head)}
.bht-stk-row .n{font-size:18u;line-height:1.4;color:var(--soft)}
.bht-stk-row.res .op,.bht-stk-row.res .w{color:var(--acc)}
.bht-stk-row.res .w{font-size:44u;font-weight:900}
.bht-stk-line{margin-left:84u;width:420u;height:4u;background:var(--head);margin-top:6u}
.bht-rm-row{display:grid;column-gap:40u}
.bht-rm{display:flex;flex-direction:column;gap:14u;min-width:0}
.bht-rm svg{width:44u;height:44u}
.bht-rm svg *{fill:none;stroke:#a8652d;stroke-width:3}
.bht-rm b{font:900 44u/1.05 'Cinzel',Georgia,serif;color:var(--head);overflow-wrap:break-word}
.bht-rm p{font-size:20u;line-height:1.45}

/* exchange */
.bht-ex{display:grid;grid-template-columns:420u minmax(0,1fr);column-gap:56u;width:100%;height:100%}
.bht-ex .bht-h{font-size:42u;max-width:14ch}
.bht-ex-map{display:grid;grid-template-columns:minmax(0,1fr) 120u;column-gap:20u;min-height:0}
.bht-bands{display:flex;flex-direction:column;gap:12u}
.bht-band{flex:1;border-radius:10u;padding:0 28u;display:flex;align-items:center;gap:22u}
.bht-band .tg{font:800 12u/1.3 'Montserrat',Helvetica,sans-serif;letter-spacing:.18em;text-transform:uppercase;width:88u;flex:none}
.bht-band .tx{display:flex;flex-direction:column;gap:4u}
.bht-band .tx b{font:800 28u/1.15 'Cinzel',Georgia,serif;color:inherit}
.bht-band .tx span{font-size:17u;line-height:1.35;opacity:.88}
.bht-band.steel{background:#1a1c1d;color:#f5f0e7}.bht-band.steel .tg{color:#c9a46a}
.bht-band.mid{background:#e9dcc4;color:#1a1c1d}.bht-band.mid .tg{color:#6b3e1f}
.bht-band.bronze{background:#8c5a2b;color:#fffdf7}.bht-band.bronze .tg{color:#f3e2c4}
.bht-arrows{display:flex;justify-content:space-around}
.bht-varrow{display:flex;flex-direction:column;align-items:center;gap:6u;padding:18u 0}
.bht-varrow.second{padding-top:170u}
.bht-varrow .sh{flex:1;width:4u;background:#6b3e1f}
.bht-varrow .sh.dash{background:repeating-linear-gradient(180deg,#5a5f5c 0 10u,transparent 10u 17u)}
.bht-varrow .hd{width:18u;height:16u;background:#6b3e1f;flex:none}
.bht-varrow.second .hd{background:#5a5f5c}
.bht-varrow.up .hd{clip-path:polygon(50% 0,100% 100%,0 100%)}
.bht-varrow.down .hd{clip-path:polygon(0 0,100% 0,50% 100%)}
.bht-varrow span{font:800 13u/1 'Montserrat',Helvetica,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#6b3e1f}
.bht-varrow.second span{color:#5a5f5c}
.dark .bht-varrow span{color:#d2b48c}
.bht-fl{display:flex;align-items:center;justify-content:space-between;gap:20u}
.bht-fl-place{display:flex;flex-direction:column;gap:6u;width:260u}
.bht-fl-place.r{text-align:right}
.bht-fl-place b{font:900 44u/1.05 'Cinzel',Georgia,serif;color:var(--head)}
.bht-fl-place span{font:600 16u/1.4 'Montserrat',Helvetica,sans-serif;color:var(--soft)}
.bht-fl-svg{width:560u;height:210u;flex:none;overflow:visible}
.bht-fl-svg path.a1{fill:none;stroke:#c9a46a;stroke-width:4}
.bht-fl-svg path.a2{fill:none;stroke:#d2b48c;stroke-width:4;stroke-dasharray:12 8}
.paper .bht-fl-svg path.a1{stroke:#6b3e1f}.paper .bht-fl-svg path.a2{stroke:#5a5f5c}
.bht-fl-svg .m1{fill:#c9a46a}.bht-fl-svg .m2{fill:#d2b48c}
.paper .bht-fl-svg .m1{fill:#6b3e1f}.paper .bht-fl-svg .m2{fill:#5a5f5c}
.bht-fl-svg text{text-anchor:middle;font:800 14px 'Montserrat',Helvetica,sans-serif;letter-spacing:.16em;text-transform:uppercase}
.bht-fl-svg .t1{fill:#c9a46a}.bht-fl-svg .t2{fill:#d2b48c}
.paper .bht-fl-svg .t1{fill:#6b3e1f}.paper .bht-fl-svg .t2{fill:#5a5f5c}
.bht-hub{position:relative;width:100%;aspect-ratio:1128/480;max-height:100%}
.bht-hub svg{position:absolute;inset:0;width:100%;height:100%}
.bht-hub svg line{stroke:#8c5a2b;stroke-width:4}
.bht-hub svg marker path{fill:#8c5a2b}
.bht-hub svg circle{fill:#1a1c1d}
.dark .bht-hub svg circle{fill:#2b2f31}
.bht-hub-c{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:180u;text-align:center;font:900 28u/1.1 'Cinzel',Georgia,serif;color:#c9a46a}
.bht-hub-lab{position:absolute;width:200u;display:flex;flex-direction:column;gap:2u}
.bht-hub-lab.l{text-align:right}
.bht-hub-lab b{font:800 26u/1.15 'Cinzel',Georgia,serif;color:var(--head)}
.bht-hub-lab span{font:600 15u/1.35 'Montserrat',Helvetica,sans-serif;color:var(--soft)}

/* splits */
.bht-sc{position:absolute;inset:0;display:grid;grid-template-columns:1fr 1fr}
.bht-sc-l,.bht-sc-r{display:flex;flex-direction:column;gap:22u;min-width:0}
.bht-sc-l{background:#101213;color:#f5f0e7;padding:64u 56u 64u 76u;--acc:#c9a46a;--head:#fffdf7;--sub:#d2b48c}
.bht-sc-r{background:#f5f0e7;color:#151718;padding:64u 76u 64u 56u}
.bht-sc .bht-h{font-size:42u;max-width:13ch}
.bht-sc-track{position:relative;height:40u;display:flex;align-items:center;padding-left:120u;background:repeating-linear-gradient(90deg,#aeb6b8 0 4u,transparent 4u 14u) 0 50%/100% 2u no-repeat}
.bht-sc-text{display:flex;flex-direction:column;gap:14u}
.bht-sc-text p{font-size:21u;line-height:1.45}
.bht-kv{display:grid;grid-template-columns:110u minmax(0,1fr);row-gap:12u;column-gap:18u;align-items:baseline}
.bht-kv .k{font:800 14u/1.3 'Montserrat',Helvetica,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#6b3e1f}
.bht-kv .v{font-size:19u;line-height:1.4}
.bht-mr-head,.bht-mr-row{display:grid;grid-template-columns:minmax(0,1fr) 170u minmax(0,1fr);align-items:center}
.bht-mr-head{margin-bottom:6u}
.bht-mr-head .l{font:900 34u/1.1 'Cinzel',Georgia,serif;color:#8c5a2b;text-align:right;padding-right:28u}
.bht-mr-head .r{font:900 34u/1.1 'Cinzel',Georgia,serif;color:var(--acc);padding-left:28u}
.bht-mr-row{border-bottom:1u solid var(--rulec);padding:18u 0}
.bht-mr-row .l{font-size:22u;line-height:1.4;text-align:right;padding-right:28u}
.bht-mr-row .r{font-size:22u;line-height:1.4;padding-left:28u}
.bht-mr-row .m{font:800 13u/1.2 'Montserrat',Helvetica,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#fffdf7;background:#1a1c1d;text-align:center;padding:10u 4u;border-radius:999u}
.dark .bht-mr-row .m{background:#c9a46a;color:#101213}
.bht-mx-head,.bht-mx-row{display:grid;grid-template-columns:150u repeat(var(--n),minmax(0,1fr));column-gap:24u;align-items:center}
.bht-mx-head{margin-bottom:6u}
.bht-mx-head .c{font:900 30u/1.1 'Cinzel',Georgia,serif;color:var(--acc);text-align:center}
.bht-mx-row{border-bottom:1u solid var(--rulec);padding:15u 0}
.bht-mx-row .c{font-size:21u;line-height:1.35;text-align:center}
.bht-mx-row .m{font:800 13u/1.2 'Montserrat',Helvetica,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#fffdf7;background:#1a1c1d;text-align:center;padding:10u 4u;border-radius:999u}
.bht-mx-span{border-bottom:0}
.bht-mx-span .c{grid-column:2 / -1;font-weight:700}
.dark .bht-mx-row .m{background:#c9a46a;color:#101213}
.bht-dg-cut{position:absolute;inset:0;width:100%;height:100%}
.bht-dg-cut polygon{fill:#1a1c1d}
.bht-dg-b{position:absolute;left:76u;top:64u;width:430u;display:flex;flex-direction:column;gap:18u;--acc:#c9a46a;--head:#fffdf7}
.bht-dg-b p{font-size:21u;line-height:1.5;color:#f5f0e7}
.bht-dg-a{position:absolute;right:76u;bottom:90u;width:430u;display:flex;flex-direction:column;gap:18u;align-items:flex-end;text-align:right}
.bht-dg-a p{font-size:21u;line-height:1.5}
.bht-dg-b .bht-h,.bht-dg-a .bht-h{font-size:38u;max-width:16ch}
.bht-dg-date{position:absolute;left:530u;top:250u;width:220u;height:220u;border-radius:50%;background:#c9a46a;display:flex;align-items:center;justify-content:center;box-shadow:0 10u 40u rgba(0,0,0,.3)}
.bht-dg-date span{font:900 58u/1 'Cinzel',Georgia,serif;color:#1a1c1d;text-align:center;padding:0 12u}

/* compounding */
.bht-cp{display:flex;flex-direction:column;gap:26u}
.bht-cp-row{display:flex;flex-direction:column;gap:8u}
.bht-cp-row .lab{display:flex;align-items:baseline;gap:16u}
.bht-cp-row .lab b{font:800 28u/1.1 'Cinzel',Georgia,serif;color:var(--head)}
.bht-cp-row .lab span{font-size:18u;color:var(--soft)}
.bht-cp-row .bht-cp-bar{display:flex;align-items:center}
.bht-cp-row .bht-cp-bar i{flex:1;height:8u;background:#8c5a2b;border-radius:4u 0 0 4u}
.bht-cp-row .bht-cp-bar em{width:18u;height:18u;border-radius:50%;background:var(--acc)}
.bht-sb{display:flex;align-items:flex-end;justify-content:space-between}
.bht-sb-step{display:flex;flex-direction:column;align-items:center;gap:14u;width:220u;text-align:center}
.bht-sb-step i{border-radius:50%;background:#c9a46a}
.paper .bht-sb-step i{background:#8c5a2b}
.bht-sb-step i.tw{background:#a8652d}
.bht-sb-step b{font:800 26u/1.1 'Cinzel',Georgia,serif;color:var(--head)}
.bht-sb-step span{font:600 15u/1.4 'Montserrat',Helvetica,sans-serif;color:var(--soft)}
.bht-sb-ar{font:400 34u/1 'Cinzel',Georgia,serif;color:var(--sub);padding-bottom:90u}
.bht-st{display:grid;column-gap:10u;align-items:end;border-bottom:4u solid var(--head)}
.bht-st-col{display:flex;flex-direction:column;justify-content:flex-end;gap:10u;min-width:0}
.bht-st-col b{font:800 26u/1.1 'Cinzel',Georgia,serif;color:var(--head)}
.bht-st-col span{font-size:17u;line-height:1.4;color:var(--soft)}
.bht-st-col i{display:block;background:#8c5a2b;border-radius:6u 6u 0 0}

/* annotated */
.bht-an{position:relative;flex:1;min-height:0}
.bht-an-img{position:absolute;left:0;top:1.8%;width:39%;height:92.9%;border-radius:10u}
.bht-an-svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
.bht-an-svg line{stroke:#c9a46a;stroke-width:1.5}
.bht-an-svg .ring{fill:none;stroke:#c9a46a;stroke-width:3}
.bht-an-svg .dot{fill:#c9a46a}
.paper .bht-an-svg line,.paper .bht-an-svg .ring{stroke:#6b3e1f}.paper .bht-an-svg .dot{fill:#6b3e1f}
.bht-an-lab{position:absolute;left:51%;width:45%}
.bht-an-lab b{display:block;font:800 15u/1.3 'Montserrat',Helvetica,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:var(--acc)}
.bht-an-lab span{display:block;font-size:20u;line-height:1.4;margin-top:4u}

/* timelines */
.bht-tl{position:relative;width:100%;aspect-ratio:1128/330}
.bht-tl svg,.bht-sp svg,.bht-ln svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.bht-tl .axis{stroke:var(--head);stroke-width:3}
.bht-tl .tk{stroke:var(--soft);stroke-width:1.5}
.bht svg .ty{text-anchor:middle;font:600 13px 'Montserrat',Helvetica,sans-serif;fill:var(--soft)}
.bht-tl .pt{fill:#8c5a2b;stroke:var(--bg);stroke-width:3}
.bht-tl .st{fill:none;stroke:#8c5a2b;stroke-width:1.5}
.bht-tl-labs{position:absolute;inset:0}
.bht-tl-lab{position:absolute;width:17.73%}
.bht-tl-lab.up{bottom:64.2%}
.bht-tl-lab.down{top:59.4%}
.bht-tl-lab.r{text-align:right}
.bht-tl-lab b{display:block;font:900 26u/1.15 'Cinzel',Georgia,serif;color:var(--acc)}
.bht-tl-lab span{display:block;font-size:16u;line-height:1.35;margin-top:2u}
.bht-sp{position:relative;width:100%;aspect-ratio:1128/370}
.bht-sp .grid,.bht-ln .grid{stroke:var(--rulec);stroke-width:1.5}
.bht-sp rect.bronze{fill:#8c5a2b}.bht-sp rect.ox{fill:#6b3e1f}.bht-sp rect.steel{fill:#1a1c1d}.bht-sp rect.rust{fill:#a8652d}.bht-sp rect.iron{fill:#5a5f5c}
.dark .bht-sp rect.steel{fill:#aeb6b8}
.bht-sp .rl{font:700 15px 'Montserrat',Helvetica,sans-serif;fill:var(--soft)}
.bht-sp .rl.in{text-anchor:end;fill:#fffdf7}
.bht-sp-lab{position:absolute;left:0;width:16.4%}
.bht-sp-lab b{display:block;font:800 22u/1.15 'Cinzel',Georgia,serif;color:var(--head)}
.bht-sp-lab span{display:block;font:600 13u/1.35 'Montserrat',Helvetica,sans-serif;color:var(--soft)}
.bht-ln{position:relative;width:100%;aspect-ratio:1128/440}
.bht-ln .lane.a{stroke:#c9a46a;stroke-width:3}.bht-ln .lane.b{stroke:#d2b48c;stroke-width:3}
.paper .bht-ln .lane.a{stroke:#6b3e1f}.paper .bht-ln .lane.b{stroke:#8c5a2b}
.bht-ln .pt{stroke:var(--bg);stroke-width:3}.bht-ln .pt.a{fill:#c9a46a}.bht-ln .pt.b{fill:#d2b48c}
.paper .bht-ln .pt.a{fill:#6b3e1f}.paper .bht-ln .pt.b{fill:#8c5a2b}
.bht-ln-name{position:absolute;left:0;font:800 22u/1.1 'Cinzel',Georgia,serif;color:var(--head);width:18%}
.bht-ln-ev{position:absolute;width:11.35%;text-align:center}
.bht-ln-ev b{display:block;font:900 20u/1.15 'Cinzel',Georgia,serif;color:#c9a46a}
.bht-ln-ev.b b{color:#d2b48c}
.paper .bht-ln-ev b{color:#6b3e1f}
.bht-ln-ev span{display:block;font:600 14u/1.3 'Montserrat',Helvetica,sans-serif;color:var(--fg)}

/* source and sharpen */
.bht-sq{display:grid;grid-template-columns:minmax(0,1fr) 300u;column-gap:64u;width:100%;height:100%}
.bht-sq.solo{grid-template-columns:minmax(0,1fr)}
.bht-sq-mark{font:900 160u/.7 'Cinzel',Georgia,serif;color:#8c5a2b;margin-top:30u;height:80u}
.bht-sq-q{font-size:34u;line-height:1.45;color:var(--head);max-width:26ch}
.bht-sq-who{font:700 16u/1.4 'Montserrat',Helvetica,sans-serif;letter-spacing:.06em;color:var(--soft)}
.bht-sq-who i{font-family:'Libre Baskerville',Georgia,serif}
.bht-sq-side{display:flex;flex-direction:column;gap:14u;padding-top:18u}
.bht-sq-side p{font-size:18u;line-height:1.5}
.bht-sq-img{height:360u;border-radius:10u;background:#fffdf7;border:1u solid var(--rulec)}
.bht-sh{display:flex;flex-direction:column;gap:12u}
.bht-sh-k{font:800 14u/1.3 'Montserrat',Helvetica,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:var(--acc)}
.bht-sh-k.weak{color:var(--soft)}
.bht-sh-weak{position:relative;align-self:flex-start;margin-bottom:28u}
.bht-sh-weak span{font:800 60u/1.2 'Cinzel',Georgia,serif;color:#8d8f8c}
.bht-sh-weak span b{color:inherit}
.bht-sh-weak i{position:absolute;left:-8u;right:-8u;top:52%;height:6u;background:#a8652d;border-radius:3u;transform:rotate(-1.5deg)}
.bht-sh-strong{font-size:32u;line-height:1.45;color:var(--head);max-width:42ch}

/* BeReady */
.bht-br{position:absolute;inset:0;display:flex;flex-direction:column}
.bht-br-top{flex:1;min-height:0;padding:64u 76u 30u;display:grid;grid-template-columns:360u minmax(0,1fr);column-gap:60u}
.bht-br .bht-h{font-size:40u;max-width:12ch}
.bht-br-mid{display:flex;flex-direction:column;justify-content:center;min-width:0}
.bht-pills{display:flex;gap:10u;margin-top:8u;flex-wrap:wrap}
.bht-pills span{font:800 14u/1 'Montserrat',Helvetica,sans-serif;letter-spacing:.12em;text-transform:uppercase;border-radius:999u;padding:8u 16u;border:1.5u solid var(--sub);color:var(--sub)}
.bht-pills span.fill{background:var(--sub);color:var(--bg);border-color:var(--sub)}
.paper .bht-pills span{border-color:#6b3e1f;color:#6b3e1f}.paper .bht-pills span.fill{background:#6b3e1f;color:#fffdf7}
.bht-turn{padding:30u 76u 56u;display:grid;grid-template-columns:360u minmax(0,1fr);column-gap:60u;align-items:center;background:#f5f0e7;color:#151718;--b:#6b3e1f}
.paper .bht-turn{background:#1a1c1d;color:#f5f0e7;--b:#c9a46a}
.bht-turn div{font:900 34u/1.1 'Cinzel',Georgia,serif;color:var(--b)}
.bht-turn p{font-size:24u;line-height:1.45}
.bht-turn b{color:var(--b)}
.bht-rl{border-top:1u solid var(--rulec)}
.bht-rl > div{display:grid;grid-template-columns:130u minmax(0,1fr);column-gap:24u;padding:18u 0;border-bottom:1u solid var(--rulec);align-items:baseline}
.bht-rl b{font:800 14u/1.3 'Montserrat',Helvetica,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:var(--acc)}
.bht-rl p{font-size:24u;line-height:1.4}
.bht-fx .k,.bht-af .k{font:800 13u/1.3 'Montserrat',Helvetica,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:var(--soft);margin-bottom:14u}
.bht-fx .card{background:#fffdf7;border:1u solid #ddd2be;border-radius:10u;padding:28u 32u;color:#151718}
.bht-fx .card p{font-size:26u;line-height:1.55}
.bht-fx .ask{margin-top:18u;font:700 18u/1.4 'Montserrat',Helvetica,sans-serif;color:var(--acc)}
.bht-bk .chips{display:flex;flex-wrap:wrap;gap:12u}
.bht-bk .chips span{font:700 20u/1.2 'Montserrat',Helvetica,sans-serif;color:#6b3e1f;background:#efe4d0;border:1u solid #ddd2be;border-radius:999u;padding:10u 20u}
.bht-bk .ask,.bht-oo .ask,.bht-af .ask{margin-top:24u;font-size:26u;line-height:1.5}
.bht-bk .push,.bht-oo .push{margin-top:10u;font:700 16u/1.4 'Montserrat',Helvetica,sans-serif;color:var(--soft)}
.bht-af .a{font:900 96u/1 'Cinzel',Georgia,serif;color:var(--acc);overflow-wrap:break-word}
.bht-oo .list{border-top:1u solid var(--rulec)}
.bht-oo .list div{font:900 40u/1.2 'Cinzel',Georgia,serif;color:var(--head);padding:12u 0;border-bottom:1u solid var(--rulec)}

/* frames */
.bht-lb-top{position:absolute;left:0;right:0;top:0;height:110u;background:#050606;display:flex;align-items:flex-end;padding:0 76u 18u}
.bht-lb-img{position:absolute;left:0;right:0;top:110u;height:420u}
.bht-lb-bot{position:absolute;left:0;right:0;bottom:0;height:190u;background:#050606;padding:26u 76u;display:flex;flex-direction:column;gap:10u}
.bht-lb-bot .bht-h{font-size:46u;max-width:none}
.bht-fq{position:absolute;inset:0;display:grid;grid-template-columns:520u minmax(0,1fr)}
.bht-fq.flip{grid-template-columns:minmax(0,1fr) 520u}
.bht-fq-copy{background:#f5f0e7;padding:64u 56u 64u 76u;display:flex;flex-direction:column;justify-content:center;gap:20u}
.bht-fq.flip .bht-fq-copy{padding:64u 76u 64u 56u}
.bht-fq-copy .bht-h{font-size:40u;max-width:14ch}
.bht-fq-img{height:100%}
.bht-pl-img{position:absolute;left:76u;top:56u;width:900u;height:506u;border:10u solid #fffdf7;border-radius:4u;box-shadow:0 24u 60u rgba(21,23,24,.28)}
.bht-pl-card{position:absolute;right:76u;bottom:76u;width:400u;background:#fffdf7;border:1u solid #ddd2be;border-radius:4u;padding:26u 28u;box-shadow:0 12u 30u rgba(21,23,24,.14);display:flex;flex-direction:column;gap:10u}
.bht-pl-card .n{font:900 34u/1.1 'Cinzel',Georgia,serif;color:#1a1c1d}
.bht-pl-card p{font-size:18u;line-height:1.5}
.bht-tp{display:grid;column-gap:16u;flex:1;min-height:0}
.bht-tp-p{position:relative;border-radius:4u;overflow:hidden}
.bht-tp-img{position:absolute;inset:0}
.bht-tp-p .cap{position:absolute;left:0;right:0;bottom:0;padding:60u 22u 18u;background:linear-gradient(180deg,rgba(5,6,6,0),rgba(5,6,6,.88));font:800 26u/1.15 'Cinzel',Georgia,serif;color:#fffdf7}
.bht-frame-triptych .bht-h{font-size:38u;max-width:30ch}
.bht-si-veil{position:absolute;inset:0;background:linear-gradient(90deg,rgba(5,6,6,0) 30%,rgba(5,6,6,.9) 70%)}
.bht-si-copy{position:absolute;right:76u;top:0;bottom:0;width:470u;display:flex;flex-direction:column;justify-content:center;gap:20u}
.bht-si-copy .l{font-size:30u;line-height:1.45;color:#fffdf7}
.bht-si-copy .q{font-size:30u;line-height:1.45;font-weight:700;color:#c9a46a}
.bht-si-copy .n{margin-top:8u;font:600 15u/1.5 'Montserrat',Helvetica,sans-serif;color:#aeb6b8}
.bht-fe{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);column-gap:24u;flex:1;min-height:0}
.bht-fe .c{display:flex;flex-direction:column;gap:10u;min-height:0}
.bht-fe-img{flex:1;border-radius:4u}
.bht-fe-img.ev{background:#fffdf7;border:1u solid #ddd2be}
.bht-fe .k{font:800 13u/1.3 'Montserrat',Helvetica,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#5a5f5c}
.bht-fe .k.ev{color:#6b3e1f}
.bht-frame-evidence .bht-h{font-size:36u;max-width:34ch}
.bht-sub-veil{position:absolute;left:0;right:0;bottom:0;height:260u;background:linear-gradient(180deg,rgba(5,6,6,0),rgba(5,6,6,.85) 70%)}
.bht-sub-eb{position:absolute;left:76u;top:56u}
.bht-sub-line{position:absolute;left:140u;right:140u;bottom:64u;text-align:center}
.bht-sub-line p{font-size:30u;line-height:1.45;color:#fffdf7;text-shadow:0 2u 14u rgba(0,0,0,.8)}
.bht-sbd-h{padding-left:20u;display:flex;flex-direction:column;gap:12u}
.bht-sbd-h .bht-h{font-size:38u;max-width:30ch}
.bht-sbd{position:relative;background:#050606;border-radius:4u;padding:12u 0}
.bht-sbd-tag{right:20u;top:-26u}
.bht-sbd .holes{display:flex;justify-content:space-between;padding:0 20u}
.bht-sbd .holes i{width:18u;height:11u;border-radius:2u;background:#1f2426}
.bht-sbd .cells{display:grid;column-gap:18u;padding:18u 20u}
.bht-sbd .cell{display:flex;flex-direction:column;gap:12u;min-width:0}
.bht-sbd-img{height:250u;border-radius:2u}
.bht-sbd .cell b{font:800 24u/1.15 'Cinzel',Georgia,serif;color:#fffdf7}
.bht-sbd .cell span{font:600 15u/1.4 'Montserrat',Helvetica,sans-serif;color:#aeb6b8}
.bht-pc{position:absolute;left:64u;top:90u;width:1152u;height:560u;background:#fffdf7;box-shadow:0 30u 70u rgba(21,23,24,.25);transform:rotate(-1.2deg);display:grid;grid-template-columns:600u minmax(0,1fr)}
.bht-pc-img{margin:22u}
.bht-pc-back{position:relative;border-left:2u solid #ddd2be;margin:30u 0;padding:0 40u;display:flex;flex-direction:column;gap:14u}
.bht-pc-back .stamp{position:absolute;right:36u;top:0;width:86u;height:104u;border:2u dashed #8c5a2b;display:flex;align-items:center;justify-content:center;font:900 26u/1 'Cinzel',Georgia,serif;color:#6b3e1f}
.bht-pc-back .bht-eb{margin-top:8u}
.bht-pc-back .h{font:800 30u/1.2 'Cinzel',Georgia,serif;color:#1a1c1d;max-width:12ch}
.bht-pc-back p{font-size:19u;line-height:1.5;max-width:30ch}
.bht-pc-back .lines i{display:block;height:44u;border-bottom:1.5u solid #ddd2be}
.bht-ph-ring{position:absolute;left:90u;top:90u;width:540u;height:540u;border-radius:50%;border:18u solid #8c5a2b;box-shadow:0 0 0 6u #5a3a1c,0 30u 80u rgba(0,0,0,.6)}
.bht-ph-img{position:absolute;inset:0;border-radius:50%}
.bht-ph-ring i{position:absolute;width:14u;height:14u;margin:-7u 0 0 -7u;border-radius:50%;background:#caa36a;z-index:2}
.bht-ph-tag{left:280u;top:648u}
.bht-ph-copy{position:absolute;left:700u;top:0;bottom:0;width:500u;display:flex;flex-direction:column;justify-content:center;gap:20u}
.bht-ph-copy .bht-h{max-width:13ch}
.bht-ph-copy .bht-sub{font-size:22u;color:#f5f0e7}
.bht-nb{position:absolute;inset:0;display:grid;grid-template-columns:700u minmax(0,1fr)}
.bht-nb-img{height:100%}
.bht-nb-copy{background:#f5f0e7;padding:64u 70u;display:flex;flex-direction:column;justify-content:center;gap:14u}
.bht-nb-copy .big{font:900 220u/.9 'Cinzel',Georgia,serif;color:#6b3e1f;overflow-wrap:break-word}
.bht-nb-copy .unit{font:800 34u/1.1 'Cinzel',Georgia,serif;color:#1a1c1d}
.bht-nb-copy .rng{font:800 18u/1.2 'Montserrat',Helvetica,sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#5a5f5c}
.bht-nb-copy p{margin-top:10u;font-size:20u;line-height:1.5;max-width:24ch}
.bht-cv-top{position:absolute;left:0;right:0;top:0;height:300u;background:linear-gradient(180deg,rgba(5,6,6,.82),rgba(5,6,6,0))}
.bht-cv-bot{position:absolute;left:0;right:0;bottom:0;height:280u;background:linear-gradient(0deg,rgba(5,6,6,.85),rgba(5,6,6,0))}
.bht-cv-mast{position:absolute;left:76u;right:76u;top:40u;display:flex;align-items:baseline;justify-content:space-between;gap:20u}
.bht-cv-mast .m{font:900 92u/1 'Cinzel',Georgia,serif;letter-spacing:.04em;color:#fffdf7;white-space:nowrap}
.bht-cv-mast .i{font:800 14u/1.3 'Montserrat',Helvetica,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#c9a46a;text-align:right}
.bht-cv-tag{right:20u;top:150u}
.bht-cv-story{position:absolute;left:76u;bottom:60u;width:560u;display:flex;flex-direction:column;gap:10u}
.bht-cv-story .t{font:800 40u/1.15 'Cinzel',Georgia,serif;color:#fffdf7}
.bht-cv-lines{position:absolute;right:76u;bottom:60u;width:330u;display:flex;flex-direction:column;gap:14u;text-align:right}
.bht-cv-lines p{font-size:19u;line-height:1.4;color:#f5f0e7}
.bht-cv-lines i{display:block;height:1u;background:rgba(201,164,106,.6)}

/* round 2: cause chain */
.bht-cc{display:grid;align-items:stretch}
.bht-cc-step{display:flex;flex-direction:column;gap:10u;min-width:0;padding:24u 22u 26u;border-radius:10u;background:#1a1d1f;border-top:5u solid #8c5a2b}
.paper .bht-cc-step{background:#fffdf7;border:1u solid #ddd2be;border-top:5u solid #8c5a2b}
.bht-cc-step .k{font:800 13u/1 'Montserrat',Helvetica,sans-serif;letter-spacing:.18em;color:var(--sub)}
.bht-cc-step b{font:800 26u/1.15 'Cinzel',Georgia,serif;color:var(--head);overflow-wrap:break-word}
.bht-cc-step span{font-size:17u;line-height:1.45;color:var(--fg)}
.bht-cc-step.key{background:#c9a46a;border-top-color:#fffdf7}
.bht-cc-step.key .k,.bht-cc-step.key b,.bht-cc-step.key span{color:#101213}
.bht-cc-link{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6u;padding:0 4u}
.bht-cc-link em{font:800 12u/1.2 'Montserrat',Helvetica,sans-serif;font-style:normal;letter-spacing:.12em;text-transform:uppercase;color:var(--acc);text-align:center}
.bht-cc-link svg{width:84u;height:24u}
.bht-cc-link line{stroke:var(--acc);stroke-width:3}
.bht-cc-link path{fill:var(--acc)}

/* diffusion path */
.bht-dp{position:relative;width:100%;aspect-ratio:1128/400}
.bht-dp svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.bht-dp path{fill:none;stroke:#8c5a2b;stroke-width:4;stroke-dasharray:2 12;stroke-linecap:round}
.bht-dp circle{fill:#8c5a2b;stroke:var(--bg);stroke-width:4}
.bht-dp circle.origin{fill:var(--bg);stroke:#8c5a2b;stroke-width:6}
.bht-dp-lab{position:absolute;display:flex;flex-direction:column;gap:3u;text-align:center}
.bht-dp-lab em{font:800 13u/1.2 'Montserrat',Helvetica,sans-serif;font-style:normal;letter-spacing:.16em;text-transform:uppercase;color:var(--acc)}
.bht-dp-lab b{font:800 25u/1.1 'Cinzel',Georgia,serif;color:var(--head)}
.bht-dp-lab span{font-size:16u;line-height:1.35;color:var(--fg)}

/* rise and fall */
.bht-ft{display:flex;flex-direction:column;gap:10u}
.bht-ft-row{display:grid;grid-template-columns:200u minmax(0,1fr);column-gap:28u;align-items:center}
.bht-ft-name{display:flex;flex-direction:column;gap:3u}
.bht-ft-name b{font:800 26u/1.1 'Cinzel',Georgia,serif;color:var(--head)}
.bht-ft-name span{font:600 13u/1.35 'Montserrat',Helvetica,sans-serif;color:var(--soft)}
.bht-ft-plot{position:relative}
.bht-ft-plot svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.bht-ft-plot .base{stroke:var(--rulec);stroke-width:1.5;vector-effect:non-scaling-stroke}
.bht-ft-plot .line{fill:none;stroke-width:4;vector-effect:non-scaling-stroke;stroke-linejoin:round}
.bht-ft-plot .area{stroke:none;opacity:.1}
.bht-ft-plot .lead{stroke:var(--soft);stroke-width:1.5;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}
.bht-ft-plot .t0{stroke:#8c5a2b;fill:#8c5a2b}.bht-ft-plot .t1{stroke:#1a1c1d;fill:#1a1c1d}.bht-ft-plot .t2{stroke:#a8652d;fill:#a8652d}
.dark .bht-ft-plot .t1{stroke:#aeb6b8;fill:#aeb6b8}
.bht-ft-plot .line.t0,.bht-ft-plot .line.t1,.bht-ft-plot .line.t2{fill:none}
.bht-ft-plot circle{fill:var(--bg);stroke:var(--head);stroke-width:3;vector-effect:non-scaling-stroke}
.bht-ft-ev{position:absolute;font:600 13u/1.3 'Montserrat',Helvetica,sans-serif;color:var(--fg);white-space:nowrap}
.bht-ft-ev b{font-weight:800;color:var(--acc)}
.bht-ft-ev.r{text-align:right}
.bht-ft-row.axis{align-items:start}
.bht-ft-ticks{position:relative;height:22u;border-top:2u solid var(--head)}
.bht-ft-ticks span{position:absolute;top:4u;transform:translateX(-50%);font:600 13u/1.3 'Montserrat',Helvetica,sans-serif;color:var(--soft)}
.bht-ft-row.axis .bht-ft-name span{font-style:italic;font-family:'Libre Baskerville',Georgia,serif;font-weight:400}

/* venn */
.bht-vn{position:relative;width:100%;aspect-ratio:1128/430}
.bht-vn svg{position:absolute;inset:0;width:100%;height:100%}
.bht-vn circle.l{fill:rgba(140,90,43,.16);stroke:#8c5a2b;stroke-width:3}
.bht-vn circle.r{fill:rgba(26,28,29,.08);stroke:#1a1c1d;stroke-width:3}
.dark .bht-vn circle.r{fill:rgba(174,182,184,.12);stroke:#aeb6b8}
.bht-vn-name{position:absolute;top:0;width:28%;text-align:center;font:900 28u/1.1 'Cinzel',Georgia,serif;color:var(--head)}
.bht-vn-name.l{left:16%}.bht-vn-name.r{right:16%}
.bht-vn-name.m{left:36%;top:9%;font:800 14u/1.2 'Montserrat',Helvetica,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:var(--acc)}
.bht-vn-list{position:absolute;top:22%;height:66%;width:14%;display:flex;flex-direction:column;justify-content:center;gap:14u;text-align:center}
.bht-vn-list p{font-size:17u;line-height:1.35}
.bht-vn-list.m p{font-weight:700}

/* continuity and change */
.bht-cy{display:flex;flex-direction:column;gap:0}
.bht-cy-top{display:grid;grid-template-columns:minmax(0,1fr) 190u minmax(0,1fr);align-items:stretch}
.bht-cy-side{display:flex;flex-direction:column;gap:12u;padding:10u 0 30u}
.bht-cy-side.a{text-align:right;align-items:flex-end}
.bht-cy-side p{font-size:22u;line-height:1.4;max-width:24ch}
.bht-cy-turn{position:relative;display:flex;flex-direction:column;align-items:center}
.bht-cy-turn span{font:900 44u/1 'Cinzel',Georgia,serif;color:#fffdf7;background:#8c5a2b;border-radius:999u;padding:18u 24u;z-index:1}
.bht-cy-turn i{flex:1;width:4u;background:repeating-linear-gradient(180deg,#8c5a2b 0 10u,transparent 10u 18u)}
.bht-cy-band{background:#1a1c1d;color:#f5f0e7;border-radius:10u;padding:22u 28u;display:grid;grid-template-columns:150u minmax(0,1fr);column-gap:24u;align-items:center}
.dark .bht-cy-band{background:#f5f0e7;color:#151718}
.bht-cy-band .tg{font:900 26u/1.1 'Cinzel',Georgia,serif;color:#c9a46a}
.dark .bht-cy-band .tg{color:#6b3e1f}
.bht-cy-band .its{display:flex;align-items:center;gap:20u}
.bht-cy-band .its p{font-size:18u;line-height:1.4;flex:1}
.bht-cy-band .its i{width:8u;height:8u;border-radius:50%;background:#c9a46a;flex:none}

/* HIPP */
.bht-hp{display:grid;grid-template-columns:minmax(0,1fr) 420u minmax(0,1fr);grid-template-rows:1fr 1fr;column-gap:26u;row-gap:18u;height:100%;max-height:430u}
.bht-hp-card{display:flex;gap:16u;align-items:flex-start;background:#fffdf7;border:1u solid var(--rulec);border-radius:10u;padding:18u 20u;min-height:0}
.dark .bht-hp-card{background:#1a1d1f}
.bht-hp-card.a{grid-column:1;grid-row:1}.bht-hp-card.b{grid-column:1;grid-row:2}.bht-hp-card.c{grid-column:3;grid-row:1}.bht-hp-card.d{grid-column:3;grid-row:2}
.bht-hp-card .l{font:900 50u/1 'Cinzel',Georgia,serif;color:var(--acc);width:40u;flex:none}
.bht-hp-card .c{display:flex;flex-direction:column;gap:6u;min-width:0}
.bht-hp-card .bht-eb{font-size:12u}
.bht-hp-card p{font-size:17u;line-height:1.42}
.bht-hp-src{grid-column:2;grid-row:1 / 3;display:flex;flex-direction:column;justify-content:center;gap:12u;background:#1a1c1d;color:#f5f0e7;border-radius:10u;padding:26u 30u}
.bht-hp-src .bht-sq-mark{color:#c9a46a;font-size:110u;height:74u;margin-top:10u}
.bht-hp-src .q{font-size:22u;line-height:1.5;color:#fffdf7}
.bht-hp-src .bht-sq-who{color:#aeb6b8}
.bht-hp-img{flex:1;min-height:0;border-radius:6u;background:#0b0d0e}

/* claim, evidence, reasoning */
.bht-ce{display:flex;flex-direction:column;gap:18u}
.bht-ce .tg{font:800 12u/1.2 'Montserrat',Helvetica,sans-serif;letter-spacing:.2em;text-transform:uppercase}
.bht-ce-claim{background:#1a1c1d;color:#f5f0e7;border-radius:10u;padding:22u 28u;display:flex;flex-direction:column;gap:8u;--b:#c9a46a}
.bht-ce-claim .tg{color:#c9a46a}
.bht-ce-claim p{font:800 28u/1.3 'Cinzel',Georgia,serif;color:#fffdf7}
.bht-ce-claim p b{color:#c9a46a}
.bht-ce-ev{display:grid;column-gap:18u}
.bht-ce-ev .card{position:relative;background:#fffdf7;border:1u solid #ddd2be;border-radius:10u;padding:18u 20u;display:flex;flex-direction:column;gap:8u;color:#151718}
.bht-ce-ev .card::before{content:'';position:absolute;left:50%;bottom:100%;width:3u;height:18u;background:#8c5a2b}
.bht-ce-ev .tg{color:#6b3e1f}
.bht-ce-ev p{font-size:18u;line-height:1.42}
.bht-ce-ev span{font:600 13u/1.3 'Montserrat',Helvetica,sans-serif;color:#5a5f5c}
.bht-ce-why{border:2u solid #8c5a2b;border-radius:10u;padding:16u 24u;display:grid;grid-template-columns:130u minmax(0,1fr);column-gap:18u;align-items:center}
.bht-ce-why .tg{color:var(--acc)}
.bht-ce-why p{font-size:19u;line-height:1.45}

/* rank the causes */
.bht-rk{display:flex;flex-direction:column}
.bht-rk-row{display:grid;grid-template-columns:70u minmax(0,1fr) 300u;column-gap:26u;align-items:center;padding:14u 0;border-bottom:1u solid var(--rulec)}
.bht-rk-row .n{font:900 46u/1 'Cinzel',Georgia,serif;color:var(--acc)}
.bht-rk-row .w{display:flex;flex-direction:column;gap:2u}
.bht-rk-row .w b{font:800 26u/1.15 'Cinzel',Georgia,serif;color:var(--head)}
.bht-rk-row .w span{font-size:17u;color:var(--soft)}
.bht-rk-track{height:16u;border-radius:8u;background:rgba(174,182,184,.18);overflow:hidden}
.paper .bht-rk-track{background:#ebe2d0}
.bht-rk-track i{display:block;height:100%;background:#c9a46a;border-radius:8u}
.paper .bht-rk-track i{background:#8c5a2b}
.bht-rk-track.open{background:transparent;border:2u dashed var(--soft)}
.bht-rk-ask{padding-top:22u;font-size:24u;line-height:1.45}

/* myth and evidence */
.bht-my-head,.bht-my-row{display:grid;grid-template-columns:minmax(0,1fr) 60u minmax(0,1.25fr);column-gap:18u;align-items:center}
.bht-my-head div{font:800 13u/1.2 'Montserrat',Helvetica,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:var(--soft);padding-bottom:10u}
.bht-my-head div:last-child{color:var(--acc)}
.bht-my-row{border-top:1u solid var(--rulec);padding:18u 0}
.bht-my-row .m{position:relative;justify-self:start}
.bht-my-row .m span{font:700 23u/1.35 'Libre Baskerville',Georgia,serif;color:#8d8f8c;text-decoration:line-through;text-decoration-color:#a8652d;text-decoration-thickness:4u}
.bht-my-row .ar{font:400 34u/1 'Cinzel',Georgia,serif;color:var(--acc);text-align:center}
.bht-my-row .e p{font-size:20u;line-height:1.42;color:var(--head)}
.bht-my-row .e span{display:block;margin-top:6u;font:700 13u/1.3 'Montserrat',Helvetica,sans-serif;letter-spacing:.08em;color:var(--soft)}

/* BeReady: sort it */
.bht-so .chips{display:flex;flex-wrap:wrap;gap:10u}
.bht-so .chips span{font:700 19u/1.2 'Montserrat',Helvetica,sans-serif;color:#6b3e1f;background:#efe4d0;border:1u solid #ddd2be;border-radius:999u;padding:9u 18u}
.dark .bht-so .chips span{background:#1f2426;border-color:#364044;color:#d2b48c}
.bht-so .cols{display:grid;column-gap:14u;margin-top:26u}
.bht-so .cols div{display:flex;flex-direction:column;gap:10u}
.bht-so .cols b{font:800 20u/1.15 'Cinzel',Georgia,serif;color:var(--head);text-align:center}
.bht-so .cols i{display:block;height:150u;border:2u dashed var(--rulec);border-radius:10u}
.paper .bht-so .cols i{border-color:#c9b99c}

/* closers */
.bht-c3{display:grid;column-gap:24u}
.bht-c3-col{display:flex;flex-direction:column;gap:14u;border-top:5u solid #8c5a2b;padding-top:18u;min-width:0}
.bht-c3-col .big{font:900 110u/.9 'Cinzel',Georgia,serif;color:var(--acc)}
.bht-c3-col p{font-size:22u;line-height:1.42;color:var(--head)}
.bht-c3-col .lines i{display:block;height:44u;border-bottom:1.5u solid var(--rulec)}
.bht-rt{display:flex;flex-direction:column;gap:26u;border-left:6u solid #8c5a2b;padding-left:36u}
.bht-rt .f{font-size:34u;line-height:1.9;color:var(--head);max-width:44ch}
.bht-rt-blank{display:inline-block;width:170u;height:1em;border-bottom:3u solid #8c5a2b;vertical-align:baseline;margin:0 6u}
.bht-rt-bank{display:flex;align-items:center;gap:20u;flex-wrap:wrap}
.bht-rt-bank .chips{display:flex;flex-wrap:wrap;gap:10u}
.bht-rt-bank .chips span{font:700 18u/1.2 'Montserrat',Helvetica,sans-serif;color:#6b3e1f;background:#efe4d0;border:1u solid #ddd2be;border-radius:999u;padding:8u 16u}
.bht-rt .ask{font:700 18u/1.4 'Montserrat',Helvetica,sans-serif;color:var(--soft)}

/* frames: compare and route */
.bht-cm{display:grid;grid-template-columns:1fr 1fr;column-gap:24u;flex:1;min-height:0}
.bht-cm .c{display:flex;flex-direction:column;gap:12u;min-height:0}
.bht-cm-img{flex:1;min-height:0;border-radius:4u;background:#fffdf7;border:1u solid #ddd2be}
.bht-cm .k{display:flex;flex-direction:column;gap:4u}
.bht-cm .k b{font:800 13u/1.2 'Montserrat',Helvetica,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#6b3e1f}
.bht-cm .k span{font-size:17u;line-height:1.4}
.bht-cm-q{font-size:21u;line-height:1.45;color:var(--head)}
.bht-frame-compare .bht-h{font-size:36u;max-width:34ch}
.bht-ro-map{position:relative;flex:none;height:100%;overflow:hidden;border-radius:6u;background:#0b0d0e}
.bht-ro-map svg{position:absolute;inset:0;width:100%;height:100%;z-index:1}
.bht-ro-map polyline{fill:none;stroke:#fffdf7;stroke-width:3;stroke-dasharray:8 7;vector-effect:non-scaling-stroke;filter:drop-shadow(0 1px 2px rgba(0,0,0,.8))}
.bht-ro-pin{position:absolute;z-index:2;width:32u;height:32u;transform:translate(-50%,-50%);border-radius:50%;background:#c9a46a;border:3u solid #101213;display:flex;align-items:center;justify-content:center;font:900 15u/1 'Montserrat',Helvetica,sans-serif;color:#101213}
.bht-ro-side{flex:1;padding-left:44u;min-height:0}
.bht-ro-side .bht-h{font-size:34u;max-width:18ch}
.bht-ro-legend{display:flex;flex-direction:column;gap:9u}
.bht-ro-leg{display:grid;grid-template-columns:34u minmax(0,1fr);column-gap:14u;align-items:start}
.bht-ro-leg .n{width:28u;height:28u;border-radius:50%;background:#c9a46a;color:#101213;display:flex;align-items:center;justify-content:center;font:900 13u/1 'Montserrat',Helvetica,sans-serif;margin-top:2u}
.bht-ro-leg b{display:block;font:800 19u/1.2 'Cinzel',Georgia,serif;color:var(--head)}
.bht-ro-leg span{display:block;font-size:15u;line-height:1.35;color:var(--soft)}
/* round 3: case file */
.bht-cf{display:grid;grid-template-columns:290u minmax(0,1fr);column-gap:44u;align-items:start;min-height:0}
.bht-cf-stamp{border:3u solid var(--acc);border-radius:8u;padding:20u 22u 22u;display:flex;flex-direction:column;gap:8u;min-width:0}
.bht-cf-stamp .tg{font:800 13u/1.2 'Montserrat',Helvetica,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:var(--acc)}
.bht-cf-stamp .pl{font:800 30u/1.1 'Cinzel',Georgia,serif;color:var(--head)}
.bht-cf-stamp .pl.lg{font-size:23u}
.bht-cf-stamp .dt{font:900 52u/1 'Cinzel',Georgia,serif;color:var(--acc)}
.bht-cf-pic{height:140u;margin-top:8u;border-radius:4u}
.bht-cf-rows{display:flex;flex-direction:column;min-width:0}
.bht-cf-row{display:grid;grid-template-columns:150u minmax(0,1fr);column-gap:22u;padding:12u 0;border-top:1u solid var(--rulec)}
.bht-cf-row:first-child{border-top:0;padding-top:0}
.bht-cf-row .l{font:800 13u/1.5 'Montserrat',Helvetica,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:var(--acc);padding-top:4u}
.bht-cf-row p{font-size:20u;line-height:1.4}
.bht-cf-proves{background:#1a1c1d;color:#f5f0e7;border-radius:10u;padding:18u 28u;display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:26u;align-items:center}
.dark .bht-cf-proves{background:#f5f0e7;color:#151718}
.bht-cf-proves .tg{font:900 21u/1.15 'Cinzel',Georgia,serif;color:#c9a46a;max-width:9em}
.dark .bht-cf-proves .tg{color:#6b3e1f}
.bht-cf-proves p{font:700 20u/1.35 'Libre Baskerville',Georgia,serif}
.bht-cf-proves b{color:inherit}

/* round 3: branch tree */
.bht-bt{display:grid;grid-template-columns:330u 70u minmax(0,1fr);align-items:stretch;min-height:0}
.bht-bt-claim{align-self:center;background:#c9a46a;color:#101213;border-radius:10u;padding:26u 26u 30u;display:flex;flex-direction:column;gap:12u}
.paper .bht-bt-claim{background:#1a1c1d;color:#f5f0e7}
.bht-bt-claim .tg{font:800 13u/1.2 'Montserrat',Helvetica,sans-serif;letter-spacing:.2em;text-transform:uppercase;opacity:.8}
.bht-bt-claim p{font:800 27u/1.25 'Cinzel',Georgia,serif}
.bht-bt-claim b{color:inherit}
.bht-bt-lines svg{width:100%;height:100%;display:block}
.bht-bt-lines path{fill:none;stroke:var(--acc);stroke-width:3;vector-effect:non-scaling-stroke}
.bht-bt-brs{display:grid;row-gap:12u;min-width:0}
.bht-bt-br{display:grid;grid-template-columns:50u minmax(0,1fr);column-gap:16u;align-items:center;background:#181b1c;border:1u solid #2b3134;border-left:5u solid #c9a46a;border-radius:8u;padding:12u 20u;min-height:0}
.paper .bht-bt-br{background:#fffdf7;border:1u solid #ddd2be;border-left:5u solid #8c5a2b}
.bht-bt-br .n{font:900 28u/1 'Cinzel',Georgia,serif;color:var(--acc);text-align:center}
.bht-bt-br .w{display:flex;flex-direction:column;gap:4u;min-width:0}
.bht-bt-br b{font:800 24u/1.15 'Cinzel',Georgia,serif;color:var(--head)}
.bht-bt-br span{font-size:16u;line-height:1.35;color:var(--soft)}
.bht-bt-br .chips{display:flex;flex-wrap:wrap;gap:8u;margin-top:2u}
.bht-bt-br .chips i{font:700 13u/1 'Montserrat',Helvetica,sans-serif;font-style:normal;letter-spacing:.04em;color:var(--head);border:1.5u solid var(--acc);border-radius:999u;padding:6u 12u}

/* round 3: face off */
.bht-fo{display:flex;flex-direction:column;gap:26u;min-height:0}
.bht-fo-top{display:grid;grid-template-columns:minmax(0,1fr) 300u minmax(0,1fr);align-items:center;position:relative}
.bht-fo-top::before{content:'';position:absolute;left:10%;right:10%;top:50%;height:3u;background:var(--acc);opacity:.55}
.bht-fo-side{position:relative;display:flex;flex-direction:column;gap:8u;padding:30u 28u;border-radius:10u;background:#181b1c;border:1u solid #2b3134;border-top:5u solid #8c5a2b;min-width:0}
.paper .bht-fo-side{background:#fffdf7;border:1u solid #ddd2be;border-top:5u solid #8c5a2b}
.bht-fo-side.r{border-top-color:#c9a46a}
.bht-fo-side b{font:800 38u/1.1 'Cinzel',Georgia,serif;color:var(--head);overflow-wrap:break-word}
.bht-fo-side span{font-size:19u;line-height:1.4;color:var(--soft)}
.bht-fo-mid{position:relative;display:flex;justify-content:center;padding:0 14u}
.bht-fo-mid .pt{position:relative;display:flex;flex-direction:column;align-items:center;gap:3u;text-align:center;background:#c9a46a;color:#101213;border-radius:14u;padding:14u 18u;min-width:0;max-width:100%}
.bht-fo-mid em{font:800 11u/1.2 'Montserrat',Helvetica,sans-serif;font-style:normal;letter-spacing:.2em;text-transform:uppercase}
.bht-fo-mid b{font:900 26u/1.1 'Cinzel',Georgia,serif;color:#101213;overflow-wrap:break-word}
.bht-fo-mid span{font:600 14u/1.3 'Montserrat',Helvetica,sans-serif}
.bht-fo-ds{display:grid;gap:18u}
.bht-fo-d{border-top:4u solid var(--acc);padding:12u 4u 0;min-width:0}
.bht-fo-d .tg{font:800 15u/1.2 'Montserrat',Helvetica,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:var(--acc);margin-bottom:6u}
.bht-fo-d p{font-size:22u;line-height:1.4}

/* round 3: sentence frame */
.bht-sf{display:flex;flex-direction:column;gap:30u}
.bht-sf-line{font:600 36u/2 'Libre Baskerville',Georgia,serif;color:var(--head);max-width:30em}
.bht-sf-line b{color:var(--acc)}
.bht-sf-slot{display:inline-block;vertical-align:baseline;min-width:150u;margin:0 4u;border-bottom:4u solid var(--acc);text-align:center;line-height:1.1;padding:0 8u 3u}
.bht-sf-slot i{font:800 13u/1 'Montserrat',Helvetica,sans-serif;font-style:normal;letter-spacing:.16em;text-transform:uppercase;color:var(--sub)}
.bht-sf-ex{background:#1a1c1d;color:#f5f0e7;border-radius:10u;padding:20u 28u;display:flex;flex-direction:column;gap:8u}
.dark .bht-sf-ex{background:#f5f0e7;color:#151718}
.bht-sf-ex .tg{font:800 13u/1.2 'Montserrat',Helvetica,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#c9a46a}
.dark .bht-sf-ex .tg{color:#6b3e1f}
.bht-sf-ex p{font-size:21u;line-height:1.45}
.bht-sf-ex b{color:#c9a46a}
.dark .bht-sf-ex b{color:#6b3e1f}

`.replace(/(-?)(\d+(?:\.\d+)?)u\b/g,'calc($1$2*var(--u))')
 /* The sign goes inside calc(): -7u used to become -calc(7*var(--u)), which
    is invalid CSS, so the browser dropped the whole declaration. That is how
    the Sharpen strike-through, the porthole rivets' centering and the
    storyboard's AI label position silently stopped working. */
 /* Every rule is scoped under .bht-slide, so a host page's own h2, p or b
    rule cannot outrank a template: the Unit 2 pages and the catalog all style
    bare h2 elements, and without this their titles win and a template's
    headline comes out tiny and gold. */
 .replace(/\/\*[\s\S]*?\*\//g,'')
 .replace(/([^{}]+)\{/g,(m,sel)=>sel.split(',').map(x=>{const t=x.trim();return t.startsWith('.bht-slide')?t:'.bht-slide '+t;}).join(',')+'{');


/* The band's own styles. Not scoped under .bht-slide: the band wraps every
   kind of slide, template or not. Sizes are design pixels on the 1280x720
   board, like the templates'. The look follows the Essential Question strip:
   a gold Montserrat label and the question in Libre Baskerville, on the
   near-black of the cockpit, over one hairline rule. */
const KC_CSS=`
.bhkc{--u:calc(min(100cqw,177.7778cqh)/1280);--bhkc-h:64u;--bhkc-k:.91111;position:absolute;inset:0;container-type:size;background:#030404;overflow:hidden}
.bhkc.bhkc-l3{--bhkc-h:88u;--bhkc-k:.87778}
.bhkc-band{position:absolute;left:0;right:0;top:0;height:var(--bhkc-h);display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:20u;align-items:center;padding:0 max(40u,calc((100cqw - 1280*var(--u))/2 + 40u));background:#07090a;border-bottom:1.5u solid #364044;text-align:left}
.bhkc-code{font:900 13u/1.2 'Montserrat',Helvetica,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#c9a46a;white-space:nowrap}
.bhkc-text{font:400 16u/1.36 'Libre Baskerville',Georgia,serif;color:#ddd6ca;letter-spacing:0;text-shadow:none;overflow-wrap:break-word}
.bhkc-slide{position:absolute;left:0;right:0;bottom:0;top:var(--bhkc-h);overflow:hidden;background:#030404}
.bhkc-slide>.bht-slide{position:absolute!important;inset:0!important}
.bhkc-slide>:not(.bht-slide){position:absolute!important;left:0!important;top:0!important;right:auto!important;bottom:auto!important;width:100cqw!important;height:100cqh!important;max-width:none!important;max-height:none!important;margin:0!important;transform:scale(var(--bhkc-k));transform-origin:50% 0}
`.replace(/(-?)(\d+(?:\.\d+)?)u\b/g,'calc($1$2*var(--u))');

function installCss(){
  if(typeof document==='undefined'||document.getElementById('behistorical-slide-templates'))return;
  const el=document.createElement('style');
  el.id='behistorical-slide-templates';
  el.textContent=CSS+KC_CSS;
  (document.head||document.documentElement).appendChild(el);
}

const api={
  LABEL,
  css:CSS,
  kcCss:KC_CSS,
  withKeyConcept,
  keyConcept,
  kinds:Object.keys(KINDS),
  has:kind=>Object.prototype.hasOwnProperty.call(KINDS,kind),
  render:slide=>{installCss();return KINDS[slide.kind](slide||{});}
};
if(typeof window!=='undefined'){window.BHSlideTemplates=api;installCss();}
if(typeof module!=='undefined'&&module.exports)module.exports=api;
})();
