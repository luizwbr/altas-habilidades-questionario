import { z } from 'zod';

const answerSchema = z.number().min(0).max(4);

export function createQuestionnaireSchema(questionIds: string[]) {
  const shape: Record<string, typeof answerSchema> = {};
  questionIds.forEach((id) => {
    shape[id] = answerSchema;
  });
  return z.object(shape);
}

export type QuestionnaireAnswers = Record<string, number>;
