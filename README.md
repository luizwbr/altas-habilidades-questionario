# Autoavaliação de Neurodiversidade

Uma ferramenta web de **autoconhecimento** para adultos explorarem características associadas à neurodiversidade: TDAH, TEA (Transtorno do Espectro Autista) e Altas Habilidades/Superdotação.

## ⚠️ Aviso Ético Importante

> **Este site NÃO fornece diagnóstico médico.** Os resultados são puramente indicativos e **não substituem avaliação profissional especializada**. Consulte sempre um médico, psiquiatra ou psicólogo para diagnóstico adequado. As questões são baseadas em instrumentos de triagem amplamente reconhecidos (ASRS para TDAH, AQ para TEA), adaptados para fins educativos.

## 🧠 Sobre o Projeto

Esta ferramenta foi criada para promover o **autoconhecimento** sobre características neurodesenvolvimentais. A neurodiversidade inclui variações naturais no funcionamento neurológico humano, e muitos adultos chegam à maturidade sem saber que possuem características de TDAH, TEA ou Altas Habilidades.

### Seções avaliadas

| Área | Questões | Base |
|------|----------|------|
| TDAH (Transtorno do Déficit de Atenção com Hiperatividade) | 18 | Escala ASRS |
| TEA (Transtorno do Espectro Autista) | 20 | Questionário AQ |
| Altas Habilidades/Superdotação | 15 | Literatura especializada |

## 🛠️ Stack Tecnológica

- **React 18** + **Vite** — framework e bundler
- **TypeScript** — tipagem estática
- **Tailwind CSS** — estilização utilitária com suporte a dark mode
- **Zustand** — gerenciamento de estado com persistência em localStorage
- **React Router DOM** — navegação entre páginas
- **Recharts** — gráfico radar de resultados
- **Lucide React** — ícones
- **Zod** + **React Hook Form** — validação de formulários

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm 9+

### Instalação e execução

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Visualizar build de produção
npm run preview
```

## 🌐 Deploy automático no GitHub Pages

O projeto já inclui CI/CD em [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml).

### Como ativar

1. Faça push para o branch `main`
2. No GitHub, vá em **Settings → Pages**
3. Em **Build and deployment**, selecione **Source: GitHub Actions**

Após isso, cada push em `main` gera build e publica automaticamente no GitHub Pages.

## 🔒 Privacidade

Todos os dados são armazenados **exclusivamente no dispositivo do usuário** via `localStorage`. Nenhuma resposta é enviada a servidores externos.

## 📋 Funcionalidades

- ✅ Questionários interativos com escala Likert (0–4)
- ✅ Progresso visual entre etapas
- ✅ Gráfico radar com perfil geral
- ✅ Resultados com níveis indicativos (baixo/moderado/alto)
- ✅ Recomendações personalizadas por área
- ✅ Tema claro/escuro
- ✅ Design responsivo (mobile-first)
- ✅ Persistência de respostas no localStorage

## ⚖️ Considerações Éticas

1. **Não é diagnóstico**: Esta ferramenta é de triagem/autoconhecimento apenas
2. **Dupla excepcionalidade**: TDAH, TEA e Altas Habilidades frequentemente coexistem
3. **Diversidade**: Resultados devem ser interpretados por profissional qualificado
4. **Privacidade**: Nenhum dado pessoal é coletado ou transmitido
