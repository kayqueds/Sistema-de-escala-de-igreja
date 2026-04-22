import './OcorrenciasPendentes.css';
import Card from '@/components/common/card/Card';
import Button from '@/components/common/button/Button';

// Mock data
const mockPendingMembers = [
  { id: 1, name: 'Lucas Mendes', type: 'Membro Regular', daysOverdue: 3 },
  { id: 2, name: 'Fernanda Gomes', type: 'Membro Regular', daysOverdue: 7 },
  { id: 3, name: 'Roberto Lima', type: 'Membro Regular', daysOverdue: 1 },
  { id: 4, name: 'Viviane Costa', type: 'Líder', daysOverdue: 5 },
];

export default function OcorrenciasPendentes() {
  const handleReminder = (memberId, memberName) => {
    console.log(`Enviar lembrete para ${memberName}`);
  };

  return (
    <div className="ocorrencias-pendentes">
      <div className="header">
        <h1 className="title">📋 Ocorrências Pendentes</h1>
        <p className="subtitle">Membros que ainda não preencheram suas disponibilidades</p>
      </div>

      <div className="container">
        {mockPendingMembers.length > 0 ? (
          <div className="pendents-list">
            {mockPendingMembers.map((member, index) => (
              <Card key={member.id} className="pendent-card">
                <div className="card-content">
                  <div className="member-info-section">
                    <div className="member-avatar">
                      {member.name.charAt(0)}
                    </div>
                    <div className="member-details">
                      <h3 className="member-name">{member.name}</h3>
                      <p className="member-type">{member.type}</p>
                    </div>
                  </div>

                  <div className="overdue-info">
                    <div className="overdue-badge">
                      <span className="overdue-label">Pendente há</span>
                      <span className="overdue-days">{member.daysOverdue}</span>
                      <span className="overdue-unit">dia{member.daysOverdue > 1 ? 's' : ''}</span>
                    </div>
                  </div>

                  <div className="card-actions">
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => handleReminder(member.id, member.name)}
                    >
                      📨 Lembrete
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="empty-state">
            <div className="empty-icon">✓</div>
            <h3 className="empty-title">Todas as ocorrências foram preenchidas!</h3>
            <p className="empty-text">Todos os membros já submeteram suas disponibilidades.</p>
          </Card>
        )}

        {/* Estatísticas */}
        <div className="stats-section">
          <Card className="stat-card">
            <div className="stat-number">{mockPendingMembers.length}</div>
            <div className="stat-label">Pendentes</div>
          </Card>
          <Card className="stat-card">
            <div className="stat-number">{mockPendingMembers.filter(m => m.daysOverdue > 5).length}</div>
            <div className="stat-label">Com atraso</div>
          </Card>
          <Card className="stat-card">
            <div className="stat-number">{Math.round((mockPendingMembers.length / 10) * 100)}%</div>
            <div className="stat-label">Taxa de Pendência</div>
          </Card>
        </div>
      </div>
    </div>
  );
}
