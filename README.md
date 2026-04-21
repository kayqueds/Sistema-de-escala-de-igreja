"# 🎵 LOUVA - Sistema de Escala de Louvor

Sistema web completo para gerenciamento de escalas de louvor em igrejas. Desenvolvido com React e design moderno, minimalista e elegante.

## 📋 Sobre o Projeto

LOUVA é um sistema que permite:
- **Membros**: Indicar disponibilidade através de um calendário intuitivo
- **Líderes**: Montar escalas harmoniosas visualizando membros disponíveis

## 🎯 Status do Projeto

✅ **ESTRUTURA VISUAL COMPLETA** - Todas as páginas e componentes criados
⏳ **INTEGRAÇÕES PENDENTES** - Firebase não configurado ainda

## 🚀 Funcionalidades Implementadas

### Para Membros
- ✅ Tela de Home com chamada à ação
- ✅ Cadastro de novo usuário
- ✅ Tela de Ocorrências com calendário visual
- ✅ Seleção de disponibilidade por dia
- ✅ Envio de ocorrências

### Para Líderes
- ✅ Login
- ✅ Dashboard com sidebar colapsável
- ✅ Tela de Escalas (9 instrumentos)
  - Teclado, Violão, Guitarra, Baixo
  - Bateria, Cajon, Sax
  - Vocal Ministro, Backing Vocal
- ✅ Gerenciamento de Membros (tabela com busca)
- ✅ Visualização de Ocorrências Pendentes
- ✅ Estatísticas de pendências

## 🎨 Design

- **Tema**: Dark Mode Minimalista
- **Cores**: Azul escuro com destaques em cyan/azul
- **Font**: Inter (principal)
- **Responsivo**: Totalmente adaptável para mobile/tablet/desktop
- **Animações**: Suaves e elegantes

### Paleta de Cores
```css
Fundo: #0F172A
Cards: #1E293B
Texto: #E2E8F0
Destaque: #22D3EE (Cyan)
Secundário: #0EA5E9 (Azul)
Sucesso: #22C55E (Verde)
Erro: #EF4444 (Vermelho)
```

## 📁 Estrutura do Projeto

```
/
├── frontend/
│   ├── src/
│   │   ├── components/common/    → Componentes reutilizáveis
│   │   ├── pages/                → Todas as páginas
│   │   ├── routes/               → Definição de rotas
│   │   ├── styles/               → Temas e estilos globais
│   │   ├── data/                 → Dados mock
│   │   └── App.jsx               → App principal
│   ├── package.json
│   └── PROJETO_README.md         → Documentação detalhada
│
├── docs/
│   ├── entidades-do-sistema.md
│   └── identidade-visual.md
│
└── README.md (este arquivo)
```

## 🔧 Tecnologias

- **React 19.2.4**
- **React Router DOM 7.14.1**
- **Vite 8.0.4**
- **CSS3 Moderno** (sem frameworks de CSS)
- **JavaScript ES6+**

## 📖 Rotas Disponíveis

```
/                           Home
/login                      Login do Líder
/cadastro                   Cadastro de Novo Usuário
/ocorrencias                Tela de Ocorrências (Membro)

/leader                     Dashboard do Líder (Sidebar + Menu)
  ├── /leader/escalas       Montagem de Escalas
  ├── /leader/membros       Gerenciamento de Membros
  └── /leader/ocorrencias   Ocorrências Pendentes

/*                          Error 404
```

## 🎯 Componentes Criados

### Componentes Comuns (Reutilizáveis)
- **Button** - Múltiplas variantes e tamanhos
- **Input** - Campo de entrada com validação
- **Select** - Dropdown estilizado
- **Card** - Container versátil
- **Calendar** - Calendário interativo
- **MemberInfo** - Card com info de membro
- **Sidebar** - Menu lateral colapsável
- **Header** - Cabeçalho (pronto para uso)
- **Footer** - Rodapé (pronto para uso)
- **Navigation** - Navegação (pronto para uso)

### Páginas Criadas
1. **Home** - Página inicial com CTA
2. **Login** - Autenticação de líder (mock)
3. **Cadastro** - Registro de novo usuário
4. **Ocorrências** - Preenchimento de disponibilidade
5. **LeaderDashboard** - Layout principal do líder
6. **Escalas** - Montagem das escalas
7. **Membros** - Gerenciamento de membros
8. **OcorrenciasPendentes** - Lista de pendências
9. **Error404** - Página de erro

## 💾 Dados Mock

Arquivo `src/data/mockData.js` contém dados de exemplo:
- Lista de 8 membros
- 9 instrumentos
- Tipos de usuário
- Escalas de exemplo
- Ocorrências pendentes

## 🎨 Como Customizar

### Alterar Cores
Edite `src/styles/theme.css` nas variáveis CSS (`:root`)

### Alterar Tipografia
Modifique as variáveis de font em `theme.css`

### Adicionar Novo Instrumento
1. Adicione em `src/data/mockData.js`
2. Atualize a tela de Escalas se necessário

### Adicionar Novo Membro
Edite `src/data/mockData.js` - `mockMembers`

## 🚀 Como Rodar

```bash
# Instalar dependências
cd frontend
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📱 Responsividade

Todos os componentes são responsivos com breakpoints:
- 📱 Mobile: 320px-640px
- 📱 Tablet: 641px-1024px
- 💻 Desktop: 1025px+

## ⏭️ Próximos Passos

### Curto Prazo
- [ ] Integração com Firebase Authentication
- [ ] Integração com Firestore Database
- [ ] Modais para adicionar/editar membros
- [ ] Validações robustas

### Médio Prazo
- [ ] Sistema de notificações
- [ ] Email com lembretes
- [ ] Histórico de escalas
- [ ] Exportação de relatórios

### Longo Prazo
- [ ] App mobile nativo
- [ ] Dashboard de estatísticas
- [ ] Sistema de permissões avançado
- [ ] Integração com calendário de cultos

## 🔐 Segurança

**Status**: Desenvolvimento (Mock data)

Antes de ir para produção, implementar:
- ✅ Autenticação real com Firebase
- ✅ Validação de acesso por tipo de usuário
- ✅ CORS configurado
- ✅ Variáveis de ambiente protegidas
- ✅ Sanitização de inputs

## 📚 Documentação Adicional

Veja `frontend/PROJETO_README.md` para documentação técnica detalhada.

## 🎓 Exemplos de Uso

### Fluxo de Membro
1. Acessa home
2. Clica em "Passar Ocorrências"
3. Seleciona seu nome
4. Marca dias disponíveis no calendário
5. Clica "Enviar Ocorrências"

### Fluxo de Líder
1. Acessa home
2. Clica em "Entrar como Líder"
3. Faz login (mock: qualquer dados)
4. Acessa Dashboard
5. Navega pelo menu lateral
6. Pode acessar Escalas, Membros, Ocorrências Pendentes

## 🤝 Contribuindo

Este é um projeto em desenvolvimento. Sinta-se livre para:
- Sugerir melhorias
- Reportar bugs
- Adicionar novas funcionalidades
- Melhorar o design

## 📞 Contato

Para dúvidas ou sugestões, abra uma issue no repositório.

## 📄 Licença

Este projeto é desenvolvido para uso em igrejas e organizações não-lucrativas.

---

**Desenvolvido com ❤️ para facilitar o gerenciamento de escalas de louvor em igrejas.**

*Status: Em desenvolvimento | Versão: 1.0 (Beta)*" 
