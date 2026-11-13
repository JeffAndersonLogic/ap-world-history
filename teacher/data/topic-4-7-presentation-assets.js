/* Topic 4.7 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * The original source pictures in this deck were checked on
 * 2026-10-18 (each file downloaded from the holding museum's own image
 * server, or from Wikimedia Commons where the museum's own server could not
 * be reached, looked at, and read against the catalogue record) and saved
 * under assets/images/topics/4-7/ so the student deck never depends on an
 * outside host from a school network. All are public domain:
 *
 * - surjan-hada-akbarnama-c1590.jpg: "Rai Surjan Hada making submission
 *   to Akbar" (1569), Akbarnama, designed by Mukund and painted by Shankar,
 *   about 1590 to 1595, Victoria and Albert Museum IS.2:75-1896 (record O9608;
 *   image from the museum's IIIF server). Cropped inside the page border.
 *   Replaced O9420 in review pass 1: that page's summary says Rajput rulers,
 *   but its catalogue description says ambassadors of Mirza Shahrukh.
 * - armenian-wedding-vanmour-c1720.jpg: Jean Baptiste Vanmour, "Armenian
 *   Wedding," about 1720 to 1737, Rijksmuseum SK-A-2001.
 * - lying-in-room-vanmour-c1720.jpg: Jean Baptiste Vanmour, "Lying-in Room of
 *   a Distinguished Turkish Woman," about 1720 to 1737, Rijksmuseum SK-A-2003.
 *   The museum's description names the enslaved woman making sherbet.
 * - banner-horsemanship-1662.jpg: Nardunbu (Manchu), "Horsemanship
 *   Competition for the Shunzhi Emperor," handscroll dated 1662, Metropolitan
 *   Museum of Art 2002.328 (the Met's own image of one section). Cropped
 *   inside the blue mounting.
 * - casta-rodriguez-juarez-c1715.jpg: Juan Rodríguez Juárez, "De Mestizo, y de
 *   India Produce Coyote," about 1715 to 1720, Hispanic Society of America LA2122,
 *   as recorded on Wikimedia Commons (the Hispanic Society's own catalogue did
 *   not answer from this network). Commons holds it at 1,000 pixels wide, so
 *   it is used where a small picture is enough.
 * - peter-the-great-russia-c1700.jpg: anonymous Russian painter, Peter the
 *   Great in armor, 1700 to 1749, Rijksmuseum SK-A-116.
 * - busbecq-lorck-1557.jpg: Melchior Lorck, portrait of Busbecq, engraved in
 *   Constantinople, 1557 (dated on the plate), Rijksmuseum RP-P-OB-49.753.
 *   Cropped above the museum's handwritten number. Used on the Skill Builder
 *   card.
 * - versailles-martin-1722.jpg: Pierre-Denis Martin, Versailles from the Place
 *   d'Armes, 1722, Château de Versailles, from Wikimedia Commons (CC BY-SA 4.0
 *   for the photograph). Cropped inside the frame. Evidence Lab only.
 *
 * Reviewed uploads added 2026-11-04. The inventory above describes the
 * historical sources; the labeled reconstructions are assigned below.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/4-7/';
const AKBAR={url:IMG+'surjan-hada-akbarnama-c1590.jpg',alt:'A Mughal painting: the emperor sits on a throne under a red and yellow canopy while a man bows low before him, nobles stand around the throne, a crowd with trays and weapons gathers below, and a fortress stands on the rocky hill behind',credit:'A Rajput ruler submits to Akbar, 1569, Akbarnama, about 1590 to 1595 · Victoria and Albert Museum · Public domain',ratio:0.624,position:'50% 45%'};
const WEDDING={url:IMG+'armenian-wedding-vanmour-c1720.jpg',alt:'A painting of a wedding procession outdoors by the water: musicians and men in long robes and fur hats lead the way, with a crowd of veiled women in colored robes on the right beside a domed building',credit:'Jean Baptiste Vanmour, Armenian Wedding, about 1720 to 1737 · Rijksmuseum · Public domain',ratio:1.325,position:'38% 60%'};
const LYINGIN={url:IMG+'lying-in-room-vanmour-c1720.jpg',alt:'A painting of a richly decorated room: a woman sits up in a red bed under green curtains on the right, women in colored robes sit and stand around her, one carries a tray, coffee brews on a brass brazier in the middle, and a woman at the lower left prepares drinks',credit:'Jean Baptiste Vanmour, Lying-in Room of a Distinguished Turkish Woman, about 1720 to 1737 · Rijksmuseum · Public domain',ratio:1.626};
const BANNERS={url:IMG+'banner-horsemanship-1662.jpg',alt:'A section of a painted handscroll: a man stands on a galloping horse playing a flute, while rows of men in blue and yellow carry triangular flame-edged banners and others ride horses; a yellow label on the right carries Chinese characters',credit:'Nardunbu, Horsemanship Competition for the Shunzhi Emperor, dated 1662 · Metropolitan Museum of Art · Public domain',ratio:1.716,position:'50% 50%'};
const CASTA={url:IMG+'casta-rodriguez-juarez-c1715.jpg',alt:'A painting of a family of three: a man in a white shirt and brown cloak on the right, a woman in a white embroidered dress and head cloth in the middle, and a boy holding a basket on the left, with an inscription at the top right',credit:'Juan Rodríguez Juárez, From a Mestizo and an Indian Woman, a Coyote, about 1715 to 1720 · Hispanic Society of America · Public domain',ratio:1.424};
const PETER={url:IMG+'peter-the-great-russia-c1700.jpg',alt:'A painted half-length portrait of a man with dark curly hair and a small mustache, in a steel breastplate over a yellow coat, with a blue sash, one hand on a staff and the other on his hip',credit:'Peter the Great, probably by a Russian painter, first half of the 1700s · Rijksmuseum · Public domain',ratio:0.822,position:'50% 30%'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{visual:AKBAR});
setTemplate('room',{visual:WEDDING,caption:'An Armenian wedding in the Ottoman Empire, painted about 1720 to 1737'});
setTemplate('mughal',{visual:AKBAR,caption:'Rai Surjan Hada bows to Akbar, 1569'});
setTemplate('women',{visual:Object.assign({},LYINGIN,{fit:'contain'})});
setTemplate('banners',{visual:BANNERS});
setTemplate('castapainting',{visual:Object.assign({},CASTA,{fit:'contain',tagPos:'bl'})});
setTemplate('boyars',{visual:PETER,caption:'Peter the Great, first half of the 1700s'});
setTemplate('close',{visual:CASTA});
})();

/* Reviewed reconstruction assignments, 2026-11-04. */
(function(){
'use strict';const T=window.BEHISTORICAL_TEACHING;if(!T)return;
const by=p=>T.slides.find(s=>s.phase===p), ai=(name,alt)=>({ai:true,url:'../assets/images/topics/4-7/'+encodeURIComponent(name),alt,fit:'contain'}), note=(s,x)=>s.notes.land.push(x);
let s=by('question');s.template={visual:ai('4.7 - Akbars Court.JPG','Reconstruction of an emperor receiving nobles and tribute beneath a canopy at a Mughal court'),place:'top'};s.subtitle='Conquest and negotiation brought new people into imperial service.';s.notes.land=s.notes.land.slice(1);s.notes.keys=['Reconstructed court scene: not a source','Akbar brought Rajput rulers in: force first, then high rank','The real Akbarnama painting is on the Mughal slide','Predict: why welcome Hindu rulers?'];note(s,'The opening court is reconstructed, not a portrait of Akbar or a record of a particular submission. The Akbarnama painting remains on the Mughal case slide and supplies the source evidence.');
s=by('mughal');s.notes.land=s.notes.land.map(x=>x.replace('The picture is the Akbarnama painting from slide 3:','The historical picture is an Akbarnama painting:'));
s=by('expelled');s.kind='story-scene';s.template={visual:ai('4.7 - Jewish Refugees Ottoman.JPG','Reconstruction of a refugee family carrying belongings at an Ottoman port, with cargo boats and a city behind them'),steps:[{label:'Spain, 1492',text:'Jews who would not convert were ordered to leave.'},{label:'Portugal, 1497',text:'Most Jews were forcibly baptized rather than allowed to leave.'},{label:'Ottoman cities',text:'Bayezid II allowed refugees to settle in Istanbul, Salonica and other cities.',key:true}],caption:'Opposite state policies toward religious difference'};note(s,'The harbor and family are reconstructed. The skyline is a composite, not evidence of which buildings stood in the 1490s; do not read the invented writing on luggage as a source. Many exiles settled outside the Ottoman Empire too.');
s=by('qing');const old=s.template;s.kind='story-scene';s.template={visual:ai('4.7 - Manchu Elite.JPG','Reconstruction of a mounted banner officer and other soldiers appearing before Qing officials in a palace courtyard'),steps:[{label:'Ming',text:old.before.items.join('. ')+'.'},{label:'Qing, 1644',text:old.after.items.join('. ')+'.',key:true},{label:'Continued',text:old.continued.items.join('. ')+'.'}],caption:'Conquest created a new elite; institutions continued'};note(s,'The display of banner power is reconstructed. Its flag designs and uniforms do not establish exact Eight Banner arrangements. The following historical handscroll is the source to observe and question.');
s=by('castapainting');const source=Object.assign({},s.template.visual,{credit:'Juan Rodríguez Juárez, c.1715 to 1720 · Hispanic Society · Public domain'});s.kind='frame-evidence';s.template={scene:ai('4.7 - Casta System.JPG','Reconstruction of a colonial artist painting a family while an elite patron watches, with a busy street outside'),evidence:source,sceneLabel:'Reconstruction: an artist and a patron',evidenceLabel:'Historical painting: the classification to question'};note(s,'The workshop is reconstructed. The actual Rodríguez Juárez painting is on the right, and the quoted family label refers to it alone. Ask what its elite audience wanted to see; do not treat the generated family or workshop as a historical record.');
s=by('boyars');const portrait=s.template.visual;s.kind='scene-case';s.template={visual:ai('4.7 - Peter the Great.JPG','Reconstruction of Russian nobles working at desks with ledgers in an office under Peter the Great\'s service reforms'),sources:[{visual:portrait,caption:'A historical portrait of Peter the Great'}],sourcesSide:true,steps:s.template.steps,proves:'Nobles lost independence while keeping estates and power over serfs.'};note(s,'The uploaded scene depicts officials at work, not a verified likeness of Peter. The small historical portrait identifies the ruler; the scene makes service and paperwork concrete.');
by('preflight').notes.land.push('Visual update, 2026-11-04: five labeled reconstructions support court hierarchy, refugees, the Manchu elite, casta patronage and Russian service. The actual Mughal painting, Qing handscroll and casta painting continue to carry source reasoning.');
})();

(function(){const p=window.BEHISTORICAL_TEACHING.slides.find(s=>s.phase==='preflight');p.notes.land=p.notes.land.filter(x=>!x.includes('None is AI-generated.'));})();

/* Jeff approved this uploaded hairstyle reference for teacher slide 12,
 * 2026-11-13. Its provenance remains unverified; do not invent a source/date. */
(function(){
'use strict';
const s=window.BEHISTORICAL_TEACHING.slides.find(s=>s.phase==='qing');
s.kind='scene-case';
s.template=Object.assign({},s.template,{
  sources:[{
    visual:{
      url:'../assets/images/topics/4-7/'+encodeURIComponent('4.7 - Queue.jpg'),
      alt:'User-supplied black-and-white profile portrait showing a shaved front scalp and long braid at the back; date and original source unverified',
      credit:'User-supplied image · date/source unverified',
      ratio:361/470,
      fit:'contain'
    },
    caption:'Queue: shaved front, braided back.'
  }],
  sourcesSide:true
});
s.notes.land.push('Jeff explicitly approved the exact queue upload from PR #173 for slide 12 on 2026-11-13 after the provenance hold was explained. Use this small, uncropped inset only to make the named hairstyle visible. Its photographer, date, original collection, reuse terms and generated-or-photographic origin remain unverified; the on-screen credit states the uncertainty. It is not evidence of the 1645 order or its enforcement, a verified image from 1450 to 1750, or proof of the sitter\'s ethnicity, rank or political allegiance. Keep source analysis on the documented 1662 handscroll on the following slide; no Evidence Lab change.');
})();
