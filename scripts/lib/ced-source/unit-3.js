'use strict';

/**
 * The College Board's own words for Unit 3, copied from the CED itself.
 *
 * Source: AP World History: Modern Course and Exam Description, effective
 * Fall 2026, Course Framework V.1, pages 67 to 72:
 * https://apcentral.collegeboard.org/media/pdf/ap-world-history-modern-course-and-exam-description-effective-fall-2026.pdf
 * Transcribed 2026-10-06 from the PDF, not from any file in this repository.
 *
 * THIS FILE IS WHERE A UNIT 3 STORY STARTS. Not the lesson data, not the
 * story map, not ced-unit3-contract.js, not an audit and not memory: every
 * one of those is a copy, and on 2026-10-06 three of them disagreed with the
 * CED (the story map gave 3.2 the wrong reasoning process, and the contract
 * and story map both dropped a named example). When a copy disagrees with
 * this file, the copy is wrong. scripts/test/ced-source.test.js fails the
 * push when the lesson data, the contract, the story map or a story draft
 * drifts from it.
 *
 * Edit this file only to match a new CED, and say which edition in the
 * header. Never edit it to match the course.
 *
 * Illustrative examples are optional. The CED says they "are provided as
 * additional resources, should teachers choose to use them ... and do not in
 * any way constitute additional, preferred, or required information.
 * Historical development statements comprise the knowledge required to
 * demonstrate mastery of the learning objective." (Course Framework p. 85.)
 */

module.exports = {
  edition: 'AP World History: Modern CED, effective Fall 2026',
  url: 'https://apcentral.collegeboard.org/media/pdf/ap-world-history-modern-course-and-exam-description-effective-fall-2026.pdf',
  unit: '3',
  title: 'Land-Based Empires',
  topics: {
    '3.1': {
      title: 'Empires Expand',
      page: 69,
      reasoningProcess: 'Causation',
      suggestedSkill: { code: '1.B', name: 'Developments and Processes', text: 'Explain a historical concept, development, or process.' },
      thematicFocus: 'Governance (GOV)',
      learningObjective: { code: 'Unit 3: Learning Objective A', text: 'Explain how and why various land-based empires developed and expanded from 1450 to 1750.' },
      keyConcepts: [
        { code: 'KC-4.3.II', text: 'Imperial expansion relied on the increased use of gunpowder, cannons, and armed trade to establish large empires in both hemispheres.' },
        { code: 'KC-4.3.II.B', text: 'Land empires included the Manchu in Central and East Asia; the Mughal in South and Central Asia; the Ottoman in Southern Europe, the Middle East, and North Africa; and the Safavids in the Middle East.' },
        { code: 'KC-4.3.III.i', text: 'Political and religious disputes led to rivalries and conflict between states.' }
      ],
      illustrativeExamples: {
        'State rivalries': ['Safavid–Mughal conflict', 'Songhai Empire’s conflict with Morocco']
      }
    },
    '3.2': {
      title: 'Empires: Administration',
      page: 70,
      reasoningProcess: 'Comparison',
      suggestedSkill: { code: '4.A', name: 'Contextualization', text: 'Identify and describe a historical context for a specific historical development or process.' },
      thematicFocus: 'Governance (GOV)',
      learningObjective: { code: 'Unit 3: Learning Objective B', text: 'Explain how rulers used a variety of methods to legitimize and consolidate their power in land-based empires from 1450 to 1750.' },
      keyConcepts: [
        { code: 'KC-4.3.I.C', text: 'Recruitment and use of bureaucratic elites, as well as the development of military professionals, became more common among rulers who wanted to maintain centralized control over their populations and resources.' },
        { code: 'KC-4.3.I.A', text: 'Rulers continued to use religious ideas, art, and monumental architecture to legitimize their rule.' },
        { code: 'KC-4.3.I.D', text: 'Rulers used tribute collection, tax farming, and innovative tax-collection systems to generate revenue in order to forward state power and expansion.' }
      ],
      illustrativeExamples: {
        'Bureaucratic elites or military professionals': ['Ottoman devshirme', 'Salaried samurai'],
        'Religious ideas': ['Mexica practice of human sacrifice', 'European notions of divine right', 'Songhai promotion of Islam'],
        'Art and monumental architecture': ['Qing imperial portraits', 'Incan sun temple of Cuzco', 'Mughal mausolea and mosques', 'European palaces, such as Versailles'],
        'Tax-collection systems': ['Mughal zamindar tax collection', 'Ottoman tax farming', 'Mexica tribute lists', 'Ming practice of collecting taxes in hard currency']
      },
      // Page 68. Optional, like everything on that page, and recorded because
      // it is the College Board's own idea of how to teach this objective.
      sampleActivity: 'Close Reading: Select short excerpts describing the rulers of the Ottoman and Songhay empires from the Description of Timbuktu by Leo Africanus (1526) and The Turkish Letters by Ogier Ghiselin de Busbecq (1555–1562). Ask students to read the sources and identify and describe the historical context for the developments described. Have students reread each text and highlight similarities in methods the rulers used to legitimize and consolidate power.'
    },
    '3.3': {
      title: 'Empires: Belief Systems',
      page: 71,
      reasoningProcess: 'Continuity and Change',
      suggestedSkill: { code: '2.B', name: 'Sourcing and Situation', text: 'Explain the point of view, purpose, historical situation, and/or audience of a source.' },
      thematicFocus: 'Cultural Developments and Interactions (CDI)',
      learningObjective: { code: 'Unit 3: Learning Objective C', text: 'Explain continuity and change within the various belief systems during the period from 1450 to 1750.' },
      keyConcepts: [
        { code: 'KC-4.1.VI.i', text: 'The Protestant Reformation marked a break with existing Christian traditions and both the Protestant and Catholic reformations contributed to the growth of Christianity.' },
        { code: 'KC-4.1.VI.ii', text: 'Political rivalries between the Ottoman and Safavid empires intensified the split within Islam between Sunni and Shi’a.' },
        { code: 'KC-4.1.VI.iii', text: 'Sikhism developed in South Asia in a context of interactions between Hinduism and Islam.' }
      ],
      illustrativeExamples: {}
    },
    '3.4': {
      title: 'Comparison in Land-Based Empires',
      page: 72,
      reasoningProcess: 'Comparison',
      suggestedSkill: { code: '6.B', name: 'Argumentation', text: 'Support an argument using specific and relevant evidence.' },
      thematicFocus: null,
      learningObjective: { code: 'Unit 3: Learning Objective D', text: 'Compare the methods by which various empires increased their influence from 1450 to 1750.' },
      // The 3.4 page lists these as "Review: Unit 3 Key Concepts".
      keyConcepts: [
        { code: 'KC-4.1', text: 'The interconnection of the Eastern and Western Hemispheres made possible by transoceanic voyaging, transformed trade and had a significant social impact on the world.' },
        { code: 'KC-4.1.VI', text: 'In some cases, the increase and intensification of interactions between newly connected hemispheres expanded the reach and furthered development of existing religions, and contributed to religious conflicts and the development of syncretic belief systems and practices.' },
        { code: 'KC-4.3', text: 'Empires achieved increased scope and influence around the world, shaping and being shaped by the diverse populations they incorporated.' },
        { code: 'KC-4.3.II', text: 'Imperial expansion relied on the increased use of gunpowder, cannons, and armed trade to establish large empires in both hemispheres.' },
        { code: 'KC-4.3.II.B', text: 'Land empires included the Manchu in Central and East Asia; Mughal in South and Central Asia; Ottoman in Southern Europe, the Middle East, and North Africa; and the Safavids in the Middle East.' },
        { code: 'KC-4.3.III.i', text: 'Political and religious disputes led to rivalries and conflict between states.' }
      ],
      illustrativeExamples: {}
    }
  }
};
