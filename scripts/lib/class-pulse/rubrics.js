'use strict';
// Class Pulse rubrics, one per checkpoint, kept here rather than in the lesson data so that
// choosing a checkpoint for the teacher view never changes what students see in the lesson.
// The title, prompt, learning targets and success criteria are read from the lesson itself
// (skilllens-pilot-contract.js); this file adds only how a response is rated.
//
// A live pilot rubric must cite the CED: `ced` names the topic in scripts/lib/ced-source/,
// and every criterion names the Key Concept or suggested skill it rates. Under the course's
// CED rule the source file decides, and scripts/test/class-pulse-rubrics.test.js fails when a
// citation does not match it. Illustrative examples named in guidance are optional, as the
// CED says; accept other historically supported examples.
const CED='https://apcentral.collegeboard.org/media/pdf/ap-world-history-modern-course-and-exam-description-effective-fall-2026.pdf';
module.exports={
 // The invented practice class. Unit 2 has no CED source file yet, so this rubric carries no
 // `ced` citation and may not be used for a live class.
 '2.3-checkpoint-1':{
  lessonFiles:['assets/data/lesson-2-3-indian-ocean.js','assets/data/lesson-2-3-renderer-config.js'],
  checkpointIndex:0,checkpointTitle:'Checkpoint 1: Environment and Maritime Technology',targets:[0],
  display:{topic:'2.3 · Indian Ocean Exchange',checkpoint:'1 · Independent response',eyebrow:'TOPIC 2.3 · CHECKPOINT 1',sourceNote:'Source: College Board CED, effective Fall 2026, Topic 2.3, pp. 57–58.'},
  assessment:{
   version:'2.3-checkpoint1-v1',source:CED,sourcePages:'57–58',
   criteria:[
    {id:'monsoons',label:'Explain the seasonal winds',description:'Explain how merchants used predictable seasonal changes in monsoon winds to plan voyages.',guidance:'Accept varied wording for seasonal reversal and timing outbound or return journeys. Rain alone is not the maritime mechanism; winds do not blow one way all year.',action:'Sketch an outward voyage and a return voyage. Ask students to explain when a merchant should leave and why.',essential:true},
    {id:'technology',label:'Explain two maritime technologies',description:'Use two historically appropriate maritime technologies and explain what each enabled sailors or merchants to do.',guidance:'Examples include a compass for direction, an astrolabe for estimating latitude, and larger ships for carrying more cargo. Accept other historically supported examples. Naming two tools without explaining their functions is partial evidence.',action:'Compare a list of tools with an explanation of their functions. Have students add a function to each of two technologies.',essential:true},
    {id:'connection',label:'Connect the causes to trade growth',description:'Connect wind knowledge and the technologies to more reliable voyages, increased trade volume, or a wider geographic range of exchange.',guidance:'Look for a causal mechanism, not just a claim that trade increased. Preserve a correct causal link even if another criterion has a gap; contradictions affecting this link need review.',action:'Model a because → enabled → trade grew explanation, then ask students to revise one causal link in their response.',essential:true}
   ]
  }
 },
 // The live pilot, chosen by Jeff on 2026-10-28. The three criteria follow the checkpoint's own
 // three focus bullets, which students saw, and the CED for Topic 3.2 (p. 70): Learning
 // Objective B, Key Concepts KC-4.3.I.A and KC-4.3.I.D, and suggested skill 4.A.
 '3.2-checkpoint-2':{
  lessonFiles:['assets/data/lesson-3-2-empires-administration.js','assets/data/lesson-3-2-renderer-config.js'],
  checkpointIndex:1,checkpointTitle:'Checkpoint 2: Symbols and Revenue',targets:[1,2],
  ced:{unit:'3',topic:'3.2',page:70,learningObjective:'Unit 3: Learning Objective B'},
  display:{topic:'3.2 · Empires: Administration',checkpoint:'2 · Symbols and Revenue',eyebrow:'TOPIC 3.2 · CHECKPOINT 2',sourceNote:'Source: College Board CED, effective Fall 2026, Topic 3.2, p. 70: Learning Objective B, Key Concepts KC-4.3.I.A and KC-4.3.I.D, suggested skill 4.A Contextualization.'},
  assessment:{
   version:'3.2-checkpoint2-v1',source:CED,sourcePages:'70',
   criteria:[
    {id:'legitimacy',ced:'KC-4.3.I.A',label:'Explain a symbol of rightful rule',
     description:'Name one religious idea, work of art, or monumental building and the ruler or empire that used it, and explain how it made that ruler\'s power look rightful.',
     guidance:'The CED\'s optional examples include European notions of divine right, the Songhai promotion of Islam, the Mexica practice of human sacrifice, Qing imperial portraits, the Incan sun temple of Cuzco, Mughal mausolea and mosques, and palaces such as Versailles. Accept other historically supported examples. Naming an example, or calling a building large or beautiful, without saying how it made the ruler look rightful is partial evidence.',
     action:'Ask what message the example sent, and to whom. Have students finish the sentence: this made people see the ruler as rightful because…',essential:true},
    {id:'revenue',ced:'KC-4.3.I.D',label:'Explain a tribute or tax system',
     description:'Name one tribute or tax-collection system and the empire that used it, and explain how the revenue paid for state power or expansion.',
     guidance:'The CED\'s optional examples are Mughal zamindar tax collection, Ottoman tax farming, Mexica tribute lists, and the Ming practice of collecting taxes in hard currency. Accept other historically supported systems. Tax farming means granting or selling the right to collect taxes, not farming land. Describing the system without connecting the revenue to armies, officials, building or expansion is partial evidence.',
     action:'Trace the money: who paid, who collected, and what the ruler paid for with it. Have students add the missing last link.',essential:true},
    {id:'context',ced:'skill:4.A',label:'Describe each ruler\'s situation',
     description:'For each method, describe the context, the situation the ruler was in, and connect it to why the method strengthened him.',
     guidance:'This is the CED\'s suggested skill for Topic 3.2, 4.A Contextualization. Situations include ruling many peoples of other faiths, a dynasty that had recently taken power, or paying for a large army and court. Context for only one of the two methods is partial evidence. A date alone, or a phrase such as long ago, is not context.',
     action:'Ask what the ruler was worried about. Have students add one sentence of situation before each method and one sentence connecting the two.',essential:true}
   ]
  }
 }
};
