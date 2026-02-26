---
name: frontend-master
description: "Complete frontend development and UI/UX toolkit. Use for: building React + TypeScript components, Suspense-first data fetching, feature-based architecture, design systems (50+ styles, palettes, font pairings), wireframes, visual validation & compliance review, MUI v7, TanStack Router, Tailwind CSS, production-grade interfaces. Covers aesthetics, craft, and code standards."
---

# Frontend Master

Complete reference for frontend development, UI/UX design, and visual standards.

---

## 1. Core Development Standards

**Architecture:**
- **Feature-based structure**: `/features/auth/`, `/features/dashboard/` — not `/components/`, `/pages/`.
- Global-only items in `/components/` (dumb/shared components) and `/lib/`.
- Suspense-first data fetching: prefer Server Components, push `use client` to leaf nodes.
- Lazy-load heavy components with `next/dynamic`.

**TypeScript:**
- Strict mode always (`"strict": true`).
- Prefer `interface` for props, `type` for unions/mapped types.
- `never` catch-all in discriminated unions.

**Code quality rules:**
- Max 1 `useEffect` per component.
- Components max ~150 lines; extract if bigger.
- No `any`. Use `unknown` + type narrowing.

---

## 2. Design System Fundamentals

**Design tokens (8pt grid):**
```css
:root {
  /* Spacing: multiples of 8 */
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  
  /* Typography */
  --font-display: 'Inter', system-ui;
  --font-size-base: 16px;
  --line-height-base: 1.5;
}
```

**Color system:**
- Primary palette: 50-950 shades.
- Semantic tokens: `--color-background`, `--color-surface`, `--color-text-primary`, `--color-accent`.
- Never use raw color values in components; always use tokens.

---

## 3. UI/UX Design Capabilities

**Styles library** (50+ supported patterns):
- Glassmorphism, Neumorphism, Brutalism, Minimal, Dark Dashboard, Cyberpunk, Editorial, Bento Grid, etc.

**Typography pairings** (top combos):
- `Inter + DM Serif` — Modern & editorial
- `Syne + Outfit` — Bold tech
- `Geist + Lora` — Developer-friendly + warmth
- `Plus Jakarta Sans + Playfair Display` — Premium SaaS

**Color palettes** (21 curated):
- midnight-noir, ocean-depth, aurora, earth-tones, neon-cyber, pastel-soft, and more.

**Layout patterns:**
- Bento Grid, Masonry, Card Grid, Split Hero, Full-Bleed Image, 3-Column Dashboard.

---

## 4. Visual Validation Checklist

Before marking any UI as complete, verify:
- [ ] Consistent spacing (multiples of 8px).
- [ ] Color contrast: text on background passes WCAG AA (4.5:1).
- [ ] All interactive elements have `:hover`, `:focus`, `:active` states.
- [ ] Responsive: tested at 375px (mobile), 768px (tablet), 1280px (desktop).
- [ ] Loading states present for all async content.
- [ ] Error states present for all user actions.
- [ ] Empty states present (no "undefined" or blank screens).
- [ ] Typography scale is consistent (don't mix arbitrary font sizes).

---

## 5. Web Interface Guidelines Compliance

**Accessibility baseline:**
- All images have `alt` text.
- Forms have associated `<label>` for every input.
- Focus order is logical (follows DOM order).
- No color as the only means of conveying information.
- Keyboard navigable (no mouse-only interactions).

**Performance baseline:**
- LCP < 2.5s.
- No layout shifts above CLS 0.1.
- First interaction < 200ms.
- Images: WebP format, responsive `srcset`, lazy loaded below fold.

---

## 6. Design-to-Code Workflow

1. **Analyze the design**: Identify component boundaries, spacing, colors.
2. **Extract tokens**: Map figma/stitch colors/spacing to CSS variables.
3. **Build atomic first**: Create `<Button>`, `<Input>`, `<Card>` before composing pages.
4. **Compose layouts**: Assemble page from atomic components.
5. **Add interactivity**: Micro-animations, hover states, transitions.
6. **Validate**: Run visual checklist from Section 4.

**Animation system (Framer Motion):**
```tsx
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' }
};

<motion.div {...fadeUp}>Content</motion.div>
```
