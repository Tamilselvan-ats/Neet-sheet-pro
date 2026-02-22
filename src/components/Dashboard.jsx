import { useState } from 'react';
import { useQuiz } from '../context/QuizContext';
import {
  loadQuestionsFromJsonFile,
  uploadPdfAndExtractQuiz
} from '../services/pdfQuizService';

const API_URL = import.meta.env.VITE_PDF_QUIZ_API_URL;

export default function Dashboard({ onStart, onOpenTracker, availableYears, topics }) {
  const {
    quizConfig,
    setQuizConfig,
    persisted,
    replaceQuestions,
    resetToSampleData,
    dataSource,
    allQuestions
  } = useQuiz();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const onPdfUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setError('');
    try {
      const extractedQuestions = await uploadPdfAndExtractQuiz(file, API_URL);
      replaceQuestions(extractedQuestions, 'external-pdf-api');
    } catch (uploadError) {
      setError(uploadError.message);
    } finally {
      setIsLoading(false);
      event.target.value = '';
    }
  };

  const onJsonUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);
    setError('');
    try {
      const extractedQuestions = await loadQuestionsFromJsonFile(file);
      replaceQuestions(extractedQuestions, 'external-json-file');
    } catch (uploadError) {
      setError(uploadError.message);
    } finally {
      setIsLoading(false);
      event.target.value = '';
    }
  };

  return (
    <section className="card">
      <h2>Home / Simulation Setup</h2>

      <div className="source-block">
        <p className="muted">
          Data source: <strong>{dataSource}</strong> • Loaded questions: <strong>{allQuestions.length}</strong>
        </p>
        <div className="row wrap small-gap">
          <label className="upload-label">
            Upload PDF (external extractor API)
            <input type="file" accept="application/pdf" onChange={onPdfUpload} disabled={isLoading} />
          </label>
          <label className="upload-label">
            Upload Extracted JSON
            <input type="file" accept="application/json" onChange={onJsonUpload} disabled={isLoading} />
          </label>
          <button className="ghost" onClick={resetToSampleData}>
            Restore Sample Data
          </button>
        </div>
        {!API_URL && (
          <p className="muted tiny">
            Set <code>VITE_PDF_QUIZ_API_URL</code> to enable PDF upload extraction.
          </p>
        )}
        {error && <p className="error-text">{error}</p>}
      </div>

      <div className="grid two">
        <label>
          Number of Questions
          <input
            type="number"
            min="1"
            max={allQuestions.length || 1}
            value={quizConfig.count}
            onChange={(e) => setQuizConfig({ ...quizConfig, count: Number(e.target.value) })}
          />
        </label>

        <label>
          Filter by Year
          <select value={quizConfig.year} onChange={(e) => setQuizConfig({ ...quizConfig, year: e.target.value })}>
            {availableYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>

        <label>
          Filter by Topic
          <select value={quizConfig.topic} onChange={(e) => setQuizConfig({ ...quizConfig, topic: e.target.value })}>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="actions">
        <button onClick={onStart} disabled={!allQuestions.length || isLoading}>
          {isLoading ? 'Loading...' : 'Start Simulation'}
        </button>
        <button className="ghost" onClick={onOpenTracker} disabled={!allQuestions.length}>
          Open Topic Tracker
        </button>
      </div>

      {persisted.lastResult && (
        <p className="muted">
          Last attempt: {persisted.lastResult.score}/{persisted.lastResult.total}
        </p>
      )}
    </section>
  );
}
