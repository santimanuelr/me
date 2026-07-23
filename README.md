# santimanuelr — personal site

Personal one-page site for Santiago Manuel Rodríguez, built as a single-page app and
deployed to GitHub Pages.

## Stack

- [Vite 7](https://vitejs.dev/) + [React 19](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) (CSS-first config) with `@tailwindcss/typography`
- [next-themes](https://github.com/pacocoursey/next-themes) for light/dark mode
- [lucide-react](https://lucide.dev/) icons

## Development

```bash
npm install       # install dependencies
npm run dev       # start dev server at http://localhost:5173
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
```

## Deployment

Pushing to the default branch triggers `.github/workflows/deploy.yml`, which builds the
site and deploys `dist/` to GitHub Pages. To publish as the user page at
`https://santimanuelr.github.io/`, the code must live in a repository named
`santimanuelr.github.io` (see `CLAUDE.md` for details).
