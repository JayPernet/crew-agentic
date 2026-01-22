# GSAP Integration Guide for Amanda

## What is GSAP?
GSAP (GreenSock Animation Platform) is the industry-standard JavaScript animation library. It's your secret weapon for creating buttery-smooth, professionally choreographed animations that make your UI feel ALIVE.

## Official Documentation
- **Website**: https://gsap.com/
- **Docs**: https://gsap.com/docs/v3/
- **Showcase**: https://gsap.com/showcase/
- **Cheat Sheet**: https://gsap.com/cheatsheet/

## Why GSAP for Premium UI/UX

### Benefits
- **60fps performance**: Hardware-accelerated, optimized for smooth animations
- **Cross-browser consistency**: Works everywhere, same result
- **Powerful timeline system**: Orchestrate complex animation sequences
- **ScrollTrigger**: Scroll-based animations made easy
- **Ease library**: Professional easing curves out of the box
- **React/Vue/Svelte support**: Works with all frameworks

## Core GSAP Concepts

### 1. Basic Tweens
```javascript
import gsap from 'gsap';

// Animate TO a state (from current to target)
gsap.to('.element', {
  x: 100,
  opacity: 0.5,
  duration: 1,
  ease: 'power2.out'
});

// Animate FROM a state (from specified to current)
gsap.from('.element', {
  y: -50,
  opacity: 0,
  duration: 0.8,
  ease: 'back.out'
});

// Animate FROM and TO
gsap.fromTo('.element', 
  { scale: 0, rotation: -180 },
  { scale: 1, rotation: 0, duration: 1, ease: 'elastic.out' }
);
```

### 2. Timeline Orchestration
```javascript
// Create a timeline for choreographed animations
const tl = gsap.timeline({
  defaults: { duration: 0.6, ease: 'power2.out' }
});

tl.from('.hero-title', { y: 50, opacity: 0 })
  .from('.hero-subtitle', { y: 30, opacity: 0 }, '-=0.3')  // Overlap by 0.3s
  .from('.hero-cta', { scale: 0.8, opacity: 0 }, '-=0.2')
  .from('.hero-image', { x: 100, opacity: 0 }, '<');  // Start same time as previous
```

### 3. ScrollTrigger (ESSENTIAL)
```javascript
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Fade in on scroll
gsap.from('.feature-card', {
  y: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: '.feature-card',
    start: 'top 80%',  // When top of element hits 80% of viewport
    end: 'top 20%',
    toggleActions: 'play none none reverse'
  }
});

// Pinned scroll sections
ScrollTrigger.create({
  trigger: '.panel',
  pin: true,
  start: 'top top',
  end: '+=1000',
  scrub: true  // Smooth scrubbing
});
```

### 4. Stagger for Multiple Elements
```javascript
// Animate multiple elements with delay between each
gsap.from('.card', {
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,  // 0.1s between each card
  ease: 'power3.out'
});

// Advanced stagger with options
gsap.from('.list-item', {
  x: -50,
  opacity: 0,
  duration: 0.6,
  stagger: {
    each: 0.08,
    from: 'start',  // or 'end', 'center', 'edges'
    ease: 'power2.inOut'
  }
});
```

## Amanda's GSAP Patterns for Premium UI

### Pattern 1: Page Load Sequence
```javascript
// Perfect for welcoming users with style
const pageLoadTimeline = gsap.timeline({
  defaults: { ease: 'power3.out' }
});

pageLoadTimeline
  .from('.logo', { scale: 0, rotation: -180, duration: 0.6 })
  .from('.nav-item', { y: -30, opacity: 0, stagger: 0.05 }, '-=0.3')
  .from('.hero-content', { y: 60, opacity: 0, duration: 0.8 }, '-=0.2')
  .from('.scroll-indicator', { opacity: 0, y: -10, duration: 0.5 });
```

### Pattern 2: Hover Micro-Interactions
```javascript
// Premium button hover effect
const button = document.querySelector('.cta-button');

button.addEventListener('mouseenter', () => {
  gsap.to(button, {
    scale: 1.05,
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
    duration: 0.3,
    ease: 'power2.out'
  });
  
  gsap.to(button.querySelector('.icon'), {
    x: 5,
    duration: 0.3,
    ease: 'back.out'
  });
});

button.addEventListener('mouseleave', () => {
  gsap.to(button, {
    scale: 1,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    duration: 0.3
  });
  
  gsap.to(button.querySelector('.icon'), {
    x: 0,
    duration: 0.3
  });
});
```

### Pattern 3: Card Reveal on Scroll
```javascript
// Stagger cards as they enter viewport
gsap.from('.pricing-card', {
  y: 100,
  opacity: 0,
  scale: 0.9,
  duration: 0.8,
  stagger: 0.15,
  ease: 'back.out(1.2)',
  scrollTrigger: {
    trigger: '.pricing-section',
    start: 'top 70%',
    toggleActions: 'play none none reset'
  }
});
```

### Pattern 4: Number Counter Animation
```javascript
// Animate numbers counting up (for stats, metrics)
function animateCounter(element, endValue) {
  gsap.to(element, {
    textContent: endValue,
    duration: 2,
    ease: 'power1.inOut',
    snap: { textContent: 1 },  // Snap to whole numbers
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      toggleActions: 'play none none none'
    }
  });
}

animateCounter(document.querySelector('.stat-number'), 1247);
```

### Pattern 5: Morphing Backgrounds
```javascript
// Smooth gradient shift on scroll
gsap.to('.hero-background', {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  duration: 1,
  scrollTrigger: {
    trigger: '.section-2',
    start: 'top center',
    end: 'bottom center',
    scrub: 1  // Smooth scrubbing effect
  }
});
```

### Pattern 6: Parallax Layers
```javascript
// Multi-layer parallax effect
gsap.to('.parallax-layer-1', {
  y: 200,
  scrollTrigger: {
    trigger: '.parallax-container',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  }
});

gsap.to('.parallax-layer-2', {
  y: 100,
  scrollTrigger: {
    trigger: '.parallax-container',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  }
});
```

### Pattern 7: Modal/Dialog Entrance
```javascript
// Premium modal animation
function showModal(modalElement) {
  const timeline = gsap.timeline();
  
  // Backdrop fade in
  timeline.fromTo('.modal-backdrop',
    { opacity: 0 },
    { opacity: 1, duration: 0.3 }
  );
  
  // Modal scale + fade
  timeline.fromTo(modalElement,
    { scale: 0.8, opacity: 0, y: -50 },
    { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.4)' },
    '-=0.1'
  );
  
  // Content stagger
  timeline.from(modalElement.querySelectorAll('.modal-content > *'), {
    y: 20,
    opacity: 0,
    stagger: 0.05,
    duration: 0.3
  }, '-=0.2');
}
```

### Pattern 8: Loading States
```javascript
// Premium skeleton loading animation
const skeletons = document.querySelectorAll('.skeleton');

gsap.to(skeletons, {
  opacity: 0.5,
  duration: 0.8,
  repeat: -1,
  yoyo: true,
  ease: 'power1.inOut',
  stagger: {
    each: 0.1,
    repeat: -1,
    yoyo: true
  }
});
```

## Essential Easing Curves

### For Entrances
- `back.out(1.7)`: Bouncy, playful entrance
- `elastic.out(1, 0.3)`: Springy, attention-grabbing
- `power3.out`: Smooth, professional deceleration

### For Exits
- `power2.in`: Quick, decisive exit
- `back.in(1.7)`: Anticipatory exit

### For Continuous Animations
- `none`: Linear, mechanical
- `power1.inOut`: Gentle acceleration and deceleration
- `sine.inOut`: Very smooth, organic

### For Hover States
- `power2.out`: Quick, responsive feel
- `back.out(1.2)`: Subtle playfulness

## Performance Best Practices

### 1. Use Transforms Over Other Properties
```javascript
// ✅ GOOD - GPU accelerated
gsap.to(element, { x: 100, y: 50, scale: 1.2 });

// ❌ AVOID - Triggers layout recalculation
gsap.to(element, { left: 100, top: 50, width: 200 });
```

### 2. Kill Animations When Component Unmounts
```javascript
// React example
useEffect(() => {
  const tl = gsap.timeline();
  tl.from('.element', { opacity: 0 });
  
  return () => tl.kill();  // Cleanup
}, []);
```

### 3. Use Will-Change for Complex Animations
```css
.animated-element {
  will-change: transform, opacity;
}
```

## Integration in Design System

### In design_system.json
```json
{
  "animation": {
    "timing": {
      "instant": 0,
      "fast": 0.15,
      "normal": 0.3,
      "slow": 0.6,
      "verySlow": 1.0
    },
    "easing": {
      "default": "power2.out",
      "entrance": "back.out(1.4)",
      "exit": "power2.in",
      "bounce": "elastic.out(1, 0.5)"
    },
    "stagger": {
      "tight": 0.05,
      "normal": 0.1,
      "loose": 0.2
    }
  }
}
```

### In Component Specs
```markdown
## Card Component

### Hover Animation (GSAP)
```javascript
gsap.to(card, {
  y: -8,
  boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  duration: var(--animation-timing-normal),
  ease: var(--animation-easing-default)
});
```

### Entrance Animation (GSAP)
```javascript
gsap.from(card, {
  y: 60,
  opacity: 0,
  duration: var(--animation-timing-slow),
  ease: var(--animation-easing-entrance),
  scrollTrigger: {
    trigger: card,
    start: 'top 80%'
  }
});
```
```

## Amanda's GSAP Mandate

When specifying animations:

1. **Always define timing using design tokens**: Use `var(--animation-timing-fast)` instead of hardcoded `0.2s`

2. **Specify exact easing curves**: Don't just say "smooth" - specify `power3.out` or `back.out(1.4)`

3. **Document trigger points**: For ScrollTrigger, specify exact start/end points

4. **Consider accessibility**: Respect `prefers-reduced-motion`
   ```javascript
   const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
   
   gsap.to(element, {
     x: 100,
     duration: prefersReducedMotion ? 0 : 0.6
   });
   ```

5. **Provide timeline choreography**: For complex sequences, document the complete timeline with overlap notation

## Common Use Cases in Your Specs

### Landing Page Hero Sequence
```javascript
const heroTL = gsap.timeline({ defaults: { ease: 'power3.out' }});
heroTL
  .from('.hero-badge', { scale: 0, duration: 0.5 })
  .from('.hero-h1', { y: 30, opacity: 0, duration: 0.6 }, '-=0.2')
  .from('.hero-subtitle', { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
  .from('.hero-cta-group', { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
  .from('.hero-visual', { scale: 0.9, opacity: 0, duration: 0.8 }, '-=0.4');
```

### Dashboard Data Load
```javascript
// Stagger in dashboard cards
gsap.from('.dashboard-card', {
  y: 40,
  opacity: 0,
  duration: 0.5,
  stagger: 0.08,
  ease: 'power2.out',
  onComplete: () => {
    // Animate chart data after cards are visible
    animateCharts();
  }
});
```

### Form Field Focus
```javascript
input.addEventListener('focus', () => {
  gsap.to(input.parentElement, {
    scale: 1.02,
    boxShadow: '0 0 0 3px var(--color-primary-alpha-20)',
    duration: 0.2,
    ease: 'power2.out'
  });
});
```

## Resources for Inspiration
- **GSAP Showcase**: https://gsap.com/showcase/ - Award-winning sites using GSAP
- **Codepen GSAP**: https://codepen.io/tag/gsap - Community examples
- **Awwwards GSAP**: Filter Awwwards by GSAP tag

---

**Remember**: GSAP is about creating FLUID, CHOREOGRAPHED experiences. Every animation should feel intentional, timed perfectly, and enhance the narrative. No jarring movements, no random timings - everything should feel like it belongs to a single, harmonious performance.
