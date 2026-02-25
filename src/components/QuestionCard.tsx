import type { Question } from '../data/tdahQuestions';

const options = [
  { value: 0, label: 'Nunca' },
  { value: 1, label: 'Raramente' },
  { value: 2, label: 'Às vezes' },
  { value: 3, label: 'Frequentemente' },
  { value: 4, label: 'Muito frequentemente' },
];

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  value: number | undefined;
  onChange: (value: number) => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  value,
  onChange,
}: QuestionCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="mb-4">
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          Questão {questionNumber} de {totalQuestions}
        </span>
        <p className="mt-2 text-gray-800 dark:text-gray-100 font-medium leading-relaxed">
          {question.text}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={`cursor-pointer rounded-lg border-2 p-2 text-center text-sm transition-all ${
              value === option.value
                ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-semibold'
                : 'border-gray-200 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500 text-gray-700 dark:text-gray-300'
            }`}
          >
            <input
              type="radio"
              className="sr-only"
              name={question.id}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
            />
            <span className="block font-bold text-lg">{option.value}</span>
            <span className="block text-xs leading-tight">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
