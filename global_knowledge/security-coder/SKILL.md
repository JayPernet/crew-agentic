---
name: security-coder
description: "Secure coding implementation guide. Use when writing or reviewing code for security: XSS prevention, input validation, authentication implementation, API security, CSP headers, mobile security, SQL injection prevention. Covers frontend (React/Next.js), backend (Node.js/Python), and mobile (React Native)."
---

# Security Coder

Secure implementation patterns for frontend, backend, and mobile development.

---

## 1. Frontend Security (React / Next.js)

**XSS Prevention:**
```jsx
// ✅ React escapes by default
<div>{userInput}</div>

// ❌ NEVER do this — bypasses React escaping
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ If HTML needed, sanitize first
import DOMPurify from 'dompurify';
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userInput) }} />
```

**Content Security Policy (Next.js):**
```js
// next.config.js
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'nonce-{nonce}';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
`;
```

**Security Headers (Next.js):**
```js
headers: [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
]
```

---

## 2. Backend Security (Node.js / API routes)

**Input Validation (always server-side):**
```typescript
import { z } from 'zod';

const UserSchema = z.object({
  email: z.string().email(),
  age: z.number().int().min(0).max(120),
});

// Validate before any business logic
const result = UserSchema.safeParse(req.body);
if (!result.success) return res.status(400).json(result.error);
```

**Authentication Middleware:**
```typescript
// Protect all routes by default
export async function middleware(req: NextRequest) {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session && !isPublicRoute(req.nextUrl.pathname)) {
    return NextResponse.redirect('/login');
  }
}
```

**SQL Injection Prevention:**
```typescript
// ✅ Parameterized query
const { data } = await supabase
  .from('users')
  .select('*')
  .eq('id', userId); // Supabase handles parameterization

// ❌ NEVER string concatenation
const query = `SELECT * FROM users WHERE id = '${userId}'`;
```

**Rate Limiting:**
```typescript
import { Ratelimit } from '@upstash/ratelimit';
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'),
});

const { success } = await ratelimit.limit(ip);
if (!success) return new Response('Too Many Requests', { status: 429 });
```

---

## 3. API Security Checklist

- [ ] All endpoints require authentication (except explicitly public ones).
- [ ] Authorization checked per resource (not just per route).
- [ ] Input validated with schema (Zod, Joi, Yup).
- [ ] Rate limiting on all public POST endpoints.
- [ ] Sensitive data never logged (passwords, tokens, PII).
- [ ] Errors return generic messages to client (log specifics server-side).
- [ ] CORS configured to allowlist known domains only.

---

## 4. Mobile Security (React Native)

**Sensitive Data Storage:**
```javascript
// ✅ Use Keychain/Keystore for tokens
import * as SecureStore from 'expo-secure-store';
await SecureStore.setItemAsync('token', accessToken);

// ❌ NEVER AsyncStorage for tokens
await AsyncStorage.setItem('token', accessToken);
```

**Certificate Pinning:**
- Pin the server's TLS certificate to prevent MITM attacks.
- Use `react-native-ssl-pinning` for Expo/RN.

**Key mobile risks:**
- Reverse engineering: obfuscate production builds.
- Cleartext traffic: disable HTTP (force HTTPS).
- Debug logs in production: strip with Babel plugin.
- Screenshot prevention (sensitive screens):
```javascript
import { activateKeepAwake } from 'expo-keep-awake'; // ← NOT for screenshots
// Use FLAG_SECURE on Android for payment/auth screens
```
