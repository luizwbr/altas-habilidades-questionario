export interface Question {
  id: string;
  text: string;
  category: 'tdah' | 'tea' | 'altasHabilidades';
}

export const tdahQuestions: Question[] = [
  { id: 'tdah_01', category: 'tdah', text: 'Com que frequência você tem dificuldade em prestar atenção em detalhes ou comete erros por descuido no trabalho ou em outras atividades?' },
  { id: 'tdah_02', category: 'tdah', text: 'Com que frequência você tem dificuldade em manter a atenção em tarefas ou atividades de lazer?' },
  { id: 'tdah_03', category: 'tdah', text: 'Com que frequência você parece não estar ouvindo quando alguém fala diretamente com você?' },
  { id: 'tdah_04', category: 'tdah', text: 'Com que frequência você não consegue seguir instruções até o fim e deixa tarefas incompletas?' },
  { id: 'tdah_05', category: 'tdah', text: 'Com que frequência você tem dificuldade em organizar tarefas e atividades?' },
  { id: 'tdah_06', category: 'tdah', text: 'Com que frequência você evita ou reluta em se envolver em tarefas que exijam esforço mental prolongado?' },
  { id: 'tdah_07', category: 'tdah', text: 'Com que frequência você perde objetos necessários para tarefas (chaves, carteira, celular, documentos)?' },
  { id: 'tdah_08', category: 'tdah', text: 'Com que frequência você se distrai facilmente com estímulos externos?' },
  { id: 'tdah_09', category: 'tdah', text: 'Com que frequência você se esquece de atividades cotidianas (pagar contas, cumprir compromissos)?' },
  { id: 'tdah_10', category: 'tdah', text: 'Com que frequência você mexe as mãos ou os pés, ou se remexe na cadeira?' },
  { id: 'tdah_11', category: 'tdah', text: 'Com que frequência você abandona o seu lugar em situações em que se espera que fique sentado?' },
  { id: 'tdah_12', category: 'tdah', text: 'Com que frequência você se sente agitado internamente, com uma sensação de inquietação?' },
  { id: 'tdah_13', category: 'tdah', text: 'Com que frequência você tem dificuldade em se envolver em atividades de lazer ou hobbies de forma silenciosa?' },
  { id: 'tdah_14', category: 'tdah', text: 'Com que frequência você fala demais em situações sociais?' },
  { id: 'tdah_15', category: 'tdah', text: 'Com que frequência você responde antes que a pergunta seja concluída?' },
  { id: 'tdah_16', category: 'tdah', text: 'Com que frequência você tem dificuldade em aguardar sua vez em filas ou conversas?' },
  { id: 'tdah_17', category: 'tdah', text: 'Com que frequência você interrompe ou se intromete nas atividades dos outros?' },
  { id: 'tdah_18', category: 'tdah', text: 'Com que frequência você toma decisões impulsivas sem pensar nas consequências?' },
];
