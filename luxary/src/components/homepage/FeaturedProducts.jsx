import ProductCard from "../products/ProductCard";
import { featuredProducts } from "../../data/products";
import Link from "next/link";

export default function FeaturedProducts() {
  const products = featuredProducts.slice(0, 4);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
            Curated Collection
          </p>

          <h2 className="text-4xl font-light">
            Featured Products
          </h2>

          <p className="mt-4 max-w-2xl text-neutral-600">
            Discover iconic luxury pieces from the world's most celebrated maisons.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
  href="/products"
  className="inline-flex items-center rounded-full border border-black px-6 py-3 text-sm transition-all hover:bg-black hover:text-white"
>
  View All Products →
</Link>
        </div>
      </div>
    </section>
  );
}