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

This repository contains **all the Skills** used in the Vibe Code methodology, developed by StarIAup. An approach that combines the power of generative AI with pragmatic and objective software engineering processes to **minimize token costs, eliminate rework, and deliver quality products**.

---

## 🎯 What are "Skills"?

In practice, a **Skill** is simply a folder with files inside. It contains a main file (`SKILL.md`) with master instructions, and inside this folder, you can place references, data, examples, and whatever is necessary for the AI to execute that task well.

Because a skill can be stored in a folder, you can **version it**. This means you will have a full history of your intelligence's evolution over time. If you learn a better workflow, the AI edits its own skill (with your permission) and "learns" forever.

### Skill Anatomy

**Front Matter**: This section is located between two dashed lines at the beginning of the file and is written in YAML format. It includes the name and description of the skill, telling the AI what the skill is called and what it does.

**Step-by-step Rules**: These are the detailed instructions that Claude executes once it decides this is the appropriate skill for the task.

*Minimal example*:

```yaml
--- 
name: "Skill Name"
description: "What this skill does"
--- 

# Instructions
1. Do this
2. Then do that
3. Then do that other thing
```

### ⚙️ Deterministic + Non-Deterministic
The secret of skills is that they can also call **scripts as tools**.
Imagine a branding skill that, besides containing the brand's visual identity (non-deterministic), has a Python script that automatically applies this branding to a material (deterministic). It's the precision of code allied with the creativity of AI within a single folder.

---

## 🛠 Workflow

For every new project, follow these steps:

1. Create a new folder for the project
2. Inside the project folder, clone the `skills` folder from this repository
3. Start using the skills to build your project

At the end, your folder should look something like this:
[ASCII Art here]

---

## 🛠 **My** Workflow

How I, the creator of this methodology, work:

1. I create a folder for the project, already knowing if it will be a landing page or a web app.
2. Inside the project folder, I clone the `skills` folder from this repository.
3. I use the `vibe-code` skill to have the entire structural base of the project.

Ready. If necessary, I develop new skills to meet specific project needs.

---

## 🙏 Credits

This methodology is the result of **consuming, adapting, and versioning** the work of giants:

- **[Antigravity Awesome Skills](https://github.com/sickn33/antigravity-awesome-skills):** Much of our knowledge base was inspired and adapted from this amazing repository.
- **[Brian (BMAD Method)](https://github.com/bmadcode):** Agentic construction concept.
- **[Deborah Folloni (DebGPT)](https://x.com/dfolloni):** Fundamental principles of KISS, DRY, and technical structuring that we learned from her.

---

## 📄 License

Long live **open source**. Use freely, learn, and evolve. **Build something awesome.**

---

**Developed with 🧠 by StarIAup | 2026**
