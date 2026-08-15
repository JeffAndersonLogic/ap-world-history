/* ─────────────────────────────────────────────────────────────────────────────
 * BeHistorical, "Listen to this section"
 *
 * One implementation of section narration, for every eBook section that exists
 * and every one that has not been written yet.
 *
 * This is an INSTRUCTIONAL enhancement, not an accessibility feature and not a
 * substitute for one. A student who uses a screen reader already has a better
 * tool than this for hearing the page; what this is for is the student who
 * reads slowly, the student who reads better with the words coming in through
 * two channels at once, and the student catching up on three weeks in May with
 * headphones on. The eBook's WCAG 2.1 AA contract is a separate layer and this
 * file must never weaken it: real buttons, real labels, the stylesheet's one
 * focus ring, no ARIA where native HTML already says the thing, and nothing
 * that starts talking on its own.
 *
 * ── The rules that shape the code ────────────────────────────────────────────
 *
 * 1. The HTML is the source of truth. Narration reads the rendered DOM of the
 *    section in front of the student, so a revised chapter is a revised
 *    narration on the next page load with nothing to regenerate. This is the
 *    whole reason there are no MP3 files: an audio file is a second copy of the
 *    content, and the moment a paragraph is edited nothing in this repo can
 *    tell you which copy a student heard. That is the failure the content model
 *    exists to refuse, and it would be worse here than anywhere else, because a
 *    stale recording sounds exactly as authoritative as a current one.
 *
 * 2. Nothing leaves the device. window.speechSynthesis is the browser's own
 *    engine. No API key, no third party, no student text over the wire. The one
 *    thing stored is the playback rate, a number, under one key.
 *
 * 3. One narration at a time, page-wide. Two sections talking over each other
 *    is not a degraded experience, it is noise, so starting anywhere cancels
 *    everywhere.
 *
 * 4. Controls are generated here and nowhere else. The renderer marks a section
 *    with data-listenable and leaves a data-listen-mount slot; this file builds
 *    the buttons. Forty-three sections hand-wired would be forty-three places
 *    for the next change to miss one, which is precisely how the First & 10
 *    capture block went missing twice.
 *
 * ── Capability detection ─────────────────────────────────────────────────────
 *
 * If the browser has no speech synthesis, this file injects nothing at all. A
 * disabled button that never becomes enabled reads as something broken; an
 * absent button reads as a feature this browser does not have, which is the
 * truth. The page is unchanged in every other respect.
 * ──────────────────────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  /* The four supported rates, and the only four. A free-form number box invites
     0.1x, which sounds like a fault rather than a setting. */
  var RATES = [0.75, 1, 1.25, 1.5];
  var DEFAULT_RATE = 1;
  var RATE_KEY = 'behistorical-listen-rate';

  /* Chunk ceiling, in characters. See splitLong() for why this number exists. */
  var MAX_CHUNK = 220;

  var synth = window.speechSynthesis;
  var Utterance = window.SpeechSynthesisUtterance;

  if (!synth || typeof Utterance !== 'function' ||
      typeof synth.speak !== 'function' || typeof synth.cancel !== 'function') {
    return;                       // no engine, no controls, no broken buttons
  }

  /* ── stored rate ─────────────────────────────────────────────────────────
   * localStorage can throw outright: Chrome raises SecurityError when site data
   * is blocked, and a managed Chromebook profile is exactly where that setting
   * gets turned on. A student losing their speed preference is a nuisance; a
   * student losing the whole feature because reading a preference threw is not.
   */
  function readRate() {
    var raw = null;
    try { raw = window.localStorage.getItem(RATE_KEY); } catch (e) { return DEFAULT_RATE; }
    var n = parseFloat(raw);
    /* Validated against the list rather than merely range-checked, so a hand
       edited or corrupted value falls back to 1x instead of being honoured. */
    return RATES.indexOf(n) === -1 ? DEFAULT_RATE : n;
  }

  function writeRate(rate) {
    try { window.localStorage.setItem(RATE_KEY, String(rate)); } catch (e) { /* not fatal */ }
  }

  var rate = readRate();

  /* ── text extraction ─────────────────────────────────────────────────────
   *
   * Deliberately not section.innerText. That would read the section number
   * watermark, the control labels this file just injected, and on a chapter
   * opener the words "Back to contents", none of which is the reading.
   *
   * The walk is generic rather than a list of known class names, and that is
   * the point: a component added to the deep-reading renderer next term is
   * narrated correctly the day it ships, with nothing here to update. What the
   * walk knows is structure, not content:
   *
   *   - anything excluded is excluded by attribute or by element type, so a
   *     future exclusion is one data-no-narrate in the renderer,
   *   - a chunk boundary is "this element is not inline", taken from the
   *     computed style rather than a tag list, which is what puts the block
   *     label of a callout on its own line and leaves a <span class="kt"> or an
   *     <em> inside the sentence where the author put it,
   *   - text is only ever emitted at a boundary flush, so a wrapper cannot
   *     contribute its children's text a second time.
   */
  var SKIP_TAGS = { SCRIPT: 1, STYLE: 1, TEMPLATE: 1, NAV: 1, BUTTON: 1, SELECT: 1, LABEL: 1, OPTION: 1 };

  function skipped(el) {
    if (SKIP_TAGS[el.tagName]) return true;
    if (el.hasAttribute('data-no-narrate')) return true;
    if (el.hasAttribute('hidden')) return true;
    if (el.getAttribute('aria-hidden') === 'true') return true;
    var cs = window.getComputedStyle(el);
    /* Off-screen and collapsed content is not on the page for a reading
       student, so it is not in the narration either. */
    if (cs.display === 'none' || cs.visibility === 'hidden') return true;
    return false;
  }

  function isInline(el) {
    var d = window.getComputedStyle(el).display;
    return d.indexOf('inline') === 0 || d === 'contents';
  }

  function collect(root) {
    var chunks = [];
    var buffer = [];

    function flush() {
      var text = clean(buffer.join(''));
      buffer.length = 0;
      if (text) chunks.push(text);
    }

    function walk(node) {
      for (var n = node.firstChild; n; n = n.nextSibling) {
        if (n.nodeType === 3) { buffer.push(n.nodeValue); continue; }
        if (n.nodeType !== 1) continue;
        if (skipped(n)) continue;
        if (isInline(n)) { walk(n); } else { flush(); walk(n); flush(); }
      }
    }

    walk(root);
    flush();

    var out = [];
    for (var i = 0; i < chunks.length; i++) {
      var pieces = splitLong(sentence(chunks[i]));
      for (var j = 0; j < pieces.length; j++) out.push(pieces[j]);
    }
    return out;
  }

  /**
   * Normalize one run of text for speech. This changes how the words are
   * spoken, never which words they are: no summarizing, no rewording, no
   * simplifying of the history to suit the synthesizer.
   */
  function clean(text) {
    return String(text)
      .replace(/[\u200b-\u200d\ufeff]/g, '')      // zero-width joiners, silent but not to a parser
      .replace(/\u00a0/g, ' ')                    // &nbsp; is a space, and reads as one
      /* The interpunct is a visual separator in the dates line and the chapter
         return line. Spoken raw, some engines say "middle dot" and some say
         nothing at all, and either way the phrase runs on. A comma is the pause
         the typography was drawing. */
      .replace(/\s*[\u00b7\u2022]\s*/g, ', ')
      /* Em and en dashes are banned from prose by the house style and should
         never appear, but a synthesizer reading one aloud as "dash" is a bad
         enough surprise to be worth defending against. */
      .replace(/\s*[\u2013\u2014]\s*/g, ', ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /**
   * End a chunk with a stop, so the engine takes a breath between a heading and
   * the paragraph under it instead of running them into one sentence. Headings
   * and date lines carry no terminal punctuation of their own.
   */
  function sentence(text) {
    return /[.!?:;,]$/.test(text) ? text : text + '.';
  }

  /**
   * Split a long chunk at sentence boundaries.
   *
   * Chromium stops speaking part way through a long utterance, a defect old
   * enough to have its own folklore of workarounds, most of which involve
   * calling pause() and resume() on a timer. That trick fights the real pause
   * button for control of the same state, so it is not used here. Feeding the
   * engine one paragraph at a time, and splitting a long paragraph at its
   * sentences, keeps every utterance short enough that the bug has no room to
   * appear, and it costs nothing else: playback is already sequential.
   *
   * MAX_CHUNK is a soft ceiling. A sentence longer than it is left whole rather
   * than cut mid-clause, because a wrong pause is worse than a long utterance.
   */
  function splitLong(text) {
    if (text.length <= MAX_CHUNK) return [text];
    var parts = text.match(/[^.!?]+(?:[.!?]+|$)\s*/g) || [text];
    var out = [];
    var current = '';
    for (var i = 0; i < parts.length; i++) {
      var piece = parts[i].trim();
      if (!piece) continue;
      if (current && (current.length + 1 + piece.length) > MAX_CHUNK) {
        out.push(current);
        current = piece;
      } else {
        current = current ? current + ' ' + piece : piece;
      }
    }
    if (current) out.push(current);
    return out;
  }

  /* ── playback ────────────────────────────────────────────────────────────
   *
   * One active entry, page-wide, and one session token.
   *
   * The token is what keeps a cancelled narration from resurrecting the next
   * one. Chrome fires the current utterance's `end` handler when cancel() is
   * called, which is indistinguishable from a natural finish at the handler
   * itself; without a token, cancelling section A during its third paragraph
   * would advance A to its fourth and speak it over section B. Every callback
   * checks the token it was created under and does nothing if the session has
   * moved on.
   */
  var active = null;      // the entry currently playing or paused
  var session = 0;        // bumped by every start and every stop

  function start(entry) {
    var chunks = collect(entry.section);
    if (!chunks.length) return;               // nothing to read, so nothing to do

    stop();                                   // cancels whatever else was talking
    session++;
    var token = session;

    active = entry;
    entry.chunks = chunks;
    entry.index = 0;
    setState(entry, 'playing');

    /* Deferred by one turn on purpose. In Chrome a speak() issued in the same
       task as a cancel() is sometimes swallowed, which shows up as a Listen
       button that does nothing on the second section a student tries. */
    window.setTimeout(function () { speakNext(token); }, 0);
  }

  function speakNext(token) {
    if (token !== session || !active) return;

    if (active.index >= active.chunks.length) { finish(token); return; }

    var utterance = new Utterance(active.chunks[active.index]);
    utterance.rate = rate;
    /* The document's language, not a named voice. Voice availability differs by
       device, by profile and by ChromeOS build, and pinning one means a student
       whose machine does not have it gets silence. The browser's default for
       the language is the one voice guaranteed to exist. */
    utterance.lang = document.documentElement.lang || 'en';

    utterance.onend = function () {
      if (token !== session || !active) return;
      active.index++;
      speakNext(token);
    };

    /* A cancel() raises `error` with reason "interrupted" or "canceled" in some
       builds and only `end` in others. The token check swallows both, so this
       handler only ever runs for a genuine synthesis failure. */
    utterance.onerror = function (event) {
      if (token !== session || !active) return;
      if (event && (event.error === 'interrupted' || event.error === 'canceled')) return;
      finish(token);
    };

    active.utterance = utterance;
    try {
      synth.speak(utterance);
    } catch (e) {
      finish(token);                          // never leave a section stuck on "Listening"
    }
  }

  function finish(token) {
    if (token !== session) return;
    var entry = active;
    active = null;
    session++;
    if (entry) setState(entry, 'idle');
  }

  function stop() {
    session++;
    var entry = active;
    active = null;
    try { synth.cancel(); } catch (e) { /* nothing left to cancel */ }
    if (entry) setState(entry, 'idle');
  }

  function togglePause() {
    if (!active) return;
    if (active.state === 'playing') {
      try { synth.pause(); } catch (e) { return; }
      setState(active, 'paused');
    } else if (active.state === 'paused') {
      try { synth.resume(); } catch (e) { return; }
      setState(active, 'playing');
    }
  }

  /* ── controls ────────────────────────────────────────────────────────────
   *
   * Real buttons, in the document, in reading order, with their state carried
   * by their own labels rather than by colour or by an ARIA attribute. The
   * "Listening" indicator is text as well as a border change for the same
   * reason: colour alone is not a state anyone can be required to see.
   */
  function setState(entry, state) {
    entry.state = state;
    entry.root.setAttribute('data-state', state);

    var playing = state === 'playing';
    var paused = state === 'paused';
    var busy = playing || paused;

    entry.toggle.disabled = !busy;
    entry.stop.disabled = !busy;

    /* One button, so its visible label and its accessible name move together
       and cannot disagree: the accessible name is the visible word plus the
       section, and both come from the same assignment. */
    entry.toggleLabel.textContent = paused ? 'Resume' : 'Pause';

    entry.status.textContent = playing ? 'Listening' : paused ? 'Paused' : '';
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  /** A span that is read aloud by a screen reader and never seen. It is how
   *  forty-three buttons reading "Listen to this section" stay tellable apart
   *  in a list of links and buttons without shouting the section name at a
   *  sighted reader who can already see which section they are in. */
  function hidden(text) {
    return el('span', 'bh-vh', text);
  }

  function buildControls(section, index) {
    var label = section.getAttribute('data-listen-label') || 'this section';
    var mount = section.querySelector('[data-listen-mount]');
    if (!mount) {
      mount = el('div', null);
      mount.setAttribute('data-listen-mount', '');
      section.insertBefore(mount, section.firstChild);
    }

    var root = el('div', 'bh-listen');
    root.setAttribute('data-state', 'idle');
    /* The controls sit inside the section they narrate, so without this the
       extractor would read them: the buttons and the select are excluded by
       element type, but the status region is a plain span and "Listening" would
       be spoken as the first line of every section. The renderer marks its
       mount too; this covers the fallback mount built a few lines above. */
    root.setAttribute('data-no-narrate', '');

    var play = el('button', 'bh-listen-btn bh-listen-play');
    play.type = 'button';
    play.appendChild(document.createTextNode('Listen to this section'));
    play.appendChild(hidden(': ' + label));

    var toggle = el('button', 'bh-listen-btn bh-listen-toggle');
    toggle.type = 'button';
    var toggleLabel = el('span', null, 'Pause');
    toggle.appendChild(toggleLabel);
    toggle.appendChild(hidden(' narration of ' + label));

    var stopBtn = el('button', 'bh-listen-btn bh-listen-stop');
    stopBtn.type = 'button';
    stopBtn.appendChild(document.createTextNode('Stop'));
    stopBtn.appendChild(hidden(' narration of ' + label));

    /* A native select with a visible label, not a custom widget and not a
       cycling button. It is keyboard operable, it announces its own value, and
       it says what the current speed is without being clicked four times. */
    var speed = el('span', 'bh-listen-speed');
    var id = 'bh-listen-rate-' + (section.id || String(index));
    var labelEl = el('label', null, 'Speed');
    labelEl.setAttribute('for', id);
    var select = el('select', 'bh-listen-rate');
    select.id = id;
    for (var i = 0; i < RATES.length; i++) {
      var option = el('option', null, RATES[i] + 'x');
      option.value = String(RATES[i]);
      if (RATES[i] === rate) option.selected = true;
      select.appendChild(option);
    }
    speed.appendChild(labelEl);
    speed.appendChild(select);

    /* role="status" rather than aria-live, because a status region is what this
       is. It is the one place ARIA earns its place here: the state change has
       no other announcement, and the alternative is moving focus, which would
       take the student out of the paragraph they are reading. */
    var status = el('span', 'bh-listen-status');
    status.setAttribute('role', 'status');

    root.appendChild(play);
    root.appendChild(toggle);
    root.appendChild(stopBtn);
    root.appendChild(speed);
    root.appendChild(status);
    mount.appendChild(root);

    var entry = {
      section: section, root: root, label: label,
      toggle: toggle, toggleLabel: toggleLabel,
      stop: stopBtn, status: status, select: select,
      chunks: [], index: 0, state: 'idle'
    };

    play.addEventListener('click', function () { start(entry); });
    toggle.addEventListener('click', function () {
      if (active === entry) togglePause();
    });
    stopBtn.addEventListener('click', function () {
      if (active === entry) stop();
    });
    select.addEventListener('change', function () {
      var next = parseFloat(select.value);
      if (RATES.indexOf(next) === -1) next = DEFAULT_RATE;
      rate = next;
      writeRate(rate);
      syncRate();
    });

    setState(entry, 'idle');
    return entry;
  }

  var entries = [];

  /** One rate for the page, so the setting a student changed in chapter three
   *  is the setting they meet in chapter four. Applied to the next utterance
   *  rather than by restarting the current one: a restart would throw away the
   *  paragraph they were in the middle of, which is a worse outcome than a
   *  sentence at the old speed. */
  function syncRate() {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].select.value !== String(rate)) entries[i].select.value = String(rate);
    }
  }

  function init() {
    var sections = document.querySelectorAll('[data-listenable]');
    for (var i = 0; i < sections.length; i++) {
      entries.push(buildControls(sections[i], i));
    }
    if (!entries.length) return;

    /* Speech outlives the document in several browsers, so a student who clicks
       a chapter link mid-paragraph would otherwise be followed to the next page
       by a voice with no controls attached to it. pagehide rather than
       beforeunload: beforeunload disqualifies the page from the back/forward
       cache, and the cost of that is paid on every navigation by every student
       to solve a problem pagehide already solves. */
    window.addEventListener('pagehide', function () {
      try { synth.cancel(); } catch (e) { /* going away anyway */ }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
