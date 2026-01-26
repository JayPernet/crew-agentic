# Framer Motion Guide for Amanda

## What is Framer Motion?
Framer Motion is a production-ready motion library for React. It's the most natural way to add premium animations to React applications, with a declarative API that feels native to React's component model.

## Official Documentation
- **Website**: https://www.framer.com/motion/
- **Docs**: https://www.framer.com/motion/introduction/
- **Examples**: https://www.framer.com/motion/examples/

## Why Framer Motion for React Projects

### Benefits
- **React-First**: Built specifically for React, feels natural with components
- **Declarative**: Animations defined in JSX, not imperative code
- **Layout Animations**: Automatic animations when layout changes
- **Gestures**: Built-in drag, pan, hover, tap, inView detection
- **Variants**: Reusable animation states
- **Server Components**: Works with Next.js 13+ App Router
- **TypeScript**: Full type safety

## Core Concepts

### 1. Motion Components
Any HTML/SVG element can become animatable:

```jsx
import { motion } from 'framer-motion';

// Animated div
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Hello!
</motion.div>

// Works with any element
<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  Click Me
</motion.button>
```

### 2. Variants (Reusable Animations)
```jsx
const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  },
  hover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    transition: { duration: 0.3 }
  }
};

// Use in component
<motion.div
  variants={cardVariants}
  initial="hidden"
  animate="visible"
  whileHover="hover"
>
  Card Content
</motion.div>
```

### 3. Stagger Children
```jsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,  // Delay between children
      delayChildren: 0.3     // Wait before starting children
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

<motion.ul variants={container} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.li key={item.id} variants={item}>
      {item.text}
    </motion.li>
  ))}
</motion.ul>
```

### 4. Gestures
```jsx
<motion.div
  drag                      // Draggable
  dragConstraints={{         // Limit drag area
    left: -100,
    right: 100,
    top: -100,
    bottom: 100
  }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  whileDrag={{ scale: 1.2 }}
>
  Drag me!
</motion.div>
```

### 5. Scroll Animations (useInView)
```jsx
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function AnimatedSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      Appears when scrolled into view
    </motion.div>
  );
}
```

### 6. Layout Animations
```jsx
// Automatically animates layout changes
<motion.div layout>
  {expanded && <motion.div layout>Extra content</motion.div>}
</motion.div>

// Shared element transitions
<motion.div layoutId="card-1">
  {/* Smoothly morphs when layoutId moves between components */}
</motion.div>
```

## Amanda's Premium Patterns

### Pattern 1: Page Entrance Animation
```jsx
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
  }
};

export default function Page() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h1 variants={childVariants}>Title</motion.h1>
      <motion.p variants={childVariants}>Content</motion.p>
    </motion.div>
  );
}
```

### Pattern 2: Premium Button
```jsx
const buttonVariants = {
  rest: {
    scale: 1,
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  tap: {
    scale: 0.95,
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
  }
};

<motion.button
  variants={buttonVariants}
  initial="rest"
  whileHover="hover"
  whileTap="tap"
>
  <motion.span
    initial={{ x: 0 }}
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
  >
    Click Me →
  </motion.span>
</motion.button>
```

### Pattern 3: Card Grid with Stagger
```jsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const card = {
  hidden: { 
    y: 60, 
    opacity: 0,
    scale: 0.9
  },
  visible: { 
    y: 0, 
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 15,
      stiffness: 100
    }
  }
};

<motion.div 
  className="grid"
  variants={container}
  initial="hidden"
  animate="visible"
>
  {cards.map(item => (
    <motion.div 
      key={item.id} 
      variants={card}
      whileHover={{ y: -8 }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Pattern 4: Modal/Dialog
```jsx
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: -50
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 20,
      stiffness: 300
    }
  }
};

<AnimatePresence>
  {isOpen && (
    <motion.div
      className="backdrop"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="modal"
        variants={modalVariants}
        onClick={e => e.stopPropagation()}
      >
        Modal Content
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
```

### Pattern 5: Number Counter
```jsx
import { motion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

function Counter({ value }) {
  const spring = useSpring(0, { damping: 50, stiffness: 100 });
  const display = useTransform(spring, current => Math.round(current));
  
  useEffect(() => {
    spring.set(value);
  }, [spring, value]);
  
  return <motion.span>{display}</motion.span>;
}

// Usage
<Counter value={1247} />
```

### Pattern 6: Scroll Progress Bar
```jsx
import { motion, useScroll } from 'framer-motion';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="progress-bar"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
```

### Pattern 7: Morphing Layout
```jsx
function Card({ isExpanded, onClick }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      initial={{ borderRadius: 8 }}
      animate={{ borderRadius: isExpanded ? 0 : 8 }}
    >
      <motion.h2 layout>Title</motion.h2>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Expanded content
        </motion.div>
      )}
    </motion.div>
  );
}
```

## Spring Physics
```jsx
// Bouncy, natural feeling
<motion.div
  animate={{ x: 100 }}
  transition={{
    type: 'spring',
    damping: 10,      // Lower = more bounce
    stiffness: 100    // Higher = faster
  }}
/>

// Smooth, controlled
<motion.div
  animate={{ x: 100 }}
  transition={{
    type: 'spring',
    damping: 20,
    stiffness: 300
  }}
/>
```

## Integration with Design System

### In Component Specs
```markdown
## Card Component

### Framer Motion Animations

#### Initial State (variants)
```tsx
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: var(--animation-timing-normal),
      ease: 'easeOut'
    }
  }
}
```

#### Hover State
```tsx
whileHover={{
  y: -8,
  boxShadow: var(--shadow-lg),
  transition: { duration: 0.2 }
}}
```

#### Implementation
```tsx
<motion.div
  variants={cardVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  whileHover={{ y: -8 }}
>
  Card content
</motion.div>
```
```

## Performance Best Practices

### 1. Use Transform & Opacity
```jsx
// ✅ GOOD - GPU accelerated
<motion.div animate={{ x: 100, opacity: 0.5 }} />

// ❌ AVOID - Triggers layout
<motion.div animate={{ left: 100, width: 200 }} />
```

### 2. Use layoutId Sparingly
```jsx
// Only for intentional shared element transitions
<motion.div layoutId="unique-id">...</motion.div>
```

### 3. Reduce Motion Preference
```jsx
import { useReducedMotion } from 'framer-motion';

function Component() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
    >
      Content
    </motion.div>
  );
}
```

## Amanda's Framer Motion Mandate

When specifying Framer Motion animations:

1. **Use variants for reusability**: Define animation states as variants objects
2. **Specify exact transition values**: Don't say "smooth" - say `damping: 20, stiffness: 300`
3. **Document gesture interactions**: whileHover, whileTap, whileDrag behaviors
4. **Leverage stagger for lists**: Use staggerChildren for premium reveals
5. **Use layout prop wisely**: Only when you want automatic layout animations
6. **Respect reduced motion**: Always consider accessibility

## Common Use Cases

| Use Case | Pattern |
|----------|---------|
| **Page transitions** | Variants + AnimatePresence |
| **Scroll reveals** | useInView hook |
| **Button interactions** | whileHover + whileTap |
| **List animations** | Stagger children |
| **Modal/Dialog** | AnimatePresence + backdrop |
| **Drag & drop** | drag prop + dragConstraints |
| **Number counters** | useSpring + useTransform |
| **Progress indicators** | useScroll hooks |

## Resources
- **Official Examples**: https://www.framer.com/motion/examples/
- **Motion One**: https://motion.dev/ (Web Animations API version)
- **Community Recipes**: https://motion.dev/docs/recipes

---

**Remember**: Framer Motion is the **React-native way** to create premium animations. It feels natural in component-based architecture and handles complex interactions elegantly. Use it for React/Next.js projects where you want declarative, maintainable animations.
