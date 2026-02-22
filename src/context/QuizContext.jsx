import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import sampleQuestions from '../data/questions.json';

const STORAGE_KEY = 'neet-quiz-progress-v1';

const QuizContext = createContext(null);

const defaultState = {
  selectedAnswers: {},
  markedForReview: {},
  notesByTopic: {},
  topicProgress: {},
  lastResult: null
};

export function QuizProvider({ children }) {
  const [persisted, setPersisted] = useState(defaultState);
  const [quizConfig, setQuizConfig] = useState({ count: 5, year: 'All', topic: 'All' });
  const [questions, setQuestions] = useState(sampleQuestions);
  const [dataSource, setDataSource] = useState('sample');

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setPersisted({ ...defaultState, ...JSON.parse(saved) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
  }, [persisted]);

  const topicSummary = useMemo(() => {
    const grouped = questions.reduce((acc, q) => {
      if (!acc[q.topic]) {
        acc[q.topic] = {
          topic: q.topic,
          chapter: q.chapter,
          subject: q.subject,
          difficulty: q.difficulty,
          count: 0,
          notesLink: q.notesLink,
          videoLink: q.videoLink
        };
      }
      acc[q.topic].count += 1;
      return acc;
    }, {});
    return Object.values(grouped);
  }, [questions]);

  const value = {
    allQuestions: questions,
    topicSummary,
    dataSource,
    persisted,
    quizConfig,
    setQuizConfig,
    replaceQuestions: (incomingQuestions, source = 'external') => {
      setQuestions(incomingQuestions);
      setDataSource(source);
      setQuizConfig((prev) => ({ ...prev, count: Math.min(prev.count, incomingQuestions.length) || 1, year: 'All', topic: 'All' }));
      setPersisted((prev) => ({ ...prev, selectedAnswers: {}, markedForReview: {} }));
    },
    resetToSampleData: () => {
      setQuestions(sampleQuestions);
      setDataSource('sample');
      setQuizConfig((prev) => ({ ...prev, topic: 'All', year: 'All', count: Math.min(prev.count, sampleQuestions.length) || 1 }));
    },
    setAnswer: (questionId, optionIndex) => {
      setPersisted((prev) => ({
        ...prev,
        selectedAnswers: { ...prev.selectedAnswers, [questionId]: optionIndex }
      }));
    },
    toggleReview: (questionId) => {
      setPersisted((prev) => ({
        ...prev,
        markedForReview: {
          ...prev.markedForReview,
          [questionId]: !prev.markedForReview[questionId]
        }
      }));
    },
    saveTopicNote: (topic, note) => {
      setPersisted((prev) => ({
        ...prev,
        notesByTopic: { ...prev.notesByTopic, [topic]: note }
      }));
    },
    markTopicProgress: (topic, value) => {
      setPersisted((prev) => ({
        ...prev,
        topicProgress: { ...prev.topicProgress, [topic]: value }
      }));
    },
    saveResult: (result) => {
      setPersisted((prev) => ({
        ...prev,
        lastResult: result
      }));
    },
    resetQuestionState: () => {
      setPersisted((prev) => ({
        ...prev,
        selectedAnswers: {},
        markedForReview: {}
      }));
    }
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used inside QuizProvider');
  }
  return context;
}
