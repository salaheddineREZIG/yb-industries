import type { Metadata } from "next";
import Link from "next/link";
import { ProductList } from "@/components/catalogue/product-list";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { getCategories, getProductsByCategory } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: "Produits",
};

export default function ProductsPage() {
  return (
    <SiteShell>
      <PageHeader title="Produits" />
      {getCategories().map((category) => (
        <Section key={category.id}>
          <h2 className="text-section-title font-semibold">
            <Link
              href={`/categories/${category.slug}`}
              className="underline-offset-4 hover:underline"
            >
              {category.name}
            </Link>
          </h2>
          {category.shortDescription && (
            <p className="mt-3 max-w-3xl text-muted-foreground">
              {category.shortDescription}
            </p>
          )}
          <div className="mt-6">
            <ProductList products={getProductsByCategory(category.id)} />
          </div>
        </Section>
      ))}
    </SiteShell>
  );
}