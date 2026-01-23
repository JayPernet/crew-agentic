# Splitting.js Guide for Amanda

## What is Splitting.js?
Splitting.js divides text and elements into characters, words, and lines for granular animation control. It's essential for creating premium text reveal effects that animate letter-by-letter or word-by-word.

## Official Resources
- **Website**: https://splitting.js.org/
- **GitHub**: https://github.com/shshaw/Splitting

## Why Splitting.js

### Benefits
- **Text Animation**: Animate individual characters, words, lines
- **Lightweight**: ~2KB gzipped
- **Framework Agnostic**: Works with vanilla JS, React, Vue, etc.
- **Auto Layout**: Preserves original layout while splitting
- **CSS Variables**: Creates CSS custom properties for animations

## Installation

```bash
npm install splitting
```

```javascript
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';

// Split all elements with data-splitting attribute
Splitting();

// Split specific elements
Splitting({ target: '.split-text' });
```

## Core Splitting Types

### Characters
```html
<h1 data-splitting>Hello World</h1>
```

```javascript
Splitting();
```

Result:
```html
<h1 data-splitting class="splitting">
  <span class="word" data-word="Hello">
    <span class="char" data-char="H">H</span>
    <span class="char" data-char="e">e</span>
    ...
  </span>
  ...
</h1>
```

### Words
```html
<p data-splitting="words">Premium text effect</p>
```

### Lines
```html
<p data-splitting="lines">
  Multi-line text
  gets split by lines
</p>
```

### Grid (Cells)
```html
<div data-splitting="cells" data-splitting-rows="3" data-splitting-cols="3">
  Will be split into 9 cells
</div>
```

## Amanda's Premium Patterns

### Pattern 1: Text Reveal (Character by Character)
```html
<h1 class="reveal-text" data-splitting>
  Premium Experience
</h1>
```

```javascript
import Splitting from 'splitting';
import gsap from 'gsap';

Splitting();

gsap.from('.reveal-text .char', {
  opacity: 0,
  y: 50,
  stagger: 0.05,
  duration: 0.6,
  ease: 'back.out(1.7)'
});
```

```css
.reveal-text .char {
  display: inline-block;
  opacity: 0;
}
```

### Pattern 2: Word Fade In
```html
<p class="fade-words" data-splitting="words">
  Each word fades in sequentially for dramatic effect
</p>
```

```javascript
Splitting();

gsap.from('.fade-words .word', {
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.8,
  ease: 'power3.out'
});
```

### Pattern 3: Line by Line Reveal
```html
<div class="reveal-lines" data-splitting="lines">
  First line appears
  Then the second line
  Finally the third line
</div>
```

```javascript
Splitting();

gsap.from('.reveal-lines .line', {
  opacity: 0,
  x: -50,
  stagger: 0.2,
  duration: 1,
  ease: 'power2.out'
});
```

### Pattern 4: Scramble/Glitch Effect
```html
<h2 class="glitch-text" data-splitting>CYBERPUNK</h2>
```

```javascript
Splitting();

const chars = document.querySelectorAll('.glitch-text .char');

chars.forEach((char, i) => {
  gsap.from(char, {
    opacity: 0,
    x: gsap.utils.random(-100, 100),
    y: gsap.utils.random(-100, 100),
    rotation: gsap.utils.random(-180, 180),
    delay: i * 0.02,
    duration: 0.6,
    ease: 'back.out(2)'
  });
});
```

### Pattern 5: Scroll-Triggered Text Reveal
```html
<h3 class="scroll-text" data-splitting>
  Appears on scroll
</h3>
```

```javascript
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

Splitting();

gsap.from('.scroll-text .char', {
  opacity: 0,
  y: 30,
  stagger: 0.03,
  duration: 0.5,
  scrollTrigger: {
    trigger: '.scroll-text',
    start: 'top 80%'
  }
});
```

### Pattern 6: Rotating Char Effect
```html
<h1 class="rotate-text" data-splitting>INNOVATION</h1>
```

```javascript
Splitting();

gsap.from('.rotate-text .char', {
  rotationX: -90,
  opacity: 0,
  stagger: 0.05,
  duration: 0.8,
  ease: 'back.out(1.4)',
  transformOrigin: 'top center'
});
```

```css
.rotate-text {
  perspective: 1000px;
}

.rotate-text .char {
  display: inline-block;
  transform-origin: top center;
}
```

### Pattern 7: Framer Motion + Splitting
```jsx
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Splitting from 'splitting';

function AnimatedText({ children }) {
  const textRef = useRef(null);
  
  useEffect(() => {
    Splitting({ target: textRef.current });
  }, []);
  
  return (
    <motion.h1
      ref={textRef}
      data-splitting
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.05 }
        }
      }}
    >
      {children}
    </motion.h1>
  );
}
```

## CSS Cascade Variables

Splitting.js creates CSS variables for each element:

```css
/* For characters */
.char {
  /* --char-index: 0, 1, 2, ... */
  animation-delay: calc(var(--char-index) * 50ms);
}

/* For words */
.word {
  /* --word-index: 0, 1, 2, ... */
  animation-delay: calc(var(--word-index) * 100ms);
}

/* Pure CSS animations with Splitting */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal-text .char {
  animation: fadeInUp 0.6s both;
  animation-delay: calc(var(--char-index) * 50ms);
}
```

## Component Spec Example

```markdown
## Hero Section - Title Animation

### Text Splitting
- **Library**: Splitting.js
- **Type**: Characters
- **Element**: `<h1>` with class `.hero-title`

### Animation Sequence (GSAP)
1. Split text into characters using Splitting.js
2. Initial state: opacity 0, translateY(50px), rotateX(-90deg)
3. Animate in with stagger:
   - Stagger: 0.04s per character
   - Duration: 0.8s
   - Easing: back.out(1.7)
   - Transform origin: top center

### Implementation
```html
<h1 class="hero-title" data-splitting>
  Transform Your Business
</h1>
```

```javascript
import Splitting from 'splitting';
import gsap from 'gsap';

Splitting();

gsap.from('.hero-title .char', {
  opacity: 0,
  y: 50,
  rotateX: -90,
  stagger: 0.04,
  duration: 0.8,
  ease: 'back.out(1.7)',
  transformOrigin: 'top center'
});
```

```css
.hero-title {
  perspective: 1000px;
}

.hero-title .char {
  display: inline-block;
  transform-origin: top center;
}
```
```

## Performance Best Practices

### 1. Split Once, Reuse
```javascript
// ✅ GOOD - Split on mount
useEffect(() => {
  Splitting({ target: '.text' });
}, []);

// ❌ AVOID - Re-splitting unnecessarily
```

### 2. Limit Scope
```javascript
// Only split what you need to animate
Splitting({ target: '.animated-text', by: 'chars' });

// Don't split entire page
```

### 3. Clean Up
```javascript
useEffect(() => {
  const result = Splitting({ target: element });
  
  return () => {
    // Revert if needed
    result.forEach(split => split.revert?.());
  };
}, []);
```

## Integration with Design System

```markdown
## Typography Animations Spec

### Text Reveal Variants

1. **Fade In Up (Default)**
   ```javascript
   Splitting();
   gsap.from('.text .char', {
     opacity: 0,
     y: 20,
     stagger: var(--animation-stagger-tight),
     duration: var(--animation-timing-normal)
   });
   ```

2. **Glitch Entry**
   ```javascript
   gsap.from('.glitch .char', {
     opacity: 0,
     x: 'random(-50, 50)',
     y: 'random(-50, 50)',
     stagger: 0.02,
     duration: 0.6
   });
   ```

3. **Rotate X**
   ```javascript
   gsap.from('.rotate .char', {
     rotateX: -90,
     opacity: 0,
     stagger: 0.05,
     duration: 0.8
   });
   ```
```

## Amanda's Splitting.js Mandate

When specifying text animations with Splitting:

1. **Specify splitting type**: chars, words, lines, or cells
2. **Define initial state**: opacity, position, rotation before animation
3. **Document stagger timing**: Exact delay between elements
4. **Specify easing**: Which easing curve to use
5. **Transform origin**: Where rotation/scale originates from
6. **Cleanup**: Mention if splitting needs reverting

## Use Cases

| Use Case | Pattern |
|----------|---------|
| **Hero title reveal** | Char splitting + stagger fadeIn |
| **Scramble/glitch** | Char splitting + random positions |
| **Line-by-line quote** | Line splitting + sequential reveal |
| **Word emphasize** | Word splitting + scale on hover |
| **Matrix effect** | Char splitting + cascading animation |
| **Typewriter** | Char splitting + sequential appearance |

## Resources
- **Codepen Examples**: https://codepen.io/tag/splitting
- **Official Demos**: https://splitting.js.org/

---

**Remember**: Splitting.js is the **FOUNDATION** for premium text animations. It does one thing perfectly: divides text into animatable pieces. Pair it with GSAP or Framer Motion for stunning results that feel hand-crafted and intentional.
