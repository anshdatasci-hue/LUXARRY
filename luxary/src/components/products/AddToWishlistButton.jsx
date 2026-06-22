"use client";

import { useWishlist } from "@/context/WishlistContext";

export default function AddToWishlistButton({ product }) {
  const { addToWishlist, isInWishlist } = useWishlist();

  return (
    <button
      onClick={() => addToWishlist(product)}
      className="mt-4 rounded-full border px-6 py-3 text-sm transition hover:bg-black hover:text-white"
    >
      {isInWishlist(product.id)
        ? "♥ Saved to Wishlist"
        : "♡ Add to Wishlist"}
    </button>
  );
}