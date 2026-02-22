# Índice da Base de Conhecimento Global

> **⚠️ IMPORTANTE**: Este arquivo é uma versão human-readable do índice.  
> **Para agentes IA**: Use [`INDEX.yaml`](./INDEX.yaml) como fonte canônica e mandatória de leitura.

Este índice organiza os mais de 2500 arquivos da base de conhecimento em categorias lógicas para facilitar a navegação por agentes IA.

## Como Usar (Para Agentes IA)

1. **Leia o `INDEX.yaml`** - Ele contém o mapeamento completo de roles → arquivos mandatórios
2. **Identifique seu role** - Cada prompt define um role (pm, designer, developer, etc.)
3. **Leia TODOS os arquivos listados** - Não há leitura opcional. Se está no YAML para seu role, é obrigatório.
4. **Respeite o `read_order`** - Alguns arquivos têm dependências e devem ser lidos em ordem.

---

## 🏗 1. Fundamentos & Metodologia
*Princípios core que regem toda a construção do projeto.*

*   [Princípios de Arquitetura Para Vibe Coding](Princípios de Arquitetura Para Vibe Coding.md) - **Obrigatório para dev.**
*   [Framework de Validação de Ideias](Framework de Validação de Ideias.md) - Discovery inicial.
*   [PRD Master](prd_master.md) - Template de especificação de produto.
*   [User Story Template](user_story.md) - Padrão para histórias de usuário.
*   [Épico Template](epico.md) - Padrão para grandes áreas funcionais.
*   [Clean Code](clean_code.md) - Guia rápido de escrita de código.

## 🔎 2. Product Discovery & PM
*Ferramentas para validar o "O QUE" e o "PORQUÊ".*

*   [Guia Mestre de Briefings](guia_mestre_briefings.md)
*   [Briefing Produto](briefing_produto.md)
*   [Briefing Landing Page](briefing_lp.md)
*   [Product Manager Toolkit](product-manager-toolkit/SKILL.md)
*   [Framework de Métricas para Startups](startup-metrics-framework/SKILL.md)
*   [Enhance Prompt](enhance-prompt/SKILL.md) - Otimização de prompts para UI/UX.

## 🎨 3. UI/UX & Design Premium
*Focado em criar interfaces que dão "WOW" no usuário.*

*   [IVaaS - Identidade Visual as a Service](IVaaS - Identidade Visual as a Service.md)
*   [Immersive Landing Pages](immersive_landing_pages.md)
*   [Hierarquia Visual de CTAs](cta_visual_hierarchy.md)
*   [Design System Workflow](design_system_workflow.md)
*   [UI Standards](ui_standards.md)
*   [UX Principles](ux_principles.md)
*   [Framer Motion Guide](framer_motion_guide.md) - Animações fluidas.
*   [Lottie Guide](lottie_guide.md) - Animações ricas.
*   [Stitch DESIGN.md](design-md/SKILL.md) - Documentação de design systems semânticos.
*   [Remotion Walkthroughs](remotion/SKILL.md) - Vídeos de apresentação de apps.

## 💻 4. Desenvolvimento Frontend
*Standards para código cliente moderno.*

*   [Frontend Dev Guidelines](frontend-dev-guidelines/SKILL.md)
*   [React Best Practices](react-best-practices/SKILL.md)
*   [Next.js App Router Patterns](nextjs-app-router-patterns/SKILL.md)
*   [Tailwind Patterns](tailwind-patterns/SKILL.md)
*   [Typescript Expert](typescript-expert/SKILL.md)
*   [React Components](react-components/SKILL.md) - Conversão de Stitch para React.
*   [Shadcn/UI Guide](shadcn-ui/SKILL.md) - Integração com shadcn/ui.
*   [Stitch Loop Workflow](stitch-loop/SKILL.md) - Geração de sites multi-página.

## ⚙️ 5. Desenvolvimento Backend & Banco de Dados
*Lógica de servidor, APIs e persistência.*

*   [Backend Dev Guidelines](backend-dev-guidelines/SKILL.md)
*   [API Design Principles](api-design-principles/SKILL.md)
*   [API Patterns](api-patterns/SKILL.md)
*   [PostgreSQL Best Practices](postgres-best-practices/SKILL.md)
*   [Database Design Patterns](database-design/SKILL.md)
*   [Estratégia de Sharding](sharding_strategy.md)

## 🛡️ 6. Segurança, QA & DevOps
*Proteção e entrega contínua.*

*   [Security Checklist](security_checklist.md)
*   [Web App Testing](webapp-testing/SKILL.md)
*   [API Security Best Practices](api-security-best-practices/SKILL.md)
*   [Deployment Procedures](deployment-procedures/SKILL.md)
*   [CI/CD Automation](cicd-automation-workflow-automate/SKILL.md)

---

### 💡 Dica de Uso para AGENTES:
Ao receber um prompt desta crew, você deve ler o arquivo de índice correspondente à sua tarefa (ex: um PM deve ler a seção 2, um Arquiteto a seção 1 e 5). Nunca tente ler a pasta inteira, foque nos arquivos listados aqui para economizar contexto.
