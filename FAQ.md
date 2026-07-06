# ❓ FAQ - Perguntas Frequentes

## 📖 Sobre o Projeto

### P: O que é LOUVA?
**R:** LOUVA é um Sistema de Escala de Louvor - uma aplicação que ajuda igrejas a gerenciar a escalação de músicos e cantores para os cultos de adoração.

### P: Quais tecnologias foram usadas?
**R:**
- React 19.2.4 (UI)
- React Router DOM 7.14.1 (Routing)
- Vite 8.0.4 (Build tool)
- CSS3 puro (sem frameworks)
- JavaScript ES6+

### P: Preciso de Node.js para rodar?
**R:** Sim! Baixe a versão LTS em https://nodejs.org/

---

## 🚀 Como Começar

### P: Como instalar o projeto?
**R:** Execute um dos scripts de setup:

**Windows (PowerShell):**
```powershell
.\SETUP.ps1
```

**Linux/Mac (Bash):**
```bash
bash SETUP.sh
```

**Manual:**
```bash
cd frontend
npm install
npm run dev
```

### P: Qual é a porta padrão?
**R:** O servidor roda em `http://localhost:5173`

### P: Como parar o servidor?
**R:** Pressione `Ctrl + C` no terminal.

---

## 🧩 Sobre Componentes

### P: Como criar um novo componente?
**R:** Veja [INICIO_RAPIDO.md](INICIO_RAPIDO.md) seção "Como criar um novo componente".

Padrão:
```jsx
// src/components/common/meuComponente/MeuComponente.jsx
import './MeuComponente.css';

export default function MeuComponente({ prop1, prop2, className = '', ...props }) {
  return <div className={`meu-componente ${className}`} {...props}>{/* ... */}</div>;
}
```

### P: Como reutilizar um componente?
**R:** Importe e use:
```jsx
import Button from '@/components/common/button/Button';

<Button variant="primary" size="md">Clique aqui</Button>
```

### P: Como customizar cores de um componente?
**R:** Edite as variáveis CSS em `src/styles/theme.css`:
```css
--color-primary: #22D3EE; /* Mude a cor cyan */
```

---

## 📱 Sobre Páginas

### P: Como criar uma nova página?
**R:** Veja [INICIO_RAPIDO.md](INICIO_RAPIDO.md) seção "Como criar uma nova página".

### P: Como adicionar uma rota?
**R:** Edite `src/routes/Rotas.jsx`:
```jsx
<Route path="/minha-pagina" element={<MinhaPage />} />
```

### P: Como navegar entre páginas?
**R:** Use o Link do React Router:
```jsx
import { Link } from 'react-router-dom';

<Link to="/outra-pagina">Ir para página</Link>
```

### P: Como fazer redirect programático?
**R:** Use o hook `useNavigate`:
```jsx
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/outra-pagina');
```

---

## 🎨 Design System

### P: Como mudar o tema de cores?
**R:** Edite `src/styles/theme.css`:
```css
:root {
  --bg-primary: #0F172A;      /* Cor de fundo */
  --color-accent: #22D3EE;    /* Cor destaque */
  --color-error: #EF4444;     /* Cor erro */
}
```

### P: Como adicionar uma nova cor?
**R:** No `theme.css`:
```css
--color-nova: #XXXXXX;
```

Depois use em qualquer CSS:
```css
.meu-elemento {
  color: var(--color-nova);
}
```

### P: Como mudar as fontes?
**R:** Edite `src/styles/theme.css`:
```css
--font-primary: 'Minha Font', sans-serif;
```

### P: Quais são os breakpoints?
**R:** Em `theme.css`:
- `--breakpoint-sm: 640px`
- `--breakpoint-md: 768px`
- `--breakpoint-lg: 1024px`
- `--breakpoint-xl: 1280px`
- `--breakpoint-2xl: 1536px`

Use assim:
```css
@media (max-width: var(--breakpoint-md)) {
  /* Mobile */
}
```

---

## 📊 Dados e Mock

### P: Onde estão os dados de teste?
**R:** Em `src/data/mockData.js`

### P: Como adicionar mais membros?
**R:** Edite `mockData.js`:
```javascript
export const mockMembers = [
  // ... membros existentes
  {
    id: 9,
    name: 'Novo Membro',
    type: 'Membro',
    email: 'novo@email.com',
    functions: ['violao'],
    joined: '2026-04-21',
    isLeader: false,
  },
];
```

### P: Como usar os dados em componentes?
**R:** Importe e use:
```jsx
import { mockMembers, instruments } from '@/data/mockData';

export default function Exemplo() {
  return mockMembers.map(member => <div key={member.id}>{member.name}</div>);
}
```

### P: Como trocar mock data por dados reais (Firebase)?
**R:** Substitua o import nos componentes:
```jsx
// Antes
import { mockMembers } from '@/data/mockData';

// Depois
import { getMembers } from '@/services/firebase';
```

---

## 🔗 Rotas

### P: Quais são todas as rotas disponíveis?
**R:**
```
/                   → Home
/login              → Login (Líder)
/cadastro           → Cadastro (Novo Membro)
/ocorrencias        → Disponibilidade (Membro)
/leader             → Dashboard (Líder)
/leader/escalas     → Gerenciar Escalas
/leader/membros     → Gerenciar Membros
/leader/ocorrencias → Ver Pendências
/*                  → Error 404
```

### P: Como proteger rotas (autenticação)?
**R:** Veja [PROJETO_README.md](PROJETO_README.md) seção "Próximos Passos - Firebase".

Exemplo básico:
```jsx
<Route path="/leader" element={isLoggedIn ? <Dashboard /> : <Login />} />
```

---

## 🎨 Estilos

### P: Usando CSS ou Tailwind?
**R:** CSS3 puro com variáveis customizadas. Sem frameworks!

### P: Como editar estilos de um componente?
**R:** Cada componente tem seu CSS:
```
src/components/common/button/
├── Button.jsx
└── Button.css
```

Edite o arquivo `.css` do componente.

### P: Como fazer o site responsivo?
**R:** Todos os componentes já são responsivos! Veja os `@media` queries em cada arquivo CSS.

Para adicionar responsividade:
```css
@media (max-width: 768px) {
  .meu-elemento {
    flex-direction: column;
  }
}
```

---

## 🐛 Troubleshooting

### P: Porta 5173 já está em uso
**R:** Execute em outra porta:
```bash
npm run dev -- --port 3000
```

### P: Erro "Cannot find module"
**R:** Reinstale dependências:
```bash
rm -rf node_modules package-lock.json
npm install
```

### P: Componentes não estão renderizando
**R:** Verifique:
1. O arquivo existe em `src/components/`?
2. O import está correto?
3. Tem um export default?

### P: Estilos não estão sendo aplicados
**R:** Verifique:
1. O arquivo CSS está importado?
2. Classe CSS está correta?
3. Não há conflito de seletores?
4. Variáveis CSS existem?

### P: Erro na compilação
**R:** Veja o erro completo no terminal e:
1. Verifique sintaxe JSX
2. Verifique imports
3. Limpe node_modules e reinstale

### P: Como debugar?
**R:** Abra DevTools (F12) no navegador:
1. Abra Console para erros
2. Abra Components para inspecionar React
3. Abra Network para checar requisições

---

## 📦 Build e Deploy

### P: Como fazer build para produção?
**R:**
```bash
cd frontend
npm run build
```

Cria a pasta `dist/` com os arquivos otimizados.

### P: Como fazer preview do build?
**R:**
```bash
npm run preview
```

### P: Como fazer deploy?
**R:** Veja [PROJETO_README.md](PROJETO_README.md) - não implementado ainda.

---

## 🔒 Segurança

### P: Devo usar senhas em mockData?
**R:** Não! São apenas dados de teste. Use Firebase Authentication em produção.

### P: Onde colocar chaves de API?
**R:** Em arquivo `.env` (não comite para Git):
```
VITE_FIREBASE_API_KEY=xxx
VITE_FIREBASE_PROJECT_ID=xxx
```

### P: Como proteger rotas de líder?
**R:** Com Firebase Auth:
```jsx
<Route path="/leader" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
```

---

## 📚 Documentação

### P: Qual documentação ler primeiro?
**R:** Na ordem:
1. [README.md](README.md) - Visão geral
2. [PROJETO_README.md](PROJETO_README.md) - Estrutura técnica
3. [COMPONENTES.md](COMPONENTES.md) - Componentes disponíveis
4. [INICIO_RAPIDO.md](INICIO_RAPIDO.md) - Como usar

### P: Onde está documentado cada componente?
**R:** Em [COMPONENTES.md](COMPONENTES.md) com exemplos de uso.

### P: Como documentar um novo componente?
**R:** Adicione ao final de [COMPONENTES.md](COMPONENTES.md):
```markdown
## Meu Componente

**Localização:** `src/components/common/meuComponente/MeuComponente.jsx`

**Props:**
- `prop1` (string) - Descrição
- `prop2` (number) - Descrição

**Exemplo:**
\`\`\`jsx
<MeuComponente prop1="valor" prop2={123} />
\`\`\`
```

---

## 🚀 Próximos Passos

### P: Como integrar Firebase?
**R:** Veja [PROJETO_README.md](PROJETO_README.md) seção "Próximos Passos".

### P: Como adicionar autenticação?
**R:** Firebase Authentication (não implementado ainda).

### P: Como adicionar banco de dados?
**R:** Firestore Database (não implementado ainda).

### P: Como fazer notificações?
**R:** Toast library + Email service (não implementado ainda).

---

## 💬 Suporte

### P: Encontrei um bug, e agora?
**R:** 
1. Descreva o bug
2. Mostre passos para reproduzir
3. Mostre o erro do console
4. Sugira uma correção se possível

### P: Preciso de ajuda para customizar?
**R:** Veja [INICIO_RAPIDO.md](INICIO_RAPIDO.md) para exemplos práticos.

### P: Onde reportar problemas?
**R:** Abra uma issue no repositório Git com detalhes.

---

## 📞 Contato e Suporte

**Documentação:** Veja os arquivos `.md` na raiz do projeto

**Quick Links:**
- 📖 [PROJETO_README.md](PROJETO_README.md)
- 🧩 [COMPONENTES.md](COMPONENTES.md)
- 🚀 [INICIO_RAPIDO.md](INICIO_RAPIDO.md)
- ✅ [CHECKLIST_FINAL.md](CHECKLIST_FINAL.md)

---

**Última atualização:** Abril 2026
**Status:** ✅ PRONTO PARA USO

---

Divirta-se desenvolvendo! 🎉
