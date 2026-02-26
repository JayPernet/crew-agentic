---
name: vercel-deployment
description: "Deploy applications to Vercel. Use when deploying to production, creating preview deployments, configuring Next.js hosting, or requesting a deployment link. Covers best practices, environment variables, Edge vs Serverless, and claimable deployments."
risk: safe
---

# Vercel Deployment

Expert knowledge for deploying to Vercel with Next.js and any supported framework.

## When to Use

- Deploying to production on Vercel
- Creating preview deployments
- Configuring environment variables per environment
- Optimizing builds and reducing cold starts
- Getting a live preview URL or claimable deployment link

---

## Best Practices

1. **Environment Variables**: Use different values for `development`, `preview`, and `production`. Never use `NEXT_PUBLIC_` for secrets.
2. **Edge vs Serverless**: Use Edge for low-latency, stateless operations; use Serverless for Node.js-specific APIs.
3. **Build Optimization**: Minimize bundle size, use `next/dynamic` for code splitting, and leverage build cache.
4. **Preview Deployments**: Always test on preview before promoting to production.
5. **Monitoring**: Set up Vercel Analytics and Sentry for error tracking.

## ⚠️ Common Pitfalls

| Issue | Severity | Solution |
|-------|----------|----------|
| `NEXT_PUBLIC_` exposing secrets | critical | Only use for truly public values |
| Preview using production DB | high | Separate DB per environment |
| Serverless function too large | high | Tree-shake and reduce deps |
| Edge runtime missing Node.js APIs | high | Check compatibility first |
| Stale data after deploy | medium | Configure `revalidate` / ISR |

---

## Claimable Deployment (No Auth Required)

For one-click deployments without authentication, use the deploy script:

```bash
bash /mnt/skills/user/vercel-deploy/scripts/deploy.sh [path]
```

**Examples:**
```bash
# Deploy current directory
bash /mnt/skills/user/vercel-deploy/scripts/deploy.sh

# Deploy specific project
bash /mnt/skills/user/vercel-deploy/scripts/deploy.sh /path/to/project
```

**Output:**
```
✓ Deployment successful!

Preview URL: https://skill-deploy-abc123.vercel.app
Claim URL:   https://vercel.com/claim-deployment?code=...
```

Always present both URLs to the user. The Claim URL allows them to transfer the deployment to their Vercel account.

## Related Skills
Works well with: `nextjs-app-router-patterns`, `nextjs-supabase-auth`
