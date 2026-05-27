# BeHistorical Teacher Hub — Google Apps Script Analysis Layer

This folder contains the first functional prototype for connecting BeHistorical Google Form responses to the Teacher Hub.

The Teacher Hub itself is hosted on GitHub Pages, which is a static front end. It should not store private API keys or sensitive student data directly. The missing middle layer is Google Apps Script attached to the Google Sheet that receives BeHistorical Student Response Form submissions.

## What this prototype does

The included `Code.gs` script can:

- Read the Google Form response Sheet.
- Filter responses by Unit, Topic, Response Type, and Class Period.
- Count total responses.
- Calculate average confidence.
- Flag blank, short, or low-confidence responses.
- Detect common Topic 1.1 evidence patterns.
- Detect common Topic 1.1 misconception patterns.
- Detect basic AP writing gaps such as missing reasoning language.
- Generate reteach suggestions.
- Write structured analysis to `TeacherHub_Analysis`.
- Write student follow-up flags to `TeacherHub_StudentFlags`.
- Serve a JSON payload through a web-app endpoint for the Teacher Hub to fetch.

This is intentionally a rule-based prototype first. It makes the Hub functional before adding external AI APIs.

## Required Google Sheet columns

The Sheet connected to the BeHistorical Student Response Form should include these headers:

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

Optional but supported:

```text
AI Coaching Reflection
```

The script also recognizes some alternate header names, but the exact names above are strongly recommended.

## Current Topic 1.1 expected values

Unit:

```text
Unit 1 - The Global Tapestry
```

Topic:

```text
1.1 - Song China
```

Response Types:

```text
First and 10
AP Skill Builder
Checkpoint 1
Evidence Lab
Primary Source
Checkpoint 2
```

Prompt IDs:

```text
1.1-first10
1.1-ap-skill-builder
1.1-checkpoint-1
1.1-evidence-lab
1.1-primary-source
1.1-checkpoint-2
```

## Setup steps

1. Open the Google Sheet connected to the BeHistorical Student Response Form.
2. Go to **Extensions → Apps Script**.
3. Paste the contents of `Code.gs` into the Apps Script editor.
4. Save the project as something like `BeHistorical Teacher Hub Analysis`.
5. Reload the Google Sheet.
6. Use the new menu:

```text
BeHistorical → Create/Repair Teacher Hub Tabs
```

7. Submit a few test responses from the live Topic 1.1 lesson.
8. Use:

```text
BeHistorical → Analyze Topic 1.1
```

9. Check the generated tabs:

```text
TeacherHub_Analysis
TeacherHub_StudentFlags
TeacherHub_Settings
```

## Deploying as a web app

Only deploy this when you are ready to connect the GitHub Pages Teacher Hub to the Sheet output.

1. In Apps Script, click **Deploy → New deployment**.
2. Choose **Web app**.
3. Suggested prototype settings:

```text
Execute as: Me
Who has access: Anyone with the link
```

For student-identifiable data, review school privacy expectations before using a public-link deployment. A safer first version is to expose only aggregate summaries or anonymized flags.

After deployment, Apps Script gives you a Web App URL. You can test it with query parameters like:

```text
?topic=1.1%20-%20Song%20China&responseType=Checkpoint%201&classPeriod=Silver%201
```

Example fields:

```text
topic=1.1 - Song China
responseType=All Response Types
classPeriod=All Periods
write=true
```

`write=true` tells the script to update the `TeacherHub_Analysis` and `TeacherHub_StudentFlags` tabs while also returning JSON.

## Teacher Hub connection plan

The GitHub Teacher Hub should eventually fetch the Apps Script Web App URL and replace mock data with the returned JSON.

Recommended flow:

```text
Teacher Hub dropdowns
↓
Apps Script URL with topic/responseType/classPeriod
↓
JSON response
↓
Class Pulse panel updates
```

## Why the first version is rule-based

External AI APIs require API keys and stronger privacy review. This prototype gives you a functioning Teacher Hub data pipeline first:

```text
Google Form → Google Sheet → Apps Script → Teacher Hub JSON
```

After that is stable, the Apps Script can be extended to send anonymized response batches to ChatGPT, Claude, or Gemini and ask for richer analysis.

## Privacy note

Do not publish identifiable student names/responses into static GitHub files. Keep raw response data in Google Sheets or a protected backend layer. For the public GitHub Pages Teacher Hub, prefer aggregate summaries and carefully controlled student flags.
