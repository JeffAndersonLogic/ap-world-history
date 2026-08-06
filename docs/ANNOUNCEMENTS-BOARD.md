# Daily Announcements Board

The rotating classroom screen. Open `announcements.html`, press **F** for full
screen, and leave it up. It replaces the old Google Slides announcement loop.

## The one file you edit

`assets/data/announcements.js`

Nothing else. The page reads that file and rebuilds the slide deck from it. There
are four blocks inside:

| Block | What it holds |
|---|---|
| `settings` | Course name, seconds per slide, AP exam date |
| `days` | One entry per class day: topic, objective, Do Now, agenda, homework |
| `dueDates` | Anything with a deadline. Past dates drop off on their own |
| `reminders` | Standing notes with no date. They show until you delete them |

Dates are always `YYYY-MM-DD`. That is the only format the board parses.

`teacherName` and `roomName` inside `settings` ship blank on purpose, so nothing
personal projects on the screen. Fill either one in and it joins the footer line
next to the countdown to the national AP exam.

Every field except `date` is optional. Leave one out and the board simply skips
that slide, so a day with only an objective produces a two-slide loop rather than
an error.

## What the loop looks like

For a day that has everything filled in:

1. Title card, the wordmark, today's date, the topic
2. Heads Up, only if `note` is set
3. Do Now
4. Today's Objective, with the AP skill chip
5. Today's Agenda, numbered
6. Homework
7. Due Dates, four per slide, sorted soonest first
8. Reminders

Due dates inside three days turn gold. Due today and due tomorrow turn red. A
`tag` of `Test`, `Quiz`, or `Exam` also turns red.

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
the due dates, and the reminders, plus one slide telling you an agenda was never
filed for that date. With nothing filed at all it shows a single slide naming the
file to edit.

## Related files

- `announcements.html`, the player
- `assets/css/behistorical-announcements.css`, the projector styling
- `assets/data/announcements.js`, the content
