import { useNavigate } from 'react-router-dom';
import { Brain, Zap, Eye, Star } from 'lucide-react';
import DisclaimerBanner from '../components/DisclaimerBanner';
import { useAppStore } from '../store/useAppStore';

export default function Home() {
  const navigate = useNavigate();
  const { setStep, resetAnswers } = useAppStore();

  const handleStart = () => {
    resetAnswers();
    setStep('tdah');
    navigate('/tdah');
  };

  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <div className="flex justify-center mb-4">
          <Brain className="w-16 h-16 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3">
          Autoavaliação de Neurodiversidade
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Uma ferramenta de autoconhecimento para adultos explorarem características
          associadas à neurodiversidade — TDAH, TEA e Altas Habilidades/Superdotação.
        </p>
      </div>

      <DisclaimerBanner />

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Zap className="w-8 h-8 text-blue-500" />
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">TDAH</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Transtorno do Déficit de Atenção com Hiperatividade. Avaliamos características
            de desatenção, hiperatividade e impulsividade baseadas na escala ASRS.
          </p>
          <div className="mt-3 text-xs text-gray-500 dark:text-gray-500">18 questões</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Eye className="w-8 h-8 text-purple-500" />
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">TEA</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Transtorno do Espectro Autista. Avaliamos aspectos sociais, sensorialidade,
            padrões de comportamento e processamento de informações baseados no questionário AQ.
          </p>
          <div className="mt-3 text-xs text-gray-500 dark:text-gray-500">20 questões</div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <Star className="w-8 h-8 text-yellow-500" />
            <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">Altas Habilidades</h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Superdotação/Altas Habilidades. Avaliamos características como aprendizado acelerado,
            criatividade, perfeccionismo e intensidade emocional.
          </p>
          <div className="mt-3 text-xs text-gray-500 dark:text-gray-500">15 questões</div>
        </div>
      </div>

      <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 border border-indigo-200 dark:border-indigo-700">
        <h3 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2">Como funciona</h3>
        <ol className="list-decimal list-inside space-y-1 text-indigo-700 dark:text-indigo-400 text-sm">
          <li>Responda às questões de cada categoria com honestidade</li>
          <li>Use a escala de frequência: Nunca (0) a Muito frequentemente (4)</li>
          <li>Ao final, veja seu perfil indicativo em um gráfico</li>
          <li>Receba recomendações baseadas nos seus resultados</li>
        </ol>
        <p className="mt-3 text-xs text-indigo-600 dark:text-indigo-500">
          Total: 53 questões • Tempo estimado: 15–20 minutos
        </p>
      </div>

      <div className="text-center">
        <button
          onClick={handleStart}
          className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-bold rounded-xl shadow-md transition-colors"
        >
          Iniciar Avaliação
        </button>
      </div>
    </div>
  );
}
