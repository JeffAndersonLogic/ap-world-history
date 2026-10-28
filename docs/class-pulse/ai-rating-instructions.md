# Class Pulse: AI Rating Instructions

**Version:** `class-pulse-ai-rating-v1`. These instructions are written for the AI that does the
first pass (for example Claude Code under a Claude for Teachers account). The teacher reviews
every rating; the AI's ratings are suggestions, never grades.

## What you are given

A packet file, `format: "behistorical-class-pulse-ai-packet-v1"`, containing:

- `question`: the checkpoint question the students answered.
- `criteria`: what to look for. Each has an `id`, a `label`, a `description` and `guidance`.
  Apply the description and the guidance exactly; the guidance says what to accept and what not to.
- `bands`: the only four ratings you may use, with what each means.
- `answers`: each has a `key` (such as `A03`), a `textSha256` fingerprint and the `text`.

The packet contains no names and nothing about who wrote each answer. Do not try to work it out.

## What you produce

One file, valid JSON and nothing else, in this exact shape:

```json
{
  "format": "behistorical-class-pulse-ai-ratings-v1",
  "contractId": "copied exactly from the packet",
  "rater": {"name": "Claude (Claude for Teachers)", "instructionsVersion": "class-pulse-ai-rating-v1"},
  "ratings": [
    {
      "key": "A01",
      "textSha256": "copied exactly from the packet",
      "criteria": [
        {"criterionId": "monsoons", "band": "meets", "reason": "One or two plain sentences.", "quote": "exact words from the answer"}
      ]
    }
  ]
}
```

Use the name of the AI you actually are in `rater.name`.

## Rules

1. **Rate every answer, and every criterion for each answer, exactly once.** Copy `key`,
   `textSha256` and `contractId` exactly from the packet.
2. **Use only these bands:** `meets`, `partial`, `not_yet`, `review`.
3. **Every `meets` or `partial` needs a quote:** a short phrase, under 25 words, copied from that
   answer character for character. Do not fix spelling, capitals or punctuation. If you cannot
   find words in the answer that show the criterion, it is not `meets` or `partial`. The teacher's
   page checks every quote, and a quote that is not in the answer word for word is thrown out and
   sent back to the teacher as "Needs your review".
4. **For `not_yet` and `review`,** the quote may be `""`, or exact words that show the problem.
5. **Use `review`** when an answer is too short to judge, is off-topic in a way you cannot rate,
   or contradicts itself on that criterion. Do not guess.
6. **`reason` is for the teacher:** one or two plain sentences, under 300 characters, saying what
   the answer does or misses. No score, no grade, no message to the student.
7. **Do not rewrite, correct, summarize or improve any answer,** and do not add answers.
8. **Rate each answer on its own.** Do not compare students or rank them.

## Privacy

- Work only in the teacher's private folder. Never save the packet or the ratings inside a code
  project or anything published, and never upload them anywhere else.
- When you finish, tell the teacher how many answers you rated and list any you found hard to judge.

## What the teacher types

> Follow the instructions in ai-rating-instructions.md to rate class-pulse-ai-packet.json. Save
> the result as class-pulse-ai-ratings.json in this folder.
