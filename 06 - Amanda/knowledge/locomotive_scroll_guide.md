# Locomotive Scroll Guide for Amanda

## What is Locomotive Scroll?
Locomotive Scroll is a modern smooth scroll library that creates premium, cinematic scrolling experiences with parallax effects, speed control, and scroll-triggered animations. Think Apple-style storytelling websites.

## Official Documentation
- **Website**: https://locomotivemtl.github.io/locomotive-scroll/
- **GitHub**: https://github.com/locomotivemtl/locomotive-scroll
- **Examples**: https://locomotive.ca/en (their own site showcases it)

## Why Locomotive Scroll for Premium Experiences

### Key Features
- **Smooth Scroll**: Buttery-smooth inertia scrolling
- **Parallax Effects**: Different scroll speeds for layered depth
- **Direction Detection**: Trigger animations based on scroll direction
- **Speed Control**: Custom scroll speeds per element
- **Sticky Elements**: Pin elements while scrolling
- **Horizontal Scroll**: Create horizontal scroll sections
- **Mobile Support**: Works on touch devices

## Installation & Setup

```bash
npm install locomotive-scroll
```

```javascript
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  multiplier: 1.0,  // Scroll speed multiplier
  smartphone: {
    smooth: true
  },
  tablet: {
    smooth: true
  }
});
```

```html
<div data-scroll-container>
  <div data-scroll-section>
    <h1 data-scroll data-scroll-speed="2">Fast scrolling title</h1>
    <p data-scroll data-scroll-speed="1">Normal speed text</p>
    <img data-scroll data-scroll-speed="0.5" src="..." />
  </div>
</div>
```

## Core Data Attributes

### `data-scroll`
Marks element for scroll detection:
```html
<div data-scroll>Detected element</div>
```

### `data-scroll-speed`
Controls scroll speed (parallax):
```html
<!-- Slower than normal scroll -->
<div data-scroll data-scroll-speed="-2">Background layer</div>

<!-- Normal scroll -->
<div data-scroll data-scroll-speed="1">Content</div>

<!-- Faster than normal scroll -->
<div data-scroll data-scroll-speed="3">Foreground layer</div>
```

### `data-scroll-direction`
Animate only on specific scroll direction:
```html
<div data-scroll data-scroll-direction="horizontal">
  Horizontal scroll animation
</div>
```

### `data-scroll-class`
Add class when element enters viewport:
```html
<div data-scroll data-scroll-class="is-visible">
  Gets 'is-visible' class when scrolled into view
</div>
```

### `data-scroll-repeat`
Repeat animation every time element enters:
```html
<div data-scroll data-scroll-repeat="true">
  Animates every time it enters viewport
</div>
```

### `data-scroll-call`
Trigger custom JavaScript function:
```html
<div data-scroll data-scroll-call="myFunction">
  Triggers myFunction when visible
</div>
```

### `data-scroll-sticky`
Pin element during scroll:
```html
<div data-scroll data-scroll-sticky data-scroll-target="#target">
  Stays pinned while #target scrolls
</div>
```

## Amanda's Premium Patterns

### Pattern 1: Layered Parallax Hero
```html
<div data-scroll-section>
  <div class="hero">
    <!-- Background layer - slowest -->
    <div 
      data-scroll 
      data-scroll-speed="-3"
      class="hero-bg"
    >
      <img src="background.jpg" alt="Background" />
    </div>
    
    <!-- Mid layer -->
    <div 
      data-scroll 
      data-scroll-speed="1"
      class="hero-content"
    >
      <h1>Welcome</h1>
    </div>
    
    <!-- Foreground layer - fastest -->
    <div 
      data-scroll 
      data-scroll-speed="4"
      class="hero-accent"
    >
      <svg>...</svg>
    </div>
  </div>
</div>
```

### Pattern 2: Scroll-Triggered Fade In
```html
<div 
  data-scroll 
  data-scroll-class="fade-in-up"
  class="card"
>
  Card content
</div>
```

```css
.card {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s, transform 0.8s;
}

.card.fade-in-up {
  opacity: 1;
  transform: translateY(0);
}
```

### Pattern 3: Pinned Section
```html
<div data-scroll-section>
  <div 
    data-scroll 
    data-scroll-sticky 
    data-scroll-target="#sticky-target"
  >
    <h2>This stays pinned</h2>
  </div>
  
  <div id="sticky-target" style="height: 200vh">
    Long content that scrolls while h2 is pinned
  </div>
</div>
```

### Pattern 4: Horizontal Scroll Section
```html
<div data-scroll-section data-scroll-direction="horizontal">
  <div class="horizontal-wrapper">
    <div class="slide">Slide 1</div>
    <div class="slide">Slide 2</div>
    <div class="slide">Slide 3</div>
  </div>
</div>
```

```css
.horizontal-wrapper {
  display: flex;
  width: max-content;
}

.slide {
  width: 100vw;
  height: 100vh;
}
```

### Pattern 5: Staggered Grid Reveal
```html
<div class="grid">
  <div 
    data-scroll 
    data-scroll-class="reveal" 
    data-scroll-delay="0.1"
    class="grid-item"
  >Item 1</div>
  
  <div 
    data-scroll 
    data-scroll-class="reveal" 
    data-scroll-delay="0.2"
    class="grid-item"
  >Item 2</div>
  
  <div 
    data-scroll 
    data-scroll-class="reveal" 
    data-scroll-delay="0.3"
    class="grid-item"
  >Item 3</div>
</div>
```

```css
.grid-item {
  opacity: 0;
  transform: scale(0.9);
  transition: all 0.6s;
}

.grid-item.reveal {
  opacity: 1;
  transform: scale(1);
}
```

## Integration with GSAP

Combine for ultimate control:

```javascript
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

// Sync Locomotive with GSAP ScrollTrigger
locoScroll.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy('[data-scroll-container]', {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});

// Now use GSAP animations with Locomotive scroll
gsap.to('.element', {
  scrollTrigger: {
    trigger: '.element',
    scroller: '[data-scroll-container]',
    start: 'top bottom',
    end: 'top top',
    scrub: true
  },
  scale: 2
});

ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
ScrollTrigger.refresh();
```

## React Integration

```jsx
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);
  
  useEffect(() => {
    locomotiveScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      smartphone: { smooth: true },
      tablet: { smooth: true }
    });
    
    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
      }
    };
  }, []);
  
  return (
    <div data-scroll-container ref={scrollRef}>
      <div data-scroll-section>
        <h1 data-scroll data-scroll-speed="2">
          Premium Experience
        </h1>
      </div>
    </div>
  );
}
```

## Component Spec Example

```markdown
## Landing Page - Hero Section

### Locomotive Scroll Configuration

#### Parallax Layers
1. **Background Image**
   - `data-scroll-speed="-2"`
   - Moves slower than scroll (depth effect)

2. **Hero Title**
   - `data-scroll-speed="1"`
   - Normal scroll speed

3. **Accent Graphics**
   - `data-scroll-speed="3"`
   - Moves faster (foreground effect)

#### Reveal Animation
- All content cards use `data-scroll-class="fade-in"`
- CSS transition: 0.8s ease-out
- Initial state: opacity 0, translateY(60px)
- Final state: opacity 1, translateY(0)

#### Implementation
```html
<section data-scroll-section class="hero">
  <div class="hero-bg" data-scroll data-scroll-speed="-2">
    <img src="hero-bg.jpg" alt="" />
  </div>
  
  <div class="hero-content" data-scroll data-scroll-speed="1">
    <h1 data-scroll data-scroll-class="fade-in">Premium Product</h1>
    <p data-scroll data-scroll-class="fade-in" data-scroll-delay="0.2">
      Description text
    </p>
  </div>
</section>
```
```

## Performance Best Practices

### 1. Use `data-scroll-section`
Wrap content in sections for better performance:
```html
<div data-scroll-section>
  <!-- Content -->
</div>
```

### 2. Limit Parallax Elements
Don't add `data-scroll` to every element:
```html
<!-- ✅ GOOD - Strategic use -->
<section>
  <h1 data-scroll data-scroll-speed="2">Title</h1>
  <p>Normal text without parallax</p>
</section>

<!-- ❌ AVOID - Too many -->
<section>
  <h1 data-scroll>Title</h1>
  <p data-scroll>Text</p>
  <span data-scroll>Word</span>
</section>
```

### 3. Optimize for Mobile
```javascript
const scroll = new LocomotiveScroll({
  el: scrollContainer,
  smooth: true,
  smartphone: {
    smooth: false  // Disable on mobile if performance issues
  }
});
```

## Amanda's Locomotive Mandate

When specifying Locomotive Scroll:

1. **Define scroll speeds explicitly**: "Background: -2, Content: 1, Foreground: 3"
2. **Document trigger classes**: Specify CSS for `data-scroll-class`
3. **Plan layer hierarchy**: Background (negative speed) → Content (1) → Foreground (positive)
4. **Consider mobile**: Decide if smooth scroll works on touch devices
5. **Combine with GSAP**: Use Locomotive for smooth scroll, GSAP for complex animations

## Use Cases

| Use Case | Implementation |
|----------|----------------|
| **Apple-style landing** | Layered parallax + sticky sections |
| **Product showcase** | Horizontal scroll + reveals |
| **Storytelling site** | Pinned content + direction-based animations |
| **Portfolio** | Smooth scroll + staggered grid reveals |
| **Long-form content** | Smooth inertia + progress indicators |

## Inspiration
- **Locomotive's site**: https://locomotive.ca/en
- **Apple**: https://www.apple.com/
- **Awwwards**: Search "smooth scroll"

---

**Remember**: Locomotive Scroll creates **CINEMATIC** experiences. Use it when you want users to feel like they're navigating through a carefully directed story, not just scrolling a webpage. Perfect for landing pages, portfolios, and product showcases.
