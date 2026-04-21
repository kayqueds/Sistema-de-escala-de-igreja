import './Cadastro.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '@/components/common/input/Input';
import Select from '@/components/common/select/Select';
import Button from '@/components/common/button/Button';
import Card from '@/components/common/card/Card';

export default function Cadastro() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    type: '',
    functions: [],
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const typeOptions = [
    { value: 'membro', label: 'Membro Regular' },
    { value: 'lider', label: 'Líder' },
  ];

  const functionOptions = [
    { value: 'teclado', label: 'Teclado' },
    { value: 'violao', label: 'Violão' },
    { value: 'guitarra', label: 'Guitarra' },
    { value: 'baixo', label: 'Baixo' },
    { value: 'bateria', label: 'Bateria' },
    { value: 'cajon', label: 'Cajon' },
    { value: 'sax', label: 'Sax' },
    { value: 'vocal_ministro', label: 'Vocal (Ministro)' },
    { value: 'vocal_back', label: 'Backing Vocal' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não conferem');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      console.log('Cadastro realizado:', formData);
      alert('Cadastro realizado com sucesso!');
      navigate('/login');
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="cadastro">
      <div className="cadastro-container">
        <Card className="cadastro-card">
          <div className="cadastro-header">
            <div className="header-icon">✍️</div>
            <h1 className="header-title">Cadastro</h1>
            <p className="header-subtitle">Crie sua conta no sistema</p>
          </div>

          <form onSubmit={handleSubmit} className="cadastro-form">
            <Input
              label="Nome Completo"
              type="text"
              placeholder="Seu nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              required
            />

            <Input
              label="Email"
              type="email"
              placeholder="seu@email.com"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              required
            />

            <Select
              label="Tipo de Usuário"
              options={typeOptions}
              value={formData.type}
              onChange={handleChange}
              name="type"
              fullWidth
              required
            />

            <Input
              label="Senha"
              type="password"
              placeholder="••••••••"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              required
            />

            <Input
              label="Confirmar Senha"
              type="password"
              placeholder="••••••••"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
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
              {loading ? '⏳ Cadastrando...' : '→ Criar Conta'}
            </Button>
          </form>

          <div className="cadastro-footer">
            <p className="footer-text">
              Já tem conta?{' '}
              <Link to="/login" className="footer-link">
                Faça login aqui
              </Link>
            </p>
            <p className="demo-note">
              Versão demo • Dados não serão salvos permanentemente
            </p>
          </div>
        </Card>

        <div className="cadastro-info">
          <h2>Por que se cadastrar?</h2>
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">📋</div>
              <h3>Registre sua Disponibilidade</h3>
              <p>Marque os dias que você está disponível para louvar</p>
            </div>
            <div className="info-item">
              <div className="info-icon">🎵</div>
              <h3>Acompanhe Escalas</h3>
              <p>Veja quando você foi escalado para os cultos</p>
            </div>
            <div className="info-item">
              <div className="info-icon">👥</div>
              <h3>Comunidade</h3>
              <p>Faça parte do ministério de louvor da sua igreja</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
