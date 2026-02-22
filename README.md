# NEET Quiz Pro (React Web, Mobile Friendly)

This project is a mobile-friendly **React Web** NEET quiz app inspired by Neet-sheet-pro UI patterns and built to consume quiz JSON generated from a PDF extraction pipeline.

## Features
- Home dashboard with simulation setup (question count, year filter, topic filter)
- Topic tracker with progress slider, notes, notes/video links, and topic-based quiz start
- Quiz mode with:
  - one question at a time
  - optional question image
  - mark-for-review
  - previous/next navigation
  - question number navigation grid
  - timer
- Result screen with score and answer review
- Local persistence via **localStorage** (answers, review marks, topic notes/progress, last result)

## Data format
Place your extracted JSON in `src/data/questions.json` with fields like:

```json
[
  {
    "id":"001",
    "subject":"Physics",
    "chapter":"Electrostatics",
    "topic":"Coulomb's Law",
    "difficulty":"Medium",
    "question":"Question text",
    "image":"/images/page1_img1.svg",
    "options":["A option","B option","C option","D option"],
    "answer":"B",
    "year":2026
  }
]
```

## Project structure
- `src/context/QuizContext.jsx`: global state (Context API)
- `src/components/`: Dashboard, Topic Tracker, Quiz Screen, Result Screen
- `src/data/questions.json`: sample quiz data
- `public/images/`: question image placeholders

## Run locally
```bash
npm install
npm run dev
```
Then open the local Vite URL in your browser/mobile emulator.

## Build
```bash
npm run build
npm run preview
```

## Customization notes
- Replace `src/data/questions.json` with your PDF-extracted dataset.
- Put extracted image assets into `public/images/` and update each question's `image` path.
- `localStorage` key: `neet-quiz-progress-v1` (can be changed in context file).
