# Design System: Generic Alternatives

This document outlines the visual language, color palette, and architectural patterns used in the Generic Alternatives business plan application. All generated components must strictly adhere to these guidelines to maintain the "Sovereign/Industrial" aesthetic.

## 1. Color Palette

The scheme is high-contrast, combining dark industrial tones with a vibrant "acid" accent.

### Primary Colors
| Role | Color | Hex | Notes |
|------|-------|-----|-------|
| **Background** | Dark Olive | `#282a1e` | The core background for the app. Do not use black. |
| **Accent** | Acid Lime | `#d3f54c` | Used for CTAs, highlights, icons, and borders. |
| **Text (Light)** | Ivory White | `#fdfff9` | Primary text color. Softer than pure white. |

### Secondary Colors
| Role | Color | Hex | Notes |
|------|-------|-----|-------|
| **Surface Dark** | Deep Charcoal | `#1a1c14` | Used for dark cards to contrast against the olive background. |
| **Surface Light** | Ivory White | `#fdfff9` | Used for light sections (Roadmap, Services). |
| **Error/Warn** | Red | `#ef4444` | Used sparsely for comparison (traditional agent downsides). |

---

## 2. Typography

We use a specific dual-font system to convey "modern industry".

### Primary Font: **Manrope**
- **Usage**: Body text, UI labels, Buttons, Standard Headings.
- **Weights**: `Light (300)`, `Regular (400)`, `Bold (700)`, `ExtraBold (800)`.
- **Styling**:
  - Uppercase labels should always use `tracking-widest`.
  - Large headings often use `tracking-tighter` or `tracking-tight`.

### Accent Font: **DM Serif Display**
- **Usage**: **Emphasis only**. Specific words within large headlines.
- **Styling**: Almost always **Italic**.
- **Example**:
  ```tsx
  <h2 className="font-bold">
    The Future of <span className="serif-accent italic text-[#d3f54c]">Supply Chain</span>
  </h2>
  ```

---

## 3. Component Architecture

### Cards & Containers
- **Border Radius**: Extremely rounded. Standard is `rounded-[2rem]` or `rounded-[3rem]`.
- **Borders**:
  - Dark Mode: `border border-white/10`.
  - Active/Hover: `border-[#d3f54c]`.
  - Thick Borders: Use `border-3` or `border-4` for emphasis cards.
- **Glassmorphism**: Used in Navigation and floating elements (`backdrop-blur-xl`, `bg-opacity-80`).

### Buttons
- **Shape**: `rounded-full`.
- **Primary**: `#d3f54c` background, `#282a1e` text. Sharp hover transition to White background.
- **Outline**: `#fdfff9` border, transparent background.

### Visual Patterns
- **Background Noise**: A fixed radial gradient used globally.
  ```css
  background-image: radial-gradient(#d3f54c 2px, transparent 2px);
  background-size: 40px 40px;
  opacity: 0.03;
  ```
- **Badges**: Pill-shaped, transparent background with colored borders.
  - *Example*: `border border-[#d3f54c] text-[#d3f54c] uppercase tracking-widest`.

---

## 4. Layout Philosophy

1.  **Bento Grids**: Content should be organized in masonry or grid layouts (e.g., the Technology section).
2.  **Overlapping Sections**: Sections often have top-rounded corners (`rounded-t-[4rem]`) and negative margins to create a physical "stacking" effect.
3.  **Micro-Interactions**:
    - `hover:scale-105` on interactive elements.
    - `group-hover:text-[#d3f54c]` for parent-child hover states.
4.  **Industrial Details**: Use "tech" flourishes like version numbers, status dots, and monospaced font elements to reinforce the engineering focus.

## 5. Iconography

- **Library**: `lucide-react`.
- **Style**: Consistent stroke widths (usually `strokeWidth={2}` or `2.5`).
- **Containers**: Icons are often wrapped in rounded squares (`rounded-2xl`) or circles, usually with a contrasting background to the card.
