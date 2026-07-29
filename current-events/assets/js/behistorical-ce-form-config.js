/* =============================================================================
   BEHISTORICAL CURRENT EVENTS, GOOGLE FORM CONFIG
   File: assets/js/behistorical-ce-form-config.js

   Mirrors assets/js/behistorical-form-config.js in the AP World repo, retargeted
   at events and steps instead of units and topics. Load BEFORE any renderer:

     <script src="../assets/js/behistorical-ce-form-config.js"></script>

   ── ACTION NEEDED BEFORE THE SEMESTER ────────────────────────────────────────
   baseURL and the entry IDs below currently point at the AP World response
   form, because that is the only live form in the repo. Responses from this
   course would land in the AP World sheet. Create a Current Events form with
   the same six questions, then replace baseURL and the six entry IDs here.
   Nothing else in the site needs to change: every page builds its URLs through
   CE_FORM.prefill().

   Question shape to recreate on the new form:
     Event         short answer   -> event
     Step          short answer   -> step
     Prompt ID     short answer   -> promptId
     Response type short answer   -> responseType
     Skill focus   checkboxes     -> skillFocus  (repeatable)
     Class period  multiple choice-> classPeriod (student selects)
   ─────────────────────────────────────────────────────────────────────────────
   ========================================================================== */

window.CE_FORM = {

  baseURL: 'https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewform',

  // Where the teacher reads the class data. Swap alongside baseURL.
  responsesURL: 'https://docs.google.com/forms/d/e/1FAIpQLSe_0wBPNvSivuE0ea3fhty43c4PDNfE-tEWsGsZYyh0gFCxxw/viewanalytics',

  // The Reverse History Coach lives in the school MagicSchool classroom.
  coachURL: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',

  fields: {
    event:        'entry.125385659',
    step:         'entry.187055090',
    promptId:     'entry.1549761827',
    responseType: 'entry.2107637366',
    skillFocus:   'entry.1963461515',
    classPeriod:  'entry.1794755975'
  },

  events: {
    '01': 'Event 01 - The Rise of Social Media',
    '02': 'Event 02 - The White-Collar Shock',
    '03': 'Event 03 - Israel and Palestine',
    '04': 'Event 04 - Iran',
    '05': 'Event 05 - Climate Change',
    '06': 'Event 06 - Immigration',
    'your-beat': 'Your Beat - Student Choice'
  },

  steps: {
    '01': '01 - The Brief',
    '02': '02 - Where in the World',
    '03': '03 - The Trace',
    '04': '04 - Evidence Lab',
    '05': '05 - Your Beat Checkpoint'
  },

  /**
   * Build a pre-filled Google Form URL.
   *
   *   CE_FORM.prefill({
   *     event: '01',
   *     step: '05',
   *     promptId: 'event-01-step-05',
   *     responseType: 'Your Beat Checkpoint',
   *     skillFocus: ['Causation', 'Sourcing']
   *   })
   *
   * Unknown event/step keys pass through as their own label, so a student
   * choice beat can send its own string without a config edit.
   */
  prefill: function (o) {
    o = o || {};
    var f = this.fields;
    var p = new URLSearchParams();
    p.set('usp', 'pp_url');

    if (o.event) p.set(f.event, this.events[o.event] || o.event);
    if (o.step)  p.set(f.step,  this.steps[o.step]   || o.step);
    if (o.promptId)     p.set(f.promptId, o.promptId);
    if (o.responseType) p.set(f.responseType, o.responseType);
    if (o.classPeriod)  p.set(f.classPeriod, o.classPeriod);

    // Checkbox questions repeat the same entry key once per checked value.
    var skills = o.skillFocus || [];
    for (var i = 0; i < skills.length; i++) p.append(f.skillFocus, skills[i]);

    return this.baseURL + '?' + p.toString();
  },

  /**
   * Wire a "Submit to the form" button. The button carries its context in
   * data attributes, so markup stays declarative:
   *
   *   <button class="btn" data-ce-form
   *           data-event="01" data-step="05"
   *           data-prompt-id="event-01-step-05"
   *           data-response-type="Your Beat Checkpoint"
   *           data-skills="Causation|Sourcing">Submit your beat</button>
   */
  wire: function (root) {
    var self = this;
    var btns = (root || document).querySelectorAll('[data-ce-form]');
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function (e) {
        e.preventDefault();
        var d = this.dataset;
        window.open(self.prefill({
          event: d.event,
          step: d.step,
          promptId: d.promptId,
          responseType: d.responseType,
          skillFocus: d.skills ? d.skills.split('|') : []
        }), '_blank', 'noopener');
      });
    }
  },

  /** Wire any [data-ce-coach] control to the Reverse History Coach. */
  wireCoach: function (root) {
    var self = this;
    var els = (root || document).querySelectorAll('[data-ce-coach]');
    for (var i = 0; i < els.length; i++) {
      if (els[i].tagName === 'A') { els[i].href = self.coachURL; continue; }
      els[i].addEventListener('click', function (e) {
        e.preventDefault();
        window.open(self.coachURL, '_blank', 'noopener');
      });
    }
  }
};

(function () {
  function boot() {
    window.CE_FORM.wire(document);
    window.CE_FORM.wireCoach(document);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
