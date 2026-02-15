# Security Checklist

## Database (RLS)
- [ ] Is RLS enabled on the table? (`ALTER TABLE ... ENABLE ROW LEVEL SECURITY`)
- [ ] Are policies explicit? (Avoid `USING (true)` unless public read is intended)
- [ ] Does the policy check `auth.uid()` where user data is private?
- [ ] Is `service_role` kept out of client-side logic?

## API (Edge Functions)
- [ ] Are inputs validated? (e.g., ensuring `email` is actually an email)
- [ ] Are environment variables used for secrets? (Never hardcode keys)
- [ ] Is CORS handled correctly?
- [ ] Are error messages sanitized? (Don't leak stack traces to client)

## Rate Limiting & Abuse Prevention
- [ ] Are sensitive endpoints (Auth, Email, SMS) rate-limited? (e.g., 5 requests/hour for password reset)
- [ ] Is there a global API rate limit to prevent DDoS?

## Session Management (Auth)
- [ ] Are Access Tokens short-lived? (Recommend ~15-30m in Supabase config to limit exposure)
- [ ] Is Refresh Token Rotation enabled? (Crucial! Revokes compromised tokens on reuse)
- [ ] Is Auto-Logout implemented for inactivity? (UX layer; defense-in-depth)

## Security Headers (Defense in Depth)
- [ ] Is HSTS enabled? (Force HTTPS)
- [ ] Is CSP (Content Security Policy) configured? (Mitigate XSS)
- [ ] Are anti-clickjacking headers set? (`X-Frame-Options: DENY` or `SAMEORIGIN`)

## Performance impact on Security
- [ ] Do RLS policies use indexed columns? (Slow policies = Slow queries)

## Dependencies
- [ ] Are dependencies secure? (Run `npm audit` and fix critical issues)
- [ ] Are packages up to date? (Run `npm outdated`)
