// PROVISIONAL data model, based on the project handoff. It is reviewed against the
// real catalogue before it is considered final. Only slug, name and categoryId are
// required on a product. Every other field is optional: an empty or missing field
// must simply not render on the page.

export type ImageAsset = {
  /** Path under /public, for example "/images/products/example.jpg". */
  src: string;
  /** French description of the image. Required for accessibility and SEO. */
  alt: string;
};

export type Specification = {
  label: string;
  value: string;
};

export type ProductDocument = {
  label: string;
  /** Path under /public/documents, for example "/documents/example.pdf". */
  href: string;
};

export type Category = {
  /** Stable internal key. A plain string on purpose: category names are not final. */
  id: string;
  /** Used in the URL: /categories/[slug]. */
  slug: string;
  name: string;
  shortDescription?: string;
  image?: ImageAsset;
};

export type Subcategory = {
  id: string;
  categoryId: string;
  slug: string;
  name: string;
  shortDescription?: string;
};

export type Product = {
  /** Used in the URL: /produits/[slug]. */
  slug: string;
  name: string;
  categoryId: string;
  subcategoryId?: string;
  shortDescription?: string;
  description?: string;
  images?: readonly ImageAsset[];
  specifications?: readonly Specification[];
  applications?: readonly string[];
  features?: readonly string[];
  documents?: readonly ProductDocument[];
  /** Slugs of other products. */
  relatedProducts?: readonly string[];
  pumpTechnicalData?: PumpTechnicalData;
};

export type PerformancePoint = {
  debitLMin: number;
  debitM3H: number;
  hauteurManometriqueM: number;
};

export type PumpTechnicalData = {
  type: string;
  tension: string;
  frequenceHz: number;
  uniteHauteur: string;
  uniteDebit: string;
  nombreEtages: number;
  puissanceKw: number;
  puissanceCh: number;
  courantNominalA: number;
  performance: readonly PerformancePoint[];
};