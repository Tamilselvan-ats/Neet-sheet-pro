export async function uploadPdfAndExtractQuiz(file, apiUrl) {
  if (!apiUrl) {
    throw new Error('Missing API URL. Set VITE_PDF_QUIZ_API_URL in your environment.');
  }

  const formData = new FormData();
  formData.append('pdf', file);

  const response = await fetch(apiUrl, {
    method: 'POST',
    body: formData
  });

  if (!response.ok) {
    throw new Error(`PDF extraction failed (${response.status})`);
  }

  const data = await response.json();
  const questions = Array.isArray(data) ? data : data.questions;

  if (!Array.isArray(questions)) {
    throw new Error('Invalid API response. Expected an array or { questions: [] }.');
  }

  return normalizeQuestions(questions);
}

export function normalizeQuestions(questions) {
  return questions.map((question, index) => ({
    id: String(question.id ?? index + 1).padStart(3, '0'),
    subject: question.subject ?? 'General',
    chapter: question.chapter ?? 'Unknown',
    topic: question.topic ?? `Topic ${index + 1}`,
    difficulty: question.difficulty ?? 'Medium',
    question: question.question ?? 'Question text missing',
    image: question.image ?? '',
    options: Array.isArray(question.options) ? question.options.slice(0, 4) : [],
    answer: question.answer ?? 'A',
    year: question.year ?? new Date().getFullYear(),
    notesLink: question.notesLink ?? '#',
    videoLink: question.videoLink ?? '#'
  }));
}

export async function loadQuestionsFromJsonFile(file) {
  const rawText = await file.text();
  const parsed = JSON.parse(rawText);
  const questions = Array.isArray(parsed) ? parsed : parsed.questions;

  if (!Array.isArray(questions)) {
    throw new Error('Invalid JSON format. Expected an array or { questions: [] }.');
  }

  return normalizeQuestions(questions);
}
