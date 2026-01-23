# Curtains.js Guide for Amanda

## What is Curtains.js?
Curtains.js brings WebGL power to DOM elements, allowing you to apply GPU-accelerated effects (distortions, displacements, ripples) to images and videos without removing them from the page flow.

## Official Resources
- **Website**: https://www.curtainsjs.com/
- **Docs**: https://www.curtainsjs.com/documentation.html
- **Examples**: https://www.curtainsjs.com/examples.html

## Why Curtains.js

### Benefits
- **DOM Integration**: WebGL effects on regular HTML elements
- **Preserves Layout**: Elements stay in document flow
- **Scroll Effects**: Easy scroll-based distortions
- **Image/Video Effects**: Hover distortions, transitions
- **Performance**: GPU-accelerated, smooth 60fps

## Installation

```bash
npm install curtainsjs
```

```javascript
import { Curtains, Plane } from 'curtainsjs';

const curtains = new Curtains({
  container: 'canvas'
});

const plane = new Plane(curtains, document.querySelector('.image'), {
  vertexShader: vsCode,
  fragmentShader: fsCode
});
```

## Amanda's Premium Patterns

### Pattern 1: Image Hover Distortion
```html
<div id="canvas"></div>
<div class="plane">
  <img src="image.jpg" alt="" />
</div>
```

```javascript
import { Curtains, Plane } from 'curtainsjs';

const curtains = new Curtains({ container: 'canvas' });

const vs = `
  precision mediump float;
  attribute vec3 aVertexPosition;
  attribute vec2 aTextureCoord;
  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;
  varying vec2 vTextureCoord;
  
  void main() {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vTextureCoord = aTextureCoord;
  }
`;

const fs = `
  precision mediump float;
  varying vec2 vTextureCoord;
  uniform sampler2D uSampler0;
  uniform float uTime;
  uniform vec2 uMouse;
  
  void main() {
    vec2 uv = vTextureCoord;
    
    // Distortion on hover
    float dist = distance(uv, uMouse);
    uv.x += sin(dist * 10.0 - uTime) * 0.02 * (1.0 - dist);
    uv.y += cos(dist * 10.0 - uTime) * 0.02 * (1.0 - dist);
    
    gl_FragColor = texture2D(uSampler0, uv);
  }
`;

const plane = new Plane(curtains, '.plane', {
  vertexShader: vs,
  fragmentShader: fs,
  uniforms: {
    time: { name: 'uTime', type: '1f', value: 0 },
    mouse: { name: 'uMouse', type: '2f', value: [0.5, 0.5] }
  }
});

// Mousemove
document.addEventListener('mousemove', (e) => {
  const mouse = {
    x: e.clientX / window.innerWidth,
    y: 1.0 - e.clientY / window.innerHeight
  };
  plane.uniforms.mouse.value = [mouse.x, mouse.y];
});

// Animation loop
plane.onRender(() => {
  plane.uniforms.time.value++;
});
```

### Pattern 2: Scroll Displacement
```javascript
const curtains = new Curtains({ container: 'canvas' });

// Fragment shader with displacement
const fs = `
  precision mediump float;
  varying vec2 vTextureCoord;
  uniform sampler2D uSampler0;
  uniform sampler2D uDisplacement;  // Displacement map
  uniform float uProgress;  // Scroll progress
  
  void main() {
    vec2 uv = vTextureCoord;
    
    // Get displacement
    vec4 disp = texture2D(uDisplacement, uv);
    vec2 distortedUV = vec2(
      uv.x + (disp.r - 0.5) * uProgress * 0.1,
      uv.y + (disp.g - 0.5) * uProgress * 0.1
    );
    
    gl_FragColor = texture2D(uSampler0, distortedUV);
  }
`;

const plane = new Plane(curtains, '.scrolling-image', {
  fragmentShader: fs,
  texturesOptions: {
    displacement: {
      sampler: 'uDisplacement',
      fromTexture: curtains.addTexture('/displacement-map.jpg')
    }
  },
  uniforms: {
    progress: { name: 'uProgress', type: '1f', value: 0 }
  }
});

// Update on scroll
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const progress = scrollY / (document.body.scrollHeight - window.innerHeight);
  plane.uniforms.progress.value = progress;
});
```

### Pattern 3: Page Transition Effect
```javascript
// Shader for dissolve transition
const fs = `
  precision mediump float;
  varying vec2 vTextureCoord;
  uniform sampler2D uFrom;  // Current page
  uniform sampler2D uTo;    // Next page
  uniform float uProgress;
  
  void main() {
    vec2 uv = vTextureCoord;
    
    vec4 fromColor = texture2D(uFrom, uv);
    vec4 toColor = texture2D(uTo, uv);
    
    // Noise-based dissolve
    float noise = fract(sin(dot(uv, vec2(12.9898, 78.233))) * 43758.5453);
    float edge = smoothstep(uProgress - 0.1, uProgress + 0.1, noise);
    
    gl_FragColor = mix(fromColor, toColor, edge);
  }
`;

function transitionTo(nextPageImage) {
  plane.updateTexture(1, nextPageImage);  // Set "to" texture
  
  gsap.to(plane.uniforms.progress, {
    value: 1,
    duration: 1.5,
    ease: 'power2.inOut',
    onComplete: () => {
      // Swap textures
      plane.updateTexture(0, nextPageImage);
      plane.uniforms.progress.value = 0;
    }
  });
}
```

### Pattern 4: Ripple Effect on Click
```javascript
const fs = `
  precision mediump float;
  varying vec2 vTextureCoord;
  uniform sampler2D uSampler0;
  uniform vec2 uRippleOrigin;
  uniform float uRippleTime;
  
  void main() {
    vec2 uv = vTextureCoord;
    
    float dist = distance(uv, uRippleOrigin);
    float ripple = sin((dist - uRippleTime * 0.5) * 30.0) * exp(-dist * 5.0) * 0.05;
    
    vec2 distortedUV = uv + normalize(uv - uRippleOrigin) * ripple;
    
    gl_FragColor = texture2D(uSampler0, distortedUV);
  }
`;

const plane = new Plane(curtains, '.clickable-image', {
  fragmentShader: fs,
  uniforms: {
    rippleOrigin: { name: 'uRippleOrigin', type: '2f', value: [0.5, 0.5] },
    rippleTime: { name: 'uRippleTime', type: '1f', value: 0 }
  }
});

document.querySelector('.clickable-image').addEventListener('click', (e) => {
  const bounds = e.target.getBoundingClientRect();
  const x = (e.clientX - bounds.left) / bounds.width;
  const y = 1.0 - (e.clientY - bounds.top) / bounds.height;
  
  plane.uniforms.rippleOrigin.value = [x, y];
  plane.uniforms.rippleTime.value = 0;
  
  gsap.to(plane.uniforms.rippleTime, {
    value: 1,
    duration: 1,
    ease: 'power2.out'
  });
});
```

## Simpler Alternative: OGL

If Curtains.js is too complex, consider **OGL** (much lighter WebGL library):

```bash
npm install ogl
```

```javascript
import { Renderer, Program, Mesh, Plane as PlaneGeometry } from 'ogl';

const renderer = new Renderer();
const gl = renderer.gl;
document.body.appendChild(gl.canvas);

const geometry = new PlaneGeometry(gl);
const program = new Program(gl, {
  vertex,
  fragment,
  uniforms: {
    uTime: { value: 0 }
  }
});

const mesh = new Mesh(gl, { geometry, program });

function update(t) {
  requestAnimationFrame(update);
  program.uniforms.uTime.value = t * 0.001;
  renderer.render({ scene: mesh });
}
update(0);
```

## Component Spec Example

```markdown
## Image Gallery - Hover Distortion

### WebGL Effect (Curtains.js)

#### Effect Type
- Displacement distortion on mouse hover
- Ripple emanates from cursor position
- Smooth elastic easing

#### Shader Configuration
- **Vertex Shader**: Standard passthrough
- **Fragment Shader**: Custom displacement
  - Uniform `uMouse`: vec2 (mouse position in UV space)
  - Uniform `uTime`: float (animated time)
  - Effect radius: 0.2 (20% of image)
  - Displacement strength: 0.02

#### Implementation
```javascript
const plane = new Plane(curtains, '.gallery-image', {
  fragmentShader: displacementFS,
  uniforms: {
    mouse: { name: 'uMouse', type: '2f', value: [0.5, 0.5] },
    time: { name: 'uTime', type: '1f', value: 0 }
  }
});

// Update mouse position
element.addEventListener('mousemove', (e) => {
  const x = e.offsetX / e.target.offsetWidth;
  const y = 1.0 - e.offsetY / e.target.offsetHeight;
  plane.uniforms.mouse.value = [x, y];
});

// Animation loop
plane.onRender(() => {
  plane.uniforms.time.value += 0.01;
});
```

#### Performance Target
- Maintain 60fps on desktop
- Disable WebGL effects on mobile (show static images)
```

## Amanda's Curtains Mandate

When specifying Curtains.js effects:

1. **Describe the visual effect**: "Ripple on click", "Distortion on hover"
2. **Specify shader uniforms**: What variables control the effect?
3. **Document interaction**: Mouse, scroll, click triggers?
4. **Performance targets**: FPS requirements, mobile behavior
5. **Fallback**: What happens if WebGL isn't supported?
6. **Consider simpler alternatives**: Maybe CSS filters or Lottie could work?

## Use Cases

| Use Case | Implementation |
|----------|----------------|
| **Hover distortion** | Mouse position uniform + displacement |
| **Scroll reveal** | Scroll progress uniform + dissolve |
| **Page transitions** | Two textures + mix shader |
| **Ripple on click** | Click position + time-based ripple |
| **Video effects** | Video texture + custom shaders |

## Performance Considerations

- WebGL requires GPU
- Test on target devices
- Provide fallback forolder browsers
- Consider disabling on mobile

---

**Remember**: Curtains.js and WebGL effects are **HIGH-IMPACT** but require expertise. Use sparingly for hero images, key product visuals, or signature brand moments. Don't overuse—one or two stunning WebGL effects per page is enough.
