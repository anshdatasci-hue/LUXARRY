"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => {
        // alert("CART CLICKED");
        addToCart(product);
      }}
      className="mt-10 rounded-full border border-black px-8 py-4"
    >
      Add To Cart
    </button>
  );
}