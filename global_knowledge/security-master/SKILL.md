---
name: security-master
description: "Complete security audit and scanning toolkit. Use for: DevSecOps audits, OWASP vulnerability analysis, supply chain security (SBOM), SAST code scanning, dependency vulnerability scanning, multi-layer hardening, security blue books, compliance checks (GDPR, HIPAA, SOC2), threat modeling, and security requirement extraction."
---

# Security Master

Complete reference for security auditing, scanning, hardening, and compliance.

---

## 1. Security Audit Framework

**Approach**: Identify, prioritize, remediate.

**Audit Scope:**
- Application layer (OWASP Top 10)
- Infrastructure (cloud config, IAM, network)
- Dependency supply chain
- Secrets management
- Access control (AuthZ/AuthN)

**OWASP Top 10 (2025 edition) — Quick Checklist:**
1. Broken Access Control
2. Cryptographic Failures
3. Injection (SQL, NoSQL, Command)
4. Insecure Design
5. Security Misconfiguration
6. Vulnerable and Outdated Components
7. Identification and Authentication Failures
8. Software and Data Integrity Failures
9. Security Logging and Monitoring Failures
10. Server-Side Request Forgery (SSRF)

---

## 2. SAST (Static Application Security Testing)

Run on every PR/commit before merge:

```bash
# JavaScript/TypeScript
npx semgrep --config=p/javascript

# Python
bandit -r ./src

# General secrets detection
truffleog git --since-commit HEAD~1 --only-verified

# Dependency audit
npm audit --audit-level=high
pip-audit
```

**Key patterns to flag:**
- Hardcoded secrets / API keys in code.
- `eval()` and `exec()` with user input.
- Unparameterized SQL queries.
- Missing authentication middleware on routes.

---

## 3. Dependency Vulnerability Scanning

```bash
# Node.js
npm audit fix
npx snyk test

# Python
safety check -r requirements.txt

# Docker images
trivy image myapp:latest

# Generate SBOM (Software Bill of Materials)
syft myapp:latest -o spdx-json > sbom.json
```

**Key checks:**
- CVE score ≥7 → block merge.
- CRITICAL/HIGH in transitive deps → evaluate and update.
- License compliance: MIT/Apache OK; GPL may require review.

---

## 4. Multi-Layer Hardening

**Application:**
- Validate and sanitize ALL user input (server-side).
- Use parameterized queries everywhere.
- Implement rate limiting on all public endpoints.
- Set security headers: `CSP`, `X-Frame-Options`, `HSTS`, `Referrer-Policy`.

**Infrastructure:**
- Principle of least privilege for IAM roles.
- All storage buckets private by default.
- Enable WAF (Web Application Firewall).
- All traffic over HTTPS/TLS 1.2+.
- Database: no public IP, access only via VPC.

**Secrets:**
- Never commit secrets to git (use `gitguardian` or pre-commit hooks).
- Store in environment variables or a secrets manager (Vault, AWS Secrets Manager).
- Rotate secrets on schedule and after any team member departure.

---

## 5. Compliance Checklist

**GDPR:**
- [ ] Privacy policy outlining data collection.
- [ ] Cookie consent banner for EU users.
- [ ] Right to erasure ("forget me") endpoint.
- [ ] Data breach notification process (<72h to DPA).
- [ ] Data processing agreements with vendors.

**SOC 2 Type II (basic hygiene):**
- [ ] Access logs retained for 12+ months.
- [ ] MFA enforced for all admin access.
- [ ] Automated vulnerability scanning cadence.
- [ ] Incident response plan documented.
- [ ] Regular penetration testing.

---

## 6. Security Blue Book

For sensitive applications, document:
1. **Threat Model**: Who are the attackers? What do they want? How?
2. **Critical Assets**: What must be protected at all costs?
3. **Controls**: What defenses are in place for each threat?
4. **Incident Playbooks**: Step-by-step response for the top 5 incident types.
5. **Security Contacts**: Who to call at 3 AM.
