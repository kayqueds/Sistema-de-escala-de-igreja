# 🎵 LOUVA - Sistema de Escala de Louvor
# Guia de Instalação e Configuração (Windows)

Write-Host ""
Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║     🎵 LOUVA - Sistema de Escala de Louvor               ║" -ForegroundColor Cyan
Write-Host "║          Guia de Instalação e Configuração              ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""
Write-Host "Este script ajudará você a configurar o projeto." -ForegroundColor White
Write-Host ""

# Verificar Node.js
Write-Host "✓ Verificando Node.js..." -ForegroundColor Green
$nodeCheck = node --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Node.js não está instalado!" -ForegroundColor Red
    Write-Host "   Baixe em: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

Write-Host "✓ Node.js encontrado: $nodeCheck" -ForegroundColor Green
$npmVersion = npm --version
Write-Host "✓ npm encontrado: $npmVersion" -ForegroundColor Green
Write-Host ""

# Verificar se está na pasta certa
if (!(Test-Path ".\frontend\package.json")) {
    Write-Host "⚠️  Não encontrei a pasta frontend!" -ForegroundColor Yellow
    Write-Host "   Certifique-se de estar na pasta do projeto." -ForegroundColor Yellow
    exit 1
}

# Navegue para a pasta frontend
Write-Host "📁 Entrando na pasta frontend..." -ForegroundColor Cyan
Set-Location .\frontend

Write-Host ""
Write-Host "📦 Instalando dependências..." -ForegroundColor Cyan
Write-Host "   Isso pode levar alguns minutos..." -ForegroundColor Gray
Write-Host ""

npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ Erro ao instalar dependências!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ Instalação concluída com sucesso!" -ForegroundColor Green
Write-Host ""

Write-Host "╔════════════════════════════════════════════════════════════╗" -ForegroundColor Green
Write-Host "║                  🎉 PRONTO PARA USAR!                    ║" -ForegroundColor Green
Write-Host "╚════════════════════════════════════════════════════════════╝" -ForegroundColor Green
Write-Host ""

Write-Host "🚀 Para iniciar o servidor de desenvolvimento, execute:" -ForegroundColor Yellow
Write-Host ""
Write-Host "   cd frontend" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor White
Write-Host ""

Write-Host "📖 Documentação disponível em:" -ForegroundColor Cyan
Write-Host "   • PROJETO_README.md    - Visão geral do projeto" -ForegroundColor Gray
Write-Host "   • COMPONENTES.md       - Documentação de componentes" -ForegroundColor Gray
Write-Host "   • INICIO_RAPIDO.md     - Guia de início rápido" -ForegroundColor Gray
Write-Host ""

Write-Host "📱 O servidor estará rodando em:" -ForegroundColor Cyan
Write-Host "   http://localhost:5173" -ForegroundColor Yellow
Write-Host ""

Write-Host "🔨 Comandos disponíveis:" -ForegroundColor Cyan
Write-Host "   npm run dev     - Iniciar servidor de desenvolvimento" -ForegroundColor Gray
Write-Host "   npm run build   - Build para produção" -ForegroundColor Gray
Write-Host "   npm run preview - Preview do build" -ForegroundColor Gray
Write-Host "   npm run lint    - Validar código" -ForegroundColor Gray
Write-Host ""

Write-Host "💡 Dicas:" -ForegroundColor Cyan
Write-Host "   • Use a pasta src/components/common/ para componentes reutilizáveis" -ForegroundColor Gray
Write-Host "   • Use src/pages/ para criar novas páginas" -ForegroundColor Gray
Write-Host "   • Edite src/styles/theme.css para customizar cores" -ForegroundColor Gray
Write-Host "   • Veja a estrutura em PROJETO_README.md" -ForegroundColor Gray
Write-Host ""

Write-Host "✨ Divirta-se desenvolvendo! 🚀" -ForegroundColor Green
Write-Host ""
