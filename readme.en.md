```
        _ _              ___          _          ___                  
 /\   /(_) |__   ___    / __\___   __| | ___    / __\ __ _____      __
 \ \ / / | '_ \ / _ \  / /  / _ \ / _` |/ _ \  / / | '__/ _ \ \ /\ / /
  \ V /| | |_) |  __/ / /__| (_) | (_| |  __/ / /__| | |  __/\ V  V / 
   \_/ |_|_.__/ \___| \____/\___/ \__,_|\___| \____/_|  \___| \_/\_/  
```

# 🚀 Vibe Code Crew | StarIAup

[🇧🇷 Português](readme.md) | [🇺🇸 English](readme.en.md)

**AI-Guided Software Development, Human-Structured.**

This repository contains **all the Skills** used in the Vibe Code methodology, developed by StarIAup. An approach that combines generative AI power with pragmatic and objective software engineering processes to **minimize token costs, eliminate rework, and deliver high-quality products**.

---

## 🎯 What are "Skills"?

In practice, a **Skill** is nothing more than a folder with files inside. It has a main file (`SKILL.md`) with the master instructions, and inside that folder, you can add references, data, examples, and whatever else the AI needs to perform that task exceptionally well.

Examples of what makes up our Crew:
- **Brand Identity Skill**
- **Frontend Design Skill**
- **SEO & Copywriting Skill**
- **Immersive Web Design Skill**

Since a skill is a folder, you can **version it on GitHub**. This means you will have the entire history of your AI's intelligence evolution over time. If you discover a better workflow, the AI can update its own skill (with your permission) and "learn" it forever.

### ⚙️ Deterministic + Non-Deterministic
The secret of skills is that they can also call **scripts as tools**.
Imagine a branding skill that, besides having the brand colors and fonts (non-deterministic), has a Python script that performs the exact application of that branding to a specific file (deterministic). It's the precision of code combined with the creativity of AI, all within a single folder.


---

## 🛠 How to Use

To start a project using our methodology, follow these steps:

1. **Start your Agent**: Create your new project folder (e.g., `CRM-Pneulandia`).
2. **Setup Base**: Clone this repository into your project folder. 
3. Access the "agent" tab (the AI chat), go to "Customizations" and paste the content of `agent-rules.md`.
4. **Invoke the Master Skill**: In the Antigravity chat, simply say:
   > *"Hello! I want to start a new project using the `vibecode-crew` skill, use @global_knowledge/INDEX.yaml for better results."*
5. **Answer the Questions**: The agent will ask if you want to create a **Landing Page** or a **Web Application**. Once you answer, it will auto-dispatch to the correct skills (`webapp-architect` or `lp-product-manager`) and follow the workflow automatically, managing your `.context/` directory.


---

## 📚 Knowledge Base (KB)

With over 2500 items, our Knowledge Base is the brain of the methodology. To facilitate navigation and save tokens, use the:
👉 **[KNOWLEDGE BASE INDEX](./global_knowledge/INDEX.yaml)**

---

## ⚡ SSOT: Multi-Agent Shared Brain

To eliminate hallucinations and allow the parallel use of multiple tools, the Crew uses the `.context/` directory as the **Single Source of Truth (SSOT)**:

1.  **Universal Memory**: Whether you are using Antigravity, Cursor, Claude Code, or a terminal; all agents must read and write to the `.context/` to maintain total project synchronization.
2.  **Automated Protocol**: Skills autonomously manage the creation of `MASTER.md`, PRD sharding, and Technical Changelog maintenance.
3.  **Native JIT Loading**: The AI reads only the specific shard required for the current task, reducing costs and increasing precision.


---

## 🙏 Credits

This methodology is the result of **consuming, adapting, and versioning** the work of giants:

- **[Antigravity Awesome Skills](https://github.com/sickn33/antigravity-awesome-skills):** Much of our knowledge base was inspired and adapted from this incredible repository.
- **[Brian (BMAD Method)](https://github.com/bmadcode):** Agentic construction concept.
- **[Deborah Folloni (DebGPT)](https://x.com/dfolloni):** Fundamental KISS, DRY, and technical structuring principles we've learned from her.

---

## 📄 License

Long live **open source**. Use freely, learn, and evolve. **Build something awesome.**

---

**Developed with 🧠 by StarIAup | 2026**