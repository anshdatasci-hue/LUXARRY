// import Image from "next/image";
// import { products } from "@/data/products";
import { getProduct, getProducts } from "@/lib/products";
import AddToCartButton from "@/components/products/AddToCartButton";
// import AddToCartButton from "@/components/products/AddToCartButton";
import ProductGallery from "@/components/products/ProductGallery";
import AddToWishlistButton from "@/components/products/AddToWishlistButton";
import ProductCard from "@/components/products/ProductCard";
// import Image from "next/image";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = await getProduct(slug);

  const allProducts = await getProducts();

  const relatedProducts = allProducts
    .filter((item) => item.id !== product?.id)
    .slice(0, 4);

  if (!product) {
    return (
      <main className="mx-auto max-w-7xl px-8 py-20">
        <h1 className="text-4xl">Product Not Found</h1>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-16 lg:grid-cols-2 relative z-50">
        <ProductGallery images={[product.image]} />

        <div className="relative z-50">
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em]">
              {product.brand}
            </span>
            <span className="rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-500">
              Luxury Product
            </span>
          </div>
          <h1 className="text-5xl font-light">{product.name}</h1>
          <p className="mt-6 text-3xl font-medium">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
          <div className="mt-10 space-y-8">
            <section>
              <h2 className="mb-3 text-lg font-medium">Description</h2>

              <p className="leading-relaxed text-neutral-600">
                {product.description}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">Heritage</h2>

              <p>Heritage information coming soon.</p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-medium">Craftsmanship</h2>

              <p>Craftsmanship information coming soon.</p>
            </section>

            <AddToCartButton product={product} />
            <AddToWishlistButton product={product} />
          </div>
        </div>
      </div>
      <section className="mt-32">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            Recommended
          </p>

          <h2 className="mt-3 text-4xl font-light">You May Also Like</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
