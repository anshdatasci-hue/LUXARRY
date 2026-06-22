"use client";

// import Link from "next/link";
import Link from "next/link";
import Image from "next/image";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <main className="mx-auto max-w-4xl px-6 py-32 text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-neutral-200">
          ♡
        </div>

        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Curated Collection
        </p>

        <h1 className="text-5xl font-light">Your Wishlist Awaits</h1>

        <p className="mx-auto mt-6 max-w-xl text-neutral-600">
          Save exceptional creations and return whenever inspiration calls.
        </p>

        <Link
          href="/products"
          className="mt-10 inline-flex rounded-full border border-black px-8 py-4 text-sm transition hover:bg-black hover:text-white"
        >
          Explore Products
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <h1 className="mb-12 text-5xl font-light">Wishlist</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {wishlistItems.map((product) => (
          <div key={product.id} className="overflow-hidden rounded-2xl border">
            <div className="relative h-64">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <p className="text-sm text-neutral-500">{product.brand}</p>

              <h2 className="mt-2 text-xl">{product.name}</h2>

              <p className="mt-3">₹{product.price.toLocaleString("en-IN")}</p>

              <div className="mt-6 flex flex-col gap-3">
                <button
                  onClick={() => {
                    addToCart(product);
                    removeFromWishlist(product.id);
                  }}
                  className="rounded-lg bg-black px-4 py-3 text-white"
                >
                  Move To Cart
                </button>

                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="rounded-lg border px-4 py-3"
                >
                  Remove
                </button>

                <Link
                  href={`/products/${product.slug}`}
                  className="rounded-lg border px-4 py-3 text-center"
                >
                  View Product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
