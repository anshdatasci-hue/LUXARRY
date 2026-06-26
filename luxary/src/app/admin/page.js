import DashboardStats from "./components/DashboardStats";
import OrderTable from "./components/OrderTable";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-neutral-100 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-light">Luxary Admin Dashboard</h1>

        <DashboardStats />

        <div className="mt-10">
          <OrderTable />
        </div>
      </div>
    </main>
  );
}
