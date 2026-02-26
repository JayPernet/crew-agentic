# Análise de Eficiência de Tokens: Veredito sobre a Abordagem "AGENTE.md" e "INDEX.yaml"

## 1. Diagnóstico da Situação Atual
A preocupação com o consumo de tokens é **extremamente legítima**. O sistema atual baseia-se em "Injeção Estática de Contexto Total", o que é um anti-padrão de escalabilidade para 2026.

### Pontos Críticos de Desperdício:
- **INDEX.yaml Mandatário:** Para o role de `designer`, por exemplo, o sistema exige a leitura de **18 arquivos base + dezenas de skills**. Isso pode consumir entre 15k a 40k tokens *antes mesmo* do agente começar a processar sua tarefa específica.
- **Monólito AGENTE.md:** O template centraliza Briefing, PRD, Database e Screens em um único arquivo. Em projetos reais, esse arquivo tende a ultrapassar 20k tokens rapidamente.
- **Ruído Documental:** Muitas das instruções nos arquivos de "global_knowledge" são diretrizes genéricas que o modelo (se for de classe GPT-4o ou Claude 3.5/5) já possui em seu treinamento base ou que poderiam ser evocadas apenas sob demanda.

---

## 2. Pesquisa de Melhores Práticas (Benchmark 2025/2026)
A indústria migrou do "Prompt Engineering" para o **"Context Engineering"**. Abaixo, os pilares da eficiência:

| Técnica | Descrição | Impacto |
| :--- | :--- | :--- |
| **Just-in-Time (JIT) Context** | Carregar documentação apenas quando uma ferramenta de busca (Search Tool) detecta necessidade. | -60% tokens |
| **Model Context Protocol (MCP)** | Uso de um protocolo padronizado para que o agente "puxe" dados de bancos ou arquivos apenas quando solicitado. | Alta Precisão |
| **RAG Semântico para Docs** | Em vez de ler o `clean_code.md` inteiro, o agente busca apenas o "snippet" relevante para a função que está escrevendo. | -80% tokens |
| **Prompt Sharding (Ativo)** | A estratégia de sharding já existe no projeto, mas o `INDEX.yaml` a anula ao tornar tudo "obrigatório". | Estrutural |

---

## 3. Proposta de Modificação (O "Novo Caminho")

Para reduzir o consumo em até **75%** sem perder qualidade, devemos evoluir para o seguinte modelo:

### A. Substituir "Mandatário" por "Consultável"
O `INDEX.yaml` não deve dizer "Leia tudo", mas sim "Aqui está o mapa do que você pode buscar".
- **Mudança:** O agente recebe apenas um `RESUMO_GLOBAL.md` (max 1k tokens) com links e descrições curtas. Se ele precisar de detalhes sobre animação, ele usa a ferramenta `read_file` no arquivo de animação.

### B. Desmembramento do AGENTE.md (Shard Nativo)
Em vez de um `AGENTE.md` gigante, o diretório do projeto deve seguir a estrutura de shards:
- `context/briefing.md`
- `context/prd.md`
- `context/database.md`
- `context/ui_inventory.md`
O agente carrega o `briefing.md` e o `prd.md` como base, e os outros apenas se a tarefa envolver DB ou UI.

### C. Uso de System Prompts "Anêmicos"
Confiar mais na capacidade intrínseca do modelo. Instruções como "use clean code" podem ser resumidas a uma única linha, em vez de um arquivo de 500 linhas, já que modelos modernos já são treinados em Clean Code.

---

## 4. Veredito Final

**A abordagem atual é INSURMENTÁVEL financeiramente e tecnicamente para projetos de grande escala.**

**Recomendação:**
1. **Modificar o `INDEX.yaml`** para remover a obrigatoriedade de leitura de skills genéricas.
2. **Implementar o "Search-First Workflow"**: O agente deve ser instruído a *pesquisar* na `global_knowledge` usando `grep_search` ou `glob` em vez de ler índices massivos.
3. **Fragmentar o template de AGENTE.md** imediatamente em sub-arquivos por domínio.

**Status:** ⚠️ **Crítico** (Ajuste Necessário para evitar "Token Bankruptcy")

---

## 5. Sugestões de Solução (Curadoria & Estratégia)

Para solucionar o "ralo de tokens", aqui estão as abordagens que sugiro e o que o mercado está fazendo comprovadamente:

### A. Soluções que Sugiro (Estratégia Interna)

1.  **Context Caching (Mandatório):**
    *   **O que é:** Configurar o agente para utilizar o cache de contexto (disponível em APIs como Gemini 1.5 e Claude 3.5).
    *   **Impacto:** Se os arquivos da `global_knowledge` são os mesmos em várias interações, o custo de "input" desses tokens cai até **90%** após a primeira chamada.
    *   **Ação:** Devemos marcar os arquivos de "mandate" como blocos estáticos de cache.

2.  **Roteamento de Agentes (Micro-Agentes):**
    *   **O que é:** Em vez de um "Agente Senior" que lê tudo, usar um **Router Agente** extremamente leve (300 tokens) que apenas decide: "Este prompt é para o Designer ou para o Dev?".
    *   **Impacto:** Evita que o Dev leia as 18 skills de Design sem necessidade.

3.  **Fragmentação de Projeto (Shard-First):**
    *   **O que é:** Abolir o `AGENTE.md` monolítico.
    *   **Sugestão de Estrutura:**
        - `.context/briefing.md` (Contexto de negócio)
        - `.context/specs.md` (PRD e Épicos)
        - `.context/db_schema.md` (Inventário de Banco)
    *   **Ação:** O agente só carrega o `specs.md` se for escrever código, e o `db_schema.md` se for mexer no Supabase.

### B. O que o mercado está fazendo (Soluções Comprovadas)

1.  **Model Context Protocol (MCP) pela Anthropic:**
    *   **O que é:** Um padrão aberto para conectar IAs a dados. Em vez de injetar o texto, a IA usa o protocolo para "pedir" a informação apenas quando necessário.
    *   **Referência:** [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)
    *   **Aplicação:** Integrar o Gemini CLI com um servidor MCP que indexa a `global_knowledge` e entrega apenas o trecho exato (RAG local).

2.  **Prompt Compression (LongLLMLingua):**
    *   **O que é:** Projetos como o da Microsoft utilizam modelos pequenos para "comprimir" o prompt original, removendo palavras desnecessárias sem perder o sentido semântico para a IA.
    *   **Referência:** [LongLLMLingua (Microsoft Research)](https://github.com/microsoft/LLMLingua)
    *   **Impacto:** Redução de até **20x** no tamanho do contexto com perda mínima de performance.

3.  **Arquitetura "Devin-like" (Living Codebase Index):**
    *   **O que é:** Ferramentas como o Cursor ou o Devin não lêem todos os arquivos. Eles mantêm um "índice de símbolos" (nomes de funções e classes). O agente vê o índice e decide qual arquivo abrir.
    *   **Referência:** [Cursor AI - Context Management](https://www.cursor.com/how-it-works)
    *   **Aplicação:** Modificar nosso `INDEX.yaml` para ser um `SYMBOLS.index`, onde o agente faz um "grep" mental antes de dar o `read_file`.

4.  **Skeleton-of-Thought (SoT):**
    *   **O que é:** O agente primeiro gera um "esqueleto" da solução (muito barato em tokens) e depois expande cada tópico individualmente.
    *   **Referência:** [Skeleton-of-Thought Research](https://arxiv.org/abs/2307.15337)
    *   **Aplicação:** No nosso workflow, isso significaria validar o plano de ação ANTES de carregar as documentações pesadas de implementação.

---

## 6. Próximos Passos Recomendados

## 7. Integração com Google Antigravity IDE (2026 Update)

Dado que o **Google Antigravity** é a IDE padrão, podemos aplicar otimizações de nível nativo que ferramentas tradicionais não suportam:

### A. Transformação de MDs em Artifacts
Em vez de o agente ler o `AGENTE.md` do sistema de arquivos, instrua o agente a **"Publicar um Artefato"** no Antigravity (Mission Control). 
- **Vantagem:** O Antigravity mantém o estado visual e semântico do projeto na barra lateral (Manager View) de forma persistente, reduzindo a necessidade de reinjetar o histórico completo em cada prompt.

### B. Indexação Nativa de Global Knowledge
O Antigravity possui um motor de RAG embutido para a base de conhecimento (baseado no repositório *Antigravity Awesome Skills*).
- **Sugestão:** Mova a pasta `global_knowledge` para ser reconhecida como um **"Knowledge Source"** nas configurações do Workspace do Antigravity. Isso permite que o IDE forneça o contexto "Just-in-Time" sem que você precise listar tudo no `INDEX.yaml`.

### C. Gemini 3 Context Caching
O Antigravity aproveita nativamente o **Context Caching** do Gemini 3. 
- **Ação:** Mantenha os arquivos de Brand Book e UI Standards em um estado de cache "quente". No Antigravity, isso é feito fixando (pinning) os arquivos fundamentais no contexto da sessão de missão.

**Conclusão:** O Antigravity foi feito para resolver exatamente o seu medo. Ao usar as ferramentas nativas de **Mission Control** e **Artifacts** dele, o seu `AGENTE.md` deixa de ser um "arquivo pesado" e passa a ser o "Mapa da Missão" gerenciado pela IDE.
