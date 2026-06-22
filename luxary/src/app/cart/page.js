"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-5xl font-light">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="mx-auto mt-24 flex max-w-2xl flex-col items-center text-center">
          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-neutral-200">
            👜
          </div>

          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
            Shopping Bag
          </p>

          <h2 className="text-5xl font-light">Your Collection Begins Here</h2>

          <p className="mt-6 max-w-xl text-neutral-600">
            Curate a selection of exceptional creations and continue your luxury
            journey.
          </p>

          <Link
            href="/products"
            className="mt-10 rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
          >
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="mt-10 space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border p-6"
            >
              <div className="flex items-center gap-6">
                <div className="relative h-24 w-24 overflow-hidden rounded-lg border">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h2 className="text-2xl">{item.name}</h2>

                  <p className="mt-2 text-neutral-500">{item.brand}</p>

                  <div className="mt-3 flex items-center gap-3">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 transition hover:border-black hover:bg-black hover:text-white"
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 transition hover:border-black hover:bg-black hover:text-white"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="mt-3 text-sm text-neutral-500 transition hover:text-black"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <p className="text-xl font-medium">
                ₹{item.price.toLocaleString("en-IN")}
              </p>
            </div>
          ))}

          <div className="rounded-2xl border p-8">
            <h2 className="mb-6 text-2xl font-medium">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Total Items</span>
                <span>
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>

              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span>₹0</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>₹0</span>
              </div>

              <div className="border-t pt-4 mt-4 flex justify-between text-2xl font-medium">
                <span>Total</span>
                <span>₹{totalPrice.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="mt-8 block w-full rounded-full bg-black px-6 py-4 text-center text-white transition hover:opacity-90"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
        // </div>
      )}
    </main>
  );
}
