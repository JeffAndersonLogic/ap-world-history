/* =============================================================================
   BEHISTORICAL CURRENT EVENTS, LESSON RENDERER
   File: assets/js/behistorical-ce-lesson-renderer.js

   Reads window.CE_LESSON and writes the whole lesson page. Mirrors
   assets/js/behistorical-topic-renderer-v1.js in the AP World repo: same page
   flow, same function names (openModule, openLectureModal, saveDraft,
   selfCheck), retargeted at steps instead of the ten fixed AP modules.

   Nothing in here is lesson-specific. Add a lesson by writing a data file and
   a renderer-config file, then pointing a shell at them.

   Load order: form config, lesson data, renderer config, this file.
   ========================================================================== */
(function () {
  'use strict';

  var L = window.CE_LESSON;
  if (!L) return;

  function byId(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  // Authored prose carries inline <strong>/<em>, so narrative is trusted and
  // passed through. Only student-supplied and attribute values get escaped.
  function trust(s) { return String(s == null ? '' : s); }

  var STEPS = {};
  (L.steps || []).forEach(function (s) { STEPS[s.id] = s; });

  /* ── Narrative blocks ──────────────────────────────────────────────────── */

  function renderBlocks(blocks) {
    return (blocks || []).map(function (b) {
      switch (b.type) {
        case 'h4':
          return '<h4>' + trust(b.text) + '</h4>';
        case 'quote':
          return '<blockquote>' + trust(b.text) + '</blockquote>';
        case 'ul':
          return '<ul>' + (b.items || []).map(function (i) {
            return '<li>' + trust(i) + '</li>';
          }).join('') + '</ul>';
        case 'note':
          return '<div class="component-note">' +
            (b.title ? '<h4>' + trust(b.title) + '</h4>' : '') +
            '<p>' + trust(b.text) + '</p></div>';
        case 'todo':
          return '<div class="teacher-todo" role="note">' +
            '<h4>Unresolved, teacher action required</h4>' +
            (b.title ? '<p><strong>' + trust(b.title) + '</strong></p>' : '') +
            '<p>' + trust(b.text) + '</p></div>';
        case 'breakpoint':
          return '<div class="breakpoint">' +
            (b.tag ? '<span class="breakpoint-tag">' + trust(b.tag) + '</span>' : '') +
            '<h4>' + trust(b.title) + '</h4>' +
            renderBlocks(b.blocks) + '</div>';
        default:
          return '<p>' + trust(b.text) + '</p>';
      }
    }).join('');
  }

  /* ── Assessments ───────────────────────────────────────────────────────── */

  function renderShortAnswer(step, sa) {
    var id = step.id + '-sa';
    return '<div class="prompt-box">' +
      '<h3>' + trust(sa.label || 'Short answer') + '</h3>' +
      '<p>' + trust(sa.prompt) + '</p>' +
      '<textarea class="response-area" id="' + id + '"' +
        ' data-terms="' + esc((sa.terms || []).join('|')) + '"' +
        ' placeholder="Type your response here..."></textarea>' +
      '<div class="tool-row">' +
        '<button class="btn" type="button" onclick="saveDraft(\'' + id + '\')">Save Draft</button>' +
        '<button class="btn btn-quiet" type="button" onclick="copyResponse(\'' + id + '\')">Copy Response</button>' +
        (sa.terms && sa.terms.length
          ? '<button class="btn btn-quiet" type="button" onclick="selfCheck(\'' + id + '\')">Run Self-Check</button>'
          : '') +
      '</div>' +
      '<div id="' + id + '-result" class="check-result"></div>' +
      '</div>';
  }

  function renderMcqs(step, mcqs) {
    return mcqs.map(function (q, qi) {
      var name = step.id + '-mcq-' + qi;
      return '<div class="mcq">' +
        (q.stimulus
          ? '<p class="mcq-stimulus">' + trust(q.stimulus) + '</p>'
          : '') +
        '<p class="mcq-stem">' + (mcqs.length > 1 ? (qi + 1) + '. ' : '') + trust(q.stem) + '</p>' +
        (q.options || []).map(function (o, oi) {
          return '<label class="mcq-option" data-name="' + name + '" data-correct="' +
            (o.correct ? '1' : '0') + '">' +
            '<input type="radio" name="' + name + '" value="' + oi + '">' +
            '<span>' + String.fromCharCode(65 + oi) + '. ' + trust(o.text) + '</span></label>';
        }).join('') +
        '<div class="tool-row">' +
          '<button class="btn btn-quiet" type="button" onclick="checkMcq(\'' + name + '\')">Check Answer</button>' +
        '</div>' +
        '<div class="mcq-result" id="' + name + '-result" data-why="' + esc(q.why || '') + '"></div>' +
        '</div>';
    }).join('');
  }

  function renderShowAssume(step, sa) {
    var showId = step.id + '-shows', assumeId = step.id + '-assumes';
    return '<div class="showassume">' +
      '<div class="showassume-col">' +
        '<h4>' + trust(sa.showLabel) + '</h4>' +
        '<p>' + trust(sa.showHint) + '</p>' +
        '<textarea class="response-area" id="' + showId + '" placeholder="One per line..."></textarea>' +
        '<div class="tool-row"><button class="btn btn-quiet" type="button" onclick="saveDraft(\'' + showId + '\')">Save</button></div>' +
        '<div id="' + showId + '-result" class="check-result"></div>' +
      '</div>' +
      '<div class="showassume-col">' +
        '<h4>' + trust(sa.assumeLabel) + '</h4>' +
        '<p>' + trust(sa.assumeHint) + '</p>' +
        '<textarea class="response-area" id="' + assumeId + '" placeholder="One per line..."></textarea>' +
        '<div class="tool-row"><button class="btn btn-quiet" type="button" onclick="saveDraft(\'' + assumeId + '\')">Save</button></div>' +
        '<div id="' + assumeId + '-result" class="check-result"></div>' +
      '</div>' +
      '</div>';
  }

  function renderAssessment(step) {
    var a = step.assessment;
    if (!a) return '';
    var out = '';
    if (a.showAssume) out += renderShowAssume(step, a.showAssume);
    if (a.shortAnswer) out += renderShortAnswer(step, a.shortAnswer);
    if (a.mcqs) out += renderMcqs(step, a.mcqs);
    if (a.funFacts) {
      out += '<div class="funfacts"><h4>Fun facts</h4><ul>' +
        a.funFacts.map(function (f) { return '<li>' + trust(f) + '</li>'; }).join('') +
        '</ul></div>';
    }
    if (a.requirements) {
      out += '<div class="requirements">' + a.requirements.map(function (r, i) {
        return '<div class="requirement">' +
          '<span class="requirement-num">' + (i + 1) + '</span>' +
          '<div><strong>' + trust(r.title) + '</strong>' + trust(r.text) + '</div></div>';
      }).join('') + '</div>';
      if (a.length) {
        out += '<div class="component-note"><h4>Length</h4><p>' + trust(a.length) + '</p></div>';
      }
    }
    if (a.topBand) {
      out += '<div class="top-band"><h4>What earns the top band</h4><ul>' +
        a.topBand.map(function (t) { return '<li>' + trust(t) + '</li>'; }).join('') +
        '</ul></div>';
    }
    return out;
  }

  /* ── Capture points ────────────────────────────────────────────────────── */

  function renderCapture(step) {
    var c = step.capture;
    if (!c) {
      return step.noCapture
        ? '<div class="component-note"><h4>No capture point on this step</h4><p>' +
            trust(step.noCapture) + '</p></div>'
        : '';
    }

    var body = (c.questions || []).map(function (q) {
      var id = step.id + '-c-' + q.id;
      if (q.type === 'likert') {
        var row = [1, 2, 3, 4, 5].map(function (n) {
          return '<label><input type="radio" name="' + id + '" value="' + n +
            '"><span>' + n + '</span></label>';
        }).join('');
        return '<div class="capture-q"><p><strong>' + trust(q.label) + '</strong></p>' +
          '<div class="likert">' + row + '</div>' +
          '<p class="check-result">1 = strongly disagree, 5 = strongly agree.' +
          (q.note ? ' ' + trust(q.note) : '') + '</p></div>';
      }
      if (q.type === 'mcq') {
        return '<div class="capture-q"><p><strong>' + trust(q.label) + '</strong> ' +
          'Answer it above, then it travels with this capture.</p></div>';
      }
      return '<div class="capture-q"><p><strong>' + trust(q.label) + '</strong></p>' +
        '<textarea class="response-area' + (q.type === 'short' ? ' response-short' : '') +
        '" id="' + id + '"' +
        (q.terms ? ' data-terms="' + esc(q.terms.join('|')) + '"' : '') +
        ' placeholder="Type your response here..."></textarea></div>';
    }).join('');

    var url = (window.CE_FORM && CE_FORM.prefill) ? CE_FORM.prefill({
      event: L.captureEvent || 'lesson-01',
      step: c.promptId.replace(/^.*step-/, ''),
      promptId: c.promptId,
      responseType: c.responseType,
      skillFocus: c.skills || []
    }) : '#';

    var hasTerms = (c.questions || []).some(function (q) { return q.terms; });

    return '<div class="prompt-box">' +
      '<h3>Capture Point ' + c.n + ' of 7</h3>' +
      (c.intro ? '<p>' + trust(c.intro) + '</p>' : '') +
      body +
      '<div class="tool-row">' +
        '<button class="btn" type="button" onclick="saveStepDrafts(\'' + step.id + '\')">Save Draft</button>' +
        '<button class="btn btn-quiet" type="button" onclick="copyStepResponses(\'' + step.id + '\')">Copy All</button>' +
        (hasTerms
          ? '<button class="btn btn-quiet" type="button" onclick="selfCheckStep(\'' + step.id + '\')">Run Self-Check</button>'
          : '') +
        '<a class="btn-capture" href="' + esc(url) + '" target="_blank" rel="noopener"' +
          ' onclick="copyStepResponses(\'' + step.id + '\')">Submit to Form</a>' +
      '</div>' +
      '<div id="' + step.id + '-capture-result" class="check-result"></div>' +
      (c.toCanvas
        ? '<div class="component-note"><h4>Final submission</h4><p>' +
            trust(L.meta.canvasNote) + '</p></div>'
        : '') +
      '</div>';
  }

  /* ── Coach bridge ──────────────────────────────────────────────────────── */

  function renderCoach(step) {
    if (!step.coach) return '';
    var set = (L.coachSets || {})[step.coach];
    if (!set) return '';
    var id = step.id + '-coach';
    var url = (window.CE_FORM && CE_FORM.coachURL) || L.meta.coachUrl || '#';

    return '<div class="magicschool-bridge">' +
      '<span class="bridge-label">AI Coach touchpoint, Set ' + esc(step.coach) + '</span>' +
      '<h3>Reverse History Coach</h3>' +
      '<p>' + trust(set.goal) + '</p>' +
      '<div class="copy-template"><p class="copy-template-text" id="' + id + '-text">' +
        trust(set.opening) + '</p></div>' +
      '<div class="tool-row">' +
        '<button class="btn btn-quiet" type="button" onclick="copyCoachOpening(\'' + id + '\')">Copy Opening</button>' +
        '<a class="btn" href="' + esc(url) + '" target="_blank" rel="noopener">Open MagicSchool</a>' +
      '</div>' +
      '<div id="' + id + '-result" class="check-result"></div>' +
      '<p class="canvas-note">The coach will not write any part of your response for you. ' +
        'It asks questions. That is the whole design.</p>' +
      '<p class="canvas-note">' + trust(L.meta.counselorNote) + '</p>' +
      '</div>';
  }

  /* ── Modules ───────────────────────────────────────────────────────────── */

  function artPath(step) {
    return step.art
      ? '../assets/images/lesson-art/lesson-01/' + step.art + '.svg'
      : '';
  }

  function defaultModules() {
    var mods = (L.steps || []).map(function (step, i) {
      return {
        id: step.id,
        label: step.label,
        title: step.title,
        desc: step.cardDesc,
        art: artPath(step),
        tag: step.capture ? 'Capture ' + step.capture.n : (step.noCapture ? 'No capture' : ''),
        open: i === 0,
        render: function () { return renderStep(step); }
      };
    });

    mods.push({
      id: 'sources',
      label: 'Module 09',
      title: 'Source Library',
      desc: 'Everything you may cite, including the ones that disagree with you.',
      art: '../assets/images/lesson-art/lesson-01/sources.svg',
      render: renderSources
    });

    mods.push({
      id: 'contentdelivery',
      label: 'Module 10',
      title: 'Content Delivery',
      desc: 'Jump down to the projection cards for the six links.',
      art: '../assets/images/lesson-art/lesson-01/delivery.svg',
      jump: '#lecture'
    });

    return mods;
  }

  var MODULES = [];

  function renderModuleGrid() {
    MODULES = (L.modules && L.modules.length) ? L.modules : defaultModules();
    byId('module-grid').innerHTML = MODULES.map(function (m, i) {
      var action = m.jump
        ? 'jumpToSection(\'' + m.jump + '\')'
        : 'openModule(\'' + m.id + '\')';
      return '<button class="module-card" type="button" data-open="' +
          (m.open ? 'true' : 'false') + '" onclick="' + action + '">' +
        (m.tag ? '<span class="module-step-tag">' + esc(m.tag) + '</span>' : '') +
        (m.art
          ? '<img class="card-art" src="' + esc(m.art) + '" alt="" aria-hidden="true">'
          : '') +
        '<span class="module-card-body">' +
          '<span class="module-label">' + esc(m.label) + '</span>' +
          '<h3>' + esc(m.title) + '</h3>' +
          '<p>' + esc(m.desc) + '</p>' +
        '</span></button>';
    }).join('');
  }

  function renderStep(step) {
    return (step.question
        ? '<p class="trace-question">' + trust(step.question) + '</p>'
        : '') +
      (step.video
        ? '<div class="launch-video">' +
            '<span class="bridge-label">' + trust(step.video.label) + '</span>' +
            '<p>' + trust(step.video.note) + '</p>' +
          '</div>'
        : '') +
      '<div class="step-narrative">' + renderBlocks(step.narrative) + '</div>' +
      renderAssessment(step) +
      renderCapture(step) +
      renderCoach(step);
  }

  function renderSources() {
    return '<div class="step-narrative"><p>Step 8 requires two sources, and one of them has to ' +
      'disagree with you. The orange-edged entries below are the ones that cut against the ' +
      'chain, so start there for that requirement.</p></div>' +
      '<div class="source-list">' + (L.sources || []).map(function (s) {
        return '<div class="source-item" data-stance="' + esc(s.stance || 'support') + '">' +
          '<h4>' + esc(s.title) + '</h4>' +
          '<p class="source-meta">' + esc(s.meta) + '</p>' +
          '<p>' + trust(s.note) + '</p></div>';
      }).join('') + '</div>';
  }

  window.openModule = function (id) {
    var m = MODULES.filter(function (x) { return x.id === id; })[0];
    if (!m) return;
    byId('pop-eyebrow').textContent = m.label;
    byId('pop-title').textContent = m.title;
    byId('pop-body').innerHTML = m.render ? m.render() : '';
    byId('pop-modal').classList.add('show');
    byId('pop-modal').querySelector('.pop-panel').scrollTop = 0;
    loadAllDrafts();
  };
  window.closeModule = function () { byId('pop-modal').classList.remove('show'); };
  window.jumpToSection = function (sel) {
    var el = document.querySelector(sel);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  /* ── Lecture cards ─────────────────────────────────────────────────────── */

  function renderLectureCards() {
    var segs = (L.lecture && L.lecture.segments) || [];
    byId('main-lecture-grid').innerHTML = segs.map(function (s, i) {
      return '<button class="lecture-card" type="button" onclick="openLectureModal(' + i + ')">' +
        '<span class="module-label">Card ' + String(i + 1).padStart(2, '0') + '</span>' +
        '<h3>' + esc(s.title) + '</h3>' +
        '<ul class="lecture-list">' + (s.bullets || []).map(function (b) {
          return '<li>' + trust(b) + '</li>';
        }).join('') + '</ul></button>';
    }).join('');
  }

  function renderVideoClips() {
    var vids = (L.lecture && L.lecture.videos) || [];
    byId('content-video-clips').innerHTML = vids.map(function (v) {
      return '<div class="video-card">' +
        '<h3>' + esc(v.title) + '</h3>' +
        '<p>' + trust(v.prompt) + '</p>' +
        (v.url
          ? '<a class="btn" href="' + esc(v.url) + '" target="_blank" rel="noopener">Open clip</a>'
          : '<div class="teacher-todo"><h4>Unresolved, teacher action required</h4><p>' +
              trust(v.todo) + '</p></div>') +
        '</div>';
    }).join('');
  }

  window.openLectureModal = function (i) {
    var s = (L.lecture.segments || [])[i];
    if (!s) return;
    byId('lecture-modal-title').textContent = s.title;
    byId('lecture-modal-bullets').innerHTML = (s.bullets || []).map(function (b) {
      return '<li>' + trust(b) + '</li>';
    }).join('');
    var img = byId('lecture-modal-img');
    var wrap = img.parentNode;
    if (s.image && s.image.url) {
      img.src = s.image.url;
      img.alt = s.image.title || '';
      byId('lecture-modal-caption').textContent = s.image.caption || '';
      wrap.hidden = false;
    } else {
      wrap.hidden = true;
    }
    byId('lecture-modal').classList.add('show');
  };
  window.closeLectureModal = function () { byId('lecture-modal').classList.remove('show'); };
  window.closeLightbox = function () { byId('lightbox').classList.remove('show'); };

  /* ── Drafts, copy, self-check ──────────────────────────────────────────── */

  // Namespaced by lesson so drafts never bleed between lessons.
  function draftKey(id) {
    var lesson = (L.meta.lesson || 'lesson').replace(/\s+/g, '-').toLowerCase();
    return 'behistorical-ce-draft-' + lesson + '-' + id;
  }

  window.saveDraft = function (id) {
    var t = byId(id);
    if (!t) return;
    localStorage.setItem(draftKey(id), t.value || '');
    var r = byId(id + '-result');
    if (r) r.textContent = 'Draft saved on this device.';
  };

  function loadDraft(id) {
    var t = byId(id);
    if (!t) return;
    var saved = localStorage.getItem(draftKey(id));
    if (saved) t.value = saved;
  }

  window.loadAllDrafts = function () {
    document.querySelectorAll('textarea.response-area').forEach(function (t) {
      if (t.id) loadDraft(t.id);
    });
  };

  window.copyResponse = function (id) {
    var t = byId(id);
    if (!t) return;
    var r = byId(id + '-result');
    navigator.clipboard.writeText(t.value || '').then(function () {
      if (r) r.textContent = 'Response copied.';
    }).catch(function () {
      if (r) r.textContent = 'Copy failed. Select your text and copy manually.';
    });
  };

  window.selfCheck = function (id) {
    var t = byId(id);
    if (!t) return;
    var text = (t.value || '').toLowerCase();
    var terms = (t.dataset.terms || '').split('|').filter(Boolean);
    var found = terms.filter(function (term) { return text.indexOf(term.toLowerCase()) > -1; });
    var words = text.split(/\s+/).filter(Boolean).length;
    byId(id + '-result').textContent = 'Self-check: ' + words + ' words; evidence terms found: ' +
      (found.length ? found.join(', ') : 'none yet') + '.';
  };

  function stepFields(stepId) {
    var step = STEPS[stepId];
    if (!step || !step.capture) return [];
    return (step.capture.questions || []).map(function (q) {
      return { q: q, el: byId(stepId + '-c-' + q.id) };
    }).filter(function (f) { return f.el; });
  }

  window.saveStepDrafts = function (stepId) {
    stepFields(stepId).forEach(function (f) {
      localStorage.setItem(draftKey(f.el.id), f.el.value || '');
    });
    byId(stepId + '-capture-result').textContent = 'Draft saved on this device.';
  };

  window.copyStepResponses = function (stepId) {
    var step = STEPS[stepId];
    var lines = [L.meta.lesson + ', ' + step.label + ', ' + step.title, ''];
    (step.capture.questions || []).forEach(function (q) {
      var el = byId(stepId + '-c-' + q.id);
      var val = '';
      if (q.type === 'likert' || q.type === 'mcq') {
        var picked = document.querySelector('input[name="' + stepId + '-c-' + q.id + '"]:checked');
        val = picked ? picked.value : '(not answered)';
      } else if (el) {
        val = el.value || '(not answered)';
      }
      lines.push(q.label, val, '');
    });
    var out = lines.join('\n');
    var r = byId(stepId + '-capture-result');
    navigator.clipboard.writeText(out).then(function () {
      if (r) r.textContent = 'All responses copied. Paste them into the form.';
    }).catch(function () {
      if (r) r.textContent = 'Copy failed. Select your text and copy manually.';
    });
  };

  window.selfCheckStep = function (stepId) {
    var parts = [];
    stepFields(stepId).forEach(function (f) {
      if (!f.q.terms) return;
      var text = (f.el.value || '').toLowerCase();
      var found = f.q.terms.filter(function (t) { return text.indexOf(t.toLowerCase()) > -1; });
      parts.push(text.split(/\s+/).filter(Boolean).length + ' words; evidence terms found: ' +
        (found.length ? found.join(', ') : 'none yet'));
    });
    byId(stepId + '-capture-result').textContent = 'Self-check: ' + parts.join(' | ');
  };

  window.checkMcq = function (name) {
    var opts = document.querySelectorAll('.mcq-option[data-name="' + name + '"]');
    var picked = document.querySelector('input[name="' + name + '"]:checked');
    var result = byId(name + '-result');
    if (!picked) { result.textContent = 'Choose an answer first.'; return; }
    var right = false;
    opts.forEach(function (o, i) {
      var isCorrect = o.dataset.correct === '1';
      if (isCorrect) o.setAttribute('data-state', 'right');
      else if (String(i) === picked.value) o.setAttribute('data-state', 'wrong');
      if (isCorrect && String(i) === picked.value) right = true;
    });
    result.textContent = (right ? 'Correct. ' : 'Not quite. ') + (result.dataset.why || '');
  };

  window.copyCoachOpening = function (id) {
    var el = byId(id + '-text');
    if (!el) return;
    var r = byId(id + '-result');
    navigator.clipboard.writeText(el.textContent.trim()).then(function () {
      if (r) r.textContent = 'Opening copied. Paste it into the coach to start.';
    }).catch(function () {
      if (r) r.textContent = 'Copy failed. Select the text and copy manually.';
    });
  };

  /* ── Boot ──────────────────────────────────────────────────────────────── */

  document.title = 'BeHistorical Current Events | ' + L.meta.lesson + ', ' + L.meta.title;
  byId('lesson-meta').textContent = [
    L.meta.strand, L.meta.grades, L.meta.duration, 'Traced back to ' + L.meta.tracedTo
  ].join(' · ');
  byId('lesson-title').innerHTML = trust(L.meta.title.replace(
    'Ban in Your Locker', 'Ban in <em>Your Locker</em>'));
  byId('lesson-subtitle').textContent = L.meta.subtitle;
  byId('lesson-standfirst').textContent = L.meta.standfirst;
  byId('footer-topic-label').textContent =
    L.meta.lesson + ', ' + L.meta.title + ' · Start with today. Prove how it got here.';
  byId('lecture-title').textContent = L.lecture.title;
  byId('lecture-intro').textContent = L.lecture.intro;

  byId('inline-targets').innerHTML =
    '<div class="inline-targets">' +
      '<article class="inline-target-card"><h3>Learning Targets</h3>' +
        (L.learningTargets || []).map(function (t, i) {
          return '<div class="inline-target-item">' +
            '<span class="inline-target-number">' + (i + 1) + '</span>' +
            '<div class="inline-target-text"><p>' + trust(t.target) + '</p>' +
              '<div class="inline-target-kc-row">' +
                '<span class="inline-target-kc">' + esc(t.skill) + '</span></div>' +
            '</div></div>';
        }).join('') +
      '</article>' +
      '<article class="inline-target-card"><h3>Success Criteria</h3>' +
        (L.successCriteria || []).map(function (c, i) {
          return '<div class="inline-target-item">' +
            '<span class="inline-target-number">' + (i + 1) + '</span>' +
            '<div class="inline-target-text"><p>' + trust(c.criteria) + '</p>' +
              '<div class="inline-target-kc-row">' +
                '<span class="inline-target-kc">' + esc(c.skill) + '</span></div>' +
            '</div></div>';
        }).join('') +
      '</article>' +
    '</div>';

  byId('skills-grid').innerHTML = (L.skills || []).map(function (s) {
    return '<article class="skill-frame-card">' +
      '<span class="skill-code">' + esc(s.code) + '</span>' +
      '<h3>' + esc(s.name) + '</h3>' +
      '<p>' + trust(s.text) + '</p>' +
      '<div class="skill-where"><strong>Assessed in</strong><ul>' +
        (s.where || []).map(function (w) { return '<li>' + esc(w) + '</li>'; }).join('') +
      '</ul></div></article>';
  }).join('');

  renderModuleGrid();
  renderLectureCards();
  renderVideoClips();
  loadAllDrafts();

  // Escape closes whichever layer is open, outermost last.
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    ['lightbox', 'lecture-modal', 'pop-modal'].some(function (id) {
      var el = byId(id);
      if (el && el.classList.contains('show')) { el.classList.remove('show'); return true; }
      return false;
    });
  });
})();
