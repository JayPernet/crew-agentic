# Frontend Spec - [Nome da Funcionalidade]

## 1. Layout & Structure
**Grid/Container:** [Ex: Max-width 1200px, 12-col grid]
**Responsiveness:**
- Mobile (<640px): [Stack vertical, padding 16px]
- Tablet (640-1024px): [2 cols, padding 24px]
- Desktop (>1024px): [Side-by-side, padding 48px]

## 2. Components

### [Componente A] (e.g., Primary Button)
**Visual:**
- Bg: `bg-primary-600`
- Text: `text-white font-medium`
- Radius: `rounded-full`

**States:**
- **Default:** Opacity 100%
- **Hover:** `bg-primary-700`, `scale-105`, `shadow-lg` (Transition: 200ms ease-out)
- **Active:** `scale-95`
- **Disabled:** `bg-gray-300`, `cursor-not-allowed`

### [Componente B] (e.g., Card)
[Repetir estrutura]

## 3. Typography
- **Headings:** [Font Family, Weight, Leading]
- **Body:** [Font Family, Color, Leading]

## 4. Animations & Micro-interactions
- **Entrance:** Fade-in-up (Duration: 0.5s, Delay: stagger 0.1s)
- **Feedback:** Toast success on submission.

## 5. Assets & Icons
- **Icons:** Lucide React (`<IconName size={20} />`)
- **Images:** Aspect ratio [16:9], Object-fit [cover]
