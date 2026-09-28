# Kickstart Theme — Design System

The single source of truth for this theme is **`tokens.css`** (CSS custom properties, prefix `--vb-*`). Everything in the components references these tokens — never hardcoded values. This document is the human-readable companion to that file.

Fork this theme per client, then rebrand **only** by editing `tokens.css`.

---

## Core rules

1. **100% tokens.** Every color, font, size, spacing, radius and shadow uses a `var(--vb-*)` token. The only permitted hardcodes are neutral page greys used for scaffolding (`#eceae7`, `#ededed`, `#fff`) and the inline image-placeholder SVG.
2. **No invention.** Pages are composed exclusively from existing atoms / molecules / organisms. No new one-off markup or styles in page templates.
3. **Content container = 1120px**, centered, with `--vb-spacer-5` (24px) side padding. On a 1440 canvas this yields 160px gutters.
4. **Responsive:** a real tablet breakpoint at `max-width: 991px` stacks two-column layouts. The styleguide also offers a 440px "Mobile" preview toggle.
5. **Fonts:** Poppins (headings, caps, menu) · Inter (body text, buttons).

---

## Colors

### Neutrals
| Token | Value |
|---|---|
| `--vb-color-white` | #ffffff |
| `--vb-color-neutral-lightest` | #eeeeee |
| `--vb-color-neutral-lighter` | #cccccc |
| `--vb-color-neutral-light` | #aaaaaa |
| `--vb-color-neutral` / `-mid` | #666666 |
| `--vb-color-neutral-dark` | #444444 |
| `--vb-color-neutral-darker` | #222222 |
| `--vb-color-neutral-darkest` | #000000 |

### Brand
| Role | 500 (base) |
|---|---|
| Primary | `--vb-brand-primary-500` · #004cff (scale 200→700) |
| Secondary | `--vb-brand-secondary-500` · #7055e6 (scale 200→700) |
| Tertiary | `--vb-brand-tertiary-500` · #fb58ed (scale 200→600) |

### State
`--vb-color-success` #04b56c · `--vb-color-danger` #dc3529 · `--vb-color-focus` #4277f4

### Semantic roles (Color Scheme 1) — use these in components
| Token | Alias |
|---|---|
| `--vb-color-scheme-1-foreground` | white |
| `--vb-color-scheme-1-emphasis-color` | #000 (titles) |
| `--vb-color-scheme-1-body-color` | #444 (body text) |
| `--vb-color-scheme-1-text-secondary` | #666 |
| `--vb-color-scheme-1-secondary-color` | #aaa |
| `--vb-color-scheme-1-text-brand-primary` | #004cff |
| `--vb-color-scheme-1-bg-body` | #eee (grey band) |
| `--vb-color-scheme-1-bg-secondary` | #ccc |
| `--vb-color-scheme-1-bg-tertiary` | #222 |
| `--vb-color-scheme-1-bg-inverse` | #000 (dark band) |
| `--vb-color-scheme-1-border-color` | #000 |
| `--vb-color-scheme-1-border-color-subtle` | #ccc |

---

## Typography

Families: `--vb-font-family-heading` (Poppins) · `--vb-font-family-body` (Inter) · `--vb-font-family-caps` (Poppins).

### Font sizes (desktop → mobile)
| Token | Desktop | Mobile |
|---|---|---|
| display-1 | 72 | 56 |
| display-2 | 56 | 48 |
| h1 | 64 | 40 |
| h2 | 48 | 36 |
| h3 | 40 | 32 |
| h4 | 32 | 24 |
| h5 | 24 | 20 |
| h6 / lg | 20 | 18 |
| intro-big | 32 | 24 |
| md | 18 | 16 |
| base | 16 | — |
| sm | 14 | — |
| xs / caps | 12 | — |
| micro | 10 | — |

Weights: light 300 · normal 400 · medium 500 · semibold 600 (headings) · bold 700.
Line heights: `--vb-line-height-110` (headings) · `-130` (body) · `-115` (caps/buttons).
Letter spacing: `-tighter` -0.04em · `-tight` -0.02em · `-wide` 0.02em.

---

## Spacing

`--vb-spacer-0..9`: 0, 4, 8, 12, 16, 24, 32, 40, 48, 64 px.
Section rhythm: `--vb-spacer-section-md` 80 · `-lg` 112 · `-xl` 160 · `-xxl` 256.

## Radius

none 0 · xtiny 2 · tiny 4 · xxsmall/social 6–8 · xsmall 12 · small 16 · medium 24 · large 32 · xlarge 48 · xxlarge 64. Border width: `--vb-border-width` 1px.

## Shadows

`--vb-shadow-xxsmall` → `-xxlarge` (7 steps), compositor-friendly (Figma effect styles).

---

## Components (semantic tokens)

- **Button** — radius `small` (16), padding 16/24 (sm 12/16), font `base`, gap `spacer-2`, disabled opacity 0.3.
- **Tooltip** — radius `xxsmall`, dark bg = primary-500, light bg = white.
- **Separator** — `--vb-separator-color` = border-subtle, 1px.

---

*Generated from `tokens.css` (VB Design System — vb-kickstarter-design-v02).*
