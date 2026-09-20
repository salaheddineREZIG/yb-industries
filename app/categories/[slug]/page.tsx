import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductList } from "@/components/catalogue/product-list";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import {
  getCategories,
  getCategoryBySlug,
  getProductsByCategory,
} from "@/lib/catalogue";

type Props = { params: Promise<{ slug: string }> };

// Static export: only the slugs listed here exist.
export const dynamicParams = false;

export function generateStaticParams() {
  return getCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  return { title: category?.name };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.id);

  return (
    <SiteShell>
      <PageHeader
        title={category.name}
        description={category.shortDescription}
      />
      <Section>
        <h2 className="text-section-title font-semibold">Produits</h2>
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