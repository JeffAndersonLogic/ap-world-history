#!/usr/bin/env node
'use strict';
// The iPad remote's Firebase settings agree with the student backup's, and both
// remote pages default to Firebase.
//
// teacher/remote-firebase.js carries its own copy of the project settings,
// because the teacher pages are plain files with no build step and
// scripts/lib/sync-config.js is a Node module. A copy can drift: a different
// SDK version, or a project id that no longer matches, would leave the remote
// talking to the wrong place with every other check green. So the copy is
// checked against the original here, in the offline suite, with negative
// controls proving each comparison can fail.
const fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '../..');
const sync = require(path.join(ROOT, 'scripts/lib/sync-config.js'));
const remoteSource = fs.readFileSync(path.join(ROOT, 'teacher/remote-firebase.js'), 'utf8');
const hostSource = fs.readFileSync(path.join(ROOT, 'teacher/remote-host.html'), 'utf8');
const ipadSource = fs.readFileSync(path.join(ROOT, 'teacher/ipad-remote.html'), 'utf8');
const rules = fs.readFileSync(path.join(ROOT, 'firestore/firestore.rules'), 'utf8');

const value = (src, key) => { const m = new RegExp(key + ":\\s*'([^']*)'").exec(src); return m ? m[1] : null; };

function check(remote, host, ipad, report) {
  for (const key of ['apiKey', 'authDomain', 'projectId', 'appId']) {
    report(`the remote's ${key} matches the student backup's`, value(remote, key) === sync.firebase[key], value(remote, key));
  }
  report('the remote loads the same pinned SDK version', value(remote, 'sdkVersion') === sync.sdkVersion, value(remote, 'sdkVersion'));
  report('the remote uses the backup\'s tenant', value(remote, 'tenantId') === sync.tenantId, value(remote, 'tenantId'));
  const staff = value(remote, 'staffDomain');
  report('the staff domain is one the backup accepts', sync.allowedDomains.includes(staff), staff);
  report('the staff domain is the one the rules let start a session',
    new RegExp("split\\('@'\\)\\[1\\] == '" + String(staff).replace(/\./g, '\\.') + "'").test(rules), staff);
  report('the staff domain is not the student domain', !/stumail/.test(String(staff)), staff);
  report('the remote imports the SDK only from Google\'s gstatic host',
    /'https:\/\/www\.gstatic\.com\/firebasejs\/'\s*\+\s*CONFIG\.sdkVersion/.test(remote));
  for (const [name, src] of [['remote-host.html', host], ['ipad-remote.html', ipad]]) {
    report(`${name} loads remote-firebase.js`, /<script src="remote-firebase\.js[?"]/.test(src));
    report(`${name} uses Firebase unless the link says relay=ntfy`,
      /const relayKind=params\.get\('relay'\)==='ntfy'\?'ntfy':'firebase';/.test(src));
  }
  report('the iPad sends slide numbers over Firebase, so merged writes lose nothing',
    /const absolute=relayKind==='firebase';/.test(ipad));
}

let failures = 0;
check(remoteSource, hostSource, ipadSource, (label, ok, detail) => {
  console.log(`  ${ok ? 'PASS' : 'FAIL'} ${label}${detail ? `  (${detail})` : ''}`);
  if (!ok) failures++;
});

console.log('\nNegative controls, each must turn a check red');
const MUTATIONS = [
  ['the remote points at another project', r => [r.replace(/projectId: '[^']*'/, "projectId: 'someone-else'"), hostSource, ipadSource]],
  ['the remote pins a different SDK', r => [r.replace(/sdkVersion: '[^']*'/, "sdkVersion: '9.0.0'"), hostSource, ipadSource]],
  ['students may start sessions', r => [r.replace(/staffDomain: '[^']*'/, "staffDomain: 'stumail.zcs.k12.in.us'"), hostSource, ipadSource]],
  ['the laptop goes back to ntfy by default', r => [r, hostSource.replace("?'ntfy':'firebase'", "?'firebase':'ntfy'"), ipadSource]],
  ['the iPad sends "next" over Firebase', r => [r, hostSource, ipadSource.replace("const absolute=relayKind==='firebase';", 'const absolute=false;')]]
];
for (const [name, mutate] of MUTATIONS) {
  const args = mutate(remoteSource);
  let caught = false;
  check(args[0], args[1], args[2], (_l, ok) => { if (!ok) caught = true; });
  const changed = args[0] !== remoteSource || args[1] !== hostSource || args[2] !== ipadSource;
  console.log(`  ${changed && caught ? 'PASS' : 'FAIL'} ${name}${changed ? '' : ' (mutation changed nothing)'}`);
  if (!(changed && caught)) failures++;
}
if (failures) { console.log(`\n${failures} check(s) failed`); process.exit(1); }
console.log('\nThe iPad remote\'s Firebase settings match the student backup\'s.');
