# tsParticles Guide for Amanda

## What is tsParticles?
tsParticles is the modern, TypeScript-based successor to particles.js. It creates interactive particle systems for backgrounds and effects without the overhead of Three.js.

## Official Resources
- **Website**: https://particles.js.org/
- **GitHub**: https://github.com/matteobruni/tsparticles
- **Editor**: https://particles.js.org/samples/ (visual configurator)
- **Codepen**: https://codepen.io/collection/DPOage (examples)

## Why tsParticles

### Benefits
- **Lightweight**: Smaller than Three.js for particle effects
- **Interactive**: Particles respond to mouse/touch
- **Customizable**: Infinite visual possibilities
- **Performance**: Canvas-based, optimized
- **Framework Support**: Vanilla JS, React, Vue, Angular, Svelte

## Installation

```bash
npm install tsparticles
```

### Vanilla JS
```javascript
import { tsParticles } from "tsparticles-engine";
import { loadFull } from "tsparticles";

loadFull(tsParticles).then(() => {
  tsParticles.load("tsparticles", {
    particles: {
      number: { value: 80 },
      color: { value: "#6366f1" },
      shape: { type: "circle" },
      size: { value: 3 }
    }
  });
});
```

### React
```bash
npm install react-tsparticles tsparticles
```

```jsx
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          links: {
            enable: true,
            color: "#ffffff"
          }
        }
      }}
    />
  );
}
```

## Amanda's Premium Patterns

### Pattern 1: Hero Background (Classic)
```jsx
<Particles
  options={{
    background: {
      color: "transparent"
    },
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#6366f1"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: { min: 1, max: 3 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#6366f1",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: {
          default: "bounce"
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        }
      }
    }
  }}
/>
```

### Pattern 2: Constellation Effect (Premium)
```jsx
<Particles
  options={{
    particles: {
      number: { value: 100 },
      color: { value: ["#8b5cf6", "#ec4899", "#6366f1"] },
      shape: { type: "star" },
      opacity: {
        value: 0.8,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: { min: 1, max: 4 }
      },
      links: {
        enable: true,
        distance: 120,
        color: "#ffffff",
        opacity: 0.2,
        width: 1,
        triangles: {
          enable: true,
          color: "#8b5cf6",
          opacity: 0.05
        }
      },
      move: {
        enable: true,
        speed: 0.5
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble"
        }
      },
      modes: {
        bubble: {
          distance: 200,
          size: 8,
          duration: 2,
          opacity: 1
        }
      }
    }
  }}
/>
```

### Pattern 3: Confetti Explosion
```jsx
import { useCallback } from 'react';
import Particles from 'react-tsparticles';

function SuccessConfetti({ show }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  
  if (!show) return null;
  
  return (
    <Particles
      init={particlesInit}
      options={{
        particles: {
          number: { value: 200 },
          color: {
            value: ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF"]
          },
          shape: {
            type: ["circle", "square", "triangle"]
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              minimumValue: 0,
              speed: 2,
              destroy: "min"
            }
          },
          size: {
            value: { min: 3, max: 8 }
          },
          move: {
            enable: true,
            speed: { min: 5, max: 15 },
            direction: "none",
            gravity: {
              enable: true,
              acceleration: 20
            },
            outModes: {
              default: "destroy"
            }
          }
        },
        emitters: {
          position: {
            x: 50,
            y: 0
          },
          rate: {
            delay: 0.1,
            quantity: 10
          },
          life: {
            duration: 0.1,
            count: 1
          }
        }
      }}
    />
  );
}
```

### Pattern 4: Floating Bubbles
```jsx
<Particles
  options={{
    particles: {
      number: { value: 30 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.3,
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0.1
        }
      },
      size: {
        value: { min: 20, max: 80 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 10,
          sync: false
        }
      },
      move: {
        enable: true,
        speed: 1,
        direction: "top",
        outModes: {
          default: "out",
          top: "destroy",
          bottom: "none"
        }
      }
    },
    background: {
      color: "transparent"
    }
  }}
/>
```

### Pattern 5: Snow Effect
```jsx
<Particles
  options={{
    particles: {
      number: { value: 100 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: 0.8,
        random: true
      },
      size: {
        value: { min: 1, max: 5 },
        random: true
      },
      move: {
        enable: true,
        speed: 1,
        direction: "bottom",
        straight: false,
        wobble: {
          enable: true,
          distance: 10,
          speed: 2
        }
      }
    }
  }}
/>
```

### Pattern 6: Mouse Trail
```jsx
<Particles
  options={{
    particles: {
      number: { value: 0 },
      color: { value: "#6366f1" },
      shape: { type: "circle" },
      opacity: {
        value: 1,
        animation: {
          enable: true,
          minimumValue: 0,
          speed: 2,
          destroy: "min"
        }
      },
      size: {
        value: 5,
        animation: {
          enable: true,
          minimumValue: 1,
          speed: 10,
          destroy: "min"
        }
      },
      move: {
        enable: true,
        speed: 2,
        outModes: {
          default: "destroy"
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "trail"
        }
      },
      modes: {
        trail: {
          delay: 0.01,
          quantity: 2
        }
      }
    }
  }}
/>
```

## Component Spec Example

```markdown
## Hero Section - Particle Background

### tsParticles Configuration

#### Visual Style
- Particles: 80 small circles
- Color: var(--color-primary)
- Links: Enabled, 150px distance
- Opacity: 50%
- Size: 1-3px

#### Interactivity
- **Hover**: "Grab" mode
  - Distance: 140px
  - Links become fully opaque near mouse
- **Click**: None (avoid distraction)

#### Performance
- Density-based (auto-adjusts to screen size)
- FPS limit: 60
- Pauseexclude on blur: true

#### Implementation
```jsx
<Particles
  id="hero-bg"
  init={particlesInit}
  options={{
    particles: {
      number: {
        value: 80,
        density: { enable: true, area: 800 }
      },
      color: { value: "var(--color-primary)" },
      links: {
        enable: true,
        distance: 150,
        opacity: 0.4
      },
      move: {
        enable: true,
        speed: 1
      }
    },
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" }
      },
      modes: {
        grab: { distance: 140 }
      }
    }
  }}
/>
```

#### Mobile Behavior
- Reduce particle count to 50
- Disable interactivity (performance)
```

## Amanda's tsParticles Mandate

When specifying tsParticles:

1. **Define visual style**: Shape, color, size, opacity
2. **Specify interaction modes**: Grab, bubble, repulse, trail?
3. **Document performance**: Particle count, density, FPS
4. **Mobile behavior**: Reduced particles? Disabled interactions?
5. **Purpose**: Background ambiance or interactive feature?

## Use Cases

| Use Case | Configuration |
|----------|---------------|
| **Hero background** | Classic particles + links + grab |
| **Success celebration** | Confetti with gravity |
| **Ambient effect** | Floating bubbles with slow movement |
| **Seasonal** | Snow, leaves, stars |
| **Interactive** | Mouse trail or bubble mode |
| **Loading** | Pulsing circles |

## Performance Tips

- Limit particle count (50-100 max)
- Use `pauseonBlur: true`
- Reduce on mobile
- Disable for reduced motion preference

---

**Remember**: tsParticles is **AMBIANCE**. It creates atmosphere without stealing focus. Design the effect to complement your content, not compete with it. Less is often more—a subtle particle background feels premium, while too many feels overwhelming.
