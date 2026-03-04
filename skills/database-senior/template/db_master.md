---
Documento: DB-MASTER
Parte de: .context/MASTER.md
Versão: 1.0.0
Atualizado em: 2026-02-23
---

# 4. INVENTÁRIO DE DATABASE

## 4.1 Ambiente & Setup
- **Provider:** [Supabase / PostgreSQL]
- **Status RLS:** [Habilitado]

## 4.2 Esquema de Dados (Domínios)
1. **[Core]**: [Links para shards de tabelas core]
2. **[Features]**: [Links para shards específicos]

## 4.3 Tabela Exemplo: `users`
| Nome | Tipo | Constraints | Default |
|---|---|---|---|
| id | uuid | PRIMARY KEY | uuid_generate_v4() |
| email | text | UNIQUE | - |
