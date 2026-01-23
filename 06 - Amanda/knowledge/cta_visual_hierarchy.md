# CTA Visual Hierarchy for Amanda

## Overview
This guide provides **technical specifications** for Call-to-Action (CTA) components, button hierarchy, and visual weight implementation. While the brand team defines messaging strategy, you specify the exact visual properties and states.

---

## 1. CTA Hierarchy Fundamentals

### Primary vs. Secondary CTAs

Every page should have **one primary action** and optional secondary actions. Visual hierarchy guides users to the most important action through design properties, not just copy.

#### Primary CTA Characteristics

**Visual Properties**:
- High-contrast background color (from brand palette)
- Bold, prominent styling
- Larger size and visual weight
- More pronounced hover/focus states

**Placement**:
- Hero section (above fold)
- End of key sections
- Sticky header (on scroll)
- Floating action button (mobile)

**Purpose**:
- Main conversion goal
- Highest priority action
- Clear next step

#### Secondary CTA Characteristics

**Visual Properties**:
- No background (ghost button) OR low-contrast background
- Lighter visual weight
- Smaller size (slightly)
- Subtle hover/focus states

**Placement**:
- Below primary CTA
- Sidebar
- Footer
- Supporting sections

**Purpose**:
- Alternative path
- Lower commitment action
- Informational link

---

## 2. Primary CTA Specifications

### Visual Properties

```markdown
## Primary CTA Button - Technical Spec

### Base State
- **Background**: var(--color-primary) 
  - Example: #FF6B35 (from brand palette)
- **Text Color**: #FFFFFF (pure white)
- **Padding**: 16px 32px
- **Font Size**: 18px
- **Font Weight**: 600 (semibold)
- **Line Height**: 1.2
- **Border Radius**: 8px
- **Border**: none
- **Min Width**: 200px (prevents awkward narrow buttons)
- **Box Shadow**: 0 4px 16px rgba(var(--color-primary-rgb), 0.4)
- **Cursor**: pointer
- **Transition**: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

### Hover State
- **Background**: Darken by 10% (use CSS filter or darker shade)
  - Example: #E65F2F
- **Transform**: translateY(-2px) (subtle lift)
- **Box Shadow**: 0 8px 24px rgba(var(--color-primary-rgb), 0.6) (enhanced depth)
- **Transition**: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)

### Focus State (Keyboard Navigation)
- **Outline**: 3px solid var(--color-primary)
- **Outline Offset**: 2px
- **Background**: Same as hover
- **Purpose**: Accessibility for keyboard users

### Active State (Click/Tap)
- **Transform**: translateY(0) (return to base position)
- **Box Shadow**: 0 2px 8px rgba(var(--color-primary-rgb), 0.3) (reduced shadow)
- **Transition**: all 0.1s ease-out (faster for immediate feedback)

### Disabled State
- **Background**: var(--color-neutral-300) (gray)
- **Text Color**: var(--color-neutral-500)
- **Cursor**: not-allowed
- **Opacity**: 0.6
- **Box Shadow**: none
- **Pointer Events**: none
```

### CSS Implementation

```css
.cta-primary {
  /* Base State */
  background: var(--color-primary);
  color: #FFFFFF;
  padding: 16px 32px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  border-radius: 8px;
  border: none;
  min-width: 200px;
  box-shadow: 0 4px 16px rgba(var(--color-primary-rgb), 0.4);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.cta-primary:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(var(--color-primary-rgb), 0.6);
}

.cta-primary:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
  background: var(--color-primary-dark);
}

.cta-primary:active {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(var(--color-primary-rgb), 0.3);
  transition: all 0.1s ease-out;
}

.cta-primary:disabled {
  background: var(--color-neutral-300);
  color: var(--color-neutral-500);
  cursor: not-allowed;
  opacity: 0.6;
  box-shadow: none;
  pointer-events: none;
}
```

### Framer Motion Implementation

```jsx
import { motion } from 'framer-motion';

function PrimaryCTA({ children, onClick, disabled }) {
  return (
    <motion.button
      className="cta-primary"
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        y: -2,
        boxShadow: '0 8px 24px rgba(255, 107, 53, 0.6)'
      }}
      whileTap={{ 
        y: 0,
        boxShadow: '0 2px 8px rgba(255, 107, 53, 0.3)'
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.button>
  );
}
```

---

## 3. Secondary CTA Specifications

### Ghost Button Style (Recommended)

```markdown
## Secondary CTA Button - Technical Spec (Ghost Style)

### Base State
- **Background**: transparent
- **Border**: 2px solid rgba(255, 255, 255, 0.5)
  - Note: Adjust opacity based on background (0.5 for dark, 0.3 for light)
- **Text Color**: #FFFFFF (or var(--color-text) for light backgrounds)
- **Padding**: 14px 30px (slightly smaller than primary)
- **Font Size**: 16px
- **Font Weight**: 400 (regular)
- **Line Height**: 1.2
- **Border Radius**: 8px
- **Min Width**: 180px
- **Box Shadow**: none
- **Cursor**: pointer
- **Transition**: all 0.3s ease-out

### Hover State
- **Background**: rgba(255, 255, 255, 0.1)
- **Border**: 2px solid rgba(255, 255, 255, 0.8) (increased opacity)
- **Transform**: none (no lift for secondary)
- **Transition**: all 0.3s ease-out

### Focus State
- **Outline**: 2px solid rgba(255, 255, 255, 0.8)
- **Outline Offset**: 2px
- **Background**: rgba(255, 255, 255, 0.1)

### Active State
- **Background**: rgba(255, 255, 255, 0.15)
- **Border**: 2px solid rgba(255, 255, 255, 1)
- **Transition**: all 0.1s ease-out
```

### CSS Implementation (Ghost)

```css
.cta-secondary {
  /* Base State */
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.5);
  color: #FFFFFF;
  padding: 14px 30px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  border-radius: 8px;
  min-width: 180px;
  box-shadow: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.cta-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.8);
}

.cta-secondary:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.8);
  outline-offset: 2px;
  background: rgba(255, 255, 255, 0.1);
}

.cta-secondary:active {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 1);
  transition: all 0.1s ease-out;
}
```

### Low-Contrast Style (Alternative)

```css
.cta-secondary-alt {
  /* Base State */
  background: var(--color-neutral-200);
  border: none;
  color: var(--color-text);
  padding: 14px 30px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 8px;
  min-width: 180px;
  cursor: pointer;
  transition: all 0.3s ease-out;
}

.cta-secondary-alt:hover {
  background: var(--color-neutral-300);
}
```

---

## 4. CTA Layout Patterns

### Side-by-Side CTAs (Hero Section)

```markdown
## Hero Section - CTA Layout

### Container
- **Display**: flex
- **Gap**: 16px
- **Justify Content**: flex-start (left-aligned) OR center (centered)
- **Flex Wrap**: wrap (for mobile responsiveness)

### Button Order
1. Primary CTA (left)
2. Secondary CTA (right)

### Responsive Behavior
```css
.cta-container {
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  flex-wrap: wrap;
}

@media (max-width: 640px) {
  .cta-container {
    flex-direction: column; /* Stack vertically on mobile */
    align-items: stretch; /* Full width buttons */
  }
  
  .cta-primary,
  .cta-secondary {
    width: 100%; /* Full width on mobile */
    min-width: auto;
  }
}
```
```

### Stacked CTAs (Narrow Sections)

```markdown
## Sidebar - CTA Layout

### Container
- **Display**: flex
- **Flex Direction**: column
- **Gap**: 12px
- **Align Items**: stretch (full width)

### Button Order
1. Primary CTA (top)
2. Secondary CTA (below)

### Implementation
```css
.sidebar-cta-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: stretch;
}

.sidebar-cta-container .cta-primary,
.sidebar-cta-container .cta-secondary {
  width: 100%;
}
```
```

---

## 5. Component-Level Copy Guidelines

### Copy Length Limits

**Primary CTA**:
- **Ideal**: 2-3 words
- **Maximum**: 4 words
- **Examples**: "Start Your Journey", "Book Now", "Get Started Free"

**Secondary CTA**:
- **Ideal**: 2 words
- **Maximum**: 3 words
- **Examples**: "Learn More", "View Pricing", "Contact Us"

### Copy Specification Format

```markdown
## Hero Section - CTA Copy

### Primary CTA
- **Text**: "Start Your Journey"
- **Character Count**: 18 (within limit)
- **Rationale**: Action-oriented, emotional, clear next step

### Secondary CTA
- **Text**: "View Fleet"
- **Character Count**: 10 (within limit)
- **Rationale**: Informational, lower commitment, specific
```

---

## 6. Accessibility Specifications

### Keyboard Navigation

```markdown
## CTA Accessibility - Keyboard

### Tab Order
1. Primary CTA receives focus first
2. Secondary CTA receives focus second
3. Focus visible with outline (3px solid)

### Focus Indicators
- **Primary**: 3px solid var(--color-primary), offset 2px
- **Secondary**: 2px solid rgba(255, 255, 255, 0.8), offset 2px

### Keyboard Actions
- **Enter/Space**: Activates button
- **Tab**: Moves to next focusable element
- **Shift+Tab**: Moves to previous focusable element
```

### Screen Reader Support

```markdown
## CTA Accessibility - Screen Readers

### ARIA Labels
- Use when button text is not descriptive enough
- Example: "Learn More" → aria-label="Learn more about our services"

### Implementation
```html
<button class="cta-primary">
  Start Your Journey
</button>

<button class="cta-secondary" aria-label="Learn more about our RV fleet">
  View Fleet
</button>
```

### Loading States
```html
<button class="cta-primary" aria-busy="true" disabled>
  <span aria-hidden="true">Loading...</span>
  <span class="sr-only">Processing your request</span>
</button>
```
```

### Color Contrast

```markdown
## CTA Accessibility - Contrast

### WCAG AA Requirements
- **Normal text** (18px): Contrast ratio ≥ 4.5:1
- **Large text** (24px or 18px bold): Contrast ratio ≥ 3:1

### Primary CTA
- **Background**: #FF6B35
- **Text**: #FFFFFF
- **Contrast Ratio**: 4.8:1 ✅ (passes WCAG AA)

### Secondary CTA (Ghost)
- **Border**: rgba(255, 255, 255, 0.5)
- **Text**: #FFFFFF
- **Background**: Dark image/video
- **Contrast Ratio**: Depends on background (ensure ≥ 4.5:1)

### Testing
- Use browser DevTools Accessibility panel
- Test with contrast checker tools
- Verify on actual devices
```

---

## 7. Loading & Success States

### Loading State

```markdown
## Primary CTA - Loading State

### Visual Changes
- **Text**: "Loading..." or spinner icon
- **Cursor**: wait
- **Disabled**: true
- **Opacity**: 0.8
- **Animation**: Spinner rotation (if using icon)

### Implementation (CSS)
```css
.cta-primary.loading {
  cursor: wait;
  opacity: 0.8;
  pointer-events: none;
}

.cta-primary.loading::after {
  content: '';
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: 8px;
  border: 2px solid #FFFFFF;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

### Implementation (Framer Motion)
```jsx
function PrimaryCTA({ children, onClick, isLoading }) {
  return (
    <motion.button
      className="cta-primary"
      onClick={onClick}
      disabled={isLoading}
      animate={{ opacity: isLoading ? 0.8 : 1 }}
    >
      {isLoading ? (
        <>
          Loading...
          <motion.span
            style={{ display: 'inline-block', marginLeft: 8 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }}
          >
            ⟳
          </motion.span>
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}
```
```

### Success State

```markdown
## Primary CTA - Success State

### Visual Changes
- **Background**: var(--color-success) (green)
- **Text**: "Success!" or checkmark icon
- **Duration**: 2 seconds, then revert or redirect

### Implementation (Framer Motion)
```jsx
function PrimaryCTA({ children, onClick, isSuccess }) {
  return (
    <motion.button
      className="cta-primary"
      animate={{
        background: isSuccess ? 'var(--color-success)' : 'var(--color-primary)'
      }}
      transition={{ duration: 0.3 }}
    >
      {isSuccess ? (
        <>
          ✓ Success!
        </>
      ) : (
        children
      )}
    </motion.button>
  );
}
```
```

---

## 8. Responsive Specifications

### Mobile Adjustments

```markdown
## CTA Responsive Behavior

### Desktop (≥768px)
- **Primary CTA**: 
  - Padding: 16px 32px
  - Font Size: 18px
  - Min Width: 200px
- **Secondary CTA**:
  - Padding: 14px 30px
  - Font Size: 16px
  - Min Width: 180px

### Mobile (<768px)
- **Primary CTA**:
  - Padding: 14px 24px (reduced)
  - Font Size: 16px (reduced)
  - Width: 100% (full width)
  - Min Width: auto
- **Secondary CTA**:
  - Padding: 12px 20px (reduced)
  - Font Size: 14px (reduced)
  - Width: 100% (full width)
  - Min Width: auto

### Touch Targets
- **Minimum size**: 44x44px (Apple HIG, WCAG)
- **Padding**: Ensure button height ≥ 44px on mobile

### Implementation
```css
@media (max-width: 767px) {
  .cta-primary {
    padding: 14px 24px;
    font-size: 16px;
    width: 100%;
    min-width: auto;
  }
  
  .cta-secondary {
    padding: 12px 20px;
    font-size: 14px;
    width: 100%;
    min-width: auto;
  }
}
```
```

---

## Amanda's CTA Visual Hierarchy Mandate

When specifying CTA components, you MUST:

1. **Define all states**
   - Base, hover, focus, active, disabled
   - Loading and success states
   - Exact CSS properties for each

2. **Specify visual hierarchy**
   - Primary vs. secondary styling differences
   - Visual weight through size, color, shadow
   - Layout patterns (side-by-side, stacked)

3. **Include accessibility specs**
   - Keyboard navigation and focus indicators
   - Screen reader support (ARIA labels)
   - Color contrast ratios (WCAG AA)
   - Touch target sizes (≥44x44px)

4. **Document responsive behavior**
   - Desktop vs. mobile sizing
   - Layout changes at breakpoints
   - Touch-friendly adjustments

5. **Provide implementation code**
   - CSS for all states
   - Framer Motion variants (if using)
   - HTML structure with ARIA attributes

6. **Reference brand tokens**
   - Use var(--color-primary) not hardcoded colors
   - Link to design_system.json
   - Note when brand team defines colors

---

**Remember**: You specify the exact visual properties and technical implementation of CTAs. The brand team defines the messaging strategy and copy; you translate that into pixel-perfect, accessible, and performant button components.
