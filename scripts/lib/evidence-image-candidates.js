'use strict';
// Staged, UNVERIFIED image candidates for Module 07 evidence pools.
//
// **Nothing in this file is loaded by any page, and nothing here is true until
// scripts/source-evidence-images.js says so.** It is a list of pictures that
// ought to exist on Wikimedia Commons for a topic that is thin on objects, each
// with a filename written from memory and a search query to fall back on when
// that filename is wrong.
//
// It exists because of the failure this repo has already shipped twice. A
// Commons filename typed from memory looks exactly like a correct one: every
// structural check passes, validate.js confirms the name is well formed, and the
// student gets local fallback artwork and no evidence at all. Topic 1.5 was
// graded A on 2026-09-05 with two dead Commons links in its pool. An authentic
// image that 404s is worse than a text card, because the card at least says
// something.
//
// So the pipeline splits the question in two, the same way the authenticity
// report and the authored-pool check split theirs:
//
//   the machine decides   does this file exist, and does that URL return image
//                         bytes to a browser. Only a network can answer that,
//                         and a candidate that cannot be fetched never reaches a
//                         lesson page.
//   a person decides      does the picture show what the caption claims. A file
//                         that resolves is not the same thing as the right
//                         picture, and a wrong picture under a confident caption
//                         is the defect the Image Contract calls out: prefer an
//                         empty url to a picture that does not match its caption.
//
// That is why `search` is here beside `file`. A dead guess is not a dead end,
// it is a query, and the tool prints the files Commons actually has so a person
// can look at them and paste the right name back in here.
//
// AFTER A CANDIDATE LANDS, DELETE IT. This file is a staging area, not a
// record of what the course uses. A landed candidate left here is a second copy
// of a card whose first copy is the renderer config, and the two can then
// disagree with nothing to report it.
//
// Fields:
//   topic      the topic key, '5.3'.
//   replaces   the exact `title` of the card in that topic's pool to swap out,
//              or null to append. Appending is refused when the pool already
//              holds six cards, which is the contract's ceiling.
//   file       the proposed Commons filename, as it appears after File:.
//   search     what to ask Commons when `file` turns out not to exist.
//   title, caption, prompt
//              the card as it should read. The caption identifies the object
//              and never supplies the conclusion; the prompt runs
//              NOTICE -> INFER, per docs/module-07-scaffolding-standard.md.
//
// **Empty, and that is the resting state.** The Unit 5 batch of 2026-09-06 is
// described in docs/module-07-units-5-6-8-9-conversion.md.
//
// **2026-09-06/07, a site-wide check-image-urls.js run found two genuinely
// dead pictures, both in Unit 6.** Yaa_Asantewaa.jpg (Topics 6.3, 6.8) and
// Chinatown_San_Francisco_1880.jpg (Topic 6.7) both 404. This tool was used
// only to run the search fallback and find real filenames; because Unit 6's
// pools belong to build-unit6.js's own MODULE07_EVIDENCE and MEDIA maps, the
// actual fix landed by hand in that generator and was rebuilt, never applied
// by this tool (which correctly refuses to touch Units 6 and 9).
//
// Chinatown resolved: a genuine Harper's Weekly illustration dated exactly
// 1880-03-20, a stronger fit than a plain photograph would have been. Five
// search rounds found no verified Commons photograph of Yaa Asantewaa herself
// under any name or spelling tried, only a modern museum building and family
// house; that card became a documentary text record of her exile instead of a
// forced or unverified picture, the correct outcome per the Image Contract.

module.exports = [];
