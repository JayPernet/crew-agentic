-- Migration: [Name]
-- Created at: [Timestamp]

-- UP --------------------------------------------------------------------------

BEGIN;

  -- 1. Create/Alter Table
  CREATE TABLE IF NOT EXISTS public.[table_name] (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    [columns...]
  );

  -- 2. Enable RLS
  ALTER TABLE public.[table_name] ENABLE ROW LEVEL SECURITY;

  -- 3. Create Policies
  CREATE POLICY "Enable read access for authenticated users"
    ON public.[table_name]
    FOR SELECT
    TO authenticated
    USING (true); -- REPLACE with actual logic

  -- 4. Create Triggers (e.g., updated_at)
  CREATE TRIGGER handle_updated_at BEFORE UPDATE ON public.[table_name]
    FOR EACH ROW EXECUTE PROCEDURE moddatetime (updated_at);

COMMIT;

-- DOWN ------------------------------------------------------------------------

BEGIN;
  DROP TABLE IF EXISTS public.[table_name];
COMMIT;
