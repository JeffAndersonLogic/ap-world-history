# BeHistorical Teacher Hub, Google Sheets Analysis Layer

This folder holds the Apps Script that turns your Google Form response Sheet into the live
data source for the Teacher Hub.

The Teacher Hub is hosted on GitHub Pages, which is a static front end with no server. It
stores no student data and holds no credentials beyond what you paste into your own browser.
Everything private stays in your Google Sheet, and this script is the layer in between.

```text
Google Form → Google Sheet → Apps Script (this file) → Teacher Hub
```

## What it does

- Reads the form response Sheet and filters by Unit, Topic, Response Type, and Class Period.
- Counts responses, distinct students, blank and short answers, and average confidence.
- Detects the specific terms students actually cited, for **any** topic, with no per-topic
  setup required.
- Flags students needing follow-up and suggests reteach priorities.
- Writes the full, named analysis into your Sheet on the `TeacherHub_Analysis` and
  `TeacherHub_StudentFlags` tabs.
- Serves a **de-identified** version of that analysis to the Teacher Hub through `doGet()`.

## Privacy model, read this before deploying

The Teacher Hub's browser request cannot carry your Google login, because it comes from a
static page on a different domain. That forces the web app to be deployed as **Anyone**.
Any other setting makes the endpoint unreachable and shows up as an opaque network error.

Because the endpoint has to be public, the script is built so that being public is safe:

| Data | Web app (`doGet`) | Your Sheet |
|---|---|---|
| Counts, averages, patterns, reteach suggestions | Yes | Yes |
| Student names | **Never** | Yes, `TeacherHub_StudentFlags` |
| Raw response text | Off by default, opt-in | Yes, `TeacherHub_Analysis` |
| Follow-up flags | Yes, as `Student 1`, `Student 2`, … | Yes, with real names |

The numbered labels sent to the Hub are in the same order as the rows on the
`TeacherHub_StudentFlags` tab, so you match a label to a name by looking at that tab.

Two further protections:

- **An access token is required.** Requests without a valid token get an error, not data.
- **Response text is withheld by default.** Anonymous student writing can still identify its
  author. The full anonymized prompt is always written to your Sheet, so nothing is lost.
  If you decide the risk is acceptable, turn it on with
  **BeHistorical → Response Text Over Web App (On/Off)**.

Rotating the token from the menu immediately invalidates the old one.

## Required Sheet columns

The response tab must be named `Form Responses 1`, or change `responseSheetName` at the top
of `Code.gs`. These headers are recognized:

```text
Timestamp
Student Name
Class Period
Unit
Topic
Response Type
Prompt ID
Student Response
Confidence Level
```

`Topic`, `Response Type`, and `Student Response` are required; the script reports a clear
error naming any that are missing. `AI Coaching Reflection` is optional. Some alternate
header spellings are accepted (see `HEADER_ALIASES`), but the names above are recommended.

Topic values should match the registry labels in `assets/js/behistorical-form-config.js`,
for example `1.1 - Song China`. The script also matches a bare topic number, and `1.1` will
not accidentally match `1.10`.

## Setup

1. Open the Google Sheet connected to your response form.
2. **Extensions → Apps Script**. This matters: the script must be *bound* to the Sheet.
   A standalone script cannot see your data and its menu will never appear.
3. Paste in the contents of `Code.gs`, then save.
4. Reload the Sheet. A **BeHistorical** menu appears in the menu bar.
   Do not press Run on `onOpen` in the editor; it needs a Sheet in front of it and will
   throw `Cannot call SpreadsheetApp.getUi() from this context`. Reloading the Sheet is what
   installs the menu.
5. **BeHistorical → Create/Repair Teacher Hub Tabs**. This creates the three tabs and seeds
   `TeacherHub_Settings` with Topic 1.1 defaults.
6. **BeHistorical → Create Teacher Hub Access Token**. Copy the token.

## Deploying the web app

1. **Deploy → New deployment**, then click the gear next to "Select type" and pick
   **Web app**.
2. Description: anything that identifies the version, for example
   `Teacher Hub analysis v1`.
3. **Execute as: Me**. **Who has access: Anyone.**
4. **Deploy**, approve the authorization prompts, and copy the **Web app URL**. It ends in
   `/exec`.

Then open `teacher/index.html` in the Teacher Hub, paste the URL and token, and click
Connect.

**When you edit `Code.gs`, the live endpoint does not change until you publish a new
version:** **Deploy → Manage deployments → pencil → Version: New version → Deploy**. The URL
stays the same. Skip this and the endpoint keeps serving the old code.

Use the `/exec` URL, never the `/dev` one. The `/dev` URL only resolves for you while signed
in, and the Hub rejects it up front for that reason.

## Tuning the analysis per topic

`TeacherHub_Settings` is the teacher-editable knob. One row per misconception; repeat the
topic across rows.

| Topic | Evidence Terms | Misconception Label | Misconception Triggers |
|---|---|---|---|
| `1.1 - Song China` | `civil service exam, Champa rice, Grand Canal` | `Exam treated as pure meritocracy` | `anyone could take, pure meritocracy` |

- **Evidence Terms** and **Misconception Triggers** are comma separated and matched
  case-insensitively.
- **Evidence Terms are optional.** With none configured, the script still finds the specific
  terms students used by ranking repeated proper nouns in the responses. A term must appear
  in at least two responses, and in at least 15 percent of them, to count as a class pattern.
- **Misconceptions cannot be inferred from text**, so they only appear for topics you have
  configured. Topics with no rows report that plainly rather than showing nothing.

## Web app parameters

| Parameter | Purpose |
|---|---|
| `token` | Required. From the BeHistorical menu. |
| `mode=index` | Returns the topics, units, class periods, and response types present in the Sheet. Used to populate the Hub's dropdowns. |
| `topic` | Full label (`1.1 - Song China`), bare number (`1.1`), or `All Topics`. |
| `responseType` | One of the response types, or `All Response Types`. |
| `classPeriod` | A period value, or `All Periods`. |
| `unit` | Optional. The Hub only sends it when no specific topic is selected. |
| `write=true` | Also refresh the `TeacherHub_Analysis` and `TeacherHub_StudentFlags` tabs. The Hub sends this so the named flags stay current. |

Errors come back as `{"ok": false, "error": "..."}` with a message describing the cause, and
the Hub displays it directly.

## Using it from the Sheet alone

You do not have to deploy anything to get the analysis. From the Sheet:

- **BeHistorical → Analyze Selected Filters...** opens a sidebar whose dropdowns are built
  from your real data.
- **BeHistorical → Analyze Everything** analyzes every response on file.

Both write the full named analysis to your tabs. Deploying the web app only adds the browser
dashboard on top.

## Extending the reference panels

The Hub's live analysis works for all 77 topics with no extra work. The deeper reference
panels (pacing guide, College Board alignment, answer keys, saved prompts, Canvas workflow)
are authored content and currently exist for Topic 1.1 only, in
`assets/data/teacher/teacher-1-1-song-china.js`. Copy that file, key it to another topic, and
those panels appear for that topic too. Topics without a file still show live analysis and
their AP skill focus, and say plainly that the reference has not been authored yet.
