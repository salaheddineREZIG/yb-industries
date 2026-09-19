# YB INDUSTRIES

Product catalogue website for YB INDUSTRIES, an Algerian industrial company. French-language, static, not an e-commerce site.

## Stack

- Next.js (App Router), React, TypeScript (strict)
- Tailwind CSS (v4, via `@tailwindcss/postcss`)
- ESLint (`eslint-config-next`, Core Web Vitals + TypeScript)
- Git / GitHub

The project is a static Next.js export (`output: "export"`) deployed to Cloudflare Pages. It has no database, no backend, no CMS and no API routes.

## Commands

```bash
npm install     # install dependencies
npm run dev     # development server at http://localhost:3000
npm run lint    # ESLint
npm run build   # production build, writes the static site to out/
```

## Cloudflare Pages

| Setting          | Value            |
| ---------------- | ---------------- |
| Build command    | `npx next build` |
| Output directory | `out`            |

`.node-version` pins the Node.js version used by the build.

## Structure

```text
app/                  routes and layouts (App Router)
components/
  layout/             header, footer, navigation
  catalogue/          product and category components
  ui/                 small shared components
data/                 structured product, category and application data
lib/                  data accessors and helpers
types/                shared TypeScript types
public/
  images/products/    product images
  documents/          datasheets and drawings
```

## Static export constraints

- No API routes, Server Actions, middleware, redirects or rewrites.
- Dynamic routes must define `generateStaticParams()`.
- `next/image` runs with `unoptimized: true`, so images must be optimized (WebP/AVIF, sized) before being committed.
