import './Login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@/components/common/input/Input';
import Button from '@/components/common/button/Button';
import Card from '@/components/common/card/Card';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulação de login - depois conectar com Firebase
    setTimeout(() => {
      console.log('Login attempt:', { email, password });
      // Redirecionar para dashboard após login bem-sucedido
      navigate('/leader/escalas');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login">
      <div className="login-container">
        <Card className="login-card">
          <div className="login-header">
            <div className="login-icon">🔐</div>
            <h1 className="login-title">Acesso de Líder</h1>
            <p className="login-subtitle">Gerenciador de Escalas</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <Input
              label="Email ou Usuário"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />

            <Input
              label="Senha"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              fullWidth
              disabled={loading}
            >
              {loading ? '⏳ Entrando...' : '→ Entrar'}
            </Button>
          </form>

          <div className="login-footer">
            <p className="login-footer-text">
              Versão demo • Dados não serão salvos
            </p>
          </div>
        </Card>

        <div className="login-info">
          <h2>Credenciais de Teste</h2>
          <p><strong>Email:</strong> lider@igreja.com</p>
          <p><strong>Senha:</strong> 123456</p>
          <p className="login-info-note">Clique em "Entrar" para continuar (Firebase não configurado ainda)</p>
        </div>
      </div>
    </div>
  );
}