import './Error404.css';
import { Link } from 'react-router-dom';
import Button from '@/components/common/button/Button';
import Card from '@/components/common/card/Card';

export default function Error404() {
  return (
    <div className="error404">
      <div className="error-container">
        <Card className="error-card">
          <div className="error-header">
            <h1 className="error-code">404</h1>
            <h2 className="error-title">Página não encontrada</h2>
            <p className="error-description">
              Desculpe, a página que você está procurando não existe ou foi removida.
            </p>
          </div>

          <div className="error-illustration">
            <span className="illustration-text">🔍</span>
          </div>

          <div className="error-actions">
            <Link to="/" className="button-link">
              <Button variant="primary" size="lg" fullWidth>
                ← Voltar para Home
              </Button>
            </Link>
            <Link to="/ocorrencias" className="button-link">
              <Button variant="secondary" size="lg" fullWidth>
                📋 Ir para Ocorrências
              </Button>
            </Link>
            <Link to="/login" className="button-link">
              <Button variant="secondary" size="lg" fullWidth>
                🔐 Ir para Login
              </Button>
            </Link>
          </div>

          <p className="error-footer">
            Se o problema persistir, entre em contato com o suporte
          </p>
        </Card>
      </div>
    </div>
  );
}
