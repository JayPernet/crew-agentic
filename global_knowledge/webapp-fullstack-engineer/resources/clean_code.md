# Clean Code & Best Practices

## SOLID Principles (Frontend)
- **Single Responsibility:** One component should do one thing. If it's growing too big, split it.
- **Open/Closed:** Components should be open for extension (via props/slots) but closed for modification.

## React Patterns
- **Composition:** Use `children` prop to compose complex UIs instead of giant configuration objects.
- **Custom Hooks:** Extract logic (fetching, state machines) into hooks. Keep UI components dumb.

## Payload Consistency
- **Types:** Always define interfaces for API Payloads.
- **Validation:** Use Zod on the frontend too if complex validation is needed before sending to API.

## Production Readiness
- **No Console Logs:** Remove all `console.log` statements before merging to production. Use a proper logging library (e.g., Sentry) if observability is needed.
- **No Debugger:** Ensure there are no `debugger` statements.
- **Clean Comments:** Remove commented-out code. Comments should explain *why*, not preserve old code.
