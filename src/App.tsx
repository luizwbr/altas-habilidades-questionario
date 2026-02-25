import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import QuestionnaireTDAH from './pages/QuestionnaireTDAH';
import QuestionnaireAQ from './pages/QuestionnaireAQ';
import QuestionnaireAltasHabilidades from './pages/QuestionnaireAltasHabilidades';
import Results from './pages/Results';
import Recommendations from './pages/Recommendations';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tdah" element={<QuestionnaireTDAH />} />
          <Route path="/tea" element={<QuestionnaireAQ />} />
          <Route path="/altas-habilidades" element={<QuestionnaireAltasHabilidades />} />
          <Route path="/resultados" element={<Results />} />
          <Route path="/recomendacoes" element={<Recommendations />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
