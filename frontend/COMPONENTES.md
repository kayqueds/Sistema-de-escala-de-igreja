# 🎨 Guia de Componentes

Documentação completa de todos os componentes reutilizáveis do sistema.

## Índice
1. [Button](#button)
2. [Input](#input)
3. [Select](#select)
4. [Card](#card)
5. [Calendar](#calendar)
6. [MemberInfo](#memberinfo)
7. [Sidebar](#sidebar)

---

## Button

Componente de botão versátil com múltiplas variantes e tamanhos.

### Props
| Prop | Type | Default | Descrição |
|------|------|---------|-----------|
| `variant` | string | 'primary' | 'primary' \| 'secondary' \| 'danger' \| 'success' \| 'ghost' |
| `size` | string | 'md' | 'sm' \| 'md' \| 'lg' |
| `fullWidth` | boolean | false | Se deve ocupar 100% da largura |
| `disabled` | boolean | false | Desabilita o botão |
| `onClick` | function | - | Handler de clique |
| `type` | string | 'button' | 'button' \| 'submit' \| 'reset' |
| `children` | node | - | Conteúdo do botão |
| `className` | string | '' | Classes CSS customizadas |

### Variantes
- **primary**: Gradiente cyan/azul com neon
- **secondary**: Fundo secundário com border
- **danger**: Vermelho para ações destrutivas
- **success**: Verde para ações positivas
- **ghost**: Transparente com border

### Exemplos
```jsx
// Botão primário grande
<Button variant="primary" size="lg" fullWidth>
  Enviar Ocorrências
</Button>

// Botão de perigo pequeno
<Button variant="danger" size="sm">
  Remover
</Button>

// Botão desabilitado
<Button disabled>
  Carregando...
</Button>
```

---

## Input

Campo de entrada estilizado com label, helper text e tratamento de erros.

### Props
| Prop | Type | Default | Descrição |
|------|------|---------|-----------|
| `type` | string | 'text' | Tipo de input |
| `label` | string | - | Label do campo |
| `placeholder` | string | '' | Placeholder |
| `value` | string | - | Valor controlado |
| `onChange` | function | - | Handler de mudança |
| `error` | boolean | false | Estado de erro |
| `helperText` | string | - | Texto de ajuda |
| `fullWidth` | boolean | false | Ocupa 100% da largura |
| `disabled` | boolean | false | Desabilita o campo |

### Exemplos
```jsx
// Input básico
<Input
  label="Email"
  type="email"
  placeholder="seu@email.com"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  fullWidth
/>

// Input com erro
<Input
  label="Senha"
  type="password"
  error={true}
  helperText="Senha muito fraca"
/>

// Input de data
<Input
  type="date"
  label="Data do Culto"
  value={selectedDate}
  onChange={(e) => setSelectedDate(e.target.value)}
/>
```

---

## Select

Campo de seleção dropdown estilizado.

### Props
| Prop | Type | Default | Descrição |
|------|------|---------|-----------|
| `label` | string | - | Label do select |
| `options` | array | [] | Array de opções: `[{ value, label }]` |
| `value` | string | '' | Valor selecionado |
| `onChange` | function | - | Handler de mudança |
| `error` | boolean | false | Estado de erro |
| `helperText` | string | - | Texto de ajuda |
| `fullWidth` | boolean | false | Ocupa 100% da largura |
| `placeholder` | string | 'Selecione...' | Placeholder |
| `disabled` | boolean | false | Desabilita o select |

### Exemplos
```jsx
// Select básico
<Select
  label="Membro"
  options={[
    { value: 1, label: 'João Silva' },
    { value: 2, label: 'Maria Santos' },
  ]}
  value={selectedMemberId}
  onChange={(e) => setSelectedMemberId(e.target.value)}
  fullWidth
/>

// Select de instrumentos
<Select
  options={instrumentOptions}
  onChange={(e) => handleAddMember(e.target.value)}
  placeholder="Adicionar membro..."
/>
```

---

## Card

Container versátil para agrupar conteúdo com estilo consistente.

### Props
| Prop | Type | Default | Descrição |
|------|------|---------|-----------|
| `children` | node | - | Conteúdo do card |
| `className` | string | '' | Classes CSS customizadas |
| `clickable` | boolean | false | Se é clicável |
| `onClick` | function | - | Handler de clique |

### Exemplos
```jsx
// Card básico
<Card>
  <h3>Título</h3>
  <p>Conteúdo do card</p>
</Card>

// Card clicável
<Card clickable onClick={() => navigate('/page')}>
  Clique para navegar
</Card>

// Card customizado
<Card className="custom-card">
  <div className="content">...</div>
</Card>
```

---

## Calendar

Calendário interativo para seleção de datas/disponibilidade.

### Props
| Prop | Type | Default | Descrição |
|------|------|---------|-----------|
| `onDateSelect` | function | - | Callback: `(dateKey, isAvailable) => {}` |
| `selectedDates` | object | {} | Objeto com datas selecionadas |

### Formato de Data
As datas são armazenadas como strings no formato: `"YYYY-M-D"`
```javascript
{
  "2024-3-15": true,  // 15 de março de 2024 - disponível
  "2024-3-16": false, // 16 de março de 2024 - indisponível
}
```

### Exemplos
```jsx
const [selectedDates, setSelectedDates] = useState({});

<Calendar
  onDateSelect={(dateKey, isAvailable) => {
    setSelectedDates(prev => ({
      ...prev,
      [dateKey]: isAvailable,
    }));
  }}
  selectedDates={selectedDates}
/>

// Contar dias disponíveis
const availableDays = Object.values(selectedDates).filter(Boolean).length;
```

### Estados Visuais
- ✅ **Verde**: Dia selecionado (disponível)
- ❌ **Cinza**: Dia não selecionado (indisponível)
- 🔵 **Hover**: Efeito de hover nos dias

---

## MemberInfo

Card com informações formatadas de um membro.

### Props
| Prop | Type | Default | Descrição |
|------|------|---------|-----------|
| `member` | object | {} | Objeto do membro |

### Estrutura do Objeto Member
```javascript
{
  id: 1,
  name: "João Silva",
  type: "Membro Regular",
  functions: ["violao", "vocal_ministro"]
}
```

### Exemplo
```jsx
import { mockMembers } from '../data/mockData';

const member = mockMembers[0];

<MemberInfo member={member} />
```

### O que é Exibido
- Avatar com inicial do nome (gradiente)
- Nome do membro
- Tipo (Membro Regular / Líder)
- Tags com funções/instrumentos

---

## Sidebar

Menu lateral colapsável para o dashboard do líder.

### Props
Nenhuma prop necessária. Usa `useLocation` do React Router.

### Funcionalidades
- ✅ Colapsável (esconde labels)
- ✅ Navegação ativa (destaque)
- ✅ Menu com ícones
- ✅ Botão de logout
- ✅ Responsivo

### Exemplo
```jsx
import Sidebar from '../../components/common/sidebar/Sidebar';

<div className="leader-dashboard">
  <Sidebar />
  <main className="leader-main">
    {/* Conteúdo principal */}
  </main>
</div>
```

### Itens do Menu
- 🎵 Escalas → `/leader/escalas`
- 👥 Membros → `/leader/membros`
- 📋 Ocorrências → `/leader/ocorrencias`
- 🚪 Sair (logout button)

---

## Dados Mock

### Usando mockData.js

```javascript
import { 
  mockMembers, 
  instruments, 
  instrumentLabels,
  getInstrumentLabel,
  getInstrumentEmoji 
} from '../data/mockData';

// Acessar membros
mockMembers.forEach(member => {
  console.log(member.name); // João Silva
  console.log(member.functions); // ['violao', 'vocal_ministro']
});

// Labels de instrumentos
getInstrumentLabel('teclado'); // "Teclado"
getInstrumentEmoji('violao'); // "🎸"

// Filtrar membros por função
const vocalists = mockMembers.filter(m => 
  m.functions.includes('vocal_ministro')
);
```

---

## Padrões de Styling

### Variáveis CSS Disponíveis

#### Cores
```css
--color-bg-primary: #0F172A
--color-bg-secondary: #1E293B
--color-bg-tertiary: #334155
--color-text-primary: #E2E8F0
--color-text-secondary: #CBD5E1
--color-text-tertiary: #94A3B8
--color-accent-primary: #22D3EE
--color-accent-secondary: #0EA5E9
--color-success: #22C55E
--color-error: #EF4444
```

#### Espaçamento
```css
--spacing-xs: 0.25rem
--spacing-sm: 0.5rem
--spacing-md: 1rem
--spacing-lg: 1.5rem
--spacing-xl: 2rem
--spacing-2xl: 2.5rem
--spacing-3xl: 3rem
```

#### Transições
```css
--transition-fast: 150ms ease-in-out
--transition-normal: 250ms ease-in-out
--transition-slow: 350ms ease-in-out
```

---

## Boas Práticas

### Componentes Responsivos
Todos os componentes incluem media queries para mobile/tablet/desktop.

### Acessibilidade
- Labels associados a inputs
- Cores com contraste adequado
- Tamanhos de fonte legíveis
- Hover/focus states claros

### Performance
- CSS puro (sem dependências)
- Componentes leves
- Sem re-renders desnecessários

### Customização
Todos os componentes aceitam `className` para customizações adicionais.

```jsx
<Button className="my-custom-class">
  Botão Customizado
</Button>
```

---

## Criando Novos Componentes

### Estrutura Recomendada
```
components/
├── common/
│   └── mycomponent/
│       ├── MyComponent.jsx
│       └── MyComponent.css
```

### Template
```jsx
import './MyComponent.css';

export default function MyComponent({ 
  prop1, 
  prop2, 
  className = '', 
  ...props 
}) {
  return (
    <div className={`my-component ${className}`} {...props}>
      {/* Conteúdo */}
    </div>
  );
}
```

---

**Última atualização**: Abril 2024
**Versão**: 1.0
