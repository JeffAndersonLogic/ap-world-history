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
// **2026-09-06, Topic 1.6.** A teacher reported the Bayeux Tapestry card
// rendering as blank fallback art. `--describe 1.6` confirmed why:
// `Bayeux_Tapestry.jpg` does not exist on Commons at all, "(no title)". The
// tapestry is hosted there as individual numbered scene photographs, not one
// composite file, so a plausible single filename was never real, the same
// shape of bug as Topic 1.5's Zimbabwe_Bird.jpg on 2026-09-05.

module.exports = [
  {
    topic: '1.6',
    replaces: 'Bayeux Tapestry',
    file: 'Tapisserie de Bayeux - Scene 51 -52 Norman knights and archers at the Battle of Hastings.jpg',
    search: 'Bayeux Tapestry knights battle Hastings scene',
    title: 'Bayeux Tapestry',
    caption: 'Political continuity evidence. The Bayeux Tapestry was embroidered in the 11th century, before Topic 1.6, and depicts elite warfare, mounted nobles, and contests over rulership.',
    prompt: 'NOTICE one detail about warriors, leaders, or military service. What can you INFER about elite political relationships that continued into the period after c. 1200? What can this earlier source not prove about later medieval Europe by itself?'
  }
];
