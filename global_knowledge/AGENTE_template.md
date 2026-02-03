# AGENTE.md - [Nome do Projeto]

## Metadata
- **Tipo**: [Landing Page | Aplicação Web]
- **Status**: [Discovery | Definition | Design | Architecture | Development | Polish]
- **Criado**: [Data]
- **Última Atualização**: [Data]

---

## 1. BRIEFING

### 1.1 Objetivo & Contexto
**Objetivo Principal:**
> [Descreva o objetivo principal do projeto]

**Público-Alvo:**
> [Quem é o público deste projeto?]

### 1.2 Análise de Validação
*(Framework de Validação de Ideias)*

#### A. Gambiarra Atual
> [Como o público resolve esse problema hoje? Qual é o "Excel" ou processo manual?]

#### B. Hate but Tolerate
> [O que o público detesta nas soluções atuais, mas tolera por falta de alternativa?]

#### C. Customização Manual
> [Como o público adapta ferramentas genéricas para atender essa necessidade específica?]

### 1.3 Proposta de Valor
> [Resumo da proposta de valor única]

### 1.4 Vibe & Tom
**Tom de Voz:**
> [Ex: Professional, Playful, Urgent, Minimalist]

**Direção Visual:**
> [Sugestões de estilo visual e moodboard conceitual]

---

## 2. PRD (Product Requirements Document)

### 2.1 Visão
> [Uma frase poderosa que resume o que estamos construindo]

### 2.2 Público-Alvo & Personas
[Descreva as personas detalhadas]

### 2.3 Métricas de Sucesso (KPIs)
- [Métrica 1: ex: Taxa de conversão > 5%]
- [Métrica 2]
- [Métrica 3]

### 2.4 Épicos & User Stories

#### Epic 1: [Nome do Épico]
**Descrição:** [O que este épico engloba]

**Stories:**
- **Story 1.1:** Como [persona], eu quero [ação], para que [benefício]
  - **Critérios de Aceitação (Gherkin):**
    - Dado [contexto]
    - Quando [ação]
    - Então [resultado esperado]

- **Story 1.2:** [Próxima story]
  - **Critérios de Aceitação:**
    - ...

#### Epic 2: [Nome do Épico]
**Descrição:** [O que este épico engloba]

**Stories:**
- **Story 2.1:** ...

---

## 3. COPYWRITING
*(Apenas para Landing Pages)*

### 3.1 Estratégia Visual (Image-First & IVaaS)

**Moodboard Conceitual:**
> [Descreva a "vibe": emoções, temperaturas, texturas]

**Estratégia de Imagens:**
> [Keywords para busca, regras de curadoria]

**Visual Narrative:**
> [Como as imagens contarão a história]

### 3.2 Headlines & Copy

#### Hero Section
- **Headline Principal:** [Texto]
- **Sub-headline:** [Texto]
- **CTA Primário:** [Texto do botão]

#### [Seção 2]
- **Headline:** [Texto]
- **Copy:** [Texto]
- **CTA:** [Texto]

### 3.3 Padrões de Composição UI

#### Hero Section
- Altura: 100vh obrigatório
- Background: [Vídeo / Imagem imersiva]
- Overlay: [Configuração de overlay]
- Header: Transparente com glassmorphism ao scroll

#### [Outras Seções]
- [Especificações de composição]

### 3.4 Estratégia de Animação
- **Scroll:** [Como elementos entram - Framer Motion / Locomotive Scroll]
- **Micro-interações:** [Hover effects - Sombra, Scale, Glow]
- **Parallax:** [Onde aplicar efeitos de profundidade]

---

## 4. INVENTÁRIO DE DATABASE

### 4.1 Configuração & Ambiente

**Ambiente Atual:**
- **Tipo:** [Local / Teste / Produção]
- **Provider:** [Supabase / PostgreSQL Local]
- **Database URL:** [URL do banco]

### 4.2 Tabelas

#### Tabela: `[nome_tabela]`

**Descrição:** [O que esta tabela armazena]
**Tipo:** [Core / Feature / Auxiliar]

**Colunas:**
| Nome | Tipo | Constraints | Default | Descrição |
|------|------|-------------|---------|-----------|
| id | bigint | PRIMARY KEY, AUTO INCREMENT | - | Identificador único |
| created_at | timestamptz | NOT NULL | now() | Data de criação |
| updated_at | timestamptz | NOT NULL | now() | Última atualização |
| [coluna] | [tipo] | [constraints] | [default] | [descrição] |

**Índices:**
| Nome | Colunas | Tipo | Justificativa |
|------|---------|------|---------------|
| idx_[nome]_[coluna] | [coluna] | btree | [Justificativa] |

**Foreign Keys:**
| Coluna Local | Tabela Referenciada | Coluna Referenciada | On Delete | On Update |
|--------------|---------------------|---------------------|-----------|-----------|
| [fk_coluna] | [tabela] | id | CASCADE | CASCADE |

**RLS (Row Level Security):**
- **Status:** [Habilitado / Desabilitado]
- **Políticas:**
  1. **Nome:** `[nome_politica]`
     - **Tipo:** SELECT / INSERT / UPDATE / DELETE
     - **Usando:** `auth.uid() = user_id`
     - **Descrição:** [O que esta política protege]

**Triggers:**
| Nome | Evento | Função | Descrição |
|------|--------|--------|-----------|
| [trigger_name] | BEFORE INSERT | [function_name] | [O que faz] |

---

### 4.3 Enums & Types

#### Enum: `[enum_name]`
- **Valores:** `['valor1', 'valor2', 'valor3']`
- **Usado em:** `[tabela].[coluna]`
- **Descrição:** [O que representa]

---

### 4.4 Funções & Stored Procedures

#### Função: `[function_name]()`
- **Retorna:** [tipo de retorno]
- **Descrição:** [O que faz]
- **Usado por:** [Triggers / Aplicação / RLS]

```sql
CREATE OR REPLACE FUNCTION [function_name]()
RETURNS [tipo] AS $$
BEGIN
  -- [lógica]
END;
$$ LANGUAGE plpgsql;
```

---

### 4.5 Arquitetura de Pastas (Feature-Based)

```
/
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
│   ├── [feature-2]/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services/
├── components/
│   └── ui/          # Apenas componentes 'dumb' (shadcn)
├── lib/             # Utilitários genéricos
└── app/             # Next.js App Router
```

---

### 4.6 Inventário de Componentes UI

**Primitivos (shadcn/ui):**
- [ ] Button
- [ ] Input
- [ ] Card
- [ ] [outros]

**Compostos (Custom):**
- [ ] HeroSection
- [ ] [outros componentes compostos]

---

## 5. TELAS / SEÇÕES (PRPs)

### 5.1 [Nome da Tela/Seção]

#### Objetivo
> [Qual o propósito principal desta tela/seção?]

#### Contexto
> [Quais dados ou regras de negócio são necessários?]

#### Layout
[Descreva a estrutura visual completa: componentes, hierarquia, responsividade]

#### Estados
- **Normal:** [Descrição]
- **Hover:** [Descrição]
- **Focus:** [Descrição]
- **Loading:** [Descrição]
- **Erro:** [Descrição]
- **Sucesso:** [Descrição]
- **Vazio:** [Descrição]

#### Interações
[Animações, transições e feedbacks visuais]

#### Validações
[Critérios objetivos para considerar a tela "pronta"]

#### Dependências
- **Bibliotecas:** [Lista]
- **Componentes (shadcn/ui):** [Lista]
- **Ícones (Lucide):** [Lista]

---

### 5.2 [Próxima Tela/Seção]
[Repetir estrutura acima]

---

## 6. CHANGELOG

| Data | Prompt | Ação | Resumo |
|------|--------|------|--------|
| [Data] | prompt-01 | Criação | Briefing e PRD inicial |
| [Data] | prompt-02 | Atualização | Design System e Copywriting |
| [Data] | prompt-03 | Atualização | Arquitetura e Database |
| [Data] | prompt-05 | Adição | Tela/Seção [nome] |
