---
name: senior-fullstack
description: "Complete fullstack development toolkit. Use for: building full-stack web apps (React, Next.js, Node.js, GraphQL, PostgreSQL), project scaffolding, code quality analysis, backend architecture (layered services, API design, caching, queuing), feature development end-to-end, design patterns, and development workflows."
---

# Senior Fullstack

Complete reference for fullstack development across the entire stack.

---

## 1. Project Scaffolding

**Next.js 15+ App Router (recommended structure):**
```
src/
  app/                      # Routes (App Router)
    (auth)/                 # Route groups
    api/                    # API routes
  features/                 # Feature-based modules
    auth/
      components/
      hooks/
      lib/
      types.ts
    dashboard/
      ...
  components/               # Global dumb components only
  lib/                      # Shared utilities
  types/                    # Global types
```

---

## 2. Backend Architecture Standards

**Layered architecture:**
```
Route Handler → Service Layer → Repository Layer → Database
```
- **Route Handlers**: Validate input, call service, return response. No business logic.
- **Service Layer**: All business logic. No DB calls.
- **Repository Layer**: All DB calls. No business logic.

**Node.js + TypeScript stack:**
```typescript
// Route → Service → Repository pattern
export async function POST(req: Request) {
  const body = await req.json();
  const validated = CreateOrderSchema.parse(body); // Validate at boundary
  const order = await OrderService.create(validated); // Business logic
  return NextResponse.json(order, { status: 201 });
}
```

---

## 3. API Design Standards

**REST conventions:**
- `GET /resources` — list
- `POST /resources` — create
- `GET /resources/:id` — detail
- `PATCH /resources/:id` — partial update
- `DELETE /resources/:id` — delete

**Response envelope:**
```typescript
// Success
{ data: T, meta?: { page, total } }

// Error
{ error: { code: string, message: string, details?: unknown } }
```

**Versioning**: prefer URL versioning (`/api/v1/`) for public APIs.

---

## 4. Caching Strategy

| Layer | Tool | TTL | Use For |
|-------|------|-----|---------|
| Browser | Browser cache / SWR | 5min | Static assets, user profile |
| CDN | Vercel Edge | 1hr | Public pages, images |
| Application | Redis + Upstash | 5-60min | DB query results, computed data |
| Database | PostgreSQL materialized views | Manual | Expensive aggregations |

```typescript
// TanStack Query client-side cache
const { data } = useQuery({
  queryKey: ['dashboard-stats'],
  queryFn: fetchStats,
  staleTime: 5 * 60 * 1000, // 5 minutes
});
```

---

## 5. Background Jobs & Queues

When to use: sending emails, image processing, webhooks, long-running imports.

```typescript
// Trigger.dev (recommended for Next.js)
export const sendWelcomeEmail = task({
  id: 'send-welcome-email',
  run: async (payload: { userId: string }) => {
    const user = await getUser(payload.userId);
    await resend.emails.send({ to: user.email, ... });
  }
});

// Trigger from API route
await sendWelcomeEmail.trigger({ userId: newUser.id });
```

---

## 6. Error Handling (Global Strategy)

```typescript
// Centralized error types
export class AppError extends Error {
  constructor(
    public code: string,
    message: string,
    public statusCode: number = 500,
  ) { super(message); }
}

export class NotFoundError extends AppError {
  constructor(resource: string) {
    super('NOT_FOUND', `${resource} not found`, 404);
  }
}

// Global handler in API route
export function handleError(error: unknown) {
  if (error instanceof AppError) {
    return NextResponse.json({ error: { code: error.code, message: error.message } }, { status: error.statusCode });
  }
  console.error('Unexpected error:', error);
  return NextResponse.json({ error: { code: 'INTERNAL', message: 'Internal server error' } }, { status: 500 });
}
```

---

## 7. Feature Development Workflow (End-to-End)

1. **Define**: Read the feature spec / PRP from `.context/`.
2. **Database**: Write migration SQL (with prefix + RLS).
3. **Repository**: Create repository functions (typed).
4. **Service**: Implement business logic.
5. **API Route**: Create endpoint with input validation.
6. **Frontend**: Build UI components + TanStack Query hooks.
7. **Test**: Write at least one happy-path + one error-path test.
8. **Review**: Run security checklist, visual checklist.
9. **Document**: Update `.context/MASTER.md` changelog.
