import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionCard from '../../components/QuestionCard';
import ProgressBar from '../../components/ProgressBar';
import { useQuestionnaire } from '../../hooks/useQuestionnaire';
import { useAppStore } from '../../store/useAppStore';
import type { Question } from '../../data/tdahQuestions';
import type { Step } from '../../store/useAppStore';

interface QuestionnaireStepProps {
  questions: Question[];
  title: string;
  description: string;
  currentStepKey: Step;
  nextRoute: string;
  prevRoute: string;
  nextStepKey: Step;
}

export default function QuestionnaireStep({
  questions,
  title,
  description,
  currentStepKey,
  nextRoute,
  prevRoute,
  nextStepKey,
}: QuestionnaireStepProps) {
  const navigate = useNavigate();
  const { getAnswer, setQuestionAnswer, isComplete } = useQuestionnaire(questions);
  const setStep = useAppStore((s) => s.setStep);
  const [showError, setShowError] = useState(false);

  const handleNext = () => {
    if (!isComplete()) {
      setShowError(true);
      return;
    }
    setStep(nextStepKey);
    navigate(nextRoute);
  };

  const handlePrev = () => {
    navigate(prevRoute);
  };

  const answeredCount = questions.filter((q) => getAnswer(q.id) !== undefined).length;

  return (
    <div>
      <ProgressBar currentStep={currentStepKey} />
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{title}</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">{description}</p>
        <div className="mt-2 text-sm text-indigo-600 dark:text-indigo-400 font-medium">
          {answeredCount} de {questions.length} questões respondidas
        </div>
      </div>

      {showError && !isComplete() && (
        <div className="mb-4 bg-red-50 dark:bg-red-900/30 border border-red-300 dark:border-red-600 rounded-lg p-3 text-red-700 dark:text-red-300 text-sm">
          Por favor, responda todas as questões antes de continuar.
        </div>
      )}

      <div className="space-y-4">
        {questions.map((q, index) => (
          <QuestionCard
            key={q.id}
            question={q}
            questionNumber={index + 1}
            totalQuestions={questions.length}
            value={getAnswer(q.id)}
            onChange={(val) => {
              setQuestionAnswer(q.id, val);
              if (showError) setShowError(false);
            }}
          />
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrev}
          className="px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          ← Anterior
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors"
        >
          Próximo →
        </button>
      </div>
    </div>
  );
}
