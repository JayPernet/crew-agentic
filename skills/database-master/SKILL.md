---
name: database-master
description: "Complete database toolkit. Use for: schema design, database architecture, technology selection, query optimization, indexing strategies, migrations (zero-downtime, rollback), migration observability, cloud DB administration (AWS/Azure/GCP), and ORM selection. Covers PostgreSQL, MySQL, SQL Server."
---

# Database Master

Complete reference for database design, optimization, migrations, and administration.

---

## 1. Schema Design Principles

- **Normalize by default**: Avoid redundancy (3NF as baseline).
- **Denormalize strategically**: For read-heavy tables or analytics.
- **Name conventions**: `snake_case`, plural table names (`users`, `orders`), `id` as primary key.
- **Project prefix**: All tables MUST use the project prefix (e.g., `nexus_users`, `nexus_orders`).
- **Timestamps**: Always add `created_at` and `updated_at` with defaults.

**Standard table template (PostgreSQL):**
```sql
CREATE TABLE projectname_tablename (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  -- your columns
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Auto-update updated_at
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON projectname_tablename
  FOR EACH ROW EXECUTE FUNCTION trigger_set_timestamp();

-- RLS
ALTER TABLE projectname_tablename ENABLE ROW LEVEL SECURITY;
```

---

## 2. Technology Selection

| Need | Recommended | Why |
|------|------------|-----|
| General SaaS | PostgreSQL (Supabase) | ACID, RLS, full-text search, JSON |
| High-read, low-write | MySQL + Read Replicas | Cost-effective at scale |
| Document model | PostgreSQL JSONB | Avoid separate NoSQL for most cases |
| Real-time | Supabase Realtime | Built-in over Postgres |
| Analytics (OLAP) | BigQuery, ClickHouse | Columnar storage |
| Time-series | TimescaleDB | PostgreSQL extension |

**ORM Selection:**
- `Drizzle ORM` — Type-safe, lightweight, SQL-first. ✅ Recommended.
- `Prisma` — Great DX, heavier runtime. Good for teams new to ORMs.
- Raw SQL — For complex queries that don't map well to ORMs.

---

## 3. Indexing Strategy

- **Primary key**: Automatically indexed.
- **Foreign keys**: Always index them.
- **Frequent WHERE clauses**: Add B-tree index.
- **Text search**: Use GIN index + `tsvector`.
- **Partial indexes**: For queries with a WHERE condition (e.g., `WHERE status = 'active'`).

```sql
-- Composite index for common query pattern
CREATE INDEX idx_orders_user_status ON nexus_orders(user_id, status);

-- Partial index (only active records)
CREATE INDEX idx_active_users ON nexus_users(email) WHERE deleted_at IS NULL;
```

---

## 4. Query Optimization

```sql
-- Always EXPLAIN ANALYZE before optimizing
EXPLAIN ANALYZE SELECT * FROM nexus_orders WHERE user_id = $1;

-- Use CTEs for readability, not performance
WITH recent_orders AS (
  SELECT * FROM nexus_orders WHERE created_at > NOW() - INTERVAL '30 days'
)
SELECT * FROM recent_orders WHERE status = 'pending';
```

**Anti-patterns:**
- `SELECT *` in production queries.
- N+1 queries (use JOINs or batched fetches).
- Missing indexes on FK columns.
- Using `LIKE '%term%'` (full-text is faster).

---

## 5. Zero-Downtime Migrations

**Safe migration order (expand/contract pattern):**
1. **Add** new columns as nullable (no downtime).
2. **Backfill** data in batches.
3. **Add** constraints/indexes CONCURRENTLY.
4. **Deploy** new code that writes to both old and new columns.
5. **Remove** old column after verification.

```sql
-- Safe index creation (non-blocking)
CREATE INDEX CONCURRENTLY idx_new ON nexus_table(column);

-- Safe column rename (multi-step)
ALTER TABLE nexus_table ADD COLUMN new_name TEXT;
UPDATE nexus_table SET new_name = old_name;
-- (deploy code, then remove old column)
ALTER TABLE nexus_table DROP COLUMN old_name;
```

---

## 6. Row Level Security (RLS) — Mandatory

Every table MUST have RLS in Supabase:

```sql
-- Enable RLS
ALTER TABLE nexus_documents ENABLE ROW LEVEL SECURITY;

-- Users can only see their own documents
CREATE POLICY "user_isolation" ON nexus_documents
  FOR ALL
  USING (auth.uid() = user_id);

-- Admin sees everything
CREATE POLICY "admin_access" ON nexus_documents
  FOR ALL
  USING (auth.jwt() ->> 'role' = 'admin');
```

---

## 7. Cloud DB Administration

**Key operational tasks:**
- **Backups**: Daily automated, 30-day retention minimum. Test restore quarterly.
- **Connection pooling**: Use PgBouncer (Supabase uses it natively).
- **Monitoring**: Track `pg_stat_activity`, slow query log, replication lag.
- **Alerts**: CPU >80%, connections >80% of max, replication lag >30s.
- **Vacuum**: Monitor bloat. `autovacuum` should handle it; tune thresholds for write-heavy tables.
