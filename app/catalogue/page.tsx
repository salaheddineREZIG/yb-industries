import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { getCategories } from "@/lib/catalogue";

export const metadata: Metadata = {
  title: "Catalogue",
};

export default function CataloguePage() {
  return (
    <SiteShell>
      <PageHeader
        title="Catalogue"
        description="Choisissez une famille de produits pour parcourir ses références."
      />
      <Section>
        <ul className="grid gap-6 md:grid-cols-3">
          {getCategories().map((category) => (
            <li key={category.id}>
              <Link
                href={`/categories/${category.slug}`}
                className="block h-full border border-border p-6 hover:border-border-strong"
              >
                <h2 className="text-section-title font-semibold">
                  {category.name}
                </h2>
                {category.shortDescription && (
                  <p className="mt-3 text-muted-foreground">
                    {category.shortDescription}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </SiteShell>
  );
}