import QuestionnaireStep from '../features/questionnaire/QuestionnaireStep';
import { altasHabilidadesQuestions } from '../data/altasHabilidadesQuestions';

export default function QuestionnaireAltasHabilidades() {
  return (
    <QuestionnaireStep
      questions={altasHabilidadesQuestions}
      title="Avaliação de Altas Habilidades/Superdotação"
      description="Reflita sobre suas características ao longo da vida, comparando-se com a maioria das pessoas."
      currentStepKey="altasHabilidades"
      nextRoute="/resultados"
      prevRoute="/tea"
      nextStepKey="results"
    />
  );
}
