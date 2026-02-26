---
name: api-master
description: "Complete API design and documentation toolkit. Use for: REST and GraphQL API design, REST vs GraphQL vs tRPC selection, versioning, pagination, response formats, OpenAPI 3.1 documentation generation, API documentation from code. Use when designing APIs, reviewing specs, documenting endpoints, or establishing API standards."
---

# API Master

Complete reference for API design, architecture decisions, and documentation.

---

## 1. REST vs GraphQL vs tRPC

| Factor | REST | GraphQL | tRPC |
|--------|------|---------|------|
| When | Public APIs, simple CRUD | Complex queries, mobile | Internal fullstack (Next.js) |
| Learning curve | Low | Medium | Low (TypeScript) |
| Overfetch/underfetch | Common | Solved | N/A |
| Tooling | Excellent | Good | Good |
| Type safety | Manual | Codegen | Native |

**Decision rules:**
- **Public API**: REST (standard, cacheable, widely understood).
- **Mobile app with complex data needs**: GraphQL (avoid over-fetching).
- **Internal Next.js app**: tRPC (end-to-end type safety, minimal boilerplate).

---

## 2. REST Design Conventions

**URL structure:**
```
GET    /api/v1/users           # List
POST   /api/v1/users           # Create
GET    /api/v1/users/:id       # Detail
PATCH  /api/v1/users/:id       # Partial update
PUT    /api/v1/users/:id       # Full update
DELETE /api/v1/users/:id       # Delete

# Nested resources
GET    /api/v1/users/:id/orders
POST   /api/v1/users/:id/orders
```

**Response envelope:**
```typescript
// Success (list)
{ data: T[], meta: { page: number, total: number, limit: number } }

// Success (single)
{ data: T }

// Error
{ error: { code: string, message: string, details?: Record<string, string[]> } }
```

**HTTP status codes:**
- `200 OK` — successful GET/PATCH/PUT
- `201 Created` — successful POST
- `204 No Content` — successful DELETE
- `400 Bad Request` — validation error
- `401 Unauthorized` — no/invalid auth
- `403 Forbidden` — authenticated but not allowed
- `404 Not Found` — resource doesn't exist
- `422 Unprocessable Entity` — semantic validation failure
- `429 Too Many Requests` — rate limit hit
- `500 Internal Server Error` — unexpected server error

---

## 3. Pagination

**Cursor-based** (recommended for large datasets):
```typescript
GET /api/v1/posts?cursor=eyJpZCI6MTAwfQ&limit=20

// Response
{
  data: Post[],
  meta: {
    nextCursor: "eyJpZCI6MTIwfQ",
    hasMore: true
  }
}
```

**Offset-based** (simple, predictable):
```typescript
GET /api/v1/posts?page=2&limit=20

// Response
{
  data: Post[],
  meta: { page: 2, limit: 20, total: 340 }
}
```

---

## 4. API Versioning

- **URL versioning**: `/api/v1/`, `/api/v2/` — most visible, easiest for consumers.
- **Header versioning**: `Accept: application/vnd.api+json; version=2` — cleaner URLs.
- **Rule**: Never remove a version without 6+ months notice and migration guide.

---

## 5. OpenAPI 3.1 Documentation

**Template:**
```yaml
openapi: 3.1.0
info:
  title: My API
  version: 1.0.0

paths:
  /users/{id}:
    get:
      summary: Get user by ID
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
            format: uuid
      responses:
        '200':
          description: User found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/User'
        '404':
          $ref: '#/components/responses/NotFound'

components:
  schemas:
    User:
      type: object
      required: [id, email]
      properties:
        id:
          type: string
          format: uuid
        email:
          type: string
          format: email
```

**Auto-generation tools:**
- **From TypeScript**: `typescript-openapi`, `tsoa`
- **From Next.js**: `next-swagger-doc`
- **From Zod schemas**: `zod-to-openapi`

---

## 6. API Documentation Best Practices

Every endpoint must document:
1. **What it does** (plain English, one sentence).
2. **Authentication required** (yes/no, type).
3. **Request parameters** (path, query, body — all fields with types and constraints).
4. **Response examples** (success + error cases).
5. **Rate limits** if applicable.

**Tooling:**
- Swagger UI for interactive docs.
- Scalar (modern alternative to Swagger UI).
- Postman collections for team sharing.
