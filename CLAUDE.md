# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

Santiago Manuel Rodríguez's personal one-page site — a client-rendered SPA built with
**Vite + React 19 + TypeScript + Tailwind CSS v4**, deployed to GitHub Pages.

> History: this repo was previously a Jekyll site based on the `jekyll-theme-hacker` gem.
> It was rebuilt from scratch on the `redesign-website` branch. No Jekyll/Ruby files remain.

## Commands

```bash
npm install       # install dependencies
npm run dev       # dev server at http://localhost:5173
npm run build     # `tsc && vite build` — type-check then build to dist/
npm run preview   # serve the production build locally
```

There is no separate lint/test step; `npm run build` runs `tsc` (strict) as the gate. The
dev server is also registered in `.claude/launch.json` (name `dev`, port 5173).

## Theming — the important part

The visual design system is an "ink on paper" monospace theme modeled on
[stocktaper.com](https://www.stocktaper.com/): a single `IBM Plex Mono` family for
everything (body + headings), a warm cream/ink light palette, and a custom warm-dark
variant (stocktaper itself has no dark mode — the dark palette here is bespoke).
It is driven by **semantic CSS-variable tokens**, all defined in `src/styles/globals.css`:

- Raw tokens (`--bg`, `--bg-subtle`, `--text`, `--text-muted`, `--text-faint`, `--border`,
  `--accent`) are declared twice: light values under `:root`, dark values under `.dark`.
- Tailwind v4's `@theme` block maps each raw token to a color utility via
  `--color-bg: var(--bg)` etc., so `bg-bg`, `text-muted`, `border-border`, `text-accent`…
  all resolve to the current mode automatically.
- **To change a color, edit the token values in `:root`/`.dark`** — do not hardcode hex in
  components. Custom font sizes (`text-display`, `text-headline`, `text-article`) are also
  defined in `@theme`.

Tailwind v4 specifics to remember: config is CSS-first (there is **no `tailwind.config.js`**);
the Tailwind Vite plugin is wired in `vite.config.ts`; dark mode is class-based via a
`@custom-variant dark (&:where(.dark, .dark *))` declaration (not the default media query).

## Dark mode flow

`next-themes` (`ThemeProvider attribute="class"` in `src/main.tsx`) toggles a `.dark` class
on `<html>`. An inline script in `index.html` sets that class **before first paint** from
`localStorage.theme` / system preference to avoid a flash. `src/hooks/useTheme.ts` wraps
`next-themes` into an `isDark` + `toggle` API used by `src/components/ui/ThemeToggle.tsx`
(which gates its icon on a `mounted` flag to avoid a first-paint mismatch).

## Structure

- `index.html` — static `<head>`: SEO/OG meta, fonts, the pre-paint theme script, and
  Google Analytics (`G-KV81561R24`). Because content is a single page, SEO meta lives here
  statically rather than in a head-management library.
- `src/data/profile.ts` — single source of truth for all site content (name, role, about
  text, tech stack, social links). Edit copy here, not in components.
- `src/sections/Hero.tsx` — the page body. `src/components/layout/` (Header/Footer) and
  `src/components/ui/` hold shared pieces. `App.tsx` composes them.
- `src/lib/utils.ts` — `cn()` (clsx + tailwind-merge).

## Deployment

Pushing to the default branch (`master` or `main`) triggers `.github/workflows/deploy.yml`,
which builds and deploys `dist/` to GitHub Pages via the official Pages actions (no branch-
based publishing, so no `.nojekyll` needed).

**Base path / hosting**: `vite.config.ts` sets `base: '/'` for serving at a domain root.
To publish as the GitHub **user page** (`https://santimanuelr.github.io/`), the code must
live in a repo named `santimanuelr.github.io`. This repo is currently named `me` (which
would serve under `/me` and require `base: '/me/'`). Renaming the repo — or pushing to the
`santimanuelr.github.io` repo — is required before the root URL works.
