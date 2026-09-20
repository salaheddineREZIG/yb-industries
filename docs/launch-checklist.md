# Launch checklist (developers only)

The site must not be published until every item is done or consciously waived.

## Content
- [ ] Replace the temporary data in `data/categories.ts` and `data/products.ts`
- [ ] Fourth category: official name confirmed
- [ ] Copper wire: exact approved wording for the bobinage claim
- [ ] Real photos with alt text, and datasheets, for every product
- [ ] Company details in `data/company.ts` (address, phone, email, hours)
- [ ] Decide what to do with `/a-propos`, `/applications`, `/documentation` and `/contact`: build them with real content, or remove them from `lib/navigation.ts`
- [ ] Replace the temporary home page

## Brand
- [ ] Logo spelling: the logo reads "INDUSTRIE", the name is "YB INDUSTRIES". Corrected file or a written decision
- [ ] Vector (SVG) logo if available
- [ ] Favicon
- [ ] Decide whether the company name appears as text next to the logo in the header

## SEO
- [ ] Production domain, then add `metadataBase` in `app/layout.tsx`
- [ ] Change `app/robots.ts` to allow crawling and point to the sitemap
- [ ] Add `app/sitemap.ts`
- [ ] Meaningful title and description on every page, using approved wording only
- [ ] Final 404 page

## Performance
- [ ] Logo: about 630 KB at 64 px display size, with a preload warning in the console
- [ ] Product images prepared as described in `docs/catalogue.md`
- [ ] Largest JS chunk was about 229 KB, check again

## Accessibility
- [ ] Manual keyboard pass on every page type: visible outline on every stop, skip link works
- [ ] Recheck contrast if any colour token changes

## Technical
- [ ] Search the source for `temporaire`, `TEMPORARY` and `(test)`: zero hits
- [ ] Search the source for the em dash character: zero hits in website copy
- [ ] `npm run lint`, `npx tsc --noEmit` and `npm run build` pass
- [ ] Cloudflare Pages settings match the README (build command, output directory `out`, Node 22)
- [ ] Open `out/` and check that no test page exists