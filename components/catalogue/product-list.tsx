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
          <li key={product.slug}>
            <Link
              href={`/produits/${product.slug}`}
              className="block h-full border border-border hover:border-border-strong"
            >
              {image ? (
                <div className="relative aspect-[4/3] bg-surface">
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
              <div className="p-4">
                <h3 className="text-subsection-title font-semibold">
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