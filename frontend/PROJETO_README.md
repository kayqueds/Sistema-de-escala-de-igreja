# 📋 LOUVA - Sistema de Gerenciamento de Escala de Louvor

## Estrutura do Projeto

Projeto completo de front-end em React com estrutura profissional, moderna e escalável para gerenciamento de escalas de louvor em igrejas.

## 🏗️ Estrutura de Pastas

```
frontend/
├── src/
│   ├── components/
│   │   └── common/
│   │       ├── button/          # Componente Button reutilizável
│   │       ├── card/            # Componente Card para containers
│   │       ├── input/           # Campo de input estilizado
│   │       ├── select/          # Dropdown de seleção
│   │       ├── calendar/        # Calendário para seleção de datas
│   │       ├── memberInfo/      # Card com informações de membro
│   │       ├── header/          # Cabeçalho global
│   │       ├── footer/          # Rodapé global
│   │       ├── navigation/      # Navegação
│   │       └── sidebar/         # Menu lateral (Dashboard)
│   │
│   ├── pages/
│   │   ├── home/                # Home - Página inicial
│   │   ├── login/               # Login - Autenticação de líder
│   │   ├── cadastro/            # Cadastro - Registro de usuário
│   │   ├── ocorrencias/         # Ocorrências - Disponibilidades dos membros
│   │   ├── error404/            # Página de erro
│   │   └── leader/
│   │       ├── LeaderDashboard.jsx   # Layout principal do líder
│   │       ├── escalas/         # Escalas - Montagem das escalas
│   │       ├── membros/         # Membros - Gerenciamento de membros
│   │       └── ocorrencias/     # Ocorrências Pendentes - Lista de membros pendentes
│   │
│   ├── routes/
│   │   └── Rotas.jsx            # Definição de todas as rotas
│   │
│   ├── styles/
│   │   ├── theme.css            # Variáveis de tema global
│   │   ├── components.css       # Estilos globais de componentes
│   │   └── THEME.md             # Documentação do tema
│   │
│   ├── data/
│   │   ├── mockData.js          # Dados mock para desenvolvimento
│   │   └── membros.js           # Dados de membros (existente)
│   │
│   ├── App.jsx                  # Componente raiz
│   ├── main.jsx                 # Entry point
│   └── index.css                # Estilos globais
│
└── public/

```

## 🎨 Design e Estilo

### Paleta de Cores
- **Fundo Principal**: #0F172A (Azul escuro profundo)
- **Cards/Tabelas**: #1E293B (Azul escuro secundário)
- **Texto Principal**: #E2E8F0 (Cinza claro)
- **Azul Destaque**: #22D3EE (Cyan vibrante)
- **Azul Secundário**: #0EA5E9 (Azul)
- **Verde (Positivo)**: #22C55E (Verde)
- **Vermelho (Negativo)**: #EF4444 (Vermelho)

### Tipografia
- **Font Principal**: Inter
- **Font Secundária**: Montserrat
- **Font Monoespacial**: Fira Code

### Características Visuais
- ✨ Dark mode suave
- 🎯 Neon apenas como destaque leve
- 📐 Arredondamento leve nos componentes (4-12px)
- 🪶 Hover suave com efeitos transição
- 💡 Sombra leve e elegante
- 🎯 Bom espaçamento e organização

## 📄 Páginas Criadas

### 1. **Home** (`/`)
- Logo/Imagem da Igreja
- Título do Sistema
- Descrição da Igreja/Sistema
- Botão "Passar Ocorrências"
- Botão "Entrar como Líder"
- Cards de features (3 colunas)

### 2. **Tela de Ocorrências** (`/ocorrencias`)
- Select para escolher membro
- Exibição automática de:
  - Nome do membro
  - Tipo
  - Funções
- Calendário mensal visual
- Dias disponíveis (verde)
- Dias indisponíveis (vermelho)
- Botão "Enviar Ocorrências"

### 3. **Login do Líder** (`/login`)
- Campo de email/usuário
- Campo de senha
- Botão "Entrar"
- Layout consistente
- Credenciais de teste visíveis

### 4. **Cadastro** (`/cadastro`)
- Campo nome completo
- Campo email
- Select de tipo (Membro/Líder)
- Campo senha
- Confirmação de senha
- Info cards sobre benefícios

### 5. **Dashboard do Líder** (`/leader`)
- Sidebar colapsável com menu
- Área principal de conteúdo
- Rotas internas para sub-páginas

### 6. **Tela de Escalas** (`/leader/escalas`)
- Seleção de data
- Cards por instrumento:
  - Teclado
  - Violão
  - Guitarra
  - Baixo
  - Bateria
  - Cajon
  - Sax
  - Vocal Ministro
  - Backing Vocal
- Lista visual de membros escalados
- Select para adicionar membros
- Botão remover membro (X)
- Botão "Salvar Escala"

### 7. **Tela de Membros** (`/leader/membros`)
- Tabela/Lista de membros
- Coluna: Nome
- Coluna: Tipo
- Coluna: Funções (tags)
- Coluna: Membro desde
- Coluna: Ações (Editar, Remover)
- Input de busca
- Botão "Adicionar Membro"
- Card vazio quando nenhum encontrado

### 8. **Ocorrências Pendentes** (`/leader/ocorrencias`)
- Lista de membros pendentes
- Status "Pendente há X dias"
- Botão "Lembrete" para cada membro
- Cards com informações
- Estatísticas (3 cards)

### 9. **Error 404** (`/*`)
- Erro 404 estilizado
- Botões de redirecionamento

## 🎯 Componentes Reutilizáveis

### Button
```jsx
<Button 
  variant="primary" | "secondary" | "danger" | "success" | "ghost"
  size="sm" | "md" | "lg"
  fullWidth={true}
  disabled={false}
  onClick={handler}
>
  Texto do Botão
</Button>
```

### Input
```jsx
<Input 
  type="text" | "email" | "password" | "date"
  label="Label"
  placeholder="Placeholder"
  value={value}
  onChange={handler}
  error={false}
  helperText="Mensagem de ajuda"
  fullWidth={true}
/>
```

### Select
```jsx
<Select 
  label="Label"
  options={[{ value: '1', label: 'Opção 1' }]}
  value={value}
  onChange={handler}
  error={false}
  helperText="Mensagem de ajuda"
  fullWidth={true}
/>
```

### Card
```jsx
<Card className="custom-class" clickable={false} onClick={handler}>
  Conteúdo do card
</Card>
```

### Calendar
```jsx
<Calendar 
  onDateSelect={(dateKey, isAvailable) => {}}
  selectedDates={{ "2024-3-15": true }}
/>
```

### MemberInfo
```jsx
<MemberInfo 
  member={{
    name: "João Silva",
    type: "Membro Regular",
    functions: ["violao", "vocal_ministro"]
  }}
/>
```

### Sidebar
```jsx
<Sidebar />
```

## 🚀 Rotas

```
/                           → Home
/login                      → Login do Líder
/cadastro                   → Cadastro de Novo Usuário
/ocorrencias                → Tela de Ocorrências (Membro)
/leader                     → Dashboard do Líder
  ├── /leader/escalas       → Escalas
  ├── /leader/membros       → Membros
  └── /leader/ocorrencias   → Ocorrências Pendentes
/*                          → Error 404
```

## 📦 Dados Mock

Arquivo `src/data/mockData.js` contém:
- `mockMembers` - Lista de membros
- `instruments` - Lista de instrumentos
- `userTypes` - Tipos de usuário
- `mockScales` - Escalas de exemplo
- `mockPendingOccurrences` - Ocorrências pendentes

**Nota**: Todos os dados são mockados. A integração com Firebase será feita posteriormente.

## 🎨 Customização do Tema

Edite `src/styles/theme.css` para personalizar:
- Cores
- Tipografia
- Espaçamento
- Radius (bordas)
- Sombras
- Transições
- Breakpoints

## 📱 Responsividade

Todos os componentes e páginas são responsivos com breakpoints:
- `320px` - Mobile mínimo
- `640px` - Mobile
- `768px` - Tablet
- `1024px` - Desktop pequeno
- `1280px` - Desktop
- `1536px` - Desktop grande

## ✨ Próximos Passos

1. **Integração com Firebase**
   - Autenticação
   - Banco de dados em tempo real
   - Storage

2. **Funcionalidades Faltantes**
   - Modal de adicionar/editar membro
   - Modal de seleção de membro para escala
   - Validações mais robustas
   - Persistência de dados

3. **Melhorias**
   - Testes unitários
   - Testes de integração
   - Documentação de componentes
   - Melhorias de performance

4. **Segurança**
   - Proteção de rotas (autenticação)
   - Validações no backend
   - CORS configurado

## 🔧 Tecnologias Utilizadas

- **React 19.2.4**
- **React Router DOM 7.14.1**
- **Vite 8.0.4**
- **CSS3 Moderno**
- **JavaScript ES6+**

## 💡 Notas de Desenvolvimento

- Todos os componentes usam CSS puro para máxima compatibilidade
- Design system baseado em variáveis CSS para fácil manutenção
- Estrutura escalável para fácil adição de novos componentes
- Mock data pronto para fácil transição para Firebase
- Comentários em português para melhor entendimento local

## 📝 Padrões de Código

- PascalCase para nomes de componentes
- camelCase para variáveis e funções
- CSS em arquivos separados para cada componente
- Organização por feature (componentes agrupados com seu CSS)
- Nomes descritivos e auto-explicativos

## 🎓 Exemplo de Uso da Página de Escalas

A página de escalas permite que o líder:

1. Selecione uma data
2. Veja 9 cards (um para cada instrumento)
3. Em cada card:
   - Veja o nome do instrumento
   - Veja um contador de escalados
   - Veja lista de membros já escalados
   - Remova membros com o botão X
   - Adicione membros via dropdown
4. Salve a escala

## 🔐 Segurança

Atualmente é uma versão de desenvolvimento. Antes de ir para produção:
- Implementar autenticação real
- Validar acesso às rotas
- Sanitizar inputs
- Configurar CORS
- Usar variáveis de ambiente

---

**Desenvolvido com ❤️ para facilitar o gerenciamento de escalas de louvor em igrejas.**
