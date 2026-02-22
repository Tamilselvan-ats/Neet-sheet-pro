import { useQuiz } from '../context/QuizContext';

export default function ResultScreen({ onHome }) {
  const { persisted } = useQuiz();
  const result = persisted.lastResult;

  if (!result) {
    return (
      <section className="card">
        <p>No result available yet.</p>
        <button onClick={onHome}>Go Home</button>
      </section>
    );
  }

  return (
    <section className="card">
      <h2>Result Summary</h2>
      <p className="score">
        Score: {result.score}/{result.total}
      </p>

      <div className="review-list">
        {result.answers.map((question) => (
          <article key={question.id} className="review-item">
            <p>
              <strong>{question.topic}</strong>: {question.question}
            </p>
            <p>
              Your answer: {question.selectedLabel || 'Not answered'} | Correct answer: {question.answer}
            </p>
            <span className={question.isCorrect ? 'badge correct' : 'badge wrong'}>
              {question.isCorrect ? 'Correct' : 'Wrong'}
            </span>
          </article>
        ))}
      </div>

      <button onClick={onHome}>Back to Home</button>
    </section>
  );
}
