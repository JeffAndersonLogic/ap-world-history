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
(function (global) {
  'use strict';

  function saveBeInTheRoomReflection(topicKey, promptText, answerText) {
    if (!topicKey) return;
    var payload = { q: String(promptText || ''), a: String(answerText || '').trim() };
    try {
      global.localStorage.setItem('behistorical-beintheroom-' + topicKey, JSON.stringify(payload));
    } catch (e) {
      // Private browsing, or storage blocked: nothing else can carry this
      // answer back to the lesson page, so it simply is not captured.
    }
  }

  global.BHBeInTheRoomCapture = { save: saveBeInTheRoomReflection };
})(window);
