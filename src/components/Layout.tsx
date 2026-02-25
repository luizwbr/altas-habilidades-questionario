import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useAppStore } from '../store/useAppStore';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const theme = useAppStore((s) => s.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Brain className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
            <span className="font-bold text-gray-800 dark:text-gray-100 text-lg">
              AutoAvaliação Neurodiversidade
            </span>
          </Link>
          <ThemeToggle />
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-4 text-center text-xs text-gray-500 dark:text-gray-400">
          Este site NÃO fornece diagnóstico médico. Os resultados são apenas indicativos.
          Consulte um profissional de saúde qualificado.
        </div>
      </footer>
    </div>
  );
}
