# The X-Ray class list: how to make it

The Curriculum X-Ray needs to know which backup account is in which class, and how
many students each class has. A backed-up answer carries neither: it holds an opaque
account id and nothing else. The class comes from your own two exports, joined in the
page.

**Nothing is uploaded and no name survives.** The page reads the two files in your
browser, matches them, and keeps only "account to class" and the class sizes. Every
email, login and name is dropped when the join finishes, and the file boxes empty
themselves. The page's security policy forbids it from sending anything anywhere.

## 1. The Firebase user export

You own the `behistoric` project, so you can export its accounts. From a terminal that
has the Firebase tools and has run `firebase login`:

```
npx firebase-tools auth:export users.json --format=JSON --project behistoric
```

The file lists each account's id and district email. It is the only place the two are
side by side, so treat it like a roster: keep it off shared drives, and delete it after
you build the class list. `users.json` is in `.gitignore` for that reason.

## 2. The Canvas gradebook export

In the Canvas course, Grades, then Actions, then **Export Entire Gradebook**. The CSV
should carry a Student column, a login column (SIS Login ID) and a **Section** column.

**Your Canvas section names need the class in them**: G1, G3, G4, S1, S2, S3 or S4, in
any form that reads as one ("G1 - AP World", "S3", "Period S3"). The page reads the
name, and it reports any it cannot read, with how many students were in it, rather than
guessing. G2 is not a class, so a G2 section is reported and left out.

The page matches the two files on the part of the address before the `@`, ignoring
capitals, so a Canvas login of `jsmith` matches `jsmith@stumail.zcs.k12.in.us`. If your
Canvas login column is not the district email name (a student number, say), nothing will
match, and the page says so in words instead of showing zeros.

## 3. In the page

Open **Class list**, choose the two files, press **Build class list**. It prints, for
each class, how many students are enrolled and how many have a backup account, and it
reports anything it left out:

- students in two classes at once (left out rather than filed twice)
- a section name that is not one of the seven
- an address that matched two accounts
- accounts that are on no class list
- enrolled students with no backup account yet, which is what the **Few records** flag
  looks for

Rebuild it whenever students join or leave a class. Students who have never opened a
lesson while signed in have no backup account, and correctly count as enrolled with no
record.

## What it cannot do

It cannot tell a student who did not do the work from one whose answer never reached the
backup (offline, never signed in, a different device that was cleared). A missing record
is not proof of anything, and the page says so beside the flag.
