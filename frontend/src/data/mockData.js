// Mock data - Dados de exemplo para desenvolvimento
// Posteriormente será substituído pela integração com Firebase

export const mockMembers = [
  {
    id: 1,
    name: 'João Silva',
    type: 'Membro Regular',
    email: 'joao@email.com',
    functions: ['vocal_ministro', 'violao'],
    joined: '2023-01-15',
    isLeader: false,
  },
  {
    id: 2,
    name: 'Maria Santos',
    type: 'Membro Regular',
    email: 'maria@email.com',
    functions: ['vocal_back'],
    joined: '2023-02-20',
    isLeader: false,
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    type: 'Membro Regular',
    email: 'pedro@email.com',
    functions: ['guitarra', 'baixo'],
    joined: '2023-03-10',
    isLeader: false,
  },
  {
    id: 4,
    name: 'Ana Costa',
    type: 'Líder',
    email: 'ana@email.com',
    functions: ['teclado', 'vocal_ministro'],
    joined: '2022-06-05',
    isLeader: true,
  },
  {
    id: 5,
    name: 'Carlos Silva',
    type: 'Membro Regular',
    email: 'carlos@email.com',
    functions: ['bateria', 'cajon'],
    joined: '2023-04-12',
    isLeader: false,
  },
  {
    id: 6,
    name: 'Beatriz Lima',
    type: 'Membro Regular',
    email: 'beatriz@email.com',
    functions: ['vocal_back', 'sax'],
    joined: '2023-05-08',
    isLeader: false,
  },
  {
    id: 7,
    name: 'Lucas Mendes',
    type: 'Membro Regular',
    email: 'lucas@email.com',
    functions: ['violao'],
    joined: '2023-06-20',
    isLeader: false,
  },
  {
    id: 8,
    name: 'Fernanda Gomes',
    type: 'Membro Regular',
    email: 'fernanda@email.com',
    functions: ['teclado'],
    joined: '2023-07-15',
    isLeader: false,
  },
];

export const instruments = [
  { id: 'teclado', label: 'Teclado', icon: '🎹' },
  { id: 'violao', label: 'Violão', icon: '🎸' },
  { id: 'guitarra', label: 'Guitarra', icon: '🎸' },
  { id: 'baixo', label: 'Baixo', icon: '🎸' },
  { id: 'bateria', label: 'Bateria', icon: '🥁' },
  { id: 'cajon', label: 'Cajon', icon: '🥁' },
  { id: 'sax', label: 'Sax', icon: '🎷' },
  { id: 'vocal_ministro', label: 'Vocal (Ministro)', icon: '🎤' },
  { id: 'vocal_back', label: 'Backing Vocal', icon: '🎤' },
];

export const userTypes = [
  { value: 'membro', label: 'Membro Regular' },
  { value: 'lider', label: 'Líder' },
];

export const instrumentLabels = {
  'teclado': 'Teclado',
  'violao': 'Violão',
  'guitarra': 'Guitarra',
  'baixo': 'Baixo',
  'bateria': 'Bateria',
  'cajon': 'Cajon',
  'sax': 'Sax',
  'vocal_ministro': 'Vocal (Ministro)',
  'vocal_back': 'Backing Vocal',
};

export const getInstrumentLabel = (key) => instrumentLabels[key] || key;

export const getInstrumentEmoji = (key) => {
  const inst = instruments.find(i => i.id === key);
  return inst ? inst.icon : '🎵';
};

// Dados de exemplo para escalas
export const mockScales = [
  {
    id: 1,
    date: '2024-04-21',
    members: {
      teclado: [4],
      violao: [1, 7],
      guitarra: [3],
      baixo: [3],
      bateria: [5],
      cajon: [5],
      sax: [6],
      vocal_ministro: [1, 4],
      vocal_back: [2, 6],
    },
  },
];

// Dados de exemplo para ocorrências pendentes
export const mockPendingOccurrences = [
  { id: 1, name: 'Lucas Mendes', type: 'Membro Regular', daysOverdue: 3 },
  { id: 2, name: 'Fernanda Gomes', type: 'Membro Regular', daysOverdue: 7 },
];
