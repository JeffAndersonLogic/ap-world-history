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
// The Unit 5 batch below is the first use. Unit 5 is the weakest unit in the
// course on authenticity: seven of its ten topics carry one object, their own
// instructional map, because the pictures for the Enlightenment, the Atlantic
// revolutions and industrialization were never in this repository to recover.
// See docs/module-07-units-5-6-8-9-conversion.md.

module.exports = [
  // ── Topic 5.1, the Enlightenment ────────────────────────────────────────
  {
    topic: '5.1',
    replaces: null,
    file: 'Salon_de_Madame_Geoffrin.jpg',
    search: 'Lemonnier salon Madame Geoffrin lecture Orphelin de la Chine',
    title: 'An Enlightenment salon',
    caption: 'Anicet Charles Gabriel Lemonnier, painted in 1812, reconstructing a reading in Madame Geoffrin’s Paris salon of the 1750s. A later picture of an earlier room.',
    prompt: 'NOTICE who is in the room, who is seated where, and who is not present. INFER what kind of space Enlightenment argument actually happened in. This was painted about sixty years after the scene: what does that cost you as evidence?'
  },

  // ── Topic 5.3, industrialization begins in Britain ──────────────────────
  {
    topic: '5.3',
    replaces: 'Coal and iron near transport routes',
    file: 'Philipp_Jakob_Loutherbourg_d._J._002.jpg',
    search: 'Loutherbourg Coalbrookdale',
    title: 'Coalbrookdale by Night, 1801',
    caption: 'Philip James de Loutherbourg, 1801, showing the Bedlam Furnaces in the Severn Gorge. Painted while the works were running.',
    prompt: 'NOTICE what is producing the light in this picture, and what time of day it is. INFER what changed about when and how long work could happen. What would this painter have gained by making the scene more dramatic than it was?'
  },

  // ── Topic 5.4, industrialization spreads ────────────────────────────────
  {
    topic: '5.4',
    replaces: 'Russia builds the Trans-Siberian',
    file: 'Tomioka_Silk_Mill.JPG',
    search: 'Tomioka silk',
    title: 'Tomioka Silk Mill',
    caption: 'The Japanese government’s model silk filature, opened in 1872 with French machinery, a French engineer and a largely female workforce. The building survives and is photographed here as it stands.',
    prompt: 'NOTICE the construction: the brick, the window rhythm, the length of the range. INFER what the Meiji state was importing besides machinery, and what it wanted the mill to demonstrate beyond producing silk. This is the model factory, photographed long after: what does it not tell you about the ordinary ones?'
  },

  // ── Topic 5.5, technology of the second industrial revolution ───────────
  {
    topic: '5.5',
    replaces: 'Suez Canal opens',
    file: 'Inauguration_et_ouverture_à_la_navigation_du_Canal_de_Suez,_17_novembre_1869,_ND314.jpg',
    search: 'Suez Canal 1869 opening',
    title: 'The Suez Canal opens, 1869',
    caption: 'The opening procession of November 1869. The canal was cut through Egyptian territory with Egyptian labour and controlled by a French company.',
    prompt: 'NOTICE whose ships and whose dignitaries are at the centre of this scene. INFER who the canal was built to serve. What is missing from a picture of an opening ceremony that you would need to judge the cost?'
  },
  {
    topic: '5.5',
    replaces: 'Bessemer process',
    file: 'Bessemer_converter.jpg',
    search: 'Bessemer converter steel works nineteenth century photograph',
    title: 'A Bessemer converter in operation',
    caption: 'The vessel that made bulk steel cheap by blowing air through molten iron. Steel fell from a specialty metal to a structural one within a generation.',
    prompt: 'NOTICE the scale of the vessel against the people working near it. INFER what changed about what could now be built, and about what the work was like. What does the photograph not show you about who owned it?'
  },

  // ── Topic 5.6, the state and industrialization ──────────────────────────
  {
    topic: '5.6',
    replaces: 'Iwakura Mission',
    file: 'Iwakura_mission.jpg',
    search: 'Iwakura mission 1872 photograph five members Western dress',
    title: 'The Iwakura Mission, 1872',
    caption: 'Five leaders of the Meiji government photographed abroad during a two-year study tour of the United States and Europe. Iwakura Tomomi is in Japanese dress; the others are not.',
    prompt: 'NOTICE what each man is wearing and where he is standing. INFER what decision about Japan’s future the photograph is making visible. A posed photograph is an argument: what is this one arguing?'
  },
  {
    topic: '5.6',
    replaces: 'Muhammad Ali’s Egyptian factories',
    file: 'ModernEgypt,_Muhammad_Ali_by_Auguste_Couder,_BAP_17996.jpg',
    search: 'Muhammad Ali Pasha of Egypt portrait Auguste Couder 1841',
    title: 'Muhammad Ali of Egypt',
    caption: 'A commissioned portrait of the Ottoman governor who built state arms factories, textile mills and a conscript army in Egypt from the 1810s.',
    prompt: 'NOTICE how the sitter is dressed, seated and lit, and what he is holding. INFER what claim about his authority the portrait is composed to make. A ruler chooses how a commissioned portrait shows him: how does that make it evidence rather than decoration?'
  },

  // ── Topic 5.7, capital, firms and markets ───────────────────────────────
  {
    topic: '5.7',
    replaces: 'Commodity exchanges and price information',
    file: 'The_Bosses_of_the_Senate_by_Joseph_Keppler.jpg',
    search: 'Bosses of the Senate Keppler Puck 1889 trusts cartoon',
    title: '“The Bosses of the Senate”, 1889',
    caption: 'Joseph Keppler in Puck, 1889. The trusts are drawn as figures in the Senate chamber; the public entrance is marked closed.',
    prompt: 'NOTICE the relative size of the figures and what the two doors are labelled. INFER what claim the cartoonist is making about corporate scale and government. A cartoon is an accusation: what evidence would you need to test it?'
  },
  {
    topic: '5.7',
    replaces: 'Standard Oil scales up',
    file: 'Standard_oil_octopus_loc_color.jpg',
    search: 'Standard Oil octopus Puck cartoon Udo Keppler 1904',
    title: 'Standard Oil as an octopus',
    caption: 'Udo Keppler in Puck, 1904, published two years before the federal antitrust suit against Standard Oil.',
    prompt: 'NOTICE what the tentacles are holding and what one of them is reaching towards. INFER what the cartoonist believed vertical integration had reached beyond the oil business. This was drawn after 1900: how does that change what it can be evidence for in this unit?'
  },

  // ── Topic 5.8, responses to industrial capitalism ───────────────────────
  {
    topic: '5.8',
    replaces: 'Trade Union Act of 1871',
    file: 'William_Edward_Kilburn_-_View_of_the_Great_Chartist_Meeting_on_Kennington_Common_-_Google_Art_Project.jpg',
    search: 'Chartist meeting Kennington Common 1848 daguerreotype William Kilburn',
    title: 'The Chartist meeting at Kennington Common, 1848',
    caption: 'A daguerreotype of the Chartist gathering of 10 April 1848, one of the earliest photographs of a crowd. The Chartists were demanding the vote for working men.',
    prompt: 'NOTICE how many people are present and how they are dressed. INFER what kind of movement this was and who was in it. The photographer was working for the Crown: how does knowing that change how you read the picture?'
  },
  {
    topic: '5.8',
    replaces: 'Bismarck’s social insurance',
    file: 'Punch_1843_-_Reichtum_und_Armut.png',
    search: 'Punch Capital and Labour',
    title: '“Capital and Labour”, Punch, 1843',
    caption: 'A Punch cartoon contrasting a wealthy household above ground with the mine workings beneath it, published the year after the Mines Act barred women and young children underground.',
    prompt: 'NOTICE what is happening in the upper half and the lower half, and how the two are joined. INFER the argument the cartoonist is making about where wealth comes from. What does a satirical magazine tell you about its readers as well as its subject?'
  }
];
