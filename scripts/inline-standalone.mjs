#!/usr/bin/env node
/**
 * Makes the built `dist/` openable by double-click (file://) by inlining every
 * linked stylesheet into each page and embedding its fonts as base64 data URLs.
 * Only needed for offline local preview — Vercel serves the normal linked build.
 *
 *   node scripts/inline-standalone.mjs [distDir]   (default: dist)
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';

const dist = resolve(process.argv[2] || 'dist');

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const fp = join(dir, name);
    if (statSync(fp).isDirectory()) walk(fp);
    else if (name.endsWith('.html')) inline(fp);
  }
}

function inline(fp) {
  let html = readFileSync(fp, 'utf8');
  const base = dirname(fp);
  const css = (href) => {
    const p = href.startsWith('/') ? join(dist, href.slice(1)) : resolve(base, href);
    if (!existsSync(p)) return null;
    let t = readFileSync(p, 'utf8');
    // embed woff/woff2 fonts referenced by the CSS as base64
    t = t.replace(/url\(([^)]+\.woff2?)\)/g, (m, u) => {
      const clean = u.replace(/['"]/g, '').trim();
      const fp2 = clean.startsWith('/') ? join(dist, clean.slice(1)) : resolve(dirname(p), clean);
      if (!existsSync(fp2)) return m;
      const b = readFileSync(fp2).toString('base64');
      const ext = fp2.endsWith('woff2') ? 'woff2' : 'woff';
      return `url(data:font/${ext};base64,${b})`;
    });
    return `<style>${t}</style>`;
  };
  const repl = (m, href) => css(href) ?? m;
  html = html.replace(/<link[^>]+rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/g, repl);
  html = html.replace(/<link[^>]+href="([^"]+)"[^>]*rel="stylesheet"[^>]*>/g, repl);
  writeFileSync(fp, html);
}

walk(dist);
console.log('inlined standalone build in', dist);
