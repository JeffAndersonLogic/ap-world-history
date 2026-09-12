/* Shared Topic 2.2 renderer. Maps and image slides reserve dedicated text bands so labels never cover evidence. */
(function(){
  'use strict';
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function vurl(v, L){
    if (!v) return '';
    if (v.type === 'map') return (L.map && L.map.url) || '';
    if (v.type === 'evidence' && L.images && L.images[v.index]) return L.images[v.index].url || '';
    if (v.type === 'stable' && L.stableImages) return L.stableImages[v.key] || '';
    return v.url || '';
  }
  function alt(v, L){
    if (!v) return '';
    if (v.type === 'map') return (L.map && L.map.title) || 'Map';
    if (v.type === 'evidence' && L.images && L.images[v.index]) return L.images[v.index].title || '';
    return v.alt || '';
  }
  function credit(v){ return v && v.credit ? esc(v.credit) : ''; }

  function renderVisual(v, L, cls){
    const u = vurl(v, L);
    if (!u) return '<div class="visual-missing">Visual unavailable</div>';
    return '<img class="'+(cls||'slide-visual')+'" src="'+esc(u)+'" alt="'+esc(alt(v,L))+'">';
  }

  function render(s, L){
    const eyebrow = '<div class="slide-eyebrow">'+esc(s.eyebrow || '')+'</div>';
    const sub = s.subtitle ? '<div class="subtitle">'+esc(s.subtitle)+'</div>' : '';
    const foot = s.footer ? '<div class="footer-copy">'+esc(s.footer)+'</div>' : '';

    if (s.kind === 'hero') {
      const u = vurl(s.visual, L);
      return '<div class="slide hero-slide '+(u?'has-image':'')+'">'+
        (u?renderVisual(s.visual,L,'hero-visual'):'')+
        '<div class="hero-copy">'+eyebrow+'<h2>'+esc(s.title)+'</h2>'+sub+'</div></div>';
    }

    if (s.kind === 'image') {
      return '<div class="slide evidence-slide"><div class="evidence-visual">'+renderVisual(s.visual,L,'evidence-img')+'</div>'+
        '<div class="evidence-band"><div>'+eyebrow+'<h2>'+esc(s.title)+'</h2>'+foot+'</div>'+
        (credit(s.visual)?'<div class="credit">'+credit(s.visual)+'</div>':'')+'</div></div>';
    }

    if (s.kind === 'map') {
      return '<div class="slide map-slide"><div class="map-header">'+eyebrow+'<h2>'+esc(s.title)+'</h2>'+
        (s.mapLabel?'<div class="map-label">'+esc(s.mapLabel)+'</div>':'')+'</div>'+
        '<div class="map-canvas">'+renderVisual(s.visual,L,'map-img')+'</div>'+
        '<div class="map-footer"><div>'+foot+'</div><div class="credit">'+credit(s.visual)+'</div></div></div>';
    }

    if (s.kind === 'mapCompare') {
      const maps = Array.isArray(s.maps) ? s.maps : [];
      return '<div class="slide compare-slide"><div class="map-header">'+eyebrow+'<h2>'+esc(s.title)+'</h2></div>'+
        '<div class="compare-grid">'+maps.map(m => '<figure class="compare-panel"><figcaption>'+esc(m.label||'')+'</figcaption><div class="compare-map">'+renderVisual(m.visual,L,'map-img')+'</div><div class="credit">'+credit(m.visual)+'</div></figure>').join('')+'</div>'+
        '<div class="map-footer"><div>'+foot+'</div></div></div>';
    }

    if (s.kind === 'process') {
      return '<div class="slide content-slide">'+eyebrow+'<h2>'+esc(s.title)+'</h2><div class="steps">'+
        (s.steps||[]).map(x => '<div class="step"><b>'+esc(x.label)+'</b><span>'+esc(x.text)+'</span></div>').join('')+
        '</div>'+foot+'</div>';
    }

    if (s.kind === 'grid') {
      return '<div class="slide content-slide">'+eyebrow+'<h2>'+esc(s.title)+'</h2><div class="grid">'+
        (s.cards||[]).map(x => '<div class="grid-item"><h3>'+esc(x.title)+'</h3><p>'+esc(x.text)+'</p></div>').join('')+
        '</div>'+foot+'</div>';
    }

    if (s.kind === 'video') {
      const y=s.video||{};
      const src='https://www.youtube.com/embed/'+esc(y.youtubeId||'')+'?start='+(y.start||0)+'&end='+(y.end||0)+'&rel=0&modestbranding=1';
      return '<div class="slide video-slide"><div class="video-wrap"><iframe class="video-frame" src="'+src+'" title="'+esc(y.label||s.title)+'" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><div class="video-copy">'+eyebrow+'<h2>'+esc(s.title)+'</h2>'+foot+'</div></div></div>';
    }

    if (s.kind === 'action') {
      return '<div class="slide content-slide">'+eyebrow+'<h2>'+esc(s.title)+'</h2>'+sub+
        (s.action?'<a class="action-link" target="_blank" href="'+esc(s.action.url)+'">'+esc(s.action.label||'Open')+'</a>':'')+foot+'</div>';
    }

    return '<div class="slide content-slide">'+eyebrow+'<h2>'+esc(s.title)+'</h2>'+sub+foot+'</div>';
  }

  function styles(){
    return `
      .slide{width:100%;height:100%;position:relative;overflow:hidden;background:linear-gradient(135deg,#17191a,#282c2e);color:#F5F0E7}
      .content-slide,.video-slide{padding:7vh 6vw;display:flex;flex-direction:column;justify-content:center}
      .slide-eyebrow{font:800 clamp(.68rem,.9vw,.95rem) var(--ui);letter-spacing:.16em;text-transform:uppercase;color:var(--gold);margin-bottom:1.4vh}
      .slide h2{font:700 clamp(2.7rem,5.4vw,6.3rem)/1.02 var(--title);margin:0}
      .subtitle{font-size:clamp(1.15rem,1.9vw,2.1rem);max-width:82vw;margin-top:2vh;color:#ddd5c8;line-height:1.35}
      .footer-copy{font:700 clamp(.72rem,1vw,1.05rem) var(--ui);color:var(--sand);letter-spacing:.035em;line-height:1.35}
      .credit{font:600 clamp(.5rem,.65vw,.68rem) var(--ui);color:#899194;line-height:1.35}
      .visual-missing{display:grid;place-items:center;height:100%;color:#9fa7aa;font:700 .8rem var(--ui)}

      .hero-slide.has-image{background:#090b0c}.hero-visual{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.hero-copy{position:absolute;left:0;right:0;bottom:0;padding:8vh 6vw 6vh;background:linear-gradient(transparent,rgba(0,0,0,.94) 42%)}.hero-copy h2{font-size:clamp(3.3rem,6.5vw,7.4rem);max-width:92vw}

      .evidence-slide{display:grid;grid-template-rows:minmax(0,1fr) auto;background:#0b0d0e}.evidence-visual{min-height:0;padding:2.2vh 2.2vw;display:grid;place-items:center}.evidence-img{width:100%;height:100%;object-fit:contain}.evidence-band{display:grid;grid-template-columns:minmax(0,1fr) minmax(220px,.35fr);gap:2vw;align-items:end;padding:2.1vh 4vw 2.4vh;background:#151819;border-top:1px solid #3E4447}.evidence-band .slide-eyebrow{margin-bottom:.7vh}.evidence-band h2{font-size:clamp(1.7rem,3vw,3.4rem);max-width:75vw}.evidence-band .footer-copy{margin-top:.7vh}.evidence-band .credit{text-align:right}

      .map-slide,.compare-slide{display:grid;grid-template-rows:auto minmax(0,1fr) auto;background:#0b0d0e}.map-header{position:relative;padding:2.2vh 4vw 1.6vh;background:#151819;border-bottom:1px solid #3E4447}.map-header .slide-eyebrow{margin-bottom:.55vh}.map-header h2{font-size:clamp(1.75rem,3.25vw,3.7rem);max-width:86vw}.map-label{position:absolute;right:4vw;top:50%;transform:translateY(-20%);font:800 clamp(.58rem,.75vw,.78rem) var(--ui);letter-spacing:.12em;color:#D2B48C;text-transform:uppercase}.map-canvas{min-height:0;padding:1.4vh 2vw;display:grid;place-items:center}.map-img{width:100%;height:100%;object-fit:contain}.map-footer{display:flex;justify-content:space-between;align-items:center;gap:2vw;padding:1.2vh 4vw 1.5vh;background:#151819;border-top:1px solid #3E4447}.map-footer .credit{text-align:right;max-width:44vw}

      .compare-grid{min-height:0;display:grid;grid-template-columns:1fr 1fr;gap:1.1vw;padding:1.3vh 1.5vw}.compare-panel{min-width:0;min-height:0;margin:0;display:grid;grid-template-rows:auto minmax(0,1fr) auto;background:#101314;border:1px solid #343a3d;border-radius:12px;overflow:hidden}.compare-panel figcaption{padding:1vh 1.2vw;background:#1c2022;border-bottom:1px solid #343a3d;font:800 clamp(.55rem,.72vw,.75rem) var(--ui);letter-spacing:.11em;color:#C9A46A;text-transform:uppercase}.compare-map{min-height:0;padding:1vh .8vw;display:grid;place-items:center}.compare-panel .credit{padding:.7vh 1vw 1vh;background:#101314}

      .steps{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5vw;margin-top:4vh}.step{border:1px solid #5A5F5C;border-radius:14px;padding:2.6vh 1.7vw;background:rgba(255,255,255,.045)}.step b{display:block;color:var(--gold);font:800 clamp(.7rem,.9vw,1rem) var(--ui);letter-spacing:.1em;margin-bottom:.8vh}.step span{font-size:clamp(1rem,1.5vw,1.65rem);line-height:1.35}.grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1.5vw;margin-top:3.5vh}.grid-item{border:1px solid #5A5F5C;border-radius:14px;padding:2.3vh 1.7vw;background:rgba(255,255,255,.045)}.grid-item h3{font:700 clamp(1.1rem,1.65vw,1.85rem) var(--title);color:var(--gold);margin:0 0 .6vh}.grid-item p{margin:0;font-size:clamp(.95rem,1.35vw,1.45rem)}
      .video-wrap{display:grid;grid-template-columns:minmax(0,1.55fr) minmax(250px,.45fr);gap:2.2vw;align-items:center}.video-frame{width:100%;aspect-ratio:16/9;border:0;border-radius:14px;background:#000;box-shadow:0 10px 35px rgba(0,0,0,.45)}.video-copy h2{font-size:clamp(2rem,4vw,4.6rem)}.action-link{display:inline-flex;width:max-content;margin-top:3vh;background:var(--gold);color:#151718;text-decoration:none;padding:12px 16px;border-radius:8px;font:800 .78rem var(--ui);text-transform:uppercase;letter-spacing:.05em}
      @media(max-width:900px){.compare-grid,.video-wrap,.grid,.steps{grid-template-columns:1fr}.map-label{position:static;transform:none;margin-top:.5vh}.evidence-band{grid-template-columns:1fr}.evidence-band .credit{text-align:left}.compare-slide{overflow:auto}.compare-panel{min-height:36vh}}
    `;
  }

  window.BH22_RENDERER = { render, styles, esc, vurl, alt };
})();
