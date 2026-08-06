# Daily Announcements Board

The rotating classroom screen. Open `announcements.html`, press **F** for full
screen, and leave it up. It replaces the old Google Slides announcement loop.

## The one file you edit

`assets/data/announcements-schedule.js`

Give a date and a topic number. The learning targets and success criteria come
out of that topic's own lesson data file, so the board can never drift from the
curriculum. Then run:

    node scripts/build-announcements.js

That writes `assets/data/announcements.js`, which the board reads. **Never edit
that file by hand**, the next build overwrites it.

A day is one line of real typing:

```js
{ date: '2026-08-10', topic: '1.1', homework: 'Topic 1.1 checkpoints.' },
```

Topic numbers are `F0` to `F5` for Foundations and `1.1` through `9.9` for the
units, 77 topics in all. Homework is yours to write; the course data has none.

| Block in the schedule | What it holds |
|---|---|
| `settings` | Course name, seconds per slide, AP exam date |
| `days` | Date plus topic number, plus homework and any overrides |
| `assessments` | Every quiz, test, and exam. Past dates drop off on their own |
| `reminders` | Off by default. Add one and a Reminders slide joins the loop |

Dates are always `YYYY-MM-DD`. That is the only format the board parses.

### When the lesson wording is too long to project

Some lesson targets run past 200 characters. The board steps the type down
automatically, and the build prints a note when a line will project small. To
say it more briefly on screen without touching the lesson, override it in the
schedule entry:

```js
{
  date: '2026-08-10', topic: '1.1',
  learningTargets: ['I can explain how the civil service exam held Song China together.'],
  homework: 'Topic 1.1 checkpoints.'
}
```

Anything you write in the schedule wins over the generated text. `topicTitle`
and `successCriteria` work the same way.

`teacherName` and `roomName` inside `settings` ship blank on purpose, so nothing
personal projects on the screen. Fill either one in and it joins the footer line
next to the countdown to the national AP exam.

Every field except `date` is optional. Leave one out and the board simply skips
that slide, so a day with only a topic produces a short loop rather than an
error. A day with no `topic` at all is fine too, just write the fields yourself.

## What the loop looks like

Six panels, today's work first and what is ahead second:

1. **Topic for the day**, the title card: wordmark, date, topic, unit
2. **Learning targets**, the "I can" statements
3. **Success criteria**, the things a student ticks off
4. **Homework**, what leaves the room tonight
5. **Upcoming topics**, the next four class days
6. **Quizzes and exams**, from the `assessments` list

Upcoming topics cost you nothing extra. Every `days` entry dated later than
today lands there automatically, so a week typed on Sunday fills that slide for
free.

Assessments inside three days turn gold; today and tomorrow turn red. `Quiz`,
`Test`, and `Exam` all project in red.

Three optional day fields are off unless you fill them in: `doNow` adds a bell
ringer slide, `agenda` adds a numbered list of block steps, and `note` adds a
one line callout for anything unusual.

## Controls at the projector

| Key | What it does |
|---|---|
| `Space` | Pause or resume |
| `←` `→` | Previous or next slide |
| `F` | Full screen |
| `R` | Reload, picks up an edit you just pushed |
| `H` or `?` | Controls card |
| `Esc` | Close the controls card |

The cursor hides after five seconds of stillness. Clicking a dot in the footer
jumps to that slide.

## Leaving it up overnight

The board watches the clock and rebuilds itself when the local date rolls over,
so a screen left on Thursday night shows Friday's agenda without anyone touching
it. It does not re-fetch the data file on its own, so after you push an edit,
press `R` on the classroom machine.

## When there is no entry for today

The board never goes blank. With no matching day it still shows the title card,
the upcoming topics, and the assessments, plus one slide telling you nothing was
filed for that date. With nothing filed at all it shows a single slide naming the
file to edit.

## Related files

- `announcements.html`, the player
- `assets/css/behistorical-announcements.css`, the projector styling
- `assets/data/announcements-schedule.js`, **the file you edit**
- `scripts/build-announcements.js`, the generator
- `assets/data/announcements.js`, generated output, do not edit
