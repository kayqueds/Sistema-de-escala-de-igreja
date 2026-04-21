import './Escalas.css';
import { useState } from 'react';
import Button from '@/components/common/button/Button';
import Select from '@/components/common/select/Select';
import Card from '@/components/common/card/Card';
import Input from '@/components/common/input/Input';

// Mock data
const mockMembers = [
  { id: 1, name: 'João Silva', functions: ['vocal_ministro', 'violao'] },
  { id: 2, name: 'Maria Santos', functions: ['vocal_back'] },
  { id: 3, name: 'Pedro Oliveira', functions: ['guitarra', 'baixo'] },
  { id: 4, name: 'Ana Costa', functions: ['teclado'] },
  { id: 5, name: 'Carlos Silva', functions: ['bateria', 'cajon'] },
  { id: 6, name: 'Beatriz Lima', functions: ['vocal_back', 'sax'] },
];

const instruments = [
  'teclado',
  'violao',
  'guitarra',
  'baixo',
  'bateria',
  'cajon',
  'sax',
  'vocal_ministro',
  'vocal_back',
];

export default function Escalas() {
  const [selectedDate, setSelectedDate] = useState('');
  const [scales, setScales] = useState({});

  const handleAddMember = (instrument) => {
    // Lógica para abrir modal de seleção de membro
    console.log('Adicionar membro para:', instrument);
  };

  const handleRemoveMember = (instrument, memberId) => {
    setScales(prev => ({
      ...prev,
      [instrument]: prev[instrument]?.filter(id => id !== memberId),
    }));
  };

  const instrumentLabel = (inst) => {
    const labels = {
      'teclado': '🎹 Teclado',
      'violao': '🎸 Violão',
      'guitarra': '🎸 Guitarra',
      'baixo': '🎸 Baixo',
      'bateria': '🥁 Bateria',
      'cajon': '🥁 Cajon',
      'sax': '🎷 Sax',
      'vocal_ministro': '🎤 Vocal (Ministro)',
      'vocal_back': '🎤 Backing Vocal',
    };
    return labels[inst] || inst;
  };

  const getScaledMembers = (instrument) => {
    return (scales[instrument] || [])
      .map(id => mockMembers.find(m => m.id === id))
      .filter(Boolean);
  };

  const getAvailableMembers = (instrument) => {
    return mockMembers.filter(m =>
      m.functions.includes(instrument) &&
      !(scales[instrument] || []).includes(m.id)
    );
  };

  return (
    <div className="escalas">
      <div className="escalas-header">
        <h1 className="escalas-title">🎵 Escalas</h1>
        <p className="escalas-subtitle">Monte as escalas de louvor dos seus cultos</p>
      </div>

      <div className="escalas-container">
        {/* Data Selection */}
        <Card className="escalas-card escalas-date-card">
          <h2 className="card-title">Escolha a Data</h2>
          <Input
            label="Data do Culto"
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            fullWidth
          />
        </Card>

        {/* Instruments Grid */}
        <div className="escalas-grid">
          {instruments.map(instrument => (
            <Card key={instrument} className="instrument-card">
              <div className="instrument-header">
                <h3 className="instrument-title">{instrumentLabel(instrument)}</h3>
                <span className="instrument-count">
                  {getScaledMembers(instrument).length}
                </span>
              </div>

              <div className="instrument-members">
                {getScaledMembers(instrument).length > 0 ? (
                  <div className="members-list">
                    {getScaledMembers(instrument).map(member => (
                      <div key={member.id} className="member-item">
                        <span className="member-name">{member.name}</span>
                        <button
                          className="remove-btn"
                          onClick={() => handleRemoveMember(instrument, member.id)}
                          title="Remover"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="empty-message">Nenhum membro escalado</p>
                )}
              </div>

              <div className="instrument-actions">
                <Select
                  options={getAvailableMembers(instrument).map(m => ({
                    value: m.id,
                    label: m.name,
                  }))}
                  onChange={(e) => {
                    if (e.target.value) {
                      const memberId = parseInt(e.target.value);
                      setScales(prev => ({
                        ...prev,
                        [instrument]: [...(prev[instrument] || []), memberId],
                      }));
                      e.target.value = '';
                    }
                  }}
                  placeholder="Adicionar membro"
                  fullWidth
                />
              </div>
            </Card>
          ))}
        </div>

        {/* Save Button */}
        <Card className="escalas-footer">
          <Button
            variant="primary"
            size="lg"
            fullWidth
          >
            💾 Salvar Escala
          </Button>
          <p className="footer-text">
            {selectedDate ? `Escala para ${new Date(selectedDate).toLocaleDateString('pt-BR')}` : 'Selecione uma data para salvar'}
          </p>
        </Card>
      </div>
    </div>
  );
}
