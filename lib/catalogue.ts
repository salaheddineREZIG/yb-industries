import { categories, subcategories } from "@/data/categories";
import { products } from "@/data/products";
import type { Category, Product, Subcategory } from "@/types/catalogue";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// Runs when this module is first loaded, so a mistake in the data fails the build.
// Messages are for developers, not website copy.
function validateCatalogue(): void {
  const errors: string[] = [];

  function checkUnique(label: string, values: readonly string[]) {
    const seen = new Set<string>();
    for (const value of values) {
      if (seen.has(value)) errors.push(`${label} is duplicated: "${value}"`);
      seen.add(value);
    }
  }

  function checkSlug(label: string, slug: string) {
    if (!SLUG_PATTERN.test(slug)) {
      errors.push(
        `${label} has an invalid slug (lowercase letters, digits, hyphens): "${slug}"`,
      );
    }
  }

  checkUnique("Category id", categories.map((c) => c.id));
  checkUnique("Category slug", categories.map((c) => c.slug));
  checkUnique("Subcategory id", subcategories.map((s) => s.id));
  checkUnique("Subcategory slug", subcategories.map((s) => s.slug));
  checkUnique("Product slug", products.map((p) => p.slug));

  const categoryIds = new Set(categories.map((c) => c.id));
  const productSlugs = new Set(products.map((p) => p.slug));

  for (const category of categories) {
    checkSlug(`Category "${category.id}"`, category.slug);
  }

  for (const subcategory of subcategories) {
    checkSlug(`Subcategory "${subcategory.id}"`, subcategory.slug);
    if (!categoryIds.has(subcategory.categoryId)) {
      errors.push(
        `Subcategory "${subcategory.id}" refers to an unknown category: "${subcategory.categoryId}"`,
      );
    }
  }

  for (const product of products) {
    const label = `Product "${product.slug}"`;
    checkSlug(label, product.slug);

    if (!categoryIds.has(product.categoryId)) {
      errors.push(`${label} refers to an unknown category: "${product.categoryId}"`);
    }

    if (product.subcategoryId !== undefined) {
      const subcategory = subcategories.find((s) => s.id === product.subcategoryId);
      if (!subcategory) {
        errors.push(
          `${label} refers to an unknown subcategory: "${product.subcategoryId}"`,
        );
      } else if (subcategory.categoryId !== product.categoryId) {
        errors.push(`${label} uses a subcategory that belongs to another category`);
      }
    }

    for (const related of product.relatedProducts ?? []) {
      if (related === product.slug) {
        errors.push(`${label} lists itself as a related product`);
      } else if (!productSlugs.has(related)) {
        errors.push(`${label} refers to an unknown related product: "${related}"`);
      }
    }

    for (const image of product.images ?? []) {
      if (image.alt.trim() === "") {
        errors.push(`${label} has an image without alt text: "${image.src}"`);
      }
    }
  }

  if (errors.length > 0) {
    throw new Error(`Invalid catalogue data:\n- ${errors.join("\n- ")}`);
  }
}

validateCatalogue();

export function getCategories(): readonly Category[] {
  return categories;
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getSubcategoryById(id: string): Subcategory | undefined {
  return subcategories.find((s) => s.id === id);
}

export function getSubcategoriesOf(categoryId: string): Subcategory[] {
  return subcategories.filter((s) => s.categoryId === categoryId);
}

export function getProducts(): readonly Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((p) => p.categoryId === categoryId);
}

export function getRelatedProducts(product: Product): Product[] {
  return (product.relatedProducts ?? []).flatMap((slug) => {
    const related = getProductBySlug(slug);
    return related ? [related] : [];
  });
}