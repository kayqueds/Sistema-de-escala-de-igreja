# 🚀 Guia de Início Rápido

Começar a usar o sistema LOUVA em 5 minutos.

## 1. Instalação

```bash
# Clone ou entre na pasta do projeto
cd frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O projeto estará rodando em `http://localhost:5173` (Vite)

## 2. Estrutura Básica

```
src/
├── components/common/      ← Componentes reutilizáveis
├── pages/                  ← Páginas completas
├── routes/                 ← Definição de rotas
├── styles/                 ← CSS global e tema
├── data/                   ← Dados mock
├── App.jsx                 ← Componente raiz
└── main.jsx                ← Entry point
```

## 3. Adicionar uma Página

### Passo 1: Criar a Pasta
```
src/pages/minha-pagina/
├── MinhaPage.jsx
└── MinhaPage.css
```

### Passo 2: Criar o Componente
```jsx
// src/pages/minha-pagina/MinhaPage.jsx
import './MinhaPage.css';
import Button from '../../components/common/button/Button';
import Card from '../../components/common/card/Card';

export default function MinhaPage() {
  return (
    <div className="minha-page">
      <h1>Minha Página</h1>
      <Card>
        <p>Conteúdo aqui</p>
        <Button variant="primary">Clique aqui</Button>
      </Card>
    </div>
  );
}
```

### Passo 3: Adicionar a Rota
```jsx
// src/routes/Rotas.jsx
import MinhaPage from "../pages/minha-pagina/MinhaPage";

<Route path="/minha-pagina" element={<MinhaPage />} />
```

## 4. Adicionar um Componente Reutilizável

### Passo 1: Criar a Pasta
```
src/components/common/meu-componente/
├── MeuComponente.jsx
└── MeuComponente.css
```

### Passo 2: Implementar
```jsx
// src/components/common/meu-componente/MeuComponente.jsx
import './MeuComponente.css';

export default function MeuComponente({ 
  children, 
  className = '', 
  ...props 
}) {
  return (
    <div className={`meu-componente ${className}`} {...props}>
      {children}
    </div>
  );
}
```

### Passo 3: Usar em Outro Componente
```jsx
import MeuComponente from '../../components/common/meu-componente/MeuComponente';

<MeuComponente>
  Conteúdo aqui
</MeuComponente>
```

## 5. Atualizar o Tema

Edite `src/styles/theme.css`:

```css
:root {
  /* Suas cores aqui */
  --color-bg-primary: #0F172A;
  --color-accent-primary: #22D3EE;
  /* ... */
}
```

Todos os componentes usarão automaticamente as novas cores!

## 6. Usar Dados Mock

```javascript
// Importar
import { mockMembers, instruments } from '../data/mockData';

// Usar
mockMembers.forEach(member => {
  console.log(member.name);
  console.log(member.functions);
});

// Filtrar
const vocal = mockMembers.filter(m => 
  m.functions.includes('vocal_ministro')
);
```

## 7. Criar uma Tabela

```jsx
import Card from '../../components/common/card/Card';

<div className="table-wrapper">
  <table className="custom-table">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>
            <button onClick={() => handleEdit(item.id)}>Editar</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

## 8. Adicionar Validação

```jsx
const [email, setEmail] = useState('');
const [error, setError] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  
  if (!email.includes('@')) {
    setError('Email inválido');
    return;
  }
  
  setError('');
  // Submit
};

<Input
  label="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={Boolean(error)}
  helperText={error}
/>
```

## 9. Navegação entre Páginas

```jsx
import { Link, useNavigate } from 'react-router-dom';

// Usando Link (para navegação simples)
<Link to="/minha-pagina">Ir para Minha Página</Link>

// Usando useNavigate (para lógica complexa)
const navigate = useNavigate();

const handleClick = () => {
  if (validar()) {
    navigate('/sucesso');
  }
};
```

## 10. Estado e Efeitos

```jsx
import { useState, useEffect } from 'react';

export default function MinhaPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Buscar dados quando componente monta
    const fetchData = async () => {
      setLoading(true);
      // const response = await fetch(...);
      setLoading(false);
    };
    
    fetchData();
  }, []); // Dependências vazias = executa uma vez

  if (loading) return <div>Carregando...</div>;

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

## 11. Customizar Componente

```jsx
// Usar props para customização
<Button 
  variant="primary"      // Tipo de botão
  size="lg"             // Tamanho
  fullWidth={true}      // Largura
  disabled={false}      // Habilitado
  className="custom"    // CSS adicional
  onClick={handler}     // Evento
>
  Clique aqui
</Button>
```

## 12. Responsividade

Os componentes já têm media queries prontas. Para customizar:

```css
@media (max-width: 640px) {
  .meu-componente {
    font-size: var(--font-size-sm);
    padding: var(--spacing-md);
  }
}
```

## 13. Checklist para Novo Componente

- [ ] Criar pasta em `components/common/`
- [ ] Criar `.jsx` e `.css`
- [ ] Adicionar prop `className` para customização
- [ ] Adicionar prop `...props` para spread
- [ ] Usar variáveis CSS (--color-*, --spacing-*, etc)
- [ ] Adicionar media queries para responsividade
- [ ] Adicionar comentário no topo do CSS
- [ ] Exportar default do .jsx

## 14. Buildar para Produção

```bash
# Build
npm run build

# Preview do build
npm run preview

# Deploy em serviço como Vercel, Netlify, etc
```

## 15. Troubleshooting

### Erro: "Cannot find module"
- Verifique o caminho do import
- Certifique-se que o arquivo existe

### Componente não está estilizado
- Verifique se o CSS está no diretório correto
- Checke se o import do CSS está no .jsx

### Página em branco
- Abra o console do navegador (F12)
- Procure por mensagens de erro
- Verifique se as rotas estão corretas

### Mudanças não aparecem
- Salve o arquivo
- Atualize a página (F5)
- Verifique se o servidor Vite está rodando

---

## Próximas Etapas

1. Explore as páginas existentes
2. Entenda o fluxo de dados mock
3. Identifique onde adicionar novos componentes
4. Prepare para integrar Firebase

## Links Úteis

- [React Docs](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Vite Docs](https://vitejs.dev)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

---

**Dúvidas? Veja os arquivos README e COMPONENTES.md!**
