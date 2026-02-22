import { useQuiz } from '../context/QuizContext';

export default function Dashboard({ onStart, onOpenTracker, availableYears, topics }) {
  const { quizConfig, setQuizConfig, persisted } = useQuiz();

  return (
    <section className="card">
      <h2>Home / Simulation Setup</h2>
      <div className="grid two">
        <label>
          Number of Questions
          <input
            type="number"
            min="1"
            max="180"
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
        <button onClick={onStart}>Start Simulation</button>
        <button className="ghost" onClick={onOpenTracker}>
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
