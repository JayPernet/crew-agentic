# PRODUCT REQUIREMENT PROMPT (PRP)
**ID:** PRP-[ID]
**Target:** [Nome da Feature/Componente]
**Path:** /Projetos/${PROJECT_PATH}/

---

## 🤖 SYSTEM ROLE
You are an expert Full-Stack Developer utilizing the Vibe Code methodology.
Your goal is to implement the following requirements with precision, adhering to the project's architecture.

## 1. OBJECTIVE
[Descreva o objetivo claro desta implementação. O que o usuário deve conseguir fazer?]

## 2. CONTEXT & REQUIREMENTS
**User Story:** [Link para a US de Ricardo]
**Business Rules:**
- [Regra de Negócio 1]
- [Regra de Negócio 2]

## 3. TECHNICAL SPECS (Reference: Sofia)
**Database Interactions:**
- **Tables:** `[tabela_inventario]` (See `inventario_database.md`)
- **RLS Context:** [Ex: User can only edit their own profile]
- **Queries needed:** [Ex: Select by ID, Update Status]

## 4. UI/UX SPECS (Reference: Amanda)
**Visual Structure:**
- [Ex: Card with 2 columns, flexible grid]
- [Ex: Modal centered with backdrop blur]

**Component States:**
- **Default:** [Descrição]
- **Loading:** [Skeleton ou Spinner específico]
- **Error:** [Toast message ou Inline error]
- **Success:** [Redirect ou Toast]

**Interactions:**
- [Ex: Clicking 'Save' triggers validation X]

## 5. FILES TO CREATE / MODIFY
```bash
# List the expected file structure explicitly
src/components/[Name].tsx
src/pages/[Name].tsx
supabase/migrations/[YYYYMMDD]_[Name].sql
src/types/[Name].ts
```

## 6. IMPLEMENTATION STEPS (Chain of Thought)
1.  **Database:** Create/Verify migrations matches `inventario_database.md`.
2.  **Types:** Define TypeScript interfaces for the data.
3.  **Logic:** Implement the data fetching/mutation hook.
4.  **UI:** Build the visual component using Tailwind/Shadcn.
5.  **Integration:** Connect Logic + UI.
6.  **Validation:** Ensure Business Rules are met.

---
**COMMAND:** Implement the above following the "Vibe Code" strict mode. No placeholders.