import type { Product } from "@/types/catalogue";

// TEMPORARY development data. This is NOT company content. Replace it with the real
// products when the catalogue is supplied, and never deploy it publicly.
// Array order is display order.

export const products: readonly Product[] = [
  {
    slug: "produit-test-1",
    name: "Produit de test 1 (temporaire)",
    categoryId: "categorie-test",
    subcategoryId: "sous-categorie-test",
    shortDescription: "Description courte de test. Contenu temporaire.",
    relatedProducts: ["produit-test-2"],
  },
  {
    slug: "produit-test-2",
    name: "Produit de test 2 (temporaire)",
    categoryId: "categorie-test",
    shortDescription: "Description courte de test. Contenu temporaire.",
  },
];