"use client";

import { useEffect, useState } from "react";

export default function OrderTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    try {
      const res = await fetch("/api/admin/orders");
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error(err);
    }
  }

  if (orders.length === 0) {
    return (
      <div className="rounded-xl border bg-white p-8">
        No orders found.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border bg-white">

      <table className="min-w-full">

        <thead className="border-b bg-neutral-100">

          <tr>
            <th className="p-4 text-left">Customer</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Total</th>
            <th className="p-4 text-left">Status</th>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Actions</th>
          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr key={order.id} className="border-b">

              <td className="p-4">{order.customer_name}</td>

              <td className="p-4">{order.email}</td>

              <td className="p-4">{order.phone}</td>

              <td className="p-4">
                ₹{Number(order.total).toLocaleString("en-IN")}
              </td>

              <td className="p-4">{order.status}</td>

              <td className="p-4">
                {new Date(order.created_at).toLocaleDateString()}
              </td>

              <td className="p-4">

                <button
                  className="mr-2 rounded bg-blue-600 px-3 py-1 text-white"
                  onClick={() =>
                    alert(JSON.stringify(order.items, null, 2))
                  }
                >
                  View
                </button>

                <button
                  className="rounded bg-red-600 px-3 py-1 text-white"
                  onClick={() =>
                    alert("Delete button coming next")
                  }
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}