/* Class Pulse, the projector screen (2026-11-16, Jeff).
 *
 * A second window for the wall. It has no data of its own and no network (its policy
 * is connect-src 'none'): it listens on a BroadcastChannel for the state the Class
 * Pulse page on the same computer sends, and draws one part of it at a time. That
 * state is built by projectorState() in class-pulse-app.js from class totals only,
 * and the model answer is in it only while its own part is showing. Everything here
 * is written with textContent, so nothing sent can become markup.
 *
 * The arrow keys, the space bar and a clicker's Page Up and Page Down are passed back
 * to the Class Pulse page, which decides what to show; this window never steps itself.
 */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.BHClassPulseProjector = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const BANDS = { D: 'Demonstrating', P: 'Partly there', N: 'Not yet' };

  // Tiny element builder: tag, class, text, children. Text only, never HTML.
  function el(doc, tag, cls, text, kids) {
    const n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    (kids || []).forEach(k => { if (k) n.appendChild(k); });
    return n;
  }
  function bar(doc, c) {
    if (!c.read) return el(doc, 'p', 'pj-none', 'Not read yet.');
    const stack = el(doc, 'div', 'stack m-rn pj-bar');
    ['N', 'P', 'D'].forEach(k => { if (c[k]) { const i = el(doc, 'i', 'b-' + k, String(c[k])); i.style.flex = String(c[k]); i.title = BANDS[k] + ': ' + c[k]; stack.appendChild(i); } });
    return stack;
  }
  function legend(doc) {
    return el(doc, 'p', 'cv-legend m-rn pj-legend', null, ['D', 'P', 'N'].map(k => el(doc, 'span', null, null, [el(doc, 'i', 'cell b-' + k, k), doc.createTextNode(BANDS[k])])));
  }

  // One part of the screen, as a list of nodes.
  function scene(doc, s) {
    switch (s.scene) {
      case 'question':
        return [el(doc, 'p', 'pj-eyebrow', s.checkpoint), el(doc, 'p', 'pj-prompt', s.prompt),
          el(doc, 'p', 'pj-count', s.inCount + ' of ' + s.n + ' answers in' + (s.read ? ' · ' + s.read + ' read' : ''))];
      case 'results':
        return [el(doc, 'h1', 'pj-h', 'How the class did')].concat(
          s.criteria.map(c => el(doc, 'div', 'pj-crit' + (c.hot ? ' pj-hot' : ''), null, [
            el(doc, 'div', 'pj-crit-text', null, [el(doc, 'b', null, 'Criterion ' + c.n + ' '), doc.createTextNode(c.text)]), bar(doc, c)])),
          [legend(doc)]);
      case 'revisit':
        if (!s.revisit) return [el(doc, 'h1', 'pj-h', 'What to revisit'), el(doc, 'p', 'pj-body', 'Not enough answers have been read yet to pick one.')];
        return [el(doc, 'h1', 'pj-h', 'Let\'s revisit criterion ' + s.revisit.n), el(doc, 'p', 'pj-big', s.revisit.text),
          el(doc, 'p', 'pj-body', s.revisit.short + ' of ' + s.revisit.read + ' answers read are not there yet on this one: ' + s.revisit.P + ' partly there, ' + s.revisit.N + ' not yet.'),
          s.revisit.strong ? el(doc, 'p', 'pj-body pj-strong', null, [el(doc, 'b', null, 'A strong answer: '), doc.createTextNode(s.revisit.strong)]) : null];
      case 'mis':
        if (!s.mis) return [el(doc, 'h1', 'pj-h', 'Wrong ideas to fix'), el(doc, 'p', 'pj-body', 'Not shown today.')];
        return [el(doc, 'h1', 'pj-h', 'Wrong ideas to fix'),
          s.mis.length ? el(doc, 'ul', 'pj-mis', null, s.mis.map(m => el(doc, 'li', null, m))) : el(doc, 'p', 'pj-body', 'None found in the answers read so far.')];
      case 'model':
        if (!s.model) return [el(doc, 'h1', 'pj-h', 'A model answer'), el(doc, 'p', 'pj-body', 'Not shown yet.')];
        return [el(doc, 'h1', 'pj-h', 'A model answer')].concat(
          s.model.length ? s.model.map(m => el(doc, 'p', 'pj-body pj-model' + (m.hot ? ' pj-hot' : ''), m.text)) : [el(doc, 'p', 'pj-body', 'No model answer is loaded for this checkpoint.')]);
      default:
        return [el(doc, 'div', 'pj-hold', null, [(() => { const i = doc.createElement('img'); i.src = '../assets/images/brand/class-pulse-logo.png'; i.alt = ''; i.width = 2000; i.height = 2000; return i; })(),
          el(doc, 'p', 'pj-title', s.topic), el(doc, 'p', 'pj-eyebrow', s.checkpoint)])];
    }
  }
  function draw(doc, s) {
    const stage = doc.getElementById('pj-stage');
    stage.textContent = '';
    stage.className = 'pj-stage pj-scene-' + s.scene;
    scene(doc, s).forEach(n => { if (n) stage.appendChild(n); });
    doc.getElementById('pj-topic').textContent = s.topic;
    doc.getElementById('pj-cp').textContent = s.checkpoint;
    doc.getElementById('pj-step').textContent = (s.index + 1) + ' of ' + s.count + ' · ' + s.label;
  }

  if (typeof document !== 'undefined' && document.getElementById('pj-stage')) {
    const chan = typeof BroadcastChannel === 'function' ? new BroadcastChannel('class-pulse-projector') : null;
    if (!chan) document.getElementById('pj-wait').textContent = 'This browser cannot connect the two windows. Use Chrome or Edge on the classroom computer.';
    else {
      chan.onmessage = e => { const m = e.data || {}; if (m.type === 'state' && m.state && m.state.v === 1) draw(document, m.state); };
      chan.postMessage({ type: 'hello' });
      setInterval(() => chan.postMessage({ type: 'alive' }), 5000);
      document.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { chan.postMessage({ type: 'step', d: 1 }); e.preventDefault(); }
        else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { chan.postMessage({ type: 'step', d: -1 }); e.preventDefault(); }
        else if (e.key === 'f' || e.key === 'F') { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen().catch(() => {}); }
      });
      // The hint is for the teacher setting up; it leaves once the screen is in use.
      setTimeout(() => { document.getElementById('pj-hint').hidden = true; }, 20000);
    }
  }
  return { scene, draw };
});
