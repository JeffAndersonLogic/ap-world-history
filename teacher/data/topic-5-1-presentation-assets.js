/* Topic 5.1 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Read by the teacher surface and by scripts/build-teaching-os-student-decks.js.
 *
 * Every picture in this deck is a real historical object from the Metropolitan
 * Museum of Art's open-access collection (public domain, CC0), downloaded
 * through the Met's collection API on 2026-10-20, looked at, and read against
 * the Met's catalogue record. Wikimedia Commons was rate limited (HTTP 429) for
 * the whole session, so nothing here comes from Commons. Stored under
 * assets/images/topics/5-1:
 *
 * - air-pump-experiment-green-1769.jpg: Valentine Green, A Philosopher Shewing
 *   an Experiment on the Air Pump, mezzotint, 1769, after Joseph Wright of
 *   Derby's painting of 1768. Met 49.95.14.
 * - encyclopedie-title-lucca-1758.jpg: title page of volume 1 of the second
 *   edition of the Encyclopédie, printed at Lucca, Italy, 1758. Met, Watson
 *   Library, AE25 .E532 1758 Q.
 * - encyclopedie-plate-fan-maker.jpg: "Éventailliste, Monture des éventails,"
 *   plate III, from the Encyclopédie's picture volumes (Recueil de planches,
 *   Paris, 1762 to 1772). Met, Watson Library, AE25 .E531 1762 Quarto.
 * - abolitionist-jug-c1820.jpg: pearlware jug transfer-printed with a seated
 *   African man holding a chain and the motto "Am not I a man and a brother,"
 *   about 1820. Met 2020.106.
 * - liberty-arts-sciences-jennings-c1792.jpg: Samuel Jennings, study for
 *   Liberty Displaying the Arts and Sciences, or The Genius of America
 *   Encouraging the Emancipation of the Blacks, about 1791 to 1792. Met 2016.50.
 *
 * No AI-generated picture is used (no generator key was set). The question and
 * landing slides open and close on real historical scenes, under Jeff's
 * standard of 2026-10-14.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const by=id=>T.slides.find(s=>s.phase===id);
const IMG='../assets/images/topics/5-1/';
const AIRPUMP={url:IMG+'air-pump-experiment-green-1769.jpg',alt:'Black-and-white mezzotint of a candlelit room at night: a lecturer with long grey hair stands behind a glass globe with a bird inside, his hand on the pump; around the table a family and their friends watch, two young girls look upset, a boy by the window lowers a birdcage, and the moon shows through the window',credit:'Valentine Green, after Joseph Wright of Derby, A Philosopher Shewing an Experiment on the Air Pump, mezzotint, London, 1769 · Metropolitan Museum of Art · Public domain',ratio:1.271,position:'50% 40%'};
const LUCCA={url:IMG+'encyclopedie-title-lucca-1758.jpg',alt:'The title page of a large old printed book: ENCYCLOPÉDIE, OU DICTIONNAIRE RAISONNÉ DES SCIENCES, DES ARTS ET DES MÉTIERS, with the names Diderot and d\'Alembert, Tome Premier, a small engraving of classical figures with a lyre and a globe, and A LUCQUES, M.DCC.LVIII at the bottom',credit:'Encyclopédie, title page of volume 1, second edition, Lucca, Italy, 1758 · Metropolitan Museum of Art · Public domain',ratio:0.651,fit:'contain'};
const PLATE={url:IMG+'encyclopedie-plate-fan-maker.jpg',alt:'An engraved page from an open book: at the top, two women at long tables in a bright workshop mounting paper fans; below, numbered drawings of fan leaves, a fan frame and tools, with the title Eventailliste, Monture des Eventails',credit:'Encyclopédie, picture volumes, plate III of the fan-maker, Paris, 1762 to 1772 · Metropolitan Museum of Art · Public domain',ratio:0.693,fit:'contain'};
const JUG={url:IMG+'abolitionist-jug-c1820.jpg',alt:'A small cream-colored pottery jug with a copper-colored rim and pink luster handle; printed on its side in black, a man of African descent sits on a rock by the sea holding a chain, a sailing ship behind him, and the words AM NOT I A MAN AND A BROTHER',credit:'Abolitionist jug, pearlware, about 1820 · Metropolitan Museum of Art · Public domain',ratio:0.8,fit:'contain'};
const LIBERTY={url:IMG+'liberty-arts-sciences-jennings-c1792.jpg',alt:'An oil sketch: a woman in a white dress, Liberty, sits on a porch among a globe, a lyre, a palette and books, a broken chain at her feet, holding out a book; on the right, Black men and women kneel or bow toward her, and in the distance freed people dance around a pole under a cloudy sky',credit:'Samuel Jennings, study for Liberty Displaying the Arts and Sciences, about 1791 to 1792 · Metropolitan Museum of Art · Public domain',ratio:1.171,position:'50% 50%'};
const setTemplate=(phase,add)=>{const s=by(phase);if(s)s.template=Object.assign({},s.template||{},add);return s;};
setTemplate('question',{visual:Object.assign({},AIRPUMP,{tagPos:'bl'})});
const spread=by('spread');
if(spread&&spread.template&&Array.isArray(spread.template.panels)){
  [LUCCA,PLATE].forEach((v,i)=>{if(spread.template.panels[i])spread.template.panels[i].visual=v;});
}
setTemplate('abolition',{visual:JUG});
setTemplate('close',{visual:Object.assign({},LIBERTY,{tagPos:'bl',fit:'contain'})});
})();
