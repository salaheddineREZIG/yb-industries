import Image from "next/image";
import Link from "next/link";
import { PlaceholderImage } from "@/components/ui/placeholder-image";
import type { Product } from "@/types/catalogue";

// Renders product cards. Put it under an h2: each card title is an h3.
export function ProductList({ products }: { products: readonly Product[] }) {
  if (products.length === 0) return null;

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const image = product.images?.[0];

        return (
          <li key={product.slug} className="animate-rise-in">
            <Link
              href={`/produits/${product.slug}`}
              className="group block h-full overflow-hidden border border-border bg-background transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_12px_30px_rgb(7_89_133_/_0.12)]"
            >
              {image ? (
                <div className="relative aspect-[4/3] bg-surface transition-colors duration-200 group-hover:bg-surface-secondary">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 22rem, (min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              ) : (
                <div aria-hidden="true">
                  <PlaceholderImage />
                </div>
              )}
              <div className="border-t border-border p-5">
                <h3 className="text-subsection-title font-semibold text-foreground transition-colors group-hover:text-primary">
                  {product.name}
                </h3>
                {product.shortDescription && (
                  <p className="mt-2 text-meta text-muted-foreground">
                    {product.shortDescription}
                  </p>
                )}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}