/* =============================================================================
   EVENT 01, THE RISE OF SOCIAL MEDIA
   File: assets/data/ce-event-01-social-media.js

   This is the shape every event page reads. To build Event 02, copy this file,
   change the strings, and point a new page at it. Nothing in the renderer is
   specific to social media.

   Editing notes for the teacher
     trace[]    Must run newest first. Card colors interpolate from --signal at
                index 0 to --archive at the last index, so the order is the
                pedagogy. Add or remove cards freely, the gradient re-spaces.
     scales[]   Exactly four, in this order: town, state, nation, world.
     brief      Swap clip.url and read.url each time you teach this. CNN 10 and
                The Week both rotate; the prompt underneath does not.
     THE NOW CARD AGES FASTEST. trace[0] and scales[] cite laws and fights from
     the 2024 to 2026 window. Reread them before the semester starts.
   ========================================================================== */

window.CE_EVENT = {

  id: '01',
  slug: 'social-media',
  strand: 'Technology & Society',
  headline: 'The Rise of Social Media',
  dek: 'We start with today’s fight over it, then trace it back to where it actually began.',
  // Shown in the hero dateline as "Traced backward to 1833".
  tracedTo: '1833',
  standfirst:
    'Nobody set out to build a machine that would end up in a state law about ' +
    'phones in classrooms. This trace follows the actual chain, one link at a ' +
    'time, from the argument in your building right now to a printing shop in ' +
    'lower Manhattan in 1833.',

  /* ── 01, THE BRIEF ────────────────────────────────────────────────────── */
  brief: {
    clip: {
      label: 'CNN 10',
      title: 'Today’s episode',
      note: 'Ten minutes. Watch for any story that touches platforms, phones, or attention.',
      url: 'https://www.cnn.com/cnn10',
      cta: 'Open CNN 10'
    },
    read: {
      label: 'The Week',
      title: 'This week’s read',
      note: 'Find one article on social media regulation, teen mental health, or a platform in court. Read the whole thing, including who is quoted.',
      url: 'https://theweek.com',
      cta: 'Open The Week'
    },
    prompt:
      'What is the argument today? Write one sentence naming the two sides and ' +
      'what each one actually wants. Not what they say about each other, what ' +
      'they want.'
  },

  /* ── 02, WHERE IN THE WORLD ───────────────────────────────────────────── */
  scaleIntro:
    'Same event, four scales. Notice that the story is not simply bigger as you ' +
    'zoom out. It changes: who has power over it changes, and so does what ' +
    '“solving it” would even mean.',

  scales: [
    {
      key: 'zionsville',
      label: 'Zionsville',
      title: 'The phone in the pocket, in this building',
      body:
        'The argument arrives here as a rule about where your phone is during ' +
        'fourth period. Every Indiana district had to write one. Ours is a local ' +
        'decision about attention, made in response to a problem nobody in this ' +
        'building invented.',
      ask: 'Who at Zionsville actually decided the policy, and what evidence did they use?'
    },
    {
      key: 'indiana',
      label: 'Indiana',
      title: 'A state law, passed in 2024',
      body:
        'Indiana House Enrolled Act 1230, signed in March 2024, required every ' +
        'school corporation in the state to adopt a policy prohibiting student ' +
        'use of wireless communication devices during instructional time. The ' +
        'state took the decision out of individual classrooms.',
      ask: 'Why did the legislature think this needed to be a law and not a school rule?'
    },
    {
      key: 'us',
      label: 'United States',
      title: 'Liability, and a forced sale',
      body:
        'Two national fights. Section 230 of the Communications Decency Act ' +
        '(1996) says platforms are generally not treated as the publisher of ' +
        'what users post, which is the legal floor the whole industry stands on. ' +
        'And in April 2024 Congress passed a law requiring TikTok’s Chinese ' +
        'owner to divest or be banned; the Supreme Court upheld it in January 2025.',
      ask: 'One fight is about what platforms owe users. The other is about who owns the platform. Which one is really about social media?'
    },
    {
      key: 'world',
      label: 'The World',
      title: 'Other countries drew harder lines',
      body:
        'The European Union’s Digital Services Act became fully applicable in ' +
        'February 2024, forcing large platforms to open their risk assessments to ' +
        'regulators. Australia went further, passing a minimum age of 16 for social ' +
        'media accounts in November 2024. Meanwhile some governments simply shut ' +
        'the network off during protests.',
      ask: 'Three very different answers to one problem. What does each country appear to believe the problem is?'
    }
  ],

  /* ── 03, THE TRACE ────────────────────────────────────────────────────── */
  traceIntro:
    'Read down. Every card is caused by the one beneath it. If you cannot say ' +
    'out loud how a card produced the card above it, the link is not real yet.',

  trace: [
    {
      era: 'Now',
      years: '2024 to 2026',
      label: 'The present fight',
      summary:
        'Schools ban phones, states pass age limits, and platforms are in court ' +
        'in half a dozen countries at once. The argument is no longer whether ' +
        'social media affects teenagers. It is who gets to do something about it: ' +
        'parents, principals, legislatures, or the companies themselves.',
      source: 'Indiana HEA 1230 (2024); Protecting Americans from Foreign Adversary Controlled Applications Act (2024); TikTok v. Garland (2025).'
    },
    {
      era: 'Recent',
      years: '2016 to 2023',
      label: 'The algorithm takes the wheel',
      summary:
        'Feeds stopped being chronological. Instagram and Twitter both moved to ' +
        'ranked feeds in 2016, which meant a machine, not your friends, decided ' +
        'what you saw and in what order. Then the receipts arrived: Cambridge ' +
        'Analytica in 2018, and in 2021 Frances Haugen released Meta’s own ' +
        'internal research on what Instagram was doing to teenage girls.',
      source: 'The Facebook Files, Wall Street Journal, September 2021; Haugen testimony to the US Senate, 5 October 2021.'
    },
    {
      era: 'Earlier',
      years: '2004 to 2012',
      label: 'The engine gets built',
      summary:
        'Four inventions in eight years turned a website into a habit. Facebook ' +
        'opens in 2004. News Feed in 2006 puts everyone’s activity in one ' +
        'scrolling column. The iPhone in 2007 puts that column in your pocket for ' +
        'all sixteen waking hours. The Like button in 2009 finally makes attention ' +
        'countable, which means it can be optimized, which means it can be sold.',
      source: 'Facebook News Feed launch, 5 September 2006; Like button launch, 9 February 2009; infinite scroll designed by Aza Raskin, 2006.'
    },
    {
      era: 'Earlier',
      years: '1997 to 2003',
      label: 'Somebody patents the friend list',
      summary:
        'The specific idea of a profile plus a visible list of people you know ' +
        'shows up at SixDegrees.com in 1997. Andrew Weinreich patented it. It ' +
        'failed commercially, too few people were online, but Friendster in 2003 ' +
        'and MySpace the same year reused the exact structure. Blogger in 1999 ' +
        'had already made publishing to strangers free and instant.',
      source: 'US Patent 6,175,831, “Method and apparatus for constructing a networking database and system,” filed 1997.'
    },
    {
      era: 'Deeper',
      years: '1978 to 1995',
      label: 'Before the web, the boards',
      summary:
        'Online community is older than the web. During the Chicago blizzard of ' +
        '1978, Ward Christensen and Randy Suess built CBBS, a computer you could ' +
        'phone into and leave a message on. Usenet followed in 1980, the WELL in ' +
        '1985, and GeoCities gave ordinary people a homepage in the mid-nineties. ' +
        'The behavior existed for twenty years before the business model found it.',
      source: 'Christensen and Suess, “Hobbyist Computerized Bulletin Board,” Byte, November 1978.'
    },
    {
      era: 'Origin',
      years: '1833 and 1969',
      label: 'Where it actually began',
      summary:
        'Two separate origins had to meet. In 1969 ARPANET connected its first ' +
        'two computers, and by 1989 Tim Berners-Lee had proposed the web on top of ' +
        'it: the wire. But the money came from somewhere much older. In 1833 ' +
        'Benjamin Day sold the New York Sun for one penny, less than it cost to ' +
        'print, and made his profit from advertisers instead. That was the ' +
        'discovery: you do not sell the paper to the reader, you sell the reader ' +
        'to the advertiser. Social media is that 1833 business model running on ' +
        'the 1969 wire.',
      source: 'The Sun (New York), first issue, 3 September 1833; ARPANET first host-to-host message, 29 October 1969; Berners-Lee, “Information Management: A Proposal,” CERN, March 1989.'
    }
  ],

  /* ── 04, EVIDENCE LAB ─────────────────────────────────────────────────── */
  evidenceIntro:
    'Five documents from the roots, not the retellings. Every one of these was ' +
    'written before anyone knew what it would become, which is exactly what ' +
    'makes it useful. Teacher: confirm each link resolves before the block.',

  evidence: [
    {
      title: 'The Sun, first issue',
      author: 'Benjamin Day, New York',
      date: '3 September 1833',
      what:
        'A four-page paper sold for a penny, under the motto “It Shines for ' +
        'All.” Count the advertising against the news.',
      task:
        'The paper cost more to print than it sold for. Using only the page in ' +
        'front of you, work out who Day’s actual customer was.',
      url: 'https://chroniclingamerica.loc.gov/lccn/sn83030272/',
      host: 'Chronicling America, Library of Congress'
    },
    {
      title: 'The Computer as a Communication Device',
      author: 'J. C. R. Licklider and Robert Taylor',
      date: 'April 1968',
      what:
        'Two engineers predict online communities a year before ARPANET sends its ' +
        'first message, and they get the shape of it startlingly right.',
      task:
        'They promise communities “not of common location, but of common ' +
        'interest.” Mark every prediction that came true and every one that ' +
        'did not. What did they not see coming?',
      url: 'https://worrydream.com/refs/Licklider_1968_-_The_Computer_as_a_Communication_Device.pdf',
      host: 'Science and Technology, April 1968'
    },
    {
      title: 'Hobbyist Computerized Bulletin Board',
      author: 'Ward Christensen and Randy Suess',
      date: 'Byte magazine, November 1978',
      what:
        'The two men who built the first public dial-up bulletin board explain how ' +
        'and why, in a hobbyist magazine, for other hobbyists.',
      task:
        'Read their stated purpose. Nothing about advertising, growth, or scale ' +
        'appears anywhere. When does that change, and what changed it?',
      url: 'https://archive.org/details/byte-magazine-1978-11',
      host: 'Internet Archive'
    },
    {
      title: 'Information Management: A Proposal',
      author: 'Tim Berners-Lee, CERN',
      date: 'March 1989',
      what:
        'The memo that proposed the World Wide Web. His manager’s handwritten ' +
        'note on it reads “vague but exciting.”',
      task:
        'Berners-Lee designed the web to be open and unowned. Trace one specific ' +
        'decision in this document that made the platforms of 2004 possible.',
      url: 'https://www.w3.org/History/1989/proposal.html',
      host: 'W3C'
    },
    {
      title: 'Method and apparatus for constructing a networking database and system',
      author: 'Andrew Weinreich, SixDegrees.com',
      date: 'Filed 1997, US Patent 6,175,831',
      what:
        'The friend list, written down in patent language: profiles, connections, ' +
        'and degrees of separation between people.',
      task:
        'This describes Facebook seven years before Facebook. Why did the patent ' +
        'holder lose and the 2004 version win? Name a cause outside the idea itself.',
      url: 'https://patents.google.com/patent/US6175831A/en',
      host: 'Google Patents'
    }
  ],

  /* ── 05, YOUR BEAT CHECKPOINT ─────────────────────────────────────────── */
  checkpoint: {
    milestone: 'Checkpoint 1 of 6, name your event and find your NOW',
    promptId: 'event-01-step-05',
    responseType: 'Your Beat Checkpoint',
    skills: ['Causation', 'Sourcing', 'Contextualization'],
    prompt:
      'Name the story you are going to trace all semester. Then do two things ' +
      'in writing. First, describe the NOW card: what is happening with your ' +
      'story this month, and what is the argument about it? Second, name one ' +
      'link backward, a single earlier event you already suspect caused it, and ' +
      'say how you would find out whether you are right.',
    checklist: [
      'A specific named event, not a topic. “The NBA’s new media deal” works. “Sports” does not.',
      'Something with a story published about it in the last 30 days.',
      'One backward link, stated as a cause, not a resemblance.',
      'One source you could actually get your hands on.'
    ]
  },

  /* ── CULTURE BEAT ─────────────────────────────────────────────────────── */
  culture: {
    note: 'Rotates every Monday. This week’s three tie back to Event 01.',
    items: [
      {
        kind: 'Song',
        title: 'The one that broke on the feed',
        by: 'Pick the current chart entry that got there through a platform',
        why: 'Trace the distribution, not the song. Who decided you heard it, and how do they get paid?'
      },
      {
        kind: 'Book',
        title: 'A book about attention',
        by: 'Instructor’s pick, changes each cycle',
        why: 'Every generation writes one of these. Compare its warning to the warning written 40 years earlier.'
      },
      {
        kind: 'Bestseller',
        title: 'Current New York Times list, any category',
        by: 'The list itself is the source',
        why: 'The bestseller list is a ranking algorithm from 1931. Ask it the same questions you ask a feed.'
      }
    ]
  }
};
