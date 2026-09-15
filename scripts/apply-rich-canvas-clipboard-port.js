#!/usr/bin/env node
'use strict';

// One-time branch migration script. It is intentionally removed before the PR
// merges; the durable implementation lives in the two canonical renderers.

const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');

function read(rel) { return fs.readFileSync(path.join(ROOT, rel), 'utf8'); }
function write(rel, text) { fs.writeFileSync(path.join(ROOT, rel), text); }

function replaceBetween(rel, startMarker, endMarker, replacement) {
  const src = read(rel);
  const start = src.indexOf(startMarker);
  if (start === -1) throw new Error(`${rel}: start marker not found: ${startMarker}`);
  const end = src.indexOf(endMarker, start + startMarker.length);
  if (end === -1) throw new Error(`${rel}: end marker not found: ${endMarker}`);
  const out = src.slice(0, start) + replacement + '\n\n' + src.slice(end);
  write(rel, out);
  console.log(`patched ${rel}`);
}

const unitBuild = `function buildWorkDocument() {
  const work = collectLessonWork();
  if (!work.length) return null;

  const head = workHeading();
  const now = new Date();
  const stamp = now.toLocaleString();
  const isoStamp = now.toISOString();
  const manifest = buildRecordManifest(work, workTopicId(), isoStamp);

  // Clipboard formatting is deliberately inline. Browser CSS does not reliably
  // survive a paste into Canvas or Word; these sizes are part of the submission
  // document itself so assignment structure, prompts and student writing remain
  // visually distinct after the browser is gone.
  const html = ['<div>',
    '<p style="font-size:10pt;font-weight:700;margin:0 0 4pt;">' + escapeWorkHtml(head.line1) + '</p>',
    head.line2 ? '<h1 style="font-size:24pt;line-height:1.15;margin:0 0 8pt;">' + escapeWorkHtml(head.line2) + '</h1>' : '',
    '<p style="font-size:10pt;margin:0 0 12pt;"><em>Student work, copied ' + escapeWorkHtml(stamp) + '</em></p>',
    '<hr>'
  ].join('');

  const body = work.map(w => {
    const prompt = plainPrompt(w.prompt);
    return '<h2 style="font-size:16pt;line-height:1.2;margin:16pt 0 6pt;">' + escapeWorkHtml(w.label) + '</h2>'
      + (prompt ? '<p style="font-size:11pt;line-height:1.4;margin:0 0 6pt;"><strong>Question: ' + escapeWorkHtml(prompt) + '</strong></p>' : '')
      + '<p style="font-size:10.5pt;margin:0 0 4pt;"><strong>My response:</strong></p>'
      + '<div style="font-size:11pt;line-height:1.45;margin:0 0 8pt;">' + paragraphsHtml(w.text) + '</div>';
  }).join('<hr>');

  // Plain text is intentionally unchanged. The Canvas parser grammar, labels,
  // hashes and manifest are a data contract independent of presentation.
  const plain = [head.line1.toUpperCase(), head.line2, 'Student work, copied ' + stamp, '']
    .filter(Boolean)
    .concat(work.map(w => {
      const prompt = plainPrompt(w.prompt);
      return [w.label.toUpperCase(),
              prompt ? 'Question: ' + prompt : '',
              'My response:',
              w.text, ''].filter(Boolean).join('\\n');
    }))
    .concat(manifest)
    .join('\\n');

  return {
    html: html + body + recordManifestHtml(manifest) + '</div>',
    plain: plain,
    count: work.length
  };
}`;

const unitClipboard = `// Selecting the rendered block is the manual last resort when every clipboard
// API is blocked. The automatic rich fallback below selects a temporary HTML
// node first so execCommand copies formatting rather than flattened text.
function selectWorkOutput(out) {
  try {
    const range = document.createRange();
    range.selectNodeContents(out);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    return true;
  } catch (e) { return false; }
}

function copyAllWork() {
  const out = byId(WORK_EXPORT_ID);
  const result = byId('all-work-result');
  if (!out) return;

  let doc = (out.innerHTML || '').trim() ? { html: out.innerHTML, plain: out.dataset.plain || '' } : null;
  if (!doc) doc = gatherAllWork();
  if (!doc) return;

  const say = m => { if (result) result.textContent = m; };

  // Preferred path: one clipboard write with both MIME flavors. Canvas and Word
  // take text/html; plain-text targets still receive the parser-safe transcript.
  if (window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
    try {
      const item = new ClipboardItem({
        'text/html': new Blob([doc.html], { type: 'text/html' }),
        'text/plain': new Blob([doc.plain], { type: 'text/plain' })
      });
      navigator.clipboard.write([item])
        .then(() => say('Copied with formatting. Paste it into the Canvas assignment.'))
        .catch(() => copyWorkRichFallback(doc.html, doc.plain, say));
    } catch (e) {
      copyWorkRichFallback(doc.html, doc.plain, say);
    }
  } else {
    copyWorkRichFallback(doc.html, doc.plain, say);
  }
}

// ClipboardItem can be unavailable or blocked on managed student devices. The
// next-best path is an off-screen rich DOM selection copied with execCommand.
// Only after that fails do we fall all the way back to writeText(plain).
function copyWorkRichFallback(html, plain, say) {
  const host = document.createElement('div');
  host.setAttribute('contenteditable', 'true');
  host.setAttribute('aria-hidden', 'true');
  host.style.position = 'fixed';
  host.style.left = '-10000px';
  host.style.top = '0';
  host.innerHTML = html;
  document.body.appendChild(host);

  const sel = window.getSelection();
  let copied = false;
  try {
    const range = document.createRange();
    range.selectNodeContents(host);
    sel.removeAllRanges();
    sel.addRange(range);
    copied = document.execCommand('copy');
  } catch (e) { copied = false; }
  try { sel.removeAllRanges(); } catch (e) { /* selection cleanup is best effort */ }
  host.remove();

  if (copied) {
    say('Copied with formatting. Paste it into the Canvas assignment.');
    return;
  }

  const out = byId(WORK_EXPORT_ID);
  if (out) selectWorkOutput(out);
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(plain || (out ? out.textContent || '' : ''))
      .then(() => say('Copied as plain text. Paste it into the Canvas assignment.'))
      .catch(() => say('Copy is blocked on this device. Your work is selected, press Ctrl-C or Cmd-C.'));
  } else {
    say('Your work is selected, press Ctrl-C or Cmd-C to copy.');
  }
}`;

const foundationBuild = `function buildWorkDocument(){
  const work=collectLessonWork();
  if(!work.length)return null;
  const line1='AP World History'+(T.code?', '+T.code:'');
  const line2=T.title||'';
  const now=new Date();
  const stamp=now.toLocaleString();
  const manifest=buildRecordManifest(work,FOUNDATION_TOPIC_KEY||T.id||'',now.toISOString());

  // Inline styles are the clipboard contract. Page CSS is not dependable once
  // this document is pasted into Canvas or Word.
  const head='<div><p style="font-size:10pt;font-weight:700;margin:0 0 4pt;">'+escapeWorkHtml(line1)+'</p>'
    +(line2?'<h1 style="font-size:24pt;line-height:1.15;margin:0 0 8pt;">'+escapeWorkHtml(line2)+'</h1>':'')
    +'<p style="font-size:10pt;margin:0 0 12pt;"><em>Student work, copied '+escapeWorkHtml(stamp)+'</em></p><hr>';

  const body=work.map(w=>{
    const prompt=plainPrompt(w.prompt);
    return '<h2 style="font-size:16pt;line-height:1.2;margin:16pt 0 6pt;">'+escapeWorkHtml(w.label)+'</h2>'
      +(prompt?'<p style="font-size:11pt;line-height:1.4;margin:0 0 6pt;"><strong>Question: '+escapeWorkHtml(prompt)+'</strong></p>':'')
      +'<p style="font-size:10.5pt;margin:0 0 4pt;"><strong>My response:</strong></p>'
      +'<div style="font-size:11pt;line-height:1.45;margin:0 0 8pt;">'+paragraphsHtml(w.text)+'</div>';
  }).join('<hr>');

  // Keep the plain grammar byte-for-byte in the same shape the parser expects.
  const plain=[line1.toUpperCase(),line2,'Student work, copied '+stamp,''].filter(Boolean)
    .concat(work.map(w=>{
      const prompt=plainPrompt(w.prompt);
      return [w.label.toUpperCase(),prompt?'Question: '+prompt:'','My response:',w.text,''].filter(Boolean).join('\\n');
    })).concat(manifest).join('\\n');

  return {html:head+body+recordManifestHtml(manifest)+'</div>',plain:plain,count:work.length};
}`;

const foundationClipboard = `// Selecting the rendered block is the manual last resort when every clipboard
// API is blocked. The automatic fallback first selects temporary rich HTML.
function selectWorkOutput(out){
  try{
    const range=document.createRange();range.selectNodeContents(out);
    const sel=window.getSelection();sel.removeAllRanges();sel.addRange(range);
    return true;
  }catch(e){return false;}
}

function copyAllWork(){
  const out=byId(WORK_EXPORT_ID),result=byId('all-work-result');
  if(!out)return;
  let doc=(out.innerHTML||'').trim()?{html:out.innerHTML,plain:out.dataset.plain||''}:null;
  if(!doc)doc=gatherAllWork();
  if(!doc)return;
  const say=m=>{if(result)result.textContent=m;};
  if(window.ClipboardItem&&navigator.clipboard&&navigator.clipboard.write){
    try{
      const item=new ClipboardItem({
        'text/html':new Blob([doc.html],{type:'text/html'}),
        'text/plain':new Blob([doc.plain],{type:'text/plain'})
      });
      navigator.clipboard.write([item])
        .then(()=>say('Copied with formatting. Paste it into the Canvas assignment.'))
        .catch(()=>copyWorkRichFallback(doc.html,doc.plain,say));
    }catch(e){copyWorkRichFallback(doc.html,doc.plain,say);}
  }else{copyWorkRichFallback(doc.html,doc.plain,say);}
}

// Managed browsers can block ClipboardItem. Select a temporary rich DOM node
// and use execCommand before falling back to parser-safe plain text.
function copyWorkRichFallback(html,plain,say){
  const host=document.createElement('div');
  host.setAttribute('contenteditable','true');
  host.setAttribute('aria-hidden','true');
  host.style.position='fixed';
  host.style.left='-10000px';
  host.style.top='0';
  host.innerHTML=html;
  document.body.appendChild(host);
  const sel=window.getSelection();
  let copied=false;
  try{
    const range=document.createRange();range.selectNodeContents(host);
    sel.removeAllRanges();sel.addRange(range);
    copied=document.execCommand('copy');
  }catch(e){copied=false;}
  try{sel.removeAllRanges();}catch(e){/* best effort */}
  host.remove();
  if(copied){say('Copied with formatting. Paste it into the Canvas assignment.');return;}
  const out=byId(WORK_EXPORT_ID);
  if(out)selectWorkOutput(out);
  if(navigator.clipboard&&navigator.clipboard.writeText){
    navigator.clipboard.writeText(plain||(out?out.textContent||'':''))
      .then(()=>say('Copied as plain text. Paste it into the Canvas assignment.'))
      .catch(()=>say('Copy is blocked on this device. Your work is selected, press Ctrl-C or Cmd-C.'));
  }else{say('Your work is selected, press Ctrl-C or Cmd-C to copy.');}
}`;

replaceBetween(
  'assets/js/behistorical-topic-renderer-v1.js',
  'function buildWorkDocument() {',
  'function gatherAllWork() {',
  unitBuild
);
replaceBetween(
  'assets/js/behistorical-topic-renderer-v1.js',
  '// Selecting the rendered block first',
  '// One timer per textarea',
  unitClipboard
);
replaceBetween(
  'foundations/foundations-topic-renderer.js',
  'function buildWorkDocument(){',
  'function gatherAllWork(){',
  foundationBuild
);
replaceBetween(
  'foundations/foundations-topic-renderer.js',
  '// Selecting the rendered block first',
  '// One timer per textarea',
  foundationClipboard
);

// Register the new contract tests in the repo's normal suites.
{
  const rel='scripts/run-tests.js';
  let src=read(rel);
  const offline="    ['scripts/test/canvas-rich-clipboard.test.js', 'Canvas rich hierarchy + HTML/plain clipboard contract'],\n";
  if(!src.includes('canvas-rich-clipboard.test.js')){
    const anchor="    ['scripts/test/canvas-paragraphs.test.js', 'Canvas blank-line round trip'],\n";
    if(!src.includes(anchor))throw new Error('run-tests offline anchor missing');
    src=src.replace(anchor,anchor+offline);
  }
  const browser="    ['scripts/test/canvas-rich-clipboard.browser.js', 'Canvas rich clipboard end-to-end on Topic 1.1'],\n";
  if(!src.includes('canvas-rich-clipboard.browser.js')){
    const anchor="    ['scripts/test/modal-focus.foundations.js', 'foundations modal focus contract'],\n";
    if(!src.includes(anchor))throw new Error('run-tests browser anchor missing');
    src=src.replace(anchor,anchor+browser);
  }
  write(rel,src);
  console.log(`patched ${rel}`);
}

// Document the standard so future capture surfaces inherit the same contract.
{
  const rel='docs/CANVAS-CAPTURE.md';
  let src=read(rel);
  if(!src.includes('## SUBMISSION FORMATTING CONTRACT')){
    const anchor='The parser reads both, plus the plain-text clipboard fallback, plus submissions\ngathered before the manifest existed.\n\n';
    if(!src.includes(anchor))throw new Error('Canvas capture docs anchor missing');
    const section=`## SUBMISSION FORMATTING CONTRACT

The human-readable part of the clipboard document has a fixed hierarchy. These
sizes live **inside the copied HTML as inline styles**; page CSS does not count,
because Canvas and Word receive the clipboard payload rather than BeHistorical's
stylesheet.

- course/topic metadata: **10 pt**
- document/topic title: **24 pt**
- module/activity/question-group heading: **16 pt**
- question/prompt: **11 pt, bold**
- \`My response:\` label: **10.5 pt, bold**
- student response: **11 pt**
- copied timestamp: **10 pt**

The plain-text document is a separate compatibility contract and keeps the same
labels, prompt/response markers, manifest, hashes, expected counts and slot IDs.
Presentation changes must never change that grammar.

Copying is rich-first in three layers:

1. \`ClipboardItem\` writes both \`text/html\` and \`text/plain\`.
2. If that API is unavailable or blocked, a temporary off-screen rich HTML node
   is selected and copied with \`document.execCommand('copy')\`.
3. Only if rich copying fails does the code use \`navigator.clipboard.writeText\`
   with the parser-safe plain document. If clipboard access is blocked entirely,
   the rendered rich output remains selectable for a manual Ctrl-C/Cmd-C.

This contract is implemented in both canonical emitters below, so it applies to
all current and future unit-topic and Foundations assignments that use Gather All
My Work.

---

`;
    src=src.replace(anchor,anchor+section);
    write(rel,src);
    console.log(`patched ${rel}`);
  }
}

console.log('rich Canvas clipboard port applied');
