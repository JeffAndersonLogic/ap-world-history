// lesson-8-9-renderer-config.js
// Topic 8.9 — Causation in the Age of the Cold War and Decolonization
// RUNTIME-AUTHORITATIVE: all College Board CED text below is verbatim from the
// AP World History: Modern CED and must not be paraphrased or truncated.
//
// Capstone topic: LO K only. NO thematic focus block — the CED lists none for 8.9.
// Five unit key concepts (KC-6.2, KC-6.2.II, KC-6.2.IV.C, KC-6.3, KC-6.3.I).
// The CED lists NO illustrative examples for Topic 8.9.
// NO BeInTheRoom module or scenario — capstone topics per CLAUDE.md capstone rule.
// 6-module capstone variant: First & 10, Content Delivery, Unit Review, Matrix,
// Skill Builder, Checkpoint 2. Deviation from 10-module standard noted here and
// in PROJECT_STATUS.md per GOAL instruction.

(() => {
  const lesson = window.BEHISTORICAL_LESSON;
  if (!lesson) return;

  lesson.meta.canvasSubmissionNote = 'Organize your thinking here — submit your final work in Canvas.';

  // ── RUNTIME-AUTHORITATIVE: verbatim CED text ─────────────────────────────────
  lesson.collegeBoardKeyConcepts = [
    {
      code: 'Unit 8: Learning Objective K',
      theme: 'Learning Objective',
      text: 'Explain the extent to which the effects of the Cold War were similar in the Eastern and Western Hemispheres.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2',
      theme: 'Historical Developments',
      text: 'Peoples and states around the world challenged the existing political and social order in varying ways, leading to unprecedented worldwide conflicts.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.II',
      theme: 'Historical Developments',
      text: 'Hopes for greater self-government were largely unfulfilled following World War I; however, in the years following World War II, increasing anti-imperialist sentiment contributed to the dissolution of empires and the restructuring of states.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.2.IV.C',
      theme: 'Historical Developments',
      text: 'The Cold War conflict extended beyond its basic ideological origins to have profound effects on economic, political, social, and cultural aspects of global events.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.3',
      theme: 'Historical Developments',
      text: 'The role of the state in the domestic economy varied, and new institutions of global association emerged and continued to develop throughout the century.',
      illustrativeExamples: []
    },
    {
      code: 'KC-6.3.I',
      theme: 'Historical Developments',
      text: 'States responded in a variety of ways to the economic challenges of the 20th century.',
      illustrativeExamples: []
    }
  ];

  lesson.first10 = {
    ...lesson.first10,
    title: "First & 10: The Cold War's Global Reach",
    embedUrl: 'first-and-10-topic-8-9-causation-capstone-capture.html?v=20260610',
    note: 'Read the First & 10 narrative, answer the three questions, build your AI Coach prompt, then return to the 8.9 lesson path.'
  };

  // ── Capture URLs — static hardcoded anchor tags only. Never JS-generated. ─────
  lesson.captureUrls = {
    first10: '',
    matrixEconomic: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.9+-+Causation+in+the+Cold+War+and+Decolonization&entry.1549761827=8.9-matrix-economic&entry.2107637366=Hemispheric+Matrix+Economic+Effects" target="_blank" rel="noopener">Submit to Form</a>',
    matrixPolitical: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.9+-+Causation+in+the+Cold+War+and+Decolonization&entry.1549761827=8.9-matrix-political&entry.2107637366=Hemispheric+Matrix+Political+Effects" target="_blank" rel="noopener">Submit to Form</a>',
    matrixSocial: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.9+-+Causation+in+the+Cold+War+and+Decolonization&entry.1549761827=8.9-matrix-social&entry.2107637366=Hemispheric+Matrix+Social+Effects" target="_blank" rel="noopener">Submit to Form</a>',
    matrixCultural: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.9+-+Causation+in+the+Cold+War+and+Decolonization&entry.1549761827=8.9-matrix-cultural&entry.2107637366=Hemispheric+Matrix+Cultural+Effects" target="_blank" rel="noopener">Submit to Form</a>',
    matrixSynthesis: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.9+-+Causation+in+the+Cold+War+and+Decolonization&entry.1549761827=8.9-matrix-synthesis&entry.2107637366=Hemispheric+Matrix+Synthesis+Thesis" target="_blank" rel="noopener">Submit to Form</a>',
    checkpoint2: '<a class="btn-capture" href="https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform?usp=pp_url&entry.125385659=Unit+8+-+Cold+War+and+Decolonization&entry.187055090=8.9+-+Causation+in+the+Cold+War+and+Decolonization&entry.1549761827=8.9-checkpoint-2&entry.2107637366=Checkpoint+2&entry.1963461515=Causation&entry.1963461515=Comparison&entry.1963461515=Argumentation" target="_blank" rel="noopener">Submit to Form</a>'
  };

  // ── Custom render function: Unit Review Cards (8.1–8.8) ──────────────────────
  window.renderUnitReview89 = function () {
    var cards = [
      {
        topic: '8.1', title: 'Setting the Stage',
        body: 'World War II left Europe devastated and two new superpowers dominant. The Truman Doctrine and Marshall Plan embedded the U.S. in Western European recovery; Soviet occupation embedded the USSR in Eastern Europe. Imperial exhaustion in Britain and France set the stage for decolonization across Asia and Africa.',
        evidence: 'Marshall Plan (Western Hemisphere); Soviet bloc formation / Warsaw Pact (Eastern Hemisphere)'
      },
      {
        topic: '8.2', title: 'The Cold War',
        body: 'Superpower rivalry produced competing alliance systems — NATO (1949) in the West, Warsaw Pact (1955) in Eastern Europe — and a nuclear arms race that shaped global politics for four decades. The Non-Aligned Movement (Bandung, 1955) offered newly independent states a third path, though most were still pressured to choose sides.',
        evidence: 'NATO / U.S. influence in Western Europe and Latin America (Western); Warsaw Pact / Soviet influence in Eastern Europe and Asia (Eastern); Bandung non-alignment primarily Eastern Hemisphere'
      },
      {
        topic: '8.3', title: 'Effects of the Cold War',
        body: 'Superpower competition moved the Cold War into the Global South through proxy wars — Korea (1950–53), Vietnam (1955–75), Angola (1975). CIA and KGB operations sponsored coups and counterinsurgencies. Nuclear deterrence (MAD) prevented direct superpower conflict while multiplying indirect conflicts worldwide.',
        evidence: 'Proxy wars in Korea, Vietnam, Angola (Eastern Hemisphere); CIA-backed coups in Guatemala (1954), Chile (1973) (Western Hemisphere)'
      },
      {
        topic: '8.4', title: 'Spread of Communism',
        body: "The Chinese Communist Revolution (1949) created a second communist power. Mao's Great Leap Forward (1958–62) killed an estimated 15–55 million through famine — the deadliest peacetime catastrophe of the 20th century. In the Western Hemisphere, Cuba's 1959 revolution brought communism 90 miles from Florida, triggering the Bay of Pigs and the Cuban Missile Crisis.",
        evidence: "Great Leap Forward / communist China (Eastern Hemisphere); Cuban Revolution / Castro's government (Western Hemisphere); redistribution movements (India, Egypt, Chile) span both"
      },
      {
        topic: '8.5', title: 'Decolonization After 1900',
        body: 'Anti-imperial movements accelerated after 1945, as Cold War competition gave newly independent states leverage: both superpowers courted them. The British Gold Coast became Ghana (1957) through nonviolent Positive Action; Algeria (1962) won independence through armed struggle after 130 years of French colonial rule.',
        evidence: 'Ghana, Algeria, India, Pakistan — all Eastern Hemisphere; Cold War leverage allowed new states to extract aid from both superpowers'
      },
      {
        topic: '8.6', title: 'Newly Independent States',
        body: 'Boundary redrawing produced massive displacement: the Partition of India (1947) created 10–15 million refugees; the creation of Israel (1948) displaced 700,000 Palestinians. New states adopted state-led development (India\'s five-year plans, Egypt\'s Aswan Dam). Former colonial subjects migrated to metropoles — Britain, France — reversing the colonial flow.',
        evidence: 'Indian Partition, Israeli independence (Eastern Hemisphere); state-led development in Africa and Asia (Eastern); migration to Western European metropoles (Eastern → Western movement)'
      },
      {
        topic: '8.7', title: 'Global Resistance to Power',
        body: 'KC-6.2.V identified three patterns: nonviolent resistance (Gandhi, MLK, Mandela), militarized states intensifying control (Pinochet\'s Chile, Franco\'s Spain, Amin\'s Uganda), and movements using violence against civilians. Cold War context shaped which resistance movements received superpower support and which were labeled communist threats.',
        evidence: 'MLK civil rights / anti-war movement (Western Hemisphere); ANC / apartheid resistance (Eastern Hemisphere); Pinochet\'s Chile — Cold War-backed coup (Western Hemisphere)'
      },
      {
        topic: '8.8', title: 'End of the Cold War',
        body: 'KC-6.2.IV.E identifies three causal strands: U.S. military and technological development (SDI creating pressure the Soviet economy could not match), the Soviet invasion of Afghanistan (signal effect to Eastern European populations), and public discontent and economic weakness (glasnost, perestroika, 1989 revolutions, Soviet dissolution 1991).',
        evidence: 'Soviet dissolution / Eastern European revolutions (Eastern Hemisphere); U.S. SDI / Reagan defense buildup (Western Hemisphere); Gorbachev\'s reforms operated inside the Eastern Hemisphere superpower'
      }
    ];

    var cardStyle = 'background:#2B2F31;border:1px solid #3E4447;border-radius:3px;padding:1.1rem;display:flex;flex-direction:column;gap:.5rem;';
    var topicStyle = 'font-family:\'Montserrat\',sans-serif;font-size:.6rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#C9A46A;';
    var titleStyle = 'font-family:\'Cinzel\',serif;font-size:.92rem;font-weight:700;color:#FFFDF7;margin:0;';
    var bodyStyle = 'font-family:\'Libre Baskerville\',Georgia,serif;font-size:.8rem;line-height:1.65;color:#D2B48C;margin:0;';
    var evidStyle = 'font-family:\'Montserrat\',sans-serif;font-size:.68rem;line-height:1.5;color:#5A5F5C;border-top:1px solid #3E4447;padding-top:.5rem;margin-top:.3rem;';

    return (
      '<div class="component-note"><strong>Unit Review: Topics 8.1–8.8</strong><br>Eight retrieval anchors for the Hemispheric Effects Matrix. Read each card and note which hemisphere(s) the evidence falls in before opening Module 04.</div>' +
      '<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:.9rem;margin-top:1rem;">' +
      cards.map(function (c) {
        return '<article style="' + cardStyle + '">' +
          '<div style="' + topicStyle + '">Topic ' + c.topic + '</div>' +
          '<h4 style="' + titleStyle + '">' + c.title + '</h4>' +
          '<p style="' + bodyStyle + '">' + c.body + '</p>' +
          '<div style="' + evidStyle + '"><strong style="color:#8C5A2B;">Matrix evidence:</strong> ' + c.evidence + '</div>' +
          '</article>';
      }).join('') +
      '</div>'
    );
  };

  // ── Custom render function: Hemispheric Effects Matrix ────────────────────────
  window.saveMatrixRow89 = function (rowId) {
    var fields = ['east', 'west', 'justify'];
    var saved = false;
    fields.forEach(function (f) {
      var el = document.getElementById('matrix-' + rowId + '-' + f);
      if (el) {
        var key = 'behistorical-draft-topic-8.9-matrix-' + rowId + '-' + f;
        localStorage.setItem(key, el.value || '');
        saved = true;
      }
    });
    var ratingEl = document.getElementById('matrix-' + rowId + '-rating');
    if (ratingEl) {
      localStorage.setItem('behistorical-draft-topic-8.9-matrix-' + rowId + '-rating', ratingEl.value || '');
    }
    var resultEl = document.getElementById('matrix-' + rowId + '-save-result');
    if (resultEl) resultEl.textContent = 'Row saved on this device.';
  };

  window.loadMatrixDrafts89 = function () {
    var rowIds = ['economic', 'political', 'social', 'cultural'];
    var fields = ['east', 'west', 'justify'];
    rowIds.forEach(function (rowId) {
      fields.forEach(function (f) {
        var el = document.getElementById('matrix-' + rowId + '-' + f);
        if (el) {
          var val = localStorage.getItem('behistorical-draft-topic-8.9-matrix-' + rowId + '-' + f);
          if (val) el.value = val;
        }
      });
      var ratingEl = document.getElementById('matrix-' + rowId + '-rating');
      if (ratingEl) {
        var rVal = localStorage.getItem('behistorical-draft-topic-8.9-matrix-' + rowId + '-rating');
        if (rVal) ratingEl.value = rVal;
      }
    });
    var synthEl = document.getElementById('matrix-synthesis');
    if (synthEl) {
      var sVal = localStorage.getItem('behistorical-draft-topic-8.9-matrix-synthesis');
      if (sVal) synthEl.value = sVal;
    }
  };

  window.saveMatrixSynthesis89 = function () {
    var el = document.getElementById('matrix-synthesis');
    if (el) localStorage.setItem('behistorical-draft-topic-8.9-matrix-synthesis', el.value || '');
    var resultEl = document.getElementById('matrix-synthesis-result');
    if (resultEl) resultEl.textContent = 'Synthesis saved on this device.';
  };

  window.renderMatrix89 = function () {
    var L = window.BEHISTORICAL_LESSON;
    var cu = (L && L.captureUrls) || {};

    var labelStyle = 'font-family:\'Montserrat\',sans-serif;font-size:.6rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#5A5F5C;margin-bottom:.35rem;';
    var hintStyle = 'font-family:\'Montserrat\',sans-serif;font-size:.68rem;line-height:1.5;color:#8C5A2B;font-style:italic;margin-bottom:.45rem;';
    var taStyle = 'width:100%;min-height:88px;background:#23272a;border:none;padding:.6rem .8rem;font-family:\'Libre Baskerville\',Georgia,serif;font-size:.8rem;color:#F5F0E7;line-height:1.7;resize:vertical;outline:none;box-sizing:border-box;';
    var synTaStyle = 'width:100%;min-height:120px;background:#23272a;border:none;padding:.75rem 1rem;font-family:\'Libre Baskerville\',Georgia,serif;font-size:.85rem;color:#F5F0E7;line-height:1.75;resize:vertical;outline:none;box-sizing:border-box;';
    var rowHeadStyle = 'background:#3E4447;padding:.6rem 1.1rem;font-family:\'Cinzel\',serif;font-size:.88rem;font-weight:700;color:#C9A46A;';
    var rowStyle = 'margin:1.25rem 0;border:1px solid #3E4447;border-radius:3px;overflow:hidden;';
    var footStyle = 'padding:.8rem 1rem;background:#1f2224;border-top:1px solid #3E4447;';

    function matrixRow(rowId, label, eastHint, westHint, captureKey) {
      var captureBtn = cu[captureKey] || '';
      return '<section style="' + rowStyle + '">' +
        '<div style="' + rowHeadStyle + '">' + label + '</div>' +
        '<div style="display:grid;grid-template-columns:1fr 1fr;">' +
          '<div style="padding:.9rem 1rem;border-right:1px solid #3E4447;">' +
            '<div style="' + labelStyle + '">Eastern Hemisphere</div>' +
            '<p style="' + hintStyle + '">' + eastHint + '</p>' +
            '<textarea id="matrix-' + rowId + '-east" class="response-area" placeholder="Eastern evidence from 8.1–8.8..." style="' + taStyle + '"></textarea>' +
          '</div>' +
          '<div style="padding:.9rem 1rem;">' +
            '<div style="' + labelStyle + '">Western Hemisphere</div>' +
            '<p style="' + hintStyle + '">' + westHint + '</p>' +
            '<textarea id="matrix-' + rowId + '-west" class="response-area" placeholder="Western evidence from 8.1–8.8..." style="' + taStyle + '"></textarea>' +
          '</div>' +
        '</div>' +
        '<div style="' + footStyle + '">' +
          '<div style="display:flex;flex-wrap:wrap;gap:.75rem;align-items:flex-start;margin-bottom:.7rem;">' +
            '<div>' +
              '<div style="' + labelStyle + '">Row Rating</div>' +
              '<select id="matrix-' + rowId + '-rating" style="font-family:\'Montserrat\',sans-serif;font-size:.75rem;background:#2B2F31;color:#F5F0E7;border:1px solid #5A5F5C;padding:.35rem .55rem;border-radius:2px;">' +
                '<option value="">Select...</option>' +
                '<option>Largely Similar</option>' +
                '<option>Mixed</option>' +
                '<option>Largely Different</option>' +
              '</select>' +
            '</div>' +
            '<div style="flex:1;min-width:200px;">' +
              '<div style="' + labelStyle + '">One-Sentence Justification</div>' +
              '<textarea id="matrix-' + rowId + '-justify" class="response-area" placeholder="Justify your rating in one sentence..." style="width:100%;min-height:50px;background:#23272a;border:none;padding:.5rem .7rem;font-family:\'Libre Baskerville\',Georgia,serif;font-size:.8rem;color:#F5F0E7;resize:vertical;outline:none;box-sizing:border-box;"></textarea>' +
            '</div>' +
          '</div>' +
          '<div style="display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;">' +
            '<button class="btn secondary" type="button" onclick="saveMatrixRow89(\'' + rowId + '\')">Save Row</button>' +
            captureBtn +
          '</div>' +
          '<div id="matrix-' + rowId + '-save-result" style="font-family:\'Montserrat\',sans-serif;font-size:.68rem;color:#C9A46A;min-height:.9rem;margin-top:.35rem;"></div>' +
        '</div>' +
      '</section>';
    }

    var html =
      '<div class="component-note"><strong>Hemispheric Effects Matrix — LO K</strong><br>Complete each row using evidence from Topics 8.1–8.8. Record specific examples for each hemisphere, rate the row, and justify in one sentence. After all four rows, draft your extent thesis in the Synthesis field. Use the Save Row button to preserve your work.</div>' +

      '<div style="background:#2B2F31;border-left:3px solid #C9A46A;padding:.9rem 1.1rem;margin:1rem 0;font-family:\'Montserrat\',sans-serif;font-size:.78rem;color:#D2B48C;line-height:1.65;">' +
        '<strong style="color:#C9A46A;">Row ratings:</strong> <em>Largely Similar</em> = effects in both hemispheres share the same mechanism or pattern. <em>Mixed</em> = some overlap but with meaningful differences. <em>Largely Different</em> = the effect category operated distinctly across hemispheres. Your row ratings build toward your thesis degree claim.' +
      '</div>' +

      matrixRow(
        'economic',
        'Economic Effects',
        'Hint: arms spending diverts civilian resources; state-led development (India, Egypt, Cuba); Great Leap Forward; Soviet command economy\'s structural weaknesses (8.4, 8.6, 8.8)',
        'Hint: Marshall Plan reconstruction aid; U.S. military-industrial complex; economic pressure on Latin American states via Cold War aid conditions; Cuban embargo (8.1, 8.3, 8.4)',
        'matrixEconomic'
      ) +

      matrixRow(
        'political',
        'Political Effects',
        'Hint: Warsaw Pact; Soviet-backed regimes in Eastern Europe, Asia, Africa; Brezhnev Doctrine; decolonization producing new states; 1989 revolutions (8.2, 8.3, 8.5, 8.6, 8.8)',
        'Hint: NATO; U.S.-backed regimes (Guatemala 1954, Chile 1973, Contras in Nicaragua); Cuba as counter-model; Cold War shaping U.S. domestic politics (8.1, 8.2, 8.3, 8.7)',
        'matrixPolitical'
      ) +

      matrixRow(
        'social',
        'Social Effects',
        'Hint: refugee crises from proxy wars (Korea, Vietnam, Angola, Afghanistan); displacement from decolonization; gender mobilization in communist states; propaganda and censorship (8.3, 8.5, 8.6, 8.7)',
        'Hint: civil rights and anti-war movements in the U.S. shaped by Cold War pressures; veterans\' experience of proxy wars; propaganda and McCarthyism; Latin American social displacement from U.S.-backed coups (8.3, 8.7)',
        'matrixSocial'
      ) +

      matrixRow(
        'cultural',
        'Cultural Effects',
        'Hint: Soviet socialist realism as a state-mandated aesthetic; space race as Eastern Hemisphere achievement (Sputnik, Gagarin); decolonization producing new national cultures; nationalist art and literature in newly independent states (8.2, 8.5)',
        'Hint: space race as Western Hemisphere competition (Apollo program); American consumer culture as soft power in Western Europe and Latin America; jazz diplomacy; Hollywood as cultural export (8.1, 8.2)',
        'matrixCultural'
      ) +

      '<section style="margin:1.5rem 0;border:2px solid #C9A46A;border-radius:3px;padding:1.25rem;">' +
        '<div style="font-family:\'Cinzel\',serif;font-size:1rem;font-weight:700;color:#C9A46A;margin-bottom:.7rem;">Synthesis: Evaluate the Extent</div>' +
        '<p style="font-family:\'Montserrat\',sans-serif;font-size:.78rem;line-height:1.6;color:#D2B48C;margin-bottom:.8rem;">Using your four row ratings, draft a thesis that answers LO K: "Evaluate the extent to which the effects of the Cold War were similar in the Eastern and Western Hemispheres." Your thesis must make a degree claim — to a great, moderate, or limited extent — and name the specific patterns that support it.</p>' +
        '<textarea id="matrix-synthesis" class="response-area" placeholder="Draft your extent thesis: \'To a [great/moderate/limited] extent, the effects of the Cold War were [similar/different] in the Eastern and Western Hemispheres because...'" style="' + synTaStyle + '"></textarea>' +
        '<div style="display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;margin-top:.75rem;">' +
          '<button class="btn secondary" type="button" onclick="saveMatrixSynthesis89()">Save Synthesis</button>' +
          (cu.matrixSynthesis || '') +
        '</div>' +
        '<div id="matrix-synthesis-result" style="font-family:\'Montserrat\',sans-serif;font-size:.68rem;color:#C9A46A;min-height:.9rem;margin-top:.4rem;"></div>' +
      '</section>';

    // Auto-load saved drafts after the HTML is inserted
    setTimeout(function () { if (typeof loadMatrixDrafts89 === 'function') loadMatrixDrafts89(); }, 50);

    return html;
  };

  // ── Custom 6-module capstone grid ─────────────────────────────────────────────
  // Deviation from 10-module standard per GOAL: no Map, no BeSurreal, no Evidence
  // Lab, no Primary Source, no Checkpoint 1, no BeInTheRoom (capstone rule).
  lesson.modules = [
    {
      id: 'first10',
      label: 'Module 01',
      title: 'First & 10 Reading',
      desc: "The Cold War's global reach — why superpower rivalry had economic, political, social, and cultural effects across both hemispheres.",
      img: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
      render: function () { return renderFirst10(); }
    },
    {
      id: 'contentdelivery',
      label: 'Module 02',
      title: 'Content Delivery',
      desc: 'Jump to the lecture cards: four effect categories, Eastern Hemisphere patterns, Western Hemisphere patterns, and how to write the extent thesis.',
      img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Thefalloftheberlinwall1989.JPG',
      jump: '#lecture'
    },
    {
      id: 'unitreview',
      label: 'Module 03',
      title: 'Unit Review: Topics 8.1–8.8',
      desc: 'Eight retrieval anchor cards — one per topic — naming the core development and the hemisphere-relevant evidence for the matrix.',
      img: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
      render: function () { return renderUnitReview89(); }
    },
    {
      id: 'matrix',
      label: 'Module 04',
      title: 'Hemispheric Effects Matrix',
      desc: 'Complete the four-row matrix (economic, political, social, cultural effects × Eastern/Western hemispheres), rate each row, then draft your extent thesis.',
      img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Thefalloftheberlinwall1989.JPG',
      render: function () { return renderMatrix89(); }
    },
    {
      id: 'skill',
      label: 'Module 05',
      title: 'AP Skill Builder',
      desc: 'LEQ construction: plan contextualization, thesis degree claim, two evidence paragraphs (one per hemisphere), and the complexity move.',
      img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Reagan_and_Gorbachev_1985.jpg',
      render: function () { return renderSkill(); }
    },
    {
      id: 'checkpoint2',
      label: 'Module 06',
      title: 'Checkpoint 2',
      desc: 'Full AP-style LEQ aligned to LO K: evaluate the extent to which Cold War effects were similar across both hemispheres.',
      img: 'https://commons.wikimedia.org/wiki/Special:FilePath/World_map_blank_without_borders.png',
      render: function () { return renderCheckpoint(lesson.checkpoints[0], 'checkpoint-two-response'); }
    }
  ];
})();
