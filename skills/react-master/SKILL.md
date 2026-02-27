---
name: react-master
description: "Complete React toolkit. Use for: React 19+ patterns, hooks, performance optimization (Suspense, lazy loading), modern state management (TanStack Query, Zustand, Jotai), UI patterns (loading/error states), component conversion from Stitch designs, React modernization (class → hooks, concurrent mode), and TypeScript best practices."
---

# React Master

Complete reference for modern React development.

---

## 1. Core Patterns (React 19+)

**Hooks principles:**
- `useState` for local UI state.
- `useReducer` for complex state with multiple sub-values.
- `useContext` for cross-cutting concerns (theme, auth) — not for server data.
- `useMemo`/`useCallback` only when you've measured a real perf problem.
- Custom hooks for reusable stateful logic.

**Composition over configuration:**
```tsx
// ✅ Composable components
<Dialog>
  <DialogHeader>Title</DialogHeader>
  <DialogContent>Body</DialogContent>
  <DialogFooter><Button>Save</Button></DialogFooter>
</Dialog>

// ❌ Prop drilling mess
<Dialog title="Title" content="Body" onSave={fn} showFooter={true} />
```

---

## 2. Performance Optimization

**Suspense-first data fetching (Next.js App Router):**
```tsx
// Server Component (default) — no useEffect, no useState
async function UserProfile({ id }: { id: string }) {
  const user = await getUser(id); // Direct async call
  return <div>{user.name}</div>;
}

// Wrap in Suspense for streaming
<Suspense fallback={<Skeleton />}>
  <UserProfile id={userId} />
</Suspense>
```

**Code splitting:**
```tsx
const HeavyChart = dynamic(() => import('./Chart'), {
  loading: () => <Skeleton />,
  ssr: false, // Client-only
});
```

**Key performance rules (Vercel Engineering):**
- Minimize `use client` directives — push them to leaf nodes.
- Prefetch route data with `<Link prefetch>`.
- Use `next/image` with `priority` for LCP elements.
- Move data fetching to server components.

---

## 3. State Management

| Need | Tool | When |
|------|------|------|
| Server data (cache + sync) | **TanStack Query v5** | API calls, mutations |
| Global UI state (small) | **Zustand** | Theme, sidebar, user prefs |
| Atomic UI state | **Jotai** | Complex derived state |
| Form state | **React Hook Form** | Any form |
| Local UI state | `useState` | Component-level only |

```typescript
// TanStack Query v5 pattern
const { data, isLoading, error } = useQuery({
  queryKey: ['user', userId],
  queryFn: () => fetchUser(userId),
  staleTime: 5 * 60 * 1000, // 5 min
});
```

---

## 4. UI Patterns (Loading / Error / Empty States)

```tsx
// Unified data display pattern
function DataDisplay({ id }: { id: string }) {
  const { data, isLoading, error } = useQuery({ queryKey: ['data', id], queryFn: () => fetchData(id) });

  if (isLoading) return <Skeleton className="h-8 w-full" />;
  if (error) return <ErrorBanner message="Failed to load" onRetry={() => refetch()} />;
  if (!data?.length) return <EmptyState message="No items found" />;
  
  return <DataList items={data} />;
}
```

---

## 5. TypeScript Best Practices

```typescript
// Prefer interfaces for component props
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
}

// Use discriminated unions for state
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };
```

---

## 6. React Modernization (Legacy → Modern)

**Class components → Function components + hooks:**
```tsx
// Old
class Counter extends React.Component {
  state = { count: 0 };
  render() { return <button onClick={() => this.setState({ count: this.state.count + 1 })}>{this.state.count}</button>; }
}

// New
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

**Migration checklist:**
- [ ] Replace `componentDidMount` → `useEffect(fn, [])`.
- [ ] Replace `componentDidUpdate` → `useEffect(fn, [deps])`.
- [ ] Replace `componentWillUnmount` → `useEffect` cleanup function.
- [ ] Replace `this.props` → destructured function params.
- [ ] Replace HOCs → custom hooks where possible.

---

## 7. Stitch → React Component Conversion

When converting Stitch designs to React:
1. Analyze the Stitch screenshot for component boundaries (header, card, list).
2. Map Stitch color/spacing tokens to Tailwind classes or CSS variables.
3. Create a standalone component file per visual block.
4. Add prop types for all dynamic data.
5. Implement loading and error states.
6. Add responsive breakpoints (mobile-first).
