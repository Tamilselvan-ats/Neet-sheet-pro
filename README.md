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
- External input support:
  - Upload PDF and extract quiz via external API endpoint
  - Upload externally-generated JSON file directly from dashboard

## Data format
Use this question structure for JSON payloads:

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

## External PDF extractor integration
Set an environment variable so the app can send uploaded PDF files to your extractor API.

1. Create `.env` in project root:
```bash
VITE_PDF_QUIZ_API_URL=http://localhost:8000/extract-quiz
```
2. The app sends a `multipart/form-data` request with key `pdf`.
3. API response can be either:
   - a raw array of questions, or
   - an object: `{ "questions": [ ... ] }`

## Project structure
- `src/context/QuizContext.jsx`: global state (Context API + active question source)
- `src/components/`: Dashboard, Topic Tracker, Quiz Screen, Result Screen
- `src/services/pdfQuizService.js`: external PDF/JSON loading helpers
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
- Replace `src/data/questions.json` with your PDF-extracted dataset if needed.
- Put extracted image assets into `public/images/` and update each question's `image` path.
- `localStorage` key: `neet-quiz-progress-v1` (can be changed in context file).
