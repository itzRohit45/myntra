"use client";

import Link from "next/link";
import { FaShoppingBag } from "react-icons/fa";

interface Order {
  id: string;
  orderDate: string;
  status: string;
  total: number;
  items: number;
}

export default function OrdersPage() {
  // In a real application, this data would come from an API
  const orders: Order[] = [];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

      {orders.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gray-100 p-6 rounded-full">
              <FaShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">No orders found</h2>
          <p className="text-gray-600 mb-6">
            Looks like you haven't placed any orders yet.
          </p>
          <Link
            href="/products"
            className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm">
          {orders.map((order) => (
            <div key={order.id} className="border-b last:border-0 p-6">
              {/* Order details would be rendered here */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
