import { useQuiz } from '../context/QuizContext';

export default function TopicTracker({ onBack, onStart }) {
  const { topicSummary, persisted, saveTopicNote, markTopicProgress, setQuizConfig } = useQuiz();

  return (
    <section className="card">
      <div className="row between">
        <h2>Topic Tracker</h2>
        <button className="ghost" onClick={onBack}>
          Back
        </button>
      </div>

      <div className="topic-list">
        {topicSummary.map((topic) => (
          <article key={topic.topic} className="topic-item">
            <h3>{topic.topic}</h3>
            <p>
              {topic.subject} • {topic.chapter} • {topic.difficulty}
            </p>
            <div className="row wrap small-gap">
              <a href={topic.notesLink} target="_blank" rel="noreferrer">
                Notes
              </a>
              <a href={topic.videoLink} target="_blank" rel="noreferrer">
                Video
              </a>
            </div>
            <label>
              Progress
              <input
                type="range"
                min="0"
                max="100"
                value={persisted.topicProgress[topic.topic] || 0}
                onChange={(e) => markTopicProgress(topic.topic, Number(e.target.value))}
              />
              <span>{persisted.topicProgress[topic.topic] || 0}%</span>
            </label>
            <label>
              Personal Notes
              <textarea
                placeholder="Write quick revision notes..."
                value={persisted.notesByTopic[topic.topic] || ''}
                onChange={(e) => saveTopicNote(topic.topic, e.target.value)}
              />
            </label>
            <button
              onClick={() => {
                setQuizConfig((prev) => ({ ...prev, topic: topic.topic }));
                onStart();
              }}
            >
              Start Topic Quiz
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
