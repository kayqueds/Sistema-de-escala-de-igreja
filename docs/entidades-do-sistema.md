# Entidades do Sistema

Este documento descreve as entidades principais do sistema de gerenciamento de escala de louvor da igreja.

---

## 1. Membro

Representa um membro da equipe de louvor.

**Campos:**
- **id**: string (identificador único do membro)
- **nome**: string (nome completo do membro)
- **tipo**: string ("membro" ou "lider") — define permissões no sistema
- **funcoes**: array de strings (ex: ["teclado", "vocal_ministro"])
- **ativo**: boolean (indica se o membro está ativo)

**Exemplo:**
```json
{
  "id": "1",
  "nome": "Luis Henrique",
  "tipo": "membro",
  "funcoes": ["teclado"],
  "ativo": true
}


2. Culto

Representa um culto ou evento da igreja.

Campos:

id: string (identificador único do culto)
data: string (ex: "2026-04-26")
tipo: string (ex: "domingo", "quarta", "vigilia", "especial")

Exemplo:

{
  "id": "1",
  "data": "2026-04-26",
  "tipo": "domingo"
}


3. Disponibilidade

Representa a disponibilidade de um membro para um determinado mês.

Campos:

id: string (identificador único)
membroId: string (referência ao membro)
mes: number (1 a 12)
ano: number
diasDisponiveis: array de números (ex: [1, 5, 10])
diasIndisponiveis: array de números (ex: [2, 6])
enviouDisponibilidade: boolean

Exemplo:


{
  "id": "1",
  "membroId": "1",
  "mes": 4,
  "ano": 2026,
  "diasDisponiveis": [6, 13, 20],
  "diasIndisponiveis": [10, 27],
  "enviouDisponibilidade": true
}


4. Escala

Representa a escala de um culto.

Campos:

id: string (identificador único)
cultoId: string (referência ao culto)
status: string ("rascunho" ou "finalizada")
membrosEscalados: array de objetos contendo:
membroId: string
funcao: string (ex: "teclado", "vocal_back")

Exemplo:


{
  "id": "1",
  "cultoId": "1",
  "status": "rascunho",
  "membrosEscalados": [
    { "membroId": "1", "funcao": "teclado" },
    { "membroId": "3", "funcao": "baixo" }
  ]
}



Relacionamentos
Um Membro pode ter várias Disponibilidades
Um Culto possui uma Escala
Uma Escala possui vários Membros
Uma Disponibilidade pertence a um Membro
Uma Escala pertence a um Culto
Regras do Sistema
Apenas usuários do tipo lider podem:
cadastrar membros
cadastrar cultos
montar escalas
Usuários do tipo membro podem:
enviar disponibilidade
O sistema deve:
mostrar apenas membros disponíveis na montagem da escala
permitir escolha manual do líder (sem escala automática)
exibir quais membros não enviaram disponibilidade
Cada membro deve ter apenas uma disponibilidade por mês
Notas
Os dados estão temporariamente armazenados em:
frontend/src/data/membros.js
Futuramente, todas as entidades serão integradas com Firebase
Os IDs serão gerados automaticamente pelo Firebase


