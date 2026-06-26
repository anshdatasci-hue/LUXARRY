"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { placeOrder } from "@/lib/orders/actions";

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const handlePlaceOrder = async () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    if (!name.trim()) return alert("Please enter your name");
    if (!email.trim()) return alert("Please enter your email");
    if (!phone.trim()) return alert("Please enter your phone number");
    if (!address.trim()) return alert("Please enter your address");
    if (!city.trim()) return alert("Please enter your city");
    if (!state.trim()) return alert("Please enter your state");
    if (!postalCode.trim()) return alert("Please enter your postal code");
    if (!country.trim()) return alert("Please enter your country");

    const success = await placeOrder({
      name,
      email,
      phone,
      address,
      city,
      state,
      postalCode,
      country,
      items: cartItems,
      total: cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      ),
    });

    if (!success) {
      alert("Failed to place order.");
      return;
    }

    router.push("/order-success");
  };

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-5xl font-light">Checkout</h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-2xl">Contact Information</h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border p-4"
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border p-4"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border p-4"
              />
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl">Shipping Address</h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Address Line 1"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full rounded-xl border p-4"
              />

              <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-xl border p-4"
              />

              <input
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full rounded-xl border p-4"
              />

              <input
                type="text"
                placeholder="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-full rounded-xl border p-4"
              />

              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-xl border p-4"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border p-8">
          <h2 className="text-2xl font-medium">Order Summary</h2>

          <div className="mt-6 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between border-b pb-4">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-neutral-500">
                    Qty: {item.quantity}
                  </p>
                </div>

                <p>₹{(item.price * item.quantity).toLocaleString("en-IN")}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between border-t pt-6 text-xl font-medium">
            <span>Total</span>
            <span>
              ₹
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toLocaleString("en-IN")}
            </span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-8 w-full rounded-full bg-black px-6 py-4 text-white transition hover:opacity-90"
          >
            Place Order
          </button>
        </div>
      </div>
    </main>
  );
}
