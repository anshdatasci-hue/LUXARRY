"use client";

import { useWishlist } from "@/context/WishlistContext";

export default function AddToWishlistButton({ product }) {
  const wishlist = useWishlist();

  // console.log("WISHLIST HOOK:", wishlist);

  return (
    <button
      onClick={() => {
        // alert("WISHLIST CLICKED");

        wishlist.addToWishlist(product);
      }}
      className="mt-4 rounded-full border px-6 py-3"
    >
      Add To Wishlist
    </button>
  );
}