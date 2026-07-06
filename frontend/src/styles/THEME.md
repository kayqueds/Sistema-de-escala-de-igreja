# 🎨 Guia de Identidade Visual Global

## Visão Geral

Este sistema de estilos implementa uma identidade visual **minimalista, moderna e tecnológica** com toque neon suave. Todos os componentes estão preparados para oferecer uma experiência visual coerente e profissional.

---

## 📦 Arquivos de Estilos

- **`theme.css`** - Variáveis CSS globais (cores, tipografia, espaçamento, etc.)
- **`components.css`** - Componentes base estilizados (botões, cards, inputs, tabelas, etc.)
- **`App.css`** - Estilos específicos do layout principal

---

## 🎨 Paleta de Cores

### Fundos
```css
--color-bg-primary: #0F172A      /* Fundo principal (muito escuro) */
--color-bg-secondary: #1E293B    /* Cards e containers */
--color-bg-tertiary: #334155     /* Elementos interativos */
```

### Texto
```css
--color-text-primary: #E2E8F0    /* Texto principal */
--color-text-secondary: #CBD5E1  /* Texto secundário */
--color-text-tertiary: #94A3B8   /* Texto desabilitado/hints */
```

### Acentos (Neon Suave)
```css
--color-accent-primary: #22D3EE  /* Cyan - Principal */
--color-accent-secondary: #0EA5E9 /* Azul - Secundário */
--color-accent-tertiary: #06B6D4 /* Turquesa - Terciário */
```

### Estados
```css
--color-success: #22C55E  /* Verde - Sucesso */
--color-error: #EF4444   /* Vermelho - Erro */
--color-warning: #F59E0B /* Laranja - Aviso */
--color-info: #3B82F6    /* Azul - Informação */
```

### Uso no CSS
```css
/* Usar as variáveis assim */
background-color: var(--color-bg-secondary);
color: var(--color-text-primary);
border: 2px solid var(--color-accent-primary);
```

---

## 🔤 Tipografia

### Fontes
- **Principal (corpo de texto)**: Inter
- **Headings/Títulos**: Montserrat
- **Monospace (código)**: Fira Code

### Tamanhos
```css
--font-size-xs: 0.75rem    /* 12px */
--font-size-sm: 0.875rem   /* 14px */
--font-size-base: 1rem     /* 16px */
--font-size-lg: 1.125rem   /* 18px */
--font-size-xl: 1.25rem    /* 20px */
--font-size-2xl: 1.5rem    /* 24px */
--font-size-3xl: 1.875rem  /* 30px */
--font-size-4xl: 2.25rem   /* 36px */
```

### Pesos
```css
--font-weight-light: 300
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
```

### Exemplo
```jsx
<h1>Título Principal</h1>  {/* Montserrat, semibold */}
<p>Texto do corpo</p>      {/* Inter, regular */}
```

---

## 🧱 Espaçamento

```css
--spacing-xs: 0.25rem   /* 4px */
--spacing-sm: 0.5rem    /* 8px */
--spacing-md: 1rem      /* 16px */
--spacing-lg: 1.5rem    /* 24px */
--spacing-xl: 2rem      /* 32px */
--spacing-2xl: 2.5rem   /* 40px */
--spacing-3xl: 3rem     /* 48px */
```

Usado para `padding`, `margin`, `gap`, etc.

---

## 🔲 Border Radius

```css
--radius-sm: 4px
--radius-md: 6px
--radius-lg: 8px       /* Padrão para botões/cards */
--radius-xl: 12px
--radius-2xl: 16px
--radius-full: 9999px  /* Totalmente arredondado */
```

---

## ✨ Sombras

### Sombras Padrão
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
--shadow-md: 0 4px 6px ... (padrão para cards)
--shadow-lg: 0 10px 15px ... (ao passar mouse)
--shadow-xl: 0 20px 25px ... (modal/dropdown)
```

### Sombras com Neon
```css
--shadow-neon-cyan: 0 0 20px rgba(34, 211, 238, 0.15), ...
--shadow-neon-blue: 0 0 20px rgba(14, 165, 233, 0.15), ...
```

---

## 🔘 Componentes

### Botões

#### Primary (Destaque Principal)
```jsx
<button class="btn btn-primary">Confirmar</button>
```
- Gradiente cyan → azul
- Sombra neon ao hover
- Movimento: translateY(-2px)

#### Secondary (Contorno)
```jsx
<button class="btn btn-secondary">Cancelar</button>
```
- Fundo escuro com borda azul
- Muda para azul claro ao hover

#### Success
```jsx
<button class="btn btn-success">Salvar</button>
```

#### Danger
```jsx
<button class="btn btn-danger">Deletar</button>
```

#### Ghost (Transparent)
```jsx
<button class="btn btn-ghost">Mais informações</button>
```

#### Tamanhos
```jsx
<button class="btn btn-primary btn-sm">Pequeno</button>
<button class="btn btn-primary">Padrão</button>
<button class="btn btn-primary btn-lg">Grande</button>
<button class="btn btn-primary btn-full">100% de largura</button>
```

---

### Cards

```jsx
<div class="card">
  <div class="card-header">
    <h3>Título do Card</h3>
  </div>
  <div class="card-body">
    Conteúdo aqui
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Ação</button>
  </div>
</div>
```

**Características:**
- Fundo escuro secundário
- Borda sutil com hover
- Animação: translateY(-2px) ao passar mouse
- Sombra neon ao hover

---

### Inputs & Textareas

```jsx
<div class="form-group">
  <label>Email</label>
  <input type="email" class="input" placeholder="seu@email.com" />
</div>

<div class="form-group">
  <label>Mensagem</label>
  <textarea class="textarea" placeholder="Sua mensagem..."></textarea>
</div>

<div class="form-group">
  <label>Categoria</label>
  <select class="select">
    <option>Selecione...</option>
  </select>
</div>
```

**Estados:**
```jsx
<!-- Sucesso -->
<div class="form-group">
  <input class="input" />
  <span class="form-success">✓ Validado com sucesso</span>
</div>

<!-- Erro -->
<div class="form-group error">
  <input class="input" />
  <span class="form-error">✗ Campo obrigatório</span>
</div>
```

---

### Tabelas

```jsx
<table class="table">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Email</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>João Silva</td>
      <td>joao@email.com</td>
      <td><span class="badge badge-success">Ativo</span></td>
    </tr>
  </tbody>
</table>
```

**Características:**
- Fundo escuro
- Header destacado com borda neon
- Linhas com hover sutil
- Alinhamento automático

---

### Badges

```jsx
<span class="badge badge-primary">Novo</span>
<span class="badge badge-success">Aprovado</span>
<span class="badge badge-error">Rejeitado</span>
<span class="badge badge-warning">Pendente</span>
<span class="badge badge-info">Info</span>
```

---

### Alerts

```jsx
<div class="alert alert-success">
  <span class="alert-icon">✓</span>
  <div class="alert-content">
    <strong>Sucesso!</strong>
    Operação realizada com sucesso.
  </div>
</div>

<div class="alert alert-error">
  <span class="alert-icon">✕</span>
  <div class="alert-content">
    <strong>Erro!</strong>
    Ocorreu um erro na operação.
  </div>
</div>
```

---

## 📐 Layout & Grid

### Container
```jsx
<div class="container">
  {/* Conteúdo limitado a 1200px */}
</div>
```

### Grid Responsivo
```jsx
<div class="grid grid-2">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
</div>

<!-- Opções: grid-2, grid-3, grid-4 -->
```

### Flexbox Utilities
```jsx
<div class="flex gap-lg">
  <button>Item 1</button>
  <button>Item 2</button>
</div>

<div class="flex-between">
  <span>Esquerda</span>
  <span>Direita</span>
</div>

<div class="flex-center">
  {/* Centralizado horizontal e vertical */}
</div>
```

---

## ⏱️ Transições

```css
--transition-fast: 150ms ease-in-out    /* Hover rápido */
--transition-normal: 250ms ease-in-out  /* Padrão */
--transition-slow: 350ms ease-in-out    /* Modais/animações */
```

Exemplo:
```css
transition: all var(--transition-normal);
```

---

## 🎬 Animações Disponíveis

```css
@keyframes fadeIn      /* Desvanecimento */
@keyframes slideInUp   /* Desliza de baixo */
@keyframes slideInDown /* Desliza de cima */
@keyframes slideInLeft /* Desliza da esquerda */
@keyframes slideInRight /* Desliza da direita */
@keyframes glow        /* Efeito de brilho */
@keyframes pulse       /* Pulsação neon */
```

Uso:
```css
animation: slideInUp var(--transition-normal);
```

---

## 📱 Responsive Design

### Breakpoints
```css
--breakpoint-xs: 320px
--breakpoint-sm: 640px
--breakpoint-md: 768px   /* Tablet */
--breakpoint-lg: 1024px  /* Desktop */
--breakpoint-xl: 1280px
--breakpoint-2xl: 1536px
```

Exemplo:
```css
@media (max-width: 768px) {
  main {
    padding: var(--spacing-2xl) var(--spacing-md);
  }
}
```

---

## 💡 Boas Práticas

### ✅ FAÇA

1. **Use variáveis CSS**
   ```css
   background-color: var(--color-bg-secondary);
   ```

2. **Mantenha espaçamento consistente**
   ```css
   padding: var(--spacing-lg);
   gap: var(--spacing-md);
   ```

3. **Use sombras para profundidade**
   ```css
   box-shadow: var(--shadow-md);
   ```

4. **Transições suaves**
   ```css
   transition: all var(--transition-normal);
   ```

5. **Respeite o neon suave**
   - Use cores neon em destaques (botões, hover)
   - Não exagere na quantidade de neon
   - Combine com áreas escuras para contraste

### ❌ NÃO FAÇA

1. **Usar cores hardcoded** ❌
   ```css
   background-color: #22D3EE; /* Errado */
   ```

2. **Misturar temas** ❌
   ```css
   color: #fff; /* Errado - use var(--color-text-primary) */
   ```

3. **Adicionar muita saturação neon** ❌
   ```css
   box-shadow: 0 0 100px #22D3EE; /* Muito! */
   ```

4. **Ignorar responsividade** ❌
   ```css
   width: 1200px; /* Use max-width */
   ```

---

## 🚀 Exemplo Completo de Página

```jsx
import './styles/theme.css';
import './styles/components.css';
import './App.css';

export function MinhaPage() {
  return (
    <main>
      <div class="page-header">
        <h1>Bem-vindo</h1>
        <p>Descrição da página</p>
      </div>

      <div class="grid grid-2">
        <div class="card">
          <div class="card-header">
            <h3>Seção 1</h3>
          </div>
          <div class="card-body">
            <p>Conteúdo aqui</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-primary">Ação</button>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3>Seção 2</h3>
          </div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label>Nome</label>
                <input class="input" placeholder="Seu nome" />
              </div>
              <button class="btn btn-primary btn-full">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>

      <section>
        <h2>Tabela de Dados</h2>
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Item A</td>
              <td>
                <span class="badge badge-success">Ativo</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}
```

---

## 📚 Recursos Adicionais

- **Espaçamento**: Use múltiplos de `var(--spacing-md)` (16px)
- **Raio de borda**: Botões/cards usam `var(--radius-lg)` (8px)
- **Fonte principal**: Inter para todo o corpo de texto
- **Destaque visual**: Use `var(--color-accent-primary)` para elementos interativos

---

**Última atualização:** Abril de 2026
**Versão:** 1.0.0
