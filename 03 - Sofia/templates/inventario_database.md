# Inventário de Database - [Nome do Projeto]

Este documento mapeia todas as tabelas do schema com prefixo `[prefixo_]`, detalhando colunas, tipos, constraints e relacionamentos.
*(Atualizado em: [Data] às [Hora])*

---

> [!IMPORTANT]  
> **Status de Segurança:** Todas as tabelas listadas possuem **RLS (Row Level Security)** habilitado.
> - `admin`: Acesso total
> - `analyst`: Escopo de time/organização
> - `client`: Escopo de dono (apenas seus dados)

---

## 1. Core Tables (Estruturais)

### [nome_da_tabela]
**Descrição:** [Breve descrição da função da tabela]
**Related User Stories:** [US-XXX, US-YYY]

**Colunas:**
| Nome | Tipo | Nullable | Default | FK | Observações |
|------|------|----------|---------|-----|-------------|
| id | uuid | NO | gen_random_uuid() | - | Primary key |
| [coluna] | [tipo] | [YES/NO] | [valor] | [tabela(coluna) [ação]] | [nota] |

**Frontend Usage (Payloads):**
- `[Componente.tsx]`: [OPERAÇÃO] ([colunas usadas])
  - [Descrição do uso]
  - [Regras de negócio aplicadas]

**Storage Bucket (se aplicável):**
- Nome: `[nome-do-bucket]`
- Public: [true/false]
- Size limit: [tamanho]
- Allowed types: [tipos permitidos]

**Relacionamentos de Saída (Esta tabela referencia):**
- `[coluna]` -> `[tabela_destino.coluna]` ([ação: CASCADE/SET NULL/NO ACTION])

**Relacionamentos de Entrada (Referenciado por):**
- `[tabela_origem].[coluna]` (ação)

**Índices:**
- `idx_[nome]` on `[coluna(s)]` - [Razão do índice]

**Triggers:**
- `[nome_trigger]`: [Descrição da automação]

---

## 2. Feature Tables (Funcionalidades)

[Repetir estrutura acima para cada grupo de tabelas]

---

## 3. Enums e Types Customizados

### [nome_do_enum]
**Valores:** `'valor1'`, `'valor2'`, `'valor3'`
**Usado em:** `[tabela.coluna]`
**Descrição:** [Significado de cada valor]

---

## 4. Políticas RLS

### [nome_da_tabela]

**Policy: `[nome_policy]`**
- **Operação:** [SELECT/INSERT/UPDATE/DELETE]
- **Role:** [admin/analyst/client]
- **Condição:** `[expressão SQL]`
- **Descrição:** [O que essa policy permite/bloqueia]

---

## 5. Performance Optimization

**Índices Críticos Criados:**
- `[tabela]([coluna])`: Otimiza JOINs em [contexto]
- `[tabela]([coluna1], [coluna2])`: Otimiza queries com filtros combinados

**Observações de Performance:**
- [Notas sobre queries lentas evitadas]
- [Recomendações de uso]

---

## 6. Environment Mapping (Migration-Ready)

**Local → Test → Production:**
| Tabela | Local DB | Test DB | Prod DB | Migration Script |
|--------|----------|---------|---------|------------------|
| [nome_tabela] | `dev_[prefixo]_[nome]` | `test_[prefixo]_[nome]` | `prod_[prefixo]_[nome]` | `migrations/[timestamp]_[nome].sql` |

**Migration Checklist:**
- [ ] Todas as tabelas têm script de migração
- [ ] RLS policies estão no script
- [ ] Índices estão documentados
- [ ] Dados de seed estão preparados (se aplicável)

---

*Gerado via [Ferramenta] - [Data e Hora]*
