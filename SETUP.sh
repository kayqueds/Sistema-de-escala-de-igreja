#!/usr/bin/env bash

# 🎵 LOUVA - Sistema de Escala de Louvor
# Guia de Instalação e Configuração

echo "╔════════════════════════════════════════════════════════════╗"
echo "║     🎵 LOUVA - Sistema de Escala de Louvor               ║"
echo "║          Guia de Instalação e Configuração              ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""
echo "Este script ajudará você a configurar o projeto."
echo ""

# Verificar Node.js
echo "✓ Verificando Node.js..."
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado!"
    echo "   Baixe em: https://nodejs.org/"
    exit 1
fi

echo "✓ Node.js encontrado: $(node --version)"
echo "✓ npm encontrado: $(npm --version)"
echo ""

# Navegue para a pasta frontend
echo "📁 Entrando na pasta frontend..."
cd frontend || exit

echo ""
echo "📦 Instalando dependências..."
echo "   Isso pode levar alguns minutos..."
echo ""

npm install

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ Erro ao instalar dependências!"
    exit 1
fi

echo ""
echo "✅ Instalação concluída com sucesso!"
echo ""

echo "╔════════════════════════════════════════════════════════════╗"
echo "║                  🎉 PRONTO PARA USAR!                    ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

echo "🚀 Para iniciar o servidor de desenvolvimento, execute:"
echo ""
echo "   cd frontend"
echo "   npm run dev"
echo ""

echo "📖 Documentação disponível em:"
echo "   • PROJETO_README.md    - Visão geral do projeto"
echo "   • COMPONENTES.md       - Documentação de componentes"
echo "   • INICIO_RAPIDO.md     - Guia de início rápido"
echo ""

echo "📱 O servidor estará rodando em:"
echo "   http://localhost:5173"
echo ""

echo "🔨 Comandos disponíveis:"
echo "   npm run dev     - Iniciar servidor de desenvolvimento"
echo "   npm run build   - Build para produção"
echo "   npm run preview - Preview do build"
echo "   npm run lint    - Validar código"
echo ""

echo "💡 Dicas:"
echo "   • Use a pasta src/components/common/ para componentes reutilizáveis"
echo "   • Use src/pages/ para criar novas páginas"
echo "   • Edite src/styles/theme.css para customizar cores"
echo "   • Veja a estrutura em PROJETO_README.md"
echo ""

echo "✨ Divirta-se desenvolvendo! 🚀"
echo ""
