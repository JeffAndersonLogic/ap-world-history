/**
 * canvas-zip.js
 *
 * Reads a Canvas "Download Submissions" zip with no library.
 *
 * WHY NOT A LIBRARY
 *
 * The Skills Lens is a single self-contained file a teacher downloads once and
 * double-clicks. It has no build step at the teacher's end, no npm, and a
 * Content-Security-Policy of `default-src 'none'`, so it cannot pull a script
 * from a CDN even if that were a good idea. Inlining a general-purpose zip
 * library would add a few hundred kilobytes of code handling encryption, spanned
 * archives and ZIP64 for an input that is always one Canvas export.
 *
 * The whole format we need is: find the central directory at the end, walk its
 * entries, and inflate each one. `DecompressionStream('deflate-raw')` does the
 * actual decompression, and it is native in every browser this runs in and in
 * Node 18 and up, so the same code is testable offline.
 *
 * WHY THE CENTRAL DIRECTORY AND NOT THE LOCAL HEADERS
 *
 * A local file header may carry zeros for the sizes and set bit 3, deferring the
 * real numbers to a data descriptor that sits *after* the compressed bytes. That
 * is what a zip written by a streaming writer looks like, and Canvas generates
 * its export on the fly. Reading local headers means guessing where an entry
 * ends. The central directory always has the true sizes, so it is the only
 * honest place to read from.
 *
 * Pure and isomorphic: bytes in, {name, text} out. No fs, no DOM, no network.
 */

'use strict';

(function (root, factory) {
  const API = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = API;
  else root.BEHISTORICAL_CANVAS_ZIP = API;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {

const EOCD_SIG = 0x06054b50;   // end of central directory
const CDH_SIG  = 0x02014b50;   // central directory file header
const LFH_SIG  = 0x04034b50;   // local file header
const ZIP64_EOCD_LOCATOR_SIG = 0x07064b50;

function u16(v, at) { return v.getUint16(at, true); }
function u32(v, at) { return v.getUint32(at, true); }

// The EOCD is last, but a zip comment can follow it, so it has to be searched
// for backwards. The comment length field is 16 bits, hence the 64KB window.
function findEocd(view) {
  const max = Math.min(view.byteLength, 0xffff + 22);
  for (let i = 22; i <= max; i++) {
    const at = view.byteLength - i;
    if (u32(view, at) === EOCD_SIG) return at;
  }
  return -1;
}

class ZipError extends Error {
  constructor(message, hint) {
    super(message);
    this.name = 'ZipError';
    this.hint = hint || '';
  }
}

/**
 * Lists what is in the archive without decompressing anything.
 * Returns [{ name, compressedSize, size, method, offset }].
 */
function listEntries(bytes) {
  const buf = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  if (buf.byteLength < 22) {
    throw new ZipError('This file is too small to be a zip archive.',
      'Check that the download finished.');
  }
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);

  const eocd = findEocd(view);
  if (eocd === -1) {
    // A .zip that is really a folder, or a half-finished download, both land here.
    throw new ZipError('This does not look like a zip archive.',
      'Canvas gives you the zip from Assignment then Download Submissions. If you already unzipped it, drop the responses.csv instead.');
  }

  let count = u16(view, eocd + 10);
  let cdOffset = u32(view, eocd + 16);

  // ZIP64 only shows up past 65535 entries or 4GB, neither of which a class set
  // reaches. Say so plainly instead of reading garbage offsets.
  if (count === 0xffff || cdOffset === 0xffffffff) {
    const locAt = eocd - 20;
    if (locAt >= 0 && u32(view, locAt) === ZIP64_EOCD_LOCATOR_SIG) {
      throw new ZipError('This is a ZIP64 archive, which this reader does not handle.',
        'Run scripts/parse-canvas-submissions.js on the unzipped folder instead.');
    }
  }

  const entries = [];
  let at = cdOffset;
  for (let i = 0; i < count; i++) {
    if (at + 46 > buf.byteLength || u32(view, at) !== CDH_SIG) {
      throw new ZipError(`The zip directory is damaged at entry ${i + 1} of ${count}.`,
        'Try downloading the submissions again.');
    }
    const method = u16(view, at + 10);
    const compressedSize = u32(view, at + 20);
    const size = u32(view, at + 24);
    const nameLen = u16(view, at + 28);
    const extraLen = u16(view, at + 30);
    const commentLen = u16(view, at + 32);
    const offset = u32(view, at + 42);
    const name = new TextDecoder('utf-8').decode(buf.subarray(at + 46, at + 46 + nameLen));
    entries.push({ name, method, compressedSize, size, offset });
    at += 46 + nameLen + extraLen + commentLen;
  }
  return entries;
}

// The local header's name and extra lengths are the only fields we trust from
// it; everything else came from the central directory.
function payloadOf(buf, view, entry) {
  const at = entry.offset;
  if (at + 30 > buf.byteLength || u32(view, at) !== LFH_SIG) {
    throw new ZipError(`Could not locate "${entry.name}" inside the archive.`,
      'Try downloading the submissions again.');
  }
  const nameLen = u16(view, at + 26);
  const extraLen = u16(view, at + 28);
  const from = at + 30 + nameLen + extraLen;
  return buf.subarray(from, from + entry.compressedSize);
}

async function inflateRaw(bytes) {
  if (typeof DecompressionStream !== 'function') {
    throw new ZipError('This browser cannot decompress zip files.',
      'Unzip the download yourself and drop responses.csv, or use a current Chrome, Edge, Firefox or Safari.');
  }
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw'));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

/**
 * Reads every entry matching `filter` and decodes it as UTF-8 text.
 *
 * filter: (name) => boolean, so the caller decides what counts as a submission
 * onProgress: (done, total) => void, because a class set is 30 inflate calls and
 *             a silent page looks hung
 *
 * Returns { files: [{name, text}], skipped: [{name, why}] }.
 */
async function readTextEntries(bytes, filter, onProgress) {
  const buf = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  const view = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  const all = listEntries(buf);

  const wanted = all.filter(e => !e.name.endsWith('/') && (!filter || filter(e.name)));
  const files = [];
  const skipped = [];
  // Anything present but not a submission is reported, not silently dropped, so
  // a teacher who zipped the wrong folder finds out from the page.
  all.forEach(e => {
    if (e.name.endsWith('/') || wanted.indexOf(e) !== -1) return;
    skipped.push({ name: e.name, why: 'not a Canvas text submission' });
  });

  const decoder = new TextDecoder('utf-8');
  for (let i = 0; i < wanted.length; i++) {
    const entry = wanted[i];
    try {
      const raw = payloadOf(buf, view, entry);
      let out;
      if (entry.method === 0) out = raw;                    // stored
      else if (entry.method === 8) out = await inflateRaw(raw);  // deflate
      else throw new ZipError(`compression method ${entry.method}`, '');
      files.push({ name: entry.name, text: decoder.decode(out) });
    } catch (e) {
      // One unreadable file must not cost the other twenty-nine.
      skipped.push({ name: entry.name, why: e.message });
    }
    if (onProgress) onProgress(i + 1, wanted.length);
  }

  return { files, skipped, total: all.length };
}

return { listEntries, readTextEntries, inflateRaw, ZipError };

});
