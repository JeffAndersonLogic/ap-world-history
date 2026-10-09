(function(){
'use strict';

const css=document.createElement('style');
css.id='behistorical-teaching-os-shared';
css.textContent=`
/* Shared Teaching OS cockpit contract. Topic files own slide composition; this file owns teacher-surface readability. */
body:not(.project-mode) .cockpit{max-width:1860px!important;grid-template-columns:minmax(0,1fr) 430px!important;gap:16px!important}
body:not(.project-mode) .timeline{display:none!important}
body.ros-open:not(.project-mode) .cockpit{grid-template-columns:240px minmax(0,1fr) 430px!important}
body.ros-open:not(.project-mode) .timeline{display:flex!important}
body:not(.project-mode) .intel-top{padding:16px 17px!important}
body:not(.project-mode) .intel-top .phase{font-size:.62rem!important}
body:not(.project-mode) .intel-top h2{font-size:1.18rem!important;line-height:1.18!important}
body:not(.project-mode) .intel-scroll{padding:13px 15px 17px!important}
body:not(.project-mode) .cue{padding:13px 14px!important;margin-bottom:10px!important}
body:not(.project-mode) .cue b{font-size:.62rem!important;margin-bottom:7px!important}
body:not(.project-mode) .cue p,body:not(.project-mode) .cue li{font-size:.89rem!important;line-height:1.52!important}
body:not(.project-mode) .cue.source a{font-size:.76rem!important}
body:not(.project-mode) .mission .question{font-size:.9rem!important;line-height:1.4!important}
body:not(.project-mode) .flow-card .name{font-size:.75rem!important}
body:not(.project-mode) .flow-card .range{font-size:.55rem!important}
.project-mode #runOfShowToggle{display:none!important}
@media(max-width:1320px){
  body:not(.project-mode) .cockpit{grid-template-columns:minmax(0,1fr) 390px!important}
  body.ros-open:not(.project-mode) .cockpit{grid-template-columns:215px minmax(0,1fr) 390px!important}
  body:not(.project-mode) .cue p,body:not(.project-mode) .cue li{font-size:.84rem!important}
}
`;
document.head.appendChild(css);

function installRunOfShowToggle(){
  const bar=document.querySelector('.appbar');
  if(!bar||document.getElementById('runOfShowToggle'))return;
  const btn=document.createElement('button');
  btn.className='btn';
  btn.id='runOfShowToggle';
  btn.type='button';
  btn.textContent='Run of Show';
  btn.setAttribute('aria-pressed','false');
  const anchor=document.getElementById('briefingBtn');
  if(anchor)bar.insertBefore(btn,anchor);else bar.appendChild(btn);
  btn.addEventListener('click',()=>{
    const open=document.body.classList.toggle('ros-open');
    btn.textContent=open?'Hide Run of Show':'Run of Show';
    btn.setAttribute('aria-pressed',String(open));
  });
}

/* Briefing.
 *
 * Every Teaching OS header carries a Briefing button, and from Topic 2.6 on
 * the pages carried nothing behind it: no drawer, no click handler, no B key,
 * while the shortcut line still advertised "B briefing". Every check stayed
 * green because nothing ever clicked it. So the briefing is built here, once,
 * from the deck's own data (meta, priorities, flow, quickLaunch), and a page
 * gets it by having the button. The older 2.1 to 2.5 pages keep their own
 * drawer; they only gain the share tools and the #briefing link.
 *
 * Sharing is for co-teachers: a link that opens straight to the briefing, the
 * briefing as plain text for an email or a Teams message, and a print view.
 * Nothing is sent anywhere by this page; the teacher pastes what they copy.
 *
 * The briefing is teacher-only and never opens on the projector. */
const BRIEF_HASH='#briefing';
const isProjector=()=>new URLSearchParams(location.search).get('mode')==='project'||document.body.classList.contains('project-mode');
const escHTML=v=>String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const PRIORITY_LABELS=[['must','Must land'],['should','Should land'],['could','Could add']];

function briefingData(){
  const T=window.BEHISTORICAL_TEACHING||{},m=T.meta||{};
  return{
    topic:m.topic||'',title:m.title||'',spine:m.subtitle||'',question:m.essentialQuestion||'',
    focus:m.apFocus||'',target:m.endTarget||'',minutes:m.minutes||'',priorities:T.priorities||{},
    flow:(T.flow||[]).filter(f=>f&&f.label),
    links:(T.quickLaunch||[]).filter(x=>x&&x.url).map(x=>({label:x.label||x.url,url:new URL(x.url,location.href).href}))
  };
}
function rangeLabel(r){r=String(r||'');return/\d/.test(r)&&!/min/i.test(r)?r+' min':r}
function shareLink(){
  const u=new URL(location.href);
  u.searchParams.delete('mode');
  u.hash=BRIEF_HASH;
  return u.href;
}
function briefingText(){
  const d=briefingData(),out=[];
  out.push('BeHistorical · Topic '+d.topic+' Briefing');
  out.push(d.title+(d.spine?': '+d.spine:''));
  out.push('');
  if(d.question)out.push('Essential question: '+d.question);
  if(d.focus)out.push('AP focus: '+d.focus);
  if(d.target)out.push('End target: '+d.target);
  PRIORITY_LABELS.forEach(([k,label])=>{
    const items=d.priorities[k]||[];
    if(!items.length)return;
    out.push('','['+label.toUpperCase()+']');
    items.forEach(x=>out.push('- '+x));
  });
  if(d.flow.length){
    out.push('','[RUN OF SHOW'+(d.minutes?', '+d.minutes+' MINUTES':'')+']');
    d.flow.forEach(f=>out.push('- '+rangeLabel(f.range)+': '+f.label+(f.teacher?'. '+f.teacher:'')));
  }
  if(d.links.length){
    out.push('','[QUICK LAUNCH]');
    d.links.forEach(x=>out.push('- '+x.label+': '+x.url));
  }
  out.push('','Open this briefing in the Teaching OS: '+shareLink());
  return out.join('\n');
}
function briefingBody(){
  const d=briefingData();
  let h='';
  if(d.spine)h+='<p class="bhb-spine">'+escHTML(d.spine)+'</p>';
  const lead=[['Essential question',d.question],['AP focus',d.focus],['End target',d.target]].filter(x=>x[1]);
  if(lead.length)h+='<div class="bhb-section"><dl class="bhb-lead">'+lead.map(x=>'<dt>'+x[0]+'</dt><dd>'+escHTML(x[1])+'</dd>').join('')+'</dl></div>';
  const blocks=PRIORITY_LABELS.filter(([k])=>(d.priorities[k]||[]).length);
  if(blocks.length)h+='<div class="bhb-section"><h3>Instructional guardrails</h3><div class="bhb-priorities">'+blocks.map(([k,label])=>'<section class="bhb-priority '+k+'"><h4>'+label+'</h4><ul>'+d.priorities[k].map(x=>'<li>'+escHTML(x)+'</li>').join('')+'</ul></section>').join('')+'</div></div>';
  if(d.flow.length)h+='<div class="bhb-section"><h3>Run of show'+(d.minutes?' &middot; '+escHTML(d.minutes)+' minutes':'')+'</h3><ol class="bhb-flow">'+d.flow.map(f=>'<li><span class="bhb-range">'+escHTML(rangeLabel(f.range))+'</span><span><b>'+escHTML(f.label)+'</b>'+(f.teacher?' '+escHTML(f.teacher):'')+'</span></li>').join('')+'</ol></div>';
  if(d.links.length)h+='<div class="bhb-section bhb-launch-section"><h3>Quick launch</h3><div class="bhb-launches">'+d.links.map(x=>'<a class="btn" href="'+escHTML(x.url)+'" target="_blank" rel="noopener">'+escHTML(x.label)+'</a>').join('')+'</div></div>';
  return h;
}
function shareSection(){
  return '<div class="bhb-section bhb-share"><h3>Share with your co-teachers</h3>'
    +'<p class="bhb-hint">Copy the link to open this briefing in their Teaching OS, or copy the briefing itself into an email or Teams message.</p>'
    +'<div class="bhb-share-row"><button class="btn" type="button" data-bhb="link">Copy link</button><button class="btn" type="button" data-bhb="text">Copy briefing text</button>'
    +(navigator.share?'<button class="btn" type="button" data-bhb="share">Share&hellip;</button>':'')
    +'<button class="btn" type="button" data-bhb="print">Print</button></div>'
    +'<p class="bhb-status" role="status" aria-live="polite"></p></div>';
}

function copyText(text){
  const fallback=()=>{
    const ta=document.createElement('textarea');
    ta.value=text;ta.setAttribute('readonly','');ta.style.cssText='position:fixed;left:-9999px;top:0';
    document.body.appendChild(ta);ta.select();
    let ok=false;try{ok=document.execCommand('copy')}catch(e){}
    ta.remove();
    return ok?Promise.resolve():Promise.reject(new Error('copy refused'));
  };
  if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(text).catch(fallback);
  return fallback();
}
function printBriefing(){
  let holder=document.getElementById('bhbPrint');
  if(!holder){holder=document.createElement('div');holder.id='bhbPrint';document.body.appendChild(holder);}
  const d=briefingData();
  holder.innerHTML='<div class="bhb-print-kicker">BeHistorical &middot; Teaching OS</div><h1>Topic '+escHTML(d.topic)+' Briefing: '+escHTML(d.title)+'</h1>'+briefingBody()+'<p class="bhb-print-link">'+escHTML(shareLink())+'</p>';
  document.documentElement.classList.add('bhb-printing');
  const done=()=>{document.documentElement.classList.remove('bhb-printing');window.removeEventListener('afterprint',done)};
  window.addEventListener('afterprint',done);
  window.print();
}
function wireShare(root){
  const status=root.querySelector('.bhb-status');
  const say=msg=>{if(status)status.textContent=msg};
  root.addEventListener('click',e=>{
    const b=e.target.closest('[data-bhb]');
    if(!b)return;
    const act=b.getAttribute('data-bhb');
    if(act==='link')copyText(shareLink()).then(()=>say('Link copied. Paste it to your co-teachers; it opens this briefing.'),()=>say('Copy was blocked. The link is: '+shareLink()));
    else if(act==='text')copyText(briefingText()).then(()=>say('Briefing copied. Paste it into an email or a Teams message.'),()=>say('Copy was blocked by this browser. Use Print instead.'));
    else if(act==='share')navigator.share({title:'Topic '+briefingData().topic+' Briefing',text:briefingText(),url:shareLink()}).catch(()=>{});
    else if(act==='print')printBriefing();
  });
}

const sharedCSS=`
.bhb-drawer{position:fixed;inset:0;z-index:90;display:none;background:rgba(0,0,0,.64);backdrop-filter:blur(5px)}
.bhb-drawer.open{display:block}
.project-mode .bhb-drawer{display:none!important}
.bhb-panel{position:absolute;right:0;top:0;height:100%;width:min(600px,94vw);overflow:auto;background:#101415;color:#e2ded6;border-left:1px solid var(--gold,#c9a46a);box-shadow:-30px 0 80px rgba(0,0,0,.55);padding:22px;font-family:var(--body,Georgia,serif)}
.bhb-head{display:flex;align-items:flex-start;gap:10px;padding-bottom:14px;border-bottom:1px solid var(--line,#364044)}
.bhb-head .bhb-kicker{font:800 .6rem var(--ui,system-ui,sans-serif);letter-spacing:.16em;text-transform:uppercase;color:var(--gold,#c9a46a)}
.bhb-head h2{font:700 1.2rem var(--title,Georgia,serif);margin:4px 0 0;color:var(--paper,#f5f0e7)}
.bhb-head .btn{margin-left:auto;flex:none}
.bhb-spine{margin:14px 0 0;font-style:italic;color:var(--sand,#d2b48c)}
.bhb-section{margin-top:20px}
.bhb-section h3{font:800 .6rem var(--ui,system-ui,sans-serif);letter-spacing:.16em;text-transform:uppercase;color:var(--gold,#c9a46a);margin:0 0 9px}
.bhb-lead{margin:0;display:grid;gap:10px}
.bhb-lead dt{font:800 .58rem var(--ui,system-ui,sans-serif);letter-spacing:.14em;text-transform:uppercase;color:var(--muted,#aeb6b8)}
.bhb-lead dd{margin:3px 0 0;font-size:.9rem;line-height:1.5;color:var(--paper,#f5f0e7)}
.bhb-priorities{display:grid;gap:9px}
.bhb-priority{padding:12px 13px;background:#171c1e;border:1px solid var(--line,#364044);border-radius:10px}
.bhb-priority.must{border-left:3px solid var(--red,#ad655e)}
.bhb-priority.should{border-left:3px solid var(--gold,#c9a46a)}
.bhb-priority.could{border-left:3px solid var(--blue,#7b9bad)}
.bhb-priority h4{margin:0 0 7px;font:900 .56rem var(--ui,system-ui,sans-serif);letter-spacing:.13em;text-transform:uppercase;color:var(--paper,#f5f0e7)}
.bhb-priority ul{margin:0;padding-left:19px}
.bhb-priority li,.bhb-flow li{font-size:.86rem;line-height:1.5}
.bhb-priority li+li{margin-top:6px}
.bhb-flow{list-style:none;margin:0;padding:0;display:grid;gap:7px}
.bhb-flow li{display:grid;grid-template-columns:92px 1fr;gap:10px}
.bhb-range{font:700 .7rem var(--ui,system-ui,sans-serif);color:var(--gold,#c9a46a);padding-top:2px}
.bhb-flow b{color:var(--paper,#f5f0e7)}
.bhb-launches,.bhb-share-row{display:flex;flex-wrap:wrap;gap:8px}
.bhb-launches a{text-decoration:none}
.bhb-share{padding-top:16px;border-top:1px solid var(--line,#364044)}
.bhb-hint{margin:0 0 10px;font-size:.82rem;line-height:1.45;color:var(--muted,#aeb6b8)}
.bhb-status{min-height:1.2em;margin:9px 0 0;font:600 .74rem var(--ui,system-ui,sans-serif);color:var(--green,#7fa879)}
#bhbPrint{display:none}
@media print{
  html.bhb-printing,html.bhb-printing body{background:#fff!important;color:#111!important;min-height:0!important}
  html.bhb-printing body>*:not(#bhbPrint){display:none!important}
  html.bhb-printing #bhbPrint{display:block!important;color:#111;font:11pt Georgia,serif;padding:0 .2in}
  #bhbPrint h1{font:700 15pt Georgia,serif;margin:4pt 0 6pt}
  #bhbPrint .bhb-print-kicker,#bhbPrint h3,#bhbPrint h4,#bhbPrint dt,#bhbPrint .bhb-range{color:#333!important;font-family:Arial,sans-serif}
  #bhbPrint dd,#bhbPrint b,#bhbPrint .bhb-spine{color:#111!important}
  #bhbPrint .bhb-priority{background:#fff;border-color:#999;break-inside:avoid}
  #bhbPrint .bhb-launch-section{display:none}
  #bhbPrint .bhb-print-link{margin-top:14pt;font:9pt Arial,sans-serif;color:#555;word-break:break-all}
}
`;

function installBriefing(){
  const btn=document.getElementById('briefingBtn');
  if(!btn||btn.dataset.bhbWired)return;
  btn.dataset.bhbWired='1';
  const style=document.createElement('style');
  style.id='behistorical-teaching-os-briefing';
  style.textContent=sharedCSS;
  document.head.appendChild(style);

  const legacy=document.querySelector('#drawer .briefing');
  if(legacy){
    /* 2.1 to 2.5 own their drawer, its button and its B key already. */
    legacy.insertAdjacentHTML('beforeend',shareSection());
    wireShare(legacy.querySelector('.bhb-share'));
    if(location.hash===BRIEF_HASH&&!isProjector())btn.click();
    return;
  }

  const d=briefingData();
  const drawer=document.createElement('div');
  drawer.className='bhb-drawer';
  drawer.id='bhbDrawer';
  drawer.innerHTML='<section class="bhb-panel" role="dialog" aria-modal="true" aria-labelledby="bhbTitle" tabindex="-1">'
    +'<div class="bhb-head"><div><div class="bhb-kicker">Before class</div><h2 id="bhbTitle">Topic '+escHTML(d.topic)+' Briefing</h2></div><button class="btn" type="button" id="bhbClose">Close</button></div>'
    +briefingBody()+shareSection()+'</section>';
  document.body.appendChild(drawer);
  const panel=drawer.querySelector('.bhb-panel'),close=drawer.querySelector('#bhbClose');
  wireShare(drawer.querySelector('.bhb-share'));
  btn.setAttribute('aria-haspopup','dialog');
  btn.setAttribute('aria-expanded','false');
  let opener=null;
  const isOpen=()=>drawer.classList.contains('open');
  function open(){
    if(isOpen()||isProjector())return;
    opener=document.activeElement;
    drawer.classList.add('open');
    btn.setAttribute('aria-expanded','true');
    close.focus();
  }
  function shut(){
    if(!isOpen())return;
    drawer.classList.remove('open');
    btn.setAttribute('aria-expanded','false');
    (opener&&opener.focus?opener:btn).focus();
  }
  btn.addEventListener('click',()=>isOpen()?shut():open());
  close.addEventListener('click',shut);
  drawer.addEventListener('click',e=>{if(e.target===drawer)shut()});

  /* Capture phase, so while the briefing is open the cockpit's own keys
     (arrows and space advance slides, F presents, P opens the projector) do
     not act on a deck the teacher cannot see. */
  window.addEventListener('keydown',e=>{
    const typing=/^(INPUT|TEXTAREA|SELECT)$/.test((e.target&&e.target.tagName)||'')||(e.target&&e.target.isContentEditable);
    if(isOpen()){
      if(e.key==='Escape'){e.stopImmediatePropagation();e.preventDefault();shut();return;}
      if(e.key==='Tab'){
        const f=Array.from(panel.querySelectorAll('a[href],button:not([disabled])'));
        if(!f.length)return;
        const first=f[0],last=f[f.length-1];
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
        else if(!panel.contains(document.activeElement)){e.preventDefault();first.focus();}
        return;
      }
      if((e.key==='b'||e.key==='B')&&!typing&&!e.ctrlKey&&!e.metaKey&&!e.altKey){e.stopImmediatePropagation();e.preventDefault();shut();return;}
      if(/^(ArrowLeft|ArrowRight|ArrowUp|ArrowDown|PageUp|PageDown|Home|End| |f|F|p|P)$/.test(e.key))e.stopImmediatePropagation();
      return;
    }
    if((e.key==='b'||e.key==='B')&&!typing&&!e.ctrlKey&&!e.metaKey&&!e.altKey){e.preventDefault();open();}
  },true);

  if(location.hash===BRIEF_HASH)open();
}

function installAll(){installRunOfShowToggle();installBriefing();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',installAll);
else installAll();
})();
