# Three.js Integration Guide for Amanda

## What is Three.js?
Three.js is a powerful 3D graphics library that makes creating immersive 3D experiences on the web accessible. It's your tool for creating jaw-dropping, premium visual experiences that will WOW users.

## Official Documentation
- **Website**: https://threejs.org/
- **Docs**: https://threejs.org/docs/
- **Examples**: https://threejs.org/examples/

## Core Capabilities for UI/UX

### 1. **3D Hero Sections**
Create stunning landing page heroes with 3D elements:
- Rotating product showcases
- Abstract 3D shapes that respond to mouse movement
- Particle systems for premium backgrounds
- Morphing geometries for transitions

### 2. **Interactive Data Visualization**
Transform boring charts into immersive 3D experiences:
- 3D bar charts and graphs
- Globe visualizations for geographic data
- Network graphs in 3D space
- Animated infographics

### 3. **Scroll-Based 3D Experiences**
Create narrative-driven experiences:
- Camera paths that follow scroll position
- Objects that transform as user scrolls
- Parallax effects with depth
- Progressive reveals of 3D scenes

### 4. **Material & Lighting for Premium Feel**
- **MeshPhysicalMaterial**: Realistic materials with clearcoat, transmission
- **Environment maps**: HDR lighting for photorealism
- **Bloom effects**: Post-processing for glow and premium feel
- **Reflections & Refractions**: Glass and metallic surfaces

## Essential Three.js Components

### Basic Scene Setup
```javascript
import * as THREE from 'three';

// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
  antialias: true, 
  alpha: true  // Transparent background
});

// Position camera
camera.position.z = 5;

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
```

### Geometries for UI
- `SphereGeometry`: Orbs, planets, bubbles
- `BoxGeometry`: Cards, containers in 3D
- `TorusGeometry`: Rings, halos, loading indicators
- `IcosahedronGeometry`: Abstract tech shapes
- `PlaneGeometry`: Flat surfaces, cards
- `Custom BufferGeometry`: Completely custom shapes

### Materials for Premium Feel
```javascript
// Physical Material (most realistic)
const material = new THREE.MeshPhysicalMaterial({
  color: 0x2196f3,
  metalness: 0.9,
  roughness: 0.1,
  clearcoat: 1.0,
  clearcoatRoughness: 0.1,
  transmission: 0.9,  // Glass effect
  thickness: 0.5
});

// Standard Material (good performance)
const material2 = new THREE.MeshStandardMaterial({
  color: 0xff6b6b,
  metalness: 0.7,
  roughness: 0.3,
  emissive: 0xff6b6b,
  emissiveIntensity: 0.2
});
```

### Mouse Interaction
```javascript
// Raycaster for detecting 3D object clicks
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

function onMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObjects(scene.children);
  
  // Do something with intersected objects
}
```

### Post-Processing Effects
```javascript
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

// Bloom for premium glow
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  1.5,  // strength
  0.4,  // radius
  0.85  // threshold
);
composer.addPass(bloomPass);
```

## Use Cases in Your Designs

### 1. Premium Landing Pages
- **Hero**: Floating 3D logo or product with HDR lighting
- **Background**: Subtle particle system or abstract shapes
- **Scroll interaction**: Camera zoom through 3D scene

### 2. Dashboard Enhancements
- **KPI Cards**: Animated 3D bars rising from cards
- **Loading States**: 3D spinner instead of boring 2D
- **Data Viz**: Interactive 3D charts users can rotate

### 3. Onboarding Experiences
- **Step Indicators**: 3D path user travels along
- **Form Backgrounds**: Morphing geometric shapes
- **Success States**: Exploding particle effects

### 4. Brand Elements
- **Logo**: 3D version that responds to mouse
- **Icons**: Depth and dimension on hover
- **Transitions**: 3D page transitions

## Performance Considerations

### Optimization Tips
1. **Use instancing** for repeated objects
2. **Dispose geometries and materials** when done
3. **Use lower poly counts** for mobile
4. **Implement LOD** (Level of Detail) for complex scenes
5. **Limit post-processing** on lower-end devices

### Responsive 3D
```javascript
// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
```

## Integration with Your Workflow

### In Design System Preview
```html
<!-- Add to design_system_preview.html -->
<script type="module">
  import * as THREE from 'https://cdn.skypack.dev/three@0.152.0';
  
  // Create 3D background for hero section
  // This demonstrates premium visual capability
</script>
```

### In Component Specs
When specifying a component with 3D:
```markdown
## Hero Component

### 3D Background
- **Library**: Three.js
- **Element**: Rotating icosahedron with MeshPhysicalMaterial
- **Material**: 
  - Color: var(--color-primary)
  - Metalness: 0.9
  - Roughness: 0.1
  - Clearcoat: 1.0
- **Animation**: Slow rotation (0.005 rad/frame)
- **Interaction**: Follows mouse position with damping
- **Performance**: 60fps on modern devices, graceful degradation on mobile
```

## Common Patterns

### Scroll-Synced 3D Scene
```javascript
let scrollY = window.scrollY;
window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
});

function animate() {
  // Sync camera to scroll
  camera.position.y = -(scrollY / window.innerHeight) * 5;
  
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
```

### Mouse-Following Object
```javascript
const targetX = (mouse.x * 0.5);
const targetY = (mouse.y * 0.5);

function animate() {
  // Smooth follow with lerp
  mesh.rotation.y += 0.05 * (targetX - mesh.rotation.y);
  mesh.rotation.x += 0.05 * (targetY - mesh.rotation.x);
  
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
```

## Amanda's Three.js Mandate

When designing premium experiences:

1. **Always specify the 3D element's purpose**: Don't add 3D just because. It should enhance the brand story or user understanding.

2. **Define material properties using design tokens**: Materials should use colors from your design system.

3. **Specify performance targets**: "Must maintain 60fps on MacBook Pro 2020" or "Gracefully disable on mobile"

4. **Document interactions**: How does it respond to mouse? To scroll? To viewport size?

5. **Provide fallbacks**: What happens if WebGL isn't supported?

## Resources for Inspiration
- **Awwwards**: https://www.awwwards.com/ (filter by Three.js)
- **Three.js Journey**: https://threejs-journey.com/ (comprehensive course)
- **Bruno Simon's Portfolio**: https://bruno-simon.com/ (legendary example)
- **Codrops**: https://tympanus.net/codrops/ (cutting-edge demos)

---

**Remember**: Three.js is about creating PREMIUM, MEMORABLE experiences. Every 3D element should serve the brand and elevate the user's emotional response. Make it smooth, make it beautiful, make it purposeful.
