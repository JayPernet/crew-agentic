---
name: prompt-master
description: "Complete prompt engineering toolkit. Use when designing, optimizing, or debugging prompts for LLMs. Covers chain-of-thought, few-shot, system prompts, constitutional AI, role-playing, production templates, and UI/UX prompt enhancement for Stitch. Includes a curated prompt library."
---

# Prompt Master

Expert prompt engineering from first principles to production-grade systems.

---

## 1. Core Techniques

| Technique | When to Use | Example |
|-----------|------------|---------|
| **Zero-shot** | Simple, clear tasks | "Summarize this text." |
| **Few-shot** | Structured/formatted outputs | Provide 2-3 examples in the prompt |
| **Chain-of-Thought (CoT)** | Reasoning, math, logic | "Think step by step..." |
| **ReAct** | Multi-step agentic tasks | Combine "Thought → Action → Observation" |
| **Constitutional AI** | Content safety/alignment | Add self-critique step |
| **Role-prompting** | Persona or expertise injection | "You are a senior backend engineer..." |

---

## 2. Prompt Structure (Production Template)

```
[ROLE]
You are a {role} specializing in {domain}.

[CONTEXT]
{relevant background}

[TASK]
{clear, specific instruction}

[CONSTRAINTS]
- {constraint 1}
- {constraint 2}

[OUTPUT FORMAT]
{JSON / Markdown / plain text}

[EXAMPLES] (optional)
Input: {example}
Output: {example}
```

---

## 3. Optimization Heuristics

- **Be specific**: "Write a 3-bullet summary" beats "summarize".
- **Separate concerns**: One prompt = one task.
- **Use delimiters**: `---`, ` ````, or `[SECTION]` to organize input.
- **Positive framing**: "Always cite sources" beats "Don't forget sources".
- **Temperature control**: Low (0.1-0.3) for factual/code, high (0.7-1.0) for creative.
- **Test edge cases**: Empty inputs, contradictory info, long documents.

---

## 4. Debugging Agent Behavior

When an agent produces unexpected results:
1. **Inspect the system prompt**: Is the role/context clear and unambiguous?
2. **Check instruction ordering**: Critical rules should appear at the start AND end.
3. **Reduce ambiguity**: Every instruction should have one interpretation.
4. **Add negative examples**: "Do NOT do X."
5. **Add a self-check step**: "Before responding, verify you have addressed all constraints."

---

## 5. UI/UX Prompt Enhancement (Stitch-Optimized)

When generating UI prompts for Stitch or similar tools:
- Replace vague terms: "nice button" → "CTA button with rounded corners, 48px height, primary fill (#5B21B6), white label text 'Get Started'"
- Inject design system context: Specify color tokens, font family, and spacing scale.
- Use spatial language: "left sidebar", "sticky header", "3-column grid", "modal overlay".
- Specify states: "hover state", "loading state", "error state with red border".

---

## 6. Prompt Library (Ready-to-Use Templates)

**For coding:**
> "You are a senior {language} engineer. Review the following code for bugs, security issues, and performance problems. Provide specific fixes with code examples. Code: {code}"

**For analysis:**
> "Analyze the following {data type}. Identify the top 3 insights and present them as: 1) Insight, 2) Evidence, 3) Recommended action."

**For writing:**
> "Rewrite the following text in a {tone} tone for a {audience} audience. Preserve all facts. Original: {text}"

**For role-play debugging:**
> "You are a {role}. I will describe a situation and you will tell me exactly what you would do, step by step, citing your reasoning."
