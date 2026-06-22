"use client";

import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";


export default function ProductCard({ product }) {
  const { addToWishlist, isInWishlist } = useWishlist();
  return (
    <div className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:shadow-xl">
      
      {/* Product Image */}
      {/* <div className="relative aspect-[4/5] overflow-hidden"> */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
          {product.brand}
        </p>

        <h3 className="mt-2 text-lg font-medium text-neutral-900">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-neutral-500">
          {product.category}
        </p>

        <p className="mt-4 text-xl font-semibold text-neutral-900">
          ₹{product.price.toLocaleString("en-IN")}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <Link
            href={`/products/${product.slug}`}
            className="text-sm font-medium text-neutral-900 transition-opacity hover:opacity-70"
          >
          View Product →
          </Link>

          <button
             onClick={() => addToWishlist(product)}
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-900"
          >
          {isInWishlist(product.id) ? "♥ Saved" : "♡ Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
}