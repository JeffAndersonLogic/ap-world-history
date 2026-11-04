/* Topic 4.3 data-only visual assignments. Safe to evaluate in Node: no DOM.
 * Teacher and generated student decks share these assignments.
 *
 * Jeff's five uploaded reconstructions, reviewed 2026-11-03:
 * - second arrival: opening question, frame-subtitle, copy in the sky
 * - horse revolution: story-scene, whole image beside the diffusion steps
 * - sugar and enslaved labor: story-scene alongside Post's historical painting
 * - American crops in Asia: story-scene beside the nutrition mechanism
 * - landing: frame-subtitle, copy above the shore rather than over the sick elder
 *
 * All five are labeled Historical Reconstruction - AI Generated via ai:true.
 * They set scenes, never serve as source evidence. The historical Codex,
 * Gerard, Qing album and Post sources remain; no Evidence Lab content changes.
 * Other files in the folder: the full Post painting stays in the Evidence Lab;
 * its detail is the source beside the sugar reconstruction. None was rejected.
 * Scene dates are illustrative, not claims that a camera recorded these events.
 */
(function(){
'use strict';
const T=window.BEHISTORICAL_TEACHING;
if(!T||!Array.isArray(T.slides))return;
const LOCAL='../assets/images/topics/4-3/';
const ai=(name,alt,extra)=>Object.assign({ai:true,url:LOCAL+encodeURIComponent(name),alt:alt},extra||{});
const find=phase=>T.slides.find(s=>s.phase===phase);
const note=(s,text)=>{if(s&&s.notes)s.notes.land=(s.notes.land||[]).concat([text]);};
// A short MUST LAND key to sit beside each picture note, so the teacher sees it at a glance.
const key=(s,text)=>{if(s&&s.notes)s.notes.keys=(s.notes.keys||[]).concat([text]);};

const question=find('question');
if(question){
  question.kind='frame-subtitle';
  question.subtitle='Some cargo was chosen. Some was not.';
  question.template={
    visual:ai('4.3 - The 2nd Arrival Columbus.JPG','Reconstruction of a Caribbean landing: sailing ships offshore, Europeans unloading barrels, a horse and pigs on the beach, Indigenous people watching, and a rat beside a barrel'),
    place:'top',
    line:'What caused the exchange, and what did it change on each side of the ocean?'
  };
  key(question,'AI scene: sets the stage, not evidence');
  note(question,'This is a reconstruction evoking the second voyage of 1493, not a record of a particular landing. Ships, livestock and cargo introduce the chosen and unchosen transfers. Do not read the invented markings on crates as historical text.');
}

const horses=find('horses');
if(horses){
  const stops=horses.template.stops;
  horses.kind='story-scene';
  horses.title='Plains peoples made horses their own';
  horses.template={
    visual:ai('4.3 - Horse Revolution.JPG','Reconstruction of three Indigenous riders on the Great Plains with a bison herd behind them under a cloudy sky',{fit:'contain'}),
    caption:'Great Plains · early 1700s',
    steps:stops.map((x,i)=>({label:x.date,text:'**'+x.place+'**: '+x.text,key:i===3}))
  };
  key(horses,'AI scene: not a documented person');
  note(horses,'The scene illustrates Indigenous adoption of horses, not a documented Comanche individual or a verified costume. Read the route beside it as the historical explanation; the image itself cannot establish dates or tribal identity.');
}

const sugar=find('sugar');
if(sugar){
  const source=sugar.template.visual;
  const sourceCaption=sugar.template.caption;
  sugar.title='Sugar remade whole societies';
  sugar.template.pictures=[
    {visual:ai('4.3 - Sugar and Enslaved Labor.JPG','Reconstruction of a Brazilian sugar plantation: enslaved African workers cut and carry cane, oxen draw a cane cart, and workers boil juice in a furnace house',{fit:'contain'}),caption:'Brazil · sugar, coerced labor, exports'},
    {visual:Object.assign({},source,{fit:'contain'}),caption:sourceCaption}
  ];
  delete sugar.template.visual;
  delete sugar.template.caption;
  key(sugar,'Top picture AI; Post is the real source');
  note(sugar,'The upper picture reconstructs the plantation mechanism; it is not evidence of a specific mill or its machinery. The lower image is Post\'s historical painting. Ask what the real source shows, and what a reconstruction merely imagines. The question about the workers and the building on the hill refers to Post, not the generated scene.');
}

const nutrition=find('nutrition');
if(nutrition){
  const steps=nutrition.template.steps;
  nutrition.kind='story-scene';
  nutrition.title='American crops helped feed more people';
  nutrition.footer='More crops and better nutrition helped populations grow, alongside other causes.';
  nutrition.template={
    side:'left',
    visual:ai('4.3 - American Crops Transform Asia.JPG','Reconstruction of a farming family harvesting sweet potatoes into baskets on a hillside in southern China, with village houses and misty hills behind them',{fit:'contain'}),
    caption:'Southern China · sweet potatoes as a fallback crop',
    steps:steps.map((x,i)=>({label:['New ground','More variety','A fallback','More survive'][i],text:x.text,key:x.key}))
  };
  // Keep the causal links explicit when the chain is placed beside a scene.
  nutrition.template.steps[0].text='New crops grow where older crops struggle: dry land, cold ground, poor soil and hillsides.';
  nutrition.template.steps[1].text='So farmers grow **more food and more kinds of food**.';
  nutrition.template.steps[2].text='That gives families something to eat when an older harvest fails.';
  nutrition.template.steps[3].text='Better nutrition helps **more people survive**, alongside other causes.';
  key(nutrition,'AI scene: not proof of the 1594 famine');
  note(nutrition,'The harvest is a reconstruction of sweet-potato farming, not proof of the 1594 famine or an exact place. The preceding Gerard and Qing sources supply historical evidence; use this picture to connect the crop to the people it fed. Maize, potatoes, cassava and sweet potatoes remain named in the preceding source discussion and the retelling slide.');
}

const close=find('close');
if(close){
  close.kind='frame-subtitle';
  close.subtitle='Americas: catastrophe and remade land. Afro-Eurasia: new staples and better nutrition.';
  close.template={
    visual:ai('4.3 - Landing Slide.jpg','Reconstruction of a Caribbean shore: a ship, a horse on a gangplank, pigs, rats, bundled sugarcane and a woman tending a sick elder beside maize'),
    place:'top',
    line:'The ships carried more than anyone meant them to.'
  };
  key(close,'AI scene: sets the landing, not evidence');
  note(close,'This reconstruction compresses years of change into one scene. It sets the landing, not evidence. Find one thing that crossed on purpose and one by accident. The picture stays inside the slide boundary; the library supplies the single reconstruction label. Hand off aloud: Who would do the work, and who would rule? Topic 4.4.');
}

const preflight=find('preflight');
if(preflight&&preflight.notes){
  preflight.notes.land=preflight.notes.land.map(x=>x==='Every picture in this deck is a real historical object. None is AI-generated.'
    ?'Five labeled AI reconstructions set scenes; the Codex, Post, Gerard and Qing images are historical sources. Evidence Lab pictures remain real historical objects.'
    :x);
}
})();

