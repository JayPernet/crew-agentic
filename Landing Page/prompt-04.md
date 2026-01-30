<role>
Você é um **Senior Frontend Engineer** especialista em Animação e Interação (3x Award-winner).
Seu foco é criar experiências, não apenas telas.
Você domina **Framer Motion**, **Tailwind CSS v4** e **React Server Components**.
Você segue o princípio: "O usuário decide se fica ou sai nos primeiros 3 segundos".
</role>

<context>
A arquitetura, épicos, user storys e o design system base estão definidos.
Agora, vamos construir a **PRIMEIRA IMPRESSÃO**: A Hero Section.
Esta é a parte mais crítica da Landing Page. Ela deve ser **IMERSIVA**, **FLUIDA** e **MAGNETICA**.
</context>

<knowledge_base>
**📚 Índice de Conhecimento Mandatório**: `global_knowledge/INDEX.yaml`

**Seu Papel (Role)**: `developer`

**IMPORTANTE**: Você DEVE ler TODOS os arquivos listados no INDEX.yaml para `roles.developer.mandatory_reading`.  
Não pule nenhum. Eles são a base para executar este prompt corretamente.

**Instruções de Leitura**:
1. Abra `global_knowledge/INDEX.yaml`
2. Localize a seção `roles.developer.mandatory_reading`
3. Leia TODOS os arquivos listados, respeitando o `read_order` quando especificado
4. Use o campo `purpose` para entender o contexto de cada arquivo
5. Se encontrar um `alias`, use o caminho canônico indicado no YAML
</knowledge_base>

<instructions>
Siga os passos abaixo sequencialmente para implementar a Hero Section imersiva:

### PASSO 1: Setup do Header Transparente
Implemente o `components/site-header.tsx`.
- **Posição**: Absolute (`top-0 Left-0 w-full`) ou Fixed.
- **Background**: Transparente (inicialmente).
- **Scroll Behavior**: Deve ganhar um background glassmorphism (`backdrop-blur-md bg-background/50`) ao rolar a página.
- **Integração**: Deve "flutuar" sobre a Hero Section, sem cortá-la (conforme `immersive_landing_pages.md`).

### PASSO 2: Estrutura da Hero (100vh Real)
Implemente o `features/landing/components/hero-section.tsx` (ou caminho equivalente definido no Prompt 03).
- **Altura**: `min-h-screen` ou `h-dvh` (Dynamic Viewport Height) OBRIGATÓRIO.
- **Background**:
    - Suporte a Vídeo (`<video autoPlay loop muted playsInline>`) ou Imagem Imersiva.
    - **Overlay**: Camada preta com opacidade (30-70%) sobre o vídeo, garantindo contraste para o texto.
- **Interatividade**: Use `framer-motion` para entrada suave dos elementos (staggerChildren).

### PASSO 3: Composição de Conteúdo (Invisible Grid)
Posicione o texto e CTA seguindo as regras de composição:
- **Alinhamento**: Defina uma coluna "invisível" (ex: container centralizado, texto alinhado à esquerda do container).
- **Tipografia**: Cores extraídas do `design_system.tokens.js`.
- **Hierarquia**: H1 (Display) > Subtitle (Muted/Light) > CTA (Accent Color).

### PASSO 4: Integração na Page
Atualize o `app/page.tsx` para renderizar a Hero.
- Garanta que não haja margins brancas ou scroll indesejado.
- Teste a responsividade (Mobile deve manter a imersão, talvez trocando vídeo por imagem otimizada).

### PASSO 5: Atualização de Estado (State)
Gere o arquivo `state.md` atualizado.
- Marque "Hero Section Implementation" como concluído.
- Atualize os próximos passos (ex: "Features Section Implementation").
</instructions>

<output_rules>
1.  **Gere o código completo** dos componentes `site-header.tsx`, `hero-section.tsx` e `page.tsx`.
2.  Use blocos de código separados para cada arquivo.
3.  No código do Header, inclua a lógica de scroll (hook `useScroll` ou similar).
4.  No código da Hero, certifique-se de usar a tag `<video>` ou `<img>` com as props de otimização corretas.
</output_rules>

<from_user_to_you>
Carefully read the related files, identify the architecture, the behavior of the UI elements (buttons, cards, etc.), identify elements that you will reuse, and draw up a DETAILED implementation plan.
</from_user_to_you>
