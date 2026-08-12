/* =========================================================
   THE eBOOK MAP

   Traditions and Encounters, on McGraw Hill ConnectED, mapped topic
   by topic to the chapter and pages a student is asked to read.

   THIS IS A TABLE, NOT A FORMULA. The course and the book are
   structured alike but they do not line up one to one: some chapters
   cover two topics, some topics draw on two chapters. That overlap is
   exactly why this cannot be computed from a topic number.

   FILLING IT IN is one sitting with the table of contents. It is the
   highest-leverage hour in the whole automation plan, because the same
   entry feeds three things at once: the homework line on the classroom
   board, the reading named in the Canvas assignment, and the link a
   student clicks to get to the book.

   AN EMPTY ENTRY IS SAFE. A topic with no reading simply produces no
   reading line, on the board or in Canvas. Fill the table in a unit at
   a time; nothing breaks in the meantime.

   After editing, run:

       node scripts/build-course-calendar.js

   ========================================================= */

window.BEHISTORICAL_EBOOK = {

  title: 'Traditions and Encounters: A Global Perspective on the Past',
  edition: '7th edition, AP Edition',
  platform: 'McGraw Hill ConnectED',

  /* ---------------------------------------------------------
     THE LINK, three tiers, best available wins.

     Tier 3 is the front door and always works. Fill `launchUrl` in
     with whatever URL you use to open the book, and every reading
     assignment gets a working link immediately.

     Tier 1 and 2 are per-chapter deep links, and whether they exist
     depends on an answer from McGraw Hill. `deepLinkPattern` takes
     {chapter} and is used only when it is non-empty, so leaving it
     blank falls back to the front door.

     TEST ANY DEEP LINK IN A PRIVATE WINDOW, signed in as a student.
     A link that works from your own already-authenticated browser
     proves nothing, which is the same failure that makes a hand-typed
     Canvas assignment link look fine and resolve to nothing.
     --------------------------------------------------------- */
  launchUrl: '',
  deepLinkPattern: '',

  /* ---------------------------------------------------------
     TOPIC TO READING

     Shape of an entry:

       '1.1': { chapter: 13, pages: '262-271', label: '' }

     `chapter` may be a number or a list, [13, 14].
     `pages` is free text; '262-271' and '262-265, 270' both read fine.
     `label` overrides the whole generated phrase when the reading does
     not fit the chapter-and-pages shape, e.g. 'Theme 1, page 18'.
     --------------------------------------------------------- */
  topics: {
    // Foundations reads the thematic front matter rather than a chapter.
    // These two are carried over from the schedule that was typed by hand.
    'F0': { label: 'Theme 1, page 18' },
    'F1': { label: 'Theme 2, Cultural Developments and Interactions, pages 19 and 20' },
    'F2': {},
    'F3': {},
    'F4': {},
    'F5': {}

    // Units 1 through 9 go here. Add them a unit at a time:
    //
    //   '1.1': { chapter: 0, pages: '' },
    //   '1.2': { chapter: 0, pages: '' },
  }
};
