import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductList } from "@/components/catalogue/product-list";
import { SiteShell } from "@/components/layout/site-shell";
import { PageHeader } from "@/components/ui/page-header";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import { Section } from "@/components/ui/section";
import {
  getCategoryById,
  getProductBySlug,
  getProducts,
  getRelatedProducts,
  getSubcategoryById,
} from "@/lib/catalogue";

type Props = { params: Promise<{ slug: string }> };

// Static export: only the slugs listed here exist.
export const dynamicParams = false;

export function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product?.name, description: product?.shortDescription };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryById(product.categoryId);
  const subcategory = product.subcategoryId
    ? getSubcategoryById(product.subcategoryId)
    : undefined;
  const images = product.images ?? [];
  const features = product.features ?? [];
  const applications = product.applications ?? [];
  const specifications = product.specifications ?? [];
  const documents = product.documents ?? [];
  const related = getRelatedProducts(product);

  return (
    <SiteShell>
      <PageHeader title={product.name} description={product.shortDescription} />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            {images.length > 0 ? (
              images.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/3] border border-border bg-surface"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 36rem, 100vw"
                    className="object-contain"
                  />
                </div>
              ))
            ) : (
              <PlaceholderImage />
            )}
          </div>

          <div>
            {category && (
              <p className="text-meta text-muted-foreground">
                <Link
                  href={`/categories/${category.slug}`}
                  className="underline underline-offset-4"
                >
                  {category.name}
                </Link>
                {subcategory && ` / ${subcategory.name}`}
              </p>
            )}

            {product.description && (
              <p className="mt-4 max-w-3xl">{product.description}</p>
            )}

            {features.length > 0 && (
              <>
                <h2 className="mt-8 text-section-title font-semibold">
                  Caractéristiques
                </h2>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  {features.map((feature, index) => (
                    <li key={`${feature}-${index}`}>{feature}</li>
                  ))}
                </ul>
              </>
            )}

            {applications.length > 0 && (
              <>
                <h2 className="mt-8 text-section-title font-semibold">
                  Applications
                </h2>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  {applications.map((application, index) => (
                    <li key={`${application}-${index}`}>{application}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </Section>

      {(specifications.length > 0 || documents.length > 0) && (
        <Section tone="surface">
          {specifications.length > 0 && (
            <>
              <h2 className="text-section-title font-semibold">
                Caractéristiques techniques
              </h2>
              <div className="mt-6 overflow-x-auto">
                <table className="w-full max-w-3xl border-collapse text-left">
                  <caption className="sr-only">
                    Caractéristiques techniques de {product.name}
                  </caption>
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr
                        key={`${spec.label}-${index}`}
                        className="border-b border-border"
                      >
                        <th
                          scope="row"
                          className="w-1/2 py-3 pr-4 align-top font-medium"
                        >
                          {spec.label}
                        </th>
                        <td className="py-3 align-top">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {documents.length > 0 && (
            <>
              <h2
                className={`text-section-title font-semibold ${
                  specifications.length > 0 ? "mt-10" : ""
                }`}
              >
                Documents
              </h2>
              <ul className="mt-4 space-y-2">
                {documents.map((document, index) => (
                  <li key={`${document.href}-${index}`}>
                    <a
                      href={document.href}
                      className="underline underline-offset-4"
                    >
                      {document.label}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </Section>
      )}

      {related.length > 0 && (
        <Section>
          <h2 className="text-section-title font-semibold">Produits associés</h2>
          <div className="mt-6">
            <ProductList products={related} />
          </div>
        </Section>
      )}
    </SiteShell>
  );
}