import type { Category, Subcategory } from "@/types/catalogue";

// TEMPORARY development data. This is NOT company content. Replace it with the real
// categories when the catalogue is supplied, and never deploy it publicly.
// Array order is display order.

export const categories: readonly Category[] = [
  {
    id: "categorie-test",
    slug: "categorie-test",
    name: "Catégorie de test (temporaire)",
  },
];

export const subcategories: readonly Subcategory[] = [
  {
    id: "sous-categorie-test",
    categoryId: "categorie-test",
    slug: "sous-categorie-test",
    name: "Sous-catégorie de test (temporaire)",
  },
];
