import './Membros.css';
import { useState } from 'react';
import Button from '@/components/common/button/Button';
import Card from '@/components/common/card/Card';
import Input from '@/components/common/input/Input';

// Mock data
const mockMembers = [
  {
    id: 1,
    name: 'João Silva',
    type: 'Membro Regular',
    functions: ['vocal_ministro', 'violao'],
    joined: '2023-01-15',
  },
  {
    id: 2,
    name: 'Maria Santos',
    type: 'Membro Regular',
    functions: ['vocal_back'],
    joined: '2023-02-20',
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    type: 'Membro Regular',
    functions: ['guitarra', 'baixo'],
    joined: '2023-03-10',
  },
  {
    id: 4,
    name: 'Ana Costa',
    type: 'Líder',
    functions: ['teclado', 'vocal_ministro'],
    joined: '2022-06-05',
  },
];

export default function Membros() {
  const [searchTerm, setSearchTerm] = useState('');
  const [members, setMembers] = useState(mockMembers);

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja remover este membro?')) {
      setMembers(members.filter(m => m.id !== id));
    }
  };

  const handleEdit = (id) => {
    console.log('Editar membro:', id);
  };

  const handleAddMember = () => {
    console.log('Adicionar novo membro');
  };

  const instrumentLabel = (inst) => {
    const labels = {
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
    return labels[inst] || inst;
  };

  return (
    <div className="membros">
      <div className="membros-header">
        <h1 className="membros-title">👥 Membros</h1>
        <p className="membros-subtitle">Gerencie os membros do ministério de louvor</p>
      </div>

      <div className="membros-container">
        {/* Controles */}
        <Card className="membros-controls">
          <div className="controls-top">
            <Input
              placeholder="Buscar membro..."
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              fullWidth
            />
            <Button
              variant="primary"
              size="md"
              onClick={handleAddMember}
            >
              ➕ Adicionar Membro
            </Button>
          </div>
          <p className="control-info">
            {filteredMembers.length} de {members.length} membros encontrados
          </p>
        </Card>

        {/* Tabela de Membros */}
        {filteredMembers.length > 0 ? (
          <div className="membros-table-wrapper">
            <table className="membros-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Tipo</th>
                  <th>Funções</th>
                  <th>Membro Desde</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredMembers.map(member => (
                  <tr key={member.id}>
                    <td className="cell-name">
                      <div className="member-avatar">{member.name.charAt(0)}</div>
                      {member.name}
                    </td>
                    <td className="cell-type">
                      <span className="type-badge">{member.type}</span>
                    </td>
                    <td className="cell-functions">
                      <div className="functions-tags">
                        {member.functions.map((func, idx) => (
                          <span key={idx} className="function-tag">
                            {instrumentLabel(func)}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="cell-date">
                      {new Date(member.joined).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="cell-actions">
                      <button
                        className="action-btn edit-btn"
                        onClick={() => handleEdit(member.id)}
                        title="Editar"
                      >
                        ✎
                      </button>
                      <button
                        className="action-btn delete-btn"
                        onClick={() => handleDelete(member.id)}
                        title="Remover"
                      >
                        ✕
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <Card className="membros-empty">
            <div className="empty-icon">👤</div>
            <h3 className="empty-title">Nenhum membro encontrado</h3>
            <p className="empty-text">
              {searchTerm ? 'Tente refinar sua busca' : 'Clique em "Adicionar Membro" para começar'}
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
