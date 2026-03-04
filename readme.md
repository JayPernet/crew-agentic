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

Como a skill pode ser armazenada em uma pasta, você pode **versionar ela**. Isso significa que você terá todo o histórico de evolução da sua inteligência ao longo do tempo. Se você aprender um fluxo melhor, a IA edita a própria skill (com sua permissão) e "aprende" para sempre.

### Anatomia de uma Skill

**Front Matter**: Esta seção está localizada entre duas linhas pontilhadas no início do arquivo e é escrita em formato YAML. Ela inclui o nome e a descrição da skill, informando para a IA como a skill é chamada e o que ela faz.

**Regras passo a passo**: Estas são as instruções detalhadas que o Claude executa uma vez que decide que esta é a skill apropriada para a tarefa

*Exemplo mínimo*:

```yaml
--- 
name: "Nome da Skill"
description: "O que essa skill faz"
--- 

# Instruções
1. Faça isso
2. Depois faça aquilo
3. Então faça aquilo outro
```

### ⚙️ Determinístico + Não-Determinístico
O segredo das skills é que elas também podem chamar **scripts como ferramentas**.
Imagine uma skill de branding que, além de conter a identidade visual da marca (não-determinístico), possui um script em Python que executa a aplicação automática desse branding em um material (determinístico). É a precisão do código aliada à criatividade da IA dentro de uma única pastinha.


---

## 🛠 Fluxo de Trabalho

A cada novo projeto, siga o seguinte passo a passo:

1. Crie uma nova pasta o projeto
2. Dentro da pasta do projeto, clone a pasta `skills` desse repositório
3. Comece a usar as skills para construir seu projeto

Ao final, sua pasta deve ficar mais ou menos assim:
[ASCCI Art aqui]

---

## 🛠 **Meu** Fluxo de Trabalho

Como eu, criador dessa metodologia, trabalho:

1. Crio uma pasta para o projeto, já sabendo se será uma landing page ou um web app.
2. Dentro da pasta do projeto, clone a pasta `skills` desse repositório
3. Uso a skill `vibe-code` para ter toda a base estrutural do projeto

Pronto. Se necessário, desenvolvo novas skills para atender necessidades específicas do projeto.

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
