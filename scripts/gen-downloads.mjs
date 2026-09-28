#!/usr/bin/env node
/**
 * Prebuild step — keeps the Styleguide "Export" downloads in sync with the
 * source of truth (src/styles/tokens.css). Runs automatically before
 * `astro build` (npm "prebuild") so Vercel regenerates them on every deploy.
 *
 *   public/downloads/tokens.css   ← copy of src/styles/tokens.css
 *   public/downloads/tokens.json  ← flat { "vb-…": "value" } map
 *   public/downloads/assets.zip   ← icons + brand SVGs (regenerated if `zip` exists)
 *
 * design.md is hand-maintained and left untouched.
 */
import { readFileSync, writeFileSync, copyFileSync, mkdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const p = (...s) => resolve(root, ...s);

mkdirSync(p('public/downloads'), { recursive: true });

// 1. tokens.css — verbatim copy of the source of truth.
const tokensCssSrc = p('src/styles/tokens.css');
copyFileSync(tokensCssSrc, p('public/downloads/tokens.css'));

// 2. tokens.json — parse every --vb-* custom property into a flat map.
const css = readFileSync(tokensCssSrc, 'utf8');
const tokens = {};
for (const m of css.matchAll(/(--vb-[a-z0-9-]+)\s*:\s*([^;]+);/g)) {
  tokens[m[1].slice(2)] = m[2].trim();
}
writeFileSync(p('public/downloads/tokens.json'), JSON.stringify(tokens, null, 2) + '\n');

// 3. assets.zip — regenerate from src/assets/{icons,brand} when `zip` is
//    available; otherwise keep the committed copy so the build never fails.
const zipOut = p('public/downloads/assets.zip');
try {
  execFileSync('zip', ['-r', '-q', '-X', zipOut, 'icons', 'brand'], {
    cwd: p('src/assets'),
    stdio: 'ignore',
  });
  console.log('gen-downloads: tokens.json (%d tokens) + assets.zip', Object.keys(tokens).length);
} catch {
  const kept = existsSync(zipOut) ? ' (kept committed assets.zip — `zip` not available)' : ' (no assets.zip)';
  console.log('gen-downloads: tokens.json (%d tokens)%s', Object.keys(tokens).length, kept);
}
