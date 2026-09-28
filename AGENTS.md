# Regles agent — Design System Vector Bross (Drupal SDC + Storybook)

Tu produis des **composants Drupal SDC** previsualises dans **Storybook** (rendu Twig
via `vite-plugin-twig-drupal`, sans PHP). Respecte STRICTEMENT ces regles.

## Structure — un composant = un dossier
Pour chaque composant, cree `components/<nom-kebab>/` avec :
- `<nom>.component.yml`  → schema SDC : `name`, `status`, `props` (types, enum, default), et `slots` si contenu libre.
- `<nom>.twig`          → markup semantique, aucune valeur en dur.
- `<nom>.css`           → styles, UNIQUEMENT via `var(--vb-*)` (voir tokens/tokens.css).
- `<nom>.stories.js`    → une story par variante (CSF3) + `parameters.design` avec l'URL du frame Figma.

## Nommage
- Dossiers/fichiers : kebab-case (`card-news`, `hero-banner`).
- Classes CSS : BEM base sur le nom du composant (`.card-news`, `.card-news__title`, `.card-news--featured`).

## Tokens (obligatoire)
- Couleurs, typo, spacing, radius : TOUJOURS `var(--vb-...)`. Jamais de hex/px en dur dans un composant.
- Si un token manque, ajoute-le dans `tokens/tokens.css` (ne le hardcode pas dans le composant).

## Twig / SDC
- Utilise les props declarees dans le `.component.yml` ; valeurs par defaut via `|default(...)`.
- Contenu libre = slot (`{% block %}`), pas une prop string.
- Markup accessible : bon element (`<button>` vs `<a>`), `aria-*`, alt, labels.

## Mapping Figma
- Reutilise TOUJOURS le composant SDC existant correspondant au composant Figma mappe.
- Ne recree pas un composant qui existe deja ; etends-le (nouvelle variante = nouvelle valeur d'enum).

## Validation pixel-perfect (porte de sortie)
- Chaque story DOIT pointer le frame Figma (`parameters.design`).
- La validation se fait dans Storybook via `@storybook/addon-designs` (cote a cote) et
  `storybook-addon-figma-comparator` (superposition/diff pixel).
- Itere le CSS jusqu'a match pixel avant de proposer la PR. Ne considere pas un composant
  "fait" tant que le comparator montre un ecart visible.

## Workflow de sortie
- Regroupe les composants valides puis ouvre une **PR** vers Bitbucket. Un composant = commit lisible.
- Ne touche pas a la logique Drupal (preprocess, render arrays) : c'est le travail des devs cote theme.
