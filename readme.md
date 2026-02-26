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

Este repositório contém a **todas as Skills** utilizadas na metodologia Vibe Code, desenvolvida pela StarIAup. Uma abordagem que combina o poder da IA generativa com processos pragmáticos e objetivos de engenharia de software para **minimizar custos de tokens, eliminar retrabalho e entregar produtos de qualidade**.

---

## 🎯 Mas o que são "Skills"?

Na prática, uma **Skill** nada mais é do que uma pastinha com arquivos dentro. Ela contém um arquivo principal (`SKILL.md`) com as instruções mestre, e dentro dessa pasta você pode colocar referências, dados, exemplos e o que for necessário para a IA executar bem aquela tarefa.

Alguns exemplos do que compõe nossa Crew:
- **Skill de Identidade de Marca**
- **Skill de Frontend Design**
- **Skill de SEO & Copywriting**
- **Skill de Web Design Imersivo**

Como a skill é uma pasta, você pode **versionar ela no GitHub**. Isso significa que você terá todo o histórico de evolução da sua inteligência ao longo do tempo. Se você aprender um fluxo melhor, a IA edita a própria skill (com sua permissão) e "aprende" para sempre.

### ⚙️ Determinístico + Não-Determinístico
O segredo das skills é que elas também podem chamar **scripts como ferramentas**.
Imagine uma skill de branding que, além de conter a identidade visual da marca (não-determinístico), possui um script em Python que executa a aplicação automática desse branding em um material (determinístico). É a precisão do código aliada à criatividade da IA dentro de uma única pastinha.


---

## 🛠 Como Usar

Para iniciar um projeto utilizando nossa metodologia, siga estes passos:

1. **Inicie o seu Agente**: Crie a pasta do seu novo projeto (ex: `CRM-Pneulandia`).
2. **Setup Base**: Clone este repositório para a pasta do seu projeto.
2.1. **Context Caching & Indexing**: Para máxima eficiência de tokens, aponte seu agente para o arquivo `@global_knowledge/INDEX.yaml`. Ele funciona como o mapa cerebral da Crew; a IA buscará os outros arquivos via JIT (Just-In-Time) apenas quando necessário.
3. **Invoque a Skill Mestra**: No chat do Antigravity, diga apenas isso:
   > *"Olá! Quero iniciar um novo projeto utilizando a skill `vibecode-crew`."*
4. **Responda as perguntas**: O agente perguntará se você deseja criar uma **Landing Page** ou uma **Aplicação Web**. Assim que você responder, ele fará o auto-despacho (*auto-dispatch*) para as skills corretas (`webapp-architect` ou `lp-product-manager`) e seguirá o fluxo automaticamente gerenciando o seu diretório `.context/`.


---

## 📚 Base de Conhecimento (KB)

Com mais de 2500 itens, nossa Knowledge Base é o cérebro da metodologia. Para facilitar a navegação e economizar tokens, utilize o:
👉 **[ÍNDICE DA KNOWLEDGE BASE](./global_knowledge/INDEX.yaml)**

---

## ⚡ SSOT: Cérebro Compartilhado Multi-Agente

Para eliminar alucinações e permitir o uso de múltiplas ferramentas em paralelo, a Crew utiliza o diretório `.context/` como **Single Source of Truth (SSOT)**:

1.  **Memória Universal**: Não importa se você está usando Antigravity, Cursor, Claude Code ou terminal; todos os agentes devem ler e escrever no `.context/` para manter a sincronia total do projeto.
2.  **Protocolo Automatizado**: As Skills gerenciam sozinhas a criação do `MASTER.md`, o sharding do PRD e a manutenção do Changelog técnica.
3.  **JIT Loading Nativo**: A IA lê apenas o shard necessário para a tarefa atual, reduzindo custos e aumentando a precisão.


---

## 🙏 Créditos

Esta metodologia é o resultado de **consumir, adaptar e versionar** o trabalho de gigantes:

- **[Antigravity Awesome Skills](https://github.com/sickn33/antigravity-awesome-skills):** Grande parte da nossa base de conhecimento foi inspirada e adaptada deste repositório incrível.
- **[Brian (BMAD Method)](https://github.com/bmadcode):** Conceito de construção agêntica.
- **[Deborah Folloni (DebGPT)](https://x.com/dfolloni):** Princípios fundamentais de KISS, DRY e estruturação técnica que aprendemos com ela.

---

## 📄 Licença

Viva o **open source**. Use livremente, aprenda e evolua. **Construa algo fodástico.**

---

**Desenvolvido com 🧠 por StarIAup | 2026**