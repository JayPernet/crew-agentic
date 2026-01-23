# UI Composition Patterns for Amanda

## Overview
This guide provides composition and readability rules specifically for **UI/UX specifications**. While the brand team handles visual strategy, you translate those principles into technical UI patterns and component specs.

---

## 1. Composition Rules for UI Specifications

### The "Space" Principle in UI Context

**Rule**: When specifying UI layouts, text elements must be placed where there is visual calm within background images or videos.

This is a **technical specification concern**, not a brand strategy decision. The brand team sources the images; you specify how UI elements interact with them.

#### Identifying Space in UI Specs

**Busy Areas** (avoid placing UI elements):
- Faces and people
- Complex textures
- High-contrast elements
- Movement/action zones

**Calm Areas** (safe for UI placement):
- Sky and solid backgrounds
- Blurred areas (bokeh)
- Negative space
- Gradient transitions

#### UI Composition Checklist

When writing specs for hero sections or image-heavy components:

- [ ] Specify text placement zones (e.g., "left 50% of hero")
- [ ] Define overlay opacity for text contrast
- [ ] Document alignment rules (invisible grid lines)
- [ ] Ensure text doesn't overlap busy image areas
- [ ] Test readability at mobile sizes
- [ ] Specify fallback for images that don't load

### Amanda's Composition Spec Format

```markdown
## Hero Component - Composition Specification

### Layout Zones
- **Text Content Zone**: Left 50% of viewport width
  - Max-width: 600px
  - Padding: 80px from left edge
  - Vertical centering: flex align-items center

- **Image Subject Zone**: Right 50% of viewport width
  - Background image positioned: center right
  - Object-fit: cover
  - Z-index: 1 (below overlay and content)

### Overlay Layer (for text contrast)
- **Color**: rgba(0, 0, 0, 0.4)
- **Z-index**: 2 (above image, below content)
- **Purpose**: Ensure text contrast ratio ≥ 4.5:1 (WCAG AA)

### Content Layer
- **Z-index**: 3 (above overlay)
- **Text color**: #FFFFFF (pure white)
- **Typography**: 
  - Heading: var(--font-display), 700 weight
  - Subheading: var(--font-body), 400 weight

### Invisible Grid Alignment
- All text elements align to 80px from left edge
- Vertical spacing: 24px between heading and subheading
- CTA positioned 40px below subheading

### Responsive Behavior
- **Mobile (<768px)**: 
  - Text zone: 100% width
  - Padding: 24px
  - Image: background-position center
  - Overlay: rgba(0, 0, 0, 0.5) (increased for mobile readability)
```

---

## 2. Image Manipulation Specifications

### Horizontal Flip

When the brand team provides an image where the subject positioning conflicts with UI layout:

```css
.hero-bg img {
  transform: scaleX(-1);
}
```

**When to specify**:
- Subject faces away from text area
- Visual flow directs eye away from CTA
- Better balance after flip

**Amanda's Flip Spec**:
```markdown
## Hero Component - Image Manipulation

### Horizontal Flip Required
- **Reason**: Subject (person) positioned on left, conflicts with text placement
- **Solution**: Apply `transform: scaleX(-1)` to `.hero-bg img`
- **Result**: Subject moves to right, clean space on left for text

### CSS Implementation
```css
.hero-bg img {
  transform: scaleX(-1);
}
```

### Accessibility Note
- Image flip is purely visual
- Alt text remains unchanged
- No impact on screen readers
```

### Brightness/Contrast Adjustment

```css
.hero-bg img {
  filter: brightness(0.8) contrast(1.1);
}
```

**Purpose in UI specs**:
- Enhance text contrast (darken background)
- Reduce visual noise
- Improve overlay effectiveness

**Amanda's Filter Spec**:
```markdown
## Hero Component - Image Filters

### Brightness Reduction
- **Property**: `filter: brightness(0.8)`
- **Purpose**: Darken image to improve text contrast
- **Alternative**: Increase overlay opacity instead

### Contrast Enhancement
- **Property**: `filter: contrast(1.1)`
- **Purpose**: Sharpen image details
- **Use Case**: When image appears washed out

### Combined Filter
```css
.hero-bg img {
  filter: brightness(0.8) contrast(1.1);
}
```

### Performance Note
- CSS filters are GPU-accelerated
- Minimal performance impact
- Prefer CSS filters over pre-processed images for flexibility
```

### Crop & Zoom

```css
.hero-bg img {
  object-fit: cover;
  object-position: 60% center; /* Focus on right side */
  transform: scale(1.1); /* Slight zoom for impact */
}
```

**Amanda's Crop Spec**:
```markdown
## Hero Component - Image Positioning

### Object Fit
- **Property**: `object-fit: cover`
- **Purpose**: Fill container while maintaining aspect ratio

### Object Position
- **Property**: `object-position: 60% center`
- **Purpose**: Focus on right side of image (where subject is located)
- **Alternative positions**:
  - `center center` (default)
  - `left center` (focus left)
  - `right center` (focus right)

### Zoom Effect
- **Property**: `transform: scale(1.1)`
- **Purpose**: Slight zoom for visual impact
- **Caution**: Don't exceed 1.2 (causes pixelation)

### Responsive Adjustments
```css
@media (max-width: 768px) {
  .hero-bg img {
    object-position: center center; /* Center on mobile */
    transform: scale(1); /* No zoom on mobile */
  }
}
```
```

---

## 3. Symmetry & Invisible Lines

### Invisible Grid for UI Specs

**Principle**: Even with chaotic backgrounds, maintain structural order through invisible alignment.

```markdown
## Hero Component - Grid Specification

### Desktop Grid (≥1024px)
- **Container**: 1200px max-width, centered
- **Columns**: 2 equal columns (50% each)
  - Left column: Text content
  - Right column: Image subject area (visual only, no content)

### Vertical Alignment
- All text elements align to **80px from left edge**
- This creates an invisible vertical line
- Maintains visual order despite background chaos

### Horizontal Rhythm
- **Heading to Subheading**: 24px gap
- **Subheading to CTA**: 40px gap
- **Section top padding**: 120px
- **Section bottom padding**: 120px

### Symmetry Rules
1. Equal padding top/bottom (120px both)
2. Centered elements use perfect squares (e.g., 400x400px icon container)
3. Button widths consistent across page (e.g., min-width 200px)

### Mobile Grid (<768px)
- **Container**: 100% width, 24px side padding
- **Columns**: Single column (100%)
- **Vertical alignment**: 24px from left edge
- **Horizontal rhythm**: Reduced spacing (16px, 24px gaps)
```

---

## 4. Interactive Design Patterns (Framer Motion)

### Hover Reactions

**Purpose**: Provide immediate visual feedback that an element is interactive.

#### Image Hover Effects

```jsx
import { motion } from 'framer-motion';

function InteractiveImage({ src, alt }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      whileHover={{
        scale: 1.05,
        filter: 'brightness(1.1)'
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      style={{ cursor: 'pointer' }}
    />
  );
}
```

**Amanda's Hover Spec**:
```markdown
## Product Grid - Image Hover State

### Hover Interaction
- **Library**: Framer Motion
- **Scale**: 1.05 (5% larger)
- **Filter**: brightness(1.1) (10% brighter)
- **Transition**: 0.3s ease-out
- **Cursor**: pointer

### Implementation
```jsx
<motion.img
  whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
  transition={{ duration: 0.3, ease: 'easeOut' }}
/>
```

### Accessibility
- Hover state does not convey critical information
- Focus state mirrors hover for keyboard users
- Touch devices: tap shows hover state briefly
```

#### Card Hover Effects

```jsx
function InteractiveCard({ children }) {
  return (
    <motion.div
      className="card"
      whileHover={{
        y: -8,
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)'
      }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

**Amanda's Card Hover Spec**:
```markdown
## Service Card - Hover State

### Transform
- **Property**: translateY(-8px)
- **Purpose**: Lift card on hover

### Shadow
- **Initial**: 0 4px 12px rgba(0, 0, 0, 0.1)
- **Hover**: 0 12px 24px rgba(0, 0, 0, 0.15)
- **Purpose**: Enhance depth perception

### Transition
- **Duration**: 0.3s
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1)

### Implementation (Framer Motion)
```jsx
<motion.div
  whileHover={{ y: -8, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }}
  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
/>
```

### CSS Alternative (if not using Framer Motion)
```css
.card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
```
```

### Scroll-Triggered Content Sliders

**Use Case**: Product showcases, feature highlights, step-by-step guides

```jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function ScrollTriggeredSlider({ items }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const itemIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, items.length - 1]
  );
  
  return (
    <div ref={containerRef} className="slider-container">
      <motion.div 
        className="slider-track"
        style={{ 
          x: useTransform(itemIndex, (i) => `-${Math.round(i) * 100}%`) 
        }}
      >
        {items.map((item) => (
          <div key={item.id} className="slider-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
```

**Amanda's Scroll Slider Spec**:
```markdown
## Product Showcase - Scroll-Triggered Slider

### Behavior
- As user scrolls through section, product images change
- Smooth horizontal slide transition
- Keeps focus on one product at a time

### Technical Implementation
- **Library**: Framer Motion
- **Hook**: useScroll (tracks scroll position)
- **Transform**: useTransform (maps scroll to item index)
- **Trigger**: Section enters viewport

### Configuration
- **Items**: 5 product variations
- **Transition**: Slide horizontally, 0.6s ease-out
- **Scroll Range**: Section start to section end

### Code Structure
```jsx
const { scrollYProgress } = useScroll({
  target: containerRef,
  offset: ["start end", "end start"]
});

const itemIndex = useTransform(scrollYProgress, [0, 1], [0, items.length - 1]);
```

### Use Cases
- Product variations (flavors, colors)
- Service tiers (basic, pro, enterprise)
- Feature highlights (step 1, 2, 3)
- Testimonial rotation
```

### Reverse Scroll Animations

**Effect**: Animations play forward on scroll down, reverse on scroll up

```jsx
import { motion, useScroll, useTransform } from 'framer-motion';

function ReverseScrollElement() {
  const { scrollYProgress } = useScroll();
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  
  return (
    <motion.div 
      style={{ rotate, scale }}
      className="scroll-element"
    >
      <img src="/logo.svg" alt="Logo" />
    </motion.div>
  );
}
```

**Amanda's Reverse Animation Spec**:
```markdown
## Hero Section - Logo Scroll Animation

### Scroll-Linked Rotation
- **Element**: Company logo (SVG)
- **Behavior**: Rotates 360° as user scrolls from top to hero bottom
- **Library**: Framer Motion (useScroll + useTransform)

### Technical Implementation
```jsx
const { scrollYProgress } = useScroll();
const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
```

### Properties
- **Rotation**: 0° to 360° (full rotation)
- **Scale**: 0.8 to 1.2 (grows as user scrolls)
- **Performance**: GPU-accelerated (transform property)

### Use Cases
- Logo animations in hero
- Progress indicators
- Decorative elements
- Product 360° rotations

### Accessibility
- Animation respects `prefers-reduced-motion`
- Purely decorative (no critical information)
- Fallback: static logo if motion disabled
```

---

## 5. Practical UI Specification Examples

### Example 1: Adventure Travel Hero

```markdown
## Hero Component Specification

### Layout
- **Container**: Full viewport height (100vh)
- **Grid**: 2 columns (50% each) on desktop
- **Text Zone**: Left column (0-50% width)
- **Image Zone**: Right column (50-100% width)

### Background Image
- **Source**: Provided by brand team (Envato asset)
- **Object-fit**: cover
- **Object-position**: 60% center (focus on RV on right side)
- **Filter**: brightness(0.85) for text contrast

### Overlay
- **Color**: rgba(0, 0, 0, 0.3)
- **Z-index**: 2
- **Purpose**: Ensure text contrast ≥ 4.5:1

### Content Positioning
- **Headline**: 
  - Position: 80px from left edge
  - Typography: var(--font-display), 700 weight, 3.5rem
  - Color: #FFFFFF
- **Subheadline**:
  - Position: 80px from left edge (aligned with headline)
  - Typography: var(--font-body), 400 weight, 1.25rem
  - Color: rgba(255, 255, 255, 0.9)
  - Margin-top: 24px
- **CTA Button**:
  - Position: 80px from left edge (aligned with headline)
  - Margin-top: 40px
  - See `cta_visual_hierarchy.md` for button specs

### Responsive Behavior
```css
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr; /* Single column */
  }
  
  .hero-content {
    padding: 24px; /* Reduced padding */
    text-align: center; /* Center on mobile */
  }
  
  .hero-bg {
    object-position: center; /* Center image on mobile */
  }
  
  .hero-overlay {
    background: rgba(0, 0, 0, 0.5); /* Darker overlay for mobile */
  }
}
```

### Interactive Elements
- **Image hover**: None (background image, not interactive)
- **CTA hover**: See `cta_visual_hierarchy.md`
```

---

## Amanda's UI Composition Mandate

When specifying UI composition patterns, you MUST:

1. **Define layout zones**
   - Specify text content zones
   - Define image subject zones
   - Document overlay requirements

2. **Specify image manipulations**
   - Horizontal flips (if needed)
   - Brightness/contrast filters
   - Crop and zoom instructions
   - Object-fit and object-position

3. **Document invisible grid**
   - Vertical alignment lines
   - Horizontal rhythm (spacing)
   - Symmetry rules

4. **Include interactive patterns**
   - Hover states (Framer Motion specs)
   - Scroll-triggered animations
   - Reverse scroll effects

5. **Provide responsive specs**
   - Mobile layout adjustments
   - Breakpoint-specific rules
   - Touch-friendly interactions

6. **Reference brand assets**
   - Note when brand team provides images
   - Document color extraction from brand palette
   - Link to `design_system.json` tokens

---

**Remember**: You translate brand visual strategy into technical UI specifications. The brand team sources images and defines visual identity; you specify how UI components interact with those assets to create premium, accessible, and performant interfaces.
