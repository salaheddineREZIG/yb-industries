# Catalogue data guide (developers only)

This document is internal. Nothing here is published on the website.

## Where the data lives

| File | Content |
| --- | --- |
| `data/categories.ts` | `categories` and `subcategories` |
| `data/products.ts` | `products` |
| `data/company.ts` | Contact details shown in the footer |
| `types/catalogue.ts` | Field definitions (provisional until the real catalogue is reviewed) |
| `lib/catalogue.ts` | Lookup helpers and build-time validation |

Pages are generated from this data: `/produits`, `/categories/[slug]` and `/produits/[slug]`. Never create a page by hand for one product.

## Rules

- Website copy is French only. No em dash.
- Only use information supplied by the company. No invented specifications, claims, statistics, certifications, partners or applications.
- Only `slug`, `name` and `categoryId` are required on a product. A field that is missing or empty is simply not displayed.
- Array order is display order.
- A slug uses lowercase letters, digits and single hyphens, for example `moteur-triphase-15`. It becomes a public URL, so do not change it once the site is published.
- Category and subcategory ids are internal keys. Products refer to them, and the build fails if a reference is broken.
- A product's subcategory must belong to the product's category.
- Specification values include their unit: `{ label: "Puissance", value: "15 kW" }`.

## Adding a category

In `data/categories.ts`:

```ts
{
  id: "moteurs",
  slug: "moteurs",
  name: "Moteurs",
  shortDescription: "...", // optional, company wording only
}
```

## Adding a product

In `data/products.ts`:

```ts
{
  slug: "exemple-de-produit",
  name: "Nom du produit",
  categoryId: "moteurs",
  subcategoryId: "...", // optional
  shortDescription: "...",
  images: [
    {
      src: "/images/products/exemple-de-produit/face.jpg",
      alt: "Description de ce que montre la photo",
    },
  ],
  specifications: [{ label: "Puissance", value: "15 kW" }],
  documents: [{ label: "Fiche technique", href: "/documents/exemple-de-produit.pdf" }],
  relatedProducts: ["autre-slug"],
}
```

## Images

- Real photographs only. Confirm the company may use them.
- Put them in `public/images/products/<product-slug>/`. Lowercase names, hyphens, no spaces.
- JPG or WebP, about 1600 px on the long side, under roughly 300 KB. The static export cannot optimize images, so prepare them before committing.
- Same aspect ratio across products (4:3), plain background.
- Alt text is required. Write it in French, describe what is visible, and do not start with "image de".

## Documents

- Put PDFs in `public/documents/`, with clear lowercase names.
- Reference them as `/documents/<file>.pdf`.

## Build-time validation

`lib/catalogue.ts` checks the data whenever the site is built or the dev server loads it. A mistake fails the build with a list of messages:

| Message contains | Meaning |
| --- | --- |
| `is duplicated` | Two categories, subcategories or products share an id or slug |
| `invalid slug` | The slug has capitals, spaces, accents or symbols |
| `unknown category` / `unknown subcategory` | A reference points to an id that does not exist |
| `belongs to another category` | The subcategory is not under the product's category |
| `unknown related product` | A slug in `relatedProducts` does not exist |
| `lists itself` | A product is related to itself |
| `image without alt text` | An image has an empty `alt` |

## Workflow

1. Edit the data files and add images or documents.
2. Run `npm run lint`, `npx tsc --noEmit` and `npm run build`.
3. Check the pages locally with `npm run dev`.
4. Commit and push.