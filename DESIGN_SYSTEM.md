# Botanical / Organic Serif Design System Implementation

## Overview
This project implements a **Botanical/Organic Serif** design system that embodies warmth, sophistication, and natural beauty. The design philosophy rejects rigid digital aesthetics in favor of organic, tactile experiences inspired by botanical gardens and artisanal craftsmanship.

## Core Design Elements

### 🎨 Color Palette (Earthbound)
```typescript
// Tailwind config colors
bg: '#F9F8F4'      // Warm Alabaster (main background)
text: '#2D3A31'     // Deep Forest Green (primary text)
accent: '#8C9A84'   // Sage Green (highlights, CTAs)
muted: '#DCCFC2'    // Soft Clay (secondary backgrounds)
border: '#E6E2DA'   // Stone (subtle borders)
hover: '#C27B66'    // Terracotta (interaction states)
```

### ✍️ Typography
- **Headings**: Playfair Display (serif, 600/700 weight)
  - High-contrast strokes for elegance
  - Italics for emphasis and personality
  - Scale: `text-5xl` → `text-7xl` → `text-8xl`
  
- **Body**: Source Sans 3 (humanist sans-serif, 400/500 weight)
  - Clean, highly legible
  - `text-lg` with `leading-relaxed`

### 🔲 Shapes & Radius
- **Iconic Arch Images**: `rounded-t-[200px]` creates the signature arch shape
- **Cards**: `rounded-3xl` (24px)
- **Buttons**: `rounded-full` (pill-shaped)
- **Organic Elements**: `rounded-b-[40px]` for complementary curves

### ✨ Critical Design Feature: Paper Grain Texture
The **paper grain overlay** is mandatory and transforms the design from flat digital to warm, tactile:

```tsx
// Applied in app.html
<div class="paper-grain"></div>

// Defined in styles.css
.paper-grain {
  @apply pointer-events-none fixed inset-0 z-50 opacity-[0.015] mix-blend-multiply;
  background-image: var(--noise-texture);
  background-repeat: repeat;
}
```

**Why it matters**: This subtle SVG fractal noise creates the illusion of paper texture, adding depth and warmth that prevents the design from feeling sterile.

### 🌊 Animation Philosophy
All animations are **slow, graceful, and fluid** like natural movement:

- **Durations**:
  - Fast interactions: `duration-300` (buttons, links)
  - Standard: `duration-500` (cards, transforms)
  - Dramatic: `duration-700` (image scales, hover effects)

- **Easing**: `ease-out` for natural deceleration

- **Key Animations**:
  ```css
  float: 6s ease-in-out infinite     // Floating quote cards
  fade-in-up: 0.8s ease-out           // Content entrance
  ```

### 🪟 Shadows (Soft & Organic)
```css
soft:    0 4px 6px -1px rgba(45, 58, 49, 0.05)
soft-md: 0 10px 15px -3px rgba(45, 58, 49, 0.05)
soft-lg: 0 20px 40px -10px rgba(45, 58, 49, 0.05)
soft-xl: 0 25px 50px -12px rgba(45, 58, 49, 0.15)
```

All shadows use the Deep Forest Green color at very low opacity for cohesion.

## Component Architecture

### Hero Section
- **Layout**: Two-column grid (`lg:grid-cols-2`)
- **Image**: Arch-shaped with `rounded-t-[200px]` and `rounded-b-[40px]`
- **Hover**: Slow `scale-105` on image with `duration-700`
- **Quote Card**: Floating with `backdrop-blur-sm` and `animate-float`
- **Organic Blob**: SVG decoration with `text-accent/10`
- **Responsive**: `aspect-[3/4]` on mobile → `aspect-square` + fixed height on desktop

### Features Section
- **Grid**: `md:grid-cols-3` with generous `gap-12`
- **Stagger**: Middle card has `md:translate-y-12` for organic flow
- **Cards**: White background, `rounded-3xl`, soft shadows
- **Hover**: `-translate-y-2` lift with shadow intensification
- **Icons**: Thin stroke (`1.5`), sage green, in circular backgrounds
- **Decorative Line**: Animated width expansion on hover

### Header
- **Position**: `sticky top-0` with `backdrop-blur-md`
- **Border**: Subtle `border-b border-border`
- **Logo**: Playfair Display with italic emphasis
- **Nav**: Uppercase, wide tracking, sage green hover states
- **CTA Button**: Primary style, small lift on hover

### Footer
- **Background**: `bg-muted` with top border
- **Grid**: `md:grid-cols-4` for content organization
- **Typography**: Mix of serif headings and sans body
- **Location Badge**: Decorative line + uppercase text

## Buttons

### Primary Button
```html
<a class="btn-primary">Start Journey</a>
```
- Pill-shaped, deep forest green background
- White text, uppercase, wide tracking
- Hover: Terracotta background + slight lift

### Secondary Button
```html
<a class="btn-secondary">Our Philosophy</a>
```
- Pill-shaped, transparent with sage border
- Sage text
- Hover: Muted background + slight lift

## Responsive Strategy

### Breakpoints
- Mobile: `< 768px` (default)
- Tablet: `md: 768px`
- Desktop: `lg: 1024px`

### Key Adaptations
- **Typography**: Reduce headline sizes (8xl → 5xl)
- **Spacing**: `py-32` → `py-16`, `gap-16` → `gap-12`
- **Grid**: Single column → multi-column grids
- **Hero Image**: `aspect-[3/4]` → `aspect-square` with fixed height
- **Stagger Effect**: Only applies at `md:` breakpoint
- **Touch Targets**: Minimum 44px height (`h-12`, `h-14`)

## Best Practices

### DO:
✅ Use generous whitespace (`gap-12`, `py-24`)  
✅ Apply slow, graceful animations (`duration-700`)  
✅ Round everything (corners, buttons, icons)  
✅ Use italics for emphasis in headings  
✅ Maintain the paper grain overlay  
✅ Keep shadows soft and organic  
✅ Use staggered layouts for natural flow  

### DON'T:
❌ Use harsh shadows or sharp corners  
❌ Apply fast, jarring animations  
❌ Use bright, artificial colors  
❌ Remove the paper grain texture  
❌ Create perfectly symmetrical layouts  
❌ Use heavy borders or dividers  
❌ Crowd elements without breathing room  

## File Structure
```
src/
├── app/
│   ├── components/
│   │   ├── header/           # Sticky nav with botanical styling
│   │   ├── hero/             # Main hero with arch image
│   │   ├── features/         # Three-card feature grid
│   │   └── footer/           # Footer with organic layout
│   ├── pages/
│   │   └── home.component.*  # Composed home page
│   ├── app.html              # Root with paper grain
│   └── app.ts                # App shell
├── styles.css                # Global styles + design tokens
└── index.html                # Font imports

tailwind.config.ts            # Complete design system tokens
```

## Getting Started

1. **Fonts are auto-loaded** via Google Fonts in `index.html`
2. **Paper grain** is applied globally in `app.html`
3. **Design tokens** are configured in `tailwind.config.ts`
4. **Components** use utility classes for consistency

## Design Philosophy Reminder

This design system is about **feeling**, not just function:
- Every element should feel **hand-touched**
- Movements should be **slow and natural**
- Colors should be **earthy and muted**
- Shapes should **flow organically**
- Spacing should **breathe generously**

The result is a digital experience that feels like stepping into a sunlit botanical conservatory—calm, grounded, and deeply intentional.
