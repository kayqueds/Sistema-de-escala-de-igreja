/* ========================================
   EXEMPLO DE COMPONENTE COM NOVO TEMA
   ======================================== */

/* Este arquivo mostra exemplos de como usar o novo sistema de estilos
   em componentes React da aplicação */

/* ========================================
   EXEMPLO 1: COMPONENTE DE CARD
   ======================================== */

export function ExemploCard() {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Meu Card Estilizado</h3>
      </div>
      <div className="card-body">
        <p>
          Este card usa automaticamente o novo sistema de cores e estilos
          globais. Observe o hover suave com efeito neon!
        </p>
      </div>
      <div className="card-footer">
        <button className="btn btn-secondary">Cancelar</button>
        <button className="btn btn-primary">Confirmar</button>
      </div>
    </div>
  );
}

/* ========================================
   EXEMPLO 2: FORMULÁRIO
   ======================================== */

export function ExemploForm() {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Formulário de Login</h3>
      </div>
      <form className="card-body">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="input"
            placeholder="seu@email.com"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            className="input"
            placeholder="••••••••"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-full">
          Entrar
        </button>
      </form>
    </div>
  );
}

/* ========================================
   EXEMPLO 3: TABELA
   ======================================== */

export function ExemploTabela() {
  const dados = [
    { id: 1, nome: 'João Silva', email: 'joao@email.com', status: 'ativo' },
    { id: 2, nome: 'Maria Santos', email: 'maria@email.com', status: 'ativo' },
    { id: 3, nome: 'Pedro Costa', email: 'pedro@email.com', status: 'inativo' },
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h3>Membros da Equipe</h3>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.email}</td>
              <td>
                <span
                  className={`badge badge-${
                    item.status === 'ativo' ? 'success' : 'error'
                  }`}
                >
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ========================================
   EXEMPLO 4: GRADE DE CARDS
   ======================================== */

export function ExemploGrade() {
  const items = [
    { id: 1, titulo: 'Membros', valor: 245 },
    { id: 2, titulo: 'Escalas', valor: 12 },
    { id: 3, titulo: 'Eventos', valor: 8 },
    { id: 4, titulo: 'Ativo', percentual: 92 },
  ];

  return (
    <div className="grid grid-4">
      {items.map((item) => (
        <div key={item.id} className="card">
          <div className="card-body text-center">
            <h4 style={{ color: 'var(--color-accent-primary)' }}>
              {item.valor || item.percentual}
              {item.percentual && '%'}
            </h4>
            <p className="text-muted">{item.titulo}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ========================================
   EXEMPLO 5: ALERTS
   ======================================== */

export function ExemploAlerts() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
      <div className="alert alert-success">
        <span className="alert-icon">✓</span>
        <div className="alert-content">
          <strong>Sucesso!</strong> Operação realizada com sucesso.
        </div>
      </div>

      <div className="alert alert-error">
        <span className="alert-icon">✕</span>
        <div className="alert-content">
          <strong>Erro!</strong> Verifique os dados e tente novamente.
        </div>
      </div>

      <div className="alert alert-warning">
        <span className="alert-icon">⚠</span>
        <div className="alert-content">
          <strong>Aviso!</strong> Essa ação não pode ser desfeita.
        </div>
      </div>

      <div className="alert alert-info">
        <span className="alert-icon">ℹ</span>
        <div className="alert-content">
          <strong>Informação:</strong> Esta é uma informação importante.
        </div>
      </div>
    </div>
  );
}

/* ========================================
   EXEMPLO 6: PÁGINA COMPLETA
   ======================================== */

export function ExemploPaginaCompleta() {
  return (
    <main>
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Bem-vindo ao sistema de escala de igreja</p>
      </div>

      {/* Seção de Estatísticas */}
      <section>
        <h2>Estatísticas</h2>
        <ExemploGrade />
      </section>

      {/* Seção de Conteúdo */}
      <div className="grid grid-2">
        <div>
          <h2>Formulário</h2>
          <ExemploForm />
        </div>
        <div>
          <h2>Alertas</h2>
          <ExemploAlerts />
        </div>
      </div>

      {/* Seção de Tabela */}
      <section>
        <h2>Últimas Atualizações</h2>
        <ExemploTabela />
      </section>
    </main>
  );
}

/* ========================================
   EXEMPLO 7: USANDO VARIÁVEIS CSS EM JSX
   ======================================== */

export function ExemploVariaveisCSS() {
  const estiloCustomizado = {
    backgroundColor: 'var(--color-bg-secondary)',
    borderLeft: '4px solid var(--color-accent-primary)',
    padding: 'var(--spacing-lg)',
    borderRadius: 'var(--radius-lg)',
  };

  return (
    <div style={estiloCustomizado}>
      <h3 style={{ color: 'var(--color-accent-primary)' }}>
        Usando Variáveis CSS em Inline Styles
      </h3>
      <p style={{ color: 'var(--color-text-secondary)' }}>
        As variáveis CSS funcionam também em estilos inline do React!
      </p>
    </div>
  );
}

/* ========================================
   EXEMPLO 8: ESTILOS RESPONSIVOS
   ======================================== */

export function ExemploResponsivo() {
  return (
    <div className="grid grid-3">
      <div className="card">
        <div className="card-body text-center">
          <h4>Mobile First</h4>
          <p className="text-muted">1 coluna no celular</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body text-center">
          <h4>Tablet</h4>
          <p className="text-muted">2-3 colunas no tablet</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body text-center">
          <h4>Desktop</h4>
          <p className="text-muted">3+ colunas em desktop</p>
        </div>
      </div>
    </div>
  );
}

/* ========================================
   EXEMPLO 9: COMBINAÇÕES DE CLASSES
   ======================================== */

export function ExemploCombinacoes() {
  return (
    <div className="space-y-4">
      {/* Flex com gap */}
      <div className="flex gap-lg">
        <button className="btn btn-secondary">Voltar</button>
        <button className="btn btn-primary">Próximo</button>
      </div>

      {/* Flex com space-between */}
      <div className="flex-between">
        <h3>Título</h3>
        <button className="btn btn-ghost">Mais opções</button>
      </div>

      {/* Flex centered */}
      <div className="flex-center" style={{ minHeight: '200px' }}>
        <div className="text-center">
          <p className="text-muted">Nenhum item encontrado</p>
        </div>
      </div>
    </div>
  );
}

/* ========================================
   GUIA RÁPIDO DE CLASSES
   ======================================== */

/*
  BOTÕES:
  - .btn .btn-primary ✓ Gradiente neon
  - .btn .btn-secondary ✓ Contorno
  - .btn .btn-success ✓ Verde
  - .btn .btn-danger ✓ Vermelho
  - .btn .btn-ghost ✓ Transparente
  - .btn-sm, .btn-lg, .btn-full

  CARDS:
  - .card ✓ Container estilizado
  - .card-header ✓ Topo com borda
  - .card-body ✓ Conteúdo
  - .card-footer ✓ Rodapé com botões

  INPUTS:
  - .input ✓ Campo de texto
  - .textarea ✓ Campo grande
  - .select ✓ Seleção
  - .form-group ✓ Container do campo
  - .form-error, .form-success ✓ Mensagens

  TABELAS:
  - .table ✓ Tabela estilizada

  BADGES:
  - .badge .badge-primary
  - .badge .badge-success
  - .badge .badge-error
  - .badge .badge-warning

  ALERTS:
  - .alert .alert-success/error/warning/info

  GRID & FLEX:
  - .grid .grid-2/.grid-3/.grid-4
  - .flex .gap-{sm/md/lg/xl}
  - .flex-between
  - .flex-center

  UTILITIES:
  - .text-center, .text-right
  - .text-muted, .text-accent
  - .container
  - .section
  - .opacity-50, .opacity-75
  - .hidden
  - .sr-only
*/
