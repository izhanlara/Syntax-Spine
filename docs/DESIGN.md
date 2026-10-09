---
name: Syntax & Spine
figma: https://www.figma.com/design/uQDFvGBh6DmrZphMLMYRE9/Syntax---Spine?m=auto&t=vZwqmgeXp4stWwvJ-1
colors:
  surface: "#fcf9f5"
  surface-dim: "#dcdad6"
  surface-bright: "#fcf9f5"
  surface-container-lowest: "#ffffff"
  surface-container-low: "#f6f3ef"
  surface-container: "#f0edea"
  surface-container-high: "#ebe8e4"
  surface-container-highest: "#e5e2de"
  on-surface: "#1c1c1a"
  on-surface-variant: "#434843"
  inverse-surface: "#31302e"
  inverse-on-surface: "#f3f0ed"
  outline: "#737873"
  outline-variant: "#c3c8c1"
  surface-tint: "#506355"
  primary: "#384a3d"
  on-primary: "#ffffff"
  primary-container: "#4f6254"
  on-primary-container: "#c7ddcb"
  inverse-primary: "#b7ccbb"
  secondary: "#2457c5"
  on-secondary: "#ffffff"
  secondary-container: "#638eff"
  on-secondary-container: "#00276c"
  tertiary: "#593f42"
  on-tertiary: "#ffffff"
  tertiary-container: "#735659"
  on-tertiary-container: "#f4ced1"
  error: "#ba1a1a"
  on-error: "#ffffff"
  error-container: "#ffdad6"
  on-error-container: "#93000a"
  primary-fixed: "#d3e8d6"
  primary-fixed-dim: "#b7ccbb"
  on-primary-fixed: "#0e1f14"
  on-primary-fixed-variant: "#394b3e"
  secondary-fixed: "#dbe1ff"
  secondary-fixed-dim: "#b3c5ff"
  on-secondary-fixed: "#001849"
  on-secondary-fixed-variant: "#003fa5"
  tertiary-fixed: "#ffd9dc"
  tertiary-fixed-dim: "#e3bdc1"
  on-tertiary-fixed: "#2b1518"
  on-tertiary-fixed-variant: "#5a4043"
  background: "#fcf9f5"
  on-background: "#1c1c1a"
  surface-variant: "#e5e2de"
typography:
  display-lg:
    fontFamily: Source Serif 4
    fontSize: 2.75rem
    fontWeight: "400"
    lineHeight: 3.25rem
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 2rem
    fontWeight: "400"
    lineHeight: 2.5rem
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 1.75rem
    fontWeight: "600"
    lineHeight: 2.25rem
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 1.375rem
    fontWeight: "600"
    lineHeight: 1.875rem
    letterSpacing: -0.005em
  editorial-body:
    fontFamily: Source Serif 4
    fontSize: 1.125rem
    fontWeight: "400"
    lineHeight: 1.85rem
  body-lg:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: "400"
    lineHeight: 1.6rem
  body-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: "400"
    lineHeight: 1.45rem
  label-md:
    fontFamily: Inter
    fontSize: 0.8125rem
    fontWeight: "500"
    lineHeight: 1.125rem
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 0.6875rem
    fontWeight: "600"
    lineHeight: 1rem
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: "400"
    lineHeight: 1.25rem
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3.5rem
  space-xs: 0.5rem
  space-sm: 0.75rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies an editorial archive for discerning engineers and technologists. The aesthetic merges the disciplined clarity of industrial operating systems with the tactile, deliberate typography of independent literary reviews.

The emotional tone is quiet, scholarly, and authoritative. Interface elements recede entirely to prioritize text consumption, marginalia, and reference density. Visual structure relies on hairline boundaries, precise typographic scale, and ample intentional whitespace rather than decorative fills, complex gradients, or simulated depth.

## Colors

The palette is strictly calibrated for long-form reading, daylight fidelity, and WCAG 2.2 AA compliance:

- **Canvas Primary (`#FFFFFF`)**: Pure white base for primary text columns and active reading surfaces.
- **Canvas Secondary (`#F5F5F2`)**: Warm, desaturated paper gray for sidebars, marginalia wells, toolbars, and metadata drawers.
- **Text Primary (`#20201E`)**: Near-black charcoal delivering high-contrast readability without harsh glare (16.2:1 against Canvas Primary).
- **Text Secondary (`#595954`)**: Muted slate for metadata, timestamps, categorization tags, and inactive states (5.6:1 against Canvas Primary).
- **Accent (`#4F6254`)**: A restrained laurel green used for status markers, curated collections, active tab indicators, and subtle semantic emphasis (5.4:1 against Canvas Primary).
- **Border Hairline (`#D9D9D3`)**: A quiet, neutral dividing line for structural rhythm and column delineation.
- **Interactive Focus (`#2457C5`)**: High-visibility cobalt blue reserved exclusively for keyboard focus rings and active access indicators (6.3:1 against Canvas Primary).

## Typography

The type system creates an intentional dual-engine reading experience:

- **Editorial Voice (`Source Serif 4`)**: Applied to book titles, essay headers, pull quotes, and reflective reader notes. Its optical balance provides comfort over extended reading passages.
- **Interface & Metadata Voice (`Inter`)**: Deployed for technical abstracts, navigation, system states, taxonomies, and indexing controls. It ensures dense layout utility without distracting from long-form content.
- **Code Reference (`JetBrains Mono`)**: Utilized strictly for inline code snippets, syntax citations, and reference hashes.

## Layout & Spacing

The system runs on an exacting 8px baseline rhythm.

- **Grid Strategy**: An asymmetrical 12-column grid. Main reading columns are capped at a strict 68ch line-length container to guarantee optimal scanning speeds.
- **Desktop (1024px+)**: Sidebar navigation (2 or 3 columns), content pane (6 or 7 columns), and marginalia annotations/metadata rail (2 or 3 columns). Gutter is locked at `2.5rem` (40px) with canvas margins at `3.5rem` (56px).
- **Tablet (768px - 1023px)**: Margin collapses to `2rem` (32px). Marginalia docks beneath active chapters; sidebar transitions to an expandable top utility rail.
- **Mobile (< 768px)**: Single column stream with `1rem` (16px) gutters and margins. Structural division relies entirely on hairline rule dividers rather than negative-space expanses.

## Elevation & Depth

This system rejects drop shadows, elevation blurs, and skeuomorphic layered cards.

- **Hairline Rules**: Elevation is represented structurally through 1px solid `#D9D9D3` borders.
- **Planar Tiering**: Contextual depth is handled via surface color shifts: active content sits on `#FFFFFF`, while secondary context, code blocks, and structural sidebars sit on `#F5F5F2`.
- **Modals and Popovers**: Floating overlays utilize a 1px `#D9D9D3` border on `#FFFFFF` with no ambient drop shadow. Dimming overlays use `#20201E` at 15% opacity to maintain underlying legibility.

## Shapes

Corner radii are restrained to preserve architectural and literary precision:

- Standard elements (buttons, inputs, code blocks, containers) use a minimal `0.25rem` (4px) radius.
- Small inline badges and tags carry a `0.125rem` (2px) radius.
- Under no circumstances are fully circular or pill-shaped geometries used.

## Components

- **Buttons**:
  - _Primary_: `#4F6254` background, `#FFFFFF` text, `0.25rem` radius, padding `0.5rem 1rem`. Hover shifts to `#3F4F43`.
  - _Secondary / Ghost_: Hairline border of 1px `#D9D9D3`, `#FFFFFF` background, `#20201E` text. Hover shifts to `#F5F5F2`.
  - _Focus State_: 2px solid offset outline in `#2457C5`.
- **Inputs & Fields**:
  - Background `#FFFFFF`, border 1px `#D9D9D3`, text `#20201E`. Text placeholders use `#595954`. On focus, border updates to 1px `#20201E` with a 2px outer ring in `#2457C5`.
- **Chips & Tags**:
  - Subtle architectural tags: `#F5F5F2` background, 1px `#D9D9D3` border, `#595954` uppercase Inter typography (`label-sm`), padding `0.25rem 0.5rem`.
- **Lists & Directory Entries**:
  - Borderless horizontal rows separated by 1px bottom rules in `#D9D9D3`. Metadata right-aligned in `#595954`. Hover state produces a subtle background shift to `#F5F5F2`.
- **Cards & Reading Tiles**:
  - Devoid of outer shadows. Formed with a 1px border of `#D9D9D3` or an open typographic treatment over `#FFFFFF`. Internal padding is strictly `1.5rem`.
- **Marginalia / Annotation Rails**:
  - Anchored notes positioned alongside main texts, set in `Inter` body-md or `Source Serif 4` italics, demarcated by a 1px left accent rule in `#D9D9D3` (turning `#4F6254` when active).
- **Checkboxes & Radios**:
  - Minimalist 16x16px boxes with 1px `#D9D9D3` borders. Checked state fills with `#4F6254` and a crisp `#FFFFFF` check indicator. Focus uses `#2457C5`.
