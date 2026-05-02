import './Membros.css';
import { useState, useEffect } from 'react';
import Button from '@/components/common/button/Button';
import Card from '@/components/common/card/Card';
import Input from '@/components/common/input/Input';
import FormMembro from './FormMembro';
import Swal from "sweetalert2";
import Sound from '@/hooks/Sounds'

import {
  buscarMembros,
  criarMembro,
  deletarMembro
} from '@/services/membrosService';

export default function Membros() {
  const [searchTerm, setSearchTerm] = useState('');
  const [members, setMembers] = useState([]);
  const [mostrarForm, setMostrarForm] = useState(false);

  const { playSound, listSound } = Sound();
  useEffect(() => {
    carregarMembros();
  }, []);

  async function carregarMembros() {
    const dados = await buscarMembros();

    const membrosFormatados = dados.map((m) => ({
      id: m.id,
      name: m.nome,
      type: m.tipo === 'lider' ? 'Líder' : 'Membro Regular',
      functions: m.funcoes || [],
      joined: new Date().toISOString()
    }));

    setMembers(membrosFormatados);
  }

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

const handleDelete = async (id) => {
  playSound(listSound[2])
  const result = await Swal.fire({
    title: "Tem certeza?",
    text: "Esse membro será removido.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#6c757d",
    confirmButtonText: "Sim, excluir",
    cancelButtonText: "Cancelar"
  });
  

  if (!result.isConfirmed) return;

  await deletarMembro(id);

  setMembers((prev) =>
    prev.filter((member) => member.id !== id)
  );

  Swal.fire({
    title: "Excluído!",
    text: "Membro removido com sucesso.",
    icon: "success",
    timer: 1500,
    showConfirmButton: false
  });
   playSound(listSound[0]);
};

  const handleEdit = (id) => {
    console.log('Editar membro:', id);
  };

  const handleAddMember = () => {
    setMostrarForm(true);
  };

  const salvarMembro = async (dadosForm, id) => {
    const novoMembro = {
      nome: dadosForm.nome,
      tipo: dadosForm.tipo,
      funcoes: dadosForm.funcoes,
      ativo: true
    };
    playSound(listSound[2])
    const result = await Swal.fire({
    title: "Tem certeza?",
    text: "Esse membro será criado.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#6c757d",
    confirmButtonText: "Sim, criar",
    cancelButtonText: "Cancelar"
  });

  if (!result.isConfirmed) return;

  await criarMembro(id);

  setMembers((prev) =>
    prev.filter((member) => member.id !== id)
  );

  Swal.fire({
    title: "Criado!",
    text: `Membro criado com sucesso`,
    icon: "success",
    timer: 1500,
    showConfirmButton: false
  });
  playSound(listSound[0])

    await criarMembro(novoMembro);

    await carregarMembros();
  
    setMostrarForm(false);
  };

  const instrumentLabel = (inst) => {
    const labels = {
      teclado: 'Teclado',
      violao: 'Violão',
      guitarra: 'Guitarra',
      baixo: 'Baixo',
      bateria: 'Bateria',
      cajon: 'Cajon',
      sax: 'Sax',
      vocal_ministro: 'Vocal (Ministro)',
      vocal_back: 'Backing Vocal'
    };

    return labels[inst] || inst;
  };

  return (
    <div className="membros">
      <div className="membros-header">
        <h1 className="membros-title">👥 Membros</h1>
        <p className="membros-subtitle">
          Gerencie os membros do ministério de louvor
        </p>
      </div>

      <div className="membros-container">
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

        {mostrarForm && (
          <FormMembro salvarMembro={salvarMembro} />
        )}

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
                {filteredMembers.map((member) => (
                  <tr key={member.id}>
                    <td className="cell-name">
                      <div className="member-avatar">
                        {member.name.charAt(0)}
                      </div>
                      {member.name}
                    </td>

                    <td className="cell-type">
                      <span className="type-badge">
                        {member.type}
                      </span>
                    </td>

                    <td className="cell-functions">
                      <div className="functions-tags">
                        {member.functions.map((func, idx) => (
                          <span
                            key={idx}
                            className="function-tag"
                          >
                            {instrumentLabel(func)}
                          </span>
                        ))}
                      </div>
                    </td>

                    <td className="cell-date">
                      {new Date(member.joined).toLocaleDateString(
                        'pt-BR'
                      )}
                    </td>

                    <td className="cell-actions">
                      <button
                        className="action-btn edit-btn"
                        onClick={() =>
                          handleEdit(member.id)
                        }
                        title="Editar"
                      >
                        ✎
                      </button>

                      <button
                        className="action-btn delete-btn"
                        onClick={() =>
                          handleDelete(member.id)
                        }
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

            <h3 className="empty-title">
              Nenhum membro encontrado
            </h3>

            <p className="empty-text">
              {searchTerm
                ? 'Tente refinar sua busca'
                : 'Clique em "Adicionar Membro" para começar'}
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}