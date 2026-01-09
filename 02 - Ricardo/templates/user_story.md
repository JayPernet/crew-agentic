# User Story Template

## Story ID: [US-XXX-YY]

## User Story
**Como** [tipo de usuário],  
**Eu quero** [ação/funcionalidade],  
**Para que** [benefício/valor].

## Acceptance Criteria (Critérios de Aceite)

### Cenário 1: [Nome do cenário - Happy Path]
**Dado que** [contexto inicial]  
**Quando** [ação do usuário]  
**Então** [resultado esperado]

### Cenário 2: [Nome do cenário - Validação]
**Dado que** [contexto inicial]  
**Quando** [ação inválida do usuário]  
**Então** [mensagem de erro ou comportamento esperado]

### Cenário 3: [Nome do cenário - Edge Case]
**Dado que** [contexto inicial]  
**Quando** [situação de borda]  
**Então** [comportamento esperado]

## Definition of Done (DoD)
- [ ] Código implementado e revisado
- [ ] Testes unitários escritos e passando
- [ ] Testes de integração (se aplicável)
- [ ] UI implementada conforme spec de Amanda
- [ ] Documentação atualizada (se necessário)
- [ ] Paulo (QA Auto) validou os critérios de aceite
- [ ] Deploy em ambiente de staging
- [ ] PO aprovou a funcionalidade

## Technical Notes (Para Sofia/Helena)
**Backend (Marcos):**
- Endpoint necessário: `POST /api/...`
- Tabelas afetadas: `users`, `...`
- RLS policies: [descrever]

**Frontend (Claudio):**
- Componentes necessários: `Button`, `Card`, `...`
- Estados da UI: Loading, Success, Error, Empty
- Validações client-side: [descrever]

## UI/UX Notes (Para Amanda)
- Tela afetada: [nome da tela]
- Interações: [hover, click, drag, etc]
- Feedback visual: [toast, modal, inline error]
- Responsividade: Desktop + Mobile

## Dependencies
**Depende de:**
- [ ] [US-XXX-01] - [Título da story bloqueadora]
- [ ] [EPIC-YYY] - [Título do épico bloqueador]

**Bloqueia:**
- [ ] [US-XXX-03] - [Título da story dependente]

## Priority
- **MoSCoW:** [Must Have / Should Have / Could Have / Won't Have]
- **Estimativa de esforço:** [XS / S / M / L / XL]

## Assumptions
- Premissa 1
- Premissa 2

---

**Criado por:** Ricardo (PM)  
**Epic:** [EPIC-XXX]  
**Data:** [YYYY-MM-DD]  
**Última atualização:** [YYYY-MM-DD]
