---
name: agent-engineering
description: "Complete LLM agent engineering toolkit. Use for: agent testing & benchmarking, agent improvement via performance analysis, multi-agent system optimization, cost-aware orchestration, and agent memory architecture (short-term, long-term, vector stores). Use when building, testing, or improving AI agents."
---

# Agent Engineering

Comprehensive guide for building, evaluating, improving, and orchestrating LLM agents.

---

## 1. Agent Evaluation & Benchmarking

Key insight: Even top agents achieve <50% on real-world benchmarks. Measure, don't assume.

**Evaluation Dimensions:**
- **Functional Correctness**: Does the agent complete the task?
- **Reliability**: What's the pass rate across N runs? (test for consistency)
- **Latency**: p50/p95 response times.
- **Cost**: Tokens per task × price per token.
- **Safety**: Does it refuse harmful instructions? Does it stay on-topic?

**Testing Strategy:**
```
1. Unit tests: Test individual tools/actions in isolation
2. Integration tests: Full task completion with expected output
3. Adversarial tests: Edge cases, ambiguous inputs, injection attempts
4. Regression tests: Any new prompt change re-runs the full suite
```

---

## 2. Agent Improvement (Systematic Iteration)

When an agent underperforms:
1. **Log failures**: Capture the full prompt + output for every failure.
2. **Classify errors**: Hallucination? Wrong tool call? Missed step? Poor format?
3. **Root cause**: System prompt ambiguity? Missing context? Tool design flaw?
4. **Fix → Re-test**: Apply ONE change at a time and re-run benchmarks.
5. **Track improvement**: Maintain a changelog of prompt versions with scores.

**Common improvements:**
- Add explicit negative examples ("Do NOT include...").
- Inject missing context into the system prompt.
- Shrink tool descriptions to eliminate ambiguity.
- Add a verification step at the end of task instructions.

---

## 3. Multi-Agent Orchestration

**Patterns:**
- **Sequential**: Agent A → Agent B → Agent C (pipeline).
- **Parallel**: Multiple agents run simultaneously and results are merged.
- **Hierarchical**: Orchestrator agent delegates to specialist sub-agents.
- **Competitive**: Multiple agents attempt the same task; best result wins.

**Cost-Aware Orchestration:**
- Use cheap/fast models (e.g., Flash) for routing and classification.
- Reserve expensive models (e.g., Pro) for high-stakes generation steps.
- Cache repeated tool calls (especially search/retrieval).
- Set token budgets per agent and enforce them.

**Workload Distribution:**
```
- Hot paths (high frequency): Optimize aggressively.
- Cold paths (rare, complex): Allow higher latency and cost.
- SSOT: Use a shared state file (e.g., .context/MASTER.md) to prevent agents from contradicting each other.
```

---

## 4. Agent Memory Architecture

**Memory Types:**

| Type | Storage | Lifespan | Access |
|------|---------|----------|--------|
| Short-term | Context window | Single session | Direct (in-context) |
| Long-term | Vector DB / Files | Persistent | Retrieval (RAG/grep) |
| Episodic | Conversation logs | Persistent | Summarization or replay |
| Semantic | Knowledge base | Persistent | Semantic search |

**Key Principle**: Memory isn't just storage — it's **retrieval**. A million stored facts mean nothing if the agent can't find the right one when needed.

**Implementation:**
- Chunk documents into 200-500 token segments for vector storage.
- Use metadata filters (project, date, category) to narrow retrieval scope.
- Summarize old context instead of truncating (preserves key facts).
- Use a `MASTER.md` or `INDEX.yaml` as a "working memory index" the agent reads first.
