import './Ocorrencias.css';
import { useState } from 'react';
import Button from '@/components/common/button/Button';
import Select from '@/components/common/select/Select';
import Calendar from '@/components/common/calendar/Calendar';
import MemberInfo from '@/components/common/memberInfo/MemberInfo';
import Card from '@/components/common/card/Card';

// Mock data
const mockMembers = [
  {
    id: 1,
    name: 'João Silva',
    type: 'Membro Regular',
    functions: ['vocal_ministro', 'violao'],
  },
  {
    id: 2,
    name: 'Maria Santos',
    type: 'Membro Regular',
    functions: ['vocal_back'],
  },
  {
    id: 3,
    name: 'Pedro Oliveira',
    type: 'Membro Regular',
    functions: ['guitarra', 'baixo'],
  },
];

export default function Ocorrencias() {
  const [selectedMemberId, setSelectedMemberId] = useState('');
  const [selectedDates, setSelectedDates] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const selectedMember = mockMembers.find(m => m.id === parseInt(selectedMemberId));

  const memberOptions = mockMembers.map(member => ({
    value: member.id,
    label: member.name,
  }));

  const handleDateSelect = (dateKey, isAvailable) => {
    setSelectedDates(prev => ({
      ...prev,
      [dateKey]: isAvailable,
    }));
  };

  const handleSubmit = () => {
    if (!selectedMemberId) {
      alert('Por favor, selecione um membro');
      return;
    }

    console.log('Ocorrências enviadas:', {
      member: selectedMember,
      availableDates: Object.entries(selectedDates)
        .filter(([_, available]) => available)
        .map(([date]) => date),
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedMemberId('');
      setSelectedDates({});
    }, 2000);
  };

  return (
    <div className="ocorrencias">
      <div className="ocorrencias-container">
        <div className="ocorrencias-header">
          <h1 className="ocorrencias-title">📋 Passar Ocorrências</h1>
          <p className="ocorrencias-subtitle">
            Indique sua disponibilidade para os próximos cultos
          </p>
        </div>

        <div className="ocorrencias-content">
          {/* Seleção de Membro */}
          <Card className="ocorrencias-card">
            <h2 className="card-subtitle">Selecione seu nome</h2>
            <Select
              options={memberOptions}
              value={selectedMemberId}
              onChange={(e) => setSelectedMemberId(e.target.value)}
              placeholder="Escolha seu nome"
              fullWidth
            />
          </Card>

          {/* Informações do Membro */}
          {selectedMember && (
            <MemberInfo member={selectedMember} />
          )}

          {/* Calendário */}
          {selectedMember && (
            <Card className="ocorrencias-card">
              <h2 className="card-subtitle">Marque sua disponibilidade</h2>
              <p className="card-description">
                Clique nos dias para marcar quando você está disponível para louvar.
              </p>
              <Calendar
                onDateSelect={handleDateSelect}
                selectedDates={selectedDates}
              />
            </Card>
          )}

          {/* Status e Botão */}
          {selectedMember && (
            <Card className="ocorrencias-status">
              <div className="status-info">
                <p className="status-label">Dias marcados:</p>
                <p className="status-value">
                  {Object.values(selectedDates).filter(Boolean).length} dias
                </p>
              </div>

              <Button
                variant={submitted ? 'success' : 'primary'}
                size="lg"
                fullWidth
                onClick={handleSubmit}
                disabled={submitted}
              >
                {submitted ? '✓ Ocorrências Enviadas!' : '→ Enviar Ocorrências'}
              </Button>

              {submitted && (
                <p className="status-message">
                  Obrigado! Suas ocorrências foram registradas com sucesso.
                </p>
              )}
            </Card>
          )}

          {!selectedMember && (
            <Card className="ocorrencias-empty">
              <div className="empty-icon">👤</div>
              <h3 className="empty-title">Selecione um membro</h3>
              <p className="empty-text">
                Escolha seu nome acima para prosseguir com o preenchimento das ocorrências.
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
