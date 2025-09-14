"use client";

import { useCart } from "@/lib/cart-context";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

export default function CartPage() {
  const router = useRouter();
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
  };

  const handleApplyCoupon = () => {
    // Simulate coupon application
    if (couponCode.toLowerCase() === "discount10") {
      setCouponApplied(true);
      setCouponDiscount(getCartTotal() * 0.1); // 10% discount
    } else {
      alert("Invalid coupon code");
    }
  };

  const subtotal = getCartTotal();
  const deliveryCharge = subtotal > 999 ? 0 : 99;
  const total = subtotal - couponDiscount + deliveryCharge;

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-100 p-6 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="cart-text mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            href="/products"
            className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 cart-page">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold">Cart Items ({cart.length})</h2>
            </div>

            {/* Item List */}
            <div>
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                  className="flex flex-col sm:flex-row p-4 border-b last:border-0"
                >
                  {/* Product Image */}
                  <div className="sm:w-24 h-24 mb-4 sm:mb-0 relative">
                    <Image
                      src={item.images[0] || "https://res.cloudinary.com/ddwbbzuxw/image/upload/v1695828534/placeholder_ytvkqk.jpg"}
                      alt={item.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 sm:ml-4">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium cart-text-bold">{item.brand}</h3>
                        <p className="text-sm cart-text">{item.title}</p>
                        
                        {/* Size and Color */}
                        <div className="mt-1 text-sm cart-text">
                          {item.selectedSize && <span className="mr-2">Size: {item.selectedSize}</span>}
                          {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                        </div>
                      </div>
                      
                      {/* Remove Button (Mobile) */}
                      <button
                        className="sm:hidden text-gray-400 hover:text-red-500"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <FaTrash size={16} />
                      </button>
                    </div>

                    {/* Price and Quantity Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <div className="border rounded flex items-center">
                          <button
                            className="px-2 py-1 text-gray-600"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            <FaMinus size={12} />
                          </button>
                          <span className="px-3 py-1 border-l border-r min-w-[40px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            className="px-2 py-1 text-gray-600"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>
                        
                        {/* Remove Button (Desktop) */}
                        <button
                          className="hidden sm:block ml-4 text-gray-400 hover:text-red-500"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <FaTrash size={16} />
                        </button>
                      </div>
                      
                      {/* Price */}
                      <div className="text-right">
                        <div className="font-semibold cart-text-bold">₹{item.price * item.quantity}</div>
                        {item.originalPrice && (
                          <div className="flex items-center text-sm">
                            <span className="text-gray-700 line-through mr-1">
                              ₹{item.originalPrice * item.quantity}
                            </span>
                            <span className="text-green-700">{item.discount} off</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-4 sticky top-4">
            <h2 className="text-lg font-semibold border-b pb-2 mb-4 cart-text-bold">Order Summary</h2>

            {/* Coupon */}
            <div className="mb-4">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="flex-1 px-3 py-2 border rounded-l focus:outline-none focus:ring-1 focus:ring-pink-500"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  disabled={couponApplied}
                />
                <button
                  className={`px-3 py-2 text-white rounded-r ${
                    couponApplied
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-pink-500 hover:bg-pink-600"
                  }`}
                  onClick={handleApplyCoupon}
                  disabled={couponApplied}
                >
                  {couponApplied ? "Applied" : "Apply"}
                </button>
              </div>
              {couponApplied && (
                <div className="mt-2 text-sm text-green-500">
                  Coupon applied successfully! You saved ₹{couponDiscount.toFixed(2)}
                </div>
              )}
            </div>

            {/* Price Breakdown */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-between cart-text">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              
              {couponApplied && (
                <div className="flex justify-between text-green-700">
                  <span>Coupon Discount</span>
                  <span>-₹{couponDiscount.toFixed(2)}</span>
                </div>
              )}
              
              <div className="flex justify-between cart-text">
                <span>Delivery Charge</span>
                <span>
                  {deliveryCharge === 0 ? (
                    <span className="text-green-700">FREE</span>
                  ) : (
                    `₹${deliveryCharge.toFixed(2)}`
                  )}
                </span>
              </div>
              
              <div className="flex justify-between font-semibold text-base pt-2 border-t mt-2 cart-text-bold">
                <span>Total Amount</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <div className="mt-6">
              <button
                className="w-full py-3 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors"
                onClick={() => router.push("/checkout")}
              >
                PROCEED TO CHECKOUT
              </button>
              
              <Link
                href="/products"
                className="w-full text-center block mt-3 text-pink-500 hover:text-pink-600"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
