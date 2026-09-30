import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductList } from "@/components/catalogue/product-list";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import {
  getCategoryBySlug,
  getProductsBySubcategory,
  getSubcategoriesOf,
  getSubcategoryBySlug,
} from "@/lib/catalogue";

type Props = { params: Promise<{ slug: string; subcategory: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getSubcategoriesOf("pompes").map((subcategory) => ({
    slug: subcategory.categoryId,
    subcategory: subcategory.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { subcategory } = await params;
  const item = getSubcategoryBySlug(subcategory);
  return { title: item?.name, description: item?.shortDescription };
}

export default async function SubcategoryPage({ params }: Props) {
  const { slug: categorySlug, subcategory: subcategorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  const subcategory = getSubcategoryBySlug(subcategorySlug);

  if (!category || !subcategory || subcategory.categoryId !== category.id) {
    notFound();
  }

  const products = getProductsBySubcategory(subcategory.id);

  return (
    <SiteShell>
      <PageHeader
        title={subcategory.name}
        description={subcategory.shortDescription}
      />
      <Section>
        <p className="text-meta text-muted-foreground">
          <Link
            href={`/categories/${category.slug}`}
            className="underline underline-offset-4"
          >
            {category.name}
          </Link>
        </p>
        <h2 className="mt-6 text-section-title font-semibold">Produits</h2>
        <div className="mt-6">
          {products.length > 0 ? (
            <ProductList products={products} />
          ) : (
            <p className="text-muted-foreground">Aucun produit pour le moment.</p>
          )}
        </div>
      </Section>
    </SiteShell>
  );
}
