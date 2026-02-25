import { useNavigate } from 'react-router-dom';
import ResultChart from '../components/ResultChart';
import { useAppStore } from '../store/useAppStore';
import { getIndicativeLevel, getLevelBgColor, getLevelColor, getLevelLabel } from '../utils/scoring';
import DisclaimerBanner from '../components/DisclaimerBanner';

const categoryInfo = {
  tdah: {
    name: 'TDAH',
    description: (level: string) => {
      if (level === 'baixo') return 'Suas respostas indicam poucas características associadas ao TDAH.';
      if (level === 'moderado') return 'Suas respostas indicam algumas características associadas ao TDAH. Uma avaliação profissional pode ser útil.';
      return 'Suas respostas indicam diversas características associadas ao TDAH. Recomendamos buscar avaliação especializada.';
    },
  },
  tea: {
    name: 'TEA',
    description: (level: string) => {
      if (level === 'baixo') return 'Suas respostas indicam poucas características associadas ao TEA.';
      if (level === 'moderado') return 'Suas respostas indicam algumas características associadas ao TEA. Uma avaliação profissional pode ser útil.';
      return 'Suas respostas indicam diversas características associadas ao TEA. Recomendamos buscar avaliação especializada.';
    },
  },
  altasHabilidades: {
    name: 'Altas Habilidades',
    description: (level: string) => {
      if (level === 'baixo') return 'Suas respostas indicam poucas características associadas às Altas Habilidades/Superdotação.';
      if (level === 'moderado') return 'Suas respostas indicam algumas características de Altas Habilidades/Superdotação.';
      return 'Suas respostas indicam diversas características de Altas Habilidades/Superdotação. Uma avaliação especializada pode ser muito enriquecedora.';
    },
  },
};

export default function Results() {
  const navigate = useNavigate();
  const getTDAHScore = useAppStore((s) => s.getTDAHScore);
  const getTEAScore = useAppStore((s) => s.getTEAScore);
  const getAltasHabilidadesScore = useAppStore((s) => s.getAltasHabilidadesScore);
  const setStep = useAppStore((s) => s.setStep);

  const tdahScore = getTDAHScore();
  const teaScore = getTEAScore();
  const ahScore = getAltasHabilidadesScore();

  const tdahLevel = getIndicativeLevel(tdahScore);
  const teaLevel = getIndicativeLevel(teaScore);
  const ahLevel = getIndicativeLevel(ahScore);

  const scores = [
    { key: 'tdah' as const, score: tdahScore, level: tdahLevel },
    { key: 'tea' as const, score: teaScore, level: teaLevel },
    { key: 'altasHabilidades' as const, score: ahScore, level: ahLevel },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Seus Resultados</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Abaixo está o seu perfil indicativo baseado nas respostas fornecidas.
        </p>
      </div>

      <DisclaimerBanner />

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-700 dark:text-gray-200 mb-4 text-center">
          Perfil Geral
        </h2>
        <ResultChart tdahScore={tdahScore} teaScore={teaScore} altasHabilidadesScore={ahScore} />
      </div>

      <div className="space-y-4">
        {scores.map(({ key, score, level }) => (
          <div
            key={key}
            className={`rounded-xl border p-5 ${getLevelBgColor(level)}`}
          >
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <h3 className="font-bold text-gray-800 dark:text-gray-100 text-lg">
                  {categoryInfo[key].name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  {categoryInfo[key].description(level)}
                </p>
              </div>
              <div className="text-right">
                <div className={`text-2xl font-bold ${getLevelColor(level)}`}>{score}%</div>
                <div className={`text-xs font-medium ${getLevelColor(level)}`}>
                  {getLevelLabel(level)}
                </div>
              </div>
            </div>
            <div className="mt-3 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all ${
                  level === 'baixo' ? 'bg-green-500' : level === 'moderado' ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${score}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
        <button
          onClick={() => { setStep('recommendations'); navigate('/recomendacoes'); }}
          className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors"
        >
          Ver Recomendações →
        </button>
      </div>
    </div>
  );
}
