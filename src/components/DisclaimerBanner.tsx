import { AlertTriangle } from 'lucide-react';

export default function DisclaimerBanner() {
  return (
    <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-600 rounded-lg p-4 flex items-start gap-3">
      <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
      <p className="text-sm text-amber-800 dark:text-amber-200 font-medium">
        <strong>Aviso importante:</strong> Este site <strong>NÃO fornece diagnóstico médico</strong>.
        Os resultados são apenas indicativos e <strong>não substituem avaliação profissional especializada</strong>.
        Consulte um médico ou psicólogo para um diagnóstico adequado.
      </p>
    </div>
  );
}
