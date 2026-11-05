/* Topic 4.4 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture in this deck is a real historical object or scene, verified on
 * Wikimedia Commons on 2026-10-14 (each file page read against what Commons
 * says it is) and saved under assets/images/topics/4-4/ so the student deck
 * never depends on an outside host from a school network:
 *
 * - nanban-screen-kano-naizen-c1600.jpg: Kano Naizen, Arrival of the Southern
 *   Barbarians, right screen, about 1600, Kobe City Museum (public domain)
 * - elmina-dapper-c1668.jpg: View of the fort of El Mina, in Olfert Dapper's
 *   description of Africa, about 1668, Atlas of Mutual Heritage (public domain)
 * - nagasaki-dejima-1735-44.jpg: View of Nagasaki, Johann Wolfgang Heydt, 1744 (dated 1735 to
 *   1744 by the Atlas of Mutual Heritage), public domain
 * - kongo-crucifix-met.jpg: Crucifix, Kongo peoples, 17th to 18th century,
 *   Metropolitan Museum of Art 1999.295.5 (CC0)
 * - potosi-cieza-1553.jpg: Cerro de Potosí, woodcut in Cieza de León, Crónica
 *   del Perú, 1553 (public domain)
 * - codex-kingsborough-1550s.jpg: Codex Kingsborough, about 1550s, a Nahua
 *   complaint against an encomendero (public domain)
 * - canoes-elmina-manfroe-1732.jpg: Fishing canoes at Elmina and slaves going
 *   on board ship at Manfroe, 1732, Atlas of Mutual Heritage (public domain)
 * - sugar-works-du-tertre-1667.jpg: Habitation sucrerie, Sébastien Leclerc for
 *   Du Tertre, Histoire générale des Antilles, 1667, BnF (public domain)
 * - dejima-kawahara-keiga-c1836.jpg: Kawahara Keiga, View of Dejima in
 *   Nagasaki Bay, folding screen, about 1836, Museum Volkenkunde; photograph
 *   René Gerritsen, CC BY-SA 4.0
 *
 * Reviewed uploads added 2026-11-04. The inventory above describes the
 * historical sources; the labeled reconstructions are assigned below.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/4-4/';
const NANBAN={url:IMG+'nanban-screen-kano-naizen-c1600.jpg',alt:'Japanese folding screen painted in gold and color: a large Portuguese ship at anchor on the left, and Portuguese merchants, officers and servants in wide trousers walking up the shore toward Jesuit priests in black and a Japanese house',credit:'Kano Naizen, Arrival of the Southern Barbarians, about 1600 · Kobe City Museum · Public domain',position:'40% 50%'};
const DEJIMA={url:IMG+'dejima-kawahara-keiga-c1836.jpg',alt:'Japanese folding screen of Nagasaki harbor between green hills, with the small fan-shaped island of Dejima and its Dutch buildings in the foreground and ships at anchor in the bay',credit:'Kawahara Keiga, View of Dejima in Nagasaki Bay, painted about 1836, after this period · Museum Volkenkunde · Photo René Gerritsen, CC BY-SA 4.0',position:'50% 0%',fit:'contain'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{visual:NANBAN});
setTemplate('close',{visual:DEJIMA});
})();

/* Reviewed reconstruction assignments, 2026-11-04. */
(function(){
'use strict';const T=window.BEHISTORICAL_TEACHING;if(!T)return;
const by=p=>T.slides.find(s=>s.phase===p), ai=(name,alt)=>({ai:true,url:'../assets/images/topics/4-4/'+encodeURIComponent(name),alt,fit:'contain'});
const note=(s,x)=>{s.notes.land.push(x);};
let s=by('question');s.template={visual:ai('4.4 - Portuguese Maritime Empire.jpg','Reconstruction of Portuguese carracks and a coastal fort beside Indian merchants and dockworkers at a busy trading port'),place:'top'};s.subtitle='Forts and ships brought Europeans into trading networks that already had merchants and rulers.';
s.notes.keys=['Reconstruction: a Portuguese trading port','Forts and ships alongside an existing market','Predict one change and one continuity'];
s.notes.land=s.notes.land.slice(2);note(s,'Historical Reconstruction - AI Generated. This scene evokes a Portuguese trading port such as Goa; it cannot establish a particular ship, building or transaction. Ask what the ships might change and what local merchants might keep doing.');
s=by('rivals');s.kind='story-scene';s.template={visual:ai('4.4 - VOC.jpg','Reconstruction of Dutch company officials, cargo boats and ocean-going ships beside a fortified Asian harbor'),steps:[{label:'Political',text:'Portugal, Spain, the Dutch, France and England competed for power.'},{label:'Religious',text:'Christian missions and conflicts among religious powers accompanied expansion.'},{label:'Economic',text:'Gold, spices and sugar made the trade worth competing for.',key:true}]};
note(s,'The VOC harbor is a labeled reconstruction, a scene of one European rival at work. It does not prove an exact charter, date or monopoly. Topic 4.5 explains joint-stock finance; here it illustrates rivalry.');
s=by('asia');const harbor=s.template.visual;s.kind='scene-case';s.template={visual:ai('4.4 - Nagasaki Bay.jpg','Reconstruction of Japanese officials and Dutch merchants inspecting cargo above a fenced waterfront compound at Nagasaki'),sources:[{visual:harbor,caption:'Nagasaki and Dejima, engraving published 1744'}],steps:s.template.steps,proves:'China and Japan set the terms for foreign merchants.'};
note(s,'The large image is a reconstruction; the small engraving is the historical source. Dates and restrictions come from the edict and the case, not from generated flags, crate marks or the imagined harbor layout.');
s=by('plantation');const source=s.template.visual;s.kind='scene-case';s.template={visual:ai('4.4 - Barbados Sugar.JPG','Reconstruction of Black and white laborers cutting cane on a Caribbean sugar plantation, with a supervisor and a mill behind them'),sources:[{visual:source,caption:'French Caribbean sugar works, printed 1667'}],steps:s.template.steps,proves:'Plantations changed the scale and inherited racial structure of slavery.'};
note(s,'The Barbados reconstruction orients the class to cane, labor and supervision. The engraving below it is a real French Caribbean source, not a view of Barbados. Neither picture alone proves the demographic figures or a particular worker\'s legal status.');
s=by('close');s.template={visual:ai('4.4 - Merchants of Surat.JPG','Reconstruction of Indian merchants, scribes and dockworkers trading cloth and other goods along the waterfront at Surat'),place:'top'};
s.notes.keys=['Surat: Asian merchants keep trading','Reconstruction, not source evidence','Return to the spine','Leave the 4.5 question open: how did the Dutch win?'];
s.notes.land=s.notes.land.slice(1);note(s,'The Surat scene returns to continuity and local agency: European ships joined a commercial world they did not replace. Its buildings and business records are imagined; do not read them as a dated historical source.');
by('preflight').notes.land.push('Visual update, 2026-11-04: five labeled reconstructions support the story; historical sources remain in the deck and Evidence Lab. Reconstructions illustrate cases and do not supply source evidence.');
})();

/* The Indian Ocean story, 2026-11-05 (Jeff). Jeff's three uploads of that
   day, reviewed in photo-review-165 (docs/presentation-image-ledger.json),
   each a labeled reconstruction. Like the deck's other uploads, each is
   shown whole, so its small generator mark stays in the corner. All three are wide, and the escalation picture is a three-part
   composite that a crop would ruin, so all three slides use scene-case: the
   whole picture beside the story steps, which keep the base file's words. */
(function(){
'use strict';const T=window.BEHISTORICAL_TEACHING;if(!T)return;
const by=p=>T.slides.find(x=>x.phase===p);
const ai=(name,alt)=>({ai:true,url:'../assets/images/topics/4-4/'+encodeURIComponent(name),alt,fit:'contain'});
const land=(s,x)=>{s.notes.land.push(x);};
let s=by('calicut');
if(s){s.kind='scene-case';s.template={visual:ai('4.4 - da Gama in Calicut.jpg','Reconstruction of two Calicut officials in white cloth and turbans smiling as they handle red cloth beside a table of striped cloth, basins, coral and small casks, while a bearded Portuguese captain stands stiffly beside them and a scribe writes at a desk in the shadows'),steps:s.template.steps};
s.notes.keys.push('Picture: imagined, not the real audience');
land(s,'The picture is Jeff\'s labeled reconstruction. The officials\' faces, the gifts on the table, the clothes and the building are imagined, and so is the scribe; the journal is the evidence, not the picture. The scribe is a useful prompt for the sourcing question: someone in that room wrote it down.');}
s=by('force');
if(s){s.kind='scene-case';s.template={visual:ai('4.4 - Portuguese Naval Escalation.jpg','Reconstruction in three parts: Portuguese officers under a banner of the Order of Christ planning over a map with sacks of pepper, a burning waterfront building above a crowded Indian Ocean quay, and Portuguese ships with red-cross sails firing cannon'),steps:s.template.steps};
s.notes.keys.push('Composite picture: illustration, not dated views');
land(s,'The picture is a labeled three-part composite: planning, a burning waterfront and cannon fire. It illustrates the turn to force; it is not a view of 1498, 1500 or 1502, and it does not show the pilgrim ship. Read the steps, not the picture, for what happened when.');}
s=by('gates');
if(s){const R=s.template.rows,pay=s.template.payoff;s.kind='scene-case';s.subtitle=s.footer;
s.template={visual:ai('4.4 - Portuguese Strategy.jpg','Reconstruction of four Portuguese officers in dark doublets leaning over a large sea chart with small model ships, inside a stone fort whose arched doorway opens on a harbor with sailing ships and palm trees'),steps:R.map(r=>({label:r.name,key:r.mark==='✗',text:r.tool+': '+r.result})),proves:pay};
s.notes.keys.push('Imagined meeting, not a real portrait');
land(s,'The picture is a labeled reconstruction of an imagined strategy meeting: not a portrait of Albuquerque, and its chart is not an accurate map. It sets the scene for a plan; the four rows carry the history, and Aden, the gate Portugal missed, is the highlighted row.');}
})();

(function(){const p=window.BEHISTORICAL_TEACHING.slides.find(s=>s.phase==='preflight');p.notes.land=p.notes.land.filter(x=>!x.includes('None is AI-generated.'));})();
