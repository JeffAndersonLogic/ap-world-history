(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  if (!lesson.meta.canvasSubmissionNote) {
    lesson.meta.canvasSubmissionNote = 'Organize your thinking here, submit your final work in Canvas.';
  }
  lesson.collegeBoardKeyConcepts = [
    {
      "code": "KC-3.2",
      "theme": "Governance",
      "text": "State formation and development demonstrated continuity, innovation, and diversity in various regions.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-3.2.I",
      "theme": "Governance",
      "text": "As the Abbasid Caliphate fragmented, new Islamic political entities emerged, most of which were dominated by Turkic peoples. These states demonstrated continuity, innovation, and diversity.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-3.2.I.A",
      "theme": "Governance",
      "text": "Empires and states in Afro-Eurasia and the Americas demonstrated continuity, innovation, and diversity in the 13th century. This included the Song Dynasty of China, which utilized traditional methods of Confucianism and an imperial bureaucracy to maintain and justify its rule.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-3.2.I.B.i",
      "theme": "Governance",
      "text": "State formation and development demonstrated continuity, innovation, and diversity, including the new Hindu and Buddhist states that emerged in South and Southeast Asia.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-3.2.I.D.i",
      "theme": "Governance",
      "text": "In the Americas, as in Afro-Eurasia, state systems demonstrated continuity, innovation, and diversity, and expanded in scope and reach.",
      "illustrativeExamples": []
    },
    {
      "code": "KC-3.2.I.D.ii",
      "theme": "Governance",
      "text": "In Africa, as in Eurasia and the Americas, state systems demonstrated continuity, innovation, and diversity, and expanded in scope and reach.",
      "illustrativeExamples": []
    }
  ];

  lesson.skillBuilder = {
    title: 'AP Skill Builder: Build a Unit 1 Comparison',
    label: 'Comparison writing',
    intro: 'Comparison starts before you write. First choose two societies that can be compared through the SAME historical category. For Topic 1.7, state formation and state power should usually be your starting point; belief, trade, labor, and social organization can help explain why states developed differently.',
    steps: [
      { label: '1. Choose two societies', text: 'Use the chart below. Pick two societies or states that share at least one comparison category.' },
      { label: '2. Choose ONE category', text: '<div style="overflow-x:auto;margin-top:.6rem"><table style="width:100%;border-collapse:collapse;font-size:.88rem"><thead><tr><th style="padding:.5rem;border:1px solid #999;text-align:left">Unit 1 region</th><th style="padding:.5rem;border:1px solid #999;text-align:left">Societies / states you can use</th><th style="padding:.5rem;border:1px solid #999;text-align:left">Strong comparison categories</th><th style="padding:.5rem;border:1px solid #999;text-align:left">Evidence anchors</th></tr></thead><tbody><tr><td style="padding:.5rem;border:1px solid #999"><strong>East Asia</strong></td><td style="padding:.5rem;border:1px solid #999">Song China</td><td style="padding:.5rem;border:1px solid #999">State power; legitimacy; economy; social hierarchy</td><td style="padding:.5rem;border:1px solid #999">Bureaucracy, civil service exams, Confucianism, commercialization</td></tr><tr><td style="padding:.5rem;border:1px solid #999"><strong>Dar al-Islam</strong></td><td style="padding:.5rem;border:1px solid #999">Seljuk Empire; Mamluk Sultanate; Delhi Sultanate</td><td style="padding:.5rem;border:1px solid #999">State formation; belief; intellectual networks</td><td style="padding:.5rem;border:1px solid #999">Abbasid fragmentation, Turkic rule, Islam, scholars and Sufis</td></tr><tr><td style="padding:.5rem;border:1px solid #999"><strong>South &amp; Southeast Asia</strong></td><td style="padding:.5rem;border:1px solid #999">Vijayanagara; Khmer; Srivijaya; Majapahit</td><td style="padding:.5rem;border:1px solid #999">State formation; belief; trade; geography</td><td style="padding:.5rem;border:1px solid #999">Hindu/Buddhist legitimacy, temples, maritime trade, Strait of Malacca</td></tr><tr><td style="padding:.5rem;border:1px solid #999"><strong>Americas</strong></td><td style="padding:.5rem;border:1px solid #999">Maya; Mexica; Inca; Cahokia</td><td style="padding:.5rem;border:1px solid #999">State power; expansion; tribute/labor; infrastructure</td><td style="padding:.5rem;border:1px solid #999">City-states, tribute, mit’a, roads, quipu, monumental labor</td></tr><tr><td style="padding:.5rem;border:1px solid #999"><strong>Africa</strong></td><td style="padding:.5rem;border:1px solid #999">Great Zimbabwe; Ethiopia; Hausa kingdoms</td><td style="padding:.5rem;border:1px solid #999">State power; trade; belief; geography</td><td style="padding:.5rem;border:1px solid #999">Gold and Indian Ocean trade, Christianity, trans-Saharan trade, Islam</td></tr><tr><td style="padding:.5rem;border:1px solid #999"><strong>Europe</strong></td><td style="padding:.5rem;border:1px solid #999">Decentralized monarchies / feudal states</td><td style="padding:.5rem;border:1px solid #999">Political organization; belief; labor; social hierarchy</td><td style="padding:.5rem;border:1px solid #999">Feudalism, Church authority, manorialism, serfdom</td></tr></tbody></table></div>' },
      { label: '3. Gather evidence for BOTH', text: 'Write one specific piece of historical evidence for Society A and one for Society B from the same category. Do not compare a precise example on one side with a vague description on the other.' },
      { label: '4. Decide the relationship', text: 'Ask: What is meaningfully similar OR different about how the two societies handled this category? State the relationship directly.' },
      { label: '5. Explain why', text: 'The AP reasoning move is not finished until you explain why the similarity or difference existed. Consider geography, political structure, belief systems, trade connections, or available labor systems.' },
      { label: 'Response frame', text: 'Both ___ and ___ used ___ to ___. <strong>However</strong>, ___ while ___ <strong>because</strong> ___.' }
    ],
    prompt: 'Choose two Unit 1 societies from the chart and ONE shared category. Using specific evidence from both, write a 3–4 sentence comparison claim that explains one meaningful similarity OR difference and why that pattern existed.'
  };
})();
