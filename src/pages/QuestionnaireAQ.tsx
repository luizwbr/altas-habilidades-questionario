import QuestionnaireStep from '../features/questionnaire/QuestionnaireStep';
import { aqQuestions } from '../data/aqQuestions';

export default function QuestionnaireAQ() {
  return (
    <QuestionnaireStep
      questions={aqQuestions}
      title="Avaliação de TEA"
      description="Responda com base em suas experiências ao longo da vida, não apenas recentemente."
      currentStepKey="tea"
      nextRoute="/altas-habilidades"
      prevRoute="/tdah"
      nextStepKey="altasHabilidades"
    />
  );
}
