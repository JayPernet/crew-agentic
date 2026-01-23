# Lottie Guide for Amanda

## What is Lottie?
Lottie is a library that renders After Effects animations exported as JSON. It enables designers to create complex animations in After Effects and developers to implement them natively across web, iOS, Android, and React Native.

## Official Resources
- **Website**: https://lottiefiles.com/
- **Docs**: https://airbnb.io/lottie/
- **Library**: https://lottiefiles.com/featured (thousands of free animations)
- **After Effects Plugin**: Bodymovin (exports .json from AE)

## Why Lottie for Premium UI

### Benefits
- **Designer ↔ Developer Bridge**: Designers create in AE, developers implement with one line
- **Vector-Based**: Infinitely scalable without quality loss
- **Small File Sizes**: Animations are often 10x smaller than GIFs
- **Interactive**: Can trigger, pause, loop, reverse programmatically
- **Cross-Platform**: Same JSON works on web, mobile, desktop
- **No Dependencies**: Pure JSON, no video codecs needed

## Installation

### Web (vanilla JS)
```bash
npm install lottie-web
```

```javascript
import lottie from 'lottie-web';

const animation = lottie.loadAnimation({
  container: document.getElementById('lottie-container'),
  renderer: 'svg',  // or 'canvas', 'html'
  loop: true,
  autoplay: true,
  path: '/animations/loading.json'  // Path to your JSON
});
```

### React
```bash
npm install lottie-react
```

```jsx
import Lottie from 'lottie-react';
import animationData from './animation.json';

function Component() {
  return <Lottie animationData={animationData} loop={true} />;
}
```

## Core API

### Loading Animation
```javascript
// From file path
lottie.loadAnimation({
  container: element,
  path: '/animations/success.json'
});

// From animation data (imported JSON)
lottie.loadAnimation({
  container: element,
  animationData: jsonData
});
```

### Control Methods
```javascript
const anim = lottie.loadAnimation({ /* ... */ });

anim.play();        // Play from current frame
anim.stop();        // Stop and reset to frame 0
anim.pause();       // Pause at current frame
anim.goToAndStop(50, true);  // Go to frame 50 and stop
anim.goToAndPlay(0, true);   // Go to frame 0 and play
anim.setDirection(1);        // 1 = forward, -1 = reverse
anim.setSpeed(2);            // 2x speed
anim.destroy();              // Cleanup
```

### Events
```javascript
anim.addEventListener('complete', () => {
  console.log('Animation finished');
});

anim.addEventListener('loopComplete', () => {
  console.log('Loop finished');
});

anim.addEventListener('enterFrame', (event) => {
  console.log('Current frame:', event.currentTime);
});
```

## Amanda's Premium Patterns

### Pattern 1: Loading Indicator
```jsx
import Lottie from 'lottie-react';
import loadingAnimation from './loading.json';

function LoadingSpinner({ isLoading }) {
  if (!isLoading) return null;
  
  return (
    <div className="loading-container">
      <Lottie
        animationData={loadingAnimation}
        loop={true}
        style={{ width: 120, height: 120 }}
      />
    </div>
  );
}
```

### Pattern 2: Success/Error Feedback
```jsx
import { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import successAnimation from './success.json';

function SuccessMessage({ show }) {
  const lottieRef = useRef();
  
  useEffect(() => {
    if (show && lottieRef.current) {
      lottieRef.current.goToAndPlay(0);  // Restart animation
    }
  }, [show]);
  
  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={successAnimation}
      loop={false}
      autoplay={false}
    />
  );
}
```

### Pattern 3: Interactive Icon
```jsx
import { useRef } from 'react';
import Lottie from 'lottie-react';
import likeAnimation from './like.json';

function LikeButton({ isLiked, onToggle }) {
  const lottieRef = useRef();
  
  const handleClick = () => {
    if (!isLiked) {
      lottieRef.current?.play();  // Play forward
    } else {
      lottieRef.current?.setDirection(-1);  // Reverse
      lottieRef.current?.play();
    }
    onToggle();
  };
  
  return (
    <button onClick={handleClick}>
      <Lottie
        lottieRef={lottieRef}
        animationData={likeAnimation}
        loop={false}
        autoplay={false}
        style={{ width: 48, height: 48 }}
      />
    </button>
  );
}
```

### Pattern 4: Scroll-Triggered Animation
```jsx
import { useRef, useEffect } from 'react';
import lottie from 'lottie-web';

function ScrollAnimation() {
  const containerRef = useRef(null);
  const animRef = useRef(null);
  
  useEffect(() => {
    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      path: '/animations/scroll-reveal.json',
      autoplay: false,
      loop: false
    });
    
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const frame = scrollPercent * animRef.current.totalFrames;
      animRef.current.goToAndStop(frame, true);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      animRef.current?.destroy();
    };
  }, []);
  
  return <div ref={containerRef} style={{ width: 400, height: 400 }} />;
}
```

### Pattern 5: Hover Animation
```jsx
import { useRef } from 'react';
import Lottie from 'lottie-react';
import hoverAnimation from './hover-effect.json';

function HoverCard() {
  const lottieRef = useRef();
  
  return (
    <div
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => lottieRef.current?.stop()}
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={hoverAnimation}
        loop={false}
        autoplay={false}
      />
      <p>Hover me!</p>
    </div>
  );
}
```

### Pattern 6: Multi-State Animation
```jsx
import { useRef, useEffect } from 'react';
import lottie from 'lottie-web';

function MultiStateIcon({ state }) {
  const containerRef = useRef(null);
  const animRef = useRef(null);
  
  useEffect(() => {
    if (!animRef.current) {
      animRef.current = lottie.loadAnimation({
        container: containerRef.current,
        path: '/animations/states.json',
        autoplay: false
      });
    }
    
    // Play specific segment based on state
    const segments = {
      idle: [0, 30],
      loading: [31, 90],
      success: [91, 120],
      error: [121, 150]
    };
    
    const [start, end] = segments[state] || [0, 30];
    animRef.current.playSegments([start, end], true);
  }, [state]);
  
  return <div ref={containerRef} />;
}
```

## Finding & Using Lottie Animations

### LottieFiles.com
1. Browse https://lottiefiles.com/featured
2. Find animation
3. Download JSON
4. Import in your project

### Creating Custom Animations
1. Design in After Effects
2. Export with Bodymovin plugin
3. Get .json file
4. Implement in code

### Customizing Animations
```javascript
// Change colors dynamically
anim.renderer.elements[0].updateDocumentData({
  fc: [1, 0, 0],  // RGB (red)
});

// Adjust playback speed
anim.setSpeed(0.5);  // Half speed for more dramatic

// Loop specific segment
anim.playSegments([30, 60], true);  // Loop frames 30-60
```

## Component Spec Example

```markdown
## Button Component - Loading State

### Lottie Animation

#### Source
- Animation: `spinner-dots.json` from LottieFiles
- URL: https://lottiefiles.com/12345-spinner
- License: Free for commercial use

#### Configuration
```jsx
<Lottie
  animationData={spinnerAnimation}
  loop={true}
  style={{
    width: 24,
    height: 24
  }}
/>
```

#### States
- **Idle**: Button shows text "Submit"
- **Loading**: Text hidden, Lottie spinner visible
- **Success**: Lottie plays success checkmark (once), then shows "Done"

#### Implementation
```jsx
function SubmitButton({ onSubmit, isLoading, isSuccess }) {
  return (
    <button onClick={onSubmit} disabled={isLoading}>
      {isLoading && <Lottie animationData={spinner} />}
      {isSuccess && <Lottie animationData={checkmark} loop={false} />}
      {!isLoading && !isSuccess && "Submit"}
    </button>
  );
}
```
```

## Performance Best Practices

### 1. Choose Right Renderer
```javascript
// SVG - Better quality, more features (default)
lottie.loadAnimation({ renderer: 'svg' });

// Canvas - Better performance for complex animations
lottie.loadAnimation({ renderer: 'canvas' });

// HTML - Rarely used
lottie.loadAnimation({ renderer: 'html' });
```

### 2. Destroy When Done
```javascript
useEffect(() => {
  const anim = lottie.loadAnimation({ /* ... */ });
  
  return () => anim.destroy();  // Cleanup
}, []);
```

### 3. Lazy Load Animations
```jsx
import { lazy, Suspense } from 'react';

const Lottie = lazy(() => import('lottie-react'));

<Suspense fallback={<div>Loading...</div>}>
  <Lottie animationData={data} />
</Suspense>
```

### 4. Reduce JSON Size
- Use Bodymovin settings to reduce file size
- Remove unnecessary layers in After Effects
- Optimize before export

## Integration with Design System

```markdown
## Loading States Spec

### Animations Library
All loading animations use Lottie:

1. **Spinner (Primary)**
   - File: `loading-spinner-primary.json`
   - Size: 32x32px
   - Color: var(--color-primary)
   - Loop: true

2. **Dots (Secondary)**
   - File: `loading-dots.json`
   - Size: 48x48px
   - Loop: true

3. **Success**
   - File: `success-checkmark.json`
   - Size: 64x64px
   - Color: var(--color-success)
   - Loop: false

4. **Error**
   - File: `error-x.json`
   - Size: 64x64px
   - Color: var(--color-error)
   - Loop: false
```

## Amanda's Lottie Mandate

When specifying Lottie animations:

1. **Source the animation**: Link to LottieFiles or note it's custom from AE
2. **Specify dimensions**: Exact width/height in pixels
3. **Define triggers**: Click, hover, scroll, automatic?
4. **Document states**: Loop, play once, reverse, segments?
5. **Performance**: SVG vs Canvas renderer choice
6. **Fallback**: What to show if Lottie fails to load?

## Use Cases

| Use Case | Pattern |
|----------|---------|
| **Loading spinner** | Loop animation, show while fetching |
| **Success/Error feedback** | Play once on state change |
| **Interactive icons** | Play on hover/click |
| **Empty states** | Subtle looping animation |
| **Illustrations** | One-time playback on scroll |
| **Navigation indicators** | Looping arrows/guides |

## Resources
- **LottieFiles**: https://lottiefiles.com/ (animation library)
- **Bodymovin**: AE plugin to export JSON
- **Lottie Editor**: https://lottiefiles.com/lottie-editor (customize without AE)

---

**Remember**: Lottie is the **BRIDGE** between design and development. It allows designers to create sophisticated animations in their comfort zone (After Effects) and developers to implement them with minimal effort. Perfect for micro-interactions, illustrations, and delightful UI feedback.
