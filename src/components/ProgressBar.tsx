type Step = 'home' | 'tdah' | 'tea' | 'altasHabilidades' | 'results' | 'recommendations';

const steps: { key: Step; label: string }[] = [
  { key: 'tdah', label: 'TDAH' },
  { key: 'tea', label: 'TEA' },
  { key: 'altasHabilidades', label: 'Altas Habilidades' },
  { key: 'results', label: 'Resultados' },
];

interface ProgressBarProps {
  currentStep: Step;
}

export default function ProgressBar({ currentStep }: ProgressBarProps) {
  const currentIndex = steps.findIndex((s) => s.key === currentStep);

  if (currentIndex === -1) return null;

  return (
    <div className="w-full mb-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.key} className="flex items-center flex-1">
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                  index <= currentIndex
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                }`}
              >
                {index + 1}
              </div>
              <span className="text-xs mt-1 text-gray-600 dark:text-gray-400 whitespace-nowrap">
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 mx-2 rounded transition-colors ${
                  index < currentIndex
                    ? 'bg-indigo-600'
                    : 'bg-gray-200 dark:bg-gray-700'
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
