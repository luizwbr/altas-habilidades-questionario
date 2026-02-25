import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/useAppStore';
import { getIndicativeLevel } from '../utils/scoring';
import DisclaimerBanner from '../components/DisclaimerBanner';

export default function Recommendations() {
  const navigate = useNavigate();
  const getTDAHScore = useAppStore((s) => s.getTDAHScore);
  const getTEAScore = useAppStore((s) => s.getTEAScore);
  const getAltasHabilidadesScore = useAppStore((s) => s.getAltasHabilidadesScore);
  const resetAnswers = useAppStore((s) => s.resetAnswers);

  const tdahLevel = getIndicativeLevel(getTDAHScore());
  const teaLevel = getIndicativeLevel(getTEAScore());
  const ahLevel = getIndicativeLevel(getAltasHabilidadesScore());

  const handleRestart = () => {
    resetAnswers();
    navigate('/');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Recomendações</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-1">
          Com base nos seus resultados, reunimos orientações personalizadas para você.
        </p>
      </div>

      <DisclaimerBanner />

      {(tdahLevel === 'moderado' || tdahLevel === 'alto') && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-blue-200 dark:border-blue-700 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-blue-700 dark:text-blue-300 mb-3">
            🧠 Recomendações para TDAH
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
            <li>Procure um psiquiatra ou neurologista especializado em TDAH em adultos</li>
            <li>Considere avaliação neuropsicológica para diagnóstico mais aprofundado</li>
            <li>Pesquise sobre a Associação Brasileira do Déficit de Atenção (ABDA)</li>
            <li>Grupos de apoio para adultos com TDAH podem ser muito úteis</li>
            <li>Terapia cognitivo-comportamental (TCC) é eficaz para manejo do TDAH</li>
            <li>Técnicas de organização como método Pomodoro e sistemas de lista podem ajudar</li>
          </ul>
        </div>
      )}

      {(teaLevel === 'moderado' || teaLevel === 'alto') && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-purple-200 dark:border-purple-700 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-purple-700 dark:text-purple-300 mb-3">
            🔵 Recomendações para TEA
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
            <li>Busque avaliação por psiquiatra ou neuropsicólogo com experiência em TEA em adultos</li>
            <li>O diagnóstico tardio de TEA em adultos é cada vez mais reconhecido e pode trazer autoconhecimento valioso</li>
            <li>Pesquise sobre a Associação Brasileira de Autismo (ABA) e o Instituto PENSI</li>
            <li>Terapia focada em habilidades sociais pode ser benéfica</li>
            <li>Comunidades online de autistas adultos oferecem suporte e identificação</li>
            <li>Acomodações no ambiente de trabalho podem melhorar significativamente a qualidade de vida</li>
          </ul>
        </div>
      )}

      {(ahLevel === 'moderado' || ahLevel === 'alto') && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-yellow-200 dark:border-yellow-700 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-yellow-700 dark:text-yellow-300 mb-3">
            ⭐ Recomendações para Altas Habilidades
          </h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm list-disc list-inside">
            <li>Procure um psicólogo especializado em superdotação e altas habilidades</li>
            <li>Pesquise sobre o Conselho Brasileiro para Superdotação (ConBraSD)</li>
            <li>A avaliação psicológica formal pode confirmar e explorar seu potencial</li>
            <li>Busque ambientes estimulantes que desafiem suas capacidades</li>
            <li>Conecte-se com grupos de adultos com altas habilidades para troca de experiências</li>
            <li>Atenção à dupla excepcionalidade: AH/SD pode coexistir com TDAH ou TEA</li>
          </ul>
        </div>
      )}

      {tdahLevel === 'baixo' && teaLevel === 'baixo' && ahLevel === 'baixo' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-green-200 dark:border-green-700 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-green-700 dark:text-green-300 mb-3">
            ✅ Resultados Baixos
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Suas respostas indicam poucos traços associados às condições avaliadas.
            Isso não descarta nenhuma condição, pois o diagnóstico requer avaliação profissional completa.
            Se você sente que algo não está bem, não hesite em buscar apoio profissional.
          </p>
        </div>
      )}

      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 p-5">
        <h3 className="font-bold text-gray-700 dark:text-gray-300 mb-2">💡 Lembrete importante</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Esta autoavaliação é uma ferramenta de <strong>autoconhecimento</strong>, não de diagnóstico.
          Condições como TDAH, TEA e Altas Habilidades frequentemente coexistem (dupla ou tripla excepcionalidade)
          e requerem avaliação multidisciplinar por profissionais qualificados.
          Seus resultados são armazenados apenas no seu dispositivo e nunca são enviados a servidores.
        </p>
      </div>

      <div className="flex justify-center pt-2">
        <button
          onClick={handleRestart}
          className="px-8 py-3 border border-indigo-300 dark:border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 font-semibold rounded-xl transition-colors"
        >
          ↺ Reiniciar Avaliação
        </button>
      </div>
    </div>
  );
}
