```
        _ _              ___          _          ___                  
 /\   /(_) |__   ___    / __\___   __| | ___    / __\ __ _____      __
 \ \ / / | '_ \ / _ \  / /  / _ \ / _` |/ _ \  / / | '__/ _ \ \ /\ / /
  \ V /| | |_) |  __/ / /__| (_) | (_| |  __/ / /__| | |  __/\ V  V / 
   \_/ |_|_.__/ \___| \____/\___/ \__,_|\___| \____/_|  \___| \_/\_/  
```

# 🚀 Vibe Code Crew | StarIAup

[🇧🇷 Português](readme.md) | [🇺🇸 English](readme.en.md)

**Desenvolvimento de Software Guiado por IA, Estruturado por Humanos.**

Este repositório contém a **Crew de Agentes Especialistas** da metodologia Vibe Code, desenvolvida pela StarIAup. Uma abordagem revolucionária que combina o poder da IA generativa com processos rigorosos de engenharia de software para **minimizar custos de tokens, eliminar retrabalho e entregar produtos de qualidade**.

---

## 🎯 O Problema que Resolvemos

**Vibe Coding tradicional** é caro e caótico:
- Milhares de tokens desperdiçados em reexecuções
- Falta de hierarquia técnica gera código inconsistente
- Documentação desatualizada causa alucinações da IA
- Ausência de QA automatizado resulta em bugs em produção

**Nossa Solução:** Uma crew de 10 agentes especializados com hierarquia clara, documentação como "Single Source of Truth" e validação automatizada em cada etapa.

---

## 👥 A Crew

### Camada de Estratégia
- **01 - Gabriel (Orchestrator):** Inicia projetos, configura repositórios e prepara o terreno.
- **02 - Ricardo (PM):** Define o produto. Cria PRDs, Épicos e User Stories com critérios de aceite.
- **03 - Sofia (CTO):** Autoridade técnica suprema. Define arquitetura, inventário de dados e RLS.

### Camada de Design
- **04 - Beatriz (Brand):** Guardiã da identidade visual. Cria Design System e Brand Book.
- **05 - Pamela (Copy):** Voz do produto. Define tom, microcopy e mensagens.
- **06 - Amanda (UI/UX):** Tradutora visual. Cria specs de frontend e workflows de página.

### Camada de Execução
- **07 - Helena (Prompt Engineer):** Maestra da IA. Transforma requisitos em PRPs cirúrgicos.
- **08 - Marcos (Backend):** Executor do servidor. Implementa migrations, APIs e segurança.
- **09 - Claudio (Full-Stack):** Integrador. Cria componentes React e conecta com backend.

### Camada de Qualidade
- **10 - Paulo (QA Auto):** Advogado do Diabo automatizado. Valida com Browser Testing (Playwright).

---

## 📁 Estrutura do Repositório

```
agentes/
├── 01 - Gabriel/
│   ├── system_prompt.md       # Identidade e missão
│   ├── steps.yaml             # Workflow de execução
│   ├── vibe_manifesto.md      # Personalidade e monólogo interno
│   ├── knowledge/             # Base de conhecimento específica
│   └── templates/             # Templates de artefatos
├── 02 - Ricardo/
│   ├── templates/
│   │   ├── epico.md           # Template de Épico
│   │   ├── user_story.md      # Template de User Story
│   │   └── prd_master.md      # Template de PRD
│   └── ...
├── 03 - Sofia/
│   ├── templates/
│   │   ├── inventario_database.md    # Inventário de DB
│   │   └── tech_architecture.md      # Arquitetura Técnica
│   └── ...
├── ...
├── 10 - Paulo/
│   ├── knowledge/
│   │   ├── browser_testing_patterns.md
│   │   └── acceptance_criteria_mapping.md
│   └── templates/
│       └── automated_test_spec.md
└── knowledge/                 # Conhecimento global compartilhado
    ├── Documentação Completa - Metodologia Vibe Code | StarIAup.md
    ├── Princípios de Arquitetura Para Vibe Coding.md
    ├── bmad_protocol.md
    └── ...
```

---

## 🔄 Fluxo de Trabalho

```
PO (Ideia) → Gabriel (Briefing) → Ricardo (PRD + Stories)
                                        ↓
                    ┌───────────────────┼───────────────────┐
                    ↓                   ↓                   ↓
                Sofia (Arch)        Beatriz (Brand)    Pamela (Copy)
                    ↓                   ↓                   ↓
                    └───────────────────┼───────────────────┘
                                        ↓
                                  Amanda (UI/UX)
                                        ↓
                                  Helena (PRPs)
                                        ↓
                            ┌───────────┴───────────┐
                            ↓                       ↓
                      Marcos (Backend)        Claudio (Frontend)
                            ↓                       ↓
                            └───────────┬───────────┘
                                        ↓
                                  Paulo (QA Auto)
                                        ↓
                                    Deploy ✅
```

---

## 🛠 Como Usar

### 1. Iniciar um Projeto
Invoque **Gabriel** com sua ideia. Ele criará o `project_brief.md`.

### 2. Definir Produto
**Ricardo** transforma o briefing em PRD, Épicos e User Stories.

### 3. Arquitetura e Design
**Sofia** define a estrutura técnica. **Beatriz** e **Pamela** definem identidade. **Amanda** projeta as telas.

### 4. Execução
**Helena** cria os PRPs. **Marcos** e **Claudio** implementam seguindo estritamente a arquitetura da Sofia.

### 5. Validação
**Paulo** executa testes automatizados contra os critérios de aceite das User Stories.

---

## 🎓 Princípios Fundamentais

1. **Hierarquia Técnica:** Sofia é a autoridade. Marcos e Claudio obedecem sem desvios.
2. **Single Source of Truth:** O Inventário de Database é a única fonte de verdade sobre dados.
3. **Documentation as Code:** Documentação desatualizada = código quebrado.
4. **QA Driven:** Critérios de aceite são definidos ANTES do código ser escrito.
5. **Vibe Manifesto:** Cada agente tem personalidade e executa monólogo interno antes de agir.

---

## 📚 Documentação Completa

Consulte `knowledge/Documentação Completa - Metodologia Vibe Code | StarIAup.md` para:
- Glossário de termos
- Responsabilidades detalhadas de cada agente
- Fluxogramas visuais
- Comparação com desenvolvimento tradicional

---

## 🙏 Créditos

Esta metodologia não nasceu do zero. Ela é o resultado de **consumir, adaptar e versionar** o trabalho de gigantes que vieram antes:

### Influências Fundamentais (~65-78% da estrutura)

**[Brian (BMAD Method)](https://github.com/bmadcode)**  
O conceito de **construção agentica** com IA vêm diretamente do BMAD. Versionar o desenvolvimento por etapas com "personas" específicas seus próprios passos de execução é a sustentação da metodologia.

**[Deborah Folloni (DebGPT)](https://x.com/dfolloni)**  
A Deborah, com todo seu conteudo gratuito no youtube, foi a responsável indireta por mais da metade dos princípios fundamentais da metodologia. A forma como cada arquivo deve ser estruturado, os conceitos KISS, DRY, SOLID, entre outros, foram aprendidos com seu conteúdo.

### Nossa Contribuição

Extraímos e adaptamos os principais conceitos das metodologias de DebGPT e BMAD para criar uma metodologia que seja viável para o Vibe Coding. De forma objetiva, traduzimos o que, pra nós, fazia mais sentido e implementamos:

- Hierarquia técnica rígida (Sofia como autoridade)
- Especialização de QA Auto (Paulo com Browser Testing)
- Templates estruturados para Épicos e User Stories
- Fluxo de validação distribuída (dependency_validation)
- Step Zero visível (personificação forçada)

**Resultado:** Uma metodologia que respeita suas raízes, mas evolui para resolver problemas reais de custo e qualidade no Vibe Coding.

---

## 📄 Licença

Viva o **open source** e o conhecimento compartilhado. Aceitamos menções honrosas, mas cá pra nós, 
o que importa é aprender e evoluir juntos. **Use livremente.**

Os arquivos podem sofrer alterações e evoluções constantes.

---

**Desenvolvido com 🧠 por StarIAup | 2026**