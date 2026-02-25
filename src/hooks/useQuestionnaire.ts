import { useCallback } from 'react';
import { useAppStore } from '../store/useAppStore';
import type { Question } from '../data/tdahQuestions';

export function useQuestionnaire(questions: Question[]) {
  const answers = useAppStore((s) => s.answers);
  const setAnswer = useAppStore((s) => s.setAnswer);

  const getAnswer = useCallback(
    (questionId: string): number | undefined => answers[questionId],
    [answers]
  );

  const isComplete = useCallback(() => {
    return questions.every((q) => answers[q.id] !== undefined);
  }, [questions, answers]);

  const setQuestionAnswer = useCallback(
    (questionId: string, score: number) => {
      setAnswer(questionId, score);
    },
    [setAnswer]
  );

  return { getAnswer, isComplete, setQuestionAnswer, answers };
}
