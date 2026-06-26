import OrderTable from "../components/OrderTable";

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-neutral-100 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-light">Orders</h1>

        <OrderTable />
      </div>
    </main>
  );
}
