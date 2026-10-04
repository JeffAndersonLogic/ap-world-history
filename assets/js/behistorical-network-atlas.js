(function(global){
'use strict';
const root=document.getElementById('network-atlas');if(!root)return;
const $=id=>document.getElementById(id),data=global.BH_UNIT2_ATLAS;
if(!data||!global.d3||!global.topojson||!global.BH_ATLAS_WORLD){$('atlas-status').hidden=false;$('atlas-status').textContent='The interactive map could not load. Use the Unit 2 topic pages while it is unavailable.';return;}
const params=new URLSearchParams(global.location.search),embedded=params.get('embed')==='1';
document.documentElement.classList.toggle('atlas-embedded',embedded);
let topic=data.topics[params.get('topic')]?params.get('topic'):'2.7',view=0,selection={kind:'overview'};
const svg=global.d3.select($('atlas-map')),land=global.topojson.feature(global.BH_ATLAS_WORLD,global.BH_ATLAS_WORLD.objects.land);
const t=()=>data.topics[topic],v=()=>t().views[view];
function sendHeight(){if(embedded&&global.parent!==global)global.parent.postMessage({type:'BH_ATLAS_HEIGHT',height:Math.ceil(root.getBoundingClientRect().height)},global.location.origin);}
function button(label,pressed,fn){const b=document.createElement('button');b.type='button';b.textContent=label;b.setAttribute('aria-pressed',String(pressed));b.addEventListener('click',fn);return b;}
function detail(){
 let title,text,kind;
 if(selection.kind==='place'){const p=v().places[selection.index];title=p.name;text=p.detail;kind='Place';$('atlas-place').value=String(selection.index);}
 else if(selection.kind==='route'){const set=v().sets[selection.index];title=set.key;text=set.detail;kind='Connection';$('atlas-place').value='';}
 else if(selection.kind==='wind'){title=view===0?'Summer monsoon':'Winter monsoon';text=view===0?'In the Arabian Sea, summer winds generally blew toward the northeast, helping ships sail toward western India. Merchants planned their return around the seasonal reversal.':'In the Arabian Sea, winter winds generally blew toward the southwest, supporting the return toward Arabian and East African connections. This arrow shows a regional seasonal pattern, not winds across the entire Indian Ocean.';kind='Seasonal winds';$('atlas-place').value='';}
 else{title=topic==='2.7'?'Three networks, one connected world':t().title;text=t().focus;kind=v().name;$('atlas-place').value='';}
 $('detail-kind').textContent=kind;$('place-title').textContent=title;$('place-detail').textContent=text;sendHeight();
}
function select(kind,index){
 const active=document.activeElement,restore=active&&active.ownerSVGElement===svg.node();
 selection={kind,index};detail();draw();
 if(restore){const selector=kind==='place'?`.atlas-place-hit[data-place="${index}"]`:kind==='route'?`.atlas-route-hit[data-route="${index}"]`:'.atlas-route-hit:not([data-route])';const hit=root.querySelector(selector);if(hit)hit.focus();}
}
function mapText(){const box=$('map-text');box.replaceChildren();const ul=document.createElement('ul');for(const set of v().sets){const li=document.createElement('li');li.textContent=set.key+': '+set.detail;ul.append(li);}for(const place of v().places){const li=document.createElement('li');li.textContent=place.name+': '+place.detail;ul.append(li);}if(topic==='2.3'){const li=document.createElement('li');li.textContent='Arabian Sea seasonal winds: '+(view===0?'toward the northeast in summer.':'toward the southwest in winter.');ul.append(li);}box.append(ul);}
function controls(){
 $('view-controls').replaceChildren(...t().views.map((item,i)=>button(item.name,i===view,()=>{view=i;selection={kind:'overview'};controls();detail();draw();})));
 const placeholder=document.createElement('option');placeholder.value='';placeholder.textContent='Choose a numbered place';
 $('atlas-place').replaceChildren(placeholder,...v().places.map((p,i)=>{const o=document.createElement('option');o.value=i;o.textContent=`${i+1} · ${p.name}`;return o;}));mapText();
}
function accessibleHit(mark,label,fn){mark.attr('role','button').attr('tabindex',0).attr('aria-label',label).on('click',fn).on('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();fn();}});mark.append('title').text(label);}
function nearestPlace(event,index,projection){
 if(!event)return index;
 const [x,y]=global.d3.pointer(event,svg.node());let nearest=index,distance=Infinity;
 v().places.forEach((place,i)=>{const p=projection(place.ll),d=Math.hypot(p[0]-x,p[1]-y);if(d<distance){nearest=i;distance=d;}});
 return nearest;
}
function draw(){
 const w=$('atlas-map').clientWidth;if(!w)return;const h=Math.max(250,w*.60),small=w<550;
 svg.attr('viewBox',`0 0 ${w} ${h}`).attr('height',h);svg.selectAll('*').remove();svg.append('title').text(`${t().title}: ${v().name}`);svg.append('desc').text('Click, tap, or focus a connection or numbered place and press Enter to read its information. The place menu and map legend provide equivalent controls.');
 const proj=global.d3.geoEquirectangular().center([59,21]).scale((w-24)/(160*Math.PI/180)).translate([w/2,h/2]),path=global.d3.geoPath(proj);
 const defs=svg.append('defs');defs.append('clipPath').attr('id','atlas-map-clip').append('rect').attr('width',w).attr('height',h);defs.append('marker').attr('id','atlas-wind-arrow').attr('viewBox','0 0 10 10').attr('refX',9).attr('refY',5).attr('markerWidth',5).attr('markerHeight',5).attr('orient','auto').append('path').attr('d','M0 0L10 5L0 10Z').attr('fill','var(--atlas-highlight)');
 const g=svg.append('g').attr('clip-path','url(#atlas-map-clip)');g.append('path').datum(land).attr('class','atlas-land').attr('d',path).attr('fill','var(--atlas-land)').attr('stroke','var(--atlas-border)').attr('stroke-width',.6);
 const labels=small?[[[11,3],'AFRICA'],[[103,56],'ASIA'],[[76,-18],'INDIAN OCEAN']]:[[[12,3],'AFRICA'],[[15,54],'EUROPE'],[[63,52],'CENTRAL ASIA'],[[114,29],'CHINA'],[[83,21],'INDIA'],[[76,-18],'INDIAN OCEAN']];
 labels.forEach(([ll,label])=>{const xy=proj(ll);g.append('text').attr('x',xy[0]).attr('y',xy[1]).attr('text-anchor','middle').text(label);});
 v().sets.forEach((set,i)=>{const selected=selection.kind==='route'&&selection.index===i;for(const coordinates of set.paths){const line={type:'LineString',coordinates};g.append('path').datum(line).attr('class','atlas-route').attr('d',path).attr('fill','none').attr('stroke',`var(--atlas-${set.color})`).attr('stroke-width',selected?4:2.5).attr('stroke-dasharray',set.dash||null);accessibleHit(g.append('path').datum(line).attr('class','atlas-route-hit').attr('data-route',i).attr('d',path).attr('fill','none').attr('stroke','transparent').attr('stroke-width',20),set.key,()=>select('route',i));}});
 if(topic==='2.3'){const line={type:'LineString',coordinates:view===0?[[53,0],[67,17]]:[[67,17],[53,0]]};g.append('path').datum(line).attr('class','atlas-wind').attr('d',path).attr('fill','none').attr('stroke','var(--atlas-highlight)').attr('stroke-width',2.5).attr('stroke-dasharray','7 4').attr('marker-end','url(#atlas-wind-arrow)');accessibleHit(g.append('path').datum(line).attr('class','atlas-route-hit').attr('d',path).attr('fill','none').attr('stroke','transparent').attr('stroke-width',20),'Arabian Sea seasonal winds',()=>select('wind'));}
 v().places.forEach((p,i)=>{const xy=proj(p.ll),selected=selection.kind==='place'&&selection.index===i;g.append('circle').attr('cx',xy[0]).attr('cy',xy[1]).attr('r',selected?8:6).attr('fill',selected?'var(--atlas-ink)':'var(--atlas-highlight)').attr('stroke','var(--atlas-clean)').attr('stroke-width',1.5);g.append('text').attr('x',xy[0]+10).attr('y',xy[1]-9).text(i+1);accessibleHit(g.append('circle').attr('class','atlas-place-hit').attr('data-place',i).attr('cx',xy[0]).attr('cy',xy[1]).attr('r',22).attr('fill','transparent'),p.name,event=>select('place',nearestPlace(event,i,proj)));});
 $('map-legend').replaceChildren(...v().sets.map((set,i)=>{const b=button(set.key,selection.kind==='route'&&selection.index===i,()=>select('route',i)),mark=document.createElement('span');b.className='map-key';mark.className='map-swatch';mark.style.borderColor=`var(--atlas-${set.color})`;if(set.dash)mark.style.borderTopStyle='dashed';b.prepend(mark);return b;}));if(topic==='2.3')$('map-legend').append(button('Arabian Sea seasonal winds',selection.kind==='wind',()=>select('wind')));sendHeight();
}
function render(){
 view=0;selection={kind:'overview'};$('atlas-topic').value=topic;$('period').textContent=t().period;$('focus').textContent=t().focus;$('lesson-link').href=t().lesson;
 const source=t().source;$('source-title').textContent=source.title;$('source-intro').textContent=source.intro;$('source-text').innerHTML=source.text;$('source-attribution').textContent=source.attribution||'';$('source-note').textContent=source.sourceNote||'';$('source-links').replaceChildren(...(source.sourceLinks||[]).map(link=>{const a=document.createElement('a');a.href=link.url;a.textContent=link.label;a.target='_blank';a.rel='noopener';return a;}));
 controls();detail();draw();const url=new URL(global.location.href);url.searchParams.set('topic',topic);global.history.replaceState(null,'',url);
}
for(const [id,item] of Object.entries(data.topics)){const o=document.createElement('option');o.value=id;o.textContent=`${id} · ${item.title}`;$('atlas-topic').append(o);}
$('atlas-topic').addEventListener('change',event=>{topic=event.target.value;render();});$('atlas-place').addEventListener('change',event=>{if(event.target.value==='')select('overview');else select('place',Number(event.target.value));});
new ResizeObserver(draw).observe($('atlas-map'));new ResizeObserver(sendHeight).observe(root);render();
})(window);
