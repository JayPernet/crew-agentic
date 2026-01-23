# Imersive Landing Page Design Guide for Amanda

## Overview
This guide teaches premium landing page design techniques that create **immersive, next-level experiences** using depth, transparency, and visual cohesion. Based on award-winning web design principles.

## Source
Derived from professional web design patterns showcasing modern, clean aesthetics with video backgrounds and layered compositions.

---

## 1. Structure & Layout (Focus: Immersion & Depth)

### Directive
**The layout should not feel like stacked blocks, but as a unified composition.**

### Hero Section Requirements

#### ✅ MANDATORY: 100vh Height
```css
.hero-section {
  height: 100vh;
  min-height: 100vh;
}
```

**Why:** Creates full-screen immersion on page load. Users feel like they're entering an experience, not viewing a website.

**Amanda's Spec:**
```markdown
## Hero Section

### Layout
- **Height**: 100vh (mandatory)
- **Purpose**: Full-screen immersive entry point
- **No scrolling required**: Content visible immediately
```

#### ✅ MANDATORY: Transparent Header Integration

**NEVER:** Use solid white or black header backgrounds that cut off the hero image/video.

**Technique 1: Negative Margin**
```css
header {
  margin-bottom: -100px; /* Pull content up */
  position: relative;
  z-index: 10;
}

.hero-section {
  padding-top: 100px; /* Account for header height */
}
```

**Technique 2: Absolute Positioning**
```css
header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: transparent;
}

.hero-section {
  padding-top: 0; /* No extra padding needed */
}
```

**Amanda's Spec:**
```markdown
## Header Component

### Integration with Hero
- **Background**: Transparent (no solid colors)
- **Position**: Absolute OR relative with negative margin
- **Z-index**: 10 (above video, below modals)
- **Implementation**: 
  ```css
  header {
    position: absolute;
    top: 0;
    background: transparent;
  }
  ```

### Scroll Behavior (Optional Enhancement)
- On scroll: Transition to solid background
- Color: var(--color-surface) with backdrop-blur
```

#### Creating Depth with Negative Margins

**Principle:** Break the rigid grid to create 3D layering.

```css
/* Card that floats over sections */
.floating-card {
  margin-top: -80px; /* Pull into previous section */
  position: relative;
  z-index: 5;
}

/* Image that breaks column boundaries */
.product-image {
  margin-left: -40px; /* Extend beyond column */
  box-shadow: 0 20px 60px rgba(0,0,0,0.3); /* Enhance depth */
}
```

**Use Cases:**
- Product images overlapping section boundaries
- Cards floating between sections
- Images breaking out of constrained columns

**Amanda's Pattern:**
```markdown
## Feature Section - Product Showcase

### Depth Effect
- **Product image** extends 40px left beyond grid column
- **Negative margin**: -40px left
- **Shadow**: 0 20px 60px rgba(0,0,0,0.3)
- **Purpose**: Creates visual hierarchy and "pop out" effect

### Grid Alignment
- Content follows strict vertical grid lines
- Images intentionally break grid for emphasis
- Maintains invisible alignment for titles, subtitles, CTAs
```

#### Invisible Grid Alignment

**Principle:** Chaos (video backgrounds) needs invisible order (strict alignment).

```css
/* Example: Left-aligned grid */
.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

/* All text elements align to same vertical line */
.hero-title,
.hero-subtitle,
.hero-cta {
  grid-column: 1; /* Same column = vertical alignment */
}
```

**Amanda's Mandate:**
- Titles, subtitles, and CTAs must align to invisible vertical lines
- Never center-align hero content randomly
- Use consistent left margins (e.g., 80px) or grid columns

---

## 2. Visual Style & Readability (Focus: Contrast & Harmony)

### Directive
**Clean aesthetics depend on contrast control, not absence of elements.**

### Video Background Selection

#### ❌ REJECT:
- Chaotic, busy videos with rapid movement
- High-contrast scenes that compete with text
- Videos with bright spots that reduce text legibility

#### ✅ ACCEPT:
- Subtle motion (slow pans, gentle movements)
- Consistent lighting
- Low visual noise
- Serves as ambiance, not main focus

**Amanda's Video Brief:**
```markdown
## Hero Video Requirements

### Motion
- **Speed**: Slow, subtle movement only
- **Examples**: Gentle camera pan, soft particle movement, ambient scenes
- **Avoid**: Fast cuts, rapid motion, chaotic elements

### Lighting
- **Consistency**: Even lighting across frames
- **Avoid**: Bright flashes, high contrast flickering

### Purpose
- **Role**: Ambient background, not focal point
- **Attention**: Should not distract from content
```

### MANDATORY: Background Overlay

**Rule:** Always use overlay between video and text.

```css
.hero-section {
  position: relative;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Black at 50% opacity */
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  color: white;
}
```

**Opacity Guidelines:**
- **Light videos** (daytime, bright scenes): 0.5 - 0.7 opacity
- **Dark videos** (night, shadowy): 0.3 - 0.5 opacity
- **Test contrast ratio**: Ensure WCAG AA compliance (4.5:1 minimum)

**Amanda's Spec:**
```markdown
## Hero Section - Video Background

### Video Layer
- **Position**: Absolute, full coverage
- **Z-index**: 1
- **Object-fit**: Cover

### Overlay Layer (MANDATORY)
- **Color**: rgba(0, 0, 0, 0.5) or var(--color-overlay-dark)
- **Opacity**: 50% (adjustable: 30-70% based on video brightness)
- **Z-index**: 2
- **Purpose**: Ensure text contrast ratio ≥ 4.5:1 (WCAG AA)

### Content Layer
- **Z-index**: 3
- **Text color**: #FFFFFF (pure white)
- **Typography**: High contrast, bold weights
```

### Color Cohesion (Color Sampling)

**Principle:** UI colors should NOT be random. Extract palette from video.

#### Process:
1. Sample dominant colors from video background
2. Use sampled colors for UI accents (buttons, icons, borders)
3. Creates visual harmony between content and background

**Examples:**
- **Fire/sunset video** → Orange/red buttons (#FF6B35, #C44536)
- **Ocean/water video** → Turquoise/blue buttons (#06D6A0, #118AB2)
- **Forest/nature video** → Green buttons (#52B788, #2D6A4F)
- **Tech/night city** → Purple/cyan buttons (#7209B7, #00F5FF)

**Amanda's Spec:**
```markdown
## Hero Section - Color System

### Palette Extraction
- **Source**: Video background dominant colors
- **Tool**: Use color picker on video frames
- **Sample points**: 
  1. Dominant background color
  2. Accent/highlight color
  3. Shadow/depth color

### UI Application
- **Primary CTA**: Sampled accent color
- **Secondary elements**: Sampled highlight color
- **Borders/dividers**: Desaturated sample at low opacity

### Example (Ocean Video):
```css
:root {
  --video-dominant: #0466C8; /* Sampled ocean blue */
  --video-accent: #06D6A0;   /* Sampled foam/wave */
  --cta-primary: var(--video-accent);
  --border-accent: rgba(6, 214, 160, 0.3);
}
```
```

---

## 3. Typography & Content

### Copywriting Sync

**Principle:** Text should describe or complement the visual action of the video.

**Examples:**
- **Video shows waves crashing** → "Making Waves in Your Industry"
- **Video shows fire/sparks** → "Ignite Your Potential"
- **Video shows city lights** → "Illuminate Your Path Forward"
- **Video shows nature growth** → "Grow Beyond Limits"

**Amanda's Copywriting Brief:**
```markdown
## Hero Copy Requirements

### Visual-Text Alignment
- Copy must relate to video imagery
- Metaphors should match visual elements
- Avoid generic copy that ignores the background

### Examples:
| Video Theme | Bad Copy | Good Copy |
|-------------|----------|-----------|
| Ocean waves | "Best Solutions" | "Navigate New Horizons" |
| Fire/Energy | "We Help You" | "Fuel Your Success" |
| Technology | "Our Services" | "Power Your Digital Future" |
```

### High Contrast Typography

```css
.hero-title {
  color: #FFFFFF; /* Pure white, not #F5F5F5 */
  font-weight: 700; /* Bold or bolder */
  text-shadow: 0 2px 8px rgba(0,0,0,0.3); /* Optional depth */
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.9); /* Slightly less contrast */
  font-weight: 400;
}
```

**Amanda's Typography Spec:**
```markdown
## Hero Typography

### Title
- **Color**: #FFFFFF (pure white)
- **Weight**: 700 (bold)
- **Size**: clamp(2.5rem, 5vw, 4rem)
- **Optional**: text-shadow for additional depth

### Subtitle
- **Color**: rgba(255, 255, 255, 0.9)
- **Weight**: 400 (regular)
- **Size**: clamp(1rem, 2vw, 1.5rem)
```

---

## 4. UI Elements

### Call-to-Action Buttons

**Principle:** Buttons use colors sampled from video background.

```css
.cta-primary {
  background: var(--video-accent); /* Sampled from video */
  color: #FFFFFF;
  padding: 16px 32px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(var(--video-accent-rgb), 0.4);
}

.cta-primary:hover {
  background: var(--video-accent-darker);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(var(--video-accent-rgb), 0.6);
}
```

**Amanda's CTA Spec:**
```markdown
## CTA Button

### Visual
- **Background**: Color sampled from video (e.g., #06D6A0)
- **Text**: #FFFFFF
- **Padding**: 16px 32px
- **Border-radius**: 8px
- **Shadow**: 0 4px 16px with button color at 40% opacity

### Hover State
- **Background**: Darken by 10%
- **Transform**: translateY(-2px)
- **Shadow**: Increase to 0 8px 24px at 60% opacity
- **Transition**: 0.3s ease-out
```

### Depth with Floating Elements

**Technique:** Use negative margins to create intentional overlap.

```css
/* Product card floating over section break */
.floating-product-card {
  margin-top: -80px; /* Pulls into previous section */
  position: relative;
  z-index: 5;
  background: white;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  padding: 40px;
}
```

**Use Cases:**
- Cards bridging sections
- Images breaking column boundaries
- Testimonial quotes overlapping backgrounds

---

## 5. Implementation Checklist

### For Every Immersive Landing Page:

#### Hero Section ✅
- [ ] Height set to `100vh`
- [ ] Video background selected (subtle motion only)
- [ ] Overlay applied (30-70% opacity)
- [ ] Header is transparent (absolute or negative margin)
- [ ] Text is pure white (#FFFFFF)
- [ ] Copy relates to video imagery

#### Color System ✅
- [ ] Colors sampled from video background
- [ ] Primary CTA uses sampled accent color
- [ ] UI elements (borders, icons) use palette
- [ ] Design tokens updated with sampled colors

#### Layout & Depth ✅
- [ ] Content follows invisible grid alignment
- [ ] At least one element uses negative margin for depth
- [ ] Floating elements have appropriate shadows
- [ ] Z-index hierarchy is correct (video → overlay → content)

#### Accessibility ✅
- [ ] Text contrast ratio ≥ 4.5:1 (WCAG AA)
- [ ] Video has play/pause control (if user preference)
- [ ] Fallback image for reduced motion
- [ ] Content readable without video

---

## 6. React Implementation Example

```jsx
import { useReducedMotion } from 'framer-motion';

function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section className="hero">
      {/* Video Background */}
      {!shouldReduceMotion && (
        <video 
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      )}
      
      {/* Fallback Image */}
      {shouldReduceMotion && (
        <img 
          src="/hero-fallback.jpg" 
          alt="" 
          className="hero-image"
        />
      )}
      
      {/* Overlay */}
      <div className="hero-overlay" aria-hidden="true" />
      
      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">Navigate New Horizons</h1>
        <p className="hero-subtitle">
          Chart your course to success with cutting-edge solutions
        </p>
        <button className="cta-primary">Get Started</button>
      </div>
    </section>
  );
}
```

```css
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-video,
.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  color: white;
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
  color: #FFFFFF;
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.5rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
}

.cta-primary {
  background: var(--color-primary);
  color: white;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(var(--color-primary-rgb), 0.4);
  transition: all 0.3s ease-out;
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(var(--color-primary-rgb), 0.6);
}
```

---

## Amanda's Immersive Landing Page Mandate

When designing landing pages with video backgrounds:

1. **Always specify 100vh** for hero sections
2. **Always require overlay** with specific opacity (30-70%)
3. **Always use transparent headers** (absolute positioning or negative margin)
4. **Sample colors from video** for UI palette
5. **Align copy with visual** (metaphors match video theme)
6. **Create depth** with at least one floating/overlapping element
7. **Ensure accessibility** (contrast ratio, reduced motion fallback)
8. **Pure white text** (#FFFFFF) for maximum contrast

---

**Remember**: Immersive doesn't mean complicated. It means **unified composition** where every element—video, overlay, header, content, colors—works together to create a cohesive, next-level experience that WOWs users from the first pixel.
