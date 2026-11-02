# AP World History: Semester 1 Finals Week Canvas Events

Built 2026-11-02 from the school's 2026-2027 Finals Week Schedule Adjustment
memo and Jeff's answers about his sections (G4 on Green Day, S1 to S4 on Silver
Day). Three events: two review events and the final exam itself.

**Why this file is not generated.** `scripts/build-canvas-events.js` prints one
event per topic with one date per cohort. Finals week cannot be said that way:
Silver reviews on two days in a row, and the Silver finals split by period, S1
and S2 on Thursday and S3 and S4 on Friday. So these events are written per
period, here, and the six finals-week days in
`assets/data/announcements-schedule.js` point at this file with
`canvasEventIn`. `scripts/test/schedule-cohorts.test.js` fails the push if this
file stops naming any of those dates. The styles are the generator's own, so the
events look like every other one in the course calendar.

If a finals-week date changes, change it in the schedule (the classroom board)
and here, in the same commit.

## How to paste each event

1. In the Canvas Calendar, click the date, then **Edit**, then **More Options**.
2. Type the event title exactly as shown.
3. In the Rich Content Editor, click the **`</>`** icon to open the HTML editor. Never paste into the visual editor.
4. Paste the whole HTML block (the dark masthead and the table together).
5. Check **Use a different date for each section** and fill in one row per section from the table under the event.
6. Save.

---

## Event 1: Semester 1 Final Review

**Event title:** `APW - Semester 1 Final Review`

**One row per section:**

| Section | Date | Time |
| --- | --- | --- |
| G4 | Thursday, December 10 | G4 class time |
| S1 | Friday, December 11 | S1 class time |
| S2 | Friday, December 11 | S2 class time |
| S3 | Friday, December 11 | S3 class time |
| S4 | Friday, December 11 | S4 class time |

```html
<div style="background-color: #1a1c1d; border-top: 4px solid #c9a46a; padding: 14px 18px; color: #f5f0e7;">
    <img src="https://behistorical.com/assets/logos/behistorical-wordmark-light.png" alt="BeHistorical" style="display: block; height: 30px; width: auto; max-width: 100%; border: 0;">
    <div style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #c9a46a; padding-top: 4px;">AP World History &middot; Units 1 to 4 and Topics 5.1 to 5.3</div>
    <div style="font-family: Cinzel, 'Trajan Pro', Georgia, serif; font-size: 17px; font-weight: bold; color: #f5f0e7; padding-top: 6px;">Semester 1 Final Review</div>
    <div style="padding-top: 10px; font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; color: #f5f0e7;">
        <span style="display: inline-block; padding-right: 22px;"><span style="display: inline-block; width: 22px; height: 22px; line-height: 20px; text-align: center; border: 2px solid #2F5C46; border-radius: 50%; background-color: #2F5C46; color: #1a1c1d; font-family: Montserrat, Arial, Helvetica, sans-serif; font-weight: bold; font-size: 12px; vertical-align: middle;">G</span><span style="padding-left: 8px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #7FB496;">Green Day (G4)</span><span style="padding-left: 8px; color: #f5f0e7;">Thursday, December 10</span></span>
        <span style="display: inline-block; padding-right: 22px;"><span style="display: inline-block; width: 22px; height: 22px; line-height: 20px; text-align: center; border: 2px solid #8A9298; border-radius: 50%; background-color: transparent; color: #8A9298; font-family: Montserrat, Arial, Helvetica, sans-serif; font-weight: bold; font-size: 12px; vertical-align: middle;">S</span><span style="padding-left: 8px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #B9C1C6;">Silver Day (S1 to S4)</span><span style="padding-left: 8px; color: #f5f0e7;">Friday, December 11</span></span>
    </div>
</div>
<table style="border-collapse: collapse; width: 100%; border-color: #ddd2be; border-style: solid;" border="1" cellpadding="10">
    <tbody>
        <tr>
            <td style="width: 22%; vertical-align: top; background-color: #f5f0e7; border-left: 5px solid #6b3e1f;">
                <h3 style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #6b3e1f; margin: 0;">OVERVIEW</h3>
            </td>
            <td style="vertical-align: top; background-color: #fffdf7;">
                <p style="font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; font-size: 15px; line-height: 1.55; color: #151718; margin: 0;">Today is a review day for your Semester 1 Final. Use it to find the gaps in what you know and to ask questions. Green Day (G4): this is your last regular class before your final. Silver Day: you have a second review day on Monday, December 14. The final covers Units 1 to 4 and Topics 5.1 to 5.3: state building and trade networks from c. 1200 to c. 1450, the land-based and maritime empires of c. 1450 to c. 1750, and the start of Unit 5, which covers the Enlightenment, the revolutions it helped inspire, and the beginning of the Industrial Revolution. <strong>Schedule change:</strong> Monday, December 14 is now a Silver Day and Tuesday, December 15 is now a Green Day.</p>
            </td>
        </tr>
        <tr>
            <td style="width: 22%; vertical-align: top; background-color: #f5f0e7; border-left: 5px solid #6b3e1f;">
                <h3 style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #6b3e1f; margin: 0;">LEARNING TARGETS</h3>
            </td>
            <td style="vertical-align: top; background-color: #fffdf7;">
                <ul style="margin: 0 0 0 18px; padding: 0; font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; font-size: 15px; line-height: 1.5; color: #151718;">
                    <li style="margin: 0 0 6px 0;">I can identify which concepts from Units 1 to 4 and Topics 5.1 to 5.3 I need to review before my Semester 1 Final.</li>
                    <li style="margin: 0 0 6px 0;">I can explain the major developments of each unit and connect them across time, from c. 1200 to the start of the Industrial Revolution.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td style="width: 22%; vertical-align: top; background-color: #f5f0e7; border-left: 5px solid #6b3e1f;">
                <h3 style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #6b3e1f; margin: 0;">SUCCESS CRITERIA</h3>
            </td>
            <td style="vertical-align: top; background-color: #fffdf7;">
                <ul style="margin: 0 0 0 18px; padding: 0; font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; font-size: 15px; line-height: 1.5; color: #151718;">
                    <li style="margin: 0 0 6px 0;">I can name the topics I am least sure of and make a plan to review them before my final.</li>
                    <li style="margin: 0 0 6px 0;">I can explain at least one development from each unit using specific historical evidence.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td style="width: 22%; vertical-align: top; background-color: #f5f0e7; border-left: 5px solid #6b3e1f;">
                <h3 style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #6b3e1f; margin: 0;">TONIGHT'S WORK</h3>
            </td>
            <td style="vertical-align: top; background-color: #fffdf7;">
                <ul style="margin: 0 0 0 18px; padding: 0; font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; font-size: 15px; line-height: 1.5; color: #151718;">
                    <li style="margin: 0 0 6px 0;">Review Units 1 to 4 and Topics 5.1 to 5.3 for your Semester 1 Final, starting with the topics you marked as weakest today.</li>
                    <li style="margin: 0 0 6px 0;"><strong>Green Day (G4):</strong> MAP on Tuesday, December 15 meets before your G4 final. Bring your questions.</li>
                    <li style="margin: 0 0 6px 0;"><strong>Silver Day:</strong> Bring your list of weakest topics to your second review day on Monday, December 14.</li>
                </ul>
                <p style="margin: 12px 0 0 0;">
                    <span style="display: inline-block; margin: 0 10px 6px 0; font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 12px; font-weight: bold; letter-spacing: 0.06em; color: #2F5C46; border: 1px solid #2F5C46; border-radius: 2px; padding: 4px 9px;"><span style="display: inline-block; width: 22px; height: 22px; line-height: 20px; text-align: center; border: 2px solid #2F5C46; border-radius: 50%; background-color: #2F5C46; color: #1a1c1d; font-family: Montserrat, Arial, Helvetica, sans-serif; font-weight: bold; font-size: 12px; vertical-align: middle;">G</span><span style="padding-left: 7px; text-transform: uppercase;">G4 final: Tuesday, December 15</span></span>
                    <span style="display: inline-block; margin: 0 10px 6px 0; font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 12px; font-weight: bold; letter-spacing: 0.06em; color: #545B5F; border: 1px solid #8A9298; border-radius: 2px; padding: 4px 9px;"><span style="display: inline-block; width: 22px; height: 22px; line-height: 20px; text-align: center; border: 2px solid #8A9298; border-radius: 50%; background-color: transparent; color: #8A9298; font-family: Montserrat, Arial, Helvetica, sans-serif; font-weight: bold; font-size: 12px; vertical-align: middle;">S</span><span style="padding-left: 7px; text-transform: uppercase;">S1 and S2 final: Thursday, December 17</span></span>
                    <span style="display: inline-block; margin: 0 10px 6px 0; font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 12px; font-weight: bold; letter-spacing: 0.06em; color: #545B5F; border: 1px solid #8A9298; border-radius: 2px; padding: 4px 9px;"><span style="display: inline-block; width: 22px; height: 22px; line-height: 20px; text-align: center; border: 2px solid #8A9298; border-radius: 50%; background-color: transparent; color: #8A9298; font-family: Montserrat, Arial, Helvetica, sans-serif; font-weight: bold; font-size: 12px; vertical-align: middle;">S</span><span style="padding-left: 7px; text-transform: uppercase;">S3 and S4 final: Friday, December 18</span></span>
                </p>
            </td>
        </tr>
        <tr>
            <td style="width: 22%; vertical-align: top; background-color: #f5f0e7; border-left: 5px solid #6b3e1f;">
                <h3 style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #6b3e1f; margin: 0;">STUDY RESOURCES</h3>
            </td>
            <td style="vertical-align: top; background-color: #fffdf7;">
                <ul style="margin: 0 0 0 18px; padding: 0; font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; font-size: 15px; line-height: 1.5; color: #151718;">
                    <li style="margin: 0 0 6px 0;"><a class="inline_disabled" href="https://behistorical.com/study-guides/era-2-exam-study-guide.html" target="_blank" rel="noopener" style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 14px; color: #6b3e1f; font-weight: bold;">Era 2 Exam Study Guide</a> Units 1 and 2, c. 1200 to c. 1450.</li>
                    <li style="margin: 0 0 6px 0;"><a class="inline_disabled" href="https://behistorical.com/study-guides/era-3-exam-study-guide.html" target="_blank" rel="noopener" style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 14px; color: #6b3e1f; font-weight: bold;">Era 3 Exam Study Guide</a> Units 3 and 4, c. 1450 to c. 1750.</li>
                    <li style="margin: 0 0 6px 0;"><a class="inline_disabled" href="https://behistorical.com/ebook/unit-5.html" target="_blank" rel="noopener" style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 14px; color: #6b3e1f; font-weight: bold;">Unit 5 eBook</a> Topics 5.1 to 5.3: the Enlightenment, nationalism and revolutions, and the start of the Industrial Revolution.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td style="width: 22%; vertical-align: top; background-color: #f5f0e7; border-left: 5px solid #6b3e1f;">
                <h3 style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #6b3e1f; margin: 0;">BeHistorical Link</h3>
            </td>
            <td style="vertical-align: top; background-color: #fffdf7;">
                <p style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 14px; margin: 0;"><a class="inline_disabled" href="https://behistorical.com/" target="_blank" rel="noopener" style="color: #6b3e1f; font-weight: bold;">BeHistorical</a></p>
            </td>
        </tr>
    </tbody>
</table>
```

---

## Event 2: Semester 1 Final Review, Day 2 (Silver only)

**Event title:** `APW - Semester 1 Final Review, Day 2`

**One row per section (Silver sections only; leave G4 off this event):**

| Section | Date | Time |
| --- | --- | --- |
| S1 | Monday, December 14 | S1 class time |
| S2 | Monday, December 14 | S2 class time |
| S3 | Monday, December 14 | S3 class time |
| S4 | Monday, December 14 | S4 class time |

```html
<div style="background-color: #1a1c1d; border-top: 4px solid #c9a46a; padding: 14px 18px; color: #f5f0e7;">
    <img src="https://behistorical.com/assets/logos/behistorical-wordmark-light.png" alt="BeHistorical" style="display: block; height: 30px; width: auto; max-width: 100%; border: 0;">
    <div style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #c9a46a; padding-top: 4px;">AP World History &middot; Units 1 to 4 and Topics 5.1 to 5.3</div>
    <div style="font-family: Cinzel, 'Trajan Pro', Georgia, serif; font-size: 17px; font-weight: bold; color: #f5f0e7; padding-top: 6px;">Semester 1 Final Review, Day 2</div>
    <div style="padding-top: 10px; font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; color: #f5f0e7;">
        <span style="display: inline-block; padding-right: 22px;"><span style="display: inline-block; width: 22px; height: 22px; line-height: 20px; text-align: center; border: 2px solid #8A9298; border-radius: 50%; background-color: transparent; color: #8A9298; font-family: Montserrat, Arial, Helvetica, sans-serif; font-weight: bold; font-size: 12px; vertical-align: middle;">S</span><span style="padding-left: 8px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #B9C1C6;">Silver Day (S1 to S4)</span><span style="padding-left: 8px; color: #f5f0e7;">Monday, December 14</span></span>
    </div>
</div>
<table style="border-collapse: collapse; width: 100%; border-color: #ddd2be; border-style: solid;" border="1" cellpadding="10">
    <tbody>
        <tr>
            <td style="width: 22%; vertical-align: top; background-color: #f5f0e7; border-left: 5px solid #6b3e1f;">
                <h3 style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #6b3e1f; margin: 0;">OVERVIEW</h3>
            </td>
            <td style="vertical-align: top; background-color: #fffdf7;">
                <p style="font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; font-size: 15px; line-height: 1.55; color: #151718; margin: 0;">Today is your second review day and your last regular class before your Semester 1 Final. Pick up where Friday left off and bring your questions. The final covers Units 1 to 4 and Topics 5.1 to 5.3: state building and trade networks from c. 1200 to c. 1450, the land-based and maritime empires of c. 1450 to c. 1750, and the start of Unit 5, which covers the Enlightenment, the revolutions it helped inspire, and the beginning of the Industrial Revolution. <strong>Schedule change:</strong> Monday, December 14 is now a Silver Day and Tuesday, December 15 is now a Green Day.</p>
            </td>
        </tr>
        <tr>
            <td style="width: 22%; vertical-align: top; background-color: #f5f0e7; border-left: 5px solid #6b3e1f;">
                <h3 style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #6b3e1f; margin: 0;">LEARNING TARGETS</h3>
            </td>
            <td style="vertical-align: top; background-color: #fffdf7;">
                <ul style="margin: 0 0 0 18px; padding: 0; font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; font-size: 15px; line-height: 1.5; color: #151718;">
                    <li style="margin: 0 0 6px 0;">I can identify which concepts from Units 1 to 4 and Topics 5.1 to 5.3 I need to review before my Semester 1 Final.</li>
                    <li style="margin: 0 0 6px 0;">I can explain the major developments of each unit and connect them across time, from c. 1200 to the start of the Industrial Revolution.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td style="width: 22%; vertical-align: top; background-color: #f5f0e7; border-left: 5px solid #6b3e1f;">
                <h3 style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #6b3e1f; margin: 0;">SUCCESS CRITERIA</h3>
            </td>
            <td style="vertical-align: top; background-color: #fffdf7;">
                <ul style="margin: 0 0 0 18px; padding: 0; font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; font-size: 15px; line-height: 1.5; color: #151718;">
                    <li style="margin: 0 0 6px 0;">I can name the topics I am least sure of and make a plan to review them before my final.</li>
                    <li style="margin: 0 0 6px 0;">I can explain at least one development from each unit using specific historical evidence.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td style="width: 22%; vertical-align: top; background-color: #f5f0e7; border-left: 5px solid #6b3e1f;">
                <h3 style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #6b3e1f; margin: 0;">TONIGHT'S WORK</h3>
            </td>
            <td style="vertical-align: top; background-color: #fffdf7;">
                <ul style="margin: 0 0 0 18px; padding: 0; font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; font-size: 15px; line-height: 1.5; color: #151718;">
                    <li style="margin: 0 0 6px 0;">Keep reviewing Units 1 to 4 and Topics 5.1 to 5.3 for your Semester 1 Final, focusing on the topics you are still least sure of.</li>
                    <li style="margin: 0 0 6px 0;"><strong>Silver Day:</strong> Office hours run 12:40 to 3:40 on the Wednesday and Thursday afternoons of finals week (December 16 and 17), in person, through Canvas, or by email.</li>
                </ul>
                <p style="margin: 12px 0 0 0;">
                    <span style="display: inline-block; margin: 0 10px 6px 0; font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 12px; font-weight: bold; letter-spacing: 0.06em; color: #545B5F; border: 1px solid #8A9298; border-radius: 2px; padding: 4px 9px;"><span style="display: inline-block; width: 22px; height: 22px; line-height: 20px; text-align: center; border: 2px solid #8A9298; border-radius: 50%; background-color: transparent; color: #8A9298; font-family: Montserrat, Arial, Helvetica, sans-serif; font-weight: bold; font-size: 12px; vertical-align: middle;">S</span><span style="padding-left: 7px; text-transform: uppercase;">S1 and S2 final: Thursday, December 17</span></span>
                    <span style="display: inline-block; margin: 0 10px 6px 0; font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 12px; font-weight: bold; letter-spacing: 0.06em; color: #545B5F; border: 1px solid #8A9298; border-radius: 2px; padding: 4px 9px;"><span style="display: inline-block; width: 22px; height: 22px; line-height: 20px; text-align: center; border: 2px solid #8A9298; border-radius: 50%; background-color: transparent; color: #8A9298; font-family: Montserrat, Arial, Helvetica, sans-serif; font-weight: bold; font-size: 12px; vertical-align: middle;">S</span><span style="padding-left: 7px; text-transform: uppercase;">S3 and S4 final: Friday, December 18</span></span>
                </p>
            </td>
        </tr>
        <tr>
            <td style="width: 22%; vertical-align: top; background-color: #f5f0e7; border-left: 5px solid #6b3e1f;">
                <h3 style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #6b3e1f; margin: 0;">STUDY RESOURCES</h3>
            </td>
            <td style="vertical-align: top; background-color: #fffdf7;">
                <ul style="margin: 0 0 0 18px; padding: 0; font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; font-size: 15px; line-height: 1.5; color: #151718;">
                    <li style="margin: 0 0 6px 0;"><a class="inline_disabled" href="https://behistorical.com/study-guides/era-2-exam-study-guide.html" target="_blank" rel="noopener" style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 14px; color: #6b3e1f; font-weight: bold;">Era 2 Exam Study Guide</a> Units 1 and 2, c. 1200 to c. 1450.</li>
                    <li style="margin: 0 0 6px 0;"><a class="inline_disabled" href="https://behistorical.com/study-guides/era-3-exam-study-guide.html" target="_blank" rel="noopener" style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 14px; color: #6b3e1f; font-weight: bold;">Era 3 Exam Study Guide</a> Units 3 and 4, c. 1450 to c. 1750.</li>
                    <li style="margin: 0 0 6px 0;"><a class="inline_disabled" href="https://behistorical.com/ebook/unit-5.html" target="_blank" rel="noopener" style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 14px; color: #6b3e1f; font-weight: bold;">Unit 5 eBook</a> Topics 5.1 to 5.3: the Enlightenment, nationalism and revolutions, and the start of the Industrial Revolution.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td style="width: 22%; vertical-align: top; background-color: #f5f0e7; border-left: 5px solid #6b3e1f;">
                <h3 style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #6b3e1f; margin: 0;">BeHistorical Link</h3>
            </td>
            <td style="vertical-align: top; background-color: #fffdf7;">
                <p style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 14px; margin: 0;"><a class="inline_disabled" href="https://behistorical.com/" target="_blank" rel="noopener" style="color: #6b3e1f; font-weight: bold;">BeHistorical</a></p>
            </td>
        </tr>
    </tbody>
</table>
```

---

## Event 3: Semester 1 Final Exam

**Event title:** `APW - Semester 1 Final Exam`

**One row per section:**

| Section | Date | Time |
| --- | --- | --- |
| G4 | Tuesday, December 15 | G4 block |
| S1 | Thursday, December 17 | 8:30 to 10:00 |
| S2 | Thursday, December 17 | 10:10 to 11:40 |
| S3 | Friday, December 18 | 8:30 to 10:00 |
| S4 | Friday, December 18 | 10:10 to 11:40 |

```html
<div style="background-color: #1a1c1d; border-top: 4px solid #c9a46a; padding: 14px 18px; color: #f5f0e7;">
    <img src="https://behistorical.com/assets/logos/behistorical-wordmark-light.png" alt="BeHistorical" style="display: block; height: 30px; width: auto; max-width: 100%; border: 0;">
    <div style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #c9a46a; padding-top: 4px;">AP World History &middot; Final Exam</div>
    <div style="font-family: Cinzel, 'Trajan Pro', Georgia, serif; font-size: 17px; font-weight: bold; color: #f5f0e7; padding-top: 6px;">Semester 1 Final Exam</div>
    <div style="padding-top: 10px; font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; color: #f5f0e7;">
        <span style="display: inline-block; padding-right: 22px;"><span style="display: inline-block; width: 22px; height: 22px; line-height: 20px; text-align: center; border: 2px solid #2F5C46; border-radius: 50%; background-color: #2F5C46; color: #1a1c1d; font-family: Montserrat, Arial, Helvetica, sans-serif; font-weight: bold; font-size: 12px; vertical-align: middle;">G</span><span style="padding-left: 8px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #7FB496;">G4</span><span style="padding-left: 8px; color: #f5f0e7;">Tuesday, December 15</span></span>
        <span style="display: inline-block; padding-right: 22px;"><span style="display: inline-block; width: 22px; height: 22px; line-height: 20px; text-align: center; border: 2px solid #8A9298; border-radius: 50%; background-color: transparent; color: #8A9298; font-family: Montserrat, Arial, Helvetica, sans-serif; font-weight: bold; font-size: 12px; vertical-align: middle;">S</span><span style="padding-left: 8px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #B9C1C6;">S1 and S2</span><span style="padding-left: 8px; color: #f5f0e7;">Thursday, December 17</span></span>
        <span style="display: inline-block; padding-right: 22px;"><span style="display: inline-block; width: 22px; height: 22px; line-height: 20px; text-align: center; border: 2px solid #8A9298; border-radius: 50%; background-color: transparent; color: #8A9298; font-family: Montserrat, Arial, Helvetica, sans-serif; font-weight: bold; font-size: 12px; vertical-align: middle;">S</span><span style="padding-left: 8px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #B9C1C6;">S3 and S4</span><span style="padding-left: 8px; color: #f5f0e7;">Friday, December 18</span></span>
    </div>
</div>
<table style="border-collapse: collapse; width: 100%; border-color: #ddd2be; border-style: solid;" border="1" cellpadding="10">
    <tbody>
        <tr>
            <td style="width: 22%; vertical-align: top; background-color: #f5f0e7; border-left: 5px solid #6b3e1f;">
                <h3 style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #6b3e1f; margin: 0;">OVERVIEW</h3>
            </td>
            <td style="vertical-align: top; background-color: #fffdf7;">
                <p style="font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; font-size: 15px; line-height: 1.55; color: #151718; margin: 0;">Covers Units 1 to 4 and Topics 5.1 to 5.3: state building and trade networks from c. 1200 to c. 1450, the land-based and maritime empires of c. 1450 to c. 1750, and the Enlightenment, the revolutions it helped inspire, and the beginning of the Industrial Revolution.</p>
            </td>
        </tr>
        <tr>
            <td style="width: 22%; vertical-align: top; background-color: #f5f0e7; border-left: 5px solid #6b3e1f;">
                <h3 style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #6b3e1f; margin: 0;">YOUR FINAL</h3>
            </td>
            <td style="vertical-align: top; background-color: #fffdf7;">
                <ul style="margin: 0 0 0 18px; padding: 0; font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; font-size: 15px; line-height: 1.5; color: #151718;">
                    <li style="margin: 0 0 6px 0;"><strong>G4:</strong> Tuesday, December 15, during your regular G4 block (a full school day).</li>
                    <li style="margin: 0 0 6px 0;"><strong>S1:</strong> Thursday, December 17, 8:30 to 10:00.</li>
                    <li style="margin: 0 0 6px 0;"><strong>S2:</strong> Thursday, December 17, 10:10 to 11:40.</li>
                    <li style="margin: 0 0 6px 0;"><strong>S3:</strong> Friday, December 18, 8:30 to 10:00.</li>
                    <li style="margin: 0 0 6px 0;"><strong>S4:</strong> Friday, December 18, 10:10 to 11:40.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td style="width: 22%; vertical-align: top; background-color: #f5f0e7; border-left: 5px solid #6b3e1f;">
                <h3 style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #6b3e1f; margin: 0;">FINALS WEEK</h3>
            </td>
            <td style="vertical-align: top; background-color: #fffdf7;">
                <ul style="margin: 0 0 0 18px; padding: 0; font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; font-size: 15px; line-height: 1.5; color: #151718;">
                    <li style="margin: 0 0 6px 0;"><strong>Schedule change:</strong> Monday, December 14 is now a Silver Day and Tuesday, December 15 is now a Green Day.</li>
                    <li style="margin: 0 0 6px 0;">Wednesday, Thursday, and Friday (December 16 to 18) are half days. You take two finals each morning between 8:30 and 11:40, and you are released at 11:40.</li>
                    <li style="margin: 0 0 6px 0;">No one is released from class during a finals block, so plan to stay until your block ends.</li>
                    <li style="margin: 0 0 6px 0;">Need help? Teachers hold office hours each half-day afternoon from 12:40 to 3:40, in person, through Canvas, or by email. Green Day students can also use MAP on December 8, 10, and 15.</li>
                    <li style="margin: 0 0 6px 0;">If you have an unavoidable absence planned during finals, a parent or guardian should report it to the attendance office as soon as possible.</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td style="width: 22%; vertical-align: top; background-color: #f5f0e7; border-left: 5px solid #6b3e1f;">
                <h3 style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bold; letter-spacing: 0.12em; text-transform: uppercase; color: #6b3e1f; margin: 0;">STUDY RESOURCES</h3>
            </td>
            <td style="vertical-align: top; background-color: #fffdf7;">
                <ul style="margin: 0 0 0 18px; padding: 0; font-family: 'Libre Baskerville', Georgia, 'Times New Roman', serif; font-size: 15px; line-height: 1.5; color: #151718;">
                    <li style="margin: 0 0 6px 0;"><a class="inline_disabled" href="https://behistorical.com/study-guides/era-2-exam-study-guide.html" target="_blank" rel="noopener" style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 14px; color: #6b3e1f; font-weight: bold;">Era 2 Exam Study Guide</a> Units 1 and 2, c. 1200 to c. 1450.</li>
                    <li style="margin: 0 0 6px 0;"><a class="inline_disabled" href="https://behistorical.com/study-guides/era-3-exam-study-guide.html" target="_blank" rel="noopener" style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 14px; color: #6b3e1f; font-weight: bold;">Era 3 Exam Study Guide</a> Units 3 and 4, c. 1450 to c. 1750.</li>
                    <li style="margin: 0 0 6px 0;"><a class="inline_disabled" href="https://behistorical.com/ebook/unit-5.html" target="_blank" rel="noopener" style="font-family: Montserrat, Arial, Helvetica, sans-serif; font-size: 14px; color: #6b3e1f; font-weight: bold;">Unit 5 eBook</a> Topics 5.1 to 5.3: the Enlightenment, nationalism and revolutions, and the start of the Industrial Revolution.</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>
```
