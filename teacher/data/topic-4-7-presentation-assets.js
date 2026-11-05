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
 *
 * Big-rocks revision, 2026-11-05 (Jeff): the deck went from 27 slides to 16.
 * The Vanmour paintings, the 1662 handscroll, the Peter portrait and the
 * casta painting's workshop reconstruction ("4.7 - Casta System.JPG") are no
 * longer on slides; the real objects stay in the Evidence Lab and on the
 * lesson page, and every file stays in the folder.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/4-7/';
const ai=(name,alt,extra)=>Object.assign({ai:true,url:IMG+encodeURIComponent(name),alt},extra||{});
const AKBAR={url:IMG+'surjan-hada-akbarnama-c1590.jpg',alt:'A Mughal painting: the emperor sits on a throne under a red and yellow canopy while a man bows low before him, nobles stand around the throne, a crowd with trays and weapons gathers below, and a fortress stands on the rocky hill behind',credit:'A Rajput ruler submits to Akbar, 1569, Akbarnama, about 1590 to 1595 · Victoria and Albert Museum · Public domain',ratio:0.624,position:'50% 40%'};
const CASTA={url:IMG+'casta-rodriguez-juarez-c1715.jpg',alt:'A painting of a family of three: a man in a white shirt and brown cloak on the right, a woman in a white embroidered dress and head cloth in the middle, and a boy holding a basket on the left, with an inscription at the top right',credit:'Juan Rodríguez Juárez, From a Mestizo and an Indian Woman, a Coyote, about 1715 to 1720 · Hispanic Society of America · Public domain',ratio:1.424};
const note=(s,x)=>s.notes.land.push(x);

/* 3. The question: a labeled reconstruction of a Mughal court, words in the sky. */
let s=by('question');
s.template={visual:ai('4.7 - Akbars Court.JPG','Reconstruction of an emperor receiving nobles and tribute beneath a canopy at a Mughal court',{fit:'contain'}),place:'top'};
s.subtitle='Conquest and negotiation brought new people into imperial service.';
s.notes.land=s.notes.land.slice(1);
note(s,'The opening court is reconstructed, not a portrait of Akbar or a record of a particular submission. The real Akbarnama painting is on slide 6 and supplies the source evidence.');

/* 6. Big idea 1: a real Mughal painting beside a labeled reconstruction. */
s=by('belongs');
s.template.left.visual=AKBAR;
s.template.right.visual=ai('4.7 - Jewish Refugees Ottoman.JPG','Reconstruction of a refugee family carrying belongings at an Ottoman port, with cargo boats and a city behind them',{position:'50% 45%'});

/* 7. Big idea 2, China: the conquest elite in a labeled reconstruction. */
s=by('qing');
const old=s.template;
s.kind='story-scene';
s.template={visual:ai('4.7 - Manchu Elite.JPG','Reconstruction of a mounted banner officer and other soldiers appearing before Qing officials in a palace courtyard',{fit:'contain'}),steps:[{label:'Ming',text:old.before.items.join('. ')+'.'},{label:'Qing, 1644',text:old.after.items.join('. ')+'.',key:true},{label:'Continued',text:old.continued.items.join('. ')+'.'}],caption:'Conquest created a new elite; institutions continued'};
note(s,'The display of banner power is reconstructed. Its flag designs and uniforms do not establish exact Eight Banner arrangements. The real 1662 banner handscroll is in the Evidence Lab.');

/* 9. Big idea 3: officials at work under Peter's service reforms. */
s=by('oldelites');
s.template.visual=ai('4.7 - Peter the Great.JPG','Reconstruction of Russian nobles working at desks with ledgers in an office under Peter the Great\'s service reforms',{fit:'contain'});

/* 16. Landing: the real casta painting, the ladder painted as if it could never move. */
by('close').template={visual:CASTA};

by('preflight').notes.land.push('Visual update, 2026-11-05: four labeled reconstructions (a Mughal court, refugees at an Ottoman port, the Manchu elite, Russian officials at work) set scenes; the real Akbarnama painting (slide 6) and the real casta painting (slide 16) carry source reasoning, and the other real objects are in the Evidence Lab.');
})();
