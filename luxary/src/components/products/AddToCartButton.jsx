"use client";

import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const { triggerToast } = useToast();

  return (
    <button
      onClick={() => {
        addToCart(product);
        triggerToast(`${product.name} added to cart`);
      }}
      className="mt-10 rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
    >
      Add to Cart
    </button>
  );
}