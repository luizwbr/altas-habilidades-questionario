export type IndicativeLevel = 'baixo' | 'moderado' | 'alto';

export function getIndicativeLevel(score: number, _maxScore: number = 100): IndicativeLevel {
  if (score < 33) return 'baixo';
  if (score <= 66) return 'moderado';
  return 'alto';
}

export function getLevelColor(level: IndicativeLevel): string {
  switch (level) {
    case 'baixo': return 'text-green-600 dark:text-green-400';
    case 'moderado': return 'text-yellow-600 dark:text-yellow-400';
    case 'alto': return 'text-red-600 dark:text-red-400';
  }
}

export function getLevelBgColor(level: IndicativeLevel): string {
  switch (level) {
    case 'baixo': return 'bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700';
    case 'moderado': return 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700';
    case 'alto': return 'bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700';
  }
}

export function getLevelLabel(level: IndicativeLevel): string {
  switch (level) {
    case 'baixo': return 'Baixo Indicativo';
    case 'moderado': return 'Moderado Indicativo';
    case 'alto': return 'Alto Indicativo';
  }
}
