(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  if (!lesson.meta.canvasSubmissionNote) {
    lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  }
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-3.2.I.D.i",
      "theme": "Governance",
      "text": "In the Americas, as in Afro-Eurasia, state systems demonstrated continuity, innovation, and diversity, and expanded in scope and reach.",
      "illustrativeExamples": [
        "Maya city-states",
        "Mexica",
        "Inca",
        "Chaco",
        "Mesa Verde",
        "Cahokia"
      ]
    }
  ];

  lesson.skillBuilder = {
    label: 'Claims and evidence practice',
    title: 'AP Skill Builder: Turn a Source Detail into Evidence',
    intro: 'Finding a detail in a source is not the same as using evidence. AP Skill 3.B asks you to identify a specific detail and explain HOW that detail supports a historical claim. Your explanation is the bridge between the evidence and the argument.',
    steps: [
      { label: '1. Identify the claim', text: 'State the argument you are trying to support. Example: American states developed systems for organizing labor, resources, or territory.' },
      { label: '2. Select one specific detail', text: '<strong>Mexica:</strong> tribute lists, provincial garrisons, chinampas.<br><strong>Inca:</strong> mit’a labor, Qhapaq Ñan roads, quipu records.<br><strong>Maya:</strong> independent city-states and monumental centers.<br><strong>Cahokia:</strong> Monks Mound and organized communal labor.' },
      { label: '3. Explain the connection', text: 'Finish the thought: “This supports the claim because…” Explain what the detail reveals about state capacity, control, legitimacy, or organization.' },
      { label: '4. Check yourself', text: 'If your sentence only describes the object or event, you have not finished. Evidence becomes useful when you explain what it proves.' },
      { label: 'Response frame', text: 'The detail ___ supports the claim that ___ <strong>because</strong> it shows ___.' }
    ],
    prompt: 'Choose one specific piece of evidence about Maya, Mexica, Inca, Chaco, Mesa Verde, or Cahokia. In two sentences, state a claim about American state building and explain how your evidence supports that claim.'
  };

  lesson.evidenceLab = {
    title: 'Evidence Lab: Six American State-Building Cases',
    task: 'The Americas did not have one model of state building. Choose TWO cards from different regions or societies. First record one concrete detail from each card. Then infer what each detail suggests about how people organized labor, territory, resources, information, or political authority.',
    prompt: 'Using two evidence cards from different American societies, make one claim about the diversity OR shared problems of state building in the Americas. Cite one specific detail from each card and explain how each detail supports your claim.'
  };

  lesson.images = [
    {
      title: 'Tenochtitlan in the Codex Mendoza',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Codex_Mendoza_folio_2r.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Codex_Mendoza_folio_2r.jpg',
      caption: 'Mexica evidence. The Codex Mendoza was created in the decades after Spanish conquest using Indigenous pictorial traditions to record Mexica history, rulers, and tribute information.',
      prompt: 'NOTICE one visual detail about the city, symbols, or political organization. What can you INFER about how the Mexica remembered and represented state power? What should you be cautious about because the codex was compiled after conquest?'
    },
    {
      title: 'Inca Quipu',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Quipu.png',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Quipu.png',
      caption: 'Inca administrative evidence. Quipu used cords, knots, and positional information to record quantities and other information used by administrators.',
      prompt: 'NOTICE the structure of the cords and knots. What can you INFER about the administrative problem this technology helped solve in a large empire? What claim about centralized control could it support?'
    },
    {
      title: 'Inca Road System',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Inca%20road%20system%20map-en.svg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Inca_road_system_map-en.svg',
      caption: 'Inca infrastructure evidence. A reference map of the Qhapaq Ñan road system across the Andes.',
      prompt: 'NOTICE the geographic scale and terrain covered by the network. What can you INFER about movement of officials, armies, messages, and labor? What does a road map not tell you about how ordinary people experienced imperial rule?'
    },
    {
      title: 'Tikal Great Plaza',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Tikal-Plaza-And-North-Acropolis.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tikal-Plaza-And-North-Acropolis.jpg',
      caption: 'Maya evidence. Tikal was one of many powerful Maya city-states; its monumental center reflects a political system organized around separate urban dynasties rather than one unified Maya empire.',
      prompt: 'NOTICE one feature of the monumental center. What can you INFER about labor, ritual, or dynastic authority? How could this evidence support a claim that Maya political organization differed from the Inca?'
    },
    {
      title: 'Pueblo Bonito, Chaco Canyon',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pueblo_Bonito_-_Chaco_Canyon_%28IMG_0738%29.jpg',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pueblo_Bonito_-_Chaco_Canyon_(IMG_0738).jpg',
      caption: 'North American evidence. Pueblo Bonito was a large planned complex in Chaco Canyon connected to a wider regional system of roads, settlements, and exchange.',
      prompt: 'NOTICE one detail about scale or construction. What can you INFER about coordination and regional organization? What would you need additional evidence to determine about political hierarchy?'
    },
    {
      title: 'Monks Mound at Cahokia',
      url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Monks%20Mound%20in%20July.JPG',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Monks_Mound_in_July.JPG',
      caption: 'Mississippian evidence. Monks Mound is the largest earthen mound at Cahokia, a major urban center near the Mississippi River.',
      prompt: 'NOTICE the scale of the earthwork. What can you INFER about labor mobilization and authority in Cahokia? How does this broaden the evidence for complex state systems beyond Mesoamerica and the Andes?'
    }
  ];
})();
