# Swiper Guide for Amanda

## What is Swiper?
Swiper is the most modern mobile-first slider/carousel library. It's touch-enabled, hardware-accelerated, and packed with features for creating premium slider experiences.

## Official Resources
- **Website**: https://swiperjs.com/
- **Demos**: https://swiperjs.com/demos
- **API**: https://swiperjs.com/swiper-api

## Why Swiper

### Benefits
- **Mobile-First**: Perfect touch gestures
- **Hardware Accelerated**: Smooth 60fps performance
- **Rich Features**: Parallax, lazy loading, zoom, thumbs, etc.
- **Framework Support**: Vanilla JS, React, Vue, Angular, Svelte
- **Accessible**: Keyboard navigation, ARIA labels
- **Responsive**: Breakpoint-based configuration

## Installation

```bash
npm install swiper
```

### Vanilla JS
```javascript
import Swiper from 'swiper';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true
});
```

### React
```jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Carousel() {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
}
```

## Amanda's Premium Patterns

### Pattern 1: Hero Carousel
```jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

<Swiper
  modules={[Autoplay, EffectFade, Pagination]}
  effect="fade"
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  loop={true}
>
  <SwiperSlide>
    <img src="hero1.jpg" alt="Hero 1" />
  </SwiperSlide>
  <SwiperSlide>
    <img src="hero2.jpg" alt="Hero 2" />
  </SwiperSlide>
</Swiper>
```

### Pattern 2: Product Gallery with Thumbs
```jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Zoom } from 'swiper/modules';
import { useState } from 'react';

function ProductGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
  return (
    <>
      {/* Main Gallery */}
      <Swiper
        modules={[Thumbs, Zoom]}
        thumbs={{ swiper: thumbsSwiper }}
        zoom={true}
        spaceBetween={10}
      >
        <SwiperSlide>
          <div className="swiper-zoom-container">
            <img src="product1.jpg" />
          </div>
        </SwiperSlide>
        {/* More slides */}
      </Swiper>
      
      {/* Thumbnails */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        spaceBetween={10}
        watchSlidesProgress
      >
        <SwiperSlide><img src="thumb1.jpg" /></SwiperSlide>
        {/* More thumbs */}
      </Swiper>
    </>
  );
}
```

### Pattern 3: Testimonials Slider
```jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

<Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={30}
  slidesPerView={1}
  pagination={{ 
    clickable: true,
    dynamicBullets: true 
  }}
  autoplay={{ delay: 8000 }}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}
>
  {testimonials.map(item => (
    <SwiperSlide key={item.id}>
      <blockquote>{item.quote}</blockquote>
      <cite>{item.author}</cite>
    </SwiperSlide>
  ))}
</Swiper>
```

### Pattern 4: Card Carousel (Partial Slides)
```jsx
<Swiper
  slidesPerView="auto"
  spaceBetween={20}
  centeredSlides={true}
  loop={true}
  breakpoints={{
    320: { slidesPerView: 1.2 },
    640: { slidesPerView: 2.2 },
    1024: { slidesPerView: 3.2 }
  }}
>
  {cards.map(card => (
    <SwiperSlide style={{ width: '300px' }}>
      <Card {...card} />
    </SwiperSlide>
  ))}
</Swiper>
```

### Pattern 5: Parallax Effect
```jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax } from 'swiper/modules';

<Swiper
  modules={[Parallax]}
  parallax={true}
  speed={600}
>
  <div
    slot="container-start"
    className="parallax-bg"
    style={{ backgroundImage: 'url(bg.jpg)' }}
    data-swiper-parallax="-23%"
  ></div>
  
  <SwiperSlide>
    <div data-swiper-parallax="-300">Title</div>
    <div data-swiper-parallax="-200">Subtitle</div>
    <div data-swiper-parallax="-100">Text</div>
  </SwiperSlide>
</Swiper>
```

### Pattern 6: Vertical Timeline
```jsx
<Swiper
  direction="vertical"
  slidesPerView={3}
  spaceBetween={20}
  mousewheel={true}
  style={{ height: '600px' }}
>
  {events.map(event => (
    <SwiperSlide>
      <div className="timeline-item">
        <time>{event.date}</time>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
```

## Essential Modules

### Navigation
```jsx
import { Navigation } from 'swiper/modules';

<Swiper
  modules={[Navigation]}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
>
  {/* slides */}
</Swiper>
```

### Pagination
```jsx
import { Pagination } from 'swiper/modules';

<Swiper
  modules={[Pagination]}
  pagination={{
    clickable: true,
    dynamicBullets: true,
    renderBullet: (index, className) => {
      return `<span class="${className}">${index + 1}</span>`;
    }
  }}
>
```

### Autoplay
```jsx
<Swiper
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  }}
>
```

### Effect Variants
```jsx
// Fade
<Swiper effect="fade" />

// Cube (3D)
<Swiper effect="cube" cubeEffect={{ shadow: true }} />

// Coverflow
<Swiper
  effect="coverflow"
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true
  }}
/>

// Cards
<Swiper effect="cards" />

// Creative (custom)
<Swiper
  effect="creative"
  creativeEffect={{
    prev: { translate: ['-120%', 0, -500] },
    next: { translate: ['120%', 0, -500] }
  }}
/>
```

## Responsive Breakpoints
```jsx
<Swiper
  spaceBetween={20}
  breakpoints={{
    // Mobile
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // Tablet
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // Desktop
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // Large Desktop
    1440: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }}
>
```

## Component Spec Example

```markdown
## Product Showcase - Swiper Carousel

### Configuration
- **Module**: Swiper 11+
- **Modules Used**: Navigation, Pagination, Autoplay, EffectFade

### Desktop Behavior
- Slides per view: 3
- Space between: 32px
- Navigation: Arrow buttons on hover
- Autoplay: 5s delay, pause on hover

### Mobile Behavior
- Slides per view: 1.2 (show partial next slide)
- Space between: 16px
- Touch swipe enabled
- Pagination: Dots at bottom

### Implementation
```jsx
<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={32}
  slidesPerView={3}
  navigation={true}
  pagination={{ clickable: true }}
  autoplay={{ 
    delay: 5000,
    pauseOnMouseEnter: true 
  }}
  breakpoints={{
    320: { 
      slidesPerView: 1.2, 
      spaceBetween: 16 
    },
    1024: { 
      slidesPerView: 3, 
      spaceBetween: 32 
    }
  }}
>
  {products.map(product => (
    <SwiperSlide key={product.id}>
      <ProductCard {...product} />
    </SwiperSlide>
  ))}
</Swiper>
```

### Styling
- Custom navigation button colors: var(--color-primary)
- Pagination bullet active color: var(--color-primary)
- Slide transition: 600ms ease-out
```

## Performance Best Practices

### 1. Lazy Load Images
```jsx
import { Lazy } from 'swiper/modules';

<Swiper modules={[Lazy]} lazy={true}>
  <SwiperSlide>
    <img data-src="image.jpg" className="swiper-lazy" />
    <div className="swiper-lazy-preloader"></div>
  </SwiperSlide>
</Swiper>
```

### 2. Virtual Slides (Large Datasets)
```jsx
import { Virtual } from 'swiper/modules';

<Swiper modules={[Virtual]} virtual>
  {slides.map((slide, index) => (
    <SwiperSlide key={index} virtualIndex={index}>
      {slide}
    </SwiperSlide>
  ))}
</Swiper>
```

### 3. Destroy When Unmounted
```jsx
useEffect(() => {
  return () => {
    // Cleanup handled automatically in React
  };
}, []);
```

## Amanda's Swiper Mandate

When specifying Swiper:

1. **List modules needed**: Navigation, Pagination, Autoplay, etc.
2. **Define breakpoints**: Mobile, tablet, desktop behaviors
3. **Specify effects**: Fade, slide, cube, coverflow?
4. **Document touch behavior**: Swipe enabled? Resistance?
5. **Custom styling**: Navigation button colors, pagination style
6. **Accessibility**: Keyboard nav, ARIA labels

## Use Cases

| Use Case | Configuration |
|----------|---------------|
| **Hero slider** | EffectFade + Autoplay + Pagination |
| **Product gallery** | Thumbs + Zoom + Navigation |
| **Testimonials** | Auto width slides + Centered + Loop |
| **Portfolio** | Coverflow effect + Mousewheel |
| **Timeline** | Vertical direction + Mousewheel |
| **Card deck** | Cards effect + Swipe gestures |

---

**Remember**: Swiper is the **INDUSTRY STANDARD** for sliders. It's battle-tested, performant, and handles edge cases you haven't thought of. Use it any time you need a carousel—don't reinvent the wheel.
