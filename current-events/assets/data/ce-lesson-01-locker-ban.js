/* =============================================================================
   BEHISTORICAL CURRENT EVENTS, LESSON 1 DATA
   File: assets/data/ce-lesson-01-locker-ban.js

   Reverse History: The Ban in Your Locker.

   THIS FILE IS THE MODEL. Every later lesson is this shape with different
   content: a meta block, targets, skills, eight steps, lecture cards, a source
   library, and three coach sets. The renderer never needs to change.

   ── HOW A STEP IS BUILT ──────────────────────────────────────────────────────
   Each entry in `steps` carries:
     id, label, title, cardDesc   the module card
     question                     the backward question, steps 2 to 6 only
     narrative[]                  blocks: p | h4 | quote | ul | note | todo
     assessment                   optional: shortAnswer, mcqs, showAssume,
                                  likert, requirements, topBand, funFacts
     capture                      optional: one Google Form capture point
     coach                        optional: 'A' | 'B' | 'C'

   Prose in this repo carries no em or en dashes. Commas, colons, periods and
   parentheses instead. Dashes are fine in titles, dates and ranges.

   ── OPEN VERIFICATION FLAGS ──────────────────────────────────────────────────
   Three blocks below are `type: 'todo'` and render as visibly marked teacher
   placeholders. They are unresolved on purpose and must not be quietly filled:
     Step 1  the verbatim ZCS handbook language
     Step 4  the primary-source excerpt (see the copyright note there)
     Step 5  the Pew teen smartphone ownership figures
   The full flag list lives in teacher/lesson-01-orientation.html.
   ========================================================================== */

window.CE_LESSON = {

  meta: {
    course: 'BEHISTORICAL CURRENT EVENTS',
    lesson: 'Lesson 1',
    strand: 'Technology & Society',
    title: 'Reverse History: The Ban in Your Locker',
    subtitle: 'From a locked pouch in Zionsville, Indiana, back to a keynote stage in 2007.',
    standfirst: `Nobody set out to write a law about your lunch period. This trace follows the
      actual chain, one link at a time, from the container in your first-period classroom to
      the morning a man in a black turtleneck walked onstage in San Francisco.`,
    grades: 'Grades 9 to 12',
    duration: '2 to 3 class periods',
    tracedTo: '2007',
    coachUrl: 'https://student.magicschool.ai/s/login?joinCode=czwb9Q',
    canvasNote: 'Organize your thinking here. Submit your final argument in Canvas.',
    // Flag 6. Rendered on every coach bridge and at the foot of Steps 4 and 7.
    counselorNote: `This lesson analyzes data about teenage mental health. If any of it hits
      close to home, you can reach a school counselor today. Ask any teacher or go to the
      main office, and you will not need to explain why first.`
  },

  learningTargets: [
    {
      target: 'I can trace a current event backward through a chain of causes and state each link as a cause rather than a resemblance.',
      skill: 'Causation'
    },
    {
      target: 'I can separate what a source shows from what it assumes, and explain why that distinction changes how much the source can prove.',
      skill: 'Sourcing'
    },
    {
      target: 'I can explain why researchers who agree on a number can still disagree about what it means.',
      skill: 'Contextualization'
    },
    {
      target: 'I can take a defensible position on a contested causal chain, address the strongest opposing view, and concede what the other side gets right.',
      skill: 'Argumentation'
    }
  ],

  successCriteria: [
    {
      criteria: 'I can name each of the six links between the 2007 iPhone and the bell-to-bell ban, and say what caused what.',
      skill: 'Causation'
    },
    {
      criteria: 'I can sort statements from a source into what it shows and what it assumes, and identify where the evidence stops.',
      skill: 'Sourcing'
    },
    {
      criteria: 'I can explain the difference between a law\'s stated rationale and its underlying cause, using SEA 78 and HEA 1408 as the example.',
      skill: 'Contextualization'
    },
    {
      criteria: 'I can name the weakest link in my own chain and say what evidence would be needed to shore it up.',
      skill: 'Argumentation'
    }
  ],

  skills: [
    {
      code: 'Causation',
      name: 'Causation, stated as a chain',
      text: `The whole lesson runs on one move: naming what actually produced a thing, rather
        than what it resembles. A weak answer says phones and bans are both about attention. A
        strong answer says the 2024 law's enforcement design failed, and that failure produced
        SEA 78.`,
      where: ['Step 2, the enforcement mechanism', 'Step 6, origin as a necessary condition', 'Step 8, your strongest link']
    },
    {
      code: 'Sourcing',
      name: 'What a source shows against what it assumes',
      text: `A source can be completely accurate about its numbers and still be arguing in its
        conclusions. Separating the two is the single most important reading skill in this
        course, and it is the skill that lets you take a contested claim seriously without
        simply believing it or dismissing it.`,
      where: ['Step 4, the two-column sort', 'Step 7, both break points', 'Step 8, your two sources']
    },
    {
      code: 'Contextualization',
      name: 'Stated rationale against underlying cause',
      text: `The reason a law gives is not always the reason a law exists. Both can be true at
        once, and the gap between them is evidence rather than a contradiction. You will use
        two Indiana laws passed weeks apart to show it.`,
      where: ['Step 3, the two rationales', 'Step 5, what else was happening', 'Step 8, your framing']
    },
    {
      code: 'Argumentation',
      name: 'A position that survives being read by someone who disagrees',
      text: `An argument that concedes nothing is not an argument, it is an announcement. The
        top band requires you to state the smartest version of the opposing view, respond to
        it, and name one thing it gets right.`,
      where: ['Step 7, the historian\'s question', 'Step 8, the whole task']
    }
  ],

  /* ── THE EIGHT STEPS ──────────────────────────────────────────────────── */
  steps: [

    /* ── STEP 1 ─────────────────────────────────────────────────────────── */
    {
      id: 'step-1',
      label: 'Step 01',
      title: 'Launch: The Ban You Are Living In',
      cardDesc: 'You are the primary source. Start inside the event.',
      art: 'launch',
      video: {
        label: 'Video launch card',
        note: `Suggested visual: exterior ZCHS, first-day arrival, students walking in, cut to a
          phone being powered down and put away. 45 to 60 seconds, no narration needed.`
      },
      narrative: [
        { type: 'p', text: '<strong>You are the primary source.</strong>' },
        { type: 'p', text: `Most history lessons start a long way from you. A treaty in a room you
          have never seen. A war fought by people whose names you have to learn how to pronounce.
          This one starts in your hand, or rather, it starts with the moment your hand is empty.` },
        { type: 'p', text: `This school year, Zionsville Community High School went bell to bell.
          Your phone is powered off and stored from the moment first period starts until the last
          bell rings. Not just during class. Lunch. Passing periods. The hallway. The bathroom.
          The whole day.` },
        { type: 'p', text: `That rule did not come from your principal. It came from a state law,
          Senate Enrolled Act 78, that the Indiana General Assembly passed in February 2026 and
          Governor Mike Braun signed in March. It took effect July 1, 2026, and every school
          corporation and charter school in Indiana had to adopt a policy that complied with it.
          The ZCS Board of Trustees approved ours on July 13, 2026. They chose the storage model:
          phones off, in a locker or a classroom container, inaccessible.` },
        { type: 'todo', title: 'Teacher: insert the verbatim ZCS handbook language here',
          text: `The policy details above come from local news reporting, not from the district.
            Pull the actual ZCS student handbook language and quote it word for word in this slot.
            It is your building, and the local primary source is the single best artifact in this
            lesson because students can verify it themselves. Replace this block in
            <code>ce-lesson-01-locker-ban.js</code>, Step 1.` },
        { type: 'p', text: `So here is the first thing to notice, and it is the thing that makes
          this course different. You are not going to read about a historical event. You are
          standing inside one. Somebody, somewhere, made a decision, and the consequence of that
          decision is in your locker right now.` },
        { type: 'p', text: `<strong>Reverse History means we start here and walk backward.</strong>
          Not to a similar event. Not to some other time adults panicked about some other machine.
          Backward along the actual chain of causes that produced this rule, in this building, in
          this year. Every step, the question is the same, and it is a simple one:` },
        { type: 'quote', text: 'Okay, but what caused that?' },
        { type: 'p', text: `Six times we will ask it. On the sixth, we will be standing in a
          different decade entirely, looking at the thing that started it. And then, in Step 7,
          you get to decide whether the chain we just built actually holds together, or whether we
          have fooled ourselves.` },
        { type: 'note', title: 'First and 10',
          text: `Ten seconds, first thing that comes to mind, no wrong answers. When the adults
            wrote this rule, what do you think they were actually worried about?` }
      ],
      capture: {
        n: 1,
        promptId: 'lesson-01-step-1',
        responseType: 'Launch',
        skills: ['Causation'],
        intro: 'Three questions. Question 3 comes back in Step 7, so answer it honestly now.',
        questions: [
          { id: 'worried', type: 'short', label: 'In one sentence, what were the adults worried about?' },
          { id: 'different', type: 'short', label: 'What is one thing that is different about your school day now?' },
          { id: 'likert', type: 'likert', label: 'The ban was a reasonable decision.',
            note: 'Keep this response. You will be asked about it again in Step 7.' }
        ]
      },
      coach: 'A'
    },

    /* ── STEP 2 ─────────────────────────────────────────────────────────── */
    {
      id: 'step-2',
      label: 'Step 02',
      title: 'The Rule That Did Not Work',
      cardDesc: 'Indiana already had a phone law. Why write a second one?',
      art: 'enforcement',
      question: 'Okay, but what caused that?',
      narrative: [
        { type: 'p', text: `Something has to explain why Indiana passed a <em>second</em> phone
          law. Because there was already a first one.` },
        { type: 'p', text: `In 2024, Indiana banned wireless devices during instructional time.
          Class time only. It was one of the earliest statewide laws of its kind in the country,
          and on paper it did the job: phones away during the lesson.` },
        { type: 'p', text: 'On paper.' },
        { type: 'p', text: `Here is what actually happened, and pay attention, because this is a
          mechanism you will see over and over in policy history. The 2024 law said phones had to
          be put away in class, but it did not say <em>how</em>, and it did not cover lunch or the
          hallway. So the phone stayed in the student's pocket all day. Which meant that every
          single class period, in every single classroom in the state, one adult had to notice,
          decide, and enforce, alone.` },
        { type: 'p', text: `Teachers came back to the Statehouse in 2026 and said, in effect: you
          made us the police. The bill's author, Sen. Jeff Raatz of Richmond, described his new
          bill as a rehash of the 2024 law, and said the earlier version was being applied
          differently from how it was intended. Rep. Jake Teshka put the problem plainly: when the
          ban covers instructional time only, the teacher becomes the enforcer, and that is one
          more thing on the plate.` },
        { type: 'p', text: `Notice what that means. <strong>SEA 78 is not primarily a law about
          students. It is a law about enforcement.</strong> The state did not decide phones were
          suddenly worse in 2026 than in 2024. It decided the 2024 solution had a design flaw, and
          it closed the flaw by removing the phone from the equation entirely.` },
        { type: 'h4', text: 'The reason a law gives is not always the reason a law exists' },
        { type: 'p', text: `Hold onto that sentence, because you are going to need it twice more.
          Everything in the legislative record for SEA 78 is about focus, distraction, and who has
          to do the enforcing. Read the bill, read Raatz, read the governor's statements, and you
          will mostly find order and classroom management.` },
        { type: 'p', text: `That is the law's <strong>stated rationale</strong>, and it is real.
          But a stated rationale is not the same thing as an <strong>underlying cause</strong>. A
          legislature can write a law about enforcement while riding a wave that was built out of
          something else entirely. Both things can be true at once, and noticing the gap between
          them is not cynicism. It is evidence.` },
        { type: 'p', text: `Keep the gap open in your head. In Step 3 you will see what the wave
          was actually made of, and Indiana's own 2026 session will hand you the proof.` },
        { type: 'p', text: 'But that only pushes the question back one more layer. Because the 2024 law had to come from somewhere too.' }
      ],
      assessment: {
        shortAnswer: {
          label: 'AP-style short answer',
          prompt: `Explain <strong>one</strong> reason the 2024 instructional-time ban was
            difficult to enforce, and <strong>one</strong> way SEA 78 was designed to fix it.`,
          terms: ['enforcement', 'instructional time', 'storage', 'teacher', 'lunch', 'hallway']
        },
        mcqs: [
          {
            stem: 'The primary problem SB 78 was written to solve was:',
            options: [
              { text: 'Students using phones during class' },
              { text: 'Inconsistent enforcement of an existing rule', correct: true },
              { text: 'A sudden increase in phone ownership among teens' },
              { text: 'A court ruling striking down the 2024 law' }
            ],
            why: `The 2024 law already banned phones in class. What changed in 2026 was who had to
              enforce it and how, which is why the fix was storage rather than a stricter rule.`
          }
        ]
      },
      capture: {
        n: 2,
        promptId: 'lesson-01-step-2',
        responseType: 'Trace Back 1',
        skills: ['Causation', 'Contextualization'],
        questions: [
          { id: 'sa', type: 'long', label: 'Your AP-style short answer from above.' },
          { id: 'mcq', type: 'mcq', label: 'The multiple choice question above.' }
        ]
      }
    },

    /* ── STEP 3 ─────────────────────────────────────────────────────────── */
    {
      id: 'step-3',
      label: 'Step 03',
      title: 'National Momentum: Indiana Was Not Alone',
      cardDesc: 'A movement, not a legislature solving a local problem.',
      art: 'movement',
      question: 'Okay, but what caused that?',
      narrative: [
        { type: 'p', text: `Why did Indiana pass anything at all in 2024? Legislatures do not
          generally invent problems from scratch. They respond to pressure. And in 2024, Indiana
          was one of the early movers in something that had already become a national wave.` },
        { type: 'p', text: `Florida went first, in 2023. Then the dam broke. By the time Indiana's
          bell-to-bell law took effect in July 2026, the majority of U.S. states had enacted full
          or partial school phone restrictions, and the count was still climbing. Illinois signed
          its own bell-to-bell law on July 28, 2026, one day before this lesson was written.
          Different states, different parties, different politics, all reaching for the same lever
          within about thirty-six months.` },
        { type: 'p', text: 'That is not the behavior of a single legislature solving a local problem. That is a movement.' },
        { type: 'p', text: `And here is the detail that tells you what the movement was actually
          <em>about</em>, the piece that matters most for where we are headed. In late 2025, the
          U.S. Department of Education publicly called on every state and district to adopt strong
          phone policies, and it named three reasons: academic, behavioral, and
          <strong>mental-health</strong> concerns.` },
        { type: 'p', text: 'Watch that third word. Hold onto it.' },
        { type: 'h4', text: 'Two laws, weeks apart, aimed at the same worry' },
        { type: 'p', text: `Indiana's own 2026 session makes the point better than any national
          statement could. SEA 78 did not arrive alone. It came as part of a package aimed at
          student well-being and online safety, and in the same session, lawmakers passed House
          Enrolled Act 1408, requiring parental consent for anyone under 16 to create a social
          media account.` },
        { type: 'p', text: `A phone-storage law and a social-media-consent law, from the same
          legislature, in the same few weeks. Those are two different rules. They are aimed at the
          same worry.` },
        { type: 'p', text: `This is the gap from Step 2, now with evidence in it. SEA 78's stated
          rationale is enforcement and focus. HEA 1408 has nothing to do with classroom order at
          all, and it was written by the same people at the same time. Put the two side by side
          and the underlying cause becomes visible: the thing being legislated is not the device
          in the hallway. It is what people had come to believe was on it.` },
        { type: 'p', text: `So the wave was not really about phones as devices. It was about what
          was on them, and what people had come to believe that was doing to teenagers.` },
        { type: 'p', text: 'Which raises the obvious question: what convinced them?' }
      ],
      assessment: {
        mcqs: [
          {
            stimulus: `In late 2025, the U.S. Department of Education urged every state, school,
              and district to adopt strong cellphone-use policies, citing academic, behavioral,
              and mental-health concerns.`,
            stem: 'The passage above best supports which conclusion about the 2023 to 2026 wave of school phone laws?',
            options: [
              { text: 'The laws were driven primarily by teacher union lobbying' },
              { text: 'The laws were framed as responses to student well-being, not only to classroom order', correct: true },
              { text: 'Federal law required states to restrict phones' },
              { text: 'The laws were confined to a single region of the country' }
            ],
            why: `The Department named three concerns and one of them is mental health, which puts
              student well-being in the framing alongside classroom order. Note that a federal
              department urging is not a federal law requiring.`
          },
          {
            stem: 'The passage of HEA 1408 alongside SEA 78 in the same Indiana session most strongly suggests that legislators:',
            options: [
              { text: 'Viewed phones and social media as parts of a single problem', correct: true },
              { text: 'Were uncertain whether SEA 78 would survive a legal challenge' },
              { text: 'Considered the 2024 law sufficient' },
              { text: 'Prioritized academic achievement over student well-being' }
            ],
            why: `Two rules with different mechanisms, passed together, pointed at the same
              population and the same worry. That is the clearest evidence in the record that the
              underlying cause runs wider than classroom management.`
          }
        ]
      },
      capture: {
        n: 3,
        promptId: 'lesson-01-step-3',
        responseType: 'Trace Back 2',
        skills: ['Contextualization', 'Sourcing'],
        questions: [
          { id: 'mcq1', type: 'mcq', label: 'Stimulus multiple choice, question 1.' },
          { id: 'mcq2', type: 'mcq', label: 'Stimulus multiple choice, question 2.' },
          { id: 'politics', type: 'short', label: 'The wave moved across states with very different politics. What does that tell you about the worry driving it?' }
        ]
      }
    },

    /* ── STEP 4 ─────────────────────────────────────────────────────────── */
    {
      id: 'step-4',
      label: 'Step 04',
      title: 'Evidence Anchor: The Book That Told the Story',
      cardDesc: 'Sort what a source shows from what it assumes.',
      art: 'evidence',
      question: 'Okay, but what caused that?',
      narrative: [
        { type: 'p', text: `Something had to convince a country. Not just legislators, but
          parents, principals, school boards, superintendents. And in 2024, one book did more of
          that convincing than anything else.` },
        { type: 'p', text: `Jonathan Haidt is a social psychologist at NYU. In March 2024 he
          published <em>The Anxious Generation</em>, and it did something books almost never do: it
          changed policy. By mid-2026 it had spent well over a hundred consecutive weeks on the
          <em>New York Times</em> bestseller list. Governors cited it. School boards read it. It
          is, in a very direct sense, one of the causes of the rule in your locker.` },
        { type: 'p', text: 'Haidt\'s argument, in outline, has two moving parts:' },
        { type: 'ul', items: [
          `<strong>Childhood got rewired.</strong> Somewhere around 2010 to 2015, a play-based
            childhood (unsupervised, physical, in-person, boring, risky) got replaced by a
            phone-based childhood, lived on a screen, mediated by feeds, available every waking
            hour.`,
          `<strong>That rewiring made kids sick.</strong> Haidt points to sharp increases in
            anxiety and depression indicators among adolescents beginning around 2012, and argues
            the rewiring caused them.`
        ] },
        { type: 'p', text: `His prescriptions follow directly: no smartphones before high school,
          no social media before 16, phone-free schools.` },
        { type: 'p', text: 'That third one is the reason your phone is in a locker.' },
        { type: 'todo', title: 'Teacher: select and insert the primary-source excerpt here',
          text: `<em>The Anxious Generation</em> is in copyright and no passage from it is
            reproduced in this repo. Select the excerpt yourself under your normal classroom
            fair-use practice. A short passage where Haidt states the causal claim directly works
            best, because the two-column sort below depends on the causal language being visible.
            Replace this block in <code>ce-lesson-01-locker-ban.js</code>, Step 4.` },
        { type: 'note', title: 'Recommended: pair it with the counter-source',
          text: `Candice Odgers reviewed the book in <em>Nature</em> in March 2024 and argued the
            central claim is not supported by the science. That review is freely quotable and it is
            listed in the Source Library. Putting Haidt and Odgers side by side here, rather than
            waiting until Step 7, means students meet the contested causation at the evidence step,
            which is where the sorting skill actually bites.` },
        { type: 'h4', text: 'Before you read, set up two columns' },
        { type: 'p', text: `You are going to sort every sentence in the excerpt into one of them,
          and this is the single most important reading skill in this course.` },
        { type: 'p', text: `A source can be completely accurate in column one and still be arguing
          in column two. Your job is not to decide yet whether Haidt is right. Your job is to see
          clearly where the evidence stops and the interpretation starts.` }
      ],
      assessment: {
        showAssume: {
          showLabel: 'What the source <em>shows</em>',
          showHint: 'A number, a measurement, a documented event.',
          assumeLabel: 'What the source <em>assumes</em>',
          assumeHint: 'A link between two things. A cause. A "therefore".'
        }
      },
      capture: {
        n: 4,
        promptId: 'lesson-01-step-4',
        responseType: 'Evidence Anchor',
        skills: ['Sourcing'],
        questions: [
          { id: 'shows', type: 'short', label: 'List two things the excerpt shows.' },
          { id: 'assumes', type: 'short', label: 'List two things the excerpt assumes.' },
          { id: 'rewiring', type: 'short', label: 'Haidt says a rewiring happened around 2010 to 2015. What would have to be true about those years for that claim to work?' }
        ]
      },
      showCounselorNote: true
    },

    /* ── STEP 5 ─────────────────────────────────────────────────────────── */
    {
      id: 'step-5',
      label: 'Step 05',
      title: 'The 2012 Inflection',
      cardDesc: 'When some kids became every kid.',
      art: 'inflection',
      question: 'Okay, but what caused that?',
      narrative: [
        { type: 'p', text: `Haidt names a window: roughly 2010 to 2015, with 2012 as the hinge.
          Why would a few specific years matter that much?` },
        { type: 'p', text: `Because that is when the phone stopped being a thing some teenagers
          had and became a thing every teenager had, and, more importantly, when what was
          <em>on</em> the phone changed shape.` },
        { type: 'p', text: 'Three things converged:' },
        { type: 'ul', items: [
          `<strong>The front-facing camera.</strong> It arrived on the iPhone 4 in June 2010.
            Before it, a phone camera pointed outward, at the world. After it, it pointed back at
            you. That is not a small design change. It made a teenager's own face into content.`,
          `<strong>Instagram.</strong> Launched October 2010. Bought by Facebook in April 2012, a
            company that already knew exactly how to build a feed that never ends.`,
          `<strong>Saturation.</strong> Somewhere in this window, smartphone ownership among
            American teens crossed from a minority to a majority, and then kept going toward
            near-total.`
        ] },
        { type: 'todo', title: 'Teacher: insert the dated Pew ownership figures here',
          text: `The saturation claim above is deliberately unnumbered. Pull the specific figures
            from Pew Research Center's teens and technology series and date-stamp them. Do not let
            a slide say 95 percent without a year and a source attached. Replace this block in
            <code>ce-lesson-01-locker-ban.js</code>, Step 5.` },
        { type: 'p', text: `Any one of those alone is a product update. Together they produce
          something new: an always-on, algorithmically ranked, image-first comparison machine, in
          the pocket of nearly every adolescent in the country, at the exact age when comparing
          yourself to your peers is the most consuming thing your brain does.` },
        { type: 'p', text: `Haidt's claim is that this is the moment. Not the invention of the
          phone, but the moment the phone became <em>this</em>.` },
        { type: 'p', text: `But notice: the front-facing camera needs a phone to sit on. Instagram
          needs an app store to live in. Saturation needs a device people actually wanted badly
          enough to all buy. Every part of 2012 is standing on something earlier.` },
        { type: 'p', text: 'One more step back.' }
      ],
      capture: {
        n: 5,
        promptId: 'lesson-01-step-5',
        responseType: 'The Inflection',
        skills: ['Causation', 'Contextualization'],
        questions: [
          { id: 'which', type: 'short', label: 'Of the three converging changes, which do you think mattered most, and why?' },
          { id: 'skeptic', type: 'short', label: 'Haidt argues 2012 is a turning point for teen mental health. What is one other thing happening in the world around 2012 that a skeptic might point to instead?' }
        ]
      },
      coach: 'B'
    },

    /* ── STEP 6 ─────────────────────────────────────────────────────────── */
    {
      id: 'step-6',
      label: 'Step 06',
      title: 'The Origin: January 9, 2007',
      cardDesc: 'The platform everything else required. No capture point.',
      art: 'origin',
      question: 'Okay, but what caused that?',
      narrative: [
        { type: 'p', text: `San Francisco. Moscone Center. January 9, 2007. A man in a black
          turtleneck walks onstage and says he is going to introduce three products: a widescreen
          iPod with touch controls, a revolutionary mobile phone, and a breakthrough internet
          communications device.` },
        { type: 'p', text: 'Then he tells the audience they are not three products. They are one.' },
        { type: 'p', text: `The iPhone shipped that June. And this is where our chain ends, six
          questions from a locked pouch in Zionsville, Indiana, to a keynote stage two decades
          ago.` },
        { type: 'p', text: 'But be precise about what you have found, because this is where students usually get sloppy.' },
        { type: 'p', text: `<strong>The 2007 iPhone did not cause the ban.</strong> In 2007 there
          was no App Store. No Instagram, the company would not exist for three more years. No
          front-facing camera. No feed. The original iPhone was a phone, an iPod, and a web
          browser. There was nothing on it to doomscroll.` },
        { type: 'p', text: `What 2007 did was build the <em>platform that everything else
          required</em>. Then two things landed on top of it:` },
        { type: 'ul', items: [
          `<strong>July 2008, the App Store.</strong> Now other people could put things on your
            phone. Apple stopped being the only author of your experience.`,
          `<strong>June 2010, the front-facing camera.</strong> Now the phone could look at you.`
        ] },
        { type: 'p', text: `Origin, App Store, camera. Those three together produce 2012. 2012
          produces the mental-health argument. The argument produces the movement. The movement
          produces the 2024 law. The 2024 law's enforcement failure produces SEA 78. SEA 78
          produces the container in your first-period classroom.` },
        { type: 'p', text: 'That is the chain. Nineteen years, six links, one keynote.' },
        { type: 'p', text: `And here is what makes this Reverse History and not a coincidence: we
          did not go looking for the iPhone. We did not start with "what invention changed
          childhood?" We started with a rule about <em>your</em> lunch period and asked what caused
          it, six times in a row, and it walked us here. <strong>Origins are things you arrive at,
          not things you assume.</strong>` }
      ],
      assessment: {
        funFacts: [
          `Steve Jobs's 2007 demo phone barely worked. Engineers built a golden path, a precise
            sequence of taps that avoided the crashes. Stray from it and the demo died. The device
            that reorganized childhood was held together with tape on the day it was announced.`,
          `Apple sold roughly 6 million units of the original iPhone. For comparison, that is a
            fraction of what a single modern iPhone model sells in a quarter.`,
          `There was no App Store at launch. Jobs's original plan was that outside developers
            would build <em>web pages</em> for the iPhone, not apps. The App Store, the thing that
            made everything downstream possible, was a reversal.`,
          `Also in 2007: the Kindle launched, Netflix started streaming, and Twitter was one year
            old. 2007 is doing a lot of work in this century.`
        ]
      },
      noCapture: 'The origin reveal is the payoff. It should land without an interruption.'
    },

    /* ── STEP 7 ─────────────────────────────────────────────────────────── */
    {
      id: 'step-7',
      label: 'Step 07',
      title: 'The Turn: Does the Chain Actually Hold?',
      cardDesc: 'Attack your own work. Two places it might break.',
      art: 'turn',
      narrative: [
        { type: 'p', text: 'Now we turn around.' },
        { type: 'p', text: `You have spent this whole lesson building a chain backward, and it
          feels good, it clicks. Six clean links from a keynote to your locker. That satisfying
          click is exactly the moment a historian should get suspicious, because <strong>a chain
          that feels tidy is not the same thing as a chain that is true.</strong>` },
        { type: 'p', text: 'So let us attack our own work. There are two separate places it might break.' },
        { type: 'breakpoint', tag: 'Break point 1', title: 'Is Haidt\'s causal claim solid?', blocks: [
          { type: 'p', text: `Everything from Step 4 back rests on one link: social media
            <em>caused</em> the decline in teen mental health. That link is genuinely contested, not
            by cranks, but by researchers who study exactly this for a living.` },
          { type: 'p', text: `In March 2024, days after the book came out, developmental
            psychologist <strong>Candice Odgers</strong> reviewed it in <em>Nature</em> and argued
            the book's central suggestion, that digital technology is rewiring children's brains
            and causing an epidemic of mental illness, is not supported by the science. Her worry
            is not only that Haidt is wrong. It is that blaming social media might pull attention
            away from the actual causes.` },
          { type: 'p', text: `<strong>Amy Orben</strong> and <strong>Andrew Przybylski</strong> ran
            one of the largest analyses in the field, across hundreds of thousands of participants,
            and found the association between screen use and adolescent well-being to be very
            small, small enough, in their reading, that it cannot carry the weight Haidt puts on
            it.` },
          { type: 'p', text: `Now here is the detail that makes this a real argument instead of a
            shouting match. On the specific number for girls and social media, <strong>Haidt and
            his critics substantially agree</strong>, a correlation of roughly 0.15. Both sides look
            at the same figure. One side says: that is too small to explain a crisis. The other
            says: that is one pathway among many, and you have to add them up.` },
          { type: 'p', text: `<strong>Nobody is lying. They disagree about what a number
            means.</strong> That is what most real arguments are made of.` },
          { type: 'p', text: `The editor-in-chief of <em>Science</em> pressed Haidt on whether he
            should have done more to signal the disagreement in his book. Haidt said he did not
            think so, and added, openly, that he is pushing a social change program before the
            scientific community has reached agreement, because he believes the evidence is
            sufficient and the solutions are harmless.` },
          { type: 'p', text: 'Is that a reasonable thing for a scientist to do? That is a genuine question, and you are allowed to have a view.' }
        ] },
        { type: 'breakpoint', tag: 'Break point 2', title: 'Even if Haidt is right, does the ban work?', blocks: [
          { type: 'p', text: 'This one is about you specifically.' },
          { type: 'p', text: `In February 2025, researchers at the University of Birmingham
            published the <strong>SMART Schools</strong> study in <em>The Lancet Regional Health,
            Europe</em>. It was the first study of its kind: 1,227 students aged 12 to 15 across 30
            English secondary schools, 20 with restrictive phone policies, 10 permissive. Precisely
            the comparison you are now living inside.` },
          { type: 'p', text: 'What they found:' },
          { type: 'ul', items: [
            `Restrictive schools <strong>did</strong> cut in-school use, roughly 40 fewer minutes
              on phones and 30 fewer on social media during the school day.`,
            `Students <strong>made it up after school.</strong> Total daily and weekly screen
              time: no meaningful difference. Everybody, both groups, averaged 4 to 6 hours a day.`,
            `On well-being, anxiety symptoms, depressive symptoms, sleep, physical activity,
              English and math attainment, and disruptive classroom behavior: <strong>no meaningful
              difference between the two groups.</strong>`,
            `And yet, more total phone and social media time <em>was</em> consistently linked to
              worse outcomes on nearly all of those measures.`
          ] },
          { type: 'p', text: `Sit with that combination, because it is strange and it is important.
            Phone time looks bad for you. School bans do not reduce phone time. Therefore school
            bans do not move the outcomes.` },
          { type: 'p', text: `The study's authors put it as: school policy is not the silver
            bullet. Not "phones are fine", but "this lever may be attached to the wrong end of the
            problem".` },
          { type: 'p', text: `And of course, that study has critics too. Advocates for phone-free
            schools argue it cannot support a no-benefit conclusion, because it is cross-sectional
            rather than randomized, with a low school response rate, which limits what it can say
            about cause at all. Which is, you will notice, the <em>same objection</em> Haidt's
            critics make about Haidt.` },
          { type: 'p', text: 'The tools cut both ways. That is how you know they are real tools.' }
        ] },
        { type: 'h4', text: 'The historian\'s question' },
        { type: 'p', text: `So: your chain has two weak links, a contested cause at Step 4 and a
          contested cure at Step 1. It might still be a good chain. Weak is not the same as
          broken.` },
        { type: 'p', text: '<strong>Your job in Step 8 is to say which links hold and which do not, and defend it.</strong>' }
      ],
      capture: {
        n: 6,
        promptId: 'lesson-01-step-7',
        responseType: 'The Turn',
        skills: ['Sourcing', 'Argumentation'],
        intro: 'Question 1 is the same question you answered in Step 1. Answer it again before you look back.',
        questions: [
          { id: 'likert', type: 'likert', label: 'The ban was a reasonable decision.', note: 'Compare to your Step 1 answer.' },
          { id: 'changed', type: 'short', label: 'Did your rating change? What specifically changed it, or what specifically held?' },
          { id: 'weakest', type: 'short', label: 'Identify the weakest link in the six-step chain and explain why it is the weakest.' },
          { id: 'agree', type: 'short', label: 'Haidt and his critics agree on a number and disagree about its meaning. Give one other example, from anywhere, of people agreeing on a fact and disagreeing about what it means.' }
        ]
      },
      coach: 'C',
      showCounselorNote: true
    },

    /* ── STEP 8 ─────────────────────────────────────────────────────────── */
    {
      id: 'step-8',
      label: 'Step 08',
      title: 'You Do: Your Argument',
      cardDesc: 'Take a position on both halves. Submit through Canvas.',
      art: 'argument',
      narrative: [
        { type: 'quote', text: `In 2007, a company released a phone. In 2026, your school took
          yours away. Between those two events there are six links in a causal chain, and at least
          two of them are contested.` },
        { type: 'p', text: `<strong>Write an argument that answers this question: does the chain
          from the 2007 iPhone to the bell-to-bell ban at ZCHS actually hold, and does the ban
          address the problem it was built to solve?</strong>` },
        { type: 'p', text: `These are two separate questions. A strong response might answer yes to
          one and no to the other. Take a position on both.` }
      ],
      assessment: {
        requirements: [
          { title: 'A defensible claim', text: 'Takes a position on both halves of the question.' },
          { title: 'Your strongest link', text: 'Name the link in the chain you think is most solid and explain why the evidence supports it.' },
          { title: 'Your weakest link', text: 'Name the one you think is shakiest and explain what evidence would be needed to shore it up.' },
          { title: 'Two sources, one of which disagrees with you', text: 'You may use anything from Steps 2 to 7, or the Source Library. Cite it.' },
          { title: 'The strongest opposing view, addressed', text: 'Not the dumbest version of the other side, the smartest one. State it fairly, then respond to it.' },
          { title: 'One concession', text: 'Name something the other side gets right. An argument that concedes nothing is not an argument, it is an announcement.' }
        ],
        length: '600 to 900 words, or 4 to 5 substantial paragraphs.',
        topBand: [
          'Uses the <em>directionality</em> of the trace. Weak responses talk about phones in general. Strong ones talk about a specific link between two specific steps.',
          'Distinguishes what a source shows from what it assumes, the two columns from Step 4.',
          'Treats the disagreement between researchers as a disagreement about <em>interpretation</em>, not about facts.',
          'Reaches a conclusion. "It is complicated" is where you start, not where you finish.'
        ]
      },
      capture: {
        n: 7,
        promptId: 'lesson-01-step-8',
        responseType: 'Your Argument',
        skills: ['Argumentation', 'Causation', 'Sourcing'],
        intro: 'Draft here, run the self-check, then submit the final argument through Canvas.',
        questions: [
          { id: 'argument', type: 'long', label: 'Your argument.', terms: [
            'SEA 78', 'enforcement', 'Haidt', 'Odgers', 'SMART Schools', 'correlation',
            '2012', 'App Store', 'front-facing camera', 'concede'
          ] }
        ],
        toCanvas: true
      }
    }
  ],

  /* ── CONTENT DELIVERY ─────────────────────────────────────────────────── */
  /* The six links as projection cards. Pop each one open for the enlarged view.
     This is the teacher-facing view of the same chain the steps walk through. */
  lecture: {
    title: 'The Chain, Six Links',
    intro: `Project these in order, forward or backward. Each card opens enlarged for the room.
      Read them bottom to top and you have the causal story. Read them top to bottom and you have
      the lesson.`,
    videos: [
      {
        title: 'Step 1 launch clip',
        prompt: 'Exterior ZCHS, first-day arrival, cut to a phone powered down and put away. 45 to 60 seconds, no narration needed.',
        todo: 'Teacher: record or source this clip and add the URL in ce-lesson-01-renderer-config.js.'
      },
      {
        title: 'The 2007 keynote',
        prompt: 'The three-products opening from the January 9, 2007 Macworld keynote. Stop after "they are not three products, they are one".',
        todo: 'Teacher: add your preferred clip URL in ce-lesson-01-renderer-config.js.'
      }
    ],
    segments: [
      {
        title: 'Link 6, the container in your classroom',
        bullets: [
          'SEA 78 takes effect <strong>July 1, 2026</strong>. Bell to bell, all day.',
          'ZCS Board of Trustees adopts the <strong>storage model</strong>, July 13, 2026.',
          'Statutory exceptions exist: IEP, Section 504, documented medical need, emergency, translation.'
        ]
      },
      {
        title: 'Link 5, the rule that did not work',
        bullets: [
          'Indiana\'s <strong>2024</strong> law banned devices during instructional time only.',
          'It did not say how, and it did not cover lunch or hallways.',
          'The teacher became the enforcer. SEA 78 is a law about <strong>enforcement</strong>.'
        ]
      },
      {
        title: 'Link 4, a national wave',
        bullets: [
          'Florida first in <strong>2023</strong>. Majority of states by mid-2026.',
          'U.S. Dept of Education, late 2025: academic, behavioral, <strong>mental-health</strong>.',
          '<strong>HEA 1408</strong> passes the same Indiana session. Two rules, one worry.'
        ]
      },
      {
        title: 'Link 3, the book that convinced a country',
        bullets: [
          'Haidt, <em>The Anxious Generation</em>, <strong>March 2024</strong>.',
          'Play-based childhood replaced by phone-based childhood, roughly 2010 to 2015.',
          'Prescription three is phone-free schools. That is the link to your locker.'
        ]
      },
      {
        title: 'Link 2, the 2012 inflection',
        bullets: [
          '<strong>Front-facing camera</strong>, iPhone 4, June 2010. The camera turns around.',
          '<strong>Instagram</strong> launches October 2010, bought by Facebook April 2012.',
          '<strong>Saturation</strong>: teen ownership crosses from minority to majority.'
        ]
      },
      {
        title: 'Link 1, the origin, January 9, 2007',
        bullets: [
          'A necessary condition, <strong>not the cause</strong>. In 2007 there was nothing to scroll.',
          'Add the <strong>App Store</strong> (2008) and the <strong>front-facing camera</strong> (2010).',
          'Origins are things you arrive at, not things you assume.'
        ]
      }
    ]
  },

  /* ── SOURCE LIBRARY ──────────────────────────────────────────────────── */
  /* Step 8 requires two sources, one of which disagrees with the student.
     `stance: 'counter'` marks the ones that cut against the chain. */
  sources: [
    {
      title: 'Senate Enrolled Act 78 (2026)',
      meta: 'Indiana General Assembly · statute · amends IC 20-26-5-40.7',
      note: `The law itself. Cite SEA 78 or the Indiana Code section, not "SB 78", which is the
        pre-passage bill. Note the teacher-directed instructional use allowance sunsets June 30,
        2028, which is a good "this is not finished" detail for Step 8.`
    },
    {
      title: 'Governor Braun\'s SEA 78 signing release',
      meta: 'State of Indiana · government document · May 13, 2026 ceremonial signing',
      note: `Fully quotable and locally relevant. Read it for the stated rationale. Officially
        signed March 5, 2026, with the ceremonial signing in Whiteland on May 13, which is where
        most photos and quotes come from. Students who search will hit the May date first.`
    },
    {
      title: 'Odgers, "The great rewiring"',
      meta: 'Nature 628, 29 to 30 · book review · March 2024',
      stance: 'counter',
      note: 'The counter-source to Haidt, and the single most useful document in the Source Library for Step 8 requirement 4.'
    },
    {
      title: 'Goodyear et al., SMART Schools study',
      meta: 'The Lancet Regional Health, Europe · February 2025 · DOI 10.1016/j.lanepe.2025.101211',
      stance: 'counter',
      note: 'The study that says school bans do not move the outcomes. Cuts against the ban, not against Haidt.'
    },
    {
      title: 'Thorp, "Unsettled science on social media"',
      meta: 'Science · editorial',
      note: 'Where Haidt is pressed on whether he signalled the disagreement, and answers honestly.'
    },
    {
      title: 'Surgeon General\'s advisory on social media and youth mental health',
      meta: 'U.S. Public Health Service · 2023 · government document',
      note: 'Quotable, on the throughline, and useful if you would rather not excerpt a copyrighted book at Step 4.'
    }
  ],

  /* ── COACH SETS ──────────────────────────────────────────────────────── */
  /* Rendered into the coach bridge at Steps 1, 5 and 7, and reproduced in full
     on teacher/lesson-01-orientation.html for the MagicSchool configuration. */
  coachRules: [
    'One question at a time. Wait for a response. Never stack.',
    'Never write, draft, complete, or rephrase into final form any part of a student response. If asked, decline warmly and turn it back into a question.',
    'Never supply the content of an argument. Ask what they think, do not tell them what to think.',
    'Push for evidence, tradeoffs, and the opposing view.',
    'Do not reveal later steps. Coach A must not mention Haidt, 2012, or 2007.',
    'If a student says "I don\'t know", do not move on and do not answer for them. Shrink the question.',
    'Final submission always goes through Canvas. Say so explicitly at the end of Set C.',
    'If a student discloses distress about their own mental health, stop coaching the task and direct them to a school counselor or trusted adult. Do not attempt to counsel.'
  ],

  coachSets: {
    A: {
      step: 'Step 1',
      goal: `Surface the student's unexamined gut reaction and get it on the record before any
        history contaminates it. Prime the backward question. Do not teach.`,
      opening: `Before we look at any history, I just want your honest reaction. Your phone is
        locked up all day now. What do you think the adults were actually worried about?`,
      sequence: [
        'What do you think the adults were actually worried about?',
        'You said that. Is it what they said they were worried about, or what you think they really meant? Are those different?',
        'If you had to guess, was this rule written mostly about how school runs, or mostly about how students are doing? What makes you lean that way?',
        'Who do you think pushed hardest for this? Where would you check to find out?',
        'Last one: if you got to write the rule, what would you have done instead, and what would your version get wrong?'
      ],
      branches: [
        { when: 'The student is dismissive ("they just hate phones", "boomers")', then: 'That might be right. But if it were only that, you would expect this to be one grumpy principal, and it is a state law that passed with both parties voting for it. What else could be going on?' },
        { when: 'The student is fully supportive ("it is fine, I get it")', then: 'Do not reward agreement. Ask them to make the case against it: what is the best argument someone who hates this rule would make?' },
        { when: 'The answer is very short', then: 'Give me one more sentence. What made you say that word specifically?' },
        { when: 'The student asks the coach\'s opinion', then: 'Not my call. I am here to make your reasoning sharper, not to add mine. What is your read?' }
      ],
      exit: 'Hold onto that. You are going to be asked the same question at the end, and I want you to be able to see whether you moved.'
    },
    B: {
      step: 'Steps 4 and 5',
      goal: `Make the student separate what the data shows from what the argument assumes. Wrestle
        with contested causation without resolving it for them.`,
      opening: `You have Haidt's argument in front of you. Let us take it apart. What is one thing
        in there that is a measurement, a number, something counted?`,
      sequence: [
        'Name one thing in the source that is a measurement.',
        'Now name one thing that is a link, a place where the source says one thing caused another.',
        'For that link: what evidence is actually attached to it? Or is it attached to the measurement next to it?',
        'Two things rose at the same time. Give me one way that could happen without one causing the other.',
        'Haidt says the turning point is around 2012. If you wanted to test that, what would you need to see in the data?',
        'What is the best argument against his causal claim that you can build right now, from the source itself?'
      ],
      branches: [
        { when: 'The student accepts the whole thing uncritically', then: 'You might end up agreeing with him. But you cannot get there by trusting him. What would he need to show you for the causal claim to be proven, not just supported?' },
        { when: 'The student dismisses it entirely ("correlation is not causation, done")', then: 'Push back, this is the most common shallow answer. That phrase ends a lot of conversations without earning it. Correlation is not proof of causation, but it is not evidence of nothing. So how much weight can this correlation carry? What would raise your confidence?' },
        { when: 'The student conflates "assumes" with "lies"', then: 'Assuming is not lying. Every argument assumes something, it has to. The question is whether the assumption is reasonable and whether the author admits to making it. Does he?' },
        { when: 'The student asks the coach to summarize the source', then: 'That is the part you need to do, the sorting is the skill. Start smaller: read me one sentence and tell me which column it goes in.' }
      ],
      exit: 'You just did the hardest thing in this whole lesson. Keep both columns. Step 7 is going to hand you researchers who disagree with each other, and you will need them.'
    },
    C: {
      step: 'Step 7',
      goal: 'Pressure-test the argument before Canvas. Force the opposing view to be addressed, not just named.',
      opening: 'Give me your claim in one sentence. Not the reasoning yet, just the position.',
      sequence: [
        'Your claim, in one sentence.',
        'Which link in the chain is your claim really about? Point to the step number.',
        'What is your single best piece of evidence for it? Where did it come from?',
        'Now: what is the strongest thing someone who disagrees with you would say? Their best version, not their worst.',
        'Does your argument currently answer that? Read me the part that does.',
        'What does the other side get right? Name one thing.',
        'If new evidence came out next year that made you change your mind, what would it have to show?'
      ],
      branches: [
        { when: 'The counterargument they produce is a strawman', then: 'That is the easy version. The people who disagree with you here are professional researchers publishing in Nature and The Lancet. What is their objection?' },
        { when: 'They have only addressed one half of the prompt', then: 'You have told me whether the chain holds. You have not told me whether the ban works. Those can have different answers. Which is yours?' },
        { when: 'They claim no concession is needed', then: 'An argument with nothing conceded reads like it has not looked. Find me one true thing on the other side. You can still win the argument after admitting it.' },
        { when: 'The evidence is vague ("studies show")', then: 'Which study? Who ran it, and what did they measure? Vague evidence is the fastest way to lose a reader who knows the topic.' },
        { when: 'Asked to write, fix, or polish the response', then: 'That is yours to write. My job is to make sure it can survive being read by someone who disagrees. Tell me what you are going to say in that paragraph and I will poke at it.' }
      ],
      exit: 'You are ready. Submit your final argument through Canvas, not here. Anything we did in this chat is practice. The Canvas submission is the one that counts.'
    }
  }
};
