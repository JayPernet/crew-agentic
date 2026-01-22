# Three.js + GSAP: The Ultimate Premium UI Combo

## Why Combine Them?

**Three.js** creates the stunning 3D visuals. **GSAP** orchestrates them with buttery-smooth animations and scroll synchronization. Together, they create award-winning, jaw-dropping web experiences.

## Perfect Combinations

### 1. **Scroll-Synced 3D Hero**
Three.js renders the 3D scene, GSAP's ScrollTrigger controls it.

```javascript
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Three.js scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

// Create 3D mesh
const geometry = new THREE.IcosahedronGeometry(1, 0);
const material = new THREE.MeshPhysicalMaterial({
  color: 0x6366f1,
  metalness: 0.9,
  roughness: 0.1,
  clearcoat: 1.0
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// GSAP controls the 3D animation based on scroll
gsap.to(mesh.rotation, {
  x: Math.PI * 2,
  y: Math.PI * 2,
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'bottom top',
    scrub: 1  // Smooth scroll sync
  }
});

gsap.to(mesh.scale, {
  x: 2,
  y: 2,
  z: 2,
  scrollTrigger: {
    trigger: '.hero-section',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  }
});
```

### 2. **3D Card Hover with GSAP**
Three.js renders premium 3D card, GSAP handles the interaction.

```javascript
// Three.js - 3D card setup
const cardMesh = new THREE.Mesh(
  new THREE.BoxGeometry(2, 3, 0.1),
  new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0.1,
    roughness: 0.3,
    clearcoat: 1.0
  })
);

// GSAP - Smooth hover animation
card.addEventListener('mouseenter', (e) => {
  const bounds = card.getBoundingClientRect();
  const mouseX = (e.clientX - bounds.left) / bounds.width - 0.5;
  const mouseY = (e.clientY - bounds.top) / bounds.height - 0.5;
  
  gsap.to(cardMesh.rotation, {
    y: mouseX * 0.5,
    x: -mouseY * 0.5,
    duration: 0.6,
    ease: 'power2.out'
  });
  
  gsap.to(cardMesh.position, {
    z: 0.3,
    duration: 0.4,
    ease: 'back.out(1.4)'
  });
});

card.addEventListener('mouseleave', () => {
  gsap.to(cardMesh.rotation, {
    y: 0,
    x: 0,
    duration: 0.6,
    ease: 'power2.out'
  });
  
  gsap.to(cardMesh.position, {
    z: 0,
    duration: 0.4,
    ease: 'power2.in'
  });
});
```

### 3. **Particle System with Choreographed Entrance**
Three.js creates particles, GSAP animates them in sequence.

```javascript
// Three.js - Particle system
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 1000;
const positions = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
  positions[i] = (Math.random() - 0.5) * 10;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.05,
  color: 0x6366f1,
  transparent: true,
  opacity: 0
});

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// GSAP - Choreographed entrance
const tl = gsap.timeline();

tl.to(particlesMaterial, {
  opacity: 1,
  duration: 1.5,
  ease: 'power2.out'
})
.to(particles.rotation, {
  y: Math.PI * 2,
  duration: 10,
  ease: 'none',
  repeat: -1
}, 0);

// Also animate on scroll
gsap.to(particles.position, {
  y: -5,
  scrollTrigger: {
    trigger: '.section',
    start: 'top top',
    end: 'bottom top',
    scrub: 2
  }
});
```

### 4. **3D Data Visualization with Animated Bars**
Three.js renders 3D bars, GSAP animates them counting up.

```javascript
// Create 3D bar chart
function create3DBar(value, index) {
  const bar = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0, 0.5),  // Start with height 0
    new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      metalness: 0.8,
      roughness: 0.2
    })
  );
  
  bar.position.x = index * 1;
  scene.add(bar);
  
  // GSAP animates the bar growing
  gsap.to(bar.scale, {
    y: value,
    duration: 1.2,
    delay: index * 0.1,  // Stagger
    ease: 'back.out(1.2)',
    scrollTrigger: {
      trigger: '.chart-section',
      start: 'top 70%',
      toggleActions: 'play none none reset'
    }
  });
  
  return bar;
}

// Create multiple bars
const data = [3, 5, 2, 7, 4];
data.forEach((value, index) => create3DBar(value, index));
```

### 5. **Loading Sequence: 3D Logo Reveal**
Three.js renders 3D logo, GSAP orchestrates the reveal.

```javascript
// Three.js - Logo pieces
const logoPieces = [
  new THREE.Mesh(geometry1, material),
  new THREE.Mesh(geometry2, material),
  new THREE.Mesh(geometry3, material)
];

// Start dispersed and transparent
logoPieces.forEach(piece => {
  piece.position.set(
    Math.random() * 10 - 5,
    Math.random() * 10 - 5,
    Math.random() * 10 - 5
  );
  piece.material.opacity = 0;
  scene.add(piece);
});

// GSAP - Assemble the logo
const logoTimeline = gsap.timeline();

logoPieces.forEach((piece, i) => {
  logoTimeline.to(piece.position, {
    x: finalPositions[i].x,
    y: finalPositions[i].y,
    z: finalPositions[i].z,
    duration: 1.5,
    ease: 'back.out(1.7)'
  }, i * 0.2);
  
  logoTimeline.to(piece.material, {
    opacity: 1,
    duration: 0.8
  }, i * 0.2);
  
  logoTimeline.to(piece.rotation, {
    x: 0,
    y: 0,
    z: 0,
    duration: 1.2,
    ease: 'power3.out'
  }, i * 0.2);
});

// Spin after assembly
logoTimeline.to(scene.rotation, {
  y: Math.PI * 2,
  duration: 2,
  ease: 'power1.inOut'
});
```

### 6. **Mouse-Following 3D Element with Smooth Damping**
Three.js renders object, GSAP smoothly follows mouse.

```javascript
const mouse = { x: 0, y: 0 };

window.addEventListener('mousemove', (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

// GSAP smoothly animates to mouse position
function animate() {
  gsap.to(mesh.rotation, {
    y: mouse.x * Math.PI * 0.3,
    x: mouse.y * Math.PI * 0.3,
    duration: 1.5,
    ease: 'power2.out',
    overwrite: true
  });
  
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
```

### 7. **Morphing 3D Shapes**
Three.js handles the geometry, GSAP morphs between states.

```javascript
// Create morphable geometry
const sphere = new THREE.SphereGeometry(1, 32, 32);
const cube = new THREE.BoxGeometry(2, 2, 2);

const mesh = new THREE.Mesh(sphere, material);
scene.add(mesh);

// Store both geometries' positions
const spherePositions = sphere.attributes.position.array;
const cubePositions = cube.attributes.position.array;

// GSAP morphs between them
function morphToCube() {
  gsap.to(mesh.geometry.attributes.position.array, {
    endArray: cubePositions,
    duration: 1.5,
    ease: 'power2.inOut',
    onUpdate: () => {
      mesh.geometry.attributes.position.needsUpdate = true;
    }
  });
}
```

## Amanda's Integration Strategy

### In design_system_preview.html
```html
<!DOCTYPE html>
<html>
<head>
  <title>Design System Preview - With 3D</title>
</head>
<body>
  <div class="hero-3d-container">
    <canvas id="three-canvas"></canvas>
  </div>
  
  <script type="module">
    import * as THREE from 'https://cdn.skypack.dev/three@0.152.0';
    import gsap from 'https://cdn.skypack.dev/gsap@3.12.0';
    import { ScrollTrigger } from 'https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger';
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Create premium 3D background
    // This demonstrates the visual potential
  </script>
</body>
</html>
```

### In spec_frontend.md
```markdown
## Hero Section - 3D Background

### Three.js Scene
- **Geometry**: IcosahedronGeometry(1.5, 1)
- **Material**: MeshPhysicalMaterial
  - Color: var(--color-primary)
  - Metalness: 0.9
  - Roughness: 0.1
  - Clearcoat: 1.0
  - Transmission: 0.8 (glass effect)
- **Lighting**: 
  - Ambient: 0x404040
  - Point light: 0xffffff, intensity 2

### GSAP Animations

#### On Page Load
```javascript
const tl = gsap.timeline({ defaults: { ease: 'power3.out' }});
tl.from(mesh.scale, { x: 0, y: 0, z: 0, duration: 1.2, ease: 'back.out(1.7)' })
  .to(mesh.rotation, { y: Math.PI * 2, duration: 2, ease: 'power1.inOut' }, 0);
```

#### On Scroll
```javascript
gsap.to(mesh.rotation, {
  x: Math.PI * 2,
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  }
});
```

#### On Mouse Move
```javascript
gsap.to(mesh.rotation, {
  y: mouseX * 0.3,
  x: mouseY * 0.3,
  duration: 1.5,
  ease: 'power2.out'
});
```

### Performance Target
- **FPS**: Maintain 60fps on MacBook Pro 2020+
- **Mobile**: Reduce to simpler geometry or static image
- **Fallback**: CSS gradient background if WebGL unavailable
```

## Best Practices When Combining

### 1. Use GSAP for Camera Animations
```javascript
// GSAP is better for smooth camera movements
gsap.to(camera.position, {
  z: 10,
  duration: 2,
  ease: 'power2.inOut',
  scrollTrigger: { /* ... */ }
});
```

### 2. Animate Material Properties with GSAP
```javascript
// Smoothly change material colors/properties
gsap.to(material, {
  metalness: 0.2,
  roughness: 0.8,
  duration: 1,
  ease: 'power2.out'
});

gsap.to(material.color, {
  r: 1,
  g: 0,
  b: 0,
  duration: 1.5
});
```

### 3. Coordinate Multiple Elements
```javascript
const masterTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: '.section',
    start: 'top top',
    end: 'bottom top',
    scrub: 1
  }
});

// Orchestrate both 2D and 3D elements
masterTimeline
  .to('.ui-element', { opacity: 0 })
  .to(mesh3D.position, { y: 5 }, '<')  // At same time
  .to('.next-element', { y: 0 });
```

### 4. Cleanup on Component Unmount
```javascript
// React example
useEffect(() => {
  // Setup Three.js scene
  const scene = new THREE.Scene();
  
  // Setup GSAP animations
  const animations = [];
  animations.push(gsap.to(mesh, { /* ... */ }));
  
  return () => {
    // Kill GSAP animations
    animations.forEach(anim => anim.kill());
    
    // Dispose Three.js resources
    scene.traverse(object => {
      if (object.geometry) object.geometry.dispose();
      if (object.material) object.material.dispose();
    });
    renderer.dispose();
  };
}, []);
```

## Common Patterns Cheat Sheet

| Goal | Three.js | GSAP |
|------|----------|------|
| **Scroll-based 3D** | Render scene | ScrollTrigger controls camera/objects |
| **Interactive 3D card** | Render 3D card | Animate rotation on hover |
| **3D data viz** | Create 3D bars/charts | Animate values counting up |
| **Page load sequence** | 3D elements | Timeline orchestration |
| **Particle effects** | Particle system | Fade in + movement |
| **3D morph** | Multiple geometries | Tween between vertex positions |
| **Camera movement** | Scene setup | Animate camera position/rotation |

## Performance Checklist

- [ ] Use `will-change` CSS for animated elements
- [ ] Dispose Three.js geometries/materials when done
- [ ] Kill GSAP animations on cleanup
- [ ] Use `scrub` for scroll animations (better performance)
- [ ] Test on target devices (60fps minimum)
- [ ] Implement reduced motion fallback
- [ ] Provide non-WebGL fallback

---

**The Power of Combination**: Three.js creates visual WOW factor. GSAP makes it feel PREMIUM and POLISHED. Together, they create unforgettable experiences that users will remember and talk about.
