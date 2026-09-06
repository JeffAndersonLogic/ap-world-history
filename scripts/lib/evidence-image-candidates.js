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
// **2026-09-06, a site-wide check-image-urls.js run found two genuinely dead
// pictures, both in Unit 6, which build-unit6.js generates.** These two
// candidates exist ONLY to run the search fallback and find the real
// filenames; Units 6 and 9 are refused by source-evidence-images.js's --apply
// (their pools belong to the generator's own MODULE07_EVIDENCE map), so once
// the real filenames are confirmed here, the fix has to be hand-applied to
// scripts/build-unit6.js and the unit rebuilt, never applied by this tool.

module.exports = [
  {
    topic: '6.3',
    replaces: 'Yaa Asantewaa',
    file: 'Yaa_Asantewaa.jpg',
    search: 'Yaa Asantewaa',
    title: 'Yaa Asantewaa',
    caption: 'Photograph of the Asante queen mother who led the 1900 War of the Golden Stool against British forces.',
    prompt: 'NOTICE how she is dressed and presented. INFER what authority she is claiming in the image. What does a portrait not tell you about how many followed her, or why?'
  },
  {
    topic: '6.7',
    replaces: 'Chinatown, San Francisco, 1880',
    file: 'Chinatown_San_Francisco_1880.jpg',
    search: 'Chinatown San Francisco',
    title: 'Chinatown, San Francisco, 1880',
    caption: 'Photograph of a migrant neighbourhood two years before Chinese immigration was restricted by federal law.',
    prompt: 'NOTICE what the street shows about how the community organized itself. INFER what institutions a migrant population builds when the surrounding society excludes it. What does an outsider\'s photograph of a neighbourhood risk missing?'
  }
];
