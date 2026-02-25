import QuestionnaireStep from '../features/questionnaire/QuestionnaireStep';
import { tdahQuestions } from '../data/tdahQuestions';

export default function QuestionnaireTDAH() {
  return (
    <QuestionnaireStep
      questions={tdahQuestions}
      title="Avaliação de TDAH"
      description="Responda com base em como você se comporta normalmente. Não há respostas certas ou erradas."
      currentStepKey="tdah"
      nextRoute="/tea"
      prevRoute="/"
      nextStepKey="tea"
    />
  );
}
