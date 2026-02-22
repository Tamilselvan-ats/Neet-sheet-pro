import { useMemo, useState } from 'react';
import { useQuiz } from './context/QuizContext';
import Dashboard from './components/Dashboard';
import TopicTracker from './components/TopicTracker';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';

function pickQuestions(allQuestions, config) {
  const filtered = allQuestions.filter((q) => {
    const yearMatch = config.year === 'All' || String(q.year) === String(config.year);
    const topicMatch = config.topic === 'All' || q.topic === config.topic;
    return yearMatch && topicMatch;
  });
  return filtered.slice(0, config.count);
}

export default function App() {
  const { allQuestions, quizConfig, persisted, saveResult, resetQuestionState } = useQuiz();
  const [screen, setScreen] = useState('home');
  const [activeQuestions, setActiveQuestions] = useState([]);

  const availableYears = useMemo(() => ['All', ...new Set(allQuestions.map((q) => q.year))], [allQuestions]);
  const topics = useMemo(() => ['All', ...new Set(allQuestions.map((q) => q.topic))], [allQuestions]);

  const startQuiz = () => {
    const questions = pickQuestions(allQuestions, quizConfig);
    setActiveQuestions(questions);
    resetQuestionState();
    setScreen('quiz');
  };

  const submitQuiz = () => {
    const withAnswers = activeQuestions.map((question) => {
      const selectedOption = persisted.selectedAnswers[question.id];
      const selectedLabel = selectedOption !== undefined ? String.fromCharCode(65 + selectedOption) : null;
      return { ...question, selectedOption, selectedLabel, isCorrect: selectedLabel === question.answer };
    });
    const score = withAnswers.filter((x) => x.isCorrect).length;
    const result = { score, total: withAnswers.length, answers: withAnswers, submittedAt: new Date().toISOString() };
    saveResult(result);
    setScreen('result');
  };

  return (
    <div className="app-shell">
      <header>
        <h1>NEET Quiz Pro</h1>
        <p>Mobile-ready quiz app for PDF-extracted JSON content.</p>
      </header>

      {screen === 'home' && (
        <Dashboard
          onStart={startQuiz}
          onOpenTracker={() => setScreen('tracker')}
          availableYears={availableYears}
          topics={topics}
        />
      )}

      {screen === 'tracker' && <TopicTracker onBack={() => setScreen('home')} onStart={startQuiz} />}

      {screen === 'quiz' && (
        <QuizScreen
          questions={activeQuestions}
          onSubmit={submitQuiz}
          onExit={() => setScreen('home')}
        />
      )}

      {screen === 'result' && <ResultScreen onHome={() => setScreen('home')} />}
    </div>
  );
}
