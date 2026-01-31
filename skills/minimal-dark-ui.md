---
tags:
  - inspiration
  - ui-aesthetic
  - minimal
  - dark-mode
created: 2026-01-31
updated: 2026-01-31
source: https://x.com/writenicecode
---

# Minimal Dark UI Aesthetic

**Inspiration:** @writenicecode (Twitter/X)

## Key Characteristics

### Visual Style
- **Subtle 1px borders** — Not heavy shadows, clean lines
- **Dark backgrounds** — Zinc-950, not pure black
- **Rounded cards** — Smooth corners, comfortable feel
- **High contrast** — White text on dark bg
- **Minimalist** — Lots of breathing room, no clutter

### UI Elements
- **Cards:** Rounded corners, 1px border, subtle bg
- **Buttons:** Clean, minimal, often white on black
- **Avatars:** Circular, simple
- **Toggles:** Smooth transitions, clear states
- **Lists:** Minimal dividers, clean spacing

### Color Palette
- Background: `bg-zinc-950` / `#09090b`
- Borders: `border-zinc-800` / `#27272a`
- Text: `text-white` / `#fff`
- Secondary text: `text-zinc-400` / `#a1a1aa`
- Accents: Subtle, never overwhelming

### Design Principles
1. **Less is more** — Remove everything unnecessary
2. **Subtle borders** — 1px lines define structure
3. **Consistent spacing** — Predictable gaps
4. **Clear hierarchy** — White for primary, zinc-400 for secondary
5. **Smooth transitions** — 200ms ease-out on hover

## Applied in Projects

### Design System
- Created `MinimalDark.tsx` component
- Components: Card, Button, Input, Avatar, Toggle, Badge, List, Progress, Tabs, Modal
- Demo: `MinimalUIDemo` showcasing the aesthetic

## CSS Pattern

```css
/* Minimal dark card */
.minimal-card {
  background: #09090b;
  border: 1px solid #27272a;
  border-radius: 12px;
  padding: 16px;
  transition: border-color 0.2s ease;
}

.minimal-card:hover {
  border-color: #3f3f46;
}

/* Minimal button */
.minimal-btn {
  background: #fff;
  color: #000;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.2s ease;
}

.minimal-btn:hover {
  background: #f4f4f5;
}
```

## Example Components

| Component | Class | Description |
|-----------|-------|-------------|
| Card | `bg-zinc-950 border border-zinc-800 rounded-xl` | Base card |
| Button | `bg-white text-black rounded-lg` | Primary action |
| Input | `bg-zinc-950 border border-zinc-800 rounded-lg` | Text input |
| Toggle | `bg-zinc-800 → bg-white` | Switch state |

## Resources

- Twitter: https://x.com/writenicecode
- Design inspiration: Minimal, clean, dark mode UIs
