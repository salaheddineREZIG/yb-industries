import type { Category, Subcategory } from "@/types/catalogue";

// TEMPORARY development data. This is NOT company content. Replace it with the real
// categories when the catalogue is supplied, and never deploy it publicly.
// Array order is display order.

export const categories: readonly Category[] = [
  {
    id: "moteurs",
    slug: "moteurs",
    name: "Moteurs",
    shortDescription: "Moteurs submersibles 6 pouces et 8 pouces.",
  },
  {
    id: "pompes",
    slug: "pompes",
    name: "Pompes",
    shortDescription: "Pompes triphasées pour différentes applications et hauteurs de refoulement.",
  },
  {
    id: "autres-produits",
    slug: "autres-produits",
    name: "Autres produits",
    shortDescription: "Fil isolé en cuivre et cavalier.",
  },
];

export const subcategories: readonly Subcategory[] = [
  {
    id: "yb17",
    categoryId: "pompes",
    slug: "yb17",
    name: "YB-17",
    shortDescription: "Pompes triphasées YB17, disponibles de 1 à 60 étages.",
  },
  
  {
    id: "yb30",
    categoryId: "pompes",
    slug: "yb30",
    name: "YB-30",
    shortDescription: "Pompes triphasées YB30, disponibles de 1 à 49 étages.",
  },
  {
    id: "yb46",
    categoryId: "pompes",
    slug: "yb46",
    name: "YB-46",
    shortDescription: "Pompes triphasées YB46, disponibles de 1 à 37 étages.",
  },
  {
    id: "yb60",
    categoryId: "pompes",
    slug: "yb60",
    name: "YB-60",
    shortDescription: "Pompes triphasées YB60, disponibles de 2 à 30 étages.",
  },
  {
    id: "yb77",
    categoryId: "pompes",
    slug: "yb77",
    name: "YB-77",
    shortDescription: "Pompes triphasées YB77, disponibles de 1 à 20 étages.",
  },
  {
    id: "yb95",
    categoryId: "pompes",
    slug: "yb95",
    name: "YB-95",
    shortDescription: "Pompes triphasées YB95, disponibles de 1 à 20 étages.",
  },
];

