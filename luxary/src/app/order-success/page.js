export default function OrderSuccessPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-light">Order Confirmed</h1>

      <p className="mt-6 max-w-xl text-neutral-500">
        Thank you for choosing Luxary. Your order has been successfully placed
        and is now being prepared.
      </p>

      <a
        href="/products"
        className="mt-10 rounded-full border border-black px-8 py-4 transition hover:bg-black hover:text-white"
      >
        Continue Shopping
      </a>
    </main>
  );
}
