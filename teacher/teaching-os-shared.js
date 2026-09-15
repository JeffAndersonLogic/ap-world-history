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

if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',installRunOfShowToggle);
else installRunOfShowToggle();
})();
