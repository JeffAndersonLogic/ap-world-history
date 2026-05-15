# BeHistorical Modular Lesson Package — Fixed CSS Version

This package includes the missing stylesheet and a corrected folder structure.

## Place files like this in your GitHub repository

```text
ap-world-history/
├── index.html
├── unit-1/
│   └── lesson-1-1-song-china.html
└── assets/
    ├── css/
    │   └── behistorical.css
    ├── data/
    │   └── lesson-1-1-song-china.js
    └── logos/
        └── behistorical-logo.jpeg
```

## Important

The lesson page is inside `unit-1/`, so it uses paths like:

```html
../assets/css/behistorical.css
../assets/data/lesson-1-1-song-china.js
../assets/logos/behistorical-logo.jpeg
```

## Commit message

```text
Add fixed modular Lesson 1.1 package with stylesheet
```


## Locked Lecture Card Format
Lecture cards should remain side by side in a two-column grid on the lesson page. Do not place phrases such as "open," "click to enlarge," or "lecture card" on the cards. The cards themselves act as the trigger. When clicked, each card opens a larger modal with the enlarged bullets and one corresponding historical image. Lecture images should appear only in the modal, not on the standard lecture cards.
