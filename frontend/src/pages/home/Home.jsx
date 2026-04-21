import './Home.css';
import Button from '@/components/common/button/Button';
import Card from '@/components/common/card/Card';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-content">
          {/* Logo/Header Section */}
          <div className="home-header">
            <div className="home-logo">
              <div className="logo-icon">🎵</div>
              <h1 className="logo-text">LOUVA</h1>
            </div>
            <p className="home-subtitle">Sistema de Gerenciamento de Escala de Louvor</p>
          </div>

          {/* Description */}
          <div className="home-description">
            <p className="description-text">
              Organize as escalas de ministério da sua igreja de forma simples, prática e intuitiva.
            </p>
            <p className="description-subtext">
              Gerencie disponibilidades, escale membros e mantenha o ministério de louvor sempre harmonioso.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="home-actions">
            <Link to="/ocorrencias" className="button-link">
              <Button variant="primary" size="lg" fullWidth>
                📋 Passar Ocorrências
              </Button>
            </Link>
            <Link to="/login" className="button-link">
              <Button variant="secondary" size="lg" fullWidth>
                🔐 Entrar como Líder
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="home-features">
            <Card className="feature-card">
              <div className="feature-icon">📅</div>
              <h3 className="feature-title">Calendário Intuitivo</h3>
              <p className="feature-text">
                Marque suas disponibilidades de forma visual e fácil.
              </p>
            </Card>

            <Card className="feature-card">
              <div className="feature-icon">👥</div>
              <h3 className="feature-title">Gerenciamento de Membros</h3>
              <p className="feature-text">
                Organize todos os membros e suas funções no ministério.
              </p>
            </Card>

            <Card className="feature-card">
              <div className="feature-icon">🎼</div>
              <h3 className="feature-title">Escalas Eficientes</h3>
              <p className="feature-text">
                Monte escalas harmoniosas com todos os instrumentos cobertos.
              </p>
            </Card>
          </div>
        </div>

        {/* Illustration or decorative area */}
        <div className="home-illustration">
          <div className="illustration-box">
            <div className="illustration-placeholder">
              🎸 🎹 🥁
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}