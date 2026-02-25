import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { tdahQuestions } from '../data/tdahQuestions';
import { aqQuestions } from '../data/aqQuestions';
import { altasHabilidadesQuestions } from '../data/altasHabilidadesQuestions';

export type Step = 'home' | 'tdah' | 'tea' | 'altasHabilidades' | 'results' | 'recommendations';

export interface AppState {
  answers: Record<string, number>;
  currentStep: Step;
  theme: 'light' | 'dark';
  setAnswer: (questionId: string, score: number) => void;
  setStep: (step: Step) => void;
  toggleTheme: () => void;
  resetAnswers: () => void;
  getTDAHScore: () => number;
  getTEAScore: () => number;
  getAltasHabilidadesScore: () => number;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      answers: {},
      currentStep: 'home',
      theme: 'light',
      setAnswer: (questionId, score) =>
        set((state) => ({ answers: { ...state.answers, [questionId]: score } })),
      setStep: (step) => set({ currentStep: step }),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      resetAnswers: () => set({ answers: {}, currentStep: 'home' }),
      getTDAHScore: () => {
        const { answers } = get();
        const total = tdahQuestions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
        return Math.round((total / (tdahQuestions.length * 4)) * 100);
      },
      getTEAScore: () => {
        const { answers } = get();
        const total = aqQuestions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
        return Math.round((total / (aqQuestions.length * 4)) * 100);
      },
      getAltasHabilidadesScore: () => {
        const { answers } = get();
        const total = altasHabilidadesQuestions.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
        return Math.round((total / (altasHabilidadesQuestions.length * 4)) * 100);
      },
    }),
    {
      name: 'altas-habilidades-store',
    }
  )
);
