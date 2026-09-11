// BeInTheRoom writes its AP reflection here so the lesson page's Gather All My
// Work panel can pick it up. BeInTheRoom always opens as its own page (a new
// tab via window.open, or a v2 room page), never inside the lesson page's DOM,
// so nothing on the lesson page can read a BeInTheRoom textarea directly. This
// mirrors how the First & 10 reading bridges its iframe: the scenario page
// writes behistorical-beintheroom-<TOPIC_KEY> under this one key shape, and the
// lesson renderer reads it back under the beintheroom-response work item. See
// injectBeInTheRoomAnswer() in assets/js/behistorical-topic-renderer-v1.js and
// foundations/foundations-topic-renderer.js.
//
// One implementation, loaded by every BeInTheRoom scenario page (v2, the
// unit-6/unit-9 generated template, and the hand-authored v1 scenarios), so
// the key shape can only drift by editing this file once.
//
// THIS KEY IS THE STORE, NOT A COPY OF ONE.
//
// wire() exists because treating it as a copy cost students their work. The 22
// hand-authored v1 scenarios save their own drafts only when a student clicks
// Save Draft, so on a second visit the reflection box is empty, and the wiring
// those files used to carry synced that empty box to storage at page load. A
// student who typed a reflection, closed the tab and reopened the scenario, or
// simply refreshed it, came back to an empty box and a Gather All My Work panel
// with every other module present and BeInTheRoom missing. Every structural
// check stayed green through all of it: the wiring snippet was present and
// byte-identical in all 22 files, and nothing offline can see a page erase a
// storage key on load. Topic 1.6 is where a teacher found it, on 2026-09-11.
//
// So the rules here are: a page load restores from this key rather than writing
// to it, and only a real edit by a student can empty it.
(function (global) {
  'use strict';

  var KEY_PREFIX = 'behistorical-beintheroom-';
  // Multiple reflection boxes join with a blank line between parts, which is
  // also how a legacy payload with no `parts` is split back apart below.
  var PART_SEPARATOR = '\n\n';

  function storageKey(topicKey) {
    return KEY_PREFIX + topicKey;
  }

  function readBeInTheRoomReflection(topicKey) {
    if (!topicKey) return null;
    try {
      var raw = global.localStorage.getItem(storageKey(topicKey));
      if (!raw) return null;
      var saved = JSON.parse(raw);
      return (saved && typeof saved === 'object') ? saved : null;
    } catch (e) {
      return null;
    }
  }

  // `parts` is optional and only the scenario page reads it, to put each box
  // back the way the student left it. Both renderers read `a` and nothing else,
  // so a payload written before `parts` existed stays readable.
  function saveBeInTheRoomReflection(topicKey, promptText, answerText, parts) {
    if (!topicKey) return;
    var payload = { q: String(promptText || ''), a: String(answerText || '').trim() };
    if (parts && parts.length > 1) {
      payload.parts = parts.map(function (part) { return String(part == null ? '' : part); });
    }
    try {
      global.localStorage.setItem(storageKey(topicKey), JSON.stringify(payload));
    } catch (e) {
      // Private browsing, or storage blocked: nothing else can carry this
      // answer back to the lesson page, so it simply is not captured.
    }
  }

  function boxFor(id) {
    var el = global.document.getElementById(id);
    return el ? el : null;
  }

  function compose(ids) {
    var parts = ids.map(function (id) {
      var box = boxFor(id);
      return box ? String(box.value || '') : '';
    });
    return { parts: parts, text: parts.filter(Boolean).join(PART_SEPARATOR) };
  }

  // Puts a stored reflection back in the boxes it came out of. A payload
  // carrying `parts` restores box for box. One written before `parts` existed
  // is split on the separator it was joined with, and anything that does not
  // split into exactly the boxes on the page goes into the first box whole:
  // every word the student wrote comes back either way, which is the thing that
  // matters, and re-splitting a paragraph by guesswork is not.
  function restore(ids, saved) {
    var values;
    if (Array.isArray(saved.parts) && saved.parts.length === ids.length) {
      values = saved.parts;
    } else {
      var pieces = String(saved.a || '').split(PART_SEPARATOR);
      values = pieces.length === ids.length ? pieces : [saved.a];
    }
    ids.forEach(function (id, index) {
      var box = boxFor(id);
      if (box) box.value = String(values[index] == null ? '' : values[index]);
    });
  }

  // The one call a hand-authored scenario makes. See
  // scripts/wire-beintheroom-work-capture.js, which writes it into every v1
  // scenario file, and never hand-edit the call it writes.
  function wireBeInTheRoomReflection(topicKey, promptText, ids) {
    if (!topicKey || !ids || !ids.length) return;

    var saved = readBeInTheRoomReflection(topicKey);
    var current = compose(ids);

    // The scenario page has already run its own draft restore by the time this
    // runs, so an empty box here means that restore had nothing, and this key
    // is the fresher record: it is written on every keystroke, while a v1
    // page's own draft waits for a button nobody is required to press.
    if (saved && saved.a && !current.text) restore(ids, saved);

    ids.forEach(function (id) {
      var box = boxFor(id);
      if (!box) return;
      box.addEventListener('input', function () {
        var edited = compose(ids);
        saveBeInTheRoomReflection(topicKey, promptText, edited.text, edited.parts);
      });
    });

    // Write at load only when there is something to write. An empty box on a
    // page the student has not filled in yet is never an instruction to erase
    // what they wrote the last time they were here; clearing the reflection
    // takes a real edit, which the listener above carries.
    var settled = compose(ids);
    if (settled.text) saveBeInTheRoomReflection(topicKey, promptText, settled.text, settled.parts);
  }

  global.BHBeInTheRoomCapture = {
    save: saveBeInTheRoomReflection,
    read: readBeInTheRoomReflection,
    wire: wireBeInTheRoomReflection
  };
})(window);
