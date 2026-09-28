# Bolt Kickstart Theme — Component portal

A dual-audience Astro portal for the Bolt Kickstart Theme:

- **Library** — website sections grouped by marketing category + full **page templates**.
- **Styleguide** — foundations (atoms + molecule controls) with downloadable assets.

Everything is 100% token-based (`var(--vb-*)`, source of truth `src/styles/tokens.css`).
Pages and templates are composed exclusively from existing atoms / molecules / organisms.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321  (regenerates downloads, then astro dev)
npm run build    # prebuild (downloads) → astro build → static output in dist/
npm run preview  # serve the built dist/
```

## How the downloads stay in sync

`scripts/gen-downloads.mjs` runs automatically before every build (npm `prebuild`)
and regenerates the Styleguide **Export** files from the source of truth:

| Output | Source |
|---|---|
| `public/downloads/tokens.css` | copy of `src/styles/tokens.css` |
| `public/downloads/tokens.json` | flat `{ "vb-…": "value" }` map parsed from the CSS |
| `public/downloads/assets.zip` | `src/assets/{icons,brand}` (regenerated when `zip` is present, else the committed copy is kept) |

`public/downloads/design.md` is hand-maintained.

## Deployment (Vercel)

The repo is Vercel-ready with **no adapter** — Astro produces a static site in `dist/`.

1. Import the GitHub repo in Vercel (New Project → Import).
2. Framework preset: **Astro** (auto-detected). Build command `npm run build`,
   output directory `dist` — both come from `vercel.json`.
3. Deploy. Vercel runs `prebuild` (regenerates tokens.json) then `astro build`.

### Updating via pull requests

- Every branch/PR gets an automatic **Preview** deployment (a unique URL).
- Merging to `main` triggers the **Production** deployment.

So the flow is: edit tokens/components on a branch → open a PR → review the preview
URL → merge → production updates automatically.

## Project structure

```
src/
  styles/tokens.css      source of truth for all --vb-* tokens
  styles/global.css      portal + component CSS (token-based)
  components/            atoms / molecules / organisms + template compositions
  layouts/               PortalShell, TemplateShell, bare preview layout
  lib/                   registry, catalog, templates registry
  pages/                 index (Library), styleguide, c/[id], t/[id], templates/[name]
scripts/gen-downloads.mjs  prebuild — regenerates the Export downloads
public/downloads/          tokens.css · tokens.json · design.md · assets.zip
```
