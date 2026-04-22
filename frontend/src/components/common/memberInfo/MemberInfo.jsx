import './MemberInfo.css';
import Card from '../card/Card';

export default function MemberInfo({ member = {} }) {
  return (
    <Card className="member-info">
      <div className="member-info-header">
        <div className="member-info-avatar">
          {member.name?.charAt(0)?.toUpperCase() || 'M'}
        </div>
        <div className="member-info-content">
          <h3 className="member-info-name">{member.name || 'Membro'}</h3>
          <p className="member-info-type">{member.type || 'Tipo não definido'}</p>
        </div>
      </div>

      {member.functions && member.functions.length > 0 && (
        <div className="member-info-functions">
          <h4 className="member-functions-title">Funções</h4>
          <div className="member-functions-list">
            {member.functions.map((func, index) => (
              <span key={index} className="member-function-tag">
                {func}
              </span>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}
