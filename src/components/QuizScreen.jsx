import { useEffect, useMemo, useState } from 'react';
import { useQuiz } from '../context/QuizContext';

export default function QuizScreen({ questions, onSubmit, onExit }) {
  const { persisted, setAnswer, toggleReview } = useQuiz();
  const [index, setIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(Math.max(questions.length * 75, 60));

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onSubmit]);

  const current = questions[index];

  const optionLabels = useMemo(() => ['A', 'B', 'C', 'D'], []);

  if (!current) {
    return (
      <section className="card">
        <p>No questions found for this filter.</p>
        <button onClick={onExit}>Go Back</button>
      </section>
    );
  }

  const selected = persisted.selectedAnswers[current.id];

  return (
    <section className="card quiz-screen">
      <div className="row between">
        <h2>
          Question {index + 1}/{questions.length}
        </h2>
        <p className="timer">⏱ {Math.floor(secondsLeft / 60)}:{String(secondsLeft % 60).padStart(2, '0')}</p>
      </div>

      <p className="muted">
        {current.subject} • {current.topic} • {current.difficulty}
      </p>
      <p className="question">{current.question}</p>

      {current.image && <img src={current.image} alt="Question visual" className="question-image" />}

      <div className="options">
        {current.options.map((option, optionIndex) => (
          <button
            key={option}
            className={selected === optionIndex ? 'option selected' : 'option'}
            onClick={() => setAnswer(current.id, optionIndex)}
          >
            <span>{optionLabels[optionIndex]}.</span> {option}
          </button>
        ))}
      </div>

      <div className="row wrap small-gap">
        <button className="ghost" onClick={() => toggleReview(current.id)}>
          {persisted.markedForReview[current.id] ? 'Unmark Review' : 'Mark for Review'}
        </button>
        <button onClick={() => setIndex((prev) => Math.max(prev - 1, 0))}>Prev</button>
        <button onClick={() => setIndex((prev) => Math.min(prev + 1, questions.length - 1))}>Next</button>
        <button className="danger" onClick={onSubmit}>
          Submit Test
        </button>
      </div>

      <div className="nav-grid">
        {questions.map((question, idx) => {
          const answered = persisted.selectedAnswers[question.id] !== undefined;
          const marked = persisted.markedForReview[question.id];
          return (
            <button
              key={question.id}
              className={`nav-pill ${idx === index ? 'active' : ''} ${answered ? 'answered' : ''} ${marked ? 'marked' : ''}`}
              onClick={() => setIndex(idx)}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>
    </section>
  );
}
